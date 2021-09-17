// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_tree_impl.dart';
export 'material_tree_impl.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'group/material_tree_group.template.dart' as _ref0;
import 'group/material_tree_group_flat.template.dart' as _ref1;
import 'material_tree_rendering_options.template.dart' as _ref2;
import 'material_tree_root.template.dart' as _ref3;
import 'package:angular/angular.template.dart' as _ref4;
import 'package:angular_components/model/selection/select.template.dart' as _ref5;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref6;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref7;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref8;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref9;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_tree_impl.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import12;
import 'package:angular/src/common/directives/ng_for.dart' as import13;
import 'group/material_tree_group.template.dart' as import14;
import 'group/material_tree_group.dart' as import15;
import 'package:angular/src/di/errors.dart' as import16;
import 'material_tree_root.dart' as import17;
import '../../mixins/material_dropdown_base.dart' as import18;
import 'package:angular/src/core/di/opaque_token.dart' as import19;
import '../../model/selection/selection_options.dart' as import20;
import 'dart:core';
import 'group/material_tree_group_flat.template.dart' as import22;
import 'group/material_tree_group_flat.dart' as import23;

final List<dynamic> styles$MaterialTreeComponent = const [];

class ViewMaterialTreeComponent0<T> extends AppView<import1.MaterialTreeComponent<T>> {
  bool _query_MaterialTreeGroupComponent_1_0_isDirty = true;
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  static import4.ComponentStyles _componentStyles;
  ViewMaterialTreeComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import7.document.createElement('material-tree');
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:angular_components/lib/src/material_tree/material_tree_impl.dart' : null);
  }

  @override
  ComponentRef<import1.MaterialTreeComponent<T>> build() {
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import10.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent1<T>(parentView, parentIndex);
    });
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final _anchor_1 = import10.appendAnchor(parentRenderNode);
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent3<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = _ctx.supportsHierarchy;
    _NgIf_1_9.ngIf = (!_ctx.supportsHierarchy);
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
    if ((!import12.AppViewUtils.throwOnChanges)) {
      if (_query_MaterialTreeGroupComponent_1_0_isDirty) {
        _ctx.treeGroupNodes = _appEl_0.mapNestedViews((_ViewMaterialTreeComponent1 nestedView) {
          return nestedView._appEl_0.mapNestedViews((_ViewMaterialTreeComponent2 nestedView) {
            return [nestedView._MaterialTreeGroupComponent_0_5];
          });
        });
        _query_MaterialTreeGroupComponent_1_0_isDirty = false;
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_1.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    final currVal_2 = _ctx.role;
    if (import12.checkBinding(_expr_2, currVal_2)) {
      import10.updateAttribute(rootEl, 'role', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.hostMultiselectable;
    if (import12.checkBinding(_expr_3, currVal_3)) {
      import10.updateAttribute(rootEl, 'aria-multiselectable', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.hostReadonly;
    if (import12.checkBinding(_expr_4, currVal_4)) {
      import10.updateAttribute(rootEl, 'aria-readonly', currVal_4);
      _expr_4 = currVal_4;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import4.ComponentStyles.unscoped(styles$MaterialTreeComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import1.MaterialTreeComponent> _MaterialTreeComponentNgFactory = const ComponentFactory('material-tree', viewFactory_MaterialTreeComponentHost0);
ComponentFactory<import1.MaterialTreeComponent> get MaterialTreeComponentNgFactory {
  return _MaterialTreeComponentNgFactory;
}

class _ViewMaterialTreeComponent1<T> extends AppView<import1.MaterialTreeComponent<T>> {
  ViewContainer _appEl_0;
  import13.NgFor _NgFor_0_9;
  var _expr_0;
  _ViewMaterialTreeComponent1(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import1.MaterialTreeComponent<T>> build() {
    final _anchor_0 = import10.createAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent2<T>(parentView, parentIndex);
    });
    _NgFor_0_9 = import13.NgFor(_appEl_0, _TemplateRef_0_8);
    init1(_appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.options.optionGroups;
    if (import12.checkBinding(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import12.AppViewUtils.throwOnChanges)) {
      _NgFor_0_9.ngDoCheck();
    }
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialTreeComponent1<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialTreeComponent2<T> extends AppView<import1.MaterialTreeComponent<T>> {
  import14.ViewMaterialTreeGroupComponent0<T> _compView_0;
  import15.MaterialTreeGroupComponent<T> _MaterialTreeGroupComponent_0_5;
  bool _expr_0;
  var _expr_1;
  bool _expr_2;
  int _expr_3;
  _ViewMaterialTreeComponent2(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import1.MaterialTreeComponent<T>> build() {
    _compView_0 = import14.ViewMaterialTreeGroupComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _MaterialTreeGroupComponent_0_5 = (import8.isDevMode
        ? import16.debugInjectorWrap(import15.MaterialTreeGroupComponent, () {
            return import15.MaterialTreeGroupComponent(parentView.injectorGet(import17.MaterialTreeRoot, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import18.DropdownHandle, viewData.parentIndex), parentView.injectorGetOptional(const import19.OpaqueToken<dynamic>('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'), viewData.parentIndex));
          })
        : import15.MaterialTreeGroupComponent(parentView.injectorGet(import17.MaterialTreeRoot, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import18.DropdownHandle, viewData.parentIndex), parentView.injectorGetOptional(const import19.OpaqueToken<dynamic>('MaterialTreeGroupComponent_materialTreeLeftPaddingToken'), viewData.parentIndex)));
    _compView_0.create0(_MaterialTreeGroupComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_group = import8.unsafeCast<import20.OptionGroup<T>>(locals['\$implicit']);
    final local_optionIndex = import8.unsafeCast<int>(locals['index']);
    final currVal_0 = _ctx.shouldExpand(local_group, local_optionIndex);
    if (import12.checkBinding(_expr_0, currVal_0)) {
      _MaterialTreeGroupComponent_0_5.expandAll = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = local_group;
    if (import12.checkBinding(_expr_1, currVal_1)) {
      _MaterialTreeGroupComponent_0_5.group = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.allowParentSingleSelection;
    if (import12.checkBinding(_expr_2, currVal_2)) {
      _MaterialTreeGroupComponent_0_5.allowParentSingleSelection = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.maxInitialOptionsShown(local_group, local_optionIndex);
    if (import12.checkBinding(_expr_3, currVal_3)) {
      _MaterialTreeGroupComponent_0_5.maxInitialOptionsShown = currVal_3;
      _expr_3 = currVal_3;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import8.unsafeCast<ViewMaterialTreeComponent0>(parentView.parentView)._query_MaterialTreeGroupComponent_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialTreeGroupComponent_0_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_MaterialTreeComponent2<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialTreeComponent3<T> extends AppView<import1.MaterialTreeComponent<T>> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  _ViewMaterialTreeComponent3(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import1.MaterialTreeComponent<T>> build() {
    final _anchor_0 = import10.createAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent4<T>(parentView, parentIndex);
    });
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final _anchor_1 = import10.createAnchor();
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent6<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import10.createAnchor();
    _appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent8<T>(parentView, parentIndex);
    });
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    init([_appEl_0, _appEl_1, _appEl_2], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = _ctx.showFlatList;
    _NgIf_1_9.ngIf = _ctx.showFlatRadio;
    _NgIf_2_9.ngIf = _ctx.showFlatCheck;
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialTreeComponent3<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent3<T>(parentView, parentIndex);
}

class _ViewMaterialTreeComponent4<T> extends AppView<import1.MaterialTreeComponent<T>> {
  ViewContainer _appEl_0;
  import13.NgFor _NgFor_0_9;
  var _expr_0;
  _ViewMaterialTreeComponent4(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import1.MaterialTreeComponent<T>> build() {
    final _anchor_0 = import10.createAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent5<T>(parentView, parentIndex);
    });
    _NgFor_0_9 = import13.NgFor(_appEl_0, _TemplateRef_0_8);
    init1(_appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.options.optionGroups;
    if (import12.checkBinding(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import12.AppViewUtils.throwOnChanges)) {
      _NgFor_0_9.ngDoCheck();
    }
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialTreeComponent4<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent4<T>(parentView, parentIndex);
}

class _ViewMaterialTreeComponent5<T> extends AppView<import1.MaterialTreeComponent<T>> {
  import22.ViewMaterialTreeGroupFlatListComponent0<T> _compView_0;
  import23.MaterialTreeGroupFlatListComponent<T> _MaterialTreeGroupFlatListComponent_0_5;
  var _expr_0;
  _ViewMaterialTreeComponent5(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import1.MaterialTreeComponent<T>> build() {
    _compView_0 = import22.ViewMaterialTreeGroupFlatListComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _MaterialTreeGroupFlatListComponent_0_5 = (import8.isDevMode
        ? import16.debugInjectorWrap(import23.MaterialTreeGroupFlatListComponent, () {
            return import23.MaterialTreeGroupFlatListComponent(parentView.injectorGet(import17.MaterialTreeRoot, viewData.parentIndex), _compView_0);
          })
        : import23.MaterialTreeGroupFlatListComponent(parentView.injectorGet(import17.MaterialTreeRoot, viewData.parentIndex), _compView_0));
    _compView_0.create0(_MaterialTreeGroupFlatListComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final local_group = import8.unsafeCast<import20.OptionGroup<T>>(locals['\$implicit']);
    final currVal_0 = local_group;
    if (import12.checkBinding(_expr_0, currVal_0)) {
      _MaterialTreeGroupFlatListComponent_0_5.group = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<void> viewFactory_MaterialTreeComponent5<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent5<T>(parentView, parentIndex);
}

class _ViewMaterialTreeComponent6<T> extends AppView<import1.MaterialTreeComponent<T>> {
  ViewContainer _appEl_0;
  import13.NgFor _NgFor_0_9;
  var _expr_0;
  _ViewMaterialTreeComponent6(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import1.MaterialTreeComponent<T>> build() {
    final _anchor_0 = import10.createAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent7<T>(parentView, parentIndex);
    });
    _NgFor_0_9 = import13.NgFor(_appEl_0, _TemplateRef_0_8);
    init1(_appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.options.optionGroups;
    if (import12.checkBinding(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import12.AppViewUtils.throwOnChanges)) {
      _NgFor_0_9.ngDoCheck();
    }
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialTreeComponent6<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent6<T>(parentView, parentIndex);
}

class _ViewMaterialTreeComponent7<T> extends AppView<import1.MaterialTreeComponent<T>> {
  import22.ViewMaterialTreeGroupFlatRadioComponent0<T> _compView_0;
  import23.MaterialTreeGroupFlatRadioComponent<T> _MaterialTreeGroupFlatRadioComponent_0_5;
  var _expr_0;
  _ViewMaterialTreeComponent7(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import1.MaterialTreeComponent<T>> build() {
    _compView_0 = import22.ViewMaterialTreeGroupFlatRadioComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _MaterialTreeGroupFlatRadioComponent_0_5 = (import8.isDevMode
        ? import16.debugInjectorWrap(import23.MaterialTreeGroupFlatRadioComponent, () {
            return import23.MaterialTreeGroupFlatRadioComponent(parentView.injectorGet(import17.MaterialTreeRoot, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import18.DropdownHandle, viewData.parentIndex));
          })
        : import23.MaterialTreeGroupFlatRadioComponent(parentView.injectorGet(import17.MaterialTreeRoot, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import18.DropdownHandle, viewData.parentIndex)));
    _compView_0.create0(_MaterialTreeGroupFlatRadioComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final local_group = import8.unsafeCast<import20.OptionGroup<T>>(locals['\$implicit']);
    final currVal_0 = local_group;
    if (import12.checkBinding(_expr_0, currVal_0)) {
      _MaterialTreeGroupFlatRadioComponent_0_5.group = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<void> viewFactory_MaterialTreeComponent7<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent7<T>(parentView, parentIndex);
}

class _ViewMaterialTreeComponent8<T> extends AppView<import1.MaterialTreeComponent<T>> {
  ViewContainer _appEl_0;
  import13.NgFor _NgFor_0_9;
  var _expr_0;
  _ViewMaterialTreeComponent8(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import1.MaterialTreeComponent<T>> build() {
    final _anchor_0 = import10.createAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialTreeComponent9<T>(parentView, parentIndex);
    });
    _NgFor_0_9 = import13.NgFor(_appEl_0, _TemplateRef_0_8);
    init1(_appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.options.optionGroups;
    if (import12.checkBinding(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import12.AppViewUtils.throwOnChanges)) {
      _NgFor_0_9.ngDoCheck();
    }
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialTreeComponent8<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent8<T>(parentView, parentIndex);
}

class _ViewMaterialTreeComponent9<T> extends AppView<import1.MaterialTreeComponent<T>> {
  import22.ViewMaterialTreeGroupFlatCheckComponent0<T> _compView_0;
  import23.MaterialTreeGroupFlatCheckComponent<T> _MaterialTreeGroupFlatCheckComponent_0_5;
  var _expr_0;
  _ViewMaterialTreeComponent9(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import1.MaterialTreeComponent<T>> build() {
    _compView_0 = import22.ViewMaterialTreeGroupFlatCheckComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _MaterialTreeGroupFlatCheckComponent_0_5 = (import8.isDevMode
        ? import16.debugInjectorWrap(import23.MaterialTreeGroupFlatCheckComponent, () {
            return import23.MaterialTreeGroupFlatCheckComponent(parentView.injectorGet(import17.MaterialTreeRoot, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import18.DropdownHandle, viewData.parentIndex));
          })
        : import23.MaterialTreeGroupFlatCheckComponent(parentView.injectorGet(import17.MaterialTreeRoot, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import18.DropdownHandle, viewData.parentIndex)));
    _compView_0.create0(_MaterialTreeGroupFlatCheckComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final local_group = import8.unsafeCast<import20.OptionGroup<T>>(locals['\$implicit']);
    final currVal_0 = local_group;
    if (import12.checkBinding(_expr_0, currVal_0)) {
      _MaterialTreeGroupFlatCheckComponent_0_5.group = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<void> viewFactory_MaterialTreeComponent9<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponent9<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeComponentHost = const [];

class _ViewMaterialTreeComponentHost0<T> extends AppView<import1.MaterialTreeComponent<T>> {
  ViewMaterialTreeComponent0<T> _compView_0;
  import1.MaterialTreeComponent<T> _MaterialTreeComponent_0_5;
  _ViewMaterialTreeComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.MaterialTreeComponent<T>> build() {
    _compView_0 = ViewMaterialTreeComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTreeComponent_0_5 = (import8.isDevMode
        ? import16.debugInjectorWrap(import1.MaterialTreeComponent, () {
            return import1.MaterialTreeComponent(this.injectorGetOptional(import17.MaterialTreeRoot, viewData.parentIndex), null);
          })
        : import1.MaterialTreeComponent(this.injectorGetOptional(import17.MaterialTreeRoot, viewData.parentIndex), null));
    _compView_0.create(_MaterialTreeComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialTreeComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.MaterialTreeRoot) && (0 == nodeIndex))) {
      return _MaterialTreeComponent_0_5;
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
  }
}

AppView<import1.MaterialTreeComponent<T>> viewFactory_MaterialTreeComponentHost0<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTreeComponent, MaterialTreeComponentNgFactory);
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
