// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_chip.dart';
export 'material_chip.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref1;
import 'package:angular_components/focus/focus.template.dart' as _ref2;
import 'package:angular_components/model/selection/selection_model.template.dart' as _ref3;
import 'package:angular_components/model/ui/has_renderer.template.dart' as _ref4;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref5;
import 'package:angular_components/material_chips/material_chip.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_chip.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import6;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import14;
import 'package:angular/src/runtime/interpolate.dart' as import15;
import '../button_decorator/button_decorator.template.dart' as import16;
import '../button_decorator/button_decorator.dart' as import17;
import '../model/ui/has_renderer.dart' as import18;

final List<dynamic> styles$MaterialChipComponent = [import0.styles];

class ViewMaterialChipComponent0<T> extends AppView<import2.MaterialChipComponent<T>> {
  final import3.TextBinding _textBinding_2 = import3.TextBinding();
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  ViewContainer _appEl_4;
  NgIf _NgIf_4_9;
  var _expr_1;
  import6.DivElement _el_1;
  static import7.ComponentStyles _componentStyles;
  ViewMaterialChipComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import6.document.createElement('material-chip');
    this.updateChildClassNonHtml(rootEl, import2.MaterialChipComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:angular_components/lib/material_chips/material_chip.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialChipComponent<T>> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import12.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, (parentView, parentIndex) {
      return viewFactory_MaterialChipComponent1<T>(parentView, parentIndex);
    });
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    final doc = import6.document;
    _el_1 = import12.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_1, 'content');
    addShimC(_el_1);
    _el_1.append(_textBinding_2.element);
    final _text_3 = import12.appendText(_el_1, ' ');
    project(_el_1, 1);
    final _anchor_4 = import12.appendAnchor(parentRenderNode);
    _appEl_4 = ViewContainer(4, null, this, _anchor_4);
    TemplateRef _TemplateRef_4_8 = TemplateRef(_appEl_4, (parentView, parentIndex) {
      return viewFactory_MaterialChipComponent2<T>(parentView, parentIndex);
    });
    _NgIf_4_9 = NgIf(_appEl_4, _TemplateRef_4_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = _ctx.hasLeftIcon;
    _NgIf_4_9.ngIf = _ctx.removable;
    _appEl_0.detectChangesInNestedViews();
    _appEl_4.detectChangesInNestedViews();
    final currVal_1 = _ctx.uuid;
    if (import14.checkBinding(_expr_1, currVal_1)) {
      import12.setProperty(_el_1, 'id', currVal_1);
      _expr_1 = currVal_1;
    }
    _textBinding_2.updateText(import15.interpolateString0(_ctx.label));
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
    _appEl_4.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import7.ComponentStyles.scoped(styles$MaterialChipComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialChipComponent> _MaterialChipComponentNgFactory = const ComponentFactory('material-chip', viewFactory_MaterialChipComponentHost0);
ComponentFactory<import2.MaterialChipComponent> get MaterialChipComponentNgFactory {
  return _MaterialChipComponentNgFactory;
}

class _ViewMaterialChipComponent1<T> extends AppView<import2.MaterialChipComponent<T>> {
  _ViewMaterialChipComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialChipComponent<T>> build() {
    final doc = import6.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'left-icon');
    addShimC(_el_0);
    project(_el_0, 0);
    init1(_el_0);
  }
}

AppView<void> viewFactory_MaterialChipComponent1<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialChipComponent1<T>(parentView, parentIndex);
}

class _ViewMaterialChipComponent2<T> extends AppView<import2.MaterialChipComponent<T>> {
  import16.ButtonDirectiveNgCd _ButtonDirective_0_5;
  var _expr_0;
  var _expr_1;
  import6.DivElement _el_0;
  _ViewMaterialChipComponent2(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialChipComponent<T>> build() {
    final _ctx = ctx;
    final doc = import6.document;
    _el_0 = doc.createElement('div');
    import12.setAttribute(_el_0, 'buttonDecorator', '');
    this.updateChildClass(_el_0, 'delete-button');
    addShimC(_el_0);
    _ButtonDirective_0_5 = import16.ButtonDirectiveNgCd(import17.ButtonDirective(_el_0, null));
    final _el_1 = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    _el_0.append(_el_1);
    this.updateChildClassNonHtml(_el_1, 'delete-icon');
    import12.setAttribute(_el_1, 'height', '24');
    import12.setAttribute(_el_1, 'viewBox', '0 0 24 24');
    import12.setAttribute(_el_1, 'width', '24');
    import12.setAttribute(_el_1, 'xmlns', 'http://www.w3.org/2000/svg');
    addShimE(_el_1);
    final _el_2 = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    _el_1.append(_el_2);
    import12.setAttribute(_el_2, 'd', 'M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5\n                 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59\n                 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z');
    addShimE(_el_2);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler1(_ctx.removeChip));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.ButtonDirective) && (nodeIndex <= 2))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.deleteButtonAriaMessage;
    if (import14.checkBinding(_expr_0, currVal_0)) {
      import12.updateAttribute(_el_0, 'aria-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.uuid;
    if (import14.checkBinding(_expr_1, currVal_1)) {
      import12.updateAttribute(_el_0, 'aria-describedby', currVal_1);
      _expr_1 = currVal_1;
    }
    _ButtonDirective_0_5.detectHostChanges(this, _el_0);
  }
}

AppView<void> viewFactory_MaterialChipComponent2<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialChipComponent2<T>(parentView, parentIndex);
}

final List<dynamic> styles$MaterialChipComponentHost = const [];

class _ViewMaterialChipComponentHost0<T> extends AppView<import2.MaterialChipComponent<T>> {
  ViewMaterialChipComponent0<T> _compView_0;
  import2.MaterialChipComponent<T> _MaterialChipComponent_0_5;
  _ViewMaterialChipComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialChipComponent<T>> build() {
    _compView_0 = ViewMaterialChipComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialChipComponent_0_5 = import2.MaterialChipComponent(rootEl);
    _compView_0.create(_MaterialChipComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialChipComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import18.HasRenderer) && (0 == nodeIndex))) {
      return _MaterialChipComponent_0_5;
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
  }
}

AppView<import2.MaterialChipComponent<T>> viewFactory_MaterialChipComponentHost0<T>(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialChipComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialChipComponent, MaterialChipComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
