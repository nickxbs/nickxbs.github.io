// Copyright (c) 2015, the timezone project authors. Please see the AUTHORS
// file for details. All rights reserved. Use of this source code is governed
// by a BSD-style license that can be found in the LICENSE file.

library timezone.src.env;

import 'dart:convert';

import 'exceptions.dart';
import 'location.dart';
import 'location_database.dart';
import 'tzdb.dart';

/// File name of the Time Zone default database.
const String tzDataDefaultFilename = 'latest.tzf';

final Location _UTC = Location('UTC', [minTime], [0], [TimeZone.UTC]);

LocationDatabase _database;
Location _local;

/// Global TimeZone database
LocationDatabase get timeZoneDatabase => _database;

/// UTC Location
Location get UTC => _UTC;

/// Local Location
///
/// By default it is instantiated with UTC [Location]
Location get local => _local;

/// Find [Location] by its name.
///
/// ```dart
/// final detroit = getLocation('America/Detroit');
/// ```
Location getLocation(String locationName) {
  return _database.get(locationName);
}

/// Set local [Location]
///
/// ```dart
/// final detroit = getLocation('America/Detroit')
/// setLocalLocation(detroit);
/// ```
void setLocalLocation(Location location) {
  _local = location;
}

/// Initialize Time zone database.
void initializeDatabase(List<int> rawData) {
  _database ??= LocationDatabase();

  for (final l in tzdbDeserialize(rawData)) {
    _database.add(l);
  }

  _local ??= _UTC;
}

/// Initialize Time Zone database from [encodedDatabase].
///
/// Throws [TimeZoneInitException] when something is wrong.
///
/// This function is private to this package.
void initializeTimeZonesFromBase64(String encodedDatabase) {
  try {
    var rawData = base64Decode(encodedDatabase);
    initializeDatabase(rawData);
  }
// ignore: avoid_catches_without_on_clauses
  catch (e) {
    throw TimeZoneInitException(e.toString());
  }
}
