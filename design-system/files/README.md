One visual system for the three Home ERP portals, each in its own colour so nobody mistakes one portal for another. The resident (applicant) portal is teal on a warm cream ground; the landlord portal is deep violet on a lilac-white ground; the staff (caseworker, supervisor, admin) portal is navy and royal blue on a cool grey ground. Type, spacing, radii, fields and surfaces are shared; only the theme changes.

## Themes

- `resident` and `staff` reproduce the Figma exactly. `landlord` is the same system in violet: the Figma has no landlord screens, and the ERP's landlord shell is purple today.
- `resident-aa`, `landlord-aa` and `staff-aa` are what ships. They keep every theme colour except the pairs that miss WCAG 2.1 AA, which they darken along their own hue (the Accessibility section lists each one).
- Set the theme once on `<html>`: resident for the applicant flow, landlord for the landlord shells, staff for the staff layout. A wrapper may switch theme for an embedded block; nothing else sets colours.
- Referral-agency shells take `resident-aa` until they are designed.

## Content fundamentals

- **Talk to one person, in plain words.** "Tell us about your household", "Someone you trust, in case we can't reach you". No program jargon on resident screens unless it is the name of a document (HOTMA Certification Questionnaire, VAWA Lease Addendum).
- **Buttons say what happens, in the resident's own voice.** Start my application, Save & continue, Add someone to my household, Remove this income source, Browse file. Staff buttons name the command: Open Qualification, Send for correction, Resolve 2 blockers, Fill the gaps.
- **Say how much is left and how long it takes.** "1 of 2 done", "7 to go", "1 short question · about 5 minutes", "Estimated time to finish 20m". Put the count inside the chip or label, not in a separate sentence.
- **Reassure under the action.** "Every answer saves by itself as you type", "This just opens your application, nothing is final yet", "No fee and no credit check at this step".
- **Questions end in a question mark and a star when required:** "Whose income is this?*". The hint under a question explains the answer, not the rule: "Use their name exactly as you listed them under your household members".
- **Offer the fallback in the same breath:** "I don't have it - type it in instead", "I don't have anyone to list", "The fastest way: photograph your document. We'll read it and fill in the answers for you to check."
- **Staff queues are states of the work, not of the database:** Needs you, Waiting on applicant, Overdue, Everything open, Signatures & packets.
- Sentence case everywhere, including tabs and panel heads (write "TIC field coverage", not the all-caps strip in the Figma). Separate facts with a middle dot "·". No emoji. Resident copy exists in English and Spanish; every string goes through the portal translation dict.
- The Figma copy has typos to fix on build: caess (cases), Ovedue, Ass soon as possible, Adress e-mail, instaed, househould, Compiance, Aprove, Escelate, Permisions, overriders, doument, acces. The sign-in email field is labelled "First name" in the designs; label it Email.

## Visual foundations

**Colour roles.** `brand` fills the one primary thing: the hero button, the chosen tile, the current step, the staff table head and active tab. `accent` is the staff action colour (royal blue) and equals `brand` for residents. `success` is the forward-through-a-form fill (Save & continue) and every done mark. `danger` only removes or unblocks. Everything else is ink on a neutral: `ink` on `surface-page` / `surface-card`, `ink-muted` for supporting copy. Staff status uses the `tone-*` pairs (a tint and a deep ink of one hue), mapped once per enum in Python.

**Surfaces.** Resident pages are cream `surface-page` with white `surface-card` cards (`radius-card`, `space-36` padding) that overlap the header band. Inside a card, a `panel` in `surface-field` lifts the next thing to do. Staff pages are `surface-page` grey with white cards at `radius-panel`, and rows drawn as rounded strips (`table-row`, `table-row-alt`). Borders (`border`) are hairlines for separation only; fields carry their own `border-field`.

**Type.** Inter only, weights 400, 500, 600, 700. Titles pair two weights on one line: "Good evening, **John**" (greeting bold, name regular) and "Sign in **Caraway**" (verb regular, product bold). Keep to the named styles: `title-lg` for page titles, `title-md` for a section, `subheading` for a numbered question block, `question` for a field label, `body` for running text, `small` for helpers, `badge` for pills. Text is pure `ink` black, as in the Figma.

**Spacing and layout.** Steps of 4, 8, 12, 16, 20, 24, 32, 36, 48, 64 (`space-*`). Resident desktop: the header band is `size-header-band` tall, cards start 175px down and run 1560px wide at a 1920px frame; the application card is two columns (368px nav, fluid form) with a `border` rule between. Resident phone (440px): one column, cards full width with 16px gutters, the nav becomes its own screen. Staff desktop: `size-sidebar` column, 36px gap, content with a 62px top bar; the sidebar collapses to an 86px rail.

**Shape.** Radii by role: `radius-card` (36) resident cards and band corners, `radius-shell` (40) the staff sidebar, `radius-panel` (20) inner panels and member rows, `radius-xl` (16) resident buttons and chips, `radius-lg` (12) staff tables, tabs and panels, `radius-field` (10) fields, tiles and status pills, `radius-md` (8) compact staff buttons, `radius-pill` for nav pills and round buttons.

**Heights.** Resident controls are big on purpose: `size-control-lg` 74 for the hero, `size-control` 64 for form buttons, `size-field` 52 for fields, tiles and pills; nothing clickable below `size-tap` (44). Staff controls are `size-control-sm` 40 and `size-control-xs` 34.

**Depth, states, motion.** The designs are flat: no shadows except `shadow-modal` and the floating `shadow-bar`. The Figma draws no hover, pressed or disabled states; use `brand-band-bottom` as the hover fill of `brand`, 45% opacity for disabled, and the `focus-ring` outline (2px solid, 2px offset) on every focusable element. Motion is colour and opacity fades of 150ms or less, off under `prefers-reduced-motion`.

## Iconography

- Two families: solid 20px glyphs for navigation and list items (house, alert circle, money, pin, contact card, document, grid), and 24px outline icons at 1.5 stroke for tools and direction (arrow right, back, cloud upload, calendar, close, search, menu, chevron, help, sign out).
- Icons take the text colour they sit with (`ink`, `on-brand`); a done state is a `success-icon` disc with a white check and always sits beside words that say done.
- Every forward button ends with the arrow-right outline icon at 24px, pushed to the far edge.

## Brand marks

- The header lockup slot holds the tenant's mark: the Caraway flower and wordmark in the designs (white on the band, see Logos). The staff sidebar holds the flower alone.
- The Home ERP shell today shows the product mark (8AI) with the housing authority as text; both marks are in Logos. Which one fills the slot is a per-deployment choice, not a per-page one.

## Not synced

Values were read from pixel-exact renders of the Figma file's view-only link, not from its variables or styles (±1px on sizes, exact on flat fills); component notes paraphrase what the frames show. Not imported: Figma variable names and modes, the Inter font files (hosted by Google Fonts here), the flower pattern drawn behind the band, the modal head and the sign-in ground, the icon source (the Figma icon set could not be read; Heroicons v2 stands in, same weights and sizes), shadow values (estimated), hover, pressed and disabled states (not designed), a dark theme (not designed) and any staff phone layout (not designed).
