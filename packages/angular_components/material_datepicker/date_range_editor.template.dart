// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'date_range_editor.dart';
export 'date_range_editor.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/focus/focus.template.dart' as _ref2;
import 'package:angular_components/focus/keyboard_only_focus_indicator.template.dart' as _ref3;
import 'package:angular_components/laminate/popup/popup.template.dart' as _ref4;
import 'package:angular_components/material_button/material_button.template.dart' as _ref5;
import 'package:angular_components/material_datepicker/calendar.template.dart' as _ref6;
import 'package:angular_components/material_datepicker/date_range_editor_host.template.dart' as _ref7;
import 'package:angular_components/material_datepicker/date_range_input.template.dart' as _ref8;
import 'package:angular_components/material_datepicker/material_calendar_picker.template.dart' as _ref9;
import 'package:angular_components/material_datepicker/material_month_picker.template.dart' as _ref10;
import 'package:angular_components/material_datepicker/module.template.dart' as _ref11;
import 'package:angular_components/material_datepicker/next_prev_buttons.template.dart' as _ref12;
import 'package:angular_components/material_datepicker/preset.template.dart' as _ref13;
import 'package:angular_components/material_datepicker/range.template.dart' as _ref14;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref15;
import 'package:angular_components/material_input/material_input.template.dart' as _ref16;
import 'package:angular_components/material_popup/material_popup.template.dart' as _ref17;
import 'package:angular_components/material_ripple/material_ripple.template.dart' as _ref18;
import 'package:angular_components/material_select/material_select.template.dart' as _ref19;
import 'package:angular_components/material_select/material_select_item.template.dart' as _ref20;
import 'package:angular_components/material_tooltip/material_tooltip.template.dart' as _ref21;
import 'package:angular_components/model/date/date.template.dart' as _ref22;
import 'package:angular_components/model/date/date_formatter.template.dart' as _ref23;
import 'package:angular_components/model/observable/observable.template.dart' as _ref24;
import 'package:angular_components/src/material_datepicker/comparison_range_editor.template.dart' as _ref25;
import 'package:angular_components/src/material_datepicker/date_range_editor_model.template.dart' as _ref26;
import 'package:angular_components/src/material_datepicker/date_range_editor_model.template.dart' as _ref27;
import 'package:angular_components/utils/angular/managed_zone/interface.template.dart' as _ref28;
import 'package:angular_components/utils/angular/scroll_host/angular_2.template.dart' as _ref29;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref30;
import 'package:angular_components/utils/showhide/showhide.template.dart' as _ref31;
import 'package:angular_components/material_datepicker/date_range_editor.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'date_range_editor.dart' as import2;
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
import '../material_select/material_select.template.dart' as import15;
import '../material_select/material_select.dart' as import16;
import 'package:quiver/src/time/clock.dart' as import17;
import '../src/utils/angular/scroll_host/gestures.dart' as import18;
import '../utils/angular/scroll_host/angular_2.dart' as import19;
import 'package:angular/src/common/directives/ng_for.dart' as import20;
import 'package:angular/src/di/errors.dart' as import21;
import '../utils/browser/dom_service/dom_service.dart' as import22;
import 'package:angular/src/core/zone/ng_zone.dart' as import23;
import '../interfaces/has_disabled.dart' as import24;
import '../model/ui/has_renderer.dart' as import25;
import '../model/selection/selection_container.dart' as import26;
import '../src/utils/angular/scroll_host/scroll_host_interface.dart' as import27;
import '../material_select/material_select_item.template.dart' as import28;
import '../material_select/material_select_item.dart' as import29;
import '../mixins/material_dropdown_base.dart' as import30;
import '../material_select/activation_handler.dart' as import31;
import 'package:angular/src/runtime/interpolate.dart' as import32;
import 'package:angular/src/runtime/text_binding.dart' as import33;
import '../material_icon/material_icon.template.dart' as import34;
import '../button_decorator/button_decorator.template.dart' as import35;
import '../material_icon/material_icon.dart' as import36;
import '../button_decorator/button_decorator.dart' as import37;
import '../src/material_tooltip/tooltip.dart' as import38;
import '../src/material_tooltip/tooltip_controller.dart' as import39;
import '../material_tooltip/module.dart' as import40;
import '../utils/disposer/disposer.dart' as import41;
import '../src/laminate/popup/dom_popup_source.dart' as import42;
import 'preset.dart' as import43;
import '../material_button/material_button.template.dart' as import44;
import '../material_button/material_button.dart' as import45;
import '../src/laminate/popup/popup_source_directive.dart' as import46;
import '../material_popup/material_popup.template.dart' as import47;
import '../material_popup/material_popup.dart' as import48;
import '../theme/dark_theme.dart' as import49;
import 'package:angular/src/core/di/opaque_token.dart' as import50;
import '../utils/angular/reference/reference.dart' as import51;
import '../focus/focus_interface.dart' as import52;
import '../src/laminate/popup/popup_hierarchy.dart' as import53;
import '../src/laminate/overlay/overlay_service.dart' as import54;
import '../laminate/overlay/zindexer.dart' as import55;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import57;
import '../src/laminate/popup/popup_size_provider.dart' as import58;
import 'package:angular/src/core/linker/element_ref.dart';
import '../content/deferred_content_aware.dart' as import60;
import '../src/laminate/popup/popup_ref.dart' as import61;
import '../material_input/material_input.template.dart' as import62;
import '../material_input/deferred_validator.dart' as import63;
import 'package:angular_forms/src/directives/ng_model.dart' as import64;
import '../material_input/material_input.dart' as import65;
import '../material_input/material_input_default_value_accessor.dart' as import66;
import 'package:angular_forms/src/directives/ng_control.dart' as import67;
import '../material_input/base_material_input.dart' as import68;
import '../src/material_datepicker/comparison_range_editor.template.dart' as import69;
import '../src/material_datepicker/comparison_range_editor.dart' as import70;
import 'date_range_input.template.dart' as import71;
import 'date_range_input.dart' as import72;
import '../focus/keyboard_only_focus_indicator.dart' as import73;
import 'next_prev_buttons.template.dart' as import74;
import 'next_prev_buttons.dart' as import75;
import 'material_calendar_picker.template.dart' as import76;
import 'material_calendar_picker.dart' as import77;
import '../utils/showhide/showhide.dart' as import78;
import 'material_month_picker.template.dart' as import79;
import 'material_month_picker.dart' as import80;
import '../src/utils/angular/managed_zone/managed_zone.dart' as import81;
import 'date_range_editor_host.dart' as import82;

final List<dynamic> styles$DateRangeEditorComponent = [import0.styles];

