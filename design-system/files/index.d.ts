/* Home ERP components are Jinja2 macros. Each interface lists a macro's keyword arguments;
   `html` means caller() content. Import paths are in window.HomeERP.macros. */
type html = string;
interface Pagination { page: number; pages: number; }
interface Button { label: string; href?: string; variant?: string; }
interface IconButton { icon: string; label: string; }
interface Select { name: string; label: string; }
interface StatusTag { label: string; tone: string; }
interface Tab { label: string; count?: number; }

/** Buttons carry every action; the variant says what kind of action it is, the size says which portal and how prominent. Macro: components/ds/actions.html: button */
export interface ButtonProps { variant?: "primary" | "accent" | "success" | "danger" | "dark" | "secondary" | "outline" | "ghost"; size?: "lg" | "md" | "sm" | "xs"; arrow?: boolean; pill?: boolean; block?: boolean; href?: string; type?: "button" | "submit"; disabled?: boolean; label: string }
export declare function Button(props: ButtonProps): html;

/** A circular or square button that holds one icon; always give it an accessible `label`. Macro: components/ds/actions.html: icon_button, back_link */
export interface IconButtonProps { icon: string; label: string; variant?: "band" | "back" | "plain" | "square" | "brand" | "field"; href?: string }
export declare function IconButton(props: IconButtonProps): html;

/** A question label, an optional hint and a filled input; resident forms ask one question per field. Macro: components/ds/forms.html: field, input, textarea, date_input */
export interface TextFieldProps { name: string; label: string; hint?: string; value?: string; placeholder?: string; required?: boolean; type?: "text" | "email" | "tel" | "number" | "date" | "password"; multiline?: boolean; icon?: string; error?: string }
export declare function TextField(props: TextFieldProps): html;

/** A radio (or checkbox) drawn as a filled tile with the dot on the right; the whole tile is the hit area. Macro: components/ds/forms.html: choice_grid, choice */
export interface ChoiceTileProps { name: string; options: {value: string; label: string; meta?: string}[]; value?: string; multiple?: boolean; layout?: "grid" | "cards" }
export declare function ChoiceTile(props: ChoiceTileProps): html;

/** A row of mutually exclusive options in one filled track; the chosen one takes the `brand` fill. Macro: components/ds/forms.html: segmented, yes_no, language_switch */
export interface SegmentedProps { name: string; options: {value: string; label: string}[]; value?: string; variant?: "fill" | "yesno" | "band" }
export declare function Segmented(props: SegmentedProps): html;

/** A number you change by one: minus, the value, plus. Macro: components/ds/forms.html: counter */
export interface CounterProps { name: string; label: string; hint?: string; value: number; min?: number; max?: number }
export declare function Counter(props: CounterProps): html;

/** A single yes-statement with a round check: I don't have it - type it in instead; I don't have anyone to list. Macro: components/ds/forms.html: check_row */
export interface CheckRowProps { name: string; label: string; checked?: boolean; hint?: string }
export declare function CheckRow(props: CheckRowProps): html;

/** The file drop area: dotted `border-strong` edge, `surface-drop` fill, a cloud glyph, one line and a Browse file button. Macro: components/ds/forms.html: dropzone */
export interface DropzoneProps { name: string; label?: string; accept?: string; multiple?: boolean; layout?: "block" | "inline" }
export declare function Dropzone(props: DropzoneProps): html;

/** The staff filter select: `surface-field` fill, a hairline divider, a chevron; it narrows a list, it does not ask a question. Macro: components/ds/forms.html: filter_select */
export interface SelectProps { name: string; label: string; options: {value: string; label: string}[]; value?: string }
export declare function Select(props: SelectProps): html;

/** A soft resident label: who someone is, how much is left, which group a list belongs to. Macro: components/ds/status.html: chip */
export interface ChipProps { label: string; tone?: "warm" | "warm-soft" | "lilac" | "lilac-soft"; size?: "md" | "sm" }
export declare function Chip(props: ChipProps): html;

/** The staff status pill: a tint and a deep ink of one hue, `radius-field`, set in `badge`. Macro: components/ds/status.html: tag */
export interface StatusTagProps { label: string; tone: "blue" | "steel" | "magenta" | "olive" | "green" | "brown" | "violet" | "red" | "neutral"; size?: "sm" | "lg"; icon?: string }
export declare function StatusTag(props: StatusTagProps): html;

