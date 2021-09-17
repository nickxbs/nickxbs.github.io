// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'impressum_component.dart';
export 'impressum_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:nightscout_reporter/src/globals.template.dart' as _ref2;
import 'package:nightscout_reporter/src/impressum/impressum_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'impressum_component.dart' as import2;
import 'package:intl/intl.dart' as import3;
import 'package:angular_components/material_dialog/material_dialog.template.dart' as import4;
import 'package:angular_components/material_dialog/material_dialog.dart' as import5;
import 'package:angular_components/material_button/material_button.template.dart' as import6;
import 'package:angular_components/material_button/material_button.dart' as import7;
import 'package:angular_components/material_icon/material_icon.template.dart' as import8;
import 'package:angular_components/material_icon/material_icon.dart' as import9;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import10;
import 'package:angular/src/core/linker/view_type.dart' as import11;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import13;
import 'package:angular/src/runtime.dart' as import14;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import16;
import 'package:angular/src/di/errors.dart' as import17;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import18;
import 'package:angular_components/laminate/components/modal/modal.dart' as import19;
import 'package:angular_components/theme/dark_theme.dart' as import20;
import 'package:angular/src/core/di/opaque_token.dart' as import21;
import 'package:angular_components/button_decorator/button_decorator.dart' as import22;
import 'package:angular_components/interfaces/has_disabled.dart' as import23;
import 'package:angular/src/core/linker/app_view_utils.dart' as import24;

final List<dynamic> styles$ImpressumComponent = [import0.styles];

