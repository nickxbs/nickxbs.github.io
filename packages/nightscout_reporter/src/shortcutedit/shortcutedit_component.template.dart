// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'shortcutedit_component.dart';
export 'shortcutedit_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as _ref2;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref3;
import 'package:angular_components/material_input/material_input.template.dart' as _ref4;
import 'package:nightscout_reporter/src/globals.template.dart' as _ref5;
import 'package:nightscout_reporter/src/shortcutedit/shortcutedit_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'shortcutedit_component.dart' as import2;
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
import 'package:angular_components/material_button/material_button.template.dart' as import17;
import 'package:angular_components/material_button/material_button.dart' as import18;
import 'package:angular_components/material_icon/material_icon.template.dart' as import19;
import 'package:angular_components/material_icon/material_icon.dart' as import20;
import 'package:angular_components/material_input/material_input.template.dart' as import21;
import 'package:angular_components/material_input/deferred_validator.dart' as import22;
import 'package:angular_forms/src/directives/ng_model.dart' as import23;
import 'package:angular_components/material_input/material_input.dart' as import24;
import 'package:angular_components/material_input/material_input_default_value_accessor.dart' as import25;
import 'package:angular/src/di/errors.dart' as import26;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import27;
import 'package:angular_components/laminate/components/modal/modal.dart' as import28;
import 'package:angular_components/theme/dark_theme.dart' as import29;
import 'package:angular/src/core/di/opaque_token.dart' as import30;
import 'package:angular_components/button_decorator/button_decorator.dart' as import31;
import 'package:angular_components/interfaces/has_disabled.dart' as import32;
import 'package:angular_forms/src/directives/ng_control.dart' as import33;
import 'package:angular_components/material_input/base_material_input.dart' as import34;
import 'package:angular_components/utils/angular/reference/reference.dart' as import35;
import 'package:angular_components/focus/focus_interface.dart' as import36;
import 'package:angular/src/runtime/interpolate.dart' as import37;
import 'package:angular/src/core/linker/app_view_utils.dart' as import38;

final List<dynamic> styles$ShortcutEditComponent = [import0.styles];

class ViewShortcutEditComponent0 extends AppView<import2.ShortcutEditComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  static import5.ComponentStyles _componentStyles;
  ViewShortcutEditComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('shortcutedit');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:nightscout_reporter/lib/src/shortcutedit/shortcutedit_component.dart' : null);
  }

  @override
  ComponentRef<import2.ShortcutEditComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_ShortcutEditComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final _anchor_1 = import11.appendAnchor(parentRenderNode);
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_ShortcutEditComponent3);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = (_ctx.confirmationIdx == (0 - 1));
    _NgIf_1_9.ngIf = (_ctx.confirmationIdx >= 0);
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
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$ShortcutEditComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.ShortcutEditComponent> _ShortcutEditComponentNgFactory = const ComponentFactory('shortcutedit', viewFactory_ShortcutEditComponentHost0);
ComponentFactory<import2.ShortcutEditComponent> get ShortcutEditComponentNgFactory {
  return _ShortcutEditComponentNgFactory;
}

