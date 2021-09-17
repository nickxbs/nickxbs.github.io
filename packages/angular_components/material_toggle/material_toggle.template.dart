// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_toggle.dart';
export 'material_toggle.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref1;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref2;
import 'package:angular_forms/angular_forms.template.dart' as _ref3;
import 'package:angular_components/material_toggle/material_toggle.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_toggle.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import5;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import6;
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:angular/src/runtime/interpolate.dart' as import14;
import 'package:angular/src/runtime/text_binding.dart' as import15;
import '../interfaces/has_disabled.dart' as import16;

final List<dynamic> styles$MaterialToggleComponent = [import0.styles];

class ViewMaterialToggleComponent0 extends AppView<import2.MaterialToggleComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_6;
  bool _expr_7;
  bool _expr_8;
  var _expr_9;
  import5.DivElement _el_0;
  import5.DivElement _el_3;
  import5.DivElement _el_5;
  import5.DivElement _el_6;
  static import6.ComponentStyles _componentStyles;
  ViewMaterialToggleComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import5.document.createElement('material-toggle');
    this.updateChildClassNonHtml(rootEl, import2.MaterialToggleComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_toggle/material_toggle.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialToggleComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import5.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import5.document;
    _el_0 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'material-toggle');
    import11.setAttribute(_el_0, 'role', 'button');
    addShimC(_el_0);
    final _anchor_1 = import11.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialToggleComponent1);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _el_2 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_2, 'tgl-container');
    addShimC(_el_2);
    _el_3 = import11.appendDiv(doc, _el_2);
    import11.setAttribute(_el_3, 'animated', '');
    this.updateChildClass(_el_3, 'tgl-bar');
    addShimC(_el_3);
    final _el_4 = import11.appendDiv(doc, _el_2);
    this.updateChildClass(_el_4, 'tgl-btn-container');
    addShimC(_el_4);
    _el_5 = import11.appendDiv(doc, _el_4);
    this.updateChildClass(_el_5, 'tgl-btn-underlay');
    addShimC(_el_5);
    _el_6 = import11.appendDiv(doc, _el_5);
    import11.setAttribute(_el_6, 'animated', '');
    this.updateChildClass(_el_6, 'tgl-btn');
    addShimC(_el_6);
    project(_el_6, 0);
    _el_0.addEventListener('blur', eventHandler1(_handle_blur_0_0));
    _el_0.addEventListener('focus', eventHandler1(_handle_focus_0_1));
    _el_0.addEventListener('mouseenter', eventHandler1(_handle_mouseenter_0_2));
    _el_0.addEventListener('mouseleave', eventHandler1(_handle_mouseleave_0_3));
    _ctx.toggleElement = _el_0;
    init0();
    _rootEl.addEventListener('click', eventHandler1(_ctx.handleClick));
    _rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeyPress));
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_1_9.ngIf = _ctx.hasLabel;
    _appEl_1.detectChangesInNestedViews();
    final currVal_0 = _ctx.checked;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.updateClassBinding(_el_0, 'checked', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.disabled;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      import11.updateClassBinding(_el_0, 'disabled', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.disabled ? '-1' : '0');
    if (import13.checkBinding(_expr_2, currVal_2)) {
      import11.updateAttribute(_el_0, 'tabindex', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    final currVal_3 = import14.interpolate0(_ctx.disabled);
    if (import13.checkBinding(_expr_3, currVal_3)) {
      import11.setAttribute(_el_0, 'aria-disabled', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = import14.interpolateString0(_ctx.ariaLabel);
    if (import13.checkBinding(_expr_4, currVal_4)) {
      import11.setAttribute(_el_0, 'aria-label', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_6 = import14.interpolate0(_ctx.shadow_z);
    if (import13.checkBinding(_expr_6, currVal_6)) {
      import11.setAttribute(_el_3, 'elevation', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.checked;
    if (import13.checkBinding(_expr_7, currVal_7)) {
      import11.updateClassBinding(_el_5, 'under-checked', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.hasFocus;
    if (import13.checkBinding(_expr_8, currVal_8)) {
      import11.updateClassBinding(_el_5, 'under-focus', currVal_8);
      _expr_8 = currVal_8;
    }
    final currVal_9 = import14.interpolate0(_ctx.shadow_z);
    if (import13.checkBinding(_expr_9, currVal_9)) {
      import11.setAttribute(_el_6, 'elevation', currVal_9);
      _expr_9 = currVal_9;
    }
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }

  void _handle_blur_0_0($event) {
    final _ctx = ctx;
    _ctx.hasFocus = false;
  }

  void _handle_focus_0_1($event) {
    final _ctx = ctx;
    _ctx.hasFocus = true;
  }

  void _handle_mouseenter_0_2($event) {
    final _ctx = ctx;
    _ctx.isHovered = true;
  }

  void _handle_mouseleave_0_3($event) {
    final _ctx = ctx;
    _ctx.isHovered = false;
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import6.ComponentStyles.scoped(styles$MaterialToggleComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialToggleComponent> _MaterialToggleComponentNgFactory = const ComponentFactory('material-toggle', viewFactory_MaterialToggleComponentHost0);
ComponentFactory<import2.MaterialToggleComponent> get MaterialToggleComponentNgFactory {
  return _MaterialToggleComponentNgFactory;
}

class _ViewMaterialToggleComponent1 extends AppView<import2.MaterialToggleComponent> {
  final import15.TextBinding _textBinding_1 = import15.TextBinding();
  _ViewMaterialToggleComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialToggleComponent> build() {
    final doc = import5.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'tgl-lbl');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import14.interpolateString0(_ctx.label));
  }
}

AppView<void> viewFactory_MaterialToggleComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialToggleComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialToggleComponentHost = const [];

class _ViewMaterialToggleComponentHost0 extends AppView<import2.MaterialToggleComponent> {
  ViewMaterialToggleComponent0 _compView_0;
  import2.MaterialToggleComponent _MaterialToggleComponent_0_5;
  _ViewMaterialToggleComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialToggleComponent> build() {
    _compView_0 = ViewMaterialToggleComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialToggleComponent_0_5 = import2.MaterialToggleComponent(_compView_0, null);
    _compView_0.create(_MaterialToggleComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialToggleComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.HasDisabled) && (0 == nodeIndex))) {
      return _MaterialToggleComponent_0_5;
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
    _compView_0.detectChanges();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialToggleComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.MaterialToggleComponent> viewFactory_MaterialToggleComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialToggleComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialToggleComponent, MaterialToggleComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
