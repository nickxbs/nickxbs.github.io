// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_time_picker.dart';
export 'material_time_picker.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref1;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref2;
import 'package:angular_components/material_input/material_input.template.dart' as _ref3;
import 'package:angular_components/material_select/material_dropdown_select.template.dart' as _ref4;
import 'package:angular_components/model/a11y/keyboard_handler_mixin.template.dart' as _ref5;
import 'package:angular_components/model/selection/select.template.dart' as _ref6;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref7;
import 'package:angular_components/model/selection/string_selection_options.template.dart' as _ref8;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref9;
import 'package:angular_components/material_datepicker/material_time_picker.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_time_picker.dart' as import2;
import '../material_select/material_dropdown_select.template.dart' as import3;
import 'dart:core';
import '../material_select/material_dropdown_select.dart' as import5;
import '../model/a11y/active_item.dart' as import6;
import '../material_input/material_input.template.dart' as import7;
import '../material_input/deferred_validator.dart' as import8;
import 'package:angular_forms/src/directives/ng_model.dart' as import9;
import '../material_input/material_input.dart' as import10;
import '../material_input/material_input_default_value_accessor.dart' as import11;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import12;
import 'package:angular/src/core/linker/view_type.dart' as import13;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import15;
import 'package:angular/src/runtime.dart' as import16;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import18;
import '../utils/id_generator/id_generator.dart' as import19;
import '../src/laminate/popup/popup_size_provider.dart' as import20;
import 'package:angular/src/core/di/opaque_token.dart' as import21;
import 'package:angular/src/runtime/dom_helpers.dart' as import22;
import 'package:angular_forms/src/directives/ng_control.dart' as import23;
import '../material_input/base_material_input.dart' as import24;
import '../utils/angular/reference/reference.dart' as import25;
import '../focus/focus_interface.dart' as import26;
import '../interfaces/has_disabled.dart' as import27;
import '../mixins/material_dropdown_base.dart' as import28;
import '../model/ui/has_renderer.dart' as import29;
import '../content/deferred_content_aware.dart' as import30;
import '../model/selection/selection_container.dart' as import31;
import '../material_select/activation_handler.dart' as import32;
import 'package:angular/src/core/linker/app_view_utils.dart' as import33;

final List<dynamic> styles$MaterialTimePickerComponent = [import0.styles];

