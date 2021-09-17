// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'material_icon.dart';
export 'material_icon.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/model/ui/icon.template.dart' as _ref1;
import 'package:angular_components/material_icon/material_icon.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'material_icon.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/runtime/interpolate.dart' as import11;

final List<dynamic> styles$MaterialIconComponent = [import0.styles];

class ViewMaterialIconComponent0 extends AppView<import2.MaterialIconComponent> {
  final import3.TextBinding _textBinding_2 = import3.TextBinding();
  static import4.ComponentStyles _componentStyles;
  ViewMaterialIconComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import7.document.createElement('material-icon');
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:angular_components/lib/material_icon/material_icon.dart' : null);
  }

  @override
  ComponentRef<import2.MaterialIconComponent> build() {
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import10.appendText(parentRenderNode, '\n');
    final doc = import7.document;
    final _el_1 = import10.appendElement(doc, parentRenderNode, 'i');
    import10.setAttribute(_el_1, 'aria-hidden', 'true');
    this.updateChildClass(_el_1, 'material-icon-i material-icons');
    addShimE(_el_1);
    _el_1.append(_textBinding_2.element);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_2.updateText(import11.interpolateString0(_ctx.iconName));
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import4.ComponentStyles.scoped(styles$MaterialIconComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.MaterialIconComponent> _MaterialIconComponentNgFactory = const ComponentFactory('material-icon', viewFactory_MaterialIconComponentHost0);
ComponentFactory<import2.MaterialIconComponent> get MaterialIconComponentNgFactory {
  return _MaterialIconComponentNgFactory;
}

final List<dynamic> styles$MaterialIconComponentHost = const [];

class _ViewMaterialIconComponentHost0 extends AppView<import2.MaterialIconComponent> {
  ViewMaterialIconComponent0 _compView_0;
  import2.MaterialIconComponent _MaterialIconComponent_0_5;
  _ViewMaterialIconComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.MaterialIconComponent> build() {
    _compView_0 = ViewMaterialIconComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _MaterialIconComponent_0_5 = import2.MaterialIconComponent(rootEl);
    _compView_0.create(_MaterialIconComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _MaterialIconComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.MaterialIconComponent> viewFactory_MaterialIconComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewMaterialIconComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(MaterialIconComponent, MaterialIconComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
