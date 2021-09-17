// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'welcome_component.dart';
export 'welcome_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:angular_components/model/action/async_action.template.dart' as _ref2;
import 'package:nightscout_reporter/src/controls/signin/signin_component.template.dart' as _ref3;
import 'package:nightscout_reporter/src/globals.template.dart' as _ref4;
import 'package:nightscout_reporter/src/welcome/welcome_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'welcome_component.dart' as import2;
import 'package:intl/intl.dart' as import3;
import 'package:angular_components/material_dialog/material_dialog.template.dart' as import4;
import 'package:angular_components/material_dialog/material_dialog.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import7;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import9;
import 'package:angular/src/core/linker/view_type.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import12;
import 'package:angular/src/runtime.dart' as import13;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import15;
import 'package:angular/src/di/errors.dart' as import16;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import17;
import 'package:angular_components/laminate/components/modal/modal.dart' as import18;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import20;
import '../globals.dart' as import21;
import 'package:angular_components/material_button/material_button.template.dart' as import22;
import 'package:angular_components/material_button/material_button.dart' as import23;
import 'package:angular_components/theme/dark_theme.dart' as import24;
import 'package:angular/src/core/di/opaque_token.dart' as import25;
import 'package:angular_components/button_decorator/button_decorator.dart' as import26;
import 'package:angular_components/interfaces/has_disabled.dart' as import27;
import 'package:angular/src/runtime/interpolate.dart' as import28;
import 'package:angular_components/material_button/material_fab.template.dart' as import29;
import 'package:angular_components/material_button/material_fab.dart' as import30;
import 'package:angular_components/material_icon/material_icon.template.dart' as import31;
import 'package:angular_components/material_icon/material_icon.dart' as import32;
import '../controls/signin/signin_component.template.dart' as import33;
import '../controls/signin/signin_component.dart' as import34;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import35;
import 'package:angular_components/model/math/box.dart' as import36;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import37;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import38;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import39;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import41;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import42;
import 'package:quiver/src/time/clock.dart' as import43;
import 'package:angular_components/utils/browser/window/module.dart' as import44;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import45;
import 'package:angular_components/utils/disposer/disposer.dart' as import46;
import 'package:angular/src/core/zone/ng_zone.dart' as import47;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import48;
import 'package:angular/src/core/linker/component_loader.dart' as import49;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import50;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import51;
import 'package:angular_components/laminate/overlay/module.dart' as import52;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import53;
import 'package:angular_components/laminate/enums/alignment.dart' as import54;

final List<dynamic> styles$WelcomeComponent = [import0.styles];

