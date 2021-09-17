// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'dynamic_component.dart';
export 'dynamic_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref1;
import 'package:angular/src/core/linker/app_view.dart';
import 'dynamic_component.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/di/errors.dart' as import11;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as import12;

final List<dynamic> styles$DynamicComponent = const [];

class ViewDynamicComponent0 extends AppView<import1.DynamicComponent> {
  ViewContainer _appEl_0;
  TemplateRef _TemplateRef_0_8;
  static import4.ComponentStyles _componentStyles;
  ViewDynamicComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import7.document.createElement('dynamic-component');
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:angular_components/lib/dynamic_component/dynamic_component.dart' : null);
  }

  @override
  ComponentRef<import1.DynamicComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import10.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_DynamicComponent1);
    _ctx.viewContainerRef = _appEl_0;
    init0();
  }

  @override
  void detectChangesInternal() {
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
      (_componentStyles = (styles = (_componentStyles = import4.ComponentStyles.unscoped(styles$DynamicComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import1.DynamicComponent> _DynamicComponentNgFactory = const ComponentFactory('dynamic-component', viewFactory_DynamicComponentHost0);
ComponentFactory<import1.DynamicComponent> get DynamicComponentNgFactory {
  return _DynamicComponentNgFactory;
}

class _ViewDynamicComponent1 extends AppView<import1.DynamicComponent> {
  _ViewDynamicComponent1(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import1.DynamicComponent> build() {
    init0();
  }
}

AppView<void> viewFactory_DynamicComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDynamicComponent1(parentView, parentIndex);
}

final List<dynamic> styles$DynamicComponentHost = const [];

class _ViewDynamicComponentHost0 extends AppView<import1.DynamicComponent> {
  ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import1.DynamicComponent _DynamicComponent_0_8;
  _ViewDynamicComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.DynamicComponent> build() {
    _compView_0 = ViewDynamicComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _appEl_0 = ViewContainer(0, null, this, rootEl);
    _DynamicComponent_0_8 = (import8.isDevMode
        ? import11.debugInjectorWrap(import1.DynamicComponent, () {
            return import1.DynamicComponent(this.injectorGet(import12.SlowComponentLoader, viewData.parentIndex), _compView_0, _appEl_0);
          })
        : import1.DynamicComponent(this.injectorGet(import12.SlowComponentLoader, viewData.parentIndex), _compView_0, _appEl_0));
    _compView_0.create(_DynamicComponent_0_8, projectedNodes);
    init1(_appEl_0);
    return ComponentRef(0, this, rootEl, _DynamicComponent_0_8);
  }

  @override
  void detectChangesInternal() {
    _appEl_0.detectChangesInNestedViews();
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _compView_0.destroyInternalState();
    _DynamicComponent_0_8.ngOnDestroy();
  }
}

AppView<import1.DynamicComponent> viewFactory_DynamicComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDynamicComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DynamicComponent, DynamicComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
