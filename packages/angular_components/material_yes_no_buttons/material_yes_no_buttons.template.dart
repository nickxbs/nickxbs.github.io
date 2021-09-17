// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_yes_no_buttons.dart';
export 'material_yes_no_buttons.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus.template.dart' as _ref1;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref2;
import 'package:angular_components/material_button/material_button.template.dart' as _ref3;
import 'package:angular_components/material_spinner/material_spinner.template.dart' as _ref4;
import 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_yes_no_buttons.dart' as import2;
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
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:angular/src/runtime/queries.dart' as import14;
import '../material_spinner/material_spinner.template.dart' as import15;
import '../material_spinner/material_spinner.dart' as import16;
import 'package:angular/src/runtime/text_binding.dart' as import17;
import '../material_button/material_button.template.dart' as import18;
import '../focus/focus.dart' as import19;
import '../material_button/material_button.dart' as import20;
import 'package:angular/src/di/errors.dart' as import21;
import '../utils/browser/dom_service/dom_service.dart' as import22;
import '../laminate/components/modal/modal.dart' as import23;
import '../src/laminate/popup/popup_ref.dart' as import24;
import '../theme/dark_theme.dart' as import25;
import 'package:angular/src/core/di/opaque_token.dart' as import26;
import '../button_decorator/button_decorator.dart' as import27;
import '../interfaces/has_disabled.dart' as import28;
import 'package:angular/src/runtime/interpolate.dart' as import29;

final List<dynamic> styles$MaterialYesNoButtonsComponent = [import0.styles];

class ViewMaterialYesNoButtonsComponent0 extends AppView<import2.MaterialYesNoButtonsComponent> {
  bool _query_yesButton_1_0_isDirty = true;
  bool _query_noButton_1_1_isDirty = true;
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  static import5.ComponentStyles _componentStyles;
  ViewMaterialYesNoButtonsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import8.document.createElement('material-yes-no-buttons');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_yes_no_buttons/material_yes_no_buttons.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialYesNoButtonsComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_MaterialYesNoButtonsComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final _anchor_1 = import11.appendAnchor(parentRenderNode);
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MaterialYesNoButtonsComponent2);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import11.appendAnchor(parentRenderNode);
    _appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialYesNoButtonsComponent3);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = _ctx.pending;
    _NgIf_1_9.ngIf = ((!_ctx.pending) && _ctx.yesDisplayed);
    _NgIf_2_9.ngIf = ((!_ctx.pending) && _ctx.noDisplayed);
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (_query_yesButton_1_0_isDirty) {
        _ctx.yesButton = import14.firstOrNull(_appEl_1.mapNestedViews((_ViewMaterialYesNoButtonsComponent2 nestedView) {
          return [nestedView._MaterialButtonComponent_0_7];
        }));
        _query_yesButton_1_0_isDirty = false;
      }
      if (_query_noButton_1_1_isDirty) {
        _ctx.noButton = import14.firstOrNull(_appEl_2.mapNestedViews((_ViewMaterialYesNoButtonsComponent3 nestedView) {
          return [nestedView._MaterialButtonComponent_0_7];
        }));
        _query_noButton_1_1_isDirty = false;
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$MaterialYesNoButtonsComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialYesNoButtonsComponent> _MaterialYesNoButtonsComponentNgFactory = const ComponentFactory('material-yes-no-buttons', viewFactory_MaterialYesNoButtonsComponentHost0);
ComponentFactory<import2.MaterialYesNoButtonsComponent> get MaterialYesNoButtonsComponentNgFactory {
  return _MaterialYesNoButtonsComponentNgFactory;
}

class _ViewMaterialYesNoButtonsComponent1 extends AppView<import2.MaterialYesNoButtonsComponent> {
  import15.ViewMaterialSpinnerComponent0 _compView_1;
  import16.MaterialSpinnerComponent _MaterialSpinnerComponent_1_5;
  _ViewMaterialYesNoButtonsComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialYesNoButtonsComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'btn spinner');
    addShimC(_el_0);
    _compView_1 = import15.ViewMaterialSpinnerComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _MaterialSpinnerComponent_1_5 = import16.MaterialSpinnerComponent();
    _compView_1.create0(_MaterialSpinnerComponent_1_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroyInternalState();
  }
}

