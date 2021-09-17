define(['dart_sdk', 'packages/collection/src/comparators', 'packages/stack_trace/src/chain', 'packages/logging/logging'], (function load__packages__angular__src__core__change_detection__change_detection(dart_sdk, packages__collection__src__comparators, packages__stack_trace__src__chain, packages__logging__logging) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const equality = packages__collection__src__comparators.src__equality;
  const chain = packages__stack_trace__src__chain.src__chain;
  const trace = packages__stack_trace__src__chain.src__trace;
  const logger = packages__logging__logging.src__logger;
  var hierarchical = Object.create(dart.library);
  var injector = Object.create(dart.library);
  var opaque_token = Object.create(dart.library);
  var runtime = Object.create(dart.library);
  var optimizations = Object.create(dart.library);
  var runtime$ = Object.create(dart.library);
  var empty = Object.create(dart.library);
  var reflector = Object.create(dart.library);
  var decorators = Object.create(dart.library);
  var providers = Object.create(dart.library);
  var module$ = Object.create(dart.library);
  var errors = Object.create(dart.library);
  var map = Object.create(dart.library);
  var change_detection_util = Object.create(dart.library);
  var lang = Object.create(dart.library);
  var lifecycle_hooks = Object.create(dart.library);
  var provider = Object.create(dart.library);
  var typed = Object.create(dart.library);
  var view = Object.create(dart.library);
  var pipe_transform = Object.create(dart.library);
  var change_detection = Object.create(dart.library);
  var default_keyvalue_differ = Object.create(dart.library);
  var default_iterable_differ = Object.create(dart.library);
  var constants = Object.create(dart.library);
  var change_detector_ref = Object.create(dart.library);
  var ng_zone = Object.create(dart.library);
  var di = Object.create(dart.library);
  var metadata = Object.create(dart.library);
  var visibility = Object.create(dart.library);
  var exception_handler = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $toString = dartx.toString;
  var $values = dartx.values;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $containsKey = dartx.containsKey;
  var $length = dartx.length;
  var $add = dartx.add;
  var $isNotEmpty = dartx.isNotEmpty;
  var $isEmpty = dartx.isEmpty;
  var $addAll = dartx.addAll;
  var $removeLast = dartx.removeLast;
  var $join = dartx.join;
  var $substring = dartx.substring;
  var $forEach = dartx.forEach;
  var $remove = dartx.remove;
  var $clear = dartx.clear;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var HierarchicalInjectorL = () => (HierarchicalInjectorL = dart.constFn(dart.legacy(hierarchical.HierarchicalInjector)))();
  var InjectorL = () => (InjectorL = dart.constFn(dart.legacy(injector.Injector)))();
  var ProviderL = () => (ProviderL = dart.constFn(dart.legacy(providers.Provider)))();
  var TypeL = () => (TypeL = dart.constFn(dart.legacy(core.Type)))();
  var ProviderOfvoid = () => (ProviderOfvoid = dart.constFn(providers.Provider$(dart.void)))();
  var ProviderLOfvoid = () => (ProviderLOfvoid = dart.constFn(dart.legacy(ProviderOfvoid())))();
  var JSArrayOfProviderLOfvoid = () => (JSArrayOfProviderLOfvoid = dart.constFn(_interceptors.JSArray$(ProviderLOfvoid())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var ListOfObjectL = () => (ListOfObjectL = dart.constFn(core.List$(ObjectL())))();
  var ListLOfObjectL = () => (ListLOfObjectL = dart.constFn(dart.legacy(ListOfObjectL())))();
  var InjectL = () => (InjectL = dart.constFn(dart.legacy(decorators.Inject)))();
  var OptionalL = () => (OptionalL = dart.constFn(dart.legacy(decorators.Optional)))();
  var SkipSelfL = () => (SkipSelfL = dart.constFn(dart.legacy(decorators.SkipSelf)))();
  var SelfL = () => (SelfL = dart.constFn(dart.legacy(decorators.Self)))();
  var HostL = () => (HostL = dart.constFn(dart.legacy(decorators.Host)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToLvoid = () => (VoidToLvoid = dart.constFn(dart.legacy(VoidTovoid())))();
  var MultiTokenL = () => (MultiTokenL = dart.constFn(dart.legacy(opaque_token.MultiToken)))();
  var ProviderOfObjectL = () => (ProviderOfObjectL = dart.constFn(providers.Provider$(ObjectL())))();
  var ProviderLOfObjectL = () => (ProviderLOfObjectL = dart.constFn(dart.legacy(ProviderOfObjectL())))();
  var IdentityMapOfObjectL$ProviderLOfObjectL = () => (IdentityMapOfObjectL$ProviderLOfObjectL = dart.constFn(_js_helper.IdentityMap$(ObjectL(), ProviderLOfObjectL())))();
  var JSArrayOfProviderLOfObjectL = () => (JSArrayOfProviderLOfObjectL = dart.constFn(_interceptors.JSArray$(ProviderLOfObjectL())))();
  var ModuleL = () => (ModuleL = dart.constFn(dart.legacy(module$.Module)))();
  var LinkedMapOfObjectL$dynamic = () => (LinkedMapOfObjectL$dynamic = dart.constFn(_js_helper.LinkedMap$(ObjectL(), dart.dynamic)))();
  var FunctionL = () => (FunctionL = dart.constFn(dart.legacy(core.Function)))();
  var LinkedMapOfObjectL$FunctionL = () => (LinkedMapOfObjectL$FunctionL = dart.constFn(_js_helper.LinkedMap$(ObjectL(), FunctionL())))();
  var ListOfListLOfObjectL = () => (ListOfListLOfObjectL = dart.constFn(core.List$(ListLOfObjectL())))();
  var ListLOfListLOfObjectL = () => (ListLOfListLOfObjectL = dart.constFn(dart.legacy(ListOfListLOfObjectL())))();
  var LinkedMapOfObjectL$ListLOfListLOfObjectL = () => (LinkedMapOfObjectL$ListLOfListLOfObjectL = dart.constFn(_js_helper.LinkedMap$(ObjectL(), ListLOfListLOfObjectL())))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var IterableOfObjectL = () => (IterableOfObjectL = dart.constFn(core.Iterable$(ObjectL())))();
  var IterableLOfObjectL = () => (IterableLOfObjectL = dart.constFn(dart.legacy(IterableOfObjectL())))();
  var IterableEqualityOfObjectL = () => (IterableEqualityOfObjectL = dart.constFn(equality.IterableEquality$(ObjectL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var LifecycleHooksL = () => (LifecycleHooksL = dart.constFn(dart.legacy(lifecycle_hooks.LifecycleHooks)))();
  var ViewEncapsulationL = () => (ViewEncapsulationL = dart.constFn(dart.legacy(view.ViewEncapsulation)))();
  var KeyValueChangeRecordL = () => (KeyValueChangeRecordL = dart.constFn(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)))();
  var LinkedMapOfdynamic$KeyValueChangeRecordL = () => (LinkedMapOfdynamic$KeyValueChangeRecordL = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, KeyValueChangeRecordL())))();
  var LinkedMapOfObjectL$ObjectL = () => (LinkedMapOfObjectL$ObjectL = dart.constFn(_js_helper.LinkedMap$(ObjectL(), ObjectL())))();
  var MapOfObjectL$ObjectL = () => (MapOfObjectL$ObjectL = dart.constFn(core.Map$(ObjectL(), ObjectL())))();
  var MapLOfObjectL$ObjectL = () => (MapLOfObjectL$ObjectL = dart.constFn(dart.legacy(MapOfObjectL$ObjectL())))();
  var ObjectLAndObjectLToNullN = () => (ObjectLAndObjectLToNullN = dart.constFn(dart.fnType(core.Null, [ObjectL(), ObjectL()])))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var intLAnddynamicToObjectL = () => (intLAnddynamicToObjectL = dart.constFn(dart.fnType(ObjectL(), [intL(), dart.dynamic])))();
  var CollectionChangeRecordL = () => (CollectionChangeRecordL = dart.constFn(dart.legacy(default_iterable_differ.CollectionChangeRecord)))();
  var JSArrayOfintL = () => (JSArrayOfintL = dart.constFn(_interceptors.JSArray$(intL())))();
  var ObjectLToNullN = () => (ObjectLToNullN = dart.constFn(dart.fnType(core.Null, [ObjectL()])))();
  var CollectionChangeRecordLTovoid = () => (CollectionChangeRecordLTovoid = dart.constFn(dart.fnType(dart.void, [CollectionChangeRecordL()])))();
  var _DuplicateItemRecordListL = () => (_DuplicateItemRecordListL = dart.constFn(dart.legacy(default_iterable_differ._DuplicateItemRecordList)))();
  var IdentityMapOfdynamic$_DuplicateItemRecordListL = () => (IdentityMapOfdynamic$_DuplicateItemRecordListL = dart.constFn(_js_helper.IdentityMap$(dart.dynamic, _DuplicateItemRecordListL())))();
  var StreamControllerOfvoid = () => (StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))();
  var NgZoneErrorL = () => (NgZoneErrorL = dart.constFn(dart.legacy(ng_zone.NgZoneError)))();
  var StreamControllerOfNgZoneErrorL = () => (StreamControllerOfNgZoneErrorL = dart.constFn(async.StreamController$(NgZoneErrorL())))();
  var _WrappedTimerL = () => (_WrappedTimerL = dart.constFn(dart.legacy(ng_zone._WrappedTimer)))();
  var JSArrayOf_WrappedTimerL = () => (JSArrayOf_WrappedTimerL = dart.constFn(_interceptors.JSArray$(_WrappedTimerL())))();
  var ZoneL = () => (ZoneL = dart.constFn(dart.legacy(async.Zone)))();
  var VoidToZoneL = () => (VoidToZoneL = dart.constFn(dart.fnType(ZoneL(), [])))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var TraceL = () => (TraceL = dart.constFn(dart.legacy(trace.Trace)))();
  var TraceLToStringL = () => (TraceLToStringL = dart.constFn(dart.fnType(StringL(), [TraceL()])))();
  var VisibilityL = () => (VisibilityL = dart.constFn(dart.legacy(visibility.Visibility)))();
  const CT = Object.create(null);
  var L26 = "file:///C:/Users/nicol/AppData/Local/Temp/scratch_space31d894d0/packages/angular/src/core/metadata.dart";
  var L4 = "file:///C:/Users/nicol/AppData/Local/Temp/scratch_space31d894d0/packages/angular/src/runtime/optimizations.dart";
  var L23 = "package:angular/src/core/change_detection/change_detector_ref.dart";
  var L17 = "package:angular/src/core/metadata/typed.dart";
  var L15 = "package:angular/src/core/change_detection/change_detection_util.dart";
  var L5 = "package:angular/src/di/injector/runtime.dart";
  var L12 = "file:///C:/Users/nicol/AppData/Local/Temp/scratch_space31d894d0/packages/angular/src/di/errors.dart";
  var L0 = "file:///C:/Users/nicol/AppData/Local/Temp/scratch_space31d894d0/packages/angular/src/di/injector/injector.dart";
  var L3 = "package:angular/src/core/di/opaque_token.dart";
  var L6 = "file:///C:/Users/nicol/AppData/Local/Temp/scratch_space31d894d0/packages/angular/src/di/injector/runtime.dart";
  var L18 = "package:angular/src/core/metadata/view.dart";
  var L16 = "package:angular/src/core/metadata/lifecycle_hooks.dart";
  var L8 = "package:angular/src/core/di/decorators.dart";
  var L1 = "package:angular/src/di/injector/injector.dart";
  var L19 = "package:angular/src/core/change_detection/pipe_transform.dart";
  var L7 = "package:angular/src/di/injector/empty.dart";
  var L24 = "package:angular/src/core/zone/ng_zone.dart";
  var L25 = "package:angular/src/core/metadata.dart";
  var L13 = "file:///C:/Users/nicol/AppData/Local/Temp/scratch_space31d894d0/packages/angular/src/di/injector/map.dart";
  var L14 = "package:angular/src/di/injector/map.dart";
  var L9 = "package:angular/src/di/providers.dart";
  var L27 = "package:angular/src/core/metadata/visibility.dart";
  var L10 = "package:angular/src/di/module.dart";
  var L20 = "package:angular/src/core/change_detection/differs/default_keyvalue_differ.dart";
  var L28 = "package:angular/src/facade/exception_handler.dart";
  var L21 = "package:angular/src/core/change_detection/differs/default_iterable_differ.dart";
  var L2 = "package:angular/src/di/injector/hierarchical.dart";
  var L22 = "package:angular/src/core/change_detection/constants.dart";
  var L11 = "package:angular/src/di/errors.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: empty.EmptyInjector.prototype,
        [HierarchicalInjector_parent]: null
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: core.Object.prototype
      });
    },
    get C2() {
      return C2 = dart.constList([], ListLOfObjectL());
    },
    get C3() {
      return C3 = dart.constList([], ModuleL());
    },
    get C4() {
      return C4 = dart.constList([], ProviderLOfObjectL());
    },
    get C5() {
      return C5 = dart.constList([], ObjectL());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: change_detection_util._DevModeEquality.prototype
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: IterableEqualityOfObjectL().prototype,
        [IterableEquality__elementEquality]: C7 || CT.C7
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: lifecycle_hooks.LifecycleHooks.prototype,
        [_name$]: "LifecycleHooks.onInit",
        index: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: lifecycle_hooks.LifecycleHooks.prototype,
        [_name$]: "LifecycleHooks.onDestroy",
        index: 1
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: lifecycle_hooks.LifecycleHooks.prototype,
        [_name$]: "LifecycleHooks.doCheck",
        index: 2
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: lifecycle_hooks.LifecycleHooks.prototype,
        [_name$]: "LifecycleHooks.onChanges",
        index: 3
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: lifecycle_hooks.LifecycleHooks.prototype,
        [_name$]: "LifecycleHooks.afterChanges",
        index: 4
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: lifecycle_hooks.LifecycleHooks.prototype,
        [_name$]: "LifecycleHooks.afterContentInit",
        index: 5
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: lifecycle_hooks.LifecycleHooks.prototype,
        [_name$]: "LifecycleHooks.afterContentChecked",
        index: 6
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: lifecycle_hooks.LifecycleHooks.prototype,
        [_name$]: "LifecycleHooks.afterViewInit",
        index: 7
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: lifecycle_hooks.LifecycleHooks.prototype,
        [_name$]: "LifecycleHooks.afterViewChecked",
        index: 8
      });
    },
    get C17() {
      return C17 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], LifecycleHooksL());
    },
    get C18() {
      return C18 = dart.const({
        __proto__: view.ViewEncapsulation.prototype,
        [_name$0]: "ViewEncapsulation.Emulated",
        index: 0
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: view.ViewEncapsulation.prototype,
        [_name$0]: "ViewEncapsulation.None",
        index: 1
      });
    },
    get C20() {
      return C20 = dart.constList([C18 || CT.C18, C19 || CT.C19], ViewEncapsulationL());
    },
    get C21() {
      return C21 = dart.fn(default_iterable_differ._trackByIdentity, intLAnddynamicToObjectL());
    },
    get C22() {
      return C22 = dart.const({
        __proto__: visibility.Visibility.prototype,
        [_name$1]: "Visibility.local",
        index: 0
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: visibility.Visibility.prototype,
        [_name$1]: "Visibility.all",
        index: 1
      });
    },
    get C24() {
      return C24 = dart.constList([C22 || CT.C22, C23 || CT.C23], VisibilityL());
    }
  }, false);
  var HierarchicalInjector_parent = dart.privateName(hierarchical, "HierarchicalInjector.parent");
  var C0;
  var C1;
  injector.Injector = class Injector extends core.Object {
    get(token, notFoundValue = C1 || CT.C1) {
      errors.debugInjectorEnter(token);
      let result = this.provideUntyped(token, notFoundValue);
      if (core.identical(result, injector.throwIfNotFound)) {
        return injector.throwsNotFound(this, token);
      }
      errors.debugInjectorLeave(token);
      return result;
    }
    provideType(T, token) {
      if (!!dart.wrapType(dart.legacy(T))[$_equals](dart.wrapType(dart.dynamic))) dart.assertFailed("Returning a dynamic is not supported", L0, 121, 12, "T != dynamic");
      return optimizations.unsafeCast(dart.legacy(T), this.get(token));
    }
    provideTypeOptional(T, token) {
      if (!!dart.wrapType(dart.legacy(T))[$_equals](dart.wrapType(dart.dynamic))) dart.assertFailed("Returning a dynamic is not supported", L0, 135, 12, "T != dynamic");
      return optimizations.unsafeCast(dart.legacy(T), this.get(token, null));
    }
    provideToken(T, token) {
      return optimizations.unsafeCast(dart.legacy(T), this.get(token));
    }
    provideTokenOptional(T, token) {
      return optimizations.unsafeCast(dart.legacy(T), this.get(token, null));
    }
  };
  (injector.Injector.new = function() {
    ;
  }).prototype = injector.Injector.prototype;
  dart.addTypeTests(injector.Injector);
  dart.addTypeCaches(injector.Injector);
  dart.setMethodSignature(injector.Injector, () => ({
    __proto__: dart.getMethods(injector.Injector.__proto__),
    get: dart.fnType(dart.dynamic, [dart.legacy(core.Object)], [dart.legacy(core.Object)]),
    provideType: dart.gFnType(T => [dart.legacy(T), [dart.legacy(core.Type)]]),
    provideTypeOptional: dart.gFnType(T => [dart.legacy(T), [dart.legacy(core.Type)]]),
    provideToken: dart.gFnType(T => [dart.legacy(T), [dart.legacy(opaque_token.OpaqueToken$(dart.legacy(T)))]]),
    provideTokenOptional: dart.gFnType(T => [dart.legacy(T), [dart.legacy(opaque_token.OpaqueToken$(dart.legacy(T)))]])
  }));
  dart.setLibraryUri(injector.Injector, L1);
  hierarchical.HierarchicalInjector = class HierarchicalInjector extends injector.Injector {
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    provideUntyped(token, orElse = C1 || CT.C1) {
      errors.debugInjectorEnter(token);
      let result = this.injectFromSelfOptional(token, orElse);
      if (core.identical(result, orElse)) {
        result = this.injectFromAncestryOptional(token, orElse);
      }
      errors.debugInjectorLeave(token);
      return result;
    }
    injectFromSelf(T, token) {
      let result = this.injectFromSelfOptional(token);
      if (core.identical(result, injector.throwIfNotFound)) {
        return injector.throwsNotFound(this, token);
      }
      return optimizations.unsafeCast(dart.legacy(T), result);
    }
    injectFromParent(T, token) {
      let result = this.injectFromParentOptional(token);
      if (core.identical(result, injector.throwIfNotFound)) {
        return injector.throwsNotFound(this, token);
      }
      return optimizations.unsafeCast(dart.legacy(T), result);
    }
    injectFromParentOptional(token, orElse = C1 || CT.C1) {
      return this.parent.injectFromSelfOptional(token, orElse);
    }
    injectFromAncestry(T, token) {
      let result = this.injectFromAncestryOptional(token);
      if (core.identical(result, injector.throwIfNotFound)) {
        return injector.throwsNotFound(this, token);
      }
      return optimizations.unsafeCast(dart.legacy(T), result);
    }
    injectFromAncestryOptional(token, orElse = C1 || CT.C1) {
      return this.parent.provideUntyped(token, orElse);
    }
  };
  (hierarchical.HierarchicalInjector.new = function(parent = null) {
    let t0;
    this[parent$] = HierarchicalInjectorL().as((t0 = parent, t0 == null ? C0 || CT.C0 : t0));
    hierarchical.HierarchicalInjector.__proto__.new.call(this);
    ;
  }).prototype = hierarchical.HierarchicalInjector.prototype;
  (hierarchical.HierarchicalInjector.maybeEmpty = function(parent = null) {
    this[parent$] = parent;
    hierarchical.HierarchicalInjector.__proto__.new.call(this);
    ;
  }).prototype = hierarchical.HierarchicalInjector.prototype;
  dart.addTypeTests(hierarchical.HierarchicalInjector);
  dart.addTypeCaches(hierarchical.HierarchicalInjector);
  const parent$ = HierarchicalInjector_parent;
  dart.setMethodSignature(hierarchical.HierarchicalInjector, () => ({
    __proto__: dart.getMethods(hierarchical.HierarchicalInjector.__proto__),
    provideUntyped: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Object)], [dart.legacy(core.Object)]),
    injectFromSelf: dart.gFnType(T => [dart.legacy(T), [dart.legacy(core.Object)]]),
    injectFromParent: dart.gFnType(T => [dart.legacy(T), [dart.legacy(core.Object)]]),
    injectFromParentOptional: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Object)], [dart.legacy(core.Object)]),
    injectFromAncestry: dart.gFnType(T => [dart.legacy(T), [dart.legacy(core.Object)]]),
    injectFromAncestryOptional: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Object)], [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(hierarchical.HierarchicalInjector, L2);
  dart.setFieldSignature(hierarchical.HierarchicalInjector, () => ({
    __proto__: dart.getFields(hierarchical.HierarchicalInjector.__proto__),
    parent: dart.finalFieldType(dart.legacy(hierarchical.HierarchicalInjector))
  }));
  var _providersOrModules = dart.privateName(injector, "_providersOrModules");
  var _providersOrModules$ = dart.privateName(injector, "GenerateInjector._providersOrModules");
  injector.GenerateInjector = class GenerateInjector extends core.Object {
    get [_providersOrModules]() {
      return this[_providersOrModules$];
    }
    set [_providersOrModules](value) {
      super[_providersOrModules] = value;
    }
  };
  (injector.GenerateInjector.new = function(_providersOrModules) {
    this[_providersOrModules$] = _providersOrModules;
    ;
  }).prototype = injector.GenerateInjector.prototype;
  dart.addTypeTests(injector.GenerateInjector);
  dart.addTypeCaches(injector.GenerateInjector);
  dart.setLibraryUri(injector.GenerateInjector, L1);
  dart.setFieldSignature(injector.GenerateInjector, () => ({
    __proto__: dart.getFields(injector.GenerateInjector.__proto__),
    [_providersOrModules]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object))))
  }));
  injector.throwsNotFound = function throwsNotFound(injector, token) {
    dart.throw(errors.noProviderError(token));
  };
  dart.defineLazy(injector, {
    /*injector.throwIfNotFound*/get throwIfNotFound() {
      return C1 || CT.C1;
    }
  }, true);
  var _uniqueName = dart.privateName(opaque_token, "_uniqueName");
  const _is_OpaqueToken_default = Symbol('_is_OpaqueToken_default');
  var _uniqueName$ = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  opaque_token.OpaqueToken$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class OpaqueToken extends core.Object {
      get [_uniqueName]() {
        return this[_uniqueName$];
      }
      set [_uniqueName](value) {
        super[_uniqueName] = value;
      }
      toString() {
        if (dart.test(optimizations.isDevMode)) {
          return "OpaqueToken (" + dart.str(super[$toString]()) + ") <" + dart.str(dart.wrapType(TL())) + ">('" + dart.str(this[_uniqueName]) + "')";
        }
        return super[$toString]();
      }
    }
    (OpaqueToken.new = function(_uniqueName = "") {
      this[_uniqueName$] = _uniqueName;
      ;
    }).prototype = OpaqueToken.prototype;
    dart.addTypeTests(OpaqueToken);
    OpaqueToken.prototype[_is_OpaqueToken_default] = true;
    dart.addTypeCaches(OpaqueToken);
    dart.setMethodSignature(OpaqueToken, () => ({
      __proto__: dart.getMethods(OpaqueToken.__proto__),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setLibraryUri(OpaqueToken, L3);
    dart.setFieldSignature(OpaqueToken, () => ({
      __proto__: dart.getFields(OpaqueToken.__proto__),
      [_uniqueName]: dart.finalFieldType(dart.legacy(core.String))
    }));
    dart.defineExtensionMethods(OpaqueToken, ['toString']);
    return OpaqueToken;
  });
  opaque_token.OpaqueToken = opaque_token.OpaqueToken$();
  dart.addTypeTests(opaque_token.OpaqueToken, _is_OpaqueToken_default);
  var _listOf = dart.privateName(opaque_token, "_listOf");
  const _is_MultiToken_default = Symbol('_is_MultiToken_default');
  opaque_token.MultiToken$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var JSArrayOfTL = () => (JSArrayOfTL = dart.constFn(_interceptors.JSArray$(TL())))();
    class MultiToken extends opaque_token.OpaqueToken$(dart.legacy(core.List$(dart.legacy(T)))) {
      [_listOf]() {
        return JSArrayOfTL().of([]);
      }
      toString() {
        if (dart.test(optimizations.isDevMode)) {
          return "MultiToken (" + dart.str(super.toString()) + ") <" + dart.str(dart.wrapType(TL())) + ">('" + dart.str(this[_uniqueName]) + "')";
        }
        return super.toString();
      }
    }
    (MultiToken.new = function(uniqueName = "") {
      MultiToken.__proto__.new.call(this, uniqueName);
      ;
    }).prototype = MultiToken.prototype;
    dart.addTypeTests(MultiToken);
    MultiToken.prototype[_is_MultiToken_default] = true;
    dart.addTypeCaches(MultiToken);
    dart.setMethodSignature(MultiToken, () => ({
      __proto__: dart.getMethods(MultiToken.__proto__),
      [_listOf]: dart.fnType(dart.legacy(core.List$(dart.legacy(T))), [])
    }));
    dart.setLibraryUri(MultiToken, L3);
    dart.defineExtensionMethods(MultiToken, ['toString']);
    return MultiToken;
  });
  opaque_token.MultiToken = opaque_token.MultiToken$();
  dart.addTypeTests(opaque_token.MultiToken, _is_MultiToken_default);
  opaque_token.listOfMultiToken = function listOfMultiToken(T, token) {
    return token[_listOf]();
  };
  optimizations.unsafeCast = function unsafeCast(T, any) {
    return dart.legacy(T).as(any);
  };
  dart.copyProperties(optimizations, {
    get _assertionsEnabled() {
      let enabled = false;
      if (!(enabled = true)) dart.assertFailed(null, L4, 11, 10, "enabled = true");
      return enabled;
    },
    get isDevMode() {
      return optimizations._assertionsEnabled;
    }
  });
  runtime$.ReflectiveInjector = class ReflectiveInjector extends core.Object {
    static resolveAndCreate(providersOrLists, parent = C0 || CT.C0) {
      let flatProviders = runtime$._flattenProviders(providersOrLists);
      if (dart.test(optimizations.isDevMode)) {
        runtime$._assertProviders(flatProviders.providers[$values]);
        runtime$._assertProviders(flatProviders.multiProviders);
      }
      return new runtime$._RuntimeInjector.new(flatProviders.providers, flatProviders.multiProviders, optimizations.unsafeCast(HierarchicalInjectorL(), parent), false);
    }
    static resolveStaticAndCreate(providersOrLists, parent = C0 || CT.C0) {
      let flatProviders = runtime$._flattenProviders(providersOrLists);
      if (dart.test(optimizations.isDevMode)) {
        runtime$._assertStaticProviders(flatProviders.providers[$values]);
        runtime$._assertStaticProviders(flatProviders.multiProviders);
      }
      return new runtime$._RuntimeInjector.new(flatProviders.providers, flatProviders.multiProviders, optimizations.unsafeCast(HierarchicalInjectorL(), parent), true);
    }
  };
  (runtime$.ReflectiveInjector.new = function() {
    ;
  }).prototype = runtime$.ReflectiveInjector.prototype;
  dart.addTypeTests(runtime$.ReflectiveInjector);
  dart.addTypeCaches(runtime$.ReflectiveInjector);
  runtime$.ReflectiveInjector[dart.implements] = () => [hierarchical.HierarchicalInjector];
  dart.setLibraryUri(runtime$.ReflectiveInjector, L5);
  var _instances = dart.privateName(runtime$, "_instances");
  var _providers$ = dart.privateName(runtime$, "_providers");
  var _multiProviders$ = dart.privateName(runtime$, "_multiProviders");
  var _staticOnlyResolveAndCreate$ = dart.privateName(runtime$, "_staticOnlyResolveAndCreate");
  var _resolveMulti = dart.privateName(runtime$, "_resolveMulti");
  var _resolveMeta = dart.privateName(runtime$, "_resolveMeta");
  var _resolveArgs = dart.privateName(runtime$, "_resolveArgs");
  runtime$._RuntimeInjector = class _RuntimeInjector extends hierarchical.HierarchicalInjector {
    injectFromSelfOptional(token, orElse = C1 || CT.C1) {
      let t2, t1, t0;
      let instance = this[_instances][$_get](token);
      if (instance == null && !dart.test(this[_instances][$containsKey](token))) {
        let provider = this[_providers$][$_get](token);
        if (provider == null) {
          return orElse;
        }
        if (dart.test(runtime$._isMultiProvider(provider))) {
          t0 = this[_instances];
          t1 = provider.token;
          t2 = this[_resolveMulti](provider);
          t0[$_set](t1, t2);
          return t2;
        }
        this[_instances][$_set](token, instance = providers.buildAtRuntime(provider, this));
      }
      return instance;
    }
    resolveAndCreateChild(providersOrLists) {
      if (dart.test(this[_staticOnlyResolveAndCreate$])) {
        return runtime$.ReflectiveInjector.resolveStaticAndCreate(providersOrLists, this);
      }
      return runtime$.ReflectiveInjector.resolveAndCreate(providersOrLists, this);
    }
    resolveAndInstantiate(providerOrType) {
      let provider = ProviderL().is(providerOrType) ? providerOrType : new providers.Provider.__(providerOrType, {useClass: optimizations.unsafeCast(TypeL(), providerOrType)});
      if (dart.test(this[_staticOnlyResolveAndCreate$])) {
        runtime$._assertStaticProviders(JSArrayOfProviderLOfvoid().of([provider]));
      }
      return providers.buildAtRuntime(provider, this);
    }
    [_resolveArgs](token, deps = null) {
      deps == null ? deps = reflector.getDependencies(token) : null;
      let resolved = ListOfObjectL().new(deps[$length]);
      for (let i = 0, l = resolved[$length]; i < dart.notNull(l); i = i + 1) {
        let dep = deps[$_get](i);
        let result = null;
        if (ListLOfObjectL().is(dep)) {
          result = this[_resolveMeta](dep);
        } else {
          errors.debugInjectorEnter(dep);
          result = this.get(dep);
          errors.debugInjectorLeave(dep);
        }
        if (core.identical(result, injector.throwIfNotFound)) {
          return injector.throwsNotFound(this, dep);
        }
        resolved[$_set](i, result);
      }
      return resolved;
    }
    [_resolveMulti](provider) {
      let results = providers.listOfMulti(provider);
      for (let other of this[_multiProviders$]) {
        if (core.identical(other.token, provider.token)) {
          results[$add](providers.buildAtRuntime(other, this));
        }
      }
      return results;
    }
    [_resolveMeta](metadata) {
      let token = null;
      let isOptional = false;
      let isSkipSelf = false;
      let isSelf = false;
      let isHost = false;
      for (let n = 0, l = metadata[$length]; n < dart.notNull(l); n = n + 1) {
        let annotation = metadata[$_get](n);
        if (InjectL().is(annotation)) {
          token = annotation.token;
        } else if (OptionalL().is(annotation)) {
          isOptional = true;
        } else if (SkipSelfL().is(annotation)) {
          isSkipSelf = true;
        } else if (SelfL().is(annotation)) {
          isSelf = true;
        } else if (HostL().is(annotation)) {
          isHost = true;
        } else {
          token = annotation;
        }
      }
      let result = null;
      errors.debugInjectorEnter(token);
      let orElse = isOptional ? null : injector.throwIfNotFound;
      if (isSkipSelf) {
        result = this.injectFromAncestryOptional(token, orElse);
      } else if (isSelf) {
        result = this.injectFromSelfOptional(token, orElse);
      } else if (isHost) {
        result = this.injectFromParentOptional(token, orElse);
      } else {
        result = this.provideUntyped(token, orElse);
      }
      if (core.identical(result, injector.throwIfNotFound)) {
        injector.throwsNotFound(this, token);
      }
      errors.debugInjectorLeave(token);
      return result;
    }
    useClass(clazz, opts) {
      let deps = opts && 'deps' in opts ? opts.deps : null;
      let factory = reflector.getFactory(clazz);
      return core.Function.apply(factory, this[_resolveArgs](clazz, deps));
    }
    useExisting(to) {
      return this.get(to);
    }
    useFactory(factory, opts) {
      let deps = opts && 'deps' in opts ? opts.deps : null;
      let resolvedArgs = this[_resolveArgs](factory, deps);
      if (!(dart.test(runtime$._RuntimeInjector._functionHasNoRequiredArguments(factory)) || dart.test(resolvedArgs[$isNotEmpty]))) dart.assertFailed("Could not resolve dependencies for factory function " + dart.str(factory) + ". This " + "is is usually a sign of an omitted @Injectable. Consider migrating " + "to @GeneratedInjector (and \"runApp\") or add the missing annotation " + "for the time being.", L6, 259, 9, "_functionHasNoRequiredArguments(factory) || resolvedArgs.isNotEmpty");
      return core.Function.apply(factory, resolvedArgs);
    }
    static _functionHasNoRequiredArguments($function) {
      return VoidToLvoid().is($function);
    }
    useValue(value) {
      return value;
    }
  };
  (runtime$._RuntimeInjector.new = function(_providers, _multiProviders, parent, _staticOnlyResolveAndCreate) {
    this[_instances] = new _js_helper.IdentityMap.new();
    this[_providers$] = _providers;
    this[_multiProviders$] = _multiProviders;
    this[_staticOnlyResolveAndCreate$] = _staticOnlyResolveAndCreate;
    runtime$._RuntimeInjector.__proto__.new.call(this, parent);
    if (!(parent != null)) dart.assertFailed("A parent injector is always required.", L6, 109, 12, "parent != null");
    this[_instances][$_set](dart.wrapType(InjectorL()), this);
  }).prototype = runtime$._RuntimeInjector.prototype;
  dart.addTypeTests(runtime$._RuntimeInjector);
  dart.addTypeCaches(runtime$._RuntimeInjector);
  runtime$._RuntimeInjector[dart.implements] = () => [runtime$.ReflectiveInjector, providers.RuntimeInjectorBuilder];
  dart.setMethodSignature(runtime$._RuntimeInjector, () => ({
    __proto__: dart.getMethods(runtime$._RuntimeInjector.__proto__),
    injectFromSelfOptional: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Object)], [dart.legacy(core.Object)]),
    resolveAndCreateChild: dart.fnType(dart.legacy(runtime$.ReflectiveInjector), [dart.legacy(core.List$(dart.legacy(core.Object)))]),
    resolveAndInstantiate: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_resolveArgs]: dart.fnType(dart.legacy(core.List$(dart.legacy(core.Object))), [dart.legacy(core.Object)], [dart.legacy(core.List$(dart.legacy(core.Object)))]),
    [_resolveMulti]: dart.fnType(dart.legacy(core.List$(dart.legacy(core.Object))), [dart.legacy(providers.Provider$(dart.legacy(core.Object)))]),
    [_resolveMeta]: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.List$(dart.legacy(core.Object)))]),
    useClass: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Type)], {deps: dart.legacy(core.List$(dart.legacy(core.Object)))}, {}),
    useExisting: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Object)]),
    useFactory: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Function)], {deps: dart.legacy(core.List$(dart.legacy(core.Object)))}, {}),
    useValue: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(runtime$._RuntimeInjector, L5);
  dart.setFieldSignature(runtime$._RuntimeInjector, () => ({
    __proto__: dart.getFields(runtime$._RuntimeInjector.__proto__),
    [_instances]: dart.finalFieldType(dart.legacy(core.Map)),
    [_providers$]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.Object), dart.legacy(providers.Provider$(dart.legacy(core.Object)))))),
    [_multiProviders$]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(providers.Provider$(dart.legacy(core.Object)))))),
    [_staticOnlyResolveAndCreate$]: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var providers$ = dart.privateName(runtime$, "_FlatProviders.providers");
  var multiProviders$ = dart.privateName(runtime$, "_FlatProviders.multiProviders");
  runtime$._FlatProviders = class _FlatProviders extends core.Object {
    get providers() {
      return this[providers$];
    }
    set providers(value) {
      super.providers = value;
    }
    get multiProviders() {
      return this[multiProviders$];
    }
    set multiProviders(value) {
      super.multiProviders = value;
    }
  };
  (runtime$._FlatProviders.new = function(providers, multiProviders) {
    this[providers$] = providers;
    this[multiProviders$] = multiProviders;
    ;
  }).prototype = runtime$._FlatProviders.prototype;
  dart.addTypeTests(runtime$._FlatProviders);
  dart.addTypeCaches(runtime$._FlatProviders);
  dart.setLibraryUri(runtime$._FlatProviders, L5);
  dart.setFieldSignature(runtime$._FlatProviders, () => ({
    __proto__: dart.getFields(runtime$._FlatProviders.__proto__),
    providers: dart.finalFieldType(dart.legacy(core.Map$(dart.dynamic, dart.legacy(providers.Provider$(dart.legacy(core.Object)))))),
    multiProviders: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(providers.Provider$(dart.legacy(core.Object))))))
  }));
  runtime$._isMultiProvider = function _isMultiProvider(p) {
    return dart.equals(p.multi, true) || MultiTokenL().is(p.token);
  };
  runtime$._assertProviders = function _assertProviders(providers) {
    for (let provider of providers) {
      if (provider.useClass != null) {
        reflector.getFactory(provider.useClass);
      } else if (provider.useFactory != null && provider.deps == null) {
        reflector.getDependencies(provider.useFactory);
      } else if (provider.useFactory === "__noValueProvided__" && provider.useExisting == null && TypeL().is(provider.token)) {
        reflector.getFactory(optimizations.unsafeCast(TypeL(), provider.token));
      }
    }
  };
  runtime$._throwUnsupportedProvider = function _throwUnsupportedProvider(provider) {
    dart.throw(new core.UnsupportedError.new("Could not create a provider for token \"" + dart.str(provider.token) + "\"!\n\n" + "ReflectiveInjector.resolveStaticAndCreate only supports some providers.\n" + "\n" + "* FactoryProvider (or Provider(useFactory: ...)) with deps: [ ... ] set\n" + "* ValueProvider (or Provider(useValue: ...))\n" + "* ExistingProvider (or Provider(useExisting: ...))\n" + "\n" + "Specifically, any providers that require looking up factory functions or " + "argument information for factory functions at runtime are not supported " + "since they would defeat the tree-shaking improvements of \"runApp\".\n\n" + "See https://github.com/dart-lang/angular/issues/1426 for details"));
  };
  runtime$._assertStaticProviders = function _assertStaticProviders(providers) {
    for (let provider of providers) {
      if (provider.useValue !== "__noValueProvided__") {
        continue;
      }
      if (provider.useExisting != null) {
        continue;
      }
      if (provider.useFactory !== "__noValueProvided__") {
        if (provider.deps != null) {
          continue;
        }
      }
      runtime$._throwUnsupportedProvider(provider);
    }
  };
  runtime$._flattenProviders = function _flattenProviders(providersOrLists, allProviders = null, multiProviders = null) {
    allProviders == null ? allProviders = new (IdentityMapOfObjectL$ProviderLOfObjectL()).new() : null;
    multiProviders == null ? multiProviders = JSArrayOfProviderLOfObjectL().of([]) : null;
    for (let i = 0, len = providersOrLists[$length]; i < dart.notNull(len); i = i + 1) {
      let item = providersOrLists[$_get](i);
      if (ListLOfObjectL().is(item)) {
        runtime$._flattenProviders(item, allProviders, multiProviders);
      } else if (ProviderL().is(item)) {
        if (dart.test(runtime$._isMultiProvider(item))) {
          multiProviders[$add](item);
        }
        allProviders[$_set](item.token, item);
      } else if (TypeL().is(item)) {
        allProviders[$_set](item, new (ProviderOfObjectL()).__(item, {useClass: item}));
      } else if (ModuleL().is(item)) {
        let providers = module$.internalModuleToList(item);
        runtime$._flattenProviders(providers, allProviders, multiProviders);
      } else {
        if (!false) dart.assertFailed("Unsupported: " + dart.str(item), L6, 368, 14, "false");
      }
    }
    return new runtime$._FlatProviders.new(allProviders, multiProviders);
  };
  empty.EmptyInjector = class EmptyInjector extends hierarchical.HierarchicalInjector {
    injectFromSelfOptional(token, orElse = C1 || CT.C1) {
      return token === dart.wrapType(InjectorL()) ? this : orElse;
    }
    injectFromParentOptional(token, orElse = C1 || CT.C1) {
      if (this.parent == null) {
        return orElse;
      }
      return this.parent.injectFromSelfOptional(token, orElse);
    }
    injectFromAncestryOptional(token, orElse = C1 || CT.C1) {
      if (this.parent == null) {
        return orElse;
      }
      return this.parent.provideUntyped(token, orElse);
    }
  };
  (empty.EmptyInjector.new = function(parent = null) {
    empty.EmptyInjector.__proto__.maybeEmpty.call(this, parent);
    ;
  }).prototype = empty.EmptyInjector.prototype;
  dart.addTypeTests(empty.EmptyInjector);
  dart.addTypeCaches(empty.EmptyInjector);
  dart.setMethodSignature(empty.EmptyInjector, () => ({
    __proto__: dart.getMethods(empty.EmptyInjector.__proto__),
    injectFromSelfOptional: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Object)], [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(empty.EmptyInjector, L7);
  var C2;
  reflector.registerComponent = function registerComponent(type, component) {
    reflector._components[$_set](type, component);
  };
  reflector.getComponent = function getComponent(type) {
    let component = reflector._components[$_get](type);
    if (dart.test(optimizations.isDevMode) && component == null) {
      dart.throw(new core.StateError.new("Could not find a component factory for " + dart.str(type) + "."));
    }
    return component;
  };
  reflector.registerFactory = function registerFactory(typeOrFunc, factory) {
    reflector._factories[$_set](typeOrFunc, factory);
  };
  reflector.getFactory = function getFactory(type) {
    let factory = reflector._factories[$_get](type);
    if (dart.test(optimizations.isDevMode) && factory == null) {
      if (dart.test(reflector._factories[$isEmpty])) {
        dart.throw(new core.StateError.new("Could not find a factory for " + dart.str(type) + ", there were no factories of any " + "type found. The likely causes is that you are using the newer " + "runApp() semantics, which does not support runtime lookups of " + "factories (and does not support ReflectiveInjector) *or* " + "AngularDart code generation was never invoked (either due to a " + "misconfiguration of Bazel or Build Runner or a missing invocation " + "of `initReflector()` in your `main.dart`)."));
      }
      dart.throw(new core.StateError.new("Could not find a factory for " + dart.str(type) + ". Either a provider" + " was not set, *or* AngularDart code generation was never invoked on " + "the depending package (either due to a misconfiguration of Bazel or " + "Build Runner)."));
    }
    return factory;
  };
  reflector.registerDependencies = function registerDependencies(invokable, dependencies) {
    reflector._dependencies[$_set](invokable, dependencies);
  };
  reflector.getDependencies = function getDependencies(object) {
    let t0;
    t0 = reflector._dependencies[$_get](object);
    return t0 == null ? C2 || CT.C2 : t0;
  };
  dart.defineLazy(reflector, {
    /*reflector._components*/get _components() {
      return new (LinkedMapOfObjectL$dynamic()).new();
    },
    /*reflector._factories*/get _factories() {
      return new (LinkedMapOfObjectL$FunctionL()).new();
    },
    /*reflector._dependencies*/get _dependencies() {
      return new (LinkedMapOfObjectL$ListLOfListLOfObjectL()).new();
    }
  }, true);
  var token$ = dart.privateName(decorators, "Inject.token");
  decorators.Inject = class Inject extends core.Object {
    get token() {
      return this[token$];
    }
    set token(value) {
      super.token = value;
    }
    toString() {
      return "@Inject(" + dart.str(this.token) + ")";
    }
  };
  (decorators.Inject.new = function(token) {
    this[token$] = token;
    ;
  }).prototype = decorators.Inject.prototype;
  dart.addTypeTests(decorators.Inject);
  dart.addTypeCaches(decorators.Inject);
  dart.setMethodSignature(decorators.Inject, () => ({
    __proto__: dart.getMethods(decorators.Inject.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(decorators.Inject, L8);
  dart.setFieldSignature(decorators.Inject, () => ({
    __proto__: dart.getFields(decorators.Inject.__proto__),
    token: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(decorators.Inject, ['toString']);
  decorators.Injectable = class Injectable extends core.Object {};
  (decorators.Injectable.new = function() {
    ;
  }).prototype = decorators.Injectable.prototype;
  dart.addTypeTests(decorators.Injectable);
  dart.addTypeCaches(decorators.Injectable);
  dart.setLibraryUri(decorators.Injectable, L8);
  decorators.Optional = class Optional extends core.Object {};
  (decorators.Optional.new = function() {
    ;
  }).prototype = decorators.Optional.prototype;
  dart.addTypeTests(decorators.Optional);
  dart.addTypeCaches(decorators.Optional);
  dart.setLibraryUri(decorators.Optional, L8);
  decorators.Self = class Self extends core.Object {};
  (decorators.Self.new = function() {
    ;
  }).prototype = decorators.Self.prototype;
  dart.addTypeTests(decorators.Self);
  dart.addTypeCaches(decorators.Self);
  dart.setLibraryUri(decorators.Self, L8);
  decorators.SkipSelf = class SkipSelf extends core.Object {};
  (decorators.SkipSelf.new = function() {
    ;
  }).prototype = decorators.SkipSelf.prototype;
  dart.addTypeTests(decorators.SkipSelf);
  dart.addTypeCaches(decorators.SkipSelf);
  dart.setLibraryUri(decorators.SkipSelf, L8);
  decorators.Host = class Host extends core.Object {};
  (decorators.Host.new = function() {
    ;
  }).prototype = decorators.Host.prototype;
  dart.addTypeTests(decorators.Host);
  dart.addTypeCaches(decorators.Host);
  dart.setLibraryUri(decorators.Host, L8);
  providers.RuntimeInjectorBuilder = class RuntimeInjectorBuilder extends core.Object {};
  (providers.RuntimeInjectorBuilder.new = function() {
    ;
  }).prototype = providers.RuntimeInjectorBuilder.prototype;
  dart.addTypeTests(providers.RuntimeInjectorBuilder);
  dart.addTypeCaches(providers.RuntimeInjectorBuilder);
  dart.setLibraryUri(providers.RuntimeInjectorBuilder, L9);
  var _buildAtRuntime = dart.privateName(providers, "_buildAtRuntime");
  var _listOfMulti = dart.privateName(providers, "_listOfMulti");
  const _is_Provider_default = Symbol('_is_Provider_default');
  var token$0 = dart.privateName(providers, "Provider.token");
  var useClass$ = dart.privateName(providers, "Provider.useClass");
  var useValue$ = dart.privateName(providers, "Provider.useValue");
  var useExisting$ = dart.privateName(providers, "Provider.useExisting");
  var useFactory$ = dart.privateName(providers, "Provider.useFactory");
  var deps$ = dart.privateName(providers, "Provider.deps");
  var multi$ = dart.privateName(providers, "Provider.multi");
  providers.Provider$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var JSArrayOfTL = () => (JSArrayOfTL = dart.constFn(_interceptors.JSArray$(TL())))();
    class Provider extends core.Object {
      get token() {
        return this[token$0];
      }
      set token(value) {
        super.token = value;
      }
      get useClass() {
        return this[useClass$];
      }
      set useClass(value) {
        super.useClass = value;
      }
      get useValue() {
        return this[useValue$];
      }
      set useValue(value) {
        super.useValue = value;
      }
      get useExisting() {
        return this[useExisting$];
      }
      set useExisting(value) {
        super.useExisting = value;
      }
      get useFactory() {
        return this[useFactory$];
      }
      set useFactory(value) {
        super.useFactory = value;
      }
      get deps() {
        return this[deps$];
      }
      set deps(value) {
        super.deps = value;
      }
      get multi() {
        return this[multi$];
      }
      set multi(value) {
        super.multi = value;
      }
      [_buildAtRuntime](builder) {
        let t0;
        if (this.useValue !== "__noValueProvided__") {
          return builder.useValue(this.useValue);
        }
        if (this.useFactory != null) {
          return builder.useFactory(this.useFactory, {deps: this.deps});
        }
        if (this.useExisting != null) {
          return builder.useExisting(this.useExisting);
        }
        return builder.useClass((t0 = this.useClass, t0 == null ? optimizations.unsafeCast(TypeL(), this.token) : t0), {deps: this.deps});
      }
      [_listOfMulti]() {
        return JSArrayOfTL().of([]);
      }
    }
    (Provider.__ = function(token, opts) {
      let useClass = opts && 'useClass' in opts ? opts.useClass : null;
      let useValue = opts && 'useValue' in opts ? opts.useValue : "__noValueProvided__";
      let useExisting = opts && 'useExisting' in opts ? opts.useExisting : null;
      let useFactory = opts && 'useFactory' in opts ? opts.useFactory : null;
      let deps = opts && 'deps' in opts ? opts.deps : null;
      let multi = opts && 'multi' in opts ? opts.multi : false;
      this[token$0] = token;
      this[useClass$] = useClass;
      this[useValue$] = useValue;
      this[useExisting$] = useExisting;
      this[useFactory$] = useFactory;
      this[deps$] = deps;
      this[multi$] = multi;
      ;
    }).prototype = Provider.prototype;
    dart.addTypeTests(Provider);
    Provider.prototype[_is_Provider_default] = true;
    dart.addTypeCaches(Provider);
    dart.setMethodSignature(Provider, () => ({
      __proto__: dart.getMethods(Provider.__proto__),
      [_buildAtRuntime]: dart.fnType(dart.legacy(core.Object), [dart.legacy(providers.RuntimeInjectorBuilder)]),
      [_listOfMulti]: dart.fnType(dart.legacy(core.List$(dart.legacy(T))), [])
    }));
    dart.setLibraryUri(Provider, L9);
    dart.setFieldSignature(Provider, () => ({
      __proto__: dart.getFields(Provider.__proto__),
      token: dart.finalFieldType(dart.legacy(core.Object)),
      useClass: dart.finalFieldType(dart.legacy(core.Type)),
      useValue: dart.finalFieldType(dart.legacy(core.Object)),
      useExisting: dart.finalFieldType(dart.legacy(core.Object)),
      useFactory: dart.finalFieldType(dart.legacy(core.Function)),
      deps: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object)))),
      multi: dart.finalFieldType(dart.legacy(core.bool))
    }));
    return Provider;
  });
  providers.Provider = providers.Provider$();
  dart.addTypeTests(providers.Provider, _is_Provider_default);
  const _is_ClassProvider_default = Symbol('_is_ClassProvider_default');
  providers.ClassProvider$ = dart.generic(T => {
    class ClassProvider extends providers.Provider$(dart.legacy(T)) {}
    (ClassProvider.__ = function(token, opts) {
      let t0;
      let useClass = opts && 'useClass' in opts ? opts.useClass : null;
      let multi = opts && 'multi' in opts ? opts.multi : false;
      ClassProvider.__proto__.__.call(this, token, {useClass: TypeL().as((t0 = useClass, t0 == null ? token : t0)), multi: multi});
      ;
    }).prototype = ClassProvider.prototype;
    dart.addTypeTests(ClassProvider);
    ClassProvider.prototype[_is_ClassProvider_default] = true;
    dart.addTypeCaches(ClassProvider);
    dart.setLibraryUri(ClassProvider, L9);
    return ClassProvider;
  });
  providers.ClassProvider = providers.ClassProvider$();
  dart.addTypeTests(providers.ClassProvider, _is_ClassProvider_default);
  const _is_ExistingProvider_default = Symbol('_is_ExistingProvider_default');
  providers.ExistingProvider$ = dart.generic(T => {
    class ExistingProvider extends providers.Provider$(dart.legacy(T)) {}
    (ExistingProvider.__ = function(token, useExisting, opts) {
      let multi = opts && 'multi' in opts ? opts.multi : null;
      ExistingProvider.__proto__.__.call(this, token, {useExisting: useExisting, multi: multi});
      ;
    }).prototype = ExistingProvider.prototype;
    dart.addTypeTests(ExistingProvider);
    ExistingProvider.prototype[_is_ExistingProvider_default] = true;
    dart.addTypeCaches(ExistingProvider);
    dart.setLibraryUri(ExistingProvider, L9);
    return ExistingProvider;
  });
  providers.ExistingProvider = providers.ExistingProvider$();
  dart.addTypeTests(providers.ExistingProvider, _is_ExistingProvider_default);
  const _is_FactoryProvider_default = Symbol('_is_FactoryProvider_default');
  providers.FactoryProvider$ = dart.generic(T => {
    class FactoryProvider extends providers.Provider$(dart.legacy(T)) {}
    (FactoryProvider.__ = function(token, useFactory, opts) {
      let multi = opts && 'multi' in opts ? opts.multi : null;
      let deps = opts && 'deps' in opts ? opts.deps : null;
      FactoryProvider.__proto__.__.call(this, token, {useFactory: useFactory, multi: multi, deps: deps});
      ;
    }).prototype = FactoryProvider.prototype;
    dart.addTypeTests(FactoryProvider);
    FactoryProvider.prototype[_is_FactoryProvider_default] = true;
    dart.addTypeCaches(FactoryProvider);
    dart.setLibraryUri(FactoryProvider, L9);
    return FactoryProvider;
  });
  providers.FactoryProvider = providers.FactoryProvider$();
  dart.addTypeTests(providers.FactoryProvider, _is_FactoryProvider_default);
  const _is_ValueProvider_default = Symbol('_is_ValueProvider_default');
  providers.ValueProvider$ = dart.generic(T => {
    class ValueProvider extends providers.Provider$(dart.legacy(T)) {}
    (ValueProvider.__ = function(token, useValue, opts) {
      let multi = opts && 'multi' in opts ? opts.multi : null;
      ValueProvider.__proto__.__.call(this, token, {useValue: useValue, multi: multi});
      ;
    }).prototype = ValueProvider.prototype;
    dart.addTypeTests(ValueProvider);
    ValueProvider.prototype[_is_ValueProvider_default] = true;
    dart.addTypeCaches(ValueProvider);
    dart.setLibraryUri(ValueProvider, L9);
    return ValueProvider;
  });
  providers.ValueProvider = providers.ValueProvider$();
  dart.addTypeTests(providers.ValueProvider, _is_ValueProvider_default);
  providers.provide = function provide(T, token, opts) {
    let useClass = opts && 'useClass' in opts ? opts.useClass : null;
    let useValue = opts && 'useValue' in opts ? opts.useValue : "__noValueProvided__";
    let useExisting = opts && 'useExisting' in opts ? opts.useExisting : null;
    let useFactory = opts && 'useFactory' in opts ? opts.useFactory : null;
    let deps = opts && 'deps' in opts ? opts.deps : null;
    let multi = opts && 'multi' in opts ? opts.multi : null;
    return new (providers.Provider$(dart.legacy(T))).__(token, {useClass: useClass, useValue: useValue, useExisting: useExisting, useFactory: useFactory, deps: deps, multi: multi});
  };
  providers.buildAtRuntime = function buildAtRuntime(provider, builder) {
    return provider[_buildAtRuntime](builder);
  };
  providers.listOfMulti = function listOfMulti(provider) {
    let token = provider.token;
    if (MultiTokenL().is(token)) {
      return opaque_token.listOfMultiToken(ObjectL(), token);
    }
    return provider[_listOfMulti]();
  };
  dart.defineLazy(providers, {
    /*providers.noValueProvided*/get noValueProvided() {
      return "__noValueProvided__";
    }
  }, true);
  var C3;
  var C4;
  var include$ = dart.privateName(module$, "Module.include");
  var provide$ = dart.privateName(module$, "Module.provide");
  module$.Module = class Module extends core.Object {
    get include() {
      return this[include$];
    }
    set include(value) {
      super.include = value;
    }
    get provide() {
      return this[provide$];
    }
    set provide(value) {
      super.provide = value;
    }
  };
  (module$.Module.__ = function(opts) {
    let include = opts && 'include' in opts ? opts.include : C3 || CT.C3;
    let provide = opts && 'provide' in opts ? opts.provide : C4 || CT.C4;
    this[include$] = include;
    this[provide$] = provide;
    ;
  }).prototype = module$.Module.prototype;
  dart.addTypeTests(module$.Module);
  dart.addTypeCaches(module$.Module);
  dart.setLibraryUri(module$.Module, L10);
  dart.setFieldSignature(module$.Module, () => ({
    __proto__: dart.getFields(module$.Module.__proto__),
    include: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(module$.Module)))),
    provide: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(providers.Provider$(dart.legacy(core.Object))))))
  }));
  module$.internalModuleToList = function internalModuleToList(module) {
    let result = JSArrayOfProviderLOfObjectL().of([]);
    let includes = module.include;
    for (let i = 0, l = includes[$length]; i < dart.notNull(l); i = i + 1) {
      result[$addAll](module$.internalModuleToList(includes[$_get](i)));
    }
    let provides = module.provide;
    for (let i = 0, l = provides[$length]; i < dart.notNull(l); i = i + 1) {
      result[$add](provides[$_get](i));
    }
    return result;
  };
  errors.InjectionError = class InjectionError extends core.AssertionError {};
  (errors.InjectionError.__ = function() {
    errors.InjectionError.__proto__.new.call(this);
    ;
  }).prototype = errors.InjectionError.prototype;
  dart.addTypeTests(errors.InjectionError);
  dart.addTypeCaches(errors.InjectionError);
  dart.setLibraryUri(errors.InjectionError, L11);
  var C5;
  var token$1 = dart.privateName(errors, "NoProviderError.token");
  var path = dart.privateName(errors, "NoProviderError.path");
  errors.NoProviderError = class NoProviderError extends errors.InjectionError {
    get token() {
      return this[token$1];
    }
    set token(value) {
      super.token = value;
    }
    get path() {
      return this[path];
    }
    set path(value) {
      super.path = value;
    }
    static _withAdjacentDeduped(input, token) {
      if (input == null) {
        return C5 || CT.C5;
      }
      let output = JSArrayOfObjectL().of([]);
      let lastElement = new core.Object.new();
      for (let element of input) {
        if (!core.identical(lastElement, element)) {
          output[$add](lastElement = element);
        }
      }
      if (dart.test(output[$isNotEmpty])) {
        output[$removeLast]();
      }
      return output;
    }
    toString() {
      return dart.test(this.path[$isEmpty]) ? errors._noProviderError(this.token) : dart.notNull(errors._noProviderError(this.token)) + (": " + dart.str(this.path[$join](" -> ")) + " -> " + dart.str(this.token) + ".\n" + "**NOTE**: This path is not exhaustive, and nodes may be missing " + "in between the \"->\" delimiters. There is ongoing work to improve " + "this error message and include all the nodes where possible. ");
    }
  };
  (errors.NoProviderError.__ = function(token, stack) {
    this[token$1] = token;
    this[path] = errors.NoProviderError._withAdjacentDeduped(stack, token);
    errors.NoProviderError.__proto__.__.call(this);
    ;
  }).prototype = errors.NoProviderError.prototype;
  dart.addTypeTests(errors.NoProviderError);
  dart.addTypeCaches(errors.NoProviderError);
  dart.setMethodSignature(errors.NoProviderError, () => ({
    __proto__: dart.getMethods(errors.NoProviderError.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(errors.NoProviderError, L11);
  dart.setFieldSignature(errors.NoProviderError, () => ({
    __proto__: dart.getFields(errors.NoProviderError.__proto__),
    token: dart.finalFieldType(dart.legacy(core.Object)),
    path: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object))))
  }));
  dart.defineExtensionMethods(errors.NoProviderError, ['toString']);
  errors.debugInjectorEnter = function debugInjectorEnter(token) {
    if (dart.test(optimizations.isDevMode)) {
      if (errors._tokenStack == null) {
        errors._tokenStack = JSArrayOfObjectL().of([token]);
      } else {
        errors._tokenStack[$add](token);
      }
    }
  };
  errors.debugInjectorLeave = function debugInjectorLeave(token) {
    if (dart.test(optimizations.isDevMode)) {
      let removed = errors._tokenStack[$removeLast]();
      if (!core.identical(removed, token)) dart.assertFailed(null, L12, 36, 12, "identical(removed, token)");
    }
  };
  errors.debugInjectorWrap = function debugInjectorWrap(T, token, wrap) {
    errors.debugInjectorEnter(token);
    let result = wrap();
    errors.debugInjectorLeave(token);
    return result;
  };
  errors.noProviderError = function noProviderError(token) {
    if (dart.test(optimizations.isDevMode)) {
      let error = new errors.NoProviderError.__(token, errors._tokenStack);
      errors._tokenStack = null;
      return error;
    }
    return new core.ArgumentError.new(errors._noProviderError(token));
  };
  errors._noProviderError = function _noProviderError(token) {
    return "No provider found for " + dart.str(token);
  };
  dart.defineLazy(errors, {
    /*errors._tokenStack*/get _tokenStack() {
      return null;
    },
    set _tokenStack(_) {}
  }, true);
  var _providers = dart.privateName(map, "_providers");
  var _providers$0 = dart.privateName(map, "MapInjector._providers");
  map.MapInjector = class MapInjector extends hierarchical.HierarchicalInjector {
    get [_providers]() {
      return this[_providers$0];
    }
    set [_providers](value) {
      super[_providers] = value;
    }
    injectFromSelfOptional(token, orElse = C1 || CT.C1) {
      let result = this[_providers][$_get](token);
      if (result == null) {
        if (!!dart.test(this[_providers][$containsKey](token))) dart.assertFailed("Value for " + dart.str(token) + " should not be null for Injector.map", L13, 26, 14, "!_providers.containsKey(token)");
        if (token === dart.wrapType(InjectorL())) {
          return this;
        }
        result = orElse;
      }
      return result;
    }
  };
  (map.MapInjector.new = function(_providers, parent = C0 || CT.C0) {
    this[_providers$0] = _providers;
    map.MapInjector.__proto__.new.call(this, parent);
    ;
  }).prototype = map.MapInjector.prototype;
  dart.addTypeTests(map.MapInjector);
  dart.addTypeCaches(map.MapInjector);
  dart.setMethodSignature(map.MapInjector, () => ({
    __proto__: dart.getMethods(map.MapInjector.__proto__),
    injectFromSelfOptional: dart.fnType(dart.legacy(core.Object), [dart.legacy(core.Object)], [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(map.MapInjector, L14);
  dart.setFieldSignature(map.MapInjector, () => ({
    __proto__: dart.getFields(map.MapInjector.__proto__),
    [_providers]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.Object), dart.legacy(core.Object))))
  }));
  var C7;
  var IterableEquality__elementEquality = dart.privateName(equality, "IterableEquality._elementEquality");
  var C6;
  change_detection_util._DevModeEquality = class _DevModeEquality extends equality.DefaultEquality$(dart.legacy(core.Object)) {
    equals(a, b) {
      if (IterableLOfObjectL().is(a) && IterableLOfObjectL().is(b)) {
        return (C6 || CT.C6).equals(a, b);
      } else if (!IterableLOfObjectL().is(a) && !dart.test(lang.isPrimitive(a)) && !IterableLOfObjectL().is(b) && !dart.test(lang.isPrimitive(b))) {
        return true;
      } else {
        return core.identical(a, b);
      }
    }
  };
  (change_detection_util._DevModeEquality.new = function() {
    change_detection_util._DevModeEquality.__proto__.new.call(this);
    ;
  }).prototype = change_detection_util._DevModeEquality.prototype;
  dart.addTypeTests(change_detection_util._DevModeEquality);
  dart.addTypeCaches(change_detection_util._DevModeEquality);
  dart.setLibraryUri(change_detection_util._DevModeEquality, L15);
  var previousValue$ = dart.privateName(change_detection_util, "SimpleChange.previousValue");
  var currentValue$ = dart.privateName(change_detection_util, "SimpleChange.currentValue");
  change_detection_util.SimpleChange = class SimpleChange extends core.Object {
    get previousValue() {
      return this[previousValue$];
    }
    set previousValue(value) {
      this[previousValue$] = value;
    }
    get currentValue() {
      return this[currentValue$];
    }
    set currentValue(value) {
      this[currentValue$] = value;
    }
  };
  (change_detection_util.SimpleChange.new = function(previousValue, currentValue) {
    this[previousValue$] = previousValue;
    this[currentValue$] = currentValue;
    ;
  }).prototype = change_detection_util.SimpleChange.prototype;
  dart.addTypeTests(change_detection_util.SimpleChange);
  dart.addTypeCaches(change_detection_util.SimpleChange);
  dart.setLibraryUri(change_detection_util.SimpleChange, L15);
  dart.setFieldSignature(change_detection_util.SimpleChange, () => ({
    __proto__: dart.getFields(change_detection_util.SimpleChange.__proto__),
    previousValue: dart.fieldType(dart.dynamic),
    currentValue: dart.fieldType(dart.dynamic)
  }));
  change_detection_util.devModeEqual = function devModeEqual(a, b) {
    return (C7 || CT.C7).equals(a, b);
  };
  lang.jsSplit = function jsSplit(s, regExp) {
    let parts = JSArrayOfStringL().of([]);
    let lastEnd = 0;
    for (let match of regExp.allMatches(s)) {
      parts[$add](s[$substring](lastEnd, match.start));
      lastEnd = match.end;
      for (let i = 0, len = match.groupCount; i < dart.notNull(len); i = i + 1) {
        parts[$add](match.group(i + 1));
      }
    }
    parts[$add](s[$substring](lastEnd));
    return parts;
  };
  lang.isPrimitive = function isPrimitive(obj) {
    return numL().is(obj) || boolL().is(obj) || obj == null || StringL().is(obj);
  };
  var _name$ = dart.privateName(lifecycle_hooks, "_name");
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  var C15;
  var C16;
  var C17;
  lifecycle_hooks.LifecycleHooks = class LifecycleHooks extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (lifecycle_hooks.LifecycleHooks.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = lifecycle_hooks.LifecycleHooks.prototype;
  dart.addTypeTests(lifecycle_hooks.LifecycleHooks);
  dart.addTypeCaches(lifecycle_hooks.LifecycleHooks);
  dart.setMethodSignature(lifecycle_hooks.LifecycleHooks, () => ({
    __proto__: dart.getMethods(lifecycle_hooks.LifecycleHooks.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(lifecycle_hooks.LifecycleHooks, L16);
  dart.setFieldSignature(lifecycle_hooks.LifecycleHooks, () => ({
    __proto__: dart.getFields(lifecycle_hooks.LifecycleHooks.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(lifecycle_hooks.LifecycleHooks, ['toString']);
  lifecycle_hooks.LifecycleHooks.onInit = C8 || CT.C8;
  lifecycle_hooks.LifecycleHooks.onDestroy = C9 || CT.C9;
  lifecycle_hooks.LifecycleHooks.doCheck = C10 || CT.C10;
  lifecycle_hooks.LifecycleHooks.onChanges = C11 || CT.C11;
  lifecycle_hooks.LifecycleHooks.afterChanges = C12 || CT.C12;
  lifecycle_hooks.LifecycleHooks.afterContentInit = C13 || CT.C13;
  lifecycle_hooks.LifecycleHooks.afterContentChecked = C14 || CT.C14;
  lifecycle_hooks.LifecycleHooks.afterViewInit = C15 || CT.C15;
  lifecycle_hooks.LifecycleHooks.afterViewChecked = C16 || CT.C16;
  lifecycle_hooks.LifecycleHooks.values = C17 || CT.C17;
  lifecycle_hooks.OnChanges = class OnChanges extends core.Object {};
  (lifecycle_hooks.OnChanges.new = function() {
    ;
  }).prototype = lifecycle_hooks.OnChanges.prototype;
  dart.addTypeTests(lifecycle_hooks.OnChanges);
  dart.addTypeCaches(lifecycle_hooks.OnChanges);
  dart.setLibraryUri(lifecycle_hooks.OnChanges, L16);
  lifecycle_hooks.AfterChanges = class AfterChanges extends core.Object {};
  (lifecycle_hooks.AfterChanges.new = function() {
    ;
  }).prototype = lifecycle_hooks.AfterChanges.prototype;
  dart.addTypeTests(lifecycle_hooks.AfterChanges);
  dart.addTypeCaches(lifecycle_hooks.AfterChanges);
  dart.setLibraryUri(lifecycle_hooks.AfterChanges, L16);
  lifecycle_hooks.OnInit = class OnInit extends core.Object {};
  (lifecycle_hooks.OnInit.new = function() {
    ;
  }).prototype = lifecycle_hooks.OnInit.prototype;
  dart.addTypeTests(lifecycle_hooks.OnInit);
  dart.addTypeCaches(lifecycle_hooks.OnInit);
  dart.setLibraryUri(lifecycle_hooks.OnInit, L16);
  lifecycle_hooks.OnDestroy = class OnDestroy extends core.Object {};
  (lifecycle_hooks.OnDestroy.new = function() {
    ;
  }).prototype = lifecycle_hooks.OnDestroy.prototype;
  dart.addTypeTests(lifecycle_hooks.OnDestroy);
  dart.addTypeCaches(lifecycle_hooks.OnDestroy);
  dart.setLibraryUri(lifecycle_hooks.OnDestroy, L16);
  lifecycle_hooks.DoCheck = class DoCheck extends core.Object {};
  (lifecycle_hooks.DoCheck.new = function() {
    ;
  }).prototype = lifecycle_hooks.DoCheck.prototype;
  dart.addTypeTests(lifecycle_hooks.DoCheck);
  dart.addTypeCaches(lifecycle_hooks.DoCheck);
  dart.setLibraryUri(lifecycle_hooks.DoCheck, L16);
  lifecycle_hooks.AfterContentInit = class AfterContentInit extends core.Object {};
  (lifecycle_hooks.AfterContentInit.new = function() {
    ;
  }).prototype = lifecycle_hooks.AfterContentInit.prototype;
  dart.addTypeTests(lifecycle_hooks.AfterContentInit);
  dart.addTypeCaches(lifecycle_hooks.AfterContentInit);
  dart.setLibraryUri(lifecycle_hooks.AfterContentInit, L16);
  lifecycle_hooks.AfterContentChecked = class AfterContentChecked extends core.Object {};
  (lifecycle_hooks.AfterContentChecked.new = function() {
    ;
  }).prototype = lifecycle_hooks.AfterContentChecked.prototype;
  dart.addTypeTests(lifecycle_hooks.AfterContentChecked);
  dart.addTypeCaches(lifecycle_hooks.AfterContentChecked);
  dart.setLibraryUri(lifecycle_hooks.AfterContentChecked, L16);
  lifecycle_hooks.AfterViewInit = class AfterViewInit extends core.Object {};
  (lifecycle_hooks.AfterViewInit.new = function() {
    ;
  }).prototype = lifecycle_hooks.AfterViewInit.prototype;
  dart.addTypeTests(lifecycle_hooks.AfterViewInit);
  dart.addTypeCaches(lifecycle_hooks.AfterViewInit);
  dart.setLibraryUri(lifecycle_hooks.AfterViewInit, L16);
  lifecycle_hooks.AfterViewChecked = class AfterViewChecked extends core.Object {};
  (lifecycle_hooks.AfterViewChecked.new = function() {
    ;
  }).prototype = lifecycle_hooks.AfterViewChecked.prototype;
  dart.addTypeTests(lifecycle_hooks.AfterViewChecked);
  dart.addTypeCaches(lifecycle_hooks.AfterViewChecked);
  dart.setLibraryUri(lifecycle_hooks.AfterViewChecked, L16);
  const _is_Typed_default = Symbol('_is_Typed_default');
  var on$ = dart.privateName(typed, "Typed.on");
  var typeArguments$ = dart.privateName(typed, "Typed.typeArguments");
  typed.Typed$ = dart.generic(T => {
    class Typed extends core.Object {
      get on() {
        return this[on$];
      }
      set on(value) {
        super.on = value;
      }
      get typeArguments() {
        return this[typeArguments$];
      }
      set typeArguments(value) {
        super.typeArguments = value;
      }
    }
    (Typed.new = function(opts) {
      let on = opts && 'on' in opts ? opts.on : null;
      this[on$] = on;
      this[typeArguments$] = null;
      ;
    }).prototype = Typed.prototype;
    (Typed.of = function(typeArguments, opts) {
      let on = opts && 'on' in opts ? opts.on : null;
      this[typeArguments$] = typeArguments;
      this[on$] = on;
      ;
    }).prototype = Typed.prototype;
    dart.addTypeTests(Typed);
    Typed.prototype[_is_Typed_default] = true;
    dart.addTypeCaches(Typed);
    dart.setLibraryUri(Typed, L17);
    dart.setFieldSignature(Typed, () => ({
      __proto__: dart.getFields(Typed.__proto__),
      on: dart.finalFieldType(dart.legacy(core.String)),
      typeArguments: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object))))
    }));
    return Typed;
  });
  typed.Typed = typed.Typed$();
  dart.addTypeTests(typed.Typed, _is_Typed_default);
  var _name$0 = dart.privateName(view, "_name");
  var C18;
  var C19;
  var C20;
  view.ViewEncapsulation = class ViewEncapsulation extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (view.ViewEncapsulation.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = view.ViewEncapsulation.prototype;
  dart.addTypeTests(view.ViewEncapsulation);
  dart.addTypeCaches(view.ViewEncapsulation);
  dart.setMethodSignature(view.ViewEncapsulation, () => ({
    __proto__: dart.getMethods(view.ViewEncapsulation.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(view.ViewEncapsulation, L18);
  dart.setFieldSignature(view.ViewEncapsulation, () => ({
    __proto__: dart.getFields(view.ViewEncapsulation.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$0]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(view.ViewEncapsulation, ['toString']);
  view.ViewEncapsulation.Emulated = C18 || CT.C18;
  view.ViewEncapsulation.None = C19 || CT.C19;
  view.ViewEncapsulation.values = C20 || CT.C20;
  pipe_transform.PipeTransform = class PipeTransform extends core.Object {};
  (pipe_transform.PipeTransform.new = function() {
    ;
  }).prototype = pipe_transform.PipeTransform.prototype;
  dart.addTypeTests(pipe_transform.PipeTransform);
  dart.addTypeCaches(pipe_transform.PipeTransform);
  dart.setLibraryUri(pipe_transform.PipeTransform, L19);
  var _records = dart.privateName(default_keyvalue_differ, "_records");
  var _mapHead = dart.privateName(default_keyvalue_differ, "_mapHead");
  var _appendAfter = dart.privateName(default_keyvalue_differ, "_appendAfter");
  var _previousMapHead = dart.privateName(default_keyvalue_differ, "_previousMapHead");
  var _changesHead = dart.privateName(default_keyvalue_differ, "_changesHead");
  var _changesTail = dart.privateName(default_keyvalue_differ, "_changesTail");
  var _additionsHead = dart.privateName(default_keyvalue_differ, "_additionsHead");
  var _additionsTail = dart.privateName(default_keyvalue_differ, "_additionsTail");
  var _removalsHead = dart.privateName(default_keyvalue_differ, "_removalsHead");
  var _nextChanged = dart.privateName(default_keyvalue_differ, "_nextChanged");
  var _nextAdded = dart.privateName(default_keyvalue_differ, "_nextAdded");
  var _next = dart.privateName(default_keyvalue_differ, "_next");
  var _reset = dart.privateName(default_keyvalue_differ, "_reset");
  var _addToAdditions = dart.privateName(default_keyvalue_differ, "_addToAdditions");
  var _prev = dart.privateName(default_keyvalue_differ, "_prev");
  var _maybeAddToChanges = dart.privateName(default_keyvalue_differ, "_maybeAddToChanges");
  var _getOrCreateRecord = dart.privateName(default_keyvalue_differ, "_getOrCreateRecord");
  var _insertBeforeOrAppend = dart.privateName(default_keyvalue_differ, "_insertBeforeOrAppend");
  var _addToChanges = dart.privateName(default_keyvalue_differ, "_addToChanges");
  var _nextPrevious = dart.privateName(default_keyvalue_differ, "_nextPrevious");
  default_keyvalue_differ.DefaultKeyValueDiffer = class DefaultKeyValueDiffer extends core.Object {
    get isDirty() {
      return this[_additionsHead] != null || this[_changesHead] != null || this[_removalsHead] != null;
    }
    forEachChangedItem(fn) {
      for (let record = this[_changesHead]; record != null; record = record[_nextChanged]) {
        fn(record);
      }
    }
    forEachAddedItem(fn) {
      for (let record = this[_additionsHead]; record != null; record = record[_nextAdded]) {
        fn(record);
      }
    }
    forEachRemovedItem(fn) {
      for (let record = this[_removalsHead]; record != null; record = record[_next]) {
        fn(record);
      }
    }
    diff(map) {
      map == null ? map = new (LinkedMapOfObjectL$ObjectL()).new() : null;
      if (!MapLOfObjectL$ObjectL().is(map)) {
        dart.throw(new core.StateError.new("Error trying to diff '" + dart.str(map) + "'"));
      }
      if (dart.test(this.check(map))) {
        return this;
      } else {
        return null;
      }
    }
    check(map) {
      this[_reset]();
      if (this[_mapHead] == null) {
        map[$forEach](dart.fn((key, value) => {
          let t0;
          let record = (t0 = new default_keyvalue_differ.KeyValueChangeRecord.new(key), (() => {
            t0.currentValue = value;
            return t0;
          })());
          this[_records][$_set](key, record);
          this[_addToAdditions](record);
          if (this[_appendAfter] == null) {
            this[_mapHead] = record;
          } else {
            record[_prev] = this[_appendAfter];
            this[_appendAfter][_next] = record;
          }
          this[_appendAfter] = record;
        }, ObjectLAndObjectLToNullN()));
        return this[_mapHead] != null;
      }
      let insertBefore = this[_mapHead];
      map[$forEach](dart.fn((key, value) => {
        let t0;
        if (dart.equals((t0 = insertBefore, t0 == null ? null : t0.key), key)) {
          this[_maybeAddToChanges](insertBefore, value);
          this[_appendAfter] = insertBefore;
          insertBefore = insertBefore[_next];
        } else {
          let record = this[_getOrCreateRecord](key, value);
          insertBefore = this[_insertBeforeOrAppend](insertBefore, record);
        }
      }, ObjectLAndObjectLToNullN()));
      if (insertBefore != null) {
        this[_removalsHead] = insertBefore;
        for (let record = insertBefore; record != null; record = record[_next]) {
          this[_records][$remove](record.key);
          record.previousValue = record.currentValue;
          record.currentValue = null;
        }
        if (dart.equals(this[_removalsHead], this[_mapHead])) {
          this[_mapHead] = null;
        } else {
          this[_removalsHead][_prev][_next] = null;
        }
      }
      return this.isDirty;
    }
    [_insertBeforeOrAppend](before, record) {
      let t0;
      if (before != null) {
        record[_next] = before;
        record[_prev] = before[_prev];
        t0 = before[_prev];
        t0 == null ? null : t0[_next] = record;
        before[_prev] = record;
        if (dart.equals(before, this[_mapHead])) {
          this[_mapHead] = record;
        }
        this[_appendAfter] = before;
        return before;
      }
      if (this[_appendAfter] != null) {
        this[_appendAfter][_next] = record;
        record[_prev] = this[_appendAfter];
      } else {
        this[_mapHead] = record;
      }
      this[_appendAfter] = record;
      return null;
    }
    [_getOrCreateRecord](key, value) {
      let t0, t0$, t0$0;
      if (dart.test(this[_records][$containsKey](key))) {
        let record = this[_records][$_get](key);
        this[_maybeAddToChanges](record, value);
        t0 = record[_prev];
        t0 == null ? null : t0[_next] = record[_next];
        t0$ = record[_next];
        t0$ == null ? null : t0$[_prev] = record[_prev];
        record[_prev] = null;
        record[_next] = null;
        return record;
      }
      let record = (t0$0 = new default_keyvalue_differ.KeyValueChangeRecord.new(key), (() => {
        t0$0.currentValue = value;
        return t0$0;
      })());
      this[_records][$_set](key, record);
      this[_addToAdditions](record);
      return record;
    }
    [_maybeAddToChanges](record, value) {
      if (!core.identical(value, record.currentValue)) {
        record.previousValue = record.currentValue;
        record.currentValue = value;
        this[_addToChanges](record);
      }
    }
    [_reset]() {
      this[_appendAfter] = null;
      if (dart.test(this.isDirty)) {
        this[_previousMapHead] = this[_mapHead];
        for (let record = this[_previousMapHead]; record != null; record = record[_next]) {
          record[_nextPrevious] = record[_next];
        }
        for (let record = this[_changesHead]; record != null; record = record[_nextChanged]) {
          record.previousValue = record.currentValue;
        }
        for (let record = this[_additionsHead]; record != null; record = record[_nextAdded]) {
          record.previousValue = record.currentValue;
        }
        this[_changesHead] = this[_changesTail] = null;
        this[_additionsHead] = this[_additionsTail] = null;
        this[_removalsHead] = null;
      }
    }
    [_addToAdditions](record) {
      if (this[_additionsHead] == null) {
        this[_additionsHead] = this[_additionsTail] = record;
      } else {
        this[_additionsTail][_nextAdded] = record;
        this[_additionsTail] = record;
      }
    }
    [_addToChanges](record) {
      if (this[_changesHead] == null) {
        this[_changesHead] = this[_changesTail] = record;
      } else {
        this[_changesTail][_nextChanged] = record;
        this[_changesTail] = record;
      }
    }
    toString() {
      let items = JSArrayOfObjectL().of([]);
      let previous = JSArrayOfObjectL().of([]);
      let changes = JSArrayOfObjectL().of([]);
      let additions = JSArrayOfObjectL().of([]);
      let removals = JSArrayOfObjectL().of([]);
      for (let record = this[_mapHead]; record != null; record = record[_next]) {
        items[$add](record);
      }
      for (let record = this[_previousMapHead]; record != null; record = record[_nextPrevious]) {
        previous[$add](record);
      }
      for (let record = this[_changesHead]; record != null; record = record[_nextChanged]) {
        changes[$add](record);
      }
      for (let record = this[_additionsHead]; record != null; record = record[_nextAdded]) {
        additions[$add](record);
      }
      for (let record = this[_removalsHead]; record != null; record = record[_next]) {
        removals[$add](record);
      }
      return "map: " + dart.notNull(items[$join](", ")) + "\n" + "previous: " + dart.notNull(previous[$join](", ")) + "\n" + "additions: " + dart.notNull(additions[$join](", ")) + "\n" + "changes: " + dart.notNull(changes[$join](", ")) + "\n" + "removals: " + dart.notNull(removals[$join](", ")) + "\n";
    }
  };
  (default_keyvalue_differ.DefaultKeyValueDiffer.new = function() {
    this[_records] = new (LinkedMapOfdynamic$KeyValueChangeRecordL()).new();
    this[_mapHead] = null;
    this[_appendAfter] = null;
    this[_previousMapHead] = null;
    this[_changesHead] = null;
    this[_changesTail] = null;
    this[_additionsHead] = null;
    this[_additionsTail] = null;
    this[_removalsHead] = null;
    ;
  }).prototype = default_keyvalue_differ.DefaultKeyValueDiffer.prototype;
  dart.addTypeTests(default_keyvalue_differ.DefaultKeyValueDiffer);
  dart.addTypeCaches(default_keyvalue_differ.DefaultKeyValueDiffer);
  dart.setMethodSignature(default_keyvalue_differ.DefaultKeyValueDiffer, () => ({
    __proto__: dart.getMethods(default_keyvalue_differ.DefaultKeyValueDiffer.__proto__),
    forEachChangedItem: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)]))]),
    forEachAddedItem: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)]))]),
    forEachRemovedItem: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)]))]),
    diff: dart.fnType(dart.legacy(default_keyvalue_differ.DefaultKeyValueDiffer), [dart.legacy(core.Map$(dart.legacy(core.Object), dart.legacy(core.Object)))]),
    check: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Map$(dart.legacy(core.Object), dart.legacy(core.Object)))]),
    [_insertBeforeOrAppend]: dart.fnType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord), [dart.legacy(default_keyvalue_differ.KeyValueChangeRecord), dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)]),
    [_getOrCreateRecord]: dart.fnType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord), [dart.dynamic, dart.dynamic]),
    [_maybeAddToChanges]: dart.fnType(dart.void, [dart.legacy(default_keyvalue_differ.KeyValueChangeRecord), dart.dynamic]),
    [_reset]: dart.fnType(dart.void, []),
    [_addToAdditions]: dart.fnType(dart.void, [dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)]),
    [_addToChanges]: dart.fnType(dart.void, [dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(default_keyvalue_differ.DefaultKeyValueDiffer, () => ({
    __proto__: dart.getGetters(default_keyvalue_differ.DefaultKeyValueDiffer.__proto__),
    isDirty: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(default_keyvalue_differ.DefaultKeyValueDiffer, L20);
  dart.setFieldSignature(default_keyvalue_differ.DefaultKeyValueDiffer, () => ({
    __proto__: dart.getFields(default_keyvalue_differ.DefaultKeyValueDiffer.__proto__),
    [_records]: dart.finalFieldType(dart.legacy(core.Map$(dart.dynamic, dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)))),
    [_mapHead]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_appendAfter]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_previousMapHead]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_changesHead]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_changesTail]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_additionsHead]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_additionsTail]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_removalsHead]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord))
  }));
  dart.defineExtensionMethods(default_keyvalue_differ.DefaultKeyValueDiffer, ['toString']);
  var key$ = dart.privateName(default_keyvalue_differ, "KeyValueChangeRecord.key");
  var previousValue = dart.privateName(default_keyvalue_differ, "KeyValueChangeRecord.previousValue");
  var currentValue = dart.privateName(default_keyvalue_differ, "KeyValueChangeRecord.currentValue");
  default_keyvalue_differ.KeyValueChangeRecord = class KeyValueChangeRecord extends core.Object {
    get key() {
      return this[key$];
    }
    set key(value) {
      this[key$] = value;
    }
    get previousValue() {
      return this[previousValue];
    }
    set previousValue(value) {
      this[previousValue] = value;
    }
    get currentValue() {
      return this[currentValue];
    }
    set currentValue(value) {
      this[currentValue] = value;
    }
    toString() {
      return core.identical(this.previousValue, this.currentValue) ? dart.str(this.key) : dart.str(this.key) + "[" + dart.str(this.previousValue) + "->" + dart.str(this.currentValue) + "]";
    }
  };
  (default_keyvalue_differ.KeyValueChangeRecord.new = function(key) {
    this[previousValue] = null;
    this[currentValue] = null;
    this[_nextPrevious] = null;
    this[_next] = null;
    this[_prev] = null;
    this[_nextAdded] = null;
    this[_nextChanged] = null;
    this[key$] = key;
    ;
  }).prototype = default_keyvalue_differ.KeyValueChangeRecord.prototype;
  dart.addTypeTests(default_keyvalue_differ.KeyValueChangeRecord);
  dart.addTypeCaches(default_keyvalue_differ.KeyValueChangeRecord);
  dart.setMethodSignature(default_keyvalue_differ.KeyValueChangeRecord, () => ({
    __proto__: dart.getMethods(default_keyvalue_differ.KeyValueChangeRecord.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(default_keyvalue_differ.KeyValueChangeRecord, L20);
  dart.setFieldSignature(default_keyvalue_differ.KeyValueChangeRecord, () => ({
    __proto__: dart.getFields(default_keyvalue_differ.KeyValueChangeRecord.__proto__),
    key: dart.fieldType(dart.dynamic),
    previousValue: dart.fieldType(dart.dynamic),
    currentValue: dart.fieldType(dart.dynamic),
    [_nextPrevious]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_next]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_prev]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_nextAdded]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord)),
    [_nextChanged]: dart.fieldType(dart.legacy(default_keyvalue_differ.KeyValueChangeRecord))
  }));
  dart.defineExtensionMethods(default_keyvalue_differ.KeyValueChangeRecord, ['toString']);
  var _length = dart.privateName(default_iterable_differ, "_length");
  var _collection = dart.privateName(default_iterable_differ, "_collection");
  var _linkedRecords = dart.privateName(default_iterable_differ, "_linkedRecords");
  var _unlinkedRecords = dart.privateName(default_iterable_differ, "_unlinkedRecords");
  var _previousItHead = dart.privateName(default_iterable_differ, "_previousItHead");
  var _itHead = dart.privateName(default_iterable_differ, "_itHead");
  var _itTail = dart.privateName(default_iterable_differ, "_itTail");
  var _additionsHead$ = dart.privateName(default_iterable_differ, "_additionsHead");
  var _additionsTail$ = dart.privateName(default_iterable_differ, "_additionsTail");
  var _movesHead = dart.privateName(default_iterable_differ, "_movesHead");
  var _movesTail = dart.privateName(default_iterable_differ, "_movesTail");
  var _removalsHead$ = dart.privateName(default_iterable_differ, "_removalsHead");
  var _removalsTail = dart.privateName(default_iterable_differ, "_removalsTail");
  var _identityChangesHead = dart.privateName(default_iterable_differ, "_identityChangesHead");
  var _identityChangesTail = dart.privateName(default_iterable_differ, "_identityChangesTail");
  var _trackByFn = dart.privateName(default_iterable_differ, "_trackByFn");
  var C21;
  var _nextRemoved = dart.privateName(default_iterable_differ, "_nextRemoved");
  var _next$ = dart.privateName(default_iterable_differ, "_next");
  var _nextAdded$ = dart.privateName(default_iterable_differ, "_nextAdded");
  var _nextIdentityChange = dart.privateName(default_iterable_differ, "_nextIdentityChange");
  var _reset$ = dart.privateName(default_iterable_differ, "_reset");
  var _mismatch = dart.privateName(default_iterable_differ, "_mismatch");
  var _verifyReinsertion = dart.privateName(default_iterable_differ, "_verifyReinsertion");
  var _addIdentityChange = dart.privateName(default_iterable_differ, "_addIdentityChange");
  var _truncate = dart.privateName(default_iterable_differ, "_truncate");
  var _nextPrevious$ = dart.privateName(default_iterable_differ, "_nextPrevious");
  var _nextMoved = dart.privateName(default_iterable_differ, "_nextMoved");
  var _prev$ = dart.privateName(default_iterable_differ, "_prev");
  var _remove = dart.privateName(default_iterable_differ, "_remove");
  var _moveAfter = dart.privateName(default_iterable_differ, "_moveAfter");
  var _reinsertAfter = dart.privateName(default_iterable_differ, "_reinsertAfter");
  var _addAfter = dart.privateName(default_iterable_differ, "_addAfter");
  var _addToMoves = dart.privateName(default_iterable_differ, "_addToMoves");
  var _unlink = dart.privateName(default_iterable_differ, "_unlink");
  var _addToRemovals = dart.privateName(default_iterable_differ, "_addToRemovals");
  var _prevRemoved = dart.privateName(default_iterable_differ, "_prevRemoved");
  var _insertAfter = dart.privateName(default_iterable_differ, "_insertAfter");
  default_iterable_differ.DefaultIterableDiffer = class DefaultIterableDiffer extends core.Object {
    clone(trackByFn) {
      let t0;
      let differ = new default_iterable_differ.DefaultIterableDiffer.new(trackByFn);
      t0 = differ;
      return (() => {
        t0[_length] = this[_length];
        t0[_collection] = this[_collection];
        t0[_linkedRecords] = this[_linkedRecords];
        t0[_unlinkedRecords] = this[_unlinkedRecords];
        t0[_previousItHead] = this[_previousItHead];
        t0[_itHead] = this[_itHead];
        t0[_itTail] = this[_itTail];
        t0[_additionsHead$] = this[_additionsHead$];
        t0[_additionsTail$] = this[_additionsTail$];
        t0[_movesHead] = this[_movesHead];
        t0[_movesTail] = this[_movesTail];
        t0[_removalsHead$] = this[_removalsHead$];
        t0[_removalsTail] = this[_removalsTail];
        t0[_identityChangesHead] = this[_identityChangesHead];
        t0[_identityChangesTail] = this[_identityChangesTail];
        return t0;
      })();
    }
    get collection() {
      return this[_collection];
    }
    get length() {
      return this[_length];
    }
    forEachOperation(fn) {
      let t2, t1, t0, t2$, t1$, t0$;
      let nextIt = this[_itHead];
      let nextRemove = this[_removalsHead$];
      let addRemoveOffset = 0;
      let sizeDeficit = null;
      let moveOffsets = null;
      while (nextIt != null || nextRemove != null) {
        let record = nextRemove == null || nextIt != null && dart.notNull(nextIt.currentIndex) < dart.notNull(default_iterable_differ._getPreviousIndex(nextRemove, addRemoveOffset, moveOffsets)) ? nextIt : nextRemove;
        let adjPreviousIndex = default_iterable_differ._getPreviousIndex(optimizations.unsafeCast(CollectionChangeRecordL(), record), addRemoveOffset, moveOffsets);
        let currentIndex = optimizations.unsafeCast(intL(), dart.dload(record, 'currentIndex'));
        if (core.identical(record, nextRemove)) {
          addRemoveOffset = addRemoveOffset - 1;
          nextRemove = nextRemove[_nextRemoved];
        } else {
          nextIt = nextIt[_next$];
          if (dart.dload(record, 'previousIndex') == null) {
            addRemoveOffset = addRemoveOffset + 1;
          } else {
            moveOffsets == null ? moveOffsets = JSArrayOfintL().of([]) : null;
            let localMovePreviousIndex = dart.notNull(adjPreviousIndex) - addRemoveOffset;
            let localCurrentIndex = dart.notNull(currentIndex) - addRemoveOffset;
            if (localMovePreviousIndex !== localCurrentIndex) {
              for (let i = 0; i < localMovePreviousIndex; i = i + 1) {
                let offset = null;
                if (i < dart.notNull(moveOffsets[$length])) {
                  offset = moveOffsets[$_get](i);
                } else {
                  if (dart.notNull(moveOffsets[$length]) > i) {
                    offset = (t0 = moveOffsets, t1 = i, t2 = 0, t0[$_set](t1, t2), t2);
                  } else {
                    sizeDeficit = i - dart.notNull(moveOffsets[$length]) + 1;
                    for (let j = 0; j < dart.notNull(sizeDeficit); j = j + 1) {
                      moveOffsets[$add](null);
                    }
                    offset = (t0$ = moveOffsets, t1$ = i, t2$ = 0, t0$[$_set](t1$, t2$), t2$);
                  }
                }
                let index = dart.notNull(offset) + i;
                if (localCurrentIndex <= index && index < localMovePreviousIndex) {
                  moveOffsets[$_set](i, dart.notNull(offset) + 1);
                }
              }
              let previousIndex = optimizations.unsafeCast(intL(), dart.dload(record, 'previousIndex'));
              sizeDeficit = dart.notNull(previousIndex) - dart.notNull(moveOffsets[$length]) + 1;
              for (let j = 0; j < dart.notNull(sizeDeficit); j = j + 1) {
                moveOffsets[$add](null);
              }
              moveOffsets[$_set](previousIndex, localCurrentIndex - localMovePreviousIndex);
            }
          }
        }
        if (adjPreviousIndex != currentIndex) {
          fn(optimizations.unsafeCast(CollectionChangeRecordL(), record), adjPreviousIndex, currentIndex);
        }
      }
    }
    forEachAddedItem(fn) {
      for (let record = this[_additionsHead$]; record != null; record = record[_nextAdded$]) {
        fn(record);
      }
    }
    forEachRemovedItem(fn) {
      for (let record = this[_removalsHead$]; record != null; record = record[_nextRemoved]) {
        fn(record);
      }
    }
    forEachIdentityChange(fn) {
      for (let record = this[_identityChangesHead]; record != null; record = record[_nextIdentityChange]) {
        fn(record);
      }
    }
    diff(collection) {
      if (collection != null) {
        if (!IterableLOfObjectL().is(collection)) {
          dart.throw(new core.StateError.new("Error trying to diff '" + dart.str(collection) + "'"));
        }
      } else {
        collection = C5 || CT.C5;
      }
      return dart.test(this.check(collection)) ? this : null;
    }
    onDestroy() {
    }
    check(collection) {
      let t2, t1;
      this[_reset$]();
      let record = this[_itHead];
      let mayBeDirty = false;
      let index = null;
      let item = null;
      let itemTrackBy = null;
      if (ListLOfObjectL().is(collection)) {
        let list = collection;
        this[_length] = collection[$length];
        for (let t0 = index = 0; dart.notNull(index) < dart.notNull(this[_length]); index = dart.notNull(index) + 1) {
          item = list[$_get](index);
          itemTrackBy = (t1 = index, t2 = item, this[_trackByFn](t1, t2));
          if (record == null || !core.identical(record.trackById, itemTrackBy)) {
            record = this[_mismatch](record, item, itemTrackBy, index);
            mayBeDirty = true;
          } else {
            if (mayBeDirty) {
              record = this[_verifyReinsertion](record, item, itemTrackBy, index);
            }
            if (!core.identical(record.item, item)) this[_addIdentityChange](record, item);
          }
          record = record[_next$];
        }
      } else {
        index = 0;
        collection[$forEach](dart.fn(item => {
          let t2, t1;
          itemTrackBy = (t1 = index, t2 = item, this[_trackByFn](t1, t2));
          if (record == null || !core.identical(record.trackById, itemTrackBy)) {
            record = this[_mismatch](record, item, itemTrackBy, index);
            mayBeDirty = true;
          } else {
            if (mayBeDirty) {
              record = this[_verifyReinsertion](record, item, itemTrackBy, index);
            }
            if (!core.identical(record.item, item)) this[_addIdentityChange](record, item);
          }
          record = record[_next$];
          index = dart.notNull(index) + 1;
        }, ObjectLToNullN()));
        this[_length] = index;
      }
      this[_truncate](record);
      this[_collection] = collection;
      return this.isDirty;
    }
    get isDirty() {
      return this[_additionsHead$] != null || this[_movesHead] != null || this[_removalsHead$] != null || this[_identityChangesHead] != null;
    }
    [_reset$]() {
      if (dart.test(this.isDirty)) {
        let record = null;
        let nextRecord = null;
        for (let t1 = record = this[_previousItHead] = this[_itHead]; record != null; record = record[_next$]) {
          record[_nextPrevious$] = record[_next$];
        }
        for (let t2 = record = this[_additionsHead$]; record != null; record = record[_nextAdded$]) {
          record.previousIndex = record.currentIndex;
        }
        this[_additionsHead$] = this[_additionsTail$] = null;
        for (let t3 = record = this[_movesHead]; record != null; record = nextRecord) {
          record.previousIndex = record.currentIndex;
          nextRecord = record[_nextMoved];
        }
        this[_movesHead] = this[_movesTail] = null;
        this[_removalsHead$] = this[_removalsTail] = null;
        this[_identityChangesHead] = this[_identityChangesTail] = null;
      }
    }
    [_mismatch](record, item, itemTrackBy, index) {
      let previousRecord = null;
      if (record == null) {
        previousRecord = this[_itTail];
      } else {
        previousRecord = record[_prev$];
        this[_remove](record);
      }
      record = this[_linkedRecords] == null ? null : this[_linkedRecords].get(itemTrackBy, index);
      if (record != null) {
        if (!core.identical(record.item, item)) this[_addIdentityChange](record, item);
        this[_moveAfter](record, previousRecord, index);
      } else {
        record = this[_unlinkedRecords] == null ? null : this[_unlinkedRecords].get(itemTrackBy);
        if (record != null) {
          if (!core.identical(record.item, item)) this[_addIdentityChange](record, item);
          this[_reinsertAfter](record, previousRecord, index);
        } else {
          record = this[_addAfter](new default_iterable_differ.CollectionChangeRecord.new(item, itemTrackBy), previousRecord, index);
        }
      }
      return record;
    }
    [_verifyReinsertion](record, item, itemTrackBy, index) {
      let reinsertRecord = this[_unlinkedRecords] == null ? null : this[_unlinkedRecords].get(itemTrackBy);
      if (reinsertRecord != null) {
        record = this[_reinsertAfter](reinsertRecord, record[_prev$], index);
      } else if (record.currentIndex != index) {
        record.currentIndex = index;
        this[_addToMoves](record, index);
      }
      return record;
    }
    [_truncate](record) {
      while (record != null) {
        let nextRecord = record[_next$];
        this[_addToRemovals](this[_unlink](record));
        record = nextRecord;
      }
      if (this[_unlinkedRecords] != null) {
        this[_unlinkedRecords].clear();
      }
      if (this[_additionsTail$] != null) {
        this[_additionsTail$][_nextAdded$] = null;
      }
      if (this[_movesTail] != null) {
        this[_movesTail][_nextMoved] = null;
      }
      if (this[_itTail] != null) {
        this[_itTail][_next$] = null;
      }
      if (this[_removalsTail] != null) {
        this[_removalsTail][_nextRemoved] = null;
      }
      if (this[_identityChangesTail] != null) {
        this[_identityChangesTail][_nextIdentityChange] = null;
      }
    }
    [_reinsertAfter](record, prevRecord, index) {
      if (this[_unlinkedRecords] != null) {
        this[_unlinkedRecords].remove(record);
      }
      let prev = record[_prevRemoved];
      let next = record[_nextRemoved];
      if (prev == null) {
        this[_removalsHead$] = next;
      } else {
        prev[_nextRemoved] = next;
      }
      if (next == null) {
        this[_removalsTail] = prev;
      } else {
        next[_prevRemoved] = prev;
      }
      this[_insertAfter](record, prevRecord, index);
      this[_addToMoves](record, index);
      return record;
    }
    [_moveAfter](record, prevRecord, index) {
      this[_unlink](record);
      this[_insertAfter](record, prevRecord, index);
      this[_addToMoves](record, index);
      return record;
    }
    [_addAfter](record, prevRecord, index) {
      this[_insertAfter](record, prevRecord, index);
      if (this[_additionsTail$] == null) {
        this[_additionsTail$] = this[_additionsHead$] = record;
      } else {
        this[_additionsTail$] = this[_additionsTail$][_nextAdded$] = record;
      }
      return record;
    }
    [_insertAfter](record, prevRecord, index) {
      let next = prevRecord == null ? this[_itHead] : prevRecord[_next$];
      record[_next$] = next;
      record[_prev$] = prevRecord;
      if (next == null) {
        this[_itTail] = record;
      } else {
        next[_prev$] = record;
      }
      if (prevRecord == null) {
        this[_itHead] = record;
      } else {
        prevRecord[_next$] = record;
      }
      this[_linkedRecords] == null ? this[_linkedRecords] = new default_iterable_differ._DuplicateMap.new() : null;
      this[_linkedRecords].put(record);
      record.currentIndex = index;
      return record;
    }
    [_remove](record) {
      return this[_addToRemovals](this[_unlink](record));
    }
    [_unlink](record) {
      let t4;
      t4 = this[_linkedRecords];
      t4 == null ? null : t4.remove(record);
      let prev = record[_prev$];
      let next = record[_next$];
      if (prev == null) {
        this[_itHead] = next;
      } else {
        prev[_next$] = next;
      }
      if (next == null) {
        this[_itTail] = prev;
      } else {
        next[_prev$] = prev;
      }
      return record;
    }
    [_addToMoves](record, toIndex) {
      if (record.previousIndex == toIndex) {
        return record;
      }
      if (this[_movesTail] == null) {
        this[_movesTail] = this[_movesHead] = record;
      } else {
        this[_movesTail] = this[_movesTail][_nextMoved] = record;
      }
      return record;
    }
    [_addToRemovals](record) {
      this[_unlinkedRecords] == null ? this[_unlinkedRecords] = new default_iterable_differ._DuplicateMap.new() : null;
      this[_unlinkedRecords].put(record);
      record.currentIndex = null;
      record[_nextRemoved] = null;
      if (this[_removalsTail] == null) {
        this[_removalsTail] = this[_removalsHead$] = record;
        record[_prevRemoved] = null;
      } else {
        record[_prevRemoved] = this[_removalsTail];
        this[_removalsTail] = this[_removalsTail][_nextRemoved] = record;
      }
      return record;
    }
    [_addIdentityChange](record, item) {
      record.item = item;
      if (this[_identityChangesTail] == null) {
        this[_identityChangesTail] = this[_identityChangesHead] = record;
      } else {
        this[_identityChangesTail] = this[_identityChangesTail][_nextIdentityChange] = record;
      }
      return record;
    }
    toString() {
      if (dart.test(optimizations.isDevMode)) {
        let list = JSArrayOfObjectL().of([]);
        for (let record = this[_itHead]; record != null; record = record[_next$]) {
          list[$add](record);
        }
        let previous = JSArrayOfObjectL().of([]);
        for (let record = this[_previousItHead]; record != null; record = record[_nextPrevious$]) {
          previous[$add](record);
        }
        let additions = [];
        this.forEachAddedItem(dart.fn(record => additions[$add](record), CollectionChangeRecordLTovoid()));
        let moves = [];
        for (let record = this[_movesHead]; record != null; record = record[_nextMoved]) {
          moves[$add](record);
        }
        let removals = JSArrayOfObjectL().of([]);
        this.forEachRemovedItem(dart.fn(record => removals[$add](record), CollectionChangeRecordLTovoid()));
        let identityChanges = JSArrayOfObjectL().of([]);
        this.forEachIdentityChange(dart.fn(record => identityChanges[$add](record), CollectionChangeRecordLTovoid()));
        return "collection: " + dart.notNull(list[$join](", ")) + "\n" + "previous: " + dart.notNull(previous[$join](", ")) + "\n" + "additions: " + dart.notNull(additions[$join](", ")) + "\n" + "moves: " + dart.notNull(moves[$join](", ")) + "\n" + "removals: " + dart.notNull(removals[$join](", ")) + "\n" + "identityChanges: " + dart.notNull(identityChanges[$join](", ")) + "\n";
      } else {
        return super[$toString]();
      }
    }
  };
  (default_iterable_differ.DefaultIterableDiffer.new = function(trackByFn = null) {
    let t0;
    this[_length] = null;
    this[_collection] = null;
    this[_linkedRecords] = null;
    this[_unlinkedRecords] = null;
    this[_previousItHead] = null;
    this[_itHead] = null;
    this[_itTail] = null;
    this[_additionsHead$] = null;
    this[_additionsTail$] = null;
    this[_movesHead] = null;
    this[_movesTail] = null;
    this[_removalsHead$] = null;
    this[_removalsTail] = null;
    this[_identityChangesHead] = null;
    this[_identityChangesTail] = null;
    this[_trackByFn] = (t0 = trackByFn, t0 == null ? C21 || CT.C21 : t0);
    ;
  }).prototype = default_iterable_differ.DefaultIterableDiffer.prototype;
  dart.addTypeTests(default_iterable_differ.DefaultIterableDiffer);
  dart.addTypeCaches(default_iterable_differ.DefaultIterableDiffer);
  dart.setMethodSignature(default_iterable_differ.DefaultIterableDiffer, () => ({
    __proto__: dart.getMethods(default_iterable_differ.DefaultIterableDiffer.__proto__),
    clone: dart.fnType(dart.legacy(default_iterable_differ.DefaultIterableDiffer), [dart.legacy(dart.fnType(dart.legacy(core.Object), [dart.legacy(core.int), dart.dynamic]))]),
    forEachOperation: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(core.int), dart.legacy(core.int)]))]),
    forEachAddedItem: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(default_iterable_differ.CollectionChangeRecord)]))]),
    forEachRemovedItem: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(default_iterable_differ.CollectionChangeRecord)]))]),
    forEachIdentityChange: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(default_iterable_differ.CollectionChangeRecord)]))]),
    diff: dart.fnType(dart.legacy(default_iterable_differ.DefaultIterableDiffer), [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
    onDestroy: dart.fnType(dart.void, []),
    check: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
    [_reset$]: dart.fnType(dart.void, []),
    [_mismatch]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.dynamic, dart.dynamic, dart.legacy(core.int)]),
    [_verifyReinsertion]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.dynamic, dart.dynamic, dart.legacy(core.int)]),
    [_truncate]: dart.fnType(dart.void, [dart.legacy(default_iterable_differ.CollectionChangeRecord)]),
    [_reinsertAfter]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(core.int)]),
    [_moveAfter]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(core.int)]),
    [_addAfter]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(core.int)]),
    [_insertAfter]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(core.int)]),
    [_remove]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord)]),
    [_unlink]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord)]),
    [_addToMoves]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.legacy(core.int)]),
    [_addToRemovals]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord)]),
    [_addIdentityChange]: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord), dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(default_iterable_differ.DefaultIterableDiffer, () => ({
    __proto__: dart.getGetters(default_iterable_differ.DefaultIterableDiffer.__proto__),
    collection: dart.legacy(core.Iterable$(dart.legacy(core.Object))),
    length: dart.legacy(core.int),
    isDirty: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(default_iterable_differ.DefaultIterableDiffer, L21);
  dart.setFieldSignature(default_iterable_differ.DefaultIterableDiffer, () => ({
    __proto__: dart.getFields(default_iterable_differ.DefaultIterableDiffer.__proto__),
    [_trackByFn]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.Object), [dart.legacy(core.int), dart.dynamic]))),
    [_length]: dart.fieldType(dart.legacy(core.int)),
    [_collection]: dart.fieldType(dart.legacy(core.Iterable$(dart.legacy(core.Object)))),
    [_linkedRecords]: dart.fieldType(dart.legacy(default_iterable_differ._DuplicateMap)),
    [_unlinkedRecords]: dart.fieldType(dart.legacy(default_iterable_differ._DuplicateMap)),
    [_previousItHead]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_itHead]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_itTail]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_additionsHead$]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_additionsTail$]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_movesHead]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_movesTail]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_removalsHead$]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_removalsTail]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_identityChangesHead]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_identityChangesTail]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord))
  }));
  dart.defineExtensionMethods(default_iterable_differ.DefaultIterableDiffer, ['toString']);
  var _prevDup = dart.privateName(default_iterable_differ, "_prevDup");
  var _nextDup = dart.privateName(default_iterable_differ, "_nextDup");
  var item$ = dart.privateName(default_iterable_differ, "CollectionChangeRecord.item");
  var trackById$ = dart.privateName(default_iterable_differ, "CollectionChangeRecord.trackById");
  var currentIndex = dart.privateName(default_iterable_differ, "CollectionChangeRecord.currentIndex");
  var previousIndex = dart.privateName(default_iterable_differ, "CollectionChangeRecord.previousIndex");
  default_iterable_differ.CollectionChangeRecord = class CollectionChangeRecord extends core.Object {
    get item() {
      return this[item$];
    }
    set item(value) {
      this[item$] = value;
    }
    get trackById() {
      return this[trackById$];
    }
    set trackById(value) {
      this[trackById$] = value;
    }
    get currentIndex() {
      return this[currentIndex];
    }
    set currentIndex(value) {
      this[currentIndex] = value;
    }
    get previousIndex() {
      return this[previousIndex];
    }
    set previousIndex(value) {
      this[previousIndex] = value;
    }
    toString() {
      return this.previousIndex == this.currentIndex ? dart.toString(this.item) : dart.str(this.item) + "[" + dart.str(this.previousIndex) + "->" + dart.str(this.currentIndex) + "]";
    }
  };
  (default_iterable_differ.CollectionChangeRecord.new = function(item, trackById) {
    this[currentIndex] = null;
    this[previousIndex] = null;
    this[_nextPrevious$] = null;
    this[_prev$] = null;
    this[_next$] = null;
    this[_prevDup] = null;
    this[_nextDup] = null;
    this[_prevRemoved] = null;
    this[_nextRemoved] = null;
    this[_nextAdded$] = null;
    this[_nextMoved] = null;
    this[_nextIdentityChange] = null;
    this[item$] = item;
    this[trackById$] = trackById;
    ;
  }).prototype = default_iterable_differ.CollectionChangeRecord.prototype;
  dart.addTypeTests(default_iterable_differ.CollectionChangeRecord);
  dart.addTypeCaches(default_iterable_differ.CollectionChangeRecord);
  dart.setMethodSignature(default_iterable_differ.CollectionChangeRecord, () => ({
    __proto__: dart.getMethods(default_iterable_differ.CollectionChangeRecord.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(default_iterable_differ.CollectionChangeRecord, L21);
  dart.setFieldSignature(default_iterable_differ.CollectionChangeRecord, () => ({
    __proto__: dart.getFields(default_iterable_differ.CollectionChangeRecord.__proto__),
    item: dart.fieldType(dart.dynamic),
    trackById: dart.fieldType(dart.dynamic),
    currentIndex: dart.fieldType(dart.legacy(core.int)),
    previousIndex: dart.fieldType(dart.legacy(core.int)),
    [_nextPrevious$]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_prev$]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_next$]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_prevDup]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_nextDup]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_prevRemoved]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_nextRemoved]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_nextAdded$]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_nextMoved]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_nextIdentityChange]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord))
  }));
  dart.defineExtensionMethods(default_iterable_differ.CollectionChangeRecord, ['toString']);
  var _head = dart.privateName(default_iterable_differ, "_head");
  var _tail = dart.privateName(default_iterable_differ, "_tail");
  default_iterable_differ._DuplicateItemRecordList = class _DuplicateItemRecordList extends core.Object {
    add(record) {
      if (this[_head] == null) {
        this[_head] = this[_tail] = record;
        record[_nextDup] = null;
        record[_prevDup] = null;
      } else {
        this[_tail][_nextDup] = record;
        record[_prevDup] = this[_tail];
        record[_nextDup] = null;
        this[_tail] = record;
      }
    }
    get(trackById, afterIndex) {
      let record = null;
      for (let t4 = record = this[_head]; record != null; record = record[_nextDup]) {
        if ((afterIndex == null || dart.notNull(afterIndex) < dart.notNull(record.currentIndex)) && core.identical(record.trackById, trackById)) {
          return record;
        }
      }
      return null;
    }
    remove(record) {
      let prev = record[_prevDup];
      let next = record[_nextDup];
      if (prev == null) {
        this[_head] = next;
      } else {
        prev[_nextDup] = next;
      }
      if (next == null) {
        this[_tail] = prev;
      } else {
        next[_prevDup] = prev;
      }
      return this[_head] == null;
    }
  };
  (default_iterable_differ._DuplicateItemRecordList.new = function() {
    this[_head] = null;
    this[_tail] = null;
    ;
  }).prototype = default_iterable_differ._DuplicateItemRecordList.prototype;
  dart.addTypeTests(default_iterable_differ._DuplicateItemRecordList);
  dart.addTypeCaches(default_iterable_differ._DuplicateItemRecordList);
  dart.setMethodSignature(default_iterable_differ._DuplicateItemRecordList, () => ({
    __proto__: dart.getMethods(default_iterable_differ._DuplicateItemRecordList.__proto__),
    add: dart.fnType(dart.void, [dart.legacy(default_iterable_differ.CollectionChangeRecord)]),
    get: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.dynamic, dart.legacy(core.int)]),
    remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(default_iterable_differ.CollectionChangeRecord)])
  }));
  dart.setLibraryUri(default_iterable_differ._DuplicateItemRecordList, L21);
  dart.setFieldSignature(default_iterable_differ._DuplicateItemRecordList, () => ({
    __proto__: dart.getFields(default_iterable_differ._DuplicateItemRecordList.__proto__),
    [_head]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord)),
    [_tail]: dart.fieldType(dart.legacy(default_iterable_differ.CollectionChangeRecord))
  }));
  var _map = dart.privateName(default_iterable_differ, "_map");
  default_iterable_differ._DuplicateMap = class _DuplicateMap extends core.Object {
    put(record) {
      let key = record.trackById;
      let duplicates = this[_map][$_get](key);
      if (duplicates == null) {
        duplicates = new default_iterable_differ._DuplicateItemRecordList.new();
        this[_map][$_set](key, duplicates);
      }
      duplicates.add(record);
    }
    get(trackById, afterIndex = null) {
      let recordList = this[_map][$_get](trackById);
      return recordList == null ? null : recordList.get(trackById, afterIndex);
    }
    remove(record) {
      let key = record.trackById;
      let recordList = this[_map][$_get](key);
      if (dart.test(recordList.remove(record))) {
        dart.test(this[_map][$containsKey](key)) && (this[_map][$remove](key) != null || true);
      }
      return record;
    }
    get isEmpty() {
      return this[_map][$length] === 0;
    }
    clear() {
      this[_map][$clear]();
    }
    toString() {
      return "_DuplicateMap(" + dart.str(this[_map]) + ")";
    }
  };
  (default_iterable_differ._DuplicateMap.new = function() {
    this[_map] = new (IdentityMapOfdynamic$_DuplicateItemRecordListL()).new();
    ;
  }).prototype = default_iterable_differ._DuplicateMap.prototype;
  dart.addTypeTests(default_iterable_differ._DuplicateMap);
  dart.addTypeCaches(default_iterable_differ._DuplicateMap);
  dart.setMethodSignature(default_iterable_differ._DuplicateMap, () => ({
    __proto__: dart.getMethods(default_iterable_differ._DuplicateMap.__proto__),
    put: dart.fnType(dart.void, [dart.legacy(default_iterable_differ.CollectionChangeRecord)]),
    get: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.dynamic], [dart.legacy(core.int)]),
    remove: dart.fnType(dart.legacy(default_iterable_differ.CollectionChangeRecord), [dart.legacy(default_iterable_differ.CollectionChangeRecord)]),
    clear: dart.fnType(dart.void, []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(default_iterable_differ._DuplicateMap, () => ({
    __proto__: dart.getGetters(default_iterable_differ._DuplicateMap.__proto__),
    isEmpty: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(default_iterable_differ._DuplicateMap, L21);
  dart.setFieldSignature(default_iterable_differ._DuplicateMap, () => ({
    __proto__: dart.getFields(default_iterable_differ._DuplicateMap.__proto__),
    [_map]: dart.finalFieldType(dart.legacy(core.Map$(dart.dynamic, dart.legacy(default_iterable_differ._DuplicateItemRecordList))))
  }));
  dart.defineExtensionMethods(default_iterable_differ._DuplicateMap, ['toString']);
  default_iterable_differ._trackByIdentity = function _trackByIdentity(index, item) {
    return item;
  };
  default_iterable_differ._getPreviousIndex = function _getPreviousIndex(item, addRemoveOffset, moveOffsets) {
    let previousIndex = item.previousIndex;
    if (previousIndex == null) return previousIndex;
    let moveOffset = 0;
    if (moveOffsets != null && dart.notNull(previousIndex) < dart.notNull(moveOffsets[$length])) {
      moveOffset = moveOffsets[$_get](previousIndex);
    }
    return dart.notNull(previousIndex) + dart.notNull(addRemoveOffset) + dart.notNull(moveOffset);
  };
  constants.ChangeDetectorState = class ChangeDetectorState extends core.Object {};
  (constants.ChangeDetectorState.new = function() {
    ;
  }).prototype = constants.ChangeDetectorState.prototype;
  dart.addTypeTests(constants.ChangeDetectorState);
  dart.addTypeCaches(constants.ChangeDetectorState);
  dart.setLibraryUri(constants.ChangeDetectorState, L22);
  dart.defineLazy(constants.ChangeDetectorState, {
    /*constants.ChangeDetectorState.NeverChecked*/get NeverChecked() {
      return 0;
    },
    /*constants.ChangeDetectorState.CheckedBefore*/get CheckedBefore() {
      return 1;
    },
    /*constants.ChangeDetectorState.Errored*/get Errored() {
      return 2;
    }
  }, true);
  constants.ChangeDetectionStrategy = class ChangeDetectionStrategy extends core.Object {};
  (constants.ChangeDetectionStrategy.new = function() {
    ;
  }).prototype = constants.ChangeDetectionStrategy.prototype;
  dart.addTypeTests(constants.ChangeDetectionStrategy);
  dart.addTypeCaches(constants.ChangeDetectionStrategy);
  dart.setLibraryUri(constants.ChangeDetectionStrategy, L22);
  dart.defineLazy(constants.ChangeDetectionStrategy, {
    /*constants.ChangeDetectionStrategy.Default*/get Default() {
      return 0;
    },
    /*constants.ChangeDetectionStrategy.CheckOnce*/get CheckOnce() {
      return 1;
    },
    /*constants.ChangeDetectionStrategy.Checked*/get Checked() {
      return 2;
    },
    /*constants.ChangeDetectionStrategy.CheckAlways*/get CheckAlways() {
      return 3;
    },
    /*constants.ChangeDetectionStrategy.Detached*/get Detached() {
      return 4;
    },
    /*constants.ChangeDetectionStrategy.OnPush*/get OnPush() {
      return 5;
    },
    /*constants.ChangeDetectionStrategy.Stateful*/get Stateful() {
      return 6;
    }
  }, true);
  constants.ChangeDetectionCheckedState = class ChangeDetectionCheckedState extends core.Object {};
  (constants.ChangeDetectionCheckedState.new = function() {
    ;
  }).prototype = constants.ChangeDetectionCheckedState.prototype;
  dart.addTypeTests(constants.ChangeDetectionCheckedState);
  dart.addTypeCaches(constants.ChangeDetectionCheckedState);
  dart.setLibraryUri(constants.ChangeDetectionCheckedState, L22);
  dart.defineLazy(constants.ChangeDetectionCheckedState, {
    /*constants.ChangeDetectionCheckedState.checkOnce*/get checkOnce() {
      return 1;
    },
    /*constants.ChangeDetectionCheckedState.waitingForMarkForCheck*/get waitingForMarkForCheck() {
      return 2;
    },
    /*constants.ChangeDetectionCheckedState.checkAlways*/get checkAlways() {
      return 3;
    },
    /*constants.ChangeDetectionCheckedState.waitingToBeAttached*/get waitingToBeAttached() {
      return 4;
    }
  }, true);
  change_detector_ref.ChangeDetectorRef = class ChangeDetectorRef extends core.Object {};
  (change_detector_ref.ChangeDetectorRef.new = function() {
    ;
  }).prototype = change_detector_ref.ChangeDetectorRef.prototype;
  dart.addTypeTests(change_detector_ref.ChangeDetectorRef);
  dart.addTypeCaches(change_detector_ref.ChangeDetectorRef);
  dart.setLibraryUri(change_detector_ref.ChangeDetectorRef, L23);
  var _thisZoneKey = dart.privateName(ng_zone, "_thisZoneKey");
  var _onTurnStart = dart.privateName(ng_zone, "_onTurnStart");
  var _onMicrotaskEmpty = dart.privateName(ng_zone, "_onMicrotaskEmpty");
  var _onTurnDone = dart.privateName(ng_zone, "_onTurnDone");
  var _onError = dart.privateName(ng_zone, "_onError");
  var _outerZone = dart.privateName(ng_zone, "_outerZone");
  var _innerZone = dart.privateName(ng_zone, "_innerZone");
  var _hasPendingMicrotasks = dart.privateName(ng_zone, "_hasPendingMicrotasks");
  var _hasPendingMacrotasks = dart.privateName(ng_zone, "_hasPendingMacrotasks");
  var _isStable = dart.privateName(ng_zone, "_isStable");
  var _nesting = dart.privateName(ng_zone, "_nesting");
  var _isRunning = dart.privateName(ng_zone, "_isRunning");
  var _disposed = dart.privateName(ng_zone, "_disposed");
  var _pendingMicrotasks = dart.privateName(ng_zone, "_pendingMicrotasks");
  var _pendingTimers = dart.privateName(ng_zone, "_pendingTimers");
  var _createInnerZone = dart.privateName(ng_zone, "_createInnerZone");
  var _onErrorWithLongStackTrace = dart.privateName(ng_zone, "_onErrorWithLongStackTrace");
  var _onErrorWithoutLongStackTrace = dart.privateName(ng_zone, "_onErrorWithoutLongStackTrace");
  var _scheduleMicrotask = dart.privateName(ng_zone, "_scheduleMicrotask");
  var _run = dart.privateName(ng_zone, "_run");
  var _runUnary = dart.privateName(ng_zone, "_runUnary");
  var _runBinary = dart.privateName(ng_zone, "_runBinary");
  var _createTimer = dart.privateName(ng_zone, "_createTimer");
  var _setMicrotask = dart.privateName(ng_zone, "_setMicrotask");
  var _onEnter = dart.privateName(ng_zone, "_onEnter");
  var _onLeave = dart.privateName(ng_zone, "_onLeave");
  var _checkStable = dart.privateName(ng_zone, "_checkStable");
  var _setMacrotask = dart.privateName(ng_zone, "_setMacrotask");
  var _duration$ = dart.privateName(ng_zone, "_duration");
  var _longestPendingTimer = dart.privateName(ng_zone, "_longestPendingTimer");
  ng_zone.NgZone = class NgZone extends core.Object {
    static isInAngularZone() {
      return async.Zone.current._get(ng_zone.NgZone._anyZoneKey) === true;
    }
    static assertInAngularZone() {
      if (!dart.test(ng_zone.NgZone.isInAngularZone())) {
        dart.throw(core.Exception.new("Expected to be in Angular Zone, but it is not!"));
      }
    }
    static assertNotInAngularZone() {
      if (dart.test(ng_zone.NgZone.isInAngularZone())) {
        dart.throw(core.Exception.new("Expected to not be in Angular Zone, but it is!"));
      }
    }
    get inInnerZone() {
      return dart.equals(async.Zone.current, this[_innerZone]);
    }
    get inOuterZone() {
      return dart.equals(async.Zone.current, this[_outerZone]);
    }
    [_createInnerZone](zone, opts) {
      let handleUncaughtError = opts && 'handleUncaughtError' in opts ? opts.handleUncaughtError : null;
      return zone.fork({specification: new async._ZoneSpecification.new({scheduleMicrotask: dart.bind(this, _scheduleMicrotask), run: dart.bind(this, _run), runUnary: dart.bind(this, _runUnary), runBinary: dart.bind(this, _runBinary), handleUncaughtError: handleUncaughtError, createTimer: dart.bind(this, _createTimer)}), zoneValues: new (LinkedMapOfObjectL$ObjectL()).from([this[_thisZoneKey], true, ng_zone.NgZone._anyZoneKey, true])});
    }
    [_scheduleMicrotask](self, parent, zone, fn) {
      if (this[_pendingMicrotasks] === 0) {
        this[_setMicrotask](true);
      }
      this[_pendingMicrotasks] = dart.notNull(this[_pendingMicrotasks]) + 1;
      let safeMicrotask = dart.fn(() => {
        try {
          fn();
        } finally {
          this[_pendingMicrotasks] = dart.notNull(this[_pendingMicrotasks]) - 1;
          if (this[_pendingMicrotasks] === 0) {
            this[_setMicrotask](false);
          }
        }
      }, VoidToNullN());
      parent.scheduleMicrotask(zone, safeMicrotask);
    }
    [_run](R, self, parent, zone, fn) {
      return parent.run(dart.legacy(R), zone, dart.fn(() => {
        try {
          this[_onEnter]();
          return fn();
        } finally {
          this[_onLeave]();
        }
      }, dart.fnType(dart.legacy(R), [])));
    }
    [_runUnary](R, T, self, parent, zone, fn, arg) {
      return parent.runUnary(dart.legacy(R), dart.legacy(T), zone, dart.fn(arg => {
        try {
          this[_onEnter]();
          return fn(arg);
        } finally {
          this[_onLeave]();
        }
      }, dart.fnType(dart.legacy(R), [dart.legacy(T)])), arg);
    }
    [_runBinary](R, T1, T2, self, parent, zone, fn, arg1, arg2) {
      return parent.runBinary(dart.legacy(R), dart.legacy(T1), dart.legacy(T2), zone, dart.fn((arg1, arg2) => {
        try {
          this[_onEnter]();
          return fn(arg1, arg2);
        } finally {
          this[_onLeave]();
        }
      }, dart.fnType(dart.legacy(R), [dart.legacy(T1), dart.legacy(T2)])), arg1, arg2);
    }
    [_onEnter]() {
      this[_nesting] = dart.notNull(this[_nesting]) + 1;
      if (dart.test(this[_isStable])) {
        this[_isStable] = false;
        this[_isRunning] = true;
        this[_onTurnStart].add(null);
      }
    }
    [_onLeave]() {
      this[_nesting] = dart.notNull(this[_nesting]) - 1;
      this[_checkStable]();
    }
    [_onErrorWithLongStackTrace](error, chain) {
      let traces = chain.terse.traces[$map](StringL(), dart.fn(t => dart.toString(t), TraceLToStringL()))[$toList]();
      this[_onError].add(new ng_zone.NgZoneError.new(error, traces));
    }
    [_onErrorWithoutLongStackTrace](self, parent, zone, error, trace) {
      this[_onError].add(new ng_zone.NgZoneError.new(error, JSArrayOfObjectL().of([dart.toString(trace)])));
    }
    [_createTimer](self, parent, zone, duration, fn) {
      let wrappedTimer = null;
      let onDone = dart.fn(() => {
        this[_pendingTimers][$remove](wrappedTimer);
        this[_setMacrotask](this[_pendingTimers][$isNotEmpty]);
      }, VoidToNullN());
      let callback = dart.fn(() => {
        try {
          fn();
        } finally {
          onDone();
        }
      }, VoidToNullN());
      let timer = parent.createTimer(zone, duration, callback);
      wrappedTimer = new ng_zone._WrappedTimer.new(timer, duration, onDone);
      this[_pendingTimers][$add](wrappedTimer);
      this[_setMacrotask](true);
      return wrappedTimer;
    }
    get [_longestPendingTimer]() {
      let duration = core.Duration.zero;
      for (let timer of this[_pendingTimers]) {
        if (dart.test(timer[_duration$]['>'](duration))) {
          duration = timer[_duration$];
        }
      }
      return duration;
    }
    [_setMicrotask](hasMicrotasks) {
      this[_hasPendingMicrotasks] = hasMicrotasks;
      this[_checkStable]();
    }
    [_setMacrotask](hasMacrotasks) {
      this[_hasPendingMacrotasks] = hasMacrotasks;
    }
    [_checkStable]() {
      if (this[_nesting] === 0) {
        if (!dart.test(this[_hasPendingMicrotasks]) && !dart.test(this[_isStable])) {
          try {
            this[_nesting] = dart.notNull(this[_nesting]) + 1;
            this[_isRunning] = false;
            if (!dart.test(this[_disposed])) this[_onMicrotaskEmpty].add(null);
          } finally {
            this[_nesting] = dart.notNull(this[_nesting]) - 1;
            if (!dart.test(this[_hasPendingMicrotasks])) {
              try {
                this.runOutsideAngular(core.Null, dart.fn(() => {
                  if (!dart.test(this[_disposed])) {
                    this[_onTurnDone].add(null);
                  }
                }, VoidToNullN()));
              } finally {
                this[_isStable] = true;
              }
            }
          }
        }
      }
    }
    get hasPendingMicrotasks() {
      return this[_hasPendingMicrotasks];
    }
    get hasPendingMacrotasks() {
      return this[_hasPendingMacrotasks];
    }
    run(R, callback) {
      return this[_innerZone].run(dart.legacy(R), callback);
    }
    runGuarded(callback) {
      return this[_innerZone].runGuarded(callback);
    }
    runOutsideAngular(R, callback) {
      return this[_outerZone].run(dart.legacy(R), callback);
    }
    get isRunning() {
      return this[_isRunning];
    }
    get onError() {
      return this[_onError].stream;
    }
    get onMicrotaskEmpty() {
      return this[_onMicrotaskEmpty].stream;
    }
    get onEventDone() {
      return this[_onMicrotaskEmpty].stream;
    }
    get onTurnStart() {
      return this[_onTurnStart].stream;
    }
    get onTurnDone() {
      return this[_onTurnDone].stream;
    }
    runAfterChangesObserved(callback) {
      if (dart.test(this.isRunning)) {
        this.onTurnDone.first.whenComplete(dart.fn(() => async.scheduleMicrotask(callback), VoidTovoid()));
      } else {
        async.scheduleMicrotask(callback);
      }
    }
    dispose() {
      this[_disposed] = true;
    }
  };
  (ng_zone.NgZone.new = function(opts) {
    let enableLongStackTrace = opts && 'enableLongStackTrace' in opts ? opts.enableLongStackTrace : false;
    this[_thisZoneKey] = new core.Object.new();
    this[_onTurnStart] = StreamControllerOfvoid().broadcast({sync: true});
    this[_onMicrotaskEmpty] = StreamControllerOfvoid().broadcast({sync: true});
    this[_onTurnDone] = StreamControllerOfvoid().broadcast({sync: true});
    this[_onError] = StreamControllerOfNgZoneErrorL().broadcast({sync: true});
    this[_outerZone] = null;
    this[_innerZone] = null;
    this[_hasPendingMicrotasks] = false;
    this[_hasPendingMacrotasks] = false;
    this[_isStable] = true;
    this[_nesting] = 0;
    this[_isRunning] = false;
    this[_disposed] = false;
    this[_pendingMicrotasks] = 0;
    this[_pendingTimers] = JSArrayOf_WrappedTimerL().of([]);
    this[_outerZone] = async.Zone.current;
    if (dart.test(enableLongStackTrace)) {
      this[_innerZone] = chain.Chain.capture(ZoneL(), dart.fn(() => this[_createInnerZone](async.Zone.current), VoidToZoneL()), {onError: dart.bind(this, _onErrorWithLongStackTrace)});
    } else {
      this[_innerZone] = this[_createInnerZone](async.Zone.current, {handleUncaughtError: dart.bind(this, _onErrorWithoutLongStackTrace)});
    }
  }).prototype = ng_zone.NgZone.prototype;
  dart.addTypeTests(ng_zone.NgZone);
  dart.addTypeCaches(ng_zone.NgZone);
  dart.setMethodSignature(ng_zone.NgZone, () => ({
    __proto__: dart.getMethods(ng_zone.NgZone.__proto__),
    [_createInnerZone]: dart.fnType(dart.legacy(async.Zone), [dart.legacy(async.Zone)], {handleUncaughtError: dart.legacy(dart.fnType(dart.void, [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.legacy(core.Object), dart.legacy(core.StackTrace)]))}, {}),
    [_scheduleMicrotask]: dart.fnType(dart.void, [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.legacy(dart.fnType(dart.void, []))]),
    [_run]: dart.gFnType(R => [dart.legacy(R), [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.legacy(dart.fnType(dart.legacy(R), []))]]),
    [_runUnary]: dart.gFnType((R, T) => [dart.legacy(R), [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.legacy(dart.fnType(dart.legacy(R), [dart.legacy(T)])), dart.legacy(T)]]),
    [_runBinary]: dart.gFnType((R, T1, T2) => [dart.legacy(R), [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.legacy(dart.fnType(dart.legacy(R), [dart.legacy(T1), dart.legacy(T2)])), dart.legacy(T1), dart.legacy(T2)]]),
    [_onEnter]: dart.fnType(dart.void, []),
    [_onLeave]: dart.fnType(dart.void, []),
    [_onErrorWithLongStackTrace]: dart.fnType(dart.void, [dart.dynamic, dart.legacy(chain.Chain)]),
    [_onErrorWithoutLongStackTrace]: dart.fnType(dart.void, [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.dynamic, dart.legacy(core.StackTrace)]),
    [_createTimer]: dart.fnType(dart.legacy(async.Timer), [dart.legacy(async.Zone), dart.legacy(async.ZoneDelegate), dart.legacy(async.Zone), dart.legacy(core.Duration), dart.legacy(dart.fnType(dart.void, []))]),
    [_setMicrotask]: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    [_setMacrotask]: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    [_checkStable]: dart.fnType(dart.void, []),
    run: dart.gFnType(R => [dart.legacy(R), [dart.legacy(dart.fnType(dart.legacy(R), []))]]),
    runGuarded: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, []))]),
    runOutsideAngular: dart.gFnType(R => [dart.legacy(R), [dart.legacy(dart.fnType(dart.legacy(R), []))]]),
    runAfterChangesObserved: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, []))]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(ng_zone.NgZone, () => ({
    __proto__: dart.getGetters(ng_zone.NgZone.__proto__),
    inInnerZone: dart.legacy(core.bool),
    inOuterZone: dart.legacy(core.bool),
    [_longestPendingTimer]: dart.legacy(core.Duration),
    hasPendingMicrotasks: dart.legacy(core.bool),
    hasPendingMacrotasks: dart.legacy(core.bool),
    isRunning: dart.legacy(core.bool),
    onError: dart.legacy(async.Stream$(dart.legacy(ng_zone.NgZoneError))),
    onMicrotaskEmpty: dart.legacy(async.Stream$(dart.void)),
    onEventDone: dart.legacy(async.Stream$(dart.void)),
    onTurnStart: dart.legacy(async.Stream$(dart.void)),
    onTurnDone: dart.legacy(async.Stream$(dart.void))
  }));
  dart.setLibraryUri(ng_zone.NgZone, L24);
  dart.setFieldSignature(ng_zone.NgZone, () => ({
    __proto__: dart.getFields(ng_zone.NgZone.__proto__),
    [_thisZoneKey]: dart.finalFieldType(dart.legacy(core.Object)),
    [_onTurnStart]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.void))),
    [_onMicrotaskEmpty]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.void))),
    [_onTurnDone]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.void))),
    [_onError]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(ng_zone.NgZoneError)))),
    [_outerZone]: dart.fieldType(dart.legacy(async.Zone)),
    [_innerZone]: dart.fieldType(dart.legacy(async.Zone)),
    [_hasPendingMicrotasks]: dart.fieldType(dart.legacy(core.bool)),
    [_hasPendingMacrotasks]: dart.fieldType(dart.legacy(core.bool)),
    [_isStable]: dart.fieldType(dart.legacy(core.bool)),
    [_nesting]: dart.fieldType(dart.legacy(core.int)),
    [_isRunning]: dart.fieldType(dart.legacy(core.bool)),
    [_disposed]: dart.fieldType(dart.legacy(core.bool)),
    [_pendingMicrotasks]: dart.fieldType(dart.legacy(core.int)),
    [_pendingTimers]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(ng_zone._WrappedTimer))))
  }));
  dart.defineLazy(ng_zone.NgZone, {
    /*ng_zone.NgZone._anyZoneKey*/get _anyZoneKey() {
      return new core.Object.new();
    }
  }, true);
  var _timer$ = dart.privateName(ng_zone, "_timer");
  var _onCancel$ = dart.privateName(ng_zone, "_onCancel");
  ng_zone._WrappedTimer = class _WrappedTimer extends core.Object {
    cancel() {
      this[_onCancel$]();
      this[_timer$].cancel();
    }
    get isActive() {
      return this[_timer$].isActive;
    }
    get tick() {
      return this[_timer$].tick;
    }
  };
  (ng_zone._WrappedTimer.new = function(_timer, _duration, _onCancel) {
    this[_timer$] = _timer;
    this[_duration$] = _duration;
    this[_onCancel$] = _onCancel;
    ;
  }).prototype = ng_zone._WrappedTimer.prototype;
  dart.addTypeTests(ng_zone._WrappedTimer);
  dart.addTypeCaches(ng_zone._WrappedTimer);
  ng_zone._WrappedTimer[dart.implements] = () => [async.Timer];
  dart.setMethodSignature(ng_zone._WrappedTimer, () => ({
    __proto__: dart.getMethods(ng_zone._WrappedTimer.__proto__),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(ng_zone._WrappedTimer, () => ({
    __proto__: dart.getGetters(ng_zone._WrappedTimer.__proto__),
    isActive: dart.legacy(core.bool),
    tick: dart.legacy(core.int)
  }));
  dart.setLibraryUri(ng_zone._WrappedTimer, L24);
  dart.setFieldSignature(ng_zone._WrappedTimer, () => ({
    __proto__: dart.getFields(ng_zone._WrappedTimer.__proto__),
    [_timer$]: dart.finalFieldType(dart.legacy(async.Timer)),
    [_duration$]: dart.finalFieldType(dart.legacy(core.Duration)),
    [_onCancel$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [])))
  }));
  var error$ = dart.privateName(ng_zone, "NgZoneError.error");
  var stackTrace$ = dart.privateName(ng_zone, "NgZoneError.stackTrace");
  ng_zone.NgZoneError = class NgZoneError extends core.Object {
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    get stackTrace() {
      return this[stackTrace$];
    }
    set stackTrace(value) {
      super.stackTrace = value;
    }
  };
  (ng_zone.NgZoneError.new = function(error, stackTrace) {
    this[error$] = error;
    this[stackTrace$] = stackTrace;
    ;
  }).prototype = ng_zone.NgZoneError.prototype;
  dart.addTypeTests(ng_zone.NgZoneError);
  dart.addTypeCaches(ng_zone.NgZoneError);
  dart.setLibraryUri(ng_zone.NgZoneError, L24);
  dart.setFieldSignature(ng_zone.NgZoneError, () => ({
    __proto__: dart.getFields(ng_zone.NgZoneError.__proto__),
    error: dart.finalFieldType(dart.dynamic),
    stackTrace: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object))))
  }));
  ng_zone.longestPendingTimer = function longestPendingTimer(zone) {
    return zone[_longestPendingTimer];
  };
  ng_zone.hasPendingMacrotasks = function hasPendingMacrotasks(zone) {
    return zone[_hasPendingMacrotasks];
  };
  ng_zone.inAngularZone = function inAngularZone(ngZone, zone) {
    return async.Zone.current._get(ngZone[_thisZoneKey]) === true;
  };
  var _name$1 = dart.privateName(visibility, "_name");
  var C22;
  var selector$ = dart.privateName(metadata, "Directive.selector");
  var providers$0 = dart.privateName(metadata, "Directive.providers");
  var exportAs$ = dart.privateName(metadata, "Directive.exportAs");
  var visibility$ = dart.privateName(metadata, "Directive.visibility");
  metadata.Directive = class Directive extends core.Object {
    get selector() {
      return this[selector$];
    }
    set selector(value) {
      super.selector = value;
    }
    get providers() {
      return this[providers$0];
    }
    set providers(value) {
      super.providers = value;
    }
    get exportAs() {
      return this[exportAs$];
    }
    set exportAs(value) {
      super.exportAs = value;
    }
    get visibility() {
      return this[visibility$];
    }
    set visibility(value) {
      super.visibility = value;
    }
  };
  (metadata.Directive.new = function(opts) {
    let selector = opts && 'selector' in opts ? opts.selector : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let exportAs = opts && 'exportAs' in opts ? opts.exportAs : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : C22 || CT.C22;
    this[selector$] = selector;
    this[providers$0] = providers;
    this[exportAs$] = exportAs;
    this[visibility$] = visibility;
    ;
  }).prototype = metadata.Directive.prototype;
  dart.addTypeTests(metadata.Directive);
  dart.addTypeCaches(metadata.Directive);
  dart.setLibraryUri(metadata.Directive, L25);
  dart.setFieldSignature(metadata.Directive, () => ({
    __proto__: dart.getFields(metadata.Directive.__proto__),
    selector: dart.finalFieldType(dart.legacy(core.String)),
    providers: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object)))),
    exportAs: dart.finalFieldType(dart.legacy(core.String)),
    visibility: dart.finalFieldType(dart.legacy(visibility.Visibility))
  }));
  var changeDetection$ = dart.privateName(metadata, "Component.changeDetection");
  var viewProviders$ = dart.privateName(metadata, "Component.viewProviders");
  var exports$ = dart.privateName(metadata, "Component.exports");
  var templateUrl$ = dart.privateName(metadata, "Component.templateUrl");
  var template$ = dart.privateName(metadata, "Component.template");
  var preserveWhitespace$ = dart.privateName(metadata, "Component.preserveWhitespace");
  var styleUrls$ = dart.privateName(metadata, "Component.styleUrls");
  var styles$ = dart.privateName(metadata, "Component.styles");
  var directives$ = dart.privateName(metadata, "Component.directives");
  var directiveTypes$ = dart.privateName(metadata, "Component.directiveTypes");
  var pipes$ = dart.privateName(metadata, "Component.pipes");
  var encapsulation$ = dart.privateName(metadata, "Component.encapsulation");
  metadata.Component = class Component extends metadata.Directive {
    get changeDetection() {
      return this[changeDetection$];
    }
    set changeDetection(value) {
      super.changeDetection = value;
    }
    get viewProviders() {
      return this[viewProviders$];
    }
    set viewProviders(value) {
      super.viewProviders = value;
    }
    get exports() {
      return this[exports$];
    }
    set exports(value) {
      super.exports = value;
    }
    get templateUrl() {
      return this[templateUrl$];
    }
    set templateUrl(value) {
      super.templateUrl = value;
    }
    get template() {
      return this[template$];
    }
    set template(value) {
      super.template = value;
    }
    get preserveWhitespace() {
      return this[preserveWhitespace$];
    }
    set preserveWhitespace(value) {
      super.preserveWhitespace = value;
    }
    get styleUrls() {
      return this[styleUrls$];
    }
    set styleUrls(value) {
      super.styleUrls = value;
    }
    get styles() {
      return this[styles$];
    }
    set styles(value) {
      super.styles = value;
    }
    get directives() {
      return this[directives$];
    }
    set directives(value) {
      super.directives = value;
    }
    get directiveTypes() {
      return this[directiveTypes$];
    }
    set directiveTypes(value) {
      super.directiveTypes = value;
    }
    get pipes() {
      return this[pipes$];
    }
    set pipes(value) {
      super.pipes = value;
    }
    get encapsulation() {
      return this[encapsulation$];
    }
    set encapsulation(value) {
      super.encapsulation = value;
    }
  };
  (metadata.Component.new = function(opts) {
    let selector = opts && 'selector' in opts ? opts.selector : null;
    let exportAs = opts && 'exportAs' in opts ? opts.exportAs : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : C22 || CT.C22;
    let viewProviders = opts && 'viewProviders' in opts ? opts.viewProviders : null;
    let exports = opts && 'exports' in opts ? opts.exports : null;
    let changeDetection = opts && 'changeDetection' in opts ? opts.changeDetection : 0;
    let templateUrl = opts && 'templateUrl' in opts ? opts.templateUrl : null;
    let template = opts && 'template' in opts ? opts.template : null;
    let preserveWhitespace = opts && 'preserveWhitespace' in opts ? opts.preserveWhitespace : false;
    let styleUrls = opts && 'styleUrls' in opts ? opts.styleUrls : null;
    let styles = opts && 'styles' in opts ? opts.styles : null;
    let directives = opts && 'directives' in opts ? opts.directives : null;
    let directiveTypes = opts && 'directiveTypes' in opts ? opts.directiveTypes : null;
    let pipes = opts && 'pipes' in opts ? opts.pipes : null;
    let encapsulation = opts && 'encapsulation' in opts ? opts.encapsulation : null;
    this[viewProviders$] = viewProviders;
    this[exports$] = exports;
    this[changeDetection$] = changeDetection;
    this[templateUrl$] = templateUrl;
    this[template$] = template;
    this[preserveWhitespace$] = preserveWhitespace;
    this[styleUrls$] = styleUrls;
    this[styles$] = styles;
    this[directives$] = directives;
    this[directiveTypes$] = directiveTypes;
    this[pipes$] = pipes;
    this[encapsulation$] = encapsulation;
    if (!(changeDetection != null)) dart.assertFailed(null, L26, 265, 16, "changeDetection != null");
    metadata.Component.__proto__.new.call(this, {selector: selector, exportAs: exportAs, providers: providers, visibility: visibility});
    ;
  }).prototype = metadata.Component.prototype;
  dart.addTypeTests(metadata.Component);
  dart.addTypeCaches(metadata.Component);
  dart.setLibraryUri(metadata.Component, L25);
  dart.setFieldSignature(metadata.Component, () => ({
    __proto__: dart.getFields(metadata.Component.__proto__),
    changeDetection: dart.finalFieldType(dart.legacy(core.int)),
    viewProviders: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object)))),
    exports: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object)))),
    templateUrl: dart.finalFieldType(dart.legacy(core.String)),
    template: dart.finalFieldType(dart.legacy(core.String)),
    preserveWhitespace: dart.finalFieldType(dart.legacy(core.bool)),
    styleUrls: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    styles: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    directives: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object)))),
    directiveTypes: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(typed.Typed$(dart.legacy(core.Object)))))),
    pipes: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Object)))),
    encapsulation: dart.finalFieldType(dart.legacy(view.ViewEncapsulation))
  }));
  var name$ = dart.privateName(metadata, "Pipe.name");
  var pure$ = dart.privateName(metadata, "Pipe.pure");
  metadata.Pipe = class Pipe extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get pure() {
      return this[pure$];
    }
    set pure(value) {
      super.pure = value;
    }
  };
  (metadata.Pipe.new = function(name, opts) {
    let pure = opts && 'pure' in opts ? opts.pure : true;
    this[name$] = name;
    this[pure$] = pure;
    ;
  }).prototype = metadata.Pipe.prototype;
  dart.addTypeTests(metadata.Pipe);
  dart.addTypeCaches(metadata.Pipe);
  dart.setLibraryUri(metadata.Pipe, L25);
  dart.setFieldSignature(metadata.Pipe, () => ({
    __proto__: dart.getFields(metadata.Pipe.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String)),
    pure: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var attributeName$ = dart.privateName(metadata, "Attribute.attributeName");
  metadata.Attribute = class Attribute extends core.Object {
    get attributeName() {
      return this[attributeName$];
    }
    set attributeName(value) {
      super.attributeName = value;
    }
  };
  (metadata.Attribute.new = function(attributeName) {
    this[attributeName$] = attributeName;
    ;
  }).prototype = metadata.Attribute.prototype;
  dart.addTypeTests(metadata.Attribute);
  dart.addTypeCaches(metadata.Attribute);
  dart.setLibraryUri(metadata.Attribute, L25);
  dart.setFieldSignature(metadata.Attribute, () => ({
    __proto__: dart.getFields(metadata.Attribute.__proto__),
    attributeName: dart.finalFieldType(dart.legacy(core.String))
  }));
  var selector$0 = dart.privateName(metadata, "_Query.selector");
  var descendants$ = dart.privateName(metadata, "_Query.descendants");
  var first$ = dart.privateName(metadata, "_Query.first");
  var read$ = dart.privateName(metadata, "_Query.read");
  metadata._Query = class _Query extends core.Object {
    get selector() {
      return this[selector$0];
    }
    set selector(value) {
      super.selector = value;
    }
    get descendants() {
      return this[descendants$];
    }
    set descendants(value) {
      super.descendants = value;
    }
    get first() {
      return this[first$];
    }
    set first(value) {
      super.first = value;
    }
    get read() {
      return this[read$];
    }
    set read(value) {
      super.read = value;
    }
  };
  (metadata._Query.new = function(selector, opts) {
    let descendants = opts && 'descendants' in opts ? opts.descendants : false;
    let first = opts && 'first' in opts ? opts.first : false;
    let read = opts && 'read' in opts ? opts.read : null;
    this[selector$0] = selector;
    this[descendants$] = descendants;
    this[first$] = first;
    this[read$] = read;
    ;
  }).prototype = metadata._Query.prototype;
  dart.addTypeTests(metadata._Query);
  dart.addTypeCaches(metadata._Query);
  dart.setLibraryUri(metadata._Query, L25);
  dart.setFieldSignature(metadata._Query, () => ({
    __proto__: dart.getFields(metadata._Query.__proto__),
    selector: dart.finalFieldType(dart.legacy(core.Object)),
    descendants: dart.finalFieldType(dart.legacy(core.bool)),
    first: dart.finalFieldType(dart.legacy(core.bool)),
    read: dart.finalFieldType(dart.legacy(core.Object))
  }));
  metadata.ContentChildren = class ContentChildren extends metadata._Query {};
  (metadata.ContentChildren.new = function(selector, opts) {
    let descendants = opts && 'descendants' in opts ? opts.descendants : true;
    let read = opts && 'read' in opts ? opts.read : null;
    metadata.ContentChildren.__proto__.new.call(this, selector, {descendants: descendants, read: read});
    ;
  }).prototype = metadata.ContentChildren.prototype;
  dart.addTypeTests(metadata.ContentChildren);
  dart.addTypeCaches(metadata.ContentChildren);
  dart.setLibraryUri(metadata.ContentChildren, L25);
  metadata.ContentChild = class ContentChild extends metadata._Query {};
  (metadata.ContentChild.new = function(selector, opts) {
    let read = opts && 'read' in opts ? opts.read : null;
    metadata.ContentChild.__proto__.new.call(this, selector, {descendants: true, first: true, read: read});
    ;
  }).prototype = metadata.ContentChild.prototype;
  dart.addTypeTests(metadata.ContentChild);
  dart.addTypeCaches(metadata.ContentChild);
  dart.setLibraryUri(metadata.ContentChild, L25);
  metadata._ViewQuery = class _ViewQuery extends metadata._Query {};
  (metadata._ViewQuery.new = function(selector, opts) {
    let descendants = opts && 'descendants' in opts ? opts.descendants : false;
    let first = opts && 'first' in opts ? opts.first : false;
    let read = opts && 'read' in opts ? opts.read : null;
    metadata._ViewQuery.__proto__.new.call(this, selector, {descendants: descendants, first: first, read: read});
    ;
  }).prototype = metadata._ViewQuery.prototype;
  dart.addTypeTests(metadata._ViewQuery);
  dart.addTypeCaches(metadata._ViewQuery);
  dart.setLibraryUri(metadata._ViewQuery, L25);
  metadata.ViewChildren = class ViewChildren extends metadata._ViewQuery {};
  (metadata.ViewChildren.new = function(selector, opts) {
    let read = opts && 'read' in opts ? opts.read : null;
    metadata.ViewChildren.__proto__.new.call(this, selector, {descendants: true, read: read});
    ;
  }).prototype = metadata.ViewChildren.prototype;
  dart.addTypeTests(metadata.ViewChildren);
  dart.addTypeCaches(metadata.ViewChildren);
  dart.setLibraryUri(metadata.ViewChildren, L25);
  metadata.ViewChild = class ViewChild extends metadata._ViewQuery {};
  (metadata.ViewChild.new = function(selector, opts) {
    let read = opts && 'read' in opts ? opts.read : null;
    metadata.ViewChild.__proto__.new.call(this, selector, {descendants: true, first: true, read: read});
    ;
  }).prototype = metadata.ViewChild.prototype;
  dart.addTypeTests(metadata.ViewChild);
  dart.addTypeCaches(metadata.ViewChild);
  dart.setLibraryUri(metadata.ViewChild, L25);
  var bindingPropertyName$ = dart.privateName(metadata, "Input.bindingPropertyName");
  metadata.Input = class Input extends core.Object {
    get bindingPropertyName() {
      return this[bindingPropertyName$];
    }
    set bindingPropertyName(value) {
      super.bindingPropertyName = value;
    }
  };
  (metadata.Input.new = function(bindingPropertyName = null) {
    this[bindingPropertyName$] = bindingPropertyName;
    ;
  }).prototype = metadata.Input.prototype;
  dart.addTypeTests(metadata.Input);
  dart.addTypeCaches(metadata.Input);
  dart.setLibraryUri(metadata.Input, L25);
  dart.setFieldSignature(metadata.Input, () => ({
    __proto__: dart.getFields(metadata.Input.__proto__),
    bindingPropertyName: dart.finalFieldType(dart.legacy(core.String))
  }));
  var bindingPropertyName$0 = dart.privateName(metadata, "Output.bindingPropertyName");
  metadata.Output = class Output extends core.Object {
    get bindingPropertyName() {
      return this[bindingPropertyName$0];
    }
    set bindingPropertyName(value) {
      super.bindingPropertyName = value;
    }
  };
  (metadata.Output.new = function(bindingPropertyName = null) {
    this[bindingPropertyName$0] = bindingPropertyName;
    ;
  }).prototype = metadata.Output.prototype;
  dart.addTypeTests(metadata.Output);
  dart.addTypeCaches(metadata.Output);
  dart.setLibraryUri(metadata.Output, L25);
  dart.setFieldSignature(metadata.Output, () => ({
    __proto__: dart.getFields(metadata.Output.__proto__),
    bindingPropertyName: dart.finalFieldType(dart.legacy(core.String))
  }));
  var hostPropertyName$ = dart.privateName(metadata, "HostBinding.hostPropertyName");
  metadata.HostBinding = class HostBinding extends core.Object {
    get hostPropertyName() {
      return this[hostPropertyName$];
    }
    set hostPropertyName(value) {
      super.hostPropertyName = value;
    }
  };
  (metadata.HostBinding.new = function(hostPropertyName = null) {
    this[hostPropertyName$] = hostPropertyName;
    ;
  }).prototype = metadata.HostBinding.prototype;
  dart.addTypeTests(metadata.HostBinding);
  dart.addTypeCaches(metadata.HostBinding);
  dart.setLibraryUri(metadata.HostBinding, L25);
  dart.setFieldSignature(metadata.HostBinding, () => ({
    __proto__: dart.getFields(metadata.HostBinding.__proto__),
    hostPropertyName: dart.finalFieldType(dart.legacy(core.String))
  }));
  var eventName$ = dart.privateName(metadata, "HostListener.eventName");
  var args$ = dart.privateName(metadata, "HostListener.args");
  metadata.HostListener = class HostListener extends core.Object {
    get eventName() {
      return this[eventName$];
    }
    set eventName(value) {
      super.eventName = value;
    }
    get args() {
      return this[args$];
    }
    set args(value) {
      super.args = value;
    }
  };
  (metadata.HostListener.new = function(eventName, args = null) {
    this[eventName$] = eventName;
    this[args$] = args;
    ;
  }).prototype = metadata.HostListener.prototype;
  dart.addTypeTests(metadata.HostListener);
  dart.addTypeCaches(metadata.HostListener);
  dart.setLibraryUri(metadata.HostListener, L25);
  dart.setFieldSignature(metadata.HostListener, () => ({
    __proto__: dart.getFields(metadata.HostListener.__proto__),
    eventName: dart.finalFieldType(dart.legacy(core.String)),
    args: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String))))
  }));
  var C23;
  var C24;
  visibility.Visibility = class Visibility extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (visibility.Visibility.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = visibility.Visibility.prototype;
  dart.addTypeTests(visibility.Visibility);
  dart.addTypeCaches(visibility.Visibility);
  dart.setMethodSignature(visibility.Visibility, () => ({
    __proto__: dart.getMethods(visibility.Visibility.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(visibility.Visibility, L27);
  dart.setFieldSignature(visibility.Visibility, () => ({
    __proto__: dart.getFields(visibility.Visibility.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$1]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(visibility.Visibility, ['toString']);
  visibility.Visibility.local = C22 || CT.C22;
  visibility.Visibility.all = C23 || CT.C23;
  visibility.Visibility.values = C24 || CT.C24;
  var _logger = dart.privateName(exception_handler, "_logger");
  var _logger$ = dart.privateName(exception_handler, "ExceptionHandler._logger");
  exception_handler.ExceptionHandler = class ExceptionHandler extends core.Object {
    get [_logger]() {
      return this[_logger$];
    }
    set [_logger](value) {
      super[_logger] = value;
    }
    static _longStackTrace(stackTrace) {
      return IterableLOfObjectL().is(stackTrace) ? stackTrace[$join]("\n\n-----async gap-----\n") : dart.toString(stackTrace);
    }
    static exceptionToString(exception, stackTrace = null, reason = null) {
      let buffer = new core.StringBuffer.new();
      buffer.writeln("EXCEPTION: " + dart.str(exception));
      if (stackTrace != null) {
        buffer.writeln("STACKTRACE: ");
        buffer.writeln(exception_handler.ExceptionHandler._longStackTrace(stackTrace));
      }
      if (reason != null) {
        buffer.writeln("REASON: " + dart.str(reason));
      }
      return buffer.toString();
    }
    call(exception, stackTrace = null, reason = null) {
      this[_logger].severe(exception_handler.ExceptionHandler.exceptionToString(exception, stackTrace, reason));
    }
  };
  (exception_handler.ExceptionHandler.new = function(_logger) {
    this[_logger$] = _logger;
    ;
  }).prototype = exception_handler.ExceptionHandler.prototype;
  dart.addTypeTests(exception_handler.ExceptionHandler);
  dart.addTypeCaches(exception_handler.ExceptionHandler);
  dart.setMethodSignature(exception_handler.ExceptionHandler, () => ({
    __proto__: dart.getMethods(exception_handler.ExceptionHandler.__proto__),
    call: dart.fnType(dart.void, [dart.dynamic], [dart.dynamic, dart.legacy(core.String)])
  }));
  dart.setLibraryUri(exception_handler.ExceptionHandler, L28);
  dart.setFieldSignature(exception_handler.ExceptionHandler, () => ({
    __proto__: dart.getFields(exception_handler.ExceptionHandler.__proto__),
    [_logger]: dart.finalFieldType(dart.legacy(logger.Logger))
  }));
  dart.trackLibraries("packages/angular/src/core/change_detection/change_detection", {
    "package:angular/src/di/injector/hierarchical.dart": hierarchical,
    "package:angular/src/di/injector/injector.dart": injector,
    "package:angular/src/core/di/opaque_token.dart": opaque_token,
    "package:angular/src/runtime.dart": runtime,
    "package:angular/src/runtime/optimizations.dart": optimizations,
    "package:angular/src/di/injector/runtime.dart": runtime$,
    "package:angular/src/di/injector/empty.dart": empty,
    "package:angular/src/di/reflector.dart": reflector,
    "package:angular/src/core/di/decorators.dart": decorators,
    "package:angular/src/di/providers.dart": providers,
    "package:angular/src/di/module.dart": module$,
    "package:angular/src/di/errors.dart": errors,
    "package:angular/src/di/injector/map.dart": map,
    "package:angular/src/core/change_detection/change_detection_util.dart": change_detection_util,
    "package:angular/src/facade/lang.dart": lang,
    "package:angular/src/core/metadata/lifecycle_hooks.dart": lifecycle_hooks,
    "package:angular/src/core/di/provider.dart": provider,
    "package:angular/src/core/metadata/typed.dart": typed,
    "package:angular/src/core/metadata/view.dart": view,
    "package:angular/src/core/change_detection/pipe_transform.dart": pipe_transform,
    "package:angular/src/core/change_detection/change_detection.dart": change_detection,
    "package:angular/src/core/change_detection/differs/default_keyvalue_differ.dart": default_keyvalue_differ,
    "package:angular/src/core/change_detection/differs/default_iterable_differ.dart": default_iterable_differ,
    "package:angular/src/core/change_detection/constants.dart": constants,
    "package:angular/src/core/change_detection/change_detector_ref.dart": change_detector_ref,
    "package:angular/src/core/zone/ng_zone.dart": ng_zone,
    "package:angular/src/core/di.dart": di,
    "package:angular/src/core/metadata.dart": metadata,
    "package:angular/src/core/metadata/visibility.dart": visibility,
    "package:angular/src/facade/exception_handler.dart": exception_handler
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../../di/injector/injector.dart","../../di/injector/hierarchical.dart","../di/opaque_token.dart","../../runtime/optimizations.dart","../../di/injector/runtime.dart","../../di/injector/empty.dart","../../di/reflector.dart","../di/decorators.dart","../../di/providers.dart","../../di/module.dart","../../di/errors.dart","../../di/injector/map.dart","change_detection_util.dart","../../facade/lang.dart","../metadata/lifecycle_hooks.dart","../metadata/typed.dart","../metadata/view.dart","pipe_transform.dart","differs/default_keyvalue_differ.dart","differs/default_iterable_differ.dart","constants.dart","change_detector_ref.dart","../zone/ng_zone.dart","../metadata.dart","../metadata/visibility.dart","../../facade/exception_handler.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;QAuFqB,OAAe;AACA,MAAhC,0BAA0B,KAAK;AACzB,mBAAS,oBAAe,KAAK,EAAE,aAAa;AAClD,UAAI,eAAU,MAAM,EAAE;AACpB,cAAO,yBAAe,MAAM,KAAK;;AAEH,MAAhC,0BAA0B,KAAK;AAC/B,YAAO,OAAM;IACf;mBAkBqC;AAOnC,WAAS,CAAF,wCAAK,gDAAS;AACrB,YAAO,0CAAW,SAAI,KAAK;IAC7B;2BAU6C;AAE3C,WAAS,CAAF,wCAAK,gDAAS;AACrB,YAAO,0CAAW,SAAI,KAAK,EAAE;IAC/B;oBAKiC;AAC/B,YAAO,0CAAW,SAAI,KAAK;IAC7B;4BAKyC;AACvC,YAAO,0CAAW,SAAI,KAAK,EAAE;IAC/B;;;;EA9FgB;;;;;;;;;;;;;ICxCW;;;;;;mBAalB,OACA;AAEyB,MAAhC,0BAA0B,KAAK;AAC3B,mBAAS,4BAAuB,KAAK,EAAE,MAAM;AACjD,UAAI,eAAU,MAAM,EAAE,MAAM;AACwB,QAAlD,SAAS,gCAA2B,KAAK,EAAE,MAAM;;AAEnB,MAAhC,0BAA0B,KAAK;AAC/B,YAAO,OAAM;IACf;sBAU2B;AACnB,mBAAS,4BAAuB,KAAK;AAC3C,UAAI,eAAU,MAAM,EAAE;AACpB,cAAO,yBAAe,MAAM,KAAK;;AAEnC,YAAO,0CAAc,MAAM;IAC7B;wBAqB6B;AACrB,mBAAS,8BAAyB,KAAK;AAC7C,UAAI,eAAU,MAAM,EAAE;AACpB,cAAO,yBAAe,MAAM,KAAK;;AAEnC,YAAO,0CAAc,MAAM;IAC7B;6BASS,OACA;AAEL,YAAA,AAAO,oCAAuB,KAAK,EAAE,MAAM;IAAC;0BAUjB;AACvB,mBAAS,gCAA2B,KAAK;AAC/C,UAAI,eAAU,MAAM,EAAE;AACpB,cAAO,yBAAe,MAAM,KAAK;;AAEnC,YAAO,0CAAc,MAAM;IAC7B;+BASS,OACA;AAEL,YAAA,AAAO,4BAAe,KAAK,EAAE,MAAM;IAAC;;oDAvGS;;oBAGpC,4BAAS,KAAP,MAAM,QAAN;AAHT;;EAGyC;;IAGH;AAAtC;;EAA8C;;;;;;;;;;;;;;;;;;;;;IDmJjC;;;;;;;;IAES;;EAAoB;;;;;;;;oDA5JrB,UAAiB;AACT,IAAnC,WAAM,uBAAuB,KAAK;EACpC;;MALa,wBAAe;;;;;;;;;;ME+Bb;;;;;;;AAMX,sBAAI;AACF,gBAAO,AAAwD,4BAAlC,sBAAW,iBAAI,uBAAC,iBAAI,qBAAW;;AAE9D,cAAa;MACf;;;MARwB;;IAAkB;;;;;;;;;;;;;;;;;;;;;;;;;;AAyErB,cAAG;MAAE;;AAIxB,sBAAI;AACF,gBAAO,AAAuD,2BAAlC,oBAAW,iBAAI,uBAAC,iBAAI,qBAAW;;AAE7D,cAAa;MACf;;+BAXyB;AAAoB,0CAAM,UAAU;;IAAC;;;;;;;;;;;;;;+DAetB;AAAU,UAAA,AAAM,MAAD;EAAU;oDC/F5C;AAAQ,gCAAG;;;;AA7B5B,oBAAU;AACd,YAAO,UAAU;AACjB,YAAO,QAAO;IAChB;;AAUsB;IAAkB;;;4BCKvB,kBACJ;AAGH,0BAAgB,2BAAkB,gBAAgB;AACxD,oBAAI;AAC8C,QAAhD,0BAAiB,AAAc,AAAU,aAAX;AACgB,QAA9C,0BAAiB,AAAc,aAAD;;AAEhC,YAAO,mCACL,AAAc,aAAD,YACb,AAAc,aAAD,iBACb,kDAAW,MAAM,GACjB;IAEJ;kCAyBe,kBACJ;AAEH,0BAAgB,2BAAkB,gBAAgB;AACxD,oBAAI;AACoD,QAAtD,gCAAuB,AAAc,AAAU,aAAX;AACgB,QAApD,gCAAuB,AAAc,aAAD;;AAEtC,YAAO,mCACL,AAAc,aAAD,YACb,AAAc,aAAD,iBACb,kDAAW,MAAM,GACjB;IAEJ;;;;EAOF;;;;;;;;;;;;;2BA2BW,OACA;;AAGH,qBAAW,AAAU,wBAAC,KAAK;AAE/B,UAAI,AAAS,QAAD,IAAI,mBAAS,AAAW,+BAAY,KAAK;AAC7C,uBAAW,AAAU,yBAAC,KAAK;AAEjC,YAAI,AAAS,QAAD,IAAI;AACd,gBAAO,OAAM;;AAGf,sBAAI,0BAAiB,QAAQ;AAC3B,eAAO;eAAW,AAAS,QAAD;eAAU,oBAAc,QAAQ;UAAzC;;;AAE0C,QAA7D,AAAU,wBAAC,KAAK,EAAI,WAAW,yBAAe,QAAQ,EAAE;;AAE1D,YAAO,SAAQ;IACjB;0BAGsD;AACpD,oBAAI;AACF,cAA0B,oDAAuB,gBAAgB,EAAE;;AAErE,YAA0B,8CAAiB,gBAAgB,EAAE;IAC/D;0BAGsC;AAC9B,qBAA0B,eAAf,cAAc,IACzB,cAAc,GACd,0BACE,cAAc,aACJ,kCAAiB,cAAc;AAEjD,oBAAI;AACgC,QAAlC,gCAAuB,+BAAC,QAAQ;;AAElC,YAAO,0BAAe,QAAQ,EAAE;IAClC;mBAaiC,OAAqB;AACX,MAAzC,AAAK,IAAD,IAAC,OAAL,OAAS,0BAA0B,KAAK,IAAnC;AACC,qBAAW,oBAAa,AAAK,IAAD;AAClC,eAAS,IAAI,GAAG,IAAI,AAAS,QAAD,WAAS,AAAE,CAAD,gBAAG,CAAC,GAAE,IAAA,AAAC,CAAA;AACrC,kBAAM,AAAI,IAAA,QAAC,CAAC;AACX;AACP,YAAQ,oBAAJ,GAAG;AACqB,UAA1B,SAAS,mBAAa,GAAG;;AAEK,UAA9B,0BAA0B,GAAG;AACZ,UAAjB,SAAS,SAAI,GAAG;AACc,UAA9B,0BAA0B,GAAG;;AAI/B,YAAI,eAAU,MAAM,EAAE;AACpB,gBAAO,yBAAe,MAAM,GAAG;;AAEb,QAApB,AAAQ,QAAA,QAAC,CAAC,EAAI,MAAM;;AAEtB,YAAO,SAAQ;IACjB;oBAE4C;AACpC,oBAAU,sBAAY,QAAQ;AACpC,eAAW,QAAS;AAClB,YAAI,eAAU,AAAM,KAAD,QAAQ,AAAS,QAAD;AACO,UAAxC,AAAQ,OAAD,OAAK,yBAAe,KAAK,EAAE;;;AAGtC,YAAO,QAAO;IAChB;mBAEiC;AACxB;AACH,uBAAa;AACb,uBAAa;AACb,mBAAS;AACT,mBAAS;AACb,eAAS,IAAI,GAAG,IAAI,AAAS,QAAD,WAAS,AAAE,CAAD,gBAAG,CAAC,GAAE,IAAA,AAAC,CAAA;AACrC,yBAAa,AAAQ,QAAA,QAAC,CAAC;AAC7B,YAAe,aAAX,UAAU;AACY,UAAxB,QAAQ,AAAW,UAAD;cACb,KAAe,eAAX,UAAU;AACF,UAAjB,aAAa;cACR,KAAe,eAAX,UAAU;AACF,UAAjB,aAAa;cACR,KAAe,WAAX,UAAU;AACN,UAAb,SAAS;cACJ,KAAe,WAAX,UAAU;AACN,UAAb,SAAS;;AAES,UAAlB,QAAQ,UAAU;;;AAIf;AACyB,MAAhC,0BAA0B,KAAK;AACzB,mBAAS,UAAU,GAAG,OAAO;AACnC,UAAI,UAAU;AACsC,QAAlD,SAAS,gCAA2B,KAAK,EAAE,MAAM;YAC5C,KAAI,MAAM;AAC+B,QAA9C,SAAS,4BAAuB,KAAK,EAAE,MAAM;YACxC,KAAI,MAAM;AACiC,QAAhD,SAAS,8BAAyB,KAAK,EAAE,MAAM;;AAET,QAAtC,SAAS,oBAAe,KAAK,EAAE,MAAM;;AAEvC,UAAI,eAAU,MAAM,EAAE;AACO,QAA3B,wBAAe,MAAM,KAAK;;AAEI,MAAhC,0BAA0B,KAAK;AAC/B,YAAO,OAAM;IACf;aAGqB;UAAqB;AAClC,oBAAU,qBAAqB,KAAK;AAC1C,YAAgB,qBAAM,OAAO,EAAE,mBAAa,KAAK,EAAE,IAAI;IACzD;gBAG0B;AAAO,sBAAI,EAAE;IAAC;eAGb;UAAuB;AAC1C,yBAAe,mBAAa,OAAO,EAAE,IAAI;AAE/C,YAC6C,UAAzC,0DAAgC,OAAO,gBAAK,AAAa,YAAD,mCAAW,AACnE,kEAAsD,OAAO,gBAC7D,wEACA,0EACA;AACJ,YAAgB,qBAAM,OAAO,EAAE,YAAY;IAC7C;2CAEqD;AACnD,YAAgB,kBAAT;IACT;aAGuB;AAAU,kBAAK;;;4CAxK/B,YACA,iBACgB,QAChB;IAXD,mBAAiB;IAQhB;IACA;IAEA;AACH,uDAAM,MAAM;AACd,UAAO,AAAO,MAAD,IAAI,yBAAM;AAEI,IAA3B,AAAU,wBAAC,4BAAY;EACzB;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoKqC;;;;;;IACR;;;;;;;0CAEH,WAAgB;IAAhB;IAAgB;;EAAe;;;;;;;;;wDA5L5B;AAAM,UAAQ,AAAQ,aAAhB,AAAE,CAAD,QAAU,SAAgB,iBAAR,AAAE,CAAD;EAAoB;wDAmM9B;AAC7C,aAAW,WAAY,UAAS;AAC9B,UAAI,AAAS,QAAD,aAAa;AACgB,QAAvC,qBAAqB,AAAS,QAAD;YACxB,KAAI,AAAS,QAAD,eAAe,QAAQ,AAAS,AAAK,QAAN,SAAS;AACX,QAA9C,0BAA0B,AAAS,QAAD;YAC7B,KAAI,AAAU,AAAS,QAAD,yCACzB,AAAS,AAAY,QAAb,gBAAgB,QACT,WAAf,AAAS,QAAD;AAC4C,QAAtD,qBAAqB,kCAAiB,AAAS,QAAD;;;EAGpD;0EAG8C;AAa3C,IAZD,WAAM,8BAAgB,AACpB,sDAA0C,AAAS,QAAD,UAAO,YACrD,8EACA,OACA,8EACA,mDACA,yDACA,OACA,8EACA,6EACA,6EACA;EAER;oEAKqD;AACnD,aAAW,WAAY,UAAS;AAE9B,UAAe,AAAS,QAAD;AACrB;;AAGF,UAAe,AAAS,QAAD,gBAAc;AACnC;;AAGF,UAAe,AAAS,QAAD;AACrB,YAAI,AAAS,QAAD,SAAS;AACnB;;;AAG+B,MAAnC,mCAA0B,QAAQ;;EAEtC;0DAMe,kBACiB,qBACP;AAEkC,IAAzD,AAAa,YAAD,IAAC,OAAb,eAAiB,wDAAJ;AAC0B,IAAvC,AAAe,cAAD,IAAC,OAAf,iBAAqC,uCAAtB;AACf,aAAS,IAAI,GAAG,MAAM,AAAiB,gBAAD,WAAS,AAAE,CAAD,gBAAG,GAAG,GAAE,IAAA,AAAC,CAAA;AACjD,iBAAO,AAAgB,gBAAA,QAAC,CAAC;AAC/B,UAAS,oBAAL,IAAI;AAC+C,QAArD,2BAAkB,IAAI,EAAE,YAAY,EAAE,cAAc;YAC/C,KAAS,eAAL,IAAI;AACb,sBAAI,0BAAiB,IAAI;AACC,UAAxB,AAAe,cAAD,OAAK,IAAI;;AAKM,QAA/B,AAAY,YAAA,QAAC,AAAK,IAAD,QAAU,IAAI;YAC1B,KAAS,WAAL,IAAI;AACsC,QAAnD,AAAY,YAAA,QAAC,IAAI,EAAI,6BAAS,IAAI,aAAY,IAAI;YAC7C,KAAS,aAAL,IAAI;AACP,wBAAY,6BAAqB,IAAI;AACe,QAA1D,2BAAkB,SAAS,EAAE,YAAY,EAAE,cAAc;;AAEzD,aAAO,yBAAO,AAAoB,2BAAL,IAAI;;;AAGrC,UAAO,iCAAe,YAAY,EAAE,cAAc;EACpD;;2BCpWW,OACA;AAEL,YAAU,MAAK,KAAE,6BAAY,OAAO,MAAM;;6BAIrC,OACA;AAEP,UAAI,AAAO,eAAG;AACZ,cAAO,OAAM;;AAEf,YAAO,AAAO,oCAAuB,KAAK,EAAE,MAAM;IACpD;+BAIS,OACA;AAEP,UAAI,AAAO,eAAG;AACZ,cAAO,OAAM;;AAEf,YAAO,AAAO,4BAAe,KAAK,EAAE,MAAM;IAC5C;;sCA7B0C;AAAiB,wDAAW,MAAM;;EAAC;;;;;;;;;2DCenD,MAAmC;AAChC,IAA7B,AAAW,6BAAC,IAAI,EAAI,SAAS;EAC/B;iDAG+C;AACvC,oBAAY,AAAW,6BAAC,IAAI;AAClC,kBAAI,4BAAa,AAAU,SAAD,IAAI;AACqC,MAAjE,WAAM,wBAAW,AAA+C,qDAAN,IAAI;;AAEhE,UAAO,UAAS;EAClB;uDAQ4B,YAAqB;AACf,IAAhC,AAAU,4BAAC,UAAU,EAAI,OAAO;EAClC;6CAGyB;AACjB,kBAAU,AAAU,4BAAC,IAAI;AAC/B,kBAAI,4BAAa,AAAQ,OAAD,IAAI;AAC1B,oBAAI,AAAW;AAQoC,QAPjD,WAAM,wBAAU,AACZ,2CAA+B,IAAI,0CACnC,mEACA,mEACA,8DACA,oEACA,uEACA;;AAKe,MAHrB,WAAM,wBAAU,AAAC,2CAA+B,IAAI,4BAChD,yEACA,yEACA;;AAEN,UAAO,QAAO;EAChB;iEAeiC,WAA8B;AACtB,IAAvC,AAAa,+BAAC,SAAS,EAAI,YAAY;EACzC;uDAGoC;;AAClC,SAAO,AAAa,+BAAC,MAAM;iBAAP;EACtB;;MAvEM,qBAAW;YAA0C;;MAmBrD,oBAAU;YAAqB;;MAgC/B,uBAAa;YAA+B;;;;;IC/B1C;;;;;;;AAKe,YAAA,AAAiB,uBAAP,cAAK;IAAE;;;IAHpB;;EAAM;;;;;;;;;;;;;;;;;EA6DN;;;;;;;EAsBF;;;;;;;EA0BJ;;;;;;;EA0BI;;;;;;;EAyDJ;;;;;;;EC7Md;;;;;;;;;;;;;;;;;;MAsCe;;;;;;MAUF;;;;;;MAcE;;;;;;MAKA;;;;;;MAYE;;;;;;MAGI;;;;;;MAOR;;;;;;wBAoCmC;;AAE5C,YAAe;AACb,gBAAO,AAAQ,QAAD,UAAU;;AAE1B,YAAI,mBAAc;AAChB,gBAAO,AAAQ,QAAD,YAAY,wBAAkB;;AAE9C,YAAI,oBAAe;AACjB,gBAAO,AAAQ,QAAD,aAAa;;AAE7B,cAAO,AAAQ,QAAD,WAAmB,0BAAT,OAAY,kCAAiB,0BAAc;MACrE;;AAG0B,cAAG;MAAE;;4BA5BxB;UACA;UACA;UACA;UACA;UACA;UACA;MANA;MACA;MACA;MACA;MACA;MACA;MACA;;IACL;;;;;;;;;;;;;;;;;;;;;;;;;;;iCAuEO;;UACF;UACA;AACI,4CACH,KAAK,yBAEc,KAAT,QAAQ,QAAR,OAAY,KAAK,gBACpB,KAAK;;IACb;;;;;;;;;;;;oCAwBE,OACA;UACF;AACI,+CACH,KAAK,gBACQ,WAAW,SACjB,KAAK;;IACb;;;;;;;;;;;;mCA+BE,OACE;UACJ;UACQ;AACJ,8CACH,KAAK,eACO,UAAU,SACf,KAAK,QACN,IAAI;;IACX;;;;;;;;;;;;iCAgCE,OACL;UACG;AACI,4CACH,KAAK,aACK,QAAQ,SACX,KAAK;;IACb;;;;;;;;;0CA5SA;QACF;QACE;QACA;QACE;QACI;QACR;AAEH,wDACE,KAAK,aACK,QAAQ,YACR,QAAQ,eACL,WAAW,cACZ,UAAU,QAChB,IAAI,SACH,KAAK;EACb;qDAwH0B,UAAiC;AAC9D,UAAO,AAAS,SAAD,kBAAiB,OAAO;EACzC;+CAOkC;AAC1B,gBAAQ,AAAS,QAAD;AACtB,QAAU,iBAAN,KAAK;AACP,YAAO,0CAAiB,KAAK;;AAE/B,UAAO,AAAS,SAAD;EACjB;;MAlLa,yBAAe;;;;;;;;;ICiCP;;;;;;IACU;;;;;;;;QAStB;QACA;IADA;IACA;;EACL;;;;;;;;;+DAM+C;AAC3C,iBAA2B;AAC3B,mBAAW,AAAO,MAAD;AACvB,aAAS,IAAI,GAAG,IAAI,AAAS,QAAD,WAAS,AAAE,CAAD,gBAAG,CAAC,GAAE,IAAA,AAAC,CAAA;AACK,MAAhD,AAAO,MAAD,UAAQ,6BAAqB,AAAQ,QAAA,QAAC,CAAC;;AAEzC,mBAAW,AAAO,MAAD;AACvB,aAAS,IAAI,GAAG,IAAI,AAAS,QAAD,WAAS,AAAE,CAAD,gBAAG,CAAC,GAAE,IAAA,AAAC,CAAA;AACpB,MAAvB,AAAO,MAAD,OAAK,AAAQ,QAAA,QAAC,CAAC;;AAEvB,UAAO,OAAM;EACf;;;ACJE;;EAAkB;;;;;;;;IAyBL;;;;;;IAGM;;;;;;gCAtBmC,OAAc;AAClE,UAAI,AAAM,KAAD,IAAI;AACX;;AAEI,mBAAiB;AACnB,wBAAc;AAClB,eAAW,UAAW,MAAK;AACzB,4BAAe,WAAW,EAAE,OAAO;AACA,UAAjC,AAAO,MAAD,OAAK,cAAc,OAAO;;;AAIpC,oBAAI,AAAO,MAAD;AACW,QAAnB,AAAO,MAAD;;AAER,YAAO,OAAM;IACf;;AAaqB,uBAAA,AAAK,uBACpB,wBAAiB,cACO,aAAxB,wBAAiB,gBAAO,AACtB,gBAAK,AAAK,iBAAK,WAAQ,kBAAK,cAAK,QACjC,qEACA,wEACA;IAA+D;;wCAXhD,OAAoB;IAApB;IACZ,aAAE,4CAAqB,KAAK,EAAE,KAAK;AAClC;;EAAG;;;;;;;;;;;;;;;0DAlFc;AAE7B,kBAAI;AACF,UAAI,AAAY,sBAAG;AACI,QAArB,qBAAc,uBAAC,KAAK;;AAEE,QAAtB,AAAY,yBAAI,KAAK;;;EAG3B;0DAI+B;AAE7B,kBAAI;AACI,oBAAU,AAAY;AAC5B,WAAO,eAAU,OAAO,EAAE,KAAK;;EAEnC;2DAG8B,OAAoB;AACvB,IAAzB,0BAAmB,KAAK;AAClB,iBAAS,AAAI,IAAA;AACM,IAAzB,0BAAmB,KAAK;AACxB,UAAO,OAAM;EACf;oDAG6B;AAG3B,kBAAI;AACI,kBAAwB,8BAAE,KAAK,EAAE;AAErB,MAAlB,qBAAc;AACd,YAAO,MAAK;;AAEd,UAAO,4BAAc,wBAAiB,KAAK;EAC7C;sDAE+B;AAAU,UAAA,AAA8B,qCAAN,KAAK;EAAC;;MAxD1D,kBAAW;;;;;;;;ICOI;;;;;;2BASjB,OACA;AAEH,mBAAS,AAAU,wBAAC,KAAK;AAC7B,UAAI,AAAO,MAAD,IAAI;AACZ,aAAO,WAAC,AAAW,+BAAY,KAAK,sBAChC,AAAsD,wBAA1C,KAAK;AACrB,YAAI,AAAU,KAAK,KAAE;AACnB,gBAAO;;AAEM,QAAf,SAAS,MAAM;;AAEjB,YAAO,OAAM;IACf;;kCAnBO,YACgB;IADhB;AAEF,6CAAM,MAAM;;EAAC;;;;;;;;;;;;;;;;WCTC,GAAU;AAC3B,UAAM,wBAAF,CAAC,KAA0B,wBAAF,CAAC;AAC5B,cAAkD,sBAAO,CAAC,EAAE,CAAC;YACxD,MAAM,wBAAF,CAAC,gBACP,iBAAY,CAAC,OACZ,wBAAF,CAAC,gBACA,iBAAY,CAAC;AAEhB,cAAO;;AAEP,cAAO,gBAAU,CAAC,EAAE,CAAC;;IAEzB;;;AAfM;;EAAkB;;;;;;;IAsBhB;;;;;;IACA;;;;;;;qDACU,eAAoB;IAApB;IAAoB;;EAAa;;;;;;;;;6DAN5B,GAAU;AAAM,UAAyB,sBAAO,CAAC,EAAE,CAAC;EAAC;kCCnBlD,GAAU;AAChC,gBAAgB;AAChB,kBAAU;AACd,aAAS,QAAS,AAAO,OAAD,YAAY,CAAC;AACS,MAA5C,AAAM,KAAD,OAAK,AAAE,CAAD,aAAW,OAAO,EAAE,AAAM,KAAD;AACjB,MAAnB,UAAU,AAAM,KAAD;AACf,eAAS,IAAI,GAAG,MAAM,AAAM,KAAD,aAAa,AAAE,CAAD,gBAAG,GAAG,GAAE,IAAA,AAAC,CAAA;AACnB,QAA7B,AAAM,KAAD,OAAK,AAAM,KAAD,OAAO,AAAE,CAAD,GAAG;;;AAGC,IAA/B,AAAM,KAAD,OAAK,AAAE,CAAD,aAAW,OAAO;AAC7B,UAAO,MAAK;EACd;0CAEwB;AACpB,UAAI,AAAqC,WAAzC,GAAG,KAAe,WAAJ,GAAG,KAAY,AAAI,GAAD,IAAI,QAAY,aAAJ,GAAG;EAAU;;;;;;;;;;;;;;;ICI7D;;wDAVK;;;;EAUL;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAoCA;;;;;;;EAWA;;;;;;;EA4CA;;;;;;;EA4CA;;;;;;;EAoEA;;;;;;;EAwDA;;;;;;;EAwDA;;;;;;;EAqDA;;;;;;;EAqDA;;;;;;;;;MCtYe;;;;;;MAYM;;;;;;;;UAyBD;;MAAqB,uBAAE;;IAAI;yBAiCzB;UAAqB;MAArB;MAAqB;;IAAI;;;;;;;;;;;;;;;;;;;;;IC5G/C;;gDAXK;;;;EAWL;;;;;;;;;;;;;;;;;;;;;ECaA;;;;;;;;;;;;;;;;;;;;;;;;;;ACXI,YAAuB,AACiB,yBADD,QACnB,sBAAc,QACd,uBAAe;IACrC;uBAE6B;AAC3B,eAAS,SAAc,oBACR,MAAM,IAAE,MACnB,SAAS,AAAO,MAAD;AACP,QAAV,AAAE,EAAA,CAAC,MAAM;;IAEb;qBAE2B;AACzB,eAAS,SAAc,sBACR,MAAM,IAAE,MACnB,SAAS,AAAO,MAAD;AACP,QAAV,AAAE,EAAA,CAAC,MAAM;;IAEb;uBAE6B;AAC3B,eAAS,SAAc,qBACR,MAAM,IAAE,MACnB,SAAS,AAAO,MAAD;AACP,QAAV,AAAE,EAAA,CAAC,MAAM;;IAEb;SAE+C;AACnC,MAAV,AAAI,GAAD,IAAC,OAAJ,MAAQ,2CAAJ;AACJ,WAAQ,2BAAJ,GAAG;AAC0C,QAA/C,WAAM,wBAAW,AAA6B,oCAAL,GAAG;;AAE9C,oBAAI,AAAK,WAAM,GAAG;AAChB,cAAO;;AAEP,cAAO;;IAEX;UAK+B;AACrB,MAAR;AAEA,UAAI,AAAS,kBAAG;AAeZ,QAbF,AAAI,GAAD,WAAS,SAAC,KAAK;;AACZ,6BAAS,qDAAqB,GAAG,GAAxB;AAA2B,8BAAe,KAAK;;;AACtC,UAAtB,AAAQ,sBAAC,GAAG,EAAI,MAAM;AACC,UAAvB,sBAAgB,MAAM;AAEtB,cAAI,AAAa,sBAAG;AACD,YAAjB,iBAAW,MAAM;;AAEU,YAA3B,AAAO,MAAD,UAAS;AACY,YAA3B,AAAa,4BAAQ,MAAM;;AAGR,UAArB,qBAAe,MAAM;;AAGvB,cAAO,AAAS,mBAAG;;AAGjB,yBAAe;AAWjB,MATF,AAAI,GAAD,WAAS,SAAC,KAAK;;AAChB,YAAsB,kBAAlB,YAAY,eAAZ,OAAc,SAAO,GAAG;AACa,UAAvC,yBAAmB,YAAY,EAAE,KAAK;AACX,UAA3B,qBAAe,YAAY;AACM,UAAjC,eAAe,AAAa,YAAD;;AAEvB,uBAAS,yBAAmB,GAAG,EAAE,KAAK;AACgB,UAA1D,eAAe,4BAAsB,YAAY,EAAE,MAAM;;;AAI7D,UAAI,YAAY,IAAI;AAEU,QAA5B,sBAAgB,YAAY;AAE5B,iBAAS,SAAS,YAAY,EAAE,MAAM,IAAI,MAAM,SAAS,AAAO,MAAD;AAClC,UAA3B,AAAS,wBAAO,AAAO,MAAD;AACoB,UAA1C,AAAO,MAAD,iBAAiB,AAAO,MAAD;AACH,UAA1B,AAAO,MAAD,gBAAgB;;AAGxB,YAAkB,YAAd,qBAAiB;AAEJ,UAAf,iBAAW;;AAGqB,UAAhC,AAAc,AAAM,oCAAQ;;;AAIhC,YAAO;IACT;4BAMyB,QAA6B;;AACpD,UAAI,MAAM,IAAI;AACS,QAArB,AAAO,MAAD,UAAS,MAAM;AACM,QAA3B,AAAO,MAAD,UAAS,AAAO,MAAD;AACO,aAA5B,AAAO,MAAD;qBAAC,OAAO,YAAQ,MAAM;AACP,QAArB,AAAO,MAAD,UAAS,MAAM;AACrB,YAAW,YAAP,MAAM,EAAI;AACK,UAAjB,iBAAW,MAAM;;AAGE,QAArB,qBAAe,MAAM;AACrB,cAAO,OAAM;;AAGf,UAAI,sBAAgB;AACS,QAA3B,AAAa,4BAAQ,MAAM;AACA,QAA3B,AAAO,MAAD,UAAS;;AAEE,QAAjB,iBAAW,MAAM;;AAGE,MAArB,qBAAe,MAAM;AACrB,YAAO;IACT;yBAEwC,KAAK;;AAC3C,oBAAI,AAAS,6BAAY,GAAG;AACtB,qBAAS,AAAQ,sBAAC,GAAG;AACQ,QAAjC,yBAAmB,MAAM,EAAE,KAAK;AACE,aAAlC,AAAO,MAAD;qBAAC,OAAO,YAAQ,AAAO,MAAD;AACM,cAAlC,AAAO,MAAD;sBAAC,OAAO,aAAQ,AAAO,MAAD;AACT,QAAnB,AAAO,MAAD,UAAS;AACI,QAAnB,AAAO,MAAD,UAAS;AACf,cAAO,OAAM;;AAGX,2BAAS,qDAAqB,GAAG,GAAxB;AAA2B,4BAAe,KAAK;;;AACtC,MAAtB,AAAQ,sBAAC,GAAG,EAAI,MAAM;AACC,MAAvB,sBAAgB,MAAM;AACtB,YAAO,OAAM;IACf;yBAE6C,QAAgB;AAC3D,0BAAe,KAAK,EAAE,AAAO,MAAD;AACgB,QAA1C,AAAO,MAAD,iBAAiB,AAAO,MAAD;AACF,QAA3B,AAAO,MAAD,gBAAgB,KAAK;AACN,QAArB,oBAAc,MAAM;;IAExB;;AAGqB,MAAnB,qBAAe;AAEf,oBAAS;AAEoB,QAA3B,yBAAmB;AAEnB,iBAAS,SAAc,wBACnB,MAAM,IAAI,MACV,SAAS,AAAO,MAAD;AACkB,UAAnC,AAAO,MAAD,kBAAiB,AAAO,MAAD;;AAG/B,iBAAS,SAAc,oBACnB,MAAM,IAAI,MACV,SAAS,AAAO,MAAD;AACyB,UAA1C,AAAO,MAAD,iBAAiB,AAAO,MAAD;;AAG/B,iBAAS,SAAc,sBACnB,MAAM,IAAI,MACV,SAAS,AAAO,MAAD;AACyB,UAA1C,AAAO,MAAD,iBAAiB,AAAO,MAAD;;AAGa,QAAvC,qBAAoB,qBAAe;AACQ,QAA3C,uBAAsB,uBAAiB;AACnB,QAApB,sBAAgB;;IAEzB;sBAE0C;AAYxC,UAAI,AAAe,wBAAgB;AACiB,QAA7C,uBAAsB,uBAAiB,MAAM;;AAEX,QAAlC,AAAe,mCAAa,MAAM;AACX,QAAvB,uBAAiB,MAAM;;IAEhC;oBAEwC;AAUtC,UAAI,AAAe,sBAAc;AACe,QAAzC,qBAAoB,qBAAe,MAAM;;AAEP,QAAlC,AAAa,mCAAe,MAAM;AACb,QAArB,qBAAe,MAAM;;IAE9B;;AAGM,kBAAgB;AAChB,qBAAmB;AACnB,oBAAkB;AAClB,sBAAoB;AACpB,qBAAmB;AACvB,eAAS,SAAc,gBACR,MAAM,IAAE,MACnB,SAAS,AAAO,MAAD;AACA,QAAjB,AAAM,KAAD,OAAK,MAAM;;AAElB,eAAS,SAAc,wBACR,MAAM,IAAE,MACnB,SAAS,AAAO,MAAD;AACG,QAApB,AAAS,QAAD,OAAK,MAAM;;AAErB,eAAS,SAAc,oBACR,MAAM,IAAE,MACnB,SAAS,AAAO,MAAD;AACE,QAAnB,AAAQ,OAAD,OAAK,MAAM;;AAEpB,eAAS,SAAc,sBACR,MAAM,IAAE,MACnB,SAAS,AAAO,MAAD;AACI,QAArB,AAAU,SAAD,OAAK,MAAM;;AAEtB,eAAS,SAAc,qBACR,MAAM,IAAE,MACnB,SAAS,AAAO,MAAD;AACG,QAApB,AAAS,QAAD,OAAK,MAAM;;AAErB,YAAO,AAAQ,AACM,AACZ,AACQ,AACO,AACf,AACS,AACO,AAChB,AACO,AACO,AACd,AACQ,AACO,wBAZpB,AAAM,KAAD,QAAM,SACX,OACA,4BACA,AAAS,QAAD,QAAM,SACd,OACA,6BACA,AAAU,SAAD,QAAM,SACf,OACA,2BACA,AAAQ,OAAD,QAAM,SACb,OACA,4BACA,AAAS,QAAD,QAAM,SACd;IACN;;;IA/RM,iBAAW;IACI;IAEA;IAEA;IAEA;IACA;IAEA;IACA;IAEA;;EAmRvB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGU;;;;;;IACA;;;;;;IACA;;;;;;;AAcN,YAAO,gBAAU,oBAAe,qBAE5B,SADI,YACmC,SAAnC,YAAG,eAAE,sBAAa,gBAAG,qBAAY;IAC3C;;+DAL0B;IAblB;IACA;IAEa;IAEA;IAEA;IAEA;IAEA;IAEK;;EAAI;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCvPQ;;AAChC,mBAAS,sDAAsB,SAAS;AAC5C,WAAO,MAAM;YAAN;AACH,sBAAU;AACV,0BAAc;AACd,6BAAiB;AACjB,+BAAmB;AACnB,8BAAkB;AAClB,sBAAU;AACV,sBAAU;AACV,8BAAiB;AACjB,8BAAiB;AACjB,yBAAa;AACb,yBAAa;AACb,6BAAgB;AAChB,4BAAgB;AAChB,mCAAuB;AACvB,mCAAuB;;;IAC7B;;AAEmC;IAAW;;AAE5B;IAAO;qBAGhB;;AAKH,mBAAS;AACT,uBAAa;AACb,4BAAkB;AAClB;AACM;AAEV,aAAO,MAAM,IAAI,QAAQ,UAAU,IAAI;AAG7B,qBAAS,AAAW,AAAQ,UAAT,IAAI,QACvB,MAAM,IAAI,QACc,aAApB,AAAO,MAAD,8BACF,0CACI,UAAU,EAAE,eAAe,EAAE,WAAW,KACtD,MAAM,GACN,UAAU;AAEZ,+BACA,0CAAkB,oDAAW,MAAM,GAAG,eAAe,EAAE,WAAW;AAElE,2BAAe,iCAAkB,WAAP,MAAM;AAIpC,YAAI,eAAU,MAAM,EAAE,UAAU;AACb,UAAjB,kBAAA,AAAe,eAAA;AACqB,UAApC,aAAa,AAAW,UAAD;;AAEF,UAArB,SAAS,AAAO,MAAD;AAEf,cAAW,AAAc,WAArB,MAAM,sBAAkB;AACT,YAAjB,kBAAA,AAAe,eAAA;;AAGQ,YAAvB,AAAY,WAAD,IAAC,OAAZ,cAAqB,yBAAT;AAER,yCAA0C,aAAjB,gBAAgB,IAAG,eAAe;AAC3D,oCAAiC,aAAb,YAAY,IAAG,eAAe;AAEtD,gBAAI,sBAAsB,KAAI,iBAAiB;AAC7C,uBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,sBAAsB,EAAE,IAAA,AAAC,CAAA;AACvC;AAEJ,oBAAI,AAAE,CAAD,gBAAG,AAAY,WAAD;AACM,kBAAvB,SAAS,AAAW,WAAA,QAAC,CAAC;;AAEtB,sBAAuB,aAAnB,AAAY,WAAD,aAAU,CAAC;AACG,oBAA3B,UAAoB,KAAX,WAAW,OAAC,CAAC,OAAI,GAAN;;AAEoB,oBAAxC,cAAc,AAAE,AAAqB,CAAtB,gBAAG,AAAY,WAAD,aAAU;AACvC,6BAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,WAAW,GAAE,IAAA,AAAC,CAAA;AACX,sBAArB,AAAY,WAAD,OAAK;;AAES,oBAA3B,UAAoB,MAAX,WAAW,QAAC,CAAC,QAAI,GAAN;;;AAIpB,4BAAe,aAAP,MAAM,IAAG,CAAC;AAEtB,oBAAI,AAAkB,iBAAD,IAAI,KAAK,IAC1B,AAAM,KAAD,GAAG,sBAAsB;AACL,kBAA3B,AAAW,WAAA,QAAC,CAAC,EAAW,aAAP,MAAM,IAAG;;;AAI1B,kCAAgB,iCAAkB,WAAP,MAAM;AACe,cAApD,cAA4B,AAAqB,aAAnC,aAAa,iBAAG,AAAY,WAAD,aAAU;AACnD,uBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,WAAW,GAAE,IAAA,AAAC,CAAA;AACX,gBAArB,AAAY,WAAD,OAAK;;AAG4B,cAD9C,AAAW,WAAA,QAAC,aAAa,EACrB,AAAkB,iBAAD,GAAG,sBAAsB;;;;AAKpD,YAAI,gBAAgB,IAAI,YAAY;AACoB,UAAtD,AAAE,EAAA,CAAC,oDAAW,MAAM,GAAG,gBAAgB,EAAE,YAAY;;;IAG3D;qBAE2B;AACzB,eAAS,SAAc,uBACR,MAAM,IAAE,MACnB,SAAS,AAAO,MAAD;AACP,QAAV,AAAE,EAAA,CAAC,MAAM;;IAEb;uBAE6B;AAC3B,eAAS,SAAc,sBACR,MAAM,IAAE,MACnB,SAAS,AAAO,MAAD;AACP,QAAV,AAAE,EAAA,CAAC,MAAM;;IAEb;0BAEgC;AAC9B,eAAS,SAAc,4BACR,MAAM,IAAE,MACnB,SAAS,AAAO,MAAD;AACP,QAAV,AAAE,EAAA,CAAC,MAAM;;IAEb;SAE4C;AAC1C,UAAI,UAAU,IAAI;AAChB,aAAe,wBAAX,UAAU;AAC0C,UAAtD,WAAM,wBAAW,AAAoC,oCAAZ,UAAU;;;AAGhC,QAArB;;AAEF,uBAAO,AAAK,WAAM,UAAU,KAAI,OAAO;IACzC;;IAEkB;UAEU;;AACb,MAAb,AAAK;AACkB,mBAAc;AAChC,uBAAa;AACd;AACA;AACA;AACJ,UAAe,oBAAX,UAAU;AACR,mBAAO,UAAU;AACW,QAA3B,gBAAU,AAAW,UAAD;AACzB,sBAAK,QAAQ,GAAS,aAAN,KAAK,iBAAQ,gBAAS,QAAK,aAAL,KAAK;AACvB,UAAlB,OAAO,AAAI,IAAA,QAAC,KAAK;AACyB,UAA1C,oBAA8B,KAAK,OAAE,IAAI,EAA3B,AAAe;AAC7B,cAAI,AAAU,MAAM,IAAE,wBACP,AAAO,MAAD,YAAY,WAAW;AACe,YAAzD,SAAS,AAAK,gBAAU,MAAM,EAAE,IAAI,EAAE,WAAW,EAAE,KAAK;AACvC,YAAjB,aAAa;;AAEb,gBAAI,UAAU;AAEsD,cAAlE,SAAS,AAAK,yBAAmB,MAAM,EAAE,IAAI,EAAE,WAAW,EAAE,KAAK;;AAEnE,gCAAe,AAAO,MAAD,OAAO,IAAI,GAC9B,AAAK,AAAgC,yBAAb,MAAM,EAAE,IAAI;;AAEnB,UAArB,SAAS,AAAO,MAAD;;;AAGR,QAAT,QAAQ;AAiBN,QAhBF,AAAW,UAAD,WAAS,QAAC;;AACwB,UAA1C,oBAA8B,KAAK,OAAE,IAAI,EAA3B,AAAe;AAC7B,cAAI,AAAU,MAAM,IAAE,wBACP,AAAO,MAAD,YAAY,WAAW;AACe,YAAzD,SAAS,AAAK,gBAAU,MAAM,EAAE,IAAI,EAAE,WAAW,EAAE,KAAK;AACvC,YAAjB,aAAa;;AAEb,gBAAI,UAAU;AAEsD,cAAlE,SAAS,AAAK,yBAAmB,MAAM,EAAE,IAAI,EAAE,WAAW,EAAE,KAAK;;AAEnE,gCAAe,AAAO,MAAD,OAAO,IAAI,GAC9B,AAAK,AAAgC,yBAAb,MAAM,EAAE,IAAI;;AAEnB,UAArB,SAAS,AAAO,MAAD;AACR,UAAP,QAAK,aAAL,KAAK;;AAEa,QAAf,gBAAU,KAAK;;AAEA,MAAtB,AAAK,gBAAU,MAAM;AACQ,MAAxB,oBAAc,UAAU;AAC7B,YAAY;IACd;;AAKE,YAAuB,AAEkB,0BAFF,QACnB,oBAAY,QACZ,wBAAe,QACf,8BAAsB;IAC5C;;AASE,oBAAS;AACgB;AACA;AACvB,sBAAK,SAAc,wBAAuB,eAC3B,MAAM,IAAE,MACnB,SAAS,AAAO,MAAD;AACkB,UAAnC,AAAO,MAAD,mBAAiB,AAAO,MAAD;;AAE/B,sBAAK,SAAc,uBACJ,MAAM,IAAE,MACnB,SAAS,AAAO,MAAD;AACyB,UAA1C,AAAO,MAAD,iBAAiB,AAAO,MAAD;;AAEiB,QAA3C,wBAAsB,wBAAiB;AAC5C,sBAAK,SAAc,kBACJ,MAAM,IAAE,MACnB,SAAS,UAAU;AACqB,UAA1C,AAAO,MAAD,iBAAiB,AAAO,MAAD;AACC,UAA9B,aAAa,AAAO,MAAD;;AAEmB,QAAnC,mBAAkB,mBAAa;AACU,QAAzC,uBAAqB,sBAAgB;AACkB,QAAvD,6BAA4B,6BAAuB;;IAE5D;gBAUwD,QAAgB,MAC5D,aAAiB;AAEJ;AACvB,UAAI,AAAU,MAAM,IAAE;AACS,QAA7B,iBAAsB;;AAEO,QAA7B,iBAAiB,AAAO,MAAD;AAGH,QAApB,AAAK,cAAQ,MAAM;;AAK4B,MAFjD,SAAS,AAAe,wBAAgB,OAClC,OACK,AAAe,yBAAI,WAAW,EAAE,KAAK;AAChD,UAAe,MAAM,IAAE;AAIrB,4BAAe,AAAO,MAAD,OAAO,IAAI,GAAG,AAAK,AAAgC,yBAAb,MAAM,EAAE,IAAI;AACzB,QAA9C,AAAK,iBAAW,MAAM,EAAE,cAAc,EAAE,KAAK;;AAKD,QAF5C,SAAS,AAAe,0BAAkB,OACpC,OACK,AAAiB,2BAAI,WAAW;AAC3C,YAAe,MAAM,IAAE;AAIrB,8BAAe,AAAO,MAAD,OAAO,IAAI,GAC9B,AAAK,AAAgC,yBAAb,MAAM,EAAE,IAAI;AACY,UAAlD,AAAK,qBAAe,MAAM,EAAE,cAAc,EAAE,KAAK;;AAIoB,UADrE,SAAS,AAAK,gBACV,uDAAuB,IAAI,EAAE,WAAW,GAAG,cAAc,EAAE,KAAK;;;AAGxE,YAAO,OAAM;IACf;yBA8BiE,QACrD,MAAc,aAAiB;AAClB,2BACnB,AAAe,0BAAkB,OAC3B,OACK,AAAiB,2BAAI,WAAW;AAC/C,UAAe,cAAc,IAAE;AACoC,QAAjE,SAAS,AAAK,qBAAe,cAAc,EAAE,AAAO,MAAD,UAAQ,KAAK;YAC3D,KAAI,AAAO,MAAD,iBAAiB,KAAK;AACV,QAA3B,AAAO,MAAD,gBAAgB,KAAK;AACI,QAA/B,AAAK,kBAAY,MAAM,EAAE,KAAK;;AAEhC,YAAO,OAAM;IACf;gBAQsC;AAEpC,aAAkB,MAAM,IAAE;AACD,yBAAa,AAAO,MAAD;AACD,QAAzC,AAAK,qBAAe,AAAK,cAAQ,MAAM;AACpB,QAAnB,SAAS,UAAU;;AAErB,UAAoB,0BAAkB;AACP,QAAxB,AAAiB;;AAExB,UAAoB,yBAAgB;AACG,QAAhC,AAAe,qCAAa;;AAEnC,UAAoB,oBAAY;AACG,QAA5B,AAAW,+BAAa;;AAE/B,UAAoB,iBAAS;AACF,QAApB,AAAQ,wBAAQ;;AAEvB,UAAoB,uBAAe;AACK,QAAjC,AAAc,oCAAe;;AAEpC,UAAoB,8BAAsB;AACY,QAA/C,AAAqB,kDAAsB;;IAEpD;qBAE6D,QAClC,YAAgB;AACzC,UAAoB,0BAAkB;AACA,QAA/B,AAAiB,8BAAO,MAAM;;AAEjC,iBAAO,AAAO,MAAD;AACb,iBAAO,AAAO,MAAD;AACjB,UAAI,AAAU,IAAI,IAAE;AACO,QAApB,uBAAgB,IAAI;;AAED,QAAxB,AAAK,IAAD,iBAAgB,IAAI;;AAE1B,UAAI,AAAU,IAAI,IAAE;AACO,QAApB,sBAAgB,IAAI;;AAED,QAAxB,AAAK,IAAD,iBAAgB,IAAI;;AAEkB,MAA5C,AAAK,mBAAa,MAAM,EAAE,UAAU,EAAE,KAAK;AACZ,MAA/B,AAAK,kBAAY,MAAM,EAAE,KAAK;AAC9B,YAAO,OAAM;IACf;iBAEyD,QAC9B,YAAgB;AACrB,MAApB,AAAK,cAAQ,MAAM;AACyB,MAA5C,AAAK,mBAAa,MAAM,EAAE,UAAU,EAAE,KAAK;AACZ,MAA/B,AAAK,kBAAY,MAAM,EAAE,KAAK;AAC9B,YAAO,OAAM;IACf;gBAEwD,QAC7B,YAAgB;AACG,MAA5C,AAAK,mBAAa,MAAM,EAAE,UAAU,EAAE,KAAK;AAC3C,UAAI,AAAe,yBAAgB;AAIiB,QAA7C,wBAAsB,wBAAiB,MAAM;;AAOW,QAAxD,wBAAsB,AAAe,qCAAa,MAAM;;AAE/D,YAAO,OAAM;IACf;mBAE2D,QAChC,YAAgB;AAQlB,iBACnB,AAAU,UAAU,IAAE,OAAa,gBAAU,AAAW,UAAD;AAMxC,MAAnB,AAAO,MAAD,WAAS,IAAI;AACM,MAAzB,AAAO,MAAD,WAAS,UAAU;AACzB,UAAI,AAAU,IAAI,IAAE;AACG,QAAhB,gBAAU,MAAM;;AAEF,QAAnB,AAAK,IAAD,WAAS,MAAM;;AAErB,UAAI,AAAU,UAAU,IAAE;AACH,QAAhB,gBAAU,MAAM;;AAEI,QAAzB,AAAW,UAAD,WAAS,MAAM;;AAEO,MAAlC,AAAe,wBAAA,OAAf,uBAAmB,kDAAJ;AACW,MAA1B,AAAe,yBAAI,MAAM;AACE,MAA3B,AAAO,MAAD,gBAAgB,KAAK;AAC3B,YAAO,OAAM;IACf;cAEsD;AACpD,YAAO,AAAK,sBAAe,AAAK,cAAQ,MAAM;IAChD;cAEsD;;AACtB,WAA9B;0BAAgB,UAAO,MAAM;AACzB,iBAAO,AAAO,MAAD;AACb,iBAAO,AAAO,MAAD;AAMjB,UAAI,AAAU,IAAI,IAAE;AACC,QAAd,gBAAU,IAAI;;AAEF,QAAjB,AAAK,IAAD,WAAS,IAAI;;AAEnB,UAAI,AAAU,IAAI,IAAE;AACC,QAAd,gBAAU,IAAI;;AAEF,QAAjB,AAAK,IAAD,WAAS,IAAI;;AAEnB,YAAO,OAAM;IACf;kBAG2B,QAAY;AAIrC,UAAI,AAAU,AAAO,MAAD,kBAAgB,OAAO;AACzC,cAAO,OAAM;;AAEf,UAAI,AAAe,oBAAY;AAIa,QAArC,mBAAkB,mBAAa,MAAM;;AAKW,QAAhD,mBAAkB,AAAW,+BAAa,MAAM;;AAEvD,YAAO,OAAM;IACf;qBAE6D;AACvB,MAApC,AAAiB,0BAAA,OAAjB,yBAAqB,kDAAJ;AACW,MAA5B,AAAiB,2BAAI,MAAM;AACD,MAA1B,AAAO,MAAD,gBAAgB;AACI,MAA1B,AAAO,MAAD,iBAAgB;AACtB,UAAI,AAAe,uBAAe;AAIgB,QAA3C,sBAAqB,uBAAgB,MAAM;AACtB,QAA1B,AAAO,MAAD,iBAAgB;;AAOkB,QAAxC,AAAO,MAAD,iBAAqB;AACkC,QAAxD,sBAAqB,AAAc,oCAAe,MAAM;;AAE/D,YAAO,OAAM;IACf;yBAG2B,QAAgB;AACvB,MAAlB,AAAO,MAAD,QAAQ,IAAI;AAClB,UAAI,AAAe,8BAAsB;AACuB,QAAzD,6BAA4B,6BAAuB,MAAM;;AAGJ,QADrD,6BACI,AAAqB,kDAAsB,MAAM;;AAE5D,YAAO,OAAM;IACf;;AAGE,oBAAI;AACE,mBAAe;AACnB,iBAAS,SAAc,eACR,MAAM,IAAE,MACnB,SAAS,AAAO,MAAD;AACD,UAAhB,AAAK,IAAD,OAAK,MAAM;;AAEb,uBAAmB;AACvB,iBAAS,SAAc,uBACR,MAAM,IAAE,MACnB,SAAS,AAAO,MAAD;AACG,UAApB,AAAS,QAAD,OAAK,MAAM;;AAEjB,wBAAqB;AAC+B,QAAxD,AAAK,sBAAiB,QAAC,UAAW,AAAU,SAAD,OAAK,MAAM;AAClD,oBAAiB;AACrB,iBAAS,SAAc,kBACR,MAAM,IAAE,MACnB,SAAS,AAAO,MAAD;AACA,UAAjB,AAAM,KAAD,OAAK,MAAM;;AAEd,uBAAmB;AACkC,QAAzD,AAAK,wBAAmB,QAAC,UAAW,AAAS,QAAD,OAAK,MAAM;AACnD,8BAA0B;AACqC,QAAnE,AAAK,2BAAsB,QAAC,UAAW,AAAgB,eAAD,OAAK,MAAM;AACjE,cAAO,AAAe,AACF,AACX,AACQ,AACO,AACf,AACS,AACO,AAChB,AACK,AACO,AACZ,AACQ,AACO,AACf,AACe,AACO,+BAf3B,AAAK,IAAD,QAAM,SACV,OACA,4BACA,AAAS,QAAD,QAAM,SACd,OACA,6BACA,AAAU,SAAD,QAAM,SACf,OACA,yBACA,AAAM,KAAD,QAAM,SACX,OACA,4BACA,AAAS,QAAD,QAAM,SACd,OACA,mCACA,AAAgB,eAAD,QAAM,SACrB;;AAEJ,cAAa;;IAEjB;;gEA3kBiC;;IAtB7B;IACa;IAGH;IAGA;IACS;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IAGA;IACA;IAGN,oBAAY,KAAV,SAAS,QAAT;;EAA6B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8kBxC;;;;;;IACA;;;;;;IACJ;;;;;;IACA;;;;;;;AAwBF,YAAO,AAAU,uBAAe,oBACrB,cAAL,aACsC,SAApC,aAAI,eAAE,sBAAa,gBAAG,qBAAY;IAC5C;;iEAN4B,MAAW;IAtBnC;IACA;IAEmB;IAEA;IAEA;IAEA;IAEA;IAEA;IAEA;IAEA;IAEA;IAEA;IACK;IAAW;;EAAU;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;QAoBjB;AAC9B,UAAI,AAAe,eAAO;AACQ,QAA3B,cAAa,cAAQ,MAAM;AACV,QAAtB,AAAO,MAAD,aAAY;AACI,QAAtB,AAAO,MAAD,aAAY;;AAEU,QAAvB,AAAM,wBAAW,MAAM;AACA,QAA5B,AAAO,MAAD,aAAiB;AACD,QAAtB,AAAO,MAAD,aAAY;AACC,QAAd,cAAQ,MAAM;;IAEvB;QAImC,WAAe;AACzB;AACvB,oBAAK,SAAc,aACJ,MAAM,IAAE,MACnB,SAAS,AAAO,MAAD;AACjB,aAAK,AAAU,UAAU,IAAE,QAAoB,aAAX,UAAU,iBAAG,AAAO,MAAD,mBACnD,eAAU,AAAO,MAAD,YAAY,SAAS;AACvC,gBAAO,OAAM;;;AAGjB,YAAO;IACT;WAKmC;AACV,iBAAO,AAAO,MAAD;AACb,iBAAO,AAAO,MAAD;AACpC,UAAI,AAAU,IAAI,IAAE;AACD,QAAZ,cAAQ,IAAI;;AAEG,QAApB,AAAK,IAAD,aAAY,IAAI;;AAEtB,UAAI,AAAU,IAAI,IAAE;AACD,QAAZ,cAAQ,IAAI;;AAEG,QAApB,AAAK,IAAD,aAAY,IAAI;;AAEtB,YAAO,AAAe,gBAAO;IAC/B;;;IArDuB;IAEA;;EAoDzB;;;;;;;;;;;;;;;;;QAMkC;AAE1B,gBAAM,AAAO,MAAD;AACZ,uBAAkB,AAAI,kBAAC,GAAG;AAC9B,UAAI,AAAW,UAAD,IAAI;AACuB,QAAvC,aAAa;AACc,QAAtB,AAAI,kBAAC,GAAG,EAAI,UAAU;;AAEP,MAAtB,AAAW,UAAD,KAAK,MAAM;IACvB;QASmC,WAAgB;AAC7C,uBAAkB,AAAI,kBAAC,SAAS;AACpC,YAAO,AAAW,WAAD,IAAI,OAAO,OAAO,AAAW,UAAD,KAAK,SAAS,EAAE,UAAU;IACzE;WAKqD;AAC/C,gBAAM,AAAO,MAAD;AAGS,uBAAkB,AAAI,kBAAC,GAAG;AAEnD,oBAAI,AAAW,UAAD,QAAQ,MAAM;AAC2C,QAA1C,UAAtB,AAAK,yBAAY,GAAG,OAAW,AAAK,oBAAO,GAAG,KAAK,QAAQ;;AAElE,YAAO,OAAM;IACf;;AAGE,YAAO,AAAe,AAAK,yBAAQ;IACrC;;AAGmB,MAAZ,AAAK;IACZ;;AAGE,YAAO,AAAsB,6BAAN,cAAI;IAC7B;;;IAlDuB,aAAM;;EAAU;;;;;;;;;;;;;;;;;;;;;;uEAvsBb,OAAe;AAAS,eAAI;;yEA6vB7B,MAAU,iBAA2B;AAC1D,wBAAgB,AAAK,IAAD;AAExB,QAAI,AAAc,aAAD,IAAI,MAAM,MAAO,cAAa;AAE3C,qBAAa;AACjB,QAAI,WAAW,IAAI,QAAsB,aAAd,aAAa,iBAAG,AAAY,WAAD;AACb,MAAvC,aAAa,AAAW,WAAA,QAAC,aAAa;;AAGxC,UAAqB,AAAkB,cAAhC,aAAa,iBAAG,eAAe,iBAAG,UAAU;EACrD;;;;ECvxBA;;;;;MAXmB,0CAAY;;;MAIZ,2CAAa;;;MAMb,qCAAO;;;;;;;EA6C1B;;;;;MAhCe,yCAAO;;;MAGP,2CAAS;;;MAGT,yCAAO;;;MAGP,6CAAW;;;MAGX,0CAAQ;;;MAgBR,wCAAM;;;MAGN,0CAAQ;;;;;;;EA0BvB;;;;;MAhBe,+CAAS;;;MAKT,4DAAsB;;;MAGtB,iDAAW;;;MAOX,yDAAmB;;;;;;;ECuBlC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AC7EI,YAAO,AAAe,AAAO,yBAAC,gCAAc;IAC9C;;AAME,qBAAK;AAC8D,QAAjE,WAAM,mBAAU;;IAEpB;;AAME,oBAAI;AAC+D,QAAjE,WAAM,mBAAU;;IAEpB;;AAoCwB,YAAa,aAAR,oBAAW;IAAU;;AAK1B,YAAa,aAAR,oBAAW;IAAU;uBAEvB;UACjB;AAER,YAAO,AAAK,KAAD,sBACM,+DACM,0CACd,iCACK,uCACC,wCACU,mBAAmB,yBAC3B,mCAEH,yCAAC,oBAAc,MAAM,4BAAa;IAElD;yBAGS,MAAmB,QAAa,MAAW;AAClD,UAAI,AAAmB,6BAAG;AACL,QAAnB,oBAAc;;AAEI,MAApB,2BAAkB,aAAlB,4BAAkB;AAEd,0BAAgB;AAClB;AACM,UAAJ,AAAE,EAAA;;AAEkB,UAApB,2BAAkB,aAAlB,4BAAkB;AAClB,cAAI,AAAmB,6BAAG;AACJ,YAApB,oBAAc;;;;AAIyB,MAA7C,AAAO,MAAD,mBAAmB,IAAI,EAAE,aAAa;IAC9C;cAEe,MAAmB,QAAa,MAAQ;AACrD,YAAO,AAAO,OAAD,qBAAK,IAAI,EAAE;AACtB;AACY,UAAV;AACA,gBAAO,AAAE,GAAA;;AAEC,UAAV;;;IAGN;sBAGS,MAAmB,QAAa,MAAQ,IAAa;AAC5D,YAAO,AAAO,OAAD,0CAAU,IAAI,EAAE,QAAG;AAC9B;AACY,UAAV;AACA,gBAAO,AAAE,GAAA,CAAC,GAAG;;AAEH,UAAV;;yDAED,GAAG;IACR;4BAE6B,MAAmB,QAAa,MACvD,IAAyB,MAAS;AACtC,YAAO,AAAO,OAAD,6DAAW,IAAI,EAAE,SAAI,MAAS;AACzC;AACY,UAAV;AACA,gBAAO,AAAE,GAAA,CAAC,IAAI,EAAE,IAAI;;AAEV,UAAV;;2EAED,IAAI,EAAE,IAAI;IACf;;AAIY,MAAV,iBAAQ,aAAR,kBAAQ;AACR,oBAAI;AACe,QAAjB,kBAAY;AACK,QAAjB,mBAAa;AACS,QAAtB,AAAa,uBAAI;;IAErB;;AAGY,MAAV,iBAAQ,aAAR,kBAAQ;AAEM,MAAd;IACF;iCAGgC,OAAa;AACrC,mBAAS,AAAM,AAAM,AAAO,AAAyB,KAAvC,+BAAkB,QAAC,KAAQ,cAAF,CAAC;AACN,MAAxC,AAAS,mBAAI,4BAAY,KAAK,EAAE,MAAM;IACxC;oCAIS,MAAmB,QAAa,MAAM,OAAkB;AACX,MAApD,AAAS,mBAAI,4BAAY,KAAK,EAAE,uBAAO,cAAN,KAAK;IACxC;mBAGO,MACQ,QACR,MACI,UACO;AAEF;AACR,mBAAS;AACsB,QAAnC,AAAe,8BAAO,YAAY;AACM,QAAxC,oBAAc,AAAe;;AAEzB,qBAAW;AACf;AACM,UAAJ,AAAE,EAAA;;AAEM,UAAR,AAAM,MAAA;;;AAGJ,kBAAQ,AAAO,MAAD,aAAa,IAAI,EAAE,QAAQ,EAAE,QAAQ;AACJ,MAArD,eAAe,8BAAc,KAAK,EAAE,QAAQ,EAAE,MAAM;AACpB,MAAhC,AAAe,2BAAI,YAAY;AACZ,MAAnB,oBAAc;AACd,YAAO,aAAY;IACrB;;AAIM,qBAAoB;AACxB,eAAW,QAAS;AAClB,sBAAI,AAAM,AAAU,KAAX,kBAAa,QAAQ;AACF,UAA1B,WAAW,AAAM,KAAD;;;AAGpB,YAAO,SAAQ;IACjB;oBAEwB;AACe,MAArC,8BAAwB,aAAa;AACvB,MAAd;IACF;oBAEwB;AACe,MAArC,8BAAwB,aAAa;IACvC;;AAGE,UAAI,AAAS,mBAAG;AACd,uBAAK,2CAA0B;AAC7B;AACY,YAAV,iBAAQ,aAAR,kBAAQ;AACU,YAAlB,mBAAa;AACb,2BAAK,kBAAW,AAAkB,AAAS,4BAAL;;AAE5B,YAAV,iBAAQ,aAAR,kBAAQ;AACR,2BAAK;AACH;AAKI,gBAJF,kCAAkB;AAChB,iCAAK;AACkB,oBAArB,AAAY,sBAAI;;;;AAIJ,gBAAhB,kBAAY;;;;;;IAMxB;;AAQiC;IAAqB;;AAQrB;IAAqB;WAchC;AACpB,YAAO,AAAW,sCAAI,QAAQ;IAChC;eAOgC;AAC9B,YAAO,AAAW,6BAAW,QAAQ;IACvC;yBAmBoC;AAClC,YAAO,AAAW,sCAAI,QAAQ;IAChC;;AAGsB;IAAU;;AAKG,YAAA,AAAS;IAAM;;AAOb,YAAA,AAAkB;IAAM;;AAK7B,YAAA,AAAkB;IAAM;;AAWxB,YAAA,AAAa;IAAM;;AAWpB,YAAA,AAAY;IAAM;4BAwBJ;AAC3C,oBAAI;AAC8D,QAAhE,AAAW,AAAM,mCAAa,cAAM,wBAAkB,QAAQ;;AAEnC,QAA3B,wBAAkB,QAAQ;;IAE9B;;AAQkB,MAAhB,kBAAY;IACd;;;QA7Ua;IArDP,qBAAe;IAkCf,qBAAe,0CAAuC;IACtD,0BAAoB,0CAAuC;IAC3D,oBAAc,0CAAuC;IACrD,iBAAW,kDAA8C;IAE1D;IACA;IACA,8BAAwB;IACxB,8BAAwB;IACxB,kBAAY;IACb,iBAAW;IACV,mBAAa;IACb,kBAAY;IAGb,2BAAqB;IACnB,uBAAgC;AAIX,IAAzB,mBAAkB;AAElB,kBAAI,oBAAoB;AAEkB,MADxC,mBAAmB,6BAAQ,cAAM,uBAAsB,yDAC1C;;AAG0C,MADvD,mBAAa,uBAAsB,oDACV;;EAE7B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAlEa,0BAAW;YAAG;;;;;;;AAwad,MAAX,AAAS;AACM,MAAf,AAAO;IACT;;AAEqB,YAAA,AAAO;IAAQ;;AAGpB,YAAA,AAAO;IAAI;;wCAVR,QAAa,WAAgB;IAA7B;IAAa;IAAgB;;EAAU;;;;;;;;;;;;;;;;;;;;;;;IAgBpD;;;;;;IAMa;;;;;;;sCAEF,OAAY;IAAZ;IAAY;;EAAW;;;;;;;;;6DA/CN;AAAS,UAAA,AAAK,KAAD;EAAqB;+DAMrC;AAAS,UAAA,AAAK,KAAD;EAAsB;iDAM1C,QAAa;AACrC,UAAO,AAAe,AAAO,yBAAC,AAAO,MAAD,oBAAgB;EACtD;;;;;;;;ICrVe;;;;;;IAsBM;;;;;;IAmBN;;;;;;IAOI;;;;;;;;QAGA;QACV;QACA;QACA;IAHU;IACV;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;;;;IAiCQ;;;;;;IAiCS;;;;;;IAiBA;;;;;;IAEN;;;;;;IACA;;;;;;IAQF;;;;;;IACQ;;;;;;IACA;;;;;;IACA;;;;;;IAMO;;;;;;IAEP;;;;;;IACK;;;;;;;;QAGf;QACA;QACM;QACF;QACN;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAXA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACM,AAAgB,eAAD,IAAI;AAC1B,2DACY,QAAQ,YACR,QAAQ,aACP,SAAS,cACR,UAAU;;EACvB;;;;;;;;;;;;;;;;;;;;;;IASM;;;;;;IACF;;;;;;;gCAEK;QAAY;IAAZ;IAAY;;EAAa;;;;;;;;;;;IA2B5B;;;;;;;;IAEQ;;EAAc;;;;;;;;;;;;;IAKtB;;;;;;IAGF;;;;;;IAGA;;;;;;IAGE;;;;;;;kCAGN;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;2CAiDO;QACF;QACE;AACJ,sDACG,QAAQ,gBACK,WAAW,QAClB,IAAI;;EACX;;;;;wCAYE;QACA;AACJ,mDACG,QAAQ,gBACK,aACN,YACD,IAAI;;EACX;;;;;sCAKE;QACF;QACA;QACE;AACJ,iDACG,QAAQ,gBACK,WAAW,SACjB,KAAK,QACN,IAAI;;EACX;;;;;wCA6KE;QACA;AACJ,mDACG,QAAQ,gBACK,YACP,IAAI;;EACX;;;;;qCA8BE;QACA;AACJ,gDACG,QAAQ,gBACK,aACN,YACD,IAAI;;EACX;;;;;;IA2CM;;;;;;;;IACK;;EAAqB;;;;;;;;;;IAmD1B;;;;;;;;IACM;;EAAqB;;;;;;;;;;IAuC3B;;;;;;;;IACW;;EAAkB;;;;;;;;;;;IAmC7B;;;;;;IACM;;;;;;;wCACK,WAAiB;IAAjB;IAAiB;;EAAM;;;;;;;;;;;;;;IC3qBjD;;+CA1HK;;;;EA0HL;;;;;;;;;;;;;;;;;;;;;IC9Ee;;;;;;2BAtBiB;AAAe,YAAW,yBAAX,UAAU,IACjD,AAAW,UAAD,QAAM,+BACL,cAAX,UAAU;IAAW;6BAIzB,WACA,mBACO;AAED,mBAAS;AACwB,MAAvC,AAAO,MAAD,SAAS,AAAuB,yBAAV,SAAS;AACrC,UAAI,UAAU,IAAI;AACc,QAA9B,AAAO,MAAD,SAAS;AAC4B,QAA3C,AAAO,MAAD,SAAS,mDAAgB,UAAU;;AAE3C,UAAI,MAAM,IAAI;AACqB,QAAjC,AAAO,MAAD,SAAS,AAAiB,sBAAP,MAAM;;AAEjC,YAAO,AAAO,OAAD;IACf;SAUU,WAAY,mBAAmB;AACyB,MAAhE,AAAQ,qBAAO,qDAAkB,SAAS,EAAE,UAAU,EAAE,MAAM;IAChE;;;IAR4B;;EAAQ","file":"change_detection.ddc.js"}');
  // Exports:
  return {
    src__di__injector__hierarchical: hierarchical,
    src__di__injector__injector: injector,
    src__core__di__opaque_token: opaque_token,
    src__runtime: runtime,
    src__runtime__optimizations: optimizations,
    src__di__injector__runtime: runtime$,
    src__di__injector__empty: empty,
    src__di__reflector: reflector,
    src__core__di__decorators: decorators,
    src__di__providers: providers,
    src__di__module: module$,
    src__di__errors: errors,
    src__di__injector__map: map,
    src__core__change_detection__change_detection_util: change_detection_util,
    src__facade__lang: lang,
    src__core__metadata__lifecycle_hooks: lifecycle_hooks,
    src__core__di__provider: provider,
    src__core__metadata__typed: typed,
    src__core__metadata__view: view,
    src__core__change_detection__pipe_transform: pipe_transform,
    src__core__change_detection__change_detection: change_detection,
    src__core__change_detection__differs__default_keyvalue_differ: default_keyvalue_differ,
    src__core__change_detection__differs__default_iterable_differ: default_iterable_differ,
    src__core__change_detection__constants: constants,
    src__core__change_detection__change_detector_ref: change_detector_ref,
    src__core__zone__ng_zone: ng_zone,
    src__core__di: di,
    src__core__metadata: metadata,
    src__core__metadata__visibility: visibility,
    src__facade__exception_handler: exception_handler
  };
}));

//# sourceMappingURL=change_detection.ddc.js.map
