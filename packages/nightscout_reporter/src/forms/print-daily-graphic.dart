import 'dart:math' as math;

import 'package:intl/intl.dart';
import 'package:nightscout_reporter/src/globals.dart';
import 'package:nightscout_reporter/src/json_data.dart';

import 'base-daily.dart';
import 'base-print.dart';

class CollectInfo {
  DateTime start;
  DateTime end;
  double sum1, sum2;
  double max1 = -1.0;
  double max2 = -1.0;
  int count = 0;

  CollectInfo(this.start, [this.sum1 = 0.0, this.sum2 = 0.0]) {
    end = DateTime(start.year, start.month, start.day, start.hour, start.minute,
        start.second);
    count = sum1 > 0.0 ? 1 : 0;
    max1 = sum1;
    max2 = sum2;
  }

  void fill(DateTime date, double value1, double value2) {
    end = DateTime(
        date.year, date.month, date.day, date.hour, date.minute, date.second);
    sum1 += value1;
    sum2 += value2;
    max1 = math.max(value1, max1);
    max2 = math.max(value2, max2);
    count++;
  }
}

class PrintDailyGraphic extends BaseDaily {
  @override
  String help = Intl.message(
      '''Dieses Formular zeigt den Verlauf der Glukosekurve für einen Tag. Pro Tag im ausgewählten
Zeitraum wird eine Seite erzeugt. Es gibt sehr viele Optionen, mit denen dieses Formular angepasst werden kann.
Die Optionen, die auf einen Loop hinweisen sind andersfarbig markiert, um sie schneller identifizieren zu 
können. Die Optionen COB und IOB verlangsamen die Ausgabe teilweise erheblich, weshalb man diese nur dann
verwenden sollte, wenn sie wirklich von Interesse sind.

Unter der Grafik kann die Basalrate angezeigt werden. Ein laufender Loop wird diese immer wieder hoch und runter
setzen. Deshalb kann man sowohl die tatsächliche Basalrate als auch die im Profil eingestellte Basalrate 
anzeigen lassen. Für die Basalrate gibt es noch die Formulare @09@, @11@ und @02@, auf denen man sie genauer 
analysieren kann. Man kann auch das @10@ für den Tag erzeugen lassen. Das wird dann auf einer neuen Seite ausgegeben.

Dieses Formular ist eines der seitenintensivsten Formulare in Nightscout Reporter. Deshalb gibt es hier 
die Möglichkeit, mehrere Tagesgrafiken auf einer Seite ausgeben zu lassen. Darunter leidet natürlich die Lesbarkeit,
aber für einen Überblick über den Verlauf ist das ganz nützlich.''',
      desc: 'help for daygraph');

  @override
  String id = 'daygraph';

  @override
  String idx = '05';

  bool showPictures,
      showInsulin,
      showCarbs,
      showBasalDay,
      showBasalProfile,
      showLegend,
      isPrecise,
      showNotes,
      showGlucTable,
      showNoteLinesAtGluc,
      sumNarrowValues,
      splitBolus,
      showExercises,
      showCarbIE,
      showCGP,
      showProfileStart,
      showHTMLNotes,
      showZeroBasal,
      showCOB,
      showIOB,
      roundToProfile,
      spareBool1,
      showTargetValue;

  @override
  List<ParamInfo> params = [
    ParamInfo(0, msgParam1, boolValue: true),
    ParamInfo(1, msgParam2, boolValue: true),
    ParamInfo(4, msgParam3, boolValue: true),
    ParamInfo(6, msgParam4, boolValue: true, isLoopValue: true, subParams: [
      ParamInfo(0, msgParam20, boolValue: false, isLoopValue: true)
    ]),
    ParamInfo(7, msgParam5, boolValue: true),
    ParamInfo(8, msgParam6, boolValue: false, isDeprecated: true),
    ParamInfo(12, BasePrint.msgGraphsPerPage, list: [
      Intl.message('Eine'),
      Intl.message('Zwei'),
      Intl.message('Vier'),
      Intl.message('Acht'),
      Intl.message('Sechzehn')
    ]),
    ParamInfo(8, msgParam8, boolValue: true),
    ParamInfo(9, msgParam9, boolValue: true, subParams: [
      ParamInfo(0, msgParam13, boolValue: false),
      ParamInfo(1, msgParam21, boolValue: false)
    ]),
    ParamInfo(11, '', boolValue: false, isDeprecated: true),
    ParamInfo(13, msgParam11, boolValue: true),
    ParamInfo(14, msgParam14, boolValue: true),
    ParamInfo(3, BaseDaily.msgDaily1,
        boolValue: true,
        subParams: [
          ParamInfo(0, BaseDaily.msgDaily2, boolValue: true, isLoopValue: true)
        ],
        isLoopValue: true),
    ParamInfo(15, msgParam16, boolValue: false),
    ParamInfo(16, msgParam17, boolValue: false),
    ParamInfo(5, msgParam18, boolValue: false),
    ParamInfo(17, msgParam19, boolValue: false),
    ParamInfo(18, msgParam22, boolValue: false),
    ParamInfo(2, msgParam23, boolValue: true),
    ParamInfo(19, msgParam24, boolValue: false),
    ParamInfo(20, msgParam25, boolValue: false),
    ParamInfo(21, msgParam26, boolValue: true, isLoopValue: true)
  ];

  @override
  void extractParams() {
    showPictures = params[0].boolValue;
    showInsulin = params[1].boolValue;
    showCarbs = params[2].boolValue;
    showBasalDay = params[3].boolValue;
    showProfileStart = params[3].subParams[0].boolValue;
    showBasalProfile = params[4].boolValue;
    isPrecise = params[5].boolValue;
    showLegend = params[7].boolValue;
    showNotes = params[8].boolValue;
    showNoteLinesAtGluc = params[8].subParams[0].boolValue;
    showHTMLNotes = params[8].subParams[1].boolValue;
    spareBool1 = params[9].boolValue;
    showGlucTable = params[10].boolValue;
    sumNarrowValues = params[11].boolValue;
    showSMB = params[12].boolValue;
    showSMBAtGluc = params[12].subParams[0].boolValue;
    splitBolus = params[13].boolValue;
    showExercises = params[14].boolValue;
    showCarbIE = params[15].boolValue;
    showCGP = params[16].boolValue;
    showZeroBasal = params[17].boolValue;
    roundToProfile = params[18].boolValue;
    showCOB = params[19].boolValue;
    showIOB = params[20].boolValue;
    showTargetValue = params[21].boolValue;

    switch (params[6].intValue) {
      case 1:
        pagesPerSheet = 2;
        break;
      case 2:
        pagesPerSheet = 4;
        break;
      case 3:
        pagesPerSheet = 8;
        break;
      case 4:
        pagesPerSheet = 16;
        break;
      default:
        pagesPerSheet = 1;
        break;
    }
  }

