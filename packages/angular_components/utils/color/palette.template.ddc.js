define(['dart_sdk', 'packages/angular_components/utils/color/material.template'], (function load__packages__angular_components__utils__color__palette_template(dart_sdk, packages__angular_components__utils__color__material$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material$46template = packages__angular_components__utils__color__material$46template.utils__color__material$46template;
  var palette$46template = Object.create(dart.library);
  const CT = Object.create(null);
  palette$46template.initReflector = function initReflector() {
    if (dart.test(palette$46template._visited)) {
      return;
    }
    palette$46template._visited = true;
    material$46template.initReflector();
    material$46template.initReflector();
  };
  dart.defineLazy(palette$46template, {
    /*palette$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/utils/color/palette.template", {
    "package:angular_components/utils/color/palette.template.dart": palette$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["palette.template.dart"],"names":[],"mappings":";;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,8BAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,2BAAQ;YAAG","file":"palette.template.ddc.js"}');
  // Exports:
  return {
    utils__color__palette$46template: palette$46template
  };
}));

//# sourceMappingURL=palette.template.ddc.js.map
