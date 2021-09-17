// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_input.dart';
export 'material_input.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'base_material_input.template.dart' as _ref0;
import 'base_material_input.template.dart' as _ref1;
import 'deferred_validator.template.dart' as _ref2;
import 'material_input_default_value_accessor.template.dart' as _ref3;
import 'material_input_default_value_accessor.template.dart' as _ref4;
import 'material_input_multiline.template.dart' as _ref5;
import 'material_input_multiline.template.dart' as _ref6;
import 'package:angular/angular.template.dart' as _ref7;
import 'package:angular_components/focus/focus.template.dart' as _ref8;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref9;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref10;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref11;
import 'package:angular_components/utils/angular/reference/reference.template.dart' as _ref12;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref13;
import 'package:angular_forms/angular_forms.template.dart' as _ref14;
import 'package:angular_forms/angular_forms.template.dart' as _ref15;
import 'package:angular_components/material_input/material_input.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_input.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import6;
import '../focus/focus.dart' as import7;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import8;
import 'package:angular_forms/src/directives/ng_model.dart' as import9;
import 'dart:html' as import10;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import11;
import 'package:angular/src/core/linker/view_type.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import14;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import16;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/element_ref.dart';
import '../focus/focus_interface.dart' as import19;
import 'package:angular/src/core/di/opaque_token.dart' as import20;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import21;
import 'package:angular_forms/src/directives/ng_control.dart' as import22;
import 'package:angular/src/core/linker/app_view_utils.dart' as import23;
import 'package:angular/src/runtime/interpolate.dart' as import24;
import '../material_icon/material_icon.template.dart' as import25;
import '../material_icon/material_icon.dart' as import26;
import 'package:angular/src/common/directives/ng_switch.dart' as import27;
import 'deferred_validator.dart' as import28;
import '../utils/angular/reference/reference.dart' as import29;
import '../interfaces/has_disabled.dart' as import30;
import 'base_material_input.dart' as import31;

final List<dynamic> styles$MaterialInputComponent = [import0.styles];

