// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_input_multiline.dart';
export 'material_input_multiline.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'base_material_input.template.dart' as _ref0;
import 'base_material_input.template.dart' as _ref1;
import 'deferred_validator.template.dart' as _ref2;
import 'package:angular/angular.template.dart' as _ref3;
import 'package:angular_components/focus/focus.template.dart' as _ref4;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref5;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref6;
import 'package:angular_components/utils/angular/reference/reference.template.dart' as _ref7;
import 'package:angular_components/utils/browser/dom_service/angular_2.template.dart' as _ref8;
import 'package:angular_forms/angular_forms.template.dart' as _ref9;
import 'package:angular_components/material_input/material_input.scss.css.shim.dart' as import0;
import 'package:angular_components/material_input/material_input_multiline.scss.css.shim.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_input_multiline.dart' as import3;
import 'package:angular/src/runtime/text_binding.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import7;
import '../focus/focus.dart' as import8;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import9;
import 'package:angular_forms/src/directives/ng_model.dart' as import10;
import 'dart:html' as import11;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import12;
import 'package:angular/src/core/linker/view_type.dart' as import13;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import15;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import17;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/element_ref.dart';
import '../focus/focus_interface.dart' as import20;
import 'package:angular/src/core/di/opaque_token.dart' as import21;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import22;
import 'package:angular_forms/src/directives/ng_control.dart' as import23;
import 'package:angular/src/core/linker/app_view_utils.dart' as import24;
import 'package:angular/src/runtime/interpolate.dart' as import25;
import 'package:angular/src/common/directives/ng_switch.dart' as import26;
import 'deferred_validator.dart' as import27;
import 'package:angular/src/di/errors.dart' as import28;
import '../utils/browser/dom_service/dom_service.dart' as import29;
import '../interfaces/has_disabled.dart' as import30;
import '../utils/angular/reference/reference.dart' as import31;
import 'base_material_input.dart' as import32;

final List<dynamic> styles$MaterialMultilineInputComponent = [import0.styles, import1.styles];

