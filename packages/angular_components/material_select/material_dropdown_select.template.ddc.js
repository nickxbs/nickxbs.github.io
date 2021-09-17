define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/content/deferred_content', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/material_dropdown_select', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/focus/focus', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/material_list/material_list', 'packages/angular_components/material_select/material_select_dropdown_item.template', 'packages/angular_components/model/a11y/active_item_directive.template', 'packages/angular_components/model/a11y/active_item_directive', 'packages/angular_components/material_select/material_select_dropdown_item', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_options', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular_components/model/a11y/active_item', 'packages/angular/angular.template', 'packages/angular_components/annotations/rtl_annotation.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_select/activation_handler.template', 'packages/angular_components/material_select/material_select_base.template', 'packages/angular_components/material_select/shift_click_selection.template', 'packages/angular_components/mixins/button_wrapper.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/mixins/selection_input_adapter.template', 'packages/angular_components/mixins/track_layout_changes.template', 'packages/angular_components/model/a11y/active_item.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/model/ui/template_support.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/material_select/material_dropdown_select.scss.css.shim'], (function load__packages__angular_components__material_select__material_dropdown_select_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular_components__material_popup__material_popup, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_select__dropdown_button$46template, packages__angular_components__material_select__dropdown_button, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__utils__angular__reference__reference, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__content__deferred_content, packages__angular_components__focus__focus_interface, packages__angular_components__interfaces__has_disabled, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__material_select__material_dropdown_select, packages__angular_components__material_list__material_list$46template, packages__angular_components__focus__focus, packages__angular_components__laminate__components__modal__modal, packages__angular_components__material_list__material_list, packages__angular_components__material_select__material_select_dropdown_item$46template, packages__angular_components__model__a11y__active_item_directive$46template, packages__angular_components__model__a11y__active_item_directive, packages__angular_components__material_select__material_select_dropdown_item, packages__angular_components__material_select__activation_handler, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__model__selection__selection_container, packages__angular_components__model__ui__has_renderer, packages__angular_components__model__selection__selection_options, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__angular_components__dynamic_component__dynamic_component$46template, packages__angular_components__dynamic_component__dynamic_component, packages__angular_components__model__a11y__active_item, packages__angular__angular$46template, packages__angular_components__annotations__rtl_annotation$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__focus__focus$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_select__activation_handler$46template, packages__angular_components__material_select__material_select_base$46template, packages__angular_components__material_select__shift_click_selection$46template, packages__angular_components__mixins__button_wrapper$46template, packages__angular_components__mixins__material_dropdown_base$46template, packages__angular_components__mixins__selection_input_adapter$46template, packages__angular_components__mixins__track_layout_changes$46template, packages__angular_components__model__a11y__active_item$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_container$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__selection__selection_options$46template, packages__angular_components__model__ui__has_factory$46template, packages__angular_components__model__ui__template_support$46template, packages__angular_components__utils__angular__css__css$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_components__material_select__material_dropdown_select$46scss$46css$46shim) {
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
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const dynamic_component_loader = packages__angular__src__bootstrap__modules.src__core__linker__dynamic_component_loader;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const dropdown_button$46template = packages__angular_components__material_select__dropdown_button$46template.material_select__dropdown_button$46template;
  const dropdown_button = packages__angular_components__material_select__dropdown_button.material_select__dropdown_button;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const deferred_content = packages__angular_components__content__deferred_content.content__deferred_content;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const material_dropdown_select = packages__angular_components__material_select__material_dropdown_select.material_select__material_dropdown_select;
  const material_list$46template = packages__angular_components__material_list__material_list$46template.material_list__material_list$46template;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const material_list = packages__angular_components__material_list__material_list.material_list__material_list;
  const material_select_dropdown_item$46template = packages__angular_components__material_select__material_select_dropdown_item$46template.material_select__material_select_dropdown_item$46template;
  const active_item_directive$46template = packages__angular_components__model__a11y__active_item_directive$46template.model__a11y__active_item_directive$46template;
  const active_item_directive = packages__angular_components__model__a11y__active_item_directive.model__a11y__active_item_directive;
  const material_select_dropdown_item = packages__angular_components__material_select__material_select_dropdown_item.material_select__material_select_dropdown_item;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const selection_options = packages__angular_components__model__selection__selection_options.model__selection__selection_options;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const dynamic_component$46template = packages__angular_components__dynamic_component__dynamic_component$46template.dynamic_component__dynamic_component$46template;
  const dynamic_component = packages__angular_components__dynamic_component__dynamic_component.dynamic_component__dynamic_component;
  const active_item = packages__angular_components__model__a11y__active_item.model__a11y__active_item;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const rtl_annotation$46template = packages__angular_components__annotations__rtl_annotation$46template.annotations__rtl_annotation$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const activation_handler$46template = packages__angular_components__material_select__activation_handler$46template.material_select__activation_handler$46template;
  const material_select_base$46template = packages__angular_components__material_select__material_select_base$46template.material_select__material_select_base$46template;
  const shift_click_selection$46template = packages__angular_components__material_select__shift_click_selection$46template.material_select__shift_click_selection$46template;
  const button_wrapper$46template = packages__angular_components__mixins__button_wrapper$46template.mixins__button_wrapper$46template;
  const material_dropdown_base$46template = packages__angular_components__mixins__material_dropdown_base$46template.mixins__material_dropdown_base$46template;
  const selection_input_adapter$46template = packages__angular_components__mixins__selection_input_adapter$46template.mixins__selection_input_adapter$46template;
  const track_layout_changes$46template = packages__angular_components__mixins__track_layout_changes$46template.mixins__track_layout_changes$46template;
  const active_item$46template = packages__angular_components__model__a11y__active_item$46template.model__a11y__active_item$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_container$46template = packages__angular_components__model__selection__selection_container$46template.model__selection__selection_container$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const selection_options$46template = packages__angular_components__model__selection__selection_options$46template.model__selection__selection_options$46template;
  const has_factory$46template = packages__angular_components__model__ui__has_factory$46template.model__ui__has_factory$46template;
  const template_support$46template = packages__angular_components__model__ui__template_support$46template.model__ui__template_support$46template;
  const css$46template = packages__angular_components__utils__angular__css__css$46template.utils__angular__css__css$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const material_dropdown_select$46scss$46css$46shim = packages__angular_components__material_select__material_dropdown_select$46scss$46css$46shim.material_select__material_dropdown_select$46scss$46css$46shim;
  var material_dropdown_select$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  var $addEventListener = dartx.addEventListener;
  var $length = dartx.length;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var PopupSourceDirectiveL = () => (PopupSourceDirectiveL = dart.constFn(dart.legacy(popup_source_directive.PopupSourceDirective)))();
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var VoidToPopupSourceDirectiveL = () => (VoidToPopupSourceDirectiveL = dart.constFn(dart.fnType(PopupSourceDirectiveL(), [])))();
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
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewOfObjectL = () => (AppViewOfObjectL = dart.constFn(app_view.AppView$(ObjectL())))();
  var AppViewLOfObjectL = () => (AppViewLOfObjectL = dart.constFn(dart.legacy(AppViewOfObjectL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLOfObjectLAndintLToAppViewLOfvoid = () => (AppViewLOfObjectLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewLOfObjectL(), intL()])))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
  var ViewContainerL = () => (ViewContainerL = dart.constFn(dart.legacy(view_container.ViewContainer)))();
  var JSArrayOfViewContainerL = () => (JSArrayOfViewContainerL = dart.constFn(_interceptors.JSArray$(ViewContainerL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var AutoFocusDirectiveL = () => (AutoFocusDirectiveL = dart.constFn(dart.legacy(focus.AutoFocusDirective)))();
  var ModalComponentL = () => (ModalComponentL = dart.constFn(dart.legacy(modal.ModalComponent)))();
  var ViewMaterialDropdownSelectComponent0L = () => (ViewMaterialDropdownSelectComponent0L = dart.constFn(dart.legacy(material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0)))();
  var VoidToAutoFocusDirectiveL = () => (VoidToAutoFocusDirectiveL = dart.constFn(dart.fnType(AutoFocusDirectiveL(), [])))();
  var intLAnddynamicToObjectL = () => (intLAnddynamicToObjectL = dart.constFn(dart.fnType(ObjectL(), [intL(), dart.dynamic])))();
  var intLAnddynamicToLObjectL = () => (intLAnddynamicToLObjectL = dart.constFn(dart.legacy(intLAnddynamicToObjectL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ViewMaterialSelectDropdownItemComponent0OfStringL = () => (ViewMaterialSelectDropdownItemComponent0OfStringL = dart.constFn(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(StringL())))();
  var ActiveItemDirectiveL = () => (ActiveItemDirectiveL = dart.constFn(dart.legacy(active_item_directive.ActiveItemDirective)))();
  var ModalL = () => (ModalL = dart.constFn(dart.legacy(modal.Modal)))();
  var VoidToActiveItemDirectiveL = () => (VoidToActiveItemDirectiveL = dart.constFn(dart.fnType(ActiveItemDirectiveL(), [])))();
  var MaterialSelectDropdownItemComponentOfStringL = () => (MaterialSelectDropdownItemComponentOfStringL = dart.constFn(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(StringL())))();
  var MaterialSelectDropdownItemComponentLOfStringL = () => (MaterialSelectDropdownItemComponentLOfStringL = dart.constFn(dart.legacy(MaterialSelectDropdownItemComponentOfStringL())))();
  var MaterialSelectDropdownItemComponentL = () => (MaterialSelectDropdownItemComponentL = dart.constFn(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent)))();
  var ActivationHandlerL = () => (ActivationHandlerL = dart.constFn(dart.legacy(activation_handler.ActivationHandler)))();
  var IdGeneratorL = () => (IdGeneratorL = dart.constFn(dart.legacy(id_generator.IdGenerator)))();
  var VoidToMaterialSelectDropdownItemComponentLOfStringL = () => (VoidToMaterialSelectDropdownItemComponentLOfStringL = dart.constFn(dart.fnType(MaterialSelectDropdownItemComponentLOfStringL(), [])))();
  var SelectionItemL = () => (SelectionItemL = dart.constFn(dart.legacy(selection_container.SelectionItem)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var DynamicComponentL = () => (DynamicComponentL = dart.constFn(dart.legacy(dynamic_component.DynamicComponent)))();
  var SlowComponentLoaderL = () => (SlowComponentLoaderL = dart.constFn(dart.legacy(dynamic_component_loader.SlowComponentLoader)))();
  var VoidToDynamicComponentL = () => (VoidToDynamicComponentL = dart.constFn(dart.fnType(DynamicComponentL(), [])))();
  var ComponentFactoryL = () => (ComponentFactoryL = dart.constFn(dart.legacy(component_factory.ComponentFactory)))();
  var dynamicToComponentFactoryL = () => (dynamicToComponentFactoryL = dart.constFn(dart.fnType(ComponentFactoryL(), [dart.dynamic])))();
  var dynamicToLComponentFactoryL = () => (dynamicToLComponentFactoryL = dart.constFn(dart.legacy(dynamicToComponentFactoryL())))();
  var MaterialDropdownSelectComponentL = () => (MaterialDropdownSelectComponentL = dart.constFn(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent)))();
  var SelectionContainerL = () => (SelectionContainerL = dart.constFn(dart.legacy(selection_container.SelectionContainer)))();
  var ActiveItemModelL = () => (ActiveItemModelL = dart.constFn(dart.legacy(active_item.ActiveItemModel)))();
  var ComponentFactoryOfMaterialDropdownSelectComponentL = () => (ComponentFactoryOfMaterialDropdownSelectComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialDropdownSelectComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var AppViewLAndintLToAppViewLOfMaterialDropdownSelectComponentLOfTL = () => (AppViewLAndintLToAppViewLOfMaterialDropdownSelectComponentLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialDropdownSelectComponentOfTL = () => (MaterialDropdownSelectComponentOfTL = dart.constFn(material_dropdown_select.MaterialDropdownSelectComponent$(TL())))();
    var MaterialDropdownSelectComponentLOfTL = () => (MaterialDropdownSelectComponentLOfTL = dart.constFn(dart.legacy(MaterialDropdownSelectComponentOfTL())))();
    var AppViewOfMaterialDropdownSelectComponentLOfTL = () => (AppViewOfMaterialDropdownSelectComponentLOfTL = dart.constFn(app_view.AppView$(MaterialDropdownSelectComponentLOfTL())))();
    var AppViewLOfMaterialDropdownSelectComponentLOfTL = () => (AppViewLOfMaterialDropdownSelectComponentLOfTL = dart.constFn(dart.legacy(AppViewOfMaterialDropdownSelectComponentLOfTL())))();
    return [AppViewLOfMaterialDropdownSelectComponentLOfTL(), [AppViewL(), intL()]];
  })))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_select/material_dropdown_select.template.dart";
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
      return C3 = dart.constList([], ObjectL());
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "isRtl"
      });
    },
    get C8() {
      return C8 = dart.fn(material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponentHost0, AppViewLAndintLToAppViewLOfMaterialDropdownSelectComponentLOfTL());
    },
    get C7() {
      return C7 = dart.const(dart.gbind(C8 || CT.C8, dart.dynamic));
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ComponentFactoryOfMaterialDropdownSelectComponentL().prototype,
        [ComponentFactory__viewFactory]: C7 || CT.C7,
        [ComponentFactory_selector]: "material-dropdown-select"
      });
    }
  }, false);
  var _compView_0 = dart.privateName(material_dropdown_select$46template, "_compView_0");
  var _DropdownButtonComponent_0_5 = dart.privateName(material_dropdown_select$46template, "_DropdownButtonComponent_0_5");
  var _PopupSourceDirective_0_7 = dart.privateName(material_dropdown_select$46template, "_PopupSourceDirective_0_7");
  var _compView_2 = dart.privateName(material_dropdown_select$46template, "_compView_2");
  var _appEl_2 = dart.privateName(material_dropdown_select$46template, "_appEl_2");
  var _MaterialPopupComponent_2_8 = dart.privateName(material_dropdown_select$46template, "_MaterialPopupComponent_2_8");
  var __PopupRef_2_10 = dart.privateName(material_dropdown_select$46template, "__PopupRef_2_10");
  var __PopupHierarchy_2_12 = dart.privateName(material_dropdown_select$46template, "__PopupHierarchy_2_12");
  var _appEl_4 = dart.privateName(material_dropdown_select$46template, "_appEl_4");
  var _DeferredContentDirective_4_9 = dart.privateName(material_dropdown_select$46template, "_DeferredContentDirective_4_9");
  var _expr_0 = dart.privateName(material_dropdown_select$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_dropdown_select$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_dropdown_select$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_dropdown_select$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_dropdown_select$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_dropdown_select$46template, "_expr_5");
  var _expr_7 = dart.privateName(material_dropdown_select$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_dropdown_select$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_dropdown_select$46template, "_expr_9");
  var _expr_11 = dart.privateName(material_dropdown_select$46template, "_expr_11");
  var _expr_12 = dart.privateName(material_dropdown_select$46template, "_expr_12");
  var _expr_14 = dart.privateName(material_dropdown_select$46template, "_expr_14");
  var _expr_16 = dart.privateName(material_dropdown_select$46template, "_expr_16");
  var _expr_17 = dart.privateName(material_dropdown_select$46template, "_expr_17");
  var _expr_18 = dart.privateName(material_dropdown_select$46template, "_expr_18");
  var _expr_19 = dart.privateName(material_dropdown_select$46template, "_expr_19");
  var _expr_20 = dart.privateName(material_dropdown_select$46template, "_expr_20");
  var _expr_21 = dart.privateName(material_dropdown_select$46template, "_expr_21");
  var _el_2 = dart.privateName(material_dropdown_select$46template, "_el_2");
  var _PopupRef_2_10 = dart.privateName(material_dropdown_select$46template, "_PopupRef_2_10");
  var _PopupHierarchy_2_12 = dart.privateName(material_dropdown_select$46template, "_PopupHierarchy_2_12");
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C0;
  var C1;
  var C2;
  var C3;
  const _is_ViewMaterialDropdownSelectComponent0_default = Symbol('_is_ViewMaterialDropdownSelectComponent0_default');
  material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ViewMaterialDropdownSelectComponent0 extends app_view.AppView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      get [_PopupRef_2_10]() {
        if (this[__PopupRef_2_10] == null) {
          this[__PopupRef_2_10] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_2_8]);
        }
        return this[__PopupRef_2_10];
      }
      get [_PopupHierarchy_2_12]() {
        if (this[__PopupHierarchy_2_12] == null) {
          this[__PopupHierarchy_2_12] = material_popup.getHierarchy(this[_MaterialPopupComponent_2_8]);
        }
        return this[__PopupHierarchy_2_12];
      }
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_select/material_dropdown_select.dart" : null;
      }
      build() {
        let t0;
        let _ctx = this.ctx;
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        this[_compView_0] = new dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        parentRenderNode[$append](_el_0);
        dom_helpers.setAttribute(_el_0, "initPopupAriaAttributes", "false");
        dom_helpers.setAttribute(_el_0, "popupSource", "");
        dom_helpers.setAttribute(_el_0, "popupType", "listbox");
        this.addShimC(_el_0);
        this[_DropdownButtonComponent_0_5] = new dropdown_button.DropdownButtonComponent.new();
        this[_PopupSourceDirective_0_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), _el_0, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), this[_DropdownButtonComponent_0_5], "false"), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), _el_0, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), this[_DropdownButtonComponent_0_5], "false");
        let _text_1 = dom_helpers.createText(" ");
        this[_compView_0].create(this[_DropdownButtonComponent_0_5], JSArrayOfObjectL().of([(t0 = [_text_1], (() => {
            t0[$addAll](core.Iterable.as(this.projectedNodes[$_get](0)));
            return t0;
          })())]));
        this[_compView_2] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 2);
        this[_el_2] = this[_compView_2].rootEl;
        parentRenderNode[$append](this[_el_2]);
        dom_helpers.setAttribute(this[_el_2], "enforceSpaceConstraints", "");
        this.addShimC(HtmlElementL().as(this[_el_2]));
        this[_appEl_2] = new view_container.ViewContainer.new(2, null, this, this[_el_2]);
        this[_MaterialPopupComponent_2_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C0 || CT.C0, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C1 || CT.C1, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C2 || CT.C2, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_2], this[_appEl_2], new element_ref.ElementRef.new(this[_el_2])), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C0 || CT.C0, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C1 || CT.C1, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C2 || CT.C2, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_2], this[_appEl_2], new element_ref.ElementRef.new(this[_el_2]));
        let doc = html.document;
        let _el_3 = doc[$createElement]("div");
        dom_helpers.setAttribute(_el_3, "header", "");
        this.addShimC(HtmlElementL().as(_el_3));
        this.project(_el_3, 1);
        let _anchor_4 = dom_helpers.createAnchor();
        this[_appEl_4] = new view_container.ViewContainer.new(4, 2, this, _anchor_4);
        let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent1(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_DeferredContentDirective_4_9] = new deferred_content.DeferredContentDirective.new(this[_appEl_4], _TemplateRef_4_8, this[_MaterialPopupComponent_2_8]);
        let _el_5 = doc[$createElement]("div");
        dom_helpers.setAttribute(_el_5, "footer", "");
        this.addShimC(HtmlElementL().as(_el_5));
        this.project(_el_5, 5);
        this[_compView_2].create(this[_MaterialPopupComponent_2_8], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_3]), JSArrayOfViewContainerL().of([this[_appEl_4]]), JSArrayOfElementL().of([_el_5])]));
        _el_0[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyDown')));
        _el_0[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyPress')));
        let subscription_0 = this[_DropdownButtonComponent_0_5].onFocus.listen(this.eventHandler1(FocusEventL(), FocusEventL(), dart.bind(_ctx, 'onFocus')));
        let subscription_1 = this[_DropdownButtonComponent_0_5].onBlur.listen(this.eventHandler1(FocusEventL(), FocusEventL(), dart.bind(_ctx, 'onBlur')));
        let subscription_2 = this[_DropdownButtonComponent_0_5].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'handleClick')));
        let subscription_3 = this[_MaterialPopupComponent_2_8].onVisible.listen(this.eventHandler1(boolL(), boolL(), dart.bind(_ctx, 'onVisible')));
        _el_3[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyDown')));
        _el_3[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyPress')));
        _el_3[$addEventListener]("keyup", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyUp')));
        _el_5[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyDown')));
        _el_5[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyPress')));
        _el_5[$addEventListener]("keyup", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyUp')));
        _ctx.dropdownButton = this[_DropdownButtonComponent_0_5];
        this.init(C3 || CT.C3, JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1, subscription_2, subscription_3]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(FocusableL()) || token === dart.wrapType(HasDisabledL())) && dart.notNull(nodeIndex) <= 1) {
          return this[_DropdownButtonComponent_0_5];
        }
        if (2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
          if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(DropdownHandleL())) {
            return this[_MaterialPopupComponent_2_8];
          }
          if (token === dart.wrapType(PopupRefL())) {
            return this[_PopupRef_2_10];
          }
          if (token === dart.wrapType(PopupHierarchyL())) {
            return this[_PopupHierarchy_2_12];
          }
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        let local_source = this[_PopupSourceDirective_0_7];
        changed = false;
        if (firstCheck) {
          this[_DropdownButtonComponent_0_5].popupType = "listbox";
          changed = true;
          if (_ctx.buttonAriaRole != null) {
            this[_DropdownButtonComponent_0_5].role = _ctx.buttonAriaRole;
            changed = true;
          }
        }
        let currVal_0 = _ctx.buttonText;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_DropdownButtonComponent_0_5].buttonText = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.buttonAriaLabel;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_DropdownButtonComponent_0_5].buttonAriaLabel = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = _ctx.disabled;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_DropdownButtonComponent_0_5].disabled = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = _ctx.icon;
        if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_DropdownButtonComponent_0_5].icon = currVal_3;
          changed = true;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = _ctx.iconName;
        if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          this[_DropdownButtonComponent_0_5].iconName = currVal_4;
          changed = true;
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.raised;
        if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          this[_DropdownButtonComponent_0_5].raised = currVal_5;
          changed = true;
          this[_expr_5] = currVal_5;
        }
        let currVal_7 = _ctx.error;
        if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
          this[_DropdownButtonComponent_0_5].error = currVal_7;
          changed = true;
          this[_expr_7] = currVal_7;
        }
        let currVal_8 = dart.test(_ctx.visible) ? _ctx.listId : null;
        if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
          this[_DropdownButtonComponent_0_5].ariaOwns = currVal_8;
          changed = true;
          this[_expr_8] = currVal_8;
        }
        let currVal_9 = _ctx.visible;
        if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
          this[_DropdownButtonComponent_0_5].ariaExpanded = currVal_9;
          changed = true;
          this[_expr_9] = currVal_9;
        }
        let currVal_11 = _ctx.buttonAriaLabelledBy;
        if (dart.test(app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
          this[_DropdownButtonComponent_0_5].ariaLabelledBy = currVal_11;
          changed = true;
          this[_expr_11] = currVal_11;
        }
        let currVal_12 = _ctx.showButtonBorder;
        if (dart.test(app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
          this[_DropdownButtonComponent_0_5].showButtonBorder = currVal_12;
          changed = true;
          this[_expr_12] = currVal_12;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
          this[_DropdownButtonComponent_0_5].ngOnInit();
        }
        changed = false;
        if (firstCheck) {
          this[_MaterialPopupComponent_2_8].enforceSpaceConstraints = true;
          changed = true;
        }
        let currVal_14 = _ctx.autoDismiss;
        if (dart.test(app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
          this[_MaterialPopupComponent_2_8].autoDismiss = currVal_14;
          changed = true;
          this[_expr_14] = currVal_14;
        }
        let currVal_16 = _ctx.popupMatchInputWidth;
        if (dart.test(app_view_utils.checkBinding(this[_expr_16], currVal_16))) {
          this[_MaterialPopupComponent_2_8].matchMinSourceWidth = currVal_16;
          changed = true;
          this[_expr_16] = currVal_16;
        }
        let currVal_17 = _ctx.preferredPositions;
        if (dart.test(app_view_utils.checkBinding(this[_expr_17], currVal_17))) {
          this[_MaterialPopupComponent_2_8].preferredPositions = currVal_17;
          changed = true;
          this[_expr_17] = currVal_17;
        }
        let currVal_18 = local_source;
        if (dart.test(app_view_utils.checkBinding(this[_expr_18], currVal_18))) {
          this[_MaterialPopupComponent_2_8].source = currVal_18;
          changed = true;
          this[_expr_18] = currVal_18;
        }
        let currVal_19 = _ctx.trackLayoutChanges;
        if (dart.test(app_view_utils.checkBinding(this[_expr_19], currVal_19))) {
          this[_MaterialPopupComponent_2_8].trackLayoutChanges = currVal_19;
          changed = true;
          this[_expr_19] = currVal_19;
        }
        let currVal_20 = _ctx.visible;
        if (dart.test(app_view_utils.checkBinding(this[_expr_20], currVal_20))) {
          this[_MaterialPopupComponent_2_8].visible = currVal_20;
          changed = true;
          this[_expr_20] = currVal_20;
        }
        let currVal_21 = _ctx.slide;
        if (dart.test(app_view_utils.checkBinding(this[_expr_21], currVal_21))) {
          this[_MaterialPopupComponent_2_8].slide = currVal_21;
          changed = true;
          this[_expr_21] = currVal_21;
        }
        if (changed) {
          this[_compView_2].markAsCheckOnce();
        }
        if (firstCheck) {
          this[_DeferredContentDirective_4_9].preserveDimensions = true;
        }
        this[_appEl_2].detectChangesInNestedViews();
        this[_appEl_4].detectChangesInNestedViews();
        if (firstCheck) {
          if (_ctx.popupClassName != null) {
            this[_compView_2].updateChildClassNonHtml(this[_el_2], _ctx.popupClassName);
          }
        }
        this[_compView_2].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
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
        this[_appEl_4].destroyNestedViews();
        this[_compView_0].destroyInternalState();
        this[_compView_2].destroyInternalState();
        this[_PopupSourceDirective_0_7].ngOnDestroy();
        this[_DeferredContentDirective_4_9].ngOnDestroy();
        this[_MaterialPopupComponent_2_8].ngOnDestroy();
      }
      initComponentStyles() {
        let styles = material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._componentStyles;
        if (styles == null) {
          material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._componentStyles = styles = material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_dropdown_select$46template.styles$MaterialDropdownSelectComponent, material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialDropdownSelectComponent0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_DropdownButtonComponent_0_5] = null;
      this[_PopupSourceDirective_0_7] = null;
      this[_compView_2] = null;
      this[_appEl_2] = null;
      this[_MaterialPopupComponent_2_8] = null;
      this[__PopupRef_2_10] = null;
      this[__PopupHierarchy_2_12] = null;
      this[_appEl_4] = null;
      this[_DeferredContentDirective_4_9] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_expr_7] = null;
      this[_expr_8] = null;
      this[_expr_9] = null;
      this[_expr_11] = null;
      this[_expr_12] = null;
      this[_expr_14] = null;
      this[_expr_16] = null;
      this[_expr_17] = null;
      this[_expr_18] = null;
      this[_expr_19] = null;
      this[_expr_20] = null;
      this[_expr_21] = null;
      this[_el_2] = null;
      ViewMaterialDropdownSelectComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootEl = HtmlElementL().as(html.document[$createElement]("material-dropdown-select"));
    }).prototype = ViewMaterialDropdownSelectComponent0.prototype;
    dart.addTypeTests(ViewMaterialDropdownSelectComponent0);
    ViewMaterialDropdownSelectComponent0.prototype[_is_ViewMaterialDropdownSelectComponent0_default] = true;
    dart.addTypeCaches(ViewMaterialDropdownSelectComponent0);
    dart.setMethodSignature(ViewMaterialDropdownSelectComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialDropdownSelectComponent0.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setGetterSignature(ViewMaterialDropdownSelectComponent0, () => ({
      __proto__: dart.getGetters(ViewMaterialDropdownSelectComponent0.__proto__),
      [_PopupRef_2_10]: dart.dynamic,
      [_PopupHierarchy_2_12]: dart.dynamic
    }));
    dart.setLibraryUri(ViewMaterialDropdownSelectComponent0, L0);
    dart.setFieldSignature(ViewMaterialDropdownSelectComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialDropdownSelectComponent0.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(dropdown_button$46template.ViewDropdownButtonComponent0)),
      [_DropdownButtonComponent_0_5]: dart.fieldType(dart.legacy(dropdown_button.DropdownButtonComponent)),
      [_PopupSourceDirective_0_7]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
      [_compView_2]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
      [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_MaterialPopupComponent_2_8]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
      [__PopupRef_2_10]: dart.fieldType(dart.dynamic),
      [__PopupHierarchy_2_12]: dart.fieldType(dart.dynamic),
      [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_DeferredContentDirective_4_9]: dart.fieldType(dart.legacy(deferred_content.DeferredContentDirective)),
      [_expr_0]: dart.fieldType(dart.legacy(core.String)),
      [_expr_1]: dart.fieldType(dart.legacy(core.String)),
      [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.legacy(core.String)),
      [_expr_5]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_7]: dart.fieldType(dart.legacy(core.String)),
      [_expr_8]: dart.fieldType(dart.legacy(core.String)),
      [_expr_9]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_11]: dart.fieldType(dart.legacy(core.String)),
      [_expr_12]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_14]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_16]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_17]: dart.fieldType(dart.dynamic),
      [_expr_18]: dart.fieldType(dart.dynamic),
      [_expr_19]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_20]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_21]: dart.fieldType(dart.legacy(core.String)),
      [_el_2]: dart.fieldType(dart.legacy(html.Element))
    }));
    return ViewMaterialDropdownSelectComponent0;
  });
  material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0 = material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$();
  dart.defineLazy(material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, {
    /*material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dart.addTypeTests(material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0, _is_ViewMaterialDropdownSelectComponent0_default);
  var _AutoFocusDirective_0_5 = dart.privateName(material_dropdown_select$46template, "_AutoFocusDirective_0_5");
  var _MaterialListComponent_0_6 = dart.privateName(material_dropdown_select$46template, "_MaterialListComponent_0_6");
  var _NgIf_2_9 = dart.privateName(material_dropdown_select$46template, "_NgIf_2_9");
  var _el_0 = dart.privateName(material_dropdown_select$46template, "_el_0");
  var _handle_mouseout_0_3 = dart.privateName(material_dropdown_select$46template, "_handle_mouseout_0_3");
  const _is__ViewMaterialDropdownSelectComponent1_default = Symbol('_is__ViewMaterialDropdownSelectComponent1_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialDropdownSelectComponent1 extends app_view.AppView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        let t0;
        let _ctx = this.ctx;
        this[_compView_0] = new material_list$46template.ViewMaterialListComponent0.new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        this.updateChildClassNonHtml(this[_el_0], "options-list");
        dom_helpers.setAttribute(this[_el_0], "role", "listbox");
        this[_el_0].tabIndex = 0;
        this.addShimC(HtmlElementL().as(this[_el_0]));
        this[_AutoFocusDirective_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoFocusDirectiveL(), dart.wrapType(AutoFocusDirectiveL()), dart.fn(() => new focus.AutoFocusDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex)), null, ModalComponentL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.viewData.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView)[_PopupRef_2_10])), VoidToAutoFocusDirectiveL())) : new focus.AutoFocusDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex)), null, ModalComponentL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.viewData.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView)[_PopupRef_2_10]));
        this[_MaterialListComponent_0_6] = new material_list.MaterialListComponent.new();
        let _text_1 = dom_helpers.createText(" ");
        let _anchor_2 = dom_helpers.createAnchor();
        this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent2(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        this[_compView_0].create(this[_MaterialListComponent_0_6], JSArrayOfObjectL().of([(t0 = [this.projectedNodes[$_get](2)], (() => {
            t0[$addAll]([_text_1]);
            t0[$addAll](core.Iterable.as(this.projectedNodes[$_get](3)));
            t0[$addAll]([this[_appEl_2]]);
            t0[$addAll](core.Iterable.as(this.projectedNodes[$_get](4)));
            return t0;
          })())]));
        this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyDown')));
        this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyPress')));
        this[_el_0][$addEventListener]("keyup", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyUp')));
        this[_el_0][$addEventListener]("mouseout", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_mouseout_0_3)));
        this.init1(this[_el_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        let currVal_2 = _ctx.listAutoFocus;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_AutoFocusDirective_0_5].autoFocus = currVal_2;
          this[_expr_2] = currVal_2;
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
          this[_AutoFocusDirective_0_5].ngOnInit();
        }
        changed = false;
        if (firstCheck) {
          this[_MaterialListComponent_0_6].role = "listbox";
          changed = true;
        }
        let currVal_4 = _ctx.width;
        if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          this[_MaterialListComponent_0_6].width = currVal_4;
          changed = true;
          this[_expr_4] = currVal_4;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_NgIf_2_9].ngIf = _ctx.options != null;
        this[_appEl_2].detectChangesInNestedViews();
        if (firstCheck) {
          if (_ctx.listId != null) {
            dom_helpers.updateAttribute(this[_el_0], "id", _ctx.listId);
          }
        }
        let currVal_1 = _ctx.ariaActiveDescendant;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          dom_helpers.updateAttribute(this[_el_0], "aria-activedescendant", currVal_1);
          this[_expr_1] = currVal_1;
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_2].destroyNestedViews();
        this[_compView_0].destroyInternalState();
        this[_AutoFocusDirective_0_5].ngOnDestroy();
      }
      [_handle_mouseout_0_3]($36event) {
        let _ctx = this.ctx;
        _ctx.activeModel.activate(null);
      }
    }
    (_ViewMaterialDropdownSelectComponent1.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_AutoFocusDirective_0_5] = null;
      this[_MaterialListComponent_0_6] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_4] = null;
      this[_el_0] = null;
      _ViewMaterialDropdownSelectComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialDropdownSelectComponent1.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent1);
    _ViewMaterialDropdownSelectComponent1.prototype[_is__ViewMaterialDropdownSelectComponent1_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent1);
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent1.__proto__),
      [_handle_mouseout_0_3]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent1, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent1.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_list$46template.ViewMaterialListComponent0)),
      [_AutoFocusDirective_0_5]: dart.fieldType(dart.legacy(focus.AutoFocusDirective)),
      [_MaterialListComponent_0_6]: dart.fieldType(dart.legacy(material_list.MaterialListComponent)),
      [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(dart.legacy(html.Element))
    }));
    return _ViewMaterialDropdownSelectComponent1;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1, _is__ViewMaterialDropdownSelectComponent1_default);
  var _appEl_1 = dart.privateName(material_dropdown_select$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(material_dropdown_select$46template, "_NgIf_1_9");
  var _NgFor_2_9 = dart.privateName(material_dropdown_select$46template, "_NgFor_2_9");
  const _is__ViewMaterialDropdownSelectComponent2_default = Symbol('_is__ViewMaterialDropdownSelectComponent2_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialDropdownSelectComponent2 extends app_view.AppView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        this.updateChildClass(HtmlElementL().as(_el_0), "options-wrapper");
        this.addShimC(HtmlElementL().as(_el_0));
        let _anchor_1 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent3(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent4(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgFor_2_9] = new ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        this[_NgIf_1_9].ngIf = _ctx.showDeselectItem;
        if (firstCheck) {
          if (_ctx.trackByIndexFn != null) {
            this[_NgFor_2_9].ngForTrackBy = intLAnddynamicToLObjectL().as(_ctx.trackByIndexFn);
          }
        }
        let currVal_1 = _ctx.options.optionGroups;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_NgFor_2_9].ngForOf = currVal_1;
          this[_expr_1] = currVal_1;
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_2_9].ngDoCheck();
        }
        this[_appEl_1].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
        this[_appEl_2].destroyNestedViews();
      }
    }
    (_ViewMaterialDropdownSelectComponent2.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_appEl_2] = null;
      this[_NgFor_2_9] = null;
      this[_expr_1] = null;
      _ViewMaterialDropdownSelectComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialDropdownSelectComponent2.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent2);
    _ViewMaterialDropdownSelectComponent2.prototype[_is__ViewMaterialDropdownSelectComponent2_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent2);
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent2, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent2.__proto__),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_2_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_1]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialDropdownSelectComponent2;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2, _is__ViewMaterialDropdownSelectComponent2_default);
  var _ActiveItemDirective_0_5 = dart.privateName(material_dropdown_select$46template, "_ActiveItemDirective_0_5");
  var _MaterialSelectDropdownItemComponent_0_6 = dart.privateName(material_dropdown_select$46template, "_MaterialSelectDropdownItemComponent_0_6");
  var C4;
  var _handle_mouseenter_0_1 = dart.privateName(material_dropdown_select$46template, "_handle_mouseenter_0_1");
  const _is__ViewMaterialDropdownSelectComponent3_default = Symbol('_is__ViewMaterialDropdownSelectComponent3_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3$ = dart.generic(T => {
    class _ViewMaterialDropdownSelectComponent3 extends app_view.AppView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        let _ctx = this.ctx;
        this[_compView_0] = new (ViewMaterialSelectDropdownItemComponent0OfStringL()).new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        this.addShimC(HtmlElementL().as(this[_el_0]));
        this[_ActiveItemDirective_0_5] = new active_item_directive$46template.ActiveItemDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ActiveItemDirectiveL(), dart.wrapType(ActiveItemDirectiveL()), dart.fn(() => new active_item_directive.ActiveItemDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.viewData.parentIndex)), ModalL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalL()), this.parentView.parentView.parentView.viewData.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView)[_PopupRef_2_10])), VoidToActiveItemDirectiveL())) : new active_item_directive.ActiveItemDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.viewData.parentIndex)), ModalL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalL()), this.parentView.parentView.parentView.viewData.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView)[_PopupRef_2_10])));
        this[_MaterialSelectDropdownItemComponent_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectDropdownItemComponentLOfStringL(), dart.wrapType(MaterialSelectDropdownItemComponentL()), dart.fn(() => new (MaterialSelectDropdownItemComponentOfStringL()).new(HtmlElementL().as(this[_el_0]), null, optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.viewData.parentIndex)), IdGeneratorL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0]), VoidToMaterialSelectDropdownItemComponentLOfStringL())) : new (MaterialSelectDropdownItemComponentOfStringL()).new(HtmlElementL().as(this[_el_0]), null, optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.viewData.parentIndex)), IdGeneratorL().as(this.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0]);
        this[_compView_0].create(this[_MaterialSelectDropdownItemComponent_0_6], JSArrayOfObjectL().of([C4 || CT.C4]));
        this[_el_0][$addEventListener]("mouseenter", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_mouseenter_0_1)));
        this[_el_0][$addEventListener]("mouseleave", this.eventHandler0(EventL(), dart.bind(this[_ActiveItemDirective_0_5].instance, 'onMouseLeave')));
        let subscription_0 = this[_MaterialSelectDropdownItemComponent_0_6].trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'deselectCurrentSelection')));
        this.init(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasRendererL())) && 0 === nodeIndex) {
          return this[_MaterialSelectDropdownItemComponent_0_6];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let local_popup = optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView)[_MaterialPopupComponent_2_8];
        let currVal_1 = dart.test(local_popup.showPopup) && dart.test(_ctx.activeModel.isActive(_ctx.deselectLabel));
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_ActiveItemDirective_0_5].instance.itemActive = currVal_1;
          this[_expr_1] = currVal_1;
        }
        if (firstCheck) {
          this[_MaterialSelectDropdownItemComponent_0_6].tabbable = false;
        }
        let currVal_3 = _ctx.deselectLabel;
        if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_MaterialSelectDropdownItemComponent_0_6].value = currVal_3;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = _ctx.isDeselectItemSelected;
        if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          this[_MaterialSelectDropdownItemComponent_0_6].selected = currVal_4;
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.activeModel.id(_ctx.deselectLabel);
        if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          this[_MaterialSelectDropdownItemComponent_0_6].id = currVal_5;
          this[_expr_5] = currVal_5;
        }
        let currVal_0 = _ctx.options.optionGroups[$length] === 1;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          dom_helpers.updateClassBindingNonHtml(this[_el_0], "empty", currVal_0);
          this[_expr_0] = currVal_0;
        }
        this[_ActiveItemDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          if (firstCheck) {
            this[_ActiveItemDirective_0_5].instance.ngAfterViewInit();
          }
        }
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_ActiveItemDirective_0_5].instance.ngOnDestroy();
        this[_MaterialSelectDropdownItemComponent_0_6].ngOnDestroy();
      }
      [_handle_mouseenter_0_1]($36event) {
        let _ctx = this.ctx;
        _ctx.activeModel.activate(_ctx.deselectLabel);
        this[_ActiveItemDirective_0_5].instance.onMouseEnter();
      }
    }
    (_ViewMaterialDropdownSelectComponent3.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_ActiveItemDirective_0_5] = null;
      this[_MaterialSelectDropdownItemComponent_0_6] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_el_0] = null;
      _ViewMaterialDropdownSelectComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialDropdownSelectComponent3.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent3);
    _ViewMaterialDropdownSelectComponent3.prototype[_is__ViewMaterialDropdownSelectComponent3_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent3);
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent3.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
      [_handle_mouseenter_0_1]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent3, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent3.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(dart.legacy(core.String)))),
      [_ActiveItemDirective_0_5]: dart.fieldType(dart.legacy(active_item_directive$46template.ActiveItemDirectiveNgCd)),
      [_MaterialSelectDropdownItemComponent_0_6]: dart.fieldType(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(core.String)))),
      [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.legacy(core.String)),
      [_el_0]: dart.fieldType(dart.legacy(html.Element))
    }));
    return _ViewMaterialDropdownSelectComponent3;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3, _is__ViewMaterialDropdownSelectComponent3_default);
  const _is__ViewMaterialDropdownSelectComponent4_default = Symbol('_is__ViewMaterialDropdownSelectComponent4_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialDropdownSelectComponent4 extends app_view.AppView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        this[_el_0] = DivElementL().as(doc[$createElement]("div"));
        dom_helpers.setAttribute(this[_el_0], "group", "");
        this.addShimC(this[_el_0]);
        let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent5(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        this.init1(this[_el_0]);
      }
      detectChangesInternal() {
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), this.locals[$_get]("$implicit"));
        this[_NgIf_1_9].ngIf = dart.test(local_group.isNotEmpty) || dart.test(local_group.hasEmptyLabel);
        this[_appEl_1].detectChangesInNestedViews();
        let currVal_0 = dart.test(local_group.isEmpty) && !dart.test(local_group.hasEmptyLabel);
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          dom_helpers.updateClassBinding(this[_el_0], "empty", currVal_0);
          this[_expr_0] = currVal_0;
        }
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
      }
    }
    (_ViewMaterialDropdownSelectComponent4.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_expr_0] = null;
      this[_el_0] = null;
      _ViewMaterialDropdownSelectComponent4.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialDropdownSelectComponent4.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent4);
    _ViewMaterialDropdownSelectComponent4.prototype[_is__ViewMaterialDropdownSelectComponent4_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent4);
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent4, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent4.__proto__),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
      [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
    }));
    return _ViewMaterialDropdownSelectComponent4;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4, _is__ViewMaterialDropdownSelectComponent4_default);
  var _appEl_0 = dart.privateName(material_dropdown_select$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(material_dropdown_select$46template, "_NgIf_0_9");
  var _appEl_3 = dart.privateName(material_dropdown_select$46template, "_appEl_3");
  var _NgIf_3_9 = dart.privateName(material_dropdown_select$46template, "_NgIf_3_9");
  const _is__ViewMaterialDropdownSelectComponent5_default = Symbol('_is__ViewMaterialDropdownSelectComponent5_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialDropdownSelectComponent5 extends app_view.AppView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent6(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent7(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.createAnchor();
        this[_appEl_2] = new view_container.ViewContainer.new(2, null, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent8(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        let _anchor_3 = dom_helpers.createAnchor();
        this[_appEl_3] = new view_container.ViewContainer.new(3, null, this, _anchor_3);
        let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent10(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
        this.init(JSArrayOfObjectL().of([this[_appEl_0], this[_appEl_1], this[_appEl_2], this[_appEl_3]]), null);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), this.parentView.locals[$_get]("$implicit"));
        this[_NgIf_0_9].ngIf = dart.test(local_group.hasLabel) && !dart.test(_ctx.hasCustomLabelRenderer);
        this[_NgIf_1_9].ngIf = _ctx.hasCustomLabelRenderer;
        this[_NgIf_2_9].ngIf = local_group.isNotEmpty;
        this[_NgIf_3_9].ngIf = dart.test(local_group.isEmpty) && dart.test(local_group.hasEmptyLabel);
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_1].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
        this[_appEl_3].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_1].destroyNestedViews();
        this[_appEl_2].destroyNestedViews();
        this[_appEl_3].destroyNestedViews();
      }
    }
    (_ViewMaterialDropdownSelectComponent5.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      this[_appEl_3] = null;
      this[_NgIf_3_9] = null;
      _ViewMaterialDropdownSelectComponent5.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialDropdownSelectComponent5.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent5);
    _ViewMaterialDropdownSelectComponent5.prototype[_is__ViewMaterialDropdownSelectComponent5_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent5);
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent5, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent5.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
    }));
    return _ViewMaterialDropdownSelectComponent5;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5, _is__ViewMaterialDropdownSelectComponent5_default);
  var _textBinding_1 = dart.privateName(material_dropdown_select$46template, "_textBinding_1");
  const _is__ViewMaterialDropdownSelectComponent6_default = Symbol('_is__ViewMaterialDropdownSelectComponent6_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialDropdownSelectComponent6 extends app_view.AppView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        dom_helpers.setAttribute(_el_0, "label", "");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1].element);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), this.parentView.parentView.locals[$_get]("$implicit"));
        this[_textBinding_1].updateText(interpolate.interpolateString0(local_group.uiDisplayName));
      }
    }
    (_ViewMaterialDropdownSelectComponent6.new = function(parentView, parentIndex) {
      this[_textBinding_1] = new text_binding.TextBinding.new();
      _ViewMaterialDropdownSelectComponent6.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialDropdownSelectComponent6.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent6);
    _ViewMaterialDropdownSelectComponent6.prototype[_is__ViewMaterialDropdownSelectComponent6_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent6);
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent6, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent6, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent6.__proto__),
      [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
    }));
    return _ViewMaterialDropdownSelectComponent6;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6, _is__ViewMaterialDropdownSelectComponent6_default);
  var _DynamicComponent_0_8 = dart.privateName(material_dropdown_select$46template, "_DynamicComponent_0_8");
  const _is__ViewMaterialDropdownSelectComponent7_default = Symbol('_is__ViewMaterialDropdownSelectComponent7_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialDropdownSelectComponent7 extends app_view.AppView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        this.addShimC(_el_0);
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DynamicComponentL(), dart.wrapType(DynamicComponentL()), dart.fn(() => new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0], this[_appEl_0]), VoidToDynamicComponentL())) : new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0], this[_appEl_0]);
        this[_compView_0].create0(this[_DynamicComponent_0_8]);
        this.init1(this[_appEl_0]);
      }
      detectChangesInternal() {
        let t1, t0;
        let _ctx = this.ctx;
        let changed = false;
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), this.parentView.parentView.locals[$_get]("$implicit"));
        changed = false;
        let currVal_0 = (t0 = _ctx, t1 = local_group, t0.labelFactory(t1));
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_DynamicComponent_0_8].componentFactory = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = local_group;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_DynamicComponent_0_8].value = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        if (changed) {
          this[_DynamicComponent_0_8].ngAfterChanges();
        }
        this[_appEl_0].detectChangesInNestedViews();
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_compView_0].destroyInternalState();
        this[_DynamicComponent_0_8].ngOnDestroy();
      }
    }
    (_ViewMaterialDropdownSelectComponent7.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_appEl_0] = null;
      this[_DynamicComponent_0_8] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      _ViewMaterialDropdownSelectComponent7.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialDropdownSelectComponent7.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent7);
    _ViewMaterialDropdownSelectComponent7.prototype[_is__ViewMaterialDropdownSelectComponent7_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent7);
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent7, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent7, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent7.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(dynamic_component$46template.ViewDynamicComponent0)),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_DynamicComponent_0_8]: dart.fieldType(dart.legacy(dynamic_component.DynamicComponent)),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialDropdownSelectComponent7;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7, _is__ViewMaterialDropdownSelectComponent7_default);
  var _NgFor_0_9 = dart.privateName(material_dropdown_select$46template, "_NgFor_0_9");
  const _is__ViewMaterialDropdownSelectComponent8_default = Symbol('_is__ViewMaterialDropdownSelectComponent8_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialDropdownSelectComponent8 extends app_view.AppView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent9(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgFor_0_9] = new ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
        this.init1(this[_appEl_0]);
      }
      detectChangesInternal() {
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), this.parentView.parentView.locals[$_get]("$implicit"));
        let currVal_0 = local_group;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_NgFor_0_9].ngForOf = currVal_0;
          this[_expr_0] = currVal_0;
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
    (_ViewMaterialDropdownSelectComponent8.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgFor_0_9] = null;
      this[_expr_0] = null;
      _ViewMaterialDropdownSelectComponent8.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialDropdownSelectComponent8.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent8);
    _ViewMaterialDropdownSelectComponent8.prototype[_is__ViewMaterialDropdownSelectComponent8_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent8);
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent8, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent8, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent8.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_0_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_0]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialDropdownSelectComponent8;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8, _is__ViewMaterialDropdownSelectComponent8_default);
  var _expr_6 = dart.privateName(material_dropdown_select$46template, "_expr_6");
  var _expr_10 = dart.privateName(material_dropdown_select$46template, "_expr_10");
  var _handle_mouseenter_0_0 = dart.privateName(material_dropdown_select$46template, "_handle_mouseenter_0_0");
  const _is__ViewMaterialDropdownSelectComponent9_default = Symbol('_is__ViewMaterialDropdownSelectComponent9_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialSelectDropdownItemComponent0OfTL = () => (ViewMaterialSelectDropdownItemComponent0OfTL = dart.constFn(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(TL())))();
    var MaterialSelectDropdownItemComponentOfTL = () => (MaterialSelectDropdownItemComponentOfTL = dart.constFn(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(TL())))();
    var MaterialSelectDropdownItemComponentLOfTL = () => (MaterialSelectDropdownItemComponentLOfTL = dart.constFn(dart.legacy(MaterialSelectDropdownItemComponentOfTL())))();
    var VoidToMaterialSelectDropdownItemComponentLOfTL = () => (VoidToMaterialSelectDropdownItemComponentLOfTL = dart.constFn(dart.fnType(MaterialSelectDropdownItemComponentLOfTL(), [])))();
    var TLToComponentFactoryL = () => (TLToComponentFactoryL = dart.constFn(dart.fnType(ComponentFactoryL(), [TL()])))();
    var TLToLComponentFactoryL = () => (TLToLComponentFactoryL = dart.constFn(dart.legacy(TLToComponentFactoryL())))();
    var TLToStringL = () => (TLToStringL = dart.constFn(dart.fnType(StringL(), [TL()])))();
    var TLToLStringL = () => (TLToLStringL = dart.constFn(dart.legacy(TLToStringL())))();
    class _ViewMaterialDropdownSelectComponent9 extends app_view.AppView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectDropdownItemComponent0OfTL()).new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        this.addShimC(HtmlElementL().as(this[_el_0]));
        this[_ActiveItemDirective_0_5] = new active_item_directive$46template.ActiveItemDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ActiveItemDirectiveL(), dart.wrapType(ActiveItemDirectiveL()), dart.fn(() => new active_item_directive.ActiveItemDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), ModalL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalL()), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView.parentView.parentView.parentView)[_PopupRef_2_10])), VoidToActiveItemDirectiveL())) : new active_item_directive.ActiveItemDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), ModalL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalL()), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView.parentView.parentView.parentView)[_PopupRef_2_10])));
        this[_MaterialSelectDropdownItemComponent_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectDropdownItemComponentLOfTL(), dart.wrapType(MaterialSelectDropdownItemComponentL()), dart.fn(() => new (MaterialSelectDropdownItemComponentOfTL()).new(HtmlElementL().as(this[_el_0]), null, optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), IdGeneratorL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0]), VoidToMaterialSelectDropdownItemComponentLOfTL())) : new (MaterialSelectDropdownItemComponentOfTL()).new(HtmlElementL().as(this[_el_0]), null, optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), IdGeneratorL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0]);
        this[_compView_0].create(this[_MaterialSelectDropdownItemComponent_0_6], JSArrayOfObjectL().of([C4 || CT.C4]));
        this[_el_0][$addEventListener]("mouseenter", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_mouseenter_0_0)));
        this[_el_0][$addEventListener]("mouseleave", this.eventHandler0(EventL(), dart.bind(this[_ActiveItemDirective_0_5].instance, 'onMouseLeave')));
        this.init1(this[_el_0]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasRendererL())) && 0 === nodeIndex) {
          return this[_MaterialSelectDropdownItemComponent_0_6];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let local_popup = optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8];
        let local_item = optimizations.unsafeCast(TL(), this.locals[$_get]("$implicit"));
        let currVal_0 = dart.test(local_popup.showPopup) && dart.test(_ctx.activeModel.isActive(local_item));
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_ActiveItemDirective_0_5].instance.itemActive = currVal_0;
          this[_expr_0] = currVal_0;
        }
        if (firstCheck) {
          this[_MaterialSelectDropdownItemComponent_0_6].tabbable = false;
        }
        let currVal_1 = _ctx.isOptionDisabled(local_item);
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_MaterialSelectDropdownItemComponent_0_6].disabled = currVal_1;
          this[_expr_1] = currVal_1;
        }
        let currVal_3 = _ctx.componentRenderer;
        if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_MaterialSelectDropdownItemComponent_0_6].componentRenderer = currVal_3;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = TLToLComponentFactoryL().as(_ctx.factoryRenderer);
        if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          this[_MaterialSelectDropdownItemComponent_0_6].factoryRenderer = dynamicToLComponentFactoryL().as(currVal_4);
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.isOptionHidden(local_item);
        if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          this[_MaterialSelectDropdownItemComponent_0_6].isHidden = currVal_5;
          this[_expr_5] = currVal_5;
        }
        let currVal_6 = local_item;
        if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
          this[_MaterialSelectDropdownItemComponent_0_6].value = currVal_6;
          this[_expr_6] = currVal_6;
        }
        let currVal_7 = TLToLStringL().as(_ctx.itemRenderer);
        if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
          this[_MaterialSelectDropdownItemComponent_0_6].itemRenderer = currVal_7;
          this[_expr_7] = currVal_7;
        }
        let currVal_8 = _ctx.deselectOnActivate;
        if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
          this[_MaterialSelectDropdownItemComponent_0_6].deselectOnActivate = currVal_8;
          this[_expr_8] = currVal_8;
        }
        let currVal_9 = _ctx.selection;
        if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
          this[_MaterialSelectDropdownItemComponent_0_6].selection = currVal_9;
          this[_expr_9] = currVal_9;
        }
        let currVal_10 = _ctx.activeModel.id(local_item);
        if (dart.test(app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
          this[_MaterialSelectDropdownItemComponent_0_6].id = currVal_10;
          this[_expr_10] = currVal_10;
        }
        this[_ActiveItemDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          if (firstCheck) {
            this[_ActiveItemDirective_0_5].instance.ngAfterViewInit();
          }
        }
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_ActiveItemDirective_0_5].instance.ngOnDestroy();
        this[_MaterialSelectDropdownItemComponent_0_6].ngOnDestroy();
      }
      [_handle_mouseenter_0_0]($36event) {
        let local_item = optimizations.unsafeCast(TL(), this.locals[$_get]("$implicit"));
        let _ctx = this.ctx;
        _ctx.activeModel.activate(local_item);
        this[_ActiveItemDirective_0_5].instance.onMouseEnter();
      }
    }
    (_ViewMaterialDropdownSelectComponent9.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_ActiveItemDirective_0_5] = null;
      this[_MaterialSelectDropdownItemComponent_0_6] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_expr_6] = null;
      this[_expr_7] = null;
      this[_expr_8] = null;
      this[_expr_9] = null;
      this[_expr_10] = null;
      this[_el_0] = null;
      _ViewMaterialDropdownSelectComponent9.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialDropdownSelectComponent9.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent9);
    _ViewMaterialDropdownSelectComponent9.prototype[_is__ViewMaterialDropdownSelectComponent9_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent9);
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent9, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent9.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
      [_handle_mouseenter_0_0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent9, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent9, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent9.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(dart.legacy(T)))),
      [_ActiveItemDirective_0_5]: dart.fieldType(dart.legacy(active_item_directive$46template.ActiveItemDirectiveNgCd)),
      [_MaterialSelectDropdownItemComponent_0_6]: dart.fieldType(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))),
      [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic),
      [_expr_6]: dart.fieldType(dart.dynamic),
      [_expr_7]: dart.fieldType(dart.dynamic),
      [_expr_8]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_9]: dart.fieldType(dart.dynamic),
      [_expr_10]: dart.fieldType(dart.legacy(core.String)),
      [_el_0]: dart.fieldType(dart.legacy(html.Element))
    }));
    return _ViewMaterialDropdownSelectComponent9;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9, _is__ViewMaterialDropdownSelectComponent9_default);
  var _MaterialSelectDropdownItemComponent_0_5 = dart.privateName(material_dropdown_select$46template, "_MaterialSelectDropdownItemComponent_0_5");
  const _is__ViewMaterialDropdownSelectComponent10_default = Symbol('_is__ViewMaterialDropdownSelectComponent10_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialDropdownSelectComponent10 extends app_view.AppView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectDropdownItemComponent0OfStringL()).new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        this.addShimC(_el_0);
        this[_MaterialSelectDropdownItemComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectDropdownItemComponentLOfStringL(), dart.wrapType(MaterialSelectDropdownItemComponentL()), dart.fn(() => new (MaterialSelectDropdownItemComponentOfStringL()).new(_el_0, null, optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), IdGeneratorL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0]), VoidToMaterialSelectDropdownItemComponentLOfStringL())) : new (MaterialSelectDropdownItemComponentOfStringL()).new(_el_0, null, optimizations.unsafeCast(ViewMaterialDropdownSelectComponent0L(), this.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_2_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), IdGeneratorL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0]);
        this[_compView_0].create(this[_MaterialSelectDropdownItemComponent_0_5], JSArrayOfObjectL().of([C4 || CT.C4]));
        this.init1(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasRendererL())) && 0 === nodeIndex) {
          return this[_MaterialSelectDropdownItemComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), this.parentView.parentView.locals[$_get]("$implicit"));
        if (firstCheck) {
          this[_MaterialSelectDropdownItemComponent_0_5].disabled = true;
          this[_MaterialSelectDropdownItemComponent_0_5].tabbable = false;
        }
        let currVal_2 = local_group.emptyLabel;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_MaterialSelectDropdownItemComponent_0_5].value = currVal_2;
          this[_expr_2] = currVal_2;
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_MaterialSelectDropdownItemComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialDropdownSelectComponent10.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialSelectDropdownItemComponent_0_5] = null;
      this[_expr_2] = null;
      _ViewMaterialDropdownSelectComponent10.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialDropdownSelectComponent10.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponent10);
    _ViewMaterialDropdownSelectComponent10.prototype[_is__ViewMaterialDropdownSelectComponent10_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponent10);
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponent10, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponent10.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponent10, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponent10, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponent10.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(dart.legacy(core.String)))),
      [_MaterialSelectDropdownItemComponent_0_5]: dart.fieldType(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(core.String)))),
      [_expr_2]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialDropdownSelectComponent10;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10, _is__ViewMaterialDropdownSelectComponent10_default);
  var _MaterialDropdownSelectComponent_0_5 = dart.privateName(material_dropdown_select$46template, "_MaterialDropdownSelectComponent_0_5");
  var __ActiveItemModel_0_13 = dart.privateName(material_dropdown_select$46template, "__ActiveItemModel_0_13");
  var _ActiveItemModel_0_13 = dart.privateName(material_dropdown_select$46template, "_ActiveItemModel_0_13");
  var C5;
  const _is__ViewMaterialDropdownSelectComponentHost0_default = Symbol('_is__ViewMaterialDropdownSelectComponentHost0_default');
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialDropdownSelectComponent0OfTL = () => (ViewMaterialDropdownSelectComponent0OfTL = dart.constFn(material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$(TL())))();
    var MaterialDropdownSelectComponentOfTL = () => (MaterialDropdownSelectComponentOfTL = dart.constFn(material_dropdown_select.MaterialDropdownSelectComponent$(TL())))();
    var MaterialDropdownSelectComponentLOfTL = () => (MaterialDropdownSelectComponentLOfTL = dart.constFn(dart.legacy(MaterialDropdownSelectComponentOfTL())))();
    var VoidToMaterialDropdownSelectComponentLOfTL = () => (VoidToMaterialDropdownSelectComponentLOfTL = dart.constFn(dart.fnType(MaterialDropdownSelectComponentLOfTL(), [])))();
    var ComponentRefOfMaterialDropdownSelectComponentLOfTL = () => (ComponentRefOfMaterialDropdownSelectComponentLOfTL = dart.constFn(component_factory.ComponentRef$(MaterialDropdownSelectComponentLOfTL())))();
    class _ViewMaterialDropdownSelectComponentHost0 extends app_view.AppView$(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))) {
      get [_ActiveItemModel_0_13]() {
        if (this[__ActiveItemModel_0_13] == null) {
          this[__ActiveItemModel_0_13] = material_dropdown_select.fromDropdown(this[_MaterialDropdownSelectComponent_0_5]);
        }
        return this[__ActiveItemModel_0_13];
      }
      build() {
        this[_compView_0] = new (ViewMaterialDropdownSelectComponent0OfTL()).new(this, 0);
        this.rootEl = this[_compView_0].rootEl;
        this[_MaterialDropdownSelectComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialDropdownSelectComponentLOfTL(), dart.wrapType(MaterialDropdownSelectComponentL()), dart.fn(() => new (MaterialDropdownSelectComponentOfTL()).new(IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.viewData.parentIndex)), PopupSizeProviderL().as(this.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), boolL().as(this.injectorGetOptional(C5 || CT.C5, this.viewData.parentIndex)), null, null, this[_compView_0], this.rootEl), VoidToMaterialDropdownSelectComponentLOfTL())) : new (MaterialDropdownSelectComponentOfTL()).new(IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.viewData.parentIndex)), PopupSizeProviderL().as(this.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), boolL().as(this.injectorGetOptional(C5 || CT.C5, this.viewData.parentIndex)), null, null, this[_compView_0], this.rootEl);
        this[_compView_0].create(this[_MaterialDropdownSelectComponent_0_5], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialDropdownSelectComponentLOfTL()).new(0, this, this.rootEl, this[_MaterialDropdownSelectComponent_0_5]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (0 === nodeIndex) {
          if (token === dart.wrapType(MaterialDropdownSelectComponentL()) || token === dart.wrapType(DropdownHandleL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(SelectionContainerL()) || token === dart.wrapType(PopupSizeProviderL()) || token === dart.wrapType(ActivationHandlerL())) {
            return this[_MaterialDropdownSelectComponent_0_5];
          }
          if (token === dart.wrapType(ActiveItemModelL())) {
            return this[_ActiveItemModel_0_13];
          }
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_MaterialDropdownSelectComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialDropdownSelectComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialDropdownSelectComponent_0_5] = null;
      this[__ActiveItemModel_0_13] = null;
      _ViewMaterialDropdownSelectComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
      ;
    }).prototype = _ViewMaterialDropdownSelectComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialDropdownSelectComponentHost0);
    _ViewMaterialDropdownSelectComponentHost0.prototype[_is__ViewMaterialDropdownSelectComponentHost0_default] = true;
    dart.addTypeCaches(_ViewMaterialDropdownSelectComponentHost0);
    dart.setMethodSignature(_ViewMaterialDropdownSelectComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialDropdownSelectComponentHost0.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setGetterSignature(_ViewMaterialDropdownSelectComponentHost0, () => ({
      __proto__: dart.getGetters(_ViewMaterialDropdownSelectComponentHost0.__proto__),
      [_ActiveItemModel_0_13]: dart.legacy(active_item.ActiveItemModel)
    }));
    dart.setLibraryUri(_ViewMaterialDropdownSelectComponentHost0, L0);
    dart.setFieldSignature(_ViewMaterialDropdownSelectComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialDropdownSelectComponentHost0.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$(dart.legacy(T)))),
      [_MaterialDropdownSelectComponent_0_5]: dart.fieldType(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(T)))),
      [__ActiveItemModel_0_13]: dart.fieldType(dart.legacy(active_item.ActiveItemModel))
    }));
    return _ViewMaterialDropdownSelectComponentHost0;
  });
  material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0 = material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0$();
  dart.addTypeTests(material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0, _is__ViewMaterialDropdownSelectComponentHost0_default);
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent1 = function viewFactory_MaterialDropdownSelectComponent1(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent1$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent2 = function viewFactory_MaterialDropdownSelectComponent2(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent2$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent3 = function viewFactory_MaterialDropdownSelectComponent3(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent3$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent4 = function viewFactory_MaterialDropdownSelectComponent4(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent4$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent5 = function viewFactory_MaterialDropdownSelectComponent5(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent5$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent6 = function viewFactory_MaterialDropdownSelectComponent6(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent6$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent7 = function viewFactory_MaterialDropdownSelectComponent7(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent7$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent8 = function viewFactory_MaterialDropdownSelectComponent8(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent8$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent9 = function viewFactory_MaterialDropdownSelectComponent9(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent9$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponent10 = function viewFactory_MaterialDropdownSelectComponent10(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponent10$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.viewFactory_MaterialDropdownSelectComponentHost0 = function viewFactory_MaterialDropdownSelectComponentHost0(T, parentView, parentIndex) {
    return new (material_dropdown_select$46template._ViewMaterialDropdownSelectComponentHost0$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_dropdown_select$46template.initReflector = function initReflector() {
    if (dart.test(material_dropdown_select$46template._visited)) {
      return;
    }
    material_dropdown_select$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialDropdownSelectComponentL()), material_dropdown_select$46template.MaterialDropdownSelectComponentNgFactory);
    angular$46template.initReflector();
    rtl_annotation$46template.initReflector();
    deferred_content$46template.initReflector();
    deferred_content_aware$46template.initReflector();
    dynamic_component$46template.initReflector();
    focus$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    has_disabled$46template.initReflector();
    alignment$46template.initReflector();
    popup$46template.initReflector();
    material_list$46template.initReflector();
    material_popup$46template.initReflector();
    activation_handler$46template.initReflector();
    dropdown_button$46template.initReflector();
    material_select_base$46template.initReflector();
    material_select_dropdown_item$46template.initReflector();
    shift_click_selection$46template.initReflector();
    button_wrapper$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    selection_input_adapter$46template.initReflector();
    track_layout_changes$46template.initReflector();
    active_item$46template.initReflector();
    active_item_directive$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    select$46template.initReflector();
    selection_container$46template.initReflector();
    selection_model$46template.initReflector();
    selection_options$46template.initReflector();
    has_factory$46template.initReflector();
    template_support$46template.initReflector();
    css$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.copyProperties(material_dropdown_select$46template, {
    get MaterialDropdownSelectComponentNgFactory() {
      return material_dropdown_select$46template._MaterialDropdownSelectComponentNgFactory;
    }
  });
  var C8;
  var C7;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C6;
  dart.defineLazy(material_dropdown_select$46template, {
    /*material_dropdown_select$46template.styles$MaterialDropdownSelectComponent*/get styles$MaterialDropdownSelectComponent() {
      return [material_dropdown_select$46scss$46css$46shim.styles];
    },
    /*material_dropdown_select$46template._MaterialDropdownSelectComponentNgFactory*/get _MaterialDropdownSelectComponentNgFactory() {
      return C6 || CT.C6;
    },
    /*material_dropdown_select$46template.styles$MaterialDropdownSelectComponentHost*/get styles$MaterialDropdownSelectComponentHost() {
      return C4 || CT.C4;
    },
    /*material_dropdown_select$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_select/material_dropdown_select.template", {
    "package:angular_components/material_select/material_dropdown_select.template.dart": material_dropdown_select$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_dropdown_select.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwII,YAAK,AAAgB,yBAAG;AACsD,UAA3E,wBAAkB,mCAA4B;;AAEjD,cAAO;MACT;;AAGE,YAAK,AAAsB,+BAAG;AAC+C,UAA1E,8BAAwB,4BAAqB;;AAEhD,cAAO;MACT;;AAGE,yBAAiB,2BAAY,+EAA+E;MAC9G;;;AAIQ,mBAAO;AACP,sBAAU;AACW,+BAAmB,kBAAa,OAAO;AACP,QAA3D,oBAAsB,gEAA6B,MAAM;AACnD,oBAAQ,AAAY;AACI,QAA9B,AAAiB,gBAAD,UAAQ,KAAK;AACmC,QAAhE,yBAAsB,KAAK,EAAE,2BAA2B;AACT,QAA/C,yBAAsB,KAAK,EAAE,eAAe;AACQ,QAApD,yBAAsB,KAAK,EAAE,aAAa;AAC3B,QAAf,cAAS,KAAK;AACkD,QAAhE,qCAAuC;AAK2M,QAJlP,4CAAsC,2BAChC,kDAAmC,wCAAsB,cACxC,gFAAqB,AAAW,4BAAqB,yCAAuB,AAAS,6BAAc,KAAK,2BAAE,AAAW,oCAA6B,sCAAoB,AAAS,6BAAc,oCAA8B,4CAEpO,gFAAqB,AAAW,4BAAqB,yCAAuB,AAAS,6BAAc,KAAK,2BAAE,AAAW,oCAA6B,sCAAoB,AAAS,6BAAc,oCAA8B;AACnO,sBAAU,uBAAoB;AAGlC,QAFF,AAAY,yBAAO,oCAA8B,6BACtC,CAAC,OAAO,GAAR;AAAW,yCAAO,AAAc,2BAAC;;;AAEc,QAA1D,oBAAsB,8DAA4B,MAAM;AAC9B,QAA1B,cAAQ,AAAY;AACU,QAA9B,AAAiB,gBAAD,UAAQ;AACmC,QAA3D,yBAAsB,aAAO,2BAA2B;AACzC,QAAf,gCAAS;AACqC,QAA9C,iBAAW,qCAAc,GAAG,MAAM,MAAM;AAK84B,QAJt7B,8CAAwC,2BAClC,oDAAmC,0CAAwB,cAC1C,mEAAuB,AAAW,oCAA6B,kCAAgB,AAAS,0DAAc,AAAW,oCAA4B,0CAAwB,AAAS,6BAAc,mBAAM,AAAW,4BAAqB,0BAAQ,AAAS,kDAAc,AAAW,4BAAqB,kCAAgB,AAAS,8CAAc,AAAW,4BAAqB,8BAAY,AAAS,4CAAc,AAAW,4BAAqB,4BAAU,AAAS,2DAAc,AAAW,yCAAkG,AAAS,wCAAc,AAAW,yCAA0E,AAAS,uCAAc,AAAW,yCAA8E,AAAS,qDAAc,AAAW,oCAA6B,qCAAmB,AAAS,6BAAc,mBAAa,gBAAU,+BAAW,mDAEz6B,mEAAuB,AAAW,oCAA6B,kCAAgB,AAAS,0DAAc,AAAW,oCAA4B,0CAAwB,AAAS,6BAAc,mBAAM,AAAW,4BAAqB,0BAAQ,AAAS,kDAAc,AAAW,4BAAqB,kCAAgB,AAAS,8CAAc,AAAW,4BAAqB,8BAAY,AAAS,4CAAc,AAAW,4BAAqB,4BAAU,AAAS,2DAAc,AAAW,yCAAkG,AAAS,wCAAc,AAAW,yCAA0E,AAAS,uCAAc,AAAW,yCAA8E,AAAS,qDAAc,AAAW,oCAA6B,qCAAmB,AAAS,6BAAc,mBAAa,gBAAU,+BAAW;AACx6B,kBAAe;AACf,oBAAQ,AAAI,GAAD,iBAAe;AACU,QAA1C,yBAAsB,KAAK,EAAE,UAAU;AACxB,QAAf,gCAAS,KAAK;AACG,QAAjB,aAAQ,KAAK,EAAE;AACT,wBAAY;AAC6B,QAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,+BAAmB,iCAAY,gBAAU,SAAC,YAAY,gBACzD,uFAAgD,UAAU,EAAE,WAAW;AAEyC,QAAzH,sCAAwC,kDAAyB,gBAAU,gBAAgB,EAAE;AACvF,oBAAQ,AAAI,GAAD,iBAAe;AACU,QAA1C,yBAAsB,KAAK,EAAE,UAAU;AACxB,QAAf,gCAAS,KAAK;AACG,QAAjB,aAAQ,KAAK,EAAE;AAKb,QAJF,AAAY,yBAAO,mCAA6B,uBAC9C,wBAAC,KAAK,IACN,8BAAC,kBACD,wBAAC,KAAK;AAEwD,QAAhE,AAAM,KAAD,oBAAkB,WAAW,+CAAmB,UAAL,IAAI;AACc,QAAlE,AAAM,KAAD,oBAAkB,YAAY,+CAAmB,UAAL,IAAI;AAC/C,6BAAiB,AAA6B,AAAQ,kDAAO,iDAAmB,UAAL,IAAI;AAC/E,6BAAiB,AAA6B,AAAO,iDAAO,iDAAmB,UAAL,IAAI;AAC9E,6BAAiB,AAA6B,AAAQ,kDAAO,2CAAmB,UAAL,IAAI;AAC/E,6BAAiB,AAA4B,AAAU,mDAAO,qCAAmB,UAAL,IAAI;AACtB,QAAhE,AAAM,KAAD,oBAAkB,WAAW,+CAAmB,UAAL,IAAI;AACc,QAAlE,AAAM,KAAD,oBAAkB,YAAY,+CAAmB,UAAL,IAAI;AACO,QAA5D,AAAM,KAAD,oBAAkB,SAAS,+CAAmB,UAAL,IAAI;AACc,QAAhE,AAAM,KAAD,oBAAkB,WAAW,+CAAmB,UAAL,IAAI;AACc,QAAlE,AAAM,KAAD,oBAAkB,YAAY,+CAAmB,UAAL,IAAI;AACO,QAA5D,AAAM,KAAD,oBAAkB,SAAS,+CAAmB,UAAL,IAAI;AACA,QAAlD,AAAK,IAAD,kBAAkB;AAC0D,QAAhF,uBAAe,yCAAC,cAAc,EAAE,cAAc,EAAE,cAAc,EAAE,cAAc;MAChF;0BAGoC,OAAW,WAAmB;AAChE,aAAM,AAAU,KAAK,KAAW,+BAAc,AAAU,KAAK,KAAW,kCAA4B,aAAV,SAAS,KAAI;AACrG,gBAAO;;AAET,YAAM,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI;AACrC,cAAM,AAAU,KAAK,KAAU,4CAA2B,AAAU,KAAK,KAAW,0CAA0B,AAAU,KAAK,KAAW;AACtI,kBAAO;;AAET,cAAI,AAAU,KAAK,KAAW;AAC5B,kBAAO;;AAET,cAAI,AAAU,KAAK,KAAW;AAC5B,kBAAO;;;AAGX,cAAO,eAAc;MACvB;;AAIQ,mBAAO;AACR,sBAAU;AACV,yBAAmB,AAAQ,iBAAG;AACA,2BAAe;AACnC,QAAf,UAAU;AACV,YAAI,UAAU;AACsC,UAAlD,AAA6B,+CAAY;AAC3B,UAAd,UAAU;AACV,cAAe,AAAK,IAAD,mBAAiB;AACqB,YAAvD,AAA6B,0CAAO,AAAK,IAAD;AAC1B,YAAd,UAAU;;;AAGR,wBAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AACS,UAAnD,AAA6B,gDAAa,SAAS;AACrC,UAAd,UAAU;AACS,UAAnB,gBAAU,SAAS;;AAEf,wBAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AACc,UAAxD,AAA6B,qDAAkB,SAAS;AAC1C,UAAd,UAAU;AACS,UAAnB,gBAAU,SAAS;;AAEf,wBAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AACO,UAAjD,AAA6B,8CAAW,SAAS;AACnC,UAAd,UAAU;AACS,UAAnB,gBAAU,SAAS;;AAEf,wBAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AACG,UAA7C,AAA6B,0CAAO,SAAS;AAC/B,UAAd,UAAU;AACS,UAAnB,gBAAU,SAAS;;AAEf,wBAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AACO,UAAjD,AAA6B,8CAAW,SAAS;AACnC,UAAd,UAAU;AACS,UAAnB,gBAAU,SAAS;;AAEf,wBAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AACK,UAA/C,AAA6B,4CAAS,SAAS;AACjC,UAAd,UAAU;AACS,UAAnB,gBAAU,SAAS;;AAEf,wBAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AACI,UAA9C,AAA6B,2CAAQ,SAAS;AAChC,UAAd,UAAU;AACS,UAAnB,gBAAU,SAAS;;AAEf,kCAAa,AAAK,IAAD,YAAW,AAAK,IAAD,UAAU;AAChD,sBAAI,4BAAsB,eAAS,SAAS;AACO,UAAjD,AAA6B,8CAAW,SAAS;AACnC,UAAd,UAAU;AACS,UAAnB,gBAAU,SAAS;;AAEf,wBAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AACW,UAArD,AAA6B,kDAAe,SAAS;AACvC,UAAd,UAAU;AACS,UAAnB,gBAAU,SAAS;;AAEf,yBAAa,AAAK,IAAD;AACvB,sBAAI,4BAAsB,gBAAU,UAAU;AACY,UAAxD,AAA6B,oDAAiB,UAAU;AAC1C,UAAd,UAAU;AACW,UAArB,iBAAW,UAAU;;AAEjB,yBAAa,AAAK,IAAD;AACvB,sBAAI,4BAAsB,gBAAU,UAAU;AACc,UAA1D,AAA6B,sDAAmB,UAAU;AAC5C,UAAd,UAAU;AACW,UAArB,iBAAW,UAAU;;AAEvB,YAAI,OAAO;AACoB,UAA7B,AAAY;;AAEd,uBAA6B,+CAAmB,UAAU;AACjB,UAAvC,AAA6B;;AAEhB,QAAf,UAAU;AACV,YAAI,UAAU;AAC8C,UAA1D,AAA4B,4DAA0B;AACxC,UAAd,UAAU;;AAEN,yBAAa,AAAK,IAAD;AACvB,sBAAI,4BAAsB,gBAAU,UAAU;AACQ,UAApD,AAA4B,gDAAc,UAAU;AACtC,UAAd,UAAU;AACW,UAArB,iBAAW,UAAU;;AAEjB,yBAAa,AAAK,IAAD;AACvB,sBAAI,4BAAsB,gBAAU,UAAU;AACgB,UAA5D,AAA4B,wDAAsB,UAAU;AAC9C,UAAd,UAAU;AACW,UAArB,iBAAW,UAAU;;AAEjB,yBAAa,AAAK,IAAD;AACvB,sBAAI,4BAAsB,gBAAU,UAAU;AACe,UAA3D,AAA4B,uDAAqB,UAAU;AAC7C,UAAd,UAAU;AACW,UAArB,iBAAW,UAAU;;AAEjB,yBAAa,YAAY;AAC/B,sBAAI,4BAAsB,gBAAU,UAAU;AACG,UAA/C,AAA4B,2CAAS,UAAU;AACjC,UAAd,UAAU;AACW,UAArB,iBAAW,UAAU;;AAEjB,yBAAa,AAAK,IAAD;AACvB,sBAAI,4BAAsB,gBAAU,UAAU;AACe,UAA3D,AAA4B,uDAAqB,UAAU;AAC7C,UAAd,UAAU;AACW,UAArB,iBAAW,UAAU;;AAEjB,yBAAa,AAAK,IAAD;AACvB,sBAAI,4BAAsB,gBAAU,UAAU;AACI,UAAhD,AAA4B,4CAAU,UAAU;AAClC,UAAd,UAAU;AACW,UAArB,iBAAW,UAAU;;AAEjB,yBAAa,AAAK,IAAD;AACvB,sBAAI,4BAAsB,gBAAU,UAAU;AACE,UAA9C,AAA4B,0CAAQ,UAAU;AAChC,UAAd,UAAU;AACW,UAArB,iBAAW,UAAU;;AAEvB,YAAI,OAAO;AACoB,UAA7B,AAAY;;AAEd,YAAI,UAAU;AAC6C,UAAxD,AAA8B,yDAAqB;;AAEjB,QAArC,AAAS;AAC4B,QAArC,AAAS;AACT,YAAI,UAAU;AACZ,cAAe,AAAK,IAAD,mBAAiB;AAC6B,YAA/D,AAAY,0CAAwB,aAAO,AAAK,IAAD;;;AAGV,QAAzC,AAAY,oCAAkB,UAAU;AACb,QAA3B,AAAY;AACe,QAA3B,AAAY;AACZ,uBAA4B;AAC1B,cAAI,UAAU;AAC+B,YAA3C,AAA0B;AACmB,YAA7C,AAA4B;;;MAGlC;;AAI+B,QAA7B,AAAS;AACoB,QAA7B,AAAS;AACyB,QAAlC,AAAY;AACsB,QAAlC,AAAY;AAC2B,QAAvC,AAA0B;AACiB,QAA3C,AAA8B;AACW,QAAzC,AAA4B;MAC9B;;AAIM,qBAAS;AACb,YAAI,AAAU,MAAM,IAAE;AAC4H,UAA/I,4FAAoB,SAAU,4FAA4C,2CAAO,4EAAwC;;AAEpG,QAAxB,uBAAkB,MAAM;MAC1B;;yDA9RsD,YAAgB;MA9BjC;MACL;MACH;MACO;MACtB;MACiB;MACvB;MACA;MACM;MACmB;MAC1B;MACA;MACF;MACD;MACG;MACF;MACE;MACA;MACF;MACE;MACF;MACA;MACA;MACD;MACA;MACC;MACA;MACE;MACU;AAEoE,oEAAwB,8BAAW,UAAU,EAAE,WAAW;AACxH,MAArB;AACoE,oBAApE,kBAAkB,AAAS,8BAAc;IAC3C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAJgC,yFAAgB;;;;;;;;;;;;;;;;;AAsTxC,mBAAO;AAC6C,QAA1D,oBAAuB,4DAA2B,MAAM;AAC9B,QAA1B,cAAQ,AAAY;AAC+B,QAAnD,AAAK,6BAAwB,aAAO;AACW,QAA/C,yBAAsB,aAAO,QAAQ;AACnB,QAAlB,AAAM,uBAAW;AACF,QAAf,gCAAS;AAK0T,QAJnU,0CAAoC,2BAC9B,gDAAoC,sCAAoB,cACtC,mDAAmB,+BAAO,AAAW,AAAW,uCAAqB,8BAAY,AAAW,AAAS,wCAAc,2BAAM,AAAW,AAAW,+CAA6B,kCAAgB,AAAW,AAAS,uDAAc,AAAsE,kEAAZ,oEAEjS,mDAAmB,+BAAO,AAAW,AAAW,uCAAqB,8BAAY,AAAW,AAAS,wCAAc,2BAAM,AAAW,AAAW,+CAA6B,kCAAgB,AAAW,AAAS,uDAAc,AAAsE,kEAAZ;AAC1O,QAA7D,mCAAsC;AAChC,sBAAU,uBAAoB;AAC9B,wBAAY;AAC6B,QAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,+BAAmB,iCAAY,gBAAU,SAAC,YAAY,gBACzD,uFAAgD,UAAU,EAAE,WAAW;AAEpC,QAA5C,kBAAY,mBAAK,gBAAU,gBAAgB;AAGzC,QAFF,AAAY,yBAAO,kCAA4B,6BACpC,CAAC,AAAc,2BAAC,KAAhB;AAAqB,wBAAO,CAAC,OAAO;AAAI,yCAAO,AAAc,2BAAC;AAAK,wBAAO,CAAC;AAAY,yCAAO,AAAc,2BAAC;;;AAExD,QAAhE,AAAM,+BAAiB,WAAW,+CAAmB,UAAL,IAAI;AACc,QAAlE,AAAM,+BAAiB,YAAY,+CAAmB,UAAL,IAAI;AACO,QAA5D,AAAM,+BAAiB,SAAS,+CAAmB,UAAL,IAAI;AACqB,QAAvE,AAAM,+BAAiB,YAAY,iDAAc;AACrC,QAAZ,WAAM;MACR;;AAIQ,mBAAO;AACR,sBAAU;AACV,yBAAmB,AAAQ,iBAAG;AAC7B,wBAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AACG,UAA7C,AAAwB,0CAAY,SAAS;AAC1B,UAAnB,gBAAU,SAAS;;AAErB,uBAA6B,+CAAmB,UAAU;AACtB,UAAlC,AAAwB;;AAEX,QAAf,UAAU;AACV,YAAI,UAAU;AAC+B,UAA3C,AAA2B,wCAAO;AACpB,UAAd,UAAU;;AAEN,wBAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AACE,UAA5C,AAA2B,yCAAQ,SAAS;AAC9B,UAAd,UAAU;AACS,UAAnB,gBAAU,SAAS;;AAErB,YAAI,OAAO;AACoB,UAA7B,AAAY;;AAEyB,QAAvC,AAAU,uBAAQ,AAAK,AAAQ,IAAT,YAAY;AACG,QAArC,AAAS;AACT,YAAI,UAAU;AACZ,cAAe,AAAK,IAAD,WAAS;AACwB,YAAlD,4BAAyB,aAAO,MAAM,AAAK,IAAD;;;AAGxC,wBAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AACyB,UAAnE,4BAAyB,aAAO,yBAAyB,SAAS;AAC/C,UAAnB,gBAAU,SAAS;;AAEoB,QAAzC,AAAY,oCAAkB,UAAU;AACb,QAA3B,AAAY;MACd;;AAI+B,QAA7B,AAAS;AACyB,QAAlC,AAAY;AACyB,QAArC,AAAwB;MAC1B;6BAE0B;AAClB,mBAAO;AACkB,QAA/B,AAAK,AAAY,IAAb,sBAAsB;MAC5B;;0DAxFuD,YAAgB;MATnC;MACR;MACG;MACjB;MACT;MACD;MACC;MACD;MACa;AACqE,qEAAwB,6BAAU,UAAU,EAAE,WAAW;AACxH,MAArB;IACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwGQ,kBAAe;AACf,oBAAQ,AAAI,GAAD,iBAAe;AACe,QAA/C,AAAK,wCAAiB,KAAK,GAAE;AACd,QAAf,gCAAS,KAAK;AACR,wBAAY,yBAAsB,KAAK;AACE,QAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,+BAAmB,iCAAY,gBAAU,SAAC,YAAY,gBACzD,uFAAgD,UAAU,EAAE,WAAW;AAEpC,QAA5C,kBAAY,mBAAK,gBAAU,gBAAgB;AACrC,wBAAY,yBAAsB,KAAK;AACE,QAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,+BAAmB,iCAAY,gBAAU,SAAC,YAAY,gBACzD,uFAAgD,UAAU,EAAE,WAAW;AAEzB,QAAvD,mBAAsB,qBAAM,gBAAU,gBAAgB;AAC1C,QAAZ,WAAM,KAAK;MACb;;AAIQ,mBAAO;AACR,yBAAmB,AAAQ,iBAAG;AACG,QAAtC,AAAU,uBAAO,AAAK,IAAD;AACrB,YAAI,UAAU;AACZ,cAAe,AAAK,IAAD,mBAAiB;AACa,YAA9C,AAAW,gCAAA,8BAAe,AAAK,IAAD;;;AAG7B,wBAAY,AAAK,AAAQ,IAAT;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AACZ,UAA9B,AAAW,2BAAU,SAAS;AACX,UAAnB,gBAAU,SAAS;;AAErB,uBAA4B;AACJ,UAAtB,AAAW;;AAEwB,QAArC,AAAS;AAC4B,QAArC,AAAS;MACX;;AAI+B,QAA7B,AAAS;AACoB,QAA7B,AAAS;MACX;;0DAlDuD,YAAgB;MALzD;MACT;MACS;MACC;MACX;AACkF,qEAAwB,6BAAU,UAAU,EAAE,WAAW;AACxH,MAArB;IACF;;;;;;;;;;;;;;;;;;;;;;;;;AAsEQ,mBAAO;AAC2D,QAAxE,oBAAuB,8DAAyC,MAAM;AAC5C,QAA1B,cAAQ,AAAY;AACL,QAAf,gCAAS;AAK2Z,QAJpa,iCAAoC,2EAAkC,2BAChE,iDAAoC,uCAAqB,cACvC,oEAAoB,+BAAO,AAAW,AAAW,AAAW,AAAW,6DAAqB,8BAAY,AAAW,AAAW,AAAW,AAAS,0EAAc,AAAW,AAAW,AAAW,AAAW,qEAA6B,yBAAO,AAAW,AAAW,AAAW,AAAS,6EAAc,AAA4F,kEAAlC,AAAW,AAAW,2FAEjY,oEAAoB,+BAAO,AAAW,AAAW,AAAW,AAAW,6DAAqB,8BAAY,AAAW,AAAW,AAAW,AAAS,0EAAc,AAAW,AAAW,AAAW,AAAW,qEAA6B,yBAAO,AAAW,AAAW,AAAW,AAAS,6EAAc,AAA4F,kEAAlC,AAAW,AAAW;AAKiG,QAJxe,2DAAqD,2BAC/C,0EAAoC,uDAAqC,cACvD,2EAAoC,cAAO,MAAM,AAA4F,kEAAlC,AAAW,AAAW,6FAAyC,AAAW,AAAW,AAAW,AAAW,qEAA6B,qCAAmB,AAAW,AAAW,AAAW,AAAS,gFAAc,AAAW,AAAW,AAAW,AAAW,qEAA6B,+BAAa,AAAW,AAAW,AAAW,AAAS,8DAAc,8EAErd,2EAAoC,cAAO,MAAM,AAA4F,kEAAlC,AAAW,AAAW,6FAAyC,AAAW,AAAW,AAAW,AAAW,qEAA6B,qCAAmB,AAAW,AAAW,AAAW,AAAS,gFAAc,AAAW,AAAW,AAAW,AAAW,qEAA6B,+BAAa,AAAW,AAAW,AAAW,AAAS,8DAAc;AACnZ,QAAxE,AAAY,yBAAO,gDAA0C;AACc,QAA3E,AAAM,+BAAiB,cAAc,iDAAc;AACgD,QAAnG,AAAM,+BAAiB,cAAc,6BAAgD,UAAlC,AAAyB;AACtE,6BAAiB,AAAyC,AAAQ,8DAAO,+BAAmB,UAAL,IAAI;AAClE,QAA/B,UAAK,uBAAC,eAAQ,yCAAC,cAAc;MAC/B;0BAGoC,OAAW,WAAmB;AAChE,aAAM,AAAU,KAAK,KAAW,mCAAkB,AAAU,KAAK,KAAW,kCAAkB,AAAE,MAAG,SAAS;AAC1G,gBAAO;;AAET,cAAO,eAAc;MACvB;;AAIQ,mBAAO;AACR,yBAAmB,AAAQ,iBAAG;AAC7B,0BAAc,AAA4F,kEAAlC,AAAW,AAAW;AAC9F,wBAAmC,UAAtB,AAAY,WAAD,yBAAc,AAAK,AAAY,IAAb,sBAAsB,AAAK,IAAD;AAC1E,sBAAI,4BAAsB,eAAS,SAAS;AACc,UAAxD,AAAyB,AAAS,qDAAa,SAAS;AACrC,UAAnB,gBAAU,SAAS;;AAErB,YAAI,UAAU;AAC+C,UAA1D,AAAyC,0DAAW;;AAEjD,wBAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AACgB,UAA1D,AAAyC,uDAAQ,SAAS;AACvC,UAAnB,gBAAU,SAAS;;AAEf,wBAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AACmB,UAA7D,AAAyC,0DAAW,SAAS;AAC1C,UAAnB,gBAAU,SAAS;;AAEf,wBAAY,AAAK,AAAY,IAAb,gBAAgB,AAAK,IAAD;AAC1C,sBAAI,4BAAsB,eAAS,SAAS;AACa,UAAvD,AAAyC,oDAAK,SAAS;AACpC,UAAnB,gBAAU,SAAS;;AAEf,wBAAa,AAAK,AAAQ,AAAa,AAAO,IAA7B,mCAAgC;AACvD,sBAAI,4BAAsB,eAAS,SAAS;AACmB,UAA7D,sCAAmC,aAAO,SAAS,SAAS;AACzC,UAAnB,gBAAU,SAAS;;AAEyC,QAA9D,AAAyB,iDAAkB,mBAAa;AACf,QAAzC,AAAY,oCAAkB,UAAU;AACb,QAA3B,AAAY;AACZ,uBAA4B;AAC1B,cAAI,UAAU;AACuC,YAAnD,AAAyB,AAAS;;;MAGxC;;AAIoC,QAAlC,AAAY;AACmC,QAA/C,AAAyB,AAAS;AACoB,QAAtD,AAAyC;MAC3C;+BAE4B;AACpB,mBAAO;AACgC,QAA7C,AAAK,AAAY,IAAb,sBAAsB,AAAK,IAAD;AACkB,QAAhD,AAAyB,AAAS;MACpC;;0DAxFuD,YAAgB;MATb;MACzB;MACoB;MAChD;MACA;MACD;MACA;MACG;MACU;AACqE,qEAAwB,6BAAU,UAAU,EAAE,WAAW;AACxH,MAArB;IACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuGQ,kBAAe;AACW,sBAAhC,iBAAQ,AAAI,GAAD,iBAAe;AACe,QAAzC,yBAAsB,aAAO,SAAS;AACvB,QAAf,cAAS;AACH,wBAAY,yBAAsB;AACO,QAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,+BAAmB,iCAAY,gBAAU,SAAC,YAAY,gBACzD,uFAAgD,UAAU,EAAE,WAAW;AAEpC,QAA5C,kBAAY,mBAAK,gBAAU,gBAAgB;AAC/B,QAAZ,WAAM;MACR;;AAIQ,0BAAc,6CAA6C,AAAM,mBAAC;AACF,QAAtE,AAAU,uBAA+B,UAAvB,AAAY,WAAD,0BAAe,AAAY,WAAD;AAClB,QAArC,AAAS;AACH,wBAAiC,UAApB,AAAY,WAAD,wBAAc,AAAY,WAAD;AACvD,sBAAI,4BAAsB,eAAS,SAAS;AACY,UAAtD,+BAA4B,aAAO,SAAS,SAAS;AAClC,UAAnB,gBAAU,SAAS;;MAEvB;;AAI+B,QAA7B,AAAS;MACX;;0DAjCuD,YAAgB;MAJzD;MACT;MACA;MACe;AACkE,qEAAwB,6BAAU,UAAU,EAAE,WAAW;AACxH,MAArB;IACF;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoDQ,wBAAY;AACgC,QAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AACrC,+BAAmB,iCAAY,gBAAU,SAAC,YAAY,gBACzD,uFAAgD,UAAU,EAAE,WAAW;AAEpC,QAA5C,kBAAY,mBAAK,gBAAU,gBAAgB;AACrC,wBAAY;AACgC,QAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AACrC,+BAAmB,iCAAY,gBAAU,SAAC,YAAY,gBACzD,uFAAgD,UAAU,EAAE,WAAW;AAEpC,QAA5C,kBAAY,mBAAK,gBAAU,gBAAgB;AACrC,wBAAY;AACgC,QAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AACrC,+BAAmB,iCAAY,gBAAU,SAAC,YAAY,gBACzD,uFAAgD,UAAU,EAAE,WAAW;AAEpC,QAA5C,kBAAY,mBAAK,gBAAU,gBAAgB;AACrC,wBAAY;AACgC,QAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AACrC,+BAAmB,iCAAY,gBAAU,SAAC,YAAY,gBACzD,wFAAiD,UAAU,EAAE,WAAW;AAErC,QAA5C,kBAAY,mBAAK,gBAAU,gBAAgB;AACS,QAApD,UAAK,uBAAC,gBAAU,gBAAU,gBAAU,kBAAW;MACjD;;AAIQ,mBAAO;AACP,0BAAc,6CAA6C,AAAW,AAAM,8BAAC;AACV,QAAzE,AAAU,uBAA6B,UAArB,AAAY,WAAD,yBAAe,AAAK,IAAD;AACJ,QAA5C,AAAU,uBAAO,AAAK,IAAD;AACkB,QAAvC,AAAU,uBAAO,AAAY,WAAD;AACuC,QAAnE,AAAU,uBAA4B,UAApB,AAAY,WAAD,uBAAY,AAAY,WAAD;AACf,QAArC,AAAS;AAC4B,QAArC,AAAS;AAC4B,QAArC,AAAS;AAC4B,QAArC,AAAS;MACX;;AAI+B,QAA7B,AAAS;AACoB,QAA7B,AAAS;AACoB,QAA7B,AAAS;AACoB,QAA7B,AAAS;MACX;;0DApDuD,YAAgB;MARzD;MACT;MACS;MACT;MACS;MACT;MACS;MACT;AACiF,qEAAwB,6BAAU,UAAU,EAAE,WAAW;AACxH,MAArB;IACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgEQ,kBAAe;AACf,oBAAQ,AAAI,GAAD,iBAAe;AACS,QAAzC,yBAAsB,KAAK,EAAE,SAAS;AACvB,QAAf,cAAS,KAAK;AACsB,QAApC,AAAM,KAAD,UAAQ,AAAe;AAChB,QAAZ,WAAM,KAAK;MACb;;AAIQ,0BAAc,6CAA6C,AAAW,AAAW,AAAM,yCAAC;AACb,QAAjF,AAAe,gCAAW,+BAA4B,AAAY,WAAD;MACnE;;0DAjBuD,YAAgB;MAD5C,uBAA0B;AACiC,qEAAwB,6BAAU,UAAU,EAAE,WAAW;AACxH,MAArB;IACF;;;;;;;;;;;;;;;;;;;;;AAiCuD,QAArD,oBAAuB,2DAAsB,MAAM;AAC7C,oBAAQ,AAAY;AACX,QAAf,cAAS,KAAK;AACgC,QAA9C,iBAAW,qCAAc,GAAG,MAAM,MAAM,KAAK;AAKoM,QAJjP,wCAAkC,2BAC5B,8CAAoC,oCAAkB,cACpC,qEAAiB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,mFAAqB,uCAAqB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,oFAAc,mBAAa,+CAEjO,qEAAiB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,mFAAqB,uCAAqB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,oFAAc,mBAAa;AAC7L,QAA1C,AAAY,0BAAQ;AACL,QAAf,WAAM;MACR;;;AAIQ,mBAAO;AACR,sBAAU;AACT,0BAAc,6CAA6C,AAAW,AAAW,AAAM,yCAAC;AAC/E,QAAf,UAAU;AACJ,8BAAY,IAAI,OAAc,WAAW,EAAZ;AACnC,sBAAI,4BAAsB,eAAS,SAAS;AACQ,UAAlD,AAAsB,+CAAmB,SAAS;AACpC,UAAd,UAAU;AACS,UAAnB,gBAAU,SAAS;;AAEf,wBAAY,WAAW;AAC7B,sBAAI,4BAAsB,eAAS,SAAS;AACH,UAAvC,AAAsB,oCAAQ,SAAS;AACzB,UAAd,UAAU;AACS,UAAnB,gBAAU,SAAS;;AAErB,YAAI,OAAO;AAC6B,UAAtC,AAAsB;;AAEa,QAArC,AAAS;AACkB,QAA3B,AAAY;MACd;;AAI+B,QAA7B,AAAS;AACyB,QAAlC,AAAY;AACuB,QAAnC,AAAsB;MACxB;;0DAhDuD,YAAgB;MALxC;MACjB;MACY;MACtB;MACA;AACkF,qEAAwB,6BAAU,UAAU,EAAE,WAAW;AACxH,MAArB;IACF;;;;;;;;;;;;;;;;;;;;;;;;;AA8DQ,wBAAY;AACgC,QAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AACrC,+BAAmB,iCAAY,gBAAU,SAAC,YAAY,gBACzD,uFAAgD,UAAU,EAAE,WAAW;AAEzB,QAAvD,mBAAsB,qBAAM,gBAAU,gBAAgB;AACvC,QAAf,WAAM;MACR;;AAIQ,0BAAc,6CAA6C,AAAW,AAAW,AAAM,yCAAC;AACxF,wBAAY,WAAW;AAC7B,sBAAI,4BAAsB,eAAS,SAAS;AACZ,UAA9B,AAAW,2BAAU,SAAS;AACX,UAAnB,gBAAU,SAAS;;AAErB,uBAA4B;AACJ,UAAtB,AAAW;;AAEwB,QAArC,AAAS;MACX;;AAI+B,QAA7B,AAAS;MACX;;0DA/BuD,YAAgB;MAHzD;MACC;MACX;AACkF,qEAAwB,6BAAU,UAAU,EAAE,WAAW;AACxH,MAArB;IACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwD0E,QAAxE,oBAAuB,yDAAyC,MAAM;AAC5C,QAA1B,cAAQ,AAAY;AACL,QAAf,gCAAS;AAKgkB,QAJzkB,iCAAoC,2EAAkC,2BAChE,iDAAoC,uCAAqB,cACvC,oEAAoB,+BAAO,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,8FAAqB,8BAAY,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,2GAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,sGAA6B,yBAAO,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,8GAAc,AAA6H,kEAAnE,AAAW,AAAW,AAAW,AAAW,AAAW,4HAEtiB,oEAAoB,+BAAO,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,8FAAqB,8BAAY,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,2GAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,sGAA6B,yBAAO,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,8GAAc,AAA6H,kEAAnE,AAAW,AAAW,AAAW,AAAW,AAAW;AAKiG,QAJ7oB,2DAAqD,2BAC/C,qEAAoC,uDAAqC,cACvD,sEAAoC,cAAO,MAAM,AAA6H,kEAAnE,AAAW,AAAW,AAAW,AAAW,AAAW,8HAAyC,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,sGAA6B,qCAAmB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,iHAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,sGAA6B,+BAAa,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,+FAAc,yEAE1nB,sEAAoC,cAAO,MAAM,AAA6H,kEAAnE,AAAW,AAAW,AAAW,AAAW,AAAW,8HAAyC,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,sGAA6B,qCAAmB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,iHAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,sGAA6B,+BAAa,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,+FAAc;AACxjB,QAAxE,AAAY,yBAAO,gDAA0C;AACc,QAA3E,AAAM,+BAAiB,cAAc,iDAAc;AACgD,QAAnG,AAAM,+BAAiB,cAAc,6BAAgD,UAAlC,AAAyB;AAChE,QAAZ,WAAM;MACR;0BAGoC,OAAW,WAAmB;AAChE,aAAM,AAAU,KAAK,KAAW,mCAAkB,AAAU,KAAK,KAAW,kCAAkB,AAAE,MAAG,SAAS;AAC1G,gBAAO;;AAET,cAAO,eAAc;MACvB;;AAIQ,mBAAO;AACR,yBAAmB,AAAQ,iBAAG;AAC7B,0BAAc,AAA6H,kEAAnE,AAAW,AAAW,AAAW,AAAW,AAAW;AAC/H,yBAAa,+BAAuB,AAAM,mBAAC;AAC3C,wBAAmC,UAAtB,AAAY,WAAD,yBAAc,AAAK,AAAY,IAAb,sBAAsB,UAAU;AAChF,sBAAI,4BAAsB,eAAS,SAAS;AACc,UAAxD,AAAyB,AAAS,qDAAa,SAAS;AACrC,UAAnB,gBAAU,SAAS;;AAErB,YAAI,UAAU;AAC+C,UAA1D,AAAyC,0DAAW;;AAEjD,wBAAY,AAAK,IAAD,kBAAkB,UAAU;AAClD,sBAAI,4BAAsB,eAAS,SAAS;AACmB,UAA7D,AAAyC,0DAAW,SAAS;AAC1C,UAAnB,gBAAU,SAAS;;AAEf,wBAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AAC4B,UAAtE,AAAyC,mEAAoB,SAAS;AACnD,UAAnB,gBAAU,SAAS;;AAEf,oDAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AAC0B,UAApE,AAAyC,iEAAA,iCAAkB,SAAS;AACjD,UAAnB,gBAAU,SAAS;;AAEf,wBAAY,AAAK,IAAD,gBAAgB,UAAU;AAChD,sBAAI,4BAAsB,eAAS,SAAS;AACmB,UAA7D,AAAyC,0DAAW,SAAS;AAC1C,UAAnB,gBAAU,SAAS;;AAEf,wBAAY,UAAU;AAC5B,sBAAI,4BAAsB,eAAS,SAAS;AACgB,UAA1D,AAAyC,uDAAQ,SAAS;AACvC,UAAnB,gBAAU,SAAS;;AAEf,0CAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AACuB,UAAjE,AAAyC,8DAAe,SAAS;AAC9C,UAAnB,gBAAU,SAAS;;AAEf,wBAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AAC6B,UAAvE,AAAyC,oEAAqB,SAAS;AACpD,UAAnB,gBAAU,SAAS;;AAEf,wBAAY,AAAK,IAAD;AACtB,sBAAI,4BAAsB,eAAS,SAAS;AACoB,UAA9D,AAAyC,2DAAY,SAAS;AAC3C,UAAnB,gBAAU,SAAS;;AAEf,yBAAa,AAAK,AAAY,IAAb,gBAAgB,UAAU;AACjD,sBAAI,4BAAsB,gBAAU,UAAU;AACY,UAAxD,AAAyC,oDAAK,UAAU;AACnC,UAArB,iBAAW,UAAU;;AAEuC,QAA9D,AAAyB,iDAAkB,mBAAa;AACf,QAAzC,AAAY,oCAAkB,UAAU;AACb,QAA3B,AAAY;AACZ,uBAA4B;AAC1B,cAAI,UAAU;AACuC,YAAnD,AAAyB,AAAS;;;MAGxC;;AAIoC,QAAlC,AAAY;AACmC,QAA/C,AAAyB,AAAS;AACoB,QAAtD,AAAyC;MAC3C;+BAE4B;AACpB,yBAAa,+BAAuB,AAAM,mBAAC;AAC3C,mBAAO;AACwB,QAArC,AAAK,AAAY,IAAb,sBAAsB,UAAU;AACY,QAAhD,AAAyB,AAAS;MACpC;;0DAjHuD,YAAgB;MAdlB;MACpB;MACe;MAC3C;MACA;MACD;MACA;MACA;MACA;MACA;MACC;MACD;MACG;MACU;AACqE,qEAAwB,6BAAU,UAAU,EAAE,WAAW;AACxH,MAArB;IACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+H0E,QAAxE,oBAAuB,8DAAyC,MAAM;AAChE,oBAAQ,AAAY;AACX,QAAf,cAAS,KAAK;AAKwkB,QAJtlB,2DAAqD,2BAC/C,0EAAoC,uDAAqC,cACvD,yDAAoC,KAAK,EAAE,MAAM,AAAkH,kEAAxD,AAAW,AAAW,AAAW,AAAW,mHAAyC,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,2FAA6B,qCAAmB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,sGAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,2FAA6B,+BAAa,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,oFAAc,8EAEnkB,yDAAoC,KAAK,EAAE,MAAM,AAAkH,kEAAxD,AAAW,AAAW,AAAW,AAAW,mHAAyC,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,2FAA6B,qCAAmB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,sGAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,2FAA6B,+BAAa,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,oFAAc;AACjgB,QAAxE,AAAY,yBAAO,gDAA0C;AACjD,QAAZ,WAAM,KAAK;MACb;0BAGoC,OAAW,WAAmB;AAChE,aAAM,AAAU,KAAK,KAAW,mCAAkB,AAAU,KAAK,KAAW,kCAAkB,AAAE,MAAG,SAAS;AAC1G,gBAAO;;AAET,cAAO,eAAc;MACvB;;AAIO,yBAAmB,AAAQ,iBAAG;AAC7B,0BAAc,6CAA6C,AAAW,AAAW,AAAM,yCAAC;AAC9F,YAAI,UAAU;AAC4C,UAAxD,AAAyC,0DAAW;AACK,UAAzD,AAAyC,0DAAW;;AAEhD,wBAAY,AAAY,WAAD;AAC7B,sBAAI,4BAAsB,eAAS,SAAS;AACgB,UAA1D,AAAyC,uDAAQ,SAAS;AACvC,UAAnB,gBAAU,SAAS;;AAEoB,QAAzC,AAAY,oCAAkB,UAAU;AACb,QAA3B,AAAY;MACd;;AAIoC,QAAlC,AAAY;AAC0C,QAAtD,AAAyC;MAC3C;;2DA9CwD,YAAgB;MAHd;MACL;MACjD;AACmF,sEAAwB,6BAAU,UAAU,EAAE,WAAW;AACzH,MAArB;IACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2DE,YAAK,AAAuB,gCAAG;AACwD,UAApF,+BAAyB,sCAAqB;;AAEjD,cAAO;MACT;;AAI6D,QAA3D,oBAAc,qDAAqC,MAAM;AAC9B,QAA3B,cAAS,AAAY;AAK0S,QAJ/T,uDAAiD,2BAC3C,iEAAmC,mDAAiC,cACnD,kEAAgC,AAAK,yBAA6B,+BAAa,AAAS,qDAAc,AAAK,yBAA6B,qCAAmB,AAAS,wCAAc,AAAK,sCAAkE,AAAS,6BAAc,MAAM,MAAM,mBAAa,+DAElT,kEAAgC,AAAK,yBAA6B,+BAAa,AAAS,qDAAc,AAAK,yBAA6B,qCAAmB,AAAS,wCAAc,AAAK,sCAAkE,AAAS,6BAAc,MAAM,MAAM,mBAAa;AAC/O,QAAxE,AAAY,yBAAO,4CAAsC;AAC5C,QAAb,WAAM;AACN,cAAO,gEAAa,GAAG,MAAM,aAAQ;MACvC;0BAGoC,OAAW,WAAmB;AAChE,YAAK,AAAE,MAAG,SAAS;AACjB,cAAW,AAAU,KAAK,KAAU,qDAAoC,AAAU,KAAK,KAAW,oCAAoB,AAAU,KAAK,KAAW,iCAAiB,AAAU,KAAK,KAAW,iCAAiB,AAAU,KAAK,KAAW,0CAA0B,AAAU,KAAK,KAAW,wCAAwB,AAAU,KAAK,KAAW,uCAAuB,AAAU,KAAK,KAAW;AAC3X,kBAAO;;AAET,cAAI,AAAU,KAAK,KAAW;AAC5B,kBAAO;;;AAGX,cAAO,eAAc;MACvB;;AAI6B,QAA3B,AAAY;MACd;;AAIoC,QAAlC,AAAY;AACsC,QAAlD,AAAqC;MACvC;;8DA5C2D,YAAgB;MAHnC;MACG;MACT;AACwD,yEAAwB,yBAAM,UAAU,EAAE,WAAW;;IAAsC;;;;;;;;;;;;;;;;;;;;;;;8IApmBxG,YAAgB;AAC7F,UAAO,sGAAyC,UAAU,EAAE,WAAW;EACzE;8IA6D+E,YAAgB;AAC7F,UAAO,sGAAyC,UAAU,EAAE,WAAW;EACzE;8IAuG+E,YAAgB;AAC7F,UAAO,sGAAyC,UAAU,EAAE,WAAW;EACzE;8IA2C+E,YAAgB;AAC7F,UAAO,sGAAyC,UAAU,EAAE,WAAW;EACzE;8IAkE+E,YAAgB;AAC7F,UAAO,sGAAyC,UAAU,EAAE,WAAW;EACzE;8IAwB+E,YAAgB;AAC7F,UAAO,sGAAyC,UAAU,EAAE,WAAW;EACzE;8IA2D+E,YAAgB;AAC7F,UAAO,sGAAyC,UAAU,EAAE,WAAW;EACzE;8IAwC+E,YAAgB;AAC7F,UAAO,sGAAyC,UAAU,EAAE,WAAW;EACzE;8IAqI+E,YAAgB;AAC7F,UAAO,sGAAyC,UAAU,EAAE,WAAW;EACzE;gJAuDgF,YAAgB;AAC9F,UAAO,uGAA0C,UAAU,EAAE,WAAW;EAC1E;sJAuDyH,YAAgB;AACvI,UAAO,0GAA0C,UAAU,EAAE,WAAW;EAC1E;;AAIE,kBAAI;AACF;;AAEa,IAAf,+CAAW;AAEwF,IAAnG,4BAAyB,mDAAiC;AACrC,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;EACF;;;AAvyBE,YAAO;IACT;;;;;;;;MArUoB,0EAAsC;YAAG,EAAS;;MAkUN,6EAAyC;;;MAwsBrF,8EAA0C;;;MAyD1D,4CAAQ;YAAG","file":"material_dropdown_select.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_dropdown_select$46template: material_dropdown_select$46template
  };
}));

//# sourceMappingURL=material_dropdown_select.template.ddc.js.map
