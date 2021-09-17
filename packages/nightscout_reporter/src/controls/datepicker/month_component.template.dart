// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'month_component.dart';
export 'month_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:nightscout_reporter/src/controls/datepicker/datepicker_component.template.dart' as _ref2;
import 'package:nightscout_reporter/src/controls/datepicker/month_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'month_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import6;
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import9;
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import14;
import 'package:angular/src/runtime/interpolate.dart' as import15;
import 'package:intl/intl.dart' as import16;
import 'package:angular_components/material_button/material_button.template.dart' as import17;
import 'package:angular_components/material_button/material_button.dart' as import18;
import 'package:angular/src/di/errors.dart' as import19;
import 'package:angular_components/theme/dark_theme.dart' as import20;
import 'package:angular/src/core/di/opaque_token.dart' as import21;
import 'package:angular_components/button_decorator/button_decorator.dart' as import22;
import 'package:angular_components/interfaces/has_disabled.dart' as import23;
import 'package:angular_components/material_icon/material_icon.template.dart' as import24;
import 'package:angular_components/material_icon/material_icon.dart' as import25;

final List<dynamic> styles$MonthComponent = [import0.styles];

class ViewMonthComponent0 extends AppView<import2.MonthComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  final import3.TextBinding _textBinding_3 = import3.TextBinding();
  ViewContainer _appEl_5;
  import5.NgFor _NgFor_5_9;
  ViewContainer _appEl_9;
  import5.NgFor _NgFor_9_9;
  ViewContainer _appEl_11;
  import5.NgFor _NgFor_11_9;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  static import6.ComponentStyles _componentStyles;
  ViewMonthComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import9.document.createElement('month');
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:nightscout_reporter/lib/src/controls/datepicker/month_component.dart' : null);
  }

  @override
  ComponentRef<import2.MonthComponent> build() {
    final _rootEl = rootEl;
    final import9.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import9.document;
    final _el_0 = import12.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'title');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    final _text_2 = import12.appendText(_el_0, ' ');
    _el_0.append(_textBinding_3.element);
    final _el_4 = import12.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_4, 'weektitle');
    addShimC(_el_4);
    final _anchor_5 = import12.appendAnchor(_el_4);
    _appEl_5 = ViewContainer(5, 4, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_MonthComponent1);
    _NgFor_5_9 = import5.NgFor(_appEl_5, _TemplateRef_5_8);
    final _el_6 = import12.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_6, 'month infoarea');
    addShimC(_el_6);
    final _el_7 = import12.appendDiv(doc, _el_6);
    this.updateChildClass(_el_7, 'infotext');
    addShimC(_el_7);
    final _text_8 = import12.appendText(_el_7, 'In diesem Bereich werden die einzelnen Tage des Monats angezeigt');
    final _anchor_9 = import12.appendAnchor(_el_6);
    _appEl_9 = ViewContainer(9, 6, this, _anchor_9);
    TemplateRef _TemplateRef_9_8 = TemplateRef(_appEl_9, viewFactory_MonthComponent2);
    _NgFor_9_9 = import5.NgFor(_appEl_9, _TemplateRef_9_8);
    final _el_10 = import12.appendDiv(doc, _el_6);
    this.updateChildClass(_el_10, 'weekmarks');
    addShimC(_el_10);
    final _anchor_11 = import12.appendAnchor(_el_10);
    _appEl_11 = ViewContainer(11, 10, this, _anchor_11);
    TemplateRef _TemplateRef_11_8 = TemplateRef(_appEl_11, viewFactory_MonthComponent4);
    _NgFor_11_9 = import5.NgFor(_appEl_11, _TemplateRef_11_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.month.weeks[0].days;
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _NgFor_5_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import14.AppViewUtils.throwOnChanges)) {
      _NgFor_5_9.ngDoCheck();
    }
    final currVal_1 = _ctx.month.weeks;
    if (import14.checkBinding(_expr_1, currVal_1)) {
      _NgFor_9_9.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    if ((!import14.AppViewUtils.throwOnChanges)) {
      _NgFor_9_9.ngDoCheck();
    }
    final currVal_2 = _ctx.month.weeks[0].days;
    if (import14.checkBinding(_expr_2, currVal_2)) {
      _NgFor_11_9.ngForOf = currVal_2;
      _expr_2 = currVal_2;
    }
    if ((!import14.AppViewUtils.throwOnChanges)) {
      _NgFor_11_9.ngDoCheck();
    }
    _appEl_5.detectChangesInNestedViews();
    _appEl_9.detectChangesInNestedViews();
    _appEl_11.detectChangesInNestedViews();
    _textBinding_1.updateText(import15.interpolate0(_ctx.monthName(_ctx.date)));
    _textBinding_3.updateText(import15.interpolate0(_ctx.date.year));
  }

  @override
  void destroyInternal() {
    _appEl_5.destroyNestedViews();
    _appEl_9.destroyNestedViews();
    _appEl_11.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import6.ComponentStyles.scoped(styles$MonthComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MonthComponent> _MonthComponentNgFactory = const ComponentFactory('month', viewFactory_MonthComponentHost0);
ComponentFactory<import2.MonthComponent> get MonthComponentNgFactory {
  return _MonthComponentNgFactory;
}

class _ViewMonthComponent1 extends AppView<import2.MonthComponent> {
  static final String _message_0 = import16.Intl.message('Als ersten Tag der Woche festlegen', desc: 'title for button of weekdayname');
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  import17.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import18.MaterialButtonComponent _MaterialButtonComponent_0_6;
  _ViewMonthComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MonthComponent> build() {
    _compView_0 = import17.ViewMaterialButtonComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'btn');
    import12.setAttribute(_el_0, 'title', _message_0);
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import10.isDevMode
        ? import19.debugInjectorWrap(import20.AcxDarkTheme, () {
            return import20.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import21.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import20.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import21.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import18.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_textBinding_1.element]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import20.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import18.MaterialButtonComponent) || identical(token, import22.ButtonDirective)) || identical(token, import23.HasDisabled))) {
        return _MaterialButtonComponent_0_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_dow = locals['\$implicit'];
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_1.updateText(import15.interpolate0(local_dow.shortName));
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }

  void _handle_trigger_0_0($event) {
    final local_dow = locals['\$implicit'];
    final _ctx = ctx;
    _ctx.weekdayClicked(local_dow);
  }
}

