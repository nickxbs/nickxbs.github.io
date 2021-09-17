// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'signin_component.dart';
export 'signin_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../../globals.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular/core.template.dart' as _ref2;
import 'package:angular_components/angular_components.template.dart' as _ref3;
import 'package:angular_components/content/deferred_content.template.dart' as _ref4;
import 'package:angular_components/material_button/material_button.template.dart' as _ref5;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref6;
import 'package:nightscout_reporter/src/controls/signin/signin_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'signin_component.dart' as import2;
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
import 'package:angular/src/runtime/text_binding.dart' as import13;
import 'package:angular_components/material_button/material_button.template.dart' as import14;
import 'package:angular_components/material_button/material_button.dart' as import15;
import 'package:angular_components/material_icon/material_icon.template.dart' as import16;
import 'package:angular_components/material_icon/material_icon.dart' as import17;
import 'package:angular/src/di/errors.dart' as import18;
import 'package:angular_components/theme/dark_theme.dart' as import19;
import 'package:angular/src/core/di/opaque_token.dart' as import20;
import 'package:angular_components/button_decorator/button_decorator.dart' as import21;
import 'package:angular_components/interfaces/has_disabled.dart' as import22;
import 'package:angular/src/core/linker/app_view_utils.dart' as import23;
import 'package:angular/src/runtime/interpolate.dart' as import24;
import 'package:angular_components/material_button/material_fab.template.dart' as import25;
import 'package:angular_components/material_button/material_fab.dart' as import26;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import27;
import 'package:angular_components/model/math/box.dart' as import28;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import29;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import30;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import31;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import33;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import34;
import 'package:quiver/src/time/clock.dart' as import35;
import 'package:angular_components/utils/browser/window/module.dart' as import36;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import37;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import38;
import 'package:angular_components/utils/disposer/disposer.dart' as import39;
import 'package:angular/src/core/zone/ng_zone.dart' as import40;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import41;
import 'package:angular/src/core/linker/component_loader.dart' as import42;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import43;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import44;
import 'package:angular_components/laminate/overlay/module.dart' as import45;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import46;
import 'package:angular_components/laminate/enums/alignment.dart' as import47;

final List<dynamic> styles$SigninComponent = [import0.styles];

class ViewSigninComponent0 extends AppView<import2.SigninComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  static import5.ComponentStyles _componentStyles;
  ViewSigninComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('signin');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:nightscout_reporter/lib/src/controls/signin/signin_component.dart' : null);
  }

  @override
  ComponentRef<import2.SigninComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_SigninComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final _anchor_1 = import11.appendAnchor(parentRenderNode);
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_SigninComponent2);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import11.appendAnchor(parentRenderNode);
    _appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_SigninComponent4);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = ((!_ctx.showFab) && (!_ctx.showMenuButton));
    _NgIf_1_9.ngIf = _ctx.showFab;
    _NgIf_2_9.ngIf = _ctx.showMenuButton;
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

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$SigninComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.SigninComponent> _SigninComponentNgFactory = const ComponentFactory('signin', viewFactory_SigninComponentHost0);
ComponentFactory<import2.SigninComponent> get SigninComponentNgFactory {
  return _SigninComponentNgFactory;
}

