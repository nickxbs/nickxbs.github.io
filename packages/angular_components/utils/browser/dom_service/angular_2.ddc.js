define(['dart_sdk', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/browser/dom_service/dom_service_webdriver_testability', 'packages/angular/experimental', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/utils/disposer/disposer'], (function load__packages__angular_components__utils__browser__dom_service__angular_2(dart_sdk, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__utils__browser__dom_service__dom_service_webdriver_testability, packages__angular__experimental, packages__angular__src__core__change_detection__change_detection, packages__angular_components__utils__disposer__disposer) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const dom_service_webdriver_testability = packages__angular_components__utils__browser__dom_service__dom_service_webdriver_testability.utils__browser__dom_service__dom_service_webdriver_testability;
  const experimental = packages__angular__experimental.experimental;
  const providers = packages__angular__src__core__change_detection__change_detection.src__di__providers;
  const decorators = packages__angular__src__core__change_detection__change_detection.src__core__di__decorators;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const module = packages__angular__src__core__change_detection__change_detection.src__di__module;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  var angular_2 = Object.create(dart.library);
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var VoidToboolL = () => (VoidToboolL = dart.constFn(dart.fnType(boolL(), [])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var DisposerL = () => (DisposerL = dart.constFn(dart.legacy(disposer.Disposer)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var WindowL = () => (WindowL = dart.constFn(dart.legacy(html.Window)))();
  var DomServiceLAndDisposerLAndNgZoneL__ToDomServiceL = () => (DomServiceLAndDisposerLAndNgZoneL__ToDomServiceL = dart.constFn(dart.fnType(DomServiceL(), [DomServiceL(), DisposerL(), NgZoneL(), WindowL()])))();
  var ProviderOfObjectL = () => (ProviderOfObjectL = dart.constFn(providers.Provider$(ObjectL())))();
  var ProviderLOfObjectL = () => (ProviderLOfObjectL = dart.constFn(dart.legacy(ProviderOfObjectL())))();
  var ModuleL = () => (ModuleL = dart.constFn(dart.legacy(module.Module)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(experimental.isDomRenderDirty, VoidToboolL());
    },
    get C1() {
      return C1 = dart.fn(experimental.resetDomRenderDirty, VoidTovoid());
    },
    get C5() {
      return C5 = dart.wrapType(DomServiceL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: decorators.Optional.prototype
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: decorators.SkipSelf.prototype
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], ObjectL());
    },
    get C9() {
      return C9 = dart.wrapType(DisposerL());
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C6 || CT.C6], ObjectL());
    },
    get C10() {
      return C10 = dart.wrapType(NgZoneL());
    },
    get C11() {
      return C11 = dart.wrapType(WindowL());
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C8 || CT.C8, C10 || CT.C10, C11 || CT.C11], ObjectL());
    },
    get C12() {
      return C12 = dart.fn(angular_2.createDomService, DomServiceLAndDisposerLAndNgZoneL__ToDomServiceL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: C3 || CT.C3,
        [Provider_useFactory]: C12 || CT.C12,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C5 || CT.C5
      });
    },
    get C14() {
      return C14 = dart.constList([C2 || CT.C2], ProviderLOfObjectL());
    },
    get C15() {
      return C15 = dart.constList([], ModuleL());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: module.Module.prototype,
        [Module_provide]: C14 || CT.C14,
        [Module_include]: C15 || CT.C15
      });
    }
  }, false);
  var C0;
  var C1;
  angular_2.createDomService = function createDomService(service, disposer, zone, window) {
    let t0;
    if (service != null) return service;
    if (angular_2._singletonService != null) return angular_2._singletonService;
    angular_2._singletonService = new dom_service.DomService.new(zone, window);
    dom_service_webdriver_testability.createDomServiceWebdriverTestability(angular_2._singletonService).register();
    t0 = disposer;
    t0 == null ? null : t0.addFunction(dart.fn(() => {
      angular_2._singletonService = null;
    }, VoidToNullN()));
    return angular_2._singletonService;
  };
  angular_2.setupAcxRootDomRenderer = function setupAcxRootDomRenderer(appInjector) {
    let t0;
    t0 = appInjector.get(dart.wrapType(DomServiceL()));
    (() => {
      dart.dput(t0, 'isDomMutatedPredicate', C0 || CT.C0);
      dart.dput(t0, 'resetIsDomMutated', C1 || CT.C1);
      dart.dsend(t0, 'init', []);
      return t0;
    })();
  };
  var Provider_multi = dart.privateName(providers, "Provider.multi");
  var C5;
  var C6;
  var C7;
  var C4;
  var C9;
  var C8;
  var C10;
  var C11;
  var C3;
  var Provider_deps = dart.privateName(providers, "Provider.deps");
  var C12;
  var Provider_useFactory = dart.privateName(providers, "Provider.useFactory");
  var Provider_useExisting = dart.privateName(providers, "Provider.useExisting");
  var Provider_useValue = dart.privateName(providers, "Provider.useValue");
  var Provider_useClass = dart.privateName(providers, "Provider.useClass");
  var Provider_token = dart.privateName(providers, "Provider.token");
  var C2;
  var C14;
  var Module_provide = dart.privateName(module, "Module.provide");
  var C15;
  var Module_include = dart.privateName(module, "Module.include");
  var C13;
  dart.defineLazy(angular_2, {
    /*angular_2.domServiceBinding*/get domServiceBinding() {
      return C2 || CT.C2;
    },
    /*angular_2.domServiceModule*/get domServiceModule() {
      return C13 || CT.C13;
    },
    /*angular_2._singletonService*/get _singletonService() {
      return null;
    },
    set _singletonService(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/utils/browser/dom_service/angular_2", {
    "package:angular_components/utils/browser/dom_service/angular_2.dart": angular_2
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["angular_2.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yDAyC+D,SACtC,UAAiB,MAAa;;AAGrD,QAAI,OAAO,IAAI,MAAM,MAAO,QAAO;AAEnC,QAAI,+BAAqB,MAAM,MAAO;AAEM,IAA5C,8BAAoB,+BAAW,IAAI,EAAE,MAAM;AAEuB,IAAlE,AAAwD,uEAAnB;AAInC,SAFF,QAAQ;iBAAR,OAAU,eAAY;AACI,MAAxB,8BAAoB;;AAEtB,UAAO;EACT;uEAIsC;;AAI1B,SAHV,AAAY,WAAD,KAAK;IAAJ;AACR;AACA;AACA;;;EACN;;;;;;;;;;;;;;;;;;;;;;;;;MA3CM,2BAAiB;;;MAYjB,0BAAgB;;;MAGX,2BAAiB","file":"angular_2.ddc.js"}');
  // Exports:
  return {
    utils__browser__dom_service__angular_2: angular_2
  };
}));

//# sourceMappingURL=angular_2.ddc.js.map
