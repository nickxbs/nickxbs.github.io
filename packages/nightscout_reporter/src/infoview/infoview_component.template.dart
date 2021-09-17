// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'infoview_component.dart';
export 'infoview_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:nightscout_reporter/src/forms/base-print.template.dart' as _ref2;
import 'package:nightscout_reporter/src/globals.template.dart' as _ref3;
import 'package:nightscout_reporter/src/infoview/infoview_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'infoview_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as import4;
import 'package:angular_components/laminate/components/modal/modal.dart' as import5;
import 'package:angular_components/material_dialog/material_dialog.template.dart' as import6;
import 'package:angular_components/material_dialog/material_dialog.dart' as import7;
import 'package:angular_components/material_icon/material_icon.template.dart' as import8;
import 'package:angular_components/material_icon/material_icon.dart' as import9;
import 'package:angular_components/material_button/material_button.template.dart' as import10;
import 'package:angular_components/material_button/material_button.dart' as import11;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import14;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import15;
import 'package:angular/src/core/linker/view_type.dart' as import16;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import18;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import20;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import21;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import22;
import 'package:angular/src/runtime/dom_helpers.dart' as import23;
import 'package:angular_components/theme/dark_theme.dart' as import24;
import 'package:angular/src/core/di/opaque_token.dart' as import25;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_components/button_decorator/button_decorator.dart' as import27;
import 'package:angular_components/interfaces/has_disabled.dart' as import28;
import 'package:angular_components/content/deferred_content_aware.dart' as import29;
import 'package:angular/src/core/linker/app_view_utils.dart' as import30;
import 'package:angular/src/runtime/interpolate.dart' as import31;

final List<dynamic> styles$InfoViewComponent = [import0.styles];

class ViewInfoViewComponent0 extends AppView<import2.InfoViewComponent> {
  final import3.TextBinding _textBinding_6 = import3.TextBinding();
  import4.ViewModalComponent0 _compView_0;
  import5.ModalComponent _ModalComponent_0_5;
  import6.ViewMaterialDialogComponent0 _compView_1;
  import7.MaterialDialogComponent _MaterialDialogComponent_1_5;
  import8.ViewMaterialIconComponent0 _compView_5;
  import9.MaterialIconComponent _MaterialIconComponent_5_5;
  import10.ViewMaterialButtonComponent0 _compView_7;
  dynamic _AcxDarkTheme_7_5;
  import11.MaterialButtonComponent _MaterialButtonComponent_7_6;
  import8.ViewMaterialIconComponent0 _compView_8;
  import9.MaterialIconComponent _MaterialIconComponent_8_5;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  ViewContainer _appEl_11;
  NgIf _NgIf_11_9;
  ViewContainer _appEl_12;
  NgIf _NgIf_12_9;
  import10.ViewMaterialButtonComponent0 _compView_14;
  dynamic _AcxDarkTheme_14_5;
  import11.MaterialButtonComponent _MaterialButtonComponent_14_6;
  bool _expr_0;
  String _expr_1;
  var _expr_2;
  import14.Element _el_5;
  static import15.ComponentStyles _componentStyles;
  ViewInfoViewComponent0(AppView<dynamic> parentView, int parentIndex) : super(import16.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import14.document.createElement('infoview');
  }
  static String get _debugComponentUrl {
    return (import18.isDevMode ? 'asset:nightscout_reporter/lib/src/infoview/infoview_component.dart' : null);
  }

