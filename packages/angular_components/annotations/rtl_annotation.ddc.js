define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection'], (function load__packages__angular_components__annotations__rtl_annotation(dart_sdk, packages__angular__src__core__change_detection__change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const providers = packages__angular__src__core__change_detection__change_detection.src__di__providers;
  var rtl_annotation = Object.create(dart.library);
  var HtmlDocumentL = () => (HtmlDocumentL = dart.constFn(dart.legacy(html.HtmlDocument)))();
  var DocumentL = () => (DocumentL = dart.constFn(dart.legacy(html.Document)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var DocumentLToboolL = () => (DocumentLToboolL = dart.constFn(dart.fnType(boolL(), [DocumentL()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "isRtl"
      });
    },
    get C3() {
      return C3 = dart.wrapType(DocumentL());
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3], ObjectL());
    },
    get C4() {
      return C4 = dart.fn(rtl_annotation.determineRtl, DocumentLToboolL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: providers.FactoryProvider.prototype,
        [Provider_multi]: null,
        [Provider_deps]: C2 || CT.C2,
        [Provider_useFactory]: C4 || CT.C4,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C0 || CT.C0
      });
    }
  }, false);
  rtl_annotation.determineRtl = function determineRtl(document) {
    return document.documentElement.dir === "rtl" || HtmlDocumentL().as(document).body.dir === "rtl";
  };
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C0;
  var Provider_multi = dart.privateName(providers, "Provider.multi");
  var C3;
  var C2;
  var Provider_deps = dart.privateName(providers, "Provider.deps");
  var C4;
  var Provider_useFactory = dart.privateName(providers, "Provider.useFactory");
  var Provider_useExisting = dart.privateName(providers, "Provider.useExisting");
  var Provider_useValue = dart.privateName(providers, "Provider.useValue");
  var Provider_useClass = dart.privateName(providers, "Provider.useClass");
  var Provider_token = dart.privateName(providers, "Provider.token");
  var C1;
  dart.defineLazy(rtl_annotation, {
    /*rtl_annotation.rtlToken*/get rtlToken() {
      return C0 || CT.C0;
    },
    /*rtl_annotation.rtlProvider*/get rtlProvider() {
      return C1 || CT.C1;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/annotations/rtl_annotation", {
    "package:angular_components/annotations/rtl_annotation.dart": rtl_annotation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["rtl_annotation.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;sDAoB2B;AACvB,UAAA,AAAS,AAAgB,AAAI,AAAS,SAA9B,yBAAwB,SACtB,AAAiB,AAAK,AAAI,mBAAnC,QAAQ,eAA8B;EAAK;;;;;;;;;;;;;;;MAR1C,uBAAQ;;;MAER,0BAAW","file":"rtl_annotation.ddc.js"}');
  // Exports:
  return {
    annotations__rtl_annotation: rtl_annotation
  };
}));

//# sourceMappingURL=rtl_annotation.ddc.js.map
