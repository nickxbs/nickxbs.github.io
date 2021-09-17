// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_select_item.dart';
export 'material_select_item.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/meta.template.dart' as _ref1;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref2;
import 'package:angular_components/dynamic_component/dynamic_component.template.dart' as _ref3;
import 'package:angular_components/glyph/glyph.template.dart' as _ref4;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref5;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as _ref6;
import 'package:angular_components/material_select/activation_handler.template.dart' as _ref7;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref8;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref9;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref10;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref11;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref12;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref13;
import 'package:angular_components/material_select/material_select_item.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_select_item.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import '../material_checkbox/material_checkbox.template.dart' as import14;
import '../material_checkbox/material_checkbox.dart' as import15;
import '../interfaces/has_disabled.dart' as import16;
import '../glyph/glyph.template.dart' as import17;
import '../glyph/glyph.dart' as import18;
import 'package:angular/src/runtime/text_binding.dart' as import19;
import 'package:angular/src/runtime/interpolate.dart' as import20;
import '../dynamic_component/dynamic_component.template.dart' as import21;
import '../dynamic_component/dynamic_component.dart' as import22;
import 'package:angular/src/di/errors.dart' as import23;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as import24;
import '../mixins/material_dropdown_base.dart' as import25;
import 'activation_handler.dart' as import26;
import '../model/selection/selection_container.dart' as import27;
import '../model/ui/has_renderer.dart' as import28;

final List<dynamic> styles$MaterialSelectItemComponent = [import0.styles];

