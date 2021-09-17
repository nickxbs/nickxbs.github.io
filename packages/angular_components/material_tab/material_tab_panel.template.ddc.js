define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_tab/fixed_material_tab_strip.template', 'packages/angular_components/material_tab/fixed_material_tab_strip', 'packages/angular_components/material_tab/tab_change_event', 'packages/angular_components/material_tab/material_tab_panel', 'packages/angular_components/material_tab/material_tab', 'packages/angular/angular.template', 'packages/angular_components/material_tab/material_tab.template', 'packages/angular_components/material_tab/tab_change_event.template', 'packages/angular_components/material_tab/material_tab_panel.scss.css.shim'], (function load__packages__angular_components__material_tab__material_tab_panel_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_tab__fixed_material_tab_strip$46template, packages__angular_components__material_tab__fixed_material_tab_strip, packages__angular_components__material_tab__tab_change_event, packages__angular_components__material_tab__material_tab_panel, packages__angular_components__material_tab__material_tab, packages__angular__angular$46template, packages__angular_components__material_tab__material_tab$46template, packages__angular_components__material_tab__tab_change_event$46template, packages__angular_components__material_tab__material_tab_panel$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const fixed_material_tab_strip$46template = packages__angular_components__material_tab__fixed_material_tab_strip$46template.material_tab__fixed_material_tab_strip$46template;
  const fixed_material_tab_strip = packages__angular_components__material_tab__fixed_material_tab_strip.material_tab__fixed_material_tab_strip;
  const tab_change_event = packages__angular_components__material_tab__tab_change_event.material_tab__tab_change_event;
  const material_tab_panel = packages__angular_components__material_tab__material_tab_panel.material_tab__material_tab_panel;
  const material_tab = packages__angular_components__material_tab__material_tab.material_tab__material_tab;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const material_tab$46template = packages__angular_components__material_tab__material_tab$46template.material_tab__material_tab$46template;
  const tab_change_event$46template = packages__angular_components__material_tab__tab_change_event$46template.material_tab__tab_change_event$46template;
  const material_tab_panel$46scss$46css$46shim = packages__angular_components__material_tab__material_tab_panel$46scss$46css$46shim.material_tab__material_tab_panel$46scss$46css$46shim;
  var material_tab_panel$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var FixedMaterialTabStripComponentL = () => (FixedMaterialTabStripComponentL = dart.constFn(dart.legacy(fixed_material_tab_strip.FixedMaterialTabStripComponent)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToFixedMaterialTabStripComponentL = () => (VoidToFixedMaterialTabStripComponentL = dart.constFn(dart.fnType(FixedMaterialTabStripComponentL(), [])))();
  var TabChangeEventL = () => (TabChangeEventL = dart.constFn(dart.legacy(tab_change_event.TabChangeEvent)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var TabL = () => (TabL = dart.constFn(dart.legacy(material_tab.Tab)))();
  var JSArrayOfTabL = () => (JSArrayOfTabL = dart.constFn(_interceptors.JSArray$(TabL())))();
  var MaterialTabPanelComponentL = () => (MaterialTabPanelComponentL = dart.constFn(dart.legacy(material_tab_panel.MaterialTabPanelComponent)))();
  var ComponentRefOfMaterialTabPanelComponentL = () => (ComponentRefOfMaterialTabPanelComponentL = dart.constFn(component_factory.ComponentRef$(MaterialTabPanelComponentL())))();
  var ComponentFactoryOfMaterialTabPanelComponentL = () => (ComponentFactoryOfMaterialTabPanelComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialTabPanelComponentL())))();
  var AppViewOfMaterialTabPanelComponentL = () => (AppViewOfMaterialTabPanelComponentL = dart.constFn(app_view.AppView$(MaterialTabPanelComponentL())))();
  var AppViewLOfMaterialTabPanelComponentL = () => (AppViewLOfMaterialTabPanelComponentL = dart.constFn(dart.legacy(AppViewOfMaterialTabPanelComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfMaterialTabPanelComponentL = () => (AppViewLAndintLToAppViewLOfMaterialTabPanelComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialTabPanelComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_tab/material_tab_panel.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "isRtl"
      });
    },
    get C1() {
      return C1 = dart.constList([], ObjectL());
    },
    get C3() {
      return C3 = dart.fn(material_tab_panel$46template.viewFactory_MaterialTabPanelComponentHost0, AppViewLAndintLToAppViewLOfMaterialTabPanelComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfMaterialTabPanelComponentL().prototype,
        [ComponentFactory__viewFactory]: C3 || CT.C3,
        [ComponentFactory_selector]: "material-tab-panel"
      });
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _compView_0 = dart.privateName(material_tab_panel$46template, "_compView_0");
  var _FixedMaterialTabStripComponent_0_5 = dart.privateName(material_tab_panel$46template, "_FixedMaterialTabStripComponent_0_5");
  var _expr_0 = dart.privateName(material_tab_panel$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_tab_panel$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_tab_panel$46template, "_expr_2");
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C0;
  var C1;
  material_tab_panel$46template.ViewMaterialTabPanelComponent0 = class ViewMaterialTabPanelComponent0 extends app_view.AppView$(dart.legacy(material_tab_panel.MaterialTabPanelComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_tab/material_tab_panel.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_FixedMaterialTabStripComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(FixedMaterialTabStripComponentL(), dart.wrapType(FixedMaterialTabStripComponentL()), dart.fn(() => new fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this[_compView_0], boolL().as(this.parentView.injectorGetOptional(C0 || CT.C0, this.viewData.parentIndex))), VoidToFixedMaterialTabStripComponentL())) : new fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this[_compView_0], boolL().as(this.parentView.injectorGetOptional(C0 || CT.C0, this.viewData.parentIndex)));
      this[_compView_0].create0(this[_FixedMaterialTabStripComponent_0_5]);
      this.project(parentRenderNode, 0);
      let subscription_0 = this[_FixedMaterialTabStripComponent_0_5].beforeTabChange.listen(this.eventHandler1(TabChangeEventL(), TabChangeEventL(), dart.bind(_ctx, 'onBeforeTabChange')));
      let subscription_1 = this[_FixedMaterialTabStripComponent_0_5].tabChange.listen(this.eventHandler1(TabChangeEventL(), TabChangeEventL(), dart.bind(_ctx, 'onTabChange')));
      this.init(C1 || CT.C1, JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.tabIds;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_FixedMaterialTabStripComponent_0_5].tabIds = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.activeTabIndex;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_FixedMaterialTabStripComponent_0_5].activeTabIndex = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.tabLabels;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_FixedMaterialTabStripComponent_0_5].tabLabels = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    initComponentStyles() {
      let styles = material_tab_panel$46template.ViewMaterialTabPanelComponent0._componentStyles;
      if (styles == null) {
        material_tab_panel$46template.ViewMaterialTabPanelComponent0._componentStyles = styles = material_tab_panel$46template.ViewMaterialTabPanelComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_tab_panel$46template.styles$MaterialTabPanelComponent, material_tab_panel$46template.ViewMaterialTabPanelComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_tab_panel$46template.ViewMaterialTabPanelComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FixedMaterialTabStripComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    material_tab_panel$46template.ViewMaterialTabPanelComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-tab-panel"));
    this.updateChildClassNonHtml(this.rootEl, "themeable");
  }).prototype = material_tab_panel$46template.ViewMaterialTabPanelComponent0.prototype;
  dart.addTypeTests(material_tab_panel$46template.ViewMaterialTabPanelComponent0);
  dart.addTypeCaches(material_tab_panel$46template.ViewMaterialTabPanelComponent0);
  dart.setLibraryUri(material_tab_panel$46template.ViewMaterialTabPanelComponent0, L0);
  dart.setFieldSignature(material_tab_panel$46template.ViewMaterialTabPanelComponent0, () => ({
    __proto__: dart.getFields(material_tab_panel$46template.ViewMaterialTabPanelComponent0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0)),
    [_FixedMaterialTabStripComponent_0_5]: dart.fieldType(dart.legacy(fixed_material_tab_strip.FixedMaterialTabStripComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.legacy(core.int)),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_tab_panel$46template.ViewMaterialTabPanelComponent0, {
    /*material_tab_panel$46template.ViewMaterialTabPanelComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _MaterialTabPanelComponent_0_5 = dart.privateName(material_tab_panel$46template, "_MaterialTabPanelComponent_0_5");
  material_tab_panel$46template._ViewMaterialTabPanelComponentHost0 = class _ViewMaterialTabPanelComponentHost0 extends app_view.AppView$(dart.legacy(material_tab_panel.MaterialTabPanelComponent)) {
    build() {
      this[_compView_0] = new material_tab_panel$46template.ViewMaterialTabPanelComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTabPanelComponent_0_5] = new material_tab_panel.MaterialTabPanelComponent.new(this[_compView_0]);
      this[_MaterialTabPanelComponent_0_5].tabs = JSArrayOfTabL().of([]);
      this[_compView_0].create(this[_MaterialTabPanelComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialTabPanelComponentL()).new(0, this, this.rootEl, this[_MaterialTabPanelComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialTabPanelComponent_0_5].ngAfterContentInit();
        }
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTabPanelComponent_0_5] = null;
    material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.prototype;
  dart.addTypeTests(material_tab_panel$46template._ViewMaterialTabPanelComponentHost0);
  dart.addTypeCaches(material_tab_panel$46template._ViewMaterialTabPanelComponentHost0);
  dart.setLibraryUri(material_tab_panel$46template._ViewMaterialTabPanelComponentHost0, L0);
  dart.setFieldSignature(material_tab_panel$46template._ViewMaterialTabPanelComponentHost0, () => ({
    __proto__: dart.getFields(material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_tab_panel$46template.ViewMaterialTabPanelComponent0)),
    [_MaterialTabPanelComponent_0_5]: dart.fieldType(dart.legacy(material_tab_panel.MaterialTabPanelComponent))
  }));
  material_tab_panel$46template.viewFactory_MaterialTabPanelComponentHost0 = function viewFactory_MaterialTabPanelComponentHost0(parentView, parentIndex) {
    return new material_tab_panel$46template._ViewMaterialTabPanelComponentHost0.new(parentView, parentIndex);
  };
  material_tab_panel$46template.initReflector = function initReflector() {
    if (dart.test(material_tab_panel$46template._visited)) {
      return;
    }
    material_tab_panel$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialTabPanelComponentL()), material_tab_panel$46template.MaterialTabPanelComponentNgFactory);
    angular$46template.initReflector();
    fixed_material_tab_strip$46template.initReflector();
    material_tab$46template.initReflector();
    tab_change_event$46template.initReflector();
  };
  dart.copyProperties(material_tab_panel$46template, {
    get MaterialTabPanelComponentNgFactory() {
      return material_tab_panel$46template._MaterialTabPanelComponentNgFactory;
    }
  });
  var C3;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C4;
  dart.defineLazy(material_tab_panel$46template, {
    /*material_tab_panel$46template.styles$MaterialTabPanelComponent*/get styles$MaterialTabPanelComponent() {
      return [material_tab_panel$46scss$46css$46shim.styles];
    },
    /*material_tab_panel$46template._MaterialTabPanelComponentNgFactory*/get _MaterialTabPanelComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*material_tab_panel$46template.styles$MaterialTabPanelComponentHost*/get styles$MaterialTabPanelComponentHost() {
      return C4 || CT.C4;
    },
    /*material_tab_panel$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_tab/material_tab_panel.template", {
    "package:angular_components/material_tab/material_tab_panel.template.dart": material_tab_panel$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_tab_panel.template.dart"],"names":[],"mappings":"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","file":"material_tab_panel.template.ddc.js"}');
  // Exports:
  return {
    material_tab__material_tab_panel$46template: material_tab_panel$46template
  };
}));

//# sourceMappingURL=material_tab_panel.template.ddc.js.map
