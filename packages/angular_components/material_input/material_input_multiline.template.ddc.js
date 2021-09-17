define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_forms/src/directives', 'packages/angular_components/focus/focus', 'packages/angular_components/focus/focus_interface', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_input/material_input_multiline', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/material_input/base_material_input.template', 'packages/angular_components/material_input/deferred_validator.template', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/angular/reference/reference.template', 'packages/angular_components/utils/browser/dom_service/angular_2.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_components/material_input/material_input.scss.css.shim', 'packages/angular_components/material_input/material_input_multiline.scss.css.shim'], (function load__packages__angular_components__material_input__material_input_multiline_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_forms__src__directives, packages__angular_components__focus__focus, packages__angular_components__focus__focus_interface, packages__angular__src__runtime__interpolate, packages__angular_components__material_input__material_input_multiline, packages__angular_components__material_input__deferred_validator, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__interfaces__has_disabled, packages__angular_components__utils__angular__reference__reference, packages__angular_components__material_input__base_material_input, packages__angular_components__material_input__base_material_input$46template, packages__angular_components__material_input__deferred_validator$46template, packages__angular__angular$46template, packages__angular_components__focus__focus$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__utils__angular__properties__properties$46template, packages__angular_components__utils__angular__reference__reference$46template, packages__angular_components__utils__browser__dom_service__angular_2$46template, packages__angular_forms__angular_forms$46template, packages__angular_components__material_input__material_input$46scss$46css$46shim, packages__angular_components__material_input__material_input_multiline$46scss$46css$46shim) {
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
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const default_value_accessor = packages__angular_forms__src__directives.src__directives__default_value_accessor;
  const control_value_accessor = packages__angular_forms__src__directives.src__directives__control_value_accessor;
  const ng_model = packages__angular_forms__src__directives.src__directives__ng_model;
  const ng_control = packages__angular_forms__src__directives.src__directives__ng_control;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_input_multiline = packages__angular_components__material_input__material_input_multiline.material_input__material_input_multiline;
  const deferred_validator = packages__angular_components__material_input__deferred_validator.material_input__deferred_validator;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  const base_material_input$46template = packages__angular_components__material_input__base_material_input$46template.material_input__base_material_input$46template;
  const deferred_validator$46template = packages__angular_components__material_input__deferred_validator$46template.material_input__deferred_validator$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const properties$46template = packages__angular_components__utils__angular__properties__properties$46template.utils__angular__properties__properties$46template;
  const reference$46template = packages__angular_components__utils__angular__reference__reference$46template.utils__angular__reference__reference$46template;
  const angular_2$46template = packages__angular_components__utils__browser__dom_service__angular_2$46template.utils__browser__dom_service__angular_2$46template;
  const angular_forms$46template = packages__angular_forms__angular_forms$46template.angular_forms$46template;
  const material_input$46scss$46css$46shim = packages__angular_components__material_input__material_input$46scss$46css$46shim.material_input__material_input$46scss$46css$46shim;
  const material_input_multiline$46scss$46css$46shim = packages__angular_components__material_input__material_input_multiline$46scss$46css$46shim.material_input__material_input_multiline$46scss$46css$46shim;
  var material_input_multiline$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var $setProperty = dartx.setProperty;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var TextAreaElementL = () => (TextAreaElementL = dart.constFn(dart.legacy(html.TextAreaElement)))();
  var ControlValueAccessorL = () => (ControlValueAccessorL = dart.constFn(dart.legacy(control_value_accessor.ControlValueAccessor)))();
  var JSArrayOfControlValueAccessorL = () => (JSArrayOfControlValueAccessorL = dart.constFn(_interceptors.JSArray$(ControlValueAccessorL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var MultiTokenOfControlValueAccessorL = () => (MultiTokenOfControlValueAccessorL = dart.constFn(opaque_token.MultiToken$(ControlValueAccessorL())))();
  var NgModelL = () => (NgModelL = dart.constFn(dart.legacy(ng_model.NgModel)))();
  var NgControlL = () => (NgControlL = dart.constFn(dart.legacy(ng_control.NgControl)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var NgSwitchL = () => (NgSwitchL = dart.constFn(dart.legacy(ng_switch.NgSwitch)))();
  var MaterialMultilineInputComponentL = () => (MaterialMultilineInputComponentL = dart.constFn(dart.legacy(material_input_multiline.MaterialMultilineInputComponent)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var VoidToMaterialMultilineInputComponentL = () => (VoidToMaterialMultilineInputComponentL = dart.constFn(dart.fnType(MaterialMultilineInputComponentL(), [])))();
  var ComponentRefOfMaterialMultilineInputComponentL = () => (ComponentRefOfMaterialMultilineInputComponentL = dart.constFn(component_factory.ComponentRef$(MaterialMultilineInputComponentL())))();
  var DeferredValidatorL = () => (DeferredValidatorL = dart.constFn(dart.legacy(deferred_validator.DeferredValidator)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var BaseMaterialInputL = () => (BaseMaterialInputL = dart.constFn(dart.legacy(base_material_input.BaseMaterialInput)))();
  var ComponentFactoryOfMaterialMultilineInputComponentL = () => (ComponentFactoryOfMaterialMultilineInputComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialMultilineInputComponentL())))();
  var AppViewOfMaterialMultilineInputComponentL = () => (AppViewOfMaterialMultilineInputComponentL = dart.constFn(app_view.AppView$(MaterialMultilineInputComponentL())))();
  var AppViewLOfMaterialMultilineInputComponentL = () => (AppViewLOfMaterialMultilineInputComponentL = dart.constFn(dart.legacy(AppViewOfMaterialMultilineInputComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialMultilineInputComponentL = () => (AppViewLAndintLToAppViewLOfMaterialMultilineInputComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialMultilineInputComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_input/material_input_multiline.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_input_multiline$46template.viewFactory_MaterialMultilineInputComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(material_input_multiline$46template.viewFactory_MaterialMultilineInputComponent2, AppViewLAndintLToAppViewLOfvoid());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: MultiTokenOfControlValueAccessorL().prototype,
        [OpaqueToken__uniqueName]: "NgValueAccessor"
      });
    },
    get C3() {
      return C3 = dart.fn(material_input_multiline$46template.viewFactory_MaterialMultilineInputComponent3, AppViewLAndintLToAppViewLOfvoid());
    },
    get C4() {
      return C4 = dart.fn(material_input_multiline$46template.viewFactory_MaterialMultilineInputComponent4, AppViewLAndintLToAppViewLOfvoid());
    },
    get C5() {
      return C5 = dart.fn(material_input_multiline$46template.viewFactory_MaterialMultilineInputComponent5, AppViewLAndintLToAppViewLOfvoid());
    },
    get C6() {
      return C6 = dart.fn(material_input_multiline$46template.viewFactory_MaterialMultilineInputComponent6, AppViewLAndintLToAppViewLOfvoid());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: opaque_token.MultiToken.prototype,
        [OpaqueToken__uniqueName]: "NgValidators"
      });
    },
    get C9() {
      return C9 = dart.fn(material_input_multiline$46template.viewFactory_MaterialMultilineInputComponentHost0, AppViewLAndintLToAppViewLOfMaterialMultilineInputComponentL());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ComponentFactoryOfMaterialMultilineInputComponentL().prototype,
        [ComponentFactory__viewFactory]: C9 || CT.C9,
        [ComponentFactory_selector]: "material-input[multiline]"
      });
    },
    get C10() {
      return C10 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _textBinding_6 = dart.privateName(material_input_multiline$46template, "_textBinding_6");
  var _appEl_8 = dart.privateName(material_input_multiline$46template, "_appEl_8");
  var _NgIf_8_9 = dart.privateName(material_input_multiline$46template, "_NgIf_8_9");
  var _DefaultValueAccessor_11_5 = dart.privateName(material_input_multiline$46template, "_DefaultValueAccessor_11_5");
  var _FocusableDirective_11_6 = dart.privateName(material_input_multiline$46template, "_FocusableDirective_11_6");
  var _NgValueAccessor_11_7 = dart.privateName(material_input_multiline$46template, "_NgValueAccessor_11_7");
  var _NgModel_11_8 = dart.privateName(material_input_multiline$46template, "_NgModel_11_8");
  var _appEl_16 = dart.privateName(material_input_multiline$46template, "_appEl_16");
  var _NgIf_16_9 = dart.privateName(material_input_multiline$46template, "_NgIf_16_9");
  var _expr_0 = dart.privateName(material_input_multiline$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_input_multiline$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_input_multiline$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_input_multiline$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_input_multiline$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_input_multiline$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_input_multiline$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_input_multiline$46template, "_expr_7");
  var _expr_9 = dart.privateName(material_input_multiline$46template, "_expr_9");
  var _expr_10 = dart.privateName(material_input_multiline$46template, "_expr_10");
  var _expr_11 = dart.privateName(material_input_multiline$46template, "_expr_11");
  var _expr_12 = dart.privateName(material_input_multiline$46template, "_expr_12");
  var _expr_13 = dart.privateName(material_input_multiline$46template, "_expr_13");
  var _expr_14 = dart.privateName(material_input_multiline$46template, "_expr_14");
  var _expr_15 = dart.privateName(material_input_multiline$46template, "_expr_15");
  var _expr_16 = dart.privateName(material_input_multiline$46template, "_expr_16");
  var _expr_18 = dart.privateName(material_input_multiline$46template, "_expr_18");
  var _expr_19 = dart.privateName(material_input_multiline$46template, "_expr_19");
  var _expr_20 = dart.privateName(material_input_multiline$46template, "_expr_20");
  var _expr_21 = dart.privateName(material_input_multiline$46template, "_expr_21");
  var _expr_22 = dart.privateName(material_input_multiline$46template, "_expr_22");
  var _expr_23 = dart.privateName(material_input_multiline$46template, "_expr_23");
  var _el_2 = dart.privateName(material_input_multiline$46template, "_el_2");
  var _el_5 = dart.privateName(material_input_multiline$46template, "_el_5");
  var _el_7 = dart.privateName(material_input_multiline$46template, "_el_7");
  var _el_11 = dart.privateName(material_input_multiline$46template, "_el_11");
  var _el_13 = dart.privateName(material_input_multiline$46template, "_el_13");
  var _el_14 = dart.privateName(material_input_multiline$46template, "_el_14");
  var _el_15 = dart.privateName(material_input_multiline$46template, "_el_15");
  var C0;
  var C1;
  var _handle_blur_11_0 = dart.privateName(material_input_multiline$46template, "_handle_blur_11_0");
  var _handle_change_11_1 = dart.privateName(material_input_multiline$46template, "_handle_change_11_1");
  var _handle_input_11_3 = dart.privateName(material_input_multiline$46template, "_handle_input_11_3");
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C2;
  material_input_multiline$46template.ViewMaterialMultilineInputComponent0 = class ViewMaterialMultilineInputComponent0 extends app_view.AppView$(dart.legacy(material_input_multiline.MaterialMultilineInputComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_input/material_input_multiline.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "baseline");
      this.addShimC(_el_0);
      let _el_1 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "top-section");
      this.addShimC(_el_1);
      this[_el_2] = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(this[_el_2], "input-container");
      this.addShimC(this[_el_2]);
      let _el_3 = dom_helpers.appendDiv(doc, this[_el_2]);
      dom_helpers.setAttribute(_el_3, "aria-hidden", "true");
      this.updateChildClass(_el_3, "label");
      this.addShimC(_el_3);
      let _text_4 = dom_helpers.appendText(_el_3, " ");
      this[_el_5] = dom_helpers.appendSpan(doc, _el_3);
      this.updateChildClass(HtmlElementL().as(this[_el_5]), "label-text");
      this.addShimE(this[_el_5]);
      this[_el_5][$append](this[_textBinding_6].element);
      this[_el_7] = dom_helpers.appendDiv(doc, this[_el_2]);
      this.addShimC(this[_el_7]);
      let _anchor_8 = dom_helpers.appendAnchor(this[_el_7]);
      this[_appEl_8] = new view_container.ViewContainer.new(8, 7, this, _anchor_8);
      let _TemplateRef_8_8 = new template_ref.TemplateRef.new(this[_appEl_8], C0 || CT.C0);
      this[_NgIf_8_9] = new ng_if.NgIf.new(this[_appEl_8], _TemplateRef_8_8);
      let _el_9 = dom_helpers.appendDiv(doc, this[_el_7]);
      dom_helpers.setAttribute(_el_9, "aria-hidden", "true");
      this.updateChildClass(_el_9, "line-height-measure");
      this.addShimC(_el_9);
      let _el_10 = dom_helpers.appendElement(doc, _el_9, "br");
      this.addShimE(_el_10);
      this[_el_11] = TextAreaElementL().as(dom_helpers.appendElement(doc, this[_el_7], "textarea"));
      this.updateChildClass(this[_el_11], "textarea");
      dom_helpers.setAttribute(this[_el_11], "focusableElement", "");
      this.addShimC(this[_el_11]);
      this[_DefaultValueAccessor_11_5] = new default_value_accessor.DefaultValueAccessor.new(this[_el_11]);
      this[_FocusableDirective_11_6] = new focus.FocusableDirective.new(this[_el_11]);
      this[_NgValueAccessor_11_7] = JSArrayOfControlValueAccessorL().of([this[_DefaultValueAccessor_11_5]]);
      this[_NgModel_11_8] = new ng_model.NgModel.new(null, this[_NgValueAccessor_11_7]);
      this.project(_el_1, 0);
      let _el_12 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_12, "underline");
      this.addShimC(_el_12);
      this[_el_13] = dom_helpers.appendDiv(doc, _el_12);
      this.updateChildClass(this[_el_13], "disabled-underline");
      this.addShimC(this[_el_13]);
      this[_el_14] = dom_helpers.appendDiv(doc, _el_12);
      this.updateChildClass(this[_el_14], "unfocused-underline");
      this.addShimC(this[_el_14]);
      this[_el_15] = dom_helpers.appendDiv(doc, _el_12);
      this.updateChildClass(this[_el_15], "focused-underline");
      this.addShimC(this[_el_15]);
      let _anchor_16 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_16] = new view_container.ViewContainer.new(16, null, this, _anchor_16);
      let _TemplateRef_16_8 = new template_ref.TemplateRef.new(this[_appEl_16], C1 || CT.C1);
      this[_NgIf_16_9] = new ng_if.NgIf.new(this[_appEl_16], _TemplateRef_16_8);
      this[_el_11][$addEventListener]("blur", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_blur_11_0)));
      this[_el_11][$addEventListener]("change", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_change_11_1)));
      this[_el_11][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'inputFocusAction')));
      this[_el_11][$addEventListener]("input", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_input_11_3)));
      _ctx.focusable = this[_FocusableDirective_11_6];
      _ctx.lineHeightMeasure = new element_ref.ElementRef.new(_el_9);
      _ctx.textareaEl = new element_ref.ElementRef.new(this[_el_11]);
      _ctx.popupSourceEl = new element_ref.ElementRef.new(_el_0);
      this.init0();
      _rootEl[$addEventListener]("focus", this.eventHandler0(EventL(), dart.bind(_ctx, 'focus')));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (11 === nodeIndex) {
        if (token === dart.wrapType(FocusableL())) {
          return this[_FocusableDirective_11_6];
        }
        if (token === (C2 || CT.C2)) {
          return this[_NgValueAccessor_11_7];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_11_8];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      this[_NgIf_8_9].ngIf = _ctx.rows != _ctx.maxRows;
      changed = false;
      this[_NgModel_11_8].model = _ctx.inputText;
      this[_NgModel_11_8].ngAfterChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_11_8].ngOnInit();
      }
      this[_NgIf_16_9].ngIf = _ctx.displayBottomPanel;
      this[_appEl_8].detectChangesInNestedViews();
      this[_appEl_16].detectChangesInNestedViews();
      let currVal_0 = _ctx.floatingLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(this[_el_2], "floated-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = dart.notNull(_ctx.rows) > 1;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_5]), "multiline", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = !dart.test(_ctx.labelVisible);
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_5]), "invisible", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.labelAnimated;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_5]), "animated", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.labelAnimationReset;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_5]), "reset", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = dart.test(_ctx.focused) && dart.test(_ctx.floatingLabelVisible);
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_5]), "focused", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = dart.test(_ctx.invalid) && dart.test(_ctx.floatingLabelVisible);
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_5]), "invalid", currVal_6);
        this[_expr_6] = currVal_6;
      }
      this[_textBinding_6].updateText(interpolate.interpolateString0(_ctx.label));
      let currVal_7 = _ctx.textAreaHeight;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_el_7].style[$setProperty]("height", currVal_7 == null ? null : dart.toString(currVal_7) + "px");
        this[_expr_7] = currVal_7;
      }
      let currVal_9 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        dom_helpers.updateClassBinding(this[_el_11], "disabledInput", currVal_9);
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.rows == _ctx.maxRows;
      if (dart.test(app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        dom_helpers.updateClassBinding(this[_el_11], "staticHeight", currVal_10);
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.textAreaHeight;
      if (dart.test(app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_el_11].style[$setProperty]("height", currVal_11 == null ? null : dart.toString(currVal_11) + "px");
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.inputAriaDescribedBy;
      if (dart.test(app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        dom_helpers.updateAttribute(this[_el_11], "aria-describedby", currVal_12);
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.ariaLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        dom_helpers.updateAttribute(this[_el_11], "aria-label", currVal_13);
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        dom_helpers.setProperty(this[_el_11], "readOnly", currVal_14);
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = _ctx.inputTabIndex;
      if (dart.test(app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        dom_helpers.setProperty(this[_el_11], "tabIndex", currVal_15);
        this[_expr_15] = currVal_15;
      }
      let currVal_16 = interpolate.interpolate0(_ctx.invalid);
      if (dart.test(app_view_utils.checkBinding(this[_expr_16], currVal_16))) {
        dom_helpers.setAttribute(this[_el_11], "aria-invalid", StringL().as(currVal_16));
        this[_expr_16] = currVal_16;
      }
      let currVal_18 = !dart.test(_ctx.disabled);
      if (dart.test(app_view_utils.checkBinding(this[_expr_18], currVal_18))) {
        dom_helpers.updateClassBinding(this[_el_13], "invisible", currVal_18);
        this[_expr_18] = currVal_18;
      }
      let currVal_19 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_19], currVal_19))) {
        dom_helpers.updateClassBinding(this[_el_14], "invisible", currVal_19);
        this[_expr_19] = currVal_19;
      }
      let currVal_20 = _ctx.invalid;
      if (dart.test(app_view_utils.checkBinding(this[_expr_20], currVal_20))) {
        dom_helpers.updateClassBinding(this[_el_14], "invalid", currVal_20);
        this[_expr_20] = currVal_20;
      }
      let currVal_21 = !dart.test(_ctx.focused) || dart.test(_ctx.disabled);
      if (dart.test(app_view_utils.checkBinding(this[_expr_21], currVal_21))) {
        dom_helpers.updateClassBinding(this[_el_15], "invisible", currVal_21);
        this[_expr_21] = currVal_21;
      }
      let currVal_22 = _ctx.invalid;
      if (dart.test(app_view_utils.checkBinding(this[_expr_22], currVal_22))) {
        dom_helpers.updateClassBinding(this[_el_15], "invalid", currVal_22);
        this[_expr_22] = currVal_22;
      }
      let currVal_23 = _ctx.underlineAnimated;
      if (dart.test(app_view_utils.checkBinding(this[_expr_23], currVal_23))) {
        dom_helpers.updateClassBinding(this[_el_15], "animated", currVal_23);
        this[_expr_23] = currVal_23;
      }
    }
    destroyInternal() {
      this[_appEl_8].destroyNestedViews();
      this[_appEl_16].destroyNestedViews();
    }
    [_handle_blur_11_0]($36event) {
      let local_textareaEl = this[_el_11];
      let _ctx = this.ctx;
      _ctx.inputBlurAction($36event, local_textareaEl.validity.valid, local_textareaEl.validationMessage);
      this[_DefaultValueAccessor_11_5].touchHandler();
    }
    [_handle_change_11_1]($36event) {
      let local_textareaEl = this[_el_11];
      let _ctx = this.ctx;
      _ctx.inputChange(local_textareaEl.value, local_textareaEl.validity.valid, local_textareaEl.validationMessage);
      dart.dsend($36event, 'stopPropagation', []);
    }
    [_handle_input_11_3]($36event) {
      let local_textareaEl = this[_el_11];
      let _ctx = this.ctx;
      _ctx.inputKeypress(local_textareaEl.value, local_textareaEl.validity.valid, local_textareaEl.validationMessage);
      this[_DefaultValueAccessor_11_5].handleChange(StringL().as(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
    initComponentStyles() {
      let styles = material_input_multiline$46template.ViewMaterialMultilineInputComponent0._componentStyles;
      if (styles == null) {
        material_input_multiline$46template.ViewMaterialMultilineInputComponent0._componentStyles = styles = material_input_multiline$46template.ViewMaterialMultilineInputComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_input_multiline$46template.styles$MaterialMultilineInputComponent, material_input_multiline$46template.ViewMaterialMultilineInputComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_input_multiline$46template.ViewMaterialMultilineInputComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_6] = new text_binding.TextBinding.new();
    this[_appEl_8] = null;
    this[_NgIf_8_9] = null;
    this[_DefaultValueAccessor_11_5] = null;
    this[_FocusableDirective_11_6] = null;
    this[_NgValueAccessor_11_7] = null;
    this[_NgModel_11_8] = null;
    this[_appEl_16] = null;
    this[_NgIf_16_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    this[_expr_16] = null;
    this[_expr_18] = null;
    this[_expr_19] = null;
    this[_expr_20] = null;
    this[_expr_21] = null;
    this[_expr_22] = null;
    this[_expr_23] = null;
    this[_el_2] = null;
    this[_el_5] = null;
    this[_el_7] = null;
    this[_el_11] = null;
    this[_el_13] = null;
    this[_el_14] = null;
    this[_el_15] = null;
    material_input_multiline$46template.ViewMaterialMultilineInputComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-input"));
    this.updateChildClassNonHtml(this.rootEl, "themeable");
    this.rootEl.tabIndex = -1;
  }).prototype = material_input_multiline$46template.ViewMaterialMultilineInputComponent0.prototype;
  dart.addTypeTests(material_input_multiline$46template.ViewMaterialMultilineInputComponent0);
  dart.addTypeCaches(material_input_multiline$46template.ViewMaterialMultilineInputComponent0);
  dart.setMethodSignature(material_input_multiline$46template.ViewMaterialMultilineInputComponent0, () => ({
    __proto__: dart.getMethods(material_input_multiline$46template.ViewMaterialMultilineInputComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_blur_11_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_change_11_1]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_11_3]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_input_multiline$46template.ViewMaterialMultilineInputComponent0, L0);
  dart.setFieldSignature(material_input_multiline$46template.ViewMaterialMultilineInputComponent0, () => ({
    __proto__: dart.getFields(material_input_multiline$46template.ViewMaterialMultilineInputComponent0.__proto__),
    [_textBinding_6]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_appEl_8]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_8_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_DefaultValueAccessor_11_5]: dart.fieldType(dart.legacy(default_value_accessor.DefaultValueAccessor)),
    [_FocusableDirective_11_6]: dart.fieldType(dart.legacy(focus.FocusableDirective)),
    [_NgValueAccessor_11_7]: dart.fieldType(dart.legacy(core.List$(dart.legacy(control_value_accessor.ControlValueAccessor)))),
    [_NgModel_11_8]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_appEl_16]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_16_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_5]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_6]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_10]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(dart.dynamic),
    [_expr_15]: dart.fieldType(dart.dynamic),
    [_expr_16]: dart.fieldType(dart.dynamic),
    [_expr_18]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_19]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_20]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_21]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_22]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_23]: dart.fieldType(dart.legacy(core.bool)),
    [_el_2]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_5]: dart.fieldType(dart.legacy(html.Element)),
    [_el_7]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_11]: dart.fieldType(dart.legacy(html.TextAreaElement)),
    [_el_13]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_14]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_15]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(material_input_multiline$46template.ViewMaterialMultilineInputComponent0, {
    /*material_input_multiline$46template.ViewMaterialMultilineInputComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_1 = dart.privateName(material_input_multiline$46template, "_textBinding_1");
  var _el_0 = dart.privateName(material_input_multiline$46template, "_el_0");
  material_input_multiline$46template._ViewMaterialMultilineInputComponent1 = class _ViewMaterialMultilineInputComponent1 extends app_view.AppView$(dart.legacy(material_input_multiline.MaterialMultilineInputComponent)) {
    build() {
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      dom_helpers.setAttribute(this[_el_0], "aria-hidden", "true");
      this.updateChildClass(this[_el_0], "mirror-text");
      this.addShimC(this[_el_0]);
      this[_el_0][$append](this[_textBinding_1].element);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.minInputHeight;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_el_0].style[$setProperty]("min-height", currVal_0 == null ? null : dart.toString(currVal_0) + "px");
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.maxInputHeight;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_el_0].style[$setProperty]("max-height", currVal_1 == null ? null : dart.toString(currVal_1) + "px");
        this[_expr_1] = currVal_1;
      }
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.mirrorText));
    }
  };
  (material_input_multiline$46template._ViewMaterialMultilineInputComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    material_input_multiline$46template._ViewMaterialMultilineInputComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_input_multiline$46template._ViewMaterialMultilineInputComponent1.prototype;
  dart.addTypeTests(material_input_multiline$46template._ViewMaterialMultilineInputComponent1);
  dart.addTypeCaches(material_input_multiline$46template._ViewMaterialMultilineInputComponent1);
  dart.setLibraryUri(material_input_multiline$46template._ViewMaterialMultilineInputComponent1, L0);
  dart.setFieldSignature(material_input_multiline$46template._ViewMaterialMultilineInputComponent1, () => ({
    __proto__: dart.getFields(material_input_multiline$46template._ViewMaterialMultilineInputComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _NgSwitch_0_5 = dart.privateName(material_input_multiline$46template, "_NgSwitch_0_5");
  var _appEl_1 = dart.privateName(material_input_multiline$46template, "_appEl_1");
  var _NgSwitchWhen_1_9 = dart.privateName(material_input_multiline$46template, "_NgSwitchWhen_1_9");
  var _appEl_2 = dart.privateName(material_input_multiline$46template, "_appEl_2");
  var _NgSwitchWhen_2_9 = dart.privateName(material_input_multiline$46template, "_NgSwitchWhen_2_9");
  var _appEl_3 = dart.privateName(material_input_multiline$46template, "_appEl_3");
  var _NgSwitchWhen_3_9 = dart.privateName(material_input_multiline$46template, "_NgSwitchWhen_3_9");
  var _appEl_4 = dart.privateName(material_input_multiline$46template, "_appEl_4");
  var _NgIf_4_9 = dart.privateName(material_input_multiline$46template, "_NgIf_4_9");
  var C3;
  var C4;
  var C5;
  var C6;
  material_input_multiline$46template._ViewMaterialMultilineInputComponent2 = class _ViewMaterialMultilineInputComponent2 extends app_view.AppView$(dart.legacy(material_input_multiline.MaterialMultilineInputComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "bottom-section");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_NgSwitch_0_5] = new ng_switch.NgSwitch.new();
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C3 || CT.C3);
      this[_NgSwitchWhen_1_9] = new ng_switch.NgSwitchWhen.new(this[_appEl_1], _TemplateRef_1_8, this[_NgSwitch_0_5]);
      let _anchor_2 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C4 || CT.C4);
      this[_NgSwitchWhen_2_9] = new ng_switch.NgSwitchWhen.new(this[_appEl_2], _TemplateRef_2_8, this[_NgSwitch_0_5]);
      let _anchor_3 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_3] = new view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C5 || CT.C5);
      this[_NgSwitchWhen_3_9] = new ng_switch.NgSwitchWhen.new(this[_appEl_3], _TemplateRef_3_8, this[_NgSwitch_0_5]);
      let _anchor_4 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C6 || CT.C6);
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
  (material_input_multiline$46template._ViewMaterialMultilineInputComponent2.new = function(parentView, parentIndex) {
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
    material_input_multiline$46template._ViewMaterialMultilineInputComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_input_multiline$46template._ViewMaterialMultilineInputComponent2.prototype;
  dart.addTypeTests(material_input_multiline$46template._ViewMaterialMultilineInputComponent2);
  dart.addTypeCaches(material_input_multiline$46template._ViewMaterialMultilineInputComponent2);
  dart.setMethodSignature(material_input_multiline$46template._ViewMaterialMultilineInputComponent2, () => ({
    __proto__: dart.getMethods(material_input_multiline$46template._ViewMaterialMultilineInputComponent2.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_input_multiline$46template._ViewMaterialMultilineInputComponent2, L0);
  dart.setFieldSignature(material_input_multiline$46template._ViewMaterialMultilineInputComponent2, () => ({
    __proto__: dart.getFields(material_input_multiline$46template._ViewMaterialMultilineInputComponent2.__proto__),
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
  material_input_multiline$46template._ViewMaterialMultilineInputComponent3 = class _ViewMaterialMultilineInputComponent3 extends app_view.AppView$(dart.legacy(material_input_multiline.MaterialMultilineInputComponent)) {
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
      let currVal_0 = _ctx.focused;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(this[_el_0], "focused", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.invalid;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBinding(this[_el_0], "invalid", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = interpolate.interpolate0(!dart.test(_ctx.invalid));
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.setAttribute(this[_el_0], "aria-hidden", StringL().as(currVal_2));
        this[_expr_2] = currVal_2;
      }
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.errorMessage));
    }
  };
  (material_input_multiline$46template._ViewMaterialMultilineInputComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    material_input_multiline$46template._ViewMaterialMultilineInputComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_input_multiline$46template._ViewMaterialMultilineInputComponent3.prototype;
  dart.addTypeTests(material_input_multiline$46template._ViewMaterialMultilineInputComponent3);
  dart.addTypeCaches(material_input_multiline$46template._ViewMaterialMultilineInputComponent3);
  dart.setLibraryUri(material_input_multiline$46template._ViewMaterialMultilineInputComponent3, L0);
  dart.setFieldSignature(material_input_multiline$46template._ViewMaterialMultilineInputComponent3, () => ({
    __proto__: dart.getFields(material_input_multiline$46template._ViewMaterialMultilineInputComponent3.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  material_input_multiline$46template._ViewMaterialMultilineInputComponent4 = class _ViewMaterialMultilineInputComponent4 extends app_view.AppView$(dart.legacy(material_input_multiline.MaterialMultilineInputComponent)) {
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
  (material_input_multiline$46template._ViewMaterialMultilineInputComponent4.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_input_multiline$46template._ViewMaterialMultilineInputComponent4.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_input_multiline$46template._ViewMaterialMultilineInputComponent4.prototype;
  dart.addTypeTests(material_input_multiline$46template._ViewMaterialMultilineInputComponent4);
  dart.addTypeCaches(material_input_multiline$46template._ViewMaterialMultilineInputComponent4);
  dart.setLibraryUri(material_input_multiline$46template._ViewMaterialMultilineInputComponent4, L0);
  dart.setFieldSignature(material_input_multiline$46template._ViewMaterialMultilineInputComponent4, () => ({
    __proto__: dart.getFields(material_input_multiline$46template._ViewMaterialMultilineInputComponent4.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _handle_focus_0_0 = dart.privateName(material_input_multiline$46template, "_handle_focus_0_0");
  material_input_multiline$46template._ViewMaterialMultilineInputComponent5 = class _ViewMaterialMultilineInputComponent5 extends app_view.AppView$(dart.legacy(material_input_multiline.MaterialMultilineInputComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
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
  (material_input_multiline$46template._ViewMaterialMultilineInputComponent5.new = function(parentView, parentIndex) {
    material_input_multiline$46template._ViewMaterialMultilineInputComponent5.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_input_multiline$46template._ViewMaterialMultilineInputComponent5.prototype;
  dart.addTypeTests(material_input_multiline$46template._ViewMaterialMultilineInputComponent5);
  dart.addTypeCaches(material_input_multiline$46template._ViewMaterialMultilineInputComponent5);
  dart.setMethodSignature(material_input_multiline$46template._ViewMaterialMultilineInputComponent5, () => ({
    __proto__: dart.getMethods(material_input_multiline$46template._ViewMaterialMultilineInputComponent5.__proto__),
    [_handle_focus_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_input_multiline$46template._ViewMaterialMultilineInputComponent5, L0);
  material_input_multiline$46template._ViewMaterialMultilineInputComponent6 = class _ViewMaterialMultilineInputComponent6 extends app_view.AppView$(dart.legacy(material_input_multiline.MaterialMultilineInputComponent)) {
    build() {
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      dom_helpers.setAttribute(this[_el_0], "aria-hidden", "true");
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
  (material_input_multiline$46template._ViewMaterialMultilineInputComponent6.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_el_0] = null;
    material_input_multiline$46template._ViewMaterialMultilineInputComponent6.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_input_multiline$46template._ViewMaterialMultilineInputComponent6.prototype;
  dart.addTypeTests(material_input_multiline$46template._ViewMaterialMultilineInputComponent6);
  dart.addTypeCaches(material_input_multiline$46template._ViewMaterialMultilineInputComponent6);
  dart.setLibraryUri(material_input_multiline$46template._ViewMaterialMultilineInputComponent6, L0);
  dart.setFieldSignature(material_input_multiline$46template._ViewMaterialMultilineInputComponent6, () => ({
    __proto__: dart.getFields(material_input_multiline$46template._ViewMaterialMultilineInputComponent6.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _compView_0 = dart.privateName(material_input_multiline$46template, "_compView_0");
  var _DeferredValidator_0_5 = dart.privateName(material_input_multiline$46template, "_DeferredValidator_0_5");
  var _MaterialMultilineInputComponent_0_6 = dart.privateName(material_input_multiline$46template, "_MaterialMultilineInputComponent_0_6");
  var __NgValidators_0_8 = dart.privateName(material_input_multiline$46template, "__NgValidators_0_8");
  var _NgValidators_0_8 = dart.privateName(material_input_multiline$46template, "_NgValidators_0_8");
  var C7;
  material_input_multiline$46template._ViewMaterialMultilineInputComponentHost0 = class _ViewMaterialMultilineInputComponentHost0 extends app_view.AppView$(dart.legacy(material_input_multiline.MaterialMultilineInputComponent)) {
    get [_NgValidators_0_8]() {
      if (this[__NgValidators_0_8] == null) {
        this[__NgValidators_0_8] = [this[_DeferredValidator_0_5]];
      }
      return this[__NgValidators_0_8];
    }
    build() {
      this[_compView_0] = new material_input_multiline$46template.ViewMaterialMultilineInputComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DeferredValidator_0_5] = new deferred_validator.DeferredValidator.new();
      this[_MaterialMultilineInputComponent_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialMultilineInputComponentL(), dart.wrapType(MaterialMultilineInputComponentL()), dart.fn(() => new material_input_multiline.MaterialMultilineInputComponent.new(null, this[_compView_0], this[_DeferredValidator_0_5], DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex))), VoidToMaterialMultilineInputComponentL())) : new material_input_multiline.MaterialMultilineInputComponent.new(null, this[_compView_0], this[_DeferredValidator_0_5], DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialMultilineInputComponent_0_6], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialMultilineInputComponentL()).new(0, this, this.rootEl, this[_MaterialMultilineInputComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(DeferredValidatorL())) {
          return this[_DeferredValidator_0_5];
        }
        if (token === dart.wrapType(MaterialMultilineInputComponentL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(ReferenceDirectiveL()) || token === dart.wrapType(FocusableL()) || token === dart.wrapType(BaseMaterialInputL())) {
          return this[_MaterialMultilineInputComponent_0_6];
        }
        if (token === (C7 || CT.C7)) {
          return this[_NgValidators_0_8];
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
          this[_MaterialMultilineInputComponent_0_6].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialMultilineInputComponent_0_6].ngOnDestroy();
    }
  };
  (material_input_multiline$46template._ViewMaterialMultilineInputComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DeferredValidator_0_5] = null;
    this[_MaterialMultilineInputComponent_0_6] = null;
    this[__NgValidators_0_8] = null;
    material_input_multiline$46template._ViewMaterialMultilineInputComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_input_multiline$46template._ViewMaterialMultilineInputComponentHost0.prototype;
  dart.addTypeTests(material_input_multiline$46template._ViewMaterialMultilineInputComponentHost0);
  dart.addTypeCaches(material_input_multiline$46template._ViewMaterialMultilineInputComponentHost0);
  dart.setMethodSignature(material_input_multiline$46template._ViewMaterialMultilineInputComponentHost0, () => ({
    __proto__: dart.getMethods(material_input_multiline$46template._ViewMaterialMultilineInputComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setGetterSignature(material_input_multiline$46template._ViewMaterialMultilineInputComponentHost0, () => ({
    __proto__: dart.getGetters(material_input_multiline$46template._ViewMaterialMultilineInputComponentHost0.__proto__),
    [_NgValidators_0_8]: dart.legacy(core.List)
  }));
  dart.setLibraryUri(material_input_multiline$46template._ViewMaterialMultilineInputComponentHost0, L0);
  dart.setFieldSignature(material_input_multiline$46template._ViewMaterialMultilineInputComponentHost0, () => ({
    __proto__: dart.getFields(material_input_multiline$46template._ViewMaterialMultilineInputComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_input_multiline$46template.ViewMaterialMultilineInputComponent0)),
    [_DeferredValidator_0_5]: dart.fieldType(dart.legacy(deferred_validator.DeferredValidator)),
    [_MaterialMultilineInputComponent_0_6]: dart.fieldType(dart.legacy(material_input_multiline.MaterialMultilineInputComponent)),
    [__NgValidators_0_8]: dart.fieldType(dart.legacy(core.List))
  }));
  material_input_multiline$46template.viewFactory_MaterialMultilineInputComponent1 = function viewFactory_MaterialMultilineInputComponent1(parentView, parentIndex) {
    return new material_input_multiline$46template._ViewMaterialMultilineInputComponent1.new(parentView, parentIndex);
  };
  material_input_multiline$46template.viewFactory_MaterialMultilineInputComponent2 = function viewFactory_MaterialMultilineInputComponent2(parentView, parentIndex) {
    return new material_input_multiline$46template._ViewMaterialMultilineInputComponent2.new(parentView, parentIndex);
  };
  material_input_multiline$46template.viewFactory_MaterialMultilineInputComponent3 = function viewFactory_MaterialMultilineInputComponent3(parentView, parentIndex) {
    return new material_input_multiline$46template._ViewMaterialMultilineInputComponent3.new(parentView, parentIndex);
  };
  material_input_multiline$46template.viewFactory_MaterialMultilineInputComponent4 = function viewFactory_MaterialMultilineInputComponent4(parentView, parentIndex) {
    return new material_input_multiline$46template._ViewMaterialMultilineInputComponent4.new(parentView, parentIndex);
  };
  material_input_multiline$46template.viewFactory_MaterialMultilineInputComponent5 = function viewFactory_MaterialMultilineInputComponent5(parentView, parentIndex) {
    return new material_input_multiline$46template._ViewMaterialMultilineInputComponent5.new(parentView, parentIndex);
  };
  material_input_multiline$46template.viewFactory_MaterialMultilineInputComponent6 = function viewFactory_MaterialMultilineInputComponent6(parentView, parentIndex) {
    return new material_input_multiline$46template._ViewMaterialMultilineInputComponent6.new(parentView, parentIndex);
  };
  material_input_multiline$46template.viewFactory_MaterialMultilineInputComponentHost0 = function viewFactory_MaterialMultilineInputComponentHost0(parentView, parentIndex) {
    return new material_input_multiline$46template._ViewMaterialMultilineInputComponentHost0.new(parentView, parentIndex);
  };
  material_input_multiline$46template.initReflector = function initReflector() {
    if (dart.test(material_input_multiline$46template._visited)) {
      return;
    }
    material_input_multiline$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialMultilineInputComponentL()), material_input_multiline$46template.MaterialMultilineInputComponentNgFactory);
    base_material_input$46template.initReflector();
    base_material_input$46template.initReflector();
    deferred_validator$46template.initReflector();
    angular$46template.initReflector();
    focus$46template.initReflector();
    has_disabled$46template.initReflector();
    properties$46template.initReflector();
    reference$46template.initReflector();
    angular_2$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.copyProperties(material_input_multiline$46template, {
    get MaterialMultilineInputComponentNgFactory() {
      return material_input_multiline$46template._MaterialMultilineInputComponentNgFactory;
    }
  });
  var C9;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C8;
  var C10;
  dart.defineLazy(material_input_multiline$46template, {
    /*material_input_multiline$46template.styles$MaterialMultilineInputComponent*/get styles$MaterialMultilineInputComponent() {
      return [material_input$46scss$46css$46shim.styles, material_input_multiline$46scss$46css$46shim.styles];
    },
    /*material_input_multiline$46template._MaterialMultilineInputComponentNgFactory*/get _MaterialMultilineInputComponentNgFactory() {
      return C8 || CT.C8;
    },
    /*material_input_multiline$46template.styles$MaterialMultilineInputComponentHost*/get styles$MaterialMultilineInputComponentHost() {
      return C10 || CT.C10;
    },
    /*material_input_multiline$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_input/material_input_multiline.template", {
    "package:angular_components/material_input/material_input_multiline.template.dart": material_input_multiline$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_input_multiline.template.dart"],"names":[],"mappings":"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","file":"material_input_multiline.template.ddc.js"}');
  // Exports:
  return {
    material_input__material_input_multiline$46template: material_input_multiline$46template
  };
}));

//# sourceMappingURL=material_input_multiline.template.ddc.js.map
