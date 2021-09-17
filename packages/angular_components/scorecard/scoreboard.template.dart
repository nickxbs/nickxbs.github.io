// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'scoreboard.dart';
export 'scoreboard.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/material_button/material_button.template.dart' as _ref1;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref2;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref3;
import 'package:angular_components/utils/browser/dom_service/angular_2.template.dart' as _ref4;
import 'package:angular_components/utils/color/palette.template.dart' as _ref5;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref6;
import 'scorecard.template.dart' as _ref7;
import 'scorecard_bar.template.dart' as _ref8;
import 'package:angular_components/scorecard/scoreboard.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'scoreboard.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'scorecard_bar.dart' as import5;
import 'dart:html' as import6;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/di/errors.dart' as import14;
import '../utils/browser/dom_service/dom_service.dart' as import15;
import 'package:angular/src/core/di/opaque_token.dart' as import16;
import 'package:angular/src/core/linker/app_view_utils.dart' as import17;
import '../material_button/material_button.template.dart' as import18;
import '../material_button/material_button.dart' as import19;
import '../material_icon/material_icon.template.dart' as import20;
import '../material_icon/material_icon.dart' as import21;
import '../theme/dark_theme.dart' as import22;
import '../button_decorator/button_decorator.dart' as import23;
import '../interfaces/has_disabled.dart' as import24;

final List<dynamic> styles$ScoreboardComponent = [import0.styles];

