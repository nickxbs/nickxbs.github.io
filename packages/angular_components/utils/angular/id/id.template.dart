// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'id.dart';
export 'id.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/utils/id_generator/id_generator.template.dart' as _ref1;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'id.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'dart:html' as import3;
import 'package:angular/src/runtime/dom_helpers.dart' as import4;

class AutoIdDirectiveNgCd extends import0.DirectiveChangeDetector {
  final import1.AutoIdDirective instance;
  AutoIdDirectiveNgCd(this.instance);
  void detectHostChanges(AppView<dynamic> view, import3.Element el) {
    bool firstCheck = (view.cdState == 0);
    if (firstCheck) {
      if (!identical(instance.id, null)) {
        import4.updateAttribute(el, 'id', instance.id);
      }
    }
  }
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
