define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/runtime/queries', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/angular_components/material_datepicker/material_month_picker', 'packages/angular_components/material_datepicker/date_range_editor', 'packages/angular_components/material_select/material_select.template', 'packages/angular_components/material_select/material_select', 'packages/quiver/src/time/clock', 'packages/angular_components/utils/angular/scroll_host/interface', 'packages/angular_components/utils/angular/scroll_host/angular_2', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular/src/runtime/interpolate', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/material_datepicker/preset', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim', 'packages/angular_components/src/material_datepicker/comparison_range_editor', 'packages/angular_components/material_datepicker/date_range_input.template', 'packages/angular_components/material_datepicker/date_range_input', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/material_datepicker/next_prev_buttons.template', 'packages/angular_components/material_datepicker/next_prev_buttons', 'packages/angular_components/material_datepicker/material_calendar_picker.template', 'packages/angular_components/utils/showhide/showhide', 'packages/angular_components/material_datepicker/material_month_picker.template', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular_components/material_datepicker/date_range_editor_host', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/date_range_editor_host.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_datepicker/preset.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_tooltip/material_tooltip.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/date/date_formatter.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/angular/managed_zone/interface.template', 'packages/angular_components/utils/angular/scroll_host/angular_2.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/showhide/showhide.template', 'packages/angular_components/material_datepicker/date_range_editor.scss.css.shim'], (function load__packages__angular_components__material_datepicker__date_range_editor_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular__src__runtime__queries, packages__angular_components__material_datepicker__material_calendar_picker, packages__angular_components__material_datepicker__material_month_picker, packages__angular_components__material_datepicker__date_range_editor, packages__angular_components__material_select__material_select$46template, packages__angular_components__material_select__material_select, packages__quiver__src__time__clock, packages__angular_components__utils__angular__scroll_host__interface, packages__angular_components__utils__angular__scroll_host__angular_2, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__interfaces__has_disabled, packages__angular_components__model__ui__has_renderer, packages__angular_components__model__selection__selection_container, packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface, packages__angular_components__material_select__material_select_item$46template, packages__angular_components__material_select__material_select_item, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__material_select__activation_handler, packages__angular__src__runtime__interpolate, packages__angular__src__runtime__text_binding, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__button_decorator__button_decorator, packages__angular_components__material_icon__material_icon, packages__angular_components__src__material_tooltip__tooltip_controller, packages__angular_components__material_tooltip__module, packages__angular_components__utils__disposer__disposer, packages__angular_components__src__material_tooltip__icon_tooltip, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__material_datepicker__preset, packages__angular_components__material_popup__material_popup, packages__angular_components__material_button__material_button$46template, packages__angular_components__theme__dark_theme, packages__angular_components__material_button__material_button, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__content__deferred_content_aware, packages__angular_components__material_input__material_input$46template, packages__angular_components__material_input__deferred_validator, packages__angular_forms__src__directives, packages__angular_components__material_input__material_input, packages__angular_components__material_input__material_input_default_value_accessor, packages__angular_components__material_input__base_material_input, packages__angular_components__src__material_datepicker__comparison_range_editor$46scss$46css$46shim, packages__angular_components__src__material_datepicker__comparison_range_editor, packages__angular_components__material_datepicker__date_range_input$46template, packages__angular_components__material_datepicker__date_range_input, packages__angular_components__model__date__date, packages__angular_components__material_datepicker__calendar, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular_components__material_datepicker__next_prev_buttons$46template, packages__angular_components__material_datepicker__next_prev_buttons, packages__angular_components__material_datepicker__material_calendar_picker$46template, packages__angular_components__utils__showhide__showhide, packages__angular_components__material_datepicker__material_month_picker$46template, packages__angular_components__src__utils__angular__managed_zone__managed_zone, packages__angular_components__material_datepicker__date_range_editor_host, packages__angular__angular$46template, packages__angular_components__focus__focus$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_datepicker__calendar$46template, packages__angular_components__material_datepicker__date_range_editor_host$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__material_datepicker__preset$46template, packages__angular_components__material_datepicker__range$46template, packages__angular_components__material_ripple__material_ripple$46template, packages__angular_components__material_tooltip__material_tooltip$46template, packages__angular_components__model__date__date$46template, packages__angular_components__model__date__date_formatter$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__utils__angular__managed_zone__interface$46template, packages__angular_components__utils__angular__scroll_host__angular_2$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__showhide__showhide$46template, packages__angular_components__material_datepicker__date_range_editor$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const queries = packages__angular__src__runtime__queries.src__runtime__queries;
  const material_calendar_picker = packages__angular_components__material_datepicker__material_calendar_picker.material_datepicker__material_calendar_picker;
  const material_month_picker = packages__angular_components__material_datepicker__material_month_picker.material_datepicker__material_month_picker;
  const date_range_editor = packages__angular_components__material_datepicker__date_range_editor.material_datepicker__date_range_editor;
  const material_select$46template = packages__angular_components__material_select__material_select$46template.material_select__material_select$46template;
  const material_select = packages__angular_components__material_select__material_select.material_select__material_select;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const gestures = packages__angular_components__utils__angular__scroll_host__interface.src__utils__angular__scroll_host__gestures;
  const angular_2 = packages__angular_components__utils__angular__scroll_host__angular_2.utils__angular__scroll_host__angular_2;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const scroll_host_interface = packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const material_select_item$46template = packages__angular_components__material_select__material_select_item$46template.material_select__material_select_item$46template;
  const material_select_item = packages__angular_components__material_select__material_select_item.material_select__material_select_item;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const tooltip_controller = packages__angular_components__src__material_tooltip__tooltip_controller.src__material_tooltip__tooltip_controller;
  const module = packages__angular_components__material_tooltip__module.material_tooltip__module;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const preset = packages__angular_components__material_datepicker__preset.material_datepicker__preset;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const material_button$46template = packages__angular_components__material_button__material_button$46template.material_button__material_button$46template;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_input$46template = packages__angular_components__material_input__material_input$46template.material_input__material_input$46template;
  const deferred_validator = packages__angular_components__material_input__deferred_validator.material_input__deferred_validator;
  const ng_model = packages__angular_forms__src__directives.src__directives__ng_model;
  const ng_control = packages__angular_forms__src__directives.src__directives__ng_control;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const material_input_default_value_accessor = packages__angular_components__material_input__material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  const comparison_range_editor$46template = packages__angular_components__src__material_datepicker__comparison_range_editor$46scss$46css$46shim.src__material_datepicker__comparison_range_editor$46template;
  const date_range_editor_model$46template = packages__angular_components__src__material_datepicker__comparison_range_editor$46scss$46css$46shim.src__material_datepicker__date_range_editor_model$46template;
  const comparison_range_editor = packages__angular_components__src__material_datepicker__comparison_range_editor.src__material_datepicker__comparison_range_editor;
  const date_range_input$46template = packages__angular_components__material_datepicker__date_range_input$46template.material_datepicker__date_range_input$46template;
  const date_range_input = packages__angular_components__material_datepicker__date_range_input.material_datepicker__date_range_input;
  const date = packages__angular_components__model__date__date.model__date__date;
  const calendar = packages__angular_components__material_datepicker__calendar.material_datepicker__calendar;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const next_prev_buttons$46template = packages__angular_components__material_datepicker__next_prev_buttons$46template.material_datepicker__next_prev_buttons$46template;
  const next_prev_buttons = packages__angular_components__material_datepicker__next_prev_buttons.material_datepicker__next_prev_buttons;
  const material_calendar_picker$46template = packages__angular_components__material_datepicker__material_calendar_picker$46template.material_datepicker__material_calendar_picker$46template;
  const showhide = packages__angular_components__utils__showhide__showhide.utils__showhide__showhide;
  const material_month_picker$46template = packages__angular_components__material_datepicker__material_month_picker$46template.material_datepicker__material_month_picker$46template;
  const managed_zone = packages__angular_components__src__utils__angular__managed_zone__managed_zone.src__utils__angular__managed_zone__managed_zone;
  const date_range_editor_host = packages__angular_components__material_datepicker__date_range_editor_host.material_datepicker__date_range_editor_host;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const calendar$46template = packages__angular_components__material_datepicker__calendar$46template.material_datepicker__calendar$46template;
  const date_range_editor_host$46template = packages__angular_components__material_datepicker__date_range_editor_host$46template.material_datepicker__date_range_editor_host$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const preset$46template = packages__angular_components__material_datepicker__preset$46template.material_datepicker__preset$46template;
  const range$46template = packages__angular_components__material_datepicker__range$46template.material_datepicker__range$46template;
  const material_ripple$46template = packages__angular_components__material_ripple__material_ripple$46template.material_ripple__material_ripple$46template;
  const material_tooltip$46template = packages__angular_components__material_tooltip__material_tooltip$46template.material_tooltip__material_tooltip$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const date_formatter$46template = packages__angular_components__model__date__date_formatter$46template.model__date__date_formatter$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const interface$46template = packages__angular_components__utils__angular__managed_zone__interface$46template.utils__angular__managed_zone__interface$46template;
  const angular_2$46template = packages__angular_components__utils__angular__scroll_host__angular_2$46template.utils__angular__scroll_host__angular_2$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const showhide$46template = packages__angular_components__utils__showhide__showhide$46template.utils__showhide__showhide$46template;
  const date_range_editor$46scss$46css$46shim = packages__angular_components__material_datepicker__date_range_editor$46scss$46css$46shim.material_datepicker__date_range_editor$46scss$46css$46shim;
  var date_range_editor$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $isNotEmpty = dartx.isNotEmpty;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $_get = dartx._get;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var MaterialCalendarPickerComponentL = () => (MaterialCalendarPickerComponentL = dart.constFn(dart.legacy(material_calendar_picker.MaterialCalendarPickerComponent)))();
  var _ViewDateRangeEditorComponent11L = () => (_ViewDateRangeEditorComponent11L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent11)))();
  var _ViewDateRangeEditorComponent18L = () => (_ViewDateRangeEditorComponent18L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent18)))();
  var JSArrayOfMaterialCalendarPickerComponentL = () => (JSArrayOfMaterialCalendarPickerComponentL = dart.constFn(_interceptors.JSArray$(MaterialCalendarPickerComponentL())))();
  var ListOfMaterialCalendarPickerComponentL = () => (ListOfMaterialCalendarPickerComponentL = dart.constFn(core.List$(MaterialCalendarPickerComponentL())))();
  var ListLOfMaterialCalendarPickerComponentL = () => (ListLOfMaterialCalendarPickerComponentL = dart.constFn(dart.legacy(ListOfMaterialCalendarPickerComponentL())))();
  var _ViewDateRangeEditorComponent18LToListLOfMaterialCalendarPickerComponentL = () => (_ViewDateRangeEditorComponent18LToListLOfMaterialCalendarPickerComponentL = dart.constFn(dart.fnType(ListLOfMaterialCalendarPickerComponentL(), [_ViewDateRangeEditorComponent18L()])))();
  var _ViewDateRangeEditorComponent11LToListLOfMaterialCalendarPickerComponentL = () => (_ViewDateRangeEditorComponent11LToListLOfMaterialCalendarPickerComponentL = dart.constFn(dart.fnType(ListLOfMaterialCalendarPickerComponentL(), [_ViewDateRangeEditorComponent11L()])))();
  var MaterialMonthPickerComponentL = () => (MaterialMonthPickerComponentL = dart.constFn(dart.legacy(material_month_picker.MaterialMonthPickerComponent)))();
  var _ViewDateRangeEditorComponent19L = () => (_ViewDateRangeEditorComponent19L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent19)))();
  var JSArrayOfMaterialMonthPickerComponentL = () => (JSArrayOfMaterialMonthPickerComponentL = dart.constFn(_interceptors.JSArray$(MaterialMonthPickerComponentL())))();
  var ListOfMaterialMonthPickerComponentL = () => (ListOfMaterialMonthPickerComponentL = dart.constFn(core.List$(MaterialMonthPickerComponentL())))();
  var ListLOfMaterialMonthPickerComponentL = () => (ListLOfMaterialMonthPickerComponentL = dart.constFn(dart.legacy(ListOfMaterialMonthPickerComponentL())))();
  var _ViewDateRangeEditorComponent19LToListLOfMaterialMonthPickerComponentL = () => (_ViewDateRangeEditorComponent19LToListLOfMaterialMonthPickerComponentL = dart.constFn(dart.fnType(ListLOfMaterialMonthPickerComponentL(), [_ViewDateRangeEditorComponent19L()])))();
  var _ViewDateRangeEditorComponent11LToListLOfMaterialMonthPickerComponentL = () => (_ViewDateRangeEditorComponent11LToListLOfMaterialMonthPickerComponentL = dart.constFn(dart.fnType(ListLOfMaterialMonthPickerComponentL(), [_ViewDateRangeEditorComponent11L()])))();
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  var VoidToDateTimeL = () => (VoidToDateTimeL = dart.constFn(dart.fnType(DateTimeL(), [])))();
  var ElementScrollHostL = () => (ElementScrollHostL = dart.constFn(dart.legacy(angular_2.ElementScrollHost)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var VoidToElementScrollHostL = () => (VoidToElementScrollHostL = dart.constFn(dart.fnType(ElementScrollHostL(), [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var SelectionContainerL = () => (SelectionContainerL = dart.constFn(dart.legacy(selection_container.SelectionContainer)))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var GestureListenerFactoryL = () => (GestureListenerFactoryL = dart.constFn(dart.legacy(gestures.GestureListenerFactory)))();
  var ScrollHostL = () => (ScrollHostL = dart.constFn(dart.legacy(scroll_host_interface.ScrollHost)))();
  var SelectionItemL = () => (SelectionItemL = dart.constFn(dart.legacy(selection_container.SelectionItem)))();
  var _ViewDateRangeEditorComponent2L = () => (_ViewDateRangeEditorComponent2L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent2)))();
  var JSArrayOfSelectionItemL = () => (JSArrayOfSelectionItemL = dart.constFn(_interceptors.JSArray$(SelectionItemL())))();
  var ListOfSelectionItemL = () => (ListOfSelectionItemL = dart.constFn(core.List$(SelectionItemL())))();
  var ListLOfSelectionItemL = () => (ListLOfSelectionItemL = dart.constFn(dart.legacy(ListOfSelectionItemL())))();
  var _ViewDateRangeEditorComponent2LToListLOfSelectionItemL = () => (_ViewDateRangeEditorComponent2LToListLOfSelectionItemL = dart.constFn(dart.fnType(ListLOfSelectionItemL(), [_ViewDateRangeEditorComponent2L()])))();
  var _ViewDateRangeEditorComponent3L = () => (_ViewDateRangeEditorComponent3L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent3)))();
  var _ViewDateRangeEditorComponent3LToListLOfSelectionItemL = () => (_ViewDateRangeEditorComponent3LToListLOfSelectionItemL = dart.constFn(dart.fnType(ListLOfSelectionItemL(), [_ViewDateRangeEditorComponent3L()])))();
  var _ViewDateRangeEditorComponent6L = () => (_ViewDateRangeEditorComponent6L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent6)))();
  var _ViewDateRangeEditorComponent7L = () => (_ViewDateRangeEditorComponent7L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent7)))();
  var _ViewDateRangeEditorComponent8L = () => (_ViewDateRangeEditorComponent8L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent8)))();
  var _ViewDateRangeEditorComponent8LToListLOfSelectionItemL = () => (_ViewDateRangeEditorComponent8LToListLOfSelectionItemL = dart.constFn(dart.fnType(ListLOfSelectionItemL(), [_ViewDateRangeEditorComponent8L()])))();
  var _ViewDateRangeEditorComponent7LToListLOfSelectionItemL = () => (_ViewDateRangeEditorComponent7LToListLOfSelectionItemL = dart.constFn(dart.fnType(ListLOfSelectionItemL(), [_ViewDateRangeEditorComponent7L()])))();
  var JSArrayOfListLOfSelectionItemL = () => (JSArrayOfListLOfSelectionItemL = dart.constFn(_interceptors.JSArray$(ListLOfSelectionItemL())))();
  var _ViewDateRangeEditorComponent6LToListLOfSelectionItemL = () => (_ViewDateRangeEditorComponent6LToListLOfSelectionItemL = dart.constFn(dart.fnType(ListLOfSelectionItemL(), [_ViewDateRangeEditorComponent6L()])))();
  var _ViewDateRangeEditorComponent9L = () => (_ViewDateRangeEditorComponent9L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent9)))();
  var _ViewDateRangeEditorComponent9LToListLOfSelectionItemL = () => (_ViewDateRangeEditorComponent9LToListLOfSelectionItemL = dart.constFn(dart.fnType(ListLOfSelectionItemL(), [_ViewDateRangeEditorComponent9L()])))();
  var MaterialSelectItemComponentL = () => (MaterialSelectItemComponentL = dart.constFn(dart.legacy(material_select_item.MaterialSelectItemComponent)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var ActivationHandlerL = () => (ActivationHandlerL = dart.constFn(dart.legacy(activation_handler.ActivationHandler)))();
  var VoidToMaterialSelectItemComponentL = () => (VoidToMaterialSelectItemComponentL = dart.constFn(dart.fnType(MaterialSelectItemComponentL(), [])))();
  var TextL = () => (TextL = dart.constFn(dart.legacy(html.Text)))();
  var JSArrayOfTextL = () => (JSArrayOfTextL = dart.constFn(_interceptors.JSArray$(TextL())))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var _ViewDateRangeEditorComponent1L = () => (_ViewDateRangeEditorComponent1L = dart.constFn(dart.legacy(date_range_editor$46template._ViewDateRangeEditorComponent1)))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var TooltipControllerL = () => (TooltipControllerL = dart.constFn(dart.legacy(tooltip_controller.TooltipController)))();
  var DisposerL = () => (DisposerL = dart.constFn(dart.legacy(disposer.Disposer)))();
  var VoidToTooltipControllerL = () => (VoidToTooltipControllerL = dart.constFn(dart.fnType(TooltipControllerL(), [])))();
  var MaterialTooltipDirectiveL = () => (MaterialTooltipDirectiveL = dart.constFn(dart.legacy(tooltip.MaterialTooltipDirective)))();
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var WindowL = () => (WindowL = dart.constFn(dart.legacy(html.Window)))();
  var VoidToMaterialTooltipDirectiveL = () => (VoidToMaterialTooltipDirectiveL = dart.constFn(dart.fnType(MaterialTooltipDirectiveL(), [])))();
  var DatepickerPresetL = () => (DatepickerPresetL = dart.constFn(dart.legacy(preset.DatepickerPreset)))();
  var AcxDarkThemeL = () => (AcxDarkThemeL = dart.constFn(dart.legacy(dark_theme.AcxDarkTheme)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToAcxDarkThemeL = () => (VoidToAcxDarkThemeL = dart.constFn(dart.fnType(AcxDarkThemeL(), [])))();
  var PopupSourceDirectiveL = () => (PopupSourceDirectiveL = dart.constFn(dart.legacy(popup_source_directive.PopupSourceDirective)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var VoidToPopupSourceDirectiveL = () => (VoidToPopupSourceDirectiveL = dart.constFn(dart.fnType(PopupSourceDirectiveL(), [])))();
  var JSArrayOfHtmlElementL = () => (JSArrayOfHtmlElementL = dart.constFn(_interceptors.JSArray$(HtmlElementL())))();
  var MaterialPopupComponentL = () => (MaterialPopupComponentL = dart.constFn(dart.legacy(material_popup.MaterialPopupComponent)))();
  var PopupHierarchyL = () => (PopupHierarchyL = dart.constFn(dart.legacy(popup_hierarchy.PopupHierarchy)))();
  var OverlayServiceL = () => (OverlayServiceL = dart.constFn(dart.legacy(overlay_service.OverlayService)))();
  var ZIndexerL = () => (ZIndexerL = dart.constFn(dart.legacy(zindexer.ZIndexer)))();
  var RelativePositionL = () => (RelativePositionL = dart.constFn(dart.legacy(alignment.RelativePosition)))();
  var ListOfRelativePositionL = () => (ListOfRelativePositionL = dart.constFn(core.List$(RelativePositionL())))();
  var ListLOfRelativePositionL = () => (ListLOfRelativePositionL = dart.constFn(dart.legacy(ListOfRelativePositionL())))();
  var OpaqueTokenOfListLOfRelativePositionL = () => (OpaqueTokenOfListLOfRelativePositionL = dart.constFn(opaque_token.OpaqueToken$(ListLOfRelativePositionL())))();
  var BoxL = () => (BoxL = dart.constFn(dart.legacy(box.Box)))();
  var PopupSizeProviderL = () => (PopupSizeProviderL = dart.constFn(dart.legacy(popup_size_provider.PopupSizeProvider)))();
  var VoidToMaterialPopupComponentL = () => (VoidToMaterialPopupComponentL = dart.constFn(dart.fnType(MaterialPopupComponentL(), [])))();
  var ViewContainerL = () => (ViewContainerL = dart.constFn(dart.legacy(view_container.ViewContainer)))();
  var JSArrayOfViewContainerL = () => (JSArrayOfViewContainerL = dart.constFn(_interceptors.JSArray$(ViewContainerL())))();
  var MaterialButtonComponentL = () => (MaterialButtonComponentL = dart.constFn(dart.legacy(material_button.MaterialButtonComponent)))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
  var DeferredValidatorL = () => (DeferredValidatorL = dart.constFn(dart.legacy(deferred_validator.DeferredValidator)))();
  var NgModelL = () => (NgModelL = dart.constFn(dart.legacy(ng_model.NgModel)))();
  var NgControlL = () => (NgControlL = dart.constFn(dart.legacy(ng_control.NgControl)))();
  var MaterialInputComponentL = () => (MaterialInputComponentL = dart.constFn(dart.legacy(material_input.MaterialInputComponent)))();
  var BaseMaterialInputL = () => (BaseMaterialInputL = dart.constFn(dart.legacy(base_material_input.BaseMaterialInput)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ComparisonRangeEditorComponentL = () => (ComparisonRangeEditorComponentL = dart.constFn(dart.legacy(comparison_range_editor.ComparisonRangeEditorComponent)))();
  var VoidToComparisonRangeEditorComponentL = () => (VoidToComparisonRangeEditorComponentL = dart.constFn(dart.fnType(ComparisonRangeEditorComponentL(), [])))();
  var DateRangeL = () => (DateRangeL = dart.constFn(dart.legacy(date.DateRange)))();
  var CalendarStateL = () => (CalendarStateL = dart.constFn(dart.legacy(calendar.CalendarState)))();
  var KeyboardOnlyFocusIndicatorDirectiveL = () => (KeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)))();
  var VoidToKeyboardOnlyFocusIndicatorDirectiveL = () => (VoidToKeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.fnType(KeyboardOnlyFocusIndicatorDirectiveL(), [])))();
  var VoidToMaterialCalendarPickerComponentL = () => (VoidToMaterialCalendarPickerComponentL = dart.constFn(dart.fnType(MaterialCalendarPickerComponentL(), [])))();
  var ShowHideDirectiveL = () => (ShowHideDirectiveL = dart.constFn(dart.legacy(showhide.ShowHideDirective)))();
  var VoidToShowHideDirectiveL = () => (VoidToShowHideDirectiveL = dart.constFn(dart.fnType(ShowHideDirectiveL(), [])))();
  var DateL = () => (DateL = dart.constFn(dart.legacy(date.Date)))();
  var ViewDateRangeEditorComponent0L = () => (ViewDateRangeEditorComponent0L = dart.constFn(dart.legacy(date_range_editor$46template.ViewDateRangeEditorComponent0)))();
  var VoidToMaterialMonthPickerComponentL = () => (VoidToMaterialMonthPickerComponentL = dart.constFn(dart.fnType(MaterialMonthPickerComponentL(), [])))();
  var DateRangeEditorComponentL = () => (DateRangeEditorComponentL = dart.constFn(dart.legacy(date_range_editor.DateRangeEditorComponent)))();
  var ManagedZoneL = () => (ManagedZoneL = dart.constFn(dart.legacy(managed_zone.ManagedZone)))();
  var DateRangeEditorHostL = () => (DateRangeEditorHostL = dart.constFn(dart.legacy(date_range_editor_host.DateRangeEditorHost)))();
  var VoidToDateRangeEditorComponentL = () => (VoidToDateRangeEditorComponentL = dart.constFn(dart.fnType(DateRangeEditorComponentL(), [])))();
  var ComponentRefOfDateRangeEditorComponentL = () => (ComponentRefOfDateRangeEditorComponentL = dart.constFn(component_factory.ComponentRef$(DateRangeEditorComponentL())))();
  var ComponentFactoryOfDateRangeEditorComponentL = () => (ComponentFactoryOfDateRangeEditorComponentL = dart.constFn(component_factory.ComponentFactory$(DateRangeEditorComponentL())))();
  var AppViewOfDateRangeEditorComponentL = () => (AppViewOfDateRangeEditorComponentL = dart.constFn(app_view.AppView$(DateRangeEditorComponentL())))();
  var AppViewLOfDateRangeEditorComponentL = () => (AppViewLOfDateRangeEditorComponentL = dart.constFn(dart.legacy(AppViewOfDateRangeEditorComponentL())))();
  var AppViewLAndintLToAppViewLOfDateRangeEditorComponentL = () => (AppViewLAndintLToAppViewLOfDateRangeEditorComponentL = dart.constFn(dart.fnType(AppViewLOfDateRangeEditorComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/date_range_editor.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent11, AppViewLAndintLToAppViewLOfvoid());
    },
    get C3() {
      return C3 = dart.fn(clock.systemTime, VoidToDateTimeL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: clock.Clock.prototype,
        [Clock__time]: C3 || CT.C3
      });
    },
    get C4() {
      return C4 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent2, AppViewLAndintLToAppViewLOfvoid());
    },
    get C5() {
      return C5 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent3, AppViewLAndintLToAppViewLOfvoid());
    },
    get C6() {
      return C6 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent6, AppViewLAndintLToAppViewLOfvoid());
    },
    get C7() {
      return C7 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent9, AppViewLAndintLToAppViewLOfvoid());
    },
    get C8() {
      return C8 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent10, AppViewLAndintLToAppViewLOfvoid());
    },
    get C9() {
      return C9 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent4, AppViewLAndintLToAppViewLOfvoid());
    },
    get C10() {
      return C10 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent5, AppViewLAndintLToAppViewLOfvoid());
    },
    get C11() {
      return C11 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent7, AppViewLAndintLToAppViewLOfvoid());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: OpaqueTokenOfListLOfRelativePositionL().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C16() {
      return C16 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent8, AppViewLAndintLToAppViewLOfvoid());
    },
    get C17() {
      return C17 = dart.constList([], dart.dynamic);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: opaque_token.MultiToken.prototype,
        [OpaqueToken__uniqueName]: "NgValidators"
      });
    },
    get C19() {
      return C19 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent12, AppViewLAndintLToAppViewLOfvoid());
    },
    get C20() {
      return C20 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent13, AppViewLAndintLToAppViewLOfvoid());
    },
    get C21() {
      return C21 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent14, AppViewLAndintLToAppViewLOfvoid());
    },
    get C22() {
      return C22 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent15, AppViewLAndintLToAppViewLOfvoid());
    },
    get C23() {
      return C23 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent16, AppViewLAndintLToAppViewLOfvoid());
    },
    get C24() {
      return C24 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent17, AppViewLAndintLToAppViewLOfvoid());
    },
    get C25() {
      return C25 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent18, AppViewLAndintLToAppViewLOfvoid());
    },
    get C26() {
      return C26 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponent19, AppViewLAndintLToAppViewLOfvoid());
    },
    get C27() {
      return C27 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C29() {
      return C29 = dart.fn(date_range_editor$46template.viewFactory_DateRangeEditorComponentHost0, AppViewLAndintLToAppViewLOfDateRangeEditorComponentL());
    },
    get C28() {
      return C28 = dart.const({
        __proto__: ComponentFactoryOfDateRangeEditorComponentL().prototype,
        [ComponentFactory__viewFactory]: C29 || CT.C29,
        [ComponentFactory_selector]: "date-range-editor"
      });
    }
  }, false);
  var _query_MaterialCalendarPickerComponent_1_0_isDirty = dart.privateName(date_range_editor$46template, "_query_MaterialCalendarPickerComponent_1_0_isDirty");
  var _query_MaterialMonthPickerComponent_1_1_isDirty = dart.privateName(date_range_editor$46template, "_query_MaterialMonthPickerComponent_1_1_isDirty");
  var _appEl_0 = dart.privateName(date_range_editor$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(date_range_editor$46template, "_NgIf_0_9");
  var _appEl_1 = dart.privateName(date_range_editor$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(date_range_editor$46template, "_NgIf_1_9");
  var _expr_2 = dart.privateName(date_range_editor$46template, "_expr_2");
  var C0;
  var C1;
  var _appEl_10 = dart.privateName(date_range_editor$46template, "_appEl_10");
  var _MaterialCalendarPickerComponent_0_5 = dart.privateName(date_range_editor$46template, "_MaterialCalendarPickerComponent_0_5");
  var _appEl_11 = dart.privateName(date_range_editor$46template, "_appEl_11");
  var _MaterialMonthPickerComponent_0_5 = dart.privateName(date_range_editor$46template, "_MaterialMonthPickerComponent_0_5");
  date_range_editor$46template.ViewDateRangeEditorComponent0 = class ViewDateRangeEditorComponent0 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/date_range_editor.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C1 || CT.C1);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = dart.test(_ctx.presets[$isNotEmpty]) && dart.test(_ctx.shouldShowPredefinedList);
      this[_NgIf_1_9].ngIf = dart.test(_ctx.supportsCustomRange) && dart.test(_ctx.shouldShowCustomDateRangeColumn);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_MaterialCalendarPickerComponent_1_0_isDirty])) {
          _ctx.calendarPicker = queries.firstOrNull(MaterialCalendarPickerComponentL(), this[_appEl_1].mapNestedViews(MaterialCalendarPickerComponentL(), _ViewDateRangeEditorComponent11L(), dart.fn(nestedView => nestedView[_appEl_10].mapNestedViews(MaterialCalendarPickerComponentL(), _ViewDateRangeEditorComponent18L(), dart.fn(nestedView => JSArrayOfMaterialCalendarPickerComponentL().of([nestedView[_MaterialCalendarPickerComponent_0_5]]), _ViewDateRangeEditorComponent18LToListLOfMaterialCalendarPickerComponentL())), _ViewDateRangeEditorComponent11LToListLOfMaterialCalendarPickerComponentL())));
          this[_query_MaterialCalendarPickerComponent_1_0_isDirty] = false;
        }
        if (dart.test(this[_query_MaterialMonthPickerComponent_1_1_isDirty])) {
          _ctx.monthSelector = queries.firstOrNull(MaterialMonthPickerComponentL(), this[_appEl_1].mapNestedViews(MaterialMonthPickerComponentL(), _ViewDateRangeEditorComponent11L(), dart.fn(nestedView => nestedView[_appEl_11].mapNestedViews(MaterialMonthPickerComponentL(), _ViewDateRangeEditorComponent19L(), dart.fn(nestedView => JSArrayOfMaterialMonthPickerComponentL().of([nestedView[_MaterialMonthPickerComponent_0_5]]), _ViewDateRangeEditorComponent19LToListLOfMaterialMonthPickerComponentL())), _ViewDateRangeEditorComponent11LToListLOfMaterialMonthPickerComponentL())));
          this[_query_MaterialMonthPickerComponent_1_1_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_1].destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_2 = _ctx.compact;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "compact", currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    initComponentStyles() {
      let styles = date_range_editor$46template.ViewDateRangeEditorComponent0._componentStyles;
      if (styles == null) {
        date_range_editor$46template.ViewDateRangeEditorComponent0._componentStyles = styles = date_range_editor$46template.ViewDateRangeEditorComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(date_range_editor$46template.styles$DateRangeEditorComponent, date_range_editor$46template.ViewDateRangeEditorComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (date_range_editor$46template.ViewDateRangeEditorComponent0.new = function(parentView, parentIndex) {
    this[_query_MaterialCalendarPickerComponent_1_0_isDirty] = true;
    this[_query_MaterialMonthPickerComponent_1_1_isDirty] = true;
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_expr_2] = null;
    date_range_editor$46template.ViewDateRangeEditorComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("date-range-editor"));
  }).prototype = date_range_editor$46template.ViewDateRangeEditorComponent0.prototype;
  dart.addTypeTests(date_range_editor$46template.ViewDateRangeEditorComponent0);
  dart.addTypeCaches(date_range_editor$46template.ViewDateRangeEditorComponent0);
  dart.setLibraryUri(date_range_editor$46template.ViewDateRangeEditorComponent0, L0);
  dart.setFieldSignature(date_range_editor$46template.ViewDateRangeEditorComponent0, () => ({
    __proto__: dart.getFields(date_range_editor$46template.ViewDateRangeEditorComponent0.__proto__),
    [_query_MaterialCalendarPickerComponent_1_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_query_MaterialMonthPickerComponent_1_1_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(date_range_editor$46template.ViewDateRangeEditorComponent0, {
    /*date_range_editor$46template.ViewDateRangeEditorComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _query_SelectionItem_0_0_isDirty = dart.privateName(date_range_editor$46template, "_query_SelectionItem_0_0_isDirty");
  var _compView_0 = dart.privateName(date_range_editor$46template, "_compView_0");
  var _MaterialSelectComponent_0_5 = dart.privateName(date_range_editor$46template, "_MaterialSelectComponent_0_5");
  var _Clock_0_6 = dart.privateName(date_range_editor$46template, "_Clock_0_6");
  var _GestureListenerFactory_0_7 = dart.privateName(date_range_editor$46template, "_GestureListenerFactory_0_7");
  var _ElementScrollHost_0_8 = dart.privateName(date_range_editor$46template, "_ElementScrollHost_0_8");
  var _appEl_2 = dart.privateName(date_range_editor$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(date_range_editor$46template, "_NgIf_2_9");
  var _appEl_4 = dart.privateName(date_range_editor$46template, "_appEl_4");
  var _NgFor_4_9 = dart.privateName(date_range_editor$46template, "_NgFor_4_9");
  var _appEl_5 = dart.privateName(date_range_editor$46template, "_appEl_5");
  var _NgIf_5_9 = dart.privateName(date_range_editor$46template, "_NgIf_5_9");
  var _appEl_6 = dart.privateName(date_range_editor$46template, "_appEl_6");
  var _NgIf_6_9 = dart.privateName(date_range_editor$46template, "_NgIf_6_9");
  var _expr_0 = dart.privateName(date_range_editor$46template, "_expr_0");
  var _expr_4 = dart.privateName(date_range_editor$46template, "_expr_4");
  var _el_0 = dart.privateName(date_range_editor$46template, "_el_0");
  var C3;
  var Clock__time = dart.privateName(clock, "Clock._time");
  var C2;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var _MaterialSelectItemComponent_1_5 = dart.privateName(date_range_editor$46template, "_MaterialSelectItemComponent_1_5");
  var _MaterialSelectItemComponent_0_8 = dart.privateName(date_range_editor$46template, "_MaterialSelectItemComponent_0_8");
  var _appEl_3 = dart.privateName(date_range_editor$46template, "_appEl_3");
  var _MaterialSelectItemComponent_5_5 = dart.privateName(date_range_editor$46template, "_MaterialSelectItemComponent_5_5");
  date_range_editor$46template._ViewDateRangeEditorComponent1 = class _ViewDateRangeEditorComponent1 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      this[_compView_0] = new material_select$46template.ViewMaterialSelectComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      dom_helpers.setAttribute(this[_el_0], "acxScrollHost", "");
      this.updateChildClassNonHtml(this[_el_0], "preset-list");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_MaterialSelectComponent_0_5] = new material_select.MaterialSelectComponent.new();
      this[_Clock_0_6] = C2 || CT.C2;
      this[_GestureListenerFactory_0_7] = new gestures.GestureListenerFactory.new(this[_Clock_0_6]);
      this[_ElementScrollHost_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ElementScrollHostL(), dart.wrapType(ElementScrollHostL()), dart.fn(() => new angular_2.ElementScrollHost.new(DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), this[_GestureListenerFactory_0_7], HtmlElementL().as(this[_el_0])), VoidToElementScrollHostL())) : new angular_2.ElementScrollHost.new(DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), this[_GestureListenerFactory_0_7], HtmlElementL().as(this[_el_0]));
      let _anchor_1 = dom_helpers.createAnchor();
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C4 || CT.C4);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C5 || CT.C5);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let doc = html.document;
      let _el_3 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_3), "group");
      dom_helpers.setAttribute(_el_3, "role", "listbox");
      this.addShimC(HtmlElementL().as(_el_3));
      let _anchor_4 = dom_helpers.appendAnchor(_el_3);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 3, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C6 || CT.C6);
      this[_NgFor_4_9] = new ng_for.NgFor.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = dom_helpers.createAnchor();
      this[_appEl_5] = new view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C7 || CT.C7);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = dom_helpers.createAnchor();
      this[_appEl_6] = new view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C8 || CT.C8);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this[_compView_0].create(this[_MaterialSelectComponent_0_5], JSArrayOfObjectL().of([JSArrayOfObjectL().of([this[_appEl_1], this[_appEl_2], _el_3, this[_appEl_5], this[_appEl_6]])]));
      this.init1(this[_el_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 6) {
        if (token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL()) || token === dart.wrapType(SelectionContainerL())) {
          return this[_MaterialSelectComponent_0_5];
        }
        if (token === dart.wrapType(ClockL())) {
          return this[_Clock_0_6];
        }
        if (token === dart.wrapType(GestureListenerFactoryL())) {
          return this[_GestureListenerFactory_0_7];
        }
        if (token === dart.wrapType(ElementScrollHostL()) || token === dart.wrapType(ScrollHostL())) {
          return this[_ElementScrollHost_0_8];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialSelectComponent_0_5].width = 0;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialSelectComponent_0_5].ngOnInit();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ElementScrollHost_0_8].ngOnInit();
      }
      this[_NgIf_1_9].ngIf = _ctx.supportsClearRange;
      this[_NgIf_2_9].ngIf = _ctx.supportsCustomRange;
      let currVal_4 = _ctx.presets;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_NgFor_4_9].ngForOf = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_4_9].ngDoCheck();
      }
      this[_NgIf_5_9].ngIf = _ctx.supportsDaysInputs;
      this[_NgIf_6_9].ngIf = _ctx.supportsComparison;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_SelectionItem_0_0_isDirty])) {
          this[_MaterialSelectComponent_0_5].selectItems = queries.flattenNodes(SelectionItemL(), JSArrayOfListLOfSelectionItemL().of([this[_appEl_1].mapNestedViews(SelectionItemL(), _ViewDateRangeEditorComponent2L(), dart.fn(nestedView => JSArrayOfSelectionItemL().of([nestedView[_MaterialSelectItemComponent_1_5]]), _ViewDateRangeEditorComponent2LToListLOfSelectionItemL())), this[_appEl_2].mapNestedViews(SelectionItemL(), _ViewDateRangeEditorComponent3L(), dart.fn(nestedView => JSArrayOfSelectionItemL().of([nestedView[_MaterialSelectItemComponent_1_5]]), _ViewDateRangeEditorComponent3LToListLOfSelectionItemL())), this[_appEl_4].mapNestedViews(SelectionItemL(), _ViewDateRangeEditorComponent6L(), dart.fn(nestedView => queries.flattenNodes(SelectionItemL(), JSArrayOfListLOfSelectionItemL().of([JSArrayOfSelectionItemL().of([nestedView[_MaterialSelectItemComponent_0_8]]), nestedView[_appEl_2].mapNestedViews(SelectionItemL(), _ViewDateRangeEditorComponent7L(), dart.fn(nestedView => nestedView[_appEl_3].mapNestedViews(SelectionItemL(), _ViewDateRangeEditorComponent8L(), dart.fn(nestedView => JSArrayOfSelectionItemL().of([nestedView[_MaterialSelectItemComponent_0_8]]), _ViewDateRangeEditorComponent8LToListLOfSelectionItemL())), _ViewDateRangeEditorComponent7LToListLOfSelectionItemL()))])), _ViewDateRangeEditorComponent6LToListLOfSelectionItemL())), this[_appEl_5].mapNestedViews(SelectionItemL(), _ViewDateRangeEditorComponent9L(), dart.fn(nestedView => JSArrayOfSelectionItemL().of([nestedView[_MaterialSelectItemComponent_1_5], nestedView[_MaterialSelectItemComponent_5_5]]), _ViewDateRangeEditorComponent9LToListLOfSelectionItemL()))]));
          this[_query_SelectionItem_0_0_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.isBasic;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "basic-preset-list", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_ElementScrollHost_0_8].ngOnDestroy();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent1.new = function(parentView, parentIndex) {
    this[_query_SelectionItem_0_0_isDirty] = true;
    this[_compView_0] = null;
    this[_MaterialSelectComponent_0_5] = null;
    this[_Clock_0_6] = null;
    this[_GestureListenerFactory_0_7] = null;
    this[_ElementScrollHost_0_8] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_4] = null;
    this[_NgFor_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    this[_expr_4] = null;
    this[_el_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent1.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent1);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent1);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent1, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent1, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent1, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent1.__proto__),
    [_query_SelectionItem_0_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_compView_0]: dart.fieldType(dart.legacy(material_select$46template.ViewMaterialSelectComponent0)),
    [_MaterialSelectComponent_0_5]: dart.fieldType(dart.legacy(material_select.MaterialSelectComponent)),
    [_Clock_0_6]: dart.fieldType(dart.legacy(clock.Clock)),
    [_GestureListenerFactory_0_7]: dart.fieldType(dart.legacy(gestures.GestureListenerFactory)),
    [_ElementScrollHost_0_8]: dart.fieldType(dart.legacy(angular_2.ElementScrollHost)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_4_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _compView_1 = dart.privateName(date_range_editor$46template, "_compView_1");
  date_range_editor$46template._ViewDateRangeEditorComponent2 = class _ViewDateRangeEditorComponent2 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "group");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_MaterialSelectItemComponent_1_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(_el_1, DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.viewData.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.viewData.parentIndex)), this[_compView_1], null), VoidToMaterialSelectItemComponentL())) : new material_select_item.MaterialSelectItemComponent.new(_el_1, DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.viewData.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.viewData.parentIndex)), this[_compView_1], null);
      let _text_2 = dom_helpers.createText(interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.clearRangeMsg));
      this[_compView_1].create(this[_MaterialSelectItemComponent_1_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_2])]));
      let subscription_0 = this[_MaterialSelectItemComponent_1_5].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'onClearRangeClicked')));
      this.init(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 2) {
        return this[_MaterialSelectItemComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_MaterialSelectItemComponent_1_5].ngOnDestroy();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent2.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialSelectItemComponent_1_5] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent2.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent2);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent2);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent2, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent2, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent2, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent2.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0)),
    [_MaterialSelectItemComponent_1_5]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent))
  }));
  var _NgIf_4_9 = dart.privateName(date_range_editor$46template, "_NgIf_4_9");
  var _expr_3 = dart.privateName(date_range_editor$46template, "_expr_3");
  var _el_2 = dart.privateName(date_range_editor$46template, "_el_2");
  var C9;
  var C10;
  date_range_editor$46template._ViewDateRangeEditorComponent3 = class _ViewDateRangeEditorComponent3 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "group");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      _el_0[$append](_el_1);
      dom_helpers.setAttribute(_el_1, "closeOnActivate", "false");
      this.addShimC(_el_1);
      this[_MaterialSelectItemComponent_1_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(_el_1, DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.viewData.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.viewData.parentIndex)), this[_compView_1], null), VoidToMaterialSelectItemComponentL())) : new material_select_item.MaterialSelectItemComponent.new(_el_1, DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.viewData.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.viewData.parentIndex)), this[_compView_1], null);
      this[_el_2] = DivElementL().as(doc[$createElement]("div"));
      this.addShimC(this[_el_2]);
      let _text_3 = dom_helpers.appendText(this[_el_2], interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.customRangeMsg));
      let _anchor_4 = dom_helpers.appendAnchor(this[_el_2]);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 2, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C9 || CT.C9);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = dom_helpers.createAnchor();
      this[_appEl_5] = new view_container.ViewContainer.new(5, 1, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C10 || CT.C10);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      this[_compView_1].create(this[_MaterialSelectItemComponent_1_5], JSArrayOfObjectL().of([JSArrayOfObjectL().of([this[_el_2], this[_appEl_5]])]));
      let subscription_0 = this[_MaterialSelectItemComponent_1_5].trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'onCustomClicked')));
      this.init(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_MaterialSelectItemComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialSelectItemComponent_1_5].closeOnActivate = "false";
      }
      let currVal_0 = _ctx.isCustomRangeSelected;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_1_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgIf_4_9].ngIf = dart.test(_ctx.isBasic) && dart.test(_ctx.isCustomRangeSelected);
      this[_NgIf_5_9].ngIf = _ctx.isBasic;
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_compView_1].detectHostChanges(firstCheck);
      let currVal_2 = dart.test(_ctx.isBasic) && !dart.test(_ctx.isCustomRangeSelected);
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateClassBinding(this[_el_2], "custom-tab-left", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = dart.test(_ctx.isBasic) && dart.test(_ctx.isCustomRangeSelected);
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        dom_helpers.updateClassBinding(this[_el_2], "custom_tab-left-selected", currVal_3);
        this[_expr_3] = currVal_3;
      }
      this[_compView_1].detectChanges();
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_4].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_compView_1].destroyInternalState();
      this[_MaterialSelectItemComponent_1_5].ngOnDestroy();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent3.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialSelectItemComponent_1_5] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_el_2] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent3.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent3);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent3);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent3, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent3, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent3, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent3.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0)),
    [_MaterialSelectItemComponent_1_5]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_el_2]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _textBinding_1 = dart.privateName(date_range_editor$46template, "_textBinding_1");
  date_range_editor$46template._ViewDateRangeEditorComponent4 = class _ViewDateRangeEditorComponent4 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "custom_range_desc");
      this.addShimC(HtmlElementL().as(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.customRangeDescription));
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent4.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    date_range_editor$46template._ViewDateRangeEditorComponent4.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent4.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent4);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent4);
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent4, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent4, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent4.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _ButtonDirective_0_5 = dart.privateName(date_range_editor$46template, "_ButtonDirective_0_5");
  var _MaterialIconComponent_0_6 = dart.privateName(date_range_editor$46template, "_MaterialIconComponent_0_6");
  date_range_editor$46template._ViewDateRangeEditorComponent5 = class _ViewDateRangeEditorComponent5 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      this[_compView_0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClassNonHtml(this[_el_0], "expend-more");
      dom_helpers.setAttribute(this[_el_0], "icon", "expand_more");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_MaterialIconComponent_0_6] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_0]));
      this[_compView_0].create0(this[_MaterialIconComponent_0_6]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this.init1(this[_el_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ButtonDirectiveL()) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_0_6].icon = "expand_more";
        changed = true;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent5.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_el_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent5.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent5);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent5);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent5, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent5, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent5, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent5.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_MaterialIconComponent_0_6]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _MaterialTooltipDirective_0_9 = dart.privateName(date_range_editor$46template, "_MaterialTooltipDirective_0_9");
  var __TooltipController_0_11 = dart.privateName(date_range_editor$46template, "__TooltipController_0_11");
  var _expr_1 = dart.privateName(date_range_editor$46template, "_expr_1");
  var _TooltipController_0_11 = dart.privateName(date_range_editor$46template, "_TooltipController_0_11");
  var C11;
  var _handle_trigger_0_0 = dart.privateName(date_range_editor$46template, "_handle_trigger_0_0");
  date_range_editor$46template._ViewDateRangeEditorComponent6 = class _ViewDateRangeEditorComponent6 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    get [_TooltipController_0_11]() {
      if (this[__TooltipController_0_11] == null) {
        this[__TooltipController_0_11] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(TooltipControllerL(), dart.wrapType(TooltipControllerL()), dart.fn(() => module.createTooltipController(TooltipControllerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentView.viewData.parentIndex)), DisposerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentView.viewData.parentIndex))), VoidToTooltipControllerL())) : module.createTooltipController(TooltipControllerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentView.viewData.parentIndex)), DisposerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentView.viewData.parentIndex)));
      }
      return this[__TooltipController_0_11];
    }
    build() {
      this[_compView_0] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      dom_helpers.setAttribute(_el_0, "closeOnActivate", "false");
      this.addShimC(_el_0);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _el_0);
      this[_MaterialSelectItemComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(_el_0, DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.viewData.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.viewData.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponentL())) : new material_select_item.MaterialSelectItemComponent.new(_el_0, DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.viewData.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.viewData.parentIndex)), this[_compView_0], null);
      this[_MaterialTooltipDirective_0_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTooltipDirectiveL(), dart.wrapType(MaterialTooltipDirectiveL()), dart.fn(() => new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.viewData.parentIndex)), this[_appEl_0], _el_0, this[_appEl_0], this[_compView_0], WindowL().as(this.parentView.parentView.injectorGet(dart.wrapType(WindowL()), this.parentView.viewData.parentIndex)), null, null), VoidToMaterialTooltipDirectiveL())) : new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.viewData.parentIndex)), this[_appEl_0], _el_0, this[_appEl_0], this[_compView_0], WindowL().as(this.parentView.parentView.injectorGet(dart.wrapType(WindowL()), this.parentView.viewData.parentIndex)), null, null);
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C11 || CT.C11);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_compView_0].create(this[_MaterialSelectItemComponent_0_8], JSArrayOfObjectL().of([JSArrayOfObjectL().of([this[_textBinding_1].element, this[_appEl_2]])]));
      let subscription_0 = this[_MaterialSelectItemComponent_0_8].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_trigger_0_0)));
      this.init(JSArrayOfObjectL().of([this[_appEl_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 2) {
        if (token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) {
          return this[_MaterialSelectItemComponent_0_8];
        }
        if (token === dart.wrapType(TooltipControllerL())) {
          return this[_TooltipController_0_11];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_preset = optimizations.unsafeCast(DatepickerPresetL(), this.locals[$_get]("$implicit"));
      if (firstCheck) {
        this[_MaterialSelectItemComponent_0_8].closeOnActivate = "false";
      }
      let currVal_0 = !dart.test(_ctx.isValid(local_preset));
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_0_8].disabled = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isSelected(local_preset.range);
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialSelectItemComponent_0_8].selected = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (firstCheck) {
        if (date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip != null) {
          this[_MaterialTooltipDirective_0_9].text = date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip;
        }
      }
      let currVal_4 = !dart.test(_ctx.isValid(local_preset));
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialTooltipDirective_0_9].canShow = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTooltipDirective_0_9].ngOnInit();
      }
      this[_NgIf_2_9].ngIf = local_preset.alternatives != null && dart.test(local_preset.alternatives[$isNotEmpty]);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(interpolate.interpolateString0(local_preset.title));
      this[_compView_0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialTooltipDirective_0_9].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_MaterialSelectItemComponent_0_8].ngOnDestroy();
      this[_MaterialTooltipDirective_0_9].ngOnDestroy();
    }
    [_handle_trigger_0_0]($36event) {
      let local_preset = optimizations.unsafeCast(DatepickerPresetL(), this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.onRangeClicked(UIEventL().as($36event), local_preset.range);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent6.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialSelectItemComponent_0_8] = null;
    this[_MaterialTooltipDirective_0_9] = null;
    this[__TooltipController_0_11] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent6.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent6);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent6);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent6, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(date_range_editor$46template._ViewDateRangeEditorComponent6, () => ({
    __proto__: dart.getGetters(date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__),
    [_TooltipController_0_11]: dart.dynamic
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent6, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent6, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent6.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialSelectItemComponent_0_8]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent)),
    [_MaterialTooltipDirective_0_9]: dart.fieldType(dart.legacy(tooltip.MaterialTooltipDirective)),
    [__TooltipController_0_11]: dart.fieldType(dart.dynamic),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.legacy(core.bool))
  }));
  var _AcxDarkTheme_0_5 = dart.privateName(date_range_editor$46template, "_AcxDarkTheme_0_5");
  var _MaterialButtonComponent_0_6 = dart.privateName(date_range_editor$46template, "_MaterialButtonComponent_0_6");
  var _PopupSourceDirective_0_7 = dart.privateName(date_range_editor$46template, "_PopupSourceDirective_0_7");
  var _MaterialIconComponent_1_5 = dart.privateName(date_range_editor$46template, "_MaterialIconComponent_1_5");
  var _compView_2 = dart.privateName(date_range_editor$46template, "_compView_2");
  var _MaterialPopupComponent_2_8 = dart.privateName(date_range_editor$46template, "_MaterialPopupComponent_2_8");
  var __PopupHierarchy_2_11 = dart.privateName(date_range_editor$46template, "__PopupHierarchy_2_11");
  var __PopupRef_2_12 = dart.privateName(date_range_editor$46template, "__PopupRef_2_12");
  var _NgFor_3_9 = dart.privateName(date_range_editor$46template, "_NgFor_3_9");
  var _expr_5 = dart.privateName(date_range_editor$46template, "_expr_5");
  var _expr_6 = dart.privateName(date_range_editor$46template, "_expr_6");
  var _PopupHierarchy_2_11 = dart.privateName(date_range_editor$46template, "_PopupHierarchy_2_11");
  var _PopupRef_2_12 = dart.privateName(date_range_editor$46template, "_PopupRef_2_12");
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C12;
  var C13;
  var C14;
  var C15;
  var C16;
  var C17;
  var _handle_click_0_0 = dart.privateName(date_range_editor$46template, "_handle_click_0_0");
  var _handle_keypress_0_1 = dart.privateName(date_range_editor$46template, "_handle_keypress_0_1");
  var _handle_trigger_0_2 = dart.privateName(date_range_editor$46template, "_handle_trigger_0_2");
  date_range_editor$46template._ViewDateRangeEditorComponent7 = class _ViewDateRangeEditorComponent7 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    get [_PopupHierarchy_2_11]() {
      if (this[__PopupHierarchy_2_11] == null) {
        this[__PopupHierarchy_2_11] = material_popup.getHierarchy(this[_MaterialPopupComponent_2_8]);
      }
      return this[__PopupHierarchy_2_11];
    }
    get [_PopupRef_2_12]() {
      if (this[__PopupRef_2_12] == null) {
        this[__PopupRef_2_12] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_2_8]);
      }
      return this[__PopupRef_2_12];
    }
    build() {
      this[_compView_0] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      dom_helpers.setAttribute(_el_0, "alignPositionX", "after");
      dom_helpers.setAttribute(_el_0, "alignPositionY", "start");
      this.updateChildClassNonHtml(_el_0, "preset-dropdown-button");
      dom_helpers.setAttribute(_el_0, "icon", "");
      dom_helpers.setAttribute(_el_0, "popupSource", "");
      this.addShimC(_el_0);
      this[_AcxDarkTheme_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.parentView.injectorGetOptional(C12 || CT.C12, this.parentView.parentView.viewData.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.parentView.injectorGetOptional(C12 || CT.C12, this.parentView.parentView.viewData.parentIndex)));
      this[_MaterialButtonComponent_0_6] = new material_button.MaterialButtonComponent.new(_el_0, AcxDarkThemeL().as(this[_AcxDarkTheme_0_5]), this[_compView_0], null);
      this[_PopupSourceDirective_0_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.viewData.parentIndex)), _el_0, ReferenceDirectiveL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentView.parentView.viewData.parentIndex)), FocusableL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentView.parentView.viewData.parentIndex)), null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.viewData.parentIndex)), _el_0, ReferenceDirectiveL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentView.parentView.viewData.parentIndex)), FocusableL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentView.parentView.viewData.parentIndex)), null);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      dom_helpers.setAttribute(_el_1, "icon", "arrow_drop_down");
      this.addShimC(_el_1);
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(_el_1);
      this[_compView_1].create0(this[_MaterialIconComponent_1_5]);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], JSArrayOfObjectL().of([JSArrayOfHtmlElementL().of([_el_1])]));
      this[_compView_2] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      this.addShimC(_el_2);
      this[_appEl_2] = new view_container.ViewContainer.new(2, null, this, _el_2);
      this[_MaterialPopupComponent_2_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentView.parentView.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentView.parentView.viewData.parentIndex)), null, NgZoneL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentView.parentView.viewData.parentIndex)), OverlayServiceL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentView.parentView.viewData.parentIndex)), DomServiceL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.viewData.parentIndex)), ZIndexerL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentView.parentView.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.parentView.parentView.injectorGet(C13 || CT.C13, this.parentView.parentView.viewData.parentIndex)), boolL().as(this.parentView.parentView.parentView.injectorGet(C14 || CT.C14, this.parentView.parentView.viewData.parentIndex)), BoxL().as(this.parentView.parentView.parentView.injectorGet(C15 || CT.C15, this.parentView.parentView.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentView.parentView.viewData.parentIndex)), this[_compView_2], this[_appEl_2], new element_ref.ElementRef.new(_el_2)), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentView.parentView.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentView.parentView.viewData.parentIndex)), null, NgZoneL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentView.parentView.viewData.parentIndex)), OverlayServiceL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentView.parentView.viewData.parentIndex)), DomServiceL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.viewData.parentIndex)), ZIndexerL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentView.parentView.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.parentView.parentView.injectorGet(C13 || CT.C13, this.parentView.parentView.viewData.parentIndex)), boolL().as(this.parentView.parentView.parentView.injectorGet(C14 || CT.C14, this.parentView.parentView.viewData.parentIndex)), BoxL().as(this.parentView.parentView.parentView.injectorGet(C15 || CT.C15, this.parentView.parentView.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentView.parentView.viewData.parentIndex)), this[_compView_2], this[_appEl_2], new element_ref.ElementRef.new(_el_2));
      let _anchor_3 = dom_helpers.createAnchor();
      this[_appEl_3] = new view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C16 || CT.C16);
      this[_NgFor_3_9] = new ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      this[_compView_2].create(this[_MaterialPopupComponent_2_8], JSArrayOfObjectL().of([C17 || CT.C17, JSArrayOfViewContainerL().of([this[_appEl_3]]), C17 || CT.C17]));
      _el_0[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_click_0_0)));
      _el_0[$addEventListener]("keypress", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_keypress_0_1)));
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_trigger_0_2)));
      this.init(JSArrayOfObjectL().of([_el_0, this[_appEl_2]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_0_5];
        }
        if (token === dart.wrapType(MaterialButtonComponentL()) || token === dart.wrapType(ButtonDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialButtonComponent_0_6];
        }
      }
      if (2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DropdownHandleL()) || token === dart.wrapType(DeferredContentAwareL())) {
          return this[_MaterialPopupComponent_2_8];
        }
        if (token === dart.wrapType(PopupHierarchyL())) {
          return this[_PopupHierarchy_2_11];
        }
        if (token === dart.wrapType(PopupRefL())) {
          return this[_PopupRef_2_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_menuSource = this[_PopupSourceDirective_0_7];
      let local_preset = optimizations.unsafeCast(DatepickerPresetL(), this.parentView.locals[$_get]("$implicit"));
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_PopupSourceDirective_0_7].alignX = "after";
        this[_PopupSourceDirective_0_7].alignY = "start";
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_1_5].icon = "arrow_drop_down";
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialPopupComponent_2_8].offsetX = 9;
        changed = true;
        if (0 - 4 !== null) {
          this[_MaterialPopupComponent_2_8].offsetY = 0 - 4;
          changed = true;
        }
      }
      let currVal_5 = local_menuSource;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialPopupComponent_2_8].source = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      let currVal_6 = local_preset.alternatives;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_NgFor_3_9].ngForOf = currVal_6;
        this[_expr_6] = currVal_6;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_3_9].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_2].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
      this[_compView_2].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_PopupSourceDirective_0_7].ngAfterViewInit();
          this[_MaterialPopupComponent_2_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_PopupSourceDirective_0_7].ngOnDestroy();
      this[_MaterialPopupComponent_2_8].ngOnDestroy();
    }
    [_handle_click_0_0]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    [_handle_keypress_0_1]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    [_handle_trigger_0_2]($36event) {
      let local_popup = this[_MaterialPopupComponent_2_8];
      local_popup.toggle();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent7.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_PopupSourceDirective_0_7] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_compView_2] = null;
    this[_appEl_2] = null;
    this[_MaterialPopupComponent_2_8] = null;
    this[__PopupHierarchy_2_11] = null;
    this[__PopupRef_2_12] = null;
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent7.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent7);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent7);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_keypress_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_0_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getGetters(date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    [_PopupHierarchy_2_11]: dart.dynamic,
    [_PopupRef_2_12]: dart.dynamic
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent7, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent7, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent7.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_button$46template.ViewMaterialButtonComponent0)),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    [_PopupSourceDirective_0_7]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
    [_compView_1]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_1_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_compView_2]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialPopupComponent_2_8]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
    [__PopupHierarchy_2_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_2_12]: dart.fieldType(dart.dynamic),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_3_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  var __TooltipController_0_13 = dart.privateName(date_range_editor$46template, "__TooltipController_0_13");
  var _TooltipController_0_13 = dart.privateName(date_range_editor$46template, "_TooltipController_0_13");
  date_range_editor$46template._ViewDateRangeEditorComponent8 = class _ViewDateRangeEditorComponent8 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    get [_TooltipController_0_13]() {
      if (this[__TooltipController_0_13] == null) {
        this[__TooltipController_0_13] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(TooltipControllerL(), dart.wrapType(TooltipControllerL()), dart.fn(() => module.createTooltipController(TooltipControllerL().as(optimizations.unsafeCast(_ViewDateRangeEditorComponent6L(), this.parentView.parentView)[_TooltipController_0_11]), DisposerL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentView.parentView.parentView.viewData.parentIndex))), VoidToTooltipControllerL())) : module.createTooltipController(TooltipControllerL().as(optimizations.unsafeCast(_ViewDateRangeEditorComponent6L(), this.parentView.parentView)[_TooltipController_0_11]), DisposerL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentView.parentView.parentView.viewData.parentIndex)));
      }
      return this[__TooltipController_0_13];
    }
    build() {
      this[_compView_0] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(_el_0, interpolate.interpolateString2("", "preset-dropdown-item", " ", "item", ""));
      dom_helpers.setAttribute(_el_0, "closeOnActivate", "false");
      this.addShimC(_el_0);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _el_0);
      this[_MaterialSelectItemComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(_el_0, optimizations.unsafeCast(_ViewDateRangeEditorComponent7L(), this.parentView)[_MaterialPopupComponent_2_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponentL())) : new material_select_item.MaterialSelectItemComponent.new(_el_0, optimizations.unsafeCast(_ViewDateRangeEditorComponent7L(), this.parentView)[_MaterialPopupComponent_2_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0], null);
      this[_MaterialTooltipDirective_0_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTooltipDirectiveL(), dart.wrapType(MaterialTooltipDirectiveL()), dart.fn(() => new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.parentView.viewData.parentIndex)), this[_appEl_0], _el_0, this[_appEl_0], this[_compView_0], WindowL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(WindowL()), this.parentView.parentView.parentView.viewData.parentIndex)), null, null), VoidToMaterialTooltipDirectiveL())) : new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.parentView.viewData.parentIndex)), this[_appEl_0], _el_0, this[_appEl_0], this[_compView_0], WindowL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(WindowL()), this.parentView.parentView.parentView.viewData.parentIndex)), null, null);
      this[_compView_0].create(this[_MaterialSelectItemComponent_0_8], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_1].element])]));
      let subscription_0 = this[_MaterialSelectItemComponent_0_8].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_trigger_0_0)));
      this.init(JSArrayOfObjectL().of([this[_appEl_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) {
          return this[_MaterialSelectItemComponent_0_8];
        }
        if (token === dart.wrapType(TooltipControllerL())) {
          return this[_TooltipController_0_13];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_alternative = optimizations.unsafeCast(DatepickerPresetL(), this.locals[$_get]("$implicit"));
      if (firstCheck) {
        this[_MaterialSelectItemComponent_0_8].closeOnActivate = "false";
      }
      let currVal_0 = !dart.test(_ctx.isValid(local_alternative));
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_0_8].disabled = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isAlternativePresetSelected(local_alternative);
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialSelectItemComponent_0_8].selected = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (firstCheck) {
        if (date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip != null) {
          this[_MaterialTooltipDirective_0_9].text = date_range_editor.DateRangeEditorComponent.rangeDisabledTooltip;
        }
      }
      let currVal_4 = !dart.test(_ctx.isValid(local_alternative));
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialTooltipDirective_0_9].canShow = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTooltipDirective_0_9].ngOnInit();
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(interpolate.interpolateString0(local_alternative.shortTitle));
      this[_compView_0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialTooltipDirective_0_9].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView.parentView.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_MaterialSelectItemComponent_0_8].ngOnDestroy();
      this[_MaterialTooltipDirective_0_9].ngOnDestroy();
    }
    [_handle_trigger_0_0]($36event) {
      let local_preset = optimizations.unsafeCast(DatepickerPresetL(), this.parentView.parentView.locals[$_get]("$implicit"));
      let local_alternative = optimizations.unsafeCast(DatepickerPresetL(), this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.onAlternativePresetClicked(UIEventL().as($36event), local_preset, local_alternative);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent8.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialSelectItemComponent_0_8] = null;
    this[_MaterialTooltipDirective_0_9] = null;
    this[__TooltipController_0_13] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent8.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent8);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent8);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getGetters(date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    [_TooltipController_0_13]: dart.dynamic
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent8, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent8, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent8.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialSelectItemComponent_0_8]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent)),
    [_MaterialTooltipDirective_0_9]: dart.fieldType(dart.legacy(tooltip.MaterialTooltipDirective)),
    [__TooltipController_0_13]: dart.fieldType(dart.dynamic),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.legacy(core.bool))
  }));
  var _DeferredValidator_2_5 = dart.privateName(date_range_editor$46template, "_DeferredValidator_2_5");
  var _NgValidators_2_6 = dart.privateName(date_range_editor$46template, "_NgValidators_2_6");
  var _NgModel_2_7 = dart.privateName(date_range_editor$46template, "_NgModel_2_7");
  var _MaterialInputComponent_2_9 = dart.privateName(date_range_editor$46template, "_MaterialInputComponent_2_9");
  var _MaterialInputDefaultValueAccessor_2_11 = dart.privateName(date_range_editor$46template, "_MaterialInputDefaultValueAccessor_2_11");
  var _compView_5 = dart.privateName(date_range_editor$46template, "_compView_5");
  var _compView_6 = dart.privateName(date_range_editor$46template, "_compView_6");
  var _DeferredValidator_6_5 = dart.privateName(date_range_editor$46template, "_DeferredValidator_6_5");
  var _NgValidators_6_6 = dart.privateName(date_range_editor$46template, "_NgValidators_6_6");
  var _NgModel_6_7 = dart.privateName(date_range_editor$46template, "_NgModel_6_7");
  var _MaterialInputComponent_6_9 = dart.privateName(date_range_editor$46template, "_MaterialInputComponent_6_9");
  var _MaterialInputDefaultValueAccessor_6_11 = dart.privateName(date_range_editor$46template, "_MaterialInputDefaultValueAccessor_6_11");
  var _expr_8 = dart.privateName(date_range_editor$46template, "_expr_8");
  var _handle_trigger_1_0 = dart.privateName(date_range_editor$46template, "_handle_trigger_1_0");
  var _handle_click_2_0 = dart.privateName(date_range_editor$46template, "_handle_click_2_0");
  var _handle_ngModelChange_2_1 = dart.privateName(date_range_editor$46template, "_handle_ngModelChange_2_1");
  var _handle_trigger_5_0 = dart.privateName(date_range_editor$46template, "_handle_trigger_5_0");
  var _handle_click_6_0 = dart.privateName(date_range_editor$46template, "_handle_click_6_0");
  var _handle_ngModelChange_6_1 = dart.privateName(date_range_editor$46template, "_handle_ngModelChange_6_1");
  var C18;
  date_range_editor$46template._ViewDateRangeEditorComponent9 = class _ViewDateRangeEditorComponent9 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "days group");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      _el_0[$append](_el_1);
      this.updateChildClassNonHtml(_el_1, interpolate.interpolateString2("", "days-input days-to-today", " ", "item", ""));
      dom_helpers.setAttribute(_el_1, "closeOnActivate", "false");
      this.addShimC(_el_1);
      this[_MaterialSelectItemComponent_1_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(_el_1, DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.viewData.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.viewData.parentIndex)), this[_compView_1], null), VoidToMaterialSelectItemComponentL())) : new material_select_item.MaterialSelectItemComponent.new(_el_1, DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.viewData.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.viewData.parentIndex)), this[_compView_1], null);
      this[_compView_2] = new material_input$46template.ViewMaterialInputComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      this.addShimC(_el_2);
      this[_DeferredValidator_2_5] = new deferred_validator.DeferredValidator.new();
      this[_NgValidators_2_6] = [this[_DeferredValidator_2_5]];
      this[_NgModel_2_7] = new ng_model.NgModel.new(this[_NgValidators_2_6], null);
      this[_MaterialInputComponent_2_9] = new material_input.MaterialInputComponent.new(null, null, null, this[_NgModel_2_7], this[_compView_2], this[_DeferredValidator_2_5]);
      this[_MaterialInputDefaultValueAccessor_2_11] = new material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_2_9], this[_NgModel_2_7]);
      this[_compView_2].create(this[_MaterialInputComponent_2_9], JSArrayOfObjectL().of([C17 || CT.C17, C17 || CT.C17]));
      let _el_3 = doc[$createElement]("span");
      this.addShimE(_el_3);
      let _text_4 = dom_helpers.appendText(_el_3, interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.daysToTodayMsg));
      this[_compView_1].create(this[_MaterialSelectItemComponent_1_5], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_2, _el_3])]));
      this[_compView_5] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 5);
      let _el_5 = this[_compView_5].rootEl;
      _el_0[$append](_el_5);
      this.updateChildClassNonHtml(_el_5, interpolate.interpolateString2("", "days-input days-to-yesterday", " ", "item", ""));
      dom_helpers.setAttribute(_el_5, "closeOnActivate", "false");
      this.addShimC(_el_5);
      this[_MaterialSelectItemComponent_5_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(_el_5, DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.viewData.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.viewData.parentIndex)), this[_compView_5], null), VoidToMaterialSelectItemComponentL())) : new material_select_item.MaterialSelectItemComponent.new(_el_5, DropdownHandleL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.viewData.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.viewData.parentIndex)), this[_compView_5], null);
      this[_compView_6] = new material_input$46template.ViewMaterialInputComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootEl;
      this.addShimC(_el_6);
      this[_DeferredValidator_6_5] = new deferred_validator.DeferredValidator.new();
      this[_NgValidators_6_6] = [this[_DeferredValidator_6_5]];
      this[_NgModel_6_7] = new ng_model.NgModel.new(this[_NgValidators_6_6], null);
      this[_MaterialInputComponent_6_9] = new material_input.MaterialInputComponent.new(null, null, null, this[_NgModel_6_7], this[_compView_6], this[_DeferredValidator_6_5]);
      this[_MaterialInputDefaultValueAccessor_6_11] = new material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_6_9], this[_NgModel_6_7]);
      this[_compView_6].create(this[_MaterialInputComponent_6_9], JSArrayOfObjectL().of([C17 || CT.C17, C17 || CT.C17]));
      let _el_7 = doc[$createElement]("span");
      this.addShimE(_el_7);
      let _text_8 = dom_helpers.appendText(_el_7, interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.daysToYesterdayMsg));
      this[_compView_5].create(this[_MaterialSelectItemComponent_5_5], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_6, _el_7])]));
      let subscription_0 = this[_MaterialSelectItemComponent_1_5].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_trigger_1_0)));
      _el_2[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_click_2_0)));
      let subscription_1 = this[_NgModel_2_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_2_1)));
      let subscription_2 = this[_MaterialSelectItemComponent_5_5].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_trigger_5_0)));
      _el_6[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_click_6_0)));
      let subscription_3 = this[_NgModel_6_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_6_1)));
      this.init(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1, subscription_2, subscription_3]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        if (2 === nodeIndex) {
          if (token === dart.wrapType(DeferredValidatorL())) {
            return this[_DeferredValidator_2_5];
          }
          if (token === (C18 || CT.C18)) {
            return this[_NgValidators_2_6];
          }
          if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
            return this[_NgModel_2_7];
          }
          if (token === dart.wrapType(MaterialInputComponentL()) || token === dart.wrapType(BaseMaterialInputL()) || token === dart.wrapType(ReferenceDirectiveL()) || token === dart.wrapType(FocusableL()) || token === dart.wrapType(HasDisabledL())) {
            return this[_MaterialInputComponent_2_9];
          }
        }
        if (token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) {
          return this[_MaterialSelectItemComponent_1_5];
        }
      }
      if (5 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        if (6 === nodeIndex) {
          if (token === dart.wrapType(DeferredValidatorL())) {
            return this[_DeferredValidator_6_5];
          }
          if (token === (C18 || CT.C18)) {
            return this[_NgValidators_6_6];
          }
          if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
            return this[_NgModel_6_7];
          }
          if (token === dart.wrapType(MaterialInputComponentL()) || token === dart.wrapType(BaseMaterialInputL()) || token === dart.wrapType(ReferenceDirectiveL()) || token === dart.wrapType(FocusableL()) || token === dart.wrapType(HasDisabledL())) {
            return this[_MaterialInputComponent_6_9];
          }
        }
        if (token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) {
          return this[_MaterialSelectItemComponent_5_5];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialSelectItemComponent_1_5].closeOnActivate = "false";
      }
      let currVal_0 = _ctx.isSelected(_ctx.daysToTodayRange);
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_1_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      changed = false;
      this[_NgModel_2_7].model = _ctx.daysToToday;
      this[_NgModel_2_7].ngAfterChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_2_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_2_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_3 = _ctx.maxDaysInputLength;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialInputComponent_2_9].maxCount = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MaterialSelectItemComponent_5_5].closeOnActivate = "false";
      }
      let currVal_5 = _ctx.isSelected(_ctx.daysToYesterdayRange);
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialSelectItemComponent_5_5].selected = currVal_5;
        this[_expr_5] = currVal_5;
      }
      changed = false;
      this[_NgModel_6_7].model = _ctx.daysToYesterday;
      this[_NgModel_6_7].ngAfterChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_6_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_6_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_8 = _ctx.maxDaysInputLength;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MaterialInputComponent_6_9].maxCount = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_5].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      this[_compView_2].detectChanges();
      this[_compView_5].detectChanges();
      this[_compView_6].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_2_9].ngAfterViewInit();
          this[_MaterialInputComponent_6_9].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
      optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView)[_query_SelectionItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_compView_5].destroyInternalState();
      this[_compView_6].destroyInternalState();
      this[_MaterialInputComponent_2_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_2_11].ngOnDestroy();
      this[_MaterialSelectItemComponent_1_5].ngOnDestroy();
      this[_MaterialInputComponent_6_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_6_11].ngOnDestroy();
      this[_MaterialSelectItemComponent_5_5].ngOnDestroy();
    }
    [_handle_trigger_1_0]($36event) {
      let _ctx = this.ctx;
      _ctx.onRangeClicked(UIEventL().as($36event), _ctx.daysToTodayRange);
    }
    [_handle_click_2_0]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    [_handle_ngModelChange_2_1]($36event) {
      let _ctx = this.ctx;
      _ctx.daysToToday = StringL().as($36event);
    }
    [_handle_trigger_5_0]($36event) {
      let _ctx = this.ctx;
      _ctx.onRangeClicked(UIEventL().as($36event), _ctx.daysToYesterdayRange);
    }
    [_handle_click_6_0]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    [_handle_ngModelChange_6_1]($36event) {
      let _ctx = this.ctx;
      _ctx.daysToYesterday = StringL().as($36event);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent9.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialSelectItemComponent_1_5] = null;
    this[_compView_2] = null;
    this[_DeferredValidator_2_5] = null;
    this[_NgValidators_2_6] = null;
    this[_NgModel_2_7] = null;
    this[_MaterialInputComponent_2_9] = null;
    this[_MaterialInputDefaultValueAccessor_2_11] = null;
    this[_compView_5] = null;
    this[_MaterialSelectItemComponent_5_5] = null;
    this[_compView_6] = null;
    this[_DeferredValidator_6_5] = null;
    this[_NgValidators_6_6] = null;
    this[_NgModel_6_7] = null;
    this[_MaterialInputComponent_6_9] = null;
    this[_MaterialInputDefaultValueAccessor_6_11] = null;
    this[_expr_0] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_8] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent9.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent9);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent9);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent9, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_trigger_1_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_2_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_2_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_5_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_6_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_6_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent9, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent9, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent9.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0)),
    [_MaterialSelectItemComponent_1_5]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent)),
    [_compView_2]: dart.fieldType(dart.legacy(material_input$46template.ViewMaterialInputComponent0)),
    [_DeferredValidator_2_5]: dart.fieldType(dart.legacy(deferred_validator.DeferredValidator)),
    [_NgValidators_2_6]: dart.fieldType(dart.legacy(core.List)),
    [_NgModel_2_7]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_MaterialInputComponent_2_9]: dart.fieldType(dart.legacy(material_input.MaterialInputComponent)),
    [_MaterialInputDefaultValueAccessor_2_11]: dart.fieldType(dart.legacy(material_input_default_value_accessor.MaterialInputDefaultValueAccessor)),
    [_compView_5]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0)),
    [_MaterialSelectItemComponent_5_5]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent)),
    [_compView_6]: dart.fieldType(dart.legacy(material_input$46template.ViewMaterialInputComponent0)),
    [_DeferredValidator_6_5]: dart.fieldType(dart.legacy(deferred_validator.DeferredValidator)),
    [_NgValidators_6_6]: dart.fieldType(dart.legacy(core.List)),
    [_NgModel_6_7]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_MaterialInputComponent_6_9]: dart.fieldType(dart.legacy(material_input.MaterialInputComponent)),
    [_MaterialInputDefaultValueAccessor_6_11]: dart.fieldType(dart.legacy(material_input_default_value_accessor.MaterialInputDefaultValueAccessor)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.legacy(core.int)),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.legacy(core.int))
  }));
  var _ComparisonRangeEditorComponent_1_5 = dart.privateName(date_range_editor$46template, "_ComparisonRangeEditorComponent_1_5");
  date_range_editor$46template._ViewDateRangeEditorComponent10 = class _ViewDateRangeEditorComponent10 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "comparison group");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1] = new comparison_range_editor$46template.ViewComparisonRangeEditorComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_ComparisonRangeEditorComponent_1_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ComparisonRangeEditorComponentL(), dart.wrapType(ComparisonRangeEditorComponentL()), dart.fn(() => new comparison_range_editor.ComparisonRangeEditorComponent.new(NgZoneL().as(this.parentView.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentView.viewData.parentIndex)), optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView)[_ElementScrollHost_0_8]), VoidToComparisonRangeEditorComponentL())) : new comparison_range_editor.ComparisonRangeEditorComponent.new(NgZoneL().as(this.parentView.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentView.viewData.parentIndex)), optimizations.unsafeCast(_ViewDateRangeEditorComponent1L(), this.parentView)[_ElementScrollHost_0_8]);
      this[_compView_1].create0(this[_ComparisonRangeEditorComponent_1_5]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.model;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_ComparisonRangeEditorComponent_1_5].model = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent10.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_ComparisonRangeEditorComponent_1_5] = null;
    this[_expr_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent10.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent10.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent10);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent10);
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent10, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent10, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent10.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(comparison_range_editor$46template.ViewComparisonRangeEditorComponent0)),
    [_ComparisonRangeEditorComponent_1_5]: dart.fieldType(dart.legacy(comparison_range_editor.ComparisonRangeEditorComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  var _compView_4 = dart.privateName(date_range_editor$46template, "_compView_4");
  var _DateRangeInputComponent_4_5 = dart.privateName(date_range_editor$46template, "_DateRangeInputComponent_4_5");
  var _appEl_7 = dart.privateName(date_range_editor$46template, "_appEl_7");
  var _NgIf_7_9 = dart.privateName(date_range_editor$46template, "_NgIf_7_9");
  var _appEl_8 = dart.privateName(date_range_editor$46template, "_appEl_8");
  var _NgIf_8_9 = dart.privateName(date_range_editor$46template, "_NgIf_8_9");
  var _NgIf_10_9 = dart.privateName(date_range_editor$46template, "_NgIf_10_9");
  var _NgIf_11_9 = dart.privateName(date_range_editor$46template, "_NgIf_11_9");
  var _expr_7 = dart.privateName(date_range_editor$46template, "_expr_7");
  var _expr_9 = dart.privateName(date_range_editor$46template, "_expr_9");
  var _expr_14 = dart.privateName(date_range_editor$46template, "_expr_14");
  var _el_9 = dart.privateName(date_range_editor$46template, "_el_9");
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var C24;
  var C25;
  var C26;
  var _handle_rangeChange_4_1 = dart.privateName(date_range_editor$46template, "_handle_rangeChange_4_1");
  var _handle_stateChange_4_0 = dart.privateName(date_range_editor$46template, "_handle_stateChange_4_0");
  date_range_editor$46template._ViewDateRangeEditorComponent11 = class _ViewDateRangeEditorComponent11 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "right-column");
      this.addShimC(HtmlElementL().as(_el_0));
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C19 || CT.C19);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C20 || CT.C20);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _el_3 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_3, "range-input");
      this.addShimC(_el_3);
      this[_compView_4] = new date_range_input$46template.ViewDateRangeInputComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootEl;
      _el_3[$append](_el_4);
      this.updateChildClassNonHtml(_el_4, "range");
      this.addShimC(_el_4);
      this[_DateRangeInputComponent_4_5] = new date_range_input.DateRangeInputComponent.new(this[_compView_4]);
      this[_compView_4].create0(this[_DateRangeInputComponent_4_5]);
      let _anchor_5 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C21 || CT.C21);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_6] = new view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C22 || CT.C22);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _anchor_7 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_7] = new view_container.ViewContainer.new(7, 0, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], C23 || CT.C23);
      this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _anchor_8 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_8] = new view_container.ViewContainer.new(8, 0, this, _anchor_8);
      let _TemplateRef_8_8 = new template_ref.TemplateRef.new(this[_appEl_8], C24 || CT.C24);
      this[_NgIf_8_9] = new ng_if.NgIf.new(this[_appEl_8], _TemplateRef_8_8);
      this[_el_9] = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(this[_el_9], "picker-container");
      this.addShimC(this[_el_9]);
      let _anchor_10 = dom_helpers.appendAnchor(this[_el_9]);
      this[_appEl_10] = new view_container.ViewContainer.new(10, 9, this, _anchor_10);
      let _TemplateRef_10_8 = new template_ref.TemplateRef.new(this[_appEl_10], C25 || CT.C25);
      this[_NgIf_10_9] = new ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      let _anchor_11 = dom_helpers.appendAnchor(this[_el_9]);
      this[_appEl_11] = new view_container.ViewContainer.new(11, 9, this, _anchor_11);
      let _TemplateRef_11_8 = new template_ref.TemplateRef.new(this[_appEl_11], C26 || CT.C26);
      this[_NgIf_11_9] = new ng_if.NgIf.new(this[_appEl_11], _TemplateRef_11_8);
      let subscription_0 = this[_DateRangeInputComponent_4_5].rangeChange.listen(this.eventHandler1(DateRangeL(), DateRangeL(), dart.bind(this, _handle_rangeChange_4_1)));
      let subscription_1 = this[_DateRangeInputComponent_4_5].stateChange.listen(this.eventHandler1(CalendarStateL(), CalendarStateL(), dart.bind(this, _handle_stateChange_4_0)));
      this.init(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      this[_NgIf_1_9].ngIf = _ctx.isBasic;
      this[_NgIf_2_9].ngIf = _ctx.isBasic;
      changed = false;
      let currVal_2 = _ctx.model.rangeId;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DateRangeInputComponent_4_5].rangeId = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.dateFormat;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_DateRangeInputComponent_4_5].dateFormat = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.activeDateFormat;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_DateRangeInputComponent_4_5].activeDateFormat = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.maxDate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_DateRangeInputComponent_4_5].maxDate = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.minDate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_DateRangeInputComponent_4_5].minDate = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.model.range.value;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_DateRangeInputComponent_4_5].range = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.isClearRangeSelected;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_DateRangeInputComponent_4_5].isClearRangeSelected = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.model.calendar.value;
      if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_DateRangeInputComponent_4_5].state = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DateRangeInputComponent_4_5].ngOnInit();
      }
      this[_NgIf_5_9].ngIf = _ctx.model.comparisonEnabled;
      this[_NgIf_6_9].ngIf = _ctx.model.comparisonEnabled;
      this[_NgIf_7_9].ngIf = _ctx.supportsMonthSelector;
      this[_NgIf_8_9].ngIf = !dart.test(_ctx.isCalendarCreated);
      this[_NgIf_10_9].ngIf = _ctx.isCalendarCreated;
      this[_NgIf_11_9].ngIf = _ctx.supportsMonthSelector;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_8].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
      this[_appEl_11].detectChangesInNestedViews();
      let currVal_14 = _ctx.compact;
      if (dart.test(app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        dom_helpers.updateClassBinding(this[_el_9], "compact", currVal_14);
        this[_expr_14] = currVal_14;
      }
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_8].destroyNestedViews();
      this[_appEl_10].destroyNestedViews();
      this[_appEl_11].destroyNestedViews();
      this[_compView_4].destroyInternalState();
      this[_DateRangeInputComponent_4_5].ngOnDestroy();
    }
    [_handle_stateChange_4_0]($36event) {
      let _ctx = this.ctx;
      _ctx.model.calendar.value = CalendarStateL().as($36event);
    }
    [_handle_rangeChange_4_1]($36event) {
      let _ctx = this.ctx;
      _ctx.model.range.value = DateRangeL().as($36event);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent11.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_compView_4] = null;
    this[_DateRangeInputComponent_4_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_8] = null;
    this[_NgIf_8_9] = null;
    this[_appEl_10] = null;
    this[_NgIf_10_9] = null;
    this[_appEl_11] = null;
    this[_NgIf_11_9] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_14] = null;
    this[_el_9] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent11.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent11);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent11);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent11, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__),
    [_handle_stateChange_4_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_rangeChange_4_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent11, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent11, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent11.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_4]: dart.fieldType(dart.legacy(date_range_input$46template.ViewDateRangeInputComponent0)),
    [_DateRangeInputComponent_4_5]: dart.fieldType(dart.legacy(date_range_input.DateRangeInputComponent)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_7]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_7_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_8]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_8_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_10]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_10_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_11]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_11_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_2]: dart.fieldType(dart.legacy(core.String)),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(dart.legacy(core.bool)),
    [_el_9]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _compView_3 = dart.privateName(date_range_editor$46template, "_compView_3");
  var _MaterialIconComponent_3_5 = dart.privateName(date_range_editor$46template, "_MaterialIconComponent_3_5");
  date_range_editor$46template._ViewDateRangeEditorComponent12 = class _ViewDateRangeEditorComponent12 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClass(this[_el_0], "button-decorator");
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
      let _el_1 = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_1, "custom-tab-right");
      this.addShimC(_el_1);
      let _text_2 = dom_helpers.appendText(_el_1, interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.customRangeMsg));
      this[_compView_3] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootEl;
      this[_el_0][$append](_el_3);
      this.updateChildClassNonHtml(_el_3, "expand-less");
      dom_helpers.setAttribute(_el_3, "icon", "expand_less");
      this.addShimC(_el_3);
      this[_MaterialIconComponent_3_5] = new material_icon.MaterialIconComponent.new(_el_3);
      this[_compView_3].create0(this[_MaterialIconComponent_3_5]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'disableCustomMode')));
      this.init(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ButtonDirectiveL()) && dart.notNull(nodeIndex) <= 3) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_3_5].icon = "expand_less";
        changed = true;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      this[_compView_3].detectChanges();
    }
    destroyInternal() {
      this[_compView_3].destroyInternalState();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent12.new = function(parentView, parentIndex) {
    this[_ButtonDirective_0_5] = null;
    this[_compView_3] = null;
    this[_MaterialIconComponent_3_5] = null;
    this[_el_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent12.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent12);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent12);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent12, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent12, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent12, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent12.__proto__),
    [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_compView_3]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_3_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  date_range_editor$46template._ViewDateRangeEditorComponent13 = class _ViewDateRangeEditorComponent13 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "content-separator");
      this.addShimC(HtmlElementL().as(_el_0));
      this.init1(_el_0);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent13.new = function(parentView, parentIndex) {
    date_range_editor$46template._ViewDateRangeEditorComponent13.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent13.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent13);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent13);
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent13, L0);
  date_range_editor$46template._ViewDateRangeEditorComponent14 = class _ViewDateRangeEditorComponent14 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "range-title");
      this.addShimC(HtmlElementL().as(_el_0));
      let _text_1 = dom_helpers.appendText(_el_0, interpolate.interpolateString0(date_range_editor.DateRangeEditorComponent.comparisonHeaderMsg));
      this.init1(_el_0);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent14.new = function(parentView, parentIndex) {
    date_range_editor$46template._ViewDateRangeEditorComponent14.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent14.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent14);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent14);
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent14, L0);
  var _DateRangeInputComponent_1_5 = dart.privateName(date_range_editor$46template, "_DateRangeInputComponent_1_5");
  var _handle_rangeChange_1_1 = dart.privateName(date_range_editor$46template, "_handle_rangeChange_1_1");
  var _handle_stateChange_1_0 = dart.privateName(date_range_editor$46template, "_handle_stateChange_1_0");
  date_range_editor$46template._ViewDateRangeEditorComponent15 = class _ViewDateRangeEditorComponent15 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "range-input");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1] = new date_range_input$46template.ViewDateRangeInputComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      _el_0[$append](_el_1);
      this.updateChildClassNonHtml(_el_1, "comparison inputs");
      this.addShimC(_el_1);
      this[_DateRangeInputComponent_1_5] = new date_range_input.DateRangeInputComponent.new(this[_compView_1]);
      this[_compView_1].create0(this[_DateRangeInputComponent_1_5]);
      let subscription_0 = this[_DateRangeInputComponent_1_5].rangeChange.listen(this.eventHandler1(DateRangeL(), DateRangeL(), dart.bind(this, _handle_rangeChange_1_1)));
      let subscription_1 = this[_DateRangeInputComponent_1_5].stateChange.listen(this.eventHandler1(CalendarStateL(), CalendarStateL(), dart.bind(this, _handle_stateChange_1_0)));
      this.init(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_0 = _ctx.model.comparisonId;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_DateRangeInputComponent_1_5].rangeId = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.dateFormat;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_DateRangeInputComponent_1_5].dateFormat = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.activeDateFormat;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DateRangeInputComponent_1_5].activeDateFormat = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.model.maxDate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_DateRangeInputComponent_1_5].maxDate = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.model.minDate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_DateRangeInputComponent_1_5].minDate = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = !dart.test(_ctx.isCustomComparisonValid);
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_DateRangeInputComponent_1_5].disabled = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.model.comparison.value;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_DateRangeInputComponent_1_5].range = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.isClearRangeSelected;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_DateRangeInputComponent_1_5].isClearRangeSelected = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.model.calendar.value;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_DateRangeInputComponent_1_5].state = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DateRangeInputComponent_1_5].ngOnInit();
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_DateRangeInputComponent_1_5].ngOnDestroy();
    }
    [_handle_stateChange_1_0]($36event) {
      let _ctx = this.ctx;
      _ctx.model.calendar.value = CalendarStateL().as($36event);
    }
    [_handle_rangeChange_1_1]($36event) {
      let _ctx = this.ctx;
      _ctx.model.comparison.value = DateRangeL().as($36event);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent15.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_DateRangeInputComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent15.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent15.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent15);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent15);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent15, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent15.__proto__),
    [_handle_stateChange_1_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_rangeChange_1_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent15, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent15, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent15.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(date_range_input$46template.ViewDateRangeInputComponent0)),
    [_DateRangeInputComponent_1_5]: dart.fieldType(dart.legacy(date_range_input.DateRangeInputComponent)),
    [_expr_0]: dart.fieldType(dart.legacy(core.String)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_8]: dart.fieldType(dart.dynamic)
  }));
  var _textBinding_3 = dart.privateName(date_range_editor$46template, "_textBinding_3");
  var _ButtonDirective_1_5 = dart.privateName(date_range_editor$46template, "_ButtonDirective_1_5");
  var _KeyboardOnlyFocusIndicatorDirective_1_6 = dart.privateName(date_range_editor$46template, "_KeyboardOnlyFocusIndicatorDirective_1_6");
  var _MaterialIconComponent_4_5 = dart.privateName(date_range_editor$46template, "_MaterialIconComponent_4_5");
  var _NextPrevComponent_5_5 = dart.privateName(date_range_editor$46template, "_NextPrevComponent_5_5");
  var _el_1 = dart.privateName(date_range_editor$46template, "_el_1");
  var _el_4 = dart.privateName(date_range_editor$46template, "_el_4");
  var _handle_click_1_1 = dart.privateName(date_range_editor$46template, "_handle_click_1_1");
  date_range_editor$46template._ViewDateRangeEditorComponent16 = class _ViewDateRangeEditorComponent16 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "month-selector-toolbar");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_el_1] = dom_helpers.appendDiv(doc, _el_0);
      dom_helpers.setAttribute(this[_el_1], "buttonDecorator", "");
      this.updateChildClass(this[_el_1], "month-selector-dropdown");
      dom_helpers.setAttribute(this[_el_1], "keyboardOnlyFocusIndicator", "");
      this.addShimC(this[_el_1]);
      this[_ButtonDirective_1_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_1], null));
      this[_KeyboardOnlyFocusIndicatorDirective_1_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_1], DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_1], DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex)));
      let _el_2 = dom_helpers.appendSpan(doc, this[_el_1]);
      this.updateChildClass(_el_2, "visible-month");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3].element);
      this[_compView_4] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      this[_el_1][$append](this[_el_4]);
      this.updateChildClassNonHtml(this[_el_4], "month-selector-dropdown-icon");
      dom_helpers.setAttribute(this[_el_4], "icon", "arrow_drop_down");
      this.addShimC(HtmlElementL().as(this[_el_4]));
      this[_MaterialIconComponent_4_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_4]));
      this[_compView_4].create0(this[_MaterialIconComponent_4_5]);
      this[_compView_5] = new next_prev_buttons$46template.ViewNextPrevComponent0.new(this, 5);
      let _el_5 = this[_compView_5].rootEl;
      _el_0[$append](_el_5);
      this.updateChildClassNonHtml(_el_5, "next-prev-range");
      this.addShimC(_el_5);
      this[_NextPrevComponent_5_5] = new next_prev_buttons.NextPrevComponent.new(this[_compView_5]);
      this[_compView_5].create0(this[_NextPrevComponent_5_5]);
      this[_el_1][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_click_1_1)));
      this[_el_1][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_1_5].instance, 'handleKeyPress')));
      this[_el_1][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'keydown')));
      this[_el_1][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'resetOutline')));
      this[_el_1][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'onMouseInteraction')));
      this[_el_1][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_6], 'onFocus')));
      let subscription_0 = this[_ButtonDirective_1_5].instance.trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'onMonthSelectorDropdownClicked')));
      this.init(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ButtonDirectiveL()) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_ButtonDirective_1_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_4_5].icon = "arrow_drop_down";
        changed = true;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      changed = false;
      let currVal_2 = _ctx.nextPrevModel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_NextPrevComponent_5_5].model = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      this[_ButtonDirective_1_5].detectHostChanges(this, this[_el_1]);
      this[_textBinding_3].updateText(interpolate.interpolateString0(_ctx.visibleMonthName));
      let currVal_0 = _ctx.showMonthSelector;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_4], "flipped", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_4].detectChanges();
      this[_compView_5].detectChanges();
    }
    destroyInternal() {
      this[_compView_4].destroyInternalState();
      this[_compView_5].destroyInternalState();
      this[_NextPrevComponent_5_5].ngOnDestroy();
    }
    [_handle_click_1_1]($36event) {
      this[_ButtonDirective_1_5].instance.handleClick(MouseEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_1_6].onMouseInteraction();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent16.new = function(parentView, parentIndex) {
    this[_textBinding_3] = new text_binding.TextBinding.new();
    this[_ButtonDirective_1_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_1_6] = null;
    this[_compView_4] = null;
    this[_MaterialIconComponent_4_5] = null;
    this[_compView_5] = null;
    this[_NextPrevComponent_5_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_el_1] = null;
    this[_el_4] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent16.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent16.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent16);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent16);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent16, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent16.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_click_1_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent16, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent16, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent16.__proto__),
    [_textBinding_3]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_ButtonDirective_1_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_KeyboardOnlyFocusIndicatorDirective_1_6]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
    [_compView_4]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_4_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_compView_5]: dart.fieldType(dart.legacy(next_prev_buttons$46template.ViewNextPrevComponent0)),
    [_NextPrevComponent_5_5]: dart.fieldType(dart.legacy(next_prev_buttons.NextPrevComponent)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_4]: dart.fieldType(dart.legacy(html.Element))
  }));
  date_range_editor$46template._ViewDateRangeEditorComponent17 = class _ViewDateRangeEditorComponent17 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "calendar-placeholder");
      this.addShimC(HtmlElementL().as(_el_0));
      this.init1(_el_0);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent17.new = function(parentView, parentIndex) {
    date_range_editor$46template._ViewDateRangeEditorComponent17.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent17.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent17);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent17);
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent17, L0);
  var _ShowHideDirective_0_6 = dart.privateName(date_range_editor$46template, "_ShowHideDirective_0_6");
  var C27;
  var _handle_stateChange_0_1 = dart.privateName(date_range_editor$46template, "_handle_stateChange_0_1");
  date_range_editor$46template._ViewDateRangeEditorComponent18 = class _ViewDateRangeEditorComponent18 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "picker calendar");
      dom_helpers.setAttribute(this[_el_0], "mode", "date-range");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_MaterialCalendarPickerComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialCalendarPickerComponentL(), dart.wrapType(MaterialCalendarPickerComponentL()), dart.fn(() => new material_calendar_picker.MaterialCalendarPickerComponent.new(ClockL().as(this.parentView.parentView.injectorGetOptional(C27 || CT.C27, this.parentView.viewData.parentIndex)), ClockL().as(this.parentView.parentView.injectorGet(dart.wrapType(ClockL()), this.parentView.viewData.parentIndex)), "date-range"), VoidToMaterialCalendarPickerComponentL())) : new material_calendar_picker.MaterialCalendarPickerComponent.new(ClockL().as(this.parentView.parentView.injectorGetOptional(C27 || CT.C27, this.parentView.viewData.parentIndex)), ClockL().as(this.parentView.parentView.injectorGet(dart.wrapType(ClockL()), this.parentView.viewData.parentIndex)), "date-range");
      this[_ShowHideDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ShowHideDirectiveL(), dart.wrapType(ShowHideDirectiveL()), dart.fn(() => new showhide.ShowHideDirective.new(this[_el_0], DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex))), VoidToShowHideDirectiveL())) : new showhide.ShowHideDirective.new(this[_el_0], DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex)));
      this[_compView_0].create0(this[_MaterialCalendarPickerComponent_0_5]);
      let subscription_0 = this[_MaterialCalendarPickerComponent_0_5].stateChange.listen(this.eventHandler1(CalendarStateL(), CalendarStateL(), dart.bind(this, _handle_stateChange_0_1)));
      let subscription_1 = this[_MaterialCalendarPickerComponent_0_5].visibleMonth.listen(this.eventHandler1(DateL(), DateL(), dart.bind(_ctx, 'onVisibleMonthChange')));
      this.init(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_1 = _ctx.model.calendar.value;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialCalendarPickerComponent_0_5].state = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.allowHighlightUpdates;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialCalendarPickerComponent_0_5].allowHighlightUpdates = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.minDate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialCalendarPickerComponent_0_5].minDate = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.maxDate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialCalendarPickerComponent_0_5].maxDate = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.compact;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialCalendarPickerComponent_0_5].compact = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.movingStartMaintainsLength;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialCalendarPickerComponent_0_5].movingStartMaintainsLength = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (changed) {
        this[_MaterialCalendarPickerComponent_0_5].ngAfterChanges();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialCalendarPickerComponent_0_5].ngOnInit();
      }
      let currVal_7 = !dart.test(_ctx.showMonthSelector);
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_ShowHideDirective_0_6].visible = currVal_7;
        this[_expr_7] = currVal_7;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ShowHideDirective_0_6].ngOnInit();
      }
      let currVal_0 = _ctx.popupHandle;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.setProperty(this[_el_0], "popupHandle", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialCalendarPickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewDateRangeEditorComponent0L(), this.parentView.parentView)[_query_MaterialCalendarPickerComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialCalendarPickerComponent_0_5].ngOnDestroy();
      this[_ShowHideDirective_0_6].ngOnDestroy();
    }
    [_handle_stateChange_0_1]($36event) {
      let _ctx = this.ctx;
      _ctx.model.calendar.value = CalendarStateL().as($36event);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent18.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialCalendarPickerComponent_0_5] = null;
    this[_ShowHideDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_el_0] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent18.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent18);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent18);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent18, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__),
    [_handle_stateChange_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent18, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent18, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent18.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0)),
    [_MaterialCalendarPickerComponent_0_5]: dart.fieldType(dart.legacy(material_calendar_picker.MaterialCalendarPickerComponent)),
    [_ShowHideDirective_0_6]: dart.fieldType(dart.legacy(showhide.ShowHideDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_6]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_7]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _handle_stateChange_0_0 = dart.privateName(date_range_editor$46template, "_handle_stateChange_0_0");
  date_range_editor$46template._ViewDateRangeEditorComponent19 = class _ViewDateRangeEditorComponent19 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      this[_compView_0] = new material_month_picker$46template.ViewMaterialMonthPickerComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(_el_0, "picker month-selector");
      dom_helpers.setAttribute(_el_0, "mode", "single-date");
      this.addShimC(_el_0);
      this[_MaterialMonthPickerComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialMonthPickerComponentL(), dart.wrapType(MaterialMonthPickerComponentL()), dart.fn(() => new material_month_picker.MaterialMonthPickerComponent.new(ClockL().as(this.parentView.parentView.injectorGetOptional(C27 || CT.C27, this.parentView.viewData.parentIndex)), "single-date"), VoidToMaterialMonthPickerComponentL())) : new material_month_picker.MaterialMonthPickerComponent.new(ClockL().as(this.parentView.parentView.injectorGetOptional(C27 || CT.C27, this.parentView.viewData.parentIndex)), "single-date");
      this[_ShowHideDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ShowHideDirectiveL(), dart.wrapType(ShowHideDirectiveL()), dart.fn(() => new showhide.ShowHideDirective.new(_el_0, DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex))), VoidToShowHideDirectiveL())) : new showhide.ShowHideDirective.new(_el_0, DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex)));
      this[_compView_0].create0(this[_MaterialMonthPickerComponent_0_5]);
      let subscription_0 = this[_MaterialMonthPickerComponent_0_5].stateChange.listen(this.eventHandler1(CalendarStateL(), CalendarStateL(), dart.bind(this, _handle_stateChange_0_0)));
      this.init(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_0 = _ctx.monthSelectorState;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialMonthPickerComponent_0_5].state = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.minDate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialMonthPickerComponent_0_5].minDate = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.maxDate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialMonthPickerComponent_0_5].maxDate = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (changed) {
        this[_MaterialMonthPickerComponent_0_5].ngAfterChanges();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialMonthPickerComponent_0_5].ngOnInit();
      }
      let currVal_3 = _ctx.showMonthSelector;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_ShowHideDirective_0_6].visible = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ShowHideDirective_0_6].ngOnInit();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialMonthPickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewDateRangeEditorComponent0L(), this.parentView.parentView)[_query_MaterialMonthPickerComponent_1_1_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialMonthPickerComponent_0_5].ngOnDestroy();
      this[_ShowHideDirective_0_6].ngOnDestroy();
    }
    [_handle_stateChange_0_0]($36event) {
      let _ctx = this.ctx;
      _ctx.monthSelectorState = CalendarStateL().as($36event);
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponent19.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialMonthPickerComponent_0_5] = null;
    this[_ShowHideDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    date_range_editor$46template._ViewDateRangeEditorComponent19.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponent19.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponent19);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponent19);
  dart.setMethodSignature(date_range_editor$46template._ViewDateRangeEditorComponent19, () => ({
    __proto__: dart.getMethods(date_range_editor$46template._ViewDateRangeEditorComponent19.__proto__),
    [_handle_stateChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponent19, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponent19, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponent19.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_month_picker$46template.ViewMaterialMonthPickerComponent0)),
    [_MaterialMonthPickerComponent_0_5]: dart.fieldType(dart.legacy(material_month_picker.MaterialMonthPickerComponent)),
    [_ShowHideDirective_0_6]: dart.fieldType(dart.legacy(showhide.ShowHideDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool))
  }));
  var _DateRangeEditorComponent_0_5 = dart.privateName(date_range_editor$46template, "_DateRangeEditorComponent_0_5");
  date_range_editor$46template._ViewDateRangeEditorComponentHost0 = class _ViewDateRangeEditorComponentHost0 extends app_view.AppView$(dart.legacy(date_range_editor.DateRangeEditorComponent)) {
    build() {
      this[_compView_0] = new date_range_editor$46template.ViewDateRangeEditorComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DateRangeEditorComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DateRangeEditorComponentL(), dart.wrapType(DateRangeEditorComponentL()), dart.fn(() => new date_range_editor.DateRangeEditorComponent.new(this.rootEl, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ManagedZoneL().as(this.injectorGet(dart.wrapType(ManagedZoneL()), this.viewData.parentIndex)), DateRangeEditorHostL().as(this.injectorGetOptional(dart.wrapType(DateRangeEditorHostL()), this.viewData.parentIndex)), ClockL().as(this.injectorGetOptional(C27 || CT.C27, this.viewData.parentIndex)), ClockL().as(this.injectorGet(dart.wrapType(ClockL()), this.viewData.parentIndex))), VoidToDateRangeEditorComponentL())) : new date_range_editor.DateRangeEditorComponent.new(this.rootEl, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ManagedZoneL().as(this.injectorGet(dart.wrapType(ManagedZoneL()), this.viewData.parentIndex)), DateRangeEditorHostL().as(this.injectorGetOptional(dart.wrapType(DateRangeEditorHostL()), this.viewData.parentIndex)), ClockL().as(this.injectorGetOptional(C27 || CT.C27, this.viewData.parentIndex)), ClockL().as(this.injectorGet(dart.wrapType(ClockL()), this.viewData.parentIndex)));
      this[_compView_0].create(this[_DateRangeEditorComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfDateRangeEditorComponentL()).new(0, this, this.rootEl, this[_DateRangeEditorComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DateRangeEditorComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_DateRangeEditorComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (date_range_editor$46template._ViewDateRangeEditorComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DateRangeEditorComponent_0_5] = null;
    date_range_editor$46template._ViewDateRangeEditorComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = date_range_editor$46template._ViewDateRangeEditorComponentHost0.prototype;
  dart.addTypeTests(date_range_editor$46template._ViewDateRangeEditorComponentHost0);
  dart.addTypeCaches(date_range_editor$46template._ViewDateRangeEditorComponentHost0);
  dart.setLibraryUri(date_range_editor$46template._ViewDateRangeEditorComponentHost0, L0);
  dart.setFieldSignature(date_range_editor$46template._ViewDateRangeEditorComponentHost0, () => ({
    __proto__: dart.getFields(date_range_editor$46template._ViewDateRangeEditorComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(date_range_editor$46template.ViewDateRangeEditorComponent0)),
    [_DateRangeEditorComponent_0_5]: dart.fieldType(dart.legacy(date_range_editor.DateRangeEditorComponent))
  }));
  date_range_editor$46template.viewFactory_DateRangeEditorComponent1 = function viewFactory_DateRangeEditorComponent1(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent1.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent2 = function viewFactory_DateRangeEditorComponent2(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent2.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent3 = function viewFactory_DateRangeEditorComponent3(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent3.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent4 = function viewFactory_DateRangeEditorComponent4(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent4.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent5 = function viewFactory_DateRangeEditorComponent5(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent5.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent6 = function viewFactory_DateRangeEditorComponent6(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent6.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent7 = function viewFactory_DateRangeEditorComponent7(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent7.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent8 = function viewFactory_DateRangeEditorComponent8(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent8.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent9 = function viewFactory_DateRangeEditorComponent9(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent9.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent10 = function viewFactory_DateRangeEditorComponent10(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent10.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent11 = function viewFactory_DateRangeEditorComponent11(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent11.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent12 = function viewFactory_DateRangeEditorComponent12(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent12.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent13 = function viewFactory_DateRangeEditorComponent13(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent13.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent14 = function viewFactory_DateRangeEditorComponent14(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent14.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent15 = function viewFactory_DateRangeEditorComponent15(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent15.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent16 = function viewFactory_DateRangeEditorComponent16(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent16.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent17 = function viewFactory_DateRangeEditorComponent17(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent17.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent18 = function viewFactory_DateRangeEditorComponent18(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent18.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponent19 = function viewFactory_DateRangeEditorComponent19(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponent19.new(parentView, parentIndex);
  };
  date_range_editor$46template.viewFactory_DateRangeEditorComponentHost0 = function viewFactory_DateRangeEditorComponentHost0(parentView, parentIndex) {
    return new date_range_editor$46template._ViewDateRangeEditorComponentHost0.new(parentView, parentIndex);
  };
  date_range_editor$46template.initReflector = function initReflector() {
    if (dart.test(date_range_editor$46template._visited)) {
      return;
    }
    date_range_editor$46template._visited = true;
    reflector.registerComponent(dart.wrapType(DateRangeEditorComponentL()), date_range_editor$46template.DateRangeEditorComponentNgFactory);
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    focus$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    popup$46template.initReflector();
    material_button$46template.initReflector();
    calendar$46template.initReflector();
    date_range_editor_host$46template.initReflector();
    date_range_input$46template.initReflector();
    material_calendar_picker$46template.initReflector();
    material_month_picker$46template.initReflector();
    module$46template.initReflector();
    next_prev_buttons$46template.initReflector();
    preset$46template.initReflector();
    range$46template.initReflector();
    material_icon$46template.initReflector();
    material_input$46template.initReflector();
    material_popup$46template.initReflector();
    material_ripple$46template.initReflector();
    material_select$46template.initReflector();
    material_select_item$46template.initReflector();
    material_tooltip$46template.initReflector();
    date$46template.initReflector();
    date_formatter$46template.initReflector();
    observable$46template.initReflector();
    comparison_range_editor$46template.initReflector();
    date_range_editor_model$46template.initReflector();
    date_range_editor_model$46template.initReflector();
    interface$46template.initReflector();
    angular_2$46template.initReflector();
    dom_service$46template.initReflector();
    showhide$46template.initReflector();
  };
  dart.copyProperties(date_range_editor$46template, {
    get DateRangeEditorComponentNgFactory() {
      return date_range_editor$46template._DateRangeEditorComponentNgFactory;
    }
  });
  var C29;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C28;
  dart.defineLazy(date_range_editor$46template, {
    /*date_range_editor$46template.styles$DateRangeEditorComponent*/get styles$DateRangeEditorComponent() {
      return [date_range_editor$46scss$46css$46shim.styles];
    },
    /*date_range_editor$46template._DateRangeEditorComponentNgFactory*/get _DateRangeEditorComponentNgFactory() {
      return C28 || CT.C28;
    },
    /*date_range_editor$46template.styles$DateRangeEditorComponentHost*/get styles$DateRangeEditorComponentHost() {
      return C17 || CT.C17;
    },
    /*date_range_editor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/date_range_editor.template", {
    "package:angular_components/material_datepicker/date_range_editor.template.dart": date_range_editor$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_range_editor.template.dart"],"names":[],"mappings":"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","file":"date_range_editor.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__date_range_editor$46template: date_range_editor$46template
  };
}));

//# sourceMappingURL=date_range_editor.template.ddc.js.map
