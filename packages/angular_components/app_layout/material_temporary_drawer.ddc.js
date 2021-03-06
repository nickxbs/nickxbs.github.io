define(['dart_sdk', 'packages/angular_components/app_layout/material_drawer_base'], (function load__packages__angular_components__app_layout__material_temporary_drawer(dart_sdk, packages__angular_components__app_layout__material_drawer_base) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_drawer_base = packages__angular_components__app_layout__material_drawer_base.app_layout__material_drawer_base;
  var material_temporary_drawer = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/app_layout/material_temporary_drawer.dart";
  material_temporary_drawer.MaterialTemporaryDrawerComponent = class MaterialTemporaryDrawerComponent extends material_drawer_base.MaterialDrawerBase {
    get hostMatDrawerCollapsed() {
      return !dart.test(this.visible);
    }
    get hostMatDrawerExpanded() {
      return this.visible;
    }
    toggle() {
      return super.toggle();
    }
  };
  (material_temporary_drawer.MaterialTemporaryDrawerComponent.new = function() {
    material_temporary_drawer.MaterialTemporaryDrawerComponent.__proto__.new.call(this, {visible: false});
    ;
  }).prototype = material_temporary_drawer.MaterialTemporaryDrawerComponent.prototype;
  dart.addTypeTests(material_temporary_drawer.MaterialTemporaryDrawerComponent);
  dart.addTypeCaches(material_temporary_drawer.MaterialTemporaryDrawerComponent);
  dart.setGetterSignature(material_temporary_drawer.MaterialTemporaryDrawerComponent, () => ({
    __proto__: dart.getGetters(material_temporary_drawer.MaterialTemporaryDrawerComponent.__proto__),
    hostMatDrawerCollapsed: dart.legacy(core.bool),
    hostMatDrawerExpanded: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(material_temporary_drawer.MaterialTemporaryDrawerComponent, L0);
  dart.trackLibraries("packages/angular_components/app_layout/material_temporary_drawer", {
    "package:angular_components/app_layout/material_temporary_drawer.dart": material_temporary_drawer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_temporary_drawer.dart"],"names":[],"mappings":";;;;;;;;;;;AA2BqC,wBAAC;IAAO;;AAGT;IAAO;;AAMxB,YAAM;IAAQ;;;AAZM,kGAAe;;EAAM","file":"material_temporary_drawer.ddc.js"}');
  // Exports:
  return {
    app_layout__material_temporary_drawer: material_temporary_drawer
  };
}));

//# sourceMappingURL=material_temporary_drawer.ddc.js.map
