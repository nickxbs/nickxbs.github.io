import 'dart:math' as math;

import 'package:intl/intl.dart';
import 'package:nightscout_reporter/src/globals.dart';
import 'package:nightscout_reporter/src/json_data.dart';

import 'base-print.dart';

class PercentileData
{
  DateTime time;
  final List<EntryData> _entries = <EntryData>[];

  PercentileData(this.time);

  void add(EntryData entry)
  {
    var clone = entry.copy;
    clone.time = time;
    _entries.add(clone);
  }

  double get max
  {
    var ret = -1.0;
    for (var entry in _entries)
    {
      if (entry.gluc > 0) ret = math.max(entry.gluc, ret);
    }
    return ret;
  }

  double get min
  {
    var ret = 10000.0;
    for (var entry in _entries)
    {
      if (entry.gluc > 0) ret = math.min(entry.gluc, ret);
    }
    return ret;
  }

  double percentile(int value)
  => Globals.percentile(_entries, value);
}

class PrintPercentile extends BasePrint
{
  @override
  String help =
  Intl.message('''Dieses Formular zeigt an, wie sich die Glukosewerte im ausgewählten Zeitraum über den Tag
verteilen. Diese Verteilung kann graphisch und tabellarisch ausgegeben werden.

In der Grafik sind die Bereiche für bestimmte Abweichungen farblich markiert. Die Linie zeigt den Medianwert
an. In der Tabelle kann man diese Werte nachlesen. Wenn die Basalrate mit ausgegeben wird, dann ist das die
Basalrate, die zu Beginn des ausgewählten Zeitraums aktiv war.''', desc: 'help for percentile');

  @override
  String id = 'percentile';

  @override
  String idx = '03';

  bool showGPD, showTable, showCol1090, showBasal;

  @override
  List<ParamInfo> params = [
    ParamInfo(0, BasePrint.msgOutput, list: [BasePrint.msgGraphic, BasePrint.msgTable, BasePrint.msgAll,
    ], thumbValue: 2),
    ParamInfo(1, msgCol1090, boolValue: false),
    ParamInfo(2, msgParam1, boolValue: false),
  ];

  static String get msgParam1
  => Intl.message('Basalrate anzeigen');
  static String msgBasalInfo1(String unit)
  => Intl.message('Diese Basalrate war am $unit aktiv.', args: [unit], name: 'msgBasalInfo1');

  @override
  void extractParams()
  {
    showGPD = params[0].intValue == 0 || params[0].intValue == 2;
    showTable = params[0].intValue == 1 || params[0].intValue == 2;
    showCol1090 = params[1].boolValue;
    showBasal = params[2].boolValue;
    pagesPerSheet = 1;
  }

  @override
  dynamic get estimatePageCount
  => {'count': showGPD && showTable ? 2 : 1, 'isEstimated': false};

  @override
  String get backsuffix
  {
    var ret = params[0].intValue ?? 0;
    if(showBasal && ret == 0) ret = 3;
    if(showBasal && ret == 2) ret = 4;

    return '$ret';
  }

  String get _title
  => isPortrait ? BasePrint.titleGPDShort : BasePrint.titleGPD;

  @override
  bool isPortrait = false;

  num lineWidth;
  static String get msgCol1090
  => Intl.message('Spalten für 10% und 90% anzeigen');
  String colBasal = '#0097a7';
  double glucMax = 0.0;
  double _gridHeight;
  double get gridHeight
  => _gridHeight;
  double get gridWidth
  => width - 7.0;
  double _basalHeight;
  double _basalWidth;
  double _profMax;
  double _colWidth;

  double glucY(double value)
  => gridHeight / glucMax * (glucMax - value);

  double glucX(DateTime time)
  => gridWidth / 1440 * (time.hour * 60 + time.minute);

  PrintPercentile()
  {
    init();
    title = BasePrint.titleGPD;
  }

  @override
  void fillPages(List<Page> pages)
  async {
    titleInfo = titleInfoBegEnd();
    if (showGPD) pages.add(getPage());
    if (showTable) pages.add(getTablePage());
    if (g.showBothUnits)
    {
      g.glucMGDLIdx = 1;
      if (showGPD) pages.add(getPage());
      if (showTable) pages.add(getTablePage());
      g.glucMGDLIdx = 2;
    }
  }

