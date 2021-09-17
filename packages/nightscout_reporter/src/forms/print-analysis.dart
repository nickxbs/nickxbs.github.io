import 'package:intl/intl.dart';
import 'package:nightscout_reporter/src/json_data.dart';

import 'base-print.dart';

class PrintAnalysis extends BasePrint {
  @override
  String help =
      Intl.message('''Dieses Formular zeigt die Auswertung der Werte des ausgewählten Zeitraums. Dabei wird auch
der durchscnittliche Verbrauch an Materialien rechnerisch ermittelt und angezeigt. Dieses Formular beinhaltet
die meisten Informationen, die Diabetologen gerne wissen wollen.

Der HbA1c wird rechnerisch aus den vorhandenen Daten ermittelt und weicht normalerweise nicht unerheblich von
dem tatsächlich gemessenen Wert ab. Der Wert, der aus der Blutprobe ermittelt wird, gibt die tatsächliche
Bindung von Glukose im Blut wieder. Da diese von zusätzlichen Faktoren abhängig ist und nicht nur von den hier
verwendeten Messdaten, ergeben sich Unterschiede zum errechneten Wert. Vor allem, wenn es sich bei den gemessenen
Werten nicht um Blutzucker, sondern um Gewebszucker handelt, wie er von CGM-Systemen verwendet wird.

Trotzdem ist dieser Wert ein grober Anhaltspunkt für die Qualität der Glukoseeinstellung und wird in der vom Labor
ermittelten Form gerne von Diabetologen als Richtwert verwendet, weshalb er hier angezeigt wird. Er wird aber in
schwächerer Schrift ausgegeben, damit seine zweifelhafte Natur auch erkennbar ist.''', desc: 'help for analysis');

  @override
  String id = 'analysis';

  @override
  String idx = '01';

  @override
  String get title => Intl.message('Auswertung');

  bool isPreciseMaterial, isPreciseTarget, showStdAbw, showHypoGlucs, useDailyBasalrate;

  int get _precisionMaterial => isPreciseMaterial ? 2 : 0;

  int get _precisionTarget => isPreciseTarget ? 1 : 0;

  bool useFineLimits;

  @override
  List<ParamInfo> params = [
    ParamInfo(0, msgParam1, boolValue: true, thumbValue: false),
    ParamInfo(1, msgParam2, boolValue: false),
    ParamInfo(2, msgParam3, boolValue: false),
    ParamInfo(3, msgParam4, boolValue: false),
    ParamInfo(4, msgParam5, boolValue: false),
    ParamInfo(5, BasePrint.msgUseDailyBasalrate, boolValue: true, isLoopValue: true),
  ];

  @override
  bool get isPortrait => true;

  PrintAnalysis() {
    init();
  }

  @override
  void extractParams() {
    isPreciseMaterial = params[0].boolValue;
    isPreciseTarget = params[1].boolValue;
    showStdAbw = params[2].boolValue;
    useFineLimits = params[3].boolValue;
    showHypoGlucs = params[4].boolValue;
    useDailyBasalrate = params[5].boolValue;
  }

  @override
  dynamic get estimatePageCount => {'count': 1, 'isEstimated': false};

  static String get msgParam1 => Intl.message('Material mit Nachkommastellen');

  static String get msgParam2 => Intl.message('Zielbereich mit Nachkommastellen');

  static String get msgParam3 => Intl.message('Standardabweichung statt Anzahl');

  static String get msgParam4 => Intl.message('Standardbereich mit feinerer Abstufung');

  static String get msgParam5 => Intl.message('Unterzuckerungen anzeigen');

  String msgHypoTitle(value) {
    return Intl.message('Unterzuckerungen (< $value)', args: [value], name: 'msgHypoTitle');
  }

  String get msgHypoCount => Intl.message('Anzahl Unterzuckerungen');

  String get msgHypoDate => Intl.message('Letzte Unterzuckerung');

  String get msgNoHypo => Intl.message('Keine');

