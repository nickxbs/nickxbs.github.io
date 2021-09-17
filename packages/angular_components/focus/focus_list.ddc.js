define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/focus/focus', 'packages/angular/src/core/change_detection/change_detection'], (function load__packages__angular_components__focus__focus_list(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__focus__focus, packages__angular__src__core__change_detection__change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const focus = packages__angular_components__focus__focus.focus__focus;
  const lifecycle_hooks = packages__angular__src__core__change_detection__change_detection.src__core__metadata__lifecycle_hooks;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  var focus_list = Object.create(dart.library);
  var $length = dartx.length;
  var $clear = dartx.clear;
  var $add = dartx.add;
  var $forEach = dartx.forEach;
  var $isNotEmpty = dartx.isNotEmpty;
  var $first = dartx.first;
  var $indexOf = dartx.indexOf;
  var $modulo = dartx['%'];
  var $clamp = dartx.clamp;
  var $_get = dartx._get;
  var FocusableItemL = () => (FocusableItemL = dart.constFn(dart.legacy(focus.FocusableItem)))();
  var JSArrayOfFocusableItemL = () => (JSArrayOfFocusableItemL = dart.constFn(_interceptors.JSArray$(FocusableItemL())))();
  var FocusMoveEventL = () => (FocusMoveEventL = dart.constFn(dart.legacy(focus.FocusMoveEvent)))();
  var StreamSubscriptionOfFocusMoveEventL = () => (StreamSubscriptionOfFocusMoveEventL = dart.constFn(async.StreamSubscription$(FocusMoveEventL())))();
  var StreamSubscriptionLOfFocusMoveEventL = () => (StreamSubscriptionLOfFocusMoveEventL = dart.constFn(dart.legacy(StreamSubscriptionOfFocusMoveEventL())))();
  var FocusableItemLToNullN = () => (FocusableItemLToNullN = dart.constFn(dart.fnType(core.Null, [FocusableItemL()])))();
  var voidToNullN = () => (voidToNullN = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/focus/focus_list.dart";
  var _disposer = dart.privateName(focus_list, "_disposer");
  var _children = dart.privateName(focus_list, "_children");
  var _ngZone$ = dart.privateName(focus_list, "_ngZone");
  var _length = dart.privateName(focus_list, "_length");
  var _moveFocus = dart.privateName(focus_list, "_moveFocus");
  var role$ = dart.privateName(focus_list, "FocusListDirective.role");
  var loop = dart.privateName(focus_list, "FocusListDirective.loop");
  var autoFocusIndex = dart.privateName(focus_list, "FocusListDirective.autoFocusIndex");
  focus_list.FocusListDirective = class FocusListDirective extends core.Object {
    get role() {
      return this[role$];
    }
    set role(value) {
      super.role = value;
    }
    get loop() {
      return this[loop];
    }
    set loop(value) {
      this[loop] = value;
    }
    get autoFocusIndex() {
      return this[autoFocusIndex];
    }
    set autoFocusIndex(value) {
      this[autoFocusIndex] = value;
    }
    get [_length]() {
      return this[_children][$length];
    }
    set listItems(listItems) {
      this[_children][$clear]();
      this[_disposer].dispose();
      listItems[$forEach](dart.fn(i => {
        this[_children][$add](i);
        this[_disposer].addDisposable(StreamSubscriptionLOfFocusMoveEventL(), i.focusmove.listen(dart.bind(this, _moveFocus)));
      }, FocusableItemLToNullN()));
      this[_ngZone$].onEventDone.first.then(core.Null, dart.fn(_ => {
        this[_children][$forEach](dart.fn(c => {
          c.tabbable = false;
        }, FocusableItemLToNullN()));
        if (dart.test(this[_children][$isNotEmpty])) {
          if (this.autoFocusIndex != null) {
            this.focus(this.autoFocusIndex);
          } else {
            this[_children][$first].tabbable = true;
          }
        }
      }, voidToNullN()));
    }
    [_moveFocus](event) {
      if (dart.test(event.home)) {
        this.focus(0);
      } else if (dart.test(event.end)) {
        this.focus(dart.notNull(this[_length]) - 1);
      } else {
        let i = this[_children][$indexOf](event.focusItem);
        if (i !== -1) {
          this.focus(dart.notNull(i) + dart.notNull(event.offset));
        }
      }
      event.preventDefault();
    }
    focus(index) {
      if (this[_length] === 0) return;
      let newIndex = null;
      if (dart.test(this.loop)) {
        newIndex = index[$modulo](this[_length]);
      } else {
        newIndex = index[$clamp](0, dart.notNull(this[_length]) - 1);
      }
      this[_children][$_get](core.int.as(newIndex)).focus();
      this[_children][$forEach](dart.fn(i => {
        i.tabbable = false;
      }, FocusableItemLToNullN()));
      this[_children][$_get](core.int.as(newIndex)).tabbable = true;
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
  };
  (focus_list.FocusListDirective.new = function(_ngZone, role) {
    let t0;
    this[_disposer] = new disposer.Disposer.multi();
    this[_children] = JSArrayOfFocusableItemL().of([]);
    this[loop] = false;
    this[autoFocusIndex] = null;
    this[_ngZone$] = _ngZone;
    this[role$] = (t0 = role, t0 == null ? "list" : t0);
    ;
  }).prototype = focus_list.FocusListDirective.prototype;
  dart.addTypeTests(focus_list.FocusListDirective);
  dart.addTypeCaches(focus_list.FocusListDirective);
  focus_list.FocusListDirective[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(focus_list.FocusListDirective, () => ({
    __proto__: dart.getMethods(focus_list.FocusListDirective.__proto__),
    [_moveFocus]: dart.fnType(dart.void, [dart.legacy(focus.FocusMoveEvent)]),
    focus: dart.fnType(dart.void, [dart.legacy(core.int)]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(focus_list.FocusListDirective, () => ({
    __proto__: dart.getGetters(focus_list.FocusListDirective.__proto__),
    [_length]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(focus_list.FocusListDirective, () => ({
    __proto__: dart.getSetters(focus_list.FocusListDirective.__proto__),
    listItems: dart.legacy(core.List$(dart.legacy(focus.FocusableItem)))
  }));
  dart.setLibraryUri(focus_list.FocusListDirective, L0);
  dart.setFieldSignature(focus_list.FocusListDirective, () => ({
    __proto__: dart.getFields(focus_list.FocusListDirective.__proto__),
    [_ngZone$]: dart.finalFieldType(dart.legacy(ng_zone.NgZone)),
    role: dart.finalFieldType(dart.legacy(core.String)),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_children]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(focus.FocusableItem)))),
    loop: dart.fieldType(dart.legacy(core.bool)),
    autoFocusIndex: dart.fieldType(dart.legacy(core.int))
  }));
  dart.trackLibraries("packages/angular_components/focus/focus_list", {
    "package:angular_components/focus/focus_list.dart": focus_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["focus_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8Be;;;;;;IAWR;;;;;;IAMD;;;;;;;AAde,YAAA,AAAU;IAAM;kBAiBD;AACf,MAAjB,AAAU;AACS,MAAnB,AAAU;AAIR,MAHF,AAAU,SAAD,WAAS,QAAC;AACD,QAAhB,AAAU,sBAAI,CAAC;AACwC,QAAvD,AAAU,sEAAc,AAAE,AAAU,CAAX,4BAAkB;;AAe3C,MAXF,AAAQ,AAAY,AAAM,iDAAK,QAAC;AAG5B,QAFF,AAAU,0BAAQ,QAAC;AACC,UAAlB,AAAE,CAAD,YAAY;;AAEf,sBAAI,AAAU;AACZ,cAAI,uBAAkB;AACC,YAArB,WAAM;;AAEyB,YAA/B,AAAU,AAAM,mCAAW;;;;IAInC;iBAE+B;AAC7B,oBAAI,AAAM,KAAD;AACC,QAAR,WAAM;YACD,eAAI,AAAM,KAAD;AACI,QAAlB,WAAc,aAAR,iBAAU;;AAEZ,gBAAI,AAAU,0BAAQ,AAAM,KAAD;AAC/B,YAAI,CAAC,KAAI,CAAC;AACe,UAAvB,WAAQ,aAAF,CAAC,iBAAG,AAAM,KAAD;;;AAGG,MAAtB,AAAM,KAAD;IACP;UAEe;AACb,UAAI,AAAQ,kBAAG,GAAG;AACd;AACJ,oBAAI;AACwB,QAA1B,WAAW,AAAM,KAAD,UAAG;;AAEmB,QAAtC,WAAW,AAAM,KAAD,SAAO,GAAW,aAAR,iBAAU;;AAEX,MAA3B,AAAS,AAAW,mCAAV,QAAQ;AAGhB,MAFF,AAAU,0BAAQ,QAAC;AACC,QAAlB,AAAE,CAAD,YAAY;;AAEoB,MAAnC,AAAS,AAAW,mCAAV,QAAQ,cAAa;IACjC;;AAIqB,MAAnB,AAAU;IACZ;;gDAtEwB,SAAmC;;IAJrD,kBAAqB;IACrB,kBAA2B;IAS5B,aAAO;IAMR;IAZoB;IACR,eAAO,KAAL,IAAI,QAAJ,OAAQ;;EAAM","file":"focus_list.ddc.js"}');
  // Exports:
  return {
    focus__focus_list: focus_list
  };
}));

//# sourceMappingURL=focus_list.ddc.js.map