  void fillRow(dynamic row, double f, int hour, List<EntryData> list, String style)
  {
    var firstCol = '${g.fmtNumber(hour, 0, 2)}:00';
    var day = DayData(
      null, repData.profile(DateTime(repData.begDate.year, repData.begDate.month, repData.begDate.day)));
    day.entries.addAll(list);
    day.init();
    var time = DateTime(0, 1, 1, hour);
    var perc = PercentileData(time);
    for (var entry in list)
    {
      if (entry.gluc < 0) continue;
      perc.add(entry);
    }
/*
    for (EntryData entry in list)
    {
      if (entry.gluc > 0)
      {
        average += entry.gluc;
        count++;
        if (entry.gluc < min)min = entry.gluc;
        if (entry.gluc > max)max = entry.gluc;
      }
    }
    average /= count;
 */

    var wid = 2.0 / 100.0;
    var colcount = showCol1090 ? 10 : 8;
    var f = fs(showCol1090 ? 7 : 10);
    var w = (width - 4.0 - 2.0 - wid * 100) / colcount - 0.45;
    var h = showCol1090 ? 0.35 : 0.5;
    addTableRow(true, cm(2.0), row, {'text': msgTime, 'style': 'total', 'alignment': 'center', 'fontSize': f},
      {'text': firstCol, 'style': 'total', 'alignment': 'center', 'fontSize': f});
    var canvas = [
      {'type': 'rect', 'color': colLow, 'x': cm(0), 'y': cm(0), 'w': cm(day.lowPrz(g) * wid), 'h': cm(h)},
      {
        'type': 'rect',
        'color': colNorm,
        'x': cm(day.lowPrz(g) * wid),
        'y': cm(0),
        'w': cm(day.normPrz(g) * wid),
        'h': cm(h),
      },
      {
        'type': 'rect',
        'color': colHigh,
        'x': cm((day.lowPrz(g) + day.normPrz(g)) * wid),
        'y': cm(0),
        'w': cm(day.highPrz(g) * wid),
        'h': cm(h)
      }
    ];
    if (day.entryCountValid == 0) canvas = [];
    addTableRow(
      true, cm(wid * 100), row, {'text': msgDistribution, 'style': 'total', 'alignment': 'center', 'fontSize': f},
      {'style': style, 'canvas': canvas});
    addTableRow(true, cm(w), row, {'text': msgValues, 'style': 'total', 'alignment': 'center', 'fontSize': f},
      {'text': '${g.fmtNumber(day.entryCountValid, 0)}', 'style': style, 'alignment': 'right', 'fontSize': f});
    addTableRow(true, cm(w), row, {'text': msgAverage, 'style': 'total', 'alignment': 'center', 'fontSize': f},
      {'text': '${g.glucFromData(day.avgGluc, 1)}', 'style': style, 'alignment': 'right', 'fontSize': f});
    addTableRow(true, cm(w), row, {'text': msgMin, 'style': 'total', 'alignment': 'center', 'fontSize': f},
      {'text': '${g.glucFromData(day.minText, 1)}', 'style': style, 'alignment': 'right', 'fontSize': f});
//*
    if (showCol1090) {
      addTableRow(
      true, cm(w), row, {'text': msg10, 'style': 'total', 'alignment': 'center', 'fontSize': f},
      {'text': '${g.glucFromData(perc.percentile(10), 1)}', 'style': style, 'alignment': 'right', 'fontSize': f});
    }
    addTableRow(true, cm(w), row, {'text': msg25, 'style': 'total', 'alignment': 'center', 'fontSize': f},
      {'text': '${g.glucFromData(perc.percentile(25), 1)}', 'style': style, 'alignment': 'right', 'fontSize': f});
    addTableRow(true, cm(w), row, {'text': msgMedian, 'style': 'total', 'alignment': 'center', 'fontSize': f},
      {'text': '${g.glucFromData(perc.percentile(50), 1)}', 'style': style, 'alignment': 'right', 'fontSize': f});
    addTableRow(true, cm(w), row, {'text': msg75, 'style': 'total', 'alignment': 'center', 'fontSize': f},
      {'text': '${g.glucFromData(perc.percentile(75), 1)}', 'style': style, 'alignment': 'right', 'fontSize': f});
    if (showCol1090) {
      addTableRow(
      true, cm(w), row, {'text': msg90, 'style': 'total', 'alignment': 'center', 'fontSize': f},
      {'text': '${g.glucFromData(perc.percentile(90), 1)}', 'style': style, 'alignment': 'right', 'fontSize': f});
    }
// */
    addTableRow(true, cm(w), row, {'text': msgMax, 'style': 'total', 'alignment': 'center', 'fontSize': f},
      {'text': '${g.glucFromData(day.maxText, 1)}', 'style': style, 'alignment': 'right', 'fontSize': f});
    addTableRow(true, cm(w), row, {'text': msgDeviation, 'style': 'total', 'alignment': 'center', 'fontSize': f},
      {'text': '${g.fmtNumber(day.stdAbw(g.glucMGDL), 1)}', 'style': style, 'alignment': 'right', 'fontSize': f});
    tableHeadFilled = true;
  }

