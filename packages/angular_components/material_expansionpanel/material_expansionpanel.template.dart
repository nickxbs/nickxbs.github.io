// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_expansionpanel.dart';
export 'material_expansionpanel.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/content/deferred_content.template.dart' as _ref2;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref3;
import 'package:angular_components/focus/focus.template.dart' as _ref4;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref5;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref6;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref7;
import 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart' as _ref8;
import 'package:angular_components/model/action/async_action.template.dart' as _ref9;
import 'package:angular_components/model/observable/observable.template.dart' as _ref10;
import 'package:angular_components/utils/angular/id/id.template.dart' as _ref11;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref12;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref13;
import 'package:angular_components/material_expansionpanel/material_expansionpanel.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_expansionpanel.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import '../material_yes_no_buttons/material_yes_no_buttons.dart' as import4;
import '../button_decorator/button_decorator.template.dart' as import5;
import '../focus/keyboard_only_focus_indicator.dart' as import6;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import '../utils/angular/id/id.template.dart' as import9;
import '../content/deferred_content.dart' as import10;
import 'dart:html' as import11;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import12;
import 'package:angular/src/core/linker/view_type.dart' as import13;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import15;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import17;
import '../button_decorator/button_decorator.dart' as import18;
import 'package:angular/src/di/errors.dart' as import19;
import '../utils/browser/dom_service/dom_service.dart' as import20;
import 'package:angular/src/core/linker/template_ref.dart';
import '../utils/angular/id/id.dart' as import22;
import '../utils/id_generator/id_generator.dart' as import23;
import '../content/deferred_content_aware.dart' as import24;
import 'package:angular/src/core/linker/app_view_utils.dart' as import25;
import 'package:angular/src/runtime/queries.dart' as import26;
import 'package:angular/src/runtime/interpolate.dart' as import27;
import '../material_icon/material_icon.template.dart' as import28;
import '../material_icon/material_icon.dart' as import29;
import '../material_yes_no_buttons/material_yes_no_buttons.template.dart' as import30;
import '../interfaces/has_disabled.dart' as import31;
import 'package:angular/src/core/zone/ng_zone.dart' as import32;
import '../focus/focus.dart' as import33;
import '../focus/focus_interface.dart' as import34;

final List<dynamic> styles$MaterialExpansionPanel = [import0.styles];

