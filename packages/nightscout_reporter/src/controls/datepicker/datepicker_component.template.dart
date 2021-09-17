// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'datepicker_component.dart';
export 'datepicker_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'month_component.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_components/angular_components.template.dart' as _ref2;
import 'package:angular_components/material_input/material_input.template.dart' as _ref3;
import 'package:angular_components/material_toggle/material_toggle.template.dart' as _ref4;
import 'package:nightscout_reporter/src/controls/datepicker/datepicker_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'datepicker_component.dart' as import2;
import 'package:intl/intl.dart' as import3;
import 'package:angular/src/runtime/text_binding.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular_components/material_button/material_button.template.dart' as import7;
import 'package:angular_components/material_button/material_button.dart' as import8;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as import9;
import 'package:angular_components/laminate/components/modal/modal.dart' as import10;
import 'package:angular_components/material_dialog/material_dialog.template.dart' as import11;
import 'package:angular_components/material_dialog/material_dialog.dart' as import12;
import 'package:angular_components/material_icon/material_icon.template.dart' as import13;
import 'package:angular_components/material_icon/material_icon.dart' as import14;
import 'package:angular_components/material_input/material_input.template.dart' as import15;
import 'package:angular_components/material_input/deferred_validator.dart' as import16;
import 'package:angular_forms/src/directives/ng_model.dart' as import17;
import 'package:angular_components/material_input/material_input.dart' as import18;
import 'package:angular_components/material_input/material_input_default_value_accessor.dart' as import19;
import 'package:angular/src/common/directives/ng_for.dart' as import20;
import 'dart:html' as import21;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import22;
import 'package:angular/src/core/linker/view_type.dart' as import23;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import25;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import27;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/di/errors.dart' as import29;
import 'package:angular_components/theme/dark_theme.dart' as import30;
import 'package:angular/src/core/di/opaque_token.dart' as import31;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import32;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import33;
import 'package:angular_components/button_decorator/button_decorator.dart' as import34;
import 'package:angular_components/interfaces/has_disabled.dart' as import35;
import 'package:angular_forms/src/directives/ng_control.dart' as import36;
import 'package:angular_components/material_input/base_material_input.dart' as import37;
import 'package:angular_components/utils/angular/reference/reference.dart' as import38;
import 'package:angular_components/focus/focus_interface.dart' as import39;
import 'package:angular_components/content/deferred_content_aware.dart' as import40;
import 'package:angular/src/core/linker/app_view_utils.dart' as import41;
import 'package:angular/src/runtime/interpolate.dart' as import42;
import 'month_component.template.dart' as import43;
import 'month_component.dart' as import44;

final List<dynamic> styles$DatepickerComponent = [import0.styles];

