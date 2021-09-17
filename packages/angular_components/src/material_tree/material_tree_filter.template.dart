// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_tree_filter.dart';
export 'material_tree_filter.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_input/material_input.template.dart' as _ref1;
import 'package:angular_components/model/selection/select.template.dart' as _ref2;
import 'package:angular_components/src/material_tree/material_tree_root.template.dart' as _ref3;
import 'package:angular_components/utils/async/async.template.dart' as _ref4;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_tree_filter.dart' as import1;
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
import 'package:angular/src/runtime/queries.dart' as import13;
import '../../material_input/material_input.template.dart' as import14;
import '../../material_input/deferred_validator.dart' as import15;
import 'package:angular_forms/src/directives/ng_model.dart' as import16;
import '../../material_input/material_input.dart' as import17;
import '../../material_input/material_input_default_value_accessor.dart' as import18;
import 'package:angular/src/core/di/opaque_token.dart' as import19;
import 'package:angular_forms/src/directives/ng_control.dart' as import20;
import '../../material_input/base_material_input.dart' as import21;
import '../../utils/angular/reference/reference.dart' as import22;
import '../../focus/focus_interface.dart' as import23;
import '../../interfaces/has_disabled.dart' as import24;
import 'package:angular/src/di/errors.dart' as import25;
import 'material_tree_root.dart' as import26;

final List<dynamic> styles$MaterialTreeFilterComponent = const [];

class ViewMaterialTreeFilterComponent0 extends AppView<import1.MaterialTreeFilterComponent> {
  bool _query_materialInput_1_0_isDirty = true;
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  static import4.ComponentStyles _componentStyles;
  ViewMaterialTreeFilterComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import7.document.createElement('material-tree-filter');
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:angular_components/lib/src/material_tree/material_tree_filter.dart' : null);
  }

  @override
  ComponentRef<import1.MaterialTreeFilterComponent> build() {
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import10.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_MaterialTreeFilterComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = _ctx.hasFilterable;
    _appEl_0.detectChangesInNestedViews();
    if ((!import12.AppViewUtils.throwOnChanges)) {
      if (_query_materialInput_1_0_isDirty) {
        _ctx.materialInput = import13.firstOrNull(_appEl_0.mapNestedViews((_ViewMaterialTreeFilterComponent1 nestedView) {
          return [nestedView._MaterialInputComponent_0_9];
        }));
        _query_materialInput_1_0_isDirty = false;
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import4.ComponentStyles.unscoped(styles$MaterialTreeFilterComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import1.MaterialTreeFilterComponent> _MaterialTreeFilterComponentNgFactory = const ComponentFactory('material-tree-filter', viewFactory_MaterialTreeFilterComponentHost0);
ComponentFactory<import1.MaterialTreeFilterComponent> get MaterialTreeFilterComponentNgFactory {
  return _MaterialTreeFilterComponentNgFactory;
}

class _ViewMaterialTreeFilterComponent1 extends AppView<import1.MaterialTreeFilterComponent> {
  import14.ViewMaterialInputComponent0 _compView_0;
  import15.DeferredValidator _DeferredValidator_0_5;
  List<dynamic> _NgValidators_0_6;
  import16.NgModel _NgModel_0_7;
  import17.MaterialInputComponent _MaterialInputComponent_0_9;
  import18.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_0_11;
  String _expr_1;
  String _expr_3;
  _ViewMaterialTreeFilterComponent1(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import1.MaterialTreeFilterComponent> build() {
    final _ctx = ctx;
    _compView_0 = import14.ViewMaterialInputComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    import10.setAttribute(_el_0, 'style', 'width: 100%;');
    _DeferredValidator_0_5 = import15.DeferredValidator();
    _NgValidators_0_6 = [_DeferredValidator_0_5];
    _NgModel_0_7 = import16.NgModel(_NgValidators_0_6, null);
    _MaterialInputComponent_0_9 = import17.MaterialInputComponent(null, null, null, _NgModel_0_7, _compView_0, _DeferredValidator_0_5);
    _MaterialInputDefaultValueAccessor_0_11 = import18.MaterialInputDefaultValueAccessor(_MaterialInputComponent_0_9, _NgModel_0_7);
    _compView_0.create(_MaterialInputComponent_0_9, [const [], const []]);
    final subscription_0 = _MaterialInputComponent_0_9.onFocus.listen(eventHandler0(_ctx.handleFocus));
    final subscription_1 = _MaterialInputComponent_0_9.onKeypress.listen(eventHandler1(_handle_inputKeyPress_0_1));
    init([_el_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import15.DeferredValidator)) {
        return _DeferredValidator_0_5;
      }
      if (identical(token, const import19.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_0_6;
      }
      if ((identical(token, import16.NgModel) || identical(token, import20.NgControl))) {
        return _NgModel_0_7;
      }
      if (((((identical(token, import17.MaterialInputComponent) || identical(token, import21.BaseMaterialInput)) || identical(token, import22.ReferenceDirective)) || identical(token, import23.Focusable)) || identical(token, import24.HasDisabled))) {
        return _MaterialInputComponent_0_9;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_0_7.model = _ctx.inputText;
    _NgModel_0_7.ngAfterChanges();
    if (((!import12.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_0_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_0_9.displayBottomPanel = false;
      changed = true;
    }
    final currVal_1 = _ctx.placeholder;
    if (import12.checkBinding(_expr_1, currVal_1)) {
      _MaterialInputComponent_0_9.label = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_3 = _ctx.leadingGlyph;
    if (import12.checkBinding(_expr_3, currVal_3)) {
      _MaterialInputComponent_0_9.leadingGlyph = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
    if ((!import12.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_0_9.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import8.unsafeCast<ViewMaterialTreeFilterComponent0>(parentView)._query_materialInput_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialInputComponent_0_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_0_11.ngOnDestroy();
  }

  void _handle_inputKeyPress_0_1($event) {
    final _ctx = ctx;
    _ctx.inputText = $event;
  }
}

AppView<void> viewFactory_MaterialTreeFilterComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeFilterComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeFilterComponentHost = const [];

class _ViewMaterialTreeFilterComponentHost0 extends AppView<import1.MaterialTreeFilterComponent> {
  ViewMaterialTreeFilterComponent0 _compView_0;
  import1.MaterialTreeFilterComponent _MaterialTreeFilterComponent_0_5;
  _ViewMaterialTreeFilterComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.MaterialTreeFilterComponent> build() {
    _compView_0 = ViewMaterialTreeFilterComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTreeFilterComponent_0_5 = (import8.isDevMode
        ? import25.debugInjectorWrap(import1.MaterialTreeFilterComponent, () {
            return import1.MaterialTreeFilterComponent(this.injectorGetOptional(import26.MaterialTreeRoot, viewData.parentIndex));
          })
        : import1.MaterialTreeFilterComponent(this.injectorGetOptional(import26.MaterialTreeRoot, viewData.parentIndex)));
    _compView_0.create(_MaterialTreeFilterComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialTreeFilterComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import1.MaterialTreeFilterComponent> viewFactory_MaterialTreeFilterComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeFilterComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTreeFilterComponent, MaterialTreeFilterComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