class ViewMaterialExpansionPanel0 extends AppView<import2.MaterialExpansionPanel> {
  bool _query_action_1_4_isDirty = true;
  bool _query_mainContent_1_2_isDirty = true;
  bool _query_contentWrapper_1_5_isDirty = true;
  bool _query_expandCollapseButton_1_6_isDirty = true;
  final import3.TextBinding _textBinding_6 = import3.TextBinding();
  import4.KeyUpBoundaryDirective _KeyUpBoundaryDirective_0_5;
  import5.ButtonDirectiveNgCd _ButtonDirective_2_5;
  import6.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_2_6;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  import9.AutoIdDirectiveNgCd _AutoIdDirective_8_5;
  ViewContainer _appEl_9;
  NgIf _NgIf_9_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  import9.AutoIdDirectiveNgCd _AutoIdDirective_11_5;
  ViewContainer _appEl_12;
  import10.DeferredContentDirective _DeferredContentDirective_12_9;
  bool _expr_0;
  bool _expr_1;
  bool _expr_2;
  bool _expr_3;
  var _expr_4;
  bool _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  bool _expr_9;
  bool _expr_14;
  import11.DivElement _el_0;
  import11.Element _el_1;
  import11.DivElement _el_2;
  import11.DivElement _el_8;
  import11.Element _el_11;
  static import12.ComponentStyles _componentStyles;
  ViewMaterialExpansionPanel0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import11.document.createElement('material-expansionpanel');
  }
  static String get _debugComponentUrl {
    return (import15.isDevMode ? 'asset:angular_components/lib/material_expansionpanel/material_expansionpanel.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import11.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import11.document;
    _el_0 = import17.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'panel themeable');
    import17.setAttribute(_el_0, 'keyupBoundary', '');
    addShimC(_el_0);
    _KeyUpBoundaryDirective_0_5 = import4.KeyUpBoundaryDirective(_el_0);
    _el_1 = import17.appendElement(doc, _el_0, 'header');
    import17.setAttribute(_el_1, 'role', 'presentation');
    addShimE(_el_1);
    _el_2 = import17.appendDiv(doc, _el_1);
    import17.setAttribute(_el_2, 'buttonDecorator', '');
    this.updateChildClass(_el_2, 'header');
    import17.setAttribute(_el_2, 'keyboardOnlyFocusIndicator', '');
    addShimC(_el_2);
    _ButtonDirective_2_5 = import5.ButtonDirectiveNgCd(import18.ButtonDirective(_el_2, null));
    _KeyboardOnlyFocusIndicatorDirective_2_6 = (import15.isDevMode
        ? import19.debugInjectorWrap(import6.KeyboardOnlyFocusIndicatorDirective, () {
            return import6.KeyboardOnlyFocusIndicatorDirective(_el_2, parentView.injectorGet(import20.DomService, viewData.parentIndex));
          })
        : import6.KeyboardOnlyFocusIndicatorDirective(_el_2, parentView.injectorGet(import20.DomService, viewData.parentIndex)));
    final _anchor_3 = import17.appendAnchor(_el_2);
    _appEl_3 = ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_MaterialExpansionPanel1);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    final _el_4 = import17.appendDiv(doc, _el_2);
    this.updateChildClass(_el_4, 'panel-name');
    addShimC(_el_4);
    project(_el_4, 0);
    final _el_5 = import17.appendElement(doc, _el_4, 'p');
    this.updateChildClass(_el_5, 'primary-text');
    addShimE(_el_5);
    _el_5.append(_textBinding_6.element);
    final _anchor_7 = import17.appendAnchor(_el_4);
    _appEl_7 = ViewContainer(7, 4, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, viewFactory_MaterialExpansionPanel2);
    _NgIf_7_9 = NgIf(_appEl_7, _TemplateRef_7_8);
    _el_8 = import17.appendDiv(doc, _el_2);
    import17.setAttribute(_el_8, 'autoId', '');
    this.updateChildClass(_el_8, 'panel-description');
    addShimC(_el_8);
    _AutoIdDirective_8_5 = import9.AutoIdDirectiveNgCd((import15.isDevMode
        ? import19.debugInjectorWrap(import22.AutoIdDirective, () {
            return import22.AutoIdDirective(parentView.injectorGetOptional(import23.IdGenerator, viewData.parentIndex), null);
          })
        : import22.AutoIdDirective(parentView.injectorGetOptional(import23.IdGenerator, viewData.parentIndex), null)));
    project(_el_8, 1);
    final _anchor_9 = import17.appendAnchor(_el_2);
    _appEl_9 = ViewContainer(9, 2, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = TemplateRef(_appEl_9, viewFactory_MaterialExpansionPanel3);
    _NgIf_9_9 = NgIf(_appEl_9, _TemplateRef_9_8);
    final _anchor_10 = import17.appendAnchor(_el_1);
    _appEl_10 = ViewContainer(10, 1, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(_appEl_10, viewFactory_MaterialExpansionPanel4);
    _NgIf_10_9 = NgIf(_appEl_10, _TemplateRef_10_8);
    _el_11 = import17.appendElement(doc, _el_0, 'main');
    import17.setAttribute(_el_11, 'autoId', '');
    import17.setAttribute(_el_11, 'role', 'presentation');
    addShimE(_el_11);
    _AutoIdDirective_11_5 = import9.AutoIdDirectiveNgCd((import15.isDevMode
        ? import19.debugInjectorWrap(import22.AutoIdDirective, () {
            return import22.AutoIdDirective(parentView.injectorGetOptional(import23.IdGenerator, viewData.parentIndex), null);
          })
        : import22.AutoIdDirective(parentView.injectorGetOptional(import23.IdGenerator, viewData.parentIndex), null)));
    final _anchor_12 = import17.appendAnchor(_el_11);
    _appEl_12 = ViewContainer(12, 11, this, _anchor_12);
    TemplateRef _TemplateRef_12_8 = TemplateRef(_appEl_12, viewFactory_MaterialExpansionPanel5);
    _DeferredContentDirective_12_9 = (import15.isDevMode
        ? import19.debugInjectorWrap(import10.DeferredContentDirective, () {
            return import10.DeferredContentDirective(_appEl_12, _TemplateRef_12_8, parentView.injectorGet(import24.DeferredContentAware, viewData.parentIndex));
          })
        : import10.DeferredContentDirective(_appEl_12, _TemplateRef_12_8, parentView.injectorGet(import24.DeferredContentAware, viewData.parentIndex)));
    _el_2.addEventListener('click', eventHandler1(_handle_click_2_1));
    _el_2.addEventListener('keypress', eventHandler1(_ButtonDirective_2_5.instance.handleKeyPress));
    _el_2.addEventListener('keydown', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_2_6.keydown));
    _el_2.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_2_6.resetOutline));
    _el_2.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_2_6.onMouseInteraction));
    _el_2.addEventListener('focus', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_2_6.onFocus));
    final subscription_0 = _ButtonDirective_2_5.instance.trigger.listen(eventHandler0(_ctx.handleHeaderClick));
    _ctx.mainPanel = _el_11;
    _ctx.headerPanel = _el_1;
    _ctx.headerContent = _el_2;
    init(const [], [subscription_0]);
    _rootEl.addEventListener('keydown', eventHandler1(_ctx.keydown));
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 12)) {
      if ((identical(token, import18.ButtonDirective) && ((2 <= nodeIndex) && (nodeIndex <= 9)))) {
        return _ButtonDirective_2_5.instance;
      }
      if (identical(token, import4.KeyUpBoundaryDirective)) {
        return _KeyUpBoundaryDirective_0_5;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final import22.AutoIdDirective local_panelDescription = _AutoIdDirective_8_5.instance;
    final import22.AutoIdDirective local_mainId = _AutoIdDirective_11_5.instance;
    final currVal_9 = (_ctx.disabled || _ctx.headerHidden);
    if (import25.checkBinding(_expr_9, currVal_9)) {
      _ButtonDirective_2_5.instance.disabled = currVal_9;
      _expr_9 = currVal_9;
    }
    _NgIf_3_9.ngIf = (_ctx.shouldShowExpandIcon && _ctx.shouldExpandOnLeft);
    _NgIf_7_9.ngIf = (_ctx.secondaryText != null);
    _NgIf_9_9.ngIf = (_ctx.shouldShowExpandIcon && (!_ctx.shouldExpandOnLeft));
    _NgIf_10_9.ngIf = ((!_ctx.shouldShowExpandIcon) && (!_ctx.headerHidden));
    if (firstCheck) {
      _DeferredContentDirective_12_9.preserveDimensions = true;
      if (!identical(_ctx.forceContentWhenClosed, null)) {
        (_DeferredContentDirective_12_9.deferredContentForceContent = _ctx.forceContentWhenClosed);
      }
    }
    _appEl_3.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    _appEl_9.detectChangesInNestedViews();
    _appEl_10.detectChangesInNestedViews();
    _appEl_12.detectChangesInNestedViews();
    if ((!import25.AppViewUtils.throwOnChanges)) {
      if (_query_mainContent_1_2_isDirty) {
        _ctx.mainContent = import26.firstOrNull(_appEl_12.mapNestedViews((_ViewMaterialExpansionPanel5 nestedView) {
          return [nestedView._el_0];
        }));
        _query_mainContent_1_2_isDirty = false;
      }
      if (_query_action_1_4_isDirty) {
        _ctx.actionContent = import26.firstOrNull(_appEl_10.mapNestedViews((_ViewMaterialExpansionPanel4 nestedView) {
          return [nestedView._el_0];
        }));
        _query_action_1_4_isDirty = false;
      }
      if (_query_contentWrapper_1_5_isDirty) {
        _ctx.contentWrapper = import26.firstOrNull(_appEl_12.mapNestedViews((_ViewMaterialExpansionPanel5 nestedView) {
          return [nestedView._el_1];
        }));
        _query_contentWrapper_1_5_isDirty = false;
      }
      if (_query_expandCollapseButton_1_6_isDirty) {
        _ctx.expandCollapse = import26.firstOrNull(import26.flattenNodes([
          [_ButtonDirective_2_5.instance],
          _appEl_12.mapNestedViews((_ViewMaterialExpansionPanel5 nestedView) {
            return import26.flattenNodes([
              nestedView._appEl_2.mapNestedViews((_ViewMaterialExpansionPanel6 nestedView) {
                return [nestedView._ButtonDirective_0_5.instance];
              }),
              nestedView._appEl_4.mapNestedViews((_ViewMaterialExpansionPanel7 nestedView) {
                return [nestedView._ButtonDirective_0_5.instance];
              })
            ]);
          })
        ]));
        _query_expandCollapseButton_1_6_isDirty = false;
      }
    }
    final currVal_0 = _ctx.isExpanded;
    if (import25.checkBinding(_expr_0, currVal_0)) {
      import17.updateClassBinding(_el_0, 'open', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.anotherExpanded;
    if (import25.checkBinding(_expr_1, currVal_1)) {
      import17.updateClassBinding(_el_0, 'background', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.headerHidden;
    if (import25.checkBinding(_expr_2, currVal_2)) {
      import17.updateClassBinding(_el_1, 'hidden', currVal_2);
      _expr_2 = currVal_2;
    }
    final bool currVal_3 = (!_ctx.isExpanded);
    if (import25.checkBinding(_expr_3, currVal_3)) {
      import17.updateClassBinding(_el_2, 'closed', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.isExpanded;
    if (import25.checkBinding(_expr_4, currVal_4)) {
      import17.updateAttribute(_el_2, 'aria-expanded', currVal_4?.toString());
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.disableHeaderExpansion;
    if (import25.checkBinding(_expr_5, currVal_5)) {
      import17.updateClassBinding(_el_2, 'disable-header-expansion', currVal_5);
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.headerMsg;
    if (import25.checkBinding(_expr_6, currVal_6)) {
      import17.updateAttribute(_el_2, 'aria-label', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = local_panelDescription.id;
    if (import25.checkBinding(_expr_7, currVal_7)) {
      import17.updateAttribute(_el_2, 'aria-describedby', currVal_7?.toString());
      _expr_7 = currVal_7;
    }
    final currVal_8 = local_mainId.id;
    if (import25.checkBinding(_expr_8, currVal_8)) {
      import17.updateAttribute(_el_2, 'aria-controls', currVal_8?.toString());
      _expr_8 = currVal_8;
    }
    _ButtonDirective_2_5.detectHostChanges(this, _el_2);
    _textBinding_6.updateText(import27.interpolateString0(_ctx.name));
    _AutoIdDirective_8_5.detectHostChanges(this, _el_8);
    final bool currVal_14 = (!_ctx.isExpanded);
    if (import25.checkBinding(_expr_14, currVal_14)) {
      import17.updateClassBinding(_el_11, 'hidden', currVal_14);
      _expr_14 = currVal_14;
    }
    _AutoIdDirective_11_5.detectHostChanges(this, _el_11);
  }

  @override
  void destroyInternal() {
    _appEl_3.destroyNestedViews();
    _appEl_7.destroyNestedViews();
    _appEl_9.destroyNestedViews();
    _appEl_10.destroyNestedViews();
    _appEl_12.destroyNestedViews();
    _DeferredContentDirective_12_9.ngOnDestroy();
  }

  void _handle_click_2_1($event) {
    _ButtonDirective_2_5.instance.handleClick($event);
    _KeyboardOnlyFocusIndicatorDirective_2_6.onMouseInteraction();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import12.ComponentStyles.scoped(styles$MaterialExpansionPanel, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialExpansionPanel> _MaterialExpansionPanelNgFactory = const ComponentFactory('material-expansionpanel', viewFactory_MaterialExpansionPanelHost0);
ComponentFactory<import2.MaterialExpansionPanel> get MaterialExpansionPanelNgFactory {
  return _MaterialExpansionPanelNgFactory;
}

class _ViewMaterialExpansionPanel1 extends AppView<import2.MaterialExpansionPanel> {
  import28.ViewMaterialIconComponent0 _compView_0;
  import29.MaterialIconComponent _MaterialIconComponent_0_5;
  bool _expr_0;
  var _expr_1;
  import11.Element _el_0;
  _ViewMaterialExpansionPanel1(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    final _ctx = ctx;
    _compView_0 = import28.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'expand-button expand-on-left');
    addShimC(_el_0);
    _MaterialIconComponent_0_5 = import29.MaterialIconComponent(_el_0);
    _compView_0.create0(_MaterialIconComponent_0_5);
    _el_0.addEventListener('click', eventHandler0(_ctx.handleExpandIconClick));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_1 = _ctx.expandIcon;
    if (import25.checkBinding(_expr_1, currVal_1)) {
      _MaterialIconComponent_0_5.icon = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.shouldFlipExpandIcon;
    if (import25.checkBinding(_expr_0, currVal_0)) {
      import17.updateClassBindingNonHtml(_el_0, 'expand-more', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<void> viewFactory_MaterialExpansionPanel1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel1(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel2 extends AppView<import2.MaterialExpansionPanel> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  _ViewMaterialExpansionPanel2(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    final doc = import11.document;
    final _el_0 = doc.createElement('p');
    this.updateChildClass(_el_0, 'secondary-text');
    addShimE(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import27.interpolateString0(_ctx.secondaryText));
  }
}

AppView<void> viewFactory_MaterialExpansionPanel2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel2(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel3 extends AppView<import2.MaterialExpansionPanel> {
  import28.ViewMaterialIconComponent0 _compView_0;
  import29.MaterialIconComponent _MaterialIconComponent_0_5;
  bool _expr_0;
  var _expr_1;
  import11.Element _el_0;
  _ViewMaterialExpansionPanel3(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    final _ctx = ctx;
    _compView_0 = import28.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'expand-button');
    addShimC(_el_0);
    _MaterialIconComponent_0_5 = import29.MaterialIconComponent(_el_0);
    _compView_0.create0(_MaterialIconComponent_0_5);
    _el_0.addEventListener('click', eventHandler0(_ctx.handleExpandIconClick));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_1 = _ctx.expandIcon;
    if (import25.checkBinding(_expr_1, currVal_1)) {
      _MaterialIconComponent_0_5.icon = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.shouldFlipExpandIcon;
    if (import25.checkBinding(_expr_0, currVal_0)) {
      import17.updateClassBindingNonHtml(_el_0, 'expand-more', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<void> viewFactory_MaterialExpansionPanel3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel3(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel4 extends AppView<import2.MaterialExpansionPanel> {
  import11.DivElement _el_0;
  _ViewMaterialExpansionPanel4(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    final doc = import11.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'action');
    addShimC(_el_0);
    project(_el_0, 2);
    init1(_el_0);
  }

  @override
  void dirtyParentQueriesInternal() {
    import15.unsafeCast<ViewMaterialExpansionPanel0>(parentView)._query_action_1_4_isDirty = true;
  }
}

AppView<void> viewFactory_MaterialExpansionPanel4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel4(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel5 extends AppView<import2.MaterialExpansionPanel> {
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  bool _expr_0;
  import11.DivElement _el_0;
  import11.DivElement _el_1;
  _ViewMaterialExpansionPanel5(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    final doc = import11.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_1 = import17.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'content-wrapper');
    addShimC(_el_1);
    final _anchor_2 = import17.appendAnchor(_el_1);
    _appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialExpansionPanel6);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _el_3 = import17.appendDiv(doc, _el_1);
    this.updateChildClass(_el_3, 'content');
    addShimC(_el_3);
    project(_el_3, 3);
    final _anchor_4 = import17.appendAnchor(_el_1);
    _appEl_4 = ViewContainer(4, 1, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_MaterialExpansionPanel7);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    final _anchor_5 = import17.appendAnchor(_el_0);
    _appEl_5 = ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_MaterialExpansionPanel8);
    _NgIf_5_9 = NgIf(_appEl_5, _TemplateRef_5_8);
    final _anchor_6 = import17.appendAnchor(_el_0);
    _appEl_6 = ViewContainer(6, 0, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_MaterialExpansionPanel9);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_2_9.ngIf = (_ctx.shouldShowHiddenHeaderExpandIcon && _ctx.shouldExpandOnLeft);
    _NgIf_4_9.ngIf = (_ctx.shouldShowHiddenHeaderExpandIcon && (!_ctx.shouldExpandOnLeft));
    _NgIf_5_9.ngIf = (!_ctx.showSaveCancel);
    _NgIf_6_9.ngIf = _ctx.showSaveCancel;
    _appEl_2.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    final currVal_0 = _ctx.hideExpandedHeader;
    if (import25.checkBinding(_expr_0, currVal_0)) {
      import17.updateClassBinding(_el_1, 'hidden-header', currVal_0);
      _expr_0 = currVal_0;
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import15.unsafeCast<ViewMaterialExpansionPanel0>(parentView)._query_mainContent_1_2_isDirty = true;
    import15.unsafeCast<ViewMaterialExpansionPanel0>(parentView)._query_contentWrapper_1_5_isDirty = true;
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _appEl_4.destroyNestedViews();
    _appEl_5.destroyNestedViews();
    _appEl_6.destroyNestedViews();
  }
}

AppView<void> viewFactory_MaterialExpansionPanel5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel5(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel6 extends AppView<import2.MaterialExpansionPanel> {
  import28.ViewMaterialIconComponent0 _compView_0;
  import5.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import29.MaterialIconComponent _MaterialIconComponent_0_6;
  import6.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_7;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  import11.Element _el_0;
  _ViewMaterialExpansionPanel6(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    final _ctx = ctx;
    _compView_0 = import28.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    import17.setAttribute(_el_0, 'buttonDecorator', '');
    this.updateChildClassNonHtml(_el_0, 'expand-button expand-on-left');
    import17.setAttribute(_el_0, 'keyboardOnlyFocusIndicator', '');
    addShimC(_el_0);
    _ButtonDirective_0_5 = import5.ButtonDirectiveNgCd(import18.ButtonDirective(_el_0, null));
    _MaterialIconComponent_0_6 = import29.MaterialIconComponent(_el_0);
    _KeyboardOnlyFocusIndicatorDirective_0_7 = (import15.isDevMode
        ? import19.debugInjectorWrap(import6.KeyboardOnlyFocusIndicatorDirective, () {
            return import6.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.injectorGet(import20.DomService, parentView.parentView.viewData.parentIndex));
          })
        : import6.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.injectorGet(import20.DomService, parentView.parentView.viewData.parentIndex)));
    _compView_0.create0(_MaterialIconComponent_0_6);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_1));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    _el_0.addEventListener('keydown', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_7.keydown));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_7.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_7.onMouseInteraction));
    _el_0.addEventListener('focus', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_7.onFocus));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler0(_ctx.collapse));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import18.ButtonDirective) && (0 == nodeIndex))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    final import22.AutoIdDirective local_mainId = import15.unsafeCast<ViewMaterialExpansionPanel0>(parentView.parentView)._AutoIdDirective_11_5.instance;
    changed = false;
    final currVal_3 = _ctx.expandIcon;
    if (import25.checkBinding(_expr_3, currVal_3)) {
      _MaterialIconComponent_0_6.icon = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.isExpanded;
    if (import25.checkBinding(_expr_0, currVal_0)) {
      import17.updateAttribute(_el_0, 'aria-expanded', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    final currVal_1 = local_mainId.id;
    if (import25.checkBinding(_expr_1, currVal_1)) {
      import17.updateAttribute(_el_0, 'aria-controls', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.closePanelMsg;
    if (import25.checkBinding(_expr_2, currVal_2)) {
      import17.updateAttribute(_el_0, 'aria-label', currVal_2);
      _expr_2 = currVal_2;
    }
    _ButtonDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import15.unsafeCast<ViewMaterialExpansionPanel0>(parentView.parentView)._query_expandCollapseButton_1_6_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }

  void _handle_click_0_1($event) {
    _ButtonDirective_0_5.instance.handleClick($event);
    _KeyboardOnlyFocusIndicatorDirective_0_7.onMouseInteraction();
  }
}

AppView<void> viewFactory_MaterialExpansionPanel6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel6(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel7 extends AppView<import2.MaterialExpansionPanel> {
  import28.ViewMaterialIconComponent0 _compView_0;
  import5.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import29.MaterialIconComponent _MaterialIconComponent_0_6;
  import6.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_0_7;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  import11.Element _el_0;
  _ViewMaterialExpansionPanel7(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    final _ctx = ctx;
    _compView_0 = import28.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    import17.setAttribute(_el_0, 'buttonDecorator', '');
    this.updateChildClassNonHtml(_el_0, 'expand-button');
    import17.setAttribute(_el_0, 'keyboardOnlyFocusIndicator', '');
    addShimC(_el_0);
    _ButtonDirective_0_5 = import5.ButtonDirectiveNgCd(import18.ButtonDirective(_el_0, null));
    _MaterialIconComponent_0_6 = import29.MaterialIconComponent(_el_0);
    _KeyboardOnlyFocusIndicatorDirective_0_7 = (import15.isDevMode
        ? import19.debugInjectorWrap(import6.KeyboardOnlyFocusIndicatorDirective, () {
            return import6.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.injectorGet(import20.DomService, parentView.parentView.viewData.parentIndex));
          })
        : import6.KeyboardOnlyFocusIndicatorDirective(_el_0, parentView.parentView.parentView.injectorGet(import20.DomService, parentView.parentView.viewData.parentIndex)));
    _compView_0.create0(_MaterialIconComponent_0_6);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_1));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    _el_0.addEventListener('keydown', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_7.keydown));
    _el_0.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_7.resetOutline));
    _el_0.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_0_7.onMouseInteraction));
    _el_0.addEventListener('focus', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_0_7.onFocus));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler0(_ctx.collapse));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import18.ButtonDirective) && (0 == nodeIndex))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_2 = _ctx.expandIcon;
    if (import25.checkBinding(_expr_2, currVal_2)) {
      _MaterialIconComponent_0_6.icon = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.isExpanded;
    if (import25.checkBinding(_expr_0, currVal_0)) {
      import17.updateAttribute(_el_0, 'aria-expanded', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.closePanelMsg;
    if (import25.checkBinding(_expr_1, currVal_1)) {
      import17.updateAttribute(_el_0, 'aria-label', currVal_1);
      _expr_1 = currVal_1;
    }
    _ButtonDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import15.unsafeCast<ViewMaterialExpansionPanel0>(parentView.parentView)._query_expandCollapseButton_1_6_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }

  void _handle_click_0_1($event) {
    _ButtonDirective_0_5.instance.handleClick($event);
    _KeyboardOnlyFocusIndicatorDirective_0_7.onMouseInteraction();
  }
}

AppView<void> viewFactory_MaterialExpansionPanel7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel7(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel8 extends AppView<import2.MaterialExpansionPanel> {
  _ViewMaterialExpansionPanel8(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    final doc = import11.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'toolbelt');
    addShimC(_el_0);
    project(_el_0, 4);
    init1(_el_0);
  }
}

AppView<void> viewFactory_MaterialExpansionPanel8(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel8(parentView, parentIndex);
}

class _ViewMaterialExpansionPanel9 extends AppView<import2.MaterialExpansionPanel> {
  import30.ViewMaterialYesNoButtonsComponent0 _compView_0;
  import4.MaterialYesNoButtonsComponent _MaterialYesNoButtonsComponent_0_5;
  import4.EnterAcceptsDirective _EnterAcceptsDirective_0_6;
  String _expr_0;
  String _expr_1;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  bool _expr_5;
  _ViewMaterialExpansionPanel9(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    final _ctx = ctx;
    _compView_0 = import30.ViewMaterialYesNoButtonsComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'action-buttons');
    import17.setAttribute(_el_0, 'reverse', '');
    addShimC(_el_0);
    _MaterialYesNoButtonsComponent_0_5 = import4.MaterialYesNoButtonsComponent();
    _EnterAcceptsDirective_0_6 = import4.EnterAcceptsDirective(_MaterialYesNoButtonsComponent_0_5, _el_0, import15.unsafeCast<ViewMaterialExpansionPanel0>(parentView.parentView)._KeyUpBoundaryDirective_0_5);
    _compView_0.create0(_MaterialYesNoButtonsComponent_0_5);
    final subscription_0 = _MaterialYesNoButtonsComponent_0_5.yes.listen(eventHandler0(_ctx.doSave));
    final subscription_1 = _MaterialYesNoButtonsComponent_0_5.no.listen(eventHandler0(_ctx.doCancel));
    init([_el_0], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import31.HasDisabled)) {
        return _MaterialYesNoButtonsComponent_0_5;
      }
      if (identical(token, import4.EnterAcceptsDirective)) {
        return _EnterAcceptsDirective_0_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    changed = false;
    final currVal_0 = _ctx.saveText;
    if (import25.checkBinding(_expr_0, currVal_0)) {
      _MaterialYesNoButtonsComponent_0_5.yesText = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.cancelText;
    if (import25.checkBinding(_expr_1, currVal_1)) {
      _MaterialYesNoButtonsComponent_0_5.noText = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.saveDisabled;
    if (import25.checkBinding(_expr_2, currVal_2)) {
      _MaterialYesNoButtonsComponent_0_5.yesDisabled = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.cancelDisplayed;
    if (import25.checkBinding(_expr_3, currVal_3)) {
      _MaterialYesNoButtonsComponent_0_5.noDisplayed = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.activeSaveCancelAction;
    if (import25.checkBinding(_expr_4, currVal_4)) {
      _MaterialYesNoButtonsComponent_0_5.pending = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_5 = _ctx.enterAccepts;
    if (import25.checkBinding(_expr_5, currVal_5)) {
      _EnterAcceptsDirective_0_6.enterAccepts = currVal_5;
      _expr_5 = currVal_5;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _EnterAcceptsDirective_0_6.ngOnDestroy();
  }
}

AppView<void> viewFactory_MaterialExpansionPanel9(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanel9(parentView, parentIndex);
}

final List<dynamic> styles$MaterialExpansionPanelHost = const [];

class _ViewMaterialExpansionPanelHost0 extends AppView<import2.MaterialExpansionPanel> {
  ViewMaterialExpansionPanel0 _compView_0;
  import2.MaterialExpansionPanel _MaterialExpansionPanel_0_5;
  _ViewMaterialExpansionPanelHost0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialExpansionPanel> build() {
    _compView_0 = ViewMaterialExpansionPanel0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialExpansionPanel_0_5 = (import15.isDevMode
        ? import19.debugInjectorWrap(import2.MaterialExpansionPanel, () {
            return import2.MaterialExpansionPanel(this.injectorGet(import32.NgZone, viewData.parentIndex), _compView_0, this.injectorGet(import20.DomService, viewData.parentIndex), null, null);
          })
        : import2.MaterialExpansionPanel(this.injectorGet(import32.NgZone, viewData.parentIndex), _compView_0, this.injectorGet(import20.DomService, viewData.parentIndex), null, null));
    _compView_0.create(_MaterialExpansionPanel_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialExpansionPanel_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((((identical(token, import2.MaterialExpansionPanel) || identical(token, import24.DeferredContentAware)) || identical(token, import31.HasDisabled)) || identical(token, import33.FocusableItem)) || identical(token, import34.Focusable)) && (0 == nodeIndex))) {
      return _MaterialExpansionPanel_0_5;
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
    if (((!import25.AppViewUtils.throwOnChanges) && firstCheck)) {
      _MaterialExpansionPanel_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialExpansionPanel_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialExpansionPanel> viewFactory_MaterialExpansionPanelHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialExpansionPanelHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialExpansionPanel, MaterialExpansionPanelNgFactory);
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
}
