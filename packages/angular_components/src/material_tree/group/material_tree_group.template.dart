// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_tree_group.dart';
export 'material_tree_group.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/dynamic_component/dynamic_component.template.dart' as _ref2;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref3;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as _ref4;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref5;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref6;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref7;
import 'package:angular_components/src/material_tree/material_tree_node.template.dart' as _ref8;
import 'package:angular_components/src/material_tree/material_tree_root.template.dart' as _ref9;
import 'package:angular_components/src/material_tree/group/material_tree_group.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_tree_group.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import6;
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import9;
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import14;
import '../../../button_decorator/button_decorator.template.dart' as import15;
import '../../../focus/keyboard_only_focus_indicator.dart' as import16;
import '../../../button_decorator/button_decorator.dart' as import17;
import 'package:angular/src/di/errors.dart' as import18;
import '../../../utils/browser/dom_service/dom_service.dart' as import19;
import 'package:angular/src/runtime/interpolate.dart' as import20;
import '../../../material_checkbox/material_checkbox.template.dart' as import21;
import '../../../material_checkbox/material_checkbox.dart' as import22;
import '../../../interfaces/has_disabled.dart' as import23;
import '../../../material_icon/material_icon.template.dart' as import24;
import '../../../material_icon/material_icon.dart' as import25;
import '../../../dynamic_component/dynamic_component.template.dart' as import26;
import '../../../dynamic_component/dynamic_component.dart' as import27;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as import28;
import 'package:angular/src/runtime/text_binding.dart' as import29;
import '../material_tree_root.dart' as import30;
import '../../../mixins/material_dropdown_base.dart' as import31;
import 'package:angular/src/core/di/opaque_token.dart' as import32;
import '../../../model/selection/selection_options.dart' as import33;

final List<dynamic> styles$MaterialTreeGroupComponent = [import0.styles];

