define(['dart_sdk', 'packages/http/src/base_client'], (function load__packages___discoveryapis_commons___discoveryapis_commons(dart_sdk, packages__http__src__base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const streamed_response = packages__http__src__base_client.src__streamed_response;
  const client = packages__http__src__base_client.src__client;
  const byte_stream = packages__http__src__base_client.src__byte_stream;
  const base_request = packages__http__src__base_client.src__base_request;
  var _discoveryapis_commons = Object.create(dart.library);
  var requests = Object.create(dart.library);
  var clients = Object.create(dart.library);
  var version_fallback = Object.create(dart.library);
  var $modulo = dartx['%'];
  var $leftShift = dartx['<<'];
  var $toString = dartx.toString;
  var $_get = dartx._get;
  var $endsWith = dartx.endsWith;
  var $cast = dartx.cast;
  var $isEmpty = dartx.isEmpty;
  var $startsWith = dartx.startsWith;
  var $_set = dartx._set;
  var $substring = dartx.substring;
  var $contains = dartx.contains;
  var $forEach = dartx.forEach;
  var $addAll = dartx.addAll;
  var $length = dartx.length;
  var $removeWhere = dartx.removeWhere;
  var $truncate = dartx.truncate;
  var $add = dartx.add;
  var $isNotEmpty = dartx.isNotEmpty;
  var $clear = dartx.clear;
  var $sublist = dartx.sublist;
  var $first = dartx.first;
  var $removeRange = dartx.removeRange;
  var $replaceAll = dartx.replaceAll;
  var $containsKey = dartx.containsKey;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $toLowerCase = dartx.toLowerCase;
  var DurationL = () => (DurationL = dart.constFn(dart.legacy(core.Duration)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var intLToDurationL = () => (intLToDurationL = dart.constFn(dart.fnType(DurationL(), [intL()])))();
  var ApiRequestErrorDetailL = () => (ApiRequestErrorDetailL = dart.constFn(dart.legacy(requests.ApiRequestErrorDetail)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var PartialDownloadOptionsL = () => (PartialDownloadOptionsL = dart.constFn(dart.legacy(requests.PartialDownloadOptions)))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var ListLOfStringL = () => (ListLOfStringL = dart.constFn(dart.legacy(ListOfStringL())))();
  var IdentityMapOfStringL$ListLOfStringL = () => (IdentityMapOfStringL$ListLOfStringL = dart.constFn(_js_helper.IdentityMap$(StringL(), ListLOfStringL())))();
  var ResumableUploadOptionsL = () => (ResumableUploadOptionsL = dart.constFn(dart.legacy(requests.ResumableUploadOptions)))();
  var StringLAndStringLTovoid = () => (StringLAndStringLTovoid = dart.constFn(dart.fnType(dart.void, [StringL(), StringL()])))();
  var StringLAndListLOfStringLToNullN = () => (StringLAndListLOfStringLToNullN = dart.constFn(dart.fnType(core.Null, [StringL(), ListLOfStringL()])))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var StreamedResponseL = () => (StreamedResponseL = dart.constFn(dart.legacy(streamed_response.StreamedResponse)))();
  var FutureOfStreamedResponseL = () => (FutureOfStreamedResponseL = dart.constFn(async.Future$(StreamedResponseL())))();
  var FutureLOfStreamedResponseL = () => (FutureLOfStreamedResponseL = dart.constFn(dart.legacy(FutureOfStreamedResponseL())))();
  var VoidToFutureLOfStreamedResponseL = () => (VoidToFutureLOfStreamedResponseL = dart.constFn(dart.fnType(FutureLOfStreamedResponseL(), [])))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ListLOfintL = () => (ListLOfintL = dart.constFn(dart.legacy(ListOfintL())))();
  var StreamControllerOfListLOfintL = () => (StreamControllerOfListLOfintL = dart.constFn(async.StreamController$(ListLOfintL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringLAndStringLToboolL = () => (StringLAndStringLToboolL = dart.constFn(dart.fnType(boolL(), [StringL(), StringL()])))();
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var StackTraceL = () => (StackTraceL = dart.constFn(dart.legacy(core.StackTrace)))();
  var dynamicAndStackTraceLToNullN = () => (dynamicAndStackTraceLToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic, StackTraceL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ObjectLToNullN = () => (ObjectLToNullN = dart.constFn(dart.fnType(core.Null, [ObjectL()])))();
  var StreamOfListLOfintL = () => (StreamOfListLOfintL = dart.constFn(async.Stream$(ListLOfintL())))();
  var StreamLOfListLOfintL = () => (StreamLOfListLOfintL = dart.constFn(dart.legacy(StreamOfListLOfintL())))();
  var JSArrayOfintL = () => (JSArrayOfintL = dart.constFn(_interceptors.JSArray$(intL())))();
  var ListLOfintLTovoid = () => (ListLOfintLTovoid = dart.constFn(dart.fnType(dart.void, [ListLOfintL()])))();
  var dynamicAndStackTraceLTovoid = () => (dynamicAndStackTraceLTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, StackTraceL()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var StreamControllerOfStringL = () => (StreamControllerOfStringL = dart.constFn(async.StreamController$(StringL())))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var CompleterOfStreamedResponseL = () => (CompleterOfStreamedResponseL = dart.constFn(async.Completer$(StreamedResponseL())))();
  var ResumableChunkL = () => (ResumableChunkL = dart.constFn(dart.legacy(clients.ResumableChunk)))();
  var FutureL = () => (FutureL = dart.constFn(dart.legacy(async.Future)))();
  var ResumableChunkLToFutureL = () => (ResumableChunkLToFutureL = dart.constFn(dart.fnType(FutureL(), [ResumableChunkL()])))();
  var ListLOfintLToNullN = () => (ListLOfintLToNullN = dart.constFn(dart.fnType(core.Null, [ListLOfintL()])))();
  var StreamedResponseLToNullN = () => (StreamedResponseLToNullN = dart.constFn(dart.fnType(core.Null, [StreamedResponseL()])))();
  var UriL = () => (UriL = dart.constFn(dart.legacy(core.Uri)))();
  var UriLToFutureLOfStreamedResponseL = () => (UriLToFutureLOfStreamedResponseL = dart.constFn(dart.fnType(FutureLOfStreamedResponseL(), [UriL()])))();
  var dynamicToUriL = () => (dynamicToUriL = dart.constFn(dart.fnType(UriL(), [dart.dynamic])))();
  var FutureOfUriL = () => (FutureOfUriL = dart.constFn(async.Future$(UriL())))();
  var FutureLOfUriL = () => (FutureLOfUriL = dart.constFn(dart.legacy(FutureOfUriL())))();
  var StreamedResponseLToFutureLOfUriL = () => (StreamedResponseLToFutureLOfUriL = dart.constFn(dart.fnType(FutureLOfUriL(), [StreamedResponseL()])))();
  var StreamedResponseLToFutureL = () => (StreamedResponseLToFutureL = dart.constFn(dart.fnType(FutureL(), [StreamedResponseL()])))();
  var dynamicToFutureLOfStreamedResponseL = () => (dynamicToFutureLOfStreamedResponseL = dart.constFn(dart.fnType(FutureLOfStreamedResponseL(), [dart.dynamic])))();
  var FutureOrOfStreamedResponseL = () => (FutureOrOfStreamedResponseL = dart.constFn(async.FutureOr$(StreamedResponseL())))();
  var StreamedResponseLToFutureOrOfStreamedResponseL = () => (StreamedResponseLToFutureOrOfStreamedResponseL = dart.constFn(dart.fnType(FutureOrOfStreamedResponseL(), [StreamedResponseL()])))();
  var intLToFutureLOfStreamedResponseL = () => (intLToFutureLOfStreamedResponseL = dart.constFn(dart.fnType(FutureLOfStreamedResponseL(), [intL()])))();
  var JSArrayOfResumableChunkL = () => (JSArrayOfResumableChunkL = dart.constFn(_interceptors.JSArray$(ResumableChunkL())))();
  var JSArrayOfListLOfintL = () => (JSArrayOfListLOfintL = dart.constFn(_interceptors.JSArray$(ListLOfintL())))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var JSArrayOfApiRequestErrorDetailL = () => (JSArrayOfApiRequestErrorDetailL = dart.constFn(_interceptors.JSArray$(ApiRequestErrorDetailL())))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var dynamicToApiRequestErrorDetailL = () => (dynamicToApiRequestErrorDetailL = dart.constFn(dart.fnType(ApiRequestErrorDetailL(), [dart.dynamic])))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  const CT = Object.create(null);
  var L1 = "file:///C:/Users/nicol/AppData/Local/Temp/scratch_space31d894d0/packages/_discoveryapis_commons/src/clients.dart";
  var L2 = "package:_discoveryapis_commons/src/clients.dart";
  var L0 = "package:_discoveryapis_commons/src/requests.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: requests.UploadOptions.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: requests.DownloadOptions.prototype
      });
    },
    get C2() {
      return C2 = dart.constList([], ApiRequestErrorDetailL());
    },
    get C3() {
      return C3 = dart.constList(["resumable"], StringL());
    },
    get C4() {
      return C4 = dart.constList(["media"], StringL());
    },
    get C5() {
      return C5 = dart.constList(["multipart"], StringL());
    },
    get C6() {
      return C6 = dart.constList(["json"], StringL());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: convert.Utf8Decoder.prototype,
        [Utf8Decoder__allowMalformed]: true
      });
    },
    get C8() {
      return C8 = dart.constList(["user-agent", "content-length"], StringL());
    }
  }, false);
  var stream$ = dart.privateName(requests, "Media.stream");
  var contentType$ = dart.privateName(requests, "Media.contentType");
  var length$ = dart.privateName(requests, "Media.length");
  requests.Media = class Media extends core.Object {
    get stream() {
      return this[stream$];
    }
    set stream(value) {
      super.stream = value;
    }
    get contentType() {
      return this[contentType$];
    }
    set contentType(value) {
      super.contentType = value;
    }
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
  };
  (requests.Media.new = function(stream, length, opts) {
    let contentType = opts && 'contentType' in opts ? opts.contentType : "application/octet-stream";
    this[stream$] = stream;
    this[length$] = length;
    this[contentType$] = contentType;
    if (this.stream == null || this.contentType == null) {
      dart.throw(new core.ArgumentError.new("Arguments stream, contentType and length must not be null."));
    }
    if (this.length != null && dart.notNull(this.length) < 0) {
      dart.throw(new core.ArgumentError.new("A negative content length is not allowed"));
    }
  }).prototype = requests.Media.prototype;
  dart.addTypeTests(requests.Media);
  dart.addTypeCaches(requests.Media);
  dart.setLibraryUri(requests.Media, L0);
  dart.setFieldSignature(requests.Media, () => ({
    __proto__: dart.getFields(requests.Media.__proto__),
    stream: dart.finalFieldType(dart.legacy(async.Stream$(dart.legacy(core.List$(dart.legacy(core.int)))))),
    contentType: dart.finalFieldType(dart.legacy(core.String)),
    length: dart.finalFieldType(dart.legacy(core.int))
  }));
  var C0;
  requests.UploadOptions = class UploadOptions extends core.Object {};
  (requests.UploadOptions.new = function() {
    ;
  }).prototype = requests.UploadOptions.prototype;
  dart.addTypeTests(requests.UploadOptions);
  dart.addTypeCaches(requests.UploadOptions);
  dart.setLibraryUri(requests.UploadOptions, L0);
  dart.defineLazy(requests.UploadOptions, {
    /*requests.UploadOptions.Default*/get Default() {
      return C0 || CT.C0;
    },
    /*requests.UploadOptions.Resumable*/get Resumable() {
      return new requests.ResumableUploadOptions.new();
    }
  }, true);
  var numberOfAttempts$ = dart.privateName(requests, "ResumableUploadOptions.numberOfAttempts");
  var chunkSize$ = dart.privateName(requests, "ResumableUploadOptions.chunkSize");
  var backoffFunction$ = dart.privateName(requests, "ResumableUploadOptions.backoffFunction");
  requests.ResumableUploadOptions = class ResumableUploadOptions extends requests.UploadOptions {
    get numberOfAttempts() {
      return this[numberOfAttempts$];
    }
    set numberOfAttempts(value) {
      super.numberOfAttempts = value;
    }
    get chunkSize() {
      return this[chunkSize$];
    }
    set chunkSize(value) {
      super.chunkSize = value;
    }
    get backoffFunction() {
      return this[backoffFunction$];
    }
    set backoffFunction(value) {
      super.backoffFunction = value;
    }
  };
  (requests.ResumableUploadOptions.new = function(opts) {
    let numberOfAttempts = opts && 'numberOfAttempts' in opts ? opts.numberOfAttempts : 3;
    let chunkSize = opts && 'chunkSize' in opts ? opts.chunkSize : 1048576;
    let backoffFunction = opts && 'backoffFunction' in opts ? opts.backoffFunction : null;
    this[numberOfAttempts$] = numberOfAttempts;
    this[chunkSize$] = chunkSize;
    this[backoffFunction$] = backoffFunction == null ? requests.ResumableUploadOptions.ExponentialBackoff : backoffFunction;
    requests.ResumableUploadOptions.__proto__.new.call(this);
    if (dart.notNull(this.numberOfAttempts) < 1 || this.chunkSize[$modulo](256 * 1024) !== 0) {
      dart.throw(new core.ArgumentError.new("Invalid arguments."));
    }
  }).prototype = requests.ResumableUploadOptions.prototype;
  dart.addTypeTests(requests.ResumableUploadOptions);
  dart.addTypeCaches(requests.ResumableUploadOptions);
  dart.setLibraryUri(requests.ResumableUploadOptions, L0);
  dart.setFieldSignature(requests.ResumableUploadOptions, () => ({
    __proto__: dart.getFields(requests.ResumableUploadOptions.__proto__),
    numberOfAttempts: dart.finalFieldType(dart.legacy(core.int)),
    chunkSize: dart.finalFieldType(dart.legacy(core.int)),
    backoffFunction: dart.finalFieldType(dart.legacy(core.Function))
  }));
  dart.defineLazy(requests.ResumableUploadOptions, {
    /*requests.ResumableUploadOptions.ExponentialBackoff*/get ExponentialBackoff() {
      return dart.fn(failedAttempts => {
        if (dart.notNull(failedAttempts) > 5) return null;
        return new core.Duration.new({seconds: (1)[$leftShift](dart.notNull(failedAttempts) - 1)});
      }, intLToDurationL());
    }
  }, true);
  var C1;
  requests.DownloadOptions = class DownloadOptions extends core.Object {
    get isMetadataDownload() {
      return true;
    }
  };
  (requests.DownloadOptions.new = function() {
    ;
  }).prototype = requests.DownloadOptions.prototype;
  dart.addTypeTests(requests.DownloadOptions);
  dart.addTypeCaches(requests.DownloadOptions);
  dart.setGetterSignature(requests.DownloadOptions, () => ({
    __proto__: dart.getGetters(requests.DownloadOptions.__proto__),
    isMetadataDownload: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(requests.DownloadOptions, L0);
  dart.defineLazy(requests.DownloadOptions, {
    /*requests.DownloadOptions.Metadata*/get Metadata() {
      return C1 || CT.C1;
    },
    /*requests.DownloadOptions.FullMedia*/get FullMedia() {
      return new requests.PartialDownloadOptions.new(new requests.ByteRange.new(0, -1));
    }
  }, true);
  var range$ = dart.privateName(requests, "PartialDownloadOptions.range");
  requests.PartialDownloadOptions = class PartialDownloadOptions extends requests.DownloadOptions {
    get range() {
      return this[range$];
    }
    set range(value) {
      super.range = value;
    }
    get isMetadataDownload() {
      return false;
    }
    get isFullDownload() {
      return this.range.start === 0 && this.range.end === -1;
    }
  };
  (requests.PartialDownloadOptions.new = function(range) {
    this[range$] = range;
    requests.PartialDownloadOptions.__proto__.new.call(this);
    ;
  }).prototype = requests.PartialDownloadOptions.prototype;
  dart.addTypeTests(requests.PartialDownloadOptions);
  dart.addTypeCaches(requests.PartialDownloadOptions);
  dart.setGetterSignature(requests.PartialDownloadOptions, () => ({
    __proto__: dart.getGetters(requests.PartialDownloadOptions.__proto__),
    isFullDownload: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(requests.PartialDownloadOptions, L0);
  dart.setFieldSignature(requests.PartialDownloadOptions, () => ({
    __proto__: dart.getFields(requests.PartialDownloadOptions.__proto__),
    range: dart.finalFieldType(dart.legacy(requests.ByteRange))
  }));
  var start$ = dart.privateName(requests, "ByteRange.start");
  var end$ = dart.privateName(requests, "ByteRange.end");
  requests.ByteRange = class ByteRange extends core.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get length() {
      return dart.notNull(this.end) - dart.notNull(this.start) + 1;
    }
  };
  (requests.ByteRange.new = function(start, end) {
    this[start$] = start;
    this[end$] = end;
    if (!(this.start === 0 && this.end === -1 || dart.notNull(this.start) >= 0 && dart.notNull(this.end) >= dart.notNull(this.start))) {
      dart.throw(new core.ArgumentError.new("Invalid media range [" + dart.str(this.start) + ", " + dart.str(this.end) + "]"));
    }
  }).prototype = requests.ByteRange.prototype;
  dart.addTypeTests(requests.ByteRange);
  dart.addTypeCaches(requests.ByteRange);
  dart.setGetterSignature(requests.ByteRange, () => ({
    __proto__: dart.getGetters(requests.ByteRange.__proto__),
    length: dart.legacy(core.int)
  }));
  dart.setLibraryUri(requests.ByteRange, L0);
  dart.setFieldSignature(requests.ByteRange, () => ({
    __proto__: dart.getFields(requests.ByteRange.__proto__),
    start: dart.finalFieldType(dart.legacy(core.int)),
    end: dart.finalFieldType(dart.legacy(core.int))
  }));
  var message$ = dart.privateName(requests, "ApiRequestError.message");
  requests.ApiRequestError = class ApiRequestError extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "ApiRequestError(message: " + dart.str(this.message) + ")";
    }
  };
  (requests.ApiRequestError.new = function(message) {
    this[message$] = message;
    ;
  }).prototype = requests.ApiRequestError.prototype;
  dart.addTypeTests(requests.ApiRequestError);
  dart.addTypeCaches(requests.ApiRequestError);
  requests.ApiRequestError[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(requests.ApiRequestError, () => ({
    __proto__: dart.getMethods(requests.ApiRequestError.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(requests.ApiRequestError, L0);
  dart.setFieldSignature(requests.ApiRequestError, () => ({
    __proto__: dart.getFields(requests.ApiRequestError.__proto__),
    message: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(requests.ApiRequestError, ['toString']);
  var C2;
  var status$ = dart.privateName(requests, "DetailedApiRequestError.status");
  var errors$ = dart.privateName(requests, "DetailedApiRequestError.errors");
  var jsonResponse$ = dart.privateName(requests, "DetailedApiRequestError.jsonResponse");
  requests.DetailedApiRequestError = class DetailedApiRequestError extends requests.ApiRequestError {
    get status() {
      return this[status$];
    }
    set status(value) {
      super.status = value;
    }
    get errors() {
      return this[errors$];
    }
    set errors(value) {
      super.errors = value;
    }
    get jsonResponse() {
      return this[jsonResponse$];
    }
    set jsonResponse(value) {
      super.jsonResponse = value;
    }
    toString() {
      return "DetailedApiRequestError(status: " + dart.str(this.status) + ", message: " + dart.str(this.message) + ")";
    }
  };
  (requests.DetailedApiRequestError.new = function(status, message, opts) {
    let errors = opts && 'errors' in opts ? opts.errors : C2 || CT.C2;
    let jsonResponse = opts && 'jsonResponse' in opts ? opts.jsonResponse : null;
    this[status$] = status;
    this[errors$] = errors;
    this[jsonResponse$] = jsonResponse;
    requests.DetailedApiRequestError.__proto__.new.call(this, message);
    ;
  }).prototype = requests.DetailedApiRequestError.prototype;
  dart.addTypeTests(requests.DetailedApiRequestError);
  dart.addTypeCaches(requests.DetailedApiRequestError);
  dart.setLibraryUri(requests.DetailedApiRequestError, L0);
  dart.setFieldSignature(requests.DetailedApiRequestError, () => ({
    __proto__: dart.getFields(requests.DetailedApiRequestError.__proto__),
    status: dart.finalFieldType(dart.legacy(core.int)),
    errors: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(requests.ApiRequestErrorDetail)))),
    jsonResponse: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)))
  }));
  dart.defineExtensionMethods(requests.DetailedApiRequestError, ['toString']);
  var domain$ = dart.privateName(requests, "ApiRequestErrorDetail.domain");
  var reason$ = dart.privateName(requests, "ApiRequestErrorDetail.reason");
  var message$0 = dart.privateName(requests, "ApiRequestErrorDetail.message");
  var location$ = dart.privateName(requests, "ApiRequestErrorDetail.location");
  var locationType$ = dart.privateName(requests, "ApiRequestErrorDetail.locationType");
  var extendedHelp$ = dart.privateName(requests, "ApiRequestErrorDetail.extendedHelp");
  var sendReport$ = dart.privateName(requests, "ApiRequestErrorDetail.sendReport");
  var originalJson$ = dart.privateName(requests, "ApiRequestErrorDetail.originalJson");
  requests.ApiRequestErrorDetail = class ApiRequestErrorDetail extends core.Object {
    get domain() {
      return this[domain$];
    }
    set domain(value) {
      super.domain = value;
    }
    get reason() {
      return this[reason$];
    }
    set reason(value) {
      super.reason = value;
    }
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    get location() {
      return this[location$];
    }
    set location(value) {
      super.location = value;
    }
    get locationType() {
      return this[locationType$];
    }
    set locationType(value) {
      super.locationType = value;
    }
    get extendedHelp() {
      return this[extendedHelp$];
    }
    set extendedHelp(value) {
      super.extendedHelp = value;
    }
    get sendReport() {
      return this[sendReport$];
    }
    set sendReport(value) {
      super.sendReport = value;
    }
    get originalJson() {
      return this[originalJson$];
    }
    set originalJson(value) {
      super.originalJson = value;
    }
  };
  (requests.ApiRequestErrorDetail.new = function(opts) {
    let domain = opts && 'domain' in opts ? opts.domain : null;
    let reason = opts && 'reason' in opts ? opts.reason : null;
    let message = opts && 'message' in opts ? opts.message : null;
    let location = opts && 'location' in opts ? opts.location : null;
    let locationType = opts && 'locationType' in opts ? opts.locationType : null;
    let extendedHelp = opts && 'extendedHelp' in opts ? opts.extendedHelp : null;
    let sendReport = opts && 'sendReport' in opts ? opts.sendReport : null;
    this[domain$] = domain;
    this[reason$] = reason;
    this[message$0] = message;
    this[location$] = location;
    this[locationType$] = locationType;
    this[extendedHelp$] = extendedHelp;
    this[sendReport$] = sendReport;
    this[originalJson$] = null;
    ;
  }).prototype = requests.ApiRequestErrorDetail.prototype;
  (requests.ApiRequestErrorDetail.fromJson = function(originalJson) {
    this[originalJson$] = originalJson;
    this[domain$] = StringL().as(originalJson[$_get]("domain"));
    this[reason$] = StringL().as(originalJson[$_get]("reason"));
    this[message$0] = StringL().as(originalJson[$_get]("message"));
    this[location$] = StringL().as(originalJson[$_get]("location"));
    this[locationType$] = StringL().as(originalJson[$_get]("locationType"));
    this[extendedHelp$] = StringL().as(originalJson[$_get]("extendedHelp"));
    this[sendReport$] = StringL().as(originalJson[$_get]("sendReport"));
    ;
  }).prototype = requests.ApiRequestErrorDetail.prototype;
  dart.addTypeTests(requests.ApiRequestErrorDetail);
  dart.addTypeCaches(requests.ApiRequestErrorDetail);
  dart.setLibraryUri(requests.ApiRequestErrorDetail, L0);
  dart.setFieldSignature(requests.ApiRequestErrorDetail, () => ({
    __proto__: dart.getFields(requests.ApiRequestErrorDetail.__proto__),
    domain: dart.finalFieldType(dart.legacy(core.String)),
    reason: dart.finalFieldType(dart.legacy(core.String)),
    message: dart.finalFieldType(dart.legacy(core.String)),
    location: dart.finalFieldType(dart.legacy(core.String)),
    locationType: dart.finalFieldType(dart.legacy(core.String)),
    extendedHelp: dart.finalFieldType(dart.legacy(core.String)),
    sendReport: dart.finalFieldType(dart.legacy(core.String)),
    originalJson: dart.finalFieldType(dart.legacy(core.Map))
  }));
  var _httpClient$ = dart.privateName(clients, "_httpClient");
  var _rootUrl$ = dart.privateName(clients, "_rootUrl");
  var _basePath$ = dart.privateName(clients, "_basePath");
  var _userAgent$ = dart.privateName(clients, "_userAgent");
  var _request = dart.privateName(clients, "_request");
  var C3;
  var C4;
  var C5;
  var C6;
  clients.ApiRequester = class ApiRequester extends core.Object {
    request(requestUrl, method, opts) {
      let body = opts && 'body' in opts ? opts.body : null;
      let queryParams = opts && 'queryParams' in opts ? opts.queryParams : null;
      let uploadMedia = opts && 'uploadMedia' in opts ? opts.uploadMedia : null;
      let uploadOptions = opts && 'uploadOptions' in opts ? opts.uploadOptions : null;
      let downloadOptions = opts && 'downloadOptions' in opts ? opts.downloadOptions : C1 || CT.C1;
      return async.async(dart.dynamic, (function* request() {
        let t0;
        if (uploadMedia != null && !dart.equals(downloadOptions, requests.DownloadOptions.Metadata)) {
          dart.throw(new core.ArgumentError.new("When uploading a [Media] you cannot download a " + "[Media] at the same time!"));
        }
        let downloadRange = null;
        if (PartialDownloadOptionsL().is(downloadOptions) && !dart.test(downloadOptions.isFullDownload)) {
          downloadRange = downloadOptions.range;
        }
        queryParams = (t0 = queryParams, t0 == null ? null : t0[$cast](StringL(), ListLOfStringL()));
        let response = (yield this[_request](requestUrl, method, body, queryParams, uploadMedia, uploadOptions, downloadOptions, downloadRange));
        response = (yield clients._validateResponse(response));
        if (downloadOptions == null) {
          return response.stream.drain(dart.dynamic);
        } else if (dart.equals(downloadOptions, requests.DownloadOptions.Metadata)) {
          let stringStream = clients._decodeStreamAsText(response);
          if (stringStream == null) {
            dart.throw(new requests.ApiRequestError.new("Unable to read response with content-type " + dart.str(response.headers[$_get]("content-type")) + "."));
          }
          let bodyString = (yield stringStream.join(""));
          if (bodyString[$isEmpty]) return null;
          return convert.json.decode(bodyString);
        }
        let contentType = response.headers[$_get]("content-type");
        if (contentType == null) {
          dart.throw(new requests.ApiRequestError.new("No 'content-type' header in media response."));
        }
        let contentLength = null;
        if (response.headers[$_get]("content-length") != null) {
          contentLength = core.int.tryParse(response.headers[$_get]("content-length"));
        }
        if (downloadRange != null) {
          if (contentLength != downloadRange.length) {
            dart.throw(new requests.ApiRequestError.new("Content length of response does not match requested range " + "length."));
          }
          let contentRange = response.headers[$_get]("content-range");
          let expected = "bytes " + dart.str(downloadRange.start) + "-" + dart.str(downloadRange.end) + "/";
          if (contentRange == null || !contentRange[$startsWith](expected)) {
            dart.throw(new requests.ApiRequestError.new("Attempting partial " + "download but got invalid 'Content-Range' header " + "(was: " + dart.str(contentRange) + ", expected: " + expected + ")."));
          }
        }
        return new requests.Media.new(response.stream, contentLength, {contentType: contentType});
      }).bind(this));
    }
    [_request](requestUrl, method, body, queryParams, uploadMedia, uploadOptions, downloadOptions, downloadRange) {
      let downloadAsMedia = downloadOptions != null && !dart.equals(downloadOptions, requests.DownloadOptions.Metadata);
      queryParams == null ? queryParams = new (IdentityMapOfStringL$ListLOfStringL()).new() : null;
      if (uploadMedia != null) {
        if (ResumableUploadOptionsL().is(uploadOptions)) {
          queryParams[$_set]("uploadType", C3 || CT.C3);
        } else if (body == null) {
          queryParams[$_set]("uploadType", C4 || CT.C4);
        } else {
          queryParams[$_set]("uploadType", C5 || CT.C5);
        }
      }
      if (downloadAsMedia) {
        queryParams[$_set]("alt", C4 || CT.C4);
      } else if (downloadOptions != null) {
        queryParams[$_set]("alt", C6 || CT.C6);
      }
      let path = null;
      if (requestUrl[$startsWith]("/")) {
        path = dart.str(this[_rootUrl$]) + dart.str(requestUrl[$substring](1));
      } else {
        path = dart.str(this[_rootUrl$]) + dart.str(this[_basePath$]) + dart.str(requestUrl);
      }
      let containsQueryParameter = path[$contains]("?");
      function addQueryParameter(name, value) {
        name = clients.Escaper.escapeQueryComponent(name);
        value = clients.Escaper.escapeQueryComponent(value);
        if (containsQueryParameter) {
          path = dart.str(path) + "&" + dart.str(name) + "=" + dart.str(value);
        } else {
          path = dart.str(path) + "?" + dart.str(name) + "=" + dart.str(value);
        }
        containsQueryParameter = true;
      }
      dart.fn(addQueryParameter, StringLAndStringLTovoid());
      queryParams[$forEach](dart.fn((key, values) => {
        for (let value of values) {
          addQueryParameter(key, value);
        }
      }, StringLAndListLOfStringLToNullN()));
      let uri = core.Uri.parse(path);
      const simpleUpload = () => {
        let bodyStream = uploadMedia.stream;
        let request = new clients._RequestImpl.new(method, uri, bodyStream);
        request.headers[$addAll](new (IdentityMapOfStringL$StringL()).from(["user-agent", this[_userAgent$], "content-type", uploadMedia.contentType, "content-length", dart.str(uploadMedia.length)]));
        return this[_httpClient$].send(request);
      };
      dart.fn(simpleUpload, VoidToFutureLOfStreamedResponseL());
      const simpleRequest = () => {
        let length = 0;
        let bodyController = StreamControllerOfListLOfintL().new();
        if (body != null) {
          let bytes = convert.utf8.encode(body);
          bodyController.add(bytes);
          length = bytes[$length];
        }
        bodyController.close();
        let headers = null;
        if (downloadRange != null) {
          headers = new (IdentityMapOfStringL$StringL()).from(["user-agent", this[_userAgent$], "content-type", "application/json; charset=utf-8", "content-length", dart.str(length), "range", "bytes=" + dart.str(downloadRange.start) + "-" + dart.str(downloadRange.end), "x-goog-api-client", "gl-dart/" + dart.str(version_fallback.dartVersion)]);
        } else {
          headers = new (IdentityMapOfStringL$StringL()).from(["user-agent", this[_userAgent$], "content-type", "application/json; charset=utf-8", "content-length", dart.str(length), "x-goog-api-client", "gl-dart/" + dart.str(version_fallback.dartVersion)]);
        }
        headers[$removeWhere](dart.fn((key, value) => clients._forbiddenHeaders[$contains](key), StringLAndStringLToboolL()));
        let request = new clients._RequestImpl.new(method, uri, bodyController.stream);
        request.headers[$addAll](headers);
        return this[_httpClient$].send(request);
      };
      dart.fn(simpleRequest, VoidToFutureLOfStreamedResponseL());
      if (uploadMedia != null) {
        if (ResumableUploadOptionsL().is(uploadOptions)) {
          let helper = new clients.ResumableMediaUploader.new(this[_httpClient$], uploadMedia, body, uri, method, uploadOptions, this[_userAgent$]);
          return helper.upload();
        }
        if (uploadMedia.length == null) {
          dart.throw(new core.ArgumentError.new("For non-resumable uploads you need to specify the length of the " + "media to upload."));
        }
        if (body == null) {
          return simpleUpload();
        } else {
          let uploader = new clients.MultipartMediaUploader.new(this[_httpClient$], uploadMedia, body, uri, method, this[_userAgent$]);
          return uploader.upload();
        }
      }
      return simpleRequest();
    }
  };
  (clients.ApiRequester.new = function(_httpClient, _rootUrl, _basePath, _userAgent) {
    this[_httpClient$] = _httpClient;
    this[_rootUrl$] = _rootUrl;
    this[_basePath$] = _basePath;
    this[_userAgent$] = _userAgent;
    if (!this[_rootUrl$][$endsWith]("/")) dart.assertFailed(null, L1, 37, 12, "_rootUrl.endsWith('/')");
  }).prototype = clients.ApiRequester.prototype;
  dart.addTypeTests(clients.ApiRequester);
  dart.addTypeCaches(clients.ApiRequester);
  dart.setMethodSignature(clients.ApiRequester, () => ({
    __proto__: dart.getMethods(clients.ApiRequester.__proto__),
    request: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.String), dart.legacy(core.String)], {body: dart.legacy(core.String), downloadOptions: dart.legacy(requests.DownloadOptions), queryParams: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(core.String))))), uploadMedia: dart.legacy(requests.Media), uploadOptions: dart.legacy(requests.UploadOptions)}, {}),
    [_request]: dart.fnType(dart.legacy(async.Future$(dart.legacy(streamed_response.StreamedResponse))), [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(core.String))))), dart.legacy(requests.Media), dart.legacy(requests.UploadOptions), dart.legacy(requests.DownloadOptions), dart.legacy(requests.ByteRange)])
  }));
  dart.setLibraryUri(clients.ApiRequester, L2);
  dart.setFieldSignature(clients.ApiRequester, () => ({
    __proto__: dart.getFields(clients.ApiRequester.__proto__),
    [_httpClient$]: dart.finalFieldType(dart.legacy(client.Client)),
    [_rootUrl$]: dart.finalFieldType(dart.legacy(core.String)),
    [_basePath$]: dart.finalFieldType(dart.legacy(core.String)),
    [_userAgent$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  var _uploadMedia$ = dart.privateName(clients, "_uploadMedia");
  var _body$ = dart.privateName(clients, "_body");
  var _uri$ = dart.privateName(clients, "_uri");
  var _method$ = dart.privateName(clients, "_method");
  clients.MultipartMediaUploader = class MultipartMediaUploader extends core.Object {
    upload() {
      let base64MediaStream = this[_uploadMedia$].stream.transform(StringL(), clients.MultipartMediaUploader._base64Encoder).transform(ListLOfintL(), convert.ascii.encoder);
      let base64MediaStreamLength = clients.Base64Encoder.lengthOfBase64Stream(this[_uploadMedia$].length);
      let bodyHead = "--" + dart.str(clients.MultipartMediaUploader._boundary) + "\r\n" + "Content-Type: " + "application/json; charset=utf-8" + "\r\n\r\n" + dart.notNull(this[_body$]) + ("\r\n--" + dart.str(clients.MultipartMediaUploader._boundary) + "\r\n" + "Content-Type: " + dart.str(this[_uploadMedia$].contentType) + "\r\n" + "Content-Transfer-Encoding: base64\r\n\r\n");
      let bodyTail = "\r\n--" + dart.str(clients.MultipartMediaUploader._boundary) + "--";
      let totalLength = bodyHead.length + dart.notNull(base64MediaStreamLength) + bodyTail.length;
      let bodyController = StreamControllerOfListLOfintL().new();
      bodyController.add(convert.utf8.encode(bodyHead));
      bodyController.addStream(base64MediaStream).then(core.Null, dart.fn(_ => {
        bodyController.add(convert.utf8.encode(bodyTail));
      }, dynamicToNullN())).catchError(dart.fn((error, stack) => {
        bodyController.addError(error, stack);
      }, dynamicAndStackTraceLToNullN())).then(core.Null, dart.fn(_ => {
        bodyController.close();
      }, ObjectLToNullN()));
      let headers = new (IdentityMapOfStringL$StringL()).from(["user-agent", this[_userAgent$], "content-type", "multipart/related; boundary=\"" + dart.str(clients.MultipartMediaUploader._boundary) + "\"", "content-length", dart.str(totalLength)]);
      let bodyStream = bodyController.stream;
      let request = new clients._RequestImpl.new(this[_method$], this[_uri$], bodyStream);
      request.headers[$addAll](headers);
      return this[_httpClient$].send(request);
    }
  };
  (clients.MultipartMediaUploader.new = function(_httpClient, _uploadMedia, _body, _uri, _method, _userAgent) {
    this[_httpClient$] = _httpClient;
    this[_uploadMedia$] = _uploadMedia;
    this[_body$] = _body;
    this[_uri$] = _uri;
    this[_method$] = _method;
    this[_userAgent$] = _userAgent;
    ;
  }).prototype = clients.MultipartMediaUploader.prototype;
  dart.addTypeTests(clients.MultipartMediaUploader);
  dart.addTypeCaches(clients.MultipartMediaUploader);
  dart.setMethodSignature(clients.MultipartMediaUploader, () => ({
    __proto__: dart.getMethods(clients.MultipartMediaUploader.__proto__),
    upload: dart.fnType(dart.legacy(async.Future$(dart.legacy(streamed_response.StreamedResponse))), [])
  }));
  dart.setLibraryUri(clients.MultipartMediaUploader, L2);
  dart.setFieldSignature(clients.MultipartMediaUploader, () => ({
    __proto__: dart.getFields(clients.MultipartMediaUploader.__proto__),
    [_httpClient$]: dart.finalFieldType(dart.legacy(client.Client)),
    [_uploadMedia$]: dart.finalFieldType(dart.legacy(requests.Media)),
    [_uri$]: dart.finalFieldType(dart.legacy(core.Uri)),
    [_body$]: dart.finalFieldType(dart.legacy(core.String)),
    [_method$]: dart.finalFieldType(dart.legacy(core.String)),
    [_userAgent$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(clients.MultipartMediaUploader, {
    /*clients.MultipartMediaUploader._boundary*/get _boundary() {
      return "314159265358979323846";
    },
    /*clients.MultipartMediaUploader._base64Encoder*/get _base64Encoder() {
      return new clients.Base64Encoder.new();
    }
  }, true);
  clients.Base64Encoder = class Base64Encoder extends async.StreamTransformerBase$(dart.legacy(core.List$(dart.legacy(core.int))), dart.legacy(core.String)) {
    static lengthOfBase64Stream(lengthOfByteStream) {
      return ((dart.notNull(lengthOfByteStream) + 2) / 3)[$truncate]() * 4;
    }
    bind(stream) {
      StreamLOfListLOfintL().as(stream);
      let controller = null;
      let remainingBytes = JSArrayOfintL().of([]);
      function onData(bytes) {
        if (dart.notNull(remainingBytes[$length]) + dart.notNull(bytes[$length]) < 3) {
          remainingBytes[$addAll](bytes);
          return;
        }
        let start = null;
        if (dart.test(remainingBytes[$isEmpty])) {
          start = 0;
        } else if (remainingBytes[$length] === 1) {
          remainingBytes[$add](bytes[$_get](0));
          remainingBytes[$add](bytes[$_get](1));
          start = 2;
        } else if (remainingBytes[$length] === 2) {
          remainingBytes[$add](bytes[$_get](0));
          start = 1;
        }
        if (dart.test(remainingBytes[$isNotEmpty])) {
          controller.add(convert.base64.encode(remainingBytes));
          remainingBytes[$clear]();
        }
        let chunksOf3 = ((dart.notNull(bytes[$length]) - dart.notNull(start)) / 3)[$truncate]();
        let end = dart.notNull(start) + 3 * chunksOf3;
        if (start === 0 && end === bytes[$length]) {
          controller.add(convert.base64.encode(bytes));
        } else {
          controller.add(convert.base64.encode(bytes[$sublist](start, end)));
          if (end < dart.notNull(bytes[$length])) {
            remainingBytes[$addAll](bytes[$sublist](end));
          }
        }
      }
      dart.fn(onData, ListLOfintLTovoid());
      function onError(error, stack) {
        controller.addError(error, stack);
      }
      dart.fn(onError, dynamicAndStackTraceLTovoid());
      function onDone() {
        if (dart.test(remainingBytes[$isNotEmpty])) {
          controller.add(convert.base64.encode(remainingBytes));
          remainingBytes[$clear]();
        }
        controller.close();
      }
      dart.fn(onDone, VoidTovoid());
      let subscription = null;
      controller = StreamControllerOfStringL().new({onListen: dart.fn(() => {
          subscription = stream.listen(onData, {onError: onError, onDone: onDone});
        }, VoidToNullN()), onPause: dart.fn(() => {
          subscription.pause();
        }, VoidToNullN()), onResume: dart.fn(() => {
          subscription.resume();
        }, VoidToNullN()), onCancel: dart.fn(() => {
          subscription.cancel();
        }, VoidToNullN())});
      return controller.stream;
    }
  };
  (clients.Base64Encoder.new = function() {
    clients.Base64Encoder.__proto__.new.call(this);
    ;
  }).prototype = clients.Base64Encoder.prototype;
  dart.addTypeTests(clients.Base64Encoder);
  dart.addTypeCaches(clients.Base64Encoder);
  dart.setMethodSignature(clients.Base64Encoder, () => ({
    __proto__: dart.getMethods(clients.Base64Encoder.__proto__),
    bind: dart.fnType(dart.legacy(async.Stream$(dart.legacy(core.String))), [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(clients.Base64Encoder, L2);
  var _options$ = dart.privateName(clients, "_options");
  var _startSession = dart.privateName(clients, "_startSession");
  var _uploadChunkDrained = dart.privateName(clients, "_uploadChunkDrained");
  var _uploadChunkResumable = dart.privateName(clients, "_uploadChunkResumable");
  var _bytes2Stream = dart.privateName(clients, "_bytes2Stream");
  var _uploadChunk = dart.privateName(clients, "_uploadChunk");
  var _listOfBytes2Stream = dart.privateName(clients, "_listOfBytes2Stream");
  clients.ResumableMediaUploader = class ResumableMediaUploader extends core.Object {
    upload() {
      return this[_startSession]().then(StreamedResponseL(), dart.fn(uploadUri => {
        let subscription = null;
        let completer = CompleterOfStreamedResponseL().new();
        let completed = false;
        let chunkStack = new clients.ChunkStack.new(this[_options$].chunkSize);
        subscription = this[_uploadMedia$].stream.listen(dart.fn(bytes => {
          chunkStack.addBytes(bytes);
          let hasPartialChunk = chunkStack.hasPartialChunk;
          if (dart.notNull(chunkStack.length) > 1 || chunkStack.length === 1 && dart.test(hasPartialChunk)) {
            subscription.pause();
            let fullChunks = null;
            if (dart.test(hasPartialChunk)) {
              fullChunks = chunkStack.removeSublist(0, chunkStack.length);
            } else {
              fullChunks = chunkStack.removeSublist(0, dart.notNull(chunkStack.length) - 1);
            }
            async.Future.forEach(ResumableChunkL(), fullChunks, dart.fn(c => this[_uploadChunkDrained](uploadUri, c), ResumableChunkLToFutureL())).then(core.Null, dart.fn(_ => {
              subscription.resume();
            }, dynamicToNullN())).catchError(dart.fn((error, stack) => {
              subscription.cancel();
              completed = true;
              completer.completeError(error, stack);
            }, dynamicAndStackTraceLToNullN()));
          }
        }, ListLOfintLToNullN()), {onError: dart.fn((error, stack) => {
            subscription.cancel();
            if (!completed) {
              completed = true;
              completer.completeError(error, stack);
            }
          }, dynamicAndStackTraceLToNullN()), onDone: dart.fn(() => {
            if (!completed) {
              chunkStack.finalize();
              let lastChunk = null;
              if (chunkStack.length === 1) {
                lastChunk = chunkStack.removeSublist(0, chunkStack.length)[$first];
              } else {
                completer.completeError(new core.StateError.new("Resumable uploads need to result in at least one non-empty " + "chunk at the end."));
                return;
              }
              let end = lastChunk.endOfChunk;
              if (this[_uploadMedia$].length != null) {
                if (dart.notNull(end) < dart.notNull(this[_uploadMedia$].length)) {
                  completer.completeError(new requests.ApiRequestError.new("Received less bytes than indicated by [Media.length]."));
                  return;
                } else if (dart.notNull(end) > dart.notNull(this[_uploadMedia$].length)) {
                  completer.completeError(new requests.ApiRequestError.new("Received more bytes than indicated by [Media.length]."));
                  return;
                }
              }
              this[_uploadChunkResumable](uploadUri, lastChunk, {lastChunk: true}).then(core.Null, dart.fn(response => {
                completer.complete(response);
              }, StreamedResponseLToNullN())).catchError(dart.fn((error, stack) => {
                completer.completeError(error, stack);
              }, dynamicAndStackTraceLToNullN()));
            }
          }, VoidToNullN())});
        return completer.future;
      }, UriLToFutureLOfStreamedResponseL()));
    }
    [_startSession]() {
      let length = 0;
      let bytes = null;
      if (this[_body$] != null) {
        bytes = convert.utf8.encode(this[_body$]);
        length = bytes[$length];
      }
      let bodyStream = this[_bytes2Stream](bytes);
      let request = new clients._RequestImpl.new(this[_method$], this[_uri$], bodyStream);
      request.headers[$addAll](new (IdentityMapOfStringL$StringL()).from(["user-agent", this[_userAgent$], "content-type", "application/json; charset=utf-8", "content-length", dart.str(length), "x-upload-content-type", this[_uploadMedia$].contentType, "x-upload-content-length", dart.str(this[_uploadMedia$].length)]));
      return this[_httpClient$].send(request).then(UriL(), dart.fn(response => response.stream.drain(dart.dynamic).then(UriL(), dart.fn(_ => {
        let uploadUri = response.headers[$_get]("location");
        if (response.statusCode !== 200 || uploadUri == null) {
          dart.throw(new requests.ApiRequestError.new("Invalid response for resumable upload attempt " + "(status was: " + dart.str(response.statusCode) + ")"));
        }
        return core.Uri.parse(uploadUri);
      }, dynamicToUriL())), StreamedResponseLToFutureLOfUriL()));
    }
    [_uploadChunkDrained](uri, chunk) {
      return this[_uploadChunkResumable](uri, chunk).then(dart.dynamic, dart.fn(response => response.stream.drain(dart.dynamic), StreamedResponseLToFutureL()));
    }
    [_uploadChunkResumable](uri, chunk, opts) {
      let lastChunk = opts && 'lastChunk' in opts ? opts.lastChunk : false;
      const tryUpload = attemptsLeft => {
        return this[_uploadChunk](uri, chunk, {lastChunk: lastChunk}).then(StreamedResponseL(), dart.fn(response => {
          let status = response.statusCode;
          if (dart.notNull(attemptsLeft) > 0 && (status === 500 || 502 <= dart.notNull(status) && dart.notNull(status) < 504)) {
            return response.stream.drain(dart.dynamic).then(StreamedResponseL(), dart.fn(_ => {
              let t1, t0;
              let failedAttempts = dart.notNull(this[_options$].numberOfAttempts) - dart.notNull(attemptsLeft);
              let duration = DurationL().as((t0 = this[_options$], t1 = failedAttempts, dart.dsend(t0, 'backoffFunction', [t1])));
              if (duration == null) {
                dart.throw(new requests.DetailedApiRequestError.new(status, "Resumable upload: Uploading a chunk resulted in status " + dart.str(status) + ". Maximum number of retries reached."));
              }
              return async.Future.delayed(duration).then(StreamedResponseL(), dart.fn(_ => tryUpload(dart.notNull(attemptsLeft) - 1), dynamicToFutureLOfStreamedResponseL()));
            }, dynamicToFutureLOfStreamedResponseL()));
          } else if (!dart.test(lastChunk) && status !== 308) {
            return response.stream.drain(dart.dynamic).then(StreamedResponseL(), dart.fn(_ => {
              dart.throw(new requests.DetailedApiRequestError.new(status, "Resumable upload: Uploading a chunk resulted in status " + dart.str(status) + " instead of 308."));
            }, dynamicToNullN()));
          } else if (dart.test(lastChunk) && status !== 201 && status !== 200) {
            return response.stream.drain(dart.dynamic).then(StreamedResponseL(), dart.fn(_ => {
              dart.throw(new requests.DetailedApiRequestError.new(status, "Resumable upload: Uploading a chunk resulted in status " + dart.str(status) + " instead of 200 or 201."));
            }, dynamicToNullN()));
          } else {
            return response;
          }
        }, StreamedResponseLToFutureOrOfStreamedResponseL()));
      };
      dart.fn(tryUpload, intLToFutureLOfStreamedResponseL());
      return tryUpload(dart.notNull(this[_options$].numberOfAttempts) - 1);
    }
    [_uploadChunk](uri, chunk, opts) {
      let lastChunk = opts && 'lastChunk' in opts ? opts.lastChunk : false;
      let mediaTotalLength = this[_uploadMedia$].length == null ? null : dart.toString(this[_uploadMedia$].length);
      if (mediaTotalLength == null || dart.test(lastChunk)) {
        if (dart.test(lastChunk)) {
          mediaTotalLength = dart.str(chunk.endOfChunk);
        } else {
          mediaTotalLength = "*";
        }
      }
      let headers = new (IdentityMapOfStringL$StringL()).from(["user-agent", this[_userAgent$], "content-type", this[_uploadMedia$].contentType, "content-length", dart.str(chunk.length), "content-range", "bytes " + dart.str(chunk.offset) + "-" + dart.str(dart.notNull(chunk.endOfChunk) - 1) + "/" + dart.str(mediaTotalLength)]);
      let stream = this[_listOfBytes2Stream](chunk.byteArrays);
      let request = new clients._RequestImpl.new("PUT", uri, stream);
      request.headers[$addAll](headers);
      return this[_httpClient$].send(request);
    }
    [_bytes2Stream](bytes) {
      let bodyController = StreamControllerOfListLOfintL().new();
      if (bytes != null) {
        bodyController.add(bytes);
      }
      bodyController.close();
      return bodyController.stream;
    }
    [_listOfBytes2Stream](listOfBytes) {
      let controller = StreamControllerOfListLOfintL().new();
      for (let array of listOfBytes) {
        controller.add(array);
      }
      controller.close();
      return controller.stream;
    }
  };
  (clients.ResumableMediaUploader.new = function(_httpClient, _uploadMedia, _body, _uri, _method, _options, _userAgent) {
    this[_httpClient$] = _httpClient;
    this[_uploadMedia$] = _uploadMedia;
    this[_body$] = _body;
    this[_uri$] = _uri;
    this[_method$] = _method;
    this[_options$] = _options;
    this[_userAgent$] = _userAgent;
    ;
  }).prototype = clients.ResumableMediaUploader.prototype;
  dart.addTypeTests(clients.ResumableMediaUploader);
  dart.addTypeCaches(clients.ResumableMediaUploader);
  dart.setMethodSignature(clients.ResumableMediaUploader, () => ({
    __proto__: dart.getMethods(clients.ResumableMediaUploader.__proto__),
    upload: dart.fnType(dart.legacy(async.Future$(dart.legacy(streamed_response.StreamedResponse))), []),
    [_startSession]: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Uri))), []),
    [_uploadChunkDrained]: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.Uri), dart.legacy(clients.ResumableChunk)]),
    [_uploadChunkResumable]: dart.fnType(dart.legacy(async.Future$(dart.legacy(streamed_response.StreamedResponse))), [dart.legacy(core.Uri), dart.legacy(clients.ResumableChunk)], {lastChunk: dart.legacy(core.bool)}, {}),
    [_uploadChunk]: dart.fnType(dart.legacy(async.Future$(dart.legacy(streamed_response.StreamedResponse))), [dart.legacy(core.Uri), dart.legacy(clients.ResumableChunk)], {lastChunk: dart.legacy(core.bool)}, {}),
    [_bytes2Stream]: dart.fnType(dart.legacy(async.Stream$(dart.legacy(core.List$(dart.legacy(core.int))))), [dart.legacy(core.List$(dart.legacy(core.int)))]),
    [_listOfBytes2Stream]: dart.fnType(dart.legacy(async.Stream$(dart.legacy(core.List$(dart.legacy(core.int))))), [dart.legacy(core.List$(dart.legacy(core.List$(dart.legacy(core.int)))))])
  }));
  dart.setLibraryUri(clients.ResumableMediaUploader, L2);
  dart.setFieldSignature(clients.ResumableMediaUploader, () => ({
    __proto__: dart.getFields(clients.ResumableMediaUploader.__proto__),
    [_httpClient$]: dart.finalFieldType(dart.legacy(client.Client)),
    [_uploadMedia$]: dart.finalFieldType(dart.legacy(requests.Media)),
    [_uri$]: dart.finalFieldType(dart.legacy(core.Uri)),
    [_body$]: dart.finalFieldType(dart.legacy(core.String)),
    [_method$]: dart.finalFieldType(dart.legacy(core.String)),
    [_options$]: dart.finalFieldType(dart.legacy(requests.ResumableUploadOptions)),
    [_userAgent$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  var _chunkStack = dart.privateName(clients, "_chunkStack");
  var _byteArrays = dart.privateName(clients, "_byteArrays");
  var _length = dart.privateName(clients, "_length");
  var _offset = dart.privateName(clients, "_offset");
  var _finalized = dart.privateName(clients, "_finalized");
  var _chunkSize$ = dart.privateName(clients, "_chunkSize");
  clients.ChunkStack = class ChunkStack extends core.Object {
    get hasPartialChunk() {
      return dart.notNull(this[_length]) > 0;
    }
    get length() {
      return this[_chunkStack][$length];
    }
    get totalByteLength() {
      if (!dart.test(this[_finalized])) {
        dart.throw(new core.StateError.new("ChunkStack has not been finalized yet."));
      }
      return this[_offset];
    }
    removeSublist(from, to) {
      let sublist = this[_chunkStack][$sublist](from, to);
      this[_chunkStack][$removeRange](from, to);
      return sublist;
    }
    addBytes(bytes) {
      if (dart.test(this[_finalized])) {
        dart.throw(new core.StateError.new("ChunkStack has already been finalized."));
      }
      let remaining = dart.notNull(this[_chunkSize$]) - dart.notNull(this[_length]);
      if (dart.notNull(bytes[$length]) >= remaining) {
        let left = bytes[$sublist](0, remaining);
        let right = bytes[$sublist](remaining);
        this[_byteArrays][$add](left);
        this[_length] = dart.notNull(this[_length]) + dart.notNull(left[$length]);
        this[_chunkStack][$add](new clients.ResumableChunk.new(this[_byteArrays], this[_offset], this[_length]));
        this[_byteArrays] = JSArrayOfListLOfintL().of([]);
        this[_offset] = dart.notNull(this[_offset]) + dart.notNull(this[_length]);
        this[_length] = 0;
        this.addBytes(right);
      } else if (dart.test(bytes[$isNotEmpty])) {
        this[_byteArrays][$add](bytes);
        this[_length] = dart.notNull(this[_length]) + dart.notNull(bytes[$length]);
      }
    }
    finalize() {
      if (dart.test(this[_finalized])) {
        dart.throw(new core.StateError.new("ChunkStack has already been finalized."));
      }
      this[_finalized] = true;
      if (dart.notNull(this[_length]) > 0) {
        this[_chunkStack][$add](new clients.ResumableChunk.new(this[_byteArrays], this[_offset], this[_length]));
        this[_offset] = dart.notNull(this[_offset]) + dart.notNull(this[_length]);
      }
    }
  };
  (clients.ChunkStack.new = function(_chunkSize) {
    this[_chunkStack] = JSArrayOfResumableChunkL().of([]);
    this[_byteArrays] = JSArrayOfListLOfintL().of([]);
    this[_length] = 0;
    this[_offset] = 0;
    this[_finalized] = false;
    this[_chunkSize$] = _chunkSize;
    ;
  }).prototype = clients.ChunkStack.prototype;
  dart.addTypeTests(clients.ChunkStack);
  dart.addTypeCaches(clients.ChunkStack);
  dart.setMethodSignature(clients.ChunkStack, () => ({
    __proto__: dart.getMethods(clients.ChunkStack.__proto__),
    removeSublist: dart.fnType(dart.legacy(core.List$(dart.legacy(clients.ResumableChunk))), [dart.legacy(core.int), dart.legacy(core.int)]),
    addBytes: dart.fnType(dart.void, [dart.legacy(core.List$(dart.legacy(core.int)))]),
    finalize: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(clients.ChunkStack, () => ({
    __proto__: dart.getGetters(clients.ChunkStack.__proto__),
    hasPartialChunk: dart.legacy(core.bool),
    length: dart.legacy(core.int),
    totalByteLength: dart.legacy(core.int)
  }));
  dart.setLibraryUri(clients.ChunkStack, L2);
  dart.setFieldSignature(clients.ChunkStack, () => ({
    __proto__: dart.getFields(clients.ChunkStack.__proto__),
    [_chunkSize$]: dart.finalFieldType(dart.legacy(core.int)),
    [_chunkStack]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(clients.ResumableChunk)))),
    [_byteArrays]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.List$(dart.legacy(core.int)))))),
    [_length]: dart.fieldType(dart.legacy(core.int)),
    [_offset]: dart.fieldType(dart.legacy(core.int)),
    [_finalized]: dart.fieldType(dart.legacy(core.bool))
  }));
  var byteArrays$ = dart.privateName(clients, "ResumableChunk.byteArrays");
  var offset$ = dart.privateName(clients, "ResumableChunk.offset");
  var length$0 = dart.privateName(clients, "ResumableChunk.length");
  clients.ResumableChunk = class ResumableChunk extends core.Object {
    get byteArrays() {
      return this[byteArrays$];
    }
    set byteArrays(value) {
      super.byteArrays = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get length() {
      return this[length$0];
    }
    set length(value) {
      super.length = value;
    }
    get endOfChunk() {
      return dart.notNull(this.offset) + dart.notNull(this.length);
    }
  };
  (clients.ResumableChunk.new = function(byteArrays, offset, length) {
    this[byteArrays$] = byteArrays;
    this[offset$] = offset;
    this[length$0] = length;
    ;
  }).prototype = clients.ResumableChunk.prototype;
  dart.addTypeTests(clients.ResumableChunk);
  dart.addTypeCaches(clients.ResumableChunk);
  dart.setGetterSignature(clients.ResumableChunk, () => ({
    __proto__: dart.getGetters(clients.ResumableChunk.__proto__),
    endOfChunk: dart.legacy(core.int)
  }));
  dart.setLibraryUri(clients.ResumableChunk, L2);
  dart.setFieldSignature(clients.ResumableChunk, () => ({
    __proto__: dart.getFields(clients.ResumableChunk.__proto__),
    byteArrays: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.List$(dart.legacy(core.int)))))),
    offset: dart.finalFieldType(dart.legacy(core.int)),
    length: dart.finalFieldType(dart.legacy(core.int))
  }));
  var _stream = dart.privateName(clients, "_stream");
  clients._RequestImpl = class _RequestImpl extends base_request.BaseRequest {
    finalize() {
      super.finalize();
      return new byte_stream.ByteStream.new(this[_stream]);
    }
  };
  (clients._RequestImpl.new = function(method, url, stream = null) {
    this[_stream] = stream == null ? StreamOfListLOfintL().fromIterable(JSArrayOfListLOfintL().of([])) : stream;
    clients._RequestImpl.__proto__.new.call(this, method, url);
    ;
  }).prototype = clients._RequestImpl.prototype;
  dart.addTypeTests(clients._RequestImpl);
  dart.addTypeCaches(clients._RequestImpl);
  dart.setLibraryUri(clients._RequestImpl, L2);
  dart.setFieldSignature(clients._RequestImpl, () => ({
    __proto__: dart.getFields(clients._RequestImpl.__proto__),
    [_stream]: dart.finalFieldType(dart.legacy(async.Stream$(dart.legacy(core.List$(dart.legacy(core.int))))))
  }));
  clients.Escaper = class Escaper extends core.Object {
    static ecapeVariableReserved(name) {
      return core.Uri.encodeFull(name);
    }
    static ecapePathComponent(name) {
      return clients.Escaper._encodeUnreserved(name);
    }
    static ecapeVariable(name) {
      return clients.Escaper._encodeUnreserved(name);
    }
    static escapeQueryComponent(name) {
      return clients.Escaper._encodeUnreserved(name);
    }
    static _encodeUnreserved(name) {
      return core.Uri.encodeQueryComponent(name)[$replaceAll]("+", "%20");
    }
  };
  (clients.Escaper.new = function() {
    ;
  }).prototype = clients.Escaper.prototype;
  dart.addTypeTests(clients.Escaper);
  dart.addTypeCaches(clients.Escaper);
  dart.setLibraryUri(clients.Escaper, L2);
  var Utf8Decoder__allowMalformed = dart.privateName(convert, "Utf8Decoder._allowMalformed");
  var C7;
  clients._validateResponse = function _validateResponse(response) {
    return async.async(StreamedResponseL(), function* _validateResponse() {
      let statusCode = response.statusCode;
      if (dart.notNull(statusCode) < 200 || dart.notNull(statusCode) >= 400) {
        let stringStream = clients._decodeStreamAsText(response);
        if (stringStream != null) {
          let jsonResponse = (yield stringStream.transform(ObjectL(), convert.json.decoder).first);
          if (MapL().is(jsonResponse) && MapL().is(jsonResponse[$_get]("error"))) {
            let error = MapL().as(jsonResponse[$_get]("error"));
            let codeValue = error[$_get]("code");
            let message = StringL().as(error[$_get]("message"));
            let code = StringL().is(codeValue) ? core.int.tryParse(codeValue) : intL().as(codeValue);
            let errors = JSArrayOfApiRequestErrorDetailL().of([]);
            if (dart.test(error[$containsKey]("errors")) && ListL().is(error[$_get]("errors"))) {
              errors = ListL().as(error[$_get]("errors"))[$map](ApiRequestErrorDetailL(), dart.fn(e => new requests.ApiRequestErrorDetail.fromJson(MapL().as(e)), dynamicToApiRequestErrorDetailL()))[$toList]();
            }
            dart.throw(new requests.DetailedApiRequestError.new(code, message, {errors: errors, jsonResponse: MapLOfStringL$dynamic().as(jsonResponse)}));
          }
        }
        dart.throw(new requests.DetailedApiRequestError.new(statusCode, "No error details. HTTP status was: " + dart.str(statusCode) + "."));
      }
      return response;
    });
  };
  clients._decodeStreamAsText = function _decodeStreamAsText(response) {
    let contentType = response.headers[$_get]("content-type");
    if (contentType != null && contentType[$toLowerCase]()[$startsWith]("application/json")) {
      return response.stream.transform(StringL(), C7 || CT.C7);
    } else {
      return null;
    }
  };
  clients.mapMap = function mapMap(F, T, source, convert) {
    if (!(source != null)) dart.assertFailed(null, L1, 879, 10, "source != null");
    if (!(convert != null)) dart.assertFailed(null, L1, 880, 10, "convert != null");
    let result = new (_js_helper.IdentityMap$(StringL(), dart.legacy(T))).new();
    source[$forEach](dart.fn((key, value) => {
      result[$_set](key, convert(value));
    }, dart.fnType(core.Null, [StringL(), dart.legacy(F)])));
    return result;
  };
  var C8;
  dart.defineLazy(clients, {
    /*clients.CONTENT_TYPE_JSON_UTF8*/get CONTENT_TYPE_JSON_UTF8() {
      return "application/json; charset=utf-8";
    },
    /*clients._forbiddenHeaders*/get _forbiddenHeaders() {
      return C8 || CT.C8;
    }
  }, true);
  dart.defineLazy(version_fallback, {
    /*version_fallback.dartVersion*/get dartVersion() {
      return "2.0.0";
    }
  }, true);
  dart.trackLibraries("packages/_discoveryapis_commons/_discoveryapis_commons", {
    "package:_discoveryapis_commons/_discoveryapis_commons.dart": _discoveryapis_commons,
    "package:_discoveryapis_commons/src/requests.dart": requests,
    "package:_discoveryapis_commons/src/clients.dart": clients,
    "package:_discoveryapis_commons/src/version_fallback.dart": version_fallback
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/requests.dart","src/clients.dart","src/version_fallback.dart"],"names":[],"mappings":"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","file":"_discoveryapis_commons.ddc.js"}');
  // Exports:
  return {
    _discoveryapis_commons: _discoveryapis_commons,
    src__requests: requests,
    src__clients: clients,
    src__version_fallback: version_fallback
  };
}));

//# sourceMappingURL=_discoveryapis_commons.ddc.js.map
