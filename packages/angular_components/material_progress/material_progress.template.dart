// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_progress.dart';
export 'material_progress.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/browser/feature_detector/feature_detector.template.dart' as _ref1;
import 'package:angular_components/material_progress/material_progress.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_progress.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/src/runtime/interpolate.dart' as import11;

final List<dynamic> styles$MaterialProgressComponent = [import0.styles];

class ViewMaterialProgressComponent0 extends AppView<import2.MaterialProgressComponent> {
  var _expr_0;
  var _expr_1;
  bool _expr_2;
  bool _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  import3.DivElement _el_0;
  import3.DivElement _el_1;
  import3.DivElement _el_2;
  static import4.ComponentStyles _componentStyles;
  ViewMaterialProgressComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import3.document.createElement('material-progress');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:angular_components/lib/material_progress/material_progress.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialProgressComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import3.document;
    _el_0 = import9.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'progress-container');
    import9.setAttribute(_el_0, 'role', 'progressbar');
    addShimC(_el_0);
    _el_1 = import9.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'secondary-progress');
    addShimC(_el_1);
    _el_2 = import9.appendDiv(doc, _el_0);
    this.updateChildClass(_el_2, 'active-progress');
    addShimC(_el_2);
    _ctx.primary = _el_2;
    _ctx.secondary = _el_1;
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.ariaValue;
    if (import10.checkBinding(_expr_0, currVal_0)) {
      import9.updateAttribute(_el_0, 'aria-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.ariaValueNow;
    if (import10.checkBinding(_expr_1, currVal_1)) {
      import9.updateAttribute(_el_0, 'aria-valuenow', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.indeterminate;
    if (import10.checkBinding(_expr_2, currVal_2)) {
      import9.updateClassBinding(_el_0, 'indeterminate', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.useFallbackAnimation;
    if (import10.checkBinding(_expr_3, currVal_3)) {
      import9.updateClassBinding(_el_0, 'fallback', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = import11.interpolate0(_ctx.min);
    if (import10.checkBinding(_expr_4, currVal_4)) {
      import9.setAttribute(_el_0, 'aria-valuemin', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = import11.interpolate0(_ctx.max);
    if (import10.checkBinding(_expr_5, currVal_5)) {
      import9.setAttribute(_el_0, 'aria-valuemax', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.activeAndSecondaryProgressValue;
    if (import10.checkBinding(_expr_6, currVal_6)) {
      import9.updateAttribute(_el_1, 'aria-label', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.secondaryTransform;
    if (import10.checkBinding(_expr_7, currVal_7)) {
      _el_1.style.setProperty('transform', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.primaryTransform;
    if (import10.checkBinding(_expr_8, currVal_8)) {
      _el_2.style.setProperty('transform', currVal_8);
      _expr_8 = currVal_8;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import4.ComponentStyles.scoped(styles$MaterialProgressComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialProgressComponent> _MaterialProgressComponentNgFactory = const ComponentFactory('material-progress', viewFactory_MaterialProgressComponentHost0);
ComponentFactory<import2.MaterialProgressComponent> get MaterialProgressComponentNgFactory {
  return _MaterialProgressComponentNgFactory;
}

final List<dynamic> styles$MaterialProgressComponentHost = const [];

class _ViewMaterialProgressComponentHost0 extends AppView<import2.MaterialProgressComponent> {
  ViewMaterialProgressComponent0 _compView_0;
  import2.MaterialProgressComponent _MaterialProgressComponent_0_5;
  _ViewMaterialProgressComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialProgressComponent> build() {
    _compView_0 = ViewMaterialProgressComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialProgressComponent_0_5 = import2.MaterialProgressComponent(null, _compView_0, rootEl);
    _compView_0.create(_MaterialProgressComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialProgressComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
    if ((!import10.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialProgressComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialProgressComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialProgressComponent> viewFactory_MaterialProgressComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialProgressComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialProgressComponent, MaterialProgressComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
