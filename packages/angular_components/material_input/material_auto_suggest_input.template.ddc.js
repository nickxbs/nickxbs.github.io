define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/content/deferred_content', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_input/material_auto_suggest_input', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/stop_propagation/stop_propagation', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/material_spinner/material_spinner.template', 'packages/angular_components/material_spinner/material_spinner', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular_components/material_select/material_select_dropdown_item.template', 'packages/angular_components/material_select/material_select_dropdown_item', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/a11y/active_item_directive.template', 'packages/angular_components/model/a11y/active_item_directive', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/model/ui/highlight_provider', 'packages/angular_components/model/ui/has_factory', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_input/input_wrapper.template', 'packages/angular_components/material_select/material_select_base.template', 'packages/angular_components/material_tooltip/material_tooltip.template', 'packages/angular_components/mixins/highlight_assistant_mixin.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/mixins/selection_input_adapter.template', 'packages/angular_components/model/a11y/active_item.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/selection/string_selection_options.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/model/ui/highlight_provider.template', 'packages/angular_components/model/ui/template_support.template', 'packages/angular_components/stop_propagation/stop_propagation.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_components/material_input/material_auto_suggest_input.scss.css.shim', 'packages/angular_components/material_input/material_input_wrapper.scss.css.shim'], (function load__packages__angular_components__material_input__material_auto_suggest_input_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular_components__material_popup__material_popup, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_input__material_input$46template, packages__angular_components__material_input__deferred_validator, packages__angular_forms__src__directives, packages__angular_components__material_input__material_input, packages__angular_components__material_input__material_input_default_value_accessor, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular_components__content__deferred_content, packages__angular_components__material_input__base_material_input, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__interfaces__has_disabled, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular__src__runtime__interpolate, packages__angular_components__material_input__material_auto_suggest_input, packages__angular_components__src__material_tooltip__tooltip_controller, packages__angular_components__material_tooltip__module, packages__angular_components__utils__disposer__disposer, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__button_decorator__button_decorator, packages__angular_components__material_icon__material_icon, packages__angular_components__src__material_tooltip__icon_tooltip, packages__angular_components__stop_propagation__stop_propagation, packages__angular_components__focus__focus_trap$46template, packages__angular_components__focus__focus_trap, packages__angular_components__material_spinner__material_spinner$46template, packages__angular_components__material_spinner__material_spinner, packages__angular__src__runtime__text_binding, packages__angular_components__material_list__material_list$46template, packages__angular_components__material_list__material_list, packages__angular_components__model__selection__selection_options, packages__angular_components__dynamic_component__dynamic_component$46template, packages__angular_components__dynamic_component__dynamic_component, packages__angular_components__material_select__material_select_dropdown_item$46template, packages__angular_components__material_select__material_select_dropdown_item, packages__angular_components__material_select__activation_handler, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__model__selection__selection_container, packages__angular_components__model__ui__has_renderer, packages__angular_components__model__a11y__active_item_directive$46template, packages__angular_components__model__a11y__active_item_directive, packages__angular_components__laminate__components__modal__modal, packages__angular_components__model__ui__highlight_provider, packages__angular_components__model__ui__has_factory, packages__angular__angular$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__focus__focus$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_input__input_wrapper$46template, packages__angular_components__material_select__material_select_base$46template, packages__angular_components__material_tooltip__material_tooltip$46template, packages__angular_components__mixins__highlight_assistant_mixin$46template, packages__angular_components__mixins__material_dropdown_base$46template, packages__angular_components__mixins__selection_input_adapter$46template, packages__angular_components__model__a11y__active_item$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_container$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__selection__selection_options$46template, packages__angular_components__model__selection__string_selection_options$46template, packages__angular_components__model__ui__has_factory$46template, packages__angular_components__model__ui__highlight_provider$46template, packages__angular_components__model__ui__template_support$46template, packages__angular_components__stop_propagation__stop_propagation$46template, packages__angular_components__utils__angular__properties__properties$46template, packages__angular_components__utils__async__async$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_forms__angular_forms$46template, packages__angular_components__material_input__material_auto_suggest_input$46scss$46css$46shim, packages__angular_components__material_input__material_input_wrapper$46scss$46css$46shim) {
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
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const dynamic_component_loader = packages__angular__src__bootstrap__modules.src__core__linker__dynamic_component_loader;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const material_input$46template = packages__angular_components__material_input__material_input$46template.material_input__material_input$46template;
  const deferred_validator = packages__angular_components__material_input__deferred_validator.material_input__deferred_validator;
  const ng_model = packages__angular_forms__src__directives.src__directives__ng_model;
  const ng_control = packages__angular_forms__src__directives.src__directives__ng_control;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const material_input_default_value_accessor = packages__angular_components__material_input__material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const deferred_content = packages__angular_components__content__deferred_content.content__deferred_content;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_auto_suggest_input = packages__angular_components__material_input__material_auto_suggest_input.material_input__material_auto_suggest_input;
  const tooltip_controller = packages__angular_components__src__material_tooltip__tooltip_controller.src__material_tooltip__tooltip_controller;
  const module = packages__angular_components__material_tooltip__module.material_tooltip__module;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip;
  const stop_propagation = packages__angular_components__stop_propagation__stop_propagation.stop_propagation__stop_propagation;
  const focus_trap$46template = packages__angular_components__focus__focus_trap$46template.focus__focus_trap$46template;
  const focus_trap = packages__angular_components__focus__focus_trap.focus__focus_trap;
  const material_spinner$46template = packages__angular_components__material_spinner__material_spinner$46template.material_spinner__material_spinner$46template;
  const material_spinner = packages__angular_components__material_spinner__material_spinner.material_spinner__material_spinner;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const material_list$46template = packages__angular_components__material_list__material_list$46template.material_list__material_list$46template;
  const material_list = packages__angular_components__material_list__material_list.material_list__material_list;
  const selection_options = packages__angular_components__model__selection__selection_options.model__selection__selection_options;
  const dynamic_component$46template = packages__angular_components__dynamic_component__dynamic_component$46template.dynamic_component__dynamic_component$46template;
  const dynamic_component = packages__angular_components__dynamic_component__dynamic_component.dynamic_component__dynamic_component;
  const material_select_dropdown_item$46template = packages__angular_components__material_select__material_select_dropdown_item$46template.material_select__material_select_dropdown_item$46template;
  const material_select_dropdown_item = packages__angular_components__material_select__material_select_dropdown_item.material_select__material_select_dropdown_item;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const active_item_directive$46template = packages__angular_components__model__a11y__active_item_directive$46template.model__a11y__active_item_directive$46template;
  const active_item_directive = packages__angular_components__model__a11y__active_item_directive.model__a11y__active_item_directive;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const highlight_provider = packages__angular_components__model__ui__highlight_provider.model__ui__highlight_provider;
  const has_factory = packages__angular_components__model__ui__has_factory.model__ui__has_factory;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const input_wrapper$46template = packages__angular_components__material_input__input_wrapper$46template.material_input__input_wrapper$46template;
  const material_select_base$46template = packages__angular_components__material_select__material_select_base$46template.material_select__material_select_base$46template;
  const material_tooltip$46template = packages__angular_components__material_tooltip__material_tooltip$46template.material_tooltip__material_tooltip$46template;
  const highlight_assistant_mixin$46template = packages__angular_components__mixins__highlight_assistant_mixin$46template.mixins__highlight_assistant_mixin$46template;
  const material_dropdown_base$46template = packages__angular_components__mixins__material_dropdown_base$46template.mixins__material_dropdown_base$46template;
  const selection_input_adapter$46template = packages__angular_components__mixins__selection_input_adapter$46template.mixins__selection_input_adapter$46template;
  const active_item$46template = packages__angular_components__model__a11y__active_item$46template.model__a11y__active_item$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_container$46template = packages__angular_components__model__selection__selection_container$46template.model__selection__selection_container$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const selection_options$46template = packages__angular_components__model__selection__selection_options$46template.model__selection__selection_options$46template;
  const string_selection_options$46template = packages__angular_components__model__selection__string_selection_options$46template.model__selection__string_selection_options$46template;
  const has_factory$46template = packages__angular_components__model__ui__has_factory$46template.model__ui__has_factory$46template;
  const highlight_provider$46template = packages__angular_components__model__ui__highlight_provider$46template.model__ui__highlight_provider$46template;
  const template_support$46template = packages__angular_components__model__ui__template_support$46template.model__ui__template_support$46template;
  const stop_propagation$46template = packages__angular_components__stop_propagation__stop_propagation$46template.stop_propagation__stop_propagation$46template;
  const properties$46template = packages__angular_components__utils__angular__properties__properties$46template.utils__angular__properties__properties$46template;
  const async$46template = packages__angular_components__utils__async__async$46template.utils__async__async$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const angular_forms$46template = packages__angular_forms__angular_forms$46template.angular_forms$46template;
  const material_auto_suggest_input$46scss$46css$46shim = packages__angular_components__material_input__material_auto_suggest_input$46scss$46css$46shim.material_input__material_auto_suggest_input$46scss$46css$46shim;
  const material_input_wrapper$46scss$46css$46shim = packages__angular_components__material_input__material_input_wrapper$46scss$46css$46shim.material_input__material_input_wrapper$46scss$46css$46shim;
  var material_auto_suggest_input$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var $_get = dartx._get;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var PopupSourceDirectiveL = () => (PopupSourceDirectiveL = dart.constFn(dart.legacy(popup_source_directive.PopupSourceDirective)))();
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var VoidToPopupSourceDirectiveL = () => (VoidToPopupSourceDirectiveL = dart.constFn(dart.fnType(PopupSourceDirectiveL(), [])))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var AppViewOfObjectL = () => (AppViewOfObjectL = dart.constFn(app_view.AppView$(ObjectL())))();
  var AppViewLOfObjectL = () => (AppViewLOfObjectL = dart.constFn(dart.legacy(AppViewOfObjectL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLOfObjectLAndintLToAppViewLOfvoid = () => (AppViewLOfObjectLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewLOfObjectL(), intL()])))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
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
  var KeyboardOnlyFocusIndicatorDirectiveL = () => (KeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)))();
  var VoidToKeyboardOnlyFocusIndicatorDirectiveL = () => (VoidToKeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.fnType(KeyboardOnlyFocusIndicatorDirectiveL(), [])))();
  var ViewContainerL = () => (ViewContainerL = dart.constFn(dart.legacy(view_container.ViewContainer)))();
  var JSArrayOfViewContainerL = () => (JSArrayOfViewContainerL = dart.constFn(_interceptors.JSArray$(ViewContainerL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var DeferredValidatorL = () => (DeferredValidatorL = dart.constFn(dart.legacy(deferred_validator.DeferredValidator)))();
  var NgModelL = () => (NgModelL = dart.constFn(dart.legacy(ng_model.NgModel)))();
  var NgControlL = () => (NgControlL = dart.constFn(dart.legacy(ng_control.NgControl)))();
  var MaterialInputComponentL = () => (MaterialInputComponentL = dart.constFn(dart.legacy(material_input.MaterialInputComponent)))();
  var BaseMaterialInputL = () => (BaseMaterialInputL = dart.constFn(dart.legacy(base_material_input.BaseMaterialInput)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StringLToStringL = () => (StringLToStringL = dart.constFn(dart.fnType(StringL(), [StringL()])))();
  var StringLToLStringL = () => (StringLToLStringL = dart.constFn(dart.legacy(StringLToStringL())))();
  var StringLTointL = () => (StringLTointL = dart.constFn(dart.fnType(intL(), [StringL()])))();
  var StringLToLintL = () => (StringLToLintL = dart.constFn(dart.legacy(StringLTointL())))();
  var TooltipControllerL = () => (TooltipControllerL = dart.constFn(dart.legacy(tooltip_controller.TooltipController)))();
  var DisposerL = () => (DisposerL = dart.constFn(dart.legacy(disposer.Disposer)))();
  var VoidToTooltipControllerL = () => (VoidToTooltipControllerL = dart.constFn(dart.fnType(TooltipControllerL(), [])))();
  var MaterialTooltipDirectiveL = () => (MaterialTooltipDirectiveL = dart.constFn(dart.legacy(tooltip.MaterialTooltipDirective)))();
  var WindowL = () => (WindowL = dart.constFn(dart.legacy(html.Window)))();
  var VoidToMaterialTooltipDirectiveL = () => (VoidToMaterialTooltipDirectiveL = dart.constFn(dart.fnType(MaterialTooltipDirectiveL(), [])))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var intLAnddynamicToObjectL = () => (intLAnddynamicToObjectL = dart.constFn(dart.fnType(ObjectL(), [intL(), dart.dynamic])))();
  var intLAnddynamicToLObjectL = () => (intLAnddynamicToLObjectL = dart.constFn(dart.legacy(intLAnddynamicToObjectL())))();
  var OptionGroupL = () => (OptionGroupL = dart.constFn(dart.legacy(selection_options.OptionGroup)))();
  var DynamicComponentL = () => (DynamicComponentL = dart.constFn(dart.legacy(dynamic_component.DynamicComponent)))();
  var SlowComponentLoaderL = () => (SlowComponentLoaderL = dart.constFn(dart.legacy(dynamic_component_loader.SlowComponentLoader)))();
  var VoidToDynamicComponentL = () => (VoidToDynamicComponentL = dart.constFn(dart.fnType(DynamicComponentL(), [])))();
  var ViewMaterialSelectDropdownItemComponent0OfStringL = () => (ViewMaterialSelectDropdownItemComponent0OfStringL = dart.constFn(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(StringL())))();
  var MaterialSelectDropdownItemComponentOfStringL = () => (MaterialSelectDropdownItemComponentOfStringL = dart.constFn(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(StringL())))();
  var MaterialSelectDropdownItemComponentLOfStringL = () => (MaterialSelectDropdownItemComponentLOfStringL = dart.constFn(dart.legacy(MaterialSelectDropdownItemComponentOfStringL())))();
  var MaterialSelectDropdownItemComponentL = () => (MaterialSelectDropdownItemComponentL = dart.constFn(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent)))();
  var ViewMaterialAutoSuggestInputComponent0L = () => (ViewMaterialAutoSuggestInputComponent0L = dart.constFn(dart.legacy(material_auto_suggest_input$46template.ViewMaterialAutoSuggestInputComponent0)))();
  var ActivationHandlerL = () => (ActivationHandlerL = dart.constFn(dart.legacy(activation_handler.ActivationHandler)))();
  var IdGeneratorL = () => (IdGeneratorL = dart.constFn(dart.legacy(id_generator.IdGenerator)))();
  var VoidToMaterialSelectDropdownItemComponentLOfStringL = () => (VoidToMaterialSelectDropdownItemComponentLOfStringL = dart.constFn(dart.fnType(MaterialSelectDropdownItemComponentLOfStringL(), [])))();
  var SelectionItemL = () => (SelectionItemL = dart.constFn(dart.legacy(selection_container.SelectionItem)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var ActiveItemDirectiveL = () => (ActiveItemDirectiveL = dart.constFn(dart.legacy(active_item_directive.ActiveItemDirective)))();
  var ModalL = () => (ModalL = dart.constFn(dart.legacy(modal.Modal)))();
  var VoidToActiveItemDirectiveL = () => (VoidToActiveItemDirectiveL = dart.constFn(dart.fnType(ActiveItemDirectiveL(), [])))();
  var MaterialAutoSuggestInputComponentL = () => (MaterialAutoSuggestInputComponentL = dart.constFn(dart.legacy(material_auto_suggest_input.MaterialAutoSuggestInputComponent)))();
  var SelectionContainerL = () => (SelectionContainerL = dart.constFn(dart.legacy(selection_container.SelectionContainer)))();
  var HighlightProviderL = () => (HighlightProviderL = dart.constFn(dart.legacy(highlight_provider.HighlightProvider)))();
  var RendersValueL = () => (RendersValueL = dart.constFn(dart.legacy(has_renderer.RendersValue)))();
  var HasComponentRendererOfRendersValueL$dynamic = () => (HasComponentRendererOfRendersValueL$dynamic = dart.constFn(has_renderer.HasComponentRenderer$(RendersValueL(), dart.dynamic)))();
  var HasComponentRendererLOfRendersValueL$dynamic = () => (HasComponentRendererLOfRendersValueL$dynamic = dart.constFn(dart.legacy(HasComponentRendererOfRendersValueL$dynamic())))();
  var HasFactoryRendererOfRendersValueL$dynamic = () => (HasFactoryRendererOfRendersValueL$dynamic = dart.constFn(has_factory.HasFactoryRenderer$(RendersValueL(), dart.dynamic)))();
  var HasFactoryRendererLOfRendersValueL$dynamic = () => (HasFactoryRendererLOfRendersValueL$dynamic = dart.constFn(dart.legacy(HasFactoryRendererOfRendersValueL$dynamic())))();
  var ComponentFactoryOfMaterialAutoSuggestInputComponentL = () => (ComponentFactoryOfMaterialAutoSuggestInputComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialAutoSuggestInputComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var AppViewLAndintLToAppViewLOfMaterialAutoSuggestInputComponentLOfTL = () => (AppViewLAndintLToAppViewLOfMaterialAutoSuggestInputComponentLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialAutoSuggestInputComponentOfTL = () => (MaterialAutoSuggestInputComponentOfTL = dart.constFn(material_auto_suggest_input.MaterialAutoSuggestInputComponent$(TL())))();
    var MaterialAutoSuggestInputComponentLOfTL = () => (MaterialAutoSuggestInputComponentLOfTL = dart.constFn(dart.legacy(MaterialAutoSuggestInputComponentOfTL())))();
    var AppViewOfMaterialAutoSuggestInputComponentLOfTL = () => (AppViewOfMaterialAutoSuggestInputComponentLOfTL = dart.constFn(app_view.AppView$(MaterialAutoSuggestInputComponentLOfTL())))();
    var AppViewLOfMaterialAutoSuggestInputComponentLOfTL = () => (AppViewLOfMaterialAutoSuggestInputComponentLOfTL = dart.constFn(dart.legacy(AppViewOfMaterialAutoSuggestInputComponentLOfTL())))();
    return [AppViewLOfMaterialAutoSuggestInputComponentLOfTL(), [AppViewL(), intL()]];
  })))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_input/material_auto_suggest_input.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], dart.dynamic);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: OpaqueTokenOfListLOfRelativePositionL().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C4() {
      return C4 = dart.constList([], ObjectL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: opaque_token.MultiToken.prototype,
        [OpaqueToken__uniqueName]: "NgValidators"
      });
    },
    get C8() {
      return C8 = dart.fn(material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponentHost0, AppViewLAndintLToAppViewLOfMaterialAutoSuggestInputComponentLOfTL());
    },
    get C7() {
      return C7 = dart.const(dart.gbind(C8 || CT.C8, dart.dynamic));
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ComponentFactoryOfMaterialAutoSuggestInputComponentL().prototype,
        [ComponentFactory__viewFactory]: C7 || CT.C7,
        [ComponentFactory_selector]: "material-auto-suggest-input"
      });
    }
  }, false);
  var _compView_0 = dart.privateName(material_auto_suggest_input$46template, "_compView_0");
  var _DeferredValidator_0_5 = dart.privateName(material_auto_suggest_input$46template, "_DeferredValidator_0_5");
  var _NgValidators_0_6 = dart.privateName(material_auto_suggest_input$46template, "_NgValidators_0_6");
  var _NgModel_0_7 = dart.privateName(material_auto_suggest_input$46template, "_NgModel_0_7");
  var _MaterialInputComponent_0_9 = dart.privateName(material_auto_suggest_input$46template, "_MaterialInputComponent_0_9");
  var _MaterialInputDefaultValueAccessor_0_11 = dart.privateName(material_auto_suggest_input$46template, "_MaterialInputDefaultValueAccessor_0_11");
  var _PopupSourceDirective_0_14 = dart.privateName(material_auto_suggest_input$46template, "_PopupSourceDirective_0_14");
  var _appEl_2 = dart.privateName(material_auto_suggest_input$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(material_auto_suggest_input$46template, "_NgIf_2_9");
  var _compView_3 = dart.privateName(material_auto_suggest_input$46template, "_compView_3");
  var _appEl_3 = dart.privateName(material_auto_suggest_input$46template, "_appEl_3");
  var _MaterialPopupComponent_3_8 = dart.privateName(material_auto_suggest_input$46template, "_MaterialPopupComponent_3_8");
  var __PopupRef_3_11 = dart.privateName(material_auto_suggest_input$46template, "__PopupRef_3_11");
  var __PopupHierarchy_3_12 = dart.privateName(material_auto_suggest_input$46template, "__PopupHierarchy_3_12");
  var _KeyboardOnlyFocusIndicatorDirective_4_5 = dart.privateName(material_auto_suggest_input$46template, "_KeyboardOnlyFocusIndicatorDirective_4_5");
  var _appEl_5 = dart.privateName(material_auto_suggest_input$46template, "_appEl_5");
  var _CachingDeferredContentDirective_5_9 = dart.privateName(material_auto_suggest_input$46template, "_CachingDeferredContentDirective_5_9");
  var _KeyboardOnlyFocusIndicatorDirective_6_5 = dart.privateName(material_auto_suggest_input$46template, "_KeyboardOnlyFocusIndicatorDirective_6_5");
  var _expr_2 = dart.privateName(material_auto_suggest_input$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_auto_suggest_input$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_auto_suggest_input$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_auto_suggest_input$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_auto_suggest_input$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_auto_suggest_input$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_auto_suggest_input$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_auto_suggest_input$46template, "_expr_9");
  var _expr_10 = dart.privateName(material_auto_suggest_input$46template, "_expr_10");
  var _expr_11 = dart.privateName(material_auto_suggest_input$46template, "_expr_11");
  var _expr_12 = dart.privateName(material_auto_suggest_input$46template, "_expr_12");
  var _expr_13 = dart.privateName(material_auto_suggest_input$46template, "_expr_13");
  var _expr_14 = dart.privateName(material_auto_suggest_input$46template, "_expr_14");
  var _expr_15 = dart.privateName(material_auto_suggest_input$46template, "_expr_15");
  var _expr_16 = dart.privateName(material_auto_suggest_input$46template, "_expr_16");
  var _expr_17 = dart.privateName(material_auto_suggest_input$46template, "_expr_17");
  var _expr_18 = dart.privateName(material_auto_suggest_input$46template, "_expr_18");
  var _expr_20 = dart.privateName(material_auto_suggest_input$46template, "_expr_20");
  var _expr_22 = dart.privateName(material_auto_suggest_input$46template, "_expr_22");
  var _expr_23 = dart.privateName(material_auto_suggest_input$46template, "_expr_23");
  var _expr_24 = dart.privateName(material_auto_suggest_input$46template, "_expr_24");
  var _expr_27 = dart.privateName(material_auto_suggest_input$46template, "_expr_27");
  var _expr_28 = dart.privateName(material_auto_suggest_input$46template, "_expr_28");
  var _expr_29 = dart.privateName(material_auto_suggest_input$46template, "_expr_29");
  var _expr_30 = dart.privateName(material_auto_suggest_input$46template, "_expr_30");
  var _expr_31 = dart.privateName(material_auto_suggest_input$46template, "_expr_31");
  var _expr_32 = dart.privateName(material_auto_suggest_input$46template, "_expr_32");
  var _expr_34 = dart.privateName(material_auto_suggest_input$46template, "_expr_34");
  var _expr_35 = dart.privateName(material_auto_suggest_input$46template, "_expr_35");
  var _expr_36 = dart.privateName(material_auto_suggest_input$46template, "_expr_36");
  var _el_0 = dart.privateName(material_auto_suggest_input$46template, "_el_0");
  var _el_3 = dart.privateName(material_auto_suggest_input$46template, "_el_3");
  var _PopupRef_3_11 = dart.privateName(material_auto_suggest_input$46template, "_PopupRef_3_11");
  var _PopupHierarchy_3_12 = dart.privateName(material_auto_suggest_input$46template, "_PopupHierarchy_3_12");
  var C0;
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C1;
  var C2;
  var C3;
  var _handle_click_0_1 = dart.privateName(material_auto_suggest_input$46template, "_handle_click_0_1");
  var _handle_ngModelChange_0_0 = dart.privateName(material_auto_suggest_input$46template, "_handle_ngModelChange_0_0");
  var _handle_visibleChange_3_0 = dart.privateName(material_auto_suggest_input$46template, "_handle_visibleChange_3_0");
  var C4;
  var C5;
  const _is_ViewMaterialAutoSuggestInputComponent0_default = Symbol('_is_ViewMaterialAutoSuggestInputComponent0_default');
  material_auto_suggest_input$46template.ViewMaterialAutoSuggestInputComponent0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ViewMaterialAutoSuggestInputComponent0 extends app_view.AppView$(dart.legacy(material_auto_suggest_input.MaterialAutoSuggestInputComponent$(dart.legacy(T)))) {
      get [_PopupRef_3_11]() {
        if (this[__PopupRef_3_11] == null) {
          this[__PopupRef_3_11] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_3_8]);
        }
        return this[__PopupRef_3_11];
      }
      get [_PopupHierarchy_3_12]() {
        if (this[__PopupHierarchy_3_12] == null) {
          this[__PopupHierarchy_3_12] = material_popup.getHierarchy(this[_MaterialPopupComponent_3_8]);
        }
        return this[__PopupHierarchy_3_12];
      }
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_input/material_auto_suggest_input.dart" : null;
      }
      build() {
        let _ctx = this.ctx;
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        this[_compView_0] = new material_input$46template.ViewMaterialInputComponent0.new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        parentRenderNode[$append](this[_el_0]);
        dom_helpers.setAttribute(this[_el_0], "alignPositionY", "after");
        dom_helpers.setAttribute(this[_el_0], "initPopupAriaAttributes", "false");
        dom_helpers.setAttribute(this[_el_0], "inputAriaAutocomplete", "list");
        dom_helpers.setAttribute(this[_el_0], "inputAriaHasPopup", "listbox");
        dom_helpers.setAttribute(this[_el_0], "popupSource", "");
        dom_helpers.setAttribute(this[_el_0], "role", "combobox");
        this.addShimC(HtmlElementL().as(this[_el_0]));
        this[_DeferredValidator_0_5] = new deferred_validator.DeferredValidator.new();
        this[_NgValidators_0_6] = [this[_DeferredValidator_0_5]];
        this[_NgModel_0_7] = new ng_model.NgModel.new(this[_NgValidators_0_6], null);
        this[_MaterialInputComponent_0_9] = new material_input.MaterialInputComponent.new(null, null, "combobox", this[_NgModel_0_7], this[_compView_0], this[_DeferredValidator_0_5]);
        this[_MaterialInputDefaultValueAccessor_0_11] = new material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_0_9], this[_NgModel_0_7]);
        this[_PopupSourceDirective_0_14] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), HtmlElementL().as(this[_el_0]), this[_MaterialInputComponent_0_9], this[_MaterialInputComponent_0_9], "false"), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), HtmlElementL().as(this[_el_0]), this[_MaterialInputComponent_0_9], this[_MaterialInputComponent_0_9], "false");
        let doc = html.document;
        let _el_1 = doc[$createElement]("span");
        dom_helpers.setAttribute(_el_1, "trailing", "");
        this.addShimE(_el_1);
        let _anchor_2 = dom_helpers.appendAnchor(_el_1);
        this[_appEl_2] = new view_container.ViewContainer.new(2, 1, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent1(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        this.project(_el_1, 0);
        this[_compView_0].create(this[_MaterialInputComponent_0_9], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_1]), C0 || CT.C0]));
        this[_compView_3] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 3);
        this[_el_3] = this[_compView_3].rootEl;
        parentRenderNode[$append](this[_el_3]);
        dom_helpers.setAttribute(this[_el_3], "trackLayoutChanges", "");
        this.addShimC(HtmlElementL().as(this[_el_3]));
        this[_appEl_3] = new view_container.ViewContainer.new(3, null, this, this[_el_3]);
        this[_MaterialPopupComponent_3_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C1 || CT.C1, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C2 || CT.C2, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C3 || CT.C3, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_3], this[_appEl_3], new element_ref.ElementRef.new(this[_el_3])), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C1 || CT.C1, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C2 || CT.C2, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C3 || CT.C3, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_3], this[_appEl_3], new element_ref.ElementRef.new(this[_el_3]));
        let _el_4 = doc[$createElement]("div");
        dom_helpers.setAttribute(_el_4, "header", "");
        dom_helpers.setAttribute(_el_4, "keyboardOnlyFocusIndicator", "");
        _el_4.tabIndex = -1;
        this.addShimC(HtmlElementL().as(_el_4));
        this[_KeyboardOnlyFocusIndicatorDirective_4_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(_el_4), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(_el_4), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)));
        this.project(_el_4, 1);
        let _anchor_5 = dom_helpers.createAnchor();
        this[_appEl_5] = new view_container.ViewContainer.new(5, 3, this, _anchor_5);
        let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], dart.fn((parentView, parentIndex) => material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent2(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_CachingDeferredContentDirective_5_9] = new deferred_content.CachingDeferredContentDirective.new(this[_appEl_5], _TemplateRef_5_8, this[_MaterialPopupComponent_3_8]);
        let _el_6 = doc[$createElement]("div");
        dom_helpers.setAttribute(_el_6, "footer", "");
        dom_helpers.setAttribute(_el_6, "keyboardOnlyFocusIndicator", "");
        _el_6.tabIndex = -1;
        this.addShimC(HtmlElementL().as(_el_6));
        this[_KeyboardOnlyFocusIndicatorDirective_6_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(_el_6), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(_el_6), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)));
        this.project(_el_6, 2);
        this[_compView_3].create(this[_MaterialPopupComponent_3_8], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_4]), JSArrayOfViewContainerL().of([this[_appEl_5]]), JSArrayOfElementL().of([_el_6])]));
        this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_click_0_1)));
        this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyDown')));
        this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyPress')));
        let subscription_0 = this[_NgModel_0_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_0_0)));
        let subscription_1 = this[_MaterialInputComponent_0_9].onFocus.listen(this.eventHandler1(FocusEventL(), FocusEventL(), dart.bind(_ctx, 'handleFocus')));
        let subscription_2 = this[_MaterialInputComponent_0_9].onBlur.listen(this.eventHandler1(FocusEventL(), FocusEventL(), dart.bind(_ctx, 'handleBlur')));
        let subscription_3 = this[_MaterialPopupComponent_3_8].onVisible.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handle_visibleChange_3_0)));
        _el_4[$addEventListener]("keyup", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyUp')));
        _el_4[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_4_5], 'keydown')));
        _el_4[$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_4_5], 'resetOutline')));
        _el_4[$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_4_5], 'onMouseInteraction')));
        _el_4[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_4_5], 'onMouseInteraction')));
        _el_4[$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_4_5], 'onFocus')));
        _el_6[$addEventListener]("keyup", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyUp')));
        _el_6[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_6_5], 'keydown')));
        _el_6[$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_6_5], 'resetOutline')));
        _el_6[$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_6_5], 'onMouseInteraction')));
        _el_6[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_6_5], 'onMouseInteraction')));
        _el_6[$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_6_5], 'onFocus')));
        _ctx.input = this[_MaterialInputComponent_0_9];
        this.init(C4 || CT.C4, JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1, subscription_2, subscription_3]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (dart.notNull(nodeIndex) <= 2) {
          if (token === dart.wrapType(DeferredValidatorL())) {
            return this[_DeferredValidator_0_5];
          }
          if (token === (C5 || CT.C5)) {
            return this[_NgValidators_0_6];
          }
          if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
            return this[_NgModel_0_7];
          }
          if (token === dart.wrapType(MaterialInputComponentL()) || token === dart.wrapType(BaseMaterialInputL()) || token === dart.wrapType(ReferenceDirectiveL()) || token === dart.wrapType(FocusableL()) || token === dart.wrapType(HasDisabledL())) {
            return this[_MaterialInputComponent_0_9];
          }
        }
        if (3 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
          if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(DropdownHandleL())) {
            return this[_MaterialPopupComponent_3_8];
          }
          if (token === dart.wrapType(PopupRefL())) {
            return this[_PopupRef_3_11];
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
        let local_input = this[_PopupSourceDirective_0_14];
        changed = false;
        this[_NgModel_0_7].model = _ctx.inputText;
        this[_NgModel_0_7].ngAfterChanges();
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
          this[_NgModel_0_7].ngOnInit();
        }
        changed = false;
        if (firstCheck) {
          this[_MaterialInputComponent_0_9].inputAriaHasPopup = "listbox";
          changed = true;
          this[_MaterialInputComponent_0_9].inputAriaAutocomplete = "list";
          changed = true;
        }
        let currVal_2 = _ctx.label;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_MaterialInputComponent_0_9].label = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = _ctx.ariaLabel;
        if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_MaterialInputComponent_0_9].inputAriaLabel = currVal_3;
          changed = true;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = _ctx.maxCount;
        if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          this[_MaterialInputComponent_0_9].maxCount = currVal_4;
          changed = true;
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.displayBottomPanel;
        if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          this[_MaterialInputComponent_0_9].displayBottomPanel = currVal_5;
          changed = true;
          this[_expr_5] = currVal_5;
        }
        let currVal_6 = _ctx.floatingLabel;
        if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
          this[_MaterialInputComponent_0_9].floatingLabel = currVal_6;
          changed = true;
          this[_expr_6] = currVal_6;
        }
        let currVal_7 = _ctx.errorText;
        if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
          this[_MaterialInputComponent_0_9].error = currVal_7;
          changed = true;
          this[_expr_7] = currVal_7;
        }
        let currVal_8 = _ctx.hintText;
        if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
          this[_MaterialInputComponent_0_9].hintText = currVal_8;
          changed = true;
          this[_expr_8] = currVal_8;
        }
        let currVal_9 = _ctx.requiredErrorMsg;
        if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
          this[_MaterialInputComponent_0_9].requiredErrorMsg = currVal_9;
          changed = true;
          this[_expr_9] = currVal_9;
        }
        let currVal_10 = _ctx.checkValid;
        if (dart.test(app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
          this[_MaterialInputComponent_0_9].checkValid = StringLToLStringL().as(currVal_10);
          changed = true;
          this[_expr_10] = currVal_10;
        }
        let currVal_11 = _ctx.characterCounter;
        if (dart.test(app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
          this[_MaterialInputComponent_0_9].characterCounter = StringLToLintL().as(currVal_11);
          changed = true;
          this[_expr_11] = currVal_11;
        }
        let currVal_12 = _ctx.disabled;
        if (dart.test(app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
          this[_MaterialInputComponent_0_9].disabled = currVal_12;
          changed = true;
          this[_expr_12] = currVal_12;
        }
        let currVal_13 = _ctx.showHintOnlyOnFocus;
        if (dart.test(app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
          this[_MaterialInputComponent_0_9].showHintOnlyOnFocus = currVal_13;
          changed = true;
          this[_expr_13] = currVal_13;
        }
        let currVal_14 = _ctx.required;
        if (dart.test(app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
          this[_MaterialInputComponent_0_9].required = currVal_14;
          changed = true;
          this[_expr_14] = currVal_14;
        }
        let currVal_15 = _ctx.leadingGlyph;
        if (dart.test(app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
          this[_MaterialInputComponent_0_9].leadingGlyph = currVal_15;
          changed = true;
          this[_expr_15] = currVal_15;
        }
        let currVal_16 = _ctx.trailingGlyph;
        if (dart.test(app_view_utils.checkBinding(this[_expr_16], currVal_16))) {
          this[_MaterialInputComponent_0_9].trailingGlyph = currVal_16;
          changed = true;
          this[_expr_16] = currVal_16;
        }
        let currVal_17 = dart.test(_ctx.showPopup) ? _ctx.popupId : null;
        if (dart.test(app_view_utils.checkBinding(this[_expr_17], currVal_17))) {
          this[_MaterialInputComponent_0_9].inputAriaOwns = currVal_17;
          changed = true;
          this[_expr_17] = currVal_17;
        }
        let currVal_18 = dart.test(_ctx.showPopup) ? _ctx.activeModel.activeId : null;
        if (dart.test(app_view_utils.checkBinding(this[_expr_18], currVal_18))) {
          this[_MaterialInputComponent_0_9].inputAriaActivedescendent = currVal_18;
          changed = true;
          this[_expr_18] = currVal_18;
        }
        let currVal_20 = _ctx.showPopup;
        if (dart.test(app_view_utils.checkBinding(this[_expr_20], currVal_20))) {
          this[_MaterialInputComponent_0_9].inputAriaExpanded = currVal_20;
          changed = true;
          this[_expr_20] = currVal_20;
        }
        let currVal_22 = _ctx.leadingText;
        if (dart.test(app_view_utils.checkBinding(this[_expr_22], currVal_22))) {
          this[_MaterialInputComponent_0_9].leadingText = currVal_22;
          changed = true;
          this[_expr_22] = currVal_22;
        }
        let currVal_23 = _ctx.trailingText;
        if (dart.test(app_view_utils.checkBinding(this[_expr_23], currVal_23))) {
          this[_MaterialInputComponent_0_9].trailingText = currVal_23;
          changed = true;
          this[_expr_23] = currVal_23;
        }
        let currVal_24 = _ctx.rightAlign;
        if (dart.test(app_view_utils.checkBinding(this[_expr_24], currVal_24))) {
          this[_MaterialInputComponent_0_9].rightAlign = currVal_24;
          changed = true;
          this[_expr_24] = currVal_24;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        if (firstCheck) {
          this[_PopupSourceDirective_0_14].alignY = "after";
        }
        this[_NgIf_2_9].ngIf = _ctx.showClearIcon;
        changed = false;
        if (firstCheck) {
          this[_MaterialPopupComponent_3_8].trackLayoutChanges = true;
          changed = true;
        }
        let currVal_28 = _ctx.autoDismiss;
        if (dart.test(app_view_utils.checkBinding(this[_expr_28], currVal_28))) {
          this[_MaterialPopupComponent_3_8].autoDismiss = currVal_28;
          changed = true;
          this[_expr_28] = currVal_28;
        }
        let currVal_29 = _ctx.enforceSpaceConstraints;
        if (dart.test(app_view_utils.checkBinding(this[_expr_29], currVal_29))) {
          this[_MaterialPopupComponent_3_8].enforceSpaceConstraints = currVal_29;
          changed = true;
          this[_expr_29] = currVal_29;
        }
        let currVal_30 = _ctx.popupMatchInputWidth;
        if (dart.test(app_view_utils.checkBinding(this[_expr_30], currVal_30))) {
          this[_MaterialPopupComponent_3_8].matchMinSourceWidth = currVal_30;
          changed = true;
          this[_expr_30] = currVal_30;
        }
        let currVal_31 = _ctx.popupPositions;
        if (dart.test(app_view_utils.checkBinding(this[_expr_31], currVal_31))) {
          this[_MaterialPopupComponent_3_8].preferredPositions = currVal_31;
          changed = true;
          this[_expr_31] = currVal_31;
        }
        let currVal_32 = local_input;
        if (dart.test(app_view_utils.checkBinding(this[_expr_32], currVal_32))) {
          this[_MaterialPopupComponent_3_8].source = currVal_32;
          changed = true;
          this[_expr_32] = currVal_32;
        }
        let currVal_34 = _ctx.constrainToViewport;
        if (dart.test(app_view_utils.checkBinding(this[_expr_34], currVal_34))) {
          this[_MaterialPopupComponent_3_8].constrainToViewport = currVal_34;
          changed = true;
          this[_expr_34] = currVal_34;
        }
        let currVal_35 = _ctx.showPopup;
        if (dart.test(app_view_utils.checkBinding(this[_expr_35], currVal_35))) {
          this[_MaterialPopupComponent_3_8].visible = currVal_35;
          changed = true;
          this[_expr_35] = currVal_35;
        }
        let currVal_36 = _ctx.slide;
        if (dart.test(app_view_utils.checkBinding(this[_expr_36], currVal_36))) {
          this[_MaterialPopupComponent_3_8].slide = currVal_36;
          changed = true;
          this[_expr_36] = currVal_36;
        }
        if (changed) {
          this[_compView_3].markAsCheckOnce();
        }
        this[_appEl_2].detectChangesInNestedViews();
        this[_appEl_3].detectChangesInNestedViews();
        this[_appEl_5].detectChangesInNestedViews();
        if (firstCheck) {
          if (_ctx.inputId != null) {
            dom_helpers.setProperty(this[_el_0], "id", _ctx.inputId);
          }
        }
        let currVal_27 = interpolate.interpolateString1("selections ", _ctx.popupShadowCssClass, "");
        if (dart.test(app_view_utils.checkBinding(this[_expr_27], currVal_27))) {
          this[_compView_3].updateChildClassNonHtml(this[_el_3], currVal_27);
          this[_expr_27] = currVal_27;
        }
        this[_compView_3].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
        this[_compView_3].detectChanges();
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          if (firstCheck) {
            this[_MaterialInputComponent_0_9].ngAfterViewInit();
            this[_PopupSourceDirective_0_14].ngAfterViewInit();
            this[_MaterialPopupComponent_3_8].ngAfterViewInit();
          }
        }
      }
      destroyInternal() {
        this[_appEl_2].destroyNestedViews();
        this[_appEl_3].destroyNestedViews();
        this[_appEl_5].destroyNestedViews();
        this[_compView_0].destroyInternalState();
        this[_compView_3].destroyInternalState();
        this[_MaterialInputComponent_0_9].ngOnDestroy();
        this[_MaterialInputDefaultValueAccessor_0_11].ngOnDestroy();
        this[_PopupSourceDirective_0_14].ngOnDestroy();
        this[_CachingDeferredContentDirective_5_9].ngOnDestroy();
        this[_MaterialPopupComponent_3_8].ngOnDestroy();
      }
      [_handle_ngModelChange_0_0]($36event) {
        let _ctx = this.ctx;
        _ctx.inputText = StringL().as($36event);
        _ctx.showPopup = true;
      }
      [_handle_click_0_1]($36event) {
        let _ctx = this.ctx;
        _ctx.showPopup = true;
        dart.dsend($36event, 'stopPropagation', []);
      }
      [_handle_visibleChange_3_0]($36event) {
        let _ctx = this.ctx;
        _ctx.showPopup = boolL().as($36event);
      }
      initComponentStyles() {
        let styles = material_auto_suggest_input$46template.ViewMaterialAutoSuggestInputComponent0._componentStyles;
        if (styles == null) {
          material_auto_suggest_input$46template.ViewMaterialAutoSuggestInputComponent0._componentStyles = styles = material_auto_suggest_input$46template.ViewMaterialAutoSuggestInputComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_auto_suggest_input$46template.styles$MaterialAutoSuggestInputComponent, material_auto_suggest_input$46template.ViewMaterialAutoSuggestInputComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialAutoSuggestInputComponent0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_DeferredValidator_0_5] = null;
      this[_NgValidators_0_6] = null;
      this[_NgModel_0_7] = null;
      this[_MaterialInputComponent_0_9] = null;
      this[_MaterialInputDefaultValueAccessor_0_11] = null;
      this[_PopupSourceDirective_0_14] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      this[_compView_3] = null;
      this[_appEl_3] = null;
      this[_MaterialPopupComponent_3_8] = null;
      this[__PopupRef_3_11] = null;
      this[__PopupHierarchy_3_12] = null;
      this[_KeyboardOnlyFocusIndicatorDirective_4_5] = null;
      this[_appEl_5] = null;
      this[_CachingDeferredContentDirective_5_9] = null;
      this[_KeyboardOnlyFocusIndicatorDirective_6_5] = null;
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
      this[_expr_17] = null;
      this[_expr_18] = null;
      this[_expr_20] = null;
      this[_expr_22] = null;
      this[_expr_23] = null;
      this[_expr_24] = null;
      this[_expr_27] = null;
      this[_expr_28] = null;
      this[_expr_29] = null;
      this[_expr_30] = null;
      this[_expr_31] = null;
      this[_expr_32] = null;
      this[_expr_34] = null;
      this[_expr_35] = null;
      this[_expr_36] = null;
      this[_el_0] = null;
      this[_el_3] = null;
      ViewMaterialAutoSuggestInputComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootEl = HtmlElementL().as(html.document[$createElement]("material-auto-suggest-input"));
    }).prototype = ViewMaterialAutoSuggestInputComponent0.prototype;
    dart.addTypeTests(ViewMaterialAutoSuggestInputComponent0);
    ViewMaterialAutoSuggestInputComponent0.prototype[_is_ViewMaterialAutoSuggestInputComponent0_default] = true;
    dart.addTypeCaches(ViewMaterialAutoSuggestInputComponent0);
    dart.setMethodSignature(ViewMaterialAutoSuggestInputComponent0, () => ({
      __proto__: dart.getMethods(ViewMaterialAutoSuggestInputComponent0.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
      [_handle_ngModelChange_0_0]: dart.fnType(dart.void, [dart.dynamic]),
      [_handle_click_0_1]: dart.fnType(dart.void, [dart.dynamic]),
      [_handle_visibleChange_3_0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setGetterSignature(ViewMaterialAutoSuggestInputComponent0, () => ({
      __proto__: dart.getGetters(ViewMaterialAutoSuggestInputComponent0.__proto__),
      [_PopupRef_3_11]: dart.dynamic,
      [_PopupHierarchy_3_12]: dart.dynamic
    }));
    dart.setLibraryUri(ViewMaterialAutoSuggestInputComponent0, L0);
    dart.setFieldSignature(ViewMaterialAutoSuggestInputComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialAutoSuggestInputComponent0.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_input$46template.ViewMaterialInputComponent0)),
      [_DeferredValidator_0_5]: dart.fieldType(dart.legacy(deferred_validator.DeferredValidator)),
      [_NgValidators_0_6]: dart.fieldType(dart.legacy(core.List)),
      [_NgModel_0_7]: dart.fieldType(dart.legacy(ng_model.NgModel)),
      [_MaterialInputComponent_0_9]: dart.fieldType(dart.legacy(material_input.MaterialInputComponent)),
      [_MaterialInputDefaultValueAccessor_0_11]: dart.fieldType(dart.legacy(material_input_default_value_accessor.MaterialInputDefaultValueAccessor)),
      [_PopupSourceDirective_0_14]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
      [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_compView_3]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
      [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_MaterialPopupComponent_3_8]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
      [__PopupRef_3_11]: dart.fieldType(dart.dynamic),
      [__PopupHierarchy_3_12]: dart.fieldType(dart.dynamic),
      [_KeyboardOnlyFocusIndicatorDirective_4_5]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
      [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_CachingDeferredContentDirective_5_9]: dart.fieldType(dart.legacy(deferred_content.CachingDeferredContentDirective)),
      [_KeyboardOnlyFocusIndicatorDirective_6_5]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
      [_expr_2]: dart.fieldType(dart.legacy(core.String)),
      [_expr_3]: dart.fieldType(dart.legacy(core.String)),
      [_expr_4]: dart.fieldType(dart.legacy(core.int)),
      [_expr_5]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_6]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_7]: dart.fieldType(dart.legacy(core.String)),
      [_expr_8]: dart.fieldType(dart.dynamic),
      [_expr_9]: dart.fieldType(dart.legacy(core.String)),
      [_expr_10]: dart.fieldType(dart.dynamic),
      [_expr_11]: dart.fieldType(dart.dynamic),
      [_expr_12]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_13]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_14]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_15]: dart.fieldType(dart.legacy(core.String)),
      [_expr_16]: dart.fieldType(dart.legacy(core.String)),
      [_expr_17]: dart.fieldType(dart.legacy(core.String)),
      [_expr_18]: dart.fieldType(dart.legacy(core.String)),
      [_expr_20]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_22]: dart.fieldType(dart.legacy(core.String)),
      [_expr_23]: dart.fieldType(dart.legacy(core.String)),
      [_expr_24]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_27]: dart.fieldType(dart.legacy(core.String)),
      [_expr_28]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_29]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_30]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_31]: dart.fieldType(dart.dynamic),
      [_expr_32]: dart.fieldType(dart.dynamic),
      [_expr_34]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_35]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_36]: dart.fieldType(dart.legacy(core.String)),
      [_el_0]: dart.fieldType(dart.legacy(html.Element)),
      [_el_3]: dart.fieldType(dart.legacy(html.Element))
    }));
    return ViewMaterialAutoSuggestInputComponent0;
  });
  material_auto_suggest_input$46template.ViewMaterialAutoSuggestInputComponent0 = material_auto_suggest_input$46template.ViewMaterialAutoSuggestInputComponent0$();
  dart.defineLazy(material_auto_suggest_input$46template.ViewMaterialAutoSuggestInputComponent0, {
    /*material_auto_suggest_input$46template.ViewMaterialAutoSuggestInputComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dart.addTypeTests(material_auto_suggest_input$46template.ViewMaterialAutoSuggestInputComponent0, _is_ViewMaterialAutoSuggestInputComponent0_default);
  var _appEl_0 = dart.privateName(material_auto_suggest_input$46template, "_appEl_0");
  var _ButtonDirective_0_8 = dart.privateName(material_auto_suggest_input$46template, "_ButtonDirective_0_8");
  var _KeyboardOnlyFocusIndicatorDirective_0_9 = dart.privateName(material_auto_suggest_input$46template, "_KeyboardOnlyFocusIndicatorDirective_0_9");
  var _MaterialIconComponent_0_10 = dart.privateName(material_auto_suggest_input$46template, "_MaterialIconComponent_0_10");
  var _MaterialTooltipDirective_0_11 = dart.privateName(material_auto_suggest_input$46template, "_MaterialTooltipDirective_0_11");
  var _StopPropagationDirective_0_12 = dart.privateName(material_auto_suggest_input$46template, "_StopPropagationDirective_0_12");
  var __TooltipController_0_13 = dart.privateName(material_auto_suggest_input$46template, "__TooltipController_0_13");
  var _expr_0 = dart.privateName(material_auto_suggest_input$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_auto_suggest_input$46template, "_expr_1");
  var _TooltipController_0_13 = dart.privateName(material_auto_suggest_input$46template, "_TooltipController_0_13");
  const _is__ViewMaterialAutoSuggestInputComponent1_default = Symbol('_is__ViewMaterialAutoSuggestInputComponent1_default');
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent1$ = dart.generic(T => {
    class _ViewMaterialAutoSuggestInputComponent1 extends app_view.AppView$(dart.legacy(material_auto_suggest_input.MaterialAutoSuggestInputComponent$(dart.legacy(T)))) {
      get [_TooltipController_0_13]() {
        if (this[__TooltipController_0_13] == null) {
          this[__TooltipController_0_13] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(TooltipControllerL(), dart.wrapType(TooltipControllerL()), dart.fn(() => module.createTooltipController(TooltipControllerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentView.viewData.parentIndex)), DisposerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentView.viewData.parentIndex))), VoidToTooltipControllerL())) : module.createTooltipController(TooltipControllerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentView.viewData.parentIndex)), DisposerL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentView.viewData.parentIndex)));
        }
        return this[__TooltipController_0_13];
      }
      build() {
        let _ctx = this.ctx;
        this[_compView_0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
        this.updateChildClassNonHtml(this[_el_0], "clear-icon");
        dom_helpers.setAttribute(this[_el_0], "icon", "clear");
        dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
        dom_helpers.setAttribute(this[_el_0], "stopPropagation", "");
        this.addShimC(HtmlElementL().as(this[_el_0]));
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, this[_el_0]);
        this[_ButtonDirective_0_8] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
        this[_KeyboardOnlyFocusIndicatorDirective_0_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex)));
        this[_MaterialIconComponent_0_10] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_0]));
        this[_MaterialTooltipDirective_0_11] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTooltipDirectiveL(), dart.wrapType(MaterialTooltipDirectiveL()), dart.fn(() => new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.viewData.parentIndex)), this[_appEl_0], HtmlElementL().as(this[_el_0]), this[_appEl_0], this[_compView_0], WindowL().as(this.parentView.parentView.injectorGet(dart.wrapType(WindowL()), this.parentView.viewData.parentIndex)), null, null), VoidToMaterialTooltipDirectiveL())) : new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.viewData.parentIndex)), this[_appEl_0], HtmlElementL().as(this[_el_0]), this[_appEl_0], this[_compView_0], WindowL().as(this.parentView.parentView.injectorGet(dart.wrapType(WindowL()), this.parentView.viewData.parentIndex)), null, null);
        this[_StopPropagationDirective_0_12] = new stop_propagation.StopPropagationDirective.new(this[_el_0]);
        this[_compView_0].create0(this[_MaterialIconComponent_0_10]);
        this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_click_0_1)));
        this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_8].instance, 'handleKeyPress')));
        this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_9], 'keydown')));
        this[_el_0][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_9], 'resetOutline')));
        this[_el_0][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_9], 'onMouseInteraction')));
        this[_el_0][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_9], 'onFocus')));
        let subscription_0 = this[_ButtonDirective_0_8].instance.trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'onClearIcon')));
        this.init(JSArrayOfObjectL().of([this[_appEl_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (0 === nodeIndex) {
          if (token === dart.wrapType(ButtonDirectiveL())) {
            return this[_ButtonDirective_0_8].instance;
          }
          if (token === dart.wrapType(TooltipControllerL())) {
            return this[_TooltipController_0_13];
          }
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        let currVal_1 = _ctx.disabled;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_ButtonDirective_0_8].instance.disabled = currVal_1;
          this[_expr_1] = currVal_1;
        }
        changed = false;
        if (firstCheck) {
          this[_MaterialIconComponent_0_10].icon = "clear";
          changed = true;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        let currVal_3 = _ctx.clearIconTooltip;
        if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_MaterialTooltipDirective_0_11].text = currVal_3;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = _ctx.hasClearIconTooltip;
        if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          this[_MaterialTooltipDirective_0_11].canShow = currVal_4;
          this[_expr_4] = currVal_4;
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
          this[_MaterialTooltipDirective_0_11].ngOnInit();
        }
        this[_appEl_0].detectChangesInNestedViews();
        let currVal_0 = _ctx.clearIconTooltip;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_0);
          this[_expr_0] = currVal_0;
        }
        this[_ButtonDirective_0_8].detectHostChanges(this[_compView_0], this[_el_0]);
        this[_compView_0].detectChanges();
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          if (firstCheck) {
            this[_MaterialTooltipDirective_0_11].ngAfterViewInit();
          }
        }
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_compView_0].destroyInternalState();
        this[_MaterialTooltipDirective_0_11].ngOnDestroy();
        this[_StopPropagationDirective_0_12].ngOnDestroy();
      }
      [_handle_click_0_1]($36event) {
        this[_ButtonDirective_0_8].instance.handleClick(MouseEventL().as($36event));
        this[_KeyboardOnlyFocusIndicatorDirective_0_9].onMouseInteraction();
      }
    }
    (_ViewMaterialAutoSuggestInputComponent1.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_appEl_0] = null;
      this[_ButtonDirective_0_8] = null;
      this[_KeyboardOnlyFocusIndicatorDirective_0_9] = null;
      this[_MaterialIconComponent_0_10] = null;
      this[_MaterialTooltipDirective_0_11] = null;
      this[_StopPropagationDirective_0_12] = null;
      this[__TooltipController_0_13] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_el_0] = null;
      _ViewMaterialAutoSuggestInputComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialAutoSuggestInputComponent1.prototype;
    dart.addTypeTests(_ViewMaterialAutoSuggestInputComponent1);
    _ViewMaterialAutoSuggestInputComponent1.prototype[_is__ViewMaterialAutoSuggestInputComponent1_default] = true;
    dart.addTypeCaches(_ViewMaterialAutoSuggestInputComponent1);
    dart.setMethodSignature(_ViewMaterialAutoSuggestInputComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialAutoSuggestInputComponent1.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
      [_handle_click_0_1]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setGetterSignature(_ViewMaterialAutoSuggestInputComponent1, () => ({
      __proto__: dart.getGetters(_ViewMaterialAutoSuggestInputComponent1.__proto__),
      [_TooltipController_0_13]: dart.dynamic
    }));
    dart.setLibraryUri(_ViewMaterialAutoSuggestInputComponent1, L0);
    dart.setFieldSignature(_ViewMaterialAutoSuggestInputComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialAutoSuggestInputComponent1.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_ButtonDirective_0_8]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
      [_KeyboardOnlyFocusIndicatorDirective_0_9]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
      [_MaterialIconComponent_0_10]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
      [_MaterialTooltipDirective_0_11]: dart.fieldType(dart.legacy(tooltip.MaterialTooltipDirective)),
      [_StopPropagationDirective_0_12]: dart.fieldType(dart.legacy(stop_propagation.StopPropagationDirective)),
      [__TooltipController_0_13]: dart.fieldType(dart.dynamic),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_3]: dart.fieldType(dart.legacy(core.String)),
      [_expr_4]: dart.fieldType(dart.legacy(core.bool)),
      [_el_0]: dart.fieldType(dart.legacy(html.Element))
    }));
    return _ViewMaterialAutoSuggestInputComponent1;
  });
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent1 = material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent1$();
  dart.addTypeTests(material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent1, _is__ViewMaterialAutoSuggestInputComponent1_default);
  var _FocusTrapComponent_0_5 = dart.privateName(material_auto_suggest_input$46template, "_FocusTrapComponent_0_5");
  var _appEl_1 = dart.privateName(material_auto_suggest_input$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(material_auto_suggest_input$46template, "_NgIf_1_9");
  var _NgIf_3_9 = dart.privateName(material_auto_suggest_input$46template, "_NgIf_3_9");
  const _is__ViewMaterialAutoSuggestInputComponent2_default = Symbol('_is__ViewMaterialAutoSuggestInputComponent2_default');
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent2$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialAutoSuggestInputComponent2 extends app_view.AppView$(dart.legacy(material_auto_suggest_input.MaterialAutoSuggestInputComponent$(dart.legacy(T)))) {
      build() {
        let _ctx = this.ctx;
        this[_compView_0] = new focus_trap$46template.ViewFocusTrapComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        this.addShimC(_el_0);
        this[_FocusTrapComponent_0_5] = new focus_trap.FocusTrapComponent.new();
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent3(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.createAnchor();
        this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent4(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        let _anchor_3 = dom_helpers.createAnchor();
        this[_appEl_3] = new view_container.ViewContainer.new(3, 0, this, _anchor_3);
        let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], dart.fn((parentView, parentIndex) => material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent5(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
        this[_compView_0].create(this[_FocusTrapComponent_0_5], JSArrayOfObjectL().of([JSArrayOfViewContainerL().of([this[_appEl_1], this[_appEl_2], this[_appEl_3]])]));
        _el_0[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyDown')));
        _el_0[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyPress')));
        _el_0[$addEventListener]("keyup", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyUp')));
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_1_9].ngIf = _ctx.showLoadingSpinner;
        this[_NgIf_2_9].ngIf = _ctx.showEmptyPlaceholder;
        this[_NgIf_3_9].ngIf = _ctx.hasOptions;
        this[_appEl_1].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
        this[_appEl_3].detectChangesInNestedViews();
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
        this[_appEl_2].destroyNestedViews();
        this[_appEl_3].destroyNestedViews();
        this[_compView_0].destroyInternalState();
        this[_FocusTrapComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialAutoSuggestInputComponent2.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_FocusTrapComponent_0_5] = null;
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      this[_appEl_3] = null;
      this[_NgIf_3_9] = null;
      _ViewMaterialAutoSuggestInputComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialAutoSuggestInputComponent2.prototype;
    dart.addTypeTests(_ViewMaterialAutoSuggestInputComponent2);
    _ViewMaterialAutoSuggestInputComponent2.prototype[_is__ViewMaterialAutoSuggestInputComponent2_default] = true;
    dart.addTypeCaches(_ViewMaterialAutoSuggestInputComponent2);
    dart.setLibraryUri(_ViewMaterialAutoSuggestInputComponent2, L0);
    dart.setFieldSignature(_ViewMaterialAutoSuggestInputComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialAutoSuggestInputComponent2.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(focus_trap$46template.ViewFocusTrapComponent0)),
      [_FocusTrapComponent_0_5]: dart.fieldType(dart.legacy(focus_trap.FocusTrapComponent)),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
    }));
    return _ViewMaterialAutoSuggestInputComponent2;
  });
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent2 = material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent2$();
  dart.addTypeTests(material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent2, _is__ViewMaterialAutoSuggestInputComponent2_default);
  var _compView_1 = dart.privateName(material_auto_suggest_input$46template, "_compView_1");
  var _MaterialSpinnerComponent_1_5 = dart.privateName(material_auto_suggest_input$46template, "_MaterialSpinnerComponent_1_5");
  const _is__ViewMaterialAutoSuggestInputComponent3_default = Symbol('_is__ViewMaterialAutoSuggestInputComponent3_default');
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent3$ = dart.generic(T => {
    class _ViewMaterialAutoSuggestInputComponent3 extends app_view.AppView$(dart.legacy(material_auto_suggest_input.MaterialAutoSuggestInputComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        this.updateChildClass(HtmlElementL().as(_el_0), "loading");
        this.addShimC(HtmlElementL().as(_el_0));
        this[_compView_1] = new material_spinner$46template.ViewMaterialSpinnerComponent0.new(this, 1);
        let _el_1 = this[_compView_1].rootEl;
        _el_0[$append](_el_1);
        this.addShimC(_el_1);
        this[_MaterialSpinnerComponent_1_5] = new material_spinner.MaterialSpinnerComponent.new();
        this[_compView_1].create0(this[_MaterialSpinnerComponent_1_5]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        this[_compView_1].detectChanges();
      }
      destroyInternal() {
        this[_compView_1].destroyInternalState();
      }
    }
    (_ViewMaterialAutoSuggestInputComponent3.new = function(parentView, parentIndex) {
      this[_compView_1] = null;
      this[_MaterialSpinnerComponent_1_5] = null;
      _ViewMaterialAutoSuggestInputComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialAutoSuggestInputComponent3.prototype;
    dart.addTypeTests(_ViewMaterialAutoSuggestInputComponent3);
    _ViewMaterialAutoSuggestInputComponent3.prototype[_is__ViewMaterialAutoSuggestInputComponent3_default] = true;
    dart.addTypeCaches(_ViewMaterialAutoSuggestInputComponent3);
    dart.setLibraryUri(_ViewMaterialAutoSuggestInputComponent3, L0);
    dart.setFieldSignature(_ViewMaterialAutoSuggestInputComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialAutoSuggestInputComponent3.__proto__),
      [_compView_1]: dart.fieldType(dart.legacy(material_spinner$46template.ViewMaterialSpinnerComponent0)),
      [_MaterialSpinnerComponent_1_5]: dart.fieldType(dart.legacy(material_spinner.MaterialSpinnerComponent))
    }));
    return _ViewMaterialAutoSuggestInputComponent3;
  });
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent3 = material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent3$();
  dart.addTypeTests(material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent3, _is__ViewMaterialAutoSuggestInputComponent3_default);
  var _textBinding_1 = dart.privateName(material_auto_suggest_input$46template, "_textBinding_1");
  const _is__ViewMaterialAutoSuggestInputComponent4_default = Symbol('_is__ViewMaterialAutoSuggestInputComponent4_default');
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent4$ = dart.generic(T => {
    class _ViewMaterialAutoSuggestInputComponent4 extends app_view.AppView$(dart.legacy(material_auto_suggest_input.MaterialAutoSuggestInputComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        this.updateChildClass(HtmlElementL().as(_el_0), "empty");
        this.addShimC(HtmlElementL().as(_el_0));
        _el_0[$append](this[_textBinding_1].element);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.emptyPlaceholder));
      }
    }
    (_ViewMaterialAutoSuggestInputComponent4.new = function(parentView, parentIndex) {
      this[_textBinding_1] = new text_binding.TextBinding.new();
      _ViewMaterialAutoSuggestInputComponent4.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialAutoSuggestInputComponent4.prototype;
    dart.addTypeTests(_ViewMaterialAutoSuggestInputComponent4);
    _ViewMaterialAutoSuggestInputComponent4.prototype[_is__ViewMaterialAutoSuggestInputComponent4_default] = true;
    dart.addTypeCaches(_ViewMaterialAutoSuggestInputComponent4);
    dart.setLibraryUri(_ViewMaterialAutoSuggestInputComponent4, L0);
    dart.setFieldSignature(_ViewMaterialAutoSuggestInputComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialAutoSuggestInputComponent4.__proto__),
      [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
    }));
    return _ViewMaterialAutoSuggestInputComponent4;
  });
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent4 = material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent4$();
  dart.addTypeTests(material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent4, _is__ViewMaterialAutoSuggestInputComponent4_default);
  var _KeyboardOnlyFocusIndicatorDirective_0_5 = dart.privateName(material_auto_suggest_input$46template, "_KeyboardOnlyFocusIndicatorDirective_0_5");
  var _MaterialListComponent_0_6 = dart.privateName(material_auto_suggest_input$46template, "_MaterialListComponent_0_6");
  var _NgFor_1_9 = dart.privateName(material_auto_suggest_input$46template, "_NgFor_1_9");
  var _handle_mouseleave_0_0 = dart.privateName(material_auto_suggest_input$46template, "_handle_mouseleave_0_0");
  const _is__ViewMaterialAutoSuggestInputComponent5_default = Symbol('_is__ViewMaterialAutoSuggestInputComponent5_default');
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent5$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialAutoSuggestInputComponent5 extends app_view.AppView$(dart.legacy(material_auto_suggest_input.MaterialAutoSuggestInputComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new material_list$46template.ViewMaterialListComponent0.new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        this.updateChildClassNonHtml(this[_el_0], "suggestion-list");
        dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
        dom_helpers.setAttribute(this[_el_0], "role", "listbox");
        this[_el_0].tabIndex = -1;
        this.addShimC(HtmlElementL().as(this[_el_0]));
        this[_KeyboardOnlyFocusIndicatorDirective_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.viewData.parentIndex)));
        this[_MaterialListComponent_0_6] = new material_list.MaterialListComponent.new();
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent6(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
        this[_compView_0].create(this[_MaterialListComponent_0_6], JSArrayOfObjectL().of([JSArrayOfViewContainerL().of([this[_appEl_1]])]));
        this[_el_0][$addEventListener]("mouseleave", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_mouseleave_0_0)));
        this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'keydown')));
        this[_el_0][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
        this[_el_0][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'onMouseInteraction')));
        this[_el_0][$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'onMouseInteraction')));
        this[_el_0][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'onFocus')));
        this.init1(this[_el_0]);
      }
      detectChangesInternal() {
        let t0;
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
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
        if (firstCheck) {
          if (_ctx.trackByIndexFn != null) {
            this[_NgFor_1_9].ngForTrackBy = intLAnddynamicToLObjectL().as(_ctx.trackByIndexFn);
          }
        }
        let currVal_5 = _ctx.visibleSuggestionGroups;
        if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          this[_NgFor_1_9].ngForOf = currVal_5;
          this[_expr_5] = currVal_5;
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_1_9].ngDoCheck();
        }
        this[_appEl_1].detectChangesInNestedViews();
        if (firstCheck) {
          if (_ctx.inputId != null) {
            dom_helpers.updateAttribute(this[_el_0], "aria-labelledby", _ctx.inputId);
          }
          if (_ctx.popupId != null) {
            dom_helpers.setProperty(this[_el_0], "id", _ctx.popupId);
          }
        }
        let currVal_0 = _ctx.isMultiSelect;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          dom_helpers.updateAttribute(this[_el_0], "aria-multiselectable", (t0 = currVal_0, t0 == null ? null : dart.toString(t0)));
          this[_expr_0] = currVal_0;
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
        this[_compView_0].destroyInternalState();
      }
      [_handle_mouseleave_0_0]($36event) {
        let _ctx = this.ctx;
        _ctx.activeModel.activate(null);
      }
    }
    (_ViewMaterialAutoSuggestInputComponent5.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_KeyboardOnlyFocusIndicatorDirective_0_5] = null;
      this[_MaterialListComponent_0_6] = null;
      this[_appEl_1] = null;
      this[_NgFor_1_9] = null;
      this[_expr_0] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_el_0] = null;
      _ViewMaterialAutoSuggestInputComponent5.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialAutoSuggestInputComponent5.prototype;
    dart.addTypeTests(_ViewMaterialAutoSuggestInputComponent5);
    _ViewMaterialAutoSuggestInputComponent5.prototype[_is__ViewMaterialAutoSuggestInputComponent5_default] = true;
    dart.addTypeCaches(_ViewMaterialAutoSuggestInputComponent5);
    dart.setMethodSignature(_ViewMaterialAutoSuggestInputComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialAutoSuggestInputComponent5.__proto__),
      [_handle_mouseleave_0_0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialAutoSuggestInputComponent5, L0);
    dart.setFieldSignature(_ViewMaterialAutoSuggestInputComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialAutoSuggestInputComponent5.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_list$46template.ViewMaterialListComponent0)),
      [_KeyboardOnlyFocusIndicatorDirective_0_5]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
      [_MaterialListComponent_0_6]: dart.fieldType(dart.legacy(material_list.MaterialListComponent)),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(dart.legacy(html.Element))
    }));
    return _ViewMaterialAutoSuggestInputComponent5;
  });
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent5 = material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent5$();
  dart.addTypeTests(material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent5, _is__ViewMaterialAutoSuggestInputComponent5_default);
  var _NgIf_0_9 = dart.privateName(material_auto_suggest_input$46template, "_NgIf_0_9");
  const _is__ViewMaterialAutoSuggestInputComponent6_default = Symbol('_is__ViewMaterialAutoSuggestInputComponent6_default');
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent6$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialAutoSuggestInputComponent6 extends app_view.AppView$(dart.legacy(material_auto_suggest_input.MaterialAutoSuggestInputComponent$(dart.legacy(T)))) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent7(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        this.init1(this[_appEl_0]);
      }
      detectChangesInternal() {
        let local_suggestionGroup = optimizations.unsafeCast(OptionGroupL(), this.locals[$_get]("$implicit"));
        this[_NgIf_0_9].ngIf = dart.test(local_suggestionGroup.isNotEmpty) || dart.test(local_suggestionGroup.hasEmptyLabel);
        this[_appEl_0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
      }
    }
    (_ViewMaterialAutoSuggestInputComponent6.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      _ViewMaterialAutoSuggestInputComponent6.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialAutoSuggestInputComponent6.prototype;
    dart.addTypeTests(_ViewMaterialAutoSuggestInputComponent6);
    _ViewMaterialAutoSuggestInputComponent6.prototype[_is__ViewMaterialAutoSuggestInputComponent6_default] = true;
    dart.addTypeCaches(_ViewMaterialAutoSuggestInputComponent6);
    dart.setLibraryUri(_ViewMaterialAutoSuggestInputComponent6, L0);
    dart.setFieldSignature(_ViewMaterialAutoSuggestInputComponent6, () => ({
      __proto__: dart.getFields(_ViewMaterialAutoSuggestInputComponent6.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
    }));
    return _ViewMaterialAutoSuggestInputComponent6;
  });
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent6 = material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent6$();
  dart.addTypeTests(material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent6, _is__ViewMaterialAutoSuggestInputComponent6_default);
  var _appEl_4 = dart.privateName(material_auto_suggest_input$46template, "_appEl_4");
  var _NgFor_4_9 = dart.privateName(material_auto_suggest_input$46template, "_NgFor_4_9");
  const _is__ViewMaterialAutoSuggestInputComponent7_default = Symbol('_is__ViewMaterialAutoSuggestInputComponent7_default');
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent7$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialAutoSuggestInputComponent7 extends app_view.AppView$(dart.legacy(material_auto_suggest_input.MaterialAutoSuggestInputComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        this.updateChildClass(HtmlElementL().as(_el_0), "list-group");
        dom_helpers.setAttribute(_el_0, "group", "");
        this.addShimC(HtmlElementL().as(_el_0));
        let _anchor_1 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent8(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        let _anchor_2 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent9(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        let _anchor_3 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_3] = new view_container.ViewContainer.new(3, 0, this, _anchor_3);
        let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], dart.fn((parentView, parentIndex) => material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent10(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
        let _anchor_4 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_4] = new view_container.ViewContainer.new(4, 0, this, _anchor_4);
        let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], dart.fn((parentView, parentIndex) => material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent11(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgFor_4_9] = new ng_for.NgFor.new(this[_appEl_4], _TemplateRef_4_8);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let local_suggestionGroup = optimizations.unsafeCast(OptionGroupL(), this.parentView.locals[$_get]("$implicit"));
        this[_NgIf_1_9].ngIf = dart.test(local_suggestionGroup.hasLabel) && !dart.test(_ctx.hasCustomLabelRenderer);
        this[_NgIf_2_9].ngIf = _ctx.hasCustomLabelRenderer;
        this[_NgIf_3_9].ngIf = dart.test(local_suggestionGroup.isEmpty) && dart.test(local_suggestionGroup.hasEmptyLabel);
        let currVal_3 = local_suggestionGroup;
        if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_NgFor_4_9].ngForOf = currVal_3;
          this[_expr_3] = currVal_3;
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_4_9].ngDoCheck();
        }
        this[_appEl_1].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
        this[_appEl_3].detectChangesInNestedViews();
        this[_appEl_4].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
        this[_appEl_2].destroyNestedViews();
        this[_appEl_3].destroyNestedViews();
        this[_appEl_4].destroyNestedViews();
      }
    }
    (_ViewMaterialAutoSuggestInputComponent7.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      this[_appEl_3] = null;
      this[_NgIf_3_9] = null;
      this[_appEl_4] = null;
      this[_NgFor_4_9] = null;
      this[_expr_3] = null;
      _ViewMaterialAutoSuggestInputComponent7.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialAutoSuggestInputComponent7.prototype;
    dart.addTypeTests(_ViewMaterialAutoSuggestInputComponent7);
    _ViewMaterialAutoSuggestInputComponent7.prototype[_is__ViewMaterialAutoSuggestInputComponent7_default] = true;
    dart.addTypeCaches(_ViewMaterialAutoSuggestInputComponent7);
    dart.setLibraryUri(_ViewMaterialAutoSuggestInputComponent7, L0);
    dart.setFieldSignature(_ViewMaterialAutoSuggestInputComponent7, () => ({
      __proto__: dart.getFields(_ViewMaterialAutoSuggestInputComponent7.__proto__),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_4_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_3]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialAutoSuggestInputComponent7;
  });
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent7 = material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent7$();
  dart.addTypeTests(material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent7, _is__ViewMaterialAutoSuggestInputComponent7_default);
  var _handle_mouseenter_0_0 = dart.privateName(material_auto_suggest_input$46template, "_handle_mouseenter_0_0");
  const _is__ViewMaterialAutoSuggestInputComponent8_default = Symbol('_is__ViewMaterialAutoSuggestInputComponent8_default');
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent8$ = dart.generic(T => {
    class _ViewMaterialAutoSuggestInputComponent8 extends app_view.AppView$(dart.legacy(material_auto_suggest_input.MaterialAutoSuggestInputComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(HtmlElementL().as(_el_0), "list-group-label");
        dom_helpers.setAttribute(_el_0, "label", "");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1].element);
        _el_0[$addEventListener]("mouseenter", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_mouseenter_0_0)));
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let local_suggestionGroup = optimizations.unsafeCast(OptionGroupL(), this.parentView.parentView.locals[$_get]("$implicit"));
        this[_textBinding_1].updateText(interpolate.interpolateString0(local_suggestionGroup.uiDisplayName));
      }
      [_handle_mouseenter_0_0]($36event) {
        let _ctx = this.ctx;
        _ctx.activeModel.activate(null);
      }
    }
    (_ViewMaterialAutoSuggestInputComponent8.new = function(parentView, parentIndex) {
      this[_textBinding_1] = new text_binding.TextBinding.new();
      _ViewMaterialAutoSuggestInputComponent8.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialAutoSuggestInputComponent8.prototype;
    dart.addTypeTests(_ViewMaterialAutoSuggestInputComponent8);
    _ViewMaterialAutoSuggestInputComponent8.prototype[_is__ViewMaterialAutoSuggestInputComponent8_default] = true;
    dart.addTypeCaches(_ViewMaterialAutoSuggestInputComponent8);
    dart.setMethodSignature(_ViewMaterialAutoSuggestInputComponent8, () => ({
      __proto__: dart.getMethods(_ViewMaterialAutoSuggestInputComponent8.__proto__),
      [_handle_mouseenter_0_0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialAutoSuggestInputComponent8, L0);
    dart.setFieldSignature(_ViewMaterialAutoSuggestInputComponent8, () => ({
      __proto__: dart.getFields(_ViewMaterialAutoSuggestInputComponent8.__proto__),
      [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
    }));
    return _ViewMaterialAutoSuggestInputComponent8;
  });
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent8 = material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent8$();
  dart.addTypeTests(material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent8, _is__ViewMaterialAutoSuggestInputComponent8_default);
  var _DynamicComponent_0_8 = dart.privateName(material_auto_suggest_input$46template, "_DynamicComponent_0_8");
  const _is__ViewMaterialAutoSuggestInputComponent9_default = Symbol('_is__ViewMaterialAutoSuggestInputComponent9_default');
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent9$ = dart.generic(T => {
    class _ViewMaterialAutoSuggestInputComponent9 extends app_view.AppView$(dart.legacy(material_auto_suggest_input.MaterialAutoSuggestInputComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        this.addShimC(_el_0);
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DynamicComponentL(), dart.wrapType(DynamicComponentL()), dart.fn(() => new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0], this[_appEl_0]), VoidToDynamicComponentL())) : new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0], this[_appEl_0]);
        this[_compView_0].create0(this[_DynamicComponent_0_8]);
        _el_0[$addEventListener]("mouseenter", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_mouseenter_0_0)));
        this.init1(this[_appEl_0]);
      }
      detectChangesInternal() {
        let t1, t0, t1$, t0$;
        let _ctx = this.ctx;
        let changed = false;
        let local_suggestionGroup = optimizations.unsafeCast(OptionGroupL(), this.parentView.parentView.locals[$_get]("$implicit"));
        changed = false;
        let currVal_0 = _ctx.labelRenderer != null ? (t0 = _ctx, t1 = local_suggestionGroup, t0.labelRenderer(t1)) : null;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_DynamicComponent_0_8].componentType = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.labelFactory != null ? (t0$ = _ctx, t1$ = local_suggestionGroup, t0$.labelFactory(t1$)) : null;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_DynamicComponent_0_8].componentFactory = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = local_suggestionGroup;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_DynamicComponent_0_8].value = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
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
      [_handle_mouseenter_0_0]($36event) {
        let _ctx = this.ctx;
        _ctx.activeModel.activate(null);
      }
    }
    (_ViewMaterialAutoSuggestInputComponent9.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_appEl_0] = null;
      this[_DynamicComponent_0_8] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      _ViewMaterialAutoSuggestInputComponent9.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialAutoSuggestInputComponent9.prototype;
    dart.addTypeTests(_ViewMaterialAutoSuggestInputComponent9);
    _ViewMaterialAutoSuggestInputComponent9.prototype[_is__ViewMaterialAutoSuggestInputComponent9_default] = true;
    dart.addTypeCaches(_ViewMaterialAutoSuggestInputComponent9);
    dart.setMethodSignature(_ViewMaterialAutoSuggestInputComponent9, () => ({
      __proto__: dart.getMethods(_ViewMaterialAutoSuggestInputComponent9.__proto__),
      [_handle_mouseenter_0_0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialAutoSuggestInputComponent9, L0);
    dart.setFieldSignature(_ViewMaterialAutoSuggestInputComponent9, () => ({
      __proto__: dart.getFields(_ViewMaterialAutoSuggestInputComponent9.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(dynamic_component$46template.ViewDynamicComponent0)),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_DynamicComponent_0_8]: dart.fieldType(dart.legacy(dynamic_component.DynamicComponent)),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialAutoSuggestInputComponent9;
  });
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent9 = material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent9$();
  dart.addTypeTests(material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent9, _is__ViewMaterialAutoSuggestInputComponent9_default);
  var _MaterialSelectDropdownItemComponent_0_6 = dart.privateName(material_auto_suggest_input$46template, "_MaterialSelectDropdownItemComponent_0_6");
  const _is__ViewMaterialAutoSuggestInputComponent10_default = Symbol('_is__ViewMaterialAutoSuggestInputComponent10_default');
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent10$ = dart.generic(T => {
    class _ViewMaterialAutoSuggestInputComponent10 extends app_view.AppView$(dart.legacy(material_auto_suggest_input.MaterialAutoSuggestInputComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectDropdownItemComponent0OfStringL()).new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        dom_helpers.setAttribute(_el_0, "keyboardOnlyFocusIndicator", "");
        this.addShimC(_el_0);
        this[_KeyboardOnlyFocusIndicatorDirective_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(_el_0, DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(_el_0, DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)));
        this[_MaterialSelectDropdownItemComponent_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectDropdownItemComponentLOfStringL(), dart.wrapType(MaterialSelectDropdownItemComponentL()), dart.fn(() => new (MaterialSelectDropdownItemComponentOfStringL()).new(_el_0, null, optimizations.unsafeCast(ViewMaterialAutoSuggestInputComponent0L(), this.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_3_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), IdGeneratorL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0]), VoidToMaterialSelectDropdownItemComponentLOfStringL())) : new (MaterialSelectDropdownItemComponentOfStringL()).new(_el_0, null, optimizations.unsafeCast(ViewMaterialAutoSuggestInputComponent0L(), this.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_3_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), IdGeneratorL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0]);
        this[_compView_0].create(this[_MaterialSelectDropdownItemComponent_0_6], JSArrayOfObjectL().of([C0 || CT.C0]));
        _el_0[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'keydown')));
        _el_0[$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'resetOutline')));
        _el_0[$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'onMouseInteraction')));
        _el_0[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'onMouseInteraction')));
        _el_0[$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_5], 'onFocus')));
        this.init1(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasRendererL())) && 0 === nodeIndex) {
          return this[_MaterialSelectDropdownItemComponent_0_6];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        let local_suggestionGroup = optimizations.unsafeCast(OptionGroupL(), this.parentView.parentView.locals[$_get]("$implicit"));
        if (firstCheck) {
          this[_MaterialSelectDropdownItemComponent_0_6].disabled = true;
        }
        let currVal_1 = local_suggestionGroup.emptyLabel;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_MaterialSelectDropdownItemComponent_0_6].value = currVal_1;
          this[_expr_1] = currVal_1;
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_MaterialSelectDropdownItemComponent_0_6].ngOnDestroy();
      }
    }
    (_ViewMaterialAutoSuggestInputComponent10.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_KeyboardOnlyFocusIndicatorDirective_0_5] = null;
      this[_MaterialSelectDropdownItemComponent_0_6] = null;
      this[_expr_1] = null;
      _ViewMaterialAutoSuggestInputComponent10.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialAutoSuggestInputComponent10.prototype;
    dart.addTypeTests(_ViewMaterialAutoSuggestInputComponent10);
    _ViewMaterialAutoSuggestInputComponent10.prototype[_is__ViewMaterialAutoSuggestInputComponent10_default] = true;
    dart.addTypeCaches(_ViewMaterialAutoSuggestInputComponent10);
    dart.setMethodSignature(_ViewMaterialAutoSuggestInputComponent10, () => ({
      __proto__: dart.getMethods(_ViewMaterialAutoSuggestInputComponent10.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialAutoSuggestInputComponent10, L0);
    dart.setFieldSignature(_ViewMaterialAutoSuggestInputComponent10, () => ({
      __proto__: dart.getFields(_ViewMaterialAutoSuggestInputComponent10.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(dart.legacy(core.String)))),
      [_KeyboardOnlyFocusIndicatorDirective_0_5]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
      [_MaterialSelectDropdownItemComponent_0_6]: dart.fieldType(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(core.String)))),
      [_expr_1]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialAutoSuggestInputComponent10;
  });
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent10 = material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent10$();
  dart.addTypeTests(material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent10, _is__ViewMaterialAutoSuggestInputComponent10_default);
  var _ActiveItemDirective_0_5 = dart.privateName(material_auto_suggest_input$46template, "_ActiveItemDirective_0_5");
  var _KeyboardOnlyFocusIndicatorDirective_0_6 = dart.privateName(material_auto_suggest_input$46template, "_KeyboardOnlyFocusIndicatorDirective_0_6");
  var _MaterialSelectDropdownItemComponent_0_7 = dart.privateName(material_auto_suggest_input$46template, "_MaterialSelectDropdownItemComponent_0_7");
  const _is__ViewMaterialAutoSuggestInputComponent11_default = Symbol('_is__ViewMaterialAutoSuggestInputComponent11_default');
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent11$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialSelectDropdownItemComponent0OfTL = () => (ViewMaterialSelectDropdownItemComponent0OfTL = dart.constFn(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(TL())))();
    var MaterialSelectDropdownItemComponentOfTL = () => (MaterialSelectDropdownItemComponentOfTL = dart.constFn(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(TL())))();
    var MaterialSelectDropdownItemComponentLOfTL = () => (MaterialSelectDropdownItemComponentLOfTL = dart.constFn(dart.legacy(MaterialSelectDropdownItemComponentOfTL())))();
    var VoidToMaterialSelectDropdownItemComponentLOfTL = () => (VoidToMaterialSelectDropdownItemComponentLOfTL = dart.constFn(dart.fnType(MaterialSelectDropdownItemComponentLOfTL(), [])))();
    var TLToStringL = () => (TLToStringL = dart.constFn(dart.fnType(StringL(), [TL()])))();
    var TLToLStringL = () => (TLToLStringL = dart.constFn(dart.legacy(TLToStringL())))();
    class _ViewMaterialAutoSuggestInputComponent11 extends app_view.AppView$(dart.legacy(material_auto_suggest_input.MaterialAutoSuggestInputComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectDropdownItemComponent0OfTL()).new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        this.updateChildClassNonHtml(this[_el_0], interpolate.interpolateString2("", "list-item", " ", "item", ""));
        dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
        this.addShimC(HtmlElementL().as(this[_el_0]));
        this[_ActiveItemDirective_0_5] = new active_item_directive$46template.ActiveItemDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ActiveItemDirectiveL(), dart.wrapType(ActiveItemDirectiveL()), dart.fn(() => new active_item_directive.ActiveItemDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), ModalL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMaterialAutoSuggestInputComponent0L(), this.parentView.parentView.parentView.parentView.parentView)[_PopupRef_3_11])), VoidToActiveItemDirectiveL())) : new active_item_directive.ActiveItemDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), ModalL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMaterialAutoSuggestInputComponent0L(), this.parentView.parentView.parentView.parentView.parentView)[_PopupRef_3_11])));
        this[_KeyboardOnlyFocusIndicatorDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)));
        this[_MaterialSelectDropdownItemComponent_0_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectDropdownItemComponentLOfTL(), dart.wrapType(MaterialSelectDropdownItemComponentL()), dart.fn(() => new (MaterialSelectDropdownItemComponentOfTL()).new(HtmlElementL().as(this[_el_0]), null, optimizations.unsafeCast(ViewMaterialAutoSuggestInputComponent0L(), this.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_3_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), IdGeneratorL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0]), VoidToMaterialSelectDropdownItemComponentLOfTL())) : new (MaterialSelectDropdownItemComponentOfTL()).new(HtmlElementL().as(this[_el_0]), null, optimizations.unsafeCast(ViewMaterialAutoSuggestInputComponent0L(), this.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_3_8], ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), IdGeneratorL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0]);
        this[_compView_0].create(this[_MaterialSelectDropdownItemComponent_0_7], JSArrayOfObjectL().of([C0 || CT.C0]));
        this[_el_0][$addEventListener]("mouseenter", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_mouseenter_0_0)));
        this[_el_0][$addEventListener]("mouseleave", this.eventHandler0(EventL(), dart.bind(this[_ActiveItemDirective_0_5].instance, 'onMouseLeave')));
        this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'keydown')));
        this[_el_0][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'resetOutline')));
        this[_el_0][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'onMouseInteraction')));
        this[_el_0][$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'onMouseInteraction')));
        this[_el_0][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'onFocus')));
        this.init1(this[_el_0]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasRendererL())) && 0 === nodeIndex) {
          return this[_MaterialSelectDropdownItemComponent_0_7];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let local_popup = optimizations.unsafeCast(ViewMaterialAutoSuggestInputComponent0L(), this.parentView.parentView.parentView.parentView.parentView)[_MaterialPopupComponent_3_8];
        let local_suggestion = this.locals[$_get]("$implicit");
        let currVal_0 = dart.test(local_popup.showPopup) && dart.test(_ctx.activeModel.isActive(TL().as(local_suggestion)));
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_ActiveItemDirective_0_5].instance.itemActive = currVal_0;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.isOptionDisabled(local_suggestion);
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_MaterialSelectDropdownItemComponent_0_7].disabled = currVal_1;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = _ctx.componentRenderer;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_MaterialSelectDropdownItemComponent_0_7].componentRenderer = currVal_2;
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = _ctx.factoryRenderer;
        if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_MaterialSelectDropdownItemComponent_0_7].factoryRenderer = currVal_3;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = local_suggestion;
        if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          this[_MaterialSelectDropdownItemComponent_0_7].value = TL().as(currVal_4);
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.hideCheckbox;
        if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          this[_MaterialSelectDropdownItemComponent_0_7].hideCheckbox = currVal_5;
          this[_expr_5] = currVal_5;
        }
        let currVal_6 = TLToLStringL().as(_ctx.itemRenderer);
        if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
          this[_MaterialSelectDropdownItemComponent_0_7].itemRenderer = currVal_6;
          this[_expr_6] = currVal_6;
        }
        let currVal_7 = _ctx.isMultiSelect;
        if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
          this[_MaterialSelectDropdownItemComponent_0_7].deselectOnActivate = currVal_7;
          this[_expr_7] = currVal_7;
        }
        let currVal_8 = _ctx.selection;
        if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
          this[_MaterialSelectDropdownItemComponent_0_7].selection = currVal_8;
          this[_expr_8] = currVal_8;
        }
        let currVal_9 = _ctx.closeOnActivate;
        if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
          this[_MaterialSelectDropdownItemComponent_0_7].closeOnActivate = currVal_9;
          this[_expr_9] = currVal_9;
        }
        let currVal_10 = _ctx.activeModel.id(TL().as(local_suggestion));
        if (dart.test(app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
          this[_MaterialSelectDropdownItemComponent_0_7].id = currVal_10;
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
        this[_MaterialSelectDropdownItemComponent_0_7].ngOnDestroy();
      }
      [_handle_mouseenter_0_0]($36event) {
        let local_suggestion = this.locals[$_get]("$implicit");
        let _ctx = this.ctx;
        _ctx.activeModel.activate(TL().as(local_suggestion));
        this[_ActiveItemDirective_0_5].instance.onMouseEnter();
      }
    }
    (_ViewMaterialAutoSuggestInputComponent11.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_ActiveItemDirective_0_5] = null;
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
      this[_MaterialSelectDropdownItemComponent_0_7] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_expr_6] = null;
      this[_expr_7] = null;
      this[_expr_8] = null;
      this[_expr_9] = null;
      this[_expr_10] = null;
      this[_el_0] = null;
      _ViewMaterialAutoSuggestInputComponent11.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialAutoSuggestInputComponent11.prototype;
    dart.addTypeTests(_ViewMaterialAutoSuggestInputComponent11);
    _ViewMaterialAutoSuggestInputComponent11.prototype[_is__ViewMaterialAutoSuggestInputComponent11_default] = true;
    dart.addTypeCaches(_ViewMaterialAutoSuggestInputComponent11);
    dart.setMethodSignature(_ViewMaterialAutoSuggestInputComponent11, () => ({
      __proto__: dart.getMethods(_ViewMaterialAutoSuggestInputComponent11.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
      [_handle_mouseenter_0_0]: dart.fnType(dart.void, [dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialAutoSuggestInputComponent11, L0);
    dart.setFieldSignature(_ViewMaterialAutoSuggestInputComponent11, () => ({
      __proto__: dart.getFields(_ViewMaterialAutoSuggestInputComponent11.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(dart.legacy(T)))),
      [_ActiveItemDirective_0_5]: dart.fieldType(dart.legacy(active_item_directive$46template.ActiveItemDirectiveNgCd)),
      [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
      [_MaterialSelectDropdownItemComponent_0_7]: dart.fieldType(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))),
      [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic),
      [_expr_6]: dart.fieldType(dart.dynamic),
      [_expr_7]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_8]: dart.fieldType(dart.dynamic),
      [_expr_9]: dart.fieldType(dart.dynamic),
      [_expr_10]: dart.fieldType(dart.legacy(core.String)),
      [_el_0]: dart.fieldType(dart.legacy(html.Element))
    }));
    return _ViewMaterialAutoSuggestInputComponent11;
  });
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent11 = material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent11$();
  dart.addTypeTests(material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent11, _is__ViewMaterialAutoSuggestInputComponent11_default);
  var _MaterialAutoSuggestInputComponent_0_5 = dart.privateName(material_auto_suggest_input$46template, "_MaterialAutoSuggestInputComponent_0_5");
  const _is__ViewMaterialAutoSuggestInputComponentHost0_default = Symbol('_is__ViewMaterialAutoSuggestInputComponentHost0_default');
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponentHost0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialAutoSuggestInputComponent0OfTL = () => (ViewMaterialAutoSuggestInputComponent0OfTL = dart.constFn(material_auto_suggest_input$46template.ViewMaterialAutoSuggestInputComponent0$(TL())))();
    var MaterialAutoSuggestInputComponentOfTL = () => (MaterialAutoSuggestInputComponentOfTL = dart.constFn(material_auto_suggest_input.MaterialAutoSuggestInputComponent$(TL())))();
    var MaterialAutoSuggestInputComponentLOfTL = () => (MaterialAutoSuggestInputComponentLOfTL = dart.constFn(dart.legacy(MaterialAutoSuggestInputComponentOfTL())))();
    var VoidToMaterialAutoSuggestInputComponentLOfTL = () => (VoidToMaterialAutoSuggestInputComponentLOfTL = dart.constFn(dart.fnType(MaterialAutoSuggestInputComponentLOfTL(), [])))();
    var ComponentRefOfMaterialAutoSuggestInputComponentLOfTL = () => (ComponentRefOfMaterialAutoSuggestInputComponentLOfTL = dart.constFn(component_factory.ComponentRef$(MaterialAutoSuggestInputComponentLOfTL())))();
    class _ViewMaterialAutoSuggestInputComponentHost0 extends app_view.AppView$(dart.legacy(material_auto_suggest_input.MaterialAutoSuggestInputComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new (ViewMaterialAutoSuggestInputComponent0OfTL()).new(this, 0);
        this.rootEl = this[_compView_0].rootEl;
        this[_MaterialAutoSuggestInputComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialAutoSuggestInputComponentLOfTL(), dart.wrapType(MaterialAutoSuggestInputComponentL()), dart.fn(() => MaterialAutoSuggestInputComponentOfTL().new(null, IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.viewData.parentIndex)), PopupSizeProviderL().as(this.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex))), VoidToMaterialAutoSuggestInputComponentLOfTL())) : MaterialAutoSuggestInputComponentOfTL().new(null, IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.viewData.parentIndex)), PopupSizeProviderL().as(this.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)));
        this[_compView_0].create(this[_MaterialAutoSuggestInputComponent_0_5], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialAutoSuggestInputComponentLOfTL()).new(0, this, this.rootEl, this[_MaterialAutoSuggestInputComponent_0_5]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(MaterialAutoSuggestInputComponentL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL()) || token === dart.wrapType(SelectionContainerL()) || token === dart.wrapType(HighlightProviderL()) || token === dart.wrapType(DropdownHandleL()) || token === dart.wrapType(HasComponentRendererLOfRendersValueL$dynamic()) || token === dart.wrapType(HasFactoryRendererLOfRendersValueL$dynamic()) || token === dart.wrapType(FocusableL()) || token === dart.wrapType(PopupSizeProviderL())) && 0 === nodeIndex) {
          return this[_MaterialAutoSuggestInputComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
          this[_MaterialAutoSuggestInputComponent_0_5].ngOnInit();
        }
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_MaterialAutoSuggestInputComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialAutoSuggestInputComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialAutoSuggestInputComponent_0_5] = null;
      _ViewMaterialAutoSuggestInputComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
      ;
    }).prototype = _ViewMaterialAutoSuggestInputComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialAutoSuggestInputComponentHost0);
    _ViewMaterialAutoSuggestInputComponentHost0.prototype[_is__ViewMaterialAutoSuggestInputComponentHost0_default] = true;
    dart.addTypeCaches(_ViewMaterialAutoSuggestInputComponentHost0);
    dart.setMethodSignature(_ViewMaterialAutoSuggestInputComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialAutoSuggestInputComponentHost0.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialAutoSuggestInputComponentHost0, L0);
    dart.setFieldSignature(_ViewMaterialAutoSuggestInputComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialAutoSuggestInputComponentHost0.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_auto_suggest_input$46template.ViewMaterialAutoSuggestInputComponent0$(dart.legacy(T)))),
      [_MaterialAutoSuggestInputComponent_0_5]: dart.fieldType(dart.legacy(material_auto_suggest_input.MaterialAutoSuggestInputComponent$(dart.legacy(T))))
    }));
    return _ViewMaterialAutoSuggestInputComponentHost0;
  });
  material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponentHost0 = material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponentHost0$();
  dart.addTypeTests(material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponentHost0, _is__ViewMaterialAutoSuggestInputComponentHost0_default);
  material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent1 = function viewFactory_MaterialAutoSuggestInputComponent1(T, parentView, parentIndex) {
    return new (material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent1$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent2 = function viewFactory_MaterialAutoSuggestInputComponent2(T, parentView, parentIndex) {
    return new (material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent2$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent3 = function viewFactory_MaterialAutoSuggestInputComponent3(T, parentView, parentIndex) {
    return new (material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent3$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent4 = function viewFactory_MaterialAutoSuggestInputComponent4(T, parentView, parentIndex) {
    return new (material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent4$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent5 = function viewFactory_MaterialAutoSuggestInputComponent5(T, parentView, parentIndex) {
    return new (material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent5$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent6 = function viewFactory_MaterialAutoSuggestInputComponent6(T, parentView, parentIndex) {
    return new (material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent6$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent7 = function viewFactory_MaterialAutoSuggestInputComponent7(T, parentView, parentIndex) {
    return new (material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent7$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent8 = function viewFactory_MaterialAutoSuggestInputComponent8(T, parentView, parentIndex) {
    return new (material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent8$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent9 = function viewFactory_MaterialAutoSuggestInputComponent9(T, parentView, parentIndex) {
    return new (material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent9$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent10 = function viewFactory_MaterialAutoSuggestInputComponent10(T, parentView, parentIndex) {
    return new (material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent10$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponent11 = function viewFactory_MaterialAutoSuggestInputComponent11(T, parentView, parentIndex) {
    return new (material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponent11$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_auto_suggest_input$46template.viewFactory_MaterialAutoSuggestInputComponentHost0 = function viewFactory_MaterialAutoSuggestInputComponentHost0(T, parentView, parentIndex) {
    return new (material_auto_suggest_input$46template._ViewMaterialAutoSuggestInputComponentHost0$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_auto_suggest_input$46template.initReflector = function initReflector() {
    if (dart.test(material_auto_suggest_input$46template._visited)) {
      return;
    }
    material_auto_suggest_input$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialAutoSuggestInputComponentL()), material_auto_suggest_input$46template.MaterialAutoSuggestInputComponentNgFactory);
    material_input$46template.initReflector();
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    deferred_content$46template.initReflector();
    dynamic_component$46template.initReflector();
    focus$46template.initReflector();
    focus_trap$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    has_disabled$46template.initReflector();
    alignment$46template.initReflector();
    popup$46template.initReflector();
    material_icon$46template.initReflector();
    input_wrapper$46template.initReflector();
    material_list$46template.initReflector();
    material_popup$46template.initReflector();
    material_select_base$46template.initReflector();
    material_select_dropdown_item$46template.initReflector();
    material_spinner$46template.initReflector();
    material_tooltip$46template.initReflector();
    highlight_assistant_mixin$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    selection_input_adapter$46template.initReflector();
    active_item$46template.initReflector();
    active_item_directive$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    select$46template.initReflector();
    selection_container$46template.initReflector();
    selection_model$46template.initReflector();
    selection_options$46template.initReflector();
    string_selection_options$46template.initReflector();
    has_factory$46template.initReflector();
    highlight_provider$46template.initReflector();
    template_support$46template.initReflector();
    stop_propagation$46template.initReflector();
    properties$46template.initReflector();
    async$46template.initReflector();
    id_generator$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.copyProperties(material_auto_suggest_input$46template, {
    get MaterialAutoSuggestInputComponentNgFactory() {
      return material_auto_suggest_input$46template._MaterialAutoSuggestInputComponentNgFactory;
    }
  });
  var C8;
  var C7;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C6;
  dart.defineLazy(material_auto_suggest_input$46template, {
    /*material_auto_suggest_input$46template.styles$MaterialAutoSuggestInputComponent*/get styles$MaterialAutoSuggestInputComponent() {
      return [material_auto_suggest_input$46scss$46css$46shim.styles, material_input_wrapper$46scss$46css$46shim.styles];
    },
    /*material_auto_suggest_input$46template._MaterialAutoSuggestInputComponentNgFactory*/get _MaterialAutoSuggestInputComponentNgFactory() {
      return C6 || CT.C6;
    },
    /*material_auto_suggest_input$46template.styles$MaterialAutoSuggestInputComponentHost*/get styles$MaterialAutoSuggestInputComponentHost() {
      return C0 || CT.C0;
    },
    /*material_auto_suggest_input$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_input/material_auto_suggest_input.template", {
    "package:angular_components/material_input/material_auto_suggest_input.template.dart": material_auto_suggest_input$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_auto_suggest_input.template.dart"],"names":[],"mappings":"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","file":"material_auto_suggest_input.template.ddc.js"}');
  // Exports:
  return {
    material_input__material_auto_suggest_input$46template: material_auto_suggest_input$46template
  };
}));

//# sourceMappingURL=material_auto_suggest_input.template.ddc.js.map
