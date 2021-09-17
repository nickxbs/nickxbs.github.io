define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_datepicker/material_date_range_picker', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_datepicker/next_prev_buttons.template', 'packages/angular_components/material_datepicker/next_prev_buttons', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/material_datepicker/date_range_editor.template', 'packages/angular_components/material_datepicker/date_range_editor', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular_components/material_datepicker/date_range_editor_host', 'packages/quiver/src/time/clock', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_datepicker/config', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_datepicker/comparison.template', 'packages/angular_components/material_datepicker/comparison_option.template', 'packages/angular_components/material_datepicker/config.template', 'packages/angular_components/material_datepicker/date_range_editor_host.template', 'packages/angular_components/material_datepicker/model.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_datepicker/preset.template', 'packages/angular_components/material_datepicker/range.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/date/date_formatter.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/material_datepicker/material_date_range_picker.scss.css.shim'], (function load__packages__angular_components__material_datepicker__material_date_range_picker_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular_components__material_popup__material_popup, packages__angular__src__core__change_detection__change_detection, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__button_decorator__button_decorator, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__material_select__dropdown_button$46template, packages__angular_components__material_select__dropdown_button, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__interfaces__has_disabled, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__material_datepicker__material_date_range_picker, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__angular_components__material_datepicker__next_prev_buttons$46template, packages__angular_components__material_datepicker__next_prev_buttons, packages__angular_components__focus__focus_trap$46template, packages__angular_components__focus__focus_trap, packages__angular_components__material_datepicker__date_range_editor$46template, packages__angular_components__material_datepicker__date_range_editor, packages__angular_components__src__utils__angular__managed_zone__managed_zone, packages__angular_components__material_datepicker__date_range_editor_host, packages__quiver__src__time__clock, packages__angular_components__material_button__material_button$46template, packages__angular_components__theme__dark_theme, packages__angular_components__material_button__material_button, packages__angular_components__material_datepicker__config, packages__angular__angular$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__focus__focus$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_datepicker__comparison$46template, packages__angular_components__material_datepicker__comparison_option$46template, packages__angular_components__material_datepicker__config$46template, packages__angular_components__material_datepicker__date_range_editor_host$46template, packages__angular_components__material_datepicker__model$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__material_datepicker__preset$46template, packages__angular_components__material_datepicker__range$46template, packages__angular_components__model__date__date$46template, packages__angular_components__model__date__date_formatter$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__utils__angular__css__css$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__material_datepicker__material_date_range_picker$46scss$46css$46shim) {
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
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
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
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const material_date_range_picker = packages__angular_components__material_datepicker__material_date_range_picker.material_datepicker__material_date_range_picker;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const next_prev_buttons$46template = packages__angular_components__material_datepicker__next_prev_buttons$46template.material_datepicker__next_prev_buttons$46template;
  const next_prev_buttons = packages__angular_components__material_datepicker__next_prev_buttons.material_datepicker__next_prev_buttons;
  const focus_trap$46template = packages__angular_components__focus__focus_trap$46template.focus__focus_trap$46template;
  const focus_trap = packages__angular_components__focus__focus_trap.focus__focus_trap;
  const date_range_editor$46template = packages__angular_components__material_datepicker__date_range_editor$46template.material_datepicker__date_range_editor$46template;
  const date_range_editor = packages__angular_components__material_datepicker__date_range_editor.material_datepicker__date_range_editor;
  const managed_zone = packages__angular_components__src__utils__angular__managed_zone__managed_zone.src__utils__angular__managed_zone__managed_zone;
  const date_range_editor_host = packages__angular_components__material_datepicker__date_range_editor_host.material_datepicker__date_range_editor_host;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const material_button$46template = packages__angular_components__material_button__material_button$46template.material_button__material_button$46template;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const config = packages__angular_components__material_datepicker__config.material_datepicker__config;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const comparison$46template = packages__angular_components__material_datepicker__comparison$46template.material_datepicker__comparison$46template;
  const comparison_option$46template = packages__angular_components__material_datepicker__comparison_option$46template.material_datepicker__comparison_option$46template;
  const config$46template = packages__angular_components__material_datepicker__config$46template.material_datepicker__config$46template;
  const date_range_editor_host$46template = packages__angular_components__material_datepicker__date_range_editor_host$46template.material_datepicker__date_range_editor_host$46template;
  const model$46template = packages__angular_components__material_datepicker__model$46template.material_datepicker__model$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const preset$46template = packages__angular_components__material_datepicker__preset$46template.material_datepicker__preset$46template;
  const range$46template = packages__angular_components__material_datepicker__range$46template.material_datepicker__range$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const date_formatter$46template = packages__angular_components__model__date__date_formatter$46template.model__date__date_formatter$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const css$46template = packages__angular_components__utils__angular__css__css$46template.utils__angular__css__css$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const material_date_range_picker$46scss$46css$46shim = packages__angular_components__material_datepicker__material_date_range_picker$46scss$46css$46shim.material_datepicker__material_date_range_picker$46scss$46css$46shim;
  var material_date_range_picker$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $isNotEmpty = dartx.isNotEmpty;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var KeyboardOnlyFocusIndicatorDirectiveL = () => (KeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var VoidToKeyboardOnlyFocusIndicatorDirectiveL = () => (VoidToKeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.fnType(KeyboardOnlyFocusIndicatorDirectiveL(), [])))();
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
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var DateRangeEditorComponentL = () => (DateRangeEditorComponentL = dart.constFn(dart.legacy(date_range_editor.DateRangeEditorComponent)))();
  var ManagedZoneL = () => (ManagedZoneL = dart.constFn(dart.legacy(managed_zone.ManagedZone)))();
  var DateRangeEditorHostL = () => (DateRangeEditorHostL = dart.constFn(dart.legacy(date_range_editor_host.DateRangeEditorHost)))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var VoidToDateRangeEditorComponentL = () => (VoidToDateRangeEditorComponentL = dart.constFn(dart.fnType(DateRangeEditorComponentL(), [])))();
  var AcxDarkThemeL = () => (AcxDarkThemeL = dart.constFn(dart.legacy(dark_theme.AcxDarkTheme)))();
  var VoidToAcxDarkThemeL = () => (VoidToAcxDarkThemeL = dart.constFn(dart.fnType(AcxDarkThemeL(), [])))();
  var TextL = () => (TextL = dart.constFn(dart.legacy(html.Text)))();
  var JSArrayOfTextL = () => (JSArrayOfTextL = dart.constFn(_interceptors.JSArray$(TextL())))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
  var MaterialButtonComponentL = () => (MaterialButtonComponentL = dart.constFn(dart.legacy(material_button.MaterialButtonComponent)))();
  var MaterialDateRangePickerComponentL = () => (MaterialDateRangePickerComponentL = dart.constFn(dart.legacy(material_date_range_picker.MaterialDateRangePickerComponent)))();
  var DatepickerConfigL = () => (DatepickerConfigL = dart.constFn(dart.legacy(config.DatepickerConfig)))();
  var VoidToMaterialDateRangePickerComponentL = () => (VoidToMaterialDateRangePickerComponentL = dart.constFn(dart.fnType(MaterialDateRangePickerComponentL(), [])))();
  var ComponentRefOfMaterialDateRangePickerComponentL = () => (ComponentRefOfMaterialDateRangePickerComponentL = dart.constFn(component_factory.ComponentRef$(MaterialDateRangePickerComponentL())))();
  var ComponentFactoryOfMaterialDateRangePickerComponentL = () => (ComponentFactoryOfMaterialDateRangePickerComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialDateRangePickerComponentL())))();
  var AppViewOfMaterialDateRangePickerComponentL = () => (AppViewOfMaterialDateRangePickerComponentL = dart.constFn(app_view.AppView$(MaterialDateRangePickerComponentL())))();
  var AppViewLOfMaterialDateRangePickerComponentL = () => (AppViewLOfMaterialDateRangePickerComponentL = dart.constFn(dart.legacy(AppViewOfMaterialDateRangePickerComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialDateRangePickerComponentL = () => (AppViewLAndintLToAppViewLOfMaterialDateRangePickerComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialDateRangePickerComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/material_date_range_picker.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C1() {
      return C1 = dart.constList([], dart.dynamic);
    },
    get C2() {
      return C2 = dart.fn(material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent2, AppViewLAndintLToAppViewLOfvoid());
    },
    get C3() {
      return C3 = dart.fn(material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent3, AppViewLAndintLToAppViewLOfvoid());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: OpaqueTokenOfListLOfRelativePositionL().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C7() {
      return C7 = dart.fn(material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent4, AppViewLAndintLToAppViewLOfvoid());
    },
    get C8() {
      return C8 = dart.constList([], ObjectL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C12() {
      return C12 = dart.fn(material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponentHost0, AppViewLAndintLToAppViewLOfMaterialDateRangePickerComponentL());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ComponentFactoryOfMaterialDateRangePickerComponentL().prototype,
        [ComponentFactory__viewFactory]: C12 || CT.C12,
        [ComponentFactory_selector]: "material-date-range-picker"
      });
    }
  }, false);
  var _ButtonDirective_0_5 = dart.privateName(material_date_range_picker$46template, "_ButtonDirective_0_5");
  var _KeyboardOnlyFocusIndicatorDirective_0_6 = dart.privateName(material_date_range_picker$46template, "_KeyboardOnlyFocusIndicatorDirective_0_6");
  var _PopupSourceDirective_0_7 = dart.privateName(material_date_range_picker$46template, "_PopupSourceDirective_0_7");
  var _appEl_1 = dart.privateName(material_date_range_picker$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(material_date_range_picker$46template, "_NgIf_1_9");
  var _compView_4 = dart.privateName(material_date_range_picker$46template, "_compView_4");
  var _DropdownButtonComponent_4_5 = dart.privateName(material_date_range_picker$46template, "_DropdownButtonComponent_4_5");
  var _appEl_5 = dart.privateName(material_date_range_picker$46template, "_appEl_5");
  var _NgIf_5_9 = dart.privateName(material_date_range_picker$46template, "_NgIf_5_9");
  var _appEl_6 = dart.privateName(material_date_range_picker$46template, "_appEl_6");
  var _NgIf_6_9 = dart.privateName(material_date_range_picker$46template, "_NgIf_6_9");
  var _compView_7 = dart.privateName(material_date_range_picker$46template, "_compView_7");
  var _appEl_7 = dart.privateName(material_date_range_picker$46template, "_appEl_7");
  var _MaterialPopupComponent_7_8 = dart.privateName(material_date_range_picker$46template, "_MaterialPopupComponent_7_8");
  var __PopupHierarchy_7_11 = dart.privateName(material_date_range_picker$46template, "__PopupHierarchy_7_11");
  var __PopupRef_7_12 = dart.privateName(material_date_range_picker$46template, "__PopupRef_7_12");
  var _appEl_8 = dart.privateName(material_date_range_picker$46template, "_appEl_8");
  var _NgIf_8_9 = dart.privateName(material_date_range_picker$46template, "_NgIf_8_9");
  var _expr_1 = dart.privateName(material_date_range_picker$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_date_range_picker$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_date_range_picker$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_date_range_picker$46template, "_expr_4");
  var _expr_10 = dart.privateName(material_date_range_picker$46template, "_expr_10");
  var _expr_11 = dart.privateName(material_date_range_picker$46template, "_expr_11");
  var _expr_13 = dart.privateName(material_date_range_picker$46template, "_expr_13");
  var _expr_14 = dart.privateName(material_date_range_picker$46template, "_expr_14");
  var _el_0 = dart.privateName(material_date_range_picker$46template, "_el_0");
  var _el_7 = dart.privateName(material_date_range_picker$46template, "_el_7");
  var _PopupHierarchy_7_11 = dart.privateName(material_date_range_picker$46template, "_PopupHierarchy_7_11");
  var _PopupRef_7_12 = dart.privateName(material_date_range_picker$46template, "_PopupRef_7_12");
  var C0;
  var C1;
  var C2;
  var C3;
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C4;
  var C5;
  var C6;
  var C7;
  var _handle_focus_0_1 = dart.privateName(material_date_range_picker$46template, "_handle_focus_0_1");
  var _handle_click_0_3 = dart.privateName(material_date_range_picker$46template, "_handle_click_0_3");
  var C8;
  material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0 = class ViewMaterialDateRangePickerComponent0 extends app_view.AppView$(dart.legacy(material_date_range_picker.MaterialDateRangePickerComponent)) {
    get [_PopupHierarchy_7_11]() {
      if (this[__PopupHierarchy_7_11] == null) {
        this[__PopupHierarchy_7_11] = material_popup.getHierarchy(this[_MaterialPopupComponent_7_8]);
      }
      return this[__PopupHierarchy_7_11];
    }
    get [_PopupRef_7_12]() {
      if (this[__PopupRef_7_12] == null) {
        this[__PopupRef_7_12] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_7_8]);
      }
      return this[__PopupRef_7_12];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_date_range_picker.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClass(this[_el_0], "main-content");
      dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
      dom_helpers.setAttribute(this[_el_0], "popupSource", "");
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)));
      this[_PopupSourceDirective_0_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), this[_el_0], ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.viewData.parentIndex)), null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), this[_el_0], ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.viewData.parentIndex)), null);
      let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_2, "dropdown-and-comparison");
      this.addShimC(_el_2);
      let _el_3 = dom_helpers.appendSpan(doc, _el_2);
      this.updateChildClass(_el_3, "main-line");
      this.addShimE(_el_3);
      this[_compView_4] = new dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootEl;
      _el_3[$append](_el_4);
      this.updateChildClassNonHtml(_el_4, "menu-lookalike primary-range");
      this.addShimC(_el_4);
      this[_DropdownButtonComponent_4_5] = new dropdown_button.DropdownButtonComponent.new();
      this[_compView_4].create(this[_DropdownButtonComponent_4_5], JSArrayOfObjectL().of([C1 || CT.C1]));
      let _anchor_5 = dom_helpers.appendAnchor(_el_3);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 3, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C2 || CT.C2);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = dom_helpers.appendAnchor(_el_2);
      this[_appEl_6] = new view_container.ViewContainer.new(6, 2, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C3 || CT.C3);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this[_compView_7] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 7);
      this[_el_7] = this[_compView_7].rootEl;
      parentRenderNode[$append](this[_el_7]);
      dom_helpers.setAttribute(this[_el_7], "enforceSpaceConstraints", "");
      this.addShimC(HtmlElementL().as(this[_el_7]));
      this[_appEl_7] = new view_container.ViewContainer.new(7, null, this, this[_el_7]);
      this[_MaterialPopupComponent_7_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C4 || CT.C4, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C5 || CT.C5, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C6 || CT.C6, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_7], this[_appEl_7], new element_ref.ElementRef.new(this[_el_7])), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C4 || CT.C4, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C5 || CT.C5, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C6 || CT.C6, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_7], this[_appEl_7], new element_ref.ElementRef.new(this[_el_7]));
      let _anchor_8 = dom_helpers.createAnchor();
      this[_appEl_8] = new view_container.ViewContainer.new(8, 7, this, _anchor_8);
      let _TemplateRef_8_8 = new template_ref.TemplateRef.new(this[_appEl_8], C7 || CT.C7);
      this[_NgIf_8_9] = new ng_if.NgIf.new(this[_appEl_8], _TemplateRef_8_8);
      this[_compView_7].create(this[_MaterialPopupComponent_7_8], JSArrayOfObjectL().of([C1 || CT.C1, JSArrayOfViewContainerL().of([this[_appEl_8]]), C1 || CT.C1]));
      this[_el_0][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_focus_0_1)));
      this[_el_0][$addEventListener]("mouseenter", this.eventHandler0(EventL(), dart.bind(_ctx, 'initEditor')));
      this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_click_0_3)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'keydown')));
      this[_el_0][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'onMouseInteraction')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'open')));
      let subscription_1 = this[_MaterialPopupComponent_7_8].onOpen.listen(this.eventHandler0(dart.void, dart.bind(_ctx, 'open')));
      let subscription_2 = this[_MaterialPopupComponent_7_8].onClose.listen(this.eventHandler0(dart.void, dart.bind(_ctx, 'close')));
      _ctx.focusOnClose = this[_KeyboardOnlyFocusIndicatorDirective_0_6];
      _ctx.popup = this[_MaterialPopupComponent_7_8];
      this.init(C8 || CT.C8, JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1, subscription_2]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 6) {
        if ((token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(FocusableL())) && 4 === nodeIndex) {
          return this[_DropdownButtonComponent_4_5];
        }
        if (token === dart.wrapType(ButtonDirectiveL())) {
          return this[_ButtonDirective_0_5].instance;
        }
      }
      if (7 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(DropdownHandleL())) {
          return this[_MaterialPopupComponent_7_8];
        }
        if (token === dart.wrapType(PopupHierarchyL())) {
          return this[_PopupHierarchy_7_11];
        }
        if (token === dart.wrapType(PopupRefL())) {
          return this[_PopupRef_7_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_button = this[_PopupSourceDirective_0_7];
      this[_NgIf_1_9].ngIf = dart.test(_ctx.hasTitle) && dart.test(_ctx.presets[$isNotEmpty]);
      changed = false;
      if (firstCheck) {
        this[_DropdownButtonComponent_4_5].tabbable = false;
        changed = true;
      }
      let currVal_1 = _ctx.formattedRange;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_DropdownButtonComponent_4_5].buttonText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.dropdownButtonAriaLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DropdownButtonComponent_4_5].buttonAriaLabel = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_DropdownButtonComponent_4_5].disabled = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.error;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_DropdownButtonComponent_4_5].error = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DropdownButtonComponent_4_5].ngOnInit();
      }
      this[_NgIf_5_9].ngIf = _ctx.showNextPrevButtons;
      this[_NgIf_6_9].ngIf = _ctx.hasComparison;
      changed = false;
      if (firstCheck) {
        this[_MaterialPopupComponent_7_8].enforceSpaceConstraints = true;
        changed = true;
      }
      let currVal_10 = _ctx.preferredPositions;
      if (dart.test(app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_MaterialPopupComponent_7_8].preferredPositions = currVal_10;
        changed = true;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = local_button;
      if (dart.test(app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_MaterialPopupComponent_7_8].source = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      if (changed) {
        this[_compView_7].markAsCheckOnce();
      }
      this[_NgIf_8_9].ngIf = _ctx.isEditorCreated;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_8].detectChangesInNestedViews();
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      if (firstCheck) {
        if (_ctx.popupClassName != null) {
          this[_compView_7].updateChildClassNonHtml(this[_el_7], _ctx.popupClassName);
        }
      }
      this[_compView_7].detectHostChanges(firstCheck);
      this[_compView_4].detectChanges();
      this[_compView_7].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_PopupSourceDirective_0_7].ngAfterViewInit();
          this[_MaterialPopupComponent_7_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_8].destroyNestedViews();
      this[_compView_4].destroyInternalState();
      this[_compView_7].destroyInternalState();
      this[_PopupSourceDirective_0_7].ngOnDestroy();
      this[_MaterialPopupComponent_7_8].ngOnDestroy();
    }
    [_handle_focus_0_1]($36event) {
      let _ctx = this.ctx;
      _ctx.initEditor();
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].onFocus(EventL().as($36event));
    }
    [_handle_click_0_3]($36event) {
      this[_ButtonDirective_0_5].instance.handleClick(MouseEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].onMouseInteraction();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_13 = _ctx.compact;
      if (dart.test(app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "compact", currVal_13);
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "disabled", currVal_14);
        this[_expr_14] = currVal_14;
      }
    }
    initComponentStyles() {
      let styles = material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._componentStyles;
      if (styles == null) {
        material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._componentStyles = styles = material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_date_range_picker$46template.styles$MaterialDateRangePickerComponent, material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.new = function(parentView, parentIndex) {
    this[_ButtonDirective_0_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
    this[_PopupSourceDirective_0_7] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_compView_4] = null;
    this[_DropdownButtonComponent_4_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_compView_7] = null;
    this[_appEl_7] = null;
    this[_MaterialPopupComponent_7_8] = null;
    this[__PopupHierarchy_7_11] = null;
    this[__PopupRef_7_12] = null;
    this[_appEl_8] = null;
    this[_NgIf_8_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_el_0] = null;
    this[_el_7] = null;
    material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-date-range-picker"));
  }).prototype = material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.prototype;
  dart.addTypeTests(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0);
  dart.addTypeCaches(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0);
  dart.setMethodSignature(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getMethods(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_focus_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_0_3]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getGetters(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    [_PopupHierarchy_7_11]: dart.dynamic,
    [_PopupRef_7_12]: dart.dynamic
  }));
  dart.setLibraryUri(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, L0);
  dart.setFieldSignature(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, () => ({
    __proto__: dart.getFields(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.__proto__),
    [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
    [_PopupSourceDirective_0_7]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_4]: dart.fieldType(dart.legacy(dropdown_button$46template.ViewDropdownButtonComponent0)),
    [_DropdownButtonComponent_4_5]: dart.fieldType(dart.legacy(dropdown_button.DropdownButtonComponent)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_compView_7]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
    [_appEl_7]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialPopupComponent_7_8]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
    [__PopupHierarchy_7_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_7_12]: dart.fieldType(dart.dynamic),
    [_appEl_8]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_8_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_1]: dart.fieldType(dart.legacy(core.String)),
    [_expr_2]: dart.fieldType(dart.legacy(core.String)),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.legacy(core.String)),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_14]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_7]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0, {
    /*material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_1 = dart.privateName(material_date_range_picker$46template, "_textBinding_1");
  material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1 = class _ViewMaterialDateRangePickerComponent1 extends app_view.AppView$(dart.legacy(material_date_range_picker.MaterialDateRangePickerComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "range-title");
      this.addShimC(HtmlElementL().as(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.rangeTitle));
    }
  };
  (material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.prototype;
  dart.addTypeTests(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1);
  dart.addTypeCaches(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1);
  dart.setLibraryUri(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1, L0);
  dart.setFieldSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1, () => ({
    __proto__: dart.getFields(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _compView_0 = dart.privateName(material_date_range_picker$46template, "_compView_0");
  var _NextPrevComponent_0_5 = dart.privateName(material_date_range_picker$46template, "_NextPrevComponent_0_5");
  var _expr_0 = dart.privateName(material_date_range_picker$46template, "_expr_0");
  material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2 = class _ViewMaterialDateRangePickerComponent2 extends app_view.AppView$(dart.legacy(material_date_range_picker.MaterialDateRangePickerComponent)) {
    build() {
      this[_compView_0] = new next_prev_buttons$46template.ViewNextPrevComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(_el_0, "next-prev-buttons");
      this.addShimC(_el_0);
      this[_NextPrevComponent_0_5] = new next_prev_buttons.NextPrevComponent.new(this[_compView_0]);
      this[_compView_0].create0(this[_NextPrevComponent_0_5]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        if (_ctx.model != null) {
          this[_NextPrevComponent_0_5].model = _ctx.model;
          changed = true;
        }
      }
      let currVal_0 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NextPrevComponent_0_5].disabled = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_NextPrevComponent_0_5].ngOnDestroy();
    }
  };
  (material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_NextPrevComponent_0_5] = null;
    this[_expr_0] = null;
    material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.prototype;
  dart.addTypeTests(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2);
  dart.addTypeCaches(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2);
  dart.setLibraryUri(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2, L0);
  dart.setFieldSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2, () => ({
    __proto__: dart.getFields(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(next_prev_buttons$46template.ViewNextPrevComponent0)),
    [_NextPrevComponent_0_5]: dart.fieldType(dart.legacy(next_prev_buttons.NextPrevComponent)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool))
  }));
  material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3 = class _ViewMaterialDateRangePickerComponent3 extends app_view.AppView$(dart.legacy(material_date_range_picker.MaterialDateRangePickerComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "comparison-title");
      this.addShimC(HtmlElementL().as(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.formattedComparison));
    }
  };
  (material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.prototype;
  dart.addTypeTests(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3);
  dart.addTypeCaches(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3);
  dart.setLibraryUri(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3, L0);
  dart.setFieldSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3, () => ({
    __proto__: dart.getFields(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _textBinding_9 = dart.privateName(material_date_range_picker$46template, "_textBinding_9");
  var _FocusTrapComponent_0_5 = dart.privateName(material_date_range_picker$46template, "_FocusTrapComponent_0_5");
  var _compView_2 = dart.privateName(material_date_range_picker$46template, "_compView_2");
  var _DateRangeEditorComponent_2_5 = dart.privateName(material_date_range_picker$46template, "_DateRangeEditorComponent_2_5");
  var _compView_6 = dart.privateName(material_date_range_picker$46template, "_compView_6");
  var _AcxDarkTheme_6_5 = dart.privateName(material_date_range_picker$46template, "_AcxDarkTheme_6_5");
  var _MaterialButtonComponent_6_6 = dart.privateName(material_date_range_picker$46template, "_MaterialButtonComponent_6_6");
  var _compView_8 = dart.privateName(material_date_range_picker$46template, "_compView_8");
  var _AcxDarkTheme_8_5 = dart.privateName(material_date_range_picker$46template, "_AcxDarkTheme_8_5");
  var _MaterialButtonComponent_8_6 = dart.privateName(material_date_range_picker$46template, "_MaterialButtonComponent_8_6");
  var _expr_5 = dart.privateName(material_date_range_picker$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_date_range_picker$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_date_range_picker$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_date_range_picker$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_date_range_picker$46template, "_expr_9");
  var _expr_12 = dart.privateName(material_date_range_picker$46template, "_expr_12");
  var _expr_15 = dart.privateName(material_date_range_picker$46template, "_expr_15");
  var _expr_16 = dart.privateName(material_date_range_picker$46template, "_expr_16");
  var _el_3 = dart.privateName(material_date_range_picker$46template, "_el_3");
  var C9;
  var C10;
  var _handle_trigger_6_0 = dart.privateName(material_date_range_picker$46template, "_handle_trigger_6_0");
  var _handle_trigger_8_0 = dart.privateName(material_date_range_picker$46template, "_handle_trigger_8_0");
  material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4 = class _ViewMaterialDateRangePickerComponent4 extends app_view.AppView$(dart.legacy(material_date_range_picker.MaterialDateRangePickerComponent)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new focus_trap$46template.ViewFocusTrapComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "popup-contents");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_FocusTrapComponent_0_5] = new focus_trap.FocusTrapComponent.new();
      let doc = html.document;
      let _el_1 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_1), "wrapper");
      this.addShimC(HtmlElementL().as(_el_1));
      this[_compView_2] = new date_range_editor$46template.ViewDateRangeEditorComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      _el_1[$append](_el_2);
      this.addShimC(_el_2);
      this[_DateRangeEditorComponent_2_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DateRangeEditorComponentL(), dart.wrapType(DateRangeEditorComponentL()), dart.fn(() => new date_range_editor.DateRangeEditorComponent.new(_el_2, DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex)), ManagedZoneL().as(this.parentView.parentView.injectorGet(dart.wrapType(ManagedZoneL()), this.parentView.viewData.parentIndex)), DateRangeEditorHostL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DateRangeEditorHostL()), this.parentView.viewData.parentIndex)), ClockL().as(this.parentView.parentView.injectorGetOptional(C9 || CT.C9, this.parentView.viewData.parentIndex)), ClockL().as(this.parentView.parentView.injectorGet(dart.wrapType(ClockL()), this.parentView.viewData.parentIndex))), VoidToDateRangeEditorComponentL())) : new date_range_editor.DateRangeEditorComponent.new(_el_2, DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex)), ManagedZoneL().as(this.parentView.parentView.injectorGet(dart.wrapType(ManagedZoneL()), this.parentView.viewData.parentIndex)), DateRangeEditorHostL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DateRangeEditorHostL()), this.parentView.viewData.parentIndex)), ClockL().as(this.parentView.parentView.injectorGetOptional(C9 || CT.C9, this.parentView.viewData.parentIndex)), ClockL().as(this.parentView.parentView.injectorGet(dart.wrapType(ClockL()), this.parentView.viewData.parentIndex)));
      this[_compView_2].create0(this[_DateRangeEditorComponent_2_5]);
      this.project(_el_1, 0);
      this[_el_3] = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(this[_el_3], "apply-bar");
      this.addShimC(this[_el_3]);
      let _el_4 = dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(_el_4, "separator");
      this.addShimC(_el_4);
      let _text_5 = dom_helpers.appendText(_el_4, " ");
      this[_compView_6] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootEl;
      this[_el_3][$append](_el_6);
      this.updateChildClassNonHtml(_el_6, "cancel");
      this.addShimC(_el_6);
      this[_AcxDarkTheme_6_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.injectorGetOptional(C10 || CT.C10, this.parentView.viewData.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.injectorGetOptional(C10 || CT.C10, this.parentView.viewData.parentIndex)));
      this[_MaterialButtonComponent_6_6] = new material_button.MaterialButtonComponent.new(_el_6, AcxDarkThemeL().as(this[_AcxDarkTheme_6_5]), this[_compView_6], null);
      let _text_7 = dom_helpers.createText(interpolate.interpolateString0(material_date_range_picker.MaterialDateRangePickerComponent.cancelButtonMsg));
      this[_compView_6].create(this[_MaterialButtonComponent_6_6], JSArrayOfObjectL().of([JSArrayOfTextL().of([_text_7])]));
      this[_compView_8] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 8);
      let _el_8 = this[_compView_8].rootEl;
      this[_el_3][$append](_el_8);
      this.updateChildClassNonHtml(_el_8, "apply");
      this.addShimC(_el_8);
      this[_AcxDarkTheme_8_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.injectorGetOptional(C10 || CT.C10, this.parentView.viewData.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.injectorGetOptional(C10 || CT.C10, this.parentView.viewData.parentIndex)));
      this[_MaterialButtonComponent_8_6] = new material_button.MaterialButtonComponent.new(_el_8, AcxDarkThemeL().as(this[_AcxDarkTheme_8_5]), this[_compView_8], null);
      this[_compView_8].create(this[_MaterialButtonComponent_8_6], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_9].element])]));
      this[_compView_0].create(this[_FocusTrapComponent_0_5], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_1])]));
      let subscription_0 = this[_DateRangeEditorComponent_2_5].presetRangeSelected.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'onRangeClicked')));
      let subscription_1 = this[_MaterialButtonComponent_6_6].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_trigger_6_0)));
      let subscription_2 = this[_MaterialButtonComponent_8_6].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_trigger_8_0)));
      this.init(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1, subscription_2]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (6 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_6_5];
        }
        if (token === dart.wrapType(MaterialButtonComponentL()) || token === dart.wrapType(ButtonDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialButtonComponent_6_6];
        }
      }
      if (8 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_8_5];
        }
        if (token === dart.wrapType(MaterialButtonComponentL()) || token === dart.wrapType(ButtonDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialButtonComponent_8_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        if (_ctx.model != null) {
          this[_DateRangeEditorComponent_2_5].model = _ctx.model;
        }
      }
      let currVal_2 = _ctx.movingStartMaintainsLength;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DateRangeEditorComponent_2_5].movingStartMaintainsLength = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.dateFormat;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_DateRangeEditorComponent_2_5].dateFormat = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.activeDateFormat;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_DateRangeEditorComponent_2_5].activeDateFormat = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.supportsClearRange;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_DateRangeEditorComponent_2_5].supportsClearRange = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.supportsCustomRange;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_DateRangeEditorComponent_2_5].supportsCustomRange = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.relativeDaysToToday;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_DateRangeEditorComponent_2_5].relativeDaysToToday = currVal_7;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.allowHighlightUpdates;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_DateRangeEditorComponent_2_5].allowHighlightUpdates = currVal_8;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.supportsComparison;
      if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_DateRangeEditorComponent_2_5].supportsComparison = currVal_9;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.compact;
      if (dart.test(app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_DateRangeEditorComponent_2_5].compact = currVal_10;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.supportsDaysInputs;
      if (dart.test(app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_DateRangeEditorComponent_2_5].supportsDaysInputs = currVal_11;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.presets;
      if (dart.test(app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_DateRangeEditorComponent_2_5].presets = currVal_12;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.minDate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        this[_DateRangeEditorComponent_2_5].minDate = currVal_13;
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = _ctx.maxDate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        this[_DateRangeEditorComponent_2_5].maxDate = currVal_14;
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = _ctx.isCalendarCreated;
      if (dart.test(app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        this[_DateRangeEditorComponent_2_5].isCalendarCreated = currVal_15;
        this[_expr_15] = currVal_15;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DateRangeEditorComponent_2_5].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_8].markAsCheckOnce();
      }
      let currVal_0 = _ctx.compact;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "compact", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_2].detectHostChanges(firstCheck);
      let currVal_16 = _ctx.applyBarVisible;
      if (dart.test(app_view_utils.checkBinding(this[_expr_16], currVal_16))) {
        dom_helpers.updateClassBinding(this[_el_3], "visible", currVal_16);
        this[_expr_16] = currVal_16;
      }
      this[_compView_6].detectHostChanges(firstCheck);
      this[_compView_8].detectHostChanges(firstCheck);
      this[_textBinding_9].updateText(interpolate.interpolateString0(_ctx.applyButtonMsg));
      this[_compView_0].detectChanges();
      this[_compView_2].detectChanges();
      this[_compView_6].detectChanges();
      this[_compView_8].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_DateRangeEditorComponent_2_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_compView_6].destroyInternalState();
      this[_compView_8].destroyInternalState();
      this[_FocusTrapComponent_0_5].ngOnDestroy();
    }
    [_handle_trigger_6_0]($36event) {
      let _ctx = this.ctx;
      _ctx.cancel();
      dart.dsend($36event, 'preventDefault', []);
    }
    [_handle_trigger_8_0]($36event) {
      let _ctx = this.ctx;
      _ctx.apply(UIEventL().as($36event));
      dart.dsend($36event, 'preventDefault', []);
    }
  };
  (material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.new = function(parentView, parentIndex) {
    this[_textBinding_9] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_FocusTrapComponent_0_5] = null;
    this[_compView_2] = null;
    this[_DateRangeEditorComponent_2_5] = null;
    this[_compView_6] = null;
    this[_AcxDarkTheme_6_5] = null;
    this[_MaterialButtonComponent_6_6] = null;
    this[_compView_8] = null;
    this[_AcxDarkTheme_8_5] = null;
    this[_MaterialButtonComponent_8_6] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    this[_expr_16] = null;
    this[_el_0] = null;
    this[_el_3] = null;
    material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.prototype;
  dart.addTypeTests(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4);
  dart.addTypeCaches(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4);
  dart.setMethodSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4, () => ({
    __proto__: dart.getMethods(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_trigger_6_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_trigger_8_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4, L0);
  dart.setFieldSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4, () => ({
    __proto__: dart.getFields(material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.__proto__),
    [_textBinding_9]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0]: dart.fieldType(dart.legacy(focus_trap$46template.ViewFocusTrapComponent0)),
    [_FocusTrapComponent_0_5]: dart.fieldType(dart.legacy(focus_trap.FocusTrapComponent)),
    [_compView_2]: dart.fieldType(dart.legacy(date_range_editor$46template.ViewDateRangeEditorComponent0)),
    [_DateRangeEditorComponent_2_5]: dart.fieldType(dart.legacy(date_range_editor.DateRangeEditorComponent)),
    [_compView_6]: dart.fieldType(dart.legacy(material_button$46template.ViewMaterialButtonComponent0)),
    [_AcxDarkTheme_6_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_6_6]: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    [_compView_8]: dart.fieldType(dart.legacy(material_button$46template.ViewMaterialButtonComponent0)),
    [_AcxDarkTheme_8_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_8_6]: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_6]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_7]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_8]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_9]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_10]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_11]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(dart.dynamic),
    [_expr_15]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_16]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.Element)),
    [_el_3]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _MaterialDateRangePickerComponent_0_5 = dart.privateName(material_date_range_picker$46template, "_MaterialDateRangePickerComponent_0_5");
  material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0 = class _ViewMaterialDateRangePickerComponentHost0 extends app_view.AppView$(dart.legacy(material_date_range_picker.MaterialDateRangePickerComponent)) {
    build() {
      this[_compView_0] = new material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialDateRangePickerComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialDateRangePickerComponentL(), dart.wrapType(MaterialDateRangePickerComponentL()), dart.fn(() => new material_date_range_picker.MaterialDateRangePickerComponent.new(ClockL().as(this.injectorGetOptional(C9 || CT.C9, this.viewData.parentIndex)), ClockL().as(this.injectorGet(dart.wrapType(ClockL()), this.viewData.parentIndex)), DatepickerConfigL().as(this.injectorGetOptional(dart.wrapType(DatepickerConfigL()), this.viewData.parentIndex)), null, PopupSizeProviderL().as(this.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this.rootEl, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex))), VoidToMaterialDateRangePickerComponentL())) : new material_date_range_picker.MaterialDateRangePickerComponent.new(ClockL().as(this.injectorGetOptional(C9 || CT.C9, this.viewData.parentIndex)), ClockL().as(this.injectorGet(dart.wrapType(ClockL()), this.viewData.parentIndex)), DatepickerConfigL().as(this.injectorGetOptional(dart.wrapType(DatepickerConfigL()), this.viewData.parentIndex)), null, PopupSizeProviderL().as(this.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this.rootEl, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialDateRangePickerComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialDateRangePickerComponentL()).new(0, this, this.rootEl, this[_MaterialDateRangePickerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(DateRangeEditorHostL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(PopupSizeProviderL())) && 0 === nodeIndex) {
        return this[_MaterialDateRangePickerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialDateRangePickerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialDateRangePickerComponent_0_5].ngOnDestroy();
    }
  };
  (material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDateRangePickerComponent_0_5] = null;
    material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.prototype;
  dart.addTypeTests(material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0);
  dart.addTypeCaches(material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0);
  dart.setMethodSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0, L0);
  dart.setFieldSignature(material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0, () => ({
    __proto__: dart.getFields(material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_date_range_picker$46template.ViewMaterialDateRangePickerComponent0)),
    [_MaterialDateRangePickerComponent_0_5]: dart.fieldType(dart.legacy(material_date_range_picker.MaterialDateRangePickerComponent))
  }));
  material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent1 = function viewFactory_MaterialDateRangePickerComponent1(parentView, parentIndex) {
    return new material_date_range_picker$46template._ViewMaterialDateRangePickerComponent1.new(parentView, parentIndex);
  };
  material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent2 = function viewFactory_MaterialDateRangePickerComponent2(parentView, parentIndex) {
    return new material_date_range_picker$46template._ViewMaterialDateRangePickerComponent2.new(parentView, parentIndex);
  };
  material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent3 = function viewFactory_MaterialDateRangePickerComponent3(parentView, parentIndex) {
    return new material_date_range_picker$46template._ViewMaterialDateRangePickerComponent3.new(parentView, parentIndex);
  };
  material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponent4 = function viewFactory_MaterialDateRangePickerComponent4(parentView, parentIndex) {
    return new material_date_range_picker$46template._ViewMaterialDateRangePickerComponent4.new(parentView, parentIndex);
  };
  material_date_range_picker$46template.viewFactory_MaterialDateRangePickerComponentHost0 = function viewFactory_MaterialDateRangePickerComponentHost0(parentView, parentIndex) {
    return new material_date_range_picker$46template._ViewMaterialDateRangePickerComponentHost0.new(parentView, parentIndex);
  };
  material_date_range_picker$46template.initReflector = function initReflector() {
    if (dart.test(material_date_range_picker$46template._visited)) {
      return;
    }
    material_date_range_picker$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialDateRangePickerComponentL()), material_date_range_picker$46template.MaterialDateRangePickerComponentNgFactory);
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    deferred_content$46template.initReflector();
    focus$46template.initReflector();
    focus_trap$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    has_disabled$46template.initReflector();
    alignment$46template.initReflector();
    popup$46template.initReflector();
    material_button$46template.initReflector();
    comparison$46template.initReflector();
    comparison_option$46template.initReflector();
    config$46template.initReflector();
    date_range_editor$46template.initReflector();
    date_range_editor_host$46template.initReflector();
    model$46template.initReflector();
    module$46template.initReflector();
    next_prev_buttons$46template.initReflector();
    preset$46template.initReflector();
    range$46template.initReflector();
    material_popup$46template.initReflector();
    dropdown_button$46template.initReflector();
    date$46template.initReflector();
    date_formatter$46template.initReflector();
    observable$46template.initReflector();
    css$46template.initReflector();
    dom_service$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(material_date_range_picker$46template, {
    get MaterialDateRangePickerComponentNgFactory() {
      return material_date_range_picker$46template._MaterialDateRangePickerComponentNgFactory;
    }
  });
  var C12;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C11;
  dart.defineLazy(material_date_range_picker$46template, {
    /*material_date_range_picker$46template.styles$MaterialDateRangePickerComponent*/get styles$MaterialDateRangePickerComponent() {
      return [material_date_range_picker$46scss$46css$46shim.styles];
    },
    /*material_date_range_picker$46template._MaterialDateRangePickerComponentNgFactory*/get _MaterialDateRangePickerComponentNgFactory() {
      return C11 || CT.C11;
    },
    /*material_date_range_picker$46template.styles$MaterialDateRangePickerComponentHost*/get styles$MaterialDateRangePickerComponentHost() {
      return C1 || CT.C1;
    },
    /*material_date_range_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/material_date_range_picker.template", {
    "package:angular_components/material_datepicker/material_date_range_picker.template.dart": material_date_range_picker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_date_range_picker.template.dart"],"names":[],"mappings":"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","file":"material_date_range_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_date_range_picker$46template: material_date_range_picker$46template
  };
}));

//# sourceMappingURL=material_date_range_picker.template.ddc.js.map
