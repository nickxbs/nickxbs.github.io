define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/src/runtime/queries', 'packages/angular_components/material_menu/material_menu', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list', 'packages/angular_components/focus/focus', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/material_menu/common/menu_root', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_menu/menu_popup_wrapper.template', 'packages/angular_components/material_menu/menu_root.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/model/menu/menu.template', 'packages/angular_components/material_menu/menu_popup.scss.css.shim', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/focus/focus_activable_item', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/model/menu/menu', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/model/a11y/active_item_directive.template', 'packages/angular_components/model/a11y/active_item_directive', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/highlighted_text/highlighted_text.template', 'packages/angular_components/highlighted_text/highlighted_text', 'packages/angular_components/material_menu/menu_item_affix_list.template', 'packages/angular_components/material_menu/menu_item_affix_list', 'packages/observable/observable', 'packages/angular_components/model/menu/menu_item_affix', 'packages/angular/meta.template', 'packages/angular_components/focus/focus_activable_item.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/material_tooltip/material_tooltip.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/a11y/active_item.template', 'packages/angular_components/model/action/delayed_action.template', 'packages/angular_components/model/menu/selectable_menu.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/highlighted_text_model.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/material_menu/menu_item_groups.scss.css.shim', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_menu/menu_popup_wrapper', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/utils/angular/css/css.template'], (function load__packages__angular_components__material_menu__material_menu_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular_components__material_popup__material_popup, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__content__deferred_content, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular__src__runtime__queries, packages__angular_components__material_menu__material_menu, packages__angular_components__material_list__material_list$46template, packages__angular_components__material_list__material_list, packages__angular_components__focus__focus, packages__angular_components__laminate__components__modal__modal, packages__angular_components__material_menu__common__menu_root, packages__angular_components__utils__id_generator__id_generator, packages__angular__angular$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__focus__focus$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_menu__menu_popup_wrapper$46template, packages__angular_components__material_menu__menu_root$46template, packages__angular_components__mixins__focusable_mixin$46template, packages__angular_components__model__menu__menu$46template, packages__angular_components__material_menu__menu_popup$46scss$46css$46shim, packages__angular_components__focus__focus_trap$46template, packages__angular_components__focus__focus_trap, packages__angular_components__focus__focus_activable_item, packages__angular__src__runtime__text_binding, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__button_decorator__button_decorator, packages__angular__src__runtime__interpolate, packages__angular_components__model__menu__menu, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular_components__src__material_tooltip__tooltip_controller, packages__angular_components__material_tooltip__module, packages__angular_components__utils__disposer__disposer, packages__angular_components__material_select__material_select_item$46template, packages__angular_components__model__a11y__active_item_directive$46template, packages__angular_components__model__a11y__active_item_directive, packages__angular_components__src__material_tooltip__icon_tooltip, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__material_select__material_select_item, packages__angular_components__material_select__activation_handler, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__model__selection__selection_container, packages__angular_components__interfaces__has_disabled, packages__angular_components__model__ui__has_renderer, packages__angular_components__highlighted_text__highlighted_text$46template, packages__angular_components__highlighted_text__highlighted_text, packages__angular_components__material_menu__menu_item_affix_list$46template, packages__angular_components__material_menu__menu_item_affix_list, packages__observable__observable, packages__angular_components__model__menu__menu_item_affix, packages__angular__meta$46template, packages__angular_components__focus__focus_activable_item$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__material_tooltip__material_tooltip$46template, packages__angular_components__mixins__material_dropdown_base$46template, packages__angular_components__model__a11y__active_item$46template, packages__angular_components__model__action__delayed_action$46template, packages__angular_components__model__menu__selectable_menu$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__ui__highlighted_text_model$46template, packages__angular_components__utils__angular__properties__properties$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_components__material_menu__menu_item_groups$46scss$46css$46shim, packages__angular_components__material_button__material_button$46template, packages__angular_components__theme__dark_theme, packages__angular_components__material_button__material_button, packages__angular_components__material_menu__menu_popup_wrapper, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template, packages__angular_components__utils__angular__css__css$46template) {
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
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const ng_class = packages__angular__src__bootstrap__modules.src__common__directives__ng_class;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const deferred_content = packages__angular_components__content__deferred_content.content__deferred_content;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const queries = packages__angular__src__runtime__queries.src__runtime__queries;
  const menu_item_groups = packages__angular_components__material_menu__material_menu.material_menu__menu_item_groups;
  const menu_popup = packages__angular_components__material_menu__material_menu.material_menu__menu_popup;
  const material_menu = packages__angular_components__material_menu__material_menu.material_menu__material_menu;
  const material_list$46template = packages__angular_components__material_list__material_list$46template.material_list__material_list$46template;
  const material_list = packages__angular_components__material_list__material_list.material_list__material_list;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const menu_root = packages__angular_components__material_menu__common__menu_root.material_menu__common__menu_root;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const menu_popup_wrapper$46template = packages__angular_components__material_menu__menu_popup_wrapper$46template.material_menu__menu_popup_wrapper$46template;
  const menu_root$46template = packages__angular_components__material_menu__menu_root$46template.material_menu__menu_root$46template;
  const focusable_mixin$46template = packages__angular_components__mixins__focusable_mixin$46template.mixins__focusable_mixin$46template;
  const menu$46template = packages__angular_components__model__menu__menu$46template.model__menu__menu$46template;
  const menu_popup$46scss$46css$46shim = packages__angular_components__material_menu__menu_popup$46scss$46css$46shim.material_menu__menu_popup$46scss$46css$46shim;
  const focus_trap$46template = packages__angular_components__focus__focus_trap$46template.focus__focus_trap$46template;
  const focus_trap = packages__angular_components__focus__focus_trap.focus__focus_trap;
  const focus_activable_item = packages__angular_components__focus__focus_activable_item.focus__focus_activable_item;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const menu = packages__angular_components__model__menu__menu.model__menu__menu;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const tooltip_controller = packages__angular_components__src__material_tooltip__tooltip_controller.src__material_tooltip__tooltip_controller;
  const module = packages__angular_components__material_tooltip__module.material_tooltip__module;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const material_select_item$46template = packages__angular_components__material_select__material_select_item$46template.material_select__material_select_item$46template;
  const active_item_directive$46template = packages__angular_components__model__a11y__active_item_directive$46template.model__a11y__active_item_directive$46template;
  const active_item_directive = packages__angular_components__model__a11y__active_item_directive.model__a11y__active_item_directive;
  const tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const material_select_item = packages__angular_components__material_select__material_select_item.material_select__material_select_item;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const highlighted_text$46template = packages__angular_components__highlighted_text__highlighted_text$46template.highlighted_text__highlighted_text$46template;
  const highlighted_text = packages__angular_components__highlighted_text__highlighted_text.highlighted_text__highlighted_text;
  const menu_item_affix_list$46template = packages__angular_components__material_menu__menu_item_affix_list$46template.material_menu__menu_item_affix_list$46template;
  const menu_item_affix_list = packages__angular_components__material_menu__menu_item_affix_list.material_menu__menu_item_affix_list;
  const observable_list = packages__observable__observable.src__observable_list;
  const menu_item_affix = packages__angular_components__model__menu__menu_item_affix.model__menu__menu_item_affix;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const focus_activable_item$46template = packages__angular_components__focus__focus_activable_item$46template.focus__focus_activable_item$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const material_tooltip$46template = packages__angular_components__material_tooltip__material_tooltip$46template.material_tooltip__material_tooltip$46template;
  const material_dropdown_base$46template = packages__angular_components__mixins__material_dropdown_base$46template.mixins__material_dropdown_base$46template;
  const active_item$46template = packages__angular_components__model__a11y__active_item$46template.model__a11y__active_item$46template;
  const delayed_action$46template = packages__angular_components__model__action__delayed_action$46template.model__action__delayed_action$46template;
  const selectable_menu$46template = packages__angular_components__model__menu__selectable_menu$46template.model__menu__selectable_menu$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const highlighted_text_model$46template = packages__angular_components__model__ui__highlighted_text_model$46template.model__ui__highlighted_text_model$46template;
  const properties$46template = packages__angular_components__utils__angular__properties__properties$46template.utils__angular__properties__properties$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const menu_item_groups$46scss$46css$46shim = packages__angular_components__material_menu__menu_item_groups$46scss$46css$46shim.material_menu__menu_item_groups$46scss$46css$46shim;
  const material_button$46template = packages__angular_components__material_button__material_button$46template.material_button__material_button$46template;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const menu_popup_wrapper = packages__angular_components__material_menu__menu_popup_wrapper.material_menu__menu_popup_wrapper;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  const css$46template = packages__angular_components__utils__angular__css__css$46template.utils__angular__css__css$46template;
  var menu_popup$46template = Object.create(dart.library);
  var menu_item_groups$46template = Object.create(dart.library);
  var material_menu$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
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
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var MenuItemGroupsComponentL = () => (MenuItemGroupsComponentL = dart.constFn(dart.legacy(menu_item_groups.MenuItemGroupsComponent)))();
  var _ViewMenuPopupComponent1L = () => (_ViewMenuPopupComponent1L = dart.constFn(dart.legacy(menu_popup$46template._ViewMenuPopupComponent1)))();
  var JSArrayOfMenuItemGroupsComponentL = () => (JSArrayOfMenuItemGroupsComponentL = dart.constFn(_interceptors.JSArray$(MenuItemGroupsComponentL())))();
  var ListOfMenuItemGroupsComponentL = () => (ListOfMenuItemGroupsComponentL = dart.constFn(core.List$(MenuItemGroupsComponentL())))();
  var ListLOfMenuItemGroupsComponentL = () => (ListLOfMenuItemGroupsComponentL = dart.constFn(dart.legacy(ListOfMenuItemGroupsComponentL())))();
  var _ViewMenuPopupComponent1LToListLOfMenuItemGroupsComponentL = () => (_ViewMenuPopupComponent1LToListLOfMenuItemGroupsComponentL = dart.constFn(dart.fnType(ListLOfMenuItemGroupsComponentL(), [_ViewMenuPopupComponent1L()])))();
  var AutoFocusDirectiveL = () => (AutoFocusDirectiveL = dart.constFn(dart.legacy(focus.AutoFocusDirective)))();
  var ModalComponentL = () => (ModalComponentL = dart.constFn(dart.legacy(modal.ModalComponent)))();
  var ViewMenuPopupComponent0L = () => (ViewMenuPopupComponent0L = dart.constFn(dart.legacy(menu_popup$46template.ViewMenuPopupComponent0)))();
  var VoidToAutoFocusDirectiveL = () => (VoidToAutoFocusDirectiveL = dart.constFn(dart.fnType(AutoFocusDirectiveL(), [])))();
  var IdGeneratorL = () => (IdGeneratorL = dart.constFn(dart.legacy(id_generator.IdGenerator)))();
  var VoidToMenuItemGroupsComponentL = () => (VoidToMenuItemGroupsComponentL = dart.constFn(dart.fnType(MenuItemGroupsComponentL(), [])))();
  var JSArrayOfHtmlElementL = () => (JSArrayOfHtmlElementL = dart.constFn(_interceptors.JSArray$(HtmlElementL())))();
  var MenuRootL = () => (MenuRootL = dart.constFn(dart.legacy(menu_root.MenuRoot)))();
  var MenuPopupComponentL = () => (MenuPopupComponentL = dart.constFn(dart.legacy(menu_popup.MenuPopupComponent)))();
  var ComponentRefOfMenuPopupComponentL = () => (ComponentRefOfMenuPopupComponentL = dart.constFn(component_factory.ComponentRef$(MenuPopupComponentL())))();
  var ComponentFactoryOfMenuPopupComponentL = () => (ComponentFactoryOfMenuPopupComponentL = dart.constFn(component_factory.ComponentFactory$(MenuPopupComponentL())))();
  var AppViewOfMenuPopupComponentL = () => (AppViewOfMenuPopupComponentL = dart.constFn(app_view.AppView$(MenuPopupComponentL())))();
  var AppViewLOfMenuPopupComponentL = () => (AppViewLOfMenuPopupComponentL = dart.constFn(dart.legacy(AppViewOfMenuPopupComponentL())))();
  var AppViewLAndintLToAppViewLOfMenuPopupComponentL = () => (AppViewLAndintLToAppViewLOfMenuPopupComponentL = dart.constFn(dart.fnType(AppViewLOfMenuPopupComponentL(), [AppViewL(), intL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var _ViewMenuItemGroupsComponent1L = () => (_ViewMenuItemGroupsComponent1L = dart.constFn(dart.legacy(menu_item_groups$46template._ViewMenuItemGroupsComponent1)))();
  var _ViewMenuItemGroupsComponent4L = () => (_ViewMenuItemGroupsComponent4L = dart.constFn(dart.legacy(menu_item_groups$46template._ViewMenuItemGroupsComponent4)))();
  var _ViewMenuItemGroupsComponent5L = () => (_ViewMenuItemGroupsComponent5L = dart.constFn(dart.legacy(menu_item_groups$46template._ViewMenuItemGroupsComponent5)))();
  var _ViewMenuItemGroupsComponent6L = () => (_ViewMenuItemGroupsComponent6L = dart.constFn(dart.legacy(menu_item_groups$46template._ViewMenuItemGroupsComponent6)))();
  var JSArrayOfAutoFocusDirectiveL = () => (JSArrayOfAutoFocusDirectiveL = dart.constFn(_interceptors.JSArray$(AutoFocusDirectiveL())))();
  var _ViewMenuItemGroupsComponent15L = () => (_ViewMenuItemGroupsComponent15L = dart.constFn(dart.legacy(menu_item_groups$46template._ViewMenuItemGroupsComponent15)))();
  var _ViewMenuItemGroupsComponent16L = () => (_ViewMenuItemGroupsComponent16L = dart.constFn(dart.legacy(menu_item_groups$46template._ViewMenuItemGroupsComponent16)))();
  var ListOfAutoFocusDirectiveL = () => (ListOfAutoFocusDirectiveL = dart.constFn(core.List$(AutoFocusDirectiveL())))();
  var ListLOfAutoFocusDirectiveL = () => (ListLOfAutoFocusDirectiveL = dart.constFn(dart.legacy(ListOfAutoFocusDirectiveL())))();
  var _ViewMenuItemGroupsComponent16LToListLOfAutoFocusDirectiveL = () => (_ViewMenuItemGroupsComponent16LToListLOfAutoFocusDirectiveL = dart.constFn(dart.fnType(ListLOfAutoFocusDirectiveL(), [_ViewMenuItemGroupsComponent16L()])))();
  var _ViewMenuItemGroupsComponent15LToListLOfAutoFocusDirectiveL = () => (_ViewMenuItemGroupsComponent15LToListLOfAutoFocusDirectiveL = dart.constFn(dart.fnType(ListLOfAutoFocusDirectiveL(), [_ViewMenuItemGroupsComponent15L()])))();
  var JSArrayOfListLOfAutoFocusDirectiveL = () => (JSArrayOfListLOfAutoFocusDirectiveL = dart.constFn(_interceptors.JSArray$(ListLOfAutoFocusDirectiveL())))();
  var _ViewMenuItemGroupsComponent6LToListLOfAutoFocusDirectiveL = () => (_ViewMenuItemGroupsComponent6LToListLOfAutoFocusDirectiveL = dart.constFn(dart.fnType(ListLOfAutoFocusDirectiveL(), [_ViewMenuItemGroupsComponent6L()])))();
  var _ViewMenuItemGroupsComponent5LToListLOfAutoFocusDirectiveL = () => (_ViewMenuItemGroupsComponent5LToListLOfAutoFocusDirectiveL = dart.constFn(dart.fnType(ListLOfAutoFocusDirectiveL(), [_ViewMenuItemGroupsComponent5L()])))();
  var _ViewMenuItemGroupsComponent4LToListLOfAutoFocusDirectiveL = () => (_ViewMenuItemGroupsComponent4LToListLOfAutoFocusDirectiveL = dart.constFn(dart.fnType(ListLOfAutoFocusDirectiveL(), [_ViewMenuItemGroupsComponent4L()])))();
  var _ViewMenuItemGroupsComponent1LToListLOfAutoFocusDirectiveL = () => (_ViewMenuItemGroupsComponent1LToListLOfAutoFocusDirectiveL = dart.constFn(dart.fnType(ListLOfAutoFocusDirectiveL(), [_ViewMenuItemGroupsComponent1L()])))();
  var FocusableActivateItemL = () => (FocusableActivateItemL = dart.constFn(dart.legacy(focus_activable_item.FocusableActivateItem)))();
  var JSArrayOfFocusableActivateItemL = () => (JSArrayOfFocusableActivateItemL = dart.constFn(_interceptors.JSArray$(FocusableActivateItemL())))();
  var ListOfFocusableActivateItemL = () => (ListOfFocusableActivateItemL = dart.constFn(core.List$(FocusableActivateItemL())))();
  var ListLOfFocusableActivateItemL = () => (ListLOfFocusableActivateItemL = dart.constFn(dart.legacy(ListOfFocusableActivateItemL())))();
  var _ViewMenuItemGroupsComponent6LToListLOfFocusableActivateItemL = () => (_ViewMenuItemGroupsComponent6LToListLOfFocusableActivateItemL = dart.constFn(dart.fnType(ListLOfFocusableActivateItemL(), [_ViewMenuItemGroupsComponent6L()])))();
  var _ViewMenuItemGroupsComponent5LToListLOfFocusableActivateItemL = () => (_ViewMenuItemGroupsComponent5LToListLOfFocusableActivateItemL = dart.constFn(dart.fnType(ListLOfFocusableActivateItemL(), [_ViewMenuItemGroupsComponent5L()])))();
  var _ViewMenuItemGroupsComponent4LToListLOfFocusableActivateItemL = () => (_ViewMenuItemGroupsComponent4LToListLOfFocusableActivateItemL = dart.constFn(dart.fnType(ListLOfFocusableActivateItemL(), [_ViewMenuItemGroupsComponent4L()])))();
  var _ViewMenuItemGroupsComponent1LToListLOfFocusableActivateItemL = () => (_ViewMenuItemGroupsComponent1LToListLOfFocusableActivateItemL = dart.constFn(dart.fnType(ListLOfFocusableActivateItemL(), [_ViewMenuItemGroupsComponent1L()])))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MenuItemGroupL = () => (MenuItemGroupL = dart.constFn(dart.legacy(menu.MenuItemGroup)))();
  var IterableOfObjectL = () => (IterableOfObjectL = dart.constFn(core.Iterable$(ObjectL())))();
  var IterableLOfObjectL = () => (IterableLOfObjectL = dart.constFn(dart.legacy(IterableOfObjectL())))();
  var MenuItemL = () => (MenuItemL = dart.constFn(dart.legacy(menu.MenuItem)))();
  var TooltipControllerL = () => (TooltipControllerL = dart.constFn(dart.legacy(tooltip_controller.TooltipController)))();
  var DisposerL = () => (DisposerL = dart.constFn(dart.legacy(disposer.Disposer)))();
  var VoidToTooltipControllerL = () => (VoidToTooltipControllerL = dart.constFn(dart.fnType(TooltipControllerL(), [])))();
  var ActiveItemDirectiveL = () => (ActiveItemDirectiveL = dart.constFn(dart.legacy(active_item_directive.ActiveItemDirective)))();
  var ModalL = () => (ModalL = dart.constFn(dart.legacy(modal.Modal)))();
  var VoidToActiveItemDirectiveL = () => (VoidToActiveItemDirectiveL = dart.constFn(dart.fnType(ActiveItemDirectiveL(), [])))();
  var MaterialTooltipDirectiveL = () => (MaterialTooltipDirectiveL = dart.constFn(dart.legacy(tooltip.MaterialTooltipDirective)))();
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var WindowL = () => (WindowL = dart.constFn(dart.legacy(html.Window)))();
  var VoidToMaterialTooltipDirectiveL = () => (VoidToMaterialTooltipDirectiveL = dart.constFn(dart.fnType(MaterialTooltipDirectiveL(), [])))();
  var MaterialSelectItemComponentL = () => (MaterialSelectItemComponentL = dart.constFn(dart.legacy(material_select_item.MaterialSelectItemComponent)))();
  var ActivationHandlerL = () => (ActivationHandlerL = dart.constFn(dart.legacy(activation_handler.ActivationHandler)))();
  var VoidToMaterialSelectItemComponentL = () => (VoidToMaterialSelectItemComponentL = dart.constFn(dart.fnType(MaterialSelectItemComponentL(), [])))();
  var PopupSourceDirectiveL = () => (PopupSourceDirectiveL = dart.constFn(dart.legacy(popup_source_directive.PopupSourceDirective)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var VoidToPopupSourceDirectiveL = () => (VoidToPopupSourceDirectiveL = dart.constFn(dart.fnType(PopupSourceDirectiveL(), [])))();
  var SelectionItemL = () => (SelectionItemL = dart.constFn(dart.legacy(selection_container.SelectionItem)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var ViewMenuItemGroupsComponent0L = () => (ViewMenuItemGroupsComponent0L = dart.constFn(dart.legacy(menu_item_groups$46template.ViewMenuItemGroupsComponent0)))();
  var MenuItemAffixL = () => (MenuItemAffixL = dart.constFn(dart.legacy(menu_item_affix.MenuItemAffix)))();
  var ObservableListOfMenuItemAffixL = () => (ObservableListOfMenuItemAffixL = dart.constFn(observable_list.ObservableList$(MenuItemAffixL())))();
  var ObservableListLOfMenuItemAffixL = () => (ObservableListLOfMenuItemAffixL = dart.constFn(dart.legacy(ObservableListOfMenuItemAffixL())))();
  var NodeL = () => (NodeL = dart.constFn(dart.legacy(html.Node)))();
  var JSArrayOfNodeL = () => (JSArrayOfNodeL = dart.constFn(_interceptors.JSArray$(NodeL())))();
  var MenuModelL = () => (MenuModelL = dart.constFn(dart.legacy(menu.MenuModel)))();
  var ComponentRefOfMenuItemGroupsComponentL = () => (ComponentRefOfMenuItemGroupsComponentL = dart.constFn(component_factory.ComponentRef$(MenuItemGroupsComponentL())))();
  var ComponentFactoryOfMenuItemGroupsComponentL = () => (ComponentFactoryOfMenuItemGroupsComponentL = dart.constFn(component_factory.ComponentFactory$(MenuItemGroupsComponentL())))();
  var AppViewOfMenuItemGroupsComponentL = () => (AppViewOfMenuItemGroupsComponentL = dart.constFn(app_view.AppView$(MenuItemGroupsComponentL())))();
  var AppViewLOfMenuItemGroupsComponentL = () => (AppViewLOfMenuItemGroupsComponentL = dart.constFn(dart.legacy(AppViewOfMenuItemGroupsComponentL())))();
  var AppViewLAndintLToAppViewLOfMenuItemGroupsComponentL = () => (AppViewLAndintLToAppViewLOfMenuItemGroupsComponentL = dart.constFn(dart.fnType(AppViewLOfMenuItemGroupsComponentL(), [AppViewL(), intL()])))();
  var AcxDarkThemeL = () => (AcxDarkThemeL = dart.constFn(dart.legacy(dark_theme.AcxDarkTheme)))();
  var VoidToAcxDarkThemeL = () => (VoidToAcxDarkThemeL = dart.constFn(dart.fnType(AcxDarkThemeL(), [])))();
  var MaterialButtonComponentL = () => (MaterialButtonComponentL = dart.constFn(dart.legacy(material_button.MaterialButtonComponent)))();
  var _ViewMaterialMenuComponent3L = () => (_ViewMaterialMenuComponent3L = dart.constFn(dart.legacy(material_menu$46template._ViewMaterialMenuComponent3)))();
  var JSArrayOfMenuPopupComponentL = () => (JSArrayOfMenuPopupComponentL = dart.constFn(_interceptors.JSArray$(MenuPopupComponentL())))();
  var ListOfMenuPopupComponentL = () => (ListOfMenuPopupComponentL = dart.constFn(core.List$(MenuPopupComponentL())))();
  var ListLOfMenuPopupComponentL = () => (ListLOfMenuPopupComponentL = dart.constFn(dart.legacy(ListOfMenuPopupComponentL())))();
  var _ViewMaterialMenuComponent3LToListLOfMenuPopupComponentL = () => (_ViewMaterialMenuComponent3LToListLOfMenuPopupComponentL = dart.constFn(dart.fnType(ListLOfMenuPopupComponentL(), [_ViewMaterialMenuComponent3L()])))();
  var ExpandActionL = () => (ExpandActionL = dart.constFn(dart.legacy(menu_popup_wrapper.ExpandAction)))();
  var ViewMaterialMenuComponent0L = () => (ViewMaterialMenuComponent0L = dart.constFn(dart.legacy(material_menu$46template.ViewMaterialMenuComponent0)))();
  var MaterialMenuComponentL = () => (MaterialMenuComponentL = dart.constFn(dart.legacy(material_menu.MaterialMenuComponent)))();
  var ComponentRefOfMaterialMenuComponentL = () => (ComponentRefOfMaterialMenuComponentL = dart.constFn(component_factory.ComponentRef$(MaterialMenuComponentL())))();
  var ComponentFactoryOfMaterialMenuComponentL = () => (ComponentFactoryOfMaterialMenuComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialMenuComponentL())))();
  var AppViewOfMaterialMenuComponentL = () => (AppViewOfMaterialMenuComponentL = dart.constFn(app_view.AppView$(MaterialMenuComponentL())))();
  var AppViewLOfMaterialMenuComponentL = () => (AppViewLOfMaterialMenuComponentL = dart.constFn(dart.legacy(AppViewOfMaterialMenuComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialMenuComponentL = () => (AppViewLAndintLToAppViewLOfMaterialMenuComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialMenuComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L1 = "package:angular_components/material_menu/menu_item_groups.template.dart";
  var L0 = "package:angular_components/material_menu/menu_popup.template.dart";
  var L2 = "package:angular_components/material_menu/material_menu.template.dart";
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
      return C3 = dart.fn(menu_popup$46template.viewFactory_MenuPopupComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    },
    get C5() {
      return C5 = dart.constList([], ObjectL());
    },
    get C7() {
      return C7 = dart.fn(menu_popup$46template.viewFactory_MenuPopupComponentHost0, AppViewLAndintLToAppViewLOfMenuPopupComponentL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ComponentFactoryOfMenuPopupComponentL().prototype,
        [ComponentFactory__viewFactory]: C7 || CT.C7,
        [ComponentFactory_selector]: "menu-popup"
      });
    },
    get C8() {
      return C8 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C9() {
      return C9 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent2, AppViewLAndintLToAppViewLOfvoid());
    },
    get C10() {
      return C10 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent4, AppViewLAndintLToAppViewLOfvoid());
    },
    get C11() {
      return C11 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent3, AppViewLAndintLToAppViewLOfvoid());
    },
    get C12() {
      return C12 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent5, AppViewLAndintLToAppViewLOfvoid());
    },
    get C13() {
      return C13 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent6, AppViewLAndintLToAppViewLOfvoid());
    },
    get C14() {
      return C14 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent7, AppViewLAndintLToAppViewLOfvoid());
    },
    get C15() {
      return C15 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent8, AppViewLAndintLToAppViewLOfvoid());
    },
    get C16() {
      return C16 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent10, AppViewLAndintLToAppViewLOfvoid());
    },
    get C17() {
      return C17 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent12, AppViewLAndintLToAppViewLOfvoid());
    },
    get C18() {
      return C18 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent13, AppViewLAndintLToAppViewLOfvoid());
    },
    get C19() {
      return C19 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent14, AppViewLAndintLToAppViewLOfvoid());
    },
    get C20() {
      return C20 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent15, AppViewLAndintLToAppViewLOfvoid());
    },
    get C21() {
      return C21 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent9, AppViewLAndintLToAppViewLOfvoid());
    },
    get C22() {
      return C22 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent11, AppViewLAndintLToAppViewLOfvoid());
    },
    get C23() {
      return C23 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponent16, AppViewLAndintLToAppViewLOfvoid());
    },
    get C25() {
      return C25 = dart.fn(menu_item_groups$46template.viewFactory_MenuItemGroupsComponentHost0, AppViewLAndintLToAppViewLOfMenuItemGroupsComponentL());
    },
    get C24() {
      return C24 = dart.const({
        __proto__: ComponentFactoryOfMenuItemGroupsComponentL().prototype,
        [ComponentFactory__viewFactory]: C25 || CT.C25,
        [ComponentFactory_selector]: "menu-item-groups"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C27() {
      return C27 = dart.fn(material_menu$46template.viewFactory_MaterialMenuComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C28() {
      return C28 = dart.fn(material_menu$46template.viewFactory_MaterialMenuComponent2, AppViewLAndintLToAppViewLOfvoid());
    },
    get C29() {
      return C29 = dart.fn(material_menu$46template.viewFactory_MaterialMenuComponent3, AppViewLAndintLToAppViewLOfvoid());
    },
    get C31() {
      return C31 = dart.fn(material_menu$46template.viewFactory_MaterialMenuComponentHost0, AppViewLAndintLToAppViewLOfMaterialMenuComponentL());
    },
    get C30() {
      return C30 = dart.const({
        __proto__: ComponentFactoryOfMaterialMenuComponentL().prototype,
        [ComponentFactory__viewFactory]: C31 || CT.C31,
        [ComponentFactory_selector]: "material-menu"
      });
    }
  }, false);
  var _query_MenuItemGroupsComponent_1_0_isDirty = dart.privateName(menu_popup$46template, "_query_MenuItemGroupsComponent_1_0_isDirty");
  var _compView_0 = dart.privateName(menu_popup$46template, "_compView_0");
  var _appEl_0 = dart.privateName(menu_popup$46template, "_appEl_0");
  var _MaterialPopupComponent_0_8 = dart.privateName(menu_popup$46template, "_MaterialPopupComponent_0_8");
  var __PopupRef_0_10 = dart.privateName(menu_popup$46template, "__PopupRef_0_10");
  var __PopupHierarchy_0_12 = dart.privateName(menu_popup$46template, "__PopupHierarchy_0_12");
  var _appEl_1 = dart.privateName(menu_popup$46template, "_appEl_1");
  var _DeferredContentDirective_1_9 = dart.privateName(menu_popup$46template, "_DeferredContentDirective_1_9");
  var _expr_0 = dart.privateName(menu_popup$46template, "_expr_0");
  var _expr_2 = dart.privateName(menu_popup$46template, "_expr_2");
  var _expr_3 = dart.privateName(menu_popup$46template, "_expr_3");
  var _expr_4 = dart.privateName(menu_popup$46template, "_expr_4");
  var _el_0 = dart.privateName(menu_popup$46template, "_el_0");
  var _PopupRef_0_10 = dart.privateName(menu_popup$46template, "_PopupRef_0_10");
  var _PopupHierarchy_0_12 = dart.privateName(menu_popup$46template, "_PopupHierarchy_0_12");
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var _handle_visibleChange_0_0 = dart.privateName(menu_popup$46template, "_handle_visibleChange_0_0");
  var C5;
  var _MenuItemGroupsComponent_1_8 = dart.privateName(menu_popup$46template, "_MenuItemGroupsComponent_1_8");
  menu_popup$46template.ViewMenuPopupComponent0 = class ViewMenuPopupComponent0 extends app_view.AppView$(dart.legacy(menu_popup.MenuPopupComponent)) {
    get [_PopupRef_0_10]() {
      if (this[__PopupRef_0_10] == null) {
        this[__PopupRef_0_10] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupRef_0_10];
    }
    get [_PopupHierarchy_0_12]() {
      if (this[__PopupHierarchy_0_12] == null) {
        this[__PopupHierarchy_0_12] = material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_12];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/menu_popup.dart" : null;
    }
    build() {
      let t0;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      dom_helpers.setAttribute(this[_el_0], "enforceSpaceConstraints", "");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_MaterialPopupComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C0 || CT.C0, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C1 || CT.C1, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C2 || CT.C2, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(this[_el_0])), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C0 || CT.C0, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C1 || CT.C1, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C2 || CT.C2, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(this[_el_0]));
      let _anchor_1 = dom_helpers.createAnchor();
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C3 || CT.C3);
      this[_DeferredContentDirective_1_9] = new deferred_content.DeferredContentDirective.new(this[_appEl_1], _TemplateRef_1_8, this[_MaterialPopupComponent_0_8]);
      this[_compView_0].create(this[_MaterialPopupComponent_0_8], JSArrayOfObjectL().of([C4 || CT.C4, (t0 = [this.projectedNodes[$_get](0)], (() => {
          t0[$addAll]([this[_appEl_1]]);
          return t0;
        })()), C4 || CT.C4]));
      let subscription_0 = this[_MaterialPopupComponent_0_8].onVisible.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handle_visibleChange_0_0)));
      this.init(C5 || CT.C5, JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(DropdownHandleL())) {
          return this[_MaterialPopupComponent_0_8];
        }
        if (token === dart.wrapType(PopupRefL())) {
          return this[_PopupRef_0_10];
        }
        if (token === dart.wrapType(PopupHierarchyL())) {
          return this[_PopupHierarchy_0_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialPopupComponent_0_8].enforceSpaceConstraints = true;
        changed = true;
      }
      let currVal_2 = _ctx.preferredPositions;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialPopupComponent_0_8].preferredPositions = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.popupSource;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialPopupComponent_0_8].source = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.isExpanded;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialPopupComponent_0_8].visible = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_DeferredContentDirective_1_9].preserveDimensions = true;
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_MenuItemGroupsComponent_1_0_isDirty])) {
          _ctx.menuItemGroups = queries.firstOrNull(MenuItemGroupsComponentL(), this[_appEl_1].mapNestedViews(MenuItemGroupsComponentL(), _ViewMenuPopupComponent1L(), dart.fn(nestedView => JSArrayOfMenuItemGroupsComponentL().of([nestedView[_MenuItemGroupsComponent_1_8]]), _ViewMenuPopupComponent1LToListLOfMenuItemGroupsComponentL())));
          this[_query_MenuItemGroupsComponent_1_0_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.popupClass;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_compView_0].updateChildClassNonHtml(this[_el_0], currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialPopupComponent_0_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_1].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_DeferredContentDirective_1_9].ngOnDestroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
    [_handle_visibleChange_0_0]($36event) {
      let _ctx = this.ctx;
      _ctx.isExpanded = $36event;
    }
    initComponentStyles() {
      let styles = menu_popup$46template.ViewMenuPopupComponent0._componentStyles;
      if (styles == null) {
        menu_popup$46template.ViewMenuPopupComponent0._componentStyles = styles = menu_popup$46template.ViewMenuPopupComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(menu_popup$46template.styles$MenuPopupComponent, menu_popup$46template.ViewMenuPopupComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (menu_popup$46template.ViewMenuPopupComponent0.new = function(parentView, parentIndex) {
    this[_query_MenuItemGroupsComponent_1_0_isDirty] = true;
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupRef_0_10] = null;
    this[__PopupHierarchy_0_12] = null;
    this[_appEl_1] = null;
    this[_DeferredContentDirective_1_9] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_el_0] = null;
    menu_popup$46template.ViewMenuPopupComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("menu-popup"));
  }).prototype = menu_popup$46template.ViewMenuPopupComponent0.prototype;
  dart.addTypeTests(menu_popup$46template.ViewMenuPopupComponent0);
  dart.addTypeCaches(menu_popup$46template.ViewMenuPopupComponent0);
  dart.setMethodSignature(menu_popup$46template.ViewMenuPopupComponent0, () => ({
    __proto__: dart.getMethods(menu_popup$46template.ViewMenuPopupComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_visibleChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(menu_popup$46template.ViewMenuPopupComponent0, () => ({
    __proto__: dart.getGetters(menu_popup$46template.ViewMenuPopupComponent0.__proto__),
    [_PopupRef_0_10]: dart.dynamic,
    [_PopupHierarchy_0_12]: dart.dynamic
  }));
  dart.setLibraryUri(menu_popup$46template.ViewMenuPopupComponent0, L0);
  dart.setFieldSignature(menu_popup$46template.ViewMenuPopupComponent0, () => ({
    __proto__: dart.getFields(menu_popup$46template.ViewMenuPopupComponent0.__proto__),
    [_query_MenuItemGroupsComponent_1_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_compView_0]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialPopupComponent_0_8]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
    [__PopupRef_0_10]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_0_12]: dart.fieldType(dart.dynamic),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_DeferredContentDirective_1_9]: dart.fieldType(dart.legacy(deferred_content.DeferredContentDirective)),
    [_expr_0]: dart.fieldType(dart.legacy(core.String)),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(menu_popup$46template.ViewMenuPopupComponent0, {
    /*menu_popup$46template.ViewMenuPopupComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _MaterialListComponent_0_5 = dart.privateName(menu_popup$46template, "_MaterialListComponent_0_5");
  var _compView_1 = dart.privateName(menu_popup$46template, "_compView_1");
  var _AutoFocusDirective_1_5 = dart.privateName(menu_popup$46template, "_AutoFocusDirective_1_5");
  var _MenuRootDirective_1_6 = dart.privateName(menu_popup$46template, "_MenuRootDirective_1_6");
  var _expr_1 = dart.privateName(menu_popup$46template, "_expr_1");
  var _expr_5 = dart.privateName(menu_popup$46template, "_expr_5");
  var _expr_6 = dart.privateName(menu_popup$46template, "_expr_6");
  menu_popup$46template._ViewMenuPopupComponent1 = class _ViewMenuPopupComponent1 extends app_view.AppView$(dart.legacy(menu_popup.MenuPopupComponent)) {
    build() {
      this[_compView_0] = new material_list$46template.ViewMaterialListComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(_el_0, "item-group-list");
      dom_helpers.setAttribute(_el_0, "role", "none");
      this.addShimC(_el_0);
      this[_MaterialListComponent_0_5] = new material_list.MaterialListComponent.new();
      this[_compView_1] = new menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      dom_helpers.setAttribute(_el_1, "autoFocus", "");
      dom_helpers.setAttribute(_el_1, "menu-root", "");
      dom_helpers.setAttribute(_el_1, "preventCloseOnPressLeft", "");
      this.addShimC(_el_1);
      this[_AutoFocusDirective_1_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoFocusDirectiveL(), dart.wrapType(AutoFocusDirectiveL()), dart.fn(() => new focus.AutoFocusDirective.new(_el_1, DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex)), null, ModalComponentL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.viewData.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMenuPopupComponent0L(), this.parentView)[_PopupRef_0_10])), VoidToAutoFocusDirectiveL())) : new focus.AutoFocusDirective.new(_el_1, DomServiceL().as(this.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.viewData.parentIndex)), null, ModalComponentL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.viewData.parentIndex)), PopupRefL().as(optimizations.unsafeCast(ViewMenuPopupComponent0L(), this.parentView)[_PopupRef_0_10]));
      this[_MenuRootDirective_1_6] = new menu_root.MenuRootDirective.new(optimizations.unsafeCast(ViewMenuPopupComponent0L(), this.parentView)[_MaterialPopupComponent_0_8]);
      this[_MenuItemGroupsComponent_1_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MenuItemGroupsComponentL(), dart.wrapType(MenuItemGroupsComponentL()), dart.fn(() => menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRootDirective_1_6], this[_compView_1], optimizations.unsafeCast(ViewMenuPopupComponent0L(), this.parentView)[_MaterialPopupComponent_0_8], IdGeneratorL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.viewData.parentIndex))), VoidToMenuItemGroupsComponentL())) : menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRootDirective_1_6], this[_compView_1], optimizations.unsafeCast(ViewMenuPopupComponent0L(), this.parentView)[_MaterialPopupComponent_0_8], IdGeneratorL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.viewData.parentIndex)));
      this[_compView_1].create0(this[_MenuItemGroupsComponent_1_8]);
      this[_compView_0].create(this[_MaterialListComponent_0_5], JSArrayOfObjectL().of([JSArrayOfHtmlElementL().of([_el_1])]));
      this.init1(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(MenuRootL()) && 1 === nodeIndex) {
        return this[_MenuRootDirective_1_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialListComponent_0_5].role = "none";
        changed = true;
      }
      let currVal_1 = _ctx.width;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialListComponent_0_5].width = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_AutoFocusDirective_1_5].autoFocus = true;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AutoFocusDirective_1_5].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MenuItemGroupsComponent_1_8].preventCloseOnPressLeft = "";
        changed = true;
      }
      let currVal_3 = _ctx.activateFirstItemOnExpand;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MenuItemGroupsComponent_1_8].activateFirstItemOnInit = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.activateLastItemOnExpand;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MenuItemGroupsComponent_1_8].activateLastItemOnInit = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.popupClass;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MenuItemGroupsComponent_1_8].popupClass = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.menu;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MenuItemGroupsComponent_1_8].menu = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MenuItemGroupsComponent_1_8].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MenuItemGroupsComponent_1_8].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMenuPopupComponent0L(), this.parentView)[_query_MenuItemGroupsComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
      this[_AutoFocusDirective_1_5].ngOnDestroy();
      this[_MenuItemGroupsComponent_1_8].ngOnDestroy();
    }
  };
  (menu_popup$46template._ViewMenuPopupComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialListComponent_0_5] = null;
    this[_compView_1] = null;
    this[_AutoFocusDirective_1_5] = null;
    this[_MenuRootDirective_1_6] = null;
    this[_MenuItemGroupsComponent_1_8] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    menu_popup$46template._ViewMenuPopupComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_popup$46template._ViewMenuPopupComponent1.prototype;
  dart.addTypeTests(menu_popup$46template._ViewMenuPopupComponent1);
  dart.addTypeCaches(menu_popup$46template._ViewMenuPopupComponent1);
  dart.setMethodSignature(menu_popup$46template._ViewMenuPopupComponent1, () => ({
    __proto__: dart.getMethods(menu_popup$46template._ViewMenuPopupComponent1.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(menu_popup$46template._ViewMenuPopupComponent1, L0);
  dart.setFieldSignature(menu_popup$46template._ViewMenuPopupComponent1, () => ({
    __proto__: dart.getFields(menu_popup$46template._ViewMenuPopupComponent1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_list$46template.ViewMaterialListComponent0)),
    [_MaterialListComponent_0_5]: dart.fieldType(dart.legacy(material_list.MaterialListComponent)),
    [_compView_1]: dart.fieldType(dart.legacy(menu_item_groups$46template.ViewMenuItemGroupsComponent0)),
    [_AutoFocusDirective_1_5]: dart.fieldType(dart.legacy(focus.AutoFocusDirective)),
    [_MenuRootDirective_1_6]: dart.fieldType(dart.legacy(menu_root.MenuRootDirective)),
    [_MenuItemGroupsComponent_1_8]: dart.fieldType(dart.legacy(menu_item_groups.MenuItemGroupsComponent)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_5]: dart.fieldType(dart.legacy(core.String)),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  var _MenuPopupComponent_0_5 = dart.privateName(menu_popup$46template, "_MenuPopupComponent_0_5");
  menu_popup$46template._ViewMenuPopupComponentHost0 = class _ViewMenuPopupComponentHost0 extends app_view.AppView$(dart.legacy(menu_popup.MenuPopupComponent)) {
    build() {
      this[_compView_0] = new menu_popup$46template.ViewMenuPopupComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MenuPopupComponent_0_5] = new menu_popup.MenuPopupComponent.new();
      this[_compView_0].create(this[_MenuPopupComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMenuPopupComponentL()).new(0, this, this.rootEl, this[_MenuPopupComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (menu_popup$46template._ViewMenuPopupComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MenuPopupComponent_0_5] = null;
    menu_popup$46template._ViewMenuPopupComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = menu_popup$46template._ViewMenuPopupComponentHost0.prototype;
  dart.addTypeTests(menu_popup$46template._ViewMenuPopupComponentHost0);
  dart.addTypeCaches(menu_popup$46template._ViewMenuPopupComponentHost0);
  dart.setLibraryUri(menu_popup$46template._ViewMenuPopupComponentHost0, L0);
  dart.setFieldSignature(menu_popup$46template._ViewMenuPopupComponentHost0, () => ({
    __proto__: dart.getFields(menu_popup$46template._ViewMenuPopupComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(menu_popup$46template.ViewMenuPopupComponent0)),
    [_MenuPopupComponent_0_5]: dart.fieldType(dart.legacy(menu_popup.MenuPopupComponent))
  }));
  menu_popup$46template.viewFactory_MenuPopupComponent1 = function viewFactory_MenuPopupComponent1(parentView, parentIndex) {
    return new menu_popup$46template._ViewMenuPopupComponent1.new(parentView, parentIndex);
  };
  menu_popup$46template.viewFactory_MenuPopupComponentHost0 = function viewFactory_MenuPopupComponentHost0(parentView, parentIndex) {
    return new menu_popup$46template._ViewMenuPopupComponentHost0.new(parentView, parentIndex);
  };
  menu_popup$46template.initReflector = function initReflector() {
    if (dart.test(menu_popup$46template._visited)) {
      return;
    }
    menu_popup$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MenuPopupComponentL()), menu_popup$46template.MenuPopupComponentNgFactory);
    angular$46template.initReflector();
    deferred_content$46template.initReflector();
    focus$46template.initReflector();
    popup$46template.initReflector();
    material_list$46template.initReflector();
    menu_item_groups$46template.initReflector();
    menu_popup_wrapper$46template.initReflector();
    menu_root$46template.initReflector();
    material_popup$46template.initReflector();
    focusable_mixin$46template.initReflector();
    menu$46template.initReflector();
  };
  dart.copyProperties(menu_popup$46template, {
    get MenuPopupComponentNgFactory() {
      return menu_popup$46template._MenuPopupComponentNgFactory;
    }
  });
  var C7;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C6;
  dart.defineLazy(menu_popup$46template, {
    /*menu_popup$46template.styles$MenuPopupComponent*/get styles$MenuPopupComponent() {
      return [menu_popup$46scss$46css$46shim.styles];
    },
    /*menu_popup$46template._MenuPopupComponentNgFactory*/get _MenuPopupComponentNgFactory() {
      return C6 || CT.C6;
    },
    /*menu_popup$46template.styles$MenuPopupComponentHost*/get styles$MenuPopupComponentHost() {
      return C4 || CT.C4;
    },
    /*menu_popup$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var _query_AutoFocusDirective_1_0_isDirty = dart.privateName(menu_item_groups$46template, "_query_AutoFocusDirective_1_0_isDirty");
  var _query_FocusableActivateItem_1_0_isDirty = dart.privateName(menu_item_groups$46template, "_query_FocusableActivateItem_1_0_isDirty");
  var _compView_1$ = dart.privateName(menu_item_groups$46template, "_compView_1");
  var _FocusTrapComponent_1_5 = dart.privateName(menu_item_groups$46template, "_FocusTrapComponent_1_5");
  var _appEl_3 = dart.privateName(menu_item_groups$46template, "_appEl_3");
  var _NgFor_3_9 = dart.privateName(menu_item_groups$46template, "_NgFor_3_9");
  var _expr_0$ = dart.privateName(menu_item_groups$46template, "_expr_0");
  var _expr_1$ = dart.privateName(menu_item_groups$46template, "_expr_1");
  var _expr_2$ = dart.privateName(menu_item_groups$46template, "_expr_2");
  var _el_1 = dart.privateName(menu_item_groups$46template, "_el_1");
  var C8;
  var _appEl_4 = dart.privateName(menu_item_groups$46template, "_appEl_4");
  var _appEl_1$ = dart.privateName(menu_item_groups$46template, "_appEl_1");
  var _AutoFocusDirective_1_9 = dart.privateName(menu_item_groups$46template, "_AutoFocusDirective_1_9");
  var _appEl_19 = dart.privateName(menu_item_groups$46template, "_appEl_19");
  var _appEl_2 = dart.privateName(menu_item_groups$46template, "_appEl_2");
  var _AutoFocusDirective_2_5 = dart.privateName(menu_item_groups$46template, "_AutoFocusDirective_2_5");
  var _FocusActivableItemDirective_1_10 = dart.privateName(menu_item_groups$46template, "_FocusActivableItemDirective_1_10");
  menu_item_groups$46template.ViewMenuItemGroupsComponent0 = class ViewMenuItemGroupsComponent0 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/menu_item_groups.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_compView_1$] = new focus_trap$46template.ViewFocusTrapComponent0.new(this, 1);
      this[_el_1] = this[_compView_1$].rootEl;
      parentRenderNode[$append](this[_el_1]);
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_FocusTrapComponent_1_5] = new focus_trap.FocusTrapComponent.new();
      let _text_2 = dom_helpers.createText("\n  ");
      let _anchor_3 = dom_helpers.createAnchor();
      this[_appEl_3] = new view_container.ViewContainer.new(3, 1, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C8 || CT.C8);
      this[_NgFor_3_9] = new ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      let _text_4 = dom_helpers.createText("\n");
      this[_compView_1$].create(this[_FocusTrapComponent_1_5], JSArrayOfObjectL().of([JSArrayOfObjectL().of([_text_2, this[_appEl_3], _text_4])]));
      let _text_5 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_el_1][$addEventListener]("focus", this.eventHandler1(EventL(), FocusEventL(), dart.bind(_ctx, 'onFocus')));
      this.init0();
      _rootEl[$addEventListener]("mouseover", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'onMouseOver')));
      _rootEl[$addEventListener]("mouseout", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'onMouseOut')));
      _rootEl[$addEventListener]("mousemove", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'onMouseMove')));
      _rootEl[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeydown')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_2 = _ctx.menu.itemGroups;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
        this[_NgFor_3_9].ngForOf = currVal_2;
        this[_expr_2$] = currVal_2;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_3_9].ngDoCheck();
      }
      this[_appEl_3].detectChangesInNestedViews();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_AutoFocusDirective_1_0_isDirty])) {
          this[_FocusTrapComponent_1_5].autoFocus = queries.firstOrNull(AutoFocusDirectiveL(), this[_appEl_3].mapNestedViews(AutoFocusDirectiveL(), _ViewMenuItemGroupsComponent1L(), dart.fn(nestedView => nestedView[_appEl_4].mapNestedViews(AutoFocusDirectiveL(), _ViewMenuItemGroupsComponent4L(), dart.fn(nestedView => nestedView[_appEl_1$].mapNestedViews(AutoFocusDirectiveL(), _ViewMenuItemGroupsComponent5L(), dart.fn(nestedView => nestedView[_appEl_1$].mapNestedViews(AutoFocusDirectiveL(), _ViewMenuItemGroupsComponent6L(), dart.fn(nestedView => queries.flattenNodes(AutoFocusDirectiveL(), JSArrayOfListLOfAutoFocusDirectiveL().of([JSArrayOfAutoFocusDirectiveL().of([nestedView[_AutoFocusDirective_1_9]]), nestedView[_appEl_19].mapNestedViews(AutoFocusDirectiveL(), _ViewMenuItemGroupsComponent15L(), dart.fn(nestedView => nestedView[_appEl_2].mapNestedViews(AutoFocusDirectiveL(), _ViewMenuItemGroupsComponent16L(), dart.fn(nestedView => JSArrayOfAutoFocusDirectiveL().of([nestedView[_AutoFocusDirective_2_5]]), _ViewMenuItemGroupsComponent16LToListLOfAutoFocusDirectiveL())), _ViewMenuItemGroupsComponent15LToListLOfAutoFocusDirectiveL()))])), _ViewMenuItemGroupsComponent6LToListLOfAutoFocusDirectiveL())), _ViewMenuItemGroupsComponent5LToListLOfAutoFocusDirectiveL())), _ViewMenuItemGroupsComponent4LToListLOfAutoFocusDirectiveL())), _ViewMenuItemGroupsComponent1LToListLOfAutoFocusDirectiveL())));
          this[_query_AutoFocusDirective_1_0_isDirty] = false;
        }
        if (dart.test(this[_query_FocusableActivateItem_1_0_isDirty])) {
          _ctx.focusableItems = this[_appEl_3].mapNestedViews(FocusableActivateItemL(), _ViewMenuItemGroupsComponent1L(), dart.fn(nestedView => nestedView[_appEl_4].mapNestedViews(FocusableActivateItemL(), _ViewMenuItemGroupsComponent4L(), dart.fn(nestedView => nestedView[_appEl_1$].mapNestedViews(FocusableActivateItemL(), _ViewMenuItemGroupsComponent5L(), dart.fn(nestedView => nestedView[_appEl_1$].mapNestedViews(FocusableActivateItemL(), _ViewMenuItemGroupsComponent6L(), dart.fn(nestedView => JSArrayOfFocusableActivateItemL().of([nestedView[_FocusActivableItemDirective_1_10]]), _ViewMenuItemGroupsComponent6LToListLOfFocusableActivateItemL())), _ViewMenuItemGroupsComponent5LToListLOfFocusableActivateItemL())), _ViewMenuItemGroupsComponent4LToListLOfFocusableActivateItemL())), _ViewMenuItemGroupsComponent1LToListLOfFocusableActivateItemL()));
          this[_query_FocusableActivateItem_1_0_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.isMouseDriven;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_1], "mouse-driven", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = !dart.test(_ctx.isMouseDriven);
      if (dart.test(app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_1], "keyboard-driven", currVal_1);
        this[_expr_1$] = currVal_1;
      }
      this[_compView_1$].detectChanges();
    }
    destroyInternal() {
      this[_appEl_3].destroyNestedViews();
      this[_compView_1$].destroyInternalState();
      this[_FocusTrapComponent_1_5].ngOnDestroy();
    }
    initComponentStyles() {
      let styles = menu_item_groups$46template.ViewMenuItemGroupsComponent0._componentStyles;
      if (styles == null) {
        menu_item_groups$46template.ViewMenuItemGroupsComponent0._componentStyles = styles = menu_item_groups$46template.ViewMenuItemGroupsComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(menu_item_groups$46template.styles$MenuItemGroupsComponent, menu_item_groups$46template.ViewMenuItemGroupsComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (menu_item_groups$46template.ViewMenuItemGroupsComponent0.new = function(parentView, parentIndex) {
    this[_query_AutoFocusDirective_1_0_isDirty] = true;
    this[_query_FocusableActivateItem_1_0_isDirty] = true;
    this[_compView_1$] = null;
    this[_FocusTrapComponent_1_5] = null;
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    this[_el_1] = null;
    menu_item_groups$46template.ViewMenuItemGroupsComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("menu-item-groups"));
  }).prototype = menu_item_groups$46template.ViewMenuItemGroupsComponent0.prototype;
  dart.addTypeTests(menu_item_groups$46template.ViewMenuItemGroupsComponent0);
  dart.addTypeCaches(menu_item_groups$46template.ViewMenuItemGroupsComponent0);
  dart.setLibraryUri(menu_item_groups$46template.ViewMenuItemGroupsComponent0, L1);
  dart.setFieldSignature(menu_item_groups$46template.ViewMenuItemGroupsComponent0, () => ({
    __proto__: dart.getFields(menu_item_groups$46template.ViewMenuItemGroupsComponent0.__proto__),
    [_query_AutoFocusDirective_1_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_query_FocusableActivateItem_1_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_compView_1$]: dart.fieldType(dart.legacy(focus_trap$46template.ViewFocusTrapComponent0)),
    [_FocusTrapComponent_1_5]: dart.fieldType(dart.legacy(focus_trap.FocusTrapComponent)),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_3_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0$]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1$]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2$]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(menu_item_groups$46template.ViewMenuItemGroupsComponent0, {
    /*menu_item_groups$46template.ViewMenuItemGroupsComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _NgIf_2_9 = dart.privateName(menu_item_groups$46template, "_NgIf_2_9");
  var _NgIf_4_9 = dart.privateName(menu_item_groups$46template, "_NgIf_4_9");
  var _el_0$ = dart.privateName(menu_item_groups$46template, "_el_0");
  var C9;
  var C10;
  menu_item_groups$46template._ViewMenuItemGroupsComponent1 = class _ViewMenuItemGroupsComponent1 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let doc = html.document;
      this[_el_0$] = DivElementL().as(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0$], "group");
      dom_helpers.setAttribute(this[_el_0$], "group", "");
      dom_helpers.setAttribute(this[_el_0$], "role", "menu");
      this.addShimC(this[_el_0$]);
      let _text_1 = dom_helpers.appendText(this[_el_0$], "\n    ");
      let _anchor_2 = dom_helpers.appendAnchor(this[_el_0$]);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C9 || CT.C9);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _text_3 = dom_helpers.appendText(this[_el_0$], "\n    ");
      let _anchor_4 = dom_helpers.appendAnchor(this[_el_0$]);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C10 || CT.C10);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _text_5 = dom_helpers.appendText(this[_el_0$], "\n  ");
      this.init1(this[_el_0$]);
    }
    detectChangesInternal() {
      let local_group = this.locals[$_get]("$implicit");
      this[_NgIf_2_9].ngIf = boolL().as(dart.dload(local_group, 'hasLabel'));
      this[_NgIf_4_9].ngIf = !dart.dtest(dart.dload(local_group, 'isCollapsible')) || dart.dtest(dart.dload(local_group, 'isExpanded'));
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      let currVal_0 = dart.dload(local_group, 'hasSeparator');
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        dom_helpers.updateClassBinding(this[_el_0$], "has-separator", boolL().as(currVal_0));
        this[_expr_0$] = boolL().as(currVal_0);
      }
      let currVal_1 = dart.dload(local_group, 'hasLabel');
      if (dart.test(app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        dom_helpers.updateClassBinding(this[_el_0$], "has-label", boolL().as(currVal_1));
        this[_expr_1$] = boolL().as(currVal_1);
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent1.new = function(parentView, parentIndex) {
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_el_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent1.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent1);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent1);
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent1, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent1, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent1.__proto__),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0$]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1$]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0$]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _textBinding_4 = dart.privateName(menu_item_groups$46template, "_textBinding_4");
  var _ButtonDirective_0_5 = dart.privateName(menu_item_groups$46template, "_ButtonDirective_0_5");
  var _appEl_7 = dart.privateName(menu_item_groups$46template, "_appEl_7");
  var _NgIf_7_9 = dart.privateName(menu_item_groups$46template, "_NgIf_7_9");
  var C11;
  var _handle_trigger_0_0 = dart.privateName(menu_item_groups$46template, "_handle_trigger_0_0");
  menu_item_groups$46template._ViewMenuItemGroupsComponent2 = class _ViewMenuItemGroupsComponent2 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let doc = html.document;
      this[_el_0$] = DivElementL().as(doc[$createElement]("div"));
      dom_helpers.setAttribute(this[_el_0$], "buttonDecorator", "");
      this.updateChildClass(this[_el_0$], "group-header");
      this.addShimC(this[_el_0$]);
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0$], null));
      let _text_1 = dom_helpers.appendText(this[_el_0$], "\n      ");
      let _el_2 = dom_helpers.appendDiv(doc, this[_el_0$]);
      this.updateChildClass(_el_2, "group-label");
      this.addShimC(_el_2);
      let _text_3 = dom_helpers.appendText(_el_2, "\n        ");
      _el_2[$append](this[_textBinding_4].element);
      let _text_5 = dom_helpers.appendText(_el_2, "\n      ");
      let _text_6 = dom_helpers.appendText(this[_el_0$], "\n      ");
      let _anchor_7 = dom_helpers.appendAnchor(this[_el_0$]);
      this[_appEl_7] = new view_container.ViewContainer.new(7, 0, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], C11 || CT.C11);
      this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = dom_helpers.appendText(this[_el_0$], "\n    ");
      this[_el_0$][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0$][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_trigger_0_0)));
      this.init(JSArrayOfObjectL().of([this[_el_0$]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ButtonDirectiveL()) && dart.notNull(nodeIndex) <= 8) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t0;
      let local_group = this.parentView.locals[$_get]("$implicit");
      this[_NgIf_7_9].ngIf = boolL().as(dart.dload(local_group, 'isCollapsible'));
      this[_appEl_7].detectChangesInNestedViews();
      let currVal_0 = dart.dtest(dart.dload(local_group, 'isCollapsible')) ? dart.toString(dart.dload(local_group, 'isExpanded')) : null;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        dom_helpers.updateAttribute(this[_el_0$], "aria-expanded", (t0 = currVal_0, t0 == null ? null : dart.toString(t0)));
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = dart.dload(local_group, 'isCollapsible');
      if (dart.test(app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        dom_helpers.updateClassBinding(this[_el_0$], "is-collapsible", boolL().as(currVal_1));
        this[_expr_1$] = boolL().as(currVal_1);
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0$]);
      this[_textBinding_4].updateText(StringL().as(interpolate.interpolate0(dart.dload(local_group, 'uiDisplayName'))));
    }
    destroyInternal() {
      this[_appEl_7].destroyNestedViews();
    }
    [_handle_trigger_0_0]($36event) {
      let local_group = this.parentView.locals[$_get]("$implicit");
      let _ctx = this.ctx;
      _ctx.toggleExpansionIfCollapsible(MenuItemGroupL().as(local_group));
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_4] = new text_binding.TextBinding.new();
    this[_ButtonDirective_0_5] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_el_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent2.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent2);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent2);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent2, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent2.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent2, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent2, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent2.__proto__),
    [_textBinding_4]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_appEl_7]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_7_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0$]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _compView_0$ = dart.privateName(menu_item_groups$46template, "_compView_0");
  var _MaterialIconComponent_0_5 = dart.privateName(menu_item_groups$46template, "_MaterialIconComponent_0_5");
  menu_item_groups$46template._ViewMenuItemGroupsComponent3 = class _ViewMenuItemGroupsComponent3 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      this[_compView_0$] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this.updateChildClassNonHtml(this[_el_0$], "expansion-icon");
      this.addShimC(HtmlElementL().as(this[_el_0$]));
      this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_0$]));
      this[_compView_0$].create0(this[_MaterialIconComponent_0_5]);
      this.init1(this[_el_0$]);
    }
    detectChangesInternal() {
      let changed = false;
      let local_group = this.parentView.parentView.locals[$_get]("$implicit");
      changed = false;
      let currVal_1 = dart.dtest(dart.dload(local_group, 'isExpanded')) ? "expand_less" : "expand_more";
      if (dart.test(app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this[_MaterialIconComponent_0_5].icon = currVal_1;
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      let currVal_0 = dart.dload(local_group, 'isExpanded');
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0$], "expanded", boolL().as(currVal_0));
        this[_expr_0$] = boolL().as(currVal_0);
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent3.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_el_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent3.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent3);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent3);
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent3, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent3, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent3.__proto__),
    [_compView_0$]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_0_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0$]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_el_0$]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _NgFor_1_9 = dart.privateName(menu_item_groups$46template, "_NgFor_1_9");
  var C12;
  menu_item_groups$46template._ViewMenuItemGroupsComponent4 = class _ViewMenuItemGroupsComponent4 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let _text_0 = dom_helpers.createText("\n      ");
      let _anchor_1 = dom_helpers.createAnchor();
      this[_appEl_1$] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$], C12 || CT.C12);
      this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1$], _TemplateRef_1_8);
      let _text_2 = dom_helpers.createText("\n    ");
      this.init(JSArrayOfObjectL().of([_text_0, this[_appEl_1$], _text_2]), null);
    }
    detectChangesInternal() {
      let local_group = this.parentView.locals[$_get]("$implicit");
      let currVal_0 = local_group;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_NgFor_1_9].ngForOf = IterableLOfObjectL().as(currVal_0);
        this[_expr_0$] = currVal_0;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1$].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1$].destroyNestedViews();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent4.new = function(parentView, parentIndex) {
    this[_appEl_1$] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent4.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent4.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent4);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent4);
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent4, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent4, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent4.__proto__),
    [_appEl_1$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  var _NgIf_1_9 = dart.privateName(menu_item_groups$46template, "_NgIf_1_9");
  var C13;
  menu_item_groups$46template._ViewMenuItemGroupsComponent5 = class _ViewMenuItemGroupsComponent5 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let _text_0 = dom_helpers.createText("\n        ");
      let _anchor_1 = dom_helpers.createAnchor();
      this[_appEl_1$] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$], C13 || CT.C13);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
      let _text_2 = dom_helpers.createText("\n      ");
      this.init(JSArrayOfObjectL().of([_text_0, this[_appEl_1$], _text_2]), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_item = this.locals[$_get]("$implicit");
      this[_NgIf_1_9].ngIf = _ctx.isItemVisible(MenuItemL().as(local_item));
      this[_appEl_1$].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1$].destroyNestedViews();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent5.new = function(parentView, parentIndex) {
    this[_appEl_1$] = null;
    this[_NgIf_1_9] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent5.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent5.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent5);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent5);
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent5, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent5, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent5.__proto__),
    [_appEl_1$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  var _ActiveItemDirective_1_8 = dart.privateName(menu_item_groups$46template, "_ActiveItemDirective_1_8");
  var _MaterialTooltipDirective_1_11 = dart.privateName(menu_item_groups$46template, "_MaterialTooltipDirective_1_11");
  var _MaterialSelectItemComponent_1_12 = dart.privateName(menu_item_groups$46template, "_MaterialSelectItemComponent_1_12");
  var _NgClass_1_13 = dart.privateName(menu_item_groups$46template, "_NgClass_1_13");
  var _PopupSourceDirective_1_14 = dart.privateName(menu_item_groups$46template, "_PopupSourceDirective_1_14");
  var __TooltipController_1_19 = dart.privateName(menu_item_groups$46template, "__TooltipController_1_19");
  var _NgIf_3_9 = dart.privateName(menu_item_groups$46template, "_NgIf_3_9");
  var _appEl_9 = dart.privateName(menu_item_groups$46template, "_appEl_9");
  var _NgIf_9_9 = dart.privateName(menu_item_groups$46template, "_NgIf_9_9");
  var _appEl_11 = dart.privateName(menu_item_groups$46template, "_appEl_11");
  var _NgIf_11_9 = dart.privateName(menu_item_groups$46template, "_NgIf_11_9");
  var _appEl_14 = dart.privateName(menu_item_groups$46template, "_appEl_14");
  var _NgIf_14_9 = dart.privateName(menu_item_groups$46template, "_NgIf_14_9");
  var _appEl_16 = dart.privateName(menu_item_groups$46template, "_appEl_16");
  var _NgIf_16_9 = dart.privateName(menu_item_groups$46template, "_NgIf_16_9");
  var _NgIf_19_9 = dart.privateName(menu_item_groups$46template, "_NgIf_19_9");
  var _expr_3$ = dart.privateName(menu_item_groups$46template, "_expr_3");
  var _expr_4$ = dart.privateName(menu_item_groups$46template, "_expr_4");
  var _expr_5$ = dart.privateName(menu_item_groups$46template, "_expr_5");
  var _expr_6$ = dart.privateName(menu_item_groups$46template, "_expr_6");
  var _expr_7 = dart.privateName(menu_item_groups$46template, "_expr_7");
  var _expr_8 = dart.privateName(menu_item_groups$46template, "_expr_8");
  var _expr_9 = dart.privateName(menu_item_groups$46template, "_expr_9");
  var _expr_10 = dart.privateName(menu_item_groups$46template, "_expr_10");
  var _expr_11 = dart.privateName(menu_item_groups$46template, "_expr_11");
  var _expr_12 = dart.privateName(menu_item_groups$46template, "_expr_12");
  var _expr_13 = dart.privateName(menu_item_groups$46template, "_expr_13");
  var _expr_14 = dart.privateName(menu_item_groups$46template, "_expr_14");
  var _expr_15 = dart.privateName(menu_item_groups$46template, "_expr_15");
  var _expr_16 = dart.privateName(menu_item_groups$46template, "_expr_16");
  var _expr_17 = dart.privateName(menu_item_groups$46template, "_expr_17");
  var _expr_19 = dart.privateName(menu_item_groups$46template, "_expr_19");
  var _expr_20 = dart.privateName(menu_item_groups$46template, "_expr_20");
  var _expr_23 = dart.privateName(menu_item_groups$46template, "_expr_23");
  var _TooltipController_1_19 = dart.privateName(menu_item_groups$46template, "_TooltipController_1_19");
  var C14;
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var _handle_trigger_1_0 = dart.privateName(menu_item_groups$46template, "_handle_trigger_1_0");
  menu_item_groups$46template._ViewMenuItemGroupsComponent6 = class _ViewMenuItemGroupsComponent6 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    get [_TooltipController_1_19]() {
      if (this[__TooltipController_1_19] == null) {
        this[__TooltipController_1_19] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(TooltipControllerL(), dart.wrapType(TooltipControllerL()), dart.fn(() => module.createTooltipController(TooltipControllerL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), DisposerL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex))), VoidToTooltipControllerL())) : module.createTooltipController(TooltipControllerL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), DisposerL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)));
      }
      return this[__TooltipController_1_19];
    }
    build() {
      let _text_0 = dom_helpers.createText("\n          ");
      this[_compView_1$] = new material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      this[_el_1] = this[_compView_1$].rootEl;
      this.updateChildClassNonHtml(this[_el_1], interpolate.interpolateString2("", "menu-item", " ", "item", ""));
      dom_helpers.setAttribute(this[_el_1], "closeOnActivate", "false");
      dom_helpers.setAttribute(this[_el_1], "popupSource", "");
      dom_helpers.setAttribute(this[_el_1], "useCheckMarks", "true");
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_appEl_1$] = new view_container.ViewContainer.new(1, null, this, this[_el_1]);
      this[_ActiveItemDirective_1_8] = new active_item_directive$46template.ActiveItemDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ActiveItemDirectiveL(), dart.wrapType(ActiveItemDirectiveL()), dart.fn(() => new active_item_directive.ActiveItemDirective.new(HtmlElementL().as(this[_el_1]), DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), ModalL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), PopupRefL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupRefL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex))), VoidToActiveItemDirectiveL())) : new active_item_directive.ActiveItemDirective.new(HtmlElementL().as(this[_el_1]), DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), ModalL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), PopupRefL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupRefL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex))));
      this[_AutoFocusDirective_1_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoFocusDirectiveL(), dart.wrapType(AutoFocusDirectiveL()), dart.fn(() => new focus.AutoFocusDirective.new(HtmlElementL().as(this[_el_1]), DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), null, ModalComponentL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), PopupRefL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupRefL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex))), VoidToAutoFocusDirectiveL())) : new focus.AutoFocusDirective.new(HtmlElementL().as(this[_el_1]), DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), null, ModalComponentL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), PopupRefL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupRefL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)));
      this[_FocusActivableItemDirective_1_10] = new focus_activable_item.FocusActivableItemDirective.new(HtmlElementL().as(this[_el_1]));
      this[_MaterialTooltipDirective_1_11] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTooltipDirectiveL(), dart.wrapType(MaterialTooltipDirectiveL()), dart.fn(() => new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_appEl_1$], HtmlElementL().as(this[_el_1]), this[_appEl_1$], this[_compView_1$], WindowL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(WindowL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), null, null), VoidToMaterialTooltipDirectiveL())) : new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_appEl_1$], HtmlElementL().as(this[_el_1]), this[_appEl_1$], this[_compView_1$], WindowL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(WindowL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), null, null);
      this[_MaterialSelectItemComponent_1_12] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new material_select_item.MaterialSelectItemComponent.new(HtmlElementL().as(this[_el_1]), DropdownHandleL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_1$], null), VoidToMaterialSelectItemComponentL())) : new material_select_item.MaterialSelectItemComponent.new(HtmlElementL().as(this[_el_1]), DropdownHandleL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_1$], null);
      this[_NgClass_1_13] = new ng_class.NgClass.new(this[_el_1]);
      this[_PopupSourceDirective_1_14] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), HtmlElementL().as(this[_el_1]), ReferenceDirectiveL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), FocusableL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), HtmlElementL().as(this[_el_1]), ReferenceDirectiveL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), FocusableL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), null);
      let _text_2 = dom_helpers.createText("\n            ");
      let _anchor_3 = dom_helpers.createAnchor();
      this[_appEl_3] = new view_container.ViewContainer.new(3, 1, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C14 || CT.C14);
      this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _text_4 = dom_helpers.createText("\n            ");
      let doc = html.document;
      let _el_5 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_5), "menu-item-label-section");
      this.addShimE(_el_5);
      let _text_6 = dom_helpers.appendText(_el_5, "\n              ");
      let _anchor_7 = dom_helpers.appendAnchor(_el_5);
      this[_appEl_7] = new view_container.ViewContainer.new(7, 5, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], C15 || CT.C15);
      this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = dom_helpers.appendText(_el_5, "\n              ");
      let _anchor_9 = dom_helpers.appendAnchor(_el_5);
      this[_appEl_9] = new view_container.ViewContainer.new(9, 5, this, _anchor_9);
      let _TemplateRef_9_8 = new template_ref.TemplateRef.new(this[_appEl_9], C16 || CT.C16);
      this[_NgIf_9_9] = new ng_if.NgIf.new(this[_appEl_9], _TemplateRef_9_8);
      let _text_10 = dom_helpers.appendText(_el_5, "\n              ");
      let _anchor_11 = dom_helpers.appendAnchor(_el_5);
      this[_appEl_11] = new view_container.ViewContainer.new(11, 5, this, _anchor_11);
      let _TemplateRef_11_8 = new template_ref.TemplateRef.new(this[_appEl_11], C17 || CT.C17);
      this[_NgIf_11_9] = new ng_if.NgIf.new(this[_appEl_11], _TemplateRef_11_8);
      let _text_12 = dom_helpers.appendText(_el_5, "\n            ");
      let _text_13 = dom_helpers.createText("\n            ");
      let _anchor_14 = dom_helpers.createAnchor();
      this[_appEl_14] = new view_container.ViewContainer.new(14, 1, this, _anchor_14);
      let _TemplateRef_14_8 = new template_ref.TemplateRef.new(this[_appEl_14], C18 || CT.C18);
      this[_NgIf_14_9] = new ng_if.NgIf.new(this[_appEl_14], _TemplateRef_14_8);
      let _text_15 = dom_helpers.createText("\n            ");
      let _anchor_16 = dom_helpers.createAnchor();
      this[_appEl_16] = new view_container.ViewContainer.new(16, 1, this, _anchor_16);
      let _TemplateRef_16_8 = new template_ref.TemplateRef.new(this[_appEl_16], C19 || CT.C19);
      this[_NgIf_16_9] = new ng_if.NgIf.new(this[_appEl_16], _TemplateRef_16_8);
      let _text_17 = dom_helpers.createText("\n          ");
      this[_compView_1$].create(this[_MaterialSelectItemComponent_1_12], JSArrayOfObjectL().of([JSArrayOfObjectL().of([_text_2, this[_appEl_3], _text_4, _el_5, _text_13, this[_appEl_14], _text_15, this[_appEl_16], _text_17])]));
      let _text_18 = dom_helpers.createText("\n          ");
      let _anchor_19 = dom_helpers.createAnchor();
      this[_appEl_19] = new view_container.ViewContainer.new(19, null, this, _anchor_19);
      let _TemplateRef_19_8 = new template_ref.TemplateRef.new(this[_appEl_19], C20 || CT.C20);
      this[_NgIf_19_9] = new ng_if.NgIf.new(this[_appEl_19], _TemplateRef_19_8);
      let _text_20 = dom_helpers.createText("\n        ");
      this[_el_1][$addEventListener]("mouseenter", this.eventHandler0(EventL(), dart.bind(this[_ActiveItemDirective_1_8].instance, 'onMouseEnter')));
      this[_el_1][$addEventListener]("mouseleave", this.eventHandler0(EventL(), dart.bind(this[_ActiveItemDirective_1_8].instance, 'onMouseLeave')));
      let subscription_0 = this[_MaterialSelectItemComponent_1_12].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_trigger_1_0)));
      this.init(JSArrayOfObjectL().of([_text_0, this[_appEl_1$], _text_18, this[_appEl_19], _text_20]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 17) {
        if (token === dart.wrapType(FocusableActivateItemL())) {
          return this[_FocusActivableItemDirective_1_10];
        }
        if (token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) {
          return this[_MaterialSelectItemComponent_1_12];
        }
        if (token === dart.wrapType(TooltipControllerL())) {
          return this[_TooltipController_1_19];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_i = optimizations.unsafeCast(intL(), this.parentView.parentView.parentView.locals[$_get]("index"));
      let local_j = optimizations.unsafeCast(intL(), this.parentView.locals[$_get]("index"));
      let local_item = this.parentView.locals[$_get]("$implicit");
      let local_group = this.parentView.parentView.parentView.locals[$_get]("$implicit");
      let currVal_9 = _ctx.isItemActive(MenuItemL().as(local_item));
      if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_ActiveItemDirective_1_8].instance.itemActive = currVal_9;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.hasAutoFocus(_ctx.activeModel == null ? null : _ctx.activeModel.id(local_item));
      if (dart.test(app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_AutoFocusDirective_1_9].autoFocus = currVal_10;
        this[_expr_10] = currVal_10;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AutoFocusDirective_1_9].ngOnInit();
      }
      let currVal_11 = _ctx.activeModel == null ? null : _ctx.activeModel.id(local_item);
      if (dart.test(app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_FocusActivableItemDirective_1_10].key = currVal_11;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.tooltipPositions;
      if (dart.test(app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_MaterialTooltipDirective_1_11].positions = currVal_12;
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = dart.dload(local_item, 'tooltip');
      if (dart.test(app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        this[_MaterialTooltipDirective_1_11].text = StringL().as(currVal_13);
        this[_expr_13] = StringL().as(currVal_13);
      }
      let currVal_14 = dart.dload(local_item, 'showTooltip');
      if (dart.test(app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        this[_MaterialTooltipDirective_1_11].canShow = boolL().as(currVal_14);
        this[_expr_14] = boolL().as(currVal_14);
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTooltipDirective_1_11].ngOnInit();
      }
      if (firstCheck) {
        this[_MaterialSelectItemComponent_1_12].useCheckMarks = "true";
        this[_MaterialSelectItemComponent_1_12].closeOnActivate = "false";
      }
      let currVal_15 = interpolate.interpolate0(dart.dload(local_group, 'itemsRole'));
      if (dart.test(app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        this[_MaterialSelectItemComponent_1_12].role = StringL().as(currVal_15);
        this[_expr_15] = StringL().as(currVal_15);
      }
      let currVal_16 = !dart.dtest(dart.dload(local_item, 'enabled'));
      if (dart.test(app_view_utils.checkBinding(this[_expr_16], currVal_16))) {
        this[_MaterialSelectItemComponent_1_12].disabled = currVal_16;
        this[_expr_16] = currVal_16;
      }
      let currVal_17 = _ctx.getItemValue(MenuItemL().as(local_item));
      if (dart.test(app_view_utils.checkBinding(this[_expr_17], currVal_17))) {
        this[_MaterialSelectItemComponent_1_12].value = currVal_17;
        this[_expr_17] = currVal_17;
      }
      let currVal_19 = _ctx.shouldSelectItemOnClick(MenuItemL().as(local_item));
      if (dart.test(app_view_utils.checkBinding(this[_expr_19], currVal_19))) {
        this[_MaterialSelectItemComponent_1_12].selectOnActivate = currVal_19;
        this[_expr_19] = currVal_19;
      }
      let currVal_20 = _ctx.getSelectionModel(MenuItemGroupL().as(local_group));
      if (dart.test(app_view_utils.checkBinding(this[_expr_20], currVal_20))) {
        this[_MaterialSelectItemComponent_1_12].selection = currVal_20;
        this[_expr_20] = currVal_20;
      }
      if (firstCheck) {
        this[_NgClass_1_13].initialClasses = "menu-item";
      }
      let currVal_23 = dart.dload(local_item, 'cssClasses');
      if (dart.test(app_view_utils.checkBinding(this[_expr_23], currVal_23))) {
        this[_NgClass_1_13].rawClass = currVal_23;
        this[_expr_23] = currVal_23;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgClass_1_13].ngDoCheck();
      }
      this[_NgIf_3_9].ngIf = boolL().as(dart.dload(local_item, 'hasIcon'));
      this[_NgIf_7_9].ngIf = _ctx.hasHighlight;
      this[_NgIf_9_9].ngIf = !dart.test(_ctx.hasHighlight);
      this[_NgIf_11_9].ngIf = boolL().as(dart.dload(local_item, 'hasSecondaryLabel'));
      this[_NgIf_14_9].ngIf = boolL().as(dart.dload(dart.dload(local_item, 'itemSuffixes'), 'isNotEmpty'));
      this[_NgIf_16_9].ngIf = boolL().as(dart.dload(local_item, 'hasSubMenu'));
      this[_NgIf_19_9].ngIf = boolL().as(dart.dload(local_item, 'hasSubMenu'));
      this[_appEl_1$].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_9].detectChangesInNestedViews();
      this[_appEl_11].detectChangesInNestedViews();
      this[_appEl_14].detectChangesInNestedViews();
      this[_appEl_16].detectChangesInNestedViews();
      this[_appEl_19].detectChangesInNestedViews();
      let currVal_0 = local_i;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        dom_helpers.updateAttribute(this[_el_1], "data-group-index", (t0 = currVal_0, t0 == null ? null : dart.toString(t0)));
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = local_j;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_1], "data-item-index", (t0$ = currVal_1, t0$ == null ? null : dart.toString(t0$)));
        this[_expr_1$] = currVal_1;
      }
      let currVal_2 = _ctx.activeModel == null ? null : _ctx.activeModel.id(local_item);
      if (dart.test(app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
        dom_helpers.updateAttribute(this[_el_1], "id", currVal_2);
        this[_expr_2$] = currVal_2;
      }
      let currVal_3 = _ctx.isSubMenuVisible(MenuItemL().as(local_item));
      if (dart.test(app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_1], "is-menu-parent", currVal_3);
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = dart.dload(local_item, 'ariaLabel');
      if (dart.test(app_view_utils.checkBinding(this[_expr_4$], currVal_4))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-label", (t0$0 = currVal_4, t0$0 == null ? null : dart.toString(t0$0)));
        this[_expr_4$] = currVal_4;
      }
      let currVal_5 = !dart.dtest(dart.dload(local_item, 'enabled'));
      if (dart.test(app_view_utils.checkBinding(this[_expr_5$], currVal_5))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-disabled", (t0$1 = currVal_5, t0$1 === null ? null : t0$1[$toString]()));
        this[_expr_5$] = currVal_5;
      }
      let currVal_6 = dart.dload(local_item, 'hasSubMenu');
      if (dart.test(app_view_utils.checkBinding(this[_expr_6$], currVal_6))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-haspopup", (t0$2 = currVal_6, t0$2 == null ? null : dart.toString(t0$2)));
        this[_expr_6$] = currVal_6;
      }
      let currVal_7 = dart.dtest(dart.dload(local_item, 'hasSubMenu')) ? _ctx.isSubMenuVisible(MenuItemL().as(local_item)) : null;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-expanded", (t0$3 = currVal_7, t0$3 == null ? null : dart.toString(t0$3)));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.itemAriaChecked(MenuItemL().as(local_item));
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-checked", currVal_8);
        this[_expr_8] = currVal_8;
      }
      this[_ActiveItemDirective_1_8].detectHostChanges(this[_compView_1$], this[_el_1]);
      this[_compView_1$].detectHostChanges(firstCheck);
      this[_compView_1$].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_ActiveItemDirective_1_8].instance.ngAfterViewInit();
          this[_MaterialTooltipDirective_1_11].ngAfterViewInit();
          this[_PopupSourceDirective_1_14].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMenuItemGroupsComponent0L(), this.parentView.parentView.parentView.parentView)[_query_AutoFocusDirective_1_0_isDirty] = true;
      optimizations.unsafeCast(ViewMenuItemGroupsComponent0L(), this.parentView.parentView.parentView.parentView)[_query_FocusableActivateItem_1_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_1$].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_9].destroyNestedViews();
      this[_appEl_11].destroyNestedViews();
      this[_appEl_14].destroyNestedViews();
      this[_appEl_16].destroyNestedViews();
      this[_appEl_19].destroyNestedViews();
      this[_compView_1$].destroyInternalState();
      this[_ActiveItemDirective_1_8].instance.ngOnDestroy();
      this[_AutoFocusDirective_1_9].ngOnDestroy();
      this[_MaterialTooltipDirective_1_11].ngOnDestroy();
      this[_MaterialSelectItemComponent_1_12].ngOnDestroy();
      this[_NgClass_1_13].ngOnDestroy();
      this[_PopupSourceDirective_1_14].ngOnDestroy();
    }
    [_handle_trigger_1_0]($36event) {
      let local_item = this.parentView.locals[$_get]("$implicit");
      let local_group = this.parentView.parentView.parentView.locals[$_get]("$implicit");
      let _ctx = this.ctx;
      _ctx.handleSelectItemTrigger(MenuItemL().as(local_item), MenuItemGroupL().as(local_group), UIEventL().as($36event));
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent6.new = function(parentView, parentIndex) {
    this[_compView_1$] = null;
    this[_appEl_1$] = null;
    this[_ActiveItemDirective_1_8] = null;
    this[_AutoFocusDirective_1_9] = null;
    this[_FocusActivableItemDirective_1_10] = null;
    this[_MaterialTooltipDirective_1_11] = null;
    this[_MaterialSelectItemComponent_1_12] = null;
    this[_NgClass_1_13] = null;
    this[_PopupSourceDirective_1_14] = null;
    this[__TooltipController_1_19] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_9] = null;
    this[_NgIf_9_9] = null;
    this[_appEl_11] = null;
    this[_NgIf_11_9] = null;
    this[_appEl_14] = null;
    this[_NgIf_14_9] = null;
    this[_appEl_16] = null;
    this[_NgIf_16_9] = null;
    this[_appEl_19] = null;
    this[_NgIf_19_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    this[_expr_3$] = null;
    this[_expr_4$] = null;
    this[_expr_5$] = null;
    this[_expr_6$] = null;
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
    this[_expr_19] = null;
    this[_expr_20] = null;
    this[_expr_23] = null;
    this[_el_1] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent6.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent6);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent6);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent6, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_trigger_1_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent6, () => ({
    __proto__: dart.getGetters(menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__),
    [_TooltipController_1_19]: dart.dynamic
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent6, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent6, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__),
    [_compView_1$]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0)),
    [_appEl_1$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_ActiveItemDirective_1_8]: dart.fieldType(dart.legacy(active_item_directive$46template.ActiveItemDirectiveNgCd)),
    [_AutoFocusDirective_1_9]: dart.fieldType(dart.legacy(focus.AutoFocusDirective)),
    [_FocusActivableItemDirective_1_10]: dart.fieldType(dart.legacy(focus_activable_item.FocusActivableItemDirective)),
    [_MaterialTooltipDirective_1_11]: dart.fieldType(dart.legacy(tooltip.MaterialTooltipDirective)),
    [_MaterialSelectItemComponent_1_12]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent)),
    [_NgClass_1_13]: dart.fieldType(dart.legacy(ng_class.NgClass)),
    [_PopupSourceDirective_1_14]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
    [__TooltipController_1_19]: dart.fieldType(dart.dynamic),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_7]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_7_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_9]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_9_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_11]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_11_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_14]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_14_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_16]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_16_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_19]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_19_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4$]: dart.fieldType(dart.dynamic),
    [_expr_5$]: dart.fieldType(dart.dynamic),
    [_expr_6$]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_10]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_11]: dart.fieldType(dart.legacy(core.String)),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.legacy(core.String)),
    [_expr_14]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_15]: dart.fieldType(dart.legacy(core.String)),
    [_expr_16]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_17]: dart.fieldType(dart.dynamic),
    [_expr_19]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_20]: dart.fieldType(dart.dynamic),
    [_expr_23]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(dart.legacy(html.Element))
  }));
  menu_item_groups$46template._ViewMenuItemGroupsComponent7 = class _ViewMenuItemGroupsComponent7 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      this[_compView_0$] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootEl;
      this.updateChildClassNonHtml(_el_0, "material-list-item-primary");
      this.addShimC(_el_0);
      this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(_el_0);
      this[_compView_0$].create0(this[_MaterialIconComponent_0_5]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let local_item = this.parentView.parentView.locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = dart.dload(local_item, 'icon');
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_MaterialIconComponent_0_5].icon = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent7.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent7.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent7.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent7);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent7);
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent7, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent7, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent7.__proto__),
    [_compView_0$]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_0_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  var _compView_2 = dart.privateName(menu_item_groups$46template, "_compView_2");
  var _HighlightedTextComponent_2_5 = dart.privateName(menu_item_groups$46template, "_HighlightedTextComponent_2_5");
  var _appEl_5 = dart.privateName(menu_item_groups$46template, "_appEl_5");
  var _NgIf_5_9 = dart.privateName(menu_item_groups$46template, "_NgIf_5_9");
  var C21;
  menu_item_groups$46template._ViewMenuItemGroupsComponent8 = class _ViewMenuItemGroupsComponent8 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_0), "menu-item-label");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n                ");
      this[_compView_2] = new highlighted_text$46template.ViewHighlightedTextComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      _el_0[$append](_el_2);
      this.addShimC(_el_2);
      this[_HighlightedTextComponent_2_5] = new highlighted_text.HighlightedTextComponent.new();
      this[_compView_2].create0(this[_HighlightedTextComponent_2_5]);
      let _text_4 = dom_helpers.appendText(_el_0, "\n                ");
      let _anchor_5 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C21 || CT.C21);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _text_6 = dom_helpers.appendText(_el_0, "\n              ");
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_item = this.parentView.parentView.locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = _ctx.highlighted(StringL().as(dart.dload(local_item, 'uiDisplayName')));
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_HighlightedTextComponent_2_5].segments = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_NgIf_5_9].ngIf = dart.dload(local_item, 'labelAnnotation') != null && dart.dtest(dart.dload(dart.dload(local_item, 'labelAnnotation'), 'isNotEmpty'));
      this[_appEl_5].detectChangesInNestedViews();
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_appEl_5].destroyNestedViews();
      this[_compView_2].destroyInternalState();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent8.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_HighlightedTextComponent_2_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_expr_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent8.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent8.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent8);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent8);
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent8, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent8, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent8.__proto__),
    [_compView_2]: dart.fieldType(dart.legacy(highlighted_text$46template.ViewHighlightedTextComponent0)),
    [_HighlightedTextComponent_2_5]: dart.fieldType(dart.legacy(highlighted_text.HighlightedTextComponent)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  var _textBinding_2 = dart.privateName(menu_item_groups$46template, "_textBinding_2");
  menu_item_groups$46template._ViewMenuItemGroupsComponent9 = class _ViewMenuItemGroupsComponent9 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("sup");
      this.updateChildClass(HtmlElementL().as(_el_0), "label-annotation");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n                ");
      _el_0[$append](this[_textBinding_2].element);
      let _text_3 = dom_helpers.appendText(_el_0, "\n              ");
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let local_item = this.parentView.parentView.parentView.locals[$_get]("$implicit");
      this[_textBinding_2].updateText(StringL().as(interpolate.interpolate0(dart.dload(local_item, 'labelAnnotation'))));
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent9.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    menu_item_groups$46template._ViewMenuItemGroupsComponent9.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent9.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent9);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent9);
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent9, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent9, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent9.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var C22;
  menu_item_groups$46template._ViewMenuItemGroupsComponent10 = class _ViewMenuItemGroupsComponent10 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_0), "menu-item-label");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n                ");
      _el_0[$append](this[_textBinding_2].element);
      let _text_3 = dom_helpers.appendText(_el_0, "\n                ");
      let _anchor_4 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C22 || CT.C22);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _text_5 = dom_helpers.appendText(_el_0, "\n              ");
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let local_item = this.parentView.parentView.locals[$_get]("$implicit");
      this[_NgIf_4_9].ngIf = dart.dload(local_item, 'labelAnnotation') != null && dart.dtest(dart.dload(dart.dload(local_item, 'labelAnnotation'), 'isNotEmpty'));
      this[_appEl_4].detectChangesInNestedViews();
      this[_textBinding_2].updateText(StringL().as(interpolate.interpolate0(dart.dload(local_item, 'uiDisplayName'))));
    }
    destroyInternal() {
      this[_appEl_4].destroyNestedViews();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent10.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent10.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent10.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent10);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent10);
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent10, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent10, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent10.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  menu_item_groups$46template._ViewMenuItemGroupsComponent11 = class _ViewMenuItemGroupsComponent11 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("sup");
      this.updateChildClass(HtmlElementL().as(_el_0), "label-annotation");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n                ");
      _el_0[$append](this[_textBinding_2].element);
      let _text_3 = dom_helpers.appendText(_el_0, "\n                ");
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let local_item = this.parentView.parentView.parentView.locals[$_get]("$implicit");
      this[_textBinding_2].updateText(StringL().as(interpolate.interpolate0(dart.dload(local_item, 'labelAnnotation'))));
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent11.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    menu_item_groups$46template._ViewMenuItemGroupsComponent11.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent11.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent11);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent11);
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent11, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent11, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent11.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  menu_item_groups$46template._ViewMenuItemGroupsComponent12 = class _ViewMenuItemGroupsComponent12 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_0), "menu-item-secondary-label");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n                ");
      _el_0[$append](this[_textBinding_2].element);
      let _text_3 = dom_helpers.appendText(_el_0, "\n              ");
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let local_item = this.parentView.parentView.locals[$_get]("$implicit");
      this[_textBinding_2].updateText(StringL().as(interpolate.interpolate0(dart.dload(local_item, 'secondaryLabel'))));
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent12.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    menu_item_groups$46template._ViewMenuItemGroupsComponent12.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent12.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent12);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent12);
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent12, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent12, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent12.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _MenuItemAffixListComponent_0_5 = dart.privateName(menu_item_groups$46template, "_MenuItemAffixListComponent_0_5");
  menu_item_groups$46template._ViewMenuItemGroupsComponent13 = class _ViewMenuItemGroupsComponent13 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      this[_compView_0$] = new menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootEl;
      this.updateChildClassNonHtml(_el_0, "suffix-list");
      this.addShimC(_el_0);
      this[_MenuItemAffixListComponent_0_5] = new menu_item_affix_list.MenuItemAffixListComponent.new(this[_compView_0$]);
      this[_compView_0$].create0(this[_MenuItemAffixListComponent_0_5]);
      this.init1(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && dart.notNull(nodeIndex) <= 1) {
        return this[_MenuItemAffixListComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let local_item = this.parentView.parentView.locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = !dart.dtest(dart.dload(local_item, 'enabled'));
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_MenuItemAffixListComponent_0_5].disabled = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = dart.dload(local_item, 'itemSuffixes');
      if (dart.test(app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this[_MenuItemAffixListComponent_0_5].items = ObservableListLOfMenuItemAffixL().as(currVal_1);
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
      this[_MenuItemAffixListComponent_0_5].ngOnDestroy();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent13.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MenuItemAffixListComponent_0_5] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent13.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent13.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent13);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent13);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent13, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent13.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent13, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent13, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent13.__proto__),
    [_compView_0$]: dart.fieldType(dart.legacy(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0)),
    [_MenuItemAffixListComponent_0_5]: dart.fieldType(dart.legacy(menu_item_affix_list.MenuItemAffixListComponent)),
    [_expr_0$]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1$]: dart.fieldType(dart.dynamic)
  }));
  menu_item_groups$46template._ViewMenuItemGroupsComponent14 = class _ViewMenuItemGroupsComponent14 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      this[_compView_0$] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootEl;
      this.updateChildClassNonHtml(_el_0, "material-list-item-secondary submenu-icon");
      dom_helpers.setAttribute(_el_0, "icon", "arrow_drop_down");
      this.addShimC(_el_0);
      this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(_el_0);
      this[_compView_0$].create0(this[_MaterialIconComponent_0_5]);
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
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent14.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialIconComponent_0_5] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent14.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent14.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent14);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent14);
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent14, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent14, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent14.__proto__),
    [_compView_0$]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_0_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent))
  }));
  var _appEl_0$ = dart.privateName(menu_item_groups$46template, "_appEl_0");
  var _MaterialPopupComponent_0_8$ = dart.privateName(menu_item_groups$46template, "_MaterialPopupComponent_0_8");
  var __PopupRef_0_10$ = dart.privateName(menu_item_groups$46template, "__PopupRef_0_10");
  var __PopupHierarchy_0_12$ = dart.privateName(menu_item_groups$46template, "__PopupHierarchy_0_12");
  var _DeferredContentDirective_2_9 = dart.privateName(menu_item_groups$46template, "_DeferredContentDirective_2_9");
  var _PopupRef_0_10$ = dart.privateName(menu_item_groups$46template, "_PopupRef_0_10");
  var _PopupHierarchy_0_12$ = dart.privateName(menu_item_groups$46template, "_PopupHierarchy_0_12");
  var C23;
  var _handle_visibleChange_0_0$ = dart.privateName(menu_item_groups$46template, "_handle_visibleChange_0_0");
  menu_item_groups$46template._ViewMenuItemGroupsComponent15 = class _ViewMenuItemGroupsComponent15 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    get [_PopupRef_0_10$]() {
      if (this[__PopupRef_0_10$] == null) {
        this[__PopupRef_0_10$] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8$]);
      }
      return this[__PopupRef_0_10$];
    }
    get [_PopupHierarchy_0_12$]() {
      if (this[__PopupHierarchy_0_12$] == null) {
        this[__PopupHierarchy_0_12$] = material_popup.getHierarchy(this[_MaterialPopupComponent_0_8$]);
      }
      return this[__PopupHierarchy_0_12$];
    }
    build() {
      this[_compView_0$] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      dom_helpers.setAttribute(this[_el_0$], "enforceSpaceConstraints", "");
      this.addShimC(HtmlElementL().as(this[_el_0$]));
      this[_appEl_0$] = new view_container.ViewContainer.new(0, null, this, this[_el_0$]);
      this[_MaterialPopupComponent_0_8$] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), null, NgZoneL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), OverlayServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), ZIndexerL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(C0 || CT.C0, this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), boolL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(C1 || CT.C1, this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), BoxL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(C2 || CT.C2, this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0$], this[_appEl_0$], new element_ref.ElementRef.new(this[_el_0$])), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), null, NgZoneL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(NgZoneL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), OverlayServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), ZIndexerL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(C0 || CT.C0, this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), boolL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(C1 || CT.C1, this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), BoxL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(C2 || CT.C2, this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0$], this[_appEl_0$], new element_ref.ElementRef.new(this[_el_0$]));
      let _text_1 = dom_helpers.createText("\n            ");
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C23 || CT.C23);
      this[_DeferredContentDirective_2_9] = new deferred_content.DeferredContentDirective.new(this[_appEl_2], _TemplateRef_2_8, this[_MaterialPopupComponent_0_8$]);
      let _text_3 = dom_helpers.createText("\n          ");
      this[_compView_0$].create(this[_MaterialPopupComponent_0_8$], JSArrayOfObjectL().of([C4 || CT.C4, JSArrayOfObjectL().of([_text_1, this[_appEl_2], _text_3]), C4 || CT.C4]));
      let subscription_0 = this[_MaterialPopupComponent_0_8$].onVisible.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handle_visibleChange_0_0$)));
      this.init(JSArrayOfObjectL().of([this[_appEl_0$]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 3) {
        if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(DropdownHandleL())) {
          return this[_MaterialPopupComponent_0_8$];
        }
        if (token === dart.wrapType(PopupRefL())) {
          return this[_PopupRef_0_10$];
        }
        if (token === dart.wrapType(PopupHierarchyL())) {
          return this[_PopupHierarchy_0_12$];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_subMenuSource = optimizations.unsafeCast(_ViewMenuItemGroupsComponent6L(), this.parentView)[_PopupSourceDirective_1_14];
      let local_item = this.parentView.parentView.locals[$_get]("$implicit");
      changed = false;
      if (firstCheck) {
        this[_MaterialPopupComponent_0_8$].autoDismiss = false;
        changed = true;
        this[_MaterialPopupComponent_0_8$].enforceSpaceConstraints = true;
        changed = true;
      }
      let currVal_3 = _ctx.preferredSubMenuPositions;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
        this[_MaterialPopupComponent_0_8$].preferredPositions = currVal_3;
        changed = true;
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = local_subMenuSource;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4$], currVal_4))) {
        this[_MaterialPopupComponent_0_8$].source = currVal_4;
        changed = true;
        this[_expr_4$] = currVal_4;
      }
      let currVal_5 = _ctx.isSubMenuVisible(MenuItemL().as(local_item));
      if (dart.test(app_view_utils.checkBinding(this[_expr_5$], currVal_5))) {
        this[_MaterialPopupComponent_0_8$].visible = currVal_5;
        changed = true;
        this[_expr_5$] = currVal_5;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_DeferredContentDirective_2_9].preserveDimensions = true;
      }
      this[_appEl_0$].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      let currVal_0 = _ctx.popupClass;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_compView_0$].updateChildClassNonHtml(this[_el_0$], currVal_0);
        this[_expr_0$] = currVal_0;
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialPopupComponent_0_8$].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_0$].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_compView_0$].destroyInternalState();
      this[_DeferredContentDirective_2_9].ngOnDestroy();
      this[_MaterialPopupComponent_0_8$].ngOnDestroy();
    }
    [_handle_visibleChange_0_0$]($36event) {
      let local_item = this.parentView.parentView.locals[$_get]("$implicit");
      let _ctx = this.ctx;
      _ctx.onSubMenuVisibilityChanged(MenuItemL().as(local_item), boolL().as($36event));
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent15.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_appEl_0$] = null;
    this[_MaterialPopupComponent_0_8$] = null;
    this[__PopupRef_0_10$] = null;
    this[__PopupHierarchy_0_12$] = null;
    this[_appEl_2] = null;
    this[_DeferredContentDirective_2_9] = null;
    this[_expr_0$] = null;
    this[_expr_3$] = null;
    this[_expr_4$] = null;
    this[_expr_5$] = null;
    this[_el_0$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent15.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent15.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent15);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent15);
  dart.setMethodSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent15, () => ({
    __proto__: dart.getMethods(menu_item_groups$46template._ViewMenuItemGroupsComponent15.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_visibleChange_0_0$]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent15, () => ({
    __proto__: dart.getGetters(menu_item_groups$46template._ViewMenuItemGroupsComponent15.__proto__),
    [_PopupRef_0_10$]: dart.dynamic,
    [_PopupHierarchy_0_12$]: dart.dynamic
  }));
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent15, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent15, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent15.__proto__),
    [_compView_0$]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
    [_appEl_0$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialPopupComponent_0_8$]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
    [__PopupRef_0_10$]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_0_12$]: dart.fieldType(dart.dynamic),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_DeferredContentDirective_2_9]: dart.fieldType(dart.legacy(deferred_content.DeferredContentDirective)),
    [_expr_0$]: dart.fieldType(dart.legacy(core.String)),
    [_expr_3$]: dart.fieldType(dart.dynamic),
    [_expr_4$]: dart.fieldType(dart.dynamic),
    [_expr_5$]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0$]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _MaterialListComponent_0_5$ = dart.privateName(menu_item_groups$46template, "_MaterialListComponent_0_5");
  var _MenuItemGroupsComponent_2_6 = dart.privateName(menu_item_groups$46template, "_MenuItemGroupsComponent_2_6");
  menu_item_groups$46template._ViewMenuItemGroupsComponent16 = class _ViewMenuItemGroupsComponent16 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0$] = new material_list$46template.ViewMaterialListComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootEl;
      this.updateChildClassNonHtml(_el_0, "item-group-list");
      dom_helpers.setAttribute(_el_0, "role", "none");
      this.addShimC(_el_0);
      this[_MaterialListComponent_0_5$] = new material_list.MaterialListComponent.new();
      let _text_1 = dom_helpers.createText("\n              ");
      this[_compView_2] = new menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      dom_helpers.setAttribute(_el_2, "autoFocus", "");
      this.addShimC(_el_2);
      this[_AutoFocusDirective_2_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoFocusDirectiveL(), dart.wrapType(AutoFocusDirectiveL()), dart.fn(() => new focus.AutoFocusDirective.new(_el_2, DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), null, ModalComponentL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), PopupRefL().as(optimizations.unsafeCast(_ViewMenuItemGroupsComponent15L(), this.parentView)[_PopupRef_0_10$])), VoidToAutoFocusDirectiveL())) : new focus.AutoFocusDirective.new(_el_2, DomServiceL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), null, ModalComponentL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), PopupRefL().as(optimizations.unsafeCast(_ViewMenuItemGroupsComponent15L(), this.parentView)[_PopupRef_0_10$]));
      this[_MenuItemGroupsComponent_2_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MenuItemGroupsComponentL(), dart.wrapType(MenuItemGroupsComponentL()), dart.fn(() => menu_item_groups.MenuItemGroupsComponent.new(MenuRootL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(MenuRootL()), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_2], optimizations.unsafeCast(_ViewMenuItemGroupsComponent15L(), this.parentView)[_MaterialPopupComponent_0_8$], IdGeneratorL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex))), VoidToMenuItemGroupsComponentL())) : menu_item_groups.MenuItemGroupsComponent.new(MenuRootL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(MenuRootL()), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_2], optimizations.unsafeCast(_ViewMenuItemGroupsComponent15L(), this.parentView)[_MaterialPopupComponent_0_8$], IdGeneratorL().as(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)));
      this[_compView_2].create0(this[_MenuItemGroupsComponent_2_6]);
      let _text_4 = dom_helpers.createText("\n            ");
      this[_compView_0$].create(this[_MaterialListComponent_0_5$], JSArrayOfObjectL().of([JSArrayOfNodeL().of([_text_1, _el_2, _text_4])]));
      let subscription_0 = this[_MenuItemGroupsComponent_2_6].selected.listen(this.eventHandler1(MenuItemL(), MenuItemL(), dart.bind(_ctx, 'onSubMenuItemSelected')));
      this.init(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_item = this.parentView.parentView.parentView.locals[$_get]("$implicit");
      changed = false;
      if (firstCheck) {
        this[_MaterialListComponent_0_5$].role = "none";
        changed = true;
      }
      let currVal_1 = dart.dload(dart.dload(local_item, 'subMenu'), 'width');
      if (dart.test(app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this[_MaterialListComponent_0_5$].width = currVal_1;
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_AutoFocusDirective_2_5].autoFocus = true;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AutoFocusDirective_2_5].ngOnInit();
      }
      changed = false;
      let currVal_3 = _ctx.isKeyboardOpenedSubmenu;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
        this[_MenuItemGroupsComponent_2_6].activateFirstItemOnInit = currVal_3;
        changed = true;
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = _ctx.popupClass;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4$], currVal_4))) {
        this[_MenuItemGroupsComponent_2_6].popupClass = currVal_4;
        changed = true;
        this[_expr_4$] = currVal_4;
      }
      let currVal_5 = dart.dload(local_item, 'subMenu');
      if (dart.test(app_view_utils.checkBinding(this[_expr_5$], currVal_5))) {
        this[_MenuItemGroupsComponent_2_6].menu = MenuModelL().as(currVal_5);
        changed = true;
        this[_expr_5$] = currVal_5;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MenuItemGroupsComponent_2_6].ngOnInit();
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
      this[_compView_2].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MenuItemGroupsComponent_2_6].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMenuItemGroupsComponent0L(), this.parentView.parentView.parentView.parentView.parentView.parentView)[_query_AutoFocusDirective_1_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_AutoFocusDirective_2_5].ngOnDestroy();
      this[_MenuItemGroupsComponent_2_6].ngOnDestroy();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponent16.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialListComponent_0_5$] = null;
    this[_compView_2] = null;
    this[_AutoFocusDirective_2_5] = null;
    this[_MenuItemGroupsComponent_2_6] = null;
    this[_expr_1$] = null;
    this[_expr_3$] = null;
    this[_expr_4$] = null;
    this[_expr_5$] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponent16.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponent16.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponent16);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponent16);
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponent16, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponent16, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponent16.__proto__),
    [_compView_0$]: dart.fieldType(dart.legacy(material_list$46template.ViewMaterialListComponent0)),
    [_MaterialListComponent_0_5$]: dart.fieldType(dart.legacy(material_list.MaterialListComponent)),
    [_compView_2]: dart.fieldType(dart.legacy(menu_item_groups$46template.ViewMenuItemGroupsComponent0)),
    [_AutoFocusDirective_2_5]: dart.fieldType(dart.legacy(focus.AutoFocusDirective)),
    [_MenuItemGroupsComponent_2_6]: dart.fieldType(dart.legacy(menu_item_groups.MenuItemGroupsComponent)),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4$]: dart.fieldType(dart.legacy(core.String)),
    [_expr_5$]: dart.fieldType(dart.dynamic)
  }));
  var _MenuItemGroupsComponent_0_5 = dart.privateName(menu_item_groups$46template, "_MenuItemGroupsComponent_0_5");
  menu_item_groups$46template._ViewMenuItemGroupsComponentHost0 = class _ViewMenuItemGroupsComponentHost0 extends app_view.AppView$(dart.legacy(menu_item_groups.MenuItemGroupsComponent)) {
    build() {
      this[_compView_0$] = new menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_MenuItemGroupsComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MenuItemGroupsComponentL(), dart.wrapType(MenuItemGroupsComponentL()), dart.fn(() => menu_item_groups.MenuItemGroupsComponent.new(MenuRootL().as(this.injectorGet(dart.wrapType(MenuRootL()), this.viewData.parentIndex)), this[_compView_0$], DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex)), IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.viewData.parentIndex))), VoidToMenuItemGroupsComponentL())) : menu_item_groups.MenuItemGroupsComponent.new(MenuRootL().as(this.injectorGet(dart.wrapType(MenuRootL()), this.viewData.parentIndex)), this[_compView_0$], DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex)), IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.viewData.parentIndex)));
      this[_compView_0$].create(this[_MenuItemGroupsComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMenuItemGroupsComponentL()).new(0, this, this.rootEl, this[_MenuItemGroupsComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MenuItemGroupsComponent_0_5].ngOnInit();
      }
      this[_compView_0$].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MenuItemGroupsComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
      this[_MenuItemGroupsComponent_0_5].ngOnDestroy();
    }
  };
  (menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MenuItemGroupsComponent_0_5] = null;
    menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.prototype;
  dart.addTypeTests(menu_item_groups$46template._ViewMenuItemGroupsComponentHost0);
  dart.addTypeCaches(menu_item_groups$46template._ViewMenuItemGroupsComponentHost0);
  dart.setLibraryUri(menu_item_groups$46template._ViewMenuItemGroupsComponentHost0, L1);
  dart.setFieldSignature(menu_item_groups$46template._ViewMenuItemGroupsComponentHost0, () => ({
    __proto__: dart.getFields(menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(dart.legacy(menu_item_groups$46template.ViewMenuItemGroupsComponent0)),
    [_MenuItemGroupsComponent_0_5]: dart.fieldType(dart.legacy(menu_item_groups.MenuItemGroupsComponent))
  }));
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent1 = function viewFactory_MenuItemGroupsComponent1(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent1.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent2 = function viewFactory_MenuItemGroupsComponent2(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent2.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent3 = function viewFactory_MenuItemGroupsComponent3(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent3.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent4 = function viewFactory_MenuItemGroupsComponent4(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent4.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent5 = function viewFactory_MenuItemGroupsComponent5(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent5.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent6 = function viewFactory_MenuItemGroupsComponent6(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent6.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent7 = function viewFactory_MenuItemGroupsComponent7(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent7.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent8 = function viewFactory_MenuItemGroupsComponent8(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent8.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent9 = function viewFactory_MenuItemGroupsComponent9(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent9.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent10 = function viewFactory_MenuItemGroupsComponent10(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent10.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent11 = function viewFactory_MenuItemGroupsComponent11(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent11.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent12 = function viewFactory_MenuItemGroupsComponent12(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent12.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent13 = function viewFactory_MenuItemGroupsComponent13(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent13.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent14 = function viewFactory_MenuItemGroupsComponent14(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent14.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent15 = function viewFactory_MenuItemGroupsComponent15(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent15.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponent16 = function viewFactory_MenuItemGroupsComponent16(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponent16.new(parentView, parentIndex);
  };
  menu_item_groups$46template.viewFactory_MenuItemGroupsComponentHost0 = function viewFactory_MenuItemGroupsComponentHost0(parentView, parentIndex) {
    return new menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.new(parentView, parentIndex);
  };
  menu_item_groups$46template.initReflector = function initReflector$() {
    if (dart.test(menu_item_groups$46template._visited)) {
      return;
    }
    menu_item_groups$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MenuItemGroupsComponentL()), menu_item_groups$46template.MenuItemGroupsComponentNgFactory);
    angular$46template.initReflector();
    meta$46template.initReflector();
    button_decorator$46template.initReflector();
    deferred_content$46template.initReflector();
    focus$46template.initReflector();
    focus_activable_item$46template.initReflector();
    focus_trap$46template.initReflector();
    highlighted_text$46template.initReflector();
    alignment$46template.initReflector();
    material_icon$46template.initReflector();
    material_list$46template.initReflector();
    material_menu$46template.initReflector();
    menu_item_affix_list$46template.initReflector();
    menu_root$46template.initReflector();
    material_popup$46template.initReflector();
    material_select_item$46template.initReflector();
    material_tooltip$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    active_item$46template.initReflector();
    active_item_directive$46template.initReflector();
    delayed_action$46template.initReflector();
    menu$46template.initReflector();
    selectable_menu$46template.initReflector();
    select$46template.initReflector();
    selection_model$46template.initReflector();
    highlighted_text_model$46template.initReflector();
    properties$46template.initReflector();
    disposer$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.copyProperties(menu_item_groups$46template, {
    get MenuItemGroupsComponentNgFactory() {
      return menu_item_groups$46template._MenuItemGroupsComponentNgFactory;
    }
  });
  var C25;
  var C24;
  dart.defineLazy(menu_item_groups$46template, {
    /*menu_item_groups$46template.styles$MenuItemGroupsComponent*/get styles$MenuItemGroupsComponent() {
      return [menu_item_groups$46scss$46css$46shim.styles];
    },
    /*menu_item_groups$46template._MenuItemGroupsComponentNgFactory*/get _MenuItemGroupsComponentNgFactory() {
      return C24 || CT.C24;
    },
    /*menu_item_groups$46template.styles$MenuItemGroupsComponentHost*/get styles$MenuItemGroupsComponentHost() {
      return C4 || CT.C4;
    },
    /*menu_item_groups$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var _query_MenuPopupComponent_1_1_isDirty = dart.privateName(material_menu$46template, "_query_MenuPopupComponent_1_1_isDirty");
  var _compView_0$0 = dart.privateName(material_menu$46template, "_compView_0");
  var _appEl_0$0 = dart.privateName(material_menu$46template, "_appEl_0");
  var _AcxDarkTheme_0_8 = dart.privateName(material_menu$46template, "_AcxDarkTheme_0_8");
  var _MaterialButtonComponent_0_9 = dart.privateName(material_menu$46template, "_MaterialButtonComponent_0_9");
  var _MaterialTooltipDirective_0_10 = dart.privateName(material_menu$46template, "_MaterialTooltipDirective_0_10");
  var _PopupSourceDirective_0_11 = dart.privateName(material_menu$46template, "_PopupSourceDirective_0_11");
  var __TooltipController_0_14 = dart.privateName(material_menu$46template, "__TooltipController_0_14");
  var _appEl_1$0 = dart.privateName(material_menu$46template, "_appEl_1");
  var _NgIf_1_9$ = dart.privateName(material_menu$46template, "_NgIf_1_9");
  var _appEl_2$ = dart.privateName(material_menu$46template, "_appEl_2");
  var _NgIf_2_9$ = dart.privateName(material_menu$46template, "_NgIf_2_9");
  var _appEl_4$ = dart.privateName(material_menu$46template, "_appEl_4");
  var _NgIf_4_9$ = dart.privateName(material_menu$46template, "_NgIf_4_9");
  var _expr_0$0 = dart.privateName(material_menu$46template, "_expr_0");
  var _expr_1$0 = dart.privateName(material_menu$46template, "_expr_1");
  var _expr_2$0 = dart.privateName(material_menu$46template, "_expr_2");
  var _expr_3$0 = dart.privateName(material_menu$46template, "_expr_3");
  var _expr_4$0 = dart.privateName(material_menu$46template, "_expr_4");
  var _expr_5$0 = dart.privateName(material_menu$46template, "_expr_5");
  var _el_0$0 = dart.privateName(material_menu$46template, "_el_0");
  var _TooltipController_0_14 = dart.privateName(material_menu$46template, "_TooltipController_0_14");
  var C26;
  var C27;
  var C28;
  var C29;
  var _MenuPopupComponent_0_5$ = dart.privateName(material_menu$46template, "_MenuPopupComponent_0_5");
  material_menu$46template.ViewMaterialMenuComponent0 = class ViewMaterialMenuComponent0 extends app_view.AppView$(dart.legacy(material_menu.MaterialMenuComponent)) {
    get [_TooltipController_0_14]() {
      if (this[__TooltipController_0_14] == null) {
        this[__TooltipController_0_14] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(TooltipControllerL(), dart.wrapType(TooltipControllerL()), dart.fn(() => module.createTooltipController(TooltipControllerL().as(this.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.viewData.parentIndex)), DisposerL().as(this.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.viewData.parentIndex))), VoidToTooltipControllerL())) : module.createTooltipController(TooltipControllerL().as(this.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.viewData.parentIndex)), DisposerL().as(this.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.viewData.parentIndex)));
      }
      return this[__TooltipController_0_14];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/material_menu.dart" : null;
    }
    build() {
      let t0;
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0$0] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0$0] = this[_compView_0$0].rootEl;
      parentRenderNode[$append](this[_el_0$0]);
      this.updateChildClassNonHtml(this[_el_0$0], "trigger-button");
      dom_helpers.setAttribute(this[_el_0$0], "popupSource", "");
      this[_appEl_0$0] = new view_container.ViewContainer.new(0, null, this, this[_el_0$0]);
      this[_AcxDarkTheme_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.injectorGetOptional(C26 || CT.C26, this.viewData.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.injectorGetOptional(C26 || CT.C26, this.viewData.parentIndex)));
      this[_MaterialButtonComponent_0_9] = new material_button.MaterialButtonComponent.new(HtmlElementL().as(this[_el_0$0]), AcxDarkThemeL().as(this[_AcxDarkTheme_0_8]), this[_compView_0$0], null);
      this[_MaterialTooltipDirective_0_10] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTooltipDirectiveL(), dart.wrapType(MaterialTooltipDirectiveL()), dart.fn(() => new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), this[_appEl_0$0], HtmlElementL().as(this[_el_0$0]), this[_appEl_0$0], this[_compView_0$0], WindowL().as(this.parentView.injectorGet(dart.wrapType(WindowL()), this.viewData.parentIndex)), null, null), VoidToMaterialTooltipDirectiveL())) : new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), this[_appEl_0$0], HtmlElementL().as(this[_el_0$0]), this[_appEl_0$0], this[_compView_0$0], WindowL().as(this.parentView.injectorGet(dart.wrapType(WindowL()), this.viewData.parentIndex)), null, null);
      this[_PopupSourceDirective_0_11] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), HtmlElementL().as(this[_el_0$0]), ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.viewData.parentIndex)), null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), HtmlElementL().as(this[_el_0$0]), ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.viewData.parentIndex)), null);
      let _anchor_1 = dom_helpers.createAnchor();
      this[_appEl_1$0] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1$0], C27 || CT.C27);
      this[_NgIf_1_9$] = new ng_if.NgIf.new(this[_appEl_1$0], _TemplateRef_1_8);
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2$] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2$], C28 || CT.C28);
      this[_NgIf_2_9$] = new ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
      let _text_3 = dom_helpers.createText(" ");
      this[_compView_0$0].create(this[_MaterialButtonComponent_0_9], JSArrayOfObjectL().of([(t0 = [this[_appEl_1$0], this[_appEl_2$], _text_3], (() => {
          t0[$addAll](core.Iterable.as(this.projectedNodes[$_get](0)));
          return t0;
        })())]));
      let _anchor_4 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_4$] = new view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4$], C29 || CT.C29);
      this[_NgIf_4_9$] = new ng_if.NgIf.new(this[_appEl_4$], _TemplateRef_4_8);
      this[_el_0$0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyDown')));
      let subscription_0 = this[_MaterialButtonComponent_0_9].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'handlePopupTriggerAction')));
      _ctx.button = this[_MaterialButtonComponent_0_9];
      this.init(C5 || CT.C5, JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 3) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_0_8];
        }
        if (token === dart.wrapType(MaterialButtonComponentL()) || token === dart.wrapType(ButtonDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialButtonComponent_0_9];
        }
        if (token === dart.wrapType(TooltipControllerL())) {
          return this[_TooltipController_0_14];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_2 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2$0], currVal_2))) {
        this[_MaterialButtonComponent_0_9].disabled = currVal_2;
        changed = true;
        this[_expr_2$0] = currVal_2;
      }
      let currVal_3 = _ctx.tabbable;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3$0], currVal_3))) {
        this[_MaterialButtonComponent_0_9].tabbable = currVal_3;
        changed = true;
        this[_expr_3$0] = currVal_3;
      }
      if (changed) {
        this[_compView_0$0].markAsCheckOnce();
      }
      let currVal_4 = _ctx.tooltipText;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4$0], currVal_4))) {
        this[_MaterialTooltipDirective_0_10].text = currVal_4;
        this[_expr_4$0] = currVal_4;
      }
      let currVal_5 = _ctx.hasTooltip;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5$0], currVal_5))) {
        this[_MaterialTooltipDirective_0_10].canShow = currVal_5;
        this[_expr_5$0] = currVal_5;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTooltipDirective_0_10].ngOnInit();
      }
      this[_NgIf_1_9$].ngIf = _ctx.menu.uiIcon != null;
      this[_NgIf_2_9$].ngIf = _ctx.buttonText != null;
      this[_NgIf_4_9$].ngIf = _ctx.hasSubmenu;
      this[_appEl_0$0].detectChangesInNestedViews();
      this[_appEl_1$0].detectChangesInNestedViews();
      this[_appEl_2$].detectChangesInNestedViews();
      this[_appEl_4$].detectChangesInNestedViews();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_MenuPopupComponent_1_1_isDirty])) {
          _ctx.menuPopup = queries.firstOrNull(MenuPopupComponentL(), this[_appEl_4$].mapNestedViews(MenuPopupComponentL(), _ViewMaterialMenuComponent3L(), dart.fn(nestedView => JSArrayOfMenuPopupComponentL().of([nestedView[_MenuPopupComponent_0_5$]]), _ViewMaterialMenuComponent3LToListLOfMenuPopupComponentL())));
          this[_query_MenuPopupComponent_1_1_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.ariaLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        dom_helpers.updateAttribute(this[_el_0$0], "aria-label", currVal_0);
        this[_expr_0$0] = currVal_0;
      }
      let currVal_1 = _ctx.hasIcon;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1$0], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_0$0], "icon", currVal_1);
        this[_expr_1$0] = currVal_1;
      }
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialTooltipDirective_0_10].ngAfterViewInit();
          this[_PopupSourceDirective_0_11].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_0$0].destroyNestedViews();
      this[_appEl_1$0].destroyNestedViews();
      this[_appEl_2$].destroyNestedViews();
      this[_appEl_4$].destroyNestedViews();
      this[_compView_0$0].destroyInternalState();
      this[_MaterialTooltipDirective_0_10].ngOnDestroy();
      this[_PopupSourceDirective_0_11].ngOnDestroy();
    }
    initComponentStyles() {
      let styles = material_menu$46template.ViewMaterialMenuComponent0._componentStyles;
      if (styles == null) {
        material_menu$46template.ViewMaterialMenuComponent0._componentStyles = styles = material_menu$46template.ViewMaterialMenuComponent0._componentStyles = new style_encapsulation._UnscopedComponentStyles.new(material_menu$46template.styles$MaterialMenuComponent, material_menu$46template.ViewMaterialMenuComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_menu$46template.ViewMaterialMenuComponent0.new = function(parentView, parentIndex) {
    this[_query_MenuPopupComponent_1_1_isDirty] = true;
    this[_compView_0$0] = null;
    this[_appEl_0$0] = null;
    this[_AcxDarkTheme_0_8] = null;
    this[_MaterialButtonComponent_0_9] = null;
    this[_MaterialTooltipDirective_0_10] = null;
    this[_PopupSourceDirective_0_11] = null;
    this[__TooltipController_0_14] = null;
    this[_appEl_1$0] = null;
    this[_NgIf_1_9$] = null;
    this[_appEl_2$] = null;
    this[_NgIf_2_9$] = null;
    this[_appEl_4$] = null;
    this[_NgIf_4_9$] = null;
    this[_expr_0$0] = null;
    this[_expr_1$0] = null;
    this[_expr_2$0] = null;
    this[_expr_3$0] = null;
    this[_expr_4$0] = null;
    this[_expr_5$0] = null;
    this[_el_0$0] = null;
    material_menu$46template.ViewMaterialMenuComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-menu"));
  }).prototype = material_menu$46template.ViewMaterialMenuComponent0.prototype;
  dart.addTypeTests(material_menu$46template.ViewMaterialMenuComponent0);
  dart.addTypeCaches(material_menu$46template.ViewMaterialMenuComponent0);
  dart.setMethodSignature(material_menu$46template.ViewMaterialMenuComponent0, () => ({
    __proto__: dart.getMethods(material_menu$46template.ViewMaterialMenuComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setGetterSignature(material_menu$46template.ViewMaterialMenuComponent0, () => ({
    __proto__: dart.getGetters(material_menu$46template.ViewMaterialMenuComponent0.__proto__),
    [_TooltipController_0_14]: dart.dynamic
  }));
  dart.setLibraryUri(material_menu$46template.ViewMaterialMenuComponent0, L2);
  dart.setFieldSignature(material_menu$46template.ViewMaterialMenuComponent0, () => ({
    __proto__: dart.getFields(material_menu$46template.ViewMaterialMenuComponent0.__proto__),
    [_query_MenuPopupComponent_1_1_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_compView_0$0]: dart.fieldType(dart.legacy(material_button$46template.ViewMaterialButtonComponent0)),
    [_appEl_0$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_AcxDarkTheme_0_8]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_9]: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    [_MaterialTooltipDirective_0_10]: dart.fieldType(dart.legacy(tooltip.MaterialTooltipDirective)),
    [_PopupSourceDirective_0_11]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
    [__TooltipController_0_14]: dart.fieldType(dart.dynamic),
    [_appEl_1$0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_2$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_4$]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9$]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_expr_1$0]: dart.fieldType(dart.dynamic),
    [_expr_2$0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3$0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4$0]: dart.fieldType(dart.legacy(core.String)),
    [_expr_5$0]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0$0]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(material_menu$46template.ViewMaterialMenuComponent0, {
    /*material_menu$46template.ViewMaterialMenuComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _MaterialIconComponent_0_5$ = dart.privateName(material_menu$46template, "_MaterialIconComponent_0_5");
  material_menu$46template._ViewMaterialMenuComponent1 = class _ViewMaterialMenuComponent1 extends app_view.AppView$(dart.legacy(material_menu.MaterialMenuComponent)) {
    build() {
      this[_compView_0$0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      let _el_0 = this[_compView_0$0].rootEl;
      this[_MaterialIconComponent_0_5$] = new material_icon.MaterialIconComponent.new(_el_0);
      this[_compView_0$0].create0(this[_MaterialIconComponent_0_5$]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.menu.uiIcon;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_MaterialIconComponent_0_5$].icon = currVal_0;
        changed = true;
        this[_expr_0$0] = currVal_0;
      }
      if (changed) {
        this[_compView_0$0].markAsCheckOnce();
      }
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroyInternalState();
    }
  };
  (material_menu$46template._ViewMaterialMenuComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_MaterialIconComponent_0_5$] = null;
    this[_expr_0$0] = null;
    material_menu$46template._ViewMaterialMenuComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_menu$46template._ViewMaterialMenuComponent1.prototype;
  dart.addTypeTests(material_menu$46template._ViewMaterialMenuComponent1);
  dart.addTypeCaches(material_menu$46template._ViewMaterialMenuComponent1);
  dart.setLibraryUri(material_menu$46template._ViewMaterialMenuComponent1, L2);
  dart.setFieldSignature(material_menu$46template._ViewMaterialMenuComponent1, () => ({
    __proto__: dart.getFields(material_menu$46template._ViewMaterialMenuComponent1.__proto__),
    [_compView_0$0]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_0_5$]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0$0]: dart.fieldType(dart.dynamic)
  }));
  var _textBinding_1 = dart.privateName(material_menu$46template, "_textBinding_1");
  material_menu$46template._ViewMaterialMenuComponent2 = class _ViewMaterialMenuComponent2 extends app_view.AppView$(dart.legacy(material_menu.MaterialMenuComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.buttonText));
    }
  };
  (material_menu$46template._ViewMaterialMenuComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_menu$46template._ViewMaterialMenuComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_menu$46template._ViewMaterialMenuComponent2.prototype;
  dart.addTypeTests(material_menu$46template._ViewMaterialMenuComponent2);
  dart.addTypeCaches(material_menu$46template._ViewMaterialMenuComponent2);
  dart.setLibraryUri(material_menu$46template._ViewMaterialMenuComponent2, L2);
  dart.setFieldSignature(material_menu$46template._ViewMaterialMenuComponent2, () => ({
    __proto__: dart.getFields(material_menu$46template._ViewMaterialMenuComponent2.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _PopupSourceDirective_0_6 = dart.privateName(material_menu$46template, "_PopupSourceDirective_0_6");
  var _handle_expandActionChange_0_0 = dart.privateName(material_menu$46template, "_handle_expandActionChange_0_0");
  material_menu$46template._ViewMaterialMenuComponent3 = class _ViewMaterialMenuComponent3 extends app_view.AppView$(dart.legacy(material_menu.MaterialMenuComponent)) {
    build() {
      this[_compView_0$0] = new menu_popup$46template.ViewMenuPopupComponent0.new(this, 0);
      let _el_0 = this[_compView_0$0].rootEl;
      this[_MenuPopupComponent_0_5$] = new menu_popup.MenuPopupComponent.new();
      this[_PopupSourceDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), _el_0, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.viewData.parentIndex)), null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), _el_0, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.viewData.parentIndex)), null);
      this[_compView_0$0].create(this[_MenuPopupComponent_0_5$], JSArrayOfObjectL().of([this.projectedNodes[$_get](1)]));
      let subscription_0 = this[_MenuPopupComponent_0_5$].expandActionChange.listen(this.eventHandler1(ExpandActionL(), ExpandActionL(), dart.bind(this, _handle_expandActionChange_0_0)));
      this.init(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_toggle = optimizations.unsafeCast(ViewMaterialMenuComponent0L(), this.parentView)[_PopupSourceDirective_0_11];
      changed = false;
      let currVal_0 = _ctx.menu;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_MenuPopupComponent_0_5$].menu = currVal_0;
        changed = true;
        this[_expr_0$0] = currVal_0;
      }
      let currVal_1 = _ctx.preferredPositions;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1$0], currVal_1))) {
        this[_MenuPopupComponent_0_5$].preferredPositions = currVal_1;
        changed = true;
        this[_expr_1$0] = currVal_1;
      }
      let currVal_2 = _ctx.expandAction;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2$0], currVal_2))) {
        this[_MenuPopupComponent_0_5$].expandAction = currVal_2;
        changed = true;
        this[_expr_2$0] = currVal_2;
      }
      let currVal_3 = _ctx.width;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3$0], currVal_3))) {
        this[_MenuPopupComponent_0_5$].width = currVal_3;
        changed = true;
        this[_expr_3$0] = currVal_3;
      }
      let currVal_4 = local_toggle;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4$0], currVal_4))) {
        this[_MenuPopupComponent_0_5$].popupSource = currVal_4;
        changed = true;
        this[_expr_4$0] = currVal_4;
      }
      let currVal_5 = _ctx.popupClass;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5$0], currVal_5))) {
        this[_MenuPopupComponent_0_5$].popupClass = currVal_5;
        changed = true;
        this[_expr_5$0] = currVal_5;
      }
      if (changed) {
        this[_compView_0$0].markAsCheckOnce();
      }
      this[_compView_0$0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_PopupSourceDirective_0_6].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMaterialMenuComponent0L(), this.parentView)[_query_MenuPopupComponent_1_1_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0$0].destroyInternalState();
      this[_PopupSourceDirective_0_6].ngOnDestroy();
    }
    [_handle_expandActionChange_0_0]($36event) {
      let _ctx = this.ctx;
      _ctx.expandAction = ExpandActionL().as($36event);
    }
  };
  (material_menu$46template._ViewMaterialMenuComponent3.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_MenuPopupComponent_0_5$] = null;
    this[_PopupSourceDirective_0_6] = null;
    this[_expr_0$0] = null;
    this[_expr_1$0] = null;
    this[_expr_2$0] = null;
    this[_expr_3$0] = null;
    this[_expr_4$0] = null;
    this[_expr_5$0] = null;
    material_menu$46template._ViewMaterialMenuComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_menu$46template._ViewMaterialMenuComponent3.prototype;
  dart.addTypeTests(material_menu$46template._ViewMaterialMenuComponent3);
  dart.addTypeCaches(material_menu$46template._ViewMaterialMenuComponent3);
  dart.setMethodSignature(material_menu$46template._ViewMaterialMenuComponent3, () => ({
    __proto__: dart.getMethods(material_menu$46template._ViewMaterialMenuComponent3.__proto__),
    [_handle_expandActionChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_menu$46template._ViewMaterialMenuComponent3, L2);
  dart.setFieldSignature(material_menu$46template._ViewMaterialMenuComponent3, () => ({
    __proto__: dart.getFields(material_menu$46template._ViewMaterialMenuComponent3.__proto__),
    [_compView_0$0]: dart.fieldType(dart.legacy(menu_popup$46template.ViewMenuPopupComponent0)),
    [_MenuPopupComponent_0_5$]: dart.fieldType(dart.legacy(menu_popup.MenuPopupComponent)),
    [_PopupSourceDirective_0_6]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_expr_1$0]: dart.fieldType(dart.dynamic),
    [_expr_2$0]: dart.fieldType(dart.dynamic),
    [_expr_3$0]: dart.fieldType(dart.dynamic),
    [_expr_4$0]: dart.fieldType(dart.dynamic),
    [_expr_5$0]: dart.fieldType(dart.legacy(core.String))
  }));
  var _MaterialMenuComponent_0_5 = dart.privateName(material_menu$46template, "_MaterialMenuComponent_0_5");
  material_menu$46template._ViewMaterialMenuComponentHost0 = class _ViewMaterialMenuComponentHost0 extends app_view.AppView$(dart.legacy(material_menu.MaterialMenuComponent)) {
    build() {
      this[_compView_0$0] = new material_menu$46template.ViewMaterialMenuComponent0.new(this, 0);
      this.rootEl = this[_compView_0$0].rootEl;
      this[_MaterialMenuComponent_0_5] = new material_menu.MaterialMenuComponent.new(this.rootEl);
      this[_compView_0$0].create(this[_MaterialMenuComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialMenuComponentL()).new(0, this, this.rootEl, this[_MaterialMenuComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
        return this[_MaterialMenuComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0$0].markAsCheckOnce();
      }
      this[_compView_0$0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialMenuComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0$0].destroyInternalState();
      this[_MaterialMenuComponent_0_5].ngOnDestroy();
    }
  };
  (material_menu$46template._ViewMaterialMenuComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_MaterialMenuComponent_0_5] = null;
    material_menu$46template._ViewMaterialMenuComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_menu$46template._ViewMaterialMenuComponentHost0.prototype;
  dart.addTypeTests(material_menu$46template._ViewMaterialMenuComponentHost0);
  dart.addTypeCaches(material_menu$46template._ViewMaterialMenuComponentHost0);
  dart.setMethodSignature(material_menu$46template._ViewMaterialMenuComponentHost0, () => ({
    __proto__: dart.getMethods(material_menu$46template._ViewMaterialMenuComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_menu$46template._ViewMaterialMenuComponentHost0, L2);
  dart.setFieldSignature(material_menu$46template._ViewMaterialMenuComponentHost0, () => ({
    __proto__: dart.getFields(material_menu$46template._ViewMaterialMenuComponentHost0.__proto__),
    [_compView_0$0]: dart.fieldType(dart.legacy(material_menu$46template.ViewMaterialMenuComponent0)),
    [_MaterialMenuComponent_0_5]: dart.fieldType(dart.legacy(material_menu.MaterialMenuComponent))
  }));
  material_menu$46template.viewFactory_MaterialMenuComponent1 = function viewFactory_MaterialMenuComponent1(parentView, parentIndex) {
    return new material_menu$46template._ViewMaterialMenuComponent1.new(parentView, parentIndex);
  };
  material_menu$46template.viewFactory_MaterialMenuComponent2 = function viewFactory_MaterialMenuComponent2(parentView, parentIndex) {
    return new material_menu$46template._ViewMaterialMenuComponent2.new(parentView, parentIndex);
  };
  material_menu$46template.viewFactory_MaterialMenuComponent3 = function viewFactory_MaterialMenuComponent3(parentView, parentIndex) {
    return new material_menu$46template._ViewMaterialMenuComponent3.new(parentView, parentIndex);
  };
  material_menu$46template.viewFactory_MaterialMenuComponentHost0 = function viewFactory_MaterialMenuComponentHost0(parentView, parentIndex) {
    return new material_menu$46template._ViewMaterialMenuComponentHost0.new(parentView, parentIndex);
  };
  material_menu$46template.initReflector = function initReflector$0() {
    if (dart.test(material_menu$46template._visited)) {
      return;
    }
    material_menu$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialMenuComponentL()), material_menu$46template.MaterialMenuComponentNgFactory);
    angular$46template.initReflector();
    focus$46template.initReflector();
    has_disabled$46template.initReflector();
    material_button$46template.initReflector();
    material_icon$46template.initReflector();
    menu_popup$46template.initReflector();
    menu_popup_wrapper$46template.initReflector();
    material_popup$46template.initReflector();
    material_tooltip$46template.initReflector();
    focusable_mixin$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    menu$46template.initReflector();
    css$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(material_menu$46template, {
    get MaterialMenuComponentNgFactory() {
      return material_menu$46template._MaterialMenuComponentNgFactory;
    }
  });
  var C31;
  var C30;
  dart.defineLazy(material_menu$46template, {
    /*material_menu$46template.styles$MaterialMenuComponent*/get styles$MaterialMenuComponent() {
      return C4 || CT.C4;
    },
    /*material_menu$46template._MaterialMenuComponentNgFactory*/get _MaterialMenuComponentNgFactory() {
      return C30 || CT.C30;
    },
    /*material_menu$46template.styles$MaterialMenuComponentHost*/get styles$MaterialMenuComponentHost() {
      return C4 || CT.C4;
    },
    /*material_menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_menu/material_menu.template", {
    "package:angular_components/material_menu/menu_popup.template.dart": menu_popup$46template,
    "package:angular_components/material_menu/menu_item_groups.template.dart": menu_item_groups$46template,
    "package:angular_components/material_menu/material_menu.template.dart": material_menu$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu_popup.template.dart","menu_item_groups.template.dart","material_menu.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgFI,UAAK,AAAgB,yBAAG;AACsD,QAA3E,wBAAkB,mCAA4B;;AAEjD,YAAO;IACT;;AAGE,UAAK,AAAsB,+BAAG;AAC+C,QAA1E,8BAAwB,4BAAqB;;AAEhD,YAAO;IACT;;AAGE,uBAAiB,2BAAY,+DAA+D;IAC9F;;;AAIQ,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AACP,MAA1D,oBAAsB,8DAA4B,MAAM;AAC9B,MAA1B,cAAQ,AAAY;AACU,MAA9B,AAAiB,gBAAD,UAAQ;AACmC,MAA3D,yBAAsB,aAAO,2BAA2B;AACzC,MAAf,gCAAS;AACqC,MAA9C,iBAAW,qCAAc,GAAG,MAAM,MAAM;AAK84B,MAJt7B,8CAAwC,2BAClC,oDAAmC,0CAAwB,cAC1C,mEAAuB,AAAW,oCAA6B,kCAAgB,AAAS,0DAAc,AAAW,oCAA4B,0CAAwB,AAAS,6BAAc,mBAAM,AAAW,4BAAqB,0BAAQ,AAAS,kDAAc,AAAW,4BAAqB,kCAAgB,AAAS,8CAAc,AAAW,4BAAqB,8BAAY,AAAS,4CAAc,AAAW,4BAAqB,4BAAU,AAAS,2DAAc,AAAW,yCAAkG,AAAS,wCAAc,AAAW,yCAA0E,AAAS,uCAAc,AAAW,yCAA8E,AAAS,qDAAc,AAAW,oCAA6B,qCAAmB,AAAS,6BAAc,mBAAa,gBAAU,+BAAW,mDAEz6B,mEAAuB,AAAW,oCAA6B,kCAAgB,AAAS,0DAAc,AAAW,oCAA4B,0CAAwB,AAAS,6BAAc,mBAAM,AAAW,4BAAqB,0BAAQ,AAAS,kDAAc,AAAW,4BAAqB,kCAAgB,AAAS,8CAAc,AAAW,4BAAqB,8BAAY,AAAS,4CAAc,AAAW,4BAAqB,4BAAU,AAAS,2DAAc,AAAW,yCAAkG,AAAS,wCAAc,AAAW,yCAA0E,AAAS,uCAAc,AAAW,yCAA8E,AAAS,qDAAc,AAAW,oCAA6B,qCAAmB,AAAS,6BAAc,mBAAa,gBAAU,+BAAW;AACx6B,sBAAY;AAC6B,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,6BAAmB,iCAAY;AAC8E,MAAzH,sCAAwC,kDAAyB,gBAAU,gBAAgB,EAAE;AAK3F,MAJF,AAAY,yBAAO,mCAA6B,0CAErC,CAAC,AAAc,2BAAC,KAAhB;AAAqB,sBAAO,CAAC;;;AAGlC,2BAAiB,AAA4B,AAAU,mDAAO,+CAAc;AAClD,MAAhC,uBAAe,yCAAC,cAAc;IAChC;wBAGoC,OAAW,WAAmB;AAChE,UAAe,aAAV,SAAS,KAAI;AAChB,YAAM,AAAU,KAAK,KAAU,4CAA2B,AAAU,KAAK,KAAW,0CAA0B,AAAU,KAAK,KAAW;AACtI,gBAAO;;AAET,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAO;;AAET,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAO;;;AAGX,YAAO,eAAc;IACvB;;AAIQ,iBAAO;AACR,oBAAU;AACV,uBAAmB,AAAQ,iBAAG;AACpB,MAAf,UAAU;AACV,UAAI,UAAU;AAC8C,QAA1D,AAA4B,4DAA0B;AACxC,QAAd,UAAU;;AAEN,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACgB,QAA1D,AAA4B,uDAAqB,SAAS;AAC5C,QAAd,UAAU;AACS,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACI,QAA9C,AAA4B,2CAAS,SAAS;AAChC,QAAd,UAAU;AACS,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACK,QAA/C,AAA4B,4CAAU,SAAS;AACjC,QAAd,UAAU;AACS,QAAnB,gBAAU,SAAS;;AAErB,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEd,UAAI,UAAU;AAC6C,QAAxD,AAA8B,yDAAqB;;AAEjB,MAArC,AAAS;AAC4B,MAArC,AAAS;AACT,qBAA4B;AAC1B,sBAAI;AAGC,UAFH,AAAK,IAAD,kBAAkB,gDAAqB,AAAS,uFAAe,QAA0B,cACpF,wCAAC,AAAW,UAAD;AAE8B,UAAlD,mDAA6C;;;AAG3C,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACW,QAArD,AAAY,0CAAwB,aAAO,SAAS;AACjC,QAAnB,gBAAU,SAAS;;AAEoB,MAAzC,AAAY,oCAAkB,UAAU;AACb,MAA3B,AAAY;AACZ,qBAA4B;AAC1B,YAAI,UAAU;AACiC,UAA7C,AAA4B;;;IAGlC;;AAI+B,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACyB,MAAlC,AAAY;AAC+B,MAA3C,AAA8B;AACW,MAAzC,AAA4B;IAC9B;gCAE+B;AACvB,iBAAO;AACW,MAAxB,AAAK,IAAD,cAAc;IACpB;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC8G,QAAjI,iEAAoB,SAAU,iEAA2C,2CAAO,iDAA2B;;AAEtF,MAAxB,uBAAkB,MAAM;IAC1B;;gEAjJyC,YAAgB;IAdpD,mDAA6C;IACd;IACtB;IACiB;IACvB;IACA;IACM;IACmB;IAC1B;IACH;IACA;IACC;IACW;AAEwD,2EAAuB,8BAAW,UAAU,EAAE,WAAW;AAC1G,IAArB;AACqD,kBAArD,kBAAiB,AAAS,8BAAc;EAC1C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAJ+B,8DAAgB;;;;;;;;;;;;;;AA2Ka,MAA1D,oBAAuB,4DAA2B,MAAM;AAClD,kBAAQ,AAAY;AAC4B,MAAtD,AAAK,6BAAwB,KAAK,EAAE;AACQ,MAA5C,yBAAsB,KAAK,EAAE,QAAQ;AACtB,MAAf,cAAS,KAAK;AAC+C,MAA7D,mCAAsC;AACsB,MAA5D,oBAAuB,iEAA6B,MAAM;AACpD,kBAAQ,AAAY;AACmB,MAA7C,yBAAsB,KAAK,EAAE,aAAa;AACG,MAA7C,yBAAsB,KAAK,EAAE,aAAa;AACiB,MAA3D,yBAAsB,KAAK,EAAE,2BAA2B;AACzC,MAAf,cAAS,KAAK;AAKwS,MAJtT,0CAAoC,2BAC9B,gDAAoC,sCAAoB,cACtC,iCAAmB,KAAK,mBAAE,AAAW,AAAW,uCAAqB,8BAAY,AAAW,AAAS,wCAAc,2BAAM,AAAW,AAAW,+CAA6B,kCAAgB,AAAW,AAAS,uDAAc,AAAyD,qDAAZ,oEAEpR,iCAAmB,KAAK,mBAAE,AAAW,AAAW,uCAAqB,8BAAY,AAAW,AAAS,wCAAc,2BAAM,AAAW,AAAW,+CAA6B,kCAAgB,AAAW,AAAS,uDAAc,AAAyD,qDAAZ;AACjJ,MAAzI,+BAAkC,oCAAkB,AAAyD,qDAAZ;AAKmK,MAJpQ,+CAAyC,2BACnC,qDAAoC,2CAAyB,cAC3C,6CAAwB,8BAAwB,mBAAa,AAAyD,qDAAZ,iEAAyC,AAAW,AAAW,+CAA6B,+BAAa,AAAW,AAAS,8EAEhP,6CAAwB,8BAAwB,mBAAa,AAAyD,qDAAZ,iEAAyC,AAAW,AAAW,+CAA6B,+BAAa,AAAW,AAAS;AACrM,MAAjD,AAAY,0BAAQ;AAGlB,MAFF,AAAY,yBAAO,kCAA4B,uBAC7C,4BAAC,KAAK;AAEI,MAAZ,WAAM,KAAK;IACb;wBAGoC,OAAW,WAAmB;AAChE,UAAK,AAAU,KAAK,KAAW,8BAAc,AAAE,MAAG,SAAS;AACzD,cAAO;;AAET,YAAO,eAAc;IACvB;;AAIQ,iBAAO;AACR,oBAAU;AACV,uBAAmB,AAAQ,iBAAG;AACpB,MAAf,UAAU;AACV,UAAI,UAAU;AAC4B,QAAxC,AAA2B,wCAAO;AACpB,QAAd,UAAU;;AAEN,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACE,QAA5C,AAA2B,yCAAQ,SAAS;AAC9B,QAAd,UAAU;AACS,QAAnB,gBAAU,SAAS;;AAErB,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEd,UAAI,UAAU;AAC8B,QAAzC,AAAwB,0CAAY;;AAEvC,qBAA6B,+CAAmB,UAAU;AACtB,QAAlC,AAAwB;;AAEX,MAAf,UAAU;AACV,UAAI,UAAU;AAC6C,QAAzD,AAA6B,6DAA0B;AACzC,QAAd,UAAU;;AAEN,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACsB,QAAhE,AAA6B,6DAA0B,SAAS;AAClD,QAAd,UAAU;AACS,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACqB,QAA/D,AAA6B,4DAAyB,SAAS;AACjD,QAAd,UAAU;AACS,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACS,QAAnD,AAA6B,gDAAa,SAAS;AACrC,QAAd,UAAU;AACS,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACG,QAA7C,AAA6B,0CAAO,SAAS;AAC/B,QAAd,UAAU;AACS,QAAnB,gBAAU,SAAS;;AAErB,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEd,qBAA6B,+CAAmB,UAAU;AACjB,QAAvC,AAA6B;;AAEU,MAAzC,AAAY,oCAAkB,UAAU;AACb,MAA3B,AAAY;AACe,MAA3B,AAAY;AACZ,qBAA4B;AAC1B,YAAI,UAAU;AACkC,UAA9C,AAA6B;;;IAGnC;;AAI4G,MAA1G,AAAyD,qDAAZ,+DAAyD;IACxG;;AAIoC,MAAlC,AAAY;AACsB,MAAlC,AAAY;AACyB,MAArC,AAAwB;AACkB,MAA1C,AAA6B;IAC/B;;iEA5H0C,YAAgB;IAXtB;IACL;IACO;IACV;IACD;IACM;IAC7B;IACC;IACA;IACE;IACH;AACqE,4EAAuB,6BAAU,UAAU,EAAE,WAAW;AAC1G,IAArB;EACF;;;;;;;;;;;;;;;;;;;;;;;;;AAyIgD,MAA9C,oBAAc,sDAAwB,MAAM;AACjB,MAA3B,cAAS,AAAY;AACiC,MAAtD,gCAAkC;AACyB,MAA3D,AAAY,yBAAO,+BAAyB;AAC/B,MAAb,WAAM;AACN,YAAO,+CAAa,GAAG,MAAM,aAAQ;IACvC;;AAIO,oBAAU;AACf,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEa,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;IACd;;qEAvB8C,YAAgB;IAFtC;IACG;AACkD,gFAAuB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;mGAT1G,YAAgB;AAC7E,UAAO,wDAAyB,UAAU,EAAE,WAAW;EACzD;2GAiCyF,YAAgB;AACvG,UAAO,4DAA6B,UAAU,EAAE,WAAW;EAC7D;;AAIE,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAE8D,IAAzE,4BAAyB,sCAAoB;AACxB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACsB,IAAtB;EACF;;;AAxME,YAAO;IACT;;;;;;;MAxKoB,+CAAyB;YAAG,EAAS;;MAqKN,kDAA4B;;;MAoJ3D,mDAA6B;;;MAmC7C,8BAAQ;YAAG;;;;;;;;;;;;;;;;;;;;;;;;ACzRX,uBAAiB,2BAAY,qEAAqE;IACpG;;AAIQ,iBAAO;AACP,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AAC3D,oBAAU,uBAAoB,gBAAgB,EAAE;AACA,MAAtD,qBAAsB,sDAAwB,MAAM;AAC1B,MAA1B,cAAQ,AAAY;AACU,MAA9B,AAAiB,gBAAD,UAAQ;AACT,MAAf,gCAAS;AAC6C,MAAtD,gCAAkC;AAC5B,oBAAU,uBAAoB;AAC9B,sBAAY;AAC6B,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,6BAAmB,iCAAY;AACW,MAAtD,mBAAqB,qBAAM,gBAAU,gBAAgB;AAC/C,oBAAU,uBAAoB;AAGlC,MAFF,AAAY,0BAAO,+BAAyB,uBAC1C,uBAAC,OAAO,EAAE,gBAAU,OAAO;AAEvB,oBAAU,uBAAoB,gBAAgB,EAAE;AACM,MAA5D,AAAM,+BAAiB,SAAS,4CAAmB,UAAL,IAAI;AAC3C,MAAP;AACsE,MAAtE,AAAQ,OAAD,oBAAkB,aAAa,4CAAmB,UAAL,IAAI;AACY,MAApE,AAAQ,OAAD,oBAAkB,YAAY,4CAAmB,UAAL,IAAI;AACe,MAAtE,AAAQ,OAAD,oBAAkB,aAAa,4CAAmB,UAAL,IAAI;AACc,MAAtE,AAAQ,OAAD,oBAAkB,WAAW,+CAAmB,UAAL,IAAI;IACxD;;AAIQ,iBAAO;AACP,sBAAY,AAAK,AAAK,IAAN;AACtB,oBAAI,4BAAsB,gBAAS,SAAS;AACZ,QAA9B,AAAW,2BAAU,SAAS;AACX,QAAnB,iBAAU,SAAS;;AAErB,qBAA4B;AACJ,QAAtB,AAAW;;AAEwB,MAArC,AAAS;AACT,qBAA4B;AAC1B,sBAAI;AAgBC,UAfH,AAAwB,0CAAY,2CAAqB,AAAS,uFAAe,QAA+B,cACvG,AAAW,AAAS,UAAV,mFAAyB,QAA+B,cAChE,AAAW,AAAS,UAAV,oFAAyB,QAA+B,cAChE,AAAW,AAAS,UAAV,oFAAyB,QAA+B,cAChE,4CAAsB,0CAC3B,mCAAC,AAAW,UAAD,6BACX,AAAW,AAAU,UAAX,qFAA0B,QAAgC,cAC3D,AAAW,AAAS,UAAV,oFAAyB,QAAgC,cACjE,mCAAC,AAAW,UAAD;AAQa,UAA7C,8CAAwC;;AAE1C,sBAAI;AASA,UARF,AAAK,IAAD,kBAAkB,AAAS,0FAAe,QAA+B,cACpE,AAAW,AAAS,UAAV,sFAAyB,QAA+B,cAChE,AAAW,AAAS,UAAV,uFAAyB,QAA+B,cAChE,AAAW,AAAS,UAAV,uFAAyB,QAA+B,cAChE,sCAAC,AAAW,UAAD;AAKsB,UAAhD,iDAA2C;;;AAGzC,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,gBAAS,SAAS;AAC0B,QAApE,sCAAmC,aAAO,gBAAgB,SAAS;AAChD,QAAnB,iBAAU,SAAS;;AAEV,sBAAa,WAAC,AAAK,IAAD;AAC7B,oBAAI,4BAAsB,gBAAS,SAAS;AAC6B,QAAvE,sCAAmC,aAAO,mBAAmB,SAAS;AACnD,QAAnB,iBAAU,SAAS;;AAEM,MAA3B,AAAY;IACd;;AAI+B,MAA7B,AAAS;AACyB,MAAlC,AAAY;AACyB,MAArC,AAAwB;IAC1B;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACmH,QAAtI,4EAAoB,SAAU,4EAA2C,2CAAO,4DAAgC;;AAE3F,MAAxB,uBAAkB,MAAM;IAC1B;;2EA7G8C,YAAgB;IAXzD,8CAAwC;IACxC,iDAA2C;IAChB;IACL;IACb;IACA;IACT;IACA;IACD;IACY;AAE6D,sFAAuB,8BAAW,UAAU,EAAE,WAAW;AAC/G,IAArB;AAC2D,kBAA3D,kBAAiB,AAAS,8BAAc;EAC1C;;;;;;;;;;;;;;;;;;MAJ+B,yEAAgB;;;;;;;;;;;;AAmIvC,gBAAc;AACY,qBAAhC,iBAAQ,AAAI,GAAD,iBAAe;AACW,MAArC,AAAK,sBAAiB,cAAO;AACY,MAAzC,yBAAsB,cAAO,SAAS;AACM,MAA5C,yBAAsB,cAAO,QAAQ;AACtB,MAAf,cAAS;AACH,oBAAU,uBAAoB,cAAO;AACrC,sBAAY,yBAAsB;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,6BAAmB,iCAAY;AACC,MAA5C,kBAAY,mBAAK,gBAAU,gBAAgB;AACrC,oBAAU,uBAAoB,cAAO;AACrC,sBAAY,yBAAsB;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,6BAAmB,iCAAY;AACC,MAA5C,kBAAY,mBAAK,gBAAU,gBAAgB;AACrC,oBAAU,uBAAoB,cAAO;AAC/B,MAAZ,WAAM;IACR;;AAIQ,wBAAc,AAAM,mBAAC;AACU,MAArC,AAAU,uBAAA,WAAmB,WAAZ,WAAW;AAC6C,MAAzE,AAAU,uBAAqC,YAAf,WAAZ,WAAW,kCAA+B,WAAZ,WAAW;AACxB,MAArC,AAAS;AAC4B,MAArC,AAAS;AACH,sBAAwB,WAAZ,WAAW;AAC7B,oBAAI,4BAAsB,gBAAS,SAAS;AACoB,QAA9D,+BAA4B,cAAO,4BAAiB,SAAS;AAC1C,yBAAnB,WAAU,SAAS;;AAEf,sBAAwB,WAAZ,WAAW;AAC7B,oBAAI,4BAAsB,gBAAS,SAAS;AACgB,QAA1D,+BAA4B,cAAO,wBAAa,SAAS;AACtC,yBAAnB,WAAU,SAAS;;IAEvB;;AAI+B,MAA7B,AAAS;AACoB,MAA7B,AAAS;IACX;;4EAhD+C,YAAgB;IAPjD;IACT;IACS;IACT;IACA;IACA;IACc;AAC2D,uFAAuB,6BAAU,UAAU,EAAE,WAAW;AAC/G,IAArB;EACF;;;;;;;;;;;;;;;;;;;;;;AAkEQ,gBAAc;AACY,qBAAhC,iBAAQ,AAAI,GAAD,iBAAe;AACyB,MAAnD,yBAAsB,cAAO,mBAAmB;AACJ,MAA5C,AAAK,sBAAiB,cAAO;AACd,MAAf,cAAS;AACiF,MAA1F,6BAAgC,wDAA6B,yCAAgB,cAAO;AAC9E,oBAAU,uBAAoB,cAAO;AACrC,kBAAQ,sBAAmB,GAAG,EAAE;AACK,MAA3C,AAAK,sBAAiB,KAAK,EAAE;AACd,MAAf,cAAS,KAAK;AACR,oBAAU,uBAAoB,KAAK,EAAE;AACP,MAApC,AAAM,KAAD,UAAQ,AAAe;AACtB,oBAAU,uBAAoB,KAAK,EAAE;AACrC,oBAAU,uBAAoB,cAAO;AACrC,sBAAY,yBAAsB;AACO,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,6BAAmB,iCAAY;AACC,MAA5C,kBAAY,mBAAK,gBAAU,gBAAgB;AACrC,oBAAU,uBAAoB,cAAO;AAC8C,MAAzF,AAAM,gCAAiB,SAAS,4CAA4C,UAA9B,AAAqB;AAC4B,MAA/F,AAAM,gCAAiB,YAAY,+CAA4C,UAA9B,AAAqB;AAChE,2BAAiB,AAAqB,AAAS,AAAQ,mDAAO,qDAAc;AACnD,MAA/B,UAAK,uBAAC,gBAAQ,yCAAC,cAAc;IAC/B;wBAGoC,OAAW,WAAmB;AAChE,UAAK,AAAU,KAAK,KAAW,qCAA+B,aAAV,SAAS,KAAI;AAC/D,cAAO,AAAqB;;AAE9B,YAAO,eAAc;IACvB;;;AAIQ,wBAAc,AAAW,AAAM,8BAAC;AACI,MAA1C,AAAU,uBAAA,WAAmB,WAAZ,WAAW;AACS,MAArC,AAAS;AACH,iCAAyB,WAAZ,WAAW,sBAAwC,cAAX,WAAZ,WAAW,mBAAyB;AACnF,oBAAI,4BAAsB,gBAAS,SAAS;AAC6B,QAAvE,4BAAyB,cAAO,uBAAiB,SAAS,eAAT,OAAW;AACzC,QAAnB,iBAAU,SAAS;;AAEf,sBAAwB,WAAZ,WAAW;AAC7B,oBAAI,4BAAsB,gBAAS,SAAS;AACqB,QAA/D,+BAA4B,cAAO,6BAAkB,SAAS;AAC3C,yBAAnB,WAAU,SAAS;;AAE8B,MAAnD,AAAqB,6CAAkB,MAAM;AAC8B,MAA3E,AAAe,6CAAW,yBAAkC,WAAZ,WAAW;IAC7D;;AAI+B,MAA7B,AAAS;IACX;0BAEyB;AACjB,wBAAc,AAAW,AAAM,8BAAC;AAChC,iBAAO;AACiC,MAA9C,AAAK,IAAD,kDAA8B,WAAW;IAC/C;;4EAlE+C,YAAgB;IAPpC,uBAA0B;IACxB;IACf;IACT;IACD;IACC;IACc;AAC2D,uFAAuB,6BAAU,UAAU,EAAE,WAAW;AAC/G,IAArB;EACF;;;;;;;;;;;;;;;;;;;;;;;AAkF4D,MAA1D,qBAAuB,4DAA2B,MAAM;AAC9B,MAA1B,eAAQ,AAAY;AACiC,MAArD,AAAK,6BAAwB,cAAO;AACrB,MAAf,gCAAS;AACyD,MAAlE,mCAAsC,8DAAsB;AACb,MAA/C,AAAY,2BAAQ;AACR,MAAZ,WAAM;IACR;;AAIO,oBAAU;AACT,wBAAc,AAAW,AAAW,AAAM,yCAAC;AAClC,MAAf,UAAU;AACJ,iCAAyB,WAAZ,WAAW,mBAAc,gBAAgB;AAC5D,oBAAI,4BAAsB,gBAAS,SAAS;AACC,QAA3C,AAA2B,wCAAO,SAAS;AAC7B,QAAd,UAAU;AACS,QAAnB,iBAAU,SAAS;;AAErB,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAER,sBAAwB,WAAZ,WAAW;AAC7B,oBAAI,4BAAsB,gBAAS,SAAS;AACsB,QAAhE,sCAAmC,cAAO,uBAAY,SAAS;AAC5C,yBAAnB,WAAU,SAAS;;AAEM,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;IACd;;4EAvC+C,YAAgB;IAL3B;IACL;IAC1B;IACD;IACY;AAC8D,uFAAuB,6BAAU,UAAU,EAAE,WAAW;AAC/G,IAArB;EACF;;;;;;;;;;;;;;;;AAqDQ,oBAAU,uBAAoB;AAC9B,sBAAY;AACgC,MAAlD,kBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AACrC,6BAAmB,iCAAY;AACW,MAAtD,mBAAqB,qBAAM,iBAAU,gBAAgB;AAC/C,oBAAU,uBAAoB;AACI,MAAxC,UAAK,uBAAC,OAAO,EAAE,iBAAU,OAAO,IAAG;IACrC;;AAIQ,wBAAc,AAAW,AAAM,8BAAC;AAChC,sBAAY,WAAW;AAC7B,oBAAI,4BAAsB,gBAAS,SAAS;AACZ,QAA9B,AAAW,2BAAA,wBAAU,SAAS;AACX,QAAnB,iBAAU,SAAS;;AAErB,qBAA4B;AACJ,QAAtB,AAAW;;AAEwB,MAArC,AAAS;IACX;;AAI+B,MAA7B,AAAS;IACX;;4EA/B+C,YAAgB;IAHjD;IACA;IACV;AAC0E,uFAAuB,6BAAU,UAAU,EAAE,WAAW;AAC/G,IAArB;EACF;;;;;;;;;;;;;;AA4CQ,oBAAU,uBAAoB;AAC9B,sBAAY;AACgC,MAAlD,kBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AACrC,6BAAmB,iCAAY;AACC,MAA5C,kBAAY,mBAAK,iBAAU,gBAAgB;AACrC,oBAAU,uBAAoB;AACI,MAAxC,UAAK,uBAAC,OAAO,EAAE,iBAAU,OAAO,IAAG;IACrC;;AAIQ,iBAAO;AACP,uBAAa,AAAM,mBAAC;AACqB,MAA/C,AAAU,uBAAO,AAAK,IAAD,8BAAe,UAAU;AACT,MAArC,AAAS;IACX;;AAI+B,MAA7B,AAAS;IACX;;4EAzB+C,YAAgB;IAFjD;IACT;AACyE,uFAAuB,6BAAU,UAAU,EAAE,WAAW;AAC/G,IAArB;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiFE,UAAK,AAAyB,kCAAG;AAKoV,QAJlX,2CAAqC,2BAChC,+CAAoC,qCAAmB,cAC9C,uDAAiC,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,qCAAmB,AAAW,AAAW,AAAW,AAAW,AAAS,wFAAc,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,4BAAU,AAAW,AAAW,AAAW,AAAW,AAAS,yGAEvW,uDAAiC,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,qCAAmB,AAAW,AAAW,AAAW,AAAW,AAAS,wFAAc,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,4BAAU,AAAW,AAAW,AAAW,AAAW,AAAS;;AAEtW,YAAO;IACT;;AAIQ,oBAAU,uBAAoB;AAC4B,MAAhE,qBAAuB,yEAAiC,MAAM;AACpC,MAA1B,cAAQ,AAAY;AACsH,MAA1I,AAAK,6BAAwB,aAAO,+BAA4B,IAAI,aAAa,aAAqD;AAC9E,MAAxD,yBAAsB,aAAO,mBAAmB;AACD,MAA/C,yBAAsB,aAAO,eAAe;AACS,MAArD,yBAAsB,aAAO,iBAAiB;AAC/B,MAAf,gCAAS;AACqC,MAA9C,kBAAW,qCAAc,GAAG,MAAM,MAAM;AAK6d,MAJrgB,iCAAoC,2EAAkC,2BAChE,iDAAoC,uCAAqB,cACvC,oEAAoB,+BAAO,AAAW,AAAW,AAAW,AAAW,AAAW,wEAAqB,8BAAY,AAAW,AAAW,AAAW,AAAW,AAAS,qFAAc,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,yBAAO,AAAW,AAAW,AAAW,AAAW,AAAS,wFAAc,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,4BAAU,AAAW,AAAW,AAAW,AAAW,AAAS,2GAEhf,oEAAoB,+BAAO,AAAW,AAAW,AAAW,AAAW,AAAW,wEAAqB,8BAAY,AAAW,AAAW,AAAW,AAAW,AAAS,qFAAc,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,yBAAO,AAAW,AAAW,AAAW,AAAW,AAAS,wFAAc,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,4BAAU,AAAW,AAAW,AAAW,AAAW,AAAS;AAK4B,MAJlhB,0CAAoC,2BAC9B,gDAAoC,sCAAoB,cACtC,mDAAmB,+BAAO,AAAW,AAAW,AAAW,AAAW,AAAW,wEAAqB,8BAAY,AAAW,AAAW,AAAW,AAAW,AAAS,yEAAc,2BAAM,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,kCAAgB,AAAW,AAAW,AAAW,AAAW,AAAS,wFAAc,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,4BAAU,AAAW,AAAW,AAAW,AAAW,AAAS,0GAE9f,mDAAmB,+BAAO,AAAW,AAAW,AAAW,AAAW,AAAW,wEAAqB,8BAAY,AAAW,AAAW,AAAW,AAAW,AAAS,yEAAc,2BAAM,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,kCAAgB,AAAW,AAAW,AAAW,AAAW,AAAS,wFAAc,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,4BAAU,AAAW,AAAW,AAAW,AAAW,AAAS;AACrb,MAA/E,0CAA6C,2EAA4B;AAK+U,MAJxZ,iDAA2C,2BACrC,sDAAoC,4CAA0B,cAC5C,qEAAyB,AAAW,AAAW,AAAW,AAAW,AAAW,wEAAqB,yCAAuB,AAAW,AAAW,AAAW,AAAW,AAAS,yEAAc,mCAAU,cAAO,iBAAU,iCAAa,AAAW,AAAW,AAAW,AAAW,AAAW,wEAAoB,0BAAQ,AAAW,AAAW,AAAW,AAAW,AAAS,yEAAc,MAAM,6CAE5Y,qEAAyB,AAAW,AAAW,AAAW,AAAW,AAAW,wEAAqB,yCAAuB,AAAW,AAAW,AAAW,AAAW,AAAS,yEAAc,mCAAU,cAAO,iBAAU,iCAAa,AAAW,AAAW,AAAW,AAAW,AAAW,wEAAoB,0BAAQ,AAAW,AAAW,AAAW,AAAW,AAAS,yEAAc,MAAM;AAKI,MAJtZ,oDAA8C,2BACxC,yDAAoC,+CAA6B,cAC/C,2EAA4B,mCAAO,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,kCAAgB,AAAW,AAAW,AAAW,AAAW,AAAS,iGAAc,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,qCAAmB,AAAW,AAAW,AAAW,AAAW,AAAS,yEAAc,oBAAa,gDAE1Y,2EAA4B,mCAAO,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,kCAAgB,AAAW,AAAW,AAAW,AAAW,AAAS,iGAAc,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,qCAAmB,AAAW,AAAW,AAAW,AAAW,AAAS,yEAAc,oBAAa;AACzW,MAAvC,sBAAyB,yBAAQ;AAKmgB,MAJpiB,6CAAuC,2BACjC,kDAAoC,wCAAsB,cACxC,gFAAqB,AAAW,AAAW,AAAW,AAAW,AAAW,wEAAqB,yCAAuB,AAAW,AAAW,AAAW,AAAW,AAAS,2FAAc,uCAAO,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,sCAAoB,AAAW,AAAW,AAAW,AAAW,AAAS,yFAAc,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,6BAAW,AAAW,AAAW,AAAW,AAAW,AAAS,yEAAc,yCAExhB,gFAAqB,AAAW,AAAW,AAAW,AAAW,AAAW,wEAAqB,yCAAuB,AAAW,AAAW,AAAW,AAAW,AAAS,2FAAc,uCAAO,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,sCAAoB,AAAW,AAAW,AAAW,AAAW,AAAS,yFAAc,AAAW,AAAW,AAAW,AAAW,AAAW,gFAA6B,6BAAW,AAAW,AAAW,AAAW,AAAW,AAAS,yEAAc;AACxhB,oBAAU,uBAAoB;AAC9B,sBAAY;AAC6B,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,6BAAmB,iCAAY;AACC,MAA5C,kBAAY,mBAAK,gBAAU,gBAAgB;AACrC,oBAAU,uBAAoB;AAC9B,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACuB,MAAvD,AAAK,wCAAiB,KAAK,GAAE;AACd,MAAf,cAAS,KAAK;AACR,oBAAU,uBAAoB,KAAK,EAAE;AACrC,sBAAY,yBAAsB,KAAK;AACE,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,6BAAmB,iCAAY;AACC,MAA5C,kBAAY,mBAAK,gBAAU,gBAAgB;AACrC,oBAAU,uBAAoB,KAAK,EAAE;AACrC,sBAAY,yBAAsB,KAAK;AACE,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,6BAAmB,iCAAY;AACC,MAA5C,kBAAY,mBAAK,gBAAU,gBAAgB;AACrC,qBAAW,uBAAoB,KAAK,EAAE;AACtC,uBAAa,yBAAsB,KAAK;AACI,MAAlD,kBAAY,qCAAc,IAAI,GAAG,MAAM,UAAU;AACrC,8BAAoB,iCAAY;AACG,MAA/C,mBAAa,mBAAK,iBAAW,iBAAiB;AACxC,qBAAW,uBAAoB,KAAK,EAAE;AACtC,qBAAW,uBAAoB;AAC/B,uBAAa;AAC+B,MAAlD,kBAAY,qCAAc,IAAI,GAAG,MAAM,UAAU;AACrC,8BAAoB,iCAAY;AACG,MAA/C,mBAAa,mBAAK,iBAAW,iBAAiB;AACxC,qBAAW,uBAAoB;AAC/B,uBAAa;AAC+B,MAAlD,kBAAY,qCAAc,IAAI,GAAG,MAAM,UAAU;AACrC,8BAAoB,iCAAY;AACG,MAA/C,mBAAa,mBAAK,iBAAW,iBAAiB;AACxC,qBAAW,uBAAoB;AAGnC,MAFF,AAAY,0BAAO,yCAAmC,uBACpD,uBAAC,OAAO,EAAE,gBAAU,OAAO,EAAE,KAAK,EAAE,QAAQ,EAAE,iBAAW,QAAQ,EAAE,iBAAW,QAAQ;AAElF,qBAAW,uBAAoB;AAC/B,uBAAa;AACkC,MAArD,kBAAY,qCAAc,IAAI,MAAM,MAAM,UAAU;AACxC,8BAAoB,iCAAY;AACG,MAA/C,mBAAa,mBAAK,iBAAW,iBAAiB;AACxC,qBAAW,uBAAoB;AAC8D,MAAnG,AAAM,+BAAiB,cAAc,6BAAgD,UAAlC,AAAyB;AACuB,MAAnG,AAAM,+BAAiB,cAAc,6BAAgD,UAAlC,AAAyB;AACtE,2BAAiB,AAAkC,AAAQ,uDAAO,qDAAc;AACZ,MAA1E,UAAK,uBAAC,OAAO,EAAE,iBAAU,QAAQ,EAAE,iBAAW,QAAQ,IAAG,yCAAC,cAAc;IAC1E;wBAGoC,OAAW,WAAmB;AAChE,UAAM,AAAE,kBAAG,SAAS,KAAgB,aAAV,SAAS,KAAI;AACrC,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAO;;AAET,YAAM,AAAU,KAAK,KAAW,mCAAkB,AAAU,KAAK,KAAW,iCAAiB,AAAU,KAAK,KAAW;AACrH,gBAAO;;AAET,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAO;;;AAGX,YAAO,eAAc;IACvB;;;AAIQ,iBAAO;AACR,uBAAmB,AAAQ,iBAAG;AAC7B,oBAAU,iCAAyB,AAAW,AAAW,AAAW,AAAM,oDAAC;AAC3E,oBAAU,iCAAyB,AAAW,AAAM,8BAAC;AACrD,uBAAa,AAAW,AAAM,8BAAC;AAC/B,wBAAc,AAAW,AAAW,AAAW,AAAM,oDAAC;AACtD,sBAAY,AAAK,IAAD,6BAAc,UAAU;AAC9C,oBAAI,4BAAsB,eAAS,SAAS;AACc,QAAxD,AAAyB,AAAS,qDAAa,SAAS;AACrC,QAAnB,gBAAU,SAAS;;AAEf,uBAAa,AAAK,IAAD,cAAgB,AAAK,AAAY,IAAb,gBAAgB,OAAQ,OAAO,AAAK,AAAY,IAAb,gBAAgB,UAAU;AACxG,oBAAI,4BAAsB,gBAAU,UAAU;AACE,QAA9C,AAAwB,0CAAY,UAAU;AACzB,QAArB,iBAAW,UAAU;;AAEvB,qBAA6B,+CAAmB,UAAU;AACtB,QAAlC,AAAwB;;AAEpB,uBAAe,AAAK,AAAY,IAAb,gBAAgB,OAAQ,OAAO,AAAK,AAAY,IAAb,gBAAgB,UAAU;AACtF,oBAAI,4BAAsB,gBAAU,UAAU;AACM,QAAlD,AAAkC,8CAAM,UAAU;AAC7B,QAArB,iBAAW,UAAU;;AAEjB,uBAAa,AAAK,IAAD;AACvB,oBAAI,4BAAsB,gBAAU,UAAU;AACS,QAArD,AAA+B,iDAAY,UAAU;AAChC,QAArB,iBAAW,UAAU;;AAEjB,uBAAwB,WAAX,UAAU;AAC7B,oBAAI,4BAAsB,gBAAU,UAAU;AACI,QAAhD,AAA+B,4CAAA,aAAO,UAAU;AAC3B,yBAArB,aAAW,UAAU;;AAEjB,uBAAwB,WAAX,UAAU;AAC7B,oBAAI,4BAAsB,gBAAU,UAAU;AACO,QAAnD,AAA+B,+CAAA,WAAU,UAAU;AAC9B,yBAArB,WAAW,UAAU;;AAEvB,qBAA6B,+CAAmB,UAAU;AACf,QAAzC,AAA+B;;AAEjC,UAAI,UAAU;AAC4C,QAAxD,AAAkC,wDAAgB;AACS,QAA3D,AAAkC,0DAAkB;;AAEhD,uBAAa,yBAAkC,WAAZ,WAAW;AACpD,oBAAI,4BAAsB,gBAAU,UAAU;AACO,QAAnD,AAAkC,+CAAA,aAAO,UAAU;AAC9B,yBAArB,aAAW,UAAU;;AAEZ,uBAAc,YAAY,WAAX,UAAU;AACpC,oBAAI,4BAAsB,gBAAU,UAAU;AACW,QAAvD,AAAkC,mDAAW,UAAU;AAClC,QAArB,iBAAW,UAAU;;AAEjB,uBAAa,AAAK,IAAD,6BAAc,UAAU;AAC/C,oBAAI,4BAAsB,gBAAU,UAAU;AACQ,QAApD,AAAkC,gDAAQ,UAAU;AAC/B,QAArB,iBAAW,UAAU;;AAEjB,uBAAa,AAAK,IAAD,wCAAyB,UAAU;AAC1D,oBAAI,4BAAsB,gBAAU,UAAU;AACmB,QAA/D,AAAkC,2DAAmB,UAAU;AAC1C,QAArB,iBAAW,UAAU;;AAEjB,uBAAa,AAAK,IAAD,uCAAmB,WAAW;AACrD,oBAAI,4BAAsB,gBAAU,UAAU;AACY,QAAxD,AAAkC,oDAAY,UAAU;AACnC,QAArB,iBAAW,UAAU;;AAEvB,UAAI,UAAU;AACgC,QAA3C,AAAc,qCAAiB;;AAE5B,uBAAwB,WAAX,UAAU;AAC7B,oBAAI,4BAAsB,gBAAU,UAAU;AACT,QAAnC,AAAc,+BAAW,UAAU;AACd,QAArB,iBAAW,UAAU;;AAEvB,qBAA4B;AACD,QAAzB,AAAc;;AAEmB,MAAnC,AAAU,uBAAA,WAAkB,WAAX,UAAU;AACO,MAAlC,AAAU,uBAAO,AAAK,IAAD;AACgB,MAArC,AAAU,uBAAQ,WAAC,AAAK,IAAD;AACuB,MAA9C,AAAW,wBAAA,WAAkB,WAAX,UAAU;AACwB,MAApD,AAAW,wBAAA,WAA+B,WAAb,WAAX,UAAU;AACW,MAAvC,AAAW,wBAAA,WAAkB,WAAX,UAAU;AACW,MAAvC,AAAW,wBAAA,WAAkB,WAAX,UAAU;AACS,MAArC,AAAS;AAC4B,MAArC,AAAS;AAC4B,MAArC,AAAS;AAC4B,MAArC,AAAS;AAC6B,MAAtC,AAAU;AAC4B,MAAtC,AAAU;AAC4B,MAAtC,AAAU;AAC4B,MAAtC,AAAU;AACJ,sBAAY,OAAO;AACzB,oBAAI,4BAAsB,gBAAS,SAAS;AACgC,QAA1E,4BAAyB,aAAO,0BAAoB,SAAS,eAAT,OAAW;AAC5C,QAAnB,iBAAU,SAAS;;AAEf,sBAAY,OAAO;AACzB,oBAAI,4BAAsB,gBAAS,SAAS;AAC+B,QAAzE,4BAAyB,aAAO,0BAAmB,SAAS,gBAAT,OAAW;AAC3C,QAAnB,iBAAU,SAAS;;AAEf,sBAAc,AAAK,AAAY,IAAb,gBAAgB,OAAQ,OAAO,AAAK,AAAY,IAAb,gBAAgB,UAAU;AACrF,oBAAI,4BAAsB,gBAAS,SAAS;AACM,QAAhD,4BAAyB,aAAO,MAAM,SAAS;AAC5B,QAAnB,iBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD,iCAAkB,UAAU;AAClD,oBAAI,4BAAsB,gBAAS,SAAS;AAC4B,QAAtE,sCAAmC,aAAO,kBAAkB,SAAS;AAClD,QAAnB,iBAAU,SAAS;;AAEf,sBAAuB,WAAX,UAAU;AAC5B,oBAAI,4BAAsB,gBAAS,SAAS;AAC0B,QAApE,4BAAyB,aAAO,sBAAc,SAAS,iBAAT,OAAW;AACtC,QAAnB,iBAAU,SAAS;;AAEV,sBAAa,YAAY,WAAX,UAAU;AACnC,oBAAI,4BAAsB,gBAAS,SAAS;AAC6B,QAAvE,4BAAyB,aAAO,yBAAiB,SAAS,kBAAT,OAAW;AACzC,QAAnB,iBAAU,SAAS;;AAEf,sBAAuB,WAAX,UAAU;AAC5B,oBAAI,4BAAsB,gBAAS,SAAS;AAC6B,QAAvE,4BAAyB,aAAO,yBAAiB,SAAS,iBAAT,OAAW;AACzC,QAAnB,iBAAU,SAAS;;AAEf,iCAAwB,WAAX,UAAU,mBAAc,AAAK,IAAD,iCAAkB,UAAU,KAAI;AAC/E,oBAAI,4BAAsB,eAAS,SAAS;AAC6B,QAAvE,4BAAyB,aAAO,yBAAiB,SAAS,iBAAT,OAAW;AACzC,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD,gCAAiB,UAAU;AACjD,oBAAI,4BAAsB,eAAS,SAAS;AACgB,QAA1D,4BAAyB,aAAO,gBAAgB,SAAS;AACtC,QAAnB,gBAAU,SAAS;;AAEyC,MAA9D,AAAyB,iDAAkB,oBAAa;AACf,MAAzC,AAAY,qCAAkB,UAAU;AACb,MAA3B,AAAY;AACZ,qBAA4B;AAC1B,YAAI,UAAU;AACuC,UAAnD,AAAyB,AAAS;AACc,UAAhD,AAA+B;AACa,UAA5C,AAA2B;;;IAGjC;;AAI6I,MAA3I,AAA+F,0DAA7C,AAAW,AAAW,AAAW,2FAAoD;AACO,MAA9I,AAA+F,0DAA7C,AAAW,AAAW,AAAW,8FAAuD;IAC5I;;AAI+B,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACqB,MAA9B,AAAU;AACoB,MAA9B,AAAU;AACoB,MAA9B,AAAU;AACoB,MAA9B,AAAU;AACwB,MAAlC,AAAY;AACmC,MAA/C,AAAyB,AAAS;AACG,MAArC,AAAwB;AACoB,MAA5C,AAA+B;AACgB,MAA/C,AAAkC;AACP,MAA3B,AAAc;AAC0B,MAAxC,AAA2B;IAC7B;0BAEyB;AACjB,uBAAa,AAAW,AAAM,8BAAC;AAC/B,wBAAc,AAAW,AAAW,AAAW,AAAM,oDAAC;AACtD,iBAAO;AACgD,MAA7D,AAAK,IAAD,wCAAyB,UAAU,uBAAE,WAAW,iBAAE;IACxD;;4EAlT+C,YAAgB;IA9CrB;IAC5B;IACmB;IACL;IACS;IACH;IACG;IACpB;IACa;IACtB;IACM;IACT;IACS;IACT;IACS;IACT;IACS;IACT;IACS;IACT;IACS;IACT;IACS;IACT;IACD;IACA;IACA;IACC;IACD;IACA;IACA;IACA;IACA;IACC;IACA;IACE;IACH;IACG;IACF;IACE;IACF;IACD;IACC;IACD;IACA;IACY;AAC8D,uFAAuB,6BAAU,UAAU,EAAE,WAAW;AAC/G,IAArB;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgU4D,MAA1D,qBAAuB,4DAA2B,MAAM;AAClD,kBAAQ,AAAY;AACuC,MAAjE,AAAK,6BAAwB,KAAK,EAAE;AACrB,MAAf,cAAS,KAAK;AACoD,MAAlE,mCAAsC,4CAAsB,KAAK;AAClB,MAA/C,AAAY,2BAAQ;AACR,MAAZ,WAAM,KAAK;IACb;;AAIO,oBAAU;AACT,uBAAa,AAAW,AAAW,AAAM,yCAAC;AACjC,MAAf,UAAU;AACJ,sBAAuB,WAAX,UAAU;AAC5B,oBAAI,4BAAsB,gBAAS,SAAS;AACC,QAA3C,AAA2B,wCAAO,SAAS;AAC7B,QAAd,UAAU;AACS,QAAnB,iBAAU,SAAS;;AAErB,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEa,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;IACd;;4EAlC+C,YAAgB;IAH3B;IACL;IAC3B;AAC0E,uFAAuB,6BAAU,UAAU,EAAE,WAAW;AAC/G,IAArB;EACF;;;;;;;;;;;;;;;;;AAkDQ,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACe,MAA/C,AAAK,wCAAiB,KAAK,GAAE;AACd,MAAf,cAAS,KAAK;AACR,oBAAU,uBAAoB,KAAK,EAAE;AACkB,MAA7D,oBAAuB,kEAA8B,MAAM;AACrD,kBAAQ,AAAY;AACP,MAAnB,AAAM,KAAD,UAAQ,KAAK;AACH,MAAf,cAAS,KAAK;AACqD,MAAnE,sCAAyC;AACS,MAAlD,AAAY,0BAAQ;AACd,oBAAU,uBAAoB,KAAK,EAAE;AACrC,sBAAY,yBAAsB,KAAK;AACE,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,6BAAmB,iCAAY;AACC,MAA5C,kBAAY,mBAAK,gBAAU,gBAAgB;AACrC,oBAAU,uBAAoB,KAAK,EAAE;AAC/B,MAAZ,WAAM,KAAK;IACb;;AAIQ,iBAAO;AACR,oBAAU;AACT,uBAAa,AAAW,AAAW,AAAM,yCAAC;AACjC,MAAf,UAAU;AACJ,sBAAY,AAAK,IAAD,0BAAwB,WAAX,UAAU;AAC7C,oBAAI,4BAAsB,gBAAS,SAAS;AACQ,QAAlD,AAA8B,+CAAW,SAAS;AACpC,QAAd,UAAU;AACS,QAAnB,iBAAU,SAAS;;AAErB,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEkF,MAAhG,AAAU,uBAAoB,AAAyB,WAApC,UAAU,wBAAoB,mBAAoC,WAAhB,WAAX,UAAU;AAC/B,MAArC,AAAS;AACkB,MAA3B,AAAY;IACd;;AAI+B,MAA7B,AAAS;AACyB,MAAlC,AAAY;IACd;;4EAjD+C,YAAgB;IALxB;IACL;IACpB;IACT;IACD;AAC0E,uFAAuB,6BAAU,UAAU,EAAE,WAAW;AAC/G,IAArB;EACF;;;;;;;;;;;;;;;AA6DQ,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACgB,MAAhD,AAAK,wCAAiB,KAAK,GAAE;AACd,MAAf,cAAS,KAAK;AACR,oBAAU,uBAAoB,KAAK,EAAE;AACP,MAApC,AAAM,KAAD,UAAQ,AAAe;AACtB,oBAAU,uBAAoB,KAAK,EAAE;AAC/B,MAAZ,WAAM,KAAK;IACb;;AAIQ,uBAAa,AAAW,AAAW,AAAW,AAAM,oDAAC;AACiB,MAA5E,AAAe,6CAAW,yBAAiC,WAAX,UAAU;IAC5D;;4EAnB+C,YAAgB;IADpC,uBAA0B;AACyB,uFAAuB,6BAAU,UAAU,EAAE,WAAW;AAC/G,IAArB;EACF;;;;;;;;;;;AAiCQ,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACe,MAA/C,AAAK,wCAAiB,KAAK,GAAE;AACd,MAAf,cAAS,KAAK;AACR,oBAAU,uBAAoB,KAAK,EAAE;AACP,MAApC,AAAM,KAAD,UAAQ,AAAe;AACtB,oBAAU,uBAAoB,KAAK,EAAE;AACrC,sBAAY,yBAAsB,KAAK;AACE,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,6BAAmB,iCAAY;AACC,MAA5C,kBAAY,mBAAK,gBAAU,gBAAgB;AACrC,oBAAU,uBAAoB,KAAK,EAAE;AAC/B,MAAZ,WAAM,KAAK;IACb;;AAIQ,uBAAa,AAAW,AAAW,AAAM,yCAAC;AACgD,MAAhG,AAAU,uBAAoB,AAAyB,WAApC,UAAU,wBAAoB,mBAAoC,WAAhB,WAAX,UAAU;AAC/B,MAArC,AAAS;AACiE,MAA1E,AAAe,6CAAW,yBAAiC,WAAX,UAAU;IAC5D;;AAI+B,MAA7B,AAAS;IACX;;6EA/BgD,YAAgB;IAHrC,uBAA0B;IACvC;IACT;AAC0E,wFAAuB,6BAAU,UAAU,EAAE,WAAW;AAChH,IAArB;EACF;;;;;;;;;;;;AA2CQ,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACgB,MAAhD,AAAK,wCAAiB,KAAK,GAAE;AACd,MAAf,cAAS,KAAK;AACR,oBAAU,uBAAoB,KAAK,EAAE;AACP,MAApC,AAAM,KAAD,UAAQ,AAAe;AACtB,oBAAU,uBAAoB,KAAK,EAAE;AAC/B,MAAZ,WAAM,KAAK;IACb;;AAIQ,uBAAa,AAAW,AAAW,AAAW,AAAM,oDAAC;AACiB,MAA5E,AAAe,6CAAW,yBAAiC,WAAX,UAAU;IAC5D;;6EAnBgD,YAAgB;IADrC,uBAA0B;AAC0B,wFAAuB,6BAAU,UAAU,EAAE,WAAW;AAChH,IAArB;EACF;;;;;;;;;;AA+BQ,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACyB,MAAzD,AAAK,wCAAiB,KAAK,GAAE;AACd,MAAf,cAAS,KAAK;AACR,oBAAU,uBAAoB,KAAK,EAAE;AACP,MAApC,AAAM,KAAD,UAAQ,AAAe;AACtB,oBAAU,uBAAoB,KAAK,EAAE;AAC/B,MAAZ,WAAM,KAAK;IACb;;AAIQ,uBAAa,AAAW,AAAW,AAAM,yCAAC;AAC2B,MAA3E,AAAe,6CAAW,yBAAiC,WAAX,UAAU;IAC5D;;6EAnBgD,YAAgB;IADrC,uBAA0B;AAC0B,wFAAuB,6BAAU,UAAU,EAAE,WAAW;AAChH,IAArB;EACF;;;;;;;;;;;AAkCiE,MAA/D,qBAAuB,wEAAgC,MAAM;AACvD,kBAAQ,AAAY;AACwB,MAAlD,AAAK,6BAAwB,KAAK,EAAE;AACrB,MAAf,cAAS,KAAK;AACoE,MAAlF,wCAA2C,wDAA2B;AAClB,MAApD,AAAY,2BAAQ;AACR,MAAZ,WAAM,KAAK;IACb;wBAGoC,OAAW,WAAmB;AAChE,UAAK,AAAU,KAAK,KAAW,iCAA2B,aAAV,SAAS,KAAI;AAC3D,cAAO;;AAET,YAAO,eAAc;IACvB;;AAIO,oBAAU;AACT,uBAAa,AAAW,AAAW,AAAM,yCAAC;AACjC,MAAf,UAAU;AACC,sBAAa,YAAY,WAAX,UAAU;AACnC,oBAAI,4BAAsB,gBAAS,SAAS;AACU,QAApD,AAAgC,iDAAW,SAAS;AACtC,QAAd,UAAU;AACS,QAAnB,iBAAU,SAAS;;AAEf,sBAAuB,WAAX,UAAU;AAC5B,oBAAI,4BAAsB,gBAAS,SAAS;AACO,QAAjD,AAAgC,8CAAA,qCAAQ,SAAS;AACnC,QAAd,UAAU;AACS,QAAnB,iBAAU,SAAS;;AAErB,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEa,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;AACiC,MAA7C,AAAgC;IAClC;;6EAjDgD,YAAgB;IAJvB;IACL;IAC/B;IACD;AAC2E,wFAAuB,6BAAU,UAAU,EAAE,WAAW;AAChH,IAArB;EACF;;;;;;;;;;;;;;;;;AA8D4D,MAA1D,qBAAuB,4DAA2B,MAAM;AAClD,kBAAQ,AAAY;AACsD,MAAhF,AAAK,6BAAwB,KAAK,EAAE;AACmB,MAAvD,yBAAsB,KAAK,EAAE,QAAQ;AACtB,MAAf,cAAS,KAAK;AACoD,MAAlE,mCAAsC,4CAAsB,KAAK;AAClB,MAA/C,AAAY,2BAAQ;AACR,MAAZ,WAAM,KAAK;IACb;;AAIO,oBAAU;AACV,uBAAmB,AAAQ,iBAAG;AACpB,MAAf,UAAU;AACV,UAAI,UAAU;AACuC,QAAnD,AAA2B,wCAAO;AACpB,QAAd,UAAU;;AAEZ,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEa,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;IACd;;6EAjCgD,YAAgB;IAF5B;IACL;AACgD,wFAAuB,6BAAU,UAAU,EAAE,WAAW;AAChH,IAArB;EACF;;;;;;;;;;;;;;;;;;;;AAuDE,UAAK,AAAgB,0BAAG;AACuD,QAA5E,yBAAkB,mCAA6B;;AAElD,YAAO;IACT;;AAGE,UAAK,AAAsB,gCAAG;AACgD,QAA3E,+BAAwB,4BAAsB;;AAEjD,YAAO;IACT;;AAI6D,MAA3D,qBAAuB,8DAA4B,MAAM;AAC/B,MAA1B,eAAQ,AAAY;AACuC,MAA3D,yBAAsB,cAAO,2BAA2B;AACzC,MAAf,gCAAS;AACqC,MAA9C,kBAAW,qCAAc,GAAG,MAAM,MAAM;AAK49D,MAJpgE,+CAAwC,2BAClC,oDAAoC,0CAAwB,cAC1C,mEAAuB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,2FAA6B,kCAAgB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,iHAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,2FAA6B,0CAAwB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,oFAAc,mBAAM,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,mFAAqB,0BAAQ,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,yGAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,mFAAqB,kCAAgB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,qGAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,mFAAqB,8BAAY,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,mGAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,mFAAqB,4BAAU,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,kHAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,gGAAkG,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,+FAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,gGAA0E,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,8FAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,gGAA8E,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,4GAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,2FAA6B,qCAAmB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,oFAAc,oBAAa,iBAAU,+BAAW,oDAEt/D,mEAAuB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,2FAA6B,kCAAgB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,iHAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,2FAA6B,0CAAwB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,oFAAc,mBAAM,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,mFAAqB,0BAAQ,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,yGAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,mFAAqB,kCAAgB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,qGAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,mFAAqB,8BAAY,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,mGAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,mFAAqB,4BAAU,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,kHAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,gGAAkG,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,+FAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,gGAA0E,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,8FAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,gGAA8E,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,4GAAc,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,2FAA6B,qCAAmB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,oFAAc,oBAAa,iBAAU,+BAAW;AACt/D,oBAAU,uBAAoB;AAC9B,sBAAY;AAC6B,MAA/C,iBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,6BAAmB,iCAAY;AAC+E,MAA1H,sCAAyC,kDAAyB,gBAAU,gBAAgB,EAAE;AACxF,oBAAU,uBAAoB;AAKlC,MAJF,AAAY,0BAAO,oCAA6B,oCAE9C,uBAAC,OAAO,EAAE,gBAAU,OAAO;AAGvB,2BAAiB,AAA4B,AAAU,oDAAO,+CAAc;AAChD,MAAlC,UAAK,uBAAC,mBAAW,yCAAC,cAAc;IAClC;wBAGoC,OAAW,WAAmB;AAChE,UAAe,aAAV,SAAS,KAAI;AAChB,YAAM,AAAU,KAAK,KAAW,4CAA2B,AAAU,KAAK,KAAW,0CAA0B,AAAU,KAAK,KAAW;AACvI,gBAAO;;AAET,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAO;;AAET,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAO;;;AAGX,YAAO,eAAc;IACvB;;AAIQ,iBAAO;AACR,oBAAU;AACV,uBAAmB,AAAQ,iBAAG;AAC7B,gCAAsB,AAA+D,2DAAZ;AACzE,uBAAa,AAAW,AAAW,AAAM,yCAAC;AACjC,MAAf,UAAU;AACV,UAAI,UAAU;AACmC,QAA/C,AAA4B,iDAAc;AAC5B,QAAd,UAAU;AACgD,QAA1D,AAA4B,6DAA0B;AACxC,QAAd,UAAU;;AAEN,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,gBAAS,SAAS;AACgB,QAA1D,AAA4B,wDAAqB,SAAS;AAC5C,QAAd,UAAU;AACS,QAAnB,iBAAU,SAAS;;AAEf,sBAAY,mBAAmB;AACrC,oBAAI,4BAAsB,gBAAS,SAAS;AACI,QAA9C,AAA4B,4CAAS,SAAS;AAChC,QAAd,UAAU;AACS,QAAnB,iBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD,iCAAkB,UAAU;AAClD,oBAAI,4BAAsB,gBAAS,SAAS;AACK,QAA/C,AAA4B,6CAAU,SAAS;AACjC,QAAd,UAAU;AACS,QAAnB,iBAAU,SAAS;;AAErB,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEd,UAAI,UAAU;AAC6C,QAAxD,AAA8B,yDAAqB;;AAEjB,MAArC,AAAS;AAC4B,MAArC,AAAS;AACH,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,gBAAS,SAAS;AACW,QAArD,AAAY,2CAAwB,cAAO,SAAS;AACjC,QAAnB,iBAAU,SAAS;;AAEoB,MAAzC,AAAY,qCAAkB,UAAU;AACb,MAA3B,AAAY;AACZ,qBAA4B;AAC1B,YAAI,UAAU;AACiC,UAA7C,AAA4B;;;IAGlC;;AAI+B,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACyB,MAAlC,AAAY;AAC+B,MAA3C,AAA8B;AACW,MAAzC,AAA4B;IAC9B;iCAE+B;AACvB,uBAAa,AAAW,AAAW,AAAM,yCAAC;AAC1C,iBAAO;AACsC,MAAnD,AAAK,IAAD,2CAA4B,UAAU,cAAE;IAC9C;;6EA/HgD,YAAgB;IAZ3B;IACvB;IACkB;IACxB;IACA;IACM;IACoB;IAC3B;IACH;IACA;IACC;IACW;AAC+D,wFAAuB,6BAAU,UAAU,EAAE,WAAW;AAChH,IAArB;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmJQ,iBAAO;AAC6C,MAA1D,qBAAuB,4DAA2B,MAAM;AAClD,kBAAQ,AAAY;AAC4B,MAAtD,AAAK,6BAAwB,KAAK,EAAE;AACQ,MAA5C,yBAAsB,KAAK,EAAE,QAAQ;AACtB,MAAf,cAAS,KAAK;AAC+C,MAA7D,oCAAsC;AAChC,oBAAU,uBAAoB;AACe,MAAnD,oBAAc,iEAA6B,MAAM;AAC3C,kBAAQ,AAAY;AACmB,MAA7C,yBAAsB,KAAK,EAAE,aAAa;AAC3B,MAAf,cAAS,KAAK;AAK2gB,MAJzhB,0CAAoC,2BAC9B,gDAAoC,sCAAoB,cACtC,iCAAmB,KAAK,mBAAE,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,8FAAqB,8BAAY,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,+FAAc,2BAAM,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,sGAA6B,kCAAgB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,8GAAc,AAAgE,4DAAZ,qEAEvf,iCAAmB,KAAK,mBAAE,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,8FAAqB,8BAAY,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,+FAAc,2BAAM,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,sGAA6B,kCAAgB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,8GAAc,AAAgE,4DAAZ;AAKwC,MAJriB,+CAAyC,2BACnC,qDAAmC,2CAAyB,cAC3C,4DAAwB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,8FAAqB,4BAAU,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,+FAAc,mBAAa,AAAgE,4DAAZ,kEAAyC,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,sGAA6B,+BAAa,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,qIAElhB,4DAAwB,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,8FAAqB,4BAAU,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS,+FAAc,mBAAa,AAAgE,4DAAZ,kEAAyC,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,sGAA6B,+BAAa,AAAW,AAAW,AAAW,AAAW,AAAW,AAAW,AAAS;AACte,MAAjD,AAAY,0BAAQ;AACd,oBAAU,uBAAoB;AAGlC,MAFF,AAAY,0BAAO,mCAA4B,uBAC7C,qBAAC,OAAO,EAAE,KAAK,EAAE,OAAO;AAEpB,2BAAiB,AAA6B,AAAS,mDAAO,6CAAmB,UAAL,IAAI;AACvD,MAA/B,UAAK,uBAAC,KAAK,IAAG,yCAAC,cAAc;IAC/B;;AAIQ,iBAAO;AACR,oBAAU;AACV,uBAAmB,AAAQ,iBAAG;AAC7B,uBAAa,AAAW,AAAW,AAAW,AAAM,oDAAC;AAC5C,MAAf,UAAU;AACV,UAAI,UAAU;AAC4B,QAAxC,AAA2B,yCAAO;AACpB,QAAd,UAAU;;AAEN,sBAA+B,WAAR,WAAX,UAAU;AAC5B,oBAAI,4BAAsB,gBAAS,SAAS;AACE,QAA5C,AAA2B,0CAAQ,SAAS;AAC9B,QAAd,UAAU;AACS,QAAnB,iBAAU,SAAS;;AAErB,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEd,UAAI,UAAU;AAC8B,QAAzC,AAAwB,0CAAY;;AAEvC,qBAA6B,+CAAmB,UAAU;AACtB,QAAlC,AAAwB;;AAEX,MAAf,UAAU;AACJ,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,gBAAS,SAAS;AACsB,QAAhE,AAA6B,6DAA0B,SAAS;AAClD,QAAd,UAAU;AACS,QAAnB,iBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,gBAAS,SAAS;AACS,QAAnD,AAA6B,gDAAa,SAAS;AACrC,QAAd,UAAU;AACS,QAAnB,iBAAU,SAAS;;AAEf,sBAAuB,WAAX,UAAU;AAC5B,oBAAI,4BAAsB,gBAAS,SAAS;AACG,QAA7C,AAA6B,0CAAA,gBAAO,SAAS;AAC/B,QAAd,UAAU;AACS,QAAnB,iBAAU,SAAS;;AAErB,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEd,qBAA6B,+CAAmB,UAAU;AACjB,QAAvC,AAA6B;;AAEU,MAAzC,AAAY,qCAAkB,UAAU;AACb,MAA3B,AAAY;AACe,MAA3B,AAAY;AACZ,qBAA4B;AAC1B,YAAI,UAAU;AACkC,UAA9C,AAA6B;;;IAGnC;;AAImK,MAAjK,AAAqH,0DAAnE,AAAW,AAAW,AAAW,AAAW,AAAW,iHAAoD;IAC/J;;AAIoC,MAAlC,AAAY;AACsB,MAAlC,AAAY;AACyB,MAArC,AAAwB;AACkB,MAA1C,AAA6B;IAC/B;;6EA5GgD,YAAgB;IAT5B;IACL;IACF;IACD;IACI;IAC5B;IACC;IACE;IACH;AAC2E,wFAAuB,6BAAU,UAAU,EAAE,WAAW;AAChH,IAArB;EACF;;;;;;;;;;;;;;;;;;;AAyHqD,MAAnD,qBAAc,iEAA6B,MAAM;AACtB,MAA3B,cAAS,AAAY;AAKwO,MAJ7P,+CAAyC,2BACnC,qDAAmC,2CAAyB,cAC3C,4DAAwB,AAAK,iBAAqB,4BAAU,AAAS,6BAAc,yCAAa,AAAK,yBAA6B,kCAAgB,AAAS,+CAAc,AAAK,yBAA6B,+BAAa,AAAS,mEAE1O,4DAAwB,AAAK,iBAAqB,4BAAU,AAAS,6BAAc,yCAAa,AAAK,yBAA6B,kCAAgB,AAAS,+CAAc,AAAK,yBAA6B,+BAAa,AAAS;AAC/K,MAAhE,AAAY,0BAAO,oCAA8B;AACpC,MAAb,WAAM;AACN,YAAO,oDAAa,GAAG,MAAM,aAAQ;IACvC;;AAIO,oBAAU;AACV,uBAAmB,AAAQ,iBAAG;AACnC,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEd,qBAA6B,+CAAmB,UAAU;AACjB,QAAvC,AAA6B;;AAEJ,MAA3B,AAAY;AACZ,qBAA4B;AAC1B,YAAI,UAAU;AACkC,UAA9C,AAA6B;;;IAGnC;;AAIoC,MAAlC,AAAY;AAC8B,MAA1C,AAA6B;IAC/B;;gFArCmD,YAAgB;IAFtC;IACG;AACkD,2FAAuB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;mHApqC1G,YAAgB;AAClF,UAAO,mEAA8B,UAAU,EAAE,WAAW;EAC9D;mHA+EoE,YAAgB;AAClF,UAAO,mEAA8B,UAAU,EAAE,WAAW;EAC9D;mHAkDoE,YAAgB;AAClF,UAAO,mEAA8B,UAAU,EAAE,WAAW;EAC9D;mHAwCoE,YAAgB;AAClF,UAAO,mEAA8B,UAAU,EAAE,WAAW;EAC9D;mHAiCoE,YAAgB;AAClF,UAAO,mEAA8B,UAAU,EAAE,WAAW;EAC9D;mHAsWoE,YAAgB;AAClF,UAAO,mEAA8B,UAAU,EAAE,WAAW;EAC9D;mHA2CoE,YAAgB;AAClF,UAAO,mEAA8B,UAAU,EAAE,WAAW;EAC9D;mHA4DoE,YAAgB;AAClF,UAAO,mEAA8B,UAAU,EAAE,WAAW;EAC9D;mHA0BoE,YAAgB;AAClF,UAAO,mEAA8B,UAAU,EAAE,WAAW;EAC9D;qHAwCqE,YAAgB;AACnF,UAAO,oEAA+B,UAAU,EAAE,WAAW;EAC/D;qHA0BqE,YAAgB;AACnF,UAAO,oEAA+B,UAAU,EAAE,WAAW;EAC/D;qHA0BqE,YAAgB;AACnF,UAAO,oEAA+B,UAAU,EAAE,WAAW;EAC/D;qHA2DqE,YAAgB;AACnF,UAAO,oEAA+B,UAAU,EAAE,WAAW;EAC/D;qHAyCqE,YAAgB;AACnF,UAAO,oEAA+B,UAAU,EAAE,WAAW;EAC/D;qHAiJqE,YAAgB;AACnF,UAAO,oEAA+B,UAAU,EAAE,WAAW;EAC/D;qHA2HqE,YAAgB;AACnF,UAAO,oEAA+B,UAAU,EAAE,WAAW;EAC/D;2HA+CmG,YAAgB;AACjH,UAAO,uEAAkC,UAAU,EAAE,WAAW;EAClE;;AAIE,kBAAI;AACF;;AAEa,IAAf,uCAAW;AAEwE,IAAnF,4BAAyB,2CAAyB;AAC7B,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;EACF;;;AAnzCE,YAAO;IACT;;;;;MAjIoB,0DAA8B;YAAG,EAAS;;MA8HN,6DAAiC;;;MA+tCrE,8DAAkC;;;MAiDlD,oCAAQ;YAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ACj6CX,UAAK,AAAyB,kCAAG;AAKoK,QAJlM,2CAAqC,2BAChC,+CAAoC,qCAAmB,cAC9C,uDAAiC,AAAW,oCAA6B,qCAAmB,AAAS,4CAAc,AAAW,oCAA6B,4BAAU,AAAS,6DAEvL,uDAAiC,AAAW,oCAA6B,qCAAmB,AAAS,4CAAc,AAAW,oCAA6B,4BAAU,AAAS;;AAEtL,YAAO;IACT;;AAGE,uBAAiB,2BAAY,kEAAkE;IACjG;;;AAIQ,iBAAO;AACP,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AACN,MAA3D,sBAAsB,gEAA6B,MAAM;AAC/B,MAA1B,gBAAQ,AAAY;AACU,MAA9B,AAAiB,gBAAD,UAAQ;AAC6B,MAArD,AAAK,6BAAwB,eAAO;AACW,MAA/C,yBAAsB,eAAO,eAAe;AACE,MAA9C,mBAAW,qCAAc,GAAG,MAAM,MAAM;AAK+F,MAJvI,oCAA8B,2BACxB,0CAAoC,gCAAc,cAChC,2CAAa,AAAW,mDAAyE,AAAS,wDAEnH,2CAAa,AAAW,mDAAyE,AAAS;AACd,MAA3G,qCAAuC,kEAAwB,mCAAO,0BAAmB,qBAAa;AAKiI,MAJvO,iDAA2C,2BACrC,sDAAmC,4CAA0B,cAC5C,qEAAyB,AAAW,4BAAqB,yCAAuB,AAAS,6BAAc,oCAAU,gBAAO,kBAAU,kCAAa,AAAW,4BAAoB,0BAAQ,AAAS,6BAAc,MAAM,6CAE5N,qEAAyB,AAAW,4BAAqB,yCAAuB,AAAS,6BAAc,oCAAU,gBAAO,kBAAU,kCAAa,AAAW,4BAAoB,0BAAQ,AAAS,6BAAc,MAAM;AAK0D,MAJ3R,6CAAuC,2BACjC,kDAAmC,wCAAsB,cACxC,gFAAqB,AAAW,4BAAqB,yCAAuB,AAAS,+CAAc,yCAAO,AAAW,oCAA6B,sCAAoB,AAAS,6CAAc,AAAW,oCAA6B,6BAAW,AAAS,6BAAc,yCAEhR,gFAAqB,AAAW,4BAAqB,yCAAuB,AAAS,+CAAc,yCAAO,AAAW,oCAA6B,sCAAoB,AAAS,6CAAc,AAAW,oCAA6B,6BAAW,AAAS,6BAAc;AAC/Q,sBAAY;AAC6B,MAA/C,mBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,6BAAmB,iCAAY;AACC,MAA5C,mBAAY,mBAAK,kBAAU,gBAAgB;AACrC,sBAAY;AAC6B,MAA/C,kBAAW,qCAAc,GAAG,GAAG,MAAM,SAAS;AAClC,6BAAmB,iCAAY;AACC,MAA5C,mBAAY,mBAAK,iBAAU,gBAAgB;AACrC,oBAAU,uBAAoB;AAGlC,MAFF,AAAY,2BAAO,oCAA8B,6BACtC,CAAC,kBAAU,iBAAU,OAAO,GAA5B;AAA+B,uCAAO,AAAc,2BAAC;;;AAE1D,sBAAY,yBAAsB,gBAAgB;AACN,MAAlD,kBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AACrC,6BAAmB,iCAAY;AACC,MAA5C,mBAAY,mBAAK,iBAAU,gBAAgB;AACqB,MAAhE,AAAM,iCAAiB,WAAW,+CAAmB,UAAL,IAAI;AAC9C,2BAAiB,AAA6B,AAAQ,kDAAO,2CAAmB,UAAL,IAAI;AAC3C,MAA1C,AAAK,IAAD,UAAU;AACkB,MAAhC,uBAAe,yCAAC,cAAc;IAChC;wBAGoC,OAAW,WAAmB;AAChE,UAAe,aAAV,SAAS,KAAI;AAChB,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAO;;AAET,YAAM,AAAU,KAAK,KAAU,6CAA4B,AAAU,KAAK,KAAW,qCAAqB,AAAU,KAAK,KAAW;AAClI,gBAAO;;AAET,YAAI,AAAU,KAAK,KAAW;AAC5B,gBAAO;;;AAGX,YAAO,eAAc;IACvB;;AAIQ,iBAAO;AACR,oBAAU;AACV,uBAAmB,AAAQ,iBAAG;AACpB,MAAf,UAAU;AACJ,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,iBAAS,SAAS;AACO,QAAjD,AAA6B,8CAAW,SAAS;AACnC,QAAd,UAAU;AACS,QAAnB,kBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,iBAAS,SAAS;AACO,QAAjD,AAA6B,8CAAW,SAAS;AACnC,QAAd,UAAU;AACS,QAAnB,kBAAU,SAAS;;AAErB,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAER,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,iBAAS,SAAS;AACK,QAA/C,AAA+B,4CAAO,SAAS;AAC5B,QAAnB,kBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,iBAAS,SAAS;AACQ,QAAlD,AAA+B,+CAAU,SAAS;AAC/B,QAAnB,kBAAU,SAAS;;AAErB,qBAA6B,+CAAmB,UAAU;AACf,QAAzC,AAA+B;;AAEU,MAA3C,AAAU,wBAAQ,AAAK,AAAK,AAAO,IAAb,gBAAgB;AACI,MAA1C,AAAU,wBAAQ,AAAK,AAAW,IAAZ,eAAe;AACL,MAAhC,AAAU,wBAAO,AAAK,IAAD;AACgB,MAArC,AAAS;AAC4B,MAArC,AAAS;AAC4B,MAArC,AAAS;AAC4B,MAArC,AAAS;AACT,qBAA4B;AAC1B,sBAAI;AAGC,UAFH,AAAK,IAAD,aAAa,2CAAqB,AAAS,sFAAe,QAA6B,cAClF,mCAAC,AAAW,UAAD;AAEyB,UAA7C,8CAAwC;;;AAGtC,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,iBAAS,SAAS;AACc,QAAxD,4BAAyB,eAAO,cAAc,SAAS;AACpC,QAAnB,kBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,iBAAS,SAAS;AACQ,QAAlD,4BAAyB,eAAO,QAAQ,SAAS;AAC9B,QAAnB,kBAAU,SAAS;;AAEoB,MAAzC,AAAY,sCAAkB,UAAU;AACb,MAA3B,AAAY;AACZ,qBAA4B;AAC1B,YAAI,UAAU;AACoC,UAAhD,AAA+B;AACa,UAA5C,AAA2B;;;IAGjC;;AAI+B,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACoB,MAA7B,AAAS;AACyB,MAAlC,AAAY;AACgC,MAA5C,AAA+B;AACS,MAAxC,AAA2B;IAC7B;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACmH,QAAtI,uEAAoB,SAAU,uEAA2C,qDAAS,uDAA8B;;AAE3F,MAAxB,uBAAkB,MAAM;IAC1B;;sEA3K4C,YAAgB;IAtBvD,8CAAwC;IACR;IACvB;IACN;IACwB;IACC;IACJ;IACrB;IACM;IACT;IACS;IACT;IACS;IACT;IACD;IACA;IACC;IACA;IACE;IACF;IACW;AAE2D,iFAAwB,8BAAW,UAAU,EAAE,WAAW;AAC9G,IAArB;AACwD,kBAAxD,kBAAiB,AAAS,8BAAc;EAC1C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAJ+B,oEAAgB;;;;;;;;AA6La,MAA1D,sBAAuB,4DAA2B,MAAM;AAClD,kBAAQ,AAAY;AACwC,MAAlE,oCAAsC,4CAAsB,KAAK;AAClB,MAA/C,AAAY,4BAAQ;AACR,MAAZ,WAAM,KAAK;IACb;;AAIQ,iBAAO;AACR,oBAAU;AACA,MAAf,UAAU;AACJ,sBAAY,AAAK,AAAK,IAAN;AACtB,oBAAI,4BAAsB,iBAAS,SAAS;AACC,QAA3C,AAA2B,yCAAO,SAAS;AAC7B,QAAd,UAAU;AACS,QAAnB,kBAAU,SAAS;;AAErB,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEa,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;IACd;;uEAhC6C,YAAgB;IAHzB;IACL;IAC3B;AACwE,kFAAwB,6BAAU,UAAU,EAAE,WAAW;AAC9G,IAArB;EACF;;;;;;;;;;;;;AA4CQ,gBAAc;AACd,kBAAQ,AAAI,GAAD,iBAAe;AACI,MAApC,AAAM,KAAD,UAAQ,AAAe;AAChB,MAAZ,WAAM,KAAK;IACb;;AAIQ,iBAAO;AAC0D,MAAvE,AAAe,gCAAW,+BAA4B,AAAK,IAAD;IAC5D;;uEAf6C,YAAgB;IADlC,uBAA0B;AACuB,kFAAwB,6BAAU,UAAU,EAAE,WAAW;AAC9G,IAArB;EACF;;;;;;;;;;;;AAmCyD,MAAvD,sBAAuB,sDAAwB,MAAM;AAC/C,kBAAQ,AAAY;AAC6B,MAAvD,iCAAmC;AAKwP,MAJ3R,4CAAsC,2BAChC,kDAAmC,wCAAsB,cACxC,gFAAqB,AAAW,4BAAqB,yCAAuB,AAAS,6BAAc,KAAK,2BAAE,AAAW,oCAA6B,sCAAoB,AAAS,6CAAc,AAAW,oCAA6B,6BAAW,AAAS,6BAAc,yCAEhR,gFAAqB,AAAW,4BAAqB,yCAAuB,AAAS,6BAAc,KAAK,2BAAE,AAAW,oCAA6B,sCAAoB,AAAS,6CAAc,AAAW,oCAA6B,6BAAW,AAAS,6BAAc;AACrN,MAAhE,AAAY,2BAAO,gCAAyB,uBAAC,AAAc,2BAAC;AACtD,2BAAiB,AAAwB,AAAmB,yDAAO,+DAAc;AACxD,MAA/B,UAAK,uBAAC,KAAK,IAAG,yCAAC,cAAc;IAC/B;;AAIQ,iBAAO;AACR,oBAAU;AACV,uBAAmB,AAAQ,iBAAG;AAC7B,yBAAe,AAA4D,wDAAZ;AACtD,MAAf,UAAU;AACJ,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,iBAAS,SAAS;AACF,QAAxC,AAAwB,sCAAO,SAAS;AAC1B,QAAd,UAAU;AACS,QAAnB,kBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,iBAAS,SAAS;AACY,QAAtD,AAAwB,oDAAqB,SAAS;AACxC,QAAd,UAAU;AACS,QAAnB,kBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,iBAAS,SAAS;AACM,QAAhD,AAAwB,8CAAe,SAAS;AAClC,QAAd,UAAU;AACS,QAAnB,kBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,iBAAS,SAAS;AACD,QAAzC,AAAwB,uCAAQ,SAAS;AAC3B,QAAd,UAAU;AACS,QAAnB,kBAAU,SAAS;;AAEf,sBAAY,YAAY;AAC9B,oBAAI,4BAAsB,iBAAS,SAAS;AACK,QAA/C,AAAwB,6CAAc,SAAS;AACjC,QAAd,UAAU;AACS,QAAnB,kBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,iBAAS,SAAS;AACI,QAA9C,AAAwB,4CAAa,SAAS;AAChC,QAAd,UAAU;AACS,QAAnB,kBAAU,SAAS;;AAErB,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEa,MAA3B,AAAY;AACZ,qBAA4B;AAC1B,YAAI,UAAU;AAC+B,UAA3C,AAA0B;;;IAGhC;;AAI0G,MAAxG,AAA4D,wDAAZ,0DAAoD;IACtG;;AAIoC,MAAlC,AAAY;AAC2B,MAAvC,AAA0B;IAC5B;qCAEoC;AAC5B,iBAAO;AACa,MAA1B,AAAK,IAAD,gBAAC,mBAAe;IACtB;;uEAtF6C,YAAgB;IAT5B;IACL;IACC;IACzB;IACA;IACA;IACA;IACA;IACG;AACqE,kFAAwB,6BAAU,UAAU,EAAE,WAAW;AAC9G,IAArB;EACF;;;;;;;;;;;;;;;;;;;;;;;AAmGmD,MAAjD,sBAAc,4DAA2B,MAAM;AACpB,MAA3B,cAAS,AAAY;AAC6C,MAAlE,mCAAqC,4CAAsB;AACG,MAA9D,AAAY,2BAAO,kCAA4B;AAClC,MAAb,WAAM;AACN,YAAO,kDAAa,GAAG,MAAM,aAAQ;IACvC;wBAGoC,OAAW,WAAmB;AAChE,UAAK,AAAU,KAAK,KAAW,iCAAiB,AAAE,MAAG,SAAS;AAC5D,cAAO;;AAET,YAAO,eAAc;IACvB;;AAIO,oBAAU;AACV,uBAAmB,AAAQ,iBAAG;AACnC,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEa,MAA3B,AAAY;AACZ,qBAA4B;AAC1B,YAAI,UAAU;AACgC,UAA5C,AAA2B;;;IAGjC;;AAIoC,MAAlC,AAAY;AAC4B,MAAxC,AAA2B;IAC7B;;2EAtCiD,YAAgB;IAFtC;IACG;AACkD,sFAAwB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;;;;;4GAxI3G,YAAgB;AAChF,UAAO,8DAA4B,UAAU,EAAE,WAAW;EAC5D;4GAsBkE,YAAgB;AAChF,UAAO,8DAA4B,UAAU,EAAE,WAAW;EAC5D;4GAqGkE,YAAgB;AAChF,UAAO,8DAA4B,UAAU,EAAE,WAAW;EAC5D;oHAgD+F,YAAgB;AAC7G,UAAO,kEAAgC,UAAU,EAAE,WAAW;EAChE;;AAIE,kBAAI;AACF;;AAEa,IAAf,oCAAW;AAEoE,IAA/E,4BAAyB,yCAAuB;AAC3B,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;EACF;;;AArPE,YAAO;IACT;;;;;MA1MoB,qDAA4B;;;MAuMM,wDAA+B;;;MA+KjE,yDAAgC;;;MAkDhD,iCAAQ;YAAG","file":"material_menu.template.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_popup$46template: menu_popup$46template,
    material_menu__menu_item_groups$46template: menu_item_groups$46template,
    material_menu__material_menu$46template: material_menu$46template
  };
}));

//# sourceMappingURL=material_menu.template.ddc.js.map
