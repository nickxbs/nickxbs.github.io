// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'settings_component.dart';
export 'settings_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../globals.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/angular_components.template.dart' as _ref2;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as _ref3;
import 'package:angular_components/material_button/material_fab.template.dart' as _ref4;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref5;
import 'package:angular_components/material_input/material_input.template.dart' as _ref6;
import 'package:angular_components/material_select/material_dropdown_select.template.dart' as _ref7;
import 'package:angular_components/material_select/material_select_item.template.dart' as _ref8;
import 'package:angular_components/material_slider/material_slider.template.dart' as _ref9;
import 'package:nightscout_reporter/src/controls/signin/signin_component.template.dart' as _ref10;
import 'package:nightscout_reporter/src/globals.template.dart' as _ref11;
import 'package:nightscout_reporter/src/settings/settings_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'settings_component.dart' as import2;
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
import 'package:intl/intl.dart' as import13;
import 'package:angular/src/runtime/text_binding.dart' as import14;
import 'package:angular_components/material_dialog/material_dialog.template.dart' as import15;
import 'package:angular_components/material_dialog/material_dialog.dart' as import16;
import 'package:angular_components/material_select/material_dropdown_select.template.dart' as import17;
import 'package:angular_components/material_select/material_dropdown_select.dart' as import18;
import 'package:angular_components/model/a11y/active_item.dart' as import19;
import 'package:angular/src/common/directives/ng_for.dart' as import20;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as import21;
import 'package:angular_components/material_checkbox/material_checkbox.dart' as import22;
import 'package:angular_components/material_slider/material_slider.template.dart' as import23;
import 'package:angular_components/material_slider/material_slider.dart' as import24;
import 'package:angular/src/di/errors.dart' as import25;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import26;
import 'package:angular_components/laminate/components/modal/modal.dart' as import27;
import 'package:angular_components/utils/id_generator/id_generator.dart' as import28;
import 'package:angular_components/src/laminate/popup/popup_size_provider.dart' as import29;
import 'package:angular/src/core/di/opaque_token.dart' as import30;
import 'package:angular_components/mixins/material_dropdown_base.dart' as import31;
import 'package:angular_components/material_select/activation_handler.dart' as import32;
import 'package:angular_components/interfaces/has_disabled.dart' as import33;
import 'package:angular_components/model/ui/has_renderer.dart' as import34;
import 'package:angular_components/content/deferred_content_aware.dart' as import35;
import 'package:angular_components/model/selection/selection_container.dart' as import36;
import 'package:angular/src/core/linker/app_view_utils.dart' as import37;
import 'package:angular/src/runtime/interpolate.dart' as import38;
import 'package:angular_components/material_button/material_button.template.dart' as import39;
import 'package:angular_components/material_button/material_button.dart' as import40;
import 'package:angular_components/material_icon/material_icon.template.dart' as import41;
import 'package:angular_components/material_icon/material_icon.dart' as import42;
import 'package:angular_components/theme/dark_theme.dart' as import43;
import 'package:angular_components/button_decorator/button_decorator.dart' as import44;
import 'package:angular_components/material_progress/material_progress.template.dart' as import45;
import 'package:angular_components/material_progress/material_progress.dart' as import46;
import 'package:angular_components/material_input/material_input.template.dart' as import47;
import 'package:angular_components/material_input/deferred_validator.dart' as import48;
import 'package:angular_forms/src/directives/ng_model.dart' as import49;
import 'package:angular_components/material_input/material_input.dart' as import50;
import 'package:angular_components/material_input/material_input_default_value_accessor.dart' as import51;
import 'package:angular_components/material_button/material_fab.template.dart' as import52;
import 'package:angular_components/material_button/material_fab.dart' as import53;
import 'package:angular_forms/src/directives/ng_control.dart' as import54;
import 'package:angular_components/material_input/base_material_input.dart' as import55;
import 'package:angular_components/utils/angular/reference/reference.dart' as import56;
import 'package:angular_components/focus/focus_interface.dart' as import57;
import '../globals.dart' as import58;
import 'dart:core';
import 'package:angular_components/material_select/material_select_item.template.dart' as import60;
import 'package:angular_components/material_select/material_select_item.dart' as import61;

final List<dynamic> styles$SettingsComponent = [import0.styles];

class ViewSettingsComponent0 extends AppView<import2.SettingsComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  static import5.ComponentStyles _componentStyles;
  ViewSettingsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('settings');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:nightscout_reporter/lib/src/settings/settings_component.dart' : null);
  }

  @override
  ComponentRef<import2.SettingsComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_SettingsComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final _anchor_1 = import11.appendAnchor(parentRenderNode);
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_SettingsComponent16);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = (_ctx.confirmIdx == 0);
    _NgIf_1_9.ngIf = (_ctx.confirmIdx > 0);
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_1.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$SettingsComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.SettingsComponent> _SettingsComponentNgFactory = const ComponentFactory('settings', viewFactory_SettingsComponentHost0);
ComponentFactory<import2.SettingsComponent> get SettingsComponentNgFactory {
  return _SettingsComponentNgFactory;
}

class _ViewSettingsComponent1 extends AppView<import2.SettingsComponent> {
  static final String _message_0 = import13.Intl.message('Einstellungen', desc: 'title for settings dialog');
  static final String _message_1 = import13.Intl.message('Anzeigeeinstellungen', desc: 'label of area for display setting');
  static final String _message_2 = import13.Intl.message('Auf Kacheln Bilder statt Namen anzeigen', desc: 'label for checkbox to show images on tiles');
  static final String _message_3 = import13.Intl.message('Zusatzfunktionen', desc: 'label of area for additional functions');
  static final String _message_4 = import13.Intl.message('Letzten Messwert in der Titelzeile anzeigen', desc: 'label for checkbox to show current glucoselevel');
  static final String _message_5 = import13.Intl.message('Dieser Regler legt fest, wie gross eine Ausgabe maximal werden darf, bevor sie auf mehrere PDF-Dateien aufgeteilt wird. Wenn bei Erstellung eines PDFs ein leeres Fenster angezeigt wird, dann hilft es normalerweise, diesen Regler weiter nach links zu bewegen.', desc: 'pdfFileSize');
  static final String _message_6 = import13.Intl.message('Klein', desc: 'small');
  final import14.TextBinding _textBinding_14 = import14.TextBinding();
  import15.ViewMaterialDialogComponent0 _compView_0;
  import16.MaterialDialogComponent _MaterialDialogComponent_0_5;
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  ViewContainer _appEl_11;
  NgIf _NgIf_11_9;
  import17.ViewMaterialDropdownSelectComponent0 _compView_15;
  import18.MaterialDropdownSelectComponent _MaterialDropdownSelectComponent_15_5;
  import19.ActiveItemModel<dynamic> __ActiveItemModel_15_13;
  ViewContainer _appEl_16;
  import20.NgFor _NgFor_16_9;
  import21.ViewMaterialCheckboxComponent0 _compView_20;
  import22.MaterialCheckboxComponent _MaterialCheckboxComponent_20_5;
  import21.ViewMaterialCheckboxComponent0 _compView_25;
  import22.MaterialCheckboxComponent _MaterialCheckboxComponent_25_5;
  import23.ViewMaterialSliderComponent0 _compView_32;
  import24.MaterialSliderComponent _MaterialSliderComponent_32_5;
  ViewContainer _appEl_33;
  NgIf _NgIf_33_9;
  ViewContainer _appEl_34;
  NgIf _NgIf_34_9;
  ViewContainer _appEl_35;
  NgIf _NgIf_35_9;
  ViewContainer _appEl_38;
  NgIf _NgIf_38_9;
  ViewContainer _appEl_39;
  NgIf _NgIf_39_9;
  ViewContainer _appEl_46;
  NgIf _NgIf_46_9;
  String _expr_3;
  var _expr_8;
  bool _expr_9;
  bool _expr_10;
  num _expr_11;
  num _expr_13;
  var _expr_20;
  var _expr_21;
  var _expr_22;
  import8.FormElement _el_41;
  import8.InputElement _el_42;
  import8.InputElement _el_44;
  _ViewSettingsComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  import19.ActiveItemModel<dynamic> get _ActiveItemModel_15_13 {
    if ((__ActiveItemModel_15_13 == null)) {
      (__ActiveItemModel_15_13 = import18.fromDropdown(_MaterialDropdownSelectComponent_15_5));
    }
    return __ActiveItemModel_15_13;
  }

