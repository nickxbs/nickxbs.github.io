// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_select_searchbox.dart';
export 'material_select_searchbox.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus_interface.template.dart' as _ref1;
import 'package:angular_components/material_input/material_input.template.dart' as _ref2;
import 'package:angular_components/mixins/focusable_mixin.template.dart' as _ref3;
import 'package:angular_components/model/selection/select.template.dart' as _ref4;
import 'package:angular_components/utils/async/async.template.dart' as _ref5;
import 'package:angular_components/utils/browser/events/events.template.dart' as _ref6;
import 'package:angular_forms/angular_forms.template.dart' as _ref7;
import 'package:angular_components/material_select/material_select_searchbox.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_select_searchbox.dart' as import2;
import '../material_input/material_input.template.dart' as import3;
import '../material_input/deferred_validator.dart' as import4;
import 'package:angular_forms/src/directives/ng_model.dart' as import5;
import '../material_input/material_input.dart' as import6;
import '../material_input/material_input_default_value_accessor.dart' as import7;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import8;
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import11;
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/interpolate.dart' as import14;
import 'package:angular/src/runtime/dom_helpers.dart' as import15;
import 'package:angular/src/core/di/opaque_token.dart' as import16;
import 'package:angular_forms/src/directives/ng_control.dart' as import17;
import '../material_input/base_material_input.dart' as import18;
import '../utils/angular/reference/reference.dart' as import19;
import '../focus/focus_interface.dart' as import20;
import '../interfaces/has_disabled.dart' as import21;
import 'package:angular/src/core/linker/app_view_utils.dart' as import22;

final List<dynamic> styles$MaterialSelectSearchboxComponent = [import0.styles];

class ViewMaterialSelectSearchboxComponent0 extends AppView<import2.MaterialSelectSearchboxComponent> {
  import3.ViewMaterialInputComponent0 _compView_0;
  import4.DeferredValidator _DeferredValidator_0_5;
  List<dynamic> _NgValidators_0_6;
  import5.NgModel _NgModel_0_7;
  import6.MaterialInputComponent _MaterialInputComponent_0_9;
  import7.MaterialInputDefaultValueAccessor _MaterialInputDefaultValueAccessor_0_11;
  String _expr_1;
  static import8.ComponentStyles _componentStyles;
  ViewMaterialSelectSearchboxComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import11.document.createElement('material-select-searchbox');
  }
  static String get _debugComponentUrl {
    return (import12.isDevMode ? 'asset:angular_components/lib/material_select/material_select_searchbox.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialSelectSearchboxComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import11.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import3.ViewMaterialInputComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    this.updateChildClassNonHtml(_el_0, import14.interpolateString2('', 'searchbox-input', ' ', import6.MaterialInputComponent.hostClass, ''));
    import15.setAttribute(_el_0, 'leadingGlyph', 'search');
    addShimC(_el_0);
    _DeferredValidator_0_5 = import4.DeferredValidator();
    _NgValidators_0_6 = [_DeferredValidator_0_5];
    _NgModel_0_7 = import5.NgModel(_NgValidators_0_6, null);
    _MaterialInputComponent_0_9 = import6.MaterialInputComponent(null, null, null, _NgModel_0_7, _compView_0, _DeferredValidator_0_5);
    _MaterialInputDefaultValueAccessor_0_11 = import7.MaterialInputDefaultValueAccessor(_MaterialInputComponent_0_9, _NgModel_0_7);
    _compView_0.create(_MaterialInputComponent_0_9, [const [], const []]);
    _el_0.addEventListener('keypress', eventHandler1(_ctx.stopSpaceKeyPropagation));
    final subscription_0 = _NgModel_0_7.update.listen(eventHandler1(_handle_ngModelChange_0_2));
    final subscription_1 = _MaterialInputComponent_0_9.onFocus.listen(eventHandler1(_ctx.handleFocus));
    _ctx.input = _MaterialInputComponent_0_9;
    init(const [], [subscription_0, subscription_1]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import4.DeferredValidator)) {
        return _DeferredValidator_0_5;
      }
      if (identical(token, const import16.MultiToken<dynamic>('NgValidators'))) {
        return _NgValidators_0_6;
      }
      if ((identical(token, import5.NgModel) || identical(token, import17.NgControl))) {
        return _NgModel_0_7;
      }
      if (((((identical(token, import6.MaterialInputComponent) || identical(token, import18.BaseMaterialInput)) || identical(token, import19.ReferenceDirective)) || identical(token, import20.Focusable)) || identical(token, import21.HasDisabled))) {
        return _MaterialInputComponent_0_9;
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
    _NgModel_0_7.model = _ctx.inputText;
    _NgModel_0_7.ngAfterChanges();
    if (((!import22.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_0_7.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialInputComponent_0_9.displayBottomPanel = false;
      changed = true;
      _MaterialInputComponent_0_9.leadingGlyph = 'search';
      changed = true;
    }
    final currVal_1 = _ctx.label;
    if (import22.checkBinding(_expr_1, currVal_1)) {
      _MaterialInputComponent_0_9.label = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
    if ((!import22.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _MaterialInputComponent_0_9.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialInputComponent_0_9.ngOnDestroy();
    _MaterialInputDefaultValueAccessor_0_11.ngOnDestroy();
  }

  void _handle_ngModelChange_0_2($event) {
    final _ctx = ctx;
    _ctx.inputText = $event;
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import8.ComponentStyles.scoped(styles$MaterialSelectSearchboxComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialSelectSearchboxComponent> _MaterialSelectSearchboxComponentNgFactory = const ComponentFactory('material-select-searchbox', viewFactory_MaterialSelectSearchboxComponentHost0);
ComponentFactory<import2.MaterialSelectSearchboxComponent> get MaterialSelectSearchboxComponentNgFactory {
  return _MaterialSelectSearchboxComponentNgFactory;
}

final List<dynamic> styles$MaterialSelectSearchboxComponentHost = const [];

class _ViewMaterialSelectSearchboxComponentHost0 extends AppView<import2.MaterialSelectSearchboxComponent> {
  ViewMaterialSelectSearchboxComponent0 _compView_0;
  import2.MaterialSelectSearchboxComponent _MaterialSelectSearchboxComponent_0_5;
  _ViewMaterialSelectSearchboxComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialSelectSearchboxComponent> build() {
    _compView_0 = ViewMaterialSelectSearchboxComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialSelectSearchboxComponent_0_5 = import2.MaterialSelectSearchboxComponent();
    _compView_0.create(_MaterialSelectSearchboxComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialSelectSearchboxComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import20.Focusable) && (0 == nodeIndex))) {
      return _MaterialSelectSearchboxComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialSelectSearchboxComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialSelectSearchboxComponent> viewFactory_MaterialSelectSearchboxComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialSelectSearchboxComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialSelectSearchboxComponent, MaterialSelectSearchboxComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
