define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_chips/material_chips', 'packages/angular_components/material_chips/material_chip.template', 'packages/angular_components/material_chips/material_chip', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/angular.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/material_chips/material_chips.scss.css.shim'], (function load__packages__angular_components__material_chips__material_chips_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_chips__material_chips, packages__angular_components__material_chips__material_chip$46template, packages__angular_components__material_chips__material_chip, packages__angular_components__model__ui__has_renderer, packages__angular__angular$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__ui__has_renderer$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__material_chips__material_chips$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
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
  const material_chips = packages__angular_components__material_chips__material_chips.material_chips__material_chips;
  const material_chip$46template = packages__angular_components__material_chips__material_chip$46template.material_chips__material_chip$46template;
  const material_chip = packages__angular_components__material_chips__material_chip.material_chips__material_chip;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const material_chips$46scss$46css$46shim = packages__angular_components__material_chips__material_chips$46scss$46css$46shim.material_chips__material_chips$46scss$46css$46shim;
  var material_chips$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $_get = dartx._get;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var AppViewOfObjectL = () => (AppViewOfObjectL = dart.constFn(app_view.AppView$(ObjectL())))();
  var AppViewLOfObjectL = () => (AppViewLOfObjectL = dart.constFn(dart.legacy(AppViewOfObjectL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLOfObjectLAndintLToAppViewLOfvoid = () => (AppViewLOfObjectLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewLOfObjectL(), intL()])))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MaterialChipsComponentL = () => (MaterialChipsComponentL = dart.constFn(dart.legacy(material_chips.MaterialChipsComponent)))();
  var ComponentFactoryOfMaterialChipsComponentL = () => (ComponentFactoryOfMaterialChipsComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialChipsComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var AppViewLAndintLToAppViewLOfMaterialChipsComponentLOfTL = () => (AppViewLAndintLToAppViewLOfMaterialChipsComponentLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialChipsComponentOfTL = () => (MaterialChipsComponentOfTL = dart.constFn(material_chips.MaterialChipsComponent$(TL())))();
    var MaterialChipsComponentLOfTL = () => (MaterialChipsComponentLOfTL = dart.constFn(dart.legacy(MaterialChipsComponentOfTL())))();
    var AppViewOfMaterialChipsComponentLOfTL = () => (AppViewOfMaterialChipsComponentLOfTL = dart.constFn(app_view.AppView$(MaterialChipsComponentLOfTL())))();
    var AppViewLOfMaterialChipsComponentLOfTL = () => (AppViewLOfMaterialChipsComponentLOfTL = dart.constFn(dart.legacy(AppViewOfMaterialChipsComponentLOfTL())))();
    return [AppViewLOfMaterialChipsComponentLOfTL(), [AppViewL(), intL()]];
  })))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_chips/material_chips.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], dart.dynamic);
    },
    get C3() {
      return C3 = dart.fn(material_chips$46template.viewFactory_MaterialChipsComponentHost0, AppViewLAndintLToAppViewLOfMaterialChipsComponentLOfTL());
    },
    get C2() {
      return C2 = dart.const(dart.gbind(C3 || CT.C3, dart.dynamic));
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfMaterialChipsComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-chips"
      });
    }
  }, false);
  var _appEl_0 = dart.privateName(material_chips$46template, "_appEl_0");
  var _NgFor_0_9 = dart.privateName(material_chips$46template, "_NgFor_0_9");
  var _expr_0 = dart.privateName(material_chips$46template, "_expr_0");
  const _is_ViewMaterialChipsComponent0_default = Symbol('_is_ViewMaterialChipsComponent0_default');
  material_chips$46template.ViewMaterialChipsComponent0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ViewMaterialChipsComponent0 extends app_view.AppView$(dart.legacy(material_chips.MaterialChipsComponent$(dart.legacy(T)))) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_chips/material_chips.dart" : null;
      }
      build() {
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_chips$46template.viewFactory_MaterialChipsComponent1(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgFor_0_9] = new ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
        this.project(parentRenderNode, 0);
        this.init0();
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.selectedItems;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_NgFor_0_9].ngForOf = currVal_0;
          this[_expr_0] = currVal_0;
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_0_9].ngDoCheck();
        }
        this[_appEl_0].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
      }
      initComponentStyles() {
        let styles = material_chips$46template.ViewMaterialChipsComponent0._componentStyles;
        if (styles == null) {
          material_chips$46template.ViewMaterialChipsComponent0._componentStyles = styles = material_chips$46template.ViewMaterialChipsComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_chips$46template.styles$MaterialChipsComponent, material_chips$46template.ViewMaterialChipsComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialChipsComponent0.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgFor_0_9] = null;
      this[_expr_0] = null;
      ViewMaterialChipsComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
      this.initComponentStyles();
      this.rootEl = HtmlElementL().as(html.document[$createElement]("material-chips"));
    }).prototype = ViewMaterialChipsComponent0.prototype;
    dart.addTypeTests(ViewMaterialChipsComponent0);
    ViewMaterialChipsComponent0.prototype[_is_ViewMaterialChipsComponent0_default] = true;
    dart.addTypeCaches(ViewMaterialChipsComponent0);
    dart.setLibraryUri(ViewMaterialChipsComponent0, L0);
    dart.setFieldSignature(ViewMaterialChipsComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialChipsComponent0.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_0_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_0]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialChipsComponent0;
  });
  material_chips$46template.ViewMaterialChipsComponent0 = material_chips$46template.ViewMaterialChipsComponent0$();
  dart.defineLazy(material_chips$46template.ViewMaterialChipsComponent0, {
    /*material_chips$46template.ViewMaterialChipsComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dart.addTypeTests(material_chips$46template.ViewMaterialChipsComponent0, _is_ViewMaterialChipsComponent0_default);
  var _compView_0 = dart.privateName(material_chips$46template, "_compView_0");
  var _MaterialChipComponent_0_5 = dart.privateName(material_chips$46template, "_MaterialChipComponent_0_5");
  var _expr_1 = dart.privateName(material_chips$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_chips$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_chips$46template, "_expr_3");
  var C0;
  const _is__ViewMaterialChipsComponent1_default = Symbol('_is__ViewMaterialChipsComponent1_default');
  material_chips$46template._ViewMaterialChipsComponent1$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialChipComponent0OfTL = () => (ViewMaterialChipComponent0OfTL = dart.constFn(material_chip$46template.ViewMaterialChipComponent0$(TL())))();
    var MaterialChipComponentOfTL = () => (MaterialChipComponentOfTL = dart.constFn(material_chip.MaterialChipComponent$(TL())))();
    var TLToStringL = () => (TLToStringL = dart.constFn(dart.fnType(StringL(), [TL()])))();
    var TLToLStringL = () => (TLToLStringL = dart.constFn(dart.legacy(TLToStringL())))();
    class _ViewMaterialChipsComponent1 extends app_view.AppView$(dart.legacy(material_chips.MaterialChipsComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new (ViewMaterialChipComponent0OfTL()).new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        this.addShimC(_el_0);
        this[_MaterialChipComponent_0_5] = new (MaterialChipComponentOfTL()).new(_el_0);
        this[_compView_0].create(this[_MaterialChipComponent_0_5], JSArrayOfObjectL().of([C0 || CT.C0, C0 || CT.C0]));
        this.init1(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(HasRendererL()) && 0 === nodeIndex) {
          return this[_MaterialChipComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let local_chip = optimizations.unsafeCast(TL(), this.locals[$_get]("$implicit"));
        changed = false;
        let currVal_0 = _ctx.selectionModel;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_MaterialChipComponent_0_5].selectionModel = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.removable;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_MaterialChipComponent_0_5].removable = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = TLToLStringL().as(_ctx.itemRenderer);
        if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_MaterialChipComponent_0_5].itemRenderer = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = local_chip;
        if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_MaterialChipComponent_0_5].value = currVal_3;
          changed = true;
          this[_expr_3] = currVal_3;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
    }
    (_ViewMaterialChipsComponent1.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialChipComponent_0_5] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      _ViewMaterialChipsComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialChipsComponent1.prototype;
    dart.addTypeTests(_ViewMaterialChipsComponent1);
    _ViewMaterialChipsComponent1.prototype[_is__ViewMaterialChipsComponent1_default] = true;
    dart.addTypeCaches(_ViewMaterialChipsComponent1);
    dart.setMethodSignature(_ViewMaterialChipsComponent1, () => ({
      __proto__: dart.getMethods(_ViewMaterialChipsComponent1.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialChipsComponent1, L0);
    dart.setFieldSignature(_ViewMaterialChipsComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialChipsComponent1.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_chip$46template.ViewMaterialChipComponent0$(dart.legacy(T)))),
      [_MaterialChipComponent_0_5]: dart.fieldType(dart.legacy(material_chip.MaterialChipComponent$(dart.legacy(T)))),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_3]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialChipsComponent1;
  });
  material_chips$46template._ViewMaterialChipsComponent1 = material_chips$46template._ViewMaterialChipsComponent1$();
  dart.addTypeTests(material_chips$46template._ViewMaterialChipsComponent1, _is__ViewMaterialChipsComponent1_default);
  var _MaterialChipsComponent_0_5 = dart.privateName(material_chips$46template, "_MaterialChipsComponent_0_5");
  const _is__ViewMaterialChipsComponentHost0_default = Symbol('_is__ViewMaterialChipsComponentHost0_default');
  material_chips$46template._ViewMaterialChipsComponentHost0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialChipsComponent0OfTL = () => (ViewMaterialChipsComponent0OfTL = dart.constFn(material_chips$46template.ViewMaterialChipsComponent0$(TL())))();
    var MaterialChipsComponentOfTL = () => (MaterialChipsComponentOfTL = dart.constFn(material_chips.MaterialChipsComponent$(TL())))();
    var MaterialChipsComponentLOfTL = () => (MaterialChipsComponentLOfTL = dart.constFn(dart.legacy(MaterialChipsComponentOfTL())))();
    var ComponentRefOfMaterialChipsComponentLOfTL = () => (ComponentRefOfMaterialChipsComponentLOfTL = dart.constFn(component_factory.ComponentRef$(MaterialChipsComponentLOfTL())))();
    class _ViewMaterialChipsComponentHost0 extends app_view.AppView$(dart.legacy(material_chips.MaterialChipsComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new (ViewMaterialChipsComponent0OfTL()).new(this, 0);
        this.rootEl = this[_compView_0].rootEl;
        this[_MaterialChipsComponent_0_5] = new (MaterialChipsComponentOfTL()).new(this[_compView_0]);
        this[_compView_0].create(this[_MaterialChipsComponent_0_5], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialChipsComponentLOfTL()).new(0, this, this.rootEl, this[_MaterialChipsComponent_0_5]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(HasRendererL()) && 0 === nodeIndex) {
          return this[_MaterialChipsComponent_0_5];
        }
        return notFoundResult;
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
        this[_MaterialChipsComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialChipsComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialChipsComponent_0_5] = null;
      _ViewMaterialChipsComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
      ;
    }).prototype = _ViewMaterialChipsComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialChipsComponentHost0);
    _ViewMaterialChipsComponentHost0.prototype[_is__ViewMaterialChipsComponentHost0_default] = true;
    dart.addTypeCaches(_ViewMaterialChipsComponentHost0);
    dart.setMethodSignature(_ViewMaterialChipsComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialChipsComponentHost0.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialChipsComponentHost0, L0);
    dart.setFieldSignature(_ViewMaterialChipsComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialChipsComponentHost0.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_chips$46template.ViewMaterialChipsComponent0$(dart.legacy(T)))),
      [_MaterialChipsComponent_0_5]: dart.fieldType(dart.legacy(material_chips.MaterialChipsComponent$(dart.legacy(T))))
    }));
    return _ViewMaterialChipsComponentHost0;
  });
  material_chips$46template._ViewMaterialChipsComponentHost0 = material_chips$46template._ViewMaterialChipsComponentHost0$();
  dart.addTypeTests(material_chips$46template._ViewMaterialChipsComponentHost0, _is__ViewMaterialChipsComponentHost0_default);
  material_chips$46template.viewFactory_MaterialChipsComponent1 = function viewFactory_MaterialChipsComponent1(T, parentView, parentIndex) {
    return new (material_chips$46template._ViewMaterialChipsComponent1$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_chips$46template.viewFactory_MaterialChipsComponentHost0 = function viewFactory_MaterialChipsComponentHost0(T, parentView, parentIndex) {
    return new (material_chips$46template._ViewMaterialChipsComponentHost0$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_chips$46template.initReflector = function initReflector() {
    if (dart.test(material_chips$46template._visited)) {
      return;
    }
    material_chips$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialChipsComponentL()), material_chips$46template.MaterialChipsComponentNgFactory);
    angular$46template.initReflector();
    material_chip$46template.initReflector();
    selection_model$46template.initReflector();
    has_renderer$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(material_chips$46template, {
    get MaterialChipsComponentNgFactory() {
      return material_chips$46template._MaterialChipsComponentNgFactory;
    }
  });
  var C3;
  var C2;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C1;
  dart.defineLazy(material_chips$46template, {
    /*material_chips$46template.styles$MaterialChipsComponent*/get styles$MaterialChipsComponent() {
      return [material_chips$46scss$46css$46shim.styles];
    },
    /*material_chips$46template._MaterialChipsComponentNgFactory*/get _MaterialChipsComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*material_chips$46template.styles$MaterialChipsComponentHost*/get styles$MaterialChipsComponentHost() {
      return C0 || CT.C0;
    },
    /*material_chips$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_chips/material_chips.template", {
    "package:angular_components/material_chips/material_chips.template.dart": material_chips$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_chips.template.dart"],"names":[],"mappings":"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","file":"material_chips.template.ddc.js"}');
  // Exports:
  return {
    material_chips__material_chips$46template: material_chips$46template
  };
}));

//# sourceMappingURL=material_chips.template.ddc.js.map
