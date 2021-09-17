define(['dart_sdk', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_button/material_button', 'packages/intl/intl', 'packages/angular/src/core/change_detection/change_detection'], (function load__packages__angular_components__material_yes_no_buttons__material_yes_no_buttons(dart_sdk, packages__angular_components__interfaces__has_disabled, packages__angular_components__material_button__material_button, packages__intl__intl, packages__angular__src__core__change_detection__change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const material_button = packages__angular_components__material_button__material_button.material_button__material_button;
  const intl = packages__intl__intl.intl;
  const lifecycle_hooks = packages__angular__src__core__change_detection__change_detection.src__core__metadata__lifecycle_hooks;
  var material_yes_no_buttons = Object.create(dart.library);
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var StreamControllerOfUIEventL = () => (StreamControllerOfUIEventL = dart.constFn(async.StreamController$(UIEventL())))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.dart";
  var _yes = dart.privateName(material_yes_no_buttons, "_yes");
  var _no = dart.privateName(material_yes_no_buttons, "_no");
  var yesText = dart.privateName(material_yes_no_buttons, "MaterialYesNoButtonsComponent.yesText");
  var noText = dart.privateName(material_yes_no_buttons, "MaterialYesNoButtonsComponent.noText");
  var yesHighlighted = dart.privateName(material_yes_no_buttons, "MaterialYesNoButtonsComponent.yesHighlighted");
  var raised = dart.privateName(material_yes_no_buttons, "MaterialYesNoButtonsComponent.raised");
  var yesRaised = dart.privateName(material_yes_no_buttons, "MaterialYesNoButtonsComponent.yesRaised");
  var disabled = dart.privateName(material_yes_no_buttons, "MaterialYesNoButtonsComponent.disabled");
  var yesDisabled = dart.privateName(material_yes_no_buttons, "MaterialYesNoButtonsComponent.yesDisabled");
  var yesDisplayed = dart.privateName(material_yes_no_buttons, "MaterialYesNoButtonsComponent.yesDisplayed");
  var noDisabled = dart.privateName(material_yes_no_buttons, "MaterialYesNoButtonsComponent.noDisabled");
  var noDisplayed = dart.privateName(material_yes_no_buttons, "MaterialYesNoButtonsComponent.noDisplayed");
  var pending = dart.privateName(material_yes_no_buttons, "MaterialYesNoButtonsComponent.pending");
  var yesAriaLabel = dart.privateName(material_yes_no_buttons, "MaterialYesNoButtonsComponent.yesAriaLabel");
  var noAriaLabel = dart.privateName(material_yes_no_buttons, "MaterialYesNoButtonsComponent.noAriaLabel");
  var yesAutoFocus = dart.privateName(material_yes_no_buttons, "MaterialYesNoButtonsComponent.yesAutoFocus");
  var noAutoFocus = dart.privateName(material_yes_no_buttons, "MaterialYesNoButtonsComponent.noAutoFocus");
  var yesButton = dart.privateName(material_yes_no_buttons, "MaterialYesNoButtonsComponent.yesButton");
  var noButton = dart.privateName(material_yes_no_buttons, "MaterialYesNoButtonsComponent.noButton");
  material_yes_no_buttons.MaterialYesNoButtonsComponent = class MaterialYesNoButtonsComponent extends core.Object {
    get yesText() {
      return this[yesText];
    }
    set yesText(value) {
      this[yesText] = value;
    }
    get noText() {
      return this[noText];
    }
    set noText(value) {
      this[noText] = value;
    }
    get yesHighlighted() {
      return this[yesHighlighted];
    }
    set yesHighlighted(value) {
      this[yesHighlighted] = value;
    }
    get raised() {
      return this[raised];
    }
    set raised(value) {
      this[raised] = value;
    }
    get yesRaised() {
      return this[yesRaised];
    }
    set yesRaised(value) {
      this[yesRaised] = value;
    }
    get disabled() {
      return this[disabled];
    }
    set disabled(value) {
      this[disabled] = value;
    }
    get yesDisabled() {
      return this[yesDisabled];
    }
    set yesDisabled(value) {
      this[yesDisabled] = value;
    }
    get yesDisplayed() {
      return this[yesDisplayed];
    }
    set yesDisplayed(value) {
      this[yesDisplayed] = value;
    }
    get noDisabled() {
      return this[noDisabled];
    }
    set noDisabled(value) {
      this[noDisabled] = value;
    }
    get noDisplayed() {
      return this[noDisplayed];
    }
    set noDisplayed(value) {
      this[noDisplayed] = value;
    }
    get pending() {
      return this[pending];
    }
    set pending(value) {
      this[pending] = value;
    }
    get yesAriaLabel() {
      return this[yesAriaLabel];
    }
    set yesAriaLabel(value) {
      this[yesAriaLabel] = value;
    }
    get noAriaLabel() {
      return this[noAriaLabel];
    }
    set noAriaLabel(value) {
      this[noAriaLabel] = value;
    }
    get yesAutoFocus() {
      return this[yesAutoFocus];
    }
    set yesAutoFocus(value) {
      this[yesAutoFocus] = value;
    }
    get noAutoFocus() {
      return this[noAutoFocus];
    }
    set noAutoFocus(value) {
      this[noAutoFocus] = value;
    }
    get yesButton() {
      return this[yesButton];
    }
    set yesButton(value) {
      this[yesButton] = value;
    }
    get noButton() {
      return this[noButton];
    }
    set noButton(value) {
      this[noButton] = value;
    }
    get yes() {
      return this[_yes].stream;
    }
    get no() {
      return this[_no].stream;
    }
    onYes(event) {
      this[_yes].add(event);
    }
    onNo(event) {
      this[_no].add(event);
    }
  };
  (material_yes_no_buttons.MaterialYesNoButtonsComponent.new = function() {
    this[_yes] = StreamControllerOfUIEventL().broadcast();
    this[_no] = StreamControllerOfUIEventL().broadcast();
    this[yesText] = material_yes_no_buttons.MaterialYesNoButtonsComponent._msgYes;
    this[noText] = material_yes_no_buttons.MaterialYesNoButtonsComponent._msgNo;
    this[yesHighlighted] = false;
    this[raised] = false;
    this[yesRaised] = false;
    this[disabled] = false;
    this[yesDisabled] = false;
    this[yesDisplayed] = true;
    this[noDisabled] = false;
    this[noDisplayed] = true;
    this[pending] = false;
    this[yesAriaLabel] = null;
    this[noAriaLabel] = null;
    this[yesAutoFocus] = false;
    this[noAutoFocus] = false;
    this[yesButton] = null;
    this[noButton] = null;
    ;
  }).prototype = material_yes_no_buttons.MaterialYesNoButtonsComponent.prototype;
  dart.addTypeTests(material_yes_no_buttons.MaterialYesNoButtonsComponent);
  dart.addTypeCaches(material_yes_no_buttons.MaterialYesNoButtonsComponent);
  material_yes_no_buttons.MaterialYesNoButtonsComponent[dart.implements] = () => [has_disabled.HasDisabled];
  dart.setMethodSignature(material_yes_no_buttons.MaterialYesNoButtonsComponent, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons.MaterialYesNoButtonsComponent.__proto__),
    onYes: dart.fnType(dart.void, [dart.legacy(html.UIEvent)]),
    onNo: dart.fnType(dart.void, [dart.legacy(html.UIEvent)])
  }));
  dart.setGetterSignature(material_yes_no_buttons.MaterialYesNoButtonsComponent, () => ({
    __proto__: dart.getGetters(material_yes_no_buttons.MaterialYesNoButtonsComponent.__proto__),
    yes: dart.legacy(async.Stream$(dart.legacy(html.UIEvent))),
    no: dart.legacy(async.Stream$(dart.legacy(html.UIEvent)))
  }));
  dart.setLibraryUri(material_yes_no_buttons.MaterialYesNoButtonsComponent, L0);
  dart.setFieldSignature(material_yes_no_buttons.MaterialYesNoButtonsComponent, () => ({
    __proto__: dart.getFields(material_yes_no_buttons.MaterialYesNoButtonsComponent.__proto__),
    [_yes]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(html.UIEvent)))),
    [_no]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(html.UIEvent)))),
    yesText: dart.fieldType(dart.legacy(core.String)),
    noText: dart.fieldType(dart.legacy(core.String)),
    yesHighlighted: dart.fieldType(dart.legacy(core.bool)),
    raised: dart.fieldType(dart.legacy(core.bool)),
    yesRaised: dart.fieldType(dart.legacy(core.bool)),
    disabled: dart.fieldType(dart.legacy(core.bool)),
    yesDisabled: dart.fieldType(dart.legacy(core.bool)),
    yesDisplayed: dart.fieldType(dart.legacy(core.bool)),
    noDisabled: dart.fieldType(dart.legacy(core.bool)),
    noDisplayed: dart.fieldType(dart.legacy(core.bool)),
    pending: dart.fieldType(dart.legacy(core.bool)),
    yesAriaLabel: dart.fieldType(dart.legacy(core.String)),
    noAriaLabel: dart.fieldType(dart.legacy(core.String)),
    yesAutoFocus: dart.fieldType(dart.legacy(core.bool)),
    noAutoFocus: dart.fieldType(dart.legacy(core.bool)),
    yesButton: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent)),
    noButton: dart.fieldType(dart.legacy(material_button.MaterialButtonComponent))
  }));
  dart.defineLazy(material_yes_no_buttons.MaterialYesNoButtonsComponent, {
    /*material_yes_no_buttons.MaterialYesNoButtonsComponent._msgYes*/get _msgYes() {
      return intl.Intl.message("Yes", {name: "_msgYes", desc: "Text on yes button.", meaning: "Text on yes button."});
    },
    /*material_yes_no_buttons.MaterialYesNoButtonsComponent._msgNo*/get _msgNo() {
      return intl.Intl.message("No", {name: "_msgNo", desc: "Text on no button.", meaning: "Text on no button."});
    }
  }, true);
  material_yes_no_buttons.MaterialSaveCancelButtonsDirective = class MaterialSaveCancelButtonsDirective extends core.Object {};
  (material_yes_no_buttons.MaterialSaveCancelButtonsDirective.new = function(yesNo) {
    yesNo.yesText = material_yes_no_buttons.MaterialSaveCancelButtonsDirective._msgSave;
    yesNo.noText = material_yes_no_buttons.MaterialSaveCancelButtonsDirective._msgCancel;
  }).prototype = material_yes_no_buttons.MaterialSaveCancelButtonsDirective.prototype;
  dart.addTypeTests(material_yes_no_buttons.MaterialSaveCancelButtonsDirective);
  dart.addTypeCaches(material_yes_no_buttons.MaterialSaveCancelButtonsDirective);
  dart.setLibraryUri(material_yes_no_buttons.MaterialSaveCancelButtonsDirective, L0);
  dart.defineLazy(material_yes_no_buttons.MaterialSaveCancelButtonsDirective, {
    /*material_yes_no_buttons.MaterialSaveCancelButtonsDirective._msgSave*/get _msgSave() {
      return intl.Intl.message("Save", {desc: "Text on save button.", meaning: "Text on save button."});
    },
    /*material_yes_no_buttons.MaterialSaveCancelButtonsDirective._msgCancel*/get _msgCancel() {
      return intl.Intl.message("Cancel", {desc: "Text on cancel button.", meaning: "Text on cancel button."});
    }
  }, true);
  material_yes_no_buttons.MaterialSubmitCancelButtonsDirective = class MaterialSubmitCancelButtonsDirective extends material_yes_no_buttons.MaterialSaveCancelButtonsDirective {};
  (material_yes_no_buttons.MaterialSubmitCancelButtonsDirective.new = function(yesNo) {
    material_yes_no_buttons.MaterialSubmitCancelButtonsDirective.__proto__.new.call(this, yesNo);
    yesNo.yesText = material_yes_no_buttons.MaterialSubmitCancelButtonsDirective._msgSubmit;
  }).prototype = material_yes_no_buttons.MaterialSubmitCancelButtonsDirective.prototype;
  dart.addTypeTests(material_yes_no_buttons.MaterialSubmitCancelButtonsDirective);
  dart.addTypeCaches(material_yes_no_buttons.MaterialSubmitCancelButtonsDirective);
  dart.setLibraryUri(material_yes_no_buttons.MaterialSubmitCancelButtonsDirective, L0);
  dart.defineLazy(material_yes_no_buttons.MaterialSubmitCancelButtonsDirective, {
    /*material_yes_no_buttons.MaterialSubmitCancelButtonsDirective._msgSubmit*/get _msgSubmit() {
      return intl.Intl.message("Submit", {desc: "Text on submit button.", meaning: "Text on submit button."});
    }
  }, true);
  var _subscription = dart.privateName(material_yes_no_buttons, "_subscription");
  var _isKeyUpMatching = dart.privateName(material_yes_no_buttons, "_isKeyUpMatching");
  var _onMatchingKeyUp = dart.privateName(material_yes_no_buttons, "_onMatchingKeyUp");
  material_yes_no_buttons.BoundaryAwareKeyUpDirective = class BoundaryAwareKeyUpDirective extends core.Object {
    ngOnDestroy() {
      this[_subscription].cancel();
      this[_subscription] = null;
    }
  };
  (material_yes_no_buttons.BoundaryAwareKeyUpDirective.new = function(element, boundary) {
    let t0, t0$;
    this[_subscription] = null;
    let keyUpStream = (t0$ = (t0 = boundary, t0 == null ? null : t0.keyUpStream), t0$ == null ? html.Element.keyUpEvent.forElement(element) : t0$);
    this[_subscription] = keyUpStream.where(dart.bind(this, _isKeyUpMatching)).listen(dart.bind(this, _onMatchingKeyUp));
  }).prototype = material_yes_no_buttons.BoundaryAwareKeyUpDirective.prototype;
  dart.addTypeTests(material_yes_no_buttons.BoundaryAwareKeyUpDirective);
  dart.addTypeCaches(material_yes_no_buttons.BoundaryAwareKeyUpDirective);
  material_yes_no_buttons.BoundaryAwareKeyUpDirective[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_yes_no_buttons.BoundaryAwareKeyUpDirective, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons.BoundaryAwareKeyUpDirective.__proto__),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(material_yes_no_buttons.BoundaryAwareKeyUpDirective, L0);
  dart.setFieldSignature(material_yes_no_buttons.BoundaryAwareKeyUpDirective, () => ({
    __proto__: dart.getFields(material_yes_no_buttons.BoundaryAwareKeyUpDirective.__proto__),
    [_subscription]: dart.fieldType(dart.legacy(async.StreamSubscription))
  }));
  var keyUpStream = dart.privateName(material_yes_no_buttons, "KeyUpBoundaryDirective.keyUpStream");
  material_yes_no_buttons.KeyUpBoundaryDirective = class KeyUpBoundaryDirective extends core.Object {
    get keyUpStream() {
      return this[keyUpStream];
    }
    set keyUpStream(value) {
      super.keyUpStream = value;
    }
  };
  (material_yes_no_buttons.KeyUpBoundaryDirective.new = function(element) {
    this[keyUpStream] = html.Element.keyUpEvent.forElement(element);
    ;
  }).prototype = material_yes_no_buttons.KeyUpBoundaryDirective.prototype;
  dart.addTypeTests(material_yes_no_buttons.KeyUpBoundaryDirective);
  dart.addTypeCaches(material_yes_no_buttons.KeyUpBoundaryDirective);
  dart.setLibraryUri(material_yes_no_buttons.KeyUpBoundaryDirective, L0);
  dart.setFieldSignature(material_yes_no_buttons.KeyUpBoundaryDirective, () => ({
    __proto__: dart.getFields(material_yes_no_buttons.KeyUpBoundaryDirective.__proto__),
    keyUpStream: dart.finalFieldType(dart.legacy(async.Stream$(dart.legacy(html.KeyboardEvent))))
  }));
  var _yesNo$ = dart.privateName(material_yes_no_buttons, "_yesNo");
  material_yes_no_buttons.EscapeCancelsDirective = class EscapeCancelsDirective extends material_yes_no_buttons.BoundaryAwareKeyUpDirective {
    get noButton() {
      return this[_yesNo$].noButton;
    }
    [_isKeyUpMatching](event) {
      if (event.keyCode !== 27) return false;
      if (this.noButton == null || dart.test(this.noButton.disabled)) return false;
      return true;
    }
    [_onMatchingKeyUp](event) {
      return this[_yesNo$].onNo(event);
    }
  };
  (material_yes_no_buttons.EscapeCancelsDirective.new = function(_yesNo, element, boundary) {
    this[_yesNo$] = _yesNo;
    material_yes_no_buttons.EscapeCancelsDirective.__proto__.new.call(this, element, boundary);
    ;
  }).prototype = material_yes_no_buttons.EscapeCancelsDirective.prototype;
  dart.addTypeTests(material_yes_no_buttons.EscapeCancelsDirective);
  dart.addTypeCaches(material_yes_no_buttons.EscapeCancelsDirective);
  material_yes_no_buttons.EscapeCancelsDirective[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_yes_no_buttons.EscapeCancelsDirective, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons.EscapeCancelsDirective.__proto__),
    [_isKeyUpMatching]: dart.fnType(dart.legacy(core.bool), [dart.legacy(html.KeyboardEvent)]),
    [_onMatchingKeyUp]: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)])
  }));
  dart.setGetterSignature(material_yes_no_buttons.EscapeCancelsDirective, () => ({
    __proto__: dart.getGetters(material_yes_no_buttons.EscapeCancelsDirective.__proto__),
    noButton: dart.legacy(material_button.MaterialButtonComponent)
  }));
  dart.setLibraryUri(material_yes_no_buttons.EscapeCancelsDirective, L0);
  dart.setFieldSignature(material_yes_no_buttons.EscapeCancelsDirective, () => ({
    __proto__: dart.getFields(material_yes_no_buttons.EscapeCancelsDirective.__proto__),
    [_yesNo$]: dart.finalFieldType(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent))
  }));
  var enterAccepts = dart.privateName(material_yes_no_buttons, "EnterAcceptsDirective.enterAccepts");
  material_yes_no_buttons.EnterAcceptsDirective = class EnterAcceptsDirective extends material_yes_no_buttons.BoundaryAwareKeyUpDirective {
    get enterAccepts() {
      return this[enterAccepts];
    }
    set enterAccepts(value) {
      this[enterAccepts] = value;
    }
    get yesButton() {
      return this[_yesNo$].yesButton;
    }
    get noButton() {
      return this[_yesNo$].noButton;
    }
    [_isKeyUpMatching](event) {
      if (!dart.test(this.enterAccepts)) return false;
      if (event.keyCode !== 13) return false;
      if (this.yesButton == null || dart.test(this.yesButton.disabled)) return false;
      if (this.noButton != null && dart.test(this.noButton.focused)) return false;
      return true;
    }
    [_onMatchingKeyUp](event) {
      return this[_yesNo$].onYes(event);
    }
  };
  (material_yes_no_buttons.EnterAcceptsDirective.new = function(_yesNo, element, boundary) {
    this[enterAccepts] = true;
    this[_yesNo$] = _yesNo;
    material_yes_no_buttons.EnterAcceptsDirective.__proto__.new.call(this, element, boundary);
    ;
  }).prototype = material_yes_no_buttons.EnterAcceptsDirective.prototype;
  dart.addTypeTests(material_yes_no_buttons.EnterAcceptsDirective);
  dart.addTypeCaches(material_yes_no_buttons.EnterAcceptsDirective);
  material_yes_no_buttons.EnterAcceptsDirective[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(material_yes_no_buttons.EnterAcceptsDirective, () => ({
    __proto__: dart.getMethods(material_yes_no_buttons.EnterAcceptsDirective.__proto__),
    [_isKeyUpMatching]: dart.fnType(dart.legacy(core.bool), [dart.legacy(html.KeyboardEvent)]),
    [_onMatchingKeyUp]: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)])
  }));
  dart.setGetterSignature(material_yes_no_buttons.EnterAcceptsDirective, () => ({
    __proto__: dart.getGetters(material_yes_no_buttons.EnterAcceptsDirective.__proto__),
    yesButton: dart.legacy(material_button.MaterialButtonComponent),
    noButton: dart.legacy(material_button.MaterialButtonComponent)
  }));
  dart.setLibraryUri(material_yes_no_buttons.EnterAcceptsDirective, L0);
  dart.setFieldSignature(material_yes_no_buttons.EnterAcceptsDirective, () => ({
    __proto__: dart.getFields(material_yes_no_buttons.EnterAcceptsDirective.__proto__),
    [_yesNo$]: dart.finalFieldType(dart.legacy(material_yes_no_buttons.MaterialYesNoButtonsComponent)),
    enterAccepts: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/angular_components/material_yes_no_buttons/material_yes_no_buttons", {
    "package:angular_components/material_yes_no_buttons/material_yes_no_buttons.dart": material_yes_no_buttons
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_yes_no_buttons.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyDS;;;;;;IAMA;;;;;;IAMF;;;;;;IAMA;;;;;;IAMA;;;;;;IAMA;;;;;;IAMA;;;;;;IAMA;;;;;;IAMA;;;;;;IAMA;;;;;;IAUA;;;;;;IAOE;;;;;;IAOA;;;;;;IAMF;;;;;;IAMA;;;;;;IAGmB;;;;;;IAGA;;;;;;;AA9GG,YAAA,AAAK;IAAM;;AAOZ,YAAA,AAAI;IAAM;UAyGjB;AACF,MAAf,AAAK,eAAI,KAAK;IAChB;SAEkB;AACF,MAAd,AAAI,cAAI,KAAK;IACf;;;IArHM,aAAO;IAOP,YAAM;IAML,gBAAU;IAMV,eAAS;IAMX,uBAAiB;IAMjB,eAAS;IAMT,kBAAY;IAMZ,iBAAW;IAMX,oBAAc;IAMd,qBAAe;IAMf,mBAAa;IAMb,oBAAc;IAUd,gBAAU;IAOR;IAOA;IAMF,qBAAe;IAMf,oBAAc;IAGK;IAGA;;EAmB1B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MATe,6DAAO;YAAQ,mBAAQ,cAC1B,iBACA,gCACG;;MAEA,4DAAM;YAAQ,mBAAQ,aACzB,gBACA,+BACG;;;;6EASoD;AACvC,IAAxB,AAAM,KAAD,WAAW;AACS,IAAzB,AAAM,KAAD,UAAU;EACjB;;;;;MAEa,mEAAQ;YAAQ,mBAAQ,eAC3B,iCAAiC;;MAE9B,qEAAU;YAAQ,mBAAQ,iBAC7B,mCAAmC;;;;+EAWsB;AAC7D,0FAAM,KAAK;AACW,IAA1B,AAAM,KAAD,WAAW;EAClB;;;;;MAEa,uEAAU;YAAQ,mBAAQ,iBAC7B,mCAAmC;;;;;;;;AAoBrB,MAAtB,AAAc;AACM,MAApB,sBAAgB;IAClB;;sEAXY,SAA4C;;IAHrC;AAIW,uBACF,YAAtB,QAAQ,eAAR,OAAU,wBAAV,OAAiC,AAAW,mCAAW,OAAO;AAEF,IADhE,sBACI,AAAY,AAAwB,WAAzB,iBAAO,0CAAyB;EACjD;;;;;;;;;;;;;;;IAyB4B;;;;;;;iEAEG;IACb,oBAAU,AAAW,mCAAW,OAAO;;EAAC;;;;;;;;;;;AAclB,YAAA,AAAO;IAAQ;uBAOnB;AAClC,UAAI,AAAM,KAAD,iBAAyB,MAAO;AAEzC,UAAI,AAAS,iBAAG,kBAAQ,AAAS,yBAAU,MAAO;AAElD,YAAO;IACT;uBAGoC;AAAU,YAAA,AAAO,oBAAK,KAAK;IAAC;;iEAbvD,QAAgB,SAA4C;IAA5D;AACH,4EAAM,OAAO,EAAE,QAAQ;;EAAC;;;;;;;;;;;;;;;;;;;;IAmCzB;;;;;;;AAToC,YAAA,AAAO;IAAS;;AACjB,YAAA,AAAO;IAAQ;uBAWnB;AAClC,qBAAK,oBAAc,MAAO;AAC1B,UAAI,AAAM,KAAD,iBAA2B,MAAO;AAE3C,UAAI,AAAU,kBAAG,kBAAQ,AAAU,0BAAU,MAAO;AAGpD,UAAI,iBAAY,kBAAQ,AAAS,wBAAS,MAAO;AAEjD,YAAO;IACT;uBAGoC;AAAU,YAAA,AAAO,qBAAM,KAAK;IAAC;;gEArBxD,QAAgB,SAA4C;IAKhE,qBAAe;IALX;AACH,2EAAM,OAAO,EAAE,QAAQ;;EAAC","file":"material_yes_no_buttons.ddc.js"}');
  // Exports:
  return {
    material_yes_no_buttons__material_yes_no_buttons: material_yes_no_buttons
  };
}));

//# sourceMappingURL=material_yes_no_buttons.ddc.js.map
