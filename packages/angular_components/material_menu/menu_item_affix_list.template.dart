// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'menu_item_affix_list.dart';
export 'menu_item_affix_list.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/meta.template.dart' as _ref1;
import 'package:angular_components/dynamic_component/dynamic_component.template.dart' as _ref2;
import 'package:angular_components/interfaces/has_disabled.template.dart' as _ref3;
import 'package:angular_components/material_menu/affix/base_affix.template.dart' as _ref4;
import 'package:angular_components/model/menu/menu_item_affix.template.dart' as _ref5;
import 'package:angular_components/material_menu/menu_item_affix_list.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'menu_item_affix_list.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import '../interfaces/has_disabled.dart' as import12;

final List<dynamic> styles$MenuItemAffixListComponent = [import0.styles];

class ViewMenuItemAffixListComponent0 extends AppView<import2.MenuItemAffixListComponent> {
  ViewContainer _appEl_0;
  TemplateRef _TemplateRef_0_8;
  static import5.ComponentStyles _componentStyles;
  ViewMenuItemAffixListComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import8.document.createElement('menu-item-affix-list');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_menu/menu_item_affix_list.dart' : null);
  }

  @override
  ComponentRef<import2.MenuItemAffixListComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_MenuItemAffixListComponent1);
    _ctx.viewRef = _appEl_0;
    init0();
  }

  @override
  void detectChangesInternal() {
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
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$MenuItemAffixListComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MenuItemAffixListComponent> _MenuItemAffixListComponentNgFactory = const ComponentFactory('menu-item-affix-list', viewFactory_MenuItemAffixListComponentHost0);
ComponentFactory<import2.MenuItemAffixListComponent> get MenuItemAffixListComponentNgFactory {
  return _MenuItemAffixListComponentNgFactory;
}

class _ViewMenuItemAffixListComponent1 extends AppView<import2.MenuItemAffixListComponent> {
  _ViewMenuItemAffixListComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MenuItemAffixListComponent> build() {
    init0();
  }
}

AppView<void> viewFactory_MenuItemAffixListComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemAffixListComponent1(parentView, parentIndex);
}

final List<dynamic> styles$MenuItemAffixListComponentHost = const [];

class _ViewMenuItemAffixListComponentHost0 extends AppView<import2.MenuItemAffixListComponent> {
  ViewMenuItemAffixListComponent0 _compView_0;
  import2.MenuItemAffixListComponent _MenuItemAffixListComponent_0_5;
  _ViewMenuItemAffixListComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MenuItemAffixListComponent> build() {
    _compView_0 = ViewMenuItemAffixListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MenuItemAffixListComponent_0_5 = import2.MenuItemAffixListComponent(_compView_0);
    _compView_0.create(_MenuItemAffixListComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MenuItemAffixListComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import12.HasDisabled) && (0 == nodeIndex))) {
      return _MenuItemAffixListComponent_0_5;
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
    _MenuItemAffixListComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MenuItemAffixListComponent> viewFactory_MenuItemAffixListComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMenuItemAffixListComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MenuItemAffixListComponent, MenuItemAffixListComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
