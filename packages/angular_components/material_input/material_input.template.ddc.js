define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_forms/src/directives', 'packages/angular_components/focus/focus', 'packages/angular_components/focus/focus_interface', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/material_input/base_material_input.template', 'packages/angular_components/material_input/deferred_validator.template', 'packages/angular_components/material_input/material_input_default_value_accessor.template', 'packages/angular_components/material_input/material_input_multiline.template', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/angular/reference/reference.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_components/material_input/material_input.scss.css.shim'], (function load__packages__angular_components__material_input__material_input_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_forms__src__directives, packages__angular_components__focus__focus, packages__angular_components__focus__focus_interface, packages__angular__src__runtime__interpolate, packages__angular_components__material_input__material_input, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular_components__material_input__deferred_validator, packages__angular_components__utils__angular__reference__reference, packages__angular_components__interfaces__has_disabled, packages__angular_components__material_input__base_material_input, packages__angular_components__material_input__base_material_input$46template, packages__angular_components__material_input__deferred_validator$46template, packages__angular_components__material_input__material_input_default_value_accessor$46template, packages__angular_components__material_input__material_input_multiline$46template, packages__angular__angular$46template, packages__angular_components__focus__focus$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__utils__angular__properties__properties$46template, packages__angular_components__utils__angular__reference__reference$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_forms__angular_forms$46template, packages__angular_components__material_input__material_input$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const ng_switch = packages__angular__src__bootstrap__modules.src__common__directives__ng_switch;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const default_value_accessor = packages__angular_forms__src__directives.src__directives__default_value_accessor;
  const control_value_accessor = packages__angular_forms__src__directives.src__directives__control_value_accessor;
  const ng_model = packages__angular_forms__src__directives.src__directives__ng_model;
  const ng_control = packages__angular_forms__src__directives.src__directives__ng_control;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const deferred_validator = packages__angular_components__material_input__deferred_validator.material_input__deferred_validator;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  const base_material_input$46template = packages__angular_components__material_input__base_material_input$46template.material_input__base_material_input$46template;
  const deferred_validator$46template = packages__angular_components__material_input__deferred_validator$46template.material_input__deferred_validator$46template;
  const material_input_default_value_accessor$46template = packages__angular_components__material_input__material_input_default_value_accessor$46template.material_input__material_input_default_value_accessor$46template;
  const material_input_multiline$46template = packages__angular_components__material_input__material_input_multiline$46template.material_input__material_input_multiline$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const properties$46template = packages__angular_components__utils__angular__properties__properties$46template.utils__angular__properties__properties$46template;
  const reference$46template = packages__angular_components__utils__angular__reference__reference$46template.utils__angular__reference__reference$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const angular_forms$46template = packages__angular_forms__angular_forms$46template.angular_forms$46template;
  const material_input$46scss$46css$46shim = packages__angular_components__material_input__material_input$46scss$46css$46shim.material_input__material_input$46scss$46css$46shim;
  var material_input$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var InputElementL = () => (InputElementL = dart.constFn(dart.legacy(html.InputElement)))();
  var ControlValueAccessorL = () => (ControlValueAccessorL = dart.constFn(dart.legacy(control_value_accessor.ControlValueAccessor)))();
  var JSArrayOfControlValueAccessorL = () => (JSArrayOfControlValueAccessorL = dart.constFn(_interceptors.JSArray$(ControlValueAccessorL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var MultiTokenOfControlValueAccessorL = () => (MultiTokenOfControlValueAccessorL = dart.constFn(opaque_token.MultiToken$(ControlValueAccessorL())))();
  var NgModelL = () => (NgModelL = dart.constFn(dart.legacy(ng_model.NgModel)))();
  var NgControlL = () => (NgControlL = dart.constFn(dart.legacy(ng_control.NgControl)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var NgSwitchL = () => (NgSwitchL = dart.constFn(dart.legacy(ng_switch.NgSwitch)))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var MaterialInputComponentL = () => (MaterialInputComponentL = dart.constFn(dart.legacy(material_input.MaterialInputComponent)))();
  var ComponentRefOfMaterialInputComponentL = () => (ComponentRefOfMaterialInputComponentL = dart.constFn(component_factory.ComponentRef$(MaterialInputComponentL())))();
  var DeferredValidatorL = () => (DeferredValidatorL = dart.constFn(dart.legacy(deferred_validator.DeferredValidator)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var BaseMaterialInputL = () => (BaseMaterialInputL = dart.constFn(dart.legacy(base_material_input.BaseMaterialInput)))();
  var ComponentFactoryOfMaterialInputComponentL = () => (ComponentFactoryOfMaterialInputComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialInputComponentL())))();
  var AppViewOfMaterialInputComponentL = () => (AppViewOfMaterialInputComponentL = dart.constFn(app_view.AppView$(MaterialInputComponentL())))();
  var AppViewLOfMaterialInputComponentL = () => (AppViewLOfMaterialInputComponentL = dart.constFn(dart.legacy(AppViewOfMaterialInputComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialInputComponentL = () => (AppViewLAndintLToAppViewLOfMaterialInputComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialInputComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_input/material_input.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_input$46template.viewFactory_MaterialInputComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(material_input$46template.viewFactory_MaterialInputComponent2, AppViewLAndintLToAppViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(material_input$46template.viewFactory_MaterialInputComponent3, AppViewLAndintLToAppViewLOfvoid());
    },
    get C3() {
      return C3 = dart.fn(material_input$46template.viewFactory_MaterialInputComponent4, AppViewLAndintLToAppViewLOfvoid());
    },
    get C4() {
      return C4 = dart.fn(material_input$46template.viewFactory_MaterialInputComponent5, AppViewLAndintLToAppViewLOfvoid());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: MultiTokenOfControlValueAccessorL().prototype,
        [OpaqueToken__uniqueName]: "NgValueAccessor"
      });
    },
    get C6() {
      return C6 = dart.fn(material_input$46template.viewFactory_MaterialInputComponent6, AppViewLAndintLToAppViewLOfvoid());
    },
    get C7() {
      return C7 = dart.fn(material_input$46template.viewFactory_MaterialInputComponent7, AppViewLAndintLToAppViewLOfvoid());
    },
    get C8() {
      return C8 = dart.fn(material_input$46template.viewFactory_MaterialInputComponent8, AppViewLAndintLToAppViewLOfvoid());
    },
    get C9() {
      return C9 = dart.fn(material_input$46template.viewFactory_MaterialInputComponent9, AppViewLAndintLToAppViewLOfvoid());
    },
    get C10() {
      return C10 = dart.const({
        __proto__: opaque_token.MultiToken.prototype,
        [OpaqueToken__uniqueName]: "NgValidators"
      });
    },
    get C12() {
      return C12 = dart.fn(material_input$46template.viewFactory_MaterialInputComponentHost0, AppViewLAndintLToAppViewLOfMaterialInputComponentL());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ComponentFactoryOfMaterialInputComponentL().prototype,
        [ComponentFactory__viewFactory]: C12 || CT.C12,
        [ComponentFactory_selector]: "material-input:not(material-input[multiline])"
      });
    },
    get C13() {
      return C13 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _textBinding_10 = dart.privateName(material_input$46template, "_textBinding_10");
  var _appEl_2 = dart.privateName(material_input$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(material_input$46template, "_NgIf_2_9");
  var _appEl_4 = dart.privateName(material_input$46template, "_appEl_4");
  var _NgIf_4_9 = dart.privateName(material_input$46template, "_NgIf_4_9");
  var _DefaultValueAccessor_11_5 = dart.privateName(material_input$46template, "_DefaultValueAccessor_11_5");
  var _FocusableDirective_11_6 = dart.privateName(material_input$46template, "_FocusableDirective_11_6");
  var _NgValueAccessor_11_7 = dart.privateName(material_input$46template, "_NgValueAccessor_11_7");
  var _NgModel_11_8 = dart.privateName(material_input$46template, "_NgModel_11_8");
  var _appEl_13 = dart.privateName(material_input$46template, "_appEl_13");
  var _NgIf_13_9 = dart.privateName(material_input$46template, "_NgIf_13_9");
  var _appEl_15 = dart.privateName(material_input$46template, "_appEl_15");
  var _NgIf_15_9 = dart.privateName(material_input$46template, "_NgIf_15_9");
  var _appEl_21 = dart.privateName(material_input$46template, "_appEl_21");
  var _NgIf_21_9 = dart.privateName(material_input$46template, "_NgIf_21_9");
  var _expr_0 = dart.privateName(material_input$46template, "_expr_0");
  var _expr_3 = dart.privateName(material_input$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_input$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_input$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_input$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_input$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_input$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_input$46template, "_expr_9");
  var _expr_10 = dart.privateName(material_input$46template, "_expr_10");
  var _expr_11 = dart.privateName(material_input$46template, "_expr_11");
  var _expr_12 = dart.privateName(material_input$46template, "_expr_12");
  var _expr_13 = dart.privateName(material_input$46template, "_expr_13");
  var _expr_14 = dart.privateName(material_input$46template, "_expr_14");
  var _expr_15 = dart.privateName(material_input$46template, "_expr_15");
  var _expr_16 = dart.privateName(material_input$46template, "_expr_16");
  var _expr_17 = dart.privateName(material_input$46template, "_expr_17");
  var _expr_18 = dart.privateName(material_input$46template, "_expr_18");
  var _expr_19 = dart.privateName(material_input$46template, "_expr_19");
  var _expr_20 = dart.privateName(material_input$46template, "_expr_20");
  var _expr_21 = dart.privateName(material_input$46template, "_expr_21");
  var _expr_23 = dart.privateName(material_input$46template, "_expr_23");
  var _expr_24 = dart.privateName(material_input$46template, "_expr_24");
  var _expr_25 = dart.privateName(material_input$46template, "_expr_25");
  var _expr_26 = dart.privateName(material_input$46template, "_expr_26");
  var _expr_27 = dart.privateName(material_input$46template, "_expr_27");
  var _expr_28 = dart.privateName(material_input$46template, "_expr_28");
  var _expr_32 = dart.privateName(material_input$46template, "_expr_32");
  var _expr_33 = dart.privateName(material_input$46template, "_expr_33");
  var _expr_34 = dart.privateName(material_input$46template, "_expr_34");
  var _expr_35 = dart.privateName(material_input$46template, "_expr_35");
  var _expr_36 = dart.privateName(material_input$46template, "_expr_36");
  var _expr_37 = dart.privateName(material_input$46template, "_expr_37");
  var _el_1 = dart.privateName(material_input$46template, "_el_1");
  var _el_6 = dart.privateName(material_input$46template, "_el_6");
  var _el_7 = dart.privateName(material_input$46template, "_el_7");
  var _el_9 = dart.privateName(material_input$46template, "_el_9");
  var _el_11 = dart.privateName(material_input$46template, "_el_11");
  var _el_18 = dart.privateName(material_input$46template, "_el_18");
  var _el_19 = dart.privateName(material_input$46template, "_el_19");
  var _el_20 = dart.privateName(material_input$46template, "_el_20");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var _handle_blur_11_0 = dart.privateName(material_input$46template, "_handle_blur_11_0");
  var _handle_change_11_1 = dart.privateName(material_input$46template, "_handle_change_11_1");
  var _handle_input_11_3 = dart.privateName(material_input$46template, "_handle_input_11_3");
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C5;
  material_input$46template.ViewMaterialInputComponent0 = class ViewMaterialInputComponent0 extends app_view.AppView$(dart.legacy(material_input.MaterialInputComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_input/material_input.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "baseline");
      this.addShimC(_el_0);
      this[_el_1] = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(this[_el_1], "top-section");
      this.addShimC(this[_el_1]);
      let _anchor_2 = dom_helpers.appendAnchor(this[_el_1]);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C0 || CT.C0);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _text_3 = dom_helpers.appendText(this[_el_1], " ");
      let _anchor_4 = dom_helpers.appendAnchor(this[_el_1]);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 1, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C1 || CT.C1);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _text_5 = dom_helpers.appendText(this[_el_1], " ");
      this[_el_6] = dom_helpers.appendElement(doc, this[_el_1], "label");
      this.updateChildClass(HtmlElementL().as(this[_el_6]), "input-container");
      this.addShimE(this[_el_6]);
      this[_el_7] = dom_helpers.appendDiv(doc, this[_el_6]);
      dom_helpers.setAttribute(this[_el_7], "aria-hidden", "true");
      this.updateChildClass(this[_el_7], "label");
      this.addShimC(this[_el_7]);
      let _text_8 = dom_helpers.appendText(this[_el_7], " ");
      this[_el_9] = dom_helpers.appendSpan(doc, this[_el_7]);
      this.updateChildClass(HtmlElementL().as(this[_el_9]), "label-text");
      this.addShimE(this[_el_9]);
      this[_el_9][$append](this[_textBinding_10].element);
      this[_el_11] = InputElementL().as(dom_helpers.appendElement(doc, this[_el_6], "input"));
      this.updateChildClass(this[_el_11], "input");
      dom_helpers.setAttribute(this[_el_11], "focusableElement", "");
      this.addShimC(this[_el_11]);
      this[_DefaultValueAccessor_11_5] = new default_value_accessor.DefaultValueAccessor.new(this[_el_11]);
      this[_FocusableDirective_11_6] = new focus.FocusableDirective.new(this[_el_11]);
      this[_NgValueAccessor_11_7] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_11_5]]);
      this[_NgModel_11_8] = new ng_model.NgModel.new(null, this[_NgValueAccessor_11_7]);
      let _text_12 = dom_helpers.appendText(this[_el_1], " ");
      let _anchor_13 = dom_helpers.appendAnchor(this[_el_1]);
      this[_appEl_13] = new view_container.ViewContainer.new(13, 1, this, _anchor_13);
      let _TemplateRef_13_8 = new template_ref.TemplateRef.new(this[_appEl_13], C2 || CT.C2);
      this[_NgIf_13_9] = new ng_if.NgIf.new(this[_appEl_13], _TemplateRef_13_8);
      let _text_14 = dom_helpers.appendText(this[_el_1], " ");
      let _anchor_15 = dom_helpers.appendAnchor(this[_el_1]);
      this[_appEl_15] = new view_container.ViewContainer.new(15, 1, this, _anchor_15);
      let _TemplateRef_15_8 = new template_ref.TemplateRef.new(this[_appEl_15], C3 || CT.C3);
      this[_NgIf_15_9] = new ng_if.NgIf.new(this[_appEl_15], _TemplateRef_15_8);
      let _text_16 = dom_helpers.appendText(this[_el_1], " ");
      this.project(this[_el_1], 0);
      let _el_17 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_17, "underline");
      this.addShimC(_el_17);
      this[_el_18] = dom_helpers.appendDiv(doc, _el_17);
      this.updateChildClass(this[_el_18], "disabled-underline");
      this.addShimC(this[_el_18]);
      this[_el_19] = dom_helpers.appendDiv(doc, _el_17);
      this.updateChildClass(this[_el_19], "unfocused-underline");
      this.addShimC(this[_el_19]);
      this[_el_20] = dom_helpers.appendDiv(doc, _el_17);
      this.updateChildClass(this[_el_20], "focused-underline");
      this.addShimC(this[_el_20]);
      let _anchor_21 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_21] = new view_container.ViewContainer.new(21, null, this, _anchor_21);
      let _TemplateRef_21_8 = new template_ref.TemplateRef.new(this[_appEl_21], C4 || CT.C4);
      this[_NgIf_21_9] = new ng_if.NgIf.new(this[_appEl_21], _TemplateRef_21_8);
      this[_el_11][$addEventListener]("blur", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_blur_11_0)));
      this[_el_11][$addEventListener]("change", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_change_11_1)));
      this[_el_11][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'inputFocusAction')));
      this[_el_11][$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_input_11_3)));
      _ctx.focusable = this[_FocusableDirective_11_6];
      _ctx.inputEl = new element_ref.ElementRef.new(this[_el_11]);
      _ctx.popupSourceEl = new element_ref.ElementRef.new(_el_0);
      this.init0();
      _rootEl[$addEventListener]("focus", this.eventHandler0(EventL(), dart.bind(_ctx, 'focus')));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (11 === nodeIndex) {
        if (token === dart.wrapType(FocusableL())) {
          return this[_FocusableDirective_11_6];
        }
        if (token === (C5 || CT.C5)) {
          return this[_NgValueAccessor_11_7];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_11_8];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t0, t0$, t0$0;
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      this[_NgIf_2_9].ngIf = _ctx.hasLeadingGlyph;
      this[_NgIf_4_9].ngIf = _ctx.hasLeadingText;
      changed = false;
      this[_NgModel_11_8].model = _ctx.inputText;
      this[_NgModel_11_8].ngAfterChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_11_8].ngOnInit();
      }
      this[_NgIf_13_9].ngIf = _ctx.hasTrailingText;
      this[_NgIf_15_9].ngIf = _ctx.hasTrailingGlyph;
      this[_NgIf_21_9].ngIf = _ctx.displayBottomPanel;
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_13].detectChangesInNestedViews();
      this[_appEl_15].detectChangesInNestedViews();
      this[_appEl_21].detectChangesInNestedViews();
      let currVal_0 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(this[_el_1], "disabled", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_3 = _ctx.floatingLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_6]), "floated-label", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.rightAlign;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        dom_helpers.updateClassBinding(this[_el_7], "right-align", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.labelId;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        dom_helpers.updateAttribute(this[_el_9], "id", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = !dart.test(_ctx.labelVisible);
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_9]), "invisible", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.labelAnimated;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_9]), "animated", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.labelAnimationReset;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_9]), "reset", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_9]), "disabled", currVal_9);
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = dart.test(_ctx.focused) && dart.test(_ctx.floatingLabelVisible);
      if (dart.test(app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_9]), "focused", currVal_10);
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = dart.test(_ctx.invalid) && dart.test(_ctx.floatingLabelVisible);
      if (dart.test(app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_9]), "invalid", currVal_11);
        this[_expr_11] = currVal_11;
      }
      this[_textBinding_10].updateText(interpolate.interpolateString0(_ctx.label));
      if (firstCheck) {
        if (_ctx.inputRole != null) {
          dom_helpers.updateAttribute(this[_el_11], "role", _ctx.inputRole);
        }
      }
      let currVal_12 = _ctx.inputAriaActivedescendent;
      if (dart.test(app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        dom_helpers.updateAttribute(this[_el_11], "aria-activedescendant", currVal_12);
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.inputAriaAutocomplete;
      if (dart.test(app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        dom_helpers.updateAttribute(this[_el_11], "aria-autocomplete", currVal_13);
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = _ctx.inputAriaExpanded;
      if (dart.test(app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        dom_helpers.updateAttribute(this[_el_11], "aria-expanded", (t0 = currVal_14, t0 == null ? null : dart.toString(t0)));
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = _ctx.inputAriaHasPopup;
      if (dart.test(app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        dom_helpers.updateAttribute(this[_el_11], "aria-haspopup", currVal_15);
        this[_expr_15] = currVal_15;
      }
      let currVal_16 = _ctx.invalid;
      if (dart.test(app_view_utils.checkBinding(this[_expr_16], currVal_16))) {
        dom_helpers.updateAttribute(this[_el_11], "aria-invalid", (t0$ = currVal_16, t0$ == null ? null : dart.toString(t0$)));
        this[_expr_16] = currVal_16;
      }
      let currVal_17 = _ctx.inputAriaLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_17], currVal_17))) {
        dom_helpers.updateAttribute(this[_el_11], "aria-label", currVal_17);
        this[_expr_17] = currVal_17;
      }
      let currVal_18 = _ctx.labelId;
      if (dart.test(app_view_utils.checkBinding(this[_expr_18], currVal_18))) {
        dom_helpers.updateAttribute(this[_el_11], "aria-labelledby", currVal_18);
        this[_expr_18] = currVal_18;
      }
      let currVal_19 = _ctx.ariaDescribedBy;
      if (dart.test(app_view_utils.checkBinding(this[_expr_19], currVal_19))) {
        dom_helpers.updateAttribute(this[_el_11], "aria-describedby", currVal_19);
        this[_expr_19] = currVal_19;
      }
      let currVal_20 = _ctx.inputAriaOwns;
      if (dart.test(app_view_utils.checkBinding(this[_expr_20], currVal_20))) {
        dom_helpers.updateAttribute(this[_el_11], "aria-owns", currVal_20);
        this[_expr_20] = currVal_20;
      }
      let currVal_21 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_21], currVal_21))) {
        dom_helpers.updateAttribute(this[_el_11], "aria-disabled", (t0$0 = currVal_21, t0$0 == null ? null : dart.toString(t0$0)));
        this[_expr_21] = currVal_21;
      }
      let currVal_23 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_23], currVal_23))) {
        dom_helpers.updateClassBinding(this[_el_11], "disabledInput", currVal_23);
        this[_expr_23] = currVal_23;
      }
      let currVal_24 = _ctx.rightAlign;
      if (dart.test(app_view_utils.checkBinding(this[_expr_24], currVal_24))) {
        dom_helpers.updateClassBinding(this[_el_11], "right-align", currVal_24);
        this[_expr_24] = currVal_24;
      }
      let currVal_25 = _ctx.multiple;
      if (dart.test(app_view_utils.checkBinding(this[_expr_25], currVal_25))) {
        dom_helpers.setProperty(this[_el_11], "multiple", currVal_25);
        this[_expr_25] = currVal_25;
      }
      let currVal_26 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_26], currVal_26))) {
        dom_helpers.setProperty(this[_el_11], "readOnly", currVal_26);
        this[_expr_26] = currVal_26;
      }
      let currVal_27 = _ctx.inputTabIndex;
      if (dart.test(app_view_utils.checkBinding(this[_expr_27], currVal_27))) {
        dom_helpers.setProperty(this[_el_11], "tabIndex", currVal_27);
        this[_expr_27] = currVal_27;
      }
      let currVal_28 = _ctx.type;
      if (dart.test(app_view_utils.checkBinding(this[_expr_28], currVal_28))) {
        dom_helpers.setProperty(this[_el_11], "type", currVal_28);
        this[_expr_28] = currVal_28;
      }
      let currVal_32 = !dart.test(_ctx.disabled);
      if (dart.test(app_view_utils.checkBinding(this[_expr_32], currVal_32))) {
        dom_helpers.updateClassBinding(this[_el_18], "invisible", currVal_32);
        this[_expr_32] = currVal_32;
      }
      let currVal_33 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_33], currVal_33))) {
        dom_helpers.updateClassBinding(this[_el_19], "invisible", currVal_33);
        this[_expr_33] = currVal_33;
      }
      let currVal_34 = _ctx.invalid;
      if (dart.test(app_view_utils.checkBinding(this[_expr_34], currVal_34))) {
        dom_helpers.updateClassBinding(this[_el_19], "invalid", currVal_34);
        this[_expr_34] = currVal_34;
      }
      let currVal_35 = !dart.test(_ctx.focused) || dart.test(_ctx.disabled);
      if (dart.test(app_view_utils.checkBinding(this[_expr_35], currVal_35))) {
        dom_helpers.updateClassBinding(this[_el_20], "invisible", currVal_35);
        this[_expr_35] = currVal_35;
      }
      let currVal_36 = _ctx.invalid;
      if (dart.test(app_view_utils.checkBinding(this[_expr_36], currVal_36))) {
        dom_helpers.updateClassBinding(this[_el_20], "invalid", currVal_36);
        this[_expr_36] = currVal_36;
      }
      let currVal_37 = _ctx.underlineAnimated;
      if (dart.test(app_view_utils.checkBinding(this[_expr_37], currVal_37))) {
        dom_helpers.updateClassBinding(this[_el_20], "animated", currVal_37);
        this[_expr_37] = currVal_37;
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
      this[_appEl_13].destroyNestedViews();
      this[_appEl_15].destroyNestedViews();
      this[_appEl_21].destroyNestedViews();
    }
    [_handle_blur_11_0]($36event) {
      let local_inputEl = this[_el_11];
      let _ctx = this.ctx;
      _ctx.inputBlurAction($36event, local_inputEl.validity.valid, local_inputEl.validationMessage);
      this[_DefaultValueAccessor_11_5].touchHandler();
    }
    [_handle_change_11_1]($36event) {
      let local_inputEl = this[_el_11];
      let _ctx = this.ctx;
      _ctx.inputChange(local_inputEl.value, local_inputEl.validity.valid, local_inputEl.validationMessage);
      dart.dsend($36event, 'stopPropagation', []);
    }
    [_handle_input_11_3]($36event) {
      let local_inputEl = this[_el_11];
      let _ctx = this.ctx;
      _ctx.inputKeypress(local_inputEl.value, local_inputEl.validity.valid, local_inputEl.validationMessage);
      this[_DefaultValueAccessor_11_5].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    initComponentStyles() {
      let styles = material_input$46template.ViewMaterialInputComponent0._componentStyles;
      if (styles == null) {
        material_input$46template.ViewMaterialInputComponent0._componentStyles = styles = material_input$46template.ViewMaterialInputComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_input$46template.styles$MaterialInputComponent, material_input$46template.ViewMaterialInputComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_input$46template.ViewMaterialInputComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_10] = new text_binding.TextBinding.new();
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_DefaultValueAccessor_11_5] = null;
    this[_FocusableDirective_11_6] = null;
    this[_NgValueAccessor_11_7] = null;
    this[_NgModel_11_8] = null;
    this[_appEl_13] = null;
    this[_NgIf_13_9] = null;
    this[_appEl_15] = null;
    this[_NgIf_15_9] = null;
    this[_appEl_21] = null;
    this[_NgIf_21_9] = null;
    this[_expr_0] = null;
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
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    this[_expr_16] = null;
    this[_expr_17] = null;
    this[_expr_18] = null;
    this[_expr_19] = null;
    this[_expr_20] = null;
    this[_expr_21] = null;
    this[_expr_23] = null;
    this[_expr_24] = null;
    this[_expr_25] = null;
    this[_expr_26] = null;
    this[_expr_27] = null;
    this[_expr_28] = null;
    this[_expr_32] = null;
    this[_expr_33] = null;
    this[_expr_34] = null;
    this[_expr_35] = null;
    this[_expr_36] = null;
    this[_expr_37] = null;
    this[_el_1] = null;
    this[_el_6] = null;
    this[_el_7] = null;
    this[_el_9] = null;
    this[_el_11] = null;
    this[_el_18] = null;
    this[_el_19] = null;
    this[_el_20] = null;
    material_input$46template.ViewMaterialInputComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-input"));
    this.updateChildClassNonHtml(this.rootEl, "themeable");
    this.rootEl.tabIndex = -1;
  }).prototype = material_input$46template.ViewMaterialInputComponent0.prototype;
  dart.addTypeTests(material_input$46template.ViewMaterialInputComponent0);
  dart.addTypeCaches(material_input$46template.ViewMaterialInputComponent0);
  dart.setMethodSignature(material_input$46template.ViewMaterialInputComponent0, () => ({
    __proto__: dart.getMethods(material_input$46template.ViewMaterialInputComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_blur_11_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_change_11_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_11_3]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_input$46template.ViewMaterialInputComponent0, L0);
  dart.setFieldSignature(material_input$46template.ViewMaterialInputComponent0, () => ({
    __proto__: dart.getFields(material_input$46template.ViewMaterialInputComponent0.__proto__),
    [_textBinding_10]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_DefaultValueAccessor_11_5]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_FocusableDirective_11_6]: dart.fieldType(dart.legacy(focus.FocusableDirective)),
    [_NgValueAccessor_11_7]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_11_8]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_appEl_13]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_13_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_15]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_15_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_21]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_21_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_7]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_8]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_9]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_10]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_11]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(dart.dynamic),
    [_expr_15]: dart.fieldType(dart.dynamic),
    [_expr_16]: dart.fieldType(dart.dynamic),
    [_expr_17]: dart.fieldType(dart.dynamic),
    [_expr_18]: dart.fieldType(dart.dynamic),
    [_expr_19]: dart.fieldType(dart.dynamic),
    [_expr_20]: dart.fieldType(dart.dynamic),
    [_expr_21]: dart.fieldType(dart.dynamic),
    [_expr_23]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_24]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_25]: dart.fieldType(dart.dynamic),
    [_expr_26]: dart.fieldType(dart.dynamic),
    [_expr_27]: dart.fieldType(dart.dynamic),
    [_expr_28]: dart.fieldType(dart.dynamic),
    [_expr_32]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_33]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_34]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_35]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_36]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_37]: dart.fieldType(dart.legacy(core.bool)),
    [_el_1]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_6]: dart.fieldType(dart.legacy(html.Element)),
    [_el_7]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_9]: dart.fieldType(dart.legacy(html.Element)),
    [_el_11]: dart.fieldType(dart.legacy(html.InputElement)),
    [_el_18]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_19]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_20]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(material_input$46template.ViewMaterialInputComponent0, {
    /*material_input$46template.ViewMaterialInputComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_1 = dart.privateName(material_input$46template, "_compView_1");
  var _MaterialIconComponent_1_5 = dart.privateName(material_input$46template, "_MaterialIconComponent_1_5");
  var _expr_1 = dart.privateName(material_input$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_input$46template, "_expr_2");
  var _el_0 = dart.privateName(material_input$46template, "_el_0");
  material_input$46template._ViewMaterialInputComponent1 = class _ViewMaterialInputComponent1 extends app_view.AppView$(dart.legacy(material_input.MaterialInputComponent)) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(this[_el_0]), "leading-text");
      this.addShimE(this[_el_0]);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.updateChildClassNonHtml(this[_el_1], "glyph leading");
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_1]));
      this[_compView_1].create0(this[_MaterialIconComponent_1_5]);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let t0;
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_3 = interpolate.interpolateString0(_ctx.leadingGlyph);
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialIconComponent_1_5].icon = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      let currVal_0 = _ctx.floatingLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_0]), "floated-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.leadingGlyphAriaLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-label", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateAttribute(this[_el_1], "disabled", (t0 = currVal_2, t0 == null ? null : dart.toString(t0)));
        this[_expr_2] = currVal_2;
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
    }
  };
  (material_input$46template._ViewMaterialInputComponent1.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    material_input$46template._ViewMaterialInputComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_input$46template._ViewMaterialInputComponent1.prototype;
  dart.addTypeTests(material_input$46template._ViewMaterialInputComponent1);
  dart.addTypeCaches(material_input$46template._ViewMaterialInputComponent1);
  dart.setLibraryUri(material_input$46template._ViewMaterialInputComponent1, L0);
  dart.setFieldSignature(material_input$46template._ViewMaterialInputComponent1, () => ({
    __proto__: dart.getFields(material_input$46template._ViewMaterialInputComponent1.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_1_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element)),
    [_el_1]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _textBinding_1 = dart.privateName(material_input$46template, "_textBinding_1");
  material_input$46template._ViewMaterialInputComponent2 = class _ViewMaterialInputComponent2 extends app_view.AppView$(dart.legacy(material_input.MaterialInputComponent)) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(this[_el_0]), "leading-text");
      this.addShimE(this[_el_0]);
      this[_el_0][$append](this[_textBinding_1].element);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.floatingLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_0]), "floated-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.leadingText));
    }
  };
  (material_input$46template._ViewMaterialInputComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_el_0] = null;
    material_input$46template._ViewMaterialInputComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_input$46template._ViewMaterialInputComponent2.prototype;
  dart.addTypeTests(material_input$46template._ViewMaterialInputComponent2);
  dart.addTypeCaches(material_input$46template._ViewMaterialInputComponent2);
  dart.setLibraryUri(material_input$46template._ViewMaterialInputComponent2, L0);
  dart.setFieldSignature(material_input$46template._ViewMaterialInputComponent2, () => ({
    __proto__: dart.getFields(material_input$46template._ViewMaterialInputComponent2.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  material_input$46template._ViewMaterialInputComponent3 = class _ViewMaterialInputComponent3 extends app_view.AppView$(dart.legacy(material_input.MaterialInputComponent)) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(this[_el_0]), "trailing-text");
      this.addShimE(this[_el_0]);
      this[_el_0][$append](this[_textBinding_1].element);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.floatingLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_0]), "floated-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.trailingText));
    }
  };
  (material_input$46template._ViewMaterialInputComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_el_0] = null;
    material_input$46template._ViewMaterialInputComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_input$46template._ViewMaterialInputComponent3.prototype;
  dart.addTypeTests(material_input$46template._ViewMaterialInputComponent3);
  dart.addTypeCaches(material_input$46template._ViewMaterialInputComponent3);
  dart.setLibraryUri(material_input$46template._ViewMaterialInputComponent3, L0);
  dart.setFieldSignature(material_input$46template._ViewMaterialInputComponent3, () => ({
    __proto__: dart.getFields(material_input$46template._ViewMaterialInputComponent3.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  material_input$46template._ViewMaterialInputComponent4 = class _ViewMaterialInputComponent4 extends app_view.AppView$(dart.legacy(material_input.MaterialInputComponent)) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(this[_el_0]), "trailing-text");
      this.addShimE(this[_el_0]);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.updateChildClassNonHtml(this[_el_1], "glyph trailing");
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_1]));
      this[_compView_1].create0(this[_MaterialIconComponent_1_5]);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let t0;
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_3 = interpolate.interpolateString0(_ctx.trailingGlyph);
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialIconComponent_1_5].icon = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      let currVal_0 = _ctx.floatingLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_0]), "floated-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.trailingGlyphAriaLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-label", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateAttribute(this[_el_1], "disabled", (t0 = currVal_2, t0 == null ? null : dart.toString(t0)));
        this[_expr_2] = currVal_2;
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
    }
  };
  (material_input$46template._ViewMaterialInputComponent4.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    material_input$46template._ViewMaterialInputComponent4.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_input$46template._ViewMaterialInputComponent4.prototype;
  dart.addTypeTests(material_input$46template._ViewMaterialInputComponent4);
  dart.addTypeCaches(material_input$46template._ViewMaterialInputComponent4);
  dart.setLibraryUri(material_input$46template._ViewMaterialInputComponent4, L0);
  dart.setFieldSignature(material_input$46template._ViewMaterialInputComponent4, () => ({
    __proto__: dart.getFields(material_input$46template._ViewMaterialInputComponent4.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_1_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element)),
    [_el_1]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _NgSwitch_0_5 = dart.privateName(material_input$46template, "_NgSwitch_0_5");
  var _appEl_1 = dart.privateName(material_input$46template, "_appEl_1");
  var _NgSwitchWhen_1_9 = dart.privateName(material_input$46template, "_NgSwitchWhen_1_9");
  var _NgSwitchWhen_2_9 = dart.privateName(material_input$46template, "_NgSwitchWhen_2_9");
  var _appEl_3 = dart.privateName(material_input$46template, "_appEl_3");
  var _NgSwitchWhen_3_9 = dart.privateName(material_input$46template, "_NgSwitchWhen_3_9");
  var C6;
  var C7;
  var C8;
  var C9;
  material_input$46template._ViewMaterialInputComponent5 = class _ViewMaterialInputComponent5 extends app_view.AppView$(dart.legacy(material_input.MaterialInputComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "bottom-section");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_NgSwitch_0_5] = new ng_switch.NgSwitch.new();
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C6 || CT.C6);
      this[_NgSwitchWhen_1_9] = new ng_switch.NgSwitchWhen.new(this[_appEl_1], _TemplateRef_1_8, this[_NgSwitch_0_5]);
      let _anchor_2 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C7 || CT.C7);
      this[_NgSwitchWhen_2_9] = new ng_switch.NgSwitchWhen.new(this[_appEl_2], _TemplateRef_2_8, this[_NgSwitch_0_5]);
      let _anchor_3 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_3] = new view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C8 || CT.C8);
      this[_NgSwitchWhen_3_9] = new ng_switch.NgSwitchWhen.new(this[_appEl_3], _TemplateRef_3_8, this[_NgSwitch_0_5]);
      let _anchor_4 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C9 || CT.C9);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      this.init1(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(NgSwitchL()) && dart.notNull(nodeIndex) <= 4) {
        return this[_NgSwitch_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_0 = _ctx.bottomPanelState;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgSwitch_0_5].ngSwitch = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (firstCheck) {
        if (_ctx.errorState != null) {
          this[_NgSwitchWhen_1_9].ngSwitchWhen = _ctx.errorState;
        }
        if (_ctx.hintState != null) {
          this[_NgSwitchWhen_2_9].ngSwitchWhen = _ctx.hintState;
        }
        if (_ctx.emptyState != null) {
          this[_NgSwitchWhen_3_9].ngSwitchWhen = _ctx.emptyState;
        }
      }
      this[_NgIf_4_9].ngIf = _ctx.maxCount != null || dart.test(_ctx.showCharacterCount);
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
    }
  };
  (material_input$46template._ViewMaterialInputComponent5.new = function(parentView, parentIndex) {
    this[_NgSwitch_0_5] = null;
    this[_appEl_1] = null;
    this[_NgSwitchWhen_1_9] = null;
    this[_appEl_2] = null;
    this[_NgSwitchWhen_2_9] = null;
    this[_appEl_3] = null;
    this[_NgSwitchWhen_3_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_expr_0] = null;
    material_input$46template._ViewMaterialInputComponent5.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_input$46template._ViewMaterialInputComponent5.prototype;
  dart.addTypeTests(material_input$46template._ViewMaterialInputComponent5);
  dart.addTypeCaches(material_input$46template._ViewMaterialInputComponent5);
  dart.setMethodSignature(material_input$46template._ViewMaterialInputComponent5, () => ({
    __proto__: dart.getMethods(material_input$46template._ViewMaterialInputComponent5.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_input$46template._ViewMaterialInputComponent5, L0);
  dart.setFieldSignature(material_input$46template._ViewMaterialInputComponent5, () => ({
    __proto__: dart.getFields(material_input$46template._ViewMaterialInputComponent5.__proto__),
    [_NgSwitch_0_5]: dart.fieldType(dart.legacy(ng_switch.NgSwitch)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgSwitchWhen_1_9]: dart.fieldType(dart.legacy(ng_switch.NgSwitchWhen)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgSwitchWhen_2_9]: dart.fieldType(dart.legacy(ng_switch.NgSwitchWhen)),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgSwitchWhen_3_9]: dart.fieldType(dart.legacy(ng_switch.NgSwitchWhen)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_input$46template._ViewMaterialInputComponent6 = class _ViewMaterialInputComponent6 extends app_view.AppView$(dart.legacy(material_input.MaterialInputComponent)) {
    build() {
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "error-text");
      dom_helpers.setAttribute(this[_el_0], "role", "alert");
      this.addShimC(this[_el_0]);
      this[_el_0][$append](this[_textBinding_1].element);
      let _text_2 = dom_helpers.appendText(this[_el_0], " ");
      this.project(this[_el_0], 1);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        if (_ctx.errorTextId != null) {
          dom_helpers.updateAttribute(this[_el_0], "id", _ctx.errorTextId);
        }
      }
      let currVal_1 = _ctx.focused;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBinding(this[_el_0], "focused", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.invalid;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateClassBinding(this[_el_0], "invalid", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = interpolate.interpolate0(!dart.test(_ctx.invalid));
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        dom_helpers.setAttribute(this[_el_0], "aria-hidden", StringL().as(currVal_3));
        this[_expr_3] = currVal_3;
      }
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.errorMessage));
    }
  };
  (material_input$46template._ViewMaterialInputComponent6.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_el_0] = null;
    material_input$46template._ViewMaterialInputComponent6.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_input$46template._ViewMaterialInputComponent6.prototype;
  dart.addTypeTests(material_input$46template._ViewMaterialInputComponent6);
  dart.addTypeCaches(material_input$46template._ViewMaterialInputComponent6);
  dart.setLibraryUri(material_input$46template._ViewMaterialInputComponent6, L0);
  dart.setFieldSignature(material_input$46template._ViewMaterialInputComponent6, () => ({
    __proto__: dart.getFields(material_input$46template._ViewMaterialInputComponent6.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  material_input$46template._ViewMaterialInputComponent7 = class _ViewMaterialInputComponent7 extends app_view.AppView$(dart.legacy(material_input.MaterialInputComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "hint-text");
      this.addShimC(HtmlElementL().as(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.hintText));
    }
  };
  (material_input$46template._ViewMaterialInputComponent7.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_input$46template._ViewMaterialInputComponent7.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_input$46template._ViewMaterialInputComponent7.prototype;
  dart.addTypeTests(material_input$46template._ViewMaterialInputComponent7);
  dart.addTypeCaches(material_input$46template._ViewMaterialInputComponent7);
  dart.setLibraryUri(material_input$46template._ViewMaterialInputComponent7, L0);
  dart.setFieldSignature(material_input$46template._ViewMaterialInputComponent7, () => ({
    __proto__: dart.getFields(material_input$46template._ViewMaterialInputComponent7.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _handle_focus_0_0 = dart.privateName(material_input$46template, "_handle_focus_0_0");
  material_input$46template._ViewMaterialInputComponent8 = class _ViewMaterialInputComponent8 extends app_view.AppView$(dart.legacy(material_input.MaterialInputComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      dom_helpers.setAttribute(_el_0, "aria-hidden", "true");
      this.updateChildClass(HtmlElementL().as(_el_0), "spaceholder");
      _el_0.tabIndex = -1;
      this.addShimC(HtmlElementL().as(_el_0));
      let _text_1 = dom_helpers.appendText(_el_0, " ");
      _el_0[$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_focus_0_0)));
      this.init1(_el_0);
    }
    [_handle_focus_0_0]($36event) {
      dart.dsend($36event, 'stopPropagation', []);
    }
  };
  (material_input$46template._ViewMaterialInputComponent8.new = function(parentView, parentIndex) {
    material_input$46template._ViewMaterialInputComponent8.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_input$46template._ViewMaterialInputComponent8.prototype;
  dart.addTypeTests(material_input$46template._ViewMaterialInputComponent8);
  dart.addTypeCaches(material_input$46template._ViewMaterialInputComponent8);
  dart.setMethodSignature(material_input$46template._ViewMaterialInputComponent8, () => ({
    __proto__: dart.getMethods(material_input$46template._ViewMaterialInputComponent8.__proto__),
    [_handle_focus_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_input$46template._ViewMaterialInputComponent8, L0);
  material_input$46template._ViewMaterialInputComponent9 = class _ViewMaterialInputComponent9 extends app_view.AppView$(dart.legacy(material_input.MaterialInputComponent)) {
    build() {
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "counter");
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
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.msgCharacterCounter(_ctx.inputTextLength, _ctx.maxCount)));
    }
  };
  (material_input$46template._ViewMaterialInputComponent9.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_el_0] = null;
    material_input$46template._ViewMaterialInputComponent9.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_input$46template._ViewMaterialInputComponent9.prototype;
  dart.addTypeTests(material_input$46template._ViewMaterialInputComponent9);
  dart.addTypeCaches(material_input$46template._ViewMaterialInputComponent9);
  dart.setLibraryUri(material_input$46template._ViewMaterialInputComponent9, L0);
  dart.setFieldSignature(material_input$46template._ViewMaterialInputComponent9, () => ({
    __proto__: dart.getFields(material_input$46template._ViewMaterialInputComponent9.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _compView_0 = dart.privateName(material_input$46template, "_compView_0");
  var _DeferredValidator_0_5 = dart.privateName(material_input$46template, "_DeferredValidator_0_5");
  var _MaterialInputComponent_0_6 = dart.privateName(material_input$46template, "_MaterialInputComponent_0_6");
  var __NgValidators_0_7 = dart.privateName(material_input$46template, "__NgValidators_0_7");
  var _NgValidators_0_7 = dart.privateName(material_input$46template, "_NgValidators_0_7");
  var C10;
  material_input$46template._ViewMaterialInputComponentHost0 = class _ViewMaterialInputComponentHost0 extends app_view.AppView$(dart.legacy(material_input.MaterialInputComponent)) {
    get [_NgValidators_0_7]() {
      if (this[__NgValidators_0_7] == null) {
        this[__NgValidators_0_7] = [this[_DeferredValidator_0_5]];
      }
      return this[__NgValidators_0_7];
    }
    build() {
      this[_compView_0] = new material_input$46template.ViewMaterialInputComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DeferredValidator_0_5] = new deferred_validator.DeferredValidator.new();
      this[_MaterialInputComponent_0_6] = new material_input.MaterialInputComponent.new(null, null, null, null, this[_compView_0], this[_DeferredValidator_0_5]);
      this[_compView_0].create(this[_MaterialInputComponent_0_6], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialInputComponentL()).new(0, this, this.rootEl, this[_MaterialInputComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(DeferredValidatorL())) {
          return this[_DeferredValidator_0_5];
        }
        if (token === dart.wrapType(MaterialInputComponentL()) || token === dart.wrapType(ReferenceDirectiveL()) || token === dart.wrapType(FocusableL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(BaseMaterialInputL())) {
          return this[_MaterialInputComponent_0_6];
        }
        if (token === (C10 || CT.C10)) {
          return this[_NgValidators_0_7];
        }
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
          this[_MaterialInputComponent_0_6].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialInputComponent_0_6].ngOnDestroy();
    }
  };
  (material_input$46template._ViewMaterialInputComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DeferredValidator_0_5] = null;
    this[_MaterialInputComponent_0_6] = null;
    this[__NgValidators_0_7] = null;
    material_input$46template._ViewMaterialInputComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_input$46template._ViewMaterialInputComponentHost0.prototype;
  dart.addTypeTests(material_input$46template._ViewMaterialInputComponentHost0);
  dart.addTypeCaches(material_input$46template._ViewMaterialInputComponentHost0);
  dart.setMethodSignature(material_input$46template._ViewMaterialInputComponentHost0, () => ({
    __proto__: dart.getMethods(material_input$46template._ViewMaterialInputComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setGetterSignature(material_input$46template._ViewMaterialInputComponentHost0, () => ({
    __proto__: dart.getGetters(material_input$46template._ViewMaterialInputComponentHost0.__proto__),
    [_NgValidators_0_7]: dart.legacy(core.List)
  }));
  dart.setLibraryUri(material_input$46template._ViewMaterialInputComponentHost0, L0);
  dart.setFieldSignature(material_input$46template._ViewMaterialInputComponentHost0, () => ({
    __proto__: dart.getFields(material_input$46template._ViewMaterialInputComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_input$46template.ViewMaterialInputComponent0)),
    [_DeferredValidator_0_5]: dart.fieldType(dart.legacy(deferred_validator.DeferredValidator)),
    [_MaterialInputComponent_0_6]: dart.fieldType(dart.legacy(material_input.MaterialInputComponent)),
    [__NgValidators_0_7]: dart.fieldType(dart.legacy(core.List))
  }));
  material_input$46template.viewFactory_MaterialInputComponent1 = function viewFactory_MaterialInputComponent1(parentView, parentIndex) {
    return new material_input$46template._ViewMaterialInputComponent1.new(parentView, parentIndex);
  };
  material_input$46template.viewFactory_MaterialInputComponent2 = function viewFactory_MaterialInputComponent2(parentView, parentIndex) {
    return new material_input$46template._ViewMaterialInputComponent2.new(parentView, parentIndex);
  };
  material_input$46template.viewFactory_MaterialInputComponent3 = function viewFactory_MaterialInputComponent3(parentView, parentIndex) {
    return new material_input$46template._ViewMaterialInputComponent3.new(parentView, parentIndex);
  };
  material_input$46template.viewFactory_MaterialInputComponent4 = function viewFactory_MaterialInputComponent4(parentView, parentIndex) {
    return new material_input$46template._ViewMaterialInputComponent4.new(parentView, parentIndex);
  };
  material_input$46template.viewFactory_MaterialInputComponent5 = function viewFactory_MaterialInputComponent5(parentView, parentIndex) {
    return new material_input$46template._ViewMaterialInputComponent5.new(parentView, parentIndex);
  };
  material_input$46template.viewFactory_MaterialInputComponent6 = function viewFactory_MaterialInputComponent6(parentView, parentIndex) {
    return new material_input$46template._ViewMaterialInputComponent6.new(parentView, parentIndex);
  };
  material_input$46template.viewFactory_MaterialInputComponent7 = function viewFactory_MaterialInputComponent7(parentView, parentIndex) {
    return new material_input$46template._ViewMaterialInputComponent7.new(parentView, parentIndex);
  };
  material_input$46template.viewFactory_MaterialInputComponent8 = function viewFactory_MaterialInputComponent8(parentView, parentIndex) {
    return new material_input$46template._ViewMaterialInputComponent8.new(parentView, parentIndex);
  };
  material_input$46template.viewFactory_MaterialInputComponent9 = function viewFactory_MaterialInputComponent9(parentView, parentIndex) {
    return new material_input$46template._ViewMaterialInputComponent9.new(parentView, parentIndex);
  };
  material_input$46template.viewFactory_MaterialInputComponentHost0 = function viewFactory_MaterialInputComponentHost0(parentView, parentIndex) {
    return new material_input$46template._ViewMaterialInputComponentHost0.new(parentView, parentIndex);
  };
  material_input$46template.initReflector = function initReflector() {
    if (dart.test(material_input$46template._visited)) {
      return;
    }
    material_input$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialInputComponentL()), material_input$46template.MaterialInputComponentNgFactory);
    base_material_input$46template.initReflector();
    base_material_input$46template.initReflector();
    deferred_validator$46template.initReflector();
    material_input_default_value_accessor$46template.initReflector();
    material_input_default_value_accessor$46template.initReflector();
    material_input_multiline$46template.initReflector();
    material_input_multiline$46template.initReflector();
    angular$46template.initReflector();
    focus$46template.initReflector();
    has_disabled$46template.initReflector();
    material_icon$46template.initReflector();
    properties$46template.initReflector();
    reference$46template.initReflector();
    id_generator$46template.initReflector();
    angular_forms$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.copyProperties(material_input$46template, {
    get MaterialInputComponentNgFactory() {
      return material_input$46template._MaterialInputComponentNgFactory;
    }
  });
  var C12;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C11;
  var C13;
  dart.defineLazy(material_input$46template, {
    /*material_input$46template.styles$MaterialInputComponent*/get styles$MaterialInputComponent() {
      return [material_input$46scss$46css$46shim.styles];
    },
    /*material_input$46template._MaterialInputComponentNgFactory*/get _MaterialInputComponentNgFactory() {
      return C11 || CT.C11;
    },
    /*material_input$46template.styles$MaterialInputComponentHost*/get styles$MaterialInputComponentHost() {
      return C13 || CT.C13;
    },
    /*material_input$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_input/material_input.template", {
    "package:angular_components/material_input/material_input.template.dart": material_input$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_input.template.dart"],"names":[],"mappings":"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","file":"material_input.template.ddc.js"}');
  // Exports:
  return {
    material_input__material_input$46template: material_input$46template
  };
}));

//# sourceMappingURL=material_input.template.ddc.js.map
