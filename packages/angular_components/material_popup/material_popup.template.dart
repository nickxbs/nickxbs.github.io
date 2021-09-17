// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_popup.dart';
export 'material_popup.dart';
import 'package:angular_components/material_popup/material_popup.dart' as _i1;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref1;
import 'package:angular_components/focus/focus_interface.template.dart' as _ref2;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref3;
import 'package:angular_components/laminate/enums/visibility.template.dart' as _ref4;
import 'package:angular_components/laminate/overlay/module.template.dart' as _ref5;
import 'package:angular_components/laminate/overlay/overlay.template.dart' as _ref6;
import 'package:angular_components/laminate/overlay/zindexer.template.dart' as _ref7;
import 'package:angular_components/laminate/popup/module.template.dart' as _ref8;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref9;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref10;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref11;
import 'package:angular_components/model/math/box.template.dart' as _ref12;
import 'package:angular_components/model/ui/toggle.template.dart' as _ref13;
import 'package:angular_components/utils/async/async.template.dart' as _ref14;
import 'package:angular_components/utils/browser/dom_service/angular_2.template.dart' as _ref15;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref16;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref17;
import 'package:angular_components/material_popup/material_popup.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_popup.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/app_view_utils.dart' as import12;
import 'package:angular/src/runtime/interpolate.dart' as import13;
import 'package:angular/src/di/errors.dart' as import14;
import '../src/laminate/popup/popup_hierarchy.dart' as import15;
import 'package:angular/src/core/zone/ng_zone.dart' as import16;
import '../src/laminate/overlay/overlay_service.dart' as import17;
import '../utils/browser/dom_service/dom_service.dart' as import18;
import '../laminate/overlay/zindexer.dart' as import19;
import 'package:angular/src/core/di/opaque_token.dart' as import20;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import22;
import '../src/laminate/popup/popup_size_provider.dart' as import23;
import 'package:angular/src/core/linker/element_ref.dart';
import '../content/deferred_content_aware.dart' as import25;
import '../mixins/material_dropdown_base.dart' as import26;
import '../src/laminate/popup/popup_ref.dart' as import27;

final List<dynamic> styles$MaterialPopupComponent = [import0.styles];

