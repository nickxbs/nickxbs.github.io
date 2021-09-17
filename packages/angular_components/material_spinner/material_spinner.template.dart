// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_spinner.dart';
export 'material_spinner.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_spinner/material_spinner.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_spinner.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import9;

final List<dynamic> styles$MaterialSpinnerComponent = [import0.styles];

class ViewMaterialSpinnerComponent0 extends AppView<import2.MaterialSpinnerComponent> {
  static import3.ComponentStyles _componentStyles;
  ViewMaterialSpinnerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import6.document.createElement('material-spinner');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:angular_components/lib/material_spinner/material_spinner.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialSpinnerComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import6.document;
    final _el_0 = import9.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'spinner');
    addShimC(_el_0);
    final _el_1 = import9.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'circle left');
    addShimC(_el_1);
    final _el_2 = import9.appendDiv(doc, _el_0);
    this.updateChildClass(_el_2, 'circle right');
    addShimC(_el_2);
    final _el_3 = import9.appendDiv(doc, _el_0);
    this.updateChildClass(_el_3, 'circle gap');
    addShimC(_el_3);
    init0();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import3.ComponentStyles.scoped(styles$MaterialSpinnerComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialSpinnerComponent> _MaterialSpinnerComponentNgFactory = const ComponentFactory('material-spinner', viewFactory_MaterialSpinnerComponentHost0);
ComponentFactory<import2.MaterialSpinnerComponent> get MaterialSpinnerComponentNgFactory {
  return _MaterialSpinnerComponentNgFactory;
}

final List<dynamic> styles$MaterialSpinnerComponentHost = const [];

class _ViewMaterialSpinnerComponentHost0 extends AppView<import2.MaterialSpinnerComponent> {
  ViewMaterialSpinnerComponent0 _compView_0;
  import2.MaterialSpinnerComponent _MaterialSpinnerComponent_0_5;
  _ViewMaterialSpinnerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialSpinnerComponent> build() {
    _compView_0 = ViewMaterialSpinnerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialSpinnerComponent_0_5 = import2.MaterialSpinnerComponent();
    _compView_0.create(_MaterialSpinnerComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialSpinnerComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.MaterialSpinnerComponent> viewFactory_MaterialSpinnerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSpinnerComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialSpinnerComponent, MaterialSpinnerComponentNgFactory);
  _ref0.initReflector();
}
