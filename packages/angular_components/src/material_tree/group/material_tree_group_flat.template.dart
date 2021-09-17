// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_tree_group_flat.dart';
export 'material_tree_group_flat.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/dynamic_component/dynamic_component.template.dart' as _ref2;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as _ref3;
import 'package:angular_components/material_radio/material_radio.template.dart' as _ref4;
import 'package:angular_components/material_radio/material_radio_group.template.dart' as _ref5;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref6;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref7;
import 'package:angular_components/src/material_tree/material_tree_node.template.dart' as _ref8;
import 'package:angular_components/src/material_tree/material_tree_root.template.dart' as _ref9;
import 'package:angular_components/src/material_tree/group/material_tree_group_flat_list.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_tree_group_flat.dart' as import2;
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
import 'package:angular/src/common/directives/ng_if.dart';
import '../../../dynamic_component/dynamic_component.template.dart' as import15;
import '../../../dynamic_component/dynamic_component.dart' as import16;
import 'package:angular/src/di/errors.dart' as import17;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as import18;
import 'package:angular/src/runtime/text_binding.dart' as import19;
import 'package:angular/src/runtime/interpolate.dart' as import20;
import '../material_tree_root.dart' as import21;
import 'package:angular_components/src/material_tree/group/material_tree_group_flat_radio.scss.css.shim.dart' as import22;
import '../../../material_radio/material_radio_group.template.dart' as import23;
import '../../../material_radio/material_radio_group.dart' as import24;
import 'package:angular/src/core/zone/ng_zone.dart' as import25;
import '../../../material_radio/material_radio.template.dart' as import26;
import '../../../material_radio/material_radio.dart' as import27;
import '../../../interfaces/has_disabled.dart' as import28;
import '../../../mixins/material_dropdown_base.dart' as import29;
import 'package:angular_components/src/material_tree/group/material_tree_group_flat_check.scss.css.shim.dart' as import30;
import '../../../material_checkbox/material_checkbox.template.dart' as import31;
import '../../../material_checkbox/material_checkbox.dart' as import32;

final List<dynamic> styles$MaterialTreeGroupFlatListComponent = [import0.styles];

