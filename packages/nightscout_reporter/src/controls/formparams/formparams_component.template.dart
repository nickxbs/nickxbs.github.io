// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'formparams_component.dart';
export 'formparams_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:angular_components/material_input/material_input.template.dart' as _ref2;
import 'package:nightscout_reporter/src/forms/base-print.template.dart' as _ref3;
import 'package:nightscout_reporter/src/controls/formparams/formparams_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'formparams_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:angular/src/common/directives/ng_if.dart';
import '../../forms/base-print.dart' as import15;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as import16;
import 'package:angular_forms/src/directives/ng_model.dart' as import17;
import 'package:angular_components/material_checkbox/material_checkbox.dart' as import18;
import 'package:angular_forms/src/directives/ng_control.dart' as import19;
import 'package:angular_components/interfaces/has_disabled.dart' as import20;
import 'package:angular/src/runtime/text_binding.dart' as import21;
import 'package:angular_components/material_slider/material_slider.template.dart' as import22;
import 'package:angular_components/material_slider/material_slider.dart' as import23;
import 'package:angular/src/di/errors.dart' as import24;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import25;
import 'package:angular/src/runtime/interpolate.dart' as import26;
import 'package:angular_components/material_input/material_input.template.dart' as import27;
import 'package:angular_components/material_input/deferred_validator.dart' as import28;
import 'package:angular_components/material_input/material_input.dart' as import29;
import 'package:angular_components/material_input/material_input_default_value_accessor.dart' as import30;
import 'package:angular_components/material_input/base_material_input.dart' as import31;
import 'package:angular_components/utils/angular/reference/reference.dart' as import32;
import 'package:angular_components/focus/focus_interface.dart' as import33;
import 'package:angular/src/core/di/opaque_token.dart' as import34;
import 'package:angular_components/material_select/material_dropdown_select.template.dart' as import35;
import 'package:angular_components/material_select/material_dropdown_select.dart' as import36;
import 'package:angular_components/model/a11y/active_item.dart' as import37;
import 'package:angular_components/utils/id_generator/id_generator.dart' as import38;
import 'package:angular_components/src/laminate/popup/popup_size_provider.dart' as import39;
import 'package:angular_components/mixins/material_dropdown_base.dart' as import40;
import 'package:angular_components/material_select/activation_handler.dart' as import41;
import 'package:angular_components/model/ui/has_renderer.dart' as import42;
import 'package:angular_components/content/deferred_content_aware.dart' as import43;
import 'package:angular_components/model/selection/selection_container.dart' as import44;
import 'package:angular_components/material_select/material_select_item.template.dart' as import45;
import 'package:angular_components/material_select/material_select_item.dart' as import46;
import 'dart:core';

final List<dynamic> styles$FormparamsComponent = [import0.styles];

class ViewFormparamsComponent0 extends AppView<import2.FormparamsComponent> {
  ViewContainer _appEl_0;
  import4.NgFor _NgFor_0_9;
  var _expr_0;
  static import5.ComponentStyles _componentStyles;
  ViewFormparamsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('formparams');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:nightscout_reporter/lib/src/controls/formparams/formparams_component.dart' : null);
  }

  @override
  ComponentRef<import2.FormparamsComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_FormparamsComponent1);
    _NgFor_0_9 = import4.NgFor(_appEl_0, _TemplateRef_0_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.paramList;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _NgFor_0_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import13.AppViewUtils.throwOnChanges)) {
      _NgFor_0_9.ngDoCheck();
    }
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$FormparamsComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.FormparamsComponent> _FormparamsComponentNgFactory = const ComponentFactory('formparams', viewFactory_FormparamsComponentHost0);
ComponentFactory<import2.FormparamsComponent> get FormparamsComponentNgFactory {
  return _FormparamsComponentNgFactory;
}