class ViewImpressumComponent0 extends AppView<import2.ImpressumComponent> {
  static final String _message_0 = import3.Intl.message('Impressum', desc: 'title for impressum dialog');
  import4.ViewMaterialDialogComponent0 _compView_0;
  import5.MaterialDialogComponent _MaterialDialogComponent_0_5;
  import6.ViewMaterialButtonComponent0 _compView_6;
  dynamic _AcxDarkTheme_6_5;
  import7.MaterialButtonComponent _MaterialButtonComponent_6_6;
  import8.ViewMaterialIconComponent0 _compView_7;
  import9.MaterialIconComponent _MaterialIconComponent_7_5;
  static import10.ComponentStyles _componentStyles;
  ViewImpressumComponent0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import13.document.createElement('impressum');
  }
  static String get _debugComponentUrl {
    return (import14.isDevMode ? 'asset:nightscout_reporter/lib/src/impressum/impressum_component.dart' : null);
  }

  @override
  ComponentRef<import2.ImpressumComponent> build() {
    final _rootEl = rootEl;
    final import13.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import4.ViewMaterialDialogComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    this.updateChildClassNonHtml(_el_0, 'headered-dialog');
    import16.setAttribute(_el_0, 'headered', '');
    import16.setAttribute(_el_0, 'hideFooter', '');
    addShimC(_el_0);
    _MaterialDialogComponent_0_5 = (import14.isDevMode
        ? import17.debugInjectorWrap(import5.MaterialDialogComponent, () {
            return import5.MaterialDialogComponent(_el_0, parentView.injectorGet(import18.DomService, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import19.ModalComponent, viewData.parentIndex));
          })
        : import5.MaterialDialogComponent(_el_0, parentView.injectorGet(import18.DomService, viewData.parentIndex), _compView_0, parentView.injectorGetOptional(import19.ModalComponent, viewData.parentIndex)));
    final doc = import13.document;
    final _el_1 = doc.createElement('div');
    import16.setAttribute(_el_1, 'header', '');
    addShimC(_el_1);
    final _el_2 = import16.appendDiv(doc, _el_1);
    addShimC(_el_2);
    final _el_3 = import16.appendElement(doc, _el_2, 'h1');
    addShimE(_el_3);
    final _text_4 = import16.appendText(_el_3, _message_0);
    final _el_5 = import16.appendElement(doc, _el_2, 'p');
    addShimE(_el_5);
    _compView_6 = import6.ViewMaterialButtonComponent0(this, 6);
    final _el_6 = _compView_6.rootEl;
    _el_1.append(_el_6);
    import16.setAttribute(_el_6, 'icon', '');
    addShimC(_el_6);
    _AcxDarkTheme_6_5 = (import14.isDevMode
        ? import17.debugInjectorWrap(import20.AcxDarkTheme, () {
            return import20.AcxDarkTheme(parentView.injectorGetOptional(const import21.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex));
          })
        : import20.AcxDarkTheme(parentView.injectorGetOptional(const import21.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex)));
    _MaterialButtonComponent_6_6 = import7.MaterialButtonComponent(_el_6, _AcxDarkTheme_6_5, _compView_6, null);
    _compView_7 = import8.ViewMaterialIconComponent0(this, 7);
    final _el_7 = _compView_7.rootEl;
    import16.setAttribute(_el_7, 'icon', 'close');
    addShimC(_el_7);
    _MaterialIconComponent_7_5 = import9.MaterialIconComponent(_el_7);
    _compView_7.create0(_MaterialIconComponent_7_5);
    _compView_6.create(_MaterialButtonComponent_6_6, [
      [_el_7]
    ]);
    final _el_8 = doc.createElement('div');
    this.updateChildClass(_el_8, 'root');
    addShimC(_el_8);
    final _el_9 = import16.appendDiv(doc, _el_8);
    addShimC(_el_9);
    final _el_10 = import16.appendElement(doc, _el_9, 'br');
    addShimE(_el_10);
    final _text_11 = import16.appendText(_el_9, 'Angaben gemäss § 5 TMG ');
    final _el_12 = import16.appendElement(doc, _el_9, 'br');
    addShimE(_el_12);
    final _text_13 = import16.appendText(_el_9, ' ');
    final _el_14 = import16.appendElement(doc, _el_9, 'br');
    addShimE(_el_14);
    final _text_15 = import16.appendText(_el_9, 'Andreas Perlitz ');
    final _el_16 = import16.appendElement(doc, _el_9, 'br');
    addShimE(_el_16);
    final _text_17 = import16.appendText(_el_9, 'Karlsbader Str. 15 ');
    final _el_18 = import16.appendElement(doc, _el_9, 'br');
    addShimE(_el_18);
    final _text_19 = import16.appendText(_el_9, '86169 Augsburg ');
    final _el_20 = import16.appendElement(doc, _el_9, 'br');
    addShimE(_el_20);
    final _el_21 = import16.appendElement(doc, _el_9, 'h2');
    addShimE(_el_21);
    final _text_22 = import16.appendText(_el_21, 'Kontakt');
    final _text_23 = import16.appendText(_el_9, 'Telefon: 0821 / 704 705 ');
    final _el_24 = import16.appendElement(doc, _el_9, 'br');
    addShimE(_el_24);
    final _text_25 = import16.appendText(_el_9, 'E-Mail: ');
    final _el_26 = import16.appendElement(doc, _el_9, 'a');
    import16.setAttribute(_el_26, 'href', 'mailto:andi@zreptil.de');
    addShimC(_el_26);
    final _text_27 = import16.appendText(_el_26, 'andi@zreptil.de');
    final _text_28 = import16.appendText(_el_9, ' ');
    final _el_29 = import16.appendElement(doc, _el_9, 'br');
    addShimE(_el_29);
    final _text_30 = import16.appendText(_el_9, 'Internetadresse: ');
    final _el_31 = import16.appendElement(doc, _el_9, 'a');
    import16.setAttribute(_el_31, 'href', 'https://www.facebook.com/nightrep');
    import16.setAttribute(_el_31, 'target', '_blank');
    addShimC(_el_31);
    final _text_32 = import16.appendText(_el_31, 'https://www.facebook.com/nightrep');
    final _el_33 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_33);
    final _text_34 = import16.appendText(_el_33, 'Quellenangaben für die verwendeten Komponenten');
    final _el_35 = import16.appendDiv(doc, _el_8);
    addShimC(_el_35);
    final _text_36 = import16.appendText(_el_35, 'Die Webseite wurde unter Verwendung von ');
    final _el_37 = import16.appendElement(doc, _el_35, 'a');
    import16.setAttribute(_el_37, 'href', 'https://webdev.dartlang.org/angular');
    import16.setAttribute(_el_37, 'target', '_blank');
    addShimC(_el_37);
    final _text_38 = import16.appendText(_el_37, 'AngularDart');
    final _text_39 = import16.appendText(_el_35, ' erstellt. ');
    final _el_40 = import16.appendElement(doc, _el_35, 'br');
    addShimE(_el_40);
    final _text_41 = import16.appendText(_el_35, 'Die PDF-Dateien, die auf dieser Webseite erzeugt werden können, werden mit ');
    final _el_42 = import16.appendElement(doc, _el_35, 'a');
    import16.setAttribute(_el_42, 'href', 'http://pdfmake.org/#/');
    import16.setAttribute(_el_42, 'target', '_blank');
    addShimC(_el_42);
    final _text_43 = import16.appendText(_el_42, 'PDFMake');
    final _text_44 = import16.appendText(_el_35, ' erzeugt.');
    final _el_45 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_45);
    final _text_46 = import16.appendText(_el_45, 'Haftungsausschluss');
    final _el_47 = import16.appendDiv(doc, _el_8);
    addShimC(_el_47);
    final _el_48 = import16.appendElement(doc, _el_47, 'h3');
    addShimE(_el_48);
    final _text_49 = import16.appendText(_el_48, 'Haftung für Inhalte');
    final _text_50 = import16.appendText(_el_47, 'Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäss § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. ');
    final _el_51 = import16.appendElement(doc, _el_47, 'br');
    addShimE(_el_51);
    final _el_52 = import16.appendElement(doc, _el_47, 'h3');
    addShimE(_el_52);
    final _text_53 = import16.appendText(_el_52, 'Haftung für Links');
    final _text_54 = import16.appendText(_el_47, 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstösse überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen. ');
    final _el_55 = import16.appendElement(doc, _el_47, 'br');
    addShimE(_el_55);
    final _el_56 = import16.appendElement(doc, _el_47, 'h3');
    addShimE(_el_56);
    final _text_57 = import16.appendText(_el_56, 'Urheberrecht');
    final _text_58 = import16.appendText(_el_47, 'Die durch die Seitenbetreiber erstellten bzw. verwendeten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.');
    final _el_59 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_59);
    final _text_60 = import16.appendText(_el_59, 'Impressum');
    final _el_61 = import16.appendElement(doc, _el_8, 'p');
    addShimE(_el_61);
    final _text_62 = import16.appendText(_el_61, 'Andreas Perlitz');
    final _el_63 = import16.appendElement(doc, _el_61, 'br');
    addShimE(_el_63);
    final _text_64 = import16.appendText(_el_61, ' Karlsbader Str. 15');
    final _el_65 = import16.appendElement(doc, _el_61, 'br');
    addShimE(_el_65);
    final _text_66 = import16.appendText(_el_61, '86169 Augsburg');
    final _el_67 = import16.appendElement(doc, _el_8, 'p');
    addShimE(_el_67);
    final _text_68 = import16.appendText(_el_67, 'Telefon: 0821/704 705');
    final _el_69 = import16.appendElement(doc, _el_67, 'br');
    addShimE(_el_69);
    final _text_70 = import16.appendText(_el_67, ' E-Mail: ');
    final _el_71 = import16.appendElement(doc, _el_67, 'a');
    import16.setAttribute(_el_71, 'href', 'mailto:andi@zreptil.de');
    addShimC(_el_71);
    final _text_72 = import16.appendText(_el_71, 'andi@zreptil.de');
    final _el_73 = import16.appendElement(doc, _el_67, 'br');
    addShimE(_el_73);
    final _el_74 = import16.appendDiv(doc, _el_8);
    this.updateChildClass(_el_74, 'source');
    addShimC(_el_74);
    final _el_75 = import16.appendElement(doc, _el_74, 'i');
    addShimE(_el_75);
    final _text_76 = import16.appendText(_el_75, 'Quelle:');
    final _text_77 = import16.appendText(_el_74, ' ');
    final _el_78 = import16.appendElement(doc, _el_74, 'a');
    import16.setAttribute(_el_78, 'href', 'https://www.juraforum.de/impressum-generator/');
    import16.setAttribute(_el_78, 'target', '_blank');
    addShimC(_el_78);
    final _text_79 = import16.appendText(_el_78, 'Impressum Muster von JuraForum.de');
    _compView_0.create(_MaterialDialogComponent_0_5, [
      [_el_1],
      [_el_8],
      const []
    ]);
    final subscription_0 = _MaterialButtonComponent_6_6.trigger.listen(eventHandler1(_handle_trigger_6_0));
    init(const [], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((6 <= nodeIndex) && (nodeIndex <= 7))) {
      if (identical(token, import20.AcxDarkTheme)) {
        return _AcxDarkTheme_6_5;
      }
      if (((identical(token, import7.MaterialButtonComponent) || identical(token, import22.ButtonDirective)) || identical(token, import23.HasDisabled))) {
        return _MaterialButtonComponent_6_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialDialogComponent_0_5.hideFooter = true;
      changed = true;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_7_5.icon = 'close';
      changed = true;
    }
    if (changed) {
      _compView_7.markAsCheckOnce();
    }
    if ((!import24.AppViewUtils.throwOnChanges)) {
      _MaterialDialogComponent_0_5.ngAfterContentChecked();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_6.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_6.detectChanges();
    _compView_7.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _compView_6.destroyInternalState();
    _compView_7.destroyInternalState();
    _MaterialDialogComponent_0_5.ngOnDestroy();
  }

  void _handle_trigger_6_0($event) {
    final _ctx = ctx;
    _ctx.fire('@normal');
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import10.ComponentStyles.scoped(styles$ImpressumComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.ImpressumComponent> _ImpressumComponentNgFactory = const ComponentFactory('impressum', viewFactory_ImpressumComponentHost0);
ComponentFactory<import2.ImpressumComponent> get ImpressumComponentNgFactory {
  return _ImpressumComponentNgFactory;
}

final List<dynamic> styles$ImpressumComponentHost = const [];

class _ViewImpressumComponentHost0 extends AppView<import2.ImpressumComponent> {
  ViewImpressumComponent0 _compView_0;
  import2.ImpressumComponent _ImpressumComponent_0_5;
  _ViewImpressumComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.ImpressumComponent> build() {
    _compView_0 = ViewImpressumComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ImpressumComponent_0_5 = import2.ImpressumComponent();
    _compView_0.create(_ImpressumComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _ImpressumComponent_0_5);
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

AppView<import2.ImpressumComponent> viewFactory_ImpressumComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewImpressumComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ImpressumComponent, ImpressumComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
