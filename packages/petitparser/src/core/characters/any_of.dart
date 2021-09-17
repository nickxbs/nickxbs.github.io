library petitparser.core.characters.any_of;

import 'package:petitparser/src/core/characters/code.dart';
import 'package:petitparser/src/core/characters/optimize.dart';
import 'package:petitparser/src/core/characters/parser.dart';
import 'package:petitparser/src/core/parser.dart';

/// Returns a parser that accepts any of the specified characters.
Parser<String> anyOf(String chars, [String message]) {
  return CharacterParser(optimizedString(chars),
      message ?? 'any of "${toReadableString(chars)}" expected');
}
