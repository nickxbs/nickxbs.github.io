// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_tree_dropdown.dart';
export 'material_tree_dropdown.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'material_tree_impl.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content.template.dart' as _ref2;
import 'package:angular_components/focus/focus.template.dart' as _ref3;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref4;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref5;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref6;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref7;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref8;
import 'package:angular_components/model/selection/select.template.dart' as _ref9;
import 'package:angular_components/model/selection/selection_container.template.dart' as _ref10;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref11;
import 'package:angular_components/model/selection/selection_options.template.dart' as _ref12;
import 'package:angular_components/model/ui/has_factory.template.dart' as _ref13;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref14;
import 'package:angular_components/src/material_tree/material_tree_filter.template.dart' as _ref15;
import 'package:angular_components/src/material_tree/material_tree_root.template.dart' as _ref16;
import 'package:angular_components/utils/angular/css/css.template.dart' as _ref17;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref18;
import 'package:angular_components/src/material_tree/material_tree_dropdown.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_tree_dropdown.dart' as import2;
import '../../focus/keyboard_only_focus_indicator.dart' as import3;
import '../laminate/popup/popup_source_directive.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../../material_popup/material_popup.template.dart' as import7;
import '../../material_popup/material_popup.dart' as import8;
import '../../content/deferred_content.dart' as import9;
import 'dart:html' as import10;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import11;
import 'package:angular/src/core/linker/view_type.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import14;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import16;
import 'package:angular/src/di/errors.dart' as import17;
import '../../utils/browser/dom_service/dom_service.dart' as import18;
import '../laminate/popup/dom_popup_source.dart' as import19;
import '../../utils/angular/reference/reference.dart' as import20;
import '../../focus/focus_interface.dart' as import21;
import 'package:angular/src/core/linker/template_ref.dart';
import '../laminate/popup/popup_hierarchy.dart' as import23;
import 'package:angular/src/core/zone/ng_zone.dart' as import24;
import '../laminate/overlay/overlay_service.dart' as import25;
import '../../laminate/overlay/zindexer.dart' as import26;
import 'package:angular/src/core/di/opaque_token.dart' as import27;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import29;
import '../laminate/popup/popup_size_provider.dart' as import30;
import 'package:angular/src/core/linker/element_ref.dart';
import '../../content/deferred_content_aware.dart' as import32;
import '../../mixins/material_dropdown_base.dart' as import33;
import '../laminate/popup/popup_ref.dart' as import34;
import 'package:angular/src/core/linker/app_view_utils.dart' as import35;
import 'package:angular/src/runtime/queries.dart' as import36;
import 'package:angular/src/runtime/text_binding.dart' as import37;
import 'package:angular/src/runtime/interpolate.dart' as import38;
import '../../material_icon/material_icon.template.dart' as import39;
import '../../material_icon/material_icon.dart' as import40;
import 'material_tree_filter.template.dart' as import41;
import 'material_tree_filter.dart' as import42;
import 'material_tree_root.dart' as import43;
import 'material_tree_impl.template.dart' as import44;
import 'material_tree_impl.dart' as import45;

final List<dynamic> styles$MaterialTreeDropdownComponent = [import0.styles];

