define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection'], (function load__packages__angular__src__core__application_tokens(dart_sdk, packages__angular__src__core__change_detection__change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  var application_tokens = Object.create(dart.library);
  var zone = Object.create(dart.library);
  var change_detection = Object.create(dart.library);
  var component_state = Object.create(dart.library);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var OpaqueTokenOfStringL = () => (OpaqueTokenOfStringL = dart.constFn(opaque_token.OpaqueToken$(StringL())))();
  const CT = Object.create(null);
  var L0 = "package:angular/src/core/change_detection/component_state.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: OpaqueTokenOfStringL().prototype,
        [OpaqueToken__uniqueName]: "APP_ID"
      });
    }
  }, false);
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C0;
  dart.defineLazy(application_tokens, {
    /*application_tokens.APP_ID*/get APP_ID() {
      return C0 || CT.C0;
    }
  }, true);
  var _onStateChanged = dart.privateName(component_state, "_onStateChanged");
  component_state.ComponentState = class ComponentState extends core.Object {
    setState(scheduleChangeDetectionAfter) {
      scheduleChangeDetectionAfter();
      this.deliverStateChanges();
    }
    deliverStateChanges() {
      let onStateChanged = this[_onStateChanged];
      if (onStateChanged != null) {
        onStateChanged();
      }
    }
  };
  (component_state.ComponentState.new = function() {
    this[_onStateChanged] = null;
    ;
  }).prototype = component_state.ComponentState.prototype;
  dart.addTypeTests(component_state.ComponentState);
  dart.addTypeCaches(component_state.ComponentState);
  dart.setMethodSignature(component_state.ComponentState, () => ({
    __proto__: dart.getMethods(component_state.ComponentState.__proto__),
    setState: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, []))]),
    deliverStateChanges: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(component_state.ComponentState, L0);
  dart.setFieldSignature(component_state.ComponentState, () => ({
    __proto__: dart.getFields(component_state.ComponentState.__proto__),
    [_onStateChanged]: dart.fieldType(dart.legacy(dart.fnType(dart.void, [])))
  }));
  component_state.internalSetStateChanged = function internalSetStateChanged(component, onStateChanged) {
    component[_onStateChanged] = onStateChanged;
  };
  dart.trackLibraries("packages/angular/src/core/application_tokens", {
    "package:angular/src/core/application_tokens.dart": application_tokens,
    "package:angular/src/core/zone.dart": zone,
    "package:angular/src/core/change_detection.dart": change_detection,
    "package:angular/src/core/change_detection/component_state.dart": component_state
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["application_tokens.dart","change_detection/component_state.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;MAeM,yBAAM;;;;;;aCkCoB;AACE,MAA9B,AAA4B,4BAAA;AACP,MAArB;IACF;;AAUQ,2BAAiB;AACvB,UAAI,cAAc,IAAI;AACJ,QAAhB,AAAc,cAAA;;IAElB;;;IA3CgB;;EA4ClB;;;;;;;;;;;;;6EAKiB,WACC;AAE0B,IAA1C,AAAU,SAAD,oBAAmB,cAAc;EAC5C","file":"application_tokens.ddc.js"}');
  // Exports:
  return {
    src__core__application_tokens: application_tokens,
    src__core__zone: zone,
    src__core__change_detection: change_detection,
    src__core__change_detection__component_state: component_state
  };
}));

//# sourceMappingURL=application_tokens.ddc.js.map