  Page getTablePage()
  {
    isPortrait = true;
    var body = [];
    var f = 3.3;
    f /= 100;

    tableHeadFilled = false;
    tableHeadLine = [];
    tableWidths = [];
    yorg -= 0.5;

    for (var i = 0; i < 24; i++)
    {
      var list = <EntryData>[];
      for (var day in repData.data.days)
      {
        var entries = day.entries.where((e)
        => e.time.hour == i);
        list.addAll(entries);
      }
      var row = [];
      fillRow(row, f, i, list, 'row');
      if (body.isEmpty) body.add(tableHeadLine);
      body.add(row);
    }
    yorg += 0.5;

    title = BasePrint.msgHourlyStats;
    subtitle = '';
    var hf = headerFooter();
    dynamic content = [hf, getTable(tableWidths, body)];
    dynamic ret = Page(isPortrait, content);
    title = BasePrint.titleGPD;
    isPortrait = false;
    return ret;
  }

  Page getPage()
  {
    isPortrait = showBasal;
    // the height of the grid is calculated so that the scale of the graphic looks the same
    // in portrait and landscape mode. formula for portrait is:
    // landscapewidth / landscapeheight * portraitwidth
    _gridHeight = isPortrait ? (width - 7) / (height - 7) * (width - 11) : height - 11.0;

    title = _title;
    subtitle = isPortrait ? BasePrint.titleGPD : '';
    var xo = xorg;
    var yo = yorg;
    var data = repData.data;
    lineWidth = cm(0.03);

    var percList = <PercentileData>[];
    for (var entry in data.entries)
    {
      if (entry.gluc < 0) continue;
      var time = DateTime(0, 1, 1, entry.time.hour, entry.time.minute);
      var src = percList.firstWhere((e)
      => e.time == time, orElse: ()
      {
        percList.add(PercentileData(time));
        return percList.last;
      });
      src.add(entry);
    }

    percList.sort((a, b)
    => a.time.compareTo(b.time));

    glucMax = 0.0;
    for (var data in percList) {
      glucMax = math.max(data.percentile(90), glucMax);
    }

    if (g.glucMaxValue != null) glucMax = g.glucMaxValues[g.ppGlucMaxIdx];

    var vertLines = {'relativePosition': {'x': cm(xo), 'y': cm(yo)}, 'canvas': []};
    var horzLines = {'relativePosition': {'x': cm(xo), 'y': cm(yo)}, 'canvas': []};
    var horzLegend = {'stack': []};
    var vertLegend = {'stack': []};

    var vertCvs = vertLines['canvas'] as List;
    var horzCvs = horzLines['canvas'] as List;
    var horzStack = horzLegend['stack'];
    var vertStack = vertLegend['stack'];

    var grid = drawGraphicGrid(
      glucMax,
      gridHeight,
      gridWidth,
      vertCvs,
      horzCvs,
      horzStack,
      vertStack,
      horzfs: fs(isPortrait ? 6 : 8));
    if (grid.lineHeight == 0) {
      return Page(
      isPortrait, [headerFooter(), {'relativePosition': {'x': cm(xorg), 'y': cm(yorg)}, 'text': msgMissingData}]);
    }
    glucMax = grid.gridLines * grid.glucScale;
    var yHigh = glucY(targets(repData)['low']);
    var yLow = glucY(targets(repData)['high']);
    var limitLines = {
      'relativePosition': {'x': cm(xo), 'y': cm(yo)},
      'canvas': [
        {
          'type': 'rect',
          'x': cm(0.0),
          'y': cm(yHigh),
          'w': cm(24 * grid.colWidth),
          'h': cm(yLow - yHigh),
          'color': '#00ff00',
          'fillOpacity': 0.5
        },
        {
          'type': 'line',
          'x1': cm(0.0),
          'y1': cm(yHigh),
          'x2': cm(24 * grid.colWidth),
          'y2': cm(yHigh),
          'lineWidth': cm(lw),
          'lineColor': '#00aa00'
        },
        {
          'type': 'line',
          'x1': cm(0.0),
          'y1': cm(yLow),
          'x2': cm(24 * grid.colWidth),
          'y2': cm(yLow),
          'lineWidth': cm(lw),
          'lineColor': '#00aa00'
        },
        {'type': 'rect', 'x': 0, 'y': 0, 'w': 0, 'h': 0, 'color': '#000000', 'fillOpacity': 1}
      ]
    };
    var percGraph = {'relativePosition': {'x': cm(xo), 'y': cm(yo)}, 'canvas': [], 'pageBreak': '-'};
    var percLegend = LegendData(
      cm(xo), cm(yo + grid.lineHeight * grid.gridLines + (showBasal ? 1.0 : 2.0)), cm(8.0), 100);
//    var percLegend = LegendData(cm(xo), cm(height - 5.0), cm(8.0), 100);

    if (addPercentileGraph(percGraph, percList, 10, 90, '#aaaaff')) {
      addLegendEntry(
      percLegend, '#aaaaff', msgPercentile1090);
    }
    if (addPercentileGraph(percGraph, percList, 25, 75, '#8888ff')) {
      addLegendEntry(
      percLegend, '#8888ff', msgPercentile2575);
    }
    addPercentileGraph(percGraph, percList, 50, 50, '#000000');

    addLegendEntry(percLegend, '#000000', msgMedian, isArea: false);
    addLegendEntry(percLegend, '#00ff00', msgTargetArea(
      g.glucFromData(targets(repData)['low']), g.glucFromData(targets(repData)['high']), g.getGlucInfo()['unit']));

    var profileBasal;
    if (showBasal)
    {
      // graphic for basalrate
      _profMax = -1000.0;
      _basalHeight = gridHeight;
      _basalWidth = gridWidth;
      _colWidth = _basalWidth / 24;
      for (var entry in data.days.first.basalData.store.listBasal) {
        _profMax = math.max((entry.value ?? 0) + 0.2, _profMax);
      }

      var y = gridHeight + 4.0;
      drawScaleIE(
        xo,
        yo,
        _basalHeight,
        y,
        0.0,
        _profMax,
        _colWidth,
        horzCvs,
        vertStack,
        [S(3, 0.5), S(1.5, 0.2), S(0, 0.1)], (i, step, {value})
      => '${g.fmtNumber(value ?? i * step, 1)} ${msgInsulinUnit}');
      horzCvs.add({
        'type': 'line',
        'x1': cm(0),
        'y1': cm(y + _basalHeight) - lw / 2,
        'x2': cm(24 * _colWidth),
        'y2': cm(y + _basalHeight) - lw / 2,
        'lineWidth': cm(lw),
        'lineColor': lcFrame
      });

      profileBasal = getBasalGraph(y, data.days.first, true, xo, yo);
      // draw vertical lines with times below graphic
      for (var i = 0; i < 25; i++)
      {
        vertCvs.add({
          'type': 'line',
          'x1': cm(i * _colWidth),
          'y1': cm(y),
          'x2': cm(i * _colWidth),
          'y2': cm(y + _basalHeight - lw / 2),
          'lineWidth': cm(lw),
          'lineColor': i > 0 && i < 24 ? lc : lcFrame
        });
        if (i < 24) {
          horzStack.add({
          'relativePosition': {'x': cm(xorg + i * _colWidth), 'y': cm(yorg + y + _basalHeight + 0.05)},
          'text': fmtTime(i),
          'fontSize': fs(6)
        });
        }
      }

      horzStack.add({
        'relativePosition': {'x': cm(xorg), 'y': cm(yorg + y + _basalHeight + 1.0)},
        'text': msgBasalInfo1(fmtDate(repData.begDate))
      });
    }

    dynamic ret = Page(isPortrait, [
      headerFooter(),
      profileBasal,
      vertLegend,
      vertLines,
      horzLegend,
      horzLines,
      limitLines,
      percLegend.asOutput,
      percGraph,
    ]);

    title = BasePrint.titleGPD;
    return ret;
  }

