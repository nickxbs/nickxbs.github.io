define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_datepicker/material_datepicker.template', 'packages/angular_components/material_datepicker/material_datepicker', 'packages/quiver/src/time/clock', 'packages/angular_components/material_datepicker/material_time_picker.template', 'packages/angular_components/material_datepicker/material_time_picker', 'packages/angular_components/model/date/date', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_datepicker/material_date_time_picker', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/material_datepicker/material_date_time_picker.scss.css.shim'], (function load__packages__angular_components__material_datepicker__material_date_time_picker_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_datepicker__material_datepicker$46template, packages__angular_components__material_datepicker__material_datepicker, packages__quiver__src__time__clock, packages__angular_components__material_datepicker__material_time_picker$46template, packages__angular_components__material_datepicker__material_time_picker, packages__angular_components__model__date__date, packages__angular_components__interfaces__has_disabled, packages__angular_components__material_datepicker__material_date_time_picker, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__material_input__material_input$46template, packages__angular_components__model__date__date$46template, packages__angular_components__material_datepicker__material_date_time_picker$46scss$46css$46shim) {
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
  const material_datepicker$46template = packages__angular_components__material_datepicker__material_datepicker$46template.material_datepicker__material_datepicker$46template;
  const material_datepicker = packages__angular_components__material_datepicker__material_datepicker.material_datepicker__material_datepicker;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const material_time_picker$46template = packages__angular_components__material_datepicker__material_time_picker$46template.material_datepicker__material_time_picker$46template;
  const material_time_picker = packages__angular_components__material_datepicker__material_time_picker.material_datepicker__material_time_picker;
  const date = packages__angular_components__model__date__date.model__date__date;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const material_date_time_picker = packages__angular_components__material_datepicker__material_date_time_picker.material_datepicker__material_date_time_picker;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const material_input$46template = packages__angular_components__material_input__material_input$46template.material_input__material_input$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const material_date_time_picker$46scss$46css$46shim = packages__angular_components__material_datepicker__material_date_time_picker$46scss$46css$46shim.material_datepicker__material_date_time_picker$46scss$46css$46shim;
  var material_date_time_picker$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var MaterialDatepickerComponentL = () => (MaterialDatepickerComponentL = dart.constFn(dart.legacy(material_datepicker.MaterialDatepickerComponent)))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var VoidToMaterialDatepickerComponentL = () => (VoidToMaterialDatepickerComponentL = dart.constFn(dart.fnType(MaterialDatepickerComponentL(), [])))();
  var MaterialTimePickerComponentL = () => (MaterialTimePickerComponentL = dart.constFn(dart.legacy(material_time_picker.MaterialTimePickerComponent)))();
  var VoidToMaterialTimePickerComponentL = () => (VoidToMaterialTimePickerComponentL = dart.constFn(dart.fnType(MaterialTimePickerComponentL(), [])))();
  var DateL = () => (DateL = dart.constFn(dart.legacy(date.Date)))();
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var MaterialDateTimePickerComponentL = () => (MaterialDateTimePickerComponentL = dart.constFn(dart.legacy(material_date_time_picker.MaterialDateTimePickerComponent)))();
  var VoidToMaterialDateTimePickerComponentL = () => (VoidToMaterialDateTimePickerComponentL = dart.constFn(dart.fnType(MaterialDateTimePickerComponentL(), [])))();
  var ComponentRefOfMaterialDateTimePickerComponentL = () => (ComponentRefOfMaterialDateTimePickerComponentL = dart.constFn(component_factory.ComponentRef$(MaterialDateTimePickerComponentL())))();
  var ComponentFactoryOfMaterialDateTimePickerComponentL = () => (ComponentFactoryOfMaterialDateTimePickerComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialDateTimePickerComponentL())))();
  var AppViewOfMaterialDateTimePickerComponentL = () => (AppViewOfMaterialDateTimePickerComponentL = dart.constFn(app_view.AppView$(MaterialDateTimePickerComponentL())))();
  var AppViewLOfMaterialDateTimePickerComponentL = () => (AppViewLOfMaterialDateTimePickerComponentL = dart.constFn(dart.legacy(AppViewOfMaterialDateTimePickerComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfMaterialDateTimePickerComponentL = () => (AppViewLAndintLToAppViewLOfMaterialDateTimePickerComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialDateTimePickerComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/material_date_time_picker.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C1() {
      return C1 = dart.constList([], ObjectL());
    },
    get C3() {
      return C3 = dart.fn(material_date_time_picker$46template.viewFactory_MaterialDateTimePickerComponentHost0, AppViewLAndintLToAppViewLOfMaterialDateTimePickerComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfMaterialDateTimePickerComponentL().prototype,
        [ComponentFactory__viewFactory]: C3 || CT.C3,
        [ComponentFactory_selector]: "material-date-time-picker"
      });
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _compView_0 = dart.privateName(material_date_time_picker$46template, "_compView_0");
  var _MaterialDatepickerComponent_0_5 = dart.privateName(material_date_time_picker$46template, "_MaterialDatepickerComponent_0_5");
  var _compView_1 = dart.privateName(material_date_time_picker$46template, "_compView_1");
  var _MaterialTimePickerComponent_1_5 = dart.privateName(material_date_time_picker$46template, "_MaterialTimePickerComponent_1_5");
  var _expr_0 = dart.privateName(material_date_time_picker$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_date_time_picker$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_date_time_picker$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_date_time_picker$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_date_time_picker$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_date_time_picker$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_date_time_picker$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_date_time_picker$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_date_time_picker$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_date_time_picker$46template, "_expr_9");
  var _expr_10 = dart.privateName(material_date_time_picker$46template, "_expr_10");
  var _expr_11 = dart.privateName(material_date_time_picker$46template, "_expr_11");
  var _expr_12 = dart.privateName(material_date_time_picker$46template, "_expr_12");
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C0;
  var _handle_dateChange_0_0 = dart.privateName(material_date_time_picker$46template, "_handle_dateChange_0_0");
  var _handle_timeChange_1_0 = dart.privateName(material_date_time_picker$46template, "_handle_timeChange_1_0");
  var C1;
  material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0 = class ViewMaterialDateTimePickerComponent0 extends app_view.AppView$(dart.legacy(material_date_time_picker.MaterialDateTimePickerComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_date_time_picker.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_datepicker$46template.ViewMaterialDatepickerComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_MaterialDatepickerComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialDatepickerComponentL(), dart.wrapType(MaterialDatepickerComponentL()), dart.fn(() => new material_datepicker.MaterialDatepickerComponent.new(_el_0, null, ClockL().as(this.parentView.injectorGetOptional(C0 || CT.C0, this.viewData.parentIndex))), VoidToMaterialDatepickerComponentL())) : new material_datepicker.MaterialDatepickerComponent.new(_el_0, null, ClockL().as(this.parentView.injectorGetOptional(C0 || CT.C0, this.viewData.parentIndex)));
      this[_compView_0].create0(this[_MaterialDatepickerComponent_0_5]);
      this[_compView_1] = new material_time_picker$46template.ViewMaterialTimePickerComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      parentRenderNode[$append](_el_1);
      this.addShimC(_el_1);
      this[_MaterialTimePickerComponent_1_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialTimePickerComponentL(), dart.wrapType(MaterialTimePickerComponentL()), dart.fn(() => new material_time_picker.MaterialTimePickerComponent.new(ClockL().as(this.parentView.injectorGet(C0 || CT.C0, this.viewData.parentIndex))), VoidToMaterialTimePickerComponentL())) : new material_time_picker.MaterialTimePickerComponent.new(ClockL().as(this.parentView.injectorGet(C0 || CT.C0, this.viewData.parentIndex)));
      this[_compView_1].create0(this[_MaterialTimePickerComponent_1_5]);
      let subscription_0 = this[_MaterialDatepickerComponent_0_5].dateChange.listen(this.eventHandler1(DateL(), DateL(), dart.bind(this, _handle_dateChange_0_0)));
      let subscription_1 = this[_MaterialTimePickerComponent_1_5].timeChange.listen(this.eventHandler1(DateTimeL(), DateTimeL(), dart.bind(this, _handle_timeChange_1_0)));
      this.init(C1 || CT.C1, JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
        return this[_MaterialDatepickerComponent_0_5];
      }
      if (token === dart.wrapType(HasDisabledL()) && 1 === nodeIndex) {
        return this[_MaterialTimePickerComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let currVal_0 = _ctx.outputDateFormat;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialDatepickerComponent_0_5].outputFormat = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.maxDate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialDatepickerComponent_0_5].maxDate = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.minDate;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialDatepickerComponent_0_5].minDate = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.required;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialDatepickerComponent_0_5].required = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.date;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialDatepickerComponent_0_5].date = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialDatepickerComponent_0_5].disabled = currVal_5;
        this[_expr_5] = currVal_5;
      }
      changed = false;
      let currVal_6 = _ctx.outputTimeFormat;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialTimePickerComponent_1_5].outputFormat = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.time;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_MaterialTimePickerComponent_1_5].time = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MaterialTimePickerComponent_1_5].disabled = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.required;
      if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_MaterialTimePickerComponent_1_5].required = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = _ctx.utc;
      if (dart.test(app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_MaterialTimePickerComponent_1_5].utc = currVal_10;
        changed = true;
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = _ctx.maxTime;
      if (dart.test(app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_MaterialTimePickerComponent_1_5].maxTime = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.minTime;
      if (dart.test(app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_MaterialTimePickerComponent_1_5].minTime = currVal_12;
        changed = true;
        this[_expr_12] = currVal_12;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTimePickerComponent_1_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialDatepickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_compView_1].destroyInternalState();
      this[_MaterialTimePickerComponent_1_5].ngOnDestroy();
    }
    [_handle_dateChange_0_0]($36event) {
      let _ctx = this.ctx;
      _ctx.date = DateL().as($36event);
    }
    [_handle_timeChange_1_0]($36event) {
      let _ctx = this.ctx;
      _ctx.time = DateTimeL().as($36event);
    }
    initComponentStyles() {
      let styles = material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._componentStyles;
      if (styles == null) {
        material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._componentStyles = styles = material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_date_time_picker$46template.styles$MaterialDateTimePickerComponent, material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDatepickerComponent_0_5] = null;
    this[_compView_1] = null;
    this[_MaterialTimePickerComponent_1_5] = null;
    this[_expr_0] = null;
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
    material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-date-time-picker"));
    this.rootEl.tabIndex = -1;
  }).prototype = material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.prototype;
  dart.addTypeTests(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0);
  dart.addTypeCaches(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0);
  dart.setMethodSignature(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0, () => ({
    __proto__: dart.getMethods(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_dateChange_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_timeChange_1_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0, L0);
  dart.setFieldSignature(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0, () => ({
    __proto__: dart.getFields(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_datepicker$46template.ViewMaterialDatepickerComponent0)),
    [_MaterialDatepickerComponent_0_5]: dart.fieldType(dart.legacy(material_datepicker.MaterialDatepickerComponent)),
    [_compView_1]: dart.fieldType(dart.legacy(material_time_picker$46template.ViewMaterialTimePickerComponent0)),
    [_MaterialTimePickerComponent_1_5]: dart.fieldType(dart.legacy(material_time_picker.MaterialTimePickerComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_9]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_10]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0, {
    /*material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _MaterialDateTimePickerComponent_0_5 = dart.privateName(material_date_time_picker$46template, "_MaterialDateTimePickerComponent_0_5");
  material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0 = class _ViewMaterialDateTimePickerComponentHost0 extends app_view.AppView$(dart.legacy(material_date_time_picker.MaterialDateTimePickerComponent)) {
    build() {
      this[_compView_0] = new material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialDateTimePickerComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialDateTimePickerComponentL(), dart.wrapType(MaterialDateTimePickerComponentL()), dart.fn(() => new material_date_time_picker.MaterialDateTimePickerComponent.new(ClockL().as(this.injectorGet(C0 || CT.C0, this.viewData.parentIndex))), VoidToMaterialDateTimePickerComponentL())) : new material_date_time_picker.MaterialDateTimePickerComponent.new(ClockL().as(this.injectorGet(C0 || CT.C0, this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialDateTimePickerComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialDateTimePickerComponentL()).new(0, this, this.rootEl, this[_MaterialDateTimePickerComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
        return this[_MaterialDateTimePickerComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDateTimePickerComponent_0_5] = null;
    material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.prototype;
  dart.addTypeTests(material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0);
  dart.addTypeCaches(material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0);
  dart.setMethodSignature(material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0, () => ({
    __proto__: dart.getMethods(material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0, L0);
  dart.setFieldSignature(material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0, () => ({
    __proto__: dart.getFields(material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_date_time_picker$46template.ViewMaterialDateTimePickerComponent0)),
    [_MaterialDateTimePickerComponent_0_5]: dart.fieldType(dart.legacy(material_date_time_picker.MaterialDateTimePickerComponent))
  }));
  material_date_time_picker$46template.viewFactory_MaterialDateTimePickerComponentHost0 = function viewFactory_MaterialDateTimePickerComponentHost0(parentView, parentIndex) {
    return new material_date_time_picker$46template._ViewMaterialDateTimePickerComponentHost0.new(parentView, parentIndex);
  };
  material_date_time_picker$46template.initReflector = function initReflector() {
    if (dart.test(material_date_time_picker$46template._visited)) {
      return;
    }
    material_date_time_picker$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialDateTimePickerComponentL()), material_date_time_picker$46template.MaterialDateTimePickerComponentNgFactory);
    angular$46template.initReflector();
    meta$46template.initReflector();
    has_disabled$46template.initReflector();
    material_datepicker$46template.initReflector();
    material_time_picker$46template.initReflector();
    module$46template.initReflector();
    material_input$46template.initReflector();
    date$46template.initReflector();
  };
  dart.copyProperties(material_date_time_picker$46template, {
    get MaterialDateTimePickerComponentNgFactory() {
      return material_date_time_picker$46template._MaterialDateTimePickerComponentNgFactory;
    }
  });
  var C3;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C4;
  dart.defineLazy(material_date_time_picker$46template, {
    /*material_date_time_picker$46template.styles$MaterialDateTimePickerComponent*/get styles$MaterialDateTimePickerComponent() {
      return [material_date_time_picker$46scss$46css$46shim.styles];
    },
    /*material_date_time_picker$46template._MaterialDateTimePickerComponentNgFactory*/get _MaterialDateTimePickerComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*material_date_time_picker$46template.styles$MaterialDateTimePickerComponentHost*/get styles$MaterialDateTimePickerComponentHost() {
      return C4 || CT.C4;
    },
    /*material_date_time_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/material_date_time_picker.template", {
    "package:angular_components/material_datepicker/material_date_time_picker.template.dart": material_date_time_picker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_date_time_picker.template.dart"],"names":[],"mappings":"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","file":"material_date_time_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_date_time_picker$46template: material_date_time_picker$46template
  };
}));

//# sourceMappingURL=material_date_time_picker.template.ddc.js.map