class ViewMaterialSelectItemComponent0<T> extends AppView<import2.MaterialSelectItemComponent<T>> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  bool _expr_7;
  bool _expr_8;
  bool _expr_9;
  bool _expr_10;
  var _expr_11;
  bool _expr_12;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialSelectItemComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('material-select-item');
    this.updateChildClassNonHtml(rootEl, import2.MaterialSelectItemComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_select/material_select_item.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialSelectItemComponent<T>> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent1<T>(parentView, parentIndex);
    });
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final _text_1 = import11.appendText(parentRenderNode, ' ');
    final _anchor_2 = import11.appendAnchor(parentRenderNode);
    _appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent2<T>(parentView, parentIndex);
    });
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _text_3 = import11.appendText(parentRenderNode, '\n \n');
    final _anchor_4 = import11.appendAnchor(parentRenderNode);
    _appEl_4 = ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent6<T>(parentView, parentIndex);
    });
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    final _text_5 = import11.appendText(parentRenderNode, '\n ');
    final _anchor_6 = import11.appendAnchor(parentRenderNode);
    _appEl_6 = ViewContainer(6, null, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent7<T>(parentView, parentIndex);
    });
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    project(parentRenderNode, 0);
    init0();
    _rootEl.addEventListener('click', eventHandler1(_ctx.handleClick));
    _rootEl.addEventListener('keypress', eventHandler1(_ctx.handleKeyPress));
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = ((!_ctx.supportsMultiSelect) && _ctx.isSelected);
    _NgIf_2_9.ngIf = (_ctx.supportsMultiSelect && (!_ctx.hideCheckbox));
    _NgIf_4_9.ngIf = _ctx.valueHasLabel;
    _NgIf_6_9.ngIf = ((_ctx.componentType != null) || (_ctx.componentFactory != null));
    _appEl_0.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _appEl_4.destroyNestedViews();
    _appEl_6.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    final currVal_4 = _ctx.tabIndex;
    if (import13.checkBinding(_expr_4, currVal_4)) {
      import11.updateAttribute(rootEl, 'tabindex', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.ariaRole;
    if (import13.checkBinding(_expr_5, currVal_5)) {
      import11.updateAttribute(rootEl, 'role', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.disabledStr;
    if (import13.checkBinding(_expr_6, currVal_6)) {
      import11.updateAttribute(rootEl, 'aria-disabled', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.disabled;
    if (import13.checkBinding(_expr_7, currVal_7)) {
      import11.updateClassBindingNonHtml(rootEl, 'is-disabled', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.disabled;
    if (import13.checkBinding(_expr_8, currVal_8)) {
      import11.updateClassBindingNonHtml(rootEl, 'disabled', currVal_8);
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.isHidden;
    if (import13.checkBinding(_expr_9, currVal_9)) {
      import11.updateClassBindingNonHtml(rootEl, 'hidden', currVal_9);
      _expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.supportsMultiSelect;
    if (import13.checkBinding(_expr_10, currVal_10)) {
      import11.updateClassBindingNonHtml(rootEl, 'multiselect', currVal_10);
      _expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.isAriaChecked;
    if (import13.checkBinding(_expr_11, currVal_11)) {
      import11.updateAttribute(rootEl, 'aria-checked', currVal_11?.toString());
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.isSelected;
    if (import13.checkBinding(_expr_12, currVal_12)) {
      import11.updateClassBindingNonHtml(rootEl, 'selected', currVal_12);
      _expr_12 = currVal_12;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$MaterialSelectItemComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialSelectItemComponent> _MaterialSelectItemComponentNgFactory = const ComponentFactory('material-select-item', viewFactory_MaterialSelectItemComponentHost0);
ComponentFactory<import2.MaterialSelectItemComponent> get MaterialSelectItemComponentNgFactory {
  return _MaterialSelectItemComponentNgFactory;
}

class _ViewMaterialSelectItemComponent1<T> extends AppView<import2.MaterialSelectItemComponent<T>> {
  _ViewMaterialSelectItemComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialSelectItemComponent<T>> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'selected-accent mixin');
    addShimC(_el_0);
    init1(_el_0);
  }
}

AppView<void> viewFactory_MaterialSelectItemComponent1<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialSelectItemComponent2<T> extends AppView<import2.MaterialSelectItemComponent<T>> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  _ViewMaterialSelectItemComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialSelectItemComponent<T>> build() {
    final _anchor_0 = import11.createAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent3<T>(parentView, parentIndex);
    });
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final _text_1 = import11.createText('  ');
    final _anchor_2 = import11.createAnchor();
    _appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent4<T>(parentView, parentIndex);
    });
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    init([_appEl_0, _text_1, _appEl_2], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = (!_ctx.useCheckMarks);
    _NgIf_2_9.ngIf = _ctx.useCheckMarks;
    _appEl_0.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_2.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialSelectItemComponent2<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialSelectItemComponent3<T> extends AppView<import2.MaterialSelectItemComponent<T>> {
  import14.ViewMaterialCheckboxComponent0 _compView_0;
  import15.MaterialCheckboxComponent _MaterialCheckboxComponent_0_5;
  bool _expr_0;
  bool _expr_1;
  _ViewMaterialSelectItemComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialSelectItemComponent<T>> build() {
    _compView_0 = import14.ViewMaterialCheckboxComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _el_0.tabIndex = -1;
    addShimC(_el_0);
    _MaterialCheckboxComponent_0_5 = import15.MaterialCheckboxComponent(_el_0, _compView_0, null, '-1', null);
    _compView_0.create(_MaterialCheckboxComponent_0_5, [const []]);
    init1(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.HasDisabled) && (0 == nodeIndex))) {
      return _MaterialCheckboxComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_0 = _ctx.disabled;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _MaterialCheckboxComponent_0_5.disabled = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isSelected;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _MaterialCheckboxComponent_0_5.checked = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
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

AppView<void> viewFactory_MaterialSelectItemComponent3<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent3<T>(parentView, parentIndex);
}

class _ViewMaterialSelectItemComponent4<T> extends AppView<import2.MaterialSelectItemComponent<T>> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  _ViewMaterialSelectItemComponent4(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialSelectItemComponent<T>> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'check-container');
    addShimE(_el_0);
    final _anchor_1 = import11.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialSelectItemComponent5<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_1_9.ngIf = _ctx.isSelected;
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialSelectItemComponent4<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent4<T>(parentView, parentIndex);
}

class _ViewMaterialSelectItemComponent5<T> extends AppView<import2.MaterialSelectItemComponent<T>> {
  import17.ViewGlyphComponent0 _compView_0;
  import18.GlyphComponent _GlyphComponent_0_5;
  _ViewMaterialSelectItemComponent5(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialSelectItemComponent<T>> build() {
    _compView_0 = import17.ViewGlyphComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    import11.setAttribute(_el_0, 'baseline', '');
    this.updateChildClassNonHtml(_el_0, 'check');
    import11.setAttribute(_el_0, 'icon', 'check');
    addShimC(_el_0);
    _GlyphComponent_0_5 = import18.GlyphComponent(_el_0);
    _compView_0.create0(_GlyphComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _GlyphComponent_0_5.icon = 'check';
      changed = true;
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

AppView<void> viewFactory_MaterialSelectItemComponent5<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent5<T>(parentView, parentIndex);
}

class _ViewMaterialSelectItemComponent6<T> extends AppView<import2.MaterialSelectItemComponent<T>> {
  final import19.TextBinding _textBinding_1 = import19.TextBinding();
  _ViewMaterialSelectItemComponent6(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialSelectItemComponent<T>> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'label');
    addShimE(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import20.interpolateString0(_ctx.valueLabel));
  }
}

AppView<void> viewFactory_MaterialSelectItemComponent6<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent6<T>(parentView, parentIndex);
}

class _ViewMaterialSelectItemComponent7<T> extends AppView<import2.MaterialSelectItemComponent<T>> {
  import21.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import22.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialSelectItemComponent7(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialSelectItemComponent<T>> build() {
    final _ctx = ctx;
    _compView_0 = import21.ViewDynamicComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'dynamic-item');
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _DynamicComponent_0_8 = (import9.isDevMode
        ? import23.debugInjectorWrap(import22.DynamicComponent, () {
            return import22.DynamicComponent(parentView.injectorGet(import24.SlowComponentLoader, viewData.parentIndex), _compView_0, _appEl_0);
          })
        : import22.DynamicComponent(parentView.injectorGet(import24.SlowComponentLoader, viewData.parentIndex), _compView_0, _appEl_0));
    _compView_0.create0(_DynamicComponent_0_8);
    final subscription_0 = _DynamicComponent_0_8.onLoad.listen(eventHandler1(_ctx.onLoadCustomComponent));
    init([_appEl_0], [subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.componentType;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _DynamicComponent_0_8.componentType = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.componentFactory;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _DynamicComponent_0_8.componentFactory = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.value;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _DynamicComponent_0_8.value = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _DynamicComponent_0_8.ngAfterChanges();
    }
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

AppView<void> viewFactory_MaterialSelectItemComponent7<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponent7<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialSelectItemComponentHost = const [];

class _ViewMaterialSelectItemComponentHost0<T> extends AppView<import2.MaterialSelectItemComponent<T>> {
  ViewMaterialSelectItemComponent0<T> _compView_0;
  import2.MaterialSelectItemComponent<T> _MaterialSelectItemComponent_0_5;
  _ViewMaterialSelectItemComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialSelectItemComponent<T>> build() {
    _compView_0 = ViewMaterialSelectItemComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialSelectItemComponent_0_5 = (import9.isDevMode
        ? import23.debugInjectorWrap(import2.MaterialSelectItemComponent, () {
            return import2.MaterialSelectItemComponent(rootEl, this.injectorGetOptional(import25.DropdownHandle, viewData.parentIndex), this.injectorGetOptional(import26.ActivationHandler, viewData.parentIndex), _compView_0, null);
          })
        : import2.MaterialSelectItemComponent(rootEl, this.injectorGetOptional(import25.DropdownHandle, viewData.parentIndex), this.injectorGetOptional(import26.ActivationHandler, viewData.parentIndex), _compView_0, null));
    _compView_0.create(_MaterialSelectItemComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialSelectItemComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import27.SelectionItem) || identical(token, import16.HasDisabled)) || identical(token, import28.HasRenderer)) && (0 == nodeIndex))) {
      return _MaterialSelectItemComponent_0_5;
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
    _MaterialSelectItemComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialSelectItemComponent<T>> viewFactory_MaterialSelectItemComponentHost0<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectItemComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialSelectItemComponent, MaterialSelectItemComponentNgFactory);
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
  _ref11.initReflector();
  _ref12.initReflector();
  _ref13.initReflector();
}