/** A small square number beside a label: open items in a nav row, items in a tab. Macro: components/ds/status.html: count */
export interface CountBadgeProps { value: number | string; variant?: "plain" | "raised"; label?: string }
export declare function CountBadge(props: CountBadgeProps): html;

/** A thin bar and the percent beside it: how far the application is. Macro: components/ds/status.html: progress */
export interface ProgressProps { value: number; label?: string }
export declare function Progress(props: ProgressProps): html;

/** A full-width strip above the record tabs that says what is true about this case right now. Macro: components/ds/status.html: banner */
export interface BannerProps { tone: "info" | "warn"; label: string; text: string; action?: {label: string; href: string}; dismissible?: boolean }
export declare function Banner(props: BannerProps): html;

/** A configuration finding card: a titled problem, what it means, and a hint in italics, with the area it belongs to on the right. Macro: components/ds/status.html: notice */
export interface NoticeProps { tone: "warn" | "info"; title: string; body: string; hint?: string; tag?: string }
export declare function Notice(props: NoticeProps): html;

/** The resident page head: a `brand` gradient band with rounded bottom corners (`radius-card`), the lockup on the left, nav pills in the middle, Help and Sign out on the right; the first card overlaps its lower edge. Macro: components/ds/navigation.html: resident_header */
export interface ResidentHeaderProps { org_name: string; logo_url?: string; nav: {label: string; href: string; current?: boolean}[]; help_href: string; logout: string }
export declare function ResidentHeader(props: ResidentHeaderProps): html;

/** The left column of the resident application card: an `eyebrow` label, one row per section with a solid glyph and an open-item count, a rule, then Get help. Macro: components/ds/navigation.html: application_nav */
export interface ApplicationNavProps { items: {label: string; href: string; icon: string; count?: number; current?: boolean}[]; help_href?: string }
export declare function ApplicationNav(props: ApplicationNavProps): html;

/** The application phase bar: the current phase as a `brand` disc with its name, an arrow, the remaining phases as roman-numeral discs, and the percent on the right. Macro: components/ds/navigation.html: phase_steps */
export interface PhaseStepperProps { current: {number: string; label: string}; rest: {number: string; done?: boolean}[]; progress: number }
export declare function PhaseStepper(props: PhaseStepperProps): html;

/** The staff shell's left column: a `brand` (navy) slab with `radius-shell` corners, the mark, grouped links, and the signed-in user at the foot. Macro: components/ds/navigation.html: staff_sidebar */
export interface StaffSidebarProps { groups: {label: string; items: {label: string; href: string; icon: string; current?: boolean}[]}[]; user: {initials: string; name: string; role: string}; collapsed?: boolean }
export declare function StaffSidebar(props: StaffSidebarProps): html;

/** The row above every staff page: the menu disc, a wide pill search, the scope filters, two tool icons and the page's create action. Macro: components/ds/navigation.html: staff_topbar */
export interface StaffTopbarProps { search_placeholder: string; filters?: Select[]; tools?: IconButton[]; action?: Button }
export declare function StaffTopbar(props: StaffTopbarProps): html;

/** A `surface-field` track of queue or record tabs; the selected tab is a `brand` block with its count raised. Macro: components/ds/navigation.html: tabs */
export interface TabsProps { tabs: {label: string; href?: string; count?: number; selected?: boolean; link?: boolean}[]; aside?: Tab[] }
export declare function Tabs(props: TabsProps): html;

/** The resident surface: a white card with `radius-card` corners and `space-36` padding on `surface-page`; inside it, a `panel` (`surface-field`, `radius-panel`) lifts the one thing to do next. Macro: components/ds/content.html: card, panel */
export interface CardProps { variant?: "resident" | "staff" | "outlined"; eyebrow?: string; title?: string; sub?: string; children: html }
export declare function Card(props: CardProps): html;

/** One person in the household: a person glyph, the name in `subheading` weight 600, a done check, role and remaining chips, and the edit button at the far right. Macro: components/ds/content.html: member_row */
export interface MemberRowProps { name: string; is_you?: boolean; done?: boolean; role?: string; remaining?: number; edit_href: string }
export declare function MemberRow(props: MemberRowProps): html;

