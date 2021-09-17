// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_fab.dart';
export 'material_fab.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_button_base.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular/meta.template.dart' as _ref2;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref3;
import 'package:angular_components/material_button/material_fab.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_fab.dart' as import2;
import '../material_ripple/material_ripple.template.dart' as import3;
import '../material_ripple/material_ripple.dart' as import4;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime/dom_helpers.dart' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import12;

final List<dynamic> styles$MaterialFabComponent = [import0.styles];

class ViewMaterialFabComponent0 extends AppView<import2.MaterialFabComponent> {
  import3.ViewMaterialRippleComponent0 _compView_2;
  import4.MaterialRippleComponent _MaterialRippleComponent_2_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  var _expr_4;
  var _expr_5;
  bool _expr_6;
  bool _expr_7;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialFabComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import8.document.createElement('material-fab');
    import9.updateAttribute(rootEl, 'animated', import2.MaterialFabComponent.hostAnimated);
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:angular_components/lib/material_button/material_fab.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialFabComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import9.appendText(parentRenderNode, '\n');
    final doc = import8.document;
    final _el_1 = import9.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_1, 'content');
    addShimC(_el_1);
    project(_el_1, 0);
    _compView_2 = import3.ViewMaterialRippleComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    parentRenderNode.append(_el_2);
    addShimC(_el_2);
    _MaterialRippleComponent_2_5 = import4.MaterialRippleComponent(_el_2);
    _compView_2.create0(_MaterialRippleComponent_2_5);
    _el_2.addEventListener('mousedown', eventHandler1(_ctx.onMouseDown));
    _el_2.addEventListener('mouseup', eventHandler1(_ctx.onMouseUp));
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
    bool changed = false;
    changed = false;
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
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
    if (import12.checkBinding(_expr_0, currVal_0)) {
      import9.updateAttribute(rootEl, 'tabindex', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.ariaRole;
    if (import12.checkBinding(_expr_1, currVal_1)) {
      import9.updateAttribute(rootEl, 'role', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabledStr;
    if (import12.checkBinding(_expr_2, currVal_2)) {
      import9.updateAttribute(rootEl, 'aria-disabled', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.disabled;
    if (import12.checkBinding(_expr_3, currVal_3)) {
      import9.updateClassBindingNonHtml(rootEl, 'is-disabled', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.hostDisabled;
    if (import12.checkBinding(_expr_4, currVal_4)) {
      import9.updateAttribute(rootEl, 'disabled', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.hostRaised;
    if (import12.checkBinding(_expr_5, currVal_5)) {
      import9.updateAttribute(rootEl, 'raised', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.hostClassIsFocused;
    if (import12.checkBinding(_expr_6, currVal_6)) {
      import9.updateClassBindingNonHtml(rootEl, 'is-focused', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.hostClassIsPressed;
    if (import12.checkBinding(_expr_7, currVal_7)) {
      import9.updateClassBindingNonHtml(rootEl, 'is-pressed', currVal_7);
      _expr_7 = currVal_7;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$MaterialFabComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialFabComponent> _MaterialFabComponentNgFactory = const ComponentFactory('material-fab', viewFactory_MaterialFabComponentHost0);
ComponentFactory<import2.MaterialFabComponent> get MaterialFabComponentNgFactory {
  return _MaterialFabComponentNgFactory;
}

final List<dynamic> styles$MaterialFabComponentHost = const [];

class _ViewMaterialFabComponentHost0 extends AppView<import2.MaterialFabComponent> {
  ViewMaterialFabComponent0 _compView_0;
  import2.MaterialFabComponent _MaterialFabComponent_0_5;
  _ViewMaterialFabComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialFabComponent> build() {
    _compView_0 = ViewMaterialFabComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialFabComponent_0_5 = import2.MaterialFabComponent(rootEl, _compView_0);
    _compView_0.create(_MaterialFabComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialFabComponent_0_5);
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

AppView<import2.MaterialFabComponent> viewFactory_MaterialFabComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialFabComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialFabComponent, MaterialFabComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