class ViewMaterialMultilineInputComponent0 extends AppView<import3.MaterialMultilineInputComponent> {
  final import4.TextBinding _textBinding_6 = import4.TextBinding();
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  import7.DefaultValueAccessor _DefaultValueAccessor_11_5;
  import8.FocusableDirective _FocusableDirective_11_6;
  List<import9.ControlValueAccessor<dynamic>> _NgValueAccessor_11_7;
  import10.NgModel _NgModel_11_8;
  ViewContainer _appEl_16;
  NgIf _NgIf_16_9;
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  bool _expr_5;
  bool _expr_6;
  var _expr_7;
  bool _expr_9;
  bool _expr_10;
  var _expr_11;
  var _expr_12;
  var _expr_13;
  var _expr_14;
  var _expr_15;
  var _expr_16;
  bool _expr_18;
  bool _expr_19;
  bool _expr_20;
  bool _expr_21;
  bool _expr_22;
  bool _expr_23;
  import11.DivElement _el_2;
  import11.Element _el_5;
  import11.DivElement _el_7;
  import11.TextAreaElement _el_11;
  import11.DivElement _el_13;
  import11.DivElement _el_14;
  import11.DivElement _el_15;
  static import12.ComponentStyles _componentStyles;
  ViewMaterialMultilineInputComponent0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import11.document.createElement('material-input');
    this.updateChildClassNonHtml(rootEl, import3.MaterialMultilineInputComponent.hostClass);
    rootEl.tabIndex = import3.MaterialMultilineInputComponent.hostTabIndex;
  }
  static String get _debugComponentUrl {
    return (import15.isDevMode ? 'asset:angular_components/lib/material_input/material_input_multiline.dart' : null);
  }

  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import11.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import11.document;
    final _el_0 = import17.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'baseline');
    addShimC(_el_0);
    final _el_1 = import17.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'top-section');
    addShimC(_el_1);
    _el_2 = import17.appendDiv(doc, _el_1);
    this.updateChildClass(_el_2, 'input-container');
    addShimC(_el_2);
    final _el_3 = import17.appendDiv(doc, _el_2);
    import17.setAttribute(_el_3, 'aria-hidden', 'true');
    this.updateChildClass(_el_3, 'label');
    addShimC(_el_3);
    final _text_4 = import17.appendText(_el_3, ' ');
    _el_5 = import17.appendSpan(doc, _el_3);
    this.updateChildClass(_el_5, 'label-text');
    addShimE(_el_5);
    _el_5.append(_textBinding_6.element);
    _el_7 = import17.appendDiv(doc, _el_2);
    addShimC(_el_7);
    final _anchor_8 = import17.appendAnchor(_el_7);
    _appEl_8 = ViewContainer(8, 7, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(_appEl_8, viewFactory_MaterialMultilineInputComponent1);
    _NgIf_8_9 = NgIf(_appEl_8, _TemplateRef_8_8);
    final _el_9 = import17.appendDiv(doc, _el_7);
    import17.setAttribute(_el_9, 'aria-hidden', 'true');
    this.updateChildClass(_el_9, 'line-height-measure');
    addShimC(_el_9);
    final _el_10 = import17.appendElement(doc, _el_9, 'br');
    addShimE(_el_10);
    _el_11 = import17.appendElement(doc, _el_7, 'textarea');
    this.updateChildClass(_el_11, 'textarea');
    import17.setAttribute(_el_11, 'focusableElement', '');
    addShimC(_el_11);
    _DefaultValueAccessor_11_5 = import7.DefaultValueAccessor(_el_11);
    _FocusableDirective_11_6 = import8.FocusableDirective(_el_11);
    _NgValueAccessor_11_7 = [_DefaultValueAccessor_11_5];
    _NgModel_11_8 = import10.NgModel(null, _NgValueAccessor_11_7);
    project(_el_1, 0);
    final _el_12 = import17.appendDiv(doc, _el_0);
    this.updateChildClass(_el_12, 'underline');
    addShimC(_el_12);
    _el_13 = import17.appendDiv(doc, _el_12);
    this.updateChildClass(_el_13, 'disabled-underline');
    addShimC(_el_13);
    _el_14 = import17.appendDiv(doc, _el_12);
    this.updateChildClass(_el_14, 'unfocused-underline');
    addShimC(_el_14);
    _el_15 = import17.appendDiv(doc, _el_12);
    this.updateChildClass(_el_15, 'focused-underline');
    addShimC(_el_15);
    final _anchor_16 = import17.appendAnchor(parentRenderNode);
    _appEl_16 = ViewContainer(16, null, this, _anchor_16);
    TemplateRef _TemplateRef_16_8 = TemplateRef(_appEl_16, viewFactory_MaterialMultilineInputComponent2);
    _NgIf_16_9 = NgIf(_appEl_16, _TemplateRef_16_8);
    _el_11.addEventListener('blur', eventHandler1(_handle_blur_11_0));
    _el_11.addEventListener('change', eventHandler1(_handle_change_11_1));
    _el_11.addEventListener('focus', eventHandler1(_ctx.inputFocusAction));
    _el_11.addEventListener('input', eventHandler1(_handle_input_11_3));
    _ctx.focusable = _FocusableDirective_11_6;
    _ctx.lineHeightMeasure = ElementRef(_el_9);
    _ctx.textareaEl = ElementRef(_el_11);
    _ctx.popupSourceEl = ElementRef(_el_0);
    init0();
    _rootEl.addEventListener('focus', eventHandler0(_ctx.focus));
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((11 == nodeIndex)) {
      if (identical(token, import20.Focusable)) {
        return _FocusableDirective_11_6;
      }
      if (identical(token, const import21.MultiToken<import22.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return _NgValueAccessor_11_7;
      }
      if ((identical(token, import10.NgModel) || identical(token, import23.NgControl))) {
        return _NgModel_11_8;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    _NgIf_8_9.ngIf = (_ctx.rows != _ctx.maxRows);
    changed = false;
    _NgModel_11_8.model = _ctx.inputText;
    _NgModel_11_8.ngAfterChanges();
    if (((!import24.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_11_8.ngOnInit();
    }
    _NgIf_16_9.ngIf = _ctx.displayBottomPanel;
    _appEl_8.detectChangesInNestedViews();
    _appEl_16.detectChangesInNestedViews();
    final currVal_0 = _ctx.floatingLabel;
    if (import24.checkBinding(_expr_0, currVal_0)) {
      import17.updateClassBinding(_el_2, 'floated-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = (_ctx.rows > 1);
    if (import24.checkBinding(_expr_1, currVal_1)) {
      import17.updateClassBinding(_el_5, 'multiline', currVal_1);
      _expr_1 = currVal_1;
    }
    final bool currVal_2 = (!_ctx.labelVisible);
    if (import24.checkBinding(_expr_2, currVal_2)) {
      import17.updateClassBinding(_el_5, 'invisible', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.labelAnimated;
    if (import24.checkBinding(_expr_3, currVal_3)) {
      import17.updateClassBinding(_el_5, 'animated', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.labelAnimationReset;
    if (import24.checkBinding(_expr_4, currVal_4)) {
      import17.updateClassBinding(_el_5, 'reset', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = (_ctx.focused && _ctx.floatingLabelVisible);
    if (import24.checkBinding(_expr_5, currVal_5)) {
      import17.updateClassBinding(_el_5, 'focused', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = (_ctx.invalid && _ctx.floatingLabelVisible);
    if (import24.checkBinding(_expr_6, currVal_6)) {
      import17.updateClassBinding(_el_5, 'invalid', currVal_6);
      _expr_6 = currVal_6;
    }
    _textBinding_6.updateText(import25.interpolateString0(_ctx.label));
    final currVal_7 = _ctx.textAreaHeight;
    if (import24.checkBinding(_expr_7, currVal_7)) {
      _el_7.style.setProperty('height', ((currVal_7 == null) ? null : (currVal_7.toString() + 'px')));
      _expr_7 = currVal_7;
    }
    final currVal_9 = _ctx.disabled;
    if (import24.checkBinding(_expr_9, currVal_9)) {
      import17.updateClassBinding(_el_11, 'disabledInput', currVal_9);
      _expr_9 = currVal_9;
    }
    final currVal_10 = (_ctx.rows == _ctx.maxRows);
    if (import24.checkBinding(_expr_10, currVal_10)) {
      import17.updateClassBinding(_el_11, 'staticHeight', currVal_10);
      _expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.textAreaHeight;
    if (import24.checkBinding(_expr_11, currVal_11)) {
      _el_11.style.setProperty('height', ((currVal_11 == null) ? null : (currVal_11.toString() + 'px')));
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.inputAriaDescribedBy;
    if (import24.checkBinding(_expr_12, currVal_12)) {
      import17.updateAttribute(_el_11, 'aria-describedby', currVal_12);
      _expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.ariaLabel;
    if (import24.checkBinding(_expr_13, currVal_13)) {
      import17.updateAttribute(_el_11, 'aria-label', currVal_13);
      _expr_13 = currVal_13;
    }
    final currVal_14 = _ctx.disabled;
    if (import24.checkBinding(_expr_14, currVal_14)) {
      import17.setProperty(_el_11, 'readOnly', currVal_14);
      _expr_14 = currVal_14;
    }
    final currVal_15 = _ctx.inputTabIndex;
    if (import24.checkBinding(_expr_15, currVal_15)) {
      import17.setProperty(_el_11, 'tabIndex', currVal_15);
      _expr_15 = currVal_15;
    }
    final currVal_16 = import25.interpolate0(_ctx.invalid);
    if (import24.checkBinding(_expr_16, currVal_16)) {
      import17.setAttribute(_el_11, 'aria-invalid', currVal_16);
      _expr_16 = currVal_16;
    }
    final bool currVal_18 = (!_ctx.disabled);
    if (import24.checkBinding(_expr_18, currVal_18)) {
      import17.updateClassBinding(_el_13, 'invisible', currVal_18);
      _expr_18 = currVal_18;
    }
    final currVal_19 = _ctx.disabled;
    if (import24.checkBinding(_expr_19, currVal_19)) {
      import17.updateClassBinding(_el_14, 'invisible', currVal_19);
      _expr_19 = currVal_19;
    }
    final currVal_20 = _ctx.invalid;
    if (import24.checkBinding(_expr_20, currVal_20)) {
      import17.updateClassBinding(_el_14, 'invalid', currVal_20);
      _expr_20 = currVal_20;
    }
    final bool currVal_21 = ((!_ctx.focused) || _ctx.disabled);
    if (import24.checkBinding(_expr_21, currVal_21)) {
      import17.updateClassBinding(_el_15, 'invisible', currVal_21);
      _expr_21 = currVal_21;
    }
    final currVal_22 = _ctx.invalid;
    if (import24.checkBinding(_expr_22, currVal_22)) {
      import17.updateClassBinding(_el_15, 'invalid', currVal_22);
      _expr_22 = currVal_22;
    }
    final currVal_23 = _ctx.underlineAnimated;
    if (import24.checkBinding(_expr_23, currVal_23)) {
      import17.updateClassBinding(_el_15, 'animated', currVal_23);
      _expr_23 = currVal_23;
    }
  }

  @override
  void destroyInternal() {
    _appEl_8.destroyNestedViews();
    _appEl_16.destroyNestedViews();
  }

  void _handle_blur_11_0($event) {
    final local_textareaEl = _el_11;
    final _ctx = ctx;
    _ctx.inputBlurAction($event, local_textareaEl.validity.valid, local_textareaEl.validationMessage);
    _DefaultValueAccessor_11_5.touchHandler();
  }

  void _handle_change_11_1($event) {
    final local_textareaEl = _el_11;
    final _ctx = ctx;
    _ctx.inputChange(local_textareaEl.value, local_textareaEl.validity.valid, local_textareaEl.validationMessage);
    $event.stopPropagation();
  }

  void _handle_input_11_3($event) {
    final local_textareaEl = _el_11;
    final _ctx = ctx;
    _ctx.inputKeypress(local_textareaEl.value, local_textareaEl.validity.valid, local_textareaEl.validationMessage);
    _DefaultValueAccessor_11_5.handleChange($event.target.value);
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import12.ComponentStyles.scoped(styles$MaterialMultilineInputComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import3.MaterialMultilineInputComponent> _MaterialMultilineInputComponentNgFactory = const ComponentFactory('material-input[multiline]', viewFactory_MaterialMultilineInputComponentHost0);
ComponentFactory<import3.MaterialMultilineInputComponent> get MaterialMultilineInputComponentNgFactory {
  return _MaterialMultilineInputComponentNgFactory;
}

class _ViewMaterialMultilineInputComponent1 extends AppView<import3.MaterialMultilineInputComponent> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  var _expr_0;
  var _expr_1;
  import11.DivElement _el_0;
  _ViewMaterialMultilineInputComponent1(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    final doc = import11.document;
    _el_0 = doc.createElement('div');
    import17.setAttribute(_el_0, 'aria-hidden', 'true');
    this.updateChildClass(_el_0, 'mirror-text');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.minInputHeight;
    if (import24.checkBinding(_expr_0, currVal_0)) {
      _el_0.style.setProperty('min-height', ((currVal_0 == null) ? null : (currVal_0.toString() + 'px')));
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.maxInputHeight;
    if (import24.checkBinding(_expr_1, currVal_1)) {
      _el_0.style.setProperty('max-height', ((currVal_1 == null) ? null : (currVal_1.toString() + 'px')));
      _expr_1 = currVal_1;
    }
    _textBinding_1.updateText(import25.interpolateString0(_ctx.mirrorText));
  }
}

AppView<void> viewFactory_MaterialMultilineInputComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent1(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent2 extends AppView<import3.MaterialMultilineInputComponent> {
  import26.NgSwitch _NgSwitch_0_5;
  ViewContainer _appEl_1;
  import26.NgSwitchWhen _NgSwitchWhen_1_9;
  ViewContainer _appEl_2;
  import26.NgSwitchWhen _NgSwitchWhen_2_9;
  ViewContainer _appEl_3;
  import26.NgSwitchWhen _NgSwitchWhen_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  var _expr_0;
  _ViewMaterialMultilineInputComponent2(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    final doc = import11.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'bottom-section');
    addShimC(_el_0);
    _NgSwitch_0_5 = import26.NgSwitch();
    final _anchor_1 = import17.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialMultilineInputComponent3);
    _NgSwitchWhen_1_9 = import26.NgSwitchWhen(_appEl_1, _TemplateRef_1_8, _NgSwitch_0_5);
    final _anchor_2 = import17.appendAnchor(_el_0);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialMultilineInputComponent4);
    _NgSwitchWhen_2_9 = import26.NgSwitchWhen(_appEl_2, _TemplateRef_2_8, _NgSwitch_0_5);
    final _anchor_3 = import17.appendAnchor(_el_0);
    _appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_MaterialMultilineInputComponent5);
    _NgSwitchWhen_3_9 = import26.NgSwitchWhen(_appEl_3, _TemplateRef_3_8, _NgSwitch_0_5);
    final _anchor_4 = import17.appendAnchor(_el_0);
    _appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_MaterialMultilineInputComponent6);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    init1(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import26.NgSwitch) && (nodeIndex <= 4))) {
      return _NgSwitch_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.bottomPanelState;
    if (import24.checkBinding(_expr_0, currVal_0)) {
      _NgSwitch_0_5.ngSwitch = currVal_0;
      _expr_0 = currVal_0;
    }
    if (firstCheck) {
      if (!identical(_ctx.errorState, null)) {
        (_NgSwitchWhen_1_9.ngSwitchWhen = _ctx.errorState);
      }
      if (!identical(_ctx.hintState, null)) {
        (_NgSwitchWhen_2_9.ngSwitchWhen = _ctx.hintState);
      }
      if (!identical(_ctx.emptyState, null)) {
        (_NgSwitchWhen_3_9.ngSwitchWhen = _ctx.emptyState);
      }
    }
    _NgIf_4_9.ngIf = ((_ctx.maxCount != null) || _ctx.showCharacterCount);
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _appEl_3.destroyNestedViews();
    _appEl_4.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialMultilineInputComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent2(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent3 extends AppView<import3.MaterialMultilineInputComponent> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  import11.DivElement _el_0;
  _ViewMaterialMultilineInputComponent3(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    final doc = import11.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'error-text');
    import17.setAttribute(_el_0, 'role', 'alert');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.focused;
    if (import24.checkBinding(_expr_0, currVal_0)) {
      import17.updateClassBinding(_el_0, 'focused', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.invalid;
    if (import24.checkBinding(_expr_1, currVal_1)) {
      import17.updateClassBinding(_el_0, 'invalid', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = import25.interpolate0((!_ctx.invalid));
    if (import24.checkBinding(_expr_2, currVal_2)) {
      import17.setAttribute(_el_0, 'aria-hidden', currVal_2);
      _expr_2 = currVal_2;
    }
    _textBinding_1.updateText(import25.interpolateString0(_ctx.errorMessage));
  }
}

AppView<void> viewFactory_MaterialMultilineInputComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent3(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent4 extends AppView<import3.MaterialMultilineInputComponent> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  _ViewMaterialMultilineInputComponent4(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    final doc = import11.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'hint-text');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import25.interpolateString0(_ctx.hintText));
  }
}

AppView<void> viewFactory_MaterialMultilineInputComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent4(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent5 extends AppView<import3.MaterialMultilineInputComponent> {
  _ViewMaterialMultilineInputComponent5(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    final doc = import11.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'spaceholder');
    _el_0.tabIndex = -1;
    addShimC(_el_0);
    final _text_1 = import17.appendText(_el_0, ' ');
    _el_0.addEventListener('focus', eventHandler1(_handle_focus_0_0));
    init1(_el_0);
  }

  void _handle_focus_0_0($event) {
    $event.stopPropagation();
  }
}

AppView<void> viewFactory_MaterialMultilineInputComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent5(parentView, parentIndex);
}

class _ViewMaterialMultilineInputComponent6 extends AppView<import3.MaterialMultilineInputComponent> {
  final import4.TextBinding _textBinding_1 = import4.TextBinding();
  bool _expr_0;
  import11.DivElement _el_0;
  _ViewMaterialMultilineInputComponent6(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    final doc = import11.document;
    _el_0 = doc.createElement('div');
    import17.setAttribute(_el_0, 'aria-hidden', 'true');
    this.updateChildClass(_el_0, 'counter');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.invalid;
    if (import24.checkBinding(_expr_0, currVal_0)) {
      import17.updateClassBinding(_el_0, 'invalid', currVal_0);
      _expr_0 = currVal_0;
    }
    _textBinding_1.updateText(import25.interpolateString0(_ctx.msgCharacterCounter(_ctx.inputTextLength, _ctx.maxCount)));
  }
}

AppView<void> viewFactory_MaterialMultilineInputComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponent6(parentView, parentIndex);
}

final List<dynamic> styles$MaterialMultilineInputComponentHost = const [];

class _ViewMaterialMultilineInputComponentHost0 extends AppView<import3.MaterialMultilineInputComponent> {
  ViewMaterialMultilineInputComponent0 _compView_0;
  import27.DeferredValidator _DeferredValidator_0_5;
  import3.MaterialMultilineInputComponent _MaterialMultilineInputComponent_0_6;
  List<dynamic> __NgValidators_0_8;
  _ViewMaterialMultilineInputComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<dynamic> get _NgValidators_0_8 {
    if ((__NgValidators_0_8 == null)) {
      (__NgValidators_0_8 = [_DeferredValidator_0_5]);
    }
    return __NgValidators_0_8;
  }

  @override
  ComponentRef<import3.MaterialMultilineInputComponent> build() {
    _compView_0 = ViewMaterialMultilineInputComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DeferredValidator_0_5 = import27.DeferredValidator();
    _MaterialMultilineInputComponent_0_6 = (import15.isDevMode
        ? import28.debugInjectorWrap(import3.MaterialMultilineInputComponent, () {
            return import3.MaterialMultilineInputComponent(null, _compView_0, _DeferredValidator_0_5, this.injectorGet(import29.DomService, viewData.parentIndex));
          })
        : import3.MaterialMultilineInputComponent(null, _compView_0, _DeferredValidator_0_5, this.injectorGet(import29.DomService, viewData.parentIndex)));
    _compView_0.create(_MaterialMultilineInputComponent_0_6, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialMultilineInputComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import27.DeferredValidator)) {
        return _DeferredValidator_0_5;
      }
      if (((((identical(token, import3.MaterialMultilineInputComponent) || identical(token, import30.HasDisabled)) || identical(token, import31.ReferenceDirective)) || identical(token, import20.Focusable)) || identical(token, import32.BaseMaterialInput))) {
        return _MaterialMultilineInputComponent_0_6;
      }
      if (identical(token, const import21.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_0_8;
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
    _compView_0.detectChanges();
    if ((!import24.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialMultilineInputComponent_0_6.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialMultilineInputComponent_0_6.ngOnDestroy();
  }
}

AppView<import3.MaterialMultilineInputComponent> viewFactory_MaterialMultilineInputComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialMultilineInputComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialMultilineInputComponent, MaterialMultilineInputComponentNgFactory);
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
}
