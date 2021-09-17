define(['dart_sdk', 'packages/nightscout_reporter/src/controls/datepicker/datepicker_component', 'packages/angular_components/model/date/date', 'packages/angular_components/material_datepicker/preset', 'packages/angular_components/material_datepicker/model', 'packages/intl/intl', 'packages/angular_components/utils/color/material', 'packages/dnd/dnd', 'packages/angular/src/core/change_detection/change_detection'], (function load__packages__nightscout_reporter__app_component(dart_sdk, packages__nightscout_reporter__src__controls__datepicker__datepicker_component, packages__angular_components__model__date__date, packages__angular_components__material_datepicker__preset, packages__angular_components__material_datepicker__model, packages__intl__intl, packages__angular_components__utils__color__material, packages__dnd__dnd, packages__angular__src__core__change_detection__change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const convert = dart_sdk.convert;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const globals = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__globals;
  const base_print = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__forms__base_print;
  const json_data = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__json_data;
  const print_test = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__forms__print_test;
  const print_analysis = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__forms__print_analysis;
  const print_profile = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__forms__print_profile;
  const print_percentile = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__forms__print_percentile;
  const print_daily_statistics = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__forms__print_daily_statistics;
  const print_daily_graphic = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__forms__print_daily_graphic;
  const print_daily_analysis = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__forms__print_daily_analysis;
  const print_daily_log = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__forms__print_daily_log;
  const print_weekly_graphic = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__forms__print_weekly_graphic;
  const print_basalrate = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__forms__print_basalrate;
  const print_cgp = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__forms__print_cgp;
  const print_daily_profile = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__forms__print_daily_profile;
  const print_daily_gluc = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__forms__print_daily_gluc;
  const print_daily_hours = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__forms__print_daily_hours;
  const print_user_data = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__forms__print_user_data;
  const signin_component = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__controls__signin__signin_component;
  const datepicker_component = packages__nightscout_reporter__src__controls__datepicker__datepicker_component.src__controls__datepicker__datepicker_component;
  const date = packages__angular_components__model__date__date.model__date__date;
  const preset = packages__angular_components__material_datepicker__preset.material_datepicker__preset;
  const model = packages__angular_components__material_datepicker__model.material_datepicker__model;
  const intl = packages__intl__intl.intl;
  const material = packages__angular_components__utils__color__material.utils__color__material;
  const dnd = packages__dnd__dnd.dnd;
  const lifecycle_hooks = packages__angular__src__core__change_detection__change_detection.src__core__metadata__lifecycle_hooks;
  var app_component = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $truncate = dartx.truncate;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $toInt = dartx.toInt;
  var $containsKey = dartx.containsKey;
  var $setProperty = dartx.setProperty;
  var $text = dartx.text;
  var $onBlur = dartx.onBlur;
  var $onFocus = dartx.onFocus;
  var $add = dartx.add;
  var $addAll = dartx.addAll;
  var $location = dartx.location;
  var $endsWith = dartx.endsWith;
  var $join = dartx.join;
  var $clear = dartx.clear;
  var $codeUnitAt = dartx.codeUnitAt;
  var $startsWith = dartx.startsWith;
  var $replaceAll = dartx.replaceAll;
  var $isEmpty = dartx.isEmpty;
  var $open = dartx.open;
  var $substring = dartx.substring;
  var $animate = dartx.animate;
  var $attributes = dartx.attributes;
  var $_set = dartx._set;
  var $getAttribute = dartx.getAttribute;
  var $removeAt = dartx.removeAt;
  var $insert = dartx.insert;
  var $contains = dartx.contains;
  var $last = dartx.last;
  var $sort = dartx.sort;
  var $first = dartx.first;
  var $firstWhere = dartx.firstWhere;
  var $lastWhere = dartx.lastWhere;
  var $removeWhere = dartx.removeWhere;
  var $toString = dartx.toString;
  var $toLowerCase = dartx.toLowerCase;
  var $stackTrace = dartx.stackTrace;
  var $removeRange = dartx.removeRange;
  var $keys = dartx.keys;
  var $clone = dartx.clone;
  var $offsetLeft = dartx.offsetLeft;
  var $offsetTop = dartx.offsetTop;
  var $width = dartx.width;
  var $height = dartx.height;
  var $left = dartx.left;
  var $top = dartx.top;
  var $overflow = dartx.overflow;
  var $position = dartx.position;
  var $append = dartx.append;
  var $remove = dartx.remove;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var IdentityMapOfStringL$boolL = () => (IdentityMapOfStringL$boolL = dart.constFn(_js_helper.IdentityMap$(StringL(), boolL())))();
  var DatepickerPresetL = () => (DatepickerPresetL = dart.constFn(dart.legacy(preset.DatepickerPreset)))();
  var JSArrayOfDatepickerPresetL = () => (JSArrayOfDatepickerPresetL = dart.constFn(_interceptors.JSArray$(DatepickerPresetL())))();
  var PdfDataL = () => (PdfDataL = dart.constFn(dart.legacy(app_component.PdfData)))();
  var JSArrayOfPdfDataL = () => (JSArrayOfPdfDataL = dart.constFn(_interceptors.JSArray$(PdfDataL())))();
  var FormConfigL = () => (FormConfigL = dart.constFn(dart.legacy(base_print.FormConfig)))();
  var JSArrayOfFormConfigL = () => (JSArrayOfFormConfigL = dart.constFn(_interceptors.JSArray$(FormConfigL())))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var FutureOfStringL = () => (FutureOfStringL = dart.constFn(async.Future$(StringL())))();
  var FutureLOfStringL = () => (FutureLOfStringL = dart.constFn(dart.legacy(FutureOfStringL())))();
  var VoidToFutureLOfStringL = () => (VoidToFutureLOfStringL = dart.constFn(dart.fnType(FutureLOfStringL(), [])))();
  var IterableL = () => (IterableL = dart.constFn(dart.legacy(core.Iterable)))();
  var FutureOfNullN = () => (FutureOfNullN = dart.constFn(async.Future$(core.Null)))();
  var FutureLOfNullN = () => (FutureLOfNullN = dart.constFn(dart.legacy(FutureOfNullN())))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var EventLToFutureLOfNullN = () => (EventLToFutureLOfNullN = dart.constFn(dart.fnType(FutureLOfNullN(), [EventL()])))();
  var BasePrintL = () => (BasePrintL = dart.constFn(dart.legacy(base_print.BasePrint)))();
  var JSArrayOfBasePrintL = () => (JSArrayOfBasePrintL = dart.constFn(_interceptors.JSArray$(BasePrintL())))();
  var voidToNullN = () => (voidToNullN = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  var FormElementL = () => (FormElementL = dart.constFn(dart.legacy(html.FormElement)))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var StringLToNullN = () => (StringLToNullN = dart.constFn(dart.fnType(core.Null, [StringL()])))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var DraggableEventL = () => (DraggableEventL = dart.constFn(dart.legacy(dnd.DraggableEvent)))();
  var DraggableEventLToNullN = () => (DraggableEventLToNullN = dart.constFn(dart.fnType(core.Null, [DraggableEventL()])))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var JSArrayOfMapLOfStringL$dynamic = () => (JSArrayOfMapLOfStringL$dynamic = dart.constFn(_interceptors.JSArray$(MapLOfStringL$dynamic())))();
  var DropzoneEventL = () => (DropzoneEventL = dart.constFn(dart.legacy(dnd.DropzoneEvent)))();
  var DropzoneEventLToNullN = () => (DropzoneEventLToNullN = dart.constFn(dart.fnType(core.Null, [DropzoneEventL()])))();
  var UrlDataL = () => (UrlDataL = dart.constFn(dart.legacy(globals.UrlData)))();
  var JSArrayOfUrlDataL = () => (JSArrayOfUrlDataL = dart.constFn(_interceptors.JSArray$(UrlDataL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ProfileDataL = () => (ProfileDataL = dart.constFn(dart.legacy(json_data.ProfileData)))();
  var ProfileDataLAndProfileDataLTointL = () => (ProfileDataLAndProfileDataLTointL = dart.constFn(dart.fnType(intL(), [ProfileDataL(), ProfileDataL()])))();
  var ProfileDataLToboolL = () => (ProfileDataLToboolL = dart.constFn(dart.fnType(boolL(), [ProfileDataL()])))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var TreatmentDataL = () => (TreatmentDataL = dart.constFn(dart.legacy(json_data.TreatmentData)))();
  var JSArrayOfTreatmentDataL = () => (JSArrayOfTreatmentDataL = dart.constFn(_interceptors.JSArray$(TreatmentDataL())))();
  var TreatmentDataLAndTreatmentDataLTointL = () => (TreatmentDataLAndTreatmentDataLTointL = dart.constFn(dart.fnType(intL(), [TreatmentDataL(), TreatmentDataL()])))();
  var EntryDataL = () => (EntryDataL = dart.constFn(dart.legacy(json_data.EntryData)))();
  var EntryDataLAndEntryDataLTointL = () => (EntryDataLAndEntryDataLTointL = dart.constFn(dart.fnType(intL(), [EntryDataL(), EntryDataL()])))();
  var DeviceStatusDataL = () => (DeviceStatusDataL = dart.constFn(dart.legacy(json_data.DeviceStatusData)))();
  var DeviceStatusDataLAndDeviceStatusDataLTointL = () => (DeviceStatusDataLAndDeviceStatusDataLTointL = dart.constFn(dart.fnType(intL(), [DeviceStatusDataL(), DeviceStatusDataL()])))();
  var JSArrayOfEntryDataL = () => (JSArrayOfEntryDataL = dart.constFn(_interceptors.JSArray$(EntryDataL())))();
  var TreatmentDataLToboolL = () => (TreatmentDataLToboolL = dart.constFn(dart.fnType(boolL(), [TreatmentDataL()])))();
  var ReportDataL = () => (ReportDataL = dart.constFn(dart.legacy(json_data.ReportData)))();
  var PageL = () => (PageL = dart.constFn(dart.legacy(base_print.Page)))();
  var JSArrayOfPageL = () => (JSArrayOfPageL = dart.constFn(_interceptors.JSArray$(PageL())))();
  var ListOfPageL = () => (ListOfPageL = dart.constFn(core.List$(PageL())))();
  var ListLOfPageL = () => (ListLOfPageL = dart.constFn(dart.legacy(ListOfPageL())))();
  var JSArrayOfListLOfPageL = () => (JSArrayOfListLOfPageL = dart.constFn(_interceptors.JSArray$(ListLOfPageL())))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var JSArrayOfdoubleL = () => (JSArrayOfdoubleL = dart.constFn(_interceptors.JSArray$(doubleL())))();
  var ListOfdoubleL = () => (ListOfdoubleL = dart.constFn(core.List$(doubleL())))();
  var ListLOfdoubleL = () => (ListLOfdoubleL = dart.constFn(dart.legacy(ListOfdoubleL())))();
  var IdentityMapOfStringL$ListLOfdoubleL = () => (IdentityMapOfStringL$ListLOfdoubleL = dart.constFn(_js_helper.IdentityMap$(StringL(), ListLOfdoubleL())))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var IdentityMapOfStringL$MapL = () => (IdentityMapOfStringL$MapL = dart.constFn(_js_helper.IdentityMap$(StringL(), MapL())))();
  var MapOfStringL$StringL = () => (MapOfStringL$StringL = dart.constFn(core.Map$(StringL(), StringL())))();
  var MapLOfStringL$StringL = () => (MapLOfStringL$StringL = dart.constFn(dart.legacy(MapOfStringL$StringL())))();
  var ReportDataLToFutureLOfNullN = () => (ReportDataLToFutureLOfNullN = dart.constFn(dart.fnType(FutureLOfNullN(), [ReportDataL()])))();
  var dynamicTointL = () => (dynamicTointL = dart.constFn(dart.fnType(intL(), [dart.dynamic])))();
  var PointOfintL = () => (PointOfintL = dart.constFn(math.Point$(intL())))();
  const CT = Object.create(null);
  var L0 = "package:nightscout_reporter/app_component.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: signin_component.SigninStatus.prototype,
        [_name]: "SigninStatus.requestAuthorization",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: signin_component.SigninStatus.prototype,
        [_name]: "SigninStatus.signinOk",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: signin_component.SigninStatus.prototype,
        [_name]: "SigninStatus.signedOut",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: signin_component.SigninStatus.prototype,
        [_name]: "SigninStatus.error",
        index: 3
      });
    }
  }, false);
  var pdf$ = dart.privateName(app_component, "PdfData.pdf");
  var isPrinted = dart.privateName(app_component, "PdfData.isPrinted");
  app_component.PdfData = class PdfData extends core.Object {
    get pdf() {
      return this[pdf$];
    }
    set pdf(value) {
      this[pdf$] = value;
    }
    get isPrinted() {
      return this[isPrinted];
    }
    set isPrinted(value) {
      this[isPrinted] = value;
    }
  };
  (app_component.PdfData.new = function(pdf) {
    this[isPrinted] = false;
    this[pdf$] = pdf;
    ;
  }).prototype = app_component.PdfData.prototype;
  dart.addTypeTests(app_component.PdfData);
  dart.addTypeCaches(app_component.PdfData);
  dart.setLibraryUri(app_component.PdfData, L0);
  dart.setFieldSignature(app_component.PdfData, () => ({
    __proto__: dart.getFields(app_component.PdfData.__proto__),
    pdf: dart.fieldType(dart.legacy(core.String)),
    isPrinted: dart.fieldType(dart.legacy(core.bool))
  }));
  var __currPage = dart.privateName(app_component, "__currPage");
  var _lastPage = dart.privateName(app_component, "_lastPage");
  var _drag = dart.privateName(app_component, "_drag");
  var _drop = dart.privateName(app_component, "_drop");
  var _currPage = dart.privateName(app_component, "_currPage");
  var _sendClick = dart.privateName(app_component, "_sendClick");
  var _name = dart.privateName(signin_component, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var paramboolValue = dart.privateName(app_component, "AppComponent.paramboolValue");
  var g = dart.privateName(app_component, "AppComponent.g");
  var drawerVisible = dart.privateName(app_component, "AppComponent.drawerVisible");
  var pdfInfoVisible = dart.privateName(app_component, "AppComponent.pdfInfoVisible");
  var today = dart.privateName(app_component, "AppComponent.today");
  var appTheme = dart.privateName(app_component, "AppComponent.appTheme");
  var dateRanges = dart.privateName(app_component, "AppComponent.dateRanges");
  var drConfig = dart.privateName(app_component, "AppComponent.drConfig");
  var sendDisabled = dart.privateName(app_component, "AppComponent.sendDisabled");
  var pdfData = dart.privateName(app_component, "AppComponent.pdfData");
  var pdfList = dart.privateName(app_component, "AppComponent.pdfList");
  var pdfDoc = dart.privateName(app_component, "AppComponent.pdfDoc");
  var tileParams = dart.privateName(app_component, "AppComponent.tileParams");
  var tileHelp = dart.privateName(app_component, "AppComponent.tileHelp");
  var progressText = dart.privateName(app_component, "AppComponent.progressText");
  var progressMax = dart.privateName(app_component, "AppComponent.progressMax");
  var progressValue = dart.privateName(app_component, "AppComponent.progressValue");
  var sendIcon = dart.privateName(app_component, "AppComponent.sendIcon");
  var pdfUrl = dart.privateName(app_component, "AppComponent.pdfUrl");
  var currentGluc = dart.privateName(app_component, "AppComponent.currentGluc");
  var currentGlucDiff = dart.privateName(app_component, "AppComponent.currentGlucDiff");
  var currentGlucTime = dart.privateName(app_component, "AppComponent.currentGlucTime");
  var glucDir = dart.privateName(app_component, "AppComponent.glucDir");
  var glucTimer = dart.privateName(app_component, "AppComponent.glucTimer");
  var glucRunning = dart.privateName(app_component, "AppComponent.glucRunning");
  var currentGlucCounter = dart.privateName(app_component, "AppComponent.currentGlucCounter");
  var appTitle = dart.privateName(app_component, "AppComponent.appTitle");
  var currentGlucVisible = dart.privateName(app_component, "AppComponent.currentGlucVisible");
  var indy = dart.privateName(app_component, "AppComponent.indy");
  var videos = dart.privateName(app_component, "AppComponent.videos");
  var msgModelName = dart.privateName(app_component, "AppComponent.msgModelName");
  var reportData = dart.privateName(app_component, "AppComponent.reportData");
  var themeStyle = dart.privateName(app_component, "AppComponent.themeStyle");
  var logoStyle = dart.privateName(app_component, "AppComponent.logoStyle");
  var themePanelShown = dart.privateName(app_component, "AppComponent.themePanelShown");
  var menuIdx = dart.privateName(app_component, "AppComponent.menuIdx");
  var thumbLangIdx = dart.privateName(app_component, "AppComponent.thumbLangIdx");
  var thumbLangSave = dart.privateName(app_component, "AppComponent.thumbLangSave");
  var allParams = dart.privateName(app_component, "AppComponent.allParams");
  app_component.AppComponent = class AppComponent extends core.Object {
    get paramboolValue() {
      return this[paramboolValue];
    }
    set paramboolValue(value) {
      this[paramboolValue] = value;
    }
    get g() {
      return this[g];
    }
    set g(value) {
      this[g] = value;
    }
    get drawerVisible() {
      return this[drawerVisible];
    }
    set drawerVisible(value) {
      this[drawerVisible] = value;
    }
    get pdfInfoVisible() {
      return this[pdfInfoVisible];
    }
    set pdfInfoVisible(value) {
      this[pdfInfoVisible] = value;
    }
    get today() {
      return this[today];
    }
    set today(value) {
      this[today] = value;
    }
    get appTheme() {
      return this[appTheme];
    }
    set appTheme(value) {
      this[appTheme] = value;
    }
    get dateRanges() {
      return this[dateRanges];
    }
    set dateRanges(value) {
      this[dateRanges] = value;
    }
    get drConfig() {
      return this[drConfig];
    }
    set drConfig(value) {
      this[drConfig] = value;
    }
    get sendDisabled() {
      return this[sendDisabled];
    }
    set sendDisabled(value) {
      this[sendDisabled] = value;
    }
    get pdfData() {
      return this[pdfData];
    }
    set pdfData(value) {
      this[pdfData] = value;
    }
    get pdfList() {
      return this[pdfList];
    }
    set pdfList(value) {
      this[pdfList] = value;
    }
    get pdfDoc() {
      return this[pdfDoc];
    }
    set pdfDoc(value) {
      this[pdfDoc] = value;
    }
    get tileParams() {
      return this[tileParams];
    }
    set tileParams(value) {
      this[tileParams] = value;
    }
    get tileHelp() {
      return this[tileHelp];
    }
    set tileHelp(value) {
      this[tileHelp] = value;
    }
    get progressText() {
      return this[progressText];
    }
    set progressText(value) {
      this[progressText] = value;
    }
    get progressMax() {
      return this[progressMax];
    }
    set progressMax(value) {
      this[progressMax] = value;
    }
    get progressValue() {
      return this[progressValue];
    }
    set progressValue(value) {
      this[progressValue] = value;
    }
    get sendIcon() {
      return this[sendIcon];
    }
    set sendIcon(value) {
      this[sendIcon] = value;
    }
    get pdfUrl() {
      return this[pdfUrl];
    }
    set pdfUrl(value) {
      this[pdfUrl] = value;
    }
    get currentGluc() {
      return this[currentGluc];
    }
    set currentGluc(value) {
      this[currentGluc] = value;
    }
    get currentGlucDiff() {
      return this[currentGlucDiff];
    }
    set currentGlucDiff(value) {
      this[currentGlucDiff] = value;
    }
    get currentGlucTime() {
      return this[currentGlucTime];
    }
    set currentGlucTime(value) {
      this[currentGlucTime] = value;
    }
    get glucDir() {
      return this[glucDir];
    }
    set glucDir(value) {
      this[glucDir] = value;
    }
    get glucTimer() {
      return this[glucTimer];
    }
    set glucTimer(value) {
      this[glucTimer] = value;
    }
    get glucRunning() {
      return this[glucRunning];
    }
    set glucRunning(value) {
      this[glucRunning] = value;
    }
    get currentGlucCounter() {
      return this[currentGlucCounter];
    }
    set currentGlucCounter(value) {
      this[currentGlucCounter] = value;
    }
    get appTitle() {
      return this[appTitle];
    }
    set appTitle(value) {
      this[appTitle] = value;
    }
    get currentGlucVisible() {
      return this[currentGlucVisible];
    }
    set currentGlucVisible(value) {
      this[currentGlucVisible] = value;
    }
    get indy() {
      return this[indy];
    }
    set indy(value) {
      this[indy] = value;
    }
    get videos() {
      return this[videos];
    }
    set videos(value) {
      this[videos] = value;
    }
    get msgModelName() {
      return this[msgModelName];
    }
    set msgModelName(value) {
      this[msgModelName] = value;
    }
    get reportData() {
      return this[reportData];
    }
    set reportData(value) {
      this[reportData] = value;
    }
    get themeStyle() {
      return this[themeStyle];
    }
    set themeStyle(value) {
      this[themeStyle] = value;
    }
    get logoStyle() {
      return this[logoStyle];
    }
    set logoStyle(value) {
      this[logoStyle] = value;
    }
    get themePanelShown() {
      return this[themePanelShown];
    }
    set themePanelShown(value) {
      this[themePanelShown] = value;
    }
    get menuIdx() {
      return this[menuIdx];
    }
    set menuIdx(value) {
      this[menuIdx] = value;
    }
    get thumbLangIdx() {
      return this[thumbLangIdx];
    }
    set thumbLangIdx(value) {
      this[thumbLangIdx] = value;
    }
    get thumbLangSave() {
      return this[thumbLangSave];
    }
    set thumbLangSave(value) {
      this[thumbLangSave] = value;
    }
    get allParams() {
      return this[allParams];
    }
    set allParams(value) {
      this[allParams] = value;
    }
    get timezone() {
      return globals.Globals.refTimezone;
    }
    get [_currPage]() {
      return this[__currPage];
    }
    set [_currPage](value) {
      this[__currPage] = StringL().as(value);
    }
    get currPage() {
      return this.progressText == null || this.progressText[$isNotEmpty] ? this[_currPage] : "progress";
    }
    set currPage(value) {
      if (this.currPage !== "welcome") this[_lastPage] = this.currPage;
      this[_currPage] = value;
    }
    get pdfSliderMax() {
      return (4000000 / 100000)[$truncate]();
    }
    sendClass(shift, ret) {
      if (ret !== "stop" && this.reportData != null && dart.equals(this.g.period.shiftStartBy(shift), this.reportData.begDate) && dart.equals(this.g.period.shiftEndBy(shift), this.reportData.endDate)) ret = dart.str(ret) + " sendMarked";
      return ret;
    }
    get createIcon() {
      return dart.test(this.g.isDebug) && this.sendIcon === "send" ? "vertical_align_bottom" : this.sendIcon;
    }
    pdfFilename(idx) {
      return "Nightscout-Reporter-" + dart.str(idx) + ".pdf";
    }
    get msgCheckSetup() {
      return intl.Intl.message("Überprüfe Zugriff auf Nightscout ...");
    }
    msgLoadingData(error, stacktrace) {
      return intl.Intl.message("Fehler beim Laden der Daten:\n" + dart.str(error) + "\n" + dart.str(stacktrace), {args: JSArrayOfObjectL().of([error, stacktrace]), name: "msgLoadingData"});
    }
    get msgLoadingDataError() {
      return intl.Intl.message("Fehler beim Laden der Daten");
    }
    msgLoadingDataFor(date) {
      return intl.Intl.message("Lade Daten für " + dart.str(date) + "...", {args: JSArrayOfObjectL().of([date]), name: "msgLoadingDataFor", desc: "displayed when data of a day is loading"});
    }
    get msgClose() {
      return intl.Intl.message("Schliessen");
    }
    get msgEmptyRange() {
      return intl.Intl.message("Bitte einen Zeitraum wählen.");
    }
    get msgPreparingData() {
      return intl.Intl.message("Bereite Daten vor...", {desc: "text when data was received and is being prepared to be used in the report"});
    }
    get msgCreatingPDF() {
      return intl.Intl.message("Erzeuge PDF...", {desc: "text when pdf is being created"});
    }
    get msgPreparingPDF() {
      return intl.Intl.message("Lade die Basisdaten...");
    }
    get msgImpressum() {
      return intl.Intl.message("Impressum");
    }
    get msgDSGVO() {
      return intl.Intl.message("Datenschutzerklärung");
    }
    get msgApply() {
      return intl.Intl.message("ok");
    }
    get msgCancel() {
      return intl.Intl.message("verwerfen");
    }
    get msgPDFCreated() {
      return intl.Intl.message("Das PDF wurde erstellt. Wenn es nicht angezeigt wird, " + "dann ist vermutlich ein Popup-Blocker aktiv, der die Anzeige verhindert. Diesen bitte deaktivieren.");
    }
    get msgPeriod() {
      return intl.Intl.message("Zeitraum");
    }
    get msgProfileError() {
      return intl.Intl.message("Beim Auslesen der Profile ist ein Fehler aufgetreten. " + "Möglicherweise sind zu viele Daten in der Profiltabelle (wird z.B. von iOS Loop verursacht). " + "Du kannst versuchen, in den Einstellungen die Anzahl an auszulesenden Profildatensätzen zu verringern.");
    }
    get msgPDFCreationError() {
      return intl.Intl.message("Beim Erzeugen des PDF ist ein Fehler aufgetreten.");
    }
    get msgGitHubIssue() {
      return intl.Intl.message("Problem auf GitHub melden");
    }
    get msgShowPDF() {
      return intl.Intl.message("PDF anzeigen");
    }
    get msgPeriodCompare() {
      return intl.Intl.message("Vergleich");
    }
    get msgShortcutName() {
      return intl.Intl.message("Bezeichnung");
    }
    get msgAddText() {
      return intl.Intl.message("Hinzufügen");
    }
    msgTooMuchProfilesPrefix(maxCount) {
      return intl.Intl.message("Es konnten nicht alle Profile geladen werden, da im ausgewählten Zeitraum mehr als " + dart.str(maxCount) + " " + "gespeichert sind. ", {args: JSArrayOfObjectL().of([maxCount]), name: "msgTooMuchProfilesPrefix"});
    }
    msgTooMuchProfiles(maxCount, count, text) {
      return dart.notNull(this.msgTooMuchProfilesPrefix(maxCount)) + dart.notNull(intl.Intl.plural(count, {zero: "", one: "Der Uploader \"" + dart.str(text) + "\" hat die Datensätze angelegt.", other: "Folgende Uploader haben die Datensätze angelegt: " + dart.str(text), args: JSArrayOfObjectL().of([maxCount, count, text]), name: "msgTooMuchProfiles"}));
    }
    isFormVisible(form) {
      if (dart.test(form.isDebugOnly) && !dart.test(this.g.isDebug)) return false;
      if (dart.test(form.isLocalOnly) && !dart.test(this.g.isLocal)) return false;
      if (dart.test(form.isBetaOrLocal) && !(dart.test(this.g.isBeta) || dart.test(this.g.isLocal))) return false;
      return true;
    }
    get currentGlucDir() {
      return dart.notNull(this.glucDir) < 360 ? "translate(0,2px)rotate(" + dart.str(this.glucDir) + "deg)" : null;
    }
    getCurrentGluc() {
      return async.async(StringL(), (function* getCurrentGluc() {
        if (this.glucTimer != null) {
          this.glucTimer.cancel();
          this.glucTimer = null;
        }
        this.currentGlucCounter = dart.notNull(this.currentGlucCounter) + 1;
        if (!dart.test(this.g.showCurrentGluc) || dart.test(this.glucRunning)) return "";
        this.glucRunning = true;
        let url = this.g.user.apiUrl(null, "status.json");
        core.print("url " + dart.str(url));
        if (!dart.test(this.g.hasMGDL)) {
          let content = (yield this.g.requestJson(url));
          if (content != null) {
            let status = json_data.StatusData.fromJson(MapLOfStringL$dynamic().as(content));
            this.g.setGlucMGDL(status);
          }
        }
        url = this.g.user.apiUrl(null, "entries.json", {params: "count=2"});
        let src = ListL().as(yield this.g.requestJson(url));
        if (src != null) {
          if (src[$length] !== 2) {
            this.currentGluc = "Keine Daten";
            this.currentGlucDiff = "";
            this.glucDir = 360;
          } else {
            try {
              let eNow = json_data.EntryData.fromJson(MapLOfStringL$dynamic().as(src[$_get](0)));
              let ePrev = json_data.EntryData.fromJson(MapLOfStringL$dynamic().as(src[$_get](1)));
              let span = eNow.time.difference(ePrev.time).inMinutes;
              this.glucDir = 360;
              this.currentGlucDiff = "";
              this.currentGlucTime = "";
              if (dart.notNull(span) > 15) {
                return this.currentGluc;
              }
              let time = new core.DateTime.now().difference(eNow.time).inMinutes;
              this.currentGlucTime = dart.str(time) + " min";
              this.currentGluc = this.g.fmtNumber(dart.notNull(eNow.gluc) / dart.notNull(this.g.glucFactor), this.g.glucPrecision);
              this.currentGlucDiff = (dart.notNull(eNow.gluc) > dart.notNull(ePrev.gluc) ? "+" : "") + dart.str(this.g.fmtNumber((dart.notNull(eNow.gluc) - dart.notNull(ePrev.gluc)) * 5 / dart.notNull(span) / dart.notNull(this.g.glucFactor), this.g.glucPrecision));
              let diff = dart.notNull(eNow.gluc) - dart.notNull(ePrev.gluc);
              let limit = (10 * dart.notNull(span) / 5)[$truncate]();
              if (diff > limit) {
                this.glucDir = -90;
              } else if (diff < -limit) {
                this.glucDir = 90;
              } else {
                this.glucDir = 90 - ((diff + limit) / limit * 90)[$toInt]();
              }
            } catch (e) {
              let ex = dart.getThrown(e);
              this.currentGluc = "?";
              this.currentGlucDiff = "";
              this.glucDir = 360;
            }
          }
        }
        if (dart.test(this.currentGlucVisible)) this.glucTimer = async.Timer.new(new core.Duration.new({minutes: 1}), dart.fn(() => this.getCurrentGluc(), VoidToFutureLOfStringL()));
        this.glucRunning = false;
        return this.currentGluc;
      }).bind(this));
    }
    getDrawerClass(menu) {
      let ret = "";
      switch (menu) {
        case 0:
        {
          ret = "drawer-root ";
          break;
        }
        case 1:
        {
          ret = "shortcut-root ";
          break;
        }
      }
      if (menu != this.menuIdx) ret = ret + "hidden";
      return ret;
    }
    get drawerClass() {
      let ret = "material-drawer-button ";
      switch (this.menuIdx) {
        case 0:
        {
          ret = ret + "icon-menu";
          break;
        }
        case 1:
        {
          ret = ret + "icon-shortcut";
          break;
        }
      }
      return ret;
    }
    setTheme(name) {
      return async.async(dart.void, (function* setTheme() {
        let theme = (yield this.g.requestJson("packages/nightscout_reporter/assets/themes/" + dart.str(name) + "/colors.json"));
        if (theme == null) return;
        for (let t1 of IterableL().as(dart.dload(theme, 'keys'))) {
          let key = StringL().as(t1);
          let value = StringL().as(dart.dsend(theme, '_get', [key]));
          if (dart.test(material.materialColors[$containsKey](value))) value = material.materialColors[$_get](value).hexString;
          html.document.body.style[$setProperty]("--" + dart.str(key), value);
        }
        this.g.theme = name;
        this.g.saveWebData();
      }).bind(this));
    }
    ngOnInit() {
      return async.async(core.Null, (function* ngOnInit() {
        this.g.loadWebData();
        yield this.setTheme(this.g.theme);
        this.appTitle = html.document.querySelector("head>title")[$text];
        html.window[$onBlur].listen(dart.fn(e => async.async(core.Null, (function*() {
          if (!dart.test(this.g.showCurrentGluc) || dart.test(this.g.isDebug)) return;
          this.currentGlucVisible = false;
          if (this.glucTimer != null) {
            this.glucTimer.cancel();
            this.glucTimer = null;
          }
        }).bind(this)), EventLToFutureLOfNullN()));
        html.window[$onFocus].listen(dart.fn(e => async.async(core.Null, (function*() {
          if (!dart.test(this.g.showCurrentGluc) || dart.test(this.g.isDebug)) return;
          this.currentGlucVisible = true;
          FutureOfStringL().delayed(new core.Duration.new({milliseconds: 250}), dart.fn(() => this.getCurrentGluc(), VoidToFutureLOfStringL()));
        }).bind(this)), EventLToFutureLOfNullN()));
        this.display(null);
        this[_currPage] = "signin";
        this.g.doShowDebug = dart.bind(this, 'showDebug');
        this.g.onAfterLoad = dart.bind(this, 'checkPrint');
        this.g.loadSettings().then(core.Null, dart.fn(_ => {
          let page = this.g.version == this.g.lastVersion ? "normal" : "whatsnew";
          this[_currPage] = dart.test(this.g.isConfigured) ? page : "welcome";
          this[_lastPage] = this[_currPage];
          let srcList = JSArrayOfBasePrintL().of([new print_test.PrintTest.new(), new print_analysis.PrintAnalysis.new(), new print_profile.PrintProfile.new(), new print_percentile.PrintPercentile.new(), new print_daily_statistics.PrintDailyStatistics.new(), new print_daily_graphic.PrintDailyGraphic.new(), new print_daily_analysis.PrintDailyAnalysis.new(), new print_daily_log.PrintDailyLog.new(), new print_weekly_graphic.PrintWeeklyGraphic.new(), new print_basalrate.PrintBasalrate.new(), new print_cgp.PrintCGP.new(), new print_daily_profile.PrintDailyProfile.new(), new print_daily_gluc.PrintDailyGluc.new(), new print_daily_hours.PrintDailyHours.new(), new print_user_data.PrintUserData.new()]);
          this.g.listConfig = JSArrayOfFormConfigL().of([]);
          this.g.listConfigOrg = JSArrayOfFormConfigL().of([]);
          for (let form of srcList) {
            this.g.listConfig[$add](new base_print.FormConfig.new(form, false));
          }
          this.g.listConfigOrg[$addAll](this.g.listConfig);
          this.g.sortConfigs();
          for (let entry of this.g.listConfig) {
            dart.dsend(this.g.user.formParams, '_set', [entry.id, entry.asString]);
          }
          if (html.window[$location].href[$endsWith]("?dsgvo")) this.currPage = "dsgvo";
          if (html.window[$location].href[$endsWith]("?impressum")) this.currPage = "impressum";
          if (html.window[$location].href[$endsWith]("?whatsnew")) this.currPage = "whatsnew";
          if (html.window[$location].href[$endsWith]("?welcome")) this.currPage = "welcome";
          if (html.window[$location].href[$endsWith]("?settings")) this.currPage = "settings";
          try {
            this.g.period.minDate = date.Date.parseLoose(this.g.user.birthDate, this.g.fmtDateForDisplay);
          } catch (e) {
            let ex = dart.getThrown(e);
            this.g.period.minDate = null;
          }
          this.getCurrentGluc();
          if (this[_currPage] === "whatsnew") this.g.saveWebData();
          this.checkPrint();
        }, voidToNullN()));
      }).bind(this));
    }
    extractAllParams() {
      for (let cfg of this.g.listConfig) {
        cfg.form.extractParams();
      }
    }
    toggleHelp() {
    }
    togglePage(id) {
      this.currPage = this.currPage == id ? "normal" : id;
    }
    displayLink(title, url, opts) {
      let clear = opts && 'clear' in opts ? opts.clear : false;
      let type = opts && 'type' in opts ? opts.type : null;
      let btnClass = opts && 'btnClass' in opts ? opts.btnClass : "";
      let icon = opts && 'icon' in opts ? opts.icon : null;
      if (!dart.test(this.g.isDebug) && type === "debug") return;
      if (dart.test(clear)) this.g.msg.links = [];
      this.g.msg.links[$add](new (IdentityMapOfStringL$StringL()).from(["url", url, "title", title, "class", btnClass, "icon", dart.test(this.g.isDebug) && icon == null ? "code" : icon]));
      this.g.msg.okText = this.msgClose;
      if (type != null) this.g.msg.type = type;
    }
    showDebug() {
      let msg = this.g.debugCache[$join]("<br />");
      this.g.debugCache[$clear]();
      this.g.msg.dbgText = msg;
    }
    display(msg, opts) {
      let append = opts && 'append' in opts ? opts.append : false;
      let links = opts && 'links' in opts ? opts.links : null;
      if (dart.test(append)) msg = (dart.test(this.g.msg.isEmpty) ? "" : dart.str(this.g.msg.text) + "<br />") + dart.str(msg);
      if (links != null) this.g.msg.links = links;
      this.g.msg.text = msg;
      this.g.msg.type = "msg";
    }
    callNightscout() {
      this.navigate(this.g.user.apiUrl(null, "", {noApi: true}));
    }
    callNightscoutReports() {
      this.navigate(this.g.user.reportUrl);
    }
    callNightscoutStatus() {
      this.navigate("https://nielsmaerten.github.io/nightscout-assistant/#/" + dart.str(this.g.language.img) + "/home");
    }
    formId(idx) {
      return "postForm" + dart.str(idx);
    }
    pdfString(doc) {
      if (doc != null) {
        let temp = doc;
        doc = "";
        for (let i = 0; i < temp.length; i = i + 1) {
          if (this.g.language.code === "ja_JP" || temp[$codeUnitAt](i) <= 4095) doc = dart.str(doc) + dart.str(temp[$_get](i));
        }
      }
      return convert.base64.encode(convert.utf8.encode(doc));
    }
    languageClass(item) {
      return this.g.language != null && dart.equals(dart.dload(item, 'code'), this.g.language.code) ? "language currLang" : "language";
    }
    navigate(url) {
      if (url[$startsWith]("showPlayground") || url[$startsWith]("showPdf") || url[$startsWith]("makePdfImages")) {
        let doc = this.pdfDoc;
        if (url === "showPlayground") {
          this.pdfUrl = this.g.urlPlayground;
          if (doc != null) {
            doc = doc[$replaceAll]("],", "],\n");
            doc = doc[$replaceAll](",\"", ",\n\"");
            doc = doc[$replaceAll](":[", ":\n[");
          }
        } else if (url === "showPdf") {
          this.pdfUrl = this.g.urlPdf;
        } else if (url === "makePdfImages") {
          this.pdfUrl = dart.str(this.g.urlPdf) + "?images=" + dart.str(this.g.language.img);
        }
        if (this.pdfDoc != null && dart.test(this.pdfList[$isEmpty])) {
          this.pdfData = this.pdfString(doc);
          FutureOfNullN().delayed(new core.Duration.new({milliseconds: 1}), dart.fn(() => {
            let form = FormElementL().as(html.querySelector("#postForm"));
            form.submit();
          }, VoidToNullN()));
          if (url === "makePdfImages") {
            if (dart.notNull(this.thumbLangIdx) < dart.notNull(this.g.languageList[$length]) - 1) {
              FutureOfNullN().delayed(new core.Duration.new({milliseconds: 500}), dart.fn(() => {
                this.createThumbs();
              }, VoidToNullN()));
            } else {
              this.g.setLanguage(this.thumbLangSave);
              this.thumbLangIdx = -1;
              this.thumbLangSave = null;
            }
          }
        } else if (dart.test(this.pdfList[$isNotEmpty])) {
        }
      } else {
        html.window[$open](url, "_blank");
      }
    }
    openPDF(idx) {
      if (dart.notNull(idx) >= dart.notNull(this.pdfList[$length])) return;
      if (dart.test(this.g.ppPdfSameWindow)) {
        for (let i = 0; i < dart.notNull(this.pdfList[$length]); i = i + 1) {
          this.pdfList[$_get](i).isPrinted = true;
          FutureOfNullN().delayed(new core.Duration.new({milliseconds: 10}), dart.fn(() => {
            let form = FormElementL().as(html.querySelector("#" + dart.str(this.formId(i))));
            form.submit();
          }, VoidToNullN()));
        }
        return;
      }
      this.pdfList[$_get](idx).isPrinted = true;
      FutureOfNullN().delayed(new core.Duration.new({milliseconds: 10}), dart.fn(() => {
        let form = FormElementL().as(html.querySelector("#" + dart.str(this.formId(idx))));
        form.submit();
      }, VoidToNullN()));
    }
    tileHelpButtonClicked(evt) {
    }
    callbackButton(evt) {
      let page = evt.type;
      if (page[$startsWith]("@")) {
        page = page[$substring](1);
        if (!dart.test(this.g.isConfigured)) page = "welcome";
      } else if (page[$startsWith]("video")) {
        html.window[$open]("https://www.youtube.com/watch?v=" + dart.str(dart.dsend(this.videos, '_get', [page])), "");
        return;
      }
      this.currPage = page;
    }
    settingsResult(evt) {
      switch (evt.type) {
        case "ok":
        {
          this.g.save({skipReload: true});
          this.reportData = null;
          this[_currPage] = dart.test(this.g.isConfigured) ? "normal" : "welcome";
          if (!dart.test(this.g.isConfigured)) {
            this.g.clearStorage();
          }
          break;
        }
        default:
        {
          this.g.loadSettings({skipSyncGoogle: true});
          this[_currPage] = dart.test(this.g.isConfigured) ? this[_lastPage] : "welcome";
          break;
        }
      }
      this.getCurrentGluc();
    }
    printparamsResult(evt) {
      switch (evt.type) {
        case "ok":
        {
          this[_currPage] = this[_lastPage];
          this.shiftClick(this.g.currPeriodShift);
          break;
        }
        case "cancel":
        {
          this[_currPage] = this[_lastPage];
          break;
        }
        default:
        {
          this[_currPage] = dart.test(this.g.isConfigured) ? this[_lastPage] : "welcome";
          break;
        }
      }
      this.getCurrentGluc();
    }
    checkSetup() {
      this.progressText = this.msgCheckSetup;
      this.progressValue = dart.notNull(this.progressMax) + 1;
      this.display(null);
      this.g.checkSetup().then(core.Null, dart.fn(error => {
        this.g.isConfigured = error == null || error[$isEmpty];
        this[_currPage] = dart.test(this.g.isConfigured) ? this[_lastPage] : "welcome";
        if (!dart.test(this.g.isConfigured)) this.g.info.addError(error);
      }, StringLToNullN()));
      this.progressText = null;
    }
    changePeriod(period) {
      this.g.period = period;
      this.reportData = null;
      this.checkPrint();
    }
    checkPrint() {
      this.sendDisabled = true;
      if (dart.test(this.g.period.isEmpty)) return;
      for (let cfg of this.g.listConfig) {
        if (dart.test(cfg.checked)) {
          if (dart.test(cfg.form.isDebugOnly)) {
            if (dart.test(this.g.isDebug)) this.sendDisabled = false;
          } else if (dart.test(cfg.form.isLocalOnly)) {
            if (dart.test(this.g.isLocal)) this.sendDisabled = false;
          } else {
            this.sendDisabled = false;
          }
        }
      }
      FutureOfNullN().delayed(new core.Duration.new({milliseconds: 100}), dart.fn(() => {
        if (this[_drag] != null) {
          this[_drag].onDragEnd.listen(null);
          this[_drag].onDragStart.listen(null);
          this[_drag].destroy();
        }
        this[_drag] = new dnd.Draggable.new(html.querySelectorAll(ElementL(), ".sortable"), {avatarHandler: this.g.viewType === "tile" ? new app_component.TileAvatarHandler.new() : dnd.AvatarHandler.clone(), draggingClass: "dragging", handle: this.g.viewType === "tile" ? null : "[name]>material-icon", verticalOnly: this.g.viewType === "list"});
        this[_drag].onDragStart.listen(dart.fn(event => {
        }, DraggableEventLToNullN()));
        this[_drag].onDragEnd.listen(dart.fn(event => {
          event.draggableElement[$animate](JSArrayOfMapLOfStringL$dynamic().of([new (IdentityMapOfStringL$dynamic()).from(["transform", "rotate(180)"])]), 500);
        }, DraggableEventLToNullN()));
        if (this[_drop] != null) this[_drop].onDrop.listen(null);
        this[_drop] = new dnd.Dropzone.new(html.querySelectorAll(ElementL(), ".sortable"), {overClass: "dragover"});
        this[_drop].onDrop.listen(dart.fn(event => {
          if (!dart.test(this.dropElement(event.draggableElement, event.dropzoneElement))) {
            event.dropzoneElement[$attributes][$_set]("dontclick", "true");
          }
        }, DropzoneEventLToNullN()));
      }, VoidToNullN()));
    }
    dropElement(drag, drop) {
      let dragId = drag[$getAttribute]("id")[$substring](5);
      let dropId = drop[$getAttribute]("id")[$substring](5);
      if (dragId === dropId) return false;
      let dragCfg = null;
      let dragIdx = -1;
      let dropIdx = -1;
      for (let i = 0; i < dart.notNull(this.g.listConfig[$length]); i = i + 1) {
        if (this.g.listConfig[$_get](i).id === dragId) {
          dragCfg = this.g.listConfig[$_get](i);
          dragIdx = i;
        }
        if (this.g.listConfig[$_get](i).id === dropId) dropIdx = i;
      }
      if (dragCfg != null && dropIdx >= 0) {
        this.g.listConfig[$removeAt](dragIdx);
        this.g.listConfig[$insert](dragIdx < dropIdx ? dropIdx - 1 : dropIdx, dragCfg);
      }
      this.g.savePdfOrder();
      return true;
    }
    checkCfg(cfg) {
      return dart.dtest(dart.dload(cfg, 'checked')) && (!dart.dtest(dart.dload(dart.dload(cfg, 'form'), 'isDebugOnly')) || dart.test(this.g.isDebug)) && (!dart.dtest(dart.dload(dart.dload(cfg, 'form'), 'isLocalOnly')) || dart.test(this.g.isLocal));
    }
    clickMenuButton(type) {
      this.drawerVisible = false;
      switch (type) {
        case "facebook":
        {
          this.navigate("https://www.facebook.com/nightrep");
          break;
        }
        case "autotune":
        {
          this.navigate("https://autotuneweb.azurewebsites.net/");
          break;
        }
        case "translate":
        {
          this.navigate("https://translate.google.com/toolkit/");
          break;
        }
        case "jsonparser":
        {
          this.navigate("https://jsonformatter.org/json-parser");
          break;
        }
        case "nsreports":
        {
          this.callNightscoutReports();
          break;
        }
        case "nightscout":
        {
          this.callNightscout();
          break;
        }
        case "whatsnew":
        {
          this.currPage = "whatsnew";
          break;
        }
        case "nightscoutstatus":
        {
          this.callNightscoutStatus();
          break;
        }
        case "menu":
        {
          this.changeView();
          break;
        }
        case "settings":
        {
          this.g.save();
          this.currPage = "settings";
          break;
        }
      }
    }
    clickTileHelp($36event, cfg) {
      this.drawerVisible = false;
      this.tileHelp[$add](FormConfigL().as(cfg));
      dart.dsend($36event, 'stopPropagation', []);
    }
    clickTileMenu($36event, cfg) {
      this.drawerVisible = false;
      this.tileParams = FormConfigL().as(cfg);
      dart.dsend($36event, 'stopPropagation', []);
    }
    clickTileParamSingleClose($36event) {
      this.extractAllParams();
      this.tileParams = null;
      dart.dsend($36event, 'stopPropagation', []);
    }
    clickTileParamClose($36event) {
      this.tileParams.form.extractParams();
      this.tileParams = null;
      dart.dsend($36event, 'stopPropagation', []);
    }
    clickTileParamListToggle($36event) {
      this.g.showAllTileParams = !dart.test(this.g.showAllTileParams);
      dart.dsend($36event, 'stopPropagation', []);
    }
    clickPdfButton() {
      this.currPage = "normal";
      this.createPDF();
    }
    clickDebugTrigger() {
      this.reportData = null;
      this.g.isDebug = !dart.test(this.g.isDebug);
      this.checkPrint();
      this.g.msg.dismiss(dart.bind(this.g.msg, 'clear'));
    }
    clickLocalTitle() {
      this.g.isLocal = !dart.test(this.g.isLocal);
      this.checkPrint();
    }
    loadData(isForThumbs) {
      return async.async(ReportDataL(), (function* loadData() {
        let t5, t8, t9, t9$;
        let beg = this.g.period.shiftStartBy(this.g.currPeriodShift.months);
        let end = this.g.period.shiftEndBy(this.g.currPeriodShift.months);
        if (dart.test(isForThumbs)) {
          beg = new date.Date.new(2019, 8, 26);
          end = new date.Date.new(2019, 9, 1);
          this.reportData = null;
        }
        if (this.reportData != null && dart.equals(this.reportData.begDate, beg) && dart.equals(this.reportData.endDate, end)) {
          return this.reportData;
        }
        let data = new json_data.ReportData.new(this.g, beg, end);
        data.isForThumbs = isForThumbs;
        if (dart.test(isForThumbs)) {
          data.user = new globals.UserData.new(this.g);
          data.user.name = this.msgModelName;
          data.user.birthDate = "13.2.1965";
          data.user.diaStartDate = "1.1.1996";
          data.user.insulin = "Novorapid";
          data.user.listApiUrl = JSArrayOfUrlDataL().of([]);
          data.user.listApiUrl[$add](globals.UrlData.fromJson(this.g, new (IdentityMapOfStringL$StringL()).from(["u", "https://diamant-ns.herokuapp.com", "t", "anditoken-a12e3472efe42759", "sd", null, "ed", null])));
          data.user.customData = new _js_helper.LinkedMap.new();
          data.user.formParams = new _js_helper.LinkedMap.new();
        } else {
          data.user = this.g.user;
        }
        this.reportData = data;
        let needed = new base_print.DataNeeded.new({statusCurr: false, statusAny: false, dataCurr: false, dataAny: false});
        for (let cfg of this.g.listConfigOrg) {
          if (dart.test(this.checkCfg(cfg))) {
            needed.mix(cfg.form.needed);
          }
        }
        if (dart.test(needed.needsStatus)) {
          this.progressMax = dart.notNull(this.g.userList[$length]) + 1;
          this.progressValue = 0;
          for (let user of this.g.userList) {
            if (dart.test(needed.status.anybody) || dart.equals(user, this.g.user)) {
              this.progressText = this.msgLoadingDataFor(user.name);
              try {
                let url = user.apiUrl(null, "status.json");
                this.displayLink("status", url, {type: "debug"});
                let content = (yield this.g.requestJson(url, {showError: false}));
                user.status = null;
                if (content != null) {
                  user.status = json_data.StatusData.fromJson(MapLOfStringL$dynamic().as(content));
                }
              } catch (e$) {
                let ex = dart.getThrown(e$);
                user.status = null;
              }
              user.isReachable = user.status != null;
            }
            if (this.sendIcon !== "stop") return data;
          }
          this.g.save({skipReload: true});
        } else {
          this.g.user.status = null;
          try {
            let url = this.g.user.apiUrl(null, "status.json");
            let content = (yield this.g.requestJson(url, {showError: false}));
            if (content != null) {
              this.g.user.status = json_data.StatusData.fromJson(MapLOfStringL$dynamic().as(content));
            }
          } catch (e$0) {
            let ex = dart.getThrown(e$0);
            this.g.user.status = null;
          }
          this.g.user.isReachable = this.g.user.status != null;
        }
        if (!dart.test(needed.needsData) || !dart.test(this.g.user.isReachable)) {
          return data;
        }
        let bd = new core.DateTime.new(data.begDate.year, data.begDate.month, data.begDate.day);
        let ed = new core.DateTime.new(data.endDate.year, data.endDate.month, data.endDate.day);
        this.progressValue = 0;
        this.progressMax = ed.difference(bd).inDays;
        let begDate = data.begDate;
        let endDate = data.endDate;
        this.g.msg.links = [];
        this.g.msg.type = "msg toggle-debug";
        let url = data.user.apiUrl(endDate, "status.json");
        this.displayLink("status", url, {type: "debug"});
        let content = (yield this.g.requestJson(url));
        if (content != null) {
          data.status = json_data.StatusData.fromJson(MapLOfStringL$dynamic().as(content));
          if (data.status.status === "401") {
            data.user.isReachable = false;
            return data;
          }
        }
        if (this.g.period.start == null || this.g.period.end == null) {
          data.error = new core.StateError.new(this.msgEmptyRange);
          return data;
        }
        let baseProfile = null;
        let list = this.g.findUrlDataFor(begDate, endDate);
        let maxCount = this.g.profileMaxCounts[$_get]((t5 = data.user.profileMaxIdx, t5 == null ? 0 : t5));
        for (let urlData of list) {
          url = urlData.fullUrl("profile.json", {params: "count=" + dart.str(maxCount)});
          this.displayLink("profiles", url, {type: "debug"});
          content = (yield this.g.requestJson(url));
          try {
            this.g.basalPrecisionAuto = 0;
            let src = ListL().as(content);
            let uploaders = [];
            for (let entry of src) {
              try {
                let profile = json_data.ProfileData.fromJson(MapLOfStringL$dynamic().as(entry), {isFromNS: true});
                data.profiles[$add](profile);
                if (!dart.test(uploaders[$contains](profile.enteredBy))) uploaders[$add](profile.enteredBy);
              } catch (e$1) {
                let ex = dart.getThrown(e$1);
              }
              this.g.basalPrecisionAuto = math.max(intL(), this.g.basalPrecision, data.profiles[$last].maxPrecision);
            }
            data.profiles[$sort](dart.fn((a, b) => a.startDate.compareTo(b.startDate), ProfileDataLAndProfileDataLTointL()));
            let check = new core.DateTime.new(begDate.year, begDate.month, begDate.day, 23, 59, 59, 999).toUtc().add(new core.Duration.new({days: -1}));
            if (src[$length] == maxCount && dart.test(data.profiles[$first].startDate.isAfter(check))) {
              this.g.info.addWarning(this.msgTooMuchProfiles(maxCount, uploaders[$length], uploaders[$join](", ")));
            }
            baseProfile = data.profiles[$first];
          } catch (e$2) {
            let ex = dart.getThrown(e$2);
            this.g.info.addDevError(ex, this.msgProfileError);
          }
          url = urlData.fullUrl("treatments.json", {params: "find[created_at][$gte]=" + dart.str(dart.notNull(begDate.year) - 1) + "-01-01T00:00:00.000Z&find[eventType]=Profile Switch"});
          this.displayLink("profileswitch", url, {type: "debug"});
          content = (yield this.g.requestJson(url));
          if (content != null) {
            try {
              let src = ListL().as(content);
              for (let entry of src) {
                let check = json_data.JsonData.toDate(dart.dsend(entry, '_get', ["created_at"]));
                if (data.profiles[$firstWhere](dart.fn(p => dart.equals(p.createdAt, check), ProfileDataLToboolL()), {orElse: dart.fn(() => null, VoidToNullN())}) != null || dart.dsend(entry, '_get', ["profile"]) == null) continue;
                let parts = JSArrayOfStringL().of([]);
                parts[$add]("{\"_id\":\"" + dart.str(dart.dsend(entry, '_get', ["_id"])) + "\",\"defaultProfile\":\"" + dart.str(dart.dsend(entry, '_get', ["profile"])) + "\"");
                let store = null;
                if (dart.dsend(entry, '_get', ["profileJson"]) == null) {
                  let key = StringL().as(dart.dsend(entry, '_get', ["profile"]));
                  let prof = data.profiles[$lastWhere](dart.fn(p => dart.test(p.startDate.isBefore(check)) && dart.test(p.store[$containsKey](key)), ProfileDataLToboolL()), {orElse: dart.fn(() => null, VoidToNullN())});
                  if (prof != null) {
                    store = prof.store[$_get](key);
                  }
                }
                parts[$add]("\"store\":{\"" + dart.str(dart.dsend(entry, '_get', ["profile"])) + "\":" + dart.str(dart.dsend(entry, '_get', ["profileJson"])) + "},\"startDate\":\"" + dart.str(dart.dsend(entry, '_get', ["created_at"])) + "\"");
                parts[$add]("\"mills\":\"0\",\"units\":\"mg/dl\"");
                parts[$add]("\"percentage\":\"" + dart.str(dart.dsend(entry, '_get', ["percentage"])) + "\"");
                parts[$add]("\"duration\":\"" + dart.str(dart.dsend(entry, '_get', ["duration"])) + "\"");
                parts[$add]("\"timeshift\":\"" + dart.str(dart.dsend(entry, '_get', ["timeshift"])) + "\"");
                parts[$add]("\"created_at\":\"" + dart.str(dart.dsend(entry, '_get', ["created_at"])) + "\"}");
                data.profiles[$add](json_data.ProfileData.fromJson(MapLOfStringL$dynamic().as(convert.json.decode(parts[$join](",")))));
                if (store != null) data.profiles[$last].store[$_set](StringL().as(dart.dsend(entry, '_get', ["profile"])), store);
              }
            } catch (e$3) {
              let ex = dart.getThrown(e$3);
              this.g.info.addDevError(ex, this.msgProfileError);
            }
          }
        }
        data.profiles[$sort](dart.fn((a, b) => a.startDate.compareTo(b.startDate), ProfileDataLAndProfileDataLTointL()));
        let i = 1;
        while (i < dart.notNull(data.profiles[$length])) {
          let last = data.profiles[$_get](i - 1);
          let current = data.profiles[$_get](i);
          let duration = current.startDate.difference(last.startDate).inSeconds;
          if (dart.notNull(last.duration) >= dart.notNull(duration) || last.duration === 0) {
            last.duration = duration;
          } else {
            let temp = baseProfile.copy;
            temp.startDate = last.startDate.add(new core.Duration.new({seconds: last.duration}));
            temp.createdAt = temp.startDate;
            temp.duration = current.startDate.difference(temp.startDate).inSeconds;
            data.profiles[$insert](i, temp);
            i = i + 1;
          }
          if (dart.test(current.isFromNS)) baseProfile = current;
          i = i + 1;
        }
        if (baseProfile != null && dart.notNull(data.profiles[$last].duration) > 0) {
          let temp = baseProfile.copy;
          temp.startDate = data.profiles[$last].startDate.add(new core.Duration.new({seconds: data.profiles[$last].duration}));
          temp.createdAt = temp.startDate;
          data.profiles[$add](temp);
        }
        if (dart.test(data.profiles[$isEmpty])) {
          data.profiles[$add](new json_data.ProfileData.new());
        }
        let d = new core.DateTime.now().difference((t8 = data.profiles[$last].startDate, t8 == null ? new core.DateTime.now() : t8)).inSeconds;
        data.profiles[$last].duration = d;
        data.profiles[$sort](dart.fn((a, b) => a.startDate.compareTo(b.startDate), ProfileDataLAndProfileDataLTointL()));
        data.profiles[$removeWhere](dart.fn(p => dart.notNull(p.duration) < 2 && !dart.equals(p, data.profiles[$last]), ProfileDataLToboolL()));
        let lastTempBasal = null;
        begDate = begDate.add({days: -1});
        data.dayCount = -1;
        while (dart.test(begDate['<='](endDate))) {
          let hasData = false;
          if (dart.test(this.g.period.isDowActive(dart.notNull(begDate.weekday) - 1))) {
            let beg = new core.DateTime.new(begDate.year, begDate.month, begDate.day, 0, 0, 0, 0).toUtc();
            let end = new core.DateTime.new(begDate.year, begDate.month, begDate.day, 23, 59, 59, 999).toUtc();
            let profile = data.profile(beg);
            let profileBeg = beg.add(new core.Duration.new({hours: -dart.notNull(profile.store.timezone.localDiff)}));
            let profileEnd = end.add(new core.Duration.new({hours: -dart.notNull(profile.store.timezone.localDiff)}));
            this.progressText = this.msgLoadingDataFor(begDate.format(new intl.DateFormat.new(this.g.language.dateformat)));
            let url = this.g.user.apiUrl(new date.Date.new(begDate.year, begDate.month, begDate.day), "entries.json", {params: "find[date][$gte]=" + dart.str(beg.millisecondsSinceEpoch) + "&" + "find[date][$lte]=" + dart.str(end.millisecondsSinceEpoch) + "&count=100000"});
            let src = ListL().as(yield this.g.requestJson(url));
            if (src != null) {
              this.displayLink("e" + dart.str(begDate.format(this.g.fmtDateForDisplay)) + " (" + dart.str(src[$length]) + ")", url, {type: "debug"});
              for (let entry of src) {
                try {
                  let e = json_data.EntryData.fromJson(MapLOfStringL$dynamic().as(entry));
                  if (dart.notNull(e.gluc) > 0) {
                    hasData = true;
                    data.ns.entries[$add](e);
                  }
                  if (dart.notNull(e.mbg) > 0) {
                    hasData = true;
                    data.ns.bloody[$add](e);
                  } else if (dart.notNull(e.gluc) <= 0) {
                    hasData = true;
                    data.ns.remaining[$add](e);
                  }
                } catch (e$4) {
                  let ex = dart.getThrown(e$4);
                  if (dart.test(this.g.isDebug)) this.g.info.addDevError(ex, "Fehler im Entry-Datensatz: " + dart.str(dart.toString(entry)));
                  break;
                }
              }
            }
            let tmp = null;
            if (lastTempBasal == null) {
              url = data.user.apiUrl(new date.Date.new(begDate.year, begDate.month, begDate.day), "treatments.json", {params: "find[created_at][$lt]=" + dart.str(profileBeg.toIso8601String()) + "&" + "find[created_at][$gt]=" + dart.str(profileBeg.add(new core.Duration.new({days: -1})).toIso8601String()) + "&" + "count=100&find[eventType][$eq]=Temp%20Basal"});
              src = ListL().as(yield this.g.requestJson(url));
              if (src != null) {
                let list = JSArrayOfTreatmentDataL().of([]);
                for (let treatment of src) {
                  list[$add](json_data.TreatmentData.fromJson(this.g, MapLOfStringL$dynamic().as(treatment)));
                }
                list[$sort](dart.fn((a, b) => a.createdAt.compareTo(b.createdAt), TreatmentDataLAndTreatmentDataLTointL()));
                if (dart.test(list[$isNotEmpty])) lastTempBasal = list[$last];
              }
            }
            url = data.user.apiUrl(new date.Date.new(begDate.year, begDate.month, begDate.day), "treatments.json", {params: "find[created_at][$gte]=" + dart.str(profileBeg.toIso8601String()) + "&" + "find[created_at][$lte]=" + dart.str(profileEnd.toIso8601String()) + "&count=100000"});
            src = ListL().as(yield this.g.requestJson(url));
            if (src != null) {
              this.displayLink("t" + dart.str(begDate.format(this.g.fmtDateForDisplay)) + " (" + dart.str(src[$length]) + ")", url, {type: "debug"});
              let hasExercise = false;
              for (let treatment of src) {
                hasData = true;
                let t = json_data.TreatmentData.fromJson(this.g, MapLOfStringL$dynamic().as(treatment));
                if (dart.test(data.ns.treatments[$isNotEmpty]) && dart.test(t.equals(data.ns.treatments[$last]))) {
                  t9 = data.ns.treatments[$last];
                  t9.duplicates = dart.notNull(t9.duplicates) + 1;
                } else {
                  data.ns.treatments[$add](t);
                  if (dart.test(t.isExercise)) {
                    hasExercise = true;
                  } else if (dart.test(t.isBGCheck)) {
                    let entry = new json_data.EntryData.new();
                    entry.id = t.id;
                    entry.time = t.createdAt;
                    entry.device = t.enteredBy;
                    entry.type = "mbg";
                    entry.mbg = dart.notNull(t.glucose) * dart.notNull(this.g.glucFactor);
                    entry.rawbg = t.glucose;
                    data.ns.bloody[$add](entry);
                  }
                }
              }
            }
            url = data.user.apiUrl(new date.Date.new(profileBeg.year, profileBeg.month, profileBeg.day), "devicestatus.json", {params: "find[created_at][$gte]=" + dart.str(profileBeg.toIso8601String()) + "&" + "find[created_at][$lte]=" + dart.str(profileEnd.toIso8601String()) + "&count=100000"});
            src = ListL().as(yield this.g.requestJson(url));
            if (src != null) {
              this.displayLink("ds" + dart.str(begDate.format(this.g.fmtDateForDisplay)) + " (" + dart.str(src[$length]) + ")", url, {type: "debug"});
              for (let devicestatus of src) {
                hasData = true;
                let ds = json_data.DeviceStatusData.fromJson(MapLOfStringL$dynamic().as(devicestatus));
                data.ns.devicestatusList[$add](ds);
              }
            }
          }
          begDate = begDate.add({days: 1});
          if (hasData) {
            t9$ = data;
            t9$.dayCount = dart.notNull(t9$.dayCount) + 1;
          }
          this.progressValue = dart.notNull(this.progressValue) + 1;
          if (this.sendIcon !== "stop") return data;
        }
        if (this.sendIcon === "stop") {
          this.progressText = this.msgPreparingData;
          this.progressValue = dart.notNull(this.progressMax) + 1;
          data.ns.entries[$sort](dart.fn((a, b) => a.time.compareTo(b.time), EntryDataLAndEntryDataLTointL()));
          data.ns.bloody[$sort](dart.fn((a, b) => a.time.compareTo(b.time), EntryDataLAndEntryDataLTointL()));
          data.ns.remaining[$sort](dart.fn((a, b) => a.time.compareTo(b.time), EntryDataLAndEntryDataLTointL()));
          data.ns.treatments[$sort](dart.fn((a, b) => a.createdAt.compareTo(b.createdAt), TreatmentDataLAndTreatmentDataLTointL()));
          data.ns.devicestatusList[$sort](dart.fn((a, b) => a.createdAt.compareTo(b.createdAt), DeviceStatusDataLAndDeviceStatusDataLTointL()));
          let diffTime = 5;
          let minGapKeep = 16;
          let entryList = JSArrayOfEntryDataL().of([]);
          if (dart.test(data.ns.entries[$isNotEmpty])) {
            let target = new core.DateTime.new(data.ns.entries[$first].time.year, data.ns.entries[$first].time.month, data.ns.entries[$first].time.day);
            let prev = data.ns.entries[$first];
            let t = new core.DateTime.new(prev.time.year, prev.time.month, prev.time.day);
            prev = new json_data.EntryData.new();
            prev.time = t;
            let next = new json_data.EntryData.new();
            next.time = target;
            for (let entry of data.ns.entries) {
              if (dart.test(entry.isInvalid)) continue;
              let current = new core.DateTime.new(entry.time.year, entry.time.month, entry.time.day, entry.time.hour, entry.time.minute);
              if (dart.test(current.isAtSameMomentAs(target))) {
                prev = entry;
                prev.time = current;
                entry.isCopy = true;
                entryList[$add](entry);
                target = target.add(new core.Duration.new({minutes: diffTime}));
              } else if (dart.test(current.isBefore(target))) {
                next.slice(entry, next, 0.5);
              } else {
                next = entry.copy;
                let max = current.difference(prev.time).inMinutes;
                while (dart.test(current.isAfter(target)) || dart.test(current.isAtSameMomentAs(target))) {
                  let factor = max === 0 ? 0 : dart.notNull(target.difference(prev.time).inMinutes) / dart.notNull(max);
                  next = next.copy;
                  if (dart.notNull(max) >= minGapKeep) next.isGap = true;
                  next.time = target;
                  if (dart.test(current.isAtSameMomentAs(target))) {
                    next.isCopy = true;
                    next.slice(entry, entry, 1.0);
                  } else {
                    next.slice(prev, entry, factor);
                  }
                  entryList[$add](next);
                  target = target.add(new core.Duration.new({minutes: diffTime}));
                }
                prev = entry;
                prev.time = current;
                next = entry;
              }
            }
          }
          data.calc.entries = entryList;
          data.calc.bloody = data.ns.bloody;
          data.calc.remaining = data.ns.remaining;
          data.ns.treatments[$removeWhere](dart.fn(t => this.filterTreatment(t), TreatmentDataLToboolL()));
          data.calc.treatments = data.ns.treatments;
          data.calc.devicestatusList = data.ns.devicestatusList;
          data.calc.extractData(data, lastTempBasal);
          data.ns.extractData(data, lastTempBasal);
        } else {
        }
        return data;
      }).bind(this));
    }
    filterTreatment(t) {
      if (t.enteredBy[$toLowerCase]() === "sync") return true;
      return false;
    }
    cancelProgress() {
      this.sendIcon = "send";
    }
    sendClick() {
      this.drawerVisible = false;
      switch (this.sendIcon) {
        case "send":
        {
          this.currPage = "printparams";
          break;
        }
        case "close":
        {
          this.sendIcon = "send";
          this.currPage = "normal";
          break;
        }
      }
    }
    shiftClick(shift) {
      this.g.currPeriodShift = shift;
      this[_sendClick]();
    }
    [_sendClick]() {
      this.tileParams = null;
      if (this.sendIcon === "send") {
        this.sendIcon = "stop";
        this.drawerVisible = false;
        this.createPDF();
      } else if (this.sendIcon === "close") {
        this.sendIcon = "send";
        this.currPage = "normal";
      } else {
        this.sendIcon = "send";
      }
    }
    classForView(def) {
      if (def === "sendPanel" && this.progressText != null) return def;
      switch (this.g.viewType) {
        case "tile":
        {
          def = dart.str(def) + " is-tileview";
          break;
        }
      }
      return def;
    }
    userClass(user) {
      let ret = "selectItem";
      if (!dart.test(user.isReachable)) ret = ret + " unreachable";
      return ret;
    }
    checkedIndex(cfg) {
      let ret = 0;
      for (let check of this.g.listConfig) {
        if (dart.test(check.form.isDebugOnly) && !dart.test(this.g.isDebug)) continue;
        if (dart.test(check.form.isLocalOnly) && !dart.test(this.g.isLocal)) continue;
        if (dart.test(check.checked)) ret = ret + 1;
        if (dart.equals(check, cfg)) return ret;
      }
      return ret;
    }
    showTileParams(cfg, evt) {
      dart.dsend(evt, 'preventDefault', []);
      this.tileParams == null ? this.tileParams = FormConfigL().as(cfg) : this.tileParams = null;
    }
    changeView() {
      switch (this.g.viewType) {
        case "list":
        {
          this.g.viewType = "tile";
          break;
        }
        case "tile":
        {
          this.g.viewType = "list";
          break;
        }
      }
      this.tileParams = null;
      this.g.save();
      this.checkPrint();
    }
    createPDF(opts) {
      let isForThumbs = opts && 'isForThumbs' in opts ? opts.isForThumbs : false;
      this.g.save({skipReload: isForThumbs});
      this.display("");
      this.pdfList[$clear]();
      this.progressMax = 1;
      this.progressValue = 0;
      this.progressText = this.msgPreparingPDF;
      this.loadData(isForThumbs).then(core.Null, dart.fn(src => async.async(core.Null, (function*() {
        this.g.isCreatingPDF = true;
        try {
          this.progressText = this.msgCreatingPDF;
          if (src.error != null) {
            if (dart.test(this.g.isDebug)) {
              this.g.info.addError(this.msgLoadingData(dart.toString(src.error), dart.toString(src.error[$stackTrace])));
            } else {
              this.g.info.addError(this.msgLoadingDataError);
            }
            this.g.isCreatingPDF = false;
            return;
          }
          if (this.sendIcon === "send") {
            this.progressText = null;
            this.reportData = null;
            this.g.isCreatingPDF = false;
            return;
          }
          this.progressValue = dart.notNull(this.progressMax) + 1;
          let doc = null;
          let docList = [];
          let docLen = 0;
          let prevPage = null;
          let listConfig = JSArrayOfFormConfigL().of([]);
          if (dart.test(isForThumbs)) {
            for (let cfg of this.g.listConfigOrg) {
              listConfig[$add](cfg);
              switch (cfg.id) {
                case "cgp":
                {
                  cfg = new base_print.FormConfig.new(new print_cgp.PrintCGP.new(), false);
                  cfg.form.params[$_get](0).thumbValue = 1;
                  listConfig[$add](cfg);
                  break;
                }
                case "dayanalysis":
                {
                  cfg = new base_print.FormConfig.new(new print_daily_analysis.PrintDailyAnalysis.new(), false);
                  cfg.form.params[$_get](2).thumbValue = 1;
                  listConfig[$add](cfg);
                  break;
                }
                case "percentile":
                {
                  cfg = new base_print.FormConfig.new(new print_percentile.PrintPercentile.new(), false);
                  cfg.form.params[$_get](0).thumbValue = 0;
                  cfg.form.params[$_get](2).thumbValue = true;
                  listConfig[$add](cfg);
                  break;
                }
              }
            }
          } else {
            listConfig = this.g.listConfig;
          }
          for (let cfg of listConfig) {
            let form = cfg.form;
            if (dart.test(this.checkCfg(cfg)) || dart.test(isForThumbs)) {
              docLen = convert.json.encode(doc).length;
              let formPages = (yield form.getFormPages(src, docLen));
              let fileList = JSArrayOfListLOfPageL().of([JSArrayOfPageL().of([])]);
              for (let page of formPages) {
                let entry = page.content[$last];
                if (dart.equals(dart.dsend(entry, '_get', ["pageBreak"]), "newFile") && dart.test(fileList[$last][$isNotEmpty])) {
                  dart.dsend(entry, 'remove', ["pageBreak"]);
                  fileList[$last][$add](page);
                  fileList[$add](JSArrayOfPageL().of([]));
                } else {
                  if (dart.equals(dart.dsend(entry, '_get', ["pageBreak"]), "newFile")) dart.dsend(entry, 'remove', ["pageBreak"]);
                  fileList[$last][$add](page);
                }
              }
              if (dart.test(isForThumbs) && dart.notNull(fileList[$length]) > 1) {
                fileList[$removeRange](1, dart.notNull(fileList[$length]) - 1);
                if (dart.notNull(fileList[$_get](0)[$length]) > 1) fileList[$_get](0)[$removeRange](1, dart.notNull(fileList[$_get](0)[$length]) - 1);
              }
              for (let pageList of fileList) {
                let content = [];
                for (let page of pageList) {
                  if (prevPage != null) {
                    let pagebreak = new (IdentityMapOfStringL$StringL()).from(["text", "", "pageBreak", "after"]);
                    if (!dart.equals(page.isPortrait, prevPage.isPortrait)) {
                      pagebreak[$_set]("pageSize", "a4");
                      pagebreak[$_set]("pageOrientation", dart.test(page.isPortrait) ? "portrait" : "landscape");
                    }
                    dart.dsend(content, 'add', [pagebreak]);
                  }
                  dart.dsend(content, 'add', [page.asElement]);
                  prevPage = page;
                }
                if (doc == null) {
                  doc = new (IdentityMapOfStringL$dynamic()).from(["pageSize", "a4", "pageOrientation", dart.test(pageList[$isEmpty]) || dart.test(pageList[$_get](0).isPortrait) ? "portrait" : "landscape", "pageMargins", JSArrayOfdoubleL().of([form.cm(0), form.cm(1.0), form.cm(0), form.cm(0.0)]), "content", content, "images", form.images, "styles", new (IdentityMapOfStringL$MapL()).from(["infoline", new (IdentityMapOfStringL$ListLOfdoubleL()).from(["margin", JSArrayOfdoubleL().of([form.cm(0), form.cm(0.25), form.cm(0), form.cm(0.25)])]), "perstitle", new (IdentityMapOfStringL$StringL()).from(["alignment", "right"]), "persdata", new (IdentityMapOfStringL$StringL()).from(["color", "#0000ff"]), "infotitle", new (IdentityMapOfStringL$StringL()).from(["alignment", "left"]), "infodata", new (IdentityMapOfStringL$StringL()).from(["alignment", "right", "color", "#0000ff"]), "infounit", new (IdentityMapOfStringL$ObjectL()).from(["margin", JSArrayOfdoubleL().of([form.cm(0), form.cm(0), form.cm(0), form.cm(0)]), "color", "#0000ff"]), "hba1c", new (IdentityMapOfStringL$StringL()).from(["color", "#5050ff"]), "total", new (IdentityMapOfStringL$dynamic()).from(["bold", true, "fillColor", "#d0d0d0", "margin", form.m0]), "timeDay", new (IdentityMapOfStringL$dynamic()).from(["bold", true, "fillColor", "#d0d0d0", "margin", form.m0]), "timeNight", new (IdentityMapOfStringL$dynamic()).from(["bold", true, "fillColor", "#303030", "color", "white", "margin", form.m0]), "timeLate", new (IdentityMapOfStringL$dynamic()).from(["bold", true, "fillColor", "#a0a0a0", "margin", form.m0]), "row", new _js_helper.LinkedMap.new()])]);
                } else {
                  dart.dsend(dart.dsend(doc, '_get', ["content"]), 'add', [content]);
                  for (let key of form.images[$keys]) {
                    MapLOfStringL$StringL().as(dart.dsend(doc, '_get', ["images"]))[$_set](key, form.images[$_get](key));
                  }
                }
                if (!dart.equals(pageList, fileList[$last])) {
                  docList[$add](doc);
                  doc = null;
                  prevPage = null;
                }
              }
            }
          }
          if (doc != null) docList[$add](doc);
          if (dart.notNull(docList[$length]) > 1) {
            this.pdfList[$clear]();
            this.pdfDoc = null;
            for (let doc of docList) {
              let dst = convert.jsonEncode(doc);
              if (dart.test(this.g.isDebug)) {
                this.pdfUrl = "http://pdf.zreptil.de/playground.php";
                dst = dst[$replaceAll]("],", "],\n");
                dst = dst[$replaceAll](",\"", ",\n\"");
                dst = dst[$replaceAll](":[", ":\n[");
              } else {
                this.pdfUrl = "https://nightscout-reporter.zreptil.de/pdfmake/pdfmake.php";
              }
              this.pdfList[$add](new app_component.PdfData.new(this.pdfString(dst)));
            }
            this.currPage = "pdfList";
            this.sendIcon = "close";
            this.progressText = null;
            return;
          } else {
            this.pdfDoc = convert.jsonEncode(docList[$_get](0));
          }
          if (!dart.test(this.g.isDebug)) {
            if (this.g.msg.text[$isEmpty]) {
              if (dart.test(isForThumbs)) {
                this.navigate("makePdfImages");
              } else {
                this.navigate("showPdf");
              }
            } else {
              this.displayLink(this.msgShowPDF, "showPdf", {btnClass: "action", icon: "description"});
            }
          } else {
            this.displayLink("playground", "showPlayground", {btnClass: "action", icon: "description"});
            this.displayLink("pdf", "showPdf", {btnClass: "action", icon: "description"});
          }
          this.sendIcon = "send";
          this.progressText = null;
        } finally {
          this.g.isCreatingPDF = false;
        }
      }).bind(this)), ReportDataLToFutureLOfNullN())).catchError(dart.fn(error => {
        this.g.info.addDevError(error, this.msgPDFCreationError);
        this.sendIcon = "send";
        this.progressText = null;
        return -1;
      }, dynamicTointL()));
    }
    tileClass(cfg) {
      let ret = "tile sortable";
      if (dart.test(cfg.form.isDebugOnly) && dart.test(this.g.isDebug)) ret = ret + " is-debug";
      if (dart.test(cfg.checked) && this.tileParams == null) ret = ret + " tilechecked";
      if (dart.test(cfg.form.isLocalOnly) || dart.test(cfg.form.isBetaOrLocal) && dart.test(this.g.isLocal)) ret = ret + " is-local";
      if (dart.test(cfg.form.isBetaOrLocal)) ret = ret + " is-beta";
      return ret;
    }
    expansionClass(cfg) {
      let ret = "paramPanel";
      if (dart.test(cfg.form.isDebugOnly) && dart.test(this.g.isDebug)) ret = ret + " is-debug";
      if (dart.test(cfg.checked)) ret = ret + " checked";
      if (dart.test(cfg.form.isLocalOnly)) ret = ret + " is-local";
      if (dart.test(cfg.form.isBetaOrLocal)) ret = ret + " is-beta";
      return ret;
    }
    expansionPanelOpen(evt, cfg) {
      cfg.opened = true;
    }
    expansionPanelClose(evt, cfg) {
      cfg.checked = !dart.test(cfg.checked);
      cfg.opened = false;
    }
    toggleThemePanel(themeKey) {
      let ts = "";
      let ls = "";
      let duration = 1;
      if (dart.test(this.themePanelShown)) {
        this.themeStyle = "animation:hidethemes " + dart.str(duration) + "s ease-in-out normal forwards;";
        this.logoStyle = "animation:hidethemeslogo " + dart.str(duration) + "s ease-in-out normal forwards;";
        ts = "animation-iteration-count:0;width:0em;";
        ls = "animation-iteration-count:0;transform: rotate(0deg);";
      } else {
        this.themeStyle = "animation:showthemes " + dart.str(duration) + "s ease-in-out normal forwards;";
        this.logoStyle = "animation:showthemeslogo " + dart.str(duration) + "s ease-in-out normal forwards;";
        ts = "animation-iteration-count:0;width:15em;";
        ls = "animation-iteration-count:0;transform: rotate(360deg);";
      }
      FutureOfNullN().delayed(new core.Duration.new({milliseconds: (duration * 1100)[$toInt]()}), dart.fn(() => {
        this.themeStyle = ts;
        this.logoStyle = ls;
        if (themeKey !== "") {
          this.g.theme = themeKey;
          this.setTheme(this.g.theme);
        }
      }, VoidToNullN()));
      this.themePanelShown = !dart.test(this.themePanelShown);
    }
    shortcutClass(data) {
      let ret = "shortcut";
      if (dart.test(data.isActive)) ret = ret + " active";
      return ret;
    }
    editShortcut(shortcutIdx) {
      this.g.currShortcutIdx = shortcutIdx;
      if (dart.notNull(shortcutIdx) >= 0 && dart.notNull(shortcutIdx) < dart.notNull(this.g.shortcutList[$length])) {
        this.g.currShortcut = this.g.shortcutList[$_get](shortcutIdx).copy;
      } else {
        this.g.currShortcut = new globals.ShortcutData.new(this.g);
      }
      this.currPage = "shortcutedit";
    }
    activateUser(idx) {
      this.g.userIdx = idx;
      this.reportData = null;
      this.g.save();
      this.getCurrentGluc();
      this.checkPrint();
      this.g.refresh();
    }
    activateShortcut(shortcutIdx = null) {
      if (shortcutIdx != null) {
        let data = this.g.shortcutList[$_get](shortcutIdx);
        this.g.fillFormsFromShortcut(data);
        this.checkPrint();
        this.g.refresh();
      }
    }
    shortcuteditResult(evt) {
      switch (evt.type) {
        case "ok":
        {
          this[_currPage] = this[_lastPage];
          this.g.saveShortcuts();
          break;
        }
        case "remove":
        {
          this[_currPage] = this[_lastPage];
          if (dart.notNull(this.g.currShortcutIdx) >= 0 && dart.notNull(this.g.currShortcutIdx) < dart.notNull(this.g.shortcutList[$length])) {
            this.g.shortcutList[$removeAt](this.g.currShortcutIdx);
            this.g.currShortcutIdx = null;
            this.g.currShortcut = null;
            this.g.saveShortcuts();
          }
          break;
        }
        case "cancel":
        {
          this[_currPage] = this[_lastPage];
          this.g.currShortcut = null;
          break;
        }
        default:
        {
          this[_currPage] = dart.test(this.g.isConfigured) ? this[_lastPage] : "welcome";
          break;
        }
      }
      this.getCurrentGluc();
    }
    expansionPanelClicked(evt, cfg) {
      if (!dart.test(cfg.opened)) {
        if (dart.equals(dart.dsend(dart.dload(dart.dload(evt, 'currentTarget'), 'attributes'), '_get', ["dontclick"]), "true")) {
          dart.dsend(dart.dload(evt, 'currentTarget'), 'removeAttribute', ["dontclick"]);
          return;
        }
        cfg.checked = !dart.test(cfg.checked);
        this.checkPrint();
      }
    }
    signinEvent(e) {
      switch (e.status) {
        case C0 || CT.C0:
        {
          break;
        }
        case C1 || CT.C1:
        {
          break;
        }
        case C2 || CT.C2:
        {
          break;
        }
        case C3 || CT.C3:
        {
          this.g.info.addError(e.message);
          break;
        }
        default:
        {
          this.g.msg.text = dart.str(this.g.msg.text) + " - " + dart.str(e.message);
          break;
        }
      }
    }
    createThumbs() {
      return async.async(dart.void, (function* createThumbs() {
        this.sendIcon = "stop";
        this.drawerVisible = false;
        if (this.thumbLangSave == null && this.g.language.img !== "de") {
          this.thumbLangIdx = this.g.languageList[$length];
          this.thumbLangSave = this.g.language;
        } else {
          this.thumbLangSave == null ? this.thumbLangSave = this.g.language : null;
          this.thumbLangIdx = dart.notNull(this.thumbLangIdx) + 1;
          yield this.g.setLanguage(this.g.languageList[$_get](this.thumbLangIdx));
        }
        this.createPDF({isForThumbs: true});
      }).bind(this));
    }
    checkAllParams() {
      for (let param of this.tileParams.form.params) {
        param.boolValue = this.allParams;
      }
    }
  };
  (app_component.AppComponent.new = function(sanitizer) {
    this[paramboolValue] = false;
    this[g] = globals.Globals.new();
    this[drawerVisible] = false;
    this[pdfInfoVisible] = false;
    this[__currPage] = null;
    this[_lastPage] = "welcome";
    this[today] = date.Date.today();
    this[appTheme] = new (IdentityMapOfStringL$boolL()).new();
    this[dateRanges] = JSArrayOfDatepickerPresetL().of([]);
    this[drConfig] = model.DateRangePickerConfiguration.basic;
    this[sendDisabled] = true;
    this[pdfData] = "";
    this[pdfList] = JSArrayOfPdfDataL().of([]);
    this[pdfDoc] = null;
    this[tileParams] = null;
    this[tileHelp] = JSArrayOfFormConfigL().of([]);
    this[progressText] = null;
    this[progressMax] = 100;
    this[progressValue] = 0;
    this[sendIcon] = "send";
    this[pdfUrl] = "";
    this[currentGluc] = null;
    this[currentGlucDiff] = null;
    this[currentGlucTime] = null;
    this[glucDir] = 360;
    this[glucTimer] = null;
    this[glucRunning] = false;
    this[currentGlucCounter] = 0;
    this[appTitle] = "";
    this[currentGlucVisible] = true;
    this[indy] = true;
    this[videos] = new (IdentityMapOfStringL$StringL()).from(["video01", "eYq9lJRAWao"]);
    this[_drag] = null;
    this[_drop] = null;
    this[msgModelName] = intl.Intl.message("Max Mustermann", {desc: "modelname used in images on tiles"});
    this[reportData] = null;
    this[themeStyle] = "width:0em;";
    this[logoStyle] = "";
    this[themePanelShown] = false;
    this[menuIdx] = 0;
    this[thumbLangIdx] = -1;
    this[thumbLangSave] = null;
    this[allParams] = false;
    this.g.sanitizer = sanitizer;
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  dart.addTypeCaches(app_component.AppComponent);
  app_component.AppComponent[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(app_component.AppComponent, () => ({
    __proto__: dart.getMethods(app_component.AppComponent.__proto__),
    sendClass: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int), dart.legacy(core.String)]),
    pdfFilename: dart.fnType(dart.legacy(core.String), [dart.dynamic]),
    msgLoadingData: dart.fnType(dart.legacy(core.String), [dart.dynamic, dart.dynamic]),
    msgLoadingDataFor: dart.fnType(dart.legacy(core.String), [dart.dynamic]),
    msgTooMuchProfilesPrefix: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)]),
    msgTooMuchProfiles: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.String)]),
    isFormVisible: dart.fnType(dart.legacy(core.bool), [dart.legacy(base_print.BasePrint)]),
    getCurrentGluc: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), []),
    getDrawerClass: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)]),
    setTheme: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)]),
    ngOnInit: dart.fnType(dart.legacy(async.Future$(core.Null)), []),
    extractAllParams: dart.fnType(dart.void, []),
    toggleHelp: dart.fnType(dart.void, []),
    togglePage: dart.fnType(dart.void, [dart.legacy(core.String)]),
    displayLink: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.String)], {btnClass: dart.legacy(core.String), clear: dart.legacy(core.bool), icon: dart.legacy(core.String), type: dart.legacy(core.String)}, {}),
    showDebug: dart.fnType(dart.void, []),
    display: dart.fnType(dart.void, [dart.legacy(core.String)], {append: dart.legacy(core.bool), links: dart.legacy(core.List)}, {}),
    callNightscout: dart.fnType(dart.void, []),
    callNightscoutReports: dart.fnType(dart.void, []),
    callNightscoutStatus: dart.fnType(dart.void, []),
    formId: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)]),
    pdfString: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    languageClass: dart.fnType(dart.legacy(core.String), [dart.dynamic]),
    navigate: dart.fnType(dart.void, [dart.legacy(core.String)]),
    openPDF: dart.fnType(dart.void, [dart.legacy(core.int)]),
    tileHelpButtonClicked: dart.fnType(dart.void, [dart.legacy(html.UIEvent)]),
    callbackButton: dart.fnType(dart.void, [dart.legacy(html.UIEvent)]),
    settingsResult: dart.fnType(dart.void, [dart.legacy(html.UIEvent)]),
    printparamsResult: dart.fnType(dart.void, [dart.legacy(html.UIEvent)]),
    checkSetup: dart.fnType(dart.void, []),
    changePeriod: dart.fnType(dart.void, [dart.legacy(datepicker_component.DatepickerPeriod)]),
    checkPrint: dart.fnType(dart.void, []),
    dropElement: dart.fnType(dart.legacy(core.bool), [dart.legacy(html.Element), dart.legacy(html.Element)]),
    checkCfg: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    clickMenuButton: dart.fnType(dart.void, [dart.legacy(core.String)]),
    clickTileHelp: dart.fnType(dart.void, [dart.dynamic, dart.dynamic]),
    clickTileMenu: dart.fnType(dart.void, [dart.dynamic, dart.dynamic]),
    clickTileParamSingleClose: dart.fnType(dart.void, [dart.dynamic]),
    clickTileParamClose: dart.fnType(dart.void, [dart.dynamic]),
    clickTileParamListToggle: dart.fnType(dart.void, [dart.dynamic]),
    clickPdfButton: dart.fnType(dart.void, []),
    clickDebugTrigger: dart.fnType(dart.void, []),
    clickLocalTitle: dart.fnType(dart.void, []),
    loadData: dart.fnType(dart.legacy(async.Future$(dart.legacy(json_data.ReportData))), [dart.legacy(core.bool)]),
    filterTreatment: dart.fnType(dart.legacy(core.bool), [dart.legacy(json_data.TreatmentData)]),
    cancelProgress: dart.fnType(dart.void, []),
    sendClick: dart.fnType(dart.void, []),
    shiftClick: dart.fnType(dart.void, [dart.legacy(globals.PeriodShift)]),
    [_sendClick]: dart.fnType(dart.void, []),
    classForView: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    userClass: dart.fnType(dart.legacy(core.String), [dart.legacy(globals.UserData)]),
    checkedIndex: dart.fnType(dart.legacy(core.int), [dart.dynamic]),
    showTileParams: dart.fnType(dart.void, [dart.dynamic, dart.dynamic]),
    changeView: dart.fnType(dart.void, []),
    createPDF: dart.fnType(dart.void, [], {isForThumbs: dart.legacy(core.bool)}, {}),
    tileClass: dart.fnType(dart.legacy(core.String), [dart.legacy(base_print.FormConfig)]),
    expansionClass: dart.fnType(dart.legacy(core.String), [dart.legacy(base_print.FormConfig)]),
    expansionPanelOpen: dart.fnType(dart.void, [dart.dynamic, dart.legacy(base_print.FormConfig)]),
    expansionPanelClose: dart.fnType(dart.void, [dart.dynamic, dart.legacy(base_print.FormConfig)]),
    toggleThemePanel: dart.fnType(dart.void, [dart.legacy(core.String)]),
    shortcutClass: dart.fnType(dart.legacy(core.String), [dart.legacy(globals.ShortcutData)]),
    editShortcut: dart.fnType(dart.void, [dart.legacy(core.int)]),
    activateUser: dart.fnType(dart.void, [dart.legacy(core.int)]),
    activateShortcut: dart.fnType(dart.void, [], [dart.legacy(core.int)]),
    shortcuteditResult: dart.fnType(dart.void, [dart.legacy(html.UIEvent)]),
    expansionPanelClicked: dart.fnType(dart.void, [dart.dynamic, dart.legacy(base_print.FormConfig)]),
    signinEvent: dart.fnType(dart.void, [dart.legacy(signin_component.SigninEvent)]),
    createThumbs: dart.fnType(dart.void, []),
    checkAllParams: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(app_component.AppComponent, () => ({
    __proto__: dart.getGetters(app_component.AppComponent.__proto__),
    timezone: dart.legacy(core.String),
    [_currPage]: dart.legacy(core.String),
    currPage: dart.legacy(core.String),
    pdfSliderMax: dart.legacy(core.int),
    createIcon: dart.legacy(core.String),
    msgCheckSetup: dart.legacy(core.String),
    msgLoadingDataError: dart.legacy(core.String),
    msgClose: dart.legacy(core.String),
    msgEmptyRange: dart.legacy(core.String),
    msgPreparingData: dart.legacy(core.String),
    msgCreatingPDF: dart.legacy(core.String),
    msgPreparingPDF: dart.legacy(core.String),
    msgImpressum: dart.legacy(core.String),
    msgDSGVO: dart.legacy(core.String),
    msgApply: dart.legacy(core.String),
    msgCancel: dart.legacy(core.String),
    msgPDFCreated: dart.legacy(core.String),
    msgPeriod: dart.legacy(core.String),
    msgProfileError: dart.legacy(core.String),
    msgPDFCreationError: dart.legacy(core.String),
    msgGitHubIssue: dart.legacy(core.String),
    msgShowPDF: dart.legacy(core.String),
    msgPeriodCompare: dart.legacy(core.String),
    msgShortcutName: dart.legacy(core.String),
    msgAddText: dart.legacy(core.String),
    currentGlucDir: dart.legacy(core.String),
    drawerClass: dart.legacy(core.String)
  }));
  dart.setSetterSignature(app_component.AppComponent, () => ({
    __proto__: dart.getSetters(app_component.AppComponent.__proto__),
    [_currPage]: dart.dynamic,
    currPage: dart.legacy(core.String)
  }));
  dart.setLibraryUri(app_component.AppComponent, L0);
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    paramboolValue: dart.fieldType(dart.legacy(core.bool)),
    g: dart.fieldType(dart.legacy(globals.Globals)),
    drawerVisible: dart.fieldType(dart.legacy(core.bool)),
    pdfInfoVisible: dart.fieldType(dart.legacy(core.bool)),
    [__currPage]: dart.fieldType(dart.legacy(core.String)),
    [_lastPage]: dart.fieldType(dart.legacy(core.String)),
    today: dart.fieldType(dart.legacy(date.Date)),
    appTheme: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.bool)))),
    dateRanges: dart.fieldType(dart.legacy(core.List$(dart.legacy(preset.DatepickerPreset)))),
    drConfig: dart.fieldType(dart.legacy(model.DateRangePickerConfiguration)),
    sendDisabled: dart.fieldType(dart.legacy(core.bool)),
    pdfData: dart.fieldType(dart.legacy(core.String)),
    pdfList: dart.fieldType(dart.legacy(core.List$(dart.legacy(app_component.PdfData)))),
    pdfDoc: dart.fieldType(dart.legacy(core.String)),
    tileParams: dart.fieldType(dart.legacy(base_print.FormConfig)),
    tileHelp: dart.fieldType(dart.legacy(core.List$(dart.legacy(base_print.FormConfig)))),
    progressText: dart.fieldType(dart.legacy(core.String)),
    progressMax: dart.fieldType(dart.legacy(core.int)),
    progressValue: dart.fieldType(dart.legacy(core.int)),
    sendIcon: dart.fieldType(dart.legacy(core.String)),
    pdfUrl: dart.fieldType(dart.legacy(core.String)),
    currentGluc: dart.fieldType(dart.legacy(core.String)),
    currentGlucDiff: dart.fieldType(dart.legacy(core.String)),
    currentGlucTime: dart.fieldType(dart.legacy(core.String)),
    glucDir: dart.fieldType(dart.legacy(core.int)),
    glucTimer: dart.fieldType(dart.legacy(async.Timer)),
    glucRunning: dart.fieldType(dart.legacy(core.bool)),
    currentGlucCounter: dart.fieldType(dart.legacy(core.int)),
    appTitle: dart.fieldType(dart.legacy(core.String)),
    currentGlucVisible: dart.fieldType(dart.legacy(core.bool)),
    indy: dart.fieldType(dart.legacy(core.bool)),
    videos: dart.fieldType(dart.dynamic),
    [_drag]: dart.fieldType(dart.legacy(dnd.Draggable)),
    [_drop]: dart.fieldType(dart.legacy(dnd.Dropzone)),
    msgModelName: dart.fieldType(dart.legacy(core.String)),
    reportData: dart.fieldType(dart.legacy(json_data.ReportData)),
    themeStyle: dart.fieldType(dart.legacy(core.String)),
    logoStyle: dart.fieldType(dart.legacy(core.String)),
    themePanelShown: dart.fieldType(dart.legacy(core.bool)),
    menuIdx: dart.fieldType(dart.legacy(core.int)),
    thumbLangIdx: dart.fieldType(dart.legacy(core.int)),
    thumbLangSave: dart.fieldType(dart.legacy(globals.LangData)),
    allParams: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(app_component.AppComponent, {
    /*app_component.AppComponent.startPage*/get startPage() {
      return "normal";
    },
    set startPage(_) {}
  }, true);
  app_component.TileAvatarHandler = class TileAvatarHandler extends dnd.AvatarHandler {
    dragStart(draggable, startPosition) {
      let t9;
      this.avatar = ElementL().as(draggable[$clone](true));
      this.avatar.className = dart.str(this.avatar.className) + " dragtile";
      let pt = new (PointOfintL()).new(draggable[$offsetLeft], draggable[$offsetTop]);
      let parent = draggable.offsetParent;
      while (parent != null) {
        pt = new (PointOfintL()).new(dart.notNull(pt.x) + dart.notNull(parent[$offsetLeft]), dart.notNull(pt.y) + dart.notNull(parent[$offsetTop]));
        parent = parent.offsetParent;
      }
      t9 = this.avatar.style;
      (() => {
        t9[$width] = dart.str(draggable.clientWidth) + "px";
        t9[$height] = dart.str(draggable.clientHeight) + "px";
        t9[$left] = dart.str(pt.x) + "px";
        t9[$top] = dart.str(pt.y) + "px";
        return t9;
      })();
      html.document.body.querySelector("my-app").style[$overflow] = "hidden";
      this.setLeftTop(pt);
      this.avatar.style[$position] = "absolute";
      html.document.body.querySelector("my-app")[$append](this.avatar);
    }
    drag(startPosition, position) {
      this.setTranslate(position['-'](startPosition));
    }
    dragEnd(startPosition, position) {
      this.avatar[$remove]();
    }
  };
  (app_component.TileAvatarHandler.new = function() {
    app_component.TileAvatarHandler.__proto__.new.call(this);
    ;
  }).prototype = app_component.TileAvatarHandler.prototype;
  dart.addTypeTests(app_component.TileAvatarHandler);
  dart.addTypeCaches(app_component.TileAvatarHandler);
  dart.setMethodSignature(app_component.TileAvatarHandler, () => ({
    __proto__: dart.getMethods(app_component.TileAvatarHandler.__proto__),
    dragStart: dart.fnType(dart.void, [dart.legacy(html.Element), dart.legacy(math.Point$(core.num))]),
    drag: dart.fnType(dart.void, [dart.legacy(math.Point$(core.num)), dart.legacy(math.Point$(core.num))]),
    dragEnd: dart.fnType(dart.void, [dart.legacy(math.Point$(core.num)), dart.legacy(math.Point$(core.num))])
  }));
  dart.setLibraryUri(app_component.TileAvatarHandler, L0);
  dart.trackLibraries("packages/nightscout_reporter/app_component", {
    "package:nightscout_reporter/app_component.dart": app_component
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":"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","file":"app_component.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
}));

//# sourceMappingURL=app_component.ddc.js.map
