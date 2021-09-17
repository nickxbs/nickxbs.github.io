// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'comparison_range_editor.dart';
export 'comparison_range_editor.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_datepicker/comparison_option.template.dart' as _ref1;
import 'package:angular_components/material_datepicker/date_range_input.template.dart' as _ref2;
import 'package:angular_components/material_datepicker/range.template.dart' as _ref3;
import 'package:angular_components/material_list/material_list.template.dart' as _ref4;
import 'package:angular_components/material_list/material_list_item.template.dart' as _ref5;
import 'package:angular_components/material_select/material_dropdown_select.template.dart' as _ref6;
import 'package:angular_components/material_select/material_select_item.template.dart' as _ref7;
import 'package:angular_components/material_toggle/material_toggle.template.dart' as _ref8;
import 'package:angular_components/model/date/date.template.dart' as _ref9;
import 'package:angular_components/src/material_datepicker/date_range_editor_model.template.dart' as _ref10;
import 'package:angular_components/utils/angular/scroll_host/angular_2.template.dart' as _ref11;
import 'package:angular_components/src/material_datepicker/comparison_range_editor.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'comparison_range_editor.dart' as import2;
import '../../material_toggle/material_toggle.template.dart' as import3;
import '../../material_toggle/material_toggle.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import10;
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import13;
import 'package:angular/src/runtime/interpolate.dart' as import14;
import 'package:angular/src/core/linker/template_ref.dart';
import '../../interfaces/has_disabled.dart' as import16;
import 'package:angular/src/core/linker/app_view_utils.dart' as import17;
import 'package:angular/src/common/directives/ng_for.dart' as import18;
import 'package:angular/src/runtime/text_binding.dart' as import19;
import '../../material_select/material_select_item.template.dart' as import20;
import '../../material_select/material_select_item.dart' as import21;
import 'package:angular/src/di/errors.dart' as import22;
import '../../mixins/material_dropdown_base.dart' as import23;
import '../../material_select/activation_handler.dart' as import24;
import '../../model/selection/selection_container.dart' as import25;
import '../../model/ui/has_renderer.dart' as import26;
import '../../material_datepicker/comparison_option.dart' as import27;
import 'package:angular/src/core/zone/ng_zone.dart' as import28;
import '../utils/angular/scroll_host/scroll_host_interface.dart' as import29;

final List<dynamic> styles$ComparisonRangeEditorComponent = [import0.styles];

