define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_tab/tab_button', 'packages/angular/angular.template', 'packages/angular_components/material_button/material_button_base.template', 'packages/angular_components/material_tab/tab_mixin.template', 'packages/angular_components/material_tab/tab_button.scss.css.shim'], (function load__packages__angular_components__material_tab__tab_button_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_ripple__material_ripple$46template, packages__angular_components__material_ripple__material_ripple, packages__angular__src__runtime__interpolate, packages__angular_components__material_tab__tab_button, packages__angular__angular$46template, packages__angular_components__material_button__material_button_base$46template, packages__angular_components__material_tab__tab_mixin$46template, packages__angular_components__material_tab__tab_button$46scss$46css$46shim) {
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
  const material_ripple$46template = packages__angular_components__material_ripple__material_ripple$46template.material_ripple__material_ripple$46template;
  const material_ripple = packages__angular_components__material_ripple__material_ripple.material_ripple__material_ripple;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const tab_button = packages__angular_components__material_tab__tab_button.material_tab__tab_button;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const material_button_base$46template = packages__angular_components__material_button__material_button_base$46template.material_button__material_button_base$46template;
  const tab_mixin$46template = packages__angular_components__material_tab__tab_mixin$46template.material_tab__tab_mixin$46template;
  const tab_button$46scss$46css$46shim = packages__angular_components__material_tab__tab_button$46scss$46css$46shim.material_tab__tab_button$46scss$46css$46shim;
  var tab_button$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var TabButtonComponentL = () => (TabButtonComponentL = dart.constFn(dart.legacy(tab_button.TabButtonComponent)))();
  var ComponentRefOfTabButtonComponentL = () => (ComponentRefOfTabButtonComponentL = dart.constFn(component_factory.ComponentRef$(TabButtonComponentL())))();
  var ComponentFactoryOfTabButtonComponentL = () => (ComponentFactoryOfTabButtonComponentL = dart.constFn(component_factory.ComponentFactory$(TabButtonComponentL())))();
  var AppViewOfTabButtonComponentL = () => (AppViewOfTabButtonComponentL = dart.constFn(app_view.AppView$(TabButtonComponentL())))();
  var AppViewLOfTabButtonComponentL = () => (AppViewLOfTabButtonComponentL = dart.constFn(dart.legacy(AppViewOfTabButtonComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfTabButtonComponentL = () => (AppViewLAndintLToAppViewLOfTabButtonComponentL = dart.constFn(dart.fnType(AppViewLOfTabButtonComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_tab/tab_button.template.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(tab_button$46template.viewFactory_TabButtonComponentHost0, AppViewLAndintLToAppViewLOfTabButtonComponentL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfTabButtonComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "tab-button"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _textBinding_1 = dart.privateName(tab_button$46template, "_textBinding_1");
  var _compView_2 = dart.privateName(tab_button$46template, "_compView_2");
  var _MaterialRippleComponent_2_5 = dart.privateName(tab_button$46template, "_MaterialRippleComponent_2_5");
  var _expr_0 = dart.privateName(tab_button$46template, "_expr_0");
  var _expr_1 = dart.privateName(tab_button$46template, "_expr_1");
  var _expr_2 = dart.privateName(tab_button$46template, "_expr_2");
  var _expr_3 = dart.privateName(tab_button$46template, "_expr_3");
  var _expr_4 = dart.privateName(tab_button$46template, "_expr_4");
  var _expr_5 = dart.privateName(tab_button$46template, "_expr_5");
  var _expr_6 = dart.privateName(tab_button$46template, "_expr_6");
  tab_button$46template.ViewTabButtonComponent0 = class ViewTabButtonComponent0 extends app_view.AppView$(dart.legacy(tab_button.TabButtonComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_tab/tab_button.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "content");
      this.addShimC(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this[_compView_2] = new material_ripple$46template.ViewMaterialRippleComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      parentRenderNode[$append](_el_2);
      this.addShimC(_el_2);
      this[_MaterialRippleComponent_2_5] = new material_ripple.MaterialRippleComponent.new(_el_2);
      this[_compView_2].create0(this[_MaterialRippleComponent_2_5]);
      this.init0();
      _rootEl[$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeyPress')));
      _rootEl[$addEventListener]("mousedown", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'onMouseDown')));
      _rootEl[$addEventListener]("mouseup", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'onMouseUp')));
      _rootEl[$addEventListener]("focus", this.eventHandler1(EventL(), UIEventL(), dart.bind(_ctx, 'onFocus')));
      _rootEl[$addEventListener]("blur", this.eventHandler1(EventL(), UIEventL(), dart.bind(_ctx, 'onBlur')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.label));
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
      let currVal_4 = _ctx.hostClassFocus;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "focus", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.hostClassActive;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "active", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.hostDisabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        dom_helpers.updateAttribute(this.rootEl, "disabled", currVal_6);
        this[_expr_6] = currVal_6;
      }
    }
    initComponentStyles() {
      let styles = tab_button$46template.ViewTabButtonComponent0._componentStyles;
      if (styles == null) {
        tab_button$46template.ViewTabButtonComponent0._componentStyles = styles = tab_button$46template.ViewTabButtonComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(tab_button$46template.styles$TabButtonComponent, tab_button$46template.ViewTabButtonComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (tab_button$46template.ViewTabButtonComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_compView_2] = null;
    this[_MaterialRippleComponent_2_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    tab_button$46template.ViewTabButtonComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("tab-button"));
  }).prototype = tab_button$46template.ViewTabButtonComponent0.prototype;
  dart.addTypeTests(tab_button$46template.ViewTabButtonComponent0);
  dart.addTypeCaches(tab_button$46template.ViewTabButtonComponent0);
  dart.setLibraryUri(tab_button$46template.ViewTabButtonComponent0, L0);
  dart.setFieldSignature(tab_button$46template.ViewTabButtonComponent0, () => ({
    __proto__: dart.getFields(tab_button$46template.ViewTabButtonComponent0.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_2]: dart.fieldType(dart.legacy(material_ripple$46template.ViewMaterialRippleComponent0)),
    [_MaterialRippleComponent_2_5]: dart.fieldType(dart.legacy(material_ripple.MaterialRippleComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_5]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(tab_button$46template.ViewTabButtonComponent0, {
    /*tab_button$46template.ViewTabButtonComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(tab_button$46template, "_compView_0");
  var _TabButtonComponent_0_5 = dart.privateName(tab_button$46template, "_TabButtonComponent_0_5");
  tab_button$46template._ViewTabButtonComponentHost0 = class _ViewTabButtonComponentHost0 extends app_view.AppView$(dart.legacy(tab_button.TabButtonComponent)) {
    build() {
      this[_compView_0] = new tab_button$46template.ViewTabButtonComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_TabButtonComponent_0_5] = new tab_button.TabButtonComponent.new(this.rootEl);
      this[_compView_0].create(this[_TabButtonComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfTabButtonComponentL()).new(0, this, this.rootEl, this[_TabButtonComponent_0_5]);
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
  (tab_button$46template._ViewTabButtonComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_TabButtonComponent_0_5] = null;
    tab_button$46template._ViewTabButtonComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = tab_button$46template._ViewTabButtonComponentHost0.prototype;
  dart.addTypeTests(tab_button$46template._ViewTabButtonComponentHost0);
  dart.addTypeCaches(tab_button$46template._ViewTabButtonComponentHost0);
  dart.setLibraryUri(tab_button$46template._ViewTabButtonComponentHost0, L0);
  dart.setFieldSignature(tab_button$46template._ViewTabButtonComponentHost0, () => ({
    __proto__: dart.getFields(tab_button$46template._ViewTabButtonComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(tab_button$46template.ViewTabButtonComponent0)),
    [_TabButtonComponent_0_5]: dart.fieldType(dart.legacy(tab_button.TabButtonComponent))
  }));
  tab_button$46template.viewFactory_TabButtonComponentHost0 = function viewFactory_TabButtonComponentHost0(parentView, parentIndex) {
    return new tab_button$46template._ViewTabButtonComponentHost0.new(parentView, parentIndex);
  };
  tab_button$46template.initReflector = function initReflector() {
    if (dart.test(tab_button$46template._visited)) {
      return;
    }
    tab_button$46template._visited = true;
    reflector.registerComponent(dart.wrapType(TabButtonComponentL()), tab_button$46template.TabButtonComponentNgFactory);
    angular$46template.initReflector();
    material_button_base$46template.initReflector();
    material_ripple$46template.initReflector();
    tab_mixin$46template.initReflector();
  };
  dart.copyProperties(tab_button$46template, {
    get TabButtonComponentNgFactory() {
      return tab_button$46template._TabButtonComponentNgFactory;
    }
  });
  var C1;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C0;
  var C2;
  dart.defineLazy(tab_button$46template, {
    /*tab_button$46template.styles$TabButtonComponent*/get styles$TabButtonComponent() {
      return [tab_button$46scss$46css$46shim.styles];
    },
    /*tab_button$46template._TabButtonComponentNgFactory*/get _TabButtonComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*tab_button$46template.styles$TabButtonComponentHost*/get styles$TabButtonComponentHost() {
      return C2 || CT.C2;
    },
    /*tab_button$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_tab/tab_button.template", {
    "package:angular_components/material_tab/tab_button.template.dart": tab_button$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tab_button.template.dart"],"names":[],"mappings":"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","file":"tab_button.template.ddc.js"}');
  // Exports:
  return {
    material_tab__tab_button$46template: tab_button$46template
  };
}));

//# sourceMappingURL=tab_button.template.ddc.js.map