class ViewWelcomeComponent0 extends AppView<import2.WelcomeComponent> {
  static final String _message_0 = import3.Intl.message('Willkommen bei Nightscout Reporter!', desc: 'welcome title');
  static final String _message_1 = import3.Intl.message('Diese Seite dient der Erzeugung von PDF-Dokumenten mit den bei Nightscout gespeicherten Daten. Dafür ist es notwendig, auf diese Daten zugreifen zu können, weshalb zunächst ein paar Einstellungen gespeichert werden müssen. Solange diese nicht vorhanden und gültig sind, kann die Seite nichts für Dich tun.', desc: 'welcome section 1');
  static final String _message_2 = import3.Intl.message('Die Daten, die Du hier eingibst, werden normalerweise im localStorage des Browsers gespeichert. Dieser beinhaltet webseitenbezogene Daten, die nur von dieser Webseite ausgelesen werden können. In diesem Fall werden keine Cookies verwendet und es werden keine Daten auf Servern gespeichert. Es wird lediglich eine Verbindung zur angegebenen Nightscout-Instanz aufgebaut und die dort vorhandenen Daten ausgelesen, um daraus ein PDF-Dokument zu erzeugen. Dieses kann dann dem Diabetesberater oder sonstigen Interessenten vorgelegt werden.', desc: 'welcome section 2');
  static final String _message_3 = import3.Intl.message('Die Webseite verwendet hauptsächlich Javascript zur Erledigung ihrer Aufgaben. Bei der Erzeugung des PDF-Dokuments kommen Javascript und PHP zum Einsatz.', desc: 'welcome section 4');
  import4.ViewMaterialDialogComponent0 _compView_0;
  import5.MaterialDialogComponent _MaterialDialogComponent_0_5;
  ViewContainer _appEl_8;
  import7.NgFor _NgFor_8_9;
  ViewContainer _appEl_9;
  NgIf _NgIf_9_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  ViewContainer _appEl_16;
  NgIf _NgIf_16_9;
  ViewContainer _appEl_19;
  NgIf _NgIf_19_9;
  var _expr_2;
  static import9.ComponentStyles _componentStyles;
  ViewWelcomeComponent0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import12.document.createElement('welcome');
  }
  static String get _debugComponentUrl {
    return (import13.isDevMode ? 'asset:nightscout_reporter/lib/src/welcome/welcome_component.dart' : null);
  }

  @override
  ComponentRef<import2.WelcomeComponent> build() {
    final _rootEl = rootEl;
    final import12.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import4.ViewMaterialDialogComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    this.updateChildClassNonHtml(_el_0, 'headered-dialog');
    import15.setAttribute(_el_0, 'headered', '');
    import15.setAttribute(_el_0, 'hideFooter', '');
    import15.setAttribute(_el_0, 'shouldShowScrollStrokes', '');
    addShimC(_el_0);
    _MaterialDialogComponent_0_5 = (import13.isDevMode
        ? import16.debugInjectorWrap(import5.MaterialDialogComponent, () {
            return import5.MaterialDialogComponent(_el_0, parentView.injectorGet(import17.DomService, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import18.ModalComponent, viewData.parentIndex));
          })
        : import5.MaterialDialogComponent(_el_0, parentView.injectorGet(import17.DomService, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import18.ModalComponent, viewData.parentIndex)));
    final doc = import12.document;
    final _el_1 = doc.createElement('div');
    import15.setAttribute(_el_1, 'header', '');
    addShimC(_el_1);
    final _el_2 = import15.appendDiv(doc, _el_1);
    addShimC(_el_2);
    final _el_3 = import15.appendElement(doc, _el_2, 'h1');
    addShimE(_el_3);
    final _text_4 = import15.appendText(_el_3, _message_0);
    final _el_5 = import15.appendElement(doc, _el_2, 'p');
    addShimE(_el_5);
    final _el_6 = import15.appendDiv(doc, _el_1);
    addShimC(_el_6);
    final _el_7 = import15.appendDiv(doc, _el_6);
    this.updateChildClass(_el_7, 'langPanel');
    addShimC(_el_7);
    final _anchor_8 = import15.appendAnchor(_el_7);
    _appEl_8 = ViewContainer(8, 7, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(_appEl_8, viewFactory_WelcomeComponent1);
    _NgFor_8_9 = import7.NgFor(_appEl_8, _TemplateRef_8_8);
    final _anchor_9 = import15.appendAnchor(_el_6);
    _appEl_9 = ViewContainer(9, 6, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = TemplateRef(_appEl_9, viewFactory_WelcomeComponent3);
    _NgIf_9_9 = NgIf(_appEl_9, _TemplateRef_9_8);
    final _anchor_10 = import15.appendAnchor(_el_6);
    _appEl_10 = ViewContainer(10, 6, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(_appEl_10, viewFactory_WelcomeComponent4);
    _NgIf_10_9 = NgIf(_appEl_10, _TemplateRef_10_8);
    final _el_11 = doc.createElement('div');
    this.updateChildClass(_el_11, 'root');
    addShimC(_el_11);
    final _el_12 = import15.appendDiv(doc, _el_11);
    addShimC(_el_12);
    final _text_13 = import15.appendText(_el_12, _message_1);
    final _el_14 = import15.appendDiv(doc, _el_11);
    addShimC(_el_14);
    final _text_15 = import15.appendText(_el_14, _message_2);
    final _anchor_16 = import15.appendAnchor(_el_11);
    _appEl_16 = ViewContainer(16, 11, this, _anchor_16);
    TemplateRef _TemplateRef_16_8 = TemplateRef(_appEl_16, viewFactory_WelcomeComponent5);
    _NgIf_16_9 = NgIf(_appEl_16, _TemplateRef_16_8);
    final _el_17 = import15.appendDiv(doc, _el_11);
    addShimC(_el_17);
    final _text_18 = import15.appendText(_el_17, _message_3);
    final _anchor_19 = import15.appendAnchor(_el_11);
    _appEl_19 = ViewContainer(19, 11, this, _anchor_19);
    TemplateRef _TemplateRef_19_8 = TemplateRef(_appEl_19, viewFactory_WelcomeComponent6);
    _NgIf_19_9 = NgIf(_appEl_19, _TemplateRef_19_8);
    _compView_0.create(_MaterialDialogComponent_0_5, [
      [_el_1],
      [_el_11],
      const []
    ]);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialDialogComponent_0_5.shouldShowScrollStrokes = true;
      changed = true;
      _MaterialDialogComponent_0_5.hideFooter = true;
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_2 = _ctx.g.languageList;
    if (import20.checkBinding(_expr_2, currVal_2)) {
      _NgFor_8_9.ngForOf = currVal_2;
      _expr_2 = currVal_2;
    }
    if ((!import20.AppViewUtils.throwOnChanges)) {
      _NgFor_8_9.ngDoCheck();
    }
    _NgIf_9_9.ngIf = _ctx.g.canDebug;
    _NgIf_10_9.ngIf = _ctx.g.isConfigured;
    _NgIf_16_9.ngIf = _ctx.g.isLocal;
    _NgIf_19_9.ngIf = (!_ctx.g.isConfigured);
    _appEl_8.detectChangesInNestedViews();
    _appEl_9.detectChangesInNestedViews();
    _appEl_10.detectChangesInNestedViews();
    _appEl_16.detectChangesInNestedViews();
    _appEl_19.detectChangesInNestedViews();
    if ((!import20.AppViewUtils.throwOnChanges)) {
      _MaterialDialogComponent_0_5.ngAfterContentChecked();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_8.destroyNestedViews();
    _appEl_9.destroyNestedViews();
    _appEl_10.destroyNestedViews();
    _appEl_16.destroyNestedViews();
    _appEl_19.destroyNestedViews();
    _compView_0.destroyInternalState();
    _MaterialDialogComponent_0_5.ngOnDestroy();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import9.ComponentStyles.scoped(styles$WelcomeComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.WelcomeComponent> _WelcomeComponentNgFactory = const ComponentFactory('welcome', viewFactory_WelcomeComponentHost0);
ComponentFactory<import2.WelcomeComponent> get WelcomeComponentNgFactory {
  return _WelcomeComponentNgFactory;
}

class _ViewWelcomeComponent1 extends AppView<import2.WelcomeComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  _ViewWelcomeComponent1(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.WelcomeComponent> build() {
    final _anchor_0 = import15.createAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_WelcomeComponent2);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    init1(_appEl_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_lang = import13.unsafeCast<import21.LangData>(locals['\$implicit']);
    _NgIf_0_9.ngIf = (local_lang.code != _ctx.g.language.code);
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }
}

AppView<void> viewFactory_WelcomeComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWelcomeComponent1(parentView, parentIndex);
}

class _ViewWelcomeComponent2 extends AppView<import2.WelcomeComponent> {
  import22.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import23.MaterialButtonComponent _MaterialButtonComponent_0_6;
  var _expr_1;
  import12.Element _el_1;
  _ViewWelcomeComponent2(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.WelcomeComponent> build() {
    _compView_0 = import22.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import13.isDevMode
        ? import16.debugInjectorWrap(import24.AcxDarkTheme, () {
            return import24.AcxDarkTheme(parentView.parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), parentView.parentView.viewData.parentIndex));
          })
        : import24.AcxDarkTheme(parentView.parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), parentView.parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import23.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    final doc = import12.document;
    _el_1 = doc.createElement('img');
    addShimE(_el_1);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import24.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import23.MaterialButtonComponent) || identical(token, import26.ButtonDirective)) || identical(token, import27.HasDisabled))) {
        return _MaterialButtonComponent_0_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_lang = import13.unsafeCast<import21.LangData>(parentView.locals['\$implicit']);
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_0_6.raised = false;
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_1 = import28.interpolateString0(local_lang.imgPath);
    if (import20.checkBinding(_expr_1, currVal_1)) {
      import15.setProperty(_el_1, 'src', import20.appViewUtils.sanitizer.sanitizeUrl(currVal_1));
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }

  void _handle_trigger_0_0($event) {
    final local_lang = import13.unsafeCast<import21.LangData>(parentView.locals['\$implicit']);
    final _ctx = ctx;
    _ctx.g.changeLanguage(
      local_lang,
      checkConfigured: true,
    );
  }
}

AppView<void> viewFactory_WelcomeComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWelcomeComponent2(parentView, parentIndex);
}

class _ViewWelcomeComponent3 extends AppView<import2.WelcomeComponent> {
  import29.ViewMaterialFabComponent0 _compView_0;
  import30.MaterialFabComponent _MaterialFabComponent_0_5;
  import31.ViewMaterialIconComponent0 _compView_1;
  import32.MaterialIconComponent _MaterialIconComponent_1_5;
  _ViewWelcomeComponent3(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.WelcomeComponent> build() {
    final _ctx = ctx;
    _compView_0 = import29.ViewMaterialFabComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'debug-trigger');
    import15.setAttribute(_el_0, 'mini', '');
    addShimC(_el_0);
    _MaterialFabComponent_0_5 = import30.MaterialFabComponent(_el_0, _compView_0);
    _compView_1 = import31.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    import15.setAttribute(_el_1, 'icon', 'bug_report');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import32.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    _compView_0.create(_MaterialFabComponent_0_5, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialFabComponent_0_5.trigger.listen(eventHandler0(_ctx.clickDebug));
    init([_el_0], [subscription_0]);
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
      _MaterialIconComponent_1_5.icon = 'bug_report';
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
}

AppView<void> viewFactory_WelcomeComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWelcomeComponent3(parentView, parentIndex);
}

class _ViewWelcomeComponent4 extends AppView<import2.WelcomeComponent> {
  import22.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import23.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import31.ViewMaterialIconComponent0 _compView_1;
  import32.MaterialIconComponent _MaterialIconComponent_1_5;
  _ViewWelcomeComponent4(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.WelcomeComponent> build() {
    _compView_0 = import22.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    import15.setAttribute(_el_0, 'icon', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import13.isDevMode
        ? import16.debugInjectorWrap(import24.AcxDarkTheme, () {
            return import24.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import24.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import23.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _compView_1 = import31.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    import15.setAttribute(_el_1, 'icon', 'close');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import32.MaterialIconComponent(_el_1);
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
      if (identical(token, import24.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import23.MaterialButtonComponent) || identical(token, import26.ButtonDirective)) || identical(token, import27.HasDisabled))) {
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
      _MaterialIconComponent_1_5.icon = 'close';
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
    _ctx.fire('normal');
  }
}

AppView<void> viewFactory_WelcomeComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWelcomeComponent4(parentView, parentIndex);
}

class _ViewWelcomeComponent5 extends AppView<import2.WelcomeComponent> {
  static final String _message_0 = import3.Intl.message('Wenn in den Einstellungen eine Verbindung zum Google-Konto hergestellt wird, werden die Cookies von Google verwendet und die Daten nicht mehr im localStorage des Browsers gespeichert, sondern im AppStorage auf Google Drive. Auf diese Art kann man die Daten zentralisiert verwalten und hat diese in jedem Browser zur Verfügung, der mit dem angegebenen Google Konto verbunden ist.', desc: 'welcome section 3');
  _ViewWelcomeComponent5(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.WelcomeComponent> build() {
    final doc = import12.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    final _text_1 = import15.appendText(_el_0, _message_0);
    init1(_el_0);
  }
}

AppView<void> viewFactory_WelcomeComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWelcomeComponent5(parentView, parentIndex);
}

class _ViewWelcomeComponent6 extends AppView<import2.WelcomeComponent> {
  static final String _message_0 = import3.Intl.message('Einstellungen für die Verwendung der Seite vornehmen', desc: 'label for button to open settings on welcome screen');
  static final String _message_1 = import3.Intl.message('Mit Google Drive synchronisieren', desc: 'synchronize with google drive');
  static final String _message_2 = import3.Intl.message('Einstiegsvideo', desc: 'label for button to open settings on welcome screen');
  static final String _message_3 = import3.Intl.message('Impressum', desc: 'label for inprint button');
  static final String _message_4 = import3.Intl.message('Datenschutzerklärung', desc: 'label for dataprotection button');
  import22.ViewMaterialButtonComponent0 _compView_2;
  dynamic _AcxDarkTheme_2_5;
  import23.MaterialButtonComponent _MaterialButtonComponent_2_6;
  import31.ViewMaterialIconComponent0 _compView_3;
  import32.MaterialIconComponent _MaterialIconComponent_3_5;
  import33.ViewSigninComponent0 _compView_5;
  import34.SigninComponent _SigninComponent_5_5;
  dynamic __Document_5_6;
  dynamic __HtmlDocument_5_7;
  dynamic __Window_5_8;
  dynamic __DomService_5_9;
  dynamic __AcxImperativeViewUtils_5_10;
  import35.DomRuler __DomRuler_5_11;
  dynamic __ManagedZone_5_12;
  dynamic __overlayContainerName_5_13;
  dynamic __overlayContainerParent_5_14;
  dynamic __overlayContainer_5_15;
  bool __overlaySyncDom_5_16;
  bool __overlayRepositionLoop_5_17;
  import36.Box __overlayViewportBoundaries_5_18;
  import37.OverlayStyleConfig __OverlayStyleConfig_5_19;
  import38.ZIndexer __ZIndexer_5_20;
  import39.OverlayDomRenderService __OverlayDomRenderService_5_21;
  dynamic __OverlayService_5_22;
  List<import41.RelativePosition> __defaultPopupPositions_5_23;
  import42.DomPopupSourceFactory __DomPopupSourceFactory_5_24;
  import43.Clock __Clock_5_25;
  import22.ViewMaterialButtonComponent0 _compView_7;
  dynamic _AcxDarkTheme_7_5;
  import23.MaterialButtonComponent _MaterialButtonComponent_7_6;
  import22.ViewMaterialButtonComponent0 _compView_11;
  dynamic _AcxDarkTheme_11_5;
  import23.MaterialButtonComponent _MaterialButtonComponent_11_6;
  import22.ViewMaterialButtonComponent0 _compView_13;
  dynamic _AcxDarkTheme_13_5;
  import23.MaterialButtonComponent _MaterialButtonComponent_13_6;
  String _expr_4;
  bool _expr_6;
  _ViewWelcomeComponent6(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  dynamic get _Document_5_6 {
    if ((__Document_5_6 == null)) {
      (__Document_5_6 = import44.getDocument());
    }
    return __Document_5_6;
  }

  dynamic get _HtmlDocument_5_7 {
    if ((__HtmlDocument_5_7 == null)) {
      (__HtmlDocument_5_7 = import44.getDocument());
    }
    return __HtmlDocument_5_7;
  }

  dynamic get _Window_5_8 {
    if ((__Window_5_8 == null)) {
      (__Window_5_8 = import44.getWindow());
    }
    return __Window_5_8;
  }

  dynamic get _DomService_5_9 {
    if ((__DomService_5_9 == null)) {
      (__DomService_5_9 = (import13.isDevMode
          ? import16.debugInjectorWrap(import17.DomService, () {
              return import45.createDomService(parentView.parentView.injectorGetOptional(import17.DomService, parentView.viewData.parentIndex), parentView.parentView.injectorGetOptional(import46.Disposer, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import47.NgZone, parentView.viewData.parentIndex), _Window_5_8);
            })
          : import45.createDomService(parentView.parentView.injectorGetOptional(import17.DomService, parentView.viewData.parentIndex), parentView.parentView.injectorGetOptional(import46.Disposer, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import47.NgZone, parentView.viewData.parentIndex), _Window_5_8)));
    }
    return __DomService_5_9;
  }

  dynamic get _AcxImperativeViewUtils_5_10 {
    if ((__AcxImperativeViewUtils_5_10 == null)) {
      (__AcxImperativeViewUtils_5_10 = (import13.isDevMode
          ? import16.debugInjectorWrap(import48.AcxImperativeViewUtils, () {
              return import48.AcxImperativeViewUtils(parentView.parentView.injectorGet(import49.ComponentLoader, parentView.viewData.parentIndex), _DomService_5_9);
            })
          : import48.AcxImperativeViewUtils(parentView.parentView.injectorGet(import49.ComponentLoader, parentView.viewData.parentIndex), _DomService_5_9)));
    }
    return __AcxImperativeViewUtils_5_10;
  }

  import35.DomRuler get _DomRuler_5_11 {
    if ((__DomRuler_5_11 == null)) {
      (__DomRuler_5_11 = import35.DomRuler(_Document_5_6, _DomService_5_9));
    }
    return __DomRuler_5_11;
  }

  dynamic get _ManagedZone_5_12 {
    if ((__ManagedZone_5_12 == null)) {
      (__ManagedZone_5_12 = (import13.isDevMode
          ? import16.debugInjectorWrap(import50.ManagedZone, () {
              return import51.Angular2ManagedZone(parentView.parentView.injectorGet(import47.NgZone, parentView.viewData.parentIndex));
            })
          : import51.Angular2ManagedZone(parentView.parentView.injectorGet(import47.NgZone, parentView.viewData.parentIndex))));
    }
    return __ManagedZone_5_12;
  }

  dynamic get _overlayContainerName_5_13 {
    if ((__overlayContainerName_5_13 == null)) {
      (__overlayContainerName_5_13 = (import13.isDevMode
          ? import16.debugInjectorWrap(const import25.OpaqueToken<dynamic>('overlayContainerName'), () {
              return import52.getDefaultContainerName(parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('overlayContainerName'), parentView.viewData.parentIndex));
            })
          : import52.getDefaultContainerName(parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('overlayContainerName'), parentView.viewData.parentIndex))));
    }
    return __overlayContainerName_5_13;
  }

  dynamic get _overlayContainerParent_5_14 {
    if ((__overlayContainerParent_5_14 == null)) {
      (__overlayContainerParent_5_14 = (import13.isDevMode
          ? import16.debugInjectorWrap(const import25.OpaqueToken<dynamic>('overlayContainerParent'), () {
              return import52.getOverlayContainerParent(_Document_5_6, parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('overlayContainerParent'), parentView.viewData.parentIndex));
            })
          : import52.getOverlayContainerParent(_Document_5_6, parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('overlayContainerParent'), parentView.viewData.parentIndex))));
    }
    return __overlayContainerParent_5_14;
  }

  dynamic get _overlayContainer_5_15 {
    if ((__overlayContainer_5_15 == null)) {
      (__overlayContainer_5_15 = (import13.isDevMode
          ? import16.debugInjectorWrap(const import25.OpaqueToken<dynamic>('overlayContainer'), () {
              return import52.getDefaultContainer(_overlayContainerName_5_13, _overlayContainerParent_5_14, parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('overlayContainer'), parentView.viewData.parentIndex));
            })
          : import52.getDefaultContainer(_overlayContainerName_5_13, _overlayContainerParent_5_14, parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('overlayContainer'), parentView.viewData.parentIndex))));
    }
    return __overlayContainer_5_15;
  }

  bool get _overlaySyncDom_5_16 {
    if ((__overlaySyncDom_5_16 == null)) {
      (__overlaySyncDom_5_16 = true);
    }
    return __overlaySyncDom_5_16;
  }

  bool get _overlayRepositionLoop_5_17 {
    if ((__overlayRepositionLoop_5_17 == null)) {
      (__overlayRepositionLoop_5_17 = true);
    }
    return __overlayRepositionLoop_5_17;
  }

  import36.Box get _overlayViewportBoundaries_5_18 {
    if ((__overlayViewportBoundaries_5_18 == null)) {
      (__overlayViewportBoundaries_5_18 = const import36.Box());
    }
    return __overlayViewportBoundaries_5_18;
  }

  import37.OverlayStyleConfig get _OverlayStyleConfig_5_19 {
    if ((__OverlayStyleConfig_5_19 == null)) {
      (__OverlayStyleConfig_5_19 = import37.OverlayStyleConfig(_Document_5_6));
    }
    return __OverlayStyleConfig_5_19;
  }

  import38.ZIndexer get _ZIndexer_5_20 {
    if ((__ZIndexer_5_20 == null)) {
      (__ZIndexer_5_20 = import38.ZIndexer());
    }
    return __ZIndexer_5_20;
  }

  import39.OverlayDomRenderService get _OverlayDomRenderService_5_21 {
    if ((__OverlayDomRenderService_5_21 == null)) {
      (__OverlayDomRenderService_5_21 = import39.OverlayDomRenderService(_OverlayStyleConfig_5_19, _overlayContainer_5_15, _overlayContainerName_5_13, _DomRuler_5_11, _DomService_5_9, _AcxImperativeViewUtils_5_10, _overlaySyncDom_5_16, _overlayRepositionLoop_5_17, _ZIndexer_5_20));
    }
    return __OverlayDomRenderService_5_21;
  }

  dynamic get _OverlayService_5_22 {
    if ((__OverlayService_5_22 == null)) {
      (__OverlayService_5_22 = (import13.isDevMode
          ? import16.debugInjectorWrap(import53.OverlayService, () {
              return import53.OverlayService(parentView.parentView.injectorGet(import47.NgZone, parentView.viewData.parentIndex), _overlaySyncDom_5_16, _OverlayDomRenderService_5_21, parentView.parentView.injectorGetOptional(import53.OverlayService, parentView.viewData.parentIndex));
            })
          : import53.OverlayService(parentView.parentView.injectorGet(import47.NgZone, parentView.viewData.parentIndex), _overlaySyncDom_5_16, _OverlayDomRenderService_5_21, parentView.parentView.injectorGetOptional(import53.OverlayService, parentView.viewData.parentIndex))));
    }
    return __OverlayService_5_22;
  }

  List<import41.RelativePosition> get _defaultPopupPositions_5_23 {
    if ((__defaultPopupPositions_5_23 == null)) {
      (__defaultPopupPositions_5_23 = const [import41.RelativePosition(animationOrigin: 'top center'), import41.RelativePosition(animationOrigin: 'top right', originX: import41.Alignment('End', 'flex-end')), import41.RelativePosition(animationOrigin: 'top left', originX: import41.Alignment('Start', 'flex-start')), import41.RelativePosition(animationOrigin: 'bottom center', originY: import41.Alignment('End', 'flex-end')), import41.RelativePosition(animationOrigin: 'bottom right', originX: import41.Alignment('End', 'flex-end'), originY: import41.Alignment('End', 'flex-end')), import41.RelativePosition(animationOrigin: 'bottom left', originX: import41.Alignment('Start', 'flex-start'), originY: import41.Alignment('End', 'flex-end'))]);
    }
    return __defaultPopupPositions_5_23;
  }

  import42.DomPopupSourceFactory get _DomPopupSourceFactory_5_24 {
    if ((__DomPopupSourceFactory_5_24 == null)) {
      (__DomPopupSourceFactory_5_24 = import42.DomPopupSourceFactory(_DomRuler_5_11));
    }
    return __DomPopupSourceFactory_5_24;
  }

  import43.Clock get _Clock_5_25 {
    if ((__Clock_5_25 == null)) {
      (__Clock_5_25 = const import43.Clock());
    }
    return __Clock_5_25;
  }

  @override
  ComponentRef<import2.WelcomeComponent> build() {
    final _ctx = ctx;
    final doc = import12.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'controls');
    addShimC(_el_0);
    final _el_1 = import15.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'left');
    addShimC(_el_1);
    _compView_2 = import22.ViewMaterialButtonComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    _el_1.append(_el_2);
    this.updateChildClassNonHtml(_el_2, 'iconButton');
    addShimC(_el_2);
    _AcxDarkTheme_2_5 = (import13.isDevMode
        ? import16.debugInjectorWrap(import24.AcxDarkTheme, () {
            return import24.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import24.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_2_6 = import23.MaterialButtonComponent(_el_2, _AcxDarkTheme_2_5, _compView_2, null);
    _compView_3 = import31.ViewMaterialIconComponent0(this, 3);
    final _el_3 = _compView_3.rootEl;
    import15.setAttribute(_el_3, 'icon', 'settings');
    addShimC(_el_3);
    _MaterialIconComponent_3_5 = import32.MaterialIconComponent(_el_3);
    _compView_3.create0(_MaterialIconComponent_3_5);
    final _text_4 = import15.createText(_message_0);
    _compView_2.create(_MaterialButtonComponent_2_6, [
      [_el_3, _text_4]
    ]);
    _compView_5 = import33.ViewSigninComponent0(this, 5);
    final _el_5 = _compView_5.rootEl;
    _el_1.append(_el_5);
    import15.setAttribute(_el_5, 'msgDisconnected', _message_1);
    addShimC(_el_5);
    _SigninComponent_5_5 = import34.SigninComponent();
    _compView_5.create0(_SigninComponent_5_5);
    final _el_6 = import15.appendDiv(doc, _el_0);
    this.updateChildClass(_el_6, 'right');
    addShimC(_el_6);
    _compView_7 = import22.ViewMaterialButtonComponent0(this, 7);
    final _el_7 = _compView_7.rootEl;
    _el_6.append(_el_7);
    this.updateChildClassNonHtml(_el_7, 'imageButton');
    addShimC(_el_7);
    _AcxDarkTheme_7_5 = (import13.isDevMode
        ? import16.debugInjectorWrap(import24.AcxDarkTheme, () {
            return import24.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import24.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_7_6 = import23.MaterialButtonComponent(_el_7, _AcxDarkTheme_7_5, _compView_7, null);
    final _el_8 = doc.createElement('img');
    import15.setAttribute(_el_8, 'src', 'packages/nightscout_reporter/assets/img/youtube_social_icon_red.png');
    addShimE(_el_8);
    final _text_9 = import15.createText(' ');
    final _text_10 = import15.createText(_message_2);
    _compView_7.create(_MaterialButtonComponent_7_6, [
      [_el_8, _text_9, _text_10]
    ]);
    _compView_11 = import22.ViewMaterialButtonComponent0(this, 11);
    final _el_11 = _compView_11.rootEl;
    _el_6.append(_el_11);
    this.updateChildClassNonHtml(_el_11, 'legal');
    addShimC(_el_11);
    _AcxDarkTheme_11_5 = (import13.isDevMode
        ? import16.debugInjectorWrap(import24.AcxDarkTheme, () {
            return import24.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import24.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_11_6 = import23.MaterialButtonComponent(_el_11, _AcxDarkTheme_11_5, _compView_11, null);
    final _text_12 = import15.createText(_message_3);
    _compView_11.create(_MaterialButtonComponent_11_6, [
      [_text_12]
    ]);
    _compView_13 = import22.ViewMaterialButtonComponent0(this, 13);
    final _el_13 = _compView_13.rootEl;
    _el_6.append(_el_13);
    this.updateChildClassNonHtml(_el_13, 'legal');
    addShimC(_el_13);
    _AcxDarkTheme_13_5 = (import13.isDevMode
        ? import16.debugInjectorWrap(import24.AcxDarkTheme, () {
            return import24.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import24.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import25.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_13_6 = import23.MaterialButtonComponent(_el_13, _AcxDarkTheme_13_5, _compView_13, null);
    final _text_14 = import15.createText(_message_4);
    _compView_13.create(_MaterialButtonComponent_13_6, [
      [_text_14]
    ]);
    final subscription_0 = _MaterialButtonComponent_2_6.trigger.listen(eventHandler1(_handle_trigger_2_0));
    final subscription_1 = _SigninComponent_5_5.isAuthorizedChange.listen(eventHandler1(_handle_isAuthorizedChange_5_2));
    final subscription_2 = _SigninComponent_5_5.signinResult.listen(eventHandler1(_handle_signinResult_5_1));
    final subscription_3 = _SigninComponent_5_5.onevent.listen(eventHandler1(_ctx.signinEvent));
    final subscription_4 = _MaterialButtonComponent_7_6.trigger.listen(eventHandler1(_handle_trigger_7_0));
    final subscription_5 = _MaterialButtonComponent_11_6.trigger.listen(eventHandler1(_handle_trigger_11_0));
    final subscription_6 = _MaterialButtonComponent_13_6.trigger.listen(eventHandler1(_handle_trigger_13_0));
    init([_el_0], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5, subscription_6]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((2 <= nodeIndex) && (nodeIndex <= 4))) {
      if (identical(token, import24.AcxDarkTheme)) {
        return _AcxDarkTheme_2_5;
      }
      if (((identical(token, import23.MaterialButtonComponent) || identical(token, import26.ButtonDirective)) || identical(token, import27.HasDisabled))) {
        return _MaterialButtonComponent_2_6;
      }
    }
    if ((5 == nodeIndex)) {
      if (identical(token, import12.Document)) {
        return _Document_5_6;
      }
      if (identical(token, import12.HtmlDocument)) {
        return _HtmlDocument_5_7;
      }
      if (identical(token, import12.Window)) {
        return _Window_5_8;
      }
      if (identical(token, import17.DomService)) {
        return _DomService_5_9;
      }
      if (identical(token, import48.AcxImperativeViewUtils)) {
        return _AcxImperativeViewUtils_5_10;
      }
      if (identical(token, import35.DomRuler)) {
        return _DomRuler_5_11;
      }
      if (identical(token, import50.ManagedZone)) {
        return _ManagedZone_5_12;
      }
      if (identical(token, const import25.OpaqueToken<dynamic>('overlayContainerName'))) {
        return _overlayContainerName_5_13;
      }
      if (identical(token, const import25.OpaqueToken<dynamic>('overlayContainerParent'))) {
        return _overlayContainerParent_5_14;
      }
      if (identical(token, const import25.OpaqueToken<dynamic>('overlayContainer'))) {
        return _overlayContainer_5_15;
      }
      if (identical(token, const import25.OpaqueToken<dynamic>('overlaySyncDom'))) {
        return _overlaySyncDom_5_16;
      }
      if (identical(token, const import25.OpaqueToken<dynamic>('overlayRepositionLoop'))) {
        return _overlayRepositionLoop_5_17;
      }
      if (identical(token, const import25.OpaqueToken<dynamic>('overlayViewportBoundaries'))) {
        return _overlayViewportBoundaries_5_18;
      }
      if (identical(token, import37.OverlayStyleConfig)) {
        return _OverlayStyleConfig_5_19;
      }
      if (identical(token, import38.ZIndexer)) {
        return _ZIndexer_5_20;
      }
      if (identical(token, import39.OverlayDomRenderService)) {
        return _OverlayDomRenderService_5_21;
      }
      if (identical(token, import53.OverlayService)) {
        return _OverlayService_5_22;
      }
      if (identical(token, const import25.OpaqueToken<List<import54.RelativePosition>>('defaultPopupPositions'))) {
        return _defaultPopupPositions_5_23;
      }
      if (identical(token, import42.DomPopupSourceFactory)) {
        return _DomPopupSourceFactory_5_24;
      }
      if ((identical(token, import43.Clock) || identical(token, const import25.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock')))) {
        return _Clock_5_25;
      }
    }
    if (((7 <= nodeIndex) && (nodeIndex <= 10))) {
      if (identical(token, import24.AcxDarkTheme)) {
        return _AcxDarkTheme_7_5;
      }
      if (((identical(token, import23.MaterialButtonComponent) || identical(token, import26.ButtonDirective)) || identical(token, import27.HasDisabled))) {
        return _MaterialButtonComponent_7_6;
      }
    }
    if (((11 <= nodeIndex) && (nodeIndex <= 12))) {
      if (identical(token, import24.AcxDarkTheme)) {
        return _AcxDarkTheme_11_5;
      }
      if (((identical(token, import23.MaterialButtonComponent) || identical(token, import26.ButtonDirective)) || identical(token, import27.HasDisabled))) {
        return _MaterialButtonComponent_11_6;
      }
    }
    if (((13 <= nodeIndex) && (nodeIndex <= 14))) {
      if (identical(token, import24.AcxDarkTheme)) {
        return _AcxDarkTheme_13_5;
      }
      if (((identical(token, import23.MaterialButtonComponent) || identical(token, import26.ButtonDirective)) || identical(token, import27.HasDisabled))) {
        return _MaterialButtonComponent_13_6;
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
      _MaterialButtonComponent_2_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_3_5.icon = 'settings';
      changed = true;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    if (firstCheck) {
      _SigninComponent_5_5.isVisible = true;
      _SigninComponent_5_5.raised = true;
      _SigninComponent_5_5.msgDisconnected = _message_1;
    }
    final currVal_4 = _ctx.g.googleClientId;
    if (import20.checkBinding(_expr_4, currVal_4)) {
      _SigninComponent_5_5.clientId = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_6 = _ctx.g.syncGoogle;
    if (import20.checkBinding(_expr_6, currVal_6)) {
      _SigninComponent_5_5.isAuthorized = currVal_6;
      _expr_6 = currVal_6;
    }
    changed = false;
    if (firstCheck) {
      _MaterialButtonComponent_7_6.raised = false;
      changed = true;
    }
    if (changed) {
      _compView_7.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_11.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_13.markAsCheckOnce();
    }
    _compView_2.detectHostChanges(firstCheck);
    _compView_7.detectHostChanges(firstCheck);
    _compView_11.detectHostChanges(firstCheck);
    _compView_13.detectHostChanges(firstCheck);
    _compView_2.detectChanges();
    _compView_3.detectChanges();
    _compView_5.detectChanges();
    _compView_7.detectChanges();
    _compView_11.detectChanges();
    _compView_13.detectChanges();
    if ((!import20.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _SigninComponent_5_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_2.destroyInternalState();
    _compView_3.destroyInternalState();
    _compView_5.destroyInternalState();
    _compView_7.destroyInternalState();
    _compView_11.destroyInternalState();
    _compView_13.destroyInternalState();
  }

  void _handle_trigger_2_0($event) {
    final _ctx = ctx;
    _ctx.fire('settings');
  }

  void _handle_signinResult_5_1($event) {
    final _ctx = ctx;
    _ctx.g.client = $event;
  }

  void _handle_isAuthorizedChange_5_2($event) {
    final _ctx = ctx;
    _ctx.g.syncGoogle = $event;
  }

  void _handle_trigger_7_0($event) {
    final _ctx = ctx;
    _ctx.fire('video01');
  }

  void _handle_trigger_11_0($event) {
    final _ctx = ctx;
    _ctx.fire('impressum');
  }

  void _handle_trigger_13_0($event) {
    final _ctx = ctx;
    _ctx.fire('dsgvo');
  }
}

AppView<void> viewFactory_WelcomeComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWelcomeComponent6(parentView, parentIndex);
}

final List<dynamic> styles$WelcomeComponentHost = const [];

class _ViewWelcomeComponentHost0 extends AppView<import2.WelcomeComponent> {
  ViewWelcomeComponent0 _compView_0;
  import2.WelcomeComponent _WelcomeComponent_0_5;
  dynamic __Document_0_6;
  dynamic __HtmlDocument_0_7;
  dynamic __Window_0_8;
  dynamic __DomService_0_9;
  dynamic __AcxImperativeViewUtils_0_10;
  import35.DomRuler __DomRuler_0_11;
  dynamic __ManagedZone_0_12;
  dynamic __overlayContainerName_0_13;
  dynamic __overlayContainerParent_0_14;
  dynamic __overlayContainer_0_15;
  bool __overlaySyncDom_0_16;
  bool __overlayRepositionLoop_0_17;
  import36.Box __overlayViewportBoundaries_0_18;
  import37.OverlayStyleConfig __OverlayStyleConfig_0_19;
  import38.ZIndexer __ZIndexer_0_20;
  import39.OverlayDomRenderService __OverlayDomRenderService_0_21;
  dynamic __OverlayService_0_22;
  List<import41.RelativePosition> __defaultPopupPositions_0_23;
  import42.DomPopupSourceFactory __DomPopupSourceFactory_0_24;
  import43.Clock __Clock_0_25;
  _ViewWelcomeComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _Document_0_6 {
    if ((__Document_0_6 == null)) {
      (__Document_0_6 = import44.getDocument());
    }
    return __Document_0_6;
  }

  dynamic get _HtmlDocument_0_7 {
    if ((__HtmlDocument_0_7 == null)) {
      (__HtmlDocument_0_7 = import44.getDocument());
    }
    return __HtmlDocument_0_7;
  }

  dynamic get _Window_0_8 {
    if ((__Window_0_8 == null)) {
      (__Window_0_8 = import44.getWindow());
    }
    return __Window_0_8;
  }

  dynamic get _DomService_0_9 {
    if ((__DomService_0_9 == null)) {
      (__DomService_0_9 = (import13.isDevMode
          ? import16.debugInjectorWrap(import17.DomService, () {
              return import45.createDomService(this.injectorGetOptional(import17.DomService, viewData.parentIndex), this.injectorGetOptional(import46.Disposer, viewData.parentIndex), this.injectorGet(import47.NgZone, viewData.parentIndex), _Window_0_8);
            })
          : import45.createDomService(this.injectorGetOptional(import17.DomService, viewData.parentIndex), this.injectorGetOptional(import46.Disposer, viewData.parentIndex), this.injectorGet(import47.NgZone, viewData.parentIndex), _Window_0_8)));
    }
    return __DomService_0_9;
  }

  dynamic get _AcxImperativeViewUtils_0_10 {
    if ((__AcxImperativeViewUtils_0_10 == null)) {
      (__AcxImperativeViewUtils_0_10 = (import13.isDevMode
          ? import16.debugInjectorWrap(import48.AcxImperativeViewUtils, () {
              return import48.AcxImperativeViewUtils(this.injectorGet(import49.ComponentLoader, viewData.parentIndex), _DomService_0_9);
            })
          : import48.AcxImperativeViewUtils(this.injectorGet(import49.ComponentLoader, viewData.parentIndex), _DomService_0_9)));
    }
    return __AcxImperativeViewUtils_0_10;
  }

  import35.DomRuler get _DomRuler_0_11 {
    if ((__DomRuler_0_11 == null)) {
      (__DomRuler_0_11 = import35.DomRuler(_Document_0_6, _DomService_0_9));
    }
    return __DomRuler_0_11;
  }

  dynamic get _ManagedZone_0_12 {
    if ((__ManagedZone_0_12 == null)) {
      (__ManagedZone_0_12 = (import13.isDevMode
          ? import16.debugInjectorWrap(import50.ManagedZone, () {
              return import51.Angular2ManagedZone(this.injectorGet(import47.NgZone, viewData.parentIndex));
            })
          : import51.Angular2ManagedZone(this.injectorGet(import47.NgZone, viewData.parentIndex))));
    }
    return __ManagedZone_0_12;
  }

  dynamic get _overlayContainerName_0_13 {
    if ((__overlayContainerName_0_13 == null)) {
      (__overlayContainerName_0_13 = (import13.isDevMode
          ? import16.debugInjectorWrap(const import25.OpaqueToken<dynamic>('overlayContainerName'), () {
              return import52.getDefaultContainerName(this.injectorGetOptional(const import25.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex));
            })
          : import52.getDefaultContainerName(this.injectorGetOptional(const import25.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex))));
    }
    return __overlayContainerName_0_13;
  }

  dynamic get _overlayContainerParent_0_14 {
    if ((__overlayContainerParent_0_14 == null)) {
      (__overlayContainerParent_0_14 = (import13.isDevMode
          ? import16.debugInjectorWrap(const import25.OpaqueToken<dynamic>('overlayContainerParent'), () {
              return import52.getOverlayContainerParent(_Document_0_6, this.injectorGetOptional(const import25.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex));
            })
          : import52.getOverlayContainerParent(_Document_0_6, this.injectorGetOptional(const import25.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex))));
    }
    return __overlayContainerParent_0_14;
  }

  dynamic get _overlayContainer_0_15 {
    if ((__overlayContainer_0_15 == null)) {
      (__overlayContainer_0_15 = (import13.isDevMode
          ? import16.debugInjectorWrap(const import25.OpaqueToken<dynamic>('overlayContainer'), () {
              return import52.getDefaultContainer(_overlayContainerName_0_13, _overlayContainerParent_0_14, this.injectorGetOptional(const import25.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex));
            })
          : import52.getDefaultContainer(_overlayContainerName_0_13, _overlayContainerParent_0_14, this.injectorGetOptional(const import25.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex))));
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

  import36.Box get _overlayViewportBoundaries_0_18 {
    if ((__overlayViewportBoundaries_0_18 == null)) {
      (__overlayViewportBoundaries_0_18 = const import36.Box());
    }
    return __overlayViewportBoundaries_0_18;
  }

  import37.OverlayStyleConfig get _OverlayStyleConfig_0_19 {
    if ((__OverlayStyleConfig_0_19 == null)) {
      (__OverlayStyleConfig_0_19 = import37.OverlayStyleConfig(_Document_0_6));
    }
    return __OverlayStyleConfig_0_19;
  }

  import38.ZIndexer get _ZIndexer_0_20 {
    if ((__ZIndexer_0_20 == null)) {
      (__ZIndexer_0_20 = import38.ZIndexer());
    }
    return __ZIndexer_0_20;
  }

  import39.OverlayDomRenderService get _OverlayDomRenderService_0_21 {
    if ((__OverlayDomRenderService_0_21 == null)) {
      (__OverlayDomRenderService_0_21 = import39.OverlayDomRenderService(_OverlayStyleConfig_0_19, _overlayContainer_0_15, _overlayContainerName_0_13, _DomRuler_0_11, _DomService_0_9, _AcxImperativeViewUtils_0_10, _overlaySyncDom_0_16, _overlayRepositionLoop_0_17, _ZIndexer_0_20));
    }
    return __OverlayDomRenderService_0_21;
  }

  dynamic get _OverlayService_0_22 {
    if ((__OverlayService_0_22 == null)) {
      (__OverlayService_0_22 = (import13.isDevMode
          ? import16.debugInjectorWrap(import53.OverlayService, () {
              return import53.OverlayService(this.injectorGet(import47.NgZone, viewData.parentIndex), _overlaySyncDom_0_16, _OverlayDomRenderService_0_21, this.injectorGetOptional(import53.OverlayService, viewData.parentIndex));
            })
          : import53.OverlayService(this.injectorGet(import47.NgZone, viewData.parentIndex), _overlaySyncDom_0_16, _OverlayDomRenderService_0_21, this.injectorGetOptional(import53.OverlayService, viewData.parentIndex))));
    }
    return __OverlayService_0_22;
  }

  List<import41.RelativePosition> get _defaultPopupPositions_0_23 {
    if ((__defaultPopupPositions_0_23 == null)) {
      (__defaultPopupPositions_0_23 = const [import41.RelativePosition(animationOrigin: 'top center'), import41.RelativePosition(animationOrigin: 'top right', originX: import41.Alignment('End', 'flex-end')), import41.RelativePosition(animationOrigin: 'top left', originX: import41.Alignment('Start', 'flex-start')), import41.RelativePosition(animationOrigin: 'bottom center', originY: import41.Alignment('End', 'flex-end')), import41.RelativePosition(animationOrigin: 'bottom right', originX: import41.Alignment('End', 'flex-end'), originY: import41.Alignment('End', 'flex-end')), import41.RelativePosition(animationOrigin: 'bottom left', originX: import41.Alignment('Start', 'flex-start'), originY: import41.Alignment('End', 'flex-end'))]);
    }
    return __defaultPopupPositions_0_23;
  }

  import42.DomPopupSourceFactory get _DomPopupSourceFactory_0_24 {
    if ((__DomPopupSourceFactory_0_24 == null)) {
      (__DomPopupSourceFactory_0_24 = import42.DomPopupSourceFactory(_DomRuler_0_11));
    }
    return __DomPopupSourceFactory_0_24;
  }

  import43.Clock get _Clock_0_25 {
    if ((__Clock_0_25 == null)) {
      (__Clock_0_25 = const import43.Clock());
    }
    return __Clock_0_25;
  }

  @override
  ComponentRef<import2.WelcomeComponent> build() {
    _compView_0 = ViewWelcomeComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _WelcomeComponent_0_5 = import2.WelcomeComponent();
    _compView_0.create(_WelcomeComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _WelcomeComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import12.Document)) {
        return _Document_0_6;
      }
      if (identical(token, import12.HtmlDocument)) {
        return _HtmlDocument_0_7;
      }
      if (identical(token, import12.Window)) {
        return _Window_0_8;
      }
      if (identical(token, import17.DomService)) {
        return _DomService_0_9;
      }
      if (identical(token, import48.AcxImperativeViewUtils)) {
        return _AcxImperativeViewUtils_0_10;
      }
      if (identical(token, import35.DomRuler)) {
        return _DomRuler_0_11;
      }
      if (identical(token, import50.ManagedZone)) {
        return _ManagedZone_0_12;
      }
      if (identical(token, const import25.OpaqueToken<dynamic>('overlayContainerName'))) {
        return _overlayContainerName_0_13;
      }
      if (identical(token, const import25.OpaqueToken<dynamic>('overlayContainerParent'))) {
        return _overlayContainerParent_0_14;
      }
      if (identical(token, const import25.OpaqueToken<dynamic>('overlayContainer'))) {
        return _overlayContainer_0_15;
      }
      if (identical(token, const import25.OpaqueToken<dynamic>('overlaySyncDom'))) {
        return _overlaySyncDom_0_16;
      }
      if (identical(token, const import25.OpaqueToken<dynamic>('overlayRepositionLoop'))) {
        return _overlayRepositionLoop_0_17;
      }
      if (identical(token, const import25.OpaqueToken<dynamic>('overlayViewportBoundaries'))) {
        return _overlayViewportBoundaries_0_18;
      }
      if (identical(token, import37.OverlayStyleConfig)) {
        return _OverlayStyleConfig_0_19;
      }
      if (identical(token, import38.ZIndexer)) {
        return _ZIndexer_0_20;
      }
      if (identical(token, import39.OverlayDomRenderService)) {
        return _OverlayDomRenderService_0_21;
      }
      if (identical(token, import53.OverlayService)) {
        return _OverlayService_0_22;
      }
      if (identical(token, const import25.OpaqueToken<List<import54.RelativePosition>>('defaultPopupPositions'))) {
        return _defaultPopupPositions_0_23;
      }
      if (identical(token, import42.DomPopupSourceFactory)) {
        return _DomPopupSourceFactory_0_24;
      }
      if ((identical(token, import43.Clock) || identical(token, const import25.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock')))) {
        return _Clock_0_25;
      }
    }
    return notFoundResult;
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

AppView<import2.WelcomeComponent> viewFactory_WelcomeComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWelcomeComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(WelcomeComponent, WelcomeComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
