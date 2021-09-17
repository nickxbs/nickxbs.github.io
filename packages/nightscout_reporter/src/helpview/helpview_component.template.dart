// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'helpview_component.dart';
export 'helpview_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:nightscout_reporter/src/forms/base-print.template.dart' as _ref2;
import 'package:nightscout_reporter/src/globals.template.dart' as _ref3;
import 'package:nightscout_reporter/src/helpview/helpview_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'helpview_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as import4;
import 'package:angular_components/laminate/components/modal/modal.dart' as import5;
import 'package:angular_components/material_dialog/material_dialog.template.dart' as import6;
import 'package:angular_components/material_dialog/material_dialog.dart' as import7;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular_components/material_button/material_button.template.dart' as import10;
import 'package:angular_components/material_button/material_button.dart' as import11;
import 'package:angular_components/material_icon/material_icon.template.dart' as import12;
import 'package:angular_components/material_icon/material_icon.dart' as import13;
import 'package:angular/src/common/directives/ng_for.dart' as import14;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import15;
import 'package:angular/src/core/linker/view_type.dart' as import16;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import18;
import 'package:angular/src/runtime.dart' as import19;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import21;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import22;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import23;
import 'package:angular/src/runtime/dom_helpers.dart' as import24;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_components/theme/dark_theme.dart' as import26;
import 'package:angular/src/core/di/opaque_token.dart' as import27;
import 'package:angular_components/button_decorator/button_decorator.dart' as import28;
import 'package:angular_components/interfaces/has_disabled.dart' as import29;
import 'package:angular_components/content/deferred_content_aware.dart' as import30;
import 'package:angular/src/core/linker/app_view_utils.dart' as import31;
import 'package:angular/src/runtime/interpolate.dart' as import32;
import '../forms/base-print.dart' as import33;
import 'dart:core';

final List<dynamic> styles$HelpViewComponent = [import0.styles];

class ViewHelpViewComponent0 extends AppView<import2.HelpViewComponent> {
  final import3.TextBinding _textBinding_6 = import3.TextBinding();
  import4.ViewModalComponent0 _compView_0;
  import5.ModalComponent _ModalComponent_0_5;
  import6.ViewMaterialDialogComponent0 _compView_1;
  import7.MaterialDialogComponent _MaterialDialogComponent_1_5;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  import10.ViewMaterialButtonComponent0 _compView_8;
  dynamic _AcxDarkTheme_8_5;
  import11.MaterialButtonComponent _MaterialButtonComponent_8_6;
  import12.ViewMaterialIconComponent0 _compView_9;
  import13.MaterialIconComponent _MaterialIconComponent_9_5;
  ViewContainer _appEl_11;
  import14.NgFor _NgFor_11_9;
  bool _expr_0;
  var _expr_4;
  static import15.ComponentStyles _componentStyles;
  ViewHelpViewComponent0(AppView<dynamic> parentView, int parentIndex) : super(import16.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import18.document.createElement('helpview');
  }
  static String get _debugComponentUrl {
    return (import19.isDevMode ? 'asset:nightscout_reporter/lib/src/helpview/helpview_component.dart' : null);
  }