  bool addPercentileGraph(var percGraph, List<PercentileData> percList, int low, int high, String color)
  {
    var ret = high == low;
    var ptsLow = [];
    var ptsHigh = [];

    var x = 0.0;
    for (var entry in percList)
    {
      if (entry.percentile(high) != entry.percentile(low)) ret = true;
      x = glucX(entry.time);
      ptsHigh.add({'x': cm(x), 'y': cm(glucY(entry.percentile(high)))});
      if (high != low) ptsLow.insert(0, {'x': cm(x), 'y': cm(glucY(entry.percentile(low)))});
    }
    x = glucX(DateTime(0, 1, 1, 23, 59, 59));
    ptsHigh.add({'x': cm(x), 'y': cm(glucY(percList.first.percentile(high)))});
    if (high != low) ptsLow.insert(0, {'x': cm(x), 'y': cm(glucY(percList.first.percentile(low)))});
    var area = {'type': 'polyline', 'lineWidth': cm(lw), 'closePath': high != low, 'fillOpacity': 0.5, 'points': []};
    (area['points'] as List).addAll(ptsHigh);
    if (high != low)
    {
      area['color'] = color;
      (area['points'] as List).addAll(ptsLow);
    }
    (percGraph['canvas'] as List).add(area);
    (percGraph['canvas'] as List).add(
      {'type': 'rect', 'x': 0, 'y': 0, 'w': 0, 'h': 0, 'color': '#000000', 'fillOpacity': 1});
    (percGraph['canvas'] as List).add(
      {'type': 'polyline', 'lineWidth': cm(lw), 'closePath': false, 'lineColor': color, 'points': ptsHigh});
    (percGraph['canvas'] as List).add(
      {'type': 'polyline', 'lineWidth': cm(lw), 'closePath': false, 'lineColor': color, 'points': ptsLow});

    return ret;
  }

