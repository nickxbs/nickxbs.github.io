/* ENTRYPOINT_EXTENTION_MARKER */
(function() {
var _currentDirectory = (function () {
  var _url;
  var lines = new Error().stack.split('\n');
  function lookupUrl() {
    if (lines.length > 2) {
      var match = lines[1].match(/^\s+at (.+):\d+:\d+$/);
      // Chrome.
      if (match) return match[1];
      // Chrome nested eval case.
      match = lines[1].match(/^\s+at eval [(](.+):\d+:\d+[)]$/);
      if (match) return match[1];
      // Edge.
      match = lines[1].match(/^\s+at.+\((.+):\d+:\d+\)$/);
      if (match) return match[1];
      // Firefox.
      match = lines[0].match(/[<][@](.+):\d+:\d+$/)
      if (match) return match[1];
    }
    // Safari.
    return lines[0].match(/(.+):\d+:\d+$/)[1];
  }
  _url = lookupUrl();
  var lastSlash = _url.lastIndexOf('/');
  if (lastSlash == -1) return _url;
  var currentDirectory = _url.substring(0, lastSlash + 1);
  return currentDirectory;
})();

var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());

let modulePaths = {
 "dart_sdk": "packages/build_web_compilers/src/dev_compiler/dart_sdk",
 "packages/_discoveryapis_commons/_discoveryapis_commons": "packages/_discoveryapis_commons/_discoveryapis_commons.ddc",
 "packages/angular/angular": "packages/angular/angular.ddc",
 "packages/angular/angular.template": "packages/angular/angular.template.ddc",
 "packages/angular/core": "packages/angular/core.ddc",
 "packages/angular/core.template": "packages/angular/core.template.ddc",
 "packages/angular/di": "packages/angular/di.ddc",
 "packages/angular/di.template": "packages/angular/di.template.ddc",
 "packages/angular/experimental": "packages/angular/experimental.ddc",
 "packages/angular/experimental.template": "packages/angular/experimental.template.ddc",
 "packages/angular/meta": "packages/angular/meta.ddc",
 "packages/angular/meta.template": "packages/angular/meta.template.ddc",
 "packages/angular/security": "packages/angular/security.ddc",
 "packages/angular/security.template": "packages/angular/security.template.ddc",
 "packages/angular/src/bootstrap/modules": "packages/angular/src/bootstrap/modules.ddc",
 "packages/angular/src/bootstrap/run.template": "packages/angular/src/bootstrap/run.template.ddc",
 "packages/angular/src/common/directives/ng_for_identity": "packages/angular/src/common/directives/ng_for_identity.ddc",
 "packages/angular/src/core/application_tokens": "packages/angular/src/core/application_tokens.ddc",
 "packages/angular/src/core/application_tokens.template": "packages/angular/src/core/application_tokens.template.ddc",
 "packages/angular/src/core/change_detection/change_detection": "packages/angular/src/core/change_detection/change_detection.ddc",
 "packages/angular/src/core/change_detection/change_detection.template": "packages/angular/src/core/change_detection/change_detection.template.ddc",
 "packages/angular/src/core/change_detection/directive_change_detector": "packages/angular/src/core/change_detection/directive_change_detector.ddc",
 "packages/angular/src/meta": "packages/angular/src/meta.ddc",
 "packages/angular/src/runtime/interpolate": "packages/angular/src/runtime/interpolate.ddc",
 "packages/angular/src/runtime/queries": "packages/angular/src/runtime/queries.ddc",
 "packages/angular/src/runtime/text_binding": "packages/angular/src/runtime/text_binding.ddc",
 "packages/angular_components/angular_components": "packages/angular_components/angular_components.ddc",
 "packages/angular_components/angular_components.template": "packages/angular_components/angular_components.template.ddc",
 "packages/angular_components/annotations/rtl_annotation": "packages/angular_components/annotations/rtl_annotation.ddc",
 "packages/angular_components/annotations/rtl_annotation.template": "packages/angular_components/annotations/rtl_annotation.template.ddc",
 "packages/angular_components/app_layout/layout.scss.css.shim": "packages/angular_components/app_layout/layout.scss.css.shim.ddc",
 "packages/angular_components/app_layout/material_drawer_base": "packages/angular_components/app_layout/material_drawer_base.ddc",
 "packages/angular_components/app_layout/material_drawer_base.template": "packages/angular_components/app_layout/material_drawer_base.template.ddc",
 "packages/angular_components/app_layout/material_persistent_drawer": "packages/angular_components/app_layout/material_persistent_drawer.ddc",
 "packages/angular_components/app_layout/material_persistent_drawer.template": "packages/angular_components/app_layout/material_persistent_drawer.template.ddc",
 "packages/angular_components/app_layout/material_stackable_drawer": "packages/angular_components/app_layout/material_stackable_drawer.ddc",
 "packages/angular_components/app_layout/material_stackable_drawer.scss.css.shim": "packages/angular_components/app_layout/material_stackable_drawer.scss.css.shim.ddc",
 "packages/angular_components/app_layout/material_stackable_drawer.template": "packages/angular_components/app_layout/material_stackable_drawer.template.ddc",
 "packages/angular_components/app_layout/material_temporary_drawer": "packages/angular_components/app_layout/material_temporary_drawer.ddc",
 "packages/angular_components/app_layout/material_temporary_drawer.scss.css.shim": "packages/angular_components/app_layout/material_temporary_drawer.scss.css.shim.ddc",
 "packages/angular_components/app_layout/material_temporary_drawer.template": "packages/angular_components/app_layout/material_temporary_drawer.template.ddc",
 "packages/angular_components/auto_dismiss/auto_dismiss": "packages/angular_components/auto_dismiss/auto_dismiss.ddc",
 "packages/angular_components/auto_dismiss/auto_dismiss.template": "packages/angular_components/auto_dismiss/auto_dismiss.template.ddc",
 "packages/angular_components/button_decorator/button_decorator": "packages/angular_components/button_decorator/button_decorator.ddc",
 "packages/angular_components/button_decorator/button_decorator.scss.css.shim": "packages/angular_components/button_decorator/button_decorator.scss.css.shim.ddc",
 "packages/angular_components/button_decorator/button_decorator.template": "packages/angular_components/button_decorator/button_decorator.template.ddc",
 "packages/angular_components/content/deferred_content": "packages/angular_components/content/deferred_content.ddc",
 "packages/angular_components/content/deferred_content.template": "packages/angular_components/content/deferred_content.template.ddc",
 "packages/angular_components/content/deferred_content_aware": "packages/angular_components/content/deferred_content_aware.ddc",
 "packages/angular_components/content/deferred_content_aware.template": "packages/angular_components/content/deferred_content_aware.template.ddc",
 "packages/angular_components/dynamic_component/dynamic_component": "packages/angular_components/dynamic_component/dynamic_component.ddc",
 "packages/angular_components/dynamic_component/dynamic_component.template": "packages/angular_components/dynamic_component/dynamic_component.template.ddc",
 "packages/angular_components/focus/focus": "packages/angular_components/focus/focus.ddc",
 "packages/angular_components/focus/focus.template": "packages/angular_components/focus/focus.template.ddc",
 "packages/angular_components/focus/focus_activable_item": "packages/angular_components/focus/focus_activable_item.ddc",
 "packages/angular_components/focus/focus_activable_item.template": "packages/angular_components/focus/focus_activable_item.template.ddc",
 "packages/angular_components/focus/focus_interface": "packages/angular_components/focus/focus_interface.ddc",
 "packages/angular_components/focus/focus_interface.template": "packages/angular_components/focus/focus_interface.template.ddc",
 "packages/angular_components/focus/focus_item": "packages/angular_components/focus/focus_item.ddc",
 "packages/angular_components/focus/focus_item.template": "packages/angular_components/focus/focus_item.template.ddc",
 "packages/angular_components/focus/focus_list": "packages/angular_components/focus/focus_list.ddc",
 "packages/angular_components/focus/focus_list.template": "packages/angular_components/focus/focus_list.template.ddc",
 "packages/angular_components/focus/focus_trap": "packages/angular_components/focus/focus_trap.ddc",
 "packages/angular_components/focus/focus_trap.scss.css.shim": "packages/angular_components/focus/focus_trap.scss.css.shim.ddc",
 "packages/angular_components/focus/focus_trap.template": "packages/angular_components/focus/focus_trap.template.ddc",
 "packages/angular_components/focus/keyboard_only_focus_indicator": "packages/angular_components/focus/keyboard_only_focus_indicator.ddc",
 "packages/angular_components/focus/keyboard_only_focus_indicator.template": "packages/angular_components/focus/keyboard_only_focus_indicator.template.ddc",
 "packages/angular_components/forms/error_renderer": "packages/angular_components/forms/error_renderer.ddc",
 "packages/angular_components/forms/error_renderer.template": "packages/angular_components/forms/error_renderer.template.ddc",
 "packages/angular_components/framework_stabilizers/framework_stabilizers": "packages/angular_components/framework_stabilizers/framework_stabilizers.ddc",
 "packages/angular_components/framework_stabilizers/framework_stabilizers.template": "packages/angular_components/framework_stabilizers/framework_stabilizers.template.ddc",
 "packages/angular_components/framework_stabilizers/testability": "packages/angular_components/framework_stabilizers/testability.ddc",
 "packages/angular_components/framework_stabilizers/testability.template": "packages/angular_components/framework_stabilizers/testability.template.ddc",
 "packages/angular_components/glyph/glyph": "packages/angular_components/glyph/glyph.ddc",
 "packages/angular_components/glyph/glyph.scss.css.shim": "packages/angular_components/glyph/glyph.scss.css.shim.ddc",
 "packages/angular_components/glyph/glyph.template": "packages/angular_components/glyph/glyph.template.ddc",
 "packages/angular_components/highlighted_text/highlighted_text": "packages/angular_components/highlighted_text/highlighted_text.ddc",
 "packages/angular_components/highlighted_text/highlighted_text.scss.css.shim": "packages/angular_components/highlighted_text/highlighted_text.scss.css.shim.ddc",
 "packages/angular_components/highlighted_text/highlighted_text.template": "packages/angular_components/highlighted_text/highlighted_text.template.ddc",
 "packages/angular_components/highlighted_text/highlighted_value": "packages/angular_components/highlighted_text/highlighted_value.ddc",
 "packages/angular_components/highlighted_text/highlighted_value.template": "packages/angular_components/highlighted_text/highlighted_value.template.ddc",
 "packages/angular_components/interfaces/has_disabled": "packages/angular_components/interfaces/has_disabled.ddc",
 "packages/angular_components/interfaces/has_disabled.template": "packages/angular_components/interfaces/has_disabled.template.ddc",
 "packages/angular_components/laminate/components/modal/modal": "packages/angular_components/laminate/components/modal/modal.ddc",
 "packages/angular_components/laminate/components/modal/modal.template": "packages/angular_components/laminate/components/modal/modal.template.ddc",
 "packages/angular_components/laminate/enums/alignment": "packages/angular_components/laminate/enums/alignment.ddc",
 "packages/angular_components/laminate/enums/alignment.template": "packages/angular_components/laminate/enums/alignment.template.ddc",
 "packages/angular_components/laminate/enums/position": "packages/angular_components/laminate/enums/position.ddc",
 "packages/angular_components/laminate/enums/position.template": "packages/angular_components/laminate/enums/position.template.ddc",
 "packages/angular_components/laminate/enums/visibility": "packages/angular_components/laminate/enums/visibility.ddc",
 "packages/angular_components/laminate/enums/visibility.template": "packages/angular_components/laminate/enums/visibility.template.ddc",
 "packages/angular_components/laminate/overlay/constants": "packages/angular_components/laminate/overlay/constants.ddc",
 "packages/angular_components/laminate/overlay/constants.template": "packages/angular_components/laminate/overlay/constants.template.ddc",
 "packages/angular_components/laminate/overlay/module": "packages/angular_components/laminate/overlay/module.ddc",
 "packages/angular_components/laminate/overlay/module.template": "packages/angular_components/laminate/overlay/module.template.ddc",
 "packages/angular_components/laminate/overlay/overlay": "packages/angular_components/laminate/overlay/overlay.ddc",
 "packages/angular_components/laminate/overlay/overlay.template": "packages/angular_components/laminate/overlay/overlay.template.ddc",
 "packages/angular_components/laminate/overlay/zindexer": "packages/angular_components/laminate/overlay/zindexer.ddc",
 "packages/angular_components/laminate/overlay/zindexer.template": "packages/angular_components/laminate/overlay/zindexer.template.ddc",
 "packages/angular_components/laminate/popup/module": "packages/angular_components/laminate/popup/module.ddc",
 "packages/angular_components/laminate/popup/module.template": "packages/angular_components/laminate/popup/module.template.ddc",
 "packages/angular_components/laminate/popup/popup": "packages/angular_components/laminate/popup/popup.ddc",
 "packages/angular_components/laminate/popup/popup.template": "packages/angular_components/laminate/popup/popup.template.ddc",
 "packages/angular_components/laminate/portal/portal": "packages/angular_components/laminate/portal/portal.ddc",
 "packages/angular_components/laminate/portal/portal.template": "packages/angular_components/laminate/portal/portal.template.ddc",
 "packages/angular_components/laminate/ruler/dom_ruler": "packages/angular_components/laminate/ruler/dom_ruler.ddc",
 "packages/angular_components/laminate/ruler/dom_ruler.template": "packages/angular_components/laminate/ruler/dom_ruler.template.ddc",
 "packages/angular_components/material_button/material_button": "packages/angular_components/material_button/material_button.ddc",
 "packages/angular_components/material_button/material_button.scss.css.shim": "packages/angular_components/material_button/material_button.scss.css.shim.ddc",
 "packages/angular_components/material_button/material_button.template": "packages/angular_components/material_button/material_button.template.ddc",
 "packages/angular_components/material_button/material_button_base": "packages/angular_components/material_button/material_button_base.ddc",
 "packages/angular_components/material_button/material_button_base.template": "packages/angular_components/material_button/material_button_base.template.ddc",
 "packages/angular_components/material_button/material_fab": "packages/angular_components/material_button/material_fab.ddc",
 "packages/angular_components/material_button/material_fab.scss.css.shim": "packages/angular_components/material_button/material_fab.scss.css.shim.ddc",
 "packages/angular_components/material_button/material_fab.template": "packages/angular_components/material_button/material_fab.template.ddc",
 "packages/angular_components/material_checkbox/material_checkbox": "packages/angular_components/material_checkbox/material_checkbox.ddc",
 "packages/angular_components/material_checkbox/material_checkbox.scss.css.shim": "packages/angular_components/material_checkbox/material_checkbox.scss.css.shim.ddc",
 "packages/angular_components/material_checkbox/material_checkbox.template": "packages/angular_components/material_checkbox/material_checkbox.template.ddc",
 "packages/angular_components/material_chips/material_chip": "packages/angular_components/material_chips/material_chip.ddc",
 "packages/angular_components/material_chips/material_chip.scss.css.shim": "packages/angular_components/material_chips/material_chip.scss.css.shim.ddc",
 "packages/angular_components/material_chips/material_chip.template": "packages/angular_components/material_chips/material_chip.template.ddc",
 "packages/angular_components/material_chips/material_chips": "packages/angular_components/material_chips/material_chips.ddc",
 "packages/angular_components/material_chips/material_chips.scss.css.shim": "packages/angular_components/material_chips/material_chips.scss.css.shim.ddc",
 "packages/angular_components/material_chips/material_chips.template": "packages/angular_components/material_chips/material_chips.template.ddc",
 "packages/angular_components/material_datepicker/calendar": "packages/angular_components/material_datepicker/calendar.ddc",
 "packages/angular_components/material_datepicker/calendar.template": "packages/angular_components/material_datepicker/calendar.template.ddc",
 "packages/angular_components/material_datepicker/comparison": "packages/angular_components/material_datepicker/comparison.ddc",
 "packages/angular_components/material_datepicker/comparison.template": "packages/angular_components/material_datepicker/comparison.template.ddc",
 "packages/angular_components/material_datepicker/comparison_option": "packages/angular_components/material_datepicker/comparison_option.ddc",
 "packages/angular_components/material_datepicker/comparison_option.template": "packages/angular_components/material_datepicker/comparison_option.template.ddc",
 "packages/angular_components/material_datepicker/config": "packages/angular_components/material_datepicker/config.ddc",
 "packages/angular_components/material_datepicker/config.template": "packages/angular_components/material_datepicker/config.template.ddc",
 "packages/angular_components/material_datepicker/date_input": "packages/angular_components/material_datepicker/date_input.ddc",
 "packages/angular_components/material_datepicker/date_input.template": "packages/angular_components/material_datepicker/date_input.template.ddc",
 "packages/angular_components/material_datepicker/date_range_editor": "packages/angular_components/material_datepicker/date_range_editor.ddc",
 "packages/angular_components/material_datepicker/date_range_editor.scss.css.shim": "packages/angular_components/material_datepicker/date_range_editor.scss.css.shim.ddc",
 "packages/angular_components/material_datepicker/date_range_editor.template": "packages/angular_components/material_datepicker/date_range_editor.template.ddc",
 "packages/angular_components/material_datepicker/date_range_editor_host": "packages/angular_components/material_datepicker/date_range_editor_host.ddc",
 "packages/angular_components/material_datepicker/date_range_editor_host.template": "packages/angular_components/material_datepicker/date_range_editor_host.template.ddc",
 "packages/angular_components/material_datepicker/date_range_input": "packages/angular_components/material_datepicker/date_range_input.ddc",
 "packages/angular_components/material_datepicker/date_range_input.scss.css.shim": "packages/angular_components/material_datepicker/date_range_input.scss.css.shim.ddc",
 "packages/angular_components/material_datepicker/date_range_input.template": "packages/angular_components/material_datepicker/date_range_input.template.ddc",
 "packages/angular_components/material_datepicker/material_calendar_picker": "packages/angular_components/material_datepicker/material_calendar_picker.ddc",
 "packages/angular_components/material_datepicker/material_calendar_picker.scss.css.shim": "packages/angular_components/material_datepicker/material_calendar_picker.scss.css.shim.ddc",
 "packages/angular_components/material_datepicker/material_calendar_picker.template": "packages/angular_components/material_datepicker/material_calendar_picker.template.ddc",
 "packages/angular_components/material_datepicker/material_date_range_picker": "packages/angular_components/material_datepicker/material_date_range_picker.ddc",
 "packages/angular_components/material_datepicker/material_date_range_picker.scss.css.shim": "packages/angular_components/material_datepicker/material_date_range_picker.scss.css.shim.ddc",
 "packages/angular_components/material_datepicker/material_date_range_picker.template": "packages/angular_components/material_datepicker/material_date_range_picker.template.ddc",
 "packages/angular_components/material_datepicker/material_date_time_picker": "packages/angular_components/material_datepicker/material_date_time_picker.ddc",
 "packages/angular_components/material_datepicker/material_date_time_picker.scss.css.shim": "packages/angular_components/material_datepicker/material_date_time_picker.scss.css.shim.ddc",
 "packages/angular_components/material_datepicker/material_date_time_picker.template": "packages/angular_components/material_datepicker/material_date_time_picker.template.ddc",
 "packages/angular_components/material_datepicker/material_datepicker": "packages/angular_components/material_datepicker/material_datepicker.ddc",
 "packages/angular_components/material_datepicker/material_datepicker.scss.css.shim": "packages/angular_components/material_datepicker/material_datepicker.scss.css.shim.ddc",
 "packages/angular_components/material_datepicker/material_datepicker.template": "packages/angular_components/material_datepicker/material_datepicker.template.ddc",
 "packages/angular_components/material_datepicker/material_month_picker": "packages/angular_components/material_datepicker/material_month_picker.ddc",
 "packages/angular_components/material_datepicker/material_month_picker.scss.css.shim": "packages/angular_components/material_datepicker/material_month_picker.scss.css.shim.ddc",
 "packages/angular_components/material_datepicker/material_month_picker.template": "packages/angular_components/material_datepicker/material_month_picker.template.ddc",
 "packages/angular_components/material_datepicker/material_time_picker": "packages/angular_components/material_datepicker/material_time_picker.ddc",
 "packages/angular_components/material_datepicker/material_time_picker.scss.css.shim": "packages/angular_components/material_datepicker/material_time_picker.scss.css.shim.ddc",
 "packages/angular_components/material_datepicker/material_time_picker.template": "packages/angular_components/material_datepicker/material_time_picker.template.ddc",
 "packages/angular_components/material_datepicker/model": "packages/angular_components/material_datepicker/model.ddc",
 "packages/angular_components/material_datepicker/model.template": "packages/angular_components/material_datepicker/model.template.ddc",
 "packages/angular_components/material_datepicker/module": "packages/angular_components/material_datepicker/module.ddc",
 "packages/angular_components/material_datepicker/module.template": "packages/angular_components/material_datepicker/module.template.ddc",
 "packages/angular_components/material_datepicker/next_prev_buttons": "packages/angular_components/material_datepicker/next_prev_buttons.ddc",
 "packages/angular_components/material_datepicker/next_prev_buttons.scss.css.shim": "packages/angular_components/material_datepicker/next_prev_buttons.scss.css.shim.ddc",
 "packages/angular_components/material_datepicker/next_prev_buttons.template": "packages/angular_components/material_datepicker/next_prev_buttons.template.ddc",
 "packages/angular_components/material_datepicker/preset": "packages/angular_components/material_datepicker/preset.ddc",
 "packages/angular_components/material_datepicker/preset.template": "packages/angular_components/material_datepicker/preset.template.ddc",
 "packages/angular_components/material_datepicker/proto/date.pb": "packages/angular_components/material_datepicker/proto/date.pb.ddc",
 "packages/angular_components/material_datepicker/proto/date.pb.template": "packages/angular_components/material_datepicker/proto/date.pb.template.ddc",
 "packages/angular_components/material_datepicker/proto/date_range.pb": "packages/angular_components/material_datepicker/proto/date_range.pb.ddc",
 "packages/angular_components/material_datepicker/proto/date_range.pb.template": "packages/angular_components/material_datepicker/proto/date_range.pb.template.ddc",
 "packages/angular_components/material_datepicker/range": "packages/angular_components/material_datepicker/range.ddc",
 "packages/angular_components/material_datepicker/range.template": "packages/angular_components/material_datepicker/range.template.ddc",
 "packages/angular_components/material_dialog/material_dialog": "packages/angular_components/material_dialog/material_dialog.ddc",
 "packages/angular_components/material_dialog/material_dialog.scss.css.shim": "packages/angular_components/material_dialog/material_dialog.scss.css.shim.ddc",
 "packages/angular_components/material_dialog/material_dialog.template": "packages/angular_components/material_dialog/material_dialog.template.ddc",
 "packages/angular_components/material_expansionpanel/material_expansionpanel": "packages/angular_components/material_expansionpanel/material_expansionpanel.ddc",
 "packages/angular_components/material_expansionpanel/material_expansionpanel.scss.css.shim": "packages/angular_components/material_expansionpanel/material_expansionpanel.scss.css.shim.ddc",
 "packages/angular_components/material_expansionpanel/material_expansionpanel.template": "packages/angular_components/material_expansionpanel/material_expansionpanel.template.ddc",
 "packages/angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss": "packages/angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss.ddc",
 "packages/angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss.template": "packages/angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss.template.ddc",
 "packages/angular_components/material_expansionpanel/material_expansionpanel_set": "packages/angular_components/material_expansionpanel/material_expansionpanel_set.ddc",
 "packages/angular_components/material_expansionpanel/material_expansionpanel_set.template": "packages/angular_components/material_expansionpanel/material_expansionpanel_set.template.ddc",
 "packages/angular_components/material_icon/material_icon": "packages/angular_components/material_icon/material_icon.ddc",
 "packages/angular_components/material_icon/material_icon.scss.css.shim": "packages/angular_components/material_icon/material_icon.scss.css.shim.ddc",
 "packages/angular_components/material_icon/material_icon.template": "packages/angular_components/material_icon/material_icon.template.ddc",
 "packages/angular_components/material_input/base_material_input": "packages/angular_components/material_input/base_material_input.ddc",
 "packages/angular_components/material_input/base_material_input.template": "packages/angular_components/material_input/base_material_input.template.ddc",
 "packages/angular_components/material_input/deferred_validator": "packages/angular_components/material_input/deferred_validator.ddc",
 "packages/angular_components/material_input/deferred_validator.template": "packages/angular_components/material_input/deferred_validator.template.ddc",
 "packages/angular_components/material_input/input_wrapper": "packages/angular_components/material_input/input_wrapper.ddc",
 "packages/angular_components/material_input/input_wrapper.template": "packages/angular_components/material_input/input_wrapper.template.ddc",
 "packages/angular_components/material_input/material_auto_suggest_input": "packages/angular_components/material_input/material_auto_suggest_input.ddc",
 "packages/angular_components/material_input/material_auto_suggest_input.scss.css.shim": "packages/angular_components/material_input/material_auto_suggest_input.scss.css.shim.ddc",
 "packages/angular_components/material_input/material_auto_suggest_input.template": "packages/angular_components/material_input/material_auto_suggest_input.template.ddc",
 "packages/angular_components/material_input/material_input": "packages/angular_components/material_input/material_input.ddc",
 "packages/angular_components/material_input/material_input.scss.css.shim": "packages/angular_components/material_input/material_input.scss.css.shim.ddc",
 "packages/angular_components/material_input/material_input.template": "packages/angular_components/material_input/material_input.template.ddc",
 "packages/angular_components/material_input/material_input_default_value_accessor": "packages/angular_components/material_input/material_input_default_value_accessor.ddc",
 "packages/angular_components/material_input/material_input_default_value_accessor.template": "packages/angular_components/material_input/material_input_default_value_accessor.template.ddc",
 "packages/angular_components/material_input/material_input_error_keys": "packages/angular_components/material_input/material_input_error_keys.ddc",
 "packages/angular_components/material_input/material_input_error_keys.template": "packages/angular_components/material_input/material_input_error_keys.template.ddc",
 "packages/angular_components/material_input/material_input_multiline": "packages/angular_components/material_input/material_input_multiline.ddc",
 "packages/angular_components/material_input/material_input_multiline.scss.css.shim": "packages/angular_components/material_input/material_input_multiline.scss.css.shim.ddc",
 "packages/angular_components/material_input/material_input_multiline.template": "packages/angular_components/material_input/material_input_multiline.template.ddc",
 "packages/angular_components/material_input/material_input_wrapper.scss.css.shim": "packages/angular_components/material_input/material_input_wrapper.scss.css.shim.ddc",
 "packages/angular_components/material_input/material_number_accessor": "packages/angular_components/material_input/material_number_accessor.ddc",
 "packages/angular_components/material_input/material_number_accessor.template": "packages/angular_components/material_input/material_number_accessor.template.ddc",
 "packages/angular_components/material_input/material_number_validators": "packages/angular_components/material_input/material_number_validators.ddc",
 "packages/angular_components/material_input/material_number_validators.template": "packages/angular_components/material_input/material_number_validators.template.ddc",
 "packages/angular_components/material_input/material_percent_directive": "packages/angular_components/material_input/material_percent_directive.ddc",
 "packages/angular_components/material_input/material_percent_directive.template": "packages/angular_components/material_input/material_percent_directive.template.ddc",
 "packages/angular_components/material_list/material_list": "packages/angular_components/material_list/material_list.ddc",
 "packages/angular_components/material_list/material_list.scss.css.shim": "packages/angular_components/material_list/material_list.scss.css.shim.ddc",
 "packages/angular_components/material_list/material_list.template": "packages/angular_components/material_list/material_list.template.ddc",
 "packages/angular_components/material_list/material_list_item": "packages/angular_components/material_list/material_list_item.ddc",
 "packages/angular_components/material_list/material_list_item.scss.css.shim": "packages/angular_components/material_list/material_list_item.scss.css.shim.ddc",
 "packages/angular_components/material_list/material_list_item.template": "packages/angular_components/material_list/material_list_item.template.ddc",
 "packages/angular_components/material_list/material_list_size": "packages/angular_components/material_list/material_list_size.ddc",
 "packages/angular_components/material_list/material_list_size.template": "packages/angular_components/material_list/material_list_size.template.ddc",
 "packages/angular_components/material_menu/affix/base_affix": "packages/angular_components/material_menu/affix/base_affix.ddc",
 "packages/angular_components/material_menu/affix/base_affix.template": "packages/angular_components/material_menu/affix/base_affix.template.ddc",
 "packages/angular_components/material_menu/common/menu_root": "packages/angular_components/material_menu/common/menu_root.ddc",
 "packages/angular_components/material_menu/common/menu_root.template": "packages/angular_components/material_menu/common/menu_root.template.ddc",
 "packages/angular_components/material_menu/dropdown_menu": "packages/angular_components/material_menu/dropdown_menu.ddc",
 "packages/angular_components/material_menu/dropdown_menu.template": "packages/angular_components/material_menu/dropdown_menu.template.ddc",
 "packages/angular_components/material_menu/material_fab_menu": "packages/angular_components/material_menu/material_fab_menu.ddc",
 "packages/angular_components/material_menu/material_fab_menu.scss.css.shim": "packages/angular_components/material_menu/material_fab_menu.scss.css.shim.ddc",
 "packages/angular_components/material_menu/material_fab_menu.template": "packages/angular_components/material_menu/material_fab_menu.template.ddc",
 "packages/angular_components/material_menu/material_menu": "packages/angular_components/material_menu/material_menu.ddc",
 "packages/angular_components/material_menu/material_menu.template": "packages/angular_components/material_menu/material_menu.template.ddc",
 "packages/angular_components/material_menu/menu_item_affix_list": "packages/angular_components/material_menu/menu_item_affix_list.ddc",
 "packages/angular_components/material_menu/menu_item_affix_list.scss.css.shim": "packages/angular_components/material_menu/menu_item_affix_list.scss.css.shim.ddc",
 "packages/angular_components/material_menu/menu_item_affix_list.template": "packages/angular_components/material_menu/menu_item_affix_list.template.ddc",
 "packages/angular_components/material_menu/menu_item_groups.scss.css.shim": "packages/angular_components/material_menu/menu_item_groups.scss.css.shim.ddc",
 "packages/angular_components/material_menu/menu_popup.scss.css.shim": "packages/angular_components/material_menu/menu_popup.scss.css.shim.ddc",
 "packages/angular_components/material_menu/menu_popup_wrapper": "packages/angular_components/material_menu/menu_popup_wrapper.ddc",
 "packages/angular_components/material_menu/menu_popup_wrapper.template": "packages/angular_components/material_menu/menu_popup_wrapper.template.ddc",
 "packages/angular_components/material_menu/menu_root": "packages/angular_components/material_menu/menu_root.ddc",
 "packages/angular_components/material_menu/menu_root.template": "packages/angular_components/material_menu/menu_root.template.ddc",
 "packages/angular_components/material_popup/material_popup": "packages/angular_components/material_popup/material_popup.ddc",
 "packages/angular_components/material_popup/material_popup.scss.css.shim": "packages/angular_components/material_popup/material_popup.scss.css.shim.ddc",
 "packages/angular_components/material_popup/material_popup.template": "packages/angular_components/material_popup/material_popup.template.ddc",
 "packages/angular_components/material_progress/material_progress": "packages/angular_components/material_progress/material_progress.ddc",
 "packages/angular_components/material_progress/material_progress.scss.css.shim": "packages/angular_components/material_progress/material_progress.scss.css.shim.ddc",
 "packages/angular_components/material_progress/material_progress.template": "packages/angular_components/material_progress/material_progress.template.ddc",
 "packages/angular_components/material_radio/material_radio": "packages/angular_components/material_radio/material_radio.ddc",
 "packages/angular_components/material_radio/material_radio.scss.css.shim": "packages/angular_components/material_radio/material_radio.scss.css.shim.ddc",
 "packages/angular_components/material_radio/material_radio.template": "packages/angular_components/material_radio/material_radio.template.ddc",
 "packages/angular_components/material_radio/material_radio_group.scss.css.shim": "packages/angular_components/material_radio/material_radio_group.scss.css.shim.ddc",
 "packages/angular_components/material_ripple/material_ripple": "packages/angular_components/material_ripple/material_ripple.ddc",
 "packages/angular_components/material_ripple/material_ripple.scss.css": "packages/angular_components/material_ripple/material_ripple.scss.css.ddc",
 "packages/angular_components/material_ripple/material_ripple.template": "packages/angular_components/material_ripple/material_ripple.template.ddc",
 "packages/angular_components/material_select/activation_handler": "packages/angular_components/material_select/activation_handler.ddc",
 "packages/angular_components/material_select/activation_handler.template": "packages/angular_components/material_select/activation_handler.template.ddc",
 "packages/angular_components/material_select/display_name": "packages/angular_components/material_select/display_name.ddc",
 "packages/angular_components/material_select/display_name.template": "packages/angular_components/material_select/display_name.template.ddc",
 "packages/angular_components/material_select/dropdown_button": "packages/angular_components/material_select/dropdown_button.ddc",
 "packages/angular_components/material_select/dropdown_button.scss.css.shim": "packages/angular_components/material_select/dropdown_button.scss.css.shim.ddc",
 "packages/angular_components/material_select/dropdown_button.template": "packages/angular_components/material_select/dropdown_button.template.ddc",
 "packages/angular_components/material_select/handles_aria": "packages/angular_components/material_select/handles_aria.ddc",
 "packages/angular_components/material_select/handles_aria.template": "packages/angular_components/material_select/handles_aria.template.ddc",
 "packages/angular_components/material_select/material_dropdown_select": "packages/angular_components/material_select/material_dropdown_select.ddc",
 "packages/angular_components/material_select/material_dropdown_select.scss.css.shim": "packages/angular_components/material_select/material_dropdown_select.scss.css.shim.ddc",
 "packages/angular_components/material_select/material_dropdown_select.template": "packages/angular_components/material_select/material_dropdown_select.template.ddc",
 "packages/angular_components/material_select/material_dropdown_select_accessor": "packages/angular_components/material_select/material_dropdown_select_accessor.ddc",
 "packages/angular_components/material_select/material_dropdown_select_accessor.template": "packages/angular_components/material_select/material_dropdown_select_accessor.template.ddc",
 "packages/angular_components/material_select/material_select": "packages/angular_components/material_select/material_select.ddc",
 "packages/angular_components/material_select/material_select.scss.css.shim": "packages/angular_components/material_select/material_select.scss.css.shim.ddc",
 "packages/angular_components/material_select/material_select.template": "packages/angular_components/material_select/material_select.template.ddc",
 "packages/angular_components/material_select/material_select_base": "packages/angular_components/material_select/material_select_base.ddc",
 "packages/angular_components/material_select/material_select_base.template": "packages/angular_components/material_select/material_select_base.template.ddc",
 "packages/angular_components/material_select/material_select_dropdown_item": "packages/angular_components/material_select/material_select_dropdown_item.ddc",
 "packages/angular_components/material_select/material_select_dropdown_item.scss.css.shim": "packages/angular_components/material_select/material_select_dropdown_item.scss.css.shim.ddc",
 "packages/angular_components/material_select/material_select_dropdown_item.template": "packages/angular_components/material_select/material_select_dropdown_item.template.ddc",
 "packages/angular_components/material_select/material_select_item": "packages/angular_components/material_select/material_select_item.ddc",
 "packages/angular_components/material_select/material_select_item.scss.css.shim": "packages/angular_components/material_select/material_select_item.scss.css.shim.ddc",
 "packages/angular_components/material_select/material_select_item.template": "packages/angular_components/material_select/material_select_item.template.ddc",
 "packages/angular_components/material_select/material_select_searchbox": "packages/angular_components/material_select/material_select_searchbox.ddc",
 "packages/angular_components/material_select/material_select_searchbox.scss.css.shim": "packages/angular_components/material_select/material_select_searchbox.scss.css.shim.ddc",
 "packages/angular_components/material_select/material_select_searchbox.template": "packages/angular_components/material_select/material_select_searchbox.template.ddc",
 "packages/angular_components/material_select/shift_click_selection": "packages/angular_components/material_select/shift_click_selection.ddc",
 "packages/angular_components/material_select/shift_click_selection.template": "packages/angular_components/material_select/shift_click_selection.template.ddc",
 "packages/angular_components/material_slider/material_slider": "packages/angular_components/material_slider/material_slider.ddc",
 "packages/angular_components/material_slider/material_slider.scss.css.shim": "packages/angular_components/material_slider/material_slider.scss.css.shim.ddc",
 "packages/angular_components/material_slider/material_slider.template": "packages/angular_components/material_slider/material_slider.template.ddc",
 "packages/angular_components/material_spinner/material_spinner": "packages/angular_components/material_spinner/material_spinner.ddc",
 "packages/angular_components/material_spinner/material_spinner.scss.css.shim": "packages/angular_components/material_spinner/material_spinner.scss.css.shim.ddc",
 "packages/angular_components/material_spinner/material_spinner.template": "packages/angular_components/material_spinner/material_spinner.template.ddc",
 "packages/angular_components/material_stepper/common": "packages/angular_components/material_stepper/common.ddc",
 "packages/angular_components/material_stepper/common.template": "packages/angular_components/material_stepper/common.template.ddc",
 "packages/angular_components/material_stepper/material_step": "packages/angular_components/material_stepper/material_step.ddc",
 "packages/angular_components/material_stepper/material_step.template": "packages/angular_components/material_stepper/material_step.template.ddc",
 "packages/angular_components/material_stepper/material_stepper": "packages/angular_components/material_stepper/material_stepper.ddc",
 "packages/angular_components/material_stepper/material_stepper.scss.css.shim": "packages/angular_components/material_stepper/material_stepper.scss.css.shim.ddc",
 "packages/angular_components/material_stepper/material_stepper.template": "packages/angular_components/material_stepper/material_stepper.template.ddc",
 "packages/angular_components/material_tab/fixed_material_tab_strip": "packages/angular_components/material_tab/fixed_material_tab_strip.ddc",
 "packages/angular_components/material_tab/fixed_material_tab_strip.scss.css.shim": "packages/angular_components/material_tab/fixed_material_tab_strip.scss.css.shim.ddc",
 "packages/angular_components/material_tab/fixed_material_tab_strip.template": "packages/angular_components/material_tab/fixed_material_tab_strip.template.ddc",
 "packages/angular_components/material_tab/material_tab": "packages/angular_components/material_tab/material_tab.ddc",
 "packages/angular_components/material_tab/material_tab.scss.css.shim": "packages/angular_components/material_tab/material_tab.scss.css.shim.ddc",
 "packages/angular_components/material_tab/material_tab.template": "packages/angular_components/material_tab/material_tab.template.ddc",
 "packages/angular_components/material_tab/material_tab_panel": "packages/angular_components/material_tab/material_tab_panel.ddc",
 "packages/angular_components/material_tab/material_tab_panel.scss.css.shim": "packages/angular_components/material_tab/material_tab_panel.scss.css.shim.ddc",
 "packages/angular_components/material_tab/material_tab_panel.template": "packages/angular_components/material_tab/material_tab_panel.template.ddc",
 "packages/angular_components/material_tab/tab_button": "packages/angular_components/material_tab/tab_button.ddc",
 "packages/angular_components/material_tab/tab_button.scss.css.shim": "packages/angular_components/material_tab/tab_button.scss.css.shim.ddc",
 "packages/angular_components/material_tab/tab_button.template": "packages/angular_components/material_tab/tab_button.template.ddc",
 "packages/angular_components/material_tab/tab_change_event": "packages/angular_components/material_tab/tab_change_event.ddc",
 "packages/angular_components/material_tab/tab_change_event.template": "packages/angular_components/material_tab/tab_change_event.template.ddc",
 "packages/angular_components/material_tab/tab_mixin": "packages/angular_components/material_tab/tab_mixin.ddc",
 "packages/angular_components/material_tab/tab_mixin.template": "packages/angular_components/material_tab/tab_mixin.template.ddc",
 "packages/angular_components/material_toggle/material_toggle": "packages/angular_components/material_toggle/material_toggle.ddc",
 "packages/angular_components/material_toggle/material_toggle.scss.css.shim": "packages/angular_components/material_toggle/material_toggle.scss.css.shim.ddc",
 "packages/angular_components/material_toggle/material_toggle.template": "packages/angular_components/material_toggle/material_toggle.template.ddc",
 "packages/angular_components/material_tooltip/material_tooltip": "packages/angular_components/material_tooltip/material_tooltip.ddc",
 "packages/angular_components/material_tooltip/material_tooltip.template": "packages/angular_components/material_tooltip/material_tooltip.template.ddc",
 "packages/angular_components/material_tooltip/module": "packages/angular_components/material_tooltip/module.ddc",
 "packages/angular_components/material_tooltip/module.template": "packages/angular_components/material_tooltip/module.template.ddc",
 "packages/angular_components/material_tree/material_tree": "packages/angular_components/material_tree/material_tree.ddc",
 "packages/angular_components/material_tree/material_tree.template": "packages/angular_components/material_tree/material_tree.template.ddc",
 "packages/angular_components/material_yes_no_buttons/material_yes_no_buttons": "packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.ddc",
 "packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.scss.css.shim": "packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.scss.css.shim.ddc",
 "packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.template": "packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.template.ddc",
 "packages/angular_components/mixins/button_wrapper": "packages/angular_components/mixins/button_wrapper.ddc",
 "packages/angular_components/mixins/button_wrapper.template": "packages/angular_components/mixins/button_wrapper.template.ddc",
 "packages/angular_components/mixins/focusable_mixin": "packages/angular_components/mixins/focusable_mixin.ddc",
 "packages/angular_components/mixins/focusable_mixin.template": "packages/angular_components/mixins/focusable_mixin.template.ddc",
 "packages/angular_components/mixins/has_tab_index": "packages/angular_components/mixins/has_tab_index.ddc",
 "packages/angular_components/mixins/has_tab_index.template": "packages/angular_components/mixins/has_tab_index.template.ddc",
 "packages/angular_components/mixins/highlight_assistant_mixin": "packages/angular_components/mixins/highlight_assistant_mixin.ddc",
 "packages/angular_components/mixins/highlight_assistant_mixin.template": "packages/angular_components/mixins/highlight_assistant_mixin.template.ddc",
 "packages/angular_components/mixins/material_dropdown_base": "packages/angular_components/mixins/material_dropdown_base.ddc",
 "packages/angular_components/mixins/material_dropdown_base.template": "packages/angular_components/mixins/material_dropdown_base.template.ddc",
 "packages/angular_components/mixins/selection_input_adapter": "packages/angular_components/mixins/selection_input_adapter.ddc",
 "packages/angular_components/mixins/selection_input_adapter.template": "packages/angular_components/mixins/selection_input_adapter.template.ddc",
 "packages/angular_components/mixins/track_layout_changes": "packages/angular_components/mixins/track_layout_changes.ddc",
 "packages/angular_components/mixins/track_layout_changes.template": "packages/angular_components/mixins/track_layout_changes.template.ddc",
 "packages/angular_components/model/a11y/active_item": "packages/angular_components/model/a11y/active_item.ddc",
 "packages/angular_components/model/a11y/active_item.template": "packages/angular_components/model/a11y/active_item.template.ddc",
 "packages/angular_components/model/a11y/active_item_directive": "packages/angular_components/model/a11y/active_item_directive.ddc",
 "packages/angular_components/model/a11y/active_item_directive.template": "packages/angular_components/model/a11y/active_item_directive.template.ddc",
 "packages/angular_components/model/a11y/keyboard_handler_mixin": "packages/angular_components/model/a11y/keyboard_handler_mixin.ddc",
 "packages/angular_components/model/a11y/keyboard_handler_mixin.template": "packages/angular_components/model/a11y/keyboard_handler_mixin.template.ddc",
 "packages/angular_components/model/action/async_action": "packages/angular_components/model/action/async_action.ddc",
 "packages/angular_components/model/action/async_action.template": "packages/angular_components/model/action/async_action.template.ddc",
 "packages/angular_components/model/action/delayed_action": "packages/angular_components/model/action/delayed_action.ddc",
 "packages/angular_components/model/action/delayed_action.template": "packages/angular_components/model/action/delayed_action.template.ddc",
 "packages/angular_components/model/collection/combined_list": "packages/angular_components/model/collection/combined_list.ddc",
 "packages/angular_components/model/collection/combined_list.template": "packages/angular_components/model/collection/combined_list.template.ddc",
 "packages/angular_components/model/collection/labeled_list": "packages/angular_components/model/collection/labeled_list.ddc",
 "packages/angular_components/model/collection/labeled_list.template": "packages/angular_components/model/collection/labeled_list.template.ddc",
 "packages/angular_components/model/date/date": "packages/angular_components/model/date/date.ddc",
 "packages/angular_components/model/date/date.template": "packages/angular_components/model/date/date.template.ddc",
 "packages/angular_components/model/date/date_formatter": "packages/angular_components/model/date/date_formatter.ddc",
 "packages/angular_components/model/date/date_formatter.template": "packages/angular_components/model/date/date_formatter.template.ddc",
 "packages/angular_components/model/date/time_zone_aware_clock": "packages/angular_components/model/date/time_zone_aware_clock.ddc",
 "packages/angular_components/model/date/time_zone_aware_clock.template": "packages/angular_components/model/date/time_zone_aware_clock.template.ddc",
 "packages/angular_components/model/formatters/formatter": "packages/angular_components/model/formatters/formatter.ddc",
 "packages/angular_components/model/formatters/formatter.template": "packages/angular_components/model/formatters/formatter.template.ddc",
 "packages/angular_components/model/math/box": "packages/angular_components/model/math/box.ddc",
 "packages/angular_components/model/math/box.template": "packages/angular_components/model/math/box.template.ddc",
 "packages/angular_components/model/menu/menu": "packages/angular_components/model/menu/menu.ddc",
 "packages/angular_components/model/menu/menu.template": "packages/angular_components/model/menu/menu.template.ddc",
 "packages/angular_components/model/menu/menu_item_affix": "packages/angular_components/model/menu/menu_item_affix.ddc",
 "packages/angular_components/model/menu/menu_item_affix.template": "packages/angular_components/model/menu/menu_item_affix.template.ddc",
 "packages/angular_components/model/menu/selectable_menu": "packages/angular_components/model/menu/selectable_menu.ddc",
 "packages/angular_components/model/menu/selectable_menu.template": "packages/angular_components/model/menu/selectable_menu.template.ddc",
 "packages/angular_components/model/observable/observable": "packages/angular_components/model/observable/observable.ddc",
 "packages/angular_components/model/observable/observable.template": "packages/angular_components/model/observable/observable.template.ddc",
 "packages/angular_components/model/selection/select": "packages/angular_components/model/selection/select.ddc",
 "packages/angular_components/model/selection/select.template": "packages/angular_components/model/selection/select.template.ddc",
 "packages/angular_components/model/selection/selection_container": "packages/angular_components/model/selection/selection_container.ddc",
 "packages/angular_components/model/selection/selection_container.template": "packages/angular_components/model/selection/selection_container.template.ddc",
 "packages/angular_components/model/selection/selection_model": "packages/angular_components/model/selection/selection_model.ddc",
 "packages/angular_components/model/selection/selection_model.template": "packages/angular_components/model/selection/selection_model.template.ddc",
 "packages/angular_components/model/selection/selection_options": "packages/angular_components/model/selection/selection_options.ddc",
 "packages/angular_components/model/selection/selection_options.template": "packages/angular_components/model/selection/selection_options.template.ddc",
 "packages/angular_components/model/selection/string_selection_options": "packages/angular_components/model/selection/string_selection_options.ddc",
 "packages/angular_components/model/selection/string_selection_options.template": "packages/angular_components/model/selection/string_selection_options.template.ddc",
 "packages/angular_components/model/ui/accepts_width": "packages/angular_components/model/ui/accepts_width.ddc",
 "packages/angular_components/model/ui/accepts_width.template": "packages/angular_components/model/ui/accepts_width.template.ddc",
 "packages/angular_components/model/ui/display_name": "packages/angular_components/model/ui/display_name.ddc",
 "packages/angular_components/model/ui/display_name.template": "packages/angular_components/model/ui/display_name.template.ddc",
 "packages/angular_components/model/ui/has_factory": "packages/angular_components/model/ui/has_factory.ddc",
 "packages/angular_components/model/ui/has_factory.template": "packages/angular_components/model/ui/has_factory.template.ddc",
 "packages/angular_components/model/ui/has_renderer": "packages/angular_components/model/ui/has_renderer.ddc",
 "packages/angular_components/model/ui/has_renderer.template": "packages/angular_components/model/ui/has_renderer.template.ddc",
 "packages/angular_components/model/ui/highlight_assistant": "packages/angular_components/model/ui/highlight_assistant.ddc",
 "packages/angular_components/model/ui/highlight_assistant.template": "packages/angular_components/model/ui/highlight_assistant.template.ddc",
 "packages/angular_components/model/ui/highlight_provider": "packages/angular_components/model/ui/highlight_provider.ddc",
 "packages/angular_components/model/ui/highlight_provider.template": "packages/angular_components/model/ui/highlight_provider.template.ddc",
 "packages/angular_components/model/ui/highlighted_text_model": "packages/angular_components/model/ui/highlighted_text_model.ddc",
 "packages/angular_components/model/ui/highlighted_text_model.template": "packages/angular_components/model/ui/highlighted_text_model.template.ddc",
 "packages/angular_components/model/ui/icon": "packages/angular_components/model/ui/icon.ddc",
 "packages/angular_components/model/ui/icon.template": "packages/angular_components/model/ui/icon.template.ddc",
 "packages/angular_components/model/ui/template_support": "packages/angular_components/model/ui/template_support.ddc",
 "packages/angular_components/model/ui/template_support.template": "packages/angular_components/model/ui/template_support.template.ddc",
 "packages/angular_components/model/ui/toggle": "packages/angular_components/model/ui/toggle.ddc",
 "packages/angular_components/model/ui/toggle.template": "packages/angular_components/model/ui/toggle.template.ddc",
 "packages/angular_components/reorder_list/reorder_events": "packages/angular_components/reorder_list/reorder_events.ddc",
 "packages/angular_components/reorder_list/reorder_events.template": "packages/angular_components/reorder_list/reorder_events.template.ddc",
 "packages/angular_components/reorder_list/reorder_list": "packages/angular_components/reorder_list/reorder_list.ddc",
 "packages/angular_components/reorder_list/reorder_list.scss.css.shim": "packages/angular_components/reorder_list/reorder_list.scss.css.shim.ddc",
 "packages/angular_components/reorder_list/reorder_list.template": "packages/angular_components/reorder_list/reorder_list.template.ddc",
 "packages/angular_components/scorecard/scoreboard": "packages/angular_components/scorecard/scoreboard.ddc",
 "packages/angular_components/scorecard/scoreboard.scss.css.shim": "packages/angular_components/scorecard/scoreboard.scss.css.shim.ddc",
 "packages/angular_components/scorecard/scoreboard.template": "packages/angular_components/scorecard/scoreboard.template.ddc",
 "packages/angular_components/scorecard/scorecard": "packages/angular_components/scorecard/scorecard.ddc",
 "packages/angular_components/scorecard/scorecard.scss.css.shim": "packages/angular_components/scorecard/scorecard.scss.css.shim.ddc",
 "packages/angular_components/scorecard/scorecard.template": "packages/angular_components/scorecard/scorecard.template.ddc",
 "packages/angular_components/scorecard/scorecard_bar": "packages/angular_components/scorecard/scorecard_bar.ddc",
 "packages/angular_components/scorecard/scorecard_bar.template": "packages/angular_components/scorecard/scorecard_bar.template.ddc",
 "packages/angular_components/src/laminate/components/modal/modal_controller_directive": "packages/angular_components/src/laminate/components/modal/modal_controller_directive.ddc",
 "packages/angular_components/src/laminate/components/modal/modal_controller_directive.template": "packages/angular_components/src/laminate/components/modal/modal_controller_directive.template.ddc",
 "packages/angular_components/src/laminate/enums/base": "packages/angular_components/src/laminate/enums/base.ddc",
 "packages/angular_components/src/laminate/enums/base.template": "packages/angular_components/src/laminate/enums/base.template.ddc",
 "packages/angular_components/src/laminate/overlay/overlay_ref": "packages/angular_components/src/laminate/overlay/overlay_ref.ddc",
 "packages/angular_components/src/laminate/overlay/overlay_ref.template": "packages/angular_components/src/laminate/overlay/overlay_ref.template.ddc",
 "packages/angular_components/src/laminate/popup/dom_popup_source": "packages/angular_components/src/laminate/popup/dom_popup_source.ddc",
 "packages/angular_components/src/laminate/popup/dom_popup_source.template": "packages/angular_components/src/laminate/popup/dom_popup_source.template.ddc",
 "packages/angular_components/src/laminate/popup/popup_hierarchy": "packages/angular_components/src/laminate/popup/popup_hierarchy.ddc",
 "packages/angular_components/src/laminate/popup/popup_hierarchy.template": "packages/angular_components/src/laminate/popup/popup_hierarchy.template.ddc",
 "packages/angular_components/src/laminate/ruler/ruler_interface": "packages/angular_components/src/laminate/ruler/ruler_interface.ddc",
 "packages/angular_components/src/laminate/ruler/ruler_interface.template": "packages/angular_components/src/laminate/ruler/ruler_interface.template.ddc",
 "packages/angular_components/src/material_datepicker/calendar_listener": "packages/angular_components/src/material_datepicker/calendar_listener.ddc",
 "packages/angular_components/src/material_datepicker/calendar_listener.template": "packages/angular_components/src/material_datepicker/calendar_listener.template.ddc",
 "packages/angular_components/src/material_datepicker/comparison_range_editor": "packages/angular_components/src/material_datepicker/comparison_range_editor.ddc",
 "packages/angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim": "packages/angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim.ddc",
 "packages/angular_components/src/material_datepicker/sequential": "packages/angular_components/src/material_datepicker/sequential.ddc",
 "packages/angular_components/src/material_datepicker/sequential.template": "packages/angular_components/src/material_datepicker/sequential.template.ddc",
 "packages/angular_components/src/material_tooltip/icon_tooltip": "packages/angular_components/src/material_tooltip/icon_tooltip.ddc",
 "packages/angular_components/src/material_tooltip/icon_tooltip.scss.css.shim": "packages/angular_components/src/material_tooltip/icon_tooltip.scss.css.shim.ddc",
 "packages/angular_components/src/material_tooltip/tooltip_controller": "packages/angular_components/src/material_tooltip/tooltip_controller.ddc",
 "packages/angular_components/src/material_tooltip/tooltip_controller.template": "packages/angular_components/src/material_tooltip/tooltip_controller.template.ddc",
 "packages/angular_components/src/material_tree/group/material_tree_group": "packages/angular_components/src/material_tree/group/material_tree_group.ddc",
 "packages/angular_components/src/material_tree/group/material_tree_group.scss.css.shim": "packages/angular_components/src/material_tree/group/material_tree_group.scss.css.shim.ddc",
 "packages/angular_components/src/model/action/async_action": "packages/angular_components/src/model/action/async_action.ddc",
 "packages/angular_components/src/model/action/async_action.template": "packages/angular_components/src/model/action/async_action.template.ddc",
 "packages/angular_components/src/model/selection/interfaces/selectable": "packages/angular_components/src/model/selection/interfaces/selectable.ddc",
 "packages/angular_components/src/model/selection/interfaces/selectable.template": "packages/angular_components/src/model/selection/interfaces/selectable.template.ddc",
 "packages/angular_components/src/utils/angular/managed_zone/managed_zone": "packages/angular_components/src/utils/angular/managed_zone/managed_zone.ddc",
 "packages/angular_components/src/utils/angular/managed_zone/managed_zone.template": "packages/angular_components/src/utils/angular/managed_zone/managed_zone.template.ddc",
 "packages/angular_components/src/utils/angular/scroll_host/pan_controller_impl": "packages/angular_components/src/utils/angular/scroll_host/pan_controller_impl.ddc",
 "packages/angular_components/src/utils/angular/scroll_host/pan_controller_impl.template": "packages/angular_components/src/utils/angular/scroll_host/pan_controller_impl.template.ddc",
 "packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface": "packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface.ddc",
 "packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface.template": "packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface.template.ddc",
 "packages/angular_components/src/utils/async/async_update_scheduler": "packages/angular_components/src/utils/async/async_update_scheduler.ddc",
 "packages/angular_components/src/utils/async/async_update_scheduler.template": "packages/angular_components/src/utils/async/async_update_scheduler.template.ddc",
 "packages/angular_components/stop_propagation/stop_propagation": "packages/angular_components/stop_propagation/stop_propagation.ddc",
 "packages/angular_components/stop_propagation/stop_propagation.template": "packages/angular_components/stop_propagation/stop_propagation.template.ddc",
 "packages/angular_components/theme/dark_theme": "packages/angular_components/theme/dark_theme.ddc",
 "packages/angular_components/theme/dark_theme.template": "packages/angular_components/theme/dark_theme.template.ddc",
 "packages/angular_components/theme/module": "packages/angular_components/theme/module.ddc",
 "packages/angular_components/theme/module.template": "packages/angular_components/theme/module.template.ddc",
 "packages/angular_components/utils/angular/css/css": "packages/angular_components/utils/angular/css/css.ddc",
 "packages/angular_components/utils/angular/css/css.template": "packages/angular_components/utils/angular/css/css.template.ddc",
 "packages/angular_components/utils/angular/id/id": "packages/angular_components/utils/angular/id/id.ddc",
 "packages/angular_components/utils/angular/id/id.template": "packages/angular_components/utils/angular/id/id.template.ddc",
 "packages/angular_components/utils/angular/imperative_view/imperative_view": "packages/angular_components/utils/angular/imperative_view/imperative_view.ddc",
 "packages/angular_components/utils/angular/imperative_view/imperative_view.template": "packages/angular_components/utils/angular/imperative_view/imperative_view.template.ddc",
 "packages/angular_components/utils/angular/managed_zone/angular_2": "packages/angular_components/utils/angular/managed_zone/angular_2.ddc",
 "packages/angular_components/utils/angular/managed_zone/angular_2.template": "packages/angular_components/utils/angular/managed_zone/angular_2.template.ddc",
 "packages/angular_components/utils/angular/managed_zone/interface": "packages/angular_components/utils/angular/managed_zone/interface.ddc",
 "packages/angular_components/utils/angular/managed_zone/interface.template": "packages/angular_components/utils/angular/managed_zone/interface.template.ddc",
 "packages/angular_components/utils/angular/properties/properties": "packages/angular_components/utils/angular/properties/properties.ddc",
 "packages/angular_components/utils/angular/properties/properties.template": "packages/angular_components/utils/angular/properties/properties.template.ddc",
 "packages/angular_components/utils/angular/reference/reference": "packages/angular_components/utils/angular/reference/reference.ddc",
 "packages/angular_components/utils/angular/reference/reference.template": "packages/angular_components/utils/angular/reference/reference.template.ddc",
 "packages/angular_components/utils/angular/scroll_host/angular_2": "packages/angular_components/utils/angular/scroll_host/angular_2.ddc",
 "packages/angular_components/utils/angular/scroll_host/angular_2.template": "packages/angular_components/utils/angular/scroll_host/angular_2.template.ddc",
 "packages/angular_components/utils/angular/scroll_host/interface": "packages/angular_components/utils/angular/scroll_host/interface.ddc",
 "packages/angular_components/utils/angular/scroll_host/interface.template": "packages/angular_components/utils/angular/scroll_host/interface.template.ddc",
 "packages/angular_components/utils/async/async": "packages/angular_components/utils/async/async.ddc",
 "packages/angular_components/utils/async/async.template": "packages/angular_components/utils/async/async.template.ddc",
 "packages/angular_components/utils/browser/dom_iterator/dom_iterator": "packages/angular_components/utils/browser/dom_iterator/dom_iterator.ddc",
 "packages/angular_components/utils/browser/dom_iterator/dom_iterator.template": "packages/angular_components/utils/browser/dom_iterator/dom_iterator.template.ddc",
 "packages/angular_components/utils/browser/dom_service/angular_2": "packages/angular_components/utils/browser/dom_service/angular_2.ddc",
 "packages/angular_components/utils/browser/dom_service/angular_2.template": "packages/angular_components/utils/browser/dom_service/angular_2.template.ddc",
 "packages/angular_components/utils/browser/dom_service/dom_service": "packages/angular_components/utils/browser/dom_service/dom_service.ddc",
 "packages/angular_components/utils/browser/dom_service/dom_service.template": "packages/angular_components/utils/browser/dom_service/dom_service.template.ddc",
 "packages/angular_components/utils/browser/dom_service/dom_service_webdriver_testability": "packages/angular_components/utils/browser/dom_service/dom_service_webdriver_testability.ddc",
 "packages/angular_components/utils/browser/dom_service/dom_service_webdriver_testability.template": "packages/angular_components/utils/browser/dom_service/dom_service_webdriver_testability.template.ddc",
 "packages/angular_components/utils/browser/events/events": "packages/angular_components/utils/browser/events/events.ddc",
 "packages/angular_components/utils/browser/events/events.template": "packages/angular_components/utils/browser/events/events.template.ddc",
 "packages/angular_components/utils/browser/feature_detector/feature_detector": "packages/angular_components/utils/browser/feature_detector/feature_detector.ddc",
 "packages/angular_components/utils/browser/feature_detector/feature_detector.template": "packages/angular_components/utils/browser/feature_detector/feature_detector.template.ddc",
 "packages/angular_components/utils/browser/window/module": "packages/angular_components/utils/browser/window/module.ddc",
 "packages/angular_components/utils/browser/window/module.template": "packages/angular_components/utils/browser/window/module.template.ddc",
 "packages/angular_components/utils/color/color": "packages/angular_components/utils/color/color.ddc",
 "packages/angular_components/utils/color/color.template": "packages/angular_components/utils/color/color.template.ddc",
 "packages/angular_components/utils/color/material": "packages/angular_components/utils/color/material.ddc",
 "packages/angular_components/utils/color/material.template": "packages/angular_components/utils/color/material.template.ddc",
 "packages/angular_components/utils/color/palette": "packages/angular_components/utils/color/palette.ddc",
 "packages/angular_components/utils/color/palette.template": "packages/angular_components/utils/color/palette.template.ddc",
 "packages/angular_components/utils/comparators/comparators": "packages/angular_components/utils/comparators/comparators.ddc",
 "packages/angular_components/utils/comparators/comparators.template": "packages/angular_components/utils/comparators/comparators.template.ddc",
 "packages/angular_components/utils/disposer/disposable_callback": "packages/angular_components/utils/disposer/disposable_callback.ddc",
 "packages/angular_components/utils/disposer/disposable_callback.template": "packages/angular_components/utils/disposer/disposable_callback.template.ddc",
 "packages/angular_components/utils/disposer/disposer": "packages/angular_components/utils/disposer/disposer.ddc",
 "packages/angular_components/utils/disposer/disposer.template": "packages/angular_components/utils/disposer/disposer.template.ddc",
 "packages/angular_components/utils/id_generator/id_generator": "packages/angular_components/utils/id_generator/id_generator.ddc",
 "packages/angular_components/utils/id_generator/id_generator.template": "packages/angular_components/utils/id_generator/id_generator.template.ddc",
 "packages/angular_components/utils/keyboard/keyboard": "packages/angular_components/utils/keyboard/keyboard.ddc",
 "packages/angular_components/utils/keyboard/keyboard.template": "packages/angular_components/utils/keyboard/keyboard.template.ddc",
 "packages/angular_components/utils/rate_limit_utils/rate_limit_utils": "packages/angular_components/utils/rate_limit_utils/rate_limit_utils.ddc",
 "packages/angular_components/utils/rate_limit_utils/rate_limit_utils.template": "packages/angular_components/utils/rate_limit_utils/rate_limit_utils.template.ddc",
 "packages/angular_components/utils/showhide/showhide": "packages/angular_components/utils/showhide/showhide.ddc",
 "packages/angular_components/utils/showhide/showhide.template": "packages/angular_components/utils/showhide/showhide.template.ddc",
 "packages/angular_forms/angular_forms": "packages/angular_forms/angular_forms.ddc",
 "packages/angular_forms/angular_forms.template": "packages/angular_forms/angular_forms.template.ddc",
 "packages/angular_forms/src/directives": "packages/angular_forms/src/directives.ddc",
 "packages/async/async": "packages/async/async.ddc",
 "packages/built_collection/built_collection": "packages/built_collection/built_collection.ddc",
 "packages/charcode/ascii": "packages/charcode/ascii.ddc",
 "packages/charcode/charcode": "packages/charcode/charcode.ddc",
 "packages/charcode/html_entity": "packages/charcode/html_entity.ddc",
 "packages/collection/collection": "packages/collection/collection.ddc",
 "packages/collection/src/algorithms": "packages/collection/src/algorithms.ddc",
 "packages/collection/src/canonicalized_map": "packages/collection/src/canonicalized_map.ddc",
 "packages/collection/src/comparators": "packages/collection/src/comparators.ddc",
 "packages/collection/src/iterable_zip": "packages/collection/src/iterable_zip.ddc",
 "packages/collection/src/priority_queue": "packages/collection/src/priority_queue.ddc",
 "packages/collection/src/utils": "packages/collection/src/utils.ddc",
 "packages/convert/convert": "packages/convert/convert.ddc",
 "packages/crypto/crypto": "packages/crypto/crypto.ddc",
 "packages/dart_internal/extract_type_arguments": "packages/dart_internal/extract_type_arguments.ddc",
 "packages/dnd/dnd": "packages/dnd/dnd.ddc",
 "packages/fixnum/fixnum": "packages/fixnum/fixnum.ddc",
 "packages/googleapis/drive/v3": "packages/googleapis/drive/v3.ddc",
 "packages/googleapis_auth/auth": "packages/googleapis_auth/auth.ddc",
 "packages/googleapis_auth/auth_browser": "packages/googleapis_auth/auth_browser.ddc",
 "packages/googleapis_auth/src/crypto/asn1": "packages/googleapis_auth/src/crypto/asn1.ddc",
 "packages/http/browser_client": "packages/http/browser_client.ddc",
 "packages/http/http": "packages/http/http.ddc",
 "packages/http/src/base_client": "packages/http/src/base_client.ddc",
 "packages/http_parser/http_parser": "packages/http_parser/http_parser.ddc",
 "packages/intl/date_symbol_data_local": "packages/intl/date_symbol_data_local.ddc",
 "packages/intl/date_symbols": "packages/intl/date_symbols.ddc",
 "packages/intl/date_time_patterns": "packages/intl/date_time_patterns.ddc",
 "packages/intl/intl": "packages/intl/intl.ddc",
 "packages/intl/message_lookup_by_library": "packages/intl/message_lookup_by_library.ddc",
 "packages/intl/number_symbols": "packages/intl/number_symbols.ddc",
 "packages/intl/number_symbols_data": "packages/intl/number_symbols_data.ddc",
 "packages/intl/src/plural_rules": "packages/intl/src/plural_rules.ddc",
 "packages/js/js": "packages/js/js.ddc",
 "packages/js/js_util": "packages/js/js_util.ddc",
 "packages/logging/logging": "packages/logging/logging.ddc",
 "packages/meta/dart2js": "packages/meta/dart2js.ddc",
 "packages/meta/meta": "packages/meta/meta.ddc",
 "packages/nightscout_reporter/app_component": "packages/nightscout_reporter/app_component.ddc",
 "packages/nightscout_reporter/app_component.css.shim": "packages/nightscout_reporter/app_component.css.shim.ddc",
 "packages/nightscout_reporter/app_component.template": "packages/nightscout_reporter/app_component.template.ddc",
 "packages/nightscout_reporter/messages/messages_all": "packages/nightscout_reporter/messages/messages_all.ddc",
 "packages/nightscout_reporter/messages/messages_all.template": "packages/nightscout_reporter/messages/messages_all.template.ddc",
 "packages/nightscout_reporter/messages/messages_de_DE": "packages/nightscout_reporter/messages/messages_de_DE.ddc",
 "packages/nightscout_reporter/messages/messages_en_GB": "packages/nightscout_reporter/messages/messages_en_GB.ddc",
 "packages/nightscout_reporter/messages/messages_en_US": "packages/nightscout_reporter/messages/messages_en_US.ddc",
 "packages/nightscout_reporter/messages/messages_es_ES": "packages/nightscout_reporter/messages/messages_es_ES.ddc",
 "packages/nightscout_reporter/messages/messages_fr_FR": "packages/nightscout_reporter/messages/messages_fr_FR.ddc",
 "packages/nightscout_reporter/messages/messages_ja_JP": "packages/nightscout_reporter/messages/messages_ja_JP.ddc",
 "packages/nightscout_reporter/messages/messages_pl_PL": "packages/nightscout_reporter/messages/messages_pl_PL.ddc",
 "packages/nightscout_reporter/messages/messages_pt_PT": "packages/nightscout_reporter/messages/messages_pt_PT.ddc",
 "packages/nightscout_reporter/messages/messages_sk_SK": "packages/nightscout_reporter/messages/messages_sk_SK.ddc",
 "packages/nightscout_reporter/src/controls/datepicker/datepicker_component": "packages/nightscout_reporter/src/controls/datepicker/datepicker_component.ddc",
 "packages/observable/observable": "packages/observable/observable.ddc",
 "packages/path/path": "packages/path/path.ddc",
 "packages/pedantic/pedantic": "packages/pedantic/pedantic.ddc",
 "packages/protobuf/protobuf": "packages/protobuf/protobuf.ddc",
 "packages/quiver/check": "packages/quiver/check.ddc",
 "packages/quiver/collection": "packages/quiver/collection.ddc",
 "packages/quiver/core": "packages/quiver/core.ddc",
 "packages/quiver/iterables": "packages/quiver/iterables.ddc",
 "packages/quiver/src/collection/bimap": "packages/quiver/src/collection/bimap.ddc",
 "packages/quiver/src/iterables/concat": "packages/quiver/src/iterables/concat.ddc",
 "packages/quiver/src/time/clock": "packages/quiver/src/time/clock.ddc",
 "packages/quiver/strings": "packages/quiver/strings.ddc",
 "packages/quiver/time": "packages/quiver/time.ddc",
 "packages/source_span/source_span": "packages/source_span/source_span.ddc",
 "packages/stack_trace/src/chain": "packages/stack_trace/src/chain.ddc",
 "packages/string_scanner/src/eager_span_scanner": "packages/string_scanner/src/eager_span_scanner.ddc",
 "packages/term_glyph/src/generated/ascii_glyph_set": "packages/term_glyph/src/generated/ascii_glyph_set.ddc",
 "packages/timezone/browser": "packages/timezone/browser.ddc",
 "packages/timezone/src/date_time": "packages/timezone/src/date_time.ddc",
 "packages/timezone/src/env": "packages/timezone/src/env.ddc",
 "packages/timezone/timezone": "packages/timezone/timezone.ddc",
 "packages/typed_data/src/typed_buffer": "packages/typed_data/src/typed_buffer.ddc",
 "packages/typed_data/src/typed_queue": "packages/typed_data/src/typed_queue.ddc",
 "packages/typed_data/typed_buffers": "packages/typed_data/typed_buffers.ddc",
 "web/main": "main.ddc"
};
if(!window.$dartLoader) {
   window.$dartLoader = {
     appDigests: _currentDirectory + 'main.digests',
     moduleIdToUrl: new Map(),
     urlToModuleId: new Map(),
     rootDirectories: new Array(),
     // Used in package:build_runner/src/server/build_updates_client/hot_reload_client.dart
     moduleParentsGraph: new Map(),
     moduleLoadingErrorCallbacks: new Map(),
     forceLoadModule: function (moduleName, callback, onError) {
       // dartdevc only strips the final extension when adding modules to source
       // maps, so we need to do the same.
       if (moduleName.endsWith('.ddc')) {
         moduleName = moduleName.substring(0, moduleName.length - 4);
       }
       if (typeof onError != 'undefined') {
         var errorCallbacks = $dartLoader.moduleLoadingErrorCallbacks;
         if (!errorCallbacks.has(moduleName)) {
           errorCallbacks.set(moduleName, new Set());
         }
         errorCallbacks.get(moduleName).add(onError);
       }
       requirejs.undef(moduleName);
       requirejs([moduleName], function() {
         if (typeof onError != 'undefined') {
           errorCallbacks.get(moduleName).delete(onError);
         }
         if (typeof callback != 'undefined') {
           callback();
         }
       });
     },
     getModuleLibraries: null, // set up by _initializeTools
   };
}
let customModulePaths = {};
window.$dartLoader.rootDirectories.push(window.location.origin + baseUrl);
for (let moduleName of Object.getOwnPropertyNames(modulePaths)) {
  let modulePath = modulePaths[moduleName];
  if (modulePath != moduleName) {
    customModulePaths[moduleName] = modulePath;
  }
  var src = window.location.origin + '/' + modulePath + '.js';
  if (window.$dartLoader.moduleIdToUrl.has(moduleName)) {
    continue;
  }
  $dartLoader.moduleIdToUrl.set(moduleName, src);
  $dartLoader.urlToModuleId.set(src, moduleName);
}
// Whenever we fail to load a JS module, try to request the corresponding
// `.errors` file, and log it to the console.
(function() {
  var oldOnError = requirejs.onError;
  requirejs.onError = function(e) {
    if (e.requireModules) {
      if (e.message) {
        // If error occurred on loading dependencies, we need to invalidate ancessor too.
        var ancesor = e.message.match(/needed by: (.*)/);
        if (ancesor) {
          e.requireModules.push(ancesor[1]);
        }
      }
      for (const module of e.requireModules) {
        var errorCallbacks = $dartLoader.moduleLoadingErrorCallbacks.get(module);
        if (errorCallbacks) {
          for (const callback of errorCallbacks) callback(e);
          errorCallbacks.clear();
        }
      }
    }
    if (e.originalError && e.originalError.srcElement) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          var message;
          if (this.status == 200) {
            message = this.responseText;
          } else {
            message = "Unknown error loading " + e.originalError.srcElement.src;
          }
          console.error(message);
          var errorEvent = new CustomEvent(
            'dartLoadException', { detail: message });
          window.dispatchEvent(errorEvent);
        }
      };
      xhr.open("GET", e.originalError.srcElement.src + ".errors", true);
      xhr.send();
    }
    // Also handle errors the normal way.
    if (oldOnError) oldOnError(e);
  };
}());

