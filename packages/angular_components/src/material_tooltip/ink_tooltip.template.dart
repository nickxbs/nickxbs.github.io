// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'ink_tooltip.dart';
export 'ink_tooltip.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content.template.dart' as _ref1;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref2;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref3;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref4;
import 'package:angular_components/material_tooltip/module.template.dart' as _ref5;
import 'package:angular_components/utils/angular/css/css.template.dart' as _ref6;
import 'tooltip_controller.template.dart' as _ref7;
import 'tooltip_target.template.dart' as _ref8;
import 'package:angular_components/src/material_tooltip/ink_tooltip.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'ink_tooltip.dart' as import2;
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
import '../../material_popup/material_popup.template.dart' as import13;
import '../../material_popup/material_popup.dart' as import14;
import '../../content/deferred_content.dart' as import15;
import 'package:angular/src/di/errors.dart' as import16;
import '../laminate/popup/popup_hierarchy.dart' as import17;
import 'package:angular/src/core/zone/ng_zone.dart' as import18;
import '../laminate/overlay/overlay_service.dart' as import19;
import '../../utils/browser/dom_service/dom_service.dart' as import20;
import '../../laminate/overlay/zindexer.dart' as import21;
import 'package:angular/src/core/di/opaque_token.dart' as import22;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import24;
import '../laminate/popup/popup_size_provider.dart' as import25;
import 'package:angular/src/core/linker/element_ref.dart';
import '../../content/deferred_content_aware.dart' as import27;
import '../../mixins/material_dropdown_base.dart' as import28;
import '../laminate/popup/popup_ref.dart' as import29;
import 'package:angular/src/core/linker/app_view_utils.dart' as import30;
import 'package:angular/src/runtime/interpolate.dart' as import31;
import 'package:angular/src/runtime/text_binding.dart' as import32;
import 'tooltip_controller.dart' as import33;
import '../../material_tooltip/module.dart' as import34;
import '../../utils/disposer/disposer.dart' as import35;

final List<dynamic> styles$MaterialInkTooltipComponent = [import0.styles];

class ViewMaterialInkTooltipComponent0 extends AppView<import2.MaterialInkTooltipComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialInkTooltipComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import8.document.createElement('material-tooltip-text');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/src/material_tooltip/ink_tooltip.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialInkTooltipComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import11.appendText(parentRenderNode, '        ');
    final _anchor_1 = import11.appendAnchor(parentRenderNode);
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialInkTooltipComponent1);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_1_9.ngIf = (_ctx.popupSource != null);
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$MaterialInkTooltipComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialInkTooltipComponent> _MaterialInkTooltipComponentNgFactory = const ComponentFactory('material-tooltip-text', viewFactory_MaterialInkTooltipComponentHost0);
ComponentFactory<import2.MaterialInkTooltipComponent> get MaterialInkTooltipComponentNgFactory {
  return _MaterialInkTooltipComponentNgFactory;
}

class _ViewMaterialInkTooltipComponent1 extends AppView<import2.MaterialInkTooltipComponent> {
  import13.ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import14.MaterialPopupComponent _MaterialPopupComponent_0_8;
  dynamic __PopupHierarchy_0_11;
  dynamic __PopupRef_0_12;
  ViewContainer _appEl_2;
  import15.DeferredContentDirective _DeferredContentDirective_2_9;
  String _expr_0;
  var _expr_4;
  var _expr_5;
  bool _expr_7;
  import8.Element _el_0;
  _ViewMaterialInkTooltipComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  dynamic get _PopupHierarchy_0_11 {
    if ((__PopupHierarchy_0_11 == null)) {
      (__PopupHierarchy_0_11 = import14.getHierarchy(_MaterialPopupComponent_0_8));
    }
    return __PopupHierarchy_0_11;
  }

  dynamic get _PopupRef_0_12 {
    if ((__PopupRef_0_12 == null)) {
      (__PopupRef_0_12 = import14.getResolvedPopupRef(_MaterialPopupComponent_0_8));
    }
    return __PopupRef_0_12;
  }

