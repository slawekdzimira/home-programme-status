/* @ds-bundle: {"format": 4, "namespace": "HomeERP", "components": [{"name": "Button"}, {"name": "IconButton"}, {"name": "TextField"}, {"name": "ChoiceTile"}, {"name": "Segmented"}, {"name": "Counter"}, {"name": "CheckRow"}, {"name": "Dropzone"}, {"name": "Select"}, {"name": "Chip"}, {"name": "StatusTag"}, {"name": "CountBadge"}, {"name": "Progress"}, {"name": "Banner"}, {"name": "Notice"}, {"name": "ResidentHeader"}, {"name": "ApplicationNav"}, {"name": "PhaseStepper"}, {"name": "StaffSidebar"}, {"name": "StaffTopbar"}, {"name": "Tabs"}, {"name": "Card"}, {"name": "MemberRow"}, {"name": "DocChecklist"}, {"name": "DataTable"}, {"name": "StatTile"}, {"name": "SidePanel"}, {"name": "RecordHeader"}, {"name": "QuestionRow"}, {"name": "HelpCallout"}, {"name": "Modal"}, {"name": "PublishBar"}, {"name": "SignIn"}, {"name": "Journey"}, {"name": "LinkTiles"}, {"name": "KeyValues"}]} */
/* Home ERP renders server-side (Jinja2 + Tailwind + Alpine), so this bundle carries no UI code:
   it names each component's Jinja macro and paints portal themes on data-portal wrappers. */
(function () {
  var macros = {
  "Button": "components/ds/actions.html: button",
  "IconButton": "components/ds/actions.html: icon_button, back_link",
  "TextField": "components/ds/forms.html: field, input, textarea, date_input",
  "ChoiceTile": "components/ds/forms.html: choice_grid, choice",
  "Segmented": "components/ds/forms.html: segmented, yes_no, language_switch",
  "Counter": "components/ds/forms.html: counter",
  "CheckRow": "components/ds/forms.html: check_row",
  "Dropzone": "components/ds/forms.html: dropzone",
  "Select": "components/ds/forms.html: filter_select",
  "Chip": "components/ds/status.html: chip",
  "StatusTag": "components/ds/status.html: tag",
  "CountBadge": "components/ds/status.html: count",
  "Progress": "components/ds/status.html: progress",
  "Banner": "components/ds/status.html: banner",
  "Notice": "components/ds/status.html: notice",
  "ResidentHeader": "components/ds/navigation.html: resident_header",
  "ApplicationNav": "components/ds/navigation.html: application_nav",
  "PhaseStepper": "components/ds/navigation.html: phase_steps",
  "StaffSidebar": "components/ds/navigation.html: staff_sidebar",
  "StaffTopbar": "components/ds/navigation.html: staff_topbar",
  "Tabs": "components/ds/navigation.html: tabs",
  "Card": "components/ds/content.html: card, panel",
  "MemberRow": "components/ds/content.html: member_row",
  "DocChecklist": "components/ds/content.html: doc_checklist",
  "DataTable": "components/ds/content.html: data_table",
  "StatTile": "components/ds/content.html: stat_tile",
  "SidePanel": "components/ds/content.html: side_panel",
  "RecordHeader": "components/ds/content.html: record_header",
  "QuestionRow": "components/ds/content.html: question_list, question_row",
  "HelpCallout": "components/ds/content.html: help_callout",
  "Modal": "components/ds/overlay.html: modal",
  "PublishBar": "components/ds/overlay.html: publish_bar",
  "SignIn": "components/ds/pages: auth/login, auth/staff_login",
  "Journey": "components/ds/status.html: journey",
  "LinkTiles": "components/ds/content.html: link_tiles",
  "KeyValues": "components/ds/content.html: key_values"
};
  function portalTheme(portal, accessible) { return portal + (accessible ? '-aa' : ''); }
  function paint(root) {
    var scope = root || document;
    var aa = /-aa$/.test(document.documentElement.getAttribute('data-theme') || '');
    scope.querySelectorAll('[data-portal]').forEach(function (el) {
      el.setAttribute('data-theme', portalTheme(el.getAttribute('data-portal'), aa));
    });
  }
  window.HomeERP = { version: '1.0.0', cssPrefix: 'ds-',
    themes: ['resident', 'staff', 'resident-aa', 'staff-aa'], macros: macros,
    portalTheme: portalTheme, paint: paint };
})();
