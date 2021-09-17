define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_slider/material_slider', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/material_slider/material_slider.scss.css.shim'], (function load__packages__angular_components__material_slider__material_slider_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular__src__runtime__interpolate, packages__angular_components__material_slider__material_slider, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__interfaces__has_disabled, packages__angular__angular$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__material_slider__material_slider$46scss$46css$46shim) {
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
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_slider = packages__angular_components__material_slider__material_slider.material_slider__material_slider;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const material_slider$46scss$46css$46shim = packages__angular_components__material_slider__material_slider$46scss$46css$46shim.material_slider__material_slider$46scss$46css$46shim;
  var material_slider$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var $setProperty = dartx.setProperty;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var TouchEventL = () => (TouchEventL = dart.constFn(dart.legacy(html.TouchEvent)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var MaterialSliderComponentL = () => (MaterialSliderComponentL = dart.constFn(dart.legacy(material_slider.MaterialSliderComponent)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var VoidToMaterialSliderComponentL = () => (VoidToMaterialSliderComponentL = dart.constFn(dart.fnType(MaterialSliderComponentL(), [])))();
  var ComponentRefOfMaterialSliderComponentL = () => (ComponentRefOfMaterialSliderComponentL = dart.constFn(component_factory.ComponentRef$(MaterialSliderComponentL())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ComponentFactoryOfMaterialSliderComponentL = () => (ComponentFactoryOfMaterialSliderComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialSliderComponentL())))();
  var AppViewOfMaterialSliderComponentL = () => (AppViewOfMaterialSliderComponentL = dart.constFn(app_view.AppView$(MaterialSliderComponentL())))();
  var AppViewLOfMaterialSliderComponentL = () => (AppViewLOfMaterialSliderComponentL = dart.constFn(dart.legacy(AppViewOfMaterialSliderComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfMaterialSliderComponentL = () => (AppViewLAndintLToAppViewLOfMaterialSliderComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialSliderComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_slider/material_slider.template.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(material_slider$46template.viewFactory_MaterialSliderComponentHost0, AppViewLAndintLToAppViewLOfMaterialSliderComponentL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfMaterialSliderComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-slider"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _expr_0 = dart.privateName(material_slider$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_slider$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_slider$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_slider$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_slider$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_slider$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_slider$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_slider$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_slider$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_slider$46template, "_expr_9");
  var _expr_10 = dart.privateName(material_slider$46template, "_expr_10");
  var _expr_11 = dart.privateName(material_slider$46template, "_expr_11");
  var _el_0 = dart.privateName(material_slider$46template, "_el_0");
  var _el_1 = dart.privateName(material_slider$46template, "_el_1");
  var _el_3 = dart.privateName(material_slider$46template, "_el_3");
  var _el_6 = dart.privateName(material_slider$46template, "_el_6");
  var _el_7 = dart.privateName(material_slider$46template, "_el_7");
  material_slider$46template.ViewMaterialSliderComponent0 = class ViewMaterialSliderComponent0 extends app_view.AppView$(dart.legacy(material_slider.MaterialSliderComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_slider/material_slider.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "container");
      this.addShimC(this[_el_0]);
      this[_el_1] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_1], "track-container left-track-container");
      this.addShimC(this[_el_1]);
      let _el_2 = dom_helpers.appendDiv(doc, this[_el_1]);
      this.updateChildClass(_el_2, "track");
      this.addShimC(_el_2);
      this[_el_3] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_3], "knob");
      dom_helpers.setAttribute(this[_el_3], "role", "slider");
      this.addShimC(this[_el_3]);
      let _el_4 = dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(_el_4, "knob-real");
      this.addShimC(_el_4);
      let _el_5 = dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(_el_5, "knob-hover-shadow");
      this.addShimC(_el_5);
      this[_el_6] = dom_helpers.appendDiv(doc, this[_el_3]);
      this.updateChildClass(this[_el_6], "knob-drag-shadow");
      this.addShimC(this[_el_6]);
      this[_el_7] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_7], "track-container right-track-container");
      this.addShimC(this[_el_7]);
      let _el_8 = dom_helpers.appendDiv(doc, this[_el_7]);
      this.updateChildClass(_el_8, "track");
      this.addShimC(_el_8);
      this[_el_0][$addEventListener]("mousedown", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'mouseDown')));
      this[_el_0][$addEventListener]("touchstart", this.eventHandler1(EventL(), TouchEventL(), dart.bind(_ctx, 'touchStart')));
      this[_el_3][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'knobKeyDown')));
      _ctx.container = this[_el_0];
      this.init0();
    }
    detectChangesInternal() {
      let t0, t0$, t0$0, t0$1;
      let _ctx = this.ctx;
      let currVal_0 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(this[_el_0], "is-disabled", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.progressPercent;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_el_1].style[$setProperty]("width", currVal_1 == null ? null : dart.toString(currVal_1) + "%");
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = dart.test(_ctx.disabled) ? 0 - 1 : 0;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateAttribute(this[_el_3], "tabindex", (t0 = currVal_2, t0 === null ? null : t0[$toString]()));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = dart.test(_ctx.isRtl) ? 0 : 0 - 8;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_el_3].style[$setProperty]("margin-left", currVal_3 === null ? null : currVal_3[$toString]() + "px");
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = dart.test(_ctx.isRtl) ? 0 - 8 : 0;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_el_3].style[$setProperty]("margin-right", currVal_4 === null ? null : currVal_4[$toString]() + "px");
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.min;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        dom_helpers.updateAttribute(this[_el_3], "aria-valuemin", (t0$ = currVal_5, t0$ == null ? null : dart.toString(t0$)));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.max;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        dom_helpers.updateAttribute(this[_el_3], "aria-valuemax", (t0$0 = currVal_6, t0$0 == null ? null : dart.toString(t0$0)));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.value;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        dom_helpers.updateAttribute(this[_el_3], "aria-valuenow", (t0$1 = currVal_7, t0$1 == null ? null : dart.toString(t0$1)));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.isDragging;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        dom_helpers.updateClassBinding(this[_el_6], "is-dragging", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = interpolate.interpolate1("calc(", 100 - dart.notNull(_ctx.progressPercent), "% + 8px)");
      if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_el_7].style[$setProperty]("width", currVal_9);
        this[_expr_9] = currVal_9;
      }
    }
    detectHostChanges(firstCheck) {
      let t0;
      let _ctx = this.ctx;
      let currVal_10 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        dom_helpers.updateAttribute(this.rootEl, "aria-disabled", (t0 = currVal_10, t0 == null ? null : dart.toString(t0)));
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "is-disabled", currVal_11);
        this[_expr_11] = currVal_11;
      }
    }
    initComponentStyles() {
      let styles = material_slider$46template.ViewMaterialSliderComponent0._componentStyles;
      if (styles == null) {
        material_slider$46template.ViewMaterialSliderComponent0._componentStyles = styles = material_slider$46template.ViewMaterialSliderComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_slider$46template.styles$MaterialSliderComponent, material_slider$46template.ViewMaterialSliderComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_slider$46template.ViewMaterialSliderComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    this[_el_6] = null;
    this[_el_7] = null;
    material_slider$46template.ViewMaterialSliderComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-slider"));
  }).prototype = material_slider$46template.ViewMaterialSliderComponent0.prototype;
  dart.addTypeTests(material_slider$46template.ViewMaterialSliderComponent0);
  dart.addTypeCaches(material_slider$46template.ViewMaterialSliderComponent0);
  dart.setLibraryUri(material_slider$46template.ViewMaterialSliderComponent0, L0);
  dart.setFieldSignature(material_slider$46template.ViewMaterialSliderComponent0, () => ({
    __proto__: dart.getFields(material_slider$46template.ViewMaterialSliderComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_1]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_3]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_6]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_7]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(material_slider$46template.ViewMaterialSliderComponent0, {
    /*material_slider$46template.ViewMaterialSliderComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_slider$46template, "_compView_0");
  var _MaterialSliderComponent_0_5 = dart.privateName(material_slider$46template, "_MaterialSliderComponent_0_5");
  material_slider$46template._ViewMaterialSliderComponentHost0 = class _ViewMaterialSliderComponentHost0 extends app_view.AppView$(dart.legacy(material_slider.MaterialSliderComponent)) {
    build() {
      this[_compView_0] = new material_slider$46template.ViewMaterialSliderComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialSliderComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSliderComponentL(), dart.wrapType(MaterialSliderComponentL()), dart.fn(() => new material_slider.MaterialSliderComponent.new(this[_compView_0], DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex))), VoidToMaterialSliderComponentL())) : new material_slider.MaterialSliderComponent.new(this[_compView_0], DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialSliderComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialSliderComponentL()).new(0, this, this.rootEl, this[_MaterialSliderComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(MaterialSliderComponentL()) || token === dart.wrapType(HasDisabledL())) && 0 === nodeIndex) {
        return this[_MaterialSliderComponent_0_5];
      }
      return notFoundResult;
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
  (material_slider$46template._ViewMaterialSliderComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialSliderComponent_0_5] = null;
    material_slider$46template._ViewMaterialSliderComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_slider$46template._ViewMaterialSliderComponentHost0.prototype;
  dart.addTypeTests(material_slider$46template._ViewMaterialSliderComponentHost0);
  dart.addTypeCaches(material_slider$46template._ViewMaterialSliderComponentHost0);
  dart.setMethodSignature(material_slider$46template._ViewMaterialSliderComponentHost0, () => ({
    __proto__: dart.getMethods(material_slider$46template._ViewMaterialSliderComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_slider$46template._ViewMaterialSliderComponentHost0, L0);
  dart.setFieldSignature(material_slider$46template._ViewMaterialSliderComponentHost0, () => ({
    __proto__: dart.getFields(material_slider$46template._ViewMaterialSliderComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_slider$46template.ViewMaterialSliderComponent0)),
    [_MaterialSliderComponent_0_5]: dart.fieldType(dart.legacy(material_slider.MaterialSliderComponent))
  }));
  material_slider$46template.viewFactory_MaterialSliderComponentHost0 = function viewFactory_MaterialSliderComponentHost0(parentView, parentIndex) {
    return new material_slider$46template._ViewMaterialSliderComponentHost0.new(parentView, parentIndex);
  };
  material_slider$46template.initReflector = function initReflector() {
    if (dart.test(material_slider$46template._visited)) {
      return;
    }
    material_slider$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialSliderComponentL()), material_slider$46template.MaterialSliderComponentNgFactory);
    angular$46template.initReflector();
    has_disabled$46template.initReflector();
    dom_service$46template.initReflector();
  };
  dart.copyProperties(material_slider$46template, {
    get MaterialSliderComponentNgFactory() {
      return material_slider$46template._MaterialSliderComponentNgFactory;
    }
  });
  var C1;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C0;
  var C2;
  dart.defineLazy(material_slider$46template, {
    /*material_slider$46template.styles$MaterialSliderComponent*/get styles$MaterialSliderComponent() {
      return [material_slider$46scss$46css$46shim.styles];
    },
    /*material_slider$46template._MaterialSliderComponentNgFactory*/get _MaterialSliderComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*material_slider$46template.styles$MaterialSliderComponentHost*/get styles$MaterialSliderComponentHost() {
      return C2 || CT.C2;
    },
    /*material_slider$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_slider/material_slider.template", {
    "package:angular_components/material_slider/material_slider.template.dart": material_slider$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_slider.template.dart"],"names":[],"mappings":"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","file":"material_slider.template.ddc.js"}');
  // Exports:
  return {
    material_slider__material_slider$46template: material_slider$46template
  };
}));

//# sourceMappingURL=material_slider.template.ddc.js.map
