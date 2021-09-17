// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'dropdown_button.dart';
export 'dropdown_button.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/focus/focus_interface.template.dart' as _ref2;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref3;
import 'package:angular_components/glyph/glyph.template.dart' as _ref4;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref5;
import 'package:angular_components/mixins/button_wrapper.template.dart' as _ref6;
import 'package:angular_components/mixins/focusable_mixin.template.dart' as _ref7;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref8;
import 'package:angular_components/button_decorator/button_decorator.scss.css.shim.dart' as import0;
import 'package:angular_components/material_select/dropdown_button.scss.css.shim.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'dropdown_button.dart' as import3;
import '../button_decorator/button_decorator.template.dart' as import4;
import '../focus/keyboard_only_focus_indicator.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import9;
import 'package:angular/src/core/linker/view_type.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import14;
import '../button_decorator/button_decorator.dart' as import15;
import 'package:angular/src/di/errors.dart' as import16;
import '../utils/browser/dom_service/dom_service.dart' as import17;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import19;
import 'package:angular/src/runtime/text_binding.dart' as import20;
import 'package:angular/src/runtime/interpolate.dart' as import21;
import '../glyph/glyph.template.dart' as import22;
import '../glyph/glyph.dart' as import23;
import '../interfaces/has_disabled.dart' as import24;
import '../focus/focus_interface.dart' as import25;

final List<dynamic> styles$DropdownButtonComponent = [import0.styles, import1.styles];

