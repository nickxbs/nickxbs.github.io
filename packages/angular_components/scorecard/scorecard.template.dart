// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'scorecard.dart';
export 'scorecard.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref1;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref2;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref3;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref4;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref5;
import 'package:angular_components/utils/color/color.template.dart' as _ref6;
import 'package:angular_components/utils/color/palette.template.dart' as _ref7;
import 'package:angular_components/scorecard/scorecard.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'scorecard.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import6;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/runtime/interpolate.dart' as import14;
import 'package:angular/src/core/linker/app_view_utils.dart' as import15;
import '../material_ripple/material_ripple.template.dart' as import16;
import '../material_ripple/material_ripple.dart' as import17;
import '../material_icon/material_icon.template.dart' as import18;
import '../material_icon/material_icon.dart' as import19;
import 'package:angular/src/di/errors.dart' as import20;
import '../utils/browser/dom_service/dom_service.dart' as import21;

final List<dynamic> styles$ScorecardComponent = [import0.styles];

class ViewScorecardComponent0 extends AppView<import2.ScorecardComponent> {
  final import3.TextBinding _textBinding_2 = import3.TextBinding();
  final import3.TextBinding _textBinding_4 = import3.TextBinding();
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  ViewContainer _appEl_9;
  NgIf _NgIf_9_9;
  var _expr_1;
  bool _expr_5;
  bool _expr_6;
  bool _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_10;
  bool _expr_11;
  bool _expr_12;
  import6.DivElement _el_3;
  static import7.ComponentStyles _componentStyles;
  ViewScorecardComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import6.document.createElement('acx-scorecard');
    this.updateChildClassNonHtml(rootEl, import2.ScorecardComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:angular_components/lib/scorecard/scorecard.dart' : null);
  }

