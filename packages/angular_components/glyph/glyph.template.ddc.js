define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/glyph/glyph', 'packages/angular/angular.template', 'packages/angular_components/model/ui/icon.template', 'packages/angular_components/glyph/glyph.scss.css.shim'], (function load__packages__angular_components__glyph__glyph_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular__src__runtime__interpolate, packages__angular_components__glyph__glyph, packages__angular__angular$46template, packages__angular_components__model__ui__icon$46template, packages__angular_components__glyph__glyph$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const glyph = packages__angular_components__glyph__glyph.glyph__glyph;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const icon$46template = packages__angular_components__model__ui__icon$46template.model__ui__icon$46template;
  const glyph$46scss$46css$46shim = packages__angular_components__glyph__glyph$46scss$46css$46shim.glyph__glyph$46scss$46css$46shim;
  var glyph$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var GlyphComponentL = () => (GlyphComponentL = dart.constFn(dart.legacy(glyph.GlyphComponent)))();
  var ComponentRefOfGlyphComponentL = () => (ComponentRefOfGlyphComponentL = dart.constFn(component_factory.ComponentRef$(GlyphComponentL())))();
  var ComponentFactoryOfGlyphComponentL = () => (ComponentFactoryOfGlyphComponentL = dart.constFn(component_factory.ComponentFactory$(GlyphComponentL())))();
  var AppViewOfGlyphComponentL = () => (AppViewOfGlyphComponentL = dart.constFn(app_view.AppView$(GlyphComponentL())))();
  var AppViewLOfGlyphComponentL = () => (AppViewLOfGlyphComponentL = dart.constFn(dart.legacy(AppViewOfGlyphComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfGlyphComponentL = () => (AppViewLAndintLToAppViewLOfGlyphComponentL = dart.constFn(dart.fnType(AppViewLOfGlyphComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/glyph/glyph.template.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(glyph$46template.viewFactory_GlyphComponentHost0, AppViewLAndintLToAppViewLOfGlyphComponentL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfGlyphComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "glyph"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _textBinding_2 = dart.privateName(glyph$46template, "_textBinding_2");
  var _expr_0 = dart.privateName(glyph$46template, "_expr_0");
  var _el_1 = dart.privateName(glyph$46template, "_el_1");
  glyph$46template.ViewGlyphComponent0 = class ViewGlyphComponent0 extends app_view.AppView$(dart.legacy(glyph.GlyphComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/glyph/glyph.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      let doc = html.document;
      this[_el_1] = dom_helpers.appendElement(doc, parentRenderNode, "i");
      dom_helpers.setAttribute(this[_el_1], "aria-hidden", "true");
      this.updateChildClass(HtmlElementL().as(this[_el_1]), "glyph-i");
      this.addShimE(this[_el_1]);
      this[_el_1][$append](this[_textBinding_2].element);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.useMaterialIconsExtended;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_1]), "material-icons", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_textBinding_2].updateText(interpolate.interpolateString0(_ctx.iconName));
    }
    initComponentStyles() {
      let styles = glyph$46template.ViewGlyphComponent0._componentStyles;
      if (styles == null) {
        glyph$46template.ViewGlyphComponent0._componentStyles = styles = glyph$46template.ViewGlyphComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(glyph$46template.styles$GlyphComponent, glyph$46template.ViewGlyphComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (glyph$46template.ViewGlyphComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_el_1] = null;
    glyph$46template.ViewGlyphComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("glyph"));
  }).prototype = glyph$46template.ViewGlyphComponent0.prototype;
  dart.addTypeTests(glyph$46template.ViewGlyphComponent0);
  dart.addTypeCaches(glyph$46template.ViewGlyphComponent0);
  dart.setLibraryUri(glyph$46template.ViewGlyphComponent0, L0);
  dart.setFieldSignature(glyph$46template.ViewGlyphComponent0, () => ({
    __proto__: dart.getFields(glyph$46template.ViewGlyphComponent0.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_el_1]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(glyph$46template.ViewGlyphComponent0, {
    /*glyph$46template.ViewGlyphComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(glyph$46template, "_compView_0");
  var _GlyphComponent_0_5 = dart.privateName(glyph$46template, "_GlyphComponent_0_5");
  glyph$46template._ViewGlyphComponentHost0 = class _ViewGlyphComponentHost0 extends app_view.AppView$(dart.legacy(glyph.GlyphComponent)) {
    build() {
      this[_compView_0] = new glyph$46template.ViewGlyphComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_GlyphComponent_0_5] = new glyph.GlyphComponent.new(this.rootEl);
      this[_compView_0].create(this[_GlyphComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfGlyphComponentL()).new(0, this, this.rootEl, this[_GlyphComponent_0_5]);
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
  (glyph$46template._ViewGlyphComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_GlyphComponent_0_5] = null;
    glyph$46template._ViewGlyphComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = glyph$46template._ViewGlyphComponentHost0.prototype;
  dart.addTypeTests(glyph$46template._ViewGlyphComponentHost0);
  dart.addTypeCaches(glyph$46template._ViewGlyphComponentHost0);
  dart.setLibraryUri(glyph$46template._ViewGlyphComponentHost0, L0);
  dart.setFieldSignature(glyph$46template._ViewGlyphComponentHost0, () => ({
    __proto__: dart.getFields(glyph$46template._ViewGlyphComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(glyph$46template.ViewGlyphComponent0)),
    [_GlyphComponent_0_5]: dart.fieldType(dart.legacy(glyph.GlyphComponent))
  }));
  glyph$46template.viewFactory_GlyphComponentHost0 = function viewFactory_GlyphComponentHost0(parentView, parentIndex) {
    return new glyph$46template._ViewGlyphComponentHost0.new(parentView, parentIndex);
  };
  glyph$46template.initReflector = function initReflector() {
    if (dart.test(glyph$46template._visited)) {
      return;
    }
    glyph$46template._visited = true;
    reflector.registerComponent(dart.wrapType(GlyphComponentL()), glyph$46template.GlyphComponentNgFactory);
    angular$46template.initReflector();
    icon$46template.initReflector();
  };
  dart.copyProperties(glyph$46template, {
    get GlyphComponentNgFactory() {
      return glyph$46template._GlyphComponentNgFactory;
    }
  });
  var C1;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C0;
  var C2;
  dart.defineLazy(glyph$46template, {
    /*glyph$46template.styles$GlyphComponent*/get styles$GlyphComponent() {
      return [glyph$46scss$46css$46shim.styles];
    },
    /*glyph$46template._GlyphComponentNgFactory*/get _GlyphComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*glyph$46template.styles$GlyphComponentHost*/get styles$GlyphComponentHost() {
      return C2 || CT.C2;
    },
    /*glyph$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/glyph/glyph.template", {
    "package:angular_components/glyph/glyph.template.dart": glyph$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["glyph.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmCI,uBAAgB,2BAAY,kDAAkD;IAChF;;AAIQ,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AAC3D,oBAAU,uBAAoB,gBAAgB,EAAE;AAChD,gBAAc;AACsC,MAA1D,cAAQ,0BAAuB,GAAG,EAAE,gBAAgB,EAAE;AACH,MAAnD,yBAAsB,aAAO,eAAe;AACL,MAAvC,AAAK,wCAAiB,cAAO;AACd,MAAf,cAAS;AAC2B,MAApC,AAAM,qBAAO,AAAe;AACrB,MAAP;IACF;;AAIQ,iBAAO;AACP,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACqB,QAA/D,iDAA4B,cAAO,kBAAkB,SAAS;AAC3C,QAAnB,gBAAU,SAAS;;AAEgD,MAArE,AAAe,gCAAW,+BAA4B,AAAK,IAAD;IAC5D;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AAC0G,QAA7H,wDAAoB,SAAU,wDAA2C,2CAAO,wCAAuB;;AAElF,MAAxB,uBAAkB,MAAM;IAC1B;;uDAxCqC,YAAgB;IAJ3B,uBAAyB;IAC9C;IACW;AAEoD,kEAAuB,8BAAW,UAAU,EAAE,WAAW;AACtG,IAArB;AACgD,kBAAhD,kBAAiB,AAAS,8BAAc;EAC1C;;;;;;;;;;;MAJ+B,qDAAgB;;;;;;;;;AAyDH,MAA1C,oBAAc,6CAAoB,MAAM;AACb,MAA3B,cAAS,AAAY;AAC+B,MAApD,4BAA8B,6BAAe;AACU,MAAvD,AAAY,yBAAO,2BAAqB;AAC3B,MAAb,WAAM;AACN,YAAO,2CAAa,GAAG,MAAM,aAAQ;IACvC;;AAIO,oBAAU;AACf,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEa,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;IACd;;4DAvB0C,YAAgB;IAFtC;IACG;AACkD,uEAAuB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;8FA0BpF,YAAgB;AAC/F,UAAO,mDAAyB,UAAU,EAAE,WAAW;EACzD;;AAIE,kBAAI;AACF;;AAEa,IAAf,4BAAW;AAEsD,IAAjE,4BAAyB,kCAAgB;AACpB,IAArB;AACqB,IAArB;EACF;;;AAhDE,YAAO;IACT;;;;;;;;MArDoB,sCAAqB;YAAG,EAAS;;MAkDN,yCAAwB;;;MAKnD,0CAAyB;;;MAmCzC,yBAAQ;YAAG","file":"glyph.template.ddc.js"}');
  // Exports:
  return {
    glyph__glyph$46template: glyph$46template
  };
}));

//# sourceMappingURL=glyph.template.ddc.js.map
