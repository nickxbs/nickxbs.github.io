// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'paper_tooltip.dart';
export 'paper_tooltip.dart';
import 'package:angular_components/src/material_tooltip/paper_tooltip.dart' as _i1;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref2;
import 'package:angular_components/focus/focus.template.dart' as _ref3;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref4;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref5;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref6;
import 'package:angular_components/material_tooltip/module.template.dart' as _ref7;
import 'package:angular_components/utils/angular/css/css.template.dart' as _ref8;
import 'tooltip_controller.template.dart' as _ref9;
import 'tooltip_target.template.dart' as _ref10;
import 'package:angular_components/src/material_tooltip/paper_tooltip.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'paper_tooltip.dart' as import2;
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
import 'package:angular/src/runtime/queries.dart' as import14;
import '../../material_popup/material_popup.template.dart' as import15;
import '../../material_popup/material_popup.dart' as import16;
import '../../focus/focus.dart' as import17;
import 'package:angular/src/di/errors.dart' as import18;
import '../laminate/popup/popup_hierarchy.dart' as import19;
import 'package:angular/src/core/zone/ng_zone.dart' as import20;
import '../laminate/overlay/overlay_service.dart' as import21;
import '../../utils/browser/dom_service/dom_service.dart' as import22;
import '../../laminate/overlay/zindexer.dart' as import23;
import 'package:angular/src/core/di/opaque_token.dart' as import24;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import26;
import '../laminate/popup/popup_size_provider.dart' as import27;
import 'package:angular/src/core/linker/element_ref.dart';
import '../../laminate/components/modal/modal.dart' as import29;
import '../../content/deferred_content_aware.dart' as import30;
import '../../mixins/material_dropdown_base.dart' as import31;
import '../laminate/popup/popup_ref.dart' as import32;
import 'tooltip_controller.dart' as import33;
import '../../material_tooltip/module.dart' as import34;
import '../../utils/disposer/disposer.dart' as import35;

final List<dynamic> styles$MaterialPaperTooltipComponent = [import0.styles];

