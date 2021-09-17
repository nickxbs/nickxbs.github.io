define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/model/math/box', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus_interface.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/enums/visibility.template', 'packages/angular_components/laminate/overlay/module.template', 'packages/angular_components/laminate/overlay/overlay.template', 'packages/angular_components/laminate/overlay/zindexer.template', 'packages/angular_components/laminate/popup/module.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/math/box.template', 'packages/angular_components/model/ui/toggle.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/material_popup/material_popup.scss.css.shim'], (function load__packages__angular_components__material_popup__material_popup_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_popup__material_popup, packages__angular__src__runtime__interpolate, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__laminate__enums__alignment, packages__angular_components__model__math__box, packages__angular_components__content__deferred_content_aware, packages__angular_components__mixins__material_dropdown_base, packages__angular__angular$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__focus__focus_interface$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__laminate__enums__visibility$46template, packages__angular_components__laminate__overlay__module$46template, packages__angular_components__laminate__overlay__overlay$46template, packages__angular_components__laminate__overlay__zindexer$46template, packages__angular_components__laminate__popup__module$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__mixins__material_dropdown_base$46template, packages__angular_components__model__math__box$46template, packages__angular_components__model__ui__toggle$46template, packages__angular_components__utils__async__async$46template, packages__angular_components__utils__browser__dom_service__angular_2$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_components__material_popup__material_popup$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const box = packages__angular_components__model__math__box.model__math__box;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const focus_interface$46template = packages__angular_components__focus__focus_interface$46template.focus__focus_interface$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const visibility$46template = packages__angular_components__laminate__enums__visibility$46template.laminate__enums__visibility$46template;
  const module$46template = packages__angular_components__laminate__overlay__module$46template.laminate__overlay__module$46template;
  const overlay$46template = packages__angular_components__laminate__overlay__overlay$46template.laminate__overlay__overlay$46template;
  const zindexer$46template = packages__angular_components__laminate__overlay__zindexer$46template.laminate__overlay__zindexer$46template;
  const module$46template$ = packages__angular_components__laminate__popup__module$46template.laminate__popup__module$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const material_dropdown_base$46template = packages__angular_components__mixins__material_dropdown_base$46template.mixins__material_dropdown_base$46template;
  const box$46template = packages__angular_components__model__math__box$46template.model__math__box$46template;
  const toggle$46template = packages__angular_components__model__ui__toggle$46template.model__ui__toggle$46template;
  const async$46template = packages__angular_components__utils__async__async$46template.utils__async__async$46template;
  const angular_2$46template = packages__angular_components__utils__browser__dom_service__angular_2$46template.utils__browser__dom_service__angular_2$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const material_popup$46scss$46css$46shim = packages__angular_components__material_popup__material_popup$46scss$46css$46shim.material_popup__material_popup$46scss$46css$46shim;
  var material_popup$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var $setProperty = dartx.setProperty;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
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
  var ComponentRefOfMaterialPopupComponentL = () => (ComponentRefOfMaterialPopupComponentL = dart.constFn(component_factory.ComponentRef$(MaterialPopupComponentL())))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var MaterialPopupComponentLToPopupHierarchyL = () => (MaterialPopupComponentLToPopupHierarchyL = dart.constFn(dart.fnType(PopupHierarchyL(), [MaterialPopupComponentL()])))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var MaterialPopupComponentLToPopupRefL = () => (MaterialPopupComponentLToPopupRefL = dart.constFn(dart.fnType(PopupRefL(), [MaterialPopupComponentL()])))();
  var ComponentFactoryOfMaterialPopupComponentL = () => (ComponentFactoryOfMaterialPopupComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialPopupComponentL())))();
  var AppViewOfMaterialPopupComponentL = () => (AppViewOfMaterialPopupComponentL = dart.constFn(app_view.AppView$(MaterialPopupComponentL())))();
  var AppViewLOfMaterialPopupComponentL = () => (AppViewLOfMaterialPopupComponentL = dart.constFn(dart.legacy(AppViewOfMaterialPopupComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialPopupComponentL = () => (AppViewLAndintLToAppViewLOfMaterialPopupComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialPopupComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_popup/material_popup.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_popup$46template.viewFactory_MaterialPopupComponent1, AppViewLAndintLToAppViewLOfvoid());
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
      return C4 = dart.fn(material_popup.getHierarchy, MaterialPopupComponentLToPopupHierarchyL());
    },
    get C7() {
      return C7 = dart.wrapType(MaterialPopupComponentL());
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], ObjectL());
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], ListLOfObjectL());
    },
    get C8() {
      return C8 = dart.fn(material_popup.getResolvedPopupRef, MaterialPopupComponentLToPopupRefL());
    },
    get C10() {
      return C10 = dart.fn(material_popup$46template.viewFactory_MaterialPopupComponentHost0, AppViewLAndintLToAppViewLOfMaterialPopupComponentL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ComponentFactoryOfMaterialPopupComponentL().prototype,
        [ComponentFactory__viewFactory]: C10 || CT.C10,
        [ComponentFactory_selector]: "material-popup"
      });
    },
    get C11() {
      return C11 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _appEl_1 = dart.privateName(material_popup$46template, "_appEl_1");
  var _TemplateRef_1_7 = dart.privateName(material_popup$46template, "_TemplateRef_1_7");
  var _expr_0 = dart.privateName(material_popup$46template, "_expr_0");
  var C0;
  material_popup$46template.ViewMaterialPopupComponent0 = class ViewMaterialPopupComponent0 extends app_view.AppView$(dart.legacy(material_popup.MaterialPopupComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_popup/material_popup.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_1 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      this[_TemplateRef_1_7] = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      let _text_2 = dom_helpers.appendText(parentRenderNode, "\n");
      _ctx.templateRef = this[_TemplateRef_1_7];
      this.init0();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.paneId;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(this.rootEl, "pane-id", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    initComponentStyles() {
      let styles = material_popup$46template.ViewMaterialPopupComponent0._componentStyles;
      if (styles == null) {
        material_popup$46template.ViewMaterialPopupComponent0._componentStyles = styles = material_popup$46template.ViewMaterialPopupComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_popup$46template.styles$MaterialPopupComponent, material_popup$46template.ViewMaterialPopupComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_popup$46template.ViewMaterialPopupComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_TemplateRef_1_7] = null;
    this[_expr_0] = null;
    material_popup$46template.ViewMaterialPopupComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-popup"));
  }).prototype = material_popup$46template.ViewMaterialPopupComponent0.prototype;
  dart.addTypeTests(material_popup$46template.ViewMaterialPopupComponent0);
  dart.addTypeCaches(material_popup$46template.ViewMaterialPopupComponent0);
  dart.setLibraryUri(material_popup$46template.ViewMaterialPopupComponent0, L0);
  dart.setFieldSignature(material_popup$46template.ViewMaterialPopupComponent0, () => ({
    __proto__: dart.getFields(material_popup$46template.ViewMaterialPopupComponent0.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_TemplateRef_1_7]: dart.fieldType(dart.legacy(template_ref.TemplateRef)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_popup$46template.ViewMaterialPopupComponent0, {
    /*material_popup$46template.ViewMaterialPopupComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _expr_1 = dart.privateName(material_popup$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_popup$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_popup$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_popup$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_popup$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_popup$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_popup$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_popup$46template, "_expr_8");
  var _expr_10 = dart.privateName(material_popup$46template, "_expr_10");
  var _expr_11 = dart.privateName(material_popup$46template, "_expr_11");
  var _expr_12 = dart.privateName(material_popup$46template, "_expr_12");
  var _expr_13 = dart.privateName(material_popup$46template, "_expr_13");
  var _el_1 = dart.privateName(material_popup$46template, "_el_1");
  var _el_3 = dart.privateName(material_popup$46template, "_el_3");
  var _handle_focus_6_0 = dart.privateName(material_popup$46template, "_handle_focus_6_0");
  var _handle_focus_24_0 = dart.privateName(material_popup$46template, "_handle_focus_24_0");
  material_popup$46template._ViewMaterialPopupComponent1 = class _ViewMaterialPopupComponent1 extends app_view.AppView$(dart.legacy(material_popup.MaterialPopupComponent)) {
    build() {
      let _text_0 = dom_helpers.createText("\n  ");
      let doc = html.document;
      this[_el_1] = DivElementL().as(doc[$createElement]("div"));
      this.updateChildClass(this[_el_1], "popup-wrapper mixin");
      this.addShimC(this[_el_1]);
      let _text_2 = dom_helpers.appendText(this[_el_1], "\n      ");
      this[_el_3] = dom_helpers.appendDiv(doc, this[_el_1]);
      this.updateChildClass(this[_el_3], "popup");
      this.addShimC(this[_el_3]);
      let _text_4 = dom_helpers.appendText(this[_el_3], "\n          ");
      let _text_5 = dom_helpers.appendText(this[_el_3], "\n          ");
      let _el_6 = dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(_el_6, "focusable-placeholder");
      _el_6.tabIndex = 0;
      this.addShimC(_el_6);
      let _text_7 = dom_helpers.appendText(this[_el_3], "\n          ");
      let _el_8 = dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(_el_8, "material-popup-content content");
      this.addShimC(_el_8);
      let _text_9 = dom_helpers.appendText(_el_8, "\n              ");
      let _el_10 = dom_helpers.appendElement(doc, _el_8, "header");
      this.addShimE(_el_10);
      let _text_11 = dom_helpers.appendText(_el_10, "\n                  ");
      this.project(_el_10, 0);
      let _text_12 = dom_helpers.appendText(_el_10, "\n              ");
      let _text_13 = dom_helpers.appendText(_el_8, "\n              ");
      let _el_14 = dom_helpers.appendDiv(doc, _el_8);
      this.updateChildClass(_el_14, "main");
      this.addShimC(_el_14);
      let _text_15 = dom_helpers.appendText(_el_14, "\n                  ");
      this.project(_el_14, 1);
      let _text_16 = dom_helpers.appendText(_el_14, "\n              ");
      let _text_17 = dom_helpers.appendText(_el_8, "\n              ");
      let _el_18 = dom_helpers.appendElement(doc, _el_8, "footer");
      this.addShimE(_el_18);
      let _text_19 = dom_helpers.appendText(_el_18, "\n                  ");
      this.project(_el_18, 2);
      let _text_20 = dom_helpers.appendText(_el_18, "\n              ");
      let _text_21 = dom_helpers.appendText(_el_8, "\n          ");
      let _text_22 = dom_helpers.appendText(this[_el_3], "\n          ");
      let _text_23 = dom_helpers.appendText(this[_el_3], "\n          ");
      let _el_24 = dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(_el_24, "focusable-placeholder");
      _el_24.tabIndex = 0;
      this.addShimC(_el_24);
      let _text_25 = dom_helpers.appendText(this[_el_3], "\n      ");
      let _text_26 = dom_helpers.appendText(this[_el_1], "\n  ");
      let _text_27 = dom_helpers.createText("\n");
      _el_6[$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_focus_6_0)));
      _el_24[$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_focus_24_0)));
      this.init(JSArrayOfObjectL().of([_text_0, this[_el_1], _text_27]), null);
    }
    detectChangesInternal() {
      let t0, t0$;
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        dom_helpers.setAttribute(this[_el_1], "role", interpolate.interpolateString0(_ctx.role));
      }
      let currVal_0 = _ctx.z;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(this[_el_1], "elevation", (t0 = currVal_0, t0 == null ? null : dart.toString(t0)));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.hasBox;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBinding(this[_el_1], "shadow", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.matchMinSourceWidth;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateClassBinding(this[_el_1], "full-width", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.inkBackground;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        dom_helpers.updateClassBinding(this[_el_1], "ink", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.slide;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        dom_helpers.updateAttribute(this[_el_1], "slide", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.zIndex;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        dom_helpers.updateAttribute(this[_el_1], "z-index", (t0$ = currVal_5, t0$ == null ? null : dart.toString(t0$)));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.transformOrigin;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_el_1].style[$setProperty]("transform-origin", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.showPopup;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        dom_helpers.updateClassBinding(this[_el_1], "visible", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = interpolate.interpolateString0(_ctx.uniqueId);
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        dom_helpers.setProperty(this[_el_1], "id", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_10 = _ctx.minHeight;
      if (dart.test(app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_el_3].style[$setProperty]("min-height", currVal_10 == null ? null : dart.toString(currVal_10) + "px");
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.minWidth;
      if (dart.test(app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_el_3].style[$setProperty]("min-width", currVal_11 == null ? null : dart.toString(currVal_11) + "px");
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.maxHeight;
      if (dart.test(app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_el_3].style[$setProperty]("max-height", currVal_12 == null ? null : dart.toString(currVal_12) + "px");
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.maxWidth;
      if (dart.test(app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        this[_el_3].style[$setProperty]("max-width", currVal_13 == null ? null : dart.toString(currVal_13) + "px");
        this[_expr_13] = currVal_13;
      }
    }
    [_handle_focus_6_0]($36event) {
      let _ctx = this.ctx;
      _ctx.visible = false;
    }
    [_handle_focus_24_0]($36event) {
      let _ctx = this.ctx;
      _ctx.visible = false;
    }
  };
  (material_popup$46template._ViewMaterialPopupComponent1.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    material_popup$46template._ViewMaterialPopupComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_popup$46template._ViewMaterialPopupComponent1.prototype;
  dart.addTypeTests(material_popup$46template._ViewMaterialPopupComponent1);
  dart.addTypeCaches(material_popup$46template._ViewMaterialPopupComponent1);
  dart.setMethodSignature(material_popup$46template._ViewMaterialPopupComponent1, () => ({
    __proto__: dart.getMethods(material_popup$46template._ViewMaterialPopupComponent1.__proto__),
    [_handle_focus_6_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_focus_24_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_popup$46template._ViewMaterialPopupComponent1, L0);
  dart.setFieldSignature(material_popup$46template._ViewMaterialPopupComponent1, () => ({
    __proto__: dart.getFields(material_popup$46template._ViewMaterialPopupComponent1.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_3]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _compView_0 = dart.privateName(material_popup$46template, "_compView_0");
  var _appEl_0 = dart.privateName(material_popup$46template, "_appEl_0");
  var _MaterialPopupComponent_0_8 = dart.privateName(material_popup$46template, "_MaterialPopupComponent_0_8");
  var __PopupHierarchy_0_11 = dart.privateName(material_popup$46template, "__PopupHierarchy_0_11");
  var __PopupRef_0_12 = dart.privateName(material_popup$46template, "__PopupRef_0_12");
  var _PopupHierarchy_0_11 = dart.privateName(material_popup$46template, "_PopupHierarchy_0_11");
  var _PopupRef_0_12 = dart.privateName(material_popup$46template, "_PopupRef_0_12");
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C1;
  var C2;
  var C3;
  material_popup$46template._ViewMaterialPopupComponentHost0 = class _ViewMaterialPopupComponentHost0 extends app_view.AppView$(dart.legacy(material_popup.MaterialPopupComponent)) {
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
      this[_compView_0] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, this.rootEl);
      this[_MaterialPopupComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), null, NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.injectorGet(C1 || CT.C1, this.viewData.parentIndex)), boolL().as(this.injectorGet(C2 || CT.C2, this.viewData.parentIndex)), BoxL().as(this.injectorGet(C3 || CT.C3, this.viewData.parentIndex)), PopupSizeProviderL().as(this.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(this.rootEl)), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), null, NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.injectorGet(C1 || CT.C1, this.viewData.parentIndex)), boolL().as(this.injectorGet(C2 || CT.C2, this.viewData.parentIndex)), BoxL().as(this.injectorGet(C3 || CT.C3, this.viewData.parentIndex)), PopupSizeProviderL().as(this.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(this.rootEl));
      this[_compView_0].create(this[_MaterialPopupComponent_0_8], this.projectedNodes);
      this.init1(this[_appEl_0]);
      return new (ComponentRefOfMaterialPopupComponentL()).new(0, this, this.rootEl, this[_MaterialPopupComponent_0_8]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
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
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_appEl_0].detectChangesInNestedViews();
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
      this[_compView_0].destroyInternalState();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
  };
  (material_popup$46template._ViewMaterialPopupComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupHierarchy_0_11] = null;
    this[__PopupRef_0_12] = null;
    material_popup$46template._ViewMaterialPopupComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_popup$46template._ViewMaterialPopupComponentHost0.prototype;
  dart.addTypeTests(material_popup$46template._ViewMaterialPopupComponentHost0);
  dart.addTypeCaches(material_popup$46template._ViewMaterialPopupComponentHost0);
  dart.setMethodSignature(material_popup$46template._ViewMaterialPopupComponentHost0, () => ({
    __proto__: dart.getMethods(material_popup$46template._ViewMaterialPopupComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setGetterSignature(material_popup$46template._ViewMaterialPopupComponentHost0, () => ({
    __proto__: dart.getGetters(material_popup$46template._ViewMaterialPopupComponentHost0.__proto__),
    [_PopupHierarchy_0_11]: dart.dynamic,
    [_PopupRef_0_12]: dart.dynamic
  }));
  dart.setLibraryUri(material_popup$46template._ViewMaterialPopupComponentHost0, L0);
  dart.setFieldSignature(material_popup$46template._ViewMaterialPopupComponentHost0, () => ({
    __proto__: dart.getFields(material_popup$46template._ViewMaterialPopupComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialPopupComponent_0_8]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
    [__PopupHierarchy_0_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_0_12]: dart.fieldType(dart.dynamic)
  }));
  var C4;
  var C7;
  var C6;
  var C5;
  var C8;
  material_popup$46template.viewFactory_MaterialPopupComponent1 = function viewFactory_MaterialPopupComponent1(parentView, parentIndex) {
    return new material_popup$46template._ViewMaterialPopupComponent1.new(parentView, parentIndex);
  };
  material_popup$46template.viewFactory_MaterialPopupComponentHost0 = function viewFactory_MaterialPopupComponentHost0(parentView, parentIndex) {
    return new material_popup$46template._ViewMaterialPopupComponentHost0.new(parentView, parentIndex);
  };
  material_popup$46template.initReflector = function initReflector() {
    if (dart.test(material_popup$46template._visited)) {
      return;
    }
    material_popup$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialPopupComponentL()), material_popup$46template.MaterialPopupComponentNgFactory);
    reflector.registerDependencies(C4 || CT.C4, C5 || CT.C5);
    reflector.registerDependencies(C8 || CT.C8, C5 || CT.C5);
    angular$46template.initReflector();
    deferred_content_aware$46template.initReflector();
    focus_interface$46template.initReflector();
    alignment$46template.initReflector();
    visibility$46template.initReflector();
    module$46template.initReflector();
    overlay$46template.initReflector();
    zindexer$46template.initReflector();
    module$46template$.initReflector();
    popup$46template.initReflector();
    popup$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    box$46template.initReflector();
    toggle$46template.initReflector();
    async$46template.initReflector();
    angular_2$46template.initReflector();
    disposer$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.copyProperties(material_popup$46template, {
    get MaterialPopupComponentNgFactory() {
      return material_popup$46template._MaterialPopupComponentNgFactory;
    }
  });
  var C10;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C9;
  var C11;
  dart.defineLazy(material_popup$46template, {
    /*material_popup$46template.styles$MaterialPopupComponent*/get styles$MaterialPopupComponent() {
      return [material_popup$46scss$46css$46shim.styles];
    },
    /*material_popup$46template._MaterialPopupComponentNgFactory*/get _MaterialPopupComponentNgFactory() {
      return C9 || CT.C9;
    },
    /*material_popup$46template.styles$MaterialPopupComponentHost*/get styles$MaterialPopupComponentHost() {
      return C11 || CT.C11;
    },
    /*material_popup$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_popup/material_popup.template", {
    "package:angular_components/material_popup/material_popup.template.dart": material_popup$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_popup.template.dart"],"names":[],"mappings":"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","file":"material_popup.template.ddc.js"}');
  // Exports:
  return {
    material_popup__material_popup$46template: material_popup$46template
  };
}));

//# sourceMappingURL=material_popup.template.ddc.js.map