class ViewDateRangeEditorComponent0 extends AppView<import2.DateRangeEditorComponent> {
  bool _query_MaterialCalendarPickerComponent_1_0_isDirty = true;
  bool _query_MaterialMonthPickerComponent_1_1_isDirty = true;
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  bool _expr_2;
  static import5.ComponentStyles _componentStyles;
  ViewDateRangeEditorComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('date-range-editor');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_components/lib/material_datepicker/date_range_editor.dart' : null);
  }

  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_DateRangeEditorComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final _anchor_1 = import11.appendAnchor(parentRenderNode);
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_DateRangeEditorComponent11);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = (_ctx.presets.isNotEmpty && _ctx.shouldShowPredefinedList);
    _NgIf_1_9.ngIf = (_ctx.supportsCustomRange && _ctx.shouldShowCustomDateRangeColumn);
    _appEl_0.detectChangesInNestedViews();
    _appEl_1.detectChangesInNestedViews();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (_query_MaterialCalendarPickerComponent_1_0_isDirty) {
        _ctx.calendarPicker = import14.firstOrNull(_appEl_1.mapNestedViews((_ViewDateRangeEditorComponent11 nestedView) {
          return nestedView._appEl_10.mapNestedViews((_ViewDateRangeEditorComponent18 nestedView) {
            return [nestedView._MaterialCalendarPickerComponent_0_5];
          });
        }));
        _query_MaterialCalendarPickerComponent_1_0_isDirty = false;
      }
      if (_query_MaterialMonthPickerComponent_1_1_isDirty) {
        _ctx.monthSelector = import14.firstOrNull(_appEl_1.mapNestedViews((_ViewDateRangeEditorComponent11 nestedView) {
          return nestedView._appEl_11.mapNestedViews((_ViewDateRangeEditorComponent19 nestedView) {
            return [nestedView._MaterialMonthPickerComponent_0_5];
          });
        }));
        _query_MaterialMonthPickerComponent_1_1_isDirty = false;
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_1.destroyNestedViews();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    final currVal_2 = _ctx.compact;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      import11.updateClassBindingNonHtml(rootEl, 'compact', currVal_2);
      _expr_2 = currVal_2;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$DateRangeEditorComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.DateRangeEditorComponent> _DateRangeEditorComponentNgFactory = const ComponentFactory('date-range-editor', viewFactory_DateRangeEditorComponentHost0);
ComponentFactory<import2.DateRangeEditorComponent> get DateRangeEditorComponentNgFactory {
  return _DateRangeEditorComponentNgFactory;
}

class _ViewDateRangeEditorComponent1 extends AppView<import2.DateRangeEditorComponent> {
  bool _query_SelectionItem_0_0_isDirty = true;
  import15.ViewMaterialSelectComponent0 _compView_0;
  import16.MaterialSelectComponent _MaterialSelectComponent_0_5;
  import17.Clock _Clock_0_6;
  import18.GestureListenerFactory _GestureListenerFactory_0_7;
  import19.ElementScrollHost _ElementScrollHost_0_8;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_4;
  import20.NgFor _NgFor_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  bool _expr_0;
  var _expr_4;
  import8.Element _el_0;
  _ViewDateRangeEditorComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    _compView_0 = import15.ViewMaterialSelectComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    import11.setAttribute(_el_0, 'acxScrollHost', '');
    this.updateChildClassNonHtml(_el_0, 'preset-list');
    addShimC(_el_0);
    _MaterialSelectComponent_0_5 = import16.MaterialSelectComponent();
    _Clock_0_6 = const import17.Clock();
    _GestureListenerFactory_0_7 = import18.GestureListenerFactory(_Clock_0_6);
    _ElementScrollHost_0_8 = (import9.isDevMode
        ? import21.debugInjectorWrap(import19.ElementScrollHost, () {
            return import19.ElementScrollHost(parentView.injectorGet(import22.DomService, viewData.parentIndex), parentView.injectorGet(import23.NgZone, viewData.parentIndex), _GestureListenerFactory_0_7, _el_0);
          })
        : import19.ElementScrollHost(parentView.injectorGet(import22.DomService, viewData.parentIndex), parentView.injectorGet(import23.NgZone, viewData.parentIndex), _GestureListenerFactory_0_7, _el_0));
    final _anchor_1 = import11.createAnchor();
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_DateRangeEditorComponent2);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import11.createAnchor();
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_DateRangeEditorComponent3);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final doc = import8.document;
    final _el_3 = doc.createElement('div');
    this.updateChildClass(_el_3, 'group');
    import11.setAttribute(_el_3, 'role', 'listbox');
    addShimC(_el_3);
    final _anchor_4 = import11.appendAnchor(_el_3);
    _appEl_4 = ViewContainer(4, 3, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_DateRangeEditorComponent6);
    _NgFor_4_9 = import20.NgFor(_appEl_4, _TemplateRef_4_8);
    final _anchor_5 = import11.createAnchor();
    _appEl_5 = ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_DateRangeEditorComponent9);
    _NgIf_5_9 = NgIf(_appEl_5, _TemplateRef_5_8);
    final _anchor_6 = import11.createAnchor();
    _appEl_6 = ViewContainer(6, 0, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_DateRangeEditorComponent10);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    _compView_0.create(_MaterialSelectComponent_0_5, [
      [_appEl_1, _appEl_2, _el_3, _appEl_5, _appEl_6]
    ]);
    init1(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 6)) {
      if (((identical(token, import24.HasDisabled) || identical(token, import25.HasRenderer)) || identical(token, import26.SelectionContainer))) {
        return _MaterialSelectComponent_0_5;
      }
      if (identical(token, import17.Clock)) {
        return _Clock_0_6;
      }
      if (identical(token, import18.GestureListenerFactory)) {
        return _GestureListenerFactory_0_7;
      }
      if ((identical(token, import19.ElementScrollHost) || identical(token, import27.ScrollHost))) {
        return _ElementScrollHost_0_8;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      (_MaterialSelectComponent_0_5.width = 0);
    }
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _MaterialSelectComponent_0_5.ngOnInit();
    }
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _ElementScrollHost_0_8.ngOnInit();
    }
    _NgIf_1_9.ngIf = _ctx.supportsClearRange;
    _NgIf_2_9.ngIf = _ctx.supportsCustomRange;
    final currVal_4 = _ctx.presets;
    if (import13.checkBinding(_expr_4, currVal_4)) {
      _NgFor_4_9.ngForOf = currVal_4;
      _expr_4 = currVal_4;
    }
    if ((!import13.AppViewUtils.throwOnChanges)) {
      _NgFor_4_9.ngDoCheck();
    }
    _NgIf_5_9.ngIf = _ctx.supportsDaysInputs;
    _NgIf_6_9.ngIf = _ctx.supportsComparison;
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (_query_SelectionItem_0_0_isDirty) {
        _MaterialSelectComponent_0_5.selectItems = import14.flattenNodes([
          _appEl_1.mapNestedViews((_ViewDateRangeEditorComponent2 nestedView) {
            return [nestedView._MaterialSelectItemComponent_1_5];
          }),
          _appEl_2.mapNestedViews((_ViewDateRangeEditorComponent3 nestedView) {
            return [nestedView._MaterialSelectItemComponent_1_5];
          }),
          _appEl_4.mapNestedViews((_ViewDateRangeEditorComponent6 nestedView) {
            return import14.flattenNodes([
              [nestedView._MaterialSelectItemComponent_0_8],
              nestedView._appEl_2.mapNestedViews((_ViewDateRangeEditorComponent7 nestedView) {
                return nestedView._appEl_3.mapNestedViews((_ViewDateRangeEditorComponent8 nestedView) {
                  return [nestedView._MaterialSelectItemComponent_0_8];
                });
              })
            ]);
          }),
          _appEl_5.mapNestedViews((_ViewDateRangeEditorComponent9 nestedView) {
            return [nestedView._MaterialSelectItemComponent_1_5, nestedView._MaterialSelectItemComponent_5_5];
          })
        ]);
        _query_SelectionItem_0_0_isDirty = false;
      }
    }
    final currVal_0 = _ctx.isBasic;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.updateClassBindingNonHtml(_el_0, 'basic-preset-list', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _appEl_4.destroyNestedViews();
    _appEl_5.destroyNestedViews();
    _appEl_6.destroyNestedViews();
    _compView_0.destroyInternalState();
    _ElementScrollHost_0_8.ngOnDestroy();
  }
}

