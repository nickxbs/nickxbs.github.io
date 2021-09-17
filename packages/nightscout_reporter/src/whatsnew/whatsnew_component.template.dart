// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'whatsnew_component.dart';
export 'whatsnew_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:nightscout_reporter/src/globals.template.dart' as _ref2;
import 'package:nightscout_reporter/src/whatsnew/whatsnew_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'whatsnew_component.dart' as import2;
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
import 'package:angular/src/core/linker/app_view_utils.dart' as import22;
import 'package:angular_components/button_decorator/button_decorator.dart' as import23;
import 'package:angular_components/interfaces/has_disabled.dart' as import24;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import25;
import 'package:angular_components/model/math/box.dart' as import26;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import27;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import28;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import29;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import31;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import32;
import 'package:quiver/src/time/clock.dart' as import33;
import 'package:angular_components/utils/browser/window/module.dart' as import34;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import35;
import 'package:angular_components/utils/disposer/disposer.dart' as import36;
import 'package:angular/src/core/zone/ng_zone.dart' as import37;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import38;
import 'package:angular/src/core/linker/component_loader.dart' as import39;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import40;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import41;
import 'package:angular_components/laminate/overlay/module.dart' as import42;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import43;
import 'package:angular_components/laminate/enums/alignment.dart' as import44;

final List<dynamic> styles$WhatsnewComponent = [import0.styles];

