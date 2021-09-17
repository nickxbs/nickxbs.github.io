define(['dart_sdk', 'packages/googleapis_auth/auth', 'packages/googleapis_auth/src/crypto/asn1', 'packages/http/src/base_client'], (function load__packages__googleapis_auth__auth_browser(dart_sdk, packages__googleapis_auth__auth, packages__googleapis_auth__src__crypto__asn1, packages__http__src__base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const auth = packages__googleapis_auth__auth.auth;
  const auth_http_utils = packages__googleapis_auth__auth.src__auth_http_utils;
  const utils = packages__googleapis_auth__src__crypto__asn1.src__utils;
  const http_client_base = packages__googleapis_auth__src__crypto__asn1.src__http_client_base;
  const streamed_response = packages__http__src__base_client.src__streamed_response;
  const base_request = packages__http__src__base_client.src__base_request;
  const client = packages__http__src__base_client.src__client;
  const browser_client = packages__http__src__base_client.src__browser_client;
  var implicit = Object.create(dart.library);
  var auth_browser = Object.create(dart.library);
  var $onError = dartx.onError;
  var $append = dartx.append;
  var $isNotEmpty = dartx.isNotEmpty;
  var $map = dartx.map;
  var $join = dartx.join;
  var $_set = dartx._set;
  var $contains = dartx.contains;
  var $document = dartx.document;
  var $querySelectorAll = dartx.querySelectorAll;
  var $attributes = dartx.attributes;
  var $_get = dartx._get;
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var VoidToLNullN = () => (VoidToLNullN = dart.constFn(dart.legacy(VoidToNullN())))();
  var JSArrayOfVoidToLNullN = () => (JSArrayOfVoidToLNullN = dart.constFn(_interceptors.JSArray$(VoidToLNullN())))();
  var NoSuchMethodErrorL = () => (NoSuchMethodErrorL = dart.constFn(dart.legacy(core.NoSuchMethodError)))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var EventLToNullN = () => (EventLToNullN = dart.constFn(dart.fnType(core.Null, [EventL()])))();
  var AccessCredentialsL = () => (AccessCredentialsL = dart.constFn(dart.legacy(auth.AccessCredentials)))();
  var LoginResultL = () => (LoginResultL = dart.constFn(dart.legacy(implicit.LoginResult)))();
  var CompleterOfLoginResultL = () => (CompleterOfLoginResultL = dart.constFn(async.Completer$(LoginResultL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ResponseTypeL = () => (ResponseTypeL = dart.constFn(dart.legacy(auth.ResponseType)))();
  var ResponseTypeLToStringL = () => (ResponseTypeLToStringL = dart.constFn(dart.fnType(StringL(), [ResponseTypeL()])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var ElementL = () => (ElementL = dart.constFn(dart.legacy(html.Element)))();
  var HtmlElementL = () => (HtmlElementL = dart.constFn(dart.legacy(html.HtmlElement)))();
  var ScriptElementL = () => (ScriptElementL = dart.constFn(dart.legacy(html.ScriptElement)))();
  var VoidToScriptElementL = () => (VoidToScriptElementL = dart.constFn(dart.fnType(ScriptElementL(), [])))();
  var VoidToLScriptElementL = () => (VoidToLScriptElementL = dart.constFn(dart.legacy(VoidToScriptElementL())))();
  var VoidToFn = () => (VoidToFn = dart.constFn(dart.fnType(VoidToLScriptElementL(), [])))();
  var AutoRefreshingAuthClientL = () => (AutoRefreshingAuthClientL = dart.constFn(dart.legacy(auth.AutoRefreshingAuthClient)))();
  var HybridFlowResultL = () => (HybridFlowResultL = dart.constFn(dart.legacy(auth_browser.HybridFlowResult)))();
  var StreamedResponseL = () => (StreamedResponseL = dart.constFn(dart.legacy(streamed_response.StreamedResponse)))();
  var FutureOfStreamedResponseL = () => (FutureOfStreamedResponseL = dart.constFn(async.Future$(StreamedResponseL())))();
  var FutureLOfStreamedResponseL = () => (FutureLOfStreamedResponseL = dart.constFn(dart.legacy(FutureOfStreamedResponseL())))();
  var AccessCredentialsLToFutureLOfStreamedResponseL = () => (AccessCredentialsLToFutureLOfStreamedResponseL = dart.constFn(dart.fnType(FutureLOfStreamedResponseL(), [AccessCredentialsL()])))();
  var StackTraceN = () => (StackTraceN = dart.constFn(dart.nullable(core.StackTrace)))();
  var FutureL = () => (FutureL = dart.constFn(dart.legacy(async.Future)))();
  var dynamicAnddynamicToFutureL = () => (dynamicAnddynamicToFutureL = dart.constFn(dart.fnType(FutureL(), [dart.dynamic, dart.dynamic])))();
  var BrowserOAuth2FlowL = () => (BrowserOAuth2FlowL = dart.constFn(dart.legacy(auth_browser.BrowserOAuth2Flow)))();
  var RefCountedClientL = () => (RefCountedClientL = dart.constFn(dart.legacy(http_client_base.RefCountedClient)))();
  var voidToBrowserOAuth2FlowL = () => (voidToBrowserOAuth2FlowL = dart.constFn(dart.fnType(BrowserOAuth2FlowL(), [dart.void])))();
  const CT = Object.create(null);
  var L1 = "package:googleapis_auth/src/oauth2_flows/implicit.dart";
  var L0 = "file:///C:/Users/nicol/AppData/Local/Temp/scratch_space31d894d0/packages/googleapis_auth/src/oauth2_flows/implicit.dart";
  var L2 = "package:googleapis_auth/auth_browser.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 20000000
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: auth.ResponseType.prototype,
        [_name]: "ResponseType.code",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: auth.ResponseType.prototype,
        [_name]: "ResponseType.idToken",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: auth.ResponseType.prototype,
        [_name]: "ResponseType.permission",
        index: 2
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: auth.ResponseType.prototype,
        [_name]: "ResponseType.token",
        index: 3
      });
    }
  }, false);
  var _clientId$ = dart.privateName(implicit, "_clientId");
  var _scopes$ = dart.privateName(implicit, "_scopes");
  var _login = dart.privateName(implicit, "_login");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  implicit.ImplicitFlow = class ImplicitFlow extends core.Object {
    initialize() {
      if (implicit.ImplicitFlow._pendingInitialization != null) {
        return implicit.ImplicitFlow._pendingInitialization;
      }
      let completer = async.Completer.new();
      let timeout = async.Timer.new(implicit.ImplicitFlow.CallbackTimeout, dart.fn(() => {
        implicit.ImplicitFlow._pendingInitialization = null;
        completer.completeError(core.Exception.new("Timed out while waiting for the gapi.auth library to load."));
      }, VoidToNullN()));
      js.context._set("dartGapiLoaded", dart.fn(() => {
        timeout.cancel();
        try {
          let gapi = dart.dsend(js.context._get("gapi"), '_get', ["auth"]);
          try {
            dart.dsend(gapi, 'callMethod', ["init", JSArrayOfVoidToLNullN().of([dart.fn(() => {
                  completer.complete();
                }, VoidToNullN())])]);
          } catch (e) {
            let ex = dart.getThrown(e);
            if (NoSuchMethodErrorL().is(ex)) {
              dart.throw(new core.StateError.new("gapi.auth not loaded."));
            } else
              throw e;
          }
        } catch (e$) {
          let error = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          implicit.ImplicitFlow._pendingInitialization = null;
          if (!dart.test(completer.isCompleted)) {
            completer.completeError(error, stack);
          }
        }
      }, VoidToNullN()));
      let script = implicit._createScript();
      script.src = dart.str(implicit.gapiUrl) + "?onload=dartGapiLoaded";
      script[$onError].first.then(core.Null, dart.fn(errorEvent => {
        timeout.cancel();
        implicit.ImplicitFlow._pendingInitialization = null;
        if (!dart.test(completer.isCompleted)) {
          completer.completeError(core.Exception.new("Failed to load gapi library."));
        }
      }, EventLToNullN()));
      html.document.body[$append](script);
      implicit.ImplicitFlow._pendingInitialization = completer.future;
      return completer.future;
    }
    loginHybrid(opts) {
      let force = opts && 'force' in opts ? opts.force : false;
      let immediate = opts && 'immediate' in opts ? opts.immediate : false;
      let loginHint = opts && 'loginHint' in opts ? opts.loginHint : null;
      return this[_login](force, immediate, true, loginHint, null);
    }
    login(opts) {
      let force = opts && 'force' in opts ? opts.force : false;
      let immediate = opts && 'immediate' in opts ? opts.immediate : false;
      let loginHint = opts && 'loginHint' in opts ? opts.loginHint : null;
      let responseTypes = opts && 'responseTypes' in opts ? opts.responseTypes : null;
      return async.async(AccessCredentialsL(), (function* login() {
        return (yield this[_login](force, immediate, false, loginHint, responseTypes)).credential;
      }).bind(this));
    }
    [_login](force, immediate, hybrid, loginHint, responseTypes) {
      let t3, t3$;
      if (!(!dart.equals(hybrid, true) || !dart.equals((t3 = responseTypes, t3 == null ? null : t3[$isNotEmpty]), true))) dart.assertFailed(null, L0, 130, 12, "hybrid != true || responseTypes?.isNotEmpty != true");
      let completer = CompleterOfLoginResultL().new();
      let gapi = dart.dsend(js.context._get("gapi"), '_get', ["auth"]);
      let json = new (IdentityMapOfStringL$ObjectL()).from(["client_id", this[_clientId$], "immediate", immediate, "approval_prompt", dart.test(force) ? "force" : "auto", "response_type", dart.equals((t3$ = responseTypes, t3$ == null ? null : t3$[$isNotEmpty]), true) ? responseTypes[$map](StringL(), dart.fn(responseType => implicit._responseTypeToString(responseType), ResponseTypeLToStringL()))[$join](" ") : dart.test(hybrid) ? "code token" : "token", "scope", this[_scopes$][$join](" "), "access_type", dart.test(hybrid) ? "offline" : "online"]);
      if (loginHint != null) {
        json[$_set]("login_hint", loginHint);
      }
      dart.dsend(gapi, 'callMethod', ["authorize", JSArrayOfObjectL().of([js.JsObject.jsify(json), dart.fn(jsTokenObject => {
            let t3, t3$;
            let tokenType = dart.dsend(jsTokenObject, '_get', ["token_type"]);
            let token = dart.dsend(jsTokenObject, '_get', ["access_token"]);
            let expiresInRaw = dart.dsend(jsTokenObject, '_get', ["expires_in"]);
            let code = dart.dsend(jsTokenObject, '_get', ["code"]);
            let error = dart.dsend(jsTokenObject, '_get', ["error"]);
            let idToken = dart.dsend(jsTokenObject, '_get', ["id_token"]);
            let expiresIn = null;
            if (StringL().is(expiresInRaw)) {
              expiresIn = core.int.parse(expiresInRaw);
            }
            if (error != null) {
              completer.completeError(new auth.UserConsentException.new("Failed to get user consent: " + dart.str(error) + "."));
            } else if (token == null || !intL().is(expiresIn) || !dart.equals(tokenType, "Bearer")) {
              completer.completeError(core.Exception.new("Failed to obtain user consent. Invalid server response."));
            } else if (dart.equals((t3 = responseTypes, t3 == null ? null : t3[$contains](auth.ResponseType.idToken)), true) && !dart.equals((t3$ = idToken, t3$ == null ? null : dart.dload(t3$, 'isNotEmpty')), true)) {
              completer.completeError(core.Exception.new("Expected to get id_token, but did not."));
            } else {
              let accessToken = new auth.AccessToken.new("Bearer", StringL().as(token), utils.expiryDate(intL().as(expiresIn)));
              let credentials = new auth.AccessCredentials.new(accessToken, null, this[_scopes$], {idToken: StringL().as(idToken)});
              if (dart.test(hybrid)) {
                if (code == null) {
                  completer.completeError(core.Exception.new("Expected to get auth code " + "from server in hybrid flow, but did not."));
                  return;
                }
                completer.complete(new implicit.LoginResult.new(credentials, {code: StringL().as(code)}));
              } else {
                completer.complete(new implicit.LoginResult.new(credentials));
              }
            }
          }, dynamicToNullN())])]);
      return completer.future;
    }
  };
  (implicit.ImplicitFlow.new = function(_clientId, _scopes) {
    this[_clientId$] = _clientId;
    this[_scopes$] = _scopes;
    ;
  }).prototype = implicit.ImplicitFlow.prototype;
  dart.addTypeTests(implicit.ImplicitFlow);
  dart.addTypeCaches(implicit.ImplicitFlow);
  dart.setMethodSignature(implicit.ImplicitFlow, () => ({
    __proto__: dart.getMethods(implicit.ImplicitFlow.__proto__),
    initialize: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    loginHybrid: dart.fnType(dart.legacy(async.Future$(dart.legacy(implicit.LoginResult))), [], {force: dart.legacy(core.bool), immediate: dart.legacy(core.bool), loginHint: dart.legacy(core.String)}, {}),
    login: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth.AccessCredentials))), [], {force: dart.legacy(core.bool), immediate: dart.legacy(core.bool), loginHint: dart.legacy(core.String), responseTypes: dart.legacy(core.List$(dart.legacy(auth.ResponseType)))}, {}),
    [_login]: dart.fnType(dart.legacy(async.Future$(dart.legacy(implicit.LoginResult))), [dart.legacy(core.bool), dart.legacy(core.bool), dart.legacy(core.bool), dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(auth.ResponseType)))])
  }));
  dart.setLibraryUri(implicit.ImplicitFlow, L1);
  dart.setFieldSignature(implicit.ImplicitFlow, () => ({
    __proto__: dart.getFields(implicit.ImplicitFlow.__proto__),
    [_clientId$]: dart.finalFieldType(dart.legacy(core.String)),
    [_scopes$]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String))))
  }));
  dart.defineLazy(implicit.ImplicitFlow, {
    /*implicit.ImplicitFlow.CallbackTimeout*/get CallbackTimeout() {
      return C0 || CT.C0;
    },
    /*implicit.ImplicitFlow._pendingInitialization*/get _pendingInitialization() {
      return null;
    },
    set _pendingInitialization(_) {}
  }, true);
  var credential$ = dart.privateName(implicit, "LoginResult.credential");
  var code$ = dart.privateName(implicit, "LoginResult.code");
  implicit.LoginResult = class LoginResult extends core.Object {
    get credential() {
      return this[credential$];
    }
    set credential(value) {
      super.credential = value;
    }
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
  };
  (implicit.LoginResult.new = function(credential, opts) {
    let code = opts && 'code' in opts ? opts.code : null;
    this[credential$] = credential;
    this[code$] = code;
    ;
  }).prototype = implicit.LoginResult.prototype;
  dart.addTypeTests(implicit.LoginResult);
  dart.addTypeCaches(implicit.LoginResult);
  dart.setLibraryUri(implicit.LoginResult, L1);
  dart.setFieldSignature(implicit.LoginResult, () => ({
    __proto__: dart.getFields(implicit.LoginResult.__proto__),
    credential: dart.finalFieldType(dart.legacy(auth.AccessCredentials)),
    code: dart.finalFieldType(dart.legacy(core.String))
  }));
  var _name = dart.privateName(auth, "_name");
  var C1;
  var C2;
  var C3;
  var C4;
  implicit._responseTypeToString = function _responseTypeToString(responseType) {
    let result = null;
    switch (responseType) {
      case C1 || CT.C1:
      {
        result = "code";
        break;
      }
      case C2 || CT.C2:
      {
        result = "id_token";
        break;
      }
      case C3 || CT.C3:
      {
        result = "permission";
        break;
      }
      case C4 || CT.C4:
      {
        result = "token";
        break;
      }
      default:
      {
        dart.throw(new core.ArgumentError.new("Unknown response type: " + dart.str(responseType)));
      }
    }
    return result;
  };
  implicit._getNonce = function _getNonce(opts) {
    let t3, t3$;
    let window = opts && 'window' in opts ? opts.window : null;
    let currentWindow = (t3 = window, t3 == null ? html.window : t3);
    let elements = currentWindow[$document][$querySelectorAll](ElementL(), "script");
    for (let element of elements) {
      let nonceValue = (t3$ = HtmlElementL().as(element).nonce, t3$ == null ? element[$attributes][$_get]("nonce") : t3$);
      if (nonceValue != null && dart.test(implicit._noncePattern.hasMatch(nonceValue))) {
        return nonceValue;
      }
    }
    return null;
  };
  dart.defineLazy(implicit, {
    /*implicit.gapiUrl*/get gapiUrl() {
      return "https://apis.google.com/js/client.js";
    },
    set gapiUrl(_) {},
    /*implicit._noncePattern*/get _noncePattern() {
      return core.RegExp.new("^[\\w+/_-]+[=]{0,2}$");
    },
    /*implicit._createScript*/get _createScript() {
      return dart.fn(() => {
        let nonce = implicit._getNonce();
        if (nonce == null) return dart.fn(() => html.ScriptElement.new(), VoidToScriptElementL());
        return dart.fn(() => {
          let t3;
          t3 = html.ScriptElement.new();
          return (() => {
            t3.nonce = nonce;
            return t3;
          })();
        }, VoidToScriptElementL());
      }, VoidToFn())();
    }
  }, true);
  var _wasClosed = dart.privateName(auth_browser, "_wasClosed");
  var _flow$ = dart.privateName(auth_browser, "_flow");
  var _client$ = dart.privateName(auth_browser, "_client");
  var _ensureOpen = dart.privateName(auth_browser, "_ensureOpen");
  var _clientFromCredentials = dart.privateName(auth_browser, "_clientFromCredentials");
  auth_browser.BrowserOAuth2Flow = class BrowserOAuth2Flow extends core.Object {
    obtainAccessCredentialsViaUserConsent(opts) {
      let immediate = opts && 'immediate' in opts ? opts.immediate : false;
      let force = opts && 'force' in opts ? opts.force : false;
      let loginHint = opts && 'loginHint' in opts ? opts.loginHint : null;
      let responseTypes = opts && 'responseTypes' in opts ? opts.responseTypes : null;
      this[_ensureOpen]();
      return this[_flow$].login({force: force, immediate: immediate, loginHint: loginHint, responseTypes: responseTypes});
    }
    clientViaUserConsent(opts) {
      let immediate = opts && 'immediate' in opts ? opts.immediate : false;
      let loginHint = opts && 'loginHint' in opts ? opts.loginHint : null;
      return this.obtainAccessCredentialsViaUserConsent({immediate: immediate, loginHint: loginHint}).then(AutoRefreshingAuthClientL(), dart.bind(this, _clientFromCredentials));
    }
    runHybridFlow(opts) {
      let force = opts && 'force' in opts ? opts.force : true;
      let immediate = opts && 'immediate' in opts ? opts.immediate : false;
      let loginHint = opts && 'loginHint' in opts ? opts.loginHint : null;
      return async.async(HybridFlowResultL(), (function* runHybridFlow() {
        this[_ensureOpen]();
        let result = (yield this[_flow$].loginHybrid({force: force, immediate: immediate, loginHint: loginHint}));
        return new auth_browser.HybridFlowResult.new(this, result.credential, result.code);
      }).bind(this));
    }
    close() {
      this[_ensureOpen]();
      this[_wasClosed] = true;
      this[_client$].close();
    }
    [_ensureOpen]() {
      if (dart.test(this[_wasClosed])) {
        dart.throw(new core.StateError.new("BrowserOAuth2Flow has already been closed."));
      }
    }
    [_clientFromCredentials](cred) {
      this[_ensureOpen]();
      this[_client$].acquire();
      return new auth_browser._AutoRefreshingBrowserClient.new(this[_client$], cred, this[_flow$]);
    }
  };
  (auth_browser.BrowserOAuth2Flow.__ = function(_flow, _client) {
    this[_wasClosed] = false;
    this[_flow$] = _flow;
    this[_client$] = _client;
    ;
  }).prototype = auth_browser.BrowserOAuth2Flow.prototype;
  dart.addTypeTests(auth_browser.BrowserOAuth2Flow);
  dart.addTypeCaches(auth_browser.BrowserOAuth2Flow);
  dart.setMethodSignature(auth_browser.BrowserOAuth2Flow, () => ({
    __proto__: dart.getMethods(auth_browser.BrowserOAuth2Flow.__proto__),
    obtainAccessCredentialsViaUserConsent: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth.AccessCredentials))), [], {force: dart.legacy(core.bool), immediate: dart.legacy(core.bool), loginHint: dart.legacy(core.String), responseTypes: dart.legacy(core.List$(dart.legacy(auth.ResponseType)))}, {}),
    clientViaUserConsent: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth.AutoRefreshingAuthClient))), [], {immediate: dart.legacy(core.bool), loginHint: dart.legacy(core.String)}, {}),
    runHybridFlow: dart.fnType(dart.legacy(async.Future$(dart.legacy(auth_browser.HybridFlowResult))), [], {force: dart.legacy(core.bool), immediate: dart.legacy(core.bool), loginHint: dart.legacy(core.String)}, {}),
    close: dart.fnType(dart.void, []),
    [_ensureOpen]: dart.fnType(dart.void, []),
    [_clientFromCredentials]: dart.fnType(dart.legacy(auth.AutoRefreshingAuthClient), [dart.legacy(auth.AccessCredentials)])
  }));
  dart.setLibraryUri(auth_browser.BrowserOAuth2Flow, L2);
  dart.setFieldSignature(auth_browser.BrowserOAuth2Flow, () => ({
    __proto__: dart.getFields(auth_browser.BrowserOAuth2Flow.__proto__),
    [_flow$]: dart.finalFieldType(dart.legacy(implicit.ImplicitFlow)),
    [_client$]: dart.finalFieldType(dart.legacy(http_client_base.RefCountedClient)),
    [_wasClosed]: dart.fieldType(dart.legacy(core.bool))
  }));
  var credentials$ = dart.privateName(auth_browser, "HybridFlowResult.credentials");
  var authorizationCode$ = dart.privateName(auth_browser, "HybridFlowResult.authorizationCode");
  auth_browser.HybridFlowResult = class HybridFlowResult extends core.Object {
    get credentials() {
      return this[credentials$];
    }
    set credentials(value) {
      super.credentials = value;
    }
    get authorizationCode() {
      return this[authorizationCode$];
    }
    set authorizationCode(value) {
      super.authorizationCode = value;
    }
    newClient() {
      this[_flow$][_ensureOpen]();
      return this[_flow$][_clientFromCredentials](this.credentials);
    }
  };
  (auth_browser.HybridFlowResult.new = function(_flow, credentials, authorizationCode) {
    this[_flow$] = _flow;
    this[credentials$] = credentials;
    this[authorizationCode$] = authorizationCode;
    ;
  }).prototype = auth_browser.HybridFlowResult.prototype;
  dart.addTypeTests(auth_browser.HybridFlowResult);
  dart.addTypeCaches(auth_browser.HybridFlowResult);
  dart.setMethodSignature(auth_browser.HybridFlowResult, () => ({
    __proto__: dart.getMethods(auth_browser.HybridFlowResult.__proto__),
    newClient: dart.fnType(dart.legacy(auth.AutoRefreshingAuthClient), [])
  }));
  dart.setLibraryUri(auth_browser.HybridFlowResult, L2);
  dart.setFieldSignature(auth_browser.HybridFlowResult, () => ({
    __proto__: dart.getFields(auth_browser.HybridFlowResult.__proto__),
    [_flow$]: dart.finalFieldType(dart.legacy(auth_browser.BrowserOAuth2Flow)),
    credentials: dart.finalFieldType(dart.legacy(auth.AccessCredentials)),
    authorizationCode: dart.finalFieldType(dart.legacy(core.String))
  }));
  var _authClient = dart.privateName(auth_browser, "_authClient");
  auth_browser._AutoRefreshingBrowserClient = class _AutoRefreshingBrowserClient extends auth_http_utils.AutoRefreshDelegatingClient {
    send(request) {
      if (!dart.test(this.credentials.accessToken.hasExpired)) {
        return this[_authClient].send(request);
      } else {
        return this[_flow$].login({immediate: true}).then(StreamedResponseL(), dart.fn(newCredentials => {
          this.credentials = newCredentials;
          this.notifyAboutNewCredentials(this.credentials);
          this[_authClient] = auth.authenticatedClient(this.baseClient, this.credentials);
          return this[_authClient].send(request);
        }, AccessCredentialsLToFutureLOfStreamedResponseL()));
      }
    }
  };
  (auth_browser._AutoRefreshingBrowserClient.new = function(client, credentials, _flow) {
    this[_authClient] = null;
    this.credentials = credentials;
    this[_flow$] = _flow;
    auth_browser._AutoRefreshingBrowserClient.__proto__.new.call(this, client);
    this[_authClient] = auth.authenticatedClient(this.baseClient, this.credentials);
  }).prototype = auth_browser._AutoRefreshingBrowserClient.prototype;
  dart.addTypeTests(auth_browser._AutoRefreshingBrowserClient);
  dart.addTypeCaches(auth_browser._AutoRefreshingBrowserClient);
  dart.setMethodSignature(auth_browser._AutoRefreshingBrowserClient, () => ({
    __proto__: dart.getMethods(auth_browser._AutoRefreshingBrowserClient.__proto__),
    send: dart.fnType(dart.legacy(async.Future$(dart.legacy(streamed_response.StreamedResponse))), [dart.legacy(base_request.BaseRequest)])
  }));
  dart.setLibraryUri(auth_browser._AutoRefreshingBrowserClient, L2);
  dart.setFieldSignature(auth_browser._AutoRefreshingBrowserClient, () => ({
    __proto__: dart.getFields(auth_browser._AutoRefreshingBrowserClient.__proto__),
    credentials: dart.fieldType(dart.legacy(auth.AccessCredentials)),
    [_flow$]: dart.fieldType(dart.legacy(implicit.ImplicitFlow)),
    [_authClient]: dart.fieldType(dart.legacy(client.Client))
  }));
  auth_browser.clientViaApiKey = function clientViaApiKey(apiKey, opts) {
    let baseClient = opts && 'baseClient' in opts ? opts.baseClient : null;
    if (baseClient == null) {
      baseClient = new browser_client.BrowserClient.new();
    } else {
      baseClient = http_client_base.nonClosingClient(baseClient);
    }
    return new auth_http_utils.ApiKeyClient.new(baseClient, apiKey);
  };
  auth_browser.createImplicitBrowserFlow = function createImplicitBrowserFlow(clientId, scopes, opts) {
    let baseClient = opts && 'baseClient' in opts ? opts.baseClient : null;
    if (baseClient == null) {
      baseClient = new http_client_base.RefCountedClient.new(new browser_client.BrowserClient.new(), {initialRefCount: 1});
    } else {
      baseClient = new http_client_base.RefCountedClient.new(baseClient, {initialRefCount: 2});
    }
    let flow = new implicit.ImplicitFlow.new(clientId.identifier, scopes);
    return flow.initialize().catchError(dart.fn((error, stack) => {
      baseClient.close();
      return async.Future.error(error, StackTraceN().as(stack));
    }, dynamicAnddynamicToFutureL())).then(BrowserOAuth2FlowL(), dart.fn(_ => new auth_browser.BrowserOAuth2Flow.__(flow, RefCountedClientL().as(baseClient)), voidToBrowserOAuth2FlowL()));
  };
  dart.trackLibraries("packages/googleapis_auth/auth_browser", {
    "package:googleapis_auth/src/oauth2_flows/implicit.dart": implicit,
    "package:googleapis_auth/auth_browser.dart": auth_browser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/oauth2_flows/implicit.dart","auth_browser.dart"],"names":[],"mappings":"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","file":"auth_browser.ddc.js"}');
  // Exports:
  return {
    src__oauth2_flows__implicit: implicit,
    auth_browser: auth_browser
  };
}));

//# sourceMappingURL=auth_browser.ddc.js.map
