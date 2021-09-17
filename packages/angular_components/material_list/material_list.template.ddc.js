define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_list/material_list', 'packages/angular_components/material_list/material_list_size.template', 'packages/angular/angular.template', 'packages/angular_components/model/ui/accepts_width.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/material_list/material_list.scss.css.shim'], (function load__packages__angular_components__material_list__material_list_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_list__material_list, packages__angular_components__material_list__material_list_size$46template, packages__angular__angular$46template, packages__angular_components__model__ui__accepts_width$46template, packages__angular_components__utils__angular__properties__properties$46template, packages__angular_components__material_list__material_list$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const material_list = packages__angular_components__material_list__material_list.material_list__material_list;
  const material_list_size$46template = packages__angular_components__material_list__material_list_size$46template.material_list__material_list_size$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const accepts_width$46template = packages__angular_components__model__ui__accepts_width$46template.model__ui__accepts_width$46template;
  const properties$46template = packages__angular_components__utils__angular__properties__properties$46template.utils__angular__properties__properties$46template;
  const material_list$46scss$46css$46shim = packages__angular_components__material_list__material_list$46scss$46css$46shim.material_list__material_list$46scss$46css$46shim;
  var material_list$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var MaterialListComponentL = () => (MaterialListComponentL = dart.constFn(dart.legacy(material_list.MaterialListComponent)))();
  var ComponentRefOfMaterialListComponentL = () => (ComponentRefOfMaterialListComponentL = dart.constFn(component_factory.ComponentRef$(MaterialListComponentL())))();
  var ComponentFactoryOfMaterialListComponentL = () => (ComponentFactoryOfMaterialListComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialListComponentL())))();
  var AppViewOfMaterialListComponentL = () => (AppViewOfMaterialListComponentL = dart.constFn(app_view.AppView$(MaterialListComponentL())))();
  var AppViewLOfMaterialListComponentL = () => (AppViewLOfMaterialListComponentL = dart.constFn(dart.legacy(AppViewOfMaterialListComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfMaterialListComponentL = () => (AppViewLAndintLToAppViewLOfMaterialListComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialListComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_list/material_list.template.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(material_list$46template.viewFactory_MaterialListComponentHost0, AppViewLAndintLToAppViewLOfMaterialListComponentL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfMaterialListComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-list"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _expr_0 = dart.privateName(material_list$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_list$46template, "_expr_1");
  material_list$46template.ViewMaterialListComponent0 = class ViewMaterialListComponent0 extends app_view.AppView$(dart.legacy(material_list.MaterialListComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_list/material_list.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this.project(parentRenderNode, 0);
      this.init0();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.size;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(this.rootEl, "size", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.role;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this.rootEl, "role", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    initComponentStyles() {
      let styles = material_list$46template.ViewMaterialListComponent0._componentStyles;
      if (styles == null) {
        material_list$46template.ViewMaterialListComponent0._componentStyles = styles = material_list$46template.ViewMaterialListComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_list$46template.styles$MaterialListComponent, material_list$46template.ViewMaterialListComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_list$46template.ViewMaterialListComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_list$46template.ViewMaterialListComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-list"));
  }).prototype = material_list$46template.ViewMaterialListComponent0.prototype;
  dart.addTypeTests(material_list$46template.ViewMaterialListComponent0);
  dart.addTypeCaches(material_list$46template.ViewMaterialListComponent0);
  dart.setLibraryUri(material_list$46template.ViewMaterialListComponent0, L0);
  dart.setFieldSignature(material_list$46template.ViewMaterialListComponent0, () => ({
    __proto__: dart.getFields(material_list$46template.ViewMaterialListComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_list$46template.ViewMaterialListComponent0, {
    /*material_list$46template.ViewMaterialListComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_list$46template, "_compView_0");
  var _MaterialListComponent_0_5 = dart.privateName(material_list$46template, "_MaterialListComponent_0_5");
  material_list$46template._ViewMaterialListComponentHost0 = class _ViewMaterialListComponentHost0 extends app_view.AppView$(dart.legacy(material_list.MaterialListComponent)) {
    build() {
      this[_compView_0] = new material_list$46template.ViewMaterialListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialListComponent_0_5] = new material_list.MaterialListComponent.new();
      this[_compView_0].create(this[_MaterialListComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialListComponentL()).new(0, this, this.rootEl, this[_MaterialListComponent_0_5]);
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
  (material_list$46template._ViewMaterialListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialListComponent_0_5] = null;
    material_list$46template._ViewMaterialListComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_list$46template._ViewMaterialListComponentHost0.prototype;
  dart.addTypeTests(material_list$46template._ViewMaterialListComponentHost0);
  dart.addTypeCaches(material_list$46template._ViewMaterialListComponentHost0);
  dart.setLibraryUri(material_list$46template._ViewMaterialListComponentHost0, L0);
  dart.setFieldSignature(material_list$46template._ViewMaterialListComponentHost0, () => ({
    __proto__: dart.getFields(material_list$46template._ViewMaterialListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_list$46template.ViewMaterialListComponent0)),
    [_MaterialListComponent_0_5]: dart.fieldType(dart.legacy(material_list.MaterialListComponent))
  }));
  material_list$46template.viewFactory_MaterialListComponentHost0 = function viewFactory_MaterialListComponentHost0(parentView, parentIndex) {
    return new material_list$46template._ViewMaterialListComponentHost0.new(parentView, parentIndex);
  };
  material_list$46template.initReflector = function initReflector() {
    if (dart.test(material_list$46template._visited)) {
      return;
    }
    material_list$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialListComponentL()), material_list$46template.MaterialListComponentNgFactory);
    material_list_size$46template.initReflector();
    material_list_size$46template.initReflector();
    angular$46template.initReflector();
    accepts_width$46template.initReflector();
    properties$46template.initReflector();
  };
  dart.copyProperties(material_list$46template, {
    get MaterialListComponentNgFactory() {
      return material_list$46template._MaterialListComponentNgFactory;
    }
  });
  var C1;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C0;
  var C2;
  dart.defineLazy(material_list$46template, {
    /*material_list$46template.styles$MaterialListComponent*/get styles$MaterialListComponent() {
      return [material_list$46scss$46css$46shim.styles];
    },
    /*material_list$46template._MaterialListComponentNgFactory*/get _MaterialListComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*material_list$46template.styles$MaterialListComponentHost*/get styles$MaterialListComponentHost() {
      return C2 || CT.C2;
    },
    /*material_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_list/material_list.template", {
    "package:angular_components/material_list/material_list.template.dart": material_list$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_list.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmCI,uBAAgB,2BAAY,kEAAkE;IAChG;;AAIQ,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AACrC,MAA5B,aAAQ,gBAAgB,EAAE;AACnB,MAAP;IACF;sBAE4B;AACpB,iBAAO;AACP,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAqB,eAAS,SAAS;AACU,QAAnD,4BAAyB,aAAQ,QAAQ,SAAS;AAC/B,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAqB,eAAS,SAAS;AACU,QAAnD,4BAAyB,aAAQ,QAAQ,SAAS;AAC/B,QAAnB,gBAAU,SAAS;;IAEvB;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACiH,QAApI,uEAAoB,SAAU,uEAA2C,2CAAO,uDAA8B;;AAEzF,MAAxB,uBAAkB,MAAM;IAC1B;;sEArC4C,YAAgB;IAHxD;IACA;AAEuE,iFAAuB,8BAAW,UAAU,EAAE,WAAW;AAC7G,IAArB;AACwD,kBAAxD,kBAAiB,AAAS,8BAAc;EAC1C;;;;;;;;;;MAJ+B,oEAAgB;;;;;;;;;AAsDI,MAAjD,oBAAc,4DAA2B,MAAM;AACpB,MAA3B,cAAS,AAAY;AACuC,MAA5D,mCAAqC;AACyB,MAA9D,AAAY,yBAAO,kCAA4B;AAClC,MAAb,WAAM;AACN,YAAO,kDAAa,GAAG,MAAM,aAAQ;IACvC;;AAIO,oBAAU;AACV,uBAAmB,AAAQ,iBAAG;AACnC,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAE2B,MAAzC,AAAY,oCAAkB,UAAU;AACb,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;IACd;;2EAzBiD,YAAgB;IAFtC;IACG;AACkD,sFAAuB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;oHA4B7E,YAAgB;AAC7G,UAAO,kEAAgC,UAAU,EAAE,WAAW;EAChE;;AAIE,kBAAI;AACF;;AAEa,IAAf,oCAAW;AAEoE,IAA/E,4BAAyB,yCAAuB;AAC3B,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AArDE,YAAO;IACT;;;;;;;;MAjDoB,qDAA4B;YAAG,EAAS;;MA8CN,wDAA+B;;;MAKjE,yDAAgC;;;MAqChD,iCAAQ;YAAG","file":"material_list.template.ddc.js"}');
  // Exports:
  return {
    material_list__material_list$46template: material_list$46template
  };
}));

//# sourceMappingURL=material_list.template.ddc.js.map
