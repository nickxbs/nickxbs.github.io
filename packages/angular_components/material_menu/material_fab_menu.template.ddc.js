define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/material_button/material_fab.template', 'packages/angular_components/material_button/material_fab', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_menu/material_fab_menu', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_list/material_list_item.template', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_list/material_list_item', 'packages/angular_components/material_menu/material_menu.template', 'packages/angular_components/material_menu/common/menu_root', 'packages/angular_components/material_menu/material_menu', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_menu/menu_root.template', 'packages/angular_components/material_tooltip/material_tooltip.template', 'packages/angular_components/mixins/track_layout_changes.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/menu/menu.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/material_menu/material_fab_menu.scss.css.shim'], (function load__packages__angular_components__material_menu__material_fab_menu_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__src__material_tooltip__tooltip_controller, packages__angular_components__material_tooltip__module, packages__angular_components__utils__disposer__disposer, packages__angular_components__material_button__material_fab$46template, packages__angular_components__material_button__material_fab, packages__angular_components__src__material_tooltip__icon_tooltip, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular_components__material_menu__material_fab_menu, packages__angular_components__material_popup__material_popup, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__content__deferred_content, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__material_list__material_list_item$46template, packages__angular__src__runtime__interpolate, packages__angular_components__material_list__material_list_item, packages__angular_components__material_menu__material_menu$46template, packages__angular_components__material_menu__common__menu_root, packages__angular_components__material_menu__material_menu, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__interfaces__has_disabled, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__focus__focus$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_menu__menu_root$46template, packages__angular_components__material_tooltip__material_tooltip$46template, packages__angular_components__mixins__track_layout_changes$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template, packages__angular_components__model__menu__menu$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__material_menu__material_fab_menu$46scss$46css$46shim) {
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
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const tooltip_controller = packages__angular_components__src__material_tooltip__tooltip_controller.src__material_tooltip__tooltip_controller;
  const module = packages__angular_components__material_tooltip__module.material_tooltip__module;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const material_fab$46template = packages__angular_components__material_button__material_fab$46template.material_button__material_fab$46template;
  const material_fab = packages__angular_components__material_button__material_fab.material_button__material_fab;
  const tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const material_fab_menu = packages__angular_components__material_menu__material_fab_menu.material_menu__material_fab_menu;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const deferred_content = packages__angular_components__content__deferred_content.content__deferred_content;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const material_list_item$46template = packages__angular_components__material_list__material_list_item$46template.material_list__material_list_item$46template;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_list_item = packages__angular_components__material_list__material_list_item.material_list__material_list_item;
  const menu_item_groups$46template = packages__angular_components__material_menu__material_menu$46template.material_menu__menu_item_groups$46template;
  const menu_root = packages__angular_components__material_menu__common__menu_root.material_menu__common__menu_root;
  const menu_item_groups = packages__angular_components__material_menu__material_menu.material_menu__menu_item_groups;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const menu_root$46template = packages__angular_components__material_menu__menu_root$46template.material_menu__menu_root$46template;
  const material_tooltip$46template = packages__angular_components__material_tooltip__material_tooltip$46template.material_tooltip__material_tooltip$46template;
  const track_layout_changes$46template = packages__angular_components__mixins__track_layout_changes$46template.mixins__track_layout_changes$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  const menu$46template = packages__angular_components__model__menu__menu$46template.model__menu__menu$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const material_fab_menu$46scss$46css$46shim = packages__angular_components__material_menu__material_fab_menu$46scss$46css$46shim.material_menu__material_fab_menu$46scss$46css$46shim;
  var material_fab_menu$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var TooltipControllerL = () => (TooltipControllerL = dart.constFn(dart.legacy(tooltip_controller.TooltipController)))();
  var DisposerL = () => (DisposerL = dart.constFn(dart.legacy(disposer.Disposer)))();
  var VoidToTooltipControllerL = () => (VoidToTooltipControllerL = dart.constFn(dart.fnType(TooltipControllerL(), [])))();
  var MaterialTooltipDirectiveL = () => (MaterialTooltipDirectiveL = dart.constFn(dart.legacy(tooltip.MaterialTooltipDirective)))();
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var WindowL = () => (WindowL = dart.constFn(dart.legacy(html.Window)))();
  var VoidToMaterialTooltipDirectiveL = () => (VoidToMaterialTooltipDirectiveL = dart.constFn(dart.fnType(MaterialTooltipDirectiveL(), [])))();
  var PopupSourceDirectiveL = () => (PopupSourceDirectiveL = dart.constFn(dart.legacy(popup_source_directive.PopupSourceDirective)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var VoidToPopupSourceDirectiveL = () => (VoidToPopupSourceDirectiveL = dart.constFn(dart.fnType(PopupSourceDirectiveL(), [])))();
  var NodeL = () => (NodeL = dart.constFn(dart.legacy(html.Node)))();
  var JSArrayOfNodeL = () => (JSArrayOfNodeL = dart.constFn(_interceptors.JSArray$(NodeL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
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
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var ViewMaterialFabMenuComponent0L = () => (ViewMaterialFabMenuComponent0L = dart.constFn(dart.legacy(material_fab_menu$46template.ViewMaterialFabMenuComponent0)))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var _ViewMaterialFabMenuComponent1L = () => (_ViewMaterialFabMenuComponent1L = dart.constFn(dart.legacy(material_fab_menu$46template._ViewMaterialFabMenuComponent1)))();
  var MenuItemGroupsComponentL = () => (MenuItemGroupsComponentL = dart.constFn(dart.legacy(menu_item_groups.MenuItemGroupsComponent)))();
  var IdGeneratorL = () => (IdGeneratorL = dart.constFn(dart.legacy(id_generator.IdGenerator)))();
  var VoidToMenuItemGroupsComponentL = () => (VoidToMenuItemGroupsComponentL = dart.constFn(dart.fnType(MenuItemGroupsComponentL(), [])))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var MenuRootL = () => (MenuRootL = dart.constFn(dart.legacy(menu_root.MenuRoot)))();
  var MaterialFabMenuComponentL = () => (MaterialFabMenuComponentL = dart.constFn(dart.legacy(material_fab_menu.MaterialFabMenuComponent)))();
  var ComponentRefOfMaterialFabMenuComponentL = () => (ComponentRefOfMaterialFabMenuComponentL = dart.constFn(component_factory.ComponentRef$(MaterialFabMenuComponentL())))();
  var ComponentFactoryOfMaterialFabMenuComponentL = () => (ComponentFactoryOfMaterialFabMenuComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialFabMenuComponentL())))();
  var AppViewOfMaterialFabMenuComponentL = () => (AppViewOfMaterialFabMenuComponentL = dart.constFn(app_view.AppView$(MaterialFabMenuComponentL())))();
  var AppViewLOfMaterialFabMenuComponentL = () => (AppViewLOfMaterialFabMenuComponentL = dart.constFn(dart.legacy(AppViewOfMaterialFabMenuComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialFabMenuComponentL = () => (AppViewLAndintLToAppViewLOfMaterialFabMenuComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialFabMenuComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_menu/material_fab_menu.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_fab_menu$46template.viewFactory_MaterialFabMenuComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C1() {
      return C1 = dart.constList([], ObjectL());
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
      return C5 = dart.fn(material_fab_menu$46template.viewFactory_MaterialFabMenuComponent2, AppViewLAndintLToAppViewLOfvoid());
    },
    get C6() {
      return C6 = dart.constList([], dart.dynamic);
    },
    get C8() {
      return C8 = dart.fn(material_fab_menu$46template.viewFactory_MaterialFabMenuComponentHost0, AppViewLAndintLToAppViewLOfMaterialFabMenuComponentL());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ComponentFactoryOfMaterialFabMenuComponentL().prototype,
        [ComponentFactory__viewFactory]: C8 || CT.C8,
        [ComponentFactory_selector]: "material-fab-menu"
      });
    }
  }, false);
  var _compView_1 = dart.privateName(material_fab_menu$46template, "_compView_1");
  var _appEl_1 = dart.privateName(material_fab_menu$46template, "_appEl_1");
  var _MaterialFabComponent_1_8 = dart.privateName(material_fab_menu$46template, "_MaterialFabComponent_1_8");
  var _MaterialTooltipDirective_1_9 = dart.privateName(material_fab_menu$46template, "_MaterialTooltipDirective_1_9");
  var _PopupSourceDirective_1_10 = dart.privateName(material_fab_menu$46template, "_PopupSourceDirective_1_10");
  var __TooltipController_1_11 = dart.privateName(material_fab_menu$46template, "__TooltipController_1_11");
  var _compView_3 = dart.privateName(material_fab_menu$46template, "_compView_3");
  var _MaterialIconComponent_3_5 = dart.privateName(material_fab_menu$46template, "_MaterialIconComponent_3_5");
  var _appEl_6 = dart.privateName(material_fab_menu$46template, "_appEl_6");
  var _NgIf_6_9 = dart.privateName(material_fab_menu$46template, "_NgIf_6_9");
  var _expr_0 = dart.privateName(material_fab_menu$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_fab_menu$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_fab_menu$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_fab_menu$46template, "_expr_3");
  var _expr_6 = dart.privateName(material_fab_menu$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_fab_menu$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_fab_menu$46template, "_expr_8");
  var _el_1 = dart.privateName(material_fab_menu$46template, "_el_1");
  var _TooltipController_1_11 = dart.privateName(material_fab_menu$46template, "_TooltipController_1_11");
  var C0;
  var C1;
  material_fab_menu$46template.ViewMaterialFabMenuComponent0 = class ViewMaterialFabMenuComponent0 extends app_view.AppView$(dart.legacy(material_fab_menu.MaterialFabMenuComponent)) {
    get [_TooltipController_1_11]() {
      if (this[__TooltipController_1_11] == null) {
        this[__TooltipController_1_11] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(TooltipControllerL(), dart.wrapType(TooltipControllerL()), dart.fn(() => module.createTooltipController(TooltipControllerL().as(this.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.viewData.parentIndex)), DisposerL().as(this.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.viewData.parentIndex))), VoidToTooltipControllerL())) : module.createTooltipController(TooltipControllerL().as(this.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.viewData.parentIndex)), DisposerL().as(this.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.viewData.parentIndex)));
      }
      return this[__TooltipController_1_11];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/material_fab_menu.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_compView_1] = new material_fab$46template.ViewMaterialFabComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      parentRenderNode[$append](this[_el_1]);
      dom_helpers.setAttribute(this[_el_1], "popupSource", "");
      dom_helpers.setAttribute(this[_el_1], "raised", "");
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, this[_el_1]);
      this[_MaterialFabComponent_1_8] = new material_fab.MaterialFabComponent.new(HtmlElementL().as(this[_el_1]), this[_compView_1]);
      this[_MaterialTooltipDirective_1_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTooltipDirectiveL(), dart.wrapType(MaterialTooltipDirectiveL()), dart.fn(() => new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), this[_appEl_1], HtmlElementL().as(this[_el_1]), this[_appEl_1], this[_compView_1], WindowL().as(this.parentView.injectorGet(dart.wrapType(WindowL()), this.viewData.parentIndex)), null, null), VoidToMaterialTooltipDirectiveL())) : new tooltip.MaterialTooltipDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), this[_appEl_1], HtmlElementL().as(this[_el_1]), this[_appEl_1], this[_compView_1], WindowL().as(this.parentView.injectorGet(dart.wrapType(WindowL()), this.viewData.parentIndex)), null, null);
      this[_PopupSourceDirective_1_10] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), HtmlElementL().as(this[_el_1]), ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.viewData.parentIndex)), null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), HtmlElementL().as(this[_el_1]), ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.viewData.parentIndex)), null);
      let _text_2 = dom_helpers.createText("\n  ");
      this[_compView_3] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootEl;
      this.addShimC(_el_3);
      this[_MaterialIconComponent_3_5] = new material_icon.MaterialIconComponent.new(_el_3);
      this[_compView_3].create0(this[_MaterialIconComponent_3_5]);
      let _text_4 = dom_helpers.createText("\n");
      this[_compView_1].create(this[_MaterialFabComponent_1_8], JSArrayOfObjectL().of([JSArrayOfNodeL().of([_text_2, _el_3, _text_4])]));
      let _text_5 = dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_6 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_6] = new view_container.ViewContainer.new(6, null, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C0 || CT.C0);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _text_7 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_el_1][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyDown')));
      let subscription_0 = this[_MaterialFabComponent_1_8].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'trigger')));
      this.init(C1 || CT.C1, JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(TooltipControllerL()) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 4) {
        return this[_TooltipController_1_11];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialFabComponent_1_8].raised = true;
        changed = true;
      }
      let currVal_3 = !dart.test(_ctx.isFabEnabled);
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialFabComponent_1_8].disabled = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (firstCheck) {
        if (_ctx.tooltipPositions != null) {
          this[_MaterialTooltipDirective_1_9].positions = _ctx.tooltipPositions;
        }
      }
      let currVal_6 = _ctx.tooltip;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialTooltipDirective_1_9].text = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.hasTooltip;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_MaterialTooltipDirective_1_9].canShow = currVal_7;
        this[_expr_7] = currVal_7;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTooltipDirective_1_9].ngOnInit();
      }
      changed = false;
      let currVal_8 = _ctx.glyph;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MaterialIconComponent_3_5].icon = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_NgIf_6_9].ngIf = _ctx.hasMenu;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_0 = _ctx.isFabHidden;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_1], "invisible", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.ariaLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-label", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.naviId;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateAttribute(this[_el_1], "navi-id", currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      this[_compView_3].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialTooltipDirective_1_9].ngAfterViewInit();
          this[_PopupSourceDirective_1_10].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_compView_1].destroyInternalState();
      this[_compView_3].destroyInternalState();
      this[_MaterialTooltipDirective_1_9].ngOnDestroy();
      this[_PopupSourceDirective_1_10].ngOnDestroy();
    }
    initComponentStyles() {
      let styles = material_fab_menu$46template.ViewMaterialFabMenuComponent0._componentStyles;
      if (styles == null) {
        material_fab_menu$46template.ViewMaterialFabMenuComponent0._componentStyles = styles = material_fab_menu$46template.ViewMaterialFabMenuComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_fab_menu$46template.styles$MaterialFabMenuComponent, material_fab_menu$46template.ViewMaterialFabMenuComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_fab_menu$46template.ViewMaterialFabMenuComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_appEl_1] = null;
    this[_MaterialFabComponent_1_8] = null;
    this[_MaterialTooltipDirective_1_9] = null;
    this[_PopupSourceDirective_1_10] = null;
    this[__TooltipController_1_11] = null;
    this[_compView_3] = null;
    this[_MaterialIconComponent_3_5] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_el_1] = null;
    material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-fab-menu"));
  }).prototype = material_fab_menu$46template.ViewMaterialFabMenuComponent0.prototype;
  dart.addTypeTests(material_fab_menu$46template.ViewMaterialFabMenuComponent0);
  dart.addTypeCaches(material_fab_menu$46template.ViewMaterialFabMenuComponent0);
  dart.setMethodSignature(material_fab_menu$46template.ViewMaterialFabMenuComponent0, () => ({
    __proto__: dart.getMethods(material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setGetterSignature(material_fab_menu$46template.ViewMaterialFabMenuComponent0, () => ({
    __proto__: dart.getGetters(material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__),
    [_TooltipController_1_11]: dart.dynamic
  }));
  dart.setLibraryUri(material_fab_menu$46template.ViewMaterialFabMenuComponent0, L0);
  dart.setFieldSignature(material_fab_menu$46template.ViewMaterialFabMenuComponent0, () => ({
    __proto__: dart.getFields(material_fab_menu$46template.ViewMaterialFabMenuComponent0.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_fab$46template.ViewMaterialFabComponent0)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialFabComponent_1_8]: dart.fieldType(dart.legacy(material_fab.MaterialFabComponent)),
    [_MaterialTooltipDirective_1_9]: dart.fieldType(dart.legacy(tooltip.MaterialTooltipDirective)),
    [_PopupSourceDirective_1_10]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
    [__TooltipController_1_11]: dart.fieldType(dart.dynamic),
    [_compView_3]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_3_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_6]: dart.fieldType(dart.legacy(core.String)),
    [_expr_7]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(material_fab_menu$46template.ViewMaterialFabMenuComponent0, {
    /*material_fab_menu$46template.ViewMaterialFabMenuComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_fab_menu$46template, "_compView_0");
  var _appEl_0 = dart.privateName(material_fab_menu$46template, "_appEl_0");
  var _MaterialPopupComponent_0_8 = dart.privateName(material_fab_menu$46template, "_MaterialPopupComponent_0_8");
  var __PopupHierarchy_0_11 = dart.privateName(material_fab_menu$46template, "__PopupHierarchy_0_11");
  var __PopupRef_0_12 = dart.privateName(material_fab_menu$46template, "__PopupRef_0_12");
  var _appEl_2 = dart.privateName(material_fab_menu$46template, "_appEl_2");
  var _DeferredContentDirective_2_9 = dart.privateName(material_fab_menu$46template, "_DeferredContentDirective_2_9");
  var _expr_4 = dart.privateName(material_fab_menu$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_fab_menu$46template, "_expr_5");
  var _PopupHierarchy_0_11 = dart.privateName(material_fab_menu$46template, "_PopupHierarchy_0_11");
  var _PopupRef_0_12 = dart.privateName(material_fab_menu$46template, "_PopupRef_0_12");
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  material_fab_menu$46template._ViewMaterialFabMenuComponent1 = class _ViewMaterialFabMenuComponent1 extends app_view.AppView$(dart.legacy(material_fab_menu.MaterialFabMenuComponent)) {
    get [_PopupHierarchy_0_11]() {
      if (this[__PopupHierarchy_0_11] == null) {
        this[__PopupHierarchy_0_11] = material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_11];
    }
    get [_PopupRef_0_12]() {
      if (this[__PopupRef_0_12] == null) {
        this[__PopupRef_0_12] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupRef_0_12];
    }
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      dom_helpers.setAttribute(_el_0, "autoDismiss", "");
      dom_helpers.setAttribute(_el_0, "enforceSpaceConstraints", "");
      this.addShimC(_el_0);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _el_0);
      this[_MaterialPopupComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C2 || CT.C2, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C3 || CT.C3, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C4 || CT.C4, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(_el_0)), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), null, NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C2 || CT.C2, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C3 || CT.C3, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C4 || CT.C4, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(_el_0));
      let _text_1 = dom_helpers.createText("\n  ");
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C5 || CT.C5);
      this[_DeferredContentDirective_2_9] = new deferred_content.DeferredContentDirective.new(this[_appEl_2], _TemplateRef_2_8, this[_MaterialPopupComponent_0_8]);
      let _text_3 = dom_helpers.createText("\n");
      this[_compView_0].create(this[_MaterialPopupComponent_0_8], JSArrayOfObjectL().of([C6 || CT.C6, JSArrayOfObjectL().of([_text_1, this[_appEl_2], _text_3]), C6 || CT.C6]));
      let subscription_0 = this[_MaterialPopupComponent_0_8].onClose.listen(this.eventHandler0(dart.void, dart.bind(_ctx, 'onPopupClosed')));
      let subscription_1 = this[_MaterialPopupComponent_0_8].onOpened.listen(this.eventHandler0(dart.void, dart.bind(_ctx, 'onPopupOpened')));
      this.init(JSArrayOfObjectL().of([this[_appEl_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 3) {
        if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(DropdownHandleL())) {
          return this[_MaterialPopupComponent_0_8];
        }
        if (token === dart.wrapType(PopupHierarchyL())) {
          return this[_PopupHierarchy_0_11];
        }
        if (token === dart.wrapType(PopupRefL())) {
          return this[_PopupRef_0_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_source = optimizations.unsafeCast(ViewMaterialFabMenuComponent0L(), this.parentView)[_PopupSourceDirective_1_10];
      changed = false;
      if (firstCheck) {
        this[_MaterialPopupComponent_0_8].autoDismiss = true;
        changed = true;
        this[_MaterialPopupComponent_0_8].enforceSpaceConstraints = true;
        changed = true;
        this[_MaterialPopupComponent_0_8].hasBox = false;
        changed = true;
      }
      let currVal_2 = _ctx.preferredPopupPositions;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialPopupComponent_0_8].preferredPositions = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = local_source;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialPopupComponent_0_8].source = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.trackLayoutChanges;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialPopupComponent_0_8].trackLayoutChanges = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.showPopup;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialPopupComponent_0_8].visible = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_DeferredContentDirective_2_9].preserveDimensions = true;
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
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
      this[_appEl_2].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_DeferredContentDirective_2_9].ngOnDestroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
  };
  (material_fab_menu$46template._ViewMaterialFabMenuComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupHierarchy_0_11] = null;
    this[__PopupRef_0_12] = null;
    this[_appEl_2] = null;
    this[_DeferredContentDirective_2_9] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_fab_menu$46template._ViewMaterialFabMenuComponent1.prototype;
  dart.addTypeTests(material_fab_menu$46template._ViewMaterialFabMenuComponent1);
  dart.addTypeCaches(material_fab_menu$46template._ViewMaterialFabMenuComponent1);
  dart.setMethodSignature(material_fab_menu$46template._ViewMaterialFabMenuComponent1, () => ({
    __proto__: dart.getMethods(material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setGetterSignature(material_fab_menu$46template._ViewMaterialFabMenuComponent1, () => ({
    __proto__: dart.getGetters(material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__),
    [_PopupHierarchy_0_11]: dart.dynamic,
    [_PopupRef_0_12]: dart.dynamic
  }));
  dart.setLibraryUri(material_fab_menu$46template._ViewMaterialFabMenuComponent1, L0);
  dart.setFieldSignature(material_fab_menu$46template._ViewMaterialFabMenuComponent1, () => ({
    __proto__: dart.getFields(material_fab_menu$46template._ViewMaterialFabMenuComponent1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialPopupComponent_0_8]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
    [__PopupHierarchy_0_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_0_12]: dart.fieldType(dart.dynamic),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_DeferredContentDirective_2_9]: dart.fieldType(dart.legacy(deferred_content.DeferredContentDirective)),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_5]: dart.fieldType(dart.legacy(core.bool))
  }));
  var _compView_4 = dart.privateName(material_fab_menu$46template, "_compView_4");
  var _MaterialListItemComponent_4_5 = dart.privateName(material_fab_menu$46template, "_MaterialListItemComponent_4_5");
  var _compView_6 = dart.privateName(material_fab_menu$46template, "_compView_6");
  var _MaterialIconComponent_6_5 = dart.privateName(material_fab_menu$46template, "_MaterialIconComponent_6_5");
  var _compView_9 = dart.privateName(material_fab_menu$46template, "_compView_9");
  var _MenuRootDirective_9_5 = dart.privateName(material_fab_menu$46template, "_MenuRootDirective_9_5");
  var _MenuItemGroupsComponent_9_7 = dart.privateName(material_fab_menu$46template, "_MenuItemGroupsComponent_9_7");
  var _expr_9 = dart.privateName(material_fab_menu$46template, "_expr_9");
  var _el_0 = dart.privateName(material_fab_menu$46template, "_el_0");
  var _el_2 = dart.privateName(material_fab_menu$46template, "_el_2");
  material_fab_menu$46template._ViewMaterialFabMenuComponent2 = class _ViewMaterialFabMenuComponent2 extends app_view.AppView$(dart.legacy(material_fab_menu.MaterialFabMenuComponent)) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "menu-content");
      dom_helpers.setAttribute(this[_el_0], "elevation", "2");
      this.addShimC(this[_el_0]);
      let _text_1 = dom_helpers.appendText(this[_el_0], "\n    ");
      this[_el_2] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_2], "content-wrapper");
      this.addShimC(this[_el_2]);
      let _text_3 = dom_helpers.appendText(this[_el_2], "\n      ");
      this[_compView_4] = new material_list_item$46template.ViewMaterialListItemComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootEl;
      this[_el_2][$append](_el_4);
      this.updateChildClassNonHtml(_el_4, interpolate.interpolateString2("", "close-menu", " ", "item", ""));
      this.addShimC(_el_4);
      this[_MaterialListItemComponent_4_5] = new material_list_item.MaterialListItemComponent.new(_el_4, optimizations.unsafeCast(_ViewMaterialFabMenuComponent1L(), this.parentView)[_MaterialPopupComponent_0_8], null, null);
      let _text_5 = dom_helpers.createText("\n        ");
      this[_compView_6] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootEl;
      this.updateChildClassNonHtml(_el_6, "close-icon material-list-item-primary");
      dom_helpers.setAttribute(_el_6, "icon", "close");
      this.addShimC(_el_6);
      this[_MaterialIconComponent_6_5] = new material_icon.MaterialIconComponent.new(_el_6);
      this[_compView_6].create0(this[_MaterialIconComponent_6_5]);
      let _text_7 = dom_helpers.createText("\n      ");
      this[_compView_4].create(this[_MaterialListItemComponent_4_5], JSArrayOfObjectL().of([JSArrayOfNodeL().of([_text_5, _el_6, _text_7])]));
      let _text_8 = dom_helpers.appendText(this[_el_2], "\n      ");
      this[_compView_9] = new menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 9);
      let _el_9 = this[_compView_9].rootEl;
      this[_el_2][$append](_el_9);
      this.updateChildClassNonHtml(_el_9, "menu-groups");
      dom_helpers.setAttribute(_el_9, "menu-root", "");
      dom_helpers.setAttribute(_el_9, "preventCloseOnPressLeft", "");
      this.addShimC(_el_9);
      this[_MenuRootDirective_9_5] = new menu_root.MenuRootDirective.new(optimizations.unsafeCast(_ViewMaterialFabMenuComponent1L(), this.parentView)[_MaterialPopupComponent_0_8]);
      this[_MenuItemGroupsComponent_9_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MenuItemGroupsComponentL(), dart.wrapType(MenuItemGroupsComponentL()), dart.fn(() => menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRootDirective_9_5], this[_compView_9], optimizations.unsafeCast(_ViewMaterialFabMenuComponent1L(), this.parentView)[_MaterialPopupComponent_0_8], IdGeneratorL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.viewData.parentIndex))), VoidToMenuItemGroupsComponentL())) : menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRootDirective_9_5], this[_compView_9], optimizations.unsafeCast(_ViewMaterialFabMenuComponent1L(), this.parentView)[_MaterialPopupComponent_0_8], IdGeneratorL().as(this.parentView.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.parentView.viewData.parentIndex)));
      this[_compView_9].create0(this[_MenuItemGroupsComponent_9_7]);
      let _text_11 = dom_helpers.appendText(this[_el_2], "\n    ");
      let _text_12 = dom_helpers.appendText(this[_el_0], "\n  ");
      let subscription_0 = this[_MaterialListItemComponent_4_5].trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'hideMenu')));
      this.init(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 7) {
        return this[_MaterialListItemComponent_4_5];
      }
      if (token === dart.wrapType(MenuRootL()) && 9 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 10) {
        return this[_MenuRootDirective_9_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialListItemComponent_4_5].closeOnActivate = false;
        changed = true;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_6_5].icon = "close";
        changed = true;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MenuItemGroupsComponent_9_7].preventCloseOnPressLeft = "";
        changed = true;
      }
      let currVal_7 = _ctx.activateFirstItemOnInit;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_MenuItemGroupsComponent_9_7].activateFirstItemOnInit = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.activateLastItemOnInit;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MenuItemGroupsComponent_9_7].activateLastItemOnInit = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.menuItem.subMenu;
      if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_MenuItemGroupsComponent_9_7].menu = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      if (changed) {
        this[_compView_9].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MenuItemGroupsComponent_9_7].ngOnInit();
      }
      let currVal_0 = _ctx.menuVisible;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(this[_el_0], "visible", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.closing;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBinding(this[_el_0], "closing", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.hasIcons;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateClassBinding(this[_el_0], "has-icons", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.menuVisible;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        dom_helpers.updateClassBinding(this[_el_2], "visible", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.closing;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        dom_helpers.updateClassBinding(this[_el_2], "closing", currVal_4);
        this[_expr_4] = currVal_4;
      }
      this[_compView_4].detectHostChanges(firstCheck);
      this[_compView_4].detectChanges();
      this[_compView_6].detectChanges();
      this[_compView_9].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MenuItemGroupsComponent_9_7].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_4].destroyInternalState();
      this[_compView_6].destroyInternalState();
      this[_compView_9].destroyInternalState();
      this[_MaterialListItemComponent_4_5].ngOnDestroy();
      this[_MenuItemGroupsComponent_9_7].ngOnDestroy();
    }
  };
  (material_fab_menu$46template._ViewMaterialFabMenuComponent2.new = function(parentView, parentIndex) {
    this[_compView_4] = null;
    this[_MaterialListItemComponent_4_5] = null;
    this[_compView_6] = null;
    this[_MaterialIconComponent_6_5] = null;
    this[_compView_9] = null;
    this[_MenuRootDirective_9_5] = null;
    this[_MenuItemGroupsComponent_9_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_el_0] = null;
    this[_el_2] = null;
    material_fab_menu$46template._ViewMaterialFabMenuComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_fab_menu$46template._ViewMaterialFabMenuComponent2.prototype;
  dart.addTypeTests(material_fab_menu$46template._ViewMaterialFabMenuComponent2);
  dart.addTypeCaches(material_fab_menu$46template._ViewMaterialFabMenuComponent2);
  dart.setMethodSignature(material_fab_menu$46template._ViewMaterialFabMenuComponent2, () => ({
    __proto__: dart.getMethods(material_fab_menu$46template._ViewMaterialFabMenuComponent2.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_fab_menu$46template._ViewMaterialFabMenuComponent2, L0);
  dart.setFieldSignature(material_fab_menu$46template._ViewMaterialFabMenuComponent2, () => ({
    __proto__: dart.getFields(material_fab_menu$46template._ViewMaterialFabMenuComponent2.__proto__),
    [_compView_4]: dart.fieldType(dart.legacy(material_list_item$46template.ViewMaterialListItemComponent0)),
    [_MaterialListItemComponent_4_5]: dart.fieldType(dart.legacy(material_list_item.MaterialListItemComponent)),
    [_compView_6]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_6_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_compView_9]: dart.fieldType(dart.legacy(menu_item_groups$46template.ViewMenuItemGroupsComponent0)),
    [_MenuRootDirective_9_5]: dart.fieldType(dart.legacy(menu_root.MenuRootDirective)),
    [_MenuItemGroupsComponent_9_7]: dart.fieldType(dart.legacy(menu_item_groups.MenuItemGroupsComponent)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_7]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_8]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_2]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _MaterialFabMenuComponent_0_5 = dart.privateName(material_fab_menu$46template, "_MaterialFabMenuComponent_0_5");
  material_fab_menu$46template._ViewMaterialFabMenuComponentHost0 = class _ViewMaterialFabMenuComponentHost0 extends app_view.AppView$(dart.legacy(material_fab_menu.MaterialFabMenuComponent)) {
    build() {
      this[_compView_0] = new material_fab_menu$46template.ViewMaterialFabMenuComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialFabMenuComponent_0_5] = new material_fab_menu.MaterialFabMenuComponent.new(this[_compView_0]);
      this[_compView_0].create(this[_MaterialFabMenuComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialFabMenuComponentL()).new(0, this, this.rootEl, this[_MaterialFabMenuComponent_0_5]);
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
      this[_MaterialFabMenuComponent_0_5].ngOnDestroy();
    }
  };
  (material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialFabMenuComponent_0_5] = null;
    material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.prototype;
  dart.addTypeTests(material_fab_menu$46template._ViewMaterialFabMenuComponentHost0);
  dart.addTypeCaches(material_fab_menu$46template._ViewMaterialFabMenuComponentHost0);
  dart.setLibraryUri(material_fab_menu$46template._ViewMaterialFabMenuComponentHost0, L0);
  dart.setFieldSignature(material_fab_menu$46template._ViewMaterialFabMenuComponentHost0, () => ({
    __proto__: dart.getFields(material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_fab_menu$46template.ViewMaterialFabMenuComponent0)),
    [_MaterialFabMenuComponent_0_5]: dart.fieldType(dart.legacy(material_fab_menu.MaterialFabMenuComponent))
  }));
  material_fab_menu$46template.viewFactory_MaterialFabMenuComponent1 = function viewFactory_MaterialFabMenuComponent1(parentView, parentIndex) {
    return new material_fab_menu$46template._ViewMaterialFabMenuComponent1.new(parentView, parentIndex);
  };
  material_fab_menu$46template.viewFactory_MaterialFabMenuComponent2 = function viewFactory_MaterialFabMenuComponent2(parentView, parentIndex) {
    return new material_fab_menu$46template._ViewMaterialFabMenuComponent2.new(parentView, parentIndex);
  };
  material_fab_menu$46template.viewFactory_MaterialFabMenuComponentHost0 = function viewFactory_MaterialFabMenuComponentHost0(parentView, parentIndex) {
    return new material_fab_menu$46template._ViewMaterialFabMenuComponentHost0.new(parentView, parentIndex);
  };
  material_fab_menu$46template.initReflector = function initReflector() {
    if (dart.test(material_fab_menu$46template._visited)) {
      return;
    }
    material_fab_menu$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialFabMenuComponentL()), material_fab_menu$46template.MaterialFabMenuComponentNgFactory);
    menu_item_groups$46template.initReflector();
    angular$46template.initReflector();
    meta$46template.initReflector();
    deferred_content$46template.initReflector();
    focus$46template.initReflector();
    alignment$46template.initReflector();
    popup$46template.initReflector();
    material_fab$46template.initReflector();
    material_icon$46template.initReflector();
    material_list_item$46template.initReflector();
    menu_root$46template.initReflector();
    material_popup$46template.initReflector();
    material_tooltip$46template.initReflector();
    track_layout_changes$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    menu$46template.initReflector();
    observable$46template.initReflector();
  };
  dart.copyProperties(material_fab_menu$46template, {
    get MaterialFabMenuComponentNgFactory() {
      return material_fab_menu$46template._MaterialFabMenuComponentNgFactory;
    }
  });
  var C8;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C7;
  dart.defineLazy(material_fab_menu$46template, {
    /*material_fab_menu$46template.styles$MaterialFabMenuComponent*/get styles$MaterialFabMenuComponent() {
      return [material_fab_menu$46scss$46css$46shim.styles];
    },
    /*material_fab_menu$46template._MaterialFabMenuComponentNgFactory*/get _MaterialFabMenuComponentNgFactory() {
      return C7 || CT.C7;
    },
    /*material_fab_menu$46template.styles$MaterialFabMenuComponentHost*/get styles$MaterialFabMenuComponentHost() {
      return C6 || CT.C6;
    },
    /*material_fab_menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_menu/material_fab_menu.template", {
    "package:angular_components/material_menu/material_fab_menu.template.dart": material_fab_menu$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_fab_menu.template.dart"],"names":[],"mappings":"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","file":"material_fab_menu.template.ddc.js"}');
  // Exports:
  return {
    material_menu__material_fab_menu$46template: material_fab_menu$46template
  };
}));

//# sourceMappingURL=material_fab_menu.template.ddc.js.map
