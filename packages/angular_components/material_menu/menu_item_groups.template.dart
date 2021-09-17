// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'menu_item_groups.dart';
export 'menu_item_groups.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/meta.template.dart' as _ref1;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref2;
import 'package:angular_components/content/deferred_content.template.dart' as _ref3;
import 'package:angular_components/focus/focus.template.dart' as _ref4;
import 'package:angular_components/focus/focus_activable_item.template.dart' as _ref5;
import 'package:angular_components/focus/focus_trap.template.dart' as _ref6;
import 'package:angular_components/highlighted_text/highlighted_text.template.dart' as _ref7;
import 'package:angular_components/laminate/enums/alignment.template.dart' as _ref8;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref9;
import 'package:angular_components/material_list/material_list.template.dart' as _ref10;
import 'package:angular_components/material_menu/material_menu.template.dart' as _ref11;
import 'package:angular_components/material_menu/menu_item_affix_list.template.dart' as _ref12;
import 'package:angular_components/material_menu/menu_root.template.dart' as _ref13;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref14;
import 'package:angular_components/material_select/material_select_item.template.dart' as _ref15;
import 'package:angular_components/material_tooltip/material_tooltip.template.dart' as _ref16;
import 'package:angular_components/mixins/material_dropdown_base.template.dart' as _ref17;
import 'package:angular_components/model/a11y/active_item.template.dart' as _ref18;
import 'package:angular_components/model/a11y/active_item_directive.template.dart' as _ref19;
import 'package:angular_components/model/action/delayed_action.template.dart' as _ref20;
import 'package:angular_components/model/menu/menu.template.dart' as _ref21;
import 'package:angular_components/model/menu/selectable_menu.template.dart' as _ref22;
import 'package:angular_components/model/selection/select.template.dart' as _ref23;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref24;
import 'package:angular_components/model/ui/highlighted_text_model.template.dart' as _ref25;
import 'package:angular_components/utils/angular/properties/properties.template.dart' as _ref26;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref27;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref28;
import 'package:angular_components/material_menu/menu_item_groups.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'menu_item_groups.dart' as import2;
import '../focus/focus_trap.template.dart' as import3;
import '../focus/focus_trap.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import6;
import 'dart:html' as import7;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import8;
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import13;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import15;
import 'package:angular/src/runtime/queries.dart' as import16;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/runtime/text_binding.dart' as import18;
import '../button_decorator/button_decorator.template.dart' as import19;
import '../button_decorator/button_decorator.dart' as import20;
import 'package:angular/src/runtime/interpolate.dart' as import21;
import '../material_icon/material_icon.template.dart' as import22;
import '../material_icon/material_icon.dart' as import23;
import '../material_select/material_select_item.template.dart' as import24;
import '../model/a11y/active_item_directive.template.dart' as import25;
import '../focus/focus.dart' as import26;
import '../focus/focus_activable_item.dart' as import27;
import '../src/material_tooltip/tooltip.dart' as import28;
import '../material_select/material_select_item.dart' as import29;
import 'package:angular/src/common/directives/ng_class.dart' as import30;
import '../src/laminate/popup/popup_source_directive.dart' as import31;
import 'package:angular/src/di/errors.dart' as import32;
import '../src/material_tooltip/tooltip_controller.dart' as import33;
import '../material_tooltip/module.dart' as import34;
import '../utils/disposer/disposer.dart' as import35;
import '../model/a11y/active_item_directive.dart' as import36;
import '../utils/browser/dom_service/dom_service.dart' as import37;
import '../laminate/components/modal/modal.dart' as import38;
import '../src/laminate/popup/popup_ref.dart' as import39;
import '../src/laminate/popup/dom_popup_source.dart' as import40;
import '../mixins/material_dropdown_base.dart' as import41;
import '../material_select/activation_handler.dart' as import42;
import '../utils/angular/reference/reference.dart' as import43;
import '../focus/focus_interface.dart' as import44;
import '../model/selection/selection_container.dart' as import45;
import '../interfaces/has_disabled.dart' as import46;
import '../model/ui/has_renderer.dart' as import47;
import 'dart:core';
import '../highlighted_text/highlighted_text.template.dart' as import49;
import '../highlighted_text/highlighted_text.dart' as import50;
import 'menu_item_affix_list.template.dart' as import51;
import 'menu_item_affix_list.dart' as import52;
import '../material_popup/material_popup.template.dart' as import53;
import '../material_popup/material_popup.dart' as import54;
import '../content/deferred_content.dart' as import55;
import '../src/laminate/popup/popup_hierarchy.dart' as import56;
import 'package:angular/src/core/zone/ng_zone.dart' as import57;
import '../src/laminate/overlay/overlay_service.dart' as import58;
import '../laminate/overlay/zindexer.dart' as import59;
import 'package:angular/src/core/di/opaque_token.dart' as import60;
import 'package:angular_components/laminate/enums/alignment.dart' as import61;
import '../src/laminate/popup/popup_size_provider.dart' as import62;
import 'package:angular/src/core/linker/element_ref.dart';
import '../content/deferred_content_aware.dart' as import64;
import '../material_list/material_list.template.dart' as import65;
import '../material_list/material_list.dart' as import66;
import 'common/menu_root.dart' as import67;
import '../utils/id_generator/id_generator.dart' as import68;

final List<dynamic> styles$MenuItemGroupsComponent = [import0.styles];

