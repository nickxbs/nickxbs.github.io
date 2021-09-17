define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_chips/material_chip', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/material_chips/material_chip.scss.css.shim'], (function load__packages__angular_components__material_chips__material_chip_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular__src__runtime__interpolate, packages__angular_components__material_chips__material_chip, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__button_decorator__button_decorator, packages__angular_components__model__ui__has_renderer, packages__angular__angular$46template, packages__angular_components__focus__focus$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__ui__has_renderer$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_components__material_chips__material_chip$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
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
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_chip = packages__angular_components__material_chips__material_chip.material_chips__material_chip;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const material_chip$46scss$46css$46shim = packages__angular_components__material_chips__material_chip$46scss$46css$46shim.material_chips__material_chip$46scss$46css$46shim;
  var material_chip$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $createElementNS = dartx.createElementNS;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var AppViewOfObjectL = () => (AppViewOfObjectL = dart.constFn(app_view.AppView$(ObjectL())))();
  var AppViewLOfObjectL = () => (AppViewLOfObjectL = dart.constFn(dart.legacy(AppViewOfObjectL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLOfObjectLAndintLToAppViewLOfvoid = () => (AppViewLOfObjectLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewLOfObjectL(), intL()])))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var MaterialChipComponentL = () => (MaterialChipComponentL = dart.constFn(dart.legacy(material_chip.MaterialChipComponent)))();
  var ComponentFactoryOfMaterialChipComponentL = () => (ComponentFactoryOfMaterialChipComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialChipComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var AppViewLAndintLToAppViewLOfMaterialChipComponentLOfTL = () => (AppViewLAndintLToAppViewLOfMaterialChipComponentLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialChipComponentOfTL = () => (MaterialChipComponentOfTL = dart.constFn(material_chip.MaterialChipComponent$(TL())))();
    var MaterialChipComponentLOfTL = () => (MaterialChipComponentLOfTL = dart.constFn(dart.legacy(MaterialChipComponentOfTL())))();
    var AppViewOfMaterialChipComponentLOfTL = () => (AppViewOfMaterialChipComponentLOfTL = dart.constFn(app_view.AppView$(MaterialChipComponentLOfTL())))();
    var AppViewLOfMaterialChipComponentLOfTL = () => (AppViewLOfMaterialChipComponentLOfTL = dart.constFn(dart.legacy(AppViewOfMaterialChipComponentLOfTL())))();
    return [AppViewLOfMaterialChipComponentLOfTL(), [AppViewL(), intL()]];
  })))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_chips/material_chip.template.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.fn(material_chip$46template.viewFactory_MaterialChipComponentHost0, AppViewLAndintLToAppViewLOfMaterialChipComponentLOfTL());
    },
    get C1() {
      return C1 = dart.const(dart.gbind(C2 || CT.C2, dart.dynamic));
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfMaterialChipComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-chip"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _textBinding_2 = dart.privateName(material_chip$46template, "_textBinding_2");
  var _appEl_0 = dart.privateName(material_chip$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(material_chip$46template, "_NgIf_0_9");
  var _appEl_4 = dart.privateName(material_chip$46template, "_appEl_4");
  var _NgIf_4_9 = dart.privateName(material_chip$46template, "_NgIf_4_9");
  var _expr_1 = dart.privateName(material_chip$46template, "_expr_1");
  var _el_1 = dart.privateName(material_chip$46template, "_el_1");
  const _is_ViewMaterialChipComponent0_default = Symbol('_is_ViewMaterialChipComponent0_default');
  material_chip$46template.ViewMaterialChipComponent0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ViewMaterialChipComponent0 extends app_view.AppView$(dart.legacy(material_chip.MaterialChipComponent$(dart.legacy(T)))) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_chips/material_chip.dart" : null;
      }
      build() {
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_chip$46template.viewFactory_MaterialChipComponent1(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let doc = html.document;
        this[_el_1] = dom_helpers.appendDiv(doc, parentRenderNode);
        this.updateChildClass(this[_el_1], "content");
        this.addShimC(this[_el_1]);
        this[_el_1][$append](this[_textBinding_2].element);
        let _text_3 = dom_helpers.appendText(this[_el_1], " ");
        this.project(this[_el_1], 1);
        let _anchor_4 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_4] = new view_container.ViewContainer.new(4, null, this, _anchor_4);
        let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], dart.fn((parentView, parentIndex) => material_chip$46template.viewFactory_MaterialChipComponent2(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
        this.init0();
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_0_9].ngIf = _ctx.hasLeftIcon;
        this[_NgIf_4_9].ngIf = _ctx.removable;
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_4].detectChangesInNestedViews();
        let currVal_1 = _ctx.uuid;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          dom_helpers.setProperty(this[_el_1], "id", currVal_1);
          this[_expr_1] = currVal_1;
        }
        this[_textBinding_2].updateText(interpolate.interpolateString0(_ctx.label));
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_4].destroyNestedViews();
      }
      initComponentStyles() {
        let styles = material_chip$46template.ViewMaterialChipComponent0._componentStyles;
        if (styles == null) {
          material_chip$46template.ViewMaterialChipComponent0._componentStyles = styles = material_chip$46template.ViewMaterialChipComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_chip$46template.styles$MaterialChipComponent, material_chip$46template.ViewMaterialChipComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialChipComponent0.new = function(parentView, parentIndex) {
      this[_textBinding_2] = new text_binding.TextBinding.new();
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_4] = null;
      this[_NgIf_4_9] = null;
      this[_expr_1] = null;
      this[_el_1] = null;
      ViewMaterialChipComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
      this.initComponentStyles();
      this.rootEl = HtmlElementL().as(html.document[$createElement]("material-chip"));
      this.updateChildClassNonHtml(this.rootEl, "themeable");
    }).prototype = ViewMaterialChipComponent0.prototype;
    dart.addTypeTests(ViewMaterialChipComponent0);
    ViewMaterialChipComponent0.prototype[_is_ViewMaterialChipComponent0_default] = true;
    dart.addTypeCaches(ViewMaterialChipComponent0);
    dart.setLibraryUri(ViewMaterialChipComponent0, L0);
    dart.setFieldSignature(ViewMaterialChipComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialChipComponent0.__proto__),
      [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_el_1]: dart.fieldType(dart.legacy(html.DivElement))
    }));
    return ViewMaterialChipComponent0;
  });
  material_chip$46template.ViewMaterialChipComponent0 = material_chip$46template.ViewMaterialChipComponent0$();
  dart.defineLazy(material_chip$46template.ViewMaterialChipComponent0, {
    /*material_chip$46template.ViewMaterialChipComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dart.addTypeTests(material_chip$46template.ViewMaterialChipComponent0, _is_ViewMaterialChipComponent0_default);
  const _is__ViewMaterialChipComponent1_default = Symbol('_is__ViewMaterialChipComponent1_default');
  material_chip$46template._ViewMaterialChipComponent1$ = dart.generic(T => {
    class _ViewMaterialChipComponent1 extends app_view.AppView$(dart.legacy(material_chip.MaterialChipComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        this.updateChildClass(HtmlElementL().as(_el_0), "left-icon");
        this.addShimC(HtmlElementL().as(_el_0));
        this.project(_el_0, 0);
        this.init1(_el_0);
      }
    }
    (_ViewMaterialChipComponent1.new = function(parentView, parentIndex) {
      _ViewMaterialChipComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialChipComponent1.prototype;
    dart.addTypeTests(_ViewMaterialChipComponent1);
    _ViewMaterialChipComponent1.prototype[_is__ViewMaterialChipComponent1_default] = true;
    dart.addTypeCaches(_ViewMaterialChipComponent1);
    dart.setLibraryUri(_ViewMaterialChipComponent1, L0);
    return _ViewMaterialChipComponent1;
  });
  material_chip$46template._ViewMaterialChipComponent1 = material_chip$46template._ViewMaterialChipComponent1$();
  dart.addTypeTests(material_chip$46template._ViewMaterialChipComponent1, _is__ViewMaterialChipComponent1_default);
  var _ButtonDirective_0_5 = dart.privateName(material_chip$46template, "_ButtonDirective_0_5");
  var _expr_0 = dart.privateName(material_chip$46template, "_expr_0");
  var _el_0 = dart.privateName(material_chip$46template, "_el_0");
  const _is__ViewMaterialChipComponent2_default = Symbol('_is__ViewMaterialChipComponent2_default');
  material_chip$46template._ViewMaterialChipComponent2$ = dart.generic(T => {
    class _ViewMaterialChipComponent2 extends app_view.AppView$(dart.legacy(material_chip.MaterialChipComponent$(dart.legacy(T)))) {
      build() {
        let _ctx = this.ctx;
        let doc = html.document;
        this[_el_0] = DivElementL().as(doc[$createElement]("div"));
        dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
        this.updateChildClass(this[_el_0], "delete-button");
        this.addShimC(this[_el_0]);
        this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
        let _el_1 = doc[$createElementNS]("http://www.w3.org/2000/svg", "svg");
        this[_el_0][$append](_el_1);
        this.updateChildClassNonHtml(_el_1, "delete-icon");
        dom_helpers.setAttribute(_el_1, "height", "24");
        dom_helpers.setAttribute(_el_1, "viewBox", "0 0 24 24");
        dom_helpers.setAttribute(_el_1, "width", "24");
        dom_helpers.setAttribute(_el_1, "xmlns", "http://www.w3.org/2000/svg");
        this.addShimE(_el_1);
        let _el_2 = doc[$createElementNS]("http://www.w3.org/2000/svg", "path");
        _el_1[$append](_el_2);
        dom_helpers.setAttribute(_el_2, "d", "M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5\n                 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59\n                 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z");
        this.addShimE(_el_2);
        this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
        this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
        let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'removeChip')));
        this.init(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(ButtonDirectiveL()) && dart.notNull(nodeIndex) <= 2) {
          return this[_ButtonDirective_0_5].instance;
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let currVal_0 = _ctx.deleteButtonAriaMessage;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_0);
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.uuid;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          dom_helpers.updateAttribute(this[_el_0], "aria-describedby", currVal_1);
          this[_expr_1] = currVal_1;
        }
        this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0]);
      }
    }
    (_ViewMaterialChipComponent2.new = function(parentView, parentIndex) {
      this[_ButtonDirective_0_5] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_el_0] = null;
      _ViewMaterialChipComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialChipComponent2.prototype;
    dart.addTypeTests(_ViewMaterialChipComponent2);
    _ViewMaterialChipComponent2.prototype[_is__ViewMaterialChipComponent2_default] = true;
    dart.addTypeCaches(_ViewMaterialChipComponent2);
    dart.setMethodSignature(_ViewMaterialChipComponent2, () => ({
      __proto__: dart.getMethods(_ViewMaterialChipComponent2.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialChipComponent2, L0);
    dart.setFieldSignature(_ViewMaterialChipComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialChipComponent2.__proto__),
      [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
    }));
    return _ViewMaterialChipComponent2;
  });
  material_chip$46template._ViewMaterialChipComponent2 = material_chip$46template._ViewMaterialChipComponent2$();
  dart.addTypeTests(material_chip$46template._ViewMaterialChipComponent2, _is__ViewMaterialChipComponent2_default);
  var _compView_0 = dart.privateName(material_chip$46template, "_compView_0");
  var _MaterialChipComponent_0_5 = dart.privateName(material_chip$46template, "_MaterialChipComponent_0_5");
  const _is__ViewMaterialChipComponentHost0_default = Symbol('_is__ViewMaterialChipComponentHost0_default');
  material_chip$46template._ViewMaterialChipComponentHost0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialChipComponent0OfTL = () => (ViewMaterialChipComponent0OfTL = dart.constFn(material_chip$46template.ViewMaterialChipComponent0$(TL())))();
    var MaterialChipComponentOfTL = () => (MaterialChipComponentOfTL = dart.constFn(material_chip.MaterialChipComponent$(TL())))();
    var MaterialChipComponentLOfTL = () => (MaterialChipComponentLOfTL = dart.constFn(dart.legacy(MaterialChipComponentOfTL())))();
    var ComponentRefOfMaterialChipComponentLOfTL = () => (ComponentRefOfMaterialChipComponentLOfTL = dart.constFn(component_factory.ComponentRef$(MaterialChipComponentLOfTL())))();
    class _ViewMaterialChipComponentHost0 extends app_view.AppView$(dart.legacy(material_chip.MaterialChipComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new (ViewMaterialChipComponent0OfTL()).new(this, 0);
        this.rootEl = this[_compView_0].rootEl;
        this[_MaterialChipComponent_0_5] = new (MaterialChipComponentOfTL()).new(this.rootEl);
        this[_compView_0].create(this[_MaterialChipComponent_0_5], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialChipComponentLOfTL()).new(0, this, this.rootEl, this[_MaterialChipComponent_0_5]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(HasRendererL()) && 0 === nodeIndex) {
          return this[_MaterialChipComponent_0_5];
        }
        return notFoundResult;
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
      }
    }
    (_ViewMaterialChipComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialChipComponent_0_5] = null;
      _ViewMaterialChipComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
      ;
    }).prototype = _ViewMaterialChipComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialChipComponentHost0);
    _ViewMaterialChipComponentHost0.prototype[_is__ViewMaterialChipComponentHost0_default] = true;
    dart.addTypeCaches(_ViewMaterialChipComponentHost0);
    dart.setMethodSignature(_ViewMaterialChipComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialChipComponentHost0.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialChipComponentHost0, L0);
    dart.setFieldSignature(_ViewMaterialChipComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialChipComponentHost0.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_chip$46template.ViewMaterialChipComponent0$(dart.legacy(T)))),
      [_MaterialChipComponent_0_5]: dart.fieldType(dart.legacy(material_chip.MaterialChipComponent$(dart.legacy(T))))
    }));
    return _ViewMaterialChipComponentHost0;
  });
  material_chip$46template._ViewMaterialChipComponentHost0 = material_chip$46template._ViewMaterialChipComponentHost0$();
  dart.addTypeTests(material_chip$46template._ViewMaterialChipComponentHost0, _is__ViewMaterialChipComponentHost0_default);
  material_chip$46template.viewFactory_MaterialChipComponent1 = function viewFactory_MaterialChipComponent1(T, parentView, parentIndex) {
    return new (material_chip$46template._ViewMaterialChipComponent1$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_chip$46template.viewFactory_MaterialChipComponent2 = function viewFactory_MaterialChipComponent2(T, parentView, parentIndex) {
    return new (material_chip$46template._ViewMaterialChipComponent2$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_chip$46template.viewFactory_MaterialChipComponentHost0 = function viewFactory_MaterialChipComponentHost0(T, parentView, parentIndex) {
    return new (material_chip$46template._ViewMaterialChipComponentHost0$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_chip$46template.initReflector = function initReflector() {
    if (dart.test(material_chip$46template._visited)) {
      return;
    }
    material_chip$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialChipComponentL()), material_chip$46template.MaterialChipComponentNgFactory);
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    focus$46template.initReflector();
    selection_model$46template.initReflector();
    has_renderer$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.copyProperties(material_chip$46template, {
    get MaterialChipComponentNgFactory() {
      return material_chip$46template._MaterialChipComponentNgFactory;
    }
  });
  var C2;
  var C1;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C0;
  var C3;
  dart.defineLazy(material_chip$46template, {
    /*material_chip$46template.styles$MaterialChipComponent*/get styles$MaterialChipComponent() {
      return [material_chip$46scss$46css$46shim.styles];
    },
    /*material_chip$46template._MaterialChipComponentNgFactory*/get _MaterialChipComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*material_chip$46template.styles$MaterialChipComponentHost*/get styles$MaterialChipComponentHost() {
      return C3 || CT.C3;
    },
    /*material_chip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_chips/material_chip.template", {
    "package:angular_components/material_chips/material_chip.template.dart": material_chip$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_chip.template.dart"],"names":[],"mappings":"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","file":"material_chip.template.ddc.js"}');
  // Exports:
  return {
    material_chips__material_chip$46template: material_chip$46template
  };
}));

//# sourceMappingURL=material_chip.template.ddc.js.map