class ViewMaterialPopupComponent0 extends AppView<import2.MaterialPopupComponent> {
  ViewContainer _appEl_1;
  TemplateRef _TemplateRef_1_7;
  var _expr_0;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialPopupComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import8.document.createElement('material-popup');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_popup/material_popup.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialPopupComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import11.appendText(parentRenderNode, '\n');
    final _anchor_1 = import11.appendAnchor(parentRenderNode);
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    _TemplateRef_1_7 = TemplateRef(_appEl_1, viewFactory_MaterialPopupComponent1);
    final _text_2 = import11.appendText(parentRenderNode, '\n');
    _ctx.templateRef = _TemplateRef_1_7;
    init0();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    final currVal_0 = _ctx.paneId;
    if (import12.checkBinding(_expr_0, currVal_0)) {
      import11.updateAttribute(rootEl, 'pane-id', currVal_0);
      _expr_0 = currVal_0;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$MaterialPopupComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialPopupComponent> _MaterialPopupComponentNgFactory = const ComponentFactory('material-popup', viewFactory_MaterialPopupComponentHost0);
ComponentFactory<import2.MaterialPopupComponent> get MaterialPopupComponentNgFactory {
  return _MaterialPopupComponentNgFactory;
}

class _ViewMaterialPopupComponent1 extends AppView<import2.MaterialPopupComponent> {
  var _expr_0;
  bool _expr_1;
  bool _expr_2;
  bool _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  bool _expr_7;
  var _expr_8;
  var _expr_10;
  var _expr_11;
  var _expr_12;
  var _expr_13;
  import8.DivElement _el_1;
  import8.DivElement _el_3;
  _ViewMaterialPopupComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialPopupComponent> build() {
    final _text_0 = import11.createText('\n  ');
    final doc = import8.document;
    _el_1 = doc.createElement('div');
    this.updateChildClass(_el_1, 'popup-wrapper mixin');
    addShimC(_el_1);
    final _text_2 = import11.appendText(_el_1, '\n      ');
    _el_3 = import11.appendDiv(doc, _el_1);
    this.updateChildClass(_el_3, 'popup');
    addShimC(_el_3);
    final _text_4 = import11.appendText(_el_3, '\n          ');
    final _text_5 = import11.appendText(_el_3, '\n          ');
    final _el_6 = import11.appendDiv(doc, _el_3);
    this.updateChildClass(_el_6, 'focusable-placeholder');
    _el_6.tabIndex = 0;
    addShimC(_el_6);
    final _text_7 = import11.appendText(_el_3, '\n          ');
    final _el_8 = import11.appendDiv(doc, _el_3);
    this.updateChildClass(_el_8, 'material-popup-content content');
    addShimC(_el_8);
    final _text_9 = import11.appendText(_el_8, '\n              ');
    final _el_10 = import11.appendElement(doc, _el_8, 'header');
    addShimE(_el_10);
    final _text_11 = import11.appendText(_el_10, '\n                  ');
    project(_el_10, 0);
    final _text_12 = import11.appendText(_el_10, '\n              ');
    final _text_13 = import11.appendText(_el_8, '\n              ');
    final _el_14 = import11.appendDiv(doc, _el_8);
    this.updateChildClass(_el_14, 'main');
    addShimC(_el_14);
    final _text_15 = import11.appendText(_el_14, '\n                  ');
    project(_el_14, 1);
    final _text_16 = import11.appendText(_el_14, '\n              ');
    final _text_17 = import11.appendText(_el_8, '\n              ');
    final _el_18 = import11.appendElement(doc, _el_8, 'footer');
    addShimE(_el_18);
    final _text_19 = import11.appendText(_el_18, '\n                  ');
    project(_el_18, 2);
    final _text_20 = import11.appendText(_el_18, '\n              ');
    final _text_21 = import11.appendText(_el_8, '\n          ');
    final _text_22 = import11.appendText(_el_3, '\n          ');
    final _text_23 = import11.appendText(_el_3, '\n          ');
    final _el_24 = import11.appendDiv(doc, _el_3);
    this.updateChildClass(_el_24, 'focusable-placeholder');
    _el_24.tabIndex = 0;
    addShimC(_el_24);
    final _text_25 = import11.appendText(_el_3, '\n      ');
    final _text_26 = import11.appendText(_el_1, '\n  ');
    final _text_27 = import11.createText('\n');
    _el_6.addEventListener('focus', eventHandler1(_handle_focus_6_0));
    _el_24.addEventListener('focus', eventHandler1(_handle_focus_24_0));
    init([_text_0, _el_1, _text_27], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      import11.setAttribute(_el_1, 'role', import13.interpolateString0(_ctx.role));
    }
    final currVal_0 = _ctx.z;
    if (import12.checkBinding(_expr_0, currVal_0)) {
      import11.updateAttribute(_el_1, 'elevation', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.hasBox;
    if (import12.checkBinding(_expr_1, currVal_1)) {
      import11.updateClassBinding(_el_1, 'shadow', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.matchMinSourceWidth;
    if (import12.checkBinding(_expr_2, currVal_2)) {
      import11.updateClassBinding(_el_1, 'full-width', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.inkBackground;
    if (import12.checkBinding(_expr_3, currVal_3)) {
      import11.updateClassBinding(_el_1, 'ink', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.slide;
    if (import12.checkBinding(_expr_4, currVal_4)) {
      import11.updateAttribute(_el_1, 'slide', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.zIndex;
    if (import12.checkBinding(_expr_5, currVal_5)) {
      import11.updateAttribute(_el_1, 'z-index', currVal_5?.toString());
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.transformOrigin;
    if (import12.checkBinding(_expr_6, currVal_6)) {
      _el_1.style.setProperty('transform-origin', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.showPopup;
    if (import12.checkBinding(_expr_7, currVal_7)) {
      import11.updateClassBinding(_el_1, 'visible', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = import13.interpolateString0(_ctx.uniqueId);
    if (import12.checkBinding(_expr_8, currVal_8)) {
      import11.setProperty(_el_1, 'id', currVal_8);
      _expr_8 = currVal_8;
    }
    final currVal_10 = _ctx.minHeight;
    if (import12.checkBinding(_expr_10, currVal_10)) {
      _el_3.style.setProperty('min-height', ((currVal_10 == null) ? null : (currVal_10.toString() + 'px')));
      _expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.minWidth;
    if (import12.checkBinding(_expr_11, currVal_11)) {
      _el_3.style.setProperty('min-width', ((currVal_11 == null) ? null : (currVal_11.toString() + 'px')));
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.maxHeight;
    if (import12.checkBinding(_expr_12, currVal_12)) {
      _el_3.style.setProperty('max-height', ((currVal_12 == null) ? null : (currVal_12.toString() + 'px')));
      _expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.maxWidth;
    if (import12.checkBinding(_expr_13, currVal_13)) {
      _el_3.style.setProperty('max-width', ((currVal_13 == null) ? null : (currVal_13.toString() + 'px')));
      _expr_13 = currVal_13;
    }
  }

  void _handle_focus_6_0($event) {
    final _ctx = ctx;
    _ctx.visible = false;
  }

  void _handle_focus_24_0($event) {
    final _ctx = ctx;
    _ctx.visible = false;
  }
}

AppView<void> viewFactory_MaterialPopupComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialPopupComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MaterialPopupComponentHost = const [];

class _ViewMaterialPopupComponentHost0 extends AppView<import2.MaterialPopupComponent> {
  ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import2.MaterialPopupComponent _MaterialPopupComponent_0_8;
  dynamic __PopupHierarchy_0_11;
  dynamic __PopupRef_0_12;
  _ViewMaterialPopupComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _PopupHierarchy_0_11 {
    if ((__PopupHierarchy_0_11 == null)) {
      (__PopupHierarchy_0_11 = import2.getHierarchy(_MaterialPopupComponent_0_8));
    }
    return __PopupHierarchy_0_11;
  }

  dynamic get _PopupRef_0_12 {
    if ((__PopupRef_0_12 == null)) {
      (__PopupRef_0_12 = import2.getResolvedPopupRef(_MaterialPopupComponent_0_8));
    }
    return __PopupRef_0_12;
  }

  @override
  ComponentRef<import2.MaterialPopupComponent> build() {
    _compView_0 = ViewMaterialPopupComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _appEl_0 = ViewContainer(0, null, this, rootEl);
    _MaterialPopupComponent_0_8 = (import9.isDevMode
        ? import14.debugInjectorWrap(import2.MaterialPopupComponent, () {
            return import2.MaterialPopupComponent(this.injectorGetOptional(import15.PopupHierarchy, viewData.parentIndex), this.injectorGetOptional(import2.MaterialPopupComponent, viewData.parentIndex), null, this.injectorGet(import16.NgZone, viewData.parentIndex), this.injectorGet(import17.OverlayService, viewData.parentIndex), this.injectorGet(import18.DomService, viewData.parentIndex), this.injectorGet(import19.ZIndexer, viewData.parentIndex), this.injectorGet(const import20.OpaqueToken<List<import22.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), this.injectorGet(const import20.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), this.injectorGet(const import20.OpaqueToken<dynamic>('overlayViewportBoundaries'), viewData.parentIndex), this.injectorGetOptional(import23.PopupSizeProvider, viewData.parentIndex), _compView_0, _appEl_0, ElementRef(rootEl));
          })
        : import2.MaterialPopupComponent(this.injectorGetOptional(import15.PopupHierarchy, viewData.parentIndex), this.injectorGetOptional(import2.MaterialPopupComponent, viewData.parentIndex), null, this.injectorGet(import16.NgZone, viewData.parentIndex), this.injectorGet(import17.OverlayService, viewData.parentIndex), this.injectorGet(import18.DomService, viewData.parentIndex), this.injectorGet(import19.ZIndexer, viewData.parentIndex), this.injectorGet(const import20.OpaqueToken<List<import22.RelativePosition>>('defaultPopupPositions'), viewData.parentIndex), this.injectorGet(const import20.OpaqueToken<dynamic>('overlayRepositionLoop'), viewData.parentIndex), this.injectorGet(const import20.OpaqueToken<dynamic>('overlayViewportBoundaries'), viewData.parentIndex), this.injectorGetOptional(import23.PopupSizeProvider, viewData.parentIndex), _compView_0, _appEl_0, ElementRef(rootEl)));
    _compView_0.create(_MaterialPopupComponent_0_8, projectedNodes);
    init1(_appEl_0);
    return ComponentRef(0, this, rootEl, _MaterialPopupComponent_0_8);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (((identical(token, import2.MaterialPopupComponent) || identical(token, import25.DeferredContentAware)) || identical(token, import26.DropdownHandle))) {
        return _MaterialPopupComponent_0_8;
      }
      if (identical(token, import15.PopupHierarchy)) {
        return _PopupHierarchy_0_11;
      }
      if (identical(token, import27.PopupRef)) {
        return _PopupRef_0_12;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _appEl_0.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if ((!import12.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialPopupComponent_0_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _compView_0.destroyInternalState();
    _MaterialPopupComponent_0_8.ngOnDestroy();
  }
}

AppView<import2.MaterialPopupComponent> viewFactory_MaterialPopupComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialPopupComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialPopupComponent, MaterialPopupComponentNgFactory);
  _ngRef.registerDependencies(getHierarchy, const [
    [_i1.MaterialPopupComponent]
  ]);
  _ngRef.registerDependencies(getResolvedPopupRef, const [
    [_i1.MaterialPopupComponent]
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
  _ref11.initReflector();
  _ref12.initReflector();
  _ref13.initReflector();
  _ref14.initReflector();
  _ref15.initReflector();
  _ref16.initReflector();
  _ref17.initReflector();
}