class ViewMaterialPaperTooltipComponent0 extends AppView<import2.MaterialPaperTooltipComponent> {
  bool _query_MaterialPopupComponent_1_0_isDirty = true;
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialPaperTooltipComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import8.document.createElement('material-tooltip-card');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialPaperTooltipComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_MaterialPaperTooltipComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = (_ctx.popupSource != null);
    _appEl_0.detectChangesInNestedViews();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (_query_MaterialPopupComponent_1_0_isDirty) {
        _ctx.popupChild = import14.firstOrNull(_appEl_0.mapNestedViews((_ViewMaterialPaperTooltipComponent1 nestedView) {
          return [nestedView._MaterialPopupComponent_0_8];
        }));
        _query_MaterialPopupComponent_1_0_isDirty = false;
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
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$MaterialPaperTooltipComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialPaperTooltipComponent> _MaterialPaperTooltipComponentNgFactory = const ComponentFactory('material-tooltip-card', viewFactory_MaterialPaperTooltipComponentHost0);
ComponentFactory<import2.MaterialPaperTooltipComponent> get MaterialPaperTooltipComponentNgFactory {
  return _MaterialPaperTooltipComponentNgFactory;
}

class _ViewMaterialPaperTooltipComponent1 extends AppView<import2.MaterialPaperTooltipComponent> {
  import15.ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import16.MaterialPopupComponent _MaterialPopupComponent_0_8;
  dynamic _PopupRef_0_9;
  dynamic __PopupHierarchy_0_12;
  import17.AutoFocusDirective _AutoFocusDirective_2_5;
  bool _expr_1;
  int _expr_3;
  int _expr_4;
  var _expr_5;
  var _expr_6;
  bool _expr_8;
  bool _expr_9;
  import8.Element _el_0;
  _ViewMaterialPaperTooltipComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  dynamic get _PopupHierarchy_0_12 {
    if ((__PopupHierarchy_0_12 == null)) {
      (__PopupHierarchy_0_12 = import16.getHierarchy(_MaterialPopupComponent_0_8));
    }
    return __PopupHierarchy_0_12;
  }

  @override
  ComponentRef<import2.MaterialPaperTooltipComponent> build() {
    final _ctx = ctx;
    _compView_0 = import15.ViewMaterialPopupComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    import11.setAttribute(_el_0, 'enforceSpaceConstraints', '');
    import11.setAttribute(_el_0, 'role', 'tooltip');
    import11.setAttribute(_el_0, 'trackLayoutChanges', '');
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _MaterialPopupComponent_0_8 = (import9.isDevMode
        ? import18.debugInjectorWrap(import16.MaterialPopupComponent, () {
            return import16.MaterialPopupComponent(parentView.injectorGetOptional(import19.PopupHierarchy, viewData.parentIndex), parentView.injectorGetOptional(import16.MaterialPopupComponent, viewData.parentIndex), 'tooltip', parentView.injectorGet(import20.NgZone, viewData.parentIndex), parentView.injectorGet(import21.OverlayService, viewData.parentIndex), parentView.injectorGet(import22.DomService, viewData.parentIndex), parentView.injectorGet(import23.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import24.OpaqueToken<List<import26.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import24.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(const import24.OpaqueToken<dynamic>('overlayViewportBoundaries'), viewData.parentIndex), parentView.injectorGetOptional(import27.PopupSizeProvider, viewData.parentIndex), _compView_0, _appEl_0, ElementRef(_el_0));
          })
        : import16.MaterialPopupComponent(parentView.injectorGetOptional(import19.PopupHierarchy, viewData.parentIndex), parentView.injectorGetOptional(import16.MaterialPopupComponent, viewData.parentIndex), 'tooltip', parentView.injectorGet(import20.NgZone, viewData.parentIndex), parentView.injectorGet(import21.OverlayService, viewData.parentIndex), parentView.injectorGet(import22.DomService, viewData.parentIndex), parentView.injectorGet(import23.ZIndexer, viewData.parentIndex), parentView.injectorGet(const import24.OpaqueToken<List<import26.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), parentView.injectorGet(const import24.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), parentView.injectorGet(const import24.OpaqueToken<dynamic>('overlayViewportBoundaries'), viewData.parentIndex), parentView.injectorGetOptional(import27.PopupSizeProvider, viewData.parentIndex), _compView_0, _appEl_0, ElementRef(_el_0)));
    _PopupRef_0_9 = import16.getResolvedPopupRef(_MaterialPopupComponent_0_8);
    final _text_1 = import11.createText('\n  ');
    final doc = import8.document;
    final _el_2 = doc.createElement('div');
    this.updateChildClass(_el_2, 'paper-container');
    addShimC(_el_2);
    _AutoFocusDirective_2_5 = (import9.isDevMode
        ? import18.debugInjectorWrap(import17.AutoFocusDirective, () {
            return import17.AutoFocusDirective(_el_2, parentView.injectorGet(import22.DomService, viewData.parentIndex), null, parentView.injectorGetOptional(import29.ModalComponent, viewData.parentIndex), _PopupRef_0_9);
          })
        : import17.AutoFocusDirective(_el_2, parentView.injectorGet(import22.DomService, viewData.parentIndex), null, parentView.injectorGetOptional(import29.ModalComponent, viewData.parentIndex), _PopupRef_0_9));
    final _text_3 = import11.appendText(_el_2, '\n    ');
    final _el_4 = import11.appendDiv(doc, _el_2);
    this.updateChildClass(_el_4, 'header');
    addShimC(_el_4);
    project(_el_4, 0);
    final _text_5 = import11.appendText(_el_2, '\n    ');
    final _el_6 = import11.appendDiv(doc, _el_2);
    this.updateChildClass(_el_6, 'body');
    addShimC(_el_6);
    project(_el_6, 1);
    final _text_7 = import11.appendText(_el_2, '\n    ');
    final _el_8 = import11.appendDiv(doc, _el_2);
    this.updateChildClass(_el_8, 'footer');
    addShimC(_el_8);
    project(_el_8, 2);
    final _text_9 = import11.appendText(_el_2, '\n  ');
    final _text_10 = import11.createText('\n');
    _compView_0.create(_MaterialPopupComponent_0_8, [
      const [],
      [_text_1, _el_2, _text_10],
      const []
    ]);
    _el_2.addEventListener('mouseover', eventHandler0(_ctx.onMouseOver));
    _el_2.addEventListener('mouseleave', eventHandler0(_ctx.onMouseLeave));
    init1(_appEl_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 10)) {
      if (((identical(token, import16.MaterialPopupComponent) || identical(token, import30.DeferredContentAware)) || identical(token, import31.DropdownHandle))) {
        return _MaterialPopupComponent_0_8;
      }
      if (identical(token, import32.PopupRef)) {
        return _PopupRef_0_9;
      }
      if (identical(token, import19.PopupHierarchy)) {
        return _PopupHierarchy_0_12;
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
      _MaterialPopupComponent_0_8.enforceSpaceConstraints = true;
      changed = true;
      _MaterialPopupComponent_0_8.trackLayoutChanges = true;
      changed = true;
    }
    final currVal_1 = _ctx.focusContents;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _MaterialPopupComponent_0_8.autoDismiss = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_3 = _ctx.offsetX;
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _MaterialPopupComponent_0_8.offsetX = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.offsetY;
    if (import13.checkBinding(_expr_4, currVal_4)) {
      _MaterialPopupComponent_0_8.offsetY = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.preferredPositions;
    if (import13.checkBinding(_expr_5, currVal_5)) {
      _MaterialPopupComponent_0_8.preferredPositions = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.popupSource;
    if (import13.checkBinding(_expr_6, currVal_6)) {
      _MaterialPopupComponent_0_8.source = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    final currVal_8 = _ctx.showPopup;
    if (import13.checkBinding(_expr_8, currVal_8)) {
      _MaterialPopupComponent_0_8.visible = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_9 = _ctx.focusContents;
    if (import13.checkBinding(_expr_9, currVal_9)) {
      _AutoFocusDirective_2_5.autoFocus = currVal_9;
      _expr_9 = currVal_9;
    }
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _AutoFocusDirective_2_5.ngOnInit();
    }
    _appEl_0.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(_ctx.popupClassName, null)) {
        _compView_0.updateChildClassNonHtml(_el_0, _ctx.popupClassName);
      }
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialPopupComponent_0_8.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<ViewMaterialPaperTooltipComponent0>(parentView)._query_MaterialPopupComponent_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _compView_0.destroyInternalState();
    _AutoFocusDirective_2_5.ngOnDestroy();
    _MaterialPopupComponent_0_8.ngOnDestroy();
  }
}

AppView<void> viewFactory_MaterialPaperTooltipComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialPaperTooltipComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialPaperTooltipComponentHost = const [];

class _ViewMaterialPaperTooltipComponentHost0 extends AppView<import2.MaterialPaperTooltipComponent> {
  ViewMaterialPaperTooltipComponent0 _compView_0;
  dynamic _TooltipController_0_5;
  import2.MaterialPaperTooltipComponent _MaterialPaperTooltipComponent_0_6;
  dynamic __Tooltip_0_7;
  _ViewMaterialPaperTooltipComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _Tooltip_0_7 {
    if ((__Tooltip_0_7 == null)) {
      (__Tooltip_0_7 = import2.getTooltipHandle(_MaterialPaperTooltipComponent_0_6));
    }
    return __Tooltip_0_7;
  }

  @override
  ComponentRef<import2.MaterialPaperTooltipComponent> build() {
    _compView_0 = ViewMaterialPaperTooltipComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _TooltipController_0_5 = (import9.isDevMode
        ? import18.debugInjectorWrap(import33.TooltipController, () {
            return import34.createTooltipController(this.injectorGetOptional(import33.TooltipController, viewData.parentIndex), this.injectorGetOptional(import35.Disposer, viewData.parentIndex));
          })
        : import34.createTooltipController(this.injectorGetOptional(import33.TooltipController, viewData.parentIndex), this.injectorGetOptional(import35.Disposer, viewData.parentIndex)));
    _MaterialPaperTooltipComponent_0_6 = import2.MaterialPaperTooltipComponent(_TooltipController_0_5, _compView_0, rootEl, null);
    _compView_0.create(_MaterialPaperTooltipComponent_0_6, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialPaperTooltipComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import33.TooltipController)) {
        return _TooltipController_0_5;
      }
      if ((identical(token, import2.MaterialPaperTooltipComponent) || identical(token, import30.DeferredContentAware))) {
        return _MaterialPaperTooltipComponent_0_6;
      }
      if (identical(token, import33.Tooltip)) {
        return _Tooltip_0_7;
      }
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

AppView<import2.MaterialPaperTooltipComponent> viewFactory_MaterialPaperTooltipComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialPaperTooltipComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialPaperTooltipComponent, MaterialPaperTooltipComponentNgFactory);
  _ngRef.registerDependencies(getTooltipHandle, const [
    [_i1.MaterialPaperTooltipComponent]
  ]);
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
