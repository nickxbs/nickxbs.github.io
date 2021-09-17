// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'icon_affix.dart';
export 'icon_affix.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/meta.template.dart' as _ref1;
import 'package:angular_components/button_decorator/button_decorator.template.dart' as _ref2;
import 'package:angular_components/material_icon/material_icon.template.dart' as _ref3;
import 'package:angular_components/material_menu/affix/base_affix.template.dart' as _ref4;
import 'package:angular_components/material_menu/affix/icon_affix_model.template.dart' as _ref5;
import 'package:angular_components/material_menu/common/menu_root.template.dart' as _ref6;
import 'package:angular_components/model/ui/icon.template.dart' as _ref7;
import 'package:angular_components/material_menu/affix/icon_affix.scss.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'icon_affix.dart' as import2;
import '../../material_icon/material_icon.template.dart' as import3;
import '../../button_decorator/button_decorator.template.dart' as import4;
import '../../material_icon/material_icon.dart' as import5;
import 'package:angular/src/common/directives/ng_class.dart' as import6;
import 'dart:html' as import7;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import8;
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import13;
import '../../button_decorator/button_decorator.dart' as import14;
import 'package:angular/src/core/linker/app_view_utils.dart' as import15;
import 'package:angular/src/di/errors.dart' as import16;
import '../common/menu_root.dart' as import17;

final List<dynamic> styles$IconAffixComponent = [import0.styles];

class ViewIconAffixComponent0 extends AppView<import2.IconAffixComponent> {
  import3.ViewMaterialIconComponent0 _compView_0;
  import4.ButtonDirectiveNgCd _ButtonDirective_0_5;
  import5.MaterialIconComponent _MaterialIconComponent_0_6;
  import6.NgClass _NgClass_0_7;
  var _expr_0;
  bool _expr_2;
  bool _expr_3;
  bool _expr_4;
  var _expr_5;
  var _expr_7;
  import7.Element _el_0;
  static import8.ComponentStyles _componentStyles;
  ViewIconAffixComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckOnce) {
    initComponentStyles();
    rootEl = import7.document.createElement('icon-affix');
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:angular_components/lib/material_menu/affix/icon_affix.dart' : null);
  }

  @override
  ComponentRef<import2.IconAffixComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import3.ViewMaterialIconComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    import13.setAttribute(_el_0, 'baseline', '');
    import13.setAttribute(_el_0, 'buttonDecorator', '');
    this.updateChildClassNonHtml(_el_0, 'secondary-icon');
    addShimC(_el_0);
    _ButtonDirective_0_5 = import4.ButtonDirectiveNgCd(import14.ButtonDirective(_el_0, null));
    _MaterialIconComponent_0_6 = import5.MaterialIconComponent(_el_0);
    _NgClass_0_7 = import6.NgClass(_el_0);
    _compView_0.create0(_MaterialIconComponent_0_6);
    _el_0.addEventListener('click', eventHandler1(_ButtonDirective_0_5.instance.handleClick));
    _el_0.addEventListener('keypress', eventHandler1(_ButtonDirective_0_5.instance.handleKeyPress));
    final subscription_0 = _ButtonDirective_0_5.instance.trigger.listen(eventHandler1(_ctx.handleActionIconTrigger));
    init(const [], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import14.ButtonDirective) && (0 == nodeIndex))) {
      return _ButtonDirective_0_5.instance;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final bool currVal_4 = (!_ctx.isActionIconAffix);
    if (import15.checkBinding(_expr_4, currVal_4)) {
      _ButtonDirective_0_5.instance.disabled = currVal_4;
      _expr_4 = currVal_4;
    }
    changed = false;
    final currVal_5 = _ctx.icon;
    if (import15.checkBinding(_expr_5, currVal_5)) {
      _MaterialIconComponent_0_6.icon = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if (firstCheck) {
      (_NgClass_0_7.initialClasses = 'secondary-icon');
    }
    final currVal_7 = _ctx.affix.cssClass;
    if (import15.checkBinding(_expr_7, currVal_7)) {
      _NgClass_0_7.rawClass = currVal_7;
      _expr_7 = currVal_7;
    }
    if ((!import15.AppViewUtils.throwOnChanges)) {
      _NgClass_0_7.ngDoCheck();
    }
    if (firstCheck) {
      import13.updateClassBindingNonHtml(_el_0, 'action-icon', false);
    }
    final currVal_0 = _ctx.actionIconAriaLabel;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      import13.updateAttribute(_el_0, 'aria-label', currVal_0);
      _expr_0 = currVal_0;
    }
    final bool currVal_2 = (!_ctx.isActionIconAffix);
    if (import15.checkBinding(_expr_2, currVal_2)) {
      import13.updateClassBindingNonHtml(_el_0, 'disabled', currVal_2);
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.affix.isVisibleOnHover;
    if (import15.checkBinding(_expr_3, currVal_3)) {
      import13.updateClassBindingNonHtml(_el_0, 'hover-icon', currVal_3);
      _expr_3 = currVal_3;
    }
    _ButtonDirective_0_5.detectHostChanges(_compView_0, _el_0);
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _NgClass_0_7.ngOnDestroy();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import8.ComponentStyles.scoped(styles$IconAffixComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.IconAffixComponent> _IconAffixComponentNgFactory = const ComponentFactory('icon-affix', viewFactory_IconAffixComponentHost0);
ComponentFactory<import2.IconAffixComponent> get IconAffixComponentNgFactory {
  return _IconAffixComponentNgFactory;
}

final List<dynamic> styles$IconAffixComponentHost = const [];

class _ViewIconAffixComponentHost0 extends AppView<import2.IconAffixComponent> {
  ViewIconAffixComponent0 _compView_0;
  import2.IconAffixComponent _IconAffixComponent_0_5;
  _ViewIconAffixComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.IconAffixComponent> build() {
    _compView_0 = ViewIconAffixComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _IconAffixComponent_0_5 = (import11.isDevMode
        ? import16.debugInjectorWrap(import2.IconAffixComponent, () {
            return import2.IconAffixComponent(_compView_0, this.injectorGetOptional(import17.MenuRoot, viewData.parentIndex));
          })
        : import2.IconAffixComponent(_compView_0, this.injectorGetOptional(import17.MenuRoot, viewData.parentIndex)));
    _compView_0.create(_IconAffixComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _IconAffixComponent_0_5);
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

AppView<import2.IconAffixComponent> viewFactory_IconAffixComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewIconAffixComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(IconAffixComponent, IconAffixComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
