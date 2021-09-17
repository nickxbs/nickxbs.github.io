define(['dart_sdk', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular/angular.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_tooltip/module.template', 'packages/angular_components/model/action/delayed_action.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/src/material_tooltip/tooltip_controller.template', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/runtime/queries', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/focus/focus', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/theme/dark_theme.template'], (function load__packages__angular_components__src__material_tooltip__icon_tooltip_scss_css_shim(dart_sdk, packages__angular_components__src__material_tooltip__icon_tooltip, packages__angular__angular$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__material_tooltip__module$46template, packages__angular_components__model__action__delayed_action$46template, packages__angular_components__utils__angular__css__css$46template, packages__angular_components__utils__browser__feature_detector__feature_detector$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__src__material_tooltip__tooltip_controller$46template, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular__src__runtime__queries, packages__angular_components__material_popup__material_popup, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__focus__focus, packages__angular_components__laminate__components__modal__modal, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__src__material_tooltip__tooltip_controller, packages__angular_components__material_tooltip__module, packages__angular_components__utils__disposer__disposer, packages__angular_components__content__deferred_content$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__focus__focus$46template, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__material_icon__material_icon, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular_components__theme__dark_theme, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__theme__dark_theme$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ink_tooltip$46template = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__ink_tooltip$46template;
  const tooltip_source$46template = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip_source$46template;
  const tooltip_target$46template = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip_target$46template;
  const paper_tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__paper_tooltip;
  const tooltip_target = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__tooltip_target;
  const icon_tooltip = packages__angular_components__src__material_tooltip__icon_tooltip.src__material_tooltip__icon_tooltip;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const module$46template = packages__angular_components__material_tooltip__module$46template.material_tooltip__module$46template;
  const delayed_action$46template = packages__angular_components__model__action__delayed_action$46template.model__action__delayed_action$46template;
  const css$46template = packages__angular_components__utils__angular__css__css$46template.utils__angular__css__css$46template;
  const feature_detector$46template = packages__angular_components__utils__browser__feature_detector__feature_detector$46template.utils__browser__feature_detector__feature_detector$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const tooltip_controller$46template = packages__angular_components__src__material_tooltip__tooltip_controller$46template.src__material_tooltip__tooltip_controller$46template;
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
  const queries = packages__angular__src__runtime__queries.src__runtime__queries;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const tooltip_controller = packages__angular_components__src__material_tooltip__tooltip_controller.src__material_tooltip__tooltip_controller;
  const module = packages__angular_components__material_tooltip__module.material_tooltip__module;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const dark_theme$46template = packages__angular_components__theme__dark_theme$46template.theme__dark_theme$46template;
  var icon_tooltip$46scss$46css$46shim = Object.create(dart.library);
  var tooltip$46template = Object.create(dart.library);
  var paper_tooltip$46scss$46css$46shim = Object.create(dart.library);
  var paper_tooltip$46template = Object.create(dart.library);
  var icon_tooltip$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var $append = dartx.append;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var MaterialPopupComponentL = () => (MaterialPopupComponentL = dart.constFn(dart.legacy(material_popup.MaterialPopupComponent)))();
  var _ViewMaterialPaperTooltipComponent1L = () => (_ViewMaterialPaperTooltipComponent1L = dart.constFn(dart.legacy(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1)))();
  var JSArrayOfMaterialPopupComponentL = () => (JSArrayOfMaterialPopupComponentL = dart.constFn(_interceptors.JSArray$(MaterialPopupComponentL())))();
  var ListOfMaterialPopupComponentL = () => (ListOfMaterialPopupComponentL = dart.constFn(core.List$(MaterialPopupComponentL())))();
  var ListLOfMaterialPopupComponentL = () => (ListLOfMaterialPopupComponentL = dart.constFn(dart.legacy(ListOfMaterialPopupComponentL())))();
  var _ViewMaterialPaperTooltipComponent1LToListLOfMaterialPopupComponentL = () => (_ViewMaterialPaperTooltipComponent1LToListLOfMaterialPopupComponentL = dart.constFn(dart.fnType(ListLOfMaterialPopupComponentL(), [_ViewMaterialPaperTooltipComponent1L()])))();
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
  var AutoFocusDirectiveL = () => (AutoFocusDirectiveL = dart.constFn(dart.legacy(focus.AutoFocusDirective)))();
  var ModalComponentL = () => (ModalComponentL = dart.constFn(dart.legacy(modal.ModalComponent)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var VoidToAutoFocusDirectiveL = () => (VoidToAutoFocusDirectiveL = dart.constFn(dart.fnType(AutoFocusDirectiveL(), [])))();
  var NodeL = () => (NodeL = dart.constFn(dart.legacy(html.Node)))();
  var JSArrayOfNodeL = () => (JSArrayOfNodeL = dart.constFn(_interceptors.JSArray$(NodeL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var ViewMaterialPaperTooltipComponent0L = () => (ViewMaterialPaperTooltipComponent0L = dart.constFn(dart.legacy(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0)))();
  var TooltipControllerL = () => (TooltipControllerL = dart.constFn(dart.legacy(tooltip_controller.TooltipController)))();
  var DisposerL = () => (DisposerL = dart.constFn(dart.legacy(disposer.Disposer)))();
  var VoidToTooltipControllerL = () => (VoidToTooltipControllerL = dart.constFn(dart.fnType(TooltipControllerL(), [])))();
  var MaterialPaperTooltipComponentL = () => (MaterialPaperTooltipComponentL = dart.constFn(dart.legacy(paper_tooltip.MaterialPaperTooltipComponent)))();
  var ComponentRefOfMaterialPaperTooltipComponentL = () => (ComponentRefOfMaterialPaperTooltipComponentL = dart.constFn(component_factory.ComponentRef$(MaterialPaperTooltipComponentL())))();
  var TooltipL = () => (TooltipL = dart.constFn(dart.legacy(tooltip_controller.Tooltip)))();
  var MaterialPaperTooltipComponentLToTooltipL = () => (MaterialPaperTooltipComponentLToTooltipL = dart.constFn(dart.fnType(TooltipL(), [MaterialPaperTooltipComponentL()])))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var ComponentFactoryOfMaterialPaperTooltipComponentL = () => (ComponentFactoryOfMaterialPaperTooltipComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialPaperTooltipComponentL())))();
  var AppViewOfMaterialPaperTooltipComponentL = () => (AppViewOfMaterialPaperTooltipComponentL = dart.constFn(app_view.AppView$(MaterialPaperTooltipComponentL())))();
  var AppViewLOfMaterialPaperTooltipComponentL = () => (AppViewLOfMaterialPaperTooltipComponentL = dart.constFn(dart.legacy(AppViewOfMaterialPaperTooltipComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialPaperTooltipComponentL = () => (AppViewLAndintLToAppViewLOfMaterialPaperTooltipComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialPaperTooltipComponentL(), [AppViewL(), intL()])))();
  var ClickableTooltipTargetDirectiveL = () => (ClickableTooltipTargetDirectiveL = dart.constFn(dart.legacy(tooltip_target.ClickableTooltipTargetDirective)))();
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var VoidToClickableTooltipTargetDirectiveL = () => (VoidToClickableTooltipTargetDirectiveL = dart.constFn(dart.fnType(ClickableTooltipTargetDirectiveL(), [])))();
  var KeyboardOnlyFocusIndicatorDirectiveL = () => (KeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)))();
  var VoidToKeyboardOnlyFocusIndicatorDirectiveL = () => (VoidToKeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.fnType(KeyboardOnlyFocusIndicatorDirectiveL(), [])))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var AcxDarkThemeL = () => (AcxDarkThemeL = dart.constFn(dart.legacy(dark_theme.AcxDarkTheme)))();
  var VoidToAcxDarkThemeL = () => (VoidToAcxDarkThemeL = dart.constFn(dart.fnType(AcxDarkThemeL(), [])))();
  var MaterialIconTooltipComponentL = () => (MaterialIconTooltipComponentL = dart.constFn(dart.legacy(icon_tooltip.MaterialIconTooltipComponent)))();
  var ComponentRefOfMaterialIconTooltipComponentL = () => (ComponentRefOfMaterialIconTooltipComponentL = dart.constFn(component_factory.ComponentRef$(MaterialIconTooltipComponentL())))();
  var ComponentFactoryOfMaterialIconTooltipComponentL = () => (ComponentFactoryOfMaterialIconTooltipComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialIconTooltipComponentL())))();
  var AppViewOfMaterialIconTooltipComponentL = () => (AppViewOfMaterialIconTooltipComponentL = dart.constFn(app_view.AppView$(MaterialIconTooltipComponentL())))();
  var AppViewLOfMaterialIconTooltipComponentL = () => (AppViewLOfMaterialIconTooltipComponentL = dart.constFn(dart.legacy(AppViewOfMaterialIconTooltipComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialIconTooltipComponentL = () => (AppViewLAndintLToAppViewLOfMaterialIconTooltipComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialIconTooltipComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/src/material_tooltip/paper_tooltip.template.dart";
  var L1 = "package:angular_components/src/material_tooltip/icon_tooltip.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponent1, AppViewLAndintLToAppViewLOfvoid());
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
      return C4 = dart.constList([], dart.dynamic);
    },
    get C5() {
      return C5 = dart.fn(paper_tooltip.getTooltipHandle, MaterialPaperTooltipComponentLToTooltipL());
    },
    get C8() {
      return C8 = dart.wrapType(MaterialPaperTooltipComponentL());
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], ObjectL());
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], ListLOfObjectL());
    },
    get C10() {
      return C10 = dart.fn(paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponentHost0, AppViewLAndintLToAppViewLOfMaterialPaperTooltipComponentL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ComponentFactoryOfMaterialPaperTooltipComponentL().prototype,
        [ComponentFactory__viewFactory]: C10 || CT.C10,
        [ComponentFactory_selector]: "material-tooltip-card"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C13() {
      return C13 = dart.fn(icon_tooltip$46template.viewFactory_MaterialIconTooltipComponentHost0, AppViewLAndintLToAppViewLOfMaterialIconTooltipComponentL());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ComponentFactoryOfMaterialIconTooltipComponentL().prototype,
        [ComponentFactory__viewFactory]: C13 || CT.C13,
        [ComponentFactory_selector]: "material-icon-tooltip"
      });
    }
  }, false);
  dart.defineLazy(icon_tooltip$46scss$46css$46shim, {
    /*icon_tooltip$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%:hover material-icon._ngcontent-%ID%,._nghost-%ID%:focus material-icon._ngcontent-%ID%{color:#3367d6}._nghost-%ID% material-icon._ngcontent-%ID%{color:rgba(0,0,0,0.54);cursor:pointer}._nghost-%ID%.acx-theme-dark:hover material-icon._ngcontent-%ID%,._nghost-%ID%.acx-theme-dark:focus material-icon._ngcontent-%ID%{color:#fff}._nghost-%ID%.acx-theme-dark material-icon._ngcontent-%ID%{color:#fff}"];
    }
  }, true);
  tooltip$46template.initReflector = function initReflector() {
    if (dart.test(tooltip$46template._visited)) {
      return;
    }
    tooltip$46template._visited = true;
    ink_tooltip$46template.initReflector();
    ink_tooltip$46template.initReflector();
    angular$46template.initReflector();
    alignment$46template.initReflector();
    popup$46template.initReflector();
    module$46template.initReflector();
    delayed_action$46template.initReflector();
    css$46template.initReflector();
    feature_detector$46template.initReflector();
    disposer$46template.initReflector();
    tooltip_controller$46template.initReflector();
    tooltip_source$46template.initReflector();
    tooltip_target$46template.initReflector();
  };
  dart.defineLazy(tooltip$46template, {
    /*tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(paper_tooltip$46scss$46css$46shim, {
    /*paper_tooltip$46scss$46css$46shim.styles*/get styles() {
      return [".paper-container._ngcontent-%ID%{background-color:#fff;font-size:13px;line-height:20px;max-height:400px;max-width:400px;min-width:160px;padding:24px;display:flex;flex-direction:column}@media (max-width:448px){.paper-container._ngcontent-%ID%{max-width:100vw;box-sizing:border-box}}.paper-container._ngcontent-%ID% .header:not(:empty)._ngcontent-%ID%{display:block;font-weight:bold;margin-bottom:8px}.paper-container._ngcontent-%ID% .body._ngcontent-%ID%{flex-grow:1}.paper-container._ngcontent-%ID% .footer._ngcontent-%ID% material-button._ngcontent-%ID%{margin:0}"];
    }
  }, true);
  var _query_MaterialPopupComponent_1_0_isDirty = dart.privateName(paper_tooltip$46template, "_query_MaterialPopupComponent_1_0_isDirty");
  var _appEl_0 = dart.privateName(paper_tooltip$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(paper_tooltip$46template, "_NgIf_0_9");
  var C0;
  var _MaterialPopupComponent_0_8 = dart.privateName(paper_tooltip$46template, "_MaterialPopupComponent_0_8");
  paper_tooltip$46template.ViewMaterialPaperTooltipComponent0 = class ViewMaterialPaperTooltipComponent0 extends app_view.AppView$(dart.legacy(paper_tooltip.MaterialPaperTooltipComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.popupSource != null;
      this[_appEl_0].detectChangesInNestedViews();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_MaterialPopupComponent_1_0_isDirty])) {
          _ctx.popupChild = queries.firstOrNull(MaterialPopupComponentL(), this[_appEl_0].mapNestedViews(MaterialPopupComponentL(), _ViewMaterialPaperTooltipComponent1L(), dart.fn(nestedView => JSArrayOfMaterialPopupComponentL().of([nestedView[_MaterialPopupComponent_0_8]]), _ViewMaterialPaperTooltipComponent1LToListLOfMaterialPopupComponentL())));
          this[_query_MaterialPopupComponent_1_0_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._componentStyles;
      if (styles == null) {
        paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._componentStyles = styles = paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(paper_tooltip$46template.styles$MaterialPaperTooltipComponent, paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.new = function(parentView, parentIndex) {
    this[_query_MaterialPopupComponent_1_0_isDirty] = true;
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-tooltip-card"));
  }).prototype = paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.prototype;
  dart.addTypeTests(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0);
  dart.addTypeCaches(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0);
  dart.setLibraryUri(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0, L0);
  dart.setFieldSignature(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0, () => ({
    __proto__: dart.getFields(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.__proto__),
    [_query_MaterialPopupComponent_1_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  dart.defineLazy(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0, {
    /*paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(paper_tooltip$46template, "_compView_0");
  var _PopupRef_0_9 = dart.privateName(paper_tooltip$46template, "_PopupRef_0_9");
  var __PopupHierarchy_0_12 = dart.privateName(paper_tooltip$46template, "__PopupHierarchy_0_12");
  var _AutoFocusDirective_2_5 = dart.privateName(paper_tooltip$46template, "_AutoFocusDirective_2_5");
  var _expr_1 = dart.privateName(paper_tooltip$46template, "_expr_1");
  var _expr_3 = dart.privateName(paper_tooltip$46template, "_expr_3");
  var _expr_4 = dart.privateName(paper_tooltip$46template, "_expr_4");
  var _expr_5 = dart.privateName(paper_tooltip$46template, "_expr_5");
  var _expr_6 = dart.privateName(paper_tooltip$46template, "_expr_6");
  var _expr_8 = dart.privateName(paper_tooltip$46template, "_expr_8");
  var _expr_9 = dart.privateName(paper_tooltip$46template, "_expr_9");
  var _el_0 = dart.privateName(paper_tooltip$46template, "_el_0");
  var _PopupHierarchy_0_12 = dart.privateName(paper_tooltip$46template, "_PopupHierarchy_0_12");
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C1;
  var C2;
  var C3;
  var C4;
  paper_tooltip$46template._ViewMaterialPaperTooltipComponent1 = class _ViewMaterialPaperTooltipComponent1 extends app_view.AppView$(dart.legacy(paper_tooltip.MaterialPaperTooltipComponent)) {
    get [_PopupHierarchy_0_12]() {
      if (this[__PopupHierarchy_0_12] == null) {
        this[__PopupHierarchy_0_12] = material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_12];
    }
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      dom_helpers.setAttribute(this[_el_0], "enforceSpaceConstraints", "");
      dom_helpers.setAttribute(this[_el_0], "role", "tooltip");
      dom_helpers.setAttribute(this[_el_0], "trackLayoutChanges", "");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_MaterialPopupComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), "tooltip", NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C1 || CT.C1, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C2 || CT.C2, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C3 || CT.C3, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(this[_el_0])), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), "tooltip", NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C1 || CT.C1, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C2 || CT.C2, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C3 || CT.C3, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(this[_el_0]));
      this[_PopupRef_0_9] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      let _text_1 = dom_helpers.createText("\n  ");
      let doc = html.document;
      let _el_2 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_2), "paper-container");
      this.addShimC(HtmlElementL().as(_el_2));
      this[_AutoFocusDirective_2_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoFocusDirectiveL(), dart.wrapType(AutoFocusDirectiveL()), dart.fn(() => new focus.AutoFocusDirective.new(HtmlElementL().as(_el_2), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), null, ModalComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.viewData.parentIndex)), PopupRefL().as(this[_PopupRef_0_9])), VoidToAutoFocusDirectiveL())) : new focus.AutoFocusDirective.new(HtmlElementL().as(_el_2), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), null, ModalComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.viewData.parentIndex)), PopupRefL().as(this[_PopupRef_0_9]));
      let _text_3 = dom_helpers.appendText(_el_2, "\n    ");
      let _el_4 = dom_helpers.appendDiv(doc, _el_2);
      this.updateChildClass(_el_4, "header");
      this.addShimC(_el_4);
      this.project(_el_4, 0);
      let _text_5 = dom_helpers.appendText(_el_2, "\n    ");
      let _el_6 = dom_helpers.appendDiv(doc, _el_2);
      this.updateChildClass(_el_6, "body");
      this.addShimC(_el_6);
      this.project(_el_6, 1);
      let _text_7 = dom_helpers.appendText(_el_2, "\n    ");
      let _el_8 = dom_helpers.appendDiv(doc, _el_2);
      this.updateChildClass(_el_8, "footer");
      this.addShimC(_el_8);
      this.project(_el_8, 2);
      let _text_9 = dom_helpers.appendText(_el_2, "\n  ");
      let _text_10 = dom_helpers.createText("\n");
      this[_compView_0].create(this[_MaterialPopupComponent_0_8], JSArrayOfObjectL().of([C4 || CT.C4, JSArrayOfNodeL().of([_text_1, _el_2, _text_10]), C4 || CT.C4]));
      _el_2[$addEventListener]("mouseover", this.eventHandler0(EventL(), dart.bind(_ctx, 'onMouseOver')));
      _el_2[$addEventListener]("mouseleave", this.eventHandler0(EventL(), dart.bind(_ctx, 'onMouseLeave')));
      this.init1(this[_appEl_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 10) {
        if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(DropdownHandleL())) {
          return this[_MaterialPopupComponent_0_8];
        }
        if (token === dart.wrapType(PopupRefL())) {
          return this[_PopupRef_0_9];
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
        this[_MaterialPopupComponent_0_8].trackLayoutChanges = true;
        changed = true;
      }
      let currVal_1 = _ctx.focusContents;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialPopupComponent_0_8].autoDismiss = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_3 = _ctx.offsetX;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialPopupComponent_0_8].offsetX = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.offsetY;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialPopupComponent_0_8].offsetY = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.preferredPositions;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialPopupComponent_0_8].preferredPositions = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.popupSource;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialPopupComponent_0_8].source = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_8 = _ctx.showPopup;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MaterialPopupComponent_0_8].visible = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_9 = _ctx.focusContents;
      if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_AutoFocusDirective_2_5].autoFocus = currVal_9;
        this[_expr_9] = currVal_9;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AutoFocusDirective_2_5].ngOnInit();
      }
      this[_appEl_0].detectChangesInNestedViews();
      if (firstCheck) {
        if (_ctx.popupClassName != null) {
          this[_compView_0].updateChildClassNonHtml(this[_el_0], _ctx.popupClassName);
        }
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialPopupComponent_0_8].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMaterialPaperTooltipComponent0L(), this.parentView)[_query_MaterialPopupComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_AutoFocusDirective_2_5].ngOnDestroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
  };
  (paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[_PopupRef_0_9] = null;
    this[__PopupHierarchy_0_12] = null;
    this[_AutoFocusDirective_2_5] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_el_0] = null;
    paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.prototype;
  dart.addTypeTests(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1);
  dart.addTypeCaches(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1);
  dart.setMethodSignature(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1, () => ({
    __proto__: dart.getMethods(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setGetterSignature(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1, () => ({
    __proto__: dart.getGetters(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.__proto__),
    [_PopupHierarchy_0_12]: dart.dynamic
  }));
  dart.setLibraryUri(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1, L0);
  dart.setFieldSignature(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1, () => ({
    __proto__: dart.getFields(paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialPopupComponent_0_8]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
    [_PopupRef_0_9]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_0_12]: dart.fieldType(dart.dynamic),
    [_AutoFocusDirective_2_5]: dart.fieldType(dart.legacy(focus.AutoFocusDirective)),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.legacy(core.int)),
    [_expr_4]: dart.fieldType(dart.legacy(core.int)),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_9]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _TooltipController_0_5 = dart.privateName(paper_tooltip$46template, "_TooltipController_0_5");
  var _MaterialPaperTooltipComponent_0_6 = dart.privateName(paper_tooltip$46template, "_MaterialPaperTooltipComponent_0_6");
  var __Tooltip_0_7 = dart.privateName(paper_tooltip$46template, "__Tooltip_0_7");
  var _Tooltip_0_7 = dart.privateName(paper_tooltip$46template, "_Tooltip_0_7");
  paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0 = class _ViewMaterialPaperTooltipComponentHost0 extends app_view.AppView$(dart.legacy(paper_tooltip.MaterialPaperTooltipComponent)) {
    get [_Tooltip_0_7]() {
      if (this[__Tooltip_0_7] == null) {
        this[__Tooltip_0_7] = paper_tooltip.getTooltipHandle(this[_MaterialPaperTooltipComponent_0_6]);
      }
      return this[__Tooltip_0_7];
    }
    build() {
      this[_compView_0] = new paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_TooltipController_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(TooltipControllerL(), dart.wrapType(TooltipControllerL()), dart.fn(() => module.createTooltipController(TooltipControllerL().as(this.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.viewData.parentIndex)), DisposerL().as(this.injectorGetOptional(dart.wrapType(DisposerL()), this.viewData.parentIndex))), VoidToTooltipControllerL())) : module.createTooltipController(TooltipControllerL().as(this.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.viewData.parentIndex)), DisposerL().as(this.injectorGetOptional(dart.wrapType(DisposerL()), this.viewData.parentIndex)));
      this[_MaterialPaperTooltipComponent_0_6] = new paper_tooltip.MaterialPaperTooltipComponent.new(TooltipControllerL().as(this[_TooltipController_0_5]), this[_compView_0], this.rootEl, null);
      this[_compView_0].create(this[_MaterialPaperTooltipComponent_0_6], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialPaperTooltipComponentL()).new(0, this, this.rootEl, this[_MaterialPaperTooltipComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(TooltipControllerL())) {
          return this[_TooltipController_0_5];
        }
        if (token === dart.wrapType(MaterialPaperTooltipComponentL()) || token === dart.wrapType(DeferredContentAwareL())) {
          return this[_MaterialPaperTooltipComponent_0_6];
        }
        if (token === dart.wrapType(TooltipL())) {
          return this[_Tooltip_0_7];
        }
      }
      return notFoundResult;
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
  (paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_TooltipController_0_5] = null;
    this[_MaterialPaperTooltipComponent_0_6] = null;
    this[__Tooltip_0_7] = null;
    paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.prototype;
  dart.addTypeTests(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0);
  dart.addTypeCaches(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0);
  dart.setMethodSignature(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0, () => ({
    __proto__: dart.getMethods(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setGetterSignature(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0, () => ({
    __proto__: dart.getGetters(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.__proto__),
    [_Tooltip_0_7]: dart.dynamic
  }));
  dart.setLibraryUri(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0, L0);
  dart.setFieldSignature(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0, () => ({
    __proto__: dart.getFields(paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0)),
    [_TooltipController_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialPaperTooltipComponent_0_6]: dart.fieldType(dart.legacy(paper_tooltip.MaterialPaperTooltipComponent)),
    [__Tooltip_0_7]: dart.fieldType(dart.dynamic)
  }));
  var C5;
  var C8;
  var C7;
  var C6;
  paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponent1 = function viewFactory_MaterialPaperTooltipComponent1(parentView, parentIndex) {
    return new paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.new(parentView, parentIndex);
  };
  paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponentHost0 = function viewFactory_MaterialPaperTooltipComponentHost0(parentView, parentIndex) {
    return new paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.new(parentView, parentIndex);
  };
  paper_tooltip$46template.initReflector = function initReflector$() {
    if (dart.test(paper_tooltip$46template._visited)) {
      return;
    }
    paper_tooltip$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialPaperTooltipComponentL()), paper_tooltip$46template.MaterialPaperTooltipComponentNgFactory);
    reflector.registerDependencies(C5 || CT.C5, C6 || CT.C6);
    angular$46template.initReflector();
    deferred_content$46template.initReflector();
    deferred_content_aware$46template.initReflector();
    focus$46template.initReflector();
    alignment$46template.initReflector();
    popup$46template.initReflector();
    material_popup$46template.initReflector();
    module$46template.initReflector();
    css$46template.initReflector();
    tooltip_controller$46template.initReflector();
    tooltip_target$46template.initReflector();
  };
  dart.copyProperties(paper_tooltip$46template, {
    get MaterialPaperTooltipComponentNgFactory() {
      return paper_tooltip$46template._MaterialPaperTooltipComponentNgFactory;
    }
  });
  var C10;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C9;
  dart.defineLazy(paper_tooltip$46template, {
    /*paper_tooltip$46template.styles$MaterialPaperTooltipComponent*/get styles$MaterialPaperTooltipComponent() {
      return [paper_tooltip$46scss$46css$46shim.styles];
    },
    /*paper_tooltip$46template._MaterialPaperTooltipComponentNgFactory*/get _MaterialPaperTooltipComponentNgFactory() {
      return C9 || CT.C9;
    },
    /*paper_tooltip$46template.styles$MaterialPaperTooltipComponentHost*/get styles$MaterialPaperTooltipComponentHost() {
      return C4 || CT.C4;
    },
    /*paper_tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var _compView_1 = dart.privateName(icon_tooltip$46template, "_compView_1");
  var _appEl_1 = dart.privateName(icon_tooltip$46template, "_appEl_1");
  var _ClickableTooltipTargetDirective_1_8 = dart.privateName(icon_tooltip$46template, "_ClickableTooltipTargetDirective_1_8");
  var _MaterialIconComponent_1_9 = dart.privateName(icon_tooltip$46template, "_MaterialIconComponent_1_9");
  var _KeyboardOnlyFocusIndicatorDirective_1_10 = dart.privateName(icon_tooltip$46template, "_KeyboardOnlyFocusIndicatorDirective_1_10");
  var _compView_4 = dart.privateName(icon_tooltip$46template, "_compView_4");
  var _TooltipController_4_5 = dart.privateName(icon_tooltip$46template, "_TooltipController_4_5");
  var _MaterialPaperTooltipComponent_4_6 = dart.privateName(icon_tooltip$46template, "_MaterialPaperTooltipComponent_4_6");
  var __Tooltip_4_7 = dart.privateName(icon_tooltip$46template, "__Tooltip_4_7");
  var _expr_3$ = dart.privateName(icon_tooltip$46template, "_expr_3");
  var _expr_4$ = dart.privateName(icon_tooltip$46template, "_expr_4");
  var _expr_5$ = dart.privateName(icon_tooltip$46template, "_expr_5");
  var _expr_6$ = dart.privateName(icon_tooltip$46template, "_expr_6");
  var _el_1 = dart.privateName(icon_tooltip$46template, "_el_1");
  var _Tooltip_4_7 = dart.privateName(icon_tooltip$46template, "_Tooltip_4_7");
  var _handle_click_1_0 = dart.privateName(icon_tooltip$46template, "_handle_click_1_0");
  var _handle_blur_1_3 = dart.privateName(icon_tooltip$46template, "_handle_blur_1_3");
  icon_tooltip$46template.ViewMaterialIconTooltipComponent0 = class ViewMaterialIconTooltipComponent0 extends app_view.AppView$(dart.legacy(icon_tooltip.MaterialIconTooltipComponent)) {
    get [_Tooltip_4_7]() {
      if (this[__Tooltip_4_7] == null) {
        this[__Tooltip_4_7] = paper_tooltip.getTooltipHandle(this[_MaterialPaperTooltipComponent_4_6]);
      }
      return this[__Tooltip_4_7];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tooltip/icon_tooltip.dart" : null;
    }
    build() {
      let t0;
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = dom_helpers.appendText(parentRenderNode, "    ");
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      parentRenderNode[$append](this[_el_1]);
      dom_helpers.setAttribute(this[_el_1], "clickableTooltipTarget", "");
      dom_helpers.setAttribute(this[_el_1], "keyboardOnlyFocusIndicator", "");
      this[_el_1].tabIndex = 0;
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, this[_el_1]);
      this[_ClickableTooltipTargetDirective_1_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ClickableTooltipTargetDirectiveL(), dart.wrapType(ClickableTooltipTargetDirectiveL()), dart.fn(() => new tooltip_target.ClickableTooltipTargetDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), this[_appEl_1], HtmlElementL().as(this[_el_1]), this[_compView_1], null), VoidToClickableTooltipTargetDirectiveL())) : new tooltip_target.ClickableTooltipTargetDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), this[_appEl_1], HtmlElementL().as(this[_el_1]), this[_compView_1], null);
      this[_MaterialIconComponent_1_9] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_1]));
      this[_KeyboardOnlyFocusIndicatorDirective_1_10] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_1]), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_1]), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)));
      this[_compView_1].create0(this[_MaterialIconComponent_1_9]);
      let _text_3 = dom_helpers.appendText(parentRenderNode, "\n    ");
      this[_compView_4] = new paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootEl;
      parentRenderNode[$append](_el_4);
      this.addShimC(_el_4);
      this[_TooltipController_4_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(TooltipControllerL(), dart.wrapType(TooltipControllerL()), dart.fn(() => module.createTooltipController(TooltipControllerL().as(this.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.viewData.parentIndex)), DisposerL().as(this.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.viewData.parentIndex))), VoidToTooltipControllerL())) : module.createTooltipController(TooltipControllerL().as(this.parentView.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.viewData.parentIndex)), DisposerL().as(this.parentView.injectorGetOptional(dart.wrapType(DisposerL()), this.viewData.parentIndex)));
      this[_MaterialPaperTooltipComponent_4_6] = new paper_tooltip.MaterialPaperTooltipComponent.new(TooltipControllerL().as(this[_TooltipController_4_5]), this[_compView_4], _el_4, null);
      let _text_5 = dom_helpers.createText("\n      ");
      let _text_6 = dom_helpers.createText("\n    ");
      this[_compView_4].create(this[_MaterialPaperTooltipComponent_4_6], JSArrayOfObjectL().of([C4 || CT.C4, (t0 = [_text_5], (() => {
          t0[$addAll](core.Iterable.as(this.projectedNodes[$_get](0)));
          t0[$addAll]([_text_6]);
          return t0;
        })()), C4 || CT.C4]));
      this[_el_1][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_click_1_0)));
      this[_el_1][$addEventListener]("mouseover", this.eventHandler0(EventL(), dart.bind(this[_ClickableTooltipTargetDirective_1_8], 'onMouseOver')));
      this[_el_1][$addEventListener]("mouseleave", this.eventHandler0(EventL(), dart.bind(this[_ClickableTooltipTargetDirective_1_8], 'onMouseLeave')));
      this[_el_1][$addEventListener]("blur", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_blur_1_3)));
      this[_el_1][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ClickableTooltipTargetDirective_1_8], 'kbTrigger')));
      this[_el_1][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_10], 'keydown')));
      this[_el_1][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_10], 'onMouseInteraction')));
      this[_el_1][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_10], 'onFocus')));
      _ctx.tooltipBehavior = this[_ClickableTooltipTargetDirective_1_8];
      this.init0();
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        if (token === dart.wrapType(TooltipControllerL())) {
          return this[_TooltipController_4_5];
        }
        if (token === dart.wrapType(MaterialPaperTooltipComponentL()) || token === dart.wrapType(DeferredContentAwareL())) {
          return this[_MaterialPaperTooltipComponent_4_6];
        }
        if (token === dart.wrapType(TooltipL())) {
          return this[_Tooltip_4_7];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_tooltipRef = this[_ClickableTooltipTargetDirective_1_8];
      changed = false;
      if (firstCheck) {
        if (_ctx.icon != null) {
          this[_MaterialIconComponent_1_9].icon = _ctx.icon;
          changed = true;
        }
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      let currVal_3 = _ctx.preferredPositions;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
        this[_MaterialPaperTooltipComponent_4_6].preferredPositions = currVal_3;
        changed = true;
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = _ctx.offsetX;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4$], currVal_4))) {
        this[_MaterialPaperTooltipComponent_4_6].offsetX = currVal_4;
        changed = true;
        this[_expr_4$] = currVal_4;
      }
      let currVal_5 = _ctx.offsetY;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5$], currVal_5))) {
        this[_MaterialPaperTooltipComponent_4_6].offsetY = currVal_5;
        changed = true;
        this[_expr_5$] = currVal_5;
      }
      let currVal_6 = local_tooltipRef;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6$], currVal_6))) {
        this[_MaterialPaperTooltipComponent_4_6].tooltipRef = currVal_6;
        changed = true;
        this[_expr_6$] = currVal_6;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      this[_appEl_1].detectChangesInNestedViews();
      if (firstCheck) {
        if (icon_tooltip.MaterialIconTooltipComponent.helpTooltipLabel != null) {
          dom_helpers.updateAttribute(this[_el_1], "aria-label", icon_tooltip.MaterialIconTooltipComponent.helpTooltipLabel);
        }
        if (_ctx.iconSize != null) {
          dom_helpers.updateAttribute(this[_el_1], "size", _ctx.iconSize);
        }
      }
      this[_compView_1].detectChanges();
      this[_compView_4].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_ClickableTooltipTargetDirective_1_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_compView_1].destroyInternalState();
      this[_compView_4].destroyInternalState();
      this[_ClickableTooltipTargetDirective_1_8].ngOnDestroy();
    }
    [_handle_click_1_0]($36event) {
      this[_ClickableTooltipTargetDirective_1_8].onClick();
      this[_KeyboardOnlyFocusIndicatorDirective_1_10].onMouseInteraction();
    }
    [_handle_blur_1_3]($36event) {
      this[_ClickableTooltipTargetDirective_1_8].onBlur(FocusEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_1_10].resetOutline();
    }
    initComponentStyles() {
      let styles = icon_tooltip$46template.ViewMaterialIconTooltipComponent0._componentStyles;
      if (styles == null) {
        icon_tooltip$46template.ViewMaterialIconTooltipComponent0._componentStyles = styles = icon_tooltip$46template.ViewMaterialIconTooltipComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(icon_tooltip$46template.styles$MaterialIconTooltipComponent, icon_tooltip$46template.ViewMaterialIconTooltipComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (icon_tooltip$46template.ViewMaterialIconTooltipComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_appEl_1] = null;
    this[_ClickableTooltipTargetDirective_1_8] = null;
    this[_MaterialIconComponent_1_9] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_1_10] = null;
    this[_compView_4] = null;
    this[_TooltipController_4_5] = null;
    this[_MaterialPaperTooltipComponent_4_6] = null;
    this[__Tooltip_4_7] = null;
    this[_expr_3$] = null;
    this[_expr_4$] = null;
    this[_expr_5$] = null;
    this[_expr_6$] = null;
    this[_el_1] = null;
    icon_tooltip$46template.ViewMaterialIconTooltipComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-icon-tooltip"));
  }).prototype = icon_tooltip$46template.ViewMaterialIconTooltipComponent0.prototype;
  dart.addTypeTests(icon_tooltip$46template.ViewMaterialIconTooltipComponent0);
  dart.addTypeCaches(icon_tooltip$46template.ViewMaterialIconTooltipComponent0);
  dart.setMethodSignature(icon_tooltip$46template.ViewMaterialIconTooltipComponent0, () => ({
    __proto__: dart.getMethods(icon_tooltip$46template.ViewMaterialIconTooltipComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_click_1_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_blur_1_3]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(icon_tooltip$46template.ViewMaterialIconTooltipComponent0, () => ({
    __proto__: dart.getGetters(icon_tooltip$46template.ViewMaterialIconTooltipComponent0.__proto__),
    [_Tooltip_4_7]: dart.dynamic
  }));
  dart.setLibraryUri(icon_tooltip$46template.ViewMaterialIconTooltipComponent0, L1);
  dart.setFieldSignature(icon_tooltip$46template.ViewMaterialIconTooltipComponent0, () => ({
    __proto__: dart.getFields(icon_tooltip$46template.ViewMaterialIconTooltipComponent0.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_ClickableTooltipTargetDirective_1_8]: dart.fieldType(dart.legacy(tooltip_target.ClickableTooltipTargetDirective)),
    [_MaterialIconComponent_1_9]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_KeyboardOnlyFocusIndicatorDirective_1_10]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
    [_compView_4]: dart.fieldType(dart.legacy(paper_tooltip$46template.ViewMaterialPaperTooltipComponent0)),
    [_TooltipController_4_5]: dart.fieldType(dart.dynamic),
    [_MaterialPaperTooltipComponent_4_6]: dart.fieldType(dart.legacy(paper_tooltip.MaterialPaperTooltipComponent)),
    [__Tooltip_4_7]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(dart.dynamic),
    [_expr_4$]: dart.fieldType(dart.legacy(core.int)),
    [_expr_5$]: dart.fieldType(dart.legacy(core.int)),
    [_expr_6$]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(icon_tooltip$46template.ViewMaterialIconTooltipComponent0, {
    /*icon_tooltip$46template.ViewMaterialIconTooltipComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0$ = dart.privateName(icon_tooltip$46template, "_compView_0");
  var _AcxDarkTheme_0_5 = dart.privateName(icon_tooltip$46template, "_AcxDarkTheme_0_5");
  var _MaterialIconTooltipComponent_0_6 = dart.privateName(icon_tooltip$46template, "_MaterialIconTooltipComponent_0_6");
  var C11;
  icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0 = class _ViewMaterialIconTooltipComponentHost0 extends app_view.AppView$(dart.legacy(icon_tooltip.MaterialIconTooltipComponent)) {
    build() {
      this[_compView_0$] = new icon_tooltip$46template.ViewMaterialIconTooltipComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_AcxDarkTheme_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.injectorGetOptional(C11 || CT.C11, this.viewData.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.injectorGetOptional(C11 || CT.C11, this.viewData.parentIndex)));
      this[_MaterialIconTooltipComponent_0_6] = new icon_tooltip.MaterialIconTooltipComponent.new(AcxDarkThemeL().as(this[_AcxDarkTheme_0_5]), this.rootEl, null, null, null);
      this[_compView_0$].create(this[_MaterialIconTooltipComponent_0_6], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialIconTooltipComponentL()).new(0, this, this.rootEl, this[_MaterialIconTooltipComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_0_5];
        }
        if (token === dart.wrapType(DeferredContentAwareL())) {
          return this[_MaterialIconTooltipComponent_0_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
    }
  };
  (icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialIconTooltipComponent_0_6] = null;
    icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.prototype;
  dart.addTypeTests(icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0);
  dart.addTypeCaches(icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0);
  dart.setMethodSignature(icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0, () => ({
    __proto__: dart.getMethods(icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0, L1);
  dart.setFieldSignature(icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0, () => ({
    __proto__: dart.getFields(icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(dart.legacy(icon_tooltip$46template.ViewMaterialIconTooltipComponent0)),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialIconTooltipComponent_0_6]: dart.fieldType(dart.legacy(icon_tooltip.MaterialIconTooltipComponent))
  }));
  icon_tooltip$46template.viewFactory_MaterialIconTooltipComponentHost0 = function viewFactory_MaterialIconTooltipComponentHost0(parentView, parentIndex) {
    return new icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.new(parentView, parentIndex);
  };
  icon_tooltip$46template.initReflector = function initReflector$0() {
    if (dart.test(icon_tooltip$46template._visited)) {
      return;
    }
    icon_tooltip$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialIconTooltipComponentL()), icon_tooltip$46template.MaterialIconTooltipComponentNgFactory);
    angular$46template.initReflector();
    deferred_content_aware$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    alignment$46template.initReflector();
    material_icon$46template.initReflector();
    dark_theme$46template.initReflector();
    paper_tooltip$46template.initReflector();
    tooltip_target$46template.initReflector();
  };
  dart.copyProperties(icon_tooltip$46template, {
    get MaterialIconTooltipComponentNgFactory() {
      return icon_tooltip$46template._MaterialIconTooltipComponentNgFactory;
    }
  });
  var C13;
  var C12;
  dart.defineLazy(icon_tooltip$46template, {
    /*icon_tooltip$46template.styles$MaterialIconTooltipComponent*/get styles$MaterialIconTooltipComponent() {
      return [icon_tooltip$46scss$46css$46shim.styles];
    },
    /*icon_tooltip$46template._MaterialIconTooltipComponentNgFactory*/get _MaterialIconTooltipComponentNgFactory() {
      return C12 || CT.C12;
    },
    /*icon_tooltip$46template.styles$MaterialIconTooltipComponentHost*/get styles$MaterialIconTooltipComponentHost() {
      return C4 || CT.C4;
    },
    /*icon_tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/src/material_tooltip/icon_tooltip.scss.css.shim", {
    "package:angular_components/src/material_tooltip/icon_tooltip.scss.css.shim.dart": icon_tooltip$46scss$46css$46shim,
    "package:angular_components/src/material_tooltip/tooltip.template.dart": tooltip$46template,
    "package:angular_components/src/material_tooltip/paper_tooltip.scss.css.shim.dart": paper_tooltip$46scss$46css$46shim,
    "package:angular_components/src/material_tooltip/paper_tooltip.template.dart": paper_tooltip$46template,
    "package:angular_components/src/material_tooltip/icon_tooltip.template.dart": icon_tooltip$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["icon_tooltip.scss.css.shim.dart","tooltip.template.dart","paper_tooltip.scss.css.shim.dart","paper_tooltip.template.dart","icon_tooltip.template.dart"],"names":[],"mappings":"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","file":"icon_tooltip.scss.css.shim.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__icon_tooltip$46scss$46css$46shim: icon_tooltip$46scss$46css$46shim,
    src__material_tooltip__tooltip$46template: tooltip$46template,
    src__material_tooltip__paper_tooltip$46scss$46css$46shim: paper_tooltip$46scss$46css$46shim,
    src__material_tooltip__paper_tooltip$46template: paper_tooltip$46template,
    src__material_tooltip__icon_tooltip$46template: icon_tooltip$46template
  };
}));

//# sourceMappingURL=icon_tooltip.scss.css.shim.ddc.js.map
