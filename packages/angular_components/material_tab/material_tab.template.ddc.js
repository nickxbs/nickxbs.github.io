define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_tab/material_tab', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/material_tab/material_tab.scss.css.shim'], (function load__packages__angular_components__material_tab__material_tab_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_tab__material_tab, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__content__deferred_content_aware, packages__angular__angular$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__focus__focus$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_components__material_tab__material_tab$46scss$46css$46shim) {
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
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const material_tab = packages__angular_components__material_tab__material_tab.material_tab__material_tab;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const material_tab$46scss$46css$46shim = packages__angular_components__material_tab__material_tab$46scss$46css$46shim.material_tab__material_tab$46scss$46css$46shim;
  var material_tab$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var MaterialTabComponentL = () => (MaterialTabComponentL = dart.constFn(dart.legacy(material_tab.MaterialTabComponent)))();
  var IdGeneratorL = () => (IdGeneratorL = dart.constFn(dart.legacy(id_generator.IdGenerator)))();
  var VoidToMaterialTabComponentL = () => (VoidToMaterialTabComponentL = dart.constFn(dart.fnType(MaterialTabComponentL(), [])))();
  var ComponentRefOfMaterialTabComponentL = () => (ComponentRefOfMaterialTabComponentL = dart.constFn(component_factory.ComponentRef$(MaterialTabComponentL())))();
  var TabL = () => (TabL = dart.constFn(dart.legacy(material_tab.Tab)))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var ComponentFactoryOfMaterialTabComponentL = () => (ComponentFactoryOfMaterialTabComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialTabComponentL())))();
  var AppViewOfMaterialTabComponentL = () => (AppViewOfMaterialTabComponentL = dart.constFn(app_view.AppView$(MaterialTabComponentL())))();
  var AppViewLOfMaterialTabComponentL = () => (AppViewLOfMaterialTabComponentL = dart.constFn(dart.legacy(AppViewOfMaterialTabComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialTabComponentL = () => (AppViewLAndintLToAppViewLOfMaterialTabComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialTabComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_tab/material_tab.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_tab$46template.viewFactory_MaterialTabComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(material_tab$46template.viewFactory_MaterialTabComponentHost0, AppViewLAndintLToAppViewLOfMaterialTabComponentL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfMaterialTabComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-tab"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _appEl_0 = dart.privateName(material_tab$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(material_tab$46template, "_NgIf_0_9");
  var _expr_1 = dart.privateName(material_tab$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_tab$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_tab$46template, "_expr_3");
  var C0;
  material_tab$46template.ViewMaterialTabComponent0 = class ViewMaterialTabComponent0 extends app_view.AppView$(dart.legacy(material_tab.MaterialTabComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_tab/material_tab.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.active;
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.active;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "material-tab", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.panelId;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateAttribute(this.rootEl, "id", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.tabId;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        dom_helpers.updateAttribute(this.rootEl, "aria-labelledby", currVal_3);
        this[_expr_3] = currVal_3;
      }
    }
    initComponentStyles() {
      let styles = material_tab$46template.ViewMaterialTabComponent0._componentStyles;
      if (styles == null) {
        material_tab$46template.ViewMaterialTabComponent0._componentStyles = styles = material_tab$46template.ViewMaterialTabComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_tab$46template.styles$MaterialTabComponent, material_tab$46template.ViewMaterialTabComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_tab$46template.ViewMaterialTabComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    material_tab$46template.ViewMaterialTabComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-tab"));
    dom_helpers.updateAttribute(this.rootEl, "role", "tabpanel");
  }).prototype = material_tab$46template.ViewMaterialTabComponent0.prototype;
  dart.addTypeTests(material_tab$46template.ViewMaterialTabComponent0);
  dart.addTypeCaches(material_tab$46template.ViewMaterialTabComponent0);
  dart.setLibraryUri(material_tab$46template.ViewMaterialTabComponent0, L0);
  dart.setFieldSignature(material_tab$46template.ViewMaterialTabComponent0, () => ({
    __proto__: dart.getFields(material_tab$46template.ViewMaterialTabComponent0.__proto__),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_tab$46template.ViewMaterialTabComponent0, {
    /*material_tab$46template.ViewMaterialTabComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  material_tab$46template._ViewMaterialTabComponent1 = class _ViewMaterialTabComponent1 extends app_view.AppView$(dart.legacy(material_tab.MaterialTabComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "tab-content");
      this.addShimC(HtmlElementL().as(_el_0));
      this.project(_el_0, 0);
      this.init1(_el_0);
    }
  };
  (material_tab$46template._ViewMaterialTabComponent1.new = function(parentView, parentIndex) {
    material_tab$46template._ViewMaterialTabComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_tab$46template._ViewMaterialTabComponent1.prototype;
  dart.addTypeTests(material_tab$46template._ViewMaterialTabComponent1);
  dart.addTypeCaches(material_tab$46template._ViewMaterialTabComponent1);
  dart.setLibraryUri(material_tab$46template._ViewMaterialTabComponent1, L0);
  var _compView_0 = dart.privateName(material_tab$46template, "_compView_0");
  var _MaterialTabComponent_0_5 = dart.privateName(material_tab$46template, "_MaterialTabComponent_0_5");
  material_tab$46template._ViewMaterialTabComponentHost0 = class _ViewMaterialTabComponentHost0 extends app_view.AppView$(dart.legacy(material_tab.MaterialTabComponent)) {
    build() {
      this[_compView_0] = new material_tab$46template.ViewMaterialTabComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTabComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTabComponentL(), dart.wrapType(MaterialTabComponentL()), dart.fn(() => new material_tab.MaterialTabComponent.new(this.rootEl, IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.viewData.parentIndex))), VoidToMaterialTabComponentL())) : new material_tab.MaterialTabComponent.new(this.rootEl, IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialTabComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialTabComponentL()).new(0, this, this.rootEl, this[_MaterialTabComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(TabL()) || token === dart.wrapType(DeferredContentAwareL())) && 0 === nodeIndex) {
        return this[_MaterialTabComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_tab$46template._ViewMaterialTabComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTabComponent_0_5] = null;
    material_tab$46template._ViewMaterialTabComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_tab$46template._ViewMaterialTabComponentHost0.prototype;
  dart.addTypeTests(material_tab$46template._ViewMaterialTabComponentHost0);
  dart.addTypeCaches(material_tab$46template._ViewMaterialTabComponentHost0);
  dart.setMethodSignature(material_tab$46template._ViewMaterialTabComponentHost0, () => ({
    __proto__: dart.getMethods(material_tab$46template._ViewMaterialTabComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_tab$46template._ViewMaterialTabComponentHost0, L0);
  dart.setFieldSignature(material_tab$46template._ViewMaterialTabComponentHost0, () => ({
    __proto__: dart.getFields(material_tab$46template._ViewMaterialTabComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_tab$46template.ViewMaterialTabComponent0)),
    [_MaterialTabComponent_0_5]: dart.fieldType(dart.legacy(material_tab.MaterialTabComponent))
  }));
  material_tab$46template.viewFactory_MaterialTabComponent1 = function viewFactory_MaterialTabComponent1(parentView, parentIndex) {
    return new material_tab$46template._ViewMaterialTabComponent1.new(parentView, parentIndex);
  };
  material_tab$46template.viewFactory_MaterialTabComponentHost0 = function viewFactory_MaterialTabComponentHost0(parentView, parentIndex) {
    return new material_tab$46template._ViewMaterialTabComponentHost0.new(parentView, parentIndex);
  };
  material_tab$46template.initReflector = function initReflector() {
    if (dart.test(material_tab$46template._visited)) {
      return;
    }
    material_tab$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialTabComponentL()), material_tab$46template.MaterialTabComponentNgFactory);
    angular$46template.initReflector();
    deferred_content_aware$46template.initReflector();
    focus$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.copyProperties(material_tab$46template, {
    get MaterialTabComponentNgFactory() {
      return material_tab$46template._MaterialTabComponentNgFactory;
    }
  });
  var C2;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C1;
  var C3;
  dart.defineLazy(material_tab$46template, {
    /*material_tab$46template.styles$MaterialTabComponent*/get styles$MaterialTabComponent() {
      return [material_tab$46scss$46css$46shim.styles];
    },
    /*material_tab$46template._MaterialTabComponentNgFactory*/get _MaterialTabComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*material_tab$46template.styles$MaterialTabComponentHost*/get styles$MaterialTabComponentHost() {
      return C3 || CT.C3;
    },
    /*material_tab$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_tab/material_tab.template", {
    "package:angular_components/material_tab/material_tab.template.dart": material_tab$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_tab.template.dart"],"names":[],"mappings":"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","file":"material_tab.template.ddc.js"}');
  // Exports:
  return {
    material_tab__material_tab$46template: material_tab$46template
  };
}));

//# sourceMappingURL=material_tab.template.ddc.js.map