class ViewMaterialTimePickerComponent0 extends AppView<import2.MaterialTimePickerComponent> {
  import3.ViewMaterialDropdownSelectComponent0<DateTime> _compView_0;
  import5.MaterialDropdownSelectComponent<DateTime> _MaterialDropdownSelectComponent_0_5;
  import6.ActiveItemModel<dynamic> __ActiveItemModel_0_13;
  import7.ViewMaterialInputComponent0 _compView_3;
  import8.DeferredValidator _DeferredValidator_3_5;
  List<dynamic> _NgValidators_3_6;
  import9.NgModel _NgModel_3_7;
  import10.MaterialInputComponent _MaterialInputComponent_3_9;
  import11.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_3_11;
  String _expr_0;
  bool _expr_1;
  var _expr_2;
  bool _expr_5;
  String _expr_6;
  var _expr_8;
  bool _expr_11;
  String _expr_12;
  bool _expr_14;
  bool _expr_15;
  static import12.ComponentStyles _componentStyles;
  ViewMaterialTimePickerComponent0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import15.document.createElement('material-time-picker');
  }
  import6.ActiveItemModel<dynamic> get _ActiveItemModel_0_13 {
    if ((__ActiveItemModel_0_13 == null)) {
      (__ActiveItemModel_0_13 = import5.fromDropdown(_MaterialDropdownSelectComponent_0_5));
    }
    return __ActiveItemModel_0_13;
  }

  static String get _debugComponentUrl {
    return (import16.isDevMode ? 'asset:angular_components/lib/material_datepicker/material_time_picker.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialTimePickerComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import15.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import3.ViewMaterialDropdownSelectComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _MaterialDropdownSelectComponent_0_5 = (import16.isDevMode
        ? import18.debugInjectorWrap(import5.MaterialDropdownSelectComponent, () {
            return import5.MaterialDropdownSelectComponent(parentView.injectorGetOptional(import19.IdGenerator, viewData.parentIndex), parentView.injectorGetOptional(import20.PopupSizeProvider, viewData.parentIndex), parentView.injectorGetOptional(const import21.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex), null, null, _compView_0, _el_0);
          })
        : import5.MaterialDropdownSelectComponent(parentView.injectorGetOptional(import19.IdGenerator, viewData.parentIndex), parentView.injectorGetOptional(import20.PopupSizeProvider, viewData.parentIndex), parentView.injectorGetOptional(const import21.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex), null, null, _compView_0, _el_0));
    final doc = import15.document;
    final _el_1 = doc.createElement('div');
    import22.setAttribute(_el_1, 'header', '');
    addShimC(_el_1);
    final _el_2 = import22.appendDiv(doc, _el_1);
    this.updateChildClass(_el_2, 'time-input-box');
    addShimC(_el_2);
    _compView_3 = import7.ViewMaterialInputComponent0(this, 3);
    final _el_3 = _compView_3.rootEl;
    _el_2.append(_el_3);
    import22.setAttribute(_el_3, 'type', 'text');
    addShimC(_el_3);
    _DeferredValidator_3_5 = import8.DeferredValidator();
    _NgValidators_3_6 = [_DeferredValidator_3_5];
    _NgModel_3_7 = import9.NgModel(_NgValidators_3_6, null);
    _MaterialInputComponent_3_9 = import10.MaterialInputComponent('text', null, null, _NgModel_3_7, _compView_3, _DeferredValidator_3_5);
    _MaterialInputDefaultValueAccessor_3_11 = import11.MaterialInputDefaultValueAccessor(_MaterialInputComponent_3_9, _NgModel_3_7);
    _compView_3.create(_MaterialInputComponent_3_9, [const [], const []]);
    _compView_0.create(_MaterialDropdownSelectComponent_0_5, [
      const [],
      [_el_1],
      const [],
      const [],
      const [],
      const []
    ]);
    final subscription_0 = _MaterialDropdownSelectComponent_0_5.visibleStream.listen(eventHandler1(_handle_visibleChange_0_0));
    _el_1.addEventListener('keypress', eventHandler1(_ctx.onKeyPress));
    _el_1.addEventListener('keydown', eventHandler1(_ctx.onInputBoxKeyDown));
    final subscription_1 = _NgModel_3_7.update.listen(eventHandler1(_handle_ngModelChange_3_2));
    final subscription_2 = _MaterialInputComponent_3_9.onKeypress.listen(eventHandler1(_ctx.onTextChange));
    final subscription_3 = _MaterialInputComponent_3_9.onBlur.listen(eventHandler0(_ctx.onBlur));
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 3)) {
      if ((3 == nodeIndex)) {
        if (identical(token, import8.DeferredValidator)) {
          return _DeferredValidator_3_5;
        }
        if (identical(token, const import21.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_3_6;
        }
        if ((identical(token, import9.NgModel) || identical(token, import23.NgControl))) {
          return _NgModel_3_7;
        }
        if (((((identical(token, import10.MaterialInputComponent) || identical(token, import24.BaseMaterialInput)) || identical(token, import25.ReferenceDirective)) || identical(token, import26.Focusable)) || identical(token, import27.HasDisabled))) {
          return _MaterialInputComponent_3_9;
        }
      }
      if ((identical(token, import6.ActiveItemModel) && (0 == nodeIndex))) {
        return _ActiveItemModel_0_13;
      }
      if ((((((((identical(token, import5.MaterialDropdownSelectComponent) || identical(token, import28.DropdownHandle)) || identical(token, import27.HasDisabled)) || identical(token, import29.HasRenderer)) || identical(token, import30.DeferredContentAware)) || identical(token, import31.SelectionContainer)) || identical(token, import20.PopupSizeProvider)) || identical(token, import32.ActivationHandler))) {
        return _MaterialDropdownSelectComponent_0_5;
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
      _MaterialDropdownSelectComponent_0_5.popupMatchInputWidth = false;
      changed = true;
      _MaterialDropdownSelectComponent_0_5.slide = 'y';
      changed = true;
      if (!identical(_ctx.renderTime, null)) {
        _MaterialDropdownSelectComponent_0_5.itemRenderer = _ctx.renderTime;
        changed = true;
      }
    }
    final currVal_0 = _ctx.dropdownText;
    if (import33.checkBinding(_expr_0, currVal_0)) {
      _MaterialDropdownSelectComponent_0_5.buttonText = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.disabled;
    if (import33.checkBinding(_expr_1, currVal_1)) {
      _MaterialDropdownSelectComponent_0_5.disabled = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.selectedTime;
    if (import33.checkBinding(_expr_2, currVal_2)) {
      _MaterialDropdownSelectComponent_0_5.selectionInput = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_5 = _ctx.popupVisible;
    if (import33.checkBinding(_expr_5, currVal_5)) {
      _MaterialDropdownSelectComponent_0_5.visible = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.error;
    if (import33.checkBinding(_expr_6, currVal_6)) {
      _MaterialDropdownSelectComponent_0_5.error = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    final currVal_8 = _ctx.timeOptions;
    if (import33.checkBinding(_expr_8, currVal_8)) {
      _MaterialDropdownSelectComponent_0_5.optionsInput = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    if (changed) {
      _MaterialDropdownSelectComponent_0_5.ngAfterChanges();
    }
    changed = false;
    _NgModel_3_7.model = _ctx.timeInputText;
    _NgModel_3_7.ngAfterChanges();
    if (((!import33.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_3_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      if (!identical(import2.MaterialTimePickerComponent.inputPlaceholderMsg, null)) {
        _MaterialInputComponent_3_9.label = import2.MaterialTimePickerComponent.inputPlaceholderMsg;
        changed = true;
      }
      if (!identical(import2.MaterialTimePickerComponent.inputPlaceholderMsg, null)) {
        _MaterialInputComponent_3_9.requiredErrorMsg = import2.MaterialTimePickerComponent.inputPlaceholderMsg;
        changed = true;
      }
    }
    final currVal_11 = _ctx.displayErrorPanel;
    if (import33.checkBinding(_expr_11, currVal_11)) {
      _MaterialInputComponent_3_9.displayBottomPanel = currVal_11;
      changed = true;
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.inputError;
    if (import33.checkBinding(_expr_12, currVal_12)) {
      _MaterialInputComponent_3_9.error = currVal_12;
      changed = true;
      _expr_12 = currVal_12;
    }
    final currVal_14 = _ctx.disabled;
    if (import33.checkBinding(_expr_14, currVal_14)) {
      _MaterialInputComponent_3_9.disabled = currVal_14;
      changed = true;
      _expr_14 = currVal_14;
    }
    final currVal_15 = _ctx.required;
    if (import33.checkBinding(_expr_15, currVal_15)) {
      _MaterialInputComponent_3_9.required = currVal_15;
      changed = true;
      _expr_15 = currVal_15;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    _compView_0.detectChanges();
    _compView_3.detectChanges();
    if ((!import33.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_3_9.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _compView_3.destroyInternalState();
    _MaterialInputComponent_3_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_3_11.ngOnDestroy();
    _MaterialDropdownSelectComponent_0_5.ngOnDestroy();
  }

  void _handle_visibleChange_0_0($event) {
    final _ctx = ctx;
    _ctx.popupVisible = $event;
  }

  void _handle_ngModelChange_3_2($event) {
    final _ctx = ctx;
    _ctx.timeInputText = $event;
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import12.ComponentStyles.scoped(styles$MaterialTimePickerComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialTimePickerComponent> _MaterialTimePickerComponentNgFactory = const ComponentFactory('material-time-picker', viewFactory_MaterialTimePickerComponentHost0);
ComponentFactory<import2.MaterialTimePickerComponent> get MaterialTimePickerComponentNgFactory {
  return _MaterialTimePickerComponentNgFactory;
}

final List<dynamic> styles$MaterialTimePickerComponentHost = const [];

class _ViewMaterialTimePickerComponentHost0 extends AppView<import2.MaterialTimePickerComponent> {
  ViewMaterialTimePickerComponent0 _compView_0;
  import2.MaterialTimePickerComponent _MaterialTimePickerComponent_0_5;
  _ViewMaterialTimePickerComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialTimePickerComponent> build() {
    _compView_0 = ViewMaterialTimePickerComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialTimePickerComponent_0_5 = (import16.isDevMode
        ? import18.debugInjectorWrap(import2.MaterialTimePickerComponent, () {
            return import2.MaterialTimePickerComponent(this.injectorGet(const import21.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex));
          })
        : import2.MaterialTimePickerComponent(this.injectorGet(const import21.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex)));
    _compView_0.create(_MaterialTimePickerComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialTimePickerComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import27.HasDisabled) && (0 == nodeIndex))) {
      return _MaterialTimePickerComponent_0_5;
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
    if (((!import33.AppViewUtils.throwOnChanges) && firstCheck)) {
      _MaterialTimePickerComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialTimePickerComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialTimePickerComponent> viewFactory_MaterialTimePickerComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialTimePickerComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialTimePickerComponent, MaterialTimePickerComponentNgFactory);
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
