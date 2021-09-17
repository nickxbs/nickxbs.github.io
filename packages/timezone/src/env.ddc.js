define(['dart_sdk'], (function load__packages__timezone__src__env(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var exceptions = Object.create(dart.library);
  var tzdb = Object.create(dart.library);
  var location_database = Object.create(dart.library);
  var location = Object.create(dart.library);
  var env = Object.create(dart.library);
  var $toString = dartx.toString;
  var $values = dartx.values;
  var $toList = dartx.toList;
  var $compareTo = dartx.compareTo;
  var $sort = dartx.sort;
  var $add = dartx.add;
  var $length = dartx.length;
  var $buffer = dartx.buffer;
  var $asByteData = dartx.asByteData;
  var $setUint32 = dartx.setUint32;
  var $setAll = dartx.setAll;
  var $offsetInBytes = dartx.offsetInBytes;
  var $lengthInBytes = dartx.lengthInBytes;
  var $getUint32 = dartx.getUint32;
  var $modulo = dartx['%'];
  var $asUint8List = dartx.asUint8List;
  var $putIfAbsent = dartx.putIfAbsent;
  var $setUint8 = dartx.setUint8;
  var $codeUnits = dartx.codeUnits;
  var $_get = dartx._get;
  var $truncate = dartx.truncate;
  var $setInt32 = dartx.setInt32;
  var $floorToDouble = dartx.floorToDouble;
  var $toDouble = dartx.toDouble;
  var $setFloat64 = dartx.setFloat64;
  var $getInt32 = dartx.getInt32;
  var $getUint8 = dartx.getUint8;
  var $getFloat64 = dartx.getFloat64;
  var $toInt = dartx.toInt;
  var $_set = dartx._set;
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  var $isNotEmpty = dartx.isNotEmpty;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ListLOfintL = () => (ListLOfintL = dart.constFn(dart.legacy(ListOfintL())))();
  var JSArrayOfListLOfintL = () => (JSArrayOfListLOfintL = dart.constFn(_interceptors.JSArray$(ListLOfintL())))();
  var LocationL = () => (LocationL = dart.constFn(dart.legacy(location.Location)))();
  var LocationLAndLocationLTointL = () => (LocationLAndLocationLTointL = dart.constFn(dart.fnType(intL(), [LocationL(), LocationL()])))();
  var Uint8ListL = () => (Uint8ListL = dart.constFn(dart.legacy(typed_data.Uint8List)))();
  var SyncIterableOfLocationL = () => (SyncIterableOfLocationL = dart.constFn(_js_helper.SyncIterable$(LocationL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var IdentityMapOfStringL$intL = () => (IdentityMapOfStringL$intL = dart.constFn(_js_helper.IdentityMap$(StringL(), intL())))();
  var JSArrayOfintL = () => (JSArrayOfintL = dart.constFn(_interceptors.JSArray$(intL())))();
  var VoidTointL = () => (VoidTointL = dart.constFn(dart.fnType(intL(), [])))();
  var TimeZoneL = () => (TimeZoneL = dart.constFn(dart.legacy(location.TimeZone)))();
  var JSArrayOfTimeZoneL = () => (JSArrayOfTimeZoneL = dart.constFn(_interceptors.JSArray$(TimeZoneL())))();
  var IdentityMapOfStringL$LocationL = () => (IdentityMapOfStringL$LocationL = dart.constFn(_js_helper.IdentityMap$(StringL(), LocationL())))();
  const CT = Object.create(null);
  var L1 = "file:///C:/Users/nicol/AppData/Local/Temp/scratch_space31d894d0/packages/timezone/src/tzdb.dart";
  var L3 = "package:timezone/src/location.dart";
  var L0 = "package:timezone/src/exceptions.dart";
  var L2 = "package:timezone/src/location_database.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: location.TimeZone.prototype,
        [TimeZone_abbr]: "UTC",
        [TimeZone_isDst]: false,
        [TimeZone_offset]: 0
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: location.TzInstant.prototype,
        [TzInstant_end]: 8640000000000000.0,
        [TzInstant_start]: -8640000000000000.0,
        [TzInstant_timeZone]: C1 || CT.C1
      });
    }
  }, false);
  var msg$ = dart.privateName(exceptions, "TimeZoneInitException.msg");
  exceptions.TimeZoneInitException = class TimeZoneInitException extends core.Object {
    get msg() {
      return this[msg$];
    }
    set msg(value) {
      super.msg = value;
    }
    toString() {
      let t0;
      t0 = this.msg;
      return t0 == null ? "TimeZoneInitException" : t0;
    }
  };
  (exceptions.TimeZoneInitException.new = function(msg) {
    this[msg$] = msg;
    ;
  }).prototype = exceptions.TimeZoneInitException.prototype;
  dart.addTypeTests(exceptions.TimeZoneInitException);
  dart.addTypeCaches(exceptions.TimeZoneInitException);
  exceptions.TimeZoneInitException[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(exceptions.TimeZoneInitException, () => ({
    __proto__: dart.getMethods(exceptions.TimeZoneInitException.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(exceptions.TimeZoneInitException, L0);
  dart.setFieldSignature(exceptions.TimeZoneInitException, () => ({
    __proto__: dart.getFields(exceptions.TimeZoneInitException.__proto__),
    msg: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(exceptions.TimeZoneInitException, ['toString']);
  var msg$0 = dart.privateName(exceptions, "LocationNotFoundException.msg");
  exceptions.LocationNotFoundException = class LocationNotFoundException extends core.Object {
    get msg() {
      return this[msg$0];
    }
    set msg(value) {
      super.msg = value;
    }
    toString() {
      let t0;
      t0 = this.msg;
      return t0 == null ? "LocationNotFoundException" : t0;
    }
  };
  (exceptions.LocationNotFoundException.new = function(msg) {
    this[msg$0] = msg;
    ;
  }).prototype = exceptions.LocationNotFoundException.prototype;
  dart.addTypeTests(exceptions.LocationNotFoundException);
  dart.addTypeCaches(exceptions.LocationNotFoundException);
  exceptions.LocationNotFoundException[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(exceptions.LocationNotFoundException, () => ({
    __proto__: dart.getMethods(exceptions.LocationNotFoundException.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(exceptions.LocationNotFoundException, L0);
  dart.setFieldSignature(exceptions.LocationNotFoundException, () => ({
    __proto__: dart.getFields(exceptions.LocationNotFoundException.__proto__),
    msg: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(exceptions.LocationNotFoundException, ['toString']);
  tzdb.tzdbSerialize = function tzdbSerialize(db) {
    let t0;
    let locationsInBytes = JSArrayOfListLOfintL().of([]);
    let bufferLength = 0;
    let iter = (t0 = db.locations[$values][$toList](), (() => {
      t0[$sort](dart.fn((l, r) => l.name[$compareTo](r.name), LocationLAndLocationLTointL()));
      return t0;
    })());
    for (let l of iter) {
      let b = tzdb._serializeLocation(l);
      locationsInBytes[$add](b);
      bufferLength = dart.notNull(bufferLength) + (8 + dart.notNull(b[$length]));
      bufferLength = tzdb._align(bufferLength, 8);
    }
    let r = _native_typed_data.NativeUint8List.new(bufferLength);
    let rb = r[$buffer][$asByteData]();
    let offset = 0;
    for (let b of locationsInBytes) {
      let length = tzdb._align(b[$length], 8);
      rb[$setUint32](offset, length);
      r[$setAll](offset + 8, b);
      offset = offset + (8 + dart.notNull(length));
    }
    return r;
  };
  tzdb.tzdbDeserialize = function tzdbDeserialize(rawData) {
    return new (SyncIterableOfLocationL()).new(function* tzdbDeserialize() {
      let data = Uint8ListL().is(rawData) ? rawData : _native_typed_data.NativeUint8List.fromList(rawData);
      let bdata = data[$buffer][$asByteData](data[$offsetInBytes], data[$lengthInBytes]);
      let offset = 0;
      while (offset < dart.notNull(data[$length])) {
        let length = bdata[$getUint32](offset);
        if (!(length[$modulo](8) === 0)) dart.assertFailed(null, L1, 50, 12, "(length % 8) == 0");
        offset = offset + 8;
        yield tzdb._deserializeLocation(data[$buffer][$asUint8List](dart.notNull(data[$offsetInBytes]) + offset, length));
        offset = offset + dart.notNull(length);
      }
    });
  };
  tzdb._serializeLocation = function _serializeLocation(location) {
    let t0, t0$, t0$0;
    let offset = 0;
    let abbrs = JSArrayOfStringL().of([]);
    let abbrsIndex = new (IdentityMapOfStringL$intL()).new();
    let zoneAbbrOffsets = JSArrayOfintL().of([]);
    let _abbrsLength = 0;
    for (let z of location.zones) {
      let ai = abbrsIndex[$putIfAbsent](z.abbr, dart.fn(() => {
        let ret = abbrs[$length];
        _abbrsLength = _abbrsLength + (z.abbr.length + 1);
        abbrs[$add](z.abbr);
        return ret;
      }, VoidTointL()));
      zoneAbbrOffsets[$add](ai);
    }
    let encName = convert.ascii.encode(location.name);
    let nameOffset = 32;
    let nameLength = encName[$length];
    let abbrsOffset = nameOffset + dart.notNull(nameLength);
    let abbrsLength = _abbrsLength;
    let zonesOffset = tzdb._align(abbrsOffset + abbrsLength, 4);
    let zonesLength = location.zones[$length];
    let transitionsOffset = tzdb._align(dart.notNull(zonesOffset) + dart.notNull(zonesLength) * 8, 8);
    let transitionsLength = location.transitionAt[$length];
    let bufferLength = tzdb._align(dart.notNull(transitionsOffset) + dart.notNull(transitionsLength) * 9, 8);
    let result = _native_typed_data.NativeUint8List.new(bufferLength);
    let buffer = typed_data.ByteData.view(result[$buffer]);
    buffer[$setUint32](0, nameOffset);
    buffer[$setUint32](4, nameLength);
    buffer[$setUint32](8, abbrsOffset);
    buffer[$setUint32](12, abbrsLength);
    buffer[$setUint32](16, zonesOffset);
    buffer[$setUint32](20, zonesLength);
    buffer[$setUint32](24, transitionsOffset);
    buffer[$setUint32](28, transitionsLength);
    offset = nameOffset;
    for (let c of encName) {
      buffer[$setUint8]((t0 = offset, offset = dart.notNull(t0) + 1, t0), c);
    }
    offset = abbrsOffset;
    for (let a of abbrs) {
      for (let c of a[$codeUnits]) {
        buffer[$setUint8]((t0$ = offset, offset = dart.notNull(t0$) + 1, t0$), c);
      }
      buffer[$setUint8]((t0$0 = offset, offset = dart.notNull(t0$0) + 1, t0$0), 0);
    }
    offset = zonesOffset;
    for (let i = 0; i < dart.notNull(location.zones[$length]); i = i + 1) {
      let zone = location.zones[$_get](i);
      buffer[$setInt32](offset, (dart.notNull(zone.offset) / 1000)[$truncate]());
      buffer[$setUint8](dart.notNull(offset) + 4, dart.test(zone.isDst) ? 1 : 0);
      buffer[$setUint8](dart.notNull(offset) + 5, zoneAbbrOffsets[$_get](i));
      offset = dart.notNull(offset) + 8;
    }
    offset = transitionsOffset;
    for (let tAt of location.transitionAt) {
      let t = (dart.notNull(tAt) / 1000)[$floorToDouble]();
      buffer[$setFloat64](offset, t[$toDouble]());
      offset = dart.notNull(offset) + 8;
    }
    for (let tZone of location.transitionZone) {
      buffer[$setUint8](offset, tZone);
      offset = dart.notNull(offset) + 1;
    }
    return result;
  };
  tzdb._deserializeLocation = function _deserializeLocation(data) {
    let bdata = data[$buffer][$asByteData](data[$offsetInBytes], data[$lengthInBytes]);
    let offset = 0;
    let nameOffset = bdata[$getUint32](0);
    let nameLength = bdata[$getUint32](4);
    let abbrsOffset = bdata[$getUint32](8);
    let abbrsLength = bdata[$getUint32](12);
    let zonesOffset = bdata[$getUint32](16);
    let zonesLength = bdata[$getUint32](20);
    let transitionsOffset = bdata[$getUint32](24);
    let transitionsLength = bdata[$getUint32](28);
    let name = convert.ascii.decode(data[$buffer][$asUint8List](dart.notNull(data[$offsetInBytes]) + dart.notNull(nameOffset), nameLength));
    let abbrs = JSArrayOfStringL().of([]);
    let zones = JSArrayOfTimeZoneL().of([]);
    let transitionAt = JSArrayOfintL().of([]);
    let transitionZone = JSArrayOfintL().of([]);
    offset = abbrsOffset;
    let abbrsEnd = dart.notNull(abbrsOffset) + dart.notNull(abbrsLength);
    for (let i = abbrsOffset; dart.notNull(i) < abbrsEnd; i = dart.notNull(i) + 1) {
      if (data[$_get](i) === 0) {
        let abbr = convert.ascii.decode(data[$buffer][$asUint8List](dart.notNull(data[$offsetInBytes]) + dart.notNull(offset), dart.notNull(i) - dart.notNull(offset)));
        abbrs[$add](abbr);
        offset = dart.notNull(i) + 1;
      }
    }
    offset = zonesOffset;
    if (!(offset[$modulo](4) === 0)) dart.assertFailed(null, L1, 201, 10, "(offset % 4) == 0");
    for (let i = 0; i < dart.notNull(zonesLength); i = i + 1) {
      let zoneOffset = dart.notNull(bdata[$getInt32](offset)) * 1000;
      let zoneIsDst = bdata[$getUint8](dart.notNull(offset) + 4);
      let zoneAbbrIndex = bdata[$getUint8](dart.notNull(offset) + 5);
      offset = dart.notNull(offset) + 8;
      zones[$add](new location.TimeZone.new(zoneOffset, zoneIsDst === 1, abbrs[$_get](zoneAbbrIndex)));
    }
    offset = transitionsOffset;
    if (!(offset[$modulo](8) === 0)) dart.assertFailed(null, L1, 215, 10, "(offset % 8) == 0");
    for (let i = 0; i < dart.notNull(transitionsLength); i = i + 1) {
      transitionAt[$add](bdata[$getFloat64](offset)[$toInt]() * 1000);
      offset = dart.notNull(offset) + 8;
    }
    for (let i = 0; i < dart.notNull(transitionsLength); i = i + 1) {
      transitionZone[$add](bdata[$getUint8](offset));
      offset = dart.notNull(offset) + 1;
    }
    return new location.Location.new(name, transitionAt, transitionZone, zones);
  };
  tzdb._align = function _align(offset, boundary) {
    let i = offset[$modulo](boundary);
    return i === 0 ? offset : dart.notNull(offset) + (dart.notNull(boundary) - i);
  };
  var _locations = dart.privateName(location_database, "_locations");
  location_database.LocationDatabase = class LocationDatabase extends core.Object {
    get locations() {
      return this[_locations];
    }
    add(location) {
      this[_locations][$_set](location.name, location);
    }
    get(name) {
      let loc = this[_locations][$_get](name);
      if (loc == null) {
        dart.throw(new exceptions.LocationNotFoundException.new("Location with the name \"" + dart.str(name) + "\" doesn't exist"));
      }
      return loc;
    }
  };
  (location_database.LocationDatabase.new = function() {
    this[_locations] = new (IdentityMapOfStringL$LocationL()).new();
    ;
  }).prototype = location_database.LocationDatabase.prototype;
  dart.addTypeTests(location_database.LocationDatabase);
  dart.addTypeCaches(location_database.LocationDatabase);
  dart.setMethodSignature(location_database.LocationDatabase, () => ({
    __proto__: dart.getMethods(location_database.LocationDatabase.__proto__),
    add: dart.fnType(dart.void, [dart.legacy(location.Location)]),
    get: dart.fnType(dart.legacy(location.Location), [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(location_database.LocationDatabase, () => ({
    __proto__: dart.getGetters(location_database.LocationDatabase.__proto__),
    locations: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(location.Location)))
  }));
  dart.setLibraryUri(location_database.LocationDatabase, L2);
  dart.setFieldSignature(location_database.LocationDatabase, () => ({
    __proto__: dart.getFields(location_database.LocationDatabase.__proto__),
    [_locations]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(location.Location))))
  }));
  var _cacheStart = dart.privateName(location, "_cacheStart");
  var _cacheEnd = dart.privateName(location, "_cacheEnd");
  var _cacheZone = dart.privateName(location, "_cacheZone");
  var TzInstant_end = dart.privateName(location, "TzInstant.end");
  var TzInstant_start = dart.privateName(location, "TzInstant.start");
  var TimeZone_abbr = dart.privateName(location, "TimeZone.abbr");
  var TimeZone_isDst = dart.privateName(location, "TimeZone.isDst");
  var TimeZone_offset = dart.privateName(location, "TimeZone.offset");
  var C1;
  var TzInstant_timeZone = dart.privateName(location, "TzInstant.timeZone");
  var C0;
  var _firstZone = dart.privateName(location, "_firstZone");
  var _firstZoneIsUsed = dart.privateName(location, "_firstZoneIsUsed");
  var name$ = dart.privateName(location, "Location.name");
  var transitionAt$ = dart.privateName(location, "Location.transitionAt");
  var transitionZone$ = dart.privateName(location, "Location.transitionZone");
  var zones$ = dart.privateName(location, "Location.zones");
  location.Location = class Location extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get transitionAt() {
      return this[transitionAt$];
    }
    set transitionAt(value) {
      super.transitionAt = value;
    }
    get transitionZone() {
      return this[transitionZone$];
    }
    set transitionZone(value) {
      super.transitionZone = value;
    }
    get zones() {
      return this[zones$];
    }
    set zones(value) {
      super.zones = value;
    }
    get currentTimeZone() {
      return this.timeZone(new core.DateTime.now().millisecondsSinceEpoch);
    }
    translate(millisecondsSinceEpoch) {
      return dart.notNull(millisecondsSinceEpoch) + dart.notNull(this.timeZone(millisecondsSinceEpoch).offset);
    }
    translateToUtc(millisecondsSinceEpoch) {
      let t = this.lookupTimeZone(millisecondsSinceEpoch);
      let tz = t.timeZone;
      let start = t.start;
      let end = t.end;
      let utc = millisecondsSinceEpoch;
      if (tz.offset !== 0) {
        utc = dart.notNull(utc) - dart.notNull(tz.offset);
        if (dart.notNull(utc) < dart.notNull(start)) {
          utc = dart.notNull(millisecondsSinceEpoch) - dart.notNull(this.lookupTimeZone(dart.notNull(start) - 1).timeZone.offset);
        } else if (dart.notNull(utc) >= dart.notNull(end)) {
          utc = dart.notNull(millisecondsSinceEpoch) - dart.notNull(this.lookupTimeZone(end).timeZone.offset);
        }
      }
      return utc;
    }
    lookupTimeZone(millisecondsSinceEpoch) {
      if (dart.test(this.zones[$isEmpty])) {
        return C0 || CT.C0;
      }
      if (this[_cacheZone] != null && dart.notNull(millisecondsSinceEpoch) >= dart.notNull(this[_cacheStart]) && dart.notNull(millisecondsSinceEpoch) < dart.notNull(this[_cacheEnd])) {
        return new location.TzInstant.new(this[_cacheZone], this[_cacheStart], this[_cacheEnd]);
      }
      if (dart.test(this.transitionAt[$isEmpty]) || dart.notNull(millisecondsSinceEpoch) < dart.notNull(this.transitionAt[$_get](0))) {
        let zone = this[_firstZone]();
        let start = -8640000000000000.0;
        let end = dart.test(this.transitionAt[$isEmpty]) ? 8640000000000000.0 : this.transitionAt[$first];
        return new location.TzInstant.new(zone, start, end);
      }
      let lo = 0;
      let hi = this.transitionAt[$length];
      let end = 8640000000000000.0;
      while (dart.notNull(hi) - lo > 1) {
        let m = lo + ((dart.notNull(hi) - lo) / 2)[$truncate]();
        let at = this.transitionAt[$_get](m);
        if (dart.notNull(millisecondsSinceEpoch) < dart.notNull(at)) {
          end = at;
          hi = m;
        } else {
          lo = m;
        }
      }
      return new location.TzInstant.new(this.zones[$_get](this.transitionZone[$_get](lo)), this.transitionAt[$_get](lo), end);
    }
    timeZone(millisecondsSinceEpoch) {
      return this.lookupTimeZone(millisecondsSinceEpoch).timeZone;
    }
    timeZoneFromLocal(millisecondsSinceEpoch) {
      let t = this.lookupTimeZone(millisecondsSinceEpoch);
      let tz = t.timeZone;
      let start = t.start;
      let end = t.end;
      if (tz.offset !== 0) {
        let utc = dart.notNull(millisecondsSinceEpoch) - dart.notNull(tz.offset);
        if (utc < dart.notNull(start)) {
          tz = this.lookupTimeZone(dart.notNull(start) - 1).timeZone;
        } else if (utc >= dart.notNull(end)) {
          tz = this.lookupTimeZone(end).timeZone;
        }
      }
      return tz;
    }
    [_firstZone]() {
      if (!dart.test(this[_firstZoneIsUsed]())) {
        return this.zones[$first];
      }
      if (dart.test(this.transitionZone[$isNotEmpty]) && dart.test(this.zones[$_get](this.transitionZone[$first]).isDst)) {
        for (let zi = dart.notNull(this.transitionZone[$first]) - 1; zi >= 0; zi = zi - 1) {
          let z = this.zones[$_get](zi);
          if (!dart.test(z.isDst)) {
            return z;
          }
        }
      }
      for (let zi of this.transitionZone) {
        let z = this.zones[$_get](zi);
        if (!dart.test(z.isDst)) {
          return z;
        }
      }
      return this.zones[$first];
    }
    [_firstZoneIsUsed]() {
      for (let i of this.transitionZone) {
        if (i === 0) {
          return true;
        }
      }
      return false;
    }
    toString() {
      return dart.str(this.name);
    }
  };
  (location.Location.new = function(name, transitionAt, transitionZone, zones) {
    this[_cacheStart] = 0;
    this[_cacheEnd] = 0;
    this[_cacheZone] = null;
    this[name$] = name;
    this[transitionAt$] = transitionAt;
    this[transitionZone$] = transitionZone;
    this[zones$] = zones;
    for (let i = 0; i < dart.notNull(this.transitionAt[$length]); i = i + 1) {
      let tAt = this.transitionAt[$_get](i);
      if (dart.notNull(tAt) <= dart.notNull(location.Location._cacheNow) && (i + 1 === this.transitionAt[$length] || dart.notNull(location.Location._cacheNow) < dart.notNull(this.transitionAt[$_get](i + 1)))) {
        this[_cacheStart] = tAt;
        this[_cacheEnd] = 8640000000000000.0;
        if (i + 1 < dart.notNull(this.transitionAt[$length])) {
          this[_cacheEnd] = this.transitionAt[$_get](i + 1);
        }
        this[_cacheZone] = this.zones[$_get](this.transitionZone[$_get](i));
      }
    }
  }).prototype = location.Location.prototype;
  dart.addTypeTests(location.Location);
  dart.addTypeCaches(location.Location);
  dart.setMethodSignature(location.Location, () => ({
    __proto__: dart.getMethods(location.Location.__proto__),
    translate: dart.fnType(dart.legacy(core.int), [dart.legacy(core.int)]),
    translateToUtc: dart.fnType(dart.legacy(core.int), [dart.legacy(core.int)]),
    lookupTimeZone: dart.fnType(dart.legacy(location.TzInstant), [dart.legacy(core.int)]),
    timeZone: dart.fnType(dart.legacy(location.TimeZone), [dart.legacy(core.int)]),
    timeZoneFromLocal: dart.fnType(dart.legacy(location.TimeZone), [dart.legacy(core.int)]),
    [_firstZone]: dart.fnType(dart.legacy(location.TimeZone), []),
    [_firstZoneIsUsed]: dart.fnType(dart.legacy(core.bool), []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(location.Location, () => ({
    __proto__: dart.getGetters(location.Location.__proto__),
    currentTimeZone: dart.legacy(location.TimeZone)
  }));
  dart.setLibraryUri(location.Location, L3);
  dart.setFieldSignature(location.Location, () => ({
    __proto__: dart.getFields(location.Location.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String)),
    transitionAt: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.int)))),
    transitionZone: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.int)))),
    zones: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(location.TimeZone)))),
    [_cacheStart]: dart.fieldType(dart.legacy(core.int)),
    [_cacheEnd]: dart.fieldType(dart.legacy(core.int)),
    [_cacheZone]: dart.fieldType(dart.legacy(location.TimeZone))
  }));
  dart.defineExtensionMethods(location.Location, ['toString']);
  dart.defineLazy(location.Location, {
    /*location.Location._cacheNow*/get _cacheNow() {
      return new core.DateTime.now().millisecondsSinceEpoch;
    }
  }, true);
  location.TimeZone = class TimeZone extends core.Object {
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get isDst() {
      return this[isDst$];
    }
    set isDst(value) {
      super.isDst = value;
    }
    get abbr() {
      return this[abbr$];
    }
    set abbr(value) {
      super.abbr = value;
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || TimeZoneL().is(other) && this.offset == other.offset && dart.equals(this.isDst, other.isDst) && this.abbr == other.abbr;
    }
    get hashCode() {
      let result = 17;
      result = 37 * result + dart.hashCode(this.offset);
      result = 37 * result + dart.hashCode(this.isDst);
      result = 37 * result + dart.hashCode(this.abbr);
      return result;
    }
    toString() {
      return "[" + dart.str(this.abbr) + " offset=" + dart.str(this.offset) + " dst=" + dart.str(this.isDst) + "]";
    }
  };
  (location.TimeZone.new = function(offset, isDst, abbr) {
    this[offset$] = offset;
    this[isDst$] = isDst;
    this[abbr$] = abbr;
    ;
  }).prototype = location.TimeZone.prototype;
  dart.addTypeTests(location.TimeZone);
  dart.addTypeCaches(location.TimeZone);
  const offset$ = TimeZone_offset;
  const isDst$ = TimeZone_isDst;
  const abbr$ = TimeZone_abbr;
  dart.setMethodSignature(location.TimeZone, () => ({
    __proto__: dart.getMethods(location.TimeZone.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(location.TimeZone, () => ({
    __proto__: dart.getGetters(location.TimeZone.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(location.TimeZone, L3);
  dart.setFieldSignature(location.TimeZone, () => ({
    __proto__: dart.getFields(location.TimeZone.__proto__),
    offset: dart.finalFieldType(dart.legacy(core.int)),
    isDst: dart.finalFieldType(dart.legacy(core.bool)),
    abbr: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(location.TimeZone, ['_equals', 'toString']);
  dart.defineExtensionAccessors(location.TimeZone, ['hashCode']);
  dart.defineLazy(location.TimeZone, {
    /*location.TimeZone.UTC*/get UTC() {
      return C1 || CT.C1;
    }
  }, true);
  location.TzInstant = class TzInstant extends core.Object {
    get timeZone() {
      return this[timeZone$];
    }
    set timeZone(value) {
      super.timeZone = value;
    }
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
  };
  (location.TzInstant.new = function(timeZone, start, end) {
    this[timeZone$] = timeZone;
    this[start$] = start;
    this[end$] = end;
    ;
  }).prototype = location.TzInstant.prototype;
  dart.addTypeTests(location.TzInstant);
  dart.addTypeCaches(location.TzInstant);
  const timeZone$ = TzInstant_timeZone;
  const start$ = TzInstant_start;
  const end$ = TzInstant_end;
  dart.setLibraryUri(location.TzInstant, L3);
  dart.setFieldSignature(location.TzInstant, () => ({
    __proto__: dart.getFields(location.TzInstant.__proto__),
    timeZone: dart.finalFieldType(dart.legacy(location.TimeZone)),
    start: dart.finalFieldType(dart.legacy(core.int)),
    end: dart.finalFieldType(dart.legacy(core.int))
  }));
  dart.defineLazy(location, {
    /*location.maxTime*/get maxTime() {
      return 8640000000000000.0;
    },
    /*location.minTime*/get minTime() {
      return -8640000000000000.0;
    }
  }, true);
  env.getLocation = function getLocation(locationName) {
    return env._database.get(locationName);
  };
  env.setLocalLocation = function setLocalLocation(location) {
    env._local = location;
  };
  env.initializeDatabase = function initializeDatabase(rawData) {
    env._database == null ? env._database = new location_database.LocationDatabase.new() : null;
    for (let l of tzdb.tzdbDeserialize(rawData)) {
      env._database.add(l);
    }
    env._local == null ? env._local = env._UTC : null;
  };
  env.initializeTimeZonesFromBase64 = function initializeTimeZonesFromBase64(encodedDatabase) {
    try {
      let rawData = convert.base64Decode(encodedDatabase);
      env.initializeDatabase(rawData);
    } catch (e$) {
      let e = dart.getThrown(e$);
      dart.throw(new exceptions.TimeZoneInitException.new(dart.toString(e)));
    }
  };
  dart.copyProperties(env, {
    get timeZoneDatabase() {
      return env._database;
    },
    get UTC() {
      return env._UTC;
    },
    get local() {
      return env._local;
    }
  });
  dart.defineLazy(env, {
    /*env.tzDataDefaultFilename*/get tzDataDefaultFilename() {
      return "latest.tzf";
    },
    /*env._UTC*/get _UTC() {
      return new location.Location.new("UTC", JSArrayOfintL().of([-8640000000000000.0]), JSArrayOfintL().of([0]), JSArrayOfTimeZoneL().of([location.TimeZone.UTC]));
    },
    /*env._database*/get _database() {
      return null;
    },
    set _database(_) {},
    /*env._local*/get _local() {
      return null;
    },
    set _local(_) {}
  }, true);
  dart.trackLibraries("packages/timezone/src/env", {
    "package:timezone/src/exceptions.dart": exceptions,
    "package:timezone/src/tzdb.dart": tzdb,
    "package:timezone/src/location_database.dart": location_database,
    "package:timezone/src/location.dart": location,
    "package:timezone/src/env.dart": env
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["exceptions.dart","tzdb.dart","location_database.dart","location.dart","env.dart"],"names":[],"mappings":"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","file":"env.ddc.js"}');
  // Exports:
  return {
    src__exceptions: exceptions,
    src__tzdb: tzdb,
    src__location_database: location_database,
    src__location: location,
    src__env: env
  };
}));

//# sourceMappingURL=env.ddc.js.map