  @override
  ComponentRef<import2.ScorecardComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import12.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_ScorecardComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final doc = import6.document;
    final _el_1 = import12.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_1, 'label-name');
    addShimC(_el_1);
    _el_1.append(_textBinding_2.element);
    project(_el_1, 0);
    _el_3 = import12.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_3, 'label-value');
    addShimC(_el_3);
    _el_3.append(_textBinding_4.element);
    project(_el_3, 1);
    final _anchor_5 = import12.appendAnchor(parentRenderNode);
    _appEl_5 = ViewContainer(5, null, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_ScorecardComponent2);
    _NgIf_5_9 = NgIf(_appEl_5, _TemplateRef_5_8);
    final _text_6 = import12.appendText(parentRenderNode, '\n');
    final _anchor_7 = import12.appendAnchor(parentRenderNode);
    _appEl_7 = ViewContainer(7, null, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, viewFactory_ScorecardComponent3);
    _NgIf_7_9 = NgIf(_appEl_7, _TemplateRef_7_8);
    final _text_8 = import12.appendText(parentRenderNode, '\n');
    final _anchor_9 = import12.appendAnchor(parentRenderNode);
    _appEl_9 = ViewContainer(9, null, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = TemplateRef(_appEl_9, viewFactory_ScorecardComponent5);
    _NgIf_9_9 = NgIf(_appEl_9, _TemplateRef_9_8);
    final _text_10 = import12.appendText(parentRenderNode, '\n');
    project(parentRenderNode, 3);
    init0();
    _rootEl.addEventListener('keydown', eventHandler1(_ctx.keydown));
    _rootEl.addEventListener('blur', eventHandler0(_ctx.resetOutline));
    _rootEl.addEventListener('mousedown', eventHandler0(_ctx.onMouseInteraction));
    _rootEl.addEventListener('click', eventHandler0(_ctx.handleClick));
    _rootEl.addEventListener('focus', eventHandler1(_ctx.onFocus));
    _rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeypress));
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = _ctx.selectable;
    _NgIf_5_9.ngIf = (_ctx.suggestionBefore != null);
    _NgIf_7_9.ngIf = (_ctx.description != null);
    _NgIf_9_9.ngIf = (_ctx.suggestionAfter != null);
    _appEl_0.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    _appEl_9.detectChangesInNestedViews();
    _textBinding_2.updateText(import14.interpolateString0(_ctx.label));
    final currVal_1 = _ctx.tooltip;
    if (import15.checkBinding(_expr_1, currVal_1)) {
      import12.setProperty(_el_3, 'title', currVal_1);
      _expr_1 = currVal_1;
    }
    _textBinding_4.updateText(import14.interpolateString0(_ctx.value));
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_5.destroyNestedViews();
    _appEl_7.destroyNestedViews();
    _appEl_9.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    final currVal_5 = _ctx.isChangePositive;
    if (import15.checkBinding(_expr_5, currVal_5)) {
      import12.updateClassBindingNonHtml(rootEl, 'is-change-positive', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.isChangeNegative;
    if (import15.checkBinding(_expr_6, currVal_6)) {
      import12.updateClassBindingNonHtml(rootEl, 'is-change-negative', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.selectable;
    if (import15.checkBinding(_expr_7, currVal_7)) {
      import12.updateClassBindingNonHtml(rootEl, 'selectable', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.hostTabIndex;
    if (import15.checkBinding(_expr_8, currVal_8)) {
      import12.updateAttribute(rootEl, 'tabindex', currVal_8?.toString());
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.hostRole;
    if (import15.checkBinding(_expr_9, currVal_9)) {
      import12.updateAttribute(rootEl, 'role', currVal_9);
      _expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.backgroundStyle;
    if (import15.checkBinding(_expr_10, currVal_10)) {
      rootEl.style.setProperty('background', currVal_10);
      _expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.extraBig;
    if (import15.checkBinding(_expr_11, currVal_11)) {
      import12.updateClassBindingNonHtml(rootEl, 'extra-big', currVal_11);
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.selected;
    if (import15.checkBinding(_expr_12, currVal_12)) {
      import12.updateClassBindingNonHtml(rootEl, 'selected', currVal_12);
      _expr_12 = currVal_12;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import7.ComponentStyles.scoped(styles$ScorecardComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.ScorecardComponent> _ScorecardComponentNgFactory = const ComponentFactory('acx-scorecard', viewFactory_ScorecardComponentHost0);
ComponentFactory<import2.ScorecardComponent> get ScorecardComponentNgFactory {
  return _ScorecardComponentNgFactory;
}

class _ViewScorecardComponent1 extends AppView<import2.ScorecardComponent> {
  import16.ViewMaterialRippleComponent0 _compView_0;
  import17.MaterialRippleComponent _MaterialRippleComponent_0_5;
  _ViewScorecardComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    _compView_0 = import16.ViewMaterialRippleComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRippleComponent_0_5 = import17.MaterialRippleComponent(_el_0);
    _compView_0.create0(_MaterialRippleComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialRippleComponent_0_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_ScorecardComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewScorecardComponent1(parentView, parentIndex);
}

class _ViewScorecardComponent2 extends AppView<import2.ScorecardComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  _ViewScorecardComponent2(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    final doc = import6.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'suggestion before');
    addShimE(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import14.interpolateString0(_ctx.suggestionBefore));
  }
}

AppView<void> viewFactory_ScorecardComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewScorecardComponent2(parentView, parentIndex);
}

class _ViewScorecardComponent3 extends AppView<import2.ScorecardComponent> {
  final import3.TextBinding _textBinding_3 = import3.TextBinding();
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  _ViewScorecardComponent3(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    final doc = import6.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'description');
    addShimE(_el_0);
    final _anchor_1 = import12.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_ScorecardComponent4);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _text_2 = import12.appendText(_el_0, ' ');
    _el_0.append(_textBinding_3.element);
    final _text_4 = import12.appendText(_el_0, '  ');
    project(_el_0, 2);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_1_9.ngIf = ((_ctx.changeGlyph && (_ctx.description != '')) && (!_ctx.isChangeNeutral));
    _appEl_1.detectChangesInNestedViews();
    _textBinding_3.updateText(import14.interpolateString0(_ctx.description));
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<void> viewFactory_ScorecardComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewScorecardComponent3(parentView, parentIndex);
}

class _ViewScorecardComponent4 extends AppView<import2.ScorecardComponent> {
  import18.ViewMaterialIconComponent0 _compView_0;
  import19.MaterialIconComponent _MaterialIconComponent_0_5;
  var _expr_0;
  _ViewScorecardComponent4(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    _compView_0 = import18.ViewMaterialIconComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'change-glyph');
    import12.setAttribute(_el_0, 'size', 'small');
    addShimC(_el_0);
    _MaterialIconComponent_0_5 = import19.MaterialIconComponent(_el_0);
    _compView_0.create0(_MaterialIconComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.changeGlyphIcon;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      _MaterialIconComponent_0_5.icon = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
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

AppView<void> viewFactory_ScorecardComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewScorecardComponent4(parentView, parentIndex);
}

class _ViewScorecardComponent5 extends AppView<import2.ScorecardComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  _ViewScorecardComponent5(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    final doc = import6.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'suggestion after');
    addShimE(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import14.interpolateString0(_ctx.suggestionAfter));
  }
}

AppView<void> viewFactory_ScorecardComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewScorecardComponent5(parentView, parentIndex);
}

final List<dynamic> styles$ScorecardComponentHost = const [];

class _ViewScorecardComponentHost0 extends AppView<import2.ScorecardComponent> {
  ViewScorecardComponent0 _compView_0;
  import2.ScorecardComponent _ScorecardComponent_0_5;
  _ViewScorecardComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.ScorecardComponent> build() {
    _compView_0 = ViewScorecardComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ScorecardComponent_0_5 = (import10.isDevMode
        ? import20.debugInjectorWrap(import2.ScorecardComponent, () {
            return import2.ScorecardComponent(_compView_0, rootEl, this.injectorGet(import21.DomService, viewData.parentIndex));
          })
        : import2.ScorecardComponent(_compView_0, rootEl, this.injectorGet(import21.DomService, viewData.parentIndex)));
    _compView_0.create(_ScorecardComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _ScorecardComponent_0_5);
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

AppView<import2.ScorecardComponent> viewFactory_ScorecardComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewScorecardComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ScorecardComponent, ScorecardComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
