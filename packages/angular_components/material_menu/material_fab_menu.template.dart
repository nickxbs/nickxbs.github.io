// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_fab_menu.dart';
export 'material_fab_menu.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'menu_item_groups.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular/meta.template.dart' as _ref2;
import 'package:angular_components/content/deferred_content.template.dart' as _ref3;
import 'package:angular_components/focus/focus.template.dart' as _ref4;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref5;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref6;
import 'package:angular_components/material_button/material_fab.template.dart' as _ref7;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref8;
import 'package:angular_components/material_list/material_list_item.template.dart' as _ref9;
import 'package:angular_components/material_menu/menu_root.template.dart' as _ref10;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref11;
import 'package:angular_components/material_tooltip/material_tooltip.template.dart' as _ref12;
import 'package:angular_components/mixins/track_layout_changes.template.dart' as _ref13;
import 'package:angular_components/model/a11y/keyboard_handler_mixin.template.dart' as _ref14;
import 'package:angular_components/model/menu/menu.template.dart' as _ref15;
import 'package:angular_components/model/observable/observable.template.dart' as _ref16;
import 'package:angular_components/material_menu/material_fab_menu.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_fab_menu.dart' as import2;
import '../material_button/material_fab.template.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import '../material_button/material_fab.dart' as import5;
import '../src/material_tooltip/tooltip.dart' as import6;
import '../src/laminate/popup/popup_source_directive.dart' as import7;
import '../material_icon/material_icon.template.dart' as import8;
import '../material_icon/material_icon.dart' as import9;
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import11;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import12;
import 'package:angular/src/core/linker/view_type.dart' as import13;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import15;
import 'package:angular/src/di/errors.dart' as import16;
import '../src/material_tooltip/tooltip_controller.dart' as import17;
import '../material_tooltip/module.dart' as import18;
import '../utils/disposer/disposer.dart' as import19;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import21;
import '../src/laminate/popup/dom_popup_source.dart' as import22;
import '../utils/angular/reference/reference.dart' as import23;
import '../focus/focus_interface.dart' as import24;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import26;
import '../material_popup/material_popup.template.dart' as import27;
import '../material_popup/material_popup.dart' as import28;
import '../content/deferred_content.dart' as import29;
import '../src/laminate/popup/popup_hierarchy.dart' as import30;
import 'package:angular/src/core/zone/ng_zone.dart' as import31;
import '../src/laminate/overlay/overlay_service.dart' as import32;
import '../utils/browser/dom_service/dom_service.dart' as import33;
import '../laminate/overlay/zindexer.dart' as import34;
import 'package:angular/src/core/di/opaque_token.dart' as import35;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import37;
import '../src/laminate/popup/popup_size_provider.dart' as import38;
import 'package:angular/src/core/linker/element_ref.dart';
import '../content/deferred_content_aware.dart' as import40;
import '../mixins/material_dropdown_base.dart' as import41;
import '../src/laminate/popup/popup_ref.dart' as import42;
import '../material_list/material_list_item.template.dart' as import43;
import '../material_list/material_list_item.dart' as import44;
import 'menu_item_groups.template.dart' as import45;
import 'common/menu_root.dart' as import46;
import 'menu_item_groups.dart' as import47;
import 'package:angular/src/runtime/interpolate.dart' as import48;
import '../utils/id_generator/id_generator.dart' as import49;
import '../interfaces/has_disabled.dart' as import50;

final List<dynamic> styles$MaterialFabMenuComponent = [import0.styles];

