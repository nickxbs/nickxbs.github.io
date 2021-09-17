// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_list.dart';
export 'material_list.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_list_size.template.dart' as _ref0;
import 'material_list_size.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_components/model/ui/accepts_width.template.dart' as _ref3;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref4;
import 'package:angular_components/material_list/material_list.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_list.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/src/runtime/dom_helpers.dart' as import10;

final List<dynamic> styles$MaterialListComponent = [import0.styles];

class ViewMaterialListComponent0 extends AppView<import2.MaterialListComponent> {
  var _expr_0;
  var _expr_1;
  static import3.ComponentStyles _componentStyles;
  ViewMaterialListComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import6.document.createElement('material-list');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:angular_components/lib/material_list/material_list.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialListComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    project(parentRenderNode, 0);
    init0();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    final currVal_0 = _ctx.size;
    if (import9.checkBinding(_expr_0, currVal_0)) {
      import10.updateAttribute(rootEl, 'size', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.role;
    if (import9.checkBinding(_expr_1, currVal_1)) {
      import10.updateAttribute(rootEl, 'role', currVal_1);
      _expr_1 = currVal_1;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import3.ComponentStyles.scoped(styles$MaterialListComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialListComponent> _MaterialListComponentNgFactory = const ComponentFactory('material-list', viewFactory_MaterialListComponentHost0);
ComponentFactory<import2.MaterialListComponent> get MaterialListComponentNgFactory {
  return _MaterialListComponentNgFactory;
}

final List<dynamic> styles$MaterialListComponentHost = const [];

class _ViewMaterialListComponentHost0 extends AppView<import2.MaterialListComponent> {
  ViewMaterialListComponent0 _compView_0;
  import2.MaterialListComponent _MaterialListComponent_0_5;
  _ViewMaterialListComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialListComponent> build() {
    _compView_0 = ViewMaterialListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialListComponent_0_5 = import2.MaterialListComponent();
    _compView_0.create(_MaterialListComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialListComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.MaterialListComponent> viewFactory_MaterialListComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialListComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialListComponent, MaterialListComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
