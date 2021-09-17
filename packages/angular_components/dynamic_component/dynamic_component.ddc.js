define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/model/ui/has_renderer', 'packages/angular/src/core/change_detection/change_detection'], (function load__packages__angular_components__dynamic_component__dynamic_component(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular_components__model__ui__has_renderer, packages__angular__src__core__change_detection__change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const view_container_ref = packages__angular__src__bootstrap__modules.src__core__linker__view_container_ref;
  const dynamic_component_loader = packages__angular__src__bootstrap__modules.src__core__linker__dynamic_component_loader;
  const component_loader = packages__angular__src__bootstrap__modules.src__core__linker__component_loader;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const lifecycle_hooks = packages__angular__src__core__change_detection__change_detection.src__core__metadata__lifecycle_hooks;
  const change_detector_ref = packages__angular__src__core__change_detection__change_detection.src__core__change_detection__change_detector_ref;
  var dynamic_component = Object.create(dart.library);
  var ComponentRefL = () => (ComponentRefL = dart.constFn(dart.legacy(component_factory.ComponentRef)))();
  var StreamControllerOfComponentRefL = () => (StreamControllerOfComponentRefL = dart.constFn(async.StreamController$(ComponentRefL())))();
  var ComponentRefLToNullN = () => (ComponentRefLToNullN = dart.constFn(dart.fnType(core.Null, [ComponentRefL()])))();
  var RendersValueL = () => (RendersValueL = dart.constFn(dart.legacy(has_renderer.RendersValue)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/dynamic_component/dynamic_component.dart";
  var _onLoadController = dart.privateName(dynamic_component, "_onLoadController");
  var _viewContainerRef = dart.privateName(dynamic_component, "_viewContainerRef");
  var _loadDeferred = dart.privateName(dynamic_component, "_loadDeferred");
  var _childComponent = dart.privateName(dynamic_component, "_childComponent");
  var _componentType = dart.privateName(dynamic_component, "_componentType");
  var _typeChanged = dart.privateName(dynamic_component, "_typeChanged");
  var _componentFactory = dart.privateName(dynamic_component, "_componentFactory");
  var _factoryChanged = dart.privateName(dynamic_component, "_factoryChanged");
  var _value = dart.privateName(dynamic_component, "_value");
  var _valueChanged = dart.privateName(dynamic_component, "_valueChanged");
  var _slowComponentLoader$ = dart.privateName(dynamic_component, "_slowComponentLoader");
  var _changeDetectorRef$ = dart.privateName(dynamic_component, "_changeDetectorRef");
  var _componentLoader$ = dart.privateName(dynamic_component, "_componentLoader");
  var _initialize = dart.privateName(dynamic_component, "_initialize");
  var _disposeChildComponent = dart.privateName(dynamic_component, "_disposeChildComponent");
  var _updateChildComponent = dart.privateName(dynamic_component, "_updateChildComponent");
  dynamic_component.DynamicComponent = class DynamicComponent extends core.Object {
    set viewContainerRef(value) {
      this[_viewContainerRef] = value;
      if (dart.test(this[_loadDeferred])) {
        this[_initialize]();
        this[_loadDeferred] = false;
      }
    }
    get onLoad() {
      return this[_onLoadController].stream;
    }
    get childComponent() {
      return this[_childComponent];
    }
    ngOnDestroy() {
      this[_disposeChildComponent]();
      this[_viewContainerRef] = null;
    }
    [_disposeChildComponent]() {
      let t0;
      t0 = this[_childComponent];
      t0 == null ? null : t0.destroy();
      this[_childComponent] = null;
    }
    set componentType(dartType) {
      if (!dart.equals(this[_componentType], dartType)) this[_typeChanged] = true;
      this[_componentType] = dartType;
    }
    set componentFactory(component) {
      if (!dart.equals(this[_componentFactory], component)) this[_factoryChanged] = true;
      this[_componentFactory] = component;
    }
    set value(s) {
      this[_value] = s;
      this[_valueChanged] = true;
    }
    ngAfterChanges() {
      if (dart.test(this[_factoryChanged]) || dart.test(this[_typeChanged])) {
        this[_disposeChildComponent]();
        if (this[_viewContainerRef] != null) {
          this[_initialize]();
        } else {
          this[_loadDeferred] = true;
        }
      } else if (dart.test(this[_valueChanged])) {
        this[_updateChildComponent]();
      }
      this[_valueChanged] = this[_factoryChanged] = this[_typeChanged] = false;
    }
    [_initialize]() {
      if (this[_componentFactory] != null) {
        if (this[_childComponent] != null) {
          dart.throw("Attempting to overwrite a dynamic component");
        }
        this[_childComponent] = this[_componentLoader$].loadNextToLocation(dart.dynamic, this[_componentFactory], this[_viewContainerRef]);
        this[_onLoadController].add(this[_childComponent]);
        this[_updateChildComponent]();
      } else if (this[_componentType] != null) {
        let loadType = this[_componentType];
        this[_slowComponentLoader$].loadNextToLocation(dart.dynamic, loadType, this[_viewContainerRef]).then(core.Null, dart.fn(componentRef => {
          if (!dart.equals(loadType, this[_componentType])) {
            componentRef.destroy();
            return;
          }
          if (this[_childComponent] != null) {
            dart.throw("Attempting to overwrite a dynamic component");
          }
          this[_childComponent] = componentRef;
          this[_onLoadController].add(componentRef);
          this[_updateChildComponent]();
        }, ComponentRefLToNullN()));
      }
    }
    [_updateChildComponent]() {
      this[_changeDetectorRef$].markForCheck();
      if (this[_childComponent] != null) {
        if (RendersValueL().is(this[_childComponent].instance)) {
          dart.dput(this[_childComponent].instance, 'value', this[_value]);
        }
      }
    }
  };
  (dynamic_component.DynamicComponent.new = function(_slowComponentLoader, _changeDetectorRef, _componentLoader) {
    this[_onLoadController] = StreamControllerOfComponentRefL().new();
    this[_viewContainerRef] = null;
    this[_loadDeferred] = false;
    this[_childComponent] = null;
    this[_componentType] = null;
    this[_typeChanged] = false;
    this[_componentFactory] = null;
    this[_factoryChanged] = false;
    this[_value] = null;
    this[_valueChanged] = false;
    this[_slowComponentLoader$] = _slowComponentLoader;
    this[_changeDetectorRef$] = _changeDetectorRef;
    this[_componentLoader$] = _componentLoader;
    ;
  }).prototype = dynamic_component.DynamicComponent.prototype;
  dart.addTypeTests(dynamic_component.DynamicComponent);
  dart.addTypeCaches(dynamic_component.DynamicComponent);
  dynamic_component.DynamicComponent[dart.implements] = () => [lifecycle_hooks.OnDestroy, lifecycle_hooks.AfterChanges];
  dart.setMethodSignature(dynamic_component.DynamicComponent, () => ({
    __proto__: dart.getMethods(dynamic_component.DynamicComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_disposeChildComponent]: dart.fnType(dart.void, []),
    ngAfterChanges: dart.fnType(dart.void, []),
    [_initialize]: dart.fnType(dart.void, []),
    [_updateChildComponent]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(dynamic_component.DynamicComponent, () => ({
    __proto__: dart.getGetters(dynamic_component.DynamicComponent.__proto__),
    onLoad: dart.legacy(async.Stream$(dart.legacy(component_factory.ComponentRef))),
    childComponent: dart.legacy(component_factory.ComponentRef)
  }));
  dart.setSetterSignature(dynamic_component.DynamicComponent, () => ({
    __proto__: dart.getSetters(dynamic_component.DynamicComponent.__proto__),
    viewContainerRef: dart.legacy(view_container_ref.ViewContainerRef),
    componentType: dart.legacy(core.Type),
    componentFactory: dart.legacy(component_factory.ComponentFactory),
    value: dart.dynamic
  }));
  dart.setLibraryUri(dynamic_component.DynamicComponent, L0);
  dart.setFieldSignature(dynamic_component.DynamicComponent, () => ({
    __proto__: dart.getFields(dynamic_component.DynamicComponent.__proto__),
    [_slowComponentLoader$]: dart.finalFieldType(dart.legacy(dynamic_component_loader.SlowComponentLoader)),
    [_componentLoader$]: dart.finalFieldType(dart.legacy(component_loader.ComponentLoader)),
    [_changeDetectorRef$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_onLoadController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(component_factory.ComponentRef)))),
    [_viewContainerRef]: dart.fieldType(dart.legacy(view_container_ref.ViewContainerRef)),
    [_loadDeferred]: dart.fieldType(dart.legacy(core.bool)),
    [_childComponent]: dart.fieldType(dart.legacy(component_factory.ComponentRef)),
    [_componentType]: dart.fieldType(dart.legacy(core.Type)),
    [_typeChanged]: dart.fieldType(dart.legacy(core.bool)),
    [_componentFactory]: dart.fieldType(dart.legacy(component_factory.ComponentFactory)),
    [_factoryChanged]: dart.fieldType(dart.legacy(core.bool)),
    [_value]: dart.fieldType(dart.legacy(core.Object)),
    [_valueChanged]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/dynamic_component/dynamic_component", {
    "package:angular_components/dynamic_component/dynamic_component.dart": dynamic_component
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dynamic_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yBA0BwC;AACX,MAAzB,0BAAoB,KAAK;AACzB,oBAAI;AACW,QAAb;AACqB,QAArB,sBAAgB;;IAEpB;;AAamC,YAAA,AAAkB;IAAM;;AAMxB;IAAe;;AAIxB,MAAxB;AACwB,MAAxB,0BAAoB;IACtB;;;AAG4B,WAA1B;0BAAiB;AACK,MAAtB,wBAAkB;IACpB;sBAKuB;AACrB,uBAAI,sBAAkB,QAAQ,GAAE,AAAmB,qBAAJ;AACtB,MAAzB,uBAAiB,QAAQ;IAC3B;yBAIsC;AACpC,uBAAI,yBAAqB,SAAS,GAAE,AAAsB,wBAAJ;AACzB,MAA7B,0BAAoB,SAAS;IAC/B;cAKkB;AACN,MAAV,eAAS,CAAC;AACU,MAApB,sBAAgB;IAClB;;AAIE,oBAAI,oCAAmB;AACG,QAAxB;AACA,YAAI,2BAAqB;AACV,UAAb;;AAEoB,UAApB,sBAAgB;;YAEb,eAAI;AAGc,QAAvB;;AAEoD,MAAtD,sBAAgB,wBAAkB,qBAAe;IACnD;;AAGE,UAAI,2BAAqB;AACvB,YAAI,yBAAmB;AAC8B,UAAnD,WAAM;;AAIiC,QADzC,wBAAkB,AAAiB,yDAC/B,yBAAmB;AACe,QAAtC,AAAkB,4BAAI;AACC,QAAvB;YACK,KAAI,wBAAkB;AAEtB,uBAAW;AAgBd,QAfF,AACK,AACA,6DADmB,QAAQ,EAAE,yCACxB,QAAc;AACtB,2BAAI,QAAQ,EAAI;AAGQ,YAAtB,AAAa,YAAD;AACZ;;AAEF,cAAI,yBAAmB;AAC8B,YAAnD,WAAM;;AAEsB,UAA9B,wBAAkB,YAAY;AACK,UAAnC,AAAkB,4BAAI,YAAY;AACX,UAAvB;;;IAGN;;AAGmC,MAAjC,AAAmB;AAEnB,UAAI,yBAAmB;AACrB,YAA6B,mBAAzB,AAAgB;AACqB,UAAd,UAAzB,AAAgB,yCAAiB;;;IAGvC;;qDAjGsB,sBAA2B,oBACxC;IA5BH,0BAAoB;IAET;IACZ,sBAAgB;IAWR;IACR;IACA,qBAAe;IACH;IACZ,wBAAkB;IAChB;IACF,sBAAgB;IAOC;IAA2B;IACxC;;EAAiB","file":"dynamic_component.ddc.js"}');
  // Exports:
  return {
    dynamic_component__dynamic_component: dynamic_component
  };
}));

//# sourceMappingURL=dynamic_component.ddc.js.map