class ViewMaterialTreeGroupComponent0<T> extends AppView<import2.MaterialTreeGroupComponent<T>> {
  ViewContainer _appEl_1;
  import4.NgFor _NgFor_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  var _expr_0;
  static import6.ComponentStyles _componentStyles;
  ViewMaterialTreeGroupComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import9.document.createElement('material-tree-group');
    import10.updateAttribute(rootEl, 'role', import2.MaterialTreeGroupComponent.hostRole);
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:angular_components/lib/src/material_tree/group/material_tree_group.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialTreeGroupComponent<T>> build() {
    final _rootEl = rootEl;
    final import9.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import9.document;
    final _el_0 = import10.appendElement(doc, parentRenderNode, 'ul');
    addShimC(_el_0);
    final _anchor_1 = import10.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent1<T>(parentView, parentIndex);
    });
    _NgFor_1_9 = import4.NgFor(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import10.appendAnchor(_el_0);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent9<T>(parentView, parentIndex);
    });
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.visibleGroup;
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _NgFor_1_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import14.AppViewUtils.throwOnChanges)) {
      _NgFor_1_9.ngDoCheck();
    }
    _NgIf_2_9.ngIf = _ctx.viewMoreLinkVisible;
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    if (firstCheck) {
      if (!identical(_ctx.isMaterialTreeGroup, null)) {
        import10.updateClassBindingNonHtml(rootEl, 'material-tree-group', _ctx.isMaterialTreeGroup);
      }
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import6.ComponentStyles.scoped(styles$MaterialTreeGroupComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialTreeGroupComponent> _MaterialTreeGroupComponentNgFactory = const ComponentFactory('material-tree-group', viewFactory_MaterialTreeGroupComponentHost0);
ComponentFactory<import2.MaterialTreeGroupComponent> get MaterialTreeGroupComponentNgFactory {
  return _MaterialTreeGroupComponentNgFactory;
}

class _ViewMaterialTreeGroupComponent1<T> extends AppView<import2.MaterialTreeGroupComponent<T>> {
  import15.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import16.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_6;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  ViewContainer _appEl_12;
  import4.NgFor _NgFor_12_9;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  bool _expr_6;
  bool _expr_7;
  bool _expr_8;
  var _expr_12;
  import9.Element _el_0;
  import9.DivElement _el_1;
  import9.DivElement _el_2;
  import9.DivElement _el_4;
  _ViewMaterialTreeGroupComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent<T>> build() {
    final doc = import9.document;
    _el_0 = doc.createElement('li');
    import10.setAttribute(_el_0, 'buttonDecorator', '');
    this.updateChildClass(_el_0, 'material-tree-option');
    import10.setAttribute(_el_0, 'keyboardOnlyFocusIndicator', '');
    addShimE(_el_0);
    _ButtonDirective_0_5 = import15.ButtonDirectiveNgCd(import17.ButtonDirective(_el_0, null));
    _KeyboardOnlyFocusIndicatorDirective_0_6 = (import11.isDevMode
        ? import18.debugInjectorWrap(import16.KeyboardOnlyFocusIndicatorDirective, () {
            return import16.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.injectorGet(import19.DomService, parentView.viewData.parentIndex));
          })
        : import16.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.injectorGet(import19.DomService, parentView.viewData.parentIndex)));
    _el_1 = import10.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'material-tree-item');
    import10.setAttribute(_el_1, 'role', 'treeitem');
    addShimC(_el_1);
    _el_2 = import10.appendDiv(doc, _el_1);
    this.updateChildClass(_el_2, 'material-tree-shift');
    addShimC(_el_2);
    final _anchor_3 = import10.appendAnchor(_el_2);
    _appEl_3 = ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent2<T>(parentView, parentIndex);
    });
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    _el_4 = import10.appendDiv(doc, _el_2);
    this.updateChildClass(_el_4, 'material-tree-border');
    addShimC(_el_4);
    final _text_5 = import10.appendText(_el_2, ' ');
    final _anchor_6 = import10.appendAnchor(_el_2);
    _appEl_6 = ViewContainer(6, 2, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent5<T>(parentView, parentIndex);
    });
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    final _anchor_7 = import10.appendAnchor(_el_2);
    _appEl_7 = ViewContainer(7, 2, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent6<T>(parentView, parentIndex);
    });
    _NgIf_7_9 = NgIf(_appEl_7, _TemplateRef_7_8);
    final _text_8 = import10.appendText(_el_2, ' ');
    final _text_9 = import10.appendText(_el_2, ' ');
    final _anchor_10 = import10.appendAnchor(_el_2);
    _appEl_10 = ViewContainer(10, 2, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(_appEl_10, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent7<T>(parentView, parentIndex);
    });
    _NgIf_10_9 = NgIf(_appEl_10, _TemplateRef_10_8);
    final _text_11 = import10.appendText(_el_0, ' ');
    final _anchor_12 = import10.appendAnchor(_el_0);
    _appEl_12 = ViewContainer(12, 0, this, _anchor_12);
    TemplateRef _TemplateRef_12_8 = TemplateRef(_appEl_12, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent8<T>(parentView, parentIndex);
    });
    _NgFor_12_9 = import4.NgFor(_appEl_12, _TemplateRef_12_8);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_1));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    _el_0.addEventListener('keydown', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_6.keydown));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction));
    _el_0.addEventListener('focus', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_6.onFocus));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.ButtonDirective) && (nodeIndex <= 12))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_option = locals['\$implicit'];
    _NgIf_3_9.ngIf = _ctx.showCheckbox(local_option);
    _NgIf_6_9.ngIf = _ctx.useComponentRenderer;
    _NgIf_7_9.ngIf = (!_ctx.useComponentRenderer);
    _NgIf_10_9.ngIf = _ctx.hasChildren(local_option);
    final currVal_12 = _ctx.getChildGroups(local_option);
    if (import14.checkBinding(_expr_12, currVal_12)) {
      _NgFor_12_9.ngForOf = currVal_12;
      _expr_12 = currVal_12;
    }
    if ((!import14.AppViewUtils.throwOnChanges)) {
      _NgFor_12_9.ngDoCheck();
    }
    _appEl_3.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    _appEl_10.detectChangesInNestedViews();
    _appEl_12.detectChangesInNestedViews();
    final currVal_0 = _ctx.isSelected(local_option);
    if (import14.checkBinding(_expr_0, currVal_0)) {
      import10.updateClassBinding(_el_0, 'selected', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isSelectable(local_option);
    if (import14.checkBinding(_expr_1, currVal_1)) {
      import10.updateClassBinding(_el_0, 'selectable', currVal_1);
      _expr_1 = currVal_1;
    }
    _ButtonDirective_0_5.detectHostChanges(this, _el_0);
    final currVal_2 = _ctx.getIndent(local_option);
    if (import14.checkBinding(_expr_2, currVal_2)) {
      _el_1.style.setProperty('padding-left', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = import20.interpolate0(_ctx.isSelected(local_option));
    if (import14.checkBinding(_expr_3, currVal_3)) {
      import10.setAttribute(_el_1, 'aria-selected', currVal_3);
      _expr_3 = currVal_3;
    }
    if (firstCheck) {
      if (!identical(_ctx.fixedPadding, null)) {
        _el_2.style.setProperty('padding-left', _ctx.fixedPadding);
      }
    }
    final currVal_6 = _ctx.hasChildren(local_option);
    if (import14.checkBinding(_expr_6, currVal_6)) {
      import10.updateClassBinding(_el_4, 'is-parent', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.isExpanded(local_option);
    if (import14.checkBinding(_expr_7, currVal_7)) {
      import10.updateClassBinding(_el_4, 'is-expanded', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = (_ctx.level == 0);
    if (import14.checkBinding(_expr_8, currVal_8)) {
      import10.updateClassBinding(_el_4, 'root-border', currVal_8);
      _expr_8 = currVal_8;
    }
  }

  @override
  void destroyInternal() {
    _appEl_3.destroyNestedViews();
    _appEl_6.destroyNestedViews();
    _appEl_7.destroyNestedViews();
    _appEl_10.destroyNestedViews();
    _appEl_12.destroyNestedViews();
  }

  void _handle_trigger_0_0($event) {
    final local_option = locals['\$implicit'];
    final _ctx = ctx;
    _ctx.handleSelectionOrExpansion($event, local_option);
  }

  void _handle_click_0_1($event) {
    _ButtonDirective_0_5.instance.handleClick($event);
    _KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction();
  }
}

AppView<void> viewFactory_MaterialTreeGroupComponent1<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent2<T> extends AppView<import2.MaterialTreeGroupComponent<T>> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  _ViewMaterialTreeGroupComponent2(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent<T>> build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'tree-selection-state');
    addShimC(_el_0);
    final _anchor_1 = import10.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent3<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import10.appendAnchor(_el_0);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupComponent4<T>(parentView, parentIndex);
    });
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_option = parentView.locals['\$implicit'];
    _NgIf_1_9.ngIf = _ctx.isMultiSelect;
    _NgIf_2_9.ngIf = ((!_ctx.isMultiSelect) && _ctx.isSelected(local_option));
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialTreeGroupComponent2<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent3<T> extends AppView<import2.MaterialTreeGroupComponent<T>> {
  import21.ViewMaterialCheckboxComponent0 _compView_0;
  import22.MaterialCheckboxComponent _MaterialCheckboxComponent_0_5;
  bool _expr_0;
  bool _expr_2;
  _ViewMaterialTreeGroupComponent3(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent<T>> build() {
    _compView_0 = import21.ViewMaterialCheckboxComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, import20.interpolateString2('', 'tree-selection-state', ' ', import22.MaterialCheckboxComponent.hostClass, ''));
    addShimC(_el_0);
    _MaterialCheckboxComponent_0_5 = import22.MaterialCheckboxComponent(_el_0, _compView_0, null, null, null);
    _compView_0.create(_MaterialCheckboxComponent_0_5, [const []]);
    init1(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import23.HasDisabled) && (0 == nodeIndex))) {
      return _MaterialCheckboxComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_option = parentView.parentView.locals['\$implicit'];
    changed = false;
    if (firstCheck) {
      _MaterialCheckboxComponent_0_5.readOnly = true;
      changed = true;
    }
    final currVal_0 = (_ctx.isReadOnly || _ctx.showDisabledCheckbox(local_option));
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _MaterialCheckboxComponent_0_5.disabled = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_2 = _ctx.isSelected(local_option);
    if (import14.checkBinding(_expr_2, currVal_2)) {
      _MaterialCheckboxComponent_0_5.checked = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
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

AppView<void> viewFactory_MaterialTreeGroupComponent3<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent3<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent4<T> extends AppView<import2.MaterialTreeGroupComponent<T>> {
  import24.ViewMaterialIconComponent0 _compView_0;
  import25.MaterialIconComponent _MaterialIconComponent_0_5;
  _ViewMaterialTreeGroupComponent4(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent<T>> build() {
    _compView_0 = import24.ViewMaterialIconComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'tree-selection-state');
    import10.setAttribute(_el_0, 'icon', 'check');
    addShimC(_el_0);
    _MaterialIconComponent_0_5 = import25.MaterialIconComponent(_el_0);
    _compView_0.create0(_MaterialIconComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_0_5.icon = 'check';
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

AppView<void> viewFactory_MaterialTreeGroupComponent4<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent4<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent5<T> extends AppView<import2.MaterialTreeGroupComponent<T>> {
  import26.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import27.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialTreeGroupComponent5(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent<T>> build() {
    _compView_0 = import26.ViewDynamicComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'item component');
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _DynamicComponent_0_8 = (import11.isDevMode
        ? import18.debugInjectorWrap(import27.DynamicComponent, () {
            return import27.DynamicComponent(parentView.parentView.parentView.injectorGet(import28.SlowComponentLoader, parentView.parentView.viewData.parentIndex), _compView_0, _appEl_0);
          })
        : import27.DynamicComponent(parentView.parentView.parentView.injectorGet(import28.SlowComponentLoader, parentView.parentView.viewData.parentIndex), _compView_0, _appEl_0));
    _compView_0.create0(_DynamicComponent_0_8);
    init1(_appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    final local_option = parentView.locals['\$implicit'];
    changed = false;
    final currVal_0 = _ctx.getComponentType(local_option);
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _DynamicComponent_0_8.componentType = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.getComponentFactory(local_option);
    if (import14.checkBinding(_expr_1, currVal_1)) {
      _DynamicComponent_0_8.componentFactory = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = local_option;
    if (import14.checkBinding(_expr_2, currVal_2)) {
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

AppView<void> viewFactory_MaterialTreeGroupComponent5<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent5<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent6<T> extends AppView<import2.MaterialTreeGroupComponent<T>> {
  final import29.TextBinding _textBinding_1 = import29.TextBinding();
  bool _expr_0;
  bool _expr_1;
  import9.Element _el_0;
  _ViewMaterialTreeGroupComponent6(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent<T>> build() {
    final doc = import9.document;
    _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'text');
    addShimE(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_option = parentView.locals['\$implicit'];
    final bool currVal_0 = (!_ctx.showDisabledCheckbox(local_option));
    if (import14.checkBinding(_expr_0, currVal_0)) {
      import10.updateClassBinding(_el_0, 'item', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.showDisabledCheckbox(local_option);
    if (import14.checkBinding(_expr_1, currVal_1)) {
      import10.updateClassBinding(_el_0, 'disabled-item', currVal_1);
      _expr_1 = currVal_1;
    }
    _textBinding_1.updateText(import20.interpolateString0(_ctx.getOptionAsText(local_option)));
  }
}

AppView<void> viewFactory_MaterialTreeGroupComponent6<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent6<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent7<T> extends AppView<import2.MaterialTreeGroupComponent<T>> {
  import24.ViewMaterialIconComponent0 _compView_0;
  import15.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import25.MaterialIconComponent _MaterialIconComponent_0_6;
  bool _expr_0;
  var _expr_1;
  import9.Element _el_0;
  _ViewMaterialTreeGroupComponent7(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent<T>> build() {
    _compView_0 = import24.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    import10.setAttribute(_el_0, 'buttonDecorator', '');
    this.updateChildClassNonHtml(_el_0, 'tree-expansion-state');
    addShimC(_el_0);
    _ButtonDirective_0_5 = import15.ButtonDirectiveNgCd(import17.ButtonDirective(_el_0, null));
    _MaterialIconComponent_0_6 = import25.MaterialIconComponent(_el_0);
    _compView_0.create0(_MaterialIconComponent_0_6);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.ButtonDirective) && (0 == nodeIndex))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    final local_option = parentView.locals['\$implicit'];
    changed = false;
    final currVal_1 = (_ctx.isExpanded(local_option) ? 'expand_less' : 'expand_more');
    if (import14.checkBinding(_expr_1, currVal_1)) {
      _MaterialIconComponent_0_6.icon = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.isExpanded(local_option);
    if (import14.checkBinding(_expr_0, currVal_0)) {
      import10.updateClassBindingNonHtml(_el_0, 'expanded', currVal_0);
      _expr_0 = currVal_0;
    }
    _ButtonDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }

  void _handle_trigger_0_0($event) {
    final local_option = parentView.locals['\$implicit'];
    final _ctx = ctx;
    _ctx.handleExpansion($event, local_option);
  }
}

AppView<void> viewFactory_MaterialTreeGroupComponent7<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent7<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent8<T> extends AppView<import2.MaterialTreeGroupComponent<T>> {
  ViewMaterialTreeGroupComponent0<T> _compView_0;
  import2.MaterialTreeGroupComponent<T> _MaterialTreeGroupComponent_0_5;
  bool _expr_0;
  var _expr_1;
  int _expr_2;
  bool _expr_3;
  bool _expr_4;
  int _expr_5;
  _ViewMaterialTreeGroupComponent8(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent<T>> build() {
    _compView_0 = ViewMaterialTreeGroupComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'child-tree');
    addShimC(_el_0);
    _MaterialTreeGroupComponent_0_5 = (import11.isDevMode
        ? import18.debugInjectorWrap(import2.MaterialTreeGroupComponent, () {
            return import2.MaterialTreeGroupComponent(parentView.parentView.parentView.injectorGet(import30.MaterialTreeRoot, parentView.parentView.viewData.parentIndex), _compView_0, parentView.parentView.parentView.injectorGetOptional(import31.DropdownHandle, parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGetOptional(const import32.OpaqueToken<dynamic>('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'), parentView.parentView.viewData.parentIndex));
          })
        : import2.MaterialTreeGroupComponent(parentView.parentView.parentView.injectorGet(import30.MaterialTreeRoot, parentView.parentView.viewData.parentIndex), _compView_0, parentView.parentView.parentView.injectorGetOptional(import31.DropdownHandle, parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGetOptional(const import32.OpaqueToken<dynamic>('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'), parentView.parentView.viewData.parentIndex)));
    _compView_0.create0(_MaterialTreeGroupComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_subGroup = import11.unsafeCast<import33.OptionGroup<dynamic>>(locals['\$implicit']);
    final local_option = parentView.locals['\$implicit'];
    final currVal_0 = _ctx.expandAll;
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _MaterialTreeGroupComponent_0_5.expandAll = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = local_subGroup;
    if (import14.checkBinding(_expr_1, currVal_1)) {
      _MaterialTreeGroupComponent_0_5.group = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.level + 1);
    if (import14.checkBinding(_expr_2, currVal_2)) {
      _MaterialTreeGroupComponent_0_5.level = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.showCheckbox(local_option);
    if (import14.checkBinding(_expr_3, currVal_3)) {
      _MaterialTreeGroupComponent_0_5.parentHasCheckbox = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.allowParentSingleSelection;
    if (import14.checkBinding(_expr_4, currVal_4)) {
      _MaterialTreeGroupComponent_0_5.allowParentSingleSelection = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.maxInitialOptionsShown;
    if (import14.checkBinding(_expr_5, currVal_5)) {
      _MaterialTreeGroupComponent_0_5.maxInitialOptionsShown = currVal_5;
      _expr_5 = currVal_5;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialTreeGroupComponent_0_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_MaterialTreeGroupComponent8<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent8<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupComponent9<T> extends AppView<import2.MaterialTreeGroupComponent<T>> {
  import15.ButtonDirectiveNgCd _ButtonDirective_3_5;
  var _expr_0;
  import9.DivElement _el_1;
  import9.DivElement _el_2;
  import9.AnchorElement _el_3;
  _ViewMaterialTreeGroupComponent9(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupComponent<T>> build() {
    final _ctx = ctx;
    final doc = import9.document;
    final _el_0 = doc.createElement('li');
    addShimE(_el_0);
    _el_1 = import10.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'view-more-link-item');
    addShimC(_el_1);
    _el_2 = import10.appendDiv(doc, _el_1);
    this.updateChildClass(_el_2, 'material-tree-shift');
    addShimC(_el_2);
    _el_3 = import10.appendElement(doc, _el_2, 'a');
    import10.setAttribute(_el_3, 'buttonDecorator', '');
    this.updateChildClass(_el_3, 'view-more-link');
    import10.setAttribute(_el_3, 'href', '#');
    addShimC(_el_3);
    _ButtonDirective_3_5 = import15.ButtonDirectiveNgCd(import17.ButtonDirective(_el_3, null));
    final _text_4 = import10.appendText(_el_3, import20.interpolateString0(import2.MaterialTreeGroupComponent.viewMoreMsg));
    _el_3.addEventListener('click', eventHandler1(_ButtonDirective_3_5.instance.handleClick));
    _el_3.addEventListener('keypress', eventHandler1(_ButtonDirective_3_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_3_5.instance.trigger.listen(eventHandler1(_ctx.viewMoreOptions));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.ButtonDirective) && ((3 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _ButtonDirective_3_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.getIndent(_ctx.visibleGroup.last);
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _el_1.style.setProperty('padding-left', currVal_0);
      _expr_0 = currVal_0;
    }
    if (firstCheck) {
      if (!identical(_ctx.fixedPadding, null)) {
        _el_2.style.setProperty('padding-left', _ctx.fixedPadding);
      }
    }
    _ButtonDirective_3_5.detectHostChanges(this, _el_3);
  }
}

AppView<void> viewFactory_MaterialTreeGroupComponent9<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponent9<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeGroupComponentHost = const [];

class _ViewMaterialTreeGroupComponentHost0<T> extends AppView<import2.MaterialTreeGroupComponent<T>> {
  ViewMaterialTreeGroupComponent0<T> _compView_0;
  import2.MaterialTreeGroupComponent<T> _MaterialTreeGroupComponent_0_5;
  _ViewMaterialTreeGroupComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialTreeGroupComponent<T>> build() {
    _compView_0 = ViewMaterialTreeGroupComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTreeGroupComponent_0_5 = (import11.isDevMode
        ? import18.debugInjectorWrap(import2.MaterialTreeGroupComponent, () {
            return import2.MaterialTreeGroupComponent(this.injectorGet(import30.MaterialTreeRoot, viewData.parentIndex), _compView_0, this.injectorGetOptional(import31.DropdownHandle, viewData.parentIndex), this.injectorGetOptional(const import32.OpaqueToken<dynamic>('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'), viewData.parentIndex));
          })
        : import2.MaterialTreeGroupComponent(this.injectorGet(import30.MaterialTreeRoot, viewData.parentIndex), _compView_0, this.injectorGetOptional(import31.DropdownHandle, viewData.parentIndex), this.injectorGetOptional(const import32.OpaqueToken<dynamic>('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'), viewData.parentIndex)));
    _compView_0.create(_MaterialTreeGroupComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialTreeGroupComponent_0_5);
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
    _MaterialTreeGroupComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialTreeGroupComponent<T>> viewFactory_MaterialTreeGroupComponentHost0<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTreeGroupComponent, MaterialTreeGroupComponentNgFactory);
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
