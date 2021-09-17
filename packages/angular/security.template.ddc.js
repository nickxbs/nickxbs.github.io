define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/angular.template'], (function load__packages__angular__security_template(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__angular$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dom_sanitization_service$46template = packages__angular__src__bootstrap__modules.src__security__dom_sanitization_service$46template;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  var security$46template = Object.create(dart.library);
  var safe_inner_html$46template = Object.create(dart.library);
  const CT = Object.create(null);
  security$46template.initReflector = function initReflector() {
    if (dart.test(security$46template._visited)) {
      return;
    }
    security$46template._visited = true;
    dom_sanitization_service$46template.initReflector();
    safe_inner_html$46template.initReflector();
  };
  dart.defineLazy(security$46template, {
    /*security$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  safe_inner_html$46template.initReflector = function initReflector$() {
    if (dart.test(safe_inner_html$46template._visited)) {
      return;
    }
    safe_inner_html$46template._visited = true;
    angular$46template.initReflector();
    security$46template.initReflector();
  };
  dart.defineLazy(safe_inner_html$46template, {
    /*safe_inner_html$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.trackLibraries("packages/angular/security.template", {
    "package:angular/security.template.dart": security$46template,
    "package:angular/src/security/safe_inner_html.template.dart": safe_inner_html$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["security.template.dart","src/security/safe_inner_html.template.dart"],"names":[],"mappings":";;;;;;;;;;;AAWE,kBAAI;AACF;;AAEa,IAAf,+BAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,4BAAQ;YAAG;;;;;ACEb,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,mCAAQ;YAAG","file":"security.template.ddc.js"}');
  // Exports:
  return {
    security$46template: security$46template,
    src__security__safe_inner_html$46template: safe_inner_html$46template
  };
}));

//# sourceMappingURL=security.template.ddc.js.map
