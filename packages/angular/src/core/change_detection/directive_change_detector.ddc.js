define(['dart_sdk', 'packages/angular/src/core/application_tokens', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules'], (function load__packages__angular__src__core__change_detection__directive_change_detector(dart_sdk, packages__angular__src__core__application_tokens, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules) {
  'use strict';
  const core = dart_sdk.core;
  const js_util = dart_sdk.js_util;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const component_state = packages__angular__src__core__application_tokens.src__core__change_detection__component_state;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const host = packages__angular__src__bootstrap__modules.src__core__change_detection__host;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  var directive_change_detector = Object.create(dart.library);
  var $classes = dartx.classes;
  var $setAttribute = dartx.setAttribute;
  var $attributes = dartx.attributes;
  var $remove = dartx.remove;
  var $setAttributeNS = dartx.setAttributeNS;
  var $getNamespacedAttributes = dartx.getNamespacedAttributes;
  var ComponentStateL = () => (ComponentStateL = dart.constFn(dart.legacy(component_state.ComponentState)))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "file:///C:/Users/nicol/AppData/Local/Temp/scratch_space31d894d0/packages/angular/src/core/change_detection/directive_change_detector.dart";
  var L1 = "package:angular/src/core/change_detection/directive_change_detector.dart";
  var _hasHostChanges = dart.privateName(directive_change_detector, "_hasHostChanges");
  var directive = dart.privateName(directive_change_detector, "DirectiveChangeDetector.directive");
  var view = dart.privateName(directive_change_detector, "DirectiveChangeDetector.view");
  var el = dart.privateName(directive_change_detector, "DirectiveChangeDetector.el");
  directive_change_detector.DirectiveChangeDetector = class DirectiveChangeDetector extends core.Object {
    get directive() {
      return this[directive];
    }
    set directive(value) {
      this[directive] = value;
    }
    get view() {
      return this[view];
    }
    set view(value) {
      this[view] = value;
    }
    get el() {
      return this[el];
    }
    set el(value) {
      this[el] = value;
    }
    initCd() {
      if (!ComponentStateL().is(this.directive)) dart.assertFailed("Should never be called", L0, 25, 12, "directive is ComponentState");
      component_state.internalSetStateChanged(optimizations.unsafeCast(ComponentStateL(), this.directive), dart.fn(() => {
        if (!dart.test(this[_hasHostChanges])) {
          this[_hasHostChanges] = true;
          host.ChangeDetectionHost.scheduleViewUpdate(dart.bind(this, 'detectHostChanges'), this.view, this.el);
        }
      }, VoidToNullN()));
    }
    resetCd() {
      this[_hasHostChanges] = false;
    }
    detectHostChanges(view, el) {
    }
    updateElemClass(element, className, isAdd) {
      if (dart.test(isAdd)) {
        element[$classes].add(className);
      } else {
        element[$classes].remove(className);
      }
    }
    setAttr(renderElement, attributeName, attributeValue) {
      if (attributeValue != null) {
        renderElement[$setAttribute](attributeName, attributeValue);
      } else {
        renderElement[$attributes][$remove](attributeName);
      }
    }
    createAttr(renderElement, attributeName, attributeValue) {
      renderElement[$setAttribute](attributeName, attributeValue);
    }
    setAttrNS(renderElement, attrNS, attributeName, attributeValue) {
      if (attributeValue != null) {
        renderElement[$setAttributeNS](attrNS, attributeName, attributeValue);
      } else {
        renderElement[$getNamespacedAttributes](attrNS)[$remove](attributeName);
      }
    }
    setProp(element, name, value) {
      js_util.setProperty(element, name, value);
    }
  };
  (directive_change_detector.DirectiveChangeDetector.new = function() {
    this[directive] = null;
    this[view] = null;
    this[el] = null;
    this[_hasHostChanges] = false;
    ;
  }).prototype = directive_change_detector.DirectiveChangeDetector.prototype;
  dart.addTypeTests(directive_change_detector.DirectiveChangeDetector);
  dart.addTypeCaches(directive_change_detector.DirectiveChangeDetector);
  dart.setMethodSignature(directive_change_detector.DirectiveChangeDetector, () => ({
    __proto__: dart.getMethods(directive_change_detector.DirectiveChangeDetector.__proto__),
    initCd: dart.fnType(dart.void, []),
    resetCd: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [dart.legacy(app_view.AppView$(dart.legacy(core.Object))), dart.legacy(html.Element)]),
    updateElemClass: dart.fnType(dart.void, [dart.legacy(html.Element), dart.legacy(core.String), dart.legacy(core.bool)]),
    setAttr: dart.fnType(dart.void, [dart.legacy(html.Element), dart.legacy(core.String), dart.legacy(core.String)]),
    createAttr: dart.fnType(dart.void, [dart.legacy(html.Element), dart.legacy(core.String), dart.legacy(core.String)]),
    setAttrNS: dart.fnType(dart.void, [dart.legacy(html.Element), dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.String)]),
    setProp: dart.fnType(dart.void, [dart.legacy(html.Element), dart.legacy(core.String), dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(directive_change_detector.DirectiveChangeDetector, L1);
  dart.setFieldSignature(directive_change_detector.DirectiveChangeDetector, () => ({
    __proto__: dart.getFields(directive_change_detector.DirectiveChangeDetector.__proto__),
    directive: dart.fieldType(dart.legacy(core.Object)),
    view: dart.fieldType(dart.legacy(app_view.AppView$(dart.legacy(core.Object)))),
    el: dart.fieldType(dart.legacy(html.Element)),
    [_hasHostChanges]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular/src/core/change_detection/directive_change_detector", {
    "package:angular/src/core/change_detection/directive_change_detector.dart": directive_change_detector
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["directive_change_detector.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;IAaS;;;;;;IACS;;;;;;IACR;;;;;;;AASN,WAAiB,qBAAV,mCAA6B;AAMlC,MALF,wCAAwB,4CAAW,iBAAY;AAC7C,uBAAK;AACmB,UAAtB,wBAAkB;AACiD,UAA/C,sDAAmB,4BAAmB,WAAM;;;IAGtE;;AAGyB,MAAvB,wBAAkB;IACpB;sBAGuC,MAAc;IAAK;oBAG7B,SAAgB,WAAgB;AAC3D,oBAAI,KAAK;AACuB,QAA9B,AAAQ,AAAQ,OAAT,eAAa,SAAS;;AAEI,QAAjC,AAAQ,AAAQ,OAAT,kBAAgB,SAAS;;IAEpC;YAGY,eAAsB,eAAsB;AACtD,UAAI,cAAc,IAAI;AACqC,QAAzD,AAAc,aAAD,gBAAc,aAAa,EAAE,cAAc;;AAEV,QAA9C,AAAc,AAAW,aAAZ,uBAAmB,aAAa;;IAEjD;eAGY,eAAsB,eAAsB;AACG,MAAzD,AAAc,aAAD,gBAAc,aAAa,EAAE,cAAc;IAC1D;cAEuB,eAAsB,QAAe,eACjD;AACT,UAAI,cAAc,IAAI;AAC+C,QAAnE,AAAc,aAAD,kBAAgB,MAAM,EAAE,aAAa,EAAE,cAAc;;AAEC,QAAnE,AAAc,AAAgC,aAAjC,2BAAyB,MAAM,WAAS,aAAa;;IAEtE;YAEqB,SAAgB,MAAa;AACP,MAAzC,oBAAoB,OAAO,EAAE,IAAI,EAAE,KAAK;IAC1C;;;IA7DO;IACS;IACR;IACH,wBAAkB;;EA2DzB","file":"directive_change_detector.ddc.js"}');
  // Exports:
  return {
    src__core__change_detection__directive_change_detector: directive_change_detector
  };
}));

//# sourceMappingURL=directive_change_detector.ddc.js.map