AppView<void> viewFactory_MonthComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMonthComponent1(parentView, parentIndex);
}

class _ViewMonthComponent2 extends AppView<import2.MonthComponent> {
  ViewContainer _appEl_1;
  import5.NgFor _NgFor_1_9;
  var _expr_0;
  _ViewMonthComponent2(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MonthComponent> build() {
    final doc = import9.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'week');
    addShimC(_el_0);
    final _anchor_1 = import12.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_MonthComponent3);
    _NgFor_1_9 = import5.NgFor(_appEl_1, _TemplateRef_1_8);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_week = locals['\$implicit'];
    final currVal_0 = local_week.days;
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _NgFor_1_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import14.AppViewUtils.throwOnChanges)) {
      _NgFor_1_9.ngDoCheck();
    }
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }
}

AppView<void> viewFactory_MonthComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMonthComponent2(parentView, parentIndex);
}

class _ViewMonthComponent3 extends AppView<import2.MonthComponent> {
  final import3.TextBinding _textBinding_1 = import3.TextBinding();
  import17.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import18.MaterialButtonComponent _MaterialButtonComponent_0_6;
  String _expr_0;
  bool _expr_1;
  bool _expr_2;
  import9.Element _el_0;
  _ViewMonthComponent3(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MonthComponent> build() {
    _compView_0 = import17.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import10.isDevMode
        ? import19.debugInjectorWrap(import20.AcxDarkTheme, () {
            return import20.AcxDarkTheme(parentView.parentView.parentView.injectorGetOptional(const import21.OpaqueToken<dynamic>('acxDarkTheme'), parentView.parentView.viewData.parentIndex));
          })
        : import20.AcxDarkTheme(parentView.parentView.parentView.injectorGetOptional(const import21.OpaqueToken<dynamic>('acxDarkTheme'), parentView.parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import18.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_textBinding_1.element]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import20.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import18.MaterialButtonComponent) || identical(token, import22.ButtonDirective)) || identical(token, import23.HasDisabled))) {
        return _MaterialButtonComponent_0_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_day = locals['\$implicit'];
    changed = false;
    final bool currVal_1 = (!local_day.isEnabled);
    if (import14.checkBinding(_expr_1, currVal_1)) {
      _MaterialButtonComponent_0_6.disabled = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = local_day.isRaised;
    if (import14.checkBinding(_expr_2, currVal_2)) {
      _MaterialButtonComponent_0_6.raised = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    final currVal_0 = _ctx.dayclass(local_day);
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _compView_0.updateChildClassNonHtml(_el_0, currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _textBinding_1.updateText(import15.interpolate0(local_day.day));
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }

  void _handle_trigger_0_0($event) {
    final local_day = locals['\$implicit'];
    final _ctx = ctx;
    _ctx.dayClicked(local_day);
  }
}

AppView<void> viewFactory_MonthComponent3(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMonthComponent3(parentView, parentIndex);
}

class _ViewMonthComponent4 extends AppView<import2.MonthComponent> {
  import17.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import18.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import24.ViewMaterialIconComponent0 _compView_1;
  import25.MaterialIconComponent _MaterialIconComponent_1_5;
  String _expr_0;
  var _expr_1;
  import9.Element _el_0;
  _ViewMonthComponent4(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MonthComponent> build() {
    _compView_0 = import17.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import10.isDevMode
        ? import19.debugInjectorWrap(import20.AcxDarkTheme, () {
            return import20.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import21.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import20.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import21.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import18.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _compView_1 = import24.ViewMaterialIconComponent0(this, 1);
    final _el_1 = _compView_1.rootEl;
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import25.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler1(_handle_trigger_0_0));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import20.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import18.MaterialButtonComponent) || identical(token, import22.ButtonDirective)) || identical(token, import23.HasDisabled))) {
        return _MaterialButtonComponent_0_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_dow = locals['\$implicit'];
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    changed = false;
    final currVal_1 = (_ctx.period.isDowActive((local_dow.date.weekday - 1)) ? 'done' : 'close');
    if (import14.checkBinding(_expr_1, currVal_1)) {
      _MaterialIconComponent_1_5.icon = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    final currVal_0 = _ctx.dowmark((local_dow.date.weekday - 1));
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _compView_0.updateChildClassNonHtml(_el_0, currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _compView_1.destroyInternalState();
  }

  void _handle_trigger_0_0($event) {
    final local_dow = locals['\$implicit'];
    final _ctx = ctx;
    _ctx.period.activateDow((local_dow.date.weekday - 1), (!_ctx.period.isDowActive((local_dow.date.weekday - 1))));
  }
}

AppView<void> viewFactory_MonthComponent4(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMonthComponent4(parentView, parentIndex);
}

final List<dynamic> styles$MonthComponentHost = const [];

class _ViewMonthComponentHost0 extends AppView<import2.MonthComponent> {
  ViewMonthComponent0 _compView_0;
  import2.MonthComponent _MonthComponent_0_5;
  _ViewMonthComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MonthComponent> build() {
    _compView_0 = ViewMonthComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MonthComponent_0_5 = import2.MonthComponent();
    _compView_0.create(_MonthComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MonthComponent_0_5);
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

AppView<import2.MonthComponent> viewFactory_MonthComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMonthComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MonthComponent, MonthComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
