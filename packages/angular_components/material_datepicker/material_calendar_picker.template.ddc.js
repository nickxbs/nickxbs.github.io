define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/material_datepicker/material_calendar_picker', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/runtime/interpolate', 'packages/quiver/src/time/clock', 'packages/angular_components/src/material_datepicker/calendar_listener.template', 'packages/angular/angular.template', 'packages/angular_components/material_datepicker/calendar.template', 'packages/angular_components/material_datepicker/module.template', 'packages/angular_components/model/date/date.template', 'packages/angular_components/model/observable/observable.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template', 'packages/angular_components/material_datepicker/material_calendar_picker.scss.css.shim'], (function load__packages__angular_components__material_datepicker__material_calendar_picker_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_components__material_datepicker__material_calendar_picker, packages__angular__src__runtime__text_binding, packages__angular__src__runtime__interpolate, packages__quiver__src__time__clock, packages__angular_components__src__material_datepicker__calendar_listener$46template, packages__angular__angular$46template, packages__angular_components__material_datepicker__calendar$46template, packages__angular_components__material_datepicker__module$46template, packages__angular_components__model__date__date$46template, packages__angular_components__model__observable__observable$46template, packages__angular_components__utils__browser__feature_detector__feature_detector$46template, packages__angular_components__material_datepicker__material_calendar_picker$46scss$46css$46shim) {
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
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const material_calendar_picker = packages__angular_components__material_datepicker__material_calendar_picker.material_datepicker__material_calendar_picker;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const clock = packages__quiver__src__time__clock.src__time__clock;
  const calendar_listener$46template = packages__angular_components__src__material_datepicker__calendar_listener$46template.src__material_datepicker__calendar_listener$46template;
  const enum_parsing$46template = packages__angular_components__src__material_datepicker__calendar_listener$46template.src__material_datepicker__enum_parsing$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const calendar$46template = packages__angular_components__material_datepicker__calendar$46template.material_datepicker__calendar$46template;
  const module$46template = packages__angular_components__material_datepicker__module$46template.material_datepicker__module$46template;
  const date$46template = packages__angular_components__model__date__date$46template.model__date__date$46template;
  const observable$46template = packages__angular_components__model__observable__observable$46template.model__observable__observable$46template;
  const feature_detector$46template = packages__angular_components__utils__browser__feature_detector__feature_detector$46template.utils__browser__feature_detector__feature_detector$46template;
  const material_calendar_picker$46scss$46css$46shim = packages__angular_components__material_datepicker__material_calendar_picker$46scss$46css$46shim.material_datepicker__material_calendar_picker$46scss$46css$46shim;
  var material_calendar_picker$46template = Object.create(dart.library);
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $_get = dartx._get;
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MaterialCalendarPickerComponentL = () => (MaterialCalendarPickerComponentL = dart.constFn(dart.legacy(material_calendar_picker.MaterialCalendarPickerComponent)))();
  var ClockL = () => (ClockL = dart.constFn(dart.legacy(clock.Clock)))();
  var VoidToMaterialCalendarPickerComponentL = () => (VoidToMaterialCalendarPickerComponentL = dart.constFn(dart.fnType(MaterialCalendarPickerComponentL(), [])))();
  var ComponentRefOfMaterialCalendarPickerComponentL = () => (ComponentRefOfMaterialCalendarPickerComponentL = dart.constFn(component_factory.ComponentRef$(MaterialCalendarPickerComponentL())))();
  var ComponentFactoryOfMaterialCalendarPickerComponentL = () => (ComponentFactoryOfMaterialCalendarPickerComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialCalendarPickerComponentL())))();
  var AppViewOfMaterialCalendarPickerComponentL = () => (AppViewOfMaterialCalendarPickerComponentL = dart.constFn(app_view.AppView$(MaterialCalendarPickerComponentL())))();
  var AppViewLOfMaterialCalendarPickerComponentL = () => (AppViewLOfMaterialCalendarPickerComponentL = dart.constFn(dart.legacy(AppViewOfMaterialCalendarPickerComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialCalendarPickerComponentL = () => (AppViewLAndintLToAppViewLOfMaterialCalendarPickerComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialCalendarPickerComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_datepicker/material_calendar_picker.template.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "third_party.dart_src.acx.material_datepicker.datepickerClock"
      });
    },
    get C3() {
      return C3 = dart.fn(material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponentHost0, AppViewLAndintLToAppViewLOfMaterialCalendarPickerComponentL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ComponentFactoryOfMaterialCalendarPickerComponentL().prototype,
        [ComponentFactory__viewFactory]: C3 || CT.C3,
        [ComponentFactory_selector]: "material-calendar-picker"
      });
    },
    get C4() {
      return C4 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _appEl_1 = dart.privateName(material_calendar_picker$46template, "_appEl_1");
  var _NgFor_1_9 = dart.privateName(material_calendar_picker$46template, "_NgFor_1_9");
  var _expr_0 = dart.privateName(material_calendar_picker$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_calendar_picker$46template, "_expr_1");
  var C0;
  material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0 = class ViewMaterialCalendarPickerComponent0 extends app_view.AppView$(dart.legacy(material_calendar_picker.MaterialCalendarPickerComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/material_datepicker/material_calendar_picker.dart" : null;
    }
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendElement(doc, parentRenderNode, "header");
      this.updateChildClass(HtmlElementL().as(_el_0), "header");
      this.addShimE(_el_0);
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C0 || CT.C0);
      this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      let _el_2 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_2, "scroll-container");
      this.addShimC(_el_2);
      let _el_3 = dom_helpers.appendDiv(doc, _el_2);
      this.updateChildClass(_el_3, "calendar-container");
      this.addShimC(_el_3);
      _ctx.container = _el_3;
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.dayNames;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
    detectHostChanges(firstCheck) {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.compact;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBindingNonHtml(this.rootEl, "compact", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    initComponentStyles() {
      let styles = material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._componentStyles;
      if (styles == null) {
        material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._componentStyles = styles = material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(material_calendar_picker$46template.styles$MaterialCalendarPickerComponent, material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-calendar-picker"));
  }).prototype = material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.prototype;
  dart.addTypeTests(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0);
  dart.addTypeCaches(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0);
  dart.setLibraryUri(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0, L0);
  dart.setFieldSignature(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0, () => ({
    __proto__: dart.getFields(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgFor_1_9]: dart.fieldType(dart.legacy(ng_for.NgFor)),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0, {
    /*material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _textBinding_1 = dart.privateName(material_calendar_picker$46template, "_textBinding_1");
  material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1 = class _ViewMaterialCalendarPickerComponent1 extends app_view.AppView$(dart.legacy(material_calendar_picker.MaterialCalendarPickerComponent)) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "header-day");
      this.addShimC(HtmlElementL().as(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let local_name = optimizations.unsafeCast(StringL(), this.locals[$_get]("$implicit"));
      this[_textBinding_1].updateText(interpolate.interpolateString0(local_name));
    }
  };
  (material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.prototype;
  dart.addTypeTests(material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1);
  dart.addTypeCaches(material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1);
  dart.setLibraryUri(material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1, L0);
  dart.setFieldSignature(material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1, () => ({
    __proto__: dart.getFields(material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _compView_0 = dart.privateName(material_calendar_picker$46template, "_compView_0");
  var _MaterialCalendarPickerComponent_0_5 = dart.privateName(material_calendar_picker$46template, "_MaterialCalendarPickerComponent_0_5");
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C1;
  material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0 = class _ViewMaterialCalendarPickerComponentHost0 extends app_view.AppView$(dart.legacy(material_calendar_picker.MaterialCalendarPickerComponent)) {
    build() {
      this[_compView_0] = new material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialCalendarPickerComponent_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialCalendarPickerComponentL(), dart.wrapType(MaterialCalendarPickerComponentL()), dart.fn(() => new material_calendar_picker.MaterialCalendarPickerComponent.new(ClockL().as(this.injectorGetOptional(C1 || CT.C1, this.viewData.parentIndex)), ClockL().as(this.injectorGet(dart.wrapType(ClockL()), this.viewData.parentIndex)), null), VoidToMaterialCalendarPickerComponentL())) : new material_calendar_picker.MaterialCalendarPickerComponent.new(ClockL().as(this.injectorGetOptional(C1 || CT.C1, this.viewData.parentIndex)), ClockL().as(this.injectorGet(dart.wrapType(ClockL()), this.viewData.parentIndex)), null);
      this[_compView_0].create(this[_MaterialCalendarPickerComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialCalendarPickerComponentL()).new(0, this, this.rootEl, this[_MaterialCalendarPickerComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialCalendarPickerComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialCalendarPickerComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
      this[_MaterialCalendarPickerComponent_0_5].ngOnDestroy();
    }
  };
  (material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialCalendarPickerComponent_0_5] = null;
    material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.prototype;
  dart.addTypeTests(material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0);
  dart.addTypeCaches(material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0);
  dart.setLibraryUri(material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0, L0);
  dart.setFieldSignature(material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0, () => ({
    __proto__: dart.getFields(material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_calendar_picker$46template.ViewMaterialCalendarPickerComponent0)),
    [_MaterialCalendarPickerComponent_0_5]: dart.fieldType(dart.legacy(material_calendar_picker.MaterialCalendarPickerComponent))
  }));
  material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponent1 = function viewFactory_MaterialCalendarPickerComponent1(parentView, parentIndex) {
    return new material_calendar_picker$46template._ViewMaterialCalendarPickerComponent1.new(parentView, parentIndex);
  };
  material_calendar_picker$46template.viewFactory_MaterialCalendarPickerComponentHost0 = function viewFactory_MaterialCalendarPickerComponentHost0(parentView, parentIndex) {
    return new material_calendar_picker$46template._ViewMaterialCalendarPickerComponentHost0.new(parentView, parentIndex);
  };
  material_calendar_picker$46template.initReflector = function initReflector() {
    if (dart.test(material_calendar_picker$46template._visited)) {
      return;
    }
    material_calendar_picker$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialCalendarPickerComponentL()), material_calendar_picker$46template.MaterialCalendarPickerComponentNgFactory);
    calendar_listener$46template.initReflector();
    enum_parsing$46template.initReflector();
    angular$46template.initReflector();
    calendar$46template.initReflector();
    module$46template.initReflector();
    date$46template.initReflector();
    observable$46template.initReflector();
    feature_detector$46template.initReflector();
  };
  dart.copyProperties(material_calendar_picker$46template, {
    get MaterialCalendarPickerComponentNgFactory() {
      return material_calendar_picker$46template._MaterialCalendarPickerComponentNgFactory;
    }
  });
  var C3;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C2;
  var C4;
  dart.defineLazy(material_calendar_picker$46template, {
    /*material_calendar_picker$46template.styles$MaterialCalendarPickerComponent*/get styles$MaterialCalendarPickerComponent() {
      return [material_calendar_picker$46scss$46css$46shim.styles];
    },
    /*material_calendar_picker$46template._MaterialCalendarPickerComponentNgFactory*/get _MaterialCalendarPickerComponentNgFactory() {
      return C2 || CT.C2;
    },
    /*material_calendar_picker$46template.styles$MaterialCalendarPickerComponentHost*/get styles$MaterialCalendarPickerComponentHost() {
      return C4 || CT.C4;
    },
    /*material_calendar_picker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_datepicker/material_calendar_picker.template", {
    "package:angular_components/material_datepicker/material_calendar_picker.template.dart": material_calendar_picker$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_calendar_picker.template.dart"],"names":[],"mappings":"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","file":"material_calendar_picker.template.ddc.js"}');
  // Exports:
  return {
    material_datepicker__material_calendar_picker$46template: material_calendar_picker$46template
  };
}));

//# sourceMappingURL=material_calendar_picker.template.ddc.js.map
