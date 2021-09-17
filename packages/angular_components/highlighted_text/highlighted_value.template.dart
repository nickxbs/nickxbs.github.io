// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'highlighted_value.dart';
export 'highlighted_value.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/highlighted_text/highlighted_text.template.dart' as _ref1;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref2;
import 'package:angular_components/model/ui/highlight_provider.template.dart' as _ref3;
import 'package:angular_components/model/ui/highlighted_text_model.template.dart' as _ref4;
import 'package:angular_components/highlighted_text/highlighted_text.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'highlighted_value.dart' as import2;
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
import 'package:angular/src/runtime/text_binding.dart' as import14;
import '../model/ui/highlighted_text_model.dart' as import15;
import 'package:angular/src/runtime/interpolate.dart' as import16;
import 'package:angular/src/di/errors.dart' as import17;
import '../model/ui/highlight_provider.dart' as import18;

final List<dynamic> styles$HighlightedValueComponent = [import0.styles];

class ViewHighlightedValueComponent0 extends AppView<import2.HighlightedValueComponent> {
  ViewContainer _appEl_1;
  import4.NgFor _NgFor_1_9;
  var _expr_0;
  static import5.ComponentStyles _componentStyles;
  ViewHighlightedValueComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('highlight-value');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/highlighted_text/highlighted_value.dart' : null);
  }

  @override
  ComponentRef<import2.HighlightedValueComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import11.appendText(parentRenderNode, '\n');
    final _anchor_1 = import11.appendAnchor(parentRenderNode);
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_HighlightedValueComponent1);
    _NgFor_1_9 = import4.NgFor(_appEl_1, _TemplateRef_1_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.segments;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _NgFor_1_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import13.AppViewUtils.throwOnChanges)) {
      _NgFor_1_9.ngDoCheck();
    }
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$HighlightedValueComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.HighlightedValueComponent> _HighlightedValueComponentNgFactory = const ComponentFactory('highlight-value', viewFactory_HighlightedValueComponentHost0);
ComponentFactory<import2.HighlightedValueComponent> get HighlightedValueComponentNgFactory {
  return _HighlightedValueComponentNgFactory;
}

class _ViewHighlightedValueComponent1 extends AppView<import2.HighlightedValueComponent> {
  final import14.TextBinding _textBinding_1 = import14.TextBinding();
  bool _expr_0;
  import8.Element _el_0;
  _ViewHighlightedValueComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.HighlightedValueComponent> build() {
    final doc = import8.document;
    _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'text-segment');
    addShimE(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_segment = import9.unsafeCast<import15.HighlightedTextSegment>(locals['\$implicit']);
    final currVal_0 = local_segment.isHighlighted;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.updateClassBinding(_el_0, 'segment-highlight', currVal_0);
      _expr_0 = currVal_0;
    }
    _textBinding_1.updateText(import16.interpolateString0(local_segment.text));
  }
}

AppView<void> viewFactory_HighlightedValueComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHighlightedValueComponent1(parentView, parentIndex);
}

final List<dynamic> styles$HighlightedValueComponentHost = const [];

class _ViewHighlightedValueComponentHost0 extends AppView<import2.HighlightedValueComponent> {
  ViewHighlightedValueComponent0 _compView_0;
  import2.HighlightedValueComponent _HighlightedValueComponent_0_5;
  _ViewHighlightedValueComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.HighlightedValueComponent> build() {
    _compView_0 = ViewHighlightedValueComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HighlightedValueComponent_0_5 = (import9.isDevMode
        ? import17.debugInjectorWrap(import2.HighlightedValueComponent, () {
            return import2.HighlightedValueComponent(this.injectorGet(import18.HighlightProvider, viewData.parentIndex));
          })
        : import2.HighlightedValueComponent(this.injectorGet(import18.HighlightProvider, viewData.parentIndex)));
    _compView_0.create(_HighlightedValueComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _HighlightedValueComponent_0_5);
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

AppView<import2.HighlightedValueComponent> viewFactory_HighlightedValueComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHighlightedValueComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HighlightedValueComponent, HighlightedValueComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
