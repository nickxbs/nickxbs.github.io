define(['dart_sdk', 'packages/angular_components/framework_stabilizers/testability', 'packages/angular_components/utils/browser/dom_service/dom_service'], (function load__packages__angular_components__utils__browser__dom_service__dom_service_webdriver_testability(dart_sdk, packages__angular_components__framework_stabilizers__testability, packages__angular_components__utils__browser__dom_service__dom_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const testability = packages__angular_components__framework_stabilizers__testability.framework_stabilizers__testability;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  var dom_service_webdriver_testability = Object.create(dart.library);
  var dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/utils/browser/dom_service/dom_service_webdriver_testability.dart";
  var _domService$ = dart.privateName(dom_service_webdriver_testability, "_domService");
  dom_service_webdriver_testability.DomServiceWebdriverTestability = class DomServiceWebdriverTestability extends testability.AbstractTestability {
    get isStable() {
      return this[_domService$].isStable;
    }
  };
  (dom_service_webdriver_testability.DomServiceWebdriverTestability.__ = function(_domService) {
    this[_domService$] = _domService;
    dom_service_webdriver_testability.DomServiceWebdriverTestability.__proto__.new.call(this);
    this[_domService$].onQueuesProcessed.listen(dart.fn(_ => this.checkStable(), dynamicTovoid()));
  }).prototype = dom_service_webdriver_testability.DomServiceWebdriverTestability.prototype;
  dart.addTypeTests(dom_service_webdriver_testability.DomServiceWebdriverTestability);
  dart.addTypeCaches(dom_service_webdriver_testability.DomServiceWebdriverTestability);
  dart.setGetterSignature(dom_service_webdriver_testability.DomServiceWebdriverTestability, () => ({
    __proto__: dart.getGetters(dom_service_webdriver_testability.DomServiceWebdriverTestability.__proto__),
    isStable: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(dom_service_webdriver_testability.DomServiceWebdriverTestability, L0);
  dart.setFieldSignature(dom_service_webdriver_testability.DomServiceWebdriverTestability, () => ({
    __proto__: dart.getFields(dom_service_webdriver_testability.DomServiceWebdriverTestability.__proto__),
    [_domService$]: dart.finalFieldType(dart.legacy(dom_service.DomService))
  }));
  dom_service_webdriver_testability.createDomServiceWebdriverTestability = function createDomServiceWebdriverTestability(domService) {
    if (dart.test(testability.testabilitiesEnabled)) {
      return new dom_service_webdriver_testability.DomServiceWebdriverTestability.__(domService);
    }
    return new testability.NullTestability.new();
  };
  dart.trackLibraries("packages/angular_components/utils/browser/dom_service/dom_service_webdriver_testability", {
    "package:angular_components/utils/browser/dom_service/dom_service_webdriver_testability.dart": dom_service_webdriver_testability
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dom_service_webdriver_testability.dart"],"names":[],"mappings":";;;;;;;;;;;;;;AAwBuB,YAAA,AAAY;IAAQ;;;IALH;AAAtC;AAC4D,IAA1D,AAAY,AAAkB,4CAAO,QAAC,KAAM;EAC9C;;;;;;;;;;;;yHAd0D;AAC1D,kBAAI;AACF,YAAsC,yEAAE,UAAU;;AAEpD,UAAO;EACT","file":"dom_service_webdriver_testability.ddc.js"}');
  // Exports:
  return {
    utils__browser__dom_service__dom_service_webdriver_testability: dom_service_webdriver_testability
  };
}));

//# sourceMappingURL=dom_service_webdriver_testability.ddc.js.map