class ViewMenuItemGroupsComponent0 extends AppView<import2.MenuItemGroupsComponent> {
  bool _query_AutoFocusDirective_1_0_isDirty = true;
  bool _query_FocusableActivateItem_1_0_isDirty = true;
  import3.ViewFocusTrapComponent0 _compView_1;
  import4.FocusTrapComponent _FocusTrapComponent_1_5;
  ViewContainer _appEl_3;
  import6.NgFor _NgFor_3_9;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  import7.Element _el_1;
  static import8.ComponentStyles _componentStyles;
  ViewMenuItemGroupsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import7.document.createElement('menu-item-groups');
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:angular_components/lib/material_menu/menu_item_groups.dart' : null);
  }

  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import13.appendText(parentRenderNode, '\n');
    _compView_1 = import3.ViewFocusTrapComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    parentRenderNode.append(_el_1);
    addShimC(_el_1);
    _FocusTrapComponent_1_5 = import4.FocusTrapComponent();
    final _text_2 = import13.createText('\n  ');
    final _anchor_3 = import13.createAnchor();
    _appEl_3 = ViewContainer(3, 1, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_MenuItemGroupsComponent1);
    _NgFor_3_9 = import6.NgFor(_appEl_3, _TemplateRef_3_8);
    final _text_4 = import13.createText('\n');
    _compView_1.create(_FocusTrapComponent_1_5, [
      [_text_2, _appEl_3, _text_4]
    ]);
    final _text_5 = import13.appendText(parentRenderNode, '\n');
    _el_1.addEventListener('focus', eventHandler1(_ctx.onFocus));
    init0();
    _rootEl.addEventListener('mouseover', eventHandler1(_ctx.onMouseOver));
    _rootEl.addEventListener('mouseout', eventHandler1(_ctx.onMouseOut));
    _rootEl.addEventListener('mousemove', eventHandler1(_ctx.onMouseMove));
    _rootEl.addEventListener('keydown', eventHandler1(_ctx.handleKeydown));
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_2 = _ctx.menu.itemGroups;
    if (import15.checkBinding(_expr_2, currVal_2)) {
      _NgFor_3_9.ngForOf = currVal_2;
      _expr_2 = currVal_2;
    }
    if ((!import15.AppViewUtils.throwOnChanges)) {
      _NgFor_3_9.ngDoCheck();
    }
    _appEl_3.detectChangesInNestedViews();
    if ((!import15.AppViewUtils.throwOnChanges)) {
      if (_query_AutoFocusDirective_1_0_isDirty) {
        _FocusTrapComponent_1_5.autoFocus = import16.firstOrNull(_appEl_3.mapNestedViews((_ViewMenuItemGroupsComponent1 nestedView) {
          return nestedView._appEl_4.mapNestedViews((_ViewMenuItemGroupsComponent4 nestedView) {
            return nestedView._appEl_1.mapNestedViews((_ViewMenuItemGroupsComponent5 nestedView) {
              return nestedView._appEl_1.mapNestedViews((_ViewMenuItemGroupsComponent6 nestedView) {
                return import16.flattenNodes([
                  [nestedView._AutoFocusDirective_1_9],
                  nestedView._appEl_19.mapNestedViews((_ViewMenuItemGroupsComponent15 nestedView) {
                    return nestedView._appEl_2.mapNestedViews((_ViewMenuItemGroupsComponent16 nestedView) {
                      return [nestedView._AutoFocusDirective_2_5];
                    });
                  })
                ]);
              });
            });
          });
        }));
        _query_AutoFocusDirective_1_0_isDirty = false;
      }
      if (_query_FocusableActivateItem_1_0_isDirty) {
        _ctx.focusableItems = _appEl_3.mapNestedViews((_ViewMenuItemGroupsComponent1 nestedView) {
          return nestedView._appEl_4.mapNestedViews((_ViewMenuItemGroupsComponent4 nestedView) {
            return nestedView._appEl_1.mapNestedViews((_ViewMenuItemGroupsComponent5 nestedView) {
              return nestedView._appEl_1.mapNestedViews((_ViewMenuItemGroupsComponent6 nestedView) {
                return [nestedView._FocusActivableItemDirective_1_10];
              });
            });
          });
        });
        _query_FocusableActivateItem_1_0_isDirty = false;
      }
    }
    final currVal_0 = _ctx.isMouseDriven;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      import13.updateClassBindingNonHtml(_el_1, 'mouse-driven', currVal_0);
      _expr_0 = currVal_0;
    }
    final bool currVal_1 = (!_ctx.isMouseDriven);
    if (import15.checkBinding(_expr_1, currVal_1)) {
      import13.updateClassBindingNonHtml(_el_1, 'keyboard-driven', currVal_1);
      _expr_1 = currVal_1;
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_3.destroyNestedViews();
    _compView_1.destroyInternalState();
    _FocusTrapComponent_1_5.ngOnDestroy();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import8.ComponentStyles.scoped(styles$MenuItemGroupsComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MenuItemGroupsComponent> _MenuItemGroupsComponentNgFactory = const ComponentFactory('menu-item-groups', viewFactory_MenuItemGroupsComponentHost0);
ComponentFactory<import2.MenuItemGroupsComponent> get MenuItemGroupsComponentNgFactory {
  return _MenuItemGroupsComponentNgFactory;
}

class _ViewMenuItemGroupsComponent1 extends AppView<import2.MenuItemGroupsComponent> {
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  bool _expr_0;
  bool _expr_1;
  import7.DivElement _el_0;
  _ViewMenuItemGroupsComponent1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    final doc = import7.document;
    _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'group');
    import13.setAttribute(_el_0, 'group', '');
    import13.setAttribute(_el_0, 'role', 'menu');
    addShimC(_el_0);
    final _text_1 = import13.appendText(_el_0, '\n    ');
    final _anchor_2 = import13.appendAnchor(_el_0);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MenuItemGroupsComponent2);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _text_3 = import13.appendText(_el_0, '\n    ');
    final _anchor_4 = import13.appendAnchor(_el_0);
    _appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_MenuItemGroupsComponent4);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    final _text_5 = import13.appendText(_el_0, '\n  ');
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_group = locals['\$implicit'];
    _NgIf_2_9.ngIf = local_group.hasLabel;
    _NgIf_4_9.ngIf = ((!local_group.isCollapsible) || local_group.isExpanded);
    _appEl_2.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    final currVal_0 = local_group.hasSeparator;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      import13.updateClassBinding(_el_0, 'has-separator', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = local_group.hasLabel;
    if (import15.checkBinding(_expr_1, currVal_1)) {
      import13.updateClassBinding(_el_0, 'has-label', currVal_1);
      _expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _appEl_4.destroyNestedViews();
  }
}

