// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_chips.dart';
export 'material_chips.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_chips/material_chip.template.dart' as _ref1;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref2;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref3;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref4;
import 'package:angular_components/material_chips/material_chips.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_chips.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'material_chip.template.dart' as import14;
import 'material_chip.dart' as import15;
import '../model/ui/has_renderer.dart' as import16;

final List<dynamic> styles$MaterialChipsComponent = [import0.styles];

class ViewMaterialChipsComponent0<T> extends AppView<import2.MaterialChipsComponent<T>> {
  ViewContainer _appEl_0;
  import4.NgFor _NgFor_0_9;
  var _expr_0;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialChipsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import8.document.createElement('material-chips');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_chips/material_chips.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialChipsComponent<T>> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialChipsComponent1<T>(parentView, parentIndex);
    });
    _NgFor_0_9 = import4.NgFor(_appEl_0, _TemplateRef_0_8);
    project(parentRenderNode, 0);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.selectedItems;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import13.AppViewUtils.throwOnChanges)) {
      _NgFor_0_9.ngDoCheck();
    }
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$MaterialChipsComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialChipsComponent> _MaterialChipsComponentNgFactory = const ComponentFactory('material-chips', viewFactory_MaterialChipsComponentHost0);
ComponentFactory<import2.MaterialChipsComponent> get MaterialChipsComponentNgFactory {
  return _MaterialChipsComponentNgFactory;
}

class _ViewMaterialChipsComponent1<T> extends AppView<import2.MaterialChipsComponent<T>> {
  import14.ViewMaterialChipComponent0<T> _compView_0;
  import15.MaterialChipComponent<T> _MaterialChipComponent_0_5;
  var _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  _ViewMaterialChipsComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialChipsComponent<T>> build() {
    _compView_0 = import14.ViewMaterialChipComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialChipComponent_0_5 = import15.MaterialChipComponent(_el_0);
    _compView_0.create(_MaterialChipComponent_0_5, [const [], const []]);
    init1(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.HasRenderer) && (0 == nodeIndex))) {
      return _MaterialChipComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    final local_chip = import9.unsafeCast<T>(locals['\$implicit']);
    changed = false;
    final currVal_0 = _ctx.selectionModel;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _MaterialChipComponent_0_5.selectionModel = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.removable;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _MaterialChipComponent_0_5.removable = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.itemRenderer;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _MaterialChipComponent_0_5.itemRenderer = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_chip;
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _MaterialChipComponent_0_5.value = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<void> viewFactory_MaterialChipsComponent1<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialChipsComponent1<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialChipsComponentHost = const [];

class _ViewMaterialChipsComponentHost0<T> extends AppView<import2.MaterialChipsComponent<T>> {
  ViewMaterialChipsComponent0<T> _compView_0;
  import2.MaterialChipsComponent<T> _MaterialChipsComponent_0_5;
  _ViewMaterialChipsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialChipsComponent<T>> build() {
    _compView_0 = ViewMaterialChipsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialChipsComponent_0_5 = import2.MaterialChipsComponent(_compView_0);
    _compView_0.create(_MaterialChipsComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialChipsComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.HasRenderer) && (0 == nodeIndex))) {
      return _MaterialChipsComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialChipsComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialChipsComponent<T>> viewFactory_MaterialChipsComponentHost0<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialChipsComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialChipsComponent, MaterialChipsComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