class ViewWhatsnewComponent0 extends AppView<import2.WhatsnewComponent> {
  static final String _message_0 = import3.Intl.message('Was bisher geschah...', desc: 'title of whatsnew');
  static final String _message_1 = import3.Intl.message('Version', desc: 'version');
  static final String _message_2 = import3.Intl.message('2.0.7 - 17.04.2021', desc: 'v207');
  static final String _message_3 = import3.Intl.message('Bei der Festlegung des Zeitraums kann man jetzt angeben, bis zu welchem Tag der Zeitraum ermittelt werden soll. Voreingestellt ist so wie bisher auch der aktuelle Tag. Man kann aber auch den gestrigen Tag einstellen, um Tage mit vollständigen Daten zu haben, oder das letzte Wochenende, wenn man an vollständigen Wochen interessiert ist.', desc: 'v207a1');
  static final String _message_4 = import3.Intl.message('Dialoge und die Anzeige des Fortschritts werden nun technisch etwas anders umgesetzt. Deswegen wird der Anwendungshintergrund nun in den Fällen dunkler dargestellt und es ist nicht möglich darauf etwas anzuklicken.', desc: 'v207c1');
  static final String _message_5 = import3.Intl.message('Ein Fehler wurde behoben, der dazu führte, dass Dialoge mit Escape geschlossen werden konnten, was die Anwendung in einem unbrauchbaren Zustand zurückliess.', desc: 'v207f1');
  static final String _message_6 = import3.Intl.message('Ein Fehler wurde behoben, der bei der Auswahl des Zeitraums die Benutzung verhinderte, wenn man ein leeres Eingabefeld fokussierte.', desc: 'v207f2');
  static final String _message_7 = import3.Intl.message('Ein Fehler wurde behoben, der dafür sorgte, dass die Anwendung in einem undefinierten Zustand war, wenn man den letzten Benutzer gelöscht hat.', desc: 'v207f3');
  static final String _message_8 = import3.Intl.message('Die falsche Bezeichnung für durchschnittliche Kohlenhydrate pro Tag in der Tagesstatistik wurde durch die korrekte Bezeichnung für durchschnittliche Kohlenhydrate pro Mahlzeit ersetzt.', desc: 'v207f4');
  static final String _message_9 = import3.Intl.message('Die Ausgabe des Zielwertes und der blutigen Werte in der Tagesgrafik wurde korrigiert. Da gab es Probleme, wenn man eine andere Blutzucker Einheit als die auf dem Server eingestellte zur Ausgabe verwendet hat.', desc: 'v207f5');
  static final String _message_10 = import3.Intl.message('2.0.6 - 17.03.2021', desc: 'v206');
  static final String _message_12 = import3.Intl.message('Das Logo von Nightscout Reporter wurde geändert. Es ist nach wie vor die bekannte und beliebte Eule, aber sie hat nun eine Mütze auf wie die Zeitungsausträger und teilweise auch Journalisten in uralten Filmen. Das Logo ist nur im Programm vorhanden und erscheint nicht auf den PDFs. Dort ist nach wie vor das normale Nightscout Logo, weil es dort platziert wurde, um auf Nightscout selbst hinzuweisen.', desc: 'v206c1');
  static final String _message_13 = import3.Intl.message('Ein Fehler bei der Ausgabe der temporären Ziele in der Tagesgrafik wurde behoben.', desc: 'v206f1');
  static final String _message_14 = import3.Intl.message('2.0.5 - 07.03.2021', desc: 'v205');
  static final String _message_15 = import3.Intl.message('In der Tagesstatistik können nun Spalten für TDD und Kohlenhydrate angezeigt werden.', desc: 'v205a1');
  static final String _message_16 = import3.Intl.message('Die URLs der Benutzer werden nun nach dem Enddatum sortiert.', desc: 'v205c1');
  static final String _message_17 = import3.Intl.message('Der Titel vom Glucose Percentil Diagramm wird nun auch bei Ausdruck im Hochformat nicht mehr falsch in den Optionen Formularauswahl dargestellt.', desc: 'v205f1');
  static final String _message_18 = import3.Intl.message('2.0.4 - 18.02.2021', desc: 'v204');
  static final String _message_19 = import3.Intl.message('Es gibt eine neue Option in der Tagesgrafik mit der man den Zielwert ein- und ausblenden kann.', desc: 'v204a1');
  static final String _message_20 = import3.Intl.message('Ein Fehler wurde behoben, der dazu führte, dass bei fehlenden Daten wie z.B. Treatments gar kein PDF mehr erstellt werden konnte.', desc: 'v204f1');
  static final String _message_21 = import3.Intl.message('2.0.3 - 18.10.2020', desc: 'v203');
  static final String _message_22 = import3.Intl.message('In den Ausgabeparametern gibt es eine Checkbox, mit der man dafür sorgen kann, dass alle Optionen, die auf einen Loop hinweisen würden, für diese Ausgabe deaktiviert werden. Das sind die Optionen, die mit einem Kreis (=Loop) markiert sind.', desc: 'v203a1');
  static final String _message_23 = import3.Intl.message('Beim erstmaligen Start von Nightscout Reporter wurde er schon bei Sprachänderung normal angezeigt. Jetzt bleibt er wie vorgesehen auf dem Willkommen Dialog.', desc: 'v203f1');
  static final String _message_24 = import3.Intl.message('Die Anzeige der Bilder auf Kacheln wird nun wie vorgesehen korrekt in den Einstellungen vorbelegt.', desc: 'v203f2');
  static final String _message_25 = import3.Intl.message('2.0.2 - 22.9.2020', desc: 'v202');
  static final String _message_26 = import3.Intl.message('Es gibt jetzt kleine Hilfebuttons bei den Formularen. In der Listenansicht ersetzen sie die Icons zum Ziehen der Formulare, in der Kachelansicht werden sie links oben auf den Kacheln dargestellt. Die jeweilige Ansicht kann man im Hamburgermenü auswählen. Beim Anklicken eines solchen Buttons wird ein Text angezeigt, der beschreibt, was das entsprechende Formular darstellt.', desc: 'v202a1');
  static final String _message_27 = import3.Intl.message('Bei den Ausgabeparametern kann jetzt festgelegt werden, in welcher Einheit die Glukosemessungen ausgegeben werden sollen. Diese wird zu Beginn aus den in Nightscout gespeicherten Daten ermittelt und entsprechend vorbelegt. Es ist aber auch möglich, diese Einheit zu ändern oder beide Einheiten ausgeben zu lassen. Wenn beide ausgegeben werden, dann wird jedes Formular auf dem Glukoseangaben vorhanden sind zunächst mit mg/dL und danach nochmal mit mmol/l ausgegeben. Diese Einheit wird auch in den Shortcuts gespeichert.', desc: 'v202a2');
  static final String _message_28 = import3.Intl.message('Die Profilbasalrate im Formular Tagesprofil wird jetzt ebenfalls mit Balken dargestellt.', desc: 'v202c1');
  static final String _message_29 = import3.Intl.message('iOS Loop missbraucht die Profiltabelle dazu, seine eigenen Settings zu speichern, was bei Benutzern dieser Software dazu führte, dass die Tabelle Profil nicht korrekt geladen werden kann. Deshalb gibt es jetzt in den Einstellungen die Möglichkeit, die Anzahl der Datensätze, die aus der Profiltabelle geladen werden einzuschränken.', desc: 'v202c2');
  static final String _message_30 = import3.Intl.message('2.0.1 - 8.9.2020', desc: 'v201');
  static final String _message_31 = import3.Intl.message('Im Protokoll werden nun auch temporäre Overrides ausgegeben, die von iOSLoop in die Behandlungsdaten eingetragen werden.', desc: 'v201a1');
  static final String _message_32 = import3.Intl.message('Im Tagesprofil kann nun angegeben werden, ob nur der Wert, die prozentuale Anpassung des Profils oder beides angezeigt werden soll. Ausserdem kann eine Linie eingefügt werden, die den im Basalprofil zum jeweiligen Zeitpunkt eingestellten Wert darstellt.', desc: 'v201a2');
  static final String _message_33 = import3.Intl.message('In der Tagesgrafik werden Profilwechsel nicht mehr angezeigt, wenn sich das Profil beim Wechsel nicht geändert hat. iOSLoop fügt in die Nightscoutdatensätze sehr häufig neue Profile ein, die keine Änderung beinhalten, weil dort zusätzlich andere Konfigurationseinstellungen gespeichert werden.', desc: 'v201c1');
  static final String _message_34 = import3.Intl.message('Ein Fehler beim Laden der ausgewählten Formulare wurde korrigiert.', desc: 'v201f1');
  static final String _message_35 = import3.Intl.message('Wenn die Synchronisierung mit Google Drive aufgehoben wird, wird die Berechtigung nun korrekt zurückgesetzt. Wenn man sich danach wieder synchronisieren will, werden nochmal die Berechtigungen abgefragt.', desc: 'v201f2');
  static final String _message_36 = import3.Intl.message('Ein Fehler wurde behoben, der dafür sorgte, dass temporäre Ziele in der Tagesgrafik mit zeitlicher Verschiebung angezeigt wurden.', desc: 'v201f3');
  static final String _message_37 = import3.Intl.message('2.0.0 - 15.7.2020', desc: 'v200');
  static final String _message_38 = import3.Intl.message('Auf der Seite Protokoll werden jetzt auch Insulinabgaben angezeigt, die z.B. über xdrip eingegeben wurden.', desc: 'v200a1');
  static final String _message_39 = import3.Intl.message('Es gibt jetzt Shortcuts, mit denen man die aktuelle Auswahl der Formulare, deren Parameter und den ausgewählten Zeitraum speichern kann. Beim Aktivieren eines Shortcuts wird das alles wieder so eingestellt, wie es war, als der Shortcut gespeichert wurde.', desc: 'v200a2');
  static final String _message_40 = import3.Intl.message('Bei Herokuapp und anderen Anbietern kostenloser Datenbankinstanzen ist der Speicherplatz der Instanz beschränkt, weshalb sie irgendwann voll ist. Dann kann man zwar eine neue Instanz anlegen, Nightscout Reporter benötigt aber für eine lückenlose Darstellung aller Tage Zugriff auf alle Instanzen, für die man eine Auswertung erhalten will. Deshalb können nun mehrere URLs für die Nightscout Instanzen eingegeben werden. Zusätzlich muss noch eingegeben werden, welches der erste und der letzte Tag mit Daten ist. Mit diesen Informationen ist es Nightscout Reporter dann möglich die benötigten Daten lückenlos auch über mehrere Instanzen hinweg auszuwerten.', desc: 'v200a3');
  static final String _message_41 = import3.Intl.message('Wenn im CGP ein Wert den Maximalwert der Skala überschreitet, wird die entsprechende Ecke mit einem gelben Kreis markiert.', desc: 'v200a4');
  static final String _message_42 = import3.Intl.message('Auf dem Einstellungen-Dialog gibt es neben den URL-Eingabefeldern jeweils einen Button, um die URL in einem neuen Browser-Fenster zu öffnen.', desc: 'v200a5');
  static final String _message_43 = import3.Intl.message('Die Eingabe des Zugriffsschlüssels auf dem Einstellungen-Dialog kann jetzt mit einem Button neben dem Eingabefeld lesbar gemacht werden.', desc: 'v200a6');
  static final String _message_44 = import3.Intl.message('Im Einstellungen Dialog gibt es jetzt die Möglichkeit, die Einstellungen zu exportieren und zu importieren. Beim Export wird eine Datei mit den allgemeinen Einstellungen geschrieben, beim Import wird so eine Datei wieder eingelesen. Damit kann man auch ohne Google Drive Zugriff die Einstellungen über verschiedene Browser hinweg manuell synchronisieren.', desc: 'v200a7');
  static final String _message_45 = import3.Intl.message('Im Protokoll gibt es jetzt die Möglichkeit, sich doppelte Datensätze markieren zu lassen. Sie werden von Nightscout Reporter zwar rausgefiltert, aber er kann anzeigen, wie oft ein bestimmter Datensatz in den Daten gefunden wurde. Man kann dort auch angeben, dass er nur mehrfach vorhandene Datensätze ausgeben soll. So kann man mögliche Diskrepanzen zwischen Nightscout Reporter und anderen Reporting Tools herausfinden.', desc: 'v200a8');
  static final String _message_46 = import3.Intl.message('Das CGP wird jetzt auch bei extremen Werten korrekt erzeugt.', desc: 'v200f1');
  static final String _message_47 = import3.Intl.message('Im CGP wurden die Skalenbeschriftungen korrigiert.', desc: 'v200f2');
  static final String _message_48 = import3.Intl.message('1.4.9 - 16.6.2020', desc: 'v149');
  static final String _message_49 = import3.Intl.message('Im Dialog der Ausgabe Parameter gibt es nun die Möglichkeit, das CGP immer mit dem Standard Zielbereich zu erzeugen. Diese Option ist anfangs eingeschaltet, da das CGP ein standardisiertes Formular ist, das gerne zu Vergleichszwecken herangezogen wird. Man kann es aber für seine eigenen Zwecke ausschalten. Diese Einstellung wird dann auch beibehalten.', desc: 'v149a1');
  static final String _message_50 = import3.Intl.message('Bei der Profilermittlung wurde manchmal der letzte Profilwechsel ignoriert. Das ist nun behoben.', desc: 'v149f1');
  static final String _message_51 = import3.Intl.message('1.4.8 - 12.6.2020', desc: 'v148');
  static final String _message_52 = import3.Intl.message('Im Dialog der Ausgabe Parameter wurde rechts oben der Schieberegler "zu Vergleichszwecken" hinzugefügt. Wenn dieser aktiviert ist, dann wird überall der Standard Zielbereich verwendet. Intern wird das auch noch für andere Anpassungen verwendet. Diese Option ist dafür gedacht, dass man seine Ausdrucke mit anderen Diabetikern vergleichen kann. Das ist zum Beispiel zur Vorlage bei Ärzten und Diabetesberatern sinnvoll.', desc: 'v148a1');
  static final String _message_53 = import3.Intl.message('1.4.7 - 5.6.2020', desc: 'v147');
  static final String _message_54 = import3.Intl.message('In den Ausgabe Parametern kann nun angegeben werden, ob immer der neueste Tag zuerst angezeigt wird. Das hat Auswirkungen auf die Tagesgrafik, die Tagesstatistik und die Wochengrafik. In den Formularoptionen wurde die entsprechende Option entfernt.', desc: 'v147c1');
  static final String _message_55 = import3.Intl.message('Die Einstellung für das Öffnen des PDF im gleichen Fenster, das Herunterladen des PDFs und den Hinweis auf Nightscout im PDF wurde aus den Einstellungen in die Ausgabe Parameter verschoben. Dadurch kann man das bei jedem Ausdruck schnell festlegen und ändern.', desc: 'v147c2');
  static final String _message_56 = import3.Intl.message('Die Überschrift über der Tabelle vom Glucose Perzentil Diagramm wurde korrigiert.', desc: 'v147f1');
  static final String _message_57 = import3.Intl.message('1.4.6 - 26.5.2020', desc: 'v146');
  static final String _message_58 = import3.Intl.message('Die Legende der Tagesgrafik wurde um den Eintrag für blutige Messungen erweitert.', desc: 'v146a1');
  static final String _message_59 = import3.Intl.message('Die Microboli vom Minimed 600 Uploader wurden aus der Ausgabe entfernt, da es sich dabei nur um Temporäre Basalraten handelt.', desc: 'v146f1');
  static final String _message_60 = import3.Intl.message('Ein möglicher Absturz bei der Ausgabe des CGP bei der Tagesgrafik wurde korrigiert.', desc: 'v146f2');
  static final String _message_61 = import3.Intl.message('1.4.5 - 20.4.2020', desc: 'v145');
  static final String _message_62 = import3.Intl.message('In dem Dialog mit den Ausgabe Parametern wurde die Option hinzugefügt, die Genauigkeit der Ausgabe von Basalangaben festzulegen. Diese wird normalerweise aus den Angaben zur Basalrate in den Profilen ermittelt. Das wird auch weiterhin getan, wenn der erste Eintrag in der Liste ausgewählt wird. Ansonsten werden alle Basalangaben mit der Genauigkeit ausgegeben, die bei dieser Option ausgewählt wurde.', desc: 'v145a1');
  static final String _message_63 = import3.Intl.message('Die Genauigkeit der ISF Angaben im Profil wurde korrigiert.', desc: 'v145f1');
  static final String _message_64 = import3.Intl.message('Im Protokoll werden die Angaben, die ein temporäres Ziel von 0 IE für 0 Minuten setzen als "Aufhebung von temp. Ziel" ausgegeben.', desc: 'v145f2');
  static final String _message_65 = import3.Intl.message('Im CGP wurden verschiedene Berechnungen korrigiert, die sich vor allem in Differenzen bei ToR und Mittelwerten zeigten.', desc: 'v145f3');
  static final String _message_66 = import3.Intl.message('1.4.4 - 6.4.2020', desc: 'v144');
  static final String _message_67 = import3.Intl.message('Die Legende der Tagesgrafik wurde um den Eintrag für Bewegung erweitert.', desc: 'v144a1');
  static final String _message_68 = import3.Intl.message('In der Tagesgrafik wurde "Training" in "Bewegung" umbenannt. Das passt besser zu den Einträgen in AAPS.', desc: 'v144c1');
  static final String _message_69 = import3.Intl.message('Die Farbe für Bewegung in der Tagesgrafik wurde geändert.', desc: 'v144c2');
  static final String _message_70 = import3.Intl.message('1.4.3 - 26.3.2020', desc: 'v143');
  static final String _message_71 = import3.Intl.message('Die Analysewerte wurden nicht ganz korrekt ermittelt. Das wurde korrigiert und nun sollten die statistischen Daten über den Zeitraum richtig ausgewertet werden.', desc: 'v143f1');
  static final String _message_72 = import3.Intl.message('1.4.2 - 16.3.2020', desc: 'v142');
  static final String _message_73 = import3.Intl.message('Beim Laden der Behandlungsdaten werden doppelte Datensätze herausgefiltert.', desc: 'v142c1');
  static final String _message_74 = import3.Intl.message('Die berechneten IE für Kohlenhydrate in der Tagesgrafik wurden teilweise mit falschen Faktoren ermittelt. Der Fehler wurde behoben.', desc: 'v142f1');
  static final String _message_75 = import3.Intl.message('1.4.1 - 13.3.2020', desc: 'v141');
  static final String _message_76 = import3.Intl.message('Beim Perzentil Diagramm gibt es eine neue Option, mit der man die Basalrate unter dem Diagramm anzeigen lassen kann. Da das Diagramm normalerweise einen grösseren Zeitraum umspannt, wird dort die Basalrate angezeigt, die zu Beginn des Zeitraums aktiv war.', desc: 'v141a1');
  static final String _message_77 = import3.Intl.message('Fehler behoben, der bei der Kachelansicht teilweise verhindert hat, dass die Parameter für die Kacheln aufgerufen werden konnten.', desc: 'v141f1');
  static final String _message_78 = import3.Intl.message('1.4 - 28.2.2020', desc: 'v14');
  static final String _message_79 = import3.Intl.message('Es gibt ein neues PDF namens Tagestrend. Dieses zeigt die Werte eines Tages zusammen mit dem Trend zu jeder vollen Stunde, sowie der eingestellten Basalrate aus dem Profil. Das ist eine gute Übersicht für Basalratentests, um zu erkennen, wo etwas anzupassen ist.', desc: 'v14a1');
  static final String _message_80 = import3.Intl.message('In der Tagesgrafik gibt es eine neue Option, um die Rundung der Insulinwerte auf die maximale Genauigkeit im Profil zu unterbinden. Das macht da Sinn, wo entweder kein Profil vorhanden ist, oder wo Werte mit höherer Genauigkeit als im Profil eingegeben werden.', desc: 'v14a2');
  static final String _message_81 = import3.Intl.message('In der Tagesgrafik kann man nun die IOB (Insulin On Board) und COB (Carbs On Board) anzeigen lassen. Die IOB werden am oberen Rand angezeigt, wo auch die Bolusabgaben dargestellt werden, die COB am unteren Rand, wo auch die Kohlenhydrate dargestellt werden.', desc: 'v14a3');
  static final String _message_82 = import3.Intl.message('Nightscout Reporter kann nun auch auf Portugiesisch verwendet werden.', desc: 'v14a4');
  static final String _message_83 = import3.Intl.message('Es gibt ein neues PDF namens Tagesstunden. Dieses zeigt die Durchschnittswerte eines Tages in jedem Stundenintervall an und färbt die Zellen entsprechend des Glukosewertes ein. So hat man eine gut Übersicht über die Werteverteilung im ausgewählten Zeitraum.', desc: 'v14a5');
  static final String _message_84 = import3.Intl.message('Beim Glukose Perzentil Diagramm kann man nun ein Maximum für die Skalierung festlegen. Wenn es auf "Automatisch" gesetzt wird, wird das Maximum wie bisher auch ermittelt. Bei einem anderen Wert wird die Obergrenze für das Diagramm auf diesen Wert festgesetzt. Damit ist es leichter möglich zwei Diagramme miteinander zu vergleichen, deren Obergrenze unterschiedlich ist.', desc: 'v14a6');
  static final String _message_85 = import3.Intl.message('Vor der Erzeugung eines PDFs wird noch ein Dialog angezeigt, auf dem man Parameter für alle erzeugten PDFs eingeben kann. Man kann dort den Zielbereich auf den Standardbereich festlegen, den Ärzte gerne sehen. Das hat Auswirkungen auf alle Darstellungen des Zielbereichs, sowie auf die Verteilung der Werte innerhalb und ausserhalb des Zielbereichs. Man kann dort auch den Maximalwert für Glukose in Grafiken festlegen. Dieser Wert wird in der Tagesgrafik, dem Perzentil Diagramm und der Wochengrafik verwendet. Wenn er auf "Automatisch" gesetzt wird, wird der Maximalwert wie bisher auch aus den vorhandenen Daten ermittelt. Ausserdem kann man hier angeben, ob man den aktuellen Zeitraum erzeugen möchte oder einen Vergleichszeitraum. Das ist nützlich, um dem Arzt die Gegenüberstellung von Werten der Vergangenheit und jetzt zu zeigen.', desc: 'v14a7');
  static final String _message_86 = import3.Intl.message('Die Buttons für die Erzeugung vergangener Zeiträume wurden entfernt. Das kann jetzt im neuen PDF-Dialog eingestellt werden.', desc: 'v14r1');
  static final String _message_87 = import3.Intl.message('Wenn auf der Profilseite leere Spalten vorkommen, führt das nicht mehr zu einer leeren Seite.', desc: 'v14f1');
  static final String _message_88 = import3.Intl.message('Die Werte VarK und ToR im CGP werden bei Tages- und Wochengrafiken in der Legende und in der Grafik korrekt ausgegeben.', desc: 'v14f2');
  static final String _message_89 = import3.Intl.message('1.3.8 - 9.1.2020', desc: 'v138');
  static final String _message_90 = import3.Intl.message('Die Bilder auf den Kacheln sind nun in der jeweiligen Sprache beschriftet.', desc: 'v138a1');
  static final String _message_91 = import3.Intl.message('Die Werte im CGP werden jetzt bei mmol-Angaben auch korrekt angezeigt.', desc: 'v138f1');
  static final String _message_92 = import3.Intl.message('Die glykämische Variabilität wird jetzt im CGP auch bei Tages- und Wochengrafiken korrekt ausgegeben.', desc: 'v138f2');
  static final String _message_93 = import3.Intl.message('Blutige Werte sollten jetzt auch bei mmol-Daten korrekt in der Tagesgrafik angezeigt werden.', desc: 'v138f3');
  static final String _message_94 = import3.Intl.message('1.3.7 - 7.1.2020', desc: 'v137');
  static final String _message_95 = import3.Intl.message('Auf der Seite "Stündliche Statistik" gibt es eine neue Option, um auch Spalten mit 10% und 90% anzeigen zu lassen.', desc: 'v137a1');
  static final String _message_96 = import3.Intl.message('Auf der Seite "Profil" wird die Gültigkeit jetzt mit Uhrzeit angezeigt.', desc: 'v137c1');
  static final String _message_97 = import3.Intl.message('Die Einträge im Protokoll für temporäre Ziele werden jetzt auch bei mmol-Angaben richtig angezeigt.', desc: 'v137f1');
  static final String _message_98 = import3.Intl.message('Die Überschrift über der mittleren Spalte im Tagesprofil wurde korrigiert.', desc: 'v137f2');
  static final String _message_99 = import3.Intl.message('Die Balken in der Analyse werden jetzt korrekt skaliert.', desc: 'v137f3');
  static final String _message_100 = import3.Intl.message('Die meisten Spalten auf der Seite "Stündliche Statistik" werden bei nicht vorhandenen Daten leer gelassen.', desc: 'v137f4');
  static final String _message_101 = import3.Intl.message('1.3.6 - 18.12.2019', desc: 'v136');
  static final String _message_102 = import3.Intl.message('In der Tagesgrafik gibt es die Option, HTML-Notizen zu unterdrücken. Manche Uploader schreiben in die Notizen komplette HTML-Seiten rein, was im PDF extrem schlecht darstellbar ist. Deswegen kann man diese mit Setzen der Option ausblenden.', desc: 'v136a1');
  static final String _message_103 = import3.Intl.message('Die Glucose Perzentil Grafik wurde um die Tabelle "Stündliche Statistik" erweitert. Diese listet tabellarisch die Werte des Zeitraums für jede Stunde des Tages auf. Man kann entweder nur die Grafik, nur die Tabelle oder beides zusammen erzeugen lassen.', desc: 'v136a2');
  static final String _message_104 = import3.Intl.message('In der Sprachauswahl ist jetzt auch Slowakisch verfügbar.', desc: 'v136a3');
  static final String _message_105 = import3.Intl.message('Es gibt eine neue PDF-Seite für die Tagesprofile. Darauf ist eine Tabelle zu sehen, die die tatsächliche Basalrate für den Tag zeigt, inklusive aller temporären Anpassungen. Ich brauchte das für Debugzwecke, aber vielleicht findet das der eine oder andere Benutzer auch interessant. Das Profil, das dort angezeigt wird entspricht dem Tagesprofil auf der Seite Tagesgrafik. Beim Loopen können das sehr viele Seiten werden, da dort normalerweise alle paar Minuten Anpassungen an der Basalrate vorgenommen werden. Deswegen wird die Tabelle auch abhängig von der Datenmenge in maximal drei Spalten dargestellt, um die Anzahl an Seiten zu reduzieren.', desc: 'v136a4');
  static final String _message_106 = import3.Intl.message('In der Tagesgrafik werden nun auch verzögerte Boli angezeigt.', desc: 'v136a5');
  static final String _message_107 = import3.Intl.message('In der Tagesgrafik kann nun angezeigt werden, wie lange die Basalrate auf 0% lief.', desc: 'v136a6');
  static final String _message_108 = import3.Intl.message('Die Oberfläche kann jetzt verschiedene Darstellungen annehmen. Diese zeigen sich zur Zeit durch geänderte Farben und ein angepasstes Icon im Browsertab und beim Laden der Seite. Das hat keine Auswirkungen auf die erzeugten PDF-Dateien. Es ist die Vorbereitung für eine teilweise anpassbare Oberfläche. Das Thema der Darstellung wird standardmässig vom System festgelegt, was zur Zeit heisst, dass im Dezember ein weihnachtliches Thema angezeigt wird. Das kann aber durch Anklicken des Icons, das ab jetzt links unten zu sehen ist, geändert werden. Beim Anklicken wird rechts neben dem Icon ein Bereich mit den verfügbaren Darstellungen eingeblendet. Das erste Icon (der kleine Zauberer) bedeutet dabei, dass die Darstellung vom System ermittelt wird. Zur Zeit bedeutet das die weihnachtliche Darstellung im Dezember. Es kann in Zukunft aber auch weitere Kriterien geben, anhand derer das Thema angepasst wird. Die direkte Festlegung eines Themas mit einem der anderen icons hat aber immer Vorrang vor der systemeigenen Logik.', desc: 'v136a7');
  static final String _message_109 = import3.Intl.message('Bei der Basalrate und dem Profil gibt es nun eine Option jeweils nur das letzte im entsprechenden Zeitraum ausgeben zu lassen. Das verringert die Blätterflut bei häufigem Profilwechsel.', desc: 'v136a8');
  static final String _message_110 = import3.Intl.message('Bei der Auswertung kann nun ein Bereich angezeigt werden, in dem die Anzahl an Unterzuckerungen während des ausgewählten Zeitraums und der Zeitpunkt der letzten Unterzuckerung angezeigt werden.', desc: 'v136a9');
  static final String _message_111 = import3.Intl.message('Im Einstellungsdialog wurden die Zeilen mit den Benutzerangaben und der URL gegeneinander ausgetauscht, um eine sinnvollere Verwaltung zu ermöglichen.', desc: 'v136c1');
  static final String _message_112 = import3.Intl.message('Die Seitenzahlen auf den Kacheln wurden weiter an den unteren Rand verschoben, damit sie immer gut lesbar sind.', desc: 'v136c2');
  static final String _message_113 = import3.Intl.message('Die Profile für den Zeitraum wurden teilweise nicht korrekt identifiziert. Das sollte behoben sein.', desc: 'v136f1');
  static final String _message_114 = import3.Intl.message('Die Ermittlung der effektiven täglichen Basalrate wurde umstrukturiert und sollte nun genauere Werte ergeben.', desc: 'v136f2');
  static final String _message_115 = import3.Intl.message('Der Fehler mit der Vervielfachung der Kohlenhydrate bei wiederholter Ausgabe der PDFs wurde korrigiert.', desc: 'v136f3');
  static final String _message_116 = import3.Intl.message('Das Problem, dass bestimmte Tage nicht erzeugt werden konnten, wurde behoben.', desc: 'v136f4');
  static final String _message_117 = import3.Intl.message('1.3.5 - 23.09.2019', desc: 'v135');
  static final String _message_118 = import3.Intl.message('Ein Fehler in der Zahlenformatierung wurde behoben.', desc: 'v135f1');
  static final String _message_119 = import3.Intl.message('Die temporäre Basalrate am Anfang des Tages wurde bisher falsch gesetzt, wenn sie im vorherigen Tag gesetzt wurde. Das wurde behoben.', desc: 'v135f2');
  static final String _message_120 = import3.Intl.message('1.3.4 - 17.09.2019', desc: 'v134');
  static final String _message_121 = import3.Intl.message('Im Protokoll können jetzt auch Batteriewechsel der Pumpe angezeigt werden.', desc: 'v134a1');
  static final String _message_122 = import3.Intl.message('Die einzelne Seite CGP kann jetzt auch im Querformat ausgegeben werden.', desc: 'v134a2');
  static final String _message_123 = import3.Intl.message('Die Aufsummierung der Werte in der Analyse wurde korrigiert.', desc: 'v134f1');
  static final String _message_124 = import3.Intl.message('1.3.3 - 12.09.2019', desc: 'v133');
  static final String _message_125 = import3.Intl.message('In der Kachelansicht können die Parameter aller ausgewählten Seiten zusammen in einer Liste eingestellt werden. Dazu gibt es im Titelbereich der Parameterliste neben dem Schliessen-Button einen zusätzlichen Button, mit dem man zwischen den beiden Möglichkeiten umschalten kann.', desc: 'v133a1');
  static final String _message_126 = import3.Intl.message('Die Einstellungen für das Herunterladen des PDFs, das Öffnen im gleichen Fenster und die Maximalgrösse der PDFs wurden von der Synchronisierung mit Google Drive ausgenommen, weil sie speziell für den verwendeten Browser oder das verwendete Gerät benötigt werden. Sie werden nach wie vor gespeichert, aber sie werden nicht zwischen verschiedenen Browsern synchronisiert.', desc: 'v133c1');
  static final String _message_127 = import3.Intl.message('Die Vorschaubilder auf den Kacheln passen sich abhängig von den ausgewählten Optionen teilweise an (z.B. die Auswahl von CGP bei Tagesgrafiken).', desc: 'v133c1');
  static final String _message_128 = import3.Intl.message('1.3.2 - 05.09.2019', desc: 'v132');
  static final String _message_129 = import3.Intl.message('Beim CGP werden die aktuellen Werte jetzt in der Legende angezeigt.', desc: 'v132a1');
  static final String _message_130 = import3.Intl.message('Es ist jetzt möglich, die Einstellungen auf Google Drive zu speichern. Das hat den Vorteil, dass man die Einstellungen nicht nur im aktuellen Browser hat, sondern bei jedem Browser, mit dem man sich bei Google anmeldet. Die Einstellungen werden nach wie vor im Browser gespeichert. Bei einer Verbindung zu Google Drive werden sie aber zusätzlich auf Google Drive gespeichert. Beim Laden der Seite wird überprüft, ob eine Synchronisierung gewünscht ist. Wenn das der Fall ist, dann werden die Daten von Google Drive heruntergeladen. Wenn die Daten darin neuer sind als die Daten im Browser, werden sie verwendet. Nach dem Speichern der Daten werden bei aktivierter Synchronisierung diese Daten mit dem aktuellen Zeitstempel auf Google Drive gespeichert. Die Synchronisierung wird im Menü auf der linken Seite aktiviert und deaktiviert. Sie kann auch beim erstmaligen Aufruf der Seite in einem neuen Browser direkt im Willkommensbildschirm aktiviert werden. Nightscout Reporter verlangt nur die Berechtigung die eigenen App-Daten zu speichern und zu laden und benötigt keinen Zugriff auf andere Daten auf Google Drive.', desc: 'v132a2');
  static final String _message_131 = import3.Intl.message('In der Tagesgrafik kann jetzt bei Auswahl der Tages Basalrate angegeben werden, dass der Name des Profils angezeigt wird, das am Beginn des Tages aktiv war. Dieser wird dann so angezeigt, wie ein Profilwechsel um 0 Uhr.', desc: 'v132a3');
  static final String _message_132 = import3.Intl.message('Auf den Kacheln können nun Bilder statt der Namen angezeigt werden. Die Bilder zeigen dann das ungefähre Aussehen der entsprechenden Seite an. Sie entsprechen nicht den tatsächlichen Daten, sondern sind nur eine visuelle Darstellung, die es manchem Benutzer vielleicht einfacher machen, die gewünschten Seiten schneller auszuwählen. Die Aktivierung der Bilder erfolgt im Einstellungsdialog.', desc: 'v132a4');
  static final String _message_133 = import3.Intl.message('In der Tagesstatistik wurden bei unvollständigen Daten teilweise fehlerhafte Werte ausgegeben. Das wurde korrigiert.', desc: 'v132f1');
  static final String _message_134 = import3.Intl.message('1.3.1 - 22.08.2019', desc: 'v131');
  static final String _message_135 = import3.Intl.message('Auf den Seiten Profil und Basalrate wird in der Titelzeile jetzt wieder das Datum angezeigt, ab dem das Profil gilt.', desc: 'v131c1');
  static final String _message_136 = import3.Intl.message('Die Listenansicht ist jetzt wieder scrollbar.', desc: 'v131f1');
  static final String _message_137 = import3.Intl.message('Temporäre Profilwechsel werden jetzt erkannt und in der Tagesgrafik korrekt angezeigt.', desc: 'v131f2');
  static final String _message_138 = import3.Intl.message('1.3.0 - 19.08.2019', desc: 'v130');
  static final String _message_139 = import3.Intl.message('Das "Comprehensive Glucose Pentagon" (Umfassendes Glukose Fünfeck) wurde als eigenes PDF und als Zusatzseite zur Tagesgrafik und Wochengrafik hinzugefügt. Es handelt sich hierbei um eine Darstellung von fünf Messgrössen, mit deren Hilfe sich die Qualität der Therapie ermitteln und mit anderen vergleichen lässt. Auf den Ausdrucken wird ein Verweis auf die zugrunde liegende Abhandlung ausgegeben.', desc: 'v130a1');
  static final String _message_140 = import3.Intl.message('In der Tagesgrafik gibt es eine Option, die berechneten IE für aufgenommene Kohlenhydrate anzeigen zu lassen. Der Wert, der unmittelbar unter den Kohlenhydraten angezeigt wird, entspricht dem Bolus, der zu diesem Zeitpunkt für diese Kohlenhydratmenge abgegeben werden sollte. Dieser Wert kann niedriger als der tatsächlich abgegebene Wert ausfallen, weil für die Insulinabgabe noch IOB und andere Faktoren berücksichtigt werden.', desc: 'v130a2');
  static final String _message_141 = import3.Intl.message('In der Tagesgrafik werden nun auch bei Anzeige des Zielwertes die temporären Ziele berücksichtigt.', desc: 'v130a3');
  static final String _message_142 = import3.Intl.message('In der Auswertung gibt es eine neue Option, um den Standardbereich feiner abzustufen. Dort werden dann zusätzlich sehr hohe Werte und sehr niedrige Werte angezeigt.', desc: 'v130a4');
  static final String _message_143 = import3.Intl.message('Nightscout Reporter kann nun auch in Japanisch verwendet werden.', desc: 'v130a5');
  static final String _message_144 = import3.Intl.message('Es ist jetzt möglich, die Buttons zur PDF-Auswahl als Kacheln darstellen zu lassen. Die Option dazu ist im Menü auf der linken Seite zu finden. In der Kachelansicht werden die Buttons über die verfügbare Fläche verteilt und sind so auf kleinen Geräten leichter zu treffen. Ausserdem sieht man dann normalerweise alle verfügbaren PDFs auf einen Blick und muss nicht scrollen. Auf den aktivierten Kacheln wird angezeigt, an welcher Stelle im PDF die entsprechenden Seiten ausgegeben werden und wieviele Seiten die entsprechende Kachel ausgibt. Diese Zahl kann für die meisten Kacheln korrekt ermittelt werden, bei einigen ist das aber ohne Auswertung der Daten nicht möglich (z.B. Profile und Protokoll). In diesem Fall wird entweder keine Seitenzahl oder eine Mindestzahl an Seiten angegeben. Sobald die Erstellung des PDFs erfolgt ist, werden die korrekten Zahlen angezeigt. Die Reihenfolge der Kacheln kann verändert werden, indem man sie festhält und an die Stelle verschiebt, an der man sie gerne hätte. Nach Anklicken des Icons in der oberen rechten Ecke können die Parameter für das entsprechende PDF erfasst werden.', desc: 'v130a6');
  static final String _message_145 = import3.Intl.message('Im Profil werden nun die Gesamtsumme der Basalrate und die durchschnittlichen Werte für ICR und ISF pro Stunde angezeigt.', desc: 'v130a7');
  static final String _message_146 = import3.Intl.message('Optionen für die PDFs, die eine eindeutige Beziehung zu einem laufenden Loop haben, werden nun in Blau dargestellt. Das vereinfacht es, PDFs zu erstellen, denen man nicht ohne Weiteres entnehmen kann, dass ein Loop vorliegt. Dazu müssen nur die Haken bei den blauen Optionen entfernt werden.', desc: 'v130a8');
  static final String _message_147 = import3.Intl.message('Die Basalratenprofile für den Tag werden nun auch anhand der Behandlungsdaten ermittelt. Profilwechsel werden in der Tagesgrafik angezeigt und sollten ab dem Zeitpunkt des Wechsels auch eine korrekte Basalratenanpassung anzeigen.', desc: 'v130c1');
  static final String _message_148 = import3.Intl.message('Die Seiten Profil und Basalrate zeigen nun bei einem Profil, das nur temporär während eines Tages aktiv war den Zeitraum an, in dem es aktiv war.', desc: 'v130c2');
  static final String _message_149 = import3.Intl.message('Die Buttons für die vergangenen Perioden werden nicht angezeigt, wenn kein Zeitraum oder kein PDF ausgewählt wurde.', desc: 'v130c3');
  static final String _message_150 = import3.Intl.message('Einige der Optionen für die PDFs wurden hierarchisch angeordnet. Es macht z.B. keinen Sinn, die SMB Werte in der Tagesgrafik an der Kurve platzieren zu lassen, wenn die SMB Werte gar nicht angezeigt werden. Deswegen werden Optionen, die von einer anderen Option abhängen nur dann angezeigt, wenn die entsprechende Option markiert ist. Dadurch ändert sich leider auch die Speicherung der Optionen, weshalb sich die aktuelle Auswahl der Optionen bei manchen PDFs verändert. Da müssen die Optionen dann neu gesetzt werden.', desc: 'v130c4');
  static final String _message_151 = import3.Intl.message('Die Auswahl des Zeitraums und der Benutzer wurde in die Titelzeile verschoben.', desc: 'v130c5');
  static final String _message_152 = import3.Intl.message('Die Ermittlung der Einheit (mg/dl oder mmol/l) wird nun flexibler gehandhabt, so dass auch Leerzeichen in der entsprechenden Einstellung nicht mehr zu einer Fehlinterpretation führen.', desc: 'v130f1');
  static final String _message_153 = import3.Intl.message('Ein Fehler wurde behoben, der in der Tagesgrafik dazu führte, dass Texte in der Legende andere Texte überschrieben haben.', desc: 'v130f2');
  static final String _message_154 = import3.Intl.message('Die Berechnung der PDF-Grössen wurde korrigiert, so dass nun weniger PDFs erstellt werden, wenn sie aufgrund der Grösse aufgeteilt werden.', desc: 'v130f3');
  static final String _message_155 = import3.Intl.message('Zur Berechnung der Analyse, Tagesstatistik und Tagesgrafik wird nun die gleiche Datenbasis verwendet, so dass die Werte auf allen PDFs gleich sind.', desc: 'v130f4');
  static final String _message_156 = import3.Intl.message('Es werden jetzt auch blutige Werte erkannt, die von Loop auf dem IPhone eingetragen werden.', desc: 'v130f5');
  static final String _message_157 = import3.Intl.message('1.2.11 - 17.05.2019', desc: 'v1211');
  static final String _message_158 = import3.Intl.message('Es gibt jetzt die Möglichkeit, PDFs vergangener Zeiträume zu erzeugen, ohne den Zeitraum anpassen zu müssen. Oberhalb des Buttons zur PDF-Erzeugung gibt es zwei Buttons, welche die PDFs für eine frühere Periode erzeugen. Der untere der beiden Buttons erzeugt die Vorperiode, der obere die vorletzte Periode. Auf den Buttons wird das Startdatum und das Enddatum angezeigt. Wenn z.B. als Zeitraum "Letzte 2 Wochen" gewählt wurde, dann wird mit dem unteren Button der Zeitraum von zwei Wochen beginnend vor vier Wochen erzeugt und mit dem oberen Button der Zeitraum von zwei Wochen beginnend vor sechs Wochen. Auf diese Art kann man recht einfach Vergleichsberichte erzeugen, um die Entwicklung der Werte zu erkennen. Auf den Seiten wird für diese Ausdrucke in der Kopfzeile das Wort "Historisch 1", bzw. "Historisch 2" oberhalb des Zeitraums ausgegeben. So kann man beim Vergleich der Werte die Daten voneinander unterscheiden.', desc: 'v1211a1');
  static final String _message_159 = import3.Intl.message('Die teilweise falsch zugewiesenen Grenzwerte für die Bereiche (niedrig, normal, hoch) wurden korrigiert.', desc: 'v1211f1');
  static final String _message_160 = import3.Intl.message('1.2.10 - 18.04.2019', desc: 'v1210');
  static final String _message_161 = import3.Intl.message('Auf der Profilseite wurde die Spalte für die Werte von ICR verbreitert.', desc: 'v1210f1');
  static final String _message_162 = import3.Intl.message('In der Tagesgrafik werden die Insulinangaben jetzt kleiner dargestellt, wenn die Basalrate eine Genauigkeit von mehr als 2 Nachkommastellen hat.', desc: 'v1210f2');
  static final String _message_163 = import3.Intl.message('Die mittlerweile überflüssige Option zur Darstellung der Basalrate mit zwei Nachkommastellen wurde aus der Tagesgrafik entfernt.', desc: 'v1210f3');
  static final String _message_164 = import3.Intl.message('1.2.9 - 15.04.2019', desc: 'v129');
  static final String _message_165 = import3.Intl.message('Ein Link zur Facebookseite von Nightscout Reporter wurde im Menü hinzugefügt.', desc: 'v129a1');
  static final String _message_166 = import3.Intl.message('Die Mischung von zwei Seiten auf einer PDF-Seite, die manchmal vorkam, wurde behoben.', desc: 'v129f1');
  static final String _message_167 = import3.Intl.message('1.2.8 - 11.04.2019', desc: 'v128');
  static final String _message_168 = import3.Intl.message('Es gibt in den Einstellungen eine neue Option, um den letzten in Nightscout gespeicherten Glukosewert in der Titelzeile anzeigen zu lassen. Wenn diese Option aktiviert ist, wird der aktuelle Wert, das Alter des Wertes, der Trendpfeil und die Differenz zum vorherigen Wert rechts in der Titelzeile angezeigt. Diese Anzeige wird jede Minute aktualisiert, solange das Browserfenster den Eingabefokus besitzt. Wenn es diesen nicht hat, wird die Aktualisierung angehalten und der Wert ausgeblendet, um nicht unnötig Systemresourcen zu belasten.', desc: 'v128a1');
  static final String _message_169 = import3.Intl.message('In der Tagesgrafik gibt es eine Option, mit der man sich die erfassten Trainingsdaten anzeigen lassen kann. Diese werden dann am unteren Rand über der Tabelle der Glukosewerte eingefügt.', desc: 'v128a2');
  static final String _message_170 = import3.Intl.message('Die Spalten auf der Profilseite wurden korrigiert, damit auch längere Zeitnamen (z.B. in spanisch) Platz finden.', desc: 'v128c1');
  static final String _message_171 = import3.Intl.message('Bei Tagesgrafiken und Wochengrafiken gibt es jetzt die Möglichkeit 1, 2, 4, 8 oder 16 Grafiken auf einer Seite zu platzieren.', desc: 'v128c2');
  static final String _message_172 = import3.Intl.message('Die Aufteilung auf mehrere PDF-Dateien funktioniert jetzt besser.', desc: 'v128f1');
  static final String _message_173 = import3.Intl.message('1.2.7 - 28.03.2019', desc: 'v127');
  static final String _message_174 = import3.Intl.message('Wenn der Zeitraum leer ist, wird der Button für die Auswahl deutlich markiert und in dem Dialog zur Auswahl wird in der Titelzeile ein Hinweis darauf angezeigt.', desc: 'v127a1');
  static final String _message_175 = import3.Intl.message('1.2.6 - 27.03.2019', desc: 'v126');
  static final String _message_176 = import3.Intl.message('Es ist jetzt möglich, die Wochentage festzulegen, die im Zeitraum berücksichtigt werden sollen. Die entsprechenden Tage werden bei der Auswahl des Zeitraums mit den Buttons unterhalb des Monats festgelegt. Auf den PDFs werden Zeiträume dann zusätzlich mit der Information versehen, welche Wochentage berücksichtigt werden, wenn es nicht alle sind.', desc: 'v126a1');
  static final String _message_177 = import3.Intl.message('Die Skalen an den Grafiken wurden überarbeitet. Sie zeigen jetzt für mmol/L ganzzahlige Werte an und die Einheiten wurden entfernt. Diese stehen nur noch unten an der Grafik. Das betrifft die täglichen Grafiken, wöchentlichen Grafiken und das Glukose Percentil Diagramm.', desc: 'v126c1');
  static final String _message_178 = import3.Intl.message('1.2.5 - 25.03.2019', desc: 'v125');
  static final String _message_179 = import3.Intl.message('Wenn das erzeugte PDF zu gross wird, wird es nun auf mehrere PDF-Dateien aufgeteilt. In diesem Fall wird es nicht direkt geöffnet, sondern es wird eine Liste mit durchnummerierten Buttons angezeigt. Diese Buttons öffnen bei Betätigung das entsprechende PDF und erhalten einen Haken, um anzuzeigen, dass es geöffnet wurde. Das sollte es erleichtern, die PDFs nacheinander zu öffnen, weil normalerweise der Browser im Hintergrund verschwindet, wenn ein neues Fenster aufgemacht wird.', desc: 'v125a1');
  static final String _message_180 = import3.Intl.message('In den Einstellungen gibt es einen Regler, der festlegt, wie gross die erzeugten PDF-Dateien maximal sein dürfen. Wenn nur ein leeres PDF erzeugt wird, dann sollte dieser Regler weiter nach links geschoben werden, um die Dateigrösse zu verringern.', desc: 'v125a2');
  static final String _message_181 = import3.Intl.message('In der Tagesgrafik kann die Anzeige der SMB nun ausgeblendet werden.', desc: 'v125a3');
  static final String _message_182 = import3.Intl.message('Die Reihenfolge der Formulare kann nun verändert werden. Dazu einfach das Handle auf der linken Seite des Buttons für das Formular anklicken, festhalten und an die Stelle ziehen, vor der es ausgedruckt werden soll.', desc: 'v125a4');
  static final String _message_183 = import3.Intl.message('Auf der Analyseseite werden nun auch GVI und PGS ausgegeben.', desc: 'v125a5');
  static final String _message_184 = import3.Intl.message('Auf der Analyseseite kann statt der Anzahl der Werte bei den Zielbereichen jetzt die Standardabweichung der Werte im Zielbereich angezeigt werden.', desc: 'v125a6');
  static final String _message_185 = import3.Intl.message('Auf der Analyseseite wird jetzt auch die Standardabweichung aller Werte der Periode angezeigt.', desc: 'v125a7');
  static final String _message_186 = import3.Intl.message('In der Tagesgrafik gibt es eine Option, mit dem man die verschiedenen Arten der Boli kenntlich machen lassen kann. Wenn diese Option gesetzt ist, wird ein Bolus, der zu einer Mahlzeit abgegeben wurde mit einer anderen Farbe markiert, als ein Bolus zur Korrektur. In der Legende werden dann Korrektur-, Mahlzeiten-Boli und SMB getrennt angezeigt.', desc: 'v125a8');
  static final String _message_187 = import3.Intl.message('Nightscout Reporter ist nun auch grösstenteils in Spanisch und Polnisch verfügbar. Entsprechende Buttons wurden dem Hauptmenü hinzugefügt. Danke an die fleissigen Übersetzer :).', desc: 'v125a9');
  static final String _message_188 = import3.Intl.message('Das Control für die Eingabe des Zeitraums wurde angepasst, damit es auf schmalen Display auch korrekt dargestellt wird.', desc: 'v125c1');
  static final String _message_189 = import3.Intl.message('Die Genauigkeit der Insulindosierung wird aus dem Profil ermittelt. Der Wert mit der höchsten Genauigkeit legt fest, mit wieviel Nachkommastellen Basalratenwerte angezeigt werden.', desc: 'v125c2');
  static final String _message_190 = import3.Intl.message('Daten verschiedener Uploader werden nun besser interpretiert.', desc: 'v125c3');
  static final String _message_191 = import3.Intl.message('Daten, die von xDrip als sync markiert wurden, werden bei der Auswertung ignoriert.', desc: 'v125c4');
  static final String _message_192 = import3.Intl.message('Die Farben für Dialoge und Scrollbars wurden angepasst.', desc: 'v125c5');
  static final String _message_193 = import3.Intl.message('Die Berechnung der tatsächlichen Basalrate wurde korrigiert.', desc: 'v125f1');
  static final String _message_194 = import3.Intl.message('Die Profilseite wurde angepasst, damit Einträge für 24 Stunden auf eine Seite passen.', desc: 'v125f2');
  static final String _message_195 = import3.Intl.message('Die Links zu Nightscout und den Reports von Nightscout im Menü funktionieren jetzt auch richtig, wenn ein Usertoken angegeben wurde.', desc: 'v125f3');
  static final String _message_196 = import3.Intl.message('In Firefox ist es jetzt auch möglich, die Hauptseite zu scrollen, wenn sie länger ist, als das Browserfenster.', desc: 'v125f4');
  static final String _message_197 = import3.Intl.message('Blutwerte werden jetzt auch bei mmol/L in den Grafiken korrekt angezeigt.', desc: 'v125f5');
  static final String _message_198 = import3.Intl.message('Die Standardabweichung wird jetzt auch bei mmol/L korrekt angezeigt.', desc: 'v125f6');
  static final String _message_199 = import3.Intl.message('Die fehlerhafte Zentrierung der Auswahlbuttons wurde korrigiert.', desc: 'v125f7');
  static final String _message_200 = import3.Intl.message('1.2.4 - 12.02.2019', desc: 'v124');
  static final String _message_201 = import3.Intl.message('Es gibt jetzt auch die Möglichkeit, Nightscout Reporter in europäischem Englisch darzustellen. Der Unterschied zum amerikanischen Englisch besteht derzeit lediglich im Datumsformat (gb: dd/MM/yyyy, us: MM/dd/yyyy).', desc: 'v124a1');
  static final String _message_202 = import3.Intl.message('In der Legende unter der Tagesgrafik wird die Summe der Kohlenhydrate für den Tag angezeigt.', desc: 'v124a2');
  static final String _message_203 = import3.Intl.message('In der Tagesgrafik werden nun auch Reservoirwechsel angezeigt.', desc: 'v124a3');
  static final String _message_204 = import3.Intl.message('In der Tagesgrafik werden nun der geschätzte HbA1C und die prozentuale Menge an Bolusinsulin und Basalinsulin für den Tag angezeigt. Diese Anzeige erfolgt innerhalb der Legende, weshalb diese aktiviert sein muss, damit die Werte angezeigt werden.', desc: 'v124a4');
  static final String _message_205 = import3.Intl.message('Die Angabe DIA auf der Profilseite wird nun mit zwei Nachkommastellen angezeigt.', desc: 'v124c1');
  static final String _message_206 = import3.Intl.message('Für die Tagesgrafik gibt es jetzt eine Option, um die Aufsummierung nahe beieinander liegender Werte umzuschalten.', desc: 'v124c2');
  static final String _message_207 = import3.Intl.message('Die Kohlenhydratangaben auf der Tagesgrafik werden jetzt ohne den Zusatz KH ausgegeben.', desc: 'v124c3');
  static final String _message_208 = import3.Intl.message('Die Balken für das Bolusinsulin in der Tagesgrafik werden nun entsprechend dem Maximalwert an Bolusinsulin an dem Tag skaliert.', desc: 'v124c4');
  static final String _message_209 = import3.Intl.message('In der Analyse können die Prozentzahlen für die Zielbereiche mit Nachkommazahl angezeigt werden. Das verringert die Differenz zu 100%, wenn man sie zusammenzählt. Der verbleibende Rest sind Rundungsdifferenzen.', desc: 'v124c5');
  static final String _message_210 = import3.Intl.message('1.2.3 - 04.02.2019', desc: 'v123');
  static final String _message_211 = import3.Intl.message('In der Tagesgraphic werden jetzt Insulinwerte und Kohlenhydratwerte zusammengefasst, wenn es mehrere innerhalb einer Stunde gibt. Die Balken werden nach wie vor für jeden Wert einzeln ausgegeben. Auf diese Art sollte es keine überlappende Ausgabe der Werte mehr geben. Die zusammengefassten Werte werden in eckigen Klammern ausgegeben, um anzuzeigen, dass hier Werte aufsummiert wurden.', desc: 'v123c1');
  static final String _message_212 = import3.Intl.message('Der Fehler im Profil, der dazu führte, dass die Werte für ISF und Zielbereich falsch umgerechnet werden, wurde behoben.', desc: 'v123f1');
  static final String _message_213 = import3.Intl.message('Die fehlerhafte Platzierug der blutigen Werte bei mmol/L in der Tagesgrafik wurde korrigiert.', desc: 'v123f2');
  static final String _message_214 = import3.Intl.message('1.2.2 - 24.01.2019', desc: 'v122');
  static final String _message_215 = import3.Intl.message('Im Profil werden jetzt die richtigen Einheiten verwendet (mg/dL oder mmol/l).', desc: 'v122f1');
  static final String _message_216 = import3.Intl.message('1.2.1 - 22.01.2019', desc: 'v121');
  static final String _message_217 = import3.Intl.message('Neue Option im Profil, um fortlaufende Zeiten mit gleichen Werten zu einem Eintrag zusammen zu fassen.', desc: 'v121a1');
  static final String _message_218 = import3.Intl.message('Wenn in einem Profil mehr Zeiten erfasst wurden, als auf eine Seite passen, wurden diese fortlaufend in die nächste Seite hineingeschrieben. Jetzt wird an geeigneter Stelle eine neue Seite ausgegeben.', desc: 'v121f1');
  static final String _message_219 = import3.Intl.message('1.2.0 - 21.01.2019', desc: 'v120');
  static final String _message_220 = import3.Intl.message('In der Tagesstatistik und in den täglichen Grafiken werden jetzt zum Datum die Wochentage mit angezeigt.', desc: 'v120a1');
  static final String _message_221 = import3.Intl.message('Neues PDF für eine Wochengrafik hinzugefügt, auf der die Glukosekurven der Woche übereinander gelegt werden.', desc: 'v120a2');
  static final String _message_222 = import3.Intl.message('Neuer Parameter für die Tagesgrafik, der festlegt, ob die Linien für die Notizen unter der Grafik bis zur Glukosekurve gezeichnet werden sollen oder nicht.', desc: 'v120a3');
  static final String _message_223 = import3.Intl.message('In der Auswertung können die Angaben für Material (Katheter, Sensor, Ampulle) mit Nachkommastellen angezeigt werden.', desc: 'v120c1');
  static final String _message_224 = import3.Intl.message('Die Berechnung des täglichen Insulins berücksichtigt nun auch die SMB.', desc: 'v120f1');
  static final String _message_225 = import3.Intl.message('1.1.2 - 08.01.2019', desc: 'v112');
  static final String _message_226 = import3.Intl.message('In der Tagesgrafik werden jetzt auch Blutzuckermessungen angezeigt. Sie werden als rote Quadrate dargestellt und die zugehörigen Werte in der Tabelle unterhalb der Grafik werden ebenfalls mit roter Schrift angezeigt.', desc: 'v112a1');
  static final String _message_227 = import3.Intl.message('Die Microboli des Minimed 600 Uploaders werden jetzt auch ermittelt und in der Analyse ausgegeben, wenn sie vorhanden sind.', desc: 'v112a2');
  static final String _message_228 = import3.Intl.message('Es gibt in den Einstellungen eine Option, das PDF herunterladen zu lassen, statt es im Browser direkt anzeigen zu lassen. Das wird für Browser wie Edge benötigt.', desc: 'v112a3');
  static final String _message_229 = import3.Intl.message('In der Tagesgrafik werden nun auch Kohlenhydratkorrekturen angezeigt.', desc: 'v112a4');
  static final String _message_230 = import3.Intl.message('Die Auswahl des Zeitraums ist nun flexibler. Die Auswahl erfolgt in einem Dialog, der die eingestellte Sprache berücksichtigt. Mit der Auswahl der vorbelegten Bereiche (Heute, Letzte Woche, usw.) wird festgelegt, dass beim nächsten Aufruf das aktuelle Datum als Grundlage für den Bereich verwendet wird. Wenn der Bereich direkt im Kalender festgelegt wird, dann gilt dieser beim nächsten Aufruf so wie er festgelegt wurde. Standardmässig ist der erste Tag der Woche jetzt ein Montag. Dieser kann aber durch Anklicken des Wochentags in der Titelzeile des Monats auf die eigene Präferenz festgelegt werden. Die Eingabe der Datumsfelder erfolgt in der Form, die der Sprache entspricht (Tag.Monat.Jahr für deutsch, Monat/Tag/Jahr für englisch).', desc: 'v112c1');
  static final String _message_231 = import3.Intl.message('Im Kalender-Control kann kein Datum nach dem aktuellen Tag mehr ausgewählt werden.', desc: 'v112c2');
  static final String _message_232 = import3.Intl.message('Im Kalender-Control wird jetzt der Monat des entsprechenden Datums angezeigt, wenn eines der Felder Von oder bis den Fokus erhält.', desc: 'v112c3');
  static final String _message_233 = import3.Intl.message('Wenn in den Einträgen Lücken von 15 Minuten oder mehr sind, führen diese zu einer Unterbrechung der Linie in der Tagesgrafik.', desc: 'v112c4');
  static final String _message_234 = import3.Intl.message('Die Positionierung der Notizen in der Tagesgrafik wurde korrigiert, so dass sie näher an der Uhrzeit stehen. Die Striche wurden so verkürzt, dass sie nur noch bis zum unteren Rand der Grafik gehen und nicht mehr durch die Wertetabelle.', desc: 'v112f1');
  static final String _message_235 = import3.Intl.message('Die eigenen Grenzwerte auf der Analyseseite in mmol/L werden nun korrekt berechnet.', desc: 'v112f2');
  static final String _message_236 = import3.Intl.message('Ein Fehler wurde behoben, der dafür sorgte, dass die letzten Tage bestimmter Monate nicht im Kalender-Control angezeigt wurden.', desc: 'v112f3');
  static final String _message_237 = import3.Intl.message('Ein Fehler wurde wahrscheinlich behoben, der dazu führt, dass bei manchen Profilen der Wert für DIA nicht korrekt ausgelesen wurde.', desc: 'v112f4');
  static final String _message_238 = import3.Intl.message('Im Kalender-Control wird ein eingestellter Bereich (Heute, Letzte Woche, etc.) jetzt korrekt auf den aktuellen Tag bezogen.', desc: 'v112f5');
  static final String _message_239 = import3.Intl.message('Fehlerhafte Ausgabe der Blutzuckerwerte in der täglichen Grafik korrigiert.', desc: 'v112f6');
  static final String _message_240 = import3.Intl.message('Das Profil-PDF wird nun im Querformat erzeugt, um auch Profile mit vielen Einträgen für die Parameter brauchbar darstellen zu können.', desc: 'v112f7');
  static final String _message_241 = import3.Intl.message('Wenn Sonderzeichen in den Daten vorhanden sind (z.B. Smileys in den Notizen), führte das zu einem Absturz während der PDF-Erstellung. Das wurde behoben, indem diese Sonderzeichen aus der Ausgabe entfernt werden.', desc: 'v112f8');
  static final String _message_242 = import3.Intl.message('Wenn Sonderzeichen in den Daten vorhanden sind (z.B. Smileys in den Notizen), führte das zu einem Absturz während der PDF-Erstellung. Das wurde behoben, indem diese Sonderzeichen aus der Ausgabe entfernt werden.', desc: 'v112f9');
  static final String _message_243 = import3.Intl.message('1.1.1 - 19.11.2018', desc: 'v111');
  static final String _message_244 = import3.Intl.message('Tagesgrafikparameter zur Anzeige der Legende', desc: 'v111a1');
  static final String _message_245 = import3.Intl.message('Tagesgrafikparameter zur Anzeige von Notizen', desc: 'v111a2');
  static final String _message_246 = import3.Intl.message('PDF für Profildaten', desc: 'v111a3');
  static final String _message_247 = import3.Intl.message('Tagesgrafikparameter zur umgekehrten Sortierung hinzugefügt. Die Tage werden damit beginnend mit dem höchsten Datum ausgegeben.', desc: 'v111a4');
  static final String _message_248 = import3.Intl.message('In der Tagesgrafik wird jetzt eine Tabelle mit halbstündigen Glukosewerten eingeblendet angezeigt. Diese kann über einen Parameter ausgeschaltet werden.', desc: 'v111a5');
  static final String _message_249 = import3.Intl.message('In der Tagesstatistik wurde die Spalte Varianzkoeffizient hinzugefügt (VarK).', desc: 'v111a6');
  static final String _message_250 = import3.Intl.message('In der Tagesgrafik werden nun SMBs auch angezeigt, wenn die Option für die Darstellung von Insulin akitivert wurde. Man kann festlegen, ob die SMBs an der Glukosekurve oder am Zielwert angezeigt werden.', desc: 'v111a7');
  static final String _message_251 = import3.Intl.message('Die Berechnung der Summenzeile auf der Seite Tagesstatistik wurde korrigiert.', desc: 'v111f1');
  static final String _message_252 = import3.Intl.message('1.1.0 - 09.11.2018', desc: 'v110');
  static final String _message_253 = import3.Intl.message('Zusätzliche Informationen zu den PDFs und im UI hinzugefügt', desc: 'v110a1');
  static final String _message_254 = import3.Intl.message('Summen für Bolus Insulin, Basalrate für den Tag und Basalrate aus dem Profil zur Tagesgrafik hinzugefügt', desc: 'v110a2');
  static final String _message_255 = import3.Intl.message('Einige Formulare können nun mit Parametern konfiguriert werden; hierzu den Pfeil am rechten Rand des Formularbuttons anklicken und im aufgeklappten Bereich die entsprechenden Einstellungen vornehmen; der Pfeil erscheint erst, wenn das Formular zum Ausdruck markiert wurde', desc: 'v110a3');
  static final String _message_256 = import3.Intl.message('Anzahl der Sensoren zur Analyse hinzugefügt', desc: 'v110a4');
  static final String _message_257 = import3.Intl.message('Die Möglichkeit für Beta-Funktionen wurde entfernt; die Betaversion ist nun hier zu finden:', desc: 'v110c1a');
  static final String _message_258 = import3.Intl.message('https://nightscout-reporter.zreptil.de/beta', desc: 'v110c1b');
  static final String _message_259 = import3.Intl.message('Übersetzungen korrigiert', desc: 'v110f1');
  static final String _message_260 = import3.Intl.message('Titelangaben für Datumsbereiche auf den PDFs vereinheitlicht', desc: 'v110f2');
  static final String _message_261 = import3.Intl.message('Absturz behoben, der auftrat, wenn kein passendes Profil für einen Zeitpunkt gefunden werden konnte', desc: 'v110f3');
  static final String _message_262 = import3.Intl.message('1.0.4 - 28.10.2018', desc: 'v104');
  static final String _message_263 = import3.Intl.message('Benutzer können nun gelöscht werden', desc: 'v104a1');
  static final String _message_264 = import3.Intl.message('Benutzer können ein User-Token angeben, um sich mit geschützten Nightscout-Instanzen zu verbinden', desc: 'v104a2');
  static final String _message_265 = import3.Intl.message('Kohlenhydrate und Bolusinsulin werden jetzt in den täglichen Grafiken angezeigt', desc: 'v104a3');
  static final String _message_266 = import3.Intl.message('Spalte HbA1c zu Tagesstatistik hinzugefügt', desc: 'v104a4');
  static final String _message_267 = import3.Intl.message('Bisher fehlende Summenwerte in der Tagesstatistik hinzugefügt', desc: 'v104a5');
  static final String _message_268 = import3.Intl.message('Spaltenbreite der Informationen in der Analyse erhöht', desc: 'v104f1');
  static final String _message_269 = import3.Intl.message('Die Icons auf einigen Buttons waren zu nahe am Text', desc: 'v104f2');
  static final String _message_270 = import3.Intl.message('Temporäre Basalraten mit absoluten Werten werden korrekt dargestellt', desc: 'v104f3');
  static final String _message_271 = import3.Intl.message('1.0.3 - 26.10.2018', desc: 'v103');
  static final String _message_272 = import3.Intl.message('Man kann jetzt mehrere Benutzer anlegen. Das ist nützlich, um mehrere Nightscout-Instanzen auszuwerten (z.B. für Ärzte, Betreuer oder den Entwickler dieser Software)', desc: 'v103a1');
  static final String _message_273 = import3.Intl.message('Benutzerdaten werden nun verschlüsselt im Browser gespeichert', desc: 'v103c1');
  static final String _message_274 = import3.Intl.message('Die Analyse-Seite wurde überarbeitet und zeigt nun Überschriften über den Bereichen an', desc: 'v103c2');
  static final String _message_275 = import3.Intl.message('Wenn die Grenzwerte in Nightscout (BG_TARGET_BOTTOM und BG_TARGET_TOP) den Werten 70 und 180 entsprechen, wird auf der Analyse-Seite der Bereich für die Standardzielwerte ausgeblendet', desc: 'v103c3');
  static final String _message_276 = import3.Intl.message('Die Tagesstatistik zeigt mmol/l-Werte nun korrekt an', desc: 'v103f1');
  static final String _message_277 = import3.Intl.message('Die Werte für den Standardzielbereich auf der Analyse-Seite werden nun korrekt ermittelt', desc: 'v103f2');
  static final String _message_278 = import3.Intl.message('Im PDF werden Zahlen und Datumsangaben entsprechend der ausgewählten Sprache formatiert', desc: 'v103f3');
  static final String _message_279 = import3.Intl.message('Beim Laden der Daten wird das entsprechende Datumsformat zur Anzeige verwendet', desc: 'v103f4');
  static final String _message_280 = import3.Intl.message('Fehlerhafte Messwerte werden in der Auswertung der Grafiken nicht mehr brücksichtigt; diese werden an dem Wert "NONE" im Datenfeld "direction" erkannt', desc: 'v103f5');
  static final String _message_281 = import3.Intl.message('Bei der Berechnung der Kohlenhydrate werden weitere Datensätze berücksichtigt', desc: 'v103f5');
  static final String _message_282 = import3.Intl.message('Diverse Abstürze beim Auslesen der Daten bereinigt', desc: 'v103f6');
  static final String _message_283 = import3.Intl.message('Die Möglichkeit, die URL in der Titelzeile anzeigen zu lassen wurde entfernt, da jetzt der aktuelle Benutzer oder dessen URL direkt angezeigt wird', desc: 'v103d1');
  static final String _message_284 = import3.Intl.message('1.0.2 - 23.10.2018', desc: 'v102');
  static final String _message_285 = import3.Intl.message('Legende für Katheter- und Sensorwechsel zur Tagesgrafik hinzugefügt.', desc: 'v102a1');
  static final String _message_286 = import3.Intl.message('Reihenfolge der PDF Seiten geändert - Perzentil Diagramm kommt jetzt nach der Analyse.', desc: 'v102c1');
  static final String _message_287 = import3.Intl.message('Daten für die Glukosewerte mit fehlerhaftem Datumsformat werden jetzt trotzdem korrekt ausgelesen.', desc: 'v102f1');
  static final String _message_288 = import3.Intl.message('Hohe Basalraten werden jetzt besser dargestellt.', desc: 'v102f2');
  static final String _message_289 = import3.Intl.message('1.0.1 - 23.10.2018', desc: 'v101');
  static final String _message_290 = import3.Intl.message('Diese Seite hinzugefügt. Sie wird jedesmal beim Start von Nightscout Reporter angezeigt, wenn sie in der aktuellen Version noch nicht angezeigt wurde. Ausserdem kann sie im Hamburgermenü wieder aufgerufen werden.', desc: 'v101a1');
  static final String _message_291 = import3.Intl.message('Schliessen Button im Nachrichtenbereich hinzugefügt.', desc: 'v101a2');
  static final String _message_292 = import3.Intl.message('Fehler werden besser abgefangen und mit sinnvollem Text ersetzt.', desc: 'v101c1');
  static final String _message_293 = import3.Intl.message('Das Anklicken des Nachrichtenbereichs schliesst diesen nicht mehr.', desc: 'v101c2');
  static final String _message_294 = import3.Intl.message('Name, Geburtstag, Insulin und das Startdatum des Diabetes können nun leer gelassen werden, ohne dass das negative Auswirkungen auf die Darstellung im PDF hat.', desc: 'v101c3');
  static final String _message_295 = import3.Intl.message('Fehlermeldung beim Laden von Profilen ohne Startdatum entfernt.', desc: 'v101f1');
  static final String _message_296 = import3.Intl.message('Wenn keine Daten verfügbar sind, werden leere Seiten mit einem entsprechenden Hinweis erzeugt.', desc: 'v101f2');
  static final String _message_297 = import3.Intl.message('Die Glukosekurve der täglichen Grafiken wurde von fehlenden Daten befreit.', desc: 'v101f3');
  static final String _message_298 = import3.Intl.message('Das PDF für die Basalrate war nicht korrekt, wenn nicht für jede Stunde ein Wert vorlag.', desc: 'v101f4');
  static final String _message_299 = import3.Intl.message('1.0.0 - 20.10.2018', desc: 'v100');
  static final String _message_300 = import3.Intl.message('Initiale Version, alles ist neu!', desc: 'v100a1');
  import4.ViewMaterialDialogComponent0 _compView_0;
  import5.MaterialDialogComponent _MaterialDialogComponent_0_5;
  import6.ViewMaterialButtonComponent0 _compView_6;
  dynamic _AcxDarkTheme_6_5;
  import7.MaterialButtonComponent _MaterialButtonComponent_6_6;
  import8.ViewMaterialIconComponent0 _compView_7;
  import9.MaterialIconComponent _MaterialIconComponent_7_5;
  static import10.ComponentStyles _componentStyles;
  ViewWhatsnewComponent0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import13.document.createElement('whatsnew');
  }
  static String get _debugComponentUrl {
    return (import14.isDevMode ? 'asset:nightscout_reporter/lib/src/whatsnew/whatsnew_component.dart' : null);
  }

  @override
  ComponentRef<import2.WhatsnewComponent> build() {
    final _rootEl = rootEl;
    final import13.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import4.ViewMaterialDialogComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    this.updateChildClassNonHtml(_el_0, 'headered-dialog');
    import16.setAttribute(_el_0, 'headered', '');
    import16.setAttribute(_el_0, 'hideFooter', '');
    import16.setAttribute(_el_0, 'shouldShowScrollStrokes', '');
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
    final _el_9 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_9);
    final _el_10 = import16.appendSpan(doc, _el_9);
    addShimE(_el_10);
    final _text_11 = import16.appendText(_el_10, _message_1);
    final _el_12 = import16.appendSpan(doc, _el_9);
    addShimE(_el_12);
    final _text_13 = import16.appendText(_el_12, _message_2);
    final _el_14 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_14);
    final _el_15 = import16.appendElement(doc, _el_14, 'li');
    this.updateChildClass(_el_15, 'added');
    addShimE(_el_15);
    final _text_16 = import16.appendText(_el_15, _message_3);
    final _el_17 = import16.appendElement(doc, _el_14, 'li');
    this.updateChildClass(_el_17, 'changed');
    addShimE(_el_17);
    final _text_18 = import16.appendText(_el_17, _message_4);
    final _el_19 = import16.appendElement(doc, _el_14, 'li');
    this.updateChildClass(_el_19, 'fixed');
    addShimE(_el_19);
    final _text_20 = import16.appendText(_el_19, _message_5);
    final _el_21 = import16.appendElement(doc, _el_14, 'li');
    this.updateChildClass(_el_21, 'fixed');
    addShimE(_el_21);
    final _text_22 = import16.appendText(_el_21, _message_6);
    final _el_23 = import16.appendElement(doc, _el_14, 'li');
    this.updateChildClass(_el_23, 'fixed');
    addShimE(_el_23);
    final _text_24 = import16.appendText(_el_23, _message_7);
    final _el_25 = import16.appendElement(doc, _el_14, 'li');
    this.updateChildClass(_el_25, 'fixed');
    addShimE(_el_25);
    final _text_26 = import16.appendText(_el_25, _message_8);
    final _el_27 = import16.appendElement(doc, _el_14, 'li');
    this.updateChildClass(_el_27, 'fixed');
    addShimE(_el_27);
    final _text_28 = import16.appendText(_el_27, _message_9);
    final _el_29 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_29);
    final _el_30 = import16.appendSpan(doc, _el_29);
    addShimE(_el_30);
    final _text_31 = import16.appendText(_el_30, _message_1);
    final _el_32 = import16.appendSpan(doc, _el_29);
    addShimE(_el_32);
    final _text_33 = import16.appendText(_el_32, _message_10);
    final _el_34 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_34);
    final _el_35 = import16.appendElement(doc, _el_34, 'li');
    this.updateChildClass(_el_35, 'added');
    addShimE(_el_35);
    final _html_36 = import22.createTrustedHtml(_message_11('<b>', '</b>'));
    _el_35.append(_html_36);
    final _el_37 = import16.appendElement(doc, _el_34, 'li');
    this.updateChildClass(_el_37, 'changed');
    addShimE(_el_37);
    final _text_38 = import16.appendText(_el_37, _message_12);
    final _el_39 = import16.appendElement(doc, _el_34, 'li');
    this.updateChildClass(_el_39, 'fixed');
    addShimE(_el_39);
    final _text_40 = import16.appendText(_el_39, _message_13);
    final _el_41 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_41);
    final _el_42 = import16.appendSpan(doc, _el_41);
    addShimE(_el_42);
    final _text_43 = import16.appendText(_el_42, _message_1);
    final _el_44 = import16.appendSpan(doc, _el_41);
    addShimE(_el_44);
    final _text_45 = import16.appendText(_el_44, _message_14);
    final _el_46 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_46);
    final _el_47 = import16.appendElement(doc, _el_46, 'li');
    this.updateChildClass(_el_47, 'added');
    addShimE(_el_47);
    final _text_48 = import16.appendText(_el_47, _message_15);
    final _el_49 = import16.appendElement(doc, _el_46, 'li');
    this.updateChildClass(_el_49, 'changed');
    addShimE(_el_49);
    final _text_50 = import16.appendText(_el_49, _message_16);
    final _el_51 = import16.appendElement(doc, _el_46, 'li');
    this.updateChildClass(_el_51, 'fixed');
    addShimE(_el_51);
    final _text_52 = import16.appendText(_el_51, _message_17);
    final _el_53 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_53);
    final _el_54 = import16.appendSpan(doc, _el_53);
    addShimE(_el_54);
    final _text_55 = import16.appendText(_el_54, _message_1);
    final _el_56 = import16.appendSpan(doc, _el_53);
    addShimE(_el_56);
    final _text_57 = import16.appendText(_el_56, _message_18);
    final _el_58 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_58);
    final _el_59 = import16.appendElement(doc, _el_58, 'li');
    this.updateChildClass(_el_59, 'added');
    addShimE(_el_59);
    final _text_60 = import16.appendText(_el_59, _message_19);
    final _el_61 = import16.appendElement(doc, _el_58, 'li');
    this.updateChildClass(_el_61, 'fixed');
    addShimE(_el_61);
    final _text_62 = import16.appendText(_el_61, _message_20);
    final _el_63 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_63);
    final _el_64 = import16.appendSpan(doc, _el_63);
    addShimE(_el_64);
    final _text_65 = import16.appendText(_el_64, _message_1);
    final _el_66 = import16.appendSpan(doc, _el_63);
    addShimE(_el_66);
    final _text_67 = import16.appendText(_el_66, _message_21);
    final _el_68 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_68);
    final _el_69 = import16.appendElement(doc, _el_68, 'li');
    this.updateChildClass(_el_69, 'added');
    addShimE(_el_69);
    final _text_70 = import16.appendText(_el_69, _message_22);
    final _el_71 = import16.appendElement(doc, _el_68, 'li');
    this.updateChildClass(_el_71, 'fixed');
    addShimE(_el_71);
    final _text_72 = import16.appendText(_el_71, _message_23);
    final _el_73 = import16.appendElement(doc, _el_68, 'li');
    this.updateChildClass(_el_73, 'fixed');
    addShimE(_el_73);
    final _text_74 = import16.appendText(_el_73, _message_24);
    final _el_75 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_75);
    final _el_76 = import16.appendSpan(doc, _el_75);
    addShimE(_el_76);
    final _text_77 = import16.appendText(_el_76, _message_1);
    final _el_78 = import16.appendSpan(doc, _el_75);
    addShimE(_el_78);
    final _text_79 = import16.appendText(_el_78, _message_25);
    final _el_80 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_80);
    final _el_81 = import16.appendElement(doc, _el_80, 'li');
    this.updateChildClass(_el_81, 'added');
    addShimE(_el_81);
    final _text_82 = import16.appendText(_el_81, _message_26);
    final _el_83 = import16.appendElement(doc, _el_80, 'li');
    this.updateChildClass(_el_83, 'added');
    addShimE(_el_83);
    final _text_84 = import16.appendText(_el_83, _message_27);
    final _el_85 = import16.appendElement(doc, _el_80, 'li');
    this.updateChildClass(_el_85, 'changed');
    addShimE(_el_85);
    final _text_86 = import16.appendText(_el_85, _message_28);
    final _el_87 = import16.appendElement(doc, _el_80, 'li');
    this.updateChildClass(_el_87, 'changed');
    addShimE(_el_87);
    final _text_88 = import16.appendText(_el_87, _message_29);
    final _el_89 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_89);
    final _el_90 = import16.appendSpan(doc, _el_89);
    addShimE(_el_90);
    final _text_91 = import16.appendText(_el_90, _message_1);
    final _el_92 = import16.appendSpan(doc, _el_89);
    addShimE(_el_92);
    final _text_93 = import16.appendText(_el_92, _message_30);
    final _el_94 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_94);
    final _el_95 = import16.appendElement(doc, _el_94, 'li');
    this.updateChildClass(_el_95, 'added');
    addShimE(_el_95);
    final _text_96 = import16.appendText(_el_95, _message_31);
    final _el_97 = import16.appendElement(doc, _el_94, 'li');
    this.updateChildClass(_el_97, 'added');
    addShimE(_el_97);
    final _text_98 = import16.appendText(_el_97, _message_32);
    final _el_99 = import16.appendElement(doc, _el_94, 'li');
    this.updateChildClass(_el_99, 'changed');
    addShimE(_el_99);
    final _text_100 = import16.appendText(_el_99, _message_33);
    final _el_101 = import16.appendElement(doc, _el_94, 'li');
    this.updateChildClass(_el_101, 'fixed');
    addShimE(_el_101);
    final _text_102 = import16.appendText(_el_101, _message_34);
    final _el_103 = import16.appendElement(doc, _el_94, 'li');
    this.updateChildClass(_el_103, 'fixed');
    addShimE(_el_103);
    final _text_104 = import16.appendText(_el_103, _message_35);
    final _el_105 = import16.appendElement(doc, _el_94, 'li');
    this.updateChildClass(_el_105, 'fixed');
    addShimE(_el_105);
    final _text_106 = import16.appendText(_el_105, _message_36);
    final _el_107 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_107);
    final _el_108 = import16.appendSpan(doc, _el_107);
    addShimE(_el_108);
    final _text_109 = import16.appendText(_el_108, _message_1);
    final _el_110 = import16.appendSpan(doc, _el_107);
    addShimE(_el_110);
    final _text_111 = import16.appendText(_el_110, _message_37);
    final _el_112 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_112);
    final _el_113 = import16.appendElement(doc, _el_112, 'li');
    this.updateChildClass(_el_113, 'added');
    addShimE(_el_113);
    final _text_114 = import16.appendText(_el_113, _message_38);
    final _el_115 = import16.appendElement(doc, _el_112, 'li');
    this.updateChildClass(_el_115, 'added');
    addShimE(_el_115);
    final _text_116 = import16.appendText(_el_115, _message_39);
    final _el_117 = import16.appendElement(doc, _el_112, 'li');
    this.updateChildClass(_el_117, 'added');
    addShimE(_el_117);
    final _text_118 = import16.appendText(_el_117, _message_40);
    final _el_119 = import16.appendElement(doc, _el_112, 'li');
    this.updateChildClass(_el_119, 'added');
    addShimE(_el_119);
    final _text_120 = import16.appendText(_el_119, _message_41);
    final _el_121 = import16.appendElement(doc, _el_112, 'li');
    this.updateChildClass(_el_121, 'added');
    addShimE(_el_121);
    final _text_122 = import16.appendText(_el_121, _message_42);
    final _el_123 = import16.appendElement(doc, _el_112, 'li');
    this.updateChildClass(_el_123, 'added');
    addShimE(_el_123);
    final _text_124 = import16.appendText(_el_123, _message_43);
    final _el_125 = import16.appendElement(doc, _el_112, 'li');
    this.updateChildClass(_el_125, 'added');
    addShimE(_el_125);
    final _text_126 = import16.appendText(_el_125, _message_44);
    final _el_127 = import16.appendElement(doc, _el_112, 'li');
    this.updateChildClass(_el_127, 'added');
    addShimE(_el_127);
    final _text_128 = import16.appendText(_el_127, _message_45);
    final _el_129 = import16.appendElement(doc, _el_112, 'li');
    this.updateChildClass(_el_129, 'fixed');
    addShimE(_el_129);
    final _text_130 = import16.appendText(_el_129, _message_46);
    final _el_131 = import16.appendElement(doc, _el_112, 'li');
    this.updateChildClass(_el_131, 'fixed');
    addShimE(_el_131);
    final _text_132 = import16.appendText(_el_131, _message_47);
    final _el_133 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_133);
    final _el_134 = import16.appendSpan(doc, _el_133);
    addShimE(_el_134);
    final _text_135 = import16.appendText(_el_134, _message_1);
    final _el_136 = import16.appendSpan(doc, _el_133);
    addShimE(_el_136);
    final _text_137 = import16.appendText(_el_136, _message_48);
    final _el_138 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_138);
    final _el_139 = import16.appendElement(doc, _el_138, 'li');
    this.updateChildClass(_el_139, 'added');
    addShimE(_el_139);
    final _text_140 = import16.appendText(_el_139, _message_49);
    final _el_141 = import16.appendElement(doc, _el_138, 'li');
    this.updateChildClass(_el_141, 'fixed');
    addShimE(_el_141);
    final _text_142 = import16.appendText(_el_141, _message_50);
    final _el_143 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_143);
    final _el_144 = import16.appendSpan(doc, _el_143);
    addShimE(_el_144);
    final _text_145 = import16.appendText(_el_144, _message_1);
    final _el_146 = import16.appendSpan(doc, _el_143);
    addShimE(_el_146);
    final _text_147 = import16.appendText(_el_146, _message_51);
    final _el_148 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_148);
    final _el_149 = import16.appendElement(doc, _el_148, 'li');
    this.updateChildClass(_el_149, 'added');
    addShimE(_el_149);
    final _text_150 = import16.appendText(_el_149, _message_52);
    final _el_151 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_151);
    final _el_152 = import16.appendSpan(doc, _el_151);
    addShimE(_el_152);
    final _text_153 = import16.appendText(_el_152, _message_1);
    final _el_154 = import16.appendSpan(doc, _el_151);
    addShimE(_el_154);
    final _text_155 = import16.appendText(_el_154, _message_53);
    final _el_156 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_156);
    final _el_157 = import16.appendElement(doc, _el_156, 'li');
    this.updateChildClass(_el_157, 'changed');
    addShimE(_el_157);
    final _text_158 = import16.appendText(_el_157, _message_54);
    final _el_159 = import16.appendElement(doc, _el_156, 'li');
    this.updateChildClass(_el_159, 'changed');
    addShimE(_el_159);
    final _text_160 = import16.appendText(_el_159, _message_55);
    final _el_161 = import16.appendElement(doc, _el_156, 'li');
    this.updateChildClass(_el_161, 'fixed');
    addShimE(_el_161);
    final _text_162 = import16.appendText(_el_161, _message_56);
    final _el_163 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_163);
    final _el_164 = import16.appendSpan(doc, _el_163);
    addShimE(_el_164);
    final _text_165 = import16.appendText(_el_164, _message_1);
    final _el_166 = import16.appendSpan(doc, _el_163);
    addShimE(_el_166);
    final _text_167 = import16.appendText(_el_166, _message_57);
    final _el_168 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_168);
    final _el_169 = import16.appendElement(doc, _el_168, 'li');
    this.updateChildClass(_el_169, 'added');
    addShimE(_el_169);
    final _text_170 = import16.appendText(_el_169, _message_58);
    final _el_171 = import16.appendElement(doc, _el_168, 'li');
    this.updateChildClass(_el_171, 'fixed');
    addShimE(_el_171);
    final _text_172 = import16.appendText(_el_171, _message_59);
    final _el_173 = import16.appendElement(doc, _el_168, 'li');
    this.updateChildClass(_el_173, 'fixed');
    addShimE(_el_173);
    final _text_174 = import16.appendText(_el_173, _message_60);
    final _el_175 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_175);
    final _el_176 = import16.appendSpan(doc, _el_175);
    addShimE(_el_176);
    final _text_177 = import16.appendText(_el_176, _message_1);
    final _el_178 = import16.appendSpan(doc, _el_175);
    addShimE(_el_178);
    final _text_179 = import16.appendText(_el_178, _message_61);
    final _el_180 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_180);
    final _el_181 = import16.appendElement(doc, _el_180, 'li');
    this.updateChildClass(_el_181, 'added');
    addShimE(_el_181);
    final _text_182 = import16.appendText(_el_181, _message_62);
    final _el_183 = import16.appendElement(doc, _el_180, 'li');
    this.updateChildClass(_el_183, 'fixed');
    addShimE(_el_183);
    final _text_184 = import16.appendText(_el_183, _message_63);
    final _el_185 = import16.appendElement(doc, _el_180, 'li');
    this.updateChildClass(_el_185, 'fixed');
    addShimE(_el_185);
    final _text_186 = import16.appendText(_el_185, _message_64);
    final _el_187 = import16.appendElement(doc, _el_180, 'li');
    this.updateChildClass(_el_187, 'fixed');
    addShimE(_el_187);
    final _text_188 = import16.appendText(_el_187, _message_65);
    final _el_189 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_189);
    final _el_190 = import16.appendSpan(doc, _el_189);
    addShimE(_el_190);
    final _text_191 = import16.appendText(_el_190, _message_1);
    final _el_192 = import16.appendSpan(doc, _el_189);
    addShimE(_el_192);
    final _text_193 = import16.appendText(_el_192, _message_66);
    final _el_194 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_194);
    final _el_195 = import16.appendElement(doc, _el_194, 'li');
    this.updateChildClass(_el_195, 'added');
    addShimE(_el_195);
    final _text_196 = import16.appendText(_el_195, _message_67);
    final _el_197 = import16.appendElement(doc, _el_194, 'li');
    this.updateChildClass(_el_197, 'changed');
    addShimE(_el_197);
    final _text_198 = import16.appendText(_el_197, _message_68);
    final _el_199 = import16.appendElement(doc, _el_194, 'li');
    this.updateChildClass(_el_199, 'changed');
    addShimE(_el_199);
    final _text_200 = import16.appendText(_el_199, _message_69);
    final _el_201 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_201);
    final _el_202 = import16.appendSpan(doc, _el_201);
    addShimE(_el_202);
    final _text_203 = import16.appendText(_el_202, _message_1);
    final _el_204 = import16.appendSpan(doc, _el_201);
    addShimE(_el_204);
    final _text_205 = import16.appendText(_el_204, _message_70);
    final _el_206 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_206);
    final _el_207 = import16.appendElement(doc, _el_206, 'li');
    this.updateChildClass(_el_207, 'fixed');
    addShimE(_el_207);
    final _text_208 = import16.appendText(_el_207, _message_71);
    final _el_209 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_209);
    final _el_210 = import16.appendSpan(doc, _el_209);
    addShimE(_el_210);
    final _text_211 = import16.appendText(_el_210, _message_1);
    final _el_212 = import16.appendSpan(doc, _el_209);
    addShimE(_el_212);
    final _text_213 = import16.appendText(_el_212, _message_72);
    final _el_214 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_214);
    final _el_215 = import16.appendElement(doc, _el_214, 'li');
    this.updateChildClass(_el_215, 'changed');
    addShimE(_el_215);
    final _text_216 = import16.appendText(_el_215, _message_73);
    final _el_217 = import16.appendElement(doc, _el_214, 'li');
    this.updateChildClass(_el_217, 'fixed');
    addShimE(_el_217);
    final _text_218 = import16.appendText(_el_217, _message_74);
    final _el_219 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_219);
    final _el_220 = import16.appendSpan(doc, _el_219);
    addShimE(_el_220);
    final _text_221 = import16.appendText(_el_220, _message_1);
    final _el_222 = import16.appendSpan(doc, _el_219);
    addShimE(_el_222);
    final _text_223 = import16.appendText(_el_222, _message_75);
    final _el_224 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_224);
    final _el_225 = import16.appendElement(doc, _el_224, 'li');
    this.updateChildClass(_el_225, 'added');
    addShimE(_el_225);
    final _text_226 = import16.appendText(_el_225, _message_76);
    final _el_227 = import16.appendElement(doc, _el_224, 'li');
    this.updateChildClass(_el_227, 'fixed');
    addShimE(_el_227);
    final _text_228 = import16.appendText(_el_227, _message_77);
    final _el_229 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_229);
    final _el_230 = import16.appendSpan(doc, _el_229);
    addShimE(_el_230);
    final _text_231 = import16.appendText(_el_230, _message_1);
    final _el_232 = import16.appendSpan(doc, _el_229);
    addShimE(_el_232);
    final _text_233 = import16.appendText(_el_232, _message_78);
    final _el_234 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_234);
    final _el_235 = import16.appendElement(doc, _el_234, 'li');
    this.updateChildClass(_el_235, 'added');
    addShimE(_el_235);
    final _text_236 = import16.appendText(_el_235, _message_79);
    final _el_237 = import16.appendElement(doc, _el_234, 'li');
    this.updateChildClass(_el_237, 'added');
    addShimE(_el_237);
    final _text_238 = import16.appendText(_el_237, _message_80);
    final _el_239 = import16.appendElement(doc, _el_234, 'li');
    this.updateChildClass(_el_239, 'added');
    addShimE(_el_239);
    final _text_240 = import16.appendText(_el_239, _message_81);
    final _el_241 = import16.appendElement(doc, _el_234, 'li');
    this.updateChildClass(_el_241, 'added');
    addShimE(_el_241);
    final _text_242 = import16.appendText(_el_241, _message_82);
    final _el_243 = import16.appendElement(doc, _el_234, 'li');
    this.updateChildClass(_el_243, 'added');
    addShimE(_el_243);
    final _text_244 = import16.appendText(_el_243, _message_83);
    final _el_245 = import16.appendElement(doc, _el_234, 'li');
    this.updateChildClass(_el_245, 'added');
    addShimE(_el_245);
    final _text_246 = import16.appendText(_el_245, _message_84);
    final _el_247 = import16.appendElement(doc, _el_234, 'li');
    this.updateChildClass(_el_247, 'added');
    addShimE(_el_247);
    final _text_248 = import16.appendText(_el_247, _message_85);
    final _el_249 = import16.appendElement(doc, _el_234, 'li');
    this.updateChildClass(_el_249, 'removed');
    addShimE(_el_249);
    final _text_250 = import16.appendText(_el_249, _message_86);
    final _el_251 = import16.appendElement(doc, _el_234, 'li');
    this.updateChildClass(_el_251, 'fixed');
    addShimE(_el_251);
    final _text_252 = import16.appendText(_el_251, _message_87);
    final _el_253 = import16.appendElement(doc, _el_234, 'li');
    this.updateChildClass(_el_253, 'fixed');
    addShimE(_el_253);
    final _text_254 = import16.appendText(_el_253, _message_88);
    final _el_255 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_255);
    final _el_256 = import16.appendSpan(doc, _el_255);
    addShimE(_el_256);
    final _text_257 = import16.appendText(_el_256, _message_1);
    final _el_258 = import16.appendSpan(doc, _el_255);
    addShimE(_el_258);
    final _text_259 = import16.appendText(_el_258, _message_89);
    final _el_260 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_260);
    final _el_261 = import16.appendElement(doc, _el_260, 'li');
    this.updateChildClass(_el_261, 'added');
    addShimE(_el_261);
    final _text_262 = import16.appendText(_el_261, _message_90);
    final _el_263 = import16.appendElement(doc, _el_260, 'li');
    this.updateChildClass(_el_263, 'fixed');
    addShimE(_el_263);
    final _text_264 = import16.appendText(_el_263, _message_91);
    final _el_265 = import16.appendElement(doc, _el_260, 'li');
    this.updateChildClass(_el_265, 'fixed');
    addShimE(_el_265);
    final _text_266 = import16.appendText(_el_265, _message_92);
    final _el_267 = import16.appendElement(doc, _el_260, 'li');
    this.updateChildClass(_el_267, 'fixed');
    addShimE(_el_267);
    final _text_268 = import16.appendText(_el_267, _message_93);
    final _el_269 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_269);
    final _el_270 = import16.appendSpan(doc, _el_269);
    addShimE(_el_270);
    final _text_271 = import16.appendText(_el_270, _message_1);
    final _el_272 = import16.appendSpan(doc, _el_269);
    addShimE(_el_272);
    final _text_273 = import16.appendText(_el_272, _message_94);
    final _el_274 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_274);
    final _el_275 = import16.appendElement(doc, _el_274, 'li');
    this.updateChildClass(_el_275, 'added');
    addShimE(_el_275);
    final _text_276 = import16.appendText(_el_275, _message_95);
    final _el_277 = import16.appendElement(doc, _el_274, 'li');
    this.updateChildClass(_el_277, 'changed');
    addShimE(_el_277);
    final _text_278 = import16.appendText(_el_277, _message_96);
    final _el_279 = import16.appendElement(doc, _el_274, 'li');
    this.updateChildClass(_el_279, 'fixed');
    addShimE(_el_279);
    final _text_280 = import16.appendText(_el_279, _message_97);
    final _el_281 = import16.appendElement(doc, _el_274, 'li');
    this.updateChildClass(_el_281, 'fixed');
    addShimE(_el_281);
    final _text_282 = import16.appendText(_el_281, _message_98);
    final _el_283 = import16.appendElement(doc, _el_274, 'li');
    this.updateChildClass(_el_283, 'fixed');
    addShimE(_el_283);
    final _text_284 = import16.appendText(_el_283, _message_99);
    final _el_285 = import16.appendElement(doc, _el_274, 'li');
    this.updateChildClass(_el_285, 'fixed');
    addShimE(_el_285);
    final _text_286 = import16.appendText(_el_285, _message_100);
    final _el_287 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_287);
    final _el_288 = import16.appendSpan(doc, _el_287);
    addShimE(_el_288);
    final _text_289 = import16.appendText(_el_288, _message_1);
    final _el_290 = import16.appendSpan(doc, _el_287);
    addShimE(_el_290);
    final _text_291 = import16.appendText(_el_290, _message_101);
    final _el_292 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_292);
    final _el_293 = import16.appendElement(doc, _el_292, 'li');
    this.updateChildClass(_el_293, 'added');
    addShimE(_el_293);
    final _text_294 = import16.appendText(_el_293, _message_102);
    final _el_295 = import16.appendElement(doc, _el_292, 'li');
    this.updateChildClass(_el_295, 'added');
    addShimE(_el_295);
    final _text_296 = import16.appendText(_el_295, _message_103);
    final _el_297 = import16.appendElement(doc, _el_292, 'li');
    this.updateChildClass(_el_297, 'added');
    addShimE(_el_297);
    final _text_298 = import16.appendText(_el_297, _message_104);
    final _el_299 = import16.appendElement(doc, _el_292, 'li');
    this.updateChildClass(_el_299, 'added');
    addShimE(_el_299);
    final _text_300 = import16.appendText(_el_299, _message_105);
    final _el_301 = import16.appendElement(doc, _el_292, 'li');
    this.updateChildClass(_el_301, 'added');
    addShimE(_el_301);
    final _text_302 = import16.appendText(_el_301, _message_106);
    final _el_303 = import16.appendElement(doc, _el_292, 'li');
    this.updateChildClass(_el_303, 'added');
    addShimE(_el_303);
    final _text_304 = import16.appendText(_el_303, _message_107);
    final _el_305 = import16.appendElement(doc, _el_292, 'li');
    this.updateChildClass(_el_305, 'added');
    addShimE(_el_305);
    final _text_306 = import16.appendText(_el_305, _message_108);
    final _el_307 = import16.appendElement(doc, _el_292, 'li');
    this.updateChildClass(_el_307, 'added');
    addShimE(_el_307);
    final _text_308 = import16.appendText(_el_307, _message_109);
    final _el_309 = import16.appendElement(doc, _el_292, 'li');
    this.updateChildClass(_el_309, 'added');
    addShimE(_el_309);
    final _text_310 = import16.appendText(_el_309, _message_110);
    final _el_311 = import16.appendElement(doc, _el_292, 'li');
    this.updateChildClass(_el_311, 'changed');
    addShimE(_el_311);
    final _text_312 = import16.appendText(_el_311, _message_111);
    final _el_313 = import16.appendElement(doc, _el_292, 'li');
    this.updateChildClass(_el_313, 'changed');
    addShimE(_el_313);
    final _text_314 = import16.appendText(_el_313, _message_112);
    final _el_315 = import16.appendElement(doc, _el_292, 'li');
    this.updateChildClass(_el_315, 'fixed');
    addShimE(_el_315);
    final _text_316 = import16.appendText(_el_315, _message_113);
    final _el_317 = import16.appendElement(doc, _el_292, 'li');
    this.updateChildClass(_el_317, 'fixed');
    addShimE(_el_317);
    final _text_318 = import16.appendText(_el_317, _message_114);
    final _el_319 = import16.appendElement(doc, _el_292, 'li');
    this.updateChildClass(_el_319, 'fixed');
    addShimE(_el_319);
    final _text_320 = import16.appendText(_el_319, _message_115);
    final _el_321 = import16.appendElement(doc, _el_292, 'li');
    this.updateChildClass(_el_321, 'fixed');
    addShimE(_el_321);
    final _text_322 = import16.appendText(_el_321, _message_116);
    final _el_323 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_323);
    final _el_324 = import16.appendSpan(doc, _el_323);
    addShimE(_el_324);
    final _text_325 = import16.appendText(_el_324, _message_1);
    final _el_326 = import16.appendSpan(doc, _el_323);
    addShimE(_el_326);
    final _text_327 = import16.appendText(_el_326, _message_117);
    final _el_328 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_328);
    final _el_329 = import16.appendElement(doc, _el_328, 'li');
    this.updateChildClass(_el_329, 'fixed');
    addShimE(_el_329);
    final _text_330 = import16.appendText(_el_329, _message_118);
    final _el_331 = import16.appendElement(doc, _el_328, 'li');
    this.updateChildClass(_el_331, 'fixed');
    addShimE(_el_331);
    final _text_332 = import16.appendText(_el_331, _message_119);
    final _el_333 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_333);
    final _el_334 = import16.appendSpan(doc, _el_333);
    addShimE(_el_334);
    final _text_335 = import16.appendText(_el_334, _message_1);
    final _el_336 = import16.appendSpan(doc, _el_333);
    addShimE(_el_336);
    final _text_337 = import16.appendText(_el_336, _message_120);
    final _el_338 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_338);
    final _el_339 = import16.appendElement(doc, _el_338, 'li');
    this.updateChildClass(_el_339, 'added');
    addShimE(_el_339);
    final _text_340 = import16.appendText(_el_339, _message_121);
    final _el_341 = import16.appendElement(doc, _el_338, 'li');
    this.updateChildClass(_el_341, 'added');
    addShimE(_el_341);
    final _text_342 = import16.appendText(_el_341, _message_122);
    final _el_343 = import16.appendElement(doc, _el_338, 'li');
    this.updateChildClass(_el_343, 'fixed');
    addShimE(_el_343);
    final _text_344 = import16.appendText(_el_343, _message_123);
    final _el_345 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_345);
    final _el_346 = import16.appendSpan(doc, _el_345);
    addShimE(_el_346);
    final _text_347 = import16.appendText(_el_346, _message_1);
    final _el_348 = import16.appendSpan(doc, _el_345);
    addShimE(_el_348);
    final _text_349 = import16.appendText(_el_348, _message_124);
    final _el_350 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_350);
    final _el_351 = import16.appendElement(doc, _el_350, 'li');
    this.updateChildClass(_el_351, 'added');
    addShimE(_el_351);
    final _text_352 = import16.appendText(_el_351, _message_125);
    final _el_353 = import16.appendElement(doc, _el_350, 'li');
    this.updateChildClass(_el_353, 'changed');
    addShimE(_el_353);
    final _text_354 = import16.appendText(_el_353, _message_126);
    final _el_355 = import16.appendElement(doc, _el_350, 'li');
    this.updateChildClass(_el_355, 'changed');
    addShimE(_el_355);
    final _text_356 = import16.appendText(_el_355, _message_127);
    final _el_357 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_357);
    final _el_358 = import16.appendSpan(doc, _el_357);
    addShimE(_el_358);
    final _text_359 = import16.appendText(_el_358, _message_1);
    final _el_360 = import16.appendSpan(doc, _el_357);
    addShimE(_el_360);
    final _text_361 = import16.appendText(_el_360, _message_128);
    final _el_362 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_362);
    final _el_363 = import16.appendElement(doc, _el_362, 'li');
    this.updateChildClass(_el_363, 'added');
    addShimE(_el_363);
    final _text_364 = import16.appendText(_el_363, _message_129);
    final _el_365 = import16.appendElement(doc, _el_362, 'li');
    this.updateChildClass(_el_365, 'added');
    addShimE(_el_365);
    final _text_366 = import16.appendText(_el_365, _message_130);
    final _el_367 = import16.appendElement(doc, _el_362, 'li');
    this.updateChildClass(_el_367, 'added');
    addShimE(_el_367);
    final _text_368 = import16.appendText(_el_367, _message_131);
    final _el_369 = import16.appendElement(doc, _el_362, 'li');
    this.updateChildClass(_el_369, 'added');
    addShimE(_el_369);
    final _text_370 = import16.appendText(_el_369, _message_132);
    final _el_371 = import16.appendElement(doc, _el_362, 'li');
    this.updateChildClass(_el_371, 'fixed');
    addShimE(_el_371);
    final _text_372 = import16.appendText(_el_371, _message_133);
    final _el_373 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_373);
    final _el_374 = import16.appendSpan(doc, _el_373);
    addShimE(_el_374);
    final _text_375 = import16.appendText(_el_374, _message_1);
    final _el_376 = import16.appendSpan(doc, _el_373);
    addShimE(_el_376);
    final _text_377 = import16.appendText(_el_376, _message_134);
    final _el_378 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_378);
    final _el_379 = import16.appendElement(doc, _el_378, 'li');
    this.updateChildClass(_el_379, 'changed');
    addShimE(_el_379);
    final _text_380 = import16.appendText(_el_379, _message_135);
    final _el_381 = import16.appendElement(doc, _el_378, 'li');
    this.updateChildClass(_el_381, 'fixed');
    addShimE(_el_381);
    final _text_382 = import16.appendText(_el_381, _message_136);
    final _el_383 = import16.appendElement(doc, _el_378, 'li');
    this.updateChildClass(_el_383, 'fixed');
    addShimE(_el_383);
    final _text_384 = import16.appendText(_el_383, _message_137);
    final _el_385 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_385);
    final _el_386 = import16.appendSpan(doc, _el_385);
    addShimE(_el_386);
    final _text_387 = import16.appendText(_el_386, _message_1);
    final _el_388 = import16.appendSpan(doc, _el_385);
    addShimE(_el_388);
    final _text_389 = import16.appendText(_el_388, _message_138);
    final _el_390 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_390);
    final _el_391 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_391, 'added');
    addShimE(_el_391);
    final _text_392 = import16.appendText(_el_391, _message_139);
    final _el_393 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_393, 'added');
    addShimE(_el_393);
    final _text_394 = import16.appendText(_el_393, _message_140);
    final _el_395 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_395, 'added');
    addShimE(_el_395);
    final _text_396 = import16.appendText(_el_395, _message_141);
    final _el_397 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_397, 'added');
    addShimE(_el_397);
    final _text_398 = import16.appendText(_el_397, _message_142);
    final _el_399 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_399, 'added');
    addShimE(_el_399);
    final _text_400 = import16.appendText(_el_399, _message_143);
    final _el_401 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_401, 'added');
    addShimE(_el_401);
    final _text_402 = import16.appendText(_el_401, _message_144);
    final _el_403 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_403, 'added');
    addShimE(_el_403);
    final _text_404 = import16.appendText(_el_403, _message_145);
    final _el_405 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_405, 'added');
    addShimE(_el_405);
    final _text_406 = import16.appendText(_el_405, _message_146);
    final _el_407 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_407, 'changed');
    addShimE(_el_407);
    final _text_408 = import16.appendText(_el_407, _message_147);
    final _el_409 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_409, 'changed');
    addShimE(_el_409);
    final _text_410 = import16.appendText(_el_409, _message_148);
    final _el_411 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_411, 'changed');
    addShimE(_el_411);
    final _text_412 = import16.appendText(_el_411, _message_149);
    final _el_413 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_413, 'changed');
    addShimE(_el_413);
    final _text_414 = import16.appendText(_el_413, _message_150);
    final _el_415 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_415, 'changed');
    addShimE(_el_415);
    final _text_416 = import16.appendText(_el_415, _message_151);
    final _el_417 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_417, 'fixed');
    addShimE(_el_417);
    final _text_418 = import16.appendText(_el_417, _message_152);
    final _el_419 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_419, 'fixed');
    addShimE(_el_419);
    final _text_420 = import16.appendText(_el_419, _message_153);
    final _el_421 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_421, 'fixed');
    addShimE(_el_421);
    final _text_422 = import16.appendText(_el_421, _message_154);
    final _el_423 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_423, 'fixed');
    addShimE(_el_423);
    final _text_424 = import16.appendText(_el_423, _message_155);
    final _el_425 = import16.appendElement(doc, _el_390, 'li');
    this.updateChildClass(_el_425, 'fixed');
    addShimE(_el_425);
    final _text_426 = import16.appendText(_el_425, _message_156);
    final _el_427 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_427);
    final _el_428 = import16.appendSpan(doc, _el_427);
    addShimE(_el_428);
    final _text_429 = import16.appendText(_el_428, _message_1);
    final _el_430 = import16.appendSpan(doc, _el_427);
    addShimE(_el_430);
    final _text_431 = import16.appendText(_el_430, _message_157);
    final _el_432 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_432);
    final _el_433 = import16.appendElement(doc, _el_432, 'li');
    this.updateChildClass(_el_433, 'added');
    addShimE(_el_433);
    final _text_434 = import16.appendText(_el_433, _message_158);
    final _el_435 = import16.appendElement(doc, _el_432, 'li');
    this.updateChildClass(_el_435, 'fixed');
    addShimE(_el_435);
    final _text_436 = import16.appendText(_el_435, _message_159);
    final _el_437 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_437);
    final _el_438 = import16.appendSpan(doc, _el_437);
    addShimE(_el_438);
    final _text_439 = import16.appendText(_el_438, _message_1);
    final _el_440 = import16.appendSpan(doc, _el_437);
    addShimE(_el_440);
    final _text_441 = import16.appendText(_el_440, _message_160);
    final _el_442 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_442);
    final _el_443 = import16.appendElement(doc, _el_442, 'li');
    this.updateChildClass(_el_443, 'fixed');
    addShimE(_el_443);
    final _text_444 = import16.appendText(_el_443, _message_161);
    final _el_445 = import16.appendElement(doc, _el_442, 'li');
    this.updateChildClass(_el_445, 'fixed');
    addShimE(_el_445);
    final _text_446 = import16.appendText(_el_445, _message_162);
    final _el_447 = import16.appendElement(doc, _el_442, 'li');
    this.updateChildClass(_el_447, 'fixed');
    addShimE(_el_447);
    final _text_448 = import16.appendText(_el_447, _message_163);
    final _el_449 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_449);
    final _el_450 = import16.appendSpan(doc, _el_449);
    addShimE(_el_450);
    final _text_451 = import16.appendText(_el_450, _message_1);
    final _el_452 = import16.appendSpan(doc, _el_449);
    addShimE(_el_452);
    final _text_453 = import16.appendText(_el_452, _message_164);
    final _el_454 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_454);
    final _el_455 = import16.appendElement(doc, _el_454, 'li');
    this.updateChildClass(_el_455, 'added');
    addShimE(_el_455);
    final _text_456 = import16.appendText(_el_455, _message_165);
    final _el_457 = import16.appendElement(doc, _el_454, 'li');
    this.updateChildClass(_el_457, 'fixed');
    addShimE(_el_457);
    final _text_458 = import16.appendText(_el_457, _message_166);
    final _el_459 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_459);
    final _el_460 = import16.appendSpan(doc, _el_459);
    addShimE(_el_460);
    final _text_461 = import16.appendText(_el_460, _message_1);
    final _el_462 = import16.appendSpan(doc, _el_459);
    addShimE(_el_462);
    final _text_463 = import16.appendText(_el_462, _message_167);
    final _el_464 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_464);
    final _el_465 = import16.appendElement(doc, _el_464, 'li');
    this.updateChildClass(_el_465, 'added');
    addShimE(_el_465);
    final _text_466 = import16.appendText(_el_465, _message_168);
    final _el_467 = import16.appendElement(doc, _el_464, 'li');
    this.updateChildClass(_el_467, 'added');
    addShimE(_el_467);
    final _text_468 = import16.appendText(_el_467, _message_169);
    final _el_469 = import16.appendElement(doc, _el_464, 'li');
    this.updateChildClass(_el_469, 'changed');
    addShimE(_el_469);
    final _text_470 = import16.appendText(_el_469, _message_170);
    final _el_471 = import16.appendElement(doc, _el_464, 'li');
    this.updateChildClass(_el_471, 'changed');
    addShimE(_el_471);
    final _text_472 = import16.appendText(_el_471, _message_171);
    final _el_473 = import16.appendElement(doc, _el_464, 'li');
    this.updateChildClass(_el_473, 'fixed');
    addShimE(_el_473);
    final _text_474 = import16.appendText(_el_473, _message_172);
    final _el_475 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_475);
    final _el_476 = import16.appendSpan(doc, _el_475);
    addShimE(_el_476);
    final _text_477 = import16.appendText(_el_476, _message_1);
    final _el_478 = import16.appendSpan(doc, _el_475);
    addShimE(_el_478);
    final _text_479 = import16.appendText(_el_478, _message_173);
    final _el_480 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_480);
    final _el_481 = import16.appendElement(doc, _el_480, 'li');
    this.updateChildClass(_el_481, 'added');
    addShimE(_el_481);
    final _text_482 = import16.appendText(_el_481, _message_174);
    final _el_483 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_483);
    final _el_484 = import16.appendSpan(doc, _el_483);
    addShimE(_el_484);
    final _text_485 = import16.appendText(_el_484, _message_1);
    final _el_486 = import16.appendSpan(doc, _el_483);
    addShimE(_el_486);
    final _text_487 = import16.appendText(_el_486, _message_175);
    final _el_488 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_488);
    final _el_489 = import16.appendElement(doc, _el_488, 'li');
    this.updateChildClass(_el_489, 'added');
    addShimE(_el_489);
    final _text_490 = import16.appendText(_el_489, _message_176);
    final _el_491 = import16.appendElement(doc, _el_488, 'li');
    this.updateChildClass(_el_491, 'changed');
    addShimE(_el_491);
    final _text_492 = import16.appendText(_el_491, _message_177);
    final _el_493 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_493);
    final _el_494 = import16.appendSpan(doc, _el_493);
    addShimE(_el_494);
    final _text_495 = import16.appendText(_el_494, _message_1);
    final _el_496 = import16.appendSpan(doc, _el_493);
    addShimE(_el_496);
    final _text_497 = import16.appendText(_el_496, _message_178);
    final _el_498 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_498);
    final _el_499 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_499, 'added');
    addShimE(_el_499);
    final _text_500 = import16.appendText(_el_499, _message_179);
    final _el_501 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_501, 'added');
    addShimE(_el_501);
    final _text_502 = import16.appendText(_el_501, _message_180);
    final _el_503 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_503, 'added');
    addShimE(_el_503);
    final _text_504 = import16.appendText(_el_503, _message_181);
    final _el_505 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_505, 'added');
    addShimE(_el_505);
    final _text_506 = import16.appendText(_el_505, _message_182);
    final _el_507 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_507, 'added');
    addShimE(_el_507);
    final _text_508 = import16.appendText(_el_507, _message_183);
    final _el_509 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_509, 'added');
    addShimE(_el_509);
    final _text_510 = import16.appendText(_el_509, _message_184);
    final _el_511 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_511, 'added');
    addShimE(_el_511);
    final _text_512 = import16.appendText(_el_511, _message_185);
    final _el_513 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_513, 'added');
    addShimE(_el_513);
    final _text_514 = import16.appendText(_el_513, _message_186);
    final _el_515 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_515, 'added');
    addShimE(_el_515);
    final _text_516 = import16.appendText(_el_515, _message_187);
    final _el_517 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_517, 'changed');
    addShimE(_el_517);
    final _text_518 = import16.appendText(_el_517, _message_188);
    final _el_519 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_519, 'changed');
    addShimE(_el_519);
    final _text_520 = import16.appendText(_el_519, _message_189);
    final _el_521 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_521, 'changed');
    addShimE(_el_521);
    final _text_522 = import16.appendText(_el_521, _message_190);
    final _el_523 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_523, 'changed');
    addShimE(_el_523);
    final _text_524 = import16.appendText(_el_523, _message_191);
    final _el_525 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_525, 'changed');
    addShimE(_el_525);
    final _text_526 = import16.appendText(_el_525, _message_192);
    final _el_527 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_527, 'fixed');
    addShimE(_el_527);
    final _text_528 = import16.appendText(_el_527, _message_193);
    final _el_529 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_529, 'fixed');
    addShimE(_el_529);
    final _text_530 = import16.appendText(_el_529, _message_194);
    final _el_531 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_531, 'fixed');
    addShimE(_el_531);
    final _text_532 = import16.appendText(_el_531, _message_195);
    final _el_533 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_533, 'fixed');
    addShimE(_el_533);
    final _text_534 = import16.appendText(_el_533, _message_196);
    final _el_535 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_535, 'fixed');
    addShimE(_el_535);
    final _text_536 = import16.appendText(_el_535, _message_197);
    final _el_537 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_537, 'fixed');
    addShimE(_el_537);
    final _text_538 = import16.appendText(_el_537, _message_198);
    final _el_539 = import16.appendElement(doc, _el_498, 'li');
    this.updateChildClass(_el_539, 'fixed');
    addShimE(_el_539);
    final _text_540 = import16.appendText(_el_539, _message_199);
    final _el_541 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_541);
    final _el_542 = import16.appendSpan(doc, _el_541);
    addShimE(_el_542);
    final _text_543 = import16.appendText(_el_542, _message_1);
    final _el_544 = import16.appendSpan(doc, _el_541);
    addShimE(_el_544);
    final _text_545 = import16.appendText(_el_544, _message_200);
    final _el_546 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_546);
    final _el_547 = import16.appendElement(doc, _el_546, 'li');
    this.updateChildClass(_el_547, 'added');
    addShimE(_el_547);
    final _text_548 = import16.appendText(_el_547, _message_201);
    final _el_549 = import16.appendElement(doc, _el_546, 'li');
    this.updateChildClass(_el_549, 'added');
    addShimE(_el_549);
    final _text_550 = import16.appendText(_el_549, _message_202);
    final _el_551 = import16.appendElement(doc, _el_546, 'li');
    this.updateChildClass(_el_551, 'added');
    addShimE(_el_551);
    final _text_552 = import16.appendText(_el_551, _message_203);
    final _el_553 = import16.appendElement(doc, _el_546, 'li');
    this.updateChildClass(_el_553, 'added');
    addShimE(_el_553);
    final _text_554 = import16.appendText(_el_553, _message_204);
    final _el_555 = import16.appendElement(doc, _el_546, 'li');
    this.updateChildClass(_el_555, 'changed');
    addShimE(_el_555);
    final _text_556 = import16.appendText(_el_555, _message_205);
    final _el_557 = import16.appendElement(doc, _el_546, 'li');
    this.updateChildClass(_el_557, 'changed');
    addShimE(_el_557);
    final _text_558 = import16.appendText(_el_557, _message_206);
    final _el_559 = import16.appendElement(doc, _el_546, 'li');
    this.updateChildClass(_el_559, 'changed');
    addShimE(_el_559);
    final _text_560 = import16.appendText(_el_559, _message_207);
    final _el_561 = import16.appendElement(doc, _el_546, 'li');
    this.updateChildClass(_el_561, 'changed');
    addShimE(_el_561);
    final _text_562 = import16.appendText(_el_561, _message_208);
    final _el_563 = import16.appendElement(doc, _el_546, 'li');
    this.updateChildClass(_el_563, 'changed');
    addShimE(_el_563);
    final _text_564 = import16.appendText(_el_563, _message_209);
    final _el_565 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_565);
    final _el_566 = import16.appendSpan(doc, _el_565);
    addShimE(_el_566);
    final _text_567 = import16.appendText(_el_566, _message_1);
    final _el_568 = import16.appendSpan(doc, _el_565);
    addShimE(_el_568);
    final _text_569 = import16.appendText(_el_568, _message_210);
    final _el_570 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_570);
    final _el_571 = import16.appendElement(doc, _el_570, 'li');
    this.updateChildClass(_el_571, 'changed');
    addShimE(_el_571);
    final _text_572 = import16.appendText(_el_571, _message_211);
    final _el_573 = import16.appendElement(doc, _el_570, 'li');
    this.updateChildClass(_el_573, 'fixed');
    addShimE(_el_573);
    final _text_574 = import16.appendText(_el_573, _message_212);
    final _el_575 = import16.appendElement(doc, _el_570, 'li');
    this.updateChildClass(_el_575, 'fixed');
    addShimE(_el_575);
    final _text_576 = import16.appendText(_el_575, _message_213);
    final _el_577 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_577);
    final _el_578 = import16.appendSpan(doc, _el_577);
    addShimE(_el_578);
    final _text_579 = import16.appendText(_el_578, _message_1);
    final _el_580 = import16.appendSpan(doc, _el_577);
    addShimE(_el_580);
    final _text_581 = import16.appendText(_el_580, _message_214);
    final _el_582 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_582);
    final _el_583 = import16.appendElement(doc, _el_582, 'li');
    this.updateChildClass(_el_583, 'fixed');
    addShimE(_el_583);
    final _text_584 = import16.appendText(_el_583, _message_215);
    final _el_585 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_585);
    final _el_586 = import16.appendSpan(doc, _el_585);
    addShimE(_el_586);
    final _text_587 = import16.appendText(_el_586, _message_1);
    final _el_588 = import16.appendSpan(doc, _el_585);
    addShimE(_el_588);
    final _text_589 = import16.appendText(_el_588, _message_216);
    final _el_590 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_590);
    final _el_591 = import16.appendElement(doc, _el_590, 'li');
    this.updateChildClass(_el_591, 'added');
    addShimE(_el_591);
    final _text_592 = import16.appendText(_el_591, _message_217);
    final _el_593 = import16.appendElement(doc, _el_590, 'li');
    this.updateChildClass(_el_593, 'fixed');
    addShimE(_el_593);
    final _text_594 = import16.appendText(_el_593, _message_218);
    final _el_595 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_595);
    final _el_596 = import16.appendSpan(doc, _el_595);
    addShimE(_el_596);
    final _text_597 = import16.appendText(_el_596, _message_1);
    final _el_598 = import16.appendSpan(doc, _el_595);
    addShimE(_el_598);
    final _text_599 = import16.appendText(_el_598, _message_219);
    final _el_600 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_600);
    final _el_601 = import16.appendElement(doc, _el_600, 'li');
    this.updateChildClass(_el_601, 'added');
    addShimE(_el_601);
    final _text_602 = import16.appendText(_el_601, _message_220);
    final _el_603 = import16.appendElement(doc, _el_600, 'li');
    this.updateChildClass(_el_603, 'added');
    addShimE(_el_603);
    final _text_604 = import16.appendText(_el_603, _message_221);
    final _el_605 = import16.appendElement(doc, _el_600, 'li');
    this.updateChildClass(_el_605, 'added');
    addShimE(_el_605);
    final _text_606 = import16.appendText(_el_605, _message_222);
    final _el_607 = import16.appendElement(doc, _el_600, 'li');
    this.updateChildClass(_el_607, 'changed');
    addShimE(_el_607);
    final _text_608 = import16.appendText(_el_607, _message_223);
    final _el_609 = import16.appendElement(doc, _el_600, 'li');
    this.updateChildClass(_el_609, 'fixed');
    addShimE(_el_609);
    final _text_610 = import16.appendText(_el_609, _message_224);
    final _el_611 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_611);
    final _el_612 = import16.appendSpan(doc, _el_611);
    addShimE(_el_612);
    final _text_613 = import16.appendText(_el_612, _message_1);
    final _el_614 = import16.appendSpan(doc, _el_611);
    addShimE(_el_614);
    final _text_615 = import16.appendText(_el_614, _message_225);
    final _el_616 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_616);
    final _el_617 = import16.appendElement(doc, _el_616, 'li');
    this.updateChildClass(_el_617, 'added');
    addShimE(_el_617);
    final _text_618 = import16.appendText(_el_617, _message_226);
    final _el_619 = import16.appendElement(doc, _el_616, 'li');
    this.updateChildClass(_el_619, 'added');
    addShimE(_el_619);
    final _text_620 = import16.appendText(_el_619, _message_227);
    final _el_621 = import16.appendElement(doc, _el_616, 'li');
    this.updateChildClass(_el_621, 'added');
    addShimE(_el_621);
    final _text_622 = import16.appendText(_el_621, _message_228);
    final _el_623 = import16.appendElement(doc, _el_616, 'li');
    this.updateChildClass(_el_623, 'added');
    addShimE(_el_623);
    final _text_624 = import16.appendText(_el_623, _message_229);
    final _el_625 = import16.appendElement(doc, _el_616, 'li');
    this.updateChildClass(_el_625, 'changed');
    addShimE(_el_625);
    final _text_626 = import16.appendText(_el_625, _message_230);
    final _el_627 = import16.appendElement(doc, _el_616, 'li');
    this.updateChildClass(_el_627, 'changed');
    addShimE(_el_627);
    final _text_628 = import16.appendText(_el_627, _message_231);
    final _el_629 = import16.appendElement(doc, _el_616, 'li');
    this.updateChildClass(_el_629, 'changed');
    addShimE(_el_629);
    final _text_630 = import16.appendText(_el_629, _message_232);
    final _el_631 = import16.appendElement(doc, _el_616, 'li');
    this.updateChildClass(_el_631, 'changed');
    addShimE(_el_631);
    final _text_632 = import16.appendText(_el_631, _message_233);
    final _el_633 = import16.appendElement(doc, _el_616, 'li');
    this.updateChildClass(_el_633, 'fixed');
    addShimE(_el_633);
    final _text_634 = import16.appendText(_el_633, _message_234);
    final _el_635 = import16.appendElement(doc, _el_616, 'li');
    this.updateChildClass(_el_635, 'fixed');
    addShimE(_el_635);
    final _text_636 = import16.appendText(_el_635, _message_235);
    final _el_637 = import16.appendElement(doc, _el_616, 'li');
    this.updateChildClass(_el_637, 'fixed');
    addShimE(_el_637);
    final _text_638 = import16.appendText(_el_637, _message_236);
    final _el_639 = import16.appendElement(doc, _el_616, 'li');
    this.updateChildClass(_el_639, 'fixed');
    addShimE(_el_639);
    final _text_640 = import16.appendText(_el_639, _message_237);
    final _el_641 = import16.appendElement(doc, _el_616, 'li');
    this.updateChildClass(_el_641, 'fixed');
    addShimE(_el_641);
    final _text_642 = import16.appendText(_el_641, _message_238);
    final _el_643 = import16.appendElement(doc, _el_616, 'li');
    this.updateChildClass(_el_643, 'fixed');
    addShimE(_el_643);
    final _text_644 = import16.appendText(_el_643, _message_239);
    final _el_645 = import16.appendElement(doc, _el_616, 'li');
    this.updateChildClass(_el_645, 'fixed');
    addShimE(_el_645);
    final _text_646 = import16.appendText(_el_645, _message_240);
    final _el_647 = import16.appendElement(doc, _el_616, 'li');
    this.updateChildClass(_el_647, 'fixed');
    addShimE(_el_647);
    final _text_648 = import16.appendText(_el_647, _message_241);
    final _el_649 = import16.appendElement(doc, _el_616, 'li');
    this.updateChildClass(_el_649, 'fixed');
    addShimE(_el_649);
    final _text_650 = import16.appendText(_el_649, _message_242);
    final _el_651 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_651);
    final _el_652 = import16.appendSpan(doc, _el_651);
    addShimE(_el_652);
    final _text_653 = import16.appendText(_el_652, _message_1);
    final _el_654 = import16.appendSpan(doc, _el_651);
    addShimE(_el_654);
    final _text_655 = import16.appendText(_el_654, _message_243);
    final _el_656 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_656);
    final _el_657 = import16.appendElement(doc, _el_656, 'li');
    this.updateChildClass(_el_657, 'added');
    addShimE(_el_657);
    final _text_658 = import16.appendText(_el_657, _message_244);
    final _el_659 = import16.appendElement(doc, _el_656, 'li');
    this.updateChildClass(_el_659, 'added');
    addShimE(_el_659);
    final _text_660 = import16.appendText(_el_659, _message_245);
    final _el_661 = import16.appendElement(doc, _el_656, 'li');
    this.updateChildClass(_el_661, 'added');
    addShimE(_el_661);
    final _text_662 = import16.appendText(_el_661, _message_246);
    final _el_663 = import16.appendElement(doc, _el_656, 'li');
    this.updateChildClass(_el_663, 'added');
    addShimE(_el_663);
    final _text_664 = import16.appendText(_el_663, _message_247);
    final _el_665 = import16.appendElement(doc, _el_656, 'li');
    this.updateChildClass(_el_665, 'added');
    addShimE(_el_665);
    final _text_666 = import16.appendText(_el_665, _message_248);
    final _el_667 = import16.appendElement(doc, _el_656, 'li');
    this.updateChildClass(_el_667, 'added');
    addShimE(_el_667);
    final _text_668 = import16.appendText(_el_667, _message_249);
    final _el_669 = import16.appendElement(doc, _el_656, 'li');
    this.updateChildClass(_el_669, 'added');
    addShimE(_el_669);
    final _text_670 = import16.appendText(_el_669, _message_250);
    final _el_671 = import16.appendElement(doc, _el_656, 'li');
    this.updateChildClass(_el_671, 'fixed');
    addShimE(_el_671);
    final _text_672 = import16.appendText(_el_671, _message_251);
    final _el_673 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_673);
    final _el_674 = import16.appendSpan(doc, _el_673);
    addShimE(_el_674);
    final _text_675 = import16.appendText(_el_674, _message_1);
    final _el_676 = import16.appendSpan(doc, _el_673);
    addShimE(_el_676);
    final _text_677 = import16.appendText(_el_676, _message_252);
    final _el_678 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_678);
    final _el_679 = import16.appendElement(doc, _el_678, 'li');
    this.updateChildClass(_el_679, 'added');
    addShimE(_el_679);
    final _text_680 = import16.appendText(_el_679, _message_253);
    final _el_681 = import16.appendElement(doc, _el_678, 'li');
    this.updateChildClass(_el_681, 'added');
    addShimE(_el_681);
    final _text_682 = import16.appendText(_el_681, _message_254);
    final _el_683 = import16.appendElement(doc, _el_678, 'li');
    this.updateChildClass(_el_683, 'added');
    addShimE(_el_683);
    final _text_684 = import16.appendText(_el_683, _message_255);
    final _el_685 = import16.appendElement(doc, _el_678, 'li');
    this.updateChildClass(_el_685, 'added');
    addShimE(_el_685);
    final _text_686 = import16.appendText(_el_685, _message_256);
    final _el_687 = import16.appendElement(doc, _el_678, 'li');
    this.updateChildClass(_el_687, 'changed');
    addShimE(_el_687);
    final _text_688 = import16.appendText(_el_687, _message_257);
    final _text_689 = import16.appendText(_el_687, ' ');
    final _el_690 = import16.appendElement(doc, _el_687, 'a');
    import16.setAttribute(_el_690, 'href', 'https://nightscout-reporter.zreptil.de/beta');
    import16.setAttribute(_el_690, 'target', '_blank');
    addShimC(_el_690);
    final _text_691 = import16.appendText(_el_690, _message_258);
    final _el_692 = import16.appendElement(doc, _el_678, 'li');
    this.updateChildClass(_el_692, 'fixed');
    addShimE(_el_692);
    final _text_693 = import16.appendText(_el_692, _message_259);
    final _el_694 = import16.appendElement(doc, _el_678, 'li');
    this.updateChildClass(_el_694, 'fixed');
    addShimE(_el_694);
    final _text_695 = import16.appendText(_el_694, _message_260);
    final _el_696 = import16.appendElement(doc, _el_678, 'li');
    this.updateChildClass(_el_696, 'fixed');
    addShimE(_el_696);
    final _text_697 = import16.appendText(_el_696, _message_261);
    final _el_698 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_698);
    final _el_699 = import16.appendSpan(doc, _el_698);
    addShimE(_el_699);
    final _text_700 = import16.appendText(_el_699, _message_1);
    final _el_701 = import16.appendSpan(doc, _el_698);
    addShimE(_el_701);
    final _text_702 = import16.appendText(_el_701, _message_262);
    final _el_703 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_703);
    final _el_704 = import16.appendElement(doc, _el_703, 'li');
    this.updateChildClass(_el_704, 'added');
    addShimE(_el_704);
    final _text_705 = import16.appendText(_el_704, _message_263);
    final _el_706 = import16.appendElement(doc, _el_703, 'li');
    this.updateChildClass(_el_706, 'added');
    addShimE(_el_706);
    final _text_707 = import16.appendText(_el_706, _message_264);
    final _el_708 = import16.appendElement(doc, _el_703, 'li');
    this.updateChildClass(_el_708, 'added');
    addShimE(_el_708);
    final _text_709 = import16.appendText(_el_708, _message_265);
    final _el_710 = import16.appendElement(doc, _el_703, 'li');
    this.updateChildClass(_el_710, 'added');
    addShimE(_el_710);
    final _text_711 = import16.appendText(_el_710, _message_266);
    final _el_712 = import16.appendElement(doc, _el_703, 'li');
    this.updateChildClass(_el_712, 'added');
    addShimE(_el_712);
    final _text_713 = import16.appendText(_el_712, _message_267);
    final _el_714 = import16.appendElement(doc, _el_703, 'li');
    this.updateChildClass(_el_714, 'fixed');
    addShimE(_el_714);
    final _text_715 = import16.appendText(_el_714, _message_268);
    final _el_716 = import16.appendElement(doc, _el_703, 'li');
    this.updateChildClass(_el_716, 'fixed');
    addShimE(_el_716);
    final _text_717 = import16.appendText(_el_716, _message_269);
    final _el_718 = import16.appendElement(doc, _el_703, 'li');
    this.updateChildClass(_el_718, 'fixed');
    addShimE(_el_718);
    final _text_719 = import16.appendText(_el_718, _message_270);
    final _el_720 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_720);
    final _el_721 = import16.appendSpan(doc, _el_720);
    addShimE(_el_721);
    final _text_722 = import16.appendText(_el_721, _message_1);
    final _el_723 = import16.appendSpan(doc, _el_720);
    addShimE(_el_723);
    final _text_724 = import16.appendText(_el_723, _message_271);
    final _el_725 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_725);
    final _el_726 = import16.appendElement(doc, _el_725, 'li');
    this.updateChildClass(_el_726, 'added');
    addShimE(_el_726);
    final _text_727 = import16.appendText(_el_726, _message_272);
    final _el_728 = import16.appendElement(doc, _el_725, 'li');
    this.updateChildClass(_el_728, 'changed');
    addShimE(_el_728);
    final _text_729 = import16.appendText(_el_728, _message_273);
    final _el_730 = import16.appendElement(doc, _el_725, 'li');
    this.updateChildClass(_el_730, 'changed');
    addShimE(_el_730);
    final _text_731 = import16.appendText(_el_730, _message_274);
    final _el_732 = import16.appendElement(doc, _el_725, 'li');
    this.updateChildClass(_el_732, 'changed');
    addShimE(_el_732);
    final _text_733 = import16.appendText(_el_732, _message_275);
    final _el_734 = import16.appendElement(doc, _el_725, 'li');
    this.updateChildClass(_el_734, 'fixed');
    addShimE(_el_734);
    final _text_735 = import16.appendText(_el_734, _message_276);
    final _el_736 = import16.appendElement(doc, _el_725, 'li');
    this.updateChildClass(_el_736, 'fixed');
    addShimE(_el_736);
    final _text_737 = import16.appendText(_el_736, _message_277);
    final _el_738 = import16.appendElement(doc, _el_725, 'li');
    this.updateChildClass(_el_738, 'fixed');
    addShimE(_el_738);
    final _text_739 = import16.appendText(_el_738, _message_278);
    final _el_740 = import16.appendElement(doc, _el_725, 'li');
    this.updateChildClass(_el_740, 'fixed');
    addShimE(_el_740);
    final _text_741 = import16.appendText(_el_740, _message_279);
    final _el_742 = import16.appendElement(doc, _el_725, 'li');
    this.updateChildClass(_el_742, 'fixed');
    addShimE(_el_742);
    final _text_743 = import16.appendText(_el_742, _message_280);
    final _el_744 = import16.appendElement(doc, _el_725, 'li');
    this.updateChildClass(_el_744, 'fixed');
    addShimE(_el_744);
    final _text_745 = import16.appendText(_el_744, _message_281);
    final _el_746 = import16.appendElement(doc, _el_725, 'li');
    this.updateChildClass(_el_746, 'fixed');
    addShimE(_el_746);
    final _text_747 = import16.appendText(_el_746, _message_282);
    final _el_748 = import16.appendElement(doc, _el_725, 'li');
    this.updateChildClass(_el_748, 'removed');
    addShimE(_el_748);
    final _text_749 = import16.appendText(_el_748, _message_283);
    final _el_750 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_750);
    final _el_751 = import16.appendSpan(doc, _el_750);
    addShimE(_el_751);
    final _text_752 = import16.appendText(_el_751, _message_1);
    final _el_753 = import16.appendSpan(doc, _el_750);
    addShimE(_el_753);
    final _text_754 = import16.appendText(_el_753, _message_284);
    final _el_755 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_755);
    final _el_756 = import16.appendElement(doc, _el_755, 'li');
    this.updateChildClass(_el_756, 'added');
    addShimE(_el_756);
    final _text_757 = import16.appendText(_el_756, _message_285);
    final _el_758 = import16.appendElement(doc, _el_755, 'li');
    this.updateChildClass(_el_758, 'changed');
    addShimE(_el_758);
    final _text_759 = import16.appendText(_el_758, _message_286);
    final _el_760 = import16.appendElement(doc, _el_755, 'li');
    this.updateChildClass(_el_760, 'fixed');
    addShimE(_el_760);
    final _text_761 = import16.appendText(_el_760, _message_287);
    final _el_762 = import16.appendElement(doc, _el_755, 'li');
    this.updateChildClass(_el_762, 'fixed');
    addShimE(_el_762);
    final _text_763 = import16.appendText(_el_762, _message_288);
    final _el_764 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_764);
    final _el_765 = import16.appendSpan(doc, _el_764);
    addShimE(_el_765);
    final _text_766 = import16.appendText(_el_765, _message_1);
    final _el_767 = import16.appendSpan(doc, _el_764);
    addShimE(_el_767);
    final _text_768 = import16.appendText(_el_767, _message_289);
    final _el_769 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_769);
    final _el_770 = import16.appendElement(doc, _el_769, 'li');
    this.updateChildClass(_el_770, 'added');
    addShimE(_el_770);
    final _text_771 = import16.appendText(_el_770, _message_290);
    final _el_772 = import16.appendElement(doc, _el_769, 'li');
    this.updateChildClass(_el_772, 'added');
    addShimE(_el_772);
    final _text_773 = import16.appendText(_el_772, _message_291);
    final _el_774 = import16.appendElement(doc, _el_769, 'li');
    this.updateChildClass(_el_774, 'changed');
    addShimE(_el_774);
    final _text_775 = import16.appendText(_el_774, _message_292);
    final _el_776 = import16.appendElement(doc, _el_769, 'li');
    this.updateChildClass(_el_776, 'changed');
    addShimE(_el_776);
    final _text_777 = import16.appendText(_el_776, _message_293);
    final _el_778 = import16.appendElement(doc, _el_769, 'li');
    this.updateChildClass(_el_778, 'changed');
    addShimE(_el_778);
    final _text_779 = import16.appendText(_el_778, _message_294);
    final _el_780 = import16.appendElement(doc, _el_769, 'li');
    this.updateChildClass(_el_780, 'fixed');
    addShimE(_el_780);
    final _text_781 = import16.appendText(_el_780, _message_295);
    final _el_782 = import16.appendElement(doc, _el_769, 'li');
    this.updateChildClass(_el_782, 'fixed');
    addShimE(_el_782);
    final _text_783 = import16.appendText(_el_782, _message_296);
    final _el_784 = import16.appendElement(doc, _el_769, 'li');
    this.updateChildClass(_el_784, 'fixed');
    addShimE(_el_784);
    final _text_785 = import16.appendText(_el_784, _message_297);
    final _el_786 = import16.appendElement(doc, _el_769, 'li');
    this.updateChildClass(_el_786, 'fixed');
    addShimE(_el_786);
    final _text_787 = import16.appendText(_el_786, _message_298);
    final _el_788 = import16.appendElement(doc, _el_8, 'h2');
    addShimE(_el_788);
    final _el_789 = import16.appendSpan(doc, _el_788);
    addShimE(_el_789);
    final _text_790 = import16.appendText(_el_789, _message_1);
    final _el_791 = import16.appendSpan(doc, _el_788);
    addShimE(_el_791);
    final _text_792 = import16.appendText(_el_791, _message_299);
    final _el_793 = import16.appendElement(doc, _el_8, 'ul');
    addShimC(_el_793);
    final _el_794 = import16.appendElement(doc, _el_793, 'li');
    this.updateChildClass(_el_794, 'added');
    addShimE(_el_794);
    final _text_795 = import16.appendText(_el_794, _message_300);
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
      if (((identical(token, import7.MaterialButtonComponent) || identical(token, import23.ButtonDirective)) || identical(token, import24.HasDisabled))) {
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
      _MaterialDialogComponent_0_5.shouldShowScrollStrokes = true;
      changed = true;
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
    if ((!import22.AppViewUtils.throwOnChanges)) {
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

  static String _message_11(String startTag0, String endTag0) {
    return import3.Intl.message('Nachdem ich immer wieder gefragt wurde, ob man mir eine Spende zukommen lassen kann, habe ich mich jetzt dann doch dazu entschlossen, so eine Möglichkeit zur Verfügung zu stellen. Nightscout Reporter ist aber nach wie vor komplett kostenlos und wird das auch bleiben. Wer dennoch seiner Zuneigung zum Programm Ausdruck verleihen will, dem will ich mich nicht länger in den Weg stellen. Der Spenden-Button ist nicht sichtbar. Aber wer etwas in den ${startTag0}Hut${endTag0} werfen will, der wird ihn finden :)', desc: 'v206a1', name: 'ViewWhatsnewComponent0__message_11', args: [startTag0, endTag0], examples: const {'startTag0': '<b>', 'endTag0': '</b>'});
  }

  void _handle_trigger_6_0($event) {
    final _ctx = ctx;
    _ctx.fire('normal');
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import10.ComponentStyles.scoped(styles$WhatsnewComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.WhatsnewComponent> _WhatsnewComponentNgFactory = const ComponentFactory('whatsnew', viewFactory_WhatsnewComponentHost0);
ComponentFactory<import2.WhatsnewComponent> get WhatsnewComponentNgFactory {
  return _WhatsnewComponentNgFactory;
}

final List<dynamic> styles$WhatsnewComponentHost = const [];

class _ViewWhatsnewComponentHost0 extends AppView<import2.WhatsnewComponent> {
  ViewWhatsnewComponent0 _compView_0;
  import2.WhatsnewComponent _WhatsnewComponent_0_5;
  dynamic __Document_0_6;
  dynamic __HtmlDocument_0_7;
  dynamic __Window_0_8;
  dynamic __DomService_0_9;
  dynamic __AcxImperativeViewUtils_0_10;
  import25.DomRuler __DomRuler_0_11;
  dynamic __ManagedZone_0_12;
  dynamic __overlayContainerName_0_13;
  dynamic __overlayContainerParent_0_14;
  dynamic __overlayContainer_0_15;
  bool __overlaySyncDom_0_16;
  bool __overlayRepositionLoop_0_17;
  import26.Box __overlayViewportBoundaries_0_18;
  import27.OverlayStyleConfig __OverlayStyleConfig_0_19;
  import28.ZIndexer __ZIndexer_0_20;
  import29.OverlayDomRenderService __OverlayDomRenderService_0_21;
  dynamic __OverlayService_0_22;
  List<import31.RelativePosition> __defaultPopupPositions_0_23;
  import32.DomPopupSourceFactory __DomPopupSourceFactory_0_24;
  import33.Clock __Clock_0_25;
  _ViewWhatsnewComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _Document_0_6 {
    if ((__Document_0_6 == null)) {
      (__Document_0_6 = import34.getDocument());
    }
    return __Document_0_6;
  }

  dynamic get _HtmlDocument_0_7 {
    if ((__HtmlDocument_0_7 == null)) {
      (__HtmlDocument_0_7 = import34.getDocument());
    }
    return __HtmlDocument_0_7;
  }

  dynamic get _Window_0_8 {
    if ((__Window_0_8 == null)) {
      (__Window_0_8 = import34.getWindow());
    }
    return __Window_0_8;
  }

  dynamic get _DomService_0_9 {
    if ((__DomService_0_9 == null)) {
      (__DomService_0_9 = (import14.isDevMode
          ? import17.debugInjectorWrap(import18.DomService, () {
              return import35.createDomService(this.injectorGetOptional(import18.DomService, viewData.parentIndex), this.injectorGetOptional(import36.Disposer, viewData.parentIndex), this.injectorGet(import37.NgZone, viewData.parentIndex), _Window_0_8);
            })
          : import35.createDomService(this.injectorGetOptional(import18.DomService, viewData.parentIndex), this.injectorGetOptional(import36.Disposer, viewData.parentIndex), this.injectorGet(import37.NgZone, viewData.parentIndex), _Window_0_8)));
    }
    return __DomService_0_9;
  }

  dynamic get _AcxImperativeViewUtils_0_10 {
    if ((__AcxImperativeViewUtils_0_10 == null)) {
      (__AcxImperativeViewUtils_0_10 = (import14.isDevMode
          ? import17.debugInjectorWrap(import38.AcxImperativeViewUtils, () {
              return import38.AcxImperativeViewUtils(this.injectorGet(import39.ComponentLoader, viewData.parentIndex), _DomService_0_9);
            })
          : import38.AcxImperativeViewUtils(this.injectorGet(import39.ComponentLoader, viewData.parentIndex), _DomService_0_9)));
    }
    return __AcxImperativeViewUtils_0_10;
  }

  import25.DomRuler get _DomRuler_0_11 {
    if ((__DomRuler_0_11 == null)) {
      (__DomRuler_0_11 = import25.DomRuler(_Document_0_6, _DomService_0_9));
    }
    return __DomRuler_0_11;
  }

  dynamic get _ManagedZone_0_12 {
    if ((__ManagedZone_0_12 == null)) {
      (__ManagedZone_0_12 = (import14.isDevMode
          ? import17.debugInjectorWrap(import40.ManagedZone, () {
              return import41.Angular2ManagedZone(this.injectorGet(import37.NgZone, viewData.parentIndex));
            })
          : import41.Angular2ManagedZone(this.injectorGet(import37.NgZone, viewData.parentIndex))));
    }
    return __ManagedZone_0_12;
  }

  dynamic get _overlayContainerName_0_13 {
    if ((__overlayContainerName_0_13 == null)) {
      (__overlayContainerName_0_13 = (import14.isDevMode
          ? import17.debugInjectorWrap(const import21.OpaqueToken<dynamic>('overlayContainerName'), () {
              return import42.getDefaultContainerName(this.injectorGetOptional(const import21.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex));
            })
          : import42.getDefaultContainerName(this.injectorGetOptional(const import21.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex))));
    }
    return __overlayContainerName_0_13;
  }

  dynamic get _overlayContainerParent_0_14 {
    if ((__overlayContainerParent_0_14 == null)) {
      (__overlayContainerParent_0_14 = (import14.isDevMode
          ? import17.debugInjectorWrap(const import21.OpaqueToken<dynamic>('overlayContainerParent'), () {
              return import42.getOverlayContainerParent(_Document_0_6, this.injectorGetOptional(const import21.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex));
            })
          : import42.getOverlayContainerParent(_Document_0_6, this.injectorGetOptional(const import21.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex))));
    }
    return __overlayContainerParent_0_14;
  }

  dynamic get _overlayContainer_0_15 {
    if ((__overlayContainer_0_15 == null)) {
      (__overlayContainer_0_15 = (import14.isDevMode
          ? import17.debugInjectorWrap(const import21.OpaqueToken<dynamic>('overlayContainer'), () {
              return import42.getDefaultContainer(_overlayContainerName_0_13, _overlayContainerParent_0_14, this.injectorGetOptional(const import21.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex));
            })
          : import42.getDefaultContainer(_overlayContainerName_0_13, _overlayContainerParent_0_14, this.injectorGetOptional(const import21.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex))));
    }
    return __overlayContainer_0_15;
  }

  bool get _overlaySyncDom_0_16 {
    if ((__overlaySyncDom_0_16 == null)) {
      (__overlaySyncDom_0_16 = true);
    }
    return __overlaySyncDom_0_16;
  }

  bool get _overlayRepositionLoop_0_17 {
    if ((__overlayRepositionLoop_0_17 == null)) {
      (__overlayRepositionLoop_0_17 = true);
    }
    return __overlayRepositionLoop_0_17;
  }

  import26.Box get _overlayViewportBoundaries_0_18 {
    if ((__overlayViewportBoundaries_0_18 == null)) {
      (__overlayViewportBoundaries_0_18 = const import26.Box());
    }
    return __overlayViewportBoundaries_0_18;
  }

  import27.OverlayStyleConfig get _OverlayStyleConfig_0_19 {
    if ((__OverlayStyleConfig_0_19 == null)) {
      (__OverlayStyleConfig_0_19 = import27.OverlayStyleConfig(_Document_0_6));
    }
    return __OverlayStyleConfig_0_19;
  }

  import28.ZIndexer get _ZIndexer_0_20 {
    if ((__ZIndexer_0_20 == null)) {
      (__ZIndexer_0_20 = import28.ZIndexer());
    }
    return __ZIndexer_0_20;
  }

  import29.OverlayDomRenderService get _OverlayDomRenderService_0_21 {
    if ((__OverlayDomRenderService_0_21 == null)) {
      (__OverlayDomRenderService_0_21 = import29.OverlayDomRenderService(_OverlayStyleConfig_0_19, _overlayContainer_0_15, _overlayContainerName_0_13, _DomRuler_0_11, _DomService_0_9, _AcxImperativeViewUtils_0_10, _overlaySyncDom_0_16, _overlayRepositionLoop_0_17, _ZIndexer_0_20));
    }
    return __OverlayDomRenderService_0_21;
  }

  dynamic get _OverlayService_0_22 {
    if ((__OverlayService_0_22 == null)) {
      (__OverlayService_0_22 = (import14.isDevMode
          ? import17.debugInjectorWrap(import43.OverlayService, () {
              return import43.OverlayService(this.injectorGet(import37.NgZone, viewData.parentIndex), _overlaySyncDom_0_16, _OverlayDomRenderService_0_21, this.injectorGetOptional(import43.OverlayService, viewData.parentIndex));
            })
          : import43.OverlayService(this.injectorGet(import37.NgZone, viewData.parentIndex), _overlaySyncDom_0_16, _OverlayDomRenderService_0_21, this.injectorGetOptional(import43.OverlayService, viewData.parentIndex))));
    }
    return __OverlayService_0_22;
  }

  List<import31.RelativePosition> get _defaultPopupPositions_0_23 {
    if ((__defaultPopupPositions_0_23 == null)) {
      (__defaultPopupPositions_0_23 = const [import31.RelativePosition(animationOrigin: 'top center'), import31.RelativePosition(animationOrigin: 'top right', originX: import31.Alignment('End', 'flex-end')), import31.RelativePosition(animationOrigin: 'top left', originX: import31.Alignment('Start', 'flex-start')), import31.RelativePosition(animationOrigin: 'bottom center', originY: import31.Alignment('End', 'flex-end')), import31.RelativePosition(animationOrigin: 'bottom right', originX: import31.Alignment('End', 'flex-end'), originY: import31.Alignment('End', 'flex-end')), import31.RelativePosition(animationOrigin: 'bottom left', originX: import31.Alignment('Start', 'flex-start'), originY: import31.Alignment('End', 'flex-end'))]);
    }
    return __defaultPopupPositions_0_23;
  }

  import32.DomPopupSourceFactory get _DomPopupSourceFactory_0_24 {
    if ((__DomPopupSourceFactory_0_24 == null)) {
      (__DomPopupSourceFactory_0_24 = import32.DomPopupSourceFactory(_DomRuler_0_11));
    }
    return __DomPopupSourceFactory_0_24;
  }

  import33.Clock get _Clock_0_25 {
    if ((__Clock_0_25 == null)) {
      (__Clock_0_25 = const import33.Clock());
    }
    return __Clock_0_25;
  }

  @override
  ComponentRef<import2.WhatsnewComponent> build() {
    _compView_0 = ViewWhatsnewComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _WhatsnewComponent_0_5 = import2.WhatsnewComponent();
    _compView_0.create(_WhatsnewComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _WhatsnewComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import13.Document)) {
        return _Document_0_6;
      }
      if (identical(token, import13.HtmlDocument)) {
        return _HtmlDocument_0_7;
      }
      if (identical(token, import13.Window)) {
        return _Window_0_8;
      }
      if (identical(token, import18.DomService)) {
        return _DomService_0_9;
      }
      if (identical(token, import38.AcxImperativeViewUtils)) {
        return _AcxImperativeViewUtils_0_10;
      }
      if (identical(token, import25.DomRuler)) {
        return _DomRuler_0_11;
      }
      if (identical(token, import40.ManagedZone)) {
        return _ManagedZone_0_12;
      }
      if (identical(token, const import21.OpaqueToken<dynamic>('overlayContainerName'))) {
        return _overlayContainerName_0_13;
      }
      if (identical(token, const import21.OpaqueToken<dynamic>('overlayContainerParent'))) {
        return _overlayContainerParent_0_14;
      }
      if (identical(token, const import21.OpaqueToken<dynamic>('overlayContainer'))) {
        return _overlayContainer_0_15;
      }
      if (identical(token, const import21.OpaqueToken<dynamic>('overlaySyncDom'))) {
        return _overlaySyncDom_0_16;
      }
      if (identical(token, const import21.OpaqueToken<dynamic>('overlayRepositionLoop'))) {
        return _overlayRepositionLoop_0_17;
      }
      if (identical(token, const import21.OpaqueToken<dynamic>('overlayViewportBoundaries'))) {
        return _overlayViewportBoundaries_0_18;
      }
      if (identical(token, import27.OverlayStyleConfig)) {
        return _OverlayStyleConfig_0_19;
      }
      if (identical(token, import28.ZIndexer)) {
        return _ZIndexer_0_20;
      }
      if (identical(token, import29.OverlayDomRenderService)) {
        return _OverlayDomRenderService_0_21;
      }
      if (identical(token, import43.OverlayService)) {
        return _OverlayService_0_22;
      }
      if (identical(token, const import21.OpaqueToken<List<import44.RelativePosition>>('defaultPopupPositions'))) {
        return _defaultPopupPositions_0_23;
      }
      if (identical(token, import32.DomPopupSourceFactory)) {
        return _DomPopupSourceFactory_0_24;
      }
      if ((identical(token, import33.Clock) || identical(token, const import21.OpaqueToken<dynamic>('third_party.dart_src.acx.material_datepicker.datepickerClock')))) {
        return _Clock_0_25;
      }
    }
    return notFoundResult;
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

AppView<import2.WhatsnewComponent> viewFactory_WhatsnewComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewWhatsnewComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(WhatsnewComponent, WhatsnewComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
