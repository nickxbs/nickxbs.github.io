define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_spinner/material_spinner', 'packages/angular/angular.template', 'packages/angular_components/material_spinner/material_spinner.scss.css.shim'], (function load__packages__angular_components__material_spinner__material_spinner_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_spinner__material_spinner, packages__angular__angular$46template, packages__angular_components__material_spinner__material_spinner$46scss$46css$46shim) {
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
  const material_spinner = packages__angular_components__material_spinner__material_spinner.material_spinner__material_spinner;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const material_spinner$46scss$46css$46shim = packages__angular_components__material_spinner__material_spinner$46scss$46css$46shim.material_spinner__material_spinner$46scss$46css$46shim;
  var material_spinner$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var MaterialSpinnerComponentL = () => (MaterialSpinnerComponentL = dart.constFn(dart.legacy(material_spinner.MaterialSpinnerComponent)))();
  var ComponentRefOfMaterialSpinnerComponentL = () => (ComponentRefOfMaterialSpinnerComponentL = dart.constFn(component_factory.ComponentRef$(MaterialSpinnerComponentL())))();
  var ComponentFactoryOfMaterialSpinnerComponentL = () => (ComponentFactoryOfMaterialSpinnerComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialSpinnerComponentL())))();
  var AppViewOfMaterialSpinnerComponentL = () => (AppViewOfMaterialSpinnerComponentL = dart.constFn(app_view.AppView$(MaterialSpinnerComponentL())))();
  var AppViewLOfMaterialSpinnerComponentL = () => (AppViewLOfMaterialSpinnerComponentL = dart.constFn(dart.legacy(AppViewOfMaterialSpinnerComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfMaterialSpinnerComponentL = () => (AppViewLAndintLToAppViewLOfMaterialSpinnerComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialSpinnerComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_spinner/material_spinner.template.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(material_spinner$46template.viewFactory_MaterialSpinnerComponentHost0, AppViewLAndintLToAppViewLOfMaterialSpinnerComponentL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfMaterialSpinnerComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-spinner"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  }, false);
  material_spinner$46template.ViewMaterialSpinnerComponent0 = class ViewMaterialSpinnerComponent0 extends app_view.AppView$(dart.legacy(material_spinner.MaterialSpinnerComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_spinner/material_spinner.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "spinner");
      this.addShimC(_el_0);
      let _el_1 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "circle left");
      this.addShimC(_el_1);
      let _el_2 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_2, "circle right");
      this.addShimC(_el_2);
      let _el_3 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_3, "circle gap");
      this.addShimC(_el_3);
      this.init0();
    }
    initComponentStyles() {
      let styles = material_spinner$46template.ViewMaterialSpinnerComponent0._componentStyles;
      if (styles == null) {
        material_spinner$46template.ViewMaterialSpinnerComponent0._componentStyles = styles = material_spinner$46template.ViewMaterialSpinnerComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_spinner$46template.styles$MaterialSpinnerComponent, material_spinner$46template.ViewMaterialSpinnerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_spinner$46template.ViewMaterialSpinnerComponent0.new = function(parentView, parentIndex) {
    material_spinner$46template.ViewMaterialSpinnerComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-spinner"));
  }).prototype = material_spinner$46template.ViewMaterialSpinnerComponent0.prototype;
  dart.addTypeTests(material_spinner$46template.ViewMaterialSpinnerComponent0);
  dart.addTypeCaches(material_spinner$46template.ViewMaterialSpinnerComponent0);
  dart.setLibraryUri(material_spinner$46template.ViewMaterialSpinnerComponent0, L0);
  dart.defineLazy(material_spinner$46template.ViewMaterialSpinnerComponent0, {
    /*material_spinner$46template.ViewMaterialSpinnerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_spinner$46template, "_compView_0");
  var _MaterialSpinnerComponent_0_5 = dart.privateName(material_spinner$46template, "_MaterialSpinnerComponent_0_5");
  material_spinner$46template._ViewMaterialSpinnerComponentHost0 = class _ViewMaterialSpinnerComponentHost0 extends app_view.AppView$(dart.legacy(material_spinner.MaterialSpinnerComponent)) {
    build() {
      this[_compView_0] = new material_spinner$46template.ViewMaterialSpinnerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialSpinnerComponent_0_5] = new material_spinner.MaterialSpinnerComponent.new();
      this[_compView_0].create(this[_MaterialSpinnerComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialSpinnerComponentL()).new(0, this, this.rootEl, this[_MaterialSpinnerComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_spinner$46template._ViewMaterialSpinnerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialSpinnerComponent_0_5] = null;
    material_spinner$46template._ViewMaterialSpinnerComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_spinner$46template._ViewMaterialSpinnerComponentHost0.prototype;
  dart.addTypeTests(material_spinner$46template._ViewMaterialSpinnerComponentHost0);
  dart.addTypeCaches(material_spinner$46template._ViewMaterialSpinnerComponentHost0);
  dart.setLibraryUri(material_spinner$46template._ViewMaterialSpinnerComponentHost0, L0);
  dart.setFieldSignature(material_spinner$46template._ViewMaterialSpinnerComponentHost0, () => ({
    __proto__: dart.getFields(material_spinner$46template._ViewMaterialSpinnerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_spinner$46template.ViewMaterialSpinnerComponent0)),
    [_MaterialSpinnerComponent_0_5]: dart.fieldType(dart.legacy(material_spinner.MaterialSpinnerComponent))
  }));
  material_spinner$46template.viewFactory_MaterialSpinnerComponentHost0 = function viewFactory_MaterialSpinnerComponentHost0(parentView, parentIndex) {
    return new material_spinner$46template._ViewMaterialSpinnerComponentHost0.new(parentView, parentIndex);
  };
  material_spinner$46template.initReflector = function initReflector() {
    if (dart.test(material_spinner$46template._visited)) {
      return;
    }
    material_spinner$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialSpinnerComponentL()), material_spinner$46template.MaterialSpinnerComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.copyProperties(material_spinner$46template, {
    get MaterialSpinnerComponentNgFactory() {
      return material_spinner$46template._MaterialSpinnerComponentNgFactory;
    }
  });
  var C1;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C0;
  var C2;
  dart.defineLazy(material_spinner$46template, {
    /*material_spinner$46template.styles$MaterialSpinnerComponent*/get styles$MaterialSpinnerComponent() {
      return [material_spinner$46scss$46css$46shim.styles];
    },
    /*material_spinner$46template._MaterialSpinnerComponentNgFactory*/get _MaterialSpinnerComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*material_spinner$46template.styles$MaterialSpinnerComponentHost*/get styles$MaterialSpinnerComponentHost() {
      return C2 || CT.C2;
    },
    /*material_spinner$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_spinner/material_spinner.template", {
    "package:angular_components/material_spinner/material_spinner.template.dart": material_spinner$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_spinner.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4BI,uBAAgB,2BAAY,wEAAwE;IACtG;;AAIQ,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AAC3D,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACd,MAAvC,AAAK,sBAAiB,KAAK,EAAE;AACd,MAAf,cAAS,KAAK;AACR,kBAAQ,sBAAkB,GAAG,EAAE,KAAK;AACC,MAA3C,AAAK,sBAAiB,KAAK,EAAE;AACd,MAAf,cAAS,KAAK;AACR,kBAAQ,sBAAkB,GAAG,EAAE,KAAK;AACE,MAA5C,AAAK,sBAAiB,KAAK,EAAE;AACd,MAAf,cAAS,KAAK;AACR,kBAAQ,sBAAkB,GAAG,EAAE,KAAK;AACA,MAA1C,AAAK,sBAAiB,KAAK,EAAE;AACd,MAAf,cAAS,KAAK;AACP,MAAP;IACF;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACoH,QAAvI,6EAAoB,SAAU,6EAA2C,2CAAO,6DAAiC;;AAE5F,MAAxB,uBAAkB,MAAM;IAC1B;;4EAnC+C,YAAgB;AAAe,uFAAuB,8BAAW,UAAU,EAAE,WAAW;AAChH,IAArB;AAC2D,kBAA3D,kBAAiB,AAAS,8BAAc;EAC1C;;;;;MAJ+B,0EAAgB;;;;;;;;;AAoDO,MAApD,oBAAc,kEAA8B,MAAM;AACvB,MAA3B,cAAS,AAAY;AAC6C,MAAlE,sCAAwC;AACyB,MAAjE,AAAY,yBAAO,qCAA+B;AACrC,MAAb,WAAM;AACN,YAAO,qDAAa,GAAG,MAAM,aAAQ;IACvC;;AAI6B,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;IACd;;iFAnBoD,YAAgB;IAFtC;IACG;AACkD,4FAAuB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;6HAsB1E,YAAgB;AACnH,UAAO,wEAAmC,UAAU,EAAE,WAAW;EACnE;;AAIE,kBAAI;AACF;;AAEa,IAAf,uCAAW;AAE0E,IAArF,4BAAyB,4CAA0B;AAC9B,IAArB;EACF;;;AA3CE,YAAO;IACT;;;;;;;;MA7CoB,2DAA+B;YAAG,EAAS;;MA0CN,8DAAkC;;;MAKvE,+DAAmC;;;MA+BnD,oCAAQ;YAAG","file":"material_spinner.template.ddc.js"}');
  // Exports:
  return {
    material_spinner__material_spinner$46template: material_spinner$46template
  };
}));

//# sourceMappingURL=material_spinner.template.ddc.js.map
