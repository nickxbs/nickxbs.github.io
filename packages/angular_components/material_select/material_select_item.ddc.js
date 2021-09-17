define(['dart_sdk', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/utils/angular/properties/properties', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_components/model/ui/has_factory', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/mixins/material_dropdown_base'], (function load__packages__angular_components__material_select__material_select_item(dart_sdk, packages__angular_components__utils__disposer__disposer, packages__angular_components__model__ui__has_renderer, packages__angular_components__utils__angular__properties__properties, packages__angular_components__model__selection__selection_model, packages__angular_components__model__selection__selection_container, packages__angular_components__button_decorator__button_decorator, packages__angular__src__core__change_detection__change_detection, packages__angular_components__model__ui__has_factory, packages__angular__src__bootstrap__modules, packages__angular_components__material_select__activation_handler, packages__angular_components__mixins__material_dropdown_base) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const properties = packages__angular_components__utils__angular__properties__properties.utils__angular__properties__properties;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const selection_container = packages__angular_components__model__selection__selection_container.model__selection__selection_container;
  const button_decorator = packages__angular_components__button_decorator__button_decorator.button_decorator__button_decorator;
  const lifecycle_hooks = packages__angular__src__core__change_detection__change_detection.src__core__metadata__lifecycle_hooks;
  const change_detector_ref = packages__angular__src__core__change_detection__change_detection.src__core__change_detection__change_detector_ref;
  const has_factory = packages__angular_components__model__ui__has_factory.model__ui__has_factory;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const activation_handler = packages__angular_components__material_select__activation_handler.material_select__activation_handler;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  var material_select_item = Object.create(dart.library);
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var FutureLOfvoid = () => (FutureLOfvoid = dart.constFn(dart.legacy(FutureOfvoid())))();
  var VoidToFutureLOfvoid = () => (VoidToFutureLOfvoid = dart.constFn(dart.fnType(FutureLOfvoid(), [])))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  const CT = Object.create(null);
  var L0 = "package:angular_components/material_select/material_select_item.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const(new _js_helper.PrivateSymbol.new('_itemRenderer', _itemRenderer));
    },
    get C1() {
      return C1 = dart.const(new _js_helper.PrivateSymbol.new('_selection', _selection));
    },
    get C2() {
      return C2 = dart.const(new _js_helper.PrivateSymbol.new('_value', _value));
    },
    get C3() {
      return C3 = dart.const(new _js_helper.PrivateSymbol.new('_itemRenderer=', _itemRenderer_));
    },
    get C4() {
      return C4 = dart.const(new _js_helper.PrivateSymbol.new('_selection=', _selection_));
    },
    get C5() {
      return C5 = dart.const(new _js_helper.PrivateSymbol.new('_value=', _value_));
    }
  }, false);
  var _disposer = dart.privateName(material_select_item, "_disposer");
  var _selectionChangeStreamSub = dart.privateName(material_select_item, "_selectionChangeStreamSub");
  var _isHidden = dart.privateName(material_select_item, "_isHidden");
  var _supportsMultiSelect = dart.privateName(material_select_item, "_supportsMultiSelect");
  var _hideCheckbox = dart.privateName(material_select_item, "_hideCheckbox");
  var _useCheckMarks = dart.privateName(material_select_item, "_useCheckMarks");
  var _selectOnActivate = dart.privateName(material_select_item, "_selectOnActivate");
  var _deselectOnActivate = dart.privateName(material_select_item, "_deselectOnActivate");
  var _selected = dart.privateName(material_select_item, "_selected");
  var _closeOnActivate = dart.privateName(material_select_item, "_closeOnActivate");
  var _dropdown$ = dart.privateName(material_select_item, "_dropdown");
  var _activationHandler$ = dart.privateName(material_select_item, "_activationHandler");
  var _cdRef$ = dart.privateName(material_select_item, "_cdRef");
  var _value = dart.privateName(material_select_item, "_value");
  var _itemRenderer = dart.privateName(material_select_item, "_itemRenderer");
  var _selection = dart.privateName(material_select_item, "_selection");
  var _isMarkedSelected = dart.privateName(material_select_item, "_isMarkedSelected");
  var _isSelectedInSelectionModel = dart.privateName(material_select_item, "_isSelectedInSelectionModel");
  var C0;
  var _itemRenderer$ = dart.privateName(selection_container, "_itemRenderer");
  var C1;
  var _selection$ = dart.privateName(selection_container, "_selection");
  var C2;
  var _value$ = dart.privateName(selection_container, "_value");
  var _itemRenderer_ = dart.privateName(material_select_item, "_itemRenderer=");
  var C3;
  var _selection_ = dart.privateName(material_select_item, "_selection=");
  var C4;
  var _value_ = dart.privateName(material_select_item, "_value=");
  var C5;
  const _is_MaterialSelectItemComponent_default = Symbol('_is_MaterialSelectItemComponent_default');
  var element$ = dart.privateName(material_select_item, "MaterialSelectItemComponent.element");
  var _value$0 = dart.privateName(material_select_item, "MaterialSelectItemComponent._value");
  var _itemRenderer$0 = dart.privateName(material_select_item, "MaterialSelectItemComponent._itemRenderer");
  var componentRenderer = dart.privateName(material_select_item, "MaterialSelectItemComponent.componentRenderer");
  var factoryRenderer = dart.privateName(material_select_item, "MaterialSelectItemComponent.factoryRenderer");
  var _selection$0 = dart.privateName(material_select_item, "MaterialSelectItemComponent._selection");
  material_select_item.MaterialSelectItemComponent$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var SelectionModelOfTL = () => (SelectionModelOfTL = dart.constFn(selection_model.SelectionModel$(TL())))();
    var SelectionModelLOfTL = () => (SelectionModelLOfTL = dart.constFn(dart.legacy(SelectionModelOfTL())))();
    var MultiSelectionModelOfTL = () => (MultiSelectionModelOfTL = dart.constFn(selection_model.MultiSelectionModel$(TL())))();
    var MultiSelectionModelLOfTL = () => (MultiSelectionModelLOfTL = dart.constFn(dart.legacy(MultiSelectionModelOfTL())))();
    var SelectionChangeRecordOfTL = () => (SelectionChangeRecordOfTL = dart.constFn(selection_model.SelectionChangeRecord$(TL())))();
    var SelectionChangeRecordLOfTL = () => (SelectionChangeRecordLOfTL = dart.constFn(dart.legacy(SelectionChangeRecordOfTL())))();
    var ListOfSelectionChangeRecordLOfTL = () => (ListOfSelectionChangeRecordLOfTL = dart.constFn(core.List$(SelectionChangeRecordLOfTL())))();
    var ListLOfSelectionChangeRecordLOfTL = () => (ListLOfSelectionChangeRecordLOfTL = dart.constFn(dart.legacy(ListOfSelectionChangeRecordLOfTL())))();
    var ListLOfSelectionChangeRecordLOfTLToNullN = () => (ListLOfSelectionChangeRecordLOfTLToNullN = dart.constFn(dart.fnType(core.Null, [ListLOfSelectionChangeRecordLOfTL()])))();
    var TLToStringL = () => (TLToStringL = dart.constFn(dart.fnType(StringL(), [TL()])))();
    var TLToLStringL = () => (TLToLStringL = dart.constFn(dart.legacy(TLToStringL())))();
    class MaterialSelectItemComponent extends button_decorator.ButtonDirective {
      get element() {
        return this[element$];
      }
      set element(value) {
        super.element = value;
      }
      get [_value]() {
        return this[_value$0];
      }
      set [_value](value) {
        this[_value$0] = value;
      }
      get [_itemRenderer]() {
        return this[_itemRenderer$0];
      }
      set [_itemRenderer](value) {
        this[_itemRenderer$0] = value;
      }
      get componentRenderer() {
        return this[componentRenderer];
      }
      set componentRenderer(value) {
        this[componentRenderer] = value;
      }
      get factoryRenderer() {
        return this[factoryRenderer];
      }
      set factoryRenderer(value) {
        this[factoryRenderer] = value;
      }
      get [_selection]() {
        return this[_selection$0];
      }
      set [_selection](value) {
        this[_selection$0] = value;
      }
      get disabled() {
        return super.disabled;
      }
      set disabled(value) {
        super.disabled = value;
      }
      set isHidden(value) {
        this[_isHidden] = properties.getBool(value);
      }
      get isHidden() {
        return this[_isHidden];
      }
      get value() {
        return this[_value];
      }
      set value(val) {
        TL().as(val);
        this[_value] = val;
      }
      get supportsMultiSelect() {
        return this[_supportsMultiSelect];
      }
      get hideCheckbox() {
        return this[_hideCheckbox];
      }
      set hideCheckbox(value) {
        this[_hideCheckbox] = properties.getBool(value);
      }
      get itemRenderer() {
        return this[_itemRenderer];
      }
      set itemRenderer(value) {
        this[_itemRenderer] = value;
      }
      get useCheckMarks() {
        return this[_useCheckMarks];
      }
      set useCheckMarks(value) {
        this[_useCheckMarks] = properties.getBool(value);
      }
      set selectOnActivate(value) {
        this[_selectOnActivate] = properties.getBool(value);
      }
      set deselectOnActivate(value) {
        this[_deselectOnActivate] = properties.getBool(value);
      }
      get valueHasLabel() {
        return this.valueLabel != null;
      }
      get valueLabel() {
        let t0;
        if (this[_value] == null) {
          return null;
        } else if (this.componentRenderer == null && this.factoryRenderer == null && this.itemRenderer != has_renderer.nullRenderer) {
          t0 = this[_value];
          return this.itemRenderer(t0);
        }
        return null;
      }
      get selection() {
        return this[_selection];
      }
      set selection(sel) {
        let t0;
        SelectionModelLOfTL().as(sel);
        this[_selection] = sel;
        this[_supportsMultiSelect] = MultiSelectionModelLOfTL().is(sel);
        t0 = this[_selectionChangeStreamSub];
        t0 == null ? null : t0.cancel();
        this[_selectionChangeStreamSub] = sel.selectionChanges.listen(dart.fn(_ => {
          this[_cdRef$].markForCheck();
        }, ListLOfSelectionChangeRecordLOfTLToNullN()));
      }
      get selected() {
        return this[_selected];
      }
      set selected(value) {
        this[_selected] = properties.getBool(value);
      }
      get closeOnActivate() {
        return this[_closeOnActivate];
      }
      set closeOnActivate(value) {
        this[_closeOnActivate] = properties.getBool(value);
      }
      get componentType() {
        let t0;
        return this.componentRenderer != null ? (t0 = this.value, this.componentRenderer(t0)) : null;
      }
      get componentFactory() {
        let t0;
        return this.factoryRenderer != null ? (t0 = this.value, this.factoryRenderer(t0)) : null;
      }
      get isAriaChecked() {
        return !dart.test(this.supportsMultiSelect) || dart.test(this.hideCheckbox) ? null : this.isSelected;
      }
      get isSelected() {
        return dart.test(this[_isMarkedSelected]) || dart.test(this[_isSelectedInSelectionModel]);
      }
      get [_isMarkedSelected]() {
        return this.selected != null && dart.test(this.selected);
      }
      get [_isSelectedInSelectionModel]() {
        let t0, t0$;
        return this.value != null && dart.test((t0$ = (t0 = this[_selection], t0 == null ? null : t0.isSelected(this.value)), t0$ == null ? false : t0$));
      }
      handleActivate(e) {
        let t0, t0$;
        let hasCheckbox = dart.test(this.supportsMultiSelect) && !dart.test(this.hideCheckbox);
        if (this[_dropdown$] != null && dart.test(this.closeOnActivate) && !hasCheckbox) {
          this[_dropdown$].close();
          if (KeyboardEventL().is(e)) {
            e.stopPropagation();
          }
        }
        if (dart.test((t0$ = (t0 = this[_activationHandler$], t0 == null ? null : t0.handle(e, this.value)), t0$ == null ? false : t0$))) return;
        if (dart.test(this[_selectOnActivate]) && this[_selection] != null && this.value != null) {
          if (!dart.test(this[_selection].isSelected(this.value))) {
            this[_selection].select(this.value);
          } else if (dart.test(this[_deselectOnActivate])) {
            this[_selection].deselect(this.value);
          }
        }
      }
      onLoadCustomComponent(ref) {
      }
      ngOnDestroy() {
        this[_disposer].dispose();
      }
      get [_itemRenderer$]() {
        return TLToLStringL().as(this.noSuchMethod(new core._Invocation.getter(C0 || CT.C0)));
      }
      get [_selection$]() {
        return SelectionModelLOfTL().as(this.noSuchMethod(new core._Invocation.getter(C1 || CT.C1)));
      }
      get [_value$]() {
        return TL().as(this.noSuchMethod(new core._Invocation.getter(C2 || CT.C2)));
      }
      set [_itemRenderer$](value) {
        return this.noSuchMethod(new core._Invocation.setter(C3 || CT.C3, value));
      }
      set [_selection$](value) {
        return this.noSuchMethod(new core._Invocation.setter(C4 || CT.C4, value));
      }
      set [_value$](value) {
        return this.noSuchMethod(new core._Invocation.setter(C5 || CT.C5, value));
      }
    }
    (MaterialSelectItemComponent.new = function(element, _dropdown, _activationHandler, _cdRef, role, opts) {
      let t0, t0$;
      let addTabIndexWhenNonTabbable = opts && 'addTabIndexWhenNonTabbable' in opts ? opts.addTabIndexWhenNonTabbable : false;
      this[_disposer] = new disposer.Disposer.oneShot();
      this[_selectionChangeStreamSub] = null;
      this[_isHidden] = false;
      this[_value$0] = null;
      this[_supportsMultiSelect] = false;
      this[_hideCheckbox] = false;
      this[_itemRenderer$0] = has_renderer.nullRenderer;
      this[componentRenderer] = null;
      this[factoryRenderer] = null;
      this[_useCheckMarks] = false;
      this[_selectOnActivate] = true;
      this[_deselectOnActivate] = true;
      this[_selection$0] = null;
      this[_selected] = false;
      this[_closeOnActivate] = true;
      this[element$] = element;
      this[_dropdown$] = _dropdown;
      this[_activationHandler$] = _activationHandler;
      this[_cdRef$] = _cdRef;
      MaterialSelectItemComponent.__proto__.new.call(this, element, (t0 = role, t0 == null ? "option" : t0), {addTabIndexWhenNonTabbable: addTabIndexWhenNonTabbable});
      t0$ = this[_disposer];
      (() => {
        t0$.addStreamSubscription(UIEventL(), this.trigger.listen(dart.bind(this, 'handleActivate')));
        t0$.addFunction(dart.fn(() => {
          let t1;
          t1 = this[_selectionChangeStreamSub];
          return t1 == null ? null : t1.cancel();
        }, VoidToFutureLOfvoid()));
        return t0$;
      })();
    }).prototype = MaterialSelectItemComponent.prototype;
    dart.addTypeTests(MaterialSelectItemComponent);
    MaterialSelectItemComponent.prototype[_is_MaterialSelectItemComponent_default] = true;
    dart.addTypeCaches(MaterialSelectItemComponent);
    MaterialSelectItemComponent[dart.implements] = () => [lifecycle_hooks.OnDestroy, selection_container.SelectionItem$(dart.legacy(T)), has_renderer.HasRenderer$(dart.legacy(T)), has_renderer.HasComponentRenderer$(dart.legacy(has_renderer.RendersValue), dart.dynamic), has_factory.HasFactoryRenderer$(dart.legacy(has_renderer.RendersValue), dart.dynamic)];
    dart.setMethodSignature(MaterialSelectItemComponent, () => ({
      __proto__: dart.getMethods(MaterialSelectItemComponent.__proto__),
      handleActivate: dart.fnType(dart.void, [dart.legacy(html.UIEvent)]),
      onLoadCustomComponent: dart.fnType(dart.void, [dart.legacy(component_factory.ComponentRef)]),
      ngOnDestroy: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(MaterialSelectItemComponent, () => ({
      __proto__: dart.getGetters(MaterialSelectItemComponent.__proto__),
      disabled: dart.legacy(core.bool),
      isHidden: dart.legacy(core.bool),
      value: dart.legacy(T),
      supportsMultiSelect: dart.legacy(core.bool),
      hideCheckbox: dart.legacy(core.bool),
      itemRenderer: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])),
      useCheckMarks: dart.legacy(core.bool),
      valueHasLabel: dart.legacy(core.bool),
      valueLabel: dart.legacy(core.String),
      selection: dart.legacy(selection_model.SelectionModel$(dart.legacy(T))),
      selected: dart.legacy(core.bool),
      closeOnActivate: dart.legacy(core.bool),
      componentType: dart.legacy(core.Type),
      componentFactory: dart.legacy(component_factory.ComponentFactory),
      isAriaChecked: dart.legacy(core.bool),
      isSelected: dart.legacy(core.bool),
      [_isMarkedSelected]: dart.legacy(core.bool),
      [_isSelectedInSelectionModel]: dart.legacy(core.bool),
      [_itemRenderer$]: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])),
      [_selection$]: dart.legacy(selection_model.SelectionModel$(dart.legacy(T))),
      [_value$]: dart.legacy(T)
    }));
    dart.setSetterSignature(MaterialSelectItemComponent, () => ({
      __proto__: dart.getSetters(MaterialSelectItemComponent.__proto__),
      isHidden: dart.dynamic,
      value: dart.legacy(core.Object),
      hideCheckbox: dart.dynamic,
      itemRenderer: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])),
      useCheckMarks: dart.dynamic,
      selectOnActivate: dart.legacy(core.bool),
      deselectOnActivate: dart.legacy(core.bool),
      selection: dart.legacy(core.Object),
      selected: dart.dynamic,
      closeOnActivate: dart.dynamic,
      [_itemRenderer$]: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])),
      [_selection$]: dart.legacy(selection_model.SelectionModel$(dart.legacy(T))),
      [_value$]: dart.legacy(T)
    }));
    dart.setLibraryUri(MaterialSelectItemComponent, L0);
    dart.setFieldSignature(MaterialSelectItemComponent, () => ({
      __proto__: dart.getFields(MaterialSelectItemComponent.__proto__),
      [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
      [_activationHandler$]: dart.finalFieldType(dart.legacy(activation_handler.ActivationHandler)),
      [_cdRef$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
      [_dropdown$]: dart.finalFieldType(dart.legacy(material_dropdown_base.DropdownHandle)),
      element: dart.finalFieldType(dart.legacy(html.HtmlElement)),
      [_selectionChangeStreamSub]: dart.fieldType(dart.legacy(async.StreamSubscription)),
      [_isHidden]: dart.fieldType(dart.legacy(core.bool)),
      [_value]: dart.fieldType(dart.legacy(T)),
      [_supportsMultiSelect]: dart.fieldType(dart.legacy(core.bool)),
      [_hideCheckbox]: dart.fieldType(dart.legacy(core.bool)),
      [_itemRenderer]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)]))),
      componentRenderer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.Type), [dart.dynamic]))),
      factoryRenderer: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(component_factory.ComponentFactory), [dart.dynamic]))),
      [_useCheckMarks]: dart.fieldType(dart.legacy(core.bool)),
      [_selectOnActivate]: dart.fieldType(dart.legacy(core.bool)),
      [_deselectOnActivate]: dart.fieldType(dart.legacy(core.bool)),
      [_selection]: dart.fieldType(dart.legacy(selection_model.SelectionModel$(dart.legacy(T)))),
      [_selected]: dart.fieldType(dart.legacy(core.bool)),
      [_closeOnActivate]: dart.fieldType(dart.legacy(core.bool))
    }));
    return MaterialSelectItemComponent;
  });
  material_select_item.MaterialSelectItemComponent = material_select_item.MaterialSelectItemComponent$();
  dart.defineLazy(material_select_item.MaterialSelectItemComponent, {
    /*material_select_item.MaterialSelectItemComponent.hostClass*/get hostClass() {
      return "item";
    }
  }, true);
  dart.addTypeTests(material_select_item.MaterialSelectItemComponent, _is_MaterialSelectItemComponent_default);
  dart.trackLibraries("packages/angular_components/material_select/material_select_item", {
    "package:angular_components/material_select/material_select_item.dart": material_select_item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_select_item.dart"],"names":[],"mappings":"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","file":"material_select_item.ddc.js"}');
  // Exports:
  return {
    material_select__material_select_item: material_select_item
  };
}));

//# sourceMappingURL=material_select_item.ddc.js.map
