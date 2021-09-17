define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_datepicker/next_prev_buttons', 'packages/angular/angular.template', 'packages/angular_components/src/material_datepicker/sequential.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/material_datepicker/next_prev_buttons.scss.css.shim'], (function load__packages__angular_components__material_datepicker__next_prev_buttons_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular__src__runtime__interpolate, packages__angular_components__material_datepicker__next_prev_buttons, packages__angular__angular$46template, packages__angular_components__src__material_datepicker__sequential$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__material_datepicker__next_prev_buttons$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const next_prev_buttons = packages__angular_components__material_datepicker__next_prev_buttons.material_datepicker__next_prev_buttons;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const sequential$46template = packages__angular_components__src__material_datepicker__sequential$46template.src__material_datepicker__sequential$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const next_prev_buttons$46scss$46css$46shim = packages__angular_components__material_datepicker__next_prev_buttons$46scss$46css$46shim.material_datepicker__next_prev_buttons$46scss$46css$46shim;
  var next_prev_buttons$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var ButtonElementL = () => (ButtonElementL = dart.constFn(dart.legacy(html.ButtonElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var NextPrevComponentL = () => (NextPrevComponentL = dart.constFn(dart.legacy(next_prev_buttons.NextPrevComponent)))();
  var ComponentRefOfNextPrevComponentL = () => (ComponentRefOfNextPrevComponentL = dart.constFn(component_factory.ComponentRef$(NextPrevComponentL())))();
  var ComponentFactoryOfNextPrevComponentL = () => (ComponentFactoryOfNextPrevComponentL = dart.constFn(component_factory.ComponentFactory$(NextPrevComponentL())))();
  var AppViewOfNextPrevComponentL = () => (AppViewOfNextPrevComponentL = dart.constFn(app_view.AppView$(NextPrevComponentL())))();
  var AppViewLOfNextPrevComponentL = () => (AppViewLOfNextPrevComponentL = dart.constFn(dart.legacy(AppViewOfNextPrevComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfNextPrevComponentL = () => (AppViewLAndintLToAppViewLOfNextPrevComponentL = dart.constFn(dart.fnType(AppViewLOfNextPrevComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/next_prev_buttons.template.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(next_prev_buttons$46template.viewFactory_NextPrevComponentHost0, AppViewLAndintLToAppViewLOfNextPrevComponentL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfNextPrevComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "next-prev-buttons"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _compView_1 = dart.privateName(next_prev_buttons$46template, "_compView_1");
  var _MaterialIconComponent_1_5 = dart.privateName(next_prev_buttons$46template, "_MaterialIconComponent_1_5");
  var _compView_4 = dart.privateName(next_prev_buttons$46template, "_compView_4");
  var _MaterialIconComponent_4_5 = dart.privateName(next_prev_buttons$46template, "_MaterialIconComponent_4_5");
  var _expr_0 = dart.privateName(next_prev_buttons$46template, "_expr_0");
  var _expr_1 = dart.privateName(next_prev_buttons$46template, "_expr_1");
  var _expr_2 = dart.privateName(next_prev_buttons$46template, "_expr_2");
  var _expr_3 = dart.privateName(next_prev_buttons$46template, "_expr_3");
  var _expr_5 = dart.privateName(next_prev_buttons$46template, "_expr_5");
  var _expr_6 = dart.privateName(next_prev_buttons$46template, "_expr_6");
  var _expr_7 = dart.privateName(next_prev_buttons$46template, "_expr_7");
  var _expr_8 = dart.privateName(next_prev_buttons$46template, "_expr_8");
  var _el_0 = dart.privateName(next_prev_buttons$46template, "_el_0");
  var _el_1 = dart.privateName(next_prev_buttons$46template, "_el_1");
  var _el_3 = dart.privateName(next_prev_buttons$46template, "_el_3");
  var _el_4 = dart.privateName(next_prev_buttons$46template, "_el_4");
  next_prev_buttons$46template.ViewNextPrevComponent0 = class ViewNextPrevComponent0 extends app_view.AppView$(dart.legacy(next_prev_buttons.NextPrevComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/next_prev_buttons.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = ButtonElementL().as(dom_helpers.appendElement(doc, parentRenderNode, "button"));
      this.updateChildClass(this[_el_0], "prev");
      this.addShimC(this[_el_0]);
      this[_compView_1] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      dom_helpers.setAttribute(this[_el_1], "icon", "navigate_before");
      this.addShimC(HtmlElementL().as(this[_el_1]));
      this[_MaterialIconComponent_1_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_1]));
      this[_compView_1].create0(this[_MaterialIconComponent_1_5]);
      let _text_2 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_el_3] = ButtonElementL().as(dom_helpers.appendElement(doc, parentRenderNode, "button"));
      this.updateChildClass(this[_el_3], "next");
      this.addShimC(this[_el_3]);
      this[_compView_4] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      this[_el_3][$append](this[_el_4]);
      dom_helpers.setAttribute(this[_el_4], "icon", "navigate_next");
      this.addShimC(HtmlElementL().as(this[_el_4]));
      this[_MaterialIconComponent_4_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_4]));
      this[_compView_4].create0(this[_MaterialIconComponent_4_5]);
      this[_el_0][$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'prev')));
      this[_el_3][$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'next')));
      this.init0();
      _rootEl[$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'stopPropagation')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(EventL(), EventL(), dart.bind(_ctx, 'stopPropagation')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_1_5].icon = "navigate_before";
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_4_5].icon = "navigate_next";
        changed = true;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      let currVal_0 = _ctx.isPrevDisabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(this[_el_0], "disabled", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = interpolate.interpolate0(_ctx.isPrevDisabled);
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.setAttribute(this[_el_0], "aria-disabled", StringL().as(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = interpolate.interpolate0(dart.test(_ctx.isPrevDisabled) ? 0 - 1 : 0);
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.setAttribute(this[_el_0], "tabindex", StringL().as(currVal_2));
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.prevLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        dom_helpers.updateAttribute(this[_el_1], "aria-label", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_5 = _ctx.isNextDisabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        dom_helpers.updateClassBinding(this[_el_3], "disabled", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = interpolate.interpolate0(_ctx.isNextDisabled);
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        dom_helpers.setAttribute(this[_el_3], "aria-disabled", StringL().as(currVal_6));
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = interpolate.interpolate0(dart.test(_ctx.isNextDisabled) ? 0 - 1 : 0);
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        dom_helpers.setAttribute(this[_el_3], "tabindex", StringL().as(currVal_7));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = _ctx.nextLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        dom_helpers.updateAttribute(this[_el_4], "aria-label", currVal_8);
        this[_expr_8] = currVal_8;
      }
      this[_compView_1].detectChanges();
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_compView_4].destroyInternalState();
    }
    initComponentStyles() {
      let styles = next_prev_buttons$46template.ViewNextPrevComponent0._componentStyles;
      if (styles == null) {
        next_prev_buttons$46template.ViewNextPrevComponent0._componentStyles = styles = next_prev_buttons$46template.ViewNextPrevComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(next_prev_buttons$46template.styles$NextPrevComponent, next_prev_buttons$46template.ViewNextPrevComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (next_prev_buttons$46template.ViewNextPrevComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialIconComponent_1_5] = null;
    this[_compView_4] = null;
    this[_MaterialIconComponent_4_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    next_prev_buttons$46template.ViewNextPrevComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("next-prev-buttons"));
  }).prototype = next_prev_buttons$46template.ViewNextPrevComponent0.prototype;
  dart.addTypeTests(next_prev_buttons$46template.ViewNextPrevComponent0);
  dart.addTypeCaches(next_prev_buttons$46template.ViewNextPrevComponent0);
  dart.setLibraryUri(next_prev_buttons$46template.ViewNextPrevComponent0, L0);
  dart.setFieldSignature(next_prev_buttons$46template.ViewNextPrevComponent0, () => ({
    __proto__: dart.getFields(next_prev_buttons$46template.ViewNextPrevComponent0.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_1_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_compView_4]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_4_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.ButtonElement)),
    [_el_1]: dart.fieldType(dart.legacy(html.Element)),
    [_el_3]: dart.fieldType(dart.legacy(html.ButtonElement)),
    [_el_4]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(next_prev_buttons$46template.ViewNextPrevComponent0, {
    /*next_prev_buttons$46template.ViewNextPrevComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(next_prev_buttons$46template, "_compView_0");
  var _NextPrevComponent_0_5 = dart.privateName(next_prev_buttons$46template, "_NextPrevComponent_0_5");
  next_prev_buttons$46template._ViewNextPrevComponentHost0 = class _ViewNextPrevComponentHost0 extends app_view.AppView$(dart.legacy(next_prev_buttons.NextPrevComponent)) {
    build() {
      this[_compView_0] = new next_prev_buttons$46template.ViewNextPrevComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_NextPrevComponent_0_5] = new next_prev_buttons.NextPrevComponent.new(this[_compView_0]);
      this[_compView_0].create(this[_NextPrevComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfNextPrevComponentL()).new(0, this, this.rootEl, this[_NextPrevComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_NextPrevComponent_0_5].ngOnDestroy();
    }
  };
  (next_prev_buttons$46template._ViewNextPrevComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_NextPrevComponent_0_5] = null;
    next_prev_buttons$46template._ViewNextPrevComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = next_prev_buttons$46template._ViewNextPrevComponentHost0.prototype;
  dart.addTypeTests(next_prev_buttons$46template._ViewNextPrevComponentHost0);
  dart.addTypeCaches(next_prev_buttons$46template._ViewNextPrevComponentHost0);
  dart.setLibraryUri(next_prev_buttons$46template._ViewNextPrevComponentHost0, L0);
  dart.setFieldSignature(next_prev_buttons$46template._ViewNextPrevComponentHost0, () => ({
    __proto__: dart.getFields(next_prev_buttons$46template._ViewNextPrevComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(next_prev_buttons$46template.ViewNextPrevComponent0)),
    [_NextPrevComponent_0_5]: dart.fieldType(dart.legacy(next_prev_buttons.NextPrevComponent))
  }));
  next_prev_buttons$46template.viewFactory_NextPrevComponentHost0 = function viewFactory_NextPrevComponentHost0(parentView, parentIndex) {
    return new next_prev_buttons$46template._ViewNextPrevComponentHost0.new(parentView, parentIndex);
  };
  next_prev_buttons$46template.initReflector = function initReflector() {
    if (dart.test(next_prev_buttons$46template._visited)) {
      return;
    }
    next_prev_buttons$46template._visited = true;
    reflector.registerComponent(dart.wrapType(NextPrevComponentL()), next_prev_buttons$46template.NextPrevComponentNgFactory);
    angular$46template.initReflector();
    material_icon$46template.initReflector();
    sequential$46template.initReflector();
    sequential$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(next_prev_buttons$46template, {
    get NextPrevComponentNgFactory() {
      return next_prev_buttons$46template._NextPrevComponentNgFactory;
    }
  });
  var C1;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C0;
  var C2;
  dart.defineLazy(next_prev_buttons$46template, {
    /*next_prev_buttons$46template.styles$NextPrevComponent*/get styles$NextPrevComponent() {
      return [next_prev_buttons$46scss$46css$46shim.styles];
    },
    /*next_prev_buttons$46template._NextPrevComponentNgFactory*/get _NextPrevComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*next_prev_buttons$46template.styles$NextPrevComponentHost*/get styles$NextPrevComponentHost() {
      return C2 || CT.C2;
    },
    /*next_prev_buttons$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/next_prev_buttons.template", {
    "package:angular_components/material_datepicker/next_prev_buttons.template.dart": next_prev_buttons$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["next_prev_buttons.template.dart"],"names":[],"mappings":"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","file":"next_prev_buttons.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__next_prev_buttons$46template: next_prev_buttons$46template
  };
}));

//# sourceMappingURL=next_prev_buttons.template.ddc.js.map
