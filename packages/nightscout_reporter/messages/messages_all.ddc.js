define(['dart_sdk', 'packages/nightscout_reporter/messages/messages_es_ES', 'packages/nightscout_reporter/messages/messages_de_DE', 'packages/nightscout_reporter/messages/messages_en_US', 'packages/nightscout_reporter/messages/messages_en_GB', 'packages/nightscout_reporter/messages/messages_pl_PL', 'packages/nightscout_reporter/messages/messages_ja_JP', 'packages/nightscout_reporter/messages/messages_sk_SK', 'packages/nightscout_reporter/messages/messages_fr_FR', 'packages/nightscout_reporter/messages/messages_pt_PT', 'packages/intl/intl', 'packages/intl/message_lookup_by_library'], (function load__packages__nightscout_reporter__messages__messages_all(dart_sdk, packages__nightscout_reporter__messages__messages_es_ES, packages__nightscout_reporter__messages__messages_de_DE, packages__nightscout_reporter__messages__messages_en_US, packages__nightscout_reporter__messages__messages_en_GB, packages__nightscout_reporter__messages__messages_pl_PL, packages__nightscout_reporter__messages__messages_ja_JP, packages__nightscout_reporter__messages__messages_sk_SK, packages__nightscout_reporter__messages__messages_fr_FR, packages__nightscout_reporter__messages__messages_pt_PT, packages__intl__intl, packages__intl__message_lookup_by_library) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const messages_es_ES = packages__nightscout_reporter__messages__messages_es_ES.messages__messages_es_ES;
  const messages_de_DE = packages__nightscout_reporter__messages__messages_de_DE.messages__messages_de_DE;
  const messages_en_US = packages__nightscout_reporter__messages__messages_en_US.messages__messages_en_US;
  const messages_en_GB = packages__nightscout_reporter__messages__messages_en_GB.messages__messages_en_GB;
  const messages_pl_PL = packages__nightscout_reporter__messages__messages_pl_PL.messages__messages_pl_PL;
  const messages_ja_JP = packages__nightscout_reporter__messages__messages_ja_JP.messages__messages_ja_JP;
  const messages_sk_SK = packages__nightscout_reporter__messages__messages_sk_SK.messages__messages_sk_SK;
  const messages_fr_FR = packages__nightscout_reporter__messages__messages_fr_FR.messages__messages_fr_FR;
  const messages_pt_PT = packages__nightscout_reporter__messages__messages_pt_PT.messages__messages_pt_PT;
  const intl = packages__intl__intl.intl;
  const intl_helpers = packages__intl__intl.src__intl_helpers;
  const message_lookup_by_library = packages__intl__message_lookup_by_library.message_lookup_by_library;
  var messages_all = Object.create(dart.library);
  var $_get = dartx._get;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var dynamicToboolL = () => (dynamicToboolL = dart.constFn(dart.fnType(boolL(), [dart.dynamic])))();
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var FutureOfboolL = () => (FutureOfboolL = dart.constFn(async.Future$(boolL())))();
  var CompositeMessageLookupL = () => (CompositeMessageLookupL = dart.constFn(dart.legacy(message_lookup_by_library.CompositeMessageLookup)))();
  var VoidToCompositeMessageLookupL = () => (VoidToCompositeMessageLookupL = dart.constFn(dart.fnType(CompositeMessageLookupL(), [])))();
  var MessageLookupByLibraryL = () => (MessageLookupByLibraryL = dart.constFn(dart.legacy(message_lookup_by_library.MessageLookupByLibrary)))();
  var dynamicToMessageLookupByLibraryL = () => (dynamicToMessageLookupByLibraryL = dart.constFn(dart.fnType(MessageLookupByLibraryL(), [dart.dynamic])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StringLToboolL = () => (StringLToboolL = dart.constFn(dart.fnType(boolL(), [StringL()])))();
  var FutureL = () => (FutureL = dart.constFn(dart.legacy(async.Future)))();
  var VoidToFutureL = () => (VoidToFutureL = dart.constFn(dart.fnType(FutureL(), [])))();
  var VoidToLFutureL = () => (VoidToLFutureL = dart.constFn(dart.legacy(VoidToFutureL())))();
  var IdentityMapOfStringL$VoidToLFutureL = () => (IdentityMapOfStringL$VoidToLFutureL = dart.constFn(_js_helper.IdentityMap$(StringL(), VoidToLFutureL())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(messages_all._findGeneratedMessagesFor, dynamicToMessageLookupByLibraryL());
    },
    get C1() {
      return C1 = dart.fn(messages_all._messagesExistFor, StringLToboolL());
    }
  }, false);
  var C0;
  var C1;
  messages_all._findExact = function _findExact(localeName) {
    switch (localeName) {
      case "es_ES":
      {
        true;
        return messages_es_ES.messages;
      }
      case "de_DE":
      {
        true;
        return messages_de_DE.messages;
      }
      case "en_US":
      {
        true;
        return messages_en_US.messages;
      }
      case "en_GB":
      {
        true;
        return messages_en_GB.messages;
      }
      case "pl_PL":
      {
        true;
        return messages_pl_PL.messages;
      }
      case "ja_JP":
      {
        true;
        return messages_ja_JP.messages;
      }
      case "sk_SK":
      {
        true;
        return messages_sk_SK.messages;
      }
      case "fr_FR":
      {
        true;
        return messages_fr_FR.messages;
      }
      case "pt_PT":
      {
        true;
        return messages_pt_PT.messages;
      }
      default:
      {
        return null;
      }
    }
  };
  messages_all.initializeMessages = function initializeMessages(localeName) {
    return async.async(boolL(), function* initializeMessages() {
      let availableLocale = intl.Intl.verifiedLocale(localeName, dart.fn(locale => messages_all._deferredLibraries[$_get](locale) != null, dynamicToboolL()), {onFailure: dart.fn(_ => null, dynamicToNullN())});
      if (availableLocale == null) {
        return FutureOfboolL().value(false);
      }
      let lib = messages_all._deferredLibraries[$_get](availableLocale);
      yield lib == null ? FutureOfboolL().value(false) : lib();
      intl_helpers.initializeInternalMessageLookup(dart.fn(() => new message_lookup_by_library.CompositeMessageLookup.new(), VoidToCompositeMessageLookupL()));
      intl_helpers.messageLookup.addLocale(availableLocale, C0 || CT.C0);
      return FutureOfboolL().value(true);
    });
  };
  messages_all._messagesExistFor = function _messagesExistFor(locale) {
    try {
      return messages_all._findExact(locale) != null;
    } catch (e$) {
      let e = dart.getThrown(e$);
      return false;
    }
  };
  messages_all._findGeneratedMessagesFor = function _findGeneratedMessagesFor(locale) {
    let actualLocale = intl.Intl.verifiedLocale(StringL().as(locale), C1 || CT.C1, {onFailure: dart.fn(_ => null, dynamicToNullN())});
    if (actualLocale == null) return null;
    return messages_all._findExact(actualLocale);
  };
  dart.defineLazy(messages_all, {
    /*messages_all._deferredLibraries*/get _deferredLibraries() {
      return new (IdentityMapOfStringL$VoidToLFutureL()).from(["es_ES", dart.fn(() => dart.loadLibrary(), VoidToFutureL()), "de_DE", dart.fn(() => dart.loadLibrary(), VoidToFutureL()), "en_US", dart.fn(() => dart.loadLibrary(), VoidToFutureL()), "en_GB", dart.fn(() => dart.loadLibrary(), VoidToFutureL()), "pl_PL", dart.fn(() => dart.loadLibrary(), VoidToFutureL()), "ja_JP", dart.fn(() => dart.loadLibrary(), VoidToFutureL()), "sk_SK", dart.fn(() => dart.loadLibrary(), VoidToFutureL()), "fr_FR", dart.fn(() => dart.loadLibrary(), VoidToFutureL()), "pt_PT", dart.fn(() => dart.loadLibrary(), VoidToFutureL())]);
    },
    set _deferredLibraries(_) {}
  }, true);
  dart.trackLibraries("packages/nightscout_reporter/messages/messages_all", {
    "package:nightscout_reporter/messages/messages_all.dart": messages_all
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["messages_all.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gDAkCkC;AAChC,YAAQ,UAAU;;;AAEd,QAAsB;;;;;AAEtB,QAAsB;;;;;AAEtB,QAAsB;;;;;AAEtB,QAAsB;;;;;AAEtB,QAAsB;;;;;AAEtB,QAAsB;;;;;AAEtB,QAAsB;;;;;AAEtB,QAAsB;;;;;AAEtB,QAAsB;;;;;AAEtB,cAAO;;;EAEb;gEAGuC;AAAR;AACzB,4BAAuB,yBACzB,UAAU,EACV,QAAC,UAAW,AAAkB,AAAS,uCAAR,MAAM,KAAK,qCAC/B,QAAC,KAAM;AACpB,UAAI,AAAgB,eAAD,IAAI;AAErB,cAAW,uBAAa;;AAEtB,gBAAM,AAAkB,uCAAC,eAAe;AAES,MAArD,MAAO,AAAI,GAAD,IAAI,OAAW,sBAAa,SAAS,AAAG,GAAA;AAEiB,MAAnE,6CAAgC,cAAU;AACyB,MAAnE,AAAc,qCAAU,eAAe;AAEvC,YAAW,uBAAa;IAC1B;;8DAE8B;AAC5B;AACE,YAAO,AAAmB,yBAAR,MAAM,KAAK;;UACtB;AACP,YAAO;;EAEX;8EAEiD;AAC3C,uBAAoB,sCAAe,MAAM,4BAC9B,QAAC,KAAM;AACtB,QAAI,AAAa,YAAD,IAAI,MAAM,MAAO;AACjC,UAAO,yBAAW,YAAY;EAChC;;MAtE2B,+BAAkB;YAAG,mDAC9C,SAAS,cAAM,sCACf,SAAS,cAAM,sCACf,SAAS,cAAM,sCACf,SAAS,cAAM,sCACf,SAAS,cAAM,sCACf,SAAS,cAAM,sCACf,SAAS,cAAM,sCACf,SAAS,cAAM,sCACf,SAAS,cAAM","file":"messages_all.ddc.js"}');
  // Exports:
  return {
    messages__messages_all: messages_all
  };
}));

//# sourceMappingURL=messages_all.ddc.js.map
