define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_progress/material_progress', 'packages/angular/angular.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template', 'packages/angular_components/material_progress/material_progress.scss.css.shim'], (function load__packages__angular_components__material_progress__material_progress_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular__src__runtime__interpolate, packages__angular_components__material_progress__material_progress, packages__angular__angular$46template, packages__angular_components__utils__browser__feature_detector__feature_detector$46template, packages__angular_components__material_progress__material_progress$46scss$46css$46shim) {
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
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_progress = packages__angular_components__material_progress__material_progress.material_progress__material_progress;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const feature_detector$46template = packages__angular_components__utils__browser__feature_detector__feature_detector$46template.utils__browser__feature_detector__feature_detector$46template;
  const material_progress$46scss$46css$46shim = packages__angular_components__material_progress__material_progress$46scss$46css$46shim.material_progress__material_progress$46scss$46css$46shim;
  var material_progress$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $setProperty = dartx.setProperty;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MaterialProgressComponentL = () => (MaterialProgressComponentL = dart.constFn(dart.legacy(material_progress.MaterialProgressComponent)))();
  var ComponentRefOfMaterialProgressComponentL = () => (ComponentRefOfMaterialProgressComponentL = dart.constFn(component_factory.ComponentRef$(MaterialProgressComponentL())))();
  var ComponentFactoryOfMaterialProgressComponentL = () => (ComponentFactoryOfMaterialProgressComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialProgressComponentL())))();
  var AppViewOfMaterialProgressComponentL = () => (AppViewOfMaterialProgressComponentL = dart.constFn(app_view.AppView$(MaterialProgressComponentL())))();
  var AppViewLOfMaterialProgressComponentL = () => (AppViewLOfMaterialProgressComponentL = dart.constFn(dart.legacy(AppViewOfMaterialProgressComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfMaterialProgressComponentL = () => (AppViewLAndintLToAppViewLOfMaterialProgressComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialProgressComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_progress/material_progress.template.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(material_progress$46template.viewFactory_MaterialProgressComponentHost0, AppViewLAndintLToAppViewLOfMaterialProgressComponentL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfMaterialProgressComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-progress"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _expr_0 = dart.privateName(material_progress$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_progress$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_progress$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_progress$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_progress$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_progress$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_progress$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_progress$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_progress$46template, "_expr_8");
  var _el_0 = dart.privateName(material_progress$46template, "_el_0");
  var _el_1 = dart.privateName(material_progress$46template, "_el_1");
  var _el_2 = dart.privateName(material_progress$46template, "_el_2");
  material_progress$46template.ViewMaterialProgressComponent0 = class ViewMaterialProgressComponent0 extends app_view.AppView$(dart.legacy(material_progress.MaterialProgressComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_progress/material_progress.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "progress-container");
      dom_helpers.setAttribute(this[_el_0], "role", "progressbar");
      this.addShimC(this[_el_0]);
      this[_el_1] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_1], "secondary-progress");
      this.addShimC(this[_el_1]);
      this[_el_2] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_2], "active-progress");
      this.addShimC(this[_el_2]);
      _ctx.primary = this[_el_2];
      _ctx.secondary = this[_el_1];
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.ariaValue;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.ariaValueNow;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-valuenow", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.indeterminate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateClassBinding(this[_el_0], "indeterminate", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.useFallbackAnimation;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        dom_helpers.updateClassBinding(this[_el_0], "fallback", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = interpolate.interpolate0(_ctx.min);
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        dom_helpers.setAttribute(this[_el_0], "aria-valuemin", StringL().as(currVal_4));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = interpolate.interpolate0(_ctx.max);
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        dom_helpers.setAttribute(this[_el_0], "aria-valuemax", StringL().as(currVal_5));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.activeAndSecondaryProgressValue;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-label", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.secondaryTransform;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_el_1].style[$setProperty]("transform", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.primaryTransform;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_el_2].style[$setProperty]("transform", currVal_8);
        this[_expr_8] = currVal_8;
      }
    }
    initComponentStyles() {
      let styles = material_progress$46template.ViewMaterialProgressComponent0._componentStyles;
      if (styles == null) {
        material_progress$46template.ViewMaterialProgressComponent0._componentStyles = styles = material_progress$46template.ViewMaterialProgressComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_progress$46template.styles$MaterialProgressComponent, material_progress$46template.ViewMaterialProgressComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_progress$46template.ViewMaterialProgressComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    material_progress$46template.ViewMaterialProgressComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-progress"));
  }).prototype = material_progress$46template.ViewMaterialProgressComponent0.prototype;
  dart.addTypeTests(material_progress$46template.ViewMaterialProgressComponent0);
  dart.addTypeCaches(material_progress$46template.ViewMaterialProgressComponent0);
  dart.setLibraryUri(material_progress$46template.ViewMaterialProgressComponent0, L0);
  dart.setFieldSignature(material_progress$46template.ViewMaterialProgressComponent0, () => ({
    __proto__: dart.getFields(material_progress$46template.ViewMaterialProgressComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_1]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_2]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(material_progress$46template.ViewMaterialProgressComponent0, {
    /*material_progress$46template.ViewMaterialProgressComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_progress$46template, "_compView_0");
  var _MaterialProgressComponent_0_5 = dart.privateName(material_progress$46template, "_MaterialProgressComponent_0_5");
  material_progress$46template._ViewMaterialProgressComponentHost0 = class _ViewMaterialProgressComponentHost0 extends app_view.AppView$(dart.legacy(material_progress.MaterialProgressComponent)) {
    build() {
      this[_compView_0] = new material_progress$46template.ViewMaterialProgressComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialProgressComponent_0_5] = new material_progress.MaterialProgressComponent.new(null, this[_compView_0], this.rootEl);
      this[_compView_0].create(this[_MaterialProgressComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialProgressComponentL()).new(0, this, this.rootEl, this[_MaterialProgressComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialProgressComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialProgressComponent_0_5].ngOnDestroy();
    }
  };
  (material_progress$46template._ViewMaterialProgressComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialProgressComponent_0_5] = null;
    material_progress$46template._ViewMaterialProgressComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_progress$46template._ViewMaterialProgressComponentHost0.prototype;
  dart.addTypeTests(material_progress$46template._ViewMaterialProgressComponentHost0);
  dart.addTypeCaches(material_progress$46template._ViewMaterialProgressComponentHost0);
  dart.setLibraryUri(material_progress$46template._ViewMaterialProgressComponentHost0, L0);
  dart.setFieldSignature(material_progress$46template._ViewMaterialProgressComponentHost0, () => ({
    __proto__: dart.getFields(material_progress$46template._ViewMaterialProgressComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_progress$46template.ViewMaterialProgressComponent0)),
    [_MaterialProgressComponent_0_5]: dart.fieldType(dart.legacy(material_progress.MaterialProgressComponent))
  }));
  material_progress$46template.viewFactory_MaterialProgressComponentHost0 = function viewFactory_MaterialProgressComponentHost0(parentView, parentIndex) {
    return new material_progress$46template._ViewMaterialProgressComponentHost0.new(parentView, parentIndex);
  };
  material_progress$46template.initReflector = function initReflector() {
    if (dart.test(material_progress$46template._visited)) {
      return;
    }
    material_progress$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialProgressComponentL()), material_progress$46template.MaterialProgressComponentNgFactory);
    angular$46template.initReflector();
    feature_detector$46template.initReflector();
  };
  dart.copyProperties(material_progress$46template, {
    get MaterialProgressComponentNgFactory() {
      return material_progress$46template._MaterialProgressComponentNgFactory;
    }
  });
  var C1;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C0;
  var C2;
  dart.defineLazy(material_progress$46template, {
    /*material_progress$46template.styles$MaterialProgressComponent*/get styles$MaterialProgressComponent() {
      return [material_progress$46scss$46css$46shim.styles];
    },
    /*material_progress$46template._MaterialProgressComponentNgFactory*/get _MaterialProgressComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*material_progress$46template.styles$MaterialProgressComponentHost*/get styles$MaterialProgressComponentHost() {
      return C2 || CT.C2;
    },
    /*material_progress$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_progress/material_progress.template", {
    "package:angular_components/material_progress/material_progress.template.dart": material_progress$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_progress.template.dart"],"names":[],"mappings":"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","file":"material_progress.template.ddc.js"}');
  // Exports:
  return {
    material_progress__material_progress$46template: material_progress$46template
  };
}));

//# sourceMappingURL=material_progress.template.ddc.js.map
