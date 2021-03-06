// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'date_range_input.dart';
export 'date_range_input.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_datepicker/calendar.template.dart' as _ref1;
import 'package:angular_components/material_datepicker/date_input.template.dart' as _ref2;
import 'package:angular_components/material_input/material_input.template.dart' as _ref3;
import 'package:angular_components/model/date/date.template.dart' as _ref4;
import 'package:angular_components/model/observable/observable.template.dart' as _ref5;
import 'package:angular_components/material_datepicker/date_range_input.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'date_range_input.dart' as import2;
import '../material_input/material_input.template.dart' as import3;
import '../material_input/deferred_validator.dart' as import4;
import '../material_input/material_input.dart' as import5;
import 'date_input.dart' as import6;
import '../material_input/material_input_default_value_accessor.dart' as import7;
import 'dart:html' as import8;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import9;
import 'package:angular/src/core/linker/view_type.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/interpolate.dart' as import14;
import 'package:angular/src/runtime/dom_helpers.dart' as import15;
import 'package:angular/src/di/errors.dart' as import16;
import 'package:angular/src/core/di/opaque_token.dart' as import17;
import 'package:quiver/src/time/clock.dart' as import18;
import '../material_input/base_material_input.dart' as import19;
import '../utils/angular/reference/reference.dart' as import20;
import '../focus/focus_interface.dart' as import21;
import '../interfaces/has_disabled.dart' as import22;
import 'package:angular/src/core/linker/app_view_utils.dart' as import23;

final List<dynamic> styles$DateRangeInputComponent = [import0.styles];

