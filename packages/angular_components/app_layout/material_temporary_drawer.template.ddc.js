define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/app_layout/material_temporary_drawer', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/app_layout/material_drawer_base.template', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/app_layout/material_temporary_drawer.scss.css.shim'], (function load__packages__angular_components__app_layout__material_temporary_drawer_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__app_layout__material_temporary_drawer, packages__angular_components__content__deferred_content_aware, packages__angular_components__app_layout__material_drawer_base$46template, packages__angular__angular$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__app_layout__material_temporary_drawer$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const material_temporary_drawer = packages__angular_components__app_layout__material_temporary_drawer.app_layout__material_temporary_drawer;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const material_drawer_base$46template = packages__angular_components__app_layout__material_drawer_base$46template.app_layout__material_drawer_base$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const material_temporary_drawer$46scss$46css$46shim = packages__angular_components__app_layout__material_temporary_drawer$46scss$46css$46shim.app_layout__material_temporary_drawer$46scss$46css$46shim;
  var material_temporary_drawer$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MaterialTemporaryDrawerComponentL = () => (MaterialTemporaryDrawerComponentL = dart.constFn(dart.legacy(material_temporary_drawer.MaterialTemporaryDrawerComponent)))();
  var ComponentRefOfMaterialTemporaryDrawerComponentL = () => (ComponentRefOfMaterialTemporaryDrawerComponentL = dart.constFn(component_factory.ComponentRef$(MaterialTemporaryDrawerComponentL())))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var ComponentFactoryOfMaterialTemporaryDrawerComponentL = () => (ComponentFactoryOfMaterialTemporaryDrawerComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialTemporaryDrawerComponentL())))();
  var AppViewOfMaterialTemporaryDrawerComponentL = () => (AppViewOfMaterialTemporaryDrawerComponentL = dart.constFn(app_view.AppView$(MaterialTemporaryDrawerComponentL())))();
  var AppViewLOfMaterialTemporaryDrawerComponentL = () => (AppViewLOfMaterialTemporaryDrawerComponentL = dart.constFn(dart.legacy(AppViewOfMaterialTemporaryDrawerComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfMaterialTemporaryDrawerComponentL = () => (AppViewLAndintLToAppViewLOfMaterialTemporaryDrawerComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialTemporaryDrawerComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/app_layout/material_temporary_drawer.template.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(material_temporary_drawer$46template.viewFactory_MaterialTemporaryDrawerComponentHost0, AppViewLAndintLToAppViewLOfMaterialTemporaryDrawerComponentL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfMaterialTemporaryDrawerComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-drawer[temporary]"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _expr_0 = dart.privateName(material_temporary_drawer$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_temporary_drawer$46template, "_expr_1");
  var _handle_click_0_0 = dart.privateName(material_temporary_drawer$46template, "_handle_click_0_0");
  material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0 = class ViewMaterialTemporaryDrawerComponent0 extends app_view.AppView$(dart.legacy(material_temporary_drawer.MaterialTemporaryDrawerComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/app_layout/material_temporary_drawer.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "drawer-content");
      this.addShimC(_el_0);
      this.project(_el_0, 0);
      _el_0[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_click_0_0)));
      this.init0();
      _rootEl[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'toggle')));
    }
    [_handle_click_0_0]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.hostMatDrawerCollapsed;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "mat-drawer-collapsed", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.hostMatDrawerExpanded;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "mat-drawer-expanded", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    initComponentStyles() {
      let styles = material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._componentStyles;
      if (styles == null) {
        material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._componentStyles = styles = material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_temporary_drawer$46template.styles$MaterialTemporaryDrawerComponent, material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-drawer"));
  }).prototype = material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.prototype;
  dart.addTypeTests(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0);
  dart.addTypeCaches(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0);
  dart.setMethodSignature(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, () => ({
    __proto__: dart.getMethods(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.__proto__),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, L0);
  dart.setFieldSignature(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, () => ({
    __proto__: dart.getFields(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0, {
    /*material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_temporary_drawer$46template, "_compView_0");
  var _MaterialTemporaryDrawerComponent_0_5 = dart.privateName(material_temporary_drawer$46template, "_MaterialTemporaryDrawerComponent_0_5");
  material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0 = class _ViewMaterialTemporaryDrawerComponentHost0 extends app_view.AppView$(dart.legacy(material_temporary_drawer.MaterialTemporaryDrawerComponent)) {
    build() {
      this[_compView_0] = new material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTemporaryDrawerComponent_0_5] = new material_temporary_drawer.MaterialTemporaryDrawerComponent.new();
      this[_compView_0].create(this[_MaterialTemporaryDrawerComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialTemporaryDrawerComponentL()).new(0, this, this.rootEl, this[_MaterialTemporaryDrawerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(MaterialTemporaryDrawerComponentL()) || token === dart.wrapType(DeferredContentAwareL())) && 0 === nodeIndex) {
        return this[_MaterialTemporaryDrawerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTemporaryDrawerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTemporaryDrawerComponent_0_5] = null;
    material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.prototype;
  dart.addTypeTests(material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0);
  dart.addTypeCaches(material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0);
  dart.setMethodSignature(material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0, () => ({
    __proto__: dart.getMethods(material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0, L0);
  dart.setFieldSignature(material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0, () => ({
    __proto__: dart.getFields(material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0)),
    [_MaterialTemporaryDrawerComponent_0_5]: dart.fieldType(dart.legacy(material_temporary_drawer.MaterialTemporaryDrawerComponent))
  }));
  material_temporary_drawer$46template.viewFactory_MaterialTemporaryDrawerComponentHost0 = function viewFactory_MaterialTemporaryDrawerComponentHost0(parentView, parentIndex) {
    return new material_temporary_drawer$46template._ViewMaterialTemporaryDrawerComponentHost0.new(parentView, parentIndex);
  };
  material_temporary_drawer$46template.initReflector = function initReflector() {
    if (dart.test(material_temporary_drawer$46template._visited)) {
      return;
    }
    material_temporary_drawer$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialTemporaryDrawerComponentL()), material_temporary_drawer$46template.MaterialTemporaryDrawerComponentNgFactory);
    material_drawer_base$46template.initReflector();
    angular$46template.initReflector();
    deferred_content_aware$46template.initReflector();
  };
  dart.copyProperties(material_temporary_drawer$46template, {
    get MaterialTemporaryDrawerComponentNgFactory() {
      return material_temporary_drawer$46template._MaterialTemporaryDrawerComponentNgFactory;
    }
  });
  var C1;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C0;
  var C2;
  dart.defineLazy(material_temporary_drawer$46template, {
    /*material_temporary_drawer$46template.styles$MaterialTemporaryDrawerComponent*/get styles$MaterialTemporaryDrawerComponent() {
      return [material_temporary_drawer$46scss$46css$46shim.styles];
    },
    /*material_temporary_drawer$46template._MaterialTemporaryDrawerComponentNgFactory*/get _MaterialTemporaryDrawerComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*material_temporary_drawer$46template.styles$MaterialTemporaryDrawerComponentHost*/get styles$MaterialTemporaryDrawerComponentHost() {
      return C2 || CT.C2;
    },
    /*material_temporary_drawer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/app_layout/material_temporary_drawer.template", {
    "package:angular_components/app_layout/material_temporary_drawer.template.dart": material_temporary_drawer$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_temporary_drawer.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkCI,uBAAgB,2BAAY,2EAA2E;IACzG;;AAIQ,iBAAO;AACP,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AAC3D,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACP,MAA9C,AAAK,sBAAiB,KAAK,EAAE;AACd,MAAf,cAAS,KAAK;AACG,MAAjB,aAAQ,KAAK,EAAE;AACkD,MAAjE,AAAM,KAAD,oBAAkB,SAAS,iDAAc;AACvC,MAAP;AAC6D,MAA7D,AAAQ,OAAD,oBAAkB,SAAS,6BAAmB,UAAL,IAAI;IACtD;wBAEuB;AACG,MAAjB,WAAP;IACF;sBAE4B;AACpB,iBAAO;AACP,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACkC,QAA5E,sCAAkC,aAAQ,wBAAwB,SAAS;AACxD,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACiC,QAA3E,sCAAkC,aAAQ,uBAAuB,SAAS;AACvD,QAAnB,gBAAU,SAAS;;IAEvB;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC4H,QAA/I,8FAAoB,SAAU,8FAA2C,2CAAO,8EAAyC;;AAEpG,MAAxB,uBAAkB,MAAM;IAC1B;;6FAhDuD,YAAgB;IAHlE;IACA;AAEiF,wGAAuB,8BAAW,UAAU,EAAE,WAAW;AACxH,IAArB;AAC0D,kBAA1D,kBAAiB,AAAS,8BAAc;EAC1C;;;;;;;;;;;;;;MAJ+B,2FAAgB;;;;;;;;;AAiEe,MAA5D,oBAAc,mFAAsC,MAAM;AAC/B,MAA3B,cAAS,AAAY;AAC6D,MAAlF,8CAAgD;AACyB,MAAzE,AAAY,yBAAO,6CAAuC;AAC7C,MAAb,WAAM;AACN,YAAO,6DAAa,GAAG,MAAM,aAAQ;IACvC;wBAGoC,OAAW,WAAmB;AAChE,WAAM,AAAU,KAAK,KAAU,sDAAqC,AAAU,KAAK,KAAW,2CAA2B,AAAE,MAAG,SAAS;AACrI,cAAO;;AAET,YAAO,eAAc;IACvB;;AAIO,oBAAU;AACV,uBAAmB,AAAQ,iBAAG;AACnC,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEd,qBAA6B,+CAAmB,UAAU;AACR,QAAhD,AAAsC;;AAEC,MAAzC,AAAY,oCAAkB,UAAU;AACb,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;IACd;;kGApC4D,YAAgB;IAFtC;IACG;AACkD,6GAAuB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;;;;;sJAuClE,YAAgB;AACnI,UAAO,yFAA2C,UAAU,EAAE,WAAW;EAC3E;;AAIE,kBAAI;AACF;;AAEa,IAAf,gDAAW;AAE0F,IAArG,4BAAyB,oDAAkC;AACtC,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AA9DE,YAAO;IACT;;;;;;;;MA5DoB,4EAAuC;YAAG,EAAS;;MAyDN,+EAA0C;;;MAKvF,gFAA2C;;;MAgD3D,6CAAQ;YAAG","file":"material_temporary_drawer.template.ddc.js"}');
  // Exports:
  return {
    app_layout__material_temporary_drawer$46template: material_temporary_drawer$46template
  };
}));

//# sourceMappingURL=material_temporary_drawer.template.ddc.js.map
