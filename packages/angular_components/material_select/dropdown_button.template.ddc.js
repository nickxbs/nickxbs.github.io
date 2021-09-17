define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/material_select/dropdown_button', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/glyph/glyph', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/focus/focus_interface', 'packages/angular/angular.template', 'packages/angular_components/focus/focus_interface.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/mixins/button_wrapper.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/button_decorator/button_decorator.scss.css.shim', 'packages/angular_components/material_select/dropdown_button.scss.css.shim'], (function load__packages__angular_components__material_select__dropdown_button_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__button_decorator__button_decorator, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__material_select__dropdown_button, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__angular_components__glyph__glyph$46template, packages__angular_components__glyph__glyph, packages__angular_components__interfaces__has_disabled, packages__angular_components__focus__focus_interface, packages__angular__angular$46template, packages__angular_components__focus__focus_interface$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__mixins__button_wrapper$46template, packages__angular_components__mixins__focusable_mixin$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_components__button_decorator__button_decorator$46scss$46css$46shim, packages__angular_components__material_select__dropdown_button$46scss$46css$46shim) {
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
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const dropdown_button = packages__angular_components__material_select__dropdown_button.material_select__dropdown_button;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const glyph$46template = packages__angular_components__glyph__glyph$46template.glyph__glyph$46template;
  const glyph = packages__angular_components__glyph__glyph.glyph__glyph;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus_interface$46template = packages__angular_components__focus__focus_interface$46template.focus__focus_interface$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const button_wrapper$46template = packages__angular_components__mixins__button_wrapper$46template.mixins__button_wrapper$46template;
  const focusable_mixin$46template = packages__angular_components__mixins__focusable_mixin$46template.mixins__focusable_mixin$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const button_decorator$46scss$46css$46shim = packages__angular_components__button_decorator__button_decorator$46scss$46css$46shim.button_decorator__button_decorator$46scss$46css$46shim;
  const dropdown_button$46scss$46css$46shim = packages__angular_components__material_select__dropdown_button$46scss$46css$46shim.material_select__dropdown_button$46scss$46css$46shim;
  var dropdown_button$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var $append = dartx.append;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var KeyboardOnlyFocusIndicatorDirectiveL = () => (KeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var VoidToKeyboardOnlyFocusIndicatorDirectiveL = () => (VoidToKeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.fnType(KeyboardOnlyFocusIndicatorDirectiveL(), [])))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var DropdownButtonComponentL = () => (DropdownButtonComponentL = dart.constFn(dart.legacy(dropdown_button.DropdownButtonComponent)))();
  var ComponentRefOfDropdownButtonComponentL = () => (ComponentRefOfDropdownButtonComponentL = dart.constFn(component_factory.ComponentRef$(DropdownButtonComponentL())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var ComponentFactoryOfDropdownButtonComponentL = () => (ComponentFactoryOfDropdownButtonComponentL = dart.constFn(component_factory.ComponentFactory$(DropdownButtonComponentL())))();
  var AppViewOfDropdownButtonComponentL = () => (AppViewOfDropdownButtonComponentL = dart.constFn(app_view.AppView$(DropdownButtonComponentL())))();
  var AppViewLOfDropdownButtonComponentL = () => (AppViewLOfDropdownButtonComponentL = dart.constFn(dart.legacy(AppViewOfDropdownButtonComponentL())))();
  var AppViewLAndintLToAppViewLOfDropdownButtonComponentL = () => (AppViewLAndintLToAppViewLOfDropdownButtonComponentL = dart.constFn(dart.fnType(AppViewLOfDropdownButtonComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_select/dropdown_button.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(dropdown_button$46template.viewFactory_DropdownButtonComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(dropdown_button$46template.viewFactory_DropdownButtonComponent2, AppViewLAndintLToAppViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(dropdown_button$46template.viewFactory_DropdownButtonComponent3, AppViewLAndintLToAppViewLOfvoid());
    },
    get C4() {
      return C4 = dart.fn(dropdown_button$46template.viewFactory_DropdownButtonComponentHost0, AppViewLAndintLToAppViewLOfDropdownButtonComponentL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfDropdownButtonComponentL().prototype,
        [ComponentFactory__viewFactory]: C4 || CT.C4,
        [ComponentFactory_selector]: "dropdown-button"
      });
    },
    get C5() {
      return C5 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _ButtonDirective_0_5 = dart.privateName(dropdown_button$46template, "_ButtonDirective_0_5");
  var _KeyboardOnlyFocusIndicatorDirective_0_6 = dart.privateName(dropdown_button$46template, "_KeyboardOnlyFocusIndicatorDirective_0_6");
  var _appEl_1 = dart.privateName(dropdown_button$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(dropdown_button$46template, "_NgIf_1_9");
  var _appEl_3 = dart.privateName(dropdown_button$46template, "_appEl_3");
  var _NgIf_3_9 = dart.privateName(dropdown_button$46template, "_NgIf_3_9");
  var _appEl_4 = dart.privateName(dropdown_button$46template, "_appEl_4");
  var _NgIf_4_9 = dart.privateName(dropdown_button$46template, "_NgIf_4_9");
  var _expr_1 = dart.privateName(dropdown_button$46template, "_expr_1");
  var _expr_2 = dart.privateName(dropdown_button$46template, "_expr_2");
  var _expr_3 = dart.privateName(dropdown_button$46template, "_expr_3");
  var _expr_4 = dart.privateName(dropdown_button$46template, "_expr_4");
  var _expr_5 = dart.privateName(dropdown_button$46template, "_expr_5");
  var _expr_6 = dart.privateName(dropdown_button$46template, "_expr_6");
  var _expr_7 = dart.privateName(dropdown_button$46template, "_expr_7");
  var _expr_8 = dart.privateName(dropdown_button$46template, "_expr_8");
  var _expr_9 = dart.privateName(dropdown_button$46template, "_expr_9");
  var _expr_10 = dart.privateName(dropdown_button$46template, "_expr_10");
  var _expr_11 = dart.privateName(dropdown_button$46template, "_expr_11");
  var _expr_12 = dart.privateName(dropdown_button$46template, "_expr_12");
  var _el_0 = dart.privateName(dropdown_button$46template, "_el_0");
  var C0;
  var C1;
  var C2;
  var _handle_focus_0_0 = dart.privateName(dropdown_button$46template, "_handle_focus_0_0");
  var _handle_blur_0_1 = dart.privateName(dropdown_button$46template, "_handle_blur_0_1");
  var _handle_click_0_2 = dart.privateName(dropdown_button$46template, "_handle_click_0_2");
  dropdown_button$46template.ViewDropdownButtonComponent0 = class ViewDropdownButtonComponent0 extends app_view.AppView$(dart.legacy(dropdown_button.DropdownButtonComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_select/dropdown_button.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClass(this[_el_0], "button");
      dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_0], DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)));
      let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _text_2 = dom_helpers.appendText(this[_el_0], " ");
      this.project(this[_el_0], 0);
      let _anchor_3 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_3] = new view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C1 || CT.C1);
      this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _anchor_4 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_4] = new view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C2 || CT.C2);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      this[_el_0][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_focus_0_0)));
      this[_el_0][$addEventListener]("blur", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_blur_0_1)));
      this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_click_0_2)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'keydown')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_6], 'onMouseInteraction')));
      _ctx.button = this[_ButtonDirective_0_5].instance;
      this.init0();
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ButtonDirectiveL()) && dart.notNull(nodeIndex) <= 3) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t0;
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_10 = _ctx.ariaRole;
      if (dart.test(app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_ButtonDirective_0_5].instance.role = currVal_10;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_ButtonDirective_0_5].instance.disabled = currVal_11;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.tabbable;
      if (dart.test(app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_ButtonDirective_0_5].instance.tabbable = currVal_12;
        this[_expr_12] = currVal_12;
      }
      this[_NgIf_1_9].ngIf = _ctx.buttonText != null;
      this[_NgIf_3_9].ngIf = _ctx.buttonIcon != null;
      this[_NgIf_4_9].ngIf = _ctx.invalid;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      if (firstCheck) {
        if (_ctx.uuid != null) {
          dom_helpers.updateAttribute(this[_el_0], "id", _ctx.uuid);
        }
      }
      let currVal_1 = _ctx.buttonAriaLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.ariaLabelledBy;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-labelledby", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.ariaDescribedBy;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-describedby", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.showButtonBorder;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        dom_helpers.updateClassBinding(this[_el_0], "border", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.invalid;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        dom_helpers.updateClassBinding(this[_el_0], "invalid", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.popupType;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-haspopup", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.ariaOwns;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-owns", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.ariaExpanded;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-expanded", (t0 = currVal_8, t0 == null ? null : dart.toString(t0)));
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.ariaActiveDescendant;
      if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-activedescendant", currVal_9);
        this[_expr_9] = currVal_9;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
    }
    [_handle_focus_0_0]($36event) {
      let _ctx = this.ctx;
      _ctx.handleFocus(FocusEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].onFocus(EventL().as($36event));
    }
    [_handle_blur_0_1]($36event) {
      let _ctx = this.ctx;
      _ctx.handleBlur(FocusEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].resetOutline();
    }
    [_handle_click_0_2]($36event) {
      this[_ButtonDirective_0_5].instance.handleClick(MouseEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_6].onMouseInteraction();
    }
    initComponentStyles() {
      let styles = dropdown_button$46template.ViewDropdownButtonComponent0._componentStyles;
      if (styles == null) {
        dropdown_button$46template.ViewDropdownButtonComponent0._componentStyles = styles = dropdown_button$46template.ViewDropdownButtonComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(dropdown_button$46template.styles$DropdownButtonComponent, dropdown_button$46template.ViewDropdownButtonComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (dropdown_button$46template.ViewDropdownButtonComponent0.new = function(parentView, parentIndex) {
    this[_ButtonDirective_0_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_6] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
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
    this[_expr_12] = null;
    this[_el_0] = null;
    dropdown_button$46template.ViewDropdownButtonComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("dropdown-button"));
  }).prototype = dropdown_button$46template.ViewDropdownButtonComponent0.prototype;
  dart.addTypeTests(dropdown_button$46template.ViewDropdownButtonComponent0);
  dart.addTypeCaches(dropdown_button$46template.ViewDropdownButtonComponent0);
  dart.setMethodSignature(dropdown_button$46template.ViewDropdownButtonComponent0, () => ({
    __proto__: dart.getMethods(dropdown_button$46template.ViewDropdownButtonComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_focus_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_blur_0_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_0_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(dropdown_button$46template.ViewDropdownButtonComponent0, L0);
  dart.setFieldSignature(dropdown_button$46template.ViewDropdownButtonComponent0, () => ({
    __proto__: dart.getFields(dropdown_button$46template.ViewDropdownButtonComponent0.__proto__),
    [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_KeyboardOnlyFocusIndicatorDirective_0_6]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_5]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.legacy(core.String)),
    [_expr_11]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_12]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(dropdown_button$46template.ViewDropdownButtonComponent0, {
    /*dropdown_button$46template.ViewDropdownButtonComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_1 = dart.privateName(dropdown_button$46template, "_textBinding_1");
  dropdown_button$46template._ViewDropdownButtonComponent1 = class _ViewDropdownButtonComponent1 extends app_view.AppView$(dart.legacy(dropdown_button.DropdownButtonComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_0), "button-text");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.buttonText));
    }
  };
  (dropdown_button$46template._ViewDropdownButtonComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    dropdown_button$46template._ViewDropdownButtonComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = dropdown_button$46template._ViewDropdownButtonComponent1.prototype;
  dart.addTypeTests(dropdown_button$46template._ViewDropdownButtonComponent1);
  dart.addTypeCaches(dropdown_button$46template._ViewDropdownButtonComponent1);
  dart.setLibraryUri(dropdown_button$46template._ViewDropdownButtonComponent1, L0);
  dart.setFieldSignature(dropdown_button$46template._ViewDropdownButtonComponent1, () => ({
    __proto__: dart.getFields(dropdown_button$46template._ViewDropdownButtonComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _compView_0 = dart.privateName(dropdown_button$46template, "_compView_0");
  var _GlyphComponent_0_5 = dart.privateName(dropdown_button$46template, "_GlyphComponent_0_5");
  var _expr_0 = dart.privateName(dropdown_button$46template, "_expr_0");
  dropdown_button$46template._ViewDropdownButtonComponent2 = class _ViewDropdownButtonComponent2 extends app_view.AppView$(dart.legacy(dropdown_button.DropdownButtonComponent)) {
    build() {
      this[_compView_0] = new glyph$46template.ViewGlyphComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(_el_0, "icon");
      this.addShimC(_el_0);
      this[_GlyphComponent_0_5] = new glyph.GlyphComponent.new(_el_0);
      this[_compView_0].create0(this[_GlyphComponent_0_5]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.buttonIcon;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_GlyphComponent_0_5].icon = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (dropdown_button$46template._ViewDropdownButtonComponent2.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_GlyphComponent_0_5] = null;
    this[_expr_0] = null;
    dropdown_button$46template._ViewDropdownButtonComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = dropdown_button$46template._ViewDropdownButtonComponent2.prototype;
  dart.addTypeTests(dropdown_button$46template._ViewDropdownButtonComponent2);
  dart.addTypeCaches(dropdown_button$46template._ViewDropdownButtonComponent2);
  dart.setLibraryUri(dropdown_button$46template._ViewDropdownButtonComponent2, L0);
  dart.setFieldSignature(dropdown_button$46template._ViewDropdownButtonComponent2, () => ({
    __proto__: dart.getFields(dropdown_button$46template._ViewDropdownButtonComponent2.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(glyph$46template.ViewGlyphComponent0)),
    [_GlyphComponent_0_5]: dart.fieldType(dart.legacy(glyph.GlyphComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dropdown_button$46template._ViewDropdownButtonComponent3 = class _ViewDropdownButtonComponent3 extends app_view.AppView$(dart.legacy(dropdown_button.DropdownButtonComponent)) {
    build() {
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "error-text");
      dom_helpers.setAttribute(this[_el_0], "role", "alert");
      this.addShimC(this[_el_0]);
      this[_el_0][$append](this[_textBinding_1].element);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.invalid;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(this[_el_0], "invalid", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = interpolate.interpolate0(!dart.test(_ctx.invalid));
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.setAttribute(this[_el_0], "aria-hidden", StringL().as(currVal_1));
        this[_expr_1] = currVal_1;
      }
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.error));
    }
  };
  (dropdown_button$46template._ViewDropdownButtonComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    dropdown_button$46template._ViewDropdownButtonComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = dropdown_button$46template._ViewDropdownButtonComponent3.prototype;
  dart.addTypeTests(dropdown_button$46template._ViewDropdownButtonComponent3);
  dart.addTypeCaches(dropdown_button$46template._ViewDropdownButtonComponent3);
  dart.setLibraryUri(dropdown_button$46template._ViewDropdownButtonComponent3, L0);
  dart.setFieldSignature(dropdown_button$46template._ViewDropdownButtonComponent3, () => ({
    __proto__: dart.getFields(dropdown_button$46template._ViewDropdownButtonComponent3.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _DropdownButtonComponent_0_5 = dart.privateName(dropdown_button$46template, "_DropdownButtonComponent_0_5");
  dropdown_button$46template._ViewDropdownButtonComponentHost0 = class _ViewDropdownButtonComponentHost0 extends app_view.AppView$(dart.legacy(dropdown_button.DropdownButtonComponent)) {
    build() {
      this[_compView_0] = new dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DropdownButtonComponent_0_5] = new dropdown_button.DropdownButtonComponent.new();
      this[_compView_0].create(this[_DropdownButtonComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfDropdownButtonComponentL()).new(0, this, this.rootEl, this[_DropdownButtonComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(FocusableL())) && 0 === nodeIndex) {
        return this[_DropdownButtonComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DropdownButtonComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (dropdown_button$46template._ViewDropdownButtonComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DropdownButtonComponent_0_5] = null;
    dropdown_button$46template._ViewDropdownButtonComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = dropdown_button$46template._ViewDropdownButtonComponentHost0.prototype;
  dart.addTypeTests(dropdown_button$46template._ViewDropdownButtonComponentHost0);
  dart.addTypeCaches(dropdown_button$46template._ViewDropdownButtonComponentHost0);
  dart.setMethodSignature(dropdown_button$46template._ViewDropdownButtonComponentHost0, () => ({
    __proto__: dart.getMethods(dropdown_button$46template._ViewDropdownButtonComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(dropdown_button$46template._ViewDropdownButtonComponentHost0, L0);
  dart.setFieldSignature(dropdown_button$46template._ViewDropdownButtonComponentHost0, () => ({
    __proto__: dart.getFields(dropdown_button$46template._ViewDropdownButtonComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(dropdown_button$46template.ViewDropdownButtonComponent0)),
    [_DropdownButtonComponent_0_5]: dart.fieldType(dart.legacy(dropdown_button.DropdownButtonComponent))
  }));
  dropdown_button$46template.viewFactory_DropdownButtonComponent1 = function viewFactory_DropdownButtonComponent1(parentView, parentIndex) {
    return new dropdown_button$46template._ViewDropdownButtonComponent1.new(parentView, parentIndex);
  };
  dropdown_button$46template.viewFactory_DropdownButtonComponent2 = function viewFactory_DropdownButtonComponent2(parentView, parentIndex) {
    return new dropdown_button$46template._ViewDropdownButtonComponent2.new(parentView, parentIndex);
  };
  dropdown_button$46template.viewFactory_DropdownButtonComponent3 = function viewFactory_DropdownButtonComponent3(parentView, parentIndex) {
    return new dropdown_button$46template._ViewDropdownButtonComponent3.new(parentView, parentIndex);
  };
  dropdown_button$46template.viewFactory_DropdownButtonComponentHost0 = function viewFactory_DropdownButtonComponentHost0(parentView, parentIndex) {
    return new dropdown_button$46template._ViewDropdownButtonComponentHost0.new(parentView, parentIndex);
  };
  dropdown_button$46template.initReflector = function initReflector() {
    if (dart.test(dropdown_button$46template._visited)) {
      return;
    }
    dropdown_button$46template._visited = true;
    reflector.registerComponent(dart.wrapType(DropdownButtonComponentL()), dropdown_button$46template.DropdownButtonComponentNgFactory);
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    focus_interface$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    glyph$46template.initReflector();
    has_disabled$46template.initReflector();
    button_wrapper$46template.initReflector();
    focusable_mixin$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.copyProperties(dropdown_button$46template, {
    get DropdownButtonComponentNgFactory() {
      return dropdown_button$46template._DropdownButtonComponentNgFactory;
    }
  });
  var C4;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C3;
  var C5;
  dart.defineLazy(dropdown_button$46template, {
    /*dropdown_button$46template.styles$DropdownButtonComponent*/get styles$DropdownButtonComponent() {
      return [button_decorator$46scss$46css$46shim.styles, dropdown_button$46scss$46css$46shim.styles];
    },
    /*dropdown_button$46template._DropdownButtonComponentNgFactory*/get _DropdownButtonComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*dropdown_button$46template.styles$DropdownButtonComponentHost*/get styles$DropdownButtonComponentHost() {
      return C5 || CT.C5;
    },
    /*dropdown_button$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_select/dropdown_button.template", {
    "package:angular_components/material_select/dropdown_button.template.dart": dropdown_button$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dropdown_button.template.dart"],"names":[],"mappings":"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","file":"dropdown_button.template.ddc.js"}');
  // Exports:
  return {
    material_select__dropdown_button$46template: dropdown_button$46template
  };
}));

//# sourceMappingURL=dropdown_button.template.ddc.js.map
