define(['dart_sdk', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular/src/bootstrap/modules', 'packages/angular/angular.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/model/action/delayed_action.template', 'packages/angular_components/model/ui/toggle.template', 'packages/angular_components/model/action/delayed_action', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/model/ui/toggle', 'packages/angular/src/core/change_detection/change_detection', 'packages/intl/intl', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/utils/browser/events/events', 'packages/angular_components/utils/angular/css/css', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/material_popup/material_popup', 'packages/angular/meta.template', 'packages/angular_components/laminate/overlay/constants.template', 'packages/angular_components/src/material_tooltip/tooltip_controller.template', 'packages/angular_components/utils/browser/events/events.template', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/browser/feature_detector/feature_detector', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/model/math/box', 'packages/angular_components/content/deferred_content', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular/src/runtime/interpolate', 'packages/angular/src/runtime/text_binding', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/material_tooltip/module.template', 'packages/angular_components/utils/angular/css/css.template'], (function load__packages__angular_components__src__material_tooltip__icon_tooltip(dart_sdk, packages__angular__src__core__change_detection__directive_change_detector, packages__angular__src__bootstrap__modules, packages__angular__angular$46template, packages__angular_components__laminate__popup__popup$46template, packages__angular_components__model__action__delayed_action$46template, packages__angular_components__model__ui__toggle$46template, packages__angular_components__model__action__delayed_action, packages__angular_components__src__laminate__popup__popup_hierarchy, packages__angular_components__model__ui__toggle, packages__angular__src__core__change_detection__change_detection, packages__intl__intl, packages__angular_components__content__deferred_content_aware, packages__angular_components__laminate__enums__alignment, packages__angular_components__src__material_tooltip__tooltip_controller, packages__angular_components__utils__browser__events__events, packages__angular_components__utils__angular__css__css, packages__angular_components__src__laminate__popup__dom_popup_source, packages__angular_components__material_popup__material_popup, packages__angular__meta$46template, packages__angular_components__laminate__overlay__constants$46template, packages__angular_components__src__material_tooltip__tooltip_controller$46template, packages__angular_components__utils__browser__events__events$46template, packages__angular_components__utils__disposer__disposer, packages__angular_components__utils__browser__feature_detector__feature_detector, packages__angular_components__material_popup__material_popup$46template, packages__angular_components__src__laminate__overlay__overlay_ref, packages__angular_components__utils__browser__dom_service__dom_service, packages__angular_components__laminate__overlay__zindexer, packages__angular_components__model__math__box, packages__angular_components__content__deferred_content, packages__angular_components__mixins__material_dropdown_base, packages__angular__src__runtime__interpolate, packages__angular__src__runtime__text_binding, packages__angular_components__material_tooltip__module, packages__angular_components__content__deferred_content$46template, packages__angular_components__laminate__enums__alignment$46template, packages__angular_components__material_tooltip__module$46template, packages__angular_components__utils__angular__css__css$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const directive_change_detector = packages__angular__src__core__change_detection__directive_change_detector.src__core__change_detection__directive_change_detector;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const view_container_ref = packages__angular__src__bootstrap__modules.src__core__linker__view_container_ref;
  const component_loader = packages__angular__src__bootstrap__modules.src__core__linker__component_loader;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const element_ref = packages__angular__src__bootstrap__modules.src__core__linker__element_ref;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const popup$46template = packages__angular_components__laminate__popup__popup$46template.laminate__popup__popup$46template;
  const delayed_action$46template = packages__angular_components__model__action__delayed_action$46template.model__action__delayed_action$46template;
  const toggle$46template = packages__angular_components__model__ui__toggle$46template.model__ui__toggle$46template;
  const delayed_action = packages__angular_components__model__action__delayed_action.model__action__delayed_action;
  const popup_source_directive = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_source_directive;
  const popup_hierarchy = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const popup_size_provider = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_size_provider;
  const popup_ref = packages__angular_components__src__laminate__popup__popup_hierarchy.src__laminate__popup__popup_ref;
  const toggle = packages__angular_components__model__ui__toggle.model__ui__toggle;
  const lifecycle_hooks = packages__angular__src__core__change_detection__change_detection.src__core__metadata__lifecycle_hooks;
  const change_detector_ref = packages__angular__src__core__change_detection__change_detection.src__core__change_detection__change_detector_ref;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const intl = packages__intl__intl.intl;
  const deferred_content_aware = packages__angular_components__content__deferred_content_aware.content__deferred_content_aware;
  const alignment = packages__angular_components__laminate__enums__alignment.laminate__enums__alignment;
  const tooltip_controller = packages__angular_components__src__material_tooltip__tooltip_controller.src__material_tooltip__tooltip_controller;
  const events = packages__angular_components__utils__browser__events__events.utils__browser__events__events;
  const css = packages__angular_components__utils__angular__css__css.utils__angular__css__css;
  const popup_source = packages__angular_components__src__laminate__popup__dom_popup_source.src__laminate__popup__popup_source;
  const material_popup = packages__angular_components__material_popup__material_popup.material_popup__material_popup;
  const meta$46template = packages__angular__meta$46template.meta$46template;
  const constants$46template = packages__angular_components__laminate__overlay__constants$46template.laminate__overlay__constants$46template;
  const tooltip_controller$46template = packages__angular_components__src__material_tooltip__tooltip_controller$46template.src__material_tooltip__tooltip_controller$46template;
  const events$46template = packages__angular_components__utils__browser__events__events$46template.utils__browser__events__events$46template;
  const disposer = packages__angular_components__utils__disposer__disposer.utils__disposer__disposer;
  const feature_detector = packages__angular_components__utils__browser__feature_detector__feature_detector.utils__browser__feature_detector__feature_detector;
  const material_popup$46template = packages__angular_components__material_popup__material_popup$46template.material_popup__material_popup$46template;
  const overlay_service = packages__angular_components__src__laminate__overlay__overlay_ref.src__laminate__overlay__overlay_service;
  const dom_service = packages__angular_components__utils__browser__dom_service__dom_service.utils__browser__dom_service__dom_service;
  const zindexer = packages__angular_components__laminate__overlay__zindexer.laminate__overlay__zindexer;
  const box = packages__angular_components__model__math__box.model__math__box;
  const deferred_content = packages__angular_components__content__deferred_content.content__deferred_content;
  const material_dropdown_base = packages__angular_components__mixins__material_dropdown_base.mixins__material_dropdown_base;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const module = packages__angular_components__material_tooltip__module.material_tooltip__module;
  const deferred_content$46template = packages__angular_components__content__deferred_content$46template.content__deferred_content$46template;
  const alignment$46template = packages__angular_components__laminate__enums__alignment$46template.laminate__enums__alignment$46template;
  const module$46template = packages__angular_components__material_tooltip__module$46template.material_tooltip__module$46template;
  const css$46template = packages__angular_components__utils__angular__css__css$46template.utils__angular__css__css$46template;
  var tooltip_source$46template = Object.create(dart.library);
  var tooltip_source = Object.create(dart.library);
  var icon_tooltip = Object.create(dart.library);
  var tooltip_target = Object.create(dart.library);
  var paper_tooltip = Object.create(dart.library);
  var ink_tooltip = Object.create(dart.library);
  var tooltip_target$46template = Object.create(dart.library);
  var tooltip = Object.create(dart.library);
  var ink_tooltip$46template = Object.create(dart.library);
  var ink_tooltip$46scss$46css$46shim = Object.create(dart.library);
  var $setProperty = dartx.setProperty;
  var $relatedTarget = dartx.relatedTarget;
  var $parent = dartx.parent;
  var $getAttribute = dartx.getAttribute;
  var $setAttribute = dartx.setAttribute;
  var $attributes = dartx.attributes;
  var $remove = dartx.remove;
  var $classes = dartx.classes;
  var $onClick = dartx.onClick;
  var $onBlur = dartx.onBlur;
  var $onFocus = dartx.onFocus;
  var $onMouseOver = dartx.onMouseOver;
  var $onMouseLeave = dartx.onMouseLeave;
  var $on = dartx.on;
  var $onTouchEnd = dartx.onTouchEnd;
  var $createElement = dartx.createElement;
  var $append = dartx.append;
  var $addEventListener = dartx.addEventListener;
  var RelativePositionL = () => (RelativePositionL = dart.constFn(dart.legacy(alignment.RelativePosition)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StreamControllerOfboolL = () => (StreamControllerOfboolL = dart.constFn(async.StreamController$(boolL())))();
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var boolLToNullN = () => (boolLToNullN = dart.constFn(dart.fnType(core.Null, [boolL()])))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var MouseEventLToNullN = () => (MouseEventLToNullN = dart.constFn(dart.fnType(core.Null, [MouseEventL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var EventLToNullN = () => (EventLToNullN = dart.constFn(dart.fnType(core.Null, [EventL()])))();
  var TouchEventL = () => (TouchEventL = dart.constFn(dart.legacy(html.TouchEvent)))();
  var MaterialInkTooltipComponentL = () => (MaterialInkTooltipComponentL = dart.constFn(dart.legacy(ink_tooltip.MaterialInkTooltipComponent)))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToLvoid = () => (VoidToLvoid = dart.constFn(dart.legacy(VoidTovoid())))();
  var AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  var AppViewLOfvoid = () => (AppViewLOfvoid = dart.constFn(dart.legacy(AppViewOfvoid())))();
  var AppViewL = () => (AppViewL = dart.constFn(dart.legacy(app_view.AppView)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var AppViewLAndintLToAppViewLOfvoid = () => (AppViewLAndintLToAppViewLOfvoid = dart.constFn(dart.fnType(AppViewLOfvoid(), [AppViewL(), intL()])))();
  var MaterialPopupComponentL = () => (MaterialPopupComponentL = dart.constFn(dart.legacy(material_popup.MaterialPopupComponent)))();
  var PopupHierarchyL = () => (PopupHierarchyL = dart.constFn(dart.legacy(popup_hierarchy.PopupHierarchy)))();
  var NgZoneL = () => (NgZoneL = dart.constFn(dart.legacy(ng_zone.NgZone)))();
  var OverlayServiceL = () => (OverlayServiceL = dart.constFn(dart.legacy(overlay_service.OverlayService)))();
  var DomServiceL = () => (DomServiceL = dart.constFn(dart.legacy(dom_service.DomService)))();
  var ZIndexerL = () => (ZIndexerL = dart.constFn(dart.legacy(zindexer.ZIndexer)))();
  var ListOfRelativePositionL = () => (ListOfRelativePositionL = dart.constFn(core.List$(RelativePositionL())))();
  var ListLOfRelativePositionL = () => (ListLOfRelativePositionL = dart.constFn(dart.legacy(ListOfRelativePositionL())))();
  var OpaqueTokenOfListLOfRelativePositionL = () => (OpaqueTokenOfListLOfRelativePositionL = dart.constFn(opaque_token.OpaqueToken$(ListLOfRelativePositionL())))();
  var BoxL = () => (BoxL = dart.constFn(dart.legacy(box.Box)))();
  var PopupSizeProviderL = () => (PopupSizeProviderL = dart.constFn(dart.legacy(popup_size_provider.PopupSizeProvider)))();
  var VoidToMaterialPopupComponentL = () => (VoidToMaterialPopupComponentL = dart.constFn(dart.fnType(MaterialPopupComponentL(), [])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var DeferredContentAwareL = () => (DeferredContentAwareL = dart.constFn(dart.legacy(deferred_content_aware.DeferredContentAware)))();
  var DropdownHandleL = () => (DropdownHandleL = dart.constFn(dart.legacy(material_dropdown_base.DropdownHandle)))();
  var PopupRefL = () => (PopupRefL = dart.constFn(dart.legacy(popup_ref.PopupRef)))();
  var TooltipControllerL = () => (TooltipControllerL = dart.constFn(dart.legacy(tooltip_controller.TooltipController)))();
  var DisposerL = () => (DisposerL = dart.constFn(dart.legacy(disposer.Disposer)))();
  var VoidToTooltipControllerL = () => (VoidToTooltipControllerL = dart.constFn(dart.fnType(TooltipControllerL(), [])))();
  var ComponentRefOfMaterialInkTooltipComponentL = () => (ComponentRefOfMaterialInkTooltipComponentL = dart.constFn(component_factory.ComponentRef$(MaterialInkTooltipComponentL())))();
  var ComponentFactoryOfMaterialInkTooltipComponentL = () => (ComponentFactoryOfMaterialInkTooltipComponentL = dart.constFn(component_factory.ComponentFactory$(MaterialInkTooltipComponentL())))();
  var AppViewOfMaterialInkTooltipComponentL = () => (AppViewOfMaterialInkTooltipComponentL = dart.constFn(app_view.AppView$(MaterialInkTooltipComponentL())))();
  var AppViewLOfMaterialInkTooltipComponentL = () => (AppViewLOfMaterialInkTooltipComponentL = dart.constFn(dart.legacy(AppViewOfMaterialInkTooltipComponentL())))();
  var AppViewLAndintLToAppViewLOfMaterialInkTooltipComponentL = () => (AppViewLAndintLToAppViewLOfMaterialInkTooltipComponentL = dart.constFn(dart.fnType(AppViewLOfMaterialInkTooltipComponentL(), [AppViewL(), intL()])))();
  const CT = Object.create(null);
  var L4 = "package:angular_components/src/material_tooltip/tooltip_target.dart";
  var L6 = "package:angular_components/src/material_tooltip/ink_tooltip.dart";
  var L7 = "package:angular_components/src/material_tooltip/tooltip.dart";
  var L8 = "package:angular_components/src/material_tooltip/ink_tooltip.template.dart";
  var L2 = "file:///C:/Users/nicol/AppData/Local/Temp/scratch_space31d894d0/packages/angular_components/src/material_tooltip/icon_tooltip.dart";
  var L3 = "package:angular_components/src/material_tooltip/icon_tooltip.dart";
  var L1 = "package:angular_components/src/material_tooltip/tooltip_source.dart";
  var L0 = "package:angular_components/src/material_tooltip/tooltip_source.template.dart";
  var L5 = "package:angular_components/src/material_tooltip/paper_tooltip.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 600000
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: alignment.AfterCustomAlignment.prototype,
        [Alignment__cssPropertyValue]: null,
        [Alignment__displayName]: "After",
        [_CustomAlignment_cssClassY]: "",
        [_CustomAlignment_cssClassX]: "",
        [AfterCustomAlignment_requiresContentSizeToPosition]: false
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top left",
        [RelativePosition_originY]: C3 || CT.C3,
        [RelativePosition_originX]: C3 || CT.C3
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: alignment.BeforeCustomAlignment.prototype,
        [Alignment__cssPropertyValue]: null,
        [Alignment__displayName]: "Before",
        [_CustomAlignment_cssClassY]: "",
        [_CustomAlignment_cssClassX]: "",
        [BeforeCustomAlignment_requiresContentSizeToPosition]: true
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom right",
        [RelativePosition_originY]: C5 || CT.C5,
        [RelativePosition_originX]: C5 || CT.C5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "top right",
        [RelativePosition_originY]: C3 || CT.C3,
        [RelativePosition_originX]: C5 || CT.C5
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: alignment.RelativePosition.prototype,
        [RelativePosition_animationOrigin]: "bottom left",
        [RelativePosition_originY]: C5 || CT.C5,
        [RelativePosition_originX]: C3 || CT.C3
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C4 || CT.C4, C6 || CT.C6, C7 || CT.C7], RelativePositionL());
    },
    get C8() {
      return C8 = dart.fn(ink_tooltip$46template.viewFactory_MaterialInkTooltipComponent1, AppViewLAndintLToAppViewLOfvoid());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: OpaqueTokenOfListLOfRelativePositionL().prototype,
        [OpaqueToken__uniqueName]: "defaultPopupPositions"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayRepositionLoop"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: opaque_token.OpaqueToken.prototype,
        [OpaqueToken__uniqueName]: "overlayViewportBoundaries"
      });
    },
    get C12() {
      return C12 = dart.fn(ink_tooltip$46template.viewFactory_MaterialInkTooltipComponent2, AppViewLAndintLToAppViewLOfvoid());
    },
    get C13() {
      return C13 = dart.constList([], dart.dynamic);
    },
    get C15() {
      return C15 = dart.fn(ink_tooltip$46template.viewFactory_MaterialInkTooltipComponentHost0, AppViewLAndintLToAppViewLOfMaterialInkTooltipComponentL());
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ComponentFactoryOfMaterialInkTooltipComponentL().prototype,
        [ComponentFactory__viewFactory]: C15 || CT.C15,
        [ComponentFactory_selector]: "material-tooltip-text"
      });
    }
  }, false);
  var instance$ = dart.privateName(tooltip_source$46template, "MaterialTooltipSourceDirectiveNgCd.instance");
  tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd = class MaterialTooltipSourceDirectiveNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let firstCheck = view.cdState === 0;
      if (firstCheck) {
        if ("pointer" !== null) {
          el.style[$setProperty]("cursor", "pointer");
        }
      }
    }
  };
  (tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd.new = function(instance) {
    this[instance$] = instance;
    tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd.__proto__.new.call(this);
    ;
  }).prototype = tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd.prototype;
  dart.addTypeTests(tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd);
  dart.addTypeCaches(tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd);
  dart.setMethodSignature(tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd, () => ({
    __proto__: dart.getMethods(tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [dart.legacy(app_view.AppView), dart.legacy(html.Element)])
  }));
  dart.setLibraryUri(tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd, L0);
  dart.setFieldSignature(tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd, () => ({
    __proto__: dart.getFields(tooltip_source$46template.MaterialTooltipSourceDirectiveNgCd.__proto__),
    instance: dart.finalFieldType(dart.legacy(tooltip_source.MaterialTooltipSourceDirective))
  }));
  tooltip_source$46template.initReflector = function initReflector() {
    if (dart.test(tooltip_source$46template._visited)) {
      return;
    }
    tooltip_source$46template._visited = true;
    angular$46template.initReflector();
    popup$46template.initReflector();
    delayed_action$46template.initReflector();
    toggle$46template.initReflector();
  };
  dart.defineLazy(tooltip_source$46template, {
    /*tooltip_source$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var _show = dart.privateName(tooltip_source, "_show");
  var _isMouseInside = dart.privateName(tooltip_source, "_isMouseInside");
  var _focusLatch = dart.privateName(tooltip_source, "_focusLatch");
  var _popupRef = dart.privateName(tooltip_source, "_popupRef");
  var element$ = dart.privateName(tooltip_source, "MaterialTooltipSourceDirective.element");
  tooltip_source.MaterialTooltipSourceDirective = class MaterialTooltipSourceDirective extends popup_source_directive.PopupSourceDirective {
    get element() {
      return this[element$];
    }
    set element(value) {
      super.element = value;
    }
    activate() {
      this[_popupRef].isOn = true;
    }
    deactivate() {
      this[_show].cancel();
      if (dart.test(this[_popupRef].isOn)) this[_popupRef].isOn = false;
    }
    onFocus() {
      this[_focusLatch] = true;
    }
    onBlur() {
      this[_focusLatch] = false;
      this.deactivate();
    }
    onKeyUp() {
      if (dart.test(this[_focusLatch])) {
        this.activate();
        this[_focusLatch] = false;
      }
    }
    onMouseOver() {
      if (dart.test(this[_isMouseInside])) return;
      this[_isMouseInside] = true;
      this[_show].start();
    }
    onMouseLeave() {
      this[_isMouseInside] = false;
      this.deactivate();
    }
    set toggleable(popupRef) {
      this[_popupRef] = popupRef;
    }
  };
  (tooltip_source.MaterialTooltipSourceDirective.new = function(domPopupSourceFactory, element, initAriaAttributes) {
    this[_show] = null;
    this[_isMouseInside] = false;
    this[_focusLatch] = false;
    this[_popupRef] = null;
    this[element$] = element;
    tooltip_source.MaterialTooltipSourceDirective.__proto__.new.call(this, domPopupSourceFactory, element, null, null, initAriaAttributes);
    this[_show] = new delayed_action.DelayedAction.new(tooltip_source.tooltipShowDelay, dart.bind(this, 'activate'));
  }).prototype = tooltip_source.MaterialTooltipSourceDirective.prototype;
  dart.addTypeTests(tooltip_source.MaterialTooltipSourceDirective);
  dart.addTypeCaches(tooltip_source.MaterialTooltipSourceDirective);
  tooltip_source.MaterialTooltipSourceDirective[dart.implements] = () => [toggle.Toggler, lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(tooltip_source.MaterialTooltipSourceDirective, () => ({
    __proto__: dart.getMethods(tooltip_source.MaterialTooltipSourceDirective.__proto__),
    activate: dart.fnType(dart.void, []),
    deactivate: dart.fnType(dart.void, []),
    onFocus: dart.fnType(dart.void, []),
    onBlur: dart.fnType(dart.void, []),
    onKeyUp: dart.fnType(dart.void, []),
    onMouseOver: dart.fnType(dart.void, []),
    onMouseLeave: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(tooltip_source.MaterialTooltipSourceDirective, () => ({
    __proto__: dart.getSetters(tooltip_source.MaterialTooltipSourceDirective.__proto__),
    toggleable: dart.legacy(toggle.Toggleable)
  }));
  dart.setLibraryUri(tooltip_source.MaterialTooltipSourceDirective, L1);
  dart.setFieldSignature(tooltip_source.MaterialTooltipSourceDirective, () => ({
    __proto__: dart.getFields(tooltip_source.MaterialTooltipSourceDirective.__proto__),
    element: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_show]: dart.fieldType(dart.legacy(delayed_action.DelayedAction)),
    [_isMouseInside]: dart.fieldType(dart.legacy(core.bool)),
    [_focusLatch]: dart.fieldType(dart.legacy(core.bool)),
    [_popupRef]: dart.fieldType(dart.legacy(toggle.Toggleable))
  }));
  dart.defineLazy(tooltip_source.MaterialTooltipSourceDirective, {
    /*tooltip_source.MaterialTooltipSourceDirective.hostStyleCursor*/get hostStyleCursor() {
      return "pointer";
    },
    /*tooltip_source.MaterialTooltipSourceDirective.hostTabIndex*/get hostTabIndex() {
      return 0;
    },
    /*tooltip_source.MaterialTooltipSourceDirective.tooltipLabel*/get tooltipLabel() {
      return intl.Intl.message("Mouseover or press enter on this icon for more information.", {name: "MaterialTooltipSourceDirective_tooltipLabel", desc: "Label for help icon which opens a help center tooltip."});
    }
  }, true);
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  dart.defineLazy(tooltip_source, {
    /*tooltip_source.tooltipShowDelay*/get tooltipShowDelay() {
      return C0 || CT.C0;
    }
  }, true);
  var element$0 = dart.privateName(icon_tooltip, "MaterialIconTooltipComponent.element");
  var icon$ = dart.privateName(icon_tooltip, "MaterialIconTooltipComponent.icon");
  var iconSize = dart.privateName(icon_tooltip, "MaterialIconTooltipComponent.iconSize");
  var preferredPositions = dart.privateName(icon_tooltip, "MaterialIconTooltipComponent.preferredPositions");
  var offsetX = dart.privateName(icon_tooltip, "MaterialIconTooltipComponent.offsetX");
  var offsetY = dart.privateName(icon_tooltip, "MaterialIconTooltipComponent.offsetY");
  var tooltipBehavior = dart.privateName(icon_tooltip, "MaterialIconTooltipComponent.tooltipBehavior");
  icon_tooltip.MaterialIconTooltipComponent = class MaterialIconTooltipComponent extends core.Object {
    get element() {
      return this[element$0];
    }
    set element(value) {
      this[element$0] = value;
    }
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get iconSize() {
      return this[iconSize];
    }
    set iconSize(value) {
      super.iconSize = value;
    }
    get preferredPositions() {
      return this[preferredPositions];
    }
    set preferredPositions(value) {
      this[preferredPositions] = value;
    }
    get offsetX() {
      return this[offsetX];
    }
    set offsetX(value) {
      this[offsetX] = value;
    }
    get offsetY() {
      return this[offsetY];
    }
    set offsetY(value) {
      this[offsetY] = value;
    }
    get tooltipBehavior() {
      return this[tooltipBehavior];
    }
    set tooltipBehavior(value) {
      this[tooltipBehavior] = value;
    }
    get contentVisible() {
      return this.tooltipBehavior.tooltipActivate;
    }
  };
  (icon_tooltip.MaterialIconTooltipComponent.new = function(darkTheme, element, icon, type, size) {
    let t1, t0, t0$;
    this[element$0] = null;
    this[preferredPositions] = icon_tooltip._defaultPositions;
    this[offsetX] = 0;
    this[offsetY] = 0;
    this[tooltipBehavior] = null;
    this[icon$] = (t0 = icon, t0 == null ? dart.str((t1 = type, t1 == null ? "help" : t1)) + "_outline" : t0);
    this[iconSize] = (t0$ = size, t0$ == null ? "medium" : t0$);
    if (!(type === "help" || type === "info" || type === "error" || type == null)) dart.assertFailed(null, L2, 105, 12, "type == 'help' || type == 'info' || type == 'error' || type == null");
    if (!(this.iconSize === "x-small" || this.iconSize === "small" || this.iconSize === "medium" || this.iconSize === "large" || this.iconSize === "x-large" || this.iconSize === "")) dart.assertFailed(null, L2, 106, 12, "iconSize == 'x-small' ||\n        iconSize == 'small' ||\n        iconSize == 'medium' ||\n        iconSize == 'large' ||\n        iconSize == 'x-large' ||\n        iconSize == ''");
    this.element = element;
    darkTheme.themeElement(element);
  }).prototype = icon_tooltip.MaterialIconTooltipComponent.prototype;
  dart.addTypeTests(icon_tooltip.MaterialIconTooltipComponent);
  dart.addTypeCaches(icon_tooltip.MaterialIconTooltipComponent);
  icon_tooltip.MaterialIconTooltipComponent[dart.implements] = () => [deferred_content_aware.DeferredContentAware];
  dart.setGetterSignature(icon_tooltip.MaterialIconTooltipComponent, () => ({
    __proto__: dart.getGetters(icon_tooltip.MaterialIconTooltipComponent.__proto__),
    contentVisible: dart.legacy(async.Stream$(dart.legacy(core.bool)))
  }));
  dart.setLibraryUri(icon_tooltip.MaterialIconTooltipComponent, L3);
  dart.setFieldSignature(icon_tooltip.MaterialIconTooltipComponent, () => ({
    __proto__: dart.getFields(icon_tooltip.MaterialIconTooltipComponent.__proto__),
    element: dart.fieldType(dart.legacy(html.HtmlElement)),
    icon: dart.finalFieldType(dart.legacy(core.String)),
    iconSize: dart.finalFieldType(dart.legacy(core.String)),
    preferredPositions: dart.fieldType(dart.legacy(core.List$(dart.legacy(alignment.RelativePosition)))),
    offsetX: dart.fieldType(dart.legacy(core.int)),
    offsetY: dart.fieldType(dart.legacy(core.int)),
    tooltipBehavior: dart.fieldType(dart.legacy(tooltip_target.TooltipBehavior))
  }));
  dart.defineLazy(icon_tooltip.MaterialIconTooltipComponent, {
    /*icon_tooltip.MaterialIconTooltipComponent.helpTooltipLabel*/get helpTooltipLabel() {
      return intl.Intl.message("Mouseover, click, press Enter key or Space key on this icon for more " + "information.", {name: "MaterialIconTooltipComponent_helpTooltipLabel", desc: "Label for help icon which shows help content."});
    }
  }, true);
  var RelativePosition_animationOrigin = dart.privateName(alignment, "RelativePosition.animationOrigin");
  var Alignment__cssPropertyValue = dart.privateName(alignment, "Alignment._cssPropertyValue");
  var Alignment__displayName = dart.privateName(alignment, "Alignment._displayName");
  var _CustomAlignment_cssClassY = dart.privateName(alignment, "_CustomAlignment.cssClassY");
  var _CustomAlignment_cssClassX = dart.privateName(alignment, "_CustomAlignment.cssClassX");
  var AfterCustomAlignment_requiresContentSizeToPosition = dart.privateName(alignment, "AfterCustomAlignment.requiresContentSizeToPosition");
  var C3;
  var RelativePosition_originY = dart.privateName(alignment, "RelativePosition.originY");
  var RelativePosition_originX = dart.privateName(alignment, "RelativePosition.originX");
  var C2;
  var BeforeCustomAlignment_requiresContentSizeToPosition = dart.privateName(alignment, "BeforeCustomAlignment.requiresContentSizeToPosition");
  var C5;
  var C4;
  var C6;
  var C7;
  var C1;
  dart.defineLazy(icon_tooltip, {
    /*icon_tooltip._defaultPositions*/get _defaultPositions() {
      return C1 || CT.C1;
    }
  }, true);
  var _tooltipActivate = dart.privateName(tooltip_target, "_tooltipActivate");
  var _show$ = dart.privateName(tooltip_target, "_show");
  var _isMouseInside$ = dart.privateName(tooltip_target, "_isMouseInside");
  var _changeDetector$ = dart.privateName(tooltip_target, "_changeDetector");
  var _tooltip = dart.privateName(tooltip_target, "_tooltip");
  var _previousDescribedbyId = dart.privateName(tooltip_target, "_previousDescribedbyId");
  var _id = dart.privateName(tooltip_target, "_id");
  var _element$ = dart.privateName(tooltip_target, "_element");
  var viewContainerRef$ = dart.privateName(tooltip_target, "TooltipTarget.viewContainerRef");
  tooltip_target.TooltipTarget = class TooltipTarget extends popup_source_directive.PopupSourceDirective {
    get viewContainerRef() {
      return this[viewContainerRef$];
    }
    set viewContainerRef(value) {
      super.viewContainerRef = value;
    }
    setTooltip(component) {
      this[_tooltip] = component;
    }
    set popupId(id) {
      super.popupId = id;
      this[_id] = id;
      if (id == null) return;
    }
    onOpen() {
      if (this[_id] == null) return;
      this[_previousDescribedbyId] = this[_element$][$getAttribute]("aria-describedby");
      this[_element$][$setAttribute]("aria-describedby", this[_id]);
    }
    onClose() {
      if (this[_id] == null) return;
      if (this[_previousDescribedbyId] != null) {
        this[_element$][$setAttribute]("aria-describedby", this[_previousDescribedbyId]);
      } else {
        this[_element$][$attributes][$remove]("aria-describedby");
      }
    }
  };
  (tooltip_target.TooltipTarget.new = function(domPopupSourceFactory, viewContainerRef, _element, initAriaAttributes) {
    this[_tooltip] = null;
    this[_previousDescribedbyId] = null;
    this[_id] = null;
    this[viewContainerRef$] = viewContainerRef;
    this[_element$] = _element;
    tooltip_target.TooltipTarget.__proto__.new.call(this, domPopupSourceFactory, _element, null, null, initAriaAttributes);
    ;
  }).prototype = tooltip_target.TooltipTarget.prototype;
  dart.addTypeTests(tooltip_target.TooltipTarget);
  dart.addTypeCaches(tooltip_target.TooltipTarget);
  dart.setMethodSignature(tooltip_target.TooltipTarget, () => ({
    __proto__: dart.getMethods(tooltip_target.TooltipTarget.__proto__),
    setTooltip: dart.fnType(dart.void, [dart.legacy(tooltip_controller.Tooltip)])
  }));
  dart.setLibraryUri(tooltip_target.TooltipTarget, L4);
  dart.setFieldSignature(tooltip_target.TooltipTarget, () => ({
    __proto__: dart.getFields(tooltip_target.TooltipTarget.__proto__),
    [_tooltip]: dart.fieldType(dart.legacy(tooltip_controller.Tooltip)),
    viewContainerRef: dart.finalFieldType(dart.legacy(view_container_ref.ViewContainerRef)),
    [_element$]: dart.finalFieldType(dart.legacy(html.HtmlElement)),
    [_previousDescribedbyId]: dart.fieldType(dart.legacy(core.String)),
    [_id]: dart.fieldType(dart.legacy(core.String))
  }));
  tooltip_target.TooltipBehavior = class TooltipBehavior extends tooltip_target.TooltipTarget {
    get tooltipActivate() {
      return this[_tooltipActivate].stream.distinct();
    }
    showTooltipWithDelay() {
      this[_show$].start();
    }
    showTooltip() {
      let t0;
      this[_show$].cancel();
      this[_changeDetector$].markForCheck();
      this[_tooltipActivate].add(true);
      t0 = this[_tooltip];
      t0 == null ? null : t0.activate();
    }
    onBlurOrClick() {
      return this.hideTooltip();
    }
    hideTooltip(opts) {
      let t0;
      let immediate = opts && 'immediate' in opts ? opts.immediate : false;
      this[_show$].cancel();
      this[_tooltipActivate].add(false);
      t0 = this[_tooltip];
      t0 == null ? null : t0.deactivate({immediate: immediate});
    }
    onMouseOver() {
      if (dart.test(this[_isMouseInside$])) return;
      this[_isMouseInside$] = true;
      this.showTooltipWithDelay();
    }
    onMouseLeave() {
      this[_isMouseInside$] = false;
      this.hideTooltip();
    }
    onClose() {
      super.onClose();
      this.hideTooltip({immediate: true});
    }
    onBlur(event) {
      if (event[$relatedTarget] == null) return;
      let el = null;
      for (let t0 = el = HtmlElementL().as(event[$relatedTarget]); el[$parent] != null; el = HtmlElementL().as(el[$parent])) {
        if (el.className === "acx-overlay-container") return;
      }
      this.hideTooltip({immediate: true});
    }
  };
  (tooltip_target.TooltipBehavior.new = function(domPopupSourceFactory, viewContainerRef, element, _changeDetector, initAriaAttributes) {
    this[_tooltipActivate] = StreamControllerOfboolL().broadcast({sync: true});
    this[_show$] = null;
    this[_isMouseInside$] = false;
    this[_changeDetector$] = _changeDetector;
    tooltip_target.TooltipBehavior.__proto__.new.call(this, domPopupSourceFactory, viewContainerRef, element, initAriaAttributes);
    this[_show$] = new delayed_action.DelayedAction.new(tooltip_source.tooltipShowDelay, dart.bind(this, 'showTooltip'));
  }).prototype = tooltip_target.TooltipBehavior.prototype;
  dart.addTypeTests(tooltip_target.TooltipBehavior);
  dart.addTypeCaches(tooltip_target.TooltipBehavior);
  dart.setMethodSignature(tooltip_target.TooltipBehavior, () => ({
    __proto__: dart.getMethods(tooltip_target.TooltipBehavior.__proto__),
    showTooltipWithDelay: dart.fnType(dart.void, []),
    showTooltip: dart.fnType(dart.void, []),
    onBlurOrClick: dart.fnType(dart.void, []),
    hideTooltip: dart.fnType(dart.void, [], {immediate: dart.legacy(core.bool)}, {}),
    onMouseOver: dart.fnType(dart.void, []),
    onMouseLeave: dart.fnType(dart.void, []),
    onBlur: dart.fnType(dart.void, [dart.legacy(html.FocusEvent)])
  }));
  dart.setGetterSignature(tooltip_target.TooltipBehavior, () => ({
    __proto__: dart.getGetters(tooltip_target.TooltipBehavior.__proto__),
    tooltipActivate: dart.legacy(async.Stream$(dart.legacy(core.bool)))
  }));
  dart.setLibraryUri(tooltip_target.TooltipBehavior, L4);
  dart.setFieldSignature(tooltip_target.TooltipBehavior, () => ({
    __proto__: dart.getFields(tooltip_target.TooltipBehavior.__proto__),
    [_tooltipActivate]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    [_changeDetector$]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_show$]: dart.fieldType(dart.legacy(delayed_action.DelayedAction)),
    [_isMouseInside$]: dart.fieldType(dart.legacy(core.bool))
  }));
  var element$1 = dart.privateName(tooltip_target, "MaterialTooltipTargetDirective.element");
  tooltip_target.MaterialTooltipTargetDirective = class MaterialTooltipTargetDirective extends tooltip_target.TooltipBehavior {
    get element() {
      return this[element$1];
    }
    set element(value) {
      this[element$1] = value;
    }
    onFocus() {
      this.showTooltipWithDelay();
    }
    ngOnDestroy() {
      this.element = null;
    }
  };
  (tooltip_target.MaterialTooltipTargetDirective.new = function(domPopupSourceFactory, viewContainerRef, element, changeDetector, initAriaAttributes) {
    this[element$1] = null;
    tooltip_target.MaterialTooltipTargetDirective.__proto__.new.call(this, domPopupSourceFactory, viewContainerRef, element, changeDetector, initAriaAttributes);
    this.element = element;
  }).prototype = tooltip_target.MaterialTooltipTargetDirective.prototype;
  dart.addTypeTests(tooltip_target.MaterialTooltipTargetDirective);
  dart.addTypeCaches(tooltip_target.MaterialTooltipTargetDirective);
  tooltip_target.MaterialTooltipTargetDirective[dart.implements] = () => [lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(tooltip_target.MaterialTooltipTargetDirective, () => ({
    __proto__: dart.getMethods(tooltip_target.MaterialTooltipTargetDirective.__proto__),
    onFocus: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(tooltip_target.MaterialTooltipTargetDirective, L4);
  dart.setFieldSignature(tooltip_target.MaterialTooltipTargetDirective, () => ({
    __proto__: dart.getFields(tooltip_target.MaterialTooltipTargetDirective.__proto__),
    element: dart.fieldType(dart.legacy(html.HtmlElement))
  }));
  var _tooltipSubscription = dart.privateName(tooltip_target, "_tooltipSubscription");
  var _tooltipVisible = dart.privateName(tooltip_target, "_tooltipVisible");
  var _toggleVisibility = dart.privateName(tooltip_target, "_toggleVisibility");
  var element$2 = dart.privateName(tooltip_target, "ClickableTooltipTargetDirective.element");
  tooltip_target.ClickableTooltipTargetDirective = class ClickableTooltipTargetDirective extends tooltip_target.TooltipBehavior {
    get element() {
      return this[element$2];
    }
    set element(value) {
      this[element$2] = value;
    }
    onClick() {
      this[_toggleVisibility]();
    }
    [_toggleVisibility]() {
      if (dart.test(this[_tooltipVisible])) {
        this.hideTooltip({immediate: true});
      } else {
        this.showTooltip();
      }
    }
    kbTrigger(event) {
      if (event.keyCode === 13 || dart.test(events.isSpaceKey(event))) {
        this[_toggleVisibility]();
        event.preventDefault();
      }
    }
    ngOnDestroy() {
      this.element = null;
      this[_tooltipSubscription].cancel();
    }
  };
  (tooltip_target.ClickableTooltipTargetDirective.new = function(domPopupSourceFactory, viewContainerRef, element, changeDetector, initAriaAttributes) {
    this[_tooltipSubscription] = null;
    this[element$2] = null;
    this[_tooltipVisible] = false;
    tooltip_target.ClickableTooltipTargetDirective.__proto__.new.call(this, domPopupSourceFactory, viewContainerRef, element, changeDetector, initAriaAttributes);
    this.element = element;
    this[_tooltipSubscription] = this.tooltipActivate.listen(dart.fn(visible => {
      this[_tooltipVisible] = visible;
    }, boolLToNullN()));
  }).prototype = tooltip_target.ClickableTooltipTargetDirective.prototype;
  dart.addTypeTests(tooltip_target.ClickableTooltipTargetDirective);
  dart.addTypeCaches(tooltip_target.ClickableTooltipTargetDirective);
  tooltip_target.ClickableTooltipTargetDirective[dart.implements] = () => [lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(tooltip_target.ClickableTooltipTargetDirective, () => ({
    __proto__: dart.getMethods(tooltip_target.ClickableTooltipTargetDirective.__proto__),
    onClick: dart.fnType(dart.void, []),
    [_toggleVisibility]: dart.fnType(dart.void, []),
    kbTrigger: dart.fnType(dart.void, [dart.legacy(html.KeyboardEvent)])
  }));
  dart.setLibraryUri(tooltip_target.ClickableTooltipTargetDirective, L4);
  dart.setFieldSignature(tooltip_target.ClickableTooltipTargetDirective, () => ({
    __proto__: dart.getFields(tooltip_target.ClickableTooltipTargetDirective.__proto__),
    [_tooltipSubscription]: dart.fieldType(dart.legacy(async.StreamSubscription)),
    element: dart.fieldType(dart.legacy(html.HtmlElement)),
    [_tooltipVisible]: dart.fieldType(dart.legacy(core.bool))
  }));
  var _tooltipSource = dart.privateName(paper_tooltip, "_tooltipSource");
  var _visibleCtrl = dart.privateName(paper_tooltip, "_visibleCtrl");
  var _showPopup = dart.privateName(paper_tooltip, "_showPopup");
  var _controllerProxy = dart.privateName(paper_tooltip, "_controllerProxy");
  var _tooltipController$ = dart.privateName(paper_tooltip, "_tooltipController");
  var _changeDetector$0 = dart.privateName(paper_tooltip, "_changeDetector");
  var popupClassName = dart.privateName(paper_tooltip, "MaterialPaperTooltipComponent.popupClassName");
  var preferredPositions$ = dart.privateName(paper_tooltip, "MaterialPaperTooltipComponent.preferredPositions");
  var offsetX$ = dart.privateName(paper_tooltip, "MaterialPaperTooltipComponent.offsetX");
  var offsetY$ = dart.privateName(paper_tooltip, "MaterialPaperTooltipComponent.offsetY");
  var focusContents = dart.privateName(paper_tooltip, "MaterialPaperTooltipComponent.focusContents");
  paper_tooltip.MaterialPaperTooltipComponent = class MaterialPaperTooltipComponent extends core.Object {
    get popupClassName() {
      return this[popupClassName];
    }
    set popupClassName(value) {
      super.popupClassName = value;
    }
    get preferredPositions() {
      return this[preferredPositions$];
    }
    set preferredPositions(value) {
      this[preferredPositions$] = value;
    }
    get offsetX() {
      return this[offsetX$];
    }
    set offsetX(value) {
      this[offsetX$] = value;
    }
    get offsetY() {
      return this[offsetY$];
    }
    set offsetY(value) {
      this[offsetY$] = value;
    }
    get focusContents() {
      return this[focusContents];
    }
    set focusContents(value) {
      this[focusContents] = value;
    }
    get popupSource() {
      return this[_tooltipSource];
    }
    get showPopup() {
      return this[_showPopup];
    }
    get contentVisible() {
      return this[_visibleCtrl].stream;
    }
    set popupChild(popup) {
      if (popup == null) return;
      this[_visibleCtrl].addStream(popup.contentVisible);
    }
    deactivate(opts) {
      let immediate = opts && 'immediate' in opts ? opts.immediate : false;
      this[_showPopup] = false;
      this[_changeDetector$0].markForCheck();
    }
    activate() {
      this[_showPopup] = true;
      this[_changeDetector$0].markForCheck();
    }
    onMouseOver() {
      this[_tooltipController$].keepOpen(this);
    }
    onMouseLeave() {
      this[_tooltipController$].deactivate(this);
    }
    get tooltipHandle() {
      let t1;
      t1 = this[_controllerProxy];
      return t1 == null ? this[_controllerProxy] = this[_tooltipController$].proxyFor(this) : t1;
    }
    set tooltipRef(target) {
      if (target == null) return;
      this[_tooltipSource] = target;
      target.setTooltip(this.tooltipHandle);
    }
  };
  (paper_tooltip.MaterialPaperTooltipComponent.new = function(_tooltipController, _changeDetector, hostElement, tooltipClass) {
    this[_tooltipSource] = null;
    this[preferredPositions$] = paper_tooltip._defaultPositions;
    this[offsetX$] = 0;
    this[offsetY$] = 0;
    this[_visibleCtrl] = StreamControllerOfboolL().broadcast();
    this[_showPopup] = false;
    this[_controllerProxy] = null;
    this[focusContents] = false;
    this[_tooltipController$] = _tooltipController;
    this[_changeDetector$0] = _changeDetector;
    this[popupClassName] = css.constructEncapsulatedCss(tooltipClass, hostElement[$classes]);
    ;
  }).prototype = paper_tooltip.MaterialPaperTooltipComponent.prototype;
  dart.addTypeTests(paper_tooltip.MaterialPaperTooltipComponent);
  dart.addTypeCaches(paper_tooltip.MaterialPaperTooltipComponent);
  paper_tooltip.MaterialPaperTooltipComponent[dart.implements] = () => [deferred_content_aware.DeferredContentAware, tooltip_controller.Tooltip];
  dart.setMethodSignature(paper_tooltip.MaterialPaperTooltipComponent, () => ({
    __proto__: dart.getMethods(paper_tooltip.MaterialPaperTooltipComponent.__proto__),
    deactivate: dart.fnType(dart.void, [], {immediate: dart.legacy(core.bool)}, {}),
    activate: dart.fnType(dart.void, []),
    onMouseOver: dart.fnType(dart.void, []),
    onMouseLeave: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(paper_tooltip.MaterialPaperTooltipComponent, () => ({
    __proto__: dart.getGetters(paper_tooltip.MaterialPaperTooltipComponent.__proto__),
    popupSource: dart.legacy(popup_source.PopupSource),
    showPopup: dart.legacy(core.bool),
    contentVisible: dart.legacy(async.Stream$(dart.legacy(core.bool))),
    tooltipHandle: dart.legacy(tooltip_controller.Tooltip)
  }));
  dart.setSetterSignature(paper_tooltip.MaterialPaperTooltipComponent, () => ({
    __proto__: dart.getSetters(paper_tooltip.MaterialPaperTooltipComponent.__proto__),
    popupChild: dart.legacy(material_popup.MaterialPopupComponent),
    tooltipRef: dart.legacy(tooltip_target.TooltipTarget)
  }));
  dart.setLibraryUri(paper_tooltip.MaterialPaperTooltipComponent, L5);
  dart.setFieldSignature(paper_tooltip.MaterialPaperTooltipComponent, () => ({
    __proto__: dart.getFields(paper_tooltip.MaterialPaperTooltipComponent.__proto__),
    popupClassName: dart.finalFieldType(dart.legacy(core.String)),
    [_tooltipSource]: dart.fieldType(dart.legacy(popup_source.PopupSource)),
    preferredPositions: dart.fieldType(dart.legacy(core.List$(dart.legacy(alignment.RelativePosition)))),
    offsetX: dart.fieldType(dart.legacy(core.int)),
    offsetY: dart.fieldType(dart.legacy(core.int)),
    [_visibleCtrl]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.bool)))),
    [_showPopup]: dart.fieldType(dart.legacy(core.bool)),
    [_tooltipController$]: dart.finalFieldType(dart.legacy(tooltip_controller.TooltipController)),
    [_changeDetector$0]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_controllerProxy]: dart.fieldType(dart.legacy(tooltip_controller.Tooltip)),
    focusContents: dart.fieldType(dart.legacy(core.bool))
  }));
  paper_tooltip.getTooltipHandle = function getTooltipHandle(tooltip) {
    return tooltip.tooltipHandle;
  };
  dart.defineLazy(paper_tooltip, {
    /*paper_tooltip._defaultPositions*/get _defaultPositions() {
      return C1 || CT.C1;
    }
  }, true);
  var _tooltipSource$ = dart.privateName(ink_tooltip, "_tooltipSource");
  var _controllerProxy$ = dart.privateName(ink_tooltip, "_controllerProxy");
  var _showPopup$ = dart.privateName(ink_tooltip, "_showPopup");
  var _tooltipController$0 = dart.privateName(ink_tooltip, "_tooltipController");
  var _changeDetector$1 = dart.privateName(ink_tooltip, "_changeDetector");
  var positions = dart.privateName(ink_tooltip, "MaterialInkTooltipComponent.positions");
  var text = dart.privateName(ink_tooltip, "MaterialInkTooltipComponent.text");
  var popupClassName$ = dart.privateName(ink_tooltip, "MaterialInkTooltipComponent.popupClassName");
  ink_tooltip.MaterialInkTooltipComponent = class MaterialInkTooltipComponent extends core.Object {
    get positions() {
      return this[positions];
    }
    set positions(value) {
      this[positions] = value;
    }
    get text() {
      return this[text];
    }
    set text(value) {
      this[text] = value;
    }
    get popupClassName() {
      return this[popupClassName$];
    }
    set popupClassName(value) {
      this[popupClassName$] = value;
    }
    get popupSource() {
      return this[_tooltipSource$];
    }
    get showPopup() {
      return this[_showPopup$];
    }
    activate() {
      this[_showPopup$] = true;
      this[_changeDetector$1].markForCheck();
    }
    deactivate(opts) {
      let immediate = opts && 'immediate' in opts ? opts.immediate : false;
      this[_showPopup$] = false;
      this[_changeDetector$1].markForCheck();
    }
    onMouseOver() {
      this[_tooltipController$0].keepOpen(this);
    }
    onMouseLeave() {
      this[_tooltipController$0].deactivate(this);
    }
    set tooltipRef(target) {
      if (target == null) return;
      this[_tooltipSource$] = target;
      target.setTooltip(this.tooltipHandle);
    }
    get tooltipHandle() {
      let t1;
      t1 = this[_controllerProxy$];
      return t1 == null ? this[_controllerProxy$] = this[_tooltipController$0].proxyFor(this) : t1;
    }
  };
  (ink_tooltip.MaterialInkTooltipComponent.new = function(_tooltipController, _changeDetector, hostElement, tooltipClass) {
    this[_tooltipSource$] = null;
    this[positions] = alignment.RelativePosition.AdjacentBottomEdge;
    this[_controllerProxy$] = null;
    this[_showPopup$] = false;
    this[text] = null;
    this[_tooltipController$0] = _tooltipController;
    this[_changeDetector$1] = _changeDetector;
    this[popupClassName$] = css.constructEncapsulatedCss(tooltipClass, hostElement[$classes]);
    ;
  }).prototype = ink_tooltip.MaterialInkTooltipComponent.prototype;
  dart.addTypeTests(ink_tooltip.MaterialInkTooltipComponent);
  dart.addTypeCaches(ink_tooltip.MaterialInkTooltipComponent);
  ink_tooltip.MaterialInkTooltipComponent[dart.implements] = () => [tooltip_controller.Tooltip];
  dart.setMethodSignature(ink_tooltip.MaterialInkTooltipComponent, () => ({
    __proto__: dart.getMethods(ink_tooltip.MaterialInkTooltipComponent.__proto__),
    activate: dart.fnType(dart.void, []),
    deactivate: dart.fnType(dart.void, [], {immediate: dart.legacy(core.bool)}, {}),
    onMouseOver: dart.fnType(dart.void, []),
    onMouseLeave: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(ink_tooltip.MaterialInkTooltipComponent, () => ({
    __proto__: dart.getGetters(ink_tooltip.MaterialInkTooltipComponent.__proto__),
    popupSource: dart.legacy(popup_source.PopupSource),
    showPopup: dart.legacy(core.bool),
    tooltipHandle: dart.legacy(tooltip_controller.Tooltip)
  }));
  dart.setSetterSignature(ink_tooltip.MaterialInkTooltipComponent, () => ({
    __proto__: dart.getSetters(ink_tooltip.MaterialInkTooltipComponent.__proto__),
    tooltipRef: dart.legacy(tooltip_target.TooltipTarget)
  }));
  dart.setLibraryUri(ink_tooltip.MaterialInkTooltipComponent, L6);
  dart.setFieldSignature(ink_tooltip.MaterialInkTooltipComponent, () => ({
    __proto__: dart.getFields(ink_tooltip.MaterialInkTooltipComponent.__proto__),
    [_tooltipController$0]: dart.finalFieldType(dart.legacy(tooltip_controller.TooltipController)),
    [_changeDetector$1]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_tooltipSource$]: dart.fieldType(dart.legacy(popup_source.PopupSource)),
    positions: dart.fieldType(dart.legacy(core.List$(dart.legacy(alignment.RelativePosition)))),
    [_controllerProxy$]: dart.fieldType(dart.legacy(tooltip_controller.Tooltip)),
    [_showPopup$]: dart.fieldType(dart.legacy(core.bool)),
    text: dart.fieldType(dart.legacy(core.String)),
    popupClassName: dart.fieldType(dart.legacy(core.String))
  }));
  tooltip_target$46template.initReflector = function initReflector$() {
    if (dart.test(tooltip_target$46template._visited)) {
      return;
    }
    tooltip_target$46template._visited = true;
    angular$46template.initReflector();
    meta$46template.initReflector();
    constants$46template.initReflector();
    popup$46template.initReflector();
    delayed_action$46template.initReflector();
    tooltip_controller$46template.initReflector();
    events$46template.initReflector();
    tooltip_source$46template.initReflector();
  };
  dart.defineLazy(tooltip_target$46template, {
    /*tooltip_target$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  var _disposer = dart.privateName(tooltip, "_disposer");
  var _lastText = dart.privateName(tooltip, "_lastText");
  var _isInitialized = dart.privateName(tooltip, "_isInitialized");
  var _tooltip$ = dart.privateName(tooltip, "_tooltip");
  var _canShow = dart.privateName(tooltip, "_canShow");
  var _isShown = dart.privateName(tooltip, "_isShown");
  var _inkTooltip = dart.privateName(tooltip, "_inkTooltip");
  var _delayedActivate = dart.privateName(tooltip, "_delayedActivate");
  var _hostListenersAttached = dart.privateName(tooltip, "_hostListenersAttached");
  var _componentRef = dart.privateName(tooltip, "_componentRef");
  var _viewLoader$ = dart.privateName(tooltip, "_viewLoader");
  var _changeDetector$2 = dart.privateName(tooltip, "_changeDetector");
  var _window$ = dart.privateName(tooltip, "_window");
  var _popupClassName = dart.privateName(tooltip, "_popupClassName");
  var _activate = dart.privateName(tooltip, "_activate");
  var _attachHostListeners = dart.privateName(tooltip, "_attachHostListeners");
  var _maybeLoadTooltip = dart.privateName(tooltip, "_maybeLoadTooltip");
  var element$3 = dart.privateName(tooltip, "MaterialTooltipDirective.element");
  var inLongPress = dart.privateName(tooltip, "MaterialTooltipDirective.inLongPress");
  var positions$ = dart.privateName(tooltip, "MaterialTooltipDirective.positions");
  tooltip.MaterialTooltipDirective = class MaterialTooltipDirective extends tooltip_target.TooltipTarget {
    get element() {
      return this[element$3];
    }
    set element(value) {
      this[element$3] = value;
    }
    get inLongPress() {
      return this[inLongPress];
    }
    set inLongPress(value) {
      this[inLongPress] = value;
    }
    get positions() {
      return this[positions$];
    }
    set positions(value) {
      this[positions$] = value;
    }
    [_attachHostListeners]() {
      if (dart.test(this[_hostListenersAttached])) return;
      this[_hostListenersAttached] = true;
      this[_disposer].addStreamSubscription(MouseEventL(), this.element[$onClick].listen(dart.fn(_ => {
        this.hide(true);
      }, MouseEventLToNullN())));
      this[_disposer].addStreamSubscription(EventL(), this.element[$onBlur].listen(dart.fn(_ => {
        this.hide(true);
      }, EventLToNullN())));
      this[_disposer].addStreamSubscription(EventL(), this.element[$onFocus].listen(dart.fn(_ => {
        this.show();
      }, EventLToNullN())));
      if (dart.test(feature_detector.supportsHover(this[_window$]))) {
        this[_disposer].addStreamSubscription(MouseEventL(), this.element[$onMouseOver].listen(dart.fn(_ => {
          this.show();
        }, MouseEventLToNullN())));
        this[_disposer].addStreamSubscription(MouseEventL(), this.element[$onMouseLeave].listen(dart.fn(_ => {
          this.hide();
        }, MouseEventLToNullN())));
      }
      if (dart.test(feature_detector.isHammerLoaded())) {
        this[_disposer].addStreamSubscription(EventL(), this.element[$on]._get("press").listen(dart.bind(this, 'handleLongPress')));
        this[_disposer].addStreamSubscription(TouchEventL(), this.element[$onTouchEnd].listen(dart.bind(this, 'endLongPress')));
      }
    }
    handleLongPress(_) {
      this.inLongPress = true;
      this.show();
    }
    endLongPress(event) {
      if (dart.test(this.inLongPress)) {
        event.preventDefault();
        this.inLongPress = false;
        this.hide(true);
      }
    }
    show() {
      if (dart.test(this[_isShown]) || !dart.test(this[_canShow])) return;
      this[_isShown] = true;
      this[_maybeLoadTooltip]();
      this[_delayedActivate].start();
    }
    hide(immediate = false) {
      let t1;
      if (!dart.test(this[_isShown])) return;
      this[_isShown] = false;
      this[_delayedActivate].cancel();
      t1 = this[_tooltip$];
      t1 == null ? null : t1.deactivate({immediate: immediate});
    }
    [_maybeLoadTooltip]() {
      let t1;
      if (dart.test(this[_isInitialized])) return;
      this[_isInitialized] = true;
      this[_componentRef] = this[_viewLoader$].loadNextToLocation(dart.dynamic, ink_tooltip$46template.MaterialInkTooltipComponentNgFactory, this.viewContainerRef);
      this[_inkTooltip] = MaterialInkTooltipComponentL().as(this[_componentRef].instance);
      this[_disposer].addDisposable(VoidToLvoid(), dart.bind(this[_componentRef], 'destroy'));
      t1 = this[_inkTooltip];
      (() => {
        t1.popupClassName = this[_popupClassName];
        t1.text = this[_lastText];
        t1.tooltipRef = this;
        return t1;
      })();
      if (this.positions != null) {
        this[_inkTooltip].positions = this.positions;
      }
    }
    setTooltip(tooltip) {
      if (this[_tooltip$] == null) this[_delayedActivate].start();
      this[_tooltip$] = tooltip;
    }
    [_activate]() {
      this[_changeDetector$2].markForCheck();
      this[_tooltip$].activate();
    }
    set text(text) {
      let t1;
      this[_lastText] = text;
      t1 = this[_inkTooltip];
      t1 == null ? null : t1.text = text;
    }
    set canShow(value) {
      let t1;
      if (dart.equals(value, this[_canShow])) return;
      if (dart.test(value)) {
        this[_attachHostListeners]();
      } else {
        t1 = this[_tooltip$];
        t1 == null ? null : t1.deactivate({immediate: true});
        this[_delayedActivate].cancel();
      }
      this[_canShow] = value;
    }
    ngOnInit() {
      if (dart.test(this[_canShow])) this[_attachHostListeners]();
    }
    ngOnDestroy() {
      let t1;
      t1 = this[_tooltip$];
      t1 == null ? null : t1.deactivate({immediate: true});
      this[_delayedActivate].cancel();
      this[_disposer].dispose();
    }
  };
  (tooltip.MaterialTooltipDirective.new = function(domPopupSourceFactory, viewContainerRef, element, _viewLoader, _changeDetector, _window, initAriaAttributes, tooltipClass) {
    let t1;
    this[_disposer] = new disposer.Disposer.multi();
    this[_lastText] = null;
    this[_isInitialized] = false;
    this[_tooltip$] = null;
    this[_canShow] = true;
    this[_isShown] = false;
    this[_inkTooltip] = null;
    this[_delayedActivate] = null;
    this[inLongPress] = null;
    this[_hostListenersAttached] = false;
    this[_componentRef] = null;
    this[positions$] = null;
    this[_viewLoader$] = _viewLoader;
    this[_changeDetector$2] = _changeDetector;
    this[_window$] = _window;
    this[element$3] = element;
    this[_popupClassName] = css.constructEncapsulatedCss(tooltipClass, element[$classes]);
    tooltip.MaterialTooltipDirective.__proto__.new.call(this, domPopupSourceFactory, viewContainerRef, element, (t1 = initAriaAttributes, t1 == null ? "false" : t1));
    this.inLongPress = false;
    this[_delayedActivate] = new delayed_action.DelayedAction.new(tooltip_source.tooltipShowDelay, dart.bind(this, _activate));
  }).prototype = tooltip.MaterialTooltipDirective.prototype;
  dart.addTypeTests(tooltip.MaterialTooltipDirective);
  dart.addTypeCaches(tooltip.MaterialTooltipDirective);
  tooltip.MaterialTooltipDirective[dart.implements] = () => [lifecycle_hooks.OnDestroy, lifecycle_hooks.OnInit, lifecycle_hooks.AfterViewInit];
  dart.setMethodSignature(tooltip.MaterialTooltipDirective, () => ({
    __proto__: dart.getMethods(tooltip.MaterialTooltipDirective.__proto__),
    [_attachHostListeners]: dart.fnType(dart.void, []),
    handleLongPress: dart.fnType(dart.void, [dart.legacy(html.Event)]),
    endLongPress: dart.fnType(dart.void, [dart.legacy(html.TouchEvent)]),
    show: dart.fnType(dart.void, []),
    hide: dart.fnType(dart.void, [], [dart.legacy(core.bool)]),
    [_maybeLoadTooltip]: dart.fnType(dart.void, []),
    [_activate]: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(tooltip.MaterialTooltipDirective, () => ({
    __proto__: dart.getSetters(tooltip.MaterialTooltipDirective.__proto__),
    text: dart.legacy(core.String),
    canShow: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(tooltip.MaterialTooltipDirective, L7);
  dart.setFieldSignature(tooltip.MaterialTooltipDirective, () => ({
    __proto__: dart.getFields(tooltip.MaterialTooltipDirective.__proto__),
    [_disposer]: dart.finalFieldType(dart.legacy(disposer.Disposer)),
    [_viewLoader$]: dart.finalFieldType(dart.legacy(component_loader.ComponentLoader)),
    [_changeDetector$2]: dart.finalFieldType(dart.legacy(change_detector_ref.ChangeDetectorRef)),
    [_popupClassName]: dart.finalFieldType(dart.legacy(core.String)),
    [_window$]: dart.finalFieldType(dart.legacy(html.Window)),
    [_lastText]: dart.fieldType(dart.legacy(core.String)),
    [_isInitialized]: dart.fieldType(dart.legacy(core.bool)),
    [_tooltip$]: dart.fieldType(dart.legacy(tooltip_controller.Tooltip)),
    [_canShow]: dart.fieldType(dart.legacy(core.bool)),
    [_isShown]: dart.fieldType(dart.legacy(core.bool)),
    [_inkTooltip]: dart.fieldType(dart.legacy(ink_tooltip.MaterialInkTooltipComponent)),
    [_delayedActivate]: dart.fieldType(dart.legacy(delayed_action.DelayedAction)),
    element: dart.fieldType(dart.legacy(html.HtmlElement)),
    inLongPress: dart.fieldType(dart.legacy(core.bool)),
    [_hostListenersAttached]: dart.fieldType(dart.legacy(core.bool)),
    [_componentRef]: dart.fieldType(dart.legacy(component_factory.ComponentRef)),
    positions: dart.fieldType(dart.legacy(core.List$(dart.legacy(alignment.RelativePosition))))
  }));
  var _appEl_1 = dart.privateName(ink_tooltip$46template, "_appEl_1");
  var _NgIf_1_9 = dart.privateName(ink_tooltip$46template, "_NgIf_1_9");
  var C8;
  ink_tooltip$46template.ViewMaterialInkTooltipComponent0 = class ViewMaterialInkTooltipComponent0 extends app_view.AppView$(dart.legacy(ink_tooltip.MaterialInkTooltipComponent)) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tooltip/ink_tooltip.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = dom_helpers.appendText(parentRenderNode, "        ");
      let _anchor_1 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_1] = new view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C8 || CT.C8);
      this[_NgIf_1_9] = new ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_1_9].ngIf = _ctx.popupSource != null;
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = ink_tooltip$46template.ViewMaterialInkTooltipComponent0._componentStyles;
      if (styles == null) {
        ink_tooltip$46template.ViewMaterialInkTooltipComponent0._componentStyles = styles = ink_tooltip$46template.ViewMaterialInkTooltipComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(ink_tooltip$46template.styles$MaterialInkTooltipComponent, ink_tooltip$46template.ViewMaterialInkTooltipComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (ink_tooltip$46template.ViewMaterialInkTooltipComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    ink_tooltip$46template.ViewMaterialInkTooltipComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 1);
    this.initComponentStyles();
    this.rootEl = HtmlElementL().as(html.document[$createElement]("material-tooltip-text"));
  }).prototype = ink_tooltip$46template.ViewMaterialInkTooltipComponent0.prototype;
  dart.addTypeTests(ink_tooltip$46template.ViewMaterialInkTooltipComponent0);
  dart.addTypeCaches(ink_tooltip$46template.ViewMaterialInkTooltipComponent0);
  dart.setLibraryUri(ink_tooltip$46template.ViewMaterialInkTooltipComponent0, L8);
  dart.setFieldSignature(ink_tooltip$46template.ViewMaterialInkTooltipComponent0, () => ({
    __proto__: dart.getFields(ink_tooltip$46template.ViewMaterialInkTooltipComponent0.__proto__),
    [_appEl_1]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_NgIf_1_9]: dart.fieldType(dart.legacy(ng_if.NgIf))
  }));
  dart.defineLazy(ink_tooltip$46template.ViewMaterialInkTooltipComponent0, {
    /*ink_tooltip$46template.ViewMaterialInkTooltipComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  }, true);
  var _compView_0 = dart.privateName(ink_tooltip$46template, "_compView_0");
  var _appEl_0 = dart.privateName(ink_tooltip$46template, "_appEl_0");
  var _MaterialPopupComponent_0_8 = dart.privateName(ink_tooltip$46template, "_MaterialPopupComponent_0_8");
  var __PopupHierarchy_0_11 = dart.privateName(ink_tooltip$46template, "__PopupHierarchy_0_11");
  var __PopupRef_0_12 = dart.privateName(ink_tooltip$46template, "__PopupRef_0_12");
  var _appEl_2 = dart.privateName(ink_tooltip$46template, "_appEl_2");
  var _DeferredContentDirective_2_9 = dart.privateName(ink_tooltip$46template, "_DeferredContentDirective_2_9");
  var _expr_0 = dart.privateName(ink_tooltip$46template, "_expr_0");
  var _expr_4 = dart.privateName(ink_tooltip$46template, "_expr_4");
  var _expr_5 = dart.privateName(ink_tooltip$46template, "_expr_5");
  var _expr_7 = dart.privateName(ink_tooltip$46template, "_expr_7");
  var _el_0 = dart.privateName(ink_tooltip$46template, "_el_0");
  var _PopupHierarchy_0_11 = dart.privateName(ink_tooltip$46template, "_PopupHierarchy_0_11");
  var _PopupRef_0_12 = dart.privateName(ink_tooltip$46template, "_PopupRef_0_12");
  var OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  ink_tooltip$46template._ViewMaterialInkTooltipComponent1 = class _ViewMaterialInkTooltipComponent1 extends app_view.AppView$(dart.legacy(ink_tooltip.MaterialInkTooltipComponent)) {
    get [_PopupHierarchy_0_11]() {
      if (this[__PopupHierarchy_0_11] == null) {
        this[__PopupHierarchy_0_11] = material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_11];
    }
    get [_PopupRef_0_12]() {
      if (this[__PopupRef_0_12] == null) {
        this[__PopupRef_0_12] = material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupRef_0_12];
    }
    build() {
      this[_compView_0] = new material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      dom_helpers.setAttribute(this[_el_0], "enforceSpaceConstraints", "");
      dom_helpers.setAttribute(this[_el_0], "ink", "");
      dom_helpers.setAttribute(this[_el_0], "role", "tooltip");
      dom_helpers.setAttribute(this[_el_0], "trackLayoutChanges", "");
      this.addShimC(HtmlElementL().as(this[_el_0]));
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_MaterialPopupComponent_0_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(MaterialPopupComponentL(), dart.wrapType(MaterialPopupComponentL()), dart.fn(() => new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), "tooltip", NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C9 || CT.C9, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C10 || CT.C10, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C11 || CT.C11, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(this[_el_0])), VoidToMaterialPopupComponentL())) : new material_popup.MaterialPopupComponent.new(PopupHierarchyL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupHierarchyL()), this.viewData.parentIndex)), MaterialPopupComponentL().as(this.parentView.injectorGetOptional(dart.wrapType(MaterialPopupComponentL()), this.viewData.parentIndex)), "tooltip", NgZoneL().as(this.parentView.injectorGet(dart.wrapType(NgZoneL()), this.viewData.parentIndex)), OverlayServiceL().as(this.parentView.injectorGet(dart.wrapType(OverlayServiceL()), this.viewData.parentIndex)), DomServiceL().as(this.parentView.injectorGet(dart.wrapType(DomServiceL()), this.viewData.parentIndex)), ZIndexerL().as(this.parentView.injectorGet(dart.wrapType(ZIndexerL()), this.viewData.parentIndex)), ListLOfRelativePositionL().as(this.parentView.injectorGet(C9 || CT.C9, this.viewData.parentIndex)), boolL().as(this.parentView.injectorGet(C10 || CT.C10, this.viewData.parentIndex)), BoxL().as(this.parentView.injectorGet(C11 || CT.C11, this.viewData.parentIndex)), PopupSizeProviderL().as(this.parentView.injectorGetOptional(dart.wrapType(PopupSizeProviderL()), this.viewData.parentIndex)), this[_compView_0], this[_appEl_0], new element_ref.ElementRef.new(this[_el_0]));
      let _text_1 = dom_helpers.createText("\n          ");
      let _anchor_2 = dom_helpers.createAnchor();
      this[_appEl_2] = new view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new template_ref.TemplateRef.new(this[_appEl_2], C12 || CT.C12);
      this[_DeferredContentDirective_2_9] = new deferred_content.DeferredContentDirective.new(this[_appEl_2], _TemplateRef_2_8, this[_MaterialPopupComponent_0_8]);
      let _text_3 = dom_helpers.createText("\n        ");
      this[_compView_0].create(this[_MaterialPopupComponent_0_8], JSArrayOfObjectL().of([C13 || CT.C13, JSArrayOfObjectL().of([_text_1, this[_appEl_2], _text_3]), C13 || CT.C13]));
      this.init1(this[_appEl_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (dart.notNull(nodeIndex) <= 3) {
        if (token === dart.wrapType(MaterialPopupComponentL()) || token === dart.wrapType(DeferredContentAwareL()) || token === dart.wrapType(DropdownHandleL())) {
          return this[_MaterialPopupComponent_0_8];
        }
        if (token === dart.wrapType(PopupHierarchyL())) {
          return this[_PopupHierarchy_0_11];
        }
        if (token === dart.wrapType(PopupRefL())) {
          return this[_PopupRef_0_12];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialPopupComponent_0_8].autoDismiss = false;
        changed = true;
        this[_MaterialPopupComponent_0_8].enforceSpaceConstraints = true;
        changed = true;
        this[_MaterialPopupComponent_0_8].matchMinSourceWidth = false;
        changed = true;
        this[_MaterialPopupComponent_0_8].trackLayoutChanges = true;
        changed = true;
        this[_MaterialPopupComponent_0_8].inkBackground = true;
        changed = true;
      }
      let currVal_4 = _ctx.positions;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialPopupComponent_0_8].preferredPositions = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.popupSource;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialPopupComponent_0_8].source = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      let currVal_7 = _ctx.showPopup;
      if (dart.test(app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_MaterialPopupComponent_0_8].visible = currVal_7;
        changed = true;
        this[_expr_7] = currVal_7;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_DeferredContentDirective_2_9].preserveDimensions = true;
      }
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      let currVal_0 = interpolate.interpolateString1("aacmtit-ink-tooltip-shadow ", _ctx.popupClassName, "");
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_compView_0].updateChildClassNonHtml(this[_el_0], currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialPopupComponent_0_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_compView_0].destroyInternalState();
      this[_DeferredContentDirective_2_9].ngOnDestroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
  };
  (ink_tooltip$46template._ViewMaterialInkTooltipComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupHierarchy_0_11] = null;
    this[__PopupRef_0_12] = null;
    this[_appEl_2] = null;
    this[_DeferredContentDirective_2_9] = null;
    this[_expr_0] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_7] = null;
    this[_el_0] = null;
    ink_tooltip$46template._ViewMaterialInkTooltipComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = ink_tooltip$46template._ViewMaterialInkTooltipComponent1.prototype;
  dart.addTypeTests(ink_tooltip$46template._ViewMaterialInkTooltipComponent1);
  dart.addTypeCaches(ink_tooltip$46template._ViewMaterialInkTooltipComponent1);
  dart.setMethodSignature(ink_tooltip$46template._ViewMaterialInkTooltipComponent1, () => ({
    __proto__: dart.getMethods(ink_tooltip$46template._ViewMaterialInkTooltipComponent1.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setGetterSignature(ink_tooltip$46template._ViewMaterialInkTooltipComponent1, () => ({
    __proto__: dart.getGetters(ink_tooltip$46template._ViewMaterialInkTooltipComponent1.__proto__),
    [_PopupHierarchy_0_11]: dart.dynamic,
    [_PopupRef_0_12]: dart.dynamic
  }));
  dart.setLibraryUri(ink_tooltip$46template._ViewMaterialInkTooltipComponent1, L8);
  dart.setFieldSignature(ink_tooltip$46template._ViewMaterialInkTooltipComponent1, () => ({
    __proto__: dart.getFields(ink_tooltip$46template._ViewMaterialInkTooltipComponent1.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(material_popup$46template.ViewMaterialPopupComponent0)),
    [_appEl_0]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_MaterialPopupComponent_0_8]: dart.fieldType(dart.legacy(material_popup.MaterialPopupComponent)),
    [__PopupHierarchy_0_11]: dart.fieldType(dart.dynamic),
    [__PopupRef_0_12]: dart.fieldType(dart.dynamic),
    [_appEl_2]: dart.fieldType(dart.legacy(view_container.ViewContainer)),
    [_DeferredContentDirective_2_9]: dart.fieldType(dart.legacy(deferred_content.DeferredContentDirective)),
    [_expr_0]: dart.fieldType(dart.legacy(core.String)),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.legacy(core.bool)),
    [_el_0]: dart.fieldType(dart.legacy(html.Element))
  }));
  var _textBinding_2 = dart.privateName(ink_tooltip$46template, "_textBinding_2");
  ink_tooltip$46template._ViewMaterialInkTooltipComponent2 = class _ViewMaterialInkTooltipComponent2 extends app_view.AppView$(dart.legacy(ink_tooltip.MaterialInkTooltipComponent)) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(HtmlElementL().as(_el_0), "ink-container");
      this.addShimC(HtmlElementL().as(_el_0));
      let _text_1 = dom_helpers.appendText(_el_0, "\n            ");
      _el_0[$append](this[_textBinding_2].element);
      this.project(_el_0, 0);
      let _text_3 = dom_helpers.appendText(_el_0, "\n          ");
      _el_0[$addEventListener]("mouseover", this.eventHandler0(EventL(), dart.bind(_ctx, 'onMouseOver')));
      _el_0[$addEventListener]("mouseleave", this.eventHandler0(EventL(), dart.bind(_ctx, 'onMouseLeave')));
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_2].updateText(interpolate.interpolateString0(_ctx.text));
    }
  };
  (ink_tooltip$46template._ViewMaterialInkTooltipComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    ink_tooltip$46template._ViewMaterialInkTooltipComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = ink_tooltip$46template._ViewMaterialInkTooltipComponent2.prototype;
  dart.addTypeTests(ink_tooltip$46template._ViewMaterialInkTooltipComponent2);
  dart.addTypeCaches(ink_tooltip$46template._ViewMaterialInkTooltipComponent2);
  dart.setLibraryUri(ink_tooltip$46template._ViewMaterialInkTooltipComponent2, L8);
  dart.setFieldSignature(ink_tooltip$46template._ViewMaterialInkTooltipComponent2, () => ({
    __proto__: dart.getFields(ink_tooltip$46template._ViewMaterialInkTooltipComponent2.__proto__),
    [_textBinding_2]: dart.finalFieldType(dart.legacy(text_binding.TextBinding))
  }));
  var _TooltipController_0_5 = dart.privateName(ink_tooltip$46template, "_TooltipController_0_5");
  var _MaterialInkTooltipComponent_0_6 = dart.privateName(ink_tooltip$46template, "_MaterialInkTooltipComponent_0_6");
  ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0 = class _ViewMaterialInkTooltipComponentHost0 extends app_view.AppView$(dart.legacy(ink_tooltip.MaterialInkTooltipComponent)) {
    build() {
      this[_compView_0] = new ink_tooltip$46template.ViewMaterialInkTooltipComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_TooltipController_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(TooltipControllerL(), dart.wrapType(TooltipControllerL()), dart.fn(() => module.createTooltipController(TooltipControllerL().as(this.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.viewData.parentIndex)), DisposerL().as(this.injectorGetOptional(dart.wrapType(DisposerL()), this.viewData.parentIndex))), VoidToTooltipControllerL())) : module.createTooltipController(TooltipControllerL().as(this.injectorGetOptional(dart.wrapType(TooltipControllerL()), this.viewData.parentIndex)), DisposerL().as(this.injectorGetOptional(dart.wrapType(DisposerL()), this.viewData.parentIndex)));
      this[_MaterialInkTooltipComponent_0_6] = new ink_tooltip.MaterialInkTooltipComponent.new(TooltipControllerL().as(this[_TooltipController_0_5]), this[_compView_0], this.rootEl, null);
      this[_compView_0].create(this[_MaterialInkTooltipComponent_0_6], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfMaterialInkTooltipComponentL()).new(0, this, this.rootEl, this[_MaterialInkTooltipComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(TooltipControllerL()) && 0 === nodeIndex) {
        return this[_TooltipController_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_TooltipController_0_5] = null;
    this[_MaterialInkTooltipComponent_0_6] = null;
    ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.prototype;
  dart.addTypeTests(ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0);
  dart.addTypeCaches(ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0);
  dart.setMethodSignature(ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0, () => ({
    __proto__: dart.getMethods(ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.legacy(core.int), dart.dynamic])
  }));
  dart.setLibraryUri(ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0, L8);
  dart.setFieldSignature(ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0, () => ({
    __proto__: dart.getFields(ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dart.legacy(ink_tooltip$46template.ViewMaterialInkTooltipComponent0)),
    [_TooltipController_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialInkTooltipComponent_0_6]: dart.fieldType(dart.legacy(ink_tooltip.MaterialInkTooltipComponent))
  }));
  ink_tooltip$46template.viewFactory_MaterialInkTooltipComponent1 = function viewFactory_MaterialInkTooltipComponent1(parentView, parentIndex) {
    return new ink_tooltip$46template._ViewMaterialInkTooltipComponent1.new(parentView, parentIndex);
  };
  ink_tooltip$46template.viewFactory_MaterialInkTooltipComponent2 = function viewFactory_MaterialInkTooltipComponent2(parentView, parentIndex) {
    return new ink_tooltip$46template._ViewMaterialInkTooltipComponent2.new(parentView, parentIndex);
  };
  ink_tooltip$46template.viewFactory_MaterialInkTooltipComponentHost0 = function viewFactory_MaterialInkTooltipComponentHost0(parentView, parentIndex) {
    return new ink_tooltip$46template._ViewMaterialInkTooltipComponentHost0.new(parentView, parentIndex);
  };
  ink_tooltip$46template.initReflector = function initReflector$0() {
    if (dart.test(ink_tooltip$46template._visited)) {
      return;
    }
    ink_tooltip$46template._visited = true;
    reflector.registerComponent(dart.wrapType(MaterialInkTooltipComponentL()), ink_tooltip$46template.MaterialInkTooltipComponentNgFactory);
    angular$46template.initReflector();
    deferred_content$46template.initReflector();
    alignment$46template.initReflector();
    popup$46template.initReflector();
    material_popup$46template.initReflector();
    module$46template.initReflector();
    css$46template.initReflector();
    tooltip_controller$46template.initReflector();
    tooltip_target$46template.initReflector();
  };
  dart.copyProperties(ink_tooltip$46template, {
    get MaterialInkTooltipComponentNgFactory() {
      return ink_tooltip$46template._MaterialInkTooltipComponentNgFactory;
    }
  });
  var C15;
  var ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  var ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  var C14;
  dart.defineLazy(ink_tooltip$46template, {
    /*ink_tooltip$46template.styles$MaterialInkTooltipComponent*/get styles$MaterialInkTooltipComponent() {
      return [ink_tooltip$46scss$46css$46shim.styles];
    },
    /*ink_tooltip$46template._MaterialInkTooltipComponentNgFactory*/get _MaterialInkTooltipComponentNgFactory() {
      return C14 || CT.C14;
    },
    /*ink_tooltip$46template.styles$MaterialInkTooltipComponentHost*/get styles$MaterialInkTooltipComponentHost() {
      return C13 || CT.C13;
    },
    /*ink_tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  }, true);
  dart.defineLazy(ink_tooltip$46scss$46css$46shim, {
    /*ink_tooltip$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{position:absolute}.ink-container._ngcontent-%ID%{box-sizing:border-box;overflow:hidden;max-width:320px;padding:8px;font-size:12px;font-weight:500;line-height:16px;text-align:left;text-overflow:ellipsis}.aacmtit-ink-tooltip-shadow._ngcontent-%ID%  .popup-wrapper.mixin{margin:8px}"];
    }
  }, true);
  dart.trackLibraries("packages/angular_components/src/material_tooltip/icon_tooltip", {
    "package:angular_components/src/material_tooltip/tooltip_source.template.dart": tooltip_source$46template,
    "package:angular_components/src/material_tooltip/tooltip_source.dart": tooltip_source,
    "package:angular_components/src/material_tooltip/icon_tooltip.dart": icon_tooltip,
    "package:angular_components/src/material_tooltip/tooltip_target.dart": tooltip_target,
    "package:angular_components/src/material_tooltip/paper_tooltip.dart": paper_tooltip,
    "package:angular_components/src/material_tooltip/ink_tooltip.dart": ink_tooltip,
    "package:angular_components/src/material_tooltip/tooltip_target.template.dart": tooltip_target$46template,
    "package:angular_components/src/material_tooltip/tooltip.dart": tooltip,
    "package:angular_components/src/material_tooltip/ink_tooltip.template.dart": ink_tooltip$46template,
    "package:angular_components/src/material_tooltip/ink_tooltip.scss.css.shim.dart": ink_tooltip$46scss$46css$46shim
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tooltip_source.template.dart","tooltip_source.dart","icon_tooltip.dart","tooltip_target.dart","paper_tooltip.dart","ink_tooltip.dart","tooltip_target.template.dart","tooltip.dart","ink_tooltip.template.dart","ink_tooltip.scss.css.shim.dart"],"names":[],"mappings":"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","file":"icon_tooltip.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__tooltip_source$46template: tooltip_source$46template,
    src__material_tooltip__tooltip_source: tooltip_source,
    src__material_tooltip__icon_tooltip: icon_tooltip,
    src__material_tooltip__tooltip_target: tooltip_target,
    src__material_tooltip__paper_tooltip: paper_tooltip,
    src__material_tooltip__ink_tooltip: ink_tooltip,
    src__material_tooltip__tooltip_target$46template: tooltip_target$46template,
    src__material_tooltip__tooltip: tooltip,
    src__material_tooltip__ink_tooltip$46template: ink_tooltip$46template,
    src__material_tooltip__ink_tooltip$46scss$46css$46shim: ink_tooltip$46scss$46css$46shim
  };
}));

//# sourceMappingURL=icon_tooltip.ddc.js.map
