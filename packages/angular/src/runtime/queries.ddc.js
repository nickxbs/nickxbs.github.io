define(['dart_sdk'], (function load__packages__angular__src__runtime__queries(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var queries = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $addAll = dartx.addAll;
  var $isNotEmpty = dartx.isNotEmpty;
  var $first = dartx.first;
  const CT = Object.create(null);
  queries.flattenNodes = function flattenNodes(T, nodes) {
    let result = _interceptors.JSArray$(dart.legacy(T)).of([]);
    for (let i = 0, l = nodes[$length]; i < dart.notNull(l); i = i + 1) {
      result[$addAll](nodes[$_get](i));
    }
    return result;
  };
  queries.firstOrNull = function firstOrNull(T, items) {
    return dart.test(items[$isNotEmpty]) ? items[$first] : null;
  };
  dart.trackLibraries("packages/angular/src/runtime/queries", {
    "package:angular/src/runtime/queries.dart": queries
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["queries.dart"],"names":[],"mappings":";;;;;;;;;;;;;kDAGsC;AAC9B,iBAAY;AAClB,aAAS,IAAI,GAAG,IAAI,AAAM,KAAD,WAAS,AAAE,CAAD,gBAAG,CAAC,GAAE,IAAA,AAAC,CAAA;AACjB,MAAvB,AAAO,MAAD,UAAQ,AAAK,KAAA,QAAC,CAAC;;AAEvB,UAAO,OAAM;EACf;gDAGyB;AAAU,qBAAA,AAAM,KAAD,iBAAc,AAAM,KAAD,WAAS;EAAI","file":"queries.ddc.js"}');
  // Exports:
  return {
    src__runtime__queries: queries
  };
}));

//# sourceMappingURL=queries.ddc.js.map