  @override
  ComponentRef<import2.SettingsComponent> build() {
    final _ctx = ctx;
    _compView_0 = import15.ViewMaterialDialogComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'headered-dialog');
    import11.setAttribute(_el_0, 'headered', '');
    import11.setAttribute(_el_0, 'main', '');
    addShimC(_el_0);
    _MaterialDialogComponent_0_5 = (import9.isDevMode
        ? import25.debugInjectorWrap(import16.MaterialDialogComponent, () {
            return import16.MaterialDialogComponent(_el_0, parentView.injectorGet(import26.DomService, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import27.ModalComponent, viewData.parentIndex));
          })
        : import16.MaterialDialogComponent(_el_0, parentView.injectorGet(import26.DomService, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import27.ModalComponent, viewData.parentIndex)));
    final doc = import8.document;
    final _el_1 = doc.createElement('div');
    import11.setAttribute(_el_1, 'header', '');
    addShimC(_el_1);
    final _el_2 = import11.appendDiv(doc, _el_1);
    addShimC(_el_2);
    final _el_3 = import11.appendElement(doc, _el_2, 'h1');
    addShimE(_el_3);
    final _text_4 = import11.appendText(_el_3, _message_0);
    final _el_5 = import11.appendDiv(doc, _el_2);
    addShimC(_el_5);
    final _el_6 = import11.appendElement(doc, _el_2, 'p');
    addShimE(_el_6);
    final _el_7 = import11.appendDiv(doc, _el_1);
    addShimC(_el_7);
    final _anchor_8 = import11.appendAnchor(_el_7);
    _appEl_8 = ViewContainer(8, 7, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(_appEl_8, viewFactory_SettingsComponent2);
    _NgIf_8_9 = NgIf(_appEl_8, _TemplateRef_8_8);
    final _el_9 = doc.createElement('div');
    this.updateChildClass(_el_9, 'root');
    addShimC(_el_9);
    final _anchor_10 = import11.appendAnchor(_el_9);
    _appEl_10 = ViewContainer(10, 9, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(_appEl_10, viewFactory_SettingsComponent3);
    _NgIf_10_9 = NgIf(_appEl_10, _TemplateRef_10_8);
    final _anchor_11 = import11.appendAnchor(_el_9);
    _appEl_11 = ViewContainer(11, 9, this, _anchor_11);
    TemplateRef _TemplateRef_11_8 = TemplateRef(_appEl_11, viewFactory_SettingsComponent4);
    _NgIf_11_9 = NgIf(_appEl_11, _TemplateRef_11_8);
    final _el_12 = import11.appendDiv(doc, _el_9);
    this.updateChildClass(_el_12, 'sub');
    addShimC(_el_12);
    final _el_13 = import11.appendDiv(doc, _el_12);
    addShimC(_el_13);
    _el_13.append(_textBinding_14.element);
    _compView_15 = import17.ViewMaterialDropdownSelectComponent0(this, 15);
    final _el_15 = _compView_15.rootEl;
    _el_12.append(_el_15);
    this.updateChildClassNonHtml(_el_15, 'selectButton');
    import11.setAttribute(_el_15, 'listAutoFocus', '');
    import11.setAttribute(_el_15, 'popupClass', 'selectSelect');
    import11.setAttribute(_el_15, 'raised', '');
    import11.setAttribute(_el_15, 'slide', 'y');
    addShimC(_el_15);
    _MaterialDropdownSelectComponent_15_5 = (import9.isDevMode
        ? import25.debugInjectorWrap(import18.MaterialDropdownSelectComponent, () {
            return import18.MaterialDropdownSelectComponent(parentView.injectorGetOptional(import28.IdGenerator, viewData.parentIndex), parentView.injectorGetOptional(import29.PopupSizeProvider, viewData.parentIndex), parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex), 'selectSelect', null, _compView_15, _el_15);
          })
        : import18.MaterialDropdownSelectComponent(parentView.injectorGetOptional(import28.IdGenerator, viewData.parentIndex), parentView.injectorGetOptional(import29.PopupSizeProvider, viewData.parentIndex), parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex), 'selectSelect', null, _compView_15, _el_15));
    final _anchor_16 = import11.createAnchor();
    _appEl_16 = ViewContainer(16, 15, this, _anchor_16);
    TemplateRef _TemplateRef_16_8 = TemplateRef(_appEl_16, viewFactory_SettingsComponent9);
    _NgFor_16_9 = import20.NgFor(_appEl_16, _TemplateRef_16_8);
    _compView_15.create(_MaterialDropdownSelectComponent_15_5, [
      const [],
      const [],
      const [],
      [_appEl_16],
      const [],
      const []
    ]);
    final _el_17 = import11.appendDiv(doc, _el_9);
    this.updateChildClass(_el_17, 'subtitle');
    addShimC(_el_17);
    final _text_18 = import11.appendText(_el_17, _message_1);
    final _el_19 = import11.appendDiv(doc, _el_9);
    this.updateChildClass(_el_19, 'functions');
    addShimC(_el_19);
    _compView_20 = import21.ViewMaterialCheckboxComponent0(this, 20);
    final _el_20 = _compView_20.rootEl;
    _el_19.append(_el_20);
    addShimC(_el_20);
    _MaterialCheckboxComponent_20_5 = import22.MaterialCheckboxComponent(_el_20, _compView_20, null, null, null);
    final _text_21 = import11.createText(_message_2);
    _compView_20.create(_MaterialCheckboxComponent_20_5, [
      [_text_21]
    ]);
    final _el_22 = import11.appendDiv(doc, _el_9);
    this.updateChildClass(_el_22, 'subtitle');
    addShimC(_el_22);
    final _text_23 = import11.appendText(_el_22, _message_3);
    final _el_24 = import11.appendDiv(doc, _el_9);
    this.updateChildClass(_el_24, 'functions');
    addShimC(_el_24);
    _compView_25 = import21.ViewMaterialCheckboxComponent0(this, 25);
    final _el_25 = _compView_25.rootEl;
    _el_24.append(_el_25);
    addShimC(_el_25);
    _MaterialCheckboxComponent_25_5 = import22.MaterialCheckboxComponent(_el_25, _compView_25, null, null, null);
    final _text_26 = import11.createText(_message_4);
    _compView_25.create(_MaterialCheckboxComponent_25_5, [
      [_text_26]
    ]);
    final _el_27 = import11.appendDiv(doc, _el_24);
    this.updateChildClass(_el_27, 'pdfSliderHead');
    addShimC(_el_27);
    final _text_28 = import11.appendText(_el_27, _message_5);
    final _el_29 = import11.appendDiv(doc, _el_24);
    this.updateChildClass(_el_29, 'pdfSlider');
    addShimC(_el_29);
    final _el_30 = import11.appendDiv(doc, _el_29);
    addShimC(_el_30);
    final _text_31 = import11.appendText(_el_30, _message_6);
    _compView_32 = import23.ViewMaterialSliderComponent0(this, 32);
    final _el_32 = _compView_32.rootEl;
    _el_29.append(_el_32);
    this.updateChildClassNonHtml(_el_32, 'maxsize');
    addShimC(_el_32);
    _MaterialSliderComponent_32_5 = (import9.isDevMode
        ? import25.debugInjectorWrap(import24.MaterialSliderComponent, () {
            return import24.MaterialSliderComponent(_compView_32, parentView.injectorGet(import26.DomService, viewData.parentIndex));
          })
        : import24.MaterialSliderComponent(_compView_32, parentView.injectorGet(import26.DomService, viewData.parentIndex)));
    _compView_32.create0(_MaterialSliderComponent_32_5);
    final _anchor_33 = import11.appendAnchor(_el_29);
    _appEl_33 = ViewContainer(33, 29, this, _anchor_33);
    TemplateRef _TemplateRef_33_8 = TemplateRef(_appEl_33, viewFactory_SettingsComponent10);
    _NgIf_33_9 = NgIf(_appEl_33, _TemplateRef_33_8);
    final _anchor_34 = import11.appendAnchor(_el_29);
    _appEl_34 = ViewContainer(34, 29, this, _anchor_34);
    TemplateRef _TemplateRef_34_8 = TemplateRef(_appEl_34, viewFactory_SettingsComponent11);
    _NgIf_34_9 = NgIf(_appEl_34, _TemplateRef_34_8);
    final _anchor_35 = import11.appendAnchor(_el_24);
    _appEl_35 = ViewContainer(35, 24, this, _anchor_35);
    TemplateRef _TemplateRef_35_8 = TemplateRef(_appEl_35, viewFactory_SettingsComponent12);
    _NgIf_35_9 = NgIf(_appEl_35, _TemplateRef_35_8);
    final _el_36 = doc.createElement('div');
    import11.setAttribute(_el_36, 'footer', '');
    addShimC(_el_36);
    final _el_37 = import11.appendDiv(doc, _el_36);
    addShimC(_el_37);
    final _anchor_38 = import11.appendAnchor(_el_37);
    _appEl_38 = ViewContainer(38, 37, this, _anchor_38);
    TemplateRef _TemplateRef_38_8 = TemplateRef(_appEl_38, viewFactory_SettingsComponent13);
    _NgIf_38_9 = NgIf(_appEl_38, _TemplateRef_38_8);
    final _anchor_39 = import11.appendAnchor(_el_37);
    _appEl_39 = ViewContainer(39, 37, this, _anchor_39);
    TemplateRef _TemplateRef_39_8 = TemplateRef(_appEl_39, viewFactory_SettingsComponent14);
    _NgIf_39_9 = NgIf(_appEl_39, _TemplateRef_39_8);
    final _el_40 = import11.appendElement(doc, _el_37, 'input');
    import11.setAttribute(_el_40, 'accept', 'text/json');
    import11.setAttribute(_el_40, 'id', 'importData');
    import11.setAttribute(_el_40, 'type', 'file');
    addShimC(_el_40);
    _el_41 = import11.appendElement(doc, _el_37, 'form');
    import11.setAttribute(_el_41, 'id', 'exportForm');
    import11.setAttribute(_el_41, 'method', 'post');
    import11.setAttribute(_el_41, 'target', '_blank');
    addShimC(_el_41);
    _el_42 = import11.appendElement(doc, _el_41, 'input');
    import11.setAttribute(_el_42, 'name', 'exportCfg');
    import11.setAttribute(_el_42, 'type', 'hidden');
    addShimC(_el_42);
    final _text_43 = import11.appendText(_el_41, ' ');
    _el_44 = import11.appendElement(doc, _el_41, 'input');
    import11.setAttribute(_el_44, 'name', 'data');
    import11.setAttribute(_el_44, 'type', 'hidden');
    addShimC(_el_44);
    final _el_45 = import11.appendDiv(doc, _el_36);
    addShimC(_el_45);
    final _anchor_46 = import11.appendAnchor(_el_45);
    _appEl_46 = ViewContainer(46, 45, this, _anchor_46);
    TemplateRef _TemplateRef_46_8 = TemplateRef(_appEl_46, viewFactory_SettingsComponent15);
    _NgIf_46_9 = NgIf(_appEl_46, _TemplateRef_46_8);
    _compView_0.create(_MaterialDialogComponent_0_5, [
      [_el_1],
      [_el_9],
      [_el_36]
    ]);
    final subscription_0 = _MaterialCheckboxComponent_20_5.onChecked.listen(eventHandler1(_handle_checkedChange_20_0));
    final subscription_1 = _MaterialCheckboxComponent_25_5.onChecked.listen(eventHandler1(_handle_checkedChange_25_0));
    final subscription_2 = _MaterialSliderComponent_32_5.valueChange.listen(eventHandler1(_handle_valueChange_32_0));
    _el_40.addEventListener('change', eventHandler1(_ctx.handleImport));
    init([_el_0], [subscription_0, subscription_1, subscription_2]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((15 <= nodeIndex) && (nodeIndex <= 16))) {
      if ((identical(token, import19.ActiveItemModel) && (15 == nodeIndex))) {
        return _ActiveItemModel_15_13;
      }
      if ((((((((identical(token, import18.MaterialDropdownSelectComponent) || identical(token, import31.DropdownHandle)) || identical(token, import32.ActivationHandler)) || identical(token, import33.HasDisabled)) || identical(token, import34.HasRenderer)) || identical(token, import35.DeferredContentAware)) || identical(token, import36.SelectionContainer)) || identical(token, import29.PopupSizeProvider))) {
        return _MaterialDropdownSelectComponent_15_5;
      }
    }
    if ((identical(token, import33.HasDisabled) && ((20 <= nodeIndex) && (nodeIndex <= 21)))) {
      return _MaterialCheckboxComponent_20_5;
    }
    if ((identical(token, import33.HasDisabled) && ((25 <= nodeIndex) && (nodeIndex <= 26)))) {
      return _MaterialCheckboxComponent_25_5;
    }
    if (((identical(token, import24.MaterialSliderComponent) || identical(token, import33.HasDisabled)) && (32 == nodeIndex))) {
      return _MaterialSliderComponent_32_5;
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
    _NgIf_8_9.ngIf = (_ctx.progressText == null);
    _NgIf_10_9.ngIf = (_ctx.progressText != null);
    _NgIf_11_9.ngIf = (_ctx.progressText == null);
    changed = false;
    if (firstCheck) {
      _MaterialDropdownSelectComponent_15_5.raised = true;
      changed = true;
      _MaterialDropdownSelectComponent_15_5.slide = 'y';
      changed = true;
      _MaterialDropdownSelectComponent_15_5.showButtonBorder = false;
      changed = true;
      _MaterialDropdownSelectComponent_15_5.listAutoFocus = true;
      changed = true;
    }
    final currVal_3 = _ctx.listProfileMaxCount[(_ctx.g.user.profileMaxIdx ?? 0)];
    if (import37.checkBinding(_expr_3, currVal_3)) {
      _MaterialDropdownSelectComponent_15_5.buttonText = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _MaterialDropdownSelectComponent_15_5.ngAfterChanges();
    }
    final currVal_8 = _ctx.listProfileMaxCount;
    if (import37.checkBinding(_expr_8, currVal_8)) {
      _NgFor_16_9.ngForOf = currVal_8;
      _expr_8 = currVal_8;
    }
    if ((!import37.AppViewUtils.throwOnChanges)) {
      _NgFor_16_9.ngDoCheck();
    }
    changed = false;
    final currVal_9 = _ctx.g.tileShowImage;
    if (import37.checkBinding(_expr_9, currVal_9)) {
      _MaterialCheckboxComponent_20_5.checked = currVal_9;
      changed = true;
      _expr_9 = currVal_9;
    }
    if (changed) {
      _compView_20.markAsCheckOnce();
    }
    changed = false;
    final currVal_10 = _ctx.g.showCurrentGluc;
    if (import37.checkBinding(_expr_10, currVal_10)) {
      _MaterialCheckboxComponent_25_5.checked = currVal_10;
      changed = true;
      _expr_10 = currVal_10;
    }
    if (changed) {
      _compView_25.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialSliderComponent_32_5.min = 1;
      changed = true;
      _MaterialSliderComponent_32_5.step = 1;
      changed = true;
    }
    final currVal_11 = _ctx.g.pdfControlMaxSize;
    if (import37.checkBinding(_expr_11, currVal_11)) {
      _MaterialSliderComponent_32_5.value = currVal_11;
      changed = true;
      _expr_11 = currVal_11;
    }
    final currVal_13 = _ctx.pdfSliderMax;
    if (import37.checkBinding(_expr_13, currVal_13)) {
      _MaterialSliderComponent_32_5.max = currVal_13;
      changed = true;
      _expr_13 = currVal_13;
    }
    if (changed) {
      _compView_32.markAsCheckOnce();
    }
    if (changed) {
      _MaterialSliderComponent_32_5.ngAfterChanges();
    }
    _NgIf_33_9.ngIf = (_ctx.g.pdfControlMaxSize < _ctx.pdfSliderMax);
    _NgIf_34_9.ngIf = (_ctx.g.pdfControlMaxSize >= _ctx.pdfSliderMax);
    _NgIf_35_9.ngIf = _ctx.g.isBeta;
    _NgIf_38_9.ngIf = (_ctx.progressText == null);
    _NgIf_39_9.ngIf = (_ctx.progressText == null);
    _NgIf_46_9.ngIf = (_ctx.progressText == null);
    _appEl_8.detectChangesInNestedViews();
    _appEl_10.detectChangesInNestedViews();
    _appEl_11.detectChangesInNestedViews();
    _appEl_16.detectChangesInNestedViews();
    _appEl_33.detectChangesInNestedViews();
    _appEl_34.detectChangesInNestedViews();
    _appEl_35.detectChangesInNestedViews();
    _appEl_38.detectChangesInNestedViews();
    _appEl_39.detectChangesInNestedViews();
    _appEl_46.detectChangesInNestedViews();
    if ((!import37.AppViewUtils.throwOnChanges)) {
      _MaterialDialogComponent_0_5.ngAfterContentChecked();
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_14.updateText(import38.interpolateString0(_ctx.lblProfileMax));
    _compView_20.detectHostChanges(firstCheck);
    _compView_25.detectHostChanges(firstCheck);
    _compView_32.detectHostChanges(firstCheck);
    final currVal_20 = import38.interpolateString0(_ctx.g.urlPdf);
    if (import37.checkBinding(_expr_20, currVal_20)) {
      import11.setProperty(_el_41, 'action', import37.appViewUtils.sanitizer.sanitizeUrl(currVal_20));
      _expr_20 = currVal_20;
    }
    final currVal_21 = import38.interpolateString0(_ctx.msgExport);
    if (import37.checkBinding(_expr_21, currVal_21)) {
      import11.setProperty(_el_42, 'value', currVal_21);
      _expr_21 = currVal_21;
    }
    final currVal_22 = import38.interpolateString0(_ctx.exportData);
    if (import37.checkBinding(_expr_22, currVal_22)) {
      import11.setProperty(_el_44, 'value', currVal_22);
      _expr_22 = currVal_22;
    }
    _compView_0.detectChanges();
    _compView_15.detectChanges();
    _compView_20.detectChanges();
    _compView_25.detectChanges();
    _compView_32.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_8.destroyNestedViews();
    _appEl_10.destroyNestedViews();
    _appEl_11.destroyNestedViews();
    _appEl_16.destroyNestedViews();
    _appEl_33.destroyNestedViews();
    _appEl_34.destroyNestedViews();
    _appEl_35.destroyNestedViews();
    _appEl_38.destroyNestedViews();
    _appEl_39.destroyNestedViews();
    _appEl_46.destroyNestedViews();
    _compView_0.destroyInternalState();
    _compView_15.destroyInternalState();
    _compView_20.destroyInternalState();
    _compView_25.destroyInternalState();
    _compView_32.destroyInternalState();
    _MaterialDropdownSelectComponent_15_5.ngOnDestroy();
    _MaterialCheckboxComponent_20_5.ngOnDestroy();
    _MaterialCheckboxComponent_25_5.ngOnDestroy();
    _MaterialDialogComponent_0_5.ngOnDestroy();
  }

  void _handle_checkedChange_20_0($event) {
    final _ctx = ctx;
    _ctx.g.tileShowImage = $event;
  }

  void _handle_checkedChange_25_0($event) {
    final _ctx = ctx;
    _ctx.g.showCurrentGluc = $event;
  }

  void _handle_valueChange_32_0($event) {
    final _ctx = ctx;
    _ctx.g.pdfControlMaxSize = $event;
  }
}

AppView<void> viewFactory_SettingsComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent1(parentView, parentIndex);
}

