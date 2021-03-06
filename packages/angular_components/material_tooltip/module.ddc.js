define(['dart_sdk', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/utils/disposer/disposer'], (function load__packages__angular_components__material_tooltip__module(dart_sdk, packages__angular_components__src__material_tooltip__tooltip_controller, packages__angular__src__core__change_detection__change_detection, packages__angular_components__utils__disposer__disposer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tooltip_controller = packages__angular_components__src__material_tooltip__tooltip_controller.src__material_tooltip__tooltip_controller;
  const providers = packages__angular__src__core__change_detection__change_detection.src__di__providers;
  const module = packages__angular__src__core__change_detection__change_detection.src__di__module;
  const decorators = packages__angular__src__core__change_detection__change_detection.src__core__di__decorators;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  var module$ = Object.create(dart.library);
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var TooltipControllerL = () => (TooltipControllerL = dart.constFn(dart.legacy(tooltip_controller.TooltipController)))();
  var ClassProviderL = () => (ClassProviderL = dart.constFn(dart.legacy(providers.ClassProvider)))();
  var ModuleL = () => (ModuleL = dart.constFn(dart.legacy(module.Module)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var DisposerL = () => (DisposerL = dart.constFn(dart.legacy(disposer.Disposer)))();
  var TooltipControllerLAndDisposerLToTooltipControllerL = () => (TooltipControllerLAndDisposerLToTooltipControllerL = dart.constFn(dart.fnType(TooltipControllerL(), [TooltipControllerL(), DisposerL()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.wrapType(TooltipControllerL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: providers.ClassProvider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C2 || CT.C2,
        [Provider_token]: C2 || CT.C2
      });
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1], ClassProviderL());
    },
    get C4() {
      return C4 = dart.constList([], ModuleL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: module.Module.prototype,
        [Module_provide]: C0 || CT.C0,
        [Module_include]: C4 || CT.C4
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: decorators.Optional.prototype
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: decorators.SkipSelf.prototype
      });
    },
    get C7() {
      return C7 = dart.constList([C2 || CT.C2, C8 || CT.C8, C9 || CT.C9], ObjectL());
    },
    get C11() {
      return C11 = dart.wrapType(DisposerL());
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C8 || CT.C8], ObjectL());
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C10 || CT.C10], ObjectL());
    },
    get C12() {
      return C12 = dart.fn(module$.createTooltipController, TooltipControllerLAndDisposerLToTooltipControllerL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: C6 || CT.C6,
        [Provider_useFactory]: C12 || CT.C12,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C2 || CT.C2
      });
    }
  }, false);
  module$.createTooltipController = function createTooltipController(controller, disposer) {
    let t0;
    if (controller != null) return controller;
    if (module$._singletonController != null) return module$._singletonController;
    module$._singletonController = new tooltip_controller.TooltipController.new();
    t0 = disposer;
    t0 == null ? null : t0.addFunction(dart.fn(() => {
      module$._singletonController = null;
    }, VoidToNullN()));
    return module$._singletonController;
  };
  var Provider_multi = dart.privateName(providers, "Provider.multi");
  var Provider_deps = dart.privateName(providers, "Provider.deps");
  var Provider_useFactory = dart.privateName(providers, "Provider.useFactory");
  var Provider_useExisting = dart.privateName(providers, "Provider.useExisting");
  var Provider_useValue = dart.privateName(providers, "Provider.useValue");
  var C2;
  var Provider_useClass = dart.privateName(providers, "Provider.useClass");
  var Provider_token = dart.privateName(providers, "Provider.token");
  var C1;
  var C0;
  var Module_provide = dart.privateName(module, "Module.provide");
  var C4;
  var Module_include = dart.privateName(module, "Module.include");
  var C3;
  var C8;
  var C9;
  var C7;
  var C11;
  var C10;
  var C6;
  var C12;
  var C5;
  dart.defineLazy(module$, {
    /*module$.materialTooltipBindings*/get materialTooltipBindings() {
      return C0 || CT.C0;
    },
    /*module$.materialTooltipModule*/get materialTooltipModule() {
      return C3 || CT.C3;
    },
    /*module$.tooltipControllerBinding*/get tooltipControllerBinding() {
      return C5 || CT.C5;
    },
    /*module$._singletonController*/get _singletonController() {
      return null;
    },
    set _singletonController(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/material_tooltip/module", {
    "package:angular_components/material_tooltip/module.dart": module$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;qEAoC8C,YACrB;;AAGvB,QAAI,UAAU,IAAI,MAAM,MAAO,WAAU;AAEzC,QAAI,gCAAwB,MAAM,MAAO;AAEC,IAA1C,+BAAuB;AAGrB,SAFF,QAAQ;iBAAR,OAAU,eAAY;AACO,MAA3B,+BAAuB;;AAEzB,UAAO;EACT;;;;;;;;;;;;;;;;;;;;;;;;MAzCM,+BAAuB;;;MAEvB,6BAAqB;;;MAWrB,gCAAwB;;;MAWZ,4BAAoB","file":"module.ddc.js"}');
  // Exports:
  return {
    material_tooltip__module: module$
  };
}));

//# sourceMappingURL=module.ddc.js.map
