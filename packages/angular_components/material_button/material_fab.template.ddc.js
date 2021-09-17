define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/material_button/material_fab', 'packages/angular_components/material_button/material_button_base.template', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/material_button/material_fab.scss.css.shim'], (function load__packages__angular_components__material_button__material_fab_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_ripple__material_ripple$46template, packages__angular_components__material_ripple__material_ripple, packages__angular_components__material_button__material_fab, packages__angular_components__material_button__material_button_base$46template, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__material_button__material_fab$46scss$46css$46shim) {
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
  const material_ripple$46template = packages__angular_components__material_ripple__material_ripple$46template.material_ripple__material_ripple$46template;
  const material_ripple = packages__angular_components__material_ripple__material_ripple.material_ripple__material_ripple;
  const material_fab = packages__angular_components__material_button__material_fab.material_button__material_fab;
  const material_button_base$46template = packages__angular_components__material_button__material_button_base$46template.material_button__material_button_base$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const material_fab$46scss$46css$46shim = packages__angular_components__material_button__material_fab$46scss$46css$46shim.material_button__material_fab$46scss$46css$46shim;
  var material_fab$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var MaterialFabComponentL = () => (MaterialFabComponentL = dart.constFn(dart.legacy(material_fab.MaterialFabComponent)))();
  var ComponentRefOfMaterialFabComponentL = () => (ComponentRefOfMaterialFabComponentL = dart.constFn(component_factory.ComponentRef$(MaterialFabComponentL())))();
  var ComponentFactoryOfMaterialFabComponentL = () => (ComponentFactoryOfMaterialFabComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialFabComponentL())))();
  var AppViewOfMaterialFabComponentL = () => (AppViewOfMaterialFabComponentL = dart.constFn(app_view.AppView$(MaterialFabComponentL())))();
  var AppViewLOfMaterialFabComponentL = () => (AppViewLOfMaterialFabComponentL = dart.constFn(dart.legacy(AppViewOfMaterialFabComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfMaterialFabComponentL = () => (AppViewLAndintLToAppViewLOfMaterialFabComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialFabComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_button/material_fab.template.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(material_fab$46template.viewFactory_MaterialFabComponentHost0, AppViewLAndintLToAppViewLOfMaterialFabComponentL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfMaterialFabComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-fab"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _compView_2 = dart.privateName(material_fab$46template, "_compView_2");
  var _MaterialRippleComponent_2_5 = dart.privateName(material_fab$46template, "_MaterialRippleComponent_2_5");
  var _expr_0 = dart.privateName(material_fab$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_fab$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_fab$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_fab$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_fab$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_fab$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_fab$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_fab$46template, "_expr_7");
  material_fab$46template.ViewMaterialFabComponent0 = class ViewMaterialFabComponent0 extends app_view.AppView$(dart.legacy(material_fab.MaterialFabComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_button/material_fab.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      let doc = html.document;
      let _el_1 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_1, "content");
      this.addShimC(_el_1);
      this.project(_el_1, 0);
      this[_compView_2] = new material_ripple$46template.ViewMaterialRippleComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      parentRenderNode[$append](_el_2);
      this.addShimC(_el_2);
      this[_MaterialRippleComponent_2_5] = new material_ripple.MaterialRippleComponent.new(_el_2);
      this[_compView_2].create0(this[_MaterialRippleComponent_2_5]);
      _el_2[$addEventListener]("mousedown", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'onMouseDown')));
      _el_2[$addEventListener]("mouseup", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'onMouseUp')));
      this.init0();
      _rootEl[$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeyPress')));
      _rootEl[$addEventListener]("mousedown", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'onMouseDown')));
      _rootEl[$addEventListener]("mouseup", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'onMouseUp')));
      _rootEl[$addEventListener]("focus", this.eventHandler1(EventL(), UIEventL(), dart.bind(_ctx, 'onFocus')));
      _rootEl[$addEventListener]("blur", this.eventHandler1(EventL(), UIEventL(), dart.bind(_ctx, 'onBlur')));
    }
    detectChangesInternal() {
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_compView_2].destroyInternalState();
      this[_MaterialRippleComponent_2_5].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.tabIndex;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(this.rootEl, "tabindex", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.ariaRole;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this.rootEl, "role", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabledStr;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateAttribute(this.rootEl, "aria-disabled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "is-disabled", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.hostDisabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        dom_helpers.updateAttribute(this.rootEl, "disabled", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.hostRaised;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        dom_helpers.updateAttribute(this.rootEl, "raised", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.hostClassIsFocused;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "is-focused", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.hostClassIsPressed;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "is-pressed", currVal_7);
        this[_expr_7] = currVal_7;
      }
    }
    initComponentStyles() {
      let styles = material_fab$46template.ViewMaterialFabComponent0._componentStyles;
      if (styles == null) {
        material_fab$46template.ViewMaterialFabComponent0._componentStyles = styles = material_fab$46template.ViewMaterialFabComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_fab$46template.styles$MaterialFabComponent, material_fab$46template.ViewMaterialFabComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_fab$46template.ViewMaterialFabComponent0.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_MaterialRippleComponent_2_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    material_fab$46template.ViewMaterialFabComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-fab"));
    dom_helpers.updateAttribute(this.rootEl, "animated", "true");
  }).prototype = material_fab$46template.ViewMaterialFabComponent0.prototype;
  dart.addTypeTests(material_fab$46template.ViewMaterialFabComponent0);
  dart.addTypeCaches(material_fab$46template.ViewMaterialFabComponent0);
  dart.setLibraryUri(material_fab$46template.ViewMaterialFabComponent0, L0);
  dart.setFieldSignature(material_fab$46template.ViewMaterialFabComponent0, () => ({
    __proto__: dart.getFields(material_fab$46template.ViewMaterialFabComponent0.__proto__),
    [_compView_2]: dart.fieldType(dart.legacy(material_ripple$46template.ViewMaterialRippleComponent0)),
    [_MaterialRippleComponent_2_5]: dart.fieldType(dart.legacy(material_ripple.MaterialRippleComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_7]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(material_fab$46template.ViewMaterialFabComponent0, {
    /*material_fab$46template.ViewMaterialFabComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_fab$46template, "_compView_0");
  var _MaterialFabComponent_0_5 = dart.privateName(material_fab$46template, "_MaterialFabComponent_0_5");
  material_fab$46template._ViewMaterialFabComponentHost0 = class _ViewMaterialFabComponentHost0 extends app_view.AppView$(dart.legacy(material_fab.MaterialFabComponent)) {
    build() {
      this[_compView_0] = new material_fab$46template.ViewMaterialFabComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialFabComponent_0_5] = new material_fab.MaterialFabComponent.new(this.rootEl, this[_compView_0]);
      this[_compView_0].create(this[_MaterialFabComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialFabComponentL()).new(0, this, this.rootEl, this[_MaterialFabComponent_0_5]);
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
  (material_fab$46template._ViewMaterialFabComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialFabComponent_0_5] = null;
    material_fab$46template._ViewMaterialFabComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_fab$46template._ViewMaterialFabComponentHost0.prototype;
  dart.addTypeTests(material_fab$46template._ViewMaterialFabComponentHost0);
  dart.addTypeCaches(material_fab$46template._ViewMaterialFabComponentHost0);
  dart.setLibraryUri(material_fab$46template._ViewMaterialFabComponentHost0, L0);
  dart.setFieldSignature(material_fab$46template._ViewMaterialFabComponentHost0, () => ({
    __proto__: dart.getFields(material_fab$46template._ViewMaterialFabComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_fab$46template.ViewMaterialFabComponent0)),
    [_MaterialFabComponent_0_5]: dart.fieldType(dart.legacy(material_fab.MaterialFabComponent))
  }));
  material_fab$46template.viewFactory_MaterialFabComponentHost0 = function viewFactory_MaterialFabComponentHost0(parentView, parentIndex) {
    return new material_fab$46template._ViewMaterialFabComponentHost0.new(parentView, parentIndex);
  };
  material_fab$46template.initReflector = function initReflector() {
    if (dart.test(material_fab$46template._visited)) {
      return;
    }
    material_fab$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialFabComponentL()), material_fab$46template.MaterialFabComponentNgFactory);
    material_button_base$46template.initReflector();
    angular$46template.initReflector();
    meta$46template.initReflector();
    material_ripple$46template.initReflector();
  };
  dart.copyProperties(material_fab$46template, {
    get MaterialFabComponentNgFactory() {
      return material_fab$46template._MaterialFabComponentNgFactory;
    }
  });
  var C1;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C0;
  var C2;
  dart.defineLazy(material_fab$46template, {
    /*material_fab$46template.styles$MaterialFabComponent*/get styles$MaterialFabComponent() {
      return [material_fab$46scss$46css$46shim.styles];
    },
    /*material_fab$46template._MaterialFabComponentNgFactory*/get _MaterialFabComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*material_fab$46template.styles$MaterialFabComponentHost*/get styles$MaterialFabComponentHost() {
      return C2 || CT.C2;
    },
    /*material_fab$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_button/material_fab.template", {
    "package:angular_components/material_button/material_fab.template.dart": material_fab$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_fab.template.dart"],"names":[],"mappings":"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","file":"material_fab.template.ddc.js"}');
  // Exports:
  return {
    material_button__material_fab$46template: material_fab$46template
  };
}));

//# sourceMappingURL=material_fab.template.ddc.js.map
