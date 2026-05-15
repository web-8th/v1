# Web8th — Codex Build Prompt

## Project Overview

You are editing a Next.js 15 App Router website for **Web8th**, a two-person web agency based in Kelowna, BC and Regina, SK. The site is built on an existing template. The full project scaffold already exists — navbar, routing, mobile nav, and page structure are all in place. Your job is to **fill in the static content and UI** across all pages using the existing Shadcn UI component library (`components/ui`).

Do not scaffold routing or layout primitives. Do not install new dependencies unless absolutely necessary. Focus on content, layout composition, and polish.

---

## Brand Identity

**Name:** Web8th  
**Tagline:** *"Your work, visible."*
**Story:** Web8th was founded by two friends who share a birthday (birthday twins) and a hobby — building websites. What started as a shared passion turned into a side hustle. Each partner builds sites for their own clients, but every project gets pointed back under the Web8th umbrella so both benefit from a single, unified brand presence. More reach, more credibility, more exposure — as one entity instead of two solos.  
**Founders:** Two developers (names to be filled in by client — use placeholder "Rin Meng" and "Noah Stewart" for now)  
**Target clients:** Individuals, mom-and-pop shops, and local small businesses in Kelowna BC and Regina SK. The tone should feel like a trusted local — approachable, real, not a faceless agency.

---

## Aesthetic Direction

- **Vibe:** Warm, approachable, local-friendly. Think cozy coffee shop meets clean agency.
- **NOT:** Cold, corporate, tech-bro, dark-mode-only, neon gradients, brutalist
- **Color palette:** Warm neutrals as the base (creams, off-whites, warm grays). One warm accent color — amber, terracotta, or a muted warm orange. Use CSS variables consistently.
- **Typography:** Use a characterful but readable font pairing. A slightly soft or rounded display font for headings, a clean humanist sans for body. Avoid Inter, Roboto, Arial.
- **Component usage:** All UI components must come from `components/ui` (Shadcn). Use `Card`, `Button`, `Badge`, `Separator`, `Accordion`, `Avatar`, `Tabs` etc. as appropriate per section. Do not build raw HTML primitives when a Shadcn component exists.
- **Motion:** Subtle entrance animations on scroll (staggered fade-up). No flashy transitions. Feels grounded, not showy.
- **Layout:** Clean grid-based sections. Generous whitespace. Mobile-first — all sections must be fully responsive.

---

## Pages & Sections to Build

### 1. Home (`/`)

**Hero Section**
- Large warm headline — something like: *"Your local web team in Kelowna & Regina"*
- 2–3 sentence subheading explaining what Web8th does: two developers, shared brand, real local expertise
- Two CTAs: `Get a Free Quote` (primary) and `See Our Work` (secondary/outline)
- Subtle background texture or warm gradient — no flat white

**Social Proof Bar**
- A simple horizontal strip with a few trust signals: "Local clients served", "Cities covered", "Years building websites", etc. Use placeholder numbers (e.g. 20+, 2, 3+). Style as a muted stat row.

**Services Snapshot**
- 3-column card row (stack on mobile) giving a quick overview of the three service tiers (see Services section below). Each card: icon, tier name, one-line description, and a soft CTA link. Use Shadcn `Card`.

**Why Web8th**
- A 2-column section (text + visual/illustration placeholder). 3–4 short bullet points or icon+text pairs. Copy focus: local expertise, two builders for the price of one agency, real communication, no bloated contracts.

**Portfolio Teaser**
- Show 3 placeholder project cards. Each card: project name (placeholder), a colored placeholder image block, tags (e.g. "Web Design", "SEO"), and a "View Project" link. Use Shadcn `Card` and `Badge`.

**Contact CTA Banner**
- A warm full-width section: headline like *"Ready to get started?"*, short line of copy, and a single `Book a Free Call` button. Slightly different background color from the rest of the page.

---

### 2. About (`/about`)

**Our Story Section**
- Headline: *"Born on the same day. Built for this."* (reference the birthday twin origin)
- 2–3 paragraphs telling the Web8th founding story: shared birthday, shared hobby, turned side hustle, unified under one brand for greater reach. Warm, personal tone — written as if from the founders themselves.

**Meet the Team**
- Two founder cards side by side (stack on mobile). Each card: Avatar placeholder (initials fallback), name (Rin Meng / Noah Stewart), role (e.g. "Co-founder & Developer"), city (Kelowna / Regina), and 2–3 lines of bio. Use Shadcn `Card` and `Avatar`.

**Our Approach**
- 3–4 short principle blocks: e.g. "Local first", "Clear communication", "No lock-in contracts", "We build, you own it". Icon + short title + 1-sentence description each.

---

### 3. Services (`/services`)

Web8th offers three tiers of engagement. Present them clearly. Use Shadcn `Card` and `Badge`. Highlight the middle tier as "Most Popular".

**Tier 1 — Launch Package** *(one-time flat fee)*
- Includes: Custom web design, full development, on-page SEO setup
- Best for: Businesses that need a great site and want to own it outright
- Ends with: `Get a Quote` CTA

**Tier 2 — Growth Plan** *(monthly retainer, minimum 3 months)*
- Includes: Everything in Launch + ongoing maintenance, monthly updates, priority support
- Best for: Businesses that want a long-term partner to keep things fresh
- Ends with: `Get a Quote` CTA