  @override
  ComponentRef<import2.MaterialInkTooltipComponent> build() {
    _compView_0 = import13.ViewMaterialPopupComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    import11.setAttribute(_el_0, 'enforceSpaceConstraints', '');
    import11.setAttribute(_el_0, 'ink', '');
    import11.setAttribute(_el_0, 'role', 'tooltip');
    import11.setAttribute(_el_0, 'trackLayoutChanges', '');
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _MaterialPopupComponent_0_8 = (import9.isDevMode
        ? import16.debugInjectorWrap(import14.MaterialPopupComponent, () {
            return import14.MaterialPopupComponent(parentView.injectorGetOptional(import17.PopupHierarchy, viewData.parentIndex), parentView.injectorGetOptional(import14.MaterialPopupComponent, viewData.parentIndex), 'tooltip', parentView.injectorGet(import18.NgZone, viewData.parentIndex), parentView.injectorGet(import19.OverlayService, viewData.parentIndex), parentView.injectorGet(import20.DomService, viewData.parentIndex), parentView.injectorGet(import21.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import22.OpaqueToken<List<import24.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import22.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(const import22.OpaqueToken<dynamic>('overlayViewportBoundaries'), viewData.parentIndex), parentView.injectorGetOptional(import25.PopupSizeProvider, viewData.parentIndex), _compView_0, _appEl_0, ElementRef(_el_0));
          })
        : import14.MaterialPopupComponent(parentView.injectorGetOptional(import17.PopupHierarchy, viewData.parentIndex), parentView.injectorGetOptional(import14.MaterialPopupComponent, viewData.parentIndex), 'tooltip', parentView.injectorGet(import18.NgZone, viewData.parentIndex), parentView.injectorGet(import19.OverlayService, viewData.parentIndex), parentView.injectorGet(import20.DomService, viewData.parentIndex), parentView.injectorGet(import21.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import22.OpaqueToken<List<import24.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import22.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(const import22.OpaqueToken<dynamic>('overlayViewportBoundaries'), viewData.parentIndex), parentView.injectorGetOptional(import25.PopupSizeProvider, viewData.parentIndex), _compView_0, _appEl_0, ElementRef(_el_0)));
    final _text_1 = import11.createText('\n          ');
    final _anchor_2 = import11.createAnchor();
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialInkTooltipComponent2);
    _DeferredContentDirective_2_9 = import15.DeferredContentDirective(_appEl_2, _TemplateRef_2_8, _MaterialPopupComponent_0_8);
    final _text_3 = import11.createText('\n        ');
    _compView_0.create(_MaterialPopupComponent_0_8, [
      const [],
      [_text_1, _appEl_2, _text_3],
      const []
    ]);
    init1(_appEl_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 3)) {
      if (((identical(token, import14.MaterialPopupComponent) || identical(token, import27.DeferredContentAware)) || identical(token, import28.DropdownHandle))) {
        return _MaterialPopupComponent_0_8;
      }
      if (identical(token, import17.PopupHierarchy)) {
        return _PopupHierarchy_0_11;
      }
      if (identical(token, import29.PopupRef)) {
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
    changed = false;
    if (firstCheck) {
      _MaterialPopupComponent_0_8.autoDismiss = false;
      changed = true;
      _MaterialPopupComponent_0_8.enforceSpaceConstraints = true;
      changed = true;
      _MaterialPopupComponent_0_8.matchMinSourceWidth = false;
      changed = true;
      _MaterialPopupComponent_0_8.trackLayoutChanges = true;
      changed = true;
      _MaterialPopupComponent_0_8.inkBackground = true;
      changed = true;
    }
    final currVal_4 = _ctx.positions;
    if (import30.checkBinding(_expr_4, currVal_4)) {
      _MaterialPopupComponent_0_8.preferredPositions = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.popupSource;
    if (import30.checkBinding(_expr_5, currVal_5)) {
      _MaterialPopupComponent_0_8.source = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    final currVal_7 = _ctx.showPopup;
    if (import30.checkBinding(_expr_7, currVal_7)) {
      _MaterialPopupComponent_0_8.visible = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (_DeferredContentDirective_2_9.preserveDimensions = true);
    }
    _appEl_0.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    final currVal_0 = import31.interpolateString1('aacmtit-ink-tooltip-shadow ', _ctx.popupClassName, '');
    if (import30.checkBinding(_expr_0, currVal_0)) {
      _compView_0.updateChildClassNonHtml(_el_0, currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if ((!import30.AppViewUtils.throwOnChanges)) {
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

AppView<void> viewFactory_MaterialInkTooltipComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInkTooltipComponent1(parentView, parentIndex);
}

class _ViewMaterialInkTooltipComponent2 extends AppView<import2.MaterialInkTooltipComponent> {
  final import32.TextBinding _textBinding_2 = import32.TextBinding();
  _ViewMaterialInkTooltipComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialInkTooltipComponent> build() {
    final _ctx = ctx;
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'ink-container');
    addShimC(_el_0);
    final _text_1 = import11.appendText(_el_0, '\n            ');
    _el_0.append(_textBinding_2.element);
    project(_el_0, 0);
    final _text_3 = import11.appendText(_el_0, '\n          ');
    _el_0.addEventListener('mouseover', eventHandler0(_ctx.onMouseOver));
    _el_0.addEventListener('mouseleave', eventHandler0(_ctx.onMouseLeave));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_2.updateText(import31.interpolateString0(_ctx.text));
  }
}

AppView<void> viewFactory_MaterialInkTooltipComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInkTooltipComponent2(parentView, parentIndex);
}

final List<dynamic> styles$MaterialInkTooltipComponentHost = const [];

class _ViewMaterialInkTooltipComponentHost0 extends AppView<import2.MaterialInkTooltipComponent> {
  ViewMaterialInkTooltipComponent0 _compView_0;
  dynamic _TooltipController_0_5;
  import2.MaterialInkTooltipComponent _MaterialInkTooltipComponent_0_6;
  _ViewMaterialInkTooltipComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialInkTooltipComponent> build() {
    _compView_0 = ViewMaterialInkTooltipComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _TooltipController_0_5 = (import9.isDevMode
        ? import16.debugInjectorWrap(import33.TooltipController, () {
            return import34.createTooltipController(this.injectorGetOptional(import33.TooltipController, viewData.parentIndex), this.injectorGetOptional(import35.Disposer, viewData.parentIndex));
          })
        : import34.createTooltipController(this.injectorGetOptional(import33.TooltipController, viewData.parentIndex), this.injectorGetOptional(import35.Disposer, viewData.parentIndex)));
    _MaterialInkTooltipComponent_0_6 = import2.MaterialInkTooltipComponent(_TooltipController_0_5, _compView_0, rootEl, null);
    _compView_0.create(_MaterialInkTooltipComponent_0_6, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialInkTooltipComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import33.TooltipController) && (0 == nodeIndex))) {
      return _TooltipController_0_5;
    }
    return notFoundResult;
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
  }
}

AppView<import2.MaterialInkTooltipComponent> viewFactory_MaterialInkTooltipComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInkTooltipComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialInkTooltipComponent, MaterialInkTooltipComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
}