class _ViewShortcutEditComponent1 extends AppView<import2.ShortcutEditComponent> {
  static final String _message_0 = import13.Intl.message('Ein Shortcut beinhaltet den Zeitraum und die ausgewählten Formulare mit den jeweils gesetzten Optionen. Wenn ein Shortcut aktiviert wird, werden die darin gespeicherten Einstellungen geladen und aktiviert.', desc: 'info text for shortcuts');
  static final String _message_1 = import13.Intl.message('Anzahl:', desc: 'number of forms for shortcut');
  static final String _message_2 = import13.Intl.message('Zeitraum:', desc: 'period for shortcuts');
  static final String _message_3 = import13.Intl.message('Speichern', desc: 'buttonlabel for saving data');
  final import14.TextBinding _textBinding_4 = import14.TextBinding();
  final import14.TextBinding _textBinding_20 = import14.TextBinding();
  final import14.TextBinding _textBinding_25 = import14.TextBinding();
  final import14.TextBinding _textBinding_27 = import14.TextBinding();
  final import14.TextBinding _textBinding_30 = import14.TextBinding();
  import15.ViewMaterialDialogComponent0 _compView_0;
  import16.MaterialDialogComponent _MaterialDialogComponent_0_5;
  import17.ViewMaterialButtonComponent0 _compView_7;
  dynamic _AcxDarkTheme_7_5;
  import18.MaterialButtonComponent _MaterialButtonComponent_7_6;
  import19.ViewMaterialIconComponent0 _compView_8;
  import20.MaterialIconComponent _MaterialIconComponent_8_5;
  import17.ViewMaterialButtonComponent0 _compView_13;
  dynamic _AcxDarkTheme_13_5;
  import18.MaterialButtonComponent _MaterialButtonComponent_13_6;
  import19.ViewMaterialIconComponent0 _compView_14;
  import20.MaterialIconComponent _MaterialIconComponent_14_5;
  import21.ViewMaterialInputComponent0 _compView_15;
  import22.DeferredValidator _DeferredValidator_15_5;
  List<dynamic> _NgValidators_15_6;
  import23.NgModel _NgModel_15_7;
  import24.MaterialInputComponent _MaterialInputComponent_15_9;
  import25.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_15_11;
  import17.ViewMaterialButtonComponent0 _compView_19;
  dynamic _AcxDarkTheme_19_5;
  import18.MaterialButtonComponent _MaterialButtonComponent_19_6;
  import17.ViewMaterialButtonComponent0 _compView_24;
  dynamic _AcxDarkTheme_24_5;
  import18.MaterialButtonComponent _MaterialButtonComponent_24_6;
  import17.ViewMaterialButtonComponent0 _compView_29;
  dynamic _AcxDarkTheme_29_5;
  import18.MaterialButtonComponent _MaterialButtonComponent_29_6;
  ViewContainer _appEl_34;
  NgIf _NgIf_34_9;
  import17.ViewMaterialButtonComponent0 _compView_35;
  dynamic _AcxDarkTheme_35_5;
  import18.MaterialButtonComponent _MaterialButtonComponent_35_6;
  import19.ViewMaterialIconComponent0 _compView_36;
  import20.MaterialIconComponent _MaterialIconComponent_36_5;
  var _expr_1;
  String _expr_3;
  _ViewShortcutEditComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ShortcutEditComponent> build() {
    _compView_0 = import15.ViewMaterialDialogComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'headered-dialog');
    import11.setAttribute(_el_0, 'headered', '');
    import11.setAttribute(_el_0, 'main', '');
    addShimC(_el_0);
    _MaterialDialogComponent_0_5 = (import9.isDevMode
        ? import26.debugInjectorWrap(import16.MaterialDialogComponent, () {
            return import16.MaterialDialogComponent(_el_0, parentView.injectorGet(import27.DomService, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import28.ModalComponent, viewData.parentIndex));
          })
        : import16.MaterialDialogComponent(_el_0, parentView.injectorGet(import27.DomService, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import28.ModalComponent, viewData.parentIndex)));
    final doc = import8.document;
    final _el_1 = doc.createElement('div');
    import11.setAttribute(_el_1, 'header', '');
    addShimC(_el_1);
    final _el_2 = import11.appendDiv(doc, _el_1);
    addShimC(_el_2);
    final _el_3 = import11.appendElement(doc, _el_2, 'h1');
    addShimE(_el_3);
    _el_3.append(_textBinding_4.element);
    final _el_5 = import11.appendElement(doc, _el_2, 'p');
    addShimE(_el_5);
    final _el_6 = import11.appendDiv(doc, _el_1);
    addShimC(_el_6);
    _compView_7 = import17.ViewMaterialButtonComponent0(this, 7);
    final _el_7 = _compView_7.rootEl;
    _el_6.append(_el_7);
    import11.setAttribute(_el_7, 'icon', '');
    addShimC(_el_7);
    _AcxDarkTheme_7_5 = (import9.isDevMode
        ? import26.debugInjectorWrap(import29.AcxDarkTheme, () {
            return import29.AcxDarkTheme(parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import29.AcxDarkTheme(parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_7_6 = import18.MaterialButtonComponent(_el_7, _AcxDarkTheme_7_5, _compView_7, null);
    _compView_8 = import19.ViewMaterialIconComponent0(this, 8);
    final _el_8 = _compView_8.rootEl;
    import11.setAttribute(_el_8, 'icon', 'close');
    addShimC(_el_8);
    _MaterialIconComponent_8_5 = import20.MaterialIconComponent(_el_8);
    _compView_8.create0(_MaterialIconComponent_8_5);
    _compView_7.create(_MaterialButtonComponent_7_6, [
      [_el_8]
    ]);
    final _el_9 = doc.createElement('div');
    this.updateChildClass(_el_9, 'root');
    addShimC(_el_9);
    final _el_10 = import11.appendDiv(doc, _el_9);
    this.updateChildClass(_el_10, 'info');
    addShimC(_el_10);
    final _text_11 = import11.appendText(_el_10, _message_0);
    final _el_12 = import11.appendDiv(doc, _el_9);
    this.updateChildClass(_el_12, 'icondef');
    addShimC(_el_12);
    _compView_13 = import17.ViewMaterialButtonComponent0(this, 13);
    final _el_13 = _compView_13.rootEl;
    _el_12.append(_el_13);
    addShimC(_el_13);
    _AcxDarkTheme_13_5 = (import9.isDevMode
        ? import26.debugInjectorWrap(import29.AcxDarkTheme, () {
            return import29.AcxDarkTheme(parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import29.AcxDarkTheme(parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_13_6 = import18.MaterialButtonComponent(_el_13, _AcxDarkTheme_13_5, _compView_13, null);
    _compView_14 = import19.ViewMaterialIconComponent0(this, 14);
    final _el_14 = _compView_14.rootEl;
    addShimC(_el_14);
    _MaterialIconComponent_14_5 = import20.MaterialIconComponent(_el_14);
    _compView_14.create0(_MaterialIconComponent_14_5);
    _compView_13.create(_MaterialButtonComponent_13_6, [
      [_el_14]
    ]);
    _compView_15 = import21.ViewMaterialInputComponent0(this, 15);
    final _el_15 = _compView_15.rootEl;
    _el_12.append(_el_15);
    import11.setAttribute(_el_15, 'floatingLabel', '');
    import11.setAttribute(_el_15, 'id', 'name');
    addShimC(_el_15);
    _DeferredValidator_15_5 = import22.DeferredValidator();
    _NgValidators_15_6 = [_DeferredValidator_15_5];
    _NgModel_15_7 = import23.NgModel(_NgValidators_15_6, null);
    _MaterialInputComponent_15_9 = import24.MaterialInputComponent(null, null, null, _NgModel_15_7, _compView_15, _DeferredValidator_15_5);
    _MaterialInputDefaultValueAccessor_15_11 = import25.MaterialInputDefaultValueAccessor(_MaterialInputComponent_15_9, _NgModel_15_7);
    _compView_15.create(_MaterialInputComponent_15_9, [const [], const []]);
    final _el_16 = import11.appendDiv(doc, _el_9);
    addShimC(_el_16);
    final _el_17 = import11.appendElement(doc, _el_16, 'ngContainer');
    addShimE(_el_17);
    final _text_18 = import11.appendText(_el_17, _message_1);
    _compView_19 = import17.ViewMaterialButtonComponent0(this, 19);
    final _el_19 = _compView_19.rootEl;
    _el_16.append(_el_19);
    this.updateChildClassNonHtml(_el_19, 'data');
    addShimC(_el_19);
    _AcxDarkTheme_19_5 = (import9.isDevMode
        ? import26.debugInjectorWrap(import29.AcxDarkTheme, () {
            return import29.AcxDarkTheme(parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import29.AcxDarkTheme(parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_19_6 = import18.MaterialButtonComponent(_el_19, _AcxDarkTheme_19_5, _compView_19, null);
    _compView_19.create(_MaterialButtonComponent_19_6, [
      [_textBinding_20.element]
    ]);
    final _el_21 = import11.appendDiv(doc, _el_9);
    addShimC(_el_21);
    final _el_22 = import11.appendElement(doc, _el_21, 'ngContainer');
    addShimE(_el_22);
    final _text_23 = import11.appendText(_el_22, _message_2);
    _compView_24 = import17.ViewMaterialButtonComponent0(this, 24);
    final _el_24 = _compView_24.rootEl;
    _el_21.append(_el_24);
    this.updateChildClassNonHtml(_el_24, 'data');
    addShimC(_el_24);
    _AcxDarkTheme_24_5 = (import9.isDevMode
        ? import26.debugInjectorWrap(import29.AcxDarkTheme, () {
            return import29.AcxDarkTheme(parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import29.AcxDarkTheme(parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_24_6 = import18.MaterialButtonComponent(_el_24, _AcxDarkTheme_24_5, _compView_24, null);
    _compView_24.create(_MaterialButtonComponent_24_6, [
      [_textBinding_25.element]
    ]);
    final _el_26 = import11.appendDiv(doc, _el_9);
    addShimC(_el_26);
    _el_26.append(_textBinding_27.element);
    final _text_28 = import11.appendText(_el_26, ':');
    _compView_29 = import17.ViewMaterialButtonComponent0(this, 29);
    final _el_29 = _compView_29.rootEl;
    _el_26.append(_el_29);
    this.updateChildClassNonHtml(_el_29, 'data');
    addShimC(_el_29);
    _AcxDarkTheme_29_5 = (import9.isDevMode
        ? import26.debugInjectorWrap(import29.AcxDarkTheme, () {
            return import29.AcxDarkTheme(parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import29.AcxDarkTheme(parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_29_6 = import18.MaterialButtonComponent(_el_29, _AcxDarkTheme_29_5, _compView_29, null);
    _compView_29.create(_MaterialButtonComponent_29_6, [
      [_textBinding_30.element]
    ]);
    final _el_31 = doc.createElement('div');
    import11.setAttribute(_el_31, 'footer', '');
    addShimC(_el_31);
    final _el_32 = import11.appendDiv(doc, _el_31);
    addShimC(_el_32);
    final _el_33 = import11.appendDiv(doc, _el_31);
    addShimC(_el_33);
    final _anchor_34 = import11.appendAnchor(_el_33);
    _appEl_34 = ViewContainer(34, 33, this, _anchor_34);
    TemplateRef _TemplateRef_34_8 = TemplateRef(_appEl_34, viewFactory_ShortcutEditComponent2);
    _NgIf_34_9 = NgIf(_appEl_34, _TemplateRef_34_8);
    _compView_35 = import17.ViewMaterialButtonComponent0(this, 35);
    final _el_35 = _compView_35.rootEl;
    _el_33.append(_el_35);
    this.updateChildClassNonHtml(_el_35, 'iconButton');
    import11.setAttribute(_el_35, 'clear-size', '');
    addShimC(_el_35);
    _AcxDarkTheme_35_5 = (import9.isDevMode
        ? import26.debugInjectorWrap(import29.AcxDarkTheme, () {
            return import29.AcxDarkTheme(parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import29.AcxDarkTheme(parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_35_6 = import18.MaterialButtonComponent(_el_35, _AcxDarkTheme_35_5, _compView_35, null);
    _compView_36 = import19.ViewMaterialIconComponent0(this, 36);
    final _el_36 = _compView_36.rootEl;
    import11.setAttribute(_el_36, 'icon', 'save');
    addShimC(_el_36);
    _MaterialIconComponent_36_5 = import20.MaterialIconComponent(_el_36);
    _compView_36.create0(_MaterialIconComponent_36_5);
    final _text_37 = import11.createText(_message_3);
    _compView_35.create(_MaterialButtonComponent_35_6, [
      [_el_36, _text_37]
    ]);
    _compView_0.create(_MaterialDialogComponent_0_5, [
      [_el_1],
      [_el_9],
      [_el_31]
    ]);
    final subscription_0 = _MaterialButtonComponent_7_6.trigger.listen(eventHandler1(_handle_trigger_7_0));
    final subscription_1 = _NgModel_15_7.update.listen(eventHandler1(_handle_ngModelChange_15_0));
    final subscription_2 = _MaterialButtonComponent_19_6.trigger.listen(eventHandler1(_handle_trigger_19_0));
    final subscription_3 = _MaterialButtonComponent_24_6.trigger.listen(eventHandler1(_handle_trigger_24_0));
    final subscription_4 = _MaterialButtonComponent_29_6.trigger.listen(eventHandler1(_handle_trigger_29_0));
    final subscription_5 = _MaterialButtonComponent_35_6.trigger.listen(eventHandler1(_handle_trigger_35_0));
    init([_el_0], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((7 <= nodeIndex) && (nodeIndex <= 8))) {
      if (identical(token, import29.AcxDarkTheme)) {
        return _AcxDarkTheme_7_5;
      }
      if (((identical(token, import18.MaterialButtonComponent) || identical(token, import31.ButtonDirective)) || identical(token, import32.HasDisabled))) {
        return _MaterialButtonComponent_7_6;
      }
    }
    if (((13 <= nodeIndex) && (nodeIndex <= 14))) {
      if (identical(token, import29.AcxDarkTheme)) {
        return _AcxDarkTheme_13_5;
      }
      if (((identical(token, import18.MaterialButtonComponent) || identical(token, import31.ButtonDirective)) || identical(token, import32.HasDisabled))) {
        return _MaterialButtonComponent_13_6;
      }
    }
    if ((15 == nodeIndex)) {
      if (identical(token, import22.DeferredValidator)) {
        return _DeferredValidator_15_5;
      }
      if (identical(token, const import30.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_15_6;
      }
      if ((identical(token, import23.NgModel) || identical(token, import33.NgControl))) {
        return _NgModel_15_7;
      }
      if (((((identical(token, import24.MaterialInputComponent) || identical(token, import34.BaseMaterialInput)) || identical(token, import35.ReferenceDirective)) || identical(token, import36.Focusable)) || identical(token, import32.HasDisabled))) {
        return _MaterialInputComponent_15_9;
      }
    }
    if (((19 <= nodeIndex) && (nodeIndex <= 20))) {
      if (identical(token, import29.AcxDarkTheme)) {
        return _AcxDarkTheme_19_5;
      }
      if (((identical(token, import18.MaterialButtonComponent) || identical(token, import31.ButtonDirective)) || identical(token, import32.HasDisabled))) {
        return _MaterialButtonComponent_19_6;
      }
    }
    if (((24 <= nodeIndex) && (nodeIndex <= 25))) {
      if (identical(token, import29.AcxDarkTheme)) {
        return _AcxDarkTheme_24_5;
      }
      if (((identical(token, import18.MaterialButtonComponent) || identical(token, import31.ButtonDirective)) || identical(token, import32.HasDisabled))) {
        return _MaterialButtonComponent_24_6;
      }
    }
    if (((29 <= nodeIndex) && (nodeIndex <= 30))) {
      if (identical(token, import29.AcxDarkTheme)) {
        return _AcxDarkTheme_29_5;
      }
      if (((identical(token, import18.MaterialButtonComponent) || identical(token, import31.ButtonDirective)) || identical(token, import32.HasDisabled))) {
        return _MaterialButtonComponent_29_6;
      }
    }
    if (((35 <= nodeIndex) && (nodeIndex <= 37))) {
      if (identical(token, import29.AcxDarkTheme)) {
        return _AcxDarkTheme_35_5;
      }
      if (((identical(token, import18.MaterialButtonComponent) || identical(token, import31.ButtonDirective)) || identical(token, import32.HasDisabled))) {
        return _MaterialButtonComponent_35_6;
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
    if (changed) {
      _compView_13.markAsCheckOnce();
    }
    changed = false;
    final currVal_1 = import37.interpolateString0(_ctx.g.currShortcut.icon);
    if (import38.checkBinding(_expr_1, currVal_1)) {
      _MaterialIconComponent_14_5.icon = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_14.markAsCheckOnce();
    }
    changed = false;
    _NgModel_15_7.model = _ctx.g.currShortcut.name;
    _NgModel_15_7.ngAfterChanges();
    if (((!import38.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_15_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_15_9.floatingLabel = true;
      changed = true;
    }
    final currVal_3 = import2.ShortcutEditComponent.msgName;
    if (import38.checkBinding(_expr_3, currVal_3)) {
      _MaterialInputComponent_15_9.label = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_15.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_19.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_24.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_29.markAsCheckOnce();
    }
    _NgIf_34_9.ngIf = (_ctx.g.currShortcutIdx >= 0);
    changed = false;
    if (changed) {
      _compView_35.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_36_5.icon = 'save';
      changed = true;
    }
    if (changed) {
      _compView_36.markAsCheckOnce();
    }
    _appEl_34.detectChangesInNestedViews();
    if ((!import38.AppViewUtils.throwOnChanges)) {
      _MaterialDialogComponent_0_5.ngAfterContentChecked();
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_4.updateText(import37.interpolateString0(_ctx.msgTitle));
    _compView_7.detectHostChanges(firstCheck);
    _compView_13.detectHostChanges(firstCheck);
    _compView_19.detectHostChanges(firstCheck);
    _textBinding_20.updateText(import37.interpolateString0(_ctx.msgFormsText(_ctx.g.currShortcut.forms.length)));
    _compView_24.detectHostChanges(firstCheck);
    _textBinding_25.updateText(import37.interpolateString0(_ctx.g.currShortcut.periodText));
    _textBinding_27.updateText(import37.interpolateString0(_ctx.g.lblGlucUnits));
    _compView_29.detectHostChanges(firstCheck);
    _textBinding_30.updateText(import37.interpolate0(_ctx.g.listGlucUnits[(_ctx.g.currShortcut.glucMGDLIdx ?? _ctx.g.glucMGDLIdx)]));
    _compView_35.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_7.detectChanges();
    _compView_8.detectChanges();
    _compView_13.detectChanges();
    _compView_14.detectChanges();
    _compView_15.detectChanges();
    _compView_19.detectChanges();
    _compView_24.detectChanges();
    _compView_29.detectChanges();
    _compView_35.detectChanges();
    _compView_36.detectChanges();
    if ((!import38.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_15_9.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_34.destroyNestedViews();
    _compView_0.destroyInternalState();
    _compView_7.destroyInternalState();
    _compView_8.destroyInternalState();
    _compView_13.destroyInternalState();
    _compView_14.destroyInternalState();
    _compView_15.destroyInternalState();
    _compView_19.destroyInternalState();
    _compView_24.destroyInternalState();
    _compView_29.destroyInternalState();
    _compView_35.destroyInternalState();
    _compView_36.destroyInternalState();
    _MaterialInputComponent_15_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_15_11.ngOnDestroy();
    _MaterialDialogComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_7_0($event) {
    final _ctx = ctx;
    _ctx.fire('cancel');
  }

  void _handle_ngModelChange_15_0($event) {
    final _ctx = ctx;
    _ctx.g.currShortcut.name = $event;
  }

  void _handle_trigger_19_0($event) {
    final _ctx = ctx;
    _ctx.confirmationIdx = 2;
  }

  void _handle_trigger_24_0($event) {
    final _ctx = ctx;
    _ctx.confirmationIdx = 1;
  }

  void _handle_trigger_29_0($event) {
    final _ctx = ctx;
    _ctx.confirmationIdx = 3;
  }

  void _handle_trigger_35_0($event) {
    final _ctx = ctx;
    _ctx.fire('ok');
  }
}

AppView<void> viewFactory_ShortcutEditComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewShortcutEditComponent1(parentView, parentIndex);
}

class _ViewShortcutEditComponent2 extends AppView<import2.ShortcutEditComponent> {
  static final String _message_0 = import13.Intl.message('Löschen', desc: 'buttonlabel for deleting data');
  import17.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import18.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import19.ViewMaterialIconComponent0 _compView_1;
  import20.MaterialIconComponent _MaterialIconComponent_1_5;
  _ViewShortcutEditComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ShortcutEditComponent> build() {
    _compView_0 = import17.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'iconButton');
    import11.setAttribute(_el_0, 'clear-size', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import9.isDevMode
        ? import26.debugInjectorWrap(import29.AcxDarkTheme, () {
            return import29.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import29.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import18.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _compView_1 = import19.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    import11.setAttribute(_el_1, 'icon', 'delete');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import20.MaterialIconComponent(_el_1);
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
      if (identical(token, import29.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import18.MaterialButtonComponent) || identical(token, import31.ButtonDirective)) || identical(token, import32.HasDisabled))) {
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
    final _ctx = ctx;
    _ctx.confirmationIdx = 0;
  }
}

AppView<void> viewFactory_ShortcutEditComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewShortcutEditComponent2(parentView, parentIndex);
}

class _ViewShortcutEditComponent3 extends AppView<import2.ShortcutEditComponent> {
  static final String _message_0 = import13.Intl.message('Bestätigung', desc: 'title of confirmation dialog');
  static final String _message_1 = import13.Intl.message('Ja', desc: 'buttonlabel for confirmation yes');
  static final String _message_2 = import13.Intl.message('Nein', desc: 'buttonlabel for confirmation no');
  import15.ViewMaterialDialogComponent0 _compView_0;
  import16.MaterialDialogComponent _MaterialDialogComponent_0_5;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  import17.ViewMaterialButtonComponent0 _compView_8;
  dynamic _AcxDarkTheme_8_5;
  import18.MaterialButtonComponent _MaterialButtonComponent_8_6;
  import19.ViewMaterialIconComponent0 _compView_9;
  import20.MaterialIconComponent _MaterialIconComponent_9_5;
  import17.ViewMaterialButtonComponent0 _compView_11;
  dynamic _AcxDarkTheme_11_5;
  import18.MaterialButtonComponent _MaterialButtonComponent_11_6;
  import19.ViewMaterialIconComponent0 _compView_12;
  import20.MaterialIconComponent _MaterialIconComponent_12_5;
  _ViewShortcutEditComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ShortcutEditComponent> build() {
    _compView_0 = import15.ViewMaterialDialogComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'headered-dialog');
    import11.setAttribute(_el_0, 'confirm', '');
    import11.setAttribute(_el_0, 'headered', '');
    addShimC(_el_0);
    _MaterialDialogComponent_0_5 = (import9.isDevMode
        ? import26.debugInjectorWrap(import16.MaterialDialogComponent, () {
            return import16.MaterialDialogComponent(_el_0, parentView.injectorGet(import27.DomService, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import28.ModalComponent, viewData.parentIndex));
          })
        : import16.MaterialDialogComponent(_el_0, parentView.injectorGet(import27.DomService, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import28.ModalComponent, viewData.parentIndex)));
    final doc = import8.document;
    final _el_1 = doc.createElement('div');
    import11.setAttribute(_el_1, 'header', '');
    addShimC(_el_1);
    final _text_2 = import11.appendText(_el_1, _message_0);
    final _anchor_3 = import11.createAnchor();
    _appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_ShortcutEditComponent4);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    final _anchor_4 = import11.createAnchor();
    _appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_ShortcutEditComponent5);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    final _anchor_5 = import11.createAnchor();
    _appEl_5 = ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_ShortcutEditComponent6);
    _NgIf_5_9 = NgIf(_appEl_5, _TemplateRef_5_8);
    final _anchor_6 = import11.createAnchor();
    _appEl_6 = ViewContainer(6, 0, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_ShortcutEditComponent7);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    final _el_7 = doc.createElement('div');
    import11.setAttribute(_el_7, 'footer', '');
    addShimC(_el_7);
    _compView_8 = import17.ViewMaterialButtonComponent0(this, 8);
    final _el_8 = _compView_8.rootEl;
    _el_7.append(_el_8);
    this.updateChildClassNonHtml(_el_8, 'iconButton');
    addShimC(_el_8);
    _AcxDarkTheme_8_5 = (import9.isDevMode
        ? import26.debugInjectorWrap(import29.AcxDarkTheme, () {
            return import29.AcxDarkTheme(parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import29.AcxDarkTheme(parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_8_6 = import18.MaterialButtonComponent(_el_8, _AcxDarkTheme_8_5, _compView_8, null);
    _compView_9 = import19.ViewMaterialIconComponent0(this, 9);
    final _el_9 = _compView_9.rootEl;
    import11.setAttribute(_el_9, 'icon', 'done');
    addShimC(_el_9);
    _MaterialIconComponent_9_5 = import20.MaterialIconComponent(_el_9);
    _compView_9.create0(_MaterialIconComponent_9_5);
    final _text_10 = import11.createText(_message_1);
    _compView_8.create(_MaterialButtonComponent_8_6, [
      [_el_9, _text_10]
    ]);
    _compView_11 = import17.ViewMaterialButtonComponent0(this, 11);
    final _el_11 = _compView_11.rootEl;
    _el_7.append(_el_11);
    this.updateChildClassNonHtml(_el_11, 'iconButton');
    addShimC(_el_11);
    _AcxDarkTheme_11_5 = (import9.isDevMode
        ? import26.debugInjectorWrap(import29.AcxDarkTheme, () {
            return import29.AcxDarkTheme(parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import29.AcxDarkTheme(parentView.injectorGetOptional(const import30.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_11_6 = import18.MaterialButtonComponent(_el_11, _AcxDarkTheme_11_5, _compView_11, null);
    _compView_12 = import19.ViewMaterialIconComponent0(this, 12);
    final _el_12 = _compView_12.rootEl;
    import11.setAttribute(_el_12, 'icon', 'cancel');
    addShimC(_el_12);
    _MaterialIconComponent_12_5 = import20.MaterialIconComponent(_el_12);
    _compView_12.create0(_MaterialIconComponent_12_5);
    final _text_13 = import11.createText(_message_2);
    _compView_11.create(_MaterialButtonComponent_11_6, [
      [_el_12, _text_13]
    ]);
    _compView_0.create(_MaterialDialogComponent_0_5, [
      [_el_1],
      [_appEl_3, _appEl_4, _appEl_5, _appEl_6],
      [_el_7]
    ]);
    final subscription_0 = _MaterialButtonComponent_8_6.trigger.listen(eventHandler1(_handle_trigger_8_0));
    final subscription_1 = _MaterialButtonComponent_11_6.trigger.listen(eventHandler1(_handle_trigger_11_0));
    init([_el_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((8 <= nodeIndex) && (nodeIndex <= 10))) {
      if (identical(token, import29.AcxDarkTheme)) {
        return _AcxDarkTheme_8_5;
      }
      if (((identical(token, import18.MaterialButtonComponent) || identical(token, import31.ButtonDirective)) || identical(token, import32.HasDisabled))) {
        return _MaterialButtonComponent_8_6;
      }
    }
    if (((11 <= nodeIndex) && (nodeIndex <= 13))) {
      if (identical(token, import29.AcxDarkTheme)) {
        return _AcxDarkTheme_11_5;
      }
      if (((identical(token, import18.MaterialButtonComponent) || identical(token, import31.ButtonDirective)) || identical(token, import32.HasDisabled))) {
        return _MaterialButtonComponent_11_6;
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
    _NgIf_3_9.ngIf = (_ctx.confirmationIdx == 0);
    _NgIf_4_9.ngIf = (_ctx.confirmationIdx == 1);
    _NgIf_5_9.ngIf = (_ctx.confirmationIdx == 2);
    _NgIf_6_9.ngIf = (_ctx.confirmationIdx == 3);
    changed = false;
    if (changed) {
      _compView_8.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_9_5.icon = 'done';
      changed = true;
    }
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_11.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_12_5.icon = 'cancel';
      changed = true;
    }
    if (changed) {
      _compView_12.markAsCheckOnce();
    }
    _appEl_3.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    if ((!import38.AppViewUtils.throwOnChanges)) {
      _MaterialDialogComponent_0_5.ngAfterContentChecked();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_8.detectHostChanges(firstCheck);
    _compView_11.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_8.detectChanges();
    _compView_9.detectChanges();
    _compView_11.detectChanges();
    _compView_12.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_3.destroyNestedViews();
    _appEl_4.destroyNestedViews();
    _appEl_5.destroyNestedViews();
    _appEl_6.destroyNestedViews();
    _compView_0.destroyInternalState();
    _compView_8.destroyInternalState();
    _compView_9.destroyInternalState();
    _compView_11.destroyInternalState();
    _compView_12.destroyInternalState();
    _MaterialDialogComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_8_0($event) {
    final _ctx = ctx;
    _ctx.fire('confirm');
  }

  void _handle_trigger_11_0($event) {
    final _ctx = ctx;
    _ctx.confirmationIdx = (0 - 1);
  }
}

AppView<void> viewFactory_ShortcutEditComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewShortcutEditComponent3(parentView, parentIndex);
}

class _ViewShortcutEditComponent4 extends AppView<import2.ShortcutEditComponent> {
  static final String _message_0 = import13.Intl.message('Soll der Shortcut mit der Bezeichnung', desc: 'should the shortcut with name');
  static final String _message_1 = import13.Intl.message('wirklich gelöscht werden?', desc: 'really be deleted');
  final import14.TextBinding _textBinding_3 = import14.TextBinding();
  _ViewShortcutEditComponent4(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ShortcutEditComponent> build() {
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
    _textBinding_3.updateText(import37.interpolateString0(_ctx.g.currShortcut.name));
  }
}

AppView<void> viewFactory_ShortcutEditComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewShortcutEditComponent4(parentView, parentIndex);
}

class _ViewShortcutEditComponent5 extends AppView<import2.ShortcutEditComponent> {
  static final String _message_0 = import13.Intl.message('Soll der Zeitraum', desc: 'should the period');
  static final String _message_1 = import13.Intl.message('mit dem Zeitraum', desc: 'with period');
  static final String _message_2 = import13.Intl.message('ersetzt werden?', desc: 'be replaced');
  final import14.TextBinding _textBinding_3 = import14.TextBinding();
  final import14.TextBinding _textBinding_6 = import14.TextBinding();
  _ViewShortcutEditComponent5(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ShortcutEditComponent> build() {
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
    final _el_5 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_5, 'marked');
    addShimC(_el_5);
    _el_5.append(_textBinding_6.element);
    final _text_7 = import11.appendText(_el_0, _message_2);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_3.updateText(import37.interpolateString0(_ctx.g.currShortcut.periodText));
    _textBinding_6.updateText(import37.interpolateString0(_ctx.g.period.display));
  }
}

AppView<void> viewFactory_ShortcutEditComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewShortcutEditComponent5(parentView, parentIndex);
}

class _ViewShortcutEditComponent6 extends AppView<import2.ShortcutEditComponent> {
  static final String _message_0 = import13.Intl.message('Soll die Formularauswahl mit der aktuellen Auswahl ersetzt werden?', desc: 'should the forms be replaced with current forms');
  _ViewShortcutEditComponent6(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ShortcutEditComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'content');
    addShimC(_el_0);
    final _text_1 = import11.appendText(_el_0, _message_0);
    init1(_el_0);
  }
}

AppView<void> viewFactory_ShortcutEditComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewShortcutEditComponent6(parentView, parentIndex);
}

class _ViewShortcutEditComponent7 extends AppView<import2.ShortcutEditComponent> {
  static final String _message_0 = import13.Intl.message('Soll die Einheit zur Glukosemessung', desc: 'should the period');
  static final String _message_1 = import13.Intl.message('mit der Einheit', desc: 'with period');
  static final String _message_2 = import13.Intl.message('ersetzt werden?', desc: 'be replaced');
  final import14.TextBinding _textBinding_3 = import14.TextBinding();
  final import14.TextBinding _textBinding_6 = import14.TextBinding();
  _ViewShortcutEditComponent7(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ShortcutEditComponent> build() {
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
    final _el_5 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_5, 'marked');
    addShimC(_el_5);
    _el_5.append(_textBinding_6.element);
    final _text_7 = import11.appendText(_el_0, _message_2);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_3.updateText(import37.interpolate0(_ctx.g.listGlucUnits[(_ctx.g.currShortcut.glucMGDLIdx ?? 0)]));
    _textBinding_6.updateText(import37.interpolate0(_ctx.g.listGlucUnits[_ctx.g.glucMGDLIdx]));
  }
}

AppView<void> viewFactory_ShortcutEditComponent7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewShortcutEditComponent7(parentView, parentIndex);
}

final List<dynamic> styles$ShortcutEditComponentHost = const [];

class _ViewShortcutEditComponentHost0 extends AppView<import2.ShortcutEditComponent> {
  ViewShortcutEditComponent0 _compView_0;
  import2.ShortcutEditComponent _ShortcutEditComponent_0_5;
  _ViewShortcutEditComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.ShortcutEditComponent> build() {
    _compView_0 = ViewShortcutEditComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ShortcutEditComponent_0_5 = import2.ShortcutEditComponent();
    _compView_0.create(_ShortcutEditComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _ShortcutEditComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import38.AppViewUtils.throwOnChanges) && firstCheck)) {
      _ShortcutEditComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
    if ((!import38.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _ShortcutEditComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.ShortcutEditComponent> viewFactory_ShortcutEditComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewShortcutEditComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ShortcutEditComponent, ShortcutEditComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