/** Documents you'll need: the running list under the application nav that grows as the resident answers. Macro: components/ds/content.html: doc_checklist */
export interface DocChecklistProps { title: string; lede?: string; groups: {label: string; tone: string; items: {label: string; done?: boolean; kind: "upload" | "sign"}[]}[] }
export declare function DocChecklist(props: DocChecklistProps): html;

/** The staff list: a `brand` head row with rounded ends, then each row as its own rounded strip (`radius-lg`) alternating `table-row` and `table-row-alt`, 8px apart, no cell borders. Macro: components/ds/content.html: data_table */
export interface DataTableProps { columns: {key: string; label: string}[]; rows: object[]; empty_text: string; pagination?: Pagination }
export declare function DataTable(props: DataTableProps): html;

/** A tinted summary tile: a number, what it counts, and a caption. Macro: components/ds/content.html: stat_tile */
export interface StatTileProps { value: string; label: string; sub?: string; tint: "red" | "olive" | "blue" | "violet" | "green" | "pink"; href?: string }
export declare function StatTile(props: StatTileProps): html;

/** A narrow panel on the right of a staff record with a `panel-head` strip: facts that gate the decision, then the decision itself. Macro: components/ds/content.html: side_panel */
export interface SidePanelProps { title: string; children: html }
export declare function SidePanel(props: SidePanelProps): html;

/** The head of a staff record: back button, person glyph, the name in `title-lg`, the overdue line, relationship chips, an Action select and the blocking action; under it a row of `StatusTag` facts. Macro: components/ds/content.html: record_header */
export interface RecordHeaderProps { name: string; since?: string; actions?: Button[]; meta: StatusTag[]; primary_action?: Button }
export declare function RecordHeader(props: RecordHeaderProps): html;

/** The Your situation list: yes-or-no questions stacked in one `surface-field` card, each with its hint and a `yesno` Segmented on the right. Macro: components/ds/content.html: question_list, question_row */
export interface QuestionRowProps { questions: {name: string; text: string; hint?: string; value?: "yes" | "no"}[] }
export declare function QuestionRow(props: QuestionRowProps): html;

/** A white strip at the foot of a hard step that offers a person to talk to. Macro: components/ds/content.html: help_callout */
export interface HelpCalloutProps { title: string; text: string; action: Button }
export declare function HelpCallout(props: HelpCalloutProps): html;

/** A white card over a blurred page (`scrim` with an 8px backdrop blur) with a `brand` gradient head that names the task. Macro: components/ds/overlay.html: modal */
export interface ModalProps { id: string; title: string; title_strong?: string; children: html; actions: Button[] }
export declare function Modal(props: ModalProps): html;

/** A floating white bar at the bottom centre of a configuration page while there are unpublished changes: the live pill, the version, Discard changes, Preview impact, Publish. Macro: components/ds/overlay.html: publish_bar */
export interface PublishBarProps { version: string; live?: boolean; actions: Button[] }
export declare function PublishBar(props: PublishBarProps): html;

/** The sign-in page for either portal: the brand band with the lockup, a white sheet with an 80px top radius rising from the bottom, a two-weight title (Sign in **Caraway**, Sign in to **TaxCreditOS**), one lede line, two large fields, Forgot your password?, the hero button and the cross-links. Macro: components/ds/pages: auth/login, auth/staff_login */
export interface SignInProps { product_line: string; lede: string; form: html; alt_links: {prompt: string; label: string; href: string}[] }
export declare function SignIn(props: SignInProps): html;

/** The applicant's program path as numbered stops on one line: done stops carry a check, the current one is `brand`, the rest wait in `surface-muted`. Macro: components/ds/status.html: journey */
export interface JourneyProps { steps: {label: string; state: "done" | "current" | "todo"}[]; label?: string }
export declare function Journey(props: JourneyProps): html;

/** A grid of link cards, each an icon, a title and one line: the quick actions under a dashboard. Macro: components/ds/content.html: link_tiles */
export interface LinkTilesProps { items: {label: string; text: string; href: string; icon: string}[] }
export declare function LinkTiles(props: LinkTilesProps): html;

/** Label and value pairs in two aligned columns, with an optional total row under a hairline. Macro: components/ds/content.html: key_values */
export interface KeyValuesProps { rows: {label: string; value: string; total?: boolean}[] }
export declare function KeyValues(props: KeyValuesProps): html;
