define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_dialog/material_dialog', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular/angular.template', 'packages/angular_components/laminate/components/modal/modal.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/material_dialog/material_dialog.scss.css.shim'], (function load__packages__angular_components__material_dialog__material_dialog_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__focus__focus_trap$46template, packages__angular_components__focus__focus_trap, packages__angular__src__runtime__interpolate, packages__angular_components__material_dialog__material_dialog, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__components__modal__modal, packages__angular__angular$46template, packages__angular_components__laminate__components__modal__modal$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_components__material_dialog__material_dialog$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const focus_trap$46template = packages__angular_components__focus__focus_trap$46template.focus__focus_trap$46template;
  const focus_trap = packages__angular_components__focus__focus_trap.focus__focus_trap;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_dialog = packages__angular_components__material_dialog__material_dialog.material_dialog__material_dialog;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const modal$46template = packages__angular_components__laminate__components__modal__modal$46template.laminate__components__modal__modal$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const material_dialog$46scss$46css$46shim = packages__angular_components__material_dialog__material_dialog$46scss$46css$46shim.material_dialog__material_dialog$46scss$46css$46shim;
  var material_dialog$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var MaterialDialogComponentL = () => (MaterialDialogComponentL = dart.constFn(dart.legacy(material_dialog.MaterialDialogComponent)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var ModalComponentL = () => (ModalComponentL = dart.constFn(dart.legacy(modal.ModalComponent)))();
  var VoidToMaterialDialogComponentL = () => (VoidToMaterialDialogComponentL = dart.constFn(dart.fnType(MaterialDialogComponentL(), [])))();
  var ComponentRefOfMaterialDialogComponentL = () => (ComponentRefOfMaterialDialogComponentL = dart.constFn(component_factory.ComponentRef$(MaterialDialogComponentL())))();
  var ComponentFactoryOfMaterialDialogComponentL = () => (ComponentFactoryOfMaterialDialogComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialDialogComponentL())))();
  var AppViewOfMaterialDialogComponentL = () => (AppViewOfMaterialDialogComponentL = dart.constFn(app_view.AppView$(MaterialDialogComponentL())))();
  var AppViewLOfMaterialDialogComponentL = () => (AppViewLOfMaterialDialogComponentL = dart.constFn(dart.legacy(AppViewOfMaterialDialogComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialDialogComponentL = () => (AppViewLAndintLToAppViewLOfMaterialDialogComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialDialogComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_dialog/material_dialog.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_dialog$46template.viewFactory_MaterialDialogComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(material_dialog$46template.viewFactory_MaterialDialogComponent2, AppViewLAndintLToAppViewLOfvoid());
    },
    get C3() {
      return C3 = dart.fn(material_dialog$46template.viewFactory_MaterialDialogComponentHost0, AppViewLAndintLToAppViewLOfMaterialDialogComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfMaterialDialogComponentL().prototype,
        [ComponentFactory__viewFactory]: C3 || CT.C3,
        [ComponentFactory_selector]: "material-dialog"
      });
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _textBinding_4 = dart.privateName(material_dialog$46template, "_textBinding_4");
  var _compView_0 = dart.privateName(material_dialog$46template, "_compView_0");
  var _FocusTrapComponent_0_5 = dart.privateName(material_dialog$46template, "_FocusTrapComponent_0_5");
  var _appEl_2 = dart.privateName(material_dialog$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(material_dialog$46template, "_NgIf_2_9");
  var _appEl_6 = dart.privateName(material_dialog$46template, "_appEl_6");
  var _NgIf_6_9 = dart.privateName(material_dialog$46template, "_NgIf_6_9");
  var _expr_1 = dart.privateName(material_dialog$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_dialog$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_dialog$46template, "_expr_3");
  var _expr_5 = dart.privateName(material_dialog$46template, "_expr_5");
  var _el_3 = dart.privateName(material_dialog$46template, "_el_3");
  var _el_5 = dart.privateName(material_dialog$46template, "_el_5");
  var C0;
  var C1;
  material_dialog$46template.ViewMaterialDialogComponent0 = class ViewMaterialDialogComponent0 extends app_view.AppView$(dart.legacy(material_dialog.MaterialDialogComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_dialog/material_dialog.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new focus_trap$46template.ViewFocusTrapComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_FocusTrapComponent_0_5] = new focus_trap.FocusTrapComponent.new();
      let doc = html.document;
      let _el_1 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_1), "wrapper");
      this.addShimC(HtmlElementL().as(_el_1));
      let _anchor_2 = dom_helpers.appendAnchor(_el_1);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C0 || CT.C0);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this[_el_3] = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(this[_el_3], "error");
      this.addShimC(this[_el_3]);
      this[_el_3][$append](this[_textBinding_4].element);
      this[_el_5] = dom_helpers.appendElement(doc, _el_1, "main");
      dom_helpers.setAttribute(this[_el_5], "role", "presentation");
      this.addShimE(this[_el_5]);
      this.project(this[_el_5], 1);
      let _anchor_6 = dom_helpers.appendAnchor(_el_1);
      this[_appEl_6] = new view_container.ViewContainer.new(6, 1, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C1 || CT.C1);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this[_compView_0].create(this[_FocusTrapComponent_0_5], JSArrayOfObjectL().of([JSArrayOfElementL().of([_el_1])]));
      _el_0[$addEventListener]("keyup", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyUp')));
      _ctx.main = HtmlElementL().as(this[_el_5]);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_2_9].ngIf = _ctx.shouldShowHeader;
      this[_NgIf_6_9].ngIf = _ctx.shouldShowFooter;
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_1 = _ctx.error != null;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBinding(this[_el_3], "expanded", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_textBinding_4].updateText(interpolate.interpolateString0(_ctx.error));
      let currVal_2 = _ctx.shouldShowTopScrollStroke;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_5]), "top-scroll-stroke", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.shouldShowBottomScrollStroke;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_5]), "bottom-scroll-stroke", currVal_3);
        this[_expr_3] = currVal_3;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_FocusTrapComponent_0_5].ngOnDestroy();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_5 = _ctx.headerId;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        dom_helpers.updateAttribute(this.rootEl, "aria-labelledby", currVal_5);
        this[_expr_5] = currVal_5;
      }
    }
    initComponentStyles() {
      let styles = material_dialog$46template.ViewMaterialDialogComponent0._componentStyles;
      if (styles == null) {
        material_dialog$46template.ViewMaterialDialogComponent0._componentStyles = styles = material_dialog$46template.ViewMaterialDialogComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_dialog$46template.styles$MaterialDialogComponent, material_dialog$46template.ViewMaterialDialogComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_dialog$46template.ViewMaterialDialogComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_4] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_FocusTrapComponent_0_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    material_dialog$46template.ViewMaterialDialogComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-dialog"));
    dom_helpers.updateAttribute(this.rootEl, "role", "dialog");
    dom_helpers.updateAttribute(this.rootEl, "aria-modal", "true");
  }).prototype = material_dialog$46template.ViewMaterialDialogComponent0.prototype;
  dart.addTypeTests(material_dialog$46template.ViewMaterialDialogComponent0);
  dart.addTypeCaches(material_dialog$46template.ViewMaterialDialogComponent0);
  dart.setLibraryUri(material_dialog$46template.ViewMaterialDialogComponent0, L0);
  dart.setFieldSignature(material_dialog$46template.ViewMaterialDialogComponent0, () => ({
    __proto__: dart.getFields(material_dialog$46template.ViewMaterialDialogComponent0.__proto__),
    [_textBinding_4]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0]: dart.fieldType(dart.legacy(focus_trap$46template.ViewFocusTrapComponent0)),
    [_FocusTrapComponent_0_5]: dart.fieldType(dart.legacy(focus_trap.FocusTrapComponent)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_el_3]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_5]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(material_dialog$46template.ViewMaterialDialogComponent0, {
    /*material_dialog$46template.ViewMaterialDialogComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _expr_0 = dart.privateName(material_dialog$46template, "_expr_0");
  var _el_0 = dart.privateName(material_dialog$46template, "_el_0");
  material_dialog$46template._ViewMaterialDialogComponent1 = class _ViewMaterialDialogComponent1 extends app_view.AppView$(dart.legacy(material_dialog.MaterialDialogComponent)) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("header");
      dom_helpers.setAttribute(this[_el_0], "role", "presentation");
      this.addShimE(this[_el_0]);
      this.project(this[_el_0], 0);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.headerId;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(this[_el_0], "id", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_dialog$46template._ViewMaterialDialogComponent1.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_el_0] = null;
    material_dialog$46template._ViewMaterialDialogComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_dialog$46template._ViewMaterialDialogComponent1.prototype;
  dart.addTypeTests(material_dialog$46template._ViewMaterialDialogComponent1);
  dart.addTypeCaches(material_dialog$46template._ViewMaterialDialogComponent1);
  dart.setLibraryUri(material_dialog$46template._ViewMaterialDialogComponent1, L0);
  dart.setFieldSignature(material_dialog$46template._ViewMaterialDialogComponent1, () => ({
    __proto__: dart.getFields(material_dialog$46template._ViewMaterialDialogComponent1.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  material_dialog$46template._ViewMaterialDialogComponent2 = class _ViewMaterialDialogComponent2 extends app_view.AppView$(dart.legacy(material_dialog.MaterialDialogComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("footer");
      dom_helpers.setAttribute(_el_0, "role", "presentation");
      this.addShimE(_el_0);
      this.project(_el_0, 2);
      this.init1(_el_0);
    }
  };
  (material_dialog$46template._ViewMaterialDialogComponent2.new = function(parentView, parentIndex) {
    material_dialog$46template._ViewMaterialDialogComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_dialog$46template._ViewMaterialDialogComponent2.prototype;
  dart.addTypeTests(material_dialog$46template._ViewMaterialDialogComponent2);
  dart.addTypeCaches(material_dialog$46template._ViewMaterialDialogComponent2);
  dart.setLibraryUri(material_dialog$46template._ViewMaterialDialogComponent2, L0);
  var _MaterialDialogComponent_0_5 = dart.privateName(material_dialog$46template, "_MaterialDialogComponent_0_5");
  material_dialog$46template._ViewMaterialDialogComponentHost0 = class _ViewMaterialDialogComponentHost0 extends app_view.AppView$(dart.legacy(material_dialog.MaterialDialogComponent)) {
    build() {
      this[_compView_0] = new material_dialog$46template.ViewMaterialDialogComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialDialogComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialDialogComponentL(), dart.wrapType(MaterialDialogComponentL()), dart.fn(() => new material_dialog.MaterialDialogComponent.new(this.rootEl, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), this[_compView_0], ModalComponentL().as(this.injectorGetOptional(dart.wrapType(ModalComponentL()), this.viewData.parentIndex))), VoidToMaterialDialogComponentL())) : new material_dialog.MaterialDialogComponent.new(this.rootEl, DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), this[_compView_0], ModalComponentL().as(this.injectorGetOptional(dart.wrapType(ModalComponentL()), this.viewData.parentIndex)));
      this[_compView_0].create(this[_MaterialDialogComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialDialogComponentL()).new(0, this, this.rootEl, this[_MaterialDialogComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_MaterialDialogComponent_0_5].ngAfterContentChecked();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialDialogComponent_0_5].ngOnDestroy();
    }
  };
  (material_dialog$46template._ViewMaterialDialogComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialDialogComponent_0_5] = null;
    material_dialog$46template._ViewMaterialDialogComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_dialog$46template._ViewMaterialDialogComponentHost0.prototype;
  dart.addTypeTests(material_dialog$46template._ViewMaterialDialogComponentHost0);
  dart.addTypeCaches(material_dialog$46template._ViewMaterialDialogComponentHost0);
  dart.setLibraryUri(material_dialog$46template._ViewMaterialDialogComponentHost0, L0);
  dart.setFieldSignature(material_dialog$46template._ViewMaterialDialogComponentHost0, () => ({
    __proto__: dart.getFields(material_dialog$46template._ViewMaterialDialogComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_dialog$46template.ViewMaterialDialogComponent0)),
    [_MaterialDialogComponent_0_5]: dart.fieldType(dart.legacy(material_dialog.MaterialDialogComponent))
  }));
  material_dialog$46template.viewFactory_MaterialDialogComponent1 = function viewFactory_MaterialDialogComponent1(parentView, parentIndex) {
    return new material_dialog$46template._ViewMaterialDialogComponent1.new(parentView, parentIndex);
  };
  material_dialog$46template.viewFactory_MaterialDialogComponent2 = function viewFactory_MaterialDialogComponent2(parentView, parentIndex) {
    return new material_dialog$46template._ViewMaterialDialogComponent2.new(parentView, parentIndex);
  };
  material_dialog$46template.viewFactory_MaterialDialogComponentHost0 = function viewFactory_MaterialDialogComponentHost0(parentView, parentIndex) {
    return new material_dialog$46template._ViewMaterialDialogComponentHost0.new(parentView, parentIndex);
  };
  material_dialog$46template.initReflector = function initReflector() {
    if (dart.test(material_dialog$46template._visited)) {
      return;
    }
    material_dialog$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialDialogComponentL()), material_dialog$46template.MaterialDialogComponentNgFactory);
    angular$46template.initReflector();
    focus_trap$46template.initReflector();
    modal$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    dom_service$46template.initReflector();
    disposer$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.copyProperties(material_dialog$46template, {
    get MaterialDialogComponentNgFactory() {
      return material_dialog$46template._MaterialDialogComponentNgFactory;
    }
  });
  var C3;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C4;
  dart.defineLazy(material_dialog$46template, {
    /*material_dialog$46template.styles$MaterialDialogComponent*/get styles$MaterialDialogComponent() {
      return [material_dialog$46scss$46css$46shim.styles];
    },
    /*material_dialog$46template._MaterialDialogComponentNgFactory*/get _MaterialDialogComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*material_dialog$46template.styles$MaterialDialogComponentHost*/get styles$MaterialDialogComponentHost() {
      return C4 || CT.C4;
    },
    /*material_dialog$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_dialog/material_dialog.template", {
    "package:angular_components/material_dialog/material_dialog.template.dart": material_dialog$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_dialog.template.dart"],"names":[],"mappings":"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","file":"material_dialog.template.ddc.js"}');
  // Exports:
  return {
    material_dialog__material_dialog$46template: material_dialog$46template
  };
}));

//# sourceMappingURL=material_dialog.template.ddc.js.map