  void addBodyArea(List body, String title, List lines, {showLine = true}) {
    if (showLine) {
      body.add([
        {
          'canvas': [
            {'type': 'line', 'x1': cm(0), 'y1': cm(0.2), 'x2': cm(13.5), 'y2': cm(0.2), 'lineWidth': cm(0.01)}
          ],
          'colSpan': 6
        }
      ]);
    }
    body.add([
      {
        'columns': [
          {'width': cm(13.5), 'text': title, 'fontSize': fs(8), 'color': '#606060', 'alignment': 'center'}
        ],
        'colSpan': 6,
      }
    ]);

    for (dynamic line in lines) {
      if (line[0]['@'] != null) {
        if (line[0]['@'] == false) {
          continue;
        } else {
          line.removeAt(0);
        }
      }
      body.add(line);
    }
  }

/*
  getFactorBody(Date date, List<ProfileEntryData> list, msg(String a, String b))
  {
    dynamic ret = [];
    for (int i = 0; i < list.length; i++)
    {
      ProfileEntryData entry = list[i];
      DateTime end = DateTime(0, 1, 1, 23, 59);
      if (i < list.length - 1)end = list[i + 1].time(date);
      ret.add([
        {'text': msg(fmtTime(entry.time, withUnit: true), fmtTime(end, withUnit: true)), 'style': 'infotitle'},
        {'text': g.fmtNumber(entry.value, 1, false), 'style': 'infodata'},
      ]);
    }
    return ret;
  }
*/
  String fillLimitInfo(var stat) {
    if (showStdAbw) return msgStdAbw(stat.stdAbw);

    return msgCount(stat.values.length);
  }

  @override
  void fillPages(List<Page> pages) {
    pages.add(getPage());
    if (g.showBothUnits) {
      g.glucMGDLIdx = 1;
      pages.add(getPage());
      g.glucMGDLIdx = 2;
    }
//    if (showInfoSheet)pages.add(getInfoPage(src));
  }