AppView<void> viewFactory_MaterialYesNoButtonsComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialYesNoButtonsComponent1(parentView, parentIndex);
}

class _ViewMaterialYesNoButtonsComponent2 extends AppView<import2.MaterialYesNoButtonsComponent> {
  final import17.TextBinding _textBinding_1 = import17.TextBinding();
  import18.ViewMaterialButtonComponent0 _compView_0;
  import19.AutoFocusDirective _AutoFocusDirective_0_5;
  dynamic _AcxDarkTheme_0_6;
  import20.MaterialButtonComponent _MaterialButtonComponent_0_7;
  bool _expr_0;
  var _expr_1;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  import8.Element _el_0;
  _ViewMaterialYesNoButtonsComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialYesNoButtonsComponent> build() {
    final _ctx = ctx;
    _compView_0 = import18.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'btn btn-yes');
    addShimC(_el_0);
    _AutoFocusDirective_0_5 = (import9.isDevMode
        ? import21.debugInjectorWrap(import19.AutoFocusDirective, () {
            return import19.AutoFocusDirective(_el_0, parentView.injectorGet(import22.DomService, viewData.parentIndex), null, parentView.injectorGetOptional(import23.ModalComponent, viewData.parentIndex), parentView.injectorGetOptional(import24.PopupRef, viewData.parentIndex));
          })
        : import19.AutoFocusDirective(_el_0, parentView.injectorGet(import22.DomService, viewData.parentIndex), null, parentView.injectorGetOptional(import23.ModalComponent, viewData.parentIndex), parentView.injectorGetOptional(import24.PopupRef, viewData.parentIndex)));
    _AcxDarkTheme_0_6 = (import9.isDevMode
        ? import21.debugInjectorWrap(import25.AcxDarkTheme, () {
            return import25.AcxDarkTheme(parentView.injectorGetOptional(const import26.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import25.AcxDarkTheme(parentView.injectorGetOptional(const import26.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_0_7 = import20.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_6, _compView_0, null);
    _compView_0.create(_MaterialButtonComponent_0_7, [
      [_textBinding_1.element]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_7.trigger.listen(eventHandler1(_ctx.onYes));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import25.AcxDarkTheme)) {
        return _AcxDarkTheme_0_6;
      }
      if (((identical(token, import20.MaterialButtonComponent) || identical(token, import27.ButtonDirective)) || identical(token, import28.HasDisabled))) {
        return _MaterialButtonComponent_0_7;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final currVal_2 = _ctx.yesAutoFocus;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _AutoFocusDirective_0_5.autoFocus = currVal_2;
      _expr_2 = currVal_2;
    }
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _AutoFocusDirective_0_5.ngOnInit();
    }
    changed = false;
    final currVal_3 = (_ctx.yesDisabled || _ctx.disabled);
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _MaterialButtonComponent_0_7.disabled = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = (_ctx.yesRaised || _ctx.raised);
    if (import13.checkBinding(_expr_4, currVal_4)) {
      _MaterialButtonComponent_0_7.raised = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.yesHighlighted;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.updateClassBindingNonHtml(_el_0, 'highlighted', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.yesAriaLabel;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      import11.updateAttribute(_el_0, 'aria-label', currVal_1);
      _expr_1 = currVal_1;
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_1.updateText(import29.interpolateString0(_ctx.yesText));
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<ViewMaterialYesNoButtonsComponent0>(parentView)._query_yesButton_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _AutoFocusDirective_0_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_MaterialYesNoButtonsComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialYesNoButtonsComponent2(parentView, parentIndex);
}

class _ViewMaterialYesNoButtonsComponent3 extends AppView<import2.MaterialYesNoButtonsComponent> {
  final import17.TextBinding _textBinding_1 = import17.TextBinding();
  import18.ViewMaterialButtonComponent0 _compView_0;
  import19.AutoFocusDirective _AutoFocusDirective_0_5;
  dynamic _AcxDarkTheme_0_6;
  import20.MaterialButtonComponent _MaterialButtonComponent_0_7;
  var _expr_0;
  bool _expr_1;
  bool _expr_2;
  bool _expr_3;
  import8.Element _el_0;
  _ViewMaterialYesNoButtonsComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialYesNoButtonsComponent> build() {
    final _ctx = ctx;
    _compView_0 = import18.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'btn btn-no');
    addShimC(_el_0);
    _AutoFocusDirective_0_5 = (import9.isDevMode
        ? import21.debugInjectorWrap(import19.AutoFocusDirective, () {
            return import19.AutoFocusDirective(_el_0, parentView.injectorGet(import22.DomService, viewData.parentIndex), null, parentView.injectorGetOptional(import23.ModalComponent, viewData.parentIndex), parentView.injectorGetOptional(import24.PopupRef, viewData.parentIndex));
          })
        : import19.AutoFocusDirective(_el_0, parentView.injectorGet(import22.DomService, viewData.parentIndex), null, parentView.injectorGetOptional(import23.ModalComponent, viewData.parentIndex), parentView.injectorGetOptional(import24.PopupRef, viewData.parentIndex)));
    _AcxDarkTheme_0_6 = (import9.isDevMode
        ? import21.debugInjectorWrap(import25.AcxDarkTheme, () {
            return import25.AcxDarkTheme(parentView.injectorGetOptional(const import26.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import25.AcxDarkTheme(parentView.injectorGetOptional(const import26.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_0_7 = import20.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_6, _compView_0, null);
    _compView_0.create(_MaterialButtonComponent_0_7, [
      [_textBinding_1.element]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_7.trigger.listen(eventHandler1(_ctx.onNo));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import25.AcxDarkTheme)) {
        return _AcxDarkTheme_0_6;
      }
      if (((identical(token, import20.MaterialButtonComponent) || identical(token, import27.ButtonDirective)) || identical(token, import28.HasDisabled))) {
        return _MaterialButtonComponent_0_7;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final currVal_1 = _ctx.noAutoFocus;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _AutoFocusDirective_0_5.autoFocus = currVal_1;
      _expr_1 = currVal_1;
    }
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _AutoFocusDirective_0_5.ngOnInit();
    }
    changed = false;
    final currVal_2 = (_ctx.noDisabled || _ctx.disabled);
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _MaterialButtonComponent_0_7.disabled = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.raised;
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _MaterialButtonComponent_0_7.raised = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.noAriaLabel;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.updateAttribute(_el_0, 'aria-label', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_1.updateText(import29.interpolateString0(_ctx.noText));
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<ViewMaterialYesNoButtonsComponent0>(parentView)._query_noButton_1_1_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _AutoFocusDirective_0_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_MaterialYesNoButtonsComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialYesNoButtonsComponent3(parentView, parentIndex);
}

final List<dynamic> styles$MaterialYesNoButtonsComponentHost = const [];

class _ViewMaterialYesNoButtonsComponentHost0 extends AppView<import2.MaterialYesNoButtonsComponent> {
  ViewMaterialYesNoButtonsComponent0 _compView_0;
  import2.MaterialYesNoButtonsComponent _MaterialYesNoButtonsComponent_0_5;
  _ViewMaterialYesNoButtonsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialYesNoButtonsComponent> build() {
    _compView_0 = ViewMaterialYesNoButtonsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialYesNoButtonsComponent_0_5 = import2.MaterialYesNoButtonsComponent();
    _compView_0.create(_MaterialYesNoButtonsComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialYesNoButtonsComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import28.HasDisabled) && (0 == nodeIndex))) {
      return _MaterialYesNoButtonsComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
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

AppView<import2.MaterialYesNoButtonsComponent> viewFactory_MaterialYesNoButtonsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialYesNoButtonsComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialYesNoButtonsComponent, MaterialYesNoButtonsComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
