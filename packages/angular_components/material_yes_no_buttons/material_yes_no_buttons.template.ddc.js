define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/runtime/queries', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons', 'packages/angular_components/material_spinner/material_spinner.template', 'packages/angular_components/material_spinner/material_spinner', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/focus/focus', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/src/runtime/interpolate', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.scss.css.shim'], (function load__packages__angular_components__material_yes_no_buttons__material_yes_no_buttons_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular__src__runtime__queries, packages__angular_components__material_button__material_button, packages__angular_components__material_yes_no_buttons__material_yes_no_buttons, packages__angular_components__material_spinner__material_spinner$46template, packages__angular_components__material_spinner__material_spinner, packages__angular__src__runtime__text_binding, packages__angular_components__material_button__material_button$46template, packages__angular_components__focus__focus, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__components__modal__modal, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__theme__dark_theme, packages__angular_components__button_decorator__button_decorator, packages__angular_components__interfaces__has_disabled, packages__angular__src__runtime__interpolate, packages__angular__angular$46template, packages__angular_components__focus__focus$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__material_yes_no_buttons__material_yes_no_buttons$46scss$46css$46shim) {
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
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const queries = packages__angular__src__runtime__queries.src__runtime__queries;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const material_yes_no_buttons = packages__angular_components__material_yes_no_buttons__material_yes_no_buttons.material_yes_no_buttons__material_yes_no_buttons;
  const material_spinner$46template = packages__angular_components__material_spinner__material_spinner$46template.material_spinner__material_spinner$46template;
  const material_spinner = packages__angular_components__material_spinner__material_spinner.material_spinner__material_spinner;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const material_button$46template = packages__angular_components__material_button__material_button$46template.material_button__material_button$46template;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const modal = packages__angular_components__laminate__components__modal__modal.laminate__components__modal__modal;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const material_yes_no_buttons$46scss$46css$46shim = packages__angular_components__material_yes_no_buttons__material_yes_no_buttons$46scss$46css$46shim.material_yes_no_buttons__material_yes_no_buttons$46scss$46css$46shim;
  var material_yes_no_buttons$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var MaterialButtonComponentL = () => (MaterialButtonComponentL = dart.constFn(dart.legacy(material_button.MaterialButtonComponent)))();
  var _ViewMaterialYesNoButtonsComponent2L = () => (_ViewMaterialYesNoButtonsComponent2L = dart.constFn(dart.legacy(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2)))();
  var JSArrayOfMaterialButtonComponentL = () => (JSArrayOfMaterialButtonComponentL = dart.constFn(_interceptors.JSArray$(MaterialButtonComponentL())))();
  var ListOfMaterialButtonComponentL = () => (ListOfMaterialButtonComponentL = dart.constFn(core.List$(MaterialButtonComponentL())))();
  var ListLOfMaterialButtonComponentL = () => (ListLOfMaterialButtonComponentL = dart.constFn(dart.legacy(ListOfMaterialButtonComponentL())))();
  var _ViewMaterialYesNoButtonsComponent2LToListLOfMaterialButtonComponentL = () => (_ViewMaterialYesNoButtonsComponent2LToListLOfMaterialButtonComponentL = dart.constFn(dart.fnType(ListLOfMaterialButtonComponentL(), [_ViewMaterialYesNoButtonsComponent2L()])))();
  var _ViewMaterialYesNoButtonsComponent3L = () => (_ViewMaterialYesNoButtonsComponent3L = dart.constFn(dart.legacy(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3)))();
  var _ViewMaterialYesNoButtonsComponent3LToListLOfMaterialButtonComponentL = () => (_ViewMaterialYesNoButtonsComponent3LToListLOfMaterialButtonComponentL = dart.constFn(dart.fnType(ListLOfMaterialButtonComponentL(), [_ViewMaterialYesNoButtonsComponent3L()])))();
  var AutoFocusDirectiveL = () => (AutoFocusDirectiveL = dart.constFn(dart.legacy(focus.AutoFocusDirective)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var ModalComponentL = () => (ModalComponentL = dart.constFn(dart.legacy(modal.ModalComponent)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var VoidToAutoFocusDirectiveL = () => (VoidToAutoFocusDirectiveL = dart.constFn(dart.fnType(AutoFocusDirectiveL(), [])))();
  var AcxDarkThemeL = () => (AcxDarkThemeL = dart.constFn(dart.legacy(dark_theme.AcxDarkTheme)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToAcxDarkThemeL = () => (VoidToAcxDarkThemeL = dart.constFn(dart.fnType(AcxDarkThemeL(), [])))();
  var TextL = () => (TextL = dart.constFn(dart.legacy(html.Text)))();
  var JSArrayOfTextL = () => (JSArrayOfTextL = dart.constFn(_interceptors.JSArray$(TextL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  var StreamSubscriptionLOfvoid = () => (StreamSubscriptionLOfvoid = dart.constFn(dart.legacy(StreamSubscriptionOfvoid())))();
  var JSArrayOfStreamSubscriptionLOfvoid = () => (JSArrayOfStreamSubscriptionLOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionLOfvoid())))();
  var ButtonDirectiveL = () => (ButtonDirectiveL = dart.constFn(dart.legacy(button_decorator.ButtonDirective)))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ViewMaterialYesNoButtonsComponent0L = () => (ViewMaterialYesNoButtonsComponent0L = dart.constFn(dart.legacy(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0)))();
  var MaterialYesNoButtonsComponentL = () => (MaterialYesNoButtonsComponentL = dart.constFn(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)))();
  var ComponentRefOfMaterialYesNoButtonsComponentL = () => (ComponentRefOfMaterialYesNoButtonsComponentL = dart.constFn(component_factory.ComponentRef$(MaterialYesNoButtonsComponentL())))();
  var ComponentFactoryOfMaterialYesNoButtonsComponentL = () => (ComponentFactoryOfMaterialYesNoButtonsComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialYesNoButtonsComponentL())))();
  var AppViewOfMaterialYesNoButtonsComponentL = () => (AppViewOfMaterialYesNoButtonsComponentL = dart.constFn(app_view.AppView$(MaterialYesNoButtonsComponentL())))();
  var AppViewLOfMaterialYesNoButtonsComponentL = () => (AppViewLOfMaterialYesNoButtonsComponentL = dart.constFn(dart.legacy(AppViewOfMaterialYesNoButtonsComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialYesNoButtonsComponentL = () => (AppViewLAndintLToAppViewLOfMaterialYesNoButtonsComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialYesNoButtonsComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C1() {
      return C1 = dart.fn(material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent2, AppViewLAndintLToAppViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent3, AppViewLAndintLToAppViewLOfvoid());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C5() {
      return C5 = dart.fn(material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponentHost0, AppViewLAndintLToAppViewLOfMaterialYesNoButtonsComponentL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ComponentFactoryOfMaterialYesNoButtonsComponentL().prototype,
        [ComponentFactory__viewFactory]: C5 || CT.C5,
        [ComponentFactory_selector]: "material-yes-no-buttons"
      });
    },
    get C6() {
      return C6 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _query_yesButton_1_0_isDirty = dart.privateName(material_yes_no_buttons$46template, "_query_yesButton_1_0_isDirty");
  var _query_noButton_1_1_isDirty = dart.privateName(material_yes_no_buttons$46template, "_query_noButton_1_1_isDirty");
  var _appEl_0 = dart.privateName(material_yes_no_buttons$46template, "_appEl_0");
  var _NgIf_0_9 = dart.privateName(material_yes_no_buttons$46template, "_NgIf_0_9");
  var _appEl_1 = dart.privateName(material_yes_no_buttons$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(material_yes_no_buttons$46template, "_NgIf_1_9");
  var _appEl_2 = dart.privateName(material_yes_no_buttons$46template, "_appEl_2");
  var _NgIf_2_9 = dart.privateName(material_yes_no_buttons$46template, "_NgIf_2_9");
  var C0;
  var C1;
  var C2;
  var _MaterialButtonComponent_0_7 = dart.privateName(material_yes_no_buttons$46template, "_MaterialButtonComponent_0_7");
  material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0 = class ViewMaterialYesNoButtonsComponent0 extends app_view.AppView$(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_yes_no_buttons/material_yes_no_buttons.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      let _anchor_1 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C1 || CT.C1);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_2] = new view_container.ViewContainer.new(2, null, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C2 || CT.C2);
      this[_NgIf_2_9] = new ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.pending;
      this[_NgIf_1_9].ngIf = !dart.test(_ctx.pending) && dart.test(_ctx.yesDisplayed);
      this[_NgIf_2_9].ngIf = !dart.test(_ctx.pending) && dart.test(_ctx.noDisplayed);
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_yesButton_1_0_isDirty])) {
          _ctx.yesButton = queries.firstOrNull(MaterialButtonComponentL(), this[_appEl_1].mapNestedViews(MaterialButtonComponentL(), _ViewMaterialYesNoButtonsComponent2L(), dart.fn(nestedView => JSArrayOfMaterialButtonComponentL().of([nestedView[_MaterialButtonComponent_0_7]]), _ViewMaterialYesNoButtonsComponent2LToListLOfMaterialButtonComponentL())));
          this[_query_yesButton_1_0_isDirty] = false;
        }
        if (dart.test(this[_query_noButton_1_1_isDirty])) {
          _ctx.noButton = queries.firstOrNull(MaterialButtonComponentL(), this[_appEl_2].mapNestedViews(MaterialButtonComponentL(), _ViewMaterialYesNoButtonsComponent3L(), dart.fn(nestedView => JSArrayOfMaterialButtonComponentL().of([nestedView[_MaterialButtonComponent_0_7]]), _ViewMaterialYesNoButtonsComponent3LToListLOfMaterialButtonComponentL())));
          this[_query_noButton_1_1_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_1].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._componentStyles;
      if (styles == null) {
        material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._componentStyles = styles = material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_yes_no_buttons$46template.styles$MaterialYesNoButtonsComponent, material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new = function(parentView, parentIndex) {
    this[_query_yesButton_1_0_isDirty] = true;
    this[_query_noButton_1_1_isDirty] = true;
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-yes-no-buttons"));
  }).prototype = material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.prototype;
  dart.addTypeTests(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0);
  dart.addTypeCaches(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0);
  dart.setLibraryUri(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0, L0);
  dart.setFieldSignature(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0, () => ({
    __proto__: dart.getFields(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.__proto__),
    [_query_yesButton_1_0_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_query_noButton_1_1_isDirty]: dart.fieldType(dart.legacy(core.bool)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_0_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf)),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_2_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  dart.defineLazy(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0, {
    /*material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_1 = dart.privateName(material_yes_no_buttons$46template, "_compView_1");
  var _MaterialSpinnerComponent_1_5 = dart.privateName(material_yes_no_buttons$46template, "_MaterialSpinnerComponent_1_5");
  material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1 = class _ViewMaterialYesNoButtonsComponent1 extends app_view.AppView$(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "btn spinner");
      this.addShimC(HtmlElementL().as(_el_0));
      this[_compView_1] = new material_spinner$46template.ViewMaterialSpinnerComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      _el_0[$append](_el_1);
      this.addShimC(_el_1);
      this[_MaterialSpinnerComponent_1_5] = new material_spinner.MaterialSpinnerComponent.new();
      this[_compView_1].create0(this[_MaterialSpinnerComponent_1_5]);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroyInternalState();
    }
  };
  (material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialSpinnerComponent_1_5] = null;
    material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.prototype;
  dart.addTypeTests(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1);
  dart.addTypeCaches(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1);
  dart.setLibraryUri(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1, L0);
  dart.setFieldSignature(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1, () => ({
    __proto__: dart.getFields(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.__proto__),
    [_compView_1]: dart.fieldType(dart.legacy(material_spinner$46template.ViewMaterialSpinnerComponent0)),
    [_MaterialSpinnerComponent_1_5]: dart.fieldType(dart.legacy(material_spinner.MaterialSpinnerComponent))
  }));
  var _textBinding_1 = dart.privateName(material_yes_no_buttons$46template, "_textBinding_1");
  var _compView_0 = dart.privateName(material_yes_no_buttons$46template, "_compView_0");
  var _AutoFocusDirective_0_5 = dart.privateName(material_yes_no_buttons$46template, "_AutoFocusDirective_0_5");
  var _AcxDarkTheme_0_6 = dart.privateName(material_yes_no_buttons$46template, "_AcxDarkTheme_0_6");
  var _expr_0 = dart.privateName(material_yes_no_buttons$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_yes_no_buttons$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_yes_no_buttons$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_yes_no_buttons$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_yes_no_buttons$46template, "_expr_4");
  var _el_0 = dart.privateName(material_yes_no_buttons$46template, "_el_0");
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C3;
  material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2 = class _ViewMaterialYesNoButtonsComponent2 extends app_view.AppView$(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "btn btn-yes");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_AutoFocusDirective_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoFocusDirectiveL(), dart.wrapType(AutoFocusDirectiveL()), dart.fn(() => new focus.AutoFocusDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), null, ModalComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.viewData.parentIndex)), PopupRefL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupRefL()), this.viewData.parentIndex))), VoidToAutoFocusDirectiveL())) : new focus.AutoFocusDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), null, ModalComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.viewData.parentIndex)), PopupRefL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupRefL()), this.viewData.parentIndex)));
      this[_AcxDarkTheme_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.injectorGetOptional(C3 || CT.C3, this.viewData.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.injectorGetOptional(C3 || CT.C3, this.viewData.parentIndex)));
      this[_MaterialButtonComponent_0_7] = new material_button.MaterialButtonComponent.new(HtmlElementL().as(this[_el_0]), AcxDarkThemeL().as(this[_AcxDarkTheme_0_6]), this[_compView_0], null);
      this[_compView_0].create(this[_MaterialButtonComponent_0_7], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_1].element])]));
      let subscription_0 = this[_MaterialButtonComponent_0_7].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'onYes')));
      this.init(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_0_6];
        }
        if (token === dart.wrapType(MaterialButtonComponentL()) || token === dart.wrapType(ButtonDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialButtonComponent_0_7];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let currVal_2 = _ctx.yesAutoFocus;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_AutoFocusDirective_0_5].autoFocus = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AutoFocusDirective_0_5].ngOnInit();
      }
      changed = false;
      let currVal_3 = dart.test(_ctx.yesDisabled) || dart.test(_ctx.disabled);
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialButtonComponent_0_7].disabled = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = dart.test(_ctx.yesRaised) || dart.test(_ctx.raised);
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialButtonComponent_0_7].raised = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.yesHighlighted;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBindingNonHtml(this[_el_0], "highlighted", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.yesAriaLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.yesText));
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMaterialYesNoButtonsComponent0L(), this.parentView)[_query_yesButton_1_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_AutoFocusDirective_0_5].ngOnDestroy();
    }
  };
  (material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_AutoFocusDirective_0_5] = null;
    this[_AcxDarkTheme_0_6] = null;
    this[_MaterialButtonComponent_0_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_el_0] = null;
    material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.prototype;
  dart.addTypeTests(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2);
  dart.addTypeCaches(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2);
  dart.setMethodSignature(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2, L0);
  dart.setFieldSignature(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2, () => ({
    __proto__: dart.getFields(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0]: dart.fieldType(dart.legacy(material_button$46template.ViewMaterialButtonComponent0)),
    [_AutoFocusDirective_0_5]: dart.fieldType(dart.legacy(focus.AutoFocusDirective)),
    [_AcxDarkTheme_0_6]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_7]: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3 = class _ViewMaterialYesNoButtonsComponent3 extends app_view.AppView$(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)) {
    build() {
      let _ctx = this.ctx;
      this[_compView_0] = new material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.updateChildClassNonHtml(this[_el_0], "btn btn-no");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_AutoFocusDirective_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AutoFocusDirectiveL(), dart.wrapType(AutoFocusDirectiveL()), dart.fn(() => new focus.AutoFocusDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), null, ModalComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.viewData.parentIndex)), PopupRefL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupRefL()), this.viewData.parentIndex))), VoidToAutoFocusDirectiveL())) : new focus.AutoFocusDirective.new(HtmlElementL().as(this[_el_0]), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), null, ModalComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(ModalComponentL()), this.viewData.parentIndex)), PopupRefL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupRefL()), this.viewData.parentIndex)));
      this[_AcxDarkTheme_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(AcxDarkThemeL(), dart.wrapType(AcxDarkThemeL()), dart.fn(() => new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.injectorGetOptional(C3 || CT.C3, this.viewData.parentIndex))), VoidToAcxDarkThemeL())) : new dark_theme.AcxDarkTheme.new(boolL().as(this.parentView.injectorGetOptional(C3 || CT.C3, this.viewData.parentIndex)));
      this[_MaterialButtonComponent_0_7] = new material_button.MaterialButtonComponent.new(HtmlElementL().as(this[_el_0]), AcxDarkThemeL().as(this[_AcxDarkTheme_0_6]), this[_compView_0], null);
      this[_compView_0].create(this[_MaterialButtonComponent_0_7], JSArrayOfObjectL().of([JSArrayOfTextL().of([this[_textBinding_1].element])]));
      let subscription_0 = this[_MaterialButtonComponent_0_7].trigger.listen(this.eventHandler1(UIEventL(), UIEventL(), dart.bind(_ctx, 'onNo')));
      this.init(JSArrayOfObjectL().of([this[_el_0]]), JSArrayOfStreamSubscriptionLOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 1) {
        if (token === dart.wrapType(AcxDarkThemeL())) {
          return this[_AcxDarkTheme_0_6];
        }
        if (token === dart.wrapType(MaterialButtonComponentL()) || token === dart.wrapType(ButtonDirectiveL()) || token === dart.wrapType(HasDisabledL())) {
          return this[_MaterialButtonComponent_0_7];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let currVal_1 = _ctx.noAutoFocus;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_AutoFocusDirective_0_5].autoFocus = currVal_1;
        this[_expr_1] = currVal_1;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AutoFocusDirective_0_5].ngOnInit();
      }
      changed = false;
      let currVal_2 = dart.test(_ctx.noDisabled) || dart.test(_ctx.disabled);
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialButtonComponent_0_7].disabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.raised;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialButtonComponent_0_7].raised = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      let currVal_0 = _ctx.noAriaLabel;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(this[_el_0], "aria-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_textBinding_1].updateText(interpolate.interpolateString0(_ctx.noText));
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      optimizations.unsafeCast(ViewMaterialYesNoButtonsComponent0L(), this.parentView)[_query_noButton_1_1_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_AutoFocusDirective_0_5].ngOnDestroy();
    }
  };
  (material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    this[_compView_0] = null;
    this[_AutoFocusDirective_0_5] = null;
    this[_AcxDarkTheme_0_6] = null;
    this[_MaterialButtonComponent_0_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_el_0] = null;
    material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.prototype;
  dart.addTypeTests(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3);
  dart.addTypeCaches(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3);
  dart.setMethodSignature(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3, L0);
  dart.setFieldSignature(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3, () => ({
    __proto__: dart.getFields(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding)),
    [_compView_0]: dart.fieldType(dart.legacy(material_button$46template.ViewMaterialButtonComponent0)),
    [_AutoFocusDirective_0_5]: dart.fieldType(dart.legacy(focus.AutoFocusDirective)),
    [_AcxDarkTheme_0_6]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_7]: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_2]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _MaterialYesNoButtonsComponent_0_5 = dart.privateName(material_yes_no_buttons$46template, "_MaterialYesNoButtonsComponent_0_5");
  material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0 = class _ViewMaterialYesNoButtonsComponentHost0 extends app_view.AppView$(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)) {
    build() {
      this[_compView_0] = new material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialYesNoButtonsComponent_0_5] = new material_yes_no_buttons.MaterialYesNoButtonsComponent.new();
      this[_compView_0].create(this[_MaterialYesNoButtonsComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialYesNoButtonsComponentL()).new(0, this, this.rootEl, this[_MaterialYesNoButtonsComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
        return this[_MaterialYesNoButtonsComponent_0_5];
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
  };
  (material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialYesNoButtonsComponent_0_5] = null;
    material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.prototype;
  dart.addTypeTests(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0);
  dart.addTypeCaches(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0);
  dart.setMethodSignature(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0, L0);
  dart.setFieldSignature(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0, () => ({
    __proto__: dart.getFields(material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_yes_no_buttons$46template.ViewMaterialYesNoButtonsComponent0)),
    [_MaterialYesNoButtonsComponent_0_5]: dart.fieldType(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent))
  }));
  material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent1 = function viewFactory_MaterialYesNoButtonsComponent1(parentView, parentIndex) {
    return new material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent1.new(parentView, parentIndex);
  };
  material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent2 = function viewFactory_MaterialYesNoButtonsComponent2(parentView, parentIndex) {
    return new material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent2.new(parentView, parentIndex);
  };
  material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponent3 = function viewFactory_MaterialYesNoButtonsComponent3(parentView, parentIndex) {
    return new material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponent3.new(parentView, parentIndex);
  };
  material_yes_no_buttons$46template.viewFactory_MaterialYesNoButtonsComponentHost0 = function viewFactory_MaterialYesNoButtonsComponentHost0(parentView, parentIndex) {
    return new material_yes_no_buttons$46template._ViewMaterialYesNoButtonsComponentHost0.new(parentView, parentIndex);
  };
  material_yes_no_buttons$46template.initReflector = function initReflector() {
    if (dart.test(material_yes_no_buttons$46template._visited)) {
      return;
    }
    material_yes_no_buttons$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialYesNoButtonsComponentL()), material_yes_no_buttons$46template.MaterialYesNoButtonsComponentNgFactory);
    angular$46template.initReflector();
    focus$46template.initReflector();
    has_disabled$46template.initReflector();
    material_button$46template.initReflector();
    material_spinner$46template.initReflector();
  };
  dart.copyProperties(material_yes_no_buttons$46template, {
    get MaterialYesNoButtonsComponentNgFactory() {
      return material_yes_no_buttons$46template._MaterialYesNoButtonsComponentNgFactory;
    }
  });
  var C5;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C4;
  var C6;
  dart.defineLazy(material_yes_no_buttons$46template, {
    /*material_yes_no_buttons$46template.styles$MaterialYesNoButtonsComponent*/get styles$MaterialYesNoButtonsComponent() {
      return [material_yes_no_buttons$46scss$46css$46shim.styles];
    },
    /*material_yes_no_buttons$46template._MaterialYesNoButtonsComponentNgFactory*/get _MaterialYesNoButtonsComponentNgFactory() {
      return C4 || CT.C4;
    },
    /*material_yes_no_buttons$46template.styles$MaterialYesNoButtonsComponentHost*/get styles$MaterialYesNoButtonsComponentHost() {
      return C6 || CT.C6;
    },
    /*material_yes_no_buttons$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_yes_no_buttons/material_yes_no_buttons.template", {
    "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.template.dart": material_yes_no_buttons$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_yes_no_buttons.template.dart"],"names":[],"mappings":"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","file":"material_yes_no_buttons.template.ddc.js"}');
  // Exports:
  return {
    material_yes_no_buttons__material_yes_no_buttons$46template: material_yes_no_buttons$46template
  };
}));

//# sourceMappingURL=material_yes_no_buttons.template.ddc.js.map
