// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_stepper.dart';
export 'material_stepper.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/laminate/portal/portal.template.dart' as _ref2;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref3;
import 'package:angular_components/material_stepper/common.template.dart' as _ref4;
import 'package:angular_components/material_stepper/material_step.template.dart' as _ref5;
import 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart' as _ref6;
import 'package:angular_components/model/action/async_action.template.dart' as _ref7;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref8;
import 'package:angular_components/utils/angular/scroll_host/angular_2.template.dart' as _ref9;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref10;
import 'package:angular_components/material_stepper/material_stepper.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_stepper.dart' as import2;
import '../utils/angular/scroll_host/angular_2.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import7;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import8;
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import13;
import 'package:angular/src/di/errors.dart' as import14;
import '../src/utils/angular/scroll_host/scroll_host_interface.dart' as import15;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import17;
import 'package:angular/src/runtime/text_binding.dart' as import18;
import '../button_decorator/button_decorator.template.dart' as import19;
import '../button_decorator/button_decorator.dart' as import20;
import 'material_step.dart' as import21;
import 'package:angular/src/runtime/interpolate.dart' as import22;
import '../material_icon/material_icon.template.dart' as import23;
import '../material_icon/material_icon.dart' as import24;
import '../laminate/portal/portal.dart' as import25;
import '../material_yes_no_buttons/material_yes_no_buttons.template.dart' as import26;
import '../material_yes_no_buttons/material_yes_no_buttons.dart' as import27;
import '../interfaces/has_disabled.dart' as import28;

final List<dynamic> styles$MaterialStepperComponent = [import0.styles];

