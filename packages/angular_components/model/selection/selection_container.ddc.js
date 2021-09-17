define(['dart_sdk', 'packages/angular_components/model/selection/selection_model', 'packages/angular_components/model/selection/selection_options', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/ui/has_factory', 'packages/angular/src/bootstrap/modules'], (function load__packages__angular_components__model__selection__selection_container(dart_sdk, packages__angular_components__model__selection__selection_model, packages__angular_components__model__selection__selection_options, packages__angular_components__model__ui__has_renderer, packages__angular_components__model__ui__has_factory, packages__angular__src__bootstrap__modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const selection_model = packages__angular_components__model__selection__selection_model.model__selection__selection_model;
  const selection_options = packages__angular_components__model__selection__selection_options.model__selection__selection_options;
  const has_renderer = packages__angular_components__model__ui__has_renderer.model__ui__has_renderer;
  const has_factory = packages__angular_components__model__ui__has_factory.model__ui__has_factory;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  var selection_container = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:angular_components/model/selection/selection_container.dart";
  var _selection = dart.privateName(selection_container, "_selection");
  var _options = dart.privateName(selection_container, "_options");
  var _itemRenderer = dart.privateName(selection_container, "_itemRenderer");
  var _componentRenderer = dart.privateName(selection_container, "_componentRenderer");
  var _factoryRenderer = dart.privateName(selection_container, "_factoryRenderer");
  const _is_SelectionContainer_default = Symbol('_is_SelectionContainer_default');
  selection_container.SelectionContainer$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var SelectionModelOfTL = () => (SelectionModelOfTL = dart.constFn(selection_model.SelectionModel$(TL())))();
    var SelectionModelLOfTL = () => (SelectionModelLOfTL = dart.constFn(dart.legacy(SelectionModelOfTL())))();
    var SelectionOptionsOfTL = () => (SelectionOptionsOfTL = dart.constFn(selection_options.SelectionOptions$(TL())))();
    var SelectionOptionsLOfTL = () => (SelectionOptionsLOfTL = dart.constFn(dart.legacy(SelectionOptionsOfTL())))();
    class SelectionContainer extends core.Object {
      get selection() {
        return this[_selection];
      }
      set selection(value) {
        SelectionModelLOfTL().as(value);
        this[_selection] = value;
      }
      get options() {
        return this[_options];
      }
      set options(value) {
        SelectionOptionsLOfTL().as(value);
        this[_options] = value;
      }
      get itemRenderer() {
        return this[_itemRenderer];
      }
      set itemRenderer(value) {
        this[_itemRenderer] = value;
      }
      get componentRenderer() {
        return this[_componentRenderer];
      }
      set componentRenderer(value) {
        this[_componentRenderer] = value;
      }
      get factoryRenderer() {
        return this[_factoryRenderer];
      }
      set factoryRenderer(value) {
        this[_factoryRenderer] = value;
      }
    }
    (SelectionContainer.new = function() {
      this[_selection] = null;
      this[_options] = null;
      this[_itemRenderer] = null;
      this[_componentRenderer] = null;
      this[_factoryRenderer] = null;
      ;
    }).prototype = SelectionContainer.prototype;
    dart.addTypeTests(SelectionContainer);
    SelectionContainer.prototype[_is_SelectionContainer_default] = true;
    dart.addTypeCaches(SelectionContainer);
    SelectionContainer[dart.implements] = () => [has_renderer.HasRenderer$(dart.legacy(T)), has_renderer.HasComponentRenderer$(dart.legacy(has_renderer.RendersValue), dart.legacy(core.Object)), has_factory.HasFactoryRenderer$(dart.legacy(has_renderer.RendersValue), dart.legacy(T))];
    dart.setGetterSignature(SelectionContainer, () => ({
      __proto__: dart.getGetters(SelectionContainer.__proto__),
      selection: dart.legacy(selection_model.SelectionModel$(dart.legacy(T))),
      options: dart.legacy(selection_options.SelectionOptions$(dart.legacy(T))),
      itemRenderer: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])),
      componentRenderer: dart.legacy(dart.fnType(dart.legacy(core.Type), [dart.dynamic])),
      factoryRenderer: dart.legacy(dart.fnType(dart.legacy(component_factory.ComponentFactory), [dart.legacy(T)]))
    }));
    dart.setSetterSignature(SelectionContainer, () => ({
      __proto__: dart.getSetters(SelectionContainer.__proto__),
      selection: dart.legacy(core.Object),
      options: dart.legacy(core.Object),
      itemRenderer: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])),
      componentRenderer: dart.legacy(dart.fnType(dart.legacy(core.Type), [dart.dynamic])),
      factoryRenderer: dart.legacy(dart.fnType(dart.legacy(component_factory.ComponentFactory), [dart.legacy(T)]))
    }));
    dart.setLibraryUri(SelectionContainer, L0);
    dart.setFieldSignature(SelectionContainer, () => ({
      __proto__: dart.getFields(SelectionContainer.__proto__),
      [_selection]: dart.fieldType(dart.legacy(selection_model.SelectionModel$(dart.legacy(T)))),
      [_options]: dart.fieldType(dart.legacy(selection_options.SelectionOptions$(dart.legacy(T)))),
      [_itemRenderer]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)]))),
      [_componentRenderer]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.Type), [dart.dynamic]))),
      [_factoryRenderer]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(component_factory.ComponentFactory), [dart.legacy(T)])))
    }));
    return SelectionContainer;
  });
  selection_container.SelectionContainer = selection_container.SelectionContainer$();
  dart.addTypeTests(selection_container.SelectionContainer, _is_SelectionContainer_default);
  var _value = dart.privateName(selection_container, "_value");
  const _is_SelectionItem_default = Symbol('_is_SelectionItem_default');
  selection_container.SelectionItem$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var SelectionModelOfTL = () => (SelectionModelOfTL = dart.constFn(selection_model.SelectionModel$(TL())))();
    var SelectionModelLOfTL = () => (SelectionModelLOfTL = dart.constFn(dart.legacy(SelectionModelOfTL())))();
    class SelectionItem extends core.Object {
      get selection() {
        return this[_selection];
      }
      set selection(value) {
        SelectionModelLOfTL().as(value);
        this[_selection] = value;
      }
      get value() {
        return this[_value];
      }
      set value(value) {
        TL().as(value);
        this[_value] = value;
      }
      get itemRenderer() {
        return this[_itemRenderer];
      }
      set itemRenderer(value) {
        this[_itemRenderer] = value;
      }
    }
    (SelectionItem.new = function() {
      this[_selection] = null;
      this[_value] = null;
      this[_itemRenderer] = null;
      ;
    }).prototype = SelectionItem.prototype;
    dart.addTypeTests(SelectionItem);
    SelectionItem.prototype[_is_SelectionItem_default] = true;
    dart.addTypeCaches(SelectionItem);
    SelectionItem[dart.implements] = () => [has_renderer.HasRenderer$(dart.legacy(T))];
    dart.setGetterSignature(SelectionItem, () => ({
      __proto__: dart.getGetters(SelectionItem.__proto__),
      selection: dart.legacy(selection_model.SelectionModel$(dart.legacy(T))),
      value: dart.legacy(T),
      itemRenderer: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)]))
    }));
    dart.setSetterSignature(SelectionItem, () => ({
      __proto__: dart.getSetters(SelectionItem.__proto__),
      selection: dart.legacy(core.Object),
      value: dart.legacy(core.Object),
      itemRenderer: dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)]))
    }));
    dart.setLibraryUri(SelectionItem, L0);
    dart.setFieldSignature(SelectionItem, () => ({
      __proto__: dart.getFields(SelectionItem.__proto__),
      [_selection]: dart.fieldType(dart.legacy(selection_model.SelectionModel$(dart.legacy(T)))),
      [_value]: dart.fieldType(dart.legacy(T)),
      [_itemRenderer]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(core.String), [dart.legacy(T)])))
    }));
    return SelectionItem;
  });
  selection_container.SelectionItem = selection_container.SelectionItem$();
  dart.addTypeTests(selection_container.SelectionItem, _is_SelectionItem_default);
  dart.trackLibraries("packages/angular_components/model/selection/selection_container", {
    "package:angular_components/model/selection/selection_container.dart": selection_container
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["selection_container.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;AAiBqC;MAAU;;iCACb;AACZ,QAAlB,mBAAa,KAAK;MACpB;;AAImC;MAAQ;;mCACX;AACd,QAAhB,iBAAW,KAAK;MAClB;;AAMoC;MAAa;uBAEhB;AACV,QAArB,sBAAgB,KAAK;MACvB;;AAM2C;MAAkB;4BAIrB;AACZ,QAA1B,2BAAqB,KAAK;MAC5B;;AAMwD;MAAgB;0BAEnB;AAC3B,QAAxB,yBAAmB,KAAK;MAC1B;;;MA3CkB;MAOE;MAQJ;MAUE;MAYe;;IAOnC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAMqC;MAAU;;iCACb;AACZ,QAAlB,mBAAa,KAAK;MACpB;;AAIe;MAAM;;gBACT;AACI,QAAd,eAAS,KAAK;MAChB;;AAKoC;MAAa;uBAEhB;AACV,QAArB,sBAAgB,KAAK;MACvB;;;MApBkB;MAOhB;MAOc;;IAOlB","file":"selection_container.ddc.js"}');
  // Exports:
  return {
    model__selection__selection_container: selection_container
  };
}));

//# sourceMappingURL=selection_container.ddc.js.map