var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());
;

require.config({
    baseUrl: baseUrl,
    waitSeconds: 0,
    paths: customModulePaths
});

const modulesGraph = new Map();
function getRegisteredModuleName(moduleMap) {
  if ($dartLoader.moduleIdToUrl.has(moduleMap.name + '.ddc')) {
    return moduleMap.name + '.ddc';
  }
  return moduleMap.name;
}
requirejs.onResourceLoad = function (context, map, depArray) {
  const name = getRegisteredModuleName(map);
  const depNameArray = depArray.map(getRegisteredModuleName);
  if (modulesGraph.has(name)) {
    // TODO Move this logic to better place
    var previousDeps = modulesGraph.get(name);
    var changed = previousDeps.length != depNameArray.length;
    changed = changed || depNameArray.some(function(depName) {
      return !previousDeps.includes(depName);
    });
    if (changed) {
      console.warn("Dependencies graph change for module '" + name + "' detected. " +
        "Dependencies was [" + previousDeps + "], now [" +  depNameArray.map((depName) => depName) +"]. " +
        "Page can't be hot-reloaded, firing full page reload.");
      window.location.reload();
    }
  } else {
    modulesGraph.set(name, []);
    for (const depName of depNameArray) {
      if (!$dartLoader.moduleParentsGraph.has(depName)) {
        $dartLoader.moduleParentsGraph.set(depName, []);
      }
      $dartLoader.moduleParentsGraph.get(depName).push(name);
      modulesGraph.get(name).push(depName);
    }
  }
};
define("main.dart.bootstrap", ["web/main", "dart_sdk"], function(app, dart_sdk) {
  dart_sdk.dart.setStartAsyncSynchronously(true);
  dart_sdk._isolate_helper.startRootIsolate(() => {}, []);
  var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());

  dart_sdk._debugger.registerDevtoolsFormatter();
  $dartLoader.getModuleLibraries = dart_sdk.dart.getModuleLibraries;
  if (window.$dartStackTraceUtility && !window.$dartStackTraceUtility.ready) {
    window.$dartStackTraceUtility.ready = true;
    let dart = dart_sdk.dart;
    window.$dartStackTraceUtility.setSourceMapProvider(
      function(url) {
        url = url.replace(baseUrl, '/');
        var module = window.$dartLoader.urlToModuleId.get(url);
        if (!module) return null;
        return dart.getSourceMap(module);
      });
  }
  if (typeof document != 'undefined') {
    window.postMessage({ type: "DDC_STATE_CHANGE", state: "start" }, "*");
  }

  /* MAIN_EXTENSION_MARKER */
  (app.web__main || app.main).main();
  var bootstrap = {
      hot$onChildUpdate: function(childName, child) {
        // Special handling for the multi-root scheme uris. We need to strip
        // out the scheme and the top level directory, to match the source path
        // that chrome sees.
        if (childName.startsWith('org-dartlang-app:///')) {
          childName = childName.substring('org-dartlang-app:///'.length);
          var firstSlash = childName.indexOf('/');
          if (firstSlash == -1) return false;
          childName = childName.substring(firstSlash + 1);
        }
        if (childName === "main.dart") {
          // Clear static caches.
          dart_sdk.dart.hotRestart();
          child.main();
          return true;
        }
      }
    }
  dart_sdk.dart.trackLibraries("main.dart.bootstrap", {
    "main.dart.bootstrap": bootstrap
  }, '');
  return {
    bootstrap: bootstrap
  };
});
})();