class _ViewFormparamsComponent1 extends AppView<import2.FormparamsComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  _ViewFormparamsComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.FormparamsComponent> build() {
    final _anchor_0 = import11.createAnchor();
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_FormparamsComponent2);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final _anchor_1 = import11.createAnchor();
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_FormparamsComponent3);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import11.createAnchor();
    _appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_FormparamsComponent4);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _anchor_3 = import11.createAnchor();
    _appEl_3 = ViewContainer(3, null, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_FormparamsComponent5);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    final _anchor_4 = import11.createAnchor();
    _appEl_4 = ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_FormparamsComponent7);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    init([_appEl_0, _appEl_1, _appEl_2, _appEl_3, _appEl_4], null);
  }

  @override
  void detectChangesInternal() {
    final local_param = import9.unsafeCast<import15.ParamInfo>(locals['\$implicit']);
    _NgIf_0_9.ngIf = (local_param.boolValue != null);
    _NgIf_1_9.ngIf = ((local_param.intValue != null) && (local_param.list == null));
    _NgIf_2_9.ngIf = (local_param.stringValue != null);
    _NgIf_3_9.ngIf = (local_param.list != null);
    _NgIf_4_9.ngIf = ((local_param.subParams != null) && local_param.boolValue);
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _appEl_3.destroyNestedViews();
    _appEl_4.destroyNestedViews();
  }
}

AppView<void> viewFactory_FormparamsComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewFormparamsComponent1(parentView, parentIndex);
}

