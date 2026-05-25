const COLORS = {
  background: '#fbf8f1',
  foreground: '#3d3826',
  primary: '#cb6441',
  muted: '#f1eee7',
  mutedForeground: '#85837d',
  accent: '#e7e4dd',
  border: '#e2e2da',
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const formatMessage = (value?: string) => {
  if (!value) return '';
  return escapeHtml(value).replace(/\r?\n/g, '<br />');
};

const getFirstName = (name: string) => {
  const trimmed = name.trim();
  if (!trimmed) return 'there';
  return trimmed.split(/\s+/)[0];
};

/**
 * Builds the HTML content for the contact form email.
 * @param param0 - An object containing the contact form values.
 * @returns A string of HTML representing the email content.
 */
export function buildEmailHtml({
  name,
  email,
  businessName,
  budgetRange,
  message,
  logoUrl,
}: {
  name: string;
  email: string;
  businessName?: string;
  budgetRange?: string;
  message?: string;
  logoUrl?: string;
}) {
  const optionalRow = (label: string, value?: string) =>
    value
      ? `
      <tr>
        <td style="color:${COLORS.mutedForeground};padding:6px 0;width:140px;vertical-align:top;font-family:Georgia, serif;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;">${label}</td>
        <td style="color:${COLORS.foreground};padding:6px 0;font-family:Georgia, serif;font-size:13px;">${value}</td>
      </tr>`
      : '';

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeBusinessName = businessName ? escapeHtml(businessName) : undefined;
  const safeBudgetRange = budgetRange ? escapeHtml(budgetRange) : undefined;
  const formattedMessage = message ? formatMessage(message) : undefined;
  const firstName = getFirstName(name);
  const logoMarkup = logoUrl
    ? `<div style="background:#000;padding:16px;border-radius:6px;">
        <img src="${logoUrl}" alt="Logo" style="display:block;width:100%;max-width:560px;height:auto;border-radius:4px;" />
      </div>`
    : '';

  const optionalMessage = formattedMessage
    ? `
    <div style="border-left:2px solid ${COLORS.primary};padding-left:1rem;margin-bottom:1.5rem;">
      <p style="font-size:12px;color:${COLORS.mutedForeground};margin:0 0 4px;font-family:Georgia, serif;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
      <p style="font-size:14px;color:${COLORS.foreground};margin:0;line-height:1.7;font-family:Georgia, serif;">${formattedMessage}</p>
    </div>`
    : '';

  return `
    <div style="font-family:Georgia, serif;max-width:560px;margin:0 auto;background:${COLORS.background};border:1px solid ${COLORS.border};border-radius:6px;overflow:hidden;">

      <div style="background:${COLORS.primary};padding:2rem;text-align:center;">
        <p style="color:${COLORS.background};font-size:24px;font-weight:400;margin:0;letter-spacing:0.05em;">You have a new inquiry</p>
      </div>

      <div style="padding:2rem;">
        <div style="background:${COLORS.accent};border:1px solid ${COLORS.border};border-radius:6px;padding:1.25rem;margin-bottom:1.5rem;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="color:${COLORS.mutedForeground};padding:6px 0;width:140px;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;">Name</td>
              <td style="color:${COLORS.foreground};font-weight:500;padding:6px 0;font-size:14px;">${safeName}</td>
            </tr>
            <tr>
              <td style="color:${COLORS.mutedForeground};padding:6px 0;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;">Email</td>
              <td style="color:${COLORS.foreground};padding:6px 0;font-size:14px;">${safeEmail}</td>
            </tr>
            ${optionalRow('Business', safeBusinessName)}
            ${optionalRow('Budget range', safeBudgetRange)}
          </table>
        </div>

        ${optionalMessage}

        <a href="mailto:${safeEmail}?subject=${encodeURIComponent(
          `Re: Your inquiry, ${firstName}`
        )}"
          style="display:block;text-align:center;background:${COLORS.primary};color:${COLORS.background};text-decoration:none;padding:14px;border-radius:6px;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;">
          Reply to ${escapeHtml(firstName)}
        </a>

        ${logoMarkup ? `<div style="margin-top:1.5rem;">${logoMarkup}</div>` : ''}
        <div style="margin-top:1.25rem;font-size:11px;color:${COLORS.mutedForeground};text-align:center;">Sent from the website</div>
      </div>

    </div>
  `;
}

export function buildConfirmationHtml({
  name,
  logoUrl,
}: {
  name: string;
  logoUrl?: string;
}) {
  const firstName = getFirstName(name);
  const logoMarkup = logoUrl
    ? `<div style="background:#000;padding:16px;border-radius:6px;">
        <img src="${logoUrl}" alt="Logo" style="display:block;width:100%;max-width:560px;height:auto;border-radius:4px;" />
      </div>`
    : '';

  return `
    <div style="font-family:Georgia, serif;max-width:560px;margin:0 auto;background:${COLORS.background};border:1px solid ${COLORS.border};border-radius:6px;overflow:hidden;">

      <div style="background:${COLORS.primary};padding:2rem;text-align:center;">
        <p style="color:${COLORS.background};font-size:24px;font-weight:400;margin:0;letter-spacing:0.05em;">Message received</p>
      </div>

      <div style="padding:2rem;">
        <p style="font-size:15px;color:${COLORS.foreground};margin:0 0 1rem;font-family:Georgia, serif;">Hi ${escapeHtml(
          firstName
        )},</p>
        <p style="font-size:14px;color:${COLORS.foreground};line-height:1.7;margin:0 0 1.5rem;font-family:Georgia, serif;">
          Thank you for reaching out. Your message has been received and we will be in touch shortly.
        </p>
        <p style="font-size:14px;color:${COLORS.mutedForeground};line-height:1.7;margin:0;font-family:Georgia, serif;">
          — Web8th Team
        </p>
        ${logoMarkup ? `<div style="margin-top:1.5rem;">${logoMarkup}</div>` : ''}
      </div>

    </div>
  `;
}
