// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_select.dart';
export 'material_select.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_select_base.template.dart' as _ref0;
import 'material_select_item.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_components/focus/focus_item.template.dart' as _ref3;
import 'package:angular_components/focus/focus_list.template.dart' as _ref4;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref5;
import 'package:angular_components/material_list/material_list.template.dart' as _ref6;
import 'package:angular_components/model/selection/select.template.dart' as _ref7;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref8;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref9;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref10;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref11;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref12;
import 'package:angular_components/model/ui/template_support.template.dart' as _ref13;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref14;
import 'package:angular_components/material_select/material_select.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_select.dart' as import2;
import '../material_list/material_list.template.dart' as import3;
import '../focus/focus_list.template.dart' as import4;
import '../material_list/material_list.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import9;
import 'package:angular/src/core/linker/view_type.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/runtime.dart' as import13;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import15;
import '../focus/focus_list.dart' as import16;
import 'package:angular/src/core/zone/ng_zone.dart' as import17;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import19;
import 'package:angular/src/common/directives/ng_for.dart' as import20;
import '../model/selection/selection_options.dart' as import21;
import 'package:angular/src/runtime/text_binding.dart' as import22;
import 'package:angular/src/runtime/interpolate.dart' as import23;
import 'material_select_item.template.dart' as import24;
import '../focus/focus_item.template.dart' as import25;
import 'material_select_item.dart' as import26;
import '../focus/focus_item.dart' as import27;
import '../mixins/material_dropdown_base.dart' as import28;
import 'activation_handler.dart' as import29;
import '../focus/focus.dart' as import30;
import '../model/selection/selection_container.dart' as import31;
import '../interfaces/has_disabled.dart' as import32;
import '../model/ui/has_renderer.dart' as import33;

final List<dynamic> styles$MaterialSelectComponent = [import0.styles];

