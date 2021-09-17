define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_toggle/material_toggle', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_components/material_toggle/material_toggle.scss.css.shim'], (function load__packages__angular_components__material_toggle__material_toggle_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular__src__runtime__interpolate, packages__angular_components__material_toggle__material_toggle, packages__angular__src__runtime__text_binding, packages__angular_components__interfaces__has_disabled, packages__angular__angular$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__utils__browser__events__events$46template, packages__angular_forms__angular_forms$46template, packages__angular_components__material_toggle__material_toggle$46scss$46css$46shim) {
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
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_toggle = packages__angular_components__material_toggle__material_toggle.material_toggle__material_toggle;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  const angular_forms$46template = packages__angular_forms__angular_forms$46template.angular_forms$46template;
  const material_toggle$46scss$46css$46shim = packages__angular_components__material_toggle__material_toggle$46scss$46css$46shim.material_toggle__material_toggle$46scss$46css$46shim;
  var material_toggle$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var $append = dartx.append;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MaterialToggleComponentL = () => (MaterialToggleComponentL = dart.constFn(dart.legacy(material_toggle.MaterialToggleComponent)))();
  var ComponentRefOfMaterialToggleComponentL = () => (ComponentRefOfMaterialToggleComponentL = dart.constFn(component_factory.ComponentRef$(MaterialToggleComponentL())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ComponentFactoryOfMaterialToggleComponentL = () => (ComponentFactoryOfMaterialToggleComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialToggleComponentL())))();
  var AppViewOfMaterialToggleComponentL = () => (AppViewOfMaterialToggleComponentL = dart.constFn(app_view.AppView$(MaterialToggleComponentL())))();
  var AppViewLOfMaterialToggleComponentL = () => (AppViewLOfMaterialToggleComponentL = dart.constFn(dart.legacy(AppViewOfMaterialToggleComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialToggleComponentL = () => (AppViewLAndintLToAppViewLOfMaterialToggleComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialToggleComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_toggle/material_toggle.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_toggle$46template.viewFactory_MaterialToggleComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(material_toggle$46template.viewFactory_MaterialToggleComponentHost0, AppViewLAndintLToAppViewLOfMaterialToggleComponentL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfMaterialToggleComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-toggle"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _appEl_1 = dart.privateName(material_toggle$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(material_toggle$46template, "_NgIf_1_9");
  var _expr_0 = dart.privateName(material_toggle$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_toggle$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_toggle$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_toggle$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_toggle$46template, "_expr_4");
  var _expr_6 = dart.privateName(material_toggle$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_toggle$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_toggle$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_toggle$46template, "_expr_9");
  var _el_0 = dart.privateName(material_toggle$46template, "_el_0");
  var _el_3 = dart.privateName(material_toggle$46template, "_el_3");
  var _el_5 = dart.privateName(material_toggle$46template, "_el_5");
  var _el_6 = dart.privateName(material_toggle$46template, "_el_6");
  var C0;
  var _handle_blur_0_0 = dart.privateName(material_toggle$46template, "_handle_blur_0_0");
  var _handle_focus_0_1 = dart.privateName(material_toggle$46template, "_handle_focus_0_1");
  var _handle_mouseenter_0_2 = dart.privateName(material_toggle$46template, "_handle_mouseenter_0_2");
  var _handle_mouseleave_0_3 = dart.privateName(material_toggle$46template, "_handle_mouseleave_0_3");
  material_toggle$46template.ViewMaterialToggleComponent0 = class ViewMaterialToggleComponent0 extends app_view.AppView$(dart.legacy(material_toggle.MaterialToggleComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_toggle/material_toggle.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "material-toggle");
      dom_helpers.setAttribute(this[_el_0], "role", "button");
      this.addShimC(this[_el_0]);
      let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_2, "tgl-container");
      this.addShimC(_el_2);
      this[_el_3] = dom_helpers.appendDiv(doc, _el_2);
      dom_helpers.setAttribute(this[_el_3], "animated", "");
      this.updateChildClass(this[_el_3], "tgl-bar");
      this.addShimC(this[_el_3]);
      let _el_4 = dom_helpers.appendDiv(doc, _el_2);
      this.updateChildClass(_el_4, "tgl-btn-container");
      this.addShimC(_el_4);
      this[_el_5] = dom_helpers.appendDiv(doc, _el_4);
      this.updateChildClass(this[_el_5], "tgl-btn-underlay");
      this.addShimC(this[_el_5]);
      this[_el_6] = dom_helpers.appendDiv(doc, this[_el_5]);
      dom_helpers.setAttribute(this[_el_6], "animated", "");
      this.updateChildClass(this[_el_6], "tgl-btn");
      this.addShimC(this[_el_6]);
      this.project(this[_el_6], 0);
      this[_el_0][$addEventListener]("blur", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_blur_0_0)));
      this[_el_0][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_focus_0_1)));
      this[_el_0][$addEventListener]("mouseenter", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_mouseenter_0_2)));
      this[_el_0][$addEventListener]("mouseleave", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_mouseleave_0_3)));
      _ctx.toggleElement = this[_el_0];
      this.init0();
      _rootEl[$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeyPress')));
    }
    detectChangesInternal() {
      let t0;
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = _ctx.hasLabel;
      this[_appEl_1].detectChangesInNestedViews();
      let currVal_0 = _ctx.checked;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(this[_el_0], "checked", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBinding(this[_el_0], "disabled", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = dart.test(_ctx.disabled) ? "-1" : "0";
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateAttribute(this[_el_0], "tabindex", (t0 = currVal_2, t0 === null ? null : t0[$toString]()));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = interpolate.interpolate0(_ctx.disabled);
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        dom_helpers.setAttribute(this[_el_0], "aria-disabled", StringL().as(currVal_3));
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = interpolate.interpolateString0(_ctx.ariaLabel);
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        dom_helpers.setAttribute(this[_el_0], "aria-label", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_6 = interpolate.interpolate0(_ctx.shadow_z);
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        dom_helpers.setAttribute(this[_el_3], "elevation", StringL().as(currVal_6));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.checked;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        dom_helpers.updateClassBinding(this[_el_5], "under-checked", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.hasFocus;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        dom_helpers.updateClassBinding(this[_el_5], "under-focus", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = interpolate.interpolate0(_ctx.shadow_z);
      if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        dom_helpers.setAttribute(this[_el_6], "elevation", StringL().as(currVal_9));
        this[_expr_9] = currVal_9;
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
    [_handle_blur_0_0]($36event) {
      let _ctx = this.ctx;
      _ctx.hasFocus = false;
    }
    [_handle_focus_0_1]($36event) {
      let _ctx = this.ctx;
      _ctx.hasFocus = true;
    }
    [_handle_mouseenter_0_2]($36event) {
      let _ctx = this.ctx;
      _ctx.isHovered = true;
    }
    [_handle_mouseleave_0_3]($36event) {
      let _ctx = this.ctx;
      _ctx.isHovered = false;
    }
    initComponentStyles() {
      let styles = material_toggle$46template.ViewMaterialToggleComponent0._componentStyles;
      if (styles == null) {
        material_toggle$46template.ViewMaterialToggleComponent0._componentStyles = styles = material_toggle$46template.ViewMaterialToggleComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_toggle$46template.styles$MaterialToggleComponent, material_toggle$46template.ViewMaterialToggleComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_toggle$46template.ViewMaterialToggleComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_el_0] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    this[_el_6] = null;
    material_toggle$46template.ViewMaterialToggleComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-toggle"));
    this.updateChildClassNonHtml(this.rootEl, "themeable");
  }).prototype = material_toggle$46template.ViewMaterialToggleComponent0.prototype;
  dart.addTypeTests(material_toggle$46template.ViewMaterialToggleComponent0);
  dart.addTypeCaches(material_toggle$46template.ViewMaterialToggleComponent0);
  dart.setMethodSignature(material_toggle$46template.ViewMaterialToggleComponent0, () => ({
    __proto__: dart.getMethods(material_toggle$46template.ViewMaterialToggleComponent0.__proto__),
    [_handle_blur_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_focus_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_mouseenter_0_2]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_mouseleave_0_3]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_toggle$46template.ViewMaterialToggleComponent0, L0);
  dart.setFieldSignature(material_toggle$46template.ViewMaterialToggleComponent0, () => ({
    __proto__: dart.getFields(material_toggle$46template.ViewMaterialToggleComponent0.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_8]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_3]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_5]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_6]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(material_toggle$46template.ViewMaterialToggleComponent0, {
    /*material_toggle$46template.ViewMaterialToggleComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_1 = dart.privateName(material_toggle$46template, "_textBinding_1");
  material_toggle$46template._ViewMaterialToggleComponent1 = class _ViewMaterialToggleComponent1 extends app_view.AppView$(dart.legacy(material_toggle.MaterialToggleComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "tgl-lbl");
      this.addShimC(HtmlElementL().as(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.label));
    }
  };
  (material_toggle$46template._ViewMaterialToggleComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_toggle$46template._ViewMaterialToggleComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_toggle$46template._ViewMaterialToggleComponent1.prototype;
  dart.addTypeTests(material_toggle$46template._ViewMaterialToggleComponent1);
  dart.addTypeCaches(material_toggle$46template._ViewMaterialToggleComponent1);
  dart.setLibraryUri(material_toggle$46template._ViewMaterialToggleComponent1, L0);
  dart.setFieldSignature(material_toggle$46template._ViewMaterialToggleComponent1, () => ({
    __proto__: dart.getFields(material_toggle$46template._ViewMaterialToggleComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _compView_0 = dart.privateName(material_toggle$46template, "_compView_0");
  var _MaterialToggleComponent_0_5 = dart.privateName(material_toggle$46template, "_MaterialToggleComponent_0_5");
  material_toggle$46template._ViewMaterialToggleComponentHost0 = class _ViewMaterialToggleComponentHost0 extends app_view.AppView$(dart.legacy(material_toggle.MaterialToggleComponent)) {
    build() {
      this[_compView_0] = new material_toggle$46template.ViewMaterialToggleComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialToggleComponent_0_5] = new material_toggle.MaterialToggleComponent.new(this[_compView_0], null);
      this[_compView_0].create(this[_MaterialToggleComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialToggleComponentL()).new(0, this, this.rootEl, this[_MaterialToggleComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
        return this[_MaterialToggleComponent_0_5];
      }
      return notFoundResult;
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
          this[_MaterialToggleComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_toggle$46template._ViewMaterialToggleComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialToggleComponent_0_5] = null;
    material_toggle$46template._ViewMaterialToggleComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_toggle$46template._ViewMaterialToggleComponentHost0.prototype;
  dart.addTypeTests(material_toggle$46template._ViewMaterialToggleComponentHost0);
  dart.addTypeCaches(material_toggle$46template._ViewMaterialToggleComponentHost0);
  dart.setMethodSignature(material_toggle$46template._ViewMaterialToggleComponentHost0, () => ({
    __proto__: dart.getMethods(material_toggle$46template._ViewMaterialToggleComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_toggle$46template._ViewMaterialToggleComponentHost0, L0);
  dart.setFieldSignature(material_toggle$46template._ViewMaterialToggleComponentHost0, () => ({
    __proto__: dart.getFields(material_toggle$46template._ViewMaterialToggleComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_toggle$46template.ViewMaterialToggleComponent0)),
    [_MaterialToggleComponent_0_5]: dart.fieldType(dart.legacy(material_toggle.MaterialToggleComponent))
  }));
  material_toggle$46template.viewFactory_MaterialToggleComponent1 = function viewFactory_MaterialToggleComponent1(parentView, parentIndex) {
    return new material_toggle$46template._ViewMaterialToggleComponent1.new(parentView, parentIndex);
  };
  material_toggle$46template.viewFactory_MaterialToggleComponentHost0 = function viewFactory_MaterialToggleComponentHost0(parentView, parentIndex) {
    return new material_toggle$46template._ViewMaterialToggleComponentHost0.new(parentView, parentIndex);
  };
  material_toggle$46template.initReflector = function initReflector() {
    if (dart.test(material_toggle$46template._visited)) {
      return;
    }
    material_toggle$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialToggleComponentL()), material_toggle$46template.MaterialToggleComponentNgFactory);
    angular$46template.initReflector();
    has_disabled$46template.initReflector();
    events$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.copyProperties(material_toggle$46template, {
    get MaterialToggleComponentNgFactory() {
      return material_toggle$46template._MaterialToggleComponentNgFactory;
    }
  });
  var C2;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C1;
  var C3;
  dart.defineLazy(material_toggle$46template, {
    /*material_toggle$46template.styles$MaterialToggleComponent*/get styles$MaterialToggleComponent() {
      return [material_toggle$46scss$46css$46shim.styles];
    },
    /*material_toggle$46template._MaterialToggleComponentNgFactory*/get _MaterialToggleComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*material_toggle$46template.styles$MaterialToggleComponentHost*/get styles$MaterialToggleComponentHost() {
      return C3 || CT.C3;
    },
    /*material_toggle$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_toggle/material_toggle.template", {
    "package:angular_components/material_toggle/material_toggle.template.dart": material_toggle$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_toggle.template.dart"],"names":[],"mappings":"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","file":"material_toggle.template.ddc.js"}');
  // Exports:
  return {
    material_toggle__material_toggle$46template: material_toggle$46template
  };
}));

//# sourceMappingURL=material_toggle.template.ddc.js.map
