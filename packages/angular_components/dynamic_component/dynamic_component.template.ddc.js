define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular/angular.template', 'packages/angular_components/model/ui/has_renderer.template'], (function load__packages__angular_components__dynamic_component__dynamic_component_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__dynamic_component__dynamic_component, packages__angular__angular$46template, packages__angular_components__model__ui__has_renderer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const dynamic_component_loader = packages__angular__src__bootstrap__modules.src__core__linker__dynamic_component_loader;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const dynamic_component = packages__angular_components__dynamic_component__dynamic_component.dynamic_component__dynamic_component;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  var dynamic_component$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var DynamicComponentL = () => (DynamicComponentL = dart.constFn(dart.legacy(dynamic_component.DynamicComponent)))();
  var SlowComponentLoaderL = () => (SlowComponentLoaderL = dart.constFn(dart.legacy(dynamic_component_loader.SlowComponentLoader)))();
  var VoidToDynamicComponentL = () => (VoidToDynamicComponentL = dart.constFn(dart.fnType(DynamicComponentL(), [])))();
  var ComponentRefOfDynamicComponentL = () => (ComponentRefOfDynamicComponentL = dart.constFn(component_factory.ComponentRef$(DynamicComponentL())))();
  var ComponentFactoryOfDynamicComponentL = () => (ComponentFactoryOfDynamicComponentL = dart.constFn(component_factory.ComponentFactory$(DynamicComponentL())))();
  var AppViewOfDynamicComponentL = () => (AppViewOfDynamicComponentL = dart.constFn(app_view.AppView$(DynamicComponentL())))();
  var AppViewLOfDynamicComponentL = () => (AppViewLOfDynamicComponentL = dart.constFn(dart.legacy(AppViewOfDynamicComponentL())))();
  var AppViewLAndintLToAppViewLOfDynamicComponentL = () => (AppViewLAndintLToAppViewLOfDynamicComponentL = dart.constFn(dart.fnType(AppViewLOfDynamicComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/dynamic_component/dynamic_component.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(dynamic_component$46template.viewFactory_DynamicComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C1() {
      return C1 = dart.constList([], dart.dynamic);
    },
    get C3() {
      return C3 = dart.fn(dynamic_component$46template.viewFactory_DynamicComponentHost0, AppViewLAndintLToAppViewLOfDynamicComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfDynamicComponentL().prototype,
        [ComponentFactory__viewFactory]: C3 || CT.C3,
        [ComponentFactory_selector]: "dynamic-component"
      });
    }
  }, false);
  var _appEl_0 = dart.privateName(dynamic_component$46template, "_appEl_0");
  var _TemplateRef_0_8 = dart.privateName(dynamic_component$46template, "_TemplateRef_0_8");
  var C0;
  dynamic_component$46template.ViewDynamicComponent0 = class ViewDynamicComponent0 extends app_view.AppView$(dart.legacy(dynamic_component.DynamicComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/dynamic_component/dynamic_component.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      this[_TemplateRef_0_8] = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      _ctx.viewContainerRef = this[_appEl_0];
      this.init0();
    }
    detectChangesInternal() {
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = dynamic_component$46template.ViewDynamicComponent0._componentStyles;
      if (styles == null) {
        dynamic_component$46template.ViewDynamicComponent0._componentStyles = styles = dynamic_component$46template.ViewDynamicComponent0._componentStyles = new style_encapsulation._UnscopedComponentStyles.new(dynamic_component$46template.styles$DynamicComponent, dynamic_component$46template.ViewDynamicComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (dynamic_component$46template.ViewDynamicComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_TemplateRef_0_8] = null;
    dynamic_component$46template.ViewDynamicComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("dynamic-component"));
  }).prototype = dynamic_component$46template.ViewDynamicComponent0.prototype;
  dart.addTypeTests(dynamic_component$46template.ViewDynamicComponent0);
  dart.addTypeCaches(dynamic_component$46template.ViewDynamicComponent0);
  dart.setLibraryUri(dynamic_component$46template.ViewDynamicComponent0, L0);
  dart.setFieldSignature(dynamic_component$46template.ViewDynamicComponent0, () => ({
    __proto__: dart.getFields(dynamic_component$46template.ViewDynamicComponent0.__proto__),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_TemplateRef_0_8]: dart.fieldType(dart.legacy(template_ref.TemplateRef))
  }));
  dart.defineLazy(dynamic_component$46template.ViewDynamicComponent0, {
    /*dynamic_component$46template.ViewDynamicComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dynamic_component$46template._ViewDynamicComponent1 = class _ViewDynamicComponent1 extends app_view.AppView$(dart.legacy(dynamic_component.DynamicComponent)) {
    build() {
      this.init0();
    }
  };
  (dynamic_component$46template._ViewDynamicComponent1.new = function(parentView, parentIndex) {
    dynamic_component$46template._ViewDynamicComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = dynamic_component$46template._ViewDynamicComponent1.prototype;
  dart.addTypeTests(dynamic_component$46template._ViewDynamicComponent1);
  dart.addTypeCaches(dynamic_component$46template._ViewDynamicComponent1);
  dart.setLibraryUri(dynamic_component$46template._ViewDynamicComponent1, L0);
  var _compView_0 = dart.privateName(dynamic_component$46template, "_compView_0");
  var _DynamicComponent_0_8 = dart.privateName(dynamic_component$46template, "_DynamicComponent_0_8");
  dynamic_component$46template._ViewDynamicComponentHost0 = class _ViewDynamicComponentHost0 extends app_view.AppView$(dart.legacy(dynamic_component.DynamicComponent)) {
    build() {
      this[_compView_0] = new dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, this.rootEl);
      this[_DynamicComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DynamicComponentL(), dart.wrapType(DynamicComponentL()), dart.fn(() => new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0]), VoidToDynamicComponentL())) : new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0]);
      this[_compView_0].create(this[_DynamicComponent_0_8], this.projectedNodes);
      this.init1(this[_appEl_0]);
      return new (ComponentRefOfDynamicComponentL()).new(0, this, this.rootEl, this[_DynamicComponent_0_8]);
    }
    detectChangesInternal() {
      this[_appEl_0].detectChangesInNestedViews();
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_DynamicComponent_0_8].ngOnDestroy();
    }
  };
  (dynamic_component$46template._ViewDynamicComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_DynamicComponent_0_8] = null;
    dynamic_component$46template._ViewDynamicComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = dynamic_component$46template._ViewDynamicComponentHost0.prototype;
  dart.addTypeTests(dynamic_component$46template._ViewDynamicComponentHost0);
  dart.addTypeCaches(dynamic_component$46template._ViewDynamicComponentHost0);
  dart.setLibraryUri(dynamic_component$46template._ViewDynamicComponentHost0, L0);
  dart.setFieldSignature(dynamic_component$46template._ViewDynamicComponentHost0, () => ({
    __proto__: dart.getFields(dynamic_component$46template._ViewDynamicComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(dynamic_component$46template.ViewDynamicComponent0)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_DynamicComponent_0_8]: dart.fieldType(dart.legacy(dynamic_component.DynamicComponent))
  }));
  dynamic_component$46template.viewFactory_DynamicComponent1 = function viewFactory_DynamicComponent1(parentView, parentIndex) {
    return new dynamic_component$46template._ViewDynamicComponent1.new(parentView, parentIndex);
  };
  dynamic_component$46template.viewFactory_DynamicComponentHost0 = function viewFactory_DynamicComponentHost0(parentView, parentIndex) {
    return new dynamic_component$46template._ViewDynamicComponentHost0.new(parentView, parentIndex);
  };
  dynamic_component$46template.initReflector = function initReflector() {
    if (dart.test(dynamic_component$46template._visited)) {
      return;
    }
    dynamic_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(DynamicComponentL()), dynamic_component$46template.DynamicComponentNgFactory);
    angular$46template.initReflector();
    has_renderer$46template.initReflector();
  };
  dart.copyProperties(dynamic_component$46template, {
    get DynamicComponentNgFactory() {
      return dynamic_component$46template._DynamicComponentNgFactory;
    }
  });
  var C1;
  var C3;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  dart.defineLazy(dynamic_component$46template, {
    /*dynamic_component$46template.styles$DynamicComponent*/get styles$DynamicComponent() {
      return C1 || CT.C1;
    },
    /*dynamic_component$46template._DynamicComponentNgFactory*/get _DynamicComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*dynamic_component$46template.styles$DynamicComponentHost*/get styles$DynamicComponentHost() {
      return C1 || CT.C1;
    },
    /*dynamic_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/dynamic_component/dynamic_component.template", {
    "package:angular_components/dynamic_component/dynamic_component.template.dart": dynamic_component$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dynamic_component.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkCI,uBAAgB,2BAAY,0EAA0E;IACxG;;AAIQ,iBAAO;AACP,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AAC3D,sBAAY,yBAAsB,gBAAgB;AACN,MAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AACsB,MAAvE,yBAAmB,iCAAY;AACC,MAAhC,AAAK,IAAD,oBAAoB;AACjB,MAAP;IACF;;AAIuC,MAArC,AAAS;IACX;;AAI+B,MAA7B,AAAS;IACX;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC8G,QAAjI,sEAAoB,SAAU,sEAA2C,qDAAS,sDAAyB;;AAEtF,MAAxB,uBAAkB,MAAM;IAC1B;;qEArCuC,YAAgB;IAHzC;IACF;AAE0D,gFAAuB,8BAAW,UAAU,EAAE,WAAW;AACxG,IAArB;AAC4D,kBAA5D,kBAAiB,AAAS,8BAAc;EAC1C;;;;;;;;;;MAJ+B,mEAAgB;;;;;;;AAoDtC,MAAP;IACF;;sEANwC,YAAgB;AAAe,iFAAuB,6BAAU,UAAU,EAAE,WAAW;AACxG,IAArB;EACF;;;;;;;;AAoB8C,MAA5C,oBAAc,2DAAsB,MAAM;AACf,MAA3B,cAAS,AAAY;AAC0B,MAA/C,iBAAW,qCAAc,GAAG,MAAM,MAAM;AAKoF,MAJ5H,wCAAiC,2BAC3B,8CAAmC,oCAAkB,cACpC,qEAAiB,AAAK,iBAAqB,uCAAqB,AAAS,6BAAc,mBAAa,+CAE7G,qEAAiB,AAAK,iBAAqB,uCAAqB,AAAS,6BAAc,mBAAa;AACzD,MAAzD,AAAY,yBAAO,6BAAuB;AAC3B,MAAf,WAAM;AACN,YAAO,6CAAa,GAAG,MAAM,aAAQ;IACvC;;AAIuC,MAArC,AAAS;AACkB,MAA3B,AAAY;IACd;;AAI+B,MAA7B,AAAS;AACyB,MAAlC,AAAY;AACuB,MAAnC,AAAsB;IACxB;;0EA3B4C,YAAgB;IAHtC;IACR;IACW;AACkD,qFAAuB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;;sGAV1G,YAAgB;AAC3E,UAAO,6DAAuB,UAAU,EAAE,WAAW;EACvD;8GAsCqF,YAAgB;AACnG,UAAO,iEAA2B,UAAU,EAAE,WAAW;EAC3D;;AAIE,kBAAI;AACF;;AAEa,IAAf,wCAAW;AAE0D,IAArE,4BAAyB,oCAAkB;AACtB,IAArB;AACqB,IAArB;EACF;;;AAnEE,YAAO;IACT;;;;;;;;MAjDoB,oDAAuB;;;MA8CM,uDAA0B;;;MAmBvD,wDAA2B;;;MAwC3C,qCAAQ;YAAG","file":"dynamic_component.template.ddc.js"}');
  // Exports:
  return {
    dynamic_component__dynamic_component$46template: dynamic_component$46template
  };
}));

//# sourceMappingURL=dynamic_component.template.ddc.js.map