AppView<void> viewFactory_DateRangeEditorComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent1(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent2 extends AppView<import2.DateRangeEditorComponent> {
  import28.ViewMaterialSelectItemComponent0 _compView_1;
  import29.MaterialSelectItemComponent _MaterialSelectItemComponent_1_5;
  _ViewDateRangeEditorComponent2(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    final _ctx = ctx;
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'group');
    addShimC(_el_0);
    _compView_1 = import28.ViewMaterialSelectItemComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _MaterialSelectItemComponent_1_5 = (import9.isDevMode
        ? import21.debugInjectorWrap(import29.MaterialSelectItemComponent, () {
            return import29.MaterialSelectItemComponent(_el_1, parentView.parentView.injectorGetOptional(import30.DropdownHandle, parentView.viewData.parentIndex), parentView.parentView.injectorGetOptional(import31.ActivationHandler, parentView.viewData.parentIndex), _compView_1, null);
          })
        : import29.MaterialSelectItemComponent(_el_1, parentView.parentView.injectorGetOptional(import30.DropdownHandle, parentView.viewData.parentIndex), parentView.parentView.injectorGetOptional(import31.ActivationHandler, parentView.viewData.parentIndex), _compView_1, null));
    final _text_2 = import11.createText(import32.interpolateString0(import2.DateRangeEditorComponent.clearRangeMsg));
    _compView_1.create(_MaterialSelectItemComponent_1_5, [
      [_text_2]
    ]);
    final subscription_0 = _MaterialSelectItemComponent_1_5.trigger.listen(eventHandler1(_ctx.onClearRangeClicked));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import26.SelectionItem) || identical(token, import24.HasDisabled)) || identical(token, import25.HasRenderer)) && ((1 <= nodeIndex) && (nodeIndex <= 2)))) {
      return _MaterialSelectItemComponent_1_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    _compView_1.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<_ViewDateRangeEditorComponent1>(parentView)._query_SelectionItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_1.destroyInternalState();
    _MaterialSelectItemComponent_1_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_DateRangeEditorComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent2(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent3 extends AppView<import2.DateRangeEditorComponent> {
  import28.ViewMaterialSelectItemComponent0 _compView_1;
  import29.MaterialSelectItemComponent _MaterialSelectItemComponent_1_5;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  var _expr_0;
  bool _expr_2;
  bool _expr_3;
  import8.DivElement _el_2;
  _ViewDateRangeEditorComponent3(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    final _ctx = ctx;
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'group');
    addShimC(_el_0);
    _compView_1 = import28.ViewMaterialSelectItemComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    import11.setAttribute(_el_1, 'closeOnActivate', 'false');
    addShimC(_el_1);
    _MaterialSelectItemComponent_1_5 = (import9.isDevMode
        ? import21.debugInjectorWrap(import29.MaterialSelectItemComponent, () {
            return import29.MaterialSelectItemComponent(_el_1, parentView.parentView.injectorGetOptional(import30.DropdownHandle, parentView.viewData.parentIndex), parentView.parentView.injectorGetOptional(import31.ActivationHandler, parentView.viewData.parentIndex), _compView_1, null);
          })
        : import29.MaterialSelectItemComponent(_el_1, parentView.parentView.injectorGetOptional(import30.DropdownHandle, parentView.viewData.parentIndex), parentView.parentView.injectorGetOptional(import31.ActivationHandler, parentView.viewData.parentIndex), _compView_1, null));
    _el_2 = doc.createElement('div');
    addShimC(_el_2);
    final _text_3 = import11.appendText(_el_2, import32.interpolateString0(import2.DateRangeEditorComponent.customRangeMsg));
    final _anchor_4 = import11.appendAnchor(_el_2);
    _appEl_4 = ViewContainer(4, 2, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, viewFactory_DateRangeEditorComponent4);
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    final _anchor_5 = import11.createAnchor();
    _appEl_5 = ViewContainer(5, 1, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_DateRangeEditorComponent5);
    _NgIf_5_9 = NgIf(_appEl_5, _TemplateRef_5_8);
    _compView_1.create(_MaterialSelectItemComponent_1_5, [
      [_el_2, _appEl_5]
    ]);
    final subscription_0 = _MaterialSelectItemComponent_1_5.trigger.listen(eventHandler0(_ctx.onCustomClicked));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import26.SelectionItem) || identical(token, import24.HasDisabled)) || identical(token, import25.HasRenderer)) && ((1 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _MaterialSelectItemComponent_1_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      (_MaterialSelectItemComponent_1_5.closeOnActivate = 'false');
    }
    final currVal_0 = _ctx.isCustomRangeSelected;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_1_5.selected = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgIf_4_9.ngIf = (_ctx.isBasic && _ctx.isCustomRangeSelected);
    _NgIf_5_9.ngIf = _ctx.isBasic;
    _appEl_4.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _compView_1.detectHostChanges(firstCheck);
    final currVal_2 = (_ctx.isBasic && (!_ctx.isCustomRangeSelected));
    if (import13.checkBinding(_expr_2, currVal_2)) {
      import11.updateClassBinding(_el_2, 'custom-tab-left', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = (_ctx.isBasic && _ctx.isCustomRangeSelected);
    if (import13.checkBinding(_expr_3, currVal_3)) {
      import11.updateClassBinding(_el_2, 'custom_tab-left-selected', currVal_3);
      _expr_3 = currVal_3;
    }
    _compView_1.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<_ViewDateRangeEditorComponent1>(parentView)._query_SelectionItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _appEl_4.destroyNestedViews();
    _appEl_5.destroyNestedViews();
    _compView_1.destroyInternalState();
    _MaterialSelectItemComponent_1_5.ngOnDestroy();
  }
}

AppView<void> viewFactory_DateRangeEditorComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent3(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent4 extends AppView<import2.DateRangeEditorComponent> {
  final import33.TextBinding _textBinding_1 = import33.TextBinding();
  _ViewDateRangeEditorComponent4(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'custom_range_desc');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_1.updateText(import32.interpolateString0(_ctx.customRangeDescription));
  }
}

AppView<void> viewFactory_DateRangeEditorComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent4(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent5 extends AppView<import2.DateRangeEditorComponent> {
  import34.ViewMaterialIconComponent0 _compView_0;
  import35.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import36.MaterialIconComponent _MaterialIconComponent_0_6;
  import8.Element _el_0;
  _ViewDateRangeEditorComponent5(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    _compView_0 = import34.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    import11.setAttribute(_el_0, 'buttonDecorator', '');
    this.updateChildClassNonHtml(_el_0, 'expend-more');
    import11.setAttribute(_el_0, 'icon', 'expand_more');
    addShimC(_el_0);
    _ButtonDirective_0_5 = import35.ButtonDirectiveNgCd(import37.ButtonDirective(_el_0, null));
    _MaterialIconComponent_0_6 = import36.MaterialIconComponent(_el_0);
    _compView_0.create0(_MaterialIconComponent_0_6);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    init1(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import37.ButtonDirective) && (0 == nodeIndex))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_0_6.icon = 'expand_more';
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _ButtonDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<void> viewFactory_DateRangeEditorComponent5(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent5(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent6 extends AppView<import2.DateRangeEditorComponent> {
  final import33.TextBinding _textBinding_1 = import33.TextBinding();
  import28.ViewMaterialSelectItemComponent0 _compView_0;
  ViewContainer _appEl_0;
  import29.MaterialSelectItemComponent _MaterialSelectItemComponent_0_8;
  import38.MaterialTooltipDirective _MaterialTooltipDirective_0_9;
  dynamic __TooltipController_0_11;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  bool _expr_0;
  var _expr_1;
  bool _expr_4;
  _ViewDateRangeEditorComponent6(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  dynamic get _TooltipController_0_11 {
    if ((__TooltipController_0_11 == null)) {
      (__TooltipController_0_11 = (import9.isDevMode
          ? import21.debugInjectorWrap(import39.TooltipController, () {
              return import40.createTooltipController(parentView.parentView.injectorGetOptional(import39.TooltipController, parentView.viewData.parentIndex), parentView.parentView.injectorGetOptional(import41.Disposer, parentView.viewData.parentIndex));
            })
          : import40.createTooltipController(parentView.parentView.injectorGetOptional(import39.TooltipController, parentView.viewData.parentIndex), parentView.parentView.injectorGetOptional(import41.Disposer, parentView.viewData.parentIndex))));
    }
    return __TooltipController_0_11;
  }

  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    _compView_0 = import28.ViewMaterialSelectItemComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    import11.setAttribute(_el_0, 'closeOnActivate', 'false');
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _MaterialSelectItemComponent_0_8 = (import9.isDevMode
        ? import21.debugInjectorWrap(import29.MaterialSelectItemComponent, () {
            return import29.MaterialSelectItemComponent(_el_0, parentView.parentView.injectorGetOptional(import30.DropdownHandle, parentView.viewData.parentIndex), parentView.parentView.injectorGetOptional(import31.ActivationHandler, parentView.viewData.parentIndex), _compView_0, null);
          })
        : import29.MaterialSelectItemComponent(_el_0, parentView.parentView.injectorGetOptional(import30.DropdownHandle, parentView.viewData.parentIndex), parentView.parentView.injectorGetOptional(import31.ActivationHandler, parentView.viewData.parentIndex), _compView_0, null));
    _MaterialTooltipDirective_0_9 = (import9.isDevMode
        ? import21.debugInjectorWrap(import38.MaterialTooltipDirective, () {
            return import38.MaterialTooltipDirective(parentView.parentView.injectorGet(import42.DomPopupSourceFactory, parentView.viewData.parentIndex), _appEl_0, _el_0, _appEl_0, _compView_0, parentView.parentView.injectorGet(import8.Window, parentView.viewData.parentIndex), null, null);
          })
        : import38.MaterialTooltipDirective(parentView.parentView.injectorGet(import42.DomPopupSourceFactory, parentView.viewData.parentIndex), _appEl_0, _el_0, _appEl_0, _compView_0, parentView.parentView.injectorGet(import8.Window, parentView.viewData.parentIndex), null, null));
    final _anchor_2 = import11.createAnchor();
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_DateRangeEditorComponent7);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    _compView_0.create(_MaterialSelectItemComponent_0_8, [
      [_textBinding_1.element, _appEl_2]
    ]);
    final subscription_0 = _MaterialSelectItemComponent_0_8.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_appEl_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 2)) {
      if (((identical(token, import26.SelectionItem) || identical(token, import24.HasDisabled)) || identical(token, import25.HasRenderer))) {
        return _MaterialSelectItemComponent_0_8;
      }
      if (identical(token, import39.TooltipController)) {
        return _TooltipController_0_11;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_preset = import9.unsafeCast<import43.DatepickerPreset>(locals['\$implicit']);
    if (firstCheck) {
      (_MaterialSelectItemComponent_0_8.closeOnActivate = 'false');
    }
    final bool currVal_0 = (!_ctx.isValid(local_preset));
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_0_8.disabled = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isSelected(local_preset.range);
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _MaterialSelectItemComponent_0_8.selected = currVal_1;
      _expr_1 = currVal_1;
    }
    if (firstCheck) {
      if (!identical(import2.DateRangeEditorComponent.rangeDisabledTooltip, null)) {
        (_MaterialTooltipDirective_0_9.text = import2.DateRangeEditorComponent.rangeDisabledTooltip);
      }
    }
    final bool currVal_4 = (!_ctx.isValid(local_preset));
    if (import13.checkBinding(_expr_4, currVal_4)) {
      _MaterialTooltipDirective_0_9.canShow = currVal_4;
      _expr_4 = currVal_4;
    }
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _MaterialTooltipDirective_0_9.ngOnInit();
    }
    _NgIf_2_9.ngIf = ((local_preset.alternatives != null) && local_preset.alternatives.isNotEmpty);
    _appEl_0.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_1.updateText(import32.interpolateString0(local_preset.title));
    _compView_0.detectChanges();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialTooltipDirective_0_9.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<_ViewDateRangeEditorComponent1>(parentView)._query_SelectionItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _compView_0.destroyInternalState();
    _MaterialSelectItemComponent_0_8.ngOnDestroy();
    _MaterialTooltipDirective_0_9.ngOnDestroy();
  }

  void _handle_trigger_0_0($event) {
    final local_preset = import9.unsafeCast<import43.DatepickerPreset>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.onRangeClicked($event, local_preset.range);
  }
}

AppView<void> viewFactory_DateRangeEditorComponent6(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent6(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent7 extends AppView<import2.DateRangeEditorComponent> {
  import44.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import45.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import46.PopupSourceDirective _PopupSourceDirective_0_7;
  import34.ViewMaterialIconComponent0 _compView_1;
  import36.MaterialIconComponent _MaterialIconComponent_1_5;
  import47.ViewMaterialPopupComponent0 _compView_2;
  ViewContainer _appEl_2;
  import48.MaterialPopupComponent _MaterialPopupComponent_2_8;
  dynamic __PopupHierarchy_2_11;
  dynamic __PopupRef_2_12;
  ViewContainer _appEl_3;
  import20.NgFor _NgFor_3_9;
  var _expr_5;
  var _expr_6;
  _ViewDateRangeEditorComponent7(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  dynamic get _PopupHierarchy_2_11 {
    if ((__PopupHierarchy_2_11 == null)) {
      (__PopupHierarchy_2_11 = import48.getHierarchy(_MaterialPopupComponent_2_8));
    }
    return __PopupHierarchy_2_11;
  }

  dynamic get _PopupRef_2_12 {
    if ((__PopupRef_2_12 == null)) {
      (__PopupRef_2_12 = import48.getResolvedPopupRef(_MaterialPopupComponent_2_8));
    }
    return __PopupRef_2_12;
  }

  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    _compView_0 = import44.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    import11.setAttribute(_el_0, 'alignPositionX', 'after');
    import11.setAttribute(_el_0, 'alignPositionY', 'start');
    this.updateChildClassNonHtml(_el_0, 'preset-dropdown-button');
    import11.setAttribute(_el_0, 'icon', '');
    import11.setAttribute(_el_0, 'popupSource', '');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import9.isDevMode
        ? import21.debugInjectorWrap(import49.AcxDarkTheme, () {
            return import49.AcxDarkTheme(parentView.parentView.parentView.injectorGetOptional(const import50.OpaqueToken<dynamic>('acxDarkTheme'), parentView.parentView.viewData.parentIndex));
          })
        : import49.AcxDarkTheme(parentView.parentView.parentView.injectorGetOptional(const import50.OpaqueToken<dynamic>('acxDarkTheme'), parentView.parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import45.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _PopupSourceDirective_0_7 = (import9.isDevMode
        ? import21.debugInjectorWrap(import46.PopupSourceDirective, () {
            return import46.PopupSourceDirective(parentView.parentView.parentView.injectorGet(import42.DomPopupSourceFactory, parentView.parentView.viewData.parentIndex), _el_0, parentView.parentView.parentView.injectorGetOptional(import51.ReferenceDirective, parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGetOptional(import52.Focusable, parentView.parentView.viewData.parentIndex), null);
          })
        : import46.PopupSourceDirective(parentView.parentView.parentView.injectorGet(import42.DomPopupSourceFactory, parentView.parentView.viewData.parentIndex), _el_0, parentView.parentView.parentView.injectorGetOptional(import51.ReferenceDirective, parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGetOptional(import52.Focusable, parentView.parentView.viewData.parentIndex), null));
    _compView_1 = import34.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    import11.setAttribute(_el_1, 'icon', 'arrow_drop_down');
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import36.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1]
    ]);
    _compView_2 = import47.ViewMaterialPopupComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    addShimC(_el_2);
    _appEl_2 = ViewContainer(2, null, this, _el_2);
    _MaterialPopupComponent_2_8 = (import9.isDevMode
        ? import21.debugInjectorWrap(import48.MaterialPopupComponent, () {
            return import48.MaterialPopupComponent(parentView.parentView.parentView.injectorGetOptional(import53.PopupHierarchy, parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGetOptional(import48.MaterialPopupComponent, parentView.parentView.viewData.parentIndex), null, parentView.parentView.parentView.injectorGet(import23.NgZone, parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGet(import54.OverlayService, parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGet(import22.DomService, parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGet(import55.ZIndexer, parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGet(const import50.OpaqueToken<List<import57.RelativePosition>>('defaultPopupPositions'), parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGet(const import50.OpaqueToken<dynamic>('overlayRepositionLoop'), parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGet(const import50.OpaqueToken<dynamic>('overlayViewportBoundaries'), parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGetOptional(import58.PopupSizeProvider, parentView.parentView.viewData.parentIndex), _compView_2, _appEl_2, ElementRef(_el_2));
          })
        : import48.MaterialPopupComponent(parentView.parentView.parentView.injectorGetOptional(import53.PopupHierarchy, parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGetOptional(import48.MaterialPopupComponent, parentView.parentView.viewData.parentIndex), null, parentView.parentView.parentView.injectorGet(import23.NgZone, parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGet(import54.OverlayService, parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGet(import22.DomService, parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGet(import55.ZIndexer, parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGet(const import50.OpaqueToken<List<import57.RelativePosition>>('defaultPopupPositions'), parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGet(const import50.OpaqueToken<dynamic>('overlayRepositionLoop'), parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGet(const import50.OpaqueToken<dynamic>('overlayViewportBoundaries'), parentView.parentView.viewData.parentIndex), parentView.parentView.parentView.injectorGetOptional(import58.PopupSizeProvider, parentView.parentView.viewData.parentIndex), _compView_2, _appEl_2, ElementRef(_el_2)));
    final _anchor_3 = import11.createAnchor();
    _appEl_3 = ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_DateRangeEditorComponent8);
    _NgFor_3_9 = import20.NgFor(_appEl_3, _TemplateRef_3_8);
    _compView_2.create(_MaterialPopupComponent_2_8, [
      const [],
      [_appEl_3],
      const []
    ]);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    _el_0.addEventListener('keypress', eventHandler1(_handle_keypress_0_1));
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_2));
    init([_el_0, _appEl_2], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import49.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import45.MaterialButtonComponent) || identical(token, import37.ButtonDirective)) || identical(token, import24.HasDisabled))) {
        return _MaterialButtonComponent_0_6;
      }
    }
    if (((2 <= nodeIndex) && (nodeIndex <= 3))) {
      if (((identical(token, import48.MaterialPopupComponent) || identical(token, import30.DropdownHandle)) || identical(token, import60.DeferredContentAware))) {
        return _MaterialPopupComponent_2_8;
      }
      if (identical(token, import53.PopupHierarchy)) {
        return _PopupHierarchy_2_11;
      }
      if (identical(token, import61.PopupRef)) {
        return _PopupRef_2_12;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import46.PopupSourceDirective local_menuSource = _PopupSourceDirective_0_7;
    final local_preset = import9.unsafeCast<import43.DatepickerPreset>(parentView.locals['\$implicit']);
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      _PopupSourceDirective_0_7.alignX = 'after';
      _PopupSourceDirective_0_7.alignY = 'start';
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_1_5.icon = 'arrow_drop_down';
      changed = true;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialPopupComponent_2_8.offsetX = 9;
      changed = true;
      if (!identical((0 - 4), null)) {
        _MaterialPopupComponent_2_8.offsetY = (0 - 4);
        changed = true;
      }
    }
    final currVal_5 = local_menuSource;
    if (import13.checkBinding(_expr_5, currVal_5)) {
      _MaterialPopupComponent_2_8.source = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    final currVal_6 = local_preset.alternatives;
    if (import13.checkBinding(_expr_6, currVal_6)) {
      _NgFor_3_9.ngForOf = currVal_6;
      _expr_6 = currVal_6;
    }
    if ((!import13.AppViewUtils.throwOnChanges)) {
      _NgFor_3_9.ngDoCheck();
    }
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    _compView_2.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_1.detectChanges();
    _compView_2.detectChanges();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _PopupSourceDirective_0_7.ngAfterViewInit();
        _MaterialPopupComponent_2_8.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _appEl_3.destroyNestedViews();
    _compView_0.destroyInternalState();
    _compView_1.destroyInternalState();
    _compView_2.destroyInternalState();
    _PopupSourceDirective_0_7.ngOnDestroy();
    _MaterialPopupComponent_2_8.ngOnDestroy();
  }

  void _handle_click_0_0($event) {
    $event.stopPropagation();
  }

  void _handle_keypress_0_1($event) {
    $event.stopPropagation();
  }

  void _handle_trigger_0_2($event) {
    final import48.MaterialPopupComponent local_popup = _MaterialPopupComponent_2_8;
    local_popup.toggle();
  }
}

AppView<void> viewFactory_DateRangeEditorComponent7(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent7(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent8 extends AppView<import2.DateRangeEditorComponent> {
  final import33.TextBinding _textBinding_1 = import33.TextBinding();
  import28.ViewMaterialSelectItemComponent0 _compView_0;
  ViewContainer _appEl_0;
  import29.MaterialSelectItemComponent _MaterialSelectItemComponent_0_8;
  import38.MaterialTooltipDirective _MaterialTooltipDirective_0_9;
  dynamic __TooltipController_0_13;
  bool _expr_0;
  var _expr_1;
  bool _expr_4;
  _ViewDateRangeEditorComponent8(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  dynamic get _TooltipController_0_13 {
    if ((__TooltipController_0_13 == null)) {
      (__TooltipController_0_13 = (import9.isDevMode
          ? import21.debugInjectorWrap(import39.TooltipController, () {
              return import40.createTooltipController(import9.unsafeCast<_ViewDateRangeEditorComponent6>(parentView.parentView)._TooltipController_0_11, parentView.parentView.parentView.parentView.injectorGetOptional(import41.Disposer, parentView.parentView.parentView.viewData.parentIndex));
            })
          : import40.createTooltipController(import9.unsafeCast<_ViewDateRangeEditorComponent6>(parentView.parentView)._TooltipController_0_11, parentView.parentView.parentView.parentView.injectorGetOptional(import41.Disposer, parentView.parentView.parentView.viewData.parentIndex))));
    }
    return __TooltipController_0_13;
  }

  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    _compView_0 = import28.ViewMaterialSelectItemComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, import32.interpolateString2('', 'preset-dropdown-item', ' ', import29.MaterialSelectItemComponent.hostClass, ''));
    import11.setAttribute(_el_0, 'closeOnActivate', 'false');
    addShimC(_el_0);
    _appEl_0 = ViewContainer(0, null, this, _el_0);
    _MaterialSelectItemComponent_0_8 = (import9.isDevMode
        ? import21.debugInjectorWrap(import29.MaterialSelectItemComponent, () {
            return import29.MaterialSelectItemComponent(_el_0, import9.unsafeCast<_ViewDateRangeEditorComponent7>(parentView)._MaterialPopupComponent_2_8, parentView.parentView.parentView.parentView.injectorGetOptional(import31.ActivationHandler, parentView.parentView.parentView.viewData.parentIndex), _compView_0, null);
          })
        : import29.MaterialSelectItemComponent(_el_0, import9.unsafeCast<_ViewDateRangeEditorComponent7>(parentView)._MaterialPopupComponent_2_8, parentView.parentView.parentView.parentView.injectorGetOptional(import31.ActivationHandler, parentView.parentView.parentView.viewData.parentIndex), _compView_0, null));
    _MaterialTooltipDirective_0_9 = (import9.isDevMode
        ? import21.debugInjectorWrap(import38.MaterialTooltipDirective, () {
            return import38.MaterialTooltipDirective(parentView.parentView.parentView.parentView.injectorGet(import42.DomPopupSourceFactory, parentView.parentView.parentView.viewData.parentIndex), _appEl_0, _el_0, _appEl_0, _compView_0, parentView.parentView.parentView.parentView.injectorGet(import8.Window, parentView.parentView.parentView.viewData.parentIndex), null, null);
          })
        : import38.MaterialTooltipDirective(parentView.parentView.parentView.parentView.injectorGet(import42.DomPopupSourceFactory, parentView.parentView.parentView.viewData.parentIndex), _appEl_0, _el_0, _appEl_0, _compView_0, parentView.parentView.parentView.parentView.injectorGet(import8.Window, parentView.parentView.parentView.viewData.parentIndex), null, null));
    _compView_0.create(_MaterialSelectItemComponent_0_8, [
      [_textBinding_1.element]
    ]);
    final subscription_0 = _MaterialSelectItemComponent_0_8.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_appEl_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (((identical(token, import26.SelectionItem) || identical(token, import24.HasDisabled)) || identical(token, import25.HasRenderer))) {
        return _MaterialSelectItemComponent_0_8;
      }
      if (identical(token, import39.TooltipController)) {
        return _TooltipController_0_13;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_alternative = import9.unsafeCast<import43.DatepickerPreset>(locals['\$implicit']);
    if (firstCheck) {
      (_MaterialSelectItemComponent_0_8.closeOnActivate = 'false');
    }
    final bool currVal_0 = (!_ctx.isValid(local_alternative));
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_0_8.disabled = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isAlternativePresetSelected(local_alternative);
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _MaterialSelectItemComponent_0_8.selected = currVal_1;
      _expr_1 = currVal_1;
    }
    if (firstCheck) {
      if (!identical(import2.DateRangeEditorComponent.rangeDisabledTooltip, null)) {
        (_MaterialTooltipDirective_0_9.text = import2.DateRangeEditorComponent.rangeDisabledTooltip);
      }
    }
    final bool currVal_4 = (!_ctx.isValid(local_alternative));
    if (import13.checkBinding(_expr_4, currVal_4)) {
      _MaterialTooltipDirective_0_9.canShow = currVal_4;
      _expr_4 = currVal_4;
    }
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _MaterialTooltipDirective_0_9.ngOnInit();
    }
    _appEl_0.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_1.updateText(import32.interpolateString0(local_alternative.shortTitle));
    _compView_0.detectChanges();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialTooltipDirective_0_9.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<_ViewDateRangeEditorComponent1>(parentView.parentView.parentView)._query_SelectionItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _compView_0.destroyInternalState();
    _MaterialSelectItemComponent_0_8.ngOnDestroy();
    _MaterialTooltipDirective_0_9.ngOnDestroy();
  }

  void _handle_trigger_0_0($event) {
    final local_preset = import9.unsafeCast<import43.DatepickerPreset>(parentView.parentView.locals['\$implicit']);
    final local_alternative = import9.unsafeCast<import43.DatepickerPreset>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.onAlternativePresetClicked($event, local_preset, local_alternative);
  }
}

AppView<void> viewFactory_DateRangeEditorComponent8(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent8(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent9 extends AppView<import2.DateRangeEditorComponent> {
  import28.ViewMaterialSelectItemComponent0 _compView_1;
  import29.MaterialSelectItemComponent _MaterialSelectItemComponent_1_5;
  import62.ViewMaterialInputComponent0 _compView_2;
  import63.DeferredValidator _DeferredValidator_2_5;
  List<dynamic> _NgValidators_2_6;
  import64.NgModel _NgModel_2_7;
  import65.MaterialInputComponent _MaterialInputComponent_2_9;
  import66.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_2_11;
  import28.ViewMaterialSelectItemComponent0 _compView_5;
  import29.MaterialSelectItemComponent _MaterialSelectItemComponent_5_5;
  import62.ViewMaterialInputComponent0 _compView_6;
  import63.DeferredValidator _DeferredValidator_6_5;
  List<dynamic> _NgValidators_6_6;
  import64.NgModel _NgModel_6_7;
  import65.MaterialInputComponent _MaterialInputComponent_6_9;
  import66.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_6_11;
  var _expr_0;
  int _expr_3;
  var _expr_5;
  int _expr_8;
  _ViewDateRangeEditorComponent9(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'days group');
    addShimC(_el_0);
    _compView_1 = import28.ViewMaterialSelectItemComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    this.updateChildClassNonHtml(_el_1, import32.interpolateString2('', 'days-input days-to-today', ' ', import29.MaterialSelectItemComponent.hostClass, ''));
    import11.setAttribute(_el_1, 'closeOnActivate', 'false');
    addShimC(_el_1);
    _MaterialSelectItemComponent_1_5 = (import9.isDevMode
        ? import21.debugInjectorWrap(import29.MaterialSelectItemComponent, () {
            return import29.MaterialSelectItemComponent(_el_1, parentView.parentView.injectorGetOptional(import30.DropdownHandle, parentView.viewData.parentIndex), parentView.parentView.injectorGetOptional(import31.ActivationHandler, parentView.viewData.parentIndex), _compView_1, null);
          })
        : import29.MaterialSelectItemComponent(_el_1, parentView.parentView.injectorGetOptional(import30.DropdownHandle, parentView.viewData.parentIndex), parentView.parentView.injectorGetOptional(import31.ActivationHandler, parentView.viewData.parentIndex), _compView_1, null));
    _compView_2 = import62.ViewMaterialInputComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    addShimC(_el_2);
    _DeferredValidator_2_5 = import63.DeferredValidator();
    _NgValidators_2_6 = [_DeferredValidator_2_5];
    _NgModel_2_7 = import64.NgModel(_NgValidators_2_6, null);
    _MaterialInputComponent_2_9 = import65.MaterialInputComponent(null, null, null, _NgModel_2_7, _compView_2, _DeferredValidator_2_5);
    _MaterialInputDefaultValueAccessor_2_11 = import66.MaterialInputDefaultValueAccessor(_MaterialInputComponent_2_9, _NgModel_2_7);
    _compView_2.create(_MaterialInputComponent_2_9, [const [], const []]);
    final _el_3 = doc.createElement('span');
    addShimE(_el_3);
    final _text_4 = import11.appendText(_el_3, import32.interpolateString0(import2.DateRangeEditorComponent.daysToTodayMsg));
    _compView_1.create(_MaterialSelectItemComponent_1_5, [
      [_el_2, _el_3]
    ]);
    _compView_5 = import28.ViewMaterialSelectItemComponent0(this, 5);
    final _el_5 = _compView_5.rootEl;
    _el_0.append(_el_5);
    this.updateChildClassNonHtml(_el_5, import32.interpolateString2('', 'days-input days-to-yesterday', ' ', import29.MaterialSelectItemComponent.hostClass, ''));
    import11.setAttribute(_el_5, 'closeOnActivate', 'false');
    addShimC(_el_5);
    _MaterialSelectItemComponent_5_5 = (import9.isDevMode
        ? import21.debugInjectorWrap(import29.MaterialSelectItemComponent, () {
            return import29.MaterialSelectItemComponent(_el_5, parentView.parentView.injectorGetOptional(import30.DropdownHandle, parentView.viewData.parentIndex), parentView.parentView.injectorGetOptional(import31.ActivationHandler, parentView.viewData.parentIndex), _compView_5, null);
          })
        : import29.MaterialSelectItemComponent(_el_5, parentView.parentView.injectorGetOptional(import30.DropdownHandle, parentView.viewData.parentIndex), parentView.parentView.injectorGetOptional(import31.ActivationHandler, parentView.viewData.parentIndex), _compView_5, null));
    _compView_6 = import62.ViewMaterialInputComponent0(this, 6);
    final _el_6 = _compView_6.rootEl;
    addShimC(_el_6);
    _DeferredValidator_6_5 = import63.DeferredValidator();
    _NgValidators_6_6 = [_DeferredValidator_6_5];
    _NgModel_6_7 = import64.NgModel(_NgValidators_6_6, null);
    _MaterialInputComponent_6_9 = import65.MaterialInputComponent(null, null, null, _NgModel_6_7, _compView_6, _DeferredValidator_6_5);
    _MaterialInputDefaultValueAccessor_6_11 = import66.MaterialInputDefaultValueAccessor(_MaterialInputComponent_6_9, _NgModel_6_7);
    _compView_6.create(_MaterialInputComponent_6_9, [const [], const []]);
    final _el_7 = doc.createElement('span');
    addShimE(_el_7);
    final _text_8 = import11.appendText(_el_7, import32.interpolateString0(import2.DateRangeEditorComponent.daysToYesterdayMsg));
    _compView_5.create(_MaterialSelectItemComponent_5_5, [
      [_el_6, _el_7]
    ]);
    final subscription_0 = _MaterialSelectItemComponent_1_5.trigger.listen(eventHandler1(_handle_trigger_1_0));
    _el_2.addEventListener('click', eventHandler1(_handle_click_2_0));
    final subscription_1 = _NgModel_2_7.update.listen(eventHandler1(_handle_ngModelChange_2_1));
    final subscription_2 = _MaterialSelectItemComponent_5_5.trigger.listen(eventHandler1(_handle_trigger_5_0));
    _el_6.addEventListener('click', eventHandler1(_handle_click_6_0));
    final subscription_3 = _NgModel_6_7.update.listen(eventHandler1(_handle_ngModelChange_6_1));
    init([_el_0], [subscription_0, subscription_1, subscription_2, subscription_3]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((1 <= nodeIndex) && (nodeIndex <= 4))) {
      if ((2 == nodeIndex)) {
        if (identical(token, import63.DeferredValidator)) {
          return _DeferredValidator_2_5;
        }
        if (identical(token, const import50.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_2_6;
        }
        if ((identical(token, import64.NgModel) || identical(token, import67.NgControl))) {
          return _NgModel_2_7;
        }
        if (((((identical(token, import65.MaterialInputComponent) || identical(token, import68.BaseMaterialInput)) || identical(token, import51.ReferenceDirective)) || identical(token, import52.Focusable)) || identical(token, import24.HasDisabled))) {
          return _MaterialInputComponent_2_9;
        }
      }
      if (((identical(token, import26.SelectionItem) || identical(token, import24.HasDisabled)) || identical(token, import25.HasRenderer))) {
        return _MaterialSelectItemComponent_1_5;
      }
    }
    if (((5 <= nodeIndex) && (nodeIndex <= 8))) {
      if ((6 == nodeIndex)) {
        if (identical(token, import63.DeferredValidator)) {
          return _DeferredValidator_6_5;
        }
        if (identical(token, const import50.MultiToken<dynamic>('NgValidators'))) {
          return _NgValidators_6_6;
        }
        if ((identical(token, import64.NgModel) || identical(token, import67.NgControl))) {
          return _NgModel_6_7;
        }
        if (((((identical(token, import65.MaterialInputComponent) || identical(token, import68.BaseMaterialInput)) || identical(token, import51.ReferenceDirective)) || identical(token, import52.Focusable)) || identical(token, import24.HasDisabled))) {
          return _MaterialInputComponent_6_9;
        }
      }
      if (((identical(token, import26.SelectionItem) || identical(token, import24.HasDisabled)) || identical(token, import25.HasRenderer))) {
        return _MaterialSelectItemComponent_5_5;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      (_MaterialSelectItemComponent_1_5.closeOnActivate = 'false');
    }
    final currVal_0 = _ctx.isSelected(_ctx.daysToTodayRange);
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _MaterialSelectItemComponent_1_5.selected = currVal_0;
      _expr_0 = currVal_0;
    }
    changed = false;
    _NgModel_2_7.model = _ctx.daysToToday;
    _NgModel_2_7.ngAfterChanges();
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_2_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_2_9.displayBottomPanel = false;
      changed = true;
    }
    final currVal_3 = _ctx.maxDaysInputLength;
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _MaterialInputComponent_2_9.maxCount = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_2.markAsCheckOnce();
    }
    if (firstCheck) {
      (_MaterialSelectItemComponent_5_5.closeOnActivate = 'false');
    }
    final currVal_5 = _ctx.isSelected(_ctx.daysToYesterdayRange);
    if (import13.checkBinding(_expr_5, currVal_5)) {
      _MaterialSelectItemComponent_5_5.selected = currVal_5;
      _expr_5 = currVal_5;
    }
    changed = false;
    _NgModel_6_7.model = _ctx.daysToYesterday;
    _NgModel_6_7.ngAfterChanges();
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_6_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_6_9.displayBottomPanel = false;
      changed = true;
    }
    final currVal_8 = _ctx.maxDaysInputLength;
    if (import13.checkBinding(_expr_8, currVal_8)) {
      _MaterialInputComponent_6_9.maxCount = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    _compView_1.detectHostChanges(firstCheck);
    _compView_5.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    _compView_2.detectChanges();
    _compView_5.detectChanges();
    _compView_6.detectChanges();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_2_9.ngAfterViewInit();
        _MaterialInputComponent_6_9.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<_ViewDateRangeEditorComponent1>(parentView)._query_SelectionItem_0_0_isDirty = true;
    import9.unsafeCast<_ViewDateRangeEditorComponent1>(parentView)._query_SelectionItem_0_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_1.destroyInternalState();
    _compView_2.destroyInternalState();
    _compView_5.destroyInternalState();
    _compView_6.destroyInternalState();
    _MaterialInputComponent_2_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_2_11.ngOnDestroy();
    _MaterialSelectItemComponent_1_5.ngOnDestroy();
    _MaterialInputComponent_6_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_6_11.ngOnDestroy();
    _MaterialSelectItemComponent_5_5.ngOnDestroy();
  }

  void _handle_trigger_1_0($event) {
    final _ctx = ctx;
    _ctx.onRangeClicked($event, _ctx.daysToTodayRange);
  }

  void _handle_click_2_0($event) {
    $event.stopPropagation();
  }

  void _handle_ngModelChange_2_1($event) {
    final _ctx = ctx;
    _ctx.daysToToday = $event;
  }

  void _handle_trigger_5_0($event) {
    final _ctx = ctx;
    _ctx.onRangeClicked($event, _ctx.daysToYesterdayRange);
  }

  void _handle_click_6_0($event) {
    $event.stopPropagation();
  }

  void _handle_ngModelChange_6_1($event) {
    final _ctx = ctx;
    _ctx.daysToYesterday = $event;
  }
}

AppView<void> viewFactory_DateRangeEditorComponent9(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent9(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent10 extends AppView<import2.DateRangeEditorComponent> {
  import69.ViewComparisonRangeEditorComponent0 _compView_1;
  import70.ComparisonRangeEditorComponent _ComparisonRangeEditorComponent_1_5;
  var _expr_0;
  _ViewDateRangeEditorComponent10(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'comparison group');
    addShimC(_el_0);
    _compView_1 = import69.ViewComparisonRangeEditorComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    addShimC(_el_1);
    _ComparisonRangeEditorComponent_1_5 = (import9.isDevMode
        ? import21.debugInjectorWrap(import70.ComparisonRangeEditorComponent, () {
            return import70.ComparisonRangeEditorComponent(parentView.parentView.injectorGet(import23.NgZone, parentView.viewData.parentIndex), import9.unsafeCast<_ViewDateRangeEditorComponent1>(parentView)._ElementScrollHost_0_8);
          })
        : import70.ComparisonRangeEditorComponent(parentView.parentView.injectorGet(import23.NgZone, parentView.viewData.parentIndex), import9.unsafeCast<_ViewDateRangeEditorComponent1>(parentView)._ElementScrollHost_0_8));
    _compView_1.create0(_ComparisonRangeEditorComponent_1_5);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.model;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _ComparisonRangeEditorComponent_1_5.model = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroyInternalState();
  }
}

AppView<void> viewFactory_DateRangeEditorComponent10(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent10(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent11 extends AppView<import2.DateRangeEditorComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  import71.ViewDateRangeInputComponent0 _compView_4;
  import72.DateRangeInputComponent _DateRangeInputComponent_4_5;
  ViewContainer _appEl_5;
  NgIf _NgIf_5_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  ViewContainer _appEl_8;
  NgIf _NgIf_8_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  ViewContainer _appEl_11;
  NgIf _NgIf_11_9;
  String _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  bool _expr_8;
  var _expr_9;
  bool _expr_14;
  import8.DivElement _el_9;
  _ViewDateRangeEditorComponent11(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'right-column');
    addShimC(_el_0);
    final _anchor_1 = import11.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_DateRangeEditorComponent12);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _anchor_2 = import11.appendAnchor(_el_0);
    _appEl_2 = ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_DateRangeEditorComponent13);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    final _el_3 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_3, 'range-input');
    addShimC(_el_3);
    _compView_4 = import71.ViewDateRangeInputComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_3.append(_el_4);
    this.updateChildClassNonHtml(_el_4, 'range');
    addShimC(_el_4);
    _DateRangeInputComponent_4_5 = import72.DateRangeInputComponent(_compView_4);
    _compView_4.create0(_DateRangeInputComponent_4_5);
    final _anchor_5 = import11.appendAnchor(_el_0);
    _appEl_5 = ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_DateRangeEditorComponent14);
    _NgIf_5_9 = NgIf(_appEl_5, _TemplateRef_5_8);
    final _anchor_6 = import11.appendAnchor(_el_0);
    _appEl_6 = ViewContainer(6, 0, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_DateRangeEditorComponent15);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    final _anchor_7 = import11.appendAnchor(_el_0);
    _appEl_7 = ViewContainer(7, 0, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, viewFactory_DateRangeEditorComponent16);
    _NgIf_7_9 = NgIf(_appEl_7, _TemplateRef_7_8);
    final _anchor_8 = import11.appendAnchor(_el_0);
    _appEl_8 = ViewContainer(8, 0, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(_appEl_8, viewFactory_DateRangeEditorComponent17);
    _NgIf_8_9 = NgIf(_appEl_8, _TemplateRef_8_8);
    _el_9 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_9, 'picker-container');
    addShimC(_el_9);
    final _anchor_10 = import11.appendAnchor(_el_9);
    _appEl_10 = ViewContainer(10, 9, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(_appEl_10, viewFactory_DateRangeEditorComponent18);
    _NgIf_10_9 = NgIf(_appEl_10, _TemplateRef_10_8);
    final _anchor_11 = import11.appendAnchor(_el_9);
    _appEl_11 = ViewContainer(11, 9, this, _anchor_11);
    TemplateRef _TemplateRef_11_8 = TemplateRef(_appEl_11, viewFactory_DateRangeEditorComponent19);
    _NgIf_11_9 = NgIf(_appEl_11, _TemplateRef_11_8);
    final subscription_0 = _DateRangeInputComponent_4_5.rangeChange.listen(eventHandler1(_handle_rangeChange_4_1));
    final subscription_1 = _DateRangeInputComponent_4_5.stateChange.listen(eventHandler1(_handle_stateChange_4_0));
    init([_el_0], [subscription_0, subscription_1]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    _NgIf_1_9.ngIf = _ctx.isBasic;
    _NgIf_2_9.ngIf = _ctx.isBasic;
    changed = false;
    final currVal_2 = _ctx.model.rangeId;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _DateRangeInputComponent_4_5.rangeId = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.dateFormat;
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _DateRangeInputComponent_4_5.dateFormat = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.activeDateFormat;
    if (import13.checkBinding(_expr_4, currVal_4)) {
      _DateRangeInputComponent_4_5.activeDateFormat = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.maxDate;
    if (import13.checkBinding(_expr_5, currVal_5)) {
      _DateRangeInputComponent_4_5.maxDate = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.minDate;
    if (import13.checkBinding(_expr_6, currVal_6)) {
      _DateRangeInputComponent_4_5.minDate = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.model.range.value;
    if (import13.checkBinding(_expr_7, currVal_7)) {
      _DateRangeInputComponent_4_5.range = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.isClearRangeSelected;
    if (import13.checkBinding(_expr_8, currVal_8)) {
      _DateRangeInputComponent_4_5.isClearRangeSelected = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.model.calendar.value;
    if (import13.checkBinding(_expr_9, currVal_9)) {
      _DateRangeInputComponent_4_5.state = currVal_9;
      changed = true;
      _expr_9 = currVal_9;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _DateRangeInputComponent_4_5.ngOnInit();
    }
    _NgIf_5_9.ngIf = _ctx.model.comparisonEnabled;
    _NgIf_6_9.ngIf = _ctx.model.comparisonEnabled;
    _NgIf_7_9.ngIf = _ctx.supportsMonthSelector;
    _NgIf_8_9.ngIf = (!_ctx.isCalendarCreated);
    _NgIf_10_9.ngIf = _ctx.isCalendarCreated;
    _NgIf_11_9.ngIf = _ctx.supportsMonthSelector;
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_5.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
    _appEl_8.detectChangesInNestedViews();
    _appEl_10.detectChangesInNestedViews();
    _appEl_11.detectChangesInNestedViews();
    final currVal_14 = _ctx.compact;
    if (import13.checkBinding(_expr_14, currVal_14)) {
      import11.updateClassBinding(_el_9, 'compact', currVal_14);
      _expr_14 = currVal_14;
    }
    _compView_4.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_2.destroyNestedViews();
    _appEl_5.destroyNestedViews();
    _appEl_6.destroyNestedViews();
    _appEl_7.destroyNestedViews();
    _appEl_8.destroyNestedViews();
    _appEl_10.destroyNestedViews();
    _appEl_11.destroyNestedViews();
    _compView_4.destroyInternalState();
    _DateRangeInputComponent_4_5.ngOnDestroy();
  }

  void _handle_stateChange_4_0($event) {
    final _ctx = ctx;
    _ctx.model.calendar.value = $event;
  }

  void _handle_rangeChange_4_1($event) {
    final _ctx = ctx;
    _ctx.model.range.value = $event;
  }
}

AppView<void> viewFactory_DateRangeEditorComponent11(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent11(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent12 extends AppView<import2.DateRangeEditorComponent> {
  import35.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import34.ViewMaterialIconComponent0 _compView_3;
  import36.MaterialIconComponent _MaterialIconComponent_3_5;
  import8.DivElement _el_0;
  _ViewDateRangeEditorComponent12(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    final _ctx = ctx;
    final doc = import8.document;
    _el_0 = doc.createElement('div');
    import11.setAttribute(_el_0, 'buttonDecorator', '');
    this.updateChildClass(_el_0, 'button-decorator');
    addShimC(_el_0);
    _ButtonDirective_0_5 = import35.ButtonDirectiveNgCd(import37.ButtonDirective(_el_0, null));
    final _el_1 = import11.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'custom-tab-right');
    addShimC(_el_1);
    final _text_2 = import11.appendText(_el_1, import32.interpolateString0(import2.DateRangeEditorComponent.customRangeMsg));
    _compView_3 = import34.ViewMaterialIconComponent0(this, 3);
    final _el_3 = _compView_3.rootEl;
    _el_0.append(_el_3);
    this.updateChildClassNonHtml(_el_3, 'expand-less');
    import11.setAttribute(_el_3, 'icon', 'expand_less');
    addShimC(_el_3);
    _MaterialIconComponent_3_5 = import36.MaterialIconComponent(_el_3);
    _compView_3.create0(_MaterialIconComponent_3_5);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler0(_ctx.disableCustomMode));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import37.ButtonDirective) && (nodeIndex <= 3))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_3_5.icon = 'expand_less';
      changed = true;
    }
    if (changed) {
      _compView_3.markAsCheckOnce();
    }
    _ButtonDirective_0_5.detectHostChanges(this, _el_0);
    _compView_3.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_3.destroyInternalState();
  }
}

AppView<void> viewFactory_DateRangeEditorComponent12(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent12(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent13 extends AppView<import2.DateRangeEditorComponent> {
  _ViewDateRangeEditorComponent13(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'content-separator');
    addShimC(_el_0);
    init1(_el_0);
  }
}

AppView<void> viewFactory_DateRangeEditorComponent13(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent13(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent14 extends AppView<import2.DateRangeEditorComponent> {
  _ViewDateRangeEditorComponent14(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'range-title');
    addShimC(_el_0);
    final _text_1 = import11.appendText(_el_0, import32.interpolateString0(import2.DateRangeEditorComponent.comparisonHeaderMsg));
    init1(_el_0);
  }
}

AppView<void> viewFactory_DateRangeEditorComponent14(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent14(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent15 extends AppView<import2.DateRangeEditorComponent> {
  import71.ViewDateRangeInputComponent0 _compView_1;
  import72.DateRangeInputComponent _DateRangeInputComponent_1_5;
  String _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  bool _expr_5;
  var _expr_6;
  bool _expr_7;
  var _expr_8;
  _ViewDateRangeEditorComponent15(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'range-input');
    addShimC(_el_0);
    _compView_1 = import71.ViewDateRangeInputComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    this.updateChildClassNonHtml(_el_1, 'comparison inputs');
    addShimC(_el_1);
    _DateRangeInputComponent_1_5 = import72.DateRangeInputComponent(_compView_1);
    _compView_1.create0(_DateRangeInputComponent_1_5);
    final subscription_0 = _DateRangeInputComponent_1_5.rangeChange.listen(eventHandler1(_handle_rangeChange_1_1));
    final subscription_1 = _DateRangeInputComponent_1_5.stateChange.listen(eventHandler1(_handle_stateChange_1_0));
    init([_el_0], [subscription_0, subscription_1]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_0 = _ctx.model.comparisonId;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _DateRangeInputComponent_1_5.rangeId = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.dateFormat;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _DateRangeInputComponent_1_5.dateFormat = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.activeDateFormat;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _DateRangeInputComponent_1_5.activeDateFormat = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.model.maxDate;
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _DateRangeInputComponent_1_5.maxDate = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.model.minDate;
    if (import13.checkBinding(_expr_4, currVal_4)) {
      _DateRangeInputComponent_1_5.minDate = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final bool currVal_5 = (!_ctx.isCustomComparisonValid);
    if (import13.checkBinding(_expr_5, currVal_5)) {
      _DateRangeInputComponent_1_5.disabled = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.model.comparison.value;
    if (import13.checkBinding(_expr_6, currVal_6)) {
      _DateRangeInputComponent_1_5.range = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    final currVal_7 = _ctx.isClearRangeSelected;
    if (import13.checkBinding(_expr_7, currVal_7)) {
      _DateRangeInputComponent_1_5.isClearRangeSelected = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    final currVal_8 = _ctx.model.calendar.value;
    if (import13.checkBinding(_expr_8, currVal_8)) {
      _DateRangeInputComponent_1_5.state = currVal_8;
      changed = true;
      _expr_8 = currVal_8;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _DateRangeInputComponent_1_5.ngOnInit();
    }
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_1.destroyInternalState();
    _DateRangeInputComponent_1_5.ngOnDestroy();
  }

  void _handle_stateChange_1_0($event) {
    final _ctx = ctx;
    _ctx.model.calendar.value = $event;
  }

  void _handle_rangeChange_1_1($event) {
    final _ctx = ctx;
    _ctx.model.comparison.value = $event;
  }
}

AppView<void> viewFactory_DateRangeEditorComponent15(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent15(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent16 extends AppView<import2.DateRangeEditorComponent> {
  final import33.TextBinding _textBinding_3 = import33.TextBinding();
  import35.ButtonDirectiveNgCd _ButtonDirective_1_5;
  import73.KeyboardOnlyFocusIndicatorDirective _KeyboardOnlyFocusIndicatorDirective_1_6;
  import34.ViewMaterialIconComponent0 _compView_4;
  import36.MaterialIconComponent _MaterialIconComponent_4_5;
  import74.ViewNextPrevComponent0 _compView_5;
  import75.NextPrevComponent _NextPrevComponent_5_5;
  bool _expr_0;
  var _expr_2;
  import8.DivElement _el_1;
  import8.Element _el_4;
  _ViewDateRangeEditorComponent16(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    final _ctx = ctx;
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'month-selector-toolbar');
    addShimC(_el_0);
    _el_1 = import11.appendDiv(doc, _el_0);
    import11.setAttribute(_el_1, 'buttonDecorator', '');
    this.updateChildClass(_el_1, 'month-selector-dropdown');
    import11.setAttribute(_el_1, 'keyboardOnlyFocusIndicator', '');
    addShimC(_el_1);
    _ButtonDirective_1_5 = import35.ButtonDirectiveNgCd(import37.ButtonDirective(_el_1, null));
    _KeyboardOnlyFocusIndicatorDirective_1_6 = (import9.isDevMode
        ? import21.debugInjectorWrap(import73.KeyboardOnlyFocusIndicatorDirective, () {
            return import73.KeyboardOnlyFocusIndicatorDirective(_el_1, parentView.parentView.injectorGet(import22.DomService, parentView.viewData.parentIndex));
          })
        : import73.KeyboardOnlyFocusIndicatorDirective(_el_1, parentView.parentView.injectorGet(import22.DomService, parentView.viewData.parentIndex)));
    final _el_2 = import11.appendSpan(doc, _el_1);
    this.updateChildClass(_el_2, 'visible-month');
    addShimE(_el_2);
    _el_2.append(_textBinding_3.element);
    _compView_4 = import34.ViewMaterialIconComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    _el_1.append(_el_4);
    this.updateChildClassNonHtml(_el_4, 'month-selector-dropdown-icon');
    import11.setAttribute(_el_4, 'icon', 'arrow_drop_down');
    addShimC(_el_4);
    _MaterialIconComponent_4_5 = import36.MaterialIconComponent(_el_4);
    _compView_4.create0(_MaterialIconComponent_4_5);
    _compView_5 = import74.ViewNextPrevComponent0(this, 5);
    final _el_5 = _compView_5.rootEl;
    _el_0.append(_el_5);
    this.updateChildClassNonHtml(_el_5, 'next-prev-range');
    addShimC(_el_5);
    _NextPrevComponent_5_5 = import75.NextPrevComponent(_compView_5);
    _compView_5.create0(_NextPrevComponent_5_5);
    _el_1.addEventListener('click', eventHandler1(_handle_click_1_1));
    _el_1.addEventListener('keypress', eventHandler1(_ButtonDirective_1_5.instance.handleKeyPress));
    _el_1.addEventListener('keydown', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_1_6.keydown));
    _el_1.addEventListener('blur', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_1_6.resetOutline));
    _el_1.addEventListener('mousedown', eventHandler0(_KeyboardOnlyFocusIndicatorDirective_1_6.onMouseInteraction));
    _el_1.addEventListener('focus', eventHandler1(_KeyboardOnlyFocusIndicatorDirective_1_6.onFocus));
    final subscription_0 = _ButtonDirective_1_5.instance.trigger.listen(eventHandler0(_ctx.onMonthSelectorDropdownClicked));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import37.ButtonDirective) && ((1 <= nodeIndex) && (nodeIndex <= 4)))) {
      return _ButtonDirective_1_5.instance;
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
      _MaterialIconComponent_4_5.icon = 'arrow_drop_down';
      changed = true;
    }
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    changed = false;
    final currVal_2 = _ctx.nextPrevModel;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _NextPrevComponent_5_5.model = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    _ButtonDirective_1_5.detectHostChanges(this, _el_1);
    _textBinding_3.updateText(import32.interpolateString0(_ctx.visibleMonthName));
    final currVal_0 = _ctx.showMonthSelector;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.updateClassBindingNonHtml(_el_4, 'flipped', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_4.detectChanges();
    _compView_5.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_4.destroyInternalState();
    _compView_5.destroyInternalState();
    _NextPrevComponent_5_5.ngOnDestroy();
  }

  void _handle_click_1_1($event) {
    _ButtonDirective_1_5.instance.handleClick($event);
    _KeyboardOnlyFocusIndicatorDirective_1_6.onMouseInteraction();
  }
}

AppView<void> viewFactory_DateRangeEditorComponent16(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent16(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent17 extends AppView<import2.DateRangeEditorComponent> {
  _ViewDateRangeEditorComponent17(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'calendar-placeholder');
    addShimC(_el_0);
    init1(_el_0);
  }
}

AppView<void> viewFactory_DateRangeEditorComponent17(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent17(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent18 extends AppView<import2.DateRangeEditorComponent> {
  import76.ViewMaterialCalendarPickerComponent0 _compView_0;
  import77.MaterialCalendarPickerComponent _MaterialCalendarPickerComponent_0_5;
  import78.ShowHideDirective _ShowHideDirective_0_6;
  var _expr_0;
  var _expr_1;
  bool _expr_2;
  var _expr_3;
  var _expr_4;
  bool _expr_5;
  bool _expr_6;
  bool _expr_7;
  import8.Element _el_0;
  _ViewDateRangeEditorComponent18(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    final _ctx = ctx;
    _compView_0 = import76.ViewMaterialCalendarPickerComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'picker calendar');
    import11.setAttribute(_el_0, 'mode', 'date-range');
    addShimC(_el_0);
    _MaterialCalendarPickerComponent_0_5 = (import9.isDevMode
        ? import21.debugInjectorWrap(import77.MaterialCalendarPickerComponent, () {
            return import77.MaterialCalendarPickerComponent(parentView.parentView.injectorGetOptional(const import50.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), parentView.viewData.parentIndex), parentView.parentView.injectorGet(import17.Clock, parentView.viewData.parentIndex), 'date-range');
          })
        : import77.MaterialCalendarPickerComponent(parentView.parentView.injectorGetOptional(const import50.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), parentView.viewData.parentIndex), parentView.parentView.injectorGet(import17.Clock, parentView.viewData.parentIndex), 'date-range'));
    _ShowHideDirective_0_6 = (import9.isDevMode
        ? import21.debugInjectorWrap(import78.ShowHideDirective, () {
            return import78.ShowHideDirective(_el_0, parentView.parentView.injectorGet(import22.DomService, parentView.viewData.parentIndex));
          })
        : import78.ShowHideDirective(_el_0, parentView.parentView.injectorGet(import22.DomService, parentView.viewData.parentIndex)));
    _compView_0.create0(_MaterialCalendarPickerComponent_0_5);
    final subscription_0 = _MaterialCalendarPickerComponent_0_5.stateChange.listen(eventHandler1(_handle_stateChange_0_1));
    final subscription_1 = _MaterialCalendarPickerComponent_0_5.visibleMonth.listen(eventHandler1(_ctx.onVisibleMonthChange));
    init([_el_0], [subscription_0, subscription_1]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_1 = _ctx.model.calendar.value;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _MaterialCalendarPickerComponent_0_5.state = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.allowHighlightUpdates;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _MaterialCalendarPickerComponent_0_5.allowHighlightUpdates = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.minDate;
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _MaterialCalendarPickerComponent_0_5.minDate = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    final currVal_4 = _ctx.maxDate;
    if (import13.checkBinding(_expr_4, currVal_4)) {
      _MaterialCalendarPickerComponent_0_5.maxDate = currVal_4;
      changed = true;
      _expr_4 = currVal_4;
    }
    final currVal_5 = _ctx.compact;
    if (import13.checkBinding(_expr_5, currVal_5)) {
      _MaterialCalendarPickerComponent_0_5.compact = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.movingStartMaintainsLength;
    if (import13.checkBinding(_expr_6, currVal_6)) {
      _MaterialCalendarPickerComponent_0_5.movingStartMaintainsLength = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (changed) {
      _MaterialCalendarPickerComponent_0_5.ngAfterChanges();
    }
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _MaterialCalendarPickerComponent_0_5.ngOnInit();
    }
    final bool currVal_7 = (!_ctx.showMonthSelector);
    if (import13.checkBinding(_expr_7, currVal_7)) {
      _ShowHideDirective_0_6.visible = currVal_7;
      _expr_7 = currVal_7;
    }
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _ShowHideDirective_0_6.ngOnInit();
    }
    final currVal_0 = _ctx.popupHandle;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.setProperty(_el_0, 'popupHandle', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialCalendarPickerComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<ViewDateRangeEditorComponent0>(parentView.parentView)._query_MaterialCalendarPickerComponent_1_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialCalendarPickerComponent_0_5.ngOnDestroy();
    _ShowHideDirective_0_6.ngOnDestroy();
  }

  void _handle_stateChange_0_1($event) {
    final _ctx = ctx;
    _ctx.model.calendar.value = $event;
  }
}

AppView<void> viewFactory_DateRangeEditorComponent18(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent18(parentView, parentIndex);
}

class _ViewDateRangeEditorComponent19 extends AppView<import2.DateRangeEditorComponent> {
  import79.ViewMaterialMonthPickerComponent0 _compView_0;
  import80.MaterialMonthPickerComponent _MaterialMonthPickerComponent_0_5;
  import78.ShowHideDirective _ShowHideDirective_0_6;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  bool _expr_3;
  _ViewDateRangeEditorComponent19(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    _compView_0 = import79.ViewMaterialMonthPickerComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'picker month-selector');
    import11.setAttribute(_el_0, 'mode', 'single-date');
    addShimC(_el_0);
    _MaterialMonthPickerComponent_0_5 = (import9.isDevMode
        ? import21.debugInjectorWrap(import80.MaterialMonthPickerComponent, () {
            return import80.MaterialMonthPickerComponent(parentView.parentView.injectorGetOptional(const import50.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), parentView.viewData.parentIndex), 'single-date');
          })
        : import80.MaterialMonthPickerComponent(parentView.parentView.injectorGetOptional(const import50.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), parentView.viewData.parentIndex), 'single-date'));
    _ShowHideDirective_0_6 = (import9.isDevMode
        ? import21.debugInjectorWrap(import78.ShowHideDirective, () {
            return import78.ShowHideDirective(_el_0, parentView.parentView.injectorGet(import22.DomService, parentView.viewData.parentIndex));
          })
        : import78.ShowHideDirective(_el_0, parentView.parentView.injectorGet(import22.DomService, parentView.viewData.parentIndex)));
    _compView_0.create0(_MaterialMonthPickerComponent_0_5);
    final subscription_0 = _MaterialMonthPickerComponent_0_5.stateChange.listen(eventHandler1(_handle_stateChange_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    final currVal_0 = _ctx.monthSelectorState;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      _MaterialMonthPickerComponent_0_5.state = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.minDate;
    if (import13.checkBinding(_expr_1, currVal_1)) {
      _MaterialMonthPickerComponent_0_5.minDate = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.maxDate;
    if (import13.checkBinding(_expr_2, currVal_2)) {
      _MaterialMonthPickerComponent_0_5.maxDate = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (changed) {
      _MaterialMonthPickerComponent_0_5.ngAfterChanges();
    }
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _MaterialMonthPickerComponent_0_5.ngOnInit();
    }
    final currVal_3 = _ctx.showMonthSelector;
    if (import13.checkBinding(_expr_3, currVal_3)) {
      _ShowHideDirective_0_6.visible = currVal_3;
      _expr_3 = currVal_3;
    }
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _ShowHideDirective_0_6.ngOnInit();
    }
    _compView_0.detectChanges();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialMonthPickerComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void dirtyParentQueriesInternal() {
    import9.unsafeCast<ViewDateRangeEditorComponent0>(parentView.parentView)._query_MaterialMonthPickerComponent_1_1_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialMonthPickerComponent_0_5.ngOnDestroy();
    _ShowHideDirective_0_6.ngOnDestroy();
  }

  void _handle_stateChange_0_0($event) {
    final _ctx = ctx;
    _ctx.monthSelectorState = $event;
  }
}

AppView<void> viewFactory_DateRangeEditorComponent19(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponent19(parentView, parentIndex);
}

final List<dynamic> styles$DateRangeEditorComponentHost = const [];

class _ViewDateRangeEditorComponentHost0 extends AppView<import2.DateRangeEditorComponent> {
  ViewDateRangeEditorComponent0 _compView_0;
  import2.DateRangeEditorComponent _DateRangeEditorComponent_0_5;
  _ViewDateRangeEditorComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.DateRangeEditorComponent> build() {
    _compView_0 = ViewDateRangeEditorComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DateRangeEditorComponent_0_5 = (import9.isDevMode
        ? import21.debugInjectorWrap(import2.DateRangeEditorComponent, () {
            return import2.DateRangeEditorComponent(rootEl, this.injectorGet(import22.DomService, viewData.parentIndex), this.injectorGet(import81.ManagedZone, viewData.parentIndex), this.injectorGetOptional(import82.DateRangeEditorHost, viewData.parentIndex), this.injectorGetOptional(const import50.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex), this.injectorGet(import17.Clock, viewData.parentIndex));
          })
        : import2.DateRangeEditorComponent(rootEl, this.injectorGet(import22.DomService, viewData.parentIndex), this.injectorGet(import81.ManagedZone, viewData.parentIndex), this.injectorGetOptional(import82.DateRangeEditorHost, viewData.parentIndex), this.injectorGetOptional(const import50.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock'), viewData.parentIndex), this.injectorGet(import17.Clock, viewData.parentIndex)));
    _compView_0.create(_DateRangeEditorComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _DateRangeEditorComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _DateRangeEditorComponent_0_5.ngOnInit();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if ((!import13.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _DateRangeEditorComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.DateRangeEditorComponent> viewFactory_DateRangeEditorComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDateRangeEditorComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DateRangeEditorComponent, DateRangeEditorComponentNgFactory);
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
  _ref29.initReflector();
  _ref30.initReflector();
  _ref31.initReflector();
}
