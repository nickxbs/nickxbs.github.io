define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/ui/icon.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_components/material_checkbox/material_checkbox.scss.css.shim'], (function load__packages__angular_components__material_checkbox__material_checkbox_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular__src__runtime__interpolate, packages__angular_components__material_checkbox__material_checkbox, packages__angular_components__material_ripple__material_ripple$46template, packages__angular_components__material_ripple__material_ripple, packages__angular_components__interfaces__has_disabled, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__focus__focus$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__model__ui__icon$46template, packages__angular_components__utils__browser__events__events$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_forms__angular_forms$46template, packages__angular_components__material_checkbox__material_checkbox$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
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
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_checkbox = packages__angular_components__material_checkbox__material_checkbox.material_checkbox__material_checkbox;
  const material_ripple$46template = packages__angular_components__material_ripple__material_ripple$46template.material_ripple__material_ripple$46template;
  const material_ripple = packages__angular_components__material_ripple__material_ripple.material_ripple__material_ripple;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const icon$46template = packages__angular_components__model__ui__icon$46template.model__ui__icon$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const angular_forms$46template = packages__angular_forms__angular_forms$46template.angular_forms$46template;
  const material_checkbox$46scss$46css$46shim = packages__angular_components__material_checkbox__material_checkbox$46scss$46css$46shim.material_checkbox__material_checkbox$46scss$46css$46shim;
  var material_checkbox$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $setProperty = dartx.setProperty;
  var $toString = dartx.toString;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var MaterialCheckboxComponentL = () => (MaterialCheckboxComponentL = dart.constFn(dart.legacy(material_checkbox.MaterialCheckboxComponent)))();
  var ComponentRefOfMaterialCheckboxComponentL = () => (ComponentRefOfMaterialCheckboxComponentL = dart.constFn(component_factory.ComponentRef$(MaterialCheckboxComponentL())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ComponentFactoryOfMaterialCheckboxComponentL = () => (ComponentFactoryOfMaterialCheckboxComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialCheckboxComponentL())))();
  var AppViewOfMaterialCheckboxComponentL = () => (AppViewOfMaterialCheckboxComponentL = dart.constFn(app_view.AppView$(MaterialCheckboxComponentL())))();
  var AppViewLOfMaterialCheckboxComponentL = () => (AppViewLOfMaterialCheckboxComponentL = dart.constFn(dart.legacy(AppViewOfMaterialCheckboxComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialCheckboxComponentL = () => (AppViewLAndintLToAppViewLOfMaterialCheckboxComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialCheckboxComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_checkbox/material_checkbox.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_checkbox$46template.viewFactory_MaterialCheckboxComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(material_checkbox$46template.viewFactory_MaterialCheckboxComponentHost0, AppViewLAndintLToAppViewLOfMaterialCheckboxComponentL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfMaterialCheckboxComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-checkbox"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _textBinding_4 = dart.privateName(material_checkbox$46template, "_textBinding_4");
  var _compView_1 = dart.privateName(material_checkbox$46template, "_compView_1");
  var _MaterialIconComponent_1_5 = dart.privateName(material_checkbox$46template, "_MaterialIconComponent_1_5");
  var _appEl_2 = dart.privateName(material_checkbox$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(material_checkbox$46template, "_NgIf_2_9");
  var _expr_0 = dart.privateName(material_checkbox$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_checkbox$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_checkbox$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_checkbox$46template, "_expr_3");
  var _expr_6 = dart.privateName(material_checkbox$46template, "_expr_6");
  var _expr_8 = dart.privateName(material_checkbox$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_checkbox$46template, "_expr_9");
  var _el_0 = dart.privateName(material_checkbox$46template, "_el_0");
  var _el_1 = dart.privateName(material_checkbox$46template, "_el_1");
  var _el_3 = dart.privateName(material_checkbox$46template, "_el_3");
  var C0;
  material_checkbox$46template.ViewMaterialCheckboxComponent0 = class ViewMaterialCheckboxComponent0 extends app_view.AppView$(dart.legacy(material_checkbox.MaterialCheckboxComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_checkbox/material_checkbox.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "icon-container");
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      dom_helpers.setAttribute(this[_el_1], "aria-hidden", "true");
      this.updateChildClassNonHtml(this[_el_1], "icon");
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_1]));
      this[_compView_1].create0(this[_MaterialIconComponent_1_5]);
      let _anchor_2 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C0 || CT.C0);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_el_3] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_3], "content");
      this.addShimC(this[_el_3]);
      this[_el_3][$append](this[_textBinding_4].element);
      let _text_5 = dom_helpers.appendText(this[_el_3], " ");
      this.project(this[_el_3], 0);
      this.init0();
      _rootEl[$addEventListener]("keyup", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeyUp')));
      _rootEl[$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("mousedown", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'handleMouseDown')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeyPress')));
      _rootEl[$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'handleFocus')));
      _rootEl[$addEventListener]("blur", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'handleBlur')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_3 = _ctx.icon;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialIconComponent_1_5].icon = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.disabled);
      this[_appEl_2].detectChangesInNestedViews();
      let currVal_0 = _ctx.showFocus;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(this[_el_0], "focus", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.themeColor;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_el_1].style[$setProperty]("color", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = dart.test(_ctx.checked) || dart.test(_ctx.indeterminate);
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_1], "filled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      if (firstCheck) {
        if (_ctx.contentId != null) {
          dom_helpers.setProperty(this[_el_3], "id", _ctx.contentId);
        }
      }
      this[_textBinding_4].updateText(interpolate.interpolateString0(_ctx.label));
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_compView_1].destroyInternalState();
    }
    detectHostChanges(firstCheck) {
      let t0;
      let _ctx = this.ctx;
      if (dart.test(firstCheck)) {
        if (_ctx.role != null) {
          dom_helpers.updateAttribute(this.rootEl, "role", _ctx.role);
        }
        if (_ctx.contentId != null) {
          dom_helpers.updateAttribute(this.rootEl, "aria-labelledby", _ctx.contentId);
        }
      }
      let currVal_6 = _ctx.tabIndex;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        dom_helpers.updateAttribute(this.rootEl, "tabindex", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_8 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "disabled", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        dom_helpers.updateAttribute(this.rootEl, "aria-disabled", (t0 = currVal_9, t0 == null ? null : dart.toString(t0)));
        this[_expr_9] = currVal_9;
      }
    }
    initComponentStyles() {
      let styles = material_checkbox$46template.ViewMaterialCheckboxComponent0._componentStyles;
      if (styles == null) {
        material_checkbox$46template.ViewMaterialCheckboxComponent0._componentStyles = styles = material_checkbox$46template.ViewMaterialCheckboxComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_checkbox$46template.styles$MaterialCheckboxComponent, material_checkbox$46template.ViewMaterialCheckboxComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_checkbox$46template.ViewMaterialCheckboxComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_4] = new text_binding.TextBinding.new();
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_6] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    material_checkbox$46template.ViewMaterialCheckboxComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-checkbox"));
    this.updateChildClassNonHtml(this.rootEl, "themeable");
  }).prototype = material_checkbox$46template.ViewMaterialCheckboxComponent0.prototype;
  dart.addTypeTests(material_checkbox$46template.ViewMaterialCheckboxComponent0);
  dart.addTypeCaches(material_checkbox$46template.ViewMaterialCheckboxComponent0);
  dart.setLibraryUri(material_checkbox$46template.ViewMaterialCheckboxComponent0, L0);
  dart.setFieldSignature(material_checkbox$46template.ViewMaterialCheckboxComponent0, () => ({
    __proto__: dart.getFields(material_checkbox$46template.ViewMaterialCheckboxComponent0.__proto__),
    [_textBinding_4]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_1]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_1_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_1]: dart.fieldType(dart.legacy(html.Element)),
    [_el_3]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(material_checkbox$46template.ViewMaterialCheckboxComponent0, {
    /*material_checkbox$46template.ViewMaterialCheckboxComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_checkbox$46template, "_compView_0");
  var _MaterialRippleComponent_0_5 = dart.privateName(material_checkbox$46template, "_MaterialRippleComponent_0_5");
  material_checkbox$46template._ViewMaterialCheckboxComponent1 = class _ViewMaterialCheckboxComponent1 extends app_view.AppView$(dart.legacy(material_checkbox.MaterialCheckboxComponent)) {
    build() {
      this[_compView_0] = new material_ripple$46template.ViewMaterialRippleComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "ripple");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_MaterialRippleComponent_0_5] = new material_ripple.MaterialRippleComponent.new(HtmlElementL().as(this[_el_0]));
      this[_compView_0].create0(this[_MaterialRippleComponent_0_5]);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.rippleColor;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_el_0].style[$setProperty]("color", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialRippleComponent_0_5].ngOnDestroy();
    }
  };
  (material_checkbox$46template._ViewMaterialCheckboxComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialRippleComponent_0_5] = null;
    this[_expr_0] = null;
    this[_el_0] = null;
    material_checkbox$46template._ViewMaterialCheckboxComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_checkbox$46template._ViewMaterialCheckboxComponent1.prototype;
  dart.addTypeTests(material_checkbox$46template._ViewMaterialCheckboxComponent1);
  dart.addTypeCaches(material_checkbox$46template._ViewMaterialCheckboxComponent1);
  dart.setLibraryUri(material_checkbox$46template._ViewMaterialCheckboxComponent1, L0);
  dart.setFieldSignature(material_checkbox$46template._ViewMaterialCheckboxComponent1, () => ({
    __proto__: dart.getFields(material_checkbox$46template._ViewMaterialCheckboxComponent1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_ripple$46template.ViewMaterialRippleComponent0)),
    [_MaterialRippleComponent_0_5]: dart.fieldType(dart.legacy(material_ripple.MaterialRippleComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _MaterialCheckboxComponent_0_5 = dart.privateName(material_checkbox$46template, "_MaterialCheckboxComponent_0_5");
  material_checkbox$46template._ViewMaterialCheckboxComponentHost0 = class _ViewMaterialCheckboxComponentHost0 extends app_view.AppView$(dart.legacy(material_checkbox.MaterialCheckboxComponent)) {
    build() {
      this[_compView_0] = new material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialCheckboxComponent_0_5] = new material_checkbox.MaterialCheckboxComponent.new(this.rootEl, this[_compView_0], null, null, null);
      this[_compView_0].create(this[_MaterialCheckboxComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialCheckboxComponentL()).new(0, this, this.rootEl, this[_MaterialCheckboxComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
        return this[_MaterialCheckboxComponent_0_5];
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
      this[_MaterialCheckboxComponent_0_5].ngOnDestroy();
    }
  };
  (material_checkbox$46template._ViewMaterialCheckboxComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialCheckboxComponent_0_5] = null;
    material_checkbox$46template._ViewMaterialCheckboxComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_checkbox$46template._ViewMaterialCheckboxComponentHost0.prototype;
  dart.addTypeTests(material_checkbox$46template._ViewMaterialCheckboxComponentHost0);
  dart.addTypeCaches(material_checkbox$46template._ViewMaterialCheckboxComponentHost0);
  dart.setMethodSignature(material_checkbox$46template._ViewMaterialCheckboxComponentHost0, () => ({
    __proto__: dart.getMethods(material_checkbox$46template._ViewMaterialCheckboxComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_checkbox$46template._ViewMaterialCheckboxComponentHost0, L0);
  dart.setFieldSignature(material_checkbox$46template._ViewMaterialCheckboxComponentHost0, () => ({
    __proto__: dart.getFields(material_checkbox$46template._ViewMaterialCheckboxComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_checkbox$46template.ViewMaterialCheckboxComponent0)),
    [_MaterialCheckboxComponent_0_5]: dart.fieldType(dart.legacy(material_checkbox.MaterialCheckboxComponent))
  }));
  material_checkbox$46template.viewFactory_MaterialCheckboxComponent1 = function viewFactory_MaterialCheckboxComponent1(parentView, parentIndex) {
    return new material_checkbox$46template._ViewMaterialCheckboxComponent1.new(parentView, parentIndex);
  };
  material_checkbox$46template.viewFactory_MaterialCheckboxComponentHost0 = function viewFactory_MaterialCheckboxComponentHost0(parentView, parentIndex) {
    return new material_checkbox$46template._ViewMaterialCheckboxComponentHost0.new(parentView, parentIndex);
  };
  material_checkbox$46template.initReflector = function initReflector() {
    if (dart.test(material_checkbox$46template._visited)) {
      return;
    }
    material_checkbox$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialCheckboxComponentL()), material_checkbox$46template.MaterialCheckboxComponentNgFactory);
    angular$46template.initReflector();
    meta$46template.initReflector();
    focus$46template.initReflector();
    has_disabled$46template.initReflector();
    material_icon$46template.initReflector();
    material_ripple$46template.initReflector();
    icon$46template.initReflector();
    events$46template.initReflector();
    id_generator$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.copyProperties(material_checkbox$46template, {
    get MaterialCheckboxComponentNgFactory() {
      return material_checkbox$46template._MaterialCheckboxComponentNgFactory;
    }
  });
  var C2;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C1;
  var C3;
  dart.defineLazy(material_checkbox$46template, {
    /*material_checkbox$46template.styles$MaterialCheckboxComponent*/get styles$MaterialCheckboxComponent() {
      return [material_checkbox$46scss$46css$46shim.styles];
    },
    /*material_checkbox$46template._MaterialCheckboxComponentNgFactory*/get _MaterialCheckboxComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*material_checkbox$46template.styles$MaterialCheckboxComponentHost*/get styles$MaterialCheckboxComponentHost() {
      return C3 || CT.C3;
    },
    /*material_checkbox$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_checkbox/material_checkbox.template", {
    "package:angular_components/material_checkbox/material_checkbox.template.dart": material_checkbox$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_checkbox.template.dart"],"names":[],"mappings":"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","file":"material_checkbox.template.ddc.js"}');
  // Exports:
  return {
    material_checkbox__material_checkbox$46template: material_checkbox$46template
  };
}));

//# sourceMappingURL=material_checkbox.template.ddc.js.map