  @override
  dynamic get estimatePageCount {
    var count = g?.period?.dayCount ?? 0;
    if (showCGP ?? false) count *= 2;
    return {'count': count, 'isEstimated': false};
  }

  @override
  String get backsuffix => showCGP ? 'cgp' : '';

  String get _titleGraphic => Intl.message('Tagesgrafik');

  @override
  String get title => _titleGraphic;

  static String get msgParam1 => Intl.message('Symbole (Katheter etc.)');

  static String get msgParam2 => Intl.message('Insulin');

  static String get msgParam3 => Intl.message('Kohlenhydrate');

  static String get msgParam4 => Intl.message('Tages-Basalrate');

  static String get msgParam5 => Intl.message('Profil-Basalrate');

  static String get msgParam6 =>
      Intl.message('Basal mit zwei Nachkommastellen');

  static String get msgParam8 => Intl.message('Legende');

  static String get msgParam9 => Intl.message('Notizen');

//  static String get msgParam10 => Intl.message('Neuester Tag zuerst');
  static String get msgParam11 => Intl.message('Tabelle mit Glukosewerten');

  static String get msgParam13 =>
      Intl.message('Notiz-Linien bis zur Kurve zeichnen');

  static String get msgParam14 =>
      Intl.message('Nahe zusammen liegende Werte aufsummieren');

  static String get msgParam16 => Intl.message('Bolusarten anzeigen');

  static String get msgParam17 => Intl.message('Bewegung anzeigen');

  static String get msgParam18 =>
      Intl.message('Berechnete IE für Kohlenhydrate anzeigen');

  static String get msgParam19 => Intl.message('Glukose Pentagon erzeugen');

  static String get msgParam20 => Intl.message('Tagesstartprofil anzeigen');

  static String get msgParam21 => Intl.message('HTML-Notizen anzeigen');

  static String get msgParam22 =>
      Intl.message('Dauer der abgeschalteten Basalrate anzeigen');

  static String get msgParam23 =>
      Intl.message('Insulin auf maximale Stellen im Profil runden');

  static String get msgParam24 => Intl.message('COB (Carbs On Board) anzeigen');

  static String get msgParam25 =>
      Intl.message('IOB (Insulin On Board) anzeigen');

  static String get msgParam26 => Intl.message('Zielwert anzeigen');

  @override
  String get msgBasalSum => Intl.message('Basal ges.');

  String get msgBolusSum => Intl.message('Bolus ges.');

  String get msgBasalZero => Intl.message('Basal 0%');

  String get msgExercises => Intl.message('Bewegung');

  String get msgBloody => Intl.message('Blutige Messung');

  @override
  List<String> get imgList =>
      ['nightscout', 'katheter.print', 'sensor.print', 'ampulle.print'];

//  @override
//  double get scale
//  => isSmall ?? false ? (g.isLocal ? 0.25 : 0.5) : 1.0;

  @override
  bool get isPortrait => false;

  num lineWidth;
  double glucMax = 0.0;
  double profMax = 0.0;
  double carbMax = 200.0;
  double bolusMax = 50.0;
  double ieMax = 0.0;
  double graphBottom;
  static double graphWidth;
  static double notesTop = 0.4;
  static double notesHeight = 0.3;
  static double basalTop;
  static double basalHeight = 3.0;
  static double basalWidth = graphWidth;
  double glucTableHeight = 0.6;
  double glucTableTop;
  double glucExerciseHeight = 0.6;
  double glucExerciseTop;

  double glucX(DateTime time) {
    return graphWidth / 1440 * (time.hour * 60 + time.minute);
  }

  double glucY(double value) => graphHeight / glucMax * (glucMax - value);

  double carbY(double value) => graphHeight / carbMax * (carbMax - value);

  double bolusY(double value) => graphHeight / 4 * value / ieMax;

  double basalX(DateTime time) {
    return basalWidth / 1440 * (time.hour * 60 + time.minute);
  }

  double basalY(double value) => profMax != 0 && value != null
      ? basalHeight / profMax * (profMax - value)
      : 0.0;

  List<CollectInfo> collInsulin = <CollectInfo>[];
  List<CollectInfo> collCarbs = <CollectInfo>[];

  PrintDailyGraphic() {
    init();
  }

  @override
  void fillPages(List<Page> pages) async {
//    scale = height / width;
    var data = repData.data;

    graphWidth = 23.25;
    graphHeight = 6.5;
    if (!showBasalDay && !showBasalProfile) graphHeight += basalHeight + 1;
    if (!showLegend) graphHeight += 2.5;
    basalTop = 2.0;
    if (!showNotes) basalTop -= notesHeight;
    graphBottom = graphHeight;
    if (showGlucTable) {
      graphHeight -= glucTableHeight;
    } else {
      basalTop -= glucTableHeight;
    }
    glucTableTop = graphHeight;

    lineWidth = cm(0.03);
    for (var i = 0; i < data.days.length; i++) {
      var day = data.days[g.ppLatestFirst ? data.days.length - 1 - i : i];
      if (g.period.isDowActive(day.date.weekday - 1)) {
        if (day.entries.isNotEmpty || day.treatments.isNotEmpty) {
          pages.add(getPage(day));
          if (showCGP || repData.isForThumbs) pages.add(getCGPPage(day));
          if (g.showBothUnits) {
            g.glucMGDLIdx = 1;
            pages.add(getPage(day));
            if (showCGP) pages.add(getCGPPage(day));
            g.glucMGDLIdx = 2;
          }
        } else {
          pages.add(getEmptyForm(isPortrait, repData.status.status));
        }
      }
      if (repData.isForThumbs) i = data.days.length;
    }
    title = _titleGraphic;
    subtitle = null;
  }

  dynamic glucLine(dynamic points) => {
        'type': 'polyline',
        'lineWidth': cm(lw),
        'closePath': false,
        'lineColor': colValue,
        'points': points
      };

  bool hasExercises;

  Page getPage(DayData day) {
    title = _titleGraphic;
    subtitle = null;
    footerTextAboveLine['text'] = '';
    var graphHeightSave = graphHeight;
    hasExercises =
        day.treatments.firstWhere((t) => t.isExercise, orElse: () => null) !=
            null;

    if (showExercises && hasExercises) graphHeight -= glucExerciseHeight;
    glucExerciseTop = graphHeight;
    var ret = _getPage(day, repData);
    graphHeight = graphHeightSave;
    return ret;
  }

