define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/utils/angular/scroll_host/angular_2', 'packages/angular_components/src/utils/angular/scroll_host/scroll_host_interface', 'packages/angular_components/material_stepper/material_stepper', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/material_stepper/material_step', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/laminate/portal/portal', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.template', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular_components/laminate/portal/portal.template', 'packages/angular_components/material_stepper/common.template', 'packages/angular_components/material_stepper/material_step.template', 'packages/angular_components/model/action/async_action.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/angular/scroll_host/angular_2.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/material_stepper/material_stepper.scss.css.shim'], (function load__packages__angular_components__material_stepper__material_stepper_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__utils__angular__scroll_host__angular_2, packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface, packages__angular_components__material_stepper__material_stepper, packages__angular__src__runtime__text_binding, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__button_decorator__button_decorator, packages__angular_components__material_stepper__material_step, packages__angular__src__runtime__interpolate, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular_components__laminate__portal__portal, packages__angular_components__material_yes_no_buttons__material_yes_no_buttons$46template, packages__angular_components__material_yes_no_buttons__material_yes_no_buttons, packages__angular_components__interfaces__has_disabled, packages__angular__angular$46template, packages__angular_components__laminate__portal__portal$46template, packages__angular_components__material_stepper__common$46template, packages__angular_components__material_stepper__material_step$46template, packages__angular_components__model__action__async_action$46template, packages__angular_components__utils__angular__properties__properties$46template, packages__angular_components__utils__angular__scroll_host__angular_2$46template, packages__angular_components__utils__browser__events__events$46template, packages__angular_components__material_stepper__material_stepper$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const angular_2 = packages__angular_components__utils__angular__scroll_host__angular_2.utils__angular__scroll_host__angular_2;
  const scroll_host_interface = packages__angular_components__src__utils__angular__scroll_host__scroll_host_interface.src__utils__angular__scroll_host__scroll_host_interface;
  const material_stepper = packages__angular_components__material_stepper__material_stepper.material_stepper__material_stepper;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const material_step = packages__angular_components__material_stepper__material_step.material_stepper__material_step;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const portal = packages__angular_components__laminate__portal__portal.laminate__portal__portal;
  const material_yes_no_buttons$46template = packages__angular_components__material_yes_no_buttons__material_yes_no_buttons$46template.material_yes_no_buttons__material_yes_no_buttons$46template;
  const material_yes_no_buttons = packages__angular_components__material_yes_no_buttons__material_yes_no_buttons.material_yes_no_buttons__material_yes_no_buttons;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const portal$46template = packages__angular_components__laminate__portal__portal$46template.laminate__portal__portal$46template;
  const common$46template = packages__angular_components__material_stepper__common$46template.material_stepper__common$46template;
  const material_step$46template = packages__angular_components__material_stepper__material_step$46template.material_stepper__material_step$46template;
  const async_action$46template = packages__angular_components__model__action__async_action$46template.model__action__async_action$46template;
  const properties$46template = packages__angular_components__utils__angular__properties__properties$46template.utils__angular__properties__properties$46template;
  const angular_2$46template = packages__angular_components__utils__angular__scroll_host__angular_2$46template.utils__angular__scroll_host__angular_2$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  const material_stepper$46scss$46css$46shim = packages__angular_components__material_stepper__material_stepper$46scss$46css$46shim.material_stepper__material_stepper$46scss$46css$46shim;
  var material_stepper$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $length = dartx.length;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $_get = dartx._get;
  var $toString = dartx.toString;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var StickyElementDirectiveL = () => (StickyElementDirectiveL = dart.constFn(dart.legacy(angular_2.StickyElementDirective)))();
  var ScrollHostL = () => (ScrollHostL = dart.constFn(dart.legacy(scroll_host_interface.ScrollHost)))();
  var VoidToStickyElementDirectiveL = () => (VoidToStickyElementDirectiveL = dart.constFn(dart.fnType(StickyElementDirectiveL(), [])))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var StepDirectiveL = () => (StepDirectiveL = dart.constFn(dart.legacy(material_step.StepDirective)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var JSArrayOfStepDirectiveL = () => (JSArrayOfStepDirectiveL = dart.constFn(_interceptors.JSArray$(StepDirectiveL())))();
  var MaterialStepperComponentL = () => (MaterialStepperComponentL = dart.constFn(dart.legacy(material_stepper.MaterialStepperComponent)))();
  var ComponentRefOfMaterialStepperComponentL = () => (ComponentRefOfMaterialStepperComponentL = dart.constFn(component_factory.ComponentRef$(MaterialStepperComponentL())))();
  var ComponentFactoryOfMaterialStepperComponentL = () => (ComponentFactoryOfMaterialStepperComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialStepperComponentL())))();
  var AppViewOfMaterialStepperComponentL = () => (AppViewOfMaterialStepperComponentL = dart.constFn(app_view.AppView$(MaterialStepperComponentL())))();
  var AppViewLOfMaterialStepperComponentL = () => (AppViewLOfMaterialStepperComponentL = dart.constFn(dart.legacy(AppViewOfMaterialStepperComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialStepperComponentL = () => (AppViewLAndintLToAppViewLOfMaterialStepperComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialStepperComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_stepper/material_stepper.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_stepper$46template.viewFactory_MaterialStepperComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(material_stepper$46template.viewFactory_MaterialStepperComponent12, AppViewLAndintLToAppViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(material_stepper$46template.viewFactory_MaterialStepperComponent15, AppViewLAndintLToAppViewLOfvoid());
    },
    get C3() {
      return C3 = dart.fn(material_stepper$46template.viewFactory_MaterialStepperComponent2, AppViewLAndintLToAppViewLOfvoid());
    },
    get C4() {
      return C4 = dart.fn(material_stepper$46template.viewFactory_MaterialStepperComponent3, AppViewLAndintLToAppViewLOfvoid());
    },
    get C5() {
      return C5 = dart.fn(material_stepper$46template.viewFactory_MaterialStepperComponent4, AppViewLAndintLToAppViewLOfvoid());
    },
    get C6() {
      return C6 = dart.fn(material_stepper$46template.viewFactory_MaterialStepperComponent5, AppViewLAndintLToAppViewLOfvoid());
    },
    get C7() {
      return C7 = dart.fn(material_stepper$46template.viewFactory_MaterialStepperComponent6, AppViewLAndintLToAppViewLOfvoid());
    },
    get C8() {
      return C8 = dart.fn(material_stepper$46template.viewFactory_MaterialStepperComponent9, AppViewLAndintLToAppViewLOfvoid());
    },
    get C9() {
      return C9 = dart.fn(material_stepper$46template.viewFactory_MaterialStepperComponent11, AppViewLAndintLToAppViewLOfvoid());
    },
    get C10() {
      return C10 = dart.fn(material_stepper$46template.viewFactory_MaterialStepperComponent7, AppViewLAndintLToAppViewLOfvoid());
    },
    get C11() {
      return C11 = dart.fn(material_stepper$46template.viewFactory_MaterialStepperComponent8, AppViewLAndintLToAppViewLOfvoid());
    },
    get C12() {
      return C12 = dart.fn(material_stepper$46template.viewFactory_MaterialStepperComponent10, AppViewLAndintLToAppViewLOfvoid());
    },
    get C13() {
      return C13 = dart.fn(material_stepper$46template.viewFactory_MaterialStepperComponent13, AppViewLAndintLToAppViewLOfvoid());
    },
    get C14() {
      return C14 = dart.fn(material_stepper$46template.viewFactory_MaterialStepperComponent14, AppViewLAndintLToAppViewLOfvoid());
    },
    get C16() {
      return C16 = dart.fn(material_stepper$46template.viewFactory_MaterialStepperComponentHost0, AppViewLAndintLToAppViewLOfMaterialStepperComponentL());
    },
    get C15() {
      return C15 = dart.const({
        __proto__: ComponentFactoryOfMaterialStepperComponentL().prototype,
        [ComponentFactory__viewFactory]: C16 || CT.C16,
        [ComponentFactory_selector]: "material-stepper"
      });
    },
    get C17() {
      return C17 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _StickyElementDirective_1_5 = dart.privateName(material_stepper$46template, "_StickyElementDirective_1_5");
  var _appEl_3 = dart.privateName(material_stepper$46template, "_appEl_3");
  var _NgFor_3_9 = dart.privateName(material_stepper$46template, "_NgFor_3_9");
  var _appEl_6 = dart.privateName(material_stepper$46template, "_appEl_6");
  var _NgIf_6_9 = dart.privateName(material_stepper$46template, "_NgIf_6_9");
  var _appEl_10 = dart.privateName(material_stepper$46template, "_appEl_10");
  var _NgIf_10_9 = dart.privateName(material_stepper$46template, "_NgIf_10_9");
  var _expr_0 = dart.privateName(material_stepper$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_stepper$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_stepper$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_stepper$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_stepper$46template, "_expr_4");
  var _el_8 = dart.privateName(material_stepper$46template, "_el_8");
  var _el_1 = dart.privateName(material_stepper$46template, "_el_1");
  var C0;
  var C1;
  var C2;
  material_stepper$46template.ViewMaterialStepperComponent0 = class ViewMaterialStepperComponent0 extends app_view.AppView$(dart.legacy(material_stepper.MaterialStepperComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_stepper/material_stepper.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      let doc = html.document;
      this[_el_1] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_1], "stepper stepper-body mixin");
      this.addShimC(this[_el_1]);
      this[_StickyElementDirective_1_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(StickyElementDirectiveL(), dart.wrapType(StickyElementDirectiveL()), dart.fn(() => new angular_2.StickyElementDirective.new(ScrollHostL().as(this.parentView.injectorGet(dart.wrapType(ScrollHostL()), this.viewData.parentIndex)), this[_el_1]), VoidToStickyElementDirectiveL())) : new angular_2.StickyElementDirective.new(ScrollHostL().as(this.parentView.injectorGet(dart.wrapType(ScrollHostL()), this.viewData.parentIndex)), this[_el_1]);
      let _text_2 = dom_helpers.appendText(this[_el_1], "\n  ");
      let _anchor_3 = dom_helpers.appendAnchor(this[_el_1]);
      this[_appEl_3] = new view_container.ViewContainer.new(3, 1, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C0 || CT.C0);
      this[_NgFor_3_9] = new ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      let _text_4 = dom_helpers.appendText(this[_el_1], "\n");
      let _text_5 = dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_6 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_6] = new view_container.ViewContainer.new(6, null, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C1 || CT.C1);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _text_7 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_el_8] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.addShimC(this[_el_8]);
      let _text_9 = dom_helpers.appendText(parentRenderNode, "\n");
      let _anchor_10 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_10] = new view_container.ViewContainer.new(10, null, this, _anchor_10);
      let _TemplateRef_10_8 = new template_ref.TemplateRef.new(this[_appEl_10], C2 || CT.C2);
      this[_NgIf_10_9] = new ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      let _text_11 = dom_helpers.appendText(parentRenderNode, "\n");
      _ctx.stepperNativeElement = this[_el_1];
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_afterStepperElement = this[_el_8];
      let currVal_2 = local_afterStepperElement;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_StickyElementDirective_1_5].endElement = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.stickyHeader;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_StickyElementDirective_1_5].sticky = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.steps;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_NgFor_3_9].ngForOf = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_3_9].ngDoCheck();
      }
      this[_NgIf_6_9].ngIf = !dart.test(_ctx.shouldInlineContent) && !dart.test(_ctx.stepperDone) && dart.notNull(_ctx.steps[$length]) > 0;
      this[_NgIf_10_9].ngIf = _ctx.announceCurrentStep;
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
      let currVal_0 = _ctx.orientation;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(this[_el_1], "orientation", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.size;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_1], "size", currVal_1);
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_StickyElementDirective_1_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_3].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
      this[_appEl_10].destroyNestedViews();
      this[_StickyElementDirective_1_5].ngOnDestroy();
    }
    initComponentStyles() {
      let styles = material_stepper$46template.ViewMaterialStepperComponent0._componentStyles;
      if (styles == null) {
        material_stepper$46template.ViewMaterialStepperComponent0._componentStyles = styles = material_stepper$46template.ViewMaterialStepperComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_stepper$46template.styles$MaterialStepperComponent, material_stepper$46template.ViewMaterialStepperComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_stepper$46template.ViewMaterialStepperComponent0.new = function(parentView, parentIndex) {
    this[_StickyElementDirective_1_5] = null;
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_appEl_10] = null;
    this[_NgIf_10_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_el_8] = null;
    this[_el_1] = null;
    material_stepper$46template.ViewMaterialStepperComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-stepper"));
    this.updateChildClassNonHtml(this.rootEl, "themeable");
  }).prototype = material_stepper$46template.ViewMaterialStepperComponent0.prototype;
  dart.addTypeTests(material_stepper$46template.ViewMaterialStepperComponent0);
  dart.addTypeCaches(material_stepper$46template.ViewMaterialStepperComponent0);
  dart.setLibraryUri(material_stepper$46template.ViewMaterialStepperComponent0, L0);
  dart.setFieldSignature(material_stepper$46template.ViewMaterialStepperComponent0, () => ({
    __proto__: dart.getFields(material_stepper$46template.ViewMaterialStepperComponent0.__proto__),
    [_StickyElementDirective_1_5]: dart.fieldType(dart.legacy(angular_2.StickyElementDirective)),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_3_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_10]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_10_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_el_8]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_1]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(material_stepper$46template.ViewMaterialStepperComponent0, {
    /*material_stepper$46template.ViewMaterialStepperComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_5 = dart.privateName(material_stepper$46template, "_textBinding_5");
  var _textBinding_15 = dart.privateName(material_stepper$46template, "_textBinding_15");
  var _textBinding_20 = dart.privateName(material_stepper$46template, "_textBinding_20");
  var _ButtonDirective_0_5 = dart.privateName(material_stepper$46template, "_ButtonDirective_0_5");
  var _appEl_7 = dart.privateName(material_stepper$46template, "_appEl_7");
  var _NgIf_7_9 = dart.privateName(material_stepper$46template, "_NgIf_7_9");
  var _appEl_22 = dart.privateName(material_stepper$46template, "_appEl_22");
  var _NgIf_22_9 = dart.privateName(material_stepper$46template, "_NgIf_22_9");
  var _appEl_26 = dart.privateName(material_stepper$46template, "_appEl_26");
  var _NgIf_26_9 = dart.privateName(material_stepper$46template, "_NgIf_26_9");
  var _appEl_28 = dart.privateName(material_stepper$46template, "_appEl_28");
  var _NgIf_28_9 = dart.privateName(material_stepper$46template, "_NgIf_28_9");
  var _expr_5 = dart.privateName(material_stepper$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_stepper$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_stepper$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_stepper$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_stepper$46template, "_expr_9");
  var _expr_10 = dart.privateName(material_stepper$46template, "_expr_10");
  var _expr_12 = dart.privateName(material_stepper$46template, "_expr_12");
  var _expr_13 = dart.privateName(material_stepper$46template, "_expr_13");
  var _expr_14 = dart.privateName(material_stepper$46template, "_expr_14");
  var _expr_15 = dart.privateName(material_stepper$46template, "_expr_15");
  var _expr_16 = dart.privateName(material_stepper$46template, "_expr_16");
  var _expr_17 = dart.privateName(material_stepper$46template, "_expr_17");
  var _expr_18 = dart.privateName(material_stepper$46template, "_expr_18");
  var _el_0 = dart.privateName(material_stepper$46template, "_el_0");
  var _el_3 = dart.privateName(material_stepper$46template, "_el_3");
  var _el_11 = dart.privateName(material_stepper$46template, "_el_11");
  var _el_13 = dart.privateName(material_stepper$46template, "_el_13");
  var _el_18 = dart.privateName(material_stepper$46template, "_el_18");
  var C3;
  var C4;
  var C5;
  var C6;
  var _handle_trigger_0_0 = dart.privateName(material_stepper$46template, "_handle_trigger_0_0");
  material_stepper$46template._ViewMaterialStepperComponent1 = class _ViewMaterialStepperComponent1 extends app_view.AppView$(dart.legacy(material_stepper.MaterialStepperComponent)) {
    build() {
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClass(this[_el_0], "stepper-step");
      this.addShimC(this[_el_0]);
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
      let _text_1 = dom_helpers.appendText(this[_el_0], "\n    ");
      let _text_2 = dom_helpers.appendText(this[_el_0], "\n        ");
      this[_el_3] = dom_helpers.appendSpan(doc, this[_el_0]);
      this.updateChildClass(HtmlElementL().as(this[_el_3]), "stepper-step-index");
      this.addShimE(this[_el_3]);
      let _text_4 = dom_helpers.appendText(this[_el_3], "\n          ");
      this[_el_3][$append](this[_textBinding_5].element);
      let _text_6 = dom_helpers.appendText(this[_el_3], "\n          ");
      let _anchor_7 = dom_helpers.appendAnchor(this[_el_3]);
      this[_appEl_7] = new view_container.ViewContainer.new(7, 3, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], C3 || CT.C3);
      this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = dom_helpers.appendText(this[_el_3], "\n        ");
      let _text_9 = dom_helpers.appendText(this[_el_0], "\n    ");
      let _text_10 = dom_helpers.appendText(this[_el_0], "\n    ");
      this[_el_11] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_11], "stepper-step-header");
      this.addShimC(this[_el_11]);
      let _text_12 = dom_helpers.appendText(this[_el_11], "\n      ");
      this[_el_13] = dom_helpers.appendSpan(doc, this[_el_11]);
      this.updateChildClass(HtmlElementL().as(this[_el_13]), "stepper-step-name");
      this.addShimE(this[_el_13]);
      let _text_14 = dom_helpers.appendText(this[_el_13], "\n        ");
      this[_el_13][$append](this[_textBinding_15].element);
      let _text_16 = dom_helpers.appendText(this[_el_13], "\n      ");
      let _text_17 = dom_helpers.appendText(this[_el_11], "\n      ");
      this[_el_18] = dom_helpers.appendDiv(doc, this[_el_11]);
      this.updateChildClass(this[_el_18], "stepper-step-optional");
      this.addShimC(this[_el_18]);
      let _text_19 = dom_helpers.appendText(this[_el_18], "\n        ");
      this[_el_18][$append](this[_textBinding_20].element);
      let _text_21 = dom_helpers.appendText(this[_el_18], "\n          ");
      let _anchor_22 = dom_helpers.appendAnchor(this[_el_18]);
      this[_appEl_22] = new view_container.ViewContainer.new(22, 18, this, _anchor_22);
      let _TemplateRef_22_8 = new template_ref.TemplateRef.new(this[_appEl_22], C4 || CT.C4);
      this[_NgIf_22_9] = new ng_if.NgIf.new(this[_appEl_22], _TemplateRef_22_8);
      let _text_23 = dom_helpers.appendText(this[_el_18], "\n      ");
      let _text_24 = dom_helpers.appendText(this[_el_11], "\n    ");
      let _text_25 = dom_helpers.appendText(this[_el_0], "\n    ");
      let _anchor_26 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_26] = new view_container.ViewContainer.new(26, 0, this, _anchor_26);
      let _TemplateRef_26_8 = new template_ref.TemplateRef.new(this[_appEl_26], C5 || CT.C5);
      this[_NgIf_26_9] = new ng_if.NgIf.new(this[_appEl_26], _TemplateRef_26_8);
      let _text_27 = dom_helpers.appendText(this[_el_0], "\n    ");
      let _anchor_28 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_28] = new view_container.ViewContainer.new(28, 0, this, _anchor_28);
      let _TemplateRef_28_8 = new template_ref.TemplateRef.new(this[_appEl_28], C6 || CT.C6);
      this[_NgIf_28_9] = new ng_if.NgIf.new(this[_appEl_28], _TemplateRef_28_8);
      let _text_29 = dom_helpers.appendText(this[_el_0], "\n  ");
      this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_trigger_0_0)));
      this.init(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ButtonDirectiveL()) && dart.notNull(nodeIndex) <= 29) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t0, t0$, t0$0, t0$1, t0$2;
      let _ctx = this.ctx;
      let local_step = optimizations.unsafeCast(StepDirectiveL(), this.locals[$_get]("$implicit"));
      let currVal_6 = local_step.isNotSelectable;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_ButtonDirective_0_5].instance.disabled = currVal_6;
        this[_expr_6] = currVal_6;
      }
      this[_NgIf_7_9].ngIf = local_step.complete;
      this[_NgIf_22_9].ngIf = local_step.isSelectable;
      this[_NgIf_26_9].ngIf = !dart.test(local_step.isLast);
      this[_NgIf_28_9].ngIf = dart.test(_ctx.shouldInlineContent) && !dart.test(_ctx.stepperDone);
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_22].detectChangesInNestedViews();
      this[_appEl_26].detectChangesInNestedViews();
      this[_appEl_28].detectChangesInNestedViews();
      let currVal_0 = _ctx.stepAriaLabel(local_step);
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.orientation;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_0], "orientation", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.size;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateAttribute(this[_el_0], "size", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = local_step.isSelectable;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        dom_helpers.updateClassBinding(this[_el_0], "can-select", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = interpolate.interpolate0(local_step.active);
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        dom_helpers.setAttribute(this[_el_0], "active", StringL().as(currVal_4));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = interpolate.interpolate0(local_step.isSelectable);
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        dom_helpers.setAttribute(this[_el_0], "selectable", StringL().as(currVal_5));
        this[_expr_5] = currVal_5;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      let currVal_7 = _ctx.orientation;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        dom_helpers.updateAttribute(this[_el_3], "orientation", currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = local_step.active;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        dom_helpers.updateAttribute(this[_el_3], "active", (t0 = currVal_8, t0 == null ? null : dart.toString(t0)));
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = local_step.complete;
      if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        dom_helpers.updateAttribute(this[_el_3], "complete", (t0$ = currVal_9, t0$ == null ? null : dart.toString(t0$)));
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = local_step.isSelectable;
      if (dart.test(app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_3]), "can-select", currVal_10);
        this[_expr_10] = currVal_10;
      }
      this[_textBinding_5].updateText(StringL().as(interpolate.interpolate0(dart.test(local_step.complete) ? "" : dart.notNull(local_step.index) + 1)));
      let currVal_12 = _ctx.orientation;
      if (dart.test(app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        dom_helpers.updateAttribute(this[_el_11], "orientation", currVal_12);
        this[_expr_12] = currVal_12;
      }
      let currVal_13 = _ctx.size;
      if (dart.test(app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
        dom_helpers.updateAttribute(this[_el_11], "size", currVal_13);
        this[_expr_13] = currVal_13;
      }
      let currVal_14 = local_step.active;
      if (dart.test(app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        dom_helpers.updateAttribute(this[_el_13], "active", (t0$0 = currVal_14, t0$0 == null ? null : dart.toString(t0$0)));
        this[_expr_14] = currVal_14;
      }
      let currVal_15 = local_step.complete;
      if (dart.test(app_view_utils.checkBinding(this[_expr_15], currVal_15))) {
        dom_helpers.updateAttribute(this[_el_13], "complete", (t0$1 = currVal_15, t0$1 == null ? null : dart.toString(t0$1)));
        this[_expr_15] = currVal_15;
      }
      this[_textBinding_15].updateText(interpolate.interpolateString0(local_step.name));
      let currVal_16 = _ctx.orientation;
      if (dart.test(app_view_utils.checkBinding(this[_expr_16], currVal_16))) {
        dom_helpers.updateAttribute(this[_el_18], "orientation", currVal_16);
        this[_expr_16] = currVal_16;
      }
      let currVal_17 = local_step.isOptional;
      if (dart.test(app_view_utils.checkBinding(this[_expr_17], currVal_17))) {
        dom_helpers.updateAttribute(this[_el_18], "optional", (t0$2 = currVal_17, t0$2 == null ? null : dart.toString(t0$2)));
        this[_expr_17] = currVal_17;
      }
      let currVal_18 = _ctx.size;
      if (dart.test(app_view_utils.checkBinding(this[_expr_18], currVal_18))) {
        dom_helpers.updateAttribute(this[_el_18], "size", currVal_18);
        this[_expr_18] = currVal_18;
      }
      this[_textBinding_20].updateText(StringL().as(interpolate.interpolate0(dart.test(local_step.isOptional) ? material_stepper.MaterialStepperComponent.optionalMsg : "")));
    }
    destroyInternal() {
      this[_appEl_7].destroyNestedViews();
      this[_appEl_22].destroyNestedViews();
      this[_appEl_26].destroyNestedViews();
      this[_appEl_28].destroyNestedViews();
    }
    [_handle_trigger_0_0]($36event) {
      let local_step = optimizations.unsafeCast(StepDirectiveL(), this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.jumpStep(local_step.index);
    }
  };
  (material_stepper$46template._ViewMaterialStepperComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_5] = new text_binding.TextBinding.new();
    this[_textBinding_15] = new text_binding.TextBinding.new();
    this[_textBinding_20] = new text_binding.TextBinding.new();
    this[_ButtonDirective_0_5] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_22] = null;
    this[_NgIf_22_9] = null;
    this[_appEl_26] = null;
    this[_NgIf_26_9] = null;
    this[_appEl_28] = null;
    this[_NgIf_28_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_12] = null;
    this[_expr_13] = null;
    this[_expr_14] = null;
    this[_expr_15] = null;
    this[_expr_16] = null;
    this[_expr_17] = null;
    this[_expr_18] = null;
    this[_el_0] = null;
    this[_el_3] = null;
    this[_el_11] = null;
    this[_el_13] = null;
    this[_el_18] = null;
    material_stepper$46template._ViewMaterialStepperComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_stepper$46template._ViewMaterialStepperComponent1.prototype;
  dart.addTypeTests(material_stepper$46template._ViewMaterialStepperComponent1);
  dart.addTypeCaches(material_stepper$46template._ViewMaterialStepperComponent1);
  dart.setMethodSignature(material_stepper$46template._ViewMaterialStepperComponent1, () => ({
    __proto__: dart.getMethods(material_stepper$46template._ViewMaterialStepperComponent1.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_stepper$46template._ViewMaterialStepperComponent1, L0);
  dart.setFieldSignature(material_stepper$46template._ViewMaterialStepperComponent1, () => ({
    __proto__: dart.getFields(material_stepper$46template._ViewMaterialStepperComponent1.__proto__),
    [_textBinding_5]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_15]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_textBinding_20]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_appEl_7]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_7_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_22]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_22_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_26]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_26_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_28]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_28_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_12]: dart.fieldType(dart.dynamic),
    [_expr_13]: dart.fieldType(dart.dynamic),
    [_expr_14]: dart.fieldType(dart.dynamic),
    [_expr_15]: dart.fieldType(dart.dynamic),
    [_expr_16]: dart.fieldType(dart.dynamic),
    [_expr_17]: dart.fieldType(dart.dynamic),
    [_expr_18]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_3]: dart.fieldType(dart.legacy(html.Element)),
    [_el_11]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_13]: dart.fieldType(dart.legacy(html.Element)),
    [_el_18]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _compView_2 = dart.privateName(material_stepper$46template, "_compView_2");
  var _MaterialIconComponent_2_5 = dart.privateName(material_stepper$46template, "_MaterialIconComponent_2_5");
  material_stepper$46template._ViewMaterialStepperComponent2 = class _ViewMaterialStepperComponent2 extends app_view.AppView$(dart.legacy(material_stepper.MaterialStepperComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n            ");
      this[_compView_2] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      _el_0[$append](_el_2);
      dom_helpers.setAttribute(_el_2, "icon", "check");
      this.addShimC(_el_2);
      this[_MaterialIconComponent_2_5] = new material_icon.MaterialIconComponent.new(_el_2);
      this[_compView_2].create0(this[_MaterialIconComponent_2_5]);
      let _text_3 = dom_helpers.appendText(_el_0, "\n          ");
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_2_5].icon = "check";
        changed = true;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_compView_2].destroyInternalState();
    }
  };
  (material_stepper$46template._ViewMaterialStepperComponent2.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_MaterialIconComponent_2_5] = null;
    material_stepper$46template._ViewMaterialStepperComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_stepper$46template._ViewMaterialStepperComponent2.prototype;
  dart.addTypeTests(material_stepper$46template._ViewMaterialStepperComponent2);
  dart.addTypeCaches(material_stepper$46template._ViewMaterialStepperComponent2);
  dart.setLibraryUri(material_stepper$46template._ViewMaterialStepperComponent2, L0);
  dart.setFieldSignature(material_stepper$46template._ViewMaterialStepperComponent2, () => ({
    __proto__: dart.getFields(material_stepper$46template._ViewMaterialStepperComponent2.__proto__),
    [_compView_2]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_2_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent))
  }));
  var _el_2 = dart.privateName(material_stepper$46template, "_el_2");
  material_stepper$46template._ViewMaterialStepperComponent3 = class _ViewMaterialStepperComponent3 extends app_view.AppView$(dart.legacy(material_stepper.MaterialStepperComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n            ");
      this[_compView_2] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      _el_0[$append](this[_el_2]);
      this.updateChildClassNonHtml(this[_el_2], "edit-icon");
      dom_helpers.setAttribute(this[_el_2], "icon", "mode_edit");
      this.addShimC(HtmlElementL().as(this[_el_2]));
      this[_MaterialIconComponent_2_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_2]));
      this[_compView_2].create0(this[_MaterialIconComponent_2_5]);
      let _text_4 = dom_helpers.appendText(_el_0, "\n          ");
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_2_5].icon = "mode_edit";
        changed = true;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      let currVal_0 = _ctx.orientation;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(this[_el_2], "orientation", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.size;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_2], "size", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_compView_2].destroyInternalState();
    }
  };
  (material_stepper$46template._ViewMaterialStepperComponent3.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_MaterialIconComponent_2_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_2] = null;
    material_stepper$46template._ViewMaterialStepperComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_stepper$46template._ViewMaterialStepperComponent3.prototype;
  dart.addTypeTests(material_stepper$46template._ViewMaterialStepperComponent3);
  dart.addTypeCaches(material_stepper$46template._ViewMaterialStepperComponent3);
  dart.setLibraryUri(material_stepper$46template._ViewMaterialStepperComponent3, L0);
  dart.setFieldSignature(material_stepper$46template._ViewMaterialStepperComponent3, () => ({
    __proto__: dart.getFields(material_stepper$46template._ViewMaterialStepperComponent3.__proto__),
    [_compView_2]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_2_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_2]: dart.fieldType(dart.legacy(html.Element))
  }));
  material_stepper$46template._ViewMaterialStepperComponent4 = class _ViewMaterialStepperComponent4 extends app_view.AppView$(dart.legacy(material_stepper.MaterialStepperComponent)) {
    build() {
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "step-line");
      this.addShimC(this[_el_0]);
      let _text_1 = dom_helpers.appendText(this[_el_0], "\n    ");
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.orientation;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(this[_el_0], "orientation", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.size;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_0], "size", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
  };
  (material_stepper$46template._ViewMaterialStepperComponent4.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    material_stepper$46template._ViewMaterialStepperComponent4.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_stepper$46template._ViewMaterialStepperComponent4.prototype;
  dart.addTypeTests(material_stepper$46template._ViewMaterialStepperComponent4);
  dart.addTypeCaches(material_stepper$46template._ViewMaterialStepperComponent4);
  dart.setLibraryUri(material_stepper$46template._ViewMaterialStepperComponent4, L0);
  dart.setFieldSignature(material_stepper$46template._ViewMaterialStepperComponent4, () => ({
    __proto__: dart.getFields(material_stepper$46template._ViewMaterialStepperComponent4.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _appEl_2 = dart.privateName(material_stepper$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(material_stepper$46template, "_NgIf_2_9");
  var _appEl_4 = dart.privateName(material_stepper$46template, "_appEl_4");
  var _NgIf_4_9 = dart.privateName(material_stepper$46template, "_NgIf_4_9");
  var C7;
  var C8;
  var C9;
  material_stepper$46template._ViewMaterialStepperComponent5 = class _ViewMaterialStepperComponent5 extends app_view.AppView$(dart.legacy(material_stepper.MaterialStepperComponent)) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "stepper-content");
      this.addShimC(this[_el_0]);
      let _text_1 = dom_helpers.appendText(this[_el_0], "\n      ");
      let _anchor_2 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C7 || CT.C7);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _text_3 = dom_helpers.appendText(this[_el_0], "\n      ");
      let _anchor_4 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C8 || CT.C8);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _text_5 = dom_helpers.appendText(this[_el_0], "\n      ");
      let _anchor_6 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_6] = new view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C9 || CT.C9);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      let _text_7 = dom_helpers.appendText(this[_el_0], "\n    ");
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'stopPropagationOfEnterAndSpace')));
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_step = optimizations.unsafeCast(StepDirectiveL(), this.parentView.locals[$_get]("$implicit"));
      this[_NgIf_2_9].ngIf = local_step.active;
      this[_NgIf_4_9].ngIf = !dart.test(local_step.active) && local_step.summaryDirective != null;
      this[_NgIf_6_9].ngIf = local_step.shouldShowSummary;
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_0 = _ctx.orientation;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(this[_el_0], "orientation", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.size;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_0], "size", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
    }
  };
  (material_stepper$46template._ViewMaterialStepperComponent5.new = function(parentView, parentIndex) {
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    material_stepper$46template._ViewMaterialStepperComponent5.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_stepper$46template._ViewMaterialStepperComponent5.prototype;
  dart.addTypeTests(material_stepper$46template._ViewMaterialStepperComponent5);
  dart.addTypeCaches(material_stepper$46template._ViewMaterialStepperComponent5);
  dart.setLibraryUri(material_stepper$46template._ViewMaterialStepperComponent5, L0);
  dart.setFieldSignature(material_stepper$46template._ViewMaterialStepperComponent5, () => ({
    __proto__: dart.getFields(material_stepper$46template._ViewMaterialStepperComponent5.__proto__),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _appEl_1 = dart.privateName(material_stepper$46template, "_appEl_1");
  var _PortalHostDirective_1_9 = dart.privateName(material_stepper$46template, "_PortalHostDirective_1_9");
  var _NgIf_3_9 = dart.privateName(material_stepper$46template, "_NgIf_3_9");
  var C10;
  var C11;
  material_stepper$46template._ViewMaterialStepperComponent6 = class _ViewMaterialStepperComponent6 extends app_view.AppView$(dart.legacy(material_stepper.MaterialStepperComponent)) {
    build() {
      let _text_0 = dom_helpers.createText("\n        ");
      let _anchor_1 = dom_helpers.createAnchor();
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C10 || CT.C10);
      this[_PortalHostDirective_1_9] = new portal.PortalHostDirective.new(this[_appEl_1], this[_appEl_1]);
      let _text_2 = dom_helpers.createText("\n        ");
      let _anchor_3 = dom_helpers.createAnchor();
      this[_appEl_3] = new view_container.ViewContainer.new(3, null, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C11 || CT.C11);
      this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _text_4 = dom_helpers.createText("\n      ");
      this.init(JSArrayOfObjectL().of([_text_0, this[_appEl_1], _text_2, this[_appEl_3], _text_4]), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_step = optimizations.unsafeCast(StepDirectiveL(), this.parentView.parentView.locals[$_get]("$implicit"));
      let currVal_0 = _ctx.steps[$_get](local_step.index);
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_PortalHostDirective_1_9].portal = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgIf_3_9].ngIf = !dart.test(_ctx.activeStep.hideButtons);
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
    }
  };
  (material_stepper$46template._ViewMaterialStepperComponent6.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_PortalHostDirective_1_9] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_expr_0] = null;
    material_stepper$46template._ViewMaterialStepperComponent6.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_stepper$46template._ViewMaterialStepperComponent6.prototype;
  dart.addTypeTests(material_stepper$46template._ViewMaterialStepperComponent6);
  dart.addTypeCaches(material_stepper$46template._ViewMaterialStepperComponent6);
  dart.setLibraryUri(material_stepper$46template._ViewMaterialStepperComponent6, L0);
  dart.setFieldSignature(material_stepper$46template._ViewMaterialStepperComponent6, () => ({
    __proto__: dart.getFields(material_stepper$46template._ViewMaterialStepperComponent6.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_PortalHostDirective_1_9]: dart.fieldType(dart.legacy(portal.PortalHostDirective)),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_stepper$46template._ViewMaterialStepperComponent7 = class _ViewMaterialStepperComponent7 extends app_view.AppView$(dart.legacy(material_stepper.MaterialStepperComponent)) {
    build() {
      this.init0();
    }
  };
  (material_stepper$46template._ViewMaterialStepperComponent7.new = function(parentView, parentIndex) {
    material_stepper$46template._ViewMaterialStepperComponent7.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_stepper$46template._ViewMaterialStepperComponent7.prototype;
  dart.addTypeTests(material_stepper$46template._ViewMaterialStepperComponent7);
  dart.addTypeCaches(material_stepper$46template._ViewMaterialStepperComponent7);
  dart.setLibraryUri(material_stepper$46template._ViewMaterialStepperComponent7, L0);
  var _MaterialYesNoButtonsComponent_2_5 = dart.privateName(material_stepper$46template, "_MaterialYesNoButtonsComponent_2_5");
  var _handle_yes_2_0 = dart.privateName(material_stepper$46template, "_handle_yes_2_0");
  var _handle_no_2_1 = dart.privateName(material_stepper$46template, "_handle_no_2_1");
  material_stepper$46template._ViewMaterialStepperComponent8 = class _ViewMaterialStepperComponent8 extends app_view.AppView$(dart.legacy(material_stepper.MaterialStepperComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_0), "button-container");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n          ");
      this[_compView_2] = new material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      _el_0[$append](_el_2);
      this.updateChildClassNonHtml(_el_2, "stepper-yes-no-buttons");
      dom_helpers.setAttribute(_el_2, "raised", "");
      dom_helpers.setAttribute(_el_2, "yesHighlighted", "");
      this.addShimC(_el_2);
      this[_MaterialYesNoButtonsComponent_2_5] = new material_yes_no_buttons.MaterialYesNoButtonsComponent.new();
      this[_compView_2].create0(this[_MaterialYesNoButtonsComponent_2_5]);
      let _text_4 = dom_helpers.appendText(_el_0, "\n        ");
      let subscription_0 = this[_MaterialYesNoButtonsComponent_2_5].yes.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_yes_2_0)));
      let subscription_1 = this[_MaterialYesNoButtonsComponent_2_5].no.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_no_2_1)));
      this.init(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialYesNoButtonsComponent_2_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        if (material_stepper.MaterialStepperComponent.continueMsg != null) {
          this[_MaterialYesNoButtonsComponent_2_5].yesText = material_stepper.MaterialStepperComponent.continueMsg;
          changed = true;
        }
        this[_MaterialYesNoButtonsComponent_2_5].yesHighlighted = true;
        changed = true;
        this[_MaterialYesNoButtonsComponent_2_5].raised = true;
        changed = true;
      }
      let currVal_1 = _ctx.noText;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialYesNoButtonsComponent_2_5].noText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_4 = _ctx.activeStep.busy;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialYesNoButtonsComponent_2_5].disabled = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = !dart.test(_ctx.activeStep.canContinue);
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialYesNoButtonsComponent_2_5].yesDisabled = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = !dart.test(_ctx.activeStep.cancelHidden) && _ctx.activeStep.index !== 0;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialYesNoButtonsComponent_2_5].noDisplayed = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_compView_2].destroyInternalState();
    }
    [_handle_yes_2_0]($36event) {
      let _ctx = this.ctx;
      _ctx.stepForward(EventL().as($36event), _ctx.activeStep);
    }
    [_handle_no_2_1]($36event) {
      let _ctx = this.ctx;
      _ctx.stepBackward(EventL().as($36event), _ctx.activeStep);
    }
  };
  (material_stepper$46template._ViewMaterialStepperComponent8.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_MaterialYesNoButtonsComponent_2_5] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    material_stepper$46template._ViewMaterialStepperComponent8.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_stepper$46template._ViewMaterialStepperComponent8.prototype;
  dart.addTypeTests(material_stepper$46template._ViewMaterialStepperComponent8);
  dart.addTypeCaches(material_stepper$46template._ViewMaterialStepperComponent8);
  dart.setMethodSignature(material_stepper$46template._ViewMaterialStepperComponent8, () => ({
    __proto__: dart.getMethods(material_stepper$46template._ViewMaterialStepperComponent8.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_yes_2_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_no_2_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_stepper$46template._ViewMaterialStepperComponent8, L0);
  dart.setFieldSignature(material_stepper$46template._ViewMaterialStepperComponent8, () => ({
    __proto__: dart.getFields(material_stepper$46template._ViewMaterialStepperComponent8.__proto__),
    [_compView_2]: dart.fieldType(dart.legacy(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0)),
    [_MaterialYesNoButtonsComponent_2_5]: dart.fieldType(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)),
    [_expr_1]: dart.fieldType(dart.legacy(core.String)),
    [_expr_4]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_5]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_6]: dart.fieldType(dart.legacy(core.bool))
  }));
  var _PortalHostDirective_2_9 = dart.privateName(material_stepper$46template, "_PortalHostDirective_2_9");
  var C12;
  material_stepper$46template._ViewMaterialStepperComponent9 = class _ViewMaterialStepperComponent9 extends app_view.AppView$(dart.legacy(material_stepper.MaterialStepperComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "step-summary-directive");
      this.addShimC(HtmlElementL().as(_el_0));
      let _text_1 = dom_helpers.appendText(_el_0, "\n        ");
      let _anchor_2 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C12 || CT.C12);
      this[_PortalHostDirective_2_9] = new portal.PortalHostDirective.new(this[_appEl_2], this[_appEl_2]);
      let _text_3 = dom_helpers.appendText(_el_0, "\n      ");
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let local_step = optimizations.unsafeCast(StepDirectiveL(), this.parentView.parentView.locals[$_get]("$implicit"));
      let currVal_0 = local_step.summaryDirective;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_PortalHostDirective_2_9].portal = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
    }
  };
  (material_stepper$46template._ViewMaterialStepperComponent9.new = function(parentView, parentIndex) {
    this[_appEl_2] = null;
    this[_PortalHostDirective_2_9] = null;
    this[_expr_0] = null;
    material_stepper$46template._ViewMaterialStepperComponent9.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_stepper$46template._ViewMaterialStepperComponent9.prototype;
  dart.addTypeTests(material_stepper$46template._ViewMaterialStepperComponent9);
  dart.addTypeCaches(material_stepper$46template._ViewMaterialStepperComponent9);
  dart.setLibraryUri(material_stepper$46template._ViewMaterialStepperComponent9, L0);
  dart.setFieldSignature(material_stepper$46template._ViewMaterialStepperComponent9, () => ({
    __proto__: dart.getFields(material_stepper$46template._ViewMaterialStepperComponent9.__proto__),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_PortalHostDirective_2_9]: dart.fieldType(dart.legacy(portal.PortalHostDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_stepper$46template._ViewMaterialStepperComponent10 = class _ViewMaterialStepperComponent10 extends app_view.AppView$(dart.legacy(material_stepper.MaterialStepperComponent)) {
    build() {
      this.init0();
    }
  };
  (material_stepper$46template._ViewMaterialStepperComponent10.new = function(parentView, parentIndex) {
    material_stepper$46template._ViewMaterialStepperComponent10.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_stepper$46template._ViewMaterialStepperComponent10.prototype;
  dart.addTypeTests(material_stepper$46template._ViewMaterialStepperComponent10);
  dart.addTypeCaches(material_stepper$46template._ViewMaterialStepperComponent10);
  dart.setLibraryUri(material_stepper$46template._ViewMaterialStepperComponent10, L0);
  var _textBinding_2 = dart.privateName(material_stepper$46template, "_textBinding_2");
  material_stepper$46template._ViewMaterialStepperComponent11 = class _ViewMaterialStepperComponent11 extends app_view.AppView$(dart.legacy(material_stepper.MaterialStepperComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "stepper-step-summary");
      this.addShimC(HtmlElementL().as(_el_0));
      let _text_1 = dom_helpers.appendText(_el_0, "\n        ");
      _el_0[$append](this[_textBinding_2].element);
      let _text_3 = dom_helpers.appendText(_el_0, "\n      ");
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let local_step = optimizations.unsafeCast(StepDirectiveL(), this.parentView.parentView.locals[$_get]("$implicit"));
      this[_textBinding_2].updateText(interpolate.interpolateString0(local_step.completeSummary));
    }
  };
  (material_stepper$46template._ViewMaterialStepperComponent11.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    material_stepper$46template._ViewMaterialStepperComponent11.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_stepper$46template._ViewMaterialStepperComponent11.prototype;
  dart.addTypeTests(material_stepper$46template._ViewMaterialStepperComponent11);
  dart.addTypeCaches(material_stepper$46template._ViewMaterialStepperComponent11);
  dart.setLibraryUri(material_stepper$46template._ViewMaterialStepperComponent11, L0);
  dart.setFieldSignature(material_stepper$46template._ViewMaterialStepperComponent11, () => ({
    __proto__: dart.getFields(material_stepper$46template._ViewMaterialStepperComponent11.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var C13;
  var C14;
  material_stepper$46template._ViewMaterialStepperComponent12 = class _ViewMaterialStepperComponent12 extends app_view.AppView$(dart.legacy(material_stepper.MaterialStepperComponent)) {
    build() {
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "stepper-content mixin");
      this.addShimC(this[_el_0]);
      let _text_1 = dom_helpers.appendText(this[_el_0], "\n  ");
      let _anchor_2 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C13 || CT.C13);
      this[_PortalHostDirective_2_9] = new portal.PortalHostDirective.new(this[_appEl_2], this[_appEl_2]);
      let _text_3 = dom_helpers.appendText(this[_el_0], "\n    ");
      let _anchor_4 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C14 || CT.C14);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _text_5 = dom_helpers.appendText(this[_el_0], "\n");
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_2 = _ctx.activeStep;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_PortalHostDirective_2_9].portal = currVal_2;
        this[_expr_2] = currVal_2;
      }
      this[_NgIf_4_9].ngIf = !dart.test(_ctx.activeStep.hideButtons);
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      let currVal_0 = _ctx.orientation;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(this[_el_0], "orientation", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.size;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_0], "size", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
    }
  };
  (material_stepper$46template._ViewMaterialStepperComponent12.new = function(parentView, parentIndex) {
    this[_appEl_2] = null;
    this[_PortalHostDirective_2_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    material_stepper$46template._ViewMaterialStepperComponent12.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_stepper$46template._ViewMaterialStepperComponent12.prototype;
  dart.addTypeTests(material_stepper$46template._ViewMaterialStepperComponent12);
  dart.addTypeCaches(material_stepper$46template._ViewMaterialStepperComponent12);
  dart.setLibraryUri(material_stepper$46template._ViewMaterialStepperComponent12, L0);
  dart.setFieldSignature(material_stepper$46template._ViewMaterialStepperComponent12, () => ({
    __proto__: dart.getFields(material_stepper$46template._ViewMaterialStepperComponent12.__proto__),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_PortalHostDirective_2_9]: dart.fieldType(dart.legacy(portal.PortalHostDirective)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  material_stepper$46template._ViewMaterialStepperComponent13 = class _ViewMaterialStepperComponent13 extends app_view.AppView$(dart.legacy(material_stepper.MaterialStepperComponent)) {
    build() {
      this.init0();
    }
  };
  (material_stepper$46template._ViewMaterialStepperComponent13.new = function(parentView, parentIndex) {
    material_stepper$46template._ViewMaterialStepperComponent13.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_stepper$46template._ViewMaterialStepperComponent13.prototype;
  dart.addTypeTests(material_stepper$46template._ViewMaterialStepperComponent13);
  dart.addTypeCaches(material_stepper$46template._ViewMaterialStepperComponent13);
  dart.setLibraryUri(material_stepper$46template._ViewMaterialStepperComponent13, L0);
  material_stepper$46template._ViewMaterialStepperComponent14 = class _ViewMaterialStepperComponent14 extends app_view.AppView$(dart.legacy(material_stepper.MaterialStepperComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this.updateChildClass(HtmlElementL().as(_el_0), "button-container");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "\n      ");
      this[_compView_2] = new material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      _el_0[$append](_el_2);
      dom_helpers.setAttribute(_el_2, "raised", "");
      dom_helpers.setAttribute(_el_2, "yesHighlighted", "");
      this.addShimC(_el_2);
      this[_MaterialYesNoButtonsComponent_2_5] = new material_yes_no_buttons.MaterialYesNoButtonsComponent.new();
      this[_compView_2].create0(this[_MaterialYesNoButtonsComponent_2_5]);
      let _text_4 = dom_helpers.appendText(_el_0, "\n    ");
      let subscription_0 = this[_MaterialYesNoButtonsComponent_2_5].yes.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_yes_2_0)));
      let subscription_1 = this[_MaterialYesNoButtonsComponent_2_5].no.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_no_2_1)));
      this.init(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialYesNoButtonsComponent_2_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        if (material_stepper.MaterialStepperComponent.continueMsg != null) {
          this[_MaterialYesNoButtonsComponent_2_5].yesText = material_stepper.MaterialStepperComponent.continueMsg;
          changed = true;
        }
        this[_MaterialYesNoButtonsComponent_2_5].yesHighlighted = true;
        changed = true;
        this[_MaterialYesNoButtonsComponent_2_5].raised = true;
        changed = true;
      }
      let currVal_1 = _ctx.noText;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialYesNoButtonsComponent_2_5].noText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_4 = _ctx.activeStep.busy;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialYesNoButtonsComponent_2_5].disabled = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = !dart.test(_ctx.activeStep.canContinue);
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialYesNoButtonsComponent_2_5].yesDisabled = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = !dart.test(_ctx.activeStep.cancelHidden) && _ctx.activeStep.index !== 0;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialYesNoButtonsComponent_2_5].noDisplayed = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_compView_2].destroyInternalState();
    }
    [_handle_yes_2_0]($36event) {
      let _ctx = this.ctx;
      _ctx.stepForward(EventL().as($36event), _ctx.activeStep);
    }
    [_handle_no_2_1]($36event) {
      let _ctx = this.ctx;
      _ctx.stepBackward(EventL().as($36event), _ctx.activeStep);
    }
  };
  (material_stepper$46template._ViewMaterialStepperComponent14.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_MaterialYesNoButtonsComponent_2_5] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    material_stepper$46template._ViewMaterialStepperComponent14.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_stepper$46template._ViewMaterialStepperComponent14.prototype;
  dart.addTypeTests(material_stepper$46template._ViewMaterialStepperComponent14);
  dart.addTypeCaches(material_stepper$46template._ViewMaterialStepperComponent14);
  dart.setMethodSignature(material_stepper$46template._ViewMaterialStepperComponent14, () => ({
    __proto__: dart.getMethods(material_stepper$46template._ViewMaterialStepperComponent14.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_yes_2_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_no_2_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_stepper$46template._ViewMaterialStepperComponent14, L0);
  dart.setFieldSignature(material_stepper$46template._ViewMaterialStepperComponent14, () => ({
    __proto__: dart.getFields(material_stepper$46template._ViewMaterialStepperComponent14.__proto__),
    [_compView_2]: dart.fieldType(dart.legacy(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0)),
    [_MaterialYesNoButtonsComponent_2_5]: dart.fieldType(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)),
    [_expr_1]: dart.fieldType(dart.legacy(core.String)),
    [_expr_4]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_5]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_6]: dart.fieldType(dart.legacy(core.bool))
  }));
  material_stepper$46template._ViewMaterialStepperComponent15 = class _ViewMaterialStepperComponent15 extends app_view.AppView$(dart.legacy(material_stepper.MaterialStepperComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      dom_helpers.setAttribute(_el_0, "aria-live", "assertive");
      this.updateChildClass(HtmlElementL().as(_el_0), "visible-to-screen-reader-only");
      this.addShimC(HtmlElementL().as(_el_0));
      let _text_1 = dom_helpers.appendText(_el_0, "\n  ");
      _el_0[$append](this[_textBinding_2].element);
      let _text_3 = dom_helpers.appendText(_el_0, "\n");
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_2].updateText(interpolate.interpolateString0(_ctx.stepAriaAnnounce));
    }
  };
  (material_stepper$46template._ViewMaterialStepperComponent15.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    material_stepper$46template._ViewMaterialStepperComponent15.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_stepper$46template._ViewMaterialStepperComponent15.prototype;
  dart.addTypeTests(material_stepper$46template._ViewMaterialStepperComponent15);
  dart.addTypeCaches(material_stepper$46template._ViewMaterialStepperComponent15);
  dart.setLibraryUri(material_stepper$46template._ViewMaterialStepperComponent15, L0);
  dart.setFieldSignature(material_stepper$46template._ViewMaterialStepperComponent15, () => ({
    __proto__: dart.getFields(material_stepper$46template._ViewMaterialStepperComponent15.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _compView_0 = dart.privateName(material_stepper$46template, "_compView_0");
  var _MaterialStepperComponent_0_5 = dart.privateName(material_stepper$46template, "_MaterialStepperComponent_0_5");
  material_stepper$46template._ViewMaterialStepperComponentHost0 = class _ViewMaterialStepperComponentHost0 extends app_view.AppView$(dart.legacy(material_stepper.MaterialStepperComponent)) {
    build() {
      this[_compView_0] = new material_stepper$46template.ViewMaterialStepperComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialStepperComponent_0_5] = new material_stepper.MaterialStepperComponent.new();
      this[_MaterialStepperComponent_0_5].stepsQuery = JSArrayOfStepDirectiveL().of([]);
      this[_compView_0].create(this[_MaterialStepperComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialStepperComponentL()).new(0, this, this.rootEl, this[_MaterialStepperComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(MaterialStepperComponentL()) && 0 === nodeIndex) {
        return this[_MaterialStepperComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_stepper$46template._ViewMaterialStepperComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialStepperComponent_0_5] = null;
    material_stepper$46template._ViewMaterialStepperComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_stepper$46template._ViewMaterialStepperComponentHost0.prototype;
  dart.addTypeTests(material_stepper$46template._ViewMaterialStepperComponentHost0);
  dart.addTypeCaches(material_stepper$46template._ViewMaterialStepperComponentHost0);
  dart.setMethodSignature(material_stepper$46template._ViewMaterialStepperComponentHost0, () => ({
    __proto__: dart.getMethods(material_stepper$46template._ViewMaterialStepperComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_stepper$46template._ViewMaterialStepperComponentHost0, L0);
  dart.setFieldSignature(material_stepper$46template._ViewMaterialStepperComponentHost0, () => ({
    __proto__: dart.getFields(material_stepper$46template._ViewMaterialStepperComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_stepper$46template.ViewMaterialStepperComponent0)),
    [_MaterialStepperComponent_0_5]: dart.fieldType(dart.legacy(material_stepper.MaterialStepperComponent))
  }));
  material_stepper$46template.viewFactory_MaterialStepperComponent1 = function viewFactory_MaterialStepperComponent1(parentView, parentIndex) {
    return new material_stepper$46template._ViewMaterialStepperComponent1.new(parentView, parentIndex);
  };
  material_stepper$46template.viewFactory_MaterialStepperComponent2 = function viewFactory_MaterialStepperComponent2(parentView, parentIndex) {
    return new material_stepper$46template._ViewMaterialStepperComponent2.new(parentView, parentIndex);
  };
  material_stepper$46template.viewFactory_MaterialStepperComponent3 = function viewFactory_MaterialStepperComponent3(parentView, parentIndex) {
    return new material_stepper$46template._ViewMaterialStepperComponent3.new(parentView, parentIndex);
  };
  material_stepper$46template.viewFactory_MaterialStepperComponent4 = function viewFactory_MaterialStepperComponent4(parentView, parentIndex) {
    return new material_stepper$46template._ViewMaterialStepperComponent4.new(parentView, parentIndex);
  };
  material_stepper$46template.viewFactory_MaterialStepperComponent5 = function viewFactory_MaterialStepperComponent5(parentView, parentIndex) {
    return new material_stepper$46template._ViewMaterialStepperComponent5.new(parentView, parentIndex);
  };
  material_stepper$46template.viewFactory_MaterialStepperComponent6 = function viewFactory_MaterialStepperComponent6(parentView, parentIndex) {
    return new material_stepper$46template._ViewMaterialStepperComponent6.new(parentView, parentIndex);
  };
  material_stepper$46template.viewFactory_MaterialStepperComponent7 = function viewFactory_MaterialStepperComponent7(parentView, parentIndex) {
    return new material_stepper$46template._ViewMaterialStepperComponent7.new(parentView, parentIndex);
  };
  material_stepper$46template.viewFactory_MaterialStepperComponent8 = function viewFactory_MaterialStepperComponent8(parentView, parentIndex) {
    return new material_stepper$46template._ViewMaterialStepperComponent8.new(parentView, parentIndex);
  };
  material_stepper$46template.viewFactory_MaterialStepperComponent9 = function viewFactory_MaterialStepperComponent9(parentView, parentIndex) {
    return new material_stepper$46template._ViewMaterialStepperComponent9.new(parentView, parentIndex);
  };
  material_stepper$46template.viewFactory_MaterialStepperComponent10 = function viewFactory_MaterialStepperComponent10(parentView, parentIndex) {
    return new material_stepper$46template._ViewMaterialStepperComponent10.new(parentView, parentIndex);
  };
  material_stepper$46template.viewFactory_MaterialStepperComponent11 = function viewFactory_MaterialStepperComponent11(parentView, parentIndex) {
    return new material_stepper$46template._ViewMaterialStepperComponent11.new(parentView, parentIndex);
  };
  material_stepper$46template.viewFactory_MaterialStepperComponent12 = function viewFactory_MaterialStepperComponent12(parentView, parentIndex) {
    return new material_stepper$46template._ViewMaterialStepperComponent12.new(parentView, parentIndex);
  };
  material_stepper$46template.viewFactory_MaterialStepperComponent13 = function viewFactory_MaterialStepperComponent13(parentView, parentIndex) {
    return new material_stepper$46template._ViewMaterialStepperComponent13.new(parentView, parentIndex);
  };
  material_stepper$46template.viewFactory_MaterialStepperComponent14 = function viewFactory_MaterialStepperComponent14(parentView, parentIndex) {
    return new material_stepper$46template._ViewMaterialStepperComponent14.new(parentView, parentIndex);
  };
  material_stepper$46template.viewFactory_MaterialStepperComponent15 = function viewFactory_MaterialStepperComponent15(parentView, parentIndex) {
    return new material_stepper$46template._ViewMaterialStepperComponent15.new(parentView, parentIndex);
  };
  material_stepper$46template.viewFactory_MaterialStepperComponentHost0 = function viewFactory_MaterialStepperComponentHost0(parentView, parentIndex) {
    return new material_stepper$46template._ViewMaterialStepperComponentHost0.new(parentView, parentIndex);
  };
  material_stepper$46template.initReflector = function initReflector() {
    if (dart.test(material_stepper$46template._visited)) {
      return;
    }
    material_stepper$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialStepperComponentL()), material_stepper$46template.MaterialStepperComponentNgFactory);
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    portal$46template.initReflector();
    material_icon$46template.initReflector();
    common$46template.initReflector();
    material_step$46template.initReflector();
    material_yes_no_buttons$46template.initReflector();
    async_action$46template.initReflector();
    properties$46template.initReflector();
    angular_2$46template.initReflector();
    events$46template.initReflector();
  };
  dart.copyProperties(material_stepper$46template, {
    get MaterialStepperComponentNgFactory() {
      return material_stepper$46template._MaterialStepperComponentNgFactory;
    }
  });
  var C16;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C15;
  var C17;
  dart.defineLazy(material_stepper$46template, {
    /*material_stepper$46template.styles$MaterialStepperComponent*/get styles$MaterialStepperComponent() {
      return [material_stepper$46scss$46css$46shim.styles];
    },
    /*material_stepper$46template._MaterialStepperComponentNgFactory*/get _MaterialStepperComponentNgFactory() {
      return C15 || CT.C15;
    },
    /*material_stepper$46template.styles$MaterialStepperComponentHost*/get styles$MaterialStepperComponentHost() {
      return C17 || CT.C17;
    },
    /*material_stepper$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_stepper/material_stepper.template", {
    "package:angular_components/material_stepper/material_stepper.template.dart": material_stepper$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_stepper.template.dart"],"names":[],"mappings":"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","file":"material_stepper.template.ddc.js"}');
  // Exports:
  return {
    material_stepper__material_stepper$46template: material_stepper$46template
  };
}));

//# sourceMappingURL=material_stepper.template.ddc.js.map
