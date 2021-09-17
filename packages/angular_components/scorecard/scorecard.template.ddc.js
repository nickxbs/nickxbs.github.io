define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/scorecard/scorecard', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular/angular.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/utils/color/color.template', 'packages/angular_components/utils/color/palette.template', 'packages/angular_components/scorecard/scorecard.scss.css.shim'], (function load__packages__angular_components__scorecard__scorecard_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular__src__runtime__interpolate, packages__angular_components__scorecard__scorecard, packages__angular_components__material_ripple__material_ripple$46template, packages__angular_components__material_ripple__material_ripple, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular__angular$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__browser__events__events$46template, packages__angular_components__utils__color__color$46template, packages__angular_components__utils__color__palette$46template, packages__angular_components__scorecard__scorecard$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const scorecard = packages__angular_components__scorecard__scorecard.scorecard__scorecard;
  const material_ripple$46template = packages__angular_components__material_ripple__material_ripple$46template.material_ripple__material_ripple$46template;
  const material_ripple = packages__angular_components__material_ripple__material_ripple.material_ripple__material_ripple;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  const color$46template = packages__angular_components__utils__color__color$46template.utils__color__color$46template;
  const palette$46template = packages__angular_components__utils__color__palette$46template.utils__color__palette$46template;
  const scorecard$46scss$46css$46shim = packages__angular_components__scorecard__scorecard$46scss$46css$46shim.scorecard__scorecard$46scss$46css$46shim;
  var scorecard$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var $setProperty = dartx.setProperty;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var ScorecardComponentL = () => (ScorecardComponentL = dart.constFn(dart.legacy(scorecard.ScorecardComponent)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var VoidToScorecardComponentL = () => (VoidToScorecardComponentL = dart.constFn(dart.fnType(ScorecardComponentL(), [])))();
  var ComponentRefOfScorecardComponentL = () => (ComponentRefOfScorecardComponentL = dart.constFn(component_factory.ComponentRef$(ScorecardComponentL())))();
  var ComponentFactoryOfScorecardComponentL = () => (ComponentFactoryOfScorecardComponentL = dart.constFn(component_factory.ComponentFactory$(ScorecardComponentL())))();
  var AppViewOfScorecardComponentL = () => (AppViewOfScorecardComponentL = dart.constFn(app_view.AppView$(ScorecardComponentL())))();
  var AppViewLOfScorecardComponentL = () => (AppViewLOfScorecardComponentL = dart.constFn(dart.legacy(AppViewOfScorecardComponentL())))();
  var AppViewLAndintLToAppViewLOfScorecardComponentL = () => (AppViewLAndintLToAppViewLOfScorecardComponentL = dart.constFn(dart.fnType(AppViewLOfScorecardComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/scorecard/scorecard.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(scorecard$46template.viewFactory_ScorecardComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(scorecard$46template.viewFactory_ScorecardComponent2, AppViewLAndintLToAppViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(scorecard$46template.viewFactory_ScorecardComponent3, AppViewLAndintLToAppViewLOfvoid());
    },
    get C3() {
      return C3 = dart.fn(scorecard$46template.viewFactory_ScorecardComponent5, AppViewLAndintLToAppViewLOfvoid());
    },
    get C4() {
      return C4 = dart.fn(scorecard$46template.viewFactory_ScorecardComponent4, AppViewLAndintLToAppViewLOfvoid());
    },
    get C6() {
      return C6 = dart.fn(scorecard$46template.viewFactory_ScorecardComponentHost0, AppViewLAndintLToAppViewLOfScorecardComponentL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ComponentFactoryOfScorecardComponentL().prototype,
        [ComponentFactory__viewFactory]: C6 || CT.C6,
        [ComponentFactory_selector]: "acx-scorecard"
      });
    },
    get C7() {
      return C7 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _textBinding_2 = dart.privateName(scorecard$46template, "_textBinding_2");
  var _textBinding_4 = dart.privateName(scorecard$46template, "_textBinding_4");
  var _appEl_0 = dart.privateName(scorecard$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(scorecard$46template, "_NgIf_0_9");
  var _appEl_5 = dart.privateName(scorecard$46template, "_appEl_5");
  var _NgIf_5_9 = dart.privateName(scorecard$46template, "_NgIf_5_9");
  var _appEl_7 = dart.privateName(scorecard$46template, "_appEl_7");
  var _NgIf_7_9 = dart.privateName(scorecard$46template, "_NgIf_7_9");
  var _appEl_9 = dart.privateName(scorecard$46template, "_appEl_9");
  var _NgIf_9_9 = dart.privateName(scorecard$46template, "_NgIf_9_9");
  var _expr_1 = dart.privateName(scorecard$46template, "_expr_1");
  var _expr_5 = dart.privateName(scorecard$46template, "_expr_5");
  var _expr_6 = dart.privateName(scorecard$46template, "_expr_6");
  var _expr_7 = dart.privateName(scorecard$46template, "_expr_7");
  var _expr_8 = dart.privateName(scorecard$46template, "_expr_8");
  var _expr_9 = dart.privateName(scorecard$46template, "_expr_9");
  var _expr_10 = dart.privateName(scorecard$46template, "_expr_10");
  var _expr_11 = dart.privateName(scorecard$46template, "_expr_11");
  var _expr_12 = dart.privateName(scorecard$46template, "_expr_12");
  var _el_3 = dart.privateName(scorecard$46template, "_el_3");
  var C0;
  var C1;
  var C2;
  var C3;
  scorecard$46template.ViewScorecardComponent0 = class ViewScorecardComponent0 extends app_view.AppView$(dart.legacy(scorecard.ScorecardComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/scorecard/scorecard.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let doc = html.document;
      let _el_1 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_1, "label-name");
      this.addShimC(_el_1);
      _el_1[$append](this[_textBinding_2].element);
      this.project(_el_1, 0);
      this[_el_3] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_3], "label-value");
      this.addShimC(this[_el_3]);
      this[_el_3][$append](this[_textBinding_4].element);
      this.project(this[_el_3], 1);
      let _anchor_5 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_5] = new view_container.ViewContainer.new(5, null, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C1 || CT.C1);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _text_6 = dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_7 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_7] = new view_container.ViewContainer.new(7, null, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], C2 || CT.C2);
      this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_9 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_9] = new view_container.ViewContainer.new(9, null, this, _anchor_9);
      let _TemplateRef_9_8 = new template_ref.TemplateRef.new(this[_appEl_9], C3 || CT.C3);
      this[_NgIf_9_9] = new ng_if.NgIf.new(this[_appEl_9], _TemplateRef_9_8);
      let _text_10 = dom_helpers.appendText(parentRenderNode, "\n");
      this.project(parentRenderNode, 3);
      this.init0();
      _rootEl[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'keydown')));
      _rootEl[$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(_ctx, 'resetOutline')));
      _rootEl[$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(_ctx, 'onMouseInteraction')));
      _rootEl[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'onFocus')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeypress')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.selectable;
      this[_NgIf_5_9].ngIf = _ctx.suggestionBefore != null;
      this[_NgIf_7_9].ngIf = _ctx.description != null;
      this[_NgIf_9_9].ngIf = _ctx.suggestionAfter != null;
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_9].detectChangesInNestedViews();
      this[_textBinding_2].updateText(interpolate.interpolateString0(_ctx.label));
      let currVal_1 = _ctx.tooltip;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.setProperty(this[_el_3], "title", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_textBinding_4].updateText(interpolate.interpolateString0(_ctx.value));
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_9].destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let t0;
      let _ctx = this.ctx;
      let currVal_5 = _ctx.isChangePositive;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "is-change-positive", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.isChangeNegative;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "is-change-negative", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.selectable;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "selectable", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.hostTabIndex;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        dom_helpers.updateAttribute(this.rootEl, "tabindex", (t0 = currVal_8, t0 == null ? null : dart.toString(t0)));
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.hostRole;
      if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        dom_helpers.updateAttribute(this.rootEl, "role", currVal_9);
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.backgroundStyle;
      if (dart.test(app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this.rootEl.style[$setProperty]("background", currVal_10);
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.extraBig;
      if (dart.test(app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "extra-big", currVal_11);
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.selected;
      if (dart.test(app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "selected", currVal_12);
        this[_expr_12] = currVal_12;
      }
    }
    initComponentStyles() {
      let styles = scorecard$46template.ViewScorecardComponent0._componentStyles;
      if (styles == null) {
        scorecard$46template.ViewScorecardComponent0._componentStyles = styles = scorecard$46template.ViewScorecardComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(scorecard$46template.styles$ScorecardComponent, scorecard$46template.ViewScorecardComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (scorecard$46template.ViewScorecardComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    this[_textBinding_4] = new text_binding.TextBinding.new();
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_9] = null;
    this[_NgIf_9_9] = null;
    this[_expr_1] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_el_3] = null;
    scorecard$46template.ViewScorecardComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("acx-scorecard"));
    this.updateChildClassNonHtml(this.rootEl, "themeable");
  }).prototype = scorecard$46template.ViewScorecardComponent0.prototype;
  dart.addTypeTests(scorecard$46template.ViewScorecardComponent0);
  dart.addTypeCaches(scorecard$46template.ViewScorecardComponent0);
  dart.setLibraryUri(scorecard$46template.ViewScorecardComponent0, L0);
  dart.setFieldSignature(scorecard$46template.ViewScorecardComponent0, () => ({
    __proto__: dart.getFields(scorecard$46template.ViewScorecardComponent0.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_4]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_7]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_7_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_9]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_9_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_6]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_7]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_12]: dart.fieldType(dart.legacy(core.bool)),
    [_el_3]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(scorecard$46template.ViewScorecardComponent0, {
    /*scorecard$46template.ViewScorecardComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(scorecard$46template, "_compView_0");
  var _MaterialRippleComponent_0_5 = dart.privateName(scorecard$46template, "_MaterialRippleComponent_0_5");
  scorecard$46template._ViewScorecardComponent1 = class _ViewScorecardComponent1 extends app_view.AppView$(dart.legacy(scorecard.ScorecardComponent)) {
    build() {
      this[_compView_0] = new material_ripple$46template.ViewMaterialRippleComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.addShimC(_el_0);
      this[_MaterialRippleComponent_0_5] = new material_ripple.MaterialRippleComponent.new(_el_0);
      this[_compView_0].create0(this[_MaterialRippleComponent_0_5]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialRippleComponent_0_5].ngOnDestroy();
    }
  };
  (scorecard$46template._ViewScorecardComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialRippleComponent_0_5] = null;
    scorecard$46template._ViewScorecardComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = scorecard$46template._ViewScorecardComponent1.prototype;
  dart.addTypeTests(scorecard$46template._ViewScorecardComponent1);
  dart.addTypeCaches(scorecard$46template._ViewScorecardComponent1);
  dart.setLibraryUri(scorecard$46template._ViewScorecardComponent1, L0);
  dart.setFieldSignature(scorecard$46template._ViewScorecardComponent1, () => ({
    __proto__: dart.getFields(scorecard$46template._ViewScorecardComponent1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_ripple$46template.ViewMaterialRippleComponent0)),
    [_MaterialRippleComponent_0_5]: dart.fieldType(dart.legacy(material_ripple.MaterialRippleComponent))
  }));
  var _textBinding_1 = dart.privateName(scorecard$46template, "_textBinding_1");
  scorecard$46template._ViewScorecardComponent2 = class _ViewScorecardComponent2 extends app_view.AppView$(dart.legacy(scorecard.ScorecardComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_0), "suggestion before");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.suggestionBefore));
    }
  };
  (scorecard$46template._ViewScorecardComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    scorecard$46template._ViewScorecardComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = scorecard$46template._ViewScorecardComponent2.prototype;
  dart.addTypeTests(scorecard$46template._ViewScorecardComponent2);
  dart.addTypeCaches(scorecard$46template._ViewScorecardComponent2);
  dart.setLibraryUri(scorecard$46template._ViewScorecardComponent2, L0);
  dart.setFieldSignature(scorecard$46template._ViewScorecardComponent2, () => ({
    __proto__: dart.getFields(scorecard$46template._ViewScorecardComponent2.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _textBinding_3 = dart.privateName(scorecard$46template, "_textBinding_3");
  var _appEl_1 = dart.privateName(scorecard$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(scorecard$46template, "_NgIf_1_9");
  var C4;
  scorecard$46template._ViewScorecardComponent3 = class _ViewScorecardComponent3 extends app_view.AppView$(dart.legacy(scorecard.ScorecardComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_0), "description");
      this.addShimE(_el_0);
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C4 || CT.C4);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = dom_helpers.appendText(_el_0, " ");
      _el_0[$append](this[_textBinding_3].element);
      let _text_4 = dom_helpers.appendText(_el_0, "  ");
      this.project(_el_0, 2);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = dart.test(_ctx.changeGlyph) && _ctx.description !== "" && !dart.test(_ctx.isChangeNeutral);
      this[_appEl_1].detectChangesInNestedViews();
      this[_textBinding_3].updateText(interpolate.interpolateString0(_ctx.description));
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
  };
  (scorecard$46template._ViewScorecardComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_3] = new text_binding.TextBinding.new();
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    scorecard$46template._ViewScorecardComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = scorecard$46template._ViewScorecardComponent3.prototype;
  dart.addTypeTests(scorecard$46template._ViewScorecardComponent3);
  dart.addTypeCaches(scorecard$46template._ViewScorecardComponent3);
  dart.setLibraryUri(scorecard$46template._ViewScorecardComponent3, L0);
  dart.setFieldSignature(scorecard$46template._ViewScorecardComponent3, () => ({
    __proto__: dart.getFields(scorecard$46template._ViewScorecardComponent3.__proto__),
    [_textBinding_3]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  var _MaterialIconComponent_0_5 = dart.privateName(scorecard$46template, "_MaterialIconComponent_0_5");
  var _expr_0 = dart.privateName(scorecard$46template, "_expr_0");
  scorecard$46template._ViewScorecardComponent4 = class _ViewScorecardComponent4 extends app_view.AppView$(dart.legacy(scorecard.ScorecardComponent)) {
    build() {
      this[_compView_0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(_el_0, "change-glyph");
      dom_helpers.setAttribute(_el_0, "size", "small");
      this.addShimC(_el_0);
      this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(_el_0);
      this[_compView_0].create0(this[_MaterialIconComponent_0_5]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.changeGlyphIcon;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialIconComponent_0_5].icon = currVal_0;
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
    }
  };
  (scorecard$46template._ViewScorecardComponent4.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0] = null;
    scorecard$46template._ViewScorecardComponent4.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = scorecard$46template._ViewScorecardComponent4.prototype;
  dart.addTypeTests(scorecard$46template._ViewScorecardComponent4);
  dart.addTypeCaches(scorecard$46template._ViewScorecardComponent4);
  dart.setLibraryUri(scorecard$46template._ViewScorecardComponent4, L0);
  dart.setFieldSignature(scorecard$46template._ViewScorecardComponent4, () => ({
    __proto__: dart.getFields(scorecard$46template._ViewScorecardComponent4.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_0_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  scorecard$46template._ViewScorecardComponent5 = class _ViewScorecardComponent5 extends app_view.AppView$(dart.legacy(scorecard.ScorecardComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_0), "suggestion after");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.suggestionAfter));
    }
  };
  (scorecard$46template._ViewScorecardComponent5.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    scorecard$46template._ViewScorecardComponent5.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = scorecard$46template._ViewScorecardComponent5.prototype;
  dart.addTypeTests(scorecard$46template._ViewScorecardComponent5);
  dart.addTypeCaches(scorecard$46template._ViewScorecardComponent5);
  dart.setLibraryUri(scorecard$46template._ViewScorecardComponent5, L0);
  dart.setFieldSignature(scorecard$46template._ViewScorecardComponent5, () => ({
    __proto__: dart.getFields(scorecard$46template._ViewScorecardComponent5.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _ScorecardComponent_0_5 = dart.privateName(scorecard$46template, "_ScorecardComponent_0_5");
  scorecard$46template._ViewScorecardComponentHost0 = class _ViewScorecardComponentHost0 extends app_view.AppView$(dart.legacy(scorecard.ScorecardComponent)) {
    build() {
      this[_compView_0] = new scorecard$46template.ViewScorecardComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ScorecardComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ScorecardComponentL(), dart.wrapType(ScorecardComponentL()), dart.fn(() => new scorecard.ScorecardComponent.new(this[_compView_0], this.rootEl, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex))), VoidToScorecardComponentL())) : new scorecard.ScorecardComponent.new(this[_compView_0], this.rootEl, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)));
      this[_compView_0].create(this[_ScorecardComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfScorecardComponentL()).new(0, this, this.rootEl, this[_ScorecardComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (scorecard$46template._ViewScorecardComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ScorecardComponent_0_5] = null;
    scorecard$46template._ViewScorecardComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = scorecard$46template._ViewScorecardComponentHost0.prototype;
  dart.addTypeTests(scorecard$46template._ViewScorecardComponentHost0);
  dart.addTypeCaches(scorecard$46template._ViewScorecardComponentHost0);
  dart.setLibraryUri(scorecard$46template._ViewScorecardComponentHost0, L0);
  dart.setFieldSignature(scorecard$46template._ViewScorecardComponentHost0, () => ({
    __proto__: dart.getFields(scorecard$46template._ViewScorecardComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(scorecard$46template.ViewScorecardComponent0)),
    [_ScorecardComponent_0_5]: dart.fieldType(dart.legacy(scorecard.ScorecardComponent))
  }));
  scorecard$46template.viewFactory_ScorecardComponent1 = function viewFactory_ScorecardComponent1(parentView, parentIndex) {
    return new scorecard$46template._ViewScorecardComponent1.new(parentView, parentIndex);
  };
  scorecard$46template.viewFactory_ScorecardComponent2 = function viewFactory_ScorecardComponent2(parentView, parentIndex) {
    return new scorecard$46template._ViewScorecardComponent2.new(parentView, parentIndex);
  };
  scorecard$46template.viewFactory_ScorecardComponent3 = function viewFactory_ScorecardComponent3(parentView, parentIndex) {
    return new scorecard$46template._ViewScorecardComponent3.new(parentView, parentIndex);
  };
  scorecard$46template.viewFactory_ScorecardComponent4 = function viewFactory_ScorecardComponent4(parentView, parentIndex) {
    return new scorecard$46template._ViewScorecardComponent4.new(parentView, parentIndex);
  };
  scorecard$46template.viewFactory_ScorecardComponent5 = function viewFactory_ScorecardComponent5(parentView, parentIndex) {
    return new scorecard$46template._ViewScorecardComponent5.new(parentView, parentIndex);
  };
  scorecard$46template.viewFactory_ScorecardComponentHost0 = function viewFactory_ScorecardComponentHost0(parentView, parentIndex) {
    return new scorecard$46template._ViewScorecardComponentHost0.new(parentView, parentIndex);
  };
  scorecard$46template.initReflector = function initReflector() {
    if (dart.test(scorecard$46template._visited)) {
      return;
    }
    scorecard$46template._visited = true;
    reflector.registerComponent(dart.wrapType(ScorecardComponentL()), scorecard$46template.ScorecardComponentNgFactory);
    angular$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    material_icon$46template.initReflector();
    material_ripple$46template.initReflector();
    dom_service$46template.initReflector();
    events$46template.initReflector();
    color$46template.initReflector();
    palette$46template.initReflector();
  };
  dart.copyProperties(scorecard$46template, {
    get ScorecardComponentNgFactory() {
      return scorecard$46template._ScorecardComponentNgFactory;
    }
  });
  var C6;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C5;
  var C7;
  dart.defineLazy(scorecard$46template, {
    /*scorecard$46template.styles$ScorecardComponent*/get styles$ScorecardComponent() {
      return [scorecard$46scss$46css$46shim.styles];
    },
    /*scorecard$46template._ScorecardComponentNgFactory*/get _ScorecardComponentNgFactory() {
      return C5 || CT.C5;
    },
    /*scorecard$46template.styles$ScorecardComponentHost*/get styles$ScorecardComponentHost() {
      return C7 || CT.C7;
    },
    /*scorecard$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/scorecard/scorecard.template", {
    "package:angular_components/scorecard/scorecard.template.dart": scorecard$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scorecard.template.dart"],"names":[],"mappings":"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","file":"scorecard.template.ddc.js"}');
  // Exports:
  return {
    scorecard__scorecard$46template: scorecard$46template
  };
}));

//# sourceMappingURL=scorecard.template.ddc.js.map
