define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_select/material_dropdown_select', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_select/material_dropdown_select.template', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/a11y/active_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/material_datepicker/material_time_picker', 'packages/quiver/src/time/clock', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/string_selection_options.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/material_datepicker/material_time_picker.scss.css.shim'], (function load__packages__angular_components__material_datepicker__material_time_picker_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular_components__material_select__material_dropdown_select, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_select__material_dropdown_select$46template, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__material_input__material_input$46template, packages__angular_components__material_input__deferred_validator, packages__angular_forms__src__directives, packages__angular_components__material_input__material_input, packages__angular_components__material_input__material_input_default_value_accessor, packages__angular_components__material_input__base_material_input, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__interfaces__has_disabled, packages__angular_components__model__a11y__active_item, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__model__ui__has_renderer, packages__angular_components__content__deferred_content_aware, packages__angular_components__model__selection__selection_container, packages__angular_components__material_select__activation_handler, packages__angular_components__material_datepicker__material_time_picker, packages__quiver__src__time__clock, packages__angular__angular$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__selection__string_selection_options$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__material_datepicker__material_time_picker$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const material_dropdown_select = packages__angular_components__material_select__material_dropdown_select.material_select__material_dropdown_select;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const material_dropdown_select$46template = packages__angular_components__material_select__material_dropdown_select$46template.material_select__material_dropdown_select$46template;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const material_input$46template = packages__angular_components__material_input__material_input$46template.material_input__material_input$46template;
  const deferred_validator = packages__angular_components__material_input__deferred_validator.material_input__deferred_validator;
  const ng_model = packages__angular_forms__src__directives.src__directives__ng_model;
  const ng_control = packages__angular_forms__src__directives.src__directives__ng_control;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const material_input_default_value_accessor = packages__angular_components__material_input__material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const active_item = packages__angular_components__model__a11y__active_item.model__a11y__active_item;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const material_time_picker = packages__angular_components__material_datepicker__material_time_picker.material_datepicker__material_time_picker;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const string_selection_options$46template = packages__angular_components__model__selection__string_selection_options$46template.model__selection__string_selection_options$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const material_time_picker$46scss$46css$46shim = packages__angular_components__material_datepicker__material_time_picker$46scss$46css$46shim.material_datepicker__material_time_picker$46scss$46css$46shim;
  var material_time_picker$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  var ViewMaterialDropdownSelectComponent0OfDateTimeL = () => (ViewMaterialDropdownSelectComponent0OfDateTimeL = dart.constFn(material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$(DateTimeL())))();
  var MaterialDropdownSelectComponentOfDateTimeL = () => (MaterialDropdownSelectComponentOfDateTimeL = dart.constFn(material_dropdown_select.MaterialDropdownSelectComponent$(DateTimeL())))();
  var MaterialDropdownSelectComponentLOfDateTimeL = () => (MaterialDropdownSelectComponentLOfDateTimeL = dart.constFn(dart.legacy(MaterialDropdownSelectComponentOfDateTimeL())))();
  var MaterialDropdownSelectComponentL = () => (MaterialDropdownSelectComponentL = dart.constFn(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent)))();
  var IdGeneratorL = () => (IdGeneratorL = dart.constFn(dart.legacy(id_generator.IdGenerator)))();
  var PopupSizeProviderL = () => (PopupSizeProviderL = dart.constFn(dart.legacy(popup_size_provider.PopupSizeProvider)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToMaterialDropdownSelectComponentLOfDateTimeL = () => (VoidToMaterialDropdownSelectComponentLOfDateTimeL = dart.constFn(dart.fnType(MaterialDropdownSelectComponentLOfDateTimeL(), [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var FocusEventL = () => (FocusEventL = dart.constFn(dart.legacy(html.FocusEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var DeferredValidatorL = () => (DeferredValidatorL = dart.constFn(dart.legacy(deferred_validator.DeferredValidator)))();
  var NgModelL = () => (NgModelL = dart.constFn(dart.legacy(ng_model.NgModel)))();
  var NgControlL = () => (NgControlL = dart.constFn(dart.legacy(ng_control.NgControl)))();
  var MaterialInputComponentL = () => (MaterialInputComponentL = dart.constFn(dart.legacy(material_input.MaterialInputComponent)))();
  var BaseMaterialInputL = () => (BaseMaterialInputL = dart.constFn(dart.legacy(base_material_input.BaseMaterialInput)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ActiveItemModelL = () => (ActiveItemModelL = dart.constFn(dart.legacy(active_item.ActiveItemModel)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var SelectionContainerL = () => (SelectionContainerL = dart.constFn(dart.legacy(selection_container.SelectionContainer)))();
  var ActivationHandlerL = () => (ActivationHandlerL = dart.constFn(dart.legacy(activation_handler.ActivationHandler)))();
  var MaterialTimePickerComponentL = () => (MaterialTimePickerComponentL = dart.constFn(dart.legacy(material_time_picker.MaterialTimePickerComponent)))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var VoidToMaterialTimePickerComponentL = () => (VoidToMaterialTimePickerComponentL = dart.constFn(dart.fnType(MaterialTimePickerComponentL(), [])))();
  var ComponentRefOfMaterialTimePickerComponentL = () => (ComponentRefOfMaterialTimePickerComponentL = dart.constFn(component_factory.ComponentRef$(MaterialTimePickerComponentL())))();
  var ComponentFactoryOfMaterialTimePickerComponentL = () => (ComponentFactoryOfMaterialTimePickerComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialTimePickerComponentL())))();
  var AppViewOfMaterialTimePickerComponentL = () => (AppViewOfMaterialTimePickerComponentL = dart.constFn(app_view.AppView$(MaterialTimePickerComponentL())))();
  var AppViewLOfMaterialTimePickerComponentL = () => (AppViewLOfMaterialTimePickerComponentL = dart.constFn(dart.legacy(AppViewOfMaterialTimePickerComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfMaterialTimePickerComponentL = () => (AppViewLAndintLToAppViewLOfMaterialTimePickerComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialTimePickerComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/material_time_picker.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "isRtl"
      });
    },
    get C1() {
      return C1 = dart.constList([], dart.dynamic);
    },
    get C2() {
      return C2 = dart.constList([], ObjectL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: opaque_token.MultiToken.prototype,
        [OpaqueToken__uniqueName]: "NgValidators"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C6() {
      return C6 = dart.fn(material_time_picker$46template.viewFactory_MaterialTimePickerComponentHost0, AppViewLAndintLToAppViewLOfMaterialTimePickerComponentL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ComponentFactoryOfMaterialTimePickerComponentL().prototype,
        [ComponentFactory__viewFactory]: C6 || CT.C6,
        [ComponentFactory_selector]: "material-time-picker"
      });
    }
  }, false);
  var _compView_0 = dart.privateName(material_time_picker$46template, "_compView_0");
  var _MaterialDropdownSelectComponent_0_5 = dart.privateName(material_time_picker$46template, "_MaterialDropdownSelectComponent_0_5");
  var __ActiveItemModel_0_13 = dart.privateName(material_time_picker$46template, "__ActiveItemModel_0_13");
  var _compView_3 = dart.privateName(material_time_picker$46template, "_compView_3");
  var _DeferredValidator_3_5 = dart.privateName(material_time_picker$46template, "_DeferredValidator_3_5");
  var _NgValidators_3_6 = dart.privateName(material_time_picker$46template, "_NgValidators_3_6");
  var _NgModel_3_7 = dart.privateName(material_time_picker$46template, "_NgModel_3_7");
  var _MaterialInputComponent_3_9 = dart.privateName(material_time_picker$46template, "_MaterialInputComponent_3_9");
  var _MaterialInputDefaultValueAccessor_3_11 = dart.privateName(material_time_picker$46template, "_MaterialInputDefaultValueAccessor_3_11");
  var _expr_0 = dart.privateName(material_time_picker$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_time_picker$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_time_picker$46template, "_expr_2");
  var _expr_5 = dart.privateName(material_time_picker$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_time_picker$46template, "_expr_6");
  var _expr_8 = dart.privateName(material_time_picker$46template, "_expr_8");
  var _expr_11 = dart.privateName(material_time_picker$46template, "_expr_11");
  var _expr_12 = dart.privateName(material_time_picker$46template, "_expr_12");
  var _expr_14 = dart.privateName(material_time_picker$46template, "_expr_14");
  var _expr_15 = dart.privateName(material_time_picker$46template, "_expr_15");
  var _ActiveItemModel_0_13 = dart.privateName(material_time_picker$46template, "_ActiveItemModel_0_13");
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C0;
  var C1;
  var _handle_visibleChange_0_0 = dart.privateName(material_time_picker$46template, "_handle_visibleChange_0_0");
  var _handle_ngModelChange_3_2 = dart.privateName(material_time_picker$46template, "_handle_ngModelChange_3_2");
  var C2;
  var C3;
  material_time_picker$46template.ViewMaterialTimePickerComponent0 = class ViewMaterialTimePickerComponent0 extends app_view.AppView$(dart.legacy(material_time_picker.MaterialTimePickerComponent)) {
    get [_ActiveItemModel_0_13]() {
      if (this[__ActiveItemModel_0_13] == null) {
        this[__ActiveItemModel_0_13] = material_dropdown_select.fromDropdown(this[_MaterialDropdownSelectComponent_0_5]);
      }
      return this[__ActiveItemModel_0_13];
    }
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_time_picker.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new (ViewMaterialDropdownSelectComponent0OfDateTimeL()).new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_MaterialDropdownSelectComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialDropdownSelectComponentLOfDateTimeL(), dart.wrapType(MaterialDropdownSelectComponentL()), dart.fn(() => new (MaterialDropdownSelectComponentOfDateTimeL()).new(IdGeneratorL().as(this.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), boolL().as(this.parentView.injectorGetOptional(C0 || CT.C0, this.viewData.parentIndex)), null, null, this[_compView_0], _el_0), VoidToMaterialDropdownSelectComponentLOfDateTimeL())) : new (MaterialDropdownSelectComponentOfDateTimeL()).new(IdGeneratorL().as(this.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), boolL().as(this.parentView.injectorGetOptional(C0 || CT.C0, this.viewData.parentIndex)), null, null, this[_compView_0], _el_0);
      let doc = html.document;
      let _el_1 = doc[$createElement]("div");
      dom_helpers.setAttribute(_el_1, "header", "");
      this.addShimC(HtmlElementL().as(_el_1));
      let _el_2 = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_2, "time-input-box");
      this.addShimC(_el_2);
      this[_compView_3] = new material_input$46template.ViewMaterialInputComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootEl;
      _el_2[$append](_el_3);
      dom_helpers.setAttribute(_el_3, "type", "text");
      this.addShimC(_el_3);
      this[_DeferredValidator_3_5] = new deferred_validator.DeferredValidator.new();
      this[_NgValidators_3_6] = [this[_DeferredValidator_3_5]];
      this[_NgModel_3_7] = new ng_model.NgModel.new(this[_NgValidators_3_6], null);
      this[_MaterialInputComponent_3_9] = new material_input.MaterialInputComponent.new("text", null, null, this[_NgModel_3_7], this[_compView_3], this[_DeferredValidator_3_5]);
      this[_MaterialInputDefaultValueAccessor_3_11] = new material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_3_9], this[_NgModel_3_7]);
      this[_compView_3].create(this[_MaterialInputComponent_3_9], JSArrayOfObjectL().of([C1 || CT.C1, C1 || CT.C1]));
      this[_compView_0].create(this[_MaterialDropdownSelectComponent_0_5], JSArrayOfObjectL().of([C1 || CT.C1, JSArrayOfElementL().of([_el_1]), C1 || CT.C1, C1 || CT.C1, C1 || CT.C1, C1 || CT.C1]));
      let subscription_0 = this[_MaterialDropdownSelectComponent_0_5].visibleStream.listen(this.eventHandler1(boolL(), boolL(), dart.bind(this, _handle_visibleChange_0_0)));
      _el_1[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyPress')));
      _el_1[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onInputBoxKeyDown')));
      let subscription_1 = this[_NgModel_3_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_3_2)));
      let subscription_2 = this[_MaterialInputComponent_3_9].onKeypress.listen(this.eventHandler1(StringL(), StringL(), dart.bind(_ctx, 'onTextChange')));
      let subscription_3 = this[_MaterialInputComponent_3_9].onBlur.listen(this.eventHandler0(FocusEventL(), dart.bind(_ctx, 'onBlur')));
      this.init(C2 || CT.C2, JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1, subscription_2, subscription_3]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 3) {
        if (3 === nodeIndex) {
          if (token === dart.wrapType(DeferredValidatorL())) {
            return this[_DeferredValidator_3_5];
          }
          if (token === (C3 || CT.C3)) {
            return this[_NgValidators_3_6];
          }
          if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
            return this[_NgModel_3_7];
          }
          if (token === dart.wrapType(MaterialInputComponentL()) || token === dart.wrapType(BaseMaterialInputL()) || token === dart.wrapType(ReferenceDirectiveL()) || token === dart.wrapType(FocusableL()) || token === dart.wrapType(HasDisabledL())) {
            return this[_MaterialInputComponent_3_9];
          }
        }
        if (token === dart.wrapType(ActiveItemModelL()) && 0 === nodeIndex) {
          return this[_ActiveItemModel_0_13];
        }
        if (token === dart.wrapType(MaterialDropdownSelectComponentL()) || token === dart.wrapType(DropdownHandleL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(SelectionContainerL()) || token === dart.wrapType(PopupSizeProviderL()) || token === dart.wrapType(ActivationHandlerL())) {
          return this[_MaterialDropdownSelectComponent_0_5];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialDropdownSelectComponent_0_5].popupMatchInputWidth = false;
        changed = true;
        this[_MaterialDropdownSelectComponent_0_5].slide = "y";
        changed = true;
        if (dart.bind(_ctx, 'renderTime') !== null) {
          this[_MaterialDropdownSelectComponent_0_5].itemRenderer = dart.bind(_ctx, 'renderTime');
          changed = true;
        }
      }
      let currVal_0 = _ctx.dropdownText;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialDropdownSelectComponent_0_5].buttonText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialDropdownSelectComponent_0_5].disabled = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.selectedTime;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialDropdownSelectComponent_0_5].selectionInput = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_5 = _ctx.popupVisible;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialDropdownSelectComponent_0_5].visible = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.error;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialDropdownSelectComponent_0_5].error = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_8 = _ctx.timeOptions;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MaterialDropdownSelectComponent_0_5].optionsInput = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_MaterialDropdownSelectComponent_0_5].ngAfterChanges();
      }
      changed = false;
      this[_NgModel_3_7].model = _ctx.timeInputText;
      this[_NgModel_3_7].ngAfterChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_3_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        if (material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg != null) {
          this[_MaterialInputComponent_3_9].label = material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg;
          changed = true;
        }
        if (material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg != null) {
          this[_MaterialInputComponent_3_9].requiredErrorMsg = material_time_picker.MaterialTimePickerComponent.inputPlaceholderMsg;
          changed = true;
        }
      }
      let currVal_11 = _ctx.displayErrorPanel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_MaterialInputComponent_3_9].displayBottomPanel = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.inputError;
      if (dart.test(app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_MaterialInputComponent_3_9].error = currVal_12;
        changed = true;
        this[_expr_12] = currVal_12;
      }
      let currVal_14 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        this[_MaterialInputComponent_3_9].disabled = currVal_14;
        changed = true;
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = _ctx.required;
      if (dart.test(app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        this[_MaterialInputComponent_3_9].required = currVal_15;
        changed = true;
        this[_expr_15] = currVal_15;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      this[_compView_3].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_3_9].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_3].destroyInternalState();
      this[_MaterialInputComponent_3_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_3_11].ngOnDestroy();
      this[_MaterialDropdownSelectComponent_0_5].ngOnDestroy();
    }
    [_handle_visibleChange_0_0]($36event) {
      let _ctx = this.ctx;
      _ctx.popupVisible = boolL().as($36event);
    }
    [_handle_ngModelChange_3_2]($36event) {
      let _ctx = this.ctx;
      _ctx.timeInputText = StringL().as($36event);
    }
    initComponentStyles() {
      let styles = material_time_picker$46template.ViewMaterialTimePickerComponent0._componentStyles;
      if (styles == null) {
        material_time_picker$46template.ViewMaterialTimePickerComponent0._componentStyles = styles = material_time_picker$46template.ViewMaterialTimePickerComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_time_picker$46template.styles$MaterialTimePickerComponent, material_time_picker$46template.ViewMaterialTimePickerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_time_picker$46template.ViewMaterialTimePickerComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDropdownSelectComponent_0_5] = null;
    this[__ActiveItemModel_0_13] = null;
    this[_compView_3] = null;
    this[_DeferredValidator_3_5] = null;
    this[_NgValidators_3_6] = null;
    this[_NgModel_3_7] = null;
    this[_MaterialInputComponent_3_9] = null;
    this[_MaterialInputDefaultValueAccessor_3_11] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_8] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-time-picker"));
  }).prototype = material_time_picker$46template.ViewMaterialTimePickerComponent0.prototype;
  dart.addTypeTests(material_time_picker$46template.ViewMaterialTimePickerComponent0);
  dart.addTypeCaches(material_time_picker$46template.ViewMaterialTimePickerComponent0);
  dart.setMethodSignature(material_time_picker$46template.ViewMaterialTimePickerComponent0, () => ({
    __proto__: dart.getMethods(material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_visibleChange_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_ngModelChange_3_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_time_picker$46template.ViewMaterialTimePickerComponent0, () => ({
    __proto__: dart.getGetters(material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__),
    [_ActiveItemModel_0_13]: dart.legacy(active_item.ActiveItemModel)
  }));
  dart.setLibraryUri(material_time_picker$46template.ViewMaterialTimePickerComponent0, L0);
  dart.setFieldSignature(material_time_picker$46template.ViewMaterialTimePickerComponent0, () => ({
    __proto__: dart.getFields(material_time_picker$46template.ViewMaterialTimePickerComponent0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_dropdown_select$46template.ViewMaterialDropdownSelectComponent0$(dart.legacy(core.DateTime)))),
    [_MaterialDropdownSelectComponent_0_5]: dart.fieldType(dart.legacy(material_dropdown_select.MaterialDropdownSelectComponent$(dart.legacy(core.DateTime)))),
    [__ActiveItemModel_0_13]: dart.fieldType(dart.legacy(active_item.ActiveItemModel)),
    [_compView_3]: dart.fieldType(dart.legacy(material_input$46template.ViewMaterialInputComponent0)),
    [_DeferredValidator_3_5]: dart.fieldType(dart.legacy(deferred_validator.DeferredValidator)),
    [_NgValidators_3_6]: dart.fieldType(dart.legacy(core.List)),
    [_NgModel_3_7]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_MaterialInputComponent_3_9]: dart.fieldType(dart.legacy(material_input.MaterialInputComponent)),
    [_MaterialInputDefaultValueAccessor_3_11]: dart.fieldType(dart.legacy(material_input_default_value_accessor.MaterialInputDefaultValueAccessor)),
    [_expr_0]: dart.fieldType(dart.legacy(core.String)),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_6]: dart.fieldType(dart.legacy(core.String)),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_12]: dart.fieldType(dart.legacy(core.String)),
    [_expr_14]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_15]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(material_time_picker$46template.ViewMaterialTimePickerComponent0, {
    /*material_time_picker$46template.ViewMaterialTimePickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _MaterialTimePickerComponent_0_5 = dart.privateName(material_time_picker$46template, "_MaterialTimePickerComponent_0_5");
  var C4;
  material_time_picker$46template._ViewMaterialTimePickerComponentHost0 = class _ViewMaterialTimePickerComponentHost0 extends app_view.AppView$(dart.legacy(material_time_picker.MaterialTimePickerComponent)) {
    build() {
      this[_compView_0] = new material_time_picker$46template.ViewMaterialTimePickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialTimePickerComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTimePickerComponentL(), dart.wrapType(MaterialTimePickerComponentL()), dart.fn(() => new material_time_picker.MaterialTimePickerComponent.new(ClockL().as(this.injectorGet(C4 || CT.C4, this.viewData.parentIndex))), VoidToMaterialTimePickerComponentL())) : new material_time_picker.MaterialTimePickerComponent.new(ClockL().as(this.injectorGet(C4 || CT.C4, this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialTimePickerComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialTimePickerComponentL()).new(0, this, this.rootEl, this[_MaterialTimePickerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
        return this[_MaterialTimePickerComponent_0_5];
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
        this[_MaterialTimePickerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialTimePickerComponent_0_5].ngOnDestroy();
    }
  };
  (material_time_picker$46template._ViewMaterialTimePickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialTimePickerComponent_0_5] = null;
    material_time_picker$46template._ViewMaterialTimePickerComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_time_picker$46template._ViewMaterialTimePickerComponentHost0.prototype;
  dart.addTypeTests(material_time_picker$46template._ViewMaterialTimePickerComponentHost0);
  dart.addTypeCaches(material_time_picker$46template._ViewMaterialTimePickerComponentHost0);
  dart.setMethodSignature(material_time_picker$46template._ViewMaterialTimePickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_time_picker$46template._ViewMaterialTimePickerComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_time_picker$46template._ViewMaterialTimePickerComponentHost0, L0);
  dart.setFieldSignature(material_time_picker$46template._ViewMaterialTimePickerComponentHost0, () => ({
    __proto__: dart.getFields(material_time_picker$46template._ViewMaterialTimePickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_time_picker$46template.ViewMaterialTimePickerComponent0)),
    [_MaterialTimePickerComponent_0_5]: dart.fieldType(dart.legacy(material_time_picker.MaterialTimePickerComponent))
  }));
  material_time_picker$46template.viewFactory_MaterialTimePickerComponentHost0 = function viewFactory_MaterialTimePickerComponentHost0(parentView, parentIndex) {
    return new material_time_picker$46template._ViewMaterialTimePickerComponentHost0.new(parentView, parentIndex);
  };
  material_time_picker$46template.initReflector = function initReflector() {
    if (dart.test(material_time_picker$46template._visited)) {
      return;
    }
    material_time_picker$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialTimePickerComponentL()), material_time_picker$46template.MaterialTimePickerComponentNgFactory);
    angular$46template.initReflector();
    has_disabled$46template.initReflector();
    module$46template.initReflector();
    material_input$46template.initReflector();
    material_dropdown_select$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    select$46template.initReflector();
    selection_model$46template.initReflector();
    string_selection_options$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(material_time_picker$46template, {
    get MaterialTimePickerComponentNgFactory() {
      return material_time_picker$46template._MaterialTimePickerComponentNgFactory;
    }
  });
  var C6;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C5;
  dart.defineLazy(material_time_picker$46template, {
    /*material_time_picker$46template.styles$MaterialTimePickerComponent*/get styles$MaterialTimePickerComponent() {
      return [material_time_picker$46scss$46css$46shim.styles];
    },
    /*material_time_picker$46template._MaterialTimePickerComponentNgFactory*/get _MaterialTimePickerComponentNgFactory() {
      return C5 || CT.C5;
    },
    /*material_time_picker$46template.styles$MaterialTimePickerComponentHost*/get styles$MaterialTimePickerComponentHost() {
      return C1 || CT.C1;
    },
    /*material_time_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/material_time_picker.template", {
    "package:angular_components/material_datepicker/material_time_picker.template.dart": material_time_picker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_time_picker.template.dart"],"names":[],"mappings":"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","file":"material_time_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_time_picker$46template: material_time_picker$46template
  };
}));

//# sourceMappingURL=material_time_picker.template.ddc.js.map
