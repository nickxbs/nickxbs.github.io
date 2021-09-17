// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_radio.dart';
export 'material_radio.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/meta.template.dart' as _ref1;
import 'package:angular_components/focus/focus.template.dart' as _ref2;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref3;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref4;
import 'package:angular_components/material_radio/material_radio_group.template.dart' as _ref5;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref6;
import 'package:angular_components/model/ui/icon.template.dart' as _ref7;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref8;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref9;
import 'package:angular_forms/angular_forms.template.dart' as _ref10;
import 'package:angular_components/material_radio/material_radio.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_radio.dart' as import2;
import '../material_icon/material_icon.template.dart' as import3;
import '../material_icon/material_icon.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import7;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import8;
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import13;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import15;
import '../material_ripple/material_ripple.template.dart' as import16;
import '../material_ripple/material_ripple.dart' as import17;
import 'package:angular/src/di/errors.dart' as import18;
import 'material_radio_group.dart' as import19;
import '../interfaces/has_disabled.dart' as import20;

final List<dynamic> styles$MaterialRadioComponent = [import0.styles];

class ViewMaterialRadioComponent0 extends AppView<import2.MaterialRadioComponent> {
  import3.ViewMaterialIconComponent0 _compView_1;
  import4.MaterialIconComponent _MaterialIconComponent_1_5;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  var _expr_3;
  var _expr_5;
  var _expr_6;
  bool _expr_8;
  var _expr_9;
  import7.DivElement _el_0;
  static import8.ComponentStyles _componentStyles;
  ViewMaterialRadioComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import7.document.createElement('material-radio');
    this.updateChildClassNonHtml(rootEl, import2.MaterialRadioComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:angular_components/lib/material_radio/material_radio.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialRadioComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import7.document;
    _el_0 = import13.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'icon-container');
    addShimC(_el_0);
    _compView_1 = import3.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    import13.setAttribute(_el_1, 'aria-hidden', 'true');
    this.updateChildClassNonHtml(_el_1, 'icon');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import4.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    final _anchor_2 = import13.appendAnchor(_el_0);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialRadioComponent1);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _el_3 = import13.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_3, 'content');
    addShimC(_el_3);
    project(_el_3, 0);
    init0();
    _rootEl.addEventListener('keydown', eventHandler1(_ctx.handleKeyDown));
    _rootEl.addEventListener('keyup', eventHandler1(_ctx.handleKeyUp));
    _rootEl.addEventListener('focus', eventHandler0(_ctx.onFocus));
    _rootEl.addEventListener('blur', eventHandler0(_ctx.onBlur));
    _rootEl.addEventListener('click', eventHandler0(_ctx.handleClick));
    _rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeyPress));
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_3 = _ctx.icon;
    if (import15.checkBinding(_expr_3, currVal_3)) {
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
    if (import15.checkBinding(_expr_0, currVal_0)) {
      import13.updateClassBinding(_el_0, 'focus', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.checked;
    if (import15.checkBinding(_expr_1, currVal_1)) {
      import13.updateClassBinding(_el_0, 'checked', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabled;
    if (import15.checkBinding(_expr_2, currVal_2)) {
      import13.updateClassBinding(_el_0, 'disabled', currVal_2);
      _expr_2 = currVal_2;
    }
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
        import13.updateAttribute(rootEl, 'role', _ctx.role);
      }
    }
    final currVal_5 = _ctx.checked;
    if (import15.checkBinding(_expr_5, currVal_5)) {
      import13.updateAttribute(rootEl, 'aria-checked', currVal_5?.toString());
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.tabIndex;
    if (import15.checkBinding(_expr_6, currVal_6)) {
      import13.updateAttribute(rootEl, 'tabindex', currVal_6?.toString());
      _expr_6 = currVal_6;
    }
    final currVal_8 = _ctx.disabled;
    if (import15.checkBinding(_expr_8, currVal_8)) {
      import13.updateClassBindingNonHtml(rootEl, 'disabled', currVal_8);
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.disabled;
    if (import15.checkBinding(_expr_9, currVal_9)) {
      import13.updateAttribute(rootEl, 'aria-disabled', currVal_9?.toString());
      _expr_9 = currVal_9;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import8.ComponentStyles.scoped(styles$MaterialRadioComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialRadioComponent> _MaterialRadioComponentNgFactory = const ComponentFactory('material-radio', viewFactory_MaterialRadioComponentHost0);
ComponentFactory<import2.MaterialRadioComponent> get MaterialRadioComponentNgFactory {
  return _MaterialRadioComponentNgFactory;
}

class _ViewMaterialRadioComponent1 extends AppView<import2.MaterialRadioComponent> {
  import16.ViewMaterialRippleComponent0 _compView_0;
  import17.MaterialRippleComponent _MaterialRippleComponent_0_5;
  _ViewMaterialRadioComponent1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialRadioComponent> build() {
    _compView_0 = import16.ViewMaterialRippleComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'ripple');
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

AppView<void> viewFactory_MaterialRadioComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialRadioComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialRadioComponentHost = const [];

class _ViewMaterialRadioComponentHost0 extends AppView<import2.MaterialRadioComponent> {
  ViewMaterialRadioComponent0 _compView_0;
  import2.MaterialRadioComponent _MaterialRadioComponent_0_5;
  _ViewMaterialRadioComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialRadioComponent> build() {
    _compView_0 = ViewMaterialRadioComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialRadioComponent_0_5 = (import11.isDevMode
        ? import18.debugInjectorWrap(import2.MaterialRadioComponent, () {
            return import2.MaterialRadioComponent(rootEl, _compView_0, this.injectorGetOptional(import19.MaterialRadioGroupComponent, viewData.parentIndex), null, null);
          })
        : import2.MaterialRadioComponent(rootEl, _compView_0, this.injectorGetOptional(import19.MaterialRadioGroupComponent, viewData.parentIndex), null, null));
    _compView_0.create(_MaterialRadioComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialRadioComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import20.HasDisabled) && (0 == nodeIndex))) {
      return _MaterialRadioComponent_0_5;
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
    _MaterialRadioComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialRadioComponent> viewFactory_MaterialRadioComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialRadioComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialRadioComponent, MaterialRadioComponentNgFactory);
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
  _ref10.initReflector();
}
