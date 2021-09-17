define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/app_layout/material_stackable_drawer', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/angular.template', 'packages/angular_components/app_layout/material_temporary_drawer.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/app_layout/material_stackable_drawer.scss.css.shim'], (function load__packages__angular_components__app_layout__material_stackable_drawer_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__app_layout__material_stackable_drawer, packages__angular_components__content__deferred_content_aware, packages__angular__angular$46template, packages__angular_components__app_layout__material_temporary_drawer$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__app_layout__material_stackable_drawer$46scss$46css$46shim) {
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
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const material_stackable_drawer = packages__angular_components__app_layout__material_stackable_drawer.app_layout__material_stackable_drawer;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const material_temporary_drawer$46template = packages__angular_components__app_layout__material_temporary_drawer$46template.app_layout__material_temporary_drawer$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const material_stackable_drawer$46scss$46css$46shim = packages__angular_components__app_layout__material_stackable_drawer$46scss$46css$46shim.app_layout__material_stackable_drawer$46scss$46css$46shim;
  var material_stackable_drawer$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MaterialStackableDrawerComponentL = () => (MaterialStackableDrawerComponentL = dart.constFn(dart.legacy(material_stackable_drawer.MaterialStackableDrawerComponent)))();
  var VoidToMaterialStackableDrawerComponentL = () => (VoidToMaterialStackableDrawerComponentL = dart.constFn(dart.fnType(MaterialStackableDrawerComponentL(), [])))();
  var ComponentRefOfMaterialStackableDrawerComponentL = () => (ComponentRefOfMaterialStackableDrawerComponentL = dart.constFn(component_factory.ComponentRef$(MaterialStackableDrawerComponentL())))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var ComponentFactoryOfMaterialStackableDrawerComponentL = () => (ComponentFactoryOfMaterialStackableDrawerComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialStackableDrawerComponentL())))();
  var AppViewOfMaterialStackableDrawerComponentL = () => (AppViewOfMaterialStackableDrawerComponentL = dart.constFn(app_view.AppView$(MaterialStackableDrawerComponentL())))();
  var AppViewLOfMaterialStackableDrawerComponentL = () => (AppViewLOfMaterialStackableDrawerComponentL = dart.constFn(dart.legacy(AppViewOfMaterialStackableDrawerComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfMaterialStackableDrawerComponentL = () => (AppViewLAndintLToAppViewLOfMaterialStackableDrawerComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialStackableDrawerComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/app_layout/material_stackable_drawer.template.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(material_stackable_drawer$46template.viewFactory_MaterialStackableDrawerComponentHost0, AppViewLAndintLToAppViewLOfMaterialStackableDrawerComponentL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfMaterialStackableDrawerComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-drawer[stackable]"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _expr_0 = dart.privateName(material_stackable_drawer$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_stackable_drawer$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_stackable_drawer$46template, "_expr_2");
  var _el_0 = dart.privateName(material_stackable_drawer$46template, "_el_0");
  var _handle_click_0_0 = dart.privateName(material_stackable_drawer$46template, "_handle_click_0_0");
  material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0 = class ViewMaterialStackableDrawerComponent0 extends app_view.AppView$(dart.legacy(material_stackable_drawer.MaterialStackableDrawerComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/app_layout/material_stackable_drawer.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "drawer-content");
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 0);
      this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_click_0_0)));
      this.init0();
      _rootEl[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'toggle')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.isExpanded;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(this[_el_0], "drawer-content-expanded", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    [_handle_click_0_0]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.hostMatDrawerCollapsed;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "mat-drawer-collapsed", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.hostMatDrawerExpanded;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "mat-drawer-expanded", currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    initComponentStyles() {
      let styles = material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._componentStyles;
      if (styles == null) {
        material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._componentStyles = styles = material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_stackable_drawer$46template.styles$MaterialStackableDrawerComponent, material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-drawer"));
  }).prototype = material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.prototype;
  dart.addTypeTests(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0);
  dart.addTypeCaches(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0);
  dart.setMethodSignature(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, () => ({
    __proto__: dart.getMethods(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.__proto__),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, L0);
  dart.setFieldSignature(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, () => ({
    __proto__: dart.getFields(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0, {
    /*material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_stackable_drawer$46template, "_compView_0");
  var _MaterialStackableDrawerComponent_0_5 = dart.privateName(material_stackable_drawer$46template, "_MaterialStackableDrawerComponent_0_5");
  material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0 = class _ViewMaterialStackableDrawerComponentHost0 extends app_view.AppView$(dart.legacy(material_stackable_drawer.MaterialStackableDrawerComponent)) {
    build() {
      this[_compView_0] = new material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialStackableDrawerComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialStackableDrawerComponentL(), dart.wrapType(MaterialStackableDrawerComponentL()), dart.fn(() => new material_stackable_drawer.MaterialStackableDrawerComponent.new(MaterialStackableDrawerComponentL().as(this.injectorGetOptional(dart.wrapType(MaterialStackableDrawerComponentL()), this.viewData.parentIndex))), VoidToMaterialStackableDrawerComponentL())) : new material_stackable_drawer.MaterialStackableDrawerComponent.new(MaterialStackableDrawerComponentL().as(this.injectorGetOptional(dart.wrapType(MaterialStackableDrawerComponentL()), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialStackableDrawerComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialStackableDrawerComponentL()).new(0, this, this.rootEl, this[_MaterialStackableDrawerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(MaterialStackableDrawerComponentL()) || token === dart.wrapType(DeferredContentAwareL())) && 0 === nodeIndex) {
        return this[_MaterialStackableDrawerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialStackableDrawerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialStackableDrawerComponent_0_5] = null;
    material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.prototype;
  dart.addTypeTests(material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0);
  dart.addTypeCaches(material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0);
  dart.setMethodSignature(material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0, () => ({
    __proto__: dart.getMethods(material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0, L0);
  dart.setFieldSignature(material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0, () => ({
    __proto__: dart.getFields(material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_stackable_drawer$46template.ViewMaterialStackableDrawerComponent0)),
    [_MaterialStackableDrawerComponent_0_5]: dart.fieldType(dart.legacy(material_stackable_drawer.MaterialStackableDrawerComponent))
  }));
  material_stackable_drawer$46template.viewFactory_MaterialStackableDrawerComponentHost0 = function viewFactory_MaterialStackableDrawerComponentHost0(parentView, parentIndex) {
    return new material_stackable_drawer$46template._ViewMaterialStackableDrawerComponentHost0.new(parentView, parentIndex);
  };
  material_stackable_drawer$46template.initReflector = function initReflector() {
    if (dart.test(material_stackable_drawer$46template._visited)) {
      return;
    }
    material_stackable_drawer$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialStackableDrawerComponentL()), material_stackable_drawer$46template.MaterialStackableDrawerComponentNgFactory);
    angular$46template.initReflector();
    material_temporary_drawer$46template.initReflector();
    deferred_content_aware$46template.initReflector();
  };
  dart.copyProperties(material_stackable_drawer$46template, {
    get MaterialStackableDrawerComponentNgFactory() {
      return material_stackable_drawer$46template._MaterialStackableDrawerComponentNgFactory;
    }
  });
  var C1;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C0;
  var C2;
  dart.defineLazy(material_stackable_drawer$46template, {
    /*material_stackable_drawer$46template.styles$MaterialStackableDrawerComponent*/get styles$MaterialStackableDrawerComponent() {
      return [material_stackable_drawer$46scss$46css$46shim.styles];
    },
    /*material_stackable_drawer$46template._MaterialStackableDrawerComponentNgFactory*/get _MaterialStackableDrawerComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*material_stackable_drawer$46template.styles$MaterialStackableDrawerComponentHost*/get styles$MaterialStackableDrawerComponentHost() {
      return C2 || CT.C2;
    },
    /*material_stackable_drawer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/app_layout/material_stackable_drawer.template", {
    "package:angular_components/app_layout/material_stackable_drawer.template.dart": material_stackable_drawer$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_stackable_drawer.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqCI,uBAAgB,2BAAY,2EAA2E;IACzG;;AAIQ,iBAAO;AACP,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AAC3D,gBAAc;AAC4B,MAAhD,cAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACD,MAA9C,AAAK,sBAAiB,aAAO;AACd,MAAf,cAAS;AACQ,MAAjB,aAAQ,aAAO;AACkD,MAAjE,AAAM,+BAAiB,SAAS,iDAAc;AACvC,MAAP;AAC6D,MAA7D,AAAQ,OAAD,oBAAkB,SAAS,6BAAmB,UAAL,IAAI;IACtD;;AAIQ,iBAAO;AACP,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AAC6B,QAAvE,+BAA2B,aAAO,2BAA2B,SAAS;AACnD,QAAnB,gBAAU,SAAS;;IAEvB;wBAEuB;AACG,MAAjB,WAAP;IACF;sBAE4B;AACpB,iBAAO;AACP,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACkC,QAA5E,sCAAkC,aAAQ,wBAAwB,SAAS;AACxD,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACiC,QAA3E,sCAAkC,aAAQ,uBAAuB,SAAS;AACvD,QAAnB,gBAAU,SAAS;;IAEvB;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC4H,QAA/I,8FAAoB,SAAU,8FAA2C,2CAAO,8EAAyC;;AAEpG,MAAxB,uBAAkB,MAAM;IAC1B;;6FA1DuD,YAAgB;IALlE;IACA;IACA;IACc;AAEmE,wGAAuB,8BAAW,UAAU,EAAE,WAAW;AACxH,IAArB;AAC0D,kBAA1D,kBAAiB,AAAS,8BAAc;EAC1C;;;;;;;;;;;;;;;;MAJ+B,2FAAgB;;;;;;;;;AA2Ee,MAA5D,oBAAc,mFAAsC,MAAM;AAC/B,MAA3B,cAAS,AAAY;AAKoH,MAJzI,wDAAiD,2BAC3C,8DAAmC,oDAAkC,cACpD,0GAAiC,AAAK,yBAA4B,oDAAkC,AAAS,4EAEtH,0GAAiC,AAAK,yBAA4B,oDAAkC,AAAS;AAClD,MAAzE,AAAY,yBAAO,6CAAuC;AAC7C,MAAb,WAAM;AACN,YAAO,6DAAa,GAAG,MAAM,aAAQ;IACvC;wBAGoC,OAAW,WAAmB;AAChE,WAAM,AAAU,KAAK,KAAU,sDAAqC,AAAU,KAAK,KAAW,2CAA2B,AAAE,MAAG,SAAS;AACrI,cAAO;;AAET,YAAO,eAAc;IACvB;;AAIO,uBAAmB,AAAQ,iBAAG;AACnC,qBAA6B,+CAAmB,UAAU;AACR,QAAhD,AAAsC;;AAEC,MAAzC,AAAY,oCAAkB,UAAU;AACb,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;IACd;;kGApC4D,YAAgB;IAFtC;IACG;AACkD,6GAAuB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;;;;;sJAuClE,YAAgB;AACnI,UAAO,yFAA2C,UAAU,EAAE,WAAW;EAC3E;;AAIE,kBAAI;AACF;;AAEa,IAAf,gDAAW;AAE0F,IAArG,4BAAyB,oDAAkC;AACtC,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AA9DE,YAAO;IACT;;;;;;;;MAxEoB,4EAAuC;YAAG,EAAS;;MAqEN,+EAA0C;;;MAKvF,gFAA2C;;;MAgD3D,6CAAQ;YAAG","file":"material_stackable_drawer.template.ddc.js"}');
  // Exports:
  return {
    app_layout__material_stackable_drawer$46template: material_stackable_drawer$46template
  };
}));

//# sourceMappingURL=material_stackable_drawer.template.ddc.js.map
