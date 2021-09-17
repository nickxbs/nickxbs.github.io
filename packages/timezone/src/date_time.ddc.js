define(['dart_sdk', 'packages/timezone/src/env'], (function load__packages__timezone__src__date_time(dart_sdk, packages__timezone__src__env) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const env = packages__timezone__src__env.src__env;
  const location$ = packages__timezone__src__env.src__location;
  var date_time = Object.create(dart.library);
  var $abs = dartx.abs;
  var $sign = dartx.sign;
  var $truncate = dartx.truncate;
  var $modulo = dartx['%'];
  var $toString = dartx.toString;
  var $_equals = dartx._equals;
  var $compareTo = dartx.compareTo;
  var $hashCode = dartx.hashCode;
  var TZDateTimeL = () => (TZDateTimeL = dart.constFn(dart.legacy(date_time.TZDateTime)))();
  var DateTimeL = () => (DateTimeL = dart.constFn(dart.legacy(core.DateTime)))();
  const CT = Object.create(null);
  var L0 = "file:///C:/Users/nicol/AppData/Local/Temp/scratch_space31d894d0/packages/timezone/src/date_time.dart";
  var L1 = "package:timezone/src/date_time.dart";
  var _native = dart.privateName(date_time, "_native");
  var _localDateTime = dart.privateName(date_time, "_localDateTime");
  var _toString = dart.privateName(date_time, "_toString");
  var location$0 = dart.privateName(date_time, "TZDateTime.location");
  var timeZone$ = dart.privateName(date_time, "TZDateTime.timeZone");
  date_time.TZDateTime = class TZDateTime extends core.Object {
    get location() {
      return this[location$0];
    }
    set location(value) {
      super.location = value;
    }
    get timeZone() {
      return this[timeZone$];
    }
    set timeZone(value) {
      super.timeZone = value;
    }
    static _toNative(t) {
      return TZDateTimeL().is(t) ? t[_native] : t;
    }
    static _utcFromLocalDateTime(local, location) {
      if (!(local != null)) dart.assertFailed("DateTime argument must not be null", L0, 23, 12, "local != null");
      if (!(location != null)) dart.assertFailed("Location argument must not be null", L0, 24, 12, "location != null");
      let unix = local.millisecondsSinceEpoch;
      let tzData = location.lookupTimeZone(unix);
      if (tzData.timeZone.offset !== 0) {
        let utc = dart.notNull(unix) - dart.notNull(tzData.timeZone.offset);
        if (utc < dart.notNull(tzData.start)) {
          tzData = location.lookupTimeZone(dart.notNull(tzData.start) - 1);
        } else if (utc >= dart.notNull(tzData.end)) {
          tzData = location.lookupTimeZone(tzData.end);
        }
        unix = dart.notNull(unix) - dart.notNull(tzData.timeZone.offset);
      }
      let microsecondsSinceEpoch = new core.Duration.new({milliseconds: unix, microseconds: local.microsecond}).inMicroseconds;
      return new core.DateTime.fromMicrosecondsSinceEpoch(microsecondsSinceEpoch, {isUtc: true});
    }
    get millisecondsSinceEpoch() {
      return this[_native].millisecondsSinceEpoch;
    }
    get microsecondsSinceEpoch() {
      return this[_native].microsecondsSinceEpoch;
    }
    get isUtc() {
      return date_time.TZDateTime._isUtc(this.location);
    }
    static _isUtc(l) {
      return l == env.UTC;
    }
    get isLocal() {
      return this.location == env.local;
    }
    static parse(location, formattedString) {
      return new date_time.TZDateTime.from(core.DateTime.parse(formattedString), location);
    }
    toUtc() {
      return dart.test(this.isUtc) ? this : new date_time.TZDateTime.from(this[_native], env.UTC);
    }
    toLocal() {
      return dart.test(this.isLocal) ? this : new date_time.TZDateTime.from(this[_native], env.local);
    }
    static _fourDigits(n) {
      let absN = n[$abs]();
      let sign = dart.notNull(n) < 0 ? "-" : "";
      if (absN >= 1000) return dart.str(n);
      if (absN >= 100) return sign + "0" + dart.str(absN);
      if (absN >= 10) return sign + "00" + dart.str(absN);
      return sign + "000" + dart.str(absN);
    }
    static _threeDigits(n) {
      if (dart.notNull(n) >= 100) return dart.str(n);
      if (dart.notNull(n) >= 10) return "0" + dart.str(n);
      return "00" + dart.str(n);
    }
    static _twoDigits(n) {
      if (dart.notNull(n) >= 10) return dart.str(n);
      return "0" + dart.str(n);
    }
    toString() {
      return this[_toString]({iso8601: false});
    }
    toIso8601String() {
      return this[_toString]({iso8601: true});
    }
    [_toString](opts) {
      let iso8601 = opts && 'iso8601' in opts ? opts.iso8601 : true;
      let offset = this.timeZone.offset;
      let y = date_time.TZDateTime._fourDigits(this.year);
      let m = date_time.TZDateTime._twoDigits(this.month);
      let d = date_time.TZDateTime._twoDigits(this.day);
      let sep = dart.test(iso8601) ? "T" : " ";
      let h = date_time.TZDateTime._twoDigits(this.hour);
      let min = date_time.TZDateTime._twoDigits(this.minute);
      let sec = date_time.TZDateTime._twoDigits(this.second);
      let ms = date_time.TZDateTime._threeDigits(this.millisecond);
      let us = this.microsecond === 0 ? "" : date_time.TZDateTime._threeDigits(this.microsecond);
      if (dart.test(this.isUtc)) {
        return dart.str(y) + "-" + dart.str(m) + "-" + dart.str(d) + sep + dart.str(h) + ":" + dart.str(min) + ":" + dart.str(sec) + "." + dart.str(ms) + dart.str(us) + "Z";
      } else {
        let offSign = offset[$sign] >= 0 ? "+" : "-";
        offset = (offset[$abs]() / 1000)[$truncate]();
        let offH = date_time.TZDateTime._twoDigits((dart.notNull(offset) / 3600)[$truncate]());
        let offM = date_time.TZDateTime._twoDigits((offset[$modulo](3600) / 60)[$truncate]());
        return dart.str(y) + "-" + dart.str(m) + "-" + dart.str(d) + sep + dart.str(h) + ":" + dart.str(min) + ":" + dart.str(sec) + "." + dart.str(ms) + dart.str(us) + offSign + dart.str(offH) + dart.str(offM);
      }
    }
    add(duration) {
      return new date_time.TZDateTime.from(this[_native].add(duration), this.location);
    }
    subtract(duration) {
      return new date_time.TZDateTime.from(this[_native].subtract(duration), this.location);
    }
    difference(other) {
      return this[_native].difference(date_time.TZDateTime._toNative(other));
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || TZDateTimeL().is(other) && dart.test(this[_native].isAtSameMomentAs(other[_native])) && dart.equals(this.location, other.location);
    }
    isBefore(other) {
      return this[_native].isBefore(date_time.TZDateTime._toNative(other));
    }
    isAfter(other) {
      return this[_native].isAfter(date_time.TZDateTime._toNative(other));
    }
    isAtSameMomentAs(other) {
      return this[_native].isAtSameMomentAs(date_time.TZDateTime._toNative(other));
    }
    compareTo(other) {
      DateTimeL().as(other);
      return this[_native].compareTo(date_time.TZDateTime._toNative(other));
    }
    get hashCode() {
      return dart.hashCode(this[_native]);
    }
    get timeZoneName() {
      return this.timeZone.abbr;
    }
    get timeZoneOffset() {
      return date_time.TZDateTime._timeZoneOffset(this.timeZone);
    }
    static _timeZoneOffset(timeZone) {
      return new core.Duration.new({milliseconds: timeZone.offset});
    }
    get year() {
      return this[_localDateTime].year;
    }
    get month() {
      return this[_localDateTime].month;
    }
    get day() {
      return this[_localDateTime].day;
    }
    get hour() {
      return this[_localDateTime].hour;
    }
    get minute() {
      return this[_localDateTime].minute;
    }
    get second() {
      return this[_localDateTime].second;
    }
    get millisecond() {
      return this[_localDateTime].millisecond;
    }
    get microsecond() {
      return this[_localDateTime].microsecond;
    }
    get weekday() {
      return this[_localDateTime].weekday;
    }
  };
  (date_time.TZDateTime.new = function(location, year, month = 1, day = 1, hour = 0, minute = 0, second = 0, millisecond = 0, microsecond = 0) {
    date_time.TZDateTime.from.call(this, date_time.TZDateTime._utcFromLocalDateTime(new core.DateTime.utc(year, month, day, hour, minute, second, millisecond, microsecond), location), location);
  }).prototype = date_time.TZDateTime.prototype;
  (date_time.TZDateTime.utc = function(year, month = 1, day = 1, hour = 0, minute = 0, second = 0, millisecond = 0, microsecond = 0) {
    date_time.TZDateTime.new.call(this, env.UTC, year, month, day, hour, minute, second, millisecond, microsecond);
  }).prototype = date_time.TZDateTime.prototype;
  (date_time.TZDateTime.local = function(year, month = 1, day = 1, hour = 0, minute = 0, second = 0, millisecond = 0, microsecond = 0) {
    date_time.TZDateTime.new.call(this, env.local, year, month, day, hour, minute, second, millisecond, microsecond);
  }).prototype = date_time.TZDateTime.prototype;
  (date_time.TZDateTime.now = function(location) {
    date_time.TZDateTime.from.call(this, new core.DateTime.now(), location);
  }).prototype = date_time.TZDateTime.prototype;
  (date_time.TZDateTime.fromMillisecondsSinceEpoch = function(location, millisecondsSinceEpoch) {
    date_time.TZDateTime.from.call(this, new core.DateTime.fromMillisecondsSinceEpoch(millisecondsSinceEpoch, {isUtc: true}), location);
  }).prototype = date_time.TZDateTime.prototype;
  (date_time.TZDateTime.fromMicrosecondsSinceEpoch = function(location, microsecondsSinceEpoch) {
    date_time.TZDateTime.from.call(this, new core.DateTime.fromMicrosecondsSinceEpoch(microsecondsSinceEpoch, {isUtc: true}), location);
  }).prototype = date_time.TZDateTime.prototype;
  (date_time.TZDateTime.from = function(other, location) {
    date_time.TZDateTime.__.call(this, date_time.TZDateTime._toNative(other).toUtc(), location, dart.test(date_time.TZDateTime._isUtc(location)) ? location$.TimeZone.UTC : location.timeZone(other.millisecondsSinceEpoch));
  }).prototype = date_time.TZDateTime.prototype;
  (date_time.TZDateTime.__ = function(native, location, timeZone) {
    if (!(location != null)) dart.assertFailed("Location argument must not be null", L0, 214, 16, "location != null");
    this[_native] = native;
    this[_localDateTime] = dart.test(date_time.TZDateTime._isUtc(location)) ? native : native.add(date_time.TZDateTime._timeZoneOffset(timeZone));
    this[location$0] = location;
    this[timeZone$] = timeZone;
    ;
  }).prototype = date_time.TZDateTime.prototype;
  dart.addTypeTests(date_time.TZDateTime);
  dart.addTypeCaches(date_time.TZDateTime);
  date_time.TZDateTime[dart.implements] = () => [core.DateTime];
  dart.setMethodSignature(date_time.TZDateTime, () => ({
    __proto__: dart.getMethods(date_time.TZDateTime.__proto__),
    toUtc: dart.fnType(dart.legacy(date_time.TZDateTime), []),
    toLocal: dart.fnType(dart.legacy(date_time.TZDateTime), []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    toIso8601String: dart.fnType(dart.legacy(core.String), []),
    [_toString]: dart.fnType(dart.legacy(core.String), [], {iso8601: dart.legacy(core.bool)}, {}),
    add: dart.fnType(dart.legacy(date_time.TZDateTime), [dart.legacy(core.Duration)]),
    subtract: dart.fnType(dart.legacy(date_time.TZDateTime), [dart.legacy(core.Duration)]),
    difference: dart.fnType(dart.legacy(core.Duration), [dart.legacy(core.DateTime)]),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    isBefore: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.DateTime)]),
    isAfter: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.DateTime)]),
    isAtSameMomentAs: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.DateTime)]),
    compareTo: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)]),
    [$compareTo]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)])
  }));
  dart.setGetterSignature(date_time.TZDateTime, () => ({
    __proto__: dart.getGetters(date_time.TZDateTime.__proto__),
    millisecondsSinceEpoch: dart.legacy(core.int),
    microsecondsSinceEpoch: dart.legacy(core.int),
    isUtc: dart.legacy(core.bool),
    isLocal: dart.legacy(core.bool),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int),
    timeZoneName: dart.legacy(core.String),
    timeZoneOffset: dart.legacy(core.Duration),
    year: dart.legacy(core.int),
    month: dart.legacy(core.int),
    day: dart.legacy(core.int),
    hour: dart.legacy(core.int),
    minute: dart.legacy(core.int),
    second: dart.legacy(core.int),
    millisecond: dart.legacy(core.int),
    microsecond: dart.legacy(core.int),
    weekday: dart.legacy(core.int)
  }));
  dart.setLibraryUri(date_time.TZDateTime, L1);
  dart.setFieldSignature(date_time.TZDateTime, () => ({
    __proto__: dart.getFields(date_time.TZDateTime.__proto__),
    [_localDateTime]: dart.finalFieldType(dart.legacy(core.DateTime)),
    [_native]: dart.finalFieldType(dart.legacy(core.DateTime)),
    location: dart.finalFieldType(dart.legacy(location$.Location)),
    timeZone: dart.finalFieldType(dart.legacy(location$.TimeZone))
  }));
  dart.defineExtensionMethods(date_time.TZDateTime, ['toString', '_equals', 'compareTo']);
  dart.defineExtensionAccessors(date_time.TZDateTime, ['hashCode']);
  dart.defineLazy(date_time.TZDateTime, {
    /*date_time.TZDateTime.maxMillisecondsSinceEpoch*/get maxMillisecondsSinceEpoch() {
      return 8640000000000000.0;
    },
    /*date_time.TZDateTime.minMillisecondsSinceEpoch*/get minMillisecondsSinceEpoch() {
      return -8640000000000000.0;
    }
  }, true);
  dart.trackLibraries("packages/timezone/src/date_time", {
    "package:timezone/src/date_time.dart": date_time
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_time.dart"],"names":[],"mappings":"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","file":"date_time.ddc.js"}');
  // Exports:
  return {
    src__date_time: date_time
  };
}));

//# sourceMappingURL=date_time.ddc.js.map
