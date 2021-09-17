define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_components/app_layout/material_persistent_drawer', 'packages/angular_components/app_layout/material_drawer_base.template', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content_aware.template'], (function load__packages__angular_components__app_layout__material_persistent_drawer_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__directive_change_detector, packages__angular_components__app_layout__material_persistent_drawer, packages__angular_components__app_layout__material_drawer_base$46template, packages__angular__angular$46template, packages__angular_components__content__deferred_content_aware$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const directive_change_detector = packages__angular__src__core__change_detection__directive_change_detector.src__core__change_detection__directive_change_detector;
  const material_persistent_drawer = packages__angular_components__app_layout__material_persistent_drawer.app_layout__material_persistent_drawer;
  const material_drawer_base$46template = packages__angular_components__app_layout__material_drawer_base$46template.app_layout__material_drawer_base$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const deferred_content_aware$46template = packages__angular_components__content__deferred_content_aware$46template.content__deferred_content_aware$46template;
  var material_persistent_drawer$46template = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/app_layout/material_persistent_drawer.template.dart";
  var _expr_0 = dart.privateName(material_persistent_drawer$46template, "_expr_0");
  var _expr_1 = dart.privateName(material_persistent_drawer$46template, "_expr_1");
  var instance$ = dart.privateName(material_persistent_drawer$46template, "MaterialPersistentDrawerDirectiveNgCd.instance");
  material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd = class MaterialPersistentDrawerDirectiveNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.hostMatDrawerCollapsed;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateClassBindingNonHtml(el, "mat-drawer-collapsed", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = this.instance.hostMatDrawerExpanded;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBindingNonHtml(el, "mat-drawer-expanded", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
  };
  (material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[instance$] = instance;
    material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd.__proto__.new.call(this);
    ;
  }).prototype = material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd.prototype;
  dart.addTypeTests(material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd);
  dart.addTypeCaches(material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd);
  dart.setMethodSignature(material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd, () => ({
    __proto__: dart.getMethods(material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [dart.legacy(app_view.AppView), dart.legacy(html.Element)])
  }));
  dart.setLibraryUri(material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd, L0);
  dart.setFieldSignature(material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd, () => ({
    __proto__: dart.getFields(material_persistent_drawer$46template.MaterialPersistentDrawerDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(dart.legacy(material_persistent_drawer.MaterialPersistentDrawerDirective)),
    [_expr_0]: dart.fieldType(dart.legacy(core.bool)),
    [_expr_1]: dart.fieldType(dart.legacy(core.bool))
  }));
  material_persistent_drawer$46template.initReflector = function initReflector() {
    if (dart.test(material_persistent_drawer$46template._visited)) {
      return;
    }
    material_persistent_drawer$46template._visited = true;
    material_drawer_base$46template.initReflector();
    angular$46template.initReflector();
    deferred_content_aware$46template.initReflector();
  };
  dart.defineLazy(material_persistent_drawer$46template, {
    /*material_persistent_drawer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/app_layout/material_persistent_drawer.template", {
    "package:angular_components/app_layout/material_persistent_drawer.template.dart": material_persistent_drawer$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_persistent_drawer.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IAiBkD;;;;;;sBAIR,MAAsB;AACtD,sBAAY,AAAS;AAC3B,oBAAI,4BAAqB,eAAS,SAAS;AAC+B,QAAxE,sCAAkC,EAAE,EAAE,wBAAwB,SAAS;AACpD,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAS;AAC3B,oBAAI,4BAAqB,eAAS,SAAS;AAC8B,QAAvE,sCAAkC,EAAE,EAAE,uBAAuB,SAAS;AACnD,QAAnB,gBAAU,SAAS;;IAEvB;;8FAZ2C;IAFtC;IACA;IACsC;AAA3C;;EAAoD;;;;;;;;;;;;;;;AAiBpD,kBAAI;AACF;;AAEa,IAAf,iDAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,8CAAQ;YAAG","file":"material_persistent_drawer.template.ddc.js"}');
  // Exports:
  return {
    app_layout__material_persistent_drawer$46template: material_persistent_drawer$46template
  };
}));

//# sourceMappingURL=material_persistent_drawer.template.ddc.js.map
