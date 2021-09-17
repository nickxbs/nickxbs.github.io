// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'reorder_list.dart';
export 'reorder_list.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/reorder_list/reorder_events.template.dart' as _ref1;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref2;
import 'package:angular_components/utils/keyboard/keyboard.template.dart' as _ref3;
import 'reorder_events.template.dart' as _ref4;
import 'package:angular_components/reorder_list/reorder_list.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'reorder_list.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/src/di/errors.dart' as import11;
import 'package:angular/src/core/zone/ng_zone.dart' as import12;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import13;

final List<dynamic> styles$ReorderListComponent = [import0.styles];

class ViewReorderListComponent0 extends AppView<import2.ReorderListComponent> {
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  import3.DivElement _el_1;
  static import4.ComponentStyles _componentStyles;
  ViewReorderListComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import3.document.createElement('reorder-list');
    this.updateChildClassNonHtml(rootEl, import2.ReorderListComponent.hostClass);
    import7.updateAttribute(rootEl, 'role', import2.ReorderListComponent.hostRole);
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:angular_components/lib/reorder_list/reorder_list.dart' : null);
  }

  @override
  ComponentRef<import2.ReorderListComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import7.appendText(parentRenderNode, '\n');
    project(parentRenderNode, 0);
    final doc = import3.document;
    _el_1 = import7.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_1, 'placeholder');
    addShimC(_el_1);
    project(_el_1, 1);
    _ctx.placeholder = _el_1;
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final bool currVal_0 = (!_ctx.showPlaceholder);
    if (import10.checkBinding(_expr_0, currVal_0)) {
      import7.updateClassBinding(_el_1, 'hidden', currVal_0);
      _expr_0 = currVal_0;
    }
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    final currVal_1 = _ctx.verticalItems;
    if (import10.checkBinding(_expr_1, currVal_1)) {
      import7.updateClassBindingNonHtml(rootEl, 'vertical', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.multiSelect;
    if (import10.checkBinding(_expr_2, currVal_2)) {
      import7.updateClassBindingNonHtml(rootEl, 'multiselect', currVal_2);
      _expr_2 = currVal_2;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import4.ComponentStyles.scoped(styles$ReorderListComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.ReorderListComponent> _ReorderListComponentNgFactory = const ComponentFactory('reorder-list', viewFactory_ReorderListComponentHost0);
ComponentFactory<import2.ReorderListComponent> get ReorderListComponentNgFactory {
  return _ReorderListComponentNgFactory;
}

final List<dynamic> styles$ReorderListComponentHost = const [];

class _ViewReorderListComponentHost0 extends AppView<import2.ReorderListComponent> {
  ViewReorderListComponent0 _compView_0;
  import2.ReorderListComponent _ReorderListComponent_0_5;
  _ViewReorderListComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.ReorderListComponent> build() {
    _compView_0 = ViewReorderListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ReorderListComponent_0_5 = (import8.isDevMode
        ? import11.debugInjectorWrap(import2.ReorderListComponent, () {
            return import2.ReorderListComponent(this.injectorGet(import12.NgZone, viewData.parentIndex));
          })
        : import2.ReorderListComponent(this.injectorGet(import12.NgZone, viewData.parentIndex)));
    _ReorderListComponent_0_5.items = [];
    _compView_0.create(_ReorderListComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _ReorderListComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.ReorderListComponent) && (0 == nodeIndex))) {
      return _ReorderListComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _ReorderListComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.ReorderListComponent> viewFactory_ReorderListComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewReorderListComponentHost0(parentView, parentIndex);
}

class ReorderItemDirectiveNgCd extends import13.DirectiveChangeDetector {
  final import2.ReorderItemDirective instance;
  var _expr_0;
  ReorderItemDirectiveNgCd(this.instance);
  void detectHostChanges(AppView<dynamic> view, import3.Element el) {
    final currVal_0 = instance.hostDraggable;
    if (import10.checkBinding(_expr_0, currVal_0)) {
      import7.updateAttribute(el, 'draggable', currVal_0);
      _expr_0 = currVal_0;
    }
  }
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ReorderListComponent, ReorderListComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