class ViewMaterialTreeDropdownComponent0<T> extends AppView<import2.MaterialTreeDropdownComponent<T>> {
  bool _query_MaterialTreeFilterComponent_1_0_isDirty = true;
  import3.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_5;
  import4.PopupSourceDirective _PopupSourceDirective_0_6;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  import7.ViewMaterialPopupComponent0 _compView_4;
  ViewContainer _appEl_4;
  import8.MaterialPopupComponent _MaterialPopupComponent_4_8;
  dynamic __PopupHierarchy_4_11;
  dynamic __PopupRef_4_12;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  ViewContainer _appEl_7;
  import9.DeferredContentDirective _DeferredContentDirective_7_9;
  bool _expr_0;
  var _expr_6;
  var _expr_7;
  bool _expr_9;
  import10.DivElement _el_0;
  import10.Element _el_4;
  static import11.ComponentStyles _componentStyles;
  ViewMaterialTreeDropdownComponent0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import10.document.createElement('material-tree-dropdown');
  }
  dynamic get _PopupHierarchy_4_11 {
    if ((__PopupHierarchy_4_11 == null)) {
      (__PopupHierarchy_4_11 = import8.getHierarchy(_MaterialPopupComponent_4_8));
    }
    return __PopupHierarchy_4_11;
  }

  dynamic get _PopupRef_4_12 {
    if ((__PopupRef_4_12 == null)) {
      (__PopupRef_4_12 = import8.getResolvedPopupRef(_MaterialPopupComponent_4_8));
    }
    return __PopupRef_4_12;
  }

  static String get _debugComponentUrl {
    return (import14.isDevMode ? 'asset:angular_components/lib/src/material_tree/material_tree_dropdown.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialTreeDropdownComponent<T>> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import10.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import10.document;
    _el_0 = import16.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'button');
    import16.setAttribute(_el_0, 'keyboardOnlyFocusIndicator', '');
    import16.setAttribute(_el_0, 'popupSource', '');
    addShimC(_el_0);
    _KeyboardOnlyFocusIndicatorDirective_0_5 = (import14.isDevMode
        ? import17.debugInjectorWrap(import3.KeyboardOnlyFocusIndicatorDirective, () {
            return import3.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.injectorGet(import18.DomService, viewData.parentIndex));
          })
        : import3.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.injectorGet(import18.DomService, viewData.parentIndex)));
    _PopupSourceDirective_0_6 = (import14.isDevMode
        ? import17.debugInjectorWrap(import4.PopupSourceDirective, () {
            return import4.PopupSourceDirective(parentView.injectorGet(import19.DomPopupSourceFactory, viewData.parentIndex), _el_0, parentView.injectorGetOptional(import20.ReferenceDirective, viewData.parentIndex), parentView.injectorGetOptional(import21.Focusable, viewData.parentIndex), null);
          })
        : import4.PopupSourceDirective(parentView.injectorGet(import19.DomPopupSourceFactory, viewData.parentIndex), _el_0, parentView.injectorGetOptional(import20.ReferenceDirective, viewData.parentIndex), parentView.injectorGetOptional(import21.Focusable, viewData.parentIndex), null));
    final _anchor_1 = import16.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, (parentView, parentIndex) {
      return viewFactory_MaterialTreeDropdownComponent1<T>(parentView, parentIndex);
    });
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import16.appendAnchor(_el_0);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, (parentView, parentIndex) {
      return viewFactory_MaterialTreeDropdownComponent2<T>(parentView, parentIndex);
    });
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _anchor_3 = import16.appendAnchor(_el_0);
    _appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, (parentView, parentIndex) {
      return viewFactory_MaterialTreeDropdownComponent3<T>(parentView, parentIndex);
    });
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    _compView_4 = import7.ViewMaterialPopupComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    parentRenderNode.append(_el_4);
    import16.setAttribute(_el_4, 'enforceSpaceConstraints', '');
    import16.setAttribute(_el_4, 'trackLayoutChanges', '');
    addShimC(_el_4);
    _appEl_4 = ViewContainer(4, null, this, _el_4);
    _MaterialPopupComponent_4_8 = (import14.isDevMode
        ? import17.debugInjectorWrap(import8.MaterialPopupComponent, () {
            return import8.MaterialPopupComponent(parentView.injectorGetOptional(import23.PopupHierarchy, viewData.parentIndex), parentView.injectorGetOptional(import8.MaterialPopupComponent, viewData.parentIndex), null, parentView.injectorGet(import24.NgZone, viewData.parentIndex), parentView.injectorGet(import25.OverlayService, viewData.parentIndex), parentView.injectorGet(import18.DomService, viewData.parentIndex), parentView.injectorGet(import26.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import27.OpaqueToken<List<import29.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import27.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(const import27.OpaqueToken<dynamic>('overlayViewportBoundaries'), viewData.parentIndex), parentView.injectorGetOptional(import30.PopupSizeProvider, viewData.parentIndex), _compView_4, _appEl_4, ElementRef(_el_4));
          })
        : import8.MaterialPopupComponent(parentView.injectorGetOptional(import23.PopupHierarchy, viewData.parentIndex), parentView.injectorGetOptional(import8.MaterialPopupComponent, viewData.parentIndex), null, parentView.injectorGet(import24.NgZone, viewData.parentIndex), parentView.injectorGet(import25.OverlayService, viewData.parentIndex), parentView.injectorGet(import18.DomService, viewData.parentIndex), parentView.injectorGet(import26.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import27.OpaqueToken<List<import29.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import27.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(const import27.OpaqueToken<dynamic>('overlayViewportBoundaries'), viewData.parentIndex), parentView.injectorGetOptional(import30.PopupSizeProvider, viewData.parentIndex), _compView_4, _appEl_4, ElementRef(_el_4)));
    final _el_5 = doc.createElement('div');
    import16.setAttribute(_el_5, 'header', '');
    addShimC(_el_5);
    project(_el_5, 0);
    final _anchor_6 = import16.appendAnchor(_el_5);
    _appEl_6 = ViewContainer(6, 5, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, (parentView, parentIndex) {
      return viewFactory_MaterialTreeDropdownComponent4<T>(parentView, parentIndex);
    });
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    final _anchor_7 = import16.createAnchor();
    _appEl_7 = ViewContainer(7, 4, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, (parentView, parentIndex) {
      return viewFactory_MaterialTreeDropdownComponent5<T>(parentView, parentIndex);
    });
    _DeferredContentDirective_7_9 = import9.DeferredContentDirective(_appEl_7, _TemplateRef_7_8, _MaterialPopupComponent_4_8);
    _compView_4.create(_MaterialPopupComponent_4_8, [
      [_el_5],
      <dynamic>[projectedNodes[1]]..addAll([_appEl_7]),
      const []
    ]);
    _el_0.addEventListener('focus', eventHandler1(_handle_focus_0_0));
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_1));
    _el_0.addEventListener('keydown', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_5.keydown));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_5.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_5.onMouseInteraction));
    final subscription_0 = _MaterialPopupComponent_4_8.onVisible.listen(eventHandler1(_handle_visibleChange_4_1));
    final subscription_1 = _MaterialPopupComponent_4_8.onOpened.listen(eventHandler0(_ctx.focus));
    init(const [], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((4 <= nodeIndex) && (nodeIndex <= 7))) {
      if (((identical(token, import8.MaterialPopupComponent) || identical(token, import32.DeferredContentAware)) || identical(token, import33.DropdownHandle))) {
        return _MaterialPopupComponent_4_8;
      }
      if (identical(token, import23.PopupHierarchy)) {
        return _PopupHierarchy_4_11;
      }
      if (identical(token, import34.PopupRef)) {
        return _PopupRef_4_12;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import4.PopupSourceDirective local_button = _PopupSourceDirective_0_6;
    _NgIf_1_9.ngIf = (!_ctx.showFilterInsideButton);
    _NgIf_2_9.ngIf = (!_ctx.showFilterInsideButton);
    _NgIf_3_9.ngIf = _ctx.showFilterInsideButton;
    changed = false;
    if (firstCheck) {
      _MaterialPopupComponent_4_8.enforceSpaceConstraints = true;
      changed = true;
      _MaterialPopupComponent_4_8.trackLayoutChanges = true;
      changed = true;
    }
    final currVal_6 = _ctx.popupPositions;
    if (import35.checkBinding(_expr_6, currVal_6)) {
      _MaterialPopupComponent_4_8.preferredPositions = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    final currVal_7 = local_button;
    if (import35.checkBinding(_expr_7, currVal_7)) {
      _MaterialPopupComponent_4_8.source = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    final currVal_9 = _ctx.visible;
    if (import35.checkBinding(_expr_9, currVal_9)) {
      _MaterialPopupComponent_4_8.visible = currVal_9;
      changed = true;
      _expr_9 = currVal_9;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    _NgIf_6_9.ngIf = (_ctx.supportsFiltering && _ctx.showFilterInsidePopup);
    if (firstCheck) {
      (_DeferredContentDirective_7_9.preserveDimensions = true);
    }
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    if ((!import35.AppViewUtils.throwOnChanges)) {
      if (_query_MaterialTreeFilterComponent_1_0_isDirty) {
        _ctx.materialTreeFilterComponent = import36.firstOrNull(import36.flattenNodes([
          _appEl_3.mapNestedViews((_ViewMaterialTreeDropdownComponent3 nestedView) {
            return [nestedView._MaterialTreeFilterComponent_0_5];
          }),
          _appEl_6.mapNestedViews((_ViewMaterialTreeDropdownComponent4 nestedView) {
            return [nestedView._MaterialTreeFilterComponent_0_5];
          })
        ]));
        _query_MaterialTreeFilterComponent_1_0_isDirty = false;
      }
    }
    final bool currVal_0 = (!_ctx.showFilterInsideButton);
    if (import35.checkBinding(_expr_0, currVal_0)) {
      import16.updateClassBinding(_el_0, 'border', currVal_0);
      _expr_0 = currVal_0;
    }
    if (firstCheck) {
      if (!identical(_ctx.popupClassName, null)) {
        _compView_4.updateChildClassNonHtml(_el_4, _ctx.popupClassName);
      }
    }
    _compView_4.detectHostChanges(firstCheck);
    _compView_4.detectChanges();
    if ((!import35.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _PopupSourceDirective_0_6.ngAfterViewInit();
        _MaterialPopupComponent_4_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _appEl_3.destroyNestedViews();
    _appEl_4.destroyNestedViews();
    _appEl_6.destroyNestedViews();
    _appEl_7.destroyNestedViews();
    _compView_4.destroyInternalState();
    _PopupSourceDirective_0_6.ngOnDestroy();
    _DeferredContentDirective_7_9.ngOnDestroy();
    _MaterialPopupComponent_4_8.ngOnDestroy();
  }

  void _handle_focus_0_0($event) {
    final _ctx = ctx;
    _ctx.visible = true;
    _KeyboardOnlyFocusIndicatorDirective_0_5.onFocus($event);
  }

  void _handle_click_0_1($event) {
    final _ctx = ctx;
    _ctx.visible = (!_ctx.visible);
    _KeyboardOnlyFocusIndicatorDirective_0_5.onMouseInteraction();
  }

  void _handle_visibleChange_4_1($event) {
    final _ctx = ctx;
    _ctx.visible = $event;
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import11.ComponentStyles.scoped(styles$MaterialTreeDropdownComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialTreeDropdownComponent> _MaterialTreeDropdownComponentNgFactory = const ComponentFactory('material-tree-dropdown', viewFactory_MaterialTreeDropdownComponentHost0);
ComponentFactory<import2.MaterialTreeDropdownComponent> get MaterialTreeDropdownComponentNgFactory {
  return _MaterialTreeDropdownComponentNgFactory;
}

class _ViewMaterialTreeDropdownComponent1<T> extends AppView<import2.MaterialTreeDropdownComponent<T>> {
  final import37.TextBinding _textBinding_1 = import37.TextBinding();
  _ViewMaterialTreeDropdownComponent1(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeDropdownComponent<T>> build() {
    final doc = import10.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'button-text');
    addShimE(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import38.interpolateString0(_ctx.placeholder));
  }
}

AppView<void> viewFactory_MaterialTreeDropdownComponent1<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeDropdownComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent2<T> extends AppView<import2.MaterialTreeDropdownComponent<T>> {
  import39.ViewMaterialIconComponent0 _compView_0;
  import40.MaterialIconComponent _MaterialIconComponent_0_5;
  _ViewMaterialTreeDropdownComponent2(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeDropdownComponent<T>> build() {
    _compView_0 = import39.ViewMaterialIconComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'icon');
    import16.setAttribute(_el_0, 'icon', 'arrow_drop_down');
    addShimC(_el_0);
    _MaterialIconComponent_0_5 = import40.MaterialIconComponent(_el_0);
    _compView_0.create0(_MaterialIconComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_0_5.icon = 'arrow_drop_down';
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

AppView<void> viewFactory_MaterialTreeDropdownComponent2<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeDropdownComponent2<T>(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent3<T> extends AppView<import2.MaterialTreeDropdownComponent<T>> {
  import41.ViewMaterialTreeFilterComponent0 _compView_0;
  import42.MaterialTreeFilterComponent _MaterialTreeFilterComponent_0_5;
  String _expr_0;
  var _expr_1;
  _ViewMaterialTreeDropdownComponent3(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeDropdownComponent<T>> build() {
    _compView_0 = import41.ViewMaterialTreeFilterComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialTreeFilterComponent_0_5 = (import14.isDevMode
        ? import17.debugInjectorWrap(import42.MaterialTreeFilterComponent, () {
            return import42.MaterialTreeFilterComponent(parentView.parentView.injectorGetOptional(import43.MaterialTreeRoot, parentView.viewData.parentIndex));
          })
        : import42.MaterialTreeFilterComponent(parentView.parentView.injectorGetOptional(import43.MaterialTreeRoot, parentView.viewData.parentIndex)));
    _compView_0.create0(_MaterialTreeFilterComponent_0_5);
    final subscription_0 = _MaterialTreeFilterComponent_0_5.onFiltered.listen(eventHandler1(_handle_filter_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.placeholder;
    if (import35.checkBinding(_expr_0, currVal_0)) {
      _MaterialTreeFilterComponent_0_5.placeholder = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.filterableOptions;
    if (import35.checkBinding(_expr_1, currVal_1)) {
      _MaterialTreeFilterComponent_0_5.filterable = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import14.unsafeCast<ViewMaterialTreeDropdownComponent0>(parentView)._query_MaterialTreeFilterComponent_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }

  void _handle_filter_0_0($event) {
    final _ctx = ctx;
    _ctx.visible = true;
  }
}

AppView<void> viewFactory_MaterialTreeDropdownComponent3<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeDropdownComponent3<T>(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent4<T> extends AppView<import2.MaterialTreeDropdownComponent<T>> {
  import41.ViewMaterialTreeFilterComponent0 _compView_0;
  import42.MaterialTreeFilterComponent _MaterialTreeFilterComponent_0_5;
  String _expr_1;
  var _expr_2;
  _ViewMaterialTreeDropdownComponent4(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeDropdownComponent<T>> build() {
    _compView_0 = import41.ViewMaterialTreeFilterComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'search-box');
    import16.setAttribute(_el_0, 'leadingGlyph', 'search');
    addShimC(_el_0);
    _MaterialTreeFilterComponent_0_5 = (import14.isDevMode
        ? import17.debugInjectorWrap(import42.MaterialTreeFilterComponent, () {
            return import42.MaterialTreeFilterComponent(parentView.parentView.injectorGetOptional(import43.MaterialTreeRoot, parentView.viewData.parentIndex));
          })
        : import42.MaterialTreeFilterComponent(parentView.parentView.injectorGetOptional(import43.MaterialTreeRoot, parentView.viewData.parentIndex)));
    _compView_0.create0(_MaterialTreeFilterComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      (_MaterialTreeFilterComponent_0_5.leadingGlyph = 'search');
    }
    final currVal_1 = _ctx.placeholder;
    if (import35.checkBinding(_expr_1, currVal_1)) {
      _MaterialTreeFilterComponent_0_5.placeholder = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.filterableOptions;
    if (import35.checkBinding(_expr_2, currVal_2)) {
      _MaterialTreeFilterComponent_0_5.filterable = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import14.unsafeCast<ViewMaterialTreeDropdownComponent0>(parentView)._query_MaterialTreeFilterComponent_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<void> viewFactory_MaterialTreeDropdownComponent4<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeDropdownComponent4<T>(parentView, parentIndex);
}

class _ViewMaterialTreeDropdownComponent5<T> extends AppView<import2.MaterialTreeDropdownComponent<T>> {
  import44.ViewMaterialTreeComponent0<T> _compView_0;
  import45.MaterialTreeComponent<T> _MaterialTreeComponent_0_5;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  _ViewMaterialTreeDropdownComponent5(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialTreeDropdownComponent<T>> build() {
    _compView_0 = import44.ViewMaterialTreeComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialTreeComponent_0_5 = (import14.isDevMode
        ? import17.debugInjectorWrap(import45.MaterialTreeComponent, () {
            return import45.MaterialTreeComponent(parentView.parentView.injectorGetOptional(import43.MaterialTreeRoot, parentView.viewData.parentIndex), null);
          })
        : import45.MaterialTreeComponent(parentView.parentView.injectorGetOptional(import43.MaterialTreeRoot, parentView.viewData.parentIndex), null));
    _compView_0.create0(_MaterialTreeComponent_0_5);
    init1(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import43.MaterialTreeRoot) && (0 == nodeIndex))) {
      return _MaterialTreeComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.expandAll;
    if (import35.checkBinding(_expr_0, currVal_0)) {
      _MaterialTreeComponent_0_5.expandAll = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.allowParentSingleSelection;
    if (import35.checkBinding(_expr_1, currVal_1)) {
      _MaterialTreeComponent_0_5.allowParentSingleSelection = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.componentRenderer;
    if (import35.checkBinding(_expr_2, currVal_2)) {
      _MaterialTreeComponent_0_5.componentRenderer = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.itemRenderer;
    if (import35.checkBinding(_expr_3, currVal_3)) {
      _MaterialTreeComponent_0_5.itemRenderer = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.options;
    if (import35.checkBinding(_expr_4, currVal_4)) {
      _MaterialTreeComponent_0_5.options = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.selection;
    if (import35.checkBinding(_expr_5, currVal_5)) {
      _MaterialTreeComponent_0_5.selection = currVal_5;
      _expr_5 = currVal_5;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<void> viewFactory_MaterialTreeDropdownComponent5<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeDropdownComponent5<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialTreeDropdownComponentHost = const [];

class _ViewMaterialTreeDropdownComponentHost0<T> extends AppView<import2.MaterialTreeDropdownComponent<T>> {
  ViewMaterialTreeDropdownComponent0<T> _compView_0;
  import2.MaterialTreeDropdownComponent<T> _MaterialTreeDropdownComponent_0_5;
  _ViewMaterialTreeDropdownComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialTreeDropdownComponent<T>> build() {
    _compView_0 = ViewMaterialTreeDropdownComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTreeDropdownComponent_0_5 = (import14.isDevMode
        ? import17.debugInjectorWrap(import2.MaterialTreeDropdownComponent, () {
            return import2.MaterialTreeDropdownComponent(this.injectorGet(import18.DomService, viewData.parentIndex), null, rootEl);
          })
        : import2.MaterialTreeDropdownComponent(this.injectorGet(import18.DomService, viewData.parentIndex), null, rootEl));
    _compView_0.create(_MaterialTreeDropdownComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialTreeDropdownComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import2.MaterialTreeDropdownComponent) || identical(token, import21.Focusable)) || identical(token, import43.MaterialTreeRoot)) && (0 == nodeIndex))) {
      return _MaterialTreeDropdownComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import35.AppViewUtils.throwOnChanges) && firstCheck)) {
      _MaterialTreeDropdownComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.MaterialTreeDropdownComponent<T>> viewFactory_MaterialTreeDropdownComponentHost0<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTreeDropdownComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTreeDropdownComponent, MaterialTreeDropdownComponentNgFactory);
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
  _ref15.initReflector();
  _ref16.initReflector();
  _ref17.initReflector();
  _ref18.initReflector();
}
