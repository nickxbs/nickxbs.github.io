define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/mixins/focusable_mixin', 'packages/angular_components/model/a11y/keyboard_handler_mixin', 'packages/angular_components/material_menu/menu_popup_wrapper', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_select/dropdown_button', 'packages/angular_components/material_menu/material_menu'], (function load__packages__angular_components__material_menu__dropdown_menu(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__mixins__focusable_mixin, packages__angular_components__model__a11y__keyboard_handler_mixin, packages__angular_components__material_menu__menu_popup_wrapper, packages__angular__src__core__change_detection__change_detection, packages__angular_components__interfaces__has_disabled, packages__angular_components__focus__focus_interface, packages__angular_components__material_select__dropdown_button, packages__angular_components__material_menu__material_menu) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const focusable_mixin = packages__angular_components__mixins__focusable_mixin.mixins__focusable_mixin;
  const keyboard_handler_mixin = packages__angular_components__model__a11y__keyboard_handler_mixin.model__a11y__keyboard_handler_mixin;
  const menu_popup_wrapper = packages__angular_components__material_menu__menu_popup_wrapper.material_menu__menu_popup_wrapper;
  const lifecycle_hooks = packages__angular__src__core__change_detection__change_detection.src__core__metadata__lifecycle_hooks;
  const has_disabled = packages__angular_components__interfaces__has_disabled.interfaces__has_disabled;
  const focus_interface = packages__angular_components__focus__focus_interface.focus__focus_interface;
  const dropdown_button = packages__angular_components__material_select__dropdown_button.material_select__dropdown_button;
  const menu_popup = packages__angular_components__material_menu__material_menu.material_menu__menu_popup;
  var dropdown_menu = Object.create(dart.library);
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var boolLToNullN = () => (boolLToNullN = dart.constFn(dart.fnType(core.Null, [boolL()])))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_menu/dropdown_menu.dart";
  var _disposer = dart.privateName(dropdown_menu, "_disposer");
  var _disabled = dart.privateName(dropdown_menu, "_disabled");
  var _dropdownStyle = dart.privateName(dropdown_menu, "_dropdownStyle");
  var _focusTarget = dart.privateName(dropdown_menu, "_focusTarget");
  var buttonText = dart.privateName(dropdown_menu, "DropdownMenuComponent.buttonText");
  var buttonAriaDescribedBy = dart.privateName(dropdown_menu, "DropdownMenuComponent.buttonAriaDescribedBy");
  var tabbable = dart.privateName(dropdown_menu, "DropdownMenuComponent.tabbable");
  var dropdownButton = dart.privateName(dropdown_menu, "DropdownMenuComponent.dropdownButton");
  var menuPopup = dart.privateName(dropdown_menu, "DropdownMenuComponent.menuPopup");
  const Object_FocusableMixin$36 = class Object_FocusableMixin extends core.Object {};
  (Object_FocusableMixin$36.new = function() {
    focusable_mixin.FocusableMixin.new.call(this);
  }).prototype = Object_FocusableMixin$36.prototype;
  dart.applyMixin(Object_FocusableMixin$36, focusable_mixin.FocusableMixin);
  const Object_KeyboardHandlerMixin$36 = class Object_KeyboardHandlerMixin extends Object_FocusableMixin$36 {};
  (Object_KeyboardHandlerMixin$36.new = function() {
    keyboard_handler_mixin.KeyboardHandlerMixin.new.call(this);
    Object_KeyboardHandlerMixin$36.__proto__.new.call(this);
  }).prototype = Object_KeyboardHandlerMixin$36.prototype;
  dart.applyMixin(Object_KeyboardHandlerMixin$36, keyboard_handler_mixin.KeyboardHandlerMixin);
  const Object_MenuPopupWrapper$36 = class Object_MenuPopupWrapper extends Object_KeyboardHandlerMixin$36 {};
  (Object_MenuPopupWrapper$36.new = function() {
    menu_popup_wrapper.MenuPopupWrapper.new.call(this);
    Object_MenuPopupWrapper$36.__proto__.new.call(this);
  }).prototype = Object_MenuPopupWrapper$36.prototype;
  dart.applyMixin(Object_MenuPopupWrapper$36, menu_popup_wrapper.MenuPopupWrapper);
  const Object_MenuPopupTrigger$36 = class Object_MenuPopupTrigger extends Object_MenuPopupWrapper$36 {};
  (Object_MenuPopupTrigger$36.new = function() {
    menu_popup_wrapper.MenuPopupTrigger.new.call(this);
    Object_MenuPopupTrigger$36.__proto__.new.call(this);
  }).prototype = Object_MenuPopupTrigger$36.prototype;
  dart.applyMixin(Object_MenuPopupTrigger$36, menu_popup_wrapper.MenuPopupTrigger);
  dropdown_menu.DropdownMenuComponent = class DropdownMenuComponent extends Object_MenuPopupTrigger$36 {
    get buttonText() {
      return this[buttonText];
    }
    set buttonText(value) {
      this[buttonText] = value;
    }
    get buttonAriaDescribedBy() {
      return this[buttonAriaDescribedBy];
    }
    set buttonAriaDescribedBy(value) {
      this[buttonAriaDescribedBy] = value;
    }
    get tabbable() {
      return this[tabbable];
    }
    set tabbable(value) {
      this[tabbable] = value;
    }
    get dropdownButton() {
      return this[dropdownButton];
    }
    set dropdownButton(value) {
      this[dropdownButton] = value;
    }
    get menuPopup() {
      return this[menuPopup];
    }
    set menuPopup(value) {
      this[menuPopup] = value;
    }
    ngOnDestroy() {
      this[_disposer].dispose();
    }
    ngAfterViewInit() {
      this.focusable = this[_focusTarget];
    }
    get disabled() {
      return this[_disabled];
    }
    set disabled(d) {
      this[_disabled] = d;
      this.focusable = this[_focusTarget];
    }
    get dropdownStyle() {
      return this[_dropdownStyle];
    }
    get [_focusTarget]() {
      return dart.test(this.disabled) ? null : dart.test(this.isExpanded) ? this.menuPopup : this.dropdownButton;
    }
  };
  (dropdown_menu.DropdownMenuComponent.new = function(_changeDetector) {
    this[_disposer] = new disposer.Disposer.oneShot();
    this[buttonText] = null;
    this[_disabled] = false;
    this[buttonAriaDescribedBy] = null;
    this[tabbable] = true;
    this[_dropdownStyle] = false;
    this[dropdownButton] = null;
    this[menuPopup] = null;
    dropdown_menu.DropdownMenuComponent.__proto__.new.call(this);
    this[_disposer].addStreamSubscription(boolL(), this.isExpandedChange.listen(dart.fn(_ => {
      this.focusable = this[_focusTarget];
      _changeDetector.markForCheck();
    }, boolLToNullN())));
  }).prototype = dropdown_menu.DropdownMenuComponent.prototype;
  dart.addTypeTests(dropdown_menu.DropdownMenuComponent);
  dart.addTypeCaches(dropdown_menu.DropdownMenuComponent);
  dropdown_menu.DropdownMenuComponent[dart.implements] = () => [lifecycle_hooks.AfterViewInit, has_disabled.HasDisabled, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(dropdown_menu.DropdownMenuComponent, () => ({
    __proto__: dart.getMethods(dropdown_menu.DropdownMenuComponent.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(dropdown_menu.DropdownMenuComponent, () => ({
    __proto__: dart.getGetters(dropdown_menu.DropdownMenuComponent.__proto__),
    disabled: dart.legacy(core.bool),
    dropdownStyle: dart.legacy(core.bool),
    [_focusTarget]: dart.legacy(focus_interface.Focusable)
  }));
  dart.setSetterSignature(dropdown_menu.DropdownMenuComponent, () => ({
    __proto__: dart.getSetters(dropdown_menu.DropdownMenuComponent.__proto__),
    disabled: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(dropdown_menu.DropdownMenuComponent, L0);
  dart.setFieldSignature(dropdown_menu.DropdownMenuComponent, () => ({
    __proto__: dart.getFields(dropdown_menu.DropdownMenuComponent.__proto__),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    buttonText: dart.fieldType(dart.legacy(core.String)),
    [_disabled]: dart.fieldType(dart.legacy(core.bool)),
    buttonAriaDescribedBy: dart.fieldType(dart.legacy(core.String)),
    tabbable: dart.fieldType(dart.legacy(core.bool)),
    [_dropdownStyle]: dart.fieldType(dart.legacy(core.bool)),
    dropdownButton: dart.fieldType(dart.legacy(dropdown_button.DropdownButtonComponent)),
    menuPopup: dart.fieldType(dart.legacy(menu_popup.MenuPopupComponent))
  }));
  dart.trackLibraries("packages/angular_components/material_menu/dropdown_menu", {
    "package:angular_components/material_menu/dropdown_menu.dart": dropdown_menu
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dropdown_menu.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4DS;;;;;;IAcA;;;;;;IAIF;;;;;;IAMmB;;;;;;IAGL;;;;;;;AArCE,MAAnB,AAAU;IACZ;;AAI0B,MAAxB,iBAAY;IACd;;AAQqB;IAAS;iBAGZ;AACH,MAAb,kBAAY,CAAC;AACW,MAAxB,iBAAY;IACd;;AAU0B;IAAc;;AAUpC,wCAAW,iBAAQ,mBAAa,iBAAY;IAAe;;sDAnDvB;IAFlC,kBAAqB;IAuBpB;IAEF,kBAAY;IAYV;IAIF,iBAAW;IAGX,uBAAiB;IAGE;IAGL;AAhDnB;AAMK,IAHH,AAAU,+CAAsB,AAAiB,6BAAO,QAAC;AAC/B,MAAxB,iBAAY;AACkB,MAA9B,AAAgB,eAAD;;EAEnB","file":"dropdown_menu.ddc.js"}');
  // Exports:
  return {
    material_menu__dropdown_menu: dropdown_menu
  };
}));

//# sourceMappingURL=dropdown_menu.ddc.js.map
