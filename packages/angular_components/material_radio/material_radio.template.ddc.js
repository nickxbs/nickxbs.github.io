define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_radio/material_radio', 'packages/angular_components/material_ripple/material_ripple.template', 'packages/angular_components/material_ripple/material_ripple', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/ui/icon.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_components/material_radio/material_radio.scss.css.shim', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/material_radio/material_radio_group.scss.css.shim'], (function load__packages__angular_components__material_radio__material_radio_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular_components__material_radio__material_radio, packages__angular_components__material_ripple__material_ripple$46template, packages__angular_components__material_ripple__material_ripple, packages__angular_components__interfaces__has_disabled, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__focus__focus$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__model__ui__icon$46template, packages__angular_components__utils__browser__events__events$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_forms__angular_forms$46template, packages__angular_components__material_radio__material_radio$46scss$46css$46shim, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__material_radio__material_radio_group$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
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
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const material_radio = packages__angular_components__material_radio__material_radio.material_radio__material_radio;
  const material_radio_group = packages__angular_components__material_radio__material_radio.material_radio__material_radio_group;
  const material_ripple$46template = packages__angular_components__material_ripple__material_ripple$46template.material_ripple__material_ripple$46template;
  const material_ripple = packages__angular_components__material_ripple__material_ripple.material_ripple__material_ripple;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const icon$46template = packages__angular_components__model__ui__icon$46template.model__ui__icon$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const angular_forms$46template = packages__angular_forms__angular_forms$46template.angular_forms$46template;
  const material_radio$46scss$46css$46shim = packages__angular_components__material_radio__material_radio$46scss$46css$46shim.material_radio__material_radio$46scss$46css$46shim;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const material_radio_group$46scss$46css$46shim = packages__angular_components__material_radio__material_radio_group$46scss$46css$46shim.material_radio__material_radio_group$46scss$46css$46shim;
  var material_radio$46template = Object.create(dart.library);
  var material_radio_group$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var MaterialRadioComponentL = () => (MaterialRadioComponentL = dart.constFn(dart.legacy(material_radio.MaterialRadioComponent)))();
  var MaterialRadioGroupComponentL = () => (MaterialRadioGroupComponentL = dart.constFn(dart.legacy(material_radio_group.MaterialRadioGroupComponent)))();
  var VoidToMaterialRadioComponentL = () => (VoidToMaterialRadioComponentL = dart.constFn(dart.fnType(MaterialRadioComponentL(), [])))();
  var ComponentRefOfMaterialRadioComponentL = () => (ComponentRefOfMaterialRadioComponentL = dart.constFn(component_factory.ComponentRef$(MaterialRadioComponentL())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ComponentFactoryOfMaterialRadioComponentL = () => (ComponentFactoryOfMaterialRadioComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialRadioComponentL())))();
  var AppViewOfMaterialRadioComponentL = () => (AppViewOfMaterialRadioComponentL = dart.constFn(app_view.AppView$(MaterialRadioComponentL())))();
  var AppViewLOfMaterialRadioComponentL = () => (AppViewLOfMaterialRadioComponentL = dart.constFn(dart.legacy(AppViewOfMaterialRadioComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialRadioComponentL = () => (AppViewLAndintLToAppViewLOfMaterialRadioComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialRadioComponentL(), [AppViewL(), intL()])))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var VoidToMaterialRadioGroupComponentL = () => (VoidToMaterialRadioGroupComponentL = dart.constFn(dart.fnType(MaterialRadioGroupComponentL(), [])))();
  var JSArrayOfMaterialRadioComponentL = () => (JSArrayOfMaterialRadioComponentL = dart.constFn(_interceptors.JSArray$(MaterialRadioComponentL())))();
  var ComponentRefOfMaterialRadioGroupComponentL = () => (ComponentRefOfMaterialRadioGroupComponentL = dart.constFn(component_factory.ComponentRef$(MaterialRadioGroupComponentL())))();
  var ComponentFactoryOfMaterialRadioGroupComponentL = () => (ComponentFactoryOfMaterialRadioGroupComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialRadioGroupComponentL())))();
  var AppViewOfMaterialRadioGroupComponentL = () => (AppViewOfMaterialRadioGroupComponentL = dart.constFn(app_view.AppView$(MaterialRadioGroupComponentL())))();
  var AppViewLOfMaterialRadioGroupComponentL = () => (AppViewLOfMaterialRadioGroupComponentL = dart.constFn(dart.legacy(AppViewOfMaterialRadioGroupComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialRadioGroupComponentL = () => (AppViewLAndintLToAppViewLOfMaterialRadioGroupComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialRadioGroupComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L1 = "package:angular_components/material_radio/material_radio_group.template.dart";
  var L0 = "package:angular_components/material_radio/material_radio.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_radio$46template.viewFactory_MaterialRadioComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(material_radio$46template.viewFactory_MaterialRadioComponentHost0, AppViewLAndintLToAppViewLOfMaterialRadioComponentL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfMaterialRadioComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-radio"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    },
    get C5() {
      return C5 = dart.fn(material_radio_group$46template.viewFactory_MaterialRadioGroupComponentHost0, AppViewLAndintLToAppViewLOfMaterialRadioGroupComponentL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ComponentFactoryOfMaterialRadioGroupComponentL().prototype,
        [ComponentFactory__viewFactory]: C5 || CT.C5,
        [ComponentFactory_selector]: "material-radio-group"
      });
    }
  }, false);
  var _compView_1 = dart.privateName(material_radio$46template, "_compView_1");
  var _MaterialIconComponent_1_5 = dart.privateName(material_radio$46template, "_MaterialIconComponent_1_5");
  var _appEl_2 = dart.privateName(material_radio$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(material_radio$46template, "_NgIf_2_9");
  var _expr_0 = dart.privateName(material_radio$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_radio$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_radio$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_radio$46template, "_expr_3");
  var _expr_5 = dart.privateName(material_radio$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_radio$46template, "_expr_6");
  var _expr_8 = dart.privateName(material_radio$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_radio$46template, "_expr_9");
  var _el_0 = dart.privateName(material_radio$46template, "_el_0");
  var C0;
  material_radio$46template.ViewMaterialRadioComponent0 = class ViewMaterialRadioComponent0 extends app_view.AppView$(dart.legacy(material_radio.MaterialRadioComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_radio/material_radio.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "icon-container");
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      this[_el_0][$append](_el_1);
      dom_helpers.setAttribute(_el_1, "aria-hidden", "true");
      this.updateChildClassNonHtml(_el_1, "icon");
      this.addShimC(_el_1);
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(_el_1);
      this[_compView_1].create0(this[_MaterialIconComponent_1_5]);
      let _anchor_2 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C0 || CT.C0);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _el_3 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_3, "content");
      this.addShimC(_el_3);
      this.project(_el_3, 0);
      this.init0();
      _rootEl[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeyDown')));
      _rootEl[$addEventListener]("keyup", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeyUp')));
      _rootEl[$addEventListener]("focus", this.eventHandler0(EventL(), dart.bind(_ctx, 'onFocus')));
      _rootEl[$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(_ctx, 'onBlur')));
      _rootEl[$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeyPress')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_3 = _ctx.icon;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialIconComponent_1_5].icon = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.disabled);
      this[_appEl_2].detectChangesInNestedViews();
      let currVal_0 = _ctx.showFocus;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(this[_el_0], "focus", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.checked;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBinding(this[_el_0], "checked", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateClassBinding(this[_el_0], "disabled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_compView_1].destroyInternalState();
    }
    detectHostChanges(firstCheck) {
      let t0, t0$, t0$0;
      let _ctx = this.ctx;
      if (dart.test(firstCheck)) {
        if (_ctx.role != null) {
          dom_helpers.updateAttribute(this.rootEl, "role", _ctx.role);
        }
      }
      let currVal_5 = _ctx.checked;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        dom_helpers.updateAttribute(this.rootEl, "aria-checked", (t0 = currVal_5, t0 == null ? null : dart.toString(t0)));
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.tabIndex;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        dom_helpers.updateAttribute(this.rootEl, "tabindex", (t0$ = currVal_6, t0$ == null ? null : dart.toString(t0$)));
        this[_expr_6] = currVal_6;
      }
      let currVal_8 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "disabled", currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        dom_helpers.updateAttribute(this.rootEl, "aria-disabled", (t0$0 = currVal_9, t0$0 == null ? null : dart.toString(t0$0)));
        this[_expr_9] = currVal_9;
      }
    }
    initComponentStyles() {
      let styles = material_radio$46template.ViewMaterialRadioComponent0._componentStyles;
      if (styles == null) {
        material_radio$46template.ViewMaterialRadioComponent0._componentStyles = styles = material_radio$46template.ViewMaterialRadioComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_radio$46template.styles$MaterialRadioComponent, material_radio$46template.ViewMaterialRadioComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_radio$46template.ViewMaterialRadioComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_el_0] = null;
    material_radio$46template.ViewMaterialRadioComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-radio"));
    this.updateChildClassNonHtml(this.rootEl, "themeable");
  }).prototype = material_radio$46template.ViewMaterialRadioComponent0.prototype;
  dart.addTypeTests(material_radio$46template.ViewMaterialRadioComponent0);
  dart.addTypeCaches(material_radio$46template.ViewMaterialRadioComponent0);
  dart.setLibraryUri(material_radio$46template.ViewMaterialRadioComponent0, L0);
  dart.setFieldSignature(material_radio$46template.ViewMaterialRadioComponent0, () => ({
    __proto__: dart.getFields(material_radio$46template.ViewMaterialRadioComponent0.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_1_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(material_radio$46template.ViewMaterialRadioComponent0, {
    /*material_radio$46template.ViewMaterialRadioComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_radio$46template, "_compView_0");
  var _MaterialRippleComponent_0_5 = dart.privateName(material_radio$46template, "_MaterialRippleComponent_0_5");
  material_radio$46template._ViewMaterialRadioComponent1 = class _ViewMaterialRadioComponent1 extends app_view.AppView$(dart.legacy(material_radio.MaterialRadioComponent)) {
    build() {
      this[_compView_0] = new material_ripple$46template.ViewMaterialRippleComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(_el_0, "ripple");
      this.addShimC(_el_0);
      this[_MaterialRippleComponent_0_5] = new material_ripple.MaterialRippleComponent.new(_el_0);
      this[_compView_0].create0(this[_MaterialRippleComponent_0_5]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialRippleComponent_0_5].ngOnDestroy();
    }
  };
  (material_radio$46template._ViewMaterialRadioComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialRippleComponent_0_5] = null;
    material_radio$46template._ViewMaterialRadioComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_radio$46template._ViewMaterialRadioComponent1.prototype;
  dart.addTypeTests(material_radio$46template._ViewMaterialRadioComponent1);
  dart.addTypeCaches(material_radio$46template._ViewMaterialRadioComponent1);
  dart.setLibraryUri(material_radio$46template._ViewMaterialRadioComponent1, L0);
  dart.setFieldSignature(material_radio$46template._ViewMaterialRadioComponent1, () => ({
    __proto__: dart.getFields(material_radio$46template._ViewMaterialRadioComponent1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_ripple$46template.ViewMaterialRippleComponent0)),
    [_MaterialRippleComponent_0_5]: dart.fieldType(dart.legacy(material_ripple.MaterialRippleComponent))
  }));
  var _MaterialRadioComponent_0_5 = dart.privateName(material_radio$46template, "_MaterialRadioComponent_0_5");
  material_radio$46template._ViewMaterialRadioComponentHost0 = class _ViewMaterialRadioComponentHost0 extends app_view.AppView$(dart.legacy(material_radio.MaterialRadioComponent)) {
    build() {
      this[_compView_0] = new material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialRadioComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialRadioComponentL(), dart.wrapType(MaterialRadioComponentL()), dart.fn(() => new material_radio.MaterialRadioComponent.new(this.rootEl, this[_compView_0], MaterialRadioGroupComponentL().as(this.injectorGetOptional(dart.wrapType(MaterialRadioGroupComponentL()), this.viewData.parentIndex)), null, null), VoidToMaterialRadioComponentL())) : new material_radio.MaterialRadioComponent.new(this.rootEl, this[_compView_0], MaterialRadioGroupComponentL().as(this.injectorGetOptional(dart.wrapType(MaterialRadioGroupComponentL()), this.viewData.parentIndex)), null, null);
      this[_compView_0].create(this[_MaterialRadioComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialRadioComponentL()).new(0, this, this.rootEl, this[_MaterialRadioComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
        return this[_MaterialRadioComponent_0_5];
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
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialRadioComponent_0_5].ngOnDestroy();
    }
  };
  (material_radio$46template._ViewMaterialRadioComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialRadioComponent_0_5] = null;
    material_radio$46template._ViewMaterialRadioComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_radio$46template._ViewMaterialRadioComponentHost0.prototype;
  dart.addTypeTests(material_radio$46template._ViewMaterialRadioComponentHost0);
  dart.addTypeCaches(material_radio$46template._ViewMaterialRadioComponentHost0);
  dart.setMethodSignature(material_radio$46template._ViewMaterialRadioComponentHost0, () => ({
    __proto__: dart.getMethods(material_radio$46template._ViewMaterialRadioComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_radio$46template._ViewMaterialRadioComponentHost0, L0);
  dart.setFieldSignature(material_radio$46template._ViewMaterialRadioComponentHost0, () => ({
    __proto__: dart.getFields(material_radio$46template._ViewMaterialRadioComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_radio$46template.ViewMaterialRadioComponent0)),
    [_MaterialRadioComponent_0_5]: dart.fieldType(dart.legacy(material_radio.MaterialRadioComponent))
  }));
  material_radio$46template.viewFactory_MaterialRadioComponent1 = function viewFactory_MaterialRadioComponent1(parentView, parentIndex) {
    return new material_radio$46template._ViewMaterialRadioComponent1.new(parentView, parentIndex);
  };
  material_radio$46template.viewFactory_MaterialRadioComponentHost0 = function viewFactory_MaterialRadioComponentHost0(parentView, parentIndex) {
    return new material_radio$46template._ViewMaterialRadioComponentHost0.new(parentView, parentIndex);
  };
  material_radio$46template.initReflector = function initReflector() {
    if (dart.test(material_radio$46template._visited)) {
      return;
    }
    material_radio$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialRadioComponentL()), material_radio$46template.MaterialRadioComponentNgFactory);
    angular$46template.initReflector();
    meta$46template.initReflector();
    focus$46template.initReflector();
    has_disabled$46template.initReflector();
    material_icon$46template.initReflector();
    material_radio_group$46template.initReflector();
    material_ripple$46template.initReflector();
    icon$46template.initReflector();
    events$46template.initReflector();
    disposer$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.copyProperties(material_radio$46template, {
    get MaterialRadioComponentNgFactory() {
      return material_radio$46template._MaterialRadioComponentNgFactory;
    }
  });
  var C2;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C1;
  var C3;
  dart.defineLazy(material_radio$46template, {
    /*material_radio$46template.styles$MaterialRadioComponent*/get styles$MaterialRadioComponent() {
      return [material_radio$46scss$46css$46shim.styles];
    },
    /*material_radio$46template._MaterialRadioComponentNgFactory*/get _MaterialRadioComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*material_radio$46template.styles$MaterialRadioComponentHost*/get styles$MaterialRadioComponentHost() {
      return C3 || CT.C3;
    },
    /*material_radio$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  material_radio_group$46template.ViewMaterialRadioGroupComponent0 = class ViewMaterialRadioGroupComponent0 extends app_view.AppView$(dart.legacy(material_radio_group.MaterialRadioGroupComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_radio/material_radio_group.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this.project(parentRenderNode, 0);
      this.init0();
    }
    initComponentStyles() {
      let styles = material_radio_group$46template.ViewMaterialRadioGroupComponent0._componentStyles;
      if (styles == null) {
        material_radio_group$46template.ViewMaterialRadioGroupComponent0._componentStyles = styles = material_radio_group$46template.ViewMaterialRadioGroupComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_radio_group$46template.styles$MaterialRadioGroupComponent, material_radio_group$46template.ViewMaterialRadioGroupComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_radio_group$46template.ViewMaterialRadioGroupComponent0.new = function(parentView, parentIndex) {
    material_radio_group$46template.ViewMaterialRadioGroupComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-radio-group"));
    dom_helpers.updateAttribute(this.rootEl, "role", "radiogroup");
    this.rootEl.tabIndex = -1;
  }).prototype = material_radio_group$46template.ViewMaterialRadioGroupComponent0.prototype;
  dart.addTypeTests(material_radio_group$46template.ViewMaterialRadioGroupComponent0);
  dart.addTypeCaches(material_radio_group$46template.ViewMaterialRadioGroupComponent0);
  dart.setLibraryUri(material_radio_group$46template.ViewMaterialRadioGroupComponent0, L1);
  dart.defineLazy(material_radio_group$46template.ViewMaterialRadioGroupComponent0, {
    /*material_radio_group$46template.ViewMaterialRadioGroupComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0$ = dart.privateName(material_radio_group$46template, "_compView_0");
  var _MaterialRadioGroupComponent_0_5 = dart.privateName(material_radio_group$46template, "_MaterialRadioGroupComponent_0_5");
  material_radio_group$46template._ViewMaterialRadioGroupComponentHost0 = class _ViewMaterialRadioGroupComponentHost0 extends app_view.AppView$(dart.legacy(material_radio_group.MaterialRadioGroupComponent)) {
    build() {
      this[_compView_0$] = new material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_MaterialRadioGroupComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialRadioGroupComponentL(), dart.wrapType(MaterialRadioGroupComponentL()), dart.fn(() => new material_radio_group.MaterialRadioGroupComponent.new(NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), null), VoidToMaterialRadioGroupComponentL())) : new material_radio_group.MaterialRadioGroupComponent.new(NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), null);
      this[_MaterialRadioGroupComponent_0_5].radioComponents = JSArrayOfMaterialRadioComponentL().of([]);
      this[_compView_0$].create(this[_MaterialRadioGroupComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialRadioGroupComponentL()).new(0, this, this.rootEl, this[_MaterialRadioGroupComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(MaterialRadioGroupComponentL()) && 0 === nodeIndex) {
        return this[_MaterialRadioGroupComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialRadioGroupComponent_0_5].ngAfterContentInit();
        }
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
      this[_MaterialRadioGroupComponent_0_5].ngOnDestroy();
    }
  };
  (material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialRadioGroupComponent_0_5] = null;
    material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.prototype;
  dart.addTypeTests(material_radio_group$46template._ViewMaterialRadioGroupComponentHost0);
  dart.addTypeCaches(material_radio_group$46template._ViewMaterialRadioGroupComponentHost0);
  dart.setMethodSignature(material_radio_group$46template._ViewMaterialRadioGroupComponentHost0, () => ({
    __proto__: dart.getMethods(material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_radio_group$46template._ViewMaterialRadioGroupComponentHost0, L1);
  dart.setFieldSignature(material_radio_group$46template._ViewMaterialRadioGroupComponentHost0, () => ({
    __proto__: dart.getFields(material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(dart.legacy(material_radio_group$46template.ViewMaterialRadioGroupComponent0)),
    [_MaterialRadioGroupComponent_0_5]: dart.fieldType(dart.legacy(material_radio_group.MaterialRadioGroupComponent))
  }));
  material_radio_group$46template.viewFactory_MaterialRadioGroupComponentHost0 = function viewFactory_MaterialRadioGroupComponentHost0(parentView, parentIndex) {
    return new material_radio_group$46template._ViewMaterialRadioGroupComponentHost0.new(parentView, parentIndex);
  };
  material_radio_group$46template.initReflector = function initReflector$() {
    if (dart.test(material_radio_group$46template._visited)) {
      return;
    }
    material_radio_group$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialRadioGroupComponentL()), material_radio_group$46template.MaterialRadioGroupComponentNgFactory);
    angular$46template.initReflector();
    focus$46template.initReflector();
    material_radio$46template.initReflector();
    selection_model$46template.initReflector();
    disposer$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.copyProperties(material_radio_group$46template, {
    get MaterialRadioGroupComponentNgFactory() {
      return material_radio_group$46template._MaterialRadioGroupComponentNgFactory;
    }
  });
  var C5;
  var C4;
  dart.defineLazy(material_radio_group$46template, {
    /*material_radio_group$46template.styles$MaterialRadioGroupComponent*/get styles$MaterialRadioGroupComponent() {
      return [material_radio_group$46scss$46css$46shim.styles];
    },
    /*material_radio_group$46template._MaterialRadioGroupComponentNgFactory*/get _MaterialRadioGroupComponentNgFactory() {
      return C4 || CT.C4;
    },
    /*material_radio_group$46template.styles$MaterialRadioGroupComponentHost*/get styles$MaterialRadioGroupComponentHost() {
      return C3 || CT.C3;
    },
    /*material_radio_group$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_radio/material_radio.template", {
    "package:angular_components/material_radio/material_radio.template.dart": material_radio$46template,
    "package:angular_components/material_radio/material_radio_group.template.dart": material_radio_group$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_radio.template.dart","material_radio_group.template.dart"],"names":[],"mappings":"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","file":"material_radio.template.ddc.js"}');
  // Exports:
  return {
    material_radio__material_radio$46template: material_radio$46template,
    material_radio__material_radio_group$46template: material_radio_group$46template
  };
}));

//# sourceMappingURL=material_radio.template.ddc.js.map