**Tier 3 — À La Carte** *(per-change flat fee)*
- How it works: Client sends a list of changes they want (seasonal updates, content swaps, new sections). Web8th reviews and quotes a flat fee for that batch.
- Best for: Clients who already have a site and just need occasional help
- Ends with: `Send Us Your List` CTA

Below the pricing tiers, add a short "Not sure which fits?" section with a soft CTA to contact them.

**Optional add-ons section** (use Shadcn `Accordion`):
- SEO audit
- Google Business Profile setup
- Logo / brand refresh (referred out)
- Domain & hosting setup help

---

### 4. Portfolio (`/portfolio`)

- 3 placeholder project cards in a responsive grid (2-col on tablet, 3-col on desktop, 1-col on mobile)
- Each card: colored placeholder image area, project name ("Client Project 1" etc.), short description placeholder, tags using `Badge`, and a disabled or stubbed "View Live Site" button
- Above the grid: short intro copy — *"A selection of sites we've built for local businesses and individuals."*
- Note in a comment: `// TODO: Replace placeholder cards with real client projects`

---

### 5. Contact (`/contact`)

- Headline: *"Let's build something together"*
- Short paragraph: friendly, low-pressure — *"Whether you have a full brief or just an idea, we'd love to hear from you."*
- Contact form using Shadcn `Input`, `Textarea`, `Button`, and `Label` (no `<form>` tag — use controlled state and `onClick` handler on submit button)
  - Fields: Name, Email, Business Name (optional), Message, Budget Range (optional dropdown — `<Select>`)
- Below the form: two smaller contact detail blocks for each founder — city + email/link placeholder
- No third-party form libraries. Keep it stateless for now (submit button logs to console or shows a success `toast`).

---

## File Structure Conventions

- Pages live in `app/` using App Router conventions (`page.tsx` per route)
- Components for each section should be colocated in `components/sections/` or similar — follow whatever pattern already exists in the template
- All Shadcn components are imported from `@/components/ui/...`
- Tailwind CSS for all styling — no inline styles, no CSS modules unless already in use
- Use `cn()` utility from `@/lib/utils` for conditional classNames
- TypeScript throughout — no `any` types

---

## Copy Tone Guidelines

- Write like a real person, not a marketing bot
- Warm, confident, and local — not corporate or overly polished
- Avoid: "cutting-edge solutions", "leverage synergies", "best-in-class"
- Use: "we", "local", "your business", "let's talk", "no contracts required"
- Short sentences. Breathing room between ideas.

---

## What NOT to do

- Do not touch `components/ui/` — treat it as read-only
- Do not modify the Navbar, Footer, or routing setup unless a section explicitly requires a new route
- Do not install Framer Motion or any animation library. For animations, use tailwindcss-animate (already installed) and the existing custom animation utilities defined in globals.css. Before adding any animation, check globals.css first — there are pre-built keyframes and animate-* classes already defined there. If a needed animation doesn't exist, you are free to add new @keyframes and corresponding utility classes directly into globals.css following the same pattern already established in that file.
- Do not use placeholder image services like `picsum.photos` — use a solid colored `div` with a label as the image placeholder
- Do not hardcode hex colors — use CSS variables or Tailwind theme tokens
- Do not choose or hardcode any colors — not hex, not Tailwind color tokens like bg-amber-500, not CSS color values. Use only Shadcn CSS variables: bg-background, bg-card, bg-primary, text-foreground, text-muted-foreground, border, ring, etc. The color theme will be configured separately via the Shadcn theme kit by the client. If a section needs visual distinction, achieve it through bg-muted, bg-card, or bg-accent — never by inventing a color.

---

## Deliverables

For each page, output the full `.tsx` file content. If a section is complex, break it into a separate component file and show both. Annotate any TODOs clearly with `// TODO:` comments.


## Agent Workflow

Before writing any code, create a file called `PLAN.md` in the project root.
Structure it exactly like this:

---
# Web8th Build Plan

## Status Legend
- [ ] Not started
- [~] In progress  
- [x] Done

## Pages

### Home (/)
- [ ] Hero section
- [ ] Social proof bar
- [ ] Services snapshot cards
- [ ] Why Web8th section
- [ ] Portfolio teaser
- [ ] Contact CTA banner

### About (/about)
- [ ] Our story section
- [ ] Meet the team cards
- [ ] Our approach principles

### Services (/services)
- [ ] Tier 1 — Launch Package card
- [ ] Tier 2 — Growth Plan card
- [ ] Tier 3 — À La Carte card
- [ ] "Not sure which fits?" CTA
- [ ] Add-ons accordion

### Portfolio (/portfolio)
- [ ] Intro copy
- [ ] 3 placeholder project cards

### Contact (/contact)
- [ ] Headline + intro copy
- [ ] Contact form (controlled state, no <form> tag)
- [ ] Founder contact blocks
- [ ] Toast on submit

## Notes
<!-- Agent: log any decisions, deviations, or TODOs here -->
---

Update `PLAN.md` as you go — mark items `[~]` when you start them and `[x]` when complete. Log any deviations or decisions in the Notes section.