class ViewMaterialFabMenuComponent0 extends AppView<import2.MaterialFabMenuComponent> {
  import3.ViewMaterialFabComponent0 _compView_1;
  ViewContainer _appEl_1;
  import5.MaterialFabComponent _MaterialFabComponent_1_8;
  import6.MaterialTooltipDirective _MaterialTooltipDirective_1_9;
  import7.PopupSourceDirective _PopupSourceDirective_1_10;
  dynamic __TooltipController_1_11;
  import8.ViewMaterialIconComponent0 _compView_3;
  import9.MaterialIconComponent _MaterialIconComponent_3_5;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  String _expr_6;
  bool _expr_7;
  var _expr_8;
  import11.Element _el_1;
  static import12.ComponentStyles _componentStyles;
  ViewMaterialFabMenuComponent0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import11.document.createElement('material-fab-menu');
  }
  dynamic get _TooltipController_1_11 {
    if ((__TooltipController_1_11 == null)) {
      (__TooltipController_1_11 = (import15.isDevMode
          ? import16.debugInjectorWrap(import17.TooltipController, () {
              return import18.createTooltipController(parentView.injectorGetOptional(import17.TooltipController, viewData.parentIndex), parentView.injectorGetOptional(import19.Disposer, viewData.parentIndex));
            })
          : import18.createTooltipController(parentView.injectorGetOptional(import17.TooltipController, viewData.parentIndex), parentView.injectorGetOptional(import19.Disposer, viewData.parentIndex))));
    }
    return __TooltipController_1_11;
  }

  static String get _debugComponentUrl {
    return (import15.isDevMode ? 'asset:angular_components/lib/material_menu/material_fab_menu.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialFabMenuComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import11.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import21.appendText(parentRenderNode, '\n');
    _compView_1 = import3.ViewMaterialFabComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    parentRenderNode.append(_el_1);
    import21.setAttribute(_el_1, 'popupSource', '');
    import21.setAttribute(_el_1, 'raised', '');
    addShimC(_el_1);
    _appEl_1 = ViewContainer(1, null, this, _el_1);
    _MaterialFabComponent_1_8 = import5.MaterialFabComponent(_el_1, _compView_1);
    _MaterialTooltipDirective_1_9 = (import15.isDevMode
        ? import16.debugInjectorWrap(import6.MaterialTooltipDirective, () {
            return import6.MaterialTooltipDirective(parentView.injectorGet(import22.DomPopupSourceFactory, viewData.parentIndex), _appEl_1, _el_1, _appEl_1, _compView_1, parentView.injectorGet(import11.Window, viewData.parentIndex), null, null);
          })
        : import6.MaterialTooltipDirective(parentView.injectorGet(import22.DomPopupSourceFactory, viewData.parentIndex), _appEl_1, _el_1, _appEl_1, _compView_1, parentView.injectorGet(import11.Window, viewData.parentIndex), null, null));
    _PopupSourceDirective_1_10 = (import15.isDevMode
        ? import16.debugInjectorWrap(import7.PopupSourceDirective, () {
            return import7.PopupSourceDirective(parentView.injectorGet(import22.DomPopupSourceFactory, viewData.parentIndex), _el_1, parentView.injectorGetOptional(import23.ReferenceDirective, viewData.parentIndex), parentView.injectorGetOptional(import24.Focusable, viewData.parentIndex), null);
          })
        : import7.PopupSourceDirective(parentView.injectorGet(import22.DomPopupSourceFactory, viewData.parentIndex), _el_1, parentView.injectorGetOptional(import23.ReferenceDirective, viewData.parentIndex), parentView.injectorGetOptional(import24.Focusable, viewData.parentIndex), null));
    final _text_2 = import21.createText('\n  ');
    _compView_3 = import8.ViewMaterialIconComponent0(this, 3);
    final _el_3 = _compView_3.rootEl;
    addShimC(_el_3);
    _MaterialIconComponent_3_5 = import9.MaterialIconComponent(_el_3);
    _compView_3.create0(_MaterialIconComponent_3_5);
    final _text_4 = import21.createText('\n');
    _compView_1.create(_MaterialFabComponent_1_8, [
      [_text_2, _el_3, _text_4]
    ]);
    final _text_5 = import21.appendText(parentRenderNode, '\n');
    final _anchor_6 = import21.appendAnchor(parentRenderNode);
    _appEl_6 = ViewContainer(6, null, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_MaterialFabMenuComponent1);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    final _text_7 = import21.appendText(parentRenderNode, '\n');
    _el_1.addEventListener('keydown', eventHandler1(_ctx.onKeyDown));
    final subscription_0 = _MaterialFabComponent_1_8.trigger.listen(eventHandler1(_ctx.trigger));
    init(const [], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.TooltipController) && ((1 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _TooltipController_1_11;
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
      _MaterialFabComponent_1_8.raised = true;
      changed = true;
    }
    final bool currVal_3 = (!_ctx.isFabEnabled);
    if (import26.checkBinding(_expr_3, currVal_3)) {
      _MaterialFabComponent_1_8.disabled = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.tooltipPositions, null)) {
        (_MaterialTooltipDirective_1_9.positions = _ctx.tooltipPositions);
      }
    }
    final currVal_6 = _ctx.tooltip;
    if (import26.checkBinding(_expr_6, currVal_6)) {
      _MaterialTooltipDirective_1_9.text = currVal_6;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.hasTooltip;
    if (import26.checkBinding(_expr_7, currVal_7)) {
      _MaterialTooltipDirective_1_9.canShow = currVal_7;
      _expr_7 = currVal_7;
    }
    if (((!import26.AppViewUtils.throwOnChanges) && firstCheck)) {
      _MaterialTooltipDirective_1_9.ngOnInit();
    }
    changed = false;
    final currVal_8 = _ctx.glyph;
    if (import26.checkBinding(_expr_8, currVal_8)) {
      _MaterialIconComponent_3_5.icon = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    _NgIf_6_9.ngIf = _ctx.hasMenu;
    _appEl_1.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    final currVal_0 = _ctx.isFabHidden;
    if (import26.checkBinding(_expr_0, currVal_0)) {
      import21.updateClassBindingNonHtml(_el_1, 'invisible', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.ariaLabel;
    if (import26.checkBinding(_expr_1, currVal_1)) {
      import21.updateAttribute(_el_1, 'aria-label', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.naviId;
    if (import26.checkBinding(_expr_2, currVal_2)) {
      import21.updateAttribute(_el_1, 'navi-id', currVal_2);
      _expr_2 = currVal_2;
    }
    _compView_1.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    _compView_3.detectChanges();
    if ((!import26.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialTooltipDirective_1_9.ngAfterViewInit();
        _PopupSourceDirective_1_10.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_6.destroyNestedViews();
    _compView_1.destroyInternalState();
    _compView_3.destroyInternalState();
    _MaterialTooltipDirective_1_9.ngOnDestroy();
    _PopupSourceDirective_1_10.ngOnDestroy();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import12.ComponentStyles.scoped(styles$MaterialFabMenuComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialFabMenuComponent> _MaterialFabMenuComponentNgFactory = const ComponentFactory('material-fab-menu', viewFactory_MaterialFabMenuComponentHost0);
ComponentFactory<import2.MaterialFabMenuComponent> get MaterialFabMenuComponentNgFactory {
  return _MaterialFabMenuComponentNgFactory;
}

class _ViewMaterialFabMenuComponent1 extends AppView<import2.MaterialFabMenuComponent> {
  import27.ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import28.MaterialPopupComponent _MaterialPopupComponent_0_8;
  dynamic __PopupHierarchy_0_11;
  dynamic __PopupRef_0_12;
  ViewContainer _appEl_2;
  import29.DeferredContentDirective _DeferredContentDirective_2_9;
  var _expr_2;
  var _expr_3;
  bool _expr_4;
  bool _expr_5;
  _ViewMaterialFabMenuComponent1(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  dynamic get _PopupHierarchy_0_11 {
    if ((__PopupHierarchy_0_11 == null)) {
      (__PopupHierarchy_0_11 = import28.getHierarchy(_MaterialPopupComponent_0_8));
    }
    return __PopupHierarchy_0_11;
  }

  dynamic get _PopupRef_0_12 {
    if ((__PopupRef_0_12 == null)) {
      (__PopupRef_0_12 = import28.getResolvedPopupRef(_MaterialPopupComponent_0_8));
    }
    return __PopupRef_0_12;
  }

  @override
  ComponentRef<import2.MaterialFabMenuComponent> build() {
    final _ctx = ctx;
    _compView_0 = import27.ViewMaterialPopupComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    import21.setAttribute(_el_0, 'autoDismiss', '');
    import21.setAttribute(_el_0, 'enforceSpaceConstraints', '');
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _MaterialPopupComponent_0_8 = (import15.isDevMode
        ? import16.debugInjectorWrap(import28.MaterialPopupComponent, () {
            return import28.MaterialPopupComponent(parentView.injectorGetOptional(import30.PopupHierarchy, viewData.parentIndex), parentView.injectorGetOptional(import28.MaterialPopupComponent, viewData.parentIndex), null, parentView.injectorGet(import31.NgZone, viewData.parentIndex), parentView.injectorGet(import32.OverlayService, viewData.parentIndex), parentView.injectorGet(import33.DomService, viewData.parentIndex), parentView.injectorGet(import34.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import35.OpaqueToken<List<import37.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import35.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(const import35.OpaqueToken<dynamic>('overlayViewportBoundaries'), viewData.parentIndex), parentView.injectorGetOptional(import38.PopupSizeProvider, viewData.parentIndex), _compView_0, _appEl_0, ElementRef(_el_0));
          })
        : import28.MaterialPopupComponent(parentView.injectorGetOptional(import30.PopupHierarchy, viewData.parentIndex), parentView.injectorGetOptional(import28.MaterialPopupComponent, viewData.parentIndex), null, parentView.injectorGet(import31.NgZone, viewData.parentIndex), parentView.injectorGet(import32.OverlayService, viewData.parentIndex), parentView.injectorGet(import33.DomService, viewData.parentIndex), parentView.injectorGet(import34.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import35.OpaqueToken<List<import37.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import35.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(const import35.OpaqueToken<dynamic>('overlayViewportBoundaries'), viewData.parentIndex), parentView.injectorGetOptional(import38.PopupSizeProvider, viewData.parentIndex), _compView_0, _appEl_0, ElementRef(_el_0)));
    final _text_1 = import21.createText('\n  ');
    final _anchor_2 = import21.createAnchor();
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialFabMenuComponent2);
    _DeferredContentDirective_2_9 = import29.DeferredContentDirective(_appEl_2, _TemplateRef_2_8, _MaterialPopupComponent_0_8);
    final _text_3 = import21.createText('\n');
    _compView_0.create(_MaterialPopupComponent_0_8, [
      const [],
      [_text_1, _appEl_2, _text_3],
      const []
    ]);
    final subscription_0 = _MaterialPopupComponent_0_8.onClose.listen(eventHandler0(_ctx.onPopupClosed));
    final subscription_1 = _MaterialPopupComponent_0_8.onOpened.listen(eventHandler0(_ctx.onPopupOpened));
    init([_appEl_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 3)) {
      if (((identical(token, import28.MaterialPopupComponent) || identical(token, import40.DeferredContentAware)) || identical(token, import41.DropdownHandle))) {
        return _MaterialPopupComponent_0_8;
      }
      if (identical(token, import30.PopupHierarchy)) {
        return _PopupHierarchy_0_11;
      }
      if (identical(token, import42.PopupRef)) {
        return _PopupRef_0_12;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_source = import15.unsafeCast<ViewMaterialFabMenuComponent0>(parentView)._PopupSourceDirective_1_10;
    changed = false;
    if (firstCheck) {
      _MaterialPopupComponent_0_8.autoDismiss = true;
      changed = true;
      _MaterialPopupComponent_0_8.enforceSpaceConstraints = true;
      changed = true;
      _MaterialPopupComponent_0_8.hasBox = false;
      changed = true;
    }
    final currVal_2 = _ctx.preferredPopupPositions;
    if (import26.checkBinding(_expr_2, currVal_2)) {
      _MaterialPopupComponent_0_8.preferredPositions = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_source;
    if (import26.checkBinding(_expr_3, currVal_3)) {
      _MaterialPopupComponent_0_8.source = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.trackLayoutChanges;
    if (import26.checkBinding(_expr_4, currVal_4)) {
      _MaterialPopupComponent_0_8.trackLayoutChanges = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.showPopup;
    if (import26.checkBinding(_expr_5, currVal_5)) {
      _MaterialPopupComponent_0_8.visible = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (_DeferredContentDirective_2_9.preserveDimensions = true);
    }
    _appEl_0.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if ((!import26.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialPopupComponent_0_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _compView_0.destroyInternalState();
    _DeferredContentDirective_2_9.ngOnDestroy();
    _MaterialPopupComponent_0_8.ngOnDestroy();
  }
}

AppView<void> viewFactory_MaterialFabMenuComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialFabMenuComponent1(parentView, parentIndex);
}

class _ViewMaterialFabMenuComponent2 extends AppView<import2.MaterialFabMenuComponent> {
  import43.ViewMaterialListItemComponent0 _compView_4;
  import44.MaterialListItemComponent _MaterialListItemComponent_4_5;
  import8.ViewMaterialIconComponent0 _compView_6;
  import9.MaterialIconComponent _MaterialIconComponent_6_5;
  import45.ViewMenuItemGroupsComponent0 _compView_9;
  import46.MenuRootDirective _MenuRootDirective_9_5;
  import47.MenuItemGroupsComponent _MenuItemGroupsComponent_9_7;
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  bool _expr_7;
  bool _expr_8;
  var _expr_9;
  import11.DivElement _el_0;
  import11.DivElement _el_2;
  _ViewMaterialFabMenuComponent2(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialFabMenuComponent> build() {
    final _ctx = ctx;
    final doc = import11.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'menu-content');
    import21.setAttribute(_el_0, 'elevation', '2');
    addShimC(_el_0);
    final _text_1 = import21.appendText(_el_0, '\n    ');
    _el_2 = import21.appendDiv(doc, _el_0);
    this.updateChildClass(_el_2, 'content-wrapper');
    addShimC(_el_2);
    final _text_3 = import21.appendText(_el_2, '\n      ');
    _compView_4 = import43.ViewMaterialListItemComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_2.append(_el_4);
    this.updateChildClassNonHtml(_el_4, import48.interpolateString2('', 'close-menu', ' ', import44.MaterialListItemComponent.hostClass, ''));
    addShimC(_el_4);
    _MaterialListItemComponent_4_5 = import44.MaterialListItemComponent(_el_4, import15.unsafeCast<_ViewMaterialFabMenuComponent1>(parentView)._MaterialPopupComponent_0_8, null, null);
    final _text_5 = import21.createText('\n        ');
    _compView_6 = import8.ViewMaterialIconComponent0(this, 6);
    final _el_6 = _compView_6.rootEl;
    this.updateChildClassNonHtml(_el_6, 'close-icon material-list-item-primary');
    import21.setAttribute(_el_6, 'icon', 'close');
    addShimC(_el_6);
    _MaterialIconComponent_6_5 = import9.MaterialIconComponent(_el_6);
    _compView_6.create0(_MaterialIconComponent_6_5);
    final _text_7 = import21.createText('\n      ');
    _compView_4.create(_MaterialListItemComponent_4_5, [
      [_text_5, _el_6, _text_7]
    ]);
    final _text_8 = import21.appendText(_el_2, '\n      ');
    _compView_9 = import45.ViewMenuItemGroupsComponent0(this, 9);
    final _el_9 = _compView_9.rootEl;
    _el_2.append(_el_9);
    this.updateChildClassNonHtml(_el_9, 'menu-groups');
    import21.setAttribute(_el_9, 'menu-root', '');
    import21.setAttribute(_el_9, 'preventCloseOnPressLeft', '');
    addShimC(_el_9);
    _MenuRootDirective_9_5 = import46.MenuRootDirective(import15.unsafeCast<_ViewMaterialFabMenuComponent1>(parentView)._MaterialPopupComponent_0_8);
    _MenuItemGroupsComponent_9_7 = (import15.isDevMode
        ? import16.debugInjectorWrap(import47.MenuItemGroupsComponent, () {
            return import47.MenuItemGroupsComponent(_MenuRootDirective_9_5, _compView_9, import15.unsafeCast<_ViewMaterialFabMenuComponent1>(parentView)._MaterialPopupComponent_0_8, parentView.parentView.injectorGetOptional(import49.IdGenerator, parentView.viewData.parentIndex));
          })
        : import47.MenuItemGroupsComponent(_MenuRootDirective_9_5, _compView_9, import15.unsafeCast<_ViewMaterialFabMenuComponent1>(parentView)._MaterialPopupComponent_0_8, parentView.parentView.injectorGetOptional(import49.IdGenerator, parentView.viewData.parentIndex)));
    _compView_9.create0(_MenuItemGroupsComponent_9_7);
    final _text_11 = import21.appendText(_el_2, '\n    ');
    final _text_12 = import21.appendText(_el_0, '\n  ');
    final subscription_0 = _MaterialListItemComponent_4_5.trigger.listen(eventHandler0(_ctx.hideMenu));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import50.HasDisabled) && ((4 <= nodeIndex) && (nodeIndex <= 7)))) {
      return _MaterialListItemComponent_4_5;
    }
    if ((identical(token, import46.MenuRoot) && ((9 <= nodeIndex) && (nodeIndex <= 10)))) {
      return _MenuRootDirective_9_5;
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
      _MaterialListItemComponent_4_5.closeOnActivate = false;
      changed = true;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_6_5.icon = 'close';
      changed = true;
    }
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MenuItemGroupsComponent_9_7.preventCloseOnPressLeft = '';
      changed = true;
    }
    final currVal_7 = _ctx.activateFirstItemOnInit;
    if (import26.checkBinding(_expr_7, currVal_7)) {
      _MenuItemGroupsComponent_9_7.activateFirstItemOnInit = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.activateLastItemOnInit;
    if (import26.checkBinding(_expr_8, currVal_8)) {
      _MenuItemGroupsComponent_9_7.activateLastItemOnInit = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.menuItem.subMenu;
    if (import26.checkBinding(_expr_9, currVal_9)) {
      _MenuItemGroupsComponent_9_7.menu = currVal_9;
      changed = true;
      _expr_9 = currVal_9;
    }
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    if (((!import26.AppViewUtils.throwOnChanges) && firstCheck)) {
      _MenuItemGroupsComponent_9_7.ngOnInit();
    }
    final currVal_0 = _ctx.menuVisible;
    if (import26.checkBinding(_expr_0, currVal_0)) {
      import21.updateClassBinding(_el_0, 'visible', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.closing;
    if (import26.checkBinding(_expr_1, currVal_1)) {
      import21.updateClassBinding(_el_0, 'closing', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.hasIcons;
    if (import26.checkBinding(_expr_2, currVal_2)) {
      import21.updateClassBinding(_el_0, 'has-icons', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.menuVisible;
    if (import26.checkBinding(_expr_3, currVal_3)) {
      import21.updateClassBinding(_el_2, 'visible', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.closing;
    if (import26.checkBinding(_expr_4, currVal_4)) {
      import21.updateClassBinding(_el_2, 'closing', currVal_4);
      _expr_4 = currVal_4;
    }
    _compView_4.detectHostChanges(firstCheck);
    _compView_4.detectChanges();
    _compView_6.detectChanges();
    _compView_9.detectChanges();
    if ((!import26.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MenuItemGroupsComponent_9_7.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_4.destroyInternalState();
    _compView_6.destroyInternalState();
    _compView_9.destroyInternalState();
    _MaterialListItemComponent_4_5.ngOnDestroy();
    _MenuItemGroupsComponent_9_7.ngOnDestroy();
  }
}

AppView<void> viewFactory_MaterialFabMenuComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialFabMenuComponent2(parentView, parentIndex);
}

final List<dynamic> styles$MaterialFabMenuComponentHost = const [];

class _ViewMaterialFabMenuComponentHost0 extends AppView<import2.MaterialFabMenuComponent> {
  ViewMaterialFabMenuComponent0 _compView_0;
  import2.MaterialFabMenuComponent _MaterialFabMenuComponent_0_5;
  _ViewMaterialFabMenuComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialFabMenuComponent> build() {
    _compView_0 = ViewMaterialFabMenuComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialFabMenuComponent_0_5 = import2.MaterialFabMenuComponent(_compView_0);
    _compView_0.create(_MaterialFabMenuComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialFabMenuComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialFabMenuComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialFabMenuComponent> viewFactory_MaterialFabMenuComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialFabMenuComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialFabMenuComponent, MaterialFabMenuComponentNgFactory);
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
}