class ViewMaterialSelectComponent0<T> extends AppView<import2.MaterialSelectComponent<T>> {
  bool _query_FocusableItem_0_0_isDirty = true;
  import3.ViewMaterialListComponent0 _compView_0;
  import4.FocusListDirectiveNgCd _FocusListDirective_0_5;
  import5.MaterialListComponent _MaterialListComponent_0_6;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  int _expr_0;
  var _expr_2;
  var _expr_4;
  var _expr_5;
  import8.Element _el_0;
  static import9.ComponentStyles _componentStyles;
  ViewMaterialSelectComponent0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('material-select');
    import12.updateAttribute(rootEl, 'role', import2.MaterialSelectComponent.hostRole);
  }
  static String get _debugComponentUrl {
    return (import13.isDevMode ? 'asset:angular_components/lib/material_select/material_select.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialSelectComponent<T>> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import3.ViewMaterialListComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    import12.setAttribute(_el_0, 'focusList', '');
    import12.setAttribute(_el_0, 'role', 'none');
    addShimC(_el_0);
    _FocusListDirective_0_5 = import4.FocusListDirectiveNgCd((import13.isDevMode
        ? import15.debugInjectorWrap(import16.FocusListDirective, () {
            return import16.FocusListDirective(parentView.injectorGet(import17.NgZone, viewData.parentIndex), 'none');
          })
        : import16.FocusListDirective(parentView.injectorGet(import17.NgZone, viewData.parentIndex), 'none')));
    _MaterialListComponent_0_6 = import5.MaterialListComponent();
    final _anchor_1 = import12.createAnchor();
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialSelectComponent1<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    _compView_0.create(_MaterialListComponent_0_6, [
      <dynamic>[projectedNodes[0]]..addAll([_appEl_1])
    ]);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.autoFocusIndex;
    if (import19.checkBinding(_expr_0, currVal_0)) {
      _FocusListDirective_0_5.instance.autoFocusIndex = currVal_0;
      _expr_0 = currVal_0;
    }
    changed = false;
    if (firstCheck) {
      _MaterialListComponent_0_6.role = 'none';
      changed = true;
    }
    final currVal_2 = _ctx.width;
    if (import19.checkBinding(_expr_2, currVal_2)) {
      _MaterialListComponent_0_6.width = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _NgIf_1_9.ngIf = (_ctx.options != null);
    _appEl_1.detectChangesInNestedViews();
    if ((!import19.AppViewUtils.throwOnChanges)) {
      if (_query_FocusableItem_0_0_isDirty) {
        _FocusListDirective_0_5.instance.listItems = _appEl_1.mapNestedViews((_ViewMaterialSelectComponent1 nestedView) {
          return nestedView._appEl_1.mapNestedViews((_ViewMaterialSelectComponent2 nestedView) {
            return nestedView._appEl_1.mapNestedViews((_ViewMaterialSelectComponent3 nestedView) {
              return nestedView._appEl_1.mapNestedViews((_ViewMaterialSelectComponent5 nestedView) {
                return [nestedView._FocusItemDirective_0_5.instance];
              });
            });
          });
        });
        _query_FocusableItem_0_0_isDirty = false;
      }
    }
    _FocusListDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _compView_0.destroyInternalState();
    _FocusListDirective_0_5.instance.ngOnDestroy();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    final currVal_4 = _ctx.isMultiSelect;
    if (import19.checkBinding(_expr_4, currVal_4)) {
      import12.updateAttribute(rootEl, 'aria-multiselectable', currVal_4?.toString());
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.disabledStr;
    if (import19.checkBinding(_expr_5, currVal_5)) {
      import12.updateAttribute(rootEl, 'aria-disabled', currVal_5);
      _expr_5 = currVal_5;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import9.ComponentStyles.scoped(styles$MaterialSelectComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialSelectComponent> _MaterialSelectComponentNgFactory = const ComponentFactory('material-select', viewFactory_MaterialSelectComponentHost0);
ComponentFactory<import2.MaterialSelectComponent> get MaterialSelectComponentNgFactory {
  return _MaterialSelectComponentNgFactory;
}

class _ViewMaterialSelectComponent1<T> extends AppView<import2.MaterialSelectComponent<T>> {
  ViewContainer _appEl_1;
  import20.NgFor _NgFor_1_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  import8.DivElement _el_0;
  _ViewMaterialSelectComponent1(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialSelectComponent<T>> build() {
    final doc = import8.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'options-wrapper');
    import12.setAttribute(_el_0, 'role', 'group');
    addShimC(_el_0);
    final _anchor_1 = import12.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialSelectComponent2<T>(parentView, parentIndex);
    });
    _NgFor_1_9 = import20.NgFor(_appEl_1, _TemplateRef_1_8);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      if (!identical(_ctx.trackByIndexFn, null)) {
        (_NgFor_1_9.ngForTrackBy = _ctx.trackByIndexFn);
      }
    }
    final currVal_2 = _ctx.options.optionGroups;
    if (import19.checkBinding(_expr_2, currVal_2)) {
      _NgFor_1_9.ngForOf = currVal_2;
      _expr_2 = currVal_2;
    }
    if ((!import19.AppViewUtils.throwOnChanges)) {
      _NgFor_1_9.ngDoCheck();
    }
    _appEl_1.detectChangesInNestedViews();
    final currVal_0 = _ctx.ariaLabelledBy;
    if (import19.checkBinding(_expr_0, currVal_0)) {
      import12.updateAttribute(_el_0, 'aria-labelledby', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.ariaDescribedBy;
    if (import19.checkBinding(_expr_1, currVal_1)) {
      import12.updateAttribute(_el_0, 'aria-describedby', currVal_1);
      _expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialSelectComponent1<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialSelectComponent2<T> extends AppView<import2.MaterialSelectComponent<T>> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  bool _expr_0;
  import8.DivElement _el_0;
  _ViewMaterialSelectComponent2(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialSelectComponent<T>> build() {
    final doc = import8.document;
    _el_0 = doc.createElement('div');
    import12.setAttribute(_el_0, 'group', '');
    addShimC(_el_0);
    final _anchor_1 = import12.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialSelectComponent3<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_group = import13.unsafeCast<import21.OptionGroup<T>>(locals['\$implicit']);
    _NgIf_1_9.ngIf = local_group.isNotEmpty;
    _appEl_1.detectChangesInNestedViews();
    final currVal_0 = local_group.isEmpty;
    if (import19.checkBinding(_expr_0, currVal_0)) {
      import12.updateClassBinding(_el_0, 'empty', currVal_0);
      _expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialSelectComponent2<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialSelectComponent3<T> extends AppView<import2.MaterialSelectComponent<T>> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  import20.NgFor _NgFor_1_9;
  var _expr_1;
  _ViewMaterialSelectComponent3(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialSelectComponent<T>> build() {
    final _anchor_0 = import12.createAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialSelectComponent4<T>(parentView, parentIndex);
    });
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final _anchor_1 = import12.createAnchor();
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialSelectComponent5<T>(parentView, parentIndex);
    });
    _NgFor_1_9 = import20.NgFor(_appEl_1, _TemplateRef_1_8);
    init([_appEl_0, _appEl_1], null);
  }

  @override
  void detectChangesInternal() {
    final local_group = import13.unsafeCast<import21.OptionGroup<T>>(parentView.locals['\$implicit']);
    _NgIf_0_9.ngIf = local_group.hasLabel;
    final currVal_1 = local_group;
    if (import19.checkBinding(_expr_1, currVal_1)) {
      _NgFor_1_9.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    if ((!import19.AppViewUtils.throwOnChanges)) {
      _NgFor_1_9.ngDoCheck();
    }
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_1.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialSelectComponent3<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectComponent3<T>(parentView, parentIndex);
}

class _ViewMaterialSelectComponent4<T> extends AppView<import2.MaterialSelectComponent<T>> {
  final import22.TextBinding _textBinding_1 = import22.TextBinding();
  _ViewMaterialSelectComponent4(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialSelectComponent<T>> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    import12.setAttribute(_el_0, 'label', '');
    addShimE(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_group = import13.unsafeCast<import21.OptionGroup<T>>(parentView.parentView.locals['\$implicit']);
    _textBinding_1.updateText(import23.interpolateString0(local_group.uiDisplayName));
  }
}

AppView<void> viewFactory_MaterialSelectComponent4<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectComponent4<T>(parentView, parentIndex);
}

class _ViewMaterialSelectComponent5<T> extends AppView<import2.MaterialSelectComponent<T>> {
  import24.ViewMaterialSelectItemComponent0<T> _compView_0;
  import25.FocusItemDirectiveNgCd _FocusItemDirective_0_5;
  import26.MaterialSelectItemComponent<T> _MaterialSelectItemComponent_0_6;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  import8.Element _el_0;
  _ViewMaterialSelectComponent5(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialSelectComponent<T>> build() {
    _compView_0 = import24.ViewMaterialSelectItemComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    import12.setAttribute(_el_0, 'focusItem', '');
    addShimC(_el_0);
    _FocusItemDirective_0_5 = import25.FocusItemDirectiveNgCd(import27.FocusItemDirective(_el_0, null));
    _MaterialSelectItemComponent_0_6 = (import13.isDevMode
        ? import15.debugInjectorWrap(import26.MaterialSelectItemComponent, () {
            return import26.MaterialSelectItemComponent(_el_0, parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import28.DropdownHandle, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import29.ActivationHandler, parentView.parentView.parentView.parentView.viewData.parentIndex), _compView_0, null);
          })
        : import26.MaterialSelectItemComponent(_el_0, parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import28.DropdownHandle, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import29.ActivationHandler, parentView.parentView.parentView.parentView.viewData.parentIndex), _compView_0, null));
    _compView_0.create(_MaterialSelectItemComponent_0_6, [const []]);
    _el_0.addEventListener('keydown', eventHandler1(_FocusItemDirective_0_5.instance.keydown));
    init1(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import30.FocusableItem)) {
        return _FocusItemDirective_0_5.instance;
      }
      if (((identical(token, import31.SelectionItem) || identical(token, import32.HasDisabled)) || identical(token, import33.HasRenderer))) {
        return _MaterialSelectItemComponent_0_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_item = import13.unsafeCast<T>(locals['\$implicit']);
    final currVal_0 = (_ctx.disabled || _ctx.isOptionDisabled(local_item));
    if (import19.checkBinding(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_0_6.disabled = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.componentRenderer;
    if (import19.checkBinding(_expr_1, currVal_1)) {
      _MaterialSelectItemComponent_0_6.componentRenderer = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.factoryRenderer;
    if (import19.checkBinding(_expr_2, currVal_2)) {
      _MaterialSelectItemComponent_0_6.factoryRenderer = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_item;
    if (import19.checkBinding(_expr_3, currVal_3)) {
      _MaterialSelectItemComponent_0_6.value = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.itemRenderer;
    if (import19.checkBinding(_expr_4, currVal_4)) {
      _MaterialSelectItemComponent_0_6.itemRenderer = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.selection;
    if (import19.checkBinding(_expr_5, currVal_5)) {
      _MaterialSelectItemComponent_0_6.selection = currVal_5;
      _expr_5 = currVal_5;
    }
    _FocusItemDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import13.unsafeCast<ViewMaterialSelectComponent0>(parentView.parentView.parentView.parentView)._query_FocusableItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialSelectItemComponent_0_6.ngOnDestroy();
  }
}

AppView<void> viewFactory_MaterialSelectComponent5<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectComponent5<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialSelectComponentHost = const [];

class _ViewMaterialSelectComponentHost0<T> extends AppView<import2.MaterialSelectComponent<T>> {
  ViewMaterialSelectComponent0<T> _compView_0;
  import2.MaterialSelectComponent<T> _MaterialSelectComponent_0_5;
  _ViewMaterialSelectComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialSelectComponent<T>> build() {
    _compView_0 = ViewMaterialSelectComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialSelectComponent_0_5 = import2.MaterialSelectComponent();
    _MaterialSelectComponent_0_5.selectItems = [];
    _compView_0.create(_MaterialSelectComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialSelectComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import32.HasDisabled) || identical(token, import33.HasRenderer)) || identical(token, import31.SelectionContainer)) && (0 == nodeIndex))) {
      return _MaterialSelectComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import19.AppViewUtils.throwOnChanges) && firstCheck)) {
      _MaterialSelectComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.MaterialSelectComponent<T>> viewFactory_MaterialSelectComponentHost0<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialSelectComponent, MaterialSelectComponentNgFactory);
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
  _ref14.initReflector();
}
