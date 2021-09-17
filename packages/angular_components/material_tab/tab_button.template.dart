// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'tab_button.dart';
export 'tab_button.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_button/material_button_base.template.dart' as _ref1;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref2;
import 'package:angular_components/material_tab/tab_mixin.template.dart' as _ref3;
import 'package:angular_components/material_tab/tab_button.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'tab_button.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import '../material_ripple/material_ripple.template.dart' as import4;
import '../material_ripple/material_ripple.dart' as import5;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import6;
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/runtime/interpolate.dart' as import13;
import 'package:angular/src/core/linker/app_view_utils.dart' as import14;

final List<dynamic> styles$TabButtonComponent = [import0.styles];

class ViewTabButtonComponent0 extends AppView<import2.TabButtonComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  import4.ViewMaterialRippleComponent0 _compView_2;
  import5.MaterialRippleComponent _MaterialRippleComponent_2_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  bool _expr_4;
  bool _expr_5;
  var _expr_6;
  static import6.ComponentStyles _componentStyles;
  ViewTabButtonComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import9.document.createElement('tab-button');
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:angular_components/lib/material_tab/tab_button.dart' : null);
  }

  @override
  ComponentRef<import2.TabButtonComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import9.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import9.document;
    final _el_0 = import12.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'content');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    _compView_2 = import4.ViewMaterialRippleComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    parentRenderNode.append(_el_2);
    addShimC(_el_2);
    _MaterialRippleComponent_2_5 = import5.MaterialRippleComponent(_el_2);
    _compView_2.create0(_MaterialRippleComponent_2_5);
    init0();
    _rootEl.addEventListener('click', eventHandler1(_ctx.handleClick));
    _rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeyPress));
    _rootEl.addEventListener('mousedown', eventHandler1(_ctx.onMouseDown));
    _rootEl.addEventListener('mouseup', eventHandler1(_ctx.onMouseUp));
    _rootEl.addEventListener('focus', eventHandler1(_ctx.onFocus));
    _rootEl.addEventListener('blur', eventHandler1(_ctx.onBlur));
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    _textBinding_1.updateText(import13.interpolateString0(_ctx.label));
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2.destroyInternalState();
    _MaterialRippleComponent_2_5.ngOnDestroy();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    final currVal_0 = _ctx.tabIndex;
    if (import14.checkBinding(_expr_0, currVal_0)) {
      import12.updateAttribute(rootEl, 'tabindex', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.ariaRole;
    if (import14.checkBinding(_expr_1, currVal_1)) {
      import12.updateAttribute(rootEl, 'role', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabledStr;
    if (import14.checkBinding(_expr_2, currVal_2)) {
      import12.updateAttribute(rootEl, 'aria-disabled', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.disabled;
    if (import14.checkBinding(_expr_3, currVal_3)) {
      import12.updateClassBindingNonHtml(rootEl, 'is-disabled', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.hostClassFocus;
    if (import14.checkBinding(_expr_4, currVal_4)) {
      import12.updateClassBindingNonHtml(rootEl, 'focus', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.hostClassActive;
    if (import14.checkBinding(_expr_5, currVal_5)) {
      import12.updateClassBindingNonHtml(rootEl, 'active', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.hostDisabled;
    if (import14.checkBinding(_expr_6, currVal_6)) {
      import12.updateAttribute(rootEl, 'disabled', currVal_6);
      _expr_6 = currVal_6;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import6.ComponentStyles.scoped(styles$TabButtonComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.TabButtonComponent> _TabButtonComponentNgFactory = const ComponentFactory('tab-button', viewFactory_TabButtonComponentHost0);
ComponentFactory<import2.TabButtonComponent> get TabButtonComponentNgFactory {
  return _TabButtonComponentNgFactory;
}

final List<dynamic> styles$TabButtonComponentHost = const [];

class _ViewTabButtonComponentHost0 extends AppView<import2.TabButtonComponent> {
  ViewTabButtonComponent0 _compView_0;
  import2.TabButtonComponent _TabButtonComponent_0_5;
  _ViewTabButtonComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.TabButtonComponent> build() {
    _compView_0 = ViewTabButtonComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _TabButtonComponent_0_5 = import2.TabButtonComponent(rootEl);
    _compView_0.create(_TabButtonComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _TabButtonComponent_0_5);
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

AppView<import2.TabButtonComponent> viewFactory_TabButtonComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewTabButtonComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(TabButtonComponent, TabButtonComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