  @override
  ComponentRef<import2.InfoViewComponent> build() {
    final _rootEl = rootEl;
    final import14.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import4.ViewModalComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _ModalComponent_0_5 = (import18.isDevMode
        ? import20.debugInjectorWrap(import5.ModalComponent, () {
            return import5.ModalComponent(parentView.injectorGet(import21.OverlayService, viewData.parentIndex), _el_0, parentView.injectorGet(import22.DomService, viewData.parentIndex), parentView.injectorGetOptional(import5.Modal, viewData.parentIndex), parentView.injectorGetOptional(import5.GlobalModalStack, viewData.parentIndex));
          })
        : import5.ModalComponent(parentView.injectorGet(import21.OverlayService, viewData.parentIndex), _el_0, parentView.injectorGet(import22.DomService, viewData.parentIndex), parentView.injectorGetOptional(import5.Modal, viewData.parentIndex), parentView.injectorGetOptional(import5.GlobalModalStack, viewData.parentIndex)));
    _compView_1 = import6.ViewMaterialDialogComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    this.updateChildClassNonHtml(_el_1, 'headered-dialog');
    import23.setAttribute(_el_1, 'headered', '');
    addShimC(_el_1);
    _MaterialDialogComponent_1_5 = (import18.isDevMode
        ? import20.debugInjectorWrap(import7.MaterialDialogComponent, () {
            return import7.MaterialDialogComponent(_el_1, parentView.injectorGet(import22.DomService, viewData.parentIndex), _compView_1, _ModalComponent_0_5);
          })
        : import7.MaterialDialogComponent(_el_1, parentView.injectorGet(import22.DomService, viewData.parentIndex), _compView_1, _ModalComponent_0_5));
    final doc = import14.document;
    final _el_2 = doc.createElement('div');
    import23.setAttribute(_el_2, 'header', '');
    addShimC(_el_2);
    final _el_3 = import23.appendDiv(doc, _el_2);
    addShimC(_el_3);
    final _el_4 = import23.appendElement(doc, _el_3, 'h1');
    addShimE(_el_4);
    _compView_5 = import8.ViewMaterialIconComponent0(this, 5);
    _el_5 = _compView_5.rootEl;
    _el_4.append(_el_5);
    import23.setAttribute(_el_5, 'id', 'type');
    addShimC(_el_5);
    _MaterialIconComponent_5_5 = import9.MaterialIconComponent(_el_5);
    _compView_5.create0(_MaterialIconComponent_5_5);
    _el_4.append(_textBinding_6.element);
    _compView_7 = import10.ViewMaterialButtonComponent0(this, 7);
    final _el_7 = _compView_7.rootEl;
    _el_2.append(_el_7);
    import23.setAttribute(_el_7, 'icon', '');
    addShimC(_el_7);
    _AcxDarkTheme_7_5 = (import18.isDevMode
        ? import20.debugInjectorWrap(import24.AcxDarkTheme, () {
            return import24.AcxDarkTheme(parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import24.AcxDarkTheme(parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_7_6 = import11.MaterialButtonComponent(_el_7, _AcxDarkTheme_7_5, _compView_7, null);
    _compView_8 = import8.ViewMaterialIconComponent0(this, 8);
    final _el_8 = _compView_8.rootEl;
    import23.setAttribute(_el_8, 'icon', 'close');
    addShimC(_el_8);
    _MaterialIconComponent_8_5 = import9.MaterialIconComponent(_el_8);
    _compView_8.create0(_MaterialIconComponent_8_5);
    _compView_7.create(_MaterialButtonComponent_7_6, [
      [_el_8]
    ]);
    final _el_9 = doc.createElement('div');
    this.updateChildClass(_el_9, 'root');
    addShimC(_el_9);
    final _anchor_10 = import23.appendAnchor(_el_9);
    _appEl_10 = ViewContainer(10, 9, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(_appEl_10, viewFactory_InfoViewComponent1);
    _NgIf_10_9 = NgIf(_appEl_10, _TemplateRef_10_8);
    final _anchor_11 = import23.appendAnchor(_el_9);
    _appEl_11 = ViewContainer(11, 9, this, _anchor_11);
    TemplateRef _TemplateRef_11_8 = TemplateRef(_appEl_11, viewFactory_InfoViewComponent2);
    _NgIf_11_9 = NgIf(_appEl_11, _TemplateRef_11_8);
    final _anchor_12 = import23.appendAnchor(_el_9);
    _appEl_12 = ViewContainer(12, 9, this, _anchor_12);
    TemplateRef _TemplateRef_12_8 = TemplateRef(_appEl_12, viewFactory_InfoViewComponent3);
    _NgIf_12_9 = NgIf(_appEl_12, _TemplateRef_12_8);
    final _el_13 = doc.createElement('div');
    import23.setAttribute(_el_13, 'footer', '');
    addShimC(_el_13);
    _compView_14 = import10.ViewMaterialButtonComponent0(this, 14);
    final _el_14 = _compView_14.rootEl;
    _el_13.append(_el_14);
    addShimC(_el_14);
    _AcxDarkTheme_14_5 = (import18.isDevMode
        ? import20.debugInjectorWrap(import24.AcxDarkTheme, () {
            return import24.AcxDarkTheme(parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import24.AcxDarkTheme(parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_14_6 = import11.MaterialButtonComponent(_el_14, _AcxDarkTheme_14_5, _compView_14, null);
    final _text_15 = import23.createText('Schliessen');
    _compView_14.create(_MaterialButtonComponent_14_6, [
      [_text_15]
    ]);
    _compView_1.create(_MaterialDialogComponent_1_5, [
      [_el_2],
      [_el_9],
      [_el_13]
    ]);
    _compView_0.create(_ModalComponent_0_5, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_7_6.trigger.listen(eventHandler1(_handle_trigger_7_0));
    final subscription_1 = _MaterialButtonComponent_14_6.trigger.listen(eventHandler1(_handle_trigger_14_0));
    init(const [], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 15)) {
      if (((7 <= nodeIndex) && (nodeIndex <= 8))) {
        if (identical(token, import24.AcxDarkTheme)) {
          return _AcxDarkTheme_7_5;
        }
        if (((identical(token, import11.MaterialButtonComponent) || identical(token, import27.ButtonDirective)) || identical(token, import28.HasDisabled))) {
          return _MaterialButtonComponent_7_6;
        }
      }
      if ((14 <= nodeIndex)) {
        if (identical(token, import24.AcxDarkTheme)) {
          return _AcxDarkTheme_14_5;
        }
        if (((identical(token, import11.MaterialButtonComponent) || identical(token, import27.ButtonDirective)) || identical(token, import28.HasDisabled))) {
          return _MaterialButtonComponent_14_6;
        }
      }
      if (((identical(token, import5.ModalComponent) || identical(token, import29.DeferredContentAware)) || identical(token, import5.Modal))) {
        return _ModalComponent_0_5;
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
    final currVal_0 = _ctx.isVisible;
    if (import30.checkBinding(_expr_0, currVal_0)) {
      _ModalComponent_0_5.visible = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    changed = false;
    final currVal_2 = _ctx.type;
    if (import30.checkBinding(_expr_2, currVal_2)) {
      _MaterialIconComponent_5_5.icon = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_7.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_8_5.icon = 'close';
      changed = true;
    }
    if (changed) {
      _compView_8.markAsCheckOnce();
    }
    _NgIf_10_9.ngIf = (_ctx.g.info.errors != '');
    _NgIf_11_9.ngIf = (_ctx.g.info.warnings != '');
    _NgIf_12_9.ngIf = (_ctx.g.info.infos != '');
    changed = false;
    if (changed) {
      _compView_14.markAsCheckOnce();
    }
    _appEl_10.detectChangesInNestedViews();
    _appEl_11.detectChangesInNestedViews();
    _appEl_12.detectChangesInNestedViews();
    if ((!import30.AppViewUtils.throwOnChanges)) {
      _MaterialDialogComponent_1_5.ngAfterContentChecked();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_1.detectHostChanges(firstCheck);
    final currVal_1 = _ctx.type;
    if (import30.checkBinding(_expr_1, currVal_1)) {
      _compView_5.updateChildClassNonHtml(_el_5, currVal_1);
      _expr_1 = currVal_1;
    }
    _textBinding_6.updateText(import31.interpolateString0(_ctx.msgTitle));
    _compView_7.detectHostChanges(firstCheck);
    _compView_14.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_1.detectChanges();
    _compView_5.detectChanges();
    _compView_7.detectChanges();
    _compView_8.detectChanges();
    _compView_14.detectChanges();
    if ((!import30.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _ModalComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_10.destroyNestedViews();
    _appEl_11.destroyNestedViews();
    _appEl_12.destroyNestedViews();
    _compView_0.destroyInternalState();
    _compView_1.destroyInternalState();
    _compView_5.destroyInternalState();
    _compView_7.destroyInternalState();
    _compView_8.destroyInternalState();
    _compView_14.destroyInternalState();
    _MaterialDialogComponent_1_5.ngOnDestroy();
    _ModalComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_7_0($event) {
    final _ctx = ctx;
    _ctx.fire('close');
  }

  void _handle_trigger_14_0($event) {
    final _ctx = ctx;
    _ctx.fire('close');
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import15.ComponentStyles.scoped(styles$InfoViewComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.InfoViewComponent> _InfoViewComponentNgFactory = const ComponentFactory('infoview', viewFactory_InfoViewComponentHost0);
ComponentFactory<import2.InfoViewComponent> get InfoViewComponentNgFactory {
  return _InfoViewComponentNgFactory;
}

class _ViewInfoViewComponent1 extends AppView<import2.InfoViewComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  _ViewInfoViewComponent1(AppView<dynamic> parentView, int parentIndex) : super(import16.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.InfoViewComponent> build() {
    final doc = import14.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import31.interpolateString0(_ctx.g.info.errors));
  }
}

AppView<void> viewFactory_InfoViewComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewInfoViewComponent1(parentView, parentIndex);
}

class _ViewInfoViewComponent2 extends AppView<import2.InfoViewComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  _ViewInfoViewComponent2(AppView<dynamic> parentView, int parentIndex) : super(import16.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.InfoViewComponent> build() {
    final doc = import14.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import31.interpolateString0(_ctx.g.info.warnings));
  }
}

AppView<void> viewFactory_InfoViewComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewInfoViewComponent2(parentView, parentIndex);
}

class _ViewInfoViewComponent3 extends AppView<import2.InfoViewComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  _ViewInfoViewComponent3(AppView<dynamic> parentView, int parentIndex) : super(import16.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.InfoViewComponent> build() {
    final doc = import14.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import31.interpolateString0(_ctx.g.info.infos));
  }
}

AppView<void> viewFactory_InfoViewComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewInfoViewComponent3(parentView, parentIndex);
}

final List<dynamic> styles$InfoViewComponentHost = const [];

class _ViewInfoViewComponentHost0 extends AppView<import2.InfoViewComponent> {
  ViewInfoViewComponent0 _compView_0;
  import2.InfoViewComponent _InfoViewComponent_0_5;
  _ViewInfoViewComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import16.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.InfoViewComponent> build() {
    _compView_0 = ViewInfoViewComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _InfoViewComponent_0_5 = import2.InfoViewComponent();
    _compView_0.create(_InfoViewComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _InfoViewComponent_0_5);
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

AppView<import2.InfoViewComponent> viewFactory_InfoViewComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewInfoViewComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(InfoViewComponent, InfoViewComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
