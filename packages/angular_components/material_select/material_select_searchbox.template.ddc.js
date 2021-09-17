define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_input/material_input.template', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_select/material_select_searchbox', 'packages/angular/angular.template', 'packages/angular_components/focus/focus_interface.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/utils/async/async.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_components/material_select/material_select_searchbox.scss.css.shim'], (function load__packages__angular_components__material_select__material_select_searchbox_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_input__material_input$46template, packages__angular__src__runtime__interpolate, packages__angular_components__material_input__deferred_validator, packages__angular_forms__src__directives, packages__angular_components__material_input__material_input, packages__angular_components__material_input__material_input_default_value_accessor, packages__angular_components__material_input__base_material_input, packages__angular_components__utils__angular__reference__reference, packages__angular_components__focus__focus_interface, packages__angular_components__interfaces__has_disabled, packages__angular_components__material_select__material_select_searchbox, packages__angular__angular$46template, packages__angular_components__focus__focus_interface$46template, packages__angular_components__mixins__focusable_mixin$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__utils__async__async$46template, packages__angular_components__utils__browser__events__events$46template, packages__angular_forms__angular_forms$46template, packages__angular_components__material_select__material_select_searchbox$46scss$46css$46shim) {
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
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const material_input$46template = packages__angular_components__material_input__material_input$46template.material_input__material_input$46template;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const deferred_validator = packages__angular_components__material_input__deferred_validator.material_input__deferred_validator;
  const ng_model = packages__angular_forms__src__directives.src__directives__ng_model;
  const ng_control = packages__angular_forms__src__directives.src__directives__ng_control;
  const material_input = packages__angular_components__material_input__material_input.material_input__material_input;
  const material_input_default_value_accessor = packages__angular_components__material_input__material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const material_select_searchbox = packages__angular_components__material_select__material_select_searchbox.material_select__material_select_searchbox;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus_interface$46template = packages__angular_components__focus__focus_interface$46template.focus__focus_interface$46template;
  const focusable_mixin$46template = packages__angular_components__mixins__focusable_mixin$46template.mixins__focusable_mixin$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const async$46template = packages__angular_components__utils__async__async$46template.utils__async__async$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  const angular_forms$46template = packages__angular_forms__angular_forms$46template.angular_forms$46template;
  const material_select_searchbox$46scss$46css$46shim = packages__angular_components__material_select__material_select_searchbox$46scss$46css$46shim.material_select__material_select_searchbox$46scss$46css$46shim;
  var material_select_searchbox$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
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
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MaterialSelectSearchboxComponentL = () => (MaterialSelectSearchboxComponentL = dart.constFn(dart.legacy(material_select_searchbox.MaterialSelectSearchboxComponent)))();
  var ComponentRefOfMaterialSelectSearchboxComponentL = () => (ComponentRefOfMaterialSelectSearchboxComponentL = dart.constFn(component_factory.ComponentRef$(MaterialSelectSearchboxComponentL())))();
  var ComponentFactoryOfMaterialSelectSearchboxComponentL = () => (ComponentFactoryOfMaterialSelectSearchboxComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialSelectSearchboxComponentL())))();
  var AppViewOfMaterialSelectSearchboxComponentL = () => (AppViewOfMaterialSelectSearchboxComponentL = dart.constFn(app_view.AppView$(MaterialSelectSearchboxComponentL())))();
  var AppViewLOfMaterialSelectSearchboxComponentL = () => (AppViewLOfMaterialSelectSearchboxComponentL = dart.constFn(dart.legacy(AppViewOfMaterialSelectSearchboxComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfMaterialSelectSearchboxComponentL = () => (AppViewLAndintLToAppViewLOfMaterialSelectSearchboxComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialSelectSearchboxComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_select/material_select_searchbox.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], dart.dynamic);
    },
    get C1() {
      return C1 = dart.constList([], ObjectL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: opaque_token.MultiToken.prototype,
        [OpaqueToken__uniqueName]: "NgValidators"
      });
    },
    get C4() {
      return C4 = dart.fn(material_select_searchbox$46template.viewFactory_MaterialSelectSearchboxComponentHost0, AppViewLAndintLToAppViewLOfMaterialSelectSearchboxComponentL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfMaterialSelectSearchboxComponentL().prototype,
        [ComponentFactory__viewFactory]: C4 || CT.C4,
        [ComponentFactory_selector]: "material-select-searchbox"
      });
    }
  }, false);
  var _compView_0 = dart.privateName(material_select_searchbox$46template, "_compView_0");
  var _DeferredValidator_0_5 = dart.privateName(material_select_searchbox$46template, "_DeferredValidator_0_5");
  var _NgValidators_0_6 = dart.privateName(material_select_searchbox$46template, "_NgValidators_0_6");
  var _NgModel_0_7 = dart.privateName(material_select_searchbox$46template, "_NgModel_0_7");
  var _MaterialInputComponent_0_9 = dart.privateName(material_select_searchbox$46template, "_MaterialInputComponent_0_9");
  var _MaterialInputDefaultValueAccessor_0_11 = dart.privateName(material_select_searchbox$46template, "_MaterialInputDefaultValueAccessor_0_11");
  var _expr_1 = dart.privateName(material_select_searchbox$46template, "_expr_1");
  var C0;
  var _handle_ngModelChange_0_2 = dart.privateName(material_select_searchbox$46template, "_handle_ngModelChange_0_2");
  var C1;
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C2;
  material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0 = class ViewMaterialSelectSearchboxComponent0 extends app_view.AppView$(dart.legacy(material_select_searchbox.MaterialSelectSearchboxComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_select/material_select_searchbox.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_input$46template.ViewMaterialInputComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      parentRenderNode[$append](_el_0);
      this.updateChildClassNonHtml(_el_0, interpolate.interpolateString2("", "searchbox-input", " ", "themeable", ""));
      dom_helpers.setAttribute(_el_0, "leadingGlyph", "search");
      this.addShimC(_el_0);
      this[_DeferredValidator_0_5] = new deferred_validator.DeferredValidator.new();
      this[_NgValidators_0_6] = [this[_DeferredValidator_0_5]];
      this[_NgModel_0_7] = new ng_model.NgModel.new(this[_NgValidators_0_6], null);
      this[_MaterialInputComponent_0_9] = new material_input.MaterialInputComponent.new(null, null, null, this[_NgModel_0_7], this[_compView_0], this[_DeferredValidator_0_5]);
      this[_MaterialInputDefaultValueAccessor_0_11] = new material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_MaterialInputComponent_0_9], this[_NgModel_0_7]);
      this[_compView_0].create(this[_MaterialInputComponent_0_9], JSArrayOfObjectL().of([C0 || CT.C0, C0 || CT.C0]));
      _el_0[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'stopSpaceKeyPropagation')));
      let subscription_0 = this[_NgModel_0_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_0_2)));
      let subscription_1 = this[_MaterialInputComponent_0_9].onFocus.listen(this.eventHandler1(FocusEventL(), FocusEventL(), dart.bind(_ctx, 'handleFocus')));
      _ctx.input = this[_MaterialInputComponent_0_9];
      this.init(C1 || CT.C1, JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(DeferredValidatorL())) {
          return this[_DeferredValidator_0_5];
        }
        if (token === (C2 || CT.C2)) {
          return this[_NgValidators_0_6];
        }
        if (token === dart.wrapType(NgModelL()) || token === dart.wrapType(NgControlL())) {
          return this[_NgModel_0_7];
        }
        if (token === dart.wrapType(MaterialInputComponentL()) || token === dart.wrapType(BaseMaterialInputL()) || token === dart.wrapType(ReferenceDirectiveL()) || token === dart.wrapType(FocusableL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialInputComponent_0_9];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_0_7].model = _ctx.inputText;
      this[_NgModel_0_7].ngAfterChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_0_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_0_9].displayBottomPanel = false;
        changed = true;
        this[_MaterialInputComponent_0_9].leadingGlyph = "search";
        changed = true;
      }
      let currVal_1 = _ctx.label;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialInputComponent_0_9].label = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_0_9].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialInputComponent_0_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_0_11].ngOnDestroy();
    }
    [_handle_ngModelChange_0_2]($36event) {
      let _ctx = this.ctx;
      _ctx.inputText = StringL().as($36event);
    }
    initComponentStyles() {
      let styles = material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0._componentStyles;
      if (styles == null) {
        material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0._componentStyles = styles = material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_select_searchbox$46template.styles$MaterialSelectSearchboxComponent, material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DeferredValidator_0_5] = null;
    this[_NgValidators_0_6] = null;
    this[_NgModel_0_7] = null;
    this[_MaterialInputComponent_0_9] = null;
    this[_MaterialInputDefaultValueAccessor_0_11] = null;
    this[_expr_1] = null;
    material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-select-searchbox"));
  }).prototype = material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0.prototype;
  dart.addTypeTests(material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0);
  dart.addTypeCaches(material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0);
  dart.setMethodSignature(material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0, () => ({
    __proto__: dart.getMethods(material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_ngModelChange_0_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0, L0);
  dart.setFieldSignature(material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0, () => ({
    __proto__: dart.getFields(material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_input$46template.ViewMaterialInputComponent0)),
    [_DeferredValidator_0_5]: dart.fieldType(dart.legacy(deferred_validator.DeferredValidator)),
    [_NgValidators_0_6]: dart.fieldType(dart.legacy(core.List)),
    [_NgModel_0_7]: dart.fieldType(dart.legacy(ng_model.NgModel)),
    [_MaterialInputComponent_0_9]: dart.fieldType(dart.legacy(material_input.MaterialInputComponent)),
    [_MaterialInputDefaultValueAccessor_0_11]: dart.fieldType(dart.legacy(material_input_default_value_accessor.MaterialInputDefaultValueAccessor)),
    [_expr_1]: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0, {
    /*material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _MaterialSelectSearchboxComponent_0_5 = dart.privateName(material_select_searchbox$46template, "_MaterialSelectSearchboxComponent_0_5");
  material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0 = class _ViewMaterialSelectSearchboxComponentHost0 extends app_view.AppView$(dart.legacy(material_select_searchbox.MaterialSelectSearchboxComponent)) {
    build() {
      this[_compView_0] = new material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialSelectSearchboxComponent_0_5] = new material_select_searchbox.MaterialSelectSearchboxComponent.new();
      this[_compView_0].create(this[_MaterialSelectSearchboxComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialSelectSearchboxComponentL()).new(0, this, this.rootEl, this[_MaterialSelectSearchboxComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(FocusableL()) && 0 === nodeIndex) {
        return this[_MaterialSelectSearchboxComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialSelectSearchboxComponent_0_5].ngOnDestroy();
    }
  };
  (material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialSelectSearchboxComponent_0_5] = null;
    material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0.prototype;
  dart.addTypeTests(material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0);
  dart.addTypeCaches(material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0);
  dart.setMethodSignature(material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0, () => ({
    __proto__: dart.getMethods(material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0, L0);
  dart.setFieldSignature(material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0, () => ({
    __proto__: dart.getFields(material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_select_searchbox$46template.ViewMaterialSelectSearchboxComponent0)),
    [_MaterialSelectSearchboxComponent_0_5]: dart.fieldType(dart.legacy(material_select_searchbox.MaterialSelectSearchboxComponent))
  }));
  material_select_searchbox$46template.viewFactory_MaterialSelectSearchboxComponentHost0 = function viewFactory_MaterialSelectSearchboxComponentHost0(parentView, parentIndex) {
    return new material_select_searchbox$46template._ViewMaterialSelectSearchboxComponentHost0.new(parentView, parentIndex);
  };
  material_select_searchbox$46template.initReflector = function initReflector() {
    if (dart.test(material_select_searchbox$46template._visited)) {
      return;
    }
    material_select_searchbox$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialSelectSearchboxComponentL()), material_select_searchbox$46template.MaterialSelectSearchboxComponentNgFactory);
    angular$46template.initReflector();
    focus_interface$46template.initReflector();
    material_input$46template.initReflector();
    focusable_mixin$46template.initReflector();
    select$46template.initReflector();
    async$46template.initReflector();
    events$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.copyProperties(material_select_searchbox$46template, {
    get MaterialSelectSearchboxComponentNgFactory() {
      return material_select_searchbox$46template._MaterialSelectSearchboxComponentNgFactory;
    }
  });
  var C4;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C3;
  dart.defineLazy(material_select_searchbox$46template, {
    /*material_select_searchbox$46template.styles$MaterialSelectSearchboxComponent*/get styles$MaterialSelectSearchboxComponent() {
      return [material_select_searchbox$46scss$46css$46shim.styles];
    },
    /*material_select_searchbox$46template._MaterialSelectSearchboxComponentNgFactory*/get _MaterialSelectSearchboxComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*material_select_searchbox$46template.styles$MaterialSelectSearchboxComponentHost*/get styles$MaterialSelectSearchboxComponentHost() {
      return C0 || CT.C0;
    },
    /*material_select_searchbox$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_select/material_select_searchbox.template", {
    "package:angular_components/material_select/material_select_searchbox.template.dart": material_select_searchbox$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_select_searchbox.template.dart"],"names":[],"mappings":"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","file":"material_select_searchbox.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_searchbox$46template: material_select_searchbox$46template
  };
}));

//# sourceMappingURL=material_select_searchbox.template.ddc.js.map
