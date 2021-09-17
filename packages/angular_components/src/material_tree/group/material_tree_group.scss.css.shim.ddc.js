define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/src/runtime/queries', 'packages/angular_components/src/material_tree/group/material_tree_group', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular_components/material_radio/material_radio.template', 'packages/angular_components/material_radio/material_radio', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/base_material_input'], (function load__packages__angular_components__src__material_tree__group__material_tree_group_scss_css_shim(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular_components__material_popup__material_popup, packages__angular__src__core__change_detection__change_detection, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__content__deferred_content, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular__src__runtime__queries, packages__angular_components__src__material_tree__group__material_tree_group, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular__angular$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__focus__focus$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__mixins__material_dropdown_base$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_container$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__selection__selection_options$46template, packages__angular_components__model__ui__has_factory$46template, packages__angular_components__model__ui__has_renderer$46template, packages__angular_components__utils__angular__css__css$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__model__selection__selection_options, packages__angular_components__dynamic_component__dynamic_component$46template, packages__angular_components__dynamic_component__dynamic_component, packages__angular_components__material_radio__material_radio$46template, packages__angular_components__material_radio__material_radio, packages__angular_components__interfaces__has_disabled, packages__angular_components__material_checkbox__material_checkbox$46template, packages__angular_components__material_checkbox__material_checkbox, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__utils__async__async$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__button_decorator__button_decorator, packages__angular_components__material_input__material_input, packages__angular_components__material_input__material_input$46template, packages__angular_components__material_input__deferred_validator, packages__angular_forms__src__directives, packages__angular_components__material_input__material_input_default_value_accessor, packages__angular_components__material_input__base_material_input) {
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
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const dynamic_component_loader = packages__angular__src__bootstrap__modules.src__core__linker__dynamic_component_loader;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const deferred_content = packages__angular_components__content__deferred_content.content__deferred_content;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const queries = packages__angular__src__runtime__queries.src__runtime__queries;
  const material_tree_filter = packages__angular_components__src__material_tree__group__material_tree_group.src__material_tree__material_tree_filter;
  const material_tree_dropdown = packages__angular_components__src__material_tree__group__material_tree_group.src__material_tree__material_tree_dropdown;
  const material_tree_root = packages__angular_components__src__material_tree__group__material_tree_group.src__material_tree__material_tree_root;
  const material_tree_impl = packages__angular_components__src__material_tree__group__material_tree_group.src__material_tree__material_tree_impl;
  const material_tree_group = packages__angular_components__src__material_tree__group__material_tree_group.src__material_tree__group__material_tree_group;
  const material_tree_group_flat = packages__angular_components__src__material_tree__group__material_tree_group.src__material_tree__group__material_tree_group_flat;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const material_dropdown_base$46template = packages__angular_components__mixins__material_dropdown_base$46template.mixins__material_dropdown_base$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_container$46template = packages__angular_components__model__selection__selection_container$46template.model__selection__selection_container$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const selection_options$46template = packages__angular_components__model__selection__selection_options$46template.model__selection__selection_options$46template;
  const has_factory$46template = packages__angular_components__model__ui__has_factory$46template.model__ui__has_factory$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const css$46template = packages__angular_components__utils__angular__css__css$46template.utils__angular__css__css$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const selection_options = packages__angular_components__model__selection__selection_options.model__selection__selection_options;
  const dynamic_component$46template = packages__angular_components__dynamic_component__dynamic_component$46template.dynamic_component__dynamic_component$46template;
  const dynamic_component = packages__angular_components__dynamic_component__dynamic_component.dynamic_component__dynamic_component;
  const material_radio_group$46template = packages__angular_components__material_radio__material_radio$46template.material_radio__material_radio_group$46template;
  const material_radio$46template = packages__angular_components__material_radio__material_radio$46template.material_radio__material_radio$46template;
  const material_radio_group = packages__angular_components__material_radio__material_radio.material_radio__material_radio_group;
  const material_radio = packages__angular_components__material_radio__material_radio.material_radio__material_radio;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const material_checkbox$46template = packages__angular_components__material_checkbox__material_checkbox$46template.material_checkbox__material_checkbox$46template;
  const material_checkbox = packages__angular_components__material_checkbox__material_checkbox.material_checkbox__material_checkbox;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const async$46template = packages__angular_components__utils__async__async$46template.utils__async__async$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const material_input$46template = packages__angular_components__material_input__material_input$46template.material_input__material_input$46template;
  const deferred_validator = packages__angular_components__material_input__deferred_validator.material_input__deferred_validator;
  const ng_model = packages__angular_forms__src__directives.src__directives__ng_model;
  const ng_control = packages__angular_forms__src__directives.src__directives__ng_control;
  const material_input_default_value_accessor = packages__angular_components__material_input__material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  var material_tree_dropdown$46template = Object.create(dart.library);
  var material_tree_impl$46template = Object.create(dart.library);
  var material_tree_group_flat$46template = Object.create(dart.library);
  var material_tree_group_flat_check$46scss$46css$46shim = Object.create(dart.library);
  var material_tree_group_flat_radio$46scss$46css$46shim = Object.create(dart.library);
  var material_tree_group_flat_list$46scss$46css$46shim = Object.create(dart.library);
  var material_tree_root$46template = Object.create(dart.library);
  var material_tree_node$46template = Object.create(dart.library);
  var material_tree_expand_state$46template = Object.create(dart.library);
  var material_tree_group$46template = Object.create(dart.library);
  var material_tree_group$46scss$46css$46shim = Object.create(dart.library);
  var material_tree_rendering_options$46template = Object.create(dart.library);
  var material_tree_filter$46template = Object.create(dart.library);
  var material_tree_dropdown$46scss$46css$46shim = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  var $addEventListener = dartx.addEventListener;
  var $setProperty = dartx.setProperty;
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
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var AppViewOfObjectL = () => (AppViewOfObjectL = dart.constFn(app_view.AppView$(ObjectL())))();
  var AppViewLOfObjectL = () => (AppViewLOfObjectL = dart.constFn(dart.legacy(AppViewOfObjectL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLOfObjectLAndintLToAppViewLOfvoid = () => (AppViewLOfObjectLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewLOfObjectL(), intL()])))();
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
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var MaterialTreeFilterComponentL = () => (MaterialTreeFilterComponentL = dart.constFn(dart.legacy(material_tree_filter.MaterialTreeFilterComponent)))();
  var _ViewMaterialTreeDropdownComponent3L = () => (_ViewMaterialTreeDropdownComponent3L = dart.constFn(dart.legacy(material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3)))();
  var JSArrayOfMaterialTreeFilterComponentL = () => (JSArrayOfMaterialTreeFilterComponentL = dart.constFn(_interceptors.JSArray$(MaterialTreeFilterComponentL())))();
  var ListOfMaterialTreeFilterComponentL = () => (ListOfMaterialTreeFilterComponentL = dart.constFn(core.List$(MaterialTreeFilterComponentL())))();
  var ListLOfMaterialTreeFilterComponentL = () => (ListLOfMaterialTreeFilterComponentL = dart.constFn(dart.legacy(ListOfMaterialTreeFilterComponentL())))();
  var _ViewMaterialTreeDropdownComponent3LToListLOfMaterialTreeFilterComponentL = () => (_ViewMaterialTreeDropdownComponent3LToListLOfMaterialTreeFilterComponentL = dart.constFn(dart.fnType(ListLOfMaterialTreeFilterComponentL(), [_ViewMaterialTreeDropdownComponent3L()])))();
  var _ViewMaterialTreeDropdownComponent4L = () => (_ViewMaterialTreeDropdownComponent4L = dart.constFn(dart.legacy(material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4)))();
  var _ViewMaterialTreeDropdownComponent4LToListLOfMaterialTreeFilterComponentL = () => (_ViewMaterialTreeDropdownComponent4LToListLOfMaterialTreeFilterComponentL = dart.constFn(dart.fnType(ListLOfMaterialTreeFilterComponentL(), [_ViewMaterialTreeDropdownComponent4L()])))();
  var JSArrayOfListLOfMaterialTreeFilterComponentL = () => (JSArrayOfListLOfMaterialTreeFilterComponentL = dart.constFn(_interceptors.JSArray$(ListLOfMaterialTreeFilterComponentL())))();
  var MaterialTreeRootL = () => (MaterialTreeRootL = dart.constFn(dart.legacy(material_tree_root.MaterialTreeRoot)))();
  var VoidToMaterialTreeFilterComponentL = () => (VoidToMaterialTreeFilterComponentL = dart.constFn(dart.fnType(MaterialTreeFilterComponentL(), [])))();
  var ViewMaterialTreeDropdownComponent0L = () => (ViewMaterialTreeDropdownComponent0L = dart.constFn(dart.legacy(material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0)))();
  var MaterialTreeComponentL = () => (MaterialTreeComponentL = dart.constFn(dart.legacy(material_tree_impl.MaterialTreeComponent)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MaterialTreeDropdownComponentL = () => (MaterialTreeDropdownComponentL = dart.constFn(dart.legacy(material_tree_dropdown.MaterialTreeDropdownComponent)))();
  var ComponentFactoryOfMaterialTreeDropdownComponentL = () => (ComponentFactoryOfMaterialTreeDropdownComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialTreeDropdownComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var AppViewLAndintLToAppViewLOfMaterialTreeDropdownComponentLOfTL = () => (AppViewLAndintLToAppViewLOfMaterialTreeDropdownComponentLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialTreeDropdownComponentOfTL = () => (MaterialTreeDropdownComponentOfTL = dart.constFn(material_tree_dropdown.MaterialTreeDropdownComponent$(TL())))();
    var MaterialTreeDropdownComponentLOfTL = () => (MaterialTreeDropdownComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeDropdownComponentOfTL())))();
    var AppViewOfMaterialTreeDropdownComponentLOfTL = () => (AppViewOfMaterialTreeDropdownComponentLOfTL = dart.constFn(app_view.AppView$(MaterialTreeDropdownComponentLOfTL())))();
    var AppViewLOfMaterialTreeDropdownComponentLOfTL = () => (AppViewLOfMaterialTreeDropdownComponentLOfTL = dart.constFn(dart.legacy(AppViewOfMaterialTreeDropdownComponentLOfTL())))();
    return [AppViewLOfMaterialTreeDropdownComponentLOfTL(), [AppViewL(), intL()]];
  })))();
  var MaterialTreeGroupComponentL = () => (MaterialTreeGroupComponentL = dart.constFn(dart.legacy(material_tree_group.MaterialTreeGroupComponent)))();
  var _ViewMaterialTreeComponent1L = () => (_ViewMaterialTreeComponent1L = dart.constFn(dart.legacy(material_tree_impl$46template._ViewMaterialTreeComponent1)))();
  var _ViewMaterialTreeComponent2L = () => (_ViewMaterialTreeComponent2L = dart.constFn(dart.legacy(material_tree_impl$46template._ViewMaterialTreeComponent2)))();
  var JSArrayOfMaterialTreeGroupComponentL = () => (JSArrayOfMaterialTreeGroupComponentL = dart.constFn(_interceptors.JSArray$(MaterialTreeGroupComponentL())))();
  var ListOfMaterialTreeGroupComponentL = () => (ListOfMaterialTreeGroupComponentL = dart.constFn(core.List$(MaterialTreeGroupComponentL())))();
  var ListLOfMaterialTreeGroupComponentL = () => (ListLOfMaterialTreeGroupComponentL = dart.constFn(dart.legacy(ListOfMaterialTreeGroupComponentL())))();
  var _ViewMaterialTreeComponent2LToListLOfMaterialTreeGroupComponentL = () => (_ViewMaterialTreeComponent2LToListLOfMaterialTreeGroupComponentL = dart.constFn(dart.fnType(ListLOfMaterialTreeGroupComponentL(), [_ViewMaterialTreeComponent2L()])))();
  var _ViewMaterialTreeComponent1LToListLOfMaterialTreeGroupComponentL = () => (_ViewMaterialTreeComponent1LToListLOfMaterialTreeGroupComponentL = dart.constFn(dart.fnType(ListLOfMaterialTreeGroupComponentL(), [_ViewMaterialTreeComponent1L()])))();
  var ViewMaterialTreeComponent0L = () => (ViewMaterialTreeComponent0L = dart.constFn(dart.legacy(material_tree_impl$46template.ViewMaterialTreeComponent0)))();
  var MaterialTreeGroupFlatListComponentL = () => (MaterialTreeGroupFlatListComponentL = dart.constFn(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatListComponent)))();
  var MaterialTreeGroupFlatRadioComponentL = () => (MaterialTreeGroupFlatRadioComponentL = dart.constFn(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent)))();
  var MaterialTreeGroupFlatCheckComponentL = () => (MaterialTreeGroupFlatCheckComponentL = dart.constFn(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent)))();
  var ComponentFactoryOfMaterialTreeComponentL = () => (ComponentFactoryOfMaterialTreeComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialTreeComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialTreeComponentLOfTL = () => (AppViewLAndintLToAppViewLOfMaterialTreeComponentLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialTreeComponentOfTL = () => (MaterialTreeComponentOfTL = dart.constFn(material_tree_impl.MaterialTreeComponent$(TL())))();
    var MaterialTreeComponentLOfTL = () => (MaterialTreeComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeComponentOfTL())))();
    var AppViewOfMaterialTreeComponentLOfTL = () => (AppViewOfMaterialTreeComponentLOfTL = dart.constFn(app_view.AppView$(MaterialTreeComponentLOfTL())))();
    var AppViewLOfMaterialTreeComponentLOfTL = () => (AppViewLOfMaterialTreeComponentLOfTL = dart.constFn(dart.legacy(AppViewOfMaterialTreeComponentLOfTL())))();
    return [AppViewLOfMaterialTreeComponentLOfTL(), [AppViewL(), intL()]];
  })))();
  var DynamicComponentL = () => (DynamicComponentL = dart.constFn(dart.legacy(dynamic_component.DynamicComponent)))();
  var SlowComponentLoaderL = () => (SlowComponentLoaderL = dart.constFn(dart.legacy(dynamic_component_loader.SlowComponentLoader)))();
  var VoidToDynamicComponentL = () => (VoidToDynamicComponentL = dart.constFn(dart.fnType(DynamicComponentL(), [])))();
  var MaterialRadioGroupComponentL = () => (MaterialRadioGroupComponentL = dart.constFn(dart.legacy(material_radio_group.MaterialRadioGroupComponent)))();
  var VoidToMaterialRadioGroupComponentL = () => (VoidToMaterialRadioGroupComponentL = dart.constFn(dart.fnType(MaterialRadioGroupComponentL(), [])))();
  var ViewContainerL = () => (ViewContainerL = dart.constFn(dart.legacy(view_container.ViewContainer)))();
  var JSArrayOfViewContainerL = () => (JSArrayOfViewContainerL = dart.constFn(_interceptors.JSArray$(ViewContainerL())))();
  var MaterialRadioComponentL = () => (MaterialRadioComponentL = dart.constFn(dart.legacy(material_radio.MaterialRadioComponent)))();
  var _ViewMaterialTreeGroupFlatRadioComponent1L = () => (_ViewMaterialTreeGroupFlatRadioComponent1L = dart.constFn(dart.legacy(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1)))();
  var JSArrayOfMaterialRadioComponentL = () => (JSArrayOfMaterialRadioComponentL = dart.constFn(_interceptors.JSArray$(MaterialRadioComponentL())))();
  var ListOfMaterialRadioComponentL = () => (ListOfMaterialRadioComponentL = dart.constFn(core.List$(MaterialRadioComponentL())))();
  var ListLOfMaterialRadioComponentL = () => (ListLOfMaterialRadioComponentL = dart.constFn(dart.legacy(ListOfMaterialRadioComponentL())))();
  var _ViewMaterialTreeGroupFlatRadioComponent1LToListLOfMaterialRadioComponentL = () => (_ViewMaterialTreeGroupFlatRadioComponent1LToListLOfMaterialRadioComponentL = dart.constFn(dart.fnType(ListLOfMaterialRadioComponentL(), [_ViewMaterialTreeGroupFlatRadioComponent1L()])))();
  var ViewMaterialTreeGroupFlatRadioComponent0L = () => (ViewMaterialTreeGroupFlatRadioComponent0L = dart.constFn(dart.legacy(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ComponentFactoryOfMaterialTreeGroupFlatListComponentL = () => (ComponentFactoryOfMaterialTreeGroupFlatListComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialTreeGroupFlatListComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialTreeGroupFlatListComponentLOfTL = () => (AppViewLAndintLToAppViewLOfMaterialTreeGroupFlatListComponentLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialTreeGroupFlatListComponentOfTL = () => (MaterialTreeGroupFlatListComponentOfTL = dart.constFn(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(TL())))();
    var MaterialTreeGroupFlatListComponentLOfTL = () => (MaterialTreeGroupFlatListComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeGroupFlatListComponentOfTL())))();
    var AppViewOfMaterialTreeGroupFlatListComponentLOfTL = () => (AppViewOfMaterialTreeGroupFlatListComponentLOfTL = dart.constFn(app_view.AppView$(MaterialTreeGroupFlatListComponentLOfTL())))();
    var AppViewLOfMaterialTreeGroupFlatListComponentLOfTL = () => (AppViewLOfMaterialTreeGroupFlatListComponentLOfTL = dart.constFn(dart.legacy(AppViewOfMaterialTreeGroupFlatListComponentLOfTL())))();
    return [AppViewLOfMaterialTreeGroupFlatListComponentLOfTL(), [AppViewL(), intL()]];
  })))();
  var ComponentFactoryOfMaterialTreeGroupFlatRadioComponentL = () => (ComponentFactoryOfMaterialTreeGroupFlatRadioComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialTreeGroupFlatRadioComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialTreeGroupFlatRadioComponentLOfTL = () => (AppViewLAndintLToAppViewLOfMaterialTreeGroupFlatRadioComponentLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialTreeGroupFlatRadioComponentOfTL = () => (MaterialTreeGroupFlatRadioComponentOfTL = dart.constFn(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(TL())))();
    var MaterialTreeGroupFlatRadioComponentLOfTL = () => (MaterialTreeGroupFlatRadioComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeGroupFlatRadioComponentOfTL())))();
    var AppViewOfMaterialTreeGroupFlatRadioComponentLOfTL = () => (AppViewOfMaterialTreeGroupFlatRadioComponentLOfTL = dart.constFn(app_view.AppView$(MaterialTreeGroupFlatRadioComponentLOfTL())))();
    var AppViewLOfMaterialTreeGroupFlatRadioComponentLOfTL = () => (AppViewLOfMaterialTreeGroupFlatRadioComponentLOfTL = dart.constFn(dart.legacy(AppViewOfMaterialTreeGroupFlatRadioComponentLOfTL())))();
    return [AppViewLOfMaterialTreeGroupFlatRadioComponentLOfTL(), [AppViewL(), intL()]];
  })))();
  var ComponentFactoryOfMaterialTreeGroupFlatCheckComponentL = () => (ComponentFactoryOfMaterialTreeGroupFlatCheckComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialTreeGroupFlatCheckComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialTreeGroupFlatCheckComponentLOfTL = () => (AppViewLAndintLToAppViewLOfMaterialTreeGroupFlatCheckComponentLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialTreeGroupFlatCheckComponentOfTL = () => (MaterialTreeGroupFlatCheckComponentOfTL = dart.constFn(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(TL())))();
    var MaterialTreeGroupFlatCheckComponentLOfTL = () => (MaterialTreeGroupFlatCheckComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeGroupFlatCheckComponentOfTL())))();
    var AppViewOfMaterialTreeGroupFlatCheckComponentLOfTL = () => (AppViewOfMaterialTreeGroupFlatCheckComponentLOfTL = dart.constFn(app_view.AppView$(MaterialTreeGroupFlatCheckComponentLOfTL())))();
    var AppViewLOfMaterialTreeGroupFlatCheckComponentLOfTL = () => (AppViewLOfMaterialTreeGroupFlatCheckComponentLOfTL = dart.constFn(dart.legacy(AppViewOfMaterialTreeGroupFlatCheckComponentLOfTL())))();
    return [AppViewLOfMaterialTreeGroupFlatCheckComponentLOfTL(), [AppViewL(), intL()]];
  })))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var OptionGroupL = () => (OptionGroupL = dart.constFn(dart.legacy(selection_options.OptionGroup)))();
  var AnchorElementL = () => (AnchorElementL = dart.constFn(dart.legacy(html.AnchorElement)))();
  var ComponentFactoryOfMaterialTreeGroupComponentL = () => (ComponentFactoryOfMaterialTreeGroupComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialTreeGroupComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialTreeGroupComponentLOfTL = () => (AppViewLAndintLToAppViewLOfMaterialTreeGroupComponentLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialTreeGroupComponentOfTL = () => (MaterialTreeGroupComponentOfTL = dart.constFn(material_tree_group.MaterialTreeGroupComponent$(TL())))();
    var MaterialTreeGroupComponentLOfTL = () => (MaterialTreeGroupComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeGroupComponentOfTL())))();
    var AppViewOfMaterialTreeGroupComponentLOfTL = () => (AppViewOfMaterialTreeGroupComponentLOfTL = dart.constFn(app_view.AppView$(MaterialTreeGroupComponentLOfTL())))();
    var AppViewLOfMaterialTreeGroupComponentLOfTL = () => (AppViewLOfMaterialTreeGroupComponentLOfTL = dart.constFn(dart.legacy(AppViewOfMaterialTreeGroupComponentLOfTL())))();
    return [AppViewLOfMaterialTreeGroupComponentLOfTL(), [AppViewL(), intL()]];
  })))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var MaterialInputComponentL = () => (MaterialInputComponentL = dart.constFn(dart.legacy(material_input.MaterialInputComponent)))();
  var _ViewMaterialTreeFilterComponent1L = () => (_ViewMaterialTreeFilterComponent1L = dart.constFn(dart.legacy(material_tree_filter$46template._ViewMaterialTreeFilterComponent1)))();
  var JSArrayOfMaterialInputComponentL = () => (JSArrayOfMaterialInputComponentL = dart.constFn(_interceptors.JSArray$(MaterialInputComponentL())))();
  var ListOfMaterialInputComponentL = () => (ListOfMaterialInputComponentL = dart.constFn(core.List$(MaterialInputComponentL())))();
  var ListLOfMaterialInputComponentL = () => (ListLOfMaterialInputComponentL = dart.constFn(dart.legacy(ListOfMaterialInputComponentL())))();
  var _ViewMaterialTreeFilterComponent1LToListLOfMaterialInputComponentL = () => (_ViewMaterialTreeFilterComponent1LToListLOfMaterialInputComponentL = dart.constFn(dart.fnType(ListLOfMaterialInputComponentL(), [_ViewMaterialTreeFilterComponent1L()])))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var DeferredValidatorL = () => (DeferredValidatorL = dart.constFn(dart.legacy(deferred_validator.DeferredValidator)))();
  var NgModelL = () => (NgModelL = dart.constFn(dart.legacy(ng_model.NgModel)))();
  var NgControlL = () => (NgControlL = dart.constFn(dart.legacy(ng_control.NgControl)))();
  var BaseMaterialInputL = () => (BaseMaterialInputL = dart.constFn(dart.legacy(base_material_input.BaseMaterialInput)))();
  var ViewMaterialTreeFilterComponent0L = () => (ViewMaterialTreeFilterComponent0L = dart.constFn(dart.legacy(material_tree_filter$46template.ViewMaterialTreeFilterComponent0)))();
  var ComponentRefOfMaterialTreeFilterComponentL = () => (ComponentRefOfMaterialTreeFilterComponentL = dart.constFn(component_factory.ComponentRef$(MaterialTreeFilterComponentL())))();
  var ComponentFactoryOfMaterialTreeFilterComponentL = () => (ComponentFactoryOfMaterialTreeFilterComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialTreeFilterComponentL())))();
  var AppViewOfMaterialTreeFilterComponentL = () => (AppViewOfMaterialTreeFilterComponentL = dart.constFn(app_view.AppView$(MaterialTreeFilterComponentL())))();
  var AppViewLOfMaterialTreeFilterComponentL = () => (AppViewLOfMaterialTreeFilterComponentL = dart.constFn(dart.legacy(AppViewOfMaterialTreeFilterComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialTreeFilterComponentL = () => (AppViewLAndintLToAppViewLOfMaterialTreeFilterComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialTreeFilterComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L2 = "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart";
  var L4 = "package:angular_components/src/material_tree/material_tree_filter.template.dart";
  var L3 = "package:angular_components/src/material_tree/group/material_tree_group.template.dart";
  var L0 = "package:angular_components/src/material_tree/material_tree_dropdown.template.dart";
  var L1 = "package:angular_components/src/material_tree/material_tree_impl.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: OpaqueTokenOfListLOfRelativePositionL().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    },
    get C4() {
      return C4 = dart.constList([], ObjectL());
    },
    get C7() {
      return C7 = dart.fn(material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponentHost0, AppViewLAndintLToAppViewLOfMaterialTreeDropdownComponentLOfTL());
    },
    get C6() {
      return C6 = dart.const(dart.gbind(C7 || CT.C7, dart.dynamic));
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ComponentFactoryOfMaterialTreeDropdownComponentL().prototype,
        [ComponentFactory__viewFactory]: C6 || CT.C6,
        [ComponentFactory_selector]: "material-tree-dropdown"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "MaterialTreeGroupComponent_materialTreeLeftPaddingToken"
      });
    },
    get C11() {
      return C11 = dart.fn(material_tree_impl$46template.viewFactory_MaterialTreeComponentHost0, AppViewLAndintLToAppViewLOfMaterialTreeComponentLOfTL());
    },
    get C10() {
      return C10 = dart.const(dart.gbind(C11 || CT.C11, dart.dynamic));
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ComponentFactoryOfMaterialTreeComponentL().prototype,
        [ComponentFactory__viewFactory]: C10 || CT.C10,
        [ComponentFactory_selector]: "material-tree"
      });
    },
    get C14() {
      return C14 = dart.fn(material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponentHost0, AppViewLAndintLToAppViewLOfMaterialTreeGroupFlatListComponentLOfTL());
    },
    get C13() {
      return C13 = dart.const(dart.gbind(C14 || CT.C14, dart.dynamic));
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ComponentFactoryOfMaterialTreeGroupFlatListComponentL().prototype,
        [ComponentFactory__viewFactory]: C13 || CT.C13,
        [ComponentFactory_selector]: "material-tree-group-flat-list"
      });
    },
    get C17() {
      return C17 = dart.fn(material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponentHost0, AppViewLAndintLToAppViewLOfMaterialTreeGroupFlatRadioComponentLOfTL());
    },
    get C16() {
      return C16 = dart.const(dart.gbind(C17 || CT.C17, dart.dynamic));
    },
    get C15() {
      return C15 = dart.const({
        __proto__: ComponentFactoryOfMaterialTreeGroupFlatRadioComponentL().prototype,
        [ComponentFactory__viewFactory]: C16 || CT.C16,
        [ComponentFactory_selector]: "material-tree-group-flat-radio"
      });
    },
    get C20() {
      return C20 = dart.fn(material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponentHost0, AppViewLAndintLToAppViewLOfMaterialTreeGroupFlatCheckComponentLOfTL());
    },
    get C19() {
      return C19 = dart.const(dart.gbind(C20 || CT.C20, dart.dynamic));
    },
    get C18() {
      return C18 = dart.const({
        __proto__: ComponentFactoryOfMaterialTreeGroupFlatCheckComponentL().prototype,
        [ComponentFactory__viewFactory]: C19 || CT.C19,
        [ComponentFactory_selector]: "material-tree-group-flat-check"
      });
    },
    get C23() {
      return C23 = dart.fn(material_tree_group$46template.viewFactory_MaterialTreeGroupComponentHost0, AppViewLAndintLToAppViewLOfMaterialTreeGroupComponentLOfTL());
    },
    get C22() {
      return C22 = dart.const(dart.gbind(C23 || CT.C23, dart.dynamic));
    },
    get C21() {
      return C21 = dart.const({
        __proto__: ComponentFactoryOfMaterialTreeGroupComponentL().prototype,
        [ComponentFactory__viewFactory]: C22 || CT.C22,
        [ComponentFactory_selector]: "material-tree-group"
      });
    },
    get C24() {
      return C24 = dart.fn(material_tree_filter$46template.viewFactory_MaterialTreeFilterComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C25() {
      return C25 = dart.const({
        __proto__: opaque_token.MultiToken.prototype,
        [OpaqueToken__uniqueName]: "NgValidators"
      });
    },
    get C27() {
      return C27 = dart.fn(material_tree_filter$46template.viewFactory_MaterialTreeFilterComponentHost0, AppViewLAndintLToAppViewLOfMaterialTreeFilterComponentL());
    },
    get C26() {
      return C26 = dart.const({
        __proto__: ComponentFactoryOfMaterialTreeFilterComponentL().prototype,
        [ComponentFactory__viewFactory]: C27 || CT.C27,
        [ComponentFactory_selector]: "material-tree-filter"
      });
    }
  }, false);
  var _query_MaterialTreeFilterComponent_1_0_isDirty = dart.privateName(material_tree_dropdown$46template, "_query_MaterialTreeFilterComponent_1_0_isDirty");
  var _KeyboardOnlyFocusIndicatorDirective_0_5 = dart.privateName(material_tree_dropdown$46template, "_KeyboardOnlyFocusIndicatorDirective_0_5");
  var _PopupSourceDirective_0_6 = dart.privateName(material_tree_dropdown$46template, "_PopupSourceDirective_0_6");
  var _appEl_1 = dart.privateName(material_tree_dropdown$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(material_tree_dropdown$46template, "_NgIf_1_9");
  var _appEl_2 = dart.privateName(material_tree_dropdown$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(material_tree_dropdown$46template, "_NgIf_2_9");
  var _appEl_3 = dart.privateName(material_tree_dropdown$46template, "_appEl_3");
  var _NgIf_3_9 = dart.privateName(material_tree_dropdown$46template, "_NgIf_3_9");
  var _compView_4 = dart.privateName(material_tree_dropdown$46template, "_compView_4");
  var _appEl_4 = dart.privateName(material_tree_dropdown$46template, "_appEl_4");
  var _MaterialPopupComponent_4_8 = dart.privateName(material_tree_dropdown$46template, "_MaterialPopupComponent_4_8");
  var __PopupHierarchy_4_11 = dart.privateName(material_tree_dropdown$46template, "__PopupHierarchy_4_11");
  var __PopupRef_4_12 = dart.privateName(material_tree_dropdown$46template, "__PopupRef_4_12");
  var _appEl_6 = dart.privateName(material_tree_dropdown$46template, "_appEl_6");
  var _NgIf_6_9 = dart.privateName(material_tree_dropdown$46template, "_NgIf_6_9");
  var _appEl_7 = dart.privateName(material_tree_dropdown$46template, "_appEl_7");
  var _DeferredContentDirective_7_9 = dart.privateName(material_tree_dropdown$46template, "_DeferredContentDirective_7_9");
  var _expr_0 = dart.privateName(material_tree_dropdown$46template, "_expr_0");
  var _expr_6 = dart.privateName(material_tree_dropdown$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_tree_dropdown$46template, "_expr_7");
  var _expr_9 = dart.privateName(material_tree_dropdown$46template, "_expr_9");
  var _el_0 = dart.privateName(material_tree_dropdown$46template, "_el_0");
  var _el_4 = dart.privateName(material_tree_dropdown$46template, "_el_4");
  var _PopupHierarchy_4_11 = dart.privateName(material_tree_dropdown$46template, "_PopupHierarchy_4_11");
  var _PopupRef_4_12 = dart.privateName(material_tree_dropdown$46template, "_PopupRef_4_12");
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C0;
  var C1;
  var C2;
  var C3;
  var _handle_focus_0_0 = dart.privateName(material_tree_dropdown$46template, "_handle_focus_0_0");
  var _handle_click_0_1 = dart.privateName(material_tree_dropdown$46template, "_handle_click_0_1");
  var _handle_visibleChange_4_1 = dart.privateName(material_tree_dropdown$46template, "_handle_visibleChange_4_1");
  var C4;
  var _MaterialTreeFilterComponent_0_5 = dart.privateName(material_tree_dropdown$46template, "_MaterialTreeFilterComponent_0_5");
  const _is_ViewMaterialTreeDropdownComponent0_default = Symbol('_is_ViewMaterialTreeDropdownComponent0_default');
  material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ViewMaterialTreeDropdownComponent0 extends app_view.AppView$(dart.legacy(material_tree_dropdown.MaterialTreeDropdownComponent$(dart.legacy(T)))) {
      get [_PopupHierarchy_4_11]() {
        if (this[__PopupHierarchy_4_11] == null) {
          this[__PopupHierarchy_4_11] = material_popup.getHierarchy(this[_MaterialPopupComponent_4_8]);
        }
        return this[__PopupHierarchy_4_11];
      }
      get [_PopupRef_4_12]() {
        if (this[__PopupRef_4_12] == null) {
          this[__PopupRef_4_12] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_4_8]);
        }
        return this[__PopupRef_4_12];
      }
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/material_tree_dropdown.dart" : null;
      }
      build() {
        let t0;
        let _ctx = this.ctx;
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        let doc = html.document;
        this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
        this.updateChildClass(this[_el_0], "button");
        dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
        dom_helpers.setAttribute(this[_el_0], "popupSource", "");
        this.addShimC(this[_el_0]);
        this[_KeyboardOnlyFocusIndicatorDirective_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)));
        this[_PopupSourceDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), this[_el_0], ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.viewData.parentIndex)), null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), this[_el_0], ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.viewData.parentIndex)), null);
        let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent1(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.appendAnchor(this[_el_0]);
        this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent2(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        let _anchor_3 = dom_helpers.appendAnchor(this[_el_0]);
        this[_appEl_3] = new view_container.ViewContainer.new(3, 0, this, _anchor_3);
        let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], dart.fn((parentView, parentIndex) => material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent3(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
        this[_compView_4] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 4);
        this[_el_4] = this[_compView_4].rootEl;
        parentRenderNode[$append](this[_el_4]);
        dom_helpers.setAttribute(this[_el_4], "enforceSpaceConstraints", "");
        dom_helpers.setAttribute(this[_el_4], "trackLayoutChanges", "");
        this.addShimC(HtmlElementL().as(this[_el_4]));
        this[_appEl_4] = new view_container.ViewContainer.new(4, null, this, this[_el_4]);
        this[_MaterialPopupComponent_4_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C0 || CT.C0, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C1 || CT.C1, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C2 || CT.C2, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_4], this[_appEl_4], new element_ref.ElementRef.new(this[_el_4])), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C0 || CT.C0, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C1 || CT.C1, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C2 || CT.C2, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_4], this[_appEl_4], new element_ref.ElementRef.new(this[_el_4]));
        let _el_5 = doc[$createElement]("div");
        dom_helpers.setAttribute(_el_5, "header", "");
        this.addShimC(HtmlElementL().as(_el_5));
        this.project(_el_5, 0);
        let _anchor_6 = dom_helpers.appendAnchor(_el_5);
        this[_appEl_6] = new view_container.ViewContainer.new(6, 5, this, _anchor_6);
        let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], dart.fn((parentView, parentIndex) => material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent4(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
        let _anchor_7 = dom_helpers.createAnchor();
        this[_appEl_7] = new view_container.ViewContainer.new(7, 4, this, _anchor_7);
        let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], dart.fn((parentView, parentIndex) => material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent5(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_DeferredContentDirective_7_9] = new deferred_content.DeferredContentDirective.new(this[_appEl_7], _TemplateRef_7_8, this[_MaterialPopupComponent_4_8]);
        this[_compView_4].create(this[_MaterialPopupComponent_4_8], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_5]), (t0 = [this.projectedNodes[$_get](1)], (() => {
            t0[$addAll]([this[_appEl_7]]);
            return t0;
          })()), C3 || CT.C3]));
        this[_el_0][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_focus_0_0)));
        this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_click_0_1)));
        this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'keydown')));
        this[_el_0][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
        this[_el_0][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'onMouseInteraction')));
        let subscription_0 = this[_MaterialPopupComponent_4_8].onVisible.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handle_visibleChange_4_1)));
        let subscription_1 = this[_MaterialPopupComponent_4_8].onOpened.listen(this.eventHandler0(dart.void, dart.bind(_ctx, 'focus')));
        this.init(C4 || CT.C4, JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
          if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(DropdownHandleL())) {
            return this[_MaterialPopupComponent_4_8];
          }
          if (token === dart.wrapType(PopupHierarchyL())) {
            return this[_PopupHierarchy_4_11];
          }
          if (token === dart.wrapType(PopupRefL())) {
            return this[_PopupRef_4_12];
          }
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        let local_button = this[_PopupSourceDirective_0_6];
        this[_NgIf_1_9].ngIf = !dart.test(_ctx.showFilterInsideButton);
        this[_NgIf_2_9].ngIf = !dart.test(_ctx.showFilterInsideButton);
        this[_NgIf_3_9].ngIf = _ctx.showFilterInsideButton;
        changed = false;
        if (firstCheck) {
          this[_MaterialPopupComponent_4_8].enforceSpaceConstraints = true;
          changed = true;
          this[_MaterialPopupComponent_4_8].trackLayoutChanges = true;
          changed = true;
        }
        let currVal_6 = _ctx.popupPositions;
        if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
          this[_MaterialPopupComponent_4_8].preferredPositions = currVal_6;
          changed = true;
          this[_expr_6] = currVal_6;
        }
        let currVal_7 = local_button;
        if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
          this[_MaterialPopupComponent_4_8].source = currVal_7;
          changed = true;
          this[_expr_7] = currVal_7;
        }
        let currVal_9 = _ctx.visible;
        if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
          this[_MaterialPopupComponent_4_8].visible = currVal_9;
          changed = true;
          this[_expr_9] = currVal_9;
        }
        if (changed) {
          this[_compView_4].markAsCheckOnce();
        }
        this[_NgIf_6_9].ngIf = dart.test(_ctx.supportsFiltering) && dart.test(_ctx.showFilterInsidePopup);
        if (firstCheck) {
          this[_DeferredContentDirective_7_9].preserveDimensions = true;
        }
        this[_appEl_1].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
        this[_appEl_3].detectChangesInNestedViews();
        this[_appEl_4].detectChangesInNestedViews();
        this[_appEl_6].detectChangesInNestedViews();
        this[_appEl_7].detectChangesInNestedViews();
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          if (dart.test(this[_query_MaterialTreeFilterComponent_1_0_isDirty])) {
            _ctx.materialTreeFilterComponent = queries.firstOrNull(MaterialTreeFilterComponentL(), queries.flattenNodes(MaterialTreeFilterComponentL(), JSArrayOfListLOfMaterialTreeFilterComponentL().of([this[_appEl_3].mapNestedViews(MaterialTreeFilterComponentL(), _ViewMaterialTreeDropdownComponent3L(), dart.fn(nestedView => JSArrayOfMaterialTreeFilterComponentL().of([nestedView[_MaterialTreeFilterComponent_0_5]]), _ViewMaterialTreeDropdownComponent3LToListLOfMaterialTreeFilterComponentL())), this[_appEl_6].mapNestedViews(MaterialTreeFilterComponentL(), _ViewMaterialTreeDropdownComponent4L(), dart.fn(nestedView => JSArrayOfMaterialTreeFilterComponentL().of([nestedView[_MaterialTreeFilterComponent_0_5]]), _ViewMaterialTreeDropdownComponent4LToListLOfMaterialTreeFilterComponentL()))])));
            this[_query_MaterialTreeFilterComponent_1_0_isDirty] = false;
          }
        }
        let currVal_0 = !dart.test(_ctx.showFilterInsideButton);
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          dom_helpers.updateClassBinding(this[_el_0], "border", currVal_0);
          this[_expr_0] = currVal_0;
        }
        if (firstCheck) {
          if (_ctx.popupClassName != null) {
            this[_compView_4].updateChildClassNonHtml(this[_el_4], _ctx.popupClassName);
          }
        }
        this[_compView_4].detectHostChanges(firstCheck);
        this[_compView_4].detectChanges();
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          if (firstCheck) {
            this[_PopupSourceDirective_0_6].ngAfterViewInit();
            this[_MaterialPopupComponent_4_8].ngAfterViewInit();
          }
        }
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
        this[_appEl_2].destroyNestedViews();
        this[_appEl_3].destroyNestedViews();
        this[_appEl_4].destroyNestedViews();
        this[_appEl_6].destroyNestedViews();
        this[_appEl_7].destroyNestedViews();
        this[_compView_4].destroyInternalState();
        this[_PopupSourceDirective_0_6].ngOnDestroy();
        this[_DeferredContentDirective_7_9].ngOnDestroy();
        this[_MaterialPopupComponent_4_8].ngOnDestroy();
      }
      [_handle_focus_0_0]($36event) {
        let _ctx = this.ctx;
        _ctx.visible = true;
        this[_KeyboardOnlyFocusIndicatorDirective_0_5].onFocus(EventL().as($36event));
      }
      [_handle_click_0_1]($36event) {
        let _ctx = this.ctx;
        _ctx.visible = !dart.test(_ctx.visible);
        this[_KeyboardOnlyFocusIndicatorDirective_0_5].onMouseInteraction();
      }
      [_handle_visibleChange_4_1]($36event) {
        let _ctx = this.ctx;
        _ctx.visible = boolL().as($36event);
      }
      initComponentStyles() {
        let styles = material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._componentStyles;
        if (styles == null) {
          material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._componentStyles = styles = material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_tree_dropdown$46template.styles$MaterialTreeDropdownComponent, material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeDropdownComponent0.new = function(parentView, parentIndex) {
      this[_query_MaterialTreeFilterComponent_1_0_isDirty] = true;
      this[_KeyboardOnlyFocusIndicatorDirective_0_5] = null;
      this[_PopupSourceDirective_0_6] = null;
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      this[_appEl_3] = null;
      this[_NgIf_3_9] = null;
      this[_compView_4] = null;
      this[_appEl_4] = null;
      this[_MaterialPopupComponent_4_8] = null;
      this[__PopupHierarchy_4_11] = null;
      this[__PopupRef_4_12] = null;
      this[_appEl_6] = null;
      this[_NgIf_6_9] = null;
      this[_appEl_7] = null;
      this[_DeferredContentDirective_7_9] = null;
      this[_expr_0] = null;
      this[_expr_6] = null;
      this[_expr_7] = null;
      this[_expr_9] = null;
      this[_el_0] = null;
      this[_el_4] = null;
      ViewMaterialTreeDropdownComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootEl = HtmlElementL().as(html.document[$createElement]("material-tree-dropdown"));
    }).prototype = ViewMaterialTreeDropdownComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeDropdownComponent0);
    ViewMaterialTreeDropdownComponent0.prototype[_is_ViewMaterialTreeDropdownComponent0_default] = true;
    dart.addTypeCaches(ViewMaterialTreeDropdownComponent0);
    dart.setMethodSignature(ViewMaterialTreeDropdownComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialTreeDropdownComponent0.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
      [_handle_focus_0_0]: dart.fnType(dart.void, [dart.dynamic]),
      [_handle_click_0_1]: dart.fnType(dart.void, [dart.dynamic]),
      [_handle_visibleChange_4_1]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setGetterSignature(ViewMaterialTreeDropdownComponent0, () => ({
      __proto__: dart.getGetters(ViewMaterialTreeDropdownComponent0.__proto__),
      [_PopupHierarchy_4_11]: dart.dynamic,
      [_PopupRef_4_12]: dart.dynamic
    }));
    dart.setLibraryUri(ViewMaterialTreeDropdownComponent0, L0);
    dart.setFieldSignature(ViewMaterialTreeDropdownComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeDropdownComponent0.__proto__),
      [_query_MaterialTreeFilterComponent_1_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
      [_KeyboardOnlyFocusIndicatorDirective_0_5]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
      [_PopupSourceDirective_0_6]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_compView_4]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
      [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_MaterialPopupComponent_4_8]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
      [__PopupHierarchy_4_11]: dart.fieldType(dart.dynamic),
      [__PopupRef_4_12]: dart.fieldType(dart.dynamic),
      [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_7]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_DeferredContentDirective_7_9]: dart.fieldType(dart.legacy(deferred_content.DeferredContentDirective)),
      [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_6]: dart.fieldType(dart.dynamic),
      [_expr_7]: dart.fieldType(dart.dynamic),
      [_expr_9]: dart.fieldType(dart.legacy(core.bool)),
      [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
      [_el_4]: dart.fieldType(dart.legacy(html.Element))
    }));
    return ViewMaterialTreeDropdownComponent0;
  });
  material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0 = material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0$();
  dart.defineLazy(material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, {
    /*material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dart.addTypeTests(material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0, _is_ViewMaterialTreeDropdownComponent0_default);
  var _textBinding_1 = dart.privateName(material_tree_dropdown$46template, "_textBinding_1");
  const _is__ViewMaterialTreeDropdownComponent1_default = Symbol('_is__ViewMaterialTreeDropdownComponent1_default');
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1$ = dart.generic(T => {
    class _ViewMaterialTreeDropdownComponent1 extends app_view.AppView$(dart.legacy(material_tree_dropdown.MaterialTreeDropdownComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(HtmlElementL().as(_el_0), "button-text");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1].element);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.placeholder));
      }
    }
    (_ViewMaterialTreeDropdownComponent1.new = function(parentView, parentIndex) {
      this[_textBinding_1] = new text_binding.TextBinding.new();
      _ViewMaterialTreeDropdownComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeDropdownComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponent1);
    _ViewMaterialTreeDropdownComponent1.prototype[_is__ViewMaterialTreeDropdownComponent1_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeDropdownComponent1);
    dart.setLibraryUri(_ViewMaterialTreeDropdownComponent1, L0);
    dart.setFieldSignature(_ViewMaterialTreeDropdownComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeDropdownComponent1.__proto__),
      [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
    }));
    return _ViewMaterialTreeDropdownComponent1;
  });
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1 = material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1$();
  dart.addTypeTests(material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1, _is__ViewMaterialTreeDropdownComponent1_default);
  var _compView_0 = dart.privateName(material_tree_dropdown$46template, "_compView_0");
  var _MaterialIconComponent_0_5 = dart.privateName(material_tree_dropdown$46template, "_MaterialIconComponent_0_5");
  const _is__ViewMaterialTreeDropdownComponent2_default = Symbol('_is__ViewMaterialTreeDropdownComponent2_default');
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2$ = dart.generic(T => {
    class _ViewMaterialTreeDropdownComponent2 extends app_view.AppView$(dart.legacy(material_tree_dropdown.MaterialTreeDropdownComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        this.updateChildClassNonHtml(_el_0, "icon");
        dom_helpers.setAttribute(_el_0, "icon", "arrow_drop_down");
        this.addShimC(_el_0);
        this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(_el_0);
        this[_compView_0].create0(this[_MaterialIconComponent_0_5]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let changed = false;
        let firstCheck = this.cdState === 0;
        changed = false;
        if (firstCheck) {
          this[_MaterialIconComponent_0_5].icon = "arrow_drop_down";
          changed = true;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
    }
    (_ViewMaterialTreeDropdownComponent2.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialIconComponent_0_5] = null;
      _ViewMaterialTreeDropdownComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeDropdownComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponent2);
    _ViewMaterialTreeDropdownComponent2.prototype[_is__ViewMaterialTreeDropdownComponent2_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeDropdownComponent2);
    dart.setLibraryUri(_ViewMaterialTreeDropdownComponent2, L0);
    dart.setFieldSignature(_ViewMaterialTreeDropdownComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeDropdownComponent2.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
      [_MaterialIconComponent_0_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent))
    }));
    return _ViewMaterialTreeDropdownComponent2;
  });
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2 = material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2$();
  dart.addTypeTests(material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2, _is__ViewMaterialTreeDropdownComponent2_default);
  var _expr_1 = dart.privateName(material_tree_dropdown$46template, "_expr_1");
  var _handle_filter_0_0 = dart.privateName(material_tree_dropdown$46template, "_handle_filter_0_0");
  const _is__ViewMaterialTreeDropdownComponent3_default = Symbol('_is__ViewMaterialTreeDropdownComponent3_default');
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3$ = dart.generic(T => {
    class _ViewMaterialTreeDropdownComponent3 extends app_view.AppView$(dart.legacy(material_tree_dropdown.MaterialTreeDropdownComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        this.addShimC(_el_0);
        this[_MaterialTreeFilterComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeFilterComponentL(), dart.wrapType(MaterialTreeFilterComponentL()), dart.fn(() => new material_tree_filter.MaterialTreeFilterComponent.new(MaterialTreeRootL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(MaterialTreeRootL()), this.parentView.viewData.parentIndex))), VoidToMaterialTreeFilterComponentL())) : new material_tree_filter.MaterialTreeFilterComponent.new(MaterialTreeRootL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(MaterialTreeRootL()), this.parentView.viewData.parentIndex)));
        this[_compView_0].create0(this[_MaterialTreeFilterComponent_0_5]);
        let subscription_0 = this[_MaterialTreeFilterComponent_0_5].onFiltered.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_filter_0_0)));
        this.init(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.placeholder;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_MaterialTreeFilterComponent_0_5].placeholder = currVal_0;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.filterableOptions;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_MaterialTreeFilterComponent_0_5].filterable = currVal_1;
          this[_expr_1] = currVal_1;
        }
        this[_compView_0].detectChanges();
      }
      dirtyParentQueriesInternal() {
        optimizations.unsafeCast(ViewMaterialTreeDropdownComponent0L(), this.parentView)[_query_MaterialTreeFilterComponent_1_0_isDirty] = true;
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
      [_handle_filter_0_0]($36event) {
        let _ctx = this.ctx;
        _ctx.visible = true;
      }
    }
    (_ViewMaterialTreeDropdownComponent3.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialTreeFilterComponent_0_5] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      _ViewMaterialTreeDropdownComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeDropdownComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponent3);
    _ViewMaterialTreeDropdownComponent3.prototype[_is__ViewMaterialTreeDropdownComponent3_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeDropdownComponent3);
    dart.setMethodSignature(_ViewMaterialTreeDropdownComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeDropdownComponent3.__proto__),
      [_handle_filter_0_0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeDropdownComponent3, L0);
    dart.setFieldSignature(_ViewMaterialTreeDropdownComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeDropdownComponent3.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_tree_filter$46template.ViewMaterialTreeFilterComponent0)),
      [_MaterialTreeFilterComponent_0_5]: dart.fieldType(dart.legacy(material_tree_filter.MaterialTreeFilterComponent)),
      [_expr_0]: dart.fieldType(dart.legacy(core.String)),
      [_expr_1]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeDropdownComponent3;
  });
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3 = material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3$();
  dart.addTypeTests(material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3, _is__ViewMaterialTreeDropdownComponent3_default);
  var _expr_2 = dart.privateName(material_tree_dropdown$46template, "_expr_2");
  const _is__ViewMaterialTreeDropdownComponent4_default = Symbol('_is__ViewMaterialTreeDropdownComponent4_default');
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4$ = dart.generic(T => {
    class _ViewMaterialTreeDropdownComponent4 extends app_view.AppView$(dart.legacy(material_tree_dropdown.MaterialTreeDropdownComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        this.updateChildClassNonHtml(_el_0, "search-box");
        dom_helpers.setAttribute(_el_0, "leadingGlyph", "search");
        this.addShimC(_el_0);
        this[_MaterialTreeFilterComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeFilterComponentL(), dart.wrapType(MaterialTreeFilterComponentL()), dart.fn(() => new material_tree_filter.MaterialTreeFilterComponent.new(MaterialTreeRootL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(MaterialTreeRootL()), this.parentView.viewData.parentIndex))), VoidToMaterialTreeFilterComponentL())) : new material_tree_filter.MaterialTreeFilterComponent.new(MaterialTreeRootL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(MaterialTreeRootL()), this.parentView.viewData.parentIndex)));
        this[_compView_0].create0(this[_MaterialTreeFilterComponent_0_5]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        if (firstCheck) {
          this[_MaterialTreeFilterComponent_0_5].leadingGlyph = "search";
        }
        let currVal_1 = _ctx.placeholder;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_MaterialTreeFilterComponent_0_5].placeholder = currVal_1;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = _ctx.filterableOptions;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_MaterialTreeFilterComponent_0_5].filterable = currVal_2;
          this[_expr_2] = currVal_2;
        }
        this[_compView_0].detectChanges();
      }
      dirtyParentQueriesInternal() {
        optimizations.unsafeCast(ViewMaterialTreeDropdownComponent0L(), this.parentView)[_query_MaterialTreeFilterComponent_1_0_isDirty] = true;
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
    }
    (_ViewMaterialTreeDropdownComponent4.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialTreeFilterComponent_0_5] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      _ViewMaterialTreeDropdownComponent4.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeDropdownComponent4.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponent4);
    _ViewMaterialTreeDropdownComponent4.prototype[_is__ViewMaterialTreeDropdownComponent4_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeDropdownComponent4);
    dart.setLibraryUri(_ViewMaterialTreeDropdownComponent4, L0);
    dart.setFieldSignature(_ViewMaterialTreeDropdownComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeDropdownComponent4.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_tree_filter$46template.ViewMaterialTreeFilterComponent0)),
      [_MaterialTreeFilterComponent_0_5]: dart.fieldType(dart.legacy(material_tree_filter.MaterialTreeFilterComponent)),
      [_expr_1]: dart.fieldType(dart.legacy(core.String)),
      [_expr_2]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeDropdownComponent4;
  });
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4 = material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4$();
  dart.addTypeTests(material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4, _is__ViewMaterialTreeDropdownComponent4_default);
  var _MaterialTreeComponent_0_5 = dart.privateName(material_tree_dropdown$46template, "_MaterialTreeComponent_0_5");
  var _expr_3 = dart.privateName(material_tree_dropdown$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_tree_dropdown$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_tree_dropdown$46template, "_expr_5");
  const _is__ViewMaterialTreeDropdownComponent5_default = Symbol('_is__ViewMaterialTreeDropdownComponent5_default');
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialTreeComponent0OfTL = () => (ViewMaterialTreeComponent0OfTL = dart.constFn(material_tree_impl$46template.ViewMaterialTreeComponent0$(TL())))();
    var MaterialTreeComponentOfTL = () => (MaterialTreeComponentOfTL = dart.constFn(material_tree_impl.MaterialTreeComponent$(TL())))();
    var MaterialTreeComponentLOfTL = () => (MaterialTreeComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeComponentOfTL())))();
    var VoidToMaterialTreeComponentLOfTL = () => (VoidToMaterialTreeComponentLOfTL = dart.constFn(dart.fnType(MaterialTreeComponentLOfTL(), [])))();
    var TLToStringL = () => (TLToStringL = dart.constFn(dart.fnType(StringL(), [TL()])))();
    var TLToLStringL = () => (TLToLStringL = dart.constFn(dart.legacy(TLToStringL())))();
    class _ViewMaterialTreeDropdownComponent5 extends app_view.AppView$(dart.legacy(material_tree_dropdown.MaterialTreeDropdownComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new (ViewMaterialTreeComponent0OfTL()).new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        this.addShimC(_el_0);
        this[_MaterialTreeComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeComponentLOfTL(), dart.wrapType(MaterialTreeComponentL()), dart.fn(() => new (MaterialTreeComponentOfTL()).new(MaterialTreeRootL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(MaterialTreeRootL()), this.parentView.viewData.parentIndex)), null), VoidToMaterialTreeComponentLOfTL())) : new (MaterialTreeComponentOfTL()).new(MaterialTreeRootL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(MaterialTreeRootL()), this.parentView.viewData.parentIndex)), null);
        this[_compView_0].create0(this[_MaterialTreeComponent_0_5]);
        this.init1(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(MaterialTreeRootL()) && 0 === nodeIndex) {
          return this[_MaterialTreeComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let currVal_0 = _ctx.expandAll;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_MaterialTreeComponent_0_5].expandAll = currVal_0;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.allowParentSingleSelection;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_MaterialTreeComponent_0_5].allowParentSingleSelection = currVal_1;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = _ctx.componentRenderer;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_MaterialTreeComponent_0_5].componentRenderer = currVal_2;
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = TLToLStringL().as(_ctx.itemRenderer);
        if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_MaterialTreeComponent_0_5].itemRenderer = currVal_3;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = _ctx.options;
        if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          this[_MaterialTreeComponent_0_5].options = currVal_4;
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.selection;
        if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          this[_MaterialTreeComponent_0_5].selection = currVal_5;
          this[_expr_5] = currVal_5;
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
    }
    (_ViewMaterialTreeDropdownComponent5.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialTreeComponent_0_5] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      _ViewMaterialTreeDropdownComponent5.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeDropdownComponent5.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponent5);
    _ViewMaterialTreeDropdownComponent5.prototype[_is__ViewMaterialTreeDropdownComponent5_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeDropdownComponent5);
    dart.setMethodSignature(_ViewMaterialTreeDropdownComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeDropdownComponent5.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeDropdownComponent5, L0);
    dart.setFieldSignature(_ViewMaterialTreeDropdownComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeDropdownComponent5.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_tree_impl$46template.ViewMaterialTreeComponent0$(dart.legacy(T)))),
      [_MaterialTreeComponent_0_5]: dart.fieldType(dart.legacy(material_tree_impl.MaterialTreeComponent$(dart.legacy(T)))),
      [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeDropdownComponent5;
  });
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5 = material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5$();
  dart.addTypeTests(material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5, _is__ViewMaterialTreeDropdownComponent5_default);
  var _MaterialTreeDropdownComponent_0_5 = dart.privateName(material_tree_dropdown$46template, "_MaterialTreeDropdownComponent_0_5");
  const _is__ViewMaterialTreeDropdownComponentHost0_default = Symbol('_is__ViewMaterialTreeDropdownComponentHost0_default');
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialTreeDropdownComponent0OfTL = () => (ViewMaterialTreeDropdownComponent0OfTL = dart.constFn(material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0$(TL())))();
    var MaterialTreeDropdownComponentOfTL = () => (MaterialTreeDropdownComponentOfTL = dart.constFn(material_tree_dropdown.MaterialTreeDropdownComponent$(TL())))();
    var MaterialTreeDropdownComponentLOfTL = () => (MaterialTreeDropdownComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeDropdownComponentOfTL())))();
    var VoidToMaterialTreeDropdownComponentLOfTL = () => (VoidToMaterialTreeDropdownComponentLOfTL = dart.constFn(dart.fnType(MaterialTreeDropdownComponentLOfTL(), [])))();
    var ComponentRefOfMaterialTreeDropdownComponentLOfTL = () => (ComponentRefOfMaterialTreeDropdownComponentLOfTL = dart.constFn(component_factory.ComponentRef$(MaterialTreeDropdownComponentLOfTL())))();
    class _ViewMaterialTreeDropdownComponentHost0 extends app_view.AppView$(dart.legacy(material_tree_dropdown.MaterialTreeDropdownComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new (ViewMaterialTreeDropdownComponent0OfTL()).new(this, 0);
        this.rootEl = this[_compView_0].rootEl;
        this[_MaterialTreeDropdownComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeDropdownComponentLOfTL(), dart.wrapType(MaterialTreeDropdownComponentL()), dart.fn(() => new (MaterialTreeDropdownComponentOfTL()).new(DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), null, this.rootEl), VoidToMaterialTreeDropdownComponentLOfTL())) : new (MaterialTreeDropdownComponentOfTL()).new(DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), null, this.rootEl);
        this[_compView_0].create(this[_MaterialTreeDropdownComponent_0_5], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialTreeDropdownComponentLOfTL()).new(0, this, this.rootEl, this[_MaterialTreeDropdownComponent_0_5]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(MaterialTreeDropdownComponentL()) || token === dart.wrapType(FocusableL()) || token === dart.wrapType(MaterialTreeRootL())) && 0 === nodeIndex) {
          return this[_MaterialTreeDropdownComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
          this[_MaterialTreeDropdownComponent_0_5].ngOnInit();
        }
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
    }
    (_ViewMaterialTreeDropdownComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialTreeDropdownComponent_0_5] = null;
      _ViewMaterialTreeDropdownComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
      ;
    }).prototype = _ViewMaterialTreeDropdownComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeDropdownComponentHost0);
    _ViewMaterialTreeDropdownComponentHost0.prototype[_is__ViewMaterialTreeDropdownComponentHost0_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeDropdownComponentHost0);
    dart.setMethodSignature(_ViewMaterialTreeDropdownComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeDropdownComponentHost0.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeDropdownComponentHost0, L0);
    dart.setFieldSignature(_ViewMaterialTreeDropdownComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeDropdownComponentHost0.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_tree_dropdown$46template.ViewMaterialTreeDropdownComponent0$(dart.legacy(T)))),
      [_MaterialTreeDropdownComponent_0_5]: dart.fieldType(dart.legacy(material_tree_dropdown.MaterialTreeDropdownComponent$(dart.legacy(T))))
    }));
    return _ViewMaterialTreeDropdownComponentHost0;
  });
  material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0 = material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0$();
  dart.addTypeTests(material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0, _is__ViewMaterialTreeDropdownComponentHost0_default);
  material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent1 = function viewFactory_MaterialTreeDropdownComponent1(T, parentView, parentIndex) {
    return new (material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent1$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent2 = function viewFactory_MaterialTreeDropdownComponent2(T, parentView, parentIndex) {
    return new (material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent2$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent3 = function viewFactory_MaterialTreeDropdownComponent3(T, parentView, parentIndex) {
    return new (material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent3$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent4 = function viewFactory_MaterialTreeDropdownComponent4(T, parentView, parentIndex) {
    return new (material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent4$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponent5 = function viewFactory_MaterialTreeDropdownComponent5(T, parentView, parentIndex) {
    return new (material_tree_dropdown$46template._ViewMaterialTreeDropdownComponent5$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_dropdown$46template.viewFactory_MaterialTreeDropdownComponentHost0 = function viewFactory_MaterialTreeDropdownComponentHost0(T, parentView, parentIndex) {
    return new (material_tree_dropdown$46template._ViewMaterialTreeDropdownComponentHost0$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_dropdown$46template.initReflector = function initReflector() {
    if (dart.test(material_tree_dropdown$46template._visited)) {
      return;
    }
    material_tree_dropdown$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialTreeDropdownComponentL()), material_tree_dropdown$46template.MaterialTreeDropdownComponentNgFactory);
    material_tree_impl$46template.initReflector();
    angular$46template.initReflector();
    deferred_content$46template.initReflector();
    focus$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    alignment$46template.initReflector();
    material_icon$46template.initReflector();
    material_popup$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    select$46template.initReflector();
    selection_container$46template.initReflector();
    selection_model$46template.initReflector();
    selection_options$46template.initReflector();
    has_factory$46template.initReflector();
    has_renderer$46template.initReflector();
    material_tree_filter$46template.initReflector();
    material_tree_root$46template.initReflector();
    css$46template.initReflector();
    dom_service$46template.initReflector();
  };
  dart.copyProperties(material_tree_dropdown$46template, {
    get MaterialTreeDropdownComponentNgFactory() {
      return material_tree_dropdown$46template._MaterialTreeDropdownComponentNgFactory;
    }
  });
  var C7;
  var C6;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C5;
  dart.defineLazy(material_tree_dropdown$46template, {
    /*material_tree_dropdown$46template.styles$MaterialTreeDropdownComponent*/get styles$MaterialTreeDropdownComponent() {
      return [material_tree_dropdown$46scss$46css$46shim.styles];
    },
    /*material_tree_dropdown$46template._MaterialTreeDropdownComponentNgFactory*/get _MaterialTreeDropdownComponentNgFactory() {
      return C5 || CT.C5;
    },
    /*material_tree_dropdown$46template.styles$MaterialTreeDropdownComponentHost*/get styles$MaterialTreeDropdownComponentHost() {
      return C3 || CT.C3;
    },
    /*material_tree_dropdown$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var _query_MaterialTreeGroupComponent_1_0_isDirty = dart.privateName(material_tree_impl$46template, "_query_MaterialTreeGroupComponent_1_0_isDirty");
  var _appEl_0 = dart.privateName(material_tree_impl$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(material_tree_impl$46template, "_NgIf_0_9");
  var _appEl_1$ = dart.privateName(material_tree_impl$46template, "_appEl_1");
  var _NgIf_1_9$ = dart.privateName(material_tree_impl$46template, "_NgIf_1_9");
  var _expr_2$ = dart.privateName(material_tree_impl$46template, "_expr_2");
  var _expr_3$ = dart.privateName(material_tree_impl$46template, "_expr_3");
  var _expr_4$ = dart.privateName(material_tree_impl$46template, "_expr_4");
  var _MaterialTreeGroupComponent_0_5 = dart.privateName(material_tree_impl$46template, "_MaterialTreeGroupComponent_0_5");
  const _is_ViewMaterialTreeComponent0_default = Symbol('_is_ViewMaterialTreeComponent0_default');
  material_tree_impl$46template.ViewMaterialTreeComponent0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ViewMaterialTreeComponent0 extends app_view.AppView$(dart.legacy(material_tree_impl.MaterialTreeComponent$(dart.legacy(T)))) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/material_tree_impl.dart" : null;
      }
      build() {
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent1(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _anchor_1 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_1$] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent3(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_1_9$] = new ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
        this.init0();
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_0_9].ngIf = _ctx.supportsHierarchy;
        this[_NgIf_1_9$].ngIf = !dart.test(_ctx.supportsHierarchy);
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_1$].detectChangesInNestedViews();
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          if (dart.test(this[_query_MaterialTreeGroupComponent_1_0_isDirty])) {
            _ctx.treeGroupNodes = this[_appEl_0].mapNestedViews(MaterialTreeGroupComponentL(), _ViewMaterialTreeComponent1L(), dart.fn(nestedView => nestedView[_appEl_0].mapNestedViews(MaterialTreeGroupComponentL(), _ViewMaterialTreeComponent2L(), dart.fn(nestedView => JSArrayOfMaterialTreeGroupComponentL().of([nestedView[_MaterialTreeGroupComponent_0_5]]), _ViewMaterialTreeComponent2LToListLOfMaterialTreeGroupComponentL())), _ViewMaterialTreeComponent1LToListLOfMaterialTreeGroupComponentL()));
            this[_query_MaterialTreeGroupComponent_1_0_isDirty] = false;
          }
        }
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_1$].destroyNestedViews();
      }
      detectHostChanges(firstCheck) {
        let _ctx = this.ctx;
        let currVal_2 = _ctx.role;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
          dom_helpers.updateAttribute(this.rootEl, "role", currVal_2);
          this[_expr_2$] = currVal_2;
        }
        let currVal_3 = _ctx.hostMultiselectable;
        if (dart.test(app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
          dom_helpers.updateAttribute(this.rootEl, "aria-multiselectable", currVal_3);
          this[_expr_3$] = currVal_3;
        }
        let currVal_4 = _ctx.hostReadonly;
        if (dart.test(app_view_utils.checkBinding(this[_expr_4$], currVal_4))) {
          dom_helpers.updateAttribute(this.rootEl, "aria-readonly", currVal_4);
          this[_expr_4$] = currVal_4;
        }
      }
      initComponentStyles() {
        let styles = material_tree_impl$46template.ViewMaterialTreeComponent0._componentStyles;
        if (styles == null) {
          material_tree_impl$46template.ViewMaterialTreeComponent0._componentStyles = styles = material_tree_impl$46template.ViewMaterialTreeComponent0._componentStyles = new style_encapsulation._UnscopedComponentStyles.new(material_tree_impl$46template.styles$MaterialTreeComponent, material_tree_impl$46template.ViewMaterialTreeComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeComponent0.new = function(parentView, parentIndex) {
      this[_query_MaterialTreeGroupComponent_1_0_isDirty] = true;
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_1$] = null;
      this[_NgIf_1_9$] = null;
      this[_expr_2$] = null;
      this[_expr_3$] = null;
      this[_expr_4$] = null;
      ViewMaterialTreeComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootEl = HtmlElementL().as(html.document[$createElement]("material-tree"));
    }).prototype = ViewMaterialTreeComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeComponent0);
    ViewMaterialTreeComponent0.prototype[_is_ViewMaterialTreeComponent0_default] = true;
    dart.addTypeCaches(ViewMaterialTreeComponent0);
    dart.setLibraryUri(ViewMaterialTreeComponent0, L1);
    dart.setFieldSignature(ViewMaterialTreeComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeComponent0.__proto__),
      [_query_MaterialTreeGroupComponent_1_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_1$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_expr_2$]: dart.fieldType(dart.dynamic),
      [_expr_3$]: dart.fieldType(dart.dynamic),
      [_expr_4$]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialTreeComponent0;
  });
  material_tree_impl$46template.ViewMaterialTreeComponent0 = material_tree_impl$46template.ViewMaterialTreeComponent0$();
  dart.defineLazy(material_tree_impl$46template.ViewMaterialTreeComponent0, {
    /*material_tree_impl$46template.ViewMaterialTreeComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dart.addTypeTests(material_tree_impl$46template.ViewMaterialTreeComponent0, _is_ViewMaterialTreeComponent0_default);
  var _NgFor_0_9 = dart.privateName(material_tree_impl$46template, "_NgFor_0_9");
  var _expr_0$ = dart.privateName(material_tree_impl$46template, "_expr_0");
  const _is__ViewMaterialTreeComponent1_default = Symbol('_is__ViewMaterialTreeComponent1_default');
  material_tree_impl$46template._ViewMaterialTreeComponent1$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeComponent1 extends app_view.AppView$(dart.legacy(material_tree_impl.MaterialTreeComponent$(dart.legacy(T)))) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent2(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgFor_0_9] = new ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
        this.init1(this[_appEl_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.options.optionGroups;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
          this[_NgFor_0_9].ngForOf = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_0_9].ngDoCheck();
        }
        this[_appEl_0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeComponent1.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgFor_0_9] = null;
      this[_expr_0$] = null;
      _ViewMaterialTreeComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent1);
    _ViewMaterialTreeComponent1.prototype[_is__ViewMaterialTreeComponent1_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeComponent1);
    dart.setLibraryUri(_ViewMaterialTreeComponent1, L1);
    dart.setFieldSignature(_ViewMaterialTreeComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent1.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_0_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_0$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent1;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent1 = material_tree_impl$46template._ViewMaterialTreeComponent1$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent1, _is__ViewMaterialTreeComponent1_default);
  var _compView_0$ = dart.privateName(material_tree_impl$46template, "_compView_0");
  var _expr_1$ = dart.privateName(material_tree_impl$46template, "_expr_1");
  var C8;
  const _is__ViewMaterialTreeComponent2_default = Symbol('_is__ViewMaterialTreeComponent2_default');
  material_tree_impl$46template._ViewMaterialTreeComponent2$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialTreeGroupComponent0OfTL = () => (ViewMaterialTreeGroupComponent0OfTL = dart.constFn(material_tree_group$46template.ViewMaterialTreeGroupComponent0$(TL())))();
    var MaterialTreeGroupComponentOfTL = () => (MaterialTreeGroupComponentOfTL = dart.constFn(material_tree_group.MaterialTreeGroupComponent$(TL())))();
    var MaterialTreeGroupComponentLOfTL = () => (MaterialTreeGroupComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeGroupComponentOfTL())))();
    var VoidToMaterialTreeGroupComponentLOfTL = () => (VoidToMaterialTreeGroupComponentLOfTL = dart.constFn(dart.fnType(MaterialTreeGroupComponentLOfTL(), [])))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialTreeComponent2 extends app_view.AppView$(dart.legacy(material_tree_impl.MaterialTreeComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$] = new (ViewMaterialTreeGroupComponent0OfTL()).new(this, 0);
        let _el_0 = this[_compView_0$].rootEl;
        this[_MaterialTreeGroupComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupComponentLOfTL(), dart.wrapType(MaterialTreeGroupComponentL()), dart.fn(() => new (MaterialTreeGroupComponentOfTL()).new(MaterialTreeRootL().as(this.parentView.injectorGet(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), this[_compView_0$], DropdownHandleL().as(this.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex)), intL().as(this.parentView.injectorGetOptional(C8 || CT.C8, this.viewData.parentIndex))), VoidToMaterialTreeGroupComponentLOfTL())) : new (MaterialTreeGroupComponentOfTL()).new(MaterialTreeRootL().as(this.parentView.injectorGet(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), this[_compView_0$], DropdownHandleL().as(this.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex)), intL().as(this.parentView.injectorGetOptional(C8 || CT.C8, this.viewData.parentIndex)));
        this[_compView_0$].create0(this[_MaterialTreeGroupComponent_0_5]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), this.locals[$_get]("$implicit"));
        let local_optionIndex = optimizations.unsafeCast(intL(), this.locals[$_get]("index"));
        let currVal_0 = _ctx.shouldExpand(local_group, local_optionIndex);
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
          this[_MaterialTreeGroupComponent_0_5].expandAll = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        let currVal_1 = local_group;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
          this[_MaterialTreeGroupComponent_0_5].group = currVal_1;
          this[_expr_1$] = currVal_1;
        }
        let currVal_2 = _ctx.allowParentSingleSelection;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
          this[_MaterialTreeGroupComponent_0_5].allowParentSingleSelection = currVal_2;
          this[_expr_2$] = currVal_2;
        }
        let currVal_3 = _ctx.maxInitialOptionsShown(local_group, local_optionIndex);
        if (dart.test(app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
          this[_MaterialTreeGroupComponent_0_5].maxInitialOptionsShown = currVal_3;
          this[_expr_3$] = currVal_3;
        }
        this[_compView_0$].detectHostChanges(firstCheck);
        this[_compView_0$].detectChanges();
      }
      dirtyParentQueriesInternal() {
        optimizations.unsafeCast(ViewMaterialTreeComponent0L(), this.parentView.parentView)[_query_MaterialTreeGroupComponent_1_0_isDirty] = true;
      }
      destroyInternal() {
        this[_compView_0$].destroyInternalState();
        this[_MaterialTreeGroupComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeComponent2.new = function(parentView, parentIndex) {
      this[_compView_0$] = null;
      this[_MaterialTreeGroupComponent_0_5] = null;
      this[_expr_0$] = null;
      this[_expr_1$] = null;
      this[_expr_2$] = null;
      this[_expr_3$] = null;
      _ViewMaterialTreeComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent2);
    _ViewMaterialTreeComponent2.prototype[_is__ViewMaterialTreeComponent2_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeComponent2);
    dart.setLibraryUri(_ViewMaterialTreeComponent2, L1);
    dart.setFieldSignature(_ViewMaterialTreeComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent2.__proto__),
      [_compView_0$]: dart.fieldType(dart.legacy(material_tree_group$46template.ViewMaterialTreeGroupComponent0$(dart.legacy(T)))),
      [_MaterialTreeGroupComponent_0_5]: dart.fieldType(dart.legacy(material_tree_group.MaterialTreeGroupComponent$(dart.legacy(T)))),
      [_expr_0$]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_1$]: dart.fieldType(dart.dynamic),
      [_expr_2$]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_3$]: dart.fieldType(dart.legacy(core.int))
    }));
    return _ViewMaterialTreeComponent2;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent2 = material_tree_impl$46template._ViewMaterialTreeComponent2$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent2, _is__ViewMaterialTreeComponent2_default);
  var _appEl_2$ = dart.privateName(material_tree_impl$46template, "_appEl_2");
  var _NgIf_2_9$ = dart.privateName(material_tree_impl$46template, "_NgIf_2_9");
  const _is__ViewMaterialTreeComponent3_default = Symbol('_is__ViewMaterialTreeComponent3_default');
  material_tree_impl$46template._ViewMaterialTreeComponent3$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeComponent3 extends app_view.AppView$(dart.legacy(material_tree_impl.MaterialTreeComponent$(dart.legacy(T)))) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent4(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1$] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent6(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_1_9$] = new ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.createAnchor();
        this[_appEl_2$] = new view_container.ViewContainer.new(2, null, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent8(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_2_9$] = new ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
        this.init(JSArrayOfObjectL().of([this[_appEl_0], this[_appEl_1$], this[_appEl_2$]]), null);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_0_9].ngIf = _ctx.showFlatList;
        this[_NgIf_1_9$].ngIf = _ctx.showFlatRadio;
        this[_NgIf_2_9$].ngIf = _ctx.showFlatCheck;
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_1$].detectChangesInNestedViews();
        this[_appEl_2$].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_1$].destroyNestedViews();
        this[_appEl_2$].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeComponent3.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_1$] = null;
      this[_NgIf_1_9$] = null;
      this[_appEl_2$] = null;
      this[_NgIf_2_9$] = null;
      _ViewMaterialTreeComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent3);
    _ViewMaterialTreeComponent3.prototype[_is__ViewMaterialTreeComponent3_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeComponent3);
    dart.setLibraryUri(_ViewMaterialTreeComponent3, L1);
    dart.setFieldSignature(_ViewMaterialTreeComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent3.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_1$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_2$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9$]: dart.fieldType(dart.legacy(ng_if.NgIf))
    }));
    return _ViewMaterialTreeComponent3;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent3 = material_tree_impl$46template._ViewMaterialTreeComponent3$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent3, _is__ViewMaterialTreeComponent3_default);
  const _is__ViewMaterialTreeComponent4_default = Symbol('_is__ViewMaterialTreeComponent4_default');
  material_tree_impl$46template._ViewMaterialTreeComponent4$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeComponent4 extends app_view.AppView$(dart.legacy(material_tree_impl.MaterialTreeComponent$(dart.legacy(T)))) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent5(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgFor_0_9] = new ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
        this.init1(this[_appEl_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.options.optionGroups;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
          this[_NgFor_0_9].ngForOf = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_0_9].ngDoCheck();
        }
        this[_appEl_0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeComponent4.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgFor_0_9] = null;
      this[_expr_0$] = null;
      _ViewMaterialTreeComponent4.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent4.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent4);
    _ViewMaterialTreeComponent4.prototype[_is__ViewMaterialTreeComponent4_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeComponent4);
    dart.setLibraryUri(_ViewMaterialTreeComponent4, L1);
    dart.setFieldSignature(_ViewMaterialTreeComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent4.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_0_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_0$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent4;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent4 = material_tree_impl$46template._ViewMaterialTreeComponent4$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent4, _is__ViewMaterialTreeComponent4_default);
  var _MaterialTreeGroupFlatListComponent_0_5 = dart.privateName(material_tree_impl$46template, "_MaterialTreeGroupFlatListComponent_0_5");
  const _is__ViewMaterialTreeComponent5_default = Symbol('_is__ViewMaterialTreeComponent5_default');
  material_tree_impl$46template._ViewMaterialTreeComponent5$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialTreeGroupFlatListComponent0OfTL = () => (ViewMaterialTreeGroupFlatListComponent0OfTL = dart.constFn(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0$(TL())))();
    var MaterialTreeGroupFlatListComponentOfTL = () => (MaterialTreeGroupFlatListComponentOfTL = dart.constFn(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(TL())))();
    var MaterialTreeGroupFlatListComponentLOfTL = () => (MaterialTreeGroupFlatListComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeGroupFlatListComponentOfTL())))();
    var MaterialTreeRootOfTL = () => (MaterialTreeRootOfTL = dart.constFn(material_tree_root.MaterialTreeRoot$(TL())))();
    var MaterialTreeRootLOfTL = () => (MaterialTreeRootLOfTL = dart.constFn(dart.legacy(MaterialTreeRootOfTL())))();
    var VoidToMaterialTreeGroupFlatListComponentLOfTL = () => (VoidToMaterialTreeGroupFlatListComponentLOfTL = dart.constFn(dart.fnType(MaterialTreeGroupFlatListComponentLOfTL(), [])))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialTreeComponent5 extends app_view.AppView$(dart.legacy(material_tree_impl.MaterialTreeComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$] = new (ViewMaterialTreeGroupFlatListComponent0OfTL()).new(this, 0);
        let _el_0 = this[_compView_0$].rootEl;
        this[_MaterialTreeGroupFlatListComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupFlatListComponentLOfTL(), dart.wrapType(MaterialTreeGroupFlatListComponentL()), dart.fn(() => new (MaterialTreeGroupFlatListComponentOfTL()).new(MaterialTreeRootLOfTL().as(this.parentView.injectorGet(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), this[_compView_0$]), VoidToMaterialTreeGroupFlatListComponentLOfTL())) : new (MaterialTreeGroupFlatListComponentOfTL()).new(MaterialTreeRootLOfTL().as(this.parentView.injectorGet(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), this[_compView_0$]);
        this[_compView_0$].create0(this[_MaterialTreeGroupFlatListComponent_0_5]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), this.locals[$_get]("$implicit"));
        let currVal_0 = local_group;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
          this[_MaterialTreeGroupFlatListComponent_0_5].group = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        this[_compView_0$].detectHostChanges(firstCheck);
        this[_compView_0$].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$].destroyInternalState();
      }
    }
    (_ViewMaterialTreeComponent5.new = function(parentView, parentIndex) {
      this[_compView_0$] = null;
      this[_MaterialTreeGroupFlatListComponent_0_5] = null;
      this[_expr_0$] = null;
      _ViewMaterialTreeComponent5.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent5.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent5);
    _ViewMaterialTreeComponent5.prototype[_is__ViewMaterialTreeComponent5_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeComponent5);
    dart.setLibraryUri(_ViewMaterialTreeComponent5, L1);
    dart.setFieldSignature(_ViewMaterialTreeComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent5.__proto__),
      [_compView_0$]: dart.fieldType(dart.legacy(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0$(dart.legacy(T)))),
      [_MaterialTreeGroupFlatListComponent_0_5]: dart.fieldType(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(dart.legacy(T)))),
      [_expr_0$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent5;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent5 = material_tree_impl$46template._ViewMaterialTreeComponent5$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent5, _is__ViewMaterialTreeComponent5_default);
  const _is__ViewMaterialTreeComponent6_default = Symbol('_is__ViewMaterialTreeComponent6_default');
  material_tree_impl$46template._ViewMaterialTreeComponent6$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeComponent6 extends app_view.AppView$(dart.legacy(material_tree_impl.MaterialTreeComponent$(dart.legacy(T)))) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent7(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgFor_0_9] = new ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
        this.init1(this[_appEl_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.options.optionGroups;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
          this[_NgFor_0_9].ngForOf = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_0_9].ngDoCheck();
        }
        this[_appEl_0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeComponent6.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgFor_0_9] = null;
      this[_expr_0$] = null;
      _ViewMaterialTreeComponent6.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent6.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent6);
    _ViewMaterialTreeComponent6.prototype[_is__ViewMaterialTreeComponent6_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeComponent6);
    dart.setLibraryUri(_ViewMaterialTreeComponent6, L1);
    dart.setFieldSignature(_ViewMaterialTreeComponent6, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent6.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_0_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_0$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent6;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent6 = material_tree_impl$46template._ViewMaterialTreeComponent6$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent6, _is__ViewMaterialTreeComponent6_default);
  var _MaterialTreeGroupFlatRadioComponent_0_5 = dart.privateName(material_tree_impl$46template, "_MaterialTreeGroupFlatRadioComponent_0_5");
  const _is__ViewMaterialTreeComponent7_default = Symbol('_is__ViewMaterialTreeComponent7_default');
  material_tree_impl$46template._ViewMaterialTreeComponent7$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialTreeGroupFlatRadioComponent0OfTL = () => (ViewMaterialTreeGroupFlatRadioComponent0OfTL = dart.constFn(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0$(TL())))();
    var MaterialTreeGroupFlatRadioComponentOfTL = () => (MaterialTreeGroupFlatRadioComponentOfTL = dart.constFn(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(TL())))();
    var MaterialTreeGroupFlatRadioComponentLOfTL = () => (MaterialTreeGroupFlatRadioComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeGroupFlatRadioComponentOfTL())))();
    var MaterialTreeRootOfTL = () => (MaterialTreeRootOfTL = dart.constFn(material_tree_root.MaterialTreeRoot$(TL())))();
    var MaterialTreeRootLOfTL = () => (MaterialTreeRootLOfTL = dart.constFn(dart.legacy(MaterialTreeRootOfTL())))();
    var VoidToMaterialTreeGroupFlatRadioComponentLOfTL = () => (VoidToMaterialTreeGroupFlatRadioComponentLOfTL = dart.constFn(dart.fnType(MaterialTreeGroupFlatRadioComponentLOfTL(), [])))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialTreeComponent7 extends app_view.AppView$(dart.legacy(material_tree_impl.MaterialTreeComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$] = new (ViewMaterialTreeGroupFlatRadioComponent0OfTL()).new(this, 0);
        let _el_0 = this[_compView_0$].rootEl;
        this[_MaterialTreeGroupFlatRadioComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupFlatRadioComponentLOfTL(), dart.wrapType(MaterialTreeGroupFlatRadioComponentL()), dart.fn(() => new (MaterialTreeGroupFlatRadioComponentOfTL()).new(MaterialTreeRootLOfTL().as(this.parentView.injectorGet(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), this[_compView_0$], DropdownHandleL().as(this.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex))), VoidToMaterialTreeGroupFlatRadioComponentLOfTL())) : new (MaterialTreeGroupFlatRadioComponentOfTL()).new(MaterialTreeRootLOfTL().as(this.parentView.injectorGet(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), this[_compView_0$], DropdownHandleL().as(this.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex)));
        this[_compView_0$].create0(this[_MaterialTreeGroupFlatRadioComponent_0_5]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), this.locals[$_get]("$implicit"));
        let currVal_0 = local_group;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
          this[_MaterialTreeGroupFlatRadioComponent_0_5].group = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        this[_compView_0$].detectHostChanges(firstCheck);
        this[_compView_0$].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$].destroyInternalState();
      }
    }
    (_ViewMaterialTreeComponent7.new = function(parentView, parentIndex) {
      this[_compView_0$] = null;
      this[_MaterialTreeGroupFlatRadioComponent_0_5] = null;
      this[_expr_0$] = null;
      _ViewMaterialTreeComponent7.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent7.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent7);
    _ViewMaterialTreeComponent7.prototype[_is__ViewMaterialTreeComponent7_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeComponent7);
    dart.setLibraryUri(_ViewMaterialTreeComponent7, L1);
    dart.setFieldSignature(_ViewMaterialTreeComponent7, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent7.__proto__),
      [_compView_0$]: dart.fieldType(dart.legacy(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0$(dart.legacy(T)))),
      [_MaterialTreeGroupFlatRadioComponent_0_5]: dart.fieldType(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(dart.legacy(T)))),
      [_expr_0$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent7;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent7 = material_tree_impl$46template._ViewMaterialTreeComponent7$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent7, _is__ViewMaterialTreeComponent7_default);
  const _is__ViewMaterialTreeComponent8_default = Symbol('_is__ViewMaterialTreeComponent8_default');
  material_tree_impl$46template._ViewMaterialTreeComponent8$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeComponent8 extends app_view.AppView$(dart.legacy(material_tree_impl.MaterialTreeComponent$(dart.legacy(T)))) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_tree_impl$46template.viewFactory_MaterialTreeComponent9(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgFor_0_9] = new ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
        this.init1(this[_appEl_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.options.optionGroups;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
          this[_NgFor_0_9].ngForOf = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_0_9].ngDoCheck();
        }
        this[_appEl_0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeComponent8.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgFor_0_9] = null;
      this[_expr_0$] = null;
      _ViewMaterialTreeComponent8.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent8.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent8);
    _ViewMaterialTreeComponent8.prototype[_is__ViewMaterialTreeComponent8_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeComponent8);
    dart.setLibraryUri(_ViewMaterialTreeComponent8, L1);
    dart.setFieldSignature(_ViewMaterialTreeComponent8, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent8.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_0_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_0$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent8;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent8 = material_tree_impl$46template._ViewMaterialTreeComponent8$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent8, _is__ViewMaterialTreeComponent8_default);
  var _MaterialTreeGroupFlatCheckComponent_0_5 = dart.privateName(material_tree_impl$46template, "_MaterialTreeGroupFlatCheckComponent_0_5");
  const _is__ViewMaterialTreeComponent9_default = Symbol('_is__ViewMaterialTreeComponent9_default');
  material_tree_impl$46template._ViewMaterialTreeComponent9$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialTreeGroupFlatCheckComponent0OfTL = () => (ViewMaterialTreeGroupFlatCheckComponent0OfTL = dart.constFn(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0$(TL())))();
    var MaterialTreeGroupFlatCheckComponentOfTL = () => (MaterialTreeGroupFlatCheckComponentOfTL = dart.constFn(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(TL())))();
    var MaterialTreeGroupFlatCheckComponentLOfTL = () => (MaterialTreeGroupFlatCheckComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeGroupFlatCheckComponentOfTL())))();
    var MaterialTreeRootOfTL = () => (MaterialTreeRootOfTL = dart.constFn(material_tree_root.MaterialTreeRoot$(TL())))();
    var MaterialTreeRootLOfTL = () => (MaterialTreeRootLOfTL = dart.constFn(dart.legacy(MaterialTreeRootOfTL())))();
    var VoidToMaterialTreeGroupFlatCheckComponentLOfTL = () => (VoidToMaterialTreeGroupFlatCheckComponentLOfTL = dart.constFn(dart.fnType(MaterialTreeGroupFlatCheckComponentLOfTL(), [])))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialTreeComponent9 extends app_view.AppView$(dart.legacy(material_tree_impl.MaterialTreeComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$] = new (ViewMaterialTreeGroupFlatCheckComponent0OfTL()).new(this, 0);
        let _el_0 = this[_compView_0$].rootEl;
        this[_MaterialTreeGroupFlatCheckComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupFlatCheckComponentLOfTL(), dart.wrapType(MaterialTreeGroupFlatCheckComponentL()), dart.fn(() => new (MaterialTreeGroupFlatCheckComponentOfTL()).new(MaterialTreeRootLOfTL().as(this.parentView.injectorGet(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), this[_compView_0$], DropdownHandleL().as(this.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex))), VoidToMaterialTreeGroupFlatCheckComponentLOfTL())) : new (MaterialTreeGroupFlatCheckComponentOfTL()).new(MaterialTreeRootLOfTL().as(this.parentView.injectorGet(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), this[_compView_0$], DropdownHandleL().as(this.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex)));
        this[_compView_0$].create0(this[_MaterialTreeGroupFlatCheckComponent_0_5]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), this.locals[$_get]("$implicit"));
        let currVal_0 = local_group;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
          this[_MaterialTreeGroupFlatCheckComponent_0_5].group = currVal_0;
          this[_expr_0$] = currVal_0;
        }
        this[_compView_0$].detectHostChanges(firstCheck);
        this[_compView_0$].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$].destroyInternalState();
      }
    }
    (_ViewMaterialTreeComponent9.new = function(parentView, parentIndex) {
      this[_compView_0$] = null;
      this[_MaterialTreeGroupFlatCheckComponent_0_5] = null;
      this[_expr_0$] = null;
      _ViewMaterialTreeComponent9.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeComponent9.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponent9);
    _ViewMaterialTreeComponent9.prototype[_is__ViewMaterialTreeComponent9_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeComponent9);
    dart.setLibraryUri(_ViewMaterialTreeComponent9, L1);
    dart.setFieldSignature(_ViewMaterialTreeComponent9, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponent9.__proto__),
      [_compView_0$]: dart.fieldType(dart.legacy(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0$(dart.legacy(T)))),
      [_MaterialTreeGroupFlatCheckComponent_0_5]: dart.fieldType(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(dart.legacy(T)))),
      [_expr_0$]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeComponent9;
  });
  material_tree_impl$46template._ViewMaterialTreeComponent9 = material_tree_impl$46template._ViewMaterialTreeComponent9$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponent9, _is__ViewMaterialTreeComponent9_default);
  var _MaterialTreeComponent_0_5$ = dart.privateName(material_tree_impl$46template, "_MaterialTreeComponent_0_5");
  const _is__ViewMaterialTreeComponentHost0_default = Symbol('_is__ViewMaterialTreeComponentHost0_default');
  material_tree_impl$46template._ViewMaterialTreeComponentHost0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialTreeComponent0OfTL = () => (ViewMaterialTreeComponent0OfTL = dart.constFn(material_tree_impl$46template.ViewMaterialTreeComponent0$(TL())))();
    var MaterialTreeComponentOfTL = () => (MaterialTreeComponentOfTL = dart.constFn(material_tree_impl.MaterialTreeComponent$(TL())))();
    var MaterialTreeComponentLOfTL = () => (MaterialTreeComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeComponentOfTL())))();
    var VoidToMaterialTreeComponentLOfTL = () => (VoidToMaterialTreeComponentLOfTL = dart.constFn(dart.fnType(MaterialTreeComponentLOfTL(), [])))();
    var ComponentRefOfMaterialTreeComponentLOfTL = () => (ComponentRefOfMaterialTreeComponentLOfTL = dart.constFn(component_factory.ComponentRef$(MaterialTreeComponentLOfTL())))();
    class _ViewMaterialTreeComponentHost0 extends app_view.AppView$(dart.legacy(material_tree_impl.MaterialTreeComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$] = new (ViewMaterialTreeComponent0OfTL()).new(this, 0);
        this.rootEl = this[_compView_0$].rootEl;
        this[_MaterialTreeComponent_0_5$] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeComponentLOfTL(), dart.wrapType(MaterialTreeComponentL()), dart.fn(() => new (MaterialTreeComponentOfTL()).new(MaterialTreeRootL().as(this.injectorGetOptional(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), null), VoidToMaterialTreeComponentLOfTL())) : new (MaterialTreeComponentOfTL()).new(MaterialTreeRootL().as(this.injectorGetOptional(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), null);
        this[_compView_0$].create(this[_MaterialTreeComponent_0_5$], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialTreeComponentLOfTL()).new(0, this, this.rootEl, this[_MaterialTreeComponent_0_5$]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(MaterialTreeRootL()) && 0 === nodeIndex) {
          return this[_MaterialTreeComponent_0_5$];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        this[_compView_0$].detectHostChanges(firstCheck);
        this[_compView_0$].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$].destroyInternalState();
      }
    }
    (_ViewMaterialTreeComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0$] = null;
      this[_MaterialTreeComponent_0_5$] = null;
      _ViewMaterialTreeComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
      ;
    }).prototype = _ViewMaterialTreeComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeComponentHost0);
    _ViewMaterialTreeComponentHost0.prototype[_is__ViewMaterialTreeComponentHost0_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeComponentHost0);
    dart.setMethodSignature(_ViewMaterialTreeComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeComponentHost0.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeComponentHost0, L1);
    dart.setFieldSignature(_ViewMaterialTreeComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeComponentHost0.__proto__),
      [_compView_0$]: dart.fieldType(dart.legacy(material_tree_impl$46template.ViewMaterialTreeComponent0$(dart.legacy(T)))),
      [_MaterialTreeComponent_0_5$]: dart.fieldType(dart.legacy(material_tree_impl.MaterialTreeComponent$(dart.legacy(T))))
    }));
    return _ViewMaterialTreeComponentHost0;
  });
  material_tree_impl$46template._ViewMaterialTreeComponentHost0 = material_tree_impl$46template._ViewMaterialTreeComponentHost0$();
  dart.addTypeTests(material_tree_impl$46template._ViewMaterialTreeComponentHost0, _is__ViewMaterialTreeComponentHost0_default);
  material_tree_impl$46template.viewFactory_MaterialTreeComponent1 = function viewFactory_MaterialTreeComponent1(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent1$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponent2 = function viewFactory_MaterialTreeComponent2(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent2$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponent3 = function viewFactory_MaterialTreeComponent3(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent3$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponent4 = function viewFactory_MaterialTreeComponent4(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent4$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponent5 = function viewFactory_MaterialTreeComponent5(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent5$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponent6 = function viewFactory_MaterialTreeComponent6(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent6$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponent7 = function viewFactory_MaterialTreeComponent7(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent7$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponent8 = function viewFactory_MaterialTreeComponent8(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent8$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponent9 = function viewFactory_MaterialTreeComponent9(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponent9$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_impl$46template.viewFactory_MaterialTreeComponentHost0 = function viewFactory_MaterialTreeComponentHost0(T, parentView, parentIndex) {
    return new (material_tree_impl$46template._ViewMaterialTreeComponentHost0$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_impl$46template.initReflector = function initReflector$() {
    if (dart.test(material_tree_impl$46template._visited)) {
      return;
    }
    material_tree_impl$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialTreeComponentL()), material_tree_impl$46template.MaterialTreeComponentNgFactory);
    material_tree_group$46template.initReflector();
    material_tree_group_flat$46template.initReflector();
    material_tree_rendering_options$46template.initReflector();
    material_tree_root$46template.initReflector();
    angular$46template.initReflector();
    select$46template.initReflector();
    selection_container$46template.initReflector();
    selection_model$46template.initReflector();
    selection_options$46template.initReflector();
    has_factory$46template.initReflector();
  };
  dart.copyProperties(material_tree_impl$46template, {
    get MaterialTreeComponentNgFactory() {
      return material_tree_impl$46template._MaterialTreeComponentNgFactory;
    }
  });
  var C11;
  var C10;
  var C9;
  dart.defineLazy(material_tree_impl$46template, {
    /*material_tree_impl$46template.styles$MaterialTreeComponent*/get styles$MaterialTreeComponent() {
      return C3 || CT.C3;
    },
    /*material_tree_impl$46template._MaterialTreeComponentNgFactory*/get _MaterialTreeComponentNgFactory() {
      return C9 || CT.C9;
    },
    /*material_tree_impl$46template.styles$MaterialTreeComponentHost*/get styles$MaterialTreeComponentHost() {
      return C3 || CT.C3;
    },
    /*material_tree_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var _appEl_0$ = dart.privateName(material_tree_group_flat$46template, "_appEl_0");
  var _NgFor_0_9$ = dart.privateName(material_tree_group_flat$46template, "_NgFor_0_9");
  var _expr_0$0 = dart.privateName(material_tree_group_flat$46template, "_expr_0");
  const _is_ViewMaterialTreeGroupFlatListComponent0_default = Symbol('_is_ViewMaterialTreeGroupFlatListComponent0_default');
  material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ViewMaterialTreeGroupFlatListComponent0 extends app_view.AppView$(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(dart.legacy(T)))) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart" : null;
      }
      build() {
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_0$] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0$], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent1(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgFor_0_9$] = new ng_for.NgFor.new(this[_appEl_0$], _TemplateRef_0_8);
        this.init0();
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.group;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
          this[_NgFor_0_9$].ngForOf = currVal_0;
          this[_expr_0$0] = currVal_0;
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_0_9$].ngDoCheck();
        }
        this[_appEl_0$].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0$].destroyNestedViews();
      }
      detectHostChanges(firstCheck) {
        let _ctx = this.ctx;
        if (dart.test(firstCheck)) {
          if (_ctx.isMaterialTreeGroup != null) {
            dom_helpers.updateClassBindingNonHtml(this.rootEl, "material-tree-group", _ctx.isMaterialTreeGroup);
          }
        }
      }
      initComponentStyles() {
        let styles = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._componentStyles;
        if (styles == null) {
          material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._componentStyles = styles = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponent, material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeGroupFlatListComponent0.new = function(parentView, parentIndex) {
      this[_appEl_0$] = null;
      this[_NgFor_0_9$] = null;
      this[_expr_0$0] = null;
      ViewMaterialTreeGroupFlatListComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootEl = HtmlElementL().as(html.document[$createElement]("material-tree-group-flat-list"));
    }).prototype = ViewMaterialTreeGroupFlatListComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeGroupFlatListComponent0);
    ViewMaterialTreeGroupFlatListComponent0.prototype[_is_ViewMaterialTreeGroupFlatListComponent0_default] = true;
    dart.addTypeCaches(ViewMaterialTreeGroupFlatListComponent0);
    dart.setLibraryUri(ViewMaterialTreeGroupFlatListComponent0, L2);
    dart.setFieldSignature(ViewMaterialTreeGroupFlatListComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeGroupFlatListComponent0.__proto__),
      [_appEl_0$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_0_9$]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_0$0]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialTreeGroupFlatListComponent0;
  });
  material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0 = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0$();
  dart.defineLazy(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0, {
    /*material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dart.addTypeTests(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0, _is_ViewMaterialTreeGroupFlatListComponent0_default);
  var _appEl_1$0 = dart.privateName(material_tree_group_flat$46template, "_appEl_1");
  var _NgIf_1_9$0 = dart.privateName(material_tree_group_flat$46template, "_NgIf_1_9");
  var _appEl_2$0 = dart.privateName(material_tree_group_flat$46template, "_appEl_2");
  var _NgIf_2_9$0 = dart.privateName(material_tree_group_flat$46template, "_NgIf_2_9");
  const _is__ViewMaterialTreeGroupFlatListComponent1_default = Symbol('_is__ViewMaterialTreeGroupFlatListComponent1_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeGroupFlatListComponent1 extends app_view.AppView$(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        this.updateChildClass(HtmlElementL().as(_el_0), "material-tree-option");
        this.addShimC(HtmlElementL().as(_el_0));
        let _anchor_1 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_1$0] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$0], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent2(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_1_9$0] = new ng_if.NgIf.new(this[_appEl_1$0], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_2$0] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$0], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent3(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_2_9$0] = new ng_if.NgIf.new(this[_appEl_2$0], _TemplateRef_2_8);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_1_9$0].ngIf = _ctx.useComponentRenderer;
        this[_NgIf_2_9$0].ngIf = !dart.test(_ctx.useComponentRenderer);
        this[_appEl_1$0].detectChangesInNestedViews();
        this[_appEl_2$0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_1$0].destroyNestedViews();
        this[_appEl_2$0].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeGroupFlatListComponent1.new = function(parentView, parentIndex) {
      this[_appEl_1$0] = null;
      this[_NgIf_1_9$0] = null;
      this[_appEl_2$0] = null;
      this[_NgIf_2_9$0] = null;
      _ViewMaterialTreeGroupFlatListComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatListComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatListComponent1);
    _ViewMaterialTreeGroupFlatListComponent1.prototype[_is__ViewMaterialTreeGroupFlatListComponent1_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupFlatListComponent1);
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatListComponent1, L2);
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatListComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatListComponent1.__proto__),
      [_appEl_1$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9$0]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_2$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9$0]: dart.fieldType(dart.legacy(ng_if.NgIf))
    }));
    return _ViewMaterialTreeGroupFlatListComponent1;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1, _is__ViewMaterialTreeGroupFlatListComponent1_default);
  var _compView_0$0 = dart.privateName(material_tree_group_flat$46template, "_compView_0");
  var _DynamicComponent_0_8 = dart.privateName(material_tree_group_flat$46template, "_DynamicComponent_0_8");
  var _expr_1$0 = dart.privateName(material_tree_group_flat$46template, "_expr_1");
  var _expr_2$0 = dart.privateName(material_tree_group_flat$46template, "_expr_2");
  const _is__ViewMaterialTreeGroupFlatListComponent2_default = Symbol('_is__ViewMaterialTreeGroupFlatListComponent2_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeGroupFlatListComponent2 extends app_view.AppView$(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$0] = new dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0$0].rootEl;
        this.updateChildClassNonHtml(_el_0, "item component");
        this.addShimC(_el_0);
        this[_appEl_0$] = new view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DynamicComponentL(), dart.wrapType(DynamicComponentL()), dart.fn(() => new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentView.viewData.parentIndex)), this[_compView_0$0], this[_appEl_0$]), VoidToDynamicComponentL())) : new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentView.viewData.parentIndex)), this[_compView_0$0], this[_appEl_0$]);
        this[_compView_0$0].create0(this[_DynamicComponent_0_8]);
        this.init1(this[_appEl_0$]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_option = optimizations.unsafeCast(TL(), this.parentView.locals[$_get]("$implicit"));
        changed = false;
        let currVal_0 = _ctx.getComponentType(local_option);
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
          this[_DynamicComponent_0_8].componentType = currVal_0;
          changed = true;
          this[_expr_0$0] = currVal_0;
        }
        let currVal_1 = _ctx.getComponentFactory(local_option);
        if (dart.test(app_view_utils.checkBinding(this[_expr_1$0], currVal_1))) {
          this[_DynamicComponent_0_8].componentFactory = currVal_1;
          changed = true;
          this[_expr_1$0] = currVal_1;
        }
        let currVal_2 = local_option;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2$0], currVal_2))) {
          this[_DynamicComponent_0_8].value = currVal_2;
          changed = true;
          this[_expr_2$0] = currVal_2;
        }
        if (changed) {
          this[_DynamicComponent_0_8].ngAfterChanges();
        }
        this[_appEl_0$].detectChangesInNestedViews();
        this[_compView_0$0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_0$].destroyNestedViews();
        this[_compView_0$0].destroyInternalState();
        this[_DynamicComponent_0_8].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupFlatListComponent2.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_appEl_0$] = null;
      this[_DynamicComponent_0_8] = null;
      this[_expr_0$0] = null;
      this[_expr_1$0] = null;
      this[_expr_2$0] = null;
      _ViewMaterialTreeGroupFlatListComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatListComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatListComponent2);
    _ViewMaterialTreeGroupFlatListComponent2.prototype[_is__ViewMaterialTreeGroupFlatListComponent2_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupFlatListComponent2);
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatListComponent2, L2);
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatListComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatListComponent2.__proto__),
      [_compView_0$0]: dart.fieldType(dart.legacy(dynamic_component$46template.ViewDynamicComponent0)),
      [_appEl_0$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_DynamicComponent_0_8]: dart.fieldType(dart.legacy(dynamic_component.DynamicComponent)),
      [_expr_0$0]: dart.fieldType(dart.dynamic),
      [_expr_1$0]: dart.fieldType(dart.dynamic),
      [_expr_2$0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeGroupFlatListComponent2;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2, _is__ViewMaterialTreeGroupFlatListComponent2_default);
  var _textBinding_1$ = dart.privateName(material_tree_group_flat$46template, "_textBinding_1");
  const _is__ViewMaterialTreeGroupFlatListComponent3_default = Symbol('_is__ViewMaterialTreeGroupFlatListComponent3_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeGroupFlatListComponent3 extends app_view.AppView$(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(HtmlElementL().as(_el_0), "item text");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1$].element);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_option = optimizations.unsafeCast(TL(), this.parentView.locals[$_get]("$implicit"));
        this[_textBinding_1$].updateText(interpolate.interpolateString0(_ctx.getOptionAsText(local_option)));
      }
    }
    (_ViewMaterialTreeGroupFlatListComponent3.new = function(parentView, parentIndex) {
      this[_textBinding_1$] = new text_binding.TextBinding.new();
      _ViewMaterialTreeGroupFlatListComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatListComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatListComponent3);
    _ViewMaterialTreeGroupFlatListComponent3.prototype[_is__ViewMaterialTreeGroupFlatListComponent3_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupFlatListComponent3);
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatListComponent3, L2);
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatListComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatListComponent3.__proto__),
      [_textBinding_1$]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
    }));
    return _ViewMaterialTreeGroupFlatListComponent3;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3, _is__ViewMaterialTreeGroupFlatListComponent3_default);
  var _MaterialTreeGroupFlatListComponent_0_5$ = dart.privateName(material_tree_group_flat$46template, "_MaterialTreeGroupFlatListComponent_0_5");
  const _is__ViewMaterialTreeGroupFlatListComponentHost0_default = Symbol('_is__ViewMaterialTreeGroupFlatListComponentHost0_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialTreeGroupFlatListComponent0OfTL = () => (ViewMaterialTreeGroupFlatListComponent0OfTL = dart.constFn(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0$(TL())))();
    var MaterialTreeGroupFlatListComponentOfTL = () => (MaterialTreeGroupFlatListComponentOfTL = dart.constFn(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(TL())))();
    var MaterialTreeGroupFlatListComponentLOfTL = () => (MaterialTreeGroupFlatListComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeGroupFlatListComponentOfTL())))();
    var MaterialTreeRootOfTL = () => (MaterialTreeRootOfTL = dart.constFn(material_tree_root.MaterialTreeRoot$(TL())))();
    var MaterialTreeRootLOfTL = () => (MaterialTreeRootLOfTL = dart.constFn(dart.legacy(MaterialTreeRootOfTL())))();
    var VoidToMaterialTreeGroupFlatListComponentLOfTL = () => (VoidToMaterialTreeGroupFlatListComponentLOfTL = dart.constFn(dart.fnType(MaterialTreeGroupFlatListComponentLOfTL(), [])))();
    var ComponentRefOfMaterialTreeGroupFlatListComponentLOfTL = () => (ComponentRefOfMaterialTreeGroupFlatListComponentLOfTL = dart.constFn(component_factory.ComponentRef$(MaterialTreeGroupFlatListComponentLOfTL())))();
    class _ViewMaterialTreeGroupFlatListComponentHost0 extends app_view.AppView$(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$0] = new (ViewMaterialTreeGroupFlatListComponent0OfTL()).new(this, 0);
        this.rootEl = this[_compView_0$0].rootEl;
        this[_MaterialTreeGroupFlatListComponent_0_5$] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupFlatListComponentLOfTL(), dart.wrapType(MaterialTreeGroupFlatListComponentL()), dart.fn(() => new (MaterialTreeGroupFlatListComponentOfTL()).new(MaterialTreeRootLOfTL().as(this.injectorGet(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), this[_compView_0$0]), VoidToMaterialTreeGroupFlatListComponentLOfTL())) : new (MaterialTreeGroupFlatListComponentOfTL()).new(MaterialTreeRootLOfTL().as(this.injectorGet(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), this[_compView_0$0]);
        this[_compView_0$0].create(this[_MaterialTreeGroupFlatListComponent_0_5$], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialTreeGroupFlatListComponentLOfTL()).new(0, this, this.rootEl, this[_MaterialTreeGroupFlatListComponent_0_5$]);
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        this[_compView_0$0].detectHostChanges(firstCheck);
        this[_compView_0$0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$0].destroyInternalState();
      }
    }
    (_ViewMaterialTreeGroupFlatListComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_MaterialTreeGroupFlatListComponent_0_5$] = null;
      _ViewMaterialTreeGroupFlatListComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
      ;
    }).prototype = _ViewMaterialTreeGroupFlatListComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatListComponentHost0);
    _ViewMaterialTreeGroupFlatListComponentHost0.prototype[_is__ViewMaterialTreeGroupFlatListComponentHost0_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupFlatListComponentHost0);
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatListComponentHost0, L2);
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatListComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatListComponentHost0.__proto__),
      [_compView_0$0]: dart.fieldType(dart.legacy(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatListComponent0$(dart.legacy(T)))),
      [_MaterialTreeGroupFlatListComponent_0_5$]: dart.fieldType(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatListComponent$(dart.legacy(T))))
    }));
    return _ViewMaterialTreeGroupFlatListComponentHost0;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0, _is__ViewMaterialTreeGroupFlatListComponentHost0_default);
  var _query_MaterialRadioComponent_0_0_isDirty = dart.privateName(material_tree_group_flat$46template, "_query_MaterialRadioComponent_0_0_isDirty");
  var _MaterialRadioGroupComponent_0_5 = dart.privateName(material_tree_group_flat$46template, "_MaterialRadioGroupComponent_0_5");
  var _NgFor_1_9 = dart.privateName(material_tree_group_flat$46template, "_NgFor_1_9");
  var _MaterialRadioComponent_0_5 = dart.privateName(material_tree_group_flat$46template, "_MaterialRadioComponent_0_5");
  const _is_ViewMaterialTreeGroupFlatRadioComponent0_default = Symbol('_is_ViewMaterialTreeGroupFlatRadioComponent0_default');
  material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ViewMaterialTreeGroupFlatRadioComponent0 extends app_view.AppView$(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(dart.legacy(T)))) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart" : null;
      }
      build() {
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        this[_compView_0$0] = new material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 0);
        let _el_0 = this[_compView_0$0].rootEl;
        parentRenderNode[$append](_el_0);
        this.addShimC(_el_0);
        this[_MaterialRadioGroupComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialRadioGroupComponentL(), dart.wrapType(MaterialRadioGroupComponentL()), dart.fn(() => new material_radio_group.MaterialRadioGroupComponent.new(NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), null), VoidToMaterialRadioGroupComponentL())) : new material_radio_group.MaterialRadioGroupComponent.new(NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), null);
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1$0] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$0], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent1(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1$0], _TemplateRef_1_8);
        this[_compView_0$0].create(this[_MaterialRadioGroupComponent_0_5], JSArrayOfObjectL().of([JSArrayOfViewContainerL().of([this[_appEl_1$0]])]));
        this.init0();
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(MaterialRadioGroupComponentL()) && dart.notNull(nodeIndex) <= 1) {
          return this[_MaterialRadioGroupComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        changed = false;
        if (firstCheck) {
          if (_ctx.selectionModel != null) {
            this[_MaterialRadioGroupComponent_0_5].valueSelection = _ctx.selectionModel;
            changed = true;
          }
        }
        if (changed) {
          this[_compView_0$0].markAsCheckOnce();
        }
        let currVal_1 = _ctx.group;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1$0], currVal_1))) {
          this[_NgFor_1_9].ngForOf = currVal_1;
          this[_expr_1$0] = currVal_1;
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_1_9].ngDoCheck();
        }
        this[_appEl_1$0].detectChangesInNestedViews();
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          if (dart.test(this[_query_MaterialRadioComponent_0_0_isDirty])) {
            this[_MaterialRadioGroupComponent_0_5].radioComponents = this[_appEl_1$0].mapNestedViews(MaterialRadioComponentL(), _ViewMaterialTreeGroupFlatRadioComponent1L(), dart.fn(nestedView => JSArrayOfMaterialRadioComponentL().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewMaterialTreeGroupFlatRadioComponent1LToListLOfMaterialRadioComponentL()));
            this[_query_MaterialRadioComponent_0_0_isDirty] = false;
          }
          if (firstCheck) {
            this[_MaterialRadioGroupComponent_0_5].ngAfterContentInit();
          }
        }
        this[_compView_0$0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_1$0].destroyNestedViews();
        this[_compView_0$0].destroyInternalState();
        this[_MaterialRadioGroupComponent_0_5].ngOnDestroy();
      }
      detectHostChanges(firstCheck) {
        let _ctx = this.ctx;
        if (dart.test(firstCheck)) {
          if (_ctx.isMaterialTreeGroup != null) {
            dom_helpers.updateClassBindingNonHtml(this.rootEl, "material-tree-group", _ctx.isMaterialTreeGroup);
          }
        }
      }
      initComponentStyles() {
        let styles = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._componentStyles;
        if (styles == null) {
          material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._componentStyles = styles = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponent, material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeGroupFlatRadioComponent0.new = function(parentView, parentIndex) {
      this[_query_MaterialRadioComponent_0_0_isDirty] = true;
      this[_compView_0$0] = null;
      this[_MaterialRadioGroupComponent_0_5] = null;
      this[_appEl_1$0] = null;
      this[_NgFor_1_9] = null;
      this[_expr_1$0] = null;
      ViewMaterialTreeGroupFlatRadioComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootEl = HtmlElementL().as(html.document[$createElement]("material-tree-group-flat-radio"));
    }).prototype = ViewMaterialTreeGroupFlatRadioComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeGroupFlatRadioComponent0);
    ViewMaterialTreeGroupFlatRadioComponent0.prototype[_is_ViewMaterialTreeGroupFlatRadioComponent0_default] = true;
    dart.addTypeCaches(ViewMaterialTreeGroupFlatRadioComponent0);
    dart.setMethodSignature(ViewMaterialTreeGroupFlatRadioComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialTreeGroupFlatRadioComponent0.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(ViewMaterialTreeGroupFlatRadioComponent0, L2);
    dart.setFieldSignature(ViewMaterialTreeGroupFlatRadioComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeGroupFlatRadioComponent0.__proto__),
      [_query_MaterialRadioComponent_0_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
      [_compView_0$0]: dart.fieldType(dart.legacy(material_radio_group$46template.ViewMaterialRadioGroupComponent0)),
      [_MaterialRadioGroupComponent_0_5]: dart.fieldType(dart.legacy(material_radio_group.MaterialRadioGroupComponent)),
      [_appEl_1$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_1$0]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialTreeGroupFlatRadioComponent0;
  });
  material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0 = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0$();
  dart.defineLazy(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, {
    /*material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dart.addTypeTests(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0, _is_ViewMaterialTreeGroupFlatRadioComponent0_default);
  var _expr_3$0 = dart.privateName(material_tree_group_flat$46template, "_expr_3");
  var _el_0$ = dart.privateName(material_tree_group_flat$46template, "_el_0");
  const _is__ViewMaterialTreeGroupFlatRadioComponent1_default = Symbol('_is__ViewMaterialTreeGroupFlatRadioComponent1_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeGroupFlatRadioComponent1 extends app_view.AppView$(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$0] = new material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
        this[_el_0$] = this[_compView_0$0].rootEl;
        this.updateChildClassNonHtml(this[_el_0$], interpolate.interpolateString2("", "material-tree-option tree-selection-state", " ", "themeable", ""));
        dom_helpers.setAttribute(this[_el_0$], "role", "option");
        this.addShimC(HtmlElementL().as(this[_el_0$]));
        this[_MaterialRadioComponent_0_5] = new material_radio.MaterialRadioComponent.new(HtmlElementL().as(this[_el_0$]), this[_compView_0$0], optimizations.unsafeCast(ViewMaterialTreeGroupFlatRadioComponent0L(), this.parentView)[_MaterialRadioGroupComponent_0_5], null, "option");
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1$0] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$0], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent2(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_1_9$0] = new ng_if.NgIf.new(this[_appEl_1$0], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.createAnchor();
        this[_appEl_2$0] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$0], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent3(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_2_9$0] = new ng_if.NgIf.new(this[_appEl_2$0], _TemplateRef_2_8);
        this[_compView_0$0].create(this[_MaterialRadioComponent_0_5], JSArrayOfObjectL().of([JSArrayOfViewContainerL().of([this[_appEl_1$0], this[_appEl_2$0]])]));
        this.init1(this[_el_0$]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(HasDisabledL()) && dart.notNull(nodeIndex) <= 2) {
          return this[_MaterialRadioComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        let local_option = optimizations.unsafeCast(TL(), this.locals[$_get]("$implicit"));
        changed = false;
        let currVal_2 = local_option;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2$0], currVal_2))) {
          this[_MaterialRadioComponent_0_5].value = currVal_2;
          changed = true;
          this[_expr_2$0] = currVal_2;
        }
        let currVal_3 = _ctx.isReadOnly;
        if (dart.test(app_view_utils.checkBinding(this[_expr_3$0], currVal_3))) {
          this[_MaterialRadioComponent_0_5].disabled = currVal_3;
          changed = true;
          this[_expr_3$0] = currVal_3;
        }
        if (changed) {
          this[_compView_0$0].markAsCheckOnce();
        }
        this[_NgIf_1_9$0].ngIf = _ctx.useComponentRenderer;
        this[_NgIf_2_9$0].ngIf = !dart.test(_ctx.useComponentRenderer);
        this[_appEl_1$0].detectChangesInNestedViews();
        this[_appEl_2$0].detectChangesInNestedViews();
        let currVal_0 = _ctx.isSelected(local_option);
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
          dom_helpers.updateClassBindingNonHtml(this[_el_0$], "selected", currVal_0);
          this[_expr_0$0] = currVal_0;
        }
        let currVal_1 = _ctx.isSelectable(local_option);
        if (dart.test(app_view_utils.checkBinding(this[_expr_1$0], currVal_1))) {
          dom_helpers.updateClassBindingNonHtml(this[_el_0$], "selectable", currVal_1);
          this[_expr_1$0] = currVal_1;
        }
        this[_compView_0$0].detectHostChanges(firstCheck);
        this[_compView_0$0].detectChanges();
      }
      dirtyParentQueriesInternal() {
        optimizations.unsafeCast(ViewMaterialTreeGroupFlatRadioComponent0L(), this.parentView)[_query_MaterialRadioComponent_0_0_isDirty] = true;
      }
      destroyInternal() {
        this[_appEl_1$0].destroyNestedViews();
        this[_appEl_2$0].destroyNestedViews();
        this[_compView_0$0].destroyInternalState();
        this[_MaterialRadioComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupFlatRadioComponent1.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_MaterialRadioComponent_0_5] = null;
      this[_appEl_1$0] = null;
      this[_NgIf_1_9$0] = null;
      this[_appEl_2$0] = null;
      this[_NgIf_2_9$0] = null;
      this[_expr_0$0] = null;
      this[_expr_1$0] = null;
      this[_expr_2$0] = null;
      this[_expr_3$0] = null;
      this[_el_0$] = null;
      _ViewMaterialTreeGroupFlatRadioComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatRadioComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatRadioComponent1);
    _ViewMaterialTreeGroupFlatRadioComponent1.prototype[_is__ViewMaterialTreeGroupFlatRadioComponent1_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupFlatRadioComponent1);
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatRadioComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatRadioComponent1.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatRadioComponent1, L2);
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatRadioComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatRadioComponent1.__proto__),
      [_compView_0$0]: dart.fieldType(dart.legacy(material_radio$46template.ViewMaterialRadioComponent0)),
      [_MaterialRadioComponent_0_5]: dart.fieldType(dart.legacy(material_radio.MaterialRadioComponent)),
      [_appEl_1$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9$0]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_2$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9$0]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_expr_0$0]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_1$0]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_2$0]: dart.fieldType(dart.dynamic),
      [_expr_3$0]: dart.fieldType(dart.legacy(core.bool)),
      [_el_0$]: dart.fieldType(dart.legacy(html.Element))
    }));
    return _ViewMaterialTreeGroupFlatRadioComponent1;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1, _is__ViewMaterialTreeGroupFlatRadioComponent1_default);
  const _is__ViewMaterialTreeGroupFlatRadioComponent2_default = Symbol('_is__ViewMaterialTreeGroupFlatRadioComponent2_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeGroupFlatRadioComponent2 extends app_view.AppView$(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$0] = new dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0$0].rootEl;
        this.updateChildClassNonHtml(_el_0, "item component");
        this.addShimC(_el_0);
        this[_appEl_0$] = new view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DynamicComponentL(), dart.wrapType(DynamicComponentL()), dart.fn(() => new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentView.parentView.viewData.parentIndex)), this[_compView_0$0], this[_appEl_0$]), VoidToDynamicComponentL())) : new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentView.parentView.viewData.parentIndex)), this[_compView_0$0], this[_appEl_0$]);
        this[_compView_0$0].create0(this[_DynamicComponent_0_8]);
        this.init1(this[_appEl_0$]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_option = optimizations.unsafeCast(TL(), this.parentView.locals[$_get]("$implicit"));
        changed = false;
        let currVal_0 = _ctx.getComponentType(local_option);
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
          this[_DynamicComponent_0_8].componentType = currVal_0;
          changed = true;
          this[_expr_0$0] = currVal_0;
        }
        let currVal_1 = _ctx.getComponentFactory(local_option);
        if (dart.test(app_view_utils.checkBinding(this[_expr_1$0], currVal_1))) {
          this[_DynamicComponent_0_8].componentFactory = currVal_1;
          changed = true;
          this[_expr_1$0] = currVal_1;
        }
        let currVal_2 = local_option;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2$0], currVal_2))) {
          this[_DynamicComponent_0_8].value = currVal_2;
          changed = true;
          this[_expr_2$0] = currVal_2;
        }
        if (changed) {
          this[_DynamicComponent_0_8].ngAfterChanges();
        }
        this[_appEl_0$].detectChangesInNestedViews();
        this[_compView_0$0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_0$].destroyNestedViews();
        this[_compView_0$0].destroyInternalState();
        this[_DynamicComponent_0_8].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupFlatRadioComponent2.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_appEl_0$] = null;
      this[_DynamicComponent_0_8] = null;
      this[_expr_0$0] = null;
      this[_expr_1$0] = null;
      this[_expr_2$0] = null;
      _ViewMaterialTreeGroupFlatRadioComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatRadioComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatRadioComponent2);
    _ViewMaterialTreeGroupFlatRadioComponent2.prototype[_is__ViewMaterialTreeGroupFlatRadioComponent2_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupFlatRadioComponent2);
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatRadioComponent2, L2);
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatRadioComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatRadioComponent2.__proto__),
      [_compView_0$0]: dart.fieldType(dart.legacy(dynamic_component$46template.ViewDynamicComponent0)),
      [_appEl_0$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_DynamicComponent_0_8]: dart.fieldType(dart.legacy(dynamic_component.DynamicComponent)),
      [_expr_0$0]: dart.fieldType(dart.dynamic),
      [_expr_1$0]: dart.fieldType(dart.dynamic),
      [_expr_2$0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeGroupFlatRadioComponent2;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2, _is__ViewMaterialTreeGroupFlatRadioComponent2_default);
  const _is__ViewMaterialTreeGroupFlatRadioComponent3_default = Symbol('_is__ViewMaterialTreeGroupFlatRadioComponent3_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeGroupFlatRadioComponent3 extends app_view.AppView$(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(HtmlElementL().as(_el_0), "item text");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1$].element);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_option = optimizations.unsafeCast(TL(), this.parentView.locals[$_get]("$implicit"));
        this[_textBinding_1$].updateText(interpolate.interpolateString0(_ctx.getOptionAsText(local_option)));
      }
    }
    (_ViewMaterialTreeGroupFlatRadioComponent3.new = function(parentView, parentIndex) {
      this[_textBinding_1$] = new text_binding.TextBinding.new();
      _ViewMaterialTreeGroupFlatRadioComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatRadioComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatRadioComponent3);
    _ViewMaterialTreeGroupFlatRadioComponent3.prototype[_is__ViewMaterialTreeGroupFlatRadioComponent3_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupFlatRadioComponent3);
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatRadioComponent3, L2);
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatRadioComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatRadioComponent3.__proto__),
      [_textBinding_1$]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
    }));
    return _ViewMaterialTreeGroupFlatRadioComponent3;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3, _is__ViewMaterialTreeGroupFlatRadioComponent3_default);
  var _MaterialTreeGroupFlatRadioComponent_0_5$ = dart.privateName(material_tree_group_flat$46template, "_MaterialTreeGroupFlatRadioComponent_0_5");
  const _is__ViewMaterialTreeGroupFlatRadioComponentHost0_default = Symbol('_is__ViewMaterialTreeGroupFlatRadioComponentHost0_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialTreeGroupFlatRadioComponent0OfTL = () => (ViewMaterialTreeGroupFlatRadioComponent0OfTL = dart.constFn(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0$(TL())))();
    var MaterialTreeGroupFlatRadioComponentOfTL = () => (MaterialTreeGroupFlatRadioComponentOfTL = dart.constFn(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(TL())))();
    var MaterialTreeGroupFlatRadioComponentLOfTL = () => (MaterialTreeGroupFlatRadioComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeGroupFlatRadioComponentOfTL())))();
    var MaterialTreeRootOfTL = () => (MaterialTreeRootOfTL = dart.constFn(material_tree_root.MaterialTreeRoot$(TL())))();
    var MaterialTreeRootLOfTL = () => (MaterialTreeRootLOfTL = dart.constFn(dart.legacy(MaterialTreeRootOfTL())))();
    var VoidToMaterialTreeGroupFlatRadioComponentLOfTL = () => (VoidToMaterialTreeGroupFlatRadioComponentLOfTL = dart.constFn(dart.fnType(MaterialTreeGroupFlatRadioComponentLOfTL(), [])))();
    var ComponentRefOfMaterialTreeGroupFlatRadioComponentLOfTL = () => (ComponentRefOfMaterialTreeGroupFlatRadioComponentLOfTL = dart.constFn(component_factory.ComponentRef$(MaterialTreeGroupFlatRadioComponentLOfTL())))();
    class _ViewMaterialTreeGroupFlatRadioComponentHost0 extends app_view.AppView$(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$0] = new (ViewMaterialTreeGroupFlatRadioComponent0OfTL()).new(this, 0);
        this.rootEl = this[_compView_0$0].rootEl;
        this[_MaterialTreeGroupFlatRadioComponent_0_5$] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupFlatRadioComponentLOfTL(), dart.wrapType(MaterialTreeGroupFlatRadioComponentL()), dart.fn(() => new (MaterialTreeGroupFlatRadioComponentOfTL()).new(MaterialTreeRootLOfTL().as(this.injectorGet(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), this[_compView_0$0], DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex))), VoidToMaterialTreeGroupFlatRadioComponentLOfTL())) : new (MaterialTreeGroupFlatRadioComponentOfTL()).new(MaterialTreeRootLOfTL().as(this.injectorGet(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), this[_compView_0$0], DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex)));
        this[_compView_0$0].create(this[_MaterialTreeGroupFlatRadioComponent_0_5$], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialTreeGroupFlatRadioComponentLOfTL()).new(0, this, this.rootEl, this[_MaterialTreeGroupFlatRadioComponent_0_5$]);
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        this[_compView_0$0].detectHostChanges(firstCheck);
        this[_compView_0$0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$0].destroyInternalState();
      }
    }
    (_ViewMaterialTreeGroupFlatRadioComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_MaterialTreeGroupFlatRadioComponent_0_5$] = null;
      _ViewMaterialTreeGroupFlatRadioComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
      ;
    }).prototype = _ViewMaterialTreeGroupFlatRadioComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatRadioComponentHost0);
    _ViewMaterialTreeGroupFlatRadioComponentHost0.prototype[_is__ViewMaterialTreeGroupFlatRadioComponentHost0_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupFlatRadioComponentHost0);
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatRadioComponentHost0, L2);
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatRadioComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatRadioComponentHost0.__proto__),
      [_compView_0$0]: dart.fieldType(dart.legacy(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatRadioComponent0$(dart.legacy(T)))),
      [_MaterialTreeGroupFlatRadioComponent_0_5$]: dart.fieldType(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatRadioComponent$(dart.legacy(T))))
    }));
    return _ViewMaterialTreeGroupFlatRadioComponentHost0;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0, _is__ViewMaterialTreeGroupFlatRadioComponentHost0_default);
  const _is_ViewMaterialTreeGroupFlatCheckComponent0_default = Symbol('_is_ViewMaterialTreeGroupFlatCheckComponent0_default');
  material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ViewMaterialTreeGroupFlatCheckComponent0 extends app_view.AppView$(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(dart.legacy(T)))) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart" : null;
      }
      build() {
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_0$] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0$], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent1(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgFor_0_9$] = new ng_for.NgFor.new(this[_appEl_0$], _TemplateRef_0_8);
        this.init0();
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.group;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
          this[_NgFor_0_9$].ngForOf = currVal_0;
          this[_expr_0$0] = currVal_0;
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_0_9$].ngDoCheck();
        }
        this[_appEl_0$].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0$].destroyNestedViews();
      }
      detectHostChanges(firstCheck) {
        let _ctx = this.ctx;
        if (dart.test(firstCheck)) {
          if (_ctx.isMaterialTreeGroup != null) {
            dom_helpers.updateClassBindingNonHtml(this.rootEl, "material-tree-group", _ctx.isMaterialTreeGroup);
          }
        }
      }
      initComponentStyles() {
        let styles = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._componentStyles;
        if (styles == null) {
          material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._componentStyles = styles = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponent, material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeGroupFlatCheckComponent0.new = function(parentView, parentIndex) {
      this[_appEl_0$] = null;
      this[_NgFor_0_9$] = null;
      this[_expr_0$0] = null;
      ViewMaterialTreeGroupFlatCheckComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootEl = HtmlElementL().as(html.document[$createElement]("material-tree-group-flat-check"));
    }).prototype = ViewMaterialTreeGroupFlatCheckComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeGroupFlatCheckComponent0);
    ViewMaterialTreeGroupFlatCheckComponent0.prototype[_is_ViewMaterialTreeGroupFlatCheckComponent0_default] = true;
    dart.addTypeCaches(ViewMaterialTreeGroupFlatCheckComponent0);
    dart.setLibraryUri(ViewMaterialTreeGroupFlatCheckComponent0, L2);
    dart.setFieldSignature(ViewMaterialTreeGroupFlatCheckComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeGroupFlatCheckComponent0.__proto__),
      [_appEl_0$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_0_9$]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_0$0]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialTreeGroupFlatCheckComponent0;
  });
  material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0 = material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0$();
  dart.defineLazy(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0, {
    /*material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dart.addTypeTests(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0, _is_ViewMaterialTreeGroupFlatCheckComponent0_default);
  var _MaterialCheckboxComponent_0_5 = dart.privateName(material_tree_group_flat$46template, "_MaterialCheckboxComponent_0_5");
  var _handle_checkedChange_0_0 = dart.privateName(material_tree_group_flat$46template, "_handle_checkedChange_0_0");
  const _is__ViewMaterialTreeGroupFlatCheckComponent1_default = Symbol('_is__ViewMaterialTreeGroupFlatCheckComponent1_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeGroupFlatCheckComponent1 extends app_view.AppView$(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$0] = new material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
        this[_el_0$] = this[_compView_0$0].rootEl;
        this.updateChildClassNonHtml(this[_el_0$], interpolate.interpolateString2("", "material-tree-option tree-selection-state", " ", "themeable", ""));
        dom_helpers.setAttribute(this[_el_0$], "role", "option");
        this.addShimC(HtmlElementL().as(this[_el_0$]));
        this[_MaterialCheckboxComponent_0_5] = new material_checkbox.MaterialCheckboxComponent.new(HtmlElementL().as(this[_el_0$]), this[_compView_0$0], null, null, "option");
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1$0] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$0], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent2(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_1_9$0] = new ng_if.NgIf.new(this[_appEl_1$0], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.createAnchor();
        this[_appEl_2$0] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$0], dart.fn((parentView, parentIndex) => material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent3(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_2_9$0] = new ng_if.NgIf.new(this[_appEl_2$0], _TemplateRef_2_8);
        this[_compView_0$0].create(this[_MaterialCheckboxComponent_0_5], JSArrayOfObjectL().of([JSArrayOfViewContainerL().of([this[_appEl_1$0], this[_appEl_2$0]])]));
        let subscription_0 = this[_MaterialCheckboxComponent_0_5].onChecked.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handle_checkedChange_0_0)));
        this.init(JSArrayOfObjectL().of([this[_el_0$]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(HasDisabledL()) && dart.notNull(nodeIndex) <= 2) {
          return this[_MaterialCheckboxComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        let local_option = optimizations.unsafeCast(TL(), this.locals[$_get]("$implicit"));
        changed = false;
        let currVal_2 = dart.test(_ctx.isReadOnly) || dart.test(_ctx.showDisabledCheckbox(local_option));
        if (dart.test(app_view_utils.checkBinding(this[_expr_2$0], currVal_2))) {
          this[_MaterialCheckboxComponent_0_5].disabled = currVal_2;
          changed = true;
          this[_expr_2$0] = currVal_2;
        }
        let currVal_3 = _ctx.isSelected(local_option);
        if (dart.test(app_view_utils.checkBinding(this[_expr_3$0], currVal_3))) {
          this[_MaterialCheckboxComponent_0_5].checked = currVal_3;
          changed = true;
          this[_expr_3$0] = currVal_3;
        }
        if (changed) {
          this[_compView_0$0].markAsCheckOnce();
        }
        this[_NgIf_1_9$0].ngIf = _ctx.useComponentRenderer;
        this[_NgIf_2_9$0].ngIf = !dart.test(_ctx.useComponentRenderer);
        this[_appEl_1$0].detectChangesInNestedViews();
        this[_appEl_2$0].detectChangesInNestedViews();
        let currVal_0 = _ctx.isSelected(local_option);
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
          dom_helpers.updateClassBindingNonHtml(this[_el_0$], "selected", currVal_0);
          this[_expr_0$0] = currVal_0;
        }
        let currVal_1 = _ctx.isSelectable(local_option);
        if (dart.test(app_view_utils.checkBinding(this[_expr_1$0], currVal_1))) {
          dom_helpers.updateClassBindingNonHtml(this[_el_0$], "selectable", currVal_1);
          this[_expr_1$0] = currVal_1;
        }
        this[_compView_0$0].detectHostChanges(firstCheck);
        this[_compView_0$0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_1$0].destroyNestedViews();
        this[_appEl_2$0].destroyNestedViews();
        this[_compView_0$0].destroyInternalState();
        this[_MaterialCheckboxComponent_0_5].ngOnDestroy();
      }
      [_handle_checkedChange_0_0]($36event) {
        let local_option = optimizations.unsafeCast(TL(), this.locals[$_get]("$implicit"));
        let _ctx = this.ctx;
        _ctx.setSelectionState(local_option, boolL().as($36event));
      }
    }
    (_ViewMaterialTreeGroupFlatCheckComponent1.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_MaterialCheckboxComponent_0_5] = null;
      this[_appEl_1$0] = null;
      this[_NgIf_1_9$0] = null;
      this[_appEl_2$0] = null;
      this[_NgIf_2_9$0] = null;
      this[_expr_0$0] = null;
      this[_expr_1$0] = null;
      this[_expr_2$0] = null;
      this[_expr_3$0] = null;
      this[_el_0$] = null;
      _ViewMaterialTreeGroupFlatCheckComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatCheckComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatCheckComponent1);
    _ViewMaterialTreeGroupFlatCheckComponent1.prototype[_is__ViewMaterialTreeGroupFlatCheckComponent1_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupFlatCheckComponent1);
    dart.setMethodSignature(_ViewMaterialTreeGroupFlatCheckComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupFlatCheckComponent1.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
      [_handle_checkedChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatCheckComponent1, L2);
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatCheckComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatCheckComponent1.__proto__),
      [_compView_0$0]: dart.fieldType(dart.legacy(material_checkbox$46template.ViewMaterialCheckboxComponent0)),
      [_MaterialCheckboxComponent_0_5]: dart.fieldType(dart.legacy(material_checkbox.MaterialCheckboxComponent)),
      [_appEl_1$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9$0]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_2$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9$0]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_expr_0$0]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_1$0]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_2$0]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_3$0]: dart.fieldType(dart.legacy(core.bool)),
      [_el_0$]: dart.fieldType(dart.legacy(html.Element))
    }));
    return _ViewMaterialTreeGroupFlatCheckComponent1;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1, _is__ViewMaterialTreeGroupFlatCheckComponent1_default);
  const _is__ViewMaterialTreeGroupFlatCheckComponent2_default = Symbol('_is__ViewMaterialTreeGroupFlatCheckComponent2_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeGroupFlatCheckComponent2 extends app_view.AppView$(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$0] = new dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0$0].rootEl;
        this.updateChildClassNonHtml(_el_0, "item component");
        this.addShimC(_el_0);
        this[_appEl_0$] = new view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DynamicComponentL(), dart.wrapType(DynamicComponentL()), dart.fn(() => new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentView.viewData.parentIndex)), this[_compView_0$0], this[_appEl_0$]), VoidToDynamicComponentL())) : new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentView.viewData.parentIndex)), this[_compView_0$0], this[_appEl_0$]);
        this[_compView_0$0].create0(this[_DynamicComponent_0_8]);
        this.init1(this[_appEl_0$]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_option = optimizations.unsafeCast(TL(), this.parentView.locals[$_get]("$implicit"));
        changed = false;
        let currVal_0 = _ctx.getComponentType(local_option);
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
          this[_DynamicComponent_0_8].componentType = currVal_0;
          changed = true;
          this[_expr_0$0] = currVal_0;
        }
        let currVal_1 = _ctx.getComponentFactory(local_option);
        if (dart.test(app_view_utils.checkBinding(this[_expr_1$0], currVal_1))) {
          this[_DynamicComponent_0_8].componentFactory = currVal_1;
          changed = true;
          this[_expr_1$0] = currVal_1;
        }
        let currVal_2 = local_option;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2$0], currVal_2))) {
          this[_DynamicComponent_0_8].value = currVal_2;
          changed = true;
          this[_expr_2$0] = currVal_2;
        }
        if (changed) {
          this[_DynamicComponent_0_8].ngAfterChanges();
        }
        this[_appEl_0$].detectChangesInNestedViews();
        this[_compView_0$0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_0$].destroyNestedViews();
        this[_compView_0$0].destroyInternalState();
        this[_DynamicComponent_0_8].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupFlatCheckComponent2.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_appEl_0$] = null;
      this[_DynamicComponent_0_8] = null;
      this[_expr_0$0] = null;
      this[_expr_1$0] = null;
      this[_expr_2$0] = null;
      _ViewMaterialTreeGroupFlatCheckComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatCheckComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatCheckComponent2);
    _ViewMaterialTreeGroupFlatCheckComponent2.prototype[_is__ViewMaterialTreeGroupFlatCheckComponent2_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupFlatCheckComponent2);
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatCheckComponent2, L2);
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatCheckComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatCheckComponent2.__proto__),
      [_compView_0$0]: dart.fieldType(dart.legacy(dynamic_component$46template.ViewDynamicComponent0)),
      [_appEl_0$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_DynamicComponent_0_8]: dart.fieldType(dart.legacy(dynamic_component.DynamicComponent)),
      [_expr_0$0]: dart.fieldType(dart.dynamic),
      [_expr_1$0]: dart.fieldType(dart.dynamic),
      [_expr_2$0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeGroupFlatCheckComponent2;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2, _is__ViewMaterialTreeGroupFlatCheckComponent2_default);
  const _is__ViewMaterialTreeGroupFlatCheckComponent3_default = Symbol('_is__ViewMaterialTreeGroupFlatCheckComponent3_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeGroupFlatCheckComponent3 extends app_view.AppView$(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(HtmlElementL().as(_el_0), "item text");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1$].element);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_option = optimizations.unsafeCast(TL(), this.parentView.locals[$_get]("$implicit"));
        this[_textBinding_1$].updateText(interpolate.interpolateString0(_ctx.getOptionAsText(local_option)));
      }
    }
    (_ViewMaterialTreeGroupFlatCheckComponent3.new = function(parentView, parentIndex) {
      this[_textBinding_1$] = new text_binding.TextBinding.new();
      _ViewMaterialTreeGroupFlatCheckComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupFlatCheckComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatCheckComponent3);
    _ViewMaterialTreeGroupFlatCheckComponent3.prototype[_is__ViewMaterialTreeGroupFlatCheckComponent3_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupFlatCheckComponent3);
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatCheckComponent3, L2);
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatCheckComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatCheckComponent3.__proto__),
      [_textBinding_1$]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
    }));
    return _ViewMaterialTreeGroupFlatCheckComponent3;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3, _is__ViewMaterialTreeGroupFlatCheckComponent3_default);
  var _MaterialTreeGroupFlatCheckComponent_0_5$ = dart.privateName(material_tree_group_flat$46template, "_MaterialTreeGroupFlatCheckComponent_0_5");
  const _is__ViewMaterialTreeGroupFlatCheckComponentHost0_default = Symbol('_is__ViewMaterialTreeGroupFlatCheckComponentHost0_default');
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialTreeGroupFlatCheckComponent0OfTL = () => (ViewMaterialTreeGroupFlatCheckComponent0OfTL = dart.constFn(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0$(TL())))();
    var MaterialTreeGroupFlatCheckComponentOfTL = () => (MaterialTreeGroupFlatCheckComponentOfTL = dart.constFn(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(TL())))();
    var MaterialTreeGroupFlatCheckComponentLOfTL = () => (MaterialTreeGroupFlatCheckComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeGroupFlatCheckComponentOfTL())))();
    var MaterialTreeRootOfTL = () => (MaterialTreeRootOfTL = dart.constFn(material_tree_root.MaterialTreeRoot$(TL())))();
    var MaterialTreeRootLOfTL = () => (MaterialTreeRootLOfTL = dart.constFn(dart.legacy(MaterialTreeRootOfTL())))();
    var VoidToMaterialTreeGroupFlatCheckComponentLOfTL = () => (VoidToMaterialTreeGroupFlatCheckComponentLOfTL = dart.constFn(dart.fnType(MaterialTreeGroupFlatCheckComponentLOfTL(), [])))();
    var ComponentRefOfMaterialTreeGroupFlatCheckComponentLOfTL = () => (ComponentRefOfMaterialTreeGroupFlatCheckComponentLOfTL = dart.constFn(component_factory.ComponentRef$(MaterialTreeGroupFlatCheckComponentLOfTL())))();
    class _ViewMaterialTreeGroupFlatCheckComponentHost0 extends app_view.AppView$(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$0] = new (ViewMaterialTreeGroupFlatCheckComponent0OfTL()).new(this, 0);
        this.rootEl = this[_compView_0$0].rootEl;
        this[_MaterialTreeGroupFlatCheckComponent_0_5$] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupFlatCheckComponentLOfTL(), dart.wrapType(MaterialTreeGroupFlatCheckComponentL()), dart.fn(() => new (MaterialTreeGroupFlatCheckComponentOfTL()).new(MaterialTreeRootLOfTL().as(this.injectorGet(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), this[_compView_0$0], DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex))), VoidToMaterialTreeGroupFlatCheckComponentLOfTL())) : new (MaterialTreeGroupFlatCheckComponentOfTL()).new(MaterialTreeRootLOfTL().as(this.injectorGet(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), this[_compView_0$0], DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex)));
        this[_compView_0$0].create(this[_MaterialTreeGroupFlatCheckComponent_0_5$], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialTreeGroupFlatCheckComponentLOfTL()).new(0, this, this.rootEl, this[_MaterialTreeGroupFlatCheckComponent_0_5$]);
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        this[_compView_0$0].detectHostChanges(firstCheck);
        this[_compView_0$0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$0].destroyInternalState();
      }
    }
    (_ViewMaterialTreeGroupFlatCheckComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0$0] = null;
      this[_MaterialTreeGroupFlatCheckComponent_0_5$] = null;
      _ViewMaterialTreeGroupFlatCheckComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
      ;
    }).prototype = _ViewMaterialTreeGroupFlatCheckComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupFlatCheckComponentHost0);
    _ViewMaterialTreeGroupFlatCheckComponentHost0.prototype[_is__ViewMaterialTreeGroupFlatCheckComponentHost0_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupFlatCheckComponentHost0);
    dart.setLibraryUri(_ViewMaterialTreeGroupFlatCheckComponentHost0, L2);
    dart.setFieldSignature(_ViewMaterialTreeGroupFlatCheckComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupFlatCheckComponentHost0.__proto__),
      [_compView_0$0]: dart.fieldType(dart.legacy(material_tree_group_flat$46template.ViewMaterialTreeGroupFlatCheckComponent0$(dart.legacy(T)))),
      [_MaterialTreeGroupFlatCheckComponent_0_5$]: dart.fieldType(dart.legacy(material_tree_group_flat.MaterialTreeGroupFlatCheckComponent$(dart.legacy(T))))
    }));
    return _ViewMaterialTreeGroupFlatCheckComponentHost0;
  });
  material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0 = material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0$();
  dart.addTypeTests(material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0, _is__ViewMaterialTreeGroupFlatCheckComponentHost0_default);
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent1 = function viewFactory_MaterialTreeGroupFlatListComponent1(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent1$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent2 = function viewFactory_MaterialTreeGroupFlatListComponent2(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent2$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponent3 = function viewFactory_MaterialTreeGroupFlatListComponent3(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponent3$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatListComponentHost0 = function viewFactory_MaterialTreeGroupFlatListComponentHost0(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatListComponentHost0$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent1 = function viewFactory_MaterialTreeGroupFlatRadioComponent1(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent1$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent2 = function viewFactory_MaterialTreeGroupFlatRadioComponent2(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent2$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponent3 = function viewFactory_MaterialTreeGroupFlatRadioComponent3(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponent3$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatRadioComponentHost0 = function viewFactory_MaterialTreeGroupFlatRadioComponentHost0(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatRadioComponentHost0$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent1 = function viewFactory_MaterialTreeGroupFlatCheckComponent1(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent1$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent2 = function viewFactory_MaterialTreeGroupFlatCheckComponent2(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent2$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponent3 = function viewFactory_MaterialTreeGroupFlatCheckComponent3(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponent3$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.viewFactory_MaterialTreeGroupFlatCheckComponentHost0 = function viewFactory_MaterialTreeGroupFlatCheckComponentHost0(T, parentView, parentIndex) {
    return new (material_tree_group_flat$46template._ViewMaterialTreeGroupFlatCheckComponentHost0$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group_flat$46template.initReflector = function initReflector$0() {
    if (dart.test(material_tree_group_flat$46template._visited)) {
      return;
    }
    material_tree_group_flat$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialTreeGroupFlatListComponentL()), material_tree_group_flat$46template.MaterialTreeGroupFlatListComponentNgFactory);
    reflector.registerComponent(dart.wrapType(MaterialTreeGroupFlatRadioComponentL()), material_tree_group_flat$46template.MaterialTreeGroupFlatRadioComponentNgFactory);
    reflector.registerComponent(dart.wrapType(MaterialTreeGroupFlatCheckComponentL()), material_tree_group_flat$46template.MaterialTreeGroupFlatCheckComponentNgFactory);
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    dynamic_component$46template.initReflector();
    material_checkbox$46template.initReflector();
    material_radio$46template.initReflector();
    material_radio_group$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    selection_model$46template.initReflector();
    material_tree_node$46template.initReflector();
    material_tree_root$46template.initReflector();
  };
  dart.copyProperties(material_tree_group_flat$46template, {
    get MaterialTreeGroupFlatListComponentNgFactory() {
      return material_tree_group_flat$46template._MaterialTreeGroupFlatListComponentNgFactory;
    },
    get MaterialTreeGroupFlatRadioComponentNgFactory() {
      return material_tree_group_flat$46template._MaterialTreeGroupFlatRadioComponentNgFactory;
    },
    get MaterialTreeGroupFlatCheckComponentNgFactory() {
      return material_tree_group_flat$46template._MaterialTreeGroupFlatCheckComponentNgFactory;
    }
  });
  var C14;
  var C13;
  var C12;
  var C17;
  var C16;
  var C15;
  var C20;
  var C19;
  var C18;
  dart.defineLazy(material_tree_group_flat$46template, {
    /*material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponent*/get styles$MaterialTreeGroupFlatListComponent() {
      return [material_tree_group_flat_list$46scss$46css$46shim.styles];
    },
    /*material_tree_group_flat$46template._MaterialTreeGroupFlatListComponentNgFactory*/get _MaterialTreeGroupFlatListComponentNgFactory() {
      return C12 || CT.C12;
    },
    /*material_tree_group_flat$46template.styles$MaterialTreeGroupFlatListComponentHost*/get styles$MaterialTreeGroupFlatListComponentHost() {
      return C3 || CT.C3;
    },
    /*material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponent*/get styles$MaterialTreeGroupFlatRadioComponent() {
      return [material_tree_group_flat_radio$46scss$46css$46shim.styles];
    },
    /*material_tree_group_flat$46template._MaterialTreeGroupFlatRadioComponentNgFactory*/get _MaterialTreeGroupFlatRadioComponentNgFactory() {
      return C15 || CT.C15;
    },
    /*material_tree_group_flat$46template.styles$MaterialTreeGroupFlatRadioComponentHost*/get styles$MaterialTreeGroupFlatRadioComponentHost() {
      return C3 || CT.C3;
    },
    /*material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponent*/get styles$MaterialTreeGroupFlatCheckComponent() {
      return [material_tree_group_flat_check$46scss$46css$46shim.styles];
    },
    /*material_tree_group_flat$46template._MaterialTreeGroupFlatCheckComponentNgFactory*/get _MaterialTreeGroupFlatCheckComponentNgFactory() {
      return C18 || CT.C18;
    },
    /*material_tree_group_flat$46template.styles$MaterialTreeGroupFlatCheckComponentHost*/get styles$MaterialTreeGroupFlatCheckComponentHost() {
      return C3 || CT.C3;
    },
    /*material_tree_group_flat$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(material_tree_group_flat_check$46scss$46css$46shim, {
    /*material_tree_group_flat_check$46scss$46css$46shim.styles*/get styles() {
      return ["material-checkbox._ngcontent-%ID%{display:block;font-family:inherit;font-size:15px;line-height:32px;padding:0 24px;position:relative;white-space:nowrap;display:flex;align-items:center;color:rgba(0,0,0,0.87);cursor:pointer}material-checkbox.disabled._ngcontent-%ID%{pointer-events:none}material-checkbox._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.54);width:40px}material-checkbox.disabled._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.38)}material-checkbox._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.54);margin-left:auto}material-checkbox.disabled._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.38)}material-checkbox._ngcontent-%ID%  .submenu-icon{transform:rotate(-90deg)}material-checkbox:not([separator=present]):hover._ngcontent-%ID%,material-checkbox:not([separator=present]):focus._ngcontent-%ID%,material-checkbox:not([separator=present]).active._ngcontent-%ID%{background:#eee}material-checkbox:not([separator=present]).disabled._ngcontent-%ID%{background:none;color:rgba(0,0,0,0.38);cursor:default;pointer-events:all}"];
    }
  }, true);
  dart.defineLazy(material_tree_group_flat_radio$46scss$46css$46shim, {
    /*material_tree_group_flat_radio$46scss$46css$46shim.styles*/get styles() {
      return ["material-radio._ngcontent-%ID%{display:block;font-family:inherit;font-size:15px;line-height:32px;padding:0 24px;position:relative;white-space:nowrap;display:flex;align-items:center;color:rgba(0,0,0,0.87);cursor:pointer;align-items:flex-start}material-radio.disabled._ngcontent-%ID%{pointer-events:none}material-radio._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.54);width:40px}material-radio.disabled._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.38)}material-radio._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.54);margin-left:auto}material-radio.disabled._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.38)}material-radio._ngcontent-%ID%  .submenu-icon{transform:rotate(-90deg)}material-radio:not([separator=present]):hover._ngcontent-%ID%,material-radio:not([separator=present]):focus._ngcontent-%ID%,material-radio:not([separator=present]).active._ngcontent-%ID%{background:#eee}material-radio:not([separator=present]).disabled._ngcontent-%ID%{background:none;color:rgba(0,0,0,0.38);cursor:default;pointer-events:all}"];
    }
  }, true);
  dart.defineLazy(material_tree_group_flat_list$46scss$46css$46shim, {
    /*material_tree_group_flat_list$46scss$46css$46shim.styles*/get styles() {
      return ["div._ngcontent-%ID%{display:block;font-family:inherit;font-size:15px;line-height:32px;padding:0 24px;position:relative;white-space:nowrap}div.disabled._ngcontent-%ID%{pointer-events:none}div._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.54);width:40px}div.disabled._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.38)}div._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.54);margin-left:auto}div.disabled._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.38)}div._ngcontent-%ID%  .submenu-icon{transform:rotate(-90deg)}"];
    }
  }, true);
  material_tree_root$46template.initReflector = function initReflector$1() {
    if (dart.test(material_tree_root$46template._visited)) {
      return;
    }
    material_tree_root$46template._visited = true;
    select$46template.initReflector();
    selection_container$46template.initReflector();
    has_factory$46template.initReflector();
  };
  dart.defineLazy(material_tree_root$46template, {
    /*material_tree_root$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  material_tree_node$46template.initReflector = function initReflector$2() {
    if (dart.test(material_tree_node$46template._visited)) {
      return;
    }
    material_tree_node$46template._visited = true;
    angular$46template.initReflector();
    select$46template.initReflector();
    selection_model$46template.initReflector();
    selection_options$46template.initReflector();
    has_factory$46template.initReflector();
    material_tree_expand_state$46template.initReflector();
    material_tree_root$46template.initReflector();
    async$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.defineLazy(material_tree_node$46template, {
    /*material_tree_node$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  material_tree_expand_state$46template.initReflector = function initReflector$3() {
  };
  var _appEl_1$1 = dart.privateName(material_tree_group$46template, "_appEl_1");
  var _NgFor_1_9$ = dart.privateName(material_tree_group$46template, "_NgFor_1_9");
  var _appEl_2$1 = dart.privateName(material_tree_group$46template, "_appEl_2");
  var _NgIf_2_9$1 = dart.privateName(material_tree_group$46template, "_NgIf_2_9");
  var _expr_0$1 = dart.privateName(material_tree_group$46template, "_expr_0");
  const _is_ViewMaterialTreeGroupComponent0_default = Symbol('_is_ViewMaterialTreeGroupComponent0_default');
  material_tree_group$46template.ViewMaterialTreeGroupComponent0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ViewMaterialTreeGroupComponent0 extends app_view.AppView$(dart.legacy(material_tree_group.MaterialTreeGroupComponent$(dart.legacy(T)))) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/group/material_tree_group.dart" : null;
      }
      build() {
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        let doc = html.document;
        let _el_0 = dom_helpers.appendElement(doc, parentRenderNode, "ul");
        this.addShimC(HtmlElementL().as(_el_0));
        let _anchor_1 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_1$1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$1], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent1(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgFor_1_9$] = new ng_for.NgFor.new(this[_appEl_1$1], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_2$1] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$1], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent9(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_2_9$1] = new ng_if.NgIf.new(this[_appEl_2$1], _TemplateRef_2_8);
        this.init0();
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.visibleGroup;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
          this[_NgFor_1_9$].ngForOf = currVal_0;
          this[_expr_0$1] = currVal_0;
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_1_9$].ngDoCheck();
        }
        this[_NgIf_2_9$1].ngIf = _ctx.viewMoreLinkVisible;
        this[_appEl_1$1].detectChangesInNestedViews();
        this[_appEl_2$1].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_1$1].destroyNestedViews();
        this[_appEl_2$1].destroyNestedViews();
      }
      detectHostChanges(firstCheck) {
        let _ctx = this.ctx;
        if (dart.test(firstCheck)) {
          if (_ctx.isMaterialTreeGroup != null) {
            dom_helpers.updateClassBindingNonHtml(this.rootEl, "material-tree-group", _ctx.isMaterialTreeGroup);
          }
        }
      }
      initComponentStyles() {
        let styles = material_tree_group$46template.ViewMaterialTreeGroupComponent0._componentStyles;
        if (styles == null) {
          material_tree_group$46template.ViewMaterialTreeGroupComponent0._componentStyles = styles = material_tree_group$46template.ViewMaterialTreeGroupComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_tree_group$46template.styles$MaterialTreeGroupComponent, material_tree_group$46template.ViewMaterialTreeGroupComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialTreeGroupComponent0.new = function(parentView, parentIndex) {
      this[_appEl_1$1] = null;
      this[_NgFor_1_9$] = null;
      this[_appEl_2$1] = null;
      this[_NgIf_2_9$1] = null;
      this[_expr_0$1] = null;
      ViewMaterialTreeGroupComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootEl = HtmlElementL().as(html.document[$createElement]("material-tree-group"));
      dom_helpers.updateAttribute(this.rootEl, "role", "group");
    }).prototype = ViewMaterialTreeGroupComponent0.prototype;
    dart.addTypeTests(ViewMaterialTreeGroupComponent0);
    ViewMaterialTreeGroupComponent0.prototype[_is_ViewMaterialTreeGroupComponent0_default] = true;
    dart.addTypeCaches(ViewMaterialTreeGroupComponent0);
    dart.setLibraryUri(ViewMaterialTreeGroupComponent0, L3);
    dart.setFieldSignature(ViewMaterialTreeGroupComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialTreeGroupComponent0.__proto__),
      [_appEl_1$1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_1_9$]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_appEl_2$1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9$1]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_expr_0$1]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialTreeGroupComponent0;
  });
  material_tree_group$46template.ViewMaterialTreeGroupComponent0 = material_tree_group$46template.ViewMaterialTreeGroupComponent0$();
  dart.defineLazy(material_tree_group$46template.ViewMaterialTreeGroupComponent0, {
    /*material_tree_group$46template.ViewMaterialTreeGroupComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dart.addTypeTests(material_tree_group$46template.ViewMaterialTreeGroupComponent0, _is_ViewMaterialTreeGroupComponent0_default);
  var _ButtonDirective_0_5 = dart.privateName(material_tree_group$46template, "_ButtonDirective_0_5");
  var _KeyboardOnlyFocusIndicatorDirective_0_6 = dart.privateName(material_tree_group$46template, "_KeyboardOnlyFocusIndicatorDirective_0_6");
  var _appEl_3$ = dart.privateName(material_tree_group$46template, "_appEl_3");
  var _NgIf_3_9$ = dart.privateName(material_tree_group$46template, "_NgIf_3_9");
  var _appEl_6$ = dart.privateName(material_tree_group$46template, "_appEl_6");
  var _NgIf_6_9$ = dart.privateName(material_tree_group$46template, "_NgIf_6_9");
  var _appEl_7$ = dart.privateName(material_tree_group$46template, "_appEl_7");
  var _NgIf_7_9 = dart.privateName(material_tree_group$46template, "_NgIf_7_9");
  var _appEl_10 = dart.privateName(material_tree_group$46template, "_appEl_10");
  var _NgIf_10_9 = dart.privateName(material_tree_group$46template, "_NgIf_10_9");
  var _appEl_12 = dart.privateName(material_tree_group$46template, "_appEl_12");
  var _NgFor_12_9 = dart.privateName(material_tree_group$46template, "_NgFor_12_9");
  var _expr_1$1 = dart.privateName(material_tree_group$46template, "_expr_1");
  var _expr_2$1 = dart.privateName(material_tree_group$46template, "_expr_2");
  var _expr_3$1 = dart.privateName(material_tree_group$46template, "_expr_3");
  var _expr_6$ = dart.privateName(material_tree_group$46template, "_expr_6");
  var _expr_7$ = dart.privateName(material_tree_group$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_tree_group$46template, "_expr_8");
  var _expr_12 = dart.privateName(material_tree_group$46template, "_expr_12");
  var _el_0$0 = dart.privateName(material_tree_group$46template, "_el_0");
  var _el_1 = dart.privateName(material_tree_group$46template, "_el_1");
  var _el_2 = dart.privateName(material_tree_group$46template, "_el_2");
  var _el_4$ = dart.privateName(material_tree_group$46template, "_el_4");
  var _handle_click_0_1$ = dart.privateName(material_tree_group$46template, "_handle_click_0_1");
  var _handle_trigger_0_0 = dart.privateName(material_tree_group$46template, "_handle_trigger_0_0");
  const _is__ViewMaterialTreeGroupComponent1_default = Symbol('_is__ViewMaterialTreeGroupComponent1_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent1$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeGroupComponent1 extends app_view.AppView$(dart.legacy(material_tree_group.MaterialTreeGroupComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        this[_el_0$0] = doc[$createElement]("li");
        dom_helpers.setAttribute(this[_el_0$0], "buttonDecorator", "");
        this.updateChildClass(HtmlElementL().as(this[_el_0$0]), "material-tree-option");
        dom_helpers.setAttribute(this[_el_0$0], "keyboardOnlyFocusIndicator", "");
        this.addShimE(this[_el_0$0]);
        this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0$0], null));
        this[_KeyboardOnlyFocusIndicatorDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_0$0]), DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_0$0]), DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex)));
        this[_el_1] = dom_helpers.appendDiv(doc, this[_el_0$0]);
        this.updateChildClass(this[_el_1], "material-tree-item");
        dom_helpers.setAttribute(this[_el_1], "role", "treeitem");
        this.addShimC(this[_el_1]);
        this[_el_2] = dom_helpers.appendDiv(doc, this[_el_1]);
        this.updateChildClass(this[_el_2], "material-tree-shift");
        this.addShimC(this[_el_2]);
        let _anchor_3 = dom_helpers.appendAnchor(this[_el_2]);
        this[_appEl_3$] = new view_container.ViewContainer.new(3, 2, this, _anchor_3);
        let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3$], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent2(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_3_9$] = new ng_if.NgIf.new(this[_appEl_3$], _TemplateRef_3_8);
        this[_el_4$] = dom_helpers.appendDiv(doc, this[_el_2]);
        this.updateChildClass(this[_el_4$], "material-tree-border");
        this.addShimC(this[_el_4$]);
        let _text_5 = dom_helpers.appendText(this[_el_2], " ");
        let _anchor_6 = dom_helpers.appendAnchor(this[_el_2]);
        this[_appEl_6$] = new view_container.ViewContainer.new(6, 2, this, _anchor_6);
        let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6$], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent5(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_6_9$] = new ng_if.NgIf.new(this[_appEl_6$], _TemplateRef_6_8);
        let _anchor_7 = dom_helpers.appendAnchor(this[_el_2]);
        this[_appEl_7$] = new view_container.ViewContainer.new(7, 2, this, _anchor_7);
        let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7$], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent6(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7$], _TemplateRef_7_8);
        let _text_8 = dom_helpers.appendText(this[_el_2], " ");
        let _text_9 = dom_helpers.appendText(this[_el_2], " ");
        let _anchor_10 = dom_helpers.appendAnchor(this[_el_2]);
        this[_appEl_10] = new view_container.ViewContainer.new(10, 2, this, _anchor_10);
        let _TemplateRef_10_8 = new template_ref.TemplateRef.new(this[_appEl_10], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent7(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_10_9] = new ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
        let _text_11 = dom_helpers.appendText(this[_el_0$0], " ");
        let _anchor_12 = dom_helpers.appendAnchor(this[_el_0$0]);
        this[_appEl_12] = new view_container.ViewContainer.new(12, 0, this, _anchor_12);
        let _TemplateRef_12_8 = new template_ref.TemplateRef.new(this[_appEl_12], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent8(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgFor_12_9] = new ng_for.NgFor.new(this[_appEl_12], _TemplateRef_12_8);
        this[_el_0$0][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_click_0_1$)));
        this[_el_0$0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
        this[_el_0$0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'keydown')));
        this[_el_0$0][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
        this[_el_0$0][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'onMouseInteraction')));
        this[_el_0$0][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'onFocus')));
        let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_trigger_0_0)));
        this.init(JSArrayOfObjectL().of([this[_el_0$0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(ButtonDirectiveL()) && dart.notNull(nodeIndex) <= 12) {
          return this[_ButtonDirective_0_5].instance;
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let local_option = this.locals[$_get]("$implicit");
        this[_NgIf_3_9$].ngIf = _ctx.showCheckbox(local_option);
        this[_NgIf_6_9$].ngIf = _ctx.useComponentRenderer;
        this[_NgIf_7_9].ngIf = !dart.test(_ctx.useComponentRenderer);
        this[_NgIf_10_9].ngIf = _ctx.hasChildren(TL().as(local_option));
        let currVal_12 = _ctx.getChildGroups(local_option);
        if (dart.test(app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
          this[_NgFor_12_9].ngForOf = currVal_12;
          this[_expr_12] = currVal_12;
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_12_9].ngDoCheck();
        }
        this[_appEl_3$].detectChangesInNestedViews();
        this[_appEl_6$].detectChangesInNestedViews();
        this[_appEl_7$].detectChangesInNestedViews();
        this[_appEl_10].detectChangesInNestedViews();
        this[_appEl_12].detectChangesInNestedViews();
        let currVal_0 = _ctx.isSelected(TL().as(local_option));
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
          dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_0$0]), "selected", currVal_0);
          this[_expr_0$1] = currVal_0;
        }
        let currVal_1 = _ctx.isSelectable(TL().as(local_option));
        if (dart.test(app_view_utils.checkBinding(this[_expr_1$1], currVal_1))) {
          dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_0$0]), "selectable", currVal_1);
          this[_expr_1$1] = currVal_1;
        }
        this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0$0]);
        let currVal_2 = _ctx.getIndent(local_option);
        if (dart.test(app_view_utils.checkBinding(this[_expr_2$1], currVal_2))) {
          this[_el_1].style[$setProperty]("padding-left", currVal_2);
          this[_expr_2$1] = currVal_2;
        }
        let currVal_3 = interpolate.interpolate0(_ctx.isSelected(TL().as(local_option)));
        if (dart.test(app_view_utils.checkBinding(this[_expr_3$1], currVal_3))) {
          dom_helpers.setAttribute(this[_el_1], "aria-selected", StringL().as(currVal_3));
          this[_expr_3$1] = currVal_3;
        }
        if (firstCheck) {
          if (_ctx.fixedPadding != null) {
            this[_el_2].style[$setProperty]("padding-left", _ctx.fixedPadding);
          }
        }
        let currVal_6 = _ctx.hasChildren(TL().as(local_option));
        if (dart.test(app_view_utils.checkBinding(this[_expr_6$], currVal_6))) {
          dom_helpers.updateClassBinding(this[_el_4$], "is-parent", currVal_6);
          this[_expr_6$] = currVal_6;
        }
        let currVal_7 = _ctx.isExpanded(TL().as(local_option));
        if (dart.test(app_view_utils.checkBinding(this[_expr_7$], currVal_7))) {
          dom_helpers.updateClassBinding(this[_el_4$], "is-expanded", currVal_7);
          this[_expr_7$] = currVal_7;
        }
        let currVal_8 = _ctx.level === 0;
        if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
          dom_helpers.updateClassBinding(this[_el_4$], "root-border", currVal_8);
          this[_expr_8] = currVal_8;
        }
      }
      destroyInternal() {
        this[_appEl_3$].destroyNestedViews();
        this[_appEl_6$].destroyNestedViews();
        this[_appEl_7$].destroyNestedViews();
        this[_appEl_10].destroyNestedViews();
        this[_appEl_12].destroyNestedViews();
      }
      [_handle_trigger_0_0]($36event) {
        let local_option = this.locals[$_get]("$implicit");
        let _ctx = this.ctx;
        _ctx.handleSelectionOrExpansion(EventL().as($36event), local_option);
      }
      [_handle_click_0_1$]($36event) {
        this[_ButtonDirective_0_5].instance.handleClick(MouseEventL().as($36event));
        this[_KeyboardOnlyFocusIndicatorDirective_0_6].onMouseInteraction();
      }
    }
    (_ViewMaterialTreeGroupComponent1.new = function(parentView, parentIndex) {
      this[_ButtonDirective_0_5] = null;
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
      this[_appEl_3$] = null;
      this[_NgIf_3_9$] = null;
      this[_appEl_6$] = null;
      this[_NgIf_6_9$] = null;
      this[_appEl_7$] = null;
      this[_NgIf_7_9] = null;
      this[_appEl_10] = null;
      this[_NgIf_10_9] = null;
      this[_appEl_12] = null;
      this[_NgFor_12_9] = null;
      this[_expr_0$1] = null;
      this[_expr_1$1] = null;
      this[_expr_2$1] = null;
      this[_expr_3$1] = null;
      this[_expr_6$] = null;
      this[_expr_7$] = null;
      this[_expr_8] = null;
      this[_expr_12] = null;
      this[_el_0$0] = null;
      this[_el_1] = null;
      this[_el_2] = null;
      this[_el_4$] = null;
      _ViewMaterialTreeGroupComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent1.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent1);
    _ViewMaterialTreeGroupComponent1.prototype[_is__ViewMaterialTreeGroupComponent1_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupComponent1);
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent1.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
      [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic]),
      [_handle_click_0_1$]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent1, L3);
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent1.__proto__),
      [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
      [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
      [_appEl_3$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_3_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_6$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_6_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_7$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_7_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_10]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_10_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_12]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_12_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_0$1]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_1$1]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_2$1]: dart.fieldType(dart.dynamic),
      [_expr_3$1]: dart.fieldType(dart.dynamic),
      [_expr_6$]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_7$]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_8]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_12]: dart.fieldType(dart.dynamic),
      [_el_0$0]: dart.fieldType(dart.legacy(html.Element)),
      [_el_1]: dart.fieldType(dart.legacy(html.DivElement)),
      [_el_2]: dart.fieldType(dart.legacy(html.DivElement)),
      [_el_4$]: dart.fieldType(dart.legacy(html.DivElement))
    }));
    return _ViewMaterialTreeGroupComponent1;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent1 = material_tree_group$46template._ViewMaterialTreeGroupComponent1$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent1, _is__ViewMaterialTreeGroupComponent1_default);
  var _NgIf_1_9$1 = dart.privateName(material_tree_group$46template, "_NgIf_1_9");
  const _is__ViewMaterialTreeGroupComponent2_default = Symbol('_is__ViewMaterialTreeGroupComponent2_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent2$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeGroupComponent2 extends app_view.AppView$(dart.legacy(material_tree_group.MaterialTreeGroupComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        this.updateChildClass(HtmlElementL().as(_el_0), "tree-selection-state");
        this.addShimC(HtmlElementL().as(_el_0));
        let _anchor_1 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_1$1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$1], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent3(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_1_9$1] = new ng_if.NgIf.new(this[_appEl_1$1], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_2$1] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$1], dart.fn((parentView, parentIndex) => material_tree_group$46template.viewFactory_MaterialTreeGroupComponent4(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_2_9$1] = new ng_if.NgIf.new(this[_appEl_2$1], _TemplateRef_2_8);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_option = this.parentView.locals[$_get]("$implicit");
        this[_NgIf_1_9$1].ngIf = _ctx.isMultiSelect;
        this[_NgIf_2_9$1].ngIf = !dart.test(_ctx.isMultiSelect) && dart.test(_ctx.isSelected(TL().as(local_option)));
        this[_appEl_1$1].detectChangesInNestedViews();
        this[_appEl_2$1].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_1$1].destroyNestedViews();
        this[_appEl_2$1].destroyNestedViews();
      }
    }
    (_ViewMaterialTreeGroupComponent2.new = function(parentView, parentIndex) {
      this[_appEl_1$1] = null;
      this[_NgIf_1_9$1] = null;
      this[_appEl_2$1] = null;
      this[_NgIf_2_9$1] = null;
      _ViewMaterialTreeGroupComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent2.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent2);
    _ViewMaterialTreeGroupComponent2.prototype[_is__ViewMaterialTreeGroupComponent2_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupComponent2);
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent2, L3);
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent2.__proto__),
      [_appEl_1$1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9$1]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_2$1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9$1]: dart.fieldType(dart.legacy(ng_if.NgIf))
    }));
    return _ViewMaterialTreeGroupComponent2;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent2 = material_tree_group$46template._ViewMaterialTreeGroupComponent2$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent2, _is__ViewMaterialTreeGroupComponent2_default);
  var _compView_0$1 = dart.privateName(material_tree_group$46template, "_compView_0");
  var _MaterialCheckboxComponent_0_5$ = dart.privateName(material_tree_group$46template, "_MaterialCheckboxComponent_0_5");
  const _is__ViewMaterialTreeGroupComponent3_default = Symbol('_is__ViewMaterialTreeGroupComponent3_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent3$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeGroupComponent3 extends app_view.AppView$(dart.legacy(material_tree_group.MaterialTreeGroupComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$1] = new material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
        let _el_0 = this[_compView_0$1].rootEl;
        this.updateChildClassNonHtml(_el_0, interpolate.interpolateString2("", "tree-selection-state", " ", "themeable", ""));
        this.addShimC(_el_0);
        this[_MaterialCheckboxComponent_0_5$] = new material_checkbox.MaterialCheckboxComponent.new(_el_0, this[_compView_0$1], null, null, null);
        this[_compView_0$1].create(this[_MaterialCheckboxComponent_0_5$], JSArrayOfObjectL().of([C3 || CT.C3]));
        this.init1(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
          return this[_MaterialCheckboxComponent_0_5$];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        let local_option = this.parentView.parentView.locals[$_get]("$implicit");
        changed = false;
        if (firstCheck) {
          this[_MaterialCheckboxComponent_0_5$].readOnly = true;
          changed = true;
        }
        let currVal_0 = dart.test(_ctx.isReadOnly) || dart.test(_ctx.showDisabledCheckbox(local_option));
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
          this[_MaterialCheckboxComponent_0_5$].disabled = currVal_0;
          changed = true;
          this[_expr_0$1] = currVal_0;
        }
        let currVal_2 = _ctx.isSelected(TL().as(local_option));
        if (dart.test(app_view_utils.checkBinding(this[_expr_2$1], currVal_2))) {
          this[_MaterialCheckboxComponent_0_5$].checked = currVal_2;
          changed = true;
          this[_expr_2$1] = currVal_2;
        }
        if (changed) {
          this[_compView_0$1].markAsCheckOnce();
        }
        this[_compView_0$1].detectHostChanges(firstCheck);
        this[_compView_0$1].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$1].destroyInternalState();
        this[_MaterialCheckboxComponent_0_5$].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupComponent3.new = function(parentView, parentIndex) {
      this[_compView_0$1] = null;
      this[_MaterialCheckboxComponent_0_5$] = null;
      this[_expr_0$1] = null;
      this[_expr_2$1] = null;
      _ViewMaterialTreeGroupComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent3.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent3);
    _ViewMaterialTreeGroupComponent3.prototype[_is__ViewMaterialTreeGroupComponent3_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupComponent3);
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent3.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent3, L3);
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent3.__proto__),
      [_compView_0$1]: dart.fieldType(dart.legacy(material_checkbox$46template.ViewMaterialCheckboxComponent0)),
      [_MaterialCheckboxComponent_0_5$]: dart.fieldType(dart.legacy(material_checkbox.MaterialCheckboxComponent)),
      [_expr_0$1]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_2$1]: dart.fieldType(dart.legacy(core.bool))
    }));
    return _ViewMaterialTreeGroupComponent3;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent3 = material_tree_group$46template._ViewMaterialTreeGroupComponent3$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent3, _is__ViewMaterialTreeGroupComponent3_default);
  var _MaterialIconComponent_0_5$ = dart.privateName(material_tree_group$46template, "_MaterialIconComponent_0_5");
  const _is__ViewMaterialTreeGroupComponent4_default = Symbol('_is__ViewMaterialTreeGroupComponent4_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent4$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent4 extends app_view.AppView$(dart.legacy(material_tree_group.MaterialTreeGroupComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
        let _el_0 = this[_compView_0$1].rootEl;
        this.updateChildClassNonHtml(_el_0, "tree-selection-state");
        dom_helpers.setAttribute(_el_0, "icon", "check");
        this.addShimC(_el_0);
        this[_MaterialIconComponent_0_5$] = new material_icon.MaterialIconComponent.new(_el_0);
        this[_compView_0$1].create0(this[_MaterialIconComponent_0_5$]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let changed = false;
        let firstCheck = this.cdState === 0;
        changed = false;
        if (firstCheck) {
          this[_MaterialIconComponent_0_5$].icon = "check";
          changed = true;
        }
        if (changed) {
          this[_compView_0$1].markAsCheckOnce();
        }
        this[_compView_0$1].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$1].destroyInternalState();
      }
    }
    (_ViewMaterialTreeGroupComponent4.new = function(parentView, parentIndex) {
      this[_compView_0$1] = null;
      this[_MaterialIconComponent_0_5$] = null;
      _ViewMaterialTreeGroupComponent4.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent4.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent4);
    _ViewMaterialTreeGroupComponent4.prototype[_is__ViewMaterialTreeGroupComponent4_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupComponent4);
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent4, L3);
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent4.__proto__),
      [_compView_0$1]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
      [_MaterialIconComponent_0_5$]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent))
    }));
    return _ViewMaterialTreeGroupComponent4;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent4 = material_tree_group$46template._ViewMaterialTreeGroupComponent4$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent4, _is__ViewMaterialTreeGroupComponent4_default);
  var _appEl_0$0 = dart.privateName(material_tree_group$46template, "_appEl_0");
  var _DynamicComponent_0_8$ = dart.privateName(material_tree_group$46template, "_DynamicComponent_0_8");
  const _is__ViewMaterialTreeGroupComponent5_default = Symbol('_is__ViewMaterialTreeGroupComponent5_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent5$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent5 extends app_view.AppView$(dart.legacy(material_tree_group.MaterialTreeGroupComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$1] = new dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0$1].rootEl;
        this.updateChildClassNonHtml(_el_0, "item component");
        this.addShimC(_el_0);
        this[_appEl_0$0] = new view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8$] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DynamicComponentL(), dart.wrapType(DynamicComponentL()), dart.fn(() => new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentView.parentView.viewData.parentIndex)), this[_compView_0$1], this[_appEl_0$0]), VoidToDynamicComponentL())) : new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentView.parentView.viewData.parentIndex)), this[_compView_0$1], this[_appEl_0$0]);
        this[_compView_0$1].create0(this[_DynamicComponent_0_8$]);
        this.init1(this[_appEl_0$0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_option = this.parentView.locals[$_get]("$implicit");
        changed = false;
        let currVal_0 = _ctx.getComponentType(local_option);
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
          this[_DynamicComponent_0_8$].componentType = currVal_0;
          changed = true;
          this[_expr_0$1] = currVal_0;
        }
        let currVal_1 = _ctx.getComponentFactory(local_option);
        if (dart.test(app_view_utils.checkBinding(this[_expr_1$1], currVal_1))) {
          this[_DynamicComponent_0_8$].componentFactory = currVal_1;
          changed = true;
          this[_expr_1$1] = currVal_1;
        }
        let currVal_2 = local_option;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2$1], currVal_2))) {
          this[_DynamicComponent_0_8$].value = currVal_2;
          changed = true;
          this[_expr_2$1] = currVal_2;
        }
        if (changed) {
          this[_DynamicComponent_0_8$].ngAfterChanges();
        }
        this[_appEl_0$0].detectChangesInNestedViews();
        this[_compView_0$1].detectChanges();
      }
      destroyInternal() {
        this[_appEl_0$0].destroyNestedViews();
        this[_compView_0$1].destroyInternalState();
        this[_DynamicComponent_0_8$].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupComponent5.new = function(parentView, parentIndex) {
      this[_compView_0$1] = null;
      this[_appEl_0$0] = null;
      this[_DynamicComponent_0_8$] = null;
      this[_expr_0$1] = null;
      this[_expr_1$1] = null;
      this[_expr_2$1] = null;
      _ViewMaterialTreeGroupComponent5.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent5.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent5);
    _ViewMaterialTreeGroupComponent5.prototype[_is__ViewMaterialTreeGroupComponent5_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupComponent5);
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent5, L3);
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent5.__proto__),
      [_compView_0$1]: dart.fieldType(dart.legacy(dynamic_component$46template.ViewDynamicComponent0)),
      [_appEl_0$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_DynamicComponent_0_8$]: dart.fieldType(dart.legacy(dynamic_component.DynamicComponent)),
      [_expr_0$1]: dart.fieldType(dart.dynamic),
      [_expr_1$1]: dart.fieldType(dart.dynamic),
      [_expr_2$1]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialTreeGroupComponent5;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent5 = material_tree_group$46template._ViewMaterialTreeGroupComponent5$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent5, _is__ViewMaterialTreeGroupComponent5_default);
  var _textBinding_1$0 = dart.privateName(material_tree_group$46template, "_textBinding_1");
  const _is__ViewMaterialTreeGroupComponent6_default = Symbol('_is__ViewMaterialTreeGroupComponent6_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent6$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeGroupComponent6 extends app_view.AppView$(dart.legacy(material_tree_group.MaterialTreeGroupComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        this[_el_0$0] = doc[$createElement]("span");
        this.updateChildClass(HtmlElementL().as(this[_el_0$0]), "text");
        this.addShimE(this[_el_0$0]);
        this[_el_0$0][$append](this[_textBinding_1$0].element);
        this.init1(this[_el_0$0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_option = this.parentView.locals[$_get]("$implicit");
        let currVal_0 = !dart.test(_ctx.showDisabledCheckbox(local_option));
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
          dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_0$0]), "item", currVal_0);
          this[_expr_0$1] = currVal_0;
        }
        let currVal_1 = _ctx.showDisabledCheckbox(local_option);
        if (dart.test(app_view_utils.checkBinding(this[_expr_1$1], currVal_1))) {
          dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_0$0]), "disabled-item", currVal_1);
          this[_expr_1$1] = currVal_1;
        }
        this[_textBinding_1$0].updateText(interpolate.interpolateString0(_ctx.getOptionAsText(TL().as(local_option))));
      }
    }
    (_ViewMaterialTreeGroupComponent6.new = function(parentView, parentIndex) {
      this[_textBinding_1$0] = new text_binding.TextBinding.new();
      this[_expr_0$1] = null;
      this[_expr_1$1] = null;
      this[_el_0$0] = null;
      _ViewMaterialTreeGroupComponent6.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent6.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent6);
    _ViewMaterialTreeGroupComponent6.prototype[_is__ViewMaterialTreeGroupComponent6_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupComponent6);
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent6, L3);
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent6, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent6.__proto__),
      [_textBinding_1$0]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
      [_expr_0$1]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_1$1]: dart.fieldType(dart.legacy(core.bool)),
      [_el_0$0]: dart.fieldType(dart.legacy(html.Element))
    }));
    return _ViewMaterialTreeGroupComponent6;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent6 = material_tree_group$46template._ViewMaterialTreeGroupComponent6$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent6, _is__ViewMaterialTreeGroupComponent6_default);
  var _MaterialIconComponent_0_6 = dart.privateName(material_tree_group$46template, "_MaterialIconComponent_0_6");
  const _is__ViewMaterialTreeGroupComponent7_default = Symbol('_is__ViewMaterialTreeGroupComponent7_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent7$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialTreeGroupComponent7 extends app_view.AppView$(dart.legacy(material_tree_group.MaterialTreeGroupComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
        this[_el_0$0] = this[_compView_0$1].rootEl;
        dom_helpers.setAttribute(this[_el_0$0], "buttonDecorator", "");
        this.updateChildClassNonHtml(this[_el_0$0], "tree-expansion-state");
        this.addShimC(HtmlElementL().as(this[_el_0$0]));
        this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0$0], null));
        this[_MaterialIconComponent_0_6] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_0$0]));
        this[_compView_0$1].create0(this[_MaterialIconComponent_0_6]);
        this[_el_0$0][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
        this[_el_0$0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
        let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_trigger_0_0)));
        this.init(JSArrayOfObjectL().of([this[_el_0$0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(ButtonDirectiveL()) && 0 === nodeIndex) {
          return this[_ButtonDirective_0_5].instance;
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_option = this.parentView.locals[$_get]("$implicit");
        changed = false;
        let currVal_1 = dart.test(_ctx.isExpanded(TL().as(local_option))) ? "expand_less" : "expand_more";
        if (dart.test(app_view_utils.checkBinding(this[_expr_1$1], currVal_1))) {
          this[_MaterialIconComponent_0_6].icon = currVal_1;
          changed = true;
          this[_expr_1$1] = currVal_1;
        }
        if (changed) {
          this[_compView_0$1].markAsCheckOnce();
        }
        let currVal_0 = _ctx.isExpanded(TL().as(local_option));
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
          dom_helpers.updateClassBindingNonHtml(this[_el_0$0], "expanded", currVal_0);
          this[_expr_0$1] = currVal_0;
        }
        this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0$1], this[_el_0$0]);
        this[_compView_0$1].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$1].destroyInternalState();
      }
      [_handle_trigger_0_0]($36event) {
        let local_option = this.parentView.locals[$_get]("$implicit");
        let _ctx = this.ctx;
        _ctx.handleExpansion(EventL().as($36event), local_option);
      }
    }
    (_ViewMaterialTreeGroupComponent7.new = function(parentView, parentIndex) {
      this[_compView_0$1] = null;
      this[_ButtonDirective_0_5] = null;
      this[_MaterialIconComponent_0_6] = null;
      this[_expr_0$1] = null;
      this[_expr_1$1] = null;
      this[_el_0$0] = null;
      _ViewMaterialTreeGroupComponent7.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent7.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent7);
    _ViewMaterialTreeGroupComponent7.prototype[_is__ViewMaterialTreeGroupComponent7_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupComponent7);
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent7, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent7.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
      [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent7, L3);
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent7, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent7.__proto__),
      [_compView_0$1]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
      [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
      [_MaterialIconComponent_0_6]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
      [_expr_0$1]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_1$1]: dart.fieldType(dart.dynamic),
      [_el_0$0]: dart.fieldType(dart.legacy(html.Element))
    }));
    return _ViewMaterialTreeGroupComponent7;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent7 = material_tree_group$46template._ViewMaterialTreeGroupComponent7$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent7, _is__ViewMaterialTreeGroupComponent7_default);
  var _MaterialTreeGroupComponent_0_5$ = dart.privateName(material_tree_group$46template, "_MaterialTreeGroupComponent_0_5");
  var _expr_4$0 = dart.privateName(material_tree_group$46template, "_expr_4");
  var _expr_5$ = dart.privateName(material_tree_group$46template, "_expr_5");
  const _is__ViewMaterialTreeGroupComponent8_default = Symbol('_is__ViewMaterialTreeGroupComponent8_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent8$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialTreeGroupComponent0OfTL = () => (ViewMaterialTreeGroupComponent0OfTL = dart.constFn(material_tree_group$46template.ViewMaterialTreeGroupComponent0$(TL())))();
    var MaterialTreeGroupComponentOfTL = () => (MaterialTreeGroupComponentOfTL = dart.constFn(material_tree_group.MaterialTreeGroupComponent$(TL())))();
    var MaterialTreeGroupComponentLOfTL = () => (MaterialTreeGroupComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeGroupComponentOfTL())))();
    var VoidToMaterialTreeGroupComponentLOfTL = () => (VoidToMaterialTreeGroupComponentLOfTL = dart.constFn(dart.fnType(MaterialTreeGroupComponentLOfTL(), [])))();
    class _ViewMaterialTreeGroupComponent8 extends app_view.AppView$(dart.legacy(material_tree_group.MaterialTreeGroupComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$1] = new (ViewMaterialTreeGroupComponent0OfTL()).new(this, 0);
        let _el_0 = this[_compView_0$1].rootEl;
        this.updateChildClassNonHtml(_el_0, "child-tree");
        this.addShimC(_el_0);
        this[_MaterialTreeGroupComponent_0_5$] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupComponentLOfTL(), dart.wrapType(MaterialTreeGroupComponentL()), dart.fn(() => new (MaterialTreeGroupComponentOfTL()).new(MaterialTreeRootL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(MaterialTreeRootL()), this.parentView.parentView.viewData.parentIndex)), this[_compView_0$1], DropdownHandleL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentView.viewData.parentIndex)), intL().as(this.parentView.parentView.parentView.injectorGetOptional(C8 || CT.C8, this.parentView.parentView.viewData.parentIndex))), VoidToMaterialTreeGroupComponentLOfTL())) : new (MaterialTreeGroupComponentOfTL()).new(MaterialTreeRootL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(MaterialTreeRootL()), this.parentView.parentView.viewData.parentIndex)), this[_compView_0$1], DropdownHandleL().as(this.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentView.viewData.parentIndex)), intL().as(this.parentView.parentView.parentView.injectorGetOptional(C8 || CT.C8, this.parentView.parentView.viewData.parentIndex)));
        this[_compView_0$1].create0(this[_MaterialTreeGroupComponent_0_5$]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let local_subGroup = optimizations.unsafeCast(OptionGroupL(), this.locals[$_get]("$implicit"));
        let local_option = this.parentView.locals[$_get]("$implicit");
        let currVal_0 = _ctx.expandAll;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
          this[_MaterialTreeGroupComponent_0_5$].expandAll = currVal_0;
          this[_expr_0$1] = currVal_0;
        }
        let currVal_1 = local_subGroup;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1$1], currVal_1))) {
          this[_MaterialTreeGroupComponent_0_5$].group = currVal_1;
          this[_expr_1$1] = currVal_1;
        }
        let currVal_2 = dart.notNull(_ctx.level) + 1;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2$1], currVal_2))) {
          this[_MaterialTreeGroupComponent_0_5$].level = currVal_2;
          this[_expr_2$1] = currVal_2;
        }
        let currVal_3 = _ctx.showCheckbox(local_option);
        if (dart.test(app_view_utils.checkBinding(this[_expr_3$1], currVal_3))) {
          this[_MaterialTreeGroupComponent_0_5$].parentHasCheckbox = currVal_3;
          this[_expr_3$1] = currVal_3;
        }
        let currVal_4 = _ctx.allowParentSingleSelection;
        if (dart.test(app_view_utils.checkBinding(this[_expr_4$0], currVal_4))) {
          this[_MaterialTreeGroupComponent_0_5$].allowParentSingleSelection = currVal_4;
          this[_expr_4$0] = currVal_4;
        }
        let currVal_5 = _ctx.maxInitialOptionsShown;
        if (dart.test(app_view_utils.checkBinding(this[_expr_5$], currVal_5))) {
          this[_MaterialTreeGroupComponent_0_5$].maxInitialOptionsShown = currVal_5;
          this[_expr_5$] = currVal_5;
        }
        this[_compView_0$1].detectHostChanges(firstCheck);
        this[_compView_0$1].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$1].destroyInternalState();
        this[_MaterialTreeGroupComponent_0_5$].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupComponent8.new = function(parentView, parentIndex) {
      this[_compView_0$1] = null;
      this[_MaterialTreeGroupComponent_0_5$] = null;
      this[_expr_0$1] = null;
      this[_expr_1$1] = null;
      this[_expr_2$1] = null;
      this[_expr_3$1] = null;
      this[_expr_4$0] = null;
      this[_expr_5$] = null;
      _ViewMaterialTreeGroupComponent8.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent8.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent8);
    _ViewMaterialTreeGroupComponent8.prototype[_is__ViewMaterialTreeGroupComponent8_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupComponent8);
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent8, L3);
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent8, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent8.__proto__),
      [_compView_0$1]: dart.fieldType(dart.legacy(material_tree_group$46template.ViewMaterialTreeGroupComponent0$(dart.legacy(T)))),
      [_MaterialTreeGroupComponent_0_5$]: dart.fieldType(dart.legacy(material_tree_group.MaterialTreeGroupComponent$(dart.legacy(T)))),
      [_expr_0$1]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_1$1]: dart.fieldType(dart.dynamic),
      [_expr_2$1]: dart.fieldType(dart.legacy(core.int)),
      [_expr_3$1]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_4$0]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_5$]: dart.fieldType(dart.legacy(core.int))
    }));
    return _ViewMaterialTreeGroupComponent8;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent8 = material_tree_group$46template._ViewMaterialTreeGroupComponent8$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent8, _is__ViewMaterialTreeGroupComponent8_default);
  var _ButtonDirective_3_5 = dart.privateName(material_tree_group$46template, "_ButtonDirective_3_5");
  var _el_3 = dart.privateName(material_tree_group$46template, "_el_3");
  const _is__ViewMaterialTreeGroupComponent9_default = Symbol('_is__ViewMaterialTreeGroupComponent9_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponent9$ = dart.generic(T => {
    class _ViewMaterialTreeGroupComponent9 extends app_view.AppView$(dart.legacy(material_tree_group.MaterialTreeGroupComponent$(dart.legacy(T)))) {
      build() {
        let _ctx = this.ctx;
        let doc = html.document;
        let _el_0 = doc[$createElement]("li");
        this.addShimE(_el_0);
        this[_el_1] = dom_helpers.appendDiv(doc, _el_0);
        this.updateChildClass(this[_el_1], "view-more-link-item");
        this.addShimC(this[_el_1]);
        this[_el_2] = dom_helpers.appendDiv(doc, this[_el_1]);
        this.updateChildClass(this[_el_2], "material-tree-shift");
        this.addShimC(this[_el_2]);
        this[_el_3] = AnchorElementL().as(dom_helpers.appendElement(doc, this[_el_2], "a"));
        dom_helpers.setAttribute(this[_el_3], "buttonDecorator", "");
        this.updateChildClass(this[_el_3], "view-more-link");
        dom_helpers.setAttribute(this[_el_3], "href", "#");
        this.addShimC(this[_el_3]);
        this[_ButtonDirective_3_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_3], null));
        let _text_4 = dom_helpers.appendText(this[_el_3], interpolate.interpolateString0(material_tree_group.MaterialTreeGroupComponent.viewMoreMsg));
        this[_el_3][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_ButtonDirective_3_5].instance, 'handleClick')));
        this[_el_3][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_3_5].instance, 'handleKeyPress')));
        let subscription_0 = this[_ButtonDirective_3_5].instance.trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'viewMoreOptions')));
        this.init(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(ButtonDirectiveL()) && 3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
          return this[_ButtonDirective_3_5].instance;
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let currVal_0 = _ctx.getIndent(_ctx.visibleGroup.last);
        if (dart.test(app_view_utils.checkBinding(this[_expr_0$1], currVal_0))) {
          this[_el_1].style[$setProperty]("padding-left", currVal_0);
          this[_expr_0$1] = currVal_0;
        }
        if (firstCheck) {
          if (_ctx.fixedPadding != null) {
            this[_el_2].style[$setProperty]("padding-left", _ctx.fixedPadding);
          }
        }
        this[_ButtonDirective_3_5].detectHostChanges(this, this[_el_3]);
      }
    }
    (_ViewMaterialTreeGroupComponent9.new = function(parentView, parentIndex) {
      this[_ButtonDirective_3_5] = null;
      this[_expr_0$1] = null;
      this[_el_1] = null;
      this[_el_2] = null;
      this[_el_3] = null;
      _ViewMaterialTreeGroupComponent9.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialTreeGroupComponent9.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponent9);
    _ViewMaterialTreeGroupComponent9.prototype[_is__ViewMaterialTreeGroupComponent9_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupComponent9);
    dart.setMethodSignature(_ViewMaterialTreeGroupComponent9, () => ({
      __proto__: dart.getMethods(_ViewMaterialTreeGroupComponent9.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialTreeGroupComponent9, L3);
    dart.setFieldSignature(_ViewMaterialTreeGroupComponent9, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponent9.__proto__),
      [_ButtonDirective_3_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
      [_expr_0$1]: dart.fieldType(dart.dynamic),
      [_el_1]: dart.fieldType(dart.legacy(html.DivElement)),
      [_el_2]: dart.fieldType(dart.legacy(html.DivElement)),
      [_el_3]: dart.fieldType(dart.legacy(html.AnchorElement))
    }));
    return _ViewMaterialTreeGroupComponent9;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponent9 = material_tree_group$46template._ViewMaterialTreeGroupComponent9$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponent9, _is__ViewMaterialTreeGroupComponent9_default);
  const _is__ViewMaterialTreeGroupComponentHost0_default = Symbol('_is__ViewMaterialTreeGroupComponentHost0_default');
  material_tree_group$46template._ViewMaterialTreeGroupComponentHost0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialTreeGroupComponent0OfTL = () => (ViewMaterialTreeGroupComponent0OfTL = dart.constFn(material_tree_group$46template.ViewMaterialTreeGroupComponent0$(TL())))();
    var MaterialTreeGroupComponentOfTL = () => (MaterialTreeGroupComponentOfTL = dart.constFn(material_tree_group.MaterialTreeGroupComponent$(TL())))();
    var MaterialTreeGroupComponentLOfTL = () => (MaterialTreeGroupComponentLOfTL = dart.constFn(dart.legacy(MaterialTreeGroupComponentOfTL())))();
    var VoidToMaterialTreeGroupComponentLOfTL = () => (VoidToMaterialTreeGroupComponentLOfTL = dart.constFn(dart.fnType(MaterialTreeGroupComponentLOfTL(), [])))();
    var ComponentRefOfMaterialTreeGroupComponentLOfTL = () => (ComponentRefOfMaterialTreeGroupComponentLOfTL = dart.constFn(component_factory.ComponentRef$(MaterialTreeGroupComponentLOfTL())))();
    class _ViewMaterialTreeGroupComponentHost0 extends app_view.AppView$(dart.legacy(material_tree_group.MaterialTreeGroupComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0$1] = new (ViewMaterialTreeGroupComponent0OfTL()).new(this, 0);
        this.rootEl = this[_compView_0$1].rootEl;
        this[_MaterialTreeGroupComponent_0_5$] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeGroupComponentLOfTL(), dart.wrapType(MaterialTreeGroupComponentL()), dart.fn(() => new (MaterialTreeGroupComponentOfTL()).new(MaterialTreeRootL().as(this.injectorGet(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), this[_compView_0$1], DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex)), intL().as(this.injectorGetOptional(C8 || CT.C8, this.viewData.parentIndex))), VoidToMaterialTreeGroupComponentLOfTL())) : new (MaterialTreeGroupComponentOfTL()).new(MaterialTreeRootL().as(this.injectorGet(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)), this[_compView_0$1], DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex)), intL().as(this.injectorGetOptional(C8 || CT.C8, this.viewData.parentIndex)));
        this[_compView_0$1].create(this[_MaterialTreeGroupComponent_0_5$], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialTreeGroupComponentLOfTL()).new(0, this, this.rootEl, this[_MaterialTreeGroupComponent_0_5$]);
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        this[_compView_0$1].detectHostChanges(firstCheck);
        this[_compView_0$1].detectChanges();
      }
      destroyInternal() {
        this[_compView_0$1].destroyInternalState();
        this[_MaterialTreeGroupComponent_0_5$].ngOnDestroy();
      }
    }
    (_ViewMaterialTreeGroupComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0$1] = null;
      this[_MaterialTreeGroupComponent_0_5$] = null;
      _ViewMaterialTreeGroupComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
      ;
    }).prototype = _ViewMaterialTreeGroupComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialTreeGroupComponentHost0);
    _ViewMaterialTreeGroupComponentHost0.prototype[_is__ViewMaterialTreeGroupComponentHost0_default] = true;
    dart.addTypeCaches(_ViewMaterialTreeGroupComponentHost0);
    dart.setLibraryUri(_ViewMaterialTreeGroupComponentHost0, L3);
    dart.setFieldSignature(_ViewMaterialTreeGroupComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialTreeGroupComponentHost0.__proto__),
      [_compView_0$1]: dart.fieldType(dart.legacy(material_tree_group$46template.ViewMaterialTreeGroupComponent0$(dart.legacy(T)))),
      [_MaterialTreeGroupComponent_0_5$]: dart.fieldType(dart.legacy(material_tree_group.MaterialTreeGroupComponent$(dart.legacy(T))))
    }));
    return _ViewMaterialTreeGroupComponentHost0;
  });
  material_tree_group$46template._ViewMaterialTreeGroupComponentHost0 = material_tree_group$46template._ViewMaterialTreeGroupComponentHost0$();
  dart.addTypeTests(material_tree_group$46template._ViewMaterialTreeGroupComponentHost0, _is__ViewMaterialTreeGroupComponentHost0_default);
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent1 = function viewFactory_MaterialTreeGroupComponent1(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent1$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent2 = function viewFactory_MaterialTreeGroupComponent2(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent2$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent3 = function viewFactory_MaterialTreeGroupComponent3(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent3$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent4 = function viewFactory_MaterialTreeGroupComponent4(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent4$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent5 = function viewFactory_MaterialTreeGroupComponent5(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent5$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent6 = function viewFactory_MaterialTreeGroupComponent6(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent6$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent7 = function viewFactory_MaterialTreeGroupComponent7(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent7$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent8 = function viewFactory_MaterialTreeGroupComponent8(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent8$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponent9 = function viewFactory_MaterialTreeGroupComponent9(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponent9$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group$46template.viewFactory_MaterialTreeGroupComponentHost0 = function viewFactory_MaterialTreeGroupComponentHost0(T, parentView, parentIndex) {
    return new (material_tree_group$46template._ViewMaterialTreeGroupComponentHost0$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_tree_group$46template.initReflector = function initReflector$4() {
    if (dart.test(material_tree_group$46template._visited)) {
      return;
    }
    material_tree_group$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialTreeGroupComponentL()), material_tree_group$46template.MaterialTreeGroupComponentNgFactory);
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    dynamic_component$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    material_checkbox$46template.initReflector();
    material_icon$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    selection_options$46template.initReflector();
    material_tree_node$46template.initReflector();
    material_tree_root$46template.initReflector();
  };
  dart.copyProperties(material_tree_group$46template, {
    get MaterialTreeGroupComponentNgFactory() {
      return material_tree_group$46template._MaterialTreeGroupComponentNgFactory;
    }
  });
  var C23;
  var C22;
  var C21;
  dart.defineLazy(material_tree_group$46template, {
    /*material_tree_group$46template.styles$MaterialTreeGroupComponent*/get styles$MaterialTreeGroupComponent() {
      return [material_tree_group$46scss$46css$46shim.styles];
    },
    /*material_tree_group$46template._MaterialTreeGroupComponentNgFactory*/get _MaterialTreeGroupComponentNgFactory() {
      return C21 || CT.C21;
    },
    /*material_tree_group$46template.styles$MaterialTreeGroupComponentHost*/get styles$MaterialTreeGroupComponentHost() {
      return C3 || CT.C3;
    },
    /*material_tree_group$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(material_tree_group$46scss$46css$46shim, {
    /*material_tree_group$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%:first-of-type li:first-of-type._ngcontent-%ID% .root-border._ngcontent-%ID%{opacity:0}.material-tree-border._ngcontent-%ID%{background:#e0e0e0;display:none;height:1px;left:0;pointer-events:none;position:absolute;right:0;top:0}ul._ngcontent-%ID%{list-style:none;margin:0;padding:0}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID%{display:block;font-family:inherit;font-size:15px;line-height:32px;padding:0 24px;position:relative;white-space:nowrap;display:flex;align-items:center;color:rgba(0,0,0,0.87);cursor:pointer;padding-right:16px}ul._ngcontent-%ID% .material-tree-item.disabled._ngcontent-%ID%{pointer-events:none}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.54);width:40px}ul._ngcontent-%ID% .material-tree-item.disabled._ngcontent-%ID%  .material-list-item-primary{color:rgba(0,0,0,0.38)}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.54);margin-left:auto}ul._ngcontent-%ID% .material-tree-item.disabled._ngcontent-%ID%  .material-list-item-secondary{color:rgba(0,0,0,0.38)}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID%  .submenu-icon{transform:rotate(-90deg)}ul._ngcontent-%ID% .material-tree-item:not([separator=present]):hover._ngcontent-%ID%,ul._ngcontent-%ID% .material-tree-item:not([separator=present]):focus._ngcontent-%ID%,ul._ngcontent-%ID% .material-tree-item:not([separator=present]).active._ngcontent-%ID%{background:#eee}ul._ngcontent-%ID% .material-tree-item:not([separator=present]).disabled._ngcontent-%ID%{background:none;color:rgba(0,0,0,0.38);cursor:default;pointer-events:all}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% > .material-tree-shift._ngcontent-%ID%{position:relative;flex-grow:1;display:flex;align-items:center}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% > .material-tree-shift._ngcontent-%ID% > *._ngcontent-%ID%{flex-shrink:0}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% > .material-tree-shift._ngcontent-%ID% .tree-selection-state._ngcontent-%ID% + .material-tree-border._ngcontent-%ID%{left:40px}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% .tree-expansion-state._ngcontent-%ID%{display:inline-flex;margin-left:auto}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% .tree-selection-state._ngcontent-%ID%{display:inline-flex;vertical-align:middle;width:40px}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% .disabled-item._ngcontent-%ID%{color:#9e9e9e}ul._ngcontent-%ID% .material-tree-item._ngcontent-%ID% material-icon._ngcontent-%ID%{opacity:0.54}.view-more-link-item._ngcontent-%ID%{padding:8px 0}.view-more-link._ngcontent-%ID%{color:#4285f4;text-decoration:none}"];
    }
  }, true);
  material_tree_rendering_options$46template.initReflector = function initReflector$5() {
    if (dart.test(material_tree_rendering_options$46template._visited)) {
      return;
    }
    material_tree_rendering_options$46template._visited = true;
    selection_options$46template.initReflector();
  };
  dart.defineLazy(material_tree_rendering_options$46template, {
    /*material_tree_rendering_options$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var _query_materialInput_1_0_isDirty = dart.privateName(material_tree_filter$46template, "_query_materialInput_1_0_isDirty");
  var _appEl_0$1 = dart.privateName(material_tree_filter$46template, "_appEl_0");
  var _NgIf_0_9$ = dart.privateName(material_tree_filter$46template, "_NgIf_0_9");
  var C24;
  var _MaterialInputComponent_0_9 = dart.privateName(material_tree_filter$46template, "_MaterialInputComponent_0_9");
  material_tree_filter$46template.ViewMaterialTreeFilterComponent0 = class ViewMaterialTreeFilterComponent0 extends app_view.AppView$(dart.legacy(material_tree_filter.MaterialTreeFilterComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tree/material_tree_filter.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0$1] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0$1], C24 || CT.C24);
      this[_NgIf_0_9$] = new ng_if.NgIf.new(this[_appEl_0$1], _TemplateRef_0_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9$].ngIf = _ctx.hasFilterable;
      this[_appEl_0$1].detectChangesInNestedViews();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_materialInput_1_0_isDirty])) {
          _ctx.materialInput = queries.firstOrNull(MaterialInputComponentL(), this[_appEl_0$1].mapNestedViews(MaterialInputComponentL(), _ViewMaterialTreeFilterComponent1L(), dart.fn(nestedView => JSArrayOfMaterialInputComponentL().of([nestedView[_MaterialInputComponent_0_9]]), _ViewMaterialTreeFilterComponent1LToListLOfMaterialInputComponentL())));
          this[_query_materialInput_1_0_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      this[_appEl_0$1].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = material_tree_filter$46template.ViewMaterialTreeFilterComponent0._componentStyles;
      if (styles == null) {
        material_tree_filter$46template.ViewMaterialTreeFilterComponent0._componentStyles = styles = material_tree_filter$46template.ViewMaterialTreeFilterComponent0._componentStyles = new style_encapsulation._UnscopedComponentStyles.new(material_tree_filter$46template.styles$MaterialTreeFilterComponent, material_tree_filter$46template.ViewMaterialTreeFilterComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new = function(parentView, parentIndex) {
    this[_query_materialInput_1_0_isDirty] = true;
    this[_appEl_0$1] = null;
    this[_NgIf_0_9$] = null;
    material_tree_filter$46template.ViewMaterialTreeFilterComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-tree-filter"));
  }).prototype = material_tree_filter$46template.ViewMaterialTreeFilterComponent0.prototype;
  dart.addTypeTests(material_tree_filter$46template.ViewMaterialTreeFilterComponent0);
  dart.addTypeCaches(material_tree_filter$46template.ViewMaterialTreeFilterComponent0);
  dart.setLibraryUri(material_tree_filter$46template.ViewMaterialTreeFilterComponent0, L4);
  dart.setFieldSignature(material_tree_filter$46template.ViewMaterialTreeFilterComponent0, () => ({
    __proto__: dart.getFields(material_tree_filter$46template.ViewMaterialTreeFilterComponent0.__proto__),
    [_query_materialInput_1_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_appEl_0$1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9$]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  dart.defineLazy(material_tree_filter$46template.ViewMaterialTreeFilterComponent0, {
    /*material_tree_filter$46template.ViewMaterialTreeFilterComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0$2 = dart.privateName(material_tree_filter$46template, "_compView_0");
  var _DeferredValidator_0_5 = dart.privateName(material_tree_filter$46template, "_DeferredValidator_0_5");
  var _NgValidators_0_6 = dart.privateName(material_tree_filter$46template, "_NgValidators_0_6");
  var _NgModel_0_7 = dart.privateName(material_tree_filter$46template, "_NgModel_0_7");
  var _MaterialInputDefaultValueAccessor_0_11 = dart.privateName(material_tree_filter$46template, "_MaterialInputDefaultValueAccessor_0_11");
  var _expr_1$2 = dart.privateName(material_tree_filter$46template, "_expr_1");
  var _expr_3$2 = dart.privateName(material_tree_filter$46template, "_expr_3");
  var _handle_inputKeyPress_0_1 = dart.privateName(material_tree_filter$46template, "_handle_inputKeyPress_0_1");
  var C25;
  material_tree_filter$46template._ViewMaterialTreeFilterComponent1 = class _ViewMaterialTreeFilterComponent1 extends app_view.AppView$(dart.legacy(material_tree_filter.MaterialTreeFilterComponent)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0$2] = new material_input$46template.ViewMaterialInputComponent0.new(this, 0);
      let _el_0 = this[_compView_0$2].rootEl;
      dom_helpers.setAttribute(_el_0, "style", "width: 100%;");
      this[_DeferredValidator_0_5] = new deferred_validator.DeferredValidator.new();
      this[_NgValidators_0_6] = [this[_DeferredValidator_0_5]];
      this[_NgModel_0_7] = new ng_model.NgModel.new(this[_NgValidators_0_6], null);
      this[_MaterialInputComponent_0_9] = new material_input.MaterialInputComponent.new(null, null, null, this[_NgModel_0_7], this[_compView_0$2], this[_DeferredValidator_0_5]);
      this[_MaterialInputDefaultValueAccessor_0_11] = new material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_0_9], this[_NgModel_0_7]);
      this[_compView_0$2].create(this[_MaterialInputComponent_0_9], JSArrayOfObjectL().of([C3 || CT.C3, C3 || CT.C3]));
      let subscription_0 = this[_MaterialInputComponent_0_9].onFocus.listen(this.eventHandler0(FocusEventL(), dart.bind(_ctx, 'handleFocus')));
      let subscription_1 = this[_MaterialInputComponent_0_9].onKeypress.listen(this.eventHandler1(StringL(), StringL(), dart.bind(this, _handle_inputKeyPress_0_1)));
      this.init(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(DeferredValidatorL())) {
          return this[_DeferredValidator_0_5];
        }
        if (token === (C25 || CT.C25)) {
          return this[_NgValidators_0_6];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_0_7];
        }
        if (token === dart.wrapType(MaterialInputComponentL()) || token === dart.wrapType(BaseMaterialInputL()) || token === dart.wrapType(ReferenceDirectiveL()) || token === dart.wrapType(FocusableL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialInputComponent_0_9];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_0_7].model = _ctx.inputText;
      this[_NgModel_0_7].ngAfterChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_0_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_0_9].displayBottomPanel = false;
        changed = true;
      }
      let currVal_1 = _ctx.placeholder;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1$2], currVal_1))) {
        this[_MaterialInputComponent_0_9].label = currVal_1;
        changed = true;
        this[_expr_1$2] = currVal_1;
      }
      let currVal_3 = _ctx.leadingGlyph;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3$2], currVal_3))) {
        this[_MaterialInputComponent_0_9].leadingGlyph = currVal_3;
        changed = true;
        this[_expr_3$2] = currVal_3;
      }
      if (changed) {
        this[_compView_0$2].markAsCheckOnce();
      }
      this[_compView_0$2].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_0_9].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMaterialTreeFilterComponent0L(), this.parentView)[_query_materialInput_1_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0$2].destroyInternalState();
      this[_MaterialInputComponent_0_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_0_11].ngOnDestroy();
    }
    [_handle_inputKeyPress_0_1]($36event) {
      let _ctx = this.ctx;
      _ctx.inputText = StringL().as($36event);
    }
  };
  (material_tree_filter$46template._ViewMaterialTreeFilterComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$2] = null;
    this[_DeferredValidator_0_5] = null;
    this[_NgValidators_0_6] = null;
    this[_NgModel_0_7] = null;
    this[_MaterialInputComponent_0_9] = null;
    this[_MaterialInputDefaultValueAccessor_0_11] = null;
    this[_expr_1$2] = null;
    this[_expr_3$2] = null;
    material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_tree_filter$46template._ViewMaterialTreeFilterComponent1.prototype;
  dart.addTypeTests(material_tree_filter$46template._ViewMaterialTreeFilterComponent1);
  dart.addTypeCaches(material_tree_filter$46template._ViewMaterialTreeFilterComponent1);
  dart.setMethodSignature(material_tree_filter$46template._ViewMaterialTreeFilterComponent1, () => ({
    __proto__: dart.getMethods(material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_inputKeyPress_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_tree_filter$46template._ViewMaterialTreeFilterComponent1, L4);
  dart.setFieldSignature(material_tree_filter$46template._ViewMaterialTreeFilterComponent1, () => ({
    __proto__: dart.getFields(material_tree_filter$46template._ViewMaterialTreeFilterComponent1.__proto__),
    [_compView_0$2]: dart.fieldType(dart.legacy(material_input$46template.ViewMaterialInputComponent0)),
    [_DeferredValidator_0_5]: dart.fieldType(dart.legacy(deferred_validator.DeferredValidator)),
    [_NgValidators_0_6]: dart.fieldType(dart.legacy(core.List)),
    [_NgModel_0_7]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_MaterialInputComponent_0_9]: dart.fieldType(dart.legacy(material_input.MaterialInputComponent)),
    [_MaterialInputDefaultValueAccessor_0_11]: dart.fieldType(dart.legacy(material_input_default_value_accessor.MaterialInputDefaultValueAccessor)),
    [_expr_1$2]: dart.fieldType(dart.legacy(core.String)),
    [_expr_3$2]: dart.fieldType(dart.legacy(core.String))
  }));
  var _MaterialTreeFilterComponent_0_5$ = dart.privateName(material_tree_filter$46template, "_MaterialTreeFilterComponent_0_5");
  material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0 = class _ViewMaterialTreeFilterComponentHost0 extends app_view.AppView$(dart.legacy(material_tree_filter.MaterialTreeFilterComponent)) {
    build() {
      this[_compView_0$2] = new material_tree_filter$46template.ViewMaterialTreeFilterComponent0.new(this, 0);
      this.rootEl = this[_compView_0$2].rootEl;
      this[_MaterialTreeFilterComponent_0_5$] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTreeFilterComponentL(), dart.wrapType(MaterialTreeFilterComponentL()), dart.fn(() => new material_tree_filter.MaterialTreeFilterComponent.new(MaterialTreeRootL().as(this.injectorGetOptional(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex))), VoidToMaterialTreeFilterComponentL())) : new material_tree_filter.MaterialTreeFilterComponent.new(MaterialTreeRootL().as(this.injectorGetOptional(dart.wrapType(MaterialTreeRootL()), this.viewData.parentIndex)));
      this[_compView_0$2].create(this[_MaterialTreeFilterComponent_0_5$], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialTreeFilterComponentL()).new(0, this, this.rootEl, this[_MaterialTreeFilterComponent_0_5$]);
    }
    detectChangesInternal() {
      this[_compView_0$2].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$2].destroyInternalState();
    }
  };
  (material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$2] = null;
    this[_MaterialTreeFilterComponent_0_5$] = null;
    material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.prototype;
  dart.addTypeTests(material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0);
  dart.addTypeCaches(material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0);
  dart.setLibraryUri(material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0, L4);
  dart.setFieldSignature(material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0, () => ({
    __proto__: dart.getFields(material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.__proto__),
    [_compView_0$2]: dart.fieldType(dart.legacy(material_tree_filter$46template.ViewMaterialTreeFilterComponent0)),
    [_MaterialTreeFilterComponent_0_5$]: dart.fieldType(dart.legacy(material_tree_filter.MaterialTreeFilterComponent))
  }));
  material_tree_filter$46template.viewFactory_MaterialTreeFilterComponent1 = function viewFactory_MaterialTreeFilterComponent1(parentView, parentIndex) {
    return new material_tree_filter$46template._ViewMaterialTreeFilterComponent1.new(parentView, parentIndex);
  };
  material_tree_filter$46template.viewFactory_MaterialTreeFilterComponentHost0 = function viewFactory_MaterialTreeFilterComponentHost0(parentView, parentIndex) {
    return new material_tree_filter$46template._ViewMaterialTreeFilterComponentHost0.new(parentView, parentIndex);
  };
  material_tree_filter$46template.initReflector = function initReflector$6() {
    if (dart.test(material_tree_filter$46template._visited)) {
      return;
    }
    material_tree_filter$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialTreeFilterComponentL()), material_tree_filter$46template.MaterialTreeFilterComponentNgFactory);
    angular$46template.initReflector();
    material_input$46template.initReflector();
    select$46template.initReflector();
    material_tree_root$46template.initReflector();
    async$46template.initReflector();
  };
  dart.copyProperties(material_tree_filter$46template, {
    get MaterialTreeFilterComponentNgFactory() {
      return material_tree_filter$46template._MaterialTreeFilterComponentNgFactory;
    }
  });
  var C27;
  var C26;
  dart.defineLazy(material_tree_filter$46template, {
    /*material_tree_filter$46template.styles$MaterialTreeFilterComponent*/get styles$MaterialTreeFilterComponent() {
      return C3 || CT.C3;
    },
    /*material_tree_filter$46template._MaterialTreeFilterComponentNgFactory*/get _MaterialTreeFilterComponentNgFactory() {
      return C26 || CT.C26;
    },
    /*material_tree_filter$46template.styles$MaterialTreeFilterComponentHost*/get styles$MaterialTreeFilterComponentHost() {
      return C3 || CT.C3;
    },
    /*material_tree_filter$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(material_tree_dropdown$46scss$46css$46shim, {
    /*material_tree_dropdown$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{display:inline-flex}.button._ngcontent-%ID%{display:flex;align-items:center;flex-grow:1;cursor:pointer;padding-right:48px;position:relative}.button.border._ngcontent-%ID%{border-bottom:1px solid rgba(0,0,0,0.12);padding-bottom:1px}.icon._ngcontent-%ID%{opacity:0.54;position:absolute;right:0;top:calc(50% - 13px)}.search-box._ngcontent-%ID%{width:100%}"];
    }
  }, true);
  dart.trackLibraries("packages/angular_components/src/material_tree/group/material_tree_group.scss.css.shim", {
    "package:angular_components/src/material_tree/material_tree_dropdown.template.dart": material_tree_dropdown$46template,
    "package:angular_components/src/material_tree/material_tree_impl.template.dart": material_tree_impl$46template,
    "package:angular_components/src/material_tree/group/material_tree_group_flat.template.dart": material_tree_group_flat$46template,
    "package:angular_components/src/material_tree/group/material_tree_group_flat_check.scss.css.shim.dart": material_tree_group_flat_check$46scss$46css$46shim,
    "package:angular_components/src/material_tree/group/material_tree_group_flat_radio.scss.css.shim.dart": material_tree_group_flat_radio$46scss$46css$46shim,
    "package:angular_components/src/material_tree/group/material_tree_group_flat_list.scss.css.shim.dart": material_tree_group_flat_list$46scss$46css$46shim,
    "package:angular_components/src/material_tree/material_tree_root.template.dart": material_tree_root$46template,
    "package:angular_components/src/material_tree/material_tree_node.template.dart": material_tree_node$46template,
    "package:angular_components/src/material_tree/material_tree_expand_state.template.dart": material_tree_expand_state$46template,
    "package:angular_components/src/material_tree/group/material_tree_group.template.dart": material_tree_group$46template,
    "package:angular_components/src/material_tree/group/material_tree_group.scss.css.shim.dart": material_tree_group$46scss$46css$46shim,
    "package:angular_components/src/material_tree/material_tree_rendering_options.template.dart": material_tree_rendering_options$46template,
    "package:angular_components/src/material_tree/material_tree_filter.template.dart": material_tree_filter$46template,
    "package:angular_components/src/material_tree/material_tree_dropdown.scss.css.shim.dart": material_tree_dropdown$46scss$46css$46shim
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../material_tree_dropdown.template.dart","../material_tree_impl.template.dart","material_tree_group_flat.template.dart","material_tree_group_flat_check.scss.css.shim.dart","material_tree_group_flat_radio.scss.css.shim.dart","material_tree_group_flat_list.scss.css.shim.dart","../material_tree_root.template.dart","../material_tree_node.template.dart","../material_tree_expand_state.template.dart","material_tree_group.template.dart","material_tree_group.scss.css.shim.dart","../material_tree_rendering_options.template.dart","../material_tree_filter.template.dart","../material_tree_dropdown.scss.css.shim.dart"],"names":[],"mappings":"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","file":"material_tree_group.scss.css.shim.ddc.js"}');
  // Exports:
  return {
    src__material_tree__material_tree_dropdown$46template: material_tree_dropdown$46template,
    src__material_tree__material_tree_impl$46template: material_tree_impl$46template,
    src__material_tree__group__material_tree_group_flat$46template: material_tree_group_flat$46template,
    src__material_tree__group__material_tree_group_flat_check$46scss$46css$46shim: material_tree_group_flat_check$46scss$46css$46shim,
    src__material_tree__group__material_tree_group_flat_radio$46scss$46css$46shim: material_tree_group_flat_radio$46scss$46css$46shim,
    src__material_tree__group__material_tree_group_flat_list$46scss$46css$46shim: material_tree_group_flat_list$46scss$46css$46shim,
    src__material_tree__material_tree_root$46template: material_tree_root$46template,
    src__material_tree__material_tree_node$46template: material_tree_node$46template,
    src__material_tree__material_tree_expand_state$46template: material_tree_expand_state$46template,
    src__material_tree__group__material_tree_group$46template: material_tree_group$46template,
    src__material_tree__group__material_tree_group$46scss$46css$46shim: material_tree_group$46scss$46css$46shim,
    src__material_tree__material_tree_rendering_options$46template: material_tree_rendering_options$46template,
    src__material_tree__material_tree_filter$46template: material_tree_filter$46template,
    src__material_tree__material_tree_dropdown$46scss$46css$46shim: material_tree_dropdown$46scss$46css$46shim
  };
}));

//# sourceMappingURL=material_tree_group.scss.css.shim.ddc.js.map
