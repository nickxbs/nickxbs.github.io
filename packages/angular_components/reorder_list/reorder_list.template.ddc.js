define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/reorder_list/reorder_list', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular/angular.template', 'packages/angular_components/reorder_list/reorder_events.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/keyboard/keyboard.template', 'packages/angular_components/reorder_list/reorder_list.scss.css.shim'], (function load__packages__angular_components__reorder_list__reorder_list_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__reorder_list__reorder_list, packages__angular__src__core__change_detection__directive_change_detector, packages__angular__angular$46template, packages__angular_components__reorder_list__reorder_events$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__utils__keyboard__keyboard$46template, packages__angular_components__reorder_list__reorder_list$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const reorder_list = packages__angular_components__reorder_list__reorder_list.reorder_list__reorder_list;
  const directive_change_detector = packages__angular__src__core__change_detection__directive_change_detector.src__core__change_detection__directive_change_detector;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const reorder_events$46template = packages__angular_components__reorder_list__reorder_events$46template.reorder_list__reorder_events$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const keyboard$46template = packages__angular_components__utils__keyboard__keyboard$46template.utils__keyboard__keyboard$46template;
  const reorder_list$46scss$46css$46shim = packages__angular_components__reorder_list__reorder_list$46scss$46css$46shim.reorder_list__reorder_list$46scss$46css$46shim;
  var reorder_list$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var ReorderListComponentL = () => (ReorderListComponentL = dart.constFn(dart.legacy(reorder_list.ReorderListComponent)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var VoidToReorderListComponentL = () => (VoidToReorderListComponentL = dart.constFn(dart.fnType(ReorderListComponentL(), [])))();
  var ReorderItemDirectiveL = () => (ReorderItemDirectiveL = dart.constFn(dart.legacy(reorder_list.ReorderItemDirective)))();
  var JSArrayOfReorderItemDirectiveL = () => (JSArrayOfReorderItemDirectiveL = dart.constFn(_interceptors.JSArray$(ReorderItemDirectiveL())))();
  var ComponentRefOfReorderListComponentL = () => (ComponentRefOfReorderListComponentL = dart.constFn(component_factory.ComponentRef$(ReorderListComponentL())))();
  var ComponentFactoryOfReorderListComponentL = () => (ComponentFactoryOfReorderListComponentL = dart.constFn(component_factory.ComponentFactory$(ReorderListComponentL())))();
  var AppViewOfReorderListComponentL = () => (AppViewOfReorderListComponentL = dart.constFn(app_view.AppView$(ReorderListComponentL())))();
  var AppViewLOfReorderListComponentL = () => (AppViewLOfReorderListComponentL = dart.constFn(dart.legacy(AppViewOfReorderListComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfReorderListComponentL = () => (AppViewLAndintLToAppViewLOfReorderListComponentL = dart.constFn(dart.fnType(AppViewLOfReorderListComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/reorder_list/reorder_list.template.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(reorder_list$46template.viewFactory_ReorderListComponentHost0, AppViewLAndintLToAppViewLOfReorderListComponentL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfReorderListComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "reorder-list"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _expr_0 = dart.privateName(reorder_list$46template, "_expr_0");
  var _expr_1 = dart.privateName(reorder_list$46template, "_expr_1");
  var _expr_2 = dart.privateName(reorder_list$46template, "_expr_2");
  var _el_1 = dart.privateName(reorder_list$46template, "_el_1");
  reorder_list$46template.ViewReorderListComponent0 = class ViewReorderListComponent0 extends app_view.AppView$(dart.legacy(reorder_list.ReorderListComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/reorder_list/reorder_list.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      this.project(parentRenderNode, 0);
      let doc = html.document;
      this[_el_1] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_1], "placeholder");
      this.addShimC(this[_el_1]);
      this.project(this[_el_1], 1);
      _ctx.placeholder = this[_el_1];
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = !dart.test(_ctx.showPlaceholder);
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(this[_el_1], "hidden", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.verticalItems;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "vertical", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.multiSelect;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "multiselect", currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    initComponentStyles() {
      let styles = reorder_list$46template.ViewReorderListComponent0._componentStyles;
      if (styles == null) {
        reorder_list$46template.ViewReorderListComponent0._componentStyles = styles = reorder_list$46template.ViewReorderListComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(reorder_list$46template.styles$ReorderListComponent, reorder_list$46template.ViewReorderListComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (reorder_list$46template.ViewReorderListComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_1] = null;
    reorder_list$46template.ViewReorderListComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("reorder-list"));
    this.updateChildClassNonHtml(this.rootEl, "themeable");
    dom_helpers.updateAttribute(this.rootEl, "role", "list");
  }).prototype = reorder_list$46template.ViewReorderListComponent0.prototype;
  dart.addTypeTests(reorder_list$46template.ViewReorderListComponent0);
  dart.addTypeCaches(reorder_list$46template.ViewReorderListComponent0);
  dart.setLibraryUri(reorder_list$46template.ViewReorderListComponent0, L0);
  dart.setFieldSignature(reorder_list$46template.ViewReorderListComponent0, () => ({
    __proto__: dart.getFields(reorder_list$46template.ViewReorderListComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
    [_el_1]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(reorder_list$46template.ViewReorderListComponent0, {
    /*reorder_list$46template.ViewReorderListComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(reorder_list$46template, "_compView_0");
  var _ReorderListComponent_0_5 = dart.privateName(reorder_list$46template, "_ReorderListComponent_0_5");
  reorder_list$46template._ViewReorderListComponentHost0 = class _ViewReorderListComponentHost0 extends app_view.AppView$(dart.legacy(reorder_list.ReorderListComponent)) {
    build() {
      this[_compView_0] = new reorder_list$46template.ViewReorderListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ReorderListComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ReorderListComponentL(), dart.wrapType(ReorderListComponentL()), dart.fn(() => new reorder_list.ReorderListComponent.new(NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex))), VoidToReorderListComponentL())) : new reorder_list.ReorderListComponent.new(NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)));
      this[_ReorderListComponent_0_5].items = JSArrayOfReorderItemDirectiveL().of([]);
      this[_compView_0].create(this[_ReorderListComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfReorderListComponentL()).new(0, this, this.rootEl, this[_ReorderListComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ReorderListComponentL()) && 0 === nodeIndex) {
        return this[_ReorderListComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_ReorderListComponent_0_5].ngOnDestroy();
    }
  };
  (reorder_list$46template._ViewReorderListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ReorderListComponent_0_5] = null;
    reorder_list$46template._ViewReorderListComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = reorder_list$46template._ViewReorderListComponentHost0.prototype;
  dart.addTypeTests(reorder_list$46template._ViewReorderListComponentHost0);
  dart.addTypeCaches(reorder_list$46template._ViewReorderListComponentHost0);
  dart.setMethodSignature(reorder_list$46template._ViewReorderListComponentHost0, () => ({
    __proto__: dart.getMethods(reorder_list$46template._ViewReorderListComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(reorder_list$46template._ViewReorderListComponentHost0, L0);
  dart.setFieldSignature(reorder_list$46template._ViewReorderListComponentHost0, () => ({
    __proto__: dart.getFields(reorder_list$46template._ViewReorderListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(reorder_list$46template.ViewReorderListComponent0)),
    [_ReorderListComponent_0_5]: dart.fieldType(dart.legacy(reorder_list.ReorderListComponent))
  }));
  var instance$ = dart.privateName(reorder_list$46template, "ReorderItemDirectiveNgCd.instance");
  reorder_list$46template.ReorderItemDirectiveNgCd = class ReorderItemDirectiveNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.hostDraggable;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(el, "draggable", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (reorder_list$46template.ReorderItemDirectiveNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$] = instance;
    reorder_list$46template.ReorderItemDirectiveNgCd.__proto__.new.call(this);
    ;
  }).prototype = reorder_list$46template.ReorderItemDirectiveNgCd.prototype;
  dart.addTypeTests(reorder_list$46template.ReorderItemDirectiveNgCd);
  dart.addTypeCaches(reorder_list$46template.ReorderItemDirectiveNgCd);
  dart.setMethodSignature(reorder_list$46template.ReorderItemDirectiveNgCd, () => ({
    __proto__: dart.getMethods(reorder_list$46template.ReorderItemDirectiveNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [dart.legacy(app_view.AppView), dart.legacy(html.Element)])
  }));
  dart.setLibraryUri(reorder_list$46template.ReorderItemDirectiveNgCd, L0);
  dart.setFieldSignature(reorder_list$46template.ReorderItemDirectiveNgCd, () => ({
    __proto__: dart.getFields(reorder_list$46template.ReorderItemDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(dart.legacy(reorder_list.ReorderItemDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  reorder_list$46template.viewFactory_ReorderListComponentHost0 = function viewFactory_ReorderListComponentHost0(parentView, parentIndex) {
    return new reorder_list$46template._ViewReorderListComponentHost0.new(parentView, parentIndex);
  };
  reorder_list$46template.initReflector = function initReflector() {
    if (dart.test(reorder_list$46template._visited)) {
      return;
    }
    reorder_list$46template._visited = true;
    reflector.registerComponent(dart.wrapType(ReorderListComponentL()), reorder_list$46template.ReorderListComponentNgFactory);
    angular$46template.initReflector();
    reorder_events$46template.initReflector();
    disposer$46template.initReflector();
    keyboard$46template.initReflector();
    reorder_events$46template.initReflector();
  };
  dart.copyProperties(reorder_list$46template, {
    get ReorderListComponentNgFactory() {
      return reorder_list$46template._ReorderListComponentNgFactory;
    }
  });
  var C1;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C0;
  var C2;
  dart.defineLazy(reorder_list$46template, {
    /*reorder_list$46template.styles$ReorderListComponent*/get styles$ReorderListComponent() {
      return [reorder_list$46scss$46css$46shim.styles];
    },
    /*reorder_list$46template._ReorderListComponentNgFactory*/get _ReorderListComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*reorder_list$46template.styles$ReorderListComponentHost*/get styles$ReorderListComponentHost() {
      return C2 || CT.C2;
    },
    /*reorder_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/reorder_list/reorder_list.template", {
    "package:angular_components/reorder_list/reorder_list.template.dart": reorder_list$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["reorder_list.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA0CI,uBAAgB,2BAAY,gEAAgE;IAC9F;;AAIQ,iBAAO;AACP,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AAC3D,oBAAU,uBAAmB,gBAAgB,EAAE;AACzB,MAA5B,aAAQ,gBAAgB,EAAE;AACpB,gBAAc;AAC4B,MAAhD,cAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACJ,MAA3C,AAAK,sBAAiB,aAAO;AACd,MAAf,cAAS;AACQ,MAAjB,aAAQ,aAAO;AACS,MAAxB,AAAK,IAAD,eAAe;AACZ,MAAP;IACF;;AAIQ,iBAAO;AACF,sBAAa,WAAC,AAAK,IAAD;AAC7B,oBAAI,4BAAsB,eAAS,SAAS;AACY,QAAtD,+BAA2B,aAAO,UAAU,SAAS;AAClC,QAAnB,gBAAU,SAAS;;IAEvB;sBAE4B;AACpB,iBAAO;AACP,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACsB,QAAhE,sCAAkC,aAAQ,YAAY,SAAS;AAC5C,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACyB,QAAnE,sCAAkC,aAAQ,eAAe,SAAS;AAC/C,QAAnB,gBAAU,SAAS;;IAEvB;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACgH,QAAnI,qEAAoB,SAAU,qEAA2C,2CAAO,qDAA6B;;AAExF,MAAxB,uBAAkB,MAAM;IAC1B;;oEAzD2C,YAAgB;IALtD;IACA;IACA;IACc;AAEuD,+EAAuB,8BAAW,UAAU,EAAE,WAAW;AAC5G,IAArB;AACuD,kBAAvD,kBAAiB,AAAS,8BAAc;AACoC,IAA5E,AAAK,6BAAwB;AACiD,IAA9E,4BAAwB,aAAQ;EAClC;;;;;;;;;;;;MAN+B,kEAAgB;;;;;;;;;AA0EG,MAAhD,oBAAc,0DAA0B,MAAM;AACnB,MAA3B,cAAS,AAAY;AAKuE,MAJ5F,4CAAqC,2BAC/B,kDAAmC,wCAAsB,cACxC,uDAAqB,AAAK,iBAAqB,0BAAQ,AAAS,gEAEzE,uDAAqB,AAAK,iBAAqB,0BAAQ,AAAS;AAC1C,MAApC,AAA0B,wCAAQ;AAC2B,MAA7D,AAAY,yBAAO,iCAA2B;AACjC,MAAb,WAAM;AACN,YAAO,iDAAa,GAAG,MAAM,aAAQ;IACvC;wBAGoC,OAAW,WAAmB;AAChE,UAAK,AAAU,KAAK,KAAU,0CAA0B,AAAE,MAAG,SAAS;AACpE,cAAO;;AAET,YAAO,eAAc;IACvB;;AAIO,uBAAmB,AAAQ,iBAAG;AACM,MAAzC,AAAY,oCAAkB,UAAU;AACb,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;AAC2B,MAAvC,AAA0B;IAC5B;;yEAnCgD,YAAgB;IAFtC;IACG;AACkD,oFAAuB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;;;;;;;IA2CtI;;;;;;sBAGK,MAAsB;AACtD,sBAAY,AAAS;AAC3B,oBAAI,4BAAsB,eAAS,SAAS;AACS,QAAnD,4BAAwB,EAAE,EAAE,aAAa,SAAS;AAC/B,QAAnB,gBAAU,SAAS;;IAEvB;;mEAP8B;IAD1B;IAC0B;AAA9B;;EAAuC;;;;;;;;;;;;;iHAPoD,YAAgB;AAC3G,UAAO,gEAA+B,UAAU,EAAE,WAAW;EAC/D;;AAiBE,kBAAI;AACF;;AAEa,IAAf,mCAAW;AAEkE,IAA7E,4BAAyB,wCAAsB;AAC1B,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AA5EE,YAAO;IACT;;;;;;;;MAvEoB,mDAA2B;YAAG,EAAS;;MAoEN,sDAA8B;;;MAK/D,uDAA+B;;;MA4D/C,gCAAQ;YAAG","file":"reorder_list.template.ddc.js"}');
  // Exports:
  return {
    reorder_list__reorder_list$46template: reorder_list$46template
  };
}));

//# sourceMappingURL=reorder_list.template.ddc.js.map
