define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/angular/id/id.template', 'packages/angular_components/utils/angular/id/id', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular/src/runtime/queries', 'packages/angular/src/runtime/interpolate', 'packages/angular_components/material_expansionpanel/material_expansionpanel', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.template', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/focus/focus', 'packages/angular_components/focus/focus_interface', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/model/action/async_action.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/browser/dom_service/dom_service.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/material_expansionpanel/material_expansionpanel.scss.css.shim'], (function load__packages__angular_components__material_expansionpanel__material_expansionpanel_template(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_yes_no_buttons__material_yes_no_buttons, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__button_decorator__button_decorator, packages__angular_components__focus__keyboard_only_focus_indicator, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__utils__angular__id__id$46template, packages__angular_components__utils__angular__id__id, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__content__deferred_content, packages__angular_components__content__deferred_content_aware, packages__angular__src__runtime__queries, packages__angular__src__runtime__interpolate, packages__angular_components__material_expansionpanel__material_expansionpanel, packages__angular_components__material_icon__material_icon$46template, packages__angular_components__material_icon__material_icon, packages__angular_components__material_yes_no_buttons__material_yes_no_buttons$46template, packages__angular_components__interfaces__has_disabled, packages__angular_components__focus__focus, packages__angular_components__focus__focus_interface, packages__angular__angular$46template, packages__angular_components__content__deferred_content$46template, packages__angular_components__content__deferred_content_aware$46template, packages__angular_components__focus__focus$46template, packages__angular_components__focus__keyboard_only_focus_indicator$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__model__action__async_action$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__utils__browser__dom_service__dom_service$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__material_expansionpanel__material_expansionpanel$46scss$46css$46shim) {
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
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const material_yes_no_buttons = packages__angular_components__material_yes_no_buttons__material_yes_no_buttons.material_yes_no_buttons__material_yes_no_buttons;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const keyboard_only_focus_indicator = packages__angular_components__focus__keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const id$46template = packages__angular_components__utils__angular__id__id$46template.utils__angular__id__id$46template;
  const id = packages__angular_components__utils__angular__id__id.utils__angular__id__id;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const deferred_content = packages__angular_components__content__deferred_content.content__deferred_content;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const queries = packages__angular__src__runtime__queries.src__runtime__queries;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const material_expansionpanel = packages__angular_components__material_expansionpanel__material_expansionpanel.material_expansionpanel__material_expansionpanel;
  const material_icon$46template = packages__angular_components__material_icon__material_icon$46template.material_icon__material_icon$46template;
  const material_icon = packages__angular_components__material_icon__material_icon.material_icon__material_icon;
  const material_yes_no_buttons$46template = packages__angular_components__material_yes_no_buttons__material_yes_no_buttons$46template.material_yes_no_buttons__material_yes_no_buttons$46template;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const keyboard_only_focus_indicator$46template = packages__angular_components__focus__keyboard_only_focus_indicator$46template.focus__keyboard_only_focus_indicator$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const async_action$46template = packages__angular_components__model__action__async_action$46template.model__action__async_action$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const dom_service$46template = packages__angular_components__utils__browser__dom_service__dom_service$46template.utils__browser__dom_service__dom_service$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const material_expansionpanel$46scss$46css$46shim = packages__angular_components__material_expansionpanel__material_expansionpanel$46scss$46css$46shim.material_expansionpanel__material_expansionpanel$46scss$46css$46shim;
  var material_expansionpanel$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var $toString = dartx.toString;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var KeyboardOnlyFocusIndicatorDirectiveL = () => (KeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var VoidToKeyboardOnlyFocusIndicatorDirectiveL = () => (VoidToKeyboardOnlyFocusIndicatorDirectiveL = dart.constFn(dart.fnType(KeyboardOnlyFocusIndicatorDirectiveL(), [])))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var AutoIdDirectiveL = () => (AutoIdDirectiveL = dart.constFn(dart.legacy(id.AutoIdDirective)))();
  var IdGeneratorL = () => (IdGeneratorL = dart.constFn(dart.legacy(id_generator.IdGenerator)))();
  var VoidToAutoIdDirectiveL = () => (VoidToAutoIdDirectiveL = dart.constFn(dart.fnType(AutoIdDirectiveL(), [])))();
  var DeferredContentDirectiveL = () => (DeferredContentDirectiveL = dart.constFn(dart.legacy(deferred_content.DeferredContentDirective)))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var VoidToDeferredContentDirectiveL = () => (VoidToDeferredContentDirectiveL = dart.constFn(dart.fnType(DeferredContentDirectiveL(), [])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var KeyUpBoundaryDirectiveL = () => (KeyUpBoundaryDirectiveL = dart.constFn(dart.legacy(material_yes_no_buttons.KeyUpBoundaryDirective)))();
  var _ViewMaterialExpansionPanel5L = () => (_ViewMaterialExpansionPanel5L = dart.constFn(dart.legacy(material_expansionpanel$46template._ViewMaterialExpansionPanel5)))();
  var JSArrayOfHtmlElementL = () => (JSArrayOfHtmlElementL = dart.constFn(_interceptors.JSArray$(HtmlElementL())))();
  var ListOfHtmlElementL = () => (ListOfHtmlElementL = dart.constFn(core.List$(HtmlElementL())))();
  var ListLOfHtmlElementL = () => (ListLOfHtmlElementL = dart.constFn(dart.legacy(ListOfHtmlElementL())))();
  var _ViewMaterialExpansionPanel5LToListLOfHtmlElementL = () => (_ViewMaterialExpansionPanel5LToListLOfHtmlElementL = dart.constFn(dart.fnType(ListLOfHtmlElementL(), [_ViewMaterialExpansionPanel5L()])))();
  var _ViewMaterialExpansionPanel4L = () => (_ViewMaterialExpansionPanel4L = dart.constFn(dart.legacy(material_expansionpanel$46template._ViewMaterialExpansionPanel4)))();
  var _ViewMaterialExpansionPanel4LToListLOfHtmlElementL = () => (_ViewMaterialExpansionPanel4LToListLOfHtmlElementL = dart.constFn(dart.fnType(ListLOfHtmlElementL(), [_ViewMaterialExpansionPanel4L()])))();
  var JSArrayOfButtonDirectiveL = () => (JSArrayOfButtonDirectiveL = dart.constFn(_interceptors.JSArray$(ButtonDirectiveL())))();
  var _ViewMaterialExpansionPanel6L = () => (_ViewMaterialExpansionPanel6L = dart.constFn(dart.legacy(material_expansionpanel$46template._ViewMaterialExpansionPanel6)))();
  var ListOfButtonDirectiveL = () => (ListOfButtonDirectiveL = dart.constFn(core.List$(ButtonDirectiveL())))();
  var ListLOfButtonDirectiveL = () => (ListLOfButtonDirectiveL = dart.constFn(dart.legacy(ListOfButtonDirectiveL())))();
  var _ViewMaterialExpansionPanel6LToListLOfButtonDirectiveL = () => (_ViewMaterialExpansionPanel6LToListLOfButtonDirectiveL = dart.constFn(dart.fnType(ListLOfButtonDirectiveL(), [_ViewMaterialExpansionPanel6L()])))();
  var _ViewMaterialExpansionPanel7L = () => (_ViewMaterialExpansionPanel7L = dart.constFn(dart.legacy(material_expansionpanel$46template._ViewMaterialExpansionPanel7)))();
  var _ViewMaterialExpansionPanel7LToListLOfButtonDirectiveL = () => (_ViewMaterialExpansionPanel7LToListLOfButtonDirectiveL = dart.constFn(dart.fnType(ListLOfButtonDirectiveL(), [_ViewMaterialExpansionPanel7L()])))();
  var JSArrayOfListLOfButtonDirectiveL = () => (JSArrayOfListLOfButtonDirectiveL = dart.constFn(_interceptors.JSArray$(ListLOfButtonDirectiveL())))();
  var _ViewMaterialExpansionPanel5LToListLOfButtonDirectiveL = () => (_ViewMaterialExpansionPanel5LToListLOfButtonDirectiveL = dart.constFn(dart.fnType(ListLOfButtonDirectiveL(), [_ViewMaterialExpansionPanel5L()])))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var DivElementL = () => (DivElementL = dart.constFn(dart.legacy(html.DivElement)))();
  var ViewMaterialExpansionPanel0L = () => (ViewMaterialExpansionPanel0L = dart.constFn(dart.legacy(material_expansionpanel$46template.ViewMaterialExpansionPanel0)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var EnterAcceptsDirectiveL = () => (EnterAcceptsDirectiveL = dart.constFn(dart.legacy(material_yes_no_buttons.EnterAcceptsDirective)))();
  var MaterialExpansionPanelL = () => (MaterialExpansionPanelL = dart.constFn(dart.legacy(material_expansionpanel.MaterialExpansionPanel)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var VoidToMaterialExpansionPanelL = () => (VoidToMaterialExpansionPanelL = dart.constFn(dart.fnType(MaterialExpansionPanelL(), [])))();
  var ComponentRefOfMaterialExpansionPanelL = () => (ComponentRefOfMaterialExpansionPanelL = dart.constFn(component_factory.ComponentRef$(MaterialExpansionPanelL())))();
  var FocusableItemL = () => (FocusableItemL = dart.constFn(dart.legacy(focus.FocusableItem)))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var ComponentFactoryOfMaterialExpansionPanelL = () => (ComponentFactoryOfMaterialExpansionPanelL = dart.constFn(component_factory.ComponentFactory$(MaterialExpansionPanelL())))();
  var AppViewOfMaterialExpansionPanelL = () => (AppViewOfMaterialExpansionPanelL = dart.constFn(app_view.AppView$(MaterialExpansionPanelL())))();
  var AppViewLOfMaterialExpansionPanelL = () => (AppViewLOfMaterialExpansionPanelL = dart.constFn(dart.legacy(AppViewOfMaterialExpansionPanelL())))();
  var AppViewLAndintLToAppViewLOfMaterialExpansionPanelL = () => (AppViewLAndintLToAppViewLOfMaterialExpansionPanelL = dart.constFn(dart.fnType(AppViewLOfMaterialExpansionPanelL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel2, AppViewLAndintLToAppViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel3, AppViewLAndintLToAppViewLOfvoid());
    },
    get C3() {
      return C3 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel4, AppViewLAndintLToAppViewLOfvoid());
    },
    get C4() {
      return C4 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel5, AppViewLAndintLToAppViewLOfvoid());
    },
    get C5() {
      return C5 = dart.constList([], ObjectL());
    },
    get C6() {
      return C6 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel6, AppViewLAndintLToAppViewLOfvoid());
    },
    get C7() {
      return C7 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel7, AppViewLAndintLToAppViewLOfvoid());
    },
    get C8() {
      return C8 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel8, AppViewLAndintLToAppViewLOfvoid());
    },
    get C9() {
      return C9 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanel9, AppViewLAndintLToAppViewLOfvoid());
    },
    get C11() {
      return C11 = dart.fn(material_expansionpanel$46template.viewFactory_MaterialExpansionPanelHost0, AppViewLAndintLToAppViewLOfMaterialExpansionPanelL());
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ComponentFactoryOfMaterialExpansionPanelL().prototype,
        [ComponentFactory__viewFactory]: C11 || CT.C11,
        [ComponentFactory_selector]: "material-expansionpanel"
      });
    },
    get C12() {
      return C12 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _query_action_1_4_isDirty = dart.privateName(material_expansionpanel$46template, "_query_action_1_4_isDirty");
  var _query_mainContent_1_2_isDirty = dart.privateName(material_expansionpanel$46template, "_query_mainContent_1_2_isDirty");
  var _query_contentWrapper_1_5_isDirty = dart.privateName(material_expansionpanel$46template, "_query_contentWrapper_1_5_isDirty");
  var _query_expandCollapseButton_1_6_isDirty = dart.privateName(material_expansionpanel$46template, "_query_expandCollapseButton_1_6_isDirty");
  var _textBinding_6 = dart.privateName(material_expansionpanel$46template, "_textBinding_6");
  var _KeyUpBoundaryDirective_0_5 = dart.privateName(material_expansionpanel$46template, "_KeyUpBoundaryDirective_0_5");
  var _ButtonDirective_2_5 = dart.privateName(material_expansionpanel$46template, "_ButtonDirective_2_5");
  var _KeyboardOnlyFocusIndicatorDirective_2_6 = dart.privateName(material_expansionpanel$46template, "_KeyboardOnlyFocusIndicatorDirective_2_6");
  var _appEl_3 = dart.privateName(material_expansionpanel$46template, "_appEl_3");
  var _NgIf_3_9 = dart.privateName(material_expansionpanel$46template, "_NgIf_3_9");
  var _appEl_7 = dart.privateName(material_expansionpanel$46template, "_appEl_7");
  var _NgIf_7_9 = dart.privateName(material_expansionpanel$46template, "_NgIf_7_9");
  var _AutoIdDirective_8_5 = dart.privateName(material_expansionpanel$46template, "_AutoIdDirective_8_5");
  var _appEl_9 = dart.privateName(material_expansionpanel$46template, "_appEl_9");
  var _NgIf_9_9 = dart.privateName(material_expansionpanel$46template, "_NgIf_9_9");
  var _appEl_10 = dart.privateName(material_expansionpanel$46template, "_appEl_10");
  var _NgIf_10_9 = dart.privateName(material_expansionpanel$46template, "_NgIf_10_9");
  var _AutoIdDirective_11_5 = dart.privateName(material_expansionpanel$46template, "_AutoIdDirective_11_5");
  var _appEl_12 = dart.privateName(material_expansionpanel$46template, "_appEl_12");
  var _DeferredContentDirective_12_9 = dart.privateName(material_expansionpanel$46template, "_DeferredContentDirective_12_9");
  var _expr_0 = dart.privateName(material_expansionpanel$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_expansionpanel$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_expansionpanel$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_expansionpanel$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_expansionpanel$46template, "_expr_4");
  var _expr_5 = dart.privateName(material_expansionpanel$46template, "_expr_5");
  var _expr_6 = dart.privateName(material_expansionpanel$46template, "_expr_6");
  var _expr_7 = dart.privateName(material_expansionpanel$46template, "_expr_7");
  var _expr_8 = dart.privateName(material_expansionpanel$46template, "_expr_8");
  var _expr_9 = dart.privateName(material_expansionpanel$46template, "_expr_9");
  var _expr_14 = dart.privateName(material_expansionpanel$46template, "_expr_14");
  var _el_0 = dart.privateName(material_expansionpanel$46template, "_el_0");
  var _el_1 = dart.privateName(material_expansionpanel$46template, "_el_1");
  var _el_2 = dart.privateName(material_expansionpanel$46template, "_el_2");
  var _el_8 = dart.privateName(material_expansionpanel$46template, "_el_8");
  var _el_11 = dart.privateName(material_expansionpanel$46template, "_el_11");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var _handle_click_2_1 = dart.privateName(material_expansionpanel$46template, "_handle_click_2_1");
  var C5;
  var _appEl_2 = dart.privateName(material_expansionpanel$46template, "_appEl_2");
  var _ButtonDirective_0_5 = dart.privateName(material_expansionpanel$46template, "_ButtonDirective_0_5");
  var _appEl_4 = dart.privateName(material_expansionpanel$46template, "_appEl_4");
  material_expansionpanel$46template.ViewMaterialExpansionPanel0 = class ViewMaterialExpansionPanel0 extends app_view.AppView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_expansionpanel/material_expansionpanel.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(this[_el_0], "panel themeable");
      dom_helpers.setAttribute(this[_el_0], "keyupBoundary", "");
      this.addShimC(this[_el_0]);
      this[_KeyUpBoundaryDirective_0_5] = new material_yes_no_buttons.KeyUpBoundaryDirective.new(this[_el_0]);
      this[_el_1] = dom_helpers.appendElement(doc, this[_el_0], "header");
      dom_helpers.setAttribute(this[_el_1], "role", "presentation");
      this.addShimE(this[_el_1]);
      this[_el_2] = dom_helpers.appendDiv(doc, this[_el_1]);
      dom_helpers.setAttribute(this[_el_2], "buttonDecorator", "");
      this.updateChildClass(this[_el_2], "header");
      dom_helpers.setAttribute(this[_el_2], "keyboardOnlyFocusIndicator", "");
      this.addShimC(this[_el_2]);
      this[_ButtonDirective_2_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_2], null));
      this[_KeyboardOnlyFocusIndicatorDirective_2_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_2], DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(this[_el_2], DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)));
      let _anchor_3 = dom_helpers.appendAnchor(this[_el_2]);
      this[_appEl_3] = new view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C0 || CT.C0);
      this[_NgIf_3_9] = new ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _el_4 = dom_helpers.appendDiv(doc, this[_el_2]);
      this.updateChildClass(_el_4, "panel-name");
      this.addShimC(_el_4);
      this.project(_el_4, 0);
      let _el_5 = dom_helpers.appendElement(doc, _el_4, "p");
      this.updateChildClass(HtmlElementL().as(_el_5), "primary-text");
      this.addShimE(_el_5);
      _el_5[$append](this[_textBinding_6].element);
      let _anchor_7 = dom_helpers.appendAnchor(_el_4);
      this[_appEl_7] = new view_container.ViewContainer.new(7, 4, this, _anchor_7);
      let _TemplateRef_7_8 = new template_ref.TemplateRef.new(this[_appEl_7], C1 || CT.C1);
      this[_NgIf_7_9] = new ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      this[_el_8] = dom_helpers.appendDiv(doc, this[_el_2]);
      dom_helpers.setAttribute(this[_el_8], "autoId", "");
      this.updateChildClass(this[_el_8], "panel-description");
      this.addShimC(this[_el_8]);
      this[_AutoIdDirective_8_5] = new id$46template.AutoIdDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoIdDirectiveL(), dart.wrapType(AutoIdDirectiveL()), dart.fn(() => new id.AutoIdDirective.new(IdGeneratorL().as(this.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.viewData.parentIndex)), null), VoidToAutoIdDirectiveL())) : new id.AutoIdDirective.new(IdGeneratorL().as(this.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.viewData.parentIndex)), null));
      this.project(this[_el_8], 1);
      let _anchor_9 = dom_helpers.appendAnchor(this[_el_2]);
      this[_appEl_9] = new view_container.ViewContainer.new(9, 2, this, _anchor_9);
      let _TemplateRef_9_8 = new template_ref.TemplateRef.new(this[_appEl_9], C2 || CT.C2);
      this[_NgIf_9_9] = new ng_if.NgIf.new(this[_appEl_9], _TemplateRef_9_8);
      let _anchor_10 = dom_helpers.appendAnchor(this[_el_1]);
      this[_appEl_10] = new view_container.ViewContainer.new(10, 1, this, _anchor_10);
      let _TemplateRef_10_8 = new template_ref.TemplateRef.new(this[_appEl_10], C3 || CT.C3);
      this[_NgIf_10_9] = new ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      this[_el_11] = dom_helpers.appendElement(doc, this[_el_0], "main");
      dom_helpers.setAttribute(this[_el_11], "autoId", "");
      dom_helpers.setAttribute(this[_el_11], "role", "presentation");
      this.addShimE(this[_el_11]);
      this[_AutoIdDirective_11_5] = new id$46template.AutoIdDirectiveNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoIdDirectiveL(), dart.wrapType(AutoIdDirectiveL()), dart.fn(() => new id.AutoIdDirective.new(IdGeneratorL().as(this.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.viewData.parentIndex)), null), VoidToAutoIdDirectiveL())) : new id.AutoIdDirective.new(IdGeneratorL().as(this.parentView.injectorGetOptional(dart.wrapType(IdGeneratorL()), this.viewData.parentIndex)), null));
      let _anchor_12 = dom_helpers.appendAnchor(this[_el_11]);
      this[_appEl_12] = new view_container.ViewContainer.new(12, 11, this, _anchor_12);
      let _TemplateRef_12_8 = new template_ref.TemplateRef.new(this[_appEl_12], C4 || CT.C4);
      this[_DeferredContentDirective_12_9] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(DeferredContentDirectiveL(), dart.wrapType(DeferredContentDirectiveL()), dart.fn(() => new deferred_content.DeferredContentDirective.new(this[_appEl_12], _TemplateRef_12_8, DeferredContentAwareL().as(this.parentView.injectorGet(dart.wrapType(DeferredContentAwareL()), this.viewData.parentIndex))), VoidToDeferredContentDirectiveL())) : new deferred_content.DeferredContentDirective.new(this[_appEl_12], _TemplateRef_12_8, DeferredContentAwareL().as(this.parentView.injectorGet(dart.wrapType(DeferredContentAwareL()), this.viewData.parentIndex)));
      this[_el_2][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_click_2_1)));
      this[_el_2][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_2_5].instance, 'handleKeyPress')));
      this[_el_2][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_2_6], 'keydown')));
      this[_el_2][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_2_6], 'resetOutline')));
      this[_el_2][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_2_6], 'onMouseInteraction')));
      this[_el_2][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_2_6], 'onFocus')));
      let subscription_0 = this[_ButtonDirective_2_5].instance.trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'handleHeaderClick')));
      _ctx.mainPanel = HtmlElementL().as(this[_el_11]);
      _ctx.headerPanel = HtmlElementL().as(this[_el_1]);
      _ctx.headerContent = this[_el_2];
      this.init(C5 || CT.C5, JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
      _rootEl[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'keydown')));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 12) {
        if (token === dart.wrapType(ButtonDirectiveL()) && 2 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 9) {
          return this[_ButtonDirective_2_5].instance;
        }
        if (token === dart.wrapType(KeyUpBoundaryDirectiveL())) {
          return this[_KeyUpBoundaryDirective_0_5];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t0, t0$, t0$0;
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_panelDescription = this[_AutoIdDirective_8_5].instance;
      let local_mainId = this[_AutoIdDirective_11_5].instance;
      let currVal_9 = dart.test(_ctx.disabled) || dart.test(_ctx.headerHidden);
      if (dart.test(app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_ButtonDirective_2_5].instance.disabled = currVal_9;
        this[_expr_9] = currVal_9;
      }
      this[_NgIf_3_9].ngIf = dart.test(_ctx.shouldShowExpandIcon) && dart.test(_ctx.shouldExpandOnLeft);
      this[_NgIf_7_9].ngIf = _ctx.secondaryText != null;
      this[_NgIf_9_9].ngIf = dart.test(_ctx.shouldShowExpandIcon) && !dart.test(_ctx.shouldExpandOnLeft);
      this[_NgIf_10_9].ngIf = !dart.test(_ctx.shouldShowExpandIcon) && !dart.test(_ctx.headerHidden);
      if (firstCheck) {
        this[_DeferredContentDirective_12_9].preserveDimensions = true;
        if (_ctx.forceContentWhenClosed != null) {
          this[_DeferredContentDirective_12_9].deferredContentForceContent = _ctx.forceContentWhenClosed;
        }
      }
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_9].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
      this[_appEl_12].detectChangesInNestedViews();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_mainContent_1_2_isDirty])) {
          _ctx.mainContent = queries.firstOrNull(HtmlElementL(), this[_appEl_12].mapNestedViews(HtmlElementL(), _ViewMaterialExpansionPanel5L(), dart.fn(nestedView => JSArrayOfHtmlElementL().of([nestedView[_el_0]]), _ViewMaterialExpansionPanel5LToListLOfHtmlElementL())));
          this[_query_mainContent_1_2_isDirty] = false;
        }
        if (dart.test(this[_query_action_1_4_isDirty])) {
          _ctx.actionContent = queries.firstOrNull(HtmlElementL(), this[_appEl_10].mapNestedViews(HtmlElementL(), _ViewMaterialExpansionPanel4L(), dart.fn(nestedView => JSArrayOfHtmlElementL().of([nestedView[_el_0]]), _ViewMaterialExpansionPanel4LToListLOfHtmlElementL())));
          this[_query_action_1_4_isDirty] = false;
        }
        if (dart.test(this[_query_contentWrapper_1_5_isDirty])) {
          _ctx.contentWrapper = queries.firstOrNull(HtmlElementL(), this[_appEl_12].mapNestedViews(HtmlElementL(), _ViewMaterialExpansionPanel5L(), dart.fn(nestedView => JSArrayOfHtmlElementL().of([nestedView[_el_1]]), _ViewMaterialExpansionPanel5LToListLOfHtmlElementL())));
          this[_query_contentWrapper_1_5_isDirty] = false;
        }
        if (dart.test(this[_query_expandCollapseButton_1_6_isDirty])) {
          _ctx.expandCollapse = queries.firstOrNull(ButtonDirectiveL(), queries.flattenNodes(ButtonDirectiveL(), JSArrayOfListLOfButtonDirectiveL().of([JSArrayOfButtonDirectiveL().of([this[_ButtonDirective_2_5].instance]), this[_appEl_12].mapNestedViews(ButtonDirectiveL(), _ViewMaterialExpansionPanel5L(), dart.fn(nestedView => queries.flattenNodes(ButtonDirectiveL(), JSArrayOfListLOfButtonDirectiveL().of([nestedView[_appEl_2].mapNestedViews(ButtonDirectiveL(), _ViewMaterialExpansionPanel6L(), dart.fn(nestedView => JSArrayOfButtonDirectiveL().of([nestedView[_ButtonDirective_0_5].instance]), _ViewMaterialExpansionPanel6LToListLOfButtonDirectiveL())), nestedView[_appEl_4].mapNestedViews(ButtonDirectiveL(), _ViewMaterialExpansionPanel7L(), dart.fn(nestedView => JSArrayOfButtonDirectiveL().of([nestedView[_ButtonDirective_0_5].instance]), _ViewMaterialExpansionPanel7LToListLOfButtonDirectiveL()))])), _ViewMaterialExpansionPanel5LToListLOfButtonDirectiveL()))])));
          this[_query_expandCollapseButton_1_6_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.isExpanded;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(this[_el_0], "open", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.anotherExpanded;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBinding(this[_el_0], "background", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.headerHidden;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_1]), "hidden", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = !dart.test(_ctx.isExpanded);
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        dom_helpers.updateClassBinding(this[_el_2], "closed", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.isExpanded;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        dom_helpers.updateAttribute(this[_el_2], "aria-expanded", (t0 = currVal_4, t0 == null ? null : dart.toString(t0)));
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.disableHeaderExpansion;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        dom_helpers.updateClassBinding(this[_el_2], "disable-header-expansion", currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.headerMsg;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        dom_helpers.updateAttribute(this[_el_2], "aria-label", currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = local_panelDescription.id;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        dom_helpers.updateAttribute(this[_el_2], "aria-describedby", (t0$ = currVal_7, t0$ == null ? null : dart.toString(t0$)));
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = local_mainId.id;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        dom_helpers.updateAttribute(this[_el_2], "aria-controls", (t0$0 = currVal_8, t0$0 == null ? null : dart.toString(t0$0)));
        this[_expr_8] = currVal_8;
      }
      this[_ButtonDirective_2_5].detectHostChanges(this, this[_el_2]);
      this[_textBinding_6].updateText(interpolate.interpolateString0(_ctx.name));
      this[_AutoIdDirective_8_5].detectHostChanges(this, this[_el_8]);
      let currVal_14 = !dart.test(_ctx.isExpanded);
      if (dart.test(app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        dom_helpers.updateClassBinding(HtmlElementL().as(this[_el_11]), "hidden", currVal_14);
        this[_expr_14] = currVal_14;
      }
      this[_AutoIdDirective_11_5].detectHostChanges(this, this[_el_11]);
    }
    destroyInternal() {
      this[_appEl_3].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_9].destroyNestedViews();
      this[_appEl_10].destroyNestedViews();
      this[_appEl_12].destroyNestedViews();
      this[_DeferredContentDirective_12_9].ngOnDestroy();
    }
    [_handle_click_2_1]($36event) {
      this[_ButtonDirective_2_5].instance.handleClick(MouseEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_2_6].onMouseInteraction();
    }
    initComponentStyles() {
      let styles = material_expansionpanel$46template.ViewMaterialExpansionPanel0._componentStyles;
      if (styles == null) {
        material_expansionpanel$46template.ViewMaterialExpansionPanel0._componentStyles = styles = material_expansionpanel$46template.ViewMaterialExpansionPanel0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_expansionpanel$46template.styles$MaterialExpansionPanel, material_expansionpanel$46template.ViewMaterialExpansionPanel0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_expansionpanel$46template.ViewMaterialExpansionPanel0.new = function(parentView, parentIndex) {
    this[_query_action_1_4_isDirty] = true;
    this[_query_mainContent_1_2_isDirty] = true;
    this[_query_contentWrapper_1_5_isDirty] = true;
    this[_query_expandCollapseButton_1_6_isDirty] = true;
    this[_textBinding_6] = new text_binding.TextBinding.new();
    this[_KeyUpBoundaryDirective_0_5] = null;
    this[_ButtonDirective_2_5] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_2_6] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_AutoIdDirective_8_5] = null;
    this[_appEl_9] = null;
    this[_NgIf_9_9] = null;
    this[_appEl_10] = null;
    this[_NgIf_10_9] = null;
    this[_AutoIdDirective_11_5] = null;
    this[_appEl_12] = null;
    this[_DeferredContentDirective_12_9] = null;
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
    this[_expr_14] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_el_8] = null;
    this[_el_11] = null;
    material_expansionpanel$46template.ViewMaterialExpansionPanel0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-expansionpanel"));
  }).prototype = material_expansionpanel$46template.ViewMaterialExpansionPanel0.prototype;
  dart.addTypeTests(material_expansionpanel$46template.ViewMaterialExpansionPanel0);
  dart.addTypeCaches(material_expansionpanel$46template.ViewMaterialExpansionPanel0);
  dart.setMethodSignature(material_expansionpanel$46template.ViewMaterialExpansionPanel0, () => ({
    __proto__: dart.getMethods(material_expansionpanel$46template.ViewMaterialExpansionPanel0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_click_2_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_expansionpanel$46template.ViewMaterialExpansionPanel0, L0);
  dart.setFieldSignature(material_expansionpanel$46template.ViewMaterialExpansionPanel0, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template.ViewMaterialExpansionPanel0.__proto__),
    [_query_action_1_4_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_query_mainContent_1_2_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_query_contentWrapper_1_5_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_query_expandCollapseButton_1_6_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_textBinding_6]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_KeyUpBoundaryDirective_0_5]: dart.fieldType(dart.legacy(material_yes_no_buttons.KeyUpBoundaryDirective)),
    [_ButtonDirective_2_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_KeyboardOnlyFocusIndicatorDirective_2_6]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
    [_appEl_3]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_3_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_7]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_7_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_AutoIdDirective_8_5]: dart.fieldType(dart.legacy(id$46template.AutoIdDirectiveNgCd)),
    [_appEl_9]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_9_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_10]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_10_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_AutoIdDirective_11_5]: dart.fieldType(dart.legacy(id$46template.AutoIdDirectiveNgCd)),
    [_appEl_12]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_DeferredContentDirective_12_9]: dart.fieldType(dart.legacy(deferred_content.DeferredContentDirective)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_14]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_1]: dart.fieldType(dart.legacy(html.Element)),
    [_el_2]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_8]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_11]: dart.fieldType(dart.legacy(html.Element))
  }));
  dart.defineLazy(material_expansionpanel$46template.ViewMaterialExpansionPanel0, {
    /*material_expansionpanel$46template.ViewMaterialExpansionPanel0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_expansionpanel$46template, "_compView_0");
  var _MaterialIconComponent_0_5 = dart.privateName(material_expansionpanel$46template, "_MaterialIconComponent_0_5");
  material_expansionpanel$46template._ViewMaterialExpansionPanel1 = class _ViewMaterialExpansionPanel1 extends app_view.AppView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "expand-button expand-on-left");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_0]));
      this[_compView_0].create0(this[_MaterialIconComponent_0_5]);
      this[_el_0][$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'handleExpandIconClick')));
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_1 = _ctx.expandIcon;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialIconComponent_0_5].icon = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.shouldFlipExpandIcon;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "expand-more", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    material_expansionpanel$46template._ViewMaterialExpansionPanel1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel1.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel1);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel1);
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel1, L0);
  dart.setFieldSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel1, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template._ViewMaterialExpansionPanel1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_0_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _textBinding_1 = dart.privateName(material_expansionpanel$46template, "_textBinding_1");
  material_expansionpanel$46template._ViewMaterialExpansionPanel2 = class _ViewMaterialExpansionPanel2 extends app_view.AppView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("p");
      this.updateChildClass(HtmlElementL().as(_el_0), "secondary-text");
      this.addShimE(_el_0);
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.secondaryText));
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel2.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_expansionpanel$46template._ViewMaterialExpansionPanel2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel2.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel2);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel2);
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel2, L0);
  dart.setFieldSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel2, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template._ViewMaterialExpansionPanel2.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  material_expansionpanel$46template._ViewMaterialExpansionPanel3 = class _ViewMaterialExpansionPanel3 extends app_view.AppView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "expand-button");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_MaterialIconComponent_0_5] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_0]));
      this[_compView_0].create0(this[_MaterialIconComponent_0_5]);
      this[_el_0][$addEventListener]("click", this.eventHandler0(EventL(), dart.bind(_ctx, 'handleExpandIconClick')));
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_1 = _ctx.expandIcon;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialIconComponent_0_5].icon = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.shouldFlipExpandIcon;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "expand-more", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel3.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_el_0] = null;
    material_expansionpanel$46template._ViewMaterialExpansionPanel3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel3.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel3);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel3);
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel3, L0);
  dart.setFieldSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel3, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template._ViewMaterialExpansionPanel3.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_MaterialIconComponent_0_5]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  material_expansionpanel$46template._ViewMaterialExpansionPanel4 = class _ViewMaterialExpansionPanel4 extends app_view.AppView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      this.updateChildClass(this[_el_0], "action");
      this.addShimC(this[_el_0]);
      this.project(this[_el_0], 2);
      this.init1(this[_el_0]);
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMaterialExpansionPanel0L(), this.parentView)[_query_action_1_4_isDirty] = true;
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    material_expansionpanel$46template._ViewMaterialExpansionPanel4.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel4.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel4);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel4);
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel4, L0);
  dart.setFieldSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel4, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template._ViewMaterialExpansionPanel4.__proto__),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _NgIf_2_9 = dart.privateName(material_expansionpanel$46template, "_NgIf_2_9");
  var _NgIf_4_9 = dart.privateName(material_expansionpanel$46template, "_NgIf_4_9");
  var _appEl_5 = dart.privateName(material_expansionpanel$46template, "_appEl_5");
  var _NgIf_5_9 = dart.privateName(material_expansionpanel$46template, "_NgIf_5_9");
  var _appEl_6 = dart.privateName(material_expansionpanel$46template, "_appEl_6");
  var _NgIf_6_9 = dart.privateName(material_expansionpanel$46template, "_NgIf_6_9");
  var C6;
  var C7;
  var C8;
  var C9;
  material_expansionpanel$46template._ViewMaterialExpansionPanel5 = class _ViewMaterialExpansionPanel5 extends app_view.AppView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let doc = html.document;
      this[_el_0] = DivElementL().as(doc[$createElement]("div"));
      this.addShimC(this[_el_0]);
      this[_el_1] = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(this[_el_1], "content-wrapper");
      this.addShimC(this[_el_1]);
      let _anchor_2 = dom_helpers.appendAnchor(this[_el_1]);
      this[_appEl_2] = new view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C6 || CT.C6);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _el_3 = dom_helpers.appendDiv(doc, this[_el_1]);
      this.updateChildClass(_el_3, "content");
      this.addShimC(_el_3);
      this.project(_el_3, 3);
      let _anchor_4 = dom_helpers.appendAnchor(this[_el_1]);
      this[_appEl_4] = new view_container.ViewContainer.new(4, 1, this, _anchor_4);
      let _TemplateRef_4_8 = new template_ref.TemplateRef.new(this[_appEl_4], C7 || CT.C7);
      this[_NgIf_4_9] = new ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let _anchor_5 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C8 || CT.C8);
      this[_NgIf_5_9] = new ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = dom_helpers.appendAnchor(this[_el_0]);
      this[_appEl_6] = new view_container.ViewContainer.new(6, 0, this, _anchor_6);
      let _TemplateRef_6_8 = new template_ref.TemplateRef.new(this[_appEl_6], C9 || CT.C9);
      this[_NgIf_6_9] = new ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_2_9].ngIf = dart.test(_ctx.shouldShowHiddenHeaderExpandIcon) && dart.test(_ctx.shouldExpandOnLeft);
      this[_NgIf_4_9].ngIf = dart.test(_ctx.shouldShowHiddenHeaderExpandIcon) && !dart.test(_ctx.shouldExpandOnLeft);
      this[_NgIf_5_9].ngIf = !dart.test(_ctx.showSaveCancel);
      this[_NgIf_6_9].ngIf = _ctx.showSaveCancel;
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
      let currVal_0 = _ctx.hideExpandedHeader;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBinding(this[_el_1], "hidden-header", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMaterialExpansionPanel0L(), this.parentView)[_query_mainContent_1_2_isDirty] = true;
      optimizations.unsafeCast(ViewMaterialExpansionPanel0L(), this.parentView)[_query_contentWrapper_1_5_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
      this[_appEl_5].destroyNestedViews();
      this[_appEl_6].destroyNestedViews();
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel5.new = function(parentView, parentIndex) {
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_4] = null;
    this[_NgIf_4_9] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    material_expansionpanel$46template._ViewMaterialExpansionPanel5.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel5.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel5);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel5);
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel5, L0);
  dart.setFieldSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel5, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template._ViewMaterialExpansionPanel5.__proto__),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_4]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_4_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_5]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_5_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_6]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_6_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.DivElement)),
    [_el_1]: dart.fieldType(dart.legacy(html.DivElement))
  }));
  var _MaterialIconComponent_0_6 = dart.privateName(material_expansionpanel$46template, "_MaterialIconComponent_0_6");
  var _KeyboardOnlyFocusIndicatorDirective_0_7 = dart.privateName(material_expansionpanel$46template, "_KeyboardOnlyFocusIndicatorDirective_0_7");
  var _handle_click_0_1 = dart.privateName(material_expansionpanel$46template, "_handle_click_0_1");
  material_expansionpanel$46template._ViewMaterialExpansionPanel6 = class _ViewMaterialExpansionPanel6 extends app_view.AppView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClassNonHtml(this[_el_0], "expand-button expand-on-left");
      dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_MaterialIconComponent_0_6] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_0]));
      this[_KeyboardOnlyFocusIndicatorDirective_0_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.viewData.parentIndex)));
      this[_compView_0].create0(this[_MaterialIconComponent_0_6]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_click_0_1)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'keydown')));
      this[_el_0][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'resetOutline')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'onMouseInteraction')));
      this[_el_0][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'onFocus')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'collapse')));
      this.init(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ButtonDirectiveL()) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t0, t0$;
      let _ctx = this.ctx;
      let changed = false;
      let local_mainId = optimizations.unsafeCast(ViewMaterialExpansionPanel0L(), this.parentView.parentView)[_AutoIdDirective_11_5].instance;
      changed = false;
      let currVal_3 = _ctx.expandIcon;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialIconComponent_0_6].icon = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.isExpanded;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-expanded", (t0 = currVal_0, t0 == null ? null : dart.toString(t0)));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = local_mainId.id;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-controls", (t0$ = currVal_1, t0$ == null ? null : dart.toString(t0$)));
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.closePanelMsg;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMaterialExpansionPanel0L(), this.parentView.parentView)[_query_expandCollapseButton_1_6_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    [_handle_click_0_1]($36event) {
      this[_ButtonDirective_0_5].instance.handleClick(MouseEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_7].onMouseInteraction();
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel6.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_el_0] = null;
    material_expansionpanel$46template._ViewMaterialExpansionPanel6.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel6.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel6);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel6);
  dart.setMethodSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel6, () => ({
    __proto__: dart.getMethods(material_expansionpanel$46template._ViewMaterialExpansionPanel6.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_click_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel6, L0);
  dart.setFieldSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel6, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template._ViewMaterialExpansionPanel6.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_MaterialIconComponent_0_6]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_KeyboardOnlyFocusIndicatorDirective_0_7]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  material_expansionpanel$46template._ViewMaterialExpansionPanel7 = class _ViewMaterialExpansionPanel7 extends app_view.AppView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      dom_helpers.setAttribute(this[_el_0], "buttonDecorator", "");
      this.updateChildClassNonHtml(this[_el_0], "expand-button");
      dom_helpers.setAttribute(this[_el_0], "keyboardOnlyFocusIndicator", "");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_ButtonDirective_0_5] = new button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator.ButtonDirective.new(this[_el_0], null));
      this[_MaterialIconComponent_0_6] = new material_icon.MaterialIconComponent.new(HtmlElementL().as(this[_el_0]));
      this[_KeyboardOnlyFocusIndicatorDirective_0_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(KeyboardOnlyFocusIndicatorDirectiveL(), dart.wrapType(KeyboardOnlyFocusIndicatorDirectiveL()), dart.fn(() => new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirectiveL())) : new keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.parentView.parentView.injectorGet(dart.wrapType(DomServiceL()), this.parentView.parentView.viewData.parentIndex)));
      this[_compView_0].create0(this[_MaterialIconComponent_0_6]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(EventL(), EventL(), dart.bind(this, _handle_click_0_1)));
      this[_el_0][$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      this[_el_0][$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'keydown')));
      this[_el_0][$addEventListener]("blur", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'resetOutline')));
      this[_el_0][$addEventListener]("mousedown", this.eventHandler0(EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'onMouseInteraction')));
      this[_el_0][$addEventListener]("focus", this.eventHandler1(EventL(), EventL(), dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_0_7], 'onFocus')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'collapse')));
      this.init(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(ButtonDirectiveL()) && 0 === nodeIndex) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let t0;
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_2 = _ctx.expandIcon;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialIconComponent_0_6].icon = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.isExpanded;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-expanded", (t0 = currVal_0, t0 == null ? null : dart.toString(t0)));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.closePanelMsg;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this[_compView_0], this[_el_0]);
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMaterialExpansionPanel0L(), this.parentView.parentView)[_query_expandCollapseButton_1_6_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
    [_handle_click_0_1]($36event) {
      this[_ButtonDirective_0_5].instance.handleClick(MouseEventL().as($36event));
      this[_KeyboardOnlyFocusIndicatorDirective_0_7].onMouseInteraction();
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel7.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ButtonDirective_0_5] = null;
    this[_MaterialIconComponent_0_6] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_0_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_0] = null;
    material_expansionpanel$46template._ViewMaterialExpansionPanel7.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel7.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel7);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel7);
  dart.setMethodSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel7, () => ({
    __proto__: dart.getMethods(material_expansionpanel$46template._ViewMaterialExpansionPanel7.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_click_0_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel7, L0);
  dart.setFieldSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel7, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template._ViewMaterialExpansionPanel7.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_icon$46template.ViewMaterialIconComponent0)),
    [_ButtonDirective_0_5]: dart.fieldType(dart.legacy(button_decorator$46template.ButtonDirectiveNgCd)),
    [_MaterialIconComponent_0_6]: dart.fieldType(dart.legacy(material_icon.MaterialIconComponent)),
    [_KeyboardOnlyFocusIndicatorDirective_0_7]: dart.fieldType(dart.legacy(keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  material_expansionpanel$46template._ViewMaterialExpansionPanel8 = class _ViewMaterialExpansionPanel8 extends app_view.AppView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "toolbelt");
      this.addShimC(HtmlElementL().as(_el_0));
      this.project(_el_0, 4);
      this.init1(_el_0);
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel8.new = function(parentView, parentIndex) {
    material_expansionpanel$46template._ViewMaterialExpansionPanel8.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel8.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel8);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel8);
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel8, L0);
  var _MaterialYesNoButtonsComponent_0_5 = dart.privateName(material_expansionpanel$46template, "_MaterialYesNoButtonsComponent_0_5");
  var _EnterAcceptsDirective_0_6 = dart.privateName(material_expansionpanel$46template, "_EnterAcceptsDirective_0_6");
  material_expansionpanel$46template._ViewMaterialExpansionPanel9 = class _ViewMaterialExpansionPanel9 extends app_view.AppView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(_el_0, "action-buttons");
      dom_helpers.setAttribute(_el_0, "reverse", "");
      this.addShimC(_el_0);
      this[_MaterialYesNoButtonsComponent_0_5] = new material_yes_no_buttons.MaterialYesNoButtonsComponent.new();
      this[_EnterAcceptsDirective_0_6] = new material_yes_no_buttons.EnterAcceptsDirective.new(this[_MaterialYesNoButtonsComponent_0_5], _el_0, optimizations.unsafeCast(ViewMaterialExpansionPanel0L(), this.parentView.parentView)[_KeyUpBoundaryDirective_0_5]);
      this[_compView_0].create0(this[_MaterialYesNoButtonsComponent_0_5]);
      let subscription_0 = this[_MaterialYesNoButtonsComponent_0_5].yes.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'doSave')));
      let subscription_1 = this[_MaterialYesNoButtonsComponent_0_5].no.listen(this.eventHandler0(UIEventL(), dart.bind(_ctx, 'doCancel')));
      this.init(JSArrayOfObjectL().of([_el_0]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialYesNoButtonsComponent_0_5];
        }
        if (token === dart.wrapType(EnterAcceptsDirectiveL())) {
          return this[_EnterAcceptsDirective_0_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.saveText;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialYesNoButtonsComponent_0_5].yesText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.cancelText;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialYesNoButtonsComponent_0_5].noText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.saveDisabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialYesNoButtonsComponent_0_5].yesDisabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.cancelDisplayed;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialYesNoButtonsComponent_0_5].noDisplayed = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.activeSaveCancelAction;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialYesNoButtonsComponent_0_5].pending = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_5 = _ctx.enterAccepts;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_EnterAcceptsDirective_0_6].enterAccepts = currVal_5;
        this[_expr_5] = currVal_5;
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_EnterAcceptsDirective_0_6].ngOnDestroy();
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanel9.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialYesNoButtonsComponent_0_5] = null;
    this[_EnterAcceptsDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_expansionpanel$46template._ViewMaterialExpansionPanel9.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanel9.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanel9);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanel9);
  dart.setMethodSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel9, () => ({
    __proto__: dart.getMethods(material_expansionpanel$46template._ViewMaterialExpansionPanel9.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanel9, L0);
  dart.setFieldSignature(material_expansionpanel$46template._ViewMaterialExpansionPanel9, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template._ViewMaterialExpansionPanel9.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0)),
    [_MaterialYesNoButtonsComponent_0_5]: dart.fieldType(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)),
    [_EnterAcceptsDirective_0_6]: dart.fieldType(dart.legacy(material_yes_no_buttons.EnterAcceptsDirective)),
    [_expr_0]: dart.fieldType(dart.legacy(core.String)),
    [_expr_1]: dart.fieldType(dart.legacy(core.String)),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_5]: dart.fieldType(dart.legacy(core.bool))
  }));
  var _MaterialExpansionPanel_0_5 = dart.privateName(material_expansionpanel$46template, "_MaterialExpansionPanel_0_5");
  material_expansionpanel$46template._ViewMaterialExpansionPanelHost0 = class _ViewMaterialExpansionPanelHost0 extends app_view.AppView$(dart.legacy(material_expansionpanel.MaterialExpansionPanel)) {
    build() {
      this[_compView_0] = new material_expansionpanel$46template.ViewMaterialExpansionPanel0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialExpansionPanel_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialExpansionPanelL(), dart.wrapType(MaterialExpansionPanelL()), dart.fn(() => new material_expansionpanel.MaterialExpansionPanel.new(NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), this[_compView_0], DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), null, null), VoidToMaterialExpansionPanelL())) : new material_expansionpanel.MaterialExpansionPanel.new(NgZoneL().as(this.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), this[_compView_0], DomServiceL().as(this.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), null, null);
      this[_compView_0].create(this[_MaterialExpansionPanel_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialExpansionPanelL()).new(0, this, this.rootEl, this[_MaterialExpansionPanel_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(MaterialExpansionPanelL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(HasDisabledL()) || token === dart.wrapType(FocusableItemL()) || token === dart.wrapType(FocusableL())) && 0 === nodeIndex) {
        return this[_MaterialExpansionPanel_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialExpansionPanel_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialExpansionPanel_0_5].ngOnDestroy();
    }
  };
  (material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialExpansionPanel_0_5] = null;
    material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.prototype;
  dart.addTypeTests(material_expansionpanel$46template._ViewMaterialExpansionPanelHost0);
  dart.addTypeCaches(material_expansionpanel$46template._ViewMaterialExpansionPanelHost0);
  dart.setMethodSignature(material_expansionpanel$46template._ViewMaterialExpansionPanelHost0, () => ({
    __proto__: dart.getMethods(material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_expansionpanel$46template._ViewMaterialExpansionPanelHost0, L0);
  dart.setFieldSignature(material_expansionpanel$46template._ViewMaterialExpansionPanelHost0, () => ({
    __proto__: dart.getFields(material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_expansionpanel$46template.ViewMaterialExpansionPanel0)),
    [_MaterialExpansionPanel_0_5]: dart.fieldType(dart.legacy(material_expansionpanel.MaterialExpansionPanel))
  }));
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel1 = function viewFactory_MaterialExpansionPanel1(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel1.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel2 = function viewFactory_MaterialExpansionPanel2(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel2.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel3 = function viewFactory_MaterialExpansionPanel3(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel3.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel4 = function viewFactory_MaterialExpansionPanel4(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel4.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel5 = function viewFactory_MaterialExpansionPanel5(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel5.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel6 = function viewFactory_MaterialExpansionPanel6(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel6.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel7 = function viewFactory_MaterialExpansionPanel7(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel7.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel8 = function viewFactory_MaterialExpansionPanel8(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel8.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanel9 = function viewFactory_MaterialExpansionPanel9(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanel9.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.viewFactory_MaterialExpansionPanelHost0 = function viewFactory_MaterialExpansionPanelHost0(parentView, parentIndex) {
    return new material_expansionpanel$46template._ViewMaterialExpansionPanelHost0.new(parentView, parentIndex);
  };
  material_expansionpanel$46template.initReflector = function initReflector() {
    if (dart.test(material_expansionpanel$46template._visited)) {
      return;
    }
    material_expansionpanel$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialExpansionPanelL()), material_expansionpanel$46template.MaterialExpansionPanelNgFactory);
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    deferred_content$46template.initReflector();
    deferred_content_aware$46template.initReflector();
    focus$46template.initReflector();
    keyboard_only_focus_indicator$46template.initReflector();
    has_disabled$46template.initReflector();
    material_icon$46template.initReflector();
    material_yes_no_buttons$46template.initReflector();
    async_action$46template.initReflector();
    observable$46template.initReflector();
    id$46template.initReflector();
    dom_service$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(material_expansionpanel$46template, {
    get MaterialExpansionPanelNgFactory() {
      return material_expansionpanel$46template._MaterialExpansionPanelNgFactory;
    }
  });
  var C11;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C10;
  var C12;
  dart.defineLazy(material_expansionpanel$46template, {
    /*material_expansionpanel$46template.styles$MaterialExpansionPanel*/get styles$MaterialExpansionPanel() {
      return [material_expansionpanel$46scss$46css$46shim.styles];
    },
    /*material_expansionpanel$46template._MaterialExpansionPanelNgFactory*/get _MaterialExpansionPanelNgFactory() {
      return C10 || CT.C10;
    },
    /*material_expansionpanel$46template.styles$MaterialExpansionPanelHost*/get styles$MaterialExpansionPanelHost() {
      return C12 || CT.C12;
    },
    /*material_expansionpanel$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_expansionpanel/material_expansionpanel.template", {
    "package:angular_components/material_expansionpanel/material_expansionpanel.template.dart": material_expansionpanel$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_expansionpanel.template.dart"],"names":[],"mappings":"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","file":"material_expansionpanel.template.ddc.js"}');
  // Exports:
  return {
    material_expansionpanel__material_expansionpanel$46template: material_expansionpanel$46template
  };
}));

//# sourceMappingURL=material_expansionpanel.template.ddc.js.map
