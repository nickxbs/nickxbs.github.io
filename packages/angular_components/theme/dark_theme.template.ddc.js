define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/theme/dark_theme', 'packages/angular/angular.template', 'packages/angular_components/theme/module.template'], (function load__packages__angular_components__theme__dark_theme_template(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular_components__theme__dark_theme, packages__angular__angular$46template, packages__angular_components__theme__module$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const decorators = packages__angular__src__core__change_detection__change_detection.src__core__di__decorators;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const dark_theme = packages__angular_components__theme__dark_theme.theme__dark_theme;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const module$46template = packages__angular_components__theme__module$46template.theme__module$46template;
  var dark_theme$46template = Object.create(dart.library);
  var AcxDarkThemeL = () => (AcxDarkThemeL = dart.constFn(dart.legacy(dark_theme.AcxDarkTheme)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var boolLToAcxDarkThemeL = () => (boolLToAcxDarkThemeL = dart.constFn(dart.fnType(AcxDarkThemeL(), [boolL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C3() {
      return C3 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "acxDarkTheme"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: decorators.Inject.prototype,
        [Inject_token]: C3 || CT.C3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: decorators.Optional.prototype
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C4 || CT.C4], ObjectL());
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1], ListLOfObjectL());
    }
  }, false);
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C3;
  var Inject_token = dart.privateName(decorators, "Inject.token");
  var C2;
  var C4;
  var C1;
  var C0;
  dark_theme$46template.initReflector = function initReflector() {
    if (dart.test(dark_theme$46template._visited)) {
      return;
    }
    dark_theme$46template._visited = true;
    reflector.registerFactory(dart.wrapType(AcxDarkThemeL()), dart.fn(p0 => new dark_theme.AcxDarkTheme.new(p0), boolLToAcxDarkThemeL()));
    reflector.registerDependencies(dart.wrapType(AcxDarkThemeL()), C0 || CT.C0);
    angular$46template.initReflector();
    module$46template.initReflector();
  };
  dart.defineLazy(dark_theme$46template, {
    /*dark_theme$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/theme/dark_theme.template", {
    "package:angular_components/theme/dark_theme.template.dart": dark_theme$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dark_theme.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAaE,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAEwD,IAAnE,0BAAuB,gCAAc,QAAM,MAAO,gCAAa,EAAE;AAG/D,IAFF,+BAA4B;AAGP,IAArB;AACqB,IAArB;EACF;;MAbI,8BAAQ;YAAG","file":"dark_theme.template.ddc.js"}');
  // Exports:
  return {
    theme__dark_theme$46template: dark_theme$46template
  };
}));

//# sourceMappingURL=dark_theme.template.ddc.js.map
