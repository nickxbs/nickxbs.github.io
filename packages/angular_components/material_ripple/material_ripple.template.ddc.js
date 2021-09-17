define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template', 'packages/angular_components/utils/color/material.template', 'packages/angular_components/material_ripple/material_ripple.scss.css'], (function load__packages__angular_components__material_ripple__material_ripple_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_ripple__material_ripple, packages__angular__angular$46template, packages__angular_components__utils__browser__events__events$46template, packages__angular_components__utils__browser__feature_detector__feature_detector$46template, packages__angular_components__utils__color__material$46template, packages__angular_components__material_ripple__material_ripple$46scss$46css) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const material_ripple = packages__angular_components__material_ripple__material_ripple.material_ripple__material_ripple;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  const feature_detector$46template = packages__angular_components__utils__browser__feature_detector__feature_detector$46template.utils__browser__feature_detector__feature_detector$46template;
  const material$46template = packages__angular_components__utils__color__material$46template.utils__color__material$46template;
  const material_ripple$46scss$46css = packages__angular_components__material_ripple__material_ripple$46scss$46css.material_ripple__material_ripple$46scss$46css;
  var material_ripple$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var MaterialRippleComponentL = () => (MaterialRippleComponentL = dart.constFn(dart.legacy(material_ripple.MaterialRippleComponent)))();
  var ComponentRefOfMaterialRippleComponentL = () => (ComponentRefOfMaterialRippleComponentL = dart.constFn(component_factory.ComponentRef$(MaterialRippleComponentL())))();
  var ComponentFactoryOfMaterialRippleComponentL = () => (ComponentFactoryOfMaterialRippleComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialRippleComponentL())))();
  var AppViewOfMaterialRippleComponentL = () => (AppViewOfMaterialRippleComponentL = dart.constFn(app_view.AppView$(MaterialRippleComponentL())))();
  var AppViewLOfMaterialRippleComponentL = () => (AppViewLOfMaterialRippleComponentL = dart.constFn(dart.legacy(AppViewOfMaterialRippleComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfMaterialRippleComponentL = () => (AppViewLAndintLToAppViewLOfMaterialRippleComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialRippleComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_ripple/material_ripple.template.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(material_ripple$46template.viewFactory_MaterialRippleComponentHost0, AppViewLAndintLToAppViewLOfMaterialRippleComponentL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfMaterialRippleComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-ripple"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  }, false);
  material_ripple$46template.ViewMaterialRippleComponent0 = class ViewMaterialRippleComponent0 extends app_view.AppView$(dart.legacy(material_ripple.MaterialRippleComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_ripple/material_ripple.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this.init0();
    }
    initComponentStyles() {
      let styles = material_ripple$46template.ViewMaterialRippleComponent0._componentStyles;
      if (styles == null) {
        material_ripple$46template.ViewMaterialRippleComponent0._componentStyles = styles = material_ripple$46template.ViewMaterialRippleComponent0._componentStyles = new style_encapsulation._UnscopedComponentStyles.new(material_ripple$46template.styles$MaterialRippleComponent, material_ripple$46template.ViewMaterialRippleComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_ripple$46template.ViewMaterialRippleComponent0.new = function(parentView, parentIndex) {
    material_ripple$46template.ViewMaterialRippleComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-ripple"));
  }).prototype = material_ripple$46template.ViewMaterialRippleComponent0.prototype;
  dart.addTypeTests(material_ripple$46template.ViewMaterialRippleComponent0);
  dart.addTypeCaches(material_ripple$46template.ViewMaterialRippleComponent0);
  dart.setLibraryUri(material_ripple$46template.ViewMaterialRippleComponent0, L0);
  dart.defineLazy(material_ripple$46template.ViewMaterialRippleComponent0, {
    /*material_ripple$46template.ViewMaterialRippleComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_ripple$46template, "_compView_0");
  var _MaterialRippleComponent_0_5 = dart.privateName(material_ripple$46template, "_MaterialRippleComponent_0_5");
  material_ripple$46template._ViewMaterialRippleComponentHost0 = class _ViewMaterialRippleComponentHost0 extends app_view.AppView$(dart.legacy(material_ripple.MaterialRippleComponent)) {
    build() {
      this[_compView_0] = new material_ripple$46template.ViewMaterialRippleComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialRippleComponent_0_5] = new material_ripple.MaterialRippleComponent.new(this.rootEl);
      this[_compView_0].create(this[_MaterialRippleComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialRippleComponentL()).new(0, this, this.rootEl, this[_MaterialRippleComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
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
  (material_ripple$46template._ViewMaterialRippleComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialRippleComponent_0_5] = null;
    material_ripple$46template._ViewMaterialRippleComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_ripple$46template._ViewMaterialRippleComponentHost0.prototype;
  dart.addTypeTests(material_ripple$46template._ViewMaterialRippleComponentHost0);
  dart.addTypeCaches(material_ripple$46template._ViewMaterialRippleComponentHost0);
  dart.setLibraryUri(material_ripple$46template._ViewMaterialRippleComponentHost0, L0);
  dart.setFieldSignature(material_ripple$46template._ViewMaterialRippleComponentHost0, () => ({
    __proto__: dart.getFields(material_ripple$46template._ViewMaterialRippleComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_ripple$46template.ViewMaterialRippleComponent0)),
    [_MaterialRippleComponent_0_5]: dart.fieldType(dart.legacy(material_ripple.MaterialRippleComponent))
  }));
  material_ripple$46template.viewFactory_MaterialRippleComponentHost0 = function viewFactory_MaterialRippleComponentHost0(parentView, parentIndex) {
    return new material_ripple$46template._ViewMaterialRippleComponentHost0.new(parentView, parentIndex);
  };
  material_ripple$46template.initReflector = function initReflector() {
    if (dart.test(material_ripple$46template._visited)) {
      return;
    }
    material_ripple$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialRippleComponentL()), material_ripple$46template.MaterialRippleComponentNgFactory);
    angular$46template.initReflector();
    events$46template.initReflector();
    feature_detector$46template.initReflector();
    material$46template.initReflector();
  };
  dart.copyProperties(material_ripple$46template, {
    get MaterialRippleComponentNgFactory() {
      return material_ripple$46template._MaterialRippleComponentNgFactory;
    }
  });
  var C1;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C0;
  var C2;
  dart.defineLazy(material_ripple$46template, {
    /*material_ripple$46template.styles$MaterialRippleComponent*/get styles$MaterialRippleComponent() {
      return [material_ripple$46scss$46css.styles];
    },
    /*material_ripple$46template._MaterialRippleComponentNgFactory*/get _MaterialRippleComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*material_ripple$46template.styles$MaterialRippleComponentHost*/get styles$MaterialRippleComponentHost() {
      return C2 || CT.C2;
    },
    /*material_ripple$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_ripple/material_ripple.template", {
    "package:angular_components/material_ripple/material_ripple.template.dart": material_ripple$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_ripple.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8BI,uBAAgB,2BAAY,sEAAsE;IACpG;;AAIQ,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AAC1D,MAAP;IACF;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACqH,QAAxI,2EAAoB,SAAU,2EAA2C,qDAAS,2DAAgC;;AAE7F,MAAxB,uBAAkB,MAAM;IAC1B;;0EAtB8C,YAAgB;AAAe,qFAAuB,8BAAW,UAAU,EAAE,WAAW;AAC/G,IAArB;AAC0D,kBAA1D,kBAAiB,AAAS,8BAAc;EAC1C;;;;;MAJ+B,wEAAgB;;;;;;;;;AAuCM,MAAnD,oBAAc,gEAA6B,MAAM;AACtB,MAA3B,cAAS,AAAY;AACiD,MAAtE,qCAAuC,gDAAwB;AACC,MAAhE,AAAY,yBAAO,oCAA8B;AACpC,MAAb,WAAM;AACN,YAAO,oDAAa,GAAG,MAAM,aAAQ;IACvC;;AAIO,oBAAU;AACf,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEa,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;AAC8B,MAA1C,AAA6B;IAC/B;;+EAxBmD,YAAgB;IAFtC;IACG;AACkD,0FAAuB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;0HA2B3E,YAAgB;AACjH,UAAO,sEAAkC,UAAU,EAAE,WAAW;EAClE;;AAIE,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAEwE,IAAnF,4BAAyB,2CAAyB;AAC7B,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AAnDE,YAAO;IACT;;;;;;;;MAhCoB,yDAA8B;YAAG,EAAS;;MA6BN,4DAAiC;;;MAKrE,6DAAkC;;;MAoClD,mCAAQ;YAAG","file":"material_ripple.template.ddc.js"}');
  // Exports:
  return {
    material_ripple__material_ripple$46template: material_ripple$46template
  };
}));

//# sourceMappingURL=material_ripple.template.ddc.js.map