class _ViewFormparamsComponent2 extends AppView<import2.FormparamsComponent> {
  import16.ViewMaterialCheckboxComponent0 _compView_1;
  import17.NgModel _NgModel_1_5;
  import18.MaterialCheckboxComponent _MaterialCheckboxComponent_1_7;
  String _expr_0;
  bool _expr_2;
  String _expr_3;
  import8.Element _el_1;
  _ViewFormparamsComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.FormparamsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _compView_1 = import16.ViewMaterialCheckboxComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _NgModel_1_5 = import17.NgModel(null, null);
    _MaterialCheckboxComponent_1_7 = import18.MaterialCheckboxComponent(_el_1, _compView_1, _NgModel_1_5, null, null);
    _compView_1.create(_MaterialCheckboxComponent_1_7, [const []]);
    final subscription_0 = _NgModel_1_5.update.listen(eventHandler1(_handle_ngModelChange_1_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((1 == nodeIndex)) {
      if ((identical(token, import17.NgModel) || identical(token, import19.NgControl))) {
        return _NgModel_1_5;
      }
      if (identical(token, import20.HasDisabled)) {
        return _MaterialCheckboxComponent_1_7;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_param = import9.unsafeCast<import15.ParamInfo>(parentView.locals['\$implicit']);
    changed = false;
    _NgModel_1_5.model = local_param.boolValue;
    _NgModel_1_5.ngAfterChanges();
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_1_5.ngOnInit();
    }
    changed = false;
    final currVal_2 = local_param.isDisabled;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _MaterialCheckboxComponent_1_7.disabled = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_param.title;
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _MaterialCheckboxComponent_1_7.label = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    final currVal_0 = _ctx.getClass(local_param);
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _compView_1.updateChildClassNonHtml(_el_1, currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_1.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroyInternalState();
    _MaterialCheckboxComponent_1_7.ngOnDestroy();
  }

  void _handle_ngModelChange_1_0($event) {
    final local_param = import9.unsafeCast<import15.ParamInfo>(parentView.locals['\$implicit']);
    local_param.boolValue = $event;
  }
}

AppView<void> viewFactory_FormparamsComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewFormparamsComponent2(parentView, parentIndex);
}

class _ViewFormparamsComponent3 extends AppView<import2.FormparamsComponent> {
  final import21.TextBinding _textBinding_2 = import21.TextBinding();
  final import21.TextBinding _textBinding_4 = import21.TextBinding();
  import22.ViewMaterialSliderComponent0 _compView_5;
  import23.MaterialSliderComponent _MaterialSliderComponent_5_5;
  String _expr_0;
  String _expr_1;
  num _expr_2;
  num _expr_3;
  num _expr_4;
  import8.DivElement _el_1;
  import8.Element _el_5;
  _ViewFormparamsComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.FormparamsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'paramSlider');
    addShimC(_el_0);
    _el_1 = import11.appendDiv(doc, _el_0);
    addShimC(_el_1);
    _el_1.append(_textBinding_2.element);
    final _text_3 = import11.appendText(_el_1, ': ');
    _el_1.append(_textBinding_4.element);
    _compView_5 = import22.ViewMaterialSliderComponent0(this, 5);
    _el_5 = _compView_5.rootEl;
    _el_0.append(_el_5);
    addShimC(_el_5);
    _MaterialSliderComponent_5_5 = (import9.isDevMode
        ? import24.debugInjectorWrap(import23.MaterialSliderComponent, () {
            return import23.MaterialSliderComponent(_compView_5, parentView.injectorGet(import25.DomService, viewData.parentIndex));
          })
        : import23.MaterialSliderComponent(_compView_5, parentView.injectorGet(import25.DomService, viewData.parentIndex)));
    _compView_5.create0(_MaterialSliderComponent_5_5);
    import13.appViewUtils.eventManager.addEventListener(_el_5, 'minChange', eventHandler1(_handle_minChange_5_0));
    import13.appViewUtils.eventManager.addEventListener(_el_5, 'maxChange', eventHandler1(_handle_maxChange_5_1));
    final subscription_0 = _MaterialSliderComponent_5_5.valueChange.listen(eventHandler1(_handle_valueChange_5_2));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import23.MaterialSliderComponent) || identical(token, import20.HasDisabled)) && (5 == nodeIndex))) {
      return _MaterialSliderComponent_5_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_param = import9.unsafeCast<import15.ParamInfo>(parentView.locals['\$implicit']);
    changed = false;
    final currVal_2 = local_param.sliderValue;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _MaterialSliderComponent_5_5.value = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_param.min;
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _MaterialSliderComponent_5_5.min = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = local_param.max;
    if (import13.checkBinding(_expr_4, currVal_4)) {
      _MaterialSliderComponent_5_5.max = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    if (changed) {
      _MaterialSliderComponent_5_5.ngAfterChanges();
    }
    final currVal_0 = _ctx.getClass(local_param);
    if (import13.checkBinding(_expr_0, currVal_0)) {
      this.updateChildClass(_el_1, currVal_0);
      _expr_0 = currVal_0;
    }
    _textBinding_2.updateText(import26.interpolateString0(local_param.title));
    _textBinding_4.updateText(import26.interpolate0(local_param.intValue));
    final currVal_1 = _ctx.getClass(local_param, 'slider');
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _compView_5.updateChildClassNonHtml(_el_5, currVal_1);
      _expr_1 = currVal_1;
    }
    _compView_5.detectHostChanges(firstCheck);
    _compView_5.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_5.destroyInternalState();
  }

  void _handle_minChange_5_0($event) {
    final local_param = import9.unsafeCast<import15.ParamInfo>(parentView.locals['\$implicit']);
    local_param.min = $event;
  }

  void _handle_maxChange_5_1($event) {
    final local_param = import9.unsafeCast<import15.ParamInfo>(parentView.locals['\$implicit']);
    local_param.max = $event;
  }

  void _handle_valueChange_5_2($event) {
    final local_param = import9.unsafeCast<import15.ParamInfo>(parentView.locals['\$implicit']);
    local_param.sliderValue = $event;
  }
}

AppView<void> viewFactory_FormparamsComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewFormparamsComponent3(parentView, parentIndex);
}

