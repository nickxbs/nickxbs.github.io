define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_select/material_select_dropdown_item', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/glyph/glyph.template', 'packages/angular_components/glyph/glyph', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular_components/dynamic_component/dynamic_component', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/angular.template', 'packages/angular_components/material_select/activation_handler.template', 'packages/angular_components/material_select/handles_aria.template', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/material_select/material_select_dropdown_item.scss.css.shim'], (function load__packages__angular_components__material_select__material_select_dropdown_item_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_select__material_select_dropdown_item, packages__angular_components__material_checkbox__material_checkbox$46template, packages__angular_components__material_checkbox__material_checkbox, packages__angular_components__interfaces__has_disabled, packages__angular_components__glyph__glyph$46template, packages__angular_components__glyph__glyph, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__angular_components__dynamic_component__dynamic_component$46template, packages__angular_components__dynamic_component__dynamic_component, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__material_select__activation_handler, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__model__selection__selection_container, packages__angular_components__model__ui__has_renderer, packages__angular__angular$46template, packages__angular_components__material_select__activation_handler$46template, packages__angular_components__material_select__handles_aria$46template, packages__angular_components__material_select__material_select_item$46template, packages__angular_components__mixins__material_dropdown_base$46template, packages__angular_components__model__selection__selection_container$46template, packages__angular_components__model__ui__has_renderer$46template, packages__angular_components__utils__id_generator__id_generator$46template, packages__angular_components__material_select__material_select_dropdown_item$46scss$46css$46shim) {
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
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const dynamic_component_loader = packages__angular__src__bootstrap__modules.src__core__linker__dynamic_component_loader;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const material_select_dropdown_item = packages__angular_components__material_select__material_select_dropdown_item.material_select__material_select_dropdown_item;
  const material_checkbox$46template = packages__angular_components__material_checkbox__material_checkbox$46template.material_checkbox__material_checkbox$46template;
  const material_checkbox = packages__angular_components__material_checkbox__material_checkbox.material_checkbox__material_checkbox;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const glyph$46template = packages__angular_components__glyph__glyph$46template.glyph__glyph$46template;
  const glyph = packages__angular_components__glyph__glyph.glyph__glyph;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const dynamic_component$46template = packages__angular_components__dynamic_component__dynamic_component$46template.dynamic_component__dynamic_component$46template;
  const dynamic_component = packages__angular_components__dynamic_component__dynamic_component.dynamic_component__dynamic_component;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const activation_handler$46template = packages__angular_components__material_select__activation_handler$46template.material_select__activation_handler$46template;
  const handles_aria$46template = packages__angular_components__material_select__handles_aria$46template.material_select__handles_aria$46template;
  const material_select_item$46template = packages__angular_components__material_select__material_select_item$46template.material_select__material_select_item$46template;
  const material_dropdown_base$46template = packages__angular_components__mixins__material_dropdown_base$46template.mixins__material_dropdown_base$46template;
  const selection_container$46template = packages__angular_components__model__selection__selection_container$46template.model__selection__selection_container$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const id_generator$46template = packages__angular_components__utils__id_generator__id_generator$46template.utils__id_generator__id_generator$46template;
  const material_select_dropdown_item$46scss$46css$46shim = packages__angular_components__material_select__material_select_dropdown_item$46scss$46css$46shim.material_select__material_select_dropdown_item$46scss$46css$46shim;
  var material_select_dropdown_item$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var $append = dartx.append;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var AppViewOfObjectL = () => (AppViewOfObjectL = dart.constFn(app_view.AppView$(ObjectL())))();
  var AppViewLOfObjectL = () => (AppViewLOfObjectL = dart.constFn(dart.legacy(AppViewOfObjectL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLOfObjectLAndintLToAppViewLOfvoid = () => (AppViewLOfObjectLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewLOfObjectL(), intL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var DynamicComponentL = () => (DynamicComponentL = dart.constFn(dart.legacy(dynamic_component.DynamicComponent)))();
  var SlowComponentLoaderL = () => (SlowComponentLoaderL = dart.constFn(dart.legacy(dynamic_component_loader.SlowComponentLoader)))();
  var VoidToDynamicComponentL = () => (VoidToDynamicComponentL = dart.constFn(dart.fnType(DynamicComponentL(), [])))();
  var ComponentRefL = () => (ComponentRefL = dart.constFn(dart.legacy(component_factory.ComponentRef)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var MaterialSelectDropdownItemComponentL = () => (MaterialSelectDropdownItemComponentL = dart.constFn(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var ActivationHandlerL = () => (ActivationHandlerL = dart.constFn(dart.legacy(activation_handler.ActivationHandler)))();
  var IdGeneratorL = () => (IdGeneratorL = dart.constFn(dart.legacy(id_generator.IdGenerator)))();
  var SelectionItemL = () => (SelectionItemL = dart.constFn(dart.legacy(selection_container.SelectionItem)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var ComponentFactoryOfMaterialSelectDropdownItemComponentL = () => (ComponentFactoryOfMaterialSelectDropdownItemComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialSelectDropdownItemComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var AppViewLAndintLToAppViewLOfMaterialSelectDropdownItemComponentLOfTL = () => (AppViewLAndintLToAppViewLOfMaterialSelectDropdownItemComponentLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialSelectDropdownItemComponentOfTL = () => (MaterialSelectDropdownItemComponentOfTL = dart.constFn(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(TL())))();
    var MaterialSelectDropdownItemComponentLOfTL = () => (MaterialSelectDropdownItemComponentLOfTL = dart.constFn(dart.legacy(MaterialSelectDropdownItemComponentOfTL())))();
    var AppViewOfMaterialSelectDropdownItemComponentLOfTL = () => (AppViewOfMaterialSelectDropdownItemComponentLOfTL = dart.constFn(app_view.AppView$(MaterialSelectDropdownItemComponentLOfTL())))();
    var AppViewLOfMaterialSelectDropdownItemComponentLOfTL = () => (AppViewLOfMaterialSelectDropdownItemComponentLOfTL = dart.constFn(dart.legacy(AppViewOfMaterialSelectDropdownItemComponentLOfTL())))();
    return [AppViewLOfMaterialSelectDropdownItemComponentLOfTL(), [AppViewL(), intL()]];
  })))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_select/material_select_dropdown_item.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], dart.dynamic);
    },
    get C3() {
      return C3 = dart.fn(material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponentHost0, AppViewLAndintLToAppViewLOfMaterialSelectDropdownItemComponentLOfTL());
    },
    get C2() {
      return C2 = dart.const(dart.gbind(C3 || CT.C3, dart.dynamic));
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfMaterialSelectDropdownItemComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-select-dropdown-item"
      });
    }
  }, false);
  var _appEl_0 = dart.privateName(material_select_dropdown_item$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(material_select_dropdown_item$46template, "_NgIf_0_9");
  var _appEl_2 = dart.privateName(material_select_dropdown_item$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(material_select_dropdown_item$46template, "_NgIf_2_9");
  var _appEl_4 = dart.privateName(material_select_dropdown_item$46template, "_appEl_4");
  var _NgIf_4_9 = dart.privateName(material_select_dropdown_item$46template, "_NgIf_4_9");
  var _appEl_6 = dart.privateName(material_select_dropdown_item$46template, "_appEl_6");
  var _NgIf_6_9 = dart.privateName(material_select_dropdown_item$46template, "_NgIf_6_9");
  var _expr_4 = dart.privateName(material_select_dropdown_item$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_select_dropdown_item$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_select_dropdown_item$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_select_dropdown_item$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_select_dropdown_item$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_select_dropdown_item$46template, "_expr_9");
  var _expr_10 = dart.privateName(material_select_dropdown_item$46template, "_expr_10");
  var _expr_11 = dart.privateName(material_select_dropdown_item$46template, "_expr_11");
  var _expr_12 = dart.privateName(material_select_dropdown_item$46template, "_expr_12");
  var _expr_13 = dart.privateName(material_select_dropdown_item$46template, "_expr_13");
  var _expr_14 = dart.privateName(material_select_dropdown_item$46template, "_expr_14");
  const _is_ViewMaterialSelectDropdownItemComponent0_default = Symbol('_is_ViewMaterialSelectDropdownItemComponent0_default');
  material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ViewMaterialSelectDropdownItemComponent0 extends app_view.AppView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_select/material_select_dropdown_item.dart" : null;
      }
      build() {
        let _ctx = this.ctx;
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent1(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _text_1 = dom_helpers.appendText(parentRenderNode, " ");
        let _anchor_2 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_2] = new view_container.ViewContainer.new(2, null, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent2(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        let _text_3 = dom_helpers.appendText(parentRenderNode, "\n \n");
        let _anchor_4 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_4] = new view_container.ViewContainer.new(4, null, this, _anchor_4);
        let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], dart.fn((parentView, parentIndex) => material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent6(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
        let _text_5 = dom_helpers.appendText(parentRenderNode, "\n ");
        let _anchor_6 = dom_helpers.appendAnchor(parentRenderNode);
        this[_appEl_6] = new view_container.ViewContainer.new(6, null, this, _anchor_6);
        let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], dart.fn((parentView, parentIndex) => material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent7(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
        this.project(parentRenderNode, 0);
        this.init0();
        _rootEl[$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'handleClick')));
        _rootEl[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeyPress')));
        _rootEl[$addEventListener]("mousedown", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'preventTextSelectionIfShiftKey')));
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_0_9].ngIf = !dart.test(_ctx.supportsMultiSelect) && dart.test(_ctx.isSelected);
        this[_NgIf_2_9].ngIf = dart.test(_ctx.supportsMultiSelect) && !dart.test(_ctx.hideCheckbox);
        this[_NgIf_4_9].ngIf = _ctx.valueHasLabel;
        this[_NgIf_6_9].ngIf = _ctx.componentType != null || _ctx.componentFactory != null;
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
        this[_appEl_4].detectChangesInNestedViews();
        this[_appEl_6].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_2].destroyNestedViews();
        this[_appEl_4].destroyNestedViews();
        this[_appEl_6].destroyNestedViews();
      }
      detectHostChanges(firstCheck) {
        let t0, t0$;
        let _ctx = this.ctx;
        let currVal_4 = _ctx.tabIndex;
        if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          dom_helpers.updateAttribute(this.rootEl, "tabindex", currVal_4);
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.ariaRole;
        if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          dom_helpers.updateAttribute(this.rootEl, "role", currVal_5);
          this[_expr_5] = currVal_5;
        }
        let currVal_6 = _ctx.disabledStr;
        if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
          dom_helpers.updateAttribute(this.rootEl, "aria-disabled", currVal_6);
          this[_expr_6] = currVal_6;
        }
        let currVal_7 = _ctx.disabled;
        if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
          dom_helpers.updateClassBindingNonHtml(this.rootEl, "is-disabled", currVal_7);
          this[_expr_7] = currVal_7;
        }
        let currVal_8 = _ctx.disabled;
        if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
          dom_helpers.updateClassBindingNonHtml(this.rootEl, "disabled", currVal_8);
          this[_expr_8] = currVal_8;
        }
        let currVal_9 = _ctx.isHidden;
        if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
          dom_helpers.updateClassBindingNonHtml(this.rootEl, "hidden", currVal_9);
          this[_expr_9] = currVal_9;
        }
        let currVal_10 = _ctx.supportsMultiSelect;
        if (dart.test(app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
          dom_helpers.updateClassBindingNonHtml(this.rootEl, "multiselect", currVal_10);
          this[_expr_10] = currVal_10;
        }
        let currVal_11 = _ctx.isAriaChecked;
        if (dart.test(app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
          dom_helpers.updateAttribute(this.rootEl, "aria-checked", (t0 = currVal_11, t0 == null ? null : dart.toString(t0)));
          this[_expr_11] = currVal_11;
        }
        let currVal_12 = _ctx.isSelected;
        if (dart.test(app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
          dom_helpers.updateClassBindingNonHtml(this.rootEl, "selected", currVal_12);
          this[_expr_12] = currVal_12;
        }
        let currVal_13 = _ctx.id;
        if (dart.test(app_view_utils.checkBinding(this[_expr_13], currVal_13))) {
          dom_helpers.updateAttribute(this.rootEl, "id", currVal_13);
          this[_expr_13] = currVal_13;
        }
        let currVal_14 = _ctx.isSelected;
        if (dart.test(app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
          dom_helpers.updateAttribute(this.rootEl, "aria-selected", (t0$ = currVal_14, t0$ == null ? null : dart.toString(t0$)));
          this[_expr_14] = currVal_14;
        }
      }
      initComponentStyles() {
        let styles = material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._componentStyles;
        if (styles == null) {
          material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._componentStyles = styles = material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_select_dropdown_item$46template.styles$MaterialSelectDropdownItemComponent, material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialSelectDropdownItemComponent0.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      this[_appEl_4] = null;
      this[_NgIf_4_9] = null;
      this[_appEl_6] = null;
      this[_NgIf_6_9] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_expr_6] = null;
      this[_expr_7] = null;
      this[_expr_8] = null;
      this[_expr_9] = null;
      this[_expr_10] = null;
      this[_expr_11] = null;
      this[_expr_12] = null;
      this[_expr_13] = null;
      this[_expr_14] = null;
      ViewMaterialSelectDropdownItemComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootEl = HtmlElementL().as(html.document[$createElement]("material-select-dropdown-item"));
      this.updateChildClassNonHtml(this.rootEl, "item");
    }).prototype = ViewMaterialSelectDropdownItemComponent0.prototype;
    dart.addTypeTests(ViewMaterialSelectDropdownItemComponent0);
    ViewMaterialSelectDropdownItemComponent0.prototype[_is_ViewMaterialSelectDropdownItemComponent0_default] = true;
    dart.addTypeCaches(ViewMaterialSelectDropdownItemComponent0);
    dart.setLibraryUri(ViewMaterialSelectDropdownItemComponent0, L0);
    dart.setFieldSignature(ViewMaterialSelectDropdownItemComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialSelectDropdownItemComponent0.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic),
      [_expr_6]: dart.fieldType(dart.dynamic),
      [_expr_7]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_8]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_9]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_10]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_11]: dart.fieldType(dart.dynamic),
      [_expr_12]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_13]: dart.fieldType(dart.dynamic),
      [_expr_14]: dart.fieldType(dart.dynamic)
    }));
    return ViewMaterialSelectDropdownItemComponent0;
  });
  material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0 = material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$();
  dart.defineLazy(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0, {
    /*material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dart.addTypeTests(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0, _is_ViewMaterialSelectDropdownItemComponent0_default);
  const _is__ViewMaterialSelectDropdownItemComponent1_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent1_default');
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1$ = dart.generic(T => {
    class _ViewMaterialSelectDropdownItemComponent1 extends app_view.AppView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("div");
        this.updateChildClass(HtmlElementL().as(_el_0), "selected-accent mixin");
        this.addShimC(HtmlElementL().as(_el_0));
        this.init1(_el_0);
      }
    }
    (_ViewMaterialSelectDropdownItemComponent1.new = function(parentView, parentIndex) {
      _ViewMaterialSelectDropdownItemComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectDropdownItemComponent1.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent1);
    _ViewMaterialSelectDropdownItemComponent1.prototype[_is__ViewMaterialSelectDropdownItemComponent1_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectDropdownItemComponent1);
    dart.setLibraryUri(_ViewMaterialSelectDropdownItemComponent1, L0);
    return _ViewMaterialSelectDropdownItemComponent1;
  });
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1 = material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1$();
  dart.addTypeTests(material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1, _is__ViewMaterialSelectDropdownItemComponent1_default);
  const _is__ViewMaterialSelectDropdownItemComponent2_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent2_default');
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialSelectDropdownItemComponent2 extends app_view.AppView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent3(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _text_1 = dom_helpers.createText("  ");
        let _anchor_2 = dom_helpers.createAnchor();
        this[_appEl_2] = new view_container.ViewContainer.new(2, null, this, _anchor_2);
        let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], dart.fn((parentView, parentIndex) => material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent4(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
        this.init(JSArrayOfObjectL().of([this[_appEl_0], _text_1, this[_appEl_2]]), null);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_0_9].ngIf = !dart.test(_ctx.useCheckMarks);
        this[_NgIf_2_9].ngIf = _ctx.useCheckMarks;
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_2].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_2].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectDropdownItemComponent2.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_2] = null;
      this[_NgIf_2_9] = null;
      _ViewMaterialSelectDropdownItemComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectDropdownItemComponent2.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent2);
    _ViewMaterialSelectDropdownItemComponent2.prototype[_is__ViewMaterialSelectDropdownItemComponent2_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectDropdownItemComponent2);
    dart.setLibraryUri(_ViewMaterialSelectDropdownItemComponent2, L0);
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent2.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
    }));
    return _ViewMaterialSelectDropdownItemComponent2;
  });
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2 = material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2$();
  dart.addTypeTests(material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2, _is__ViewMaterialSelectDropdownItemComponent2_default);
  var _compView_0 = dart.privateName(material_select_dropdown_item$46template, "_compView_0");
  var _MaterialCheckboxComponent_0_5 = dart.privateName(material_select_dropdown_item$46template, "_MaterialCheckboxComponent_0_5");
  var _expr_0 = dart.privateName(material_select_dropdown_item$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_select_dropdown_item$46template, "_expr_1");
  var C0;
  const _is__ViewMaterialSelectDropdownItemComponent3_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent3_default');
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3$ = dart.generic(T => {
    class _ViewMaterialSelectDropdownItemComponent3 extends app_view.AppView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        _el_0.tabIndex = -1;
        this.addShimC(_el_0);
        this[_MaterialCheckboxComponent_0_5] = new material_checkbox.MaterialCheckboxComponent.new(_el_0, this[_compView_0], null, "-1", null);
        this[_compView_0].create(this[_MaterialCheckboxComponent_0_5], JSArrayOfObjectL().of([C0 || CT.C0]));
        this.init1(_el_0);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
          return this[_MaterialCheckboxComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        changed = false;
        let currVal_0 = _ctx.disabled;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_MaterialCheckboxComponent_0_5].disabled = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.isSelected;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_MaterialCheckboxComponent_0_5].checked = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_MaterialCheckboxComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialSelectDropdownItemComponent3.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialCheckboxComponent_0_5] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      _ViewMaterialSelectDropdownItemComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectDropdownItemComponent3.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent3);
    _ViewMaterialSelectDropdownItemComponent3.prototype[_is__ViewMaterialSelectDropdownItemComponent3_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectDropdownItemComponent3);
    dart.setMethodSignature(_ViewMaterialSelectDropdownItemComponent3, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectDropdownItemComponent3.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialSelectDropdownItemComponent3, L0);
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent3.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_checkbox$46template.ViewMaterialCheckboxComponent0)),
      [_MaterialCheckboxComponent_0_5]: dart.fieldType(dart.legacy(material_checkbox.MaterialCheckboxComponent)),
      [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_1]: dart.fieldType(dart.legacy(core.bool))
    }));
    return _ViewMaterialSelectDropdownItemComponent3;
  });
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3 = material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3$();
  dart.addTypeTests(material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3, _is__ViewMaterialSelectDropdownItemComponent3_default);
  var _appEl_1 = dart.privateName(material_select_dropdown_item$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(material_select_dropdown_item$46template, "_NgIf_1_9");
  const _is__ViewMaterialSelectDropdownItemComponent4_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent4_default');
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialSelectDropdownItemComponent4 extends app_view.AppView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(HtmlElementL().as(_el_0), "check-container");
        this.addShimE(_el_0);
        let _anchor_1 = dom_helpers.appendAnchor(_el_0);
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent5(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_NgIf_1_9].ngIf = _ctx.isSelected;
        this[_appEl_1].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectDropdownItemComponent4.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      _ViewMaterialSelectDropdownItemComponent4.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectDropdownItemComponent4.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent4);
    _ViewMaterialSelectDropdownItemComponent4.prototype[_is__ViewMaterialSelectDropdownItemComponent4_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectDropdownItemComponent4);
    dart.setLibraryUri(_ViewMaterialSelectDropdownItemComponent4, L0);
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent4.__proto__),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
    }));
    return _ViewMaterialSelectDropdownItemComponent4;
  });
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4 = material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4$();
  dart.addTypeTests(material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4, _is__ViewMaterialSelectDropdownItemComponent4_default);
  var _GlyphComponent_0_5 = dart.privateName(material_select_dropdown_item$46template, "_GlyphComponent_0_5");
  const _is__ViewMaterialSelectDropdownItemComponent5_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent5_default');
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5$ = dart.generic(T => {
    class _ViewMaterialSelectDropdownItemComponent5 extends app_view.AppView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new glyph$46template.ViewGlyphComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        dom_helpers.setAttribute(_el_0, "baseline", "");
        this.updateChildClassNonHtml(_el_0, "check");
        dom_helpers.setAttribute(_el_0, "icon", "check");
        this.addShimC(_el_0);
        this[_GlyphComponent_0_5] = new glyph.GlyphComponent.new(_el_0);
        this[_compView_0].create0(this[_GlyphComponent_0_5]);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let changed = false;
        let firstCheck = this.cdState === 0;
        changed = false;
        if (firstCheck) {
          this[_GlyphComponent_0_5].icon = "check";
          changed = true;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
    }
    (_ViewMaterialSelectDropdownItemComponent5.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_GlyphComponent_0_5] = null;
      _ViewMaterialSelectDropdownItemComponent5.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectDropdownItemComponent5.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent5);
    _ViewMaterialSelectDropdownItemComponent5.prototype[_is__ViewMaterialSelectDropdownItemComponent5_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectDropdownItemComponent5);
    dart.setLibraryUri(_ViewMaterialSelectDropdownItemComponent5, L0);
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent5.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(glyph$46template.ViewGlyphComponent0)),
      [_GlyphComponent_0_5]: dart.fieldType(dart.legacy(glyph.GlyphComponent))
    }));
    return _ViewMaterialSelectDropdownItemComponent5;
  });
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5 = material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5$();
  dart.addTypeTests(material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5, _is__ViewMaterialSelectDropdownItemComponent5_default);
  var _textBinding_1 = dart.privateName(material_select_dropdown_item$46template, "_textBinding_1");
  const _is__ViewMaterialSelectDropdownItemComponent6_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent6_default');
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6$ = dart.generic(T => {
    class _ViewMaterialSelectDropdownItemComponent6 extends app_view.AppView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        this.updateChildClass(HtmlElementL().as(_el_0), "label");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1].element);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.valueLabel));
      }
    }
    (_ViewMaterialSelectDropdownItemComponent6.new = function(parentView, parentIndex) {
      this[_textBinding_1] = new text_binding.TextBinding.new();
      _ViewMaterialSelectDropdownItemComponent6.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectDropdownItemComponent6.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent6);
    _ViewMaterialSelectDropdownItemComponent6.prototype[_is__ViewMaterialSelectDropdownItemComponent6_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectDropdownItemComponent6);
    dart.setLibraryUri(_ViewMaterialSelectDropdownItemComponent6, L0);
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent6, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent6.__proto__),
      [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
    }));
    return _ViewMaterialSelectDropdownItemComponent6;
  });
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6 = material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6$();
  dart.addTypeTests(material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6, _is__ViewMaterialSelectDropdownItemComponent6_default);
  var _DynamicComponent_0_8 = dart.privateName(material_select_dropdown_item$46template, "_DynamicComponent_0_8");
  var _expr_2 = dart.privateName(material_select_dropdown_item$46template, "_expr_2");
  const _is__ViewMaterialSelectDropdownItemComponent7_default = Symbol('_is__ViewMaterialSelectDropdownItemComponent7_default');
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7$ = dart.generic(T => {
    class _ViewMaterialSelectDropdownItemComponent7 extends app_view.AppView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      build() {
        let _ctx = this.ctx;
        this[_compView_0] = new dynamic_component$46template.ViewDynamicComponent0.new(this, 0);
        let _el_0 = this[_compView_0].rootEl;
        this.updateChildClassNonHtml(_el_0, "dynamic-item");
        this.addShimC(_el_0);
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _el_0);
        this[_DynamicComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DynamicComponentL(), dart.wrapType(DynamicComponentL()), dart.fn(() => new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0]), VoidToDynamicComponentL())) : new dynamic_component.DynamicComponent.new(SlowComponentLoaderL().as(this.parentView.injectorGet(dart.wrapType(SlowComponentLoaderL()), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0]);
        this[_compView_0].create0(this[_DynamicComponent_0_8]);
        let subscription_0 = this[_DynamicComponent_0_8].onLoad.listen(this.eventHandler1(ComponentRefL(), ComponentRefL(), dart.bind(_ctx, 'onLoadCustomComponent')));
        this.init(JSArrayOfObjectL().of([this[_appEl_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        changed = false;
        let currVal_0 = _ctx.componentType;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_DynamicComponent_0_8].componentType = currVal_0;
          changed = true;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.componentFactory;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_DynamicComponent_0_8].componentFactory = currVal_1;
          changed = true;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = _ctx.value;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_DynamicComponent_0_8].value = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        if (changed) {
          this[_DynamicComponent_0_8].ngAfterChanges();
        }
        this[_appEl_0].detectChangesInNestedViews();
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_compView_0].destroyInternalState();
        this[_DynamicComponent_0_8].ngOnDestroy();
      }
    }
    (_ViewMaterialSelectDropdownItemComponent7.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_appEl_0] = null;
      this[_DynamicComponent_0_8] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      _ViewMaterialSelectDropdownItemComponent7.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectDropdownItemComponent7.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponent7);
    _ViewMaterialSelectDropdownItemComponent7.prototype[_is__ViewMaterialSelectDropdownItemComponent7_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectDropdownItemComponent7);
    dart.setLibraryUri(_ViewMaterialSelectDropdownItemComponent7, L0);
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponent7, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponent7.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(dynamic_component$46template.ViewDynamicComponent0)),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_DynamicComponent_0_8]: dart.fieldType(dart.legacy(dynamic_component.DynamicComponent)),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialSelectDropdownItemComponent7;
  });
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7 = material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7$();
  dart.addTypeTests(material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7, _is__ViewMaterialSelectDropdownItemComponent7_default);
  var _MaterialSelectDropdownItemComponent_0_5 = dart.privateName(material_select_dropdown_item$46template, "_MaterialSelectDropdownItemComponent_0_5");
  const _is__ViewMaterialSelectDropdownItemComponentHost0_default = Symbol('_is__ViewMaterialSelectDropdownItemComponentHost0_default');
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialSelectDropdownItemComponent0OfTL = () => (ViewMaterialSelectDropdownItemComponent0OfTL = dart.constFn(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(TL())))();
    var MaterialSelectDropdownItemComponentOfTL = () => (MaterialSelectDropdownItemComponentOfTL = dart.constFn(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(TL())))();
    var MaterialSelectDropdownItemComponentLOfTL = () => (MaterialSelectDropdownItemComponentLOfTL = dart.constFn(dart.legacy(MaterialSelectDropdownItemComponentOfTL())))();
    var VoidToMaterialSelectDropdownItemComponentLOfTL = () => (VoidToMaterialSelectDropdownItemComponentLOfTL = dart.constFn(dart.fnType(MaterialSelectDropdownItemComponentLOfTL(), [])))();
    var ComponentRefOfMaterialSelectDropdownItemComponentLOfTL = () => (ComponentRefOfMaterialSelectDropdownItemComponentLOfTL = dart.constFn(component_factory.ComponentRef$(MaterialSelectDropdownItemComponentLOfTL())))();
    class _ViewMaterialSelectDropdownItemComponentHost0 extends app_view.AppView$(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectDropdownItemComponent0OfTL()).new(this, 0);
        this.rootEl = this[_compView_0].rootEl;
        this[_MaterialSelectDropdownItemComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectDropdownItemComponentLOfTL(), dart.wrapType(MaterialSelectDropdownItemComponentL()), dart.fn(() => new (MaterialSelectDropdownItemComponentOfTL()).new(this.rootEl, null, DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex)), ActivationHandlerL().as(this.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.viewData.parentIndex)), IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.viewData.parentIndex)), this[_compView_0]), VoidToMaterialSelectDropdownItemComponentLOfTL())) : new (MaterialSelectDropdownItemComponentOfTL()).new(this.rootEl, null, DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex)), ActivationHandlerL().as(this.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.viewData.parentIndex)), IdGeneratorL().as(this.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.viewData.parentIndex)), this[_compView_0]);
        this[_compView_0].create(this[_MaterialSelectDropdownItemComponent_0_5], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialSelectDropdownItemComponentLOfTL()).new(0, this, this.rootEl, this[_MaterialSelectDropdownItemComponent_0_5]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasRendererL())) && 0 === nodeIndex) {
          return this[_MaterialSelectDropdownItemComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_MaterialSelectDropdownItemComponent_0_5].ngOnDestroy();
      }
    }
    (_ViewMaterialSelectDropdownItemComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialSelectDropdownItemComponent_0_5] = null;
      _ViewMaterialSelectDropdownItemComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
      ;
    }).prototype = _ViewMaterialSelectDropdownItemComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialSelectDropdownItemComponentHost0);
    _ViewMaterialSelectDropdownItemComponentHost0.prototype[_is__ViewMaterialSelectDropdownItemComponentHost0_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectDropdownItemComponentHost0);
    dart.setMethodSignature(_ViewMaterialSelectDropdownItemComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectDropdownItemComponentHost0.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialSelectDropdownItemComponentHost0, L0);
    dart.setFieldSignature(_ViewMaterialSelectDropdownItemComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectDropdownItemComponentHost0.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_select_dropdown_item$46template.ViewMaterialSelectDropdownItemComponent0$(dart.legacy(T)))),
      [_MaterialSelectDropdownItemComponent_0_5]: dart.fieldType(dart.legacy(material_select_dropdown_item.MaterialSelectDropdownItemComponent$(dart.legacy(T))))
    }));
    return _ViewMaterialSelectDropdownItemComponentHost0;
  });
  material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0 = material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0$();
  dart.addTypeTests(material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0, _is__ViewMaterialSelectDropdownItemComponentHost0_default);
  material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent1 = function viewFactory_MaterialSelectDropdownItemComponent1(T, parentView, parentIndex) {
    return new (material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent1$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent2 = function viewFactory_MaterialSelectDropdownItemComponent2(T, parentView, parentIndex) {
    return new (material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent2$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent3 = function viewFactory_MaterialSelectDropdownItemComponent3(T, parentView, parentIndex) {
    return new (material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent3$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent4 = function viewFactory_MaterialSelectDropdownItemComponent4(T, parentView, parentIndex) {
    return new (material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent4$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent5 = function viewFactory_MaterialSelectDropdownItemComponent5(T, parentView, parentIndex) {
    return new (material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent5$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent6 = function viewFactory_MaterialSelectDropdownItemComponent6(T, parentView, parentIndex) {
    return new (material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent6$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponent7 = function viewFactory_MaterialSelectDropdownItemComponent7(T, parentView, parentIndex) {
    return new (material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponent7$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select_dropdown_item$46template.viewFactory_MaterialSelectDropdownItemComponentHost0 = function viewFactory_MaterialSelectDropdownItemComponentHost0(T, parentView, parentIndex) {
    return new (material_select_dropdown_item$46template._ViewMaterialSelectDropdownItemComponentHost0$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select_dropdown_item$46template.initReflector = function initReflector() {
    if (dart.test(material_select_dropdown_item$46template._visited)) {
      return;
    }
    material_select_dropdown_item$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialSelectDropdownItemComponentL()), material_select_dropdown_item$46template.MaterialSelectDropdownItemComponentNgFactory);
    angular$46template.initReflector();
    dynamic_component$46template.initReflector();
    glyph$46template.initReflector();
    material_checkbox$46template.initReflector();
    activation_handler$46template.initReflector();
    handles_aria$46template.initReflector();
    material_select_item$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    selection_container$46template.initReflector();
    has_renderer$46template.initReflector();
    id_generator$46template.initReflector();
  };
  dart.copyProperties(material_select_dropdown_item$46template, {
    get MaterialSelectDropdownItemComponentNgFactory() {
      return material_select_dropdown_item$46template._MaterialSelectDropdownItemComponentNgFactory;
    }
  });
  var C3;
  var C2;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C1;
  dart.defineLazy(material_select_dropdown_item$46template, {
    /*material_select_dropdown_item$46template.styles$MaterialSelectDropdownItemComponent*/get styles$MaterialSelectDropdownItemComponent() {
      return [material_select_dropdown_item$46scss$46css$46shim.styles];
    },
    /*material_select_dropdown_item$46template._MaterialSelectDropdownItemComponentNgFactory*/get _MaterialSelectDropdownItemComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*material_select_dropdown_item$46template.styles$MaterialSelectDropdownItemComponentHost*/get styles$MaterialSelectDropdownItemComponentHost() {
      return C0 || CT.C0;
    },
    /*material_select_dropdown_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_select/material_select_dropdown_item.template", {
    "package:angular_components/material_select/material_select_dropdown_item.template.dart": material_select_dropdown_item$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_select_dropdown_item.template.dart"],"names":[],"mappings":"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","file":"material_select_dropdown_item.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_dropdown_item$46template: material_select_dropdown_item$46template
  };
}));

//# sourceMappingURL=material_select_dropdown_item.template.ddc.js.map
