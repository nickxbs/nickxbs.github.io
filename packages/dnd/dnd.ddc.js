define(['dart_sdk'], (function load__packages__dnd__dnd(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const js = dart_sdk.js;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var dnd = Object.create(dart.library);
  var $add = dartx.add;
  var $classes = dartx.classes;
  var $onClick = dartx.onClick;
  var $forEach = dartx.forEach;
  var $clear = dartx.clear;
  var $remove = dartx.remove;
  var $pointerEvents = dartx.pointerEvents;
  var $transform = dartx.transform;
  var $left = dartx.left;
  var $top = dartx.top;
  var $getComputedStyle = dartx.getComputedStyle;
  var $marginLeft = dartx.marginLeft;
  var $replaceFirst = dartx.replaceFirst;
  var $marginTop = dartx.marginTop;
  var $topLeft = dartx.topLeft;
  var $offset = dartx.offset;
  var $position = dartx.position;
  var $clone = dartx.clone;
  var $attributes = dartx.attributes;
  var $cursor = dartx.cursor;
  var $zIndex = dartx.zIndex;
  var $append = dartx.append;
  var $animationFrame = dartx.animationFrame;
  var $touchAction = dartx.touchAction;
  var $onKeyDown = dartx.onKeyDown;
  var $onBlur = dartx.onBlur;
  var $currentTarget = dartx.currentTarget;
  var $round = dartx.round;
  var $elementFromPoint = dartx.elementFromPoint;
  var $visibility = dartx.visibility;
  var $shadowRoot = dartx.shadowRoot;
  var $containsKey = dartx.containsKey;
  var $matchesWithAncestors = dartx.matchesWithAncestors;
  var $firstWhere = dartx.firstWhere;
  var $onTouchStart = dartx.onTouchStart;
  var $length = dartx.length;
  var $target = dartx.target;
  var $_get = dartx._get;
  var $page = dartx.page;
  var $onTouchMove = dartx.onTouchMove;
  var $client = dartx.client;
  var $onTouchEnd = dartx.onTouchEnd;
  var $onTouchCancel = dartx.onTouchCancel;
  var $abs = dartx.abs;
  var $onMouseDown = dartx.onMouseDown;
  var $onMouseMove = dartx.onMouseMove;
  var $onMouseUp = dartx.onMouseUp;
  var $on = dartx.on;
  var $relatedTarget = dartx.relatedTarget;
  var _EventManagerL = () => (_EventManagerL = dart.constFn(dart.legacy(dnd._EventManager)))();
  var JSArrayOf_EventManagerL = () => (JSArrayOf_EventManagerL = dart.constFn(_interceptors.JSArray$(_EventManagerL())))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var JSArrayOfElementL = () => (JSArrayOfElementL = dart.constFn(_interceptors.JSArray$(ElementL())))();
  var ListOfElementL = () => (ListOfElementL = dart.constFn(core.List$(ElementL())))();
  var ListLOfElementL = () => (ListLOfElementL = dart.constFn(dart.legacy(ListOfElementL())))();
  var DraggableEventL = () => (DraggableEventL = dart.constFn(dart.legacy(dnd.DraggableEvent)))();
  var StreamControllerOfDraggableEventL = () => (StreamControllerOfDraggableEventL = dart.constFn(async.StreamController$(DraggableEventL())))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var MouseEventLToNullN = () => (MouseEventLToNullN = dart.constFn(dart.fnType(core.Null, [MouseEventL()])))();
  var FutureOfNullN = () => (FutureOfNullN = dart.constFn(async.Future$(core.Null)))();
  var _EventManagerLTovoid = () => (_EventManagerLTovoid = dart.constFn(dart.fnType(dart.void, [_EventManagerL()])))();
  var TextAreaElementL = () => (TextAreaElementL = dart.constFn(dart.legacy(html.TextAreaElement)))();
  var InputElementL = () => (InputElementL = dart.constFn(dart.legacy(html.InputElement)))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var PointOfnumL = () => (PointOfnumL = dart.constFn(math.Point$(numL())))();
  var numLTovoid = () => (numLTovoid = dart.constFn(dart.fnType(dart.void, [numL()])))();
  var EventStreamProviderOfMouseEventL = () => (EventStreamProviderOfMouseEventL = dart.constFn(html.EventStreamProvider$(MouseEventL())))();
  var StreamSubscriptionL = () => (StreamSubscriptionL = dart.constFn(dart.legacy(async.StreamSubscription)))();
  var JSArrayOfStreamSubscriptionL = () => (JSArrayOfStreamSubscriptionL = dart.constFn(_interceptors.JSArray$(StreamSubscriptionL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ElementLToStringL = () => (ElementLToStringL = dart.constFn(dart.fnType(StringL(), [ElementL()])))();
  var KeyboardEventL = () => (KeyboardEventL = dart.constFn(dart.legacy(html.KeyboardEvent)))();
  var KeyboardEventLToNullN = () => (KeyboardEventLToNullN = dart.constFn(dart.fnType(core.Null, [KeyboardEventL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var EventLToNullN = () => (EventLToNullN = dart.constFn(dart.fnType(core.Null, [EventL()])))();
  var UIEventL = () => (UIEventL = dart.constFn(dart.legacy(html.UIEvent)))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var FutureLOfvoid = () => (FutureLOfvoid = dart.constFn(dart.legacy(FutureOfvoid())))();
  var StreamSubscriptionLToFutureLOfvoid = () => (StreamSubscriptionLToFutureLOfvoid = dart.constFn(dart.fnType(FutureLOfvoid(), [StreamSubscriptionL()])))();
  var ElementLToNullN = () => (ElementLToNullN = dart.constFn(dart.fnType(core.Null, [ElementL()])))();
  var NodeN = () => (NodeN = dart.constFn(dart.nullable(html.Node)))();
  var ElementLToboolL = () => (ElementLToboolL = dart.constFn(dart.fnType(boolL(), [ElementL()])))();
  var TouchEventL = () => (TouchEventL = dart.constFn(dart.legacy(html.TouchEvent)))();
  var TouchEventLToNullN = () => (TouchEventLToNullN = dart.constFn(dart.fnType(core.Null, [TouchEventL()])))();
  var SelectElementL = () => (SelectElementL = dart.constFn(dart.legacy(html.SelectElement)))();
  var ButtonElementL = () => (ButtonElementL = dart.constFn(dart.legacy(html.ButtonElement)))();
  var OptionElementL = () => (OptionElementL = dart.constFn(dart.legacy(html.OptionElement)))();
  var PointerEventL = () => (PointerEventL = dart.constFn(dart.legacy(html.PointerEvent)))();
  var DropzoneEventL = () => (DropzoneEventL = dart.constFn(dart.legacy(dnd.DropzoneEvent)))();
  var StreamControllerOfDropzoneEventL = () => (StreamControllerOfDropzoneEventL = dart.constFn(async.StreamController$(DropzoneEventL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var _IdentityHashSetOfintL = () => (_IdentityHashSetOfintL = dart.constFn(collection._IdentityHashSet$(intL())))();
  var DraggableL = () => (DraggableL = dart.constFn(dart.legacy(dnd.Draggable)))();
  var DraggableLToboolL = () => (DraggableLToboolL = dart.constFn(dart.fnType(boolL(), [DraggableL()])))();
  const CT = Object.create(null);
  var L0 = "package:dnd/dnd.dart";
  var _onDragStart = dart.privateName(dnd, "_onDragStart");
  var _onDrag = dart.privateName(dnd, "_onDrag");
  var _onDragEnd = dart.privateName(dnd, "_onDragEnd");
  var _elements = dart.privateName(dnd, "_elements");
  var _eventManagers = dart.privateName(dnd, "_eventManagers");
  var _handleDragEnd = dart.privateName(dnd, "_handleDragEnd");
  var _handleDragStart = dart.privateName(dnd, "_handleDragStart");
  var _clearTextSelections = dart.privateName(dnd, "_clearTextSelections");
  var _handleDrag = dart.privateName(dnd, "_handleDrag");
  var _suppressClickEvent = dart.privateName(dnd, "_suppressClickEvent");
  var _resetCurrentDrag = dart.privateName(dnd, "_resetCurrentDrag");
  var id = dart.privateName(dnd, "Draggable.id");
  var avatarHandler$ = dart.privateName(dnd, "Draggable.avatarHandler");
  var horizontalOnly$ = dart.privateName(dnd, "Draggable.horizontalOnly");
  var verticalOnly$ = dart.privateName(dnd, "Draggable.verticalOnly");
  var handle$ = dart.privateName(dnd, "Draggable.handle");
  var cancel$ = dart.privateName(dnd, "Draggable.cancel");
  var draggingClass$ = dart.privateName(dnd, "Draggable.draggingClass");
  var draggingClassBody$ = dart.privateName(dnd, "Draggable.draggingClassBody");
  var minDragStartDistance$ = dart.privateName(dnd, "Draggable.minDragStartDistance");
  dnd.Draggable = class Draggable extends core.Object {
    get id() {
      return this[id];
    }
    set id(value) {
      super.id = value;
    }
    get avatarHandler() {
      return this[avatarHandler$];
    }
    set avatarHandler(value) {
      this[avatarHandler$] = value;
    }
    get horizontalOnly() {
      return this[horizontalOnly$];
    }
    set horizontalOnly(value) {
      this[horizontalOnly$] = value;
    }
    get verticalOnly() {
      return this[verticalOnly$];
    }
    set verticalOnly(value) {
      this[verticalOnly$] = value;
    }
    get handle() {
      return this[handle$];
    }
    set handle(value) {
      this[handle$] = value;
    }
    get cancel() {
      return this[cancel$];
    }
    set cancel(value) {
      this[cancel$] = value;
    }
    get draggingClass() {
      return this[draggingClass$];
    }
    set draggingClass(value) {
      this[draggingClass$] = value;
    }
    get draggingClassBody() {
      return this[draggingClassBody$];
    }
    set draggingClassBody(value) {
      this[draggingClassBody$] = value;
    }
    get minDragStartDistance() {
      return this[minDragStartDistance$];
    }
    set minDragStartDistance(value) {
      this[minDragStartDistance$] = value;
    }
    get clickSuppression() {
      return this.minDragStartDistance;
    }
    set clickSuppression(distance) {
      return this.minDragStartDistance = distance;
    }
    get onDragStart() {
      if (this[_onDragStart] == null) {
        this[_onDragStart] = StreamControllerOfDraggableEventL().broadcast({sync: true, onCancel: dart.fn(() => this[_onDragStart] = null, VoidToNullN())});
      }
      return this[_onDragStart].stream;
    }
    get onDrag() {
      if (this[_onDrag] == null) {
        this[_onDrag] = StreamControllerOfDraggableEventL().broadcast({sync: true, onCancel: dart.fn(() => this[_onDrag] = null, VoidToNullN())});
      }
      return this[_onDrag].stream;
    }
    get onDragEnd() {
      if (this[_onDragEnd] == null) {
        this[_onDragEnd] = StreamControllerOfDraggableEventL().broadcast({sync: true, onCancel: dart.fn(() => this[_onDragEnd] = null, VoidToNullN())});
      }
      return this[_onDragEnd].stream;
    }
    abort() {
      if (dnd._currentDrag != null && dnd._currentDrag.draggableId == this.id) {
        this[_handleDragEnd](null, null, {cancelled: true});
      }
    }
    [_handleDragStart](moveEvent) {
      dnd._currentDrag.started = true;
      if (this.avatarHandler != null) {
        this.avatarHandler[_handleDragStart](dnd._currentDrag.element, dnd._currentDrag.position);
      }
      if (this[_onDragStart] != null) {
        this[_onDragStart].add(new dnd.DraggableEvent.__(moveEvent, dnd._currentDrag));
      }
      if (this.draggingClass != null) {
        dnd._currentDrag.element[$classes].add(this.draggingClass);
      }
      if (this.draggingClassBody != null) {
        html.document.body[$classes].add(this.draggingClassBody);
      }
      this[_clearTextSelections]();
    }
    [_handleDrag](moveEvent, target) {
      if (this.avatarHandler != null) {
        this.avatarHandler[_handleDrag](dnd._currentDrag.startPosition, dnd._currentDrag.position);
      }
      dnd._DragEventDispatcher.dispatchEnterOverLeave(this, target);
      if (this[_onDrag] != null) {
        this[_onDrag].add(new dnd.DraggableEvent.__(moveEvent, dnd._currentDrag));
      }
    }
    [_handleDragEnd](event, target, opts) {
      let cancelled = opts && 'cancelled' in opts ? opts.cancelled : false;
      if (dart.test(dnd._currentDrag.started)) {
        if (this.avatarHandler != null) {
          this.avatarHandler[_handleDragEnd](dnd._currentDrag.startPosition, dnd._currentDrag.position);
        }
        if (!dart.dtest(cancelled) && target != null) {
          dnd._DragEventDispatcher.dispatchDrop(this, target);
        }
        if (this[_onDragEnd] != null) {
          this[_onDragEnd].add(new dnd.DraggableEvent.__(event, dnd._currentDrag, {cancelled: boolL().as(cancelled)}));
        }
        if (event != null) {
          event.preventDefault();
        }
        if (MouseEventL().is(event)) {
          this[_suppressClickEvent](dnd._currentDrag.element);
        }
        if (this.draggingClass != null) {
          dnd._currentDrag.element[$classes].remove(this.draggingClass);
        }
        if (this.draggingClassBody != null) {
          html.document.body[$classes].remove(this.draggingClassBody);
        }
      }
      this[_resetCurrentDrag]();
    }
    [_suppressClickEvent](element) {
      let clickPreventer = element[$onClick].listen(dart.fn(event => {
        event.stopPropagation();
        event.preventDefault();
      }, MouseEventLToNullN()));
      FutureOfNullN().new(dart.fn(() => {
        clickPreventer.cancel();
      }, VoidToNullN()));
    }
    destroy() {
      this[_resetCurrentDrag]();
      this[_eventManagers][$forEach](dart.fn(m => m.destroy(), _EventManagerLTovoid()));
      this[_eventManagers][$clear]();
      if (this.avatarHandler != null && this.avatarHandler.avatar != null) {
        this.avatarHandler.avatar[$remove]();
      }
    }
    [_resetCurrentDrag]() {
      this[_eventManagers][$forEach](dart.fn(m => m.reset(), _EventManagerLTovoid()));
      dnd._DragEventDispatcher.reset();
      dnd._currentDrag = null;
    }
    [_clearTextSelections]() {
      html.window.getSelection().removeAllRanges();
      try {
        let activeElement = html.document.activeElement;
        if (TextAreaElementL().is(activeElement)) {
          activeElement.setSelectionRange(0, 0);
        } else if (InputElementL().is(activeElement)) {
          activeElement.setSelectionRange(0, 0);
        }
      } catch (e) {
        let _ = dart.getThrown(e);
      }
    }
  };
  (dnd.Draggable.new = function(elementOrElementList, opts) {
    let t0;
    let avatarHandler = opts && 'avatarHandler' in opts ? opts.avatarHandler : null;
    let horizontalOnly = opts && 'horizontalOnly' in opts ? opts.horizontalOnly : false;
    let verticalOnly = opts && 'verticalOnly' in opts ? opts.verticalOnly : false;
    let handle = opts && 'handle' in opts ? opts.handle : null;
    let cancel = opts && 'cancel' in opts ? opts.cancel : "input, textarea, button, select, option";
    let draggingClass = opts && 'draggingClass' in opts ? opts.draggingClass : "dnd-dragging";
    let draggingClassBody = opts && 'draggingClassBody' in opts ? opts.draggingClassBody : "dnd-drag-occurring";
    let minDragStartDistance = opts && 'minDragStartDistance' in opts ? opts.minDragStartDistance : 4;
    this[id] = (t0 = dnd.Draggable.idCounter, dnd.Draggable.idCounter = dart.notNull(t0) + 1, t0);
    this[_onDragStart] = null;
    this[_onDrag] = null;
    this[_onDragEnd] = null;
    this[_elements] = null;
    this[_eventManagers] = JSArrayOf_EventManagerL().of([]);
    this[avatarHandler$] = avatarHandler;
    this[horizontalOnly$] = horizontalOnly;
    this[verticalOnly$] = verticalOnly;
    this[handle$] = handle;
    this[cancel$] = cancel;
    this[draggingClass$] = draggingClass;
    this[draggingClassBody$] = draggingClassBody;
    this[minDragStartDistance$] = minDragStartDistance;
    this[_elements] = ListLOfElementL().as(ListL().is(elementOrElementList) ? elementOrElementList : JSArrayOfElementL().of([ElementL().as(elementOrElementList)]));
    let jsWindow = js.JsObject.fromBrowserObject(html.window);
    if (dart.test(jsWindow.hasProperty("PointerEvent"))) {
      this[_eventManagers][$add](new dnd._PointerManager.new(this));
    } else {
      if (dart.test(html.TouchEvent.supported)) {
        this[_eventManagers][$add](new dnd._TouchManager.new(this));
      }
      this[_eventManagers][$add](new dnd._MouseManager.new(this));
    }
  }).prototype = dnd.Draggable.prototype;
  dart.addTypeTests(dnd.Draggable);
  dart.addTypeCaches(dnd.Draggable);
  dart.setMethodSignature(dnd.Draggable, () => ({
    __proto__: dart.getMethods(dnd.Draggable.__proto__),
    abort: dart.fnType(dart.void, []),
    [_handleDragStart]: dart.fnType(dart.void, [dart.legacy(html.UIEvent)]),
    [_handleDrag]: dart.fnType(dart.void, [dart.legacy(html.UIEvent), dart.legacy(html.EventTarget)]),
    [_handleDragEnd]: dart.fnType(dart.void, [dart.legacy(html.Event), dart.legacy(html.EventTarget)], {cancelled: dart.dynamic}, {}),
    [_suppressClickEvent]: dart.fnType(dart.void, [dart.legacy(html.Element)]),
    destroy: dart.fnType(dart.void, []),
    [_resetCurrentDrag]: dart.fnType(dart.void, []),
    [_clearTextSelections]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(dnd.Draggable, () => ({
    __proto__: dart.getGetters(dnd.Draggable.__proto__),
    clickSuppression: dart.dynamic,
    onDragStart: dart.legacy(async.Stream$(dart.legacy(dnd.DraggableEvent))),
    onDrag: dart.legacy(async.Stream$(dart.legacy(dnd.DraggableEvent))),
    onDragEnd: dart.legacy(async.Stream$(dart.legacy(dnd.DraggableEvent)))
  }));
  dart.setSetterSignature(dnd.Draggable, () => ({
    __proto__: dart.getSetters(dnd.Draggable.__proto__),
    clickSuppression: dart.legacy(core.int)
  }));
  dart.setLibraryUri(dnd.Draggable, L0);
  dart.setFieldSignature(dnd.Draggable, () => ({
    __proto__: dart.getFields(dnd.Draggable.__proto__),
    id: dart.finalFieldType(dart.legacy(core.int)),
    avatarHandler: dart.fieldType(dart.legacy(dnd.AvatarHandler)),
    horizontalOnly: dart.fieldType(dart.legacy(core.bool)),
    verticalOnly: dart.fieldType(dart.legacy(core.bool)),
    handle: dart.fieldType(dart.legacy(core.String)),
    cancel: dart.fieldType(dart.legacy(core.String)),
    draggingClass: dart.fieldType(dart.legacy(core.String)),
    draggingClassBody: dart.fieldType(dart.legacy(core.String)),
    minDragStartDistance: dart.fieldType(dart.legacy(core.int)),
    [_onDragStart]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(dnd.DraggableEvent)))),
    [_onDrag]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(dnd.DraggableEvent)))),
    [_onDragEnd]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(dnd.DraggableEvent)))),
    [_elements]: dart.fieldType(dart.legacy(core.List$(dart.legacy(html.Element)))),
    [_eventManagers]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(dnd._EventManager))))
  }));
  dart.defineLazy(dnd.Draggable, {
    /*dnd.Draggable.idCounter*/get idCounter() {
      return 0;
    },
    set idCounter(_) {}
  }, true);
  var draggableElement = dart.privateName(dnd, "DraggableEvent.draggableElement");
  var avatarHandler = dart.privateName(dnd, "DraggableEvent.avatarHandler");
  var originalEvent$ = dart.privateName(dnd, "DraggableEvent.originalEvent");
  var startPosition = dart.privateName(dnd, "DraggableEvent.startPosition");
  var position = dart.privateName(dnd, "DraggableEvent.position");
  var cancelled$ = dart.privateName(dnd, "DraggableEvent.cancelled");
  dnd.DraggableEvent = class DraggableEvent extends core.Object {
    get draggableElement() {
      return this[draggableElement];
    }
    set draggableElement(value) {
      super.draggableElement = value;
    }
    get avatarHandler() {
      return this[avatarHandler];
    }
    set avatarHandler(value) {
      super.avatarHandler = value;
    }
    get originalEvent() {
      return this[originalEvent$];
    }
    set originalEvent(value) {
      super.originalEvent = value;
    }
    get startPosition() {
      return this[startPosition];
    }
    set startPosition(value) {
      super.startPosition = value;
    }
    get position() {
      return this[position];
    }
    set position(value) {
      super.position = value;
    }
    get cancelled() {
      return this[cancelled$];
    }
    set cancelled(value) {
      super.cancelled = value;
    }
  };
  (dnd.DraggableEvent.__ = function(originalEvent, dragInfo, opts) {
    let cancelled = opts && 'cancelled' in opts ? opts.cancelled : false;
    this[originalEvent$] = originalEvent;
    this[cancelled$] = cancelled;
    this[draggableElement] = dragInfo.element;
    this[avatarHandler] = dragInfo.avatarHandler;
    this[startPosition] = dragInfo.startPosition;
    this[position] = dragInfo.position;
    ;
  }).prototype = dnd.DraggableEvent.prototype;
  dart.addTypeTests(dnd.DraggableEvent);
  dart.addTypeCaches(dnd.DraggableEvent);
  dart.setLibraryUri(dnd.DraggableEvent, L0);
  dart.setFieldSignature(dnd.DraggableEvent, () => ({
    __proto__: dart.getFields(dnd.DraggableEvent.__proto__),
    draggableElement: dart.finalFieldType(dart.legacy(html.Element)),
    avatarHandler: dart.finalFieldType(dart.legacy(dnd.AvatarHandler)),
    originalEvent: dart.finalFieldType(dart.legacy(html.Event)),
    startPosition: dart.finalFieldType(dart.legacy(math.Point$(core.num))),
    position: dart.finalFieldType(dart.legacy(math.Point$(core.num))),
    cancelled: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var _position = dart.privateName(dnd, "_position");
  var _constrainAxis = dart.privateName(dnd, "_constrainAxis");
  dnd._DragInfo = class _DragInfo extends core.Object {
    get position() {
      return this[_position];
    }
    set position(pos) {
      return this[_position] = this[_constrainAxis](pos);
    }
    [_constrainAxis](pos) {
      if (dart.test(this.horizontalOnly)) {
        return new (PointOfnumL()).new(pos.x, this.startPosition.y);
      }
      if (dart.test(this.verticalOnly)) {
        return new (PointOfnumL()).new(this.startPosition.x, pos.y);
      }
      return pos;
    }
  };
  (dnd._DragInfo.new = function(draggableId, element, startPosition, opts) {
    let avatarHandler = opts && 'avatarHandler' in opts ? opts.avatarHandler : null;
    let horizontalOnly = opts && 'horizontalOnly' in opts ? opts.horizontalOnly : false;
    let verticalOnly = opts && 'verticalOnly' in opts ? opts.verticalOnly : false;
    this[_position] = null;
    this.started = false;
    this.draggableId = draggableId;
    this.element = element;
    this.startPosition = startPosition;
    this.avatarHandler = avatarHandler;
    this.horizontalOnly = horizontalOnly;
    this.verticalOnly = verticalOnly;
    this[_position] = this.startPosition;
  }).prototype = dnd._DragInfo.prototype;
  dart.addTypeTests(dnd._DragInfo);
  dart.addTypeCaches(dnd._DragInfo);
  dart.setMethodSignature(dnd._DragInfo, () => ({
    __proto__: dart.getMethods(dnd._DragInfo.__proto__),
    [_constrainAxis]: dart.fnType(dart.legacy(math.Point$(core.num)), [dart.legacy(math.Point$(core.num))])
  }));
  dart.setGetterSignature(dnd._DragInfo, () => ({
    __proto__: dart.getGetters(dnd._DragInfo.__proto__),
    position: dart.legacy(math.Point$(core.num))
  }));
  dart.setSetterSignature(dnd._DragInfo, () => ({
    __proto__: dart.getSetters(dnd._DragInfo.__proto__),
    position: dart.legacy(math.Point$(core.num))
  }));
  dart.setLibraryUri(dnd._DragInfo, L0);
  dart.setFieldSignature(dnd._DragInfo, () => ({
    __proto__: dart.getFields(dnd._DragInfo.__proto__),
    draggableId: dart.finalFieldType(dart.legacy(core.int)),
    element: dart.finalFieldType(dart.legacy(html.Element)),
    startPosition: dart.finalFieldType(dart.legacy(math.Point$(core.num))),
    avatarHandler: dart.finalFieldType(dart.legacy(dnd.AvatarHandler)),
    [_position]: dart.fieldType(dart.legacy(math.Point$(core.num))),
    started: dart.fieldType(dart.legacy(core.bool)),
    horizontalOnly: dart.finalFieldType(dart.legacy(core.bool)),
    verticalOnly: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var _marginTop = dart.privateName(dnd, "_marginTop");
  var _marginLeft = dart.privateName(dnd, "_marginLeft");
  var _pointerEventsBeforeDrag = dart.privateName(dnd, "_pointerEventsBeforeDrag");
  var avatar = dart.privateName(dnd, "AvatarHandler.avatar");
  dnd.AvatarHandler = class AvatarHandler extends core.Object {
    get avatar() {
      return this[avatar];
    }
    set avatar(value) {
      this[avatar] = value;
    }
    get marginTop() {
      if (this[_marginTop] == null) {
        this.cacheMargins();
      }
      return this[_marginTop];
    }
    get marginLeft() {
      if (this[_marginLeft] == null) {
        this.cacheMargins();
      }
      return this[_marginLeft];
    }
    static original() {
      return new dnd.OriginalAvatarHandler.new();
    }
    static clone() {
      return new dnd.CloneAvatarHandler.new();
    }
    [_handleDragStart](draggable, startPosition) {
      this.dragStart(draggable, startPosition);
      this[_pointerEventsBeforeDrag] = this.avatar.style[$pointerEvents];
      this.avatar.style[$pointerEvents] = "none";
    }
    [_handleDrag](startPosition, position) {
      this.drag(startPosition, position);
    }
    [_handleDragEnd](startPosition, position) {
      this.dragEnd(startPosition, position);
      this.avatar.style[$pointerEvents] = this[_pointerEventsBeforeDrag];
      this[_pointerEventsBeforeDrag] = null;
      this.avatar = null;
      this[_marginTop] = null;
      this[_marginLeft] = null;
    }
    setTranslate(position) {
      dnd.AnimationHelper.requestUpdate(dart.fn(() => {
        if (this.avatar != null) {
          this.avatar.style[$transform] = "translate3d(" + dart.str(position.x) + "px, " + dart.str(position.y) + "px, 0)";
        }
      }, VoidToNullN()));
    }
    removeTranslate() {
      dnd.AnimationHelper.stop();
      this.avatar.style[$transform] = null;
    }
    setLeftTop(position) {
      this.avatar.style[$left] = dart.str(dart.notNull(position.x) - dart.notNull(this.marginLeft)) + "px";
      this.avatar.style[$top] = dart.str(dart.notNull(position.y) - dart.notNull(this.marginTop)) + "px";
    }
    cacheMargins() {
      let t1, t1$;
      let computedStyles = this.avatar[$getComputedStyle]();
      this[_marginLeft] = (t1 = core.num.tryParse(computedStyles[$marginLeft][$replaceFirst]("px", "")), t1 == null ? 0 : t1);
      this[_marginTop] = (t1$ = core.num.tryParse(computedStyles[$marginTop][$replaceFirst]("px", "")), t1$ == null ? 0 : t1$);
    }
  };
  (dnd.AvatarHandler.new = function() {
    this[avatar] = null;
    this[_marginTop] = null;
    this[_marginLeft] = null;
    this[_pointerEventsBeforeDrag] = null;
    ;
  }).prototype = dnd.AvatarHandler.prototype;
  dart.addTypeTests(dnd.AvatarHandler);
  dart.addTypeCaches(dnd.AvatarHandler);
  dart.setMethodSignature(dnd.AvatarHandler, () => ({
    __proto__: dart.getMethods(dnd.AvatarHandler.__proto__),
    [_handleDragStart]: dart.fnType(dart.void, [dart.legacy(html.Element), dart.legacy(math.Point$(core.num))]),
    [_handleDrag]: dart.fnType(dart.void, [dart.legacy(math.Point$(core.num)), dart.legacy(math.Point$(core.num))]),
    [_handleDragEnd]: dart.fnType(dart.void, [dart.legacy(math.Point$(core.num)), dart.legacy(math.Point$(core.num))]),
    setTranslate: dart.fnType(dart.void, [dart.legacy(math.Point$(core.num))]),
    removeTranslate: dart.fnType(dart.void, []),
    setLeftTop: dart.fnType(dart.void, [dart.legacy(math.Point$(core.num))]),
    cacheMargins: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(dnd.AvatarHandler, () => ({
    __proto__: dart.getGetters(dnd.AvatarHandler.__proto__),
    marginTop: dart.legacy(core.num),
    marginLeft: dart.legacy(core.num)
  }));
  dart.setLibraryUri(dnd.AvatarHandler, L0);
  dart.setFieldSignature(dnd.AvatarHandler, () => ({
    __proto__: dart.getFields(dnd.AvatarHandler.__proto__),
    avatar: dart.fieldType(dart.legacy(html.Element)),
    [_marginTop]: dart.fieldType(dart.legacy(core.num)),
    [_marginLeft]: dart.fieldType(dart.legacy(core.num)),
    [_pointerEventsBeforeDrag]: dart.fieldType(dart.legacy(core.String))
  }));
  var _draggableStartOffset = dart.privateName(dnd, "_draggableStartOffset");
  dnd.OriginalAvatarHandler = class OriginalAvatarHandler extends dnd.AvatarHandler {
    dragStart(draggable, startPosition) {
      this.avatar = draggable;
      this[_draggableStartOffset] = draggable[$offset][$topLeft];
      this.avatar.style[$position] = "absolute";
      this.setLeftTop(this[_draggableStartOffset]);
    }
    drag(startPosition, position) {
      this.setTranslate(position['-'](startPosition));
    }
    dragEnd(startPosition, position) {
      this.removeTranslate();
      let constrainedPosition = new (PointOfnumL()).new(math.max(numL(), 1, position.x), math.max(numL(), 1, position.y));
      this.setLeftTop(constrainedPosition['-'](startPosition)['+'](this[_draggableStartOffset]));
    }
  };
  (dnd.OriginalAvatarHandler.new = function() {
    this[_draggableStartOffset] = null;
    dnd.OriginalAvatarHandler.__proto__.new.call(this);
    ;
  }).prototype = dnd.OriginalAvatarHandler.prototype;
  dart.addTypeTests(dnd.OriginalAvatarHandler);
  dart.addTypeCaches(dnd.OriginalAvatarHandler);
  dart.setMethodSignature(dnd.OriginalAvatarHandler, () => ({
    __proto__: dart.getMethods(dnd.OriginalAvatarHandler.__proto__),
    dragStart: dart.fnType(dart.void, [dart.legacy(html.Element), dart.legacy(math.Point$(core.num))]),
    drag: dart.fnType(dart.void, [dart.legacy(math.Point$(core.num)), dart.legacy(math.Point$(core.num))]),
    dragEnd: dart.fnType(dart.void, [dart.legacy(math.Point$(core.num)), dart.legacy(math.Point$(core.num))])
  }));
  dart.setLibraryUri(dnd.OriginalAvatarHandler, L0);
  dart.setFieldSignature(dnd.OriginalAvatarHandler, () => ({
    __proto__: dart.getFields(dnd.OriginalAvatarHandler.__proto__),
    [_draggableStartOffset]: dart.fieldType(dart.legacy(math.Point$(core.num)))
  }));
  dnd.CloneAvatarHandler = class CloneAvatarHandler extends dnd.AvatarHandler {
    dragStart(draggable, startPosition) {
      let t1;
      this.avatar = (t1 = ElementL().as(draggable[$clone](true)), (() => {
        t1[$attributes][$remove]("id");
        t1.style[$cursor] = "inherit";
        return t1;
      })());
      this.avatar.style[$position] = "absolute";
      this.avatar.style[$zIndex] = "100";
      draggable.parentNode[$append](this.avatar);
      this.setLeftTop(draggable[$offset][$topLeft]);
    }
    drag(startPosition, position) {
      this.setTranslate(position['-'](startPosition));
    }
    dragEnd(startPosition, position) {
      this.avatar[$remove]();
    }
  };
  (dnd.CloneAvatarHandler.new = function() {
    dnd.CloneAvatarHandler.__proto__.new.call(this);
    ;
  }).prototype = dnd.CloneAvatarHandler.prototype;
  dart.addTypeTests(dnd.CloneAvatarHandler);
  dart.addTypeCaches(dnd.CloneAvatarHandler);
  dart.setMethodSignature(dnd.CloneAvatarHandler, () => ({
    __proto__: dart.getMethods(dnd.CloneAvatarHandler.__proto__),
    dragStart: dart.fnType(dart.void, [dart.legacy(html.Element), dart.legacy(math.Point$(core.num))]),
    drag: dart.fnType(dart.void, [dart.legacy(math.Point$(core.num)), dart.legacy(math.Point$(core.num))]),
    dragEnd: dart.fnType(dart.void, [dart.legacy(math.Point$(core.num)), dart.legacy(math.Point$(core.num))])
  }));
  dart.setLibraryUri(dnd.CloneAvatarHandler, L0);
  dnd.AnimationHelper = class AnimationHelper extends core.Object {
    static requestUpdate(updateFunction) {
      dnd.AnimationHelper._lastUpdateFunction = updateFunction;
      if (!dart.test(dnd.AnimationHelper._updating)) {
        html.window[$animationFrame].then(dart.void, dart.fn(_ => dnd.AnimationHelper._update(), numLTovoid()));
        dnd.AnimationHelper._updating = true;
      }
    }
    static stop() {
      dnd.AnimationHelper._updating = false;
    }
    static _update() {
      if (dart.test(dnd.AnimationHelper._updating)) {
        dart.dcall(dnd.AnimationHelper._lastUpdateFunction, []);
        dnd.AnimationHelper._updating = false;
      }
    }
  };
  (dnd.AnimationHelper.new = function() {
    ;
  }).prototype = dnd.AnimationHelper.prototype;
  dart.addTypeTests(dnd.AnimationHelper);
  dart.addTypeCaches(dnd.AnimationHelper);
  dart.setLibraryUri(dnd.AnimationHelper, L0);
  dart.defineLazy(dnd.AnimationHelper, {
    /*dnd.AnimationHelper._lastUpdateFunction*/get _lastUpdateFunction() {
      return null;
    },
    set _lastUpdateFunction(_) {},
    /*dnd.AnimationHelper._updating*/get _updating() {
      return false;
    },
    set _updating(_) {}
  }, true);
  dnd._DragEventDispatcher = class _DragEventDispatcher extends core.Object {
    static dispatchEnterOverLeave(draggable, target) {
      if (target == null) {
        return;
      }
      if (dart.equals(dnd._DragEventDispatcher.previousTarget, target)) {
        let dragOverEvent = html.MouseEvent.new("_customDragOver");
        target.dispatchEvent(dragOverEvent);
      } else {
        let dragEnterEvent = html.MouseEvent.new("_customDragEnter", {relatedTarget: dnd._DragEventDispatcher.previousTarget});
        target.dispatchEvent(dragEnterEvent);
        if (dnd._DragEventDispatcher.previousTarget != null) {
          let dragLeaveEvent = html.MouseEvent.new("_customDragLeave", {relatedTarget: target});
          dnd._DragEventDispatcher.previousTarget.dispatchEvent(dragLeaveEvent);
        }
        let dragOverEvent = html.MouseEvent.new("_customDragOver");
        target.dispatchEvent(dragOverEvent);
        dnd._DragEventDispatcher.previousTarget = target;
      }
    }
    static dispatchDrop(draggable, target) {
      if (target == null) {
        return;
      }
      let dropEvent = html.MouseEvent.new("_customDrop");
      target.dispatchEvent(dropEvent);
      dnd._DragEventDispatcher.reset();
    }
    static reset() {
      if (dnd._DragEventDispatcher.previousTarget != null) {
        let dragLeaveEvent = html.MouseEvent.new("_customDragLeave");
        dnd._DragEventDispatcher.previousTarget.dispatchEvent(dragLeaveEvent);
        dnd._DragEventDispatcher.previousTarget = null;
      }
    }
  };
  (dnd._DragEventDispatcher.new = function() {
    ;
  }).prototype = dnd._DragEventDispatcher.prototype;
  dart.addTypeTests(dnd._DragEventDispatcher);
  dart.addTypeCaches(dnd._DragEventDispatcher);
  dart.setLibraryUri(dnd._DragEventDispatcher, L0);
  dart.defineLazy(dnd._DragEventDispatcher, {
    /*dnd._DragEventDispatcher.CUSTOM_DRAG_ENTER*/get CUSTOM_DRAG_ENTER() {
      return "_customDragEnter";
    },
    /*dnd._DragEventDispatcher.CUSTOM_DRAG_OVER*/get CUSTOM_DRAG_OVER() {
      return "_customDragOver";
    },
    /*dnd._DragEventDispatcher.CUSTOM_DRAG_LEAVE*/get CUSTOM_DRAG_LEAVE() {
      return "_customDragLeave";
    },
    /*dnd._DragEventDispatcher.CUSTOM_DROP*/get CUSTOM_DROP() {
      return "_customDrop";
    },
    /*dnd._DragEventDispatcher.enterEvent*/get enterEvent() {
      return new (EventStreamProviderOfMouseEventL()).new("_customDragEnter");
    },
    set enterEvent(_) {},
    /*dnd._DragEventDispatcher.overEvent*/get overEvent() {
      return new (EventStreamProviderOfMouseEventL()).new("_customDragOver");
    },
    set overEvent(_) {},
    /*dnd._DragEventDispatcher.leaveEvent*/get leaveEvent() {
      return new (EventStreamProviderOfMouseEventL()).new("_customDragLeave");
    },
    set leaveEvent(_) {},
    /*dnd._DragEventDispatcher.dropEvent*/get dropEvent() {
      return new (EventStreamProviderOfMouseEventL()).new("_customDrop");
    },
    set dropEvent(_) {},
    /*dnd._DragEventDispatcher.previousTarget*/get previousTarget() {
      return null;
    },
    set previousTarget(_) {}
  }, true);
  var _getRealTarget = dart.privateName(dnd, "_getRealTarget");
  var _getRealTargetFromPoint = dart.privateName(dnd, "_getRealTargetFromPoint");
  var _recursiveShadowDomTarget = dart.privateName(dnd, "_recursiveShadowDomTarget");
  var _isValidDragStartTarget = dart.privateName(dnd, "_isValidDragStartTarget");
  dnd._EventManager = class _EventManager extends core.Object {
    installEscAndBlur() {
      this.dragSubs[$add](html.window[$onKeyDown].listen(dart.fn(keyboardEvent => {
        if (keyboardEvent.keyCode === 27) {
          this.handleCancel(keyboardEvent);
        }
      }, KeyboardEventLToNullN())));
      this.dragSubs[$add](html.window[$onBlur].listen(dart.fn(event => {
        this.handleCancel(event);
      }, EventLToNullN())));
    }
    handleStart(event, position) {
      dnd._currentDrag = new dnd._DragInfo.new(this.drg.id, ElementL().as(event[$currentTarget]), position, {avatarHandler: this.drg.avatarHandler, horizontalOnly: this.drg.horizontalOnly, verticalOnly: this.drg.verticalOnly});
      this.installMove();
      this.installEnd();
      this.installCancel();
      this.installEscAndBlur();
    }
    handleMove(event, position, clientPosition) {
      dnd._currentDrag.position = position;
      if (!dart.test(dnd._currentDrag.started)) {
        if (dart.notNull(dnd._currentDrag.startPosition.distanceTo(dnd._currentDrag.position)) >= dart.notNull(this.drg.minDragStartDistance)) {
          this.drg[_handleDragStart](UIEventL().as(event));
        }
      } else {
        let realTarget = ElementL().as(this[_getRealTarget](clientPosition));
        this.drg[_handleDrag](UIEventL().as(event), realTarget);
      }
    }
    handleEnd(event, target, position, clientPosition) {
      dnd._currentDrag.position = position;
      let realTarget = this[_getRealTarget](clientPosition, {target: target});
      this.drg[_handleDragEnd](event, realTarget);
    }
    handleCancel(event) {
      this.drg[_handleDragEnd](event, null, {cancelled: true});
    }
    reset() {
      this.dragSubs[$forEach](dart.fn(sub => sub.cancel(), StreamSubscriptionLToFutureLOfvoid()));
      this.dragSubs[$clear]();
    }
    destroy() {
      this.reset();
      this.startSubs[$forEach](dart.fn(sub => sub.cancel(), StreamSubscriptionLToFutureLOfvoid()));
      this.startSubs[$clear]();
      this.drg[_elements][$forEach](dart.fn(el => el.style[$touchAction] = null, ElementLToNullN()));
    }
    [_getRealTargetFromPoint](clientPosition) {
      let t1;
      t1 = html.document[$elementFromPoint](clientPosition.x[$round](), clientPosition.y[$round]());
      return t1 == null ? html.document.body : t1;
    }
    [_getRealTarget](clientPosition, opts) {
      let target = opts && 'target' in opts ? opts.target : null;
      if (target == null) {
        target = this[_getRealTargetFromPoint](clientPosition);
      }
      if (this.drg.avatarHandler != null && this.drg.avatarHandler.avatar != null && dart.test(this.drg.avatarHandler.avatar.contains(NodeN().as(target)))) {
        this.drg.avatarHandler.avatar.style[$visibility] = "hidden";
        target = this[_getRealTargetFromPoint](clientPosition);
        this.drg.avatarHandler.avatar.style[$visibility] = "visible";
      }
      target = this[_recursiveShadowDomTarget](clientPosition, target);
      return target;
    }
    [_recursiveShadowDomTarget](clientPosition, target) {
      if (ElementL().is(target) && target[$shadowRoot] != null && dart.test(target[$attributes][$containsKey]("dnd-retarget"))) {
        let newTarget = ElementL().as(target)[$shadowRoot].elementFromPoint(clientPosition.x[$round](), clientPosition.y[$round]());
        target = this[_recursiveShadowDomTarget](clientPosition, newTarget);
      }
      return target;
    }
    [_isValidDragStartTarget](target) {
      if (this.drg.cancel != null && ElementL().is(target) && dart.test(target[$matchesWithAncestors](this.drg.cancel))) {
        return false;
      }
      if (this.drg.handle != null) {
        if (ElementL().is(target)) {
          if (!dart.test(target[$matchesWithAncestors](this.drg.handle))) {
            return false;
          }
          if (this.drg[_elements][$firstWhere](dart.fn(el => el.contains(target), ElementLToboolL())) != null) {
            return true;
          }
        }
        return false;
      }
      return true;
    }
  };
  (dnd._EventManager.new = function(drg) {
    this.startSubs = JSArrayOfStreamSubscriptionL().of([]);
    this.dragSubs = JSArrayOfStreamSubscriptionL().of([]);
    this.drg = drg;
    this.installStart();
    if (dart.test(this.drg.horizontalOnly)) {
      this.drg[_elements][$forEach](dart.fn(el => el.style[$touchAction] = "pan-y", ElementLToStringL()));
    } else if (dart.test(this.drg.verticalOnly)) {
      this.drg[_elements][$forEach](dart.fn(el => el.style[$touchAction] = "pan-x", ElementLToStringL()));
    } else {
      this.drg[_elements][$forEach](dart.fn(el => el.style[$touchAction] = "none", ElementLToStringL()));
    }
  }).prototype = dnd._EventManager.prototype;
  dart.addTypeTests(dnd._EventManager);
  dart.addTypeCaches(dnd._EventManager);
  dart.setMethodSignature(dnd._EventManager, () => ({
    __proto__: dart.getMethods(dnd._EventManager.__proto__),
    installEscAndBlur: dart.fnType(dart.void, []),
    handleStart: dart.fnType(dart.void, [dart.legacy(html.Event), dart.legacy(math.Point$(core.num))]),
    handleMove: dart.fnType(dart.void, [dart.legacy(html.Event), dart.legacy(math.Point$(core.num)), dart.legacy(math.Point$(core.num))]),
    handleEnd: dart.fnType(dart.void, [dart.legacy(html.Event), dart.legacy(html.EventTarget), dart.legacy(math.Point$(core.num)), dart.legacy(math.Point$(core.num))]),
    handleCancel: dart.fnType(dart.void, [dart.legacy(html.Event)]),
    reset: dart.fnType(dart.void, []),
    destroy: dart.fnType(dart.void, []),
    [_getRealTargetFromPoint]: dart.fnType(dart.legacy(html.EventTarget), [dart.legacy(math.Point$(core.num))]),
    [_getRealTarget]: dart.fnType(dart.legacy(html.EventTarget), [dart.legacy(math.Point$(core.num))], {target: dart.legacy(html.EventTarget)}, {}),
    [_recursiveShadowDomTarget]: dart.fnType(dart.legacy(html.EventTarget), [dart.legacy(math.Point$(core.num)), dart.legacy(html.EventTarget)]),
    [_isValidDragStartTarget]: dart.fnType(dart.legacy(core.bool), [dart.legacy(html.EventTarget)])
  }));
  dart.setLibraryUri(dnd._EventManager, L0);
  dart.setFieldSignature(dnd._EventManager, () => ({
    __proto__: dart.getFields(dnd._EventManager.__proto__),
    startSubs: dart.fieldType(dart.legacy(core.List$(dart.legacy(async.StreamSubscription)))),
    dragSubs: dart.fieldType(dart.legacy(core.List$(dart.legacy(async.StreamSubscription)))),
    drg: dart.finalFieldType(dart.legacy(dnd.Draggable))
  }));
  dart.defineLazy(dnd._EventManager, {
    /*dnd._EventManager.SHADOW_DOM_RETARGET_ATTRIBUTE*/get SHADOW_DOM_RETARGET_ATTRIBUTE() {
      return "dnd-retarget";
    }
  }, true);
  dnd._TouchManager = class _TouchManager extends dnd._EventManager {
    installStart() {
      this.drg[_elements][$forEach](dart.fn(el => {
        this.startSubs[$add](el[$onTouchStart].listen(dart.fn(event => {
          if (dnd._currentDrag != null) {
            return;
          }
          if (dart.notNull(event.touches[$length]) > 1) {
            return;
          }
          if (!dart.test(this[_isValidDragStartTarget](event.touches[$_get](0)[$target]))) {
            return;
          }
          this.handleStart(event, event.touches[$_get](0)[$page]);
        }, TouchEventLToNullN())));
      }, ElementLToNullN()));
    }
    installMove() {
      this.dragSubs[$add](html.document[$onTouchMove].listen(dart.fn(event => {
        if (dart.notNull(event.touches[$length]) > 1) {
          this.handleCancel(event);
          return;
        }
        if (!dart.test(dnd._currentDrag.started) && dart.test(this.isScrolling(event.changedTouches[$_get](0)[$page]))) {
          this.handleCancel(event);
          return;
        }
        this.handleMove(event, event.changedTouches[$_get](0)[$page], event.changedTouches[$_get](0)[$client]);
        event.preventDefault();
      }, TouchEventLToNullN())));
    }
    installEnd() {
      this.dragSubs[$add](html.document[$onTouchEnd].listen(dart.fn(event => {
        this.handleEnd(event, null, event.changedTouches[$_get](0)[$page], event.changedTouches[$_get](0)[$client]);
      }, TouchEventLToNullN())));
    }
    installCancel() {
      this.dragSubs[$add](html.document[$onTouchCancel].listen(dart.fn(event => {
        this.handleCancel(event);
      }, TouchEventLToNullN())));
    }
    isScrolling(currentPosition) {
      let delta = currentPosition['-'](dnd._currentDrag.startPosition);
      if (dart.test(this.drg.horizontalOnly) && delta.y[$abs]() > delta.x[$abs]()) {
        return true;
      }
      if (dart.test(this.drg.verticalOnly) && delta.x[$abs]() > delta.y[$abs]()) {
        return true;
      }
      return false;
    }
  };
  (dnd._TouchManager.new = function(draggable) {
    dnd._TouchManager.__proto__.new.call(this, draggable);
    ;
  }).prototype = dnd._TouchManager.prototype;
  dart.addTypeTests(dnd._TouchManager);
  dart.addTypeCaches(dnd._TouchManager);
  dart.setMethodSignature(dnd._TouchManager, () => ({
    __proto__: dart.getMethods(dnd._TouchManager.__proto__),
    installStart: dart.fnType(dart.void, []),
    installMove: dart.fnType(dart.void, []),
    installEnd: dart.fnType(dart.void, []),
    installCancel: dart.fnType(dart.void, []),
    isScrolling: dart.fnType(dart.legacy(core.bool), [dart.legacy(math.Point$(core.num))])
  }));
  dart.setLibraryUri(dnd._TouchManager, L0);
  dnd._MouseManager = class _MouseManager extends dnd._EventManager {
    installStart() {
      this.drg[_elements][$forEach](dart.fn(el => {
        this.startSubs[$add](el[$onMouseDown].listen(dart.fn(event => {
          if (dnd._currentDrag != null) {
            return;
          }
          if (event.button !== 0) {
            return;
          }
          if (!dart.test(this[_isValidDragStartTarget](event[$target]))) {
            return;
          }
          let target = ElementL().as(event[$target]);
          if (!(SelectElementL().is(target) || InputElementL().is(target) || TextAreaElementL().is(target) || ButtonElementL().is(target) || OptionElementL().is(target))) {
            event.preventDefault();
          }
          this.handleStart(event, event[$page]);
        }, MouseEventLToNullN())));
      }, ElementLToNullN()));
    }
    installMove() {
      this.dragSubs[$add](html.document[$onMouseMove].listen(dart.fn(event => {
        this.handleMove(event, event[$page], event[$client]);
      }, MouseEventLToNullN())));
    }
    installEnd() {
      this.dragSubs[$add](html.document[$onMouseUp].listen(dart.fn(event => {
        this.handleEnd(event, event[$target], event[$page], event[$client]);
      }, MouseEventLToNullN())));
    }
    installCancel() {
    }
  };
  (dnd._MouseManager.new = function(draggable) {
    dnd._MouseManager.__proto__.new.call(this, draggable);
    ;
  }).prototype = dnd._MouseManager.prototype;
  dart.addTypeTests(dnd._MouseManager);
  dart.addTypeCaches(dnd._MouseManager);
  dart.setMethodSignature(dnd._MouseManager, () => ({
    __proto__: dart.getMethods(dnd._MouseManager.__proto__),
    installStart: dart.fnType(dart.void, []),
    installMove: dart.fnType(dart.void, []),
    installEnd: dart.fnType(dart.void, []),
    installCancel: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dnd._MouseManager, L0);
  dnd._PointerManager = class _PointerManager extends dnd._EventManager {
    installStart() {
      this.drg[_elements][$forEach](dart.fn(el => {
        this.startSubs[$add](el[$on]._get("pointerdown").listen(dart.fn(e => {
          let event = PointerEventL().as(e);
          if (dnd._currentDrag != null) {
            return;
          }
          if (event.button !== 0) {
            return;
          }
          if (!dart.test(this[_isValidDragStartTarget](event[$target]))) {
            return;
          }
          let target = ElementL().as(event[$target]);
          if (!(SelectElementL().is(target) || InputElementL().is(target) || TextAreaElementL().is(target) || ButtonElementL().is(target) || OptionElementL().is(target))) {
            event.preventDefault();
          }
          this.handleStart(event, event[$page]);
        }, EventLToNullN())));
      }, ElementLToNullN()));
    }
    installMove() {
      this.dragSubs[$add](html.document[$on]._get("pointermove").listen(dart.fn(e => {
        let event = PointerEventL().as(e);
        this.handleMove(event, event[$page], event[$client]);
      }, EventLToNullN())));
    }
    installEnd() {
      this.dragSubs[$add](html.document[$on]._get("pointerup").listen(dart.fn(e => {
        let event = PointerEventL().as(e);
        this.handleEnd(event, null, event[$page], event[$client]);
      }, EventLToNullN())));
    }
    installCancel() {
      this.dragSubs[$add](html.document[$on]._get("pointercancel").listen(dart.fn(event => {
        this.handleCancel(event);
      }, EventLToNullN())));
    }
  };
  (dnd._PointerManager.new = function(draggable) {
    dnd._PointerManager.__proto__.new.call(this, draggable);
    ;
  }).prototype = dnd._PointerManager.prototype;
  dart.addTypeTests(dnd._PointerManager);
  dart.addTypeCaches(dnd._PointerManager);
  dart.setMethodSignature(dnd._PointerManager, () => ({
    __proto__: dart.getMethods(dnd._PointerManager.__proto__),
    installStart: dart.fnType(dart.void, []),
    installMove: dart.fnType(dart.void, []),
    installEnd: dart.fnType(dart.void, []),
    installCancel: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(dnd._PointerManager, L0);
  var _onDragEnter = dart.privateName(dnd, "_onDragEnter");
  var _onDragOver = dart.privateName(dnd, "_onDragOver");
  var _onDragLeave = dart.privateName(dnd, "_onDragLeave");
  var _onDrop = dart.privateName(dnd, "_onDrop");
  var _subs = dart.privateName(dnd, "_subs");
  var _installCustomDragListener = dart.privateName(dnd, "_installCustomDragListener");
  var _handleDragEnter = dart.privateName(dnd, "_handleDragEnter");
  var _handleDragOver = dart.privateName(dnd, "_handleDragOver");
  var _handleDragLeave = dart.privateName(dnd, "_handleDragLeave");
  var _handleDrop = dart.privateName(dnd, "_handleDrop");
  var acceptor$ = dart.privateName(dnd, "Dropzone.acceptor");
  var overClass$ = dart.privateName(dnd, "Dropzone.overClass");
  var invalidClass$ = dart.privateName(dnd, "Dropzone.invalidClass");
  dnd.Dropzone = class Dropzone extends core.Object {
    get acceptor() {
      return this[acceptor$];
    }
    set acceptor(value) {
      this[acceptor$] = value;
    }
    get overClass() {
      return this[overClass$];
    }
    set overClass(value) {
      this[overClass$] = value;
    }
    get invalidClass() {
      return this[invalidClass$];
    }
    set invalidClass(value) {
      this[invalidClass$] = value;
    }
    get onDragEnter() {
      if (this[_onDragEnter] == null) {
        this[_onDragEnter] = StreamControllerOfDropzoneEventL().broadcast({sync: true, onCancel: dart.fn(() => this[_onDragEnter] = null, VoidToNullN())});
      }
      return this[_onDragEnter].stream;
    }
    get onDragOver() {
      if (this[_onDragOver] == null) {
        this[_onDragOver] = StreamControllerOfDropzoneEventL().broadcast({sync: true, onCancel: dart.fn(() => this[_onDragOver] = null, VoidToNullN())});
      }
      return this[_onDragOver].stream;
    }
    get onDragLeave() {
      if (this[_onDragLeave] == null) {
        this[_onDragLeave] = StreamControllerOfDropzoneEventL().broadcast({sync: true, onCancel: dart.fn(() => this[_onDragLeave] = null, VoidToNullN())});
      }
      return this[_onDragLeave].stream;
    }
    get onDrop() {
      if (this[_onDrop] == null) {
        this[_onDrop] = StreamControllerOfDropzoneEventL().broadcast({sync: true, onCancel: dart.fn(() => this[_onDrop] = null, VoidToNullN())});
      }
      return this[_onDrop].stream;
    }
    [_installCustomDragListener](element) {
      this[_subs][$add](dnd._DragEventDispatcher.enterEvent.forTarget(element).listen(dart.bind(this, _handleDragEnter)));
      this[_subs][$add](dnd._DragEventDispatcher.overEvent.forTarget(element).listen(dart.bind(this, _handleDragOver)));
      this[_subs][$add](dnd._DragEventDispatcher.leaveEvent.forTarget(element).listen(dart.bind(this, _handleDragLeave)));
      this[_subs][$add](dnd._DragEventDispatcher.dropEvent.forTarget(element).listen(dart.bind(this, _handleDrop)));
    }
    [_handleDragEnter](event) {
      if (event[$relatedTarget] != null && dart.test(ElementL().as(event[$currentTarget]).contains(NodeN().as(event[$relatedTarget])))) {
        return;
      }
      if (this.acceptor == null || dart.test(this.acceptor.accepts(dnd._currentDrag.element, dnd._currentDrag.draggableId, ElementL().as(event[$currentTarget])))) {
        if (this[_onDragEnter] != null) {
          this[_onDragEnter].add(new dnd.DropzoneEvent.__(ElementL().as(event[$currentTarget]), dnd._currentDrag));
        }
        if (this.overClass != null) {
          ElementL().as(event[$currentTarget])[$classes].add(this.overClass);
        }
      } else {
        if (this.invalidClass != null) {
          ElementL().as(event[$currentTarget])[$classes].add(this.invalidClass);
        }
      }
    }
    [_handleDragOver](event) {
      if (this.acceptor == null || dart.test(this.acceptor.accepts(dnd._currentDrag.element, dnd._currentDrag.draggableId, ElementL().as(event[$currentTarget])))) {
        if (this[_onDragOver] != null) {
          this[_onDragOver].add(new dnd.DropzoneEvent.__(ElementL().as(event[$currentTarget]), dnd._currentDrag));
        }
      }
    }
    [_handleDragLeave](event) {
      if (event[$relatedTarget] != null && dart.test(ElementL().as(event[$currentTarget]).contains(NodeN().as(event[$relatedTarget])))) {
        return;
      }
      if (this.acceptor == null || dart.test(this.acceptor.accepts(dnd._currentDrag.element, dnd._currentDrag.draggableId, ElementL().as(event[$currentTarget])))) {
        if (this[_onDragLeave] != null) {
          this[_onDragLeave].add(new dnd.DropzoneEvent.__(ElementL().as(event[$currentTarget]), dnd._currentDrag));
        }
        if (this.overClass != null) {
          ElementL().as(event[$currentTarget])[$classes].remove(this.overClass);
        }
      } else {
        if (this.invalidClass != null) {
          ElementL().as(event[$currentTarget])[$classes].remove(this.invalidClass);
        }
      }
    }
    [_handleDrop](event) {
      if (this.acceptor == null || dart.test(this.acceptor.accepts(dnd._currentDrag.element, dnd._currentDrag.draggableId, ElementL().as(event[$currentTarget])))) {
        if (this[_onDrop] != null) {
          this[_onDrop].add(new dnd.DropzoneEvent.__(ElementL().as(event[$currentTarget]), dnd._currentDrag));
        }
      }
    }
    destroy() {
      this[_subs][$forEach](dart.fn(sub => sub.cancel(), StreamSubscriptionLToFutureLOfvoid()));
      this[_subs][$clear]();
    }
  };
  (dnd.Dropzone.new = function(elementOrElementList, opts) {
    let acceptor = opts && 'acceptor' in opts ? opts.acceptor : null;
    let overClass = opts && 'overClass' in opts ? opts.overClass : "dnd-over";
    let invalidClass = opts && 'invalidClass' in opts ? opts.invalidClass : "dnd-invalid";
    this[_onDragEnter] = null;
    this[_onDragOver] = null;
    this[_onDragLeave] = null;
    this[_onDrop] = null;
    this[_elements] = null;
    this[_subs] = JSArrayOfStreamSubscriptionL().of([]);
    this[acceptor$] = acceptor;
    this[overClass$] = overClass;
    this[invalidClass$] = invalidClass;
    this[_elements] = ListLOfElementL().as(ListL().is(elementOrElementList) ? elementOrElementList : JSArrayOfElementL().of([ElementL().as(elementOrElementList)]));
    this[_elements][$forEach](dart.bind(this, _installCustomDragListener));
  }).prototype = dnd.Dropzone.prototype;
  dart.addTypeTests(dnd.Dropzone);
  dart.addTypeCaches(dnd.Dropzone);
  dart.setMethodSignature(dnd.Dropzone, () => ({
    __proto__: dart.getMethods(dnd.Dropzone.__proto__),
    [_installCustomDragListener]: dart.fnType(dart.void, [dart.legacy(html.Element)]),
    [_handleDragEnter]: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)]),
    [_handleDragOver]: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)]),
    [_handleDragLeave]: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)]),
    [_handleDrop]: dart.fnType(dart.void, [dart.legacy(html.MouseEvent)]),
    destroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(dnd.Dropzone, () => ({
    __proto__: dart.getGetters(dnd.Dropzone.__proto__),
    onDragEnter: dart.legacy(async.Stream$(dart.legacy(dnd.DropzoneEvent))),
    onDragOver: dart.legacy(async.Stream$(dart.legacy(dnd.DropzoneEvent))),
    onDragLeave: dart.legacy(async.Stream$(dart.legacy(dnd.DropzoneEvent))),
    onDrop: dart.legacy(async.Stream$(dart.legacy(dnd.DropzoneEvent)))
  }));
  dart.setLibraryUri(dnd.Dropzone, L0);
  dart.setFieldSignature(dnd.Dropzone, () => ({
    __proto__: dart.getFields(dnd.Dropzone.__proto__),
    acceptor: dart.fieldType(dart.legacy(dnd.Acceptor)),
    overClass: dart.fieldType(dart.legacy(core.String)),
    invalidClass: dart.fieldType(dart.legacy(core.String)),
    [_onDragEnter]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(dnd.DropzoneEvent)))),
    [_onDragOver]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(dnd.DropzoneEvent)))),
    [_onDragLeave]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(dnd.DropzoneEvent)))),
    [_onDrop]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(dnd.DropzoneEvent)))),
    [_elements]: dart.fieldType(dart.legacy(core.List$(dart.legacy(html.Element)))),
    [_subs]: dart.fieldType(dart.legacy(core.List$(dart.legacy(async.StreamSubscription))))
  }));
  var dropzoneElement$ = dart.privateName(dnd, "DropzoneEvent.dropzoneElement");
  var draggableElement$ = dart.privateName(dnd, "DropzoneEvent.draggableElement");
  var avatarHandler$0 = dart.privateName(dnd, "DropzoneEvent.avatarHandler");
  var position$ = dart.privateName(dnd, "DropzoneEvent.position");
  dnd.DropzoneEvent = class DropzoneEvent extends core.Object {
    get dropzoneElement() {
      return this[dropzoneElement$];
    }
    set dropzoneElement(value) {
      super.dropzoneElement = value;
    }
    get draggableElement() {
      return this[draggableElement$];
    }
    set draggableElement(value) {
      super.draggableElement = value;
    }
    get avatarHandler() {
      return this[avatarHandler$0];
    }
    set avatarHandler(value) {
      super.avatarHandler = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
  };
  (dnd.DropzoneEvent.__ = function(dropzoneElement, dragInfo) {
    this[dropzoneElement$] = dropzoneElement;
    this[draggableElement$] = dragInfo.element;
    this[avatarHandler$0] = dragInfo.avatarHandler;
    this[position$] = dragInfo.position;
    ;
  }).prototype = dnd.DropzoneEvent.prototype;
  dart.addTypeTests(dnd.DropzoneEvent);
  dart.addTypeCaches(dnd.DropzoneEvent);
  dart.setLibraryUri(dnd.DropzoneEvent, L0);
  dart.setFieldSignature(dnd.DropzoneEvent, () => ({
    __proto__: dart.getFields(dnd.DropzoneEvent.__proto__),
    dropzoneElement: dart.finalFieldType(dart.legacy(html.Element)),
    draggableElement: dart.finalFieldType(dart.legacy(html.Element)),
    avatarHandler: dart.finalFieldType(dart.legacy(dnd.AvatarHandler)),
    position: dart.finalFieldType(dart.legacy(math.Point$(core.num)))
  }));
  dnd.Acceptor = class Acceptor extends core.Object {
    static draggables(draggables) {
      return new dnd.DraggablesAcceptor.new(draggables);
    }
  };
  (dnd.Acceptor.new = function() {
    ;
  }).prototype = dnd.Acceptor.prototype;
  dart.addTypeTests(dnd.Acceptor);
  dart.addTypeCaches(dnd.Acceptor);
  dart.setLibraryUri(dnd.Acceptor, L0);
  var draggableIds = dart.privateName(dnd, "DraggablesAcceptor.draggableIds");
  dnd.DraggablesAcceptor = class DraggablesAcceptor extends dnd.Acceptor {
    get draggableIds() {
      return this[draggableIds];
    }
    set draggableIds(value) {
      super.draggableIds = value;
    }
    accepts(draggableElement, draggableId, dropzoneElement) {
      return this.draggableIds.contains(draggableId);
    }
  };
  (dnd.DraggablesAcceptor.new = function(draggables) {
    this[draggableIds] = new (_IdentityHashSetOfintL()).new();
    dnd.DraggablesAcceptor.__proto__.new.call(this);
    draggables[$forEach](dart.fn(d => this.draggableIds.add(d.id), DraggableLToboolL()));
  }).prototype = dnd.DraggablesAcceptor.prototype;
  dart.addTypeTests(dnd.DraggablesAcceptor);
  dart.addTypeCaches(dnd.DraggablesAcceptor);
  dart.setMethodSignature(dnd.DraggablesAcceptor, () => ({
    __proto__: dart.getMethods(dnd.DraggablesAcceptor.__proto__),
    accepts: dart.fnType(dart.legacy(core.bool), [dart.legacy(html.Element), dart.legacy(core.int), dart.legacy(html.Element)])
  }));
  dart.setLibraryUri(dnd.DraggablesAcceptor, L0);
  dart.setFieldSignature(dnd.DraggablesAcceptor, () => ({
    __proto__: dart.getFields(dnd.DraggablesAcceptor.__proto__),
    draggableIds: dart.finalFieldType(dart.legacy(core.Set$(dart.legacy(core.int))))
  }));
  dart.defineLazy(dnd, {
    /*dnd._currentDrag*/get _currentDrag() {
      return null;
    },
    set _currentDrag(_) {}
  }, true);
  dart.trackLibraries("packages/dnd/dnd", {
    "package:dnd/dnd.dart": dnd
  }, {
    "package:dnd/dnd.dart": ["src/draggable.dart", "src/draggable_avatar.dart", "src/draggable_dispatch.dart", "src/draggable_manager.dart", "src/dropzone.dart", "src/dropzone_acceptor.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/draggable.dart","src/draggable_avatar.dart","src/draggable_dispatch.dart","src/draggable_manager.dart","src/dropzone.dart","src/dropzone_acceptor.dart"],"names":[],"mappings":"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","file":"dnd.ddc.js"}');
  // Exports:
  return {
    dnd: dnd
  };
}));

//# sourceMappingURL=dnd.ddc.js.map
