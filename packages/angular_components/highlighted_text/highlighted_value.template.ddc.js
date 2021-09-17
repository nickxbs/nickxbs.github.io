define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/highlighted_text/highlighted_value', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/model/ui/highlighted_text_model', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/model/ui/highlight_provider', 'packages/angular/angular.template', 'packages/angular_components/highlighted_text/highlighted_text.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/model/ui/highlight_provider.template', 'packages/angular_components/model/ui/highlighted_text_model.template', 'packages/angular_components/highlighted_text/highlighted_text.scss.css.shim'], (function load__packages__angular_components__highlighted_text__highlighted_value_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__highlighted_text__highlighted_value, packages__angular__src__runtime__text_binding, packages__angular_components__model__ui__highlighted_text_model, packages__angular__src__runtime__interpolate, packages__angular_components__model__ui__highlight_provider, packages__angular__angular$46template, packages__angular_components__highlighted_text__highlighted_text$46template, packages__angular_components__model__ui__has_renderer$46template, packages__angular_components__model__ui__highlight_provider$46template, packages__angular_components__model__ui__highlighted_text_model$46template, packages__angular_components__highlighted_text__highlighted_text$46scss$46css$46shim) {
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
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const highlighted_value = packages__angular_components__highlighted_text__highlighted_value.highlighted_text__highlighted_value;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const highlighted_text_model = packages__angular_components__model__ui__highlighted_text_model.model__ui__highlighted_text_model;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const highlight_provider = packages__angular_components__model__ui__highlight_provider.model__ui__highlight_provider;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const highlighted_text$46template = packages__angular_components__highlighted_text__highlighted_text$46template.highlighted_text__highlighted_text$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const highlight_provider$46template = packages__angular_components__model__ui__highlight_provider$46template.model__ui__highlight_provider$46template;
  const highlighted_text_model$46template = packages__angular_components__model__ui__highlighted_text_model$46template.model__ui__highlighted_text_model$46template;
  const highlighted_text$46scss$46css$46shim = packages__angular_components__highlighted_text__highlighted_text$46scss$46css$46shim.highlighted_text__highlighted_text$46scss$46css$46shim;
  var highlighted_value$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $_get = dartx._get;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var HighlightedTextSegmentL = () => (HighlightedTextSegmentL = dart.constFn(dart.legacy(highlighted_text_model.HighlightedTextSegment)))();
  var HighlightedValueComponentL = () => (HighlightedValueComponentL = dart.constFn(dart.legacy(highlighted_value.HighlightedValueComponent)))();
  var HighlightProviderL = () => (HighlightProviderL = dart.constFn(dart.legacy(highlight_provider.HighlightProvider)))();
  var VoidToHighlightedValueComponentL = () => (VoidToHighlightedValueComponentL = dart.constFn(dart.fnType(HighlightedValueComponentL(), [])))();
  var ComponentRefOfHighlightedValueComponentL = () => (ComponentRefOfHighlightedValueComponentL = dart.constFn(component_factory.ComponentRef$(HighlightedValueComponentL())))();
  var ComponentFactoryOfHighlightedValueComponentL = () => (ComponentFactoryOfHighlightedValueComponentL = dart.constFn(component_factory.ComponentFactory$(HighlightedValueComponentL())))();
  var AppViewOfHighlightedValueComponentL = () => (AppViewOfHighlightedValueComponentL = dart.constFn(app_view.AppView$(HighlightedValueComponentL())))();
  var AppViewLOfHighlightedValueComponentL = () => (AppViewLOfHighlightedValueComponentL = dart.constFn(dart.legacy(AppViewOfHighlightedValueComponentL())))();
  var AppViewLAndintLToAppViewLOfHighlightedValueComponentL = () => (AppViewLAndintLToAppViewLOfHighlightedValueComponentL = dart.constFn(dart.fnType(AppViewLOfHighlightedValueComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/highlighted_text/highlighted_value.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(highlighted_value$46template.viewFactory_HighlightedValueComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(highlighted_value$46template.viewFactory_HighlightedValueComponentHost0, AppViewLAndintLToAppViewLOfHighlightedValueComponentL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfHighlightedValueComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "highlight-value"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _appEl_1 = dart.privateName(highlighted_value$46template, "_appEl_1");
  var _NgFor_1_9 = dart.privateName(highlighted_value$46template, "_NgFor_1_9");
  var _expr_0 = dart.privateName(highlighted_value$46template, "_expr_0");
  var C0;
  highlighted_value$46template.ViewHighlightedValueComponent0 = class ViewHighlightedValueComponent0 extends app_view.AppView$(dart.legacy(highlighted_value.HighlightedValueComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/highlighted_text/highlighted_value.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_1 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.segments;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = highlighted_value$46template.ViewHighlightedValueComponent0._componentStyles;
      if (styles == null) {
        highlighted_value$46template.ViewHighlightedValueComponent0._componentStyles = styles = highlighted_value$46template.ViewHighlightedValueComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(highlighted_value$46template.styles$HighlightedValueComponent, highlighted_value$46template.ViewHighlightedValueComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (highlighted_value$46template.ViewHighlightedValueComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    highlighted_value$46template.ViewHighlightedValueComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("highlight-value"));
  }).prototype = highlighted_value$46template.ViewHighlightedValueComponent0.prototype;
  dart.addTypeTests(highlighted_value$46template.ViewHighlightedValueComponent0);
  dart.addTypeCaches(highlighted_value$46template.ViewHighlightedValueComponent0);
  dart.setLibraryUri(highlighted_value$46template.ViewHighlightedValueComponent0, L0);
  dart.setFieldSignature(highlighted_value$46template.ViewHighlightedValueComponent0, () => ({
    __proto__: dart.getFields(highlighted_value$46template.ViewHighlightedValueComponent0.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(highlighted_value$46template.ViewHighlightedValueComponent0, {
    /*highlighted_value$46template.ViewHighlightedValueComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_1 = dart.privateName(highlighted_value$46template, "_textBinding_1");
  var _el_0 = dart.privateName(highlighted_value$46template, "_el_0");
  highlighted_value$46template._ViewHighlightedValueComponent1 = class _ViewHighlightedValueComponent1 extends app_view.AppView$(dart.legacy(highlighted_value.HighlightedValueComponent)) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(this[_el_0]), "text-segment");
      this.addShimE(this[_el_0]);
      this[_el_0][$append](this[_textBinding_1].element);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let local_segment = optimizations.unsafeCast(HighlightedTextSegmentL(), this.locals[$_get]("$implicit"));
      let currVal_0 = local_segment.isHighlighted;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_0]), "segment-highlight", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_textBinding_1].updateText(interpolate.interpolateString0(local_segment.text));
    }
  };
  (highlighted_value$46template._ViewHighlightedValueComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_el_0] = null;
    highlighted_value$46template._ViewHighlightedValueComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = highlighted_value$46template._ViewHighlightedValueComponent1.prototype;
  dart.addTypeTests(highlighted_value$46template._ViewHighlightedValueComponent1);
  dart.addTypeCaches(highlighted_value$46template._ViewHighlightedValueComponent1);
  dart.setLibraryUri(highlighted_value$46template._ViewHighlightedValueComponent1, L0);
  dart.setFieldSignature(highlighted_value$46template._ViewHighlightedValueComponent1, () => ({
    __proto__: dart.getFields(highlighted_value$46template._ViewHighlightedValueComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _compView_0 = dart.privateName(highlighted_value$46template, "_compView_0");
  var _HighlightedValueComponent_0_5 = dart.privateName(highlighted_value$46template, "_HighlightedValueComponent_0_5");
  highlighted_value$46template._ViewHighlightedValueComponentHost0 = class _ViewHighlightedValueComponentHost0 extends app_view.AppView$(dart.legacy(highlighted_value.HighlightedValueComponent)) {
    build() {
      this[_compView_0] = new highlighted_value$46template.ViewHighlightedValueComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HighlightedValueComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(HighlightedValueComponentL(), dart.wrapType(HighlightedValueComponentL()), dart.fn(() => new highlighted_value.HighlightedValueComponent.new(HighlightProviderL().as(this.injectorGet(dart.wrapType(HighlightProviderL()), this.viewData.parentIndex))), VoidToHighlightedValueComponentL())) : new highlighted_value.HighlightedValueComponent.new(HighlightProviderL().as(this.injectorGet(dart.wrapType(HighlightProviderL()), this.viewData.parentIndex)));
      this[_compView_0].create(this[_HighlightedValueComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfHighlightedValueComponentL()).new(0, this, this.rootEl, this[_HighlightedValueComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (highlighted_value$46template._ViewHighlightedValueComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HighlightedValueComponent_0_5] = null;
    highlighted_value$46template._ViewHighlightedValueComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = highlighted_value$46template._ViewHighlightedValueComponentHost0.prototype;
  dart.addTypeTests(highlighted_value$46template._ViewHighlightedValueComponentHost0);
  dart.addTypeCaches(highlighted_value$46template._ViewHighlightedValueComponentHost0);
  dart.setLibraryUri(highlighted_value$46template._ViewHighlightedValueComponentHost0, L0);
  dart.setFieldSignature(highlighted_value$46template._ViewHighlightedValueComponentHost0, () => ({
    __proto__: dart.getFields(highlighted_value$46template._ViewHighlightedValueComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(highlighted_value$46template.ViewHighlightedValueComponent0)),
    [_HighlightedValueComponent_0_5]: dart.fieldType(dart.legacy(highlighted_value.HighlightedValueComponent))
  }));
  highlighted_value$46template.viewFactory_HighlightedValueComponent1 = function viewFactory_HighlightedValueComponent1(parentView, parentIndex) {
    return new highlighted_value$46template._ViewHighlightedValueComponent1.new(parentView, parentIndex);
  };
  highlighted_value$46template.viewFactory_HighlightedValueComponentHost0 = function viewFactory_HighlightedValueComponentHost0(parentView, parentIndex) {
    return new highlighted_value$46template._ViewHighlightedValueComponentHost0.new(parentView, parentIndex);
  };
  highlighted_value$46template.initReflector = function initReflector() {
    if (dart.test(highlighted_value$46template._visited)) {
      return;
    }
    highlighted_value$46template._visited = true;
    reflector.registerComponent(dart.wrapType(HighlightedValueComponentL()), highlighted_value$46template.HighlightedValueComponentNgFactory);
    angular$46template.initReflector();
    highlighted_text$46template.initReflector();
    has_renderer$46template.initReflector();
    highlight_provider$46template.initReflector();
    highlighted_text_model$46template.initReflector();
  };
  dart.copyProperties(highlighted_value$46template, {
    get HighlightedValueComponentNgFactory() {
      return highlighted_value$46template._HighlightedValueComponentNgFactory;
    }
  });
  var C2;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C1;
  var C3;
  dart.defineLazy(highlighted_value$46template, {
    /*highlighted_value$46template.styles$HighlightedValueComponent*/get styles$HighlightedValueComponent() {
      return [highlighted_text$46scss$46css$46shim.styles];
    },
    /*highlighted_value$46template._HighlightedValueComponentNgFactory*/get _HighlightedValueComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*highlighted_value$46template.styles$HighlightedValueComponentHost*/get styles$HighlightedValueComponentHost() {
      return C3 || CT.C3;
    },
    /*highlighted_value$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/highlighted_text/highlighted_value.template", {
    "package:angular_components/highlighted_text/highlighted_value.template.dart": highlighted_value$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["highlighted_value.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4CI,uBAAgB,2BAAY,yEAAyE;IACvG;;AAIQ,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AAC3D,oBAAU,uBAAoB,gBAAgB,EAAE;AAChD,sBAAY,yBAAsB,gBAAgB;AACN,MAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AACrC,6BAAmB,iCAAY;AACW,MAAtD,mBAAqB,qBAAM,gBAAU,gBAAgB;AAC9C,MAAP;IACF;;AAIQ,iBAAO;AACP,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACZ,QAA9B,AAAW,2BAAU,SAAS;AACX,QAAnB,gBAAU,SAAS;;AAErB,qBAA4B;AACJ,QAAtB,AAAW;;AAEwB,MAArC,AAAS;IACX;;AAI+B,MAA7B,AAAS;IACX;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACqH,QAAxI,+EAAoB,SAAU,+EAA2C,2CAAO,+DAAkC;;AAE7F,MAAxB,uBAAkB,MAAM;IAC1B;;8EA9CgD,YAAgB;IAJlD;IACA;IACV;AAE2E,yFAAuB,8BAAW,UAAU,EAAE,WAAW;AACjH,IAArB;AAC0D,kBAA1D,kBAAiB,AAAS,8BAAc;EAC1C;;;;;;;;;;;MAJ+B,4EAAgB;;;;;;;;;AAgEvC,gBAAc;AACa,MAAjC,cAAQ,AAAI,GAAD,iBAAe;AACkB,MAA5C,AAAK,wCAAiB,cAAO;AACd,MAAf,cAAS;AAC2B,MAApC,AAAM,qBAAO,AAAe;AAChB,MAAZ,WAAM;IACR;;AAIQ,0BAAgB,oDAAoD,AAAM,mBAAC;AAC3E,sBAAY,AAAc,aAAD;AAC/B,oBAAI,4BAAsB,eAAS,SAAS;AACwB,QAAlE,iDAA4B,cAAO,qBAAqB,SAAS;AAC9C,QAAnB,gBAAU,SAAS;;AAEqD,MAA1E,AAAe,gCAAW,+BAA4B,AAAc,aAAD;IACrE;;+EAtBiD,YAAgB;IAHtC,uBAA0B;IAChD;IACW;AACgE,0FAAuB,6BAAU,UAAU,EAAE,WAAW;AACjH,IAArB;EACF;;;;;;;;;;;;;;AAmCuD,MAArD,oBAAc,oEAA+B,MAAM;AACxB,MAA3B,cAAS,AAAY;AAKuF,MAJ5G,iDAA0C,2BACpC,uDAAmC,6CAA2B,cAC7C,4EAA0B,AAAK,iBAAqB,qCAAmB,AAAS,qEAEzF,4EAA0B,AAAK,iBAAqB,qCAAmB,AAAS;AAC5B,MAAlE,AAAY,yBAAO,sCAAgC;AACtC,MAAb,WAAM;AACN,YAAO,sDAAa,GAAG,MAAM,aAAQ;IACvC;;AAI6B,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;IACd;;mFAvBqD,YAAgB;IAFtC;IACG;AACkD,8FAAuB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;wHAT1G,YAAgB;AACpF,UAAO,sEAAgC,UAAU,EAAE,WAAW;EAChE;gIAiCuG,YAAgB;AACrH,UAAO,0EAAoC,UAAU,EAAE,WAAW;EACpE;;AAIE,kBAAI;AACF;;AAEa,IAAf,wCAAW;AAE4E,IAAvF,4BAAyB,6CAA2B;AAC/B,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AApFE,YAAO;IACT;;;;;;;;MA3DoB,6DAAgC;YAAG,EAAS;;MAwDN,gEAAmC;;;MAsCzE,iEAAoC;;;MAmCpD,qCAAQ;YAAG","file":"highlighted_value.template.ddc.js"}');
  // Exports:
  return {
    highlighted_text__highlighted_value$46template: highlighted_value$46template
  };
}));

//# sourceMappingURL=highlighted_value.template.ddc.js.map
