define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/focus/focus_list.template', 'packages/angular_components/focus/focus_list', 'packages/angular_components/focus/focus', 'packages/angular_components/material_tab/fixed_material_tab_strip', 'packages/angular_components/material_tab/tab_button.template', 'packages/angular_components/focus/focus_item.template', 'packages/angular_components/focus/focus_item', 'packages/angular_components/material_tab/tab_button', 'packages/angular/angular.template', 'packages/angular_components/annotations/rtl_annotation.template', 'packages/angular_components/material_tab/tab_change_event.template', 'packages/angular_components/material_tab/fixed_material_tab_strip.scss.css.shim'], (function load__packages__angular_components__material_tab__fixed_material_tab_strip_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__focus__focus_list$46template, packages__angular_components__focus__focus_list, packages__angular_components__focus__focus, packages__angular_components__material_tab__fixed_material_tab_strip, packages__angular_components__material_tab__tab_button$46template, packages__angular_components__focus__focus_item$46template, packages__angular_components__focus__focus_item, packages__angular_components__material_tab__tab_button, packages__angular__angular$46template, packages__angular_components__annotations__rtl_annotation$46template, packages__angular_components__material_tab__tab_change_event$46template, packages__angular_components__material_tab__fixed_material_tab_strip$46scss$46css$46shim) {
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
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const focus_list$46template = packages__angular_components__focus__focus_list$46template.focus__focus_list$46template;
  const focus_list = packages__angular_components__focus__focus_list.focus__focus_list;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const fixed_material_tab_strip = packages__angular_components__material_tab__fixed_material_tab_strip.material_tab__fixed_material_tab_strip;
  const tab_button$46template = packages__angular_components__material_tab__tab_button$46template.material_tab__tab_button$46template;
  const focus_item$46template = packages__angular_components__focus__focus_item$46template.focus__focus_item$46template;
  const focus_item = packages__angular_components__focus__focus_item.focus__focus_item;
  const tab_button = packages__angular_components__material_tab__tab_button.material_tab__tab_button;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const rtl_annotation$46template = packages__angular_components__annotations__rtl_annotation$46template.annotations__rtl_annotation$46template;
  const tab_change_event$46template = packages__angular_components__material_tab__tab_change_event$46template.material_tab__tab_change_event$46template;
  const fixed_material_tab_strip$46scss$46css$46shim = packages__angular_components__material_tab__fixed_material_tab_strip$46scss$46css$46shim.material_tab__fixed_material_tab_strip$46scss$46css$46shim;
  var fixed_material_tab_strip$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $setProperty = dartx.setProperty;
  var $addEventListener = dartx.addEventListener;
  var $_get = dartx._get;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var FocusListDirectiveL = () => (FocusListDirectiveL = dart.constFn(dart.legacy(focus_list.FocusListDirective)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var VoidToFocusListDirectiveL = () => (VoidToFocusListDirectiveL = dart.constFn(dart.fnType(FocusListDirectiveL(), [])))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var FocusableItemL = () => (FocusableItemL = dart.constFn(dart.legacy(focus.FocusableItem)))();
  var _ViewFixedMaterialTabStripComponent1L = () => (_ViewFixedMaterialTabStripComponent1L = dart.constFn(dart.legacy(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1)))();
  var JSArrayOfFocusableItemL = () => (JSArrayOfFocusableItemL = dart.constFn(_interceptors.JSArray$(FocusableItemL())))();
  var ListOfFocusableItemL = () => (ListOfFocusableItemL = dart.constFn(core.List$(FocusableItemL())))();
  var ListLOfFocusableItemL = () => (ListLOfFocusableItemL = dart.constFn(dart.legacy(ListOfFocusableItemL())))();
  var _ViewFixedMaterialTabStripComponent1LToListLOfFocusableItemL = () => (_ViewFixedMaterialTabStripComponent1LToListLOfFocusableItemL = dart.constFn(dart.fnType(ListLOfFocusableItemL(), [_ViewFixedMaterialTabStripComponent1L()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ViewFixedMaterialTabStripComponent0L = () => (ViewFixedMaterialTabStripComponent0L = dart.constFn(dart.legacy(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0)))();
  var FixedMaterialTabStripComponentL = () => (FixedMaterialTabStripComponentL = dart.constFn(dart.legacy(fixed_material_tab_strip.FixedMaterialTabStripComponent)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToFixedMaterialTabStripComponentL = () => (VoidToFixedMaterialTabStripComponentL = dart.constFn(dart.fnType(FixedMaterialTabStripComponentL(), [])))();
  var ComponentRefOfFixedMaterialTabStripComponentL = () => (ComponentRefOfFixedMaterialTabStripComponentL = dart.constFn(component_factory.ComponentRef$(FixedMaterialTabStripComponentL())))();
  var ComponentFactoryOfFixedMaterialTabStripComponentL = () => (ComponentFactoryOfFixedMaterialTabStripComponentL = dart.constFn(component_factory.ComponentFactory$(FixedMaterialTabStripComponentL())))();
  var AppViewOfFixedMaterialTabStripComponentL = () => (AppViewOfFixedMaterialTabStripComponentL = dart.constFn(app_view.AppView$(FixedMaterialTabStripComponentL())))();
  var AppViewLOfFixedMaterialTabStripComponentL = () => (AppViewLOfFixedMaterialTabStripComponentL = dart.constFn(dart.legacy(AppViewOfFixedMaterialTabStripComponentL())))();
  var AppViewLAndintLToAppViewLOfFixedMaterialTabStripComponentL = () => (AppViewLAndintLToAppViewLOfFixedMaterialTabStripComponentL = dart.constFn(dart.fnType(AppViewLOfFixedMaterialTabStripComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_tab/fixed_material_tab_strip.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "isRtl"
      });
    },
    get C3() {
      return C3 = dart.fn(fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponentHost0, AppViewLAndintLToAppViewLOfFixedMaterialTabStripComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfFixedMaterialTabStripComponentL().prototype,
        [ComponentFactory__viewFactory]: C3 || CT.C3,
        [ComponentFactory_selector]: "material-tab-strip"
      });
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _query_FocusableItem_0_0_isDirty = dart.privateName(fixed_material_tab_strip$46template, "_query_FocusableItem_0_0_isDirty");
  var _FocusListDirective_0_5 = dart.privateName(fixed_material_tab_strip$46template, "_FocusListDirective_0_5");
  var _appEl_2 = dart.privateName(fixed_material_tab_strip$46template, "_appEl_2");
  var _NgFor_2_9 = dart.privateName(fixed_material_tab_strip$46template, "_NgFor_2_9");
  var _expr_0 = dart.privateName(fixed_material_tab_strip$46template, "_expr_0");
  var _expr_1 = dart.privateName(fixed_material_tab_strip$46template, "_expr_1");
  var _el_0 = dart.privateName(fixed_material_tab_strip$46template, "_el_0");
  var _el_1 = dart.privateName(fixed_material_tab_strip$46template, "_el_1");
  var C0;
  var _FocusItemDirective_0_5 = dart.privateName(fixed_material_tab_strip$46template, "_FocusItemDirective_0_5");
  fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0 = class ViewFixedMaterialTabStripComponent0 extends app_view.AppView$(dart.legacy(fixed_material_tab_strip.FixedMaterialTabStripComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_tab/fixed_material_tab_strip.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "navi-bar");
      dom_helpers.setAttribute(this[_el_0], "focusList", "");
      dom_helpers.setAttribute(this[_el_0], "role", "tablist");
      this.addShimC(this[_el_0]);
      this[_FocusListDirective_0_5] = new focus_list$46template.FocusListDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(FocusListDirectiveL(), dart.wrapType(FocusListDirectiveL()), dart.fn(() => new focus_list.FocusListDirective.new(NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), "tablist"), VoidToFocusListDirectiveL())) : new focus_list.FocusListDirective.new(NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), "tablist"));
      this[_el_1] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_1], "tab-indicator");
      this.addShimC(this[_el_1]);
      let _anchor_2 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C0 || CT.C0);
      this[_NgFor_2_9] = new ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.tabLabels;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_NgFor_2_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_2_9].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_FocusableItem_0_0_isDirty])) {
          this[_FocusListDirective_0_5].instance.listItems = this[_appEl_2].mapNestedViews(FocusableItemL(), _ViewFixedMaterialTabStripComponent1L(), dart.fn(nestedView => JSArrayOfFocusableItemL().of([nestedView[_FocusItemDirective_0_5].instance]), _ViewFixedMaterialTabStripComponent1LToListLOfFocusableItemL()));
          this[_query_FocusableItem_0_0_isDirty] = false;
        }
      }
      this[_FocusListDirective_0_5].detectHostChanges(this, this[_el_0]);
      let currVal_0 = _ctx.tabIndicatorTransform;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_el_1].style[$setProperty]("transform", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_FocusListDirective_0_5].instance.ngOnDestroy();
    }
    initComponentStyles() {
      let styles = fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._componentStyles;
      if (styles == null) {
        fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._componentStyles = styles = fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(fixed_material_tab_strip$46template.styles$FixedMaterialTabStripComponent, fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new = function(parentView, parentIndex) {
    this[_query_FocusableItem_0_0_isDirty] = true;
    this[_FocusListDirective_0_5] = null;
    this[_appEl_2] = null;
    this[_NgFor_2_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-tab-strip"));
    this.updateChildClassNonHtml(this.rootEl, "themeable");
  }).prototype = fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.prototype;
  dart.addTypeTests(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0);
  dart.addTypeCaches(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0);
  dart.setLibraryUri(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, L0);
  dart.setFieldSignature(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, () => ({
    __proto__: dart.getFields(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.__proto__),
    [_query_FocusableItem_0_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_FocusListDirective_0_5]: dart.fieldType(dart.legacy(focus_list$46template.FocusListDirectiveNgCd)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_2_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_1]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  dart.defineLazy(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0, {
    /*fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(fixed_material_tab_strip$46template, "_compView_0");
  var _TabButtonComponent_0_6 = dart.privateName(fixed_material_tab_strip$46template, "_TabButtonComponent_0_6");
  var _expr_3 = dart.privateName(fixed_material_tab_strip$46template, "_expr_3");
  var _expr_4 = dart.privateName(fixed_material_tab_strip$46template, "_expr_4");
  var _handle_trigger_0_0 = dart.privateName(fixed_material_tab_strip$46template, "_handle_trigger_0_0");
  fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1 = class _ViewFixedMaterialTabStripComponent1 extends app_view.AppView$(dart.legacy(fixed_material_tab_strip.FixedMaterialTabStripComponent)) {
    build() {
      this[_compView_0] = new tab_button$46template.ViewTabButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "tab-button");
      dom_helpers.setAttribute(this[_el_0], "focusItem", "");
      dom_helpers.setAttribute(this[_el_0], "role", "tab");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_FocusItemDirective_0_5] = new focus_item$46template.FocusItemDirectiveNgCd.new(new focus_item.FocusItemDirective.new(HtmlElementL().as(this[_el_0]), "tab"));
      this[_TabButtonComponent_0_6] = new tab_button.TabButtonComponent.new(this[_el_0]);
      this[_compView_0].create0(this[_TabButtonComponent_0_6]);
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_FocusItemDirective_0_5].instance, 'keydown')));
      let subscription_0 = this[_TabButtonComponent_0_6].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(this, _handle_trigger_0_0)));
      this.init(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(FocusableItemL()) && 0 === nodeIndex) {
        return this[_FocusItemDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_idx = optimizations.unsafeCast(intL(), this.locals[$_get]("index"));
      let local_tabLabel = optimizations.unsafeCast(StringL(), this.locals[$_get]("$implicit"));
      changed = false;
      if (firstCheck) {
        this[_TabButtonComponent_0_6].role = "tab";
        changed = true;
      }
      let currVal_3 = local_tabLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_TabButtonComponent_0_6].label = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.activeTabIndex == local_idx;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_TabButtonComponent_0_6].isActive = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.tabId(local_idx);
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.setProperty(this[_el_0], "id", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.activeStr(local_idx);
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-selected", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_FocusItemDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewFixedMaterialTabStripComponent0L(), this.parentView)[_query_FocusableItem_0_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    [_handle_trigger_0_0]($36event) {
      let local_idx = optimizations.unsafeCast(intL(), this.locals[$_get]("index"));
      let _ctx = this.ctx;
      _ctx.switchTo(local_idx);
    }
  };
  (fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FocusItemDirective_0_5] = null;
    this[_TabButtonComponent_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_el_0] = null;
    fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.prototype;
  dart.addTypeTests(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1);
  dart.addTypeCaches(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1);
  dart.setMethodSignature(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1, () => ({
    __proto__: dart.getMethods(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1, L0);
  dart.setFieldSignature(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1, () => ({
    __proto__: dart.getFields(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(tab_button$46template.ViewTabButtonComponent0)),
    [_FocusItemDirective_0_5]: dart.fieldType(dart.legacy(focus_item$46template.FocusItemDirectiveNgCd)),
    [_TabButtonComponent_0_6]: dart.fieldType(dart.legacy(tab_button.TabButtonComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.legacy(core.String)),
    [_expr_4]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _FixedMaterialTabStripComponent_0_5 = dart.privateName(fixed_material_tab_strip$46template, "_FixedMaterialTabStripComponent_0_5");
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C1;
  fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0 = class _ViewFixedMaterialTabStripComponentHost0 extends app_view.AppView$(dart.legacy(fixed_material_tab_strip.FixedMaterialTabStripComponent)) {
    build() {
      this[_compView_0] = new fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_FixedMaterialTabStripComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(FixedMaterialTabStripComponentL(), dart.wrapType(FixedMaterialTabStripComponentL()), dart.fn(() => new fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this[_compView_0], boolL().as(this.injectorGetOptional(C1 || CT.C1, this.viewData.parentIndex))), VoidToFixedMaterialTabStripComponentL())) : new fixed_material_tab_strip.FixedMaterialTabStripComponent.new(this[_compView_0], boolL().as(this.injectorGetOptional(C1 || CT.C1, this.viewData.parentIndex)));
      this[_compView_0].create(this[_FixedMaterialTabStripComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfFixedMaterialTabStripComponentL()).new(0, this, this.rootEl, this[_FixedMaterialTabStripComponent_0_5]);
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
  };
  (fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FixedMaterialTabStripComponent_0_5] = null;
    fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.prototype;
  dart.addTypeTests(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0);
  dart.addTypeCaches(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0);
  dart.setLibraryUri(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0, L0);
  dart.setFieldSignature(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0, () => ({
    __proto__: dart.getFields(fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(fixed_material_tab_strip$46template.ViewFixedMaterialTabStripComponent0)),
    [_FixedMaterialTabStripComponent_0_5]: dart.fieldType(dart.legacy(fixed_material_tab_strip.FixedMaterialTabStripComponent))
  }));
  fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponent1 = function viewFactory_FixedMaterialTabStripComponent1(parentView, parentIndex) {
    return new fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponent1.new(parentView, parentIndex);
  };
  fixed_material_tab_strip$46template.viewFactory_FixedMaterialTabStripComponentHost0 = function viewFactory_FixedMaterialTabStripComponentHost0(parentView, parentIndex) {
    return new fixed_material_tab_strip$46template._ViewFixedMaterialTabStripComponentHost0.new(parentView, parentIndex);
  };
  fixed_material_tab_strip$46template.initReflector = function initReflector() {
    if (dart.test(fixed_material_tab_strip$46template._visited)) {
      return;
    }
    fixed_material_tab_strip$46template._visited = true;
    reflector.registerComponent(dart.wrapType(FixedMaterialTabStripComponentL()), fixed_material_tab_strip$46template.FixedMaterialTabStripComponentNgFactory);
    angular$46template.initReflector();
    rtl_annotation$46template.initReflector();
    focus_item$46template.initReflector();
    focus_list$46template.initReflector();
    tab_button$46template.initReflector();
    tab_change_event$46template.initReflector();
  };
  dart.copyProperties(fixed_material_tab_strip$46template, {
    get FixedMaterialTabStripComponentNgFactory() {
      return fixed_material_tab_strip$46template._FixedMaterialTabStripComponentNgFactory;
    }
  });
  var C3;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C4;
  dart.defineLazy(fixed_material_tab_strip$46template, {
    /*fixed_material_tab_strip$46template.styles$FixedMaterialTabStripComponent*/get styles$FixedMaterialTabStripComponent() {
      return [fixed_material_tab_strip$46scss$46css$46shim.styles];
    },
    /*fixed_material_tab_strip$46template._FixedMaterialTabStripComponentNgFactory*/get _FixedMaterialTabStripComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*fixed_material_tab_strip$46template.styles$FixedMaterialTabStripComponentHost*/get styles$FixedMaterialTabStripComponentHost() {
      return C4 || CT.C4;
    },
    /*fixed_material_tab_strip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_tab/fixed_material_tab_strip.template", {
    "package:angular_components/material_tab/fixed_material_tab_strip.template.dart": fixed_material_tab_strip$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fixed_material_tab_strip.template.dart"],"names":[],"mappings":"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","file":"fixed_material_tab_strip.template.ddc.js"}');
  // Exports:
  return {
    material_tab__fixed_material_tab_strip$46template: fixed_material_tab_strip$46template
  };
}));

//# sourceMappingURL=fixed_material_tab_strip.template.ddc.js.map
