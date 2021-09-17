define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/focus/focus_trap', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/utils/browser/dom_iterator/dom_iterator.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/focus/focus_trap.scss.css.shim'], (function load__packages__angular_components__focus__focus_trap_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__focus__focus_trap, packages__angular__angular$46template, packages__angular_components__focus__focus$46template, packages__angular_components__utils__browser__dom_iterator__dom_iterator$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__focus__focus_trap$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const focus_trap = packages__angular_components__focus__focus_trap.focus__focus_trap;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const dom_iterator$46template = packages__angular_components__utils__browser__dom_iterator__dom_iterator$46template.utils__browser__dom_iterator__dom_iterator$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const focus_trap$46scss$46css$46shim = packages__angular_components__focus__focus_trap$46scss$46css$46shim.focus__focus_trap$46scss$46css$46shim;
  var focus_trap$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var FocusTrapComponentL = () => (FocusTrapComponentL = dart.constFn(dart.legacy(focus_trap.FocusTrapComponent)))();
  var ComponentRefOfFocusTrapComponentL = () => (ComponentRefOfFocusTrapComponentL = dart.constFn(component_factory.ComponentRef$(FocusTrapComponentL())))();
  var ComponentFactoryOfFocusTrapComponentL = () => (ComponentFactoryOfFocusTrapComponentL = dart.constFn(component_factory.ComponentFactory$(FocusTrapComponentL())))();
  var AppViewOfFocusTrapComponentL = () => (AppViewOfFocusTrapComponentL = dart.constFn(app_view.AppView$(FocusTrapComponentL())))();
  var AppViewLOfFocusTrapComponentL = () => (AppViewLOfFocusTrapComponentL = dart.constFn(dart.legacy(AppViewOfFocusTrapComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfFocusTrapComponentL = () => (AppViewLAndintLToAppViewLOfFocusTrapComponentL = dart.constFn(dart.fnType(AppViewLOfFocusTrapComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/focus/focus_trap.template.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(focus_trap$46template.viewFactory_FocusTrapComponentHost0, AppViewLAndintLToAppViewLOfFocusTrapComponentL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfFocusTrapComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "focus-trap"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _FocusContentWrapper_1_5 = dart.privateName(focus_trap$46template, "_FocusContentWrapper_1_5");
  focus_trap$46template.ViewFocusTrapComponent0 = class ViewFocusTrapComponent0 extends app_view.AppView$(dart.legacy(focus_trap.FocusTrapComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/focus/focus_trap.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      _el_0.tabIndex = 0;
      this.addShimC(_el_0);
      let _el_1 = dom_helpers.appendDiv(doc, parentRenderNode);
      dom_helpers.setAttribute(_el_1, "focusContentWrapper", "");
      dom_helpers.setAttribute(_el_1, "style", "outline: none");
      _el_1.tabIndex = -1;
      this.addShimC(_el_1);
      this[_FocusContentWrapper_1_5] = new focus_trap.FocusContentWrapper.new(_el_1);
      this.project(_el_1, 0);
      let _el_2 = dom_helpers.appendDiv(doc, parentRenderNode);
      _el_2.tabIndex = 0;
      this.addShimC(_el_2);
      _el_0[$addEventListener]("focus", this.eventHandler0(EventL(), dart.bind(_ctx, 'focusLast')));
      _el_2[$addEventListener]("focus", this.eventHandler0(EventL(), dart.bind(_ctx, 'focusFirst')));
      _ctx.content = this[_FocusContentWrapper_1_5];
      this.init0();
    }
    initComponentStyles() {
      let styles = focus_trap$46template.ViewFocusTrapComponent0._componentStyles;
      if (styles == null) {
        focus_trap$46template.ViewFocusTrapComponent0._componentStyles = styles = focus_trap$46template.ViewFocusTrapComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(focus_trap$46template.styles$FocusTrapComponent, focus_trap$46template.ViewFocusTrapComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (focus_trap$46template.ViewFocusTrapComponent0.new = function(parentView, parentIndex) {
    this[_FocusContentWrapper_1_5] = null;
    focus_trap$46template.ViewFocusTrapComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("focus-trap"));
  }).prototype = focus_trap$46template.ViewFocusTrapComponent0.prototype;
  dart.addTypeTests(focus_trap$46template.ViewFocusTrapComponent0);
  dart.addTypeCaches(focus_trap$46template.ViewFocusTrapComponent0);
  dart.setLibraryUri(focus_trap$46template.ViewFocusTrapComponent0, L0);
  dart.setFieldSignature(focus_trap$46template.ViewFocusTrapComponent0, () => ({
    __proto__: dart.getFields(focus_trap$46template.ViewFocusTrapComponent0.__proto__),
    [_FocusContentWrapper_1_5]: dart.fieldType(dart.legacy(focus_trap.FocusContentWrapper))
  }));
  dart.defineLazy(focus_trap$46template.ViewFocusTrapComponent0, {
    /*focus_trap$46template.ViewFocusTrapComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(focus_trap$46template, "_compView_0");
  var _FocusTrapComponent_0_5 = dart.privateName(focus_trap$46template, "_FocusTrapComponent_0_5");
  focus_trap$46template._ViewFocusTrapComponentHost0 = class _ViewFocusTrapComponentHost0 extends app_view.AppView$(dart.legacy(focus_trap.FocusTrapComponent)) {
    build() {
      this[_compView_0] = new focus_trap$46template.ViewFocusTrapComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_FocusTrapComponent_0_5] = new focus_trap.FocusTrapComponent.new();
      this[_compView_0].create(this[_FocusTrapComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfFocusTrapComponentL()).new(0, this, this.rootEl, this[_FocusTrapComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_FocusTrapComponent_0_5].ngOnDestroy();
    }
  };
  (focus_trap$46template._ViewFocusTrapComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FocusTrapComponent_0_5] = null;
    focus_trap$46template._ViewFocusTrapComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = focus_trap$46template._ViewFocusTrapComponentHost0.prototype;
  dart.addTypeTests(focus_trap$46template._ViewFocusTrapComponentHost0);
  dart.addTypeCaches(focus_trap$46template._ViewFocusTrapComponentHost0);
  dart.setLibraryUri(focus_trap$46template._ViewFocusTrapComponentHost0, L0);
  dart.setFieldSignature(focus_trap$46template._ViewFocusTrapComponentHost0, () => ({
    __proto__: dart.getFields(focus_trap$46template._ViewFocusTrapComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(focus_trap$46template.ViewFocusTrapComponent0)),
    [_FocusTrapComponent_0_5]: dart.fieldType(dart.legacy(focus_trap.FocusTrapComponent))
  }));
  focus_trap$46template.viewFactory_FocusTrapComponentHost0 = function viewFactory_FocusTrapComponentHost0(parentView, parentIndex) {
    return new focus_trap$46template._ViewFocusTrapComponentHost0.new(parentView, parentIndex);
  };
  focus_trap$46template.initReflector = function initReflector() {
    if (dart.test(focus_trap$46template._visited)) {
      return;
    }
    focus_trap$46template._visited = true;
    reflector.registerComponent(dart.wrapType(FocusTrapComponentL()), focus_trap$46template.FocusTrapComponentNgFactory);
    angular$46template.initReflector();
    focus$46template.initReflector();
    dom_iterator$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(focus_trap$46template, {
    get FocusTrapComponentNgFactory() {
      return focus_trap$46template._FocusTrapComponentNgFactory;
    }
  });
  var C1;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C0;
  var C2;
  dart.defineLazy(focus_trap$46template, {
    /*focus_trap$46template.styles$FocusTrapComponent*/get styles$FocusTrapComponent() {
      return [focus_trap$46scss$46css$46shim.styles];
    },
    /*focus_trap$46template._FocusTrapComponentNgFactory*/get _FocusTrapComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*focus_trap$46template.styles$FocusTrapComponentHost*/get styles$FocusTrapComponentHost() {
      return C2 || CT.C2;
    },
    /*focus_trap$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/focus/focus_trap.template", {
    "package:angular_components/focus/focus_trap.template.dart": focus_trap$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["focus_trap.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgCI,uBAAgB,2BAAY,uDAAuD;IACrF;;AAIQ,iBAAO;AACP,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AAC3D,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACnC,MAAlB,AAAM,KAAD,YAAY;AACF,MAAf,cAAS,KAAK;AACR,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACC,MAAtD,yBAAqB,KAAK,EAAE,uBAAuB;AACE,MAArD,yBAAqB,KAAK,EAAE,SAAS;AAClB,MAAnB,AAAM,KAAD,YAAY,CAAC;AACH,MAAf,cAAS,KAAK;AAC+C,MAA7D,iCAAmC,uCAAoB,KAAK;AAC3C,MAAjB,aAAQ,KAAK,EAAE;AACT,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACnC,MAAlB,AAAM,KAAD,YAAY;AACF,MAAf,cAAS,KAAK;AACgD,MAA9D,AAAM,KAAD,oBAAkB,SAAS,6BAAmB,UAAL,IAAI;AACa,MAA/D,AAAM,KAAD,oBAAkB,SAAS,6BAAmB,UAAL,IAAI;AACX,MAAvC,AAAK,IAAD,WAAW;AACR,MAAP;IACF;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC8G,QAAjI,iEAAoB,SAAU,iEAA2C,2CAAO,iDAA2B;;AAEtF,MAAxB,uBAAkB,MAAM;IAC1B;;gEAxCyC,YAAgB;IAF7B;AAE4C,2EAAuB,8BAAW,UAAU,EAAE,WAAW;AAC1G,IAArB;AACqD,kBAArD,kBAAiB,AAAS,8BAAc;EAC1C;;;;;;;;;MAJ+B,8DAAgB;;;;;;;;;AAyDC,MAA9C,oBAAc,sDAAwB,MAAM;AACjB,MAA3B,cAAS,AAAY;AACiC,MAAtD,gCAAkC;AACyB,MAA3D,AAAY,yBAAO,+BAAyB;AAC/B,MAAb,WAAM;AACN,YAAO,+CAAa,GAAG,MAAM,aAAQ;IACvC;;AAI6B,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;AACyB,MAArC,AAAwB;IAC1B;;qEApB8C,YAAgB;IAFtC;IACG;AACkD,gFAAuB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;2GAuBhF,YAAgB;AACvG,UAAO,4DAA6B,UAAU,EAAE,WAAW;EAC7D;;AAIE,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAE8D,IAAzE,4BAAyB,sCAAoB;AACxB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AA/CE,YAAO;IACT;;;;;;;;MAnDoB,+CAAyB;YAAG,EAAS;;MAgDN,kDAA4B;;;MAK3D,mDAA6B;;;MAgC7C,8BAAQ;YAAG","file":"focus_trap.template.ddc.js"}');
  // Exports:
  return {
    focus__focus_trap$46template: focus_trap$46template
  };
}));

//# sourceMappingURL=focus_trap.template.ddc.js.map
