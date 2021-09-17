define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_select/dropdown_button.template', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/material_menu/material_menu.template', 'packages/angular_components/material_menu/material_menu', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_menu/menu_popup_wrapper', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_menu/dropdown_menu', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_menu/menu_popup_wrapper.template', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/model/a11y/keyboard_handler_mixin.template', 'packages/angular_components/utils/disposer/disposer.template'], (function load__packages__angular_components__material_menu__dropdown_menu_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_select__dropdown_button$46template, packages__angular_components__material_select__dropdown_button, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__utils__angular__reference__reference, packages__angular_components__material_menu__material_menu$46template, packages__angular_components__material_menu__material_menu, packages__angular_components__focus__focus_interface, packages__angular_components__material_menu__menu_popup_wrapper, packages__angular_components__interfaces__has_disabled, packages__angular_components__material_menu__dropdown_menu, packages__angular__angular$46template, packages__angular_components__focus__focus$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__material_menu__menu_popup_wrapper$46template, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__mixins__focusable_mixin$46template, packages__angular_components__model__a11y__keyboard_handler_mixin$46template, packages__angular_components__utils__disposer__disposer$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const dropdown_button$46template = packages__angular_components__material_select__dropdown_button$46template.material_select__dropdown_button$46template;
  const dropdown_button = packages__angular_components__material_select__dropdown_button.material_select__dropdown_button;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const dom_popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__dom_popup_source;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const menu_popup$46template = packages__angular_components__material_menu__material_menu$46template.material_menu__menu_popup$46template;
  const menu_popup = packages__angular_components__material_menu__material_menu.material_menu__menu_popup;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const menu_popup_wrapper = packages__angular_components__material_menu__menu_popup_wrapper.material_menu__menu_popup_wrapper;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const dropdown_menu = packages__angular_components__material_menu__dropdown_menu.material_menu__dropdown_menu;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const menu_popup_wrapper$46template = packages__angular_components__material_menu__menu_popup_wrapper$46template.material_menu__menu_popup_wrapper$46template;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const focusable_mixin$46template = packages__angular_components__mixins__focusable_mixin$46template.mixins__focusable_mixin$46template;
  const keyboard_handler_mixin$46template = packages__angular_components__model__a11y__keyboard_handler_mixin$46template.model__a11y__keyboard_handler_mixin$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  var dropdown_menu$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var PopupSourceDirectiveL = () => (PopupSourceDirectiveL = dart.constFn(dart.legacy(popup_source_directive.PopupSourceDirective)))();
  var DomPopupSourceFactoryL = () => (DomPopupSourceFactoryL = dart.constFn(dart.legacy(dom_popup_source.DomPopupSourceFactory)))();
  var ReferenceDirectiveL = () => (ReferenceDirectiveL = dart.constFn(dart.legacy(reference.ReferenceDirective)))();
  var VoidToPopupSourceDirectiveL = () => (VoidToPopupSourceDirectiveL = dart.constFn(dart.fnType(PopupSourceDirectiveL(), [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var FocusableL = () => (FocusableL = dart.constFn(dart.legacy(focus_interface.Focusable)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var ExpandActionL = () => (ExpandActionL = dart.constFn(dart.legacy(menu_popup_wrapper.ExpandAction)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var DropdownMenuComponentL = () => (DropdownMenuComponentL = dart.constFn(dart.legacy(dropdown_menu.DropdownMenuComponent)))();
  var ComponentRefOfDropdownMenuComponentL = () => (ComponentRefOfDropdownMenuComponentL = dart.constFn(component_factory.ComponentRef$(DropdownMenuComponentL())))();
  var ComponentFactoryOfDropdownMenuComponentL = () => (ComponentFactoryOfDropdownMenuComponentL = dart.constFn(component_factory.ComponentFactory$(DropdownMenuComponentL())))();
  var AppViewOfDropdownMenuComponentL = () => (AppViewOfDropdownMenuComponentL = dart.constFn(app_view.AppView$(DropdownMenuComponentL())))();
  var AppViewLOfDropdownMenuComponentL = () => (AppViewLOfDropdownMenuComponentL = dart.constFn(dart.legacy(AppViewOfDropdownMenuComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfDropdownMenuComponentL = () => (AppViewLAndintLToAppViewLOfDropdownMenuComponentL = dart.constFn(dart.fnType(AppViewLOfDropdownMenuComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_menu/dropdown_menu.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], ObjectL());
    },
    get C1() {
      return C1 = dart.constList([], dart.dynamic);
    },
    get C3() {
      return C3 = dart.fn(dropdown_menu$46template.viewFactory_DropdownMenuComponentHost0, AppViewLAndintLToAppViewLOfDropdownMenuComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfDropdownMenuComponentL().prototype,
        [ComponentFactory__viewFactory]: C3 || CT.C3,
        [ComponentFactory_selector]: "dropdown-menu"
      });
    }
  }, false);
  var _compView_1 = dart.privateName(dropdown_menu$46template, "_compView_1");
  var _DropdownButtonComponent_1_5 = dart.privateName(dropdown_menu$46template, "_DropdownButtonComponent_1_5");
  var _PopupSourceDirective_1_7 = dart.privateName(dropdown_menu$46template, "_PopupSourceDirective_1_7");
  var _compView_5 = dart.privateName(dropdown_menu$46template, "_compView_5");
  var _MenuPopupComponent_5_5 = dart.privateName(dropdown_menu$46template, "_MenuPopupComponent_5_5");
  var _PopupSourceDirective_5_6 = dart.privateName(dropdown_menu$46template, "_PopupSourceDirective_5_6");
  var _expr_0 = dart.privateName(dropdown_menu$46template, "_expr_0");
  var _expr_1 = dart.privateName(dropdown_menu$46template, "_expr_1");
  var _expr_2 = dart.privateName(dropdown_menu$46template, "_expr_2");
  var _expr_3 = dart.privateName(dropdown_menu$46template, "_expr_3");
  var _expr_4 = dart.privateName(dropdown_menu$46template, "_expr_4");
  var _expr_5 = dart.privateName(dropdown_menu$46template, "_expr_5");
  var _expr_6 = dart.privateName(dropdown_menu$46template, "_expr_6");
  var _expr_7 = dart.privateName(dropdown_menu$46template, "_expr_7");
  var _expr_8 = dart.privateName(dropdown_menu$46template, "_expr_8");
  var _handle_expandActionChange_5_0 = dart.privateName(dropdown_menu$46template, "_handle_expandActionChange_5_0");
  var C0;
  dropdown_menu$46template.ViewDropdownMenuComponent0 = class ViewDropdownMenuComponent0 extends app_view.AppView$(dart.legacy(dropdown_menu.DropdownMenuComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/dropdown_menu.dart" : null;
    }
    build() {
      let t0, t0$;
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_compView_1] = new dropdown_button$46template.ViewDropdownButtonComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      parentRenderNode[$append](_el_1);
      dom_helpers.setAttribute(_el_1, "popupSource", "");
      this[_DropdownButtonComponent_1_5] = new dropdown_button.DropdownButtonComponent.new();
      this[_PopupSourceDirective_1_7] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), _el_1, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), this[_DropdownButtonComponent_1_5], null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), _el_1, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), this[_DropdownButtonComponent_1_5], null);
      let _text_2 = dom_helpers.createText("\n  ");
      let _text_3 = dom_helpers.createText("\n");
      this[_compView_1].create(this[_DropdownButtonComponent_1_5], JSArrayOfObjectL().of([(t0 = [_text_2], (() => {
          t0[$addAll](core.Iterable.as(this.projectedNodes[$_get](0)));
          t0[$addAll]([_text_3]);
          return t0;
        })())]));
      let _text_4 = dom_helpers.appendText(parentRenderNode, "\n");
      this[_compView_5] = new menu_popup$46template.ViewMenuPopupComponent0.new(this, 5);
      let _el_5 = this[_compView_5].rootEl;
      parentRenderNode[$append](_el_5);
      this[_MenuPopupComponent_5_5] = new menu_popup.MenuPopupComponent.new();
      this[_PopupSourceDirective_5_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(PopupSourceDirectiveL(), dart.wrapType(PopupSourceDirectiveL()), dart.fn(() => new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), _el_5, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.viewData.parentIndex)), null), VoidToPopupSourceDirectiveL())) : new popup_source_directive.PopupSourceDirective.new(DomPopupSourceFactoryL().as(this.parentView.injectorGet(dart.wrapType(DomPopupSourceFactoryL()), this.viewData.parentIndex)), _el_5, ReferenceDirectiveL().as(this.parentView.injectorGetOptional(dart.wrapType(ReferenceDirectiveL()), this.viewData.parentIndex)), FocusableL().as(this.parentView.injectorGetOptional(dart.wrapType(FocusableL()), this.viewData.parentIndex)), null);
      let _text_6 = dom_helpers.createText("\n  ");
      let _text_7 = dom_helpers.createText("\n");
      this[_compView_5].create(this[_MenuPopupComponent_5_5], JSArrayOfObjectL().of([(t0$ = [_text_6], (() => {
          t0$[$addAll](core.Iterable.as(this.projectedNodes[$_get](1)));
          t0$[$addAll]([_text_7]);
          return t0$;
        })())]));
      let _text_8 = dom_helpers.appendText(parentRenderNode, "\n");
      _el_1[$addEventListener]("keydown", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'onKeyDown')));
      let subscription_0 = this[_DropdownButtonComponent_1_5].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'handlePopupTriggerAction')));
      let subscription_1 = this[_MenuPopupComponent_5_5].expandActionChange.listen(this.eventHandler1(ExpandActionL(), ExpandActionL(), dart.bind(this, _handle_expandActionChange_5_0)));
      _ctx.dropdownButton = this[_DropdownButtonComponent_1_5];
      _ctx.menuPopup = this[_MenuPopupComponent_5_5];
      this.init(C0 || CT.C0, JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0, subscription_1]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(FocusableL()) || token === dart.wrapType(HasDisabledL())) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_DropdownButtonComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_toggle = this[_PopupSourceDirective_1_7];
      changed = false;
      let currVal_0 = _ctx.buttonText;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_DropdownButtonComponent_1_5].buttonText = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_DropdownButtonComponent_1_5].disabled = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.buttonAriaDescribedBy;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_DropdownButtonComponent_1_5].ariaDescribedBy = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.tabbable;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_DropdownButtonComponent_1_5].tabbable = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DropdownButtonComponent_1_5].ngOnInit();
      }
      changed = false;
      let currVal_4 = _ctx.menu;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MenuPopupComponent_5_5].menu = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.preferredPositions;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MenuPopupComponent_5_5].preferredPositions = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.expandAction;
      if (dart.test(app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MenuPopupComponent_5_5].expandAction = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.width;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_MenuPopupComponent_5_5].width = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = local_toggle;
      if (dart.test(app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MenuPopupComponent_5_5].popupSource = currVal_8;
        changed = true;
        this[_expr_8] = currVal_8;
      }
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      this[_compView_1].detectChanges();
      this[_compView_5].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_PopupSourceDirective_1_7].ngAfterViewInit();
          this[_PopupSourceDirective_5_6].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
      this[_compView_5].destroyInternalState();
      this[_PopupSourceDirective_1_7].ngOnDestroy();
      this[_PopupSourceDirective_5_6].ngOnDestroy();
    }
    [_handle_expandActionChange_5_0]($36event) {
      let _ctx = this.ctx;
      _ctx.expandAction = ExpandActionL().as($36event);
    }
    initComponentStyles() {
      let styles = dropdown_menu$46template.ViewDropdownMenuComponent0._componentStyles;
      if (styles == null) {
        dropdown_menu$46template.ViewDropdownMenuComponent0._componentStyles = styles = dropdown_menu$46template.ViewDropdownMenuComponent0._componentStyles = new style_encapsulation._UnscopedComponentStyles.new(dropdown_menu$46template.styles$DropdownMenuComponent, dropdown_menu$46template.ViewDropdownMenuComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (dropdown_menu$46template.ViewDropdownMenuComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_DropdownButtonComponent_1_5] = null;
    this[_PopupSourceDirective_1_7] = null;
    this[_compView_5] = null;
    this[_MenuPopupComponent_5_5] = null;
    this[_PopupSourceDirective_5_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    dropdown_menu$46template.ViewDropdownMenuComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("dropdown-menu"));
  }).prototype = dropdown_menu$46template.ViewDropdownMenuComponent0.prototype;
  dart.addTypeTests(dropdown_menu$46template.ViewDropdownMenuComponent0);
  dart.addTypeCaches(dropdown_menu$46template.ViewDropdownMenuComponent0);
  dart.setMethodSignature(dropdown_menu$46template.ViewDropdownMenuComponent0, () => ({
    __proto__: dart.getMethods(dropdown_menu$46template.ViewDropdownMenuComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic]),
    [_handle_expandActionChange_5_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(dropdown_menu$46template.ViewDropdownMenuComponent0, L0);
  dart.setFieldSignature(dropdown_menu$46template.ViewDropdownMenuComponent0, () => ({
    __proto__: dart.getFields(dropdown_menu$46template.ViewDropdownMenuComponent0.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(dropdown_button$46template.ViewDropdownButtonComponent0)),
    [_DropdownButtonComponent_1_5]: dart.fieldType(dart.legacy(dropdown_button.DropdownButtonComponent)),
    [_PopupSourceDirective_1_7]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
    [_compView_5]: dart.fieldType(dart.legacy(menu_popup$46template.ViewMenuPopupComponent0)),
    [_MenuPopupComponent_5_5]: dart.fieldType(dart.legacy(menu_popup.MenuPopupComponent)),
    [_PopupSourceDirective_5_6]: dart.fieldType(dart.legacy(popup_source_directive.PopupSourceDirective)),
    [_expr_0]: dart.fieldType(dart.legacy(core.String)),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.legacy(core.String)),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(dropdown_menu$46template.ViewDropdownMenuComponent0, {
    /*dropdown_menu$46template.ViewDropdownMenuComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(dropdown_menu$46template, "_compView_0");
  var _DropdownMenuComponent_0_5 = dart.privateName(dropdown_menu$46template, "_DropdownMenuComponent_0_5");
  dropdown_menu$46template._ViewDropdownMenuComponentHost0 = class _ViewDropdownMenuComponentHost0 extends app_view.AppView$(dart.legacy(dropdown_menu.DropdownMenuComponent)) {
    build() {
      this[_compView_0] = new dropdown_menu$46template.ViewDropdownMenuComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DropdownMenuComponent_0_5] = new dropdown_menu.DropdownMenuComponent.new(this[_compView_0]);
      this[_compView_0].create(this[_DropdownMenuComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfDropdownMenuComponentL()).new(0, this, this.rootEl, this[_DropdownMenuComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
        return this[_DropdownMenuComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_DropdownMenuComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_DropdownMenuComponent_0_5].ngOnDestroy();
    }
  };
  (dropdown_menu$46template._ViewDropdownMenuComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DropdownMenuComponent_0_5] = null;
    dropdown_menu$46template._ViewDropdownMenuComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = dropdown_menu$46template._ViewDropdownMenuComponentHost0.prototype;
  dart.addTypeTests(dropdown_menu$46template._ViewDropdownMenuComponentHost0);
  dart.addTypeCaches(dropdown_menu$46template._ViewDropdownMenuComponentHost0);
  dart.setMethodSignature(dropdown_menu$46template._ViewDropdownMenuComponentHost0, () => ({
    __proto__: dart.getMethods(dropdown_menu$46template._ViewDropdownMenuComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(dropdown_menu$46template._ViewDropdownMenuComponentHost0, L0);
  dart.setFieldSignature(dropdown_menu$46template._ViewDropdownMenuComponentHost0, () => ({
    __proto__: dart.getFields(dropdown_menu$46template._ViewDropdownMenuComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(dropdown_menu$46template.ViewDropdownMenuComponent0)),
    [_DropdownMenuComponent_0_5]: dart.fieldType(dart.legacy(dropdown_menu.DropdownMenuComponent))
  }));
  dropdown_menu$46template.viewFactory_DropdownMenuComponentHost0 = function viewFactory_DropdownMenuComponentHost0(parentView, parentIndex) {
    return new dropdown_menu$46template._ViewDropdownMenuComponentHost0.new(parentView, parentIndex);
  };
  dropdown_menu$46template.initReflector = function initReflector() {
    if (dart.test(dropdown_menu$46template._visited)) {
      return;
    }
    dropdown_menu$46template._visited = true;
    reflector.registerComponent(dart.wrapType(DropdownMenuComponentL()), dropdown_menu$46template.DropdownMenuComponentNgFactory);
    angular$46template.initReflector();
    focus$46template.initReflector();
    has_disabled$46template.initReflector();
    menu_popup$46template.initReflector();
    menu_popup_wrapper$46template.initReflector();
    material_popup$46template.initReflector();
    dropdown_button$46template.initReflector();
    focusable_mixin$46template.initReflector();
    keyboard_handler_mixin$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(dropdown_menu$46template, {
    get DropdownMenuComponentNgFactory() {
      return dropdown_menu$46template._DropdownMenuComponentNgFactory;
    }
  });
  var C1;
  var C3;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  dart.defineLazy(dropdown_menu$46template, {
    /*dropdown_menu$46template.styles$DropdownMenuComponent*/get styles$DropdownMenuComponent() {
      return C1 || CT.C1;
    },
    /*dropdown_menu$46template._DropdownMenuComponentNgFactory*/get _DropdownMenuComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*dropdown_menu$46template.styles$DropdownMenuComponentHost*/get styles$DropdownMenuComponentHost() {
      return C1 || CT.C1;
    },
    /*dropdown_menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_menu/dropdown_menu.template", {
    "package:angular_components/material_menu/dropdown_menu.template.dart": dropdown_menu$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dropdown_menu.template.dart"],"names":[],"mappings":"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","file":"dropdown_menu.template.ddc.js"}');
  // Exports:
  return {
    material_menu__dropdown_menu$46template: dropdown_menu$46template
  };
}));

//# sourceMappingURL=dropdown_menu.template.ddc.js.map
