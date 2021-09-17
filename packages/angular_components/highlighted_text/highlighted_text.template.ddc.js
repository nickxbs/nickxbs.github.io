define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/highlighted_text/highlighted_text', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/model/ui/highlighted_text_model', 'packages/angular/src/runtime/interpolate', 'packages/angular/angular.template', 'packages/angular_components/model/ui/highlighted_text_model.template', 'packages/angular_components/highlighted_text/highlighted_text.scss.css.shim'], (function load__packages__angular_components__highlighted_text__highlighted_text_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__highlighted_text__highlighted_text, packages__angular__src__runtime__text_binding, packages__angular_components__model__ui__highlighted_text_model, packages__angular__src__runtime__interpolate, packages__angular__angular$46template, packages__angular_components__model__ui__highlighted_text_model$46template, packages__angular_components__highlighted_text__highlighted_text$46scss$46css$46shim) {
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
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const highlighted_text = packages__angular_components__highlighted_text__highlighted_text.highlighted_text__highlighted_text;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const highlighted_text_model = packages__angular_components__model__ui__highlighted_text_model.model__ui__highlighted_text_model;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const highlighted_text_model$46template = packages__angular_components__model__ui__highlighted_text_model$46template.model__ui__highlighted_text_model$46template;
  const highlighted_text$46scss$46css$46shim = packages__angular_components__highlighted_text__highlighted_text$46scss$46css$46shim.highlighted_text__highlighted_text$46scss$46css$46shim;
  var highlighted_text$46template = Object.create(dart.library);
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
  var HighlightedTextComponentL = () => (HighlightedTextComponentL = dart.constFn(dart.legacy(highlighted_text.HighlightedTextComponent)))();
  var ComponentRefOfHighlightedTextComponentL = () => (ComponentRefOfHighlightedTextComponentL = dart.constFn(component_factory.ComponentRef$(HighlightedTextComponentL())))();
  var ComponentFactoryOfHighlightedTextComponentL = () => (ComponentFactoryOfHighlightedTextComponentL = dart.constFn(component_factory.ComponentFactory$(HighlightedTextComponentL())))();
  var AppViewOfHighlightedTextComponentL = () => (AppViewOfHighlightedTextComponentL = dart.constFn(app_view.AppView$(HighlightedTextComponentL())))();
  var AppViewLOfHighlightedTextComponentL = () => (AppViewLOfHighlightedTextComponentL = dart.constFn(dart.legacy(AppViewOfHighlightedTextComponentL())))();
  var AppViewLAndintLToAppViewLOfHighlightedTextComponentL = () => (AppViewLAndintLToAppViewLOfHighlightedTextComponentL = dart.constFn(dart.fnType(AppViewLOfHighlightedTextComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/highlighted_text/highlighted_text.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(highlighted_text$46template.viewFactory_HighlightedTextComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(highlighted_text$46template.viewFactory_HighlightedTextComponentHost0, AppViewLAndintLToAppViewLOfHighlightedTextComponentL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfHighlightedTextComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "highlighted-text"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _appEl_1 = dart.privateName(highlighted_text$46template, "_appEl_1");
  var _NgFor_1_9 = dart.privateName(highlighted_text$46template, "_NgFor_1_9");
  var _expr_0 = dart.privateName(highlighted_text$46template, "_expr_0");
  var C0;
  highlighted_text$46template.ViewHighlightedTextComponent0 = class ViewHighlightedTextComponent0 extends app_view.AppView$(dart.legacy(highlighted_text.HighlightedTextComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/highlighted_text/highlighted_text.dart" : null;
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
      let styles = highlighted_text$46template.ViewHighlightedTextComponent0._componentStyles;
      if (styles == null) {
        highlighted_text$46template.ViewHighlightedTextComponent0._componentStyles = styles = highlighted_text$46template.ViewHighlightedTextComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(highlighted_text$46template.styles$HighlightedTextComponent, highlighted_text$46template.ViewHighlightedTextComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (highlighted_text$46template.ViewHighlightedTextComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    highlighted_text$46template.ViewHighlightedTextComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("highlighted-text"));
  }).prototype = highlighted_text$46template.ViewHighlightedTextComponent0.prototype;
  dart.addTypeTests(highlighted_text$46template.ViewHighlightedTextComponent0);
  dart.addTypeCaches(highlighted_text$46template.ViewHighlightedTextComponent0);
  dart.setLibraryUri(highlighted_text$46template.ViewHighlightedTextComponent0, L0);
  dart.setFieldSignature(highlighted_text$46template.ViewHighlightedTextComponent0, () => ({
    __proto__: dart.getFields(highlighted_text$46template.ViewHighlightedTextComponent0.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(highlighted_text$46template.ViewHighlightedTextComponent0, {
    /*highlighted_text$46template.ViewHighlightedTextComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_1 = dart.privateName(highlighted_text$46template, "_textBinding_1");
  var _el_0 = dart.privateName(highlighted_text$46template, "_el_0");
  highlighted_text$46template._ViewHighlightedTextComponent1 = class _ViewHighlightedTextComponent1 extends app_view.AppView$(dart.legacy(highlighted_text.HighlightedTextComponent)) {
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
  (highlighted_text$46template._ViewHighlightedTextComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_el_0] = null;
    highlighted_text$46template._ViewHighlightedTextComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = highlighted_text$46template._ViewHighlightedTextComponent1.prototype;
  dart.addTypeTests(highlighted_text$46template._ViewHighlightedTextComponent1);
  dart.addTypeCaches(highlighted_text$46template._ViewHighlightedTextComponent1);
  dart.setLibraryUri(highlighted_text$46template._ViewHighlightedTextComponent1, L0);
  dart.setFieldSignature(highlighted_text$46template._ViewHighlightedTextComponent1, () => ({
    __proto__: dart.getFields(highlighted_text$46template._ViewHighlightedTextComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _compView_0 = dart.privateName(highlighted_text$46template, "_compView_0");
  var _HighlightedTextComponent_0_5 = dart.privateName(highlighted_text$46template, "_HighlightedTextComponent_0_5");
  highlighted_text$46template._ViewHighlightedTextComponentHost0 = class _ViewHighlightedTextComponentHost0 extends app_view.AppView$(dart.legacy(highlighted_text.HighlightedTextComponent)) {
    build() {
      this[_compView_0] = new highlighted_text$46template.ViewHighlightedTextComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HighlightedTextComponent_0_5] = new highlighted_text.HighlightedTextComponent.new();
      this[_compView_0].create(this[_HighlightedTextComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfHighlightedTextComponentL()).new(0, this, this.rootEl, this[_HighlightedTextComponent_0_5]);
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
  (highlighted_text$46template._ViewHighlightedTextComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HighlightedTextComponent_0_5] = null;
    highlighted_text$46template._ViewHighlightedTextComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = highlighted_text$46template._ViewHighlightedTextComponentHost0.prototype;
  dart.addTypeTests(highlighted_text$46template._ViewHighlightedTextComponentHost0);
  dart.addTypeCaches(highlighted_text$46template._ViewHighlightedTextComponentHost0);
  dart.setLibraryUri(highlighted_text$46template._ViewHighlightedTextComponentHost0, L0);
  dart.setFieldSignature(highlighted_text$46template._ViewHighlightedTextComponentHost0, () => ({
    __proto__: dart.getFields(highlighted_text$46template._ViewHighlightedTextComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(highlighted_text$46template.ViewHighlightedTextComponent0)),
    [_HighlightedTextComponent_0_5]: dart.fieldType(dart.legacy(highlighted_text.HighlightedTextComponent))
  }));
  highlighted_text$46template.viewFactory_HighlightedTextComponent1 = function viewFactory_HighlightedTextComponent1(parentView, parentIndex) {
    return new highlighted_text$46template._ViewHighlightedTextComponent1.new(parentView, parentIndex);
  };
  highlighted_text$46template.viewFactory_HighlightedTextComponentHost0 = function viewFactory_HighlightedTextComponentHost0(parentView, parentIndex) {
    return new highlighted_text$46template._ViewHighlightedTextComponentHost0.new(parentView, parentIndex);
  };
  highlighted_text$46template.initReflector = function initReflector() {
    if (dart.test(highlighted_text$46template._visited)) {
      return;
    }
    highlighted_text$46template._visited = true;
    reflector.registerComponent(dart.wrapType(HighlightedTextComponentL()), highlighted_text$46template.HighlightedTextComponentNgFactory);
    angular$46template.initReflector();
    highlighted_text_model$46template.initReflector();
  };
  dart.copyProperties(highlighted_text$46template, {
    get HighlightedTextComponentNgFactory() {
      return highlighted_text$46template._HighlightedTextComponentNgFactory;
    }
  });
  var C2;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C1;
  var C3;
  dart.defineLazy(highlighted_text$46template, {
    /*highlighted_text$46template.styles$HighlightedTextComponent*/get styles$HighlightedTextComponent() {
      return [highlighted_text$46scss$46css$46shim.styles];
    },
    /*highlighted_text$46template._HighlightedTextComponentNgFactory*/get _HighlightedTextComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*highlighted_text$46template.styles$HighlightedTextComponentHost*/get styles$HighlightedTextComponentHost() {
      return C3 || CT.C3;
    },
    /*highlighted_text$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/highlighted_text/highlighted_text.template", {
    "package:angular_components/highlighted_text/highlighted_text.template.dart": highlighted_text$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["highlighted_text.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuCI,uBAAgB,2BAAY,wEAAwE;IACtG;;AAIQ,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AAC3D,oBAAU,uBAAoB,gBAAgB,EAAE;AAChD,sBAAY,yBAAsB,gBAAgB;AACN,MAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AACrC,6BAAmB,iCAAY;AACW,MAAtD,mBAAqB,qBAAM,gBAAU,gBAAgB;AAC9C,MAAP;IACF;;AAIQ,iBAAO;AACP,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAsB,eAAS,SAAS;AACZ,QAA9B,AAAW,2BAAU,SAAS;AACX,QAAnB,gBAAU,SAAS;;AAErB,qBAA4B;AACJ,QAAtB,AAAW;;AAEwB,MAArC,AAAS;IACX;;AAI+B,MAA7B,AAAS;IACX;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACoH,QAAvI,6EAAoB,SAAU,6EAA2C,2CAAO,6DAAiC;;AAE5F,MAAxB,uBAAkB,MAAM;IAC1B;;4EA9C+C,YAAgB;IAJjD;IACA;IACV;AAE0E,uFAAuB,8BAAW,UAAU,EAAE,WAAW;AAChH,IAArB;AAC2D,kBAA3D,kBAAiB,AAAS,8BAAc;EAC1C;;;;;;;;;;;MAJ+B,0EAAgB;;;;;;;;;AAgEvC,gBAAc;AACa,MAAjC,cAAQ,AAAI,GAAD,iBAAe;AACkB,MAA5C,AAAK,wCAAiB,cAAO;AACd,MAAf,cAAS;AAC2B,MAApC,AAAM,qBAAO,AAAe;AAChB,MAAZ,WAAM;IACR;;AAIQ,0BAAgB,oDAAoD,AAAM,mBAAC;AAC3E,sBAAY,AAAc,aAAD;AAC/B,oBAAI,4BAAsB,eAAS,SAAS;AACwB,QAAlE,iDAA4B,cAAO,qBAAqB,SAAS;AAC9C,QAAnB,gBAAU,SAAS;;AAEqD,MAA1E,AAAe,gCAAW,+BAA4B,AAAc,aAAD;IACrE;;6EAtBgD,YAAgB;IAHrC,uBAA0B;IAChD;IACW;AAC+D,wFAAuB,6BAAU,UAAU,EAAE,WAAW;AAChH,IAArB;EACF;;;;;;;;;;;;;;AAmCsD,MAApD,oBAAc,kEAA8B,MAAM;AACvB,MAA3B,cAAS,AAAY;AAC6C,MAAlE,sCAAwC;AACyB,MAAjE,AAAY,yBAAO,qCAA+B;AACrC,MAAb,WAAM;AACN,YAAO,qDAAa,GAAG,MAAM,aAAQ;IACvC;;AAIO,oBAAU;AACf,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEa,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;IACd;;iFAvBoD,YAAgB;IAFtC;IACG;AACkD,4FAAuB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;qHAT1G,YAAgB;AACnF,UAAO,oEAA+B,UAAU,EAAE,WAAW;EAC/D;6HAiCqG,YAAgB;AACnH,UAAO,wEAAmC,UAAU,EAAE,WAAW;EACnE;;AAIE,kBAAI;AACF;;AAEa,IAAf,uCAAW;AAE0E,IAArF,4BAAyB,4CAA0B;AAC9B,IAArB;AACqB,IAArB;EACF;;;AAjFE,YAAO;IACT;;;;;;;;MA3DoB,2DAA+B;YAAG,EAAS;;MAwDN,8DAAkC;;;MAsCvE,+DAAmC;;;MAmCnD,oCAAQ;YAAG","file":"highlighted_text.template.ddc.js"}');
  // Exports:
  return {
    highlighted_text__highlighted_text$46template: highlighted_text$46template
  };
}));

//# sourceMappingURL=highlighted_text.template.ddc.js.map
