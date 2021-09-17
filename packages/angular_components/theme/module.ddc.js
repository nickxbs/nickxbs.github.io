define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection'], (function load__packages__angular_components__theme__module(dart_sdk, packages__angular__src__core__change_detection__change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  var module = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    }
  }, false);
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C0;
  dart.defineLazy(module, {
    /*module.darkThemeToken*/get darkThemeToken() {
      return C0 || CT.C0;
    }
  }, true);
  dart.trackLibraries("packages/angular_components/theme/module", {
    "package:angular_components/theme/module.dart": module
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;MAOM,qBAAc","file":"module.ddc.js"}');
  // Exports:
  return {
    theme__module: module
  };
}));

//# sourceMappingURL=module.ddc.js.map