class ViewMaterialTreeGroupFlatListComponent0<T> extends AppView<import2.MaterialTreeGroupFlatListComponent<T>> {
  ViewContainer _appEl_0;
  import4.NgFor _NgFor_0_9;
  var _expr_0;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialTreeGroupFlatListComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('material-tree-group-flat-list');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialTreeGroupFlatListComponent<T>> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatListComponent1<T>(parentView, parentIndex);
    });
    _NgFor_0_9 = import4.NgFor(_appEl_0, _TemplateRef_0_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.group;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import13.AppViewUtils.throwOnChanges)) {
      _NgFor_0_9.ngDoCheck();
    }
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    if (firstCheck) {
      if (!identical(_ctx.isMaterialTreeGroup, null)) {
        import11.updateClassBindingNonHtml(rootEl, 'material-tree-group', _ctx.isMaterialTreeGroup);
      }
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$MaterialTreeGroupFlatListComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialTreeGroupFlatListComponent> _MaterialTreeGroupFlatListComponentNgFactory = const ComponentFactory('material-tree-group-flat-list', viewFactory_MaterialTreeGroupFlatListComponentHost0);
ComponentFactory<import2.MaterialTreeGroupFlatListComponent> get MaterialTreeGroupFlatListComponentNgFactory {
  return _MaterialTreeGroupFlatListComponentNgFactory;
}

class _ViewMaterialTreeGroupFlatListComponent1<T> extends AppView<import2.MaterialTreeGroupFlatListComponent<T>> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  _ViewMaterialTreeGroupFlatListComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatListComponent<T>> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'material-tree-option');
    addShimC(_el_0);
    final _anchor_1 = import11.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatListComponent2<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import11.appendAnchor(_el_0);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatListComponent3<T>(parentView, parentIndex);
    });
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_1_9.ngIf = _ctx.useComponentRenderer;
    _NgIf_2_9.ngIf = (!_ctx.useComponentRenderer);
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialTreeGroupFlatListComponent1<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatListComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatListComponent2<T> extends AppView<import2.MaterialTreeGroupFlatListComponent<T>> {
  import15.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import16.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialTreeGroupFlatListComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatListComponent<T>> build() {
    _compView_0 = import15.ViewDynamicComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'item component');
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _DynamicComponent_0_8 = (import9.isDevMode
        ? import17.debugInjectorWrap(import16.DynamicComponent, () {
            return import16.DynamicComponent(parentView.parentView.injectorGet(import18.SlowComponentLoader, parentView.viewData.parentIndex), _compView_0, _appEl_0);
          })
        : import16.DynamicComponent(parentView.parentView.injectorGet(import18.SlowComponentLoader, parentView.viewData.parentIndex), _compView_0, _appEl_0));
    _compView_0.create0(_DynamicComponent_0_8);
    init1(_appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    final local_option = import9.unsafeCast<T>(parentView.locals['\$implicit']);
    changed = false;
    final currVal_0 = _ctx.getComponentType(local_option);
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _DynamicComponent_0_8.componentType = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.getComponentFactory(local_option);
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _DynamicComponent_0_8.componentFactory = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = local_option;
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

AppView<void> viewFactory_MaterialTreeGroupFlatListComponent2<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatListComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatListComponent3<T> extends AppView<import2.MaterialTreeGroupFlatListComponent<T>> {
  final import19.TextBinding _textBinding_1 = import19.TextBinding();
  _ViewMaterialTreeGroupFlatListComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatListComponent<T>> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'item text');
    addShimE(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_option = import9.unsafeCast<T>(parentView.locals['\$implicit']);
    _textBinding_1.updateText(import20.interpolateString0(_ctx.getOptionAsText(local_option)));
  }
}

AppView<void> viewFactory_MaterialTreeGroupFlatListComponent3<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatListComponent3<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeGroupFlatListComponentHost = const [];

class _ViewMaterialTreeGroupFlatListComponentHost0<T> extends AppView<import2.MaterialTreeGroupFlatListComponent<T>> {
  ViewMaterialTreeGroupFlatListComponent0<T> _compView_0;
  import2.MaterialTreeGroupFlatListComponent<T> _MaterialTreeGroupFlatListComponent_0_5;
  _ViewMaterialTreeGroupFlatListComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialTreeGroupFlatListComponent<T>> build() {
    _compView_0 = ViewMaterialTreeGroupFlatListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTreeGroupFlatListComponent_0_5 = (import9.isDevMode
        ? import17.debugInjectorWrap(import2.MaterialTreeGroupFlatListComponent, () {
            return import2.MaterialTreeGroupFlatListComponent(this.injectorGet(import21.MaterialTreeRoot, viewData.parentIndex), _compView_0);
          })
        : import2.MaterialTreeGroupFlatListComponent(this.injectorGet(import21.MaterialTreeRoot, viewData.parentIndex), _compView_0));
    _compView_0.create(_MaterialTreeGroupFlatListComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialTreeGroupFlatListComponent_0_5);
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
  }
}

AppView<import2.MaterialTreeGroupFlatListComponent<T>> viewFactory_MaterialTreeGroupFlatListComponentHost0<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatListComponentHost0(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeGroupFlatRadioComponent = [import22.styles];

class ViewMaterialTreeGroupFlatRadioComponent0<T> extends AppView<import2.MaterialTreeGroupFlatRadioComponent<T>> {
  bool _query_MaterialRadioComponent_0_0_isDirty = true;
  import23.ViewMaterialRadioGroupComponent0 _compView_0;
  import24.MaterialRadioGroupComponent _MaterialRadioGroupComponent_0_5;
  ViewContainer _appEl_1;
  import4.NgFor _NgFor_1_9;
  var _expr_1;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialTreeGroupFlatRadioComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('material-tree-group-flat-radio');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialTreeGroupFlatRadioComponent<T>> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import23.ViewMaterialRadioGroupComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _MaterialRadioGroupComponent_0_5 = (import9.isDevMode
        ? import17.debugInjectorWrap(import24.MaterialRadioGroupComponent, () {
            return import24.MaterialRadioGroupComponent(parentView.injectorGet(import25.NgZone, viewData.parentIndex), null);
          })
        : import24.MaterialRadioGroupComponent(parentView.injectorGet(import25.NgZone, viewData.parentIndex), null));
    final _anchor_1 = import11.createAnchor();
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatRadioComponent1<T>(parentView, parentIndex);
    });
    _NgFor_1_9 = import4.NgFor(_appEl_1, _TemplateRef_1_8);
    _compView_0.create(_MaterialRadioGroupComponent_0_5, [
      [_appEl_1]
    ]);
    init0();
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import24.MaterialRadioGroupComponent) && (nodeIndex <= 1))) {
      return _MaterialRadioGroupComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      if (!identical(_ctx.selectionModel, null)) {
        _MaterialRadioGroupComponent_0_5.valueSelection = _ctx.selectionModel;
        changed = true;
      }
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_1 = _ctx.group;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _NgFor_1_9.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    if ((!import13.AppViewUtils.throwOnChanges)) {
      _NgFor_1_9.ngDoCheck();
    }
    _appEl_1.detectChangesInNestedViews();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (_query_MaterialRadioComponent_0_0_isDirty) {
        _MaterialRadioGroupComponent_0_5.radioComponents = _appEl_1.mapNestedViews((_ViewMaterialTreeGroupFlatRadioComponent1 nestedView) {
          return [nestedView._MaterialRadioComponent_0_5];
        });
        _query_MaterialRadioComponent_0_0_isDirty = false;
      }
      if (firstCheck) {
        _MaterialRadioGroupComponent_0_5.ngAfterContentInit();
      }
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _compView_0.destroyInternalState();
    _MaterialRadioGroupComponent_0_5.ngOnDestroy();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    if (firstCheck) {
      if (!identical(_ctx.isMaterialTreeGroup, null)) {
        import11.updateClassBindingNonHtml(rootEl, 'material-tree-group', _ctx.isMaterialTreeGroup);
      }
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$MaterialTreeGroupFlatRadioComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialTreeGroupFlatRadioComponent> _MaterialTreeGroupFlatRadioComponentNgFactory = const ComponentFactory('material-tree-group-flat-radio', viewFactory_MaterialTreeGroupFlatRadioComponentHost0);
ComponentFactory<import2.MaterialTreeGroupFlatRadioComponent> get MaterialTreeGroupFlatRadioComponentNgFactory {
  return _MaterialTreeGroupFlatRadioComponentNgFactory;
}

class _ViewMaterialTreeGroupFlatRadioComponent1<T> extends AppView<import2.MaterialTreeGroupFlatRadioComponent<T>> {
  import26.ViewMaterialRadioComponent0 _compView_0;
  import27.MaterialRadioComponent _MaterialRadioComponent_0_5;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  bool _expr_3;
  import8.Element _el_0;
  _ViewMaterialTreeGroupFlatRadioComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatRadioComponent<T>> build() {
    _compView_0 = import26.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, import20.interpolateString2('', 'material-tree-option tree-selection-state', ' ', import27.MaterialRadioComponent.hostClass, ''));
    import11.setAttribute(_el_0, 'role', 'option');
    addShimC(_el_0);
    _MaterialRadioComponent_0_5 = import27.MaterialRadioComponent(_el_0, _compView_0, import9.unsafeCast<ViewMaterialTreeGroupFlatRadioComponent0>(parentView)._MaterialRadioGroupComponent_0_5, null, 'option');
    final _anchor_1 = import11.createAnchor();
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatRadioComponent2<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import11.createAnchor();
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatRadioComponent3<T>(parentView, parentIndex);
    });
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    _compView_0.create(_MaterialRadioComponent_0_5, [
      [_appEl_1, _appEl_2]
    ]);
    init1(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import28.HasDisabled) && (nodeIndex <= 2))) {
      return _MaterialRadioComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_option = import9.unsafeCast<T>(locals['\$implicit']);
    changed = false;
    final currVal_2 = local_option;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _MaterialRadioComponent_0_5.value = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.isReadOnly;
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _MaterialRadioComponent_0_5.disabled = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _NgIf_1_9.ngIf = _ctx.useComponentRenderer;
    _NgIf_2_9.ngIf = (!_ctx.useComponentRenderer);
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    final currVal_0 = _ctx.isSelected(local_option);
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.updateClassBindingNonHtml(_el_0, 'selected', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isSelectable(local_option);
    if (import13.checkBinding(_expr_1, currVal_1)) {
      import11.updateClassBindingNonHtml(_el_0, 'selectable', currVal_1);
      _expr_1 = currVal_1;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<ViewMaterialTreeGroupFlatRadioComponent0>(parentView)._query_MaterialRadioComponent_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _compView_0.destroyInternalState();
    _MaterialRadioComponent_0_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_MaterialTreeGroupFlatRadioComponent1<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatRadioComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatRadioComponent2<T> extends AppView<import2.MaterialTreeGroupFlatRadioComponent<T>> {
  import15.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import16.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialTreeGroupFlatRadioComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatRadioComponent<T>> build() {
    _compView_0 = import15.ViewDynamicComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'item component');
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _DynamicComponent_0_8 = (import9.isDevMode
        ? import17.debugInjectorWrap(import16.DynamicComponent, () {
            return import16.DynamicComponent(parentView.parentView.parentView.injectorGet(import18.SlowComponentLoader, parentView.parentView.viewData.parentIndex), _compView_0, _appEl_0);
          })
        : import16.DynamicComponent(parentView.parentView.parentView.injectorGet(import18.SlowComponentLoader, parentView.parentView.viewData.parentIndex), _compView_0, _appEl_0));
    _compView_0.create0(_DynamicComponent_0_8);
    init1(_appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    final local_option = import9.unsafeCast<T>(parentView.locals['\$implicit']);
    changed = false;
    final currVal_0 = _ctx.getComponentType(local_option);
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _DynamicComponent_0_8.componentType = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.getComponentFactory(local_option);
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _DynamicComponent_0_8.componentFactory = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = local_option;
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

AppView<void> viewFactory_MaterialTreeGroupFlatRadioComponent2<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatRadioComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatRadioComponent3<T> extends AppView<import2.MaterialTreeGroupFlatRadioComponent<T>> {
  final import19.TextBinding _textBinding_1 = import19.TextBinding();
  _ViewMaterialTreeGroupFlatRadioComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatRadioComponent<T>> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'item text');
    addShimE(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_option = import9.unsafeCast<T>(parentView.locals['\$implicit']);
    _textBinding_1.updateText(import20.interpolateString0(_ctx.getOptionAsText(local_option)));
  }
}

AppView<void> viewFactory_MaterialTreeGroupFlatRadioComponent3<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatRadioComponent3<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeGroupFlatRadioComponentHost = const [];

class _ViewMaterialTreeGroupFlatRadioComponentHost0<T> extends AppView<import2.MaterialTreeGroupFlatRadioComponent<T>> {
  ViewMaterialTreeGroupFlatRadioComponent0<T> _compView_0;
  import2.MaterialTreeGroupFlatRadioComponent<T> _MaterialTreeGroupFlatRadioComponent_0_5;
  _ViewMaterialTreeGroupFlatRadioComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialTreeGroupFlatRadioComponent<T>> build() {
    _compView_0 = ViewMaterialTreeGroupFlatRadioComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTreeGroupFlatRadioComponent_0_5 = (import9.isDevMode
        ? import17.debugInjectorWrap(import2.MaterialTreeGroupFlatRadioComponent, () {
            return import2.MaterialTreeGroupFlatRadioComponent(this.injectorGet(import21.MaterialTreeRoot, viewData.parentIndex), _compView_0, this.injectorGetOptional(import29.DropdownHandle, viewData.parentIndex));
          })
        : import2.MaterialTreeGroupFlatRadioComponent(this.injectorGet(import21.MaterialTreeRoot, viewData.parentIndex), _compView_0, this.injectorGetOptional(import29.DropdownHandle, viewData.parentIndex)));
    _compView_0.create(_MaterialTreeGroupFlatRadioComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialTreeGroupFlatRadioComponent_0_5);
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
  }
}

AppView<import2.MaterialTreeGroupFlatRadioComponent<T>> viewFactory_MaterialTreeGroupFlatRadioComponentHost0<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatRadioComponentHost0(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeGroupFlatCheckComponent = [import30.styles];

class ViewMaterialTreeGroupFlatCheckComponent0<T> extends AppView<import2.MaterialTreeGroupFlatCheckComponent<T>> {
  ViewContainer _appEl_0;
  import4.NgFor _NgFor_0_9;
  var _expr_0;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialTreeGroupFlatCheckComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('material-tree-group-flat-check');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/src/material_tree/group/material_tree_group_flat.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialTreeGroupFlatCheckComponent<T>> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatCheckComponent1<T>(parentView, parentIndex);
    });
    _NgFor_0_9 = import4.NgFor(_appEl_0, _TemplateRef_0_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.group;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import13.AppViewUtils.throwOnChanges)) {
      _NgFor_0_9.ngDoCheck();
    }
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    if (firstCheck) {
      if (!identical(_ctx.isMaterialTreeGroup, null)) {
        import11.updateClassBindingNonHtml(rootEl, 'material-tree-group', _ctx.isMaterialTreeGroup);
      }
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$MaterialTreeGroupFlatCheckComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialTreeGroupFlatCheckComponent> _MaterialTreeGroupFlatCheckComponentNgFactory = const ComponentFactory('material-tree-group-flat-check', viewFactory_MaterialTreeGroupFlatCheckComponentHost0);
ComponentFactory<import2.MaterialTreeGroupFlatCheckComponent> get MaterialTreeGroupFlatCheckComponentNgFactory {
  return _MaterialTreeGroupFlatCheckComponentNgFactory;
}

class _ViewMaterialTreeGroupFlatCheckComponent1<T> extends AppView<import2.MaterialTreeGroupFlatCheckComponent<T>> {
  import31.ViewMaterialCheckboxComponent0 _compView_0;
  import32.MaterialCheckboxComponent _MaterialCheckboxComponent_0_5;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  bool _expr_3;
  import8.Element _el_0;
  _ViewMaterialTreeGroupFlatCheckComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatCheckComponent<T>> build() {
    _compView_0 = import31.ViewMaterialCheckboxComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, import20.interpolateString2('', 'material-tree-option tree-selection-state', ' ', import32.MaterialCheckboxComponent.hostClass, ''));
    import11.setAttribute(_el_0, 'role', 'option');
    addShimC(_el_0);
    _MaterialCheckboxComponent_0_5 = import32.MaterialCheckboxComponent(_el_0, _compView_0, null, null, 'option');
    final _anchor_1 = import11.createAnchor();
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatCheckComponent2<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import11.createAnchor();
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialTreeGroupFlatCheckComponent3<T>(parentView, parentIndex);
    });
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    _compView_0.create(_MaterialCheckboxComponent_0_5, [
      [_appEl_1, _appEl_2]
    ]);
    final subscription_0 = _MaterialCheckboxComponent_0_5.onChecked.listen(eventHandler1(_handle_checkedChange_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import28.HasDisabled) && (nodeIndex <= 2))) {
      return _MaterialCheckboxComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_option = import9.unsafeCast<T>(locals['\$implicit']);
    changed = false;
    final currVal_2 = (_ctx.isReadOnly || _ctx.showDisabledCheckbox(local_option));
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _MaterialCheckboxComponent_0_5.disabled = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.isSelected(local_option);
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _MaterialCheckboxComponent_0_5.checked = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _NgIf_1_9.ngIf = _ctx.useComponentRenderer;
    _NgIf_2_9.ngIf = (!_ctx.useComponentRenderer);
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    final currVal_0 = _ctx.isSelected(local_option);
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.updateClassBindingNonHtml(_el_0, 'selected', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isSelectable(local_option);
    if (import13.checkBinding(_expr_1, currVal_1)) {
      import11.updateClassBindingNonHtml(_el_0, 'selectable', currVal_1);
      _expr_1 = currVal_1;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _compView_0.destroyInternalState();
    _MaterialCheckboxComponent_0_5.ngOnDestroy();
  }

  void _handle_checkedChange_0_0($event) {
    final local_option = import9.unsafeCast<T>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.setSelectionState(local_option, $event);
  }
}

AppView<void> viewFactory_MaterialTreeGroupFlatCheckComponent1<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatCheckComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatCheckComponent2<T> extends AppView<import2.MaterialTreeGroupFlatCheckComponent<T>> {
  import15.ViewDynamicComponent0 _compView_0;
  ViewContainer _appEl_0;
  import16.DynamicComponent _DynamicComponent_0_8;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewMaterialTreeGroupFlatCheckComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatCheckComponent<T>> build() {
    _compView_0 = import15.ViewDynamicComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'item component');
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _DynamicComponent_0_8 = (import9.isDevMode
        ? import17.debugInjectorWrap(import16.DynamicComponent, () {
            return import16.DynamicComponent(parentView.parentView.injectorGet(import18.SlowComponentLoader, parentView.viewData.parentIndex), _compView_0, _appEl_0);
          })
        : import16.DynamicComponent(parentView.parentView.injectorGet(import18.SlowComponentLoader, parentView.viewData.parentIndex), _compView_0, _appEl_0));
    _compView_0.create0(_DynamicComponent_0_8);
    init1(_appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    final local_option = import9.unsafeCast<T>(parentView.locals['\$implicit']);
    changed = false;
    final currVal_0 = _ctx.getComponentType(local_option);
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _DynamicComponent_0_8.componentType = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.getComponentFactory(local_option);
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _DynamicComponent_0_8.componentFactory = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = local_option;
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

AppView<void> viewFactory_MaterialTreeGroupFlatCheckComponent2<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatCheckComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialTreeGroupFlatCheckComponent3<T> extends AppView<import2.MaterialTreeGroupFlatCheckComponent<T>> {
  final import19.TextBinding _textBinding_1 = import19.TextBinding();
  _ViewMaterialTreeGroupFlatCheckComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeGroupFlatCheckComponent<T>> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'item text');
    addShimE(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_option = import9.unsafeCast<T>(parentView.locals['\$implicit']);
    _textBinding_1.updateText(import20.interpolateString0(_ctx.getOptionAsText(local_option)));
  }
}

AppView<void> viewFactory_MaterialTreeGroupFlatCheckComponent3<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatCheckComponent3<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeGroupFlatCheckComponentHost = const [];

class _ViewMaterialTreeGroupFlatCheckComponentHost0<T> extends AppView<import2.MaterialTreeGroupFlatCheckComponent<T>> {
  ViewMaterialTreeGroupFlatCheckComponent0<T> _compView_0;
  import2.MaterialTreeGroupFlatCheckComponent<T> _MaterialTreeGroupFlatCheckComponent_0_5;
  _ViewMaterialTreeGroupFlatCheckComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialTreeGroupFlatCheckComponent<T>> build() {
    _compView_0 = ViewMaterialTreeGroupFlatCheckComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTreeGroupFlatCheckComponent_0_5 = (import9.isDevMode
        ? import17.debugInjectorWrap(import2.MaterialTreeGroupFlatCheckComponent, () {
            return import2.MaterialTreeGroupFlatCheckComponent(this.injectorGet(import21.MaterialTreeRoot, viewData.parentIndex), _compView_0, this.injectorGetOptional(import29.DropdownHandle, viewData.parentIndex));
          })
        : import2.MaterialTreeGroupFlatCheckComponent(this.injectorGet(import21.MaterialTreeRoot, viewData.parentIndex), _compView_0, this.injectorGetOptional(import29.DropdownHandle, viewData.parentIndex)));
    _compView_0.create(_MaterialTreeGroupFlatCheckComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialTreeGroupFlatCheckComponent_0_5);
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
  }
}

AppView<import2.MaterialTreeGroupFlatCheckComponent<T>> viewFactory_MaterialTreeGroupFlatCheckComponentHost0<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeGroupFlatCheckComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTreeGroupFlatListComponent, MaterialTreeGroupFlatListComponentNgFactory);
  _ngRef.registerComponent(MaterialTreeGroupFlatRadioComponent, MaterialTreeGroupFlatRadioComponentNgFactory);
  _ngRef.registerComponent(MaterialTreeGroupFlatCheckComponent, MaterialTreeGroupFlatCheckComponentNgFactory);
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