  double carbsForIE(ReportData src, TreatmentData t) {
    if (t.boluscalc != null) return t.boluscalc.insulinCarbs;

    var check = (t.createdAt.hour * 60 + t.createdAt.minute) * 60;
    var ret = 0.0;
    for (var entry in src.profile(t.createdAt).store.listCarbratio) {
      if (entry.timeForCalc < check)
        ret = entry.value != 0 ? t.carbs / entry.value : 0.0;
    }

    return ret;
  }

  Page _getPage(DayData day, ReportData src) {
    title = _titleGraphic;
    var collMinutes = sumNarrowValues ? 60 : -1;
    var xo = xorg;
    var yo = yorg;
    titleInfo = fmtDate(day.date, null, false, true);
    glucMax = -1000.0;
    ieMax = 0.0;
    collInsulin.clear();
    collCarbs.clear();
    collInsulin.add(CollectInfo(
        DateTime(day.date.year, day.date.month, day.date.day, 0, 0, 0)));
    collCarbs.add(CollectInfo(
        DateTime(day.date.year, day.date.month, day.date.day, 0, 0, 0)));
/*
    math.Random rnd = math.Random();
    for (int i = 0; i < 1440; i += 5)
    {
      TreatmentData t = TreatmentData();
      t.createdAt = DateTime(day.date.year, day.date.month, day.date.day, 0, i);
      t.eventType = "meal bolus";
      t.insulin = 1.0 + rnd.nextInt(6);
      t.carbo(5.0 + rnd.nextInt(12));
      t.glucoseType = "norm";
      t.isSMB = false;
      day.treatments.add(t);
    }
    day.treatments.sort((a, b)
    => a.createdAt.compareTo(b.createdAt));
*/
    for (var entry in day.entries) {
      glucMax = math.max(entry.gluc, glucMax);
    }
    for (var entry in day.bloody) {
      glucMax = math.max(entry.gluc, glucMax);
    }

    profMax = -1000.0;
    if (showBasalProfile) {
      for (var entry in day.basalData.store.listBasal) {
        profMax = math.max(entry.value ?? 0, profMax);
      }
    }
    if (showBasalDay) {
      for (var entry in day.profile) {
        profMax = math.max(entry.value ?? 0, profMax);
      }
    }
    for (var entry in day.treatments) {
      if (entry.isBloody) {
        glucMax = math.max(entry.glucose, glucMax);
      }
      ieMax = math.max(entry.bolusInsulin, ieMax);
    }

    if (g.glucMaxValue != null) glucMax = g.glucMaxValues[g.ppGlucMaxIdx];

    ieMax = math.max(ieMax, 3.0);

    var vertLines = {
      'relativePosition': {'x': cm(xo), 'y': cm(yo)},
      'canvas': []
    };
    var horzLines = {
      'relativePosition': {'x': cm(xo), 'y': cm(yo)},
      'canvas': []
    };
    var horzLegend = {'stack': []};
    var vertLegend = {'stack': []};
    var graphGluc = {
      'relativePosition': {'x': cm(xo), 'y': cm(yo)},
      'canvas': []
    };
    var graphLegend = {
      'relativePosition': {'x': cm(xo), 'y': cm(yo)},
      'stack': []
    };
    var glucTable = {
      'relativePosition': {'x': cm(xo), 'y': cm(yo + glucTableTop)},
      'stack': []
    };
    var glucTableCvs = {
      'relativePosition': {'x': cm(xo), 'y': cm(yo + glucTableTop)},
      'canvas': []
    };
    var exerciseCvs = {
      'relativePosition': {'x': cm(xo), 'y': cm(yo + graphHeight)},
      'canvas': []
    };
    var graphCarbs = {
      'stack': [
        {
          'relativePosition': {'x': cm(xo), 'y': cm(yo)},
          'canvas': []
        },
        {
          'relativePosition': {'x': cm(xo), 'y': cm(yo)},
          'stack': []
        }
      ]
    };
    var graphInsulin = {
      'stack': [
        {
          'relativePosition': {'x': cm(xo), 'y': cm(yo)},
          'canvas': []
        },
        {
          'relativePosition': {'x': cm(xo), 'y': cm(yo)},
          'stack': []
        }
      ]
    };
    var pictures = {
      'relativePosition': {'x': cm(xo), 'y': cm(yo)},
      'stack': []
    };

    var vertCvs = vertLines['canvas'] as List;
    var horzCvs = horzLines['canvas'] as List;
    var horzStack = horzLegend['stack'];
    var vertStack = vertLegend['stack'];
    List graphGlucCvs = graphGluc['canvas'];

    var grid = drawGraphicGrid(glucMax, graphHeight, graphWidth, vertCvs,
        horzCvs, horzStack, vertStack,
        graphBottom: graphBottom);
    if (grid.lineHeight == 0) {
      return Page(isPortrait, [
        headerFooter(date: day.date),
        {
          'relativePosition': {'x': cm(xorg), 'y': cm(yorg)},
          'text': msgMissingData
        }
      ]);
    }

    glucMax = grid.gridLines * grid.glucScale;

    var hasBloody = false;
    for (var entry in day.bloody) {
      var x = glucX(entry.time);
      var y = glucY(entry.mbg);
      y = glucY(entry.mbg);
      graphGlucCvs.add({
        'type': 'rect',
        'x': cm(x),
        'y': cm(y),
        'w': cm(0.1),
        'h': cm(0.1),
        'color': colBloodValues
      });
      hasBloody = true;
    }

    for (var t in day.treatments) {
      if (t.isBloody) {
        var x = glucX(t.createdAt);
        var y = glucY(g.glucFactor * t.glucose);
        graphGlucCvs.add({
          'type': 'rect',
          'x': cm(x),
          'y': cm(y),
          'w': cm(0.1),
          'h': cm(0.1),
          'color': colBloodValues
        });
        hasBloody = true;
      }
    }

    dynamic points = [];
    EntryData last;
    for (var entry in day.entries) {
      var x = glucX(entry.time);
      var y = glucY(entry.gluc);
      if (entry.gluc < 0) {
        if (last != null && last.gluc >= 0) {
          graphGlucCvs.add(glucLine(points));
          points = [];
        }
      } else {
        points.add({'x': cm(x), 'y': cm(y)});
      }
      last = entry;
    }
    graphGlucCvs.add(glucLine(points));

    var hasLowGluc = false;
    var hasNormGluc = false;
    var hasHighGluc = false;
    if (showGlucTable) {
      for (var i = 0; i < 48; i++) {
        var hours = i ~/ 2;
        var minutes = (i % 2) * 30;
        var check = DateTime(0, 1, 1, hours, minutes);
        EntryData entry =
            day.findNearest(day.entries, null, check, maxMinuteDiff: 15);
        var x = glucX(check) + 0.02;
        if (entry != null) {
          var col = colNorm;
          if (entry.gluc > targets(repData)['high']) {
            col = colHigh;
            hasHighGluc = true;
          } else if (entry.gluc < targets(repData)['low']) {
            col = colLow;
            hasLowGluc = true;
          } else {
            hasNormGluc = true;
          }
          (glucTableCvs['canvas'] as List).add({
            'type': 'rect',
            'x': cm(glucX(check)),
            'y': cm(0),
            'w': cm(graphWidth / 1440 * 30),
            'h': cm(glucTableHeight),
            'color': col
          });
          (glucTable['stack'] as List).add({
            'relativePosition': {
              'x': cm(x),
              'y': cm(i % 2 == 0 ? 0 : glucTableHeight / 2)
            },
            'text': g.glucFromData(entry.gluc),
            'color': colGlucValues,
            'fontSize': fs(7)
          });
        }
        if (i % 2 == 1) {
          (glucTableCvs['canvas'] as List).add({
            'type': 'line',
            'x1': cm(glucX(check)),
            'y1': cm(glucTableHeight * 0.75),
            'x2': cm(glucX(check)),
            'y2': cm(glucTableHeight),
            'lineWidth': cm(lw),
            'lineColor': lc
          });
        }
        if (entry != null) {
          dynamic found = day.findNearest(day.bloody, day.treatments, check,
              maxMinuteDiff: 15);
          if (found is EntryData) {
            (glucTable['stack'] as List).add({
              'relativePosition': {
                'x': cm(x),
                'y': cm(i % 2 != 0 ? 0 : glucTableHeight / 2)
              },
              'text': g.glucFromData(found.mbg),
              'color': colBloodValues,
              'fontSize': fs(7)
            });
          } else if (found is TreatmentData) {
            var value = g.glucFactor * found.glucose;
            (glucTable['stack'] as List).add({
              'relativePosition': {
                'x': cm(x),
                'y': cm(i % 2 != 0 ? 0 : glucTableHeight / 2)
              },
              'text': g.glucFromData(value),
              'color': colBloodValues,
              'fontSize': fs(7)
            });
          }
        }
      }
      (glucTableCvs['canvas'] as List).add({
        'type': 'line',
        'x1': cm(0),
        'y1': cm(glucTableHeight),
        'x2': cm(graphWidth),
        'y2': cm(glucTableHeight),
        'lineWidth': cm(lw),
        'lineColor': lcFrame
      });
    }

    var hasCatheterChange = false;
    var hasSensorChange = false;
    var hasAmpulleChange = false;
    var hasCarbs = false;
    var hasBolus = false;
    var hasCarbBolus = false;
    var hasCollectedValues = false;
    var hasCarbIE = false;
    var hasBolusExt = false;
    var noteLines = <double>[];
    for (var t in day.treatments) {
      double x, y;
/*
      String type = t.eventType.toLowerCase();
      if (showSMB && t.microbolus > 0) {
        EntryData entry = day.findNearest(day.entries, null, t.createdAt);
        x = glucX(t.createdAt);
        if (entry != null && showSMBAtGluc) {
          y = glucY(entry.gluc);
        } else {
          y = glucY(src.targetValue(t.createdAt)) + lw / 2;
        }
        paintSMB(t.microbolus, x, y,
        graphInsulin['stack'][0]['canvas'] as List);
      }
*/
      if (t.isTempBasal) continue;
      if ((t.carbs > 0 || t.eCarbs > 0) && showCarbs) {
        x = glucX(t.createdAt);
        if (t.isECarb) {
          paintECarbs(t.eCarbs, x, graphHeight - lw,
              graphCarbs['stack'][0]['canvas'] as List);
        } else {
          y = carbY(t.carbs);
          (graphCarbs['stack'][0]['canvas'] as List).add({
            'type': 'line',
            'x1': cm(x),
            'y1': cm(y),
            'x2': cm(x),
            'y2': cm(graphHeight - lw),
            'lineColor': colCarbs,
            'lineWidth': cm(0.1),
          });
          var carbsIE = carbsForIE(src, t);
          if (t.createdAt.difference(collCarbs.last.start).inMinutes <
              collMinutes) {
            collCarbs.last.fill(t.createdAt, t.carbs, carbsIE);
          } else {
            collCarbs.add(CollectInfo(t.createdAt, t.carbs, carbsIE));
          }
        }
        hasCarbs = true;
      }
      if (showInsulin) {
        if (t.bolusInsulin > 0 && !t.isSMB) {
          var insulin = t.bolusInsulin;
          var insulinExt = 0.0;
          if (t.splitExt > 0 || t.splitNow > 0) {
            insulinExt = t.splitExt * insulin / 100.0;
            insulin = t.splitNow * insulin / 100.0;
          }

          x = glucX(t.createdAt);
          y = bolusY(insulin);
          if (insulin > 0) {
            (graphInsulin['stack'][0]['canvas'] as List).add({
              'type': 'line',
              'x1': cm(x),
              'y1': cm(0),
              'x2': cm(x),
              'y2': cm(y),
              'lineColor':
                  splitBolus && t.isCarbBolus ? colCarbBolus : colBolus,
              'lineWidth': cm(0.1),
            });
          }
          if (insulinExt > 0) {
            var w = glucX(t.createdAt.add(Duration(seconds: t.duration))) - x;
            if (w < 0) w = graphWidth - x;
            var h = bolusY(insulinExt);
            (graphInsulin['stack'][0]['canvas'] as List).add({
              'type': 'rect',
              'x': cm(x),
              'y': cm(0),
              'w': cm(w),
              'h': cm(h),
              'color': colBolusExt,
            });
            hasBolusExt = true;
          }

          if (t.createdAt.difference(collInsulin.last.start).inMinutes <
              collMinutes) {
            collInsulin.last.fill(t.createdAt, t.bolusInsulin, 0.0);
          } else {
            collInsulin.add(CollectInfo(t.createdAt, t.bolusInsulin));
          }

          if (splitBolus && t.isCarbBolus) {
            hasCarbBolus = true;
          } else {
            hasBolus = true;
          }
        }
        if (showSMB && t.isSMB && t.insulin > 0) {
          EntryData entry = day.findNearest(day.entries, null, t.createdAt);
          x = glucX(t.createdAt);
          if (entry != null && showSMBAtGluc) {
            y = glucY(entry.gluc);
          } else {
            y = glucY(src.targetValue(t.createdAt)) + lw / 2;
          }
          paintSMB(t.insulin, x, y, graphInsulin['stack'][0]['canvas'] as List);
        }
      }

      if (t.isSiteChange && showPictures) {
        var x = glucX(t.createdAt) - 0.3;
        var y = graphHeight - 0.6;
        (pictures['stack'] as List).add({
          'relativePosition': {'x': cm(x), 'y': cm(y)},
          'image': 'katheter.print',
          'width': cm(0.8)
        });
        (pictures['stack'] as List).add({
          'relativePosition': {'x': cm(x + 0.33), 'y': cm(y + 0.04)},
          'text': '${fmtTime(t.createdAt)}',
          'fontSize': fs(5),
          'color': 'white'
        });
        hasCatheterChange = true;
      } else if (t.isSensorChange && showPictures) {
        var x = glucX(t.createdAt) - 0.3;
        var y = graphHeight - 0.6;
        (pictures['stack'] as List).add({
          'relativePosition': {'x': cm(x), 'y': cm(y)},
          'image': 'sensor.print',
          'width': cm(0.6)
        });
        (pictures['stack'] as List).add({
          'relativePosition': {'x': cm(x + 0.0), 'y': cm(y + 0.34)},
          'columns': [
            {
              'width': cm(0.6),
              'text': '${fmtTime(t.createdAt)}',
              'fontSize': fs(5),
              'color': 'white',
              'alignment': 'center'
            }
          ]
        });
        hasSensorChange = true;
      } else if (t.isInsulinChange && showPictures) {
        var x = glucX(t.createdAt) - 0.3;
        var y = graphHeight - 0.6;
        (pictures['stack'] as List).add({
          'relativePosition': {'x': cm(x), 'y': cm(y)},
          'image': 'ampulle.print',
          'width': cm(0.8)
        });
        (pictures['stack'] as List).add({
          'relativePosition': {'x': cm(x + 0.33), 'y': cm(y + 0.1)},
          'text': '${fmtTime(t.createdAt)}',
          'fontSize': fs(5),
          'color': 'white'
        });
        hasAmpulleChange = true;
      }

      if (t.isExercise && showExercises) {
        var x = glucX(t.createdAt);
        var wid = glucX(DateTime(0, 0, 0, 0, 0, t.duration));
        (exerciseCvs['canvas'] as List).add({
          'type': 'rect',
          'x': cm(x),
          'y': cm(0.05),
          'w': cm(wid),
          'h': cm(glucExerciseHeight - 0.1),
          'color': colExercises
        });
        if ((t.notes ?? '').isNotEmpty) {
          (graphLegend['stack'] as List).add({
            'relativePosition': {
              'x': cm(x + 0.05),
              'y': cm(glucExerciseTop + glucExerciseHeight / 2 - 0.13)
            },
            'text': t.notes,
            'fontSize': fs(6),
            'alignment': 'left',
            'color': colExerciseText
          });
        }
      } else if (showNotes && (t.notes ?? '').isNotEmpty && !t.isECarb) {
        var notes = t.notes;
        if (!showHTMLNotes) {
          notes = t.notes.replaceAll(RegExp(r'<.*>'), '');
        }
        var x = glucX(t.createdAt);
// *** line length estimation ***
// the following code is used to estimate the length of the note-lines for
// trying to avoid overlapping.
        var idx = noteLines.indexWhere((v) => v < x);
        var isMultiline = notes.indexOf('\n') > 0;
        var len = notes.indexOf('\n') > 0 ? notes.indexOf('\n') : notes.length;
        var pos = x + len * 0.15;
        if (idx < 0) {
          noteLines.add(pos);
          idx = noteLines.length - 1;
        } else {
          noteLines[idx] = pos;
        }

        if (isMultiline) {
          var lines = notes.split('\n');
          for (var i = 0; i < lines.length; i++) {
            pos = x + lines[i].length * 0.15;
            if (idx + i >= noteLines.length) noteLines.add(0);
            noteLines[idx + i] = math.max(noteLines[idx + i], pos);
          }
        }
// *** end of linelength estimation ***
        if (idx < (isMultiline ? 1 : 3)) {
          var y = graphBottom + notesTop + idx * notesHeight;
          var top = graphBottom;
          if (showNoteLinesAtGluc) {
            EntryData e = day.findNearest(day.entries, null, t.createdAt);
            if (e != null) top = glucY(e.gluc);
          }
          graphGlucCvs.add({
            'type': 'line',
            'x1': cm(x),
            'y1': cm(top),
            'x2': cm(x),
            'y2': cm(y + notesHeight),
            'lineWidth': cm(lw),
            'lineColor': t.duration > 0 ? colDurationNotesLine : colNotesLine
          });
          (graphLegend['stack'] as List).add({
            'relativePosition': {
              'x': cm(x + 0.05),
              'y': cm(y + notesHeight - 0.25)
            },
            'text': notes,
            'fontSize': fs(8),
            'alignment': 'left',
            'color': t.duration > 0 ? colDurationNotes : colNotes
          });
          if (t.duration > 0) {
            x = glucX(t.createdAt.add(Duration(seconds: t.duration)));
            graphGlucCvs.add({
              'type': 'line',
              'x1': cm(x),
              'y1': cm(graphBottom + 0.35),
              'x2': cm(x),
              'y2': cm(y + 0.1),
              'lineWidth': cm(lw),
              'lineColor': colDurationNotesLine
            });
          }
        }
      }
/*
      if (cobPoints.length > 0)cobPoints.add({'x': cobPoints.last['x'],
      'y': cobPoints.first['y']});
      graphCvs.add(cob);
*/
    }

    // this code can be removed, as soon as i know, what i smoked,
    // when i added it.
//*
    if (showExercises && hasExercises) {
      (exerciseCvs['canvas'] as List).add({
        'type': 'line',
        'x1': cm(0),
        'y1': cm(glucExerciseHeight),
        'x2': cm(graphWidth),
        'y2': cm(glucExerciseHeight),
        'lineWidth': cm(lw),
        'lineColor': lcFrame
      });
    }
// */
    for (var info in collInsulin) {
      if (info.sum1 == 0.0) continue;
      var y = sumNarrowValues ? -0.5 : bolusY(info.max1);
      var text =
          '${g.fmtBasal(info.sum1, dontRound: !roundToProfile)} ${msgInsulinUnit}';
      if (info.count > 1) {
        text = '[$text]';
        hasCollectedValues = true;
      }
/*
      (graphInsulin['stack'][1]['stack'] as List).add({
        'relativePosition': {'x': cm(x - 0.3), 'y': cm(y + 0.05),},
        'text': text,
        'fontSize': fs(8),
        'color': colBolus
      });
// */
      (graphInsulin['stack'][1]['stack'] as List).add({
        'relativePosition': {
          'x': cm(glucX(info.start) - 0.05),
          'y': cm(y),
        },
        'text': text,
        'fontSize': fs(g.basalPrecision > 2 ? 7 : 8),
        'color': colBolus
      });
    }

    for (var info in collCarbs) {
      if (info.sum1 == 0.0) continue;
      var y = carbY(info.max1);
      var text = '${msgKH(g.fmtNumber(info.sum1))}';
      if (info.count > 1) {
        text = '[$text]';
        hasCollectedValues = true;
      }
      y -= 0.35;

      if (showCarbIE && info.sum2 > 0.0) {
        var text1 =
            '${g.fmtBasal(info.sum2, dontRound: !roundToProfile)} ${msgInsulinUnit}';
        if (info.count > 1) text1 = '[$text1]';
        (graphCarbs['stack'][1]['stack'] as List).add({
          'relativePosition': {'x': cm(glucX(info.start) - 0.05), 'y': cm(y)},
          'text': text1,
          'fontSize': fs(7),
          'color': colCarbsText
        });
        hasCarbIE = true;
        y -= 0.35;
      }

      (graphCarbs['stack'][1]['stack'] as List).add({
        'relativePosition': {'x': cm(glucX(info.start) - 0.05), 'y': cm(y)},
        'text': text,
        'fontSize': fs(8)
      });
    }

    var date = DateTime(day.date.year, day.date.month, day.date.day);
    var profile = src.profile(date, day.treatments);
    var targetValues = [];
    var lastTarget = -1.0;
    var yHigh = glucY(math.min(glucMax, targets(repData)['high']));
    var yLow = glucY(targets(repData)['low']);
    for (var i = 0; i < profile.store.listTargetLow.length; i++) {
      if (i < profile.store.listTargetHigh.length) {
        var low = profile.store.listTargetLow[i].value;
        var high = profile.store.listTargetHigh[i].value;
        if (!g.glucMGDLFromStatus) {
          low *= 18.02;
          high *= 18.02;
        }
        var x = glucX(profile.store.listTargetLow[i].time(day.date));
        var y = glucY((low + high) / 2);
        if (lastTarget >= 0)
          targetValues.add({'x': cm(x), 'y': cm(lastTarget)});
        targetValues.add({'x': cm(x), 'y': cm(y)});
        lastTarget = y;
      }
    }

    targetValues.add({
      'x': cm(glucX(DateTime(0, 1, 1, 23, 59, 59, 999))),
      'y': cm(lastTarget)
    });

    var limitLines = {
      'relativePosition': {'x': cm(xo), 'y': cm(yo)},
      'canvas': [
        {
          'type': 'rect',
          'x': cm(0.0),
          'y': cm(yHigh),
          'w': cm(24 * grid.colWidth),
          'h': cm(yLow - yHigh),
          'color': colTargetArea,
          'fillOpacity': 0.3
        },
        {
          'type': 'line',
          'x1': cm(0.0),
          'y1': cm(yHigh),
          'x2': cm(24 * grid.colWidth),
          'y2': cm(yHigh),
          'lineWidth': cm(lw),
          'lineColor': colTargetArea
        },
        {
          'type': 'line',
          'x1': cm(0.0),
          'y1': cm(yLow),
          'x2': cm(24 * grid.colWidth),
          'y2': cm(yLow),
          'lineWidth': cm(lw),
          'lineColor': colTargetArea
        },
        {
          'type': 'rect',
          'x': 0,
          'y': 0,
          'w': 0,
          'h': 0,
          'color': '#000',
          'fillOpacity': 1
        }
      ]
    };

    if (showTargetValue) {
      (limitLines['canvas'] as List).add({
        'type': 'polyline',
        'lineWidth': cm(lw * 2),
        'closePath': false,
        'lineColor': colTargetValue,
        'points': targetValues
      });
    }

    var y = yo + grid.lineHeight * grid.gridLines;
    if (showBasalProfile || showBasalDay) {
      y += 1.2 + basalHeight + basalTop;
    } else {
      y += basalTop;
    }

    var legend = LegendData(cm(xo), cm(y), cm(7.0), 6);
    var tdd = day.ieBasalSum(!showBasalDay) + day.ieBolusSum;
    dynamic infoTable = {};

    if (showLegend) {
      addLegendEntry(legend, colValue, msgGlucosekurve, isArea: false);
      if (hasBloody) {
        addLegendEntry(legend, colBloodValues, msgBloody,
            points: [
              {'x': 0.3, 'y': 0.2},
              {'x': 0.4, 'y': 0.2},
              {'x': 0.4, 'y': 0.3},
              {'x': 0.3, 'y': 0.3}
            ],
            isArea: false);
      }
      String text;
      if (hasCarbs) {
        text = '${g.fmtNumber(day.carbs, 0)}';
        addLegendEntry(legend, colCarbs, msgCarbs(text),
            isArea: false, lineWidth: 0.1);
      }
      if (hasCarbIE)
        addLegendEntry(legend, '', msgCarbIE,
            graphText: '1,0 IE', colGraphText: colCarbsText);
      if (splitBolus) {
        var sum = day.ieCorrectionSum;
        if (!showSMB) sum += day.ieSMBSum;
        if (sum > 0.0) {
          addLegendEntry(
              legend,
              colBolus,
              msgCorrectBolusInsulin(
                  '${g.fmtBasal(sum, dontRound: !roundToProfile)} ${msgInsulinUnit}'),
              isArea: false,
              lineWidth: 0.1);
        }
        if (hasCarbBolus) {
          addLegendEntry(
              legend,
              colCarbBolus,
              msgCarbBolusInsulin(
                  '${g.fmtBasal(day.ieCarbSum, dontRound: !roundToProfile)} ${msgInsulinUnit}'),
              isArea: false,
              lineWidth: 0.1);
        }
        if (showSMB && day.ieSMBSum > 0.0) {
          addLegendEntry(
              legend,
              colBolus,
              msgSMBInsulin(
                  '${g.fmtBasal(day.ieSMBSum, dontRound: !roundToProfile)} ${msgInsulinUnit}'),
              points: [
                {'x': 0.1, 'y': 0.1},
                {'x': 0.5, 'y': 0.1},
                {'x': 0.3, 'y': 0.4}
              ],
              isArea: false,
              lineWidth: 0.1);
        }
      } else if (hasBolus) {
        addLegendEntry(
            legend,
            colBolus,
            msgBolusInsulin(
                '${g.fmtBasal(day.ieBolusSum, dontRound: !roundToProfile)} ${msgInsulinUnit}'),
            isArea: false,
            lineWidth: 0.1);
      }
      if (hasBolusExt) {
        addLegendEntry(legend, colBolusExt, msgBolusExtInsulin,
            isArea: false, lineWidth: 0.1);
      }
      if (showExercises && hasExercises) {
        addLegendEntry(legend, colExercises, msgExercises,
            isArea: false, lineWidth: 0.3);
      }
      if (showBasalDay) {
        text =
            '${g.fmtBasal(day.ieBasalSum(!showBasalDay), dontRound: !roundToProfile)} ${msgInsulinUnit}';
        addLegendEntry(legend, colBasalDay, msgBasalrateDay(text),
            isArea: true);
      }
      if (showBasalProfile) {
        text =
            '${g.fmtBasal(day.basalData.store.ieBasalSum, dontRound: !roundToProfile)} ${msgInsulinUnit}';
        addLegendEntry(legend, colProfileSwitch, msgBasalrateProfile(text),
            isArea: false);
      }
      text = '${g.fmtBasal(tdd, dontRound: !roundToProfile)} ${msgInsulinUnit}';
      addLegendEntry(legend, '', msgLegendTDD(text), graphText: msgTDD);
      var v1 = g.glucFromData(targets(repData)['low'].toDouble());
      var v2 = g.glucFromData(targets(repData)['high'].toDouble());
      addLegendEntry(legend, colTargetArea,
          msgTargetArea(v1, v2, g.getGlucInfo()['unit']));
      if (showTargetValue) {
        addLegendEntry(
            legend,
            colTargetValue,
            msgTargetValue(
                '${g.glucFromData((profile.targetHigh + profile.targetLow) / 2)} ${g.getGlucInfo()['unit']}'),
            isArea: false);
      }
      if (hasCollectedValues) {
        addLegendEntry(legend, '', msgCollectedValues, graphText: '[0,0]');
      }
      if (hasCatheterChange) {
        addLegendEntry(legend, '', msgCatheterChange,
            image: 'katheter.print', imgWidth: 0.5, imgOffsetY: 0.15);
      }
      if (hasSensorChange) {
        addLegendEntry(legend, '', msgSensorChange,
            image: 'sensor.print', imgWidth: 0.5, imgOffsetY: -0.05);
      }
      if (hasAmpulleChange) {
        addLegendEntry(legend, '', msgAmpulleChange,
            image: 'ampulle.print', imgWidth: 0.4, imgOffsetY: 0.1);
      }
      if (showGlucTable) {
        if (hasLowGluc) {
          addLegendEntry(legend, colLow, msgGlucLow,
              graphText: g.glucFromData(day.basalData.targetLow),
              newColumn: legend.columns.length < 3);
        }
        if (hasNormGluc) {
          addLegendEntry(legend, colNorm, msgGlucNorm,
              graphText: g.glucFromData(
                  (day.basalData.targetLow + day.basalData.targetHigh) / 2),
              newColumn: !hasLowGluc && legend.columns.length < 3);
        }
        if (hasHighGluc) {
          addLegendEntry(legend, colHigh, msgGlucHigh,
              graphText: g.glucFromData(day.basalData.targetHigh),
              newColumn:
                  !hasLowGluc && !hasNormGluc && legend.columns.length < 3);
        }
      }

      var infoBody = [];
      infoTable = {
        'relativePosition': {'x': cm(xo + graphWidth - 4.5), 'y': cm(y - 0.1)},
        'table': {
          'margins': [0, 0, 0, 0],
          'widths': [cm(2.3), cm(2.2)],
          'body': infoBody
        },
        'layout': 'noBorders'
      };

      infoBody.add([
        {'text': msgHbA1C, 'fontSize': fs(10)},
        {
          'text': '${hba1c(day.mid)} %',
          'color': colHbA1c,
          'fontSize': fs(10),
          'alignment': 'right'
        }
      ]);
      var prz = day.ieBasalSum(!showBasalDay) /
          (day.ieBasalSum(!showBasalDay) + day.ieBolusSum) *
          100;
      infoBody.add([
        {'text': msgBasalSum, 'fontSize': fs(10)},
        {
          'text': '${g.fmtNumber(prz, 1)} %',
          'color': colBasalDay,
          'fontSize': fs(10),
          'alignment': 'right'
        }
      ]);
      prz = day.ieBolusSum /
          (day.ieBasalSum(!showBasalDay) + day.ieBolusSum) *
          100;
      infoBody.add([
        {'text': msgBolusSum, 'fontSize': fs(10)},
        {
          'text': '${g.fmtNumber(prz, 1)} %',
          'color': colBolus,
          'fontSize': fs(10),
          'alignment': 'right'
        }
      ]);
      if (showZeroBasal) {
        var duration = Duration(seconds: day.basalZeroDuration);
        infoBody.add([
          {'text': msgBasalZero, 'fontSize': fs(10)},
          {
            'text':
                '${msgDuration(duration.inHours, duration.inMinutes - duration.inHours * 60)}',
            'color': colBasalDay,
            'fontSize': fs(10),
            'alignment': 'right'
          }
        ]);
      }
    }

    var profileBasal = showBasalProfile
        ? getBasalGraph(day, true, showBasalDay, xo, yo)
        : null;
    var dayBasal =
        showBasalDay ? getBasalGraph(day, false, false, xo, yo) : null;

    if (showBasalProfile) {
      profileBasal['stack'].add(
        {
          'relativePosition': {
            'x': cm(xo),
            'y': cm(yo + graphHeight + basalHeight + basalTop + 0.2)
          },
          'columns': [
            {
              'width': cm(basalWidth),
              'text':
                  '${msgTDD} ${g.fmtBasal(tdd, dontRound: !roundToProfile)} ${msgInsulinUnit}',
              'fontSize': fs(20),
              'alignment': 'center',
              'color': colBasalDay
            }
          ]
        },
      );
    }

    List stack;
    if (showBasalProfile) {
      stack = profileBasal['stack'];
    } else if (showBasalDay) {
      stack = dayBasal['stack'];
    }

    if (stack != null) {
      var startDate = DateTime(day.date.year, day.date.month, day.date.day);
      startDate = startDate.add(Duration(minutes: -1));
      ProfileData startProfile;
      ProfileData lastProfile;
      for (var p in src.profiles) {
        if (p.startDate.isBefore(startDate)) startProfile = p;
        if (p.startDate.isAfter(startDate) && day.isSameDay(p.startDate)) {
          showProfileSwitch(src, p, lastProfile, stack, xo, yo);
          lastProfile = p;
        }
      }
      if (startProfile != null && showProfileStart) {
        showProfileSwitch(
            src, startProfile, lastProfile, stack, xo, yo, glucX(DateTime(0)));
      }
    }

    String error;

/*
    if (!g.checkJSON(glucTableCvs))error = 'glucTableCvs';
    if (!g.checkJSON(vertLegend))error = 'vertLegend';
    if (!g.checkJSON(vertLines))error = 'vertLines';
    if (!g.checkJSON(horzLegend))error = 'horzLegend';
    if (!g.checkJSON(horzLines))error = 'horzLines';
*/
    if (error != null) {
      return Page(isPortrait, [
        headerFooter(date: day.date),
        {
          'relativePosition': {'x': cm(xo), 'y': cm(yo)},
          'text': 'Fehler bei $error',
          'color': 'red'
        }
      ]);
    }

    dynamic graphArea(dynamic points, String colLine, String colFill) => {
          'type': 'polyline',
          'lineWidth': cm(lw),
          'closePath': true,
          'color': colFill,
          'lineColor': colLine,
          'points': points
        };
//    double cobHeight = 0;
    dynamic graphIob = {};
    dynamic graphCob = {};

    if (showCOB || showIOB) {
      var hc = [];
      var vs = [];
      var pts = getIobCob(
          xo, yo, graphWidth, graphHeight, hc, vs, day, ieMax * 4, carbMax);

      if (showIOB) {
        graphIob = {
//          'relativePosition': {'x': cm(xo), 'y': cm(yo + graphHeight - pts['iobHeight'] + pts['iobTop'])},
          'relativePosition': {'x': cm(xo), 'y': cm(yo - pts['iobTop'])},
          'canvas': []
        };
        List graphIobCvs = graphIob['canvas'];
        graphIobCvs.add(graphArea(pts['iob'], colIOBDaily, colIOBDaily));
      }
      if (showCOB) {
        graphCob = {
          'relativePosition': {
            'x': cm(xo),
            'y': cm(yo + graphHeight - pts['cobHeight'])
          },
          'canvas': []
        };
        List graphCobCvs = graphCob['canvas'];
        graphCobCvs.add(graphArea(pts['cob'], colCOBDaily, colCOBDaily));
      }
    }

    var ret = Page(isPortrait, [
      headerFooter(date: day.date),
      graphIob,
      graphCob,
      glucTableCvs,
      exerciseCvs,
      vertLegend,
      vertLines,
      horzLegend,
      horzLines,
      limitLines,
      pictures,
      graphGluc,
      graphInsulin,
      graphCarbs,
      glucTable,
      dayBasal,
      profileBasal,
      graphLegend,
    ]);

    if (legend.asOutput != null) {
      ret.content.add(legend.asOutput);
      ret.content.add(infoTable);
    }

    return ret;
  }

