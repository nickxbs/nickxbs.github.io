define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/scorecard/scorecard_bar', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/scorecard/scoreboard', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/scorecard/scorecard', 'packages/angular/angular.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template', 'packages/angular_components/utils/color/palette.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/scorecard/scorecard.template', 'packages/angular_components/scorecard/scorecard_bar.template', 'packages/angular_components/scorecard/scoreboard.scss.css.shim'], (function load__packages__angular_components__scorecard__scoreboard_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__scorecard__scorecard_bar, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__scorecard__scoreboard, packages__angular_components__material_button__material_button$46template, packages__angular_components__theme__dark_theme, packages__angular_components__material_button__material_button, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular_components__button_decorator__button_decorator, packages__angular_components__interfaces__has_disabled, packages__angular_components__scorecard__scorecard, packages__angular__angular$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__utils__browser__dom_service__angular_2$46template, packages__angular_components__utils__color__palette$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__scorecard__scorecard$46template, packages__angular_components__scorecard__scorecard_bar$46template, packages__angular_components__scorecard__scoreboard$46scss$46css$46shim) {
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
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const scorecard_bar = packages__angular_components__scorecard__scorecard_bar.scorecard__scorecard_bar;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const scoreboard = packages__angular_components__scorecard__scoreboard.scorecard__scoreboard;
  const material_button$46template = packages__angular_components__material_button__material_button$46template.material_button__material_button$46template;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const scorecard = packages__angular_components__scorecard__scorecard.scorecard__scorecard;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const angular_2$46template = packages__angular_components__utils__browser__dom_service__angular_2$46template.utils__browser__dom_service__angular_2$46template;
  const palette$46template = packages__angular_components__utils__color__palette$46template.utils__color__palette$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const scorecard$46template = packages__angular_components__scorecard__scorecard$46template.scorecard__scorecard$46template;
  const scorecard_bar$46template = packages__angular_components__scorecard__scorecard_bar$46template.scorecard__scorecard_bar$46template;
  const scoreboard$46scss$46css$46shim = packages__angular_components__scorecard__scoreboard$46scss$46css$46shim.scorecard__scoreboard$46scss$46css$46shim;
  var scoreboard$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var ScorecardBarDirectiveL = () => (ScorecardBarDirectiveL = dart.constFn(dart.legacy(scorecard_bar.ScorecardBarDirective)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToScorecardBarDirectiveL = () => (VoidToScorecardBarDirectiveL = dart.constFn(dart.fnType(ScorecardBarDirectiveL(), [])))();
  var AcxDarkThemeL = () => (AcxDarkThemeL = dart.constFn(dart.legacy(dark_theme.AcxDarkTheme)))();
  var VoidToAcxDarkThemeL = () => (VoidToAcxDarkThemeL = dart.constFn(dart.fnType(AcxDarkThemeL(), [])))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var MaterialButtonComponentL = () => (MaterialButtonComponentL = dart.constFn(dart.legacy(material_button.MaterialButtonComponent)))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ScoreboardComponentL = () => (ScoreboardComponentL = dart.constFn(dart.legacy(scoreboard.ScoreboardComponent)))();
  var VoidToScoreboardComponentL = () => (VoidToScoreboardComponentL = dart.constFn(dart.fnType(ScoreboardComponentL(), [])))();
  var ScorecardComponentL = () => (ScorecardComponentL = dart.constFn(dart.legacy(scorecard.ScorecardComponent)))();
  var JSArrayOfScorecardComponentL = () => (JSArrayOfScorecardComponentL = dart.constFn(_interceptors.JSArray$(ScorecardComponentL())))();
  var ComponentRefOfScoreboardComponentL = () => (ComponentRefOfScoreboardComponentL = dart.constFn(component_factory.ComponentRef$(ScoreboardComponentL())))();
  var ComponentFactoryOfScoreboardComponentL = () => (ComponentFactoryOfScoreboardComponentL = dart.constFn(component_factory.ComponentFactory$(ScoreboardComponentL())))();
  var AppViewOfScoreboardComponentL = () => (AppViewOfScoreboardComponentL = dart.constFn(app_view.AppView$(ScoreboardComponentL())))();
  var AppViewLOfScoreboardComponentL = () => (AppViewLOfScoreboardComponentL = dart.constFn(dart.legacy(AppViewOfScoreboardComponentL())))();
  var AppViewLAndintLToAppViewLOfScoreboardComponentL = () => (AppViewLAndintLToAppViewLOfScoreboardComponentL = dart.constFn(dart.fnType(AppViewLOfScoreboardComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/scorecard/scoreboard.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(scoreboard$46template.viewFactory_ScoreboardComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "isRtl"
      });
    },
    get C2() {
      return C2 = dart.fn(scoreboard$46template.viewFactory_ScoreboardComponent2, AppViewLAndintLToAppViewLOfvoid());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C5() {
      return C5 = dart.fn(scoreboard$46template.viewFactory_ScoreboardComponentHost0, AppViewLAndintLToAppViewLOfScoreboardComponentL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ComponentFactoryOfScoreboardComponentL().prototype,
        [ComponentFactory__viewFactory]: C5 || CT.C5,
        [ComponentFactory_selector]: "acx-scoreboard"
      });
    },
    get C6() {
      return C6 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _appEl_1 = dart.privateName(scoreboard$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(scoreboard$46template, "_NgIf_1_9");
  var _ScorecardBarDirective_2_5 = dart.privateName(scoreboard$46template, "_ScorecardBarDirective_2_5");
  var _appEl_3 = dart.privateName(scoreboard$46template, "_appEl_3");
  var _NgIf_3_9 = dart.privateName(scoreboard$46template, "_NgIf_3_9");
  var _expr_0 = dart.privateName(scoreboard$46template, "_expr_0");
  var _expr_1 = dart.privateName(scoreboard$46template, "_expr_1");
  var _expr_3 = dart.privateName(scoreboard$46template, "_expr_3");
  var _el_0 = dart.privateName(scoreboard$46template, "_el_0");
  var C0;
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C1;
  var C2;
  scoreboard$46template.ViewScoreboardComponent0 = class ViewScoreboardComponent0 extends app_view.AppView$(dart.legacy(scoreboard.ScoreboardComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/scorecard/scoreboard.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "acx-scoreboard");
      this.addShimC(this[_el_0]);
      let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_2, "scorecard-bar");
      dom_helpers.setAttribute(_el_2, "scorecardBar", "");
      this.addShimC(_el_2);
      this[_ScorecardBarDirective_2_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ScorecardBarDirectiveL(), dart.wrapType(ScorecardBarDirectiveL()), dart.fn(() => new scorecard_bar.ScorecardBarDirective.new(DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), _el_2, boolL().as(this.parentView.injectorGetOptional(C1 || CT.C1, this.viewData.parentIndex))), VoidToScorecardBarDirectiveL())) : new scorecard_bar.ScorecardBarDirective.new(DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), _el_2, boolL().as(this.parentView.injectorGetOptional(C1 || CT.C1, this.viewData.parentIndex)));
      this.project(_el_2, 0);
      let _anchor_3 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_3] = new view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C2 || CT.C2);
      this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      _ctx.scorecardBar = this[_ScorecardBarDirective_2_5];
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      this[_NgIf_1_9].ngIf = _ctx.isScrollable;
      let currVal_3 = _ctx.isVertical;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_ScorecardBarDirective_2_5].isVertical = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ScorecardBarDirective_2_5].ngOnInit();
      }
      this[_NgIf_3_9].ngIf = _ctx.isScrollable;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      let currVal_0 = !dart.test(_ctx.isVertical);
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(this[_el_0], "acx-scoreboard-horizontal", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.isVertical;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBinding(this[_el_0], "acx-scoreboard-vertical", currVal_1);
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_ScorecardBarDirective_2_5].ngAfterViewChecked();
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_ScorecardBarDirective_2_5].ngOnDestroy();
    }
    initComponentStyles() {
      let styles = scoreboard$46template.ViewScoreboardComponent0._componentStyles;
      if (styles == null) {
        scoreboard$46template.ViewScoreboardComponent0._componentStyles = styles = scoreboard$46template.ViewScoreboardComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(scoreboard$46template.styles$ScoreboardComponent, scoreboard$46template.ViewScoreboardComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (scoreboard$46template.ViewScoreboardComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_ScorecardBarDirective_2_5] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    this[_el_0] = null;
    scoreboard$46template.ViewScoreboardComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("acx-scoreboard"));
  }).prototype = scoreboard$46template.ViewScoreboardComponent0.prototype;
  dart.addTypeTests(scoreboard$46template.ViewScoreboardComponent0);
  dart.addTypeCaches(scoreboard$46template.ViewScoreboardComponent0);
  dart.setLibraryUri(scoreboard$46template.ViewScoreboardComponent0, L0);
  dart.setFieldSignature(scoreboard$46template.ViewScoreboardComponent0, () => ({
    __proto__: dart.getFields(scoreboard$46template.ViewScoreboardComponent0.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_ScorecardBarDirective_2_5]: dart.fieldType(dart.legacy(scorecard_bar.ScorecardBarDirective)),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(scoreboard$46template.ViewScoreboardComponent0, {
    /*scoreboard$46template.ViewScoreboardComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(scoreboard$46template, "_compView_0");
  var _AcxDarkTheme_0_5 = dart.privateName(scoreboard$46template, "_AcxDarkTheme_0_5");
  var _MaterialButtonComponent_0_6 = dart.privateName(scoreboard$46template, "_MaterialButtonComponent_0_6");
  var _compView_1 = dart.privateName(scoreboard$46template, "_compView_1");
  var _MaterialIconComponent_1_5 = dart.privateName(scoreboard$46template, "_MaterialIconComponent_1_5");
  var _expr_2 = dart.privateName(scoreboard$46template, "_expr_2");
  var _el_1 = dart.privateName(scoreboard$46template, "_el_1");
  var C3;
  scoreboard$46template._ViewScoreboardComponent1 = class _ViewScoreboardComponent1 extends app_view.AppView$(dart.legacy(scoreboard.ScoreboardComponent)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "scroll-button scroll-back-button");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_AcxDarkTheme_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.injectorGetOptional(C3 || CT.C3, this.parentView.viewData.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.injectorGetOptional(C3 || CT.C3, this.parentView.viewData.parentIndex)));
      this[_MaterialButtonComponent_0_6] = new material_button.MaterialButtonComponent.new(HtmlElementL().as(this[_el_0]), AcxDarkThemeL().as(this[_AcxDarkTheme_0_5]), this[_compView_0], null);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_1]));
      this[_compView_1].create0(this[_MaterialIconComponent_1_5]);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], JSArrayOfObjectL().of([JSArrayOfElementL().of([this[_el_1]])]));
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'scrollBack')));
      this.init(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_0_5];
        }
        if (token === dart.wrapType(MaterialButtonComponentL()) || token === dart.wrapType(ButtonDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialButtonComponent_0_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      changed = false;
      let currVal_2 = _ctx.backIconType;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialIconComponent_1_5].icon = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      let currVal_0 = _ctx.atScorecardBarStart;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "hide", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      if (firstCheck) {
        if (scoreboard.ScoreboardComponent.scrollScorecardBarBack != null) {
          dom_helpers.updateAttribute(this[_el_1], "aria-label", scoreboard.ScoreboardComponent.scrollScorecardBarBack);
        }
      }
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
    }
  };
  (scoreboard$46template._ViewScoreboardComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    scoreboard$46template._ViewScoreboardComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = scoreboard$46template._ViewScoreboardComponent1.prototype;
  dart.addTypeTests(scoreboard$46template._ViewScoreboardComponent1);
  dart.addTypeCaches(scoreboard$46template._ViewScoreboardComponent1);
  dart.setMethodSignature(scoreboard$46template._ViewScoreboardComponent1, () => ({
    __proto__: dart.getMethods(scoreboard$46template._ViewScoreboardComponent1.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(scoreboard$46template._ViewScoreboardComponent1, L0);
  dart.setFieldSignature(scoreboard$46template._ViewScoreboardComponent1, () => ({
    __proto__: dart.getFields(scoreboard$46template._ViewScoreboardComponent1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_button$46template.ViewMaterialButtonComponent0)),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    [_compView_1]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_1_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element)),
    [_el_1]: dart.fieldType(dart.legacy(html.Element))
  }));
  scoreboard$46template._ViewScoreboardComponent2 = class _ViewScoreboardComponent2 extends app_view.AppView$(dart.legacy(scoreboard.ScoreboardComponent)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "scroll-button scroll-forward-button");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_AcxDarkTheme_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.injectorGetOptional(C3 || CT.C3, this.parentView.viewData.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.parentView.injectorGetOptional(C3 || CT.C3, this.parentView.viewData.parentIndex)));
      this[_MaterialButtonComponent_0_6] = new material_button.MaterialButtonComponent.new(HtmlElementL().as(this[_el_0]), AcxDarkThemeL().as(this[_AcxDarkTheme_0_5]), this[_compView_0], null);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_1]));
      this[_compView_1].create0(this[_MaterialIconComponent_1_5]);
      this[_compView_0].create(this[_MaterialButtonComponent_0_6], JSArrayOfObjectL().of([JSArrayOfElementL().of([this[_el_1]])]));
      let subscription_0 = this[_MaterialButtonComponent_0_6].trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'scrollForward')));
      this.init(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_0_5];
        }
        if (token === dart.wrapType(MaterialButtonComponentL()) || token === dart.wrapType(ButtonDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialButtonComponent_0_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      changed = false;
      let currVal_2 = _ctx.forwardIconType;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialIconComponent_1_5].icon = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      let currVal_0 = _ctx.atScorecardBarEnd;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "hide", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      if (firstCheck) {
        if (scoreboard.ScoreboardComponent.scrollScorecardBarForward != null) {
          dom_helpers.updateAttribute(this[_el_1], "aria-label", scoreboard.ScoreboardComponent.scrollScorecardBarForward);
        }
      }
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
    }
  };
  (scoreboard$46template._ViewScoreboardComponent2.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialButtonComponent_0_6] = null;
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    scoreboard$46template._ViewScoreboardComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = scoreboard$46template._ViewScoreboardComponent2.prototype;
  dart.addTypeTests(scoreboard$46template._ViewScoreboardComponent2);
  dart.addTypeCaches(scoreboard$46template._ViewScoreboardComponent2);
  dart.setMethodSignature(scoreboard$46template._ViewScoreboardComponent2, () => ({
    __proto__: dart.getMethods(scoreboard$46template._ViewScoreboardComponent2.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(scoreboard$46template._ViewScoreboardComponent2, L0);
  dart.setFieldSignature(scoreboard$46template._ViewScoreboardComponent2, () => ({
    __proto__: dart.getFields(scoreboard$46template._ViewScoreboardComponent2.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_button$46template.ViewMaterialButtonComponent0)),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_6]: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    [_compView_1]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_1_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element)),
    [_el_1]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _ScoreboardComponent_0_5 = dart.privateName(scoreboard$46template, "_ScoreboardComponent_0_5");
  scoreboard$46template._ViewScoreboardComponentHost0 = class _ViewScoreboardComponentHost0 extends app_view.AppView$(dart.legacy(scoreboard.ScoreboardComponent)) {
    build() {
      this[_compView_0] = new scoreboard$46template.ViewScoreboardComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ScoreboardComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ScoreboardComponentL(), dart.wrapType(ScoreboardComponentL()), dart.fn(() => new scoreboard.ScoreboardComponent.new(null, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), this[_compView_0]), VoidToScoreboardComponentL())) : new scoreboard.ScoreboardComponent.new(null, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), this[_compView_0]);
      this[_ScoreboardComponent_0_5].scoreCards = JSArrayOfScorecardComponentL().of([]);
      this[_compView_0].create(this[_ScoreboardComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfScoreboardComponentL()).new(0, this, this.rootEl, this[_ScoreboardComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ScoreboardComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_ScoreboardComponent_0_5].ngOnDestroy();
    }
  };
  (scoreboard$46template._ViewScoreboardComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ScoreboardComponent_0_5] = null;
    scoreboard$46template._ViewScoreboardComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = scoreboard$46template._ViewScoreboardComponentHost0.prototype;
  dart.addTypeTests(scoreboard$46template._ViewScoreboardComponentHost0);
  dart.addTypeCaches(scoreboard$46template._ViewScoreboardComponentHost0);
  dart.setLibraryUri(scoreboard$46template._ViewScoreboardComponentHost0, L0);
  dart.setFieldSignature(scoreboard$46template._ViewScoreboardComponentHost0, () => ({
    __proto__: dart.getFields(scoreboard$46template._ViewScoreboardComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(scoreboard$46template.ViewScoreboardComponent0)),
    [_ScoreboardComponent_0_5]: dart.fieldType(dart.legacy(scoreboard.ScoreboardComponent))
  }));
  scoreboard$46template.viewFactory_ScoreboardComponent1 = function viewFactory_ScoreboardComponent1(parentView, parentIndex) {
    return new scoreboard$46template._ViewScoreboardComponent1.new(parentView, parentIndex);
  };
  scoreboard$46template.viewFactory_ScoreboardComponent2 = function viewFactory_ScoreboardComponent2(parentView, parentIndex) {
    return new scoreboard$46template._ViewScoreboardComponent2.new(parentView, parentIndex);
  };
  scoreboard$46template.viewFactory_ScoreboardComponentHost0 = function viewFactory_ScoreboardComponentHost0(parentView, parentIndex) {
    return new scoreboard$46template._ViewScoreboardComponentHost0.new(parentView, parentIndex);
  };
  scoreboard$46template.initReflector = function initReflector() {
    if (dart.test(scoreboard$46template._visited)) {
      return;
    }
    scoreboard$46template._visited = true;
    reflector.registerComponent(dart.wrapType(ScoreboardComponentL()), scoreboard$46template.ScoreboardComponentNgFactory);
    angular$46template.initReflector();
    material_button$46template.initReflector();
    material_icon$46template.initReflector();
    selection_model$46template.initReflector();
    angular_2$46template.initReflector();
    palette$46template.initReflector();
    disposer$46template.initReflector();
    scorecard$46template.initReflector();
    scorecard_bar$46template.initReflector();
  };
  dart.copyProperties(scoreboard$46template, {
    get ScoreboardComponentNgFactory() {
      return scoreboard$46template._ScoreboardComponentNgFactory;
    }
  });
  var C5;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C4;
  var C6;
  dart.defineLazy(scoreboard$46template, {
    /*scoreboard$46template.styles$ScoreboardComponent*/get styles$ScoreboardComponent() {
      return [scoreboard$46scss$46css$46shim.styles];
    },
    /*scoreboard$46template._ScoreboardComponentNgFactory*/get _ScoreboardComponentNgFactory() {
      return C4 || CT.C4;
    },
    /*scoreboard$46template.styles$ScoreboardComponentHost*/get styles$ScoreboardComponentHost() {
      return C6 || CT.C6;
    },
    /*scoreboard$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/scorecard/scoreboard.template", {
    "package:angular_components/scorecard/scoreboard.template.dart": scoreboard$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scoreboard.template.dart"],"names":[],"mappings":"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","file":"scoreboard.template.ddc.js"}');
  // Exports:
  return {
    scorecard__scoreboard$46template: scoreboard$46template
  };
}));

//# sourceMappingURL=scoreboard.template.ddc.js.map
