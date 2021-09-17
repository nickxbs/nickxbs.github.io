// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'caption_affix.dart';
export 'caption_affix.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/meta.template.dart' as _ref1;
import 'package:angular_components/material_menu/affix/base_affix.template.dart' as _ref2;
import 'package:angular_components/material_menu/affix/caption_affix_model.template.dart' as _ref3;
import 'package:angular_components/material_menu/affix/caption_affix.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'caption_affix.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/interpolate.dart' as import10;

final List<dynamic> styles$CaptionAffixComponent = [import0.styles];

class ViewCaptionAffixComponent0 extends AppView<import2.CaptionAffixComponent> {
  final import3.TextBinding _textBinding_0 = import3.TextBinding();
  static import4.ComponentStyles _componentStyles;
  ViewCaptionAffixComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import7.document.createElement('caption-affix');
    this.updateChildClassNonHtml(rootEl, import2.CaptionAffixComponent.hostClass);
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:angular_components/lib/material_menu/affix/caption_affix.dart' : null);
  }

  @override
  ComponentRef<import2.CaptionAffixComponent> build() {
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    parentRenderNode.append(_textBinding_0.element);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_0.updateText(import10.interpolateString0(_ctx.text));
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import4.ComponentStyles.scoped(styles$CaptionAffixComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.CaptionAffixComponent> _CaptionAffixComponentNgFactory = const ComponentFactory('caption-affix', viewFactory_CaptionAffixComponentHost0);
ComponentFactory<import2.CaptionAffixComponent> get CaptionAffixComponentNgFactory {
  return _CaptionAffixComponentNgFactory;
}

final List<dynamic> styles$CaptionAffixComponentHost = const [];

class _ViewCaptionAffixComponentHost0 extends AppView<import2.CaptionAffixComponent> {
  ViewCaptionAffixComponent0 _compView_0;
  import2.CaptionAffixComponent _CaptionAffixComponent_0_5;
  _ViewCaptionAffixComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.CaptionAffixComponent> build() {
    _compView_0 = ViewCaptionAffixComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _CaptionAffixComponent_0_5 = import2.CaptionAffixComponent(_compView_0);
    _compView_0.create(_CaptionAffixComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _CaptionAffixComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.CaptionAffixComponent> viewFactory_CaptionAffixComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewCaptionAffixComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(CaptionAffixComponent, CaptionAffixComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
