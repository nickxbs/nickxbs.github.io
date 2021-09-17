define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_list/material_list_item', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/interfaces/has_disabled', 'packages/angular/angular.template', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/material_list/material_list_item.scss.css.shim'], (function load__packages__angular_components__material_list__material_list_item_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_list__material_list_item, packages__angular_components__mixins__material_dropdown_base, packages__angular_components__interfaces__has_disabled, packages__angular__angular$46template, packages__angular_components__button_decorator__button_decorator$46template, packages__angular_components__interfaces__has_disabled$46template, packages__angular_components__mixins__material_dropdown_base$46template, packages__angular_components__utils__disposer__disposer$46template, packages__angular_components__material_list__material_list_item$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const material_list_item = packages__angular_components__material_list__material_list_item.material_list__material_list_item;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const button_decorator$46template = packages__angular_components__button_decorator__button_decorator$46template.button_decorator__button_decorator$46template;
  const has_disabled$46template = packages__angular_components__interfaces__has_disabled$46template.interfaces__has_disabled$46template;
  const material_dropdown_base$46template = packages__angular_components__mixins__material_dropdown_base$46template.mixins__material_dropdown_base$46template;
  const disposer$46template = packages__angular_components__utils__disposer__disposer$46template.utils__disposer__disposer$46template;
  const material_list_item$46scss$46css$46shim = packages__angular_components__material_list__material_list_item$46scss$46css$46shim.material_list__material_list_item$46scss$46css$46shim;
  var material_list_item$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $addEventListener = dartx.addEventListener;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var MaterialListItemComponentL = () => (MaterialListItemComponentL = dart.constFn(dart.legacy(material_list_item.MaterialListItemComponent)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var VoidToMaterialListItemComponentL = () => (VoidToMaterialListItemComponentL = dart.constFn(dart.fnType(MaterialListItemComponentL(), [])))();
  var ComponentRefOfMaterialListItemComponentL = () => (ComponentRefOfMaterialListItemComponentL = dart.constFn(component_factory.ComponentRef$(MaterialListItemComponentL())))();
  var HasDisabledL = () => (HasDisabledL = dart.constFn(dart.legacy(has_disabled.HasDisabled)))();
  var ComponentFactoryOfMaterialListItemComponentL = () => (ComponentFactoryOfMaterialListItemComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialListItemComponentL())))();
  var AppViewOfMaterialListItemComponentL = () => (AppViewOfMaterialListItemComponentL = dart.constFn(app_view.AppView$(MaterialListItemComponentL())))();
  var AppViewLOfMaterialListItemComponentL = () => (AppViewLOfMaterialListItemComponentL = dart.constFn(dart.legacy(AppViewOfMaterialListItemComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfMaterialListItemComponentL = () => (AppViewLAndintLToAppViewLOfMaterialListItemComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialListItemComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_list/material_list_item.template.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(material_list_item$46template.viewFactory_MaterialListItemComponentHost0, AppViewLAndintLToAppViewLOfMaterialListItemComponentL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfMaterialListItemComponentL().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "material-list-item"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _expr_0 = dart.privateName(material_list_item$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_list_item$46template, "_expr_1");
  var _expr_2 = dart.privateName(material_list_item$46template, "_expr_2");
  var _expr_3 = dart.privateName(material_list_item$46template, "_expr_3");
  var _expr_4 = dart.privateName(material_list_item$46template, "_expr_4");
  material_list_item$46template.ViewMaterialListItemComponent0 = class ViewMaterialListItemComponent0 extends app_view.AppView$(dart.legacy(material_list_item.MaterialListItemComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_list/material_list_item.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this.project(parentRenderNode, 0);
      this.init0();
      _rootEl[$addEventListener]("click", this.eventHandler1(EventL(), MouseEventL(), dart.bind(_ctx, 'handleClick')));
      _rootEl[$addEventListener]("keypress", this.eventHandler1(EventL(), KeyboardEventL(), dart.bind(_ctx, 'handleKeyPress')));
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.tabIndex;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(this.rootEl, "tabindex", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.ariaRole;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(this.rootEl, "role", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.disabledStr;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateAttribute(this.rootEl, "aria-disabled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "is-disabled", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.disabled;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "disabled", currVal_4);
        this[_expr_4] = currVal_4;
      }
    }
    initComponentStyles() {
      let styles = material_list_item$46template.ViewMaterialListItemComponent0._componentStyles;
      if (styles == null) {
        material_list_item$46template.ViewMaterialListItemComponent0._componentStyles = styles = material_list_item$46template.ViewMaterialListItemComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_list_item$46template.styles$MaterialListItemComponent, material_list_item$46template.ViewMaterialListItemComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_list_item$46template.ViewMaterialListItemComponent0.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    material_list_item$46template.ViewMaterialListItemComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-list-item"));
    this.updateChildClassNonHtml(this.rootEl, "item");
  }).prototype = material_list_item$46template.ViewMaterialListItemComponent0.prototype;
  dart.addTypeTests(material_list_item$46template.ViewMaterialListItemComponent0);
  dart.addTypeCaches(material_list_item$46template.ViewMaterialListItemComponent0);
  dart.setLibraryUri(material_list_item$46template.ViewMaterialListItemComponent0, L0);
  dart.setFieldSignature(material_list_item$46template.ViewMaterialListItemComponent0, () => ({
    __proto__: dart.getFields(material_list_item$46template.ViewMaterialListItemComponent0.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_4]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(material_list_item$46template.ViewMaterialListItemComponent0, {
    /*material_list_item$46template.ViewMaterialListItemComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_list_item$46template, "_compView_0");
  var _MaterialListItemComponent_0_5 = dart.privateName(material_list_item$46template, "_MaterialListItemComponent_0_5");
  material_list_item$46template._ViewMaterialListItemComponentHost0 = class _ViewMaterialListItemComponentHost0 extends app_view.AppView$(dart.legacy(material_list_item.MaterialListItemComponent)) {
    build() {
      this[_compView_0] = new material_list_item$46template.ViewMaterialListItemComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialListItemComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialListItemComponentL(), dart.wrapType(MaterialListItemComponentL()), dart.fn(() => new material_list_item.MaterialListItemComponent.new(this.rootEl, DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex)), null, null), VoidToMaterialListItemComponentL())) : new material_list_item.MaterialListItemComponent.new(this.rootEl, DropdownHandleL().as(this.injectorGetOptional(dart.wrapType(DropdownHandleL()), this.viewData.parentIndex)), null, null);
      this[_compView_0].create(this[_MaterialListItemComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialListItemComponentL()).new(0, this, this.rootEl, this[_MaterialListItemComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(HasDisabledL()) && 0 === nodeIndex) {
        return this[_MaterialListItemComponent_0_5];
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
      this[_MaterialListItemComponent_0_5].ngOnDestroy();
    }
  };
  (material_list_item$46template._ViewMaterialListItemComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialListItemComponent_0_5] = null;
    material_list_item$46template._ViewMaterialListItemComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_list_item$46template._ViewMaterialListItemComponentHost0.prototype;
  dart.addTypeTests(material_list_item$46template._ViewMaterialListItemComponentHost0);
  dart.addTypeCaches(material_list_item$46template._ViewMaterialListItemComponentHost0);
  dart.setMethodSignature(material_list_item$46template._ViewMaterialListItemComponentHost0, () => ({
    __proto__: dart.getMethods(material_list_item$46template._ViewMaterialListItemComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(material_list_item$46template._ViewMaterialListItemComponentHost0, L0);
  dart.setFieldSignature(material_list_item$46template._ViewMaterialListItemComponentHost0, () => ({
    __proto__: dart.getFields(material_list_item$46template._ViewMaterialListItemComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_list_item$46template.ViewMaterialListItemComponent0)),
    [_MaterialListItemComponent_0_5]: dart.fieldType(dart.legacy(material_list_item.MaterialListItemComponent))
  }));
  material_list_item$46template.viewFactory_MaterialListItemComponentHost0 = function viewFactory_MaterialListItemComponentHost0(parentView, parentIndex) {
    return new material_list_item$46template._ViewMaterialListItemComponentHost0.new(parentView, parentIndex);
  };
  material_list_item$46template.initReflector = function initReflector() {
    if (dart.test(material_list_item$46template._visited)) {
      return;
    }
    material_list_item$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialListItemComponentL()), material_list_item$46template.MaterialListItemComponentNgFactory);
    angular$46template.initReflector();
    button_decorator$46template.initReflector();
    has_disabled$46template.initReflector();
    material_dropdown_base$46template.initReflector();
    disposer$46template.initReflector();
  };
  dart.copyProperties(material_list_item$46template, {
    get MaterialListItemComponentNgFactory() {
      return material_list_item$46template._MaterialListItemComponentNgFactory;
    }
  });
  var C1;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C0;
  var C2;
  dart.defineLazy(material_list_item$46template, {
    /*material_list_item$46template.styles$MaterialListItemComponent*/get styles$MaterialListItemComponent() {
      return [material_list_item$46scss$46css$46shim.styles];
    },
    /*material_list_item$46template._MaterialListItemComponentNgFactory*/get _MaterialListItemComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*material_list_item$46template.styles$MaterialListItemComponentHost*/get styles$MaterialListItemComponentHost() {
      return C2 || CT.C2;
    },
    /*material_list_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_list/material_list_item.template", {
    "package:angular_components/material_list/material_list_item.template.dart": material_list_item$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_list_item.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA0CI,uBAAgB,2BAAY,uEAAuE;IACrG;;AAIQ,iBAAO;AACP,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AACrC,MAA5B,aAAQ,gBAAgB,EAAE;AACnB,MAAP;AACkE,MAAlE,AAAQ,OAAD,oBAAkB,SAAS,4CAAmB,UAAL,IAAI;AACoB,MAAxE,AAAQ,OAAD,oBAAkB,YAAY,+CAAmB,UAAL,IAAI;IACzD;sBAE4B;AACpB,iBAAO;AACP,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAqB,eAAS,SAAS;AACc,QAAvD,4BAAyB,aAAQ,YAAY,SAAS;AACnC,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAqB,eAAS,SAAS;AACU,QAAnD,4BAAyB,aAAQ,QAAQ,SAAS;AAC/B,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAqB,eAAS,SAAS;AACmB,QAA5D,4BAAyB,aAAQ,iBAAiB,SAAS;AACxC,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAqB,eAAS,SAAS;AAC2B,QAApE,sCAAmC,aAAQ,eAAe,SAAS;AAChD,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAK,IAAD;AACtB,oBAAI,4BAAqB,eAAS,SAAS;AACwB,QAAjE,sCAAmC,aAAQ,YAAY,SAAS;AAC7C,QAAnB,gBAAU,SAAS;;IAEvB;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACqH,QAAxI,gFAAoB,SAAU,gFAA2C,2CAAO,gEAAkC;;AAE7F,MAAxB,uBAAkB,MAAM;IAC1B;;+EAxDgD,YAAgB;IAN5D;IACA;IACA;IACC;IACA;AAE0E,0FAAuB,8BAAW,UAAU,EAAE,WAAW;AACjH,IAArB;AAC6D,kBAA7D,kBAAiB,AAAS,8BAAc;AACyC,IAAjF,AAAK,6BAAwB;EAC/B;;;;;;;;;;;;;MAL+B,6EAAgB;;;;;;;;;AAyEQ,MAArD,oBAAc,qEAA+B,MAAM;AACxB,MAA3B,cAAS,AAAY;AAKgH,MAJrI,iDAA0C,2BACpC,uDAAmC,6CAA2B,cAC7C,qDAA0B,kCAAQ,AAAK,yBAA6B,kCAAgB,AAAS,6BAAc,MAAM,8CAE1H,qDAA0B,kCAAQ,AAAK,yBAA6B,kCAAgB,AAAS,6BAAc,MAAM;AAC7D,MAAlE,AAAY,yBAAO,sCAAgC;AACtC,MAAb,WAAM;AACN,YAAO,sDAAa,GAAG,MAAM,aAAQ;IACvC;wBAGoC,OAAW,WAAmB;AAChE,UAAK,AAAU,KAAK,KAAW,iCAAiB,AAAE,MAAG,SAAS;AAC5D,cAAO;;AAET,YAAO,eAAc;IACvB;;AAIO,oBAAU;AACV,uBAAmB,AAAQ,iBAAG;AACnC,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAE2B,MAAzC,AAAY,oCAAkB,UAAU;AACb,MAA3B,AAAY;IACd;;AAIoC,MAAlC,AAAY;AACgC,MAA5C,AAA+B;IACjC;;oFAtCqD,YAAgB;IAFtC;IACG;AACkD,+FAAuB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;;;;;iIAyCzE,YAAgB;AACrH,UAAO,2EAAoC,UAAU,EAAE,WAAW;EACpE;;AAIE,kBAAI;AACF;;AAEa,IAAf,yCAAW;AAE4E,IAAvF,4BAAyB,6CAA2B;AAC/B,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AAlEE,YAAO;IACT;;;;;;;;MAvEoB,8DAAgC;YAAG,EAAS;;MAoEN,iEAAmC;;;MAKzE,kEAAoC;;;MAkDpD,sCAAQ;YAAG","file":"material_list_item.template.ddc.js"}');
  // Exports:
  return {
    material_list__material_list_item$46template: material_list_item$46template
  };
}));

//# sourceMappingURL=material_list_item.template.ddc.js.map
