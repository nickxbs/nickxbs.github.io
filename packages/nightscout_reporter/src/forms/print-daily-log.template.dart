// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'print-daily-log.dart';
export 'print-daily-log.dart';
import 'base-print.template.dart' as _ref0;
import 'base-profile.template.dart' as _ref1;
import 'package:nightscout_reporter/src/json_data.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
