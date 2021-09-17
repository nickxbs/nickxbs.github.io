define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_menu/menu_item_affix_list', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular/meta.template', 'packages/angular_components/dynamic_component/dynamic_component.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_menu/affix/base_affix.template', 'packages/angular_components/model/menu/menu_item_affix.template', 'packages/angular_components/material_menu/menu_item_affix_list.scss.css.shim'], (function load__packages__angular_components__material_menu__menu_item_affix_list_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_menu__menu_item_affix_list, packages__angular_components__interfaces__has_disabled, packages__angular__angular$46template, packages__angular__meta$46template, packages__angular_components__dynamic_component__dynamic_component$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__material_menu__affix__base_affix$46template, packages__angular_components__model__menu__menu_item_affix$46template, packages__angular_components__material_menu__menu_item_affix_list$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const menu_item_affix_list = packages__angular_components__material_menu__menu_item_affix_list.material_menu__menu_item_affix_list;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const dynamic_component$46template = packages__angular_components__dynamic_component__dynamic_component$46template.dynamic_component__dynamic_component$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const base_affix$46template = packages__angular_components__material_menu__affix__base_affix$46template.material_menu__affix__base_affix$46template;
  const menu_item_affix$46template = packages__angular_components__model__menu__menu_item_affix$46template.model__menu__menu_item_affix$46template;
  const menu_item_affix_list$46scss$46css$46shim = packages__angular_components__material_menu__menu_item_affix_list$46scss$46css$46shim.material_menu__menu_item_affix_list$46scss$46css$46shim;
  var menu_item_affix_list$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var MenuItemAffixListComponentL = () => (MenuItemAffixListComponentL = dart.constFn(dart.legacy(menu_item_affix_list.MenuItemAffixListComponent)))();
  var ComponentRefOfMenuItemAffixListComponentL = () => (ComponentRefOfMenuItemAffixListComponentL = dart.constFn(component_factory.ComponentRef$(MenuItemAffixListComponentL())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ComponentFactoryOfMenuItemAffixListComponentL = () => (ComponentFactoryOfMenuItemAffixListComponentL = dart.constFn(component_factory.ComponentFactory$(MenuItemAffixListComponentL())))();
  var AppViewOfMenuItemAffixListComponentL = () => (AppViewOfMenuItemAffixListComponentL = dart.constFn(app_view.AppView$(MenuItemAffixListComponentL())))();
  var AppViewLOfMenuItemAffixListComponentL = () => (AppViewLOfMenuItemAffixListComponentL = dart.constFn(dart.legacy(AppViewOfMenuItemAffixListComponentL())))();
  var AppViewLAndintLToAppViewLOfMenuItemAffixListComponentL = () => (AppViewLAndintLToAppViewLOfMenuItemAffixListComponentL = dart.constFn(dart.fnType(AppViewLOfMenuItemAffixListComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_menu/menu_item_affix_list.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C2() {
      return C2 = dart.fn(menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponentHost0, AppViewLAndintLToAppViewLOfMenuItemAffixListComponentL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfMenuItemAffixListComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "menu-item-affix-list"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _appEl_0 = dart.privateName(menu_item_affix_list$46template, "_appEl_0");
  var _TemplateRef_0_8 = dart.privateName(menu_item_affix_list$46template, "_TemplateRef_0_8");
  var C0;
  menu_item_affix_list$46template.ViewMenuItemAffixListComponent0 = class ViewMenuItemAffixListComponent0 extends app_view.AppView$(dart.legacy(menu_item_affix_list.MenuItemAffixListComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/menu_item_affix_list.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      this[_TemplateRef_0_8] = new template_ref.TemplateRef.new(this[_appEl_0], C0 || CT.C0);
      _ctx.viewRef = this[_appEl_0];
      this.init0();
    }
    detectChangesInternal() {
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._componentStyles;
      if (styles == null) {
        menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._componentStyles = styles = menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(menu_item_affix_list$46template.styles$MenuItemAffixListComponent, menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_TemplateRef_0_8] = null;
    menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("menu-item-affix-list"));
  }).prototype = menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.prototype;
  dart.addTypeTests(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0);
  dart.addTypeCaches(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0);
  dart.setLibraryUri(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0, L0);
  dart.setFieldSignature(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0, () => ({
    __proto__: dart.getFields(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.__proto__),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_TemplateRef_0_8]: dart.fieldType(dart.legacy(template_ref.TemplateRef))
  }));
  dart.defineLazy(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0, {
    /*menu_item_affix_list$46template.ViewMenuItemAffixListComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  menu_item_affix_list$46template._ViewMenuItemAffixListComponent1 = class _ViewMenuItemAffixListComponent1 extends app_view.AppView$(dart.legacy(menu_item_affix_list.MenuItemAffixListComponent)) {
    build() {
      this.init0();
    }
  };
  (menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.new = function(parentView, parentIndex) {
    menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.prototype;
  dart.addTypeTests(menu_item_affix_list$46template._ViewMenuItemAffixListComponent1);
  dart.addTypeCaches(menu_item_affix_list$46template._ViewMenuItemAffixListComponent1);
  dart.setLibraryUri(menu_item_affix_list$46template._ViewMenuItemAffixListComponent1, L0);
  var _compView_0 = dart.privateName(menu_item_affix_list$46template, "_compView_0");
  var _MenuItemAffixListComponent_0_5 = dart.privateName(menu_item_affix_list$46template, "_MenuItemAffixListComponent_0_5");
  menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0 = class _ViewMenuItemAffixListComponentHost0 extends app_view.AppView$(dart.legacy(menu_item_affix_list.MenuItemAffixListComponent)) {
    build() {
      this[_compView_0] = new menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MenuItemAffixListComponent_0_5] = new menu_item_affix_list.MenuItemAffixListComponent.new(this[_compView_0]);
      this[_compView_0].create(this[_MenuItemAffixListComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMenuItemAffixListComponentL()).new(0, this, this.rootEl, this[_MenuItemAffixListComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
        return this[_MenuItemAffixListComponent_0_5];
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
      this[_MenuItemAffixListComponent_0_5].ngOnDestroy();
    }
  };
  (menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MenuItemAffixListComponent_0_5] = null;
    menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.prototype;
  dart.addTypeTests(menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0);
  dart.addTypeCaches(menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0);
  dart.setMethodSignature(menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0, () => ({
    __proto__: dart.getMethods(menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0, L0);
  dart.setFieldSignature(menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0, () => ({
    __proto__: dart.getFields(menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(menu_item_affix_list$46template.ViewMenuItemAffixListComponent0)),
    [_MenuItemAffixListComponent_0_5]: dart.fieldType(dart.legacy(menu_item_affix_list.MenuItemAffixListComponent))
  }));
  menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponent1 = function viewFactory_MenuItemAffixListComponent1(parentView, parentIndex) {
    return new menu_item_affix_list$46template._ViewMenuItemAffixListComponent1.new(parentView, parentIndex);
  };
  menu_item_affix_list$46template.viewFactory_MenuItemAffixListComponentHost0 = function viewFactory_MenuItemAffixListComponentHost0(parentView, parentIndex) {
    return new menu_item_affix_list$46template._ViewMenuItemAffixListComponentHost0.new(parentView, parentIndex);
  };
  menu_item_affix_list$46template.initReflector = function initReflector() {
    if (dart.test(menu_item_affix_list$46template._visited)) {
      return;
    }
    menu_item_affix_list$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MenuItemAffixListComponentL()), menu_item_affix_list$46template.MenuItemAffixListComponentNgFactory);
    angular$46template.initReflector();
    meta$46template.initReflector();
    dynamic_component$46template.initReflector();
    has_disabled$46template.initReflector();
    base_affix$46template.initReflector();
    menu_item_affix$46template.initReflector();
  };
  dart.copyProperties(menu_item_affix_list$46template, {
    get MenuItemAffixListComponentNgFactory() {
      return menu_item_affix_list$46template._MenuItemAffixListComponentNgFactory;
    }
  });
  var C2;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C1;
  var C3;
  dart.defineLazy(menu_item_affix_list$46template, {
    /*menu_item_affix_list$46template.styles$MenuItemAffixListComponent*/get styles$MenuItemAffixListComponent() {
      return [menu_item_affix_list$46scss$46css$46shim.styles];
    },
    /*menu_item_affix_list$46template._MenuItemAffixListComponentNgFactory*/get _MenuItemAffixListComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*menu_item_affix_list$46template.styles$MenuItemAffixListComponentHost*/get styles$MenuItemAffixListComponentHost() {
      return C3 || CT.C3;
    },
    /*menu_item_affix_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_menu/menu_item_affix_list.template", {
    "package:angular_components/material_menu/menu_item_affix_list.template.dart": menu_item_affix_list$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu_item_affix_list.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsCI,uBAAgB,2BAAY,yEAAyE;IACvG;;AAIQ,iBAAO;AACP,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AAC3D,sBAAY,yBAAsB,gBAAgB;AACN,MAAlD,iBAAW,qCAAc,GAAG,MAAM,MAAM,SAAS;AACgC,MAAjF,yBAAmB,iCAAY;AACR,MAAvB,AAAK,IAAD,WAAW;AACR,MAAP;IACF;;AAIuC,MAArC,AAAS;IACX;;AAI+B,MAA7B,AAAS;IACX;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACsH,QAAzI,mFAAoB,SAAU,mFAA2C,2CAAO,mEAAmC;;AAE9F,MAAxB,uBAAkB,MAAM;IAC1B;;kFArCiD,YAAgB;IAHnD;IACF;AAEoE,6FAAuB,8BAAW,UAAU,EAAE,WAAW;AAClH,IAArB;AAC+D,kBAA/D,kBAAiB,AAAS,8BAAc;EAC1C;;;;;;;;;;MAJ+B,gFAAgB;;;;;;;AAoDtC,MAAP;IACF;;mFANkD,YAAgB;AAAe,8FAAuB,6BAAU,UAAU,EAAE,WAAW;AAClH,IAArB;EACF;;;;;;;;AAmBwD,MAAtD,oBAAc,wEAAgC,MAAM;AACzB,MAA3B,cAAS,AAAY;AAC4D,MAAjF,wCAA0C,wDAA2B;AACF,MAAnE,AAAY,yBAAO,uCAAiC;AACvC,MAAb,WAAM;AACN,YAAO,uDAAa,GAAG,MAAM,aAAQ;IACvC;wBAGoC,OAAW,WAAmB;AAChE,UAAK,AAAU,KAAK,KAAW,iCAAiB,AAAE,MAAG,SAAS;AAC5D,cAAO;;AAET,YAAO,eAAc;IACvB;;AAIO,oBAAU;AACf,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEa,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;AACiC,MAA7C,AAAgC;IAClC;;uFAhCsD,YAAgB;IAFtC;IACG;AACkD,kGAAuB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;;;;;6HAT1G,YAAgB;AACrF,UAAO,0EAAiC,UAAU,EAAE,WAAW;EACjE;qIA0CyG,YAAgB;AACvH,UAAO,8EAAqC,UAAU,EAAE,WAAW;EACrE;;AAIE,kBAAI;AACF;;AAEa,IAAf,2CAAW;AAE8E,IAAzF,4BAAyB,8CAA4B;AAChC,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AA3EE,YAAO;IACT;;;;;;;;MAjDoB,iEAAiC;YAAG,EAAS;;MA8CN,oEAAoC;;;MAmB3E,qEAAqC;;;MA4CrD,wCAAQ;YAAG","file":"menu_item_affix_list.template.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_item_affix_list$46template: menu_item_affix_list$46template
  };
}));

//# sourceMappingURL=menu_item_affix_list.template.ddc.js.map
