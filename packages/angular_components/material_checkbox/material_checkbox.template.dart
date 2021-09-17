// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_checkbox.dart';
export 'material_checkbox.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/meta.template.dart' as _ref1;
import 'package:angular_components/focus/focus.template.dart' as _ref2;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref3;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref4;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref5;
import 'package:angular_components/model/ui/icon.template.dart' as _ref6;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref7;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref8;
import 'package:angular_forms/angular_forms.template.dart' as _ref9;
import 'package:angular_components/material_checkbox/material_checkbox.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_checkbox.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import '../material_icon/material_icon.template.dart' as import4;
import '../material_icon/material_icon.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import9;
import 'package:angular/src/core/linker/view_type.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import14;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import16;
import 'package:angular/src/runtime/interpolate.dart' as import17;
import '../material_ripple/material_ripple.template.dart' as import18;
import '../material_ripple/material_ripple.dart' as import19;
import '../interfaces/has_disabled.dart' as import20;

final List<dynamic> styles$MaterialCheckboxComponent = [import0.styles];

class ViewMaterialCheckboxComponent0 extends AppView<import2.MaterialCheckboxComponent> {
  final import3.TextBinding _textBinding_4 = import3.TextBinding();
  import4.ViewMaterialIconComponent0 _compView_1;
  import5.MaterialIconComponent _MaterialIconComponent_1_5;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  bool _expr_0;
  var _expr_1;
  bool _expr_2;
  var _expr_3;
  var _expr_6;
  bool _expr_8;
  var _expr_9;
  import8.DivElement _el_0;
  import8.Element _el_1;
  import8.DivElement _el_3;
  static import9.ComponentStyles _componentStyles;
  ViewMaterialCheckboxComponent0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import8.document.createElement('material-checkbox');
    this.updateChildClassNonHtml(rootEl, import2.MaterialCheckboxComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import12.isDevMode ? 'asset:angular_components/lib/material_checkbox/material_checkbox.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialCheckboxComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import8.document;
    _el_0 = import14.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'icon-container');
    addShimC(_el_0);
    _compView_1 = import4.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    import14.setAttribute(_el_1, 'aria-hidden', 'true');
    this.updateChildClassNonHtml(_el_1, 'icon');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import5.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    final _anchor_2 = import14.appendAnchor(_el_0);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialCheckboxComponent1);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    _el_3 = import14.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_3, 'content');
    addShimC(_el_3);
    _el_3.append(_textBinding_4.element);
    final _text_5 = import14.appendText(_el_3, ' ');
    project(_el_3, 0);
    init0();
    _rootEl.addEventListener('keyup', eventHandler1(_ctx.handleKeyUp));
    _rootEl.addEventListener('click', eventHandler1(_ctx.handleClick));
    _rootEl.addEventListener('mousedown', eventHandler1(_ctx.handleMouseDown));
    _rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeyPress));
    _rootEl.addEventListener('focus', eventHandler1(_ctx.handleFocus));
    _rootEl.addEventListener('blur', eventHandler1(_ctx.handleBlur));
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_3 = _ctx.icon;
    if (import16.checkBinding(_expr_3, currVal_3)) {
      _MaterialIconComponent_1_5.icon = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    _NgIf_2_9.ngIf = (!_ctx.disabled);
    _appEl_2.detectChangesInNestedViews();
    final currVal_0 = _ctx.showFocus;
    if (import16.checkBinding(_expr_0, currVal_0)) {
      import14.updateClassBinding(_el_0, 'focus', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.themeColor;
    if (import16.checkBinding(_expr_1, currVal_1)) {
      _el_1.style.setProperty('color', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.checked || _ctx.indeterminate);
    if (import16.checkBinding(_expr_2, currVal_2)) {
      import14.updateClassBindingNonHtml(_el_1, 'filled', currVal_2);
      _expr_2 = currVal_2;
    }
    if (firstCheck) {
      if (!identical(_ctx.contentId, null)) {
        import14.setProperty(_el_3, 'id', _ctx.contentId);
      }
    }
    _textBinding_4.updateText(import17.interpolateString0(_ctx.label));
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _compView_1.destroyInternalState();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    if (firstCheck) {
      if (!identical(_ctx.role, null)) {
        import14.updateAttribute(rootEl, 'role', _ctx.role);
      }
      if (!identical(_ctx.contentId, null)) {
        import14.updateAttribute(rootEl, 'aria-labelledby', _ctx.contentId);
      }
    }
    final currVal_6 = _ctx.tabIndex;
    if (import16.checkBinding(_expr_6, currVal_6)) {
      import14.updateAttribute(rootEl, 'tabindex', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_8 = _ctx.disabled;
    if (import16.checkBinding(_expr_8, currVal_8)) {
      import14.updateClassBindingNonHtml(rootEl, 'disabled', currVal_8);
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.disabled;
    if (import16.checkBinding(_expr_9, currVal_9)) {
      import14.updateAttribute(rootEl, 'aria-disabled', currVal_9?.toString());
      _expr_9 = currVal_9;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import9.ComponentStyles.scoped(styles$MaterialCheckboxComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialCheckboxComponent> _MaterialCheckboxComponentNgFactory = const ComponentFactory('material-checkbox', viewFactory_MaterialCheckboxComponentHost0);
ComponentFactory<import2.MaterialCheckboxComponent> get MaterialCheckboxComponentNgFactory {
  return _MaterialCheckboxComponentNgFactory;
}

class _ViewMaterialCheckboxComponent1 extends AppView<import2.MaterialCheckboxComponent> {
  import18.ViewMaterialRippleComponent0 _compView_0;
  import19.MaterialRippleComponent _MaterialRippleComponent_0_5;
  var _expr_0;
  import8.Element _el_0;
  _ViewMaterialCheckboxComponent1(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialCheckboxComponent> build() {
    _compView_0 = import18.ViewMaterialRippleComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'ripple');
    addShimC(_el_0);
    _MaterialRippleComponent_0_5 = import19.MaterialRippleComponent(_el_0);
    _compView_0.create0(_MaterialRippleComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.rippleColor;
    if (import16.checkBinding(_expr_0, currVal_0)) {
      _el_0.style.setProperty('color', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialRippleComponent_0_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_MaterialCheckboxComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialCheckboxComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialCheckboxComponentHost = const [];

class _ViewMaterialCheckboxComponentHost0 extends AppView<import2.MaterialCheckboxComponent> {
  ViewMaterialCheckboxComponent0 _compView_0;
  import2.MaterialCheckboxComponent _MaterialCheckboxComponent_0_5;
  _ViewMaterialCheckboxComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialCheckboxComponent> build() {
    _compView_0 = ViewMaterialCheckboxComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialCheckboxComponent_0_5 = import2.MaterialCheckboxComponent(rootEl, _compView_0, null, null, null);
    _compView_0.create(_MaterialCheckboxComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialCheckboxComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import20.HasDisabled) && (0 == nodeIndex))) {
      return _MaterialCheckboxComponent_0_5;
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
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialCheckboxComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialCheckboxComponent> viewFactory_MaterialCheckboxComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialCheckboxComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialCheckboxComponent, MaterialCheckboxComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
}
