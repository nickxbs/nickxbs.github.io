// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_temporary_drawer.dart';
export 'material_temporary_drawer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_drawer_base.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref2;
import 'package:angular_components/app_layout/material_temporary_drawer.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_temporary_drawer.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import '../content/deferred_content_aware.dart' as import11;

final List<dynamic> styles$MaterialTemporaryDrawerComponent = [import0.styles];

class ViewMaterialTemporaryDrawerComponent0 extends AppView<import2.MaterialTemporaryDrawerComponent> {
  bool _expr_0;
  bool _expr_1;
  static import3.ComponentStyles _componentStyles;
  ViewMaterialTemporaryDrawerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import6.document.createElement('material-drawer');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:angular_components/lib/app_layout/material_temporary_drawer.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialTemporaryDrawerComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import6.document;
    final _el_0 = import9.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'drawer-content');
    addShimC(_el_0);
    project(_el_0, 0);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init0();
    _rootEl.addEventListener('click', eventHandler0(_ctx.toggle));
  }

  void _handle_click_0_0($event) {
    $event.stopPropagation();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    final currVal_0 = _ctx.hostMatDrawerCollapsed;
    if (import10.checkBinding(_expr_0, currVal_0)) {
      import9.updateClassBindingNonHtml(rootEl, 'mat-drawer-collapsed', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.hostMatDrawerExpanded;
    if (import10.checkBinding(_expr_1, currVal_1)) {
      import9.updateClassBindingNonHtml(rootEl, 'mat-drawer-expanded', currVal_1);
      _expr_1 = currVal_1;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import3.ComponentStyles.scoped(styles$MaterialTemporaryDrawerComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialTemporaryDrawerComponent> _MaterialTemporaryDrawerComponentNgFactory = const ComponentFactory('material-drawer[temporary]', viewFactory_MaterialTemporaryDrawerComponentHost0);
ComponentFactory<import2.MaterialTemporaryDrawerComponent> get MaterialTemporaryDrawerComponentNgFactory {
  return _MaterialTemporaryDrawerComponentNgFactory;
}

final List<dynamic> styles$MaterialTemporaryDrawerComponentHost = const [];

class _ViewMaterialTemporaryDrawerComponentHost0 extends AppView<import2.MaterialTemporaryDrawerComponent> {
  ViewMaterialTemporaryDrawerComponent0 _compView_0;
  import2.MaterialTemporaryDrawerComponent _MaterialTemporaryDrawerComponent_0_5;
  _ViewMaterialTemporaryDrawerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialTemporaryDrawerComponent> build() {
    _compView_0 = ViewMaterialTemporaryDrawerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTemporaryDrawerComponent_0_5 = import2.MaterialTemporaryDrawerComponent();
    _compView_0.create(_MaterialTemporaryDrawerComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialTemporaryDrawerComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import2.MaterialTemporaryDrawerComponent) || identical(token, import11.DeferredContentAware)) && (0 == nodeIndex))) {
      return _MaterialTemporaryDrawerComponent_0_5;
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
    if (((!import10.AppViewUtils.throwOnChanges) && firstCheck)) {
      _MaterialTemporaryDrawerComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.MaterialTemporaryDrawerComponent> viewFactory_MaterialTemporaryDrawerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTemporaryDrawerComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTemporaryDrawerComponent, MaterialTemporaryDrawerComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
