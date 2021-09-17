// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'dsgvo_component.dart';
export 'dsgvo_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:nightscout_reporter/src/globals.template.dart' as _ref2;
import 'package:nightscout_reporter/src/dsgvo/dsgvo_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'dsgvo_component.dart' as import2;
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

final List<dynamic> styles$DSGVOComponent = [import0.styles];

class ViewDSGVOComponent0 extends AppView<import2.DSGVOComponent> {
  static final String _message_0 = import3.Intl.message('Datenschutzerklärung', desc: 'title for dataprotection dialog');
  static final String _message_1 = import3.Intl.message('tl;dr', desc: 'headline for shorttext for dataprotection');
  static final String _message_2 = import3.Intl.message('Diese Webseite speichert keine Daten auf Servern. Die benötigten Daten werden von der eingegebenen URL zur Nightscout-Instanz geholt und als PDF aufbereitet. Die Daten, die zur Funktion der Webseite benötigt werden, werden im localStorage des Browsers gespeichert und nicht an den Server übermittelt. Wenn die Synchronisierung mit Google Drive aktiviert wird, dann werden diese Daten zusätzlich in den Anwendungsdaten auf dem Google Drive des verbundenen Kontos gespeichert.', desc: 'shorttext for dataprotection');
  static final String _message_3 = import3.Intl.message('Mehr gibt es dazu eigentlich nicht zu sagen.', desc: 'allsaid in dataprotection');
  static final String _message_4 = import3.Intl.message('Da wir seit einiger Zeit in Europa eine DSGVO haben, werden im Folgenden noch die Vorschriften dafür erfüllt. Der folgende Text ist nur auf Deutsch verfügbar:', desc: 'info for dsgvo in dataprotection');
  import4.ViewMaterialDialogComponent0 _compView_0;
  import5.MaterialDialogComponent _MaterialDialogComponent_0_5;
  import6.ViewMaterialButtonComponent0 _compView_6;
  dynamic _AcxDarkTheme_6_5;
  import7.MaterialButtonComponent _MaterialButtonComponent_6_6;
  import8.ViewMaterialIconComponent0 _compView_7;
  import9.MaterialIconComponent _MaterialIconComponent_7_5;
  static import10.ComponentStyles _componentStyles;
  ViewDSGVOComponent0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import13.document.createElement('dsgvo');
  }
  static String get _debugComponentUrl {
    return (import14.isDevMode ? 'asset:nightscout_reporter/lib/src/dsgvo/dsgvo_component.dart' : null);
  }

  @override
  ComponentRef<import2.DSGVOComponent> build() {
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
    final _el_9 = import16.appendElement(doc, _el_8, 'strong');
    addShimE(_el_9);
    final _text_10 = import16.appendText(_el_9, _message_1);
    final _el_11 = import16.appendElement(doc, _el_8, 'p');
    addShimE(_el_11);
    final _text_12 = import16.appendText(_el_11, _message_2);
    final _el_13 = import16.appendElement(doc, _el_8, 'p');
    addShimE(_el_13);
    final _text_14 = import16.appendText(_el_13, _message_3);
    final _el_15 = import16.appendElement(doc, _el_8, 'p');
    addShimE(_el_15);
    final _text_16 = import16.appendText(_el_15, _message_4);
    final _el_17 = import16.appendElement(doc, _el_8, 'strong');
    addShimE(_el_17);
    final _text_18 = import16.appendText(_el_17, 'Datenschutzerklärung');
    final _el_19 = import16.appendElement(doc, _el_8, 'p');
    addShimE(_el_19);
    final _text_20 = import16.appendText(_el_19, 'Wir informieren Sie nachfolgend gemäß den gesetzlichen Vorgaben des Datenschutzrechts (insb. gemäß BDSG n.F. und der europäischen Datenschutz-Grundverordnung ‚DS-GVO‘) über die Art, den Umfang und Zweck der Verarbeitung personenbezogener Daten durch unser Unternehmen. Diese Datenschutzerklärung gilt auch für unsere Websites und Sozial-Media-Profile. Bezüglich der Definition von Begriffen wie etwa „personenbezogene Daten“ oder „Verarbeitung“ verweisen wir auf Art. 4 DS-GVO.');
    final _el_21 = import16.appendElement(doc, _el_8, 'strong');
    addShimE(_el_21);
    final _text_22 = import16.appendText(_el_21, 'Name und Kontaktdaten des / der Verantwortlichen');
    final _el_23 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_23);
    final _text_24 = import16.appendText(_el_8, ' Unser/e Verantwortliche/r (nachfolgend „Verantwortlicher“) i.S.d. Art. 4 Zif. 7 DS-GVO ist:');
    final _el_25 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_25);
    final _text_26 = import16.appendText(_el_8, ' ');
    final _el_27 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_27);
    final _text_28 = import16.appendText(_el_8, 'Andreas Perlitz');
    final _el_29 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_29);
    final _text_30 = import16.appendText(_el_8, 'Karlsbader Str. 15');
    final _el_31 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_31);
    final _text_32 = import16.appendText(_el_8, '86169 Augsburg Deutschland');
    final _el_33 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_33);
    final _text_34 = import16.appendText(_el_8, 'E-Mail-Adresse: andi@zreptil.de');
    final _el_35 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_35);
    final _el_36 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_36);
    final _el_37 = import16.appendElement(doc, _el_8, 'strong');
    addShimE(_el_37);
    final _text_38 = import16.appendText(_el_37, 'Datenarten, Zwecke der Verarbeitung und Kategorien betroffener Personen');
    final _el_39 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_39);
    final _el_40 = import16.appendElement(doc, _el_8, 'p');
    addShimE(_el_40);
    final _text_41 = import16.appendText(_el_40, 'Nachfolgend informieren wir Sie über Art, Umfang und Zweck der Erhebung, Verarbeitung und Nutzung personenbezogener Daten.');
    final _el_42 = import16.appendElement(doc, _el_8, 'strong');
    addShimE(_el_42);
    final _text_43 = import16.appendText(_el_42, '1. Arten der Daten, die wir verarbeiten');
    final _el_44 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_44);
    final _text_45 = import16.appendText(_el_8, 'Inhaltsdaten (Texteingaben, Videos, Fotos etc.), ');
    final _el_46 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_46);
    final _text_47 = import16.appendText(_el_8, ' ');
    final _el_48 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_48);
    final _text_49 = import16.appendText(_el_8, ' ');
    final _el_50 = import16.appendElement(doc, _el_8, 'strong');
    addShimE(_el_50);
    final _text_51 = import16.appendText(_el_50, '2. Zwecke der Verarbeitung nach Art. 13 Abs. 1 c) DS-GVO');
    final _el_52 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_52);
    final _text_53 = import16.appendText(_el_8, 'Leichten Zugang zur Website ermöglichen, Website benutzerfreundlich gestalten, Websites mit Funktionen und Inhalten bereitstellen, ');
    final _el_54 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_54);
    final _text_55 = import16.appendText(_el_8, ' ');
    final _el_56 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_56);
    final _text_57 = import16.appendText(_el_8, ' ');
    final _el_58 = import16.appendElement(doc, _el_8, 'strong');
    addShimE(_el_58);
    final _text_59 = import16.appendText(_el_58, '3. Kategorien der betroffenen Personen nach Art. 13 Abs. 1 e) DS-GVO');
    final _el_60 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_60);
    final _text_61 = import16.appendText(_el_8, 'Besucher/Nutzer der Website, ');
    final _el_62 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_62);
    final _text_63 = import16.appendText(_el_8, ' ');
    final _el_64 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_64);
    final _el_65 = import16.appendElement(doc, _el_8, 'p');
    addShimE(_el_65);
    final _text_66 = import16.appendText(_el_65, 'Die betroffenen Personen werden zusammenfassend als „Nutzer“ bezeichnet.');
    final _el_67 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_67);
    final _text_68 = import16.appendText(_el_8, ' ');
    final _el_69 = import16.appendElement(doc, _el_8, 'strong');
    addShimE(_el_69);
    final _text_70 = import16.appendText(_el_69, 'Rechtsgrundlagen der Verarbeitung personenbezogener Daten');
    final _el_71 = import16.appendElement(doc, _el_8, 'p');
    addShimE(_el_71);
    final _text_72 = import16.appendText(_el_71, 'Nachfolgend Informieren wir Sie über die Rechtsgrundlagen der Verarbeitung personenbezogener Daten:');
    final _el_73 = import16.appendElement(doc, _el_8, 'ol');
    import16.setAttribute(_el_73, 'style', 'margin:10px 0px; padding:15px;');
    addShimC(_el_73);
    final _el_74 = import16.appendElement(doc, _el_73, 'li');
    addShimE(_el_74);
    final _text_75 = import16.appendText(_el_74, 'Wenn wir Ihre Einwilligung für die Verarbeitung personenbezogenen Daten eingeholt haben, ist Art. 6 Abs. 1 S. 1 lit. a) DS-GVO Rechtsgrundlage.');
    final _el_76 = import16.appendElement(doc, _el_73, 'li');
    addShimE(_el_76);
    final _text_77 = import16.appendText(_el_76, 'Ist die Verarbeitung zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Ihre Anfrage hin erfolgen, so ist Art. 6 Abs. 1 S. 1 lit. b) DS-GVO Rechtsgrundlage.');
    final _el_78 = import16.appendElement(doc, _el_73, 'li');
    addShimE(_el_78);
    final _text_79 = import16.appendText(_el_78, 'Ist die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der wir unterliegen (z.B. gesetzliche Aufbewahrungspflichten), so ist Art. 6 Abs. 1 S. 1 lit. c) DS-GVO Rechtsgrundlage.');
    final _el_80 = import16.appendElement(doc, _el_73, 'li');
    addShimE(_el_80);
    final _text_81 = import16.appendText(_el_80, 'Ist die Verarbeitung erforderlich, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen, so ist Art. 6 Abs. 1 S. 1 lit. d) DS-GVO Rechtsgrundlage.');
    final _el_82 = import16.appendElement(doc, _el_73, 'li');
    addShimE(_el_82);
    final _text_83 = import16.appendText(_el_82, 'Ist die Verarbeitung zur Wahrung unserer oder der berechtigten Interessen eines Dritten erforderlich und überwiegen diesbezüglich Ihre Interessen oder Grundrechte und Grundfreiheiten nicht, so ist Art. 6 Abs. 1 S. 1 lit. f) DS-GVO Rechtsgrundlage.');
    final _el_84 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_84);
    final _text_85 = import16.appendText(_el_8, ' ');
    final _el_86 = import16.appendElement(doc, _el_8, 'strong');
    addShimE(_el_86);
    final _text_87 = import16.appendText(_el_86, 'Weitergabe personenbezogener Daten an Dritte und Auftragsverarbeiter');
    final _el_88 = import16.appendElement(doc, _el_8, 'p');
    addShimE(_el_88);
    final _text_89 = import16.appendText(_el_88, 'Ohne Ihre Einwilligung geben wir grundsätzlich keine Daten an Dritte weiter. Sollte dies doch der Fall sein, dann erfolgt die Weitergabe auf der Grundlage der zuvor genannten Rechtsgrundlagen z.B. bei der Weitergabe von Daten an Online-Paymentanbieter zur Vertragserfüllung oder aufgrund gerichtlicher Anordnung oder wegen einer gesetzlichen Verpflichtung zur Herausgabe der Daten zum Zwecke der Strafverfolgung, zur Gefahrenabwehr oder zur Durchsetzung der Rechte am geistigen Eigentum.');
    final _el_90 = import16.appendElement(doc, _el_88, 'br');
    addShimE(_el_90);
    final _text_91 = import16.appendText(_el_88, ' Wir setzen zudem Auftragsverarbeiter (externe Dienstleister z.B. zum Webhosting unserer Websites und Datenbanken) zur Verarbeitung Ihrer Daten ein. Wenn im Rahmen einer Vereinbarung zur Auftragsverarbeitung an die Auftragsverarbeiter Daten weitergegeben werden, erfolgt dies immer nach Art. 28 DS-GVO. Wir wählen dabei unsere Auftragsverarbeiter sorgfältig aus, kontrollieren diese regelmäßig und haben uns ein Weisungsrecht hinsichtlich der Daten einräumen lassen. Zudem müssen die Auftragsverarbeiter geeignete technische und organisatorische Maßnahmen getroffen haben und die Datenschutzvorschriften gem. BDSG n.F. und DS-GVO einhalten');
    final _el_92 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_92);
    final _text_93 = import16.appendText(_el_8, ' ');
    final _el_94 = import16.appendElement(doc, _el_8, 'strong');
    addShimE(_el_94);
    final _text_95 = import16.appendText(_el_94, 'Datenübermittlung in Drittstaaten');
    final _el_96 = import16.appendElement(doc, _el_8, 'p');
    addShimE(_el_96);
    final _text_97 = import16.appendText(_el_96, 'Durch die Verabschiedung der europäischen Datenschutz-Grundverordnung (DS-GVO) wurde eine einheitliche Grundlage für den Datenschutz in Europa geschaffen. Ihre Daten werden daher vorwiegend durch Unternehmen verarbeitet, für die DS-GVO Anwendung findet. Sollte doch die Verarbeitung durch Dienste Dritter außerhalb der Europäischen Union oder des Europäischen Wirtschaftsraums stattfinden, so müssen diese die besonderen Voraussetzungen der Art. 44 ff. DS-GVO erfüllen. Das bedeutet, die Verarbeitung erfolgt aufgrund besonderer Garantien, wie etwa die von der EU-Kommission offiziell anerkannte Feststellung eines der EU entsprechenden Datenschutzniveaus oder der Beachtung offiziell anerkannter spezieller vertraglicher Verpflichtungen, der so genannten „Standardvertragsklauseln“. Bei US-Unternehmen erfüllt die Unterwerfung unter das sog. „Privacy-Shield“, dem Datenschutzabkommen zwischen der EU und den USA, diese Voraussetzungen.');
    final _el_98 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_98);
    final _text_99 = import16.appendText(_el_8, ' ');
    final _el_100 = import16.appendElement(doc, _el_8, 'strong');
    addShimE(_el_100);
    final _text_101 = import16.appendText(_el_100, 'Löschung von Daten und Speicherdauer');
    final _el_102 = import16.appendElement(doc, _el_8, 'p');
    addShimE(_el_102);
    final _text_103 = import16.appendText(_el_102, 'Sofern nicht in dieser Datenschutzerklärung ausdrücklich angegeben, werden Ihre personenbezogen Daten gelöscht oder gesperrt, sobald der Zweck für die Speicherung entfällt, es sei denn deren weitere Aufbewahrung ist zu Beweiszwecken erforderlich oder dem stehen gesetzliche Aufbewahrungspflichten entgegenstehen. Darunter fallen etwa handelsrechtliche Aufbewahrungspflichten von Geschäftsbriefen nach § 257 Abs. 1 HGB (6 Jahre) sowie steuerrechtliche Aufbewahrungspflichten nach § 147 Abs. 1 AO von Belegen (10 Jahre). Wenn die vorgeschriebene Aufbewahrungsfrist abläuft, erfolgt eine Sperrung oder Löschung Ihrer Daten, es sei denn die Speicherung ist weiterhin für einen Vertragsabschluss oder zur Vertragserfüllung erforderlich.');
    final _el_104 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_104);
    final _text_105 = import16.appendText(_el_8, ' ');
    final _el_106 = import16.appendElement(doc, _el_8, 'strong');
    addShimE(_el_106);
    final _text_107 = import16.appendText(_el_106, 'Bestehen einer automatisierten Entscheidungsfindung');
    final _el_108 = import16.appendElement(doc, _el_8, 'p');
    addShimE(_el_108);
    final _text_109 = import16.appendText(_el_108, 'Wir setzen keine automatische Entscheidungsfindung oder ein Profiling ein.');
    final _el_110 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_110);
    final _text_111 = import16.appendText(_el_8, ' ');
    final _el_112 = import16.appendElement(doc, _el_8, 'strong');
    addShimE(_el_112);
    final _text_113 = import16.appendText(_el_112, 'Bereitstellung unserer Website und Erstellung von Logfiles');
    final _el_114 = import16.appendElement(doc, _el_8, 'ol');
    import16.setAttribute(_el_114, 'style', 'margin:10px 0px; padding:15px;');
    addShimC(_el_114);
    final _el_115 = import16.appendElement(doc, _el_114, 'li');
    addShimE(_el_115);
    final _text_116 = import16.appendText(_el_115, 'Wenn Sie unsere Webseite lediglich informatorisch nutzen (also keine Registrierung und auch keine anderweitige Übermittlung von Informationen), erheben wir nur die personenbezogenen Daten, die Ihr Browser an unseren Server übermittelt. Wenn Sie unsere Website betrachten möchten, erheben wir die folgenden Daten: • IP-Adresse;');
    final _el_117 = import16.appendElement(doc, _el_115, 'br');
    addShimE(_el_117);
    final _text_118 = import16.appendText(_el_115, ' • Internet-Service-Provider des Nutzers;');
    final _el_119 = import16.appendElement(doc, _el_115, 'br');
    addShimE(_el_119);
    final _text_120 = import16.appendText(_el_115, ' • Datum und Uhrzeit des Abrufs;');
    final _el_121 = import16.appendElement(doc, _el_115, 'br');
    addShimE(_el_121);
    final _text_122 = import16.appendText(_el_115, ' • Browsertyp;');
    final _el_123 = import16.appendElement(doc, _el_115, 'br');
    addShimE(_el_123);
    final _text_124 = import16.appendText(_el_115, ' • Sprache und Browser-Version;');
    final _el_125 = import16.appendElement(doc, _el_115, 'br');
    addShimE(_el_125);
    final _text_126 = import16.appendText(_el_115, ' • Inhalt des Abrufs;');
    final _el_127 = import16.appendElement(doc, _el_115, 'br');
    addShimE(_el_127);
    final _text_128 = import16.appendText(_el_115, ' • Zeitzone;');
    final _el_129 = import16.appendElement(doc, _el_115, 'br');
    addShimE(_el_129);
    final _text_130 = import16.appendText(_el_115, ' • Zugriffsstatus/HTTP-Statuscode;');
    final _el_131 = import16.appendElement(doc, _el_115, 'br');
    addShimE(_el_131);
    final _text_132 = import16.appendText(_el_115, ' • Datenmenge;');
    final _el_133 = import16.appendElement(doc, _el_115, 'br');
    addShimE(_el_133);
    final _text_134 = import16.appendText(_el_115, ' • Websites, von denen die Anforderung kommt;');
    final _el_135 = import16.appendElement(doc, _el_115, 'br');
    addShimE(_el_135);
    final _text_136 = import16.appendText(_el_115, ' • Betriebssystem.');
    final _el_137 = import16.appendElement(doc, _el_115, 'br');
    addShimE(_el_137);
    final _text_138 = import16.appendText(_el_115, ' Eine Speicherung dieser Daten zusammen mit anderen personenbezogenen Daten von Ihnen findet nicht statt.');
    final _el_139 = import16.appendElement(doc, _el_115, 'br');
    addShimE(_el_139);
    final _el_140 = import16.appendElement(doc, _el_115, 'br');
    addShimE(_el_140);
    final _el_141 = import16.appendElement(doc, _el_114, 'li');
    addShimE(_el_141);
    final _text_142 = import16.appendText(_el_141, 'Diese Daten dienen dem Zweck der nutzerfreundlichen, funktionsfähigen und sicheren Auslieferung unserer Website an Sie mit Funktionen und Inhalten sowie deren Optimierung und statistischen Auswertung.');
    final _el_143 = import16.appendElement(doc, _el_141, 'br');
    addShimE(_el_143);
    final _el_144 = import16.appendElement(doc, _el_141, 'br');
    addShimE(_el_144);
    final _el_145 = import16.appendElement(doc, _el_114, 'li');
    addShimE(_el_145);
    final _text_146 = import16.appendText(_el_145, 'Rechtsgrundlage hierfür ist unser in den obigen Zwecken auch liegendes berechtigtes Interesse an der Datenverarbeitung nach Art. 6 Abs. 1 S.1 lit. f) DS-GVO.');
    final _el_147 = import16.appendElement(doc, _el_145, 'br');
    addShimE(_el_147);
    final _el_148 = import16.appendElement(doc, _el_145, 'br');
    addShimE(_el_148);
    final _el_149 = import16.appendElement(doc, _el_114, 'li');
    addShimE(_el_149);
    final _text_150 = import16.appendText(_el_149, 'Wir speichern aus Sicherheitsgründen diese Daten in Server-Logfiles für die Speicherdauer von Tagen. Nach Ablauf dieser Frist werden diese automatisch gelöscht, es sei denn wir benötigen deren Aufbewahrung zu Beweiszwecken bei Angriffen auf die Serverinfrastruktur oder anderen Rechtsverletzungen.');
    final _el_151 = import16.appendElement(doc, _el_149, 'br');
    addShimE(_el_151);
    final _el_152 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_152);
    final _text_153 = import16.appendText(_el_8, ' ');
    final _el_154 = import16.appendElement(doc, _el_8, 'strong');
    addShimE(_el_154);
    final _text_155 = import16.appendText(_el_154, 'Präsenz in sozialen Medien');
    final _el_156 = import16.appendElement(doc, _el_8, 'ol');
    import16.setAttribute(_el_156, 'style', 'margin:10px 0px; padding:15px;');
    addShimC(_el_156);
    final _el_157 = import16.appendElement(doc, _el_156, 'li');
    addShimE(_el_157);
    final _text_158 = import16.appendText(_el_157, 'Wir unterhalten in sozialen Medien Profile bzw. Fanpages, um mit den dort angeschlossenen und registrierten Nutzern zu kommunizieren und um über unsere Produkte, Angebote und Dienstleistungen zu informieren. Die US-Anbieter sind nach dem sog. Privacy-Shield zertifiziert und damit verpflichtet europäischen Datenschutz einzuhalten. Bei der Nutzung und dem Aufruf unseres Profils im jeweiligen Netzwerk durch Sie gelten die jeweiligen Datenschutzhinweise und Nutzungsbedingungen des jeweiligen Netzwerks.');
    final _el_159 = import16.appendElement(doc, _el_157, 'br');
    addShimE(_el_159);
    final _el_160 = import16.appendElement(doc, _el_157, 'br');
    addShimE(_el_160);
    final _el_161 = import16.appendElement(doc, _el_156, 'li');
    addShimE(_el_161);
    final _text_162 = import16.appendText(_el_161, 'Wir verarbeiten Ihre Daten, die Sie uns über diese Netzwerke senden, um mit Ihnen zu kommunizieren und um Ihre dortigen Nachrichten zu beantworten.');
    final _el_163 = import16.appendElement(doc, _el_161, 'br');
    addShimE(_el_163);
    final _el_164 = import16.appendElement(doc, _el_161, 'br');
    addShimE(_el_164);
    final _el_165 = import16.appendElement(doc, _el_156, 'li');
    addShimE(_el_165);
    final _text_166 = import16.appendText(_el_165, 'Die Rechtsgrundlage für die Verarbeitung der personenbezogenen Daten ist unser berechtigtes Interesse an der Kommunikation mit den Nutzern und unsere Außendarstellung zwecks Werbung gemäß Art. 6 Abs. 1 S. 1 lit. f) DS-GVO. Soweit Sie dem Verantwortlichen des sozialen Netzwerks eine Einwilligung in die Verarbeitung Ihrer personenbezogenen Daten erteilt haben, ist Rechtsgrundlage Art. 6 Abs. 1 S. 1 lit. a) und Art. 7 DS-GVO.');
    final _el_167 = import16.appendElement(doc, _el_165, 'br');
    addShimE(_el_167);
    final _el_168 = import16.appendElement(doc, _el_165, 'br');
    addShimE(_el_168);
    final _el_169 = import16.appendElement(doc, _el_156, 'li');
    addShimE(_el_169);
    final _text_170 = import16.appendText(_el_169, 'Die Datenschutzhinweise, Auskunftsmöglichkeiten und Widerspruchmöglichkeiten (Opt-Out) der jeweiligen Netzwerke finden Sie hier:');
    final _el_171 = import16.appendElement(doc, _el_169, 'br');
    addShimE(_el_171);
    final _el_172 = import16.appendElement(doc, _el_169, 'br');
    addShimE(_el_172);
    final _text_173 = import16.appendText(_el_169, '• ');
    final _el_174 = import16.appendElement(doc, _el_169, 'strong');
    addShimE(_el_174);
    final _text_175 = import16.appendText(_el_174, 'Facebook');
    final _text_176 = import16.appendText(_el_169, ' (Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland) Datenschutzerklärung: ');
    final _el_177 = import16.appendElement(doc, _el_169, 'a');
    import16.setAttribute(_el_177, 'href', 'https://www.facebook.com/about/privacy/');
    import16.setAttribute(_el_177, 'rel', 'nofollow');
    import16.setAttribute(_el_177, 'target', '_blank');
    addShimC(_el_177);
    final _text_178 = import16.appendText(_el_177, 'https://www.facebook.com/about/privacy/');
    final _text_179 = import16.appendText(_el_169, ', Opt-Out: ');
    final _el_180 = import16.appendElement(doc, _el_169, 'a');
    import16.setAttribute(_el_180, 'href', 'https://www.facebook.com/settings?tab=ads');
    import16.setAttribute(_el_180, 'rel', 'nofollow');
    import16.setAttribute(_el_180, 'target', '_blank');
    addShimC(_el_180);
    final _text_181 = import16.appendText(_el_180, 'https://www.facebook.com/settings?tab=ads');
    final _text_182 = import16.appendText(_el_169, ' und ');
    final _el_183 = import16.appendElement(doc, _el_169, 'a');
    import16.setAttribute(_el_183, 'href', 'http://www.youronlinechoices.com');
    import16.setAttribute(_el_183, 'rel', 'nofollow');
    import16.setAttribute(_el_183, 'target', '_blank');
    addShimC(_el_183);
    final _text_184 = import16.appendText(_el_183, 'http://www.youronlinechoices.com');
    final _text_185 = import16.appendText(_el_169, ', Privacy Shield: ');
    final _el_186 = import16.appendElement(doc, _el_169, 'a');
    import16.setAttribute(_el_186, 'href', 'https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active');
    import16.setAttribute(_el_186, 'rel', 'nofollow');
    import16.setAttribute(_el_186, 'target', '_blank');
    addShimC(_el_186);
    final _text_187 = import16.appendText(_el_186, 'https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active');
    final _text_188 = import16.appendText(_el_169, '.');
    final _el_189 = import16.appendElement(doc, _el_169, 'br');
    addShimE(_el_189);
    final _el_190 = import16.appendElement(doc, _el_169, 'br');
    addShimE(_el_190);
    final _text_191 = import16.appendText(_el_169, '• ');
    final _el_192 = import16.appendElement(doc, _el_169, 'strong');
    addShimE(_el_192);
    final _text_193 = import16.appendText(_el_192, 'Google+');
    final _text_194 = import16.appendText(_el_169, ' (Google LLC, 1600 AmphitheatreParkway, Mountain View, CA 94043, USA) – Datenschutzerklärung: ');
    final _el_195 = import16.appendElement(doc, _el_169, 'a');
    import16.setAttribute(_el_195, 'href', 'https://policies.google.com/privacy');
    import16.setAttribute(_el_195, 'rel', 'nofollow');
    import16.setAttribute(_el_195, 'target', '_blank');
    addShimC(_el_195);
    final _text_196 = import16.appendText(_el_195, 'https://policies.google.com/privacy');
    final _text_197 = import16.appendText(_el_169, ', Opt-Out: ');
    final _el_198 = import16.appendElement(doc, _el_169, 'a');
    import16.setAttribute(_el_198, 'href', 'https://adssettings.google.com/authenticated');
    import16.setAttribute(_el_198, 'rel', 'nofollow');
    import16.setAttribute(_el_198, 'target', '_blank');
    addShimC(_el_198);
    final _text_199 = import16.appendText(_el_198, 'https://adssettings.google.com/authenticated');
    final _text_200 = import16.appendText(_el_169, ', Privacy Shield: ');
    final _el_201 = import16.appendElement(doc, _el_169, 'a');
    import16.setAttribute(_el_201, 'href', 'https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active');
    import16.setAttribute(_el_201, 'rel', 'nofollow');
    import16.setAttribute(_el_201, 'target', '_blank');
    addShimC(_el_201);
    final _text_202 = import16.appendText(_el_201, 'https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active');
    final _text_203 = import16.appendText(_el_169, '.');
    final _el_204 = import16.appendElement(doc, _el_169, 'br');
    addShimE(_el_204);
    final _el_205 = import16.appendElement(doc, _el_169, 'br');
    addShimE(_el_205);
    final _el_206 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_206);
    final _text_207 = import16.appendText(_el_8, ' ');
    final _el_208 = import16.appendElement(doc, _el_8, 'strong');
    addShimE(_el_208);
    final _text_209 = import16.appendText(_el_208, 'Rechte der betroffenen Person');
    final _el_210 = import16.appendElement(doc, _el_8, 'ol');
    import16.setAttribute(_el_210, 'style', 'margin:10px 0px; padding:15px;');
    addShimC(_el_210);
    final _el_211 = import16.appendElement(doc, _el_210, 'li');
    addShimE(_el_211);
    final _el_212 = import16.appendElement(doc, _el_211, 'strong');
    addShimE(_el_212);
    final _text_213 = import16.appendText(_el_212, 'Widerspruch oder Widerruf gegen die Verarbeitung Ihrer Daten');
    final _el_214 = import16.appendElement(doc, _el_212, 'br');
    addShimE(_el_214);
    final _el_215 = import16.appendElement(doc, _el_212, 'br');
    addShimE(_el_215);
    final _text_216 = import16.appendText(_el_212, ' Soweit die Verarbeitung auf Ihrer Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a), Art. 7 DS-GVO beruht, haben Sie das Recht, die Einwilligung jederzeit zu widerrufen. Die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung wird dadurch nicht berührt.');
    final _el_217 = import16.appendElement(doc, _el_212, 'br');
    addShimE(_el_217);
    final _el_218 = import16.appendElement(doc, _el_212, 'br');
    addShimE(_el_218);
    final _text_219 = import16.appendText(_el_212, ' Soweit wir die Verarbeitung Ihrer personenbezogenen Daten auf die Interessenabwägung gemäß Art. 6 Abs. 1 S. 1 lit. f) DS-GVO stützen, können Sie Widerspruch gegen die Verarbeitung einlegen. Dies ist der Fall, wenn die Verarbeitung insbesondere nicht zur Erfüllung eines Vertrags mit Ihnen erforderlich ist, was von uns jeweils bei der nachfolgenden Beschreibung der Funktionen dargestellt wird. Bei Ausübung eines solchen Widerspruchs bitten wir um Darlegung der Gründe, weshalb wir Ihre personenbezogenen Daten nicht wie von uns durchgeführt verarbeiten sollten. Im Falle Ihres begründeten Widerspruchs prüfen wir die Sachlage und werden entweder die Datenverarbeitung einstellen bzw. anpassen oder Ihnen unsere zwingenden schutzwürdigen Gründe aufzeigen, aufgrund derer wir die Verarbeitung fortführen.');
    final _el_220 = import16.appendElement(doc, _el_212, 'br');
    addShimE(_el_220);
    final _el_221 = import16.appendElement(doc, _el_212, 'br');
    addShimE(_el_221);
    final _text_222 = import16.appendText(_el_212, ' Sie können der Verarbeitung Ihrer personenbezogenen Daten für Zwecke der Werbung und Datenanalyse jederzeit widersprechen. Das Widerspruchsrecht können Sie kostenfrei ausüben. Über Ihren Werbewiderspruch können Sie uns unter folgenden Kontaktdaten informieren:');
    final _el_223 = import16.appendElement(doc, _el_212, 'br');
    addShimE(_el_223);
    final _el_224 = import16.appendElement(doc, _el_212, 'br');
    addShimE(_el_224);
    final _text_225 = import16.appendText(_el_212, 'Andreas Perlitz');
    final _el_226 = import16.appendElement(doc, _el_212, 'br');
    addShimE(_el_226);
    final _text_227 = import16.appendText(_el_212, 'Karlsbader Str. 15');
    final _el_228 = import16.appendElement(doc, _el_212, 'br');
    addShimE(_el_228);
    final _text_229 = import16.appendText(_el_212, '86169 Augsburg Deutschland');
    final _el_230 = import16.appendElement(doc, _el_212, 'br');
    addShimE(_el_230);
    final _text_231 = import16.appendText(_el_212, 'E-Mail-Adresse: andi@zreptil.de');
    final _el_232 = import16.appendElement(doc, _el_212, 'br');
    addShimE(_el_232);
    final _text_233 = import16.appendText(_el_211, ' ');
    final _el_234 = import16.appendElement(doc, _el_211, 'br');
    addShimE(_el_234);
    final _el_235 = import16.appendElement(doc, _el_210, 'li');
    addShimE(_el_235);
    final _el_236 = import16.appendElement(doc, _el_235, 'strong');
    addShimE(_el_236);
    final _text_237 = import16.appendText(_el_236, 'Recht auf Auskunft');
    final _el_238 = import16.appendElement(doc, _el_235, 'br');
    addShimE(_el_238);
    final _text_239 = import16.appendText(_el_235, ' Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene Daten verarbeitet werden. Sofern dies der Fall ist, haben Sie ein Recht auf Auskunft über Ihre bei uns gespeicherten persönlichen Daten nach Art. 15 DS-GVO. Dies beinhaltet insbesondere die Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, die Herkunft ihrer Daten, sofern diese nicht direkt bei Ihnen erhoben wurden.');
    final _el_240 = import16.appendElement(doc, _el_235, 'br');
    addShimE(_el_240);
    final _el_241 = import16.appendElement(doc, _el_235, 'br');
    addShimE(_el_241);
    final _el_242 = import16.appendElement(doc, _el_210, 'li');
    addShimE(_el_242);
    final _el_243 = import16.appendElement(doc, _el_242, 'strong');
    addShimE(_el_243);
    final _text_244 = import16.appendText(_el_243, 'Recht auf Berichtigung');
    final _el_245 = import16.appendElement(doc, _el_242, 'br');
    addShimE(_el_245);
    final _text_246 = import16.appendText(_el_242, ' Sie haben ein Recht auf Berichtigung unrichtiger oder auf Vervollständigung richtiger Daten nach Art. 16 DS-GVO. ');
    final _el_247 = import16.appendElement(doc, _el_242, 'br');
    addShimE(_el_247);
    final _el_248 = import16.appendElement(doc, _el_242, 'br');
    addShimE(_el_248);
    final _el_249 = import16.appendElement(doc, _el_210, 'li');
    addShimE(_el_249);
    final _el_250 = import16.appendElement(doc, _el_249, 'strong');
    addShimE(_el_250);
    final _text_251 = import16.appendText(_el_250, 'Recht auf Löschung');
    final _el_252 = import16.appendElement(doc, _el_249, 'br');
    addShimE(_el_252);
    final _text_253 = import16.appendText(_el_249, ' Sie haben ein Recht auf Löschung Ihrer bei uns gespeicherten Daten nach Art. 17 DS-GVO, es sei denn gesetzliche oder vertraglichen Aufbewahrungsfristen oder andere gesetzliche Pflichten bzw. Rechte zur weiteren Speicherung stehen dieser entgegen. ');
    final _el_254 = import16.appendElement(doc, _el_249, 'br');
    addShimE(_el_254);
    final _el_255 = import16.appendElement(doc, _el_249, 'br');
    addShimE(_el_255);
    final _el_256 = import16.appendElement(doc, _el_210, 'li');
    addShimE(_el_256);
    final _el_257 = import16.appendElement(doc, _el_256, 'strong');
    addShimE(_el_257);
    final _text_258 = import16.appendText(_el_257, 'Recht auf Einschränkung');
    final _el_259 = import16.appendElement(doc, _el_256, 'br');
    addShimE(_el_259);
    final _text_260 = import16.appendText(_el_256, ' Sie haben das Recht, eine Einschränkung bei der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, wenn eine der Voraussetzungen in Art. 18 Abs. 1 lit. a) bis d) DS-GVO erfüllt ist:');
    final _el_261 = import16.appendElement(doc, _el_256, 'br');
    addShimE(_el_261);
    final _text_262 = import16.appendText(_el_256, ' • Wenn Sie die Richtigkeit der Sie betreffenden personenbezogenen für eine Dauer bestreiten, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen;');
    final _el_263 = import16.appendElement(doc, _el_256, 'br');
    addShimE(_el_263);
    final _el_264 = import16.appendElement(doc, _el_256, 'br');
    addShimE(_el_264);
    final _text_265 = import16.appendText(_el_256, ' • die Verarbeitung unrechtmäßig ist und Sie die Löschung der personenbezogenen Daten ablehnen und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangen;');
    final _el_266 = import16.appendElement(doc, _el_256, 'br');
    addShimE(_el_266);
    final _el_267 = import16.appendElement(doc, _el_256, 'br');
    addShimE(_el_267);
    final _text_268 = import16.appendText(_el_256, ' • der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, Sie diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen, oder');
    final _el_269 = import16.appendElement(doc, _el_256, 'br');
    addShimE(_el_269);
    final _el_270 = import16.appendElement(doc, _el_256, 'br');
    addShimE(_el_270);
    final _text_271 = import16.appendText(_el_256, ' • wenn Sie Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DS-GVO eingelegt haben und noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber Ihren Gründen überwiegen.');
    final _el_272 = import16.appendElement(doc, _el_256, 'br');
    addShimE(_el_272);
    final _el_273 = import16.appendElement(doc, _el_256, 'br');
    addShimE(_el_273);
    final _el_274 = import16.appendElement(doc, _el_210, 'li');
    addShimE(_el_274);
    final _el_275 = import16.appendElement(doc, _el_274, 'strong');
    addShimE(_el_275);
    final _text_276 = import16.appendText(_el_275, 'Recht auf Datenübertragbarkeit');
    final _el_277 = import16.appendElement(doc, _el_274, 'br');
    addShimE(_el_277);
    final _text_278 = import16.appendText(_el_274, ' Sie haben ein Recht auf Datenübertragbarkeit nach Art. 20 DS-GVO, was bedeutet, dass Sie die bei uns über Sie gespeicherten personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format erhalten können oder die Übermittlung an einen anderen Verantwortlichen verlangen können. ');
    final _el_279 = import16.appendElement(doc, _el_274, 'br');
    addShimE(_el_279);
    final _el_280 = import16.appendElement(doc, _el_274, 'br');
    addShimE(_el_280);
    final _el_281 = import16.appendElement(doc, _el_210, 'li');
    addShimE(_el_281);
    final _el_282 = import16.appendElement(doc, _el_281, 'strong');
    addShimE(_el_282);
    final _text_283 = import16.appendText(_el_282, 'Recht auf Beschwerde');
    final _el_284 = import16.appendElement(doc, _el_281, 'br');
    addShimE(_el_284);
    final _text_285 = import16.appendText(_el_281, ' Sie haben ein Recht auf Beschwerde bei einer Aufsichtsbehörde. In der Regel können Sie sich hierfür an die Aufsichtsbehörde insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes wenden. ');
    final _el_286 = import16.appendElement(doc, _el_281, 'br');
    addShimE(_el_286);
    final _el_287 = import16.appendElement(doc, _el_281, 'br');
    addShimE(_el_287);
    final _el_288 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_288);
    final _text_289 = import16.appendText(_el_8, ' ');
    final _el_290 = import16.appendElement(doc, _el_8, 'strong');
    addShimE(_el_290);
    final _text_291 = import16.appendText(_el_290, 'Datensicherheit');
    final _el_292 = import16.appendElement(doc, _el_8, 'p');
    addShimE(_el_292);
    final _text_293 = import16.appendText(_el_292, 'Um alle personenbezogen Daten, die an uns übermittelt werden, zu schützen und um sicherzustellen, dass die Datenschutzvorschriften von uns, aber auch unseren externen Dienstleistern eingehalten werden, haben wir geeignete technische und organisatorische Sicherheitsmaßnahmen getroffen. Deshalb werden unter anderem alle Daten zwischen Ihrem Browser und unserem Server über eine sichere SSL-Verbindung verschlüsselt übertragen.');
    final _el_294 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_294);
    final _text_295 = import16.appendText(_el_8, ' ');
    final _el_296 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_296);
    final _text_297 = import16.appendText(_el_8, ' ');
    final _el_298 = import16.appendElement(doc, _el_8, 'strong');
    addShimE(_el_298);
    final _text_299 = import16.appendText(_el_298, 'Stand: 16.10.2018');
    final _text_300 = import16.appendText(_el_8, ' ');
    final _el_301 = import16.appendElement(doc, _el_8, 'br');
    addShimE(_el_301);
    final _el_302 = import16.appendDiv(doc, _el_8);
    this.updateChildClass(_el_302, 'source');
    addShimC(_el_302);
    final _el_303 = import16.appendElement(doc, _el_302, 'i');
    addShimE(_el_303);
    final _text_304 = import16.appendText(_el_303, 'Quelle:');
    final _text_305 = import16.appendText(_el_302, ' ');
    final _el_306 = import16.appendElement(doc, _el_302, 'a');
    import16.setAttribute(_el_306, 'href', 'https://www.muster-vorlagen.net/datenschutzerklaerungs-generator/');
    import16.setAttribute(_el_306, 'target', '_blank');
    addShimC(_el_306);
    final _text_307 = import16.appendText(_el_306, 'Datenschutzerklärungs-Generator Muster-Vorlagen.net');
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
      (_componentStyles = (styles = (_componentStyles = import10.ComponentStyles.scoped(styles$DSGVOComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.DSGVOComponent> _DSGVOComponentNgFactory = const ComponentFactory('dsgvo', viewFactory_DSGVOComponentHost0);
ComponentFactory<import2.DSGVOComponent> get DSGVOComponentNgFactory {
  return _DSGVOComponentNgFactory;
}

final List<dynamic> styles$DSGVOComponentHost = const [];

class _ViewDSGVOComponentHost0 extends AppView<import2.DSGVOComponent> {
  ViewDSGVOComponent0 _compView_0;
  import2.DSGVOComponent _DSGVOComponent_0_5;
  _ViewDSGVOComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.DSGVOComponent> build() {
    _compView_0 = ViewDSGVOComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DSGVOComponent_0_5 = import2.DSGVOComponent();
    _compView_0.create(_DSGVOComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _DSGVOComponent_0_5);
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

AppView<import2.DSGVOComponent> viewFactory_DSGVOComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDSGVOComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DSGVOComponent, DSGVOComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
