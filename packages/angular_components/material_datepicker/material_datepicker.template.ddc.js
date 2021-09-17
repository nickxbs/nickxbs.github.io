define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/content/deferred_content', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/src/runtime/queries', 'packages/angular_components/focus/focus', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_datepicker/material_datepicker', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/material_datepicker/date_input', 'packages/quiver/src/time/clock', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_datepicker/material_calendar_picker.template', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/calendar', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_datepicker/range', 'packages/angular/angular.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/date_input.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/material_datepicker/material_datepicker.scss.css.shim'], (function load__packages__angular_components__material_datepicker__material_datepicker_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular_components__material_popup__material_popup, packages__angular__src__core__change_detection__change_detection, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__material_select__dropdown_button$46template, packages__angular_components__material_select__dropdown_button, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__focus__focus_trap$46template, packages__angular_components__focus__focus_trap, packages__angular_components__content__deferred_content, packages__angular_components__interfaces__has_disabled, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular__src__runtime__queries, packages__angular_components__focus__focus, packages__angular_components__material_input__material_input, packages__angular_components__material_datepicker__material_datepicker, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__angular_components__material_input__material_input$46template, packages__angular_components__material_input__deferred_validator, packages__angular_components__laminate__components__modal__modal, packages__angular_components__material_datepicker__date_input, packages__quiver__src__time__clock, packages__angular_components__material_input__material_input_default_value_accessor, packages__angular_components__material_datepicker__material_calendar_picker$46template, packages__angular_components__material_datepicker__material_calendar_picker, packages__angular_components__model__date__date, packages__angular_components__material_datepicker__calendar, packages__angular_components__material_input__base_material_input, packages__angular_components__material_select__material_select_item$46template, packages__angular_components__material_select__material_select_item, packages__angular_components__material_select__activation_handler, packages__angular_components__model__selection__selection_container, packages__angular_components__model__ui__has_renderer, packages__angular_components__material_datepicker__range, packages__angular__angular$46template, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__focus__focus$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_datepicker__calendar$46template, packages__angular_components__material_datepicker__date_input$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__material_datepicker__range$46template, packages__angular_components__material_list__material_list_item$46template, packages__angular_components__mixins__focusable_mixin$46template, packages__angular_components__model__date__date$46template, packages__angular_components__utils__angular__css__css$46template, packages__angular_components__material_datepicker__material_datepicker$46scss$46css$46shim) {
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
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const ng_class = packages__angular__src__bootstrap__modules.src__common__directives__ng_class;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const dropdown_button$46template = packages__angular_components__material_select__dropdown_button$46template.material_select__dropdown_button$46template;
  const dropdown_button = packages__angular_components__material_select__dropdown_button.material_select__dropdown_button;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const focus_trap$46template = packages__angular_components__focus__focus_trap$46template.focus__focus_trap$46template;
  const focus_trap = packages__angular_components__focus__focus_trap.focus__focus_trap;
  const deferred_content = packages__angular_components__content__deferred_content.content__deferred_content;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const queries = packages__angular__src__runtime__queries.src__runtime__queries;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const material_datepicker = packages__angular_components__material_datepicker__material_datepicker.material_datepicker__material_datepicker;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_input$46template = packages__angular_components__material_input__material_input$46template.material_input__material_input$46template;
  const deferred_validator = packages__angular_components__material_input__deferred_validator.material_input__deferred_validator;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const date_input = packages__angular_components__material_datepicker__date_input.material_datepicker__date_input;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const material_input_default_value_accessor = packages__angular_components__material_input__material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_calendar_picker$46template = packages__angular_components__material_datepicker__material_calendar_picker$46template.material_datepicker__material_calendar_picker$46template;
  const material_calendar_picker = packages__angular_components__material_datepicker__material_calendar_picker.material_datepicker__material_calendar_picker;
  const date = packages__angular_components__model__date__date.model__date__date;
  const calendar = packages__angular_components__material_datepicker__calendar.material_datepicker__calendar;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  const material_select_item$46template = packages__angular_components__material_select__material_select_item$46template.material_select__material_select_item$46template;
  const material_select_item = packages__angular_components__material_select__material_select_item.material_select__material_select_item;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const range = packages__angular_components__material_datepicker__range.material_datepicker__range;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const calendar$46template = packages__angular_components__material_datepicker__calendar$46template.material_datepicker__calendar$46template;
  const date_input$46template = packages__angular_components__material_datepicker__date_input$46template.material_datepicker__date_input$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const range$46template = packages__angular_components__material_datepicker__range$46template.material_datepicker__range$46template;
  const material_list_item$46template = packages__angular_components__material_list__material_list_item$46template.material_list__material_list_item$46template;
  const focusable_mixin$46template = packages__angular_components__mixins__focusable_mixin$46template.mixins__focusable_mixin$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const css$46template = packages__angular_components__utils__angular__css__css$46template.utils__angular__css__css$46template;
  const material_datepicker$46scss$46css$46shim = packages__angular_components__material_datepicker__material_datepicker$46scss$46css$46shim.material_datepicker__material_datepicker$46scss$46css$46shim;
  var material_datepicker$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $isNotEmpty = dartx.isNotEmpty;
  var $_get = dartx._get;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var PopupSourceDirectiveL = () => (PopupSourceDirectiveL = dart.constFn(dart.legacy(popup_source_directive.PopupSourceDirective)))();
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var VoidToPopupSourceDirectiveL = () => (VoidToPopupSourceDirectiveL = dart.constFn(dart.fnType(PopupSourceDirectiveL(), [])))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var MaterialPopupComponentL = () => (MaterialPopupComponentL = dart.constFn(dart.legacy(material_popup.MaterialPopupComponent)))();
  var PopupHierarchyL = () => (PopupHierarchyL = dart.constFn(dart.legacy(popup_hierarchy.PopupHierarchy)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var OverlayServiceL = () => (OverlayServiceL = dart.constFn(dart.legacy(overlay_service.OverlayService)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var ZIndexerL = () => (ZIndexerL = dart.constFn(dart.legacy(zindexer.ZIndexer)))();
  var RelativePositionL = () => (RelativePositionL = dart.constFn(dart.legacy(alignment.RelativePosition)))();
  var ListOfRelativePositionL = () => (ListOfRelativePositionL = dart.constFn(core.List$(RelativePositionL())))();
  var ListLOfRelativePositionL = () => (ListLOfRelativePositionL = dart.constFn(dart.legacy(ListOfRelativePositionL())))();
  var OpaqueTokenOfListLOfRelativePositionL = () => (OpaqueTokenOfListLOfRelativePositionL = dart.constFn(opaque_token.OpaqueToken$(ListLOfRelativePositionL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var BoxL = () => (BoxL = dart.constFn(dart.legacy(box.Box)))();
  var PopupSizeProviderL = () => (PopupSizeProviderL = dart.constFn(dart.legacy(popup_size_provider.PopupSizeProvider)))();
  var VoidToMaterialPopupComponentL = () => (VoidToMaterialPopupComponentL = dart.constFn(dart.fnType(MaterialPopupComponentL(), [])))();
  var ViewContainerL = () => (ViewContainerL = dart.constFn(dart.legacy(view_container.ViewContainer)))();
  var JSArrayOfViewContainerL = () => (JSArrayOfViewContainerL = dart.constFn(_interceptors.JSArray$(ViewContainerL())))();
  var JSArrayOfHtmlElementL = () => (JSArrayOfHtmlElementL = dart.constFn(_interceptors.JSArray$(HtmlElementL())))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var AutoFocusDirectiveL = () => (AutoFocusDirectiveL = dart.constFn(dart.legacy(focus.AutoFocusDirective)))();
  var _ViewMaterialDatepickerComponent2L = () => (_ViewMaterialDatepickerComponent2L = dart.constFn(dart.legacy(material_datepicker$46template._ViewMaterialDatepickerComponent2)))();
  var JSArrayOfAutoFocusDirectiveL = () => (JSArrayOfAutoFocusDirectiveL = dart.constFn(_interceptors.JSArray$(AutoFocusDirectiveL())))();
  var ListOfAutoFocusDirectiveL = () => (ListOfAutoFocusDirectiveL = dart.constFn(core.List$(AutoFocusDirectiveL())))();
  var ListLOfAutoFocusDirectiveL = () => (ListLOfAutoFocusDirectiveL = dart.constFn(dart.legacy(ListOfAutoFocusDirectiveL())))();
  var _ViewMaterialDatepickerComponent2LToListLOfAutoFocusDirectiveL = () => (_ViewMaterialDatepickerComponent2LToListLOfAutoFocusDirectiveL = dart.constFn(dart.fnType(ListLOfAutoFocusDirectiveL(), [_ViewMaterialDatepickerComponent2L()])))();
  var MaterialInputComponentL = () => (MaterialInputComponentL = dart.constFn(dart.legacy(material_input.MaterialInputComponent)))();
  var JSArrayOfMaterialInputComponentL = () => (JSArrayOfMaterialInputComponentL = dart.constFn(_interceptors.JSArray$(MaterialInputComponentL())))();
  var ListOfMaterialInputComponentL = () => (ListOfMaterialInputComponentL = dart.constFn(core.List$(MaterialInputComponentL())))();
  var ListLOfMaterialInputComponentL = () => (ListLOfMaterialInputComponentL = dart.constFn(dart.legacy(ListOfMaterialInputComponentL())))();
  var _ViewMaterialDatepickerComponent2LToListLOfMaterialInputComponentL = () => (_ViewMaterialDatepickerComponent2LToListLOfMaterialInputComponentL = dart.constFn(dart.fnType(ListLOfMaterialInputComponentL(), [_ViewMaterialDatepickerComponent2L()])))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var ModalComponentL = () => (ModalComponentL = dart.constFn(dart.legacy(modal.ModalComponent)))();
  var ViewMaterialDatepickerComponent0L = () => (ViewMaterialDatepickerComponent0L = dart.constFn(dart.legacy(material_datepicker$46template.ViewMaterialDatepickerComponent0)))();
  var VoidToAutoFocusDirectiveL = () => (VoidToAutoFocusDirectiveL = dart.constFn(dart.fnType(AutoFocusDirectiveL(), [])))();
  var DateInputDirectiveL = () => (DateInputDirectiveL = dart.constFn(dart.legacy(date_input.DateInputDirective)))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var VoidToDateInputDirectiveL = () => (VoidToDateInputDirectiveL = dart.constFn(dart.fnType(DateInputDirectiveL(), [])))();
  var MaterialCalendarPickerComponentL = () => (MaterialCalendarPickerComponentL = dart.constFn(dart.legacy(material_calendar_picker.MaterialCalendarPickerComponent)))();
  var VoidToMaterialCalendarPickerComponentL = () => (VoidToMaterialCalendarPickerComponentL = dart.constFn(dart.fnType(MaterialCalendarPickerComponentL(), [])))();
  var DateL = () => (DateL = dart.constFn(dart.legacy(date.Date)))();
  var CalendarStateL = () => (CalendarStateL = dart.constFn(dart.legacy(calendar.CalendarState)))();
  var DeferredValidatorL = () => (DeferredValidatorL = dart.constFn(dart.legacy(deferred_validator.DeferredValidator)))();
  var BaseMaterialInputL = () => (BaseMaterialInputL = dart.constFn(dart.legacy(base_material_input.BaseMaterialInput)))();
  var MaterialSelectItemComponentL = () => (MaterialSelectItemComponentL = dart.constFn(dart.legacy(material_select_item.MaterialSelectItemComponent)))();
  var ActivationHandlerL = () => (ActivationHandlerL = dart.constFn(dart.legacy(activation_handler.ActivationHandler)))();
  var VoidToMaterialSelectItemComponentL = () => (VoidToMaterialSelectItemComponentL = dart.constFn(dart.fnType(MaterialSelectItemComponentL(), [])))();
  var TextL = () => (TextL = dart.constFn(dart.legacy(html.Text)))();
  var JSArrayOfTextL = () => (JSArrayOfTextL = dart.constFn(_interceptors.JSArray$(TextL())))();
  var SelectionItemL = () => (SelectionItemL = dart.constFn(dart.legacy(selection_container.SelectionItem)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var SingleDayRangeL = () => (SingleDayRangeL = dart.constFn(dart.legacy(range.SingleDayRange)))();
  var MaterialDatepickerComponentL = () => (MaterialDatepickerComponentL = dart.constFn(dart.legacy(material_datepicker.MaterialDatepickerComponent)))();
  var VoidToMaterialDatepickerComponentL = () => (VoidToMaterialDatepickerComponentL = dart.constFn(dart.fnType(MaterialDatepickerComponentL(), [])))();
  var ComponentRefOfMaterialDatepickerComponentL = () => (ComponentRefOfMaterialDatepickerComponentL = dart.constFn(component_factory.ComponentRef$(MaterialDatepickerComponentL())))();
  var ComponentFactoryOfMaterialDatepickerComponentL = () => (ComponentFactoryOfMaterialDatepickerComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialDatepickerComponentL())))();
  var AppViewOfMaterialDatepickerComponentL = () => (AppViewOfMaterialDatepickerComponentL = dart.constFn(app_view.AppView$(MaterialDatepickerComponentL())))();
  var AppViewLOfMaterialDatepickerComponentL = () => (AppViewLOfMaterialDatepickerComponentL = dart.constFn(dart.legacy(AppViewOfMaterialDatepickerComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialDatepickerComponentL = () => (AppViewLAndintLToAppViewLOfMaterialDatepickerComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialDatepickerComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/material_datepicker.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_datepicker$46template.viewFactory_MaterialDatepickerComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C1() {
      return C1 = dart.constList([], dart.dynamic);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: OpaqueTokenOfListLOfRelativePositionL().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C5() {
      return C5 = dart.fn(material_datepicker$46template.viewFactory_MaterialDatepickerComponent2, AppViewLAndintLToAppViewLOfvoid());
    },
    get C6() {
      return C6 = dart.constList([], ObjectL());
    },
    get C7() {
      return C7 = dart.fn(material_datepicker$46template.viewFactory_MaterialDatepickerComponent3, AppViewLAndintLToAppViewLOfvoid());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C9() {
      return C9 = dart.fn(material_datepicker$46template.viewFactory_MaterialDatepickerComponent4, AppViewLAndintLToAppViewLOfvoid());
    },
    get C10() {
      return C10 = dart.const({
        __proto__: opaque_token.MultiToken.prototype,
        [OpaqueToken__uniqueName]: "NgValidators"
      });
    },
    get C11() {
      return C11 = dart.fn(material_datepicker$46template.viewFactory_MaterialDatepickerComponent5, AppViewLAndintLToAppViewLOfvoid());
    },
    get C13() {
      return C13 = dart.fn(material_datepicker$46template.viewFactory_MaterialDatepickerComponentHost0, AppViewLAndintLToAppViewLOfMaterialDatepickerComponentL());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ComponentFactoryOfMaterialDatepickerComponentL().prototype,
        [ComponentFactory__viewFactory]: C13 || CT.C13,
        [ComponentFactory_selector]: "material-datepicker"
      });
    }
  }, false);
  var _query_MaterialInputComponent_1_1_isDirty = dart.privateName(material_datepicker$46template, "_query_MaterialInputComponent_1_1_isDirty");
  var _query_AutoFocusDirective_4_0_isDirty = dart.privateName(material_datepicker$46template, "_query_AutoFocusDirective_4_0_isDirty");
  var _PopupSourceDirective_0_5 = dart.privateName(material_datepicker$46template, "_PopupSourceDirective_0_5");
  var _appEl_1 = dart.privateName(material_datepicker$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(material_datepicker$46template, "_NgIf_1_9");
  var _compView_2 = dart.privateName(material_datepicker$46template, "_compView_2");
  var _DropdownButtonComponent_2_5 = dart.privateName(material_datepicker$46template, "_DropdownButtonComponent_2_5");
  var _compView_3 = dart.privateName(material_datepicker$46template, "_compView_3");
  var _appEl_3 = dart.privateName(material_datepicker$46template, "_appEl_3");
  var _MaterialPopupComponent_3_8 = dart.privateName(material_datepicker$46template, "_MaterialPopupComponent_3_8");
  var __PopupRef_3_10 = dart.privateName(material_datepicker$46template, "__PopupRef_3_10");
  var __PopupHierarchy_3_12 = dart.privateName(material_datepicker$46template, "__PopupHierarchy_3_12");
  var _compView_4 = dart.privateName(material_datepicker$46template, "_compView_4");
  var _FocusTrapComponent_4_5 = dart.privateName(material_datepicker$46template, "_FocusTrapComponent_4_5");
  var _appEl_5 = dart.privateName(material_datepicker$46template, "_appEl_5");
  var _DeferredContentDirective_5_9 = dart.privateName(material_datepicker$46template, "_DeferredContentDirective_5_9");
  var _expr_1 = dart.privateName(material_datepicker$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_datepicker$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_datepicker$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_datepicker$46template, "_expr_4");
  var _expr_7 = dart.privateName(material_datepicker$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_datepicker$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_datepicker$46template, "_expr_9");
  var _expr_11 = dart.privateName(material_datepicker$46template, "_expr_11");
  var _el_2 = dart.privateName(material_datepicker$46template, "_el_2");
  var _el_3 = dart.privateName(material_datepicker$46template, "_el_3");
  var _PopupRef_3_10 = dart.privateName(material_datepicker$46template, "_PopupRef_3_10");
  var _PopupHierarchy_3_12 = dart.privateName(material_datepicker$46template, "_PopupHierarchy_3_12");
  var C0;
  var C1;
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C2;
  var C3;
  var C4;
  var C5;
  var _handle_visibleChange_3_0 = dart.privateName(material_datepicker$46template, "_handle_visibleChange_3_0");
  var C6;
  var _AutoFocusDirective_4_8 = dart.privateName(material_datepicker$46template, "_AutoFocusDirective_4_8");
  var _MaterialInputComponent_4_6 = dart.privateName(material_datepicker$46template, "_MaterialInputComponent_4_6");
  material_datepicker$46template.ViewMaterialDatepickerComponent0 = class ViewMaterialDatepickerComponent0 extends app_view.AppView$(dart.legacy(material_datepicker.MaterialDatepickerComponent)) {
    get [_PopupRef_3_10]() {
      if (this[__PopupRef_3_10] == null) {
        this[__PopupRef_3_10] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_3_8]);
      }
      return this[__PopupRef_3_10];
    }
    get [_PopupHierarchy_3_12]() {
      if (this[__PopupHierarchy_3_12] == null) {
        this[__PopupHierarchy_3_12] = material_popup.getHierarchy(this[_MaterialPopupComponent_3_8]);
      }
      return this[__PopupHierarchy_3_12];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_datepicker.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "main-content");
      dom_helpers.setAttribute(_el_0, "popupSource", "");
      this.addShimC(_el_0);
      this[_PopupSourceDirective_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), _el_0, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.viewData.parentIndex)), null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), _el_0, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.viewData.parentIndex)), null);
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this[_compView_2] = new dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      _el_0[$append](this[_el_2]);
      this.updateChildClassNonHtml(this[_el_2], "menu-lookalike primary-range");
      this.addShimC(HtmlElementL().as(this[_el_2]));
      this[_DropdownButtonComponent_2_5] = new dropdown_button.DropdownButtonComponent.new();
      this[_compView_2].create(this[_DropdownButtonComponent_2_5], JSArrayOfObjectL().of([C1 || CT.C1]));
      this[_compView_3] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      parentRenderNode[$append](this[_el_3]);
      dom_helpers.setAttribute(this[_el_3], "enforceSpaceConstraints", "");
      this.addShimC(HtmlElementL().as(this[_el_3]));
      this[_appEl_3] = new view_container.ViewContainer.new(3, null, this, this[_el_3]);
      this[_MaterialPopupComponent_3_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C2 || CT.C2, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C3 || CT.C3, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C4 || CT.C4, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_3], this[_appEl_3], new element_ref.ElementRef.new(this[_el_3])), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C2 || CT.C2, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C3 || CT.C3, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C4 || CT.C4, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_3], this[_appEl_3], new element_ref.ElementRef.new(this[_el_3]));
      this[_compView_4] = new focus_trap$46template.ViewFocusTrapComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootEl;
      this.addShimC(_el_4);
      this[_FocusTrapComponent_4_5] = new focus_trap.FocusTrapComponent.new();
      let _anchor_5 = dom_helpers.createAnchor();
      this[_appEl_5] = new view_container.ViewContainer.new(5, 4, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C5 || CT.C5);
      this[_DeferredContentDirective_5_9] = new deferred_content.DeferredContentDirective.new(this[_appEl_5], _TemplateRef_5_8, this[_MaterialPopupComponent_3_8]);
      this[_compView_4].create(this[_FocusTrapComponent_4_5], JSArrayOfObjectL().of([JSArrayOfViewContainerL().of([this[_appEl_5]])]));
      this[_compView_3].create(this[_MaterialPopupComponent_3_8], JSArrayOfObjectL().of([C1 || CT.C1, JSArrayOfHtmlElementL().of([_el_4]), C1 || CT.C1]));
      let subscription_0 = this[_DropdownButtonComponent_2_5].trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'onTrigger')));
      let subscription_1 = this[_MaterialPopupComponent_3_8].onVisible.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handle_visibleChange_3_0)));
      _ctx.dropdownButton = this[_DropdownButtonComponent_2_5];
      this.init(C6 || CT.C6, JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(FocusableL())) && 2 === nodeIndex) {
        return this[_DropdownButtonComponent_2_5];
      }
      if (3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(DropdownHandleL())) {
          return this[_MaterialPopupComponent_3_8];
        }
        if (token === dart.wrapType(PopupRefL())) {
          return this[_PopupRef_3_10];
        }
        if (token === dart.wrapType(PopupHierarchyL())) {
          return this[_PopupHierarchy_3_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_container = this[_PopupSourceDirective_0_5];
      this[_NgIf_1_9].ngIf = _ctx.presetDates[$isNotEmpty];
      changed = false;
      let currVal_2 = _ctx.formattedDate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DropdownButtonComponent_2_5].buttonText = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_DropdownButtonComponent_2_5].disabled = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.error;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_DropdownButtonComponent_2_5].error = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DropdownButtonComponent_2_5].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialPopupComponent_3_8].enforceSpaceConstraints = true;
        changed = true;
      }
      let currVal_7 = _ctx.preferredPositions;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_MaterialPopupComponent_3_8].preferredPositions = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = local_container;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MaterialPopupComponent_3_8].source = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.popupVisible;
      if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_MaterialPopupComponent_3_8].visible = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_DeferredContentDirective_5_9].preserveDimensions = true;
      }
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_AutoFocusDirective_4_0_isDirty])) {
          this[_FocusTrapComponent_4_5].autoFocus = queries.firstOrNull(AutoFocusDirectiveL(), this[_appEl_5].mapNestedViews(AutoFocusDirectiveL(), _ViewMaterialDatepickerComponent2L(), dart.fn(nestedView => JSArrayOfAutoFocusDirectiveL().of([nestedView[_AutoFocusDirective_4_8]]), _ViewMaterialDatepickerComponent2LToListLOfAutoFocusDirectiveL())));
          this[_query_AutoFocusDirective_4_0_isDirty] = false;
        }
        if (dart.test(this[_query_MaterialInputComponent_1_1_isDirty])) {
          _ctx.textInput = queries.firstOrNull(MaterialInputComponentL(), this[_appEl_5].mapNestedViews(MaterialInputComponentL(), _ViewMaterialDatepickerComponent2L(), dart.fn(nestedView => JSArrayOfMaterialInputComponentL().of([nestedView[_MaterialInputComponent_4_6]]), _ViewMaterialDatepickerComponent2LToListLOfMaterialInputComponentL())));
          this[_query_MaterialInputComponent_1_1_isDirty] = false;
        }
      }
      let currVal_1 = _ctx.ariaLabelForDropdownButton;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_2], "aria-label", currVal_1);
        this[_expr_1] = currVal_1;
      }
      if (firstCheck) {
        if (_ctx.popupClassName != null) {
          this[_compView_3].updateChildClassNonHtml(this[_el_3], _ctx.popupClassName);
        }
      }
      this[_compView_3].detectHostChanges(firstCheck);
      this[_compView_2].detectChanges();
      this[_compView_3].detectChanges();
      this[_compView_4].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_PopupSourceDirective_0_5].ngAfterViewInit();
          this[_MaterialPopupComponent_3_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_compView_2].destroyInternalState();
      this[_compView_3].destroyInternalState();
      this[_compView_4].destroyInternalState();
      this[_PopupSourceDirective_0_5].ngOnDestroy();
      this[_DeferredContentDirective_5_9].ngOnDestroy();
      this[_FocusTrapComponent_4_5].ngOnDestroy();
      this[_MaterialPopupComponent_3_8].ngOnDestroy();
    }
    [_handle_visibleChange_3_0]($36event) {
      let _ctx = this.ctx;
      _ctx.popupVisible = boolL().as($36event);
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_11 = _ctx.compact;
      if (dart.test(app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "compact", currVal_11);
        this[_expr_11] = currVal_11;
      }
    }
    initComponentStyles() {
      let styles = material_datepicker$46template.ViewMaterialDatepickerComponent0._componentStyles;
      if (styles == null) {
        material_datepicker$46template.ViewMaterialDatepickerComponent0._componentStyles = styles = material_datepicker$46template.ViewMaterialDatepickerComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_datepicker$46template.styles$MaterialDatepickerComponent, material_datepicker$46template.ViewMaterialDatepickerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_datepicker$46template.ViewMaterialDatepickerComponent0.new = function(parentView, parentIndex) {
    this[_query_MaterialInputComponent_1_1_isDirty] = true;
    this[_query_AutoFocusDirective_4_0_isDirty] = true;
    this[_PopupSourceDirective_0_5] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_compView_2] = null;
    this[_DropdownButtonComponent_2_5] = null;
    this[_compView_3] = null;
    this[_appEl_3] = null;
    this[_MaterialPopupComponent_3_8] = null;
    this[__PopupRef_3_10] = null;
    this[__PopupHierarchy_3_12] = null;
    this[_compView_4] = null;
    this[_FocusTrapComponent_4_5] = null;
    this[_appEl_5] = null;
    this[_DeferredContentDirective_5_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_11] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    material_datepicker$46template.ViewMaterialDatepickerComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-datepicker"));
  }).prototype = material_datepicker$46template.ViewMaterialDatepickerComponent0.prototype;
  dart.addTypeTests(material_datepicker$46template.ViewMaterialDatepickerComponent0);
  dart.addTypeCaches(material_datepicker$46template.ViewMaterialDatepickerComponent0);
  dart.setMethodSignature(material_datepicker$46template.ViewMaterialDatepickerComponent0, () => ({
    __proto__: dart.getMethods(material_datepicker$46template.ViewMaterialDatepickerComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_visibleChange_3_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker$46template.ViewMaterialDatepickerComponent0, () => ({
    __proto__: dart.getGetters(material_datepicker$46template.ViewMaterialDatepickerComponent0.__proto__),
    [_PopupRef_3_10]: dart.dynamic,
    [_PopupHierarchy_3_12]: dart.dynamic
  }));
  dart.setLibraryUri(material_datepicker$46template.ViewMaterialDatepickerComponent0, L0);
  dart.setFieldSignature(material_datepicker$46template.ViewMaterialDatepickerComponent0, () => ({
    __proto__: dart.getFields(material_datepicker$46template.ViewMaterialDatepickerComponent0.__proto__),
    [_query_MaterialInputComponent_1_1_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_query_AutoFocusDirective_4_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_PopupSourceDirective_0_5]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_2]: dart.fieldType(dart.legacy(dropdown_button$46template.ViewDropdownButtonComponent0)),
    [_DropdownButtonComponent_2_5]: dart.fieldType(dart.legacy(dropdown_button.DropdownButtonComponent)),
    [_compView_3]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialPopupComponent_3_8]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
    [__PopupRef_3_10]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_3_12]: dart.fieldType(dart.dynamic),
    [_compView_4]: dart.fieldType(dart.legacy(focus_trap$46template.ViewFocusTrapComponent0)),
    [_FocusTrapComponent_4_5]: dart.fieldType(dart.legacy(focus_trap.FocusTrapComponent)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_DeferredContentDirective_5_9]: dart.fieldType(dart.legacy(deferred_content.DeferredContentDirective)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.legacy(core.String)),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.legacy(core.String)),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_11]: dart.fieldType(dart.legacy(core.bool)),
    [_el_2]: dart.fieldType(dart.legacy(html.Element)),
    [_el_3]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(material_datepicker$46template.ViewMaterialDatepickerComponent0, {
    /*material_datepicker$46template.ViewMaterialDatepickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_1 = dart.privateName(material_datepicker$46template, "_textBinding_1");
  material_datepicker$46template._ViewMaterialDatepickerComponent1 = class _ViewMaterialDatepickerComponent1 extends app_view.AppView$(dart.legacy(material_datepicker.MaterialDatepickerComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "primary-label");
      this.addShimC(HtmlElementL().as(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.labelMsg));
    }
  };
  (material_datepicker$46template._ViewMaterialDatepickerComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_datepicker$46template._ViewMaterialDatepickerComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_datepicker$46template._ViewMaterialDatepickerComponent1.prototype;
  dart.addTypeTests(material_datepicker$46template._ViewMaterialDatepickerComponent1);
  dart.addTypeCaches(material_datepicker$46template._ViewMaterialDatepickerComponent1);
  dart.setLibraryUri(material_datepicker$46template._ViewMaterialDatepickerComponent1, L0);
  dart.setFieldSignature(material_datepicker$46template._ViewMaterialDatepickerComponent1, () => ({
    __proto__: dart.getFields(material_datepicker$46template._ViewMaterialDatepickerComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _appEl_2 = dart.privateName(material_datepicker$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(material_datepicker$46template, "_NgIf_2_9");
  var _DeferredValidator_4_5 = dart.privateName(material_datepicker$46template, "_DeferredValidator_4_5");
  var _DateInputDirective_4_9 = dart.privateName(material_datepicker$46template, "_DateInputDirective_4_9");
  var _MaterialInputDefaultValueAccessor_4_11 = dart.privateName(material_datepicker$46template, "_MaterialInputDefaultValueAccessor_4_11");
  var __NgValidators_4_12 = dart.privateName(material_datepicker$46template, "__NgValidators_4_12");
  var _NgIf_5_9 = dart.privateName(material_datepicker$46template, "_NgIf_5_9");
  var _compView_6 = dart.privateName(material_datepicker$46template, "_compView_6");
  var _MaterialCalendarPickerComponent_6_5 = dart.privateName(material_datepicker$46template, "_MaterialCalendarPickerComponent_6_5");
  var _NgClass_6_6 = dart.privateName(material_datepicker$46template, "_NgClass_6_6");
  var _expr_0 = dart.privateName(material_datepicker$46template, "_expr_0");
  var _expr_5 = dart.privateName(material_datepicker$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_datepicker$46template, "_expr_6");
  var _expr_10 = dart.privateName(material_datepicker$46template, "_expr_10");
  var _expr_12 = dart.privateName(material_datepicker$46template, "_expr_12");
  var _expr_13 = dart.privateName(material_datepicker$46template, "_expr_13");
  var _expr_15 = dart.privateName(material_datepicker$46template, "_expr_15");
  var _el_0 = dart.privateName(material_datepicker$46template, "_el_0");
  var _NgValidators_4_12 = dart.privateName(material_datepicker$46template, "_NgValidators_4_12");
  var C7;
  var C8;
  var C9;
  var _handle_stateChange_6_0 = dart.privateName(material_datepicker$46template, "_handle_stateChange_6_0");
  var C10;
  material_datepicker$46template._ViewMaterialDatepickerComponent2 = class _ViewMaterialDatepickerComponent2 extends app_view.AppView$(dart.legacy(material_datepicker.MaterialDatepickerComponent)) {
    get [_NgValidators_4_12]() {
      if (this[__NgValidators_4_12] == null) {
        this[__NgValidators_4_12] = [this[_DeferredValidator_4_5]];
      }
      return this[__NgValidators_4_12];
    }
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "popup-content");
      this.addShimC(this[_el_0]);
      let _el_1 = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_1, "inner-label-wrapper");
      this.addShimC(_el_1);
      let _anchor_2 = dom_helpers.appendAnchor(_el_1);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C7 || CT.C7);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _el_3 = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_3, "date-input");
      this.addShimC(_el_3);
      this[_compView_4] = new material_input$46template.ViewMaterialInputComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootEl;
      _el_3[$append](_el_4);
      dom_helpers.setAttribute(_el_4, "autoFocus", "");
      dom_helpers.setAttribute(_el_4, "dateParsing", "");
      dom_helpers.setAttribute(_el_4, "type", "text");
      this.addShimC(_el_4);
      this[_DeferredValidator_4_5] = new deferred_validator.DeferredValidator.new();
      this[_MaterialInputComponent_4_6] = new material_input.MaterialInputComponent.new("text", null, null, null, this[_compView_4], this[_DeferredValidator_4_5]);
      this[_AutoFocusDirective_4_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoFocusDirectiveL(), dart.wrapType(AutoFocusDirectiveL()), dart.fn(() => new focus.AutoFocusDirective.new(_el_4, DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex)), this[_MaterialInputComponent_4_6], ModalComponentL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.viewData.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMaterialDatepickerComponent0L(), this.parentView)[_PopupRef_3_10])), VoidToAutoFocusDirectiveL())) : new focus.AutoFocusDirective.new(_el_4, DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex)), this[_MaterialInputComponent_4_6], ModalComponentL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.viewData.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMaterialDatepickerComponent0L(), this.parentView)[_PopupRef_3_10]));
      this[_DateInputDirective_4_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DateInputDirectiveL(), dart.wrapType(DateInputDirectiveL()), dart.fn(() => new date_input.DateInputDirective.new(ClockL().as(this.parentView.parentView.injectorGetOptional(C8 || CT.C8, this.parentView.viewData.parentIndex)), ClockL().as(this.parentView.parentView.injectorGet(dart.wrapType(ClockL()), this.parentView.viewData.parentIndex)), this[_MaterialInputComponent_4_6]), VoidToDateInputDirectiveL())) : new date_input.DateInputDirective.new(ClockL().as(this.parentView.parentView.injectorGetOptional(C8 || CT.C8, this.parentView.viewData.parentIndex)), ClockL().as(this.parentView.parentView.injectorGet(dart.wrapType(ClockL()), this.parentView.viewData.parentIndex)), this[_MaterialInputComponent_4_6]);
      this[_MaterialInputDefaultValueAccessor_4_11] = new material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_4_6], null);
      this[_compView_4].create(this[_MaterialInputComponent_4_6], JSArrayOfObjectL().of([C1 || CT.C1, C1 || CT.C1]));
      let _anchor_5 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C9 || CT.C9);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      this[_compView_6] = new material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootEl;
      this[_el_0][$append](_el_6);
      dom_helpers.setAttribute(_el_6, "aria-hidden", "true");
      this.updateChildClassNonHtml(_el_6, "calendar-picker");
      dom_helpers.setAttribute(_el_6, "mode", "single-date");
      this.addShimC(_el_6);
      this[_MaterialCalendarPickerComponent_6_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialCalendarPickerComponentL(), dart.wrapType(MaterialCalendarPickerComponentL()), dart.fn(() => new material_calendar_picker.MaterialCalendarPickerComponent.new(ClockL().as(this.parentView.parentView.injectorGetOptional(C8 || CT.C8, this.parentView.viewData.parentIndex)), ClockL().as(this.parentView.parentView.injectorGet(dart.wrapType(ClockL()), this.parentView.viewData.parentIndex)), "single-date"), VoidToMaterialCalendarPickerComponentL())) : new material_calendar_picker.MaterialCalendarPickerComponent.new(ClockL().as(this.parentView.parentView.injectorGetOptional(C8 || CT.C8, this.parentView.viewData.parentIndex)), ClockL().as(this.parentView.parentView.injectorGet(dart.wrapType(ClockL()), this.parentView.viewData.parentIndex)), "single-date");
      this[_NgClass_6_6] = new ng_class.NgClass.new(_el_6);
      this[_compView_6].create0(this[_MaterialCalendarPickerComponent_6_5]);
      let subscription_0 = this[_DateInputDirective_4_9].dateChange.listen(this.eventHandler1(DateL(), DateL(), dart.bind(_ctx, 'setDateFromInput')));
      let subscription_1 = this[_MaterialCalendarPickerComponent_6_5].stateChange.listen(this.eventHandler1(CalendarStateL(), CalendarStateL(), dart.bind(this, _handle_stateChange_6_0)));
      this.init(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (4 === nodeIndex) {
        if (token === dart.wrapType(DeferredValidatorL())) {
          return this[_DeferredValidator_4_5];
        }
        if (token === dart.wrapType(MaterialInputComponentL()) || token === dart.wrapType(FocusableL()) || token === dart.wrapType(BaseMaterialInputL()) || token === dart.wrapType(ReferenceDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialInputComponent_4_6];
        }
        if (token === (C10 || CT.C10)) {
          return this[_NgValidators_4_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      this[_NgIf_2_9].ngIf = _ctx.presetDates[$isNotEmpty];
      changed = false;
      let currVal_2 = _ctx.placeholderMsg;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialInputComponent_4_6].label = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.required;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialInputComponent_4_6].required = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_AutoFocusDirective_4_8].autoFocus = true;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AutoFocusDirective_4_8].ngOnInit();
      }
      let currVal_5 = _ctx.outputFormat;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_DateInputDirective_4_9].dateFormat = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.maxDate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_DateInputDirective_4_9].maxDate = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.minDate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_DateInputDirective_4_9].minDate = currVal_7;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.date;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_DateInputDirective_4_9].date = currVal_8;
        this[_expr_8] = currVal_8;
      }
      this[_NgIf_5_9].ngIf = _ctx.presetDates[$isNotEmpty];
      changed = false;
      let currVal_10 = _ctx.calendar;
      if (dart.test(app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_MaterialCalendarPickerComponent_6_5].state = currVal_10;
        changed = true;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.minDate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_MaterialCalendarPickerComponent_6_5].minDate = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.maxDate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_MaterialCalendarPickerComponent_6_5].maxDate = currVal_12;
        changed = true;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.compact;
      if (dart.test(app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        this[_MaterialCalendarPickerComponent_6_5].compact = currVal_13;
        changed = true;
        this[_expr_13] = currVal_13;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      if (changed) {
        this[_MaterialCalendarPickerComponent_6_5].ngAfterChanges();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialCalendarPickerComponent_6_5].ngOnInit();
      }
      if (firstCheck) {
        this[_NgClass_6_6].initialClasses = "calendar-picker";
      }
      let currVal_15 = _ctx.calendarWeekRowsStyle;
      if (dart.test(app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        this[_NgClass_6_6].rawClass = currVal_15;
        this[_expr_15] = currVal_15;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgClass_6_6].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      let currVal_0 = _ctx.compact;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(this[_el_0], "compact", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_6].detectHostChanges(firstCheck);
      this[_compView_4].detectChanges();
      this[_compView_6].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_4_6].ngAfterViewInit();
          this[_MaterialCalendarPickerComponent_6_5].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMaterialDatepickerComponent0L(), this.parentView)[_query_MaterialInputComponent_1_1_isDirty] = true;
      optimizations.unsafeCast(ViewMaterialDatepickerComponent0L(), this.parentView)[_query_AutoFocusDirective_4_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_compView_4].destroyInternalState();
      this[_compView_6].destroyInternalState();
      this[_MaterialInputComponent_4_6].ngOnDestroy();
      this[_AutoFocusDirective_4_8].ngOnDestroy();
      this[_DateInputDirective_4_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_4_11].ngOnDestroy();
      this[_MaterialCalendarPickerComponent_6_5].ngOnDestroy();
      this[_NgClass_6_6].ngOnDestroy();
    }
    [_handle_stateChange_6_0]($36event) {
      let _ctx = this.ctx;
      _ctx.calendar = CalendarStateL().as($36event);
    }
  };
  (material_datepicker$46template._ViewMaterialDatepickerComponent2.new = function(parentView, parentIndex) {
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_compView_4] = null;
    this[_DeferredValidator_4_5] = null;
    this[_MaterialInputComponent_4_6] = null;
    this[_AutoFocusDirective_4_8] = null;
    this[_DateInputDirective_4_9] = null;
    this[_MaterialInputDefaultValueAccessor_4_11] = null;
    this[__NgValidators_4_12] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_compView_6] = null;
    this[_MaterialCalendarPickerComponent_6_5] = null;
    this[_NgClass_6_6] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_15] = null;
    this[_el_0] = null;
    material_datepicker$46template._ViewMaterialDatepickerComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_datepicker$46template._ViewMaterialDatepickerComponent2.prototype;
  dart.addTypeTests(material_datepicker$46template._ViewMaterialDatepickerComponent2);
  dart.addTypeCaches(material_datepicker$46template._ViewMaterialDatepickerComponent2);
  dart.setMethodSignature(material_datepicker$46template._ViewMaterialDatepickerComponent2, () => ({
    __proto__: dart.getMethods(material_datepicker$46template._ViewMaterialDatepickerComponent2.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_stateChange_6_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_datepicker$46template._ViewMaterialDatepickerComponent2, () => ({
    __proto__: dart.getGetters(material_datepicker$46template._ViewMaterialDatepickerComponent2.__proto__),
    [_NgValidators_4_12]: dart.legacy(core.List)
  }));
  dart.setLibraryUri(material_datepicker$46template._ViewMaterialDatepickerComponent2, L0);
  dart.setFieldSignature(material_datepicker$46template._ViewMaterialDatepickerComponent2, () => ({
    __proto__: dart.getFields(material_datepicker$46template._ViewMaterialDatepickerComponent2.__proto__),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_4]: dart.fieldType(dart.legacy(material_input$46template.ViewMaterialInputComponent0)),
    [_DeferredValidator_4_5]: dart.fieldType(dart.legacy(deferred_validator.DeferredValidator)),
    [_MaterialInputComponent_4_6]: dart.fieldType(dart.legacy(material_input.MaterialInputComponent)),
    [_AutoFocusDirective_4_8]: dart.fieldType(dart.legacy(focus.AutoFocusDirective)),
    [_DateInputDirective_4_9]: dart.fieldType(dart.legacy(date_input.DateInputDirective)),
    [_MaterialInputDefaultValueAccessor_4_11]: dart.fieldType(dart.legacy(material_input_default_value_accessor.MaterialInputDefaultValueAccessor)),
    [__NgValidators_4_12]: dart.fieldType(dart.legacy(core.List)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_6]: dart.fieldType(dart.legacy(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0)),
    [_MaterialCalendarPickerComponent_6_5]: dart.fieldType(dart.legacy(material_calendar_picker.MaterialCalendarPickerComponent)),
    [_NgClass_6_6]: dart.fieldType(dart.legacy(ng_class.NgClass)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.legacy(core.String)),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_15]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  material_datepicker$46template._ViewMaterialDatepickerComponent3 = class _ViewMaterialDatepickerComponent3 extends app_view.AppView$(dart.legacy(material_datepicker.MaterialDatepickerComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_0), "inner-label");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.labelMsg));
    }
  };
  (material_datepicker$46template._ViewMaterialDatepickerComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_datepicker$46template._ViewMaterialDatepickerComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_datepicker$46template._ViewMaterialDatepickerComponent3.prototype;
  dart.addTypeTests(material_datepicker$46template._ViewMaterialDatepickerComponent3);
  dart.addTypeCaches(material_datepicker$46template._ViewMaterialDatepickerComponent3);
  dart.setLibraryUri(material_datepicker$46template._ViewMaterialDatepickerComponent3, L0);
  dart.setFieldSignature(material_datepicker$46template._ViewMaterialDatepickerComponent3, () => ({
    __proto__: dart.getFields(material_datepicker$46template._ViewMaterialDatepickerComponent3.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _NgFor_1_9 = dart.privateName(material_datepicker$46template, "_NgFor_1_9");
  var C11;
  material_datepicker$46template._ViewMaterialDatepickerComponent4 = class _ViewMaterialDatepickerComponent4 extends app_view.AppView$(dart.legacy(material_datepicker.MaterialDatepickerComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "preset-dates-wrapper");
      dom_helpers.setAttribute(_el_0, "role", "listbox");
      this.addShimC(HtmlElementL().as(_el_0));
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C11 || CT.C11);
      this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.presetDates;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
  };
  (material_datepicker$46template._ViewMaterialDatepickerComponent4.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    material_datepicker$46template._ViewMaterialDatepickerComponent4.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_datepicker$46template._ViewMaterialDatepickerComponent4.prototype;
  dart.addTypeTests(material_datepicker$46template._ViewMaterialDatepickerComponent4);
  dart.addTypeCaches(material_datepicker$46template._ViewMaterialDatepickerComponent4);
  dart.setLibraryUri(material_datepicker$46template._ViewMaterialDatepickerComponent4, L0);
  dart.setFieldSignature(material_datepicker$46template._ViewMaterialDatepickerComponent4, () => ({
    __proto__: dart.getFields(material_datepicker$46template._ViewMaterialDatepickerComponent4.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  var _compView_0 = dart.privateName(material_datepicker$46template, "_compView_0");
  var _MaterialSelectItemComponent_0_5 = dart.privateName(material_datepicker$46template, "_MaterialSelectItemComponent_0_5");
  var _handle_trigger_0_0 = dart.privateName(material_datepicker$46template, "_handle_trigger_0_0");
  material_datepicker$46template._ViewMaterialDatepickerComponent5 = class _ViewMaterialDatepickerComponent5 extends app_view.AppView$(dart.legacy(material_datepicker.MaterialDatepickerComponent)) {
    build() {
      this[_compView_0] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      dom_helpers.setAttribute(_el_0, "closeOnActivate", "false");
      this.addShimC(_el_0);
      this[_MaterialSelectItemComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(_el_0, optimizations.unsafeCast(ViewMaterialDatepickerComponent0L(), this.parentView.parentView.parentView)[_MaterialPopupComponent_3_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponentL())) : new material_select_item.MaterialSelectItemComponent.new(_el_0, optimizations.unsafeCast(ViewMaterialDatepickerComponent0L(), this.parentView.parentView.parentView)[_MaterialPopupComponent_3_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0], null);
      this[_compView_0].create(this[_MaterialSelectItemComponent_0_5], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_1].element])]));
      let subscription_0 = this[_MaterialSelectItemComponent_0_5].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_trigger_0_0)));
      this.init(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialSelectItemComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_presetDate = optimizations.unsafeCast(SingleDayRangeL(), this.locals[$_get]("$implicit"));
      if (firstCheck) {
        this[_MaterialSelectItemComponent_0_5].closeOnActivate = "false";
      }
      let currVal_0 = _ctx.isPresetDateSelected(local_presetDate);
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialSelectItemComponent_0_5].selected = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(interpolate.interpolateString0(local_presetDate.title));
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialSelectItemComponent_0_5].ngOnDestroy();
    }
    [_handle_trigger_0_0]($36event) {
      let local_presetDate = optimizations.unsafeCast(SingleDayRangeL(), this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.onPresetClicked(local_presetDate);
    }
  };
  (material_datepicker$46template._ViewMaterialDatepickerComponent5.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_MaterialSelectItemComponent_0_5] = null;
    this[_expr_0] = null;
    material_datepicker$46template._ViewMaterialDatepickerComponent5.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_datepicker$46template._ViewMaterialDatepickerComponent5.prototype;
  dart.addTypeTests(material_datepicker$46template._ViewMaterialDatepickerComponent5);
  dart.addTypeCaches(material_datepicker$46template._ViewMaterialDatepickerComponent5);
  dart.setMethodSignature(material_datepicker$46template._ViewMaterialDatepickerComponent5, () => ({
    __proto__: dart.getMethods(material_datepicker$46template._ViewMaterialDatepickerComponent5.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_datepicker$46template._ViewMaterialDatepickerComponent5, L0);
  dart.setFieldSignature(material_datepicker$46template._ViewMaterialDatepickerComponent5, () => ({
    __proto__: dart.getFields(material_datepicker$46template._ViewMaterialDatepickerComponent5.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0)),
    [_MaterialSelectItemComponent_0_5]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  var _MaterialDatepickerComponent_0_5 = dart.privateName(material_datepicker$46template, "_MaterialDatepickerComponent_0_5");
  material_datepicker$46template._ViewMaterialDatepickerComponentHost0 = class _ViewMaterialDatepickerComponentHost0 extends app_view.AppView$(dart.legacy(material_datepicker.MaterialDatepickerComponent)) {
    build() {
      this[_compView_0] = new material_datepicker$46template.ViewMaterialDatepickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialDatepickerComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialDatepickerComponentL(), dart.wrapType(MaterialDatepickerComponentL()), dart.fn(() => new material_datepicker.MaterialDatepickerComponent.new(this.rootEl, null, ClockL().as(this.injectorGetOptional(C8 || CT.C8, this.viewData.parentIndex))), VoidToMaterialDatepickerComponentL())) : new material_datepicker.MaterialDatepickerComponent.new(this.rootEl, null, ClockL().as(this.injectorGetOptional(C8 || CT.C8, this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialDatepickerComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialDatepickerComponentL()).new(0, this, this.rootEl, this[_MaterialDatepickerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
        return this[_MaterialDatepickerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialDatepickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_datepicker$46template._ViewMaterialDatepickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDatepickerComponent_0_5] = null;
    material_datepicker$46template._ViewMaterialDatepickerComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_datepicker$46template._ViewMaterialDatepickerComponentHost0.prototype;
  dart.addTypeTests(material_datepicker$46template._ViewMaterialDatepickerComponentHost0);
  dart.addTypeCaches(material_datepicker$46template._ViewMaterialDatepickerComponentHost0);
  dart.setMethodSignature(material_datepicker$46template._ViewMaterialDatepickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_datepicker$46template._ViewMaterialDatepickerComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_datepicker$46template._ViewMaterialDatepickerComponentHost0, L0);
  dart.setFieldSignature(material_datepicker$46template._ViewMaterialDatepickerComponentHost0, () => ({
    __proto__: dart.getFields(material_datepicker$46template._ViewMaterialDatepickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_datepicker$46template.ViewMaterialDatepickerComponent0)),
    [_MaterialDatepickerComponent_0_5]: dart.fieldType(dart.legacy(material_datepicker.MaterialDatepickerComponent))
  }));
  material_datepicker$46template.viewFactory_MaterialDatepickerComponent1 = function viewFactory_MaterialDatepickerComponent1(parentView, parentIndex) {
    return new material_datepicker$46template._ViewMaterialDatepickerComponent1.new(parentView, parentIndex);
  };
  material_datepicker$46template.viewFactory_MaterialDatepickerComponent2 = function viewFactory_MaterialDatepickerComponent2(parentView, parentIndex) {
    return new material_datepicker$46template._ViewMaterialDatepickerComponent2.new(parentView, parentIndex);
  };
  material_datepicker$46template.viewFactory_MaterialDatepickerComponent3 = function viewFactory_MaterialDatepickerComponent3(parentView, parentIndex) {
    return new material_datepicker$46template._ViewMaterialDatepickerComponent3.new(parentView, parentIndex);
  };
  material_datepicker$46template.viewFactory_MaterialDatepickerComponent4 = function viewFactory_MaterialDatepickerComponent4(parentView, parentIndex) {
    return new material_datepicker$46template._ViewMaterialDatepickerComponent4.new(parentView, parentIndex);
  };
  material_datepicker$46template.viewFactory_MaterialDatepickerComponent5 = function viewFactory_MaterialDatepickerComponent5(parentView, parentIndex) {
    return new material_datepicker$46template._ViewMaterialDatepickerComponent5.new(parentView, parentIndex);
  };
  material_datepicker$46template.viewFactory_MaterialDatepickerComponentHost0 = function viewFactory_MaterialDatepickerComponentHost0(parentView, parentIndex) {
    return new material_datepicker$46template._ViewMaterialDatepickerComponentHost0.new(parentView, parentIndex);
  };
  material_datepicker$46template.initReflector = function initReflector() {
    if (dart.test(material_datepicker$46template._visited)) {
      return;
    }
    material_datepicker$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialDatepickerComponentL()), material_datepicker$46template.MaterialDatepickerComponentNgFactory);
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    deferred_content$46template.initReflector();
    focus$46template.initReflector();
    focus_trap$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    has_disabled$46template.initReflector();
    alignment$46template.initReflector();
    popup$46template.initReflector();
    calendar$46template.initReflector();
    date_input$46template.initReflector();
    material_calendar_picker$46template.initReflector();
    module$46template.initReflector();
    range$46template.initReflector();
    material_input$46template.initReflector();
    material_list_item$46template.initReflector();
    material_popup$46template.initReflector();
    dropdown_button$46template.initReflector();
    material_select_item$46template.initReflector();
    focusable_mixin$46template.initReflector();
    date$46template.initReflector();
    css$46template.initReflector();
  };
  dart.copyProperties(material_datepicker$46template, {
    get MaterialDatepickerComponentNgFactory() {
      return material_datepicker$46template._MaterialDatepickerComponentNgFactory;
    }
  });
  var C13;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C12;
  dart.defineLazy(material_datepicker$46template, {
    /*material_datepicker$46template.styles$MaterialDatepickerComponent*/get styles$MaterialDatepickerComponent() {
      return [material_datepicker$46scss$46css$46shim.styles];
    },
    /*material_datepicker$46template._MaterialDatepickerComponentNgFactory*/get _MaterialDatepickerComponentNgFactory() {
      return C12 || CT.C12;
    },
    /*material_datepicker$46template.styles$MaterialDatepickerComponentHost*/get styles$MaterialDatepickerComponentHost() {
      return C1 || CT.C1;
    },
    /*material_datepicker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/material_datepicker.template", {
    "package:angular_components/material_datepicker/material_datepicker.template.dart": material_datepicker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_datepicker.template.dart"],"names":[],"mappings":"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","file":"material_datepicker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_datepicker$46template: material_datepicker$46template
  };
}));

//# sourceMappingURL=material_datepicker.template.ddc.js.map