class ViewDropdownButtonComponent0 extends AppView<import3.DropdownButtonComponent> {
  import4.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import5.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_6;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  bool _expr_4;
  bool _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  String _expr_10;
  bool _expr_11;
  bool _expr_12;
  import8.DivElement _el_0;
  static import9.ComponentStyles _componentStyles;
  ViewDropdownButtonComponent0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import8.document.createElement('dropdown-button');
  }
  static String get _debugComponentUrl {
    return (import12.isDevMode ? 'asset:angular_components/lib/material_select/dropdown_button.dart' : null);
  }

  @override
  ComponentRef<import3.DropdownButtonComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import8.document;
    _el_0 = import14.appendDiv(doc, parentRenderNode);
    import14.setAttribute(_el_0, 'buttonDecorator', '');
    this.updateChildClass(_el_0, 'button');
    import14.setAttribute(_el_0, 'keyboardOnlyFocusIndicator', '');
    addShimC(_el_0);
    _ButtonDirective_0_5 = import4.ButtonDirectiveNgCd(import15.ButtonDirective(_el_0, null));
    _KeyboardOnlyFocusIndicatorDirective_0_6 = (import12.isDevMode
        ? import16.debugInjectorWrap(import5.KeyboardOnlyFocusIndicatorDirective, () {
            return import5.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.injectorGet(import17.DomService, viewData.parentIndex));
          })
        : import5.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.injectorGet(import17.DomService, viewData.parentIndex)));
    final _anchor_1 = import14.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_DropdownButtonComponent1);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _text_2 = import14.appendText(_el_0, ' ');
    project(_el_0, 0);
    final _anchor_3 = import14.appendAnchor(_el_0);
    _appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_DropdownButtonComponent2);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    final _anchor_4 = import14.appendAnchor(parentRenderNode);
    _appEl_4 = ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_DropdownButtonComponent3);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    _el_0.addEventListener('focus', eventHandler1(_handle_focus_0_0));
    _el_0.addEventListener('blur', eventHandler1(_handle_blur_0_1));
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_2));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    _el_0.addEventListener('keydown', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_6.keydown));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction));
    _ctx.button = _ButtonDirective_0_5.instance;
    init0();
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import15.ButtonDirective) && (nodeIndex <= 3))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_10 = _ctx.ariaRole;
    if (import19.checkBinding(_expr_10, currVal_10)) {
      _ButtonDirective_0_5.instance.role = currVal_10;
      _expr_10 = currVal_10;
    }
    final currVal_11 = _ctx.disabled;
    if (import19.checkBinding(_expr_11, currVal_11)) {
      _ButtonDirective_0_5.instance.disabled = currVal_11;
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.tabbable;
    if (import19.checkBinding(_expr_12, currVal_12)) {
      _ButtonDirective_0_5.instance.tabbable = currVal_12;
      _expr_12 = currVal_12;
    }
    _NgIf_1_9.ngIf = (_ctx.buttonText != null);
    _NgIf_3_9.ngIf = (_ctx.buttonIcon != null);
    _NgIf_4_9.ngIf = _ctx.invalid;
    _appEl_1.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    if (firstCheck) {
      if (!identical(_ctx.uuid, null)) {
        import14.updateAttribute(_el_0, 'id', _ctx.uuid);
      }
    }
    final currVal_1 = _ctx.buttonAriaLabel;
    if (import19.checkBinding(_expr_1, currVal_1)) {
      import14.updateAttribute(_el_0, 'aria-label', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.ariaLabelledBy;
    if (import19.checkBinding(_expr_2, currVal_2)) {
      import14.updateAttribute(_el_0, 'aria-labelledby', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.ariaDescribedBy;
    if (import19.checkBinding(_expr_3, currVal_3)) {
      import14.updateAttribute(_el_0, 'aria-describedby', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.showButtonBorder;
    if (import19.checkBinding(_expr_4, currVal_4)) {
      import14.updateClassBinding(_el_0, 'border', currVal_4);
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.invalid;
    if (import19.checkBinding(_expr_5, currVal_5)) {
      import14.updateClassBinding(_el_0, 'invalid', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.popupType;
    if (import19.checkBinding(_expr_6, currVal_6)) {
      import14.updateAttribute(_el_0, 'aria-haspopup', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.ariaOwns;
    if (import19.checkBinding(_expr_7, currVal_7)) {
      import14.updateAttribute(_el_0, 'aria-owns', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.ariaExpanded;
    if (import19.checkBinding(_expr_8, currVal_8)) {
      import14.updateAttribute(_el_0, 'aria-expanded', currVal_8?.toString());
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.ariaActiveDescendant;
    if (import19.checkBinding(_expr_9, currVal_9)) {
      import14.updateAttribute(_el_0, 'aria-activedescendant', currVal_9);
      _expr_9 = currVal_9;
    }
    _ButtonDirective_0_5.detectHostChanges(this, _el_0);
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_3.destroyNestedViews();
    _appEl_4.destroyNestedViews();
  }

  void _handle_focus_0_0($event) {
    final _ctx = ctx;
    _ctx.handleFocus($event);
    _KeyboardOnlyFocusIndicatorDirective_0_6.onFocus($event);
  }

  void _handle_blur_0_1($event) {
    final _ctx = ctx;
    _ctx.handleBlur($event);
    _KeyboardOnlyFocusIndicatorDirective_0_6.resetOutline();
  }

  void _handle_click_0_2($event) {
    _ButtonDirective_0_5.instance.handleClick($event);
    _KeyboardOnlyFocusIndicatorDirective_0_6.onMouseInteraction();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import9.ComponentStyles.scoped(styles$DropdownButtonComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import3.DropdownButtonComponent> _DropdownButtonComponentNgFactory = const ComponentFactory('dropdown-button', viewFactory_DropdownButtonComponentHost0);
ComponentFactory<import3.DropdownButtonComponent> get DropdownButtonComponentNgFactory {
  return _DropdownButtonComponentNgFactory;
}

class _ViewDropdownButtonComponent1 extends AppView<import3.DropdownButtonComponent> {
  final import20.TextBinding _textBinding_1 = import20.TextBinding();
  _ViewDropdownButtonComponent1(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import3.DropdownButtonComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'button-text');
    addShimE(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import21.interpolateString0(_ctx.buttonText));
  }
}

AppView<void> viewFactory_DropdownButtonComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDropdownButtonComponent1(parentView, parentIndex);
}

class _ViewDropdownButtonComponent2 extends AppView<import3.DropdownButtonComponent> {
  import22.ViewGlyphComponent0 _compView_0;
  import23.GlyphComponent _GlyphComponent_0_5;
  var _expr_0;
  _ViewDropdownButtonComponent2(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import3.DropdownButtonComponent> build() {
    _compView_0 = import22.ViewGlyphComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'icon');
    addShimC(_el_0);
    _GlyphComponent_0_5 = import23.GlyphComponent(_el_0);
    _compView_0.create0(_GlyphComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.buttonIcon;
    if (import19.checkBinding(_expr_0, currVal_0)) {
      _GlyphComponent_0_5.icon = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
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

AppView<void> viewFactory_DropdownButtonComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDropdownButtonComponent2(parentView, parentIndex);
}

class _ViewDropdownButtonComponent3 extends AppView<import3.DropdownButtonComponent> {
  final import20.TextBinding _textBinding_1 = import20.TextBinding();
  bool _expr_0;
  var _expr_1;
  import8.DivElement _el_0;
  _ViewDropdownButtonComponent3(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import3.DropdownButtonComponent> build() {
    final doc = import8.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'error-text');
    import14.setAttribute(_el_0, 'role', 'alert');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.invalid;
    if (import19.checkBinding(_expr_0, currVal_0)) {
      import14.updateClassBinding(_el_0, 'invalid', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import21.interpolate0((!_ctx.invalid));
    if (import19.checkBinding(_expr_1, currVal_1)) {
      import14.setAttribute(_el_0, 'aria-hidden', currVal_1);
      _expr_1 = currVal_1;
    }
    _textBinding_1.updateText(import21.interpolateString0(_ctx.error));
  }
}

AppView<void> viewFactory_DropdownButtonComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDropdownButtonComponent3(parentView, parentIndex);
}

final List<dynamic> styles$DropdownButtonComponentHost = const [];

class _ViewDropdownButtonComponentHost0 extends AppView<import3.DropdownButtonComponent> {
  ViewDropdownButtonComponent0 _compView_0;
  import3.DropdownButtonComponent _DropdownButtonComponent_0_5;
  _ViewDropdownButtonComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import3.DropdownButtonComponent> build() {
    _compView_0 = ViewDropdownButtonComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DropdownButtonComponent_0_5 = import3.DropdownButtonComponent();
    _compView_0.create(_DropdownButtonComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _DropdownButtonComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import24.HasDisabled) || identical(token, import25.Focusable)) && (0 == nodeIndex))) {
      return _DropdownButtonComponent_0_5;
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
    if (((!import19.AppViewUtils.throwOnChanges) && firstCheck)) {
      _DropdownButtonComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import3.DropdownButtonComponent> viewFactory_DropdownButtonComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDropdownButtonComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DropdownButtonComponent, DropdownButtonComponentNgFactory);
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
