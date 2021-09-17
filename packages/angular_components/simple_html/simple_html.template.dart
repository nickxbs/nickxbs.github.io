// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'simple_html.dart';
export 'simple_html.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref1;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref2;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref3;
import 'package:angular_components/simple_html/simple_html.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'simple_html.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/di/errors.dart' as import10;
import '../utils/browser/dom_service/dom_service.dart' as import11;
import 'package:angular/src/core/di/opaque_token.dart' as import12;
import 'dart:core';

final List<dynamic> styles$SimpleHtmlComponent = [import0.styles];

class ViewSimpleHtmlComponent0 extends AppView<import2.SimpleHtmlComponent> {
  static import3.ComponentStyles _componentStyles;
  ViewSimpleHtmlComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import6.document.createElement('simple-html');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:angular_components/lib/simple_html/simple_html.dart' : null);
  }

  @override
  ComponentRef<import2.SimpleHtmlComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import6.document;
    final _el_0 = import9.appendSpan(doc, parentRenderNode);
    addShimE(_el_0);
    init0();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import3.ComponentStyles.scoped(styles$SimpleHtmlComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.SimpleHtmlComponent> _SimpleHtmlComponentNgFactory = const ComponentFactory('simple-html', viewFactory_SimpleHtmlComponentHost0);
ComponentFactory<import2.SimpleHtmlComponent> get SimpleHtmlComponentNgFactory {
  return _SimpleHtmlComponentNgFactory;
}

final List<dynamic> styles$SimpleHtmlComponentHost = const [];

class _ViewSimpleHtmlComponentHost0 extends AppView<import2.SimpleHtmlComponent> {
  ViewSimpleHtmlComponent0 _compView_0;
  import2.SimpleHtmlComponent _SimpleHtmlComponent_0_5;
  _ViewSimpleHtmlComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.SimpleHtmlComponent> build() {
    _compView_0 = ViewSimpleHtmlComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _SimpleHtmlComponent_0_5 = (import7.isDevMode
        ? import10.debugInjectorWrap(import2.SimpleHtmlComponent, () {
            return import2.SimpleHtmlComponent(this.injectorGet(import11.DomService, viewData.parentIndex), rootEl, this.injectorGetOptional(const import12.OpaqueToken<List<Uri>>('simpleHtmlUriWhitelist'), viewData.parentIndex), null);
          })
        : import2.SimpleHtmlComponent(this.injectorGet(import11.DomService, viewData.parentIndex), rootEl, this.injectorGetOptional(const import12.OpaqueToken<List<Uri>>('simpleHtmlUriWhitelist'), viewData.parentIndex), null));
    _compView_0.create(_SimpleHtmlComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _SimpleHtmlComponent_0_5);
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
    _SimpleHtmlComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.SimpleHtmlComponent> viewFactory_SimpleHtmlComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSimpleHtmlComponentHost0(parentView, parentIndex);
}

final List<dynamic> styles$SimpleHtmlBlockComponent = [import0.styles];

class ViewSimpleHtmlBlockComponent0 extends AppView<import2.SimpleHtmlBlockComponent> {
  static import3.ComponentStyles _componentStyles;
  ViewSimpleHtmlBlockComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import6.document.createElement('simple-html-block');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:angular_components/lib/simple_html/simple_html.dart' : null);
  }

  @override
  ComponentRef<import2.SimpleHtmlBlockComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import6.document;
    final _el_0 = import9.appendDiv(doc, parentRenderNode);
    addShimC(_el_0);
    init0();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import3.ComponentStyles.scoped(styles$SimpleHtmlBlockComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.SimpleHtmlBlockComponent> _SimpleHtmlBlockComponentNgFactory = const ComponentFactory('simple-html-block', viewFactory_SimpleHtmlBlockComponentHost0);
ComponentFactory<import2.SimpleHtmlBlockComponent> get SimpleHtmlBlockComponentNgFactory {
  return _SimpleHtmlBlockComponentNgFactory;
}

final List<dynamic> styles$SimpleHtmlBlockComponentHost = const [];

class _ViewSimpleHtmlBlockComponentHost0 extends AppView<import2.SimpleHtmlBlockComponent> {
  ViewSimpleHtmlBlockComponent0 _compView_0;
  import2.SimpleHtmlBlockComponent _SimpleHtmlBlockComponent_0_5;
  _ViewSimpleHtmlBlockComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.SimpleHtmlBlockComponent> build() {
    _compView_0 = ViewSimpleHtmlBlockComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _SimpleHtmlBlockComponent_0_5 = (import7.isDevMode
        ? import10.debugInjectorWrap(import2.SimpleHtmlBlockComponent, () {
            return import2.SimpleHtmlBlockComponent(this.injectorGet(import11.DomService, viewData.parentIndex), rootEl, this.injectorGetOptional(const import12.OpaqueToken<List<Uri>>('simpleHtmlUriWhitelist'), viewData.parentIndex), null);
          })
        : import2.SimpleHtmlBlockComponent(this.injectorGet(import11.DomService, viewData.parentIndex), rootEl, this.injectorGetOptional(const import12.OpaqueToken<List<Uri>>('simpleHtmlUriWhitelist'), viewData.parentIndex), null));
    _compView_0.create(_SimpleHtmlBlockComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _SimpleHtmlBlockComponent_0_5);
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
    _SimpleHtmlBlockComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.SimpleHtmlBlockComponent> viewFactory_SimpleHtmlBlockComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSimpleHtmlBlockComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(SimpleHtmlComponent, SimpleHtmlComponentNgFactory);
  _ngRef.registerComponent(SimpleHtmlBlockComponent, SimpleHtmlBlockComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