  double basalX(DateTime time)
  {
    return _basalWidth / 1440 * (time.hour * 60 + time.minute);
  }

  double basalY(double value)
  => _profMax != 0 && value != null ? _basalHeight - (_basalHeight / _profMax * value) : 0.0;

  Map<String, List<Map<String, Object>>> getBasalGraph(double top, DayData day, bool useProfile, double xo, double yo)
  {
    List<ProfileEntryData> data;
    String color;

    if (useProfile)
    {
      data = day.basalData.store.listBasal;
      color = colBasalProfile;
    }
    else
    {
      data = day.profile;
      color = colBasalProfile;
    }

    var basalCvs = [];
    var ret = {'stack': [{'relativePosition': {'x': cm(xo), 'y': cm(yo + top)}, 'canvas': basalCvs}]};
    double lastY;
    var areaPoints = [];
    var area = {
      'type': 'polyline',
      'lineWidth': cm(lw),
      'closePath': true,
      'color': color,
      //blendColor(color, '#ffffff', 0.7),
      'points': areaPoints,
//      'fillOpacity': opacity
    };

    var temp = <ProfileEntryData>[];
    for (var entry in data) {
      temp.add(entry);
    }

    if (useProfile && temp.isNotEmpty)
    {
      temp.sort((a, b)
      => a.time(day.date, useProfile).compareTo(b.time(day.date, useProfile)));

      if (temp[0].timeAsSeconds != -temp[0].localDiff * 60 * 60)
      {
        var clone = temp[0].clone(DateTime(0, 1, 1, -temp[0].localDiff, 0));
        temp.insert(0, clone);
      }
    }

    areaPoints.add({'x': cm(basalX(DateTime(0, 1, 1, 0, 0))), 'y': cm(useProfile ? basalY(0.0) : _basalHeight)});
    for (var entry in temp)
    {
      var x = basalX(entry.time(day.date, useProfile));
      var y = useProfile ? basalY(entry.value) : _basalHeight / _profMax * (_profMax - entry.tempAdjusted * 100);
      if (lastY != null) areaPoints.add({'x': cm(x), 'y': cm(lastY)});
      areaPoints.add({'x': cm(x), 'y': cm(y)});
      lastY = y;
    }
    if (lastY != null) areaPoints.add({'x': cm(basalX(DateTime(0, 1, 1, 23, 59))), 'y': cm(lastY)});

    areaPoints.add({'x': cm(basalX(DateTime(0, 1, 1, 23, 59))), 'y': cm(useProfile ? basalY(0.0) : _basalHeight)});
    basalCvs.add(area);

    return ret;
  }
}