  Page getPage() {
    titleInfo = titleInfoBegEnd();
    var data = repData.data;

    var avgGluc = data.avgGluc;
    var glucWarnColor = colNorm;
    var glucWarnText = '';
//    if (hba1c > 7)glucWarnColor = blendColor("ffffff", "ff0000", (hba1c - 7) / 2);
    if (avgGluc >= repData.status.settings.thresholds.bgTargetTop &&
        avgGluc < repData.status.settings.thresholds.bgTargetTop) {
      glucWarnColor = blendColor(
          glucWarnColor,
          colHigh,
          (avgGluc - repData.status.settings.thresholds.bgTargetTop) /
              (180 - repData.status.settings.thresholds.bgTargetTop));
    } else if (avgGluc < repData.status.settings.thresholds.bgTargetBottom) {
      glucWarnColor = blendColor(
          glucWarnColor,
          colHigh,
          (repData.status.settings.thresholds.bgTargetBottom - avgGluc) /
              (repData.status.settings.thresholds.bgTargetBottom));
    } else if (avgGluc > repData.status.settings.thresholds.bgTargetTop) glucWarnColor = colHigh;
/*
    var pumpList = [];
    for (var entry in config ['pumps'])
    {
      var pump = {'style': 'persdata'};
      pump['text'] = '${fmtDate(entry['since'])}, ${entry['name']}';
      pumpList.add(pump);
    }

*/
    var cntp = repData.dayCount > 0 ? (data.countValid / repData.dayCount) : 0;
    String countPeriod = msgReadingsPerDay(cntp.toInt(), g.fmtNumber(cntp));
    if (cntp > 24) {
      cntp /= 24;
      countPeriod = msgReadingsPerHour(cntp.toInt(), g.fmtNumber(cntp));
      if (cntp > 6) {
        cntp = 60 / cntp;
        countPeriod = msgReadingsInMinutes(cntp.toInt(), g.fmtNumber(cntp, 1));
      }
    }

    var f = 1.5;
    var f1 = 2.5;

    var totalDay = DayData(null, ProfileGlucData(ProfileStoreData('Intern')));
    totalDay.entries.addAll(data.entries);
    totalDay.init();

    var count = data.validCount;

    var tgHigh = data.stat['high'].values.length / count * f;
    var tgNorm = data.stat['norm'].values.length / count * f;
    var tgLow = data.stat['low'].values.length / count * f;
/*
    double above180 = data.entriesAbove(180) / count * (useFineLimits ? f1 : f);
    double in70180 = data.entriesIn(70, 180) / count * (useFineLimits ? f1 : f);
    double below70 = data.entriesBelow(70) / count * (useFineLimits ? f1 : f);
    double above250 = data.entriesAbove(250) / count * f1;
    double in180250 = data.entriesIn(180, 250) / count * f1;
    double in5470 = data.entriesIn(54, 70) / count * f1;
    double below54 = data.entriesBelow(54) / count * f1;
*/
    var above180 = data.stat['stdHigh'].values.length / count * (useFineLimits ? f1 : f);
    var in70180 = data.stat['stdNorm'].values.length / count * (useFineLimits ? f1 : f);
    var below70 = data.stat['stdLow'].values.length / count * (useFineLimits ? f1 : f);

    var above250 = data.stat['stdVeryHigh'].values.length / count * f1;
    var in180250 = data.stat['stdNormHigh'].values.length / count * f1;
    var in5470 = data.stat['stdNormLow'].values.length / count * f1;
    var below54 = data.stat['stdVeryLow'].values.length / count * f1;
/*
    above250 = (data.count / 5) / data.count * f1;
    in180250 = above250;
    in5470 = above250;
    below54 = above250;
    in70180 = above250;
*/
    var txt = g.fmtNumber(repData.dayCount / data.ampulleCount, _precisionMaterial, 0, '', true);
    String ampulleCount =
        data.ampulleCount > 1 ? msgReservoirDays((repData.dayCount / data.ampulleCount).round(), txt) : '';
    var tableBody = [
      [
        {'text': '', 'style': 'infotitle'},
        {'text': msgDays, 'style': 'infotitle'},
        {'text': repData.dayCount, 'style': 'infodata'},
        {'text': '', 'style': 'infounit', 'colSpan': 3},
        {'text': '', 'style': 'infounit'},
      ],
      [
        {'text': '', 'style': 'infotitle'},
        {'text': msgReadingsCount, 'style': 'infotitle'},
        {'text': g.fmtNumber(count), 'style': 'infodata'},
        {'text': '($countPeriod)', 'style': 'infounit', 'colSpan': 3},
        {'text': '', 'style': 'infounit'},
      ],
      [
        {'text': '', 'style': 'infotitle'},
        {'text': msgReservoirCount, 'style': 'infotitle'},
        {'text': g.fmtNumber(data.ampulleCount), 'style': 'infodata'},
        {'text': ampulleCount, 'style': 'infounit', 'colSpan': 3},
        {'text': '', 'style': 'infounit'},
      ],
      [
        {'text': '', 'style': 'infotitle'},
        {'text': msgCatheterCount, 'style': 'infotitle'},
        {'text': g.fmtNumber(data.catheterCount), 'style': 'infodata'},
        {
          'text': data.catheterCount > 1
              ? msgCatheterDays((repData.dayCount / data.catheterCount).round(),
                  g.fmtNumber(repData.dayCount / data.catheterCount, _precisionMaterial, 0, '', true))
              : '',
          'style': 'infounit',
          'colSpan': 3
        },
        {'text': '', 'style': 'infounit'},
      ],
      [
        {'text': '', 'style': 'infotitle'},
        {'text': msgSensorCount, 'style': 'infotitle'},
        {'text': g.fmtNumber(data.sensorCount), 'style': 'infodata'},
        {
          'text': data.sensorCount > 1
              ? msgSensorDays((repData.dayCount / data.sensorCount).round(),
                  g.fmtNumber(repData.dayCount / data.sensorCount, _precisionMaterial, 0, '', true))
              : '',
          'style': 'infounit',
          'colSpan': 3
        },
        {'text': '', 'style': 'infounit'},
      ]
    ];

    var cvsLeft = -0.5;
    var cvsWidth = 0.8;
    if ((repData.status.settings.thresholds.bgTargetBottom != 70 ||
            repData.status.settings.thresholds.bgTargetTop != 180) &&
        !g.ppComparable) {
      addBodyArea(tableBody, msgOwnLimits, [
        [
          {'text': '', 'style': 'infotitle'},
          {
            'text': msgValuesAbove(
                '${g.glucFromData(repData.status.settings.thresholds.bgTargetTop)} ${g.getGlucInfo()['unit']}'),
            'style': 'infotitle'
          },
          {
            'text': '${g.fmtNumber(data.stat['high'].values.length / count * 100, _precisionTarget)} %',
            'style': 'infodata'
          },
          {'text': fillLimitInfo(data.stat['high']), 'style': 'infounit', 'colSpan': 2},
          {'text': '', 'style': 'infounit'},
          {
            'canvas': [
              {'type': 'rect', 'x': cm(cvsLeft), 'y': cm(0), 'w': cm(cvsWidth), 'h': cm(tgHigh), 'color': colHigh},
              {'type': 'rect', 'x': cm(cvsLeft), 'y': cm(tgHigh), 'w': cm(cvsWidth), 'h': cm(tgNorm), 'color': colNorm},
              {
                'type': 'rect',
                'x': cm(cvsLeft),
                'y': cm(tgHigh + tgNorm),
                'w': cm(cvsWidth),
                'h': cm(tgLow),
                'color': colLow
              },
            ],
            'rowSpan': 3
          },
        ],
        [
          {'text': '', 'style': 'infotitle'},
          {
            'text': msgValuesIn(
                '${g.glucFromData(repData.status.settings.thresholds.bgTargetBottom)} ${g.getGlucInfo()['unit']}',
                '${g.glucFromData(repData.status.settings.thresholds.bgTargetTop)} ${g.getGlucInfo()['unit']}'),
            'style': 'infotitle'
          },
          {
            'text': '${g.fmtNumber(data.stat['norm'].values.length / count * 100, _precisionTarget)} %',
            'style': 'infodata'
          },
          {'text': fillLimitInfo(data.stat['norm']), 'style': 'infounit', 'colSpan': 2},
          {'text': '', 'style': 'infounit'},
          {'text': '', 'style': 'infounit'},
        ],
        [
          {'text': '', 'style': 'infotitle'},
          {
            'text': msgValuesBelow(
                '${g.glucFromData(repData.status.settings.thresholds.bgTargetBottom)} ${g.getGlucInfo()['unit']}'),
            'style': 'infotitle'
          },
          {
            'text': '${g.fmtNumber(data.stat['low'].values.length / count * 100, _precisionTarget)} %',
            'style': 'infodata'
          },
          {'text': fillLimitInfo(data.stat['low']), 'style': 'infounit', 'colSpan': 2},
          {'text': '', 'style': 'infounit'},
          {'text': '', 'style': 'infounit'},
        ]
      ]);
    }

    if (useFineLimits) {
      addBodyArea(tableBody, msgStandardLimits, [
        [
          {'text': '', 'style': 'infotitle'},
          {'text': msgValuesVeryHigh('${g.glucFromData(250)} ${g.getGlucInfo()['unit']}'), 'style': 'infotitle'},
          {
            'text': '${g.fmtNumber(data.stat['stdVeryHigh'].values.length / count * 100, _precisionTarget)} %',
            'style': 'infodata'
          },
          {'text': fillLimitInfo(data.stat['stdVeryHigh']), 'style': 'infounit', 'colSpan': 2},
          {'text': '', 'style': 'infounit'},
          {
            'canvas': [
              {'type': 'rect', 'x': cm(cvsLeft), 'y': cm(0), 'w': cm(cvsWidth), 'h': cm(above250), 'color': colHigh},
              {
                'type': 'rect',
                'x': cm(cvsLeft),
                'y': cm(above250),
                'w': cm(cvsWidth),
                'h': cm(in180250),
                'color': colNormHigh
              },
              {
                'type': 'rect',
                'x': cm(cvsLeft),
                'y': cm(above250 + in180250),
                'w': cm(cvsWidth),
                'h': cm(in70180),
                'color': colNorm
              },
              {
                'type': 'rect',
                'x': cm(cvsLeft),
                'y': cm(above250 + in180250 + in70180),
                'w': cm(cvsWidth),
                'h': cm(in5470),
                'color': colNormLow
              },
              {
                'type': 'rect',
                'x': cm(cvsLeft),
                'y': cm(above250 + in180250 + in70180 + in5470),
                'w': cm(cvsWidth),
                'h': cm(below54),
                'color': colLow
              },
            ],
            'rowSpan': 3
          },
        ],
        [
          {'text': '', 'style': 'infotitle'},
          {
            'text': msgValuesNormHigh('${g.glucFromData(180)} ${g.getGlucInfo()['unit']}'
                ' - ${g.glucFromData(250)} ${g.getGlucInfo()['unit']}'),
            'style': 'infotitle'
          },
          {
            'text': '${g.fmtNumber(data.stat['stdNormHigh'].values.length / count * 100, _precisionTarget)} %',
            'style': 'infodata'
          },
          {'text': fillLimitInfo(data.stat['stdNormHigh']), 'style': 'infounit', 'colSpan': 2},
          {'text': '', 'style': 'infounit'},
          {'text': '', 'style': 'infounit'},
        ],
        [
          {'text': '', 'style': 'infotitle'},
          {
            'text': msgValuesNorm('${g.glucFromData(70)} ${g.getGlucInfo()['unit']}',
                '${g.glucFromData(180)} ${g.getGlucInfo()['unit']}'),
            'style': 'infotitle'
          },
          {
            'text': '${g.fmtNumber(data.stat['stdNorm'].values.length / count * 100, _precisionTarget)} %',
            'style': 'infodata'
          },
          {'text': fillLimitInfo(data.stat['stdNorm']), 'style': 'infounit', 'colSpan': 2},
          {'text': '', 'style': 'infounit'},
          {'text': '', 'style': 'infounit'},
        ],
        [
          {'text': '', 'style': 'infotitle'},
          {
            'text': msgValuesNormLow(
                '${g.glucFromData(54)} ${g.getGlucInfo()['unit']} - ${g.glucFromData(70)} ${g.getGlucInfo()['unit']}'),
            'style': 'infotitle'
          },
          {
            'text': '${g.fmtNumber(data.stat['stdNormLow'].values.length / count * 100, _precisionTarget)} %',
            'style': 'infodata'
          },
          {'text': fillLimitInfo(data.stat['stdNormLow']), 'style': 'infounit', 'colSpan': 2},
          {'text': '', 'style': 'infounit'},
          {'text': '', 'style': 'infounit'},
        ],
        [
          {'text': '', 'style': 'infotitle'},
          {'text': msgValuesVeryLow('${g.glucFromData(54)} ${g.getGlucInfo()['unit']}'), 'style': 'infotitle'},
          {
            'text': '${g.fmtNumber(data.stat['stdVeryLow'].values.length / count * 100, _precisionTarget)} %',
            'style': 'infodata'
          },
          {'text': fillLimitInfo(data.stat['stdVeryLow']), 'style': 'infounit', 'colSpan': 2},
          {'text': '', 'style': 'infounit'},
          {'text': '', 'style': 'infounit'},
        ],
      ]);
    } else {
      addBodyArea(tableBody, msgStandardLimits, [
        [
          {'text': '', 'style': 'infotitle'},
          {'text': msgValuesAbove('${g.glucFromData(180)} ${g.getGlucInfo()['unit']}'), 'style': 'infotitle'},
          {
            'text': '${g.fmtNumber(data.stat['stdHigh'].values.length / count * 100, _precisionTarget)} %',
            'style': 'infodata'
          },
          {'text': fillLimitInfo(data.stat['stdHigh']), 'style': 'infounit', 'colSpan': 2},
          {'text': '', 'style': 'infounit'},
          {
            'canvas': [
              {'type': 'rect', 'x': cm(cvsLeft), 'y': cm(0), 'w': cm(cvsWidth), 'h': cm(above180), 'color': colHigh},
              {
                'type': 'rect',
                'x': cm(cvsLeft),
                'y': cm(above180),
                'w': cm(cvsWidth),
                'h': cm(in70180),
                'color': colNorm
              },
              {
                'type': 'rect',
                'x': cm(cvsLeft),
                'y': cm(above180 + in70180),
                'w': cm(cvsWidth),
                'h': cm(below70),
                'color': colLow
              },
            ],
            'rowSpan': 3
          },
        ],
        [
          {'text': '', 'style': 'infotitle'},
          {
            'text': msgValuesIn('${g.glucFromData(70)} ${g.getGlucInfo()['unit']}',
                '${g.glucFromData(180)} ${g.getGlucInfo()['unit']}'),
            'style': 'infotitle'
          },
          {
            'text': '${g.fmtNumber(data.stat['stdNorm'].values.length / count * 100, _precisionTarget)} %',
            'style': 'infodata'
          },
          {'text': fillLimitInfo(data.stat['stdNorm']), 'style': 'infounit', 'colSpan': 2},
          {'text': '', 'style': 'infounit'},
          {'text': '', 'style': 'infounit'},
        ],
        [
          {'text': '', 'style': 'infotitle'},
          {'text': msgValuesBelow('${g.glucFromData(70)} ${g.getGlucInfo()['unit']}'), 'style': 'infotitle'},
          {
            'text': '${g.fmtNumber(data.stat['stdLow'].values.length / count * 100, _precisionTarget)} %',
            'style': 'infodata'
          },
          {'text': fillLimitInfo(data.stat['stdLow']), 'style': 'infounit', 'colSpan': 2},
          {'text': '', 'style': 'infounit'},
          {'text': '', 'style': 'infounit'},
        ],
      ]);
    }

    if (showHypoGlucs) {
      var uzCount = 0;
      EntryData lastEntry;
      for (var entry in data.stat['stdVeryLow'].entries) {
        if (lastEntry == null || entry.time.difference(lastEntry.time).inMinutes > 30) {
          uzCount++;
          lastEntry = entry;
        }
      }

      addBodyArea(tableBody, msgHypoTitle('${g.glucFromData(54)} ${g.getGlucInfo()['unit']}'), [
        [
          {'text': '', 'style': 'infotitle'},
          {'text': msgHypoCount, 'style': 'infotitle'},
          {'text': '', 'style': 'infodata'},
          {'text': '${uzCount}', 'style': 'infounit'},
          {'text': '', 'style': 'infotitle'},
          {'text': '', 'style': 'infounit'},
        ],
        [
          {'text': '', 'style': 'infotitle'},
          {'text': msgHypoDate, 'style': 'infotitle'},
          {'text': '', 'style': 'infodata'},
          {'text': '${lastEntry != null ? fmtDateTime(lastEntry.time) : msgNoHypo}', 'style': 'infounit', 'colSpan': 3},
          {'text': '', 'style': 'infotitle'},
          {'text': '', 'style': 'infounit'},
        ],
      ]);
    }

    addBodyArea(tableBody, msgPeriod, [
      [
        {'text': '', 'style': 'infotitle'},
        {'text': msgLowestValue, 'style': 'infotitle'},
        {'text': '${g.glucFromData(data.min)}', 'style': 'infodata'},
        {'text': g.getGlucInfo()['unit'], 'style': 'infounit'},
        {'text': '', 'style': 'infotitle'},
        {'text': '', 'style': 'infounit'},
      ],
      [
        {'text': '', 'style': 'infotitle'},
        {'text': msgHighestValue, 'style': 'infotitle'},
        {'text': '${g.glucFromData(data.max)}', 'style': 'infodata'},
        {'text': g.getGlucInfo()['unit'], 'style': 'infounit', 'colSpan': 2},
        {'text': '', 'style': 'infotitle'},
        {'text': '', 'style': 'infounit'},
      ],
      [
        {'text': '', 'style': 'infotitle'},
        {'text': msgStandardDeviation, 'style': 'infotitle'},
        {'text': g.fmtNumber(totalDay.stdAbw(g.glucMGDL), 1), 'style': 'infodata'},
        {'text': g.getGlucInfo()['unit'], 'style': 'infounit', 'colSpan': 2},
        {'text': '', 'style': 'infotitle'},
        {'text': '', 'style': 'infounit'},
      ],
      [
        {'text': '', 'style': 'infotitle'},
        {'text': msgGVIFull, 'style': 'infotitle'},
        {'text': g.fmtNumber(data.gvi, 2), 'style': 'infodata'},
        {'text': gviQuality(data.gvi), 'style': 'infounit', 'colSpan': 2},
        {'text': '', 'style': 'infotitle'},
        {'text': '', 'style': 'infounit'},
      ],
      [
        {'text': '', 'style': 'infotitle'},
        {'text': msgPGSFull, 'style': 'infotitle'},
        {'text': g.fmtNumber(data.pgs, 2), 'style': 'infodata'},
        {'text': pgsQuality(data.pgs), 'style': 'infounit', 'colSpan': 2},
        {'text': '', 'style': 'infotitle'},
        {'text': '', 'style': 'infounit'},
      ],
      [
        {'text': '', 'style': 'infotitle'},
        {'text': '${msgGlucoseValue}${glucWarnText}', 'style': 'infotitle'},
        {'text': g.glucFromData(avgGluc), 'style': 'infodata'},
        {'text': '${g.getGlucInfo()['unit']}', 'style': 'infounit', 'colSpan': 2},
        {'text': '', 'style': 'infotitle'},
        {
          'canvas': [
            {'type': 'rect', 'x': cm(cvsLeft), 'y': cm(0.2), 'w': cm(cvsWidth), 'h': cm(0.9), 'color': glucWarnColor},
          ],
          'rowSpan': 3
        },
      ],
      [
        {'text': '', 'style': 'infotitle'},
        {'text': msgHbA1CLong, 'style': 'infotitle'},
        {
          'text': hba1c(avgGluc),
          'style': ['infodata', 'hba1c']
        },
        {
          'text': '%',
          'style': ['hba1c', 'infounit'],
          'colSpan': 2
        },
        {'text': '', 'style': 'infotitle'},
        {'text': '', 'style': 'infounit'},
      ],
    ]);

    addBodyArea(tableBody, msgTreatments, [
      [
        {'text': '', 'style': 'infotitle'},
        {'text': msgKHPerDay, 'style': 'infotitle'},
        {'text': g.fmtNumber(data.khCount / repData.dayCount, 1, 0), 'style': 'infodata'},
        {'text': msgKHBE(g.fmtNumber(data.khCount / repData.dayCount / 12, 1, 0)), 'style': 'infounit', 'colSpan': 2},
        {'text': '', 'style': 'infotitle'},
        {'text': '', 'style': 'infounit'},
      ],
      [
        {'text': '', 'style': 'infotitle'},
        {'text': msgInsulinPerDay, 'style': 'infotitle'},
        {'text': '${g.fmtNumber(data.TDD(!useDailyBasalrate) / repData.dayCount, 1)}', 'style': 'infodata'},
        {'text': '${msgInsulinUnit}', 'style': 'infounit', 'colSpan': 2},
        {'text': '', 'style': 'infotitle'},
        {'text': '', 'style': 'infounit'},
      ],
      [
        {'text': '', 'style': 'infotitle'},
        {'text': msgBolusPerDay, 'style': 'infotitle'},
        {'text': '${g.fmtNumber(data.ieBolusSum / repData.dayCount, 1)}', 'style': 'infodata'},
        {'text': 'bolus (${g.fmtNumber(data.ieBolusPrz(!useDailyBasalrate), 1)} %)', 'style': 'infounit', 'colSpan': 2},
        {'text': '', 'style': 'infotitle'},
        {'text': '', 'style': 'infounit'},
      ],
      [
        {'text': '', 'style': 'infotitle'},
        {'text': msgBasalPerDay, 'style': 'infotitle'},
        {'text': '${g.fmtNumber(data.ieBasalSum(!useDailyBasalrate) / repData.dayCount, 1)}', 'style': 'infodata'},
        {'text': 'basal (${g.fmtNumber(data.ieBasalPrz(!useDailyBasalrate), 1)} %)', 'style': 'infounit', 'colSpan': 2},
        {'text': '', 'style': 'infotitle'},
        {'text': '', 'style': 'infounit'},
      ],
      [
        {'@': data.ieMicroBolusSum > 0.0 && false},
        {'text': '', 'style': 'infotitle'},
        {'text': msgMicroBolusPerDay, 'style': 'infotitle'},
        {'text': '${g.fmtNumber(data.ieMicroBolusSum / repData.dayCount, 1)}', 'style': 'infodata'},
        {'text': 'bolus (${g.fmtNumber(data.ieMicroBolusPrz(!useDailyBasalrate), 1)} %)', 'style': 'infounit', 'colSpan': 2},
        {'text': '', 'style': 'infotitle'},
        {'text': '', 'style': 'infounit'},
      ],
    ]);
    var ret = [
      headerFooter(),
      {
        'margin': [cm(0), cm(yorg), cm(0), cm(0)],
        'columns': [
          {'width': cm(width), 'text': '${repData.user.name}', 'fontSize': fs(20), 'alignment': 'center'}
        ]
      },
      {
        'margin': [cm(5.5), cm(0.5), cm(0), cm(0)],
        'layout': 'noBorders',
        'table': {
          'headerRows': 0,
          'widths': [cm(5), cm(8)],
          'body': [
            [
              {'text': msgBirthday, 'style': 'perstitle'},
              {'text': repData.user.birthDate, 'style': 'persdata'}
            ],
            [
              {'text': msgDiabSince, 'style': 'perstitle'},
              {'text': repData.user.diaStartDate, 'style': 'persdata'}
            ],
            [
              {'text': msgInsulin, 'style': 'perstitle'},
              {'text': repData.user.insulin, 'style': 'persdata'}
            ]
          ]
        }
      },
      {
        'margin': [cm(3.7), cm(0.5), cm(0), cm(0)],
        'layout': 'noBorders',
        'fontSize': fs(10),
        'table': {
          'headerRows': 0,
          'widths': [cm(0), cm(7.3), cm(1.5), cm(1.5), cm(1.5), cm(4.5)],
          'body': tableBody
        }
      }
    ];
    return Page(isPortrait, ret);
  }

