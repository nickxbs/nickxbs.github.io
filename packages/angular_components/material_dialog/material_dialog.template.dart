// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_dialog.dart';
export 'material_dialog.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/focus/focus_trap.template.dart' as _ref1;
import 'package:angular_components/laminate/components/modal/modal.template.dart' as _ref2;
import 'package:angular_components/model/a11y/keyboard_handler_mixin.template.dart' as _ref3;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref4;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref5;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref6;
import 'package:angular_components/material_dialog/material_dialog.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_dialog.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import '../focus/focus_trap.template.dart' as import4;
import '../focus/focus_trap.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'dart:html' as import8;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import9;
import 'package:angular/src/core/linker/view_type.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/runtime.dart' as import13;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import16;
import 'package:angular/src/runtime/interpolate.dart' as import17;
import 'package:angular/src/di/errors.dart' as import18;
import '../utils/browser/dom_service/dom_service.dart' as import19;
import '../laminate/components/modal/modal.dart' as import20;

final List<dynamic> styles$MaterialDialogComponent = [import0.styles];

class ViewMaterialDialogComponent0 extends AppView<import2.MaterialDialogComponent> {
  final import3.TextBinding _textBinding_4 = import3.TextBinding();
  import4.ViewFocusTrapComponent0 _compView_0;
  import5.FocusTrapComponent _FocusTrapComponent_0_5;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_9;
  ViewContainer _appEl_6;
  NgIf _NgIf_6_9;
  bool _expr_1;
  bool _expr_2;
  bool _expr_3;
  var _expr_5;
  import8.DivElement _el_3;
  import8.Element _el_5;
  static import9.ComponentStyles _componentStyles;
  ViewMaterialDialogComponent0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import8.document.createElement('material-dialog');
    import12.updateAttribute(rootEl, 'role', import2.MaterialDialogComponent.hostRole);
    import12.updateAttribute(rootEl, 'aria-modal', import2.MaterialDialogComponent.ariaModel);
  }
  static String get _debugComponentUrl {
    return (import13.isDevMode ? 'asset:angular_components/lib/material_dialog/material_dialog.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialDialogComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import4.ViewFocusTrapComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _FocusTrapComponent_0_5 = import5.FocusTrapComponent();
    final doc = import8.document;
    final _el_1 = doc.createElement('div');
    this.updateChildClass(_el_1, 'wrapper');
    addShimC(_el_1);
    final _anchor_2 = import12.appendAnchor(_el_1);
    _appEl_2 = ViewContainer(2, 1, this, _anchor_2);
    TemplateRef _TemplateRef_2_8 = TemplateRef(_appEl_2, viewFactory_MaterialDialogComponent1);
    _NgIf_2_9 = NgIf(_appEl_2, _TemplateRef_2_8);
    _el_3 = import12.appendDiv(doc, _el_1);
    this.updateChildClass(_el_3, 'error');
    addShimC(_el_3);
    _el_3.append(_textBinding_4.element);
    _el_5 = import12.appendElement(doc, _el_1, 'main');
    import12.setAttribute(_el_5, 'role', 'presentation');
    addShimE(_el_5);
    project(_el_5, 1);
    final _anchor_6 = import12.appendAnchor(_el_1);
    _appEl_6 = ViewContainer(6, 1, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_MaterialDialogComponent2);
    _NgIf_6_9 = NgIf(_appEl_6, _TemplateRef_6_8);
    _compView_0.create(_FocusTrapComponent_0_5, [
      [_el_1]
    ]);
    _el_0.addEventListener('keyup', eventHandler1(_ctx.onKeyUp));
    _ctx.main = _el_5;
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_2_9.ngIf = _ctx.shouldShowHeader;
    _NgIf_6_9.ngIf = _ctx.shouldShowFooter;
    _appEl_2.detectChangesInNestedViews();
    _appEl_6.detectChangesInNestedViews();
    final currVal_1 = (_ctx.error != null);
    if (import16.checkBinding(_expr_1, currVal_1)) {
      import12.updateClassBinding(_el_3, 'expanded', currVal_1);
      _expr_1 = currVal_1;
    }
    _textBinding_4.updateText(import17.interpolateString0(_ctx.error));
    final currVal_2 = _ctx.shouldShowTopScrollStroke;
    if (import16.checkBinding(_expr_2, currVal_2)) {
      import12.updateClassBinding(_el_5, 'top-scroll-stroke', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.shouldShowBottomScrollStroke;
    if (import16.checkBinding(_expr_3, currVal_3)) {
      import12.updateClassBinding(_el_5, 'bottom-scroll-stroke', currVal_3);
      _expr_3 = currVal_3;
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_2.destroyNestedViews();
    _appEl_6.destroyNestedViews();
    _compView_0.destroyInternalState();
    _FocusTrapComponent_0_5.ngOnDestroy();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    final currVal_5 = _ctx.headerId;
    if (import16.checkBinding(_expr_5, currVal_5)) {
      import12.updateAttribute(rootEl, 'aria-labelledby', currVal_5);
      _expr_5 = currVal_5;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import9.ComponentStyles.scoped(styles$MaterialDialogComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialDialogComponent> _MaterialDialogComponentNgFactory = const ComponentFactory('material-dialog', viewFactory_MaterialDialogComponentHost0);
ComponentFactory<import2.MaterialDialogComponent> get MaterialDialogComponentNgFactory {
  return _MaterialDialogComponentNgFactory;
}

class _ViewMaterialDialogComponent1 extends AppView<import2.MaterialDialogComponent> {
  var _expr_0;
  import8.Element _el_0;
  _ViewMaterialDialogComponent1(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialDialogComponent> build() {
    final doc = import8.document;
    _el_0 = doc.createElement('header');
    import12.setAttribute(_el_0, 'role', 'presentation');
    addShimE(_el_0);
    project(_el_0, 0);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.headerId;
    if (import16.checkBinding(_expr_0, currVal_0)) {
      import12.updateAttribute(_el_0, 'id', currVal_0);
      _expr_0 = currVal_0;
    }
  }
}

AppView<void> viewFactory_MaterialDialogComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDialogComponent1(parentView, parentIndex);
}

class _ViewMaterialDialogComponent2 extends AppView<import2.MaterialDialogComponent> {
  _ViewMaterialDialogComponent2(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.MaterialDialogComponent> build() {
    final doc = import8.document;
    final _el_0 = doc.createElement('footer');
    import12.setAttribute(_el_0, 'role', 'presentation');
    addShimE(_el_0);
    project(_el_0, 2);
    init1(_el_0);
  }
}

AppView<void> viewFactory_MaterialDialogComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDialogComponent2(parentView, parentIndex);
}

final List<dynamic> styles$MaterialDialogComponentHost = const [];

class _ViewMaterialDialogComponentHost0 extends AppView<import2.MaterialDialogComponent> {
  ViewMaterialDialogComponent0 _compView_0;
  import2.MaterialDialogComponent _MaterialDialogComponent_0_5;
  _ViewMaterialDialogComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialDialogComponent> build() {
    _compView_0 = ViewMaterialDialogComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialDialogComponent_0_5 = (import13.isDevMode
        ? import18.debugInjectorWrap(import2.MaterialDialogComponent, () {
            return import2.MaterialDialogComponent(rootEl, this.injectorGet(import19.DomService, viewData.parentIndex), _compView_0, this.injectorGetOptional(import20.ModalComponent, viewData.parentIndex));
          })
        : import2.MaterialDialogComponent(rootEl, this.injectorGet(import19.DomService, viewData.parentIndex), _compView_0, this.injectorGetOptional(import20.ModalComponent, viewData.parentIndex)));
    _compView_0.create(_MaterialDialogComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialDialogComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import16.AppViewUtils.throwOnChanges)) {
      _MaterialDialogComponent_0_5.ngAfterContentChecked();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _MaterialDialogComponent_0_5.ngOnDestroy();
  }
}

AppView<import2.MaterialDialogComponent> viewFactory_MaterialDialogComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialDialogComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialDialogComponent, MaterialDialogComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
