define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/focus/focus_list.template', 'packages/angular_components/focus/focus_list', 'packages/angular_components/material_list/material_list', 'packages/angular_components/focus/focus', 'packages/angular_components/material_select/material_select', 'packages/angular_components/model/selection/selection_options', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/focus/focus_item.template', 'packages/angular_components/focus/focus_item', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/material_select/material_select_base.template', 'packages/angular/angular.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_container.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/selection/selection_options.template', 'packages/angular_components/model/ui/has_factory.template', 'packages/angular_components/model/ui/has_renderer.template', 'packages/angular_components/model/ui/template_support.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/material_select/material_select.scss.css.shim'], (function load__packages__angular_components__material_select__material_select_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_list__material_list$46template, packages__angular_components__focus__focus_list$46template, packages__angular_components__focus__focus_list, packages__angular_components__material_list__material_list, packages__angular_components__focus__focus, packages__angular_components__material_select__material_select, packages__angular_components__model__selection__selection_options, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__angular_components__material_select__material_select_item$46template, packages__angular_components__focus__focus_item$46template, packages__angular_components__focus__focus_item, packages__angular_components__material_select__material_select_item, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__material_select__activation_handler, packages__angular_components__model__selection__selection_container, packages__angular_components__interfaces__has_disabled, packages__angular_components__model__ui__has_renderer, packages__angular_components__material_select__material_select_base$46template, packages__angular__angular$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__model__selection__select$46template, packages__angular_components__model__selection__selection_container$46template, packages__angular_components__model__selection__selection_model$46template, packages__angular_components__model__selection__selection_options$46template, packages__angular_components__model__ui__has_factory$46template, packages__angular_components__model__ui__has_renderer$46template, packages__angular_components__model__ui__template_support$46template, packages__angular_components__utils__angular__properties__properties$46template, packages__angular_components__material_select__material_select$46scss$46css$46shim) {
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
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const material_list$46template = packages__angular_components__material_list__material_list$46template.material_list__material_list$46template;
  const focus_list$46template = packages__angular_components__focus__focus_list$46template.focus__focus_list$46template;
  const focus_list = packages__angular_components__focus__focus_list.focus__focus_list;
  const material_list = packages__angular_components__material_list__material_list.material_list__material_list;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const material_select = packages__angular_components__material_select__material_select.material_select__material_select;
  const selection_options = packages__angular_components__model__selection__selection_options.model__selection__selection_options;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_select_item$46template = packages__angular_components__material_select__material_select_item$46template.material_select__material_select_item$46template;
  const focus_item$46template = packages__angular_components__focus__focus_item$46template.focus__focus_item$46template;
  const focus_item = packages__angular_components__focus__focus_item.focus__focus_item;
  const material_select_item = packages__angular_components__material_select__material_select_item.material_select__material_select_item;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const material_select_base$46template = packages__angular_components__material_select__material_select_base$46template.material_select__material_select_base$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const select$46template = packages__angular_components__model__selection__select$46template.model__selection__select$46template;
  const selection_container$46template = packages__angular_components__model__selection__selection_container$46template.model__selection__selection_container$46template;
  const selection_model$46template = packages__angular_components__model__selection__selection_model$46template.model__selection__selection_model$46template;
  const selection_options$46template = packages__angular_components__model__selection__selection_options$46template.model__selection__selection_options$46template;
  const has_factory$46template = packages__angular_components__model__ui__has_factory$46template.model__ui__has_factory$46template;
  const has_renderer$46template = packages__angular_components__model__ui__has_renderer$46template.model__ui__has_renderer$46template;
  const template_support$46template = packages__angular_components__model__ui__template_support$46template.model__ui__template_support$46template;
  const properties$46template = packages__angular_components__utils__angular__properties__properties$46template.utils__angular__properties__properties$46template;
  const material_select$46scss$46css$46shim = packages__angular_components__material_select__material_select$46scss$46css$46shim.material_select__material_select$46scss$46css$46shim;
  var material_select$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  var $toString = dartx.toString;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var FocusListDirectiveL = () => (FocusListDirectiveL = dart.constFn(dart.legacy(focus_list.FocusListDirective)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var VoidToFocusListDirectiveL = () => (VoidToFocusListDirectiveL = dart.constFn(dart.fnType(FocusListDirectiveL(), [])))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var AppViewOfObjectL = () => (AppViewOfObjectL = dart.constFn(app_view.AppView$(ObjectL())))();
  var AppViewLOfObjectL = () => (AppViewLOfObjectL = dart.constFn(dart.legacy(AppViewOfObjectL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLOfObjectLAndintLToAppViewLOfvoid = () => (AppViewLOfObjectLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewLOfObjectL(), intL()])))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var FocusableItemL = () => (FocusableItemL = dart.constFn(dart.legacy(focus.FocusableItem)))();
  var _ViewMaterialSelectComponent1L = () => (_ViewMaterialSelectComponent1L = dart.constFn(dart.legacy(material_select$46template._ViewMaterialSelectComponent1)))();
  var _ViewMaterialSelectComponent2L = () => (_ViewMaterialSelectComponent2L = dart.constFn(dart.legacy(material_select$46template._ViewMaterialSelectComponent2)))();
  var _ViewMaterialSelectComponent3L = () => (_ViewMaterialSelectComponent3L = dart.constFn(dart.legacy(material_select$46template._ViewMaterialSelectComponent3)))();
  var _ViewMaterialSelectComponent5L = () => (_ViewMaterialSelectComponent5L = dart.constFn(dart.legacy(material_select$46template._ViewMaterialSelectComponent5)))();
  var JSArrayOfFocusableItemL = () => (JSArrayOfFocusableItemL = dart.constFn(_interceptors.JSArray$(FocusableItemL())))();
  var ListOfFocusableItemL = () => (ListOfFocusableItemL = dart.constFn(core.List$(FocusableItemL())))();
  var ListLOfFocusableItemL = () => (ListLOfFocusableItemL = dart.constFn(dart.legacy(ListOfFocusableItemL())))();
  var _ViewMaterialSelectComponent5LToListLOfFocusableItemL = () => (_ViewMaterialSelectComponent5LToListLOfFocusableItemL = dart.constFn(dart.fnType(ListLOfFocusableItemL(), [_ViewMaterialSelectComponent5L()])))();
  var _ViewMaterialSelectComponent3LToListLOfFocusableItemL = () => (_ViewMaterialSelectComponent3LToListLOfFocusableItemL = dart.constFn(dart.fnType(ListLOfFocusableItemL(), [_ViewMaterialSelectComponent3L()])))();
  var _ViewMaterialSelectComponent2LToListLOfFocusableItemL = () => (_ViewMaterialSelectComponent2LToListLOfFocusableItemL = dart.constFn(dart.fnType(ListLOfFocusableItemL(), [_ViewMaterialSelectComponent2L()])))();
  var _ViewMaterialSelectComponent1LToListLOfFocusableItemL = () => (_ViewMaterialSelectComponent1LToListLOfFocusableItemL = dart.constFn(dart.fnType(ListLOfFocusableItemL(), [_ViewMaterialSelectComponent1L()])))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var intLAnddynamicToObjectL = () => (intLAnddynamicToObjectL = dart.constFn(dart.fnType(ObjectL(), [intL(), dart.dynamic])))();
  var intLAnddynamicToLObjectL = () => (intLAnddynamicToLObjectL = dart.constFn(dart.legacy(intLAnddynamicToObjectL())))();
  var MaterialSelectItemComponentL = () => (MaterialSelectItemComponentL = dart.constFn(dart.legacy(material_select_item.MaterialSelectItemComponent)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var ActivationHandlerL = () => (ActivationHandlerL = dart.constFn(dart.legacy(activation_handler.ActivationHandler)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var SelectionItemL = () => (SelectionItemL = dart.constFn(dart.legacy(selection_container.SelectionItem)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var HasRendererL = () => (HasRendererL = dart.constFn(dart.legacy(has_renderer.HasRenderer)))();
  var ComponentFactoryL = () => (ComponentFactoryL = dart.constFn(dart.legacy(component_factory.ComponentFactory)))();
  var dynamicToComponentFactoryL = () => (dynamicToComponentFactoryL = dart.constFn(dart.fnType(ComponentFactoryL(), [dart.dynamic])))();
  var dynamicToLComponentFactoryL = () => (dynamicToLComponentFactoryL = dart.constFn(dart.legacy(dynamicToComponentFactoryL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ViewMaterialSelectComponent0L = () => (ViewMaterialSelectComponent0L = dart.constFn(dart.legacy(material_select$46template.ViewMaterialSelectComponent0)))();
  var SelectionContainerL = () => (SelectionContainerL = dart.constFn(dart.legacy(selection_container.SelectionContainer)))();
  var MaterialSelectComponentL = () => (MaterialSelectComponentL = dart.constFn(dart.legacy(material_select.MaterialSelectComponent)))();
  var ComponentFactoryOfMaterialSelectComponentL = () => (ComponentFactoryOfMaterialSelectComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialSelectComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var AppViewLAndintLToAppViewLOfMaterialSelectComponentLOfTL = () => (AppViewLAndintLToAppViewLOfMaterialSelectComponentLOfTL = dart.constFn(dart.gFnType(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var MaterialSelectComponentOfTL = () => (MaterialSelectComponentOfTL = dart.constFn(material_select.MaterialSelectComponent$(TL())))();
    var MaterialSelectComponentLOfTL = () => (MaterialSelectComponentLOfTL = dart.constFn(dart.legacy(MaterialSelectComponentOfTL())))();
    var AppViewOfMaterialSelectComponentLOfTL = () => (AppViewOfMaterialSelectComponentLOfTL = dart.constFn(app_view.AppView$(MaterialSelectComponentLOfTL())))();
    var AppViewLOfMaterialSelectComponentLOfTL = () => (AppViewLOfMaterialSelectComponentLOfTL = dart.constFn(dart.legacy(AppViewOfMaterialSelectComponentLOfTL())))();
    return [AppViewLOfMaterialSelectComponentLOfTL(), [AppViewL(), intL()]];
  })))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_select/material_select.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], dart.dynamic);
    },
    get C3() {
      return C3 = dart.fn(material_select$46template.viewFactory_MaterialSelectComponentHost0, AppViewLAndintLToAppViewLOfMaterialSelectComponentLOfTL());
    },
    get C2() {
      return C2 = dart.const(dart.gbind(C3 || CT.C3, dart.dynamic));
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfMaterialSelectComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-select"
      });
    }
  }, false);
  var _query_FocusableItem_0_0_isDirty = dart.privateName(material_select$46template, "_query_FocusableItem_0_0_isDirty");
  var _compView_0 = dart.privateName(material_select$46template, "_compView_0");
  var _FocusListDirective_0_5 = dart.privateName(material_select$46template, "_FocusListDirective_0_5");
  var _MaterialListComponent_0_6 = dart.privateName(material_select$46template, "_MaterialListComponent_0_6");
  var _appEl_1 = dart.privateName(material_select$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(material_select$46template, "_NgIf_1_9");
  var _expr_0 = dart.privateName(material_select$46template, "_expr_0");
  var _expr_2 = dart.privateName(material_select$46template, "_expr_2");
  var _expr_4 = dart.privateName(material_select$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_select$46template, "_expr_5");
  var _el_0 = dart.privateName(material_select$46template, "_el_0");
  var _FocusItemDirective_0_5 = dart.privateName(material_select$46template, "_FocusItemDirective_0_5");
  const _is_ViewMaterialSelectComponent0_default = Symbol('_is_ViewMaterialSelectComponent0_default');
  material_select$46template.ViewMaterialSelectComponent0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ViewMaterialSelectComponent0 extends app_view.AppView$(dart.legacy(material_select.MaterialSelectComponent$(dart.legacy(T)))) {
      static get _debugComponentUrl() {
        return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_select/material_select.dart" : null;
      }
      build() {
        let t0;
        let _rootEl = this.rootEl;
        let parentRenderNode = this.initViewRoot(_rootEl);
        this[_compView_0] = new material_list$46template.ViewMaterialListComponent0.new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        parentRenderNode[$append](this[_el_0]);
        dom_helpers.setAttribute(this[_el_0], "focusList", "");
        dom_helpers.setAttribute(this[_el_0], "role", "none");
        this.addShimC(HtmlElementL().as(this[_el_0]));
        this[_FocusListDirective_0_5] = new focus_list$46template.FocusListDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(FocusListDirectiveL(), dart.wrapType(FocusListDirectiveL()), dart.fn(() => new focus_list.FocusListDirective.new(NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), "none"), VoidToFocusListDirectiveL())) : new focus_list.FocusListDirective.new(NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), "none"));
        this[_MaterialListComponent_0_6] = new material_list.MaterialListComponent.new();
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select$46template.viewFactory_MaterialSelectComponent1(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        this[_compView_0].create(this[_MaterialListComponent_0_6], JSArrayOfObjectL().of([(t0 = [this.projectedNodes[$_get](0)], (() => {
            t0[$addAll]([this[_appEl_1]]);
            return t0;
          })())]));
        this.init0();
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let changed = false;
        let firstCheck = this.cdState === 0;
        let currVal_0 = _ctx.autoFocusIndex;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_FocusListDirective_0_5].instance.autoFocusIndex = currVal_0;
          this[_expr_0] = currVal_0;
        }
        changed = false;
        if (firstCheck) {
          this[_MaterialListComponent_0_6].role = "none";
          changed = true;
        }
        let currVal_2 = _ctx.width;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_MaterialListComponent_0_6].width = currVal_2;
          changed = true;
          this[_expr_2] = currVal_2;
        }
        if (changed) {
          this[_compView_0].markAsCheckOnce();
        }
        this[_NgIf_1_9].ngIf = _ctx.options != null;
        this[_appEl_1].detectChangesInNestedViews();
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          if (dart.test(this[_query_FocusableItem_0_0_isDirty])) {
            this[_FocusListDirective_0_5].instance.listItems = this[_appEl_1].mapNestedViews(FocusableItemL(), _ViewMaterialSelectComponent1L(), dart.fn(nestedView => nestedView[_appEl_1].mapNestedViews(FocusableItemL(), _ViewMaterialSelectComponent2L(), dart.fn(nestedView => nestedView[_appEl_1].mapNestedViews(FocusableItemL(), _ViewMaterialSelectComponent3L(), dart.fn(nestedView => nestedView[_appEl_1].mapNestedViews(FocusableItemL(), _ViewMaterialSelectComponent5L(), dart.fn(nestedView => JSArrayOfFocusableItemL().of([nestedView[_FocusItemDirective_0_5].instance]), _ViewMaterialSelectComponent5LToListLOfFocusableItemL())), _ViewMaterialSelectComponent3LToListLOfFocusableItemL())), _ViewMaterialSelectComponent2LToListLOfFocusableItemL())), _ViewMaterialSelectComponent1LToListLOfFocusableItemL()));
            this[_query_FocusableItem_0_0_isDirty] = false;
          }
        }
        this[_FocusListDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
        this[_compView_0].destroyInternalState();
        this[_FocusListDirective_0_5].instance.ngOnDestroy();
      }
      detectHostChanges(firstCheck) {
        let t0;
        let _ctx = this.ctx;
        let currVal_4 = _ctx.isMultiSelect;
        if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          dom_helpers.updateAttribute(this.rootEl, "aria-multiselectable", (t0 = currVal_4, t0 == null ? null : dart.toString(t0)));
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.disabledStr;
        if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          dom_helpers.updateAttribute(this.rootEl, "aria-disabled", currVal_5);
          this[_expr_5] = currVal_5;
        }
      }
      initComponentStyles() {
        let styles = material_select$46template.ViewMaterialSelectComponent0._componentStyles;
        if (styles == null) {
          material_select$46template.ViewMaterialSelectComponent0._componentStyles = styles = material_select$46template.ViewMaterialSelectComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_select$46template.styles$MaterialSelectComponent, material_select$46template.ViewMaterialSelectComponent0._debugComponentUrl);
        }
        this.componentStyles = styles;
      }
    }
    (ViewMaterialSelectComponent0.new = function(parentView, parentIndex) {
      this[_query_FocusableItem_0_0_isDirty] = true;
      this[_compView_0] = null;
      this[_FocusListDirective_0_5] = null;
      this[_MaterialListComponent_0_6] = null;
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_expr_0] = null;
      this[_expr_2] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_el_0] = null;
      ViewMaterialSelectComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
      this.initComponentStyles();
      this.rootEl = HtmlElementL().as(html.document[$createElement]("material-select"));
      dom_helpers.updateAttribute(this.rootEl, "role", "listbox");
    }).prototype = ViewMaterialSelectComponent0.prototype;
    dart.addTypeTests(ViewMaterialSelectComponent0);
    ViewMaterialSelectComponent0.prototype[_is_ViewMaterialSelectComponent0_default] = true;
    dart.addTypeCaches(ViewMaterialSelectComponent0);
    dart.setLibraryUri(ViewMaterialSelectComponent0, L0);
    dart.setFieldSignature(ViewMaterialSelectComponent0, () => ({
      __proto__: dart.getFields(ViewMaterialSelectComponent0.__proto__),
      [_query_FocusableItem_0_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
      [_compView_0]: dart.fieldType(dart.legacy(material_list$46template.ViewMaterialListComponent0)),
      [_FocusListDirective_0_5]: dart.fieldType(dart.legacy(focus_list$46template.FocusListDirectiveNgCd)),
      [_MaterialListComponent_0_6]: dart.fieldType(dart.legacy(material_list.MaterialListComponent)),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_expr_0]: dart.fieldType(dart.legacy(core.int)),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(dart.legacy(html.Element))
    }));
    return ViewMaterialSelectComponent0;
  });
  material_select$46template.ViewMaterialSelectComponent0 = material_select$46template.ViewMaterialSelectComponent0$();
  dart.defineLazy(material_select$46template.ViewMaterialSelectComponent0, {
    /*material_select$46template.ViewMaterialSelectComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  dart.addTypeTests(material_select$46template.ViewMaterialSelectComponent0, _is_ViewMaterialSelectComponent0_default);
  var _NgFor_1_9 = dart.privateName(material_select$46template, "_NgFor_1_9");
  var _expr_1 = dart.privateName(material_select$46template, "_expr_1");
  const _is__ViewMaterialSelectComponent1_default = Symbol('_is__ViewMaterialSelectComponent1_default');
  material_select$46template._ViewMaterialSelectComponent1$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _ViewMaterialSelectComponent1 extends app_view.AppView$(dart.legacy(material_select.MaterialSelectComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        this[_el_0] = DivElementL().as(doc[$createElement]("div"));
        this.updateChildClass(this[_el_0], "options-wrapper");
        dom_helpers.setAttribute(this[_el_0], "role", "group");
        this.addShimC(this[_el_0]);
        let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select$46template.viewFactory_MaterialSelectComponent2(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
        this.init1(this[_el_0]);
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        if (firstCheck) {
          if (_ctx.trackByIndexFn != null) {
            this[_NgFor_1_9].ngForTrackBy = intLAnddynamicToLObjectL().as(_ctx.trackByIndexFn);
          }
        }
        let currVal_2 = _ctx.options.optionGroups;
        if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_NgFor_1_9].ngForOf = currVal_2;
          this[_expr_2] = currVal_2;
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_1_9].ngDoCheck();
        }
        this[_appEl_1].detectChangesInNestedViews();
        let currVal_0 = _ctx.ariaLabelledBy;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          dom_helpers.updateAttribute(this[_el_0], "aria-labelledby", currVal_0);
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.ariaDescribedBy;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          dom_helpers.updateAttribute(this[_el_0], "aria-describedby", currVal_1);
          this[_expr_1] = currVal_1;
        }
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectComponent1.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgFor_1_9] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_el_0] = null;
      _ViewMaterialSelectComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectComponent1.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent1);
    _ViewMaterialSelectComponent1.prototype[_is__ViewMaterialSelectComponent1_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectComponent1);
    dart.setLibraryUri(_ViewMaterialSelectComponent1, L0);
    dart.setFieldSignature(_ViewMaterialSelectComponent1, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent1.__proto__),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_0]: dart.fieldType(dart.dynamic),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
    }));
    return _ViewMaterialSelectComponent1;
  });
  material_select$46template._ViewMaterialSelectComponent1 = material_select$46template._ViewMaterialSelectComponent1$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponent1, _is__ViewMaterialSelectComponent1_default);
  const _is__ViewMaterialSelectComponent2_default = Symbol('_is__ViewMaterialSelectComponent2_default');
  material_select$46template._ViewMaterialSelectComponent2$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialSelectComponent2 extends app_view.AppView$(dart.legacy(material_select.MaterialSelectComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        this[_el_0] = DivElementL().as(doc[$createElement]("div"));
        dom_helpers.setAttribute(this[_el_0], "group", "");
        this.addShimC(this[_el_0]);
        let _anchor_1 = dom_helpers.appendAnchor(this[_el_0]);
        this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select$46template.viewFactory_MaterialSelectComponent3(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
        this.init1(this[_el_0]);
      }
      detectChangesInternal() {
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), this.locals[$_get]("$implicit"));
        this[_NgIf_1_9].ngIf = local_group.isNotEmpty;
        this[_appEl_1].detectChangesInNestedViews();
        let currVal_0 = local_group.isEmpty;
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          dom_helpers.updateClassBinding(this[_el_0], "empty", currVal_0);
          this[_expr_0] = currVal_0;
        }
      }
      destroyInternal() {
        this[_appEl_1].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectComponent2.new = function(parentView, parentIndex) {
      this[_appEl_1] = null;
      this[_NgIf_1_9] = null;
      this[_expr_0] = null;
      this[_el_0] = null;
      _ViewMaterialSelectComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectComponent2.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent2);
    _ViewMaterialSelectComponent2.prototype[_is__ViewMaterialSelectComponent2_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectComponent2);
    dart.setLibraryUri(_ViewMaterialSelectComponent2, L0);
    dart.setFieldSignature(_ViewMaterialSelectComponent2, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent2.__proto__),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
      [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
    }));
    return _ViewMaterialSelectComponent2;
  });
  material_select$46template._ViewMaterialSelectComponent2 = material_select$46template._ViewMaterialSelectComponent2$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponent2, _is__ViewMaterialSelectComponent2_default);
  var _appEl_0 = dart.privateName(material_select$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(material_select$46template, "_NgIf_0_9");
  const _is__ViewMaterialSelectComponent3_default = Symbol('_is__ViewMaterialSelectComponent3_default');
  material_select$46template._ViewMaterialSelectComponent3$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialSelectComponent3 extends app_view.AppView$(dart.legacy(material_select.MaterialSelectComponent$(dart.legacy(T)))) {
      build() {
        let _anchor_0 = dom_helpers.createAnchor();
        this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
        let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], dart.fn((parentView, parentIndex) => material_select$46template.viewFactory_MaterialSelectComponent4(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
        let _anchor_1 = dom_helpers.createAnchor();
        this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
        let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], dart.fn((parentView, parentIndex) => material_select$46template.viewFactory_MaterialSelectComponent5(TL(), parentView, parentIndex), AppViewLOfObjectLAndintLToAppViewLOfvoid()));
        this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
        this.init(JSArrayOfObjectL().of([this[_appEl_0], this[_appEl_1]]), null);
      }
      detectChangesInternal() {
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), this.parentView.locals[$_get]("$implicit"));
        this[_NgIf_0_9].ngIf = local_group.hasLabel;
        let currVal_1 = local_group;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_NgFor_1_9].ngForOf = currVal_1;
          this[_expr_1] = currVal_1;
        }
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
          this[_NgFor_1_9].ngDoCheck();
        }
        this[_appEl_0].detectChangesInNestedViews();
        this[_appEl_1].detectChangesInNestedViews();
      }
      destroyInternal() {
        this[_appEl_0].destroyNestedViews();
        this[_appEl_1].destroyNestedViews();
      }
    }
    (_ViewMaterialSelectComponent3.new = function(parentView, parentIndex) {
      this[_appEl_0] = null;
      this[_NgIf_0_9] = null;
      this[_appEl_1] = null;
      this[_NgFor_1_9] = null;
      this[_expr_1] = null;
      _ViewMaterialSelectComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectComponent3.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent3);
    _ViewMaterialSelectComponent3.prototype[_is__ViewMaterialSelectComponent3_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectComponent3);
    dart.setLibraryUri(_ViewMaterialSelectComponent3, L0);
    dart.setFieldSignature(_ViewMaterialSelectComponent3, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent3.__proto__),
      [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
      [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
      [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
      [_expr_1]: dart.fieldType(dart.dynamic)
    }));
    return _ViewMaterialSelectComponent3;
  });
  material_select$46template._ViewMaterialSelectComponent3 = material_select$46template._ViewMaterialSelectComponent3$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponent3, _is__ViewMaterialSelectComponent3_default);
  var _textBinding_1 = dart.privateName(material_select$46template, "_textBinding_1");
  const _is__ViewMaterialSelectComponent4_default = Symbol('_is__ViewMaterialSelectComponent4_default');
  material_select$46template._ViewMaterialSelectComponent4$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var OptionGroupOfTL = () => (OptionGroupOfTL = dart.constFn(selection_options.OptionGroup$(TL())))();
    var OptionGroupLOfTL = () => (OptionGroupLOfTL = dart.constFn(dart.legacy(OptionGroupOfTL())))();
    class _ViewMaterialSelectComponent4 extends app_view.AppView$(dart.legacy(material_select.MaterialSelectComponent$(dart.legacy(T)))) {
      build() {
        let doc = html.document;
        let _el_0 = doc[$createElement]("span");
        dom_helpers.setAttribute(_el_0, "label", "");
        this.addShimE(_el_0);
        _el_0[$append](this[_textBinding_1].element);
        this.init1(_el_0);
      }
      detectChangesInternal() {
        let local_group = optimizations.unsafeCast(OptionGroupLOfTL(), this.parentView.parentView.locals[$_get]("$implicit"));
        this[_textBinding_1].updateText(interpolate.interpolateString0(local_group.uiDisplayName));
      }
    }
    (_ViewMaterialSelectComponent4.new = function(parentView, parentIndex) {
      this[_textBinding_1] = new text_binding.TextBinding.new();
      _ViewMaterialSelectComponent4.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectComponent4.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent4);
    _ViewMaterialSelectComponent4.prototype[_is__ViewMaterialSelectComponent4_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectComponent4);
    dart.setLibraryUri(_ViewMaterialSelectComponent4, L0);
    dart.setFieldSignature(_ViewMaterialSelectComponent4, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent4.__proto__),
      [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
    }));
    return _ViewMaterialSelectComponent4;
  });
  material_select$46template._ViewMaterialSelectComponent4 = material_select$46template._ViewMaterialSelectComponent4$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponent4, _is__ViewMaterialSelectComponent4_default);
  var _MaterialSelectItemComponent_0_6 = dart.privateName(material_select$46template, "_MaterialSelectItemComponent_0_6");
  var _expr_3 = dart.privateName(material_select$46template, "_expr_3");
  var C0;
  const _is__ViewMaterialSelectComponent5_default = Symbol('_is__ViewMaterialSelectComponent5_default');
  material_select$46template._ViewMaterialSelectComponent5$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialSelectItemComponent0OfTL = () => (ViewMaterialSelectItemComponent0OfTL = dart.constFn(material_select_item$46template.ViewMaterialSelectItemComponent0$(TL())))();
    var MaterialSelectItemComponentOfTL = () => (MaterialSelectItemComponentOfTL = dart.constFn(material_select_item.MaterialSelectItemComponent$(TL())))();
    var MaterialSelectItemComponentLOfTL = () => (MaterialSelectItemComponentLOfTL = dart.constFn(dart.legacy(MaterialSelectItemComponentOfTL())))();
    var VoidToMaterialSelectItemComponentLOfTL = () => (VoidToMaterialSelectItemComponentLOfTL = dart.constFn(dart.fnType(MaterialSelectItemComponentLOfTL(), [])))();
    var TLToComponentFactoryL = () => (TLToComponentFactoryL = dart.constFn(dart.fnType(ComponentFactoryL(), [TL()])))();
    var TLToLComponentFactoryL = () => (TLToLComponentFactoryL = dart.constFn(dart.legacy(TLToComponentFactoryL())))();
    var TLToStringL = () => (TLToStringL = dart.constFn(dart.fnType(StringL(), [TL()])))();
    var TLToLStringL = () => (TLToLStringL = dart.constFn(dart.legacy(TLToStringL())))();
    class _ViewMaterialSelectComponent5 extends app_view.AppView$(dart.legacy(material_select.MaterialSelectComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectItemComponent0OfTL()).new(this, 0);
        this[_el_0] = this[_compView_0].rootEl;
        dom_helpers.setAttribute(this[_el_0], "focusItem", "");
        this.addShimC(HtmlElementL().as(this[_el_0]));
        this[_FocusItemDirective_0_5] = new focus_item$46template.FocusItemDirectiveNgCd.new(new focus_item.FocusItemDirective.new(HtmlElementL().as(this[_el_0]), null));
        this[_MaterialSelectItemComponent_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialSelectItemComponentLOfTL(), dart.wrapType(MaterialSelectItemComponentL()), dart.fn(() => new (MaterialSelectItemComponentOfTL()).new(HtmlElementL().as(this[_el_0]), DropdownHandleL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0], null), VoidToMaterialSelectItemComponentLOfTL())) : new (MaterialSelectItemComponentOfTL()).new(HtmlElementL().as(this[_el_0]), DropdownHandleL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), ActivationHandlerL().as(this.parentView.parentView.parentView.parentView.parentView.injectorGetOptional(dart.wrapType(ActivationHandlerL()), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_0], null);
        this[_compView_0].create(this[_MaterialSelectItemComponent_0_6], JSArrayOfObjectL().of([C0 || CT.C0]));
        this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_FocusItemDirective_0_5].instance, 'keydown')));
        this.init1(this[_el_0]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if (0 === nodeIndex) {
          if (token === dart.wrapType(FocusableItemL())) {
            return this[_FocusItemDirective_0_5].instance;
          }
          if (token === dart.wrapType(SelectionItemL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL())) {
            return this[_MaterialSelectItemComponent_0_6];
          }
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let _ctx = this.ctx;
        let firstCheck = this.cdState === 0;
        let local_item = optimizations.unsafeCast(TL(), this.locals[$_get]("$implicit"));
        let currVal_0 = dart.test(_ctx.disabled) || dart.test(_ctx.isOptionDisabled(local_item));
        if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
          this[_MaterialSelectItemComponent_0_6].disabled = currVal_0;
          this[_expr_0] = currVal_0;
        }
        let currVal_1 = _ctx.componentRenderer;
        if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
          this[_MaterialSelectItemComponent_0_6].componentRenderer = currVal_1;
          this[_expr_1] = currVal_1;
        }
        let currVal_2 = TLToLComponentFactoryL().as(_ctx.factoryRenderer);
        if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
          this[_MaterialSelectItemComponent_0_6].factoryRenderer = dynamicToLComponentFactoryL().as(currVal_2);
          this[_expr_2] = currVal_2;
        }
        let currVal_3 = local_item;
        if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
          this[_MaterialSelectItemComponent_0_6].value = currVal_3;
          this[_expr_3] = currVal_3;
        }
        let currVal_4 = TLToLStringL().as(_ctx.itemRenderer);
        if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
          this[_MaterialSelectItemComponent_0_6].itemRenderer = currVal_4;
          this[_expr_4] = currVal_4;
        }
        let currVal_5 = _ctx.selection;
        if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
          this[_MaterialSelectItemComponent_0_6].selection = currVal_5;
          this[_expr_5] = currVal_5;
        }
        this[_FocusItemDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      dirtyParentQueriesInternal() {
        optimizations.unsafeCast(ViewMaterialSelectComponent0L(), this.parentView.parentView.parentView.parentView)[_query_FocusableItem_0_0_isDirty] = true;
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
        this[_MaterialSelectItemComponent_0_6].ngOnDestroy();
      }
    }
    (_ViewMaterialSelectComponent5.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_FocusItemDirective_0_5] = null;
      this[_MaterialSelectItemComponent_0_6] = null;
      this[_expr_0] = null;
      this[_expr_1] = null;
      this[_expr_2] = null;
      this[_expr_3] = null;
      this[_expr_4] = null;
      this[_expr_5] = null;
      this[_el_0] = null;
      _ViewMaterialSelectComponent5.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
      this.initComponentStyles();
    }).prototype = _ViewMaterialSelectComponent5.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponent5);
    _ViewMaterialSelectComponent5.prototype[_is__ViewMaterialSelectComponent5_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectComponent5);
    dart.setMethodSignature(_ViewMaterialSelectComponent5, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponent5.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialSelectComponent5, L0);
    dart.setFieldSignature(_ViewMaterialSelectComponent5, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponent5.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_select_item$46template.ViewMaterialSelectItemComponent0$(dart.legacy(T)))),
      [_FocusItemDirective_0_5]: dart.fieldType(dart.legacy(focus_item$46template.FocusItemDirectiveNgCd)),
      [_MaterialSelectItemComponent_0_6]: dart.fieldType(dart.legacy(material_select_item.MaterialSelectItemComponent$(dart.legacy(T)))),
      [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
      [_expr_1]: dart.fieldType(dart.dynamic),
      [_expr_2]: dart.fieldType(dart.dynamic),
      [_expr_3]: dart.fieldType(dart.dynamic),
      [_expr_4]: dart.fieldType(dart.dynamic),
      [_expr_5]: dart.fieldType(dart.dynamic),
      [_el_0]: dart.fieldType(dart.legacy(html.Element))
    }));
    return _ViewMaterialSelectComponent5;
  });
  material_select$46template._ViewMaterialSelectComponent5 = material_select$46template._ViewMaterialSelectComponent5$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponent5, _is__ViewMaterialSelectComponent5_default);
  var _MaterialSelectComponent_0_5 = dart.privateName(material_select$46template, "_MaterialSelectComponent_0_5");
  const _is__ViewMaterialSelectComponentHost0_default = Symbol('_is__ViewMaterialSelectComponentHost0_default');
  material_select$46template._ViewMaterialSelectComponentHost0$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ViewMaterialSelectComponent0OfTL = () => (ViewMaterialSelectComponent0OfTL = dart.constFn(material_select$46template.ViewMaterialSelectComponent0$(TL())))();
    var MaterialSelectComponentOfTL = () => (MaterialSelectComponentOfTL = dart.constFn(material_select.MaterialSelectComponent$(TL())))();
    var SelectionItemOfTL = () => (SelectionItemOfTL = dart.constFn(selection_container.SelectionItem$(TL())))();
    var SelectionItemLOfTL = () => (SelectionItemLOfTL = dart.constFn(dart.legacy(SelectionItemOfTL())))();
    var JSArrayOfSelectionItemLOfTL = () => (JSArrayOfSelectionItemLOfTL = dart.constFn(_interceptors.JSArray$(SelectionItemLOfTL())))();
    var MaterialSelectComponentLOfTL = () => (MaterialSelectComponentLOfTL = dart.constFn(dart.legacy(MaterialSelectComponentOfTL())))();
    var ComponentRefOfMaterialSelectComponentLOfTL = () => (ComponentRefOfMaterialSelectComponentLOfTL = dart.constFn(component_factory.ComponentRef$(MaterialSelectComponentLOfTL())))();
    class _ViewMaterialSelectComponentHost0 extends app_view.AppView$(dart.legacy(material_select.MaterialSelectComponent$(dart.legacy(T)))) {
      build() {
        this[_compView_0] = new (ViewMaterialSelectComponent0OfTL()).new(this, 0);
        this.rootEl = this[_compView_0].rootEl;
        this[_MaterialSelectComponent_0_5] = new (MaterialSelectComponentOfTL()).new();
        this[_MaterialSelectComponent_0_5].selectItems = JSArrayOfSelectionItemLOfTL().of([]);
        this[_compView_0].create(this[_MaterialSelectComponent_0_5], this.projectedNodes);
        this.init1(this.rootEl);
        return new (ComponentRefOfMaterialSelectComponentLOfTL()).new(0, this, this.rootEl, this[_MaterialSelectComponent_0_5]);
      }
      injectorGetInternal(token, nodeIndex, notFoundResult) {
        if ((token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(HasRendererL()) || token === dart.wrapType(SelectionContainerL())) && 0 === nodeIndex) {
          return this[_MaterialSelectComponent_0_5];
        }
        return notFoundResult;
      }
      detectChangesInternal() {
        let firstCheck = this.cdState === 0;
        if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
          this[_MaterialSelectComponent_0_5].ngOnInit();
        }
        this[_compView_0].detectHostChanges(firstCheck);
        this[_compView_0].detectChanges();
      }
      destroyInternal() {
        this[_compView_0].destroyInternalState();
      }
    }
    (_ViewMaterialSelectComponentHost0.new = function(parentView, parentIndex) {
      this[_compView_0] = null;
      this[_MaterialSelectComponent_0_5] = null;
      _ViewMaterialSelectComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
      ;
    }).prototype = _ViewMaterialSelectComponentHost0.prototype;
    dart.addTypeTests(_ViewMaterialSelectComponentHost0);
    _ViewMaterialSelectComponentHost0.prototype[_is__ViewMaterialSelectComponentHost0_default] = true;
    dart.addTypeCaches(_ViewMaterialSelectComponentHost0);
    dart.setMethodSignature(_ViewMaterialSelectComponentHost0, () => ({
      __proto__: dart.getMethods(_ViewMaterialSelectComponentHost0.__proto__),
      injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
    }));
    dart.setLibraryUri(_ViewMaterialSelectComponentHost0, L0);
    dart.setFieldSignature(_ViewMaterialSelectComponentHost0, () => ({
      __proto__: dart.getFields(_ViewMaterialSelectComponentHost0.__proto__),
      [_compView_0]: dart.fieldType(dart.legacy(material_select$46template.ViewMaterialSelectComponent0$(dart.legacy(T)))),
      [_MaterialSelectComponent_0_5]: dart.fieldType(dart.legacy(material_select.MaterialSelectComponent$(dart.legacy(T))))
    }));
    return _ViewMaterialSelectComponentHost0;
  });
  material_select$46template._ViewMaterialSelectComponentHost0 = material_select$46template._ViewMaterialSelectComponentHost0$();
  dart.addTypeTests(material_select$46template._ViewMaterialSelectComponentHost0, _is__ViewMaterialSelectComponentHost0_default);
  material_select$46template.viewFactory_MaterialSelectComponent1 = function viewFactory_MaterialSelectComponent1(T, parentView, parentIndex) {
    return new (material_select$46template._ViewMaterialSelectComponent1$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select$46template.viewFactory_MaterialSelectComponent2 = function viewFactory_MaterialSelectComponent2(T, parentView, parentIndex) {
    return new (material_select$46template._ViewMaterialSelectComponent2$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select$46template.viewFactory_MaterialSelectComponent3 = function viewFactory_MaterialSelectComponent3(T, parentView, parentIndex) {
    return new (material_select$46template._ViewMaterialSelectComponent3$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select$46template.viewFactory_MaterialSelectComponent4 = function viewFactory_MaterialSelectComponent4(T, parentView, parentIndex) {
    return new (material_select$46template._ViewMaterialSelectComponent4$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select$46template.viewFactory_MaterialSelectComponent5 = function viewFactory_MaterialSelectComponent5(T, parentView, parentIndex) {
    return new (material_select$46template._ViewMaterialSelectComponent5$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select$46template.viewFactory_MaterialSelectComponentHost0 = function viewFactory_MaterialSelectComponentHost0(T, parentView, parentIndex) {
    return new (material_select$46template._ViewMaterialSelectComponentHost0$(dart.legacy(T))).new(parentView, parentIndex);
  };
  material_select$46template.initReflector = function initReflector() {
    if (dart.test(material_select$46template._visited)) {
      return;
    }
    material_select$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialSelectComponentL()), material_select$46template.MaterialSelectComponentNgFactory);
    material_select_base$46template.initReflector();
    material_select_item$46template.initReflector();
    angular$46template.initReflector();
    focus_item$46template.initReflector();
    focus_list$46template.initReflector();
    has_disabled$46template.initReflector();
    material_list$46template.initReflector();
    select$46template.initReflector();
    selection_container$46template.initReflector();
    selection_model$46template.initReflector();
    selection_options$46template.initReflector();
    has_factory$46template.initReflector();
    has_renderer$46template.initReflector();
    template_support$46template.initReflector();
    properties$46template.initReflector();
  };
  dart.copyProperties(material_select$46template, {
    get MaterialSelectComponentNgFactory() {
      return material_select$46template._MaterialSelectComponentNgFactory;
    }
  });
  var C3;
  var C2;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C1;
  dart.defineLazy(material_select$46template, {
    /*material_select$46template.styles$MaterialSelectComponent*/get styles$MaterialSelectComponent() {
      return [material_select$46scss$46css$46shim.styles];
    },
    /*material_select$46template._MaterialSelectComponentNgFactory*/get _MaterialSelectComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*material_select$46template.styles$MaterialSelectComponentHost*/get styles$MaterialSelectComponentHost() {
      return C0 || CT.C0;
    },
    /*material_select$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_select/material_select.template", {
    "package:angular_components/material_select/material_select.template.dart": material_select$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_select.template.dart"],"names":[],"mappings":"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","file":"material_select.template.ddc.js"}');
  // Exports:
  return {
    material_select__material_select$46template: material_select$46template
  };
}));

//# sourceMappingURL=material_select.template.ddc.js.map
