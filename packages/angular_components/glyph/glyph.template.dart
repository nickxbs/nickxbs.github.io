// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'glyph.dart';
export 'glyph.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/model/ui/icon.template.dart' as _ref1;
import 'package:angular_components/glyph/glyph.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'glyph.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'dart:html' as import4;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/src/runtime/interpolate.dart' as import12;

final List<dynamic> styles$GlyphComponent = [import0.styles];

class ViewGlyphComponent0 extends AppView<import2.GlyphComponent> {
  final import3.TextBinding _textBinding_2 = import3.TextBinding();
  bool _expr_0;
  import4.Element _el_1;
  static import5.ComponentStyles _componentStyles;
  ViewGlyphComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import4.document.createElement('glyph');
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:angular_components/lib/glyph/glyph.dart' : null);
  }

  @override
  ComponentRef<import2.GlyphComponent> build() {
    final _rootEl = rootEl;
    final import4.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _text_0 = import10.appendText(parentRenderNode, '\n');
    final doc = import4.document;
    _el_1 = import10.appendElement(doc, parentRenderNode, 'i');
    import10.setAttribute(_el_1, 'aria-hidden', 'true');
    this.updateChildClass(_el_1, 'glyph-i');
    addShimE(_el_1);
    _el_1.append(_textBinding_2.element);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.useMaterialIconsExtended;
    if (import11.checkBinding(_expr_0, currVal_0)) {
      import10.updateClassBinding(_el_1, 'material-icons', currVal_0);
      _expr_0 = currVal_0;
    }
    _textBinding_2.updateText(import12.interpolateString0(_ctx.iconName));
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$GlyphComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.GlyphComponent> _GlyphComponentNgFactory = const ComponentFactory('glyph', viewFactory_GlyphComponentHost0);
ComponentFactory<import2.GlyphComponent> get GlyphComponentNgFactory {
  return _GlyphComponentNgFactory;
}

final List<dynamic> styles$GlyphComponentHost = const [];

class _ViewGlyphComponentHost0 extends AppView<import2.GlyphComponent> {
  ViewGlyphComponent0 _compView_0;
  import2.GlyphComponent _GlyphComponent_0_5;
  _ViewGlyphComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.GlyphComponent> build() {
    _compView_0 = ViewGlyphComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _GlyphComponent_0_5 = import2.GlyphComponent(rootEl);
    _compView_0.create(_GlyphComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _GlyphComponent_0_5);
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

AppView<import2.GlyphComponent> viewFactory_GlyphComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewGlyphComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(GlyphComponent, GlyphComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
