// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_stackable_drawer.dart';
export 'material_stackable_drawer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/app_layout/material_temporary_drawer.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref2;
import 'package:angular_components/app_layout/material_stackable_drawer.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_stackable_drawer.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/src/di/errors.dart' as import11;
import '../content/deferred_content_aware.dart' as import12;

final List<dynamic> styles$MaterialStackableDrawerComponent = [import0.styles];

class ViewMaterialStackableDrawerComponent0 extends AppView<import2.MaterialStackableDrawerComponent> {
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  import3.DivElement _el_0;
  static import4.ComponentStyles _componentStyles;
  ViewMaterialStackableDrawerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import3.document.createElement('material-drawer');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:angular_components/lib/app_layout/material_stackable_drawer.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialStackableDrawerComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import3.document;
    _el_0 = import9.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'drawer-content');
    addShimC(_el_0);
    project(_el_0, 0);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init0();
    _rootEl.addEventListener('click', eventHandler0(_ctx.toggle));
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.isExpanded;
    if (import10.checkBinding(_expr_0, currVal_0)) {
      import9.updateClassBinding(_el_0, 'drawer-content-expanded', currVal_0);
      _expr_0 = currVal_0;
    }
  }

  void _handle_click_0_0($event) {
    $event.stopPropagation();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    final currVal_1 = _ctx.hostMatDrawerCollapsed;
    if (import10.checkBinding(_expr_1, currVal_1)) {
      import9.updateClassBindingNonHtml(rootEl, 'mat-drawer-collapsed', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.hostMatDrawerExpanded;
    if (import10.checkBinding(_expr_2, currVal_2)) {
      import9.updateClassBindingNonHtml(rootEl, 'mat-drawer-expanded', currVal_2);
      _expr_2 = currVal_2;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import4.ComponentStyles.scoped(styles$MaterialStackableDrawerComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialStackableDrawerComponent> _MaterialStackableDrawerComponentNgFactory = const ComponentFactory('material-drawer[stackable]', viewFactory_MaterialStackableDrawerComponentHost0);
ComponentFactory<import2.MaterialStackableDrawerComponent> get MaterialStackableDrawerComponentNgFactory {
  return _MaterialStackableDrawerComponentNgFactory;
}

final List<dynamic> styles$MaterialStackableDrawerComponentHost = const [];

class _ViewMaterialStackableDrawerComponentHost0 extends AppView<import2.MaterialStackableDrawerComponent> {
  ViewMaterialStackableDrawerComponent0 _compView_0;
  import2.MaterialStackableDrawerComponent _MaterialStackableDrawerComponent_0_5;
  _ViewMaterialStackableDrawerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialStackableDrawerComponent> build() {
    _compView_0 = ViewMaterialStackableDrawerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialStackableDrawerComponent_0_5 = (import7.isDevMode
        ? import11.debugInjectorWrap(import2.MaterialStackableDrawerComponent, () {
            return import2.MaterialStackableDrawerComponent(this.injectorGetOptional(import2.MaterialStackableDrawerComponent, viewData.parentIndex));
          })
        : import2.MaterialStackableDrawerComponent(this.injectorGetOptional(import2.MaterialStackableDrawerComponent, viewData.parentIndex)));
    _compView_0.create(_MaterialStackableDrawerComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialStackableDrawerComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import2.MaterialStackableDrawerComponent) || identical(token, import12.DeferredContentAware)) && (0 == nodeIndex))) {
      return _MaterialStackableDrawerComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import10.AppViewUtils.throwOnChanges) && firstCheck)) {
      _MaterialStackableDrawerComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.MaterialStackableDrawerComponent> viewFactory_MaterialStackableDrawerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStackableDrawerComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialStackableDrawerComponent, MaterialStackableDrawerComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
