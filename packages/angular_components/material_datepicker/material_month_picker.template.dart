// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_month_picker.dart';
export 'material_month_picker.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../src/material_datepicker/calendar_listener.template.dart' as _ref0;
import '../src/material_datepicker/enum_parsing.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_components/material_datepicker/calendar.template.dart' as _ref3;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref4;
import 'package:angular_components/model/date/date.template.dart' as _ref5;
import 'package:angular_components/model/observable/observable.template.dart' as _ref6;
import 'package:angular_components/material_datepicker/material_month_picker.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_month_picker.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/di/errors.dart' as import10;
import 'package:angular/src/core/di/opaque_token.dart' as import11;
import 'package:angular/src/core/linker/app_view_utils.dart' as import12;

final List<dynamic> styles$MaterialMonthPickerComponent = [import0.styles];

class ViewMaterialMonthPickerComponent0 extends AppView<import2.MaterialMonthPickerComponent> {
  static import3.ComponentStyles _componentStyles;
  ViewMaterialMonthPickerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import6.document.createElement('material-month-picker');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:angular_components/lib/material_datepicker/material_month_picker.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialMonthPickerComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import6.document;
    final _el_0 = import9.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'scroll-container');
    addShimC(_el_0);
    final _el_1 = import9.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'calendar-container');
    addShimC(_el_1);
    _ctx.container = _el_1;
    init0();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import3.ComponentStyles.scoped(styles$MaterialMonthPickerComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialMonthPickerComponent> _MaterialMonthPickerComponentNgFactory = const ComponentFactory('material-month-picker', viewFactory_MaterialMonthPickerComponentHost0);
ComponentFactory<import2.MaterialMonthPickerComponent> get MaterialMonthPickerComponentNgFactory {
  return _MaterialMonthPickerComponentNgFactory;
}

final List<dynamic> styles$MaterialMonthPickerComponentHost = const [];

class _ViewMaterialMonthPickerComponentHost0 extends AppView<import2.MaterialMonthPickerComponent> {
  ViewMaterialMonthPickerComponent0 _compView_0;
  import2.MaterialMonthPickerComponent _MaterialMonthPickerComponent_0_5;
  _ViewMaterialMonthPickerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialMonthPickerComponent> build() {
    _compView_0 = ViewMaterialMonthPickerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialMonthPickerComponent_0_5 = (import7.isDevMode
        ? import10.debugInjectorWrap(import2.MaterialMonthPickerComponent, () {
            return import2.MaterialMonthPickerComponent(this.injectorGetOptional(const import11.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex), null);
          })
        : import2.MaterialMonthPickerComponent(this.injectorGetOptional(const import11.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex), null));
    _compView_0.create(_MaterialMonthPickerComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialMonthPickerComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (((!import12.AppViewUtils.throwOnChanges) && firstCheck)) {
      _MaterialMonthPickerComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
    if ((!import12.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialMonthPickerComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialMonthPickerComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialMonthPickerComponent> viewFactory_MaterialMonthPickerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMonthPickerComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialMonthPickerComponent, MaterialMonthPickerComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