class ViewDateRangeInputComponent0 extends AppView<import2.DateRangeInputComponent> {
  import3.ViewMaterialInputComponent0 _compView_0;
  import4.DeferredValidator _DeferredValidator_0_5;
  import5.MaterialInputComponent _MaterialInputComponent_0_6;
  import6.DateInputDirective _DateInputDirective_0_7;
  import7.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_0_9;
  List<dynamic> __NgValidators_0_10;
  import3.ViewMaterialInputComponent0 _compView_3;
  import4.DeferredValidator _DeferredValidator_3_5;
  import5.MaterialInputComponent _MaterialInputComponent_3_6;
  import6.DateInputDirective _DateInputDirective_3_7;
  import7.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_3_9;
  List<dynamic> __NgValidators_3_10;
  bool _expr_0;
  bool _expr_2;
  bool _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  bool _expr_8;
  bool _expr_10;
  bool _expr_11;
  var _expr_12;
  var _expr_13;
  var _expr_14;
  var _expr_15;
  import8.Element _el_0;
  import8.Element _el_3;
  static import9.ComponentStyles _componentStyles;
  ViewDateRangeInputComponent0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import8.document.createElement('date-range-input');
  }
  List<dynamic> get _NgValidators_0_10 {
    if ((__NgValidators_0_10 == null)) {
      (__NgValidators_0_10 = [_DeferredValidator_0_5]);
    }
    return __NgValidators_0_10;
  }

  List<dynamic> get _NgValidators_3_10 {
    if ((__NgValidators_3_10 == null)) {
      (__NgValidators_3_10 = [_DeferredValidator_3_5]);
    }
    return __NgValidators_3_10;
  }

  static String get _debugComponentUrl {
    return (import12.isDevMode ? 'asset:angular_components/lib/material_datepicker/date_range_input.dart' : null);
  }

  @override
  ComponentRef<import2.DateRangeInputComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import3.ViewMaterialInputComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    this.updateChildClassNonHtml(_el_0, import14.interpolateString2('', 'start date-input', ' ', import5.MaterialInputComponent.hostClass, ''));
    import15.setAttribute(_el_0, 'dateParsing', '');
    addShimC(_el_0);
    _DeferredValidator_0_5 = import4.DeferredValidator();
    _MaterialInputComponent_0_6 = import5.MaterialInputComponent(null, null, null, null, _compView_0, _DeferredValidator_0_5);
    _DateInputDirective_0_7 = (import12.isDevMode
        ? import16.debugInjectorWrap(import6.DateInputDirective, () {
            return import6.DateInputDirective(parentView.injectorGetOptional(const import17.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex), parentView.injectorGet(import18.Clock, viewData.parentIndex), _MaterialInputComponent_0_6);
          })
        : import6.DateInputDirective(parentView.injectorGetOptional(const import17.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex), parentView.injectorGet(import18.Clock, viewData.parentIndex), _MaterialInputComponent_0_6));
    _MaterialInputDefaultValueAccessor_0_9 = import7.MaterialInputDefaultValueAccessor(_MaterialInputComponent_0_6, null);
    _compView_0.create(_MaterialInputComponent_0_6, [const [], const []]);
    final doc = import8.document;
    final _el_1 = import15.appendSpan(doc, parentRenderNode);
    this.updateChildClass(_el_1, 'separator');
    addShimE(_el_1);
    final _text_2 = import15.appendText(_el_1, '???');
    _compView_3 = import3.ViewMaterialInputComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    parentRenderNode.append(_el_3);
    this.updateChildClassNonHtml(_el_3, import14.interpolateString2('', 'end date-input', ' ', import5.MaterialInputComponent.hostClass, ''));
    import15.setAttribute(_el_3, 'dateParsing', '');
    addShimC(_el_3);
    _DeferredValidator_3_5 = import4.DeferredValidator();
    _MaterialInputComponent_3_6 = import5.MaterialInputComponent(null, null, null, null, _compView_3, _DeferredValidator_3_5);
    _DateInputDirective_3_7 = (import12.isDevMode
        ? import16.debugInjectorWrap(import6.DateInputDirective, () {
            return import6.DateInputDirective(parentView.injectorGetOptional(const import17.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex), parentView.injectorGet(import18.Clock, viewData.parentIndex), _MaterialInputComponent_3_6);
          })
        : import6.DateInputDirective(parentView.injectorGetOptional(const import17.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex), parentView.injectorGet(import18.Clock, viewData.parentIndex), _MaterialInputComponent_3_6));
    _MaterialInputDefaultValueAccessor_3_9 = import7.MaterialInputDefaultValueAccessor(_MaterialInputComponent_3_6, null);
    _compView_3.create(_MaterialInputComponent_3_6, [const [], const []]);
    final subscription_0 = _MaterialInputComponent_0_6.onFocus.listen(eventHandler0(_ctx.onStartFocused));
    final subscription_1 = _DateInputDirective_0_7.dateChange.listen(eventHandler1(_handle_dateChange_0_1));
    final subscription_2 = _MaterialInputComponent_3_6.onFocus.listen(eventHandler0(_ctx.onEndFocused));
    final subscription_3 = _DateInputDirective_3_7.dateChange.listen(eventHandler1(_handle_dateChange_3_1));
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import4.DeferredValidator)) {
        return _DeferredValidator_0_5;
      }
      if (((((identical(token, import5.MaterialInputComponent) || identical(token, import19.BaseMaterialInput)) || identical(token, import20.ReferenceDirective)) || identical(token, import21.Focusable)) || identical(token, import22.HasDisabled))) {
        return _MaterialInputComponent_0_6;
      }
      if (identical(token, const import17.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_0_10;
      }
    }
    if ((3 == nodeIndex)) {
      if (identical(token, import4.DeferredValidator)) {
        return _DeferredValidator_3_5;
      }
      if (((((identical(token, import5.MaterialInputComponent) || identical(token, import19.BaseMaterialInput)) || identical(token, import20.ReferenceDirective)) || identical(token, import21.Focusable)) || identical(token, import22.HasDisabled))) {
        return _MaterialInputComponent_3_6;
      }
      if (identical(token, const import17.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_3_10;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      if (!identical(_ctx.startDateMsg, null)) {
        _MaterialInputComponent_0_6.label = _ctx.startDateMsg;
        changed = true;
      }
    }
    final currVal_2 = _ctx.disabled;
    if (import23.checkBinding(_expr_2, currVal_2)) {
      _MaterialInputComponent_0_6.disabled = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.isDateInputRequired;
    if (import23.checkBinding(_expr_3, currVal_3)) {
      _MaterialInputComponent_0_6.required = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_4 = _ctx.startDateFormat;
    if (import23.checkBinding(_expr_4, currVal_4)) {
      _DateInputDirective_0_7.dateFormat = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.startMaxDate;
    if (import23.checkBinding(_expr_5, currVal_5)) {
      _DateInputDirective_0_7.maxDate = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.minDate;
    if (import23.checkBinding(_expr_6, currVal_6)) {
      _DateInputDirective_0_7.minDate = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.start;
    if (import23.checkBinding(_expr_7, currVal_7)) {
      _DateInputDirective_0_7.date = currVal_7;
      _expr_7 = currVal_7;
    }
    changed = false;
    if (firstCheck) {
      if (!identical(_ctx.endDateMsg, null)) {
        _MaterialInputComponent_3_6.label = _ctx.endDateMsg;
        changed = true;
      }
    }
    final currVal_10 = _ctx.disabled;
    if (import23.checkBinding(_expr_10, currVal_10)) {
      _MaterialInputComponent_3_6.disabled = currVal_10;
      changed = true;
      _expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.isDateInputRequired;
    if (import23.checkBinding(_expr_11, currVal_11)) {
      _MaterialInputComponent_3_6.required = currVal_11;
      changed = true;
      _expr_11 = currVal_11;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    if (firstCheck) {
      (_DateInputDirective_3_7.rangeEnd = true);
    }
    final currVal_12 = _ctx.endDateFormat;
    if (import23.checkBinding(_expr_12, currVal_12)) {
      _DateInputDirective_3_7.dateFormat = currVal_12;
      _expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.maxDate;
    if (import23.checkBinding(_expr_13, currVal_13)) {
      _DateInputDirective_3_7.maxDate = currVal_13;
      _expr_13 = currVal_13;
    }
    final currVal_14 = _ctx.endMinDate;
    if (import23.checkBinding(_expr_14, currVal_14)) {
      _DateInputDirective_3_7.minDate = currVal_14;
      _expr_14 = currVal_14;
    }
    final currVal_15 = _ctx.end;
    if (import23.checkBinding(_expr_15, currVal_15)) {
      _DateInputDirective_3_7.date = currVal_15;
      _expr_15 = currVal_15;
    }
    final currVal_0 = _ctx.isStartActive;
    if (import23.checkBinding(_expr_0, currVal_0)) {
      import15.updateClassBindingNonHtml(_el_0, 'active', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_8 = _ctx.isEndActive;
    if (import23.checkBinding(_expr_8, currVal_8)) {
      import15.updateClassBindingNonHtml(_el_3, 'active', currVal_8);
      _expr_8 = currVal_8;
    }
    _compView_0.detectChanges();
    _compView_3.detectChanges();
    if ((!import23.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_0_6.ngAfterViewInit();
        _MaterialInputComponent_3_6.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _compView_3.destroyInternalState();
    _MaterialInputComponent_0_6.ngOnDestroy();
    _DateInputDirective_0_7.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_0_9.ngOnDestroy();
    _MaterialInputComponent_3_6.ngOnDestroy();
    _DateInputDirective_3_7.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_3_9.ngOnDestroy();
  }

  void _handle_dateChange_0_1($event) {
    final _ctx = ctx;
    _ctx.start = $event;
  }

  void _handle_dateChange_3_1($event) {
    final _ctx = ctx;
    _ctx.end = $event;
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import9.ComponentStyles.scoped(styles$DateRangeInputComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.DateRangeInputComponent> _DateRangeInputComponentNgFactory = const ComponentFactory('date-range-input', viewFactory_DateRangeInputComponentHost0);
ComponentFactory<import2.DateRangeInputComponent> get DateRangeInputComponentNgFactory {
  return _DateRangeInputComponentNgFactory;
}

final List<dynamic> styles$DateRangeInputComponentHost = const [];

class _ViewDateRangeInputComponentHost0 extends AppView<import2.DateRangeInputComponent> {
  ViewDateRangeInputComponent0 _compView_0;
  import2.DateRangeInputComponent _DateRangeInputComponent_0_5;
  _ViewDateRangeInputComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.DateRangeInputComponent> build() {
    _compView_0 = ViewDateRangeInputComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DateRangeInputComponent_0_5 = import2.DateRangeInputComponent(_compView_0);
    _compView_0.create(_DateRangeInputComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _DateRangeInputComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (((!import23.AppViewUtils.throwOnChanges) && firstCheck)) {
      _DateRangeInputComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _DateRangeInputComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.DateRangeInputComponent> viewFactory_DateRangeInputComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeInputComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DateRangeInputComponent, DateRangeInputComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
