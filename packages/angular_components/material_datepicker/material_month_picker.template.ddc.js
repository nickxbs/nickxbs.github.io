define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_datepicker/material_month_picker', 'packages/quiver/src/time/clock', 'packages/angular_components/src/material_datepicker/calendar_listener.template', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/material_datepicker/material_month_picker.scss.css.shim'], (function load__packages__angular_components__material_datepicker__material_month_picker_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_datepicker__material_month_picker, packages__quiver__src__time__clock, packages__angular_components__src__material_datepicker__calendar_listener$46template, packages__angular__angular$46template, packages__angular_components__material_datepicker__calendar$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__model__date__date$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__material_datepicker__material_month_picker$46scss$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const material_month_picker = packages__angular_components__material_datepicker__material_month_picker.material_datepicker__material_month_picker;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const calendar_listener$46template = packages__angular_components__src__material_datepicker__calendar_listener$46template.src__material_datepicker__calendar_listener$46template;
  const enum_parsing$46template = packages__angular_components__src__material_datepicker__calendar_listener$46template.src__material_datepicker__enum_parsing$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const calendar$46template = packages__angular_components__material_datepicker__calendar$46template.material_datepicker__calendar$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const material_month_picker$46scss$46css$46shim = packages__angular_components__material_datepicker__material_month_picker$46scss$46css$46shim.material_datepicker__material_month_picker$46scss$46css$46shim;
  var material_month_picker$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var MaterialMonthPickerComponentL = () => (MaterialMonthPickerComponentL = dart.constFn(dart.legacy(material_month_picker.MaterialMonthPickerComponent)))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var VoidToMaterialMonthPickerComponentL = () => (VoidToMaterialMonthPickerComponentL = dart.constFn(dart.fnType(MaterialMonthPickerComponentL(), [])))();
  var ComponentRefOfMaterialMonthPickerComponentL = () => (ComponentRefOfMaterialMonthPickerComponentL = dart.constFn(component_factory.ComponentRef$(MaterialMonthPickerComponentL())))();
  var ComponentFactoryOfMaterialMonthPickerComponentL = () => (ComponentFactoryOfMaterialMonthPickerComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialMonthPickerComponentL())))();
  var AppViewOfMaterialMonthPickerComponentL = () => (AppViewOfMaterialMonthPickerComponentL = dart.constFn(app_view.AppView$(MaterialMonthPickerComponentL())))();
  var AppViewLOfMaterialMonthPickerComponentL = () => (AppViewLOfMaterialMonthPickerComponentL = dart.constFn(dart.legacy(AppViewOfMaterialMonthPickerComponentL())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfMaterialMonthPickerComponentL = () => (AppViewLAndintLToAppViewLOfMaterialMonthPickerComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialMonthPickerComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/material_month_picker.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C2() {
      return C2 = dart.fn(material_month_picker$46template.viewFactory_MaterialMonthPickerComponentHost0, AppViewLAndintLToAppViewLOfMaterialMonthPickerComponentL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ComponentFactoryOfMaterialMonthPickerComponentL().prototype,
        [ComponentFactory__viewFactory]: C2 || CT.C2,
        [ComponentFactory_selector]: "material-month-picker"
      });
    },
    get C3() {
      return C3 = dart.constList([], dart.dynamic);
    }
  }, false);
  material_month_picker$46template.ViewMaterialMonthPickerComponent0 = class ViewMaterialMonthPickerComponent0 extends app_view.AppView$(dart.legacy(material_month_picker.MaterialMonthPickerComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_month_picker.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "scroll-container");
      this.addShimC(_el_0);
      let _el_1 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "calendar-container");
      this.addShimC(_el_1);
      _ctx.container = _el_1;
      this.init0();
    }
    initComponentStyles() {
      let styles = material_month_picker$46template.ViewMaterialMonthPickerComponent0._componentStyles;
      if (styles == null) {
        material_month_picker$46template.ViewMaterialMonthPickerComponent0._componentStyles = styles = material_month_picker$46template.ViewMaterialMonthPickerComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_month_picker$46template.styles$MaterialMonthPickerComponent, material_month_picker$46template.ViewMaterialMonthPickerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_month_picker$46template.ViewMaterialMonthPickerComponent0.new = function(parentView, parentIndex) {
    material_month_picker$46template.ViewMaterialMonthPickerComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-month-picker"));
  }).prototype = material_month_picker$46template.ViewMaterialMonthPickerComponent0.prototype;
  dart.addTypeTests(material_month_picker$46template.ViewMaterialMonthPickerComponent0);
  dart.addTypeCaches(material_month_picker$46template.ViewMaterialMonthPickerComponent0);
  dart.setLibraryUri(material_month_picker$46template.ViewMaterialMonthPickerComponent0, L0);
  dart.defineLazy(material_month_picker$46template.ViewMaterialMonthPickerComponent0, {
    /*material_month_picker$46template.ViewMaterialMonthPickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(material_month_picker$46template, "_compView_0");
  var _MaterialMonthPickerComponent_0_5 = dart.privateName(material_month_picker$46template, "_MaterialMonthPickerComponent_0_5");
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C0;
  material_month_picker$46template._ViewMaterialMonthPickerComponentHost0 = class _ViewMaterialMonthPickerComponentHost0 extends app_view.AppView$(dart.legacy(material_month_picker.MaterialMonthPickerComponent)) {
    build() {
      this[_compView_0] = new material_month_picker$46template.ViewMaterialMonthPickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialMonthPickerComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialMonthPickerComponentL(), dart.wrapType(MaterialMonthPickerComponentL()), dart.fn(() => new material_month_picker.MaterialMonthPickerComponent.new(ClockL().as(this.injectorGetOptional(C0 || CT.C0, this.viewData.parentIndex)), null), VoidToMaterialMonthPickerComponentL())) : new material_month_picker.MaterialMonthPickerComponent.new(ClockL().as(this.injectorGetOptional(C0 || CT.C0, this.viewData.parentIndex)), null);
      this[_compView_0].create(this[_MaterialMonthPickerComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialMonthPickerComponentL()).new(0, this, this.rootEl, this[_MaterialMonthPickerComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialMonthPickerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialMonthPickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialMonthPickerComponent_0_5].ngOnDestroy();
    }
  };
  (material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialMonthPickerComponent_0_5] = null;
    material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.prototype;
  dart.addTypeTests(material_month_picker$46template._ViewMaterialMonthPickerComponentHost0);
  dart.addTypeCaches(material_month_picker$46template._ViewMaterialMonthPickerComponentHost0);
  dart.setLibraryUri(material_month_picker$46template._ViewMaterialMonthPickerComponentHost0, L0);
  dart.setFieldSignature(material_month_picker$46template._ViewMaterialMonthPickerComponentHost0, () => ({
    __proto__: dart.getFields(material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_month_picker$46template.ViewMaterialMonthPickerComponent0)),
    [_MaterialMonthPickerComponent_0_5]: dart.fieldType(dart.legacy(material_month_picker.MaterialMonthPickerComponent))
  }));
  material_month_picker$46template.viewFactory_MaterialMonthPickerComponentHost0 = function viewFactory_MaterialMonthPickerComponentHost0(parentView, parentIndex) {
    return new material_month_picker$46template._ViewMaterialMonthPickerComponentHost0.new(parentView, parentIndex);
  };
  material_month_picker$46template.initReflector = function initReflector() {
    if (dart.test(material_month_picker$46template._visited)) {
      return;
    }
    material_month_picker$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialMonthPickerComponentL()), material_month_picker$46template.MaterialMonthPickerComponentNgFactory);
    calendar_listener$46template.initReflector();
    enum_parsing$46template.initReflector();
    angular$46template.initReflector();
    calendar$46template.initReflector();
    module$46template.initReflector();
    date$46template.initReflector();
    observable$46template.initReflector();
  };
  dart.copyProperties(material_month_picker$46template, {
    get MaterialMonthPickerComponentNgFactory() {
      return material_month_picker$46template._MaterialMonthPickerComponentNgFactory;
    }
  });
  var C2;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C1;
  var C3;
  dart.defineLazy(material_month_picker$46template, {
    /*material_month_picker$46template.styles$MaterialMonthPickerComponent*/get styles$MaterialMonthPickerComponent() {
      return [material_month_picker$46scss$46css$46shim.styles];
    },
    /*material_month_picker$46template._MaterialMonthPickerComponentNgFactory*/get _MaterialMonthPickerComponentNgFactory() {
      return C1 || CT.C1;
    },
    /*material_month_picker$46template.styles$MaterialMonthPickerComponentHost*/get styles$MaterialMonthPickerComponentHost() {
      return C3 || CT.C3;
    },
    /*material_month_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/material_month_picker.template", {
    "package:angular_components/material_datepicker/material_month_picker.template.dart": material_month_picker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_month_picker.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqCI,uBAAgB,2BAAY,gFAAgF;IAC9G;;AAIQ,iBAAO;AACP,oBAAU;AACU,6BAAmB,kBAAa,OAAO;AAC3D,gBAAc;AACd,kBAAQ,sBAAkB,GAAG,EAAE,gBAAgB;AACL,MAAhD,AAAK,sBAAiB,KAAK,EAAE;AACd,MAAf,cAAS,KAAK;AACR,kBAAQ,sBAAkB,GAAG,EAAE,KAAK;AACQ,MAAlD,AAAK,sBAAiB,KAAK,EAAE;AACd,MAAf,cAAS,KAAK;AACQ,MAAtB,AAAK,IAAD,aAAa,KAAK;AACf,MAAP;IACF;;AAIM,mBAAS;AACb,UAAI,AAAU,MAAM,IAAE;AACwH,QAA3I,sFAAoB,SAAU,sFAA2C,2CAAO,sEAAqC;;AAEhG,MAAxB,uBAAkB,MAAM;IAC1B;;qFA/BmD,YAAgB;AAAe,gGAAuB,8BAAW,UAAU,EAAE,WAAW;AACpH,IAArB;AACgE,kBAAhE,kBAAiB,AAAS,8BAAc;EAC1C;;;;;MAJ+B,mFAAgB;;;;;;;;;;;AAgDW,MAAxD,oBAAc,2EAAkC,MAAM;AAC3B,MAA3B,cAAS,AAAY;AAKiL,MAJtM,oDAA6C,2BACvC,0DAAmC,gDAA8B,cAChD,uEAA6B,AAAK,sCAAyH,AAAS,6BAAc,iDAE3L,uEAA6B,AAAK,sCAAyH,AAAS,6BAAc;AAC3H,MAArE,AAAY,yBAAO,yCAAmC;AACzC,MAAb,WAAM;AACN,YAAO,yDAAa,GAAG,MAAM,aAAQ;IACvC;;AAIO,oBAAU;AACV,uBAAmB,AAAQ,iBAAG;AACnC,UAAI,OAAO;AACoB,QAA7B,AAAY;;AAEd,qBAA6B,+CAAmB,UAAU;AACZ,QAA5C,AAAkC;;AAET,MAA3B,AAAY;AACZ,qBAA4B;AAC1B,YAAI,UAAU;AACuC,UAAnD,AAAkC;;;IAGxC;;AAIoC,MAAlC,AAAY;AACmC,MAA/C,AAAkC;IACpC;;0FArCwD,YAAgB;IAFtC;IACG;AACkD,qGAAuB,yBAAM,UAAU,EAAE,WAAW;;EAAsC;;;;;;;;;0IAwCtE,YAAgB;AAC3H,UAAO,iFAAuC,UAAU,EAAE,WAAW;EACvE;;AAIE,kBAAI;AACF;;AAEa,IAAf,4CAAW;AAEkF,IAA7F,4BAAyB,gDAA8B;AAClC,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;;AAnEE,YAAO;IACT;;;;;;;;MAzCoB,oEAAmC;YAAG,EAAS;;MAsCN,uEAAsC;;;MAK/E,wEAAuC;;;MAiDvD,yCAAQ;YAAG","file":"material_month_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_month_picker$46template: material_month_picker$46template
  };
}));

//# sourceMappingURL=material_month_picker.template.ddc.js.map
