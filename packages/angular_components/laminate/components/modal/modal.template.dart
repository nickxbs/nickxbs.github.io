// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'modal.dart';
export 'modal.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/content/deferred_content_aware.template.dart' as _ref1;
import 'package:angular_components/laminate/overlay/overlay.template.dart' as _ref2;
import 'package:angular_components/model/action/async_action.template.dart' as _ref3;
import 'package:angular_components/src/laminate/components/modal/modal_controller_directive.template.dart' as _ref4;
import 'package:angular_components/utils/browser/dom_service/dom_service.template.dart' as _ref5;
import 'package:angular_components/utils/disposer/disposer.template.dart' as _ref6;
import 'package:angular/src/core/linker/app_view.dart';
import 'modal.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import '../../../src/laminate/components/modal/modal_controller_directive.dart' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import12;
import 'package:angular/src/di/errors.dart' as import13;
import '../../../src/laminate/overlay/overlay_service.dart' as import14;
import '../../../utils/browser/dom_service/dom_service.dart' as import15;
import '../../../content/deferred_content_aware.dart' as import16;

final List<dynamic> styles$ModalComponent = const [];

class ViewModalComponent0 extends AppView<import1.ModalComponent> {
  ViewContainer _appEl_1;
  import3.ModalControllerDirective _ModalControllerDirective_1_9;
  var _expr_0;
  var _expr_1;
  static import4.ComponentStyles _componentStyles;
  ViewModalComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import7.document.createElement('modal');
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:angular_components/lib/laminate/components/modal/modal.dart' : null);
  }

  @override
  ComponentRef<import1.ModalComponent> build() {
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import10.appendText(parentRenderNode, '    ');
    final _anchor_1 = import10.appendAnchor(parentRenderNode);
    _appEl_1 = ViewContainer(1, null, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_ModalComponent1);
    _ModalControllerDirective_1_9 = import3.ModalControllerDirective(_TemplateRef_1_8, _appEl_1);
    final _text_2 = import10.appendText(parentRenderNode, '\n  ');
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.resolvedOverlayRef;
    if (import12.checkBinding(_expr_0, currVal_0)) {
      _ModalControllerDirective_1_9.overlay = currVal_0;
      _expr_0 = currVal_0;
    }
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
    _ModalControllerDirective_1_9.ngOnDestroy();
  }

  void detectHostChanges(bool firstCheck) {
    final _ctx = ctx;
    final currVal_1 = _ctx.uniquePaneId;
    if (import12.checkBinding(_expr_1, currVal_1)) {
      import10.updateAttribute(rootEl, 'pane-id', currVal_1);
      _expr_1 = currVal_1;
    }
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import4.ComponentStyles.unscoped(styles$ModalComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import1.ModalComponent> _ModalComponentNgFactory = const ComponentFactory('modal', viewFactory_ModalComponentHost0);
ComponentFactory<import1.ModalComponent> get ModalComponentNgFactory {
  return _ModalComponentNgFactory;
}

class _ViewModalComponent1 extends AppView<import1.ModalComponent> {
  _ViewModalComponent1(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import1.ModalComponent> build() {
    final _text_0 = import10.createText('\n      ');
    final _text_1 = import10.createText('\n    ');
    init(<dynamic>[_text_0]..addAll(projectedNodes[0])..addAll([_text_1]), null);
  }
}

AppView<void> viewFactory_ModalComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewModalComponent1(parentView, parentIndex);
}

final List<dynamic> styles$ModalComponentHost = const [];

class _ViewModalComponentHost0 extends AppView<import1.ModalComponent> {
  ViewModalComponent0 _compView_0;
  import1.ModalComponent _ModalComponent_0_5;
  _ViewModalComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.ModalComponent> build() {
    _compView_0 = ViewModalComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ModalComponent_0_5 = (import8.isDevMode
        ? import13.debugInjectorWrap(import1.ModalComponent, () {
            return import1.ModalComponent(this.injectorGet(import14.OverlayService, viewData.parentIndex), rootEl, this.injectorGet(import15.DomService, viewData.parentIndex), this.injectorGetOptional(import1.Modal, viewData.parentIndex), this.injectorGetOptional(import1.GlobalModalStack, viewData.parentIndex));
          })
        : import1.ModalComponent(this.injectorGet(import14.OverlayService, viewData.parentIndex), rootEl, this.injectorGet(import15.DomService, viewData.parentIndex), this.injectorGetOptional(import1.Modal, viewData.parentIndex), this.injectorGetOptional(import1.GlobalModalStack, viewData.parentIndex)));
    _compView_0.create(_ModalComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _ModalComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((((identical(token, import1.ModalComponent) || identical(token, import16.DeferredContentAware)) || identical(token, import1.Modal)) && (0 == nodeIndex))) {
      return _ModalComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    if ((!import12.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _ModalComponent_0_5.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _ModalComponent_0_5.ngOnDestroy();
  }
}

AppView<import1.ModalComponent> viewFactory_ModalComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewModalComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(GlobalModalStack, () => GlobalModalStack());
  _ngRef.registerComponent(ModalComponent, ModalComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
