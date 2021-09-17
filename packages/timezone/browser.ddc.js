define(['dart_sdk', 'packages/timezone/src/env'], (function load__packages__timezone__browser(dart_sdk, packages__timezone__src__env) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const env = packages__timezone__src__env.src__env;
  const exceptions = packages__timezone__src__env.src__exceptions;
  var browser = Object.create(dart.library);
  var $response = dartx.response;
  var $asUint8List = dartx.asUint8List;
  var $runtimeType = dartx.runtimeType;
  var $toString = dartx.toString;
  var ByteBufferL = () => (ByteBufferL = dart.constFn(dart.legacy(typed_data.ByteBuffer)))();
  var HttpRequestL = () => (HttpRequestL = dart.constFn(dart.legacy(html.HttpRequest)))();
  var HttpRequestLToNullN = () => (HttpRequestLToNullN = dart.constFn(dart.fnType(core.Null, [HttpRequestL()])))();
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var TimeZoneInitExceptionL = () => (TimeZoneInitExceptionL = dart.constFn(dart.legacy(exceptions.TimeZoneInitException)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ObjectLToboolL = () => (ObjectLToboolL = dart.constFn(dart.fnType(boolL(), [ObjectL()])))();
  const CT = Object.create(null);
  browser.initializeTimeZone = function initializeTimeZone(path = "packages/timezone/data/latest.tzf") {
    return html.HttpRequest.request(path, {method: "GET", responseType: "arraybuffer", mimeType: "application/octet-stream"}).then(core.Null, dart.fn(req => {
      let response = req[$response];
      if (ByteBufferL().is(response)) {
        env.initializeDatabase(response[$asUint8List]());
      } else {
        dart.throw(new exceptions.TimeZoneInitException.new("Invalid response type: " + dart.str(dart.runtimeType(response))));
      }
    }, HttpRequestLToNullN())).catchError(dart.fn(e => {
      dart.throw(new exceptions.TimeZoneInitException.new(dart.toString(e)));
    }, dynamicToNullN()), {test: dart.fn(e => !TimeZoneInitExceptionL().is(e), ObjectLToboolL())});
  };
  dart.defineLazy(browser, {
    /*browser.tzDataDefaultPath*/get tzDataDefaultPath() {
      return "packages/timezone/data/latest.tzf";
    }
  }, true);
  dart.trackLibraries("packages/timezone/browser", {
    "package:timezone/browser.dart": browser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["browser.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;2DA6CwC;AACtC,UAAmB,AAId,AASF,0BAbwB,IAAI,WACf,qBACM,yBACJ,6CACR,QAAC;AACH,qBAAW,AAAI,GAAD;AAEpB,UAAa,iBAAT,QAAQ;AACgC,QAA1C,uBAAmB,AAAS,QAAD;;AAG0B,QADrD,WAAM,yCACF,AAAgD,qCAAb,iBAAT,QAAQ;;0CAE5B,QAAS;AACoB,MAAzC,WAAM,yCAAwB,cAAF,CAAC;iCACtB,QAAC,KAAU,CAAF,4BAAF,CAAC;EACnB;;MAhCa,yBAAiB","file":"browser.ddc.js"}');
  // Exports:
  return {
    browser: browser
  };
}));

//# sourceMappingURL=browser.ddc.js.map
