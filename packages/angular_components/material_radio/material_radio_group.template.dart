// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_radio_group.dart';
export 'material_radio_group.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/material_radio/material_radio.template.dart' as _ref2;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref3;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref4;
import 'package:angular_forms/angular_forms.template.dart' as _ref5;
import 'package:angular_components/material_radio/material_radio_group.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_radio_group.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime/dom_helpers.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import10;
import 'package:angular/src/core/zone/ng_zone.dart' as import11;
import 'package:angular/src/core/linker/app_view_utils.dart' as import12;

final List<dynamic> styles$MaterialRadioGroupComponent = [import0.styles];

class ViewMaterialRadioGroupComponent0 extends AppView<import2.MaterialRadioGroupComponent> {
  static import3.ComponentStyles _componentStyles;
  ViewMaterialRadioGroupComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import6.document.createElement('material-radio-group');
    import7.updateAttribute(rootEl, 'role', import2.MaterialRadioGroupComponent.role);
    rootEl.tabIndex = import2.MaterialRadioGroupComponent.tabIndex;
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:angular_components/lib/material_radio/material_radio_group.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialRadioGroupComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    project(parentRenderNode, 0);
    init0();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import3.ComponentStyles.scoped(styles$MaterialRadioGroupComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialRadioGroupComponent> _MaterialRadioGroupComponentNgFactory = const ComponentFactory('material-radio-group', viewFactory_MaterialRadioGroupComponentHost0);
ComponentFactory<import2.MaterialRadioGroupComponent> get MaterialRadioGroupComponentNgFactory {
  return _MaterialRadioGroupComponentNgFactory;
}

final List<dynamic> styles$MaterialRadioGroupComponentHost = const [];

class _ViewMaterialRadioGroupComponentHost0 extends AppView<import2.MaterialRadioGroupComponent> {
  ViewMaterialRadioGroupComponent0 _compView_0;
  import2.MaterialRadioGroupComponent _MaterialRadioGroupComponent_0_5;
  _ViewMaterialRadioGroupComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialRadioGroupComponent> build() {
    _compView_0 = ViewMaterialRadioGroupComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialRadioGroupComponent_0_5 = (import8.isDevMode
        ? import10.debugInjectorWrap(import2.MaterialRadioGroupComponent, () {
            return import2.MaterialRadioGroupComponent(this.injectorGet(import11.NgZone, viewData.parentIndex), null);
          })
        : import2.MaterialRadioGroupComponent(this.injectorGet(import11.NgZone, viewData.parentIndex), null));
    _MaterialRadioGroupComponent_0_5.radioComponents = [];
    _compView_0.create(_MaterialRadioGroupComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialRadioGroupComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.MaterialRadioGroupComponent) && (0 == nodeIndex))) {
      return _MaterialRadioGroupComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import12.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialRadioGroupComponent_0_5.ngAfterContentInit();
      }
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialRadioGroupComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialRadioGroupComponent> viewFactory_MaterialRadioGroupComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialRadioGroupComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialRadioGroupComponent, MaterialRadioGroupComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