class ViewMaterialInputComponent0 extends AppView<import2.MaterialInputComponent> {
  final import3.TextBinding _textBinding_10 = import3.TextBinding();
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  import6.DefaultValueAccessor _DefaultValueAccessor_11_5;
  import7.FocusableDirective _FocusableDirective_11_6;
  List<import8.ControlValueAccessor<dynamic>> _NgValueAccessor_11_7;
  import9.NgModel _NgModel_11_8;
  ViewContainer _appEl_13;
  NgIf _NgIf_13_9;
  ViewContainer _appEl_15;
  NgIf _NgIf_15_9;
  ViewContainer _appEl_21;
  NgIf _NgIf_21_9;
  bool _expr_0;
  bool _expr_3;
  bool _expr_4;
  var _expr_5;
  bool _expr_6;
  bool _expr_7;
  bool _expr_8;
  bool _expr_9;
  bool _expr_10;
  bool _expr_11;
  var _expr_12;
  var _expr_13;
  var _expr_14;
  var _expr_15;
  var _expr_16;
  var _expr_17;
  var _expr_18;
  var _expr_19;
  var _expr_20;
  var _expr_21;
  bool _expr_23;
  bool _expr_24;
  var _expr_25;
  var _expr_26;
  var _expr_27;
  var _expr_28;
  bool _expr_32;
  bool _expr_33;
  bool _expr_34;
  bool _expr_35;
  bool _expr_36;
  bool _expr_37;
  import10.DivElement _el_1;
  import10.Element _el_6;
  import10.DivElement _el_7;
  import10.Element _el_9;
  import10.InputElement _el_11;
  import10.DivElement _el_18;
  import10.DivElement _el_19;
  import10.DivElement _el_20;
  static import11.ComponentStyles _componentStyles;
  ViewMaterialInputComponent0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import10.document.createElement('material-input');
    this.updateChildClassNonHtml(rootEl, import2.MaterialInputComponent.hostClass);
    rootEl.tabIndex = import2.MaterialInputComponent.hostTabIndex;
  }
  static String get _debugComponentUrl {
    return (import14.isDevMode ? 'asset:angular_components/lib/material_input/material_input.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import10.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import10.document;
    final _el_0 = import16.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'baseline');
    addShimC(_el_0);
    _el_1 = import16.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'top-section');
    addShimC(_el_1);
    final _anchor_2 = import16.appendAnchor(_el_1);
    _appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialInputComponent1);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _text_3 = import16.appendText(_el_1, ' ');
    final _anchor_4 = import16.appendAnchor(_el_1);
    _appEl_4 = ViewContainer(4, 1, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_MaterialInputComponent2);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    final _text_5 = import16.appendText(_el_1, ' ');
    _el_6 = import16.appendElement(doc, _el_1, 'label');
    this.updateChildClass(_el_6, 'input-container');
    addShimE(_el_6);
    _el_7 = import16.appendDiv(doc, _el_6);
    import16.setAttribute(_el_7, 'aria-hidden', 'true');
    this.updateChildClass(_el_7, 'label');
    addShimC(_el_7);
    final _text_8 = import16.appendText(_el_7, ' ');
    _el_9 = import16.appendSpan(doc, _el_7);
    this.updateChildClass(_el_9, 'label-text');
    addShimE(_el_9);
    _el_9.append(_textBinding_10.element);
    _el_11 = import16.appendElement(doc, _el_6, 'input');
    this.updateChildClass(_el_11, 'input');
    import16.setAttribute(_el_11, 'focusableElement', '');
    addShimC(_el_11);
    _DefaultValueAccessor_11_5 = import6.DefaultValueAccessor(_el_11);
    _FocusableDirective_11_6 = import7.FocusableDirective(_el_11);
    _NgValueAccessor_11_7 = [_DefaultValueAccessor_11_5];
    _NgModel_11_8 = import9.NgModel(null, _NgValueAccessor_11_7);
    final _text_12 = import16.appendText(_el_1, ' ');
    final _anchor_13 = import16.appendAnchor(_el_1);
    _appEl_13 = ViewContainer(13, 1, this, _anchor_13);
    TemplateRef _TemplateRef_13_8 = TemplateRef(_appEl_13, viewFactory_MaterialInputComponent3);
    _NgIf_13_9 = NgIf(_appEl_13, _TemplateRef_13_8);
    final _text_14 = import16.appendText(_el_1, ' ');
    final _anchor_15 = import16.appendAnchor(_el_1);
    _appEl_15 = ViewContainer(15, 1, this, _anchor_15);
    TemplateRef _TemplateRef_15_8 = TemplateRef(_appEl_15, viewFactory_MaterialInputComponent4);
    _NgIf_15_9 = NgIf(_appEl_15, _TemplateRef_15_8);
    final _text_16 = import16.appendText(_el_1, ' ');
    project(_el_1, 0);
    final _el_17 = import16.appendDiv(doc, _el_0);
    this.updateChildClass(_el_17, 'underline');
    addShimC(_el_17);
    _el_18 = import16.appendDiv(doc, _el_17);
    this.updateChildClass(_el_18, 'disabled-underline');
    addShimC(_el_18);
    _el_19 = import16.appendDiv(doc, _el_17);
    this.updateChildClass(_el_19, 'unfocused-underline');
    addShimC(_el_19);
    _el_20 = import16.appendDiv(doc, _el_17);
    this.updateChildClass(_el_20, 'focused-underline');
    addShimC(_el_20);
    final _anchor_21 = import16.appendAnchor(parentRenderNode);
    _appEl_21 = ViewContainer(21, null, this, _anchor_21);
    TemplateRef _TemplateRef_21_8 = TemplateRef(_appEl_21, viewFactory_MaterialInputComponent5);
    _NgIf_21_9 = NgIf(_appEl_21, _TemplateRef_21_8);
    _el_11.addEventListener('blur', eventHandler1(_handle_blur_11_0));
    _el_11.addEventListener('change', eventHandler1(_handle_change_11_1));
    _el_11.addEventListener('focus', eventHandler1(_ctx.inputFocusAction));
    _el_11.addEventListener('input', eventHandler1(_handle_input_11_3));
    _ctx.focusable = _FocusableDirective_11_6;
    _ctx.inputEl = ElementRef(_el_11);
    _ctx.popupSourceEl = ElementRef(_el_0);
    init0();
    _rootEl.addEventListener('focus', eventHandler0(_ctx.focus));
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((11 == nodeIndex)) {
      if (identical(token, import19.Focusable)) {
        return _FocusableDirective_11_6;
      }
      if (identical(token, const import20.MultiToken<import21.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return _NgValueAccessor_11_7;
      }
      if ((identical(token, import9.NgModel) || identical(token, import22.NgControl))) {
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
    _NgIf_2_9.ngIf = _ctx.hasLeadingGlyph;
    _NgIf_4_9.ngIf = _ctx.hasLeadingText;
    changed = false;
    _NgModel_11_8.model = _ctx.inputText;
    _NgModel_11_8.ngAfterChanges();
    if (((!import23.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_11_8.ngOnInit();
    }
    _NgIf_13_9.ngIf = _ctx.hasTrailingText;
    _NgIf_15_9.ngIf = _ctx.hasTrailingGlyph;
    _NgIf_21_9.ngIf = _ctx.displayBottomPanel;
    _appEl_2.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _appEl_13.detectChangesInNestedViews();
    _appEl_15.detectChangesInNestedViews();
    _appEl_21.detectChangesInNestedViews();
    final currVal_0 = _ctx.disabled;
    if (import23.checkBinding(_expr_0, currVal_0)) {
      import16.updateClassBinding(_el_1, 'disabled', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_3 = _ctx.floatingLabel;
    if (import23.checkBinding(_expr_3, currVal_3)) {
      import16.updateClassBinding(_el_6, 'floated-label', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.rightAlign;
    if (import23.checkBinding(_expr_4, currVal_4)) {
      import16.updateClassBinding(_el_7, 'right-align', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.labelId;
    if (import23.checkBinding(_expr_5, currVal_5)) {
      import16.updateAttribute(_el_9, 'id', currVal_5);
      _expr_5 = currVal_5;
    }
    final bool currVal_6 = (!_ctx.labelVisible);
    if (import23.checkBinding(_expr_6, currVal_6)) {
      import16.updateClassBinding(_el_9, 'invisible', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.labelAnimated;
    if (import23.checkBinding(_expr_7, currVal_7)) {
      import16.updateClassBinding(_el_9, 'animated', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.labelAnimationReset;
    if (import23.checkBinding(_expr_8, currVal_8)) {
      import16.updateClassBinding(_el_9, 'reset', currVal_8);
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.disabled;
    if (import23.checkBinding(_expr_9, currVal_9)) {
      import16.updateClassBinding(_el_9, 'disabled', currVal_9);
      _expr_9 = currVal_9;
    }
    final currVal_10 = (_ctx.focused && _ctx.floatingLabelVisible);
    if (import23.checkBinding(_expr_10, currVal_10)) {
      import16.updateClassBinding(_el_9, 'focused', currVal_10);
      _expr_10 = currVal_10;
    }
    final currVal_11 = (_ctx.invalid && _ctx.floatingLabelVisible);
    if (import23.checkBinding(_expr_11, currVal_11)) {
      import16.updateClassBinding(_el_9, 'invalid', currVal_11);
      _expr_11 = currVal_11;
    }
    _textBinding_10.updateText(import24.interpolateString0(_ctx.label));
    if (firstCheck) {
      if (!identical(_ctx.inputRole, null)) {
        import16.updateAttribute(_el_11, 'role', _ctx.inputRole);
      }
    }
    final currVal_12 = _ctx.inputAriaActivedescendent;
    if (import23.checkBinding(_expr_12, currVal_12)) {
      import16.updateAttribute(_el_11, 'aria-activedescendant', currVal_12);
      _expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.inputAriaAutocomplete;
    if (import23.checkBinding(_expr_13, currVal_13)) {
      import16.updateAttribute(_el_11, 'aria-autocomplete', currVal_13);
      _expr_13 = currVal_13;
    }
    final currVal_14 = _ctx.inputAriaExpanded;
    if (import23.checkBinding(_expr_14, currVal_14)) {
      import16.updateAttribute(_el_11, 'aria-expanded', currVal_14?.toString());
      _expr_14 = currVal_14;
    }
    final currVal_15 = _ctx.inputAriaHasPopup;
    if (import23.checkBinding(_expr_15, currVal_15)) {
      import16.updateAttribute(_el_11, 'aria-haspopup', currVal_15);
      _expr_15 = currVal_15;
    }
    final currVal_16 = _ctx.invalid;
    if (import23.checkBinding(_expr_16, currVal_16)) {
      import16.updateAttribute(_el_11, 'aria-invalid', currVal_16?.toString());
      _expr_16 = currVal_16;
    }
    final currVal_17 = _ctx.inputAriaLabel;
    if (import23.checkBinding(_expr_17, currVal_17)) {
      import16.updateAttribute(_el_11, 'aria-label', currVal_17);
      _expr_17 = currVal_17;
    }
    final currVal_18 = _ctx.labelId;
    if (import23.checkBinding(_expr_18, currVal_18)) {
      import16.updateAttribute(_el_11, 'aria-labelledby', currVal_18);
      _expr_18 = currVal_18;
    }
    final currVal_19 = _ctx.ariaDescribedBy;
    if (import23.checkBinding(_expr_19, currVal_19)) {
      import16.updateAttribute(_el_11, 'aria-describedby', currVal_19);
      _expr_19 = currVal_19;
    }
    final currVal_20 = _ctx.inputAriaOwns;
    if (import23.checkBinding(_expr_20, currVal_20)) {
      import16.updateAttribute(_el_11, 'aria-owns', currVal_20);
      _expr_20 = currVal_20;
    }
    final currVal_21 = _ctx.disabled;
    if (import23.checkBinding(_expr_21, currVal_21)) {
      import16.updateAttribute(_el_11, 'aria-disabled', currVal_21?.toString());
      _expr_21 = currVal_21;
    }
    final currVal_23 = _ctx.disabled;
    if (import23.checkBinding(_expr_23, currVal_23)) {
      import16.updateClassBinding(_el_11, 'disabledInput', currVal_23);
      _expr_23 = currVal_23;
    }
    final currVal_24 = _ctx.rightAlign;
    if (import23.checkBinding(_expr_24, currVal_24)) {
      import16.updateClassBinding(_el_11, 'right-align', currVal_24);
      _expr_24 = currVal_24;
    }
    final currVal_25 = _ctx.multiple;
    if (import23.checkBinding(_expr_25, currVal_25)) {
      import16.setProperty(_el_11, 'multiple', currVal_25);
      _expr_25 = currVal_25;
    }
    final currVal_26 = _ctx.disabled;
    if (import23.checkBinding(_expr_26, currVal_26)) {
      import16.setProperty(_el_11, 'readOnly', currVal_26);
      _expr_26 = currVal_26;
    }
    final currVal_27 = _ctx.inputTabIndex;
    if (import23.checkBinding(_expr_27, currVal_27)) {
      import16.setProperty(_el_11, 'tabIndex', currVal_27);
      _expr_27 = currVal_27;
    }
    final currVal_28 = _ctx.type;
    if (import23.checkBinding(_expr_28, currVal_28)) {
      import16.setProperty(_el_11, 'type', currVal_28);
      _expr_28 = currVal_28;
    }
    final bool currVal_32 = (!_ctx.disabled);
    if (import23.checkBinding(_expr_32, currVal_32)) {
      import16.updateClassBinding(_el_18, 'invisible', currVal_32);
      _expr_32 = currVal_32;
    }
    final currVal_33 = _ctx.disabled;
    if (import23.checkBinding(_expr_33, currVal_33)) {
      import16.updateClassBinding(_el_19, 'invisible', currVal_33);
      _expr_33 = currVal_33;
    }
    final currVal_34 = _ctx.invalid;
    if (import23.checkBinding(_expr_34, currVal_34)) {
      import16.updateClassBinding(_el_19, 'invalid', currVal_34);
      _expr_34 = currVal_34;
    }
    final bool currVal_35 = ((!_ctx.focused) || _ctx.disabled);
    if (import23.checkBinding(_expr_35, currVal_35)) {
      import16.updateClassBinding(_el_20, 'invisible', currVal_35);
      _expr_35 = currVal_35;
    }
    final currVal_36 = _ctx.invalid;
    if (import23.checkBinding(_expr_36, currVal_36)) {
      import16.updateClassBinding(_el_20, 'invalid', currVal_36);
      _expr_36 = currVal_36;
    }
    final currVal_37 = _ctx.underlineAnimated;
    if (import23.checkBinding(_expr_37, currVal_37)) {
      import16.updateClassBinding(_el_20, 'animated', currVal_37);
      _expr_37 = currVal_37;
    }
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _appEl_4.destroyNestedViews();
    _appEl_13.destroyNestedViews();
    _appEl_15.destroyNestedViews();
    _appEl_21.destroyNestedViews();
  }

  void _handle_blur_11_0($event) {
    final local_inputEl = _el_11;
    final _ctx = ctx;
    _ctx.inputBlurAction($event, local_inputEl.validity.valid, local_inputEl.validationMessage);
    _DefaultValueAccessor_11_5.touchHandler();
  }

  void _handle_change_11_1($event) {
    final local_inputEl = _el_11;
    final _ctx = ctx;
    _ctx.inputChange(local_inputEl.value, local_inputEl.validity.valid, local_inputEl.validationMessage);
    $event.stopPropagation();
  }

  void _handle_input_11_3($event) {
    final local_inputEl = _el_11;
    final _ctx = ctx;
    _ctx.inputKeypress(local_inputEl.value, local_inputEl.validity.valid, local_inputEl.validationMessage);
    _DefaultValueAccessor_11_5.handleChange($event.target.value);
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import11.ComponentStyles.scoped(styles$MaterialInputComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialInputComponent> _MaterialInputComponentNgFactory = const ComponentFactory('material-input:not(material-input[multiline])', viewFactory_MaterialInputComponentHost0);
ComponentFactory<import2.MaterialInputComponent> get MaterialInputComponentNgFactory {
  return _MaterialInputComponentNgFactory;
}

class _ViewMaterialInputComponent1 extends AppView<import2.MaterialInputComponent> {
  import25.ViewMaterialIconComponent0 _compView_1;
  import26.MaterialIconComponent _MaterialIconComponent_1_5;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  import10.Element _el_0;
  import10.Element _el_1;
  _ViewMaterialInputComponent1(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    final doc = import10.document;
    _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'leading-text');
    addShimE(_el_0);
    _compView_1 = import25.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    this.updateChildClassNonHtml(_el_1, 'glyph leading');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import26.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_3 = import24.interpolateString0(_ctx.leadingGlyph);
    if (import23.checkBinding(_expr_3, currVal_3)) {
      _MaterialIconComponent_1_5.icon = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    final currVal_0 = _ctx.floatingLabel;
    if (import23.checkBinding(_expr_0, currVal_0)) {
      import16.updateClassBinding(_el_0, 'floated-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.leadingGlyphAriaLabel;
    if (import23.checkBinding(_expr_1, currVal_1)) {
      import16.updateAttribute(_el_1, 'aria-label', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabled;
    if (import23.checkBinding(_expr_2, currVal_2)) {
      import16.updateAttribute(_el_1, 'disabled', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroyInternalState();
  }
}

AppView<void> viewFactory_MaterialInputComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent1(parentView, parentIndex);
}

class _ViewMaterialInputComponent2 extends AppView<import2.MaterialInputComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  bool _expr_0;
  import10.Element _el_0;
  _ViewMaterialInputComponent2(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    final doc = import10.document;
    _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'leading-text');
    addShimE(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.floatingLabel;
    if (import23.checkBinding(_expr_0, currVal_0)) {
      import16.updateClassBinding(_el_0, 'floated-label', currVal_0);
      _expr_0 = currVal_0;
    }
    _textBinding_1.updateText(import24.interpolateString0(_ctx.leadingText));
  }
}

AppView<void> viewFactory_MaterialInputComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent2(parentView, parentIndex);
}

class _ViewMaterialInputComponent3 extends AppView<import2.MaterialInputComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  bool _expr_0;
  import10.Element _el_0;
  _ViewMaterialInputComponent3(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    final doc = import10.document;
    _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'trailing-text');
    addShimE(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.floatingLabel;
    if (import23.checkBinding(_expr_0, currVal_0)) {
      import16.updateClassBinding(_el_0, 'floated-label', currVal_0);
      _expr_0 = currVal_0;
    }
    _textBinding_1.updateText(import24.interpolateString0(_ctx.trailingText));
  }
}

AppView<void> viewFactory_MaterialInputComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent3(parentView, parentIndex);
}

class _ViewMaterialInputComponent4 extends AppView<import2.MaterialInputComponent> {
  import25.ViewMaterialIconComponent0 _compView_1;
  import26.MaterialIconComponent _MaterialIconComponent_1_5;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  import10.Element _el_0;
  import10.Element _el_1;
  _ViewMaterialInputComponent4(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    final doc = import10.document;
    _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'trailing-text');
    addShimE(_el_0);
    _compView_1 = import25.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    this.updateChildClassNonHtml(_el_1, 'glyph trailing');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import26.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_3 = import24.interpolateString0(_ctx.trailingGlyph);
    if (import23.checkBinding(_expr_3, currVal_3)) {
      _MaterialIconComponent_1_5.icon = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    final currVal_0 = _ctx.floatingLabel;
    if (import23.checkBinding(_expr_0, currVal_0)) {
      import16.updateClassBinding(_el_0, 'floated-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.trailingGlyphAriaLabel;
    if (import23.checkBinding(_expr_1, currVal_1)) {
      import16.updateAttribute(_el_1, 'aria-label', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.disabled;
    if (import23.checkBinding(_expr_2, currVal_2)) {
      import16.updateAttribute(_el_1, 'disabled', currVal_2?.toString());
      _expr_2 = currVal_2;
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroyInternalState();
  }
}

AppView<void> viewFactory_MaterialInputComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent4(parentView, parentIndex);
}

class _ViewMaterialInputComponent5 extends AppView<import2.MaterialInputComponent> {
  import27.NgSwitch _NgSwitch_0_5;
  ViewContainer _appEl_1;
  import27.NgSwitchWhen _NgSwitchWhen_1_9;
  ViewContainer _appEl_2;
  import27.NgSwitchWhen _NgSwitchWhen_2_9;
  ViewContainer _appEl_3;
  import27.NgSwitchWhen _NgSwitchWhen_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  var _expr_0;
  _ViewMaterialInputComponent5(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    final doc = import10.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'bottom-section');
    addShimC(_el_0);
    _NgSwitch_0_5 = import27.NgSwitch();
    final _anchor_1 = import16.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialInputComponent6);
    _NgSwitchWhen_1_9 = import27.NgSwitchWhen(_appEl_1, _TemplateRef_1_8, _NgSwitch_0_5);
    final _anchor_2 = import16.appendAnchor(_el_0);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialInputComponent7);
    _NgSwitchWhen_2_9 = import27.NgSwitchWhen(_appEl_2, _TemplateRef_2_8, _NgSwitch_0_5);
    final _anchor_3 = import16.appendAnchor(_el_0);
    _appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_MaterialInputComponent8);
    _NgSwitchWhen_3_9 = import27.NgSwitchWhen(_appEl_3, _TemplateRef_3_8, _NgSwitch_0_5);
    final _anchor_4 = import16.appendAnchor(_el_0);
    _appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_MaterialInputComponent9);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    init1(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import27.NgSwitch) && (nodeIndex <= 4))) {
      return _NgSwitch_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.bottomPanelState;
    if (import23.checkBinding(_expr_0, currVal_0)) {
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

AppView<void> viewFactory_MaterialInputComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent5(parentView, parentIndex);
}

class _ViewMaterialInputComponent6 extends AppView<import2.MaterialInputComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  bool _expr_1;
  bool _expr_2;
  var _expr_3;
  import10.DivElement _el_0;
  _ViewMaterialInputComponent6(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    final doc = import10.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'error-text');
    import16.setAttribute(_el_0, 'role', 'alert');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    final _text_2 = import16.appendText(_el_0, ' ');
    project(_el_0, 1);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      if (!identical(_ctx.errorTextId, null)) {
        import16.updateAttribute(_el_0, 'id', _ctx.errorTextId);
      }
    }
    final currVal_1 = _ctx.focused;
    if (import23.checkBinding(_expr_1, currVal_1)) {
      import16.updateClassBinding(_el_0, 'focused', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.invalid;
    if (import23.checkBinding(_expr_2, currVal_2)) {
      import16.updateClassBinding(_el_0, 'invalid', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = import24.interpolate0((!_ctx.invalid));
    if (import23.checkBinding(_expr_3, currVal_3)) {
      import16.setAttribute(_el_0, 'aria-hidden', currVal_3);
      _expr_3 = currVal_3;
    }
    _textBinding_1.updateText(import24.interpolateString0(_ctx.errorMessage));
  }
}

AppView<void> viewFactory_MaterialInputComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent6(parentView, parentIndex);
}

class _ViewMaterialInputComponent7 extends AppView<import2.MaterialInputComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  _ViewMaterialInputComponent7(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    final doc = import10.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'hint-text');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import24.interpolateString0(_ctx.hintText));
  }
}

AppView<void> viewFactory_MaterialInputComponent7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent7(parentView, parentIndex);
}

class _ViewMaterialInputComponent8 extends AppView<import2.MaterialInputComponent> {
  _ViewMaterialInputComponent8(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    final doc = import10.document;
    final _el_0 = doc.createElement('div');
    import16.setAttribute(_el_0, 'aria-hidden', 'true');
    this.updateChildClass(_el_0, 'spaceholder');
    _el_0.tabIndex = -1;
    addShimC(_el_0);
    final _text_1 = import16.appendText(_el_0, ' ');
    _el_0.addEventListener('focus', eventHandler1(_handle_focus_0_0));
    init1(_el_0);
  }

  void _handle_focus_0_0($event) {
    $event.stopPropagation();
  }
}

AppView<void> viewFactory_MaterialInputComponent8(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent8(parentView, parentIndex);
}

class _ViewMaterialInputComponent9 extends AppView<import2.MaterialInputComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  bool _expr_0;
  import10.DivElement _el_0;
  _ViewMaterialInputComponent9(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    final doc = import10.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'counter');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.invalid;
    if (import23.checkBinding(_expr_0, currVal_0)) {
      import16.updateClassBinding(_el_0, 'invalid', currVal_0);
      _expr_0 = currVal_0;
    }
    _textBinding_1.updateText(import24.interpolateString0(_ctx.msgCharacterCounter(_ctx.inputTextLength, _ctx.maxCount)));
  }
}

AppView<void> viewFactory_MaterialInputComponent9(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponent9(parentView, parentIndex);
}

final List<dynamic> styles$MaterialInputComponentHost = const [];

class _ViewMaterialInputComponentHost0 extends AppView<import2.MaterialInputComponent> {
  ViewMaterialInputComponent0 _compView_0;
  import28.DeferredValidator _DeferredValidator_0_5;
  import2.MaterialInputComponent _MaterialInputComponent_0_6;
  List<dynamic> __NgValidators_0_7;
  _ViewMaterialInputComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import12.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<dynamic> get _NgValidators_0_7 {
    if ((__NgValidators_0_7 == null)) {
      (__NgValidators_0_7 = [_DeferredValidator_0_5]);
    }
    return __NgValidators_0_7;
  }

  @override
  ComponentRef<import2.MaterialInputComponent> build() {
    _compView_0 = ViewMaterialInputComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DeferredValidator_0_5 = import28.DeferredValidator();
    _MaterialInputComponent_0_6 = import2.MaterialInputComponent(null, null, null, null, _compView_0, _DeferredValidator_0_5);
    _compView_0.create(_MaterialInputComponent_0_6, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialInputComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import28.DeferredValidator)) {
        return _DeferredValidator_0_5;
      }
      if (((((identical(token, import2.MaterialInputComponent) || identical(token, import29.ReferenceDirective)) || identical(token, import19.Focusable)) || identical(token, import30.HasDisabled)) || identical(token, import31.BaseMaterialInput))) {
        return _MaterialInputComponent_0_6;
      }
      if (identical(token, const import20.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_0_7;
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
    if ((!import23.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_0_6.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialInputComponent_0_6.ngOnDestroy();
  }
}

AppView<import2.MaterialInputComponent> viewFactory_MaterialInputComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialInputComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialInputComponent, MaterialInputComponentNgFactory);
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
}
