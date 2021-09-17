define(['dart_sdk', 'packages/intl/intl'], (function load__packages__intl__message_lookup_by_library(dart_sdk, packages__intl__intl) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl = packages__intl__intl.intl;
  const intl_helpers = packages__intl__intl.src__intl_helpers;
  var message_lookup_by_library = Object.create(dart.library);
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $toString = dartx.toString;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MessageLookupByLibraryL = () => (MessageLookupByLibraryL = dart.constFn(dart.legacy(message_lookup_by_library.MessageLookupByLibrary)))();
  var LinkedMapOfStringL$MessageLookupByLibraryL = () => (LinkedMapOfStringL$MessageLookupByLibraryL = dart.constFn(_js_helper.LinkedMap$(StringL(), MessageLookupByLibraryL())))();
  var dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  var VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  const CT = Object.create(null);
  var L0 = "package:intl/message_lookup_by_library.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], dart.dynamic);
    }
  }, false);
  var _lastLocale = dart.privateName(message_lookup_by_library, "_lastLocale");
  var _lastLookup = dart.privateName(message_lookup_by_library, "_lastLookup");
  var _lookupMessageCatalog = dart.privateName(message_lookup_by_library, "_lookupMessageCatalog");
  var availableMessages = dart.privateName(message_lookup_by_library, "CompositeMessageLookup.availableMessages");
  message_lookup_by_library.CompositeMessageLookup = class CompositeMessageLookup extends core.Object {
    get availableMessages() {
      return this[availableMessages];
    }
    set availableMessages(value) {
      this[availableMessages] = value;
    }
    localeExists(localeName) {
      return this.availableMessages[$containsKey](localeName);
    }
    lookupMessage(message_str, locale, name, args, meaning, opts) {
      let t0;
      let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
      let knownLocale = (t0 = locale, t0 == null ? intl.Intl.getCurrentLocale() : t0);
      let messages = knownLocale == this[_lastLocale] ? this[_lastLookup] : this[_lookupMessageCatalog](knownLocale);
      if (messages == null) {
        return StringL().as(ifAbsent == null ? message_str : ifAbsent(message_str, args));
      }
      return messages.lookupMessage(message_str, locale, name, args, meaning, {ifAbsent: ifAbsent});
    }
    [_lookupMessageCatalog](locale) {
      let verifiedLocale = intl.Intl.verifiedLocale(locale, dart.bind(this, 'localeExists'), {onFailure: dart.fn(locale => locale, dynamicTodynamic())});
      this[_lastLocale] = locale;
      this[_lastLookup] = this.availableMessages[$_get](verifiedLocale);
      return this[_lastLookup];
    }
    addLocale(localeName, findLocale) {
      if (dart.test(this.localeExists(localeName))) return;
      let canonical = intl.Intl.canonicalizedLocale(localeName);
      let newLocale = dart.dcall(findLocale, [canonical]);
      if (newLocale != null) {
        this.availableMessages[$_set](localeName, MessageLookupByLibraryL().as(newLocale));
        this.availableMessages[$_set](canonical, MessageLookupByLibraryL().as(newLocale));
        if (core.identical(this[_lastLocale], newLocale)) {
          this[_lastLocale] = null;
          this[_lastLookup] = null;
        }
      }
    }
  };
  (message_lookup_by_library.CompositeMessageLookup.new = function() {
    this[availableMessages] = new (LinkedMapOfStringL$MessageLookupByLibraryL()).new();
    this[_lastLocale] = null;
    this[_lastLookup] = null;
    ;
  }).prototype = message_lookup_by_library.CompositeMessageLookup.prototype;
  dart.addTypeTests(message_lookup_by_library.CompositeMessageLookup);
  dart.addTypeCaches(message_lookup_by_library.CompositeMessageLookup);
  message_lookup_by_library.CompositeMessageLookup[dart.implements] = () => [intl_helpers.MessageLookup];
  dart.setMethodSignature(message_lookup_by_library.CompositeMessageLookup, () => ({
    __proto__: dart.getMethods(message_lookup_by_library.CompositeMessageLookup.__proto__),
    localeExists: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    lookupMessage: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.List), dart.legacy(core.String)], {ifAbsent: dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(core.Object)))]))}, {}),
    [_lookupMessageCatalog]: dart.fnType(dart.legacy(message_lookup_by_library.MessageLookupByLibrary), [dart.legacy(core.String)]),
    addLocale: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.Function)])
  }));
  dart.setLibraryUri(message_lookup_by_library.CompositeMessageLookup, L0);
  dart.setFieldSignature(message_lookup_by_library.CompositeMessageLookup, () => ({
    __proto__: dart.getFields(message_lookup_by_library.CompositeMessageLookup.__proto__),
    availableMessages: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(message_lookup_by_library.MessageLookupByLibrary)))),
    [_lastLocale]: dart.fieldType(dart.legacy(core.String)),
    [_lastLookup]: dart.fieldType(dart.legacy(message_lookup_by_library.MessageLookupByLibrary))
  }));
  var C0;
  message_lookup_by_library.MessageLookupByLibrary = class MessageLookupByLibrary extends core.Object {
    lookupMessage(message_str, locale, name, args, meaning, opts) {
      let t0;
      let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
      let notFound = false;
      let actualName = intl_helpers.computeMessageName(name, message_str, meaning);
      if (actualName == null) notFound = true;
      let translation = this._get(actualName);
      notFound = notFound || translation == null;
      if (notFound) {
        return StringL().as(ifAbsent == null ? message_str : ifAbsent(message_str, args));
      } else {
        args = (t0 = args, t0 == null ? C0 || CT.C0 : t0);
        return this.evaluateMessage(translation, args);
      }
    }
    evaluateMessage(translation, args) {
      return StringL().as(core.Function.apply(core.Function.as(translation), args));
    }
    _get(messageName) {
      return this.messages[$_get](messageName);
    }
    toString() {
      return this.localeName;
    }
    static simpleMessage(translatedString) {
      return dart.fn(() => translatedString, VoidTodynamic());
    }
  };
  (message_lookup_by_library.MessageLookupByLibrary.new = function() {
    ;
  }).prototype = message_lookup_by_library.MessageLookupByLibrary.prototype;
  dart.addTypeTests(message_lookup_by_library.MessageLookupByLibrary);
  dart.addTypeCaches(message_lookup_by_library.MessageLookupByLibrary);
  dart.setMethodSignature(message_lookup_by_library.MessageLookupByLibrary, () => ({
    __proto__: dart.getMethods(message_lookup_by_library.MessageLookupByLibrary.__proto__),
    lookupMessage: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.List), dart.legacy(core.String)], {ifAbsent: dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(core.Object)))]))}, {}),
    evaluateMessage: dart.fnType(dart.legacy(core.String), [dart.dynamic, dart.legacy(core.List)]),
    _get: dart.fnType(dart.dynamic, [dart.legacy(core.String)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(message_lookup_by_library.MessageLookupByLibrary, L0);
  dart.defineExtensionMethods(message_lookup_by_library.MessageLookupByLibrary, ['toString']);
  dart.trackLibraries("packages/intl/message_lookup_by_library", {
    "package:intl/message_lookup_by_library.dart": message_lookup_by_library
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["message_lookup_by_library.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqBsC;;;;;;iBAGlB;AAAe,YAAA,AAAkB,sCAAY,UAAU;IAAC;kBAgB/D,aAAoB,QAAe,MAAW,MAAa;;UACjD;AAEf,yBAAqB,KAAP,MAAM,QAAN,OAAe;AAC7B,qBAAY,AAAY,WAAD,IAAI,oBACzB,oBACA,4BAAsB,WAAW;AAGvC,UAAI,AAAS,QAAD,IAAI;AACd,4BAAO,AAAS,QAAD,IAAI,OAAO,WAAW,GAAG,AAAQ,QAAA,CAAC,WAAW,EAAE,IAAI;;AAEpE,YAAO,AAAS,SAAD,eAAe,WAAW,EAAE,MAAM,EAAE,IAAI,EAAE,IAAI,EAAE,OAAO,aACxD,QAAQ;IACxB;4BAGoD;AAC9C,2BAAsB,yBAAe,MAAM,YAAE,mCAClC,QAAC,UAAW,MAAM;AACb,MAApB,oBAAc,MAAM;AAC2B,MAA/C,oBAAc,AAAiB,8BAAC,cAAc;AAC9C,YAAO;IACT;cAKsB,YAAqB;AACzC,oBAAI,kBAAa,UAAU,IAAG;AAC1B,sBAAiB,8BAAoB,UAAU;AAC/C,sBAAsB,WAAV,UAAU,GAAC,SAAS;AACpC,UAAI,SAAS,IAAI;AAC0B,QAAzC,AAAiB,8BAAC,UAAU,+BAAI,SAAS;AACD,QAAxC,AAAiB,8BAAC,SAAS,+BAAI,SAAS;AAExC,YAAgB,eAAZ,mBAAe,SAAS;AACR,UAAlB,oBAAc;AACI,UAAlB,oBAAc;;;IAGpB;;;IA5DoC,0BAAwB;IASrD;IAGgB;;EAiDzB;;;;;;;;;;;;;;;;;;;;kBA2Ba,aAAoB,QAAe,MAAW,MAAa;;UACjD;AACf,qBAAW;AACX,uBAAa,gCAAmB,IAAI,EAAE,WAAW,EAAE,OAAO;AAC9D,UAAI,AAAW,UAAD,IAAI,MAAM,AAAe,WAAJ;AAC/B,wBAAkB,UAAC,UAAU;AACW,MAA5C,WAAW,AAAS,QAAD,IAAK,AAAY,WAAD,IAAI;AACvC,UAAI,QAAQ;AACV,4BAAO,AAAS,QAAD,IAAI,OAAO,WAAW,GAAG,AAAQ,QAAA,CAAC,WAAW,EAAE,IAAI;;AAE3C,QAAvB,QAAY,KAAL,IAAI,QAAJ;AACP,cAAO,sBAAgB,WAAW,EAAE,IAAI;;IAE5C;oBAGuB,aAAkB;AACvC,0BAAgB,qCAAM,WAAW,GAAE,IAAI;IACzC;SAGmB;AAAgB,YAAA,AAAQ,sBAAC,WAAW;IAAC;;AAU1C;IAAU;yBAIH;AAAqB,2BAAM,gBAAgB;;;;;EAClE","file":"message_lookup_by_library.ddc.js"}');
  // Exports:
  return {
    message_lookup_by_library: message_lookup_by_library
  };
}));

//# sourceMappingURL=message_lookup_by_library.ddc.js.map