  @override
  ComponentRef<import2.HelpViewComponent> build() {
    final _rootEl = rootEl;
    final import18.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import4.ViewModalComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _ModalComponent_0_5 = (import19.isDevMode
        ? import21.debugInjectorWrap(import5.ModalComponent, () {
            return import5.ModalComponent(parentView.injectorGet(import22.OverlayService, viewData.parentIndex), _el_0, parentView.injectorGet(import23.DomService, viewData.parentIndex), parentView.injectorGetOptional(import5.Modal, viewData.parentIndex), parentView.injectorGetOptional(import5.GlobalModalStack, viewData.parentIndex));
          })
        : import5.ModalComponent(parentView.injectorGet(import22.OverlayService, viewData.parentIndex), _el_0, parentView.injectorGet(import23.DomService, viewData.parentIndex), parentView.injectorGetOptional(import5.Modal, viewData.parentIndex), parentView.injectorGetOptional(import5.GlobalModalStack, viewData.parentIndex)));
    _compView_1 = import6.ViewMaterialDialogComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    this.updateChildClassNonHtml(_el_1, 'headered-dialog');
    import24.setAttribute(_el_1, 'headered', '');
    import24.setAttribute(_el_1, 'hideFooter', '');
    addShimC(_el_1);
    _MaterialDialogComponent_1_5 = (import19.isDevMode
        ? import21.debugInjectorWrap(import7.MaterialDialogComponent, () {
            return import7.MaterialDialogComponent(_el_1, parentView.injectorGet(import23.DomService, viewData.parentIndex), _compView_1, _ModalComponent_0_5);
          })
        : import7.MaterialDialogComponent(_el_1, parentView.injectorGet(import23.DomService, viewData.parentIndex), _compView_1, _ModalComponent_0_5));
    final doc = import18.document;
    final _el_2 = doc.createElement('div');
    import24.setAttribute(_el_2, 'header', '');
    addShimC(_el_2);
    final _el_3 = import24.appendDiv(doc, _el_2);
    addShimC(_el_3);
    final _el_4 = import24.appendElement(doc, _el_3, 'h1');
    addShimE(_el_4);
    final _anchor_5 = import24.appendAnchor(_el_4);
    _appEl_5 = ViewContainer(5, 4, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_HelpViewComponent1);
    _NgIf_5_9 = NgIf(_appEl_5, _TemplateRef_5_8);
    _el_4.append(_textBinding_6.element);
    final _el_7 = import24.appendElement(doc, _el_3, 'p');
    addShimE(_el_7);
    _compView_8 = import10.ViewMaterialButtonComponent0(this, 8);
    final _el_8 = _compView_8.rootEl;
    _el_2.append(_el_8);
    import24.setAttribute(_el_8, 'icon', '');
    addShimC(_el_8);
    _AcxDarkTheme_8_5 = (import19.isDevMode
        ? import21.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.injectorGetOptional(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import26.AcxDarkTheme(parentView.injectorGetOptional(const import27.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_8_6 = import11.MaterialButtonComponent(_el_8, _AcxDarkTheme_8_5, _compView_8, null);
    _compView_9 = import12.ViewMaterialIconComponent0(this, 9);
    final _el_9 = _compView_9.rootEl;
    import24.setAttribute(_el_9, 'icon', 'close');
    addShimC(_el_9);
    _MaterialIconComponent_9_5 = import13.MaterialIconComponent(_el_9);
    _compView_9.create0(_MaterialIconComponent_9_5);
    _compView_8.create(_MaterialButtonComponent_8_6, [
      [_el_9]
    ]);
    final _el_10 = doc.createElement('div');
    this.updateChildClass(_el_10, 'root');
    addShimC(_el_10);
    final _anchor_11 = import24.appendAnchor(_el_10);
    _appEl_11 = ViewContainer(11, 10, this, _anchor_11);
    TemplateRef _TemplateRef_11_8 = TemplateRef(_appEl_11, viewFactory_HelpViewComponent2);
    _NgFor_11_9 = import14.NgFor(_appEl_11, _TemplateRef_11_8);
    _compView_1.create(_MaterialDialogComponent_1_5, [
      [_el_2],
      [_el_10],
      const []
    ]);
    _compView_0.create(_ModalComponent_0_5, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_8_6.trigger.listen(eventHandler1(_handle_trigger_8_0));
    init(const [], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 11)) {
      if (((8 <= nodeIndex) && (nodeIndex <= 9))) {
        if (identical(token, import26.AcxDarkTheme)) {
          return _AcxDarkTheme_8_5;
        }
        if (((identical(token, import11.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled))) {
          return _MaterialButtonComponent_8_6;
        }
      }
      if (((identical(token, import5.ModalComponent) || identical(token, import30.DeferredContentAware)) || identical(token, import5.Modal))) {
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
    if (import31.checkBinding(_expr_0, currVal_0)) {
      _ModalComponent_0_5.visible = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialDialogComponent_1_5.hideFooter = true;
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    _NgIf_5_9.ngIf = (_ctx.tileHelp.length > 1);
    changed = false;
    if (changed) {
      _compView_8.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_9_5.icon = 'close';
      changed = true;
    }
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    final currVal_4 = _ctx.tileHelp.last.form.helpStrings;
    if (import31.checkBinding(_expr_4, currVal_4)) {
      _NgFor_11_9.ngForOf = currVal_4;
      _expr_4 = currVal_4;
    }
    if ((!import31.AppViewUtils.throwOnChanges)) {
      _NgFor_11_9.ngDoCheck();
    }
    _appEl_5.detectChangesInNestedViews();
    _appEl_11.detectChangesInNestedViews();
    if ((!import31.AppViewUtils.throwOnChanges)) {
      _MaterialDialogComponent_1_5.ngAfterContentChecked();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_1.detectHostChanges(firstCheck);
    _textBinding_6.updateText(import32.interpolateString0(_ctx.tileHelp.last.form.title));
    _compView_8.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_1.detectChanges();
    _compView_8.detectChanges();
    _compView_9.detectChanges();
    if ((!import31.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _ModalComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_5.destroyNestedViews();
    _appEl_11.destroyNestedViews();
    _compView_0.destroyInternalState();
    _compView_1.destroyInternalState();
    _compView_8.destroyInternalState();
    _compView_9.destroyInternalState();
    _MaterialDialogComponent_1_5.ngOnDestroy();
    _ModalComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_8_0($event) {
    final _ctx = ctx;
    _ctx.fire('closeAll');
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import15.ComponentStyles.scoped(styles$HelpViewComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.HelpViewComponent> _HelpViewComponentNgFactory = const ComponentFactory('helpview', viewFactory_HelpViewComponentHost0);
ComponentFactory<import2.HelpViewComponent> get HelpViewComponentNgFactory {
  return _HelpViewComponentNgFactory;
}

class _ViewHelpViewComponent1 extends AppView<import2.HelpViewComponent> {
  import10.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import11.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import12.ViewMaterialIconComponent0 _compView_1;
  import13.MaterialIconComponent _MaterialIconComponent_1_5;
  _ViewHelpViewComponent1(AppView<dynamic> parentView, int parentIndex) : super(import16.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.HelpViewComponent> build() {
    _compView_0 = import10.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    import24.setAttribute(_el_0, 'icon', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import19.isDevMode
        ? import21.debugInjectorWrap(import26.AcxDarkTheme, () {
            return import26.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import26.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import27.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import11.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _compView_1 = import12.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    import24.setAttribute(_el_1, 'icon', 'chevron_left');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import13.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import26.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import11.MaterialButtonComponent) || identical(token, import28.ButtonDirective)) || identical(token, import29.HasDisabled))) {
        return _MaterialButtonComponent_0_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_1_5.icon = 'chevron_left';
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _compView_1.destroyInternalState();
  }

  void _handle_trigger_0_0($event) {
    final _ctx = ctx;
    _ctx.fire('close');
  }
}

AppView<void> viewFactory_HelpViewComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHelpViewComponent1(parentView, parentIndex);
}

class _ViewHelpViewComponent2 extends AppView<import2.HelpViewComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  _ViewHelpViewComponent2(AppView<dynamic> parentView, int parentIndex) : super(import16.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.HelpViewComponent> build() {
    final _anchor_0 = import24.createAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_HelpViewComponent3);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final _text_1 = import24.createText(' ');
    final _anchor_2 = import24.createAnchor();
    _appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_HelpViewComponent4);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    init([_appEl_0, _text_1, _appEl_2], null);
  }

  @override
  void detectChangesInternal() {
    final local_item = import19.unsafeCast<import33.HelpItem>(locals['\$implicit']);
    _NgIf_0_9.ngIf = (local_item.type == 'text');
    _NgIf_2_9.ngIf = (local_item.type == 'btn');
    _appEl_0.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_2.destroyNestedViews();
  }
}

AppView<void> viewFactory_HelpViewComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHelpViewComponent2(parentView, parentIndex);
}

class _ViewHelpViewComponent3 extends AppView<import2.HelpViewComponent> {
  var _expr_0;
  import18.Element _el_0;
  _ViewHelpViewComponent3(AppView<dynamic> parentView, int parentIndex) : super(import16.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.HelpViewComponent> build() {
    final doc = import18.document;
    _el_0 = doc.createElement('span');
    addShimE(_el_0);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_item = import19.unsafeCast<import33.HelpItem>(parentView.locals['\$implicit']);
    final currVal_0 = local_item.text;
    if (import31.checkBinding(_expr_0, currVal_0)) {
      import24.setProperty(_el_0, 'innerHTML', import31.appViewUtils.sanitizer.sanitizeHtml(currVal_0));
      _expr_0 = currVal_0;
    }
  }
}

AppView<void> viewFactory_HelpViewComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHelpViewComponent3(parentView, parentIndex);
}

class _ViewHelpViewComponent4 extends AppView<import2.HelpViewComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  _ViewHelpViewComponent4(AppView<dynamic> parentView, int parentIndex) : super(import16.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.HelpViewComponent> build() {
    final doc = import18.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'btn');
    addShimE(_el_0);
    _el_0.append(_textBinding_1.element);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_item = import19.unsafeCast<import33.HelpItem>(parentView.locals['\$implicit']);
    _textBinding_1.updateText(import32.interpolateString0(local_item.cfg.form.title));
  }

  void _handle_click_0_0($event) {
    final local_idx = import19.unsafeCast<int>(parentView.locals['index']);
    final _ctx = ctx;
    _ctx.fire('btn', local_idx);
  }
}

AppView<void> viewFactory_HelpViewComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHelpViewComponent4(parentView, parentIndex);
}

final List<dynamic> styles$HelpViewComponentHost = const [];

class _ViewHelpViewComponentHost0 extends AppView<import2.HelpViewComponent> {
  ViewHelpViewComponent0 _compView_0;
  import2.HelpViewComponent _HelpViewComponent_0_5;
  _ViewHelpViewComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import16.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.HelpViewComponent> build() {
    _compView_0 = ViewHelpViewComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HelpViewComponent_0_5 = import2.HelpViewComponent();
    _compView_0.create(_HelpViewComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _HelpViewComponent_0_5);
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

AppView<import2.HelpViewComponent> viewFactory_HelpViewComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHelpViewComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HelpViewComponent, HelpViewComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
