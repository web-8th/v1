import { buildConfirmationHtml, buildEmailHtml } from '@/lib/email';
import { checkSpam, sendSpamNotification } from '@/lib/spam';
import { Resend } from 'resend';

const budgetLabels: Record<string, string> = {
  'non-profit': "I'm a non-profit",
  'under-2k': 'Under $250',
  '2k-5k': '$250 - $500',
  '5k-10k': '$500 - $1,000',
  '10k-plus': '$1,000+',
};

export async function POST(req: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return Response.json(
      { success: false, error: 'Email service is not configured.' },
      { status: 500 }
    );
  }

  const body = await req.json().catch(() => null);
  const name = typeof body?.name === 'string' ? body.name.trim() : '';
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const message = typeof body?.message === 'string' ? body.message.trim() : '';
  const businessName =
    typeof body?.businessName === 'string' ? body.businessName.trim() : '';
  const budgetRange = typeof body?.budgetRange === 'string' ? body.budgetRange : '';

  if (!name || !email || !message) {
    return Response.json(
      { success: false, error: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }

  const resend = new Resend(resendApiKey);
  const toEmail = process.env.NEXT_PUBLIC_RESEND_EMAIL_TO || 'mail@rinm.dev';
  const fromEmail = process.env.NEXT_PUBLIC_RESEND_EMAIL_FROM || 'mail@rinm.dev';

  // Runs before any email goes out. Spam gets the same success response a real
  // customer would, so senders can't tell they were filtered.
  const spam = checkSpam({ website: body?.website, formElapsedMs: body?.formElapsedMs });
  if (spam.isSpam) {
    console.warn('Contact form submission dropped as spam:', {
      reason: spam.reason,
      email,
      name,
      message: message.slice(0, 300),
    });
    await sendSpamNotification(resend, {
      from: fromEmail,
      siteName: 'Web8th',
      reason: spam.reason ?? 'unknown',
      fields: {
        Name: name,
        Email: email,
        'Business name': businessName,
        'Budget range': budgetRange,
        'Honeypot (website)': body?.website,
        'Elapsed ms': body?.formElapsedMs ?? 'missing',
        Message: message,
      },
    });
    return Response.json({ success: true }, { status: 200 });
  }
  const logoUrl =
    'https://drive.google.com/uc?export=download&id=1ZH_A1lRxNfZgDiryP9yc2ARPGqmiICg5';

  const budgetLabel = budgetRange ? (budgetLabels[budgetRange] ?? budgetRange) : '';

  try {
    await Promise.all([
      resend.emails.send({
        from: `Web8th <${fromEmail}>`,
        to: toEmail,
        replyTo: email,
        subject: `New inquiry from ${name}`,
        html: buildEmailHtml({
          name,
          email,
          businessName: businessName || undefined,
          budgetRange: budgetLabel || undefined,
          message,
          logoUrl,
        }),
      }),
      resend.emails.send({
        from: `Web8th <${fromEmail}>`,
        to: email,
        subject: 'We received your message',
        html: buildConfirmationHtml({ name, logoUrl }),
      }),
    ]);
  } catch (error) {
    console.error('Error sending contact email:', error);
    return Response.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }

  return Response.json({ success: true }, { status: 200 });
}