  void showProfileSwitch(ReportData src, ProfileData p, ProfileData last,
      List stack, double xo, double yo,
      [double x]) {
    if (last != null && p.storeHash == last.storeHash) return;
    x ??= glucX(p.startDate);
    var y = graphHeight + basalTop + basalHeight;
    if (x < width) {
      (stack[0]['canvas'] as List).add({
        'type': 'line',
        'x1': cm(x),
        'y1': cm(0),
        'x2': cm(x),
        'y2': cm(basalHeight + 0.25),
        'lineWidth': cm(lw),
        'lineColor': colProfileSwitch
      });
      stack.add({
        'relativePosition': {'x': cm(xo + x + 0.1), 'y': cm(yo + y)},
        'text': src.profile(p.startDate).store.name,
        'fontSize': fs(8),
        'color': colProfileSwitch
      });
    }
  }

  dynamic getBasalGraph(
      DayData day, bool useProfile, bool displayProfile, double xo, double yo) {
    List<ProfileEntryData> data;
    double basalSum;
    String color;

    if (useProfile) {
      data = day.basalData.store.listBasal;
      color = colProfileSwitch; //colBasalProfile;
    } else {
      data = day.profile;
      color = colBasalDay;
    }

    basalSum = day.ieBasalSum(!useProfile);
    var basalCvs = [];
    var ret = {
      'stack': [
        {
          'relativePosition': {
            'x': cm(xo),
            'y': cm(yo + graphHeight + basalTop)
          },
          'canvas': basalCvs
        }
      ]
    };
    if (basalSum != 0) {
      ret['stack'].add(
        {
          'relativePosition': {
            'x': cm(xo),
            'y': cm(yo + graphHeight + basalHeight + basalTop + 0.2)
          },
          'columns': [
            {
              'width': cm(basalWidth),
              'text':
                  '${g.fmtBasal(basalSum, dontRound: !roundToProfile)} ${msgInsulinUnit}',
              'fontSize': fs(20),
              'alignment': displayProfile ? 'right' : 'left',
              'color': color
            }
          ]
        },
      );
    }
    var lastY = -1.0;
    var areaPoints = [];
    var area = {
      'type': 'polyline',
      'lineWidth': cm(lw),
      'closePath': !displayProfile,
      'color': !displayProfile ? blendColor(color, '#ffffff', 0.7) : null,
      'lineColor': color,
      'dash': displayProfile ? {'length': cm(0.1), 'space': cm(0.05)} : {},
      'points': areaPoints,
//      'fillOpacity': opacity
    };

    var temp = <ProfileEntryData>[];
    for (var entry in data) {
      temp.add(entry);
    }
    if (useProfile) {
      temp.sort((a, b) =>
          a.time(day.date, useProfile).compareTo(b.time(day.date, useProfile)));

      if (temp.isEmpty)
        temp.add(ProfileEntryData(ProfileTimezone(Globals.refTimezone)));
      if (temp[0].timeAsSeconds != -temp[0].localDiff * 60 * 60) {
        var clone = temp[0].clone(DateTime(0, 1, 1, -temp[0].localDiff, 0));
        temp.insert(0, clone);
      }
    }

    if (!displayProfile)
      areaPoints.add(
          {'x': cm(basalX(DateTime(0, 1, 1, 0, 0))), 'y': cm(basalY(0.0))});
    for (var entry in temp) {
      var x = basalX(entry.time(day.date, useProfile));
      var y = basalY(entry.value); //basalY(entry.adjustedValue(entry.value));
      if (lastY >= 0) areaPoints.add({'x': cm(x), 'y': cm(lastY)});
      areaPoints.add({'x': cm(x), 'y': cm(y)});
      lastY = y;
    }
    if (lastY >= 0)
      areaPoints
          .add({'x': cm(basalX(DateTime(0, 1, 1, 23, 59))), 'y': cm(lastY)});
    if (!displayProfile)
      areaPoints.add(
          {'x': cm(basalX(DateTime(0, 1, 1, 23, 59))), 'y': cm(basalY(0.0))});
    basalCvs.add(area);
//    basalCvs.add({"type": "rect", "x": 0, "y": 0, "w": 1, "h": 1, "fillOpacity": 1});
    return ret;
  }

  void paintECarbs(double eCarbs, double x, double y, List cvs) {
    var h = graphHeight - carbY(eCarbs);
    cvs.add({
      'type': 'polyline',
      'closePath': true,
      '_lineColor': '#000000',
      'color': colCarbs,
      'lineWidth': cm(0),
      'points': [
        {'x': cm(x), 'y': cm(y - h - 0.1)},
        {'x': cm(x + 0.1), 'y': cm(y)},
        {'x': cm(x - 0.1), 'y': cm(y)}
      ],
    });
  }
}
