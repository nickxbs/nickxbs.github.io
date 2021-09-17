// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'printparams_component.dart';
export 'printparams_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../globals.template.dart' as _ref0;
import '../json_data.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_components/angular_components.template.dart' as _ref3;
import 'package:angular_components/material_input/material_input.template.dart' as _ref4;
import 'package:angular_components/material_select/material_dropdown_select.template.dart' as _ref5;
import 'package:angular_components/material_select/material_select_item.template.dart' as _ref6;
import 'package:angular_components/material_toggle/material_toggle.template.dart' as _ref7;
import 'package:nightscout_reporter/src/globals.template.dart' as _ref8;
import 'package:nightscout_reporter/src/printparams/printparams_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'printparams_component.dart' as import2;
import 'package:intl/intl.dart' as import3;
import 'package:angular/src/runtime/text_binding.dart' as import4;
import 'package:angular_components/material_dialog/material_dialog.template.dart' as import5;
import 'package:angular_components/material_dialog/material_dialog.dart' as import6;
import 'package:angular_components/material_button/material_button.template.dart' as import7;
import 'package:angular_components/material_button/material_button.dart' as import8;
import 'package:angular_components/material_icon/material_icon.template.dart' as import9;
import 'package:angular_components/material_icon/material_icon.dart' as import10;
import 'package:angular_components/material_toggle/material_toggle.template.dart' as import11;
import 'package:angular_components/material_toggle/material_toggle.dart' as import12;
import 'package:angular_components/material_select/material_dropdown_select.template.dart' as import13;
import 'package:angular_components/material_select/material_dropdown_select.dart' as import14;
import 'package:angular_components/model/a11y/active_item.dart' as import15;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import17;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as import18;
import 'package:angular_components/material_checkbox/material_checkbox.dart' as import19;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import21;
import 'package:angular/src/core/linker/view_type.dart' as import22;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import24;
import 'package:angular/src/runtime.dart' as import25;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import27;
import 'package:angular/src/di/errors.dart' as import28;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import29;
import 'package:angular_components/laminate/components/modal/modal.dart' as import30;
import 'package:angular_components/theme/dark_theme.dart' as import31;
import 'package:angular/src/core/di/opaque_token.dart' as import32;
import 'package:angular_components/utils/id_generator/id_generator.dart' as import33;
import 'package:angular_components/src/laminate/popup/popup_size_provider.dart' as import34;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/runtime/interpolate.dart' as import36;
import 'package:angular_components/button_decorator/button_decorator.dart' as import37;
import 'package:angular_components/interfaces/has_disabled.dart' as import38;
import 'package:angular_components/mixins/material_dropdown_base.dart' as import39;
import 'package:angular_components/material_select/activation_handler.dart' as import40;
import 'package:angular_components/model/ui/has_renderer.dart' as import41;
import 'package:angular_components/content/deferred_content_aware.dart' as import42;
import 'package:angular_components/model/selection/selection_container.dart' as import43;
import 'package:angular/src/core/linker/app_view_utils.dart' as import44;
import 'package:angular_components/material_select/material_select_item.template.dart' as import45;
import 'package:angular_components/material_select/material_select_item.dart' as import46;
import 'dart:core';
import '../globals.dart' as import48;

final List<dynamic> styles$PrintParamsComponent = [import0.styles];

