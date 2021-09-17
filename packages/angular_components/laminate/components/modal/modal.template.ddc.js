define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/src/laminate/components/modal/modal_controller_directive', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/laminate/overlay/overlay.template', 'packages/angular_components/model/action/async_action.template', 'packages/angular_components/src/laminate/components/modal/modal_controller_directive.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__laminate__components__modal__modal_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__src__laminate__components__modal__modal_controller_directive, packages__angular_components__laminate__components__modal__modal, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__content__deferred_content_aware, packages__angular__angular$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__laminate__overlay__overlay$46template, packages__angular_components__model__action__async_action$46template, packages__angular_components__src__laminate__components__modal__modal_controller_directive$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const modal_controller_directive = packages__angular_components__src__laminate__components__modal__modal_controller_directive.src__laminate__components__modal__modal_controller_directive;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const overlay$46template = packages__angular_components__laminate__overlay__overlay$46template.laminate__overlay__overlay$46template;
  const async_action$46template = packages__angular_components__model__action__async_action$46template.model__action__async_action$46template;
  const modal_controller_directive$46template = packages__angular_components__src__laminate__components__modal__modal_controller_directive$46template.src__laminate__components__modal__modal_controller_directive$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var modal$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var ModalComponentL = () => (ModalComponentL = dart.constFn(dart.legacy(modal.ModalComponent)))();
  var OverlayServiceL = () => (OverlayServiceL = dart.constFn(dart.legacy(overlay_service.OverlayService)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var ModalL = () => (ModalL = dart.constFn(dart.legacy(modal.Modal)))();
  var GlobalModalStackL = () => (GlobalModalStackL = dart.constFn(dart.legacy(modal.GlobalModalStack)))();
  var VoidToModalComponentL = () => (VoidToModalComponentL = dart.constFn(dart.fnType(ModalComponentL(), [])))();
  var ComponentRefOfModalComponentL = () => (ComponentRefOfModalComponentL = dart.constFn(component_factory.ComponentRef$(ModalComponentL())))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var VoidToGlobalModalStackL = () => (VoidToGlobalModalStackL = dart.constFn(dart.fnType(GlobalModalStackL(), [])))();
  var ComponentFactoryOfModalComponentL = () => (ComponentFactoryOfModalComponentL = dart.constFn(component_factory.ComponentFactory$(ModalComponentL())))();
  var AppViewOfModalComponentL = () => (AppViewOfModalComponentL = dart.constFn(app_view.AppView$(ModalComponentL())))();
  var AppViewLOfModalComponentL = () => (AppViewLOfModalComponentL = dart.constFn(dart.legacy(AppViewOfModalComponentL())))();
  var AppViewLAndintLToAppViewLOfModalComponentL = () => (AppViewLAndintLToAppViewLOfModalComponentL = dart.constFn(dart.fnType(AppViewLOfModalComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/laminate/components/modal/modal.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(modal$46template.viewFactory_ModalComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C1() {
      return C1 = dart.constList([], dart.dynamic);
    },
    get C3() {
      return C3 = dart.fn(modal$46template.viewFactory_ModalComponentHost0, AppViewLAndintLToAppViewLOfModalComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfModalComponentL().prototype,
        [ComponentFactory__viewFactory]: C3 || CT.C3,
        [ComponentFactory_selector]: "modal"
      });
    }
  }, false);
  var _appEl_1 = dart.privateName(modal$46template, "_appEl_1");
  var _ModalControllerDirective_1_9 = dart.privateName(modal$46template, "_ModalControllerDirective_1_9");
  var _expr_0 = dart.privateName(modal$46template, "_expr_0");
  var _expr_1 = dart.privateName(modal$46template, "_expr_1");
  var C0;
  modal$46template.ViewModalComponent0 = class ViewModalComponent0 extends app_view.AppView$(dart.legacy(modal.ModalComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/laminate/components/modal/modal.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = dom_helpers.appendText(parentRenderNode, "    ");
      let _anchor_1 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_ModalControllerDirective_1_9] = new modal_controller_directive.ModalControllerDirective.new(_TemplateRef_1_8, this[_appEl_1]);
      let _text_2 = dom_helpers.appendText(parentRenderNode, "\n  ");
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.resolvedOverlayRef;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_ModalControllerDirective_1_9].overlay = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_ModalControllerDirective_1_9].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.uniquePaneId;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this.rootEl, "pane-id", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    initComponentStyles() {
      let styles = modal$46template.ViewModalComponent0._componentStyles;
      if (styles == null) {
        modal$46template.ViewModalComponent0._componentStyles = styles = modal$46template.ViewModalComponent0._componentStyles = new style_encapsulation._UnscopedComponentStyles.new(modal$46template.styles$ModalComponent, modal$46template.ViewModalComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (modal$46template.ViewModalComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_ModalControllerDirective_1_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    modal$46template.ViewModalComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("modal"));
  }).prototype = modal$46template.ViewModalComponent0.prototype;
  dart.addTypeTests(modal$46template.ViewModalComponent0);
  dart.addTypeCaches(modal$46template.ViewModalComponent0);
  dart.setLibraryUri(modal$46template.ViewModalComponent0, L0);
  dart.setFieldSignature(modal$46template.ViewModalComponent0, () => ({
    __proto__: dart.getFields(modal$46template.ViewModalComponent0.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_ModalControllerDirective_1_9]: dart.fieldType(dart.legacy(modal_controller_directive.ModalControllerDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(modal$46template.ViewModalComponent0, {
    /*modal$46template.ViewModalComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  modal$46template._ViewModalComponent1 = class _ViewModalComponent1 extends app_view.AppView$(dart.legacy(modal.ModalComponent)) {
    build() {
      let t0;
      let _text_0 = dom_helpers.createText("\n      ");
      let _text_1 = dom_helpers.createText("\n    ");
      this.init((t0 = [_text_0], (() => {
        t0[$addAll](core.Iterable.as(this.projectedNodes[$_get](0)));
        t0[$addAll]([_text_1]);
        return t0;
      })()), null);
    }
  };
  (modal$46template._ViewModalComponent1.new = function(parentView, parentIndex) {
    modal$46template._ViewModalComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = modal$46template._ViewModalComponent1.prototype;
  dart.addTypeTests(modal$46template._ViewModalComponent1);
  dart.addTypeCaches(modal$46template._ViewModalComponent1);
  dart.setLibraryUri(modal$46template._ViewModalComponent1, L0);
  var _compView_0 = dart.privateName(modal$46template, "_compView_0");
  var _ModalComponent_0_5 = dart.privateName(modal$46template, "_ModalComponent_0_5");
  modal$46template._ViewModalComponentHost0 = class _ViewModalComponentHost0 extends app_view.AppView$(dart.legacy(modal.ModalComponent)) {
    build() {
      this[_compView_0] = new modal$46template.ViewModalComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ModalComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(ModalComponentL(), dart.wrapType(ModalComponentL()), dart.fn(() => new modal.ModalComponent.new(OverlayServiceL().as(this.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), this.rootEl, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ModalL().as(this.injectorGetOptional(dart.wrapType(ModalL()), this.viewData.parentIndex)), GlobalModalStackL().as(this.injectorGetOptional(dart.wrapType(GlobalModalStackL()), this.viewData.parentIndex))), VoidToModalComponentL())) : new modal.ModalComponent.new(OverlayServiceL().as(this.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), this.rootEl, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ModalL().as(this.injectorGetOptional(dart.wrapType(ModalL()), this.viewData.parentIndex)), GlobalModalStackL().as(this.injectorGetOptional(dart.wrapType(GlobalModalStackL()), this.viewData.parentIndex)));
      this[_compView_0].create(this[_ModalComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfModalComponentL()).new(0, this, this.rootEl, this[_ModalComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(ModalComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(ModalL())) && 0 === nodeIndex) {
        return this[_ModalComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_ModalComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_ModalComponent_0_5].ngOnDestroy();
    }
  };
  (modal$46template._ViewModalComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ModalComponent_0_5] = null;
    modal$46template._ViewModalComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = modal$46template._ViewModalComponentHost0.prototype;
  dart.addTypeTests(modal$46template._ViewModalComponentHost0);
  dart.addTypeCaches(modal$46template._ViewModalComponentHost0);
  dart.setMethodSignature(modal$46template._ViewModalComponentHost0, () => ({
    __proto__: dart.getMethods(modal$46template._ViewModalComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(modal$46template._ViewModalComponentHost0, L0);
  dart.setFieldSignature(modal$46template._ViewModalComponentHost0, () => ({
    __proto__: dart.getFields(modal$46template._ViewModalComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(modal$46template.ViewModalComponent0)),
    [_ModalComponent_0_5]: dart.fieldType(dart.legacy(modal.ModalComponent))
  }));
  modal$46template.viewFactory_ModalComponent1 = function viewFactory_ModalComponent1(parentView, parentIndex) {
    return new modal$46template._ViewModalComponent1.new(parentView, parentIndex);
  };
  modal$46template.viewFactory_ModalComponentHost0 = function viewFactory_ModalComponentHost0(parentView, parentIndex) {
    return new modal$46template._ViewModalComponentHost0.new(parentView, parentIndex);
  };
  modal$46template.initReflector = function initReflector() {
    if (dart.test(modal$46template._visited)) {
      return;
    }
    modal$46template._visited = true;
    reflector.registerFactory(dart.wrapType(GlobalModalStackL()), dart.fn(() => new modal.GlobalModalStack.new(), VoidToGlobalModalStackL()));
    reflector.registerComponent(dart.wrapType(ModalComponentL()), modal$46template.ModalComponentNgFactory);
    angular$46template.initReflector();
    deferred_content_aware$46template.initReflector();
    overlay$46template.initReflector();
    async_action$46template.initReflector();
    modal_controller_directive$46template.initReflector();
    dom_service$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(modal$46template, {
    get ModalComponentNgFactory() {
      return modal$46template._ModalComponentNgFactory;
    }
  });
  var C1;
  var C3;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  dart.defineLazy(modal$46template, {
    /*modal$46template.styles$ModalComponent*/get styles$ModalComponent() {
      return C1 || CT.C1;
    },
    /*modal$46template._ModalComponentNgFactory*/get _ModalComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*modal$46template.styles$ModalComponentHost*/get styles$ModalComponentHost() {
      return C1 || CT.C1;
    },
    /*modal$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/laminate/components/modal/modal.template", {
    "package:angular_components/laminate/components/modal/modal.template.dart": modal$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["modal.template.dart"],"names":[],"mappings":"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","file":"modal.template.ddc.js"}');
  // Exports:
  return {
    laminate__components__modal__modal$46template: modal$46template
  };
}));

//# sourceMappingURL=modal.template.ddc.js.map
