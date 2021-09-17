define(['dart_sdk', 'packages/intl/intl', 'packages/timezone/browser', 'packages/nightscout_reporter/messages/messages_all', 'packages/intl/date_symbol_data_local', 'packages/angular/src/bootstrap/modules', 'packages/nightscout_reporter/app_component', 'packages/nightscout_reporter/app_component.template'], (function load__web__main(dart_sdk, packages__intl__intl, packages__timezone__browser, packages__nightscout_reporter__messages__messages_all, packages__intl__date_symbol_data_local, packages__angular__src__bootstrap__modules, packages__nightscout_reporter__app_component, packages__nightscout_reporter__app_component$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl = packages__intl__intl.intl;
  const browser = packages__timezone__browser.browser;
  const messages_all = packages__nightscout_reporter__messages__messages_all.messages__messages_all;
  const date_symbol_data_local = packages__intl__date_symbol_data_local.date_symbol_data_local;
  const run = packages__angular__src__bootstrap__modules.src__bootstrap__run;
  const app_component = packages__nightscout_reporter__app_component.app_component;
  const app_component$46template = packages__nightscout_reporter__app_component$46template.app_component$46template;
  var main = Object.create(dart.library);
  var $location = dartx.location;
  var $contains = dartx.contains;
  var $_get = dartx._get;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var AppComponentL = () => (AppComponentL = dart.constFn(dart.legacy(app_component.AppComponent)))();
  const CT = Object.create(null);
  main.main = function main$() {
    return async.async(dart.void, function* main() {
      let prefix = html.window[$location].href[$contains]("/beta/") ? "@" : "";
      let language = html.window.localStorage[$_get](prefix + "language");
      try {
        let json = convert.json.decode(html.window.localStorage[$_get](prefix + "webData"));
        language = StringL().as(dart.dsend(json, '_get', ["w1"]));
      } catch (e) {
        let ex = dart.getThrown(e);
      }
      if (language == null || language.length !== 5) language = "de_DE";
      intl.Intl.systemLocale = intl.Intl.canonicalizedLocale(language);
      yield browser.initializeTimeZone();
      yield messages_all.initializeMessages(language);
      yield date_symbol_data_local.initializeDateFormatting(language, null);
      run.runApp(AppComponentL(), app_component$46template.AppComponentNgFactory);
    });
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;AAUS;AACH,mBAAc,AAAO,AAAS,AAAK,uCAAS,YAAY,MAAM;AAC9D,qBAAgB,AAAO,AAAY,gCAAI,AAAgB,MAAV,GAAC;AAClD;AACU,mBACI,AAAK,oBAAY,AAAO,AAAY,gCAAI,AAAe,MAAT,GAAC;AACtC,mBAArB,aAAe,WAAJ,IAAI,WAAC;;YACT;;AACT,UAAK,AAAS,QAAD,IAAI,QAAQ,AAAS,QAAD,YAAW,GAAI,AAAkB,WAAP;AACL,MAAjD,yBAAoB,8BAAoB,QAAQ;AAC3B,MAA1B,MAAM;AAC4B,MAAlC,MAAM,gCAAmB,QAAQ;AACa,MAA9C,MAAM,gDAAyB,QAAQ,EAAE;AACT,MAAhC,4BAAU;IACZ","file":"main.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
}));

//# sourceMappingURL=main.ddc.js.map