class ViewMaterialStepperComponent0 extends AppView<import2.MaterialStepperComponent> {
  import3.StickyElementDirective _StickyElementDirective_1_5;
  ViewContainer _appEl_3;
  import5.NgFor _NgFor_3_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  import7.DivElement _el_8;
  import7.DivElement _el_1;
  static import8.ComponentStyles _componentStyles;
  ViewMaterialStepperComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import7.document.createElement('material-stepper');
    this.updateChildClassNonHtml(rootEl, import2.MaterialStepperComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:angular_components/lib/material_stepper/material_stepper.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialStepperComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import13.appendText(parentRenderNode, '\n');
    final doc = import7.document;
    _el_1 = import13.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_1, 'stepper stepper-body mixin');
    addShimC(_el_1);
    _StickyElementDirective_1_5 = (import11.isDevMode
        ? import14.debugInjectorWrap(import3.StickyElementDirective, () {
            return import3.StickyElementDirective(parentView.injectorGet(import15.ScrollHost, viewData.parentIndex), _el_1);
          })
        : import3.StickyElementDirective(parentView.injectorGet(import15.ScrollHost, viewData.parentIndex), _el_1));
    final _text_2 = import13.appendText(_el_1, '\n  ');
    final _anchor_3 = import13.appendAnchor(_el_1);
    _appEl_3 = ViewContainer(3, 1, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_MaterialStepperComponent1);
    _NgFor_3_9 = import5.NgFor(_appEl_3, _TemplateRef_3_8);
    final _text_4 = import13.appendText(_el_1, '\n');
    final _text_5 = import13.appendText(parentRenderNode, '\n');
    final _anchor_6 = import13.appendAnchor(parentRenderNode);
    _appEl_6 = ViewContainer(6, null, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_MaterialStepperComponent12);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    final _text_7 = import13.appendText(parentRenderNode, '\n');
    _el_8 = import13.appendDiv(doc, parentRenderNode);
    addShimC(_el_8);
    final _text_9 = import13.appendText(parentRenderNode, '\n');
    final _anchor_10 = import13.appendAnchor(parentRenderNode);
    _appEl_10 = ViewContainer(10, null, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(_appEl_10, viewFactory_MaterialStepperComponent15);
    _NgIf_10_9 = NgIf(_appEl_10, _TemplateRef_10_8);
    final _text_11 = import13.appendText(parentRenderNode, '\n');
    _ctx.stepperNativeElement = _el_1;
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_afterStepperElement = _el_8;
    final currVal_2 = local_afterStepperElement;
    if (import17.checkBinding(_expr_2, currVal_2)) {
      _StickyElementDirective_1_5.endElement = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.stickyHeader;
    if (import17.checkBinding(_expr_3, currVal_3)) {
      _StickyElementDirective_1_5.sticky = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.steps;
    if (import17.checkBinding(_expr_4, currVal_4)) {
      _NgFor_3_9.ngForOf = currVal_4;
      _expr_4 = currVal_4;
    }
    if ((!import17.AppViewUtils.throwOnChanges)) {
      _NgFor_3_9.ngDoCheck();
    }
    _NgIf_6_9.ngIf = (((!_ctx.shouldInlineContent) && (!_ctx.stepperDone)) && (_ctx.steps.length > 0));
    _NgIf_10_9.ngIf = _ctx.announceCurrentStep;
    _appEl_3.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    _appEl_10.detectChangesInNestedViews();
    final currVal_0 = _ctx.orientation;
    if (import17.checkBinding(_expr_0, currVal_0)) {
      import13.updateAttribute(_el_1, 'orientation', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.size;
    if (import17.checkBinding(_expr_1, currVal_1)) {
      import13.updateAttribute(_el_1, 'size', currVal_1);
      _expr_1 = currVal_1;
    }
    if ((!import17.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _StickyElementDirective_1_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_3.destroyNestedViews();
    _appEl_6.destroyNestedViews();
    _appEl_10.destroyNestedViews();
    _StickyElementDirective_1_5.ngOnDestroy();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import8.ComponentStyles.scoped(styles$MaterialStepperComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialStepperComponent> _MaterialStepperComponentNgFactory = const ComponentFactory('material-stepper', viewFactory_MaterialStepperComponentHost0);
ComponentFactory<import2.MaterialStepperComponent> get MaterialStepperComponentNgFactory {
  return _MaterialStepperComponentNgFactory;
}

class _ViewMaterialStepperComponent1 extends AppView<import2.MaterialStepperComponent> {
  final import18.TextBinding _textBinding_5 = import18.TextBinding();
  final import18.TextBinding _textBinding_15 = import18.TextBinding();
  final import18.TextBinding _textBinding_20 = import18.TextBinding();
  import19.ButtonDirectiveNgCd _ButtonDirective_0_5;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  ViewContainer _appEl_22;
  NgIf _NgIf_22_9;
  ViewContainer _appEl_26;
  NgIf _NgIf_26_9;
  ViewContainer _appEl_28;
  NgIf _NgIf_28_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  var _expr_4;
  var _expr_5;
  bool _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  bool _expr_10;
  var _expr_12;
  var _expr_13;
  var _expr_14;
  var _expr_15;
  var _expr_16;
  var _expr_17;
  var _expr_18;
  import7.DivElement _el_0;
  import7.Element _el_3;
  import7.DivElement _el_11;
  import7.Element _el_13;
  import7.DivElement _el_18;
  _ViewMaterialStepperComponent1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialStepperComponent> build() {
    final doc = import7.document;
    _el_0 = doc.createElement('div');
    import13.setAttribute(_el_0, 'buttonDecorator', '');
    this.updateChildClass(_el_0, 'stepper-step');
    addShimC(_el_0);
    _ButtonDirective_0_5 = import19.ButtonDirectiveNgCd(import20.ButtonDirective(_el_0, null));
    final _text_1 = import13.appendText(_el_0, '\n    ');
    final _text_2 = import13.appendText(_el_0, '\n        ');
    _el_3 = import13.appendSpan(doc, _el_0);
    this.updateChildClass(_el_3, 'stepper-step-index');
    addShimE(_el_3);
    final _text_4 = import13.appendText(_el_3, '\n          ');
    _el_3.append(_textBinding_5.element);
    final _text_6 = import13.appendText(_el_3, '\n          ');
    final _anchor_7 = import13.appendAnchor(_el_3);
    _appEl_7 = ViewContainer(7, 3, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, viewFactory_MaterialStepperComponent2);
    _NgIf_7_9 = NgIf(_appEl_7, _TemplateRef_7_8);
    final _text_8 = import13.appendText(_el_3, '\n        ');
    final _text_9 = import13.appendText(_el_0, '\n    ');
    final _text_10 = import13.appendText(_el_0, '\n    ');
    _el_11 = import13.appendDiv(doc, _el_0);
    this.updateChildClass(_el_11, 'stepper-step-header');
    addShimC(_el_11);
    final _text_12 = import13.appendText(_el_11, '\n      ');
    _el_13 = import13.appendSpan(doc, _el_11);
    this.updateChildClass(_el_13, 'stepper-step-name');
    addShimE(_el_13);
    final _text_14 = import13.appendText(_el_13, '\n        ');
    _el_13.append(_textBinding_15.element);
    final _text_16 = import13.appendText(_el_13, '\n      ');
    final _text_17 = import13.appendText(_el_11, '\n      ');
    _el_18 = import13.appendDiv(doc, _el_11);
    this.updateChildClass(_el_18, 'stepper-step-optional');
    addShimC(_el_18);
    final _text_19 = import13.appendText(_el_18, '\n        ');
    _el_18.append(_textBinding_20.element);
    final _text_21 = import13.appendText(_el_18, '\n          ');
    final _anchor_22 = import13.appendAnchor(_el_18);
    _appEl_22 = ViewContainer(22, 18, this, _anchor_22);
    TemplateRef _TemplateRef_22_8 = TemplateRef(_appEl_22, viewFactory_MaterialStepperComponent3);
    _NgIf_22_9 = NgIf(_appEl_22, _TemplateRef_22_8);
    final _text_23 = import13.appendText(_el_18, '\n      ');
    final _text_24 = import13.appendText(_el_11, '\n    ');
    final _text_25 = import13.appendText(_el_0, '\n    ');
    final _anchor_26 = import13.appendAnchor(_el_0);
    _appEl_26 = ViewContainer(26, 0, this, _anchor_26);
    TemplateRef _TemplateRef_26_8 = TemplateRef(_appEl_26, viewFactory_MaterialStepperComponent4);
    _NgIf_26_9 = NgIf(_appEl_26, _TemplateRef_26_8);
    final _text_27 = import13.appendText(_el_0, '\n    ');
    final _anchor_28 = import13.appendAnchor(_el_0);
    _appEl_28 = ViewContainer(28, 0, this, _anchor_28);
    TemplateRef _TemplateRef_28_8 = TemplateRef(_appEl_28, viewFactory_MaterialStepperComponent5);
    _NgIf_28_9 = NgIf(_appEl_28, _TemplateRef_28_8);
    final _text_29 = import13.appendText(_el_0, '\n  ');
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import20.ButtonDirective) && (nodeIndex <= 29))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_step = import11.unsafeCast<import21.StepDirective>(locals['\$implicit']);
    final currVal_6 = local_step.isNotSelectable;
    if (import17.checkBinding(_expr_6, currVal_6)) {
      _ButtonDirective_0_5.instance.disabled = currVal_6;
      _expr_6 = currVal_6;
    }
    _NgIf_7_9.ngIf = local_step.complete;
    _NgIf_22_9.ngIf = local_step.isSelectable;
    _NgIf_26_9.ngIf = (!local_step.isLast);
    _NgIf_28_9.ngIf = (_ctx.shouldInlineContent && (!_ctx.stepperDone));
    _appEl_7.detectChangesInNestedViews();
    _appEl_22.detectChangesInNestedViews();
    _appEl_26.detectChangesInNestedViews();
    _appEl_28.detectChangesInNestedViews();
    final currVal_0 = _ctx.stepAriaLabel(local_step);
    if (import17.checkBinding(_expr_0, currVal_0)) {
      import13.updateAttribute(_el_0, 'aria-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.orientation;
    if (import17.checkBinding(_expr_1, currVal_1)) {
      import13.updateAttribute(_el_0, 'orientation', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.size;
    if (import17.checkBinding(_expr_2, currVal_2)) {
      import13.updateAttribute(_el_0, 'size', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = local_step.isSelectable;
    if (import17.checkBinding(_expr_3, currVal_3)) {
      import13.updateClassBinding(_el_0, 'can-select', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = import22.interpolate0(local_step.active);
    if (import17.checkBinding(_expr_4, currVal_4)) {
      import13.setAttribute(_el_0, 'active', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = import22.interpolate0(local_step.isSelectable);
    if (import17.checkBinding(_expr_5, currVal_5)) {
      import13.setAttribute(_el_0, 'selectable', currVal_5);
      _expr_5 = currVal_5;
    }
    _ButtonDirective_0_5.detectHostChanges(this, _el_0);
    final currVal_7 = _ctx.orientation;
    if (import17.checkBinding(_expr_7, currVal_7)) {
      import13.updateAttribute(_el_3, 'orientation', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = local_step.active;
    if (import17.checkBinding(_expr_8, currVal_8)) {
      import13.updateAttribute(_el_3, 'active', currVal_8?.toString());
      _expr_8 = currVal_8;
    }
    final currVal_9 = local_step.complete;
    if (import17.checkBinding(_expr_9, currVal_9)) {
      import13.updateAttribute(_el_3, 'complete', currVal_9?.toString());
      _expr_9 = currVal_9;
    }
    final currVal_10 = local_step.isSelectable;
    if (import17.checkBinding(_expr_10, currVal_10)) {
      import13.updateClassBinding(_el_3, 'can-select', currVal_10);
      _expr_10 = currVal_10;
    }
    _textBinding_5.updateText(import22.interpolate0((local_step.complete ? '' : (local_step.index + 1))));
    final currVal_12 = _ctx.orientation;
    if (import17.checkBinding(_expr_12, currVal_12)) {
      import13.updateAttribute(_el_11, 'orientation', currVal_12);
      _expr_12 = currVal_12;
    }
    final currVal_13 = _ctx.size;
    if (import17.checkBinding(_expr_13, currVal_13)) {
      import13.updateAttribute(_el_11, 'size', currVal_13);
      _expr_13 = currVal_13;
    }
    final currVal_14 = local_step.active;
    if (import17.checkBinding(_expr_14, currVal_14)) {
      import13.updateAttribute(_el_13, 'active', currVal_14?.toString());
      _expr_14 = currVal_14;
    }
    final currVal_15 = local_step.complete;
    if (import17.checkBinding(_expr_15, currVal_15)) {
      import13.updateAttribute(_el_13, 'complete', currVal_15?.toString());
      _expr_15 = currVal_15;
    }
    _textBinding_15.updateText(import22.interpolateString0(local_step.name));
    final currVal_16 = _ctx.orientation;
    if (import17.checkBinding(_expr_16, currVal_16)) {
      import13.updateAttribute(_el_18, 'orientation', currVal_16);
      _expr_16 = currVal_16;
    }
    final currVal_17 = local_step.isOptional;
    if (import17.checkBinding(_expr_17, currVal_17)) {
      import13.updateAttribute(_el_18, 'optional', currVal_17?.toString());
      _expr_17 = currVal_17;
    }
    final currVal_18 = _ctx.size;
    if (import17.checkBinding(_expr_18, currVal_18)) {
      import13.updateAttribute(_el_18, 'size', currVal_18);
      _expr_18 = currVal_18;
    }
    _textBinding_20.updateText(import22.interpolate0((local_step.isOptional ? import2.MaterialStepperComponent.optionalMsg : '')));
  }

  @override
  void destroyInternal() {
    _appEl_7.destroyNestedViews();
    _appEl_22.destroyNestedViews();
    _appEl_26.destroyNestedViews();
    _appEl_28.destroyNestedViews();
  }

  void _handle_trigger_0_0($event) {
    final local_step = import11.unsafeCast<import21.StepDirective>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.jumpStep(local_step.index);
  }
}

AppView<void> viewFactory_MaterialStepperComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStepperComponent1(parentView, parentIndex);
}

class _ViewMaterialStepperComponent2 extends AppView<import2.MaterialStepperComponent> {
  import23.ViewMaterialIconComponent0 _compView_2;
  import24.MaterialIconComponent _MaterialIconComponent_2_5;
  _ViewMaterialStepperComponent2(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialStepperComponent> build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('span');
    addShimE(_el_0);
    final _text_1 = import13.appendText(_el_0, '\n            ');
    _compView_2 = import23.ViewMaterialIconComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    _el_0.append(_el_2);
    import13.setAttribute(_el_2, 'icon', 'check');
    addShimC(_el_2);
    _MaterialIconComponent_2_5 = import24.MaterialIconComponent(_el_2);
    _compView_2.create0(_MaterialIconComponent_2_5);
    final _text_3 = import13.appendText(_el_0, '\n          ');
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_2_5.icon = 'check';
      changed = true;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2.destroyInternalState();
  }
}

AppView<void> viewFactory_MaterialStepperComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStepperComponent2(parentView, parentIndex);
}

class _ViewMaterialStepperComponent3 extends AppView<import2.MaterialStepperComponent> {
  import23.ViewMaterialIconComponent0 _compView_2;
  import24.MaterialIconComponent _MaterialIconComponent_2_5;
  var _expr_0;
  var _expr_1;
  import7.Element _el_2;
  _ViewMaterialStepperComponent3(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialStepperComponent> build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('span');
    addShimE(_el_0);
    final _text_1 = import13.appendText(_el_0, '\n            ');
    _compView_2 = import23.ViewMaterialIconComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    _el_0.append(_el_2);
    this.updateChildClassNonHtml(_el_2, 'edit-icon');
    import13.setAttribute(_el_2, 'icon', 'mode_edit');
    addShimC(_el_2);
    _MaterialIconComponent_2_5 = import24.MaterialIconComponent(_el_2);
    _compView_2.create0(_MaterialIconComponent_2_5);
    final _text_4 = import13.appendText(_el_0, '\n          ');
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_2_5.icon = 'mode_edit';
      changed = true;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    final currVal_0 = _ctx.orientation;
    if (import17.checkBinding(_expr_0, currVal_0)) {
      import13.updateAttribute(_el_2, 'orientation', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.size;
    if (import17.checkBinding(_expr_1, currVal_1)) {
      import13.updateAttribute(_el_2, 'size', currVal_1);
      _expr_1 = currVal_1;
    }
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2.destroyInternalState();
  }
}

AppView<void> viewFactory_MaterialStepperComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStepperComponent3(parentView, parentIndex);
}

class _ViewMaterialStepperComponent4 extends AppView<import2.MaterialStepperComponent> {
  var _expr_0;
  var _expr_1;
  import7.DivElement _el_0;
  _ViewMaterialStepperComponent4(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialStepperComponent> build() {
    final doc = import7.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'step-line');
    addShimC(_el_0);
    final _text_1 = import13.appendText(_el_0, '\n    ');
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.orientation;
    if (import17.checkBinding(_expr_0, currVal_0)) {
      import13.updateAttribute(_el_0, 'orientation', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.size;
    if (import17.checkBinding(_expr_1, currVal_1)) {
      import13.updateAttribute(_el_0, 'size', currVal_1);
      _expr_1 = currVal_1;
    }
  }
}

AppView<void> viewFactory_MaterialStepperComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStepperComponent4(parentView, parentIndex);
}

class _ViewMaterialStepperComponent5 extends AppView<import2.MaterialStepperComponent> {
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  var _expr_0;
  var _expr_1;
  import7.DivElement _el_0;
  _ViewMaterialStepperComponent5(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialStepperComponent> build() {
    final _ctx = ctx;
    final doc = import7.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'stepper-content');
    addShimC(_el_0);
    final _text_1 = import13.appendText(_el_0, '\n      ');
    final _anchor_2 = import13.appendAnchor(_el_0);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialStepperComponent6);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _text_3 = import13.appendText(_el_0, '\n      ');
    final _anchor_4 = import13.appendAnchor(_el_0);
    _appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_MaterialStepperComponent9);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    final _text_5 = import13.appendText(_el_0, '\n      ');
    final _anchor_6 = import13.appendAnchor(_el_0);
    _appEl_6 = ViewContainer(6, 0, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_MaterialStepperComponent11);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    final _text_7 = import13.appendText(_el_0, '\n    ');
    _el_0.addEventListener('keypress', eventHandler1(_ctx.stopPropagationOfEnterAndSpace));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_step = import11.unsafeCast<import21.StepDirective>(parentView.locals['\$implicit']);
    _NgIf_2_9.ngIf = local_step.active;
    _NgIf_4_9.ngIf = ((!local_step.active) && (local_step.summaryDirective != null));
    _NgIf_6_9.ngIf = local_step.shouldShowSummary;
    _appEl_2.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    final currVal_0 = _ctx.orientation;
    if (import17.checkBinding(_expr_0, currVal_0)) {
      import13.updateAttribute(_el_0, 'orientation', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.size;
    if (import17.checkBinding(_expr_1, currVal_1)) {
      import13.updateAttribute(_el_0, 'size', currVal_1);
      _expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _appEl_4.destroyNestedViews();
    _appEl_6.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialStepperComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStepperComponent5(parentView, parentIndex);
}

class _ViewMaterialStepperComponent6 extends AppView<import2.MaterialStepperComponent> {
  ViewContainer _appEl_1;
  import25.PortalHostDirective _PortalHostDirective_1_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  var _expr_0;
  _ViewMaterialStepperComponent6(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialStepperComponent> build() {
    final _text_0 = import13.createText('\n        ');
    final _anchor_1 = import13.createAnchor();
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialStepperComponent7);
    _PortalHostDirective_1_9 = import25.PortalHostDirective(_appEl_1, _appEl_1);
    final _text_2 = import13.createText('\n        ');
    final _anchor_3 = import13.createAnchor();
    _appEl_3 = ViewContainer(3, null, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_MaterialStepperComponent8);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    final _text_4 = import13.createText('\n      ');
    init([_text_0, _appEl_1, _text_2, _appEl_3, _text_4], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_step = import11.unsafeCast<import21.StepDirective>(parentView.parentView.locals['\$implicit']);
    final currVal_0 = _ctx.steps[local_step.index];
    if (import17.checkBinding(_expr_0, currVal_0)) {
      _PortalHostDirective_1_9.portal = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgIf_3_9.ngIf = (!_ctx.activeStep.hideButtons);
    _appEl_1.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_3.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialStepperComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStepperComponent6(parentView, parentIndex);
}

class _ViewMaterialStepperComponent7 extends AppView<import2.MaterialStepperComponent> {
  _ViewMaterialStepperComponent7(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialStepperComponent> build() {
    init0();
  }
}

AppView<void> viewFactory_MaterialStepperComponent7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStepperComponent7(parentView, parentIndex);
}

class _ViewMaterialStepperComponent8 extends AppView<import2.MaterialStepperComponent> {
  import26.ViewMaterialYesNoButtonsComponent0 _compView_2;
  import27.MaterialYesNoButtonsComponent _MaterialYesNoButtonsComponent_2_5;
  String _expr_1;
  bool _expr_4;
  bool _expr_5;
  bool _expr_6;
  _ViewMaterialStepperComponent8(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialStepperComponent> build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'button-container');
    addShimE(_el_0);
    final _text_1 = import13.appendText(_el_0, '\n          ');
    _compView_2 = import26.ViewMaterialYesNoButtonsComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    _el_0.append(_el_2);
    this.updateChildClassNonHtml(_el_2, 'stepper-yes-no-buttons');
    import13.setAttribute(_el_2, 'raised', '');
    import13.setAttribute(_el_2, 'yesHighlighted', '');
    addShimC(_el_2);
    _MaterialYesNoButtonsComponent_2_5 = import27.MaterialYesNoButtonsComponent();
    _compView_2.create0(_MaterialYesNoButtonsComponent_2_5);
    final _text_4 = import13.appendText(_el_0, '\n        ');
    final subscription_0 = _MaterialYesNoButtonsComponent_2_5.yes.listen(eventHandler1(_handle_yes_2_0));
    final subscription_1 = _MaterialYesNoButtonsComponent_2_5.no.listen(eventHandler1(_handle_no_2_1));
    init([_el_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import28.HasDisabled) && ((2 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _MaterialYesNoButtonsComponent_2_5;
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
      if (!identical(import2.MaterialStepperComponent.continueMsg, null)) {
        _MaterialYesNoButtonsComponent_2_5.yesText = import2.MaterialStepperComponent.continueMsg;
        changed = true;
      }
      _MaterialYesNoButtonsComponent_2_5.yesHighlighted = true;
      changed = true;
      _MaterialYesNoButtonsComponent_2_5.raised = true;
      changed = true;
    }
    final currVal_1 = _ctx.noText;
    if (import17.checkBinding(_expr_1, currVal_1)) {
      _MaterialYesNoButtonsComponent_2_5.noText = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_4 = _ctx.activeStep.busy;
    if (import17.checkBinding(_expr_4, currVal_4)) {
      _MaterialYesNoButtonsComponent_2_5.disabled = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final bool currVal_5 = (!_ctx.activeStep.canContinue);
    if (import17.checkBinding(_expr_5, currVal_5)) {
      _MaterialYesNoButtonsComponent_2_5.yesDisabled = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    final bool currVal_6 = ((!_ctx.activeStep.cancelHidden) && (_ctx.activeStep.index != 0));
    if (import17.checkBinding(_expr_6, currVal_6)) {
      _MaterialYesNoButtonsComponent_2_5.noDisplayed = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2.destroyInternalState();
  }

  void _handle_yes_2_0($event) {
    final _ctx = ctx;
    _ctx.stepForward($event, _ctx.activeStep);
  }

  void _handle_no_2_1($event) {
    final _ctx = ctx;
    _ctx.stepBackward($event, _ctx.activeStep);
  }
}

AppView<void> viewFactory_MaterialStepperComponent8(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStepperComponent8(parentView, parentIndex);
}

class _ViewMaterialStepperComponent9 extends AppView<import2.MaterialStepperComponent> {
  ViewContainer _appEl_2;
  import25.PortalHostDirective _PortalHostDirective_2_9;
  var _expr_0;
  _ViewMaterialStepperComponent9(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialStepperComponent> build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'step-summary-directive');
    addShimC(_el_0);
    final _text_1 = import13.appendText(_el_0, '\n        ');
    final _anchor_2 = import13.appendAnchor(_el_0);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialStepperComponent10);
    _PortalHostDirective_2_9 = import25.PortalHostDirective(_appEl_2, _appEl_2);
    final _text_3 = import13.appendText(_el_0, '\n      ');
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_step = import11.unsafeCast<import21.StepDirective>(parentView.parentView.locals['\$implicit']);
    final currVal_0 = local_step.summaryDirective;
    if (import17.checkBinding(_expr_0, currVal_0)) {
      _PortalHostDirective_2_9.portal = currVal_0;
      _expr_0 = currVal_0;
    }
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialStepperComponent9(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStepperComponent9(parentView, parentIndex);
}

class _ViewMaterialStepperComponent10 extends AppView<import2.MaterialStepperComponent> {
  _ViewMaterialStepperComponent10(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialStepperComponent> build() {
    init0();
  }
}

AppView<void> viewFactory_MaterialStepperComponent10(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStepperComponent10(parentView, parentIndex);
}

class _ViewMaterialStepperComponent11 extends AppView<import2.MaterialStepperComponent> {
  final import18.TextBinding _textBinding_2 = import18.TextBinding();
  _ViewMaterialStepperComponent11(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialStepperComponent> build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'stepper-step-summary');
    addShimC(_el_0);
    final _text_1 = import13.appendText(_el_0, '\n        ');
    _el_0.append(_textBinding_2.element);
    final _text_3 = import13.appendText(_el_0, '\n      ');
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_step = import11.unsafeCast<import21.StepDirective>(parentView.parentView.locals['\$implicit']);
    _textBinding_2.updateText(import22.interpolateString0(local_step.completeSummary));
  }
}

AppView<void> viewFactory_MaterialStepperComponent11(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStepperComponent11(parentView, parentIndex);
}

class _ViewMaterialStepperComponent12 extends AppView<import2.MaterialStepperComponent> {
  ViewContainer _appEl_2;
  import25.PortalHostDirective _PortalHostDirective_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  import7.DivElement _el_0;
  _ViewMaterialStepperComponent12(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialStepperComponent> build() {
    final doc = import7.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'stepper-content mixin');
    addShimC(_el_0);
    final _text_1 = import13.appendText(_el_0, '\n  ');
    final _anchor_2 = import13.appendAnchor(_el_0);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialStepperComponent13);
    _PortalHostDirective_2_9 = import25.PortalHostDirective(_appEl_2, _appEl_2);
    final _text_3 = import13.appendText(_el_0, '\n    ');
    final _anchor_4 = import13.appendAnchor(_el_0);
    _appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_MaterialStepperComponent14);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    final _text_5 = import13.appendText(_el_0, '\n');
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_2 = _ctx.activeStep;
    if (import17.checkBinding(_expr_2, currVal_2)) {
      _PortalHostDirective_2_9.portal = currVal_2;
      _expr_2 = currVal_2;
    }
    _NgIf_4_9.ngIf = (!_ctx.activeStep.hideButtons);
    _appEl_2.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    final currVal_0 = _ctx.orientation;
    if (import17.checkBinding(_expr_0, currVal_0)) {
      import13.updateAttribute(_el_0, 'orientation', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.size;
    if (import17.checkBinding(_expr_1, currVal_1)) {
      import13.updateAttribute(_el_0, 'size', currVal_1);
      _expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _appEl_4.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialStepperComponent12(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStepperComponent12(parentView, parentIndex);
}

class _ViewMaterialStepperComponent13 extends AppView<import2.MaterialStepperComponent> {
  _ViewMaterialStepperComponent13(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialStepperComponent> build() {
    init0();
  }
}

AppView<void> viewFactory_MaterialStepperComponent13(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStepperComponent13(parentView, parentIndex);
}

class _ViewMaterialStepperComponent14 extends AppView<import2.MaterialStepperComponent> {
  import26.ViewMaterialYesNoButtonsComponent0 _compView_2;
  import27.MaterialYesNoButtonsComponent _MaterialYesNoButtonsComponent_2_5;
  String _expr_1;
  bool _expr_4;
  bool _expr_5;
  bool _expr_6;
  _ViewMaterialStepperComponent14(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialStepperComponent> build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'button-container');
    addShimE(_el_0);
    final _text_1 = import13.appendText(_el_0, '\n      ');
    _compView_2 = import26.ViewMaterialYesNoButtonsComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    _el_0.append(_el_2);
    import13.setAttribute(_el_2, 'raised', '');
    import13.setAttribute(_el_2, 'yesHighlighted', '');
    addShimC(_el_2);
    _MaterialYesNoButtonsComponent_2_5 = import27.MaterialYesNoButtonsComponent();
    _compView_2.create0(_MaterialYesNoButtonsComponent_2_5);
    final _text_4 = import13.appendText(_el_0, '\n    ');
    final subscription_0 = _MaterialYesNoButtonsComponent_2_5.yes.listen(eventHandler1(_handle_yes_2_0));
    final subscription_1 = _MaterialYesNoButtonsComponent_2_5.no.listen(eventHandler1(_handle_no_2_1));
    init([_el_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import28.HasDisabled) && ((2 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _MaterialYesNoButtonsComponent_2_5;
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
      if (!identical(import2.MaterialStepperComponent.continueMsg, null)) {
        _MaterialYesNoButtonsComponent_2_5.yesText = import2.MaterialStepperComponent.continueMsg;
        changed = true;
      }
      _MaterialYesNoButtonsComponent_2_5.yesHighlighted = true;
      changed = true;
      _MaterialYesNoButtonsComponent_2_5.raised = true;
      changed = true;
    }
    final currVal_1 = _ctx.noText;
    if (import17.checkBinding(_expr_1, currVal_1)) {
      _MaterialYesNoButtonsComponent_2_5.noText = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_4 = _ctx.activeStep.busy;
    if (import17.checkBinding(_expr_4, currVal_4)) {
      _MaterialYesNoButtonsComponent_2_5.disabled = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final bool currVal_5 = (!_ctx.activeStep.canContinue);
    if (import17.checkBinding(_expr_5, currVal_5)) {
      _MaterialYesNoButtonsComponent_2_5.yesDisabled = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    final bool currVal_6 = ((!_ctx.activeStep.cancelHidden) && (_ctx.activeStep.index != 0));
    if (import17.checkBinding(_expr_6, currVal_6)) {
      _MaterialYesNoButtonsComponent_2_5.noDisplayed = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2.destroyInternalState();
  }

  void _handle_yes_2_0($event) {
    final _ctx = ctx;
    _ctx.stepForward($event, _ctx.activeStep);
  }

  void _handle_no_2_1($event) {
    final _ctx = ctx;
    _ctx.stepBackward($event, _ctx.activeStep);
  }
}

AppView<void> viewFactory_MaterialStepperComponent14(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStepperComponent14(parentView, parentIndex);
}

class _ViewMaterialStepperComponent15 extends AppView<import2.MaterialStepperComponent> {
  final import18.TextBinding _textBinding_2 = import18.TextBinding();
  _ViewMaterialStepperComponent15(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialStepperComponent> build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('div');
    import13.setAttribute(_el_0, 'aria-live', 'assertive');
    this.updateChildClass(_el_0, 'visible-to-screen-reader-only');
    addShimC(_el_0);
    final _text_1 = import13.appendText(_el_0, '\n  ');
    _el_0.append(_textBinding_2.element);
    final _text_3 = import13.appendText(_el_0, '\n');
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_2.updateText(import22.interpolateString0(_ctx.stepAriaAnnounce));
  }
}

AppView<void> viewFactory_MaterialStepperComponent15(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStepperComponent15(parentView, parentIndex);
}

final List<dynamic> styles$MaterialStepperComponentHost = const [];

class _ViewMaterialStepperComponentHost0 extends AppView<import2.MaterialStepperComponent> {
  ViewMaterialStepperComponent0 _compView_0;
  import2.MaterialStepperComponent _MaterialStepperComponent_0_5;
  _ViewMaterialStepperComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialStepperComponent> build() {
    _compView_0 = ViewMaterialStepperComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialStepperComponent_0_5 = import2.MaterialStepperComponent();
    _MaterialStepperComponent_0_5.stepsQuery = [];
    _compView_0.create(_MaterialStepperComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialStepperComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.MaterialStepperComponent) && (0 == nodeIndex))) {
      return _MaterialStepperComponent_0_5;
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

AppView<import2.MaterialStepperComponent> viewFactory_MaterialStepperComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialStepperComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialStepperComponent, MaterialStepperComponentNgFactory);
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
}