  List<Object> getInfoPage(ReportData src) {
    titleInfo = null;
    subtitle = 'Erklärungen';
    var ret = [
      headerFooter(),
      {
        'margin': [cm(0), cm(yorg), cm(0), cm(0)],
        'columns': [
          {'width': cm(width), 'text': 'Hinweise', 'fontSize': fs(20), 'alignment': 'center'}
        ]
      },
      {
        'margin': [cm(2.2), cm(0.5), cm(2.2), cm(0)],
        'text': 'Der DVI ist ein Wert, der einem Wert gleicht, der ein Wert sein soll, der hoffentlich zu einem'
            ' Zeilenumbruch führt, was aber nicht klar ist. Nun ist es klar und wir sind sowas von froh, dass es'
            ' funktioniert. Einfach Toll :)',
        'fontSize': fs(12),
        'alignment': 'justify'
      },
      {
        'margin': [cm(2.2), cm(0.2), cm(2.2), cm(0)],
        'text': 'Der DVI ist ein Wert, der einem Wert gleicht, der ein Wert sein soll, der hoffentlich zu einem'
            ' Zeilenumbruch führt, was aber nicht klar ist. Nun ist es klar und wir sind sowas von froh, dass es'
            ' funktioniert. Einfach Toll :)',
        'fontSize': fs(12),
        'alignment': 'justify',
        'color': 'red'
      },
    ];
    return ret;
  }
}