class _ViewFormparamsComponent4 extends AppView<import2.FormparamsComponent> {
  import27.ViewMaterialInputComponent0 _compView_1;
  import28.DeferredValidator _DeferredValidator_1_5;
  import29.MaterialInputComponent _MaterialInputComponent_1_6;
  import30.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_1_8;
  List<dynamic> __NgValidators_1_9;
  String _expr_0;
  var _expr_1;
  String _expr_2;
  import8.Element _el_1;
  _ViewFormparamsComponent4(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  List<dynamic> get _NgValidators_1_9 {
    if ((__NgValidators_1_9 == null)) {
      (__NgValidators_1_9 = [_DeferredValidator_1_5]);
    }
    return __NgValidators_1_9;
  }

  @override
  ComponentRef<import2.FormparamsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _compView_1 = import27.ViewMaterialInputComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    import11.setAttribute(_el_1, 'floatingLabel', '');
    addShimC(_el_1);
    _DeferredValidator_1_5 = import28.DeferredValidator();
    _MaterialInputComponent_1_6 = import29.MaterialInputComponent(null, null, null, null, _compView_1, _DeferredValidator_1_5);
    _MaterialInputDefaultValueAccessor_1_8 = import30.MaterialInputDefaultValueAccessor(_MaterialInputComponent_1_6, null);
    _compView_1.create(_MaterialInputComponent_1_6, [const [], const []]);
    import13.appViewUtils.eventManager.addEventListener(_el_1, 'inputTextChange', eventHandler1(_handle_inputTextChange_1_0));
    init1(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((1 == nodeIndex)) {
      if (identical(token, import28.DeferredValidator)) {
        return _DeferredValidator_1_5;
      }
      if (((((identical(token, import29.MaterialInputComponent) || identical(token, import31.BaseMaterialInput)) || identical(token, import32.ReferenceDirective)) || identical(token, import33.Focusable)) || identical(token, import20.HasDisabled))) {
        return _MaterialInputComponent_1_6;
      }
      if (identical(token, const import34.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_1_9;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_param = import9.unsafeCast<import15.ParamInfo>(parentView.locals['\$implicit']);
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_1_6.floatingLabel = true;
      changed = true;
    }
    final currVal_2 = local_param.title;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _MaterialInputComponent_1_6.label = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    final currVal_0 = _ctx.getClass(local_param);
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _compView_1.updateChildClassNonHtml(_el_1, currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = local_param.stringValue;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      import11.setProperty(_el_1, 'inputText', currVal_1);
      _expr_1 = currVal_1;
    }
    _compView_1.detectChanges();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_1_6.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_1.destroyInternalState();
    _MaterialInputComponent_1_6.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_1_8.ngOnDestroy();
  }

  void _handle_inputTextChange_1_0($event) {
    final local_param = import9.unsafeCast<import15.ParamInfo>(parentView.locals['\$implicit']);
    local_param.stringValue = $event;
  }
}

AppView<void> viewFactory_FormparamsComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewFormparamsComponent4(parentView, parentIndex);
}

class _ViewFormparamsComponent5 extends AppView<import2.FormparamsComponent> {
  final import21.TextBinding _textBinding_2 = import21.TextBinding();
  import35.ViewMaterialDropdownSelectComponent0 _compView_3;
  import36.MaterialDropdownSelectComponent _MaterialDropdownSelectComponent_3_5;
  import37.ActiveItemModel<dynamic> __ActiveItemModel_3_13;
  ViewContainer _appEl_4;
  import4.NgFor _NgFor_4_9;
  String _expr_0;
  String _expr_1;
  var _expr_2;
  String _expr_3;
  var _expr_6;
  import8.DivElement _el_1;
  import8.Element _el_3;
  _ViewFormparamsComponent5(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  import37.ActiveItemModel<dynamic> get _ActiveItemModel_3_13 {
    if ((__ActiveItemModel_3_13 == null)) {
      (__ActiveItemModel_3_13 = import36.fromDropdown(_MaterialDropdownSelectComponent_3_5));
    }
    return __ActiveItemModel_3_13;
  }

  @override
  ComponentRef<import2.FormparamsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'paramList');
    addShimC(_el_0);
    _el_1 = import11.appendDiv(doc, _el_0);
    addShimC(_el_1);
    _el_1.append(_textBinding_2.element);
    _compView_3 = import35.ViewMaterialDropdownSelectComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    _el_0.append(_el_3);
    import11.setAttribute(_el_3, 'listAutoFocus', '');
    import11.setAttribute(_el_3, 'popupClass', 'paramSelect');
    import11.setAttribute(_el_3, 'slide', 'y');
    addShimC(_el_3);
    _MaterialDropdownSelectComponent_3_5 = (import9.isDevMode
        ? import24.debugInjectorWrap(import36.MaterialDropdownSelectComponent, () {
            return import36.MaterialDropdownSelectComponent(parentView.injectorGetOptional(import38.IdGenerator, viewData.parentIndex), parentView.injectorGetOptional(import39.PopupSizeProvider, viewData.parentIndex), parentView.injectorGetOptional(const import34.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex), 'paramSelect', null, _compView_3, _el_3);
          })
        : import36.MaterialDropdownSelectComponent(parentView.injectorGetOptional(import38.IdGenerator, viewData.parentIndex), parentView.injectorGetOptional(import39.PopupSizeProvider, viewData.parentIndex), parentView.injectorGetOptional(const import34.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex), 'paramSelect', null, _compView_3, _el_3));
    final _anchor_4 = import11.createAnchor();
    _appEl_4 = ViewContainer(4, 3, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_FormparamsComponent6);
    _NgFor_4_9 = import4.NgFor(_appEl_4, _TemplateRef_4_8);
    _compView_3.create(_MaterialDropdownSelectComponent_3_5, [
      const [],
      const [],
      const [],
      [_appEl_4],
      const [],
      const []
    ]);
    init1(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((3 <= nodeIndex) && (nodeIndex <= 4))) {
      if ((identical(token, import37.ActiveItemModel) && (3 == nodeIndex))) {
        return _ActiveItemModel_3_13;
      }
      if ((((((((identical(token, import36.MaterialDropdownSelectComponent) || identical(token, import40.DropdownHandle)) || identical(token, import41.ActivationHandler)) || identical(token, import20.HasDisabled)) || identical(token, import42.HasRenderer)) || identical(token, import43.DeferredContentAware)) || identical(token, import44.SelectionContainer)) || identical(token, import39.PopupSizeProvider))) {
        return _MaterialDropdownSelectComponent_3_5;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_param = import9.unsafeCast<import15.ParamInfo>(parentView.locals['\$implicit']);
    changed = false;
    if (firstCheck) {
      _MaterialDropdownSelectComponent_3_5.slide = 'y';
      changed = true;
      _MaterialDropdownSelectComponent_3_5.listAutoFocus = true;
      changed = true;
    }
    final currVal_3 = local_param.listValue;
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _MaterialDropdownSelectComponent_3_5.buttonText = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _MaterialDropdownSelectComponent_3_5.ngAfterChanges();
    }
    final currVal_6 = local_param.list;
    if (import13.checkBinding(_expr_6, currVal_6)) {
      _NgFor_4_9.ngForOf = currVal_6;
      _expr_6 = currVal_6;
    }
    if ((!import13.AppViewUtils.throwOnChanges)) {
      _NgFor_4_9.ngDoCheck();
    }
    _appEl_4.detectChangesInNestedViews();
    final currVal_0 = _ctx.getClass(local_param);
    if (import13.checkBinding(_expr_0, currVal_0)) {
      this.updateChildClass(_el_1, currVal_0);
      _expr_0 = currVal_0;
    }
    _textBinding_2.updateText(import26.interpolateString0(local_param.title));
    final currVal_1 = _ctx.getClass(local_param);
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _compView_3.updateChildClassNonHtml(_el_3, currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = local_param.title;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      import11.setProperty(_el_3, 'label', currVal_2);
      _expr_2 = currVal_2;
    }
    _compView_3.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_4.destroyNestedViews();
    _compView_3.destroyInternalState();
    _MaterialDropdownSelectComponent_3_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_FormparamsComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewFormparamsComponent5(parentView, parentIndex);
}

class _ViewFormparamsComponent6 extends AppView<import2.FormparamsComponent> {
  final import21.TextBinding _textBinding_2 = import21.TextBinding();
  import45.ViewMaterialSelectItemComponent0 _compView_0;
  import46.MaterialSelectItemComponent _MaterialSelectItemComponent_0_5;
  var _expr_0;
  _ViewFormparamsComponent6(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.FormparamsComponent> build() {
    _compView_0 = import45.ViewMaterialSelectItemComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, import26.interpolateString2('', 'selectItem', ' ', import46.MaterialSelectItemComponent.hostClass, ''));
    addShimC(_el_0);
    _MaterialSelectItemComponent_0_5 = import46.MaterialSelectItemComponent(_el_0, import9.unsafeCast<_ViewFormparamsComponent5>(parentView)._MaterialDropdownSelectComponent_3_5, import9.unsafeCast<_ViewFormparamsComponent5>(parentView)._MaterialDropdownSelectComponent_3_5, _compView_0, null);
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
    if ((((identical(token, import44.SelectionItem) || identical(token, import20.HasDisabled)) || identical(token, import42.HasRenderer)) && (nodeIndex <= 2))) {
      return _MaterialSelectItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final local_idx = import9.unsafeCast<int>(locals['index']);
    final local_param = import9.unsafeCast<import15.ParamInfo>(parentView.parentView.locals['\$implicit']);
    final local_item = import9.unsafeCast<String>(locals['\$implicit']);
    final currVal_0 = (local_idx == local_param.intValue);
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_0_5.selected = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_2.updateText(import26.interpolateString0(local_item));
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialSelectItemComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_0_0($event) {
    final local_param = import9.unsafeCast<import15.ParamInfo>(parentView.parentView.locals['\$implicit']);
    final local_idx = import9.unsafeCast<int>(locals['index']);
    local_param.intValue = local_idx;
  }
}

AppView<void> viewFactory_FormparamsComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewFormparamsComponent6(parentView, parentIndex);
}

class _ViewFormparamsComponent7 extends AppView<import2.FormparamsComponent> {
  ViewFormparamsComponent0 _compView_1;
  import2.FormparamsComponent _FormparamsComponent_1_5;
  var _expr_0;
  _ViewFormparamsComponent7(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.FormparamsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'subParams');
    addShimC(_el_0);
    _compView_1 = ViewFormparamsComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _FormparamsComponent_1_5 = import2.FormparamsComponent();
    _compView_1.create0(_FormparamsComponent_1_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_param = import9.unsafeCast<import15.ParamInfo>(parentView.locals['\$implicit']);
    final currVal_0 = local_param.subParams;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _FormparamsComponent_1_5.paramList = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroyInternalState();
  }
}

AppView<void> viewFactory_FormparamsComponent7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewFormparamsComponent7(parentView, parentIndex);
}

final List<dynamic> styles$FormparamsComponentHost = const [];

class _ViewFormparamsComponentHost0 extends AppView<import2.FormparamsComponent> {
  ViewFormparamsComponent0 _compView_0;
  import2.FormparamsComponent _FormparamsComponent_0_5;
  _ViewFormparamsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.FormparamsComponent> build() {
    _compView_0 = ViewFormparamsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _FormparamsComponent_0_5 = import2.FormparamsComponent();
    _compView_0.create(_FormparamsComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _FormparamsComponent_0_5);
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

AppView<import2.FormparamsComponent> viewFactory_FormparamsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewFormparamsComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(FormparamsComponent, FormparamsComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
