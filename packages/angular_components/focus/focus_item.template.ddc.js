define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_components/focus/focus_item', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template'], (function load__packages__angular_components__focus__focus_item_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__directive_change_detector, packages__angular_components__focus__focus_item, packages__angular__angular$46template, packages__angular_components__focus__focus$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const directive_change_detector = packages__angular__src__core__change_detection__directive_change_detector.src__core__change_detection__directive_change_detector;
  const focus_item = packages__angular_components__focus__focus_item.focus__focus_item;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const focus$46template = packages__angular_components__focus__focus$46template.focus__focus$46template;
  var focus_item$46template = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/focus/focus_item.template.dart";
  var _expr_1 = dart.privateName(focus_item$46template, "_expr_1");
  var instance$ = dart.privateName(focus_item$46template, "FocusItemDirectiveNgCd.instance");
  focus_item$46template.FocusItemDirectiveNgCd = class FocusItemDirectiveNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let firstCheck = view.cdState === 0;
      if (firstCheck) {
        if (this.instance.role != null) {
          dom_helpers.updateAttribute(el, "role", this.instance.role);
        }
      }
      let currVal_1 = this.instance.tabIndex;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateAttribute(el, "tabindex", currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
  };
  (focus_item$46template.FocusItemDirectiveNgCd.new = function(instance) {
    this[_expr_1] = null;
    this[instance$] = instance;
    focus_item$46template.FocusItemDirectiveNgCd.__proto__.new.call(this);
    ;
  }).prototype = focus_item$46template.FocusItemDirectiveNgCd.prototype;
  dart.addTypeTests(focus_item$46template.FocusItemDirectiveNgCd);
  dart.addTypeCaches(focus_item$46template.FocusItemDirectiveNgCd);
  dart.setMethodSignature(focus_item$46template.FocusItemDirectiveNgCd, () => ({
    __proto__: dart.getMethods(focus_item$46template.FocusItemDirectiveNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [dart.legacy(app_view.AppView), dart.legacy(html.Element)])
  }));
  dart.setLibraryUri(focus_item$46template.FocusItemDirectiveNgCd, L0);
  dart.setFieldSignature(focus_item$46template.FocusItemDirectiveNgCd, () => ({
    __proto__: dart.getFields(focus_item$46template.FocusItemDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(dart.legacy(focus_item.FocusItemDirective)),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  focus_item$46template.initReflector = function initReflector() {
    if (dart.test(focus_item$46template._visited)) {
      return;
    }
    focus_item$46template._visited = true;
    angular$46template.initReflector();
    focus$46template.initReflector();
  };
  dart.defineLazy(focus_item$46template, {
    /*focus_item$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular_components/focus/focus_item.template", {
    "package:angular_components/focus/focus_item.template.dart": focus_item$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["focus_item.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAgBmC;;;;;;sBAGO,MAAsB;AACvD,uBAAc,AAAK,AAAQ,IAAT,aAAY;AACnC,UAAI,UAAU;AACZ,YAAe,AAAS,sBAAM;AACsB,UAAlD,4BAAwB,EAAE,EAAE,QAAQ,AAAS;;;AAG3C,sBAAY,AAAS;AAC3B,oBAAI,4BAAqB,eAAS,SAAS;AACS,QAAlD,4BAAwB,EAAE,EAAE,YAAY,SAAS;AAC9B,QAAnB,gBAAU,SAAS;;IAEvB;;+DAb4B;IADxB;IACwB;AAA5B;;EAAqC;;;;;;;;;;;;;;AAkBrC,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,8BAAQ;YAAG","file":"focus_item.template.ddc.js"}');
  // Exports:
  return {
    focus__focus_item$46template: focus_item$46template
  };
}));

//# sourceMappingURL=focus_item.template.ddc.js.map
