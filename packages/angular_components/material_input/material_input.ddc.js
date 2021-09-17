define(['dart_sdk', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/utils/angular/properties/properties', 'packages/quiver/strings', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_input/material_input_multiline', 'packages/angular_forms/src/directives'], (function load__packages__angular_components__material_input__material_input(dart_sdk, packages__angular_components__utils__id_generator__id_generator, packages__angular_components__utils__angular__properties__properties, packages__quiver__strings, packages__angular_components__material_input__base_material_input, packages__angular_components__focus__focus_interface, packages__angular_components__utils__angular__reference__reference, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular_components__material_input__material_input_default_value_accessor, packages__angular_components__material_input__material_input_multiline, packages__angular_forms__src__directives) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const id_generator = packages__angular_components__utils__id_generator__id_generator.utils__id_generator__id_generator;
  const properties = packages__angular_components__utils__angular__properties__properties.utils__angular__properties__properties;
  const strings = packages__quiver__strings.strings;
  const base_material_input = packages__angular_components__material_input__base_material_input.material_input__base_material_input;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const reference = packages__angular_components__utils__angular__reference__reference.utils__angular__reference__reference;
  const lifecycle_hooks = packages__angular__src__core__change_detection__change_detection.src__core__metadata__lifecycle_hooks;
  const change_detector_ref = packages__angular__src__core__change_detection__change_detection.src__core__change_detection__change_detector_ref;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const material_input_default_value_accessor = packages__angular_components__material_input__material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_input_multiline = packages__angular_components__material_input__material_input_multiline.material_input__material_input_multiline;
  const ng_model = packages__angular_forms__src__directives.src__directives__ng_model;
  var material_input = Object.create(dart.library);
  var $contains = dartx.contains;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MaterialInputComponentL = () => (MaterialInputComponentL = dart.constFn(dart.legacy(material_input.MaterialInputComponent)))();
  var MaterialInputDefaultValueAccessorL = () => (MaterialInputDefaultValueAccessorL = dart.constFn(dart.legacy(material_input_default_value_accessor.MaterialInputDefaultValueAccessor)))();
  var MaterialInputBlurValueAccessorL = () => (MaterialInputBlurValueAccessorL = dart.constFn(dart.legacy(material_input_default_value_accessor.MaterialInputBlurValueAccessor)))();
  var MaterialInputChangeValueAccessorL = () => (MaterialInputChangeValueAccessorL = dart.constFn(dart.legacy(material_input_default_value_accessor.MaterialInputChangeValueAccessor)))();
  var MaterialMultilineInputComponentL = () => (MaterialMultilineInputComponentL = dart.constFn(dart.legacy(material_input_multiline.MaterialMultilineInputComponent)))();
  var NgModelL = () => (NgModelL = dart.constFn(dart.legacy(ng_model.NgModel)))();
  var TypeL = () => (TypeL = dart.constFn(dart.legacy(core.Type)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_input/material_input.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList(["number", "tel"], StringL());
    },
    get C2() {
      return C2 = dart.wrapType(MaterialInputComponentL());
    },
    get C3() {
      return C3 = dart.wrapType(MaterialInputDefaultValueAccessorL());
    },
    get C4() {
      return C4 = dart.wrapType(MaterialInputBlurValueAccessorL());
    },
    get C5() {
      return C5 = dart.wrapType(MaterialInputChangeValueAccessorL());
    },
    get C6() {
      return C6 = dart.wrapType(MaterialMultilineInputComponentL());
    },
    get C7() {
      return C7 = dart.wrapType(NgModelL());
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], TypeL());
    }
  }, false);
  var _labelId = dart.privateName(material_input, "_labelId");
  var _leadingText = dart.privateName(material_input, "_leadingText");
  var _trailingText = dart.privateName(material_input, "_trailingText");
  var _rightAlign = dart.privateName(material_input, "_rightAlign");
  var _changeDetector$ = dart.privateName(material_input, "_changeDetector");
  var C0;
  var inputEl = dart.privateName(material_input, "MaterialInputComponent.inputEl");
  var popupSourceEl = dart.privateName(material_input, "MaterialInputComponent.popupSourceEl");
  var type$ = dart.privateName(material_input, "MaterialInputComponent.type");
  var multiple$ = dart.privateName(material_input, "MaterialInputComponent.multiple");
  var inputRole$ = dart.privateName(material_input, "MaterialInputComponent.inputRole");
  var leadingGlyph = dart.privateName(material_input, "MaterialInputComponent.leadingGlyph");
  var trailingGlyph = dart.privateName(material_input, "MaterialInputComponent.trailingGlyph");
  var trailingGlyphAriaLabel = dart.privateName(material_input, "MaterialInputComponent.trailingGlyphAriaLabel");
  var leadingGlyphAriaLabel = dart.privateName(material_input, "MaterialInputComponent.leadingGlyphAriaLabel");
  var inputAriaOwns = dart.privateName(material_input, "MaterialInputComponent.inputAriaOwns");
  var inputAriaActivedescendent = dart.privateName(material_input, "MaterialInputComponent.inputAriaActivedescendent");
  var inputAriaHasPopup = dart.privateName(material_input, "MaterialInputComponent.inputAriaHasPopup");
  var inputAriaExpanded = dart.privateName(material_input, "MaterialInputComponent.inputAriaExpanded");
  var inputAriaAutocomplete = dart.privateName(material_input, "MaterialInputComponent.inputAriaAutocomplete");
  material_input.MaterialInputComponent = class MaterialInputComponent extends base_material_input.BaseMaterialInput {
    get inputEl() {
      return this[inputEl];
    }
    set inputEl(value) {
      this[inputEl] = value;
    }
    get popupSourceEl() {
      return this[popupSourceEl];
    }
    set popupSourceEl(value) {
      this[popupSourceEl] = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      this[type$] = value;
    }
    get multiple() {
      return this[multiple$];
    }
    set multiple(value) {
      this[multiple$] = value;
    }
    get inputRole() {
      return this[inputRole$];
    }
    set inputRole(value) {
      super.inputRole = value;
    }
    get leadingGlyph() {
      return this[leadingGlyph];
    }
    set leadingGlyph(value) {
      this[leadingGlyph] = value;
    }
    get trailingGlyph() {
      return this[trailingGlyph];
    }
    set trailingGlyph(value) {
      this[trailingGlyph] = value;
    }
    get trailingGlyphAriaLabel() {
      return this[trailingGlyphAriaLabel];
    }
    set trailingGlyphAriaLabel(value) {
      this[trailingGlyphAriaLabel] = value;
    }
    get leadingGlyphAriaLabel() {
      return this[leadingGlyphAriaLabel];
    }
    set leadingGlyphAriaLabel(value) {
      this[leadingGlyphAriaLabel] = value;
    }
    get inputAriaOwns() {
      return this[inputAriaOwns];
    }
    set inputAriaOwns(value) {
      this[inputAriaOwns] = value;
    }
    get inputAriaActivedescendent() {
      return this[inputAriaActivedescendent];
    }
    set inputAriaActivedescendent(value) {
      this[inputAriaActivedescendent] = value;
    }
    get inputAriaHasPopup() {
      return this[inputAriaHasPopup];
    }
    set inputAriaHasPopup(value) {
      this[inputAriaHasPopup] = value;
    }
    get inputAriaExpanded() {
      return this[inputAriaExpanded];
    }
    set inputAriaExpanded(value) {
      this[inputAriaExpanded] = value;
    }
    get inputAriaAutocomplete() {
      return this[inputAriaAutocomplete];
    }
    set inputAriaAutocomplete(value) {
      this[inputAriaAutocomplete] = value;
    }
    set focusable(value) {
      super.focusable = value;
    }
    get elementRef() {
      return this.popupSourceEl;
    }
    get inputRef() {
      return this.inputEl;
    }
    get labelId() {
      return this.inputAriaLabel != null ? null : this[_labelId];
    }
    focus() {
      return super.focus();
    }
    get inputTabIndex() {
      return dart.test(this.disabled) ? -1 : 0;
    }
    get hasLeadingText() {
      return strings.isNotEmpty(this.leadingText);
    }
    get leadingText() {
      return this[_leadingText];
    }
    set leadingText(value) {
      this[_leadingText] = value;
      this[_changeDetector$].markForCheck();
    }
    get hasLeadingGlyph() {
      return strings.isNotEmpty(this.leadingGlyph);
    }
    get trailingText() {
      return this[_trailingText];
    }
    get hasTrailingText() {
      return strings.isNotEmpty(this.trailingText);
    }
    set trailingText(value) {
      this[_trailingText] = value;
      this[_changeDetector$].markForCheck();
    }
    get hasTrailingGlyph() {
      return strings.isNotEmpty(this.trailingGlyph);
    }
    get rightAlign() {
      return this[_rightAlign];
    }
    set rightAlign(value) {
      this[_rightAlign] = value;
      this[_changeDetector$].markForCheck();
    }
    get numeric() {
      return this.type === "number";
    }
    get labelVisible() {
      return !(dart.test(this.numeric) && dart.test(this.invalid)) && dart.test(super.labelVisible);
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this.inputEl = null;
      this.popupSourceEl = null;
    }
  };
  (material_input.MaterialInputComponent.new = function(type, multiple, inputRole, cd, _changeDetector, validator) {
    this[inputEl] = null;
    this[popupSourceEl] = null;
    this[type$] = null;
    this[multiple$] = false;
    this[_labelId] = new id_generator.SequentialIdGenerator.fromUUID().nextId();
    this[_leadingText] = null;
    this[leadingGlyph] = null;
    this[_trailingText] = null;
    this[trailingGlyph] = null;
    this[trailingGlyphAriaLabel] = null;
    this[leadingGlyphAriaLabel] = null;
    this[_rightAlign] = false;
    this[inputAriaOwns] = null;
    this[inputAriaActivedescendent] = null;
    this[inputAriaHasPopup] = null;
    this[inputAriaExpanded] = null;
    this[inputAriaAutocomplete] = null;
    this[inputRole$] = inputRole;
    this[_changeDetector$] = _changeDetector;
    material_input.MaterialInputComponent.__proto__.new.call(this, cd, _changeDetector, validator);
    if (type == null) {
      this.type = "text";
    } else if (dart.test((C0 || CT.C0)[$contains](type))) {
      this.type = "text";
    } else {
      this.type = type;
    }
    this.multiple = properties.attributeToBool(multiple);
  }).prototype = material_input.MaterialInputComponent.prototype;
  dart.addTypeTests(material_input.MaterialInputComponent);
  dart.addTypeCaches(material_input.MaterialInputComponent);
  material_input.MaterialInputComponent[dart.implements] = () => [focus_interface.Focusable, reference.ReferenceDirective, lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy];
  dart.setGetterSignature(material_input.MaterialInputComponent, () => ({
    __proto__: dart.getGetters(material_input.MaterialInputComponent.__proto__),
    elementRef: dart.legacy(element_ref.ElementRef),
    labelId: dart.legacy(core.String),
    inputTabIndex: dart.legacy(core.int),
    hasLeadingText: dart.legacy(core.bool),
    leadingText: dart.legacy(core.String),
    hasLeadingGlyph: dart.legacy(core.bool),
    trailingText: dart.legacy(core.String),
    hasTrailingText: dart.legacy(core.bool),
    hasTrailingGlyph: dart.legacy(core.bool),
    rightAlign: dart.legacy(core.bool),
    numeric: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(material_input.MaterialInputComponent, () => ({
    __proto__: dart.getSetters(material_input.MaterialInputComponent.__proto__),
    leadingText: dart.legacy(core.String),
    trailingText: dart.legacy(core.String),
    rightAlign: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(material_input.MaterialInputComponent, L0);
  dart.setFieldSignature(material_input.MaterialInputComponent, () => ({
    __proto__: dart.getFields(material_input.MaterialInputComponent.__proto__),
    [_changeDetector$]: dart.fieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    inputEl: dart.fieldType(dart.legacy(element_ref.ElementRef)),
    popupSourceEl: dart.fieldType(dart.legacy(element_ref.ElementRef)),
    type: dart.fieldType(dart.legacy(core.String)),
    multiple: dart.fieldType(dart.legacy(core.bool)),
    inputRole: dart.finalFieldType(dart.legacy(core.String)),
    [_labelId]: dart.finalFieldType(dart.legacy(core.String)),
    [_leadingText]: dart.fieldType(dart.legacy(core.String)),
    leadingGlyph: dart.fieldType(dart.legacy(core.String)),
    [_trailingText]: dart.fieldType(dart.legacy(core.String)),
    trailingGlyph: dart.fieldType(dart.legacy(core.String)),
    trailingGlyphAriaLabel: dart.fieldType(dart.legacy(core.String)),
    leadingGlyphAriaLabel: dart.fieldType(dart.legacy(core.String)),
    [_rightAlign]: dart.fieldType(dart.legacy(core.bool)),
    inputAriaOwns: dart.fieldType(dart.legacy(core.String)),
    inputAriaActivedescendent: dart.fieldType(dart.legacy(core.String)),
    inputAriaHasPopup: dart.fieldType(dart.legacy(core.String)),
    inputAriaExpanded: dart.fieldType(dart.legacy(core.bool)),
    inputAriaAutocomplete: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(material_input.MaterialInputComponent, {
    /*material_input.MaterialInputComponent.hostClass*/get hostClass() {
      return "themeable";
    },
    /*material_input.MaterialInputComponent.hostTabIndex*/get hostTabIndex() {
      return -1;
    }
  }, true);
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C1;
  dart.defineLazy(material_input, {
    /*material_input.materialInputDirectives*/get materialInputDirectives() {
      return C1 || CT.C1;
    },
    /*material_input.materialInputErrorKey*/get materialInputErrorKey() {
      return "material-input-error";
    }
  }, true);
  dart.trackLibraries("packages/angular_components/material_input/material_input", {
    "package:angular_components/material_input/material_input.dart": material_input
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_input.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkGa;;;;;;IAGA;;;;;;IAmBJ;;;;;;IAKF;;;;;;IAGQ;;;;;;IAiCN;;;;;;IAoBA;;;;;;IAKA;;;;;;IAIA;;;;;;IAmBA;;;;;;IAKA;;;;;;IAQA;;;;;;IAKF;;;;;;IAQE;;;;;;kBA9IiB;AACC,MAAjB,kBAAY,KAAK;IACzB;;AAU6B;IAAa;;AASf;IAAO;;AAiBZ,YAAA,AAAe,wBAAG,OAAO,OAAO;IAAQ;;AAK9C,YAAM;IAAO;;AAMJ,wCAAW,CAAC,IAAI;IAAC;;AAEf,gCAAW;IAAY;;AACxB;IAAY;oBAMf;AACD,MAApB,qBAAe,KAAK;AAGU,MAA9B,AAAgB;IAClB;;AAM4B,gCAAW;IAAa;;AAEzB;IAAa;;AAEZ,gCAAW;IAAa;qBAK5B;AACD,MAArB,sBAAgB,KAAK;AAGS,MAA9B,AAAgB;IAClB;;AAM6B,gCAAW;IAAc;;AAU/B;IAAW;mBAOd;AACC,MAAnB,oBAAc,KAAK;AAGW,MAA9B,AAAgB;IAClB;;AAuDoB,YAAA,AAAK,eAAG;IAAQ;;AAGX,YAAsB,aAApB,2BAAW,4BAAkB;IAAY;;AAI/C,MAAb;AACQ,MAAd,eAAU;AACU,MAApB,qBAAgB;IAClB;;wDA/B8B,MACI,UACN,WACM,IACzB,iBACa;IAjJX;IAGA;IAmBJ;IAKF,kBAAW;IAIV,iBAAe,AAAiC;IAiB/C;IAeA;IAIA;IAgBA;IAKA;IAIA;IAGF,oBAAc;IAgBZ;IAKA;IAQA;IAKF;IAQE;IAKqB;IAEnB;AAEH,mEAAM,EAAE,EAAE,eAAe,EAAE,SAAS;AACxC,QAAI,AAAK,IAAD,IAAI;AACQ,MAAb,YAAO;UACP,eAA4B,yBAAS,IAAI;AAK5B,MAAb,YAAO;;AAEI,MAAX,YAAO,IAAI;;AAEuB,IAApC,gBAAW,2BAAgB,QAAQ;EAC1C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAhLa,+CAAS;;;MAGT,kDAAY;;;;;;;;;;;;MA1DrB,sCAAuB;;;MAUhB,oCAAqB","file":"material_input.ddc.js"}');
  // Exports:
  return {
    material_input__material_input: material_input
  };
}));

//# sourceMappingURL=material_input.ddc.js.map
