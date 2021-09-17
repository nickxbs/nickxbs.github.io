define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_icon/material_icon', 'packages/angular/angular.template', 'packages/angular_components/model/ui/icon.template', 'packages/angular_components/material_icon/material_icon.scss.css.shim'], (function load__packages__angular_components__material_icon__material_icon_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular__src__runtime__interpolate, packages__angular_components__material_icon__material_icon, packages__angular__angular$46template, packages__angular_components__model__ui__icon$46template, packages__angular_components__material_icon__material_icon$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const icon$46template = packages__angular_components__model__ui__icon$46template.model__ui__icon$46template;
  const material_icon$46scss$46css$46shim = packages__angular_components__material_icon__material_icon$46scss$46css$46shim.material_icon__material_icon$46scss$46css$46shim;
  var material_icon$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var MaterialIconComponentL = () => (MaterialIconComponentL = dart.constFn(dart.legacy(material_icon.MaterialIconComponent)))();
  var ComponentRefOfMaterialIconComponentL = () => (ComponentRefOfMaterialIconComponentL = dart.constFn(component_factory.ComponentRef$(MaterialIconComponentL())))();
  var ComponentFactoryOfMaterialIconComponentL = () => (ComponentFactoryOfMaterialIconComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialIconComponentL())))();
  var AppViewOfMaterialIconComponentL = () => (AppViewOfMaterialIconComponentL = dart.constFn(app_view.AppView$(MaterialIconComponentL())))();
  var AppViewLOfMaterialIconComponentL = () => (AppViewLOfMaterialIconComponentL = dart.constFn(dart.legacy(AppViewOfMaterialIconComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfMaterialIconComponentL = () => (AppViewLAndintLToAppViewLOfMaterialIconComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialIconComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_icon/material_icon.template.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(material_icon$46template.viewFactory_MaterialIconComponentHost0, AppViewLAndintLToAppViewLOfMaterialIconComponentL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfMaterialIconComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-icon"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _textBinding_2 = dart.privateName(material_icon$46template, "_textBinding_2");
  material_icon$46template.ViewMaterialIconComponent0 = class ViewMaterialIconComponent0 extends app_view.AppView$(dart.legacy(material_icon.MaterialIconComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_icon/material_icon.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      let doc = html.document;
      let _el_1 = dom_helpers.appendElement(doc, parentRenderNode, "i");
      dom_helpers.setAttribute(_el_1, "aria-hidden", "true");
      this.updateChildClass(HtmlElementL().as(_el_1), "material-icon-i material-icons");
      this.addShimE(_el_1);
      _el_1[$append](this[_textBinding_2].element);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_2].updateText(interpolate.interpolateString0(_ctx.iconName));
    }
    initComponentStyles() {
      let styles = material_icon$46template.ViewMaterialIconComponent0._componentStyles;
      if (styles == null) {
        material_icon$46template.ViewMaterialIconComponent0._componentStyles = styles = material_icon$46template.ViewMaterialIconComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_icon$46template.styles$MaterialIconComponent, material_icon$46template.ViewMaterialIconComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_icon$46template.ViewMaterialIconComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    material_icon$46template.ViewMaterialIconComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-icon"));
  }).prototype = material_icon$46template.ViewMaterialIconComponent0.prototype;
  dart.addTypeTests(material_icon$46template.ViewMaterialIconComponent0);
  dart.addTypeCaches(material_icon$46template.ViewMaterialIconComponent0);
  dart.setLibraryUri(material_icon$46template.ViewMaterialIconComponent0, L0);
  dart.setFieldSignature(material_icon$46template.ViewMaterialIconComponent0, () => ({
    __proto__: dart.getFields(material_icon$46template.ViewMaterialIconComponent0.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  dart.defineLazy(material_icon$46template.ViewMaterialIconComponent0, {
    /*material_icon$46template.ViewMaterialIconComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_icon$46template, "_compView_0");
  var _MaterialIconComponent_0_5 = dart.privateName(material_icon$46template, "_MaterialIconComponent_0_5");
  material_icon$46template._ViewMaterialIconComponentHost0 = class _ViewMaterialIconComponentHost0 extends app_view.AppView$(dart.legacy(material_icon.MaterialIconComponent)) {
    build() {
      this[_compView_0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(this.rootEl);
      this[_compView_0].create(this[_MaterialIconComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialIconComponentL()).new(0, this, this.rootEl, this[_MaterialIconComponent_0_5]);
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
    }
  };
  (material_icon$46template._ViewMaterialIconComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    material_icon$46template._ViewMaterialIconComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_icon$46template._ViewMaterialIconComponentHost0.prototype;
  dart.addTypeTests(material_icon$46template._ViewMaterialIconComponentHost0);
  dart.addTypeCaches(material_icon$46template._ViewMaterialIconComponentHost0);
  dart.setLibraryUri(material_icon$46template._ViewMaterialIconComponentHost0, L0);
  dart.setFieldSignature(material_icon$46template._ViewMaterialIconComponentHost0, () => ({
    __proto__: dart.getFields(material_icon$46template._ViewMaterialIconComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_0_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent))
  }));
  material_icon$46template.viewFactory_MaterialIconComponentHost0 = function viewFactory_MaterialIconComponentHost0(parentView, parentIndex) {
    return new material_icon$46template._ViewMaterialIconComponentHost0.new(parentView, parentIndex);
  };
  material_icon$46template.initReflector = function initReflector() {
    if (dart.test(material_icon$46template._visited)) {
      return;
    }
    material_icon$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialIconComponentL()), material_icon$46template.MaterialIconComponentNgFactory);
    angular$46template.initReflector();
    icon$46template.initReflector();
  };
  dart.copyProperties(material_icon$46template, {
    get MaterialIconComponentNgFactory() {
      return material_icon$46template._MaterialIconComponentNgFactory;
    }
  });
  var C1;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C0;
  var C2;
  dart.defineLazy(material_icon$46template, {
    /*material_icon$46template.styles$MaterialIconComponent*/get styles$MaterialIconComponent() {
      return [material_icon$46scss$46css$46shim.styles];
    },
    /*material_icon$46template._MaterialIconComponentNgFactory*/get _MaterialIconComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*material_icon$46template.styles$MaterialIconComponentHost*/get styles$MaterialIconComponentHost() {
      return C2 || CT.C2;
    },
    /*material_icon$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_icon/material_icon.template", {
    "package:angular_components/material_icon/material_icon.template.dart": material_icon$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_icon.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgCI,uBAAgB,2BAAY,kEAAkE;IAChG;;AAIQ,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AAC3D,oBAAU,uBAAoB,gBAAgB,EAAE;AAChD,gBAAc;AACd,kBAAQ,0BAAuB,GAAG,EAAE,gBAAgB,EAAE;AACT,MAAnD,yBAAsB,KAAK,EAAE,eAAe;AACkB,MAA9D,AAAK,wCAAiB,KAAK,GAAE;AACd,MAAf,cAAS,KAAK;AACsB,MAApC,AAAM,KAAD,UAAQ,AAAe;AACrB,MAAP;IACF;;AAIQ,iBAAO;AACwD,MAArE,AAAe,gCAAW,+BAA4B,AAAK,IAAD;IAC5D;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACiH,QAApI,uEAAoB,SAAU,uEAA2C,2CAAO,uDAA8B;;AAEzF,MAAxB,uBAAkB,MAAM;IAC1B;;sEAnC4C,YAAgB;IAFlC,uBAAyB;AAEwB,iFAAuB,8BAAW,UAAU,EAAE,WAAW;AAC7G,IAArB;AACwD,kBAAxD,kBAAiB,AAAS,8BAAc;EAC1C;;;;;;;;;MAJ+B,oEAAgB;;;;;;;;;AAoDI,MAAjD,oBAAc,4DAA2B,MAAM;AACpB,MAA3B,cAAS,AAAY;AAC6C,MAAlE,mCAAqC,4CAAsB;AACG,MAA9D,AAAY,yBAAO,kCAA4B;AAClC,MAAb,WAAM;AACN,YAAO,kDAAa,GAAG,MAAM,aAAQ;IACvC;;AAIO,oBAAU;AACf,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEa,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;IACd;;2EAvBiD,YAAgB;IAFtC;IACG;AACkD,sFAAuB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;oHA0B7E,YAAgB;AAC7G,UAAO,kEAAgC,UAAU,EAAE,WAAW;EAChE;;AAIE,kBAAI;AACF;;AAEa,IAAf,oCAAW;AAEoE,IAA/E,4BAAyB,yCAAuB;AAC3B,IAArB;AACqB,IAArB;EACF;;;AAhDE,YAAO;IACT;;;;;;;;MA9CoB,qDAA4B;YAAG,EAAS;;MA2CN,wDAA+B;;;MAKjE,yDAAgC;;;MAmChD,iCAAQ;YAAG","file":"material_icon.template.ddc.js"}');
  // Exports:
  return {
    material_icon__material_icon$46template: material_icon$46template
  };
}));

//# sourceMappingURL=material_icon.template.ddc.js.map