class _ViewSigninComponent1 extends AppView<import2.SigninComponent> {
  final import13.TextBinding _textBinding_2 = import13.TextBinding();
  import14.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import15.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import16.ViewMaterialIconComponent0 _compView_1;
  import17.MaterialIconComponent _MaterialIconComponent_1_5;
  var _expr_0;
  bool _expr_1;
  bool _expr_2;
  var _expr_3;
  import8.Element _el_0;
  _ViewSigninComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SigninComponent> build() {
    final _ctx = ctx;
    _compView_0 = import14.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import9.isDevMode
        ? import18.debugInjectorWrap(import19.AcxDarkTheme, () {
            return import19.AcxDarkTheme(parentView.injectorGetOptional(const import20.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import19.AcxDarkTheme(parentView.injectorGetOptional(const import20.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import15.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _compView_1 = import16.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import17.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1, _textBinding_2.element]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler0(_ctx.btnLoginClick));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 2)) {
      if (identical(token, import19.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import15.MaterialButtonComponent) || identical(token, import21.ButtonDirective)) || identical(token, import22.HasDisabled))) {
        return _MaterialButtonComponent_0_6;
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
    final currVal_1 = _ctx.isBusy;
    if (import23.checkBinding(_expr_1, currVal_1)) {
      _MaterialButtonComponent_0_6.disabled = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.raised;
    if (import23.checkBinding(_expr_2, currVal_2)) {
      _MaterialButtonComponent_0_6.raised = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    changed = false;
    final currVal_3 = (_ctx.isAuthorized ? 'sync' : 'sync_disabled');
    if (import23.checkBinding(_expr_3, currVal_3)) {
      _MaterialIconComponent_1_5.icon = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    final currVal_0 = (_ctx.isVisible ? '' : 'none');
    if (import23.checkBinding(_expr_0, currVal_0)) {
      _el_0.style.setProperty('display', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_2.updateText(import24.interpolate0((_ctx.isBusy ? _ctx.msgBusy : (_ctx.isAuthorized ? _ctx.msgConnected : _ctx.msgDisconnected))));
    _compView_0.detectChanges();
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _compView_1.destroyInternalState();
  }
}

AppView<void> viewFactory_SigninComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSigninComponent1(parentView, parentIndex);
}

class _ViewSigninComponent2 extends AppView<import2.SigninComponent> {
  import25.ViewMaterialFabComponent0 _compView_0;
  import26.MaterialFabComponent _MaterialFabComponent_0_5;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  import16.ViewMaterialIconComponent0 _compView_2;
  import17.MaterialIconComponent _MaterialIconComponent_2_5;
  String _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  bool _expr_4;
  var _expr_6;
  import8.Element _el_0;
  _ViewSigninComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SigninComponent> build() {
    final _ctx = ctx;
    _compView_0 = import25.ViewMaterialFabComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    import11.setAttribute(_el_0, 'mini', '');
    addShimC(_el_0);
    _MaterialFabComponent_0_5 = import26.MaterialFabComponent(_el_0, _compView_0);
    final _anchor_1 = import11.createAnchor();
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_SigninComponent3);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    _compView_2 = import16.ViewMaterialIconComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    addShimC(_el_2);
    _MaterialIconComponent_2_5 = import17.MaterialIconComponent(_el_2);
    _compView_2.create0(_MaterialIconComponent_2_5);
    _compView_0.create(_MaterialFabComponent_0_5, [
      [_appEl_1, _el_2]
    ]);
    final subscription_0 = _MaterialFabComponent_0_5.trigger.listen(eventHandler0(_ctx.btnLoginClick));
    init([_el_0], [subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_3 = _ctx.isBusy;
    if (import23.checkBinding(_expr_3, currVal_3)) {
      _MaterialFabComponent_0_5.disabled = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.raised;
    if (import23.checkBinding(_expr_4, currVal_4)) {
      _MaterialFabComponent_0_5.raised = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _NgIf_1_9.ngIf = false;
    changed = false;
    final currVal_6 = (_ctx.isAuthorized ? 'sync' : 'sync_disabled');
    if (import23.checkBinding(_expr_6, currVal_6)) {
      _MaterialIconComponent_2_5.icon = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    _appEl_1.detectChangesInNestedViews();
    final currVal_0 = (_ctx.isAuthorized ? 'authorized' : '');
    if (import23.checkBinding(_expr_0, currVal_0)) {
      _compView_0.updateChildClassNonHtml(_el_0, currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.isVisible ? '' : 'none');
    if (import23.checkBinding(_expr_1, currVal_1)) {
      _el_0.style.setProperty('display', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.isAuthorized ? _ctx.msgTitleAuthorized : _ctx.msgTitleNotAuthorized);
    if (import23.checkBinding(_expr_2, currVal_2)) {
      import11.setProperty(_el_0, 'title', currVal_2);
      _expr_2 = currVal_2;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _compView_0.destroyInternalState();
    _compView_2.destroyInternalState();
  }
}

AppView<void> viewFactory_SigninComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSigninComponent2(parentView, parentIndex);
}

class _ViewSigninComponent3 extends AppView<import2.SigninComponent> {
  var _expr_0;
  import8.Element _el_0;
  _ViewSigninComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SigninComponent> build() {
    final doc = import8.document;
    _el_0 = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.updateChildClassNonHtml(_el_0, 'google');
    import11.setAttribute(_el_0, 'focusable', 'false');
    import11.setAttribute(_el_0, 'preserveAspectRatio', 'xMidYMid meet');
    import11.setAttribute(_el_0, 'viewBox', '0 0 24 24');
    addShimE(_el_0);
    final _el_1 = doc.createElementNS('http://www.w3.org/2000/svg', 'use');
    _el_0.append(_el_1);
    import11.updateAttributeNS(_el_1, 'http://www.w3.org/1999/xlink', 'href', '#google');
    import11.setAttribute(_el_1, 'xlink', 'http://www.w3.org/1999/xlink');
    addShimE(_el_1);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = (_ctx.isAuthorized ? 1.0 : 1.0);
    if (import23.checkBinding(_expr_0, currVal_0)) {
      _el_0.style.setProperty('opacity', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
  }
}

AppView<void> viewFactory_SigninComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSigninComponent3(parentView, parentIndex);
}

class _ViewSigninComponent4 extends AppView<import2.SigninComponent> {
  final import13.TextBinding _textBinding_2 = import13.TextBinding();
  import14.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import15.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import16.ViewMaterialIconComponent0 _compView_1;
  import17.MaterialIconComponent _MaterialIconComponent_1_5;
  var _expr_0;
  _ViewSigninComponent4(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SigninComponent> build() {
    final _ctx = ctx;
    _compView_0 = import14.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'iconButton material-drawer-button');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import9.isDevMode
        ? import18.debugInjectorWrap(import19.AcxDarkTheme, () {
            return import19.AcxDarkTheme(parentView.injectorGetOptional(const import20.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import19.AcxDarkTheme(parentView.injectorGetOptional(const import20.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import15.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _compView_1 = import16.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import17.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1, _textBinding_2.element]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler0(_ctx.btnLoginClick));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 2)) {
      if (identical(token, import19.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import15.MaterialButtonComponent) || identical(token, import21.ButtonDirective)) || identical(token, import22.HasDisabled))) {
        return _MaterialButtonComponent_0_6;
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
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    changed = false;
    final currVal_0 = (_ctx.isAuthorized ? 'sync' : 'sync_disabled');
    if (import23.checkBinding(_expr_0, currVal_0)) {
      _MaterialIconComponent_1_5.icon = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_2.updateText(import24.interpolate0((_ctx.isBusy ? _ctx.msgBusy : (_ctx.isAuthorized ? _ctx.msgMenuConnected : _ctx.msgMenuNotConnected))));
    _compView_0.detectChanges();
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _compView_1.destroyInternalState();
  }
}

AppView<void> viewFactory_SigninComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSigninComponent4(parentView, parentIndex);
}

final List<dynamic> styles$SigninComponentHost = const [];

class _ViewSigninComponentHost0 extends AppView<import2.SigninComponent> {
  ViewSigninComponent0 _compView_0;
  import2.SigninComponent _SigninComponent_0_5;
  dynamic __Document_0_6;
  dynamic __HtmlDocument_0_7;
  dynamic __Window_0_8;
  dynamic __DomService_0_9;
  dynamic __AcxImperativeViewUtils_0_10;
  import27.DomRuler __DomRuler_0_11;
  dynamic __ManagedZone_0_12;
  dynamic __overlayContainerName_0_13;
  dynamic __overlayContainerParent_0_14;
  dynamic __overlayContainer_0_15;
  bool __overlaySyncDom_0_16;
  bool __overlayRepositionLoop_0_17;
  import28.Box __overlayViewportBoundaries_0_18;
  import29.OverlayStyleConfig __OverlayStyleConfig_0_19;
  import30.ZIndexer __ZIndexer_0_20;
  import31.OverlayDomRenderService __OverlayDomRenderService_0_21;
  dynamic __OverlayService_0_22;
  List<import33.RelativePosition> __defaultPopupPositions_0_23;
  import34.DomPopupSourceFactory __DomPopupSourceFactory_0_24;
  import35.Clock __Clock_0_25;
  _ViewSigninComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _Document_0_6 {
    if ((__Document_0_6 == null)) {
      (__Document_0_6 = import36.getDocument());
    }
    return __Document_0_6;
  }

  dynamic get _HtmlDocument_0_7 {
    if ((__HtmlDocument_0_7 == null)) {
      (__HtmlDocument_0_7 = import36.getDocument());
    }
    return __HtmlDocument_0_7;
  }

  dynamic get _Window_0_8 {
    if ((__Window_0_8 == null)) {
      (__Window_0_8 = import36.getWindow());
    }
    return __Window_0_8;
  }

  dynamic get _DomService_0_9 {
    if ((__DomService_0_9 == null)) {
      (__DomService_0_9 = (import9.isDevMode
          ? import18.debugInjectorWrap(import37.DomService, () {
              return import38.createDomService(this.injectorGetOptional(import37.DomService, viewData.parentIndex), this.injectorGetOptional(import39.Disposer, viewData.parentIndex), this.injectorGet(import40.NgZone, viewData.parentIndex), _Window_0_8);
            })
          : import38.createDomService(this.injectorGetOptional(import37.DomService, viewData.parentIndex), this.injectorGetOptional(import39.Disposer, viewData.parentIndex), this.injectorGet(import40.NgZone, viewData.parentIndex), _Window_0_8)));
    }
    return __DomService_0_9;
  }

  dynamic get _AcxImperativeViewUtils_0_10 {
    if ((__AcxImperativeViewUtils_0_10 == null)) {
      (__AcxImperativeViewUtils_0_10 = (import9.isDevMode
          ? import18.debugInjectorWrap(import41.AcxImperativeViewUtils, () {
              return import41.AcxImperativeViewUtils(this.injectorGet(import42.ComponentLoader, viewData.parentIndex), _DomService_0_9);
            })
          : import41.AcxImperativeViewUtils(this.injectorGet(import42.ComponentLoader, viewData.parentIndex), _DomService_0_9)));
    }
    return __AcxImperativeViewUtils_0_10;
  }

  import27.DomRuler get _DomRuler_0_11 {
    if ((__DomRuler_0_11 == null)) {
      (__DomRuler_0_11 = import27.DomRuler(_Document_0_6, _DomService_0_9));
    }
    return __DomRuler_0_11;
  }

  dynamic get _ManagedZone_0_12 {
    if ((__ManagedZone_0_12 == null)) {
      (__ManagedZone_0_12 = (import9.isDevMode
          ? import18.debugInjectorWrap(import43.ManagedZone, () {
              return import44.Angular2ManagedZone(this.injectorGet(import40.NgZone, viewData.parentIndex));
            })
          : import44.Angular2ManagedZone(this.injectorGet(import40.NgZone, viewData.parentIndex))));
    }
    return __ManagedZone_0_12;
  }

  dynamic get _overlayContainerName_0_13 {
    if ((__overlayContainerName_0_13 == null)) {
      (__overlayContainerName_0_13 = (import9.isDevMode
          ? import18.debugInjectorWrap(const import20.OpaqueToken<dynamic>('overlayContainerName'), () {
              return import45.getDefaultContainerName(this.injectorGetOptional(const import20.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex));
            })
          : import45.getDefaultContainerName(this.injectorGetOptional(const import20.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex))));
    }
    return __overlayContainerName_0_13;
  }

  dynamic get _overlayContainerParent_0_14 {
    if ((__overlayContainerParent_0_14 == null)) {
      (__overlayContainerParent_0_14 = (import9.isDevMode
          ? import18.debugInjectorWrap(const import20.OpaqueToken<dynamic>('overlayContainerParent'), () {
              return import45.getOverlayContainerParent(_Document_0_6, this.injectorGetOptional(const import20.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex));
            })
          : import45.getOverlayContainerParent(_Document_0_6, this.injectorGetOptional(const import20.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex))));
    }
    return __overlayContainerParent_0_14;
  }

  dynamic get _overlayContainer_0_15 {
    if ((__overlayContainer_0_15 == null)) {
      (__overlayContainer_0_15 = (import9.isDevMode
          ? import18.debugInjectorWrap(const import20.OpaqueToken<dynamic>('overlayContainer'), () {
              return import45.getDefaultContainer(_overlayContainerName_0_13, _overlayContainerParent_0_14, this.injectorGetOptional(const import20.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex));
            })
          : import45.getDefaultContainer(_overlayContainerName_0_13, _overlayContainerParent_0_14, this.injectorGetOptional(const import20.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex))));
    }
    return __overlayContainer_0_15;
  }

  bool get _overlaySyncDom_0_16 {
    if ((__overlaySyncDom_0_16 == null)) {
      (__overlaySyncDom_0_16 = true);
    }
    return __overlaySyncDom_0_16;
  }

  bool get _overlayRepositionLoop_0_17 {
    if ((__overlayRepositionLoop_0_17 == null)) {
      (__overlayRepositionLoop_0_17 = true);
    }
    return __overlayRepositionLoop_0_17;
  }

  import28.Box get _overlayViewportBoundaries_0_18 {
    if ((__overlayViewportBoundaries_0_18 == null)) {
      (__overlayViewportBoundaries_0_18 = const import28.Box());
    }
    return __overlayViewportBoundaries_0_18;
  }

  import29.OverlayStyleConfig get _OverlayStyleConfig_0_19 {
    if ((__OverlayStyleConfig_0_19 == null)) {
      (__OverlayStyleConfig_0_19 = import29.OverlayStyleConfig(_Document_0_6));
    }
    return __OverlayStyleConfig_0_19;
  }

  import30.ZIndexer get _ZIndexer_0_20 {
    if ((__ZIndexer_0_20 == null)) {
      (__ZIndexer_0_20 = import30.ZIndexer());
    }
    return __ZIndexer_0_20;
  }

  import31.OverlayDomRenderService get _OverlayDomRenderService_0_21 {
    if ((__OverlayDomRenderService_0_21 == null)) {
      (__OverlayDomRenderService_0_21 = import31.OverlayDomRenderService(_OverlayStyleConfig_0_19, _overlayContainer_0_15, _overlayContainerName_0_13, _DomRuler_0_11, _DomService_0_9, _AcxImperativeViewUtils_0_10, _overlaySyncDom_0_16, _overlayRepositionLoop_0_17, _ZIndexer_0_20));
    }
    return __OverlayDomRenderService_0_21;
  }

  dynamic get _OverlayService_0_22 {
    if ((__OverlayService_0_22 == null)) {
      (__OverlayService_0_22 = (import9.isDevMode
          ? import18.debugInjectorWrap(import46.OverlayService, () {
              return import46.OverlayService(this.injectorGet(import40.NgZone, viewData.parentIndex), _overlaySyncDom_0_16, _OverlayDomRenderService_0_21, this.injectorGetOptional(import46.OverlayService, viewData.parentIndex));
            })
          : import46.OverlayService(this.injectorGet(import40.NgZone, viewData.parentIndex), _overlaySyncDom_0_16, _OverlayDomRenderService_0_21, this.injectorGetOptional(import46.OverlayService, viewData.parentIndex))));
    }
    return __OverlayService_0_22;
  }

  List<import33.RelativePosition> get _defaultPopupPositions_0_23 {
    if ((__defaultPopupPositions_0_23 == null)) {
      (__defaultPopupPositions_0_23 = const [import33.RelativePosition(animationOrigin: 'top center'), import33.RelativePosition(animationOrigin: 'top right', originX: import33.Alignment('End', 'flex-end')), import33.RelativePosition(animationOrigin: 'top left', originX: import33.Alignment('Start', 'flex-start')), import33.RelativePosition(animationOrigin: 'bottom center', originY: import33.Alignment('End', 'flex-end')), import33.RelativePosition(animationOrigin: 'bottom right', originX: import33.Alignment('End', 'flex-end'), originY: import33.Alignment('End', 'flex-end')), import33.RelativePosition(animationOrigin: 'bottom left', originX: import33.Alignment('Start', 'flex-start'), originY: import33.Alignment('End', 'flex-end'))]);
    }
    return __defaultPopupPositions_0_23;
  }

  import34.DomPopupSourceFactory get _DomPopupSourceFactory_0_24 {
    if ((__DomPopupSourceFactory_0_24 == null)) {
      (__DomPopupSourceFactory_0_24 = import34.DomPopupSourceFactory(_DomRuler_0_11));
    }
    return __DomPopupSourceFactory_0_24;
  }

  import35.Clock get _Clock_0_25 {
    if ((__Clock_0_25 == null)) {
      (__Clock_0_25 = const import35.Clock());
    }
    return __Clock_0_25;
  }

  @override
  ComponentRef<import2.SigninComponent> build() {
    _compView_0 = ViewSigninComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _SigninComponent_0_5 = import2.SigninComponent();
    _compView_0.create(_SigninComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _SigninComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import8.Document)) {
        return _Document_0_6;
      }
      if (identical(token, import8.HtmlDocument)) {
        return _HtmlDocument_0_7;
      }
      if (identical(token, import8.Window)) {
        return _Window_0_8;
      }
      if (identical(token, import37.DomService)) {
        return _DomService_0_9;
      }
      if (identical(token, import41.AcxImperativeViewUtils)) {
        return _AcxImperativeViewUtils_0_10;
      }
      if (identical(token, import27.DomRuler)) {
        return _DomRuler_0_11;
      }
      if (identical(token, import43.ManagedZone)) {
        return _ManagedZone_0_12;
      }
      if (identical(token, const import20.OpaqueToken<dynamic>('overlayContainerName'))) {
        return _overlayContainerName_0_13;
      }
      if (identical(token, const import20.OpaqueToken<dynamic>('overlayContainerParent'))) {
        return _overlayContainerParent_0_14;
      }
      if (identical(token, const import20.OpaqueToken<dynamic>('overlayContainer'))) {
        return _overlayContainer_0_15;
      }
      if (identical(token, const import20.OpaqueToken<dynamic>('overlaySyncDom'))) {
        return _overlaySyncDom_0_16;
      }
      if (identical(token, const import20.OpaqueToken<dynamic>('overlayRepositionLoop'))) {
        return _overlayRepositionLoop_0_17;
      }
      if (identical(token, const import20.OpaqueToken<dynamic>('overlayViewportBoundaries'))) {
        return _overlayViewportBoundaries_0_18;
      }
      if (identical(token, import29.OverlayStyleConfig)) {
        return _OverlayStyleConfig_0_19;
      }
      if (identical(token, import30.ZIndexer)) {
        return _ZIndexer_0_20;
      }
      if (identical(token, import31.OverlayDomRenderService)) {
        return _OverlayDomRenderService_0_21;
      }
      if (identical(token, import46.OverlayService)) {
        return _OverlayService_0_22;
      }
      if (identical(token, const import20.OpaqueToken<List<import47.RelativePosition>>('defaultPopupPositions'))) {
        return _defaultPopupPositions_0_23;
      }
      if (identical(token, import34.DomPopupSourceFactory)) {
        return _DomPopupSourceFactory_0_24;
      }
      if ((identical(token, import35.Clock) || identical(token, const import20.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock')))) {
        return _Clock_0_25;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    _compView_0.detectChanges();
    if ((!import23.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _SigninComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.SigninComponent> viewFactory_SigninComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSigninComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(SigninComponent, SigninComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