class ViewComparisonRangeEditorComponent0 extends AppView<import2.ComparisonRangeEditorComponent> {
  import3.ViewMaterialToggleComponent0 _compView_1;
  import4.MaterialToggleComponent _MaterialToggleComponent_1_5;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  bool _expr_0;
  bool _expr_2;
  static import7.ComponentStyles _componentStyles;
  ViewComparisonRangeEditorComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import10.document.createElement('comparison-range-editor');
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:angular_components/lib/src/material_datepicker/comparison_range_editor.dart' : null);
  }

  @override
  ComponentRef<import2.ComparisonRangeEditorComponent> build() {
    final _rootEl = rootEl;
    final import10.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import10.document;
    final _el_0 = import13.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'comparison-toggle-section');
    addShimC(_el_0);
    _compView_1 = import3.ViewMaterialToggleComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    this.updateChildClassNonHtml(_el_1, import14.interpolateString2('', 'comparison-toggle', ' ', import4.MaterialToggleComponent.hostClass, ''));
    addShimC(_el_1);
    _MaterialToggleComponent_1_5 = import4.MaterialToggleComponent(_compView_1, null);
    _compView_1.create(_MaterialToggleComponent_1_5, [const []]);
    final _anchor_2 = import13.appendAnchor(parentRenderNode);
    _appEl_2 = ViewContainer(2, null, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_ComparisonRangeEditorComponent1);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final subscription_0 = _MaterialToggleComponent_1_5.onChecked.listen(eventHandler1(_handle_checkedChange_1_0));
    init(const [], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.HasDisabled) && (1 == nodeIndex))) {
      return _MaterialToggleComponent_1_5;
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
      if (!identical(import2.ComparisonRangeEditorComponent.comparisonHeaderMsg, null)) {
        _MaterialToggleComponent_1_5.label = import2.ComparisonRangeEditorComponent.comparisonHeaderMsg;
        changed = true;
      }
    }
    final bool currVal_0 = (!_ctx.model.comparisonSupported);
    if (import17.checkBinding(_expr_0, currVal_0)) {
      _MaterialToggleComponent_1_5.disabled = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_2 = _ctx.comparisonEnabled;
    if (import17.checkBinding(_expr_2, currVal_2)) {
      _MaterialToggleComponent_1_5.checked = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    _NgIf_2_9.ngIf = _ctx.model.comparisonEnabled;
    _appEl_2.detectChangesInNestedViews();
    _compView_1.detectChanges();
    if ((!import17.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialToggleComponent_1_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _compView_1.destroyInternalState();
  }

  void _handle_checkedChange_1_0($event) {
    final _ctx = ctx;
    _ctx.comparisonEnabled = $event;
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import7.ComponentStyles.scoped(styles$ComparisonRangeEditorComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.ComparisonRangeEditorComponent> _ComparisonRangeEditorComponentNgFactory = const ComponentFactory('comparison-range-editor', viewFactory_ComparisonRangeEditorComponentHost0);
ComponentFactory<import2.ComparisonRangeEditorComponent> get ComparisonRangeEditorComponentNgFactory {
  return _ComparisonRangeEditorComponentNgFactory;
}

class _ViewComparisonRangeEditorComponent1 extends AppView<import2.ComparisonRangeEditorComponent> {
  ViewContainer _appEl_1;
  import18.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewComparisonRangeEditorComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ComparisonRangeEditorComponent> build() {
    final doc = import10.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    final _anchor_1 = import13.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_ComparisonRangeEditorComponent2);
    _NgFor_1_9 = import18.NgFor(_appEl_1, _TemplateRef_1_8);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.model.validComparisonOptions;
    if (import17.checkBinding(_expr_0, currVal_0)) {
      _NgFor_1_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import17.AppViewUtils.throwOnChanges)) {
      _NgFor_1_9.ngDoCheck();
    }
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<void> viewFactory_ComparisonRangeEditorComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewComparisonRangeEditorComponent1(parentView, parentIndex);
}

class _ViewComparisonRangeEditorComponent2 extends AppView<import2.ComparisonRangeEditorComponent> {
  final import19.TextBinding _textBinding_1 = import19.TextBinding();
  import20.ViewMaterialSelectItemComponent0 _compView_0;
  import21.MaterialSelectItemComponent _MaterialSelectItemComponent_0_5;
  var _expr_0;
  _ViewComparisonRangeEditorComponent2(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ComparisonRangeEditorComponent> build() {
    _compView_0 = import20.ViewMaterialSelectItemComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    import13.setAttribute(_el_0, 'closeOnActivate', 'false');
    addShimC(_el_0);
    _MaterialSelectItemComponent_0_5 = (import11.isDevMode
        ? import22.debugInjectorWrap(import21.MaterialSelectItemComponent, () {
            return import21.MaterialSelectItemComponent(_el_0, parentView.parentView.injectorGetOptional(import23.DropdownHandle, parentView.viewData.parentIndex), parentView.parentView.injectorGetOptional(import24.ActivationHandler, parentView.viewData.parentIndex), _compView_0, null);
          })
        : import21.MaterialSelectItemComponent(_el_0, parentView.parentView.injectorGetOptional(import23.DropdownHandle, parentView.viewData.parentIndex), parentView.parentView.injectorGetOptional(import24.ActivationHandler, parentView.viewData.parentIndex), _compView_0, null));
    _compView_0.create(_MaterialSelectItemComponent_0_5, [
      [_textBinding_1.element]
    ]);
    final subscription_0 = _MaterialSelectItemComponent_0_5.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import25.SelectionItem) || identical(token, import16.HasDisabled)) || identical(token, import26.HasRenderer)) && (nodeIndex <= 1))) {
      return _MaterialSelectItemComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_option = import11.unsafeCast<import27.ComparisonOption>(locals['\$implicit']);
    if (firstCheck) {
      (_MaterialSelectItemComponent_0_5.closeOnActivate = 'false');
    }
    final currVal_0 = (_ctx.model.comparisonOption == local_option);
    if (import17.checkBinding(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_0_5.selected = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_1.updateText(import14.interpolateString0(_ctx.comparisonOptionMsg(local_option)));
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialSelectItemComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_0_0($event) {
    final local_option = import11.unsafeCast<import27.ComparisonOption>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.model.comparisonOption = local_option;
  }
}

AppView<void> viewFactory_ComparisonRangeEditorComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewComparisonRangeEditorComponent2(parentView, parentIndex);
}

final List<dynamic> styles$ComparisonRangeEditorComponentHost = const [];

class _ViewComparisonRangeEditorComponentHost0 extends AppView<import2.ComparisonRangeEditorComponent> {
  ViewComparisonRangeEditorComponent0 _compView_0;
  import2.ComparisonRangeEditorComponent _ComparisonRangeEditorComponent_0_5;
  _ViewComparisonRangeEditorComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.ComparisonRangeEditorComponent> build() {
    _compView_0 = ViewComparisonRangeEditorComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ComparisonRangeEditorComponent_0_5 = (import11.isDevMode
        ? import22.debugInjectorWrap(import2.ComparisonRangeEditorComponent, () {
            return import2.ComparisonRangeEditorComponent(this.injectorGet(import28.NgZone, viewData.parentIndex), this.injectorGetOptional(import29.ScrollHost, viewData.parentIndex));
          })
        : import2.ComparisonRangeEditorComponent(this.injectorGet(import28.NgZone, viewData.parentIndex), this.injectorGetOptional(import29.ScrollHost, viewData.parentIndex)));
    _compView_0.create(_ComparisonRangeEditorComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _ComparisonRangeEditorComponent_0_5);
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

AppView<import2.ComparisonRangeEditorComponent> viewFactory_ComparisonRangeEditorComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewComparisonRangeEditorComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ComparisonRangeEditorComponent, ComparisonRangeEditorComponentNgFactory);
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
}