class ViewScoreboardComponent0 extends AppView<import2.ScoreboardComponent> {
  ViewContainer _appEl_1;
  NgIf _NgIf_1_9;
  import5.ScorecardBarDirective _ScorecardBarDirective_2_5;
  ViewContainer _appEl_3;
  NgIf _NgIf_3_9;
  bool _expr_0;
  bool _expr_1;
  var _expr_3;
  import6.DivElement _el_0;
  static import7.ComponentStyles _componentStyles;
  ViewScoreboardComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import6.document.createElement('acx-scoreboard');
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:angular_components/lib/scorecard/scoreboard.dart' : null);
  }

  @override
  ComponentRef<import2.ScoreboardComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import6.document;
    _el_0 = import12.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'acx-scoreboard');
    addShimC(_el_0);
    final _anchor_1 = import12.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_ScoreboardComponent1);
    _NgIf_1_9 = NgIf(_appEl_1, _TemplateRef_1_8);
    final _el_2 = import12.appendDiv(doc, _el_0);
    this.updateChildClass(_el_2, 'scorecard-bar');
    import12.setAttribute(_el_2, 'scorecardBar', '');
    addShimC(_el_2);
    _ScorecardBarDirective_2_5 = (import10.isDevMode
        ? import14.debugInjectorWrap(import5.ScorecardBarDirective, () {
            return import5.ScorecardBarDirective(parentView.injectorGet(import15.DomService, viewData.parentIndex), _el_2, parentView.injectorGetOptional(const import16.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex));
          })
        : import5.ScorecardBarDirective(parentView.injectorGet(import15.DomService, viewData.parentIndex), _el_2, parentView.injectorGetOptional(const import16.OpaqueToken<dynamic>('isRtl'), viewData.parentIndex)));
    project(_el_2, 0);
    final _anchor_3 = import12.appendAnchor(_el_0);
    _appEl_3 = ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_ScoreboardComponent2);
    _NgIf_3_9 = NgIf(_appEl_3, _TemplateRef_3_8);
    _ctx.scorecardBar = _ScorecardBarDirective_2_5;
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    _NgIf_1_9.ngIf = _ctx.isScrollable;
    final currVal_3 = _ctx.isVertical;
    if (import17.checkBinding(_expr_3, currVal_3)) {
      _ScorecardBarDirective_2_5.isVertical = currVal_3;
      _expr_3 = currVal_3;
    }
    if (((!import17.AppViewUtils.throwOnChanges) && firstCheck)) {
      _ScorecardBarDirective_2_5.ngOnInit();
    }
    _NgIf_3_9.ngIf = _ctx.isScrollable;
    _appEl_1.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
    final bool currVal_0 = (!_ctx.isVertical);
    if (import17.checkBinding(_expr_0, currVal_0)) {
      import12.updateClassBinding(_el_0, 'acx-scoreboard-horizontal', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.isVertical;
    if (import17.checkBinding(_expr_1, currVal_1)) {
      import12.updateClassBinding(_el_0, 'acx-scoreboard-vertical', currVal_1);
      _expr_1 = currVal_1;
    }
    if ((!import17.AppViewUtils.throwOnChanges)) {
      _ScorecardBarDirective_2_5.ngAfterViewChecked();
    }
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _appEl_3.destroyNestedViews();
    _ScorecardBarDirective_2_5.ngOnDestroy();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import7.ComponentStyles.scoped(styles$ScoreboardComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.ScoreboardComponent> _ScoreboardComponentNgFactory = const ComponentFactory('acx-scoreboard', viewFactory_ScoreboardComponentHost0);
ComponentFactory<import2.ScoreboardComponent> get ScoreboardComponentNgFactory {
  return _ScoreboardComponentNgFactory;
}

class _ViewScoreboardComponent1 extends AppView<import2.ScoreboardComponent> {
  import18.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import19.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import20.ViewMaterialIconComponent0 _compView_1;
  import21.MaterialIconComponent _MaterialIconComponent_1_5;
  bool _expr_0;
  var _expr_2;
  import6.Element _el_0;
  import6.Element _el_1;
  _ViewScoreboardComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ScoreboardComponent> build() {
    final _ctx = ctx;
    _compView_0 = import18.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'scroll-button scroll-back-button');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import10.isDevMode
        ? import14.debugInjectorWrap(import22.AcxDarkTheme, () {
            return import22.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import16.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import22.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import16.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import19.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _compView_1 = import20.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import21.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler0(_ctx.scrollBack));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import22.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import19.MaterialButtonComponent) || identical(token, import23.ButtonDirective)) || identical(token, import24.HasDisabled))) {
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
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    changed = false;
    final currVal_2 = _ctx.backIconType;
    if (import17.checkBinding(_expr_2, currVal_2)) {
      _MaterialIconComponent_1_5.icon = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    final currVal_0 = _ctx.atScorecardBarStart;
    if (import17.checkBinding(_expr_0, currVal_0)) {
      import12.updateClassBindingNonHtml(_el_0, 'hide', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    if (firstCheck) {
      if (!identical(import2.ScoreboardComponent.scrollScorecardBarBack, null)) {
        import12.updateAttribute(_el_1, 'aria-label', import2.ScoreboardComponent.scrollScorecardBarBack);
      }
    }
    _compView_0.detectChanges();
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _compView_1.destroyInternalState();
  }
}

AppView<void> viewFactory_ScoreboardComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewScoreboardComponent1(parentView, parentIndex);
}

class _ViewScoreboardComponent2 extends AppView<import2.ScoreboardComponent> {
  import18.ViewMaterialButtonComponent0 _compView_0;
  dynamic _AcxDarkTheme_0_5;
  import19.MaterialButtonComponent _MaterialButtonComponent_0_6;
  import20.ViewMaterialIconComponent0 _compView_1;
  import21.MaterialIconComponent _MaterialIconComponent_1_5;
  bool _expr_0;
  var _expr_2;
  import6.Element _el_0;
  import6.Element _el_1;
  _ViewScoreboardComponent2(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ScoreboardComponent> build() {
    final _ctx = ctx;
    _compView_0 = import18.ViewMaterialButtonComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    this.updateChildClassNonHtml(_el_0, 'scroll-button scroll-forward-button');
    addShimC(_el_0);
    _AcxDarkTheme_0_5 = (import10.isDevMode
        ? import14.debugInjectorWrap(import22.AcxDarkTheme, () {
            return import22.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import16.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex));
          })
        : import22.AcxDarkTheme(parentView.parentView.injectorGetOptional(const import16.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex)));
    _MaterialButtonComponent_0_6 = import19.MaterialButtonComponent(_el_0, _AcxDarkTheme_0_5, _compView_0, null);
    _compView_1 = import20.ViewMaterialIconComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    addShimC(_el_1);
    _MaterialIconComponent_1_5 = import21.MaterialIconComponent(_el_1);
    _compView_1.create0(_MaterialIconComponent_1_5);
    _compView_0.create(_MaterialButtonComponent_0_6, [
      [_el_1]
    ]);
    final subscription_0 = _MaterialButtonComponent_0_6.trigger.listen(eventHandler0(_ctx.scrollForward));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((nodeIndex <= 1)) {
      if (identical(token, import22.AcxDarkTheme)) {
        return _AcxDarkTheme_0_5;
      }
      if (((identical(token, import19.MaterialButtonComponent) || identical(token, import23.ButtonDirective)) || identical(token, import24.HasDisabled))) {
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
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    changed = false;
    final currVal_2 = _ctx.forwardIconType;
    if (import17.checkBinding(_expr_2, currVal_2)) {
      _MaterialIconComponent_1_5.icon = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    final currVal_0 = _ctx.atScorecardBarEnd;
    if (import17.checkBinding(_expr_0, currVal_0)) {
      import12.updateClassBindingNonHtml(_el_0, 'hide', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectHostChanges(firstCheck);
    if (firstCheck) {
      if (!identical(import2.ScoreboardComponent.scrollScorecardBarForward, null)) {
        import12.updateAttribute(_el_1, 'aria-label', import2.ScoreboardComponent.scrollScorecardBarForward);
      }
    }
    _compView_0.detectChanges();
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _compView_1.destroyInternalState();
  }
}

AppView<void> viewFactory_ScoreboardComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewScoreboardComponent2(parentView, parentIndex);
}

final List<dynamic> styles$ScoreboardComponentHost = const [];

class _ViewScoreboardComponentHost0 extends AppView<import2.ScoreboardComponent> {
  ViewScoreboardComponent0 _compView_0;
  import2.ScoreboardComponent _ScoreboardComponent_0_5;
  _ViewScoreboardComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.ScoreboardComponent> build() {
    _compView_0 = ViewScoreboardComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ScoreboardComponent_0_5 = (import10.isDevMode
        ? import14.debugInjectorWrap(import2.ScoreboardComponent, () {
            return import2.ScoreboardComponent(null, this.injectorGet(import15.DomService, viewData.parentIndex), _compView_0);
          })
        : import2.ScoreboardComponent(null, this.injectorGet(import15.DomService, viewData.parentIndex), _compView_0));
    _ScoreboardComponent_0_5.scoreCards = [];
    _compView_0.create(_ScoreboardComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _ScoreboardComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (((!import17.AppViewUtils.throwOnChanges) && firstCheck)) {
      _ScoreboardComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _ScoreboardComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.ScoreboardComponent> viewFactory_ScoreboardComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewScoreboardComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ScoreboardComponent, ScoreboardComponentNgFactory);
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
