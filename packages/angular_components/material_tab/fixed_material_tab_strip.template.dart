// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'fixed_material_tab_strip.dart';
export 'fixed_material_tab_strip.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/annotations/rtl_annotation.template.dart' as _ref1;
import 'package:angular_components/focus/focus_item.template.dart' as _ref2;
import 'package:angular_components/focus/focus_list.template.dart' as _ref3;
import 'package:angular_components/material_tab/tab_button.template.dart' as _ref4;
import 'package:angular_components/material_tab/tab_change_event.template.dart' as _ref5;
import 'package:angular_components/material_tab/fixed_material_tab_strip.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'fixed_material_tab_strip.dart' as import2;
import '../focus/focus_list.template.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'dart:html' as import6;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/di/errors.dart' as import13;
import '../focus/focus_list.dart' as import14;
import 'package:angular/src/core/zone/ng_zone.dart' as import15;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import17;
import 'tab_button.template.dart' as import18;
import '../focus/focus_item.template.dart' as import19;
import 'tab_button.dart' as import20;
import '../focus/focus_item.dart' as import21;
import '../focus/focus.dart' as import22;
import 'dart:core';
import 'package:angular/src/core/di/opaque_token.dart' as import24;

final List<dynamic> styles$FixedMaterialTabStripComponent = [import0.styles];

class ViewFixedMaterialTabStripComponent0 extends AppView<import2.FixedMaterialTabStripComponent> {
  bool _query_FocusableItem_0_0_isDirty = true;
  import3.FocusListDirectiveNgCd _FocusListDirective_0_5;
  ViewContainer _appEl_2;
  import5.NgFor _NgFor_2_9;
  var _expr_0;
  var _expr_1;
  import6.DivElement _el_0;
  import6.DivElement _el_1;
  static import7.ComponentStyles _componentStyles;
  ViewFixedMaterialTabStripComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import6.document.createElement('material-tab-strip');
    this.updateChildClassNonHtml(rootEl, import2.FixedMaterialTabStripComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:angular_components/lib/material_tab/fixed_material_tab_strip.dart' : null);
  }