AppView<void> viewFactory_MenuItemGroupsComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent1(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent2 extends AppView<import2.MenuItemGroupsComponent> {
  final import18.TextBinding _textBinding_4 = import18.TextBinding();
  import19.ButtonDirectiveNgCd _ButtonDirective_0_5;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  var _expr_0;
  bool _expr_1;
  import7.DivElement _el_0;
  _ViewMenuItemGroupsComponent2(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    final doc = import7.document;
    _el_0 = doc.createElement('div');
    import13.setAttribute(_el_0, 'buttonDecorator', '');
    this.updateChildClass(_el_0, 'group-header');
    addShimC(_el_0);
    _ButtonDirective_0_5 = import19.ButtonDirectiveNgCd(import20.ButtonDirective(_el_0, null));
    final _text_1 = import13.appendText(_el_0, '\n      ');
    final _el_2 = import13.appendDiv(doc, _el_0);
    this.updateChildClass(_el_2, 'group-label');
    addShimC(_el_2);
    final _text_3 = import13.appendText(_el_2, '\n        ');
    _el_2.append(_textBinding_4.element);
    final _text_5 = import13.appendText(_el_2, '\n      ');
    final _text_6 = import13.appendText(_el_0, '\n      ');
    final _anchor_7 = import13.appendAnchor(_el_0);
    _appEl_7 = ViewContainer(7, 0, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, viewFactory_MenuItemGroupsComponent3);
    _NgIf_7_9 = NgIf(_appEl_7, _TemplateRef_7_8);
    final _text_8 = import13.appendText(_el_0, '\n    ');
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import20.ButtonDirective) && (nodeIndex <= 8))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final local_group = parentView.locals['\$implicit'];
    _NgIf_7_9.ngIf = local_group.isCollapsible;
    _appEl_7.detectChangesInNestedViews();
    final currVal_0 = (local_group.isCollapsible ? local_group.isExpanded.toString() : null);
    if (import15.checkBinding(_expr_0, currVal_0)) {
      import13.updateAttribute(_el_0, 'aria-expanded', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    final currVal_1 = local_group.isCollapsible;
    if (import15.checkBinding(_expr_1, currVal_1)) {
      import13.updateClassBinding(_el_0, 'is-collapsible', currVal_1);
      _expr_1 = currVal_1;
    }
    _ButtonDirective_0_5.detectHostChanges(this, _el_0);
    _textBinding_4.updateText(import21.interpolate0(local_group.uiDisplayName));
  }

  @override
  void destroyInternal() {
    _appEl_7.destroyNestedViews();
  }

  void _handle_trigger_0_0($event) {
    final local_group = parentView.locals['\$implicit'];
    final _ctx = ctx;
    _ctx.toggleExpansionIfCollapsible(local_group);
  }
}

AppView<void> viewFactory_MenuItemGroupsComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent2(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent3 extends AppView<import2.MenuItemGroupsComponent> {
  import22.ViewMaterialIconComponent0 _compView_0;
  import23.MaterialIconComponent _MaterialIconComponent_0_5;
  bool _expr_0;
  var _expr_1;
  import7.Element _el_0;
  _ViewMenuItemGroupsComponent3(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    _compView_0 = import22.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'expansion-icon');
    addShimC(_el_0);
    _MaterialIconComponent_0_5 = import23.MaterialIconComponent(_el_0);
    _compView_0.create0(_MaterialIconComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    final local_group = parentView.parentView.locals['\$implicit'];
    changed = false;
    final currVal_1 = (local_group.isExpanded ? 'expand_less' : 'expand_more');
    if (import15.checkBinding(_expr_1, currVal_1)) {
      _MaterialIconComponent_0_5.icon = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = local_group.isExpanded;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      import13.updateClassBindingNonHtml(_el_0, 'expanded', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<void> viewFactory_MenuItemGroupsComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent3(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent4 extends AppView<import2.MenuItemGroupsComponent> {
  ViewContainer _appEl_1;
  import6.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewMenuItemGroupsComponent4(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    final _text_0 = import13.createText('\n      ');
    final _anchor_1 = import13.createAnchor();
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MenuItemGroupsComponent5);
    _NgFor_1_9 = import6.NgFor(_appEl_1, _TemplateRef_1_8);
    final _text_2 = import13.createText('\n    ');
    init([_text_0, _appEl_1, _text_2], null);
  }

  @override
  void detectChangesInternal() {
    final local_group = parentView.locals['\$implicit'];
    final currVal_0 = local_group;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      _NgFor_1_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import15.AppViewUtils.throwOnChanges)) {
      _NgFor_1_9.ngDoCheck();
    }
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<void> viewFactory_MenuItemGroupsComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent4(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent5 extends AppView<import2.MenuItemGroupsComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  _ViewMenuItemGroupsComponent5(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    final _text_0 = import13.createText('\n        ');
    final _anchor_1 = import13.createAnchor();
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MenuItemGroupsComponent6);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _text_2 = import13.createText('\n      ');
    init([_text_0, _appEl_1, _text_2], null);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_item = locals['\$implicit'];
    _NgIf_1_9.ngIf = _ctx.isItemVisible(local_item);
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<void> viewFactory_MenuItemGroupsComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent5(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent6 extends AppView<import2.MenuItemGroupsComponent> {
  import24.ViewMaterialSelectItemComponent0 _compView_1;
  ViewContainer _appEl_1;
  import25.ActiveItemDirectiveNgCd _ActiveItemDirective_1_8;
  import26.AutoFocusDirective _AutoFocusDirective_1_9;
  import27.FocusActivableItemDirective _FocusActivableItemDirective_1_10;
  import28.MaterialTooltipDirective _MaterialTooltipDirective_1_11;
  import29.MaterialSelectItemComponent _MaterialSelectItemComponent_1_12;
  import30.NgClass _NgClass_1_13;
  import31.PopupSourceDirective _PopupSourceDirective_1_14;
  dynamic __TooltipController_1_19;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  ViewContainer _appEl_9;
  NgIf _NgIf_9_9;
  ViewContainer _appEl_11;
  NgIf _NgIf_11_9;
  ViewContainer _appEl_14;
  NgIf _NgIf_14_9;
  ViewContainer _appEl_16;
  NgIf _NgIf_16_9;
  ViewContainer _appEl_19;
  NgIf _NgIf_19_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  bool _expr_9;
  bool _expr_10;
  String _expr_11;
  var _expr_12;
  String _expr_13;
  bool _expr_14;
  String _expr_15;
  bool _expr_16;
  var _expr_17;
  bool _expr_19;
  var _expr_20;
  var _expr_23;
  import7.Element _el_1;
  _ViewMenuItemGroupsComponent6(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  dynamic get _TooltipController_1_19 {
    if ((__TooltipController_1_19 == null)) {
      (__TooltipController_1_19 = (import11.isDevMode
          ? import32.debugInjectorWrap(import33.TooltipController, () {
              return import34.createTooltipController(parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import33.TooltipController, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import35.Disposer, parentView.parentView.parentView.parentView.viewData.parentIndex));
            })
          : import34.createTooltipController(parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import33.TooltipController, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import35.Disposer, parentView.parentView.parentView.parentView.viewData.parentIndex))));
    }
    return __TooltipController_1_19;
  }

  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    final _text_0 = import13.createText('\n          ');
    _compView_1 = import24.ViewMaterialSelectItemComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    this.updateChildClassNonHtml(_el_1, import21.interpolateString2('', 'menu-item', ' ', import29.MaterialSelectItemComponent.hostClass, ''));
    import13.setAttribute(_el_1, 'closeOnActivate', 'false');
    import13.setAttribute(_el_1, 'popupSource', '');
    import13.setAttribute(_el_1, 'useCheckMarks', 'true');
    addShimC(_el_1);
    _appEl_1 = ViewContainer(1, null, this, _el_1);
    _ActiveItemDirective_1_8 = import25.ActiveItemDirectiveNgCd((import11.isDevMode
        ? import32.debugInjectorWrap(import36.ActiveItemDirective, () {
            return import36.ActiveItemDirective(_el_1, parentView.parentView.parentView.parentView.parentView.injectorGet(import37.DomService, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import38.Modal, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import39.PopupRef, parentView.parentView.parentView.parentView.viewData.parentIndex));
          })
        : import36.ActiveItemDirective(_el_1, parentView.parentView.parentView.parentView.parentView.injectorGet(import37.DomService, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import38.Modal, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import39.PopupRef, parentView.parentView.parentView.parentView.viewData.parentIndex))));
    _AutoFocusDirective_1_9 = (import11.isDevMode
        ? import32.debugInjectorWrap(import26.AutoFocusDirective, () {
            return import26.AutoFocusDirective(_el_1, parentView.parentView.parentView.parentView.parentView.injectorGet(import37.DomService, parentView.parentView.parentView.parentView.viewData.parentIndex), null, parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import38.ModalComponent, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import39.PopupRef, parentView.parentView.parentView.parentView.viewData.parentIndex));
          })
        : import26.AutoFocusDirective(_el_1, parentView.parentView.parentView.parentView.parentView.injectorGet(import37.DomService, parentView.parentView.parentView.parentView.viewData.parentIndex), null, parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import38.ModalComponent, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import39.PopupRef, parentView.parentView.parentView.parentView.viewData.parentIndex)));
    _FocusActivableItemDirective_1_10 = import27.FocusActivableItemDirective(_el_1);
    _MaterialTooltipDirective_1_11 = (import11.isDevMode
        ? import32.debugInjectorWrap(import28.MaterialTooltipDirective, () {
            return import28.MaterialTooltipDirective(parentView.parentView.parentView.parentView.parentView.injectorGet(import40.DomPopupSourceFactory, parentView.parentView.parentView.parentView.viewData.parentIndex), _appEl_1, _el_1, _appEl_1, _compView_1, parentView.parentView.parentView.parentView.parentView.injectorGet(import7.Window, parentView.parentView.parentView.parentView.viewData.parentIndex), null, null);
          })
        : import28.MaterialTooltipDirective(parentView.parentView.parentView.parentView.parentView.injectorGet(import40.DomPopupSourceFactory, parentView.parentView.parentView.parentView.viewData.parentIndex), _appEl_1, _el_1, _appEl_1, _compView_1, parentView.parentView.parentView.parentView.parentView.injectorGet(import7.Window, parentView.parentView.parentView.parentView.viewData.parentIndex), null, null));
    _MaterialSelectItemComponent_1_12 = (import11.isDevMode
        ? import32.debugInjectorWrap(import29.MaterialSelectItemComponent, () {
            return import29.MaterialSelectItemComponent(_el_1, parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import41.DropdownHandle, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import42.ActivationHandler, parentView.parentView.parentView.parentView.viewData.parentIndex), _compView_1, null);
          })
        : import29.MaterialSelectItemComponent(_el_1, parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import41.DropdownHandle, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import42.ActivationHandler, parentView.parentView.parentView.parentView.viewData.parentIndex), _compView_1, null));
    _NgClass_1_13 = import30.NgClass(_el_1);
    _PopupSourceDirective_1_14 = (import11.isDevMode
        ? import32.debugInjectorWrap(import31.PopupSourceDirective, () {
            return import31.PopupSourceDirective(parentView.parentView.parentView.parentView.parentView.injectorGet(import40.DomPopupSourceFactory, parentView.parentView.parentView.parentView.viewData.parentIndex), _el_1, parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import43.ReferenceDirective, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import44.Focusable, parentView.parentView.parentView.parentView.viewData.parentIndex), null);
          })
        : import31.PopupSourceDirective(parentView.parentView.parentView.parentView.parentView.injectorGet(import40.DomPopupSourceFactory, parentView.parentView.parentView.parentView.viewData.parentIndex), _el_1, parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import43.ReferenceDirective, parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import44.Focusable, parentView.parentView.parentView.parentView.viewData.parentIndex), null));
    final _text_2 = import13.createText('\n            ');
    final _anchor_3 = import13.createAnchor();
    _appEl_3 = ViewContainer(3, 1, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_MenuItemGroupsComponent7);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    final _text_4 = import13.createText('\n            ');
    final doc = import7.document;
    final _el_5 = doc.createElement('span');
    this.updateChildClass(_el_5, 'menu-item-label-section');
    addShimE(_el_5);
    final _text_6 = import13.appendText(_el_5, '\n              ');
    final _anchor_7 = import13.appendAnchor(_el_5);
    _appEl_7 = ViewContainer(7, 5, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, viewFactory_MenuItemGroupsComponent8);
    _NgIf_7_9 = NgIf(_appEl_7, _TemplateRef_7_8);
    final _text_8 = import13.appendText(_el_5, '\n              ');
    final _anchor_9 = import13.appendAnchor(_el_5);
    _appEl_9 = ViewContainer(9, 5, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = TemplateRef(_appEl_9, viewFactory_MenuItemGroupsComponent10);
    _NgIf_9_9 = NgIf(_appEl_9, _TemplateRef_9_8);
    final _text_10 = import13.appendText(_el_5, '\n              ');
    final _anchor_11 = import13.appendAnchor(_el_5);
    _appEl_11 = ViewContainer(11, 5, this, _anchor_11);
    TemplateRef _TemplateRef_11_8 = TemplateRef(_appEl_11, viewFactory_MenuItemGroupsComponent12);
    _NgIf_11_9 = NgIf(_appEl_11, _TemplateRef_11_8);
    final _text_12 = import13.appendText(_el_5, '\n            ');
    final _text_13 = import13.createText('\n            ');
    final _anchor_14 = import13.createAnchor();
    _appEl_14 = ViewContainer(14, 1, this, _anchor_14);
    TemplateRef _TemplateRef_14_8 = TemplateRef(_appEl_14, viewFactory_MenuItemGroupsComponent13);
    _NgIf_14_9 = NgIf(_appEl_14, _TemplateRef_14_8);
    final _text_15 = import13.createText('\n            ');
    final _anchor_16 = import13.createAnchor();
    _appEl_16 = ViewContainer(16, 1, this, _anchor_16);
    TemplateRef _TemplateRef_16_8 = TemplateRef(_appEl_16, viewFactory_MenuItemGroupsComponent14);
    _NgIf_16_9 = NgIf(_appEl_16, _TemplateRef_16_8);
    final _text_17 = import13.createText('\n          ');
    _compView_1.create(_MaterialSelectItemComponent_1_12, [
      [_text_2, _appEl_3, _text_4, _el_5, _text_13, _appEl_14, _text_15, _appEl_16, _text_17]
    ]);
    final _text_18 = import13.createText('\n          ');
    final _anchor_19 = import13.createAnchor();
    _appEl_19 = ViewContainer(19, null, this, _anchor_19);
    TemplateRef _TemplateRef_19_8 = TemplateRef(_appEl_19, viewFactory_MenuItemGroupsComponent15);
    _NgIf_19_9 = NgIf(_appEl_19, _TemplateRef_19_8);
    final _text_20 = import13.createText('\n        ');
    _el_1.addEventListener('mouseenter', eventHandler0(_ActiveItemDirective_1_8.instance.onMouseEnter));
    _el_1.addEventListener('mouseleave', eventHandler0(_ActiveItemDirective_1_8.instance.onMouseLeave));
    final subscription_0 = _MaterialSelectItemComponent_1_12.trigger.listen(eventHandler1(_handle_trigger_1_0));
    init([_text_0, _appEl_1, _text_18, _appEl_19, _text_20], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((1 <= nodeIndex) && (nodeIndex <= 17))) {
      if (identical(token, import27.FocusableActivateItem)) {
        return _FocusActivableItemDirective_1_10;
      }
      if (((identical(token, import45.SelectionItem) || identical(token, import46.HasDisabled)) || identical(token, import47.HasRenderer))) {
        return _MaterialSelectItemComponent_1_12;
      }
      if (identical(token, import33.TooltipController)) {
        return _TooltipController_1_19;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_i = import11.unsafeCast<int>(parentView.parentView.parentView.locals['index']);
    final local_j = import11.unsafeCast<int>(parentView.locals['index']);
    final local_item = parentView.locals['\$implicit'];
    final local_group = parentView.parentView.parentView.locals['\$implicit'];
    final currVal_9 = _ctx.isItemActive(local_item);
    if (import15.checkBinding(_expr_9, currVal_9)) {
      _ActiveItemDirective_1_8.instance.itemActive = currVal_9;
      _expr_9 = currVal_9;
    }
    final currVal_10 = _ctx.hasAutoFocus(((_ctx.activeModel == null) ? null : _ctx.activeModel.id(local_item)));
    if (import15.checkBinding(_expr_10, currVal_10)) {
      _AutoFocusDirective_1_9.autoFocus = currVal_10;
      _expr_10 = currVal_10;
    }
    if (((!import15.AppViewUtils.throwOnChanges) && firstCheck)) {
      _AutoFocusDirective_1_9.ngOnInit();
    }
    final currVal_11 = ((_ctx.activeModel == null) ? null : _ctx.activeModel.id(local_item));
    if (import15.checkBinding(_expr_11, currVal_11)) {
      _FocusActivableItemDirective_1_10.key = currVal_11;
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.tooltipPositions;
    if (import15.checkBinding(_expr_12, currVal_12)) {
      _MaterialTooltipDirective_1_11.positions = currVal_12;
      _expr_12 = currVal_12;
    }
    final currVal_13 = local_item.tooltip;
    if (import15.checkBinding(_expr_13, currVal_13)) {
      _MaterialTooltipDirective_1_11.text = currVal_13;
      _expr_13 = currVal_13;
    }
    final currVal_14 = local_item.showTooltip;
    if (import15.checkBinding(_expr_14, currVal_14)) {
      _MaterialTooltipDirective_1_11.canShow = currVal_14;
      _expr_14 = currVal_14;
    }
    if (((!import15.AppViewUtils.throwOnChanges) && firstCheck)) {
      _MaterialTooltipDirective_1_11.ngOnInit();
    }
    if (firstCheck) {
      _MaterialSelectItemComponent_1_12.useCheckMarks = 'true';
      _MaterialSelectItemComponent_1_12.closeOnActivate = 'false';
    }
    final currVal_15 = import21.interpolate0(local_group.itemsRole);
    if (import15.checkBinding(_expr_15, currVal_15)) {
      _MaterialSelectItemComponent_1_12.role = currVal_15;
      _expr_15 = currVal_15;
    }
    final bool currVal_16 = (!local_item.enabled);
    if (import15.checkBinding(_expr_16, currVal_16)) {
      _MaterialSelectItemComponent_1_12.disabled = currVal_16;
      _expr_16 = currVal_16;
    }
    final currVal_17 = _ctx.getItemValue(local_item);
    if (import15.checkBinding(_expr_17, currVal_17)) {
      _MaterialSelectItemComponent_1_12.value = currVal_17;
      _expr_17 = currVal_17;
    }
    final currVal_19 = _ctx.shouldSelectItemOnClick(local_item);
    if (import15.checkBinding(_expr_19, currVal_19)) {
      _MaterialSelectItemComponent_1_12.selectOnActivate = currVal_19;
      _expr_19 = currVal_19;
    }
    final currVal_20 = _ctx.getSelectionModel(local_group);
    if (import15.checkBinding(_expr_20, currVal_20)) {
      _MaterialSelectItemComponent_1_12.selection = currVal_20;
      _expr_20 = currVal_20;
    }
    if (firstCheck) {
      (_NgClass_1_13.initialClasses = 'menu-item');
    }
    final currVal_23 = local_item.cssClasses;
    if (import15.checkBinding(_expr_23, currVal_23)) {
      _NgClass_1_13.rawClass = currVal_23;
      _expr_23 = currVal_23;
    }
    if ((!import15.AppViewUtils.throwOnChanges)) {
      _NgClass_1_13.ngDoCheck();
    }
    _NgIf_3_9.ngIf = local_item.hasIcon;
    _NgIf_7_9.ngIf = _ctx.hasHighlight;
    _NgIf_9_9.ngIf = (!_ctx.hasHighlight);
    _NgIf_11_9.ngIf = local_item.hasSecondaryLabel;
    _NgIf_14_9.ngIf = local_item.itemSuffixes.isNotEmpty;
    _NgIf_16_9.ngIf = local_item.hasSubMenu;
    _NgIf_19_9.ngIf = local_item.hasSubMenu;
    _appEl_1.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    _appEl_9.detectChangesInNestedViews();
    _appEl_11.detectChangesInNestedViews();
    _appEl_14.detectChangesInNestedViews();
    _appEl_16.detectChangesInNestedViews();
    _appEl_19.detectChangesInNestedViews();
    final currVal_0 = local_i;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      import13.updateAttribute(_el_1, 'data-group-index', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
    final currVal_1 = local_j;
    if (import15.checkBinding(_expr_1, currVal_1)) {
      import13.updateAttribute(_el_1, 'data-item-index', currVal_1?.toString());
      _expr_1 = currVal_1;
    }
    final currVal_2 = ((_ctx.activeModel == null) ? null : _ctx.activeModel.id(local_item));
    if (import15.checkBinding(_expr_2, currVal_2)) {
      import13.updateAttribute(_el_1, 'id', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.isSubMenuVisible(local_item);
    if (import15.checkBinding(_expr_3, currVal_3)) {
      import13.updateClassBindingNonHtml(_el_1, 'is-menu-parent', currVal_3);
      _expr_3 = currVal_3;
    }
    final currVal_4 = local_item.ariaLabel;
    if (import15.checkBinding(_expr_4, currVal_4)) {
      import13.updateAttribute(_el_1, 'aria-label', currVal_4?.toString());
      _expr_4 = currVal_4;
    }
    final bool currVal_5 = (!local_item.enabled);
    if (import15.checkBinding(_expr_5, currVal_5)) {
      import13.updateAttribute(_el_1, 'aria-disabled', currVal_5?.toString());
      _expr_5 = currVal_5;
    }
    final currVal_6 = local_item.hasSubMenu;
    if (import15.checkBinding(_expr_6, currVal_6)) {
      import13.updateAttribute(_el_1, 'aria-haspopup', currVal_6?.toString());
      _expr_6 = currVal_6;
    }
    final currVal_7 = (local_item.hasSubMenu ? _ctx.isSubMenuVisible(local_item) : null);
    if (import15.checkBinding(_expr_7, currVal_7)) {
      import13.updateAttribute(_el_1, 'aria-expanded', currVal_7?.toString());
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.itemAriaChecked(local_item);
    if (import15.checkBinding(_expr_8, currVal_8)) {
      import13.updateAttribute(_el_1, 'aria-checked', currVal_8);
      _expr_8 = currVal_8;
    }
    _ActiveItemDirective_1_8.detectHostChanges(_compView_1, _el_1);
    _compView_1.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    if ((!import15.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _ActiveItemDirective_1_8.instance.ngAfterViewInit();
        _MaterialTooltipDirective_1_11.ngAfterViewInit();
        _PopupSourceDirective_1_14.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import11.unsafeCast<ViewMenuItemGroupsComponent0>(parentView.parentView.parentView.parentView)._query_AutoFocusDirective_1_0_isDirty = true;
    import11.unsafeCast<ViewMenuItemGroupsComponent0>(parentView.parentView.parentView.parentView)._query_FocusableActivateItem_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_3.destroyNestedViews();
    _appEl_7.destroyNestedViews();
    _appEl_9.destroyNestedViews();
    _appEl_11.destroyNestedViews();
    _appEl_14.destroyNestedViews();
    _appEl_16.destroyNestedViews();
    _appEl_19.destroyNestedViews();
    _compView_1.destroyInternalState();
    _ActiveItemDirective_1_8.instance.ngOnDestroy();
    _AutoFocusDirective_1_9.ngOnDestroy();
    _MaterialTooltipDirective_1_11.ngOnDestroy();
    _MaterialSelectItemComponent_1_12.ngOnDestroy();
    _NgClass_1_13.ngOnDestroy();
    _PopupSourceDirective_1_14.ngOnDestroy();
  }

  void _handle_trigger_1_0($event) {
    final local_item = parentView.locals['\$implicit'];
    final local_group = parentView.parentView.parentView.locals['\$implicit'];
    final _ctx = ctx;
    _ctx.handleSelectItemTrigger(local_item, local_group, $event);
  }
}

AppView<void> viewFactory_MenuItemGroupsComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent6(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent7 extends AppView<import2.MenuItemGroupsComponent> {
  import22.ViewMaterialIconComponent0 _compView_0;
  import23.MaterialIconComponent _MaterialIconComponent_0_5;
  var _expr_0;
  _ViewMenuItemGroupsComponent7(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    _compView_0 = import22.ViewMaterialIconComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'material-list-item-primary');
    addShimC(_el_0);
    _MaterialIconComponent_0_5 = import23.MaterialIconComponent(_el_0);
    _compView_0.create0(_MaterialIconComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    final local_item = parentView.parentView.locals['\$implicit'];
    changed = false;
    final currVal_0 = local_item.icon;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      _MaterialIconComponent_0_5.icon = currVal_0;
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

AppView<void> viewFactory_MenuItemGroupsComponent7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent7(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent8 extends AppView<import2.MenuItemGroupsComponent> {
  import49.ViewHighlightedTextComponent0 _compView_2;
  import50.HighlightedTextComponent _HighlightedTextComponent_2_5;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  var _expr_0;
  _ViewMenuItemGroupsComponent8(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'menu-item-label');
    addShimE(_el_0);
    final _text_1 = import13.appendText(_el_0, '\n                ');
    _compView_2 = import49.ViewHighlightedTextComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    _el_0.append(_el_2);
    addShimC(_el_2);
    _HighlightedTextComponent_2_5 = import50.HighlightedTextComponent();
    _compView_2.create0(_HighlightedTextComponent_2_5);
    final _text_4 = import13.appendText(_el_0, '\n                ');
    final _anchor_5 = import13.appendAnchor(_el_0);
    _appEl_5 = ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_MenuItemGroupsComponent9);
    _NgIf_5_9 = NgIf(_appEl_5, _TemplateRef_5_8);
    final _text_6 = import13.appendText(_el_0, '\n              ');
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    final local_item = parentView.parentView.locals['\$implicit'];
    changed = false;
    final currVal_0 = _ctx.highlighted(local_item.uiDisplayName);
    if (import15.checkBinding(_expr_0, currVal_0)) {
      _HighlightedTextComponent_2_5.segments = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    _NgIf_5_9.ngIf = ((local_item.labelAnnotation != null) && local_item.labelAnnotation.isNotEmpty);
    _appEl_5.detectChangesInNestedViews();
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_5.destroyNestedViews();
    _compView_2.destroyInternalState();
  }
}

AppView<void> viewFactory_MenuItemGroupsComponent8(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent8(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent9 extends AppView<import2.MenuItemGroupsComponent> {
  final import18.TextBinding _textBinding_2 = import18.TextBinding();
  _ViewMenuItemGroupsComponent9(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('sup');
    this.updateChildClass(_el_0, 'label-annotation');
    addShimE(_el_0);
    final _text_1 = import13.appendText(_el_0, '\n                ');
    _el_0.append(_textBinding_2.element);
    final _text_3 = import13.appendText(_el_0, '\n              ');
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_item = parentView.parentView.parentView.locals['\$implicit'];
    _textBinding_2.updateText(import21.interpolate0(local_item.labelAnnotation));
  }
}

AppView<void> viewFactory_MenuItemGroupsComponent9(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent9(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent10 extends AppView<import2.MenuItemGroupsComponent> {
  final import18.TextBinding _textBinding_2 = import18.TextBinding();
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  _ViewMenuItemGroupsComponent10(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'menu-item-label');
    addShimE(_el_0);
    final _text_1 = import13.appendText(_el_0, '\n                ');
    _el_0.append(_textBinding_2.element);
    final _text_3 = import13.appendText(_el_0, '\n                ');
    final _anchor_4 = import13.appendAnchor(_el_0);
    _appEl_4 = ViewContainer(4, 0, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_MenuItemGroupsComponent11);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    final _text_5 = import13.appendText(_el_0, '\n              ');
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_item = parentView.parentView.locals['\$implicit'];
    _NgIf_4_9.ngIf = ((local_item.labelAnnotation != null) && local_item.labelAnnotation.isNotEmpty);
    _appEl_4.detectChangesInNestedViews();
    _textBinding_2.updateText(import21.interpolate0(local_item.uiDisplayName));
  }

  @override
  void destroyInternal() {
    _appEl_4.destroyNestedViews();
  }
}

AppView<void> viewFactory_MenuItemGroupsComponent10(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent10(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent11 extends AppView<import2.MenuItemGroupsComponent> {
  final import18.TextBinding _textBinding_2 = import18.TextBinding();
  _ViewMenuItemGroupsComponent11(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('sup');
    this.updateChildClass(_el_0, 'label-annotation');
    addShimE(_el_0);
    final _text_1 = import13.appendText(_el_0, '\n                ');
    _el_0.append(_textBinding_2.element);
    final _text_3 = import13.appendText(_el_0, '\n                ');
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_item = parentView.parentView.parentView.locals['\$implicit'];
    _textBinding_2.updateText(import21.interpolate0(local_item.labelAnnotation));
  }
}

AppView<void> viewFactory_MenuItemGroupsComponent11(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent11(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent12 extends AppView<import2.MenuItemGroupsComponent> {
  final import18.TextBinding _textBinding_2 = import18.TextBinding();
  _ViewMenuItemGroupsComponent12(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    final doc = import7.document;
    final _el_0 = doc.createElement('span');
    this.updateChildClass(_el_0, 'menu-item-secondary-label');
    addShimE(_el_0);
    final _text_1 = import13.appendText(_el_0, '\n                ');
    _el_0.append(_textBinding_2.element);
    final _text_3 = import13.appendText(_el_0, '\n              ');
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_item = parentView.parentView.locals['\$implicit'];
    _textBinding_2.updateText(import21.interpolate0(local_item.secondaryLabel));
  }
}

AppView<void> viewFactory_MenuItemGroupsComponent12(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent12(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent13 extends AppView<import2.MenuItemGroupsComponent> {
  import51.ViewMenuItemAffixListComponent0 _compView_0;
  import52.MenuItemAffixListComponent _MenuItemAffixListComponent_0_5;
  bool _expr_0;
  var _expr_1;
  _ViewMenuItemGroupsComponent13(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    _compView_0 = import51.ViewMenuItemAffixListComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'suffix-list');
    addShimC(_el_0);
    _MenuItemAffixListComponent_0_5 = import52.MenuItemAffixListComponent(_compView_0);
    _compView_0.create0(_MenuItemAffixListComponent_0_5);
    init1(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import46.HasDisabled) && (nodeIndex <= 1))) {
      return _MenuItemAffixListComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    final local_item = parentView.parentView.locals['\$implicit'];
    changed = false;
    final bool currVal_0 = (!local_item.enabled);
    if (import15.checkBinding(_expr_0, currVal_0)) {
      _MenuItemAffixListComponent_0_5.disabled = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = local_item.itemSuffixes;
    if (import15.checkBinding(_expr_1, currVal_1)) {
      _MenuItemAffixListComponent_0_5.items = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MenuItemAffixListComponent_0_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_MenuItemGroupsComponent13(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent13(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent14 extends AppView<import2.MenuItemGroupsComponent> {
  import22.ViewMaterialIconComponent0 _compView_0;
  import23.MaterialIconComponent _MaterialIconComponent_0_5;
  _ViewMenuItemGroupsComponent14(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    _compView_0 = import22.ViewMaterialIconComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'material-list-item-secondary submenu-icon');
    import13.setAttribute(_el_0, 'icon', 'arrow_drop_down');
    addShimC(_el_0);
    _MaterialIconComponent_0_5 = import23.MaterialIconComponent(_el_0);
    _compView_0.create0(_MaterialIconComponent_0_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_0_5.icon = 'arrow_drop_down';
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

AppView<void> viewFactory_MenuItemGroupsComponent14(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent14(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent15 extends AppView<import2.MenuItemGroupsComponent> {
  import53.ViewMaterialPopupComponent0 _compView_0;
  ViewContainer _appEl_0;
  import54.MaterialPopupComponent _MaterialPopupComponent_0_8;
  dynamic __PopupRef_0_10;
  dynamic __PopupHierarchy_0_12;
  ViewContainer _appEl_2;
  import55.DeferredContentDirective _DeferredContentDirective_2_9;
  String _expr_0;
  var _expr_3;
  var _expr_4;
  bool _expr_5;
  import7.Element _el_0;
  _ViewMenuItemGroupsComponent15(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  dynamic get _PopupRef_0_10 {
    if ((__PopupRef_0_10 == null)) {
      (__PopupRef_0_10 = import54.getResolvedPopupRef(_MaterialPopupComponent_0_8));
    }
    return __PopupRef_0_10;
  }

  dynamic get _PopupHierarchy_0_12 {
    if ((__PopupHierarchy_0_12 == null)) {
      (__PopupHierarchy_0_12 = import54.getHierarchy(_MaterialPopupComponent_0_8));
    }
    return __PopupHierarchy_0_12;
  }

  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    _compView_0 = import53.ViewMaterialPopupComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    import13.setAttribute(_el_0, 'enforceSpaceConstraints', '');
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _MaterialPopupComponent_0_8 = (import11.isDevMode
        ? import32.debugInjectorWrap(import54.MaterialPopupComponent, () {
            return import54.MaterialPopupComponent(parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import56.PopupHierarchy, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import54.MaterialPopupComponent, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), null, parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import57.NgZone, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import58.OverlayService, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import37.DomService, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import59.ZIndexer, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(const import60.OpaqueToken<List<import61.RelativePosition>>('defaultPopupPositions'), parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(const import60.OpaqueToken<dynamic>('overlayRepositionLoop'), parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(const import60.OpaqueToken<dynamic>('overlayViewportBoundaries'), parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import62.PopupSizeProvider, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), _compView_0, _appEl_0, ElementRef(_el_0));
          })
        : import54.MaterialPopupComponent(parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import56.PopupHierarchy, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import54.MaterialPopupComponent, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), null, parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import57.NgZone, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import58.OverlayService, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import37.DomService, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import59.ZIndexer, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(const import60.OpaqueToken<List<import61.RelativePosition>>('defaultPopupPositions'), parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(const import60.OpaqueToken<dynamic>('overlayRepositionLoop'), parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(const import60.OpaqueToken<dynamic>('overlayViewportBoundaries'), parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import62.PopupSizeProvider, parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), _compView_0, _appEl_0, ElementRef(_el_0)));
    final _text_1 = import13.createText('\n            ');
    final _anchor_2 = import13.createAnchor();
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MenuItemGroupsComponent16);
    _DeferredContentDirective_2_9 = import55.DeferredContentDirective(_appEl_2, _TemplateRef_2_8, _MaterialPopupComponent_0_8);
    final _text_3 = import13.createText('\n          ');
    _compView_0.create(_MaterialPopupComponent_0_8, [
      const [],
      [_text_1, _appEl_2, _text_3],
      const []
    ]);
    final subscription_0 = _MaterialPopupComponent_0_8.onVisible.listen(eventHandler1(_handle_visibleChange_0_0));
    init([_appEl_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 3)) {
      if (((identical(token, import54.MaterialPopupComponent) || identical(token, import64.DeferredContentAware)) || identical(token, import41.DropdownHandle))) {
        return _MaterialPopupComponent_0_8;
      }
      if (identical(token, import39.PopupRef)) {
        return _PopupRef_0_10;
      }
      if (identical(token, import56.PopupHierarchy)) {
        return _PopupHierarchy_0_12;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_subMenuSource = import11.unsafeCast<_ViewMenuItemGroupsComponent6>(parentView)._PopupSourceDirective_1_14;
    final local_item = parentView.parentView.locals['\$implicit'];
    changed = false;
    if (firstCheck) {
      _MaterialPopupComponent_0_8.autoDismiss = false;
      changed = true;
      _MaterialPopupComponent_0_8.enforceSpaceConstraints = true;
      changed = true;
    }
    final currVal_3 = _ctx.preferredSubMenuPositions;
    if (import15.checkBinding(_expr_3, currVal_3)) {
      _MaterialPopupComponent_0_8.preferredPositions = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = local_subMenuSource;
    if (import15.checkBinding(_expr_4, currVal_4)) {
      _MaterialPopupComponent_0_8.source = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.isSubMenuVisible(local_item);
    if (import15.checkBinding(_expr_5, currVal_5)) {
      _MaterialPopupComponent_0_8.visible = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (_DeferredContentDirective_2_9.preserveDimensions = true);
    }
    _appEl_0.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    final currVal_0 = _ctx.popupClass;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      _compView_0.updateChildClassNonHtml(_el_0, currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if ((!import15.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialPopupComponent_0_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _compView_0.destroyInternalState();
    _DeferredContentDirective_2_9.ngOnDestroy();
    _MaterialPopupComponent_0_8.ngOnDestroy();
  }

  void _handle_visibleChange_0_0($event) {
    final local_item = parentView.parentView.locals['\$implicit'];
    final _ctx = ctx;
    _ctx.onSubMenuVisibilityChanged(local_item, $event);
  }
}

AppView<void> viewFactory_MenuItemGroupsComponent15(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent15(parentView, parentIndex);
}

class _ViewMenuItemGroupsComponent16 extends AppView<import2.MenuItemGroupsComponent> {
  import65.ViewMaterialListComponent0 _compView_0;
  import66.MaterialListComponent _MaterialListComponent_0_5;
  ViewMenuItemGroupsComponent0 _compView_2;
  import26.AutoFocusDirective _AutoFocusDirective_2_5;
  import2.MenuItemGroupsComponent _MenuItemGroupsComponent_2_6;
  var _expr_1;
  bool _expr_3;
  String _expr_4;
  var _expr_5;
  _ViewMenuItemGroupsComponent16(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    final _ctx = ctx;
    _compView_0 = import65.ViewMaterialListComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'item-group-list');
    import13.setAttribute(_el_0, 'role', 'none');
    addShimC(_el_0);
    _MaterialListComponent_0_5 = import66.MaterialListComponent();
    final _text_1 = import13.createText('\n              ');
    _compView_2 = ViewMenuItemGroupsComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    import13.setAttribute(_el_2, 'autoFocus', '');
    addShimC(_el_2);
    _AutoFocusDirective_2_5 = (import11.isDevMode
        ? import32.debugInjectorWrap(import26.AutoFocusDirective, () {
            return import26.AutoFocusDirective(_el_2, parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import37.DomService, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), null, parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import38.ModalComponent, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), import11.unsafeCast<_ViewMenuItemGroupsComponent15>(parentView)._PopupRef_0_10);
          })
        : import26.AutoFocusDirective(_el_2, parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import37.DomService, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), null, parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import38.ModalComponent, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), import11.unsafeCast<_ViewMenuItemGroupsComponent15>(parentView)._PopupRef_0_10));
    _MenuItemGroupsComponent_2_6 = (import11.isDevMode
        ? import32.debugInjectorWrap(import2.MenuItemGroupsComponent, () {
            return import2.MenuItemGroupsComponent(parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import67.MenuRoot, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), _compView_2, import11.unsafeCast<_ViewMenuItemGroupsComponent15>(parentView)._MaterialPopupComponent_0_8, parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import68.IdGenerator, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex));
          })
        : import2.MenuItemGroupsComponent(parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(import67.MenuRoot, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex), _compView_2, import11.unsafeCast<_ViewMenuItemGroupsComponent15>(parentView)._MaterialPopupComponent_0_8, parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(import68.IdGenerator, parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)));
    _compView_2.create0(_MenuItemGroupsComponent_2_6);
    final _text_4 = import13.createText('\n            ');
    _compView_0.create(_MaterialListComponent_0_5, [
      [_text_1, _el_2, _text_4]
    ]);
    final subscription_0 = _MenuItemGroupsComponent_2_6.selected.listen(eventHandler1(_ctx.onSubMenuItemSelected));
    init([_el_0], [subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_item = parentView.parentView.parentView.locals['\$implicit'];
    changed = false;
    if (firstCheck) {
      _MaterialListComponent_0_5.role = 'none';
      changed = true;
    }
    final currVal_1 = local_item.subMenu.width;
    if (import15.checkBinding(_expr_1, currVal_1)) {
      _MaterialListComponent_0_5.width = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (_AutoFocusDirective_2_5.autoFocus = true);
    }
    if (((!import15.AppViewUtils.throwOnChanges) && firstCheck)) {
      _AutoFocusDirective_2_5.ngOnInit();
    }
    changed = false;
    final currVal_3 = _ctx.isKeyboardOpenedSubmenu;
    if (import15.checkBinding(_expr_3, currVal_3)) {
      _MenuItemGroupsComponent_2_6.activateFirstItemOnInit = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.popupClass;
    if (import15.checkBinding(_expr_4, currVal_4)) {
      _MenuItemGroupsComponent_2_6.popupClass = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final currVal_5 = local_item.subMenu;
    if (import15.checkBinding(_expr_5, currVal_5)) {
      _MenuItemGroupsComponent_2_6.menu = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    if (((!import15.AppViewUtils.throwOnChanges) && firstCheck)) {
      _MenuItemGroupsComponent_2_6.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_2.detectChanges();
    if ((!import15.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MenuItemGroupsComponent_2_6.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import11.unsafeCast<ViewMenuItemGroupsComponent0>(parentView.parentView.parentView.parentView.parentView.parentView)._query_AutoFocusDirective_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _compView_2.destroyInternalState();
    _AutoFocusDirective_2_5.ngOnDestroy();
    _MenuItemGroupsComponent_2_6.ngOnDestroy();
  }
}

AppView<void> viewFactory_MenuItemGroupsComponent16(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponent16(parentView, parentIndex);
}

final List<dynamic> styles$MenuItemGroupsComponentHost = const [];

class _ViewMenuItemGroupsComponentHost0 extends AppView<import2.MenuItemGroupsComponent> {
  ViewMenuItemGroupsComponent0 _compView_0;
  import2.MenuItemGroupsComponent _MenuItemGroupsComponent_0_5;
  _ViewMenuItemGroupsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MenuItemGroupsComponent> build() {
    _compView_0 = ViewMenuItemGroupsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MenuItemGroupsComponent_0_5 = (import11.isDevMode
        ? import32.debugInjectorWrap(import2.MenuItemGroupsComponent, () {
            return import2.MenuItemGroupsComponent(this.injectorGet(import67.MenuRoot, viewData.parentIndex), _compView_0, this.injectorGetOptional(import41.DropdownHandle, viewData.parentIndex), this.injectorGetOptional(import68.IdGenerator, viewData.parentIndex));
          })
        : import2.MenuItemGroupsComponent(this.injectorGet(import67.MenuRoot, viewData.parentIndex), _compView_0, this.injectorGetOptional(import41.DropdownHandle, viewData.parentIndex), this.injectorGetOptional(import68.IdGenerator, viewData.parentIndex)));
    _compView_0.create(_MenuItemGroupsComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MenuItemGroupsComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (((!import15.AppViewUtils.throwOnChanges) && firstCheck)) {
      _MenuItemGroupsComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
    if ((!import15.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MenuItemGroupsComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MenuItemGroupsComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MenuItemGroupsComponent> viewFactory_MenuItemGroupsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemGroupsComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MenuItemGroupsComponent, MenuItemGroupsComponentNgFactory);
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
  _ref16.initReflector();
  _ref17.initReflector();
  _ref18.initReflector();
  _ref19.initReflector();
  _ref20.initReflector();
  _ref21.initReflector();
  _ref22.initReflector();
  _ref23.initReflector();
  _ref24.initReflector();
  _ref25.initReflector();
  _ref26.initReflector();
  _ref27.initReflector();
  _ref28.initReflector();
}
