# Accessibility

The portals serve a federal housing program, so the floor is WCAG 2.1 AA (Section 508): text 4.5:1 (3:1 at 24px, or 19px bold), and 3:1 for field edges, focus rings and icons that carry meaning. The Figma palette meets it for its main pairs (white on `brand` 7.48:1 resident, 14.68:1 staff; `ink` on every ground above 15:1) and misses it for the pairs below. The `resident` and `staff` themes keep the Figma values so builds can be compared with the designs; `resident-aa`, `landlord-aa` and `staff-aa` fix only these pairs and are the themes production sets.

| Token | Where it shows | Figma value, ratio | AA theme value, ratio |
| --- | --- | --- | --- |
| `success` + `on-success` | Save & continue, Add someone, Publish, Approve case | #66C486 with white, 2.14:1 | #33844F with white, 4.61:1 |
| `success-icon` | done checks and plates on white | #66C486, 2.14:1 | #40A763, 3.03:1 |
| `border-field` | field and tile edges on white | #EEECE9, 1.18:1 (staff #E3E3EA) | #9E9381, 3.02:1 (staff #9191AD, 3.06:1) |
| `control-ring` | unselected radio dot and check circle | #D9D9D9, 1.33:1 | #909090, 3.01:1 |
| `placeholder` | field placeholders | #A6A4A3, 2.34:1 (staff #969696, 2.96:1) | #757271, 4.50:1 (staff #767676, 4.54:1) |
| `ink-subtle` | pending checklist items, secondary cells | #8C8C8C, 3.36:1 (staff #7D7E81 on a row, 3.23:1) | #767676, 4.54:1 (staff #656668, 4.57:1) |
| `ink-faint` | helper under a sidebar heading | #A8A8A8, 2.38:1 | #767676, 4.54:1 |
| `eyebrow` | "Your application" label | #9C8666, 3.49:1 | #877457, 4.50:1 |
| `on-brand-muted` (resident) | EN / ES off state on the band | #8EACB2, 2.97:1 | #C0D1D4, 4.54:1 |
| `danger` (staff) | Resolve blockers | #DD3C3F with white, 4.38:1 | #DC3539 with white, 4.55:1 |
| `tone-red-ink` | blocking counts | #FF0004 on its tint, 3.37:1 | #D60003, 4.59:1 |
| `banner-info-ink` | info banner label | #0073FF, 3.37:1 | #005FD4, 4.60:1 |
| `banner-warn-ink` | warning banner label | #A67400, 3.54:1 | #8F6400, 4.55:1 |
| `notice-warn-ink` | configuration warning title | #A08E59, 2.99:1 | #7E6F46, 4.57:1 |
| `avatar` | initials disc | #73B9A3 with white, 2.28:1 | #41826E with white, 4.52:1 |
| `live-ink` | Live pill in the publish bar | #66C486 on #CDEDD7, 1.70:1 | #2D7445, 4.52:1 |

The landlord theme is not in the Figma, so it was chosen to pass: white on `brand` #4B3A8F 9.13:1, white on the band 7.80:1 at its lightest, `on-brand-muted` #D2CBF0 on the band 5.03:1, `ink-muted` #57536A on the page 6.85:1. `landlord-aa` changes the same pairs the other AA themes do: `border-field` #9A8ACB (3.06:1 on white), `control-ring` #8C8C8C (3.36:1), `placeholder` #726998 (4.52:1 on the field) and `ink-subtle` #6F6A83 (5.17:1 on white, 4.54:1 on the muted ground).

The re-skin (`ds-reskin.css`) follows the same rule for the ERP's existing grey text: with `data-aa`, `text-gray-400` becomes #726E6D (applicant), #6F6A83 (landlord) or #6A6E7D (staff), each at least 4.5:1 on white and on the portal's two lightest greys (page ground, zebra rows), and green and amber text take the AA values above.

Rules that hold in every theme:

- **Focus.** Every focusable element shows the `focus-ring` outline, 2px solid with a 2px offset (7.06:1 on the resident ground, 8.54:1 on the staff ground). Never remove an outline without replacing it.
- **Targets.** Resident controls are at least `size-tap` (44px) in both directions; the designs' 52-74px controls already are. Staff in-row controls may be 34px.
- **Colour is never the only signal.** Every status tag carries its word; a done check sits beside text that says done; the selected tile changes fill and shows a check.
- **Labels.** Every field has a visible label; placeholders are examples, never instructions. Choice tiles, check rows and segmented controls wrap real inputs so keyboard and screen readers work without script.
- **Structure.** One `h1` per page (the greeting, the record name); tabs use `role="tablist"` or `aria-current`; the progress bar carries `role="progressbar"` and prints its number.
- **Motion.** Nothing moves except short fades; honour `prefers-reduced-motion`.
- **Language.** The resident portal ships English and Spanish; set `lang` on `<html>` from the portal language.