  @override
  ComponentRef<import2.FixedMaterialTabStripComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import6.document;
    _el_0 = import12.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'navi-bar');
    import12.setAttribute(_el_0, 'focusList', '');
    import12.setAttribute(_el_0, 'role', 'tablist');
    addShimC(_el_0);
    _FocusListDirective_0_5 = import3.FocusListDirectiveNgCd((import10.isDevMode
        ? import13.debugInjectorWrap(import14.FocusListDirective, () {
            return import14.FocusListDirective(parentView.injectorGet(import15.NgZone, viewData.parentIndex), 'tablist');
          })
        : import14.FocusListDirective(parentView.injectorGet(import15.NgZone, viewData.parentIndex), 'tablist')));
    _el_1 = import12.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'tab-indicator');
    addShimC(_el_1);
    final _anchor_2 = import12.appendAnchor(_el_0);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_FixedMaterialTabStripComponent1);
    _NgFor_2_9 = import5.NgFor(_appEl_2, _TemplateRef_2_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_1 = _ctx.tabLabels;
    if (import17.checkBinding(_expr_1, currVal_1)) {
      _NgFor_2_9.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    if ((!import17.AppViewUtils.throwOnChanges)) {
      _NgFor_2_9.ngDoCheck();
    }
    _appEl_2.detectChangesInNestedViews();
    if ((!import17.AppViewUtils.throwOnChanges)) {
      if (_query_FocusableItem_0_0_isDirty) {
        _FocusListDirective_0_5.instance.listItems = _appEl_2.mapNestedViews((_ViewFixedMaterialTabStripComponent1 nestedView) {
          return [nestedView._FocusItemDirective_0_5.instance];
        });
        _query_FocusableItem_0_0_isDirty = false;
      }
    }
    _FocusListDirective_0_5.detectHostChanges(this, _el_0);
    final currVal_0 = _ctx.tabIndicatorTransform;
    if (import17.checkBinding(_expr_0, currVal_0)) {
      _el_1.style.setProperty('transform', currVal_0);
      _expr_0 = currVal_0;
    }
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _FocusListDirective_0_5.instance.ngOnDestroy();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import7.ComponentStyles.scoped(styles$FixedMaterialTabStripComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.FixedMaterialTabStripComponent> _FixedMaterialTabStripComponentNgFactory = const ComponentFactory('material-tab-strip', viewFactory_FixedMaterialTabStripComponentHost0);
ComponentFactory<import2.FixedMaterialTabStripComponent> get FixedMaterialTabStripComponentNgFactory {
  return _FixedMaterialTabStripComponentNgFactory;
}

class _ViewFixedMaterialTabStripComponent1 extends AppView<import2.FixedMaterialTabStripComponent> {
  import18.ViewTabButtonComponent0 _compView_0;
  import19.FocusItemDirectiveNgCd _FocusItemDirective_0_5;
  import20.TabButtonComponent _TabButtonComponent_0_6;
  var _expr_0;
  var _expr_1;
  String _expr_3;
  bool _expr_4;
  import6.Element _el_0;
  _ViewFixedMaterialTabStripComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.FixedMaterialTabStripComponent> build() {
    _compView_0 = import18.ViewTabButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'tab-button');
    import12.setAttribute(_el_0, 'focusItem', '');
    import12.setAttribute(_el_0, 'role', 'tab');
    addShimC(_el_0);
    _FocusItemDirective_0_5 = import19.FocusItemDirectiveNgCd(import21.FocusItemDirective(_el_0, 'tab'));
    _TabButtonComponent_0_6 = import20.TabButtonComponent(_el_0);
    _compView_0.create0(_TabButtonComponent_0_6);
    _el_0.addEventListener('keydown', eventHandler1(_FocusItemDirective_0_5.instance.keydown));
    final subscription_0 = _TabButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import22.FocusableItem) && (0 == nodeIndex))) {
      return _FocusItemDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_idx = import10.unsafeCast<int>(locals['index']);
    final local_tabLabel = import10.unsafeCast<String>(locals['\$implicit']);
    changed = false;
    if (firstCheck) {
      _TabButtonComponent_0_6.role = 'tab';
      changed = true;
    }
    final currVal_3 = local_tabLabel;
    if (import17.checkBinding(_expr_3, currVal_3)) {
      _TabButtonComponent_0_6.label = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = (_ctx.activeTabIndex == local_idx);
    if (import17.checkBinding(_expr_4, currVal_4)) {
      _TabButtonComponent_0_6.isActive = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.tabId(local_idx);
    if (import17.checkBinding(_expr_0, currVal_0)) {
      import12.setProperty(_el_0, 'id', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.activeStr(local_idx);
    if (import17.checkBinding(_expr_1, currVal_1)) {
      import12.updateAttribute(_el_0, 'aria-selected', currVal_1);
      _expr_1 = currVal_1;
    }
    _FocusItemDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import10.unsafeCast<ViewFixedMaterialTabStripComponent0>(parentView)._query_FocusableItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }

  void _handle_trigger_0_0($event) {
    final local_idx = import10.unsafeCast<int>(locals['index']);
    final _ctx = ctx;
    _ctx.switchTo(local_idx);
  }
}

AppView<void> viewFactory_FixedMaterialTabStripComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewFixedMaterialTabStripComponent1(parentView, parentIndex);
}

final List<dynamic> styles$FixedMaterialTabStripComponentHost = const [];

class _ViewFixedMaterialTabStripComponentHost0 extends AppView<import2.FixedMaterialTabStripComponent> {
  ViewFixedMaterialTabStripComponent0 _compView_0;
  import2.FixedMaterialTabStripComponent _FixedMaterialTabStripComponent_0_5;
  _ViewFixedMaterialTabStripComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.FixedMaterialTabStripComponent> build() {
    _compView_0 = ViewFixedMaterialTabStripComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _FixedMaterialTabStripComponent_0_5 = (import10.isDevMode
        ? import13.debugInjectorWrap(import2.FixedMaterialTabStripComponent, () {
            return import2.FixedMaterialTabStripComponent(_compView_0, this.injectorGetOptional(const import24.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex));
          })
        : import2.FixedMaterialTabStripComponent(_compView_0, this.injectorGetOptional(const import24.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex)));
    _compView_0.create(_FixedMaterialTabStripComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _FixedMaterialTabStripComponent_0_5);
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

AppView<import2.FixedMaterialTabStripComponent> viewFactory_FixedMaterialTabStripComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewFixedMaterialTabStripComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(FixedMaterialTabStripComponent, FixedMaterialTabStripComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