class ViewDatepickerComponent0 extends AppView<import2.DatepickerComponent> {
  static final String _message_0 = import3.Intl.message('Von', desc: 'datepicker label from');
  static final String _message_1 = import3.Intl.message('Bis', desc: 'datepicker label to');
  static final String _message_2 = import3.Intl.message('Ok', desc: 'buttonlabel for ok in control datepicker');
  final import4.TextBinding _textBinding_6 = import4.TextBinding();
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  import7.ViewMaterialButtonComponent0 _compView_4;
  dynamic _AcxDarkTheme_4_5;
  import8.MaterialButtonComponent _MaterialButtonComponent_4_6;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  import9.ViewModalComponent0 _compView_8;
  import10.ModalComponent _ModalComponent_8_5;
  import11.ViewMaterialDialogComponent0 _compView_9;
  import12.MaterialDialogComponent _MaterialDialogComponent_9_5;
  ViewContainer _appEl_12;
  NgIf _NgIf_12_9;
  ViewContainer _appEl_13;
  NgIf _NgIf_13_9;
  ViewContainer _appEl_14;
  NgIf _NgIf_14_9;
  import7.ViewMaterialButtonComponent0 _compView_15;
  dynamic _AcxDarkTheme_15_5;
  import8.MaterialButtonComponent _MaterialButtonComponent_15_6;
  import13.ViewMaterialIconComponent0 _compView_16;
  import14.MaterialIconComponent _MaterialIconComponent_16_5;
  import15.ViewMaterialInputComponent0 _compView_19;
  import16.DeferredValidator _DeferredValidator_19_5;
  List<dynamic> _NgValidators_19_6;
  import17.NgModel _NgModel_19_7;
  import18.MaterialInputComponent _MaterialInputComponent_19_9;
  import19.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_19_11;
  import15.ViewMaterialInputComponent0 _compView_20;
  import16.DeferredValidator _DeferredValidator_20_5;
  List<dynamic> _NgValidators_20_6;
  import17.NgModel _NgModel_20_7;
  import18.MaterialInputComponent _MaterialInputComponent_20_9;
  import19.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_20_11;
  ViewContainer _appEl_21;
  NgIf _NgIf_21_9;
  ViewContainer _appEl_24;
  import20.NgFor _NgFor_24_9;
  ViewContainer _appEl_26;
  NgIf _NgIf_26_9;
  import7.ViewMaterialButtonComponent0 _compView_27;
  dynamic _AcxDarkTheme_27_5;
  import8.MaterialButtonComponent _MaterialButtonComponent_27_6;
  import13.ViewMaterialIconComponent0 _compView_28;
  import14.MaterialIconComponent _MaterialIconComponent_28_5;
  String _expr_1;
  String _expr_2;
  bool _expr_4;
  String _expr_5;
  String _expr_13;
  String _expr_17;
  var _expr_19;
  import21.DivElement _el_1;
  import21.Element _el_4;
  import21.Element _el_9;
  static import22.ComponentStyles _componentStyles;
  ViewDatepickerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import23.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import21.document.createElement('datepicker');
  }
  static String get _debugComponentUrl {
    return (import25.isDevMode ? 'asset:nightscout_reporter/lib/src/controls/datepicker/datepicker_component.dart' : null);
  }

  @override
  ComponentRef<import2.DatepickerComponent> build() {
    final _rootEl = rootEl;
    final import21.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import27.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_DatepickerComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final doc = import21.document;
    _el_1 = import27.appendDiv(doc, parentRenderNode);
    addShimC(_el_1);
    final _el_2 = import27.appendElement(doc, _el_1, 'pre');
    this.updateChildClass(_el_2, 'infotext');
    addShimE(_el_2);
    final _text_3 = import27.appendText(_el_2, 'Auswahl des Zeitraums, für den\r\ndie PDFs erstellt werden sollen');
    _compView_4 = import7.ViewMaterialButtonComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    _el_1.append(_el_4);
    addShimC(_el_4);
    _AcxDarkTheme_4_5 = (import25.isDevMode
        ? import29.debugInjectorWrap(import30.AcxDarkTheme, () {
            return import30.AcxDarkTheme(parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import30.AcxDarkTheme(parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_4_6 = import8.MaterialButtonComponent(_el_4, _AcxDarkTheme_4_5, _compView_4, null);
    final _el_5 = doc.createElement('div');
    import27.setAttribute(_el_5, 'main', '');
    addShimC(_el_5);
    _el_5.append(_textBinding_6.element);
    final _anchor_7 = import27.createAnchor();
    _appEl_7 = ViewContainer(7, 4, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, viewFactory_DatepickerComponent2);
    _NgIf_7_9 = NgIf(_appEl_7, _TemplateRef_7_8);
    _compView_4.create(_MaterialButtonComponent_4_6, [
      [_el_5, _appEl_7]
    ]);
    _compView_8 = import9.ViewModalComponent0(this, 8);
    final _el_8 = _compView_8.rootEl;
    parentRenderNode.append(_el_8);
    addShimC(_el_8);
    _ModalComponent_8_5 = (import25.isDevMode
        ? import29.debugInjectorWrap(import10.ModalComponent, () {
            return import10.ModalComponent(parentView.injectorGet(import32.OverlayService, viewData.parentIndex), _el_8, parentView.injectorGet(import33.DomService, viewData.parentIndex), parentView.injectorGetOptional(import10.Modal, viewData.parentIndex), parentView.injectorGetOptional(import10.GlobalModalStack, viewData.parentIndex));
          })
        : import10.ModalComponent(parentView.injectorGet(import32.OverlayService, viewData.parentIndex), _el_8, parentView.injectorGet(import33.DomService, viewData.parentIndex), parentView.injectorGetOptional(import10.Modal, viewData.parentIndex), parentView.injectorGetOptional(import10.GlobalModalStack, viewData.parentIndex)));
    _compView_9 = import11.ViewMaterialDialogComponent0(this, 9);
    _el_9 = _compView_9.rootEl;
    import27.setAttribute(_el_9, 'headered', '');
    addShimC(_el_9);
    _MaterialDialogComponent_9_5 = (import25.isDevMode
        ? import29.debugInjectorWrap(import12.MaterialDialogComponent, () {
            return import12.MaterialDialogComponent(_el_9, parentView.injectorGet(import33.DomService, viewData.parentIndex), _compView_9, _ModalComponent_8_5);
          })
        : import12.MaterialDialogComponent(_el_9, parentView.injectorGet(import33.DomService, viewData.parentIndex), _compView_9, _ModalComponent_8_5));
    final _el_10 = doc.createElement('div');
    import27.setAttribute(_el_10, 'header', '');
    addShimC(_el_10);
    final _el_11 = import27.appendDiv(doc, _el_10);
    addShimC(_el_11);
    final _anchor_12 = import27.appendAnchor(_el_11);
    _appEl_12 = ViewContainer(12, 11, this, _anchor_12);
    TemplateRef _TemplateRef_12_8 = TemplateRef(_appEl_12, viewFactory_DatepickerComponent3);
    _NgIf_12_9 = NgIf(_appEl_12, _TemplateRef_12_8);
    final _anchor_13 = import27.appendAnchor(_el_11);
    _appEl_13 = ViewContainer(13, 11, this, _anchor_13);
    TemplateRef _TemplateRef_13_8 = TemplateRef(_appEl_13, viewFactory_DatepickerComponent4);
    _NgIf_13_9 = NgIf(_appEl_13, _TemplateRef_13_8);
    final _anchor_14 = import27.appendAnchor(_el_11);
    _appEl_14 = ViewContainer(14, 11, this, _anchor_14);
    TemplateRef _TemplateRef_14_8 = TemplateRef(_appEl_14, viewFactory_DatepickerComponent5);
    _NgIf_14_9 = NgIf(_appEl_14, _TemplateRef_14_8);
    _compView_15 = import7.ViewMaterialButtonComponent0(this, 15);
    final _el_15 = _compView_15.rootEl;
    _el_10.append(_el_15);
    import27.setAttribute(_el_15, 'icon', '');
    addShimC(_el_15);
    _AcxDarkTheme_15_5 = (import25.isDevMode
        ? import29.debugInjectorWrap(import30.AcxDarkTheme, () {
            return import30.AcxDarkTheme(parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import30.AcxDarkTheme(parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_15_6 = import8.MaterialButtonComponent(_el_15, _AcxDarkTheme_15_5, _compView_15, null);
    _compView_16 = import13.ViewMaterialIconComponent0(this, 16);
    final _el_16 = _compView_16.rootEl;
    import27.setAttribute(_el_16, 'icon', 'close');
    addShimC(_el_16);
    _MaterialIconComponent_16_5 = import14.MaterialIconComponent(_el_16);
    _compView_16.create0(_MaterialIconComponent_16_5);
    _compView_15.create(_MaterialButtonComponent_15_6, [
      [_el_16]
    ]);
    final _el_17 = doc.createElement('div');
    this.updateChildClass(_el_17, 'root');
    addShimC(_el_17);
    final _el_18 = import27.appendDiv(doc, _el_17);
    this.updateChildClass(_el_18, 'editcontrols');
    addShimC(_el_18);
    _compView_19 = import15.ViewMaterialInputComponent0(this, 19);
    final _el_19 = _compView_19.rootEl;
    _el_18.append(_el_19);
    import27.setAttribute(_el_19, 'floatingLabel', '');
    import27.setAttribute(_el_19, 'label', _message_0);
    addShimC(_el_19);
    _DeferredValidator_19_5 = import16.DeferredValidator();
    _NgValidators_19_6 = [_DeferredValidator_19_5];
    _NgModel_19_7 = import17.NgModel(_NgValidators_19_6, null);
    _MaterialInputComponent_19_9 = import18.MaterialInputComponent(null, null, null, _NgModel_19_7, _compView_19, _DeferredValidator_19_5);
    _MaterialInputDefaultValueAccessor_19_11 = import19.MaterialInputDefaultValueAccessor(_MaterialInputComponent_19_9, _NgModel_19_7);
    _compView_19.create(_MaterialInputComponent_19_9, [const [], const []]);
    _compView_20 = import15.ViewMaterialInputComponent0(this, 20);
    final _el_20 = _compView_20.rootEl;
    _el_18.append(_el_20);
    import27.setAttribute(_el_20, 'floatingLabel', '');
    import27.setAttribute(_el_20, 'label', _message_1);
    addShimC(_el_20);
    _DeferredValidator_20_5 = import16.DeferredValidator();
    _NgValidators_20_6 = [_DeferredValidator_20_5];
    _NgModel_20_7 = import17.NgModel(_NgValidators_20_6, null);
    _MaterialInputComponent_20_9 = import18.MaterialInputComponent(null, null, null, _NgModel_20_7, _compView_20, _DeferredValidator_20_5);
    _MaterialInputDefaultValueAccessor_20_11 = import19.MaterialInputDefaultValueAccessor(_MaterialInputComponent_20_9, _NgModel_20_7);
    _compView_20.create(_MaterialInputComponent_20_9, [const [], const []]);
    final _anchor_21 = import27.appendAnchor(_el_17);
    _appEl_21 = ViewContainer(21, 17, this, _anchor_21);
    TemplateRef _TemplateRef_21_8 = TemplateRef(_appEl_21, viewFactory_DatepickerComponent6);
    _NgIf_21_9 = NgIf(_appEl_21, _TemplateRef_21_8);
    final _el_22 = doc.createElement('div');
    import27.setAttribute(_el_22, 'footer', '');
    addShimC(_el_22);
    final _el_23 = import27.appendDiv(doc, _el_22);
    this.updateChildClass(_el_23, 'shortcuts');
    addShimC(_el_23);
    final _anchor_24 = import27.appendAnchor(_el_23);
    _appEl_24 = ViewContainer(24, 23, this, _anchor_24);
    TemplateRef _TemplateRef_24_8 = TemplateRef(_appEl_24, viewFactory_DatepickerComponent7);
    _NgFor_24_9 = import20.NgFor(_appEl_24, _TemplateRef_24_8);
    final _el_25 = import27.appendDiv(doc, _el_22);
    this.updateChildClass(_el_25, 'controls');
    addShimC(_el_25);
    final _anchor_26 = import27.appendAnchor(_el_25);
    _appEl_26 = ViewContainer(26, 25, this, _anchor_26);
    TemplateRef _TemplateRef_26_8 = TemplateRef(_appEl_26, viewFactory_DatepickerComponent10);
    _NgIf_26_9 = NgIf(_appEl_26, _TemplateRef_26_8);
    _compView_27 = import7.ViewMaterialButtonComponent0(this, 27);
    final _el_27 = _compView_27.rootEl;
    _el_25.append(_el_27);
    this.updateChildClassNonHtml(_el_27, 'iconButton ok');
    addShimC(_el_27);
    _AcxDarkTheme_27_5 = (import25.isDevMode
        ? import29.debugInjectorWrap(import30.AcxDarkTheme, () {
            return import30.AcxDarkTheme(parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import30.AcxDarkTheme(parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_27_6 = import8.MaterialButtonComponent(_el_27, _AcxDarkTheme_27_5, _compView_27, null);
    _compView_28 = import13.ViewMaterialIconComponent0(this, 28);
    final _el_28 = _compView_28.rootEl;
    import27.setAttribute(_el_28, 'icon', 'done');
    addShimC(_el_28);
    _MaterialIconComponent_28_5 = import14.MaterialIconComponent(_el_28);
    _compView_28.create0(_MaterialIconComponent_28_5);
    final _text_29 = import27.createText(_message_2);
    _compView_27.create(_MaterialButtonComponent_27_6, [
      [_el_28, _text_29]
    ]);
    _compView_9.create(_MaterialDialogComponent_9_5, [
      [_el_10],
      [_el_17],
      [_el_22]
    ]);
    _compView_8.create(_ModalComponent_8_5, [
      [_el_9]
    ]);
    final subscription_0 = _MaterialButtonComponent_4_6.trigger.listen(eventHandler1(_handle_trigger_4_0));
    final subscription_1 = _MaterialButtonComponent_15_6.trigger.listen(eventHandler1(_handle_trigger_15_0));
    final subscription_2 = _NgModel_19_7.update.listen(eventHandler1(_handle_ngModelChange_19_1));
    final subscription_3 = _MaterialInputComponent_19_9.onFocus.listen(eventHandler1(_handle_focus_19_0));
    final subscription_4 = _NgModel_20_7.update.listen(eventHandler1(_handle_ngModelChange_20_1));
    final subscription_5 = _MaterialInputComponent_20_9.onFocus.listen(eventHandler1(_handle_focus_20_0));
    final subscription_6 = _MaterialButtonComponent_27_6.trigger.listen(eventHandler1(_handle_trigger_27_0));
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5, subscription_6]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((4 <= nodeIndex) && (nodeIndex <= 7))) {
      if (identical(token, import30.AcxDarkTheme)) {
        return _AcxDarkTheme_4_5;
      }
      if (((identical(token, import8.MaterialButtonComponent) || identical(token, import34.ButtonDirective)) || identical(token, import35.HasDisabled))) {
        return _MaterialButtonComponent_4_6;
      }
    }
    if (((8 <= nodeIndex) && (nodeIndex <= 29))) {
      if (((15 <= nodeIndex) && (nodeIndex <= 16))) {
        if (identical(token, import30.AcxDarkTheme)) {
          return _AcxDarkTheme_15_5;
        }
        if (((identical(token, import8.MaterialButtonComponent) || identical(token, import34.ButtonDirective)) || identical(token, import35.HasDisabled))) {
          return _MaterialButtonComponent_15_6;
        }
      }
      if ((19 == nodeIndex)) {
        if (identical(token, import16.DeferredValidator)) {
          return _DeferredValidator_19_5;
        }
        if (identical(token, const import31.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_19_6;
        }
        if ((identical(token, import17.NgModel) || identical(token, import36.NgControl))) {
          return _NgModel_19_7;
        }
        if (((((identical(token, import18.MaterialInputComponent) || identical(token, import37.BaseMaterialInput)) || identical(token, import38.ReferenceDirective)) || identical(token, import39.Focusable)) || identical(token, import35.HasDisabled))) {
          return _MaterialInputComponent_19_9;
        }
      }
      if ((20 == nodeIndex)) {
        if (identical(token, import16.DeferredValidator)) {
          return _DeferredValidator_20_5;
        }
        if (identical(token, const import31.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_20_6;
        }
        if ((identical(token, import17.NgModel) || identical(token, import36.NgControl))) {
          return _NgModel_20_7;
        }
        if (((((identical(token, import18.MaterialInputComponent) || identical(token, import37.BaseMaterialInput)) || identical(token, import38.ReferenceDirective)) || identical(token, import39.Focusable)) || identical(token, import35.HasDisabled))) {
          return _MaterialInputComponent_20_9;
        }
      }
      if ((27 <= nodeIndex)) {
        if (identical(token, import30.AcxDarkTheme)) {
          return _AcxDarkTheme_27_5;
        }
        if (((identical(token, import8.MaterialButtonComponent) || identical(token, import34.ButtonDirective)) || identical(token, import35.HasDisabled))) {
          return _MaterialButtonComponent_27_6;
        }
      }
      if (((identical(token, import10.ModalComponent) || identical(token, import40.DeferredContentAware)) || identical(token, import10.Modal))) {
        return _ModalComponent_8_5;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    _NgIf_0_9.ngIf = _ctx.showLabel;
    changed = false;
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    _NgIf_7_9.ngIf = (_ctx.period.dowActiveText != '');
    changed = false;
    final currVal_4 = _ctx.isDialogOpen;
    if (import41.checkBinding(_expr_4, currVal_4)) {
      _ModalComponent_8_5.visible = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    if (changed) {
      _compView_8.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    _NgIf_12_9.ngIf = (!_ctx.period.isEmpty);
    _NgIf_13_9.ngIf = _ctx.period.isEmpty;
    _NgIf_14_9.ngIf = _ctx.period.isEmpty;
    changed = false;
    if (changed) {
      _compView_15.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_16_5.icon = 'close';
      changed = true;
    }
    if (changed) {
      _compView_16.markAsCheckOnce();
    }
    changed = false;
    _NgModel_19_7.model = _ctx.startDate;
    _NgModel_19_7.ngAfterChanges();
    if (((!import41.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_19_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_19_9.label = _message_0;
      changed = true;
      _MaterialInputComponent_19_9.floatingLabel = true;
      changed = true;
    }
    final currVal_13 = (_ctx.isStartValid ? '' : _ctx.msgStartIncorrect);
    if (import41.checkBinding(_expr_13, currVal_13)) {
      _MaterialInputComponent_19_9.error = currVal_13;
      changed = true;
      _expr_13 = currVal_13;
    }
    if (changed) {
      _compView_19.markAsCheckOnce();
    }
    changed = false;
    _NgModel_20_7.model = _ctx.endDate;
    _NgModel_20_7.ngAfterChanges();
    if (((!import41.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_20_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_20_9.label = _message_1;
      changed = true;
      _MaterialInputComponent_20_9.floatingLabel = true;
      changed = true;
    }
    final currVal_17 = (_ctx.isEndValid ? '' : _ctx.msgEndIncorrect);
    if (import41.checkBinding(_expr_17, currVal_17)) {
      _MaterialInputComponent_20_9.error = currVal_17;
      changed = true;
      _expr_17 = currVal_17;
    }
    if (changed) {
      _compView_20.markAsCheckOnce();
    }
    _NgIf_21_9.ngIf = (_ctx.month != null);
    final currVal_19 = _ctx.period.list;
    if (import41.checkBinding(_expr_19, currVal_19)) {
      _NgFor_24_9.ngForOf = currVal_19;
      _expr_19 = currVal_19;
    }
    if ((!import41.AppViewUtils.throwOnChanges)) {
      _NgFor_24_9.ngDoCheck();
    }
    _NgIf_26_9.ngIf = ((_ctx.period.entryKey != null) && (_ctx.period.entryKey != 'today'));
    changed = false;
    if (changed) {
      _compView_27.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_28_5.icon = 'done';
      changed = true;
    }
    if (changed) {
      _compView_28.markAsCheckOnce();
    }
    _appEl_0.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    _appEl_12.detectChangesInNestedViews();
    _appEl_13.detectChangesInNestedViews();
    _appEl_14.detectChangesInNestedViews();
    _appEl_21.detectChangesInNestedViews();
    _appEl_24.detectChangesInNestedViews();
    _appEl_26.detectChangesInNestedViews();
    if ((!import41.AppViewUtils.throwOnChanges)) {
      _MaterialDialogComponent_9_5.ngAfterContentChecked();
    }
    final currVal_1 = _ctx.infoClass('');
    if (import41.checkBinding(_expr_1, currVal_1)) {
      this.updateChildClass(_el_1, currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.period.isEmpty ? 'dpBtn empty' : 'dpBtn');
    if (import41.checkBinding(_expr_2, currVal_2)) {
      _compView_4.updateChildClassNonHtml(_el_4, currVal_2);
      _expr_2 = currVal_2;
    }
    _compView_4.detectHostChanges(firstCheck);
    _textBinding_6.updateText(import42.interpolateString0(_ctx.periodLabelMain));
    _compView_8.detectHostChanges(firstCheck);
    final currVal_5 = (_ctx.period.isEmpty ? 'headered-dialog empty' : 'headered-dialog');
    if (import41.checkBinding(_expr_5, currVal_5)) {
      _compView_9.updateChildClassNonHtml(_el_9, currVal_5);
      _expr_5 = currVal_5;
    }
    _compView_9.detectHostChanges(firstCheck);
    _compView_15.detectHostChanges(firstCheck);
    _compView_27.detectHostChanges(firstCheck);
    _compView_4.detectChanges();
    _compView_8.detectChanges();
    _compView_9.detectChanges();
    _compView_15.detectChanges();
    _compView_16.detectChanges();
    _compView_19.detectChanges();
    _compView_20.detectChanges();
    _compView_27.detectChanges();
    _compView_28.detectChanges();
    if ((!import41.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_19_9.ngAfterViewInit();
        _MaterialInputComponent_20_9.ngAfterViewInit();
        _ModalComponent_8_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_7.destroyNestedViews();
    _appEl_12.destroyNestedViews();
    _appEl_13.destroyNestedViews();
    _appEl_14.destroyNestedViews();
    _appEl_21.destroyNestedViews();
    _appEl_24.destroyNestedViews();
    _appEl_26.destroyNestedViews();
    _compView_4.destroyInternalState();
    _compView_8.destroyInternalState();
    _compView_9.destroyInternalState();
    _compView_15.destroyInternalState();
    _compView_16.destroyInternalState();
    _compView_19.destroyInternalState();
    _compView_20.destroyInternalState();
    _compView_27.destroyInternalState();
    _compView_28.destroyInternalState();
    _MaterialInputComponent_19_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_19_11.ngOnDestroy();
    _MaterialInputComponent_20_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_20_11.ngOnDestroy();
    _MaterialDialogComponent_9_5.ngOnDestroy();
    _ModalComponent_8_5.ngOnDestroy();
  }

  void _handle_trigger_4_0($event) {
    final _ctx = ctx;
    _ctx.onClick('loadedperiod');
  }

  void _handle_trigger_15_0($event) {
    final _ctx = ctx;
    _ctx.onClick('close');
  }

  void _handle_focus_19_0($event) {
    final _ctx = ctx;
    _ctx.setMonth(_ctx.period.start);
  }

  void _handle_ngModelChange_19_1($event) {
    final _ctx = ctx;
    _ctx.startDate = $event;
  }

  void _handle_focus_20_0($event) {
    final _ctx = ctx;
    _ctx.setMonth(_ctx.period.end);
  }

  void _handle_ngModelChange_20_1($event) {
    final _ctx = ctx;
    _ctx.endDate = $event;
  }

  void _handle_trigger_27_0($event) {
    final _ctx = ctx;
    _ctx.onClick('save');
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import22.ComponentStyles.scoped(styles$DatepickerComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.DatepickerComponent> _DatepickerComponentNgFactory = const ComponentFactory('datepicker', viewFactory_DatepickerComponentHost0);
ComponentFactory<import2.DatepickerComponent> get DatepickerComponentNgFactory {
  return _DatepickerComponentNgFactory;
}

class _ViewDatepickerComponent1 extends AppView<import2.DatepickerComponent> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  _ViewDatepickerComponent1(AppView<dynamic> parentView, int parentIndex) : super(import23.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DatepickerComponent> build() {
    final doc = import21.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'floating');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import42.interpolateString0(_ctx.periodFloatingLabel));
  }
}

AppView<void> viewFactory_DatepickerComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDatepickerComponent1(parentView, parentIndex);
}

class _ViewDatepickerComponent2 extends AppView<import2.DatepickerComponent> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  _ViewDatepickerComponent2(AppView<dynamic> parentView, int parentIndex) : super(import23.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DatepickerComponent> build() {
    final doc = import21.document;
    final _el_0 = doc.createElement('div');
    import27.setAttribute(_el_0, 'sub', '');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import42.interpolateString0(_ctx.periodLabelSub));
  }
}

AppView<void> viewFactory_DatepickerComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDatepickerComponent2(parentView, parentIndex);
}

class _ViewDatepickerComponent3 extends AppView<import2.DatepickerComponent> {
  static final String _message_0 = import3.Intl.message('Zeitraum', desc: 'title for datepicker dialog');
  _ViewDatepickerComponent3(AppView<dynamic> parentView, int parentIndex) : super(import23.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DatepickerComponent> build() {
    final doc = import21.document;
    final _el_0 = doc.createElement('h1');
    addShimE(_el_0);
    final _text_1 = import27.appendText(_el_0, _message_0);
    init1(_el_0);
  }
}

AppView<void> viewFactory_DatepickerComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDatepickerComponent3(parentView, parentIndex);
}

class _ViewDatepickerComponent4 extends AppView<import2.DatepickerComponent> {
  static final String _message_0 = import3.Intl.message('Der Zeitraum enthält keine auswertbaren Tage', desc: 'title for datepicker dialog when period empty');
  _ViewDatepickerComponent4(AppView<dynamic> parentView, int parentIndex) : super(import23.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DatepickerComponent> build() {
    final doc = import21.document;
    final _el_0 = doc.createElement('h1');
    addShimE(_el_0);
    final _text_1 = import27.appendText(_el_0, _message_0);
    init1(_el_0);
  }
}

AppView<void> viewFactory_DatepickerComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDatepickerComponent4(parentView, parentIndex);
}

class _ViewDatepickerComponent5 extends AppView<import2.DatepickerComponent> {
  static final String _message_0 = import3.Intl.message('Bitte überprüfe die Aktivierung der Wochentage unter dem Monat', desc: 'subtitle for datepicker dialog when period empty');
  _ViewDatepickerComponent5(AppView<dynamic> parentView, int parentIndex) : super(import23.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DatepickerComponent> build() {
    final doc = import21.document;
    final _el_0 = doc.createElement('p');
    addShimE(_el_0);
    final _text_1 = import27.appendText(_el_0, _message_0);
    init1(_el_0);
  }
}

AppView<void> viewFactory_DatepickerComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDatepickerComponent5(parentView, parentIndex);
}

class _ViewDatepickerComponent6 extends AppView<import2.DatepickerComponent> {
  import7.ViewMaterialButtonComponent0 _compView_1;
  dynamic _AcxDarkTheme_1_5;
  import8.MaterialButtonComponent _MaterialButtonComponent_1_6;
  import13.ViewMaterialIconComponent0 _compView_2;
  import14.MaterialIconComponent _MaterialIconComponent_2_5;
  import43.ViewMonthComponent0 _compView_3;
  import44.MonthComponent _MonthComponent_3_5;
  import7.ViewMaterialButtonComponent0 _compView_4;
  dynamic _AcxDarkTheme_4_5;
  import8.MaterialButtonComponent _MaterialButtonComponent_4_6;
  import13.ViewMaterialIconComponent0 _compView_5;
  import14.MaterialIconComponent _MaterialIconComponent_5_5;
  bool _expr_0;
  bool _expr_2;
  var _expr_3;
  var _expr_4;
  bool _expr_5;
  _ViewDatepickerComponent6(AppView<dynamic> parentView, int parentIndex) : super(import23.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DatepickerComponent> build() {
    final doc = import21.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'month');
    addShimC(_el_0);
    _compView_1 = import7.ViewMaterialButtonComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    this.updateChildClassNonHtml(_el_1, 'prev');
    addShimC(_el_1);
    _AcxDarkTheme_1_5 = (import25.isDevMode
        ? import29.debugInjectorWrap(import30.AcxDarkTheme, () {
            return import30.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import30.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_1_6 = import8.MaterialButtonComponent(_el_1, _AcxDarkTheme_1_5, _compView_1, null);
    _compView_2 = import13.ViewMaterialIconComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    import27.setAttribute(_el_2, 'icon', 'chevron_left');
    addShimC(_el_2);
    _MaterialIconComponent_2_5 = import14.MaterialIconComponent(_el_2);
    _compView_2.create0(_MaterialIconComponent_2_5);
    _compView_1.create(_MaterialButtonComponent_1_6, [
      [_el_2]
    ]);
    _compView_3 = import43.ViewMonthComponent0(this, 3);
    final _el_3 = _compView_3.rootEl;
    _el_0.append(_el_3);
    addShimC(_el_3);
    _MonthComponent_3_5 = import44.MonthComponent();
    _compView_3.create0(_MonthComponent_3_5);
    _compView_4 = import7.ViewMaterialButtonComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_0.append(_el_4);
    this.updateChildClassNonHtml(_el_4, 'next');
    addShimC(_el_4);
    _AcxDarkTheme_4_5 = (import25.isDevMode
        ? import29.debugInjectorWrap(import30.AcxDarkTheme, () {
            return import30.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import30.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_4_6 = import8.MaterialButtonComponent(_el_4, _AcxDarkTheme_4_5, _compView_4, null);
    _compView_5 = import13.ViewMaterialIconComponent0(this, 5);
    final _el_5 = _compView_5.rootEl;
    import27.setAttribute(_el_5, 'icon', 'chevron_right');
    addShimC(_el_5);
    _MaterialIconComponent_5_5 = import14.MaterialIconComponent(_el_5);
    _compView_5.create0(_MaterialIconComponent_5_5);
    _compView_4.create(_MaterialButtonComponent_4_6, [
      [_el_5]
    ]);
    final subscription_0 = _MaterialButtonComponent_1_6.trigger.listen(eventHandler1(_handle_trigger_1_0));
    final subscription_1 = _MaterialButtonComponent_4_6.trigger.listen(eventHandler1(_handle_trigger_4_0));
    init([_el_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((1 <= nodeIndex) && (nodeIndex <= 2))) {
      if (identical(token, import30.AcxDarkTheme)) {
        return _AcxDarkTheme_1_5;
      }
      if (((identical(token, import8.MaterialButtonComponent) || identical(token, import34.ButtonDirective)) || identical(token, import35.HasDisabled))) {
        return _MaterialButtonComponent_1_6;
      }
    }
    if (((4 <= nodeIndex) && (nodeIndex <= 5))) {
      if (identical(token, import30.AcxDarkTheme)) {
        return _AcxDarkTheme_4_5;
      }
      if (((identical(token, import8.MaterialButtonComponent) || identical(token, import34.ButtonDirective)) || identical(token, import35.HasDisabled))) {
        return _MaterialButtonComponent_4_6;
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
    final currVal_0 = _ctx.isMinMonth;
    if (import41.checkBinding(_expr_0, currVal_0)) {
      _MaterialButtonComponent_1_6.disabled = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_2_5.icon = 'chevron_left';
      changed = true;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    final currVal_2 = _ctx.isLocal;
    if (import41.checkBinding(_expr_2, currVal_2)) {
      _MonthComponent_3_5.isLocal = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.month;
    if (import41.checkBinding(_expr_3, currVal_3)) {
      _MonthComponent_3_5.date = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.period;
    if (import41.checkBinding(_expr_4, currVal_4)) {
      _MonthComponent_3_5.period = currVal_4;
      _expr_4 = currVal_4;
    }
    changed = false;
    final currVal_5 = _ctx.isMaxMonth;
    if (import41.checkBinding(_expr_5, currVal_5)) {
      _MaterialButtonComponent_4_6.disabled = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_5_5.icon = 'chevron_right';
      changed = true;
    }
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    _compView_1.detectHostChanges(firstCheck);
    _compView_4.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    _compView_2.detectChanges();
    _compView_3.detectChanges();
    _compView_4.detectChanges();
    _compView_5.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroyInternalState();
    _compView_2.destroyInternalState();
    _compView_3.destroyInternalState();
    _compView_4.destroyInternalState();
    _compView_5.destroyInternalState();
  }

  void _handle_trigger_1_0($event) {
    final _ctx = ctx;
    _ctx.month = _ctx.month.add(
      months: (0 - 1),
    );
  }

  void _handle_trigger_4_0($event) {
    final _ctx = ctx;
    _ctx.month = _ctx.month.add(
      months: 1,
    );
  }
}

AppView<void> viewFactory_DatepickerComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDatepickerComponent6(parentView, parentIndex);
}

class _ViewDatepickerComponent7 extends AppView<import2.DatepickerComponent> {
  final import4.TextBinding _textBinding_2 = import4.TextBinding();
  import7.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import8.MaterialButtonComponent _MaterialButtonComponent_0_6;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  String _expr_0;
  bool _expr_1;
  import21.Element _el_0;
  _ViewDatepickerComponent7(AppView<dynamic> parentView, int parentIndex) : super(import23.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DatepickerComponent> build() {
    _compView_0 = import7.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import25.isDevMode
        ? import29.debugInjectorWrap(import30.AcxDarkTheme, () {
            return import30.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import30.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import8.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    final _anchor_1 = import27.createAnchor();
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_DatepickerComponent8);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_appEl_1, _textBinding_2.element]
    ]);
    final _anchor_3 = import27.createAnchor();
    _appEl_3 = ViewContainer(3, null, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_DatepickerComponent9);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0, _appEl_3], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 2)) {
      if (identical(token, import30.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import8.MaterialButtonComponent) || identical(token, import34.ButtonDirective)) || identical(token, import35.HasDisabled))) {
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
    final local_item = import25.unsafeCast<import2.DatepickerEntry>(locals['\$implicit']);
    changed = false;
    final currVal_1 = (_ctx.period.entryKey == local_item.key);
    if (import41.checkBinding(_expr_1, currVal_1)) {
      _MaterialButtonComponent_0_6.raised = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _NgIf_1_9.ngIf = (local_item.key == 'save');
    _NgIf_3_9.ngIf = (local_item.key == 'today');
    _appEl_1.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    final currVal_0 = local_item.key;
    if (import41.checkBinding(_expr_0, currVal_0)) {
      _compView_0.updateChildClassNonHtml(_el_0, currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_2.updateText(import42.interpolateString0(local_item.title));
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_3.destroyNestedViews();
    _compView_0.destroyInternalState();
  }

  void _handle_trigger_0_0($event) {
    final local_item = import25.unsafeCast<import2.DatepickerEntry>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.onShortcutClick(local_item);
  }
}

AppView<void> viewFactory_DatepickerComponent7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDatepickerComponent7(parentView, parentIndex);
}

class _ViewDatepickerComponent8 extends AppView<import2.DatepickerComponent> {
  import13.ViewMaterialIconComponent0 _compView_0;
  import14.MaterialIconComponent _MaterialIconComponent_0_5;
  _ViewDatepickerComponent8(AppView<dynamic> parentView, int parentIndex) : super(import23.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DatepickerComponent> build() {
    _compView_0 = import13.ViewMaterialIconComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    import27.setAttribute(_el_0, 'icon', 'save');
    addShimC(_el_0);
    _MaterialIconComponent_0_5 = import14.MaterialIconComponent(_el_0);
    _compView_0.create0(_MaterialIconComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_0_5.icon = 'save';
      changed = true;
    }
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

AppView<void> viewFactory_DatepickerComponent8(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDatepickerComponent8(parentView, parentIndex);
}

class _ViewDatepickerComponent9 extends AppView<import2.DatepickerComponent> {
  _ViewDatepickerComponent9(AppView<dynamic> parentView, int parentIndex) : super(import23.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DatepickerComponent> build() {
    final doc = import21.document;
    final _el_0 = doc.createElement('span');
    addShimE(_el_0);
    final _text_1 = import27.appendText(_el_0, '|');
    init1(_el_0);
  }
}

AppView<void> viewFactory_DatepickerComponent9(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDatepickerComponent9(parentView, parentIndex);
}

class _ViewDatepickerComponent10 extends AppView<import2.DatepickerComponent> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  import7.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import8.MaterialButtonComponent _MaterialButtonComponent_0_6;
  _ViewDatepickerComponent10(AppView<dynamic> parentView, int parentIndex) : super(import23.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DatepickerComponent> build() {
    final _ctx = ctx;
    _compView_0 = import7.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'shift');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import25.isDevMode
        ? import29.debugInjectorWrap(import30.AcxDarkTheme, () {
            return import30.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import30.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import31.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import8.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_textBinding_1.element]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler0(_ctx.onShiftClick));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import30.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import8.MaterialButtonComponent) || identical(token, import34.ButtonDirective)) || identical(token, import35.HasDisabled))) {
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
    if (firstCheck) {
      _MaterialButtonComponent_0_6.raised = false;
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_1.updateText(import42.interpolateString0(_ctx.shiftName));
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<void> viewFactory_DatepickerComponent10(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDatepickerComponent10(parentView, parentIndex);
}

final List<dynamic> styles$DatepickerComponentHost = const [];

class _ViewDatepickerComponentHost0 extends AppView<import2.DatepickerComponent> {
  ViewDatepickerComponent0 _compView_0;
  import2.DatepickerComponent _DatepickerComponent_0_5;
  _ViewDatepickerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import23.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.DatepickerComponent> build() {
    _compView_0 = ViewDatepickerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DatepickerComponent_0_5 = import2.DatepickerComponent();
    _compView_0.create(_DatepickerComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _DatepickerComponent_0_5);
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

AppView<import2.DatepickerComponent> viewFactory_DatepickerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDatepickerComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DatepickerComponent, DatepickerComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