class _ViewSettingsComponent2 extends AppView<import2.SettingsComponent> {
  import39.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import40.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import41.ViewMaterialIconComponent0 _compView_1;
  import42.MaterialIconComponent _MaterialIconComponent_1_5;
  _ViewSettingsComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = import39.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    import11.setAttribute(_el_0, 'icon', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import9.isDevMode
        ? import25.debugInjectorWrap(import43.AcxDarkTheme, () {
            return import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import40.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _compView_1 = import41.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    import11.setAttribute(_el_1, 'icon', 'close');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import42.MaterialIconComponent(_el_1);
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
      if (identical(token, import43.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import40.MaterialButtonComponent) || identical(token, import44.ButtonDirective)) || identical(token, import33.HasDisabled))) {
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
    _ctx.fire('cancel');
  }
}

AppView<void> viewFactory_SettingsComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent2(parentView, parentIndex);
}

class _ViewSettingsComponent3 extends AppView<import2.SettingsComponent> {
  final import14.TextBinding _textBinding_3 = import14.TextBinding();
  import45.ViewMaterialProgressComponent0 _compView_1;
  import46.MaterialProgressComponent _MaterialProgressComponent_1_5;
  _ViewSettingsComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'root progress');
    addShimC(_el_0);
    _compView_1 = import45.ViewMaterialProgressComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _MaterialProgressComponent_1_5 = import46.MaterialProgressComponent(null, _compView_1, _el_1);
    _compView_1.create0(_MaterialProgressComponent_1_5);
    final _el_2 = import11.appendDiv(doc, _el_0);
    addShimC(_el_2);
    _el_2.append(_textBinding_3.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialProgressComponent_1_5.indeterminate = true;
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    _textBinding_3.updateText(import38.interpolateString0(_ctx.progressText));
    _compView_1.detectChanges();
    if ((!import37.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialProgressComponent_1_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_1.destroyInternalState();
    _MaterialProgressComponent_1_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_SettingsComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent3(parentView, parentIndex);
}

class _ViewSettingsComponent4 extends AppView<import2.SettingsComponent> {
  static final String _message_0 = import13.Intl.message('Benutzerdaten', desc: 'label for settings-area with user data');
  static final String _message_1 = import13.Intl.message('Geburtstag', desc: 'label of editfield for birthday');
  static final String _message_2 = import13.Intl.message('Diabetes seit', desc: 'label of editfield for diabetes since');
  final import14.TextBinding _textBinding_6 = import14.TextBinding();
  final import14.TextBinding _textBinding_8 = import14.TextBinding();
  import39.ViewMaterialButtonComponent0 _compView_4;
  dynamic _AcxDarkTheme_4_5;
  import40.MaterialButtonComponent _MaterialButtonComponent_4_6;
  import41.ViewMaterialIconComponent0 _compView_5;
  import42.MaterialIconComponent _MaterialIconComponent_5_5;
  import39.ViewMaterialButtonComponent0 _compView_9;
  dynamic _AcxDarkTheme_9_5;
  import40.MaterialButtonComponent _MaterialButtonComponent_9_6;
  import41.ViewMaterialIconComponent0 _compView_10;
  import42.MaterialIconComponent _MaterialIconComponent_10_5;
  ViewContainer _appEl_11;
  NgIf _NgIf_11_9;
  import47.ViewMaterialInputComponent0 _compView_13;
  import48.DeferredValidator _DeferredValidator_13_5;
  List<dynamic> _NgValidators_13_6;
  import49.NgModel _NgModel_13_7;
  import50.MaterialInputComponent _MaterialInputComponent_13_9;
  import51.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_13_11;
  import47.ViewMaterialInputComponent0 _compView_14;
  import48.DeferredValidator _DeferredValidator_14_5;
  List<dynamic> _NgValidators_14_6;
  import49.NgModel _NgModel_14_7;
  import50.MaterialInputComponent _MaterialInputComponent_14_9;
  import51.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_14_11;
  import47.ViewMaterialInputComponent0 _compView_15;
  import48.DeferredValidator _DeferredValidator_15_5;
  List<dynamic> _NgValidators_15_6;
  import49.NgModel _NgModel_15_7;
  import50.MaterialInputComponent _MaterialInputComponent_15_9;
  import51.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_15_11;
  import47.ViewMaterialInputComponent0 _compView_16;
  import48.DeferredValidator _DeferredValidator_16_5;
  List<dynamic> _NgValidators_16_6;
  import49.NgModel _NgModel_16_7;
  import50.MaterialInputComponent _MaterialInputComponent_16_9;
  import51.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_16_11;
  import52.ViewMaterialFabComponent0 _compView_18;
  import53.MaterialFabComponent _MaterialFabComponent_18_5;
  import41.ViewMaterialIconComponent0 _compView_19;
  import42.MaterialIconComponent _MaterialIconComponent_19_5;
  import52.ViewMaterialFabComponent0 _compView_20;
  import53.MaterialFabComponent _MaterialFabComponent_20_5;
  import41.ViewMaterialIconComponent0 _compView_21;
  import42.MaterialIconComponent _MaterialIconComponent_21_5;
  ViewContainer _appEl_22;
  import20.NgFor _NgFor_22_9;
  bool _expr_0;
  bool _expr_2;
  String _expr_6;
  String _expr_15;
  bool _expr_17;
  bool _expr_19;
  var _expr_21;
  _ViewSettingsComponent4(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final _ctx = ctx;
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    final _el_1 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'subtitle');
    addShimC(_el_1);
    final _text_2 = import11.appendText(_el_1, _message_0);
    final _el_3 = import11.appendDiv(doc, _el_1);
    this.updateChildClass(_el_3, 'navControls');
    addShimC(_el_3);
    _compView_4 = import39.ViewMaterialButtonComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_3.append(_el_4);
    import11.setAttribute(_el_4, 'icon', '');
    addShimC(_el_4);
    _AcxDarkTheme_4_5 = (import9.isDevMode
        ? import25.debugInjectorWrap(import43.AcxDarkTheme, () {
            return import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_4_6 = import40.MaterialButtonComponent(_el_4, _AcxDarkTheme_4_5, _compView_4, null);
    _compView_5 = import41.ViewMaterialIconComponent0(this, 5);
    final _el_5 = _compView_5.rootEl;
    import11.setAttribute(_el_5, 'icon', 'chevron_left');
    addShimC(_el_5);
    _MaterialIconComponent_5_5 = import42.MaterialIconComponent(_el_5);
    _compView_5.create0(_MaterialIconComponent_5_5);
    _compView_4.create(_MaterialButtonComponent_4_6, [
      [_el_5]
    ]);
    _el_3.append(_textBinding_6.element);
    final _text_7 = import11.appendText(_el_3, ' / ');
    _el_3.append(_textBinding_8.element);
    _compView_9 = import39.ViewMaterialButtonComponent0(this, 9);
    final _el_9 = _compView_9.rootEl;
    _el_3.append(_el_9);
    import11.setAttribute(_el_9, 'icon', '');
    addShimC(_el_9);
    _AcxDarkTheme_9_5 = (import9.isDevMode
        ? import25.debugInjectorWrap(import43.AcxDarkTheme, () {
            return import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_9_6 = import40.MaterialButtonComponent(_el_9, _AcxDarkTheme_9_5, _compView_9, null);
    _compView_10 = import41.ViewMaterialIconComponent0(this, 10);
    final _el_10 = _compView_10.rootEl;
    import11.setAttribute(_el_10, 'icon', 'chevron_right');
    addShimC(_el_10);
    _MaterialIconComponent_10_5 = import42.MaterialIconComponent(_el_10);
    _compView_10.create0(_MaterialIconComponent_10_5);
    _compView_9.create(_MaterialButtonComponent_9_6, [
      [_el_10]
    ]);
    final _anchor_11 = import11.appendAnchor(_el_0);
    _appEl_11 = ViewContainer(11, 0, this, _anchor_11);
    TemplateRef _TemplateRef_11_8 = TemplateRef(_appEl_11, viewFactory_SettingsComponent5);
    _NgIf_11_9 = NgIf(_appEl_11, _TemplateRef_11_8);
    final _el_12 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_12, 'userinfo');
    addShimC(_el_12);
    _compView_13 = import47.ViewMaterialInputComponent0(this, 13);
    final _el_13 = _compView_13.rootEl;
    _el_12.append(_el_13);
    import11.setAttribute(_el_13, 'floatingLabel', '');
    addShimC(_el_13);
    _DeferredValidator_13_5 = import48.DeferredValidator();
    _NgValidators_13_6 = [_DeferredValidator_13_5];
    _NgModel_13_7 = import49.NgModel(_NgValidators_13_6, null);
    _MaterialInputComponent_13_9 = import50.MaterialInputComponent(null, null, null, _NgModel_13_7, _compView_13, _DeferredValidator_13_5);
    _MaterialInputDefaultValueAccessor_13_11 = import51.MaterialInputDefaultValueAccessor(_MaterialInputComponent_13_9, _NgModel_13_7);
    _compView_13.create(_MaterialInputComponent_13_9, [const [], const []]);
    _compView_14 = import47.ViewMaterialInputComponent0(this, 14);
    final _el_14 = _compView_14.rootEl;
    _el_12.append(_el_14);
    import11.setAttribute(_el_14, 'floatingLabel', '');
    import11.setAttribute(_el_14, 'label', _message_1);
    addShimC(_el_14);
    _DeferredValidator_14_5 = import48.DeferredValidator();
    _NgValidators_14_6 = [_DeferredValidator_14_5];
    _NgModel_14_7 = import49.NgModel(_NgValidators_14_6, null);
    _MaterialInputComponent_14_9 = import50.MaterialInputComponent(null, null, null, _NgModel_14_7, _compView_14, _DeferredValidator_14_5);
    _MaterialInputDefaultValueAccessor_14_11 = import51.MaterialInputDefaultValueAccessor(_MaterialInputComponent_14_9, _NgModel_14_7);
    _compView_14.create(_MaterialInputComponent_14_9, [const [], const []]);
    _compView_15 = import47.ViewMaterialInputComponent0(this, 15);
    final _el_15 = _compView_15.rootEl;
    _el_12.append(_el_15);
    import11.setAttribute(_el_15, 'floatingLabel', '');
    import11.setAttribute(_el_15, 'label', _message_2);
    addShimC(_el_15);
    _DeferredValidator_15_5 = import48.DeferredValidator();
    _NgValidators_15_6 = [_DeferredValidator_15_5];
    _NgModel_15_7 = import49.NgModel(_NgValidators_15_6, null);
    _MaterialInputComponent_15_9 = import50.MaterialInputComponent(null, null, null, _NgModel_15_7, _compView_15, _DeferredValidator_15_5);
    _MaterialInputDefaultValueAccessor_15_11 = import51.MaterialInputDefaultValueAccessor(_MaterialInputComponent_15_9, _NgModel_15_7);
    _compView_15.create(_MaterialInputComponent_15_9, [const [], const []]);
    _compView_16 = import47.ViewMaterialInputComponent0(this, 16);
    final _el_16 = _compView_16.rootEl;
    _el_12.append(_el_16);
    import11.setAttribute(_el_16, 'floatingLabel', '');
    addShimC(_el_16);
    _DeferredValidator_16_5 = import48.DeferredValidator();
    _NgValidators_16_6 = [_DeferredValidator_16_5];
    _NgModel_16_7 = import49.NgModel(_NgValidators_16_6, null);
    _MaterialInputComponent_16_9 = import50.MaterialInputComponent(null, null, null, _NgModel_16_7, _compView_16, _DeferredValidator_16_5);
    _MaterialInputDefaultValueAccessor_16_11 = import51.MaterialInputDefaultValueAccessor(_MaterialInputComponent_16_9, _NgModel_16_7);
    _compView_16.create(_MaterialInputComponent_16_9, [const [], const []]);
    final _el_17 = import11.appendDiv(doc, _el_12);
    this.updateChildClass(_el_17, 'controls');
    addShimC(_el_17);
    _compView_18 = import52.ViewMaterialFabComponent0(this, 18);
    final _el_18 = _compView_18.rootEl;
    _el_17.append(_el_18);
    import11.setAttribute(_el_18, 'mini', '');
    addShimC(_el_18);
    _MaterialFabComponent_18_5 = import53.MaterialFabComponent(_el_18, _compView_18);
    _compView_19 = import41.ViewMaterialIconComponent0(this, 19);
    final _el_19 = _compView_19.rootEl;
    import11.setAttribute(_el_19, 'icon', 'add');
    addShimC(_el_19);
    _MaterialIconComponent_19_5 = import42.MaterialIconComponent(_el_19);
    _compView_19.create0(_MaterialIconComponent_19_5);
    _compView_18.create(_MaterialFabComponent_18_5, [
      [_el_19]
    ]);
    _compView_20 = import52.ViewMaterialFabComponent0(this, 20);
    final _el_20 = _compView_20.rootEl;
    _el_17.append(_el_20);
    import11.setAttribute(_el_20, 'mini', '');
    addShimC(_el_20);
    _MaterialFabComponent_20_5 = import53.MaterialFabComponent(_el_20, _compView_20);
    _compView_21 = import41.ViewMaterialIconComponent0(this, 21);
    final _el_21 = _compView_21.rootEl;
    import11.setAttribute(_el_21, 'icon', 'delete');
    addShimC(_el_21);
    _MaterialIconComponent_21_5 = import42.MaterialIconComponent(_el_21);
    _compView_21.create0(_MaterialIconComponent_21_5);
    _compView_20.create(_MaterialFabComponent_20_5, [
      [_el_21]
    ]);
    final _anchor_22 = import11.appendAnchor(_el_0);
    _appEl_22 = ViewContainer(22, 0, this, _anchor_22);
    TemplateRef _TemplateRef_22_8 = TemplateRef(_appEl_22, viewFactory_SettingsComponent6);
    _NgFor_22_9 = import20.NgFor(_appEl_22, _TemplateRef_22_8);
    final subscription_0 = _MaterialButtonComponent_4_6.trigger.listen(eventHandler1(_handle_trigger_4_0));
    final subscription_1 = _MaterialButtonComponent_9_6.trigger.listen(eventHandler1(_handle_trigger_9_0));
    final subscription_2 = _NgModel_13_7.update.listen(eventHandler1(_handle_ngModelChange_13_0));
    final subscription_3 = _NgModel_14_7.update.listen(eventHandler1(_handle_ngModelChange_14_0));
    final subscription_4 = _NgModel_15_7.update.listen(eventHandler1(_handle_ngModelChange_15_0));
    final subscription_5 = _NgModel_16_7.update.listen(eventHandler1(_handle_ngModelChange_16_0));
    final subscription_6 = _MaterialFabComponent_18_5.trigger.listen(eventHandler0(_ctx.addUser));
    final subscription_7 = _MaterialFabComponent_20_5.trigger.listen(eventHandler1(_handle_trigger_20_0));
    init([_el_0], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5, subscription_6, subscription_7]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((4 <= nodeIndex) && (nodeIndex <= 5))) {
      if (identical(token, import43.AcxDarkTheme)) {
        return _AcxDarkTheme_4_5;
      }
      if (((identical(token, import40.MaterialButtonComponent) || identical(token, import44.ButtonDirective)) || identical(token, import33.HasDisabled))) {
        return _MaterialButtonComponent_4_6;
      }
    }
    if (((9 <= nodeIndex) && (nodeIndex <= 10))) {
      if (identical(token, import43.AcxDarkTheme)) {
        return _AcxDarkTheme_9_5;
      }
      if (((identical(token, import40.MaterialButtonComponent) || identical(token, import44.ButtonDirective)) || identical(token, import33.HasDisabled))) {
        return _MaterialButtonComponent_9_6;
      }
    }
    if ((13 == nodeIndex)) {
      if (identical(token, import48.DeferredValidator)) {
        return _DeferredValidator_13_5;
      }
      if (identical(token, const import30.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_13_6;
      }
      if ((identical(token, import49.NgModel) || identical(token, import54.NgControl))) {
        return _NgModel_13_7;
      }
      if (((((identical(token, import50.MaterialInputComponent) || identical(token, import55.BaseMaterialInput)) || identical(token, import56.ReferenceDirective)) || identical(token, import57.Focusable)) || identical(token, import33.HasDisabled))) {
        return _MaterialInputComponent_13_9;
      }
    }
    if ((14 == nodeIndex)) {
      if (identical(token, import48.DeferredValidator)) {
        return _DeferredValidator_14_5;
      }
      if (identical(token, const import30.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_14_6;
      }
      if ((identical(token, import49.NgModel) || identical(token, import54.NgControl))) {
        return _NgModel_14_7;
      }
      if (((((identical(token, import50.MaterialInputComponent) || identical(token, import55.BaseMaterialInput)) || identical(token, import56.ReferenceDirective)) || identical(token, import57.Focusable)) || identical(token, import33.HasDisabled))) {
        return _MaterialInputComponent_14_9;
      }
    }
    if ((15 == nodeIndex)) {
      if (identical(token, import48.DeferredValidator)) {
        return _DeferredValidator_15_5;
      }
      if (identical(token, const import30.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_15_6;
      }
      if ((identical(token, import49.NgModel) || identical(token, import54.NgControl))) {
        return _NgModel_15_7;
      }
      if (((((identical(token, import50.MaterialInputComponent) || identical(token, import55.BaseMaterialInput)) || identical(token, import56.ReferenceDirective)) || identical(token, import57.Focusable)) || identical(token, import33.HasDisabled))) {
        return _MaterialInputComponent_15_9;
      }
    }
    if ((16 == nodeIndex)) {
      if (identical(token, import48.DeferredValidator)) {
        return _DeferredValidator_16_5;
      }
      if (identical(token, const import30.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_16_6;
      }
      if ((identical(token, import49.NgModel) || identical(token, import54.NgControl))) {
        return _NgModel_16_7;
      }
      if (((((identical(token, import50.MaterialInputComponent) || identical(token, import55.BaseMaterialInput)) || identical(token, import56.ReferenceDirective)) || identical(token, import57.Focusable)) || identical(token, import33.HasDisabled))) {
        return _MaterialInputComponent_16_9;
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
    final currVal_0 = (_ctx.g.userIdx == 0);
    if (import37.checkBinding(_expr_0, currVal_0)) {
      _MaterialButtonComponent_4_6.disabled = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_5_5.icon = 'chevron_left';
      changed = true;
    }
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    changed = false;
    final currVal_2 = (_ctx.g.userIdx >= ((((_ctx.g.userList == null) ? null : _ctx.g.userList.length) ?? 0) - 1));
    if (import37.checkBinding(_expr_2, currVal_2)) {
      _MaterialButtonComponent_9_6.disabled = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_10_5.icon = 'chevron_right';
      changed = true;
    }
    if (changed) {
      _compView_10.markAsCheckOnce();
    }
    _NgIf_11_9.ngIf = (_ctx.errUserInvalid != null);
    changed = false;
    _NgModel_13_7.model = _ctx.g.user.name;
    _NgModel_13_7.ngAfterChanges();
    if (((!import37.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_13_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_13_9.floatingLabel = true;
      changed = true;
    }
    final currVal_6 = _ctx.msgName;
    if (import37.checkBinding(_expr_6, currVal_6)) {
      _MaterialInputComponent_13_9.label = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    if (changed) {
      _compView_13.markAsCheckOnce();
    }
    changed = false;
    _NgModel_14_7.model = _ctx.g.user.birthDate;
    _NgModel_14_7.ngAfterChanges();
    if (((!import37.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_14_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_14_9.label = _message_1;
      changed = true;
      _MaterialInputComponent_14_9.floatingLabel = true;
      changed = true;
    }
    if (changed) {
      _compView_14.markAsCheckOnce();
    }
    changed = false;
    _NgModel_15_7.model = _ctx.g.user.diaStartDate;
    _NgModel_15_7.ngAfterChanges();
    if (((!import37.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_15_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_15_9.label = _message_2;
      changed = true;
      _MaterialInputComponent_15_9.floatingLabel = true;
      changed = true;
    }
    if (changed) {
      _compView_15.markAsCheckOnce();
    }
    changed = false;
    _NgModel_16_7.model = _ctx.g.user.insulin;
    _NgModel_16_7.ngAfterChanges();
    if (((!import37.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_16_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_16_9.floatingLabel = true;
      changed = true;
    }
    final currVal_15 = _ctx.msgInsulin;
    if (import37.checkBinding(_expr_15, currVal_15)) {
      _MaterialInputComponent_16_9.label = currVal_15;
      changed = true;
      _expr_15 = currVal_15;
    }
    if (changed) {
      _compView_16.markAsCheckOnce();
    }
    changed = false;
    final currVal_17 = (((_ctx.g.userList.last == null) ? null : _ctx.g.userList.last.apiUrl(null, '')) == null);
    if (import37.checkBinding(_expr_17, currVal_17)) {
      _MaterialFabComponent_18_5.disabled = currVal_17;
      changed = true;
      _expr_17 = currVal_17;
    }
    if (changed) {
      _compView_18.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_19_5.icon = 'add';
      changed = true;
    }
    if (changed) {
      _compView_19.markAsCheckOnce();
    }
    changed = false;
    final currVal_19 = (_ctx.g.user.apiUrl(
          null,
          '',
          noApi: true,
        ) ==
        null);
    if (import37.checkBinding(_expr_19, currVal_19)) {
      _MaterialFabComponent_20_5.disabled = currVal_19;
      changed = true;
      _expr_19 = currVal_19;
    }
    if (changed) {
      _compView_20.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_21_5.icon = 'delete';
      changed = true;
    }
    if (changed) {
      _compView_21.markAsCheckOnce();
    }
    final currVal_21 = _ctx.g.user.listApiUrl;
    if (import37.checkBinding(_expr_21, currVal_21)) {
      _NgFor_22_9.ngForOf = currVal_21;
      _expr_21 = currVal_21;
    }
    if ((!import37.AppViewUtils.throwOnChanges)) {
      _NgFor_22_9.ngDoCheck();
    }
    _appEl_11.detectChangesInNestedViews();
    _appEl_22.detectChangesInNestedViews();
    _compView_4.detectHostChanges(firstCheck);
    _textBinding_6.updateText(import38.interpolate0((_ctx.g.userIdx + 1)));
    _textBinding_8.updateText(import38.interpolate0(_ctx.g.userList.length));
    _compView_9.detectHostChanges(firstCheck);
    _compView_18.detectHostChanges(firstCheck);
    _compView_20.detectHostChanges(firstCheck);
    _compView_4.detectChanges();
    _compView_5.detectChanges();
    _compView_9.detectChanges();
    _compView_10.detectChanges();
    _compView_13.detectChanges();
    _compView_14.detectChanges();
    _compView_15.detectChanges();
    _compView_16.detectChanges();
    _compView_18.detectChanges();
    _compView_19.detectChanges();
    _compView_20.detectChanges();
    _compView_21.detectChanges();
    if ((!import37.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_13_9.ngAfterViewInit();
        _MaterialInputComponent_14_9.ngAfterViewInit();
        _MaterialInputComponent_15_9.ngAfterViewInit();
        _MaterialInputComponent_16_9.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_11.destroyNestedViews();
    _appEl_22.destroyNestedViews();
    _compView_4.destroyInternalState();
    _compView_5.destroyInternalState();
    _compView_9.destroyInternalState();
    _compView_10.destroyInternalState();
    _compView_13.destroyInternalState();
    _compView_14.destroyInternalState();
    _compView_15.destroyInternalState();
    _compView_16.destroyInternalState();
    _compView_18.destroyInternalState();
    _compView_19.destroyInternalState();
    _compView_20.destroyInternalState();
    _compView_21.destroyInternalState();
    _MaterialInputComponent_13_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_13_11.ngOnDestroy();
    _MaterialInputComponent_14_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_14_11.ngOnDestroy();
    _MaterialInputComponent_15_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_15_11.ngOnDestroy();
    _MaterialInputComponent_16_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_16_11.ngOnDestroy();
  }

  void _handle_trigger_4_0($event) {
    final _ctx = ctx;
    _ctx.g.userIdx = (_ctx.g.userIdx - 1);
  }

  void _handle_trigger_9_0($event) {
    final _ctx = ctx;
    _ctx.g.userIdx = (_ctx.g.userIdx + 1);
  }

  void _handle_ngModelChange_13_0($event) {
    final _ctx = ctx;
    _ctx.g.user.name = $event;
  }

  void _handle_ngModelChange_14_0($event) {
    final _ctx = ctx;
    _ctx.g.user.birthDate = $event;
  }

  void _handle_ngModelChange_15_0($event) {
    final _ctx = ctx;
    _ctx.g.user.diaStartDate = $event;
  }

  void _handle_ngModelChange_16_0($event) {
    final _ctx = ctx;
    _ctx.g.user.insulin = $event;
  }

  void _handle_trigger_20_0($event) {
    final _ctx = ctx;
    _ctx.confirmIdx = 1;
  }
}

AppView<void> viewFactory_SettingsComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent4(parentView, parentIndex);
}

class _ViewSettingsComponent5 extends AppView<import2.SettingsComponent> {
  var _expr_0;
  import8.DivElement _el_0;
  _ViewSettingsComponent5(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final doc = import8.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'error');
    addShimC(_el_0);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.errUserInvalid;
    if (import37.checkBinding(_expr_0, currVal_0)) {
      import11.setProperty(_el_0, 'innerHTML', import37.appViewUtils.sanitizer.sanitizeHtml(currVal_0));
      _expr_0 = currVal_0;
    }
  }
}

AppView<void> viewFactory_SettingsComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent5(parentView, parentIndex);
}

class _ViewSettingsComponent6 extends AppView<import2.SettingsComponent> {
  import47.ViewMaterialInputComponent0 _compView_1;
  import48.DeferredValidator _DeferredValidator_1_5;
  List<dynamic> _NgValidators_1_6;
  import49.NgModel _NgModel_1_7;
  import50.MaterialInputComponent _MaterialInputComponent_1_9;
  import51.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_1_11;
  import39.ViewMaterialButtonComponent0 _compView_2;
  dynamic _AcxDarkTheme_2_5;
  import40.MaterialButtonComponent _MaterialButtonComponent_2_6;
  import41.ViewMaterialIconComponent0 _compView_3;
  import42.MaterialIconComponent _MaterialIconComponent_3_5;
  import47.ViewMaterialInputComponent0 _compView_4;
  import48.DeferredValidator _DeferredValidator_4_5;
  List<dynamic> _NgValidators_4_6;
  import49.NgModel _NgModel_4_7;
  import50.MaterialInputComponent _MaterialInputComponent_4_9;
  import51.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_4_11;
  import2.MaterialInputShowPasswordDirective _MaterialInputShowPasswordDirective_4_12;
  import39.ViewMaterialButtonComponent0 _compView_5;
  dynamic _AcxDarkTheme_5_5;
  import40.MaterialButtonComponent _MaterialButtonComponent_5_6;
  import41.ViewMaterialIconComponent0 _compView_6;
  import42.MaterialIconComponent _MaterialIconComponent_6_5;
  import47.ViewMaterialInputComponent0 _compView_7;
  import48.DeferredValidator _DeferredValidator_7_5;
  List<dynamic> _NgValidators_7_6;
  import49.NgModel _NgModel_7_7;
  import50.MaterialInputComponent _MaterialInputComponent_7_9;
  import51.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_7_11;
  import39.ViewMaterialButtonComponent0 _compView_8;
  dynamic _AcxDarkTheme_8_5;
  import40.MaterialButtonComponent _MaterialButtonComponent_8_6;
  import41.ViewMaterialIconComponent0 _compView_9;
  import42.MaterialIconComponent _MaterialIconComponent_9_5;
  import47.ViewMaterialInputComponent0 _compView_10;
  import48.DeferredValidator _DeferredValidator_10_5;
  List<dynamic> _NgValidators_10_6;
  import49.NgModel _NgModel_10_7;
  import50.MaterialInputComponent _MaterialInputComponent_10_9;
  import51.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_10_11;
  ViewContainer _appEl_12;
  NgIf _NgIf_12_9;
  ViewContainer _appEl_13;
  NgIf _NgIf_13_9;
  String _expr_1;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  String _expr_7;
  bool _expr_8;
  bool _expr_9;
  var _expr_10;
  bool _expr_11;
  bool _expr_12;
  var _expr_13;
  String _expr_15;
  bool _expr_16;
  bool _expr_17;
  var _expr_18;
  String _expr_21;
  bool _expr_22;
  bool _expr_23;
  var _expr_24;
  _ViewSettingsComponent6(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'urlPanel');
    addShimC(_el_0);
    _compView_1 = import47.ViewMaterialInputComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _DeferredValidator_1_5 = import48.DeferredValidator();
    _NgValidators_1_6 = [_DeferredValidator_1_5];
    _NgModel_1_7 = import49.NgModel(_NgValidators_1_6, null);
    _MaterialInputComponent_1_9 = import50.MaterialInputComponent(null, null, null, _NgModel_1_7, _compView_1, _DeferredValidator_1_5);
    _MaterialInputDefaultValueAccessor_1_11 = import51.MaterialInputDefaultValueAccessor(_MaterialInputComponent_1_9, _NgModel_1_7);
    _compView_1.create(_MaterialInputComponent_1_9, [const [], const []]);
    _compView_2 = import39.ViewMaterialButtonComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    _el_0.append(_el_2);
    import11.setAttribute(_el_2, 'target', '_blank');
    addShimC(_el_2);
    _AcxDarkTheme_2_5 = (import9.isDevMode
        ? import25.debugInjectorWrap(import43.AcxDarkTheme, () {
            return import43.AcxDarkTheme(parentView.parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.parentView.viewData.parentIndex));
          })
        : import43.AcxDarkTheme(parentView.parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.parentView.viewData.parentIndex)));
    _MaterialButtonComponent_2_6 = import40.MaterialButtonComponent(_el_2, _AcxDarkTheme_2_5, _compView_2, null);
    _compView_3 = import41.ViewMaterialIconComponent0(this, 3);
    final _el_3 = _compView_3.rootEl;
    this.updateChildClassNonHtml(_el_3, 'urlIcon');
    import11.setAttribute(_el_3, 'icon', 'open_in_new');
    addShimC(_el_3);
    _MaterialIconComponent_3_5 = import42.MaterialIconComponent(_el_3);
    _compView_3.create0(_MaterialIconComponent_3_5);
    _compView_2.create(_MaterialButtonComponent_2_6, [
      [_el_3]
    ]);
    _compView_4 = import47.ViewMaterialInputComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_0.append(_el_4);
    addShimC(_el_4);
    _DeferredValidator_4_5 = import48.DeferredValidator();
    _NgValidators_4_6 = [_DeferredValidator_4_5];
    _NgModel_4_7 = import49.NgModel(_NgValidators_4_6, null);
    _MaterialInputComponent_4_9 = import50.MaterialInputComponent(null, null, null, _NgModel_4_7, _compView_4, _DeferredValidator_4_5);
    _MaterialInputDefaultValueAccessor_4_11 = import51.MaterialInputDefaultValueAccessor(_MaterialInputComponent_4_9, _NgModel_4_7);
    _MaterialInputShowPasswordDirective_4_12 = import2.MaterialInputShowPasswordDirective(_MaterialInputComponent_4_9);
    _compView_4.create(_MaterialInputComponent_4_9, [const [], const []]);
    _compView_5 = import39.ViewMaterialButtonComponent0(this, 5);
    final _el_5 = _compView_5.rootEl;
    _el_0.append(_el_5);
    addShimC(_el_5);
    _AcxDarkTheme_5_5 = (import9.isDevMode
        ? import25.debugInjectorWrap(import43.AcxDarkTheme, () {
            return import43.AcxDarkTheme(parentView.parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.parentView.viewData.parentIndex));
          })
        : import43.AcxDarkTheme(parentView.parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.parentView.viewData.parentIndex)));
    _MaterialButtonComponent_5_6 = import40.MaterialButtonComponent(_el_5, _AcxDarkTheme_5_5, _compView_5, null);
    _compView_6 = import41.ViewMaterialIconComponent0(this, 6);
    final _el_6 = _compView_6.rootEl;
    this.updateChildClassNonHtml(_el_6, 'urlIcon');
    addShimC(_el_6);
    _MaterialIconComponent_6_5 = import42.MaterialIconComponent(_el_6);
    _compView_6.create0(_MaterialIconComponent_6_5);
    _compView_5.create(_MaterialButtonComponent_5_6, [
      [_el_6]
    ]);
    _compView_7 = import47.ViewMaterialInputComponent0(this, 7);
    final _el_7 = _compView_7.rootEl;
    _el_0.append(_el_7);
    this.updateChildClassNonHtml(_el_7, import38.interpolateString2('', 'date', ' ', import50.MaterialInputComponent.hostClass, ''));
    addShimC(_el_7);
    _DeferredValidator_7_5 = import48.DeferredValidator();
    _NgValidators_7_6 = [_DeferredValidator_7_5];
    _NgModel_7_7 = import49.NgModel(_NgValidators_7_6, null);
    _MaterialInputComponent_7_9 = import50.MaterialInputComponent(null, null, null, _NgModel_7_7, _compView_7, _DeferredValidator_7_5);
    _MaterialInputDefaultValueAccessor_7_11 = import51.MaterialInputDefaultValueAccessor(_MaterialInputComponent_7_9, _NgModel_7_7);
    _compView_7.create(_MaterialInputComponent_7_9, [const [], const []]);
    _compView_8 = import39.ViewMaterialButtonComponent0(this, 8);
    final _el_8 = _compView_8.rootEl;
    _el_0.append(_el_8);
    addShimC(_el_8);
    _AcxDarkTheme_8_5 = (import9.isDevMode
        ? import25.debugInjectorWrap(import43.AcxDarkTheme, () {
            return import43.AcxDarkTheme(parentView.parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.parentView.viewData.parentIndex));
          })
        : import43.AcxDarkTheme(parentView.parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.parentView.viewData.parentIndex)));
    _MaterialButtonComponent_8_6 = import40.MaterialButtonComponent(_el_8, _AcxDarkTheme_8_5, _compView_8, null);
    _compView_9 = import41.ViewMaterialIconComponent0(this, 9);
    final _el_9 = _compView_9.rootEl;
    this.updateChildClassNonHtml(_el_9, 'urlIcon');
    import11.setAttribute(_el_9, 'icon', 'calculate');
    addShimC(_el_9);
    _MaterialIconComponent_9_5 = import42.MaterialIconComponent(_el_9);
    _compView_9.create0(_MaterialIconComponent_9_5);
    _compView_8.create(_MaterialButtonComponent_8_6, [
      [_el_9]
    ]);
    _compView_10 = import47.ViewMaterialInputComponent0(this, 10);
    final _el_10 = _compView_10.rootEl;
    _el_0.append(_el_10);
    this.updateChildClassNonHtml(_el_10, import38.interpolateString2('', 'date', ' ', import50.MaterialInputComponent.hostClass, ''));
    addShimC(_el_10);
    _DeferredValidator_10_5 = import48.DeferredValidator();
    _NgValidators_10_6 = [_DeferredValidator_10_5];
    _NgModel_10_7 = import49.NgModel(_NgValidators_10_6, null);
    _MaterialInputComponent_10_9 = import50.MaterialInputComponent(null, null, null, _NgModel_10_7, _compView_10, _DeferredValidator_10_5);
    _MaterialInputDefaultValueAccessor_10_11 = import51.MaterialInputDefaultValueAccessor(_MaterialInputComponent_10_9, _NgModel_10_7);
    _compView_10.create(_MaterialInputComponent_10_9, [const [], const []]);
    final _el_11 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_11, 'controls');
    addShimC(_el_11);
    final _anchor_12 = import11.appendAnchor(_el_11);
    _appEl_12 = ViewContainer(12, 11, this, _anchor_12);
    TemplateRef _TemplateRef_12_8 = TemplateRef(_appEl_12, viewFactory_SettingsComponent7);
    _NgIf_12_9 = NgIf(_appEl_12, _TemplateRef_12_8);
    final _anchor_13 = import11.appendAnchor(_el_11);
    _appEl_13 = ViewContainer(13, 11, this, _anchor_13);
    TemplateRef _TemplateRef_13_8 = TemplateRef(_appEl_13, viewFactory_SettingsComponent8);
    _NgIf_13_9 = NgIf(_appEl_13, _TemplateRef_13_8);
    final subscription_0 = _NgModel_1_7.update.listen(eventHandler1(_handle_ngModelChange_1_0));
    final subscription_1 = _MaterialButtonComponent_2_6.trigger.listen(eventHandler1(_handle_trigger_2_0));
    final subscription_2 = _NgModel_4_7.update.listen(eventHandler1(_handle_ngModelChange_4_0));
    final subscription_3 = _MaterialButtonComponent_5_6.trigger.listen(eventHandler1(_handle_trigger_5_0));
    final subscription_4 = _NgModel_7_7.update.listen(eventHandler1(_handle_ngModelChange_7_0));
    final subscription_5 = _MaterialButtonComponent_8_6.trigger.listen(eventHandler1(_handle_trigger_8_0));
    final subscription_6 = _NgModel_10_7.update.listen(eventHandler1(_handle_ngModelChange_10_0));
    init([_el_0], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5, subscription_6]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((1 == nodeIndex)) {
      if (identical(token, import48.DeferredValidator)) {
        return _DeferredValidator_1_5;
      }
      if (identical(token, const import30.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_1_6;
      }
      if ((identical(token, import49.NgModel) || identical(token, import54.NgControl))) {
        return _NgModel_1_7;
      }
      if (((((identical(token, import50.MaterialInputComponent) || identical(token, import55.BaseMaterialInput)) || identical(token, import56.ReferenceDirective)) || identical(token, import57.Focusable)) || identical(token, import33.HasDisabled))) {
        return _MaterialInputComponent_1_9;
      }
    }
    if (((2 <= nodeIndex) && (nodeIndex <= 3))) {
      if (identical(token, import43.AcxDarkTheme)) {
        return _AcxDarkTheme_2_5;
      }
      if (((identical(token, import40.MaterialButtonComponent) || identical(token, import44.ButtonDirective)) || identical(token, import33.HasDisabled))) {
        return _MaterialButtonComponent_2_6;
      }
    }
    if ((4 == nodeIndex)) {
      if (identical(token, import48.DeferredValidator)) {
        return _DeferredValidator_4_5;
      }
      if (identical(token, const import30.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_4_6;
      }
      if ((identical(token, import49.NgModel) || identical(token, import54.NgControl))) {
        return _NgModel_4_7;
      }
      if (((((identical(token, import50.MaterialInputComponent) || identical(token, import55.BaseMaterialInput)) || identical(token, import56.ReferenceDirective)) || identical(token, import57.Focusable)) || identical(token, import33.HasDisabled))) {
        return _MaterialInputComponent_4_9;
      }
    }
    if (((5 <= nodeIndex) && (nodeIndex <= 6))) {
      if (identical(token, import43.AcxDarkTheme)) {
        return _AcxDarkTheme_5_5;
      }
      if (((identical(token, import40.MaterialButtonComponent) || identical(token, import44.ButtonDirective)) || identical(token, import33.HasDisabled))) {
        return _MaterialButtonComponent_5_6;
      }
    }
    if ((7 == nodeIndex)) {
      if (identical(token, import48.DeferredValidator)) {
        return _DeferredValidator_7_5;
      }
      if (identical(token, const import30.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_7_6;
      }
      if ((identical(token, import49.NgModel) || identical(token, import54.NgControl))) {
        return _NgModel_7_7;
      }
      if (((((identical(token, import50.MaterialInputComponent) || identical(token, import55.BaseMaterialInput)) || identical(token, import56.ReferenceDirective)) || identical(token, import57.Focusable)) || identical(token, import33.HasDisabled))) {
        return _MaterialInputComponent_7_9;
      }
    }
    if (((8 <= nodeIndex) && (nodeIndex <= 9))) {
      if (identical(token, import43.AcxDarkTheme)) {
        return _AcxDarkTheme_8_5;
      }
      if (((identical(token, import40.MaterialButtonComponent) || identical(token, import44.ButtonDirective)) || identical(token, import33.HasDisabled))) {
        return _MaterialButtonComponent_8_6;
      }
    }
    if ((10 == nodeIndex)) {
      if (identical(token, import48.DeferredValidator)) {
        return _DeferredValidator_10_5;
      }
      if (identical(token, const import30.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_10_6;
      }
      if ((identical(token, import49.NgModel) || identical(token, import54.NgControl))) {
        return _NgModel_10_7;
      }
      if (((((identical(token, import50.MaterialInputComponent) || identical(token, import55.BaseMaterialInput)) || identical(token, import56.ReferenceDirective)) || identical(token, import57.Focusable)) || identical(token, import33.HasDisabled))) {
        return _MaterialInputComponent_10_9;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_item = import9.unsafeCast<import58.UrlData>(locals['\$implicit']);
    final local_idx = import9.unsafeCast<int>(locals['index']);
    changed = false;
    _NgModel_1_7.model = local_item.url;
    _NgModel_1_7.ngAfterChanges();
    if (((!import37.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_1_7.ngOnInit();
    }
    changed = false;
    final currVal_1 = _ctx.msgUrlNightscout;
    if (import37.checkBinding(_expr_1, currVal_1)) {
      _MaterialInputComponent_1_9.label = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = (local_idx == (_ctx.g.user.listApiUrl.length - 1));
    if (import37.checkBinding(_expr_2, currVal_2)) {
      _MaterialInputComponent_1_9.displayBottomPanel = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = (local_idx == 0);
    if (import37.checkBinding(_expr_3, currVal_3)) {
      _MaterialInputComponent_1_9.floatingLabel = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    changed = false;
    final currVal_4 = ((local_item.url == null) || local_item.url.isEmpty);
    if (import37.checkBinding(_expr_4, currVal_4)) {
      _MaterialButtonComponent_2_6.disabled = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_3_5.icon = 'open_in_new';
      changed = true;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    changed = false;
    _NgModel_4_7.model = local_item.token;
    _NgModel_4_7.ngAfterChanges();
    if (((!import37.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_4_7.ngOnInit();
    }
    changed = false;
    final currVal_7 = _ctx.msgAccessToken;
    if (import37.checkBinding(_expr_7, currVal_7)) {
      _MaterialInputComponent_4_9.label = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    final currVal_8 = (local_idx == (_ctx.g.user.listApiUrl.length - 1));
    if (import37.checkBinding(_expr_8, currVal_8)) {
      _MaterialInputComponent_4_9.displayBottomPanel = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    final currVal_9 = (local_idx == 0);
    if (import37.checkBinding(_expr_9, currVal_9)) {
      _MaterialInputComponent_4_9.floatingLabel = currVal_9;
      changed = true;
      _expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.msgAccessTokenHint((local_idx == (_ctx.g.user.listApiUrl.length - 1)));
    if (import37.checkBinding(_expr_10, currVal_10)) {
      _MaterialInputComponent_4_9.hintText = currVal_10;
      changed = true;
      _expr_10 = currVal_10;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    final currVal_11 = (_ctx.showPwd == local_idx);
    if (import37.checkBinding(_expr_11, currVal_11)) {
      _MaterialInputShowPasswordDirective_4_12.showPassword = currVal_11;
      _expr_11 = currVal_11;
    }
    changed = false;
    final currVal_12 = ((local_item.token == null) || local_item.token.isEmpty);
    if (import37.checkBinding(_expr_12, currVal_12)) {
      _MaterialButtonComponent_5_6.disabled = currVal_12;
      changed = true;
      _expr_12 = currVal_12;
    }
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    changed = false;
    final currVal_13 = ((_ctx.showPwd == local_idx) ? 'visibility_off' : 'visibility');
    if (import37.checkBinding(_expr_13, currVal_13)) {
      _MaterialIconComponent_6_5.icon = currVal_13;
      changed = true;
      _expr_13 = currVal_13;
    }
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    changed = false;
    _NgModel_7_7.model = local_item.startDateEdit;
    _NgModel_7_7.ngAfterChanges();
    if (((!import37.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_7_7.ngOnInit();
    }
    changed = false;
    final currVal_15 = _ctx.msgStartDate;
    if (import37.checkBinding(_expr_15, currVal_15)) {
      _MaterialInputComponent_7_9.label = currVal_15;
      changed = true;
      _expr_15 = currVal_15;
    }
    final currVal_16 = (local_idx == (_ctx.g.user.listApiUrl.length - 1));
    if (import37.checkBinding(_expr_16, currVal_16)) {
      _MaterialInputComponent_7_9.displayBottomPanel = currVal_16;
      changed = true;
      _expr_16 = currVal_16;
    }
    final currVal_17 = (local_idx == 0);
    if (import37.checkBinding(_expr_17, currVal_17)) {
      _MaterialInputComponent_7_9.floatingLabel = currVal_17;
      changed = true;
      _expr_17 = currVal_17;
    }
    final currVal_18 = _ctx.msgStartDateHint((local_idx == (_ctx.g.user.listApiUrl.length - 1)));
    if (import37.checkBinding(_expr_18, currVal_18)) {
      _MaterialInputComponent_7_9.hintText = currVal_18;
      changed = true;
      _expr_18 = currVal_18;
    }
    if (changed) {
      _compView_7.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_8.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_9_5.icon = 'calculate';
      changed = true;
    }
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    changed = false;
    _NgModel_10_7.model = local_item.endDateEdit;
    _NgModel_10_7.ngAfterChanges();
    if (((!import37.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_10_7.ngOnInit();
    }
    changed = false;
    final currVal_21 = _ctx.msgEndDate;
    if (import37.checkBinding(_expr_21, currVal_21)) {
      _MaterialInputComponent_10_9.label = currVal_21;
      changed = true;
      _expr_21 = currVal_21;
    }
    final currVal_22 = (local_idx == (_ctx.g.user.listApiUrl.length - 1));
    if (import37.checkBinding(_expr_22, currVal_22)) {
      _MaterialInputComponent_10_9.displayBottomPanel = currVal_22;
      changed = true;
      _expr_22 = currVal_22;
    }
    final currVal_23 = (local_idx == 0);
    if (import37.checkBinding(_expr_23, currVal_23)) {
      _MaterialInputComponent_10_9.floatingLabel = currVal_23;
      changed = true;
      _expr_23 = currVal_23;
    }
    final currVal_24 = _ctx.msgEndDateHint((local_idx == (_ctx.g.user.listApiUrl.length - 1)));
    if (import37.checkBinding(_expr_24, currVal_24)) {
      _MaterialInputComponent_10_9.hintText = currVal_24;
      changed = true;
      _expr_24 = currVal_24;
    }
    if (changed) {
      _compView_10.markAsCheckOnce();
    }
    _NgIf_12_9.ngIf = (local_idx == (_ctx.g.user.listApiUrl.length - 1));
    _NgIf_13_9.ngIf = (local_idx > 0);
    _appEl_12.detectChangesInNestedViews();
    _appEl_13.detectChangesInNestedViews();
    _compView_2.detectHostChanges(firstCheck);
    _compView_5.detectHostChanges(firstCheck);
    _compView_8.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    _compView_2.detectChanges();
    _compView_3.detectChanges();
    _compView_4.detectChanges();
    _compView_5.detectChanges();
    _compView_6.detectChanges();
    _compView_7.detectChanges();
    _compView_8.detectChanges();
    _compView_9.detectChanges();
    _compView_10.detectChanges();
    if ((!import37.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_1_9.ngAfterViewInit();
        _MaterialInputComponent_4_9.ngAfterViewInit();
        _MaterialInputComponent_7_9.ngAfterViewInit();
        _MaterialInputComponent_10_9.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_12.destroyNestedViews();
    _appEl_13.destroyNestedViews();
    _compView_1.destroyInternalState();
    _compView_2.destroyInternalState();
    _compView_3.destroyInternalState();
    _compView_4.destroyInternalState();
    _compView_5.destroyInternalState();
    _compView_6.destroyInternalState();
    _compView_7.destroyInternalState();
    _compView_8.destroyInternalState();
    _compView_9.destroyInternalState();
    _compView_10.destroyInternalState();
    _MaterialInputComponent_1_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_1_11.ngOnDestroy();
    _MaterialInputComponent_4_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_4_11.ngOnDestroy();
    _MaterialInputComponent_7_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_7_11.ngOnDestroy();
    _MaterialInputComponent_10_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_10_11.ngOnDestroy();
  }

  void _handle_ngModelChange_1_0($event) {
    final local_item = import9.unsafeCast<import58.UrlData>(locals['\$implicit']);
    local_item.url = $event;
  }

  void _handle_trigger_2_0($event) {
    final local_item = import9.unsafeCast<import58.UrlData>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.navigate(local_item.fullUrl(
      '',
      noApi: true,
    ));
  }

  void _handle_ngModelChange_4_0($event) {
    final local_item = import9.unsafeCast<import58.UrlData>(locals['\$implicit']);
    local_item.token = $event;
  }

  void _handle_trigger_5_0($event) {
    final local_idx = import9.unsafeCast<int>(locals['index']);
    final _ctx = ctx;
    _ctx.showPwd = ((_ctx.showPwd == local_idx) ? (0 - 1) : local_idx);
  }

  void _handle_ngModelChange_7_0($event) {
    final local_item = import9.unsafeCast<import58.UrlData>(locals['\$implicit']);
    local_item.startDateEdit = $event;
  }

  void _handle_trigger_8_0($event) {
    final local_item = import9.unsafeCast<import58.UrlData>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.calculateFirstDay(local_item);
  }

  void _handle_ngModelChange_10_0($event) {
    final local_item = import9.unsafeCast<import58.UrlData>(locals['\$implicit']);
    local_item.endDateEdit = $event;
  }
}

AppView<void> viewFactory_SettingsComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent6(parentView, parentIndex);
}

class _ViewSettingsComponent7 extends AppView<import2.SettingsComponent> {
  import52.ViewMaterialFabComponent0 _compView_0;
  import53.MaterialFabComponent _MaterialFabComponent_0_5;
  import41.ViewMaterialIconComponent0 _compView_1;
  import42.MaterialIconComponent _MaterialIconComponent_1_5;
  _ViewSettingsComponent7(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final _ctx = ctx;
    _compView_0 = import52.ViewMaterialFabComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, '');
    import11.setAttribute(_el_0, 'mini', '');
    addShimC(_el_0);
    _MaterialFabComponent_0_5 = import53.MaterialFabComponent(_el_0, _compView_0);
    _compView_1 = import41.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    import11.setAttribute(_el_1, 'icon', 'add');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import42.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    _compView_0.create(_MaterialFabComponent_0_5, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialFabComponent_0_5.trigger.listen(eventHandler0(_ctx.addUrl));
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
      _MaterialIconComponent_1_5.icon = 'add';
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

AppView<void> viewFactory_SettingsComponent7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent7(parentView, parentIndex);
}

class _ViewSettingsComponent8 extends AppView<import2.SettingsComponent> {
  import52.ViewMaterialFabComponent0 _compView_0;
  import53.MaterialFabComponent _MaterialFabComponent_0_5;
  import41.ViewMaterialIconComponent0 _compView_1;
  import42.MaterialIconComponent _MaterialIconComponent_1_5;
  _ViewSettingsComponent8(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = import52.ViewMaterialFabComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, '');
    import11.setAttribute(_el_0, 'mini', '');
    addShimC(_el_0);
    _MaterialFabComponent_0_5 = import53.MaterialFabComponent(_el_0, _compView_0);
    _compView_1 = import41.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    import11.setAttribute(_el_1, 'icon', 'delete');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import42.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    _compView_0.create(_MaterialFabComponent_0_5, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialFabComponent_0_5.trigger.listen(eventHandler1(_handle_trigger_0_0));
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
      _MaterialIconComponent_1_5.icon = 'delete';
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
    final local_idx = import9.unsafeCast<int>(parentView.locals['index']);
    final _ctx = ctx;
    _ctx.clickDelete(local_idx);
  }
}

AppView<void> viewFactory_SettingsComponent8(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent8(parentView, parentIndex);
}

class _ViewSettingsComponent9 extends AppView<import2.SettingsComponent> {
  final import14.TextBinding _textBinding_2 = import14.TextBinding();
  import60.ViewMaterialSelectItemComponent0 _compView_0;
  import61.MaterialSelectItemComponent _MaterialSelectItemComponent_0_5;
  var _expr_0;
  _ViewSettingsComponent9(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = import60.ViewMaterialSelectItemComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, import38.interpolateString2('', 'selectItem', ' ', import61.MaterialSelectItemComponent.hostClass, ''));
    addShimC(_el_0);
    _MaterialSelectItemComponent_0_5 = import61.MaterialSelectItemComponent(_el_0, import9.unsafeCast<_ViewSettingsComponent1>(parentView)._MaterialDropdownSelectComponent_15_5, import9.unsafeCast<_ViewSettingsComponent1>(parentView)._MaterialDropdownSelectComponent_15_5, _compView_0, null);
    final doc = import8.document;
    final _el_1 = doc.createElement('div');
    this.updateChildClass(_el_1, 'itemTitle');
    addShimC(_el_1);
    _el_1.append(_textBinding_2.element);
    _compView_0.create(_MaterialSelectItemComponent_0_5, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialSelectItemComponent_0_5.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import36.SelectionItem) || identical(token, import33.HasDisabled)) || identical(token, import34.HasRenderer)) && (nodeIndex <= 2))) {
      return _MaterialSelectItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_idx = import9.unsafeCast<int>(locals['index']);
    final local_item = import9.unsafeCast<String>(locals['\$implicit']);
    final currVal_0 = (local_idx == _ctx.g.user.profileMaxIdx);
    if (import37.checkBinding(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_0_5.selected = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_2.updateText(import38.interpolateString0(local_item));
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialSelectItemComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_0_0($event) {
    final local_idx = import9.unsafeCast<int>(locals['index']);
    final _ctx = ctx;
    _ctx.g.user.profileMaxIdx = local_idx;
  }
}

AppView<void> viewFactory_SettingsComponent9(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent9(parentView, parentIndex);
}

class _ViewSettingsComponent10 extends AppView<import2.SettingsComponent> {
  static final String _message_0 = import13.Intl.message('Gross', desc: 'big');
  _ViewSettingsComponent10(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    final _text_1 = import11.appendText(_el_0, _message_0);
    init1(_el_0);
  }
}

AppView<void> viewFactory_SettingsComponent10(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent10(parentView, parentIndex);
}

class _ViewSettingsComponent11 extends AppView<import2.SettingsComponent> {
  final import14.TextBinding _textBinding_1 = import14.TextBinding();
  _ViewSettingsComponent11(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import38.interpolateString0(_ctx.g.msgUnlimited));
  }
}

AppView<void> viewFactory_SettingsComponent11(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent11(parentView, parentIndex);
}

class _ViewSettingsComponent12 extends AppView<import2.SettingsComponent> {
  static final String _message_0 = import13.Intl.message('Einstellungen von Release-Version übernehmen', desc: 'buttonlabel for copy of settings to beta version');
  import39.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import40.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import41.ViewMaterialIconComponent0 _compView_1;
  import42.MaterialIconComponent _MaterialIconComponent_1_5;
  _ViewSettingsComponent12(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = import39.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'iconButton');
    import11.setAttribute(_el_0, 'raised', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import9.isDevMode
        ? import25.debugInjectorWrap(import43.AcxDarkTheme, () {
            return import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import40.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _compView_1 = import41.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    import11.setAttribute(_el_1, 'icon', 'file_copy');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import42.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    final _text_2 = import11.createText(_message_0);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1, _text_2]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 2)) {
      if (identical(token, import43.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import40.MaterialButtonComponent) || identical(token, import44.ButtonDirective)) || identical(token, import33.HasDisabled))) {
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
    if (firstCheck) {
      _MaterialButtonComponent_0_6.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_1_5.icon = 'file_copy';
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
    _ctx.g.copyFromOtherStorage();
  }
}

AppView<void> viewFactory_SettingsComponent12(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent12(parentView, parentIndex);
}

class _ViewSettingsComponent13 extends AppView<import2.SettingsComponent> {
  static final String _message_0 = import13.Intl.message('Exportieren', desc: 'buttonlabel for exporting data');
  import39.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import40.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import41.ViewMaterialIconComponent0 _compView_1;
  import42.MaterialIconComponent _MaterialIconComponent_1_5;
  _ViewSettingsComponent13(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final _ctx = ctx;
    _compView_0 = import39.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'iconButton');
    import11.setAttribute(_el_0, 'clear-size', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import9.isDevMode
        ? import25.debugInjectorWrap(import43.AcxDarkTheme, () {
            return import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import40.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _compView_1 = import41.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    import11.setAttribute(_el_1, 'icon', 'cloud_download');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import42.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    final _text_2 = import11.createText(_message_0);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1, _text_2]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler0(_ctx.export));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 2)) {
      if (identical(token, import43.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import40.MaterialButtonComponent) || identical(token, import44.ButtonDirective)) || identical(token, import33.HasDisabled))) {
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
      _MaterialIconComponent_1_5.icon = 'cloud_download';
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

AppView<void> viewFactory_SettingsComponent13(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent13(parentView, parentIndex);
}

class _ViewSettingsComponent14 extends AppView<import2.SettingsComponent> {
  static final String _message_0 = import13.Intl.message('Importieren', desc: 'buttonlabel for importing data');
  import39.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import40.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import41.ViewMaterialIconComponent0 _compView_1;
  import42.MaterialIconComponent _MaterialIconComponent_1_5;
  _ViewSettingsComponent14(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final _ctx = ctx;
    _compView_0 = import39.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'iconButton');
    import11.setAttribute(_el_0, 'clear-size', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import9.isDevMode
        ? import25.debugInjectorWrap(import43.AcxDarkTheme, () {
            return import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import40.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _compView_1 = import41.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    import11.setAttribute(_el_1, 'icon', 'cloud_upload');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import42.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    final _text_2 = import11.createText(_message_0);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1, _text_2]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler0(_ctx.importCLicked));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 2)) {
      if (identical(token, import43.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import40.MaterialButtonComponent) || identical(token, import44.ButtonDirective)) || identical(token, import33.HasDisabled))) {
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
      _MaterialIconComponent_1_5.icon = 'cloud_upload';
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

AppView<void> viewFactory_SettingsComponent14(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent14(parentView, parentIndex);
}

class _ViewSettingsComponent15 extends AppView<import2.SettingsComponent> {
  static final String _message_0 = import13.Intl.message('Speichern', desc: 'buttonlabel for saving data');
  import39.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import40.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import41.ViewMaterialIconComponent0 _compView_1;
  import42.MaterialIconComponent _MaterialIconComponent_1_5;
  _ViewSettingsComponent15(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = import39.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'iconButton');
    import11.setAttribute(_el_0, 'clear-size', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import9.isDevMode
        ? import25.debugInjectorWrap(import43.AcxDarkTheme, () {
            return import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import40.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _compView_1 = import41.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    import11.setAttribute(_el_1, 'icon', 'save');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import42.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    final _text_2 = import11.createText(_message_0);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1, _text_2]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 2)) {
      if (identical(token, import43.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import40.MaterialButtonComponent) || identical(token, import44.ButtonDirective)) || identical(token, import33.HasDisabled))) {
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
      _MaterialIconComponent_1_5.icon = 'save';
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
    _ctx.fire('check');
  }
}

AppView<void> viewFactory_SettingsComponent15(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent15(parentView, parentIndex);
}

class _ViewSettingsComponent16 extends AppView<import2.SettingsComponent> {
  import15.ViewMaterialDialogComponent0 _compView_0;
  import16.MaterialDialogComponent _MaterialDialogComponent_0_5;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  _ViewSettingsComponent16(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = import15.ViewMaterialDialogComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'headered-dialog');
    import11.setAttribute(_el_0, 'confirm', '');
    import11.setAttribute(_el_0, 'headered', '');
    addShimC(_el_0);
    _MaterialDialogComponent_0_5 = (import9.isDevMode
        ? import25.debugInjectorWrap(import16.MaterialDialogComponent, () {
            return import16.MaterialDialogComponent(_el_0, parentView.injectorGet(import26.DomService, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import27.ModalComponent, viewData.parentIndex));
          })
        : import16.MaterialDialogComponent(_el_0, parentView.injectorGet(import26.DomService, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import27.ModalComponent, viewData.parentIndex)));
    final _anchor_1 = import11.createAnchor();
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_SettingsComponent17);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import11.createAnchor();
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_SettingsComponent18);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _anchor_3 = import11.createAnchor();
    _appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_SettingsComponent19);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    final _anchor_4 = import11.createAnchor();
    _appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_SettingsComponent20);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    final _anchor_5 = import11.createAnchor();
    _appEl_5 = ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_SettingsComponent21);
    _NgIf_5_9 = NgIf(_appEl_5, _TemplateRef_5_8);
    final _anchor_6 = import11.createAnchor();
    _appEl_6 = ViewContainer(6, 0, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_SettingsComponent22);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    final _anchor_7 = import11.createAnchor();
    _appEl_7 = ViewContainer(7, 0, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, viewFactory_SettingsComponent23);
    _NgIf_7_9 = NgIf(_appEl_7, _TemplateRef_7_8);
    _compView_0.create(_MaterialDialogComponent_0_5, [
      [_appEl_1, _appEl_2],
      [_appEl_3, _appEl_4, _appEl_5],
      [_appEl_6, _appEl_7]
    ]);
    init1(_el_0);
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
    _NgIf_1_9.ngIf = (_ctx.confirmIdx != 3);
    _NgIf_2_9.ngIf = (_ctx.confirmIdx == 3);
    _NgIf_3_9.ngIf = (_ctx.confirmIdx == 1);
    _NgIf_4_9.ngIf = (_ctx.confirmIdx == 2);
    _NgIf_5_9.ngIf = (_ctx.confirmIdx == 3);
    _NgIf_6_9.ngIf = (_ctx.confirmIdx < 3);
    _NgIf_7_9.ngIf = (_ctx.confirmIdx == 3);
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    if ((!import37.AppViewUtils.throwOnChanges)) {
      _MaterialDialogComponent_0_5.ngAfterContentChecked();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _appEl_3.destroyNestedViews();
    _appEl_4.destroyNestedViews();
    _appEl_5.destroyNestedViews();
    _appEl_6.destroyNestedViews();
    _appEl_7.destroyNestedViews();
    _compView_0.destroyInternalState();
    _MaterialDialogComponent_0_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_SettingsComponent16(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent16(parentView, parentIndex);
}

class _ViewSettingsComponent17 extends AppView<import2.SettingsComponent> {
  static final String _message_0 = import13.Intl.message('Bestätigung', desc: 'title of confirmation dialog');
  _ViewSettingsComponent17(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    import11.setAttribute(_el_0, 'header', '');
    addShimC(_el_0);
    final _text_1 = import11.appendText(_el_0, _message_0);
    init1(_el_0);
  }
}

AppView<void> viewFactory_SettingsComponent17(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent17(parentView, parentIndex);
}

class _ViewSettingsComponent18 extends AppView<import2.SettingsComponent> {
  final import14.TextBinding _textBinding_1 = import14.TextBinding();
  _ViewSettingsComponent18(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    import11.setAttribute(_el_0, 'header', '');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import38.interpolateString0(_ctx.msgCalcDayTitle));
  }
}

AppView<void> viewFactory_SettingsComponent18(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent18(parentView, parentIndex);
}

class _ViewSettingsComponent19 extends AppView<import2.SettingsComponent> {
  static final String _message_0 = import13.Intl.message('Soll der Benutzer mit der URL', desc: 'should the user with url');
  static final String _message_1 = import13.Intl.message('wirklich gelöscht werden?', desc: 'really be deleted');
  final import14.TextBinding _textBinding_3 = import14.TextBinding();
  _ViewSettingsComponent19(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'content');
    addShimC(_el_0);
    final _text_1 = import11.appendText(_el_0, _message_0);
    final _el_2 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_2, 'marked');
    addShimC(_el_2);
    _el_2.append(_textBinding_3.element);
    final _text_4 = import11.appendText(_el_0, _message_1);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_3.updateText(import38.interpolateString0(_ctx.g.user.apiUrl(
      null,
      '',
      noApi: true,
    )));
  }
}

AppView<void> viewFactory_SettingsComponent19(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent19(parentView, parentIndex);
}

class _ViewSettingsComponent20 extends AppView<import2.SettingsComponent> {
  static final String _message_0 = import13.Intl.message('Soll die URL', desc: 'should the url of the user');
  static final String _message_1 = import13.Intl.message('vom Benutzer wirklich gelöscht werden?', desc: 'of the user really be deleted');
  final import14.TextBinding _textBinding_3 = import14.TextBinding();
  _ViewSettingsComponent20(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'content');
    addShimC(_el_0);
    final _text_1 = import11.appendText(_el_0, _message_0);
    final _el_2 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_2, 'marked');
    addShimC(_el_2);
    _el_2.append(_textBinding_3.element);
    final _text_4 = import11.appendText(_el_0, _message_1);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_3.updateText(import38.interpolate0(_ctx.g.user.listApiUrl[_ctx.currApiUrlIdx].url));
  }
}

AppView<void> viewFactory_SettingsComponent20(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent20(parentView, parentIndex);
}

class _ViewSettingsComponent21 extends AppView<import2.SettingsComponent> {
  final import14.TextBinding _textBinding_1 = import14.TextBinding();
  _ViewSettingsComponent21(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'content');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import38.interpolateString0(_ctx.msgCalculatingDay(_ctx.calcDate.format(_ctx.g.fmtDateForDisplay))));
  }
}

AppView<void> viewFactory_SettingsComponent21(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent21(parentView, parentIndex);
}

class _ViewSettingsComponent22 extends AppView<import2.SettingsComponent> {
  static final String _message_0 = import13.Intl.message('Ja', desc: 'buttonlabel for confirmation yes');
  static final String _message_1 = import13.Intl.message('Nein', desc: 'buttonlabel for confirmation no');
  import39.ViewMaterialButtonComponent0 _compView_1;
  dynamic _AcxDarkTheme_1_5;
  import40.MaterialButtonComponent _MaterialButtonComponent_1_6;
  import41.ViewMaterialIconComponent0 _compView_2;
  import42.MaterialIconComponent _MaterialIconComponent_2_5;
  import39.ViewMaterialButtonComponent0 _compView_4;
  dynamic _AcxDarkTheme_4_5;
  import40.MaterialButtonComponent _MaterialButtonComponent_4_6;
  import41.ViewMaterialIconComponent0 _compView_5;
  import42.MaterialIconComponent _MaterialIconComponent_5_5;
  _ViewSettingsComponent22(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final _ctx = ctx;
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    import11.setAttribute(_el_0, 'footer', '');
    addShimC(_el_0);
    _compView_1 = import39.ViewMaterialButtonComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    this.updateChildClassNonHtml(_el_1, 'iconButton');
    addShimC(_el_1);
    _AcxDarkTheme_1_5 = (import9.isDevMode
        ? import25.debugInjectorWrap(import43.AcxDarkTheme, () {
            return import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_1_6 = import40.MaterialButtonComponent(_el_1, _AcxDarkTheme_1_5, _compView_1, null);
    _compView_2 = import41.ViewMaterialIconComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    import11.setAttribute(_el_2, 'icon', 'done');
    addShimC(_el_2);
    _MaterialIconComponent_2_5 = import42.MaterialIconComponent(_el_2);
    _compView_2.create0(_MaterialIconComponent_2_5);
    final _text_3 = import11.createText(_message_0);
    _compView_1.create(_MaterialButtonComponent_1_6, [
      [_el_2, _text_3]
    ]);
    _compView_4 = import39.ViewMaterialButtonComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_0.append(_el_4);
    this.updateChildClassNonHtml(_el_4, 'iconButton');
    addShimC(_el_4);
    _AcxDarkTheme_4_5 = (import9.isDevMode
        ? import25.debugInjectorWrap(import43.AcxDarkTheme, () {
            return import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_4_6 = import40.MaterialButtonComponent(_el_4, _AcxDarkTheme_4_5, _compView_4, null);
    _compView_5 = import41.ViewMaterialIconComponent0(this, 5);
    final _el_5 = _compView_5.rootEl;
    import11.setAttribute(_el_5, 'icon', 'cancel');
    addShimC(_el_5);
    _MaterialIconComponent_5_5 = import42.MaterialIconComponent(_el_5);
    _compView_5.create0(_MaterialIconComponent_5_5);
    final _text_6 = import11.createText(_message_1);
    _compView_4.create(_MaterialButtonComponent_4_6, [
      [_el_5, _text_6]
    ]);
    final subscription_0 = _MaterialButtonComponent_1_6.trigger.listen(eventHandler0(_ctx.confirmOk));
    final subscription_1 = _MaterialButtonComponent_4_6.trigger.listen(eventHandler1(_handle_trigger_4_0));
    init([_el_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((1 <= nodeIndex) && (nodeIndex <= 3))) {
      if (identical(token, import43.AcxDarkTheme)) {
        return _AcxDarkTheme_1_5;
      }
      if (((identical(token, import40.MaterialButtonComponent) || identical(token, import44.ButtonDirective)) || identical(token, import33.HasDisabled))) {
        return _MaterialButtonComponent_1_6;
      }
    }
    if (((4 <= nodeIndex) && (nodeIndex <= 6))) {
      if (identical(token, import43.AcxDarkTheme)) {
        return _AcxDarkTheme_4_5;
      }
      if (((identical(token, import40.MaterialButtonComponent) || identical(token, import44.ButtonDirective)) || identical(token, import33.HasDisabled))) {
        return _MaterialButtonComponent_4_6;
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
      _compView_1.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_2_5.icon = 'done';
      changed = true;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_5_5.icon = 'cancel';
      changed = true;
    }
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    _compView_1.detectHostChanges(firstCheck);
    _compView_4.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    _compView_2.detectChanges();
    _compView_4.detectChanges();
    _compView_5.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroyInternalState();
    _compView_2.destroyInternalState();
    _compView_4.destroyInternalState();
    _compView_5.destroyInternalState();
  }

  void _handle_trigger_4_0($event) {
    final _ctx = ctx;
    _ctx.confirmIdx = 0;
  }
}

AppView<void> viewFactory_SettingsComponent22(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent22(parentView, parentIndex);
}

class _ViewSettingsComponent23 extends AppView<import2.SettingsComponent> {
  static final String _message_0 = import13.Intl.message('Abbruch', desc: 'buttonlabel for cancel');
  import39.ViewMaterialButtonComponent0 _compView_1;
  dynamic _AcxDarkTheme_1_5;
  import40.MaterialButtonComponent _MaterialButtonComponent_1_6;
  import41.ViewMaterialIconComponent0 _compView_2;
  import42.MaterialIconComponent _MaterialIconComponent_2_5;
  _ViewSettingsComponent23(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final _ctx = ctx;
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    import11.setAttribute(_el_0, 'footer', '');
    addShimC(_el_0);
    _compView_1 = import39.ViewMaterialButtonComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    this.updateChildClassNonHtml(_el_1, 'iconButton');
    addShimC(_el_1);
    _AcxDarkTheme_1_5 = (import9.isDevMode
        ? import25.debugInjectorWrap(import43.AcxDarkTheme, () {
            return import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import43.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_1_6 = import40.MaterialButtonComponent(_el_1, _AcxDarkTheme_1_5, _compView_1, null);
    _compView_2 = import41.ViewMaterialIconComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    import11.setAttribute(_el_2, 'icon', 'cancel');
    addShimC(_el_2);
    _MaterialIconComponent_2_5 = import42.MaterialIconComponent(_el_2);
    _compView_2.create0(_MaterialIconComponent_2_5);
    final _text_3 = import11.createText(_message_0);
    _compView_1.create(_MaterialButtonComponent_1_6, [
      [_el_2, _text_3]
    ]);
    final subscription_0 = _MaterialButtonComponent_1_6.trigger.listen(eventHandler0(_ctx.cancelCalculation));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((1 <= nodeIndex) && (nodeIndex <= 3))) {
      if (identical(token, import43.AcxDarkTheme)) {
        return _AcxDarkTheme_1_5;
      }
      if (((identical(token, import40.MaterialButtonComponent) || identical(token, import44.ButtonDirective)) || identical(token, import33.HasDisabled))) {
        return _MaterialButtonComponent_1_6;
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
      _compView_1.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_2_5.icon = 'cancel';
      changed = true;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    _compView_1.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroyInternalState();
    _compView_2.destroyInternalState();
  }
}

AppView<void> viewFactory_SettingsComponent23(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponent23(parentView, parentIndex);
}

final List<dynamic> styles$SettingsComponentHost = const [];

class _ViewSettingsComponentHost0 extends AppView<import2.SettingsComponent> {
  ViewSettingsComponent0 _compView_0;
  import2.SettingsComponent _SettingsComponent_0_5;
  _ViewSettingsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = ViewSettingsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _SettingsComponent_0_5 = import2.SettingsComponent();
    _compView_0.create(_SettingsComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _SettingsComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import37.AppViewUtils.throwOnChanges) && firstCheck)) {
      _SettingsComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSettingsComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(SettingsComponent, SettingsComponentNgFactory);
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
}
