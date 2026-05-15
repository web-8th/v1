# Web8th Build Plan

## Status Legend
- [ ] Not started
- [~] In progress  
- [x] Done

## Pages

### Home (/)
- [x] Hero section
- [x] Social proof bar
- [x] Services snapshot cards
- [x] Why Web8th section
- [x] Portfolio teaser
- [x] Contact CTA banner

### About (/about)
- [x] Our story section
- [x] Meet the team cards
- [x] Our approach principles

### Services (/services)
- [x] Tier 1 — Launch Package card
- [x] Tier 2 — Growth Plan card
- [x] Tier 3 — À La Carte card
- [x] "Not sure which fits?" CTA
- [x] Add-ons accordion

### Portfolio (/portfolio)
- [x] Intro copy
- [x] 3 placeholder project cards

### Contact (/contact)
- [x] Headline + intro copy
- [x] Contact form (controlled state, no <form> tag)
- [x] Founder contact blocks
- [x] Toast on submit

## Notes
<!-- Agent: log any decisions, deviations, or TODOs here -->
- Baseline lint is currently failing due to an existing ESLint/react plugin compatibility issue.
- Reverted palette overrides to respect prompt constraint: only semantic Shadcn tokens are used for UI color styling.
- Kept typography update (Fraunces + Nunito Sans) while leaving theme color values untouched for client-controlled theming.