class ViewPrintParamsComponent0 extends AppView<import2.PrintParamsComponent> {
  static final String _message_0 = import3.Intl.message('Ausgabe Parameter', desc: 'title for printparameter dialog');
  static final String _message_1 = import3.Intl.message('Allgemeines', desc: 'label of area for section general in printparams');
  static final String _message_2 = import3.Intl.message('zu Vergleichszwecken (z.B. Arzt)', desc: 'label for comparative purposes');
  static final String _message_3 = import3.Intl.message('Maximaler Glukosewert in Grafiken:', desc: 'label for max glucvalue in printparams');
  static final String _message_4 = import3.Intl.message('Genauigkeit der Basalangaben:', desc: 'label for max basalprecision in printparams');
  static final String _message_5 = import3.Intl.message('PDF im selben Fenster öffnen', desc: 'label for checkbox to open PDF in same window');
  static final String _message_6 = import3.Intl.message('PDF herunterladen (bei einigen Browsern benötigt)', desc: 'label for checkbox to download PDF');
  static final String _message_7 = import3.Intl.message('Hinweise auf Nightscout in der Kopf- und Fusszeile des PDFs ausblenden', desc: 'label for checkbox to hide nightscout in footer');
  static final String _message_8 = import3.Intl.message('Loopdaten verbergen (die auf diese Art markierten Optionen ignorieren)', desc: 'label for checkbox to hide loop data');
  static final String _message_9 = import3.Intl.message('Nightscout Url in der Fusszeile des PDFs anzeigen', desc: 'label for checkbox to show nightscout url in footer');
  static final String _message_10 = import3.Intl.message('Historische Daten', desc: 'label of area for timeshift');
  static final String _message_11 = import3.Intl.message('Hiermit wird festgelegt, um wieviel der Zeitraum des PDFs verschoben werden soll, um Vergleichswerte zu erhalten.', desc: 'description of timeshift');
  static final String _message_12 = import3.Intl.message('PDF erzeugen', desc: 'buttonlabel for saving data');
  final import4.TextBinding _textBinding_18 = import4.TextBinding();
  final import4.TextBinding _textBinding_23 = import4.TextBinding();
  final import4.TextBinding _textBinding_37 = import4.TextBinding();
  import5.ViewMaterialDialogComponent0 _compView_0;
  import6.MaterialDialogComponent _MaterialDialogComponent_0_5;
  import7.ViewMaterialButtonComponent0 _compView_7;
  dynamic _AcxDarkTheme_7_5;
  import8.MaterialButtonComponent _MaterialButtonComponent_7_6;
  import9.ViewMaterialIconComponent0 _compView_8;
  import10.MaterialIconComponent _MaterialIconComponent_8_5;
  import11.ViewMaterialToggleComponent0 _compView_14;
  import12.MaterialToggleComponent _MaterialToggleComponent_14_5;
  import13.ViewMaterialDropdownSelectComponent0 _compView_20;
  import14.MaterialDropdownSelectComponent _MaterialDropdownSelectComponent_20_5;
  import15.ActiveItemModel<dynamic> __ActiveItemModel_20_13;
  ViewContainer _appEl_21;
  import17.NgFor _NgFor_21_9;
  import18.ViewMaterialCheckboxComponent0 _compView_22;
  import19.MaterialCheckboxComponent _MaterialCheckboxComponent_22_5;
  ViewContainer _appEl_24;
  NgIf _NgIf_24_9;
  import13.ViewMaterialDropdownSelectComponent0 _compView_28;
  import14.MaterialDropdownSelectComponent _MaterialDropdownSelectComponent_28_5;
  import15.ActiveItemModel<dynamic> __ActiveItemModel_28_13;
  ViewContainer _appEl_29;
  import17.NgFor _NgFor_29_9;
  import13.ViewMaterialDropdownSelectComponent0 _compView_33;
  import14.MaterialDropdownSelectComponent _MaterialDropdownSelectComponent_33_5;
  import15.ActiveItemModel<dynamic> __ActiveItemModel_33_13;
  ViewContainer _appEl_34;
  import17.NgFor _NgFor_34_9;
  import18.ViewMaterialCheckboxComponent0 _compView_36;
  import19.MaterialCheckboxComponent _MaterialCheckboxComponent_36_5;
  import18.ViewMaterialCheckboxComponent0 _compView_39;
  import19.MaterialCheckboxComponent _MaterialCheckboxComponent_39_5;
  import18.ViewMaterialCheckboxComponent0 _compView_41;
  import19.MaterialCheckboxComponent _MaterialCheckboxComponent_41_5;
  import18.ViewMaterialCheckboxComponent0 _compView_44;
  import19.MaterialCheckboxComponent _MaterialCheckboxComponent_44_5;
  import18.ViewMaterialCheckboxComponent0 _compView_46;
  import19.MaterialCheckboxComponent _MaterialCheckboxComponent_46_5;
  import18.ViewMaterialCheckboxComponent0 _compView_48;
  import19.MaterialCheckboxComponent _MaterialCheckboxComponent_48_5;
  ViewContainer _appEl_55;
  import17.NgFor _NgFor_55_9;
  import7.ViewMaterialButtonComponent0 _compView_58;
  dynamic _AcxDarkTheme_58_5;
  import8.MaterialButtonComponent _MaterialButtonComponent_58_6;
  import9.ViewMaterialIconComponent0 _compView_59;
  import10.MaterialIconComponent _MaterialIconComponent_59_5;
  bool _expr_2;
  String _expr_3;
  var _expr_8;
  bool _expr_9;
  bool _expr_10;
  String _expr_12;
  var _expr_17;
  String _expr_18;
  var _expr_23;
  bool _expr_24;
  bool _expr_25;
  bool _expr_26;
  bool _expr_27;
  bool _expr_28;
  bool _expr_29;
  var _expr_30;
  static import21.ComponentStyles _componentStyles;
  ViewPrintParamsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import22.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import24.document.createElement('printparams');
  }
  import15.ActiveItemModel<dynamic> get _ActiveItemModel_20_13 {
    if ((__ActiveItemModel_20_13 == null)) {
      (__ActiveItemModel_20_13 = import14.fromDropdown(_MaterialDropdownSelectComponent_20_5));
    }
    return __ActiveItemModel_20_13;
  }

  import15.ActiveItemModel<dynamic> get _ActiveItemModel_28_13 {
    if ((__ActiveItemModel_28_13 == null)) {
      (__ActiveItemModel_28_13 = import14.fromDropdown(_MaterialDropdownSelectComponent_28_5));
    }
    return __ActiveItemModel_28_13;
  }

  import15.ActiveItemModel<dynamic> get _ActiveItemModel_33_13 {
    if ((__ActiveItemModel_33_13 == null)) {
      (__ActiveItemModel_33_13 = import14.fromDropdown(_MaterialDropdownSelectComponent_33_5));
    }
    return __ActiveItemModel_33_13;
  }

  static String get _debugComponentUrl {
    return (import25.isDevMode ? 'asset:nightscout_reporter/lib/src/printparams/printparams_component.dart' : null);
  }

  @override
  ComponentRef<import2.PrintParamsComponent> build() {
    final _rootEl = rootEl;
    final import24.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import5.ViewMaterialDialogComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    this.updateChildClassNonHtml(_el_0, 'headered-dialog');
    import27.setAttribute(_el_0, 'headered', '');
    import27.setAttribute(_el_0, 'main', '');
    addShimC(_el_0);
    _MaterialDialogComponent_0_5 = (import25.isDevMode
        ? import28.debugInjectorWrap(import6.MaterialDialogComponent, () {
            return import6.MaterialDialogComponent(_el_0, parentView.injectorGet(import29.DomService, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import30.ModalComponent, viewData.parentIndex));
          })
        : import6.MaterialDialogComponent(_el_0, parentView.injectorGet(import29.DomService, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import30.ModalComponent, viewData.parentIndex)));
    final doc = import24.document;
    final _el_1 = doc.createElement('div');
    import27.setAttribute(_el_1, 'header', '');
    addShimC(_el_1);
    final _el_2 = import27.appendDiv(doc, _el_1);
    addShimC(_el_2);
    final _el_3 = import27.appendElement(doc, _el_2, 'h1');
    addShimE(_el_3);
    final _text_4 = import27.appendText(_el_3, _message_0);
    final _el_5 = import27.appendElement(doc, _el_2, 'p');
    addShimE(_el_5);
    final _el_6 = import27.appendDiv(doc, _el_1);
    addShimC(_el_6);
    _compView_7 = import7.ViewMaterialButtonComponent0(this, 7);
    final _el_7 = _compView_7.rootEl;
    _el_6.append(_el_7);
    import27.setAttribute(_el_7, 'icon', '');
    addShimC(_el_7);
    _AcxDarkTheme_7_5 = (import25.isDevMode
        ? import28.debugInjectorWrap(import31.AcxDarkTheme, () {
            return import31.AcxDarkTheme(parentView.injectorGetOptional(const import32.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import31.AcxDarkTheme(parentView.injectorGetOptional(const import32.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_7_6 = import8.MaterialButtonComponent(_el_7, _AcxDarkTheme_7_5, _compView_7, null);
    _compView_8 = import9.ViewMaterialIconComponent0(this, 8);
    final _el_8 = _compView_8.rootEl;
    import27.setAttribute(_el_8, 'icon', 'close');
    addShimC(_el_8);
    _MaterialIconComponent_8_5 = import10.MaterialIconComponent(_el_8);
    _compView_8.create0(_MaterialIconComponent_8_5);
    _compView_7.create(_MaterialButtonComponent_7_6, [
      [_el_8]
    ]);
    final _el_9 = doc.createElement('div');
    this.updateChildClass(_el_9, 'root');
    addShimC(_el_9);
    final _el_10 = import27.appendDiv(doc, _el_9);
    this.updateChildClass(_el_10, 'subtitle');
    addShimC(_el_10);
    final _el_11 = import27.appendDiv(doc, _el_10);
    addShimC(_el_11);
    final _text_12 = import27.appendText(_el_11, _message_1);
    final _el_13 = import27.appendDiv(doc, _el_10);
    this.updateChildClass(_el_13, 'comparable');
    addShimC(_el_13);
    _compView_14 = import11.ViewMaterialToggleComponent0(this, 14);
    final _el_14 = _compView_14.rootEl;
    _el_13.append(_el_14);
    import27.setAttribute(_el_14, 'label', _message_2);
    addShimC(_el_14);
    _MaterialToggleComponent_14_5 = import12.MaterialToggleComponent(_compView_14, null);
    _compView_14.create(_MaterialToggleComponent_14_5, [const []]);
    final _el_15 = import27.appendDiv(doc, _el_9);
    this.updateChildClass(_el_15, 'functions');
    addShimC(_el_15);
    final _el_16 = import27.appendDiv(doc, _el_15);
    addShimC(_el_16);
    final _el_17 = import27.appendDiv(doc, _el_16);
    addShimC(_el_17);
    _el_17.append(_textBinding_18.element);
    final _text_19 = import27.appendText(_el_17, ':');
    _compView_20 = import13.ViewMaterialDropdownSelectComponent0(this, 20);
    final _el_20 = _compView_20.rootEl;
    _el_16.append(_el_20);
    this.updateChildClassNonHtml(_el_20, 'selectButton');
    import27.setAttribute(_el_20, 'listAutoFocus', '');
    import27.setAttribute(_el_20, 'popupClass', 'selectSelect');
    import27.setAttribute(_el_20, 'raised', '');
    import27.setAttribute(_el_20, 'slide', 'y');
    addShimC(_el_20);
    _MaterialDropdownSelectComponent_20_5 = (import25.isDevMode
        ? import28.debugInjectorWrap(import14.MaterialDropdownSelectComponent, () {
            return import14.MaterialDropdownSelectComponent(parentView.injectorGetOptional(import33.IdGenerator, viewData.parentIndex), parentView.injectorGetOptional(import34.PopupSizeProvider, viewData.parentIndex), parentView.injectorGetOptional(const import32.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex), 'selectSelect', null, _compView_20, _el_20);
          })
        : import14.MaterialDropdownSelectComponent(parentView.injectorGetOptional(import33.IdGenerator, viewData.parentIndex), parentView.injectorGetOptional(import34.PopupSizeProvider, viewData.parentIndex), parentView.injectorGetOptional(const import32.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex), 'selectSelect', null, _compView_20, _el_20));
    final _anchor_21 = import27.createAnchor();
    _appEl_21 = ViewContainer(21, 20, this, _anchor_21);
    TemplateRef _TemplateRef_21_8 = TemplateRef(_appEl_21, viewFactory_PrintParamsComponent1);
    _NgFor_21_9 = import17.NgFor(_appEl_21, _TemplateRef_21_8);
    _compView_20.create(_MaterialDropdownSelectComponent_20_5, [
      const [],
      const [],
      const [],
      [_appEl_21],
      const [],
      const []
    ]);
    _compView_22 = import18.ViewMaterialCheckboxComponent0(this, 22);
    final _el_22 = _compView_22.rootEl;
    _el_15.append(_el_22);
    this.updateChildClassNonHtml(_el_22, import36.interpolateString2('', 'pp', ' ', import19.MaterialCheckboxComponent.hostClass, ''));
    addShimC(_el_22);
    _MaterialCheckboxComponent_22_5 = import19.MaterialCheckboxComponent(_el_22, _compView_22, null, null, null);
    _compView_22.create(_MaterialCheckboxComponent_22_5, [
      [_textBinding_23.element]
    ]);
    final _anchor_24 = import27.appendAnchor(_el_15);
    _appEl_24 = ViewContainer(24, 15, this, _anchor_24);
    TemplateRef _TemplateRef_24_8 = TemplateRef(_appEl_24, viewFactory_PrintParamsComponent2);
    _NgIf_24_9 = NgIf(_appEl_24, _TemplateRef_24_8);
    final _el_25 = import27.appendDiv(doc, _el_15);
    addShimC(_el_25);
    final _el_26 = import27.appendDiv(doc, _el_25);
    addShimC(_el_26);
    final _text_27 = import27.appendText(_el_26, _message_3);
    _compView_28 = import13.ViewMaterialDropdownSelectComponent0(this, 28);
    final _el_28 = _compView_28.rootEl;
    _el_25.append(_el_28);
    this.updateChildClassNonHtml(_el_28, 'selectButton');
    import27.setAttribute(_el_28, 'listAutoFocus', '');
    import27.setAttribute(_el_28, 'popupClass', 'selectSelect');
    import27.setAttribute(_el_28, 'raised', '');
    import27.setAttribute(_el_28, 'slide', 'y');
    addShimC(_el_28);
    _MaterialDropdownSelectComponent_28_5 = (import25.isDevMode
        ? import28.debugInjectorWrap(import14.MaterialDropdownSelectComponent, () {
            return import14.MaterialDropdownSelectComponent(parentView.injectorGetOptional(import33.IdGenerator, viewData.parentIndex), parentView.injectorGetOptional(import34.PopupSizeProvider, viewData.parentIndex), parentView.injectorGetOptional(const import32.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex), 'selectSelect', null, _compView_28, _el_28);
          })
        : import14.MaterialDropdownSelectComponent(parentView.injectorGetOptional(import33.IdGenerator, viewData.parentIndex), parentView.injectorGetOptional(import34.PopupSizeProvider, viewData.parentIndex), parentView.injectorGetOptional(const import32.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex), 'selectSelect', null, _compView_28, _el_28));
    final _anchor_29 = import27.createAnchor();
    _appEl_29 = ViewContainer(29, 28, this, _anchor_29);
    TemplateRef _TemplateRef_29_8 = TemplateRef(_appEl_29, viewFactory_PrintParamsComponent3);
    _NgFor_29_9 = import17.NgFor(_appEl_29, _TemplateRef_29_8);
    _compView_28.create(_MaterialDropdownSelectComponent_28_5, [
      const [],
      const [],
      const [],
      [_appEl_29],
      const [],
      const []
    ]);
    final _el_30 = import27.appendDiv(doc, _el_15);
    addShimC(_el_30);
    final _el_31 = import27.appendDiv(doc, _el_30);
    addShimC(_el_31);
    final _text_32 = import27.appendText(_el_31, _message_4);
    _compView_33 = import13.ViewMaterialDropdownSelectComponent0(this, 33);
    final _el_33 = _compView_33.rootEl;
    _el_30.append(_el_33);
    this.updateChildClassNonHtml(_el_33, 'selectButton');
    import27.setAttribute(_el_33, 'listAutoFocus', '');
    import27.setAttribute(_el_33, 'popupClass', 'selectSelect');
    import27.setAttribute(_el_33, 'raised', '');
    import27.setAttribute(_el_33, 'slide', 'y');
    addShimC(_el_33);
    _MaterialDropdownSelectComponent_33_5 = (import25.isDevMode
        ? import28.debugInjectorWrap(import14.MaterialDropdownSelectComponent, () {
            return import14.MaterialDropdownSelectComponent(parentView.injectorGetOptional(import33.IdGenerator, viewData.parentIndex), parentView.injectorGetOptional(import34.PopupSizeProvider, viewData.parentIndex), parentView.injectorGetOptional(const import32.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex), 'selectSelect', null, _compView_33, _el_33);
          })
        : import14.MaterialDropdownSelectComponent(parentView.injectorGetOptional(import33.IdGenerator, viewData.parentIndex), parentView.injectorGetOptional(import34.PopupSizeProvider, viewData.parentIndex), parentView.injectorGetOptional(const import32.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex), 'selectSelect', null, _compView_33, _el_33));
    final _anchor_34 = import27.createAnchor();
    _appEl_34 = ViewContainer(34, 33, this, _anchor_34);
    TemplateRef _TemplateRef_34_8 = TemplateRef(_appEl_34, viewFactory_PrintParamsComponent4);
    _NgFor_34_9 = import17.NgFor(_appEl_34, _TemplateRef_34_8);
    _compView_33.create(_MaterialDropdownSelectComponent_33_5, [
      const [],
      const [],
      const [],
      [_appEl_34],
      const [],
      const []
    ]);
    final _el_35 = import27.appendDiv(doc, _el_9);
    addShimC(_el_35);
    _compView_36 = import18.ViewMaterialCheckboxComponent0(this, 36);
    final _el_36 = _compView_36.rootEl;
    _el_35.append(_el_36);
    this.updateChildClassNonHtml(_el_36, import36.interpolateString2('', 'pp', ' ', import19.MaterialCheckboxComponent.hostClass, ''));
    addShimC(_el_36);
    _MaterialCheckboxComponent_36_5 = import19.MaterialCheckboxComponent(_el_36, _compView_36, null, null, null);
    _compView_36.create(_MaterialCheckboxComponent_36_5, [
      [_textBinding_37.element]
    ]);
    final _el_38 = import27.appendDiv(doc, _el_9);
    addShimC(_el_38);
    _compView_39 = import18.ViewMaterialCheckboxComponent0(this, 39);
    final _el_39 = _compView_39.rootEl;
    _el_38.append(_el_39);
    this.updateChildClassNonHtml(_el_39, import36.interpolateString2('', 'pp', ' ', import19.MaterialCheckboxComponent.hostClass, ''));
    addShimC(_el_39);
    _MaterialCheckboxComponent_39_5 = import19.MaterialCheckboxComponent(_el_39, _compView_39, null, null, null);
    final _text_40 = import27.createText(_message_5);
    _compView_39.create(_MaterialCheckboxComponent_39_5, [
      [_text_40]
    ]);
    _compView_41 = import18.ViewMaterialCheckboxComponent0(this, 41);
    final _el_41 = _compView_41.rootEl;
    _el_38.append(_el_41);
    this.updateChildClassNonHtml(_el_41, import36.interpolateString2('', 'pp', ' ', import19.MaterialCheckboxComponent.hostClass, ''));
    addShimC(_el_41);
    _MaterialCheckboxComponent_41_5 = import19.MaterialCheckboxComponent(_el_41, _compView_41, null, null, null);
    final _text_42 = import27.createText(_message_6);
    _compView_41.create(_MaterialCheckboxComponent_41_5, [
      [_text_42]
    ]);
    final _el_43 = import27.appendDiv(doc, _el_9);
    addShimC(_el_43);
    _compView_44 = import18.ViewMaterialCheckboxComponent0(this, 44);
    final _el_44 = _compView_44.rootEl;
    _el_43.append(_el_44);
    this.updateChildClassNonHtml(_el_44, import36.interpolateString2('', 'pp', ' ', import19.MaterialCheckboxComponent.hostClass, ''));
    addShimC(_el_44);
    _MaterialCheckboxComponent_44_5 = import19.MaterialCheckboxComponent(_el_44, _compView_44, null, null, null);
    final _text_45 = import27.createText(_message_7);
    _compView_44.create(_MaterialCheckboxComponent_44_5, [
      [_text_45]
    ]);
    _compView_46 = import18.ViewMaterialCheckboxComponent0(this, 46);
    final _el_46 = _compView_46.rootEl;
    _el_43.append(_el_46);
    this.updateChildClassNonHtml(_el_46, import36.interpolateString2('', 'pp loop', ' ', import19.MaterialCheckboxComponent.hostClass, ''));
    addShimC(_el_46);
    _MaterialCheckboxComponent_46_5 = import19.MaterialCheckboxComponent(_el_46, _compView_46, null, null, null);
    final _text_47 = import27.createText(_message_8);
    _compView_46.create(_MaterialCheckboxComponent_46_5, [
      [_text_47]
    ]);
    _compView_48 = import18.ViewMaterialCheckboxComponent0(this, 48);
    final _el_48 = _compView_48.rootEl;
    _el_9.append(_el_48);
    this.updateChildClassNonHtml(_el_48, import36.interpolateString2('', 'pp', ' ', import19.MaterialCheckboxComponent.hostClass, ''));
    addShimC(_el_48);
    _MaterialCheckboxComponent_48_5 = import19.MaterialCheckboxComponent(_el_48, _compView_48, null, null, null);
    final _text_49 = import27.createText(_message_9);
    _compView_48.create(_MaterialCheckboxComponent_48_5, [
      [_text_49]
    ]);
    final _el_50 = import27.appendDiv(doc, _el_9);
    this.updateChildClass(_el_50, 'subtitle');
    addShimC(_el_50);
    final _text_51 = import27.appendText(_el_50, _message_10);
    final _el_52 = import27.appendDiv(doc, _el_9);
    this.updateChildClass(_el_52, 'timeshift');
    addShimC(_el_52);
    final _el_53 = import27.appendDiv(doc, _el_52);
    addShimC(_el_53);
    final _text_54 = import27.appendText(_el_53, _message_11);
    final _anchor_55 = import27.appendAnchor(_el_52);
    _appEl_55 = ViewContainer(55, 52, this, _anchor_55);
    TemplateRef _TemplateRef_55_8 = TemplateRef(_appEl_55, viewFactory_PrintParamsComponent5);
    _NgFor_55_9 = import17.NgFor(_appEl_55, _TemplateRef_55_8);
    final _el_56 = doc.createElement('div');
    import27.setAttribute(_el_56, 'footer', '');
    addShimC(_el_56);
    final _el_57 = import27.appendDiv(doc, _el_56);
    addShimC(_el_57);
    _compView_58 = import7.ViewMaterialButtonComponent0(this, 58);
    final _el_58 = _compView_58.rootEl;
    _el_56.append(_el_58);
    this.updateChildClassNonHtml(_el_58, 'iconButton');
    import27.setAttribute(_el_58, 'clear-size', '');
    addShimC(_el_58);
    _AcxDarkTheme_58_5 = (import25.isDevMode
        ? import28.debugInjectorWrap(import31.AcxDarkTheme, () {
            return import31.AcxDarkTheme(parentView.injectorGetOptional(const import32.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import31.AcxDarkTheme(parentView.injectorGetOptional(const import32.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_58_6 = import8.MaterialButtonComponent(_el_58, _AcxDarkTheme_58_5, _compView_58, null);
    _compView_59 = import9.ViewMaterialIconComponent0(this, 59);
    final _el_59 = _compView_59.rootEl;
    import27.setAttribute(_el_59, 'icon', 'picture_as_pdf');
    addShimC(_el_59);
    _MaterialIconComponent_59_5 = import10.MaterialIconComponent(_el_59);
    _compView_59.create0(_MaterialIconComponent_59_5);
    final _text_60 = import27.createText(_message_12);
    _compView_58.create(_MaterialButtonComponent_58_6, [
      [_el_59, _text_60]
    ]);
    _compView_0.create(_MaterialDialogComponent_0_5, [
      [_el_1],
      [_el_9],
      [_el_56]
    ]);
    final subscription_0 = _MaterialButtonComponent_7_6.trigger.listen(eventHandler1(_handle_trigger_7_0));
    final subscription_1 = _MaterialToggleComponent_14_5.onChecked.listen(eventHandler1(_handle_checkedChange_14_0));
    final subscription_2 = _MaterialCheckboxComponent_22_5.onChecked.listen(eventHandler1(_handle_checkedChange_22_0));
    final subscription_3 = _MaterialCheckboxComponent_36_5.onChecked.listen(eventHandler1(_handle_checkedChange_36_0));
    final subscription_4 = _MaterialCheckboxComponent_39_5.onChecked.listen(eventHandler1(_handle_checkedChange_39_0));
    final subscription_5 = _MaterialCheckboxComponent_41_5.onChecked.listen(eventHandler1(_handle_checkedChange_41_0));
    final subscription_6 = _MaterialCheckboxComponent_44_5.onChecked.listen(eventHandler1(_handle_checkedChange_44_0));
    final subscription_7 = _MaterialCheckboxComponent_46_5.onChecked.listen(eventHandler1(_handle_checkedChange_46_0));
    final subscription_8 = _MaterialCheckboxComponent_48_5.onChecked.listen(eventHandler1(_handle_checkedChange_48_0));
    final subscription_9 = _MaterialButtonComponent_58_6.trigger.listen(eventHandler1(_handle_trigger_58_0));
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5, subscription_6, subscription_7, subscription_8, subscription_9]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((7 <= nodeIndex) && (nodeIndex <= 8))) {
      if (identical(token, import31.AcxDarkTheme)) {
        return _AcxDarkTheme_7_5;
      }
      if (((identical(token, import8.MaterialButtonComponent) || identical(token, import37.ButtonDirective)) || identical(token, import38.HasDisabled))) {
        return _MaterialButtonComponent_7_6;
      }
    }
    if ((identical(token, import38.HasDisabled) && (14 == nodeIndex))) {
      return _MaterialToggleComponent_14_5;
    }
    if (((20 <= nodeIndex) && (nodeIndex <= 21))) {
      if ((identical(token, import15.ActiveItemModel) && (20 == nodeIndex))) {
        return _ActiveItemModel_20_13;
      }
      if ((((((((identical(token, import14.MaterialDropdownSelectComponent) || identical(token, import39.DropdownHandle)) || identical(token, import40.ActivationHandler)) || identical(token, import38.HasDisabled)) || identical(token, import41.HasRenderer)) || identical(token, import42.DeferredContentAware)) || identical(token, import43.SelectionContainer)) || identical(token, import34.PopupSizeProvider))) {
        return _MaterialDropdownSelectComponent_20_5;
      }
    }
    if ((identical(token, import38.HasDisabled) && ((22 <= nodeIndex) && (nodeIndex <= 23)))) {
      return _MaterialCheckboxComponent_22_5;
    }
    if (((28 <= nodeIndex) && (nodeIndex <= 29))) {
      if ((identical(token, import15.ActiveItemModel) && (28 == nodeIndex))) {
        return _ActiveItemModel_28_13;
      }
      if ((((((((identical(token, import14.MaterialDropdownSelectComponent) || identical(token, import39.DropdownHandle)) || identical(token, import40.ActivationHandler)) || identical(token, import38.HasDisabled)) || identical(token, import41.HasRenderer)) || identical(token, import42.DeferredContentAware)) || identical(token, import43.SelectionContainer)) || identical(token, import34.PopupSizeProvider))) {
        return _MaterialDropdownSelectComponent_28_5;
      }
    }
    if (((33 <= nodeIndex) && (nodeIndex <= 34))) {
      if ((identical(token, import15.ActiveItemModel) && (33 == nodeIndex))) {
        return _ActiveItemModel_33_13;
      }
      if ((((((((identical(token, import14.MaterialDropdownSelectComponent) || identical(token, import39.DropdownHandle)) || identical(token, import40.ActivationHandler)) || identical(token, import38.HasDisabled)) || identical(token, import41.HasRenderer)) || identical(token, import42.DeferredContentAware)) || identical(token, import43.SelectionContainer)) || identical(token, import34.PopupSizeProvider))) {
        return _MaterialDropdownSelectComponent_33_5;
      }
    }
    if ((identical(token, import38.HasDisabled) && ((36 <= nodeIndex) && (nodeIndex <= 37)))) {
      return _MaterialCheckboxComponent_36_5;
    }
    if ((identical(token, import38.HasDisabled) && ((39 <= nodeIndex) && (nodeIndex <= 40)))) {
      return _MaterialCheckboxComponent_39_5;
    }
    if ((identical(token, import38.HasDisabled) && ((41 <= nodeIndex) && (nodeIndex <= 42)))) {
      return _MaterialCheckboxComponent_41_5;
    }
    if ((identical(token, import38.HasDisabled) && ((44 <= nodeIndex) && (nodeIndex <= 45)))) {
      return _MaterialCheckboxComponent_44_5;
    }
    if ((identical(token, import38.HasDisabled) && ((46 <= nodeIndex) && (nodeIndex <= 47)))) {
      return _MaterialCheckboxComponent_46_5;
    }
    if ((identical(token, import38.HasDisabled) && ((48 <= nodeIndex) && (nodeIndex <= 49)))) {
      return _MaterialCheckboxComponent_48_5;
    }
    if (((58 <= nodeIndex) && (nodeIndex <= 60))) {
      if (identical(token, import31.AcxDarkTheme)) {
        return _AcxDarkTheme_58_5;
      }
      if (((identical(token, import8.MaterialButtonComponent) || identical(token, import37.ButtonDirective)) || identical(token, import38.HasDisabled))) {
        return _MaterialButtonComponent_58_6;
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
    changed = false;
    if (firstCheck) {
      _MaterialToggleComponent_14_5.label = _message_2;
      changed = true;
    }
    final currVal_2 = _ctx.g.ppComparable;
    if (import44.checkBinding(_expr_2, currVal_2)) {
      _MaterialToggleComponent_14_5.checked = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_14.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialDropdownSelectComponent_20_5.raised = true;
      changed = true;
      _MaterialDropdownSelectComponent_20_5.slide = 'y';
      changed = true;
      _MaterialDropdownSelectComponent_20_5.showButtonBorder = false;
      changed = true;
      _MaterialDropdownSelectComponent_20_5.listAutoFocus = true;
      changed = true;
    }
    final currVal_3 = _ctx.g.listGlucUnits[(_ctx.g.glucMGDLIdx ?? 0)];
    if (import44.checkBinding(_expr_3, currVal_3)) {
      _MaterialDropdownSelectComponent_20_5.buttonText = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _MaterialDropdownSelectComponent_20_5.ngAfterChanges();
    }
    final currVal_8 = _ctx.g.listGlucUnits;
    if (import44.checkBinding(_expr_8, currVal_8)) {
      _NgFor_21_9.ngForOf = currVal_8;
      _expr_8 = currVal_8;
    }
    if ((!import44.AppViewUtils.throwOnChanges)) {
      _NgFor_21_9.ngDoCheck();
    }
    changed = false;
    final currVal_9 = _ctx.g.ppComparable;
    if (import44.checkBinding(_expr_9, currVal_9)) {
      _MaterialCheckboxComponent_22_5.disabled = currVal_9;
      changed = true;
      _expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.g.ppStandardLimits;
    if (import44.checkBinding(_expr_10, currVal_10)) {
      _MaterialCheckboxComponent_22_5.checked = currVal_10;
      changed = true;
      _expr_10 = currVal_10;
    }
    if (changed) {
      _compView_22.markAsCheckOnce();
    }
    _NgIf_24_9.ngIf = ((!_ctx.g.ppComparable) && (!_ctx.g.ppStandardLimits));
    changed = false;
    if (firstCheck) {
      _MaterialDropdownSelectComponent_28_5.raised = true;
      changed = true;
      _MaterialDropdownSelectComponent_28_5.slide = 'y';
      changed = true;
      _MaterialDropdownSelectComponent_28_5.showButtonBorder = false;
      changed = true;
      _MaterialDropdownSelectComponent_28_5.listAutoFocus = true;
      changed = true;
    }
    final currVal_12 = _ctx.listGlucMaxValues[(_ctx.glucMaxIdx ?? 0)];
    if (import44.checkBinding(_expr_12, currVal_12)) {
      _MaterialDropdownSelectComponent_28_5.buttonText = currVal_12;
      changed = true;
      _expr_12 = currVal_12;
    }
    if (changed) {
      _MaterialDropdownSelectComponent_28_5.ngAfterChanges();
    }
    final currVal_17 = _ctx.listGlucMaxValues;
    if (import44.checkBinding(_expr_17, currVal_17)) {
      _NgFor_29_9.ngForOf = currVal_17;
      _expr_17 = currVal_17;
    }
    if ((!import44.AppViewUtils.throwOnChanges)) {
      _NgFor_29_9.ngDoCheck();
    }
    changed = false;
    if (firstCheck) {
      _MaterialDropdownSelectComponent_33_5.raised = true;
      changed = true;
      _MaterialDropdownSelectComponent_33_5.slide = 'y';
      changed = true;
      _MaterialDropdownSelectComponent_33_5.showButtonBorder = false;
      changed = true;
      _MaterialDropdownSelectComponent_33_5.listAutoFocus = true;
      changed = true;
    }
    final currVal_18 = _ctx.listBasalPrecision[(_ctx.basalPrecisionIdx ?? 0)];
    if (import44.checkBinding(_expr_18, currVal_18)) {
      _MaterialDropdownSelectComponent_33_5.buttonText = currVal_18;
      changed = true;
      _expr_18 = currVal_18;
    }
    if (changed) {
      _MaterialDropdownSelectComponent_33_5.ngAfterChanges();
    }
    final currVal_23 = _ctx.listBasalPrecision;
    if (import44.checkBinding(_expr_23, currVal_23)) {
      _NgFor_34_9.ngForOf = currVal_23;
      _expr_23 = currVal_23;
    }
    if ((!import44.AppViewUtils.throwOnChanges)) {
      _NgFor_34_9.ngDoCheck();
    }
    changed = false;
    final currVal_24 = _ctx.g.ppLatestFirst;
    if (import44.checkBinding(_expr_24, currVal_24)) {
      _MaterialCheckboxComponent_36_5.checked = currVal_24;
      changed = true;
      _expr_24 = currVal_24;
    }
    if (changed) {
      _compView_36.markAsCheckOnce();
    }
    changed = false;
    final currVal_25 = _ctx.g.ppPdfSameWindow;
    if (import44.checkBinding(_expr_25, currVal_25)) {
      _MaterialCheckboxComponent_39_5.checked = currVal_25;
      changed = true;
      _expr_25 = currVal_25;
    }
    if (changed) {
      _compView_39.markAsCheckOnce();
    }
    changed = false;
    final currVal_26 = _ctx.g.ppPdfDownload;
    if (import44.checkBinding(_expr_26, currVal_26)) {
      _MaterialCheckboxComponent_41_5.checked = currVal_26;
      changed = true;
      _expr_26 = currVal_26;
    }
    if (changed) {
      _compView_41.markAsCheckOnce();
    }
    changed = false;
    final currVal_27 = _ctx.g.ppHideNightscoutInPDF;
    if (import44.checkBinding(_expr_27, currVal_27)) {
      _MaterialCheckboxComponent_44_5.checked = currVal_27;
      changed = true;
      _expr_27 = currVal_27;
    }
    if (changed) {
      _compView_44.markAsCheckOnce();
    }
    changed = false;
    final currVal_28 = _ctx.g.ppHideLoopData;
    if (import44.checkBinding(_expr_28, currVal_28)) {
      _MaterialCheckboxComponent_46_5.checked = currVal_28;
      changed = true;
      _expr_28 = currVal_28;
    }
    if (changed) {
      _compView_46.markAsCheckOnce();
    }
    changed = false;
    final currVal_29 = _ctx.g.ppShowUrlInPDF;
    if (import44.checkBinding(_expr_29, currVal_29)) {
      _MaterialCheckboxComponent_48_5.checked = currVal_29;
      changed = true;
      _expr_29 = currVal_29;
    }
    if (changed) {
      _compView_48.markAsCheckOnce();
    }
    final currVal_30 = _ctx.listPeriodShift;
    if (import44.checkBinding(_expr_30, currVal_30)) {
      _NgFor_55_9.ngForOf = currVal_30;
      _expr_30 = currVal_30;
    }
    if ((!import44.AppViewUtils.throwOnChanges)) {
      _NgFor_55_9.ngDoCheck();
    }
    changed = false;
    if (changed) {
      _compView_58.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_59_5.icon = 'picture_as_pdf';
      changed = true;
    }
    if (changed) {
      _compView_59.markAsCheckOnce();
    }
    _appEl_21.detectChangesInNestedViews();
    _appEl_24.detectChangesInNestedViews();
    _appEl_29.detectChangesInNestedViews();
    _appEl_34.detectChangesInNestedViews();
    _appEl_55.detectChangesInNestedViews();
    if ((!import44.AppViewUtils.throwOnChanges)) {
      _MaterialDialogComponent_0_5.ngAfterContentChecked();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_7.detectHostChanges(firstCheck);
    _textBinding_18.updateText(import36.interpolateString0(_ctx.g.lblGlucUnits));
    _compView_22.detectHostChanges(firstCheck);
    _textBinding_23.updateText(import36.interpolateString0(_ctx.msgStandardLimits(_ctx.g.getGlucInfo()['stdlow'], _ctx.g.getGlucInfo()['stdhigh'], _ctx.g.getGlucInfo()['unit'])));
    _compView_36.detectHostChanges(firstCheck);
    _textBinding_37.updateText(import36.interpolateString0(import2.PrintParamsComponent.msgLatestFirst));
    _compView_39.detectHostChanges(firstCheck);
    _compView_41.detectHostChanges(firstCheck);
    _compView_44.detectHostChanges(firstCheck);
    _compView_46.detectHostChanges(firstCheck);
    _compView_48.detectHostChanges(firstCheck);
    _compView_58.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_7.detectChanges();
    _compView_8.detectChanges();
    _compView_14.detectChanges();
    _compView_20.detectChanges();
    _compView_22.detectChanges();
    _compView_28.detectChanges();
    _compView_33.detectChanges();
    _compView_36.detectChanges();
    _compView_39.detectChanges();
    _compView_41.detectChanges();
    _compView_44.detectChanges();
    _compView_46.detectChanges();
    _compView_48.detectChanges();
    _compView_58.detectChanges();
    _compView_59.detectChanges();
    if ((!import44.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialToggleComponent_14_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_21.destroyNestedViews();
    _appEl_24.destroyNestedViews();
    _appEl_29.destroyNestedViews();
    _appEl_34.destroyNestedViews();
    _appEl_55.destroyNestedViews();
    _compView_0.destroyInternalState();
    _compView_7.destroyInternalState();
    _compView_8.destroyInternalState();
    _compView_14.destroyInternalState();
    _compView_20.destroyInternalState();
    _compView_22.destroyInternalState();
    _compView_28.destroyInternalState();
    _compView_33.destroyInternalState();
    _compView_36.destroyInternalState();
    _compView_39.destroyInternalState();
    _compView_41.destroyInternalState();
    _compView_44.destroyInternalState();
    _compView_46.destroyInternalState();
    _compView_48.destroyInternalState();
    _compView_58.destroyInternalState();
    _compView_59.destroyInternalState();
    _MaterialDropdownSelectComponent_20_5.ngOnDestroy();
    _MaterialCheckboxComponent_22_5.ngOnDestroy();
    _MaterialDropdownSelectComponent_28_5.ngOnDestroy();
    _MaterialDropdownSelectComponent_33_5.ngOnDestroy();
    _MaterialCheckboxComponent_36_5.ngOnDestroy();
    _MaterialCheckboxComponent_39_5.ngOnDestroy();
    _MaterialCheckboxComponent_41_5.ngOnDestroy();
    _MaterialCheckboxComponent_44_5.ngOnDestroy();
    _MaterialCheckboxComponent_46_5.ngOnDestroy();
    _MaterialCheckboxComponent_48_5.ngOnDestroy();
    _MaterialDialogComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_7_0($event) {
    final _ctx = ctx;
    _ctx.fire('cancel');
  }

  void _handle_checkedChange_14_0($event) {
    final _ctx = ctx;
    _ctx.g.ppComparable = $event;
  }

  void _handle_checkedChange_22_0($event) {
    final _ctx = ctx;
    _ctx.g.ppStandardLimits = $event;
  }

  void _handle_checkedChange_36_0($event) {
    final _ctx = ctx;
    _ctx.g.ppLatestFirst = $event;
  }

  void _handle_checkedChange_39_0($event) {
    final _ctx = ctx;
    _ctx.g.ppPdfSameWindow = $event;
  }

  void _handle_checkedChange_41_0($event) {
    final _ctx = ctx;
    _ctx.g.ppPdfDownload = $event;
  }

  void _handle_checkedChange_44_0($event) {
    final _ctx = ctx;
    _ctx.g.ppHideNightscoutInPDF = $event;
  }

  void _handle_checkedChange_46_0($event) {
    final _ctx = ctx;
    _ctx.g.ppHideLoopData = $event;
  }

  void _handle_checkedChange_48_0($event) {
    final _ctx = ctx;
    _ctx.g.ppShowUrlInPDF = $event;
  }

  void _handle_trigger_58_0($event) {
    final _ctx = ctx;
    _ctx.fire('ok');
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import21.ComponentStyles.scoped(styles$PrintParamsComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.PrintParamsComponent> _PrintParamsComponentNgFactory = const ComponentFactory('printparams', viewFactory_PrintParamsComponentHost0);
ComponentFactory<import2.PrintParamsComponent> get PrintParamsComponentNgFactory {
  return _PrintParamsComponentNgFactory;
}

class _ViewPrintParamsComponent1 extends AppView<import2.PrintParamsComponent> {
  final import4.TextBinding _textBinding_2 = import4.TextBinding();
  import45.ViewMaterialSelectItemComponent0 _compView_0;
  import46.MaterialSelectItemComponent _MaterialSelectItemComponent_0_5;
  var _expr_0;
  _ViewPrintParamsComponent1(AppView<dynamic> parentView, int parentIndex) : super(import22.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.PrintParamsComponent> build() {
    _compView_0 = import45.ViewMaterialSelectItemComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, import36.interpolateString2('', 'selectItem', ' ', import46.MaterialSelectItemComponent.hostClass, ''));
    addShimC(_el_0);
    _MaterialSelectItemComponent_0_5 = import46.MaterialSelectItemComponent(_el_0, import25.unsafeCast<ViewPrintParamsComponent0>(parentView)._MaterialDropdownSelectComponent_20_5, import25.unsafeCast<ViewPrintParamsComponent0>(parentView)._MaterialDropdownSelectComponent_20_5, _compView_0, null);
    final doc = import24.document;
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
    if ((((identical(token, import43.SelectionItem) || identical(token, import38.HasDisabled)) || identical(token, import41.HasRenderer)) && (nodeIndex <= 2))) {
      return _MaterialSelectItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_idx = import25.unsafeCast<int>(locals['index']);
    final local_item = import25.unsafeCast<String>(locals['\$implicit']);
    final currVal_0 = (local_idx == _ctx.g.glucMGDLIdx);
    if (import44.checkBinding(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_0_5.selected = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_2.updateText(import36.interpolateString0(local_item));
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialSelectItemComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_0_0($event) {
    final local_idx = import25.unsafeCast<int>(locals['index']);
    final _ctx = ctx;
    _ctx.changeGlucUnits(local_idx);
  }
}

AppView<void> viewFactory_PrintParamsComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewPrintParamsComponent1(parentView, parentIndex);
}

class _ViewPrintParamsComponent2 extends AppView<import2.PrintParamsComponent> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  import18.ViewMaterialCheckboxComponent0 _compView_0;
  import19.MaterialCheckboxComponent _MaterialCheckboxComponent_0_5;
  bool _expr_0;
  _ViewPrintParamsComponent2(AppView<dynamic> parentView, int parentIndex) : super(import22.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.PrintParamsComponent> build() {
    _compView_0 = import18.ViewMaterialCheckboxComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, import36.interpolateString2('', 'pp indent', ' ', import19.MaterialCheckboxComponent.hostClass, ''));
    addShimC(_el_0);
    _MaterialCheckboxComponent_0_5 = import19.MaterialCheckboxComponent(_el_0, _compView_0, null, null, null);
    _compView_0.create(_MaterialCheckboxComponent_0_5, [
      [_textBinding_1.element]
    ]);
    final subscription_0 = _MaterialCheckboxComponent_0_5.onChecked.listen(eventHandler1(_handle_checkedChange_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import38.HasDisabled) && (nodeIndex <= 1))) {
      return _MaterialCheckboxComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_0 = _ctx.g.ppCGPAlwaysStandardLimits;
    if (import44.checkBinding(_expr_0, currVal_0)) {
      _MaterialCheckboxComponent_0_5.checked = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_1.updateText(import36.interpolateString0(_ctx.msgStandardCGP));
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialCheckboxComponent_0_5.ngOnDestroy();
  }

  void _handle_checkedChange_0_0($event) {
    final _ctx = ctx;
    _ctx.g.ppCGPAlwaysStandardLimits = $event;
  }
}

AppView<void> viewFactory_PrintParamsComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewPrintParamsComponent2(parentView, parentIndex);
}

class _ViewPrintParamsComponent3 extends AppView<import2.PrintParamsComponent> {
  final import4.TextBinding _textBinding_2 = import4.TextBinding();
  import45.ViewMaterialSelectItemComponent0 _compView_0;
  import46.MaterialSelectItemComponent _MaterialSelectItemComponent_0_5;
  var _expr_0;
  _ViewPrintParamsComponent3(AppView<dynamic> parentView, int parentIndex) : super(import22.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.PrintParamsComponent> build() {
    _compView_0 = import45.ViewMaterialSelectItemComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, import36.interpolateString2('', 'selectItem', ' ', import46.MaterialSelectItemComponent.hostClass, ''));
    addShimC(_el_0);
    _MaterialSelectItemComponent_0_5 = import46.MaterialSelectItemComponent(_el_0, import25.unsafeCast<ViewPrintParamsComponent0>(parentView)._MaterialDropdownSelectComponent_28_5, import25.unsafeCast<ViewPrintParamsComponent0>(parentView)._MaterialDropdownSelectComponent_28_5, _compView_0, null);
    final doc = import24.document;
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
    if ((((identical(token, import43.SelectionItem) || identical(token, import38.HasDisabled)) || identical(token, import41.HasRenderer)) && (nodeIndex <= 2))) {
      return _MaterialSelectItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_idx = import25.unsafeCast<int>(locals['index']);
    final local_item = import25.unsafeCast<String>(locals['\$implicit']);
    final currVal_0 = (local_idx == _ctx.glucMaxIdx);
    if (import44.checkBinding(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_0_5.selected = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_2.updateText(import36.interpolateString0(local_item));
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialSelectItemComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_0_0($event) {
    final local_idx = import25.unsafeCast<int>(locals['index']);
    final _ctx = ctx;
    _ctx.glucMaxIdx = local_idx;
  }
}

AppView<void> viewFactory_PrintParamsComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewPrintParamsComponent3(parentView, parentIndex);
}

class _ViewPrintParamsComponent4 extends AppView<import2.PrintParamsComponent> {
  final import4.TextBinding _textBinding_2 = import4.TextBinding();
  import45.ViewMaterialSelectItemComponent0 _compView_0;
  import46.MaterialSelectItemComponent _MaterialSelectItemComponent_0_5;
  var _expr_0;
  _ViewPrintParamsComponent4(AppView<dynamic> parentView, int parentIndex) : super(import22.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.PrintParamsComponent> build() {
    _compView_0 = import45.ViewMaterialSelectItemComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, import36.interpolateString2('', 'selectItem', ' ', import46.MaterialSelectItemComponent.hostClass, ''));
    addShimC(_el_0);
    _MaterialSelectItemComponent_0_5 = import46.MaterialSelectItemComponent(_el_0, import25.unsafeCast<ViewPrintParamsComponent0>(parentView)._MaterialDropdownSelectComponent_33_5, import25.unsafeCast<ViewPrintParamsComponent0>(parentView)._MaterialDropdownSelectComponent_33_5, _compView_0, null);
    final doc = import24.document;
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
    if ((((identical(token, import43.SelectionItem) || identical(token, import38.HasDisabled)) || identical(token, import41.HasRenderer)) && (nodeIndex <= 2))) {
      return _MaterialSelectItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_idx = import25.unsafeCast<int>(locals['index']);
    final local_item = import25.unsafeCast<String>(locals['\$implicit']);
    final currVal_0 = (local_idx == _ctx.basalPrecisionIdx);
    if (import44.checkBinding(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_0_5.selected = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_2.updateText(import36.interpolateString0(local_item));
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialSelectItemComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_0_0($event) {
    final local_idx = import25.unsafeCast<int>(locals['index']);
    final _ctx = ctx;
    _ctx.basalPrecisionIdx = local_idx;
  }
}

AppView<void> viewFactory_PrintParamsComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewPrintParamsComponent4(parentView, parentIndex);
}

class _ViewPrintParamsComponent5 extends AppView<import2.PrintParamsComponent> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  import7.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import8.MaterialButtonComponent _MaterialButtonComponent_0_6;
  bool _expr_0;
  _ViewPrintParamsComponent5(AppView<dynamic> parentView, int parentIndex) : super(import22.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.PrintParamsComponent> build() {
    _compView_0 = import7.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import25.isDevMode
        ? import28.debugInjectorWrap(import31.AcxDarkTheme, () {
            return import31.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import32.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import31.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import32.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import8.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_textBinding_1.element]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import31.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import8.MaterialButtonComponent) || identical(token, import37.ButtonDirective)) || identical(token, import38.HasDisabled))) {
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
    final local_item = import25.unsafeCast<import48.PeriodShift>(locals['\$implicit']);
    changed = false;
    final currVal_0 = (local_item == _ctx.periodShift);
    if (import44.checkBinding(_expr_0, currVal_0)) {
      _MaterialButtonComponent_0_6.raised = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_1.updateText(import36.interpolateString0(local_item.title));
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }

  void _handle_trigger_0_0($event) {
    final local_item = import25.unsafeCast<import48.PeriodShift>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.periodShift = local_item;
  }
}

AppView<void> viewFactory_PrintParamsComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewPrintParamsComponent5(parentView, parentIndex);
}

final List<dynamic> styles$PrintParamsComponentHost = const [];

class _ViewPrintParamsComponentHost0 extends AppView<import2.PrintParamsComponent> {
  ViewPrintParamsComponent0 _compView_0;
  import2.PrintParamsComponent _PrintParamsComponent_0_5;
  _ViewPrintParamsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import22.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.PrintParamsComponent> build() {
    _compView_0 = ViewPrintParamsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _PrintParamsComponent_0_5 = import2.PrintParamsComponent();
    _compView_0.create(_PrintParamsComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _PrintParamsComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import44.AppViewUtils.throwOnChanges) && firstCheck)) {
      _PrintParamsComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.PrintParamsComponent> viewFactory_PrintParamsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewPrintParamsComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(PrintParamsComponent, PrintParamsComponentNgFactory);
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
