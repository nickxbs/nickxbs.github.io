define(['dart_sdk', 'packages/_discoveryapis_commons/_discoveryapis_commons'], (function load__packages__googleapis__drive__v3(dart_sdk, packages___discoveryapis_commons___discoveryapis_commons) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const clients = packages___discoveryapis_commons___discoveryapis_commons.src__clients;
  const requests = packages___discoveryapis_commons___discoveryapis_commons.src__requests;
  var v3 = Object.create(dart.library);
  var $_set = dartx._set;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $cast = dartx.cast;
  var $replaceAll = dartx.replaceAll;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var ListLOfStringL = () => (ListLOfStringL = dart.constFn(dart.legacy(ListOfStringL())))();
  var LinkedMapOfStringL$ListLOfStringL = () => (LinkedMapOfStringL$ListLOfStringL = dart.constFn(_js_helper.LinkedMap$(StringL(), ListLOfStringL())))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var UploadOptionsL = () => (UploadOptionsL = dart.constFn(dart.legacy(requests.UploadOptions)))();
  var MediaL = () => (MediaL = dart.constFn(dart.legacy(requests.Media)))();
  var AboutL = () => (AboutL = dart.constFn(dart.legacy(v3.About)))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var dynamicToAboutL = () => (dynamicToAboutL = dart.constFn(dart.fnType(AboutL(), [dart.dynamic])))();
  var StartPageTokenL = () => (StartPageTokenL = dart.constFn(dart.legacy(v3.StartPageToken)))();
  var dynamicToStartPageTokenL = () => (dynamicToStartPageTokenL = dart.constFn(dart.fnType(StartPageTokenL(), [dart.dynamic])))();
  var ChangeListL = () => (ChangeListL = dart.constFn(dart.legacy(v3.ChangeList)))();
  var dynamicToChangeListL = () => (dynamicToChangeListL = dart.constFn(dart.fnType(ChangeListL(), [dart.dynamic])))();
  var ChannelL = () => (ChannelL = dart.constFn(dart.legacy(v3.Channel)))();
  var dynamicToChannelL = () => (dynamicToChannelL = dart.constFn(dart.fnType(ChannelL(), [dart.dynamic])))();
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var CommentL = () => (CommentL = dart.constFn(dart.legacy(v3.Comment)))();
  var dynamicToCommentL = () => (dynamicToCommentL = dart.constFn(dart.fnType(CommentL(), [dart.dynamic])))();
  var CommentListL = () => (CommentListL = dart.constFn(dart.legacy(v3.CommentList)))();
  var dynamicToCommentListL = () => (dynamicToCommentListL = dart.constFn(dart.fnType(CommentListL(), [dart.dynamic])))();
  var DriveL = () => (DriveL = dart.constFn(dart.legacy(v3.Drive)))();
  var dynamicToDriveL = () => (dynamicToDriveL = dart.constFn(dart.fnType(DriveL(), [dart.dynamic])))();
  var DriveListL = () => (DriveListL = dart.constFn(dart.legacy(v3.DriveList)))();
  var dynamicToDriveListL = () => (dynamicToDriveListL = dart.constFn(dart.fnType(DriveListL(), [dart.dynamic])))();
  var FileL = () => (FileL = dart.constFn(dart.legacy(v3.File)))();
  var dynamicToFileL = () => (dynamicToFileL = dart.constFn(dart.fnType(FileL(), [dart.dynamic])))();
  var ResumableUploadOptionsL = () => (ResumableUploadOptionsL = dart.constFn(dart.legacy(requests.ResumableUploadOptions)))();
  var GeneratedIdsL = () => (GeneratedIdsL = dart.constFn(dart.legacy(v3.GeneratedIds)))();
  var dynamicToGeneratedIdsL = () => (dynamicToGeneratedIdsL = dart.constFn(dart.fnType(GeneratedIdsL(), [dart.dynamic])))();
  var FileListL = () => (FileListL = dart.constFn(dart.legacy(v3.FileList)))();
  var dynamicToFileListL = () => (dynamicToFileListL = dart.constFn(dart.fnType(FileListL(), [dart.dynamic])))();
  var PermissionL = () => (PermissionL = dart.constFn(dart.legacy(v3.Permission)))();
  var dynamicToPermissionL = () => (dynamicToPermissionL = dart.constFn(dart.fnType(PermissionL(), [dart.dynamic])))();
  var PermissionListL = () => (PermissionListL = dart.constFn(dart.legacy(v3.PermissionList)))();
  var dynamicToPermissionListL = () => (dynamicToPermissionListL = dart.constFn(dart.fnType(PermissionListL(), [dart.dynamic])))();
  var ReplyL = () => (ReplyL = dart.constFn(dart.legacy(v3.Reply)))();
  var dynamicToReplyL = () => (dynamicToReplyL = dart.constFn(dart.fnType(ReplyL(), [dart.dynamic])))();
  var ReplyListL = () => (ReplyListL = dart.constFn(dart.legacy(v3.ReplyList)))();
  var dynamicToReplyListL = () => (dynamicToReplyListL = dart.constFn(dart.fnType(ReplyListL(), [dart.dynamic])))();
  var RevisionL = () => (RevisionL = dart.constFn(dart.legacy(v3.Revision)))();
  var dynamicToRevisionL = () => (dynamicToRevisionL = dart.constFn(dart.fnType(RevisionL(), [dart.dynamic])))();
  var RevisionListL = () => (RevisionListL = dart.constFn(dart.legacy(v3.RevisionList)))();
  var dynamicToRevisionListL = () => (dynamicToRevisionListL = dart.constFn(dart.fnType(RevisionListL(), [dart.dynamic])))();
  var TeamDriveL = () => (TeamDriveL = dart.constFn(dart.legacy(v3.TeamDrive)))();
  var dynamicToTeamDriveL = () => (dynamicToTeamDriveL = dart.constFn(dart.fnType(TeamDriveL(), [dart.dynamic])))();
  var TeamDriveListL = () => (TeamDriveListL = dart.constFn(dart.legacy(v3.TeamDriveList)))();
  var dynamicToTeamDriveListL = () => (dynamicToTeamDriveListL = dart.constFn(dart.fnType(TeamDriveListL(), [dart.dynamic])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var LinkedMapOfStringL$ObjectL = () => (LinkedMapOfStringL$ObjectL = dart.constFn(_js_helper.LinkedMap$(StringL(), ObjectL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var AboutDriveThemesL = () => (AboutDriveThemesL = dart.constFn(dart.legacy(v3.AboutDriveThemes)))();
  var dynamicToAboutDriveThemesL = () => (dynamicToAboutDriveThemesL = dart.constFn(dart.fnType(AboutDriveThemesL(), [dart.dynamic])))();
  var MapOfStringL$ListL = () => (MapOfStringL$ListL = dart.constFn(core.Map$(StringL(), ListL())))();
  var MapLOfStringL$ListL = () => (MapLOfStringL$ListL = dart.constFn(dart.legacy(MapOfStringL$ListL())))();
  var ListLToListLOfStringL = () => (ListLToListLOfStringL = dart.constFn(dart.fnType(ListLOfStringL(), [ListL()])))();
  var AboutTeamDriveThemesL = () => (AboutTeamDriveThemesL = dart.constFn(dart.legacy(v3.AboutTeamDriveThemes)))();
  var dynamicToAboutTeamDriveThemesL = () => (dynamicToAboutTeamDriveThemesL = dart.constFn(dart.fnType(AboutTeamDriveThemesL(), [dart.dynamic])))();
  var MapOfStringL$ObjectL = () => (MapOfStringL$ObjectL = dart.constFn(core.Map$(StringL(), ObjectL())))();
  var MapLOfStringL$ObjectL = () => (MapLOfStringL$ObjectL = dart.constFn(dart.legacy(MapOfStringL$ObjectL())))();
  var AboutDriveThemesLToMapLOfStringL$ObjectL = () => (AboutDriveThemesLToMapLOfStringL$ObjectL = dart.constFn(dart.fnType(MapLOfStringL$ObjectL(), [AboutDriveThemesL()])))();
  var AboutTeamDriveThemesLToMapLOfStringL$ObjectL = () => (AboutTeamDriveThemesLToMapLOfStringL$ObjectL = dart.constFn(dart.fnType(MapLOfStringL$ObjectL(), [AboutTeamDriveThemesL()])))();
  var ChangeL = () => (ChangeL = dart.constFn(dart.legacy(v3.Change)))();
  var dynamicToChangeL = () => (dynamicToChangeL = dart.constFn(dart.fnType(ChangeL(), [dart.dynamic])))();
  var ChangeLToMapLOfStringL$ObjectL = () => (ChangeLToMapLOfStringL$ObjectL = dart.constFn(dart.fnType(MapLOfStringL$ObjectL(), [ChangeL()])))();
  var ReplyLToMapLOfStringL$ObjectL = () => (ReplyLToMapLOfStringL$ObjectL = dart.constFn(dart.fnType(MapLOfStringL$ObjectL(), [ReplyL()])))();
  var CommentLToMapLOfStringL$ObjectL = () => (CommentLToMapLOfStringL$ObjectL = dart.constFn(dart.fnType(MapLOfStringL$ObjectL(), [CommentL()])))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var DriveLToMapLOfStringL$ObjectL = () => (DriveLToMapLOfStringL$ObjectL = dart.constFn(dart.fnType(MapLOfStringL$ObjectL(), [DriveL()])))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var UserL = () => (UserL = dart.constFn(dart.legacy(v3.User)))();
  var dynamicToUserL = () => (dynamicToUserL = dart.constFn(dart.fnType(UserL(), [dart.dynamic])))();
  var UserLToMapLOfStringL$ObjectL = () => (UserLToMapLOfStringL$ObjectL = dart.constFn(dart.fnType(MapLOfStringL$ObjectL(), [UserL()])))();
  var PermissionLToMapLOfStringL$ObjectL = () => (PermissionLToMapLOfStringL$ObjectL = dart.constFn(dart.fnType(MapLOfStringL$ObjectL(), [PermissionL()])))();
  var FileLToMapLOfStringL$ObjectL = () => (FileLToMapLOfStringL$ObjectL = dart.constFn(dart.fnType(MapLOfStringL$ObjectL(), [FileL()])))();
  var PermissionPermissionDetailsL = () => (PermissionPermissionDetailsL = dart.constFn(dart.legacy(v3.PermissionPermissionDetails)))();
  var dynamicToPermissionPermissionDetailsL = () => (dynamicToPermissionPermissionDetailsL = dart.constFn(dart.fnType(PermissionPermissionDetailsL(), [dart.dynamic])))();
  var PermissionTeamDrivePermissionDetailsL = () => (PermissionTeamDrivePermissionDetailsL = dart.constFn(dart.legacy(v3.PermissionTeamDrivePermissionDetails)))();
  var dynamicToPermissionTeamDrivePermissionDetailsL = () => (dynamicToPermissionTeamDrivePermissionDetailsL = dart.constFn(dart.fnType(PermissionTeamDrivePermissionDetailsL(), [dart.dynamic])))();
  var PermissionPermissionDetailsLToMapLOfStringL$ObjectL = () => (PermissionPermissionDetailsLToMapLOfStringL$ObjectL = dart.constFn(dart.fnType(MapLOfStringL$ObjectL(), [PermissionPermissionDetailsL()])))();
  var PermissionTeamDrivePermissionDetailsLToMapLOfStringL$ObjectL = () => (PermissionTeamDrivePermissionDetailsLToMapLOfStringL$ObjectL = dart.constFn(dart.fnType(MapLOfStringL$ObjectL(), [PermissionTeamDrivePermissionDetailsL()])))();
  var RevisionLToMapLOfStringL$ObjectL = () => (RevisionLToMapLOfStringL$ObjectL = dart.constFn(dart.fnType(MapLOfStringL$ObjectL(), [RevisionL()])))();
  var TeamDriveLToMapLOfStringL$ObjectL = () => (TeamDriveLToMapLOfStringL$ObjectL = dart.constFn(dart.fnType(MapLOfStringL$ObjectL(), [TeamDriveL()])))();
  const CT = Object.create(null);
  var L0 = "package:googleapis/drive/v3.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: requests.UploadOptions.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: requests.DownloadOptions.prototype
      });
    }
  }, false);
  var _requester = dart.privateName(v3, "_requester");
  v3.DriveApi = class DriveApi extends core.Object {
    get about() {
      return new v3.AboutResourceApi.new(this[_requester]);
    }
    get changes() {
      return new v3.ChangesResourceApi.new(this[_requester]);
    }
    get channels() {
      return new v3.ChannelsResourceApi.new(this[_requester]);
    }
    get comments() {
      return new v3.CommentsResourceApi.new(this[_requester]);
    }
    get drives() {
      return new v3.DrivesResourceApi.new(this[_requester]);
    }
    get files() {
      return new v3.FilesResourceApi.new(this[_requester]);
    }
    get permissions() {
      return new v3.PermissionsResourceApi.new(this[_requester]);
    }
    get replies() {
      return new v3.RepliesResourceApi.new(this[_requester]);
    }
    get revisions() {
      return new v3.RevisionsResourceApi.new(this[_requester]);
    }
    get teamdrives() {
      return new v3.TeamdrivesResourceApi.new(this[_requester]);
    }
  };
  (v3.DriveApi.new = function(client, opts) {
    let rootUrl = opts && 'rootUrl' in opts ? opts.rootUrl : "https://www.googleapis.com/";
    let servicePath = opts && 'servicePath' in opts ? opts.servicePath : "drive/v3/";
    this[_requester] = new clients.ApiRequester.new(client, rootUrl, servicePath, "dart-api-client drive/v3");
    ;
  }).prototype = v3.DriveApi.prototype;
  dart.addTypeTests(v3.DriveApi);
  dart.addTypeCaches(v3.DriveApi);
  dart.setGetterSignature(v3.DriveApi, () => ({
    __proto__: dart.getGetters(v3.DriveApi.__proto__),
    about: dart.legacy(v3.AboutResourceApi),
    changes: dart.legacy(v3.ChangesResourceApi),
    channels: dart.legacy(v3.ChannelsResourceApi),
    comments: dart.legacy(v3.CommentsResourceApi),
    drives: dart.legacy(v3.DrivesResourceApi),
    files: dart.legacy(v3.FilesResourceApi),
    permissions: dart.legacy(v3.PermissionsResourceApi),
    replies: dart.legacy(v3.RepliesResourceApi),
    revisions: dart.legacy(v3.RevisionsResourceApi),
    teamdrives: dart.legacy(v3.TeamdrivesResourceApi)
  }));
  dart.setLibraryUri(v3.DriveApi, L0);
  dart.setFieldSignature(v3.DriveApi, () => ({
    __proto__: dart.getFields(v3.DriveApi.__proto__),
    [_requester]: dart.finalFieldType(dart.legacy(clients.ApiRequester))
  }));
  dart.defineLazy(v3.DriveApi, {
    /*v3.DriveApi.DriveScope*/get DriveScope() {
      return "https://www.googleapis.com/auth/drive";
    },
    /*v3.DriveApi.DriveAppdataScope*/get DriveAppdataScope() {
      return "https://www.googleapis.com/auth/drive.appdata";
    },
    /*v3.DriveApi.DriveFileScope*/get DriveFileScope() {
      return "https://www.googleapis.com/auth/drive.file";
    },
    /*v3.DriveApi.DriveMetadataScope*/get DriveMetadataScope() {
      return "https://www.googleapis.com/auth/drive.metadata";
    },
    /*v3.DriveApi.DriveMetadataReadonlyScope*/get DriveMetadataReadonlyScope() {
      return "https://www.googleapis.com/auth/drive.metadata.readonly";
    },
    /*v3.DriveApi.DrivePhotosReadonlyScope*/get DrivePhotosReadonlyScope() {
      return "https://www.googleapis.com/auth/drive.photos.readonly";
    },
    /*v3.DriveApi.DriveReadonlyScope*/get DriveReadonlyScope() {
      return "https://www.googleapis.com/auth/drive.readonly";
    },
    /*v3.DriveApi.DriveScriptsScope*/get DriveScriptsScope() {
      return "https://www.googleapis.com/auth/drive.scripts";
    }
  }, true);
  v3.AboutResourceApi = class AboutResourceApi extends core.Object {
    get(opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "about";
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(AboutL(), dart.fn(data => new v3.About.fromJson(MapL().as(data)), dynamicToAboutL()));
    }
  };
  (v3.AboutResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.AboutResourceApi.prototype;
  dart.addTypeTests(v3.AboutResourceApi);
  dart.addTypeCaches(v3.AboutResourceApi);
  dart.setMethodSignature(v3.AboutResourceApi, () => ({
    __proto__: dart.getMethods(v3.AboutResourceApi.__proto__),
    get: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.About))), [], {$fields: dart.legacy(core.String)}, {})
  }));
  dart.setLibraryUri(v3.AboutResourceApi, L0);
  dart.setFieldSignature(v3.AboutResourceApi, () => ({
    __proto__: dart.getFields(v3.AboutResourceApi.__proto__),
    [_requester]: dart.finalFieldType(dart.legacy(clients.ApiRequester))
  }));
  v3.ChangesResourceApi = class ChangesResourceApi extends core.Object {
    getStartPageToken(opts) {
      let driveId = opts && 'driveId' in opts ? opts.driveId : null;
      let supportsAllDrives = opts && 'supportsAllDrives' in opts ? opts.supportsAllDrives : null;
      let supportsTeamDrives = opts && 'supportsTeamDrives' in opts ? opts.supportsTeamDrives : null;
      let teamDriveId = opts && 'teamDriveId' in opts ? opts.teamDriveId : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (driveId != null) {
        _queryParams[$_set]("driveId", JSArrayOfStringL().of([driveId]));
      }
      if (supportsAllDrives != null) {
        _queryParams[$_set]("supportsAllDrives", JSArrayOfStringL().of([dart.str(supportsAllDrives)]));
      }
      if (supportsTeamDrives != null) {
        _queryParams[$_set]("supportsTeamDrives", JSArrayOfStringL().of([dart.str(supportsTeamDrives)]));
      }
      if (teamDriveId != null) {
        _queryParams[$_set]("teamDriveId", JSArrayOfStringL().of([teamDriveId]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "changes/startPageToken";
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(StartPageTokenL(), dart.fn(data => new v3.StartPageToken.fromJson(MapL().as(data)), dynamicToStartPageTokenL()));
    }
    list(pageToken, opts) {
      let driveId = opts && 'driveId' in opts ? opts.driveId : null;
      let includeCorpusRemovals = opts && 'includeCorpusRemovals' in opts ? opts.includeCorpusRemovals : null;
      let includeItemsFromAllDrives = opts && 'includeItemsFromAllDrives' in opts ? opts.includeItemsFromAllDrives : null;
      let includeRemoved = opts && 'includeRemoved' in opts ? opts.includeRemoved : null;
      let includeTeamDriveItems = opts && 'includeTeamDriveItems' in opts ? opts.includeTeamDriveItems : null;
      let pageSize = opts && 'pageSize' in opts ? opts.pageSize : null;
      let restrictToMyDrive = opts && 'restrictToMyDrive' in opts ? opts.restrictToMyDrive : null;
      let spaces = opts && 'spaces' in opts ? opts.spaces : null;
      let supportsAllDrives = opts && 'supportsAllDrives' in opts ? opts.supportsAllDrives : null;
      let supportsTeamDrives = opts && 'supportsTeamDrives' in opts ? opts.supportsTeamDrives : null;
      let teamDriveId = opts && 'teamDriveId' in opts ? opts.teamDriveId : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (pageToken == null) {
        dart.throw(new core.ArgumentError.new("Parameter pageToken is required."));
      }
      _queryParams[$_set]("pageToken", JSArrayOfStringL().of([pageToken]));
      if (driveId != null) {
        _queryParams[$_set]("driveId", JSArrayOfStringL().of([driveId]));
      }
      if (includeCorpusRemovals != null) {
        _queryParams[$_set]("includeCorpusRemovals", JSArrayOfStringL().of([dart.str(includeCorpusRemovals)]));
      }
      if (includeItemsFromAllDrives != null) {
        _queryParams[$_set]("includeItemsFromAllDrives", JSArrayOfStringL().of([dart.str(includeItemsFromAllDrives)]));
      }
      if (includeRemoved != null) {
        _queryParams[$_set]("includeRemoved", JSArrayOfStringL().of([dart.str(includeRemoved)]));
      }
      if (includeTeamDriveItems != null) {
        _queryParams[$_set]("includeTeamDriveItems", JSArrayOfStringL().of([dart.str(includeTeamDriveItems)]));
      }
      if (pageSize != null) {
        _queryParams[$_set]("pageSize", JSArrayOfStringL().of([dart.str(pageSize)]));
      }
      if (restrictToMyDrive != null) {
        _queryParams[$_set]("restrictToMyDrive", JSArrayOfStringL().of([dart.str(restrictToMyDrive)]));
      }
      if (spaces != null) {
        _queryParams[$_set]("spaces", JSArrayOfStringL().of([spaces]));
      }
      if (supportsAllDrives != null) {
        _queryParams[$_set]("supportsAllDrives", JSArrayOfStringL().of([dart.str(supportsAllDrives)]));
      }
      if (supportsTeamDrives != null) {
        _queryParams[$_set]("supportsTeamDrives", JSArrayOfStringL().of([dart.str(supportsTeamDrives)]));
      }
      if (teamDriveId != null) {
        _queryParams[$_set]("teamDriveId", JSArrayOfStringL().of([teamDriveId]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "changes";
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(ChangeListL(), dart.fn(data => new v3.ChangeList.fromJson(MapL().as(data)), dynamicToChangeListL()));
    }
    watch(request, pageToken, opts) {
      let driveId = opts && 'driveId' in opts ? opts.driveId : null;
      let includeCorpusRemovals = opts && 'includeCorpusRemovals' in opts ? opts.includeCorpusRemovals : null;
      let includeItemsFromAllDrives = opts && 'includeItemsFromAllDrives' in opts ? opts.includeItemsFromAllDrives : null;
      let includeRemoved = opts && 'includeRemoved' in opts ? opts.includeRemoved : null;
      let includeTeamDriveItems = opts && 'includeTeamDriveItems' in opts ? opts.includeTeamDriveItems : null;
      let pageSize = opts && 'pageSize' in opts ? opts.pageSize : null;
      let restrictToMyDrive = opts && 'restrictToMyDrive' in opts ? opts.restrictToMyDrive : null;
      let spaces = opts && 'spaces' in opts ? opts.spaces : null;
      let supportsAllDrives = opts && 'supportsAllDrives' in opts ? opts.supportsAllDrives : null;
      let supportsTeamDrives = opts && 'supportsTeamDrives' in opts ? opts.supportsTeamDrives : null;
      let teamDriveId = opts && 'teamDriveId' in opts ? opts.teamDriveId : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (pageToken == null) {
        dart.throw(new core.ArgumentError.new("Parameter pageToken is required."));
      }
      _queryParams[$_set]("pageToken", JSArrayOfStringL().of([pageToken]));
      if (driveId != null) {
        _queryParams[$_set]("driveId", JSArrayOfStringL().of([driveId]));
      }
      if (includeCorpusRemovals != null) {
        _queryParams[$_set]("includeCorpusRemovals", JSArrayOfStringL().of([dart.str(includeCorpusRemovals)]));
      }
      if (includeItemsFromAllDrives != null) {
        _queryParams[$_set]("includeItemsFromAllDrives", JSArrayOfStringL().of([dart.str(includeItemsFromAllDrives)]));
      }
      if (includeRemoved != null) {
        _queryParams[$_set]("includeRemoved", JSArrayOfStringL().of([dart.str(includeRemoved)]));
      }
      if (includeTeamDriveItems != null) {
        _queryParams[$_set]("includeTeamDriveItems", JSArrayOfStringL().of([dart.str(includeTeamDriveItems)]));
      }
      if (pageSize != null) {
        _queryParams[$_set]("pageSize", JSArrayOfStringL().of([dart.str(pageSize)]));
      }
      if (restrictToMyDrive != null) {
        _queryParams[$_set]("restrictToMyDrive", JSArrayOfStringL().of([dart.str(restrictToMyDrive)]));
      }
      if (spaces != null) {
        _queryParams[$_set]("spaces", JSArrayOfStringL().of([spaces]));
      }
      if (supportsAllDrives != null) {
        _queryParams[$_set]("supportsAllDrives", JSArrayOfStringL().of([dart.str(supportsAllDrives)]));
      }
      if (supportsTeamDrives != null) {
        _queryParams[$_set]("supportsTeamDrives", JSArrayOfStringL().of([dart.str(supportsTeamDrives)]));
      }
      if (teamDriveId != null) {
        _queryParams[$_set]("teamDriveId", JSArrayOfStringL().of([teamDriveId]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "changes/watch";
      let _response = this[_requester].request(StringL().as(_url), "POST", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(ChannelL(), dart.fn(data => new v3.Channel.fromJson(MapL().as(data)), dynamicToChannelL()));
    }
  };
  (v3.ChangesResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.ChangesResourceApi.prototype;
  dart.addTypeTests(v3.ChangesResourceApi);
  dart.addTypeCaches(v3.ChangesResourceApi);
  dart.setMethodSignature(v3.ChangesResourceApi, () => ({
    __proto__: dart.getMethods(v3.ChangesResourceApi.__proto__),
    getStartPageToken: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.StartPageToken))), [], {$fields: dart.legacy(core.String), driveId: dart.legacy(core.String), supportsAllDrives: dart.legacy(core.bool), supportsTeamDrives: dart.legacy(core.bool), teamDriveId: dart.legacy(core.String)}, {}),
    list: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.ChangeList))), [dart.legacy(core.String)], {$fields: dart.legacy(core.String), driveId: dart.legacy(core.String), includeCorpusRemovals: dart.legacy(core.bool), includeItemsFromAllDrives: dart.legacy(core.bool), includeRemoved: dart.legacy(core.bool), includeTeamDriveItems: dart.legacy(core.bool), pageSize: dart.legacy(core.int), restrictToMyDrive: dart.legacy(core.bool), spaces: dart.legacy(core.String), supportsAllDrives: dart.legacy(core.bool), supportsTeamDrives: dart.legacy(core.bool), teamDriveId: dart.legacy(core.String)}, {}),
    watch: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.Channel))), [dart.legacy(v3.Channel), dart.legacy(core.String)], {$fields: dart.legacy(core.String), driveId: dart.legacy(core.String), includeCorpusRemovals: dart.legacy(core.bool), includeItemsFromAllDrives: dart.legacy(core.bool), includeRemoved: dart.legacy(core.bool), includeTeamDriveItems: dart.legacy(core.bool), pageSize: dart.legacy(core.int), restrictToMyDrive: dart.legacy(core.bool), spaces: dart.legacy(core.String), supportsAllDrives: dart.legacy(core.bool), supportsTeamDrives: dart.legacy(core.bool), teamDriveId: dart.legacy(core.String)}, {})
  }));
  dart.setLibraryUri(v3.ChangesResourceApi, L0);
  dart.setFieldSignature(v3.ChangesResourceApi, () => ({
    __proto__: dart.getFields(v3.ChangesResourceApi.__proto__),
    [_requester]: dart.finalFieldType(dart.legacy(clients.ApiRequester))
  }));
  v3.ChannelsResourceApi = class ChannelsResourceApi extends core.Object {
    stop(request, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _downloadOptions = null;
      _url = "channels/stop";
      let _response = this[_requester].request(StringL().as(_url), "POST", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dart.dynamic, dart.fn(data => null, dynamicToNullN()));
    }
  };
  (v3.ChannelsResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.ChannelsResourceApi.prototype;
  dart.addTypeTests(v3.ChannelsResourceApi);
  dart.addTypeCaches(v3.ChannelsResourceApi);
  dart.setMethodSignature(v3.ChannelsResourceApi, () => ({
    __proto__: dart.getMethods(v3.ChannelsResourceApi.__proto__),
    stop: dart.fnType(dart.legacy(async.Future), [dart.legacy(v3.Channel)], {$fields: dart.legacy(core.String)}, {})
  }));
  dart.setLibraryUri(v3.ChannelsResourceApi, L0);
  dart.setFieldSignature(v3.ChannelsResourceApi, () => ({
    __proto__: dart.getFields(v3.ChannelsResourceApi.__proto__),
    [_requester]: dart.finalFieldType(dart.legacy(clients.ApiRequester))
  }));
  v3.CommentsResourceApi = class CommentsResourceApi extends core.Object {
    create(request, fileId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/comments";
      let _response = this[_requester].request(StringL().as(_url), "POST", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(CommentL(), dart.fn(data => new v3.Comment.fromJson(MapL().as(data)), dynamicToCommentL()));
    }
    delete(fileId, commentId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (commentId == null) {
        dart.throw(new core.ArgumentError.new("Parameter commentId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _downloadOptions = null;
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/comments/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(commentId)));
      let _response = this[_requester].request(StringL().as(_url), "DELETE", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dart.dynamic, dart.fn(data => null, dynamicToNullN()));
    }
    get(fileId, commentId, opts) {
      let includeDeleted = opts && 'includeDeleted' in opts ? opts.includeDeleted : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (commentId == null) {
        dart.throw(new core.ArgumentError.new("Parameter commentId is required."));
      }
      if (includeDeleted != null) {
        _queryParams[$_set]("includeDeleted", JSArrayOfStringL().of([dart.str(includeDeleted)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/comments/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(commentId)));
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(CommentL(), dart.fn(data => new v3.Comment.fromJson(MapL().as(data)), dynamicToCommentL()));
    }
    list(fileId, opts) {
      let includeDeleted = opts && 'includeDeleted' in opts ? opts.includeDeleted : null;
      let pageSize = opts && 'pageSize' in opts ? opts.pageSize : null;
      let pageToken = opts && 'pageToken' in opts ? opts.pageToken : null;
      let startModifiedTime = opts && 'startModifiedTime' in opts ? opts.startModifiedTime : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (includeDeleted != null) {
        _queryParams[$_set]("includeDeleted", JSArrayOfStringL().of([dart.str(includeDeleted)]));
      }
      if (pageSize != null) {
        _queryParams[$_set]("pageSize", JSArrayOfStringL().of([dart.str(pageSize)]));
      }
      if (pageToken != null) {
        _queryParams[$_set]("pageToken", JSArrayOfStringL().of([pageToken]));
      }
      if (startModifiedTime != null) {
        _queryParams[$_set]("startModifiedTime", JSArrayOfStringL().of([startModifiedTime]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/comments";
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(CommentListL(), dart.fn(data => new v3.CommentList.fromJson(MapL().as(data)), dynamicToCommentListL()));
    }
    update(request, fileId, commentId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (commentId == null) {
        dart.throw(new core.ArgumentError.new("Parameter commentId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/comments/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(commentId)));
      let _response = this[_requester].request(StringL().as(_url), "PATCH", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(CommentL(), dart.fn(data => new v3.Comment.fromJson(MapL().as(data)), dynamicToCommentL()));
    }
  };
  (v3.CommentsResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.CommentsResourceApi.prototype;
  dart.addTypeTests(v3.CommentsResourceApi);
  dart.addTypeCaches(v3.CommentsResourceApi);
  dart.setMethodSignature(v3.CommentsResourceApi, () => ({
    __proto__: dart.getMethods(v3.CommentsResourceApi.__proto__),
    create: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.Comment))), [dart.legacy(v3.Comment), dart.legacy(core.String)], {$fields: dart.legacy(core.String)}, {}),
    delete: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.String), dart.legacy(core.String)], {$fields: dart.legacy(core.String)}, {}),
    get: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.Comment))), [dart.legacy(core.String), dart.legacy(core.String)], {$fields: dart.legacy(core.String), includeDeleted: dart.legacy(core.bool)}, {}),
    list: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.CommentList))), [dart.legacy(core.String)], {$fields: dart.legacy(core.String), includeDeleted: dart.legacy(core.bool), pageSize: dart.legacy(core.int), pageToken: dart.legacy(core.String), startModifiedTime: dart.legacy(core.String)}, {}),
    update: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.Comment))), [dart.legacy(v3.Comment), dart.legacy(core.String), dart.legacy(core.String)], {$fields: dart.legacy(core.String)}, {})
  }));
  dart.setLibraryUri(v3.CommentsResourceApi, L0);
  dart.setFieldSignature(v3.CommentsResourceApi, () => ({
    __proto__: dart.getFields(v3.CommentsResourceApi.__proto__),
    [_requester]: dart.finalFieldType(dart.legacy(clients.ApiRequester))
  }));
  v3.DrivesResourceApi = class DrivesResourceApi extends core.Object {
    create(request, requestId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (requestId == null) {
        dart.throw(new core.ArgumentError.new("Parameter requestId is required."));
      }
      _queryParams[$_set]("requestId", JSArrayOfStringL().of([requestId]));
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "drives";
      let _response = this[_requester].request(StringL().as(_url), "POST", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(DriveL(), dart.fn(data => new v3.Drive.fromJson(MapL().as(data)), dynamicToDriveL()));
    }
    delete(driveId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (driveId == null) {
        dart.throw(new core.ArgumentError.new("Parameter driveId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _downloadOptions = null;
      _url = "drives/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(driveId)));
      let _response = this[_requester].request(StringL().as(_url), "DELETE", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dart.dynamic, dart.fn(data => null, dynamicToNullN()));
    }
    get(driveId, opts) {
      let useDomainAdminAccess = opts && 'useDomainAdminAccess' in opts ? opts.useDomainAdminAccess : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (driveId == null) {
        dart.throw(new core.ArgumentError.new("Parameter driveId is required."));
      }
      if (useDomainAdminAccess != null) {
        _queryParams[$_set]("useDomainAdminAccess", JSArrayOfStringL().of([dart.str(useDomainAdminAccess)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "drives/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(driveId)));
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(DriveL(), dart.fn(data => new v3.Drive.fromJson(MapL().as(data)), dynamicToDriveL()));
    }
    hide(driveId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (driveId == null) {
        dart.throw(new core.ArgumentError.new("Parameter driveId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "drives/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(driveId))) + "/hide";
      let _response = this[_requester].request(StringL().as(_url), "POST", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(DriveL(), dart.fn(data => new v3.Drive.fromJson(MapL().as(data)), dynamicToDriveL()));
    }
    list(opts) {
      let pageSize = opts && 'pageSize' in opts ? opts.pageSize : null;
      let pageToken = opts && 'pageToken' in opts ? opts.pageToken : null;
      let q = opts && 'q' in opts ? opts.q : null;
      let useDomainAdminAccess = opts && 'useDomainAdminAccess' in opts ? opts.useDomainAdminAccess : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (pageSize != null) {
        _queryParams[$_set]("pageSize", JSArrayOfStringL().of([dart.str(pageSize)]));
      }
      if (pageToken != null) {
        _queryParams[$_set]("pageToken", JSArrayOfStringL().of([pageToken]));
      }
      if (q != null) {
        _queryParams[$_set]("q", JSArrayOfStringL().of([q]));
      }
      if (useDomainAdminAccess != null) {
        _queryParams[$_set]("useDomainAdminAccess", JSArrayOfStringL().of([dart.str(useDomainAdminAccess)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "drives";
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(DriveListL(), dart.fn(data => new v3.DriveList.fromJson(MapL().as(data)), dynamicToDriveListL()));
    }
    unhide(driveId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (driveId == null) {
        dart.throw(new core.ArgumentError.new("Parameter driveId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "drives/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(driveId))) + "/unhide";
      let _response = this[_requester].request(StringL().as(_url), "POST", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(DriveL(), dart.fn(data => new v3.Drive.fromJson(MapL().as(data)), dynamicToDriveL()));
    }
    update(request, driveId, opts) {
      let useDomainAdminAccess = opts && 'useDomainAdminAccess' in opts ? opts.useDomainAdminAccess : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (driveId == null) {
        dart.throw(new core.ArgumentError.new("Parameter driveId is required."));
      }
      if (useDomainAdminAccess != null) {
        _queryParams[$_set]("useDomainAdminAccess", JSArrayOfStringL().of([dart.str(useDomainAdminAccess)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "drives/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(driveId)));
      let _response = this[_requester].request(StringL().as(_url), "PATCH", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(DriveL(), dart.fn(data => new v3.Drive.fromJson(MapL().as(data)), dynamicToDriveL()));
    }
  };
  (v3.DrivesResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.DrivesResourceApi.prototype;
  dart.addTypeTests(v3.DrivesResourceApi);
  dart.addTypeCaches(v3.DrivesResourceApi);
  dart.setMethodSignature(v3.DrivesResourceApi, () => ({
    __proto__: dart.getMethods(v3.DrivesResourceApi.__proto__),
    create: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.Drive))), [dart.legacy(v3.Drive), dart.legacy(core.String)], {$fields: dart.legacy(core.String)}, {}),
    delete: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.String)], {$fields: dart.legacy(core.String)}, {}),
    get: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.Drive))), [dart.legacy(core.String)], {$fields: dart.legacy(core.String), useDomainAdminAccess: dart.legacy(core.bool)}, {}),
    hide: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.Drive))), [dart.legacy(core.String)], {$fields: dart.legacy(core.String)}, {}),
    list: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.DriveList))), [], {$fields: dart.legacy(core.String), pageSize: dart.legacy(core.int), pageToken: dart.legacy(core.String), q: dart.legacy(core.String), useDomainAdminAccess: dart.legacy(core.bool)}, {}),
    unhide: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.Drive))), [dart.legacy(core.String)], {$fields: dart.legacy(core.String)}, {}),
    update: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.Drive))), [dart.legacy(v3.Drive), dart.legacy(core.String)], {$fields: dart.legacy(core.String), useDomainAdminAccess: dart.legacy(core.bool)}, {})
  }));
  dart.setLibraryUri(v3.DrivesResourceApi, L0);
  dart.setFieldSignature(v3.DrivesResourceApi, () => ({
    __proto__: dart.getFields(v3.DrivesResourceApi.__proto__),
    [_requester]: dart.finalFieldType(dart.legacy(clients.ApiRequester))
  }));
  var C0;
  var C1;
  v3.FilesResourceApi = class FilesResourceApi extends core.Object {
    copy(request, fileId, opts) {
      let enforceSingleParent = opts && 'enforceSingleParent' in opts ? opts.enforceSingleParent : null;
      let ignoreDefaultVisibility = opts && 'ignoreDefaultVisibility' in opts ? opts.ignoreDefaultVisibility : null;
      let keepRevisionForever = opts && 'keepRevisionForever' in opts ? opts.keepRevisionForever : null;
      let ocrLanguage = opts && 'ocrLanguage' in opts ? opts.ocrLanguage : null;
      let supportsAllDrives = opts && 'supportsAllDrives' in opts ? opts.supportsAllDrives : null;
      let supportsTeamDrives = opts && 'supportsTeamDrives' in opts ? opts.supportsTeamDrives : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (enforceSingleParent != null) {
        _queryParams[$_set]("enforceSingleParent", JSArrayOfStringL().of([dart.str(enforceSingleParent)]));
      }
      if (ignoreDefaultVisibility != null) {
        _queryParams[$_set]("ignoreDefaultVisibility", JSArrayOfStringL().of([dart.str(ignoreDefaultVisibility)]));
      }
      if (keepRevisionForever != null) {
        _queryParams[$_set]("keepRevisionForever", JSArrayOfStringL().of([dart.str(keepRevisionForever)]));
      }
      if (ocrLanguage != null) {
        _queryParams[$_set]("ocrLanguage", JSArrayOfStringL().of([ocrLanguage]));
      }
      if (supportsAllDrives != null) {
        _queryParams[$_set]("supportsAllDrives", JSArrayOfStringL().of([dart.str(supportsAllDrives)]));
      }
      if (supportsTeamDrives != null) {
        _queryParams[$_set]("supportsTeamDrives", JSArrayOfStringL().of([dart.str(supportsTeamDrives)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/copy";
      let _response = this[_requester].request(StringL().as(_url), "POST", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(FileL(), dart.fn(data => new v3.File.fromJson(MapL().as(data)), dynamicToFileL()));
    }
    create(request, opts) {
      let enforceSingleParent = opts && 'enforceSingleParent' in opts ? opts.enforceSingleParent : null;
      let ignoreDefaultVisibility = opts && 'ignoreDefaultVisibility' in opts ? opts.ignoreDefaultVisibility : null;
      let keepRevisionForever = opts && 'keepRevisionForever' in opts ? opts.keepRevisionForever : null;
      let ocrLanguage = opts && 'ocrLanguage' in opts ? opts.ocrLanguage : null;
      let supportsAllDrives = opts && 'supportsAllDrives' in opts ? opts.supportsAllDrives : null;
      let supportsTeamDrives = opts && 'supportsTeamDrives' in opts ? opts.supportsTeamDrives : null;
      let useContentAsIndexableText = opts && 'useContentAsIndexableText' in opts ? opts.useContentAsIndexableText : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let uploadOptions = opts && 'uploadOptions' in opts ? opts.uploadOptions : C0 || CT.C0;
      let uploadMedia = opts && 'uploadMedia' in opts ? opts.uploadMedia : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (enforceSingleParent != null) {
        _queryParams[$_set]("enforceSingleParent", JSArrayOfStringL().of([dart.str(enforceSingleParent)]));
      }
      if (ignoreDefaultVisibility != null) {
        _queryParams[$_set]("ignoreDefaultVisibility", JSArrayOfStringL().of([dart.str(ignoreDefaultVisibility)]));
      }
      if (keepRevisionForever != null) {
        _queryParams[$_set]("keepRevisionForever", JSArrayOfStringL().of([dart.str(keepRevisionForever)]));
      }
      if (ocrLanguage != null) {
        _queryParams[$_set]("ocrLanguage", JSArrayOfStringL().of([ocrLanguage]));
      }
      if (supportsAllDrives != null) {
        _queryParams[$_set]("supportsAllDrives", JSArrayOfStringL().of([dart.str(supportsAllDrives)]));
      }
      if (supportsTeamDrives != null) {
        _queryParams[$_set]("supportsTeamDrives", JSArrayOfStringL().of([dart.str(supportsTeamDrives)]));
      }
      if (useContentAsIndexableText != null) {
        _queryParams[$_set]("useContentAsIndexableText", JSArrayOfStringL().of([dart.str(useContentAsIndexableText)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _uploadMedia = uploadMedia;
      _uploadOptions = uploadOptions;
      if (_uploadMedia == null) {
        _url = "files";
      } else if (ResumableUploadOptionsL().is(_uploadOptions)) {
        _url = "/resumable/upload/drive/v3/files";
      } else {
        _url = "/upload/drive/v3/files";
      }
      let _response = this[_requester].request(StringL().as(_url), "POST", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(FileL(), dart.fn(data => new v3.File.fromJson(MapL().as(data)), dynamicToFileL()));
    }
    delete(fileId, opts) {
      let supportsAllDrives = opts && 'supportsAllDrives' in opts ? opts.supportsAllDrives : null;
      let supportsTeamDrives = opts && 'supportsTeamDrives' in opts ? opts.supportsTeamDrives : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (supportsAllDrives != null) {
        _queryParams[$_set]("supportsAllDrives", JSArrayOfStringL().of([dart.str(supportsAllDrives)]));
      }
      if (supportsTeamDrives != null) {
        _queryParams[$_set]("supportsTeamDrives", JSArrayOfStringL().of([dart.str(supportsTeamDrives)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _downloadOptions = null;
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId)));
      let _response = this[_requester].request(StringL().as(_url), "DELETE", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dart.dynamic, dart.fn(data => null, dynamicToNullN()));
    }
    emptyTrash(opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _downloadOptions = null;
      _url = "files/trash";
      let _response = this[_requester].request(StringL().as(_url), "DELETE", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dart.dynamic, dart.fn(data => null, dynamicToNullN()));
    }
    export(fileId, mimeType, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let downloadOptions = opts && 'downloadOptions' in opts ? opts.downloadOptions : C1 || CT.C1;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (mimeType == null) {
        dart.throw(new core.ArgumentError.new("Parameter mimeType is required."));
      }
      _queryParams[$_set]("mimeType", JSArrayOfStringL().of([mimeType]));
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _downloadOptions = downloadOptions;
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/export";
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      if (_downloadOptions == null || dart.equals(_downloadOptions, requests.DownloadOptions.Metadata)) {
        return _response.then(dart.dynamic, dart.fn(data => null, dynamicToNullN()));
      } else {
        return _response;
      }
    }
    generateIds(opts) {
      let count = opts && 'count' in opts ? opts.count : null;
      let space = opts && 'space' in opts ? opts.space : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (count != null) {
        _queryParams[$_set]("count", JSArrayOfStringL().of([dart.str(count)]));
      }
      if (space != null) {
        _queryParams[$_set]("space", JSArrayOfStringL().of([space]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "files/generateIds";
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(GeneratedIdsL(), dart.fn(data => new v3.GeneratedIds.fromJson(MapL().as(data)), dynamicToGeneratedIdsL()));
    }
    get(fileId, opts) {
      let acknowledgeAbuse = opts && 'acknowledgeAbuse' in opts ? opts.acknowledgeAbuse : null;
      let supportsAllDrives = opts && 'supportsAllDrives' in opts ? opts.supportsAllDrives : null;
      let supportsTeamDrives = opts && 'supportsTeamDrives' in opts ? opts.supportsTeamDrives : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let downloadOptions = opts && 'downloadOptions' in opts ? opts.downloadOptions : C1 || CT.C1;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (acknowledgeAbuse != null) {
        _queryParams[$_set]("acknowledgeAbuse", JSArrayOfStringL().of([dart.str(acknowledgeAbuse)]));
      }
      if (supportsAllDrives != null) {
        _queryParams[$_set]("supportsAllDrives", JSArrayOfStringL().of([dart.str(supportsAllDrives)]));
      }
      if (supportsTeamDrives != null) {
        _queryParams[$_set]("supportsTeamDrives", JSArrayOfStringL().of([dart.str(supportsTeamDrives)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _downloadOptions = downloadOptions;
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId)));
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      if (_downloadOptions == null || dart.equals(_downloadOptions, requests.DownloadOptions.Metadata)) {
        return _response.then(dart.dynamic, dart.fn(data => new v3.File.fromJson(MapL().as(data)), dynamicToFileL()));
      } else {
        return _response;
      }
    }
    list(opts) {
      let corpora = opts && 'corpora' in opts ? opts.corpora : null;
      let corpus = opts && 'corpus' in opts ? opts.corpus : null;
      let driveId = opts && 'driveId' in opts ? opts.driveId : null;
      let includeItemsFromAllDrives = opts && 'includeItemsFromAllDrives' in opts ? opts.includeItemsFromAllDrives : null;
      let includeTeamDriveItems = opts && 'includeTeamDriveItems' in opts ? opts.includeTeamDriveItems : null;
      let orderBy = opts && 'orderBy' in opts ? opts.orderBy : null;
      let pageSize = opts && 'pageSize' in opts ? opts.pageSize : null;
      let pageToken = opts && 'pageToken' in opts ? opts.pageToken : null;
      let q = opts && 'q' in opts ? opts.q : null;
      let spaces = opts && 'spaces' in opts ? opts.spaces : null;
      let supportsAllDrives = opts && 'supportsAllDrives' in opts ? opts.supportsAllDrives : null;
      let supportsTeamDrives = opts && 'supportsTeamDrives' in opts ? opts.supportsTeamDrives : null;
      let teamDriveId = opts && 'teamDriveId' in opts ? opts.teamDriveId : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (corpora != null) {
        _queryParams[$_set]("corpora", JSArrayOfStringL().of([corpora]));
      }
      if (corpus != null) {
        _queryParams[$_set]("corpus", JSArrayOfStringL().of([corpus]));
      }
      if (driveId != null) {
        _queryParams[$_set]("driveId", JSArrayOfStringL().of([driveId]));
      }
      if (includeItemsFromAllDrives != null) {
        _queryParams[$_set]("includeItemsFromAllDrives", JSArrayOfStringL().of([dart.str(includeItemsFromAllDrives)]));
      }
      if (includeTeamDriveItems != null) {
        _queryParams[$_set]("includeTeamDriveItems", JSArrayOfStringL().of([dart.str(includeTeamDriveItems)]));
      }
      if (orderBy != null) {
        _queryParams[$_set]("orderBy", JSArrayOfStringL().of([orderBy]));
      }
      if (pageSize != null) {
        _queryParams[$_set]("pageSize", JSArrayOfStringL().of([dart.str(pageSize)]));
      }
      if (pageToken != null) {
        _queryParams[$_set]("pageToken", JSArrayOfStringL().of([pageToken]));
      }
      if (q != null) {
        _queryParams[$_set]("q", JSArrayOfStringL().of([q]));
      }
      if (spaces != null) {
        _queryParams[$_set]("spaces", JSArrayOfStringL().of([spaces]));
      }
      if (supportsAllDrives != null) {
        _queryParams[$_set]("supportsAllDrives", JSArrayOfStringL().of([dart.str(supportsAllDrives)]));
      }
      if (supportsTeamDrives != null) {
        _queryParams[$_set]("supportsTeamDrives", JSArrayOfStringL().of([dart.str(supportsTeamDrives)]));
      }
      if (teamDriveId != null) {
        _queryParams[$_set]("teamDriveId", JSArrayOfStringL().of([teamDriveId]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "files";
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(FileListL(), dart.fn(data => new v3.FileList.fromJson(MapL().as(data)), dynamicToFileListL()));
    }
    update(request, fileId, opts) {
      let addParents = opts && 'addParents' in opts ? opts.addParents : null;
      let enforceSingleParent = opts && 'enforceSingleParent' in opts ? opts.enforceSingleParent : null;
      let keepRevisionForever = opts && 'keepRevisionForever' in opts ? opts.keepRevisionForever : null;
      let ocrLanguage = opts && 'ocrLanguage' in opts ? opts.ocrLanguage : null;
      let removeParents = opts && 'removeParents' in opts ? opts.removeParents : null;
      let supportsAllDrives = opts && 'supportsAllDrives' in opts ? opts.supportsAllDrives : null;
      let supportsTeamDrives = opts && 'supportsTeamDrives' in opts ? opts.supportsTeamDrives : null;
      let useContentAsIndexableText = opts && 'useContentAsIndexableText' in opts ? opts.useContentAsIndexableText : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let uploadOptions = opts && 'uploadOptions' in opts ? opts.uploadOptions : C0 || CT.C0;
      let uploadMedia = opts && 'uploadMedia' in opts ? opts.uploadMedia : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (addParents != null) {
        _queryParams[$_set]("addParents", JSArrayOfStringL().of([addParents]));
      }
      if (enforceSingleParent != null) {
        _queryParams[$_set]("enforceSingleParent", JSArrayOfStringL().of([dart.str(enforceSingleParent)]));
      }
      if (keepRevisionForever != null) {
        _queryParams[$_set]("keepRevisionForever", JSArrayOfStringL().of([dart.str(keepRevisionForever)]));
      }
      if (ocrLanguage != null) {
        _queryParams[$_set]("ocrLanguage", JSArrayOfStringL().of([ocrLanguage]));
      }
      if (removeParents != null) {
        _queryParams[$_set]("removeParents", JSArrayOfStringL().of([removeParents]));
      }
      if (supportsAllDrives != null) {
        _queryParams[$_set]("supportsAllDrives", JSArrayOfStringL().of([dart.str(supportsAllDrives)]));
      }
      if (supportsTeamDrives != null) {
        _queryParams[$_set]("supportsTeamDrives", JSArrayOfStringL().of([dart.str(supportsTeamDrives)]));
      }
      if (useContentAsIndexableText != null) {
        _queryParams[$_set]("useContentAsIndexableText", JSArrayOfStringL().of([dart.str(useContentAsIndexableText)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _uploadMedia = uploadMedia;
      _uploadOptions = uploadOptions;
      if (_uploadMedia == null) {
        _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId)));
      } else if (ResumableUploadOptionsL().is(_uploadOptions)) {
        _url = "/resumable/upload/drive/v3/files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId)));
      } else {
        _url = "/upload/drive/v3/files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId)));
      }
      let _response = this[_requester].request(StringL().as(_url), "PATCH", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(FileL(), dart.fn(data => new v3.File.fromJson(MapL().as(data)), dynamicToFileL()));
    }
    watch(request, fileId, opts) {
      let acknowledgeAbuse = opts && 'acknowledgeAbuse' in opts ? opts.acknowledgeAbuse : null;
      let supportsAllDrives = opts && 'supportsAllDrives' in opts ? opts.supportsAllDrives : null;
      let supportsTeamDrives = opts && 'supportsTeamDrives' in opts ? opts.supportsTeamDrives : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let downloadOptions = opts && 'downloadOptions' in opts ? opts.downloadOptions : C1 || CT.C1;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (acknowledgeAbuse != null) {
        _queryParams[$_set]("acknowledgeAbuse", JSArrayOfStringL().of([dart.str(acknowledgeAbuse)]));
      }
      if (supportsAllDrives != null) {
        _queryParams[$_set]("supportsAllDrives", JSArrayOfStringL().of([dart.str(supportsAllDrives)]));
      }
      if (supportsTeamDrives != null) {
        _queryParams[$_set]("supportsTeamDrives", JSArrayOfStringL().of([dart.str(supportsTeamDrives)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _downloadOptions = downloadOptions;
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/watch";
      let _response = this[_requester].request(StringL().as(_url), "POST", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      if (_downloadOptions == null || dart.equals(_downloadOptions, requests.DownloadOptions.Metadata)) {
        return _response.then(dart.dynamic, dart.fn(data => new v3.Channel.fromJson(MapL().as(data)), dynamicToChannelL()));
      } else {
        return _response;
      }
    }
  };
  (v3.FilesResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.FilesResourceApi.prototype;
  dart.addTypeTests(v3.FilesResourceApi);
  dart.addTypeCaches(v3.FilesResourceApi);
  dart.setMethodSignature(v3.FilesResourceApi, () => ({
    __proto__: dart.getMethods(v3.FilesResourceApi.__proto__),
    copy: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.File))), [dart.legacy(v3.File), dart.legacy(core.String)], {$fields: dart.legacy(core.String), enforceSingleParent: dart.legacy(core.bool), ignoreDefaultVisibility: dart.legacy(core.bool), keepRevisionForever: dart.legacy(core.bool), ocrLanguage: dart.legacy(core.String), supportsAllDrives: dart.legacy(core.bool), supportsTeamDrives: dart.legacy(core.bool)}, {}),
    create: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.File))), [dart.legacy(v3.File)], {$fields: dart.legacy(core.String), enforceSingleParent: dart.legacy(core.bool), ignoreDefaultVisibility: dart.legacy(core.bool), keepRevisionForever: dart.legacy(core.bool), ocrLanguage: dart.legacy(core.String), supportsAllDrives: dart.legacy(core.bool), supportsTeamDrives: dart.legacy(core.bool), uploadMedia: dart.legacy(requests.Media), uploadOptions: dart.legacy(requests.UploadOptions), useContentAsIndexableText: dart.legacy(core.bool)}, {}),
    delete: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.String)], {$fields: dart.legacy(core.String), supportsAllDrives: dart.legacy(core.bool), supportsTeamDrives: dart.legacy(core.bool)}, {}),
    emptyTrash: dart.fnType(dart.legacy(async.Future), [], {$fields: dart.legacy(core.String)}, {}),
    export: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.String), dart.legacy(core.String)], {$fields: dart.legacy(core.String), downloadOptions: dart.legacy(requests.DownloadOptions)}, {}),
    generateIds: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.GeneratedIds))), [], {$fields: dart.legacy(core.String), count: dart.legacy(core.int), space: dart.legacy(core.String)}, {}),
    get: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.String)], {$fields: dart.legacy(core.String), acknowledgeAbuse: dart.legacy(core.bool), downloadOptions: dart.legacy(requests.DownloadOptions), supportsAllDrives: dart.legacy(core.bool), supportsTeamDrives: dart.legacy(core.bool)}, {}),
    list: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.FileList))), [], {$fields: dart.legacy(core.String), corpora: dart.legacy(core.String), corpus: dart.legacy(core.String), driveId: dart.legacy(core.String), includeItemsFromAllDrives: dart.legacy(core.bool), includeTeamDriveItems: dart.legacy(core.bool), orderBy: dart.legacy(core.String), pageSize: dart.legacy(core.int), pageToken: dart.legacy(core.String), q: dart.legacy(core.String), spaces: dart.legacy(core.String), supportsAllDrives: dart.legacy(core.bool), supportsTeamDrives: dart.legacy(core.bool), teamDriveId: dart.legacy(core.String)}, {}),
    update: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.File))), [dart.legacy(v3.File), dart.legacy(core.String)], {$fields: dart.legacy(core.String), addParents: dart.legacy(core.String), enforceSingleParent: dart.legacy(core.bool), keepRevisionForever: dart.legacy(core.bool), ocrLanguage: dart.legacy(core.String), removeParents: dart.legacy(core.String), supportsAllDrives: dart.legacy(core.bool), supportsTeamDrives: dart.legacy(core.bool), uploadMedia: dart.legacy(requests.Media), uploadOptions: dart.legacy(requests.UploadOptions), useContentAsIndexableText: dart.legacy(core.bool)}, {}),
    watch: dart.fnType(dart.legacy(async.Future), [dart.legacy(v3.Channel), dart.legacy(core.String)], {$fields: dart.legacy(core.String), acknowledgeAbuse: dart.legacy(core.bool), downloadOptions: dart.legacy(requests.DownloadOptions), supportsAllDrives: dart.legacy(core.bool), supportsTeamDrives: dart.legacy(core.bool)}, {})
  }));
  dart.setLibraryUri(v3.FilesResourceApi, L0);
  dart.setFieldSignature(v3.FilesResourceApi, () => ({
    __proto__: dart.getFields(v3.FilesResourceApi.__proto__),
    [_requester]: dart.finalFieldType(dart.legacy(clients.ApiRequester))
  }));
  v3.PermissionsResourceApi = class PermissionsResourceApi extends core.Object {
    create(request, fileId, opts) {
      let emailMessage = opts && 'emailMessage' in opts ? opts.emailMessage : null;
      let enforceSingleParent = opts && 'enforceSingleParent' in opts ? opts.enforceSingleParent : null;
      let moveToNewOwnersRoot = opts && 'moveToNewOwnersRoot' in opts ? opts.moveToNewOwnersRoot : null;
      let sendNotificationEmail = opts && 'sendNotificationEmail' in opts ? opts.sendNotificationEmail : null;
      let supportsAllDrives = opts && 'supportsAllDrives' in opts ? opts.supportsAllDrives : null;
      let supportsTeamDrives = opts && 'supportsTeamDrives' in opts ? opts.supportsTeamDrives : null;
      let transferOwnership = opts && 'transferOwnership' in opts ? opts.transferOwnership : null;
      let useDomainAdminAccess = opts && 'useDomainAdminAccess' in opts ? opts.useDomainAdminAccess : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (emailMessage != null) {
        _queryParams[$_set]("emailMessage", JSArrayOfStringL().of([emailMessage]));
      }
      if (enforceSingleParent != null) {
        _queryParams[$_set]("enforceSingleParent", JSArrayOfStringL().of([dart.str(enforceSingleParent)]));
      }
      if (moveToNewOwnersRoot != null) {
        _queryParams[$_set]("moveToNewOwnersRoot", JSArrayOfStringL().of([dart.str(moveToNewOwnersRoot)]));
      }
      if (sendNotificationEmail != null) {
        _queryParams[$_set]("sendNotificationEmail", JSArrayOfStringL().of([dart.str(sendNotificationEmail)]));
      }
      if (supportsAllDrives != null) {
        _queryParams[$_set]("supportsAllDrives", JSArrayOfStringL().of([dart.str(supportsAllDrives)]));
      }
      if (supportsTeamDrives != null) {
        _queryParams[$_set]("supportsTeamDrives", JSArrayOfStringL().of([dart.str(supportsTeamDrives)]));
      }
      if (transferOwnership != null) {
        _queryParams[$_set]("transferOwnership", JSArrayOfStringL().of([dart.str(transferOwnership)]));
      }
      if (useDomainAdminAccess != null) {
        _queryParams[$_set]("useDomainAdminAccess", JSArrayOfStringL().of([dart.str(useDomainAdminAccess)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/permissions";
      let _response = this[_requester].request(StringL().as(_url), "POST", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(PermissionL(), dart.fn(data => new v3.Permission.fromJson(MapL().as(data)), dynamicToPermissionL()));
    }
    delete(fileId, permissionId, opts) {
      let supportsAllDrives = opts && 'supportsAllDrives' in opts ? opts.supportsAllDrives : null;
      let supportsTeamDrives = opts && 'supportsTeamDrives' in opts ? opts.supportsTeamDrives : null;
      let useDomainAdminAccess = opts && 'useDomainAdminAccess' in opts ? opts.useDomainAdminAccess : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (permissionId == null) {
        dart.throw(new core.ArgumentError.new("Parameter permissionId is required."));
      }
      if (supportsAllDrives != null) {
        _queryParams[$_set]("supportsAllDrives", JSArrayOfStringL().of([dart.str(supportsAllDrives)]));
      }
      if (supportsTeamDrives != null) {
        _queryParams[$_set]("supportsTeamDrives", JSArrayOfStringL().of([dart.str(supportsTeamDrives)]));
      }
      if (useDomainAdminAccess != null) {
        _queryParams[$_set]("useDomainAdminAccess", JSArrayOfStringL().of([dart.str(useDomainAdminAccess)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _downloadOptions = null;
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/permissions/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(permissionId)));
      let _response = this[_requester].request(StringL().as(_url), "DELETE", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dart.dynamic, dart.fn(data => null, dynamicToNullN()));
    }
    get(fileId, permissionId, opts) {
      let supportsAllDrives = opts && 'supportsAllDrives' in opts ? opts.supportsAllDrives : null;
      let supportsTeamDrives = opts && 'supportsTeamDrives' in opts ? opts.supportsTeamDrives : null;
      let useDomainAdminAccess = opts && 'useDomainAdminAccess' in opts ? opts.useDomainAdminAccess : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (permissionId == null) {
        dart.throw(new core.ArgumentError.new("Parameter permissionId is required."));
      }
      if (supportsAllDrives != null) {
        _queryParams[$_set]("supportsAllDrives", JSArrayOfStringL().of([dart.str(supportsAllDrives)]));
      }
      if (supportsTeamDrives != null) {
        _queryParams[$_set]("supportsTeamDrives", JSArrayOfStringL().of([dart.str(supportsTeamDrives)]));
      }
      if (useDomainAdminAccess != null) {
        _queryParams[$_set]("useDomainAdminAccess", JSArrayOfStringL().of([dart.str(useDomainAdminAccess)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/permissions/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(permissionId)));
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(PermissionL(), dart.fn(data => new v3.Permission.fromJson(MapL().as(data)), dynamicToPermissionL()));
    }
    list(fileId, opts) {
      let pageSize = opts && 'pageSize' in opts ? opts.pageSize : null;
      let pageToken = opts && 'pageToken' in opts ? opts.pageToken : null;
      let supportsAllDrives = opts && 'supportsAllDrives' in opts ? opts.supportsAllDrives : null;
      let supportsTeamDrives = opts && 'supportsTeamDrives' in opts ? opts.supportsTeamDrives : null;
      let useDomainAdminAccess = opts && 'useDomainAdminAccess' in opts ? opts.useDomainAdminAccess : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (pageSize != null) {
        _queryParams[$_set]("pageSize", JSArrayOfStringL().of([dart.str(pageSize)]));
      }
      if (pageToken != null) {
        _queryParams[$_set]("pageToken", JSArrayOfStringL().of([pageToken]));
      }
      if (supportsAllDrives != null) {
        _queryParams[$_set]("supportsAllDrives", JSArrayOfStringL().of([dart.str(supportsAllDrives)]));
      }
      if (supportsTeamDrives != null) {
        _queryParams[$_set]("supportsTeamDrives", JSArrayOfStringL().of([dart.str(supportsTeamDrives)]));
      }
      if (useDomainAdminAccess != null) {
        _queryParams[$_set]("useDomainAdminAccess", JSArrayOfStringL().of([dart.str(useDomainAdminAccess)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/permissions";
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(PermissionListL(), dart.fn(data => new v3.PermissionList.fromJson(MapL().as(data)), dynamicToPermissionListL()));
    }
    update(request, fileId, permissionId, opts) {
      let removeExpiration = opts && 'removeExpiration' in opts ? opts.removeExpiration : null;
      let supportsAllDrives = opts && 'supportsAllDrives' in opts ? opts.supportsAllDrives : null;
      let supportsTeamDrives = opts && 'supportsTeamDrives' in opts ? opts.supportsTeamDrives : null;
      let transferOwnership = opts && 'transferOwnership' in opts ? opts.transferOwnership : null;
      let useDomainAdminAccess = opts && 'useDomainAdminAccess' in opts ? opts.useDomainAdminAccess : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (permissionId == null) {
        dart.throw(new core.ArgumentError.new("Parameter permissionId is required."));
      }
      if (removeExpiration != null) {
        _queryParams[$_set]("removeExpiration", JSArrayOfStringL().of([dart.str(removeExpiration)]));
      }
      if (supportsAllDrives != null) {
        _queryParams[$_set]("supportsAllDrives", JSArrayOfStringL().of([dart.str(supportsAllDrives)]));
      }
      if (supportsTeamDrives != null) {
        _queryParams[$_set]("supportsTeamDrives", JSArrayOfStringL().of([dart.str(supportsTeamDrives)]));
      }
      if (transferOwnership != null) {
        _queryParams[$_set]("transferOwnership", JSArrayOfStringL().of([dart.str(transferOwnership)]));
      }
      if (useDomainAdminAccess != null) {
        _queryParams[$_set]("useDomainAdminAccess", JSArrayOfStringL().of([dart.str(useDomainAdminAccess)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/permissions/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(permissionId)));
      let _response = this[_requester].request(StringL().as(_url), "PATCH", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(PermissionL(), dart.fn(data => new v3.Permission.fromJson(MapL().as(data)), dynamicToPermissionL()));
    }
  };
  (v3.PermissionsResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.PermissionsResourceApi.prototype;
  dart.addTypeTests(v3.PermissionsResourceApi);
  dart.addTypeCaches(v3.PermissionsResourceApi);
  dart.setMethodSignature(v3.PermissionsResourceApi, () => ({
    __proto__: dart.getMethods(v3.PermissionsResourceApi.__proto__),
    create: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.Permission))), [dart.legacy(v3.Permission), dart.legacy(core.String)], {$fields: dart.legacy(core.String), emailMessage: dart.legacy(core.String), enforceSingleParent: dart.legacy(core.bool), moveToNewOwnersRoot: dart.legacy(core.bool), sendNotificationEmail: dart.legacy(core.bool), supportsAllDrives: dart.legacy(core.bool), supportsTeamDrives: dart.legacy(core.bool), transferOwnership: dart.legacy(core.bool), useDomainAdminAccess: dart.legacy(core.bool)}, {}),
    delete: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.String), dart.legacy(core.String)], {$fields: dart.legacy(core.String), supportsAllDrives: dart.legacy(core.bool), supportsTeamDrives: dart.legacy(core.bool), useDomainAdminAccess: dart.legacy(core.bool)}, {}),
    get: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.Permission))), [dart.legacy(core.String), dart.legacy(core.String)], {$fields: dart.legacy(core.String), supportsAllDrives: dart.legacy(core.bool), supportsTeamDrives: dart.legacy(core.bool), useDomainAdminAccess: dart.legacy(core.bool)}, {}),
    list: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.PermissionList))), [dart.legacy(core.String)], {$fields: dart.legacy(core.String), pageSize: dart.legacy(core.int), pageToken: dart.legacy(core.String), supportsAllDrives: dart.legacy(core.bool), supportsTeamDrives: dart.legacy(core.bool), useDomainAdminAccess: dart.legacy(core.bool)}, {}),
    update: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.Permission))), [dart.legacy(v3.Permission), dart.legacy(core.String), dart.legacy(core.String)], {$fields: dart.legacy(core.String), removeExpiration: dart.legacy(core.bool), supportsAllDrives: dart.legacy(core.bool), supportsTeamDrives: dart.legacy(core.bool), transferOwnership: dart.legacy(core.bool), useDomainAdminAccess: dart.legacy(core.bool)}, {})
  }));
  dart.setLibraryUri(v3.PermissionsResourceApi, L0);
  dart.setFieldSignature(v3.PermissionsResourceApi, () => ({
    __proto__: dart.getFields(v3.PermissionsResourceApi.__proto__),
    [_requester]: dart.finalFieldType(dart.legacy(clients.ApiRequester))
  }));
  v3.RepliesResourceApi = class RepliesResourceApi extends core.Object {
    create(request, fileId, commentId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (commentId == null) {
        dart.throw(new core.ArgumentError.new("Parameter commentId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/comments/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(commentId))) + "/replies";
      let _response = this[_requester].request(StringL().as(_url), "POST", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(ReplyL(), dart.fn(data => new v3.Reply.fromJson(MapL().as(data)), dynamicToReplyL()));
    }
    delete(fileId, commentId, replyId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (commentId == null) {
        dart.throw(new core.ArgumentError.new("Parameter commentId is required."));
      }
      if (replyId == null) {
        dart.throw(new core.ArgumentError.new("Parameter replyId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _downloadOptions = null;
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/comments/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(commentId))) + "/replies/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(replyId)));
      let _response = this[_requester].request(StringL().as(_url), "DELETE", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dart.dynamic, dart.fn(data => null, dynamicToNullN()));
    }
    get(fileId, commentId, replyId, opts) {
      let includeDeleted = opts && 'includeDeleted' in opts ? opts.includeDeleted : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (commentId == null) {
        dart.throw(new core.ArgumentError.new("Parameter commentId is required."));
      }
      if (replyId == null) {
        dart.throw(new core.ArgumentError.new("Parameter replyId is required."));
      }
      if (includeDeleted != null) {
        _queryParams[$_set]("includeDeleted", JSArrayOfStringL().of([dart.str(includeDeleted)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/comments/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(commentId))) + "/replies/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(replyId)));
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(ReplyL(), dart.fn(data => new v3.Reply.fromJson(MapL().as(data)), dynamicToReplyL()));
    }
    list(fileId, commentId, opts) {
      let includeDeleted = opts && 'includeDeleted' in opts ? opts.includeDeleted : null;
      let pageSize = opts && 'pageSize' in opts ? opts.pageSize : null;
      let pageToken = opts && 'pageToken' in opts ? opts.pageToken : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (commentId == null) {
        dart.throw(new core.ArgumentError.new("Parameter commentId is required."));
      }
      if (includeDeleted != null) {
        _queryParams[$_set]("includeDeleted", JSArrayOfStringL().of([dart.str(includeDeleted)]));
      }
      if (pageSize != null) {
        _queryParams[$_set]("pageSize", JSArrayOfStringL().of([dart.str(pageSize)]));
      }
      if (pageToken != null) {
        _queryParams[$_set]("pageToken", JSArrayOfStringL().of([pageToken]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/comments/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(commentId))) + "/replies";
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(ReplyListL(), dart.fn(data => new v3.ReplyList.fromJson(MapL().as(data)), dynamicToReplyListL()));
    }
    update(request, fileId, commentId, replyId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (commentId == null) {
        dart.throw(new core.ArgumentError.new("Parameter commentId is required."));
      }
      if (replyId == null) {
        dart.throw(new core.ArgumentError.new("Parameter replyId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/comments/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(commentId))) + "/replies/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(replyId)));
      let _response = this[_requester].request(StringL().as(_url), "PATCH", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(ReplyL(), dart.fn(data => new v3.Reply.fromJson(MapL().as(data)), dynamicToReplyL()));
    }
  };
  (v3.RepliesResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.RepliesResourceApi.prototype;
  dart.addTypeTests(v3.RepliesResourceApi);
  dart.addTypeCaches(v3.RepliesResourceApi);
  dart.setMethodSignature(v3.RepliesResourceApi, () => ({
    __proto__: dart.getMethods(v3.RepliesResourceApi.__proto__),
    create: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.Reply))), [dart.legacy(v3.Reply), dart.legacy(core.String), dart.legacy(core.String)], {$fields: dart.legacy(core.String)}, {}),
    delete: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.String)], {$fields: dart.legacy(core.String)}, {}),
    get: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.Reply))), [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.String)], {$fields: dart.legacy(core.String), includeDeleted: dart.legacy(core.bool)}, {}),
    list: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.ReplyList))), [dart.legacy(core.String), dart.legacy(core.String)], {$fields: dart.legacy(core.String), includeDeleted: dart.legacy(core.bool), pageSize: dart.legacy(core.int), pageToken: dart.legacy(core.String)}, {}),
    update: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.Reply))), [dart.legacy(v3.Reply), dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.String)], {$fields: dart.legacy(core.String)}, {})
  }));
  dart.setLibraryUri(v3.RepliesResourceApi, L0);
  dart.setFieldSignature(v3.RepliesResourceApi, () => ({
    __proto__: dart.getFields(v3.RepliesResourceApi.__proto__),
    [_requester]: dart.finalFieldType(dart.legacy(clients.ApiRequester))
  }));
  v3.RevisionsResourceApi = class RevisionsResourceApi extends core.Object {
    delete(fileId, revisionId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (revisionId == null) {
        dart.throw(new core.ArgumentError.new("Parameter revisionId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _downloadOptions = null;
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/revisions/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(revisionId)));
      let _response = this[_requester].request(StringL().as(_url), "DELETE", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dart.dynamic, dart.fn(data => null, dynamicToNullN()));
    }
    get(fileId, revisionId, opts) {
      let acknowledgeAbuse = opts && 'acknowledgeAbuse' in opts ? opts.acknowledgeAbuse : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let downloadOptions = opts && 'downloadOptions' in opts ? opts.downloadOptions : C1 || CT.C1;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (revisionId == null) {
        dart.throw(new core.ArgumentError.new("Parameter revisionId is required."));
      }
      if (acknowledgeAbuse != null) {
        _queryParams[$_set]("acknowledgeAbuse", JSArrayOfStringL().of([dart.str(acknowledgeAbuse)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _downloadOptions = downloadOptions;
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/revisions/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(revisionId)));
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      if (_downloadOptions == null || dart.equals(_downloadOptions, requests.DownloadOptions.Metadata)) {
        return _response.then(dart.dynamic, dart.fn(data => new v3.Revision.fromJson(MapL().as(data)), dynamicToRevisionL()));
      } else {
        return _response;
      }
    }
    list(fileId, opts) {
      let pageSize = opts && 'pageSize' in opts ? opts.pageSize : null;
      let pageToken = opts && 'pageToken' in opts ? opts.pageToken : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (pageSize != null) {
        _queryParams[$_set]("pageSize", JSArrayOfStringL().of([dart.str(pageSize)]));
      }
      if (pageToken != null) {
        _queryParams[$_set]("pageToken", JSArrayOfStringL().of([pageToken]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/revisions";
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(RevisionListL(), dart.fn(data => new v3.RevisionList.fromJson(MapL().as(data)), dynamicToRevisionListL()));
    }
    update(request, fileId, revisionId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (fileId == null) {
        dart.throw(new core.ArgumentError.new("Parameter fileId is required."));
      }
      if (revisionId == null) {
        dart.throw(new core.ArgumentError.new("Parameter revisionId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "files/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(fileId))) + "/revisions/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(revisionId)));
      let _response = this[_requester].request(StringL().as(_url), "PATCH", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(RevisionL(), dart.fn(data => new v3.Revision.fromJson(MapL().as(data)), dynamicToRevisionL()));
    }
  };
  (v3.RevisionsResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.RevisionsResourceApi.prototype;
  dart.addTypeTests(v3.RevisionsResourceApi);
  dart.addTypeCaches(v3.RevisionsResourceApi);
  dart.setMethodSignature(v3.RevisionsResourceApi, () => ({
    __proto__: dart.getMethods(v3.RevisionsResourceApi.__proto__),
    delete: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.String), dart.legacy(core.String)], {$fields: dart.legacy(core.String)}, {}),
    get: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.String), dart.legacy(core.String)], {$fields: dart.legacy(core.String), acknowledgeAbuse: dart.legacy(core.bool), downloadOptions: dart.legacy(requests.DownloadOptions)}, {}),
    list: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.RevisionList))), [dart.legacy(core.String)], {$fields: dart.legacy(core.String), pageSize: dart.legacy(core.int), pageToken: dart.legacy(core.String)}, {}),
    update: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.Revision))), [dart.legacy(v3.Revision), dart.legacy(core.String), dart.legacy(core.String)], {$fields: dart.legacy(core.String)}, {})
  }));
  dart.setLibraryUri(v3.RevisionsResourceApi, L0);
  dart.setFieldSignature(v3.RevisionsResourceApi, () => ({
    __proto__: dart.getFields(v3.RevisionsResourceApi.__proto__),
    [_requester]: dart.finalFieldType(dart.legacy(clients.ApiRequester))
  }));
  v3.TeamdrivesResourceApi = class TeamdrivesResourceApi extends core.Object {
    create(request, requestId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (requestId == null) {
        dart.throw(new core.ArgumentError.new("Parameter requestId is required."));
      }
      _queryParams[$_set]("requestId", JSArrayOfStringL().of([requestId]));
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "teamdrives";
      let _response = this[_requester].request(StringL().as(_url), "POST", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(TeamDriveL(), dart.fn(data => new v3.TeamDrive.fromJson(MapL().as(data)), dynamicToTeamDriveL()));
    }
    delete(teamDriveId, opts) {
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (teamDriveId == null) {
        dart.throw(new core.ArgumentError.new("Parameter teamDriveId is required."));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _downloadOptions = null;
      _url = "teamdrives/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(teamDriveId)));
      let _response = this[_requester].request(StringL().as(_url), "DELETE", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dart.dynamic, dart.fn(data => null, dynamicToNullN()));
    }
    get(teamDriveId, opts) {
      let useDomainAdminAccess = opts && 'useDomainAdminAccess' in opts ? opts.useDomainAdminAccess : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (teamDriveId == null) {
        dart.throw(new core.ArgumentError.new("Parameter teamDriveId is required."));
      }
      if (useDomainAdminAccess != null) {
        _queryParams[$_set]("useDomainAdminAccess", JSArrayOfStringL().of([dart.str(useDomainAdminAccess)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "teamdrives/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(teamDriveId)));
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(TeamDriveL(), dart.fn(data => new v3.TeamDrive.fromJson(MapL().as(data)), dynamicToTeamDriveL()));
    }
    list(opts) {
      let pageSize = opts && 'pageSize' in opts ? opts.pageSize : null;
      let pageToken = opts && 'pageToken' in opts ? opts.pageToken : null;
      let q = opts && 'q' in opts ? opts.q : null;
      let useDomainAdminAccess = opts && 'useDomainAdminAccess' in opts ? opts.useDomainAdminAccess : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (pageSize != null) {
        _queryParams[$_set]("pageSize", JSArrayOfStringL().of([dart.str(pageSize)]));
      }
      if (pageToken != null) {
        _queryParams[$_set]("pageToken", JSArrayOfStringL().of([pageToken]));
      }
      if (q != null) {
        _queryParams[$_set]("q", JSArrayOfStringL().of([q]));
      }
      if (useDomainAdminAccess != null) {
        _queryParams[$_set]("useDomainAdminAccess", JSArrayOfStringL().of([dart.str(useDomainAdminAccess)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "teamdrives";
      let _response = this[_requester].request(StringL().as(_url), "GET", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(TeamDriveListL(), dart.fn(data => new v3.TeamDriveList.fromJson(MapL().as(data)), dynamicToTeamDriveListL()));
    }
    update(request, teamDriveId, opts) {
      let useDomainAdminAccess = opts && 'useDomainAdminAccess' in opts ? opts.useDomainAdminAccess : null;
      let $36fields = opts && '$fields' in opts ? opts.$fields : null;
      let _url = null;
      let _queryParams = new (LinkedMapOfStringL$ListLOfStringL()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      if (teamDriveId == null) {
        dart.throw(new core.ArgumentError.new("Parameter teamDriveId is required."));
      }
      if (useDomainAdminAccess != null) {
        _queryParams[$_set]("useDomainAdminAccess", JSArrayOfStringL().of([dart.str(useDomainAdminAccess)]));
      }
      if ($36fields != null) {
        _queryParams[$_set]("fields", JSArrayOfStringL().of([$36fields]));
      }
      _url = "teamdrives/" + dart.notNull(clients.Escaper.ecapeVariable(dart.str(teamDriveId)));
      let _response = this[_requester].request(StringL().as(_url), "PATCH", {body: StringL().as(_body), queryParams: _queryParams, uploadOptions: UploadOptionsL().as(_uploadOptions), uploadMedia: MediaL().as(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(TeamDriveL(), dart.fn(data => new v3.TeamDrive.fromJson(MapL().as(data)), dynamicToTeamDriveL()));
    }
  };
  (v3.TeamdrivesResourceApi.new = function(client) {
    this[_requester] = client;
    ;
  }).prototype = v3.TeamdrivesResourceApi.prototype;
  dart.addTypeTests(v3.TeamdrivesResourceApi);
  dart.addTypeCaches(v3.TeamdrivesResourceApi);
  dart.setMethodSignature(v3.TeamdrivesResourceApi, () => ({
    __proto__: dart.getMethods(v3.TeamdrivesResourceApi.__proto__),
    create: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.TeamDrive))), [dart.legacy(v3.TeamDrive), dart.legacy(core.String)], {$fields: dart.legacy(core.String)}, {}),
    delete: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.String)], {$fields: dart.legacy(core.String)}, {}),
    get: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.TeamDrive))), [dart.legacy(core.String)], {$fields: dart.legacy(core.String), useDomainAdminAccess: dart.legacy(core.bool)}, {}),
    list: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.TeamDriveList))), [], {$fields: dart.legacy(core.String), pageSize: dart.legacy(core.int), pageToken: dart.legacy(core.String), q: dart.legacy(core.String), useDomainAdminAccess: dart.legacy(core.bool)}, {}),
    update: dart.fnType(dart.legacy(async.Future$(dart.legacy(v3.TeamDrive))), [dart.legacy(v3.TeamDrive), dart.legacy(core.String)], {$fields: dart.legacy(core.String), useDomainAdminAccess: dart.legacy(core.bool)}, {})
  }));
  dart.setLibraryUri(v3.TeamdrivesResourceApi, L0);
  dart.setFieldSignature(v3.TeamdrivesResourceApi, () => ({
    __proto__: dart.getFields(v3.TeamdrivesResourceApi.__proto__),
    [_requester]: dart.finalFieldType(dart.legacy(clients.ApiRequester))
  }));
  var backgroundImageLink = dart.privateName(v3, "AboutDriveThemes.backgroundImageLink");
  var colorRgb = dart.privateName(v3, "AboutDriveThemes.colorRgb");
  var id = dart.privateName(v3, "AboutDriveThemes.id");
  v3.AboutDriveThemes = class AboutDriveThemes extends core.Object {
    get backgroundImageLink() {
      return this[backgroundImageLink];
    }
    set backgroundImageLink(value) {
      this[backgroundImageLink] = value;
    }
    get colorRgb() {
      return this[colorRgb];
    }
    set colorRgb(value) {
      this[colorRgb] = value;
    }
    get id() {
      return this[id];
    }
    set id(value) {
      this[id] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.backgroundImageLink != null) {
        _json[$_set]("backgroundImageLink", this.backgroundImageLink);
      }
      if (this.colorRgb != null) {
        _json[$_set]("colorRgb", this.colorRgb);
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      return _json;
    }
  };
  (v3.AboutDriveThemes.new = function() {
    this[backgroundImageLink] = null;
    this[colorRgb] = null;
    this[id] = null;
    ;
  }).prototype = v3.AboutDriveThemes.prototype;
  (v3.AboutDriveThemes.fromJson = function(_json) {
    this[backgroundImageLink] = null;
    this[colorRgb] = null;
    this[id] = null;
    if (dart.test(_json[$containsKey]("backgroundImageLink"))) {
      this.backgroundImageLink = StringL().as(_json[$_get]("backgroundImageLink"));
    }
    if (dart.test(_json[$containsKey]("colorRgb"))) {
      this.colorRgb = StringL().as(_json[$_get]("colorRgb"));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = StringL().as(_json[$_get]("id"));
    }
  }).prototype = v3.AboutDriveThemes.prototype;
  dart.addTypeTests(v3.AboutDriveThemes);
  dart.addTypeCaches(v3.AboutDriveThemes);
  dart.setMethodSignature(v3.AboutDriveThemes, () => ({
    __proto__: dart.getMethods(v3.AboutDriveThemes.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.AboutDriveThemes, L0);
  dart.setFieldSignature(v3.AboutDriveThemes, () => ({
    __proto__: dart.getFields(v3.AboutDriveThemes.__proto__),
    backgroundImageLink: dart.fieldType(dart.legacy(core.String)),
    colorRgb: dart.fieldType(dart.legacy(core.String)),
    id: dart.fieldType(dart.legacy(core.String))
  }));
  var limit = dart.privateName(v3, "AboutStorageQuota.limit");
  var usage = dart.privateName(v3, "AboutStorageQuota.usage");
  var usageInDrive = dart.privateName(v3, "AboutStorageQuota.usageInDrive");
  var usageInDriveTrash = dart.privateName(v3, "AboutStorageQuota.usageInDriveTrash");
  v3.AboutStorageQuota = class AboutStorageQuota extends core.Object {
    get limit() {
      return this[limit];
    }
    set limit(value) {
      this[limit] = value;
    }
    get usage() {
      return this[usage];
    }
    set usage(value) {
      this[usage] = value;
    }
    get usageInDrive() {
      return this[usageInDrive];
    }
    set usageInDrive(value) {
      this[usageInDrive] = value;
    }
    get usageInDriveTrash() {
      return this[usageInDriveTrash];
    }
    set usageInDriveTrash(value) {
      this[usageInDriveTrash] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.limit != null) {
        _json[$_set]("limit", this.limit);
      }
      if (this.usage != null) {
        _json[$_set]("usage", this.usage);
      }
      if (this.usageInDrive != null) {
        _json[$_set]("usageInDrive", this.usageInDrive);
      }
      if (this.usageInDriveTrash != null) {
        _json[$_set]("usageInDriveTrash", this.usageInDriveTrash);
      }
      return _json;
    }
  };
  (v3.AboutStorageQuota.new = function() {
    this[limit] = null;
    this[usage] = null;
    this[usageInDrive] = null;
    this[usageInDriveTrash] = null;
    ;
  }).prototype = v3.AboutStorageQuota.prototype;
  (v3.AboutStorageQuota.fromJson = function(_json) {
    this[limit] = null;
    this[usage] = null;
    this[usageInDrive] = null;
    this[usageInDriveTrash] = null;
    if (dart.test(_json[$containsKey]("limit"))) {
      this.limit = StringL().as(_json[$_get]("limit"));
    }
    if (dart.test(_json[$containsKey]("usage"))) {
      this.usage = StringL().as(_json[$_get]("usage"));
    }
    if (dart.test(_json[$containsKey]("usageInDrive"))) {
      this.usageInDrive = StringL().as(_json[$_get]("usageInDrive"));
    }
    if (dart.test(_json[$containsKey]("usageInDriveTrash"))) {
      this.usageInDriveTrash = StringL().as(_json[$_get]("usageInDriveTrash"));
    }
  }).prototype = v3.AboutStorageQuota.prototype;
  dart.addTypeTests(v3.AboutStorageQuota);
  dart.addTypeCaches(v3.AboutStorageQuota);
  dart.setMethodSignature(v3.AboutStorageQuota, () => ({
    __proto__: dart.getMethods(v3.AboutStorageQuota.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.AboutStorageQuota, L0);
  dart.setFieldSignature(v3.AboutStorageQuota, () => ({
    __proto__: dart.getFields(v3.AboutStorageQuota.__proto__),
    limit: dart.fieldType(dart.legacy(core.String)),
    usage: dart.fieldType(dart.legacy(core.String)),
    usageInDrive: dart.fieldType(dart.legacy(core.String)),
    usageInDriveTrash: dart.fieldType(dart.legacy(core.String))
  }));
  var backgroundImageLink$ = dart.privateName(v3, "AboutTeamDriveThemes.backgroundImageLink");
  var colorRgb$ = dart.privateName(v3, "AboutTeamDriveThemes.colorRgb");
  var id$ = dart.privateName(v3, "AboutTeamDriveThemes.id");
  v3.AboutTeamDriveThemes = class AboutTeamDriveThemes extends core.Object {
    get backgroundImageLink() {
      return this[backgroundImageLink$];
    }
    set backgroundImageLink(value) {
      this[backgroundImageLink$] = value;
    }
    get colorRgb() {
      return this[colorRgb$];
    }
    set colorRgb(value) {
      this[colorRgb$] = value;
    }
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.backgroundImageLink != null) {
        _json[$_set]("backgroundImageLink", this.backgroundImageLink);
      }
      if (this.colorRgb != null) {
        _json[$_set]("colorRgb", this.colorRgb);
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      return _json;
    }
  };
  (v3.AboutTeamDriveThemes.new = function() {
    this[backgroundImageLink$] = null;
    this[colorRgb$] = null;
    this[id$] = null;
    ;
  }).prototype = v3.AboutTeamDriveThemes.prototype;
  (v3.AboutTeamDriveThemes.fromJson = function(_json) {
    this[backgroundImageLink$] = null;
    this[colorRgb$] = null;
    this[id$] = null;
    if (dart.test(_json[$containsKey]("backgroundImageLink"))) {
      this.backgroundImageLink = StringL().as(_json[$_get]("backgroundImageLink"));
    }
    if (dart.test(_json[$containsKey]("colorRgb"))) {
      this.colorRgb = StringL().as(_json[$_get]("colorRgb"));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = StringL().as(_json[$_get]("id"));
    }
  }).prototype = v3.AboutTeamDriveThemes.prototype;
  dart.addTypeTests(v3.AboutTeamDriveThemes);
  dart.addTypeCaches(v3.AboutTeamDriveThemes);
  dart.setMethodSignature(v3.AboutTeamDriveThemes, () => ({
    __proto__: dart.getMethods(v3.AboutTeamDriveThemes.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.AboutTeamDriveThemes, L0);
  dart.setFieldSignature(v3.AboutTeamDriveThemes, () => ({
    __proto__: dart.getFields(v3.AboutTeamDriveThemes.__proto__),
    backgroundImageLink: dart.fieldType(dart.legacy(core.String)),
    colorRgb: dart.fieldType(dart.legacy(core.String)),
    id: dart.fieldType(dart.legacy(core.String))
  }));
  var appInstalled = dart.privateName(v3, "About.appInstalled");
  var canCreateDrives = dart.privateName(v3, "About.canCreateDrives");
  var canCreateTeamDrives = dart.privateName(v3, "About.canCreateTeamDrives");
  var driveThemes = dart.privateName(v3, "About.driveThemes");
  var exportFormats = dart.privateName(v3, "About.exportFormats");
  var folderColorPalette = dart.privateName(v3, "About.folderColorPalette");
  var importFormats = dart.privateName(v3, "About.importFormats");
  var kind = dart.privateName(v3, "About.kind");
  var maxImportSizes = dart.privateName(v3, "About.maxImportSizes");
  var maxUploadSize = dart.privateName(v3, "About.maxUploadSize");
  var storageQuota = dart.privateName(v3, "About.storageQuota");
  var teamDriveThemes = dart.privateName(v3, "About.teamDriveThemes");
  var user = dart.privateName(v3, "About.user");
  v3.About = class About extends core.Object {
    get appInstalled() {
      return this[appInstalled];
    }
    set appInstalled(value) {
      this[appInstalled] = value;
    }
    get canCreateDrives() {
      return this[canCreateDrives];
    }
    set canCreateDrives(value) {
      this[canCreateDrives] = value;
    }
    get canCreateTeamDrives() {
      return this[canCreateTeamDrives];
    }
    set canCreateTeamDrives(value) {
      this[canCreateTeamDrives] = value;
    }
    get driveThemes() {
      return this[driveThemes];
    }
    set driveThemes(value) {
      this[driveThemes] = value;
    }
    get exportFormats() {
      return this[exportFormats];
    }
    set exportFormats(value) {
      this[exportFormats] = value;
    }
    get folderColorPalette() {
      return this[folderColorPalette];
    }
    set folderColorPalette(value) {
      this[folderColorPalette] = value;
    }
    get importFormats() {
      return this[importFormats];
    }
    set importFormats(value) {
      this[importFormats] = value;
    }
    get kind() {
      return this[kind];
    }
    set kind(value) {
      this[kind] = value;
    }
    get maxImportSizes() {
      return this[maxImportSizes];
    }
    set maxImportSizes(value) {
      this[maxImportSizes] = value;
    }
    get maxUploadSize() {
      return this[maxUploadSize];
    }
    set maxUploadSize(value) {
      this[maxUploadSize] = value;
    }
    get storageQuota() {
      return this[storageQuota];
    }
    set storageQuota(value) {
      this[storageQuota] = value;
    }
    get teamDriveThemes() {
      return this[teamDriveThemes];
    }
    set teamDriveThemes(value) {
      this[teamDriveThemes] = value;
    }
    get user() {
      return this[user];
    }
    set user(value) {
      this[user] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.appInstalled != null) {
        _json[$_set]("appInstalled", this.appInstalled);
      }
      if (this.canCreateDrives != null) {
        _json[$_set]("canCreateDrives", this.canCreateDrives);
      }
      if (this.canCreateTeamDrives != null) {
        _json[$_set]("canCreateTeamDrives", this.canCreateTeamDrives);
      }
      if (this.driveThemes != null) {
        _json[$_set]("driveThemes", this.driveThemes[$map](MapLOfStringL$ObjectL(), dart.fn(value => value.toJson(), AboutDriveThemesLToMapLOfStringL$ObjectL()))[$toList]());
      }
      if (this.exportFormats != null) {
        _json[$_set]("exportFormats", this.exportFormats);
      }
      if (this.folderColorPalette != null) {
        _json[$_set]("folderColorPalette", this.folderColorPalette);
      }
      if (this.importFormats != null) {
        _json[$_set]("importFormats", this.importFormats);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.maxImportSizes != null) {
        _json[$_set]("maxImportSizes", this.maxImportSizes);
      }
      if (this.maxUploadSize != null) {
        _json[$_set]("maxUploadSize", this.maxUploadSize);
      }
      if (this.storageQuota != null) {
        _json[$_set]("storageQuota", this.storageQuota.toJson());
      }
      if (this.teamDriveThemes != null) {
        _json[$_set]("teamDriveThemes", this.teamDriveThemes[$map](MapLOfStringL$ObjectL(), dart.fn(value => value.toJson(), AboutTeamDriveThemesLToMapLOfStringL$ObjectL()))[$toList]());
      }
      if (this.user != null) {
        _json[$_set]("user", this.user.toJson());
      }
      return _json;
    }
  };
  (v3.About.new = function() {
    this[appInstalled] = null;
    this[canCreateDrives] = null;
    this[canCreateTeamDrives] = null;
    this[driveThemes] = null;
    this[exportFormats] = null;
    this[folderColorPalette] = null;
    this[importFormats] = null;
    this[kind] = null;
    this[maxImportSizes] = null;
    this[maxUploadSize] = null;
    this[storageQuota] = null;
    this[teamDriveThemes] = null;
    this[user] = null;
    ;
  }).prototype = v3.About.prototype;
  (v3.About.fromJson = function(_json) {
    this[appInstalled] = null;
    this[canCreateDrives] = null;
    this[canCreateTeamDrives] = null;
    this[driveThemes] = null;
    this[exportFormats] = null;
    this[folderColorPalette] = null;
    this[importFormats] = null;
    this[kind] = null;
    this[maxImportSizes] = null;
    this[maxUploadSize] = null;
    this[storageQuota] = null;
    this[teamDriveThemes] = null;
    this[user] = null;
    if (dart.test(_json[$containsKey]("appInstalled"))) {
      this.appInstalled = boolL().as(_json[$_get]("appInstalled"));
    }
    if (dart.test(_json[$containsKey]("canCreateDrives"))) {
      this.canCreateDrives = boolL().as(_json[$_get]("canCreateDrives"));
    }
    if (dart.test(_json[$containsKey]("canCreateTeamDrives"))) {
      this.canCreateTeamDrives = boolL().as(_json[$_get]("canCreateTeamDrives"));
    }
    if (dart.test(_json[$containsKey]("driveThemes"))) {
      this.driveThemes = ListL().as(_json[$_get]("driveThemes"))[$map](AboutDriveThemesL(), dart.fn(value => new v3.AboutDriveThemes.fromJson(MapL().as(value)), dynamicToAboutDriveThemesL()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("exportFormats"))) {
      this.exportFormats = clients.mapMap(ListL(), ListLOfStringL(), MapLOfStringL$ListL().as(dart.dgsend(_json[$_get]("exportFormats"), [StringL(), ListL()], 'cast', [])), dart.fn(item => item[$cast](StringL()), ListLToListLOfStringL()));
    }
    if (dart.test(_json[$containsKey]("folderColorPalette"))) {
      this.folderColorPalette = ListL().as(_json[$_get]("folderColorPalette"))[$cast](StringL());
    }
    if (dart.test(_json[$containsKey]("importFormats"))) {
      this.importFormats = clients.mapMap(ListL(), ListLOfStringL(), MapLOfStringL$ListL().as(dart.dgsend(_json[$_get]("importFormats"), [StringL(), ListL()], 'cast', [])), dart.fn(item => item[$cast](StringL()), ListLToListLOfStringL()));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("maxImportSizes"))) {
      this.maxImportSizes = MapL().as(_json[$_get]("maxImportSizes"))[$cast](StringL(), StringL());
    }
    if (dart.test(_json[$containsKey]("maxUploadSize"))) {
      this.maxUploadSize = StringL().as(_json[$_get]("maxUploadSize"));
    }
    if (dart.test(_json[$containsKey]("storageQuota"))) {
      this.storageQuota = new v3.AboutStorageQuota.fromJson(MapL().as(_json[$_get]("storageQuota")));
    }
    if (dart.test(_json[$containsKey]("teamDriveThemes"))) {
      this.teamDriveThemes = ListL().as(_json[$_get]("teamDriveThemes"))[$map](AboutTeamDriveThemesL(), dart.fn(value => new v3.AboutTeamDriveThemes.fromJson(MapL().as(value)), dynamicToAboutTeamDriveThemesL()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("user"))) {
      this.user = new v3.User.fromJson(MapL().as(_json[$_get]("user")));
    }
  }).prototype = v3.About.prototype;
  dart.addTypeTests(v3.About);
  dart.addTypeCaches(v3.About);
  dart.setMethodSignature(v3.About, () => ({
    __proto__: dart.getMethods(v3.About.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.About, L0);
  dart.setFieldSignature(v3.About, () => ({
    __proto__: dart.getFields(v3.About.__proto__),
    appInstalled: dart.fieldType(dart.legacy(core.bool)),
    canCreateDrives: dart.fieldType(dart.legacy(core.bool)),
    canCreateTeamDrives: dart.fieldType(dart.legacy(core.bool)),
    driveThemes: dart.fieldType(dart.legacy(core.List$(dart.legacy(v3.AboutDriveThemes)))),
    exportFormats: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(core.String)))))),
    folderColorPalette: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    importFormats: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(core.String)))))),
    kind: dart.fieldType(dart.legacy(core.String)),
    maxImportSizes: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))),
    maxUploadSize: dart.fieldType(dart.legacy(core.String)),
    storageQuota: dart.fieldType(dart.legacy(v3.AboutStorageQuota)),
    teamDriveThemes: dart.fieldType(dart.legacy(core.List$(dart.legacy(v3.AboutTeamDriveThemes)))),
    user: dart.fieldType(dart.legacy(v3.User))
  }));
  var changeType = dart.privateName(v3, "Change.changeType");
  var drive = dart.privateName(v3, "Change.drive");
  var driveId = dart.privateName(v3, "Change.driveId");
  var file = dart.privateName(v3, "Change.file");
  var fileId = dart.privateName(v3, "Change.fileId");
  var kind$ = dart.privateName(v3, "Change.kind");
  var removed = dart.privateName(v3, "Change.removed");
  var teamDrive = dart.privateName(v3, "Change.teamDrive");
  var teamDriveId = dart.privateName(v3, "Change.teamDriveId");
  var time = dart.privateName(v3, "Change.time");
  var type = dart.privateName(v3, "Change.type");
  v3.Change = class Change extends core.Object {
    get changeType() {
      return this[changeType];
    }
    set changeType(value) {
      this[changeType] = value;
    }
    get drive() {
      return this[drive];
    }
    set drive(value) {
      this[drive] = value;
    }
    get driveId() {
      return this[driveId];
    }
    set driveId(value) {
      this[driveId] = value;
    }
    get file() {
      return this[file];
    }
    set file(value) {
      this[file] = value;
    }
    get fileId() {
      return this[fileId];
    }
    set fileId(value) {
      this[fileId] = value;
    }
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      this[kind$] = value;
    }
    get removed() {
      return this[removed];
    }
    set removed(value) {
      this[removed] = value;
    }
    get teamDrive() {
      return this[teamDrive];
    }
    set teamDrive(value) {
      this[teamDrive] = value;
    }
    get teamDriveId() {
      return this[teamDriveId];
    }
    set teamDriveId(value) {
      this[teamDriveId] = value;
    }
    get time() {
      return this[time];
    }
    set time(value) {
      this[time] = value;
    }
    get type() {
      return this[type];
    }
    set type(value) {
      this[type] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.changeType != null) {
        _json[$_set]("changeType", this.changeType);
      }
      if (this.drive != null) {
        _json[$_set]("drive", this.drive.toJson());
      }
      if (this.driveId != null) {
        _json[$_set]("driveId", this.driveId);
      }
      if (this.file != null) {
        _json[$_set]("file", this.file.toJson());
      }
      if (this.fileId != null) {
        _json[$_set]("fileId", this.fileId);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.removed != null) {
        _json[$_set]("removed", this.removed);
      }
      if (this.teamDrive != null) {
        _json[$_set]("teamDrive", this.teamDrive.toJson());
      }
      if (this.teamDriveId != null) {
        _json[$_set]("teamDriveId", this.teamDriveId);
      }
      if (this.time != null) {
        _json[$_set]("time", this.time.toIso8601String());
      }
      if (this.type != null) {
        _json[$_set]("type", this.type);
      }
      return _json;
    }
  };
  (v3.Change.new = function() {
    this[changeType] = null;
    this[drive] = null;
    this[driveId] = null;
    this[file] = null;
    this[fileId] = null;
    this[kind$] = null;
    this[removed] = null;
    this[teamDrive] = null;
    this[teamDriveId] = null;
    this[time] = null;
    this[type] = null;
    ;
  }).prototype = v3.Change.prototype;
  (v3.Change.fromJson = function(_json) {
    this[changeType] = null;
    this[drive] = null;
    this[driveId] = null;
    this[file] = null;
    this[fileId] = null;
    this[kind$] = null;
    this[removed] = null;
    this[teamDrive] = null;
    this[teamDriveId] = null;
    this[time] = null;
    this[type] = null;
    if (dart.test(_json[$containsKey]("changeType"))) {
      this.changeType = StringL().as(_json[$_get]("changeType"));
    }
    if (dart.test(_json[$containsKey]("drive"))) {
      this.drive = new v3.Drive.fromJson(MapL().as(_json[$_get]("drive")));
    }
    if (dart.test(_json[$containsKey]("driveId"))) {
      this.driveId = StringL().as(_json[$_get]("driveId"));
    }
    if (dart.test(_json[$containsKey]("file"))) {
      this.file = new v3.File.fromJson(MapL().as(_json[$_get]("file")));
    }
    if (dart.test(_json[$containsKey]("fileId"))) {
      this.fileId = StringL().as(_json[$_get]("fileId"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("removed"))) {
      this.removed = boolL().as(_json[$_get]("removed"));
    }
    if (dart.test(_json[$containsKey]("teamDrive"))) {
      this.teamDrive = new v3.TeamDrive.fromJson(MapL().as(_json[$_get]("teamDrive")));
    }
    if (dart.test(_json[$containsKey]("teamDriveId"))) {
      this.teamDriveId = StringL().as(_json[$_get]("teamDriveId"));
    }
    if (dart.test(_json[$containsKey]("time"))) {
      this.time = core.DateTime.parse(core.String.as(_json[$_get]("time")));
    }
    if (dart.test(_json[$containsKey]("type"))) {
      this.type = StringL().as(_json[$_get]("type"));
    }
  }).prototype = v3.Change.prototype;
  dart.addTypeTests(v3.Change);
  dart.addTypeCaches(v3.Change);
  dart.setMethodSignature(v3.Change, () => ({
    __proto__: dart.getMethods(v3.Change.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.Change, L0);
  dart.setFieldSignature(v3.Change, () => ({
    __proto__: dart.getFields(v3.Change.__proto__),
    changeType: dart.fieldType(dart.legacy(core.String)),
    drive: dart.fieldType(dart.legacy(v3.Drive)),
    driveId: dart.fieldType(dart.legacy(core.String)),
    file: dart.fieldType(dart.legacy(v3.File)),
    fileId: dart.fieldType(dart.legacy(core.String)),
    kind: dart.fieldType(dart.legacy(core.String)),
    removed: dart.fieldType(dart.legacy(core.bool)),
    teamDrive: dart.fieldType(dart.legacy(v3.TeamDrive)),
    teamDriveId: dart.fieldType(dart.legacy(core.String)),
    time: dart.fieldType(dart.legacy(core.DateTime)),
    type: dart.fieldType(dart.legacy(core.String))
  }));
  var changes = dart.privateName(v3, "ChangeList.changes");
  var kind$0 = dart.privateName(v3, "ChangeList.kind");
  var newStartPageToken = dart.privateName(v3, "ChangeList.newStartPageToken");
  var nextPageToken = dart.privateName(v3, "ChangeList.nextPageToken");
  v3.ChangeList = class ChangeList extends core.Object {
    get changes() {
      return this[changes];
    }
    set changes(value) {
      this[changes] = value;
    }
    get kind() {
      return this[kind$0];
    }
    set kind(value) {
      this[kind$0] = value;
    }
    get newStartPageToken() {
      return this[newStartPageToken];
    }
    set newStartPageToken(value) {
      this[newStartPageToken] = value;
    }
    get nextPageToken() {
      return this[nextPageToken];
    }
    set nextPageToken(value) {
      this[nextPageToken] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.changes != null) {
        _json[$_set]("changes", this.changes[$map](MapLOfStringL$ObjectL(), dart.fn(value => value.toJson(), ChangeLToMapLOfStringL$ObjectL()))[$toList]());
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.newStartPageToken != null) {
        _json[$_set]("newStartPageToken", this.newStartPageToken);
      }
      if (this.nextPageToken != null) {
        _json[$_set]("nextPageToken", this.nextPageToken);
      }
      return _json;
    }
  };
  (v3.ChangeList.new = function() {
    this[changes] = null;
    this[kind$0] = null;
    this[newStartPageToken] = null;
    this[nextPageToken] = null;
    ;
  }).prototype = v3.ChangeList.prototype;
  (v3.ChangeList.fromJson = function(_json) {
    this[changes] = null;
    this[kind$0] = null;
    this[newStartPageToken] = null;
    this[nextPageToken] = null;
    if (dart.test(_json[$containsKey]("changes"))) {
      this.changes = ListL().as(_json[$_get]("changes"))[$map](ChangeL(), dart.fn(value => new v3.Change.fromJson(MapL().as(value)), dynamicToChangeL()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("newStartPageToken"))) {
      this.newStartPageToken = StringL().as(_json[$_get]("newStartPageToken"));
    }
    if (dart.test(_json[$containsKey]("nextPageToken"))) {
      this.nextPageToken = StringL().as(_json[$_get]("nextPageToken"));
    }
  }).prototype = v3.ChangeList.prototype;
  dart.addTypeTests(v3.ChangeList);
  dart.addTypeCaches(v3.ChangeList);
  dart.setMethodSignature(v3.ChangeList, () => ({
    __proto__: dart.getMethods(v3.ChangeList.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.ChangeList, L0);
  dart.setFieldSignature(v3.ChangeList, () => ({
    __proto__: dart.getFields(v3.ChangeList.__proto__),
    changes: dart.fieldType(dart.legacy(core.List$(dart.legacy(v3.Change)))),
    kind: dart.fieldType(dart.legacy(core.String)),
    newStartPageToken: dart.fieldType(dart.legacy(core.String)),
    nextPageToken: dart.fieldType(dart.legacy(core.String))
  }));
  var address = dart.privateName(v3, "Channel.address");
  var expiration = dart.privateName(v3, "Channel.expiration");
  var id$0 = dart.privateName(v3, "Channel.id");
  var kind$1 = dart.privateName(v3, "Channel.kind");
  var params = dart.privateName(v3, "Channel.params");
  var payload = dart.privateName(v3, "Channel.payload");
  var resourceId = dart.privateName(v3, "Channel.resourceId");
  var resourceUri = dart.privateName(v3, "Channel.resourceUri");
  var token = dart.privateName(v3, "Channel.token");
  var type$ = dart.privateName(v3, "Channel.type");
  v3.Channel = class Channel extends core.Object {
    get address() {
      return this[address];
    }
    set address(value) {
      this[address] = value;
    }
    get expiration() {
      return this[expiration];
    }
    set expiration(value) {
      this[expiration] = value;
    }
    get id() {
      return this[id$0];
    }
    set id(value) {
      this[id$0] = value;
    }
    get kind() {
      return this[kind$1];
    }
    set kind(value) {
      this[kind$1] = value;
    }
    get params() {
      return this[params];
    }
    set params(value) {
      this[params] = value;
    }
    get payload() {
      return this[payload];
    }
    set payload(value) {
      this[payload] = value;
    }
    get resourceId() {
      return this[resourceId];
    }
    set resourceId(value) {
      this[resourceId] = value;
    }
    get resourceUri() {
      return this[resourceUri];
    }
    set resourceUri(value) {
      this[resourceUri] = value;
    }
    get token() {
      return this[token];
    }
    set token(value) {
      this[token] = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      this[type$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.address != null) {
        _json[$_set]("address", this.address);
      }
      if (this.expiration != null) {
        _json[$_set]("expiration", this.expiration);
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.params != null) {
        _json[$_set]("params", this.params);
      }
      if (this.payload != null) {
        _json[$_set]("payload", this.payload);
      }
      if (this.resourceId != null) {
        _json[$_set]("resourceId", this.resourceId);
      }
      if (this.resourceUri != null) {
        _json[$_set]("resourceUri", this.resourceUri);
      }
      if (this.token != null) {
        _json[$_set]("token", this.token);
      }
      if (this.type != null) {
        _json[$_set]("type", this.type);
      }
      return _json;
    }
  };
  (v3.Channel.new = function() {
    this[address] = null;
    this[expiration] = null;
    this[id$0] = null;
    this[kind$1] = null;
    this[params] = null;
    this[payload] = null;
    this[resourceId] = null;
    this[resourceUri] = null;
    this[token] = null;
    this[type$] = null;
    ;
  }).prototype = v3.Channel.prototype;
  (v3.Channel.fromJson = function(_json) {
    this[address] = null;
    this[expiration] = null;
    this[id$0] = null;
    this[kind$1] = null;
    this[params] = null;
    this[payload] = null;
    this[resourceId] = null;
    this[resourceUri] = null;
    this[token] = null;
    this[type$] = null;
    if (dart.test(_json[$containsKey]("address"))) {
      this.address = StringL().as(_json[$_get]("address"));
    }
    if (dart.test(_json[$containsKey]("expiration"))) {
      this.expiration = StringL().as(_json[$_get]("expiration"));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = StringL().as(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("params"))) {
      this.params = MapL().as(_json[$_get]("params"))[$cast](StringL(), StringL());
    }
    if (dart.test(_json[$containsKey]("payload"))) {
      this.payload = boolL().as(_json[$_get]("payload"));
    }
    if (dart.test(_json[$containsKey]("resourceId"))) {
      this.resourceId = StringL().as(_json[$_get]("resourceId"));
    }
    if (dart.test(_json[$containsKey]("resourceUri"))) {
      this.resourceUri = StringL().as(_json[$_get]("resourceUri"));
    }
    if (dart.test(_json[$containsKey]("token"))) {
      this.token = StringL().as(_json[$_get]("token"));
    }
    if (dart.test(_json[$containsKey]("type"))) {
      this.type = StringL().as(_json[$_get]("type"));
    }
  }).prototype = v3.Channel.prototype;
  dart.addTypeTests(v3.Channel);
  dart.addTypeCaches(v3.Channel);
  dart.setMethodSignature(v3.Channel, () => ({
    __proto__: dart.getMethods(v3.Channel.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.Channel, L0);
  dart.setFieldSignature(v3.Channel, () => ({
    __proto__: dart.getFields(v3.Channel.__proto__),
    address: dart.fieldType(dart.legacy(core.String)),
    expiration: dart.fieldType(dart.legacy(core.String)),
    id: dart.fieldType(dart.legacy(core.String)),
    kind: dart.fieldType(dart.legacy(core.String)),
    params: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))),
    payload: dart.fieldType(dart.legacy(core.bool)),
    resourceId: dart.fieldType(dart.legacy(core.String)),
    resourceUri: dart.fieldType(dart.legacy(core.String)),
    token: dart.fieldType(dart.legacy(core.String)),
    type: dart.fieldType(dart.legacy(core.String))
  }));
  var mimeType = dart.privateName(v3, "CommentQuotedFileContent.mimeType");
  var value$ = dart.privateName(v3, "CommentQuotedFileContent.value");
  v3.CommentQuotedFileContent = class CommentQuotedFileContent extends core.Object {
    get mimeType() {
      return this[mimeType];
    }
    set mimeType(value) {
      this[mimeType] = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.mimeType != null) {
        _json[$_set]("mimeType", this.mimeType);
      }
      if (this.value != null) {
        _json[$_set]("value", this.value);
      }
      return _json;
    }
  };
  (v3.CommentQuotedFileContent.new = function() {
    this[mimeType] = null;
    this[value$] = null;
    ;
  }).prototype = v3.CommentQuotedFileContent.prototype;
  (v3.CommentQuotedFileContent.fromJson = function(_json) {
    this[mimeType] = null;
    this[value$] = null;
    if (dart.test(_json[$containsKey]("mimeType"))) {
      this.mimeType = StringL().as(_json[$_get]("mimeType"));
    }
    if (dart.test(_json[$containsKey]("value"))) {
      this.value = StringL().as(_json[$_get]("value"));
    }
  }).prototype = v3.CommentQuotedFileContent.prototype;
  dart.addTypeTests(v3.CommentQuotedFileContent);
  dart.addTypeCaches(v3.CommentQuotedFileContent);
  dart.setMethodSignature(v3.CommentQuotedFileContent, () => ({
    __proto__: dart.getMethods(v3.CommentQuotedFileContent.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.CommentQuotedFileContent, L0);
  dart.setFieldSignature(v3.CommentQuotedFileContent, () => ({
    __proto__: dart.getFields(v3.CommentQuotedFileContent.__proto__),
    mimeType: dart.fieldType(dart.legacy(core.String)),
    value: dart.fieldType(dart.legacy(core.String))
  }));
  var anchor = dart.privateName(v3, "Comment.anchor");
  var author = dart.privateName(v3, "Comment.author");
  var content = dart.privateName(v3, "Comment.content");
  var createdTime = dart.privateName(v3, "Comment.createdTime");
  var deleted = dart.privateName(v3, "Comment.deleted");
  var htmlContent = dart.privateName(v3, "Comment.htmlContent");
  var id$1 = dart.privateName(v3, "Comment.id");
  var kind$2 = dart.privateName(v3, "Comment.kind");
  var modifiedTime = dart.privateName(v3, "Comment.modifiedTime");
  var quotedFileContent = dart.privateName(v3, "Comment.quotedFileContent");
  var replies = dart.privateName(v3, "Comment.replies");
  var resolved = dart.privateName(v3, "Comment.resolved");
  v3.Comment = class Comment extends core.Object {
    get anchor() {
      return this[anchor];
    }
    set anchor(value) {
      this[anchor] = value;
    }
    get author() {
      return this[author];
    }
    set author(value) {
      this[author] = value;
    }
    get content() {
      return this[content];
    }
    set content(value) {
      this[content] = value;
    }
    get createdTime() {
      return this[createdTime];
    }
    set createdTime(value) {
      this[createdTime] = value;
    }
    get deleted() {
      return this[deleted];
    }
    set deleted(value) {
      this[deleted] = value;
    }
    get htmlContent() {
      return this[htmlContent];
    }
    set htmlContent(value) {
      this[htmlContent] = value;
    }
    get id() {
      return this[id$1];
    }
    set id(value) {
      this[id$1] = value;
    }
    get kind() {
      return this[kind$2];
    }
    set kind(value) {
      this[kind$2] = value;
    }
    get modifiedTime() {
      return this[modifiedTime];
    }
    set modifiedTime(value) {
      this[modifiedTime] = value;
    }
    get quotedFileContent() {
      return this[quotedFileContent];
    }
    set quotedFileContent(value) {
      this[quotedFileContent] = value;
    }
    get replies() {
      return this[replies];
    }
    set replies(value) {
      this[replies] = value;
    }
    get resolved() {
      return this[resolved];
    }
    set resolved(value) {
      this[resolved] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.anchor != null) {
        _json[$_set]("anchor", this.anchor);
      }
      if (this.author != null) {
        _json[$_set]("author", this.author.toJson());
      }
      if (this.content != null) {
        _json[$_set]("content", this.content);
      }
      if (this.createdTime != null) {
        _json[$_set]("createdTime", this.createdTime.toIso8601String());
      }
      if (this.deleted != null) {
        _json[$_set]("deleted", this.deleted);
      }
      if (this.htmlContent != null) {
        _json[$_set]("htmlContent", this.htmlContent);
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.modifiedTime != null) {
        _json[$_set]("modifiedTime", this.modifiedTime.toIso8601String());
      }
      if (this.quotedFileContent != null) {
        _json[$_set]("quotedFileContent", this.quotedFileContent.toJson());
      }
      if (this.replies != null) {
        _json[$_set]("replies", this.replies[$map](MapLOfStringL$ObjectL(), dart.fn(value => value.toJson(), ReplyLToMapLOfStringL$ObjectL()))[$toList]());
      }
      if (this.resolved != null) {
        _json[$_set]("resolved", this.resolved);
      }
      return _json;
    }
  };
  (v3.Comment.new = function() {
    this[anchor] = null;
    this[author] = null;
    this[content] = null;
    this[createdTime] = null;
    this[deleted] = null;
    this[htmlContent] = null;
    this[id$1] = null;
    this[kind$2] = null;
    this[modifiedTime] = null;
    this[quotedFileContent] = null;
    this[replies] = null;
    this[resolved] = null;
    ;
  }).prototype = v3.Comment.prototype;
  (v3.Comment.fromJson = function(_json) {
    this[anchor] = null;
    this[author] = null;
    this[content] = null;
    this[createdTime] = null;
    this[deleted] = null;
    this[htmlContent] = null;
    this[id$1] = null;
    this[kind$2] = null;
    this[modifiedTime] = null;
    this[quotedFileContent] = null;
    this[replies] = null;
    this[resolved] = null;
    if (dart.test(_json[$containsKey]("anchor"))) {
      this.anchor = StringL().as(_json[$_get]("anchor"));
    }
    if (dart.test(_json[$containsKey]("author"))) {
      this.author = new v3.User.fromJson(MapL().as(_json[$_get]("author")));
    }
    if (dart.test(_json[$containsKey]("content"))) {
      this.content = StringL().as(_json[$_get]("content"));
    }
    if (dart.test(_json[$containsKey]("createdTime"))) {
      this.createdTime = core.DateTime.parse(core.String.as(_json[$_get]("createdTime")));
    }
    if (dart.test(_json[$containsKey]("deleted"))) {
      this.deleted = boolL().as(_json[$_get]("deleted"));
    }
    if (dart.test(_json[$containsKey]("htmlContent"))) {
      this.htmlContent = StringL().as(_json[$_get]("htmlContent"));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = StringL().as(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("modifiedTime"))) {
      this.modifiedTime = core.DateTime.parse(core.String.as(_json[$_get]("modifiedTime")));
    }
    if (dart.test(_json[$containsKey]("quotedFileContent"))) {
      this.quotedFileContent = new v3.CommentQuotedFileContent.fromJson(MapL().as(_json[$_get]("quotedFileContent")));
    }
    if (dart.test(_json[$containsKey]("replies"))) {
      this.replies = ListL().as(_json[$_get]("replies"))[$map](ReplyL(), dart.fn(value => new v3.Reply.fromJson(MapL().as(value)), dynamicToReplyL()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("resolved"))) {
      this.resolved = boolL().as(_json[$_get]("resolved"));
    }
  }).prototype = v3.Comment.prototype;
  dart.addTypeTests(v3.Comment);
  dart.addTypeCaches(v3.Comment);
  dart.setMethodSignature(v3.Comment, () => ({
    __proto__: dart.getMethods(v3.Comment.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.Comment, L0);
  dart.setFieldSignature(v3.Comment, () => ({
    __proto__: dart.getFields(v3.Comment.__proto__),
    anchor: dart.fieldType(dart.legacy(core.String)),
    author: dart.fieldType(dart.legacy(v3.User)),
    content: dart.fieldType(dart.legacy(core.String)),
    createdTime: dart.fieldType(dart.legacy(core.DateTime)),
    deleted: dart.fieldType(dart.legacy(core.bool)),
    htmlContent: dart.fieldType(dart.legacy(core.String)),
    id: dart.fieldType(dart.legacy(core.String)),
    kind: dart.fieldType(dart.legacy(core.String)),
    modifiedTime: dart.fieldType(dart.legacy(core.DateTime)),
    quotedFileContent: dart.fieldType(dart.legacy(v3.CommentQuotedFileContent)),
    replies: dart.fieldType(dart.legacy(core.List$(dart.legacy(v3.Reply)))),
    resolved: dart.fieldType(dart.legacy(core.bool))
  }));
  var comments = dart.privateName(v3, "CommentList.comments");
  var kind$3 = dart.privateName(v3, "CommentList.kind");
  var nextPageToken$ = dart.privateName(v3, "CommentList.nextPageToken");
  v3.CommentList = class CommentList extends core.Object {
    get comments() {
      return this[comments];
    }
    set comments(value) {
      this[comments] = value;
    }
    get kind() {
      return this[kind$3];
    }
    set kind(value) {
      this[kind$3] = value;
    }
    get nextPageToken() {
      return this[nextPageToken$];
    }
    set nextPageToken(value) {
      this[nextPageToken$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.comments != null) {
        _json[$_set]("comments", this.comments[$map](MapLOfStringL$ObjectL(), dart.fn(value => value.toJson(), CommentLToMapLOfStringL$ObjectL()))[$toList]());
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.nextPageToken != null) {
        _json[$_set]("nextPageToken", this.nextPageToken);
      }
      return _json;
    }
  };
  (v3.CommentList.new = function() {
    this[comments] = null;
    this[kind$3] = null;
    this[nextPageToken$] = null;
    ;
  }).prototype = v3.CommentList.prototype;
  (v3.CommentList.fromJson = function(_json) {
    this[comments] = null;
    this[kind$3] = null;
    this[nextPageToken$] = null;
    if (dart.test(_json[$containsKey]("comments"))) {
      this.comments = ListL().as(_json[$_get]("comments"))[$map](CommentL(), dart.fn(value => new v3.Comment.fromJson(MapL().as(value)), dynamicToCommentL()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("nextPageToken"))) {
      this.nextPageToken = StringL().as(_json[$_get]("nextPageToken"));
    }
  }).prototype = v3.CommentList.prototype;
  dart.addTypeTests(v3.CommentList);
  dart.addTypeCaches(v3.CommentList);
  dart.setMethodSignature(v3.CommentList, () => ({
    __proto__: dart.getMethods(v3.CommentList.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.CommentList, L0);
  dart.setFieldSignature(v3.CommentList, () => ({
    __proto__: dart.getFields(v3.CommentList.__proto__),
    comments: dart.fieldType(dart.legacy(core.List$(dart.legacy(v3.Comment)))),
    kind: dart.fieldType(dart.legacy(core.String)),
    nextPageToken: dart.fieldType(dart.legacy(core.String))
  }));
  var id$2 = dart.privateName(v3, "DriveBackgroundImageFile.id");
  var width = dart.privateName(v3, "DriveBackgroundImageFile.width");
  var xCoordinate = dart.privateName(v3, "DriveBackgroundImageFile.xCoordinate");
  var yCoordinate = dart.privateName(v3, "DriveBackgroundImageFile.yCoordinate");
  v3.DriveBackgroundImageFile = class DriveBackgroundImageFile extends core.Object {
    get id() {
      return this[id$2];
    }
    set id(value) {
      this[id$2] = value;
    }
    get width() {
      return this[width];
    }
    set width(value) {
      this[width] = value;
    }
    get xCoordinate() {
      return this[xCoordinate];
    }
    set xCoordinate(value) {
      this[xCoordinate] = value;
    }
    get yCoordinate() {
      return this[yCoordinate];
    }
    set yCoordinate(value) {
      this[yCoordinate] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.width != null) {
        _json[$_set]("width", this.width);
      }
      if (this.xCoordinate != null) {
        _json[$_set]("xCoordinate", this.xCoordinate);
      }
      if (this.yCoordinate != null) {
        _json[$_set]("yCoordinate", this.yCoordinate);
      }
      return _json;
    }
  };
  (v3.DriveBackgroundImageFile.new = function() {
    this[id$2] = null;
    this[width] = null;
    this[xCoordinate] = null;
    this[yCoordinate] = null;
    ;
  }).prototype = v3.DriveBackgroundImageFile.prototype;
  (v3.DriveBackgroundImageFile.fromJson = function(_json) {
    this[id$2] = null;
    this[width] = null;
    this[xCoordinate] = null;
    this[yCoordinate] = null;
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = StringL().as(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("width"))) {
      this.width = doubleL().as(dart.dsend(_json[$_get]("width"), 'toDouble', []));
    }
    if (dart.test(_json[$containsKey]("xCoordinate"))) {
      this.xCoordinate = doubleL().as(dart.dsend(_json[$_get]("xCoordinate"), 'toDouble', []));
    }
    if (dart.test(_json[$containsKey]("yCoordinate"))) {
      this.yCoordinate = doubleL().as(dart.dsend(_json[$_get]("yCoordinate"), 'toDouble', []));
    }
  }).prototype = v3.DriveBackgroundImageFile.prototype;
  dart.addTypeTests(v3.DriveBackgroundImageFile);
  dart.addTypeCaches(v3.DriveBackgroundImageFile);
  dart.setMethodSignature(v3.DriveBackgroundImageFile, () => ({
    __proto__: dart.getMethods(v3.DriveBackgroundImageFile.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.DriveBackgroundImageFile, L0);
  dart.setFieldSignature(v3.DriveBackgroundImageFile, () => ({
    __proto__: dart.getFields(v3.DriveBackgroundImageFile.__proto__),
    id: dart.fieldType(dart.legacy(core.String)),
    width: dart.fieldType(dart.legacy(core.double)),
    xCoordinate: dart.fieldType(dart.legacy(core.double)),
    yCoordinate: dart.fieldType(dart.legacy(core.double))
  }));
  var canAddChildren = dart.privateName(v3, "DriveCapabilities.canAddChildren");
  var canChangeCopyRequiresWriterPermissionRestriction = dart.privateName(v3, "DriveCapabilities.canChangeCopyRequiresWriterPermissionRestriction");
  var canChangeDomainUsersOnlyRestriction = dart.privateName(v3, "DriveCapabilities.canChangeDomainUsersOnlyRestriction");
  var canChangeDriveBackground = dart.privateName(v3, "DriveCapabilities.canChangeDriveBackground");
  var canChangeDriveMembersOnlyRestriction = dart.privateName(v3, "DriveCapabilities.canChangeDriveMembersOnlyRestriction");
  var canComment = dart.privateName(v3, "DriveCapabilities.canComment");
  var canCopy = dart.privateName(v3, "DriveCapabilities.canCopy");
  var canDeleteChildren = dart.privateName(v3, "DriveCapabilities.canDeleteChildren");
  var canDeleteDrive = dart.privateName(v3, "DriveCapabilities.canDeleteDrive");
  var canDownload = dart.privateName(v3, "DriveCapabilities.canDownload");
  var canEdit = dart.privateName(v3, "DriveCapabilities.canEdit");
  var canListChildren = dart.privateName(v3, "DriveCapabilities.canListChildren");
  var canManageMembers = dart.privateName(v3, "DriveCapabilities.canManageMembers");
  var canReadRevisions = dart.privateName(v3, "DriveCapabilities.canReadRevisions");
  var canRename = dart.privateName(v3, "DriveCapabilities.canRename");
  var canRenameDrive = dart.privateName(v3, "DriveCapabilities.canRenameDrive");
  var canShare = dart.privateName(v3, "DriveCapabilities.canShare");
  var canTrashChildren = dart.privateName(v3, "DriveCapabilities.canTrashChildren");
  v3.DriveCapabilities = class DriveCapabilities extends core.Object {
    get canAddChildren() {
      return this[canAddChildren];
    }
    set canAddChildren(value) {
      this[canAddChildren] = value;
    }
    get canChangeCopyRequiresWriterPermissionRestriction() {
      return this[canChangeCopyRequiresWriterPermissionRestriction];
    }
    set canChangeCopyRequiresWriterPermissionRestriction(value) {
      this[canChangeCopyRequiresWriterPermissionRestriction] = value;
    }
    get canChangeDomainUsersOnlyRestriction() {
      return this[canChangeDomainUsersOnlyRestriction];
    }
    set canChangeDomainUsersOnlyRestriction(value) {
      this[canChangeDomainUsersOnlyRestriction] = value;
    }
    get canChangeDriveBackground() {
      return this[canChangeDriveBackground];
    }
    set canChangeDriveBackground(value) {
      this[canChangeDriveBackground] = value;
    }
    get canChangeDriveMembersOnlyRestriction() {
      return this[canChangeDriveMembersOnlyRestriction];
    }
    set canChangeDriveMembersOnlyRestriction(value) {
      this[canChangeDriveMembersOnlyRestriction] = value;
    }
    get canComment() {
      return this[canComment];
    }
    set canComment(value) {
      this[canComment] = value;
    }
    get canCopy() {
      return this[canCopy];
    }
    set canCopy(value) {
      this[canCopy] = value;
    }
    get canDeleteChildren() {
      return this[canDeleteChildren];
    }
    set canDeleteChildren(value) {
      this[canDeleteChildren] = value;
    }
    get canDeleteDrive() {
      return this[canDeleteDrive];
    }
    set canDeleteDrive(value) {
      this[canDeleteDrive] = value;
    }
    get canDownload() {
      return this[canDownload];
    }
    set canDownload(value) {
      this[canDownload] = value;
    }
    get canEdit() {
      return this[canEdit];
    }
    set canEdit(value) {
      this[canEdit] = value;
    }
    get canListChildren() {
      return this[canListChildren];
    }
    set canListChildren(value) {
      this[canListChildren] = value;
    }
    get canManageMembers() {
      return this[canManageMembers];
    }
    set canManageMembers(value) {
      this[canManageMembers] = value;
    }
    get canReadRevisions() {
      return this[canReadRevisions];
    }
    set canReadRevisions(value) {
      this[canReadRevisions] = value;
    }
    get canRename() {
      return this[canRename];
    }
    set canRename(value) {
      this[canRename] = value;
    }
    get canRenameDrive() {
      return this[canRenameDrive];
    }
    set canRenameDrive(value) {
      this[canRenameDrive] = value;
    }
    get canShare() {
      return this[canShare];
    }
    set canShare(value) {
      this[canShare] = value;
    }
    get canTrashChildren() {
      return this[canTrashChildren];
    }
    set canTrashChildren(value) {
      this[canTrashChildren] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.canAddChildren != null) {
        _json[$_set]("canAddChildren", this.canAddChildren);
      }
      if (this.canChangeCopyRequiresWriterPermissionRestriction != null) {
        _json[$_set]("canChangeCopyRequiresWriterPermissionRestriction", this.canChangeCopyRequiresWriterPermissionRestriction);
      }
      if (this.canChangeDomainUsersOnlyRestriction != null) {
        _json[$_set]("canChangeDomainUsersOnlyRestriction", this.canChangeDomainUsersOnlyRestriction);
      }
      if (this.canChangeDriveBackground != null) {
        _json[$_set]("canChangeDriveBackground", this.canChangeDriveBackground);
      }
      if (this.canChangeDriveMembersOnlyRestriction != null) {
        _json[$_set]("canChangeDriveMembersOnlyRestriction", this.canChangeDriveMembersOnlyRestriction);
      }
      if (this.canComment != null) {
        _json[$_set]("canComment", this.canComment);
      }
      if (this.canCopy != null) {
        _json[$_set]("canCopy", this.canCopy);
      }
      if (this.canDeleteChildren != null) {
        _json[$_set]("canDeleteChildren", this.canDeleteChildren);
      }
      if (this.canDeleteDrive != null) {
        _json[$_set]("canDeleteDrive", this.canDeleteDrive);
      }
      if (this.canDownload != null) {
        _json[$_set]("canDownload", this.canDownload);
      }
      if (this.canEdit != null) {
        _json[$_set]("canEdit", this.canEdit);
      }
      if (this.canListChildren != null) {
        _json[$_set]("canListChildren", this.canListChildren);
      }
      if (this.canManageMembers != null) {
        _json[$_set]("canManageMembers", this.canManageMembers);
      }
      if (this.canReadRevisions != null) {
        _json[$_set]("canReadRevisions", this.canReadRevisions);
      }
      if (this.canRename != null) {
        _json[$_set]("canRename", this.canRename);
      }
      if (this.canRenameDrive != null) {
        _json[$_set]("canRenameDrive", this.canRenameDrive);
      }
      if (this.canShare != null) {
        _json[$_set]("canShare", this.canShare);
      }
      if (this.canTrashChildren != null) {
        _json[$_set]("canTrashChildren", this.canTrashChildren);
      }
      return _json;
    }
  };
  (v3.DriveCapabilities.new = function() {
    this[canAddChildren] = null;
    this[canChangeCopyRequiresWriterPermissionRestriction] = null;
    this[canChangeDomainUsersOnlyRestriction] = null;
    this[canChangeDriveBackground] = null;
    this[canChangeDriveMembersOnlyRestriction] = null;
    this[canComment] = null;
    this[canCopy] = null;
    this[canDeleteChildren] = null;
    this[canDeleteDrive] = null;
    this[canDownload] = null;
    this[canEdit] = null;
    this[canListChildren] = null;
    this[canManageMembers] = null;
    this[canReadRevisions] = null;
    this[canRename] = null;
    this[canRenameDrive] = null;
    this[canShare] = null;
    this[canTrashChildren] = null;
    ;
  }).prototype = v3.DriveCapabilities.prototype;
  (v3.DriveCapabilities.fromJson = function(_json) {
    this[canAddChildren] = null;
    this[canChangeCopyRequiresWriterPermissionRestriction] = null;
    this[canChangeDomainUsersOnlyRestriction] = null;
    this[canChangeDriveBackground] = null;
    this[canChangeDriveMembersOnlyRestriction] = null;
    this[canComment] = null;
    this[canCopy] = null;
    this[canDeleteChildren] = null;
    this[canDeleteDrive] = null;
    this[canDownload] = null;
    this[canEdit] = null;
    this[canListChildren] = null;
    this[canManageMembers] = null;
    this[canReadRevisions] = null;
    this[canRename] = null;
    this[canRenameDrive] = null;
    this[canShare] = null;
    this[canTrashChildren] = null;
    if (dart.test(_json[$containsKey]("canAddChildren"))) {
      this.canAddChildren = boolL().as(_json[$_get]("canAddChildren"));
    }
    if (dart.test(_json[$containsKey]("canChangeCopyRequiresWriterPermissionRestriction"))) {
      this.canChangeCopyRequiresWriterPermissionRestriction = boolL().as(_json[$_get]("canChangeCopyRequiresWriterPermissionRestriction"));
    }
    if (dart.test(_json[$containsKey]("canChangeDomainUsersOnlyRestriction"))) {
      this.canChangeDomainUsersOnlyRestriction = boolL().as(_json[$_get]("canChangeDomainUsersOnlyRestriction"));
    }
    if (dart.test(_json[$containsKey]("canChangeDriveBackground"))) {
      this.canChangeDriveBackground = boolL().as(_json[$_get]("canChangeDriveBackground"));
    }
    if (dart.test(_json[$containsKey]("canChangeDriveMembersOnlyRestriction"))) {
      this.canChangeDriveMembersOnlyRestriction = boolL().as(_json[$_get]("canChangeDriveMembersOnlyRestriction"));
    }
    if (dart.test(_json[$containsKey]("canComment"))) {
      this.canComment = boolL().as(_json[$_get]("canComment"));
    }
    if (dart.test(_json[$containsKey]("canCopy"))) {
      this.canCopy = boolL().as(_json[$_get]("canCopy"));
    }
    if (dart.test(_json[$containsKey]("canDeleteChildren"))) {
      this.canDeleteChildren = boolL().as(_json[$_get]("canDeleteChildren"));
    }
    if (dart.test(_json[$containsKey]("canDeleteDrive"))) {
      this.canDeleteDrive = boolL().as(_json[$_get]("canDeleteDrive"));
    }
    if (dart.test(_json[$containsKey]("canDownload"))) {
      this.canDownload = boolL().as(_json[$_get]("canDownload"));
    }
    if (dart.test(_json[$containsKey]("canEdit"))) {
      this.canEdit = boolL().as(_json[$_get]("canEdit"));
    }
    if (dart.test(_json[$containsKey]("canListChildren"))) {
      this.canListChildren = boolL().as(_json[$_get]("canListChildren"));
    }
    if (dart.test(_json[$containsKey]("canManageMembers"))) {
      this.canManageMembers = boolL().as(_json[$_get]("canManageMembers"));
    }
    if (dart.test(_json[$containsKey]("canReadRevisions"))) {
      this.canReadRevisions = boolL().as(_json[$_get]("canReadRevisions"));
    }
    if (dart.test(_json[$containsKey]("canRename"))) {
      this.canRename = boolL().as(_json[$_get]("canRename"));
    }
    if (dart.test(_json[$containsKey]("canRenameDrive"))) {
      this.canRenameDrive = boolL().as(_json[$_get]("canRenameDrive"));
    }
    if (dart.test(_json[$containsKey]("canShare"))) {
      this.canShare = boolL().as(_json[$_get]("canShare"));
    }
    if (dart.test(_json[$containsKey]("canTrashChildren"))) {
      this.canTrashChildren = boolL().as(_json[$_get]("canTrashChildren"));
    }
  }).prototype = v3.DriveCapabilities.prototype;
  dart.addTypeTests(v3.DriveCapabilities);
  dart.addTypeCaches(v3.DriveCapabilities);
  dart.setMethodSignature(v3.DriveCapabilities, () => ({
    __proto__: dart.getMethods(v3.DriveCapabilities.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.DriveCapabilities, L0);
  dart.setFieldSignature(v3.DriveCapabilities, () => ({
    __proto__: dart.getFields(v3.DriveCapabilities.__proto__),
    canAddChildren: dart.fieldType(dart.legacy(core.bool)),
    canChangeCopyRequiresWriterPermissionRestriction: dart.fieldType(dart.legacy(core.bool)),
    canChangeDomainUsersOnlyRestriction: dart.fieldType(dart.legacy(core.bool)),
    canChangeDriveBackground: dart.fieldType(dart.legacy(core.bool)),
    canChangeDriveMembersOnlyRestriction: dart.fieldType(dart.legacy(core.bool)),
    canComment: dart.fieldType(dart.legacy(core.bool)),
    canCopy: dart.fieldType(dart.legacy(core.bool)),
    canDeleteChildren: dart.fieldType(dart.legacy(core.bool)),
    canDeleteDrive: dart.fieldType(dart.legacy(core.bool)),
    canDownload: dart.fieldType(dart.legacy(core.bool)),
    canEdit: dart.fieldType(dart.legacy(core.bool)),
    canListChildren: dart.fieldType(dart.legacy(core.bool)),
    canManageMembers: dart.fieldType(dart.legacy(core.bool)),
    canReadRevisions: dart.fieldType(dart.legacy(core.bool)),
    canRename: dart.fieldType(dart.legacy(core.bool)),
    canRenameDrive: dart.fieldType(dart.legacy(core.bool)),
    canShare: dart.fieldType(dart.legacy(core.bool)),
    canTrashChildren: dart.fieldType(dart.legacy(core.bool))
  }));
  var adminManagedRestrictions = dart.privateName(v3, "DriveRestrictions.adminManagedRestrictions");
  var copyRequiresWriterPermission = dart.privateName(v3, "DriveRestrictions.copyRequiresWriterPermission");
  var domainUsersOnly = dart.privateName(v3, "DriveRestrictions.domainUsersOnly");
  var driveMembersOnly = dart.privateName(v3, "DriveRestrictions.driveMembersOnly");
  v3.DriveRestrictions = class DriveRestrictions extends core.Object {
    get adminManagedRestrictions() {
      return this[adminManagedRestrictions];
    }
    set adminManagedRestrictions(value) {
      this[adminManagedRestrictions] = value;
    }
    get copyRequiresWriterPermission() {
      return this[copyRequiresWriterPermission];
    }
    set copyRequiresWriterPermission(value) {
      this[copyRequiresWriterPermission] = value;
    }
    get domainUsersOnly() {
      return this[domainUsersOnly];
    }
    set domainUsersOnly(value) {
      this[domainUsersOnly] = value;
    }
    get driveMembersOnly() {
      return this[driveMembersOnly];
    }
    set driveMembersOnly(value) {
      this[driveMembersOnly] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.adminManagedRestrictions != null) {
        _json[$_set]("adminManagedRestrictions", this.adminManagedRestrictions);
      }
      if (this.copyRequiresWriterPermission != null) {
        _json[$_set]("copyRequiresWriterPermission", this.copyRequiresWriterPermission);
      }
      if (this.domainUsersOnly != null) {
        _json[$_set]("domainUsersOnly", this.domainUsersOnly);
      }
      if (this.driveMembersOnly != null) {
        _json[$_set]("driveMembersOnly", this.driveMembersOnly);
      }
      return _json;
    }
  };
  (v3.DriveRestrictions.new = function() {
    this[adminManagedRestrictions] = null;
    this[copyRequiresWriterPermission] = null;
    this[domainUsersOnly] = null;
    this[driveMembersOnly] = null;
    ;
  }).prototype = v3.DriveRestrictions.prototype;
  (v3.DriveRestrictions.fromJson = function(_json) {
    this[adminManagedRestrictions] = null;
    this[copyRequiresWriterPermission] = null;
    this[domainUsersOnly] = null;
    this[driveMembersOnly] = null;
    if (dart.test(_json[$containsKey]("adminManagedRestrictions"))) {
      this.adminManagedRestrictions = boolL().as(_json[$_get]("adminManagedRestrictions"));
    }
    if (dart.test(_json[$containsKey]("copyRequiresWriterPermission"))) {
      this.copyRequiresWriterPermission = boolL().as(_json[$_get]("copyRequiresWriterPermission"));
    }
    if (dart.test(_json[$containsKey]("domainUsersOnly"))) {
      this.domainUsersOnly = boolL().as(_json[$_get]("domainUsersOnly"));
    }
    if (dart.test(_json[$containsKey]("driveMembersOnly"))) {
      this.driveMembersOnly = boolL().as(_json[$_get]("driveMembersOnly"));
    }
  }).prototype = v3.DriveRestrictions.prototype;
  dart.addTypeTests(v3.DriveRestrictions);
  dart.addTypeCaches(v3.DriveRestrictions);
  dart.setMethodSignature(v3.DriveRestrictions, () => ({
    __proto__: dart.getMethods(v3.DriveRestrictions.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.DriveRestrictions, L0);
  dart.setFieldSignature(v3.DriveRestrictions, () => ({
    __proto__: dart.getFields(v3.DriveRestrictions.__proto__),
    adminManagedRestrictions: dart.fieldType(dart.legacy(core.bool)),
    copyRequiresWriterPermission: dart.fieldType(dart.legacy(core.bool)),
    domainUsersOnly: dart.fieldType(dart.legacy(core.bool)),
    driveMembersOnly: dart.fieldType(dart.legacy(core.bool))
  }));
  var backgroundImageFile = dart.privateName(v3, "Drive.backgroundImageFile");
  var backgroundImageLink$0 = dart.privateName(v3, "Drive.backgroundImageLink");
  var capabilities = dart.privateName(v3, "Drive.capabilities");
  var colorRgb$0 = dart.privateName(v3, "Drive.colorRgb");
  var createdTime$ = dart.privateName(v3, "Drive.createdTime");
  var hidden = dart.privateName(v3, "Drive.hidden");
  var id$3 = dart.privateName(v3, "Drive.id");
  var kind$4 = dart.privateName(v3, "Drive.kind");
  var name = dart.privateName(v3, "Drive.name");
  var restrictions = dart.privateName(v3, "Drive.restrictions");
  var themeId = dart.privateName(v3, "Drive.themeId");
  v3.Drive = class Drive extends core.Object {
    get backgroundImageFile() {
      return this[backgroundImageFile];
    }
    set backgroundImageFile(value) {
      this[backgroundImageFile] = value;
    }
    get backgroundImageLink() {
      return this[backgroundImageLink$0];
    }
    set backgroundImageLink(value) {
      this[backgroundImageLink$0] = value;
    }
    get capabilities() {
      return this[capabilities];
    }
    set capabilities(value) {
      this[capabilities] = value;
    }
    get colorRgb() {
      return this[colorRgb$0];
    }
    set colorRgb(value) {
      this[colorRgb$0] = value;
    }
    get createdTime() {
      return this[createdTime$];
    }
    set createdTime(value) {
      this[createdTime$] = value;
    }
    get hidden() {
      return this[hidden];
    }
    set hidden(value) {
      this[hidden] = value;
    }
    get id() {
      return this[id$3];
    }
    set id(value) {
      this[id$3] = value;
    }
    get kind() {
      return this[kind$4];
    }
    set kind(value) {
      this[kind$4] = value;
    }
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    get restrictions() {
      return this[restrictions];
    }
    set restrictions(value) {
      this[restrictions] = value;
    }
    get themeId() {
      return this[themeId];
    }
    set themeId(value) {
      this[themeId] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.backgroundImageFile != null) {
        _json[$_set]("backgroundImageFile", this.backgroundImageFile.toJson());
      }
      if (this.backgroundImageLink != null) {
        _json[$_set]("backgroundImageLink", this.backgroundImageLink);
      }
      if (this.capabilities != null) {
        _json[$_set]("capabilities", this.capabilities.toJson());
      }
      if (this.colorRgb != null) {
        _json[$_set]("colorRgb", this.colorRgb);
      }
      if (this.createdTime != null) {
        _json[$_set]("createdTime", this.createdTime.toIso8601String());
      }
      if (this.hidden != null) {
        _json[$_set]("hidden", this.hidden);
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.name != null) {
        _json[$_set]("name", this.name);
      }
      if (this.restrictions != null) {
        _json[$_set]("restrictions", this.restrictions.toJson());
      }
      if (this.themeId != null) {
        _json[$_set]("themeId", this.themeId);
      }
      return _json;
    }
  };
  (v3.Drive.new = function() {
    this[backgroundImageFile] = null;
    this[backgroundImageLink$0] = null;
    this[capabilities] = null;
    this[colorRgb$0] = null;
    this[createdTime$] = null;
    this[hidden] = null;
    this[id$3] = null;
    this[kind$4] = null;
    this[name] = null;
    this[restrictions] = null;
    this[themeId] = null;
    ;
  }).prototype = v3.Drive.prototype;
  (v3.Drive.fromJson = function(_json) {
    this[backgroundImageFile] = null;
    this[backgroundImageLink$0] = null;
    this[capabilities] = null;
    this[colorRgb$0] = null;
    this[createdTime$] = null;
    this[hidden] = null;
    this[id$3] = null;
    this[kind$4] = null;
    this[name] = null;
    this[restrictions] = null;
    this[themeId] = null;
    if (dart.test(_json[$containsKey]("backgroundImageFile"))) {
      this.backgroundImageFile = new v3.DriveBackgroundImageFile.fromJson(MapL().as(_json[$_get]("backgroundImageFile")));
    }
    if (dart.test(_json[$containsKey]("backgroundImageLink"))) {
      this.backgroundImageLink = StringL().as(_json[$_get]("backgroundImageLink"));
    }
    if (dart.test(_json[$containsKey]("capabilities"))) {
      this.capabilities = new v3.DriveCapabilities.fromJson(MapL().as(_json[$_get]("capabilities")));
    }
    if (dart.test(_json[$containsKey]("colorRgb"))) {
      this.colorRgb = StringL().as(_json[$_get]("colorRgb"));
    }
    if (dart.test(_json[$containsKey]("createdTime"))) {
      this.createdTime = core.DateTime.parse(core.String.as(_json[$_get]("createdTime")));
    }
    if (dart.test(_json[$containsKey]("hidden"))) {
      this.hidden = boolL().as(_json[$_get]("hidden"));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = StringL().as(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("name"))) {
      this.name = StringL().as(_json[$_get]("name"));
    }
    if (dart.test(_json[$containsKey]("restrictions"))) {
      this.restrictions = new v3.DriveRestrictions.fromJson(MapL().as(_json[$_get]("restrictions")));
    }
    if (dart.test(_json[$containsKey]("themeId"))) {
      this.themeId = StringL().as(_json[$_get]("themeId"));
    }
  }).prototype = v3.Drive.prototype;
  dart.addTypeTests(v3.Drive);
  dart.addTypeCaches(v3.Drive);
  dart.setMethodSignature(v3.Drive, () => ({
    __proto__: dart.getMethods(v3.Drive.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.Drive, L0);
  dart.setFieldSignature(v3.Drive, () => ({
    __proto__: dart.getFields(v3.Drive.__proto__),
    backgroundImageFile: dart.fieldType(dart.legacy(v3.DriveBackgroundImageFile)),
    backgroundImageLink: dart.fieldType(dart.legacy(core.String)),
    capabilities: dart.fieldType(dart.legacy(v3.DriveCapabilities)),
    colorRgb: dart.fieldType(dart.legacy(core.String)),
    createdTime: dart.fieldType(dart.legacy(core.DateTime)),
    hidden: dart.fieldType(dart.legacy(core.bool)),
    id: dart.fieldType(dart.legacy(core.String)),
    kind: dart.fieldType(dart.legacy(core.String)),
    name: dart.fieldType(dart.legacy(core.String)),
    restrictions: dart.fieldType(dart.legacy(v3.DriveRestrictions)),
    themeId: dart.fieldType(dart.legacy(core.String))
  }));
  var drives = dart.privateName(v3, "DriveList.drives");
  var kind$5 = dart.privateName(v3, "DriveList.kind");
  var nextPageToken$0 = dart.privateName(v3, "DriveList.nextPageToken");
  v3.DriveList = class DriveList extends core.Object {
    get drives() {
      return this[drives];
    }
    set drives(value) {
      this[drives] = value;
    }
    get kind() {
      return this[kind$5];
    }
    set kind(value) {
      this[kind$5] = value;
    }
    get nextPageToken() {
      return this[nextPageToken$0];
    }
    set nextPageToken(value) {
      this[nextPageToken$0] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.drives != null) {
        _json[$_set]("drives", this.drives[$map](MapLOfStringL$ObjectL(), dart.fn(value => value.toJson(), DriveLToMapLOfStringL$ObjectL()))[$toList]());
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.nextPageToken != null) {
        _json[$_set]("nextPageToken", this.nextPageToken);
      }
      return _json;
    }
  };
  (v3.DriveList.new = function() {
    this[drives] = null;
    this[kind$5] = null;
    this[nextPageToken$0] = null;
    ;
  }).prototype = v3.DriveList.prototype;
  (v3.DriveList.fromJson = function(_json) {
    this[drives] = null;
    this[kind$5] = null;
    this[nextPageToken$0] = null;
    if (dart.test(_json[$containsKey]("drives"))) {
      this.drives = ListL().as(_json[$_get]("drives"))[$map](DriveL(), dart.fn(value => new v3.Drive.fromJson(MapL().as(value)), dynamicToDriveL()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("nextPageToken"))) {
      this.nextPageToken = StringL().as(_json[$_get]("nextPageToken"));
    }
  }).prototype = v3.DriveList.prototype;
  dart.addTypeTests(v3.DriveList);
  dart.addTypeCaches(v3.DriveList);
  dart.setMethodSignature(v3.DriveList, () => ({
    __proto__: dart.getMethods(v3.DriveList.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.DriveList, L0);
  dart.setFieldSignature(v3.DriveList, () => ({
    __proto__: dart.getFields(v3.DriveList.__proto__),
    drives: dart.fieldType(dart.legacy(core.List$(dart.legacy(v3.Drive)))),
    kind: dart.fieldType(dart.legacy(core.String)),
    nextPageToken: dart.fieldType(dart.legacy(core.String))
  }));
  var canAddChildren$ = dart.privateName(v3, "FileCapabilities.canAddChildren");
  var canAddMyDriveParent = dart.privateName(v3, "FileCapabilities.canAddMyDriveParent");
  var canChangeCopyRequiresWriterPermission = dart.privateName(v3, "FileCapabilities.canChangeCopyRequiresWriterPermission");
  var canChangeViewersCanCopyContent = dart.privateName(v3, "FileCapabilities.canChangeViewersCanCopyContent");
  var canComment$ = dart.privateName(v3, "FileCapabilities.canComment");
  var canCopy$ = dart.privateName(v3, "FileCapabilities.canCopy");
  var canDelete = dart.privateName(v3, "FileCapabilities.canDelete");
  var canDeleteChildren$ = dart.privateName(v3, "FileCapabilities.canDeleteChildren");
  var canDownload$ = dart.privateName(v3, "FileCapabilities.canDownload");
  var canEdit$ = dart.privateName(v3, "FileCapabilities.canEdit");
  var canListChildren$ = dart.privateName(v3, "FileCapabilities.canListChildren");
  var canModifyContent = dart.privateName(v3, "FileCapabilities.canModifyContent");
  var canMoveChildrenOutOfDrive = dart.privateName(v3, "FileCapabilities.canMoveChildrenOutOfDrive");
  var canMoveChildrenOutOfTeamDrive = dart.privateName(v3, "FileCapabilities.canMoveChildrenOutOfTeamDrive");
  var canMoveChildrenWithinDrive = dart.privateName(v3, "FileCapabilities.canMoveChildrenWithinDrive");
  var canMoveChildrenWithinTeamDrive = dart.privateName(v3, "FileCapabilities.canMoveChildrenWithinTeamDrive");
  var canMoveItemIntoTeamDrive = dart.privateName(v3, "FileCapabilities.canMoveItemIntoTeamDrive");
  var canMoveItemOutOfDrive = dart.privateName(v3, "FileCapabilities.canMoveItemOutOfDrive");
  var canMoveItemOutOfTeamDrive = dart.privateName(v3, "FileCapabilities.canMoveItemOutOfTeamDrive");
  var canMoveItemWithinDrive = dart.privateName(v3, "FileCapabilities.canMoveItemWithinDrive");
  var canMoveItemWithinTeamDrive = dart.privateName(v3, "FileCapabilities.canMoveItemWithinTeamDrive");
  var canMoveTeamDriveItem = dart.privateName(v3, "FileCapabilities.canMoveTeamDriveItem");
  var canReadDrive = dart.privateName(v3, "FileCapabilities.canReadDrive");
  var canReadRevisions$ = dart.privateName(v3, "FileCapabilities.canReadRevisions");
  var canReadTeamDrive = dart.privateName(v3, "FileCapabilities.canReadTeamDrive");
  var canRemoveChildren = dart.privateName(v3, "FileCapabilities.canRemoveChildren");
  var canRemoveMyDriveParent = dart.privateName(v3, "FileCapabilities.canRemoveMyDriveParent");
  var canRename$ = dart.privateName(v3, "FileCapabilities.canRename");
  var canShare$ = dart.privateName(v3, "FileCapabilities.canShare");
  var canTrash = dart.privateName(v3, "FileCapabilities.canTrash");
  var canTrashChildren$ = dart.privateName(v3, "FileCapabilities.canTrashChildren");
  var canUntrash = dart.privateName(v3, "FileCapabilities.canUntrash");
  v3.FileCapabilities = class FileCapabilities extends core.Object {
    get canAddChildren() {
      return this[canAddChildren$];
    }
    set canAddChildren(value) {
      this[canAddChildren$] = value;
    }
    get canAddMyDriveParent() {
      return this[canAddMyDriveParent];
    }
    set canAddMyDriveParent(value) {
      this[canAddMyDriveParent] = value;
    }
    get canChangeCopyRequiresWriterPermission() {
      return this[canChangeCopyRequiresWriterPermission];
    }
    set canChangeCopyRequiresWriterPermission(value) {
      this[canChangeCopyRequiresWriterPermission] = value;
    }
    get canChangeViewersCanCopyContent() {
      return this[canChangeViewersCanCopyContent];
    }
    set canChangeViewersCanCopyContent(value) {
      this[canChangeViewersCanCopyContent] = value;
    }
    get canComment() {
      return this[canComment$];
    }
    set canComment(value) {
      this[canComment$] = value;
    }
    get canCopy() {
      return this[canCopy$];
    }
    set canCopy(value) {
      this[canCopy$] = value;
    }
    get canDelete() {
      return this[canDelete];
    }
    set canDelete(value) {
      this[canDelete] = value;
    }
    get canDeleteChildren() {
      return this[canDeleteChildren$];
    }
    set canDeleteChildren(value) {
      this[canDeleteChildren$] = value;
    }
    get canDownload() {
      return this[canDownload$];
    }
    set canDownload(value) {
      this[canDownload$] = value;
    }
    get canEdit() {
      return this[canEdit$];
    }
    set canEdit(value) {
      this[canEdit$] = value;
    }
    get canListChildren() {
      return this[canListChildren$];
    }
    set canListChildren(value) {
      this[canListChildren$] = value;
    }
    get canModifyContent() {
      return this[canModifyContent];
    }
    set canModifyContent(value) {
      this[canModifyContent] = value;
    }
    get canMoveChildrenOutOfDrive() {
      return this[canMoveChildrenOutOfDrive];
    }
    set canMoveChildrenOutOfDrive(value) {
      this[canMoveChildrenOutOfDrive] = value;
    }
    get canMoveChildrenOutOfTeamDrive() {
      return this[canMoveChildrenOutOfTeamDrive];
    }
    set canMoveChildrenOutOfTeamDrive(value) {
      this[canMoveChildrenOutOfTeamDrive] = value;
    }
    get canMoveChildrenWithinDrive() {
      return this[canMoveChildrenWithinDrive];
    }
    set canMoveChildrenWithinDrive(value) {
      this[canMoveChildrenWithinDrive] = value;
    }
    get canMoveChildrenWithinTeamDrive() {
      return this[canMoveChildrenWithinTeamDrive];
    }
    set canMoveChildrenWithinTeamDrive(value) {
      this[canMoveChildrenWithinTeamDrive] = value;
    }
    get canMoveItemIntoTeamDrive() {
      return this[canMoveItemIntoTeamDrive];
    }
    set canMoveItemIntoTeamDrive(value) {
      this[canMoveItemIntoTeamDrive] = value;
    }
    get canMoveItemOutOfDrive() {
      return this[canMoveItemOutOfDrive];
    }
    set canMoveItemOutOfDrive(value) {
      this[canMoveItemOutOfDrive] = value;
    }
    get canMoveItemOutOfTeamDrive() {
      return this[canMoveItemOutOfTeamDrive];
    }
    set canMoveItemOutOfTeamDrive(value) {
      this[canMoveItemOutOfTeamDrive] = value;
    }
    get canMoveItemWithinDrive() {
      return this[canMoveItemWithinDrive];
    }
    set canMoveItemWithinDrive(value) {
      this[canMoveItemWithinDrive] = value;
    }
    get canMoveItemWithinTeamDrive() {
      return this[canMoveItemWithinTeamDrive];
    }
    set canMoveItemWithinTeamDrive(value) {
      this[canMoveItemWithinTeamDrive] = value;
    }
    get canMoveTeamDriveItem() {
      return this[canMoveTeamDriveItem];
    }
    set canMoveTeamDriveItem(value) {
      this[canMoveTeamDriveItem] = value;
    }
    get canReadDrive() {
      return this[canReadDrive];
    }
    set canReadDrive(value) {
      this[canReadDrive] = value;
    }
    get canReadRevisions() {
      return this[canReadRevisions$];
    }
    set canReadRevisions(value) {
      this[canReadRevisions$] = value;
    }
    get canReadTeamDrive() {
      return this[canReadTeamDrive];
    }
    set canReadTeamDrive(value) {
      this[canReadTeamDrive] = value;
    }
    get canRemoveChildren() {
      return this[canRemoveChildren];
    }
    set canRemoveChildren(value) {
      this[canRemoveChildren] = value;
    }
    get canRemoveMyDriveParent() {
      return this[canRemoveMyDriveParent];
    }
    set canRemoveMyDriveParent(value) {
      this[canRemoveMyDriveParent] = value;
    }
    get canRename() {
      return this[canRename$];
    }
    set canRename(value) {
      this[canRename$] = value;
    }
    get canShare() {
      return this[canShare$];
    }
    set canShare(value) {
      this[canShare$] = value;
    }
    get canTrash() {
      return this[canTrash];
    }
    set canTrash(value) {
      this[canTrash] = value;
    }
    get canTrashChildren() {
      return this[canTrashChildren$];
    }
    set canTrashChildren(value) {
      this[canTrashChildren$] = value;
    }
    get canUntrash() {
      return this[canUntrash];
    }
    set canUntrash(value) {
      this[canUntrash] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.canAddChildren != null) {
        _json[$_set]("canAddChildren", this.canAddChildren);
      }
      if (this.canAddMyDriveParent != null) {
        _json[$_set]("canAddMyDriveParent", this.canAddMyDriveParent);
      }
      if (this.canChangeCopyRequiresWriterPermission != null) {
        _json[$_set]("canChangeCopyRequiresWriterPermission", this.canChangeCopyRequiresWriterPermission);
      }
      if (this.canChangeViewersCanCopyContent != null) {
        _json[$_set]("canChangeViewersCanCopyContent", this.canChangeViewersCanCopyContent);
      }
      if (this.canComment != null) {
        _json[$_set]("canComment", this.canComment);
      }
      if (this.canCopy != null) {
        _json[$_set]("canCopy", this.canCopy);
      }
      if (this.canDelete != null) {
        _json[$_set]("canDelete", this.canDelete);
      }
      if (this.canDeleteChildren != null) {
        _json[$_set]("canDeleteChildren", this.canDeleteChildren);
      }
      if (this.canDownload != null) {
        _json[$_set]("canDownload", this.canDownload);
      }
      if (this.canEdit != null) {
        _json[$_set]("canEdit", this.canEdit);
      }
      if (this.canListChildren != null) {
        _json[$_set]("canListChildren", this.canListChildren);
      }
      if (this.canModifyContent != null) {
        _json[$_set]("canModifyContent", this.canModifyContent);
      }
      if (this.canMoveChildrenOutOfDrive != null) {
        _json[$_set]("canMoveChildrenOutOfDrive", this.canMoveChildrenOutOfDrive);
      }
      if (this.canMoveChildrenOutOfTeamDrive != null) {
        _json[$_set]("canMoveChildrenOutOfTeamDrive", this.canMoveChildrenOutOfTeamDrive);
      }
      if (this.canMoveChildrenWithinDrive != null) {
        _json[$_set]("canMoveChildrenWithinDrive", this.canMoveChildrenWithinDrive);
      }
      if (this.canMoveChildrenWithinTeamDrive != null) {
        _json[$_set]("canMoveChildrenWithinTeamDrive", this.canMoveChildrenWithinTeamDrive);
      }
      if (this.canMoveItemIntoTeamDrive != null) {
        _json[$_set]("canMoveItemIntoTeamDrive", this.canMoveItemIntoTeamDrive);
      }
      if (this.canMoveItemOutOfDrive != null) {
        _json[$_set]("canMoveItemOutOfDrive", this.canMoveItemOutOfDrive);
      }
      if (this.canMoveItemOutOfTeamDrive != null) {
        _json[$_set]("canMoveItemOutOfTeamDrive", this.canMoveItemOutOfTeamDrive);
      }
      if (this.canMoveItemWithinDrive != null) {
        _json[$_set]("canMoveItemWithinDrive", this.canMoveItemWithinDrive);
      }
      if (this.canMoveItemWithinTeamDrive != null) {
        _json[$_set]("canMoveItemWithinTeamDrive", this.canMoveItemWithinTeamDrive);
      }
      if (this.canMoveTeamDriveItem != null) {
        _json[$_set]("canMoveTeamDriveItem", this.canMoveTeamDriveItem);
      }
      if (this.canReadDrive != null) {
        _json[$_set]("canReadDrive", this.canReadDrive);
      }
      if (this.canReadRevisions != null) {
        _json[$_set]("canReadRevisions", this.canReadRevisions);
      }
      if (this.canReadTeamDrive != null) {
        _json[$_set]("canReadTeamDrive", this.canReadTeamDrive);
      }
      if (this.canRemoveChildren != null) {
        _json[$_set]("canRemoveChildren", this.canRemoveChildren);
      }
      if (this.canRemoveMyDriveParent != null) {
        _json[$_set]("canRemoveMyDriveParent", this.canRemoveMyDriveParent);
      }
      if (this.canRename != null) {
        _json[$_set]("canRename", this.canRename);
      }
      if (this.canShare != null) {
        _json[$_set]("canShare", this.canShare);
      }
      if (this.canTrash != null) {
        _json[$_set]("canTrash", this.canTrash);
      }
      if (this.canTrashChildren != null) {
        _json[$_set]("canTrashChildren", this.canTrashChildren);
      }
      if (this.canUntrash != null) {
        _json[$_set]("canUntrash", this.canUntrash);
      }
      return _json;
    }
  };
  (v3.FileCapabilities.new = function() {
    this[canAddChildren$] = null;
    this[canAddMyDriveParent] = null;
    this[canChangeCopyRequiresWriterPermission] = null;
    this[canChangeViewersCanCopyContent] = null;
    this[canComment$] = null;
    this[canCopy$] = null;
    this[canDelete] = null;
    this[canDeleteChildren$] = null;
    this[canDownload$] = null;
    this[canEdit$] = null;
    this[canListChildren$] = null;
    this[canModifyContent] = null;
    this[canMoveChildrenOutOfDrive] = null;
    this[canMoveChildrenOutOfTeamDrive] = null;
    this[canMoveChildrenWithinDrive] = null;
    this[canMoveChildrenWithinTeamDrive] = null;
    this[canMoveItemIntoTeamDrive] = null;
    this[canMoveItemOutOfDrive] = null;
    this[canMoveItemOutOfTeamDrive] = null;
    this[canMoveItemWithinDrive] = null;
    this[canMoveItemWithinTeamDrive] = null;
    this[canMoveTeamDriveItem] = null;
    this[canReadDrive] = null;
    this[canReadRevisions$] = null;
    this[canReadTeamDrive] = null;
    this[canRemoveChildren] = null;
    this[canRemoveMyDriveParent] = null;
    this[canRename$] = null;
    this[canShare$] = null;
    this[canTrash] = null;
    this[canTrashChildren$] = null;
    this[canUntrash] = null;
    ;
  }).prototype = v3.FileCapabilities.prototype;
  (v3.FileCapabilities.fromJson = function(_json) {
    this[canAddChildren$] = null;
    this[canAddMyDriveParent] = null;
    this[canChangeCopyRequiresWriterPermission] = null;
    this[canChangeViewersCanCopyContent] = null;
    this[canComment$] = null;
    this[canCopy$] = null;
    this[canDelete] = null;
    this[canDeleteChildren$] = null;
    this[canDownload$] = null;
    this[canEdit$] = null;
    this[canListChildren$] = null;
    this[canModifyContent] = null;
    this[canMoveChildrenOutOfDrive] = null;
    this[canMoveChildrenOutOfTeamDrive] = null;
    this[canMoveChildrenWithinDrive] = null;
    this[canMoveChildrenWithinTeamDrive] = null;
    this[canMoveItemIntoTeamDrive] = null;
    this[canMoveItemOutOfDrive] = null;
    this[canMoveItemOutOfTeamDrive] = null;
    this[canMoveItemWithinDrive] = null;
    this[canMoveItemWithinTeamDrive] = null;
    this[canMoveTeamDriveItem] = null;
    this[canReadDrive] = null;
    this[canReadRevisions$] = null;
    this[canReadTeamDrive] = null;
    this[canRemoveChildren] = null;
    this[canRemoveMyDriveParent] = null;
    this[canRename$] = null;
    this[canShare$] = null;
    this[canTrash] = null;
    this[canTrashChildren$] = null;
    this[canUntrash] = null;
    if (dart.test(_json[$containsKey]("canAddChildren"))) {
      this.canAddChildren = boolL().as(_json[$_get]("canAddChildren"));
    }
    if (dart.test(_json[$containsKey]("canAddMyDriveParent"))) {
      this.canAddMyDriveParent = boolL().as(_json[$_get]("canAddMyDriveParent"));
    }
    if (dart.test(_json[$containsKey]("canChangeCopyRequiresWriterPermission"))) {
      this.canChangeCopyRequiresWriterPermission = boolL().as(_json[$_get]("canChangeCopyRequiresWriterPermission"));
    }
    if (dart.test(_json[$containsKey]("canChangeViewersCanCopyContent"))) {
      this.canChangeViewersCanCopyContent = boolL().as(_json[$_get]("canChangeViewersCanCopyContent"));
    }
    if (dart.test(_json[$containsKey]("canComment"))) {
      this.canComment = boolL().as(_json[$_get]("canComment"));
    }
    if (dart.test(_json[$containsKey]("canCopy"))) {
      this.canCopy = boolL().as(_json[$_get]("canCopy"));
    }
    if (dart.test(_json[$containsKey]("canDelete"))) {
      this.canDelete = boolL().as(_json[$_get]("canDelete"));
    }
    if (dart.test(_json[$containsKey]("canDeleteChildren"))) {
      this.canDeleteChildren = boolL().as(_json[$_get]("canDeleteChildren"));
    }
    if (dart.test(_json[$containsKey]("canDownload"))) {
      this.canDownload = boolL().as(_json[$_get]("canDownload"));
    }
    if (dart.test(_json[$containsKey]("canEdit"))) {
      this.canEdit = boolL().as(_json[$_get]("canEdit"));
    }
    if (dart.test(_json[$containsKey]("canListChildren"))) {
      this.canListChildren = boolL().as(_json[$_get]("canListChildren"));
    }
    if (dart.test(_json[$containsKey]("canModifyContent"))) {
      this.canModifyContent = boolL().as(_json[$_get]("canModifyContent"));
    }
    if (dart.test(_json[$containsKey]("canMoveChildrenOutOfDrive"))) {
      this.canMoveChildrenOutOfDrive = boolL().as(_json[$_get]("canMoveChildrenOutOfDrive"));
    }
    if (dart.test(_json[$containsKey]("canMoveChildrenOutOfTeamDrive"))) {
      this.canMoveChildrenOutOfTeamDrive = boolL().as(_json[$_get]("canMoveChildrenOutOfTeamDrive"));
    }
    if (dart.test(_json[$containsKey]("canMoveChildrenWithinDrive"))) {
      this.canMoveChildrenWithinDrive = boolL().as(_json[$_get]("canMoveChildrenWithinDrive"));
    }
    if (dart.test(_json[$containsKey]("canMoveChildrenWithinTeamDrive"))) {
      this.canMoveChildrenWithinTeamDrive = boolL().as(_json[$_get]("canMoveChildrenWithinTeamDrive"));
    }
    if (dart.test(_json[$containsKey]("canMoveItemIntoTeamDrive"))) {
      this.canMoveItemIntoTeamDrive = boolL().as(_json[$_get]("canMoveItemIntoTeamDrive"));
    }
    if (dart.test(_json[$containsKey]("canMoveItemOutOfDrive"))) {
      this.canMoveItemOutOfDrive = boolL().as(_json[$_get]("canMoveItemOutOfDrive"));
    }
    if (dart.test(_json[$containsKey]("canMoveItemOutOfTeamDrive"))) {
      this.canMoveItemOutOfTeamDrive = boolL().as(_json[$_get]("canMoveItemOutOfTeamDrive"));
    }
    if (dart.test(_json[$containsKey]("canMoveItemWithinDrive"))) {
      this.canMoveItemWithinDrive = boolL().as(_json[$_get]("canMoveItemWithinDrive"));
    }
    if (dart.test(_json[$containsKey]("canMoveItemWithinTeamDrive"))) {
      this.canMoveItemWithinTeamDrive = boolL().as(_json[$_get]("canMoveItemWithinTeamDrive"));
    }
    if (dart.test(_json[$containsKey]("canMoveTeamDriveItem"))) {
      this.canMoveTeamDriveItem = boolL().as(_json[$_get]("canMoveTeamDriveItem"));
    }
    if (dart.test(_json[$containsKey]("canReadDrive"))) {
      this.canReadDrive = boolL().as(_json[$_get]("canReadDrive"));
    }
    if (dart.test(_json[$containsKey]("canReadRevisions"))) {
      this.canReadRevisions = boolL().as(_json[$_get]("canReadRevisions"));
    }
    if (dart.test(_json[$containsKey]("canReadTeamDrive"))) {
      this.canReadTeamDrive = boolL().as(_json[$_get]("canReadTeamDrive"));
    }
    if (dart.test(_json[$containsKey]("canRemoveChildren"))) {
      this.canRemoveChildren = boolL().as(_json[$_get]("canRemoveChildren"));
    }
    if (dart.test(_json[$containsKey]("canRemoveMyDriveParent"))) {
      this.canRemoveMyDriveParent = boolL().as(_json[$_get]("canRemoveMyDriveParent"));
    }
    if (dart.test(_json[$containsKey]("canRename"))) {
      this.canRename = boolL().as(_json[$_get]("canRename"));
    }
    if (dart.test(_json[$containsKey]("canShare"))) {
      this.canShare = boolL().as(_json[$_get]("canShare"));
    }
    if (dart.test(_json[$containsKey]("canTrash"))) {
      this.canTrash = boolL().as(_json[$_get]("canTrash"));
    }
    if (dart.test(_json[$containsKey]("canTrashChildren"))) {
      this.canTrashChildren = boolL().as(_json[$_get]("canTrashChildren"));
    }
    if (dart.test(_json[$containsKey]("canUntrash"))) {
      this.canUntrash = boolL().as(_json[$_get]("canUntrash"));
    }
  }).prototype = v3.FileCapabilities.prototype;
  dart.addTypeTests(v3.FileCapabilities);
  dart.addTypeCaches(v3.FileCapabilities);
  dart.setMethodSignature(v3.FileCapabilities, () => ({
    __proto__: dart.getMethods(v3.FileCapabilities.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.FileCapabilities, L0);
  dart.setFieldSignature(v3.FileCapabilities, () => ({
    __proto__: dart.getFields(v3.FileCapabilities.__proto__),
    canAddChildren: dart.fieldType(dart.legacy(core.bool)),
    canAddMyDriveParent: dart.fieldType(dart.legacy(core.bool)),
    canChangeCopyRequiresWriterPermission: dart.fieldType(dart.legacy(core.bool)),
    canChangeViewersCanCopyContent: dart.fieldType(dart.legacy(core.bool)),
    canComment: dart.fieldType(dart.legacy(core.bool)),
    canCopy: dart.fieldType(dart.legacy(core.bool)),
    canDelete: dart.fieldType(dart.legacy(core.bool)),
    canDeleteChildren: dart.fieldType(dart.legacy(core.bool)),
    canDownload: dart.fieldType(dart.legacy(core.bool)),
    canEdit: dart.fieldType(dart.legacy(core.bool)),
    canListChildren: dart.fieldType(dart.legacy(core.bool)),
    canModifyContent: dart.fieldType(dart.legacy(core.bool)),
    canMoveChildrenOutOfDrive: dart.fieldType(dart.legacy(core.bool)),
    canMoveChildrenOutOfTeamDrive: dart.fieldType(dart.legacy(core.bool)),
    canMoveChildrenWithinDrive: dart.fieldType(dart.legacy(core.bool)),
    canMoveChildrenWithinTeamDrive: dart.fieldType(dart.legacy(core.bool)),
    canMoveItemIntoTeamDrive: dart.fieldType(dart.legacy(core.bool)),
    canMoveItemOutOfDrive: dart.fieldType(dart.legacy(core.bool)),
    canMoveItemOutOfTeamDrive: dart.fieldType(dart.legacy(core.bool)),
    canMoveItemWithinDrive: dart.fieldType(dart.legacy(core.bool)),
    canMoveItemWithinTeamDrive: dart.fieldType(dart.legacy(core.bool)),
    canMoveTeamDriveItem: dart.fieldType(dart.legacy(core.bool)),
    canReadDrive: dart.fieldType(dart.legacy(core.bool)),
    canReadRevisions: dart.fieldType(dart.legacy(core.bool)),
    canReadTeamDrive: dart.fieldType(dart.legacy(core.bool)),
    canRemoveChildren: dart.fieldType(dart.legacy(core.bool)),
    canRemoveMyDriveParent: dart.fieldType(dart.legacy(core.bool)),
    canRename: dart.fieldType(dart.legacy(core.bool)),
    canShare: dart.fieldType(dart.legacy(core.bool)),
    canTrash: dart.fieldType(dart.legacy(core.bool)),
    canTrashChildren: dart.fieldType(dart.legacy(core.bool)),
    canUntrash: dart.fieldType(dart.legacy(core.bool))
  }));
  var image = dart.privateName(v3, "FileContentHintsThumbnail.image");
  var mimeType$ = dart.privateName(v3, "FileContentHintsThumbnail.mimeType");
  v3.FileContentHintsThumbnail = class FileContentHintsThumbnail extends core.Object {
    get image() {
      return this[image];
    }
    set image(value) {
      this[image] = value;
    }
    get mimeType() {
      return this[mimeType$];
    }
    set mimeType(value) {
      this[mimeType$] = value;
    }
    get imageAsBytes() {
      return convert.base64.decode(this.image);
    }
    set imageAsBytes(_bytes) {
      this.image = convert.base64.encode(_bytes)[$replaceAll]("/", "_")[$replaceAll]("+", "-");
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.image != null) {
        _json[$_set]("image", this.image);
      }
      if (this.mimeType != null) {
        _json[$_set]("mimeType", this.mimeType);
      }
      return _json;
    }
  };
  (v3.FileContentHintsThumbnail.new = function() {
    this[image] = null;
    this[mimeType$] = null;
    ;
  }).prototype = v3.FileContentHintsThumbnail.prototype;
  (v3.FileContentHintsThumbnail.fromJson = function(_json) {
    this[image] = null;
    this[mimeType$] = null;
    if (dart.test(_json[$containsKey]("image"))) {
      this.image = StringL().as(_json[$_get]("image"));
    }
    if (dart.test(_json[$containsKey]("mimeType"))) {
      this.mimeType = StringL().as(_json[$_get]("mimeType"));
    }
  }).prototype = v3.FileContentHintsThumbnail.prototype;
  dart.addTypeTests(v3.FileContentHintsThumbnail);
  dart.addTypeCaches(v3.FileContentHintsThumbnail);
  dart.setMethodSignature(v3.FileContentHintsThumbnail, () => ({
    __proto__: dart.getMethods(v3.FileContentHintsThumbnail.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setGetterSignature(v3.FileContentHintsThumbnail, () => ({
    __proto__: dart.getGetters(v3.FileContentHintsThumbnail.__proto__),
    imageAsBytes: dart.legacy(core.List$(dart.legacy(core.int)))
  }));
  dart.setSetterSignature(v3.FileContentHintsThumbnail, () => ({
    __proto__: dart.getSetters(v3.FileContentHintsThumbnail.__proto__),
    imageAsBytes: dart.legacy(core.List$(dart.legacy(core.int)))
  }));
  dart.setLibraryUri(v3.FileContentHintsThumbnail, L0);
  dart.setFieldSignature(v3.FileContentHintsThumbnail, () => ({
    __proto__: dart.getFields(v3.FileContentHintsThumbnail.__proto__),
    image: dart.fieldType(dart.legacy(core.String)),
    mimeType: dart.fieldType(dart.legacy(core.String))
  }));
  var indexableText = dart.privateName(v3, "FileContentHints.indexableText");
  var thumbnail = dart.privateName(v3, "FileContentHints.thumbnail");
  v3.FileContentHints = class FileContentHints extends core.Object {
    get indexableText() {
      return this[indexableText];
    }
    set indexableText(value) {
      this[indexableText] = value;
    }
    get thumbnail() {
      return this[thumbnail];
    }
    set thumbnail(value) {
      this[thumbnail] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.indexableText != null) {
        _json[$_set]("indexableText", this.indexableText);
      }
      if (this.thumbnail != null) {
        _json[$_set]("thumbnail", this.thumbnail.toJson());
      }
      return _json;
    }
  };
  (v3.FileContentHints.new = function() {
    this[indexableText] = null;
    this[thumbnail] = null;
    ;
  }).prototype = v3.FileContentHints.prototype;
  (v3.FileContentHints.fromJson = function(_json) {
    this[indexableText] = null;
    this[thumbnail] = null;
    if (dart.test(_json[$containsKey]("indexableText"))) {
      this.indexableText = StringL().as(_json[$_get]("indexableText"));
    }
    if (dart.test(_json[$containsKey]("thumbnail"))) {
      this.thumbnail = new v3.FileContentHintsThumbnail.fromJson(MapL().as(_json[$_get]("thumbnail")));
    }
  }).prototype = v3.FileContentHints.prototype;
  dart.addTypeTests(v3.FileContentHints);
  dart.addTypeCaches(v3.FileContentHints);
  dart.setMethodSignature(v3.FileContentHints, () => ({
    __proto__: dart.getMethods(v3.FileContentHints.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.FileContentHints, L0);
  dart.setFieldSignature(v3.FileContentHints, () => ({
    __proto__: dart.getFields(v3.FileContentHints.__proto__),
    indexableText: dart.fieldType(dart.legacy(core.String)),
    thumbnail: dart.fieldType(dart.legacy(v3.FileContentHintsThumbnail))
  }));
  var altitude = dart.privateName(v3, "FileImageMediaMetadataLocation.altitude");
  var latitude = dart.privateName(v3, "FileImageMediaMetadataLocation.latitude");
  var longitude = dart.privateName(v3, "FileImageMediaMetadataLocation.longitude");
  v3.FileImageMediaMetadataLocation = class FileImageMediaMetadataLocation extends core.Object {
    get altitude() {
      return this[altitude];
    }
    set altitude(value) {
      this[altitude] = value;
    }
    get latitude() {
      return this[latitude];
    }
    set latitude(value) {
      this[latitude] = value;
    }
    get longitude() {
      return this[longitude];
    }
    set longitude(value) {
      this[longitude] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.altitude != null) {
        _json[$_set]("altitude", this.altitude);
      }
      if (this.latitude != null) {
        _json[$_set]("latitude", this.latitude);
      }
      if (this.longitude != null) {
        _json[$_set]("longitude", this.longitude);
      }
      return _json;
    }
  };
  (v3.FileImageMediaMetadataLocation.new = function() {
    this[altitude] = null;
    this[latitude] = null;
    this[longitude] = null;
    ;
  }).prototype = v3.FileImageMediaMetadataLocation.prototype;
  (v3.FileImageMediaMetadataLocation.fromJson = function(_json) {
    this[altitude] = null;
    this[latitude] = null;
    this[longitude] = null;
    if (dart.test(_json[$containsKey]("altitude"))) {
      this.altitude = doubleL().as(dart.dsend(_json[$_get]("altitude"), 'toDouble', []));
    }
    if (dart.test(_json[$containsKey]("latitude"))) {
      this.latitude = doubleL().as(dart.dsend(_json[$_get]("latitude"), 'toDouble', []));
    }
    if (dart.test(_json[$containsKey]("longitude"))) {
      this.longitude = doubleL().as(dart.dsend(_json[$_get]("longitude"), 'toDouble', []));
    }
  }).prototype = v3.FileImageMediaMetadataLocation.prototype;
  dart.addTypeTests(v3.FileImageMediaMetadataLocation);
  dart.addTypeCaches(v3.FileImageMediaMetadataLocation);
  dart.setMethodSignature(v3.FileImageMediaMetadataLocation, () => ({
    __proto__: dart.getMethods(v3.FileImageMediaMetadataLocation.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.FileImageMediaMetadataLocation, L0);
  dart.setFieldSignature(v3.FileImageMediaMetadataLocation, () => ({
    __proto__: dart.getFields(v3.FileImageMediaMetadataLocation.__proto__),
    altitude: dart.fieldType(dart.legacy(core.double)),
    latitude: dart.fieldType(dart.legacy(core.double)),
    longitude: dart.fieldType(dart.legacy(core.double))
  }));
  var aperture = dart.privateName(v3, "FileImageMediaMetadata.aperture");
  var cameraMake = dart.privateName(v3, "FileImageMediaMetadata.cameraMake");
  var cameraModel = dart.privateName(v3, "FileImageMediaMetadata.cameraModel");
  var colorSpace = dart.privateName(v3, "FileImageMediaMetadata.colorSpace");
  var exposureBias = dart.privateName(v3, "FileImageMediaMetadata.exposureBias");
  var exposureMode = dart.privateName(v3, "FileImageMediaMetadata.exposureMode");
  var exposureTime = dart.privateName(v3, "FileImageMediaMetadata.exposureTime");
  var flashUsed = dart.privateName(v3, "FileImageMediaMetadata.flashUsed");
  var focalLength = dart.privateName(v3, "FileImageMediaMetadata.focalLength");
  var height = dart.privateName(v3, "FileImageMediaMetadata.height");
  var isoSpeed = dart.privateName(v3, "FileImageMediaMetadata.isoSpeed");
  var lens = dart.privateName(v3, "FileImageMediaMetadata.lens");
  var location = dart.privateName(v3, "FileImageMediaMetadata.location");
  var maxApertureValue = dart.privateName(v3, "FileImageMediaMetadata.maxApertureValue");
  var meteringMode = dart.privateName(v3, "FileImageMediaMetadata.meteringMode");
  var rotation = dart.privateName(v3, "FileImageMediaMetadata.rotation");
  var sensor = dart.privateName(v3, "FileImageMediaMetadata.sensor");
  var subjectDistance = dart.privateName(v3, "FileImageMediaMetadata.subjectDistance");
  var time$ = dart.privateName(v3, "FileImageMediaMetadata.time");
  var whiteBalance = dart.privateName(v3, "FileImageMediaMetadata.whiteBalance");
  var width$ = dart.privateName(v3, "FileImageMediaMetadata.width");
  v3.FileImageMediaMetadata = class FileImageMediaMetadata extends core.Object {
    get aperture() {
      return this[aperture];
    }
    set aperture(value) {
      this[aperture] = value;
    }
    get cameraMake() {
      return this[cameraMake];
    }
    set cameraMake(value) {
      this[cameraMake] = value;
    }
    get cameraModel() {
      return this[cameraModel];
    }
    set cameraModel(value) {
      this[cameraModel] = value;
    }
    get colorSpace() {
      return this[colorSpace];
    }
    set colorSpace(value) {
      this[colorSpace] = value;
    }
    get exposureBias() {
      return this[exposureBias];
    }
    set exposureBias(value) {
      this[exposureBias] = value;
    }
    get exposureMode() {
      return this[exposureMode];
    }
    set exposureMode(value) {
      this[exposureMode] = value;
    }
    get exposureTime() {
      return this[exposureTime];
    }
    set exposureTime(value) {
      this[exposureTime] = value;
    }
    get flashUsed() {
      return this[flashUsed];
    }
    set flashUsed(value) {
      this[flashUsed] = value;
    }
    get focalLength() {
      return this[focalLength];
    }
    set focalLength(value) {
      this[focalLength] = value;
    }
    get height() {
      return this[height];
    }
    set height(value) {
      this[height] = value;
    }
    get isoSpeed() {
      return this[isoSpeed];
    }
    set isoSpeed(value) {
      this[isoSpeed] = value;
    }
    get lens() {
      return this[lens];
    }
    set lens(value) {
      this[lens] = value;
    }
    get location() {
      return this[location];
    }
    set location(value) {
      this[location] = value;
    }
    get maxApertureValue() {
      return this[maxApertureValue];
    }
    set maxApertureValue(value) {
      this[maxApertureValue] = value;
    }
    get meteringMode() {
      return this[meteringMode];
    }
    set meteringMode(value) {
      this[meteringMode] = value;
    }
    get rotation() {
      return this[rotation];
    }
    set rotation(value) {
      this[rotation] = value;
    }
    get sensor() {
      return this[sensor];
    }
    set sensor(value) {
      this[sensor] = value;
    }
    get subjectDistance() {
      return this[subjectDistance];
    }
    set subjectDistance(value) {
      this[subjectDistance] = value;
    }
    get time() {
      return this[time$];
    }
    set time(value) {
      this[time$] = value;
    }
    get whiteBalance() {
      return this[whiteBalance];
    }
    set whiteBalance(value) {
      this[whiteBalance] = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      this[width$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.aperture != null) {
        _json[$_set]("aperture", this.aperture);
      }
      if (this.cameraMake != null) {
        _json[$_set]("cameraMake", this.cameraMake);
      }
      if (this.cameraModel != null) {
        _json[$_set]("cameraModel", this.cameraModel);
      }
      if (this.colorSpace != null) {
        _json[$_set]("colorSpace", this.colorSpace);
      }
      if (this.exposureBias != null) {
        _json[$_set]("exposureBias", this.exposureBias);
      }
      if (this.exposureMode != null) {
        _json[$_set]("exposureMode", this.exposureMode);
      }
      if (this.exposureTime != null) {
        _json[$_set]("exposureTime", this.exposureTime);
      }
      if (this.flashUsed != null) {
        _json[$_set]("flashUsed", this.flashUsed);
      }
      if (this.focalLength != null) {
        _json[$_set]("focalLength", this.focalLength);
      }
      if (this.height != null) {
        _json[$_set]("height", this.height);
      }
      if (this.isoSpeed != null) {
        _json[$_set]("isoSpeed", this.isoSpeed);
      }
      if (this.lens != null) {
        _json[$_set]("lens", this.lens);
      }
      if (this.location != null) {
        _json[$_set]("location", this.location.toJson());
      }
      if (this.maxApertureValue != null) {
        _json[$_set]("maxApertureValue", this.maxApertureValue);
      }
      if (this.meteringMode != null) {
        _json[$_set]("meteringMode", this.meteringMode);
      }
      if (this.rotation != null) {
        _json[$_set]("rotation", this.rotation);
      }
      if (this.sensor != null) {
        _json[$_set]("sensor", this.sensor);
      }
      if (this.subjectDistance != null) {
        _json[$_set]("subjectDistance", this.subjectDistance);
      }
      if (this.time != null) {
        _json[$_set]("time", this.time);
      }
      if (this.whiteBalance != null) {
        _json[$_set]("whiteBalance", this.whiteBalance);
      }
      if (this.width != null) {
        _json[$_set]("width", this.width);
      }
      return _json;
    }
  };
  (v3.FileImageMediaMetadata.new = function() {
    this[aperture] = null;
    this[cameraMake] = null;
    this[cameraModel] = null;
    this[colorSpace] = null;
    this[exposureBias] = null;
    this[exposureMode] = null;
    this[exposureTime] = null;
    this[flashUsed] = null;
    this[focalLength] = null;
    this[height] = null;
    this[isoSpeed] = null;
    this[lens] = null;
    this[location] = null;
    this[maxApertureValue] = null;
    this[meteringMode] = null;
    this[rotation] = null;
    this[sensor] = null;
    this[subjectDistance] = null;
    this[time$] = null;
    this[whiteBalance] = null;
    this[width$] = null;
    ;
  }).prototype = v3.FileImageMediaMetadata.prototype;
  (v3.FileImageMediaMetadata.fromJson = function(_json) {
    this[aperture] = null;
    this[cameraMake] = null;
    this[cameraModel] = null;
    this[colorSpace] = null;
    this[exposureBias] = null;
    this[exposureMode] = null;
    this[exposureTime] = null;
    this[flashUsed] = null;
    this[focalLength] = null;
    this[height] = null;
    this[isoSpeed] = null;
    this[lens] = null;
    this[location] = null;
    this[maxApertureValue] = null;
    this[meteringMode] = null;
    this[rotation] = null;
    this[sensor] = null;
    this[subjectDistance] = null;
    this[time$] = null;
    this[whiteBalance] = null;
    this[width$] = null;
    if (dart.test(_json[$containsKey]("aperture"))) {
      this.aperture = doubleL().as(dart.dsend(_json[$_get]("aperture"), 'toDouble', []));
    }
    if (dart.test(_json[$containsKey]("cameraMake"))) {
      this.cameraMake = StringL().as(_json[$_get]("cameraMake"));
    }
    if (dart.test(_json[$containsKey]("cameraModel"))) {
      this.cameraModel = StringL().as(_json[$_get]("cameraModel"));
    }
    if (dart.test(_json[$containsKey]("colorSpace"))) {
      this.colorSpace = StringL().as(_json[$_get]("colorSpace"));
    }
    if (dart.test(_json[$containsKey]("exposureBias"))) {
      this.exposureBias = doubleL().as(dart.dsend(_json[$_get]("exposureBias"), 'toDouble', []));
    }
    if (dart.test(_json[$containsKey]("exposureMode"))) {
      this.exposureMode = StringL().as(_json[$_get]("exposureMode"));
    }
    if (dart.test(_json[$containsKey]("exposureTime"))) {
      this.exposureTime = doubleL().as(dart.dsend(_json[$_get]("exposureTime"), 'toDouble', []));
    }
    if (dart.test(_json[$containsKey]("flashUsed"))) {
      this.flashUsed = boolL().as(_json[$_get]("flashUsed"));
    }
    if (dart.test(_json[$containsKey]("focalLength"))) {
      this.focalLength = doubleL().as(dart.dsend(_json[$_get]("focalLength"), 'toDouble', []));
    }
    if (dart.test(_json[$containsKey]("height"))) {
      this.height = intL().as(_json[$_get]("height"));
    }
    if (dart.test(_json[$containsKey]("isoSpeed"))) {
      this.isoSpeed = intL().as(_json[$_get]("isoSpeed"));
    }
    if (dart.test(_json[$containsKey]("lens"))) {
      this.lens = StringL().as(_json[$_get]("lens"));
    }
    if (dart.test(_json[$containsKey]("location"))) {
      this.location = new v3.FileImageMediaMetadataLocation.fromJson(MapL().as(_json[$_get]("location")));
    }
    if (dart.test(_json[$containsKey]("maxApertureValue"))) {
      this.maxApertureValue = doubleL().as(dart.dsend(_json[$_get]("maxApertureValue"), 'toDouble', []));
    }
    if (dart.test(_json[$containsKey]("meteringMode"))) {
      this.meteringMode = StringL().as(_json[$_get]("meteringMode"));
    }
    if (dart.test(_json[$containsKey]("rotation"))) {
      this.rotation = intL().as(_json[$_get]("rotation"));
    }
    if (dart.test(_json[$containsKey]("sensor"))) {
      this.sensor = StringL().as(_json[$_get]("sensor"));
    }
    if (dart.test(_json[$containsKey]("subjectDistance"))) {
      this.subjectDistance = intL().as(_json[$_get]("subjectDistance"));
    }
    if (dart.test(_json[$containsKey]("time"))) {
      this.time = StringL().as(_json[$_get]("time"));
    }
    if (dart.test(_json[$containsKey]("whiteBalance"))) {
      this.whiteBalance = StringL().as(_json[$_get]("whiteBalance"));
    }
    if (dart.test(_json[$containsKey]("width"))) {
      this.width = intL().as(_json[$_get]("width"));
    }
  }).prototype = v3.FileImageMediaMetadata.prototype;
  dart.addTypeTests(v3.FileImageMediaMetadata);
  dart.addTypeCaches(v3.FileImageMediaMetadata);
  dart.setMethodSignature(v3.FileImageMediaMetadata, () => ({
    __proto__: dart.getMethods(v3.FileImageMediaMetadata.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.FileImageMediaMetadata, L0);
  dart.setFieldSignature(v3.FileImageMediaMetadata, () => ({
    __proto__: dart.getFields(v3.FileImageMediaMetadata.__proto__),
    aperture: dart.fieldType(dart.legacy(core.double)),
    cameraMake: dart.fieldType(dart.legacy(core.String)),
    cameraModel: dart.fieldType(dart.legacy(core.String)),
    colorSpace: dart.fieldType(dart.legacy(core.String)),
    exposureBias: dart.fieldType(dart.legacy(core.double)),
    exposureMode: dart.fieldType(dart.legacy(core.String)),
    exposureTime: dart.fieldType(dart.legacy(core.double)),
    flashUsed: dart.fieldType(dart.legacy(core.bool)),
    focalLength: dart.fieldType(dart.legacy(core.double)),
    height: dart.fieldType(dart.legacy(core.int)),
    isoSpeed: dart.fieldType(dart.legacy(core.int)),
    lens: dart.fieldType(dart.legacy(core.String)),
    location: dart.fieldType(dart.legacy(v3.FileImageMediaMetadataLocation)),
    maxApertureValue: dart.fieldType(dart.legacy(core.double)),
    meteringMode: dart.fieldType(dart.legacy(core.String)),
    rotation: dart.fieldType(dart.legacy(core.int)),
    sensor: dart.fieldType(dart.legacy(core.String)),
    subjectDistance: dart.fieldType(dart.legacy(core.int)),
    time: dart.fieldType(dart.legacy(core.String)),
    whiteBalance: dart.fieldType(dart.legacy(core.String)),
    width: dart.fieldType(dart.legacy(core.int))
  }));
  var targetId = dart.privateName(v3, "FileShortcutDetails.targetId");
  var targetMimeType = dart.privateName(v3, "FileShortcutDetails.targetMimeType");
  v3.FileShortcutDetails = class FileShortcutDetails extends core.Object {
    get targetId() {
      return this[targetId];
    }
    set targetId(value) {
      this[targetId] = value;
    }
    get targetMimeType() {
      return this[targetMimeType];
    }
    set targetMimeType(value) {
      this[targetMimeType] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.targetId != null) {
        _json[$_set]("targetId", this.targetId);
      }
      if (this.targetMimeType != null) {
        _json[$_set]("targetMimeType", this.targetMimeType);
      }
      return _json;
    }
  };
  (v3.FileShortcutDetails.new = function() {
    this[targetId] = null;
    this[targetMimeType] = null;
    ;
  }).prototype = v3.FileShortcutDetails.prototype;
  (v3.FileShortcutDetails.fromJson = function(_json) {
    this[targetId] = null;
    this[targetMimeType] = null;
    if (dart.test(_json[$containsKey]("targetId"))) {
      this.targetId = StringL().as(_json[$_get]("targetId"));
    }
    if (dart.test(_json[$containsKey]("targetMimeType"))) {
      this.targetMimeType = StringL().as(_json[$_get]("targetMimeType"));
    }
  }).prototype = v3.FileShortcutDetails.prototype;
  dart.addTypeTests(v3.FileShortcutDetails);
  dart.addTypeCaches(v3.FileShortcutDetails);
  dart.setMethodSignature(v3.FileShortcutDetails, () => ({
    __proto__: dart.getMethods(v3.FileShortcutDetails.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.FileShortcutDetails, L0);
  dart.setFieldSignature(v3.FileShortcutDetails, () => ({
    __proto__: dart.getFields(v3.FileShortcutDetails.__proto__),
    targetId: dart.fieldType(dart.legacy(core.String)),
    targetMimeType: dart.fieldType(dart.legacy(core.String))
  }));
  var durationMillis = dart.privateName(v3, "FileVideoMediaMetadata.durationMillis");
  var height$ = dart.privateName(v3, "FileVideoMediaMetadata.height");
  var width$0 = dart.privateName(v3, "FileVideoMediaMetadata.width");
  v3.FileVideoMediaMetadata = class FileVideoMediaMetadata extends core.Object {
    get durationMillis() {
      return this[durationMillis];
    }
    set durationMillis(value) {
      this[durationMillis] = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      this[height$] = value;
    }
    get width() {
      return this[width$0];
    }
    set width(value) {
      this[width$0] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.durationMillis != null) {
        _json[$_set]("durationMillis", this.durationMillis);
      }
      if (this.height != null) {
        _json[$_set]("height", this.height);
      }
      if (this.width != null) {
        _json[$_set]("width", this.width);
      }
      return _json;
    }
  };
  (v3.FileVideoMediaMetadata.new = function() {
    this[durationMillis] = null;
    this[height$] = null;
    this[width$0] = null;
    ;
  }).prototype = v3.FileVideoMediaMetadata.prototype;
  (v3.FileVideoMediaMetadata.fromJson = function(_json) {
    this[durationMillis] = null;
    this[height$] = null;
    this[width$0] = null;
    if (dart.test(_json[$containsKey]("durationMillis"))) {
      this.durationMillis = StringL().as(_json[$_get]("durationMillis"));
    }
    if (dart.test(_json[$containsKey]("height"))) {
      this.height = intL().as(_json[$_get]("height"));
    }
    if (dart.test(_json[$containsKey]("width"))) {
      this.width = intL().as(_json[$_get]("width"));
    }
  }).prototype = v3.FileVideoMediaMetadata.prototype;
  dart.addTypeTests(v3.FileVideoMediaMetadata);
  dart.addTypeCaches(v3.FileVideoMediaMetadata);
  dart.setMethodSignature(v3.FileVideoMediaMetadata, () => ({
    __proto__: dart.getMethods(v3.FileVideoMediaMetadata.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.FileVideoMediaMetadata, L0);
  dart.setFieldSignature(v3.FileVideoMediaMetadata, () => ({
    __proto__: dart.getFields(v3.FileVideoMediaMetadata.__proto__),
    durationMillis: dart.fieldType(dart.legacy(core.String)),
    height: dart.fieldType(dart.legacy(core.int)),
    width: dart.fieldType(dart.legacy(core.int))
  }));
  var appProperties = dart.privateName(v3, "File.appProperties");
  var capabilities$ = dart.privateName(v3, "File.capabilities");
  var contentHints = dart.privateName(v3, "File.contentHints");
  var copyRequiresWriterPermission$ = dart.privateName(v3, "File.copyRequiresWriterPermission");
  var createdTime$0 = dart.privateName(v3, "File.createdTime");
  var description = dart.privateName(v3, "File.description");
  var driveId$ = dart.privateName(v3, "File.driveId");
  var explicitlyTrashed = dart.privateName(v3, "File.explicitlyTrashed");
  var exportLinks = dart.privateName(v3, "File.exportLinks");
  var fileExtension = dart.privateName(v3, "File.fileExtension");
  var folderColorRgb = dart.privateName(v3, "File.folderColorRgb");
  var fullFileExtension = dart.privateName(v3, "File.fullFileExtension");
  var hasAugmentedPermissions = dart.privateName(v3, "File.hasAugmentedPermissions");
  var hasThumbnail = dart.privateName(v3, "File.hasThumbnail");
  var headRevisionId = dart.privateName(v3, "File.headRevisionId");
  var iconLink = dart.privateName(v3, "File.iconLink");
  var id$4 = dart.privateName(v3, "File.id");
  var imageMediaMetadata = dart.privateName(v3, "File.imageMediaMetadata");
  var isAppAuthorized = dart.privateName(v3, "File.isAppAuthorized");
  var kind$6 = dart.privateName(v3, "File.kind");
  var lastModifyingUser = dart.privateName(v3, "File.lastModifyingUser");
  var md5Checksum = dart.privateName(v3, "File.md5Checksum");
  var mimeType$0 = dart.privateName(v3, "File.mimeType");
  var modifiedByMe = dart.privateName(v3, "File.modifiedByMe");
  var modifiedByMeTime = dart.privateName(v3, "File.modifiedByMeTime");
  var modifiedTime$ = dart.privateName(v3, "File.modifiedTime");
  var name$ = dart.privateName(v3, "File.name");
  var originalFilename = dart.privateName(v3, "File.originalFilename");
  var ownedByMe = dart.privateName(v3, "File.ownedByMe");
  var owners = dart.privateName(v3, "File.owners");
  var parents = dart.privateName(v3, "File.parents");
  var permissionIds = dart.privateName(v3, "File.permissionIds");
  var permissions = dart.privateName(v3, "File.permissions");
  var properties = dart.privateName(v3, "File.properties");
  var quotaBytesUsed = dart.privateName(v3, "File.quotaBytesUsed");
  var shared = dart.privateName(v3, "File.shared");
  var sharedWithMeTime = dart.privateName(v3, "File.sharedWithMeTime");
  var sharingUser = dart.privateName(v3, "File.sharingUser");
  var shortcutDetails = dart.privateName(v3, "File.shortcutDetails");
  var size = dart.privateName(v3, "File.size");
  var spaces = dart.privateName(v3, "File.spaces");
  var starred = dart.privateName(v3, "File.starred");
  var teamDriveId$ = dart.privateName(v3, "File.teamDriveId");
  var thumbnailLink = dart.privateName(v3, "File.thumbnailLink");
  var thumbnailVersion = dart.privateName(v3, "File.thumbnailVersion");
  var trashed = dart.privateName(v3, "File.trashed");
  var trashedTime = dart.privateName(v3, "File.trashedTime");
  var trashingUser = dart.privateName(v3, "File.trashingUser");
  var version = dart.privateName(v3, "File.version");
  var videoMediaMetadata = dart.privateName(v3, "File.videoMediaMetadata");
  var viewedByMe = dart.privateName(v3, "File.viewedByMe");
  var viewedByMeTime = dart.privateName(v3, "File.viewedByMeTime");
  var viewersCanCopyContent = dart.privateName(v3, "File.viewersCanCopyContent");
  var webContentLink = dart.privateName(v3, "File.webContentLink");
  var webViewLink = dart.privateName(v3, "File.webViewLink");
  var writersCanShare = dart.privateName(v3, "File.writersCanShare");
  v3.File = class File extends core.Object {
    get appProperties() {
      return this[appProperties];
    }
    set appProperties(value) {
      this[appProperties] = value;
    }
    get capabilities() {
      return this[capabilities$];
    }
    set capabilities(value) {
      this[capabilities$] = value;
    }
    get contentHints() {
      return this[contentHints];
    }
    set contentHints(value) {
      this[contentHints] = value;
    }
    get copyRequiresWriterPermission() {
      return this[copyRequiresWriterPermission$];
    }
    set copyRequiresWriterPermission(value) {
      this[copyRequiresWriterPermission$] = value;
    }
    get createdTime() {
      return this[createdTime$0];
    }
    set createdTime(value) {
      this[createdTime$0] = value;
    }
    get description() {
      return this[description];
    }
    set description(value) {
      this[description] = value;
    }
    get driveId() {
      return this[driveId$];
    }
    set driveId(value) {
      this[driveId$] = value;
    }
    get explicitlyTrashed() {
      return this[explicitlyTrashed];
    }
    set explicitlyTrashed(value) {
      this[explicitlyTrashed] = value;
    }
    get exportLinks() {
      return this[exportLinks];
    }
    set exportLinks(value) {
      this[exportLinks] = value;
    }
    get fileExtension() {
      return this[fileExtension];
    }
    set fileExtension(value) {
      this[fileExtension] = value;
    }
    get folderColorRgb() {
      return this[folderColorRgb];
    }
    set folderColorRgb(value) {
      this[folderColorRgb] = value;
    }
    get fullFileExtension() {
      return this[fullFileExtension];
    }
    set fullFileExtension(value) {
      this[fullFileExtension] = value;
    }
    get hasAugmentedPermissions() {
      return this[hasAugmentedPermissions];
    }
    set hasAugmentedPermissions(value) {
      this[hasAugmentedPermissions] = value;
    }
    get hasThumbnail() {
      return this[hasThumbnail];
    }
    set hasThumbnail(value) {
      this[hasThumbnail] = value;
    }
    get headRevisionId() {
      return this[headRevisionId];
    }
    set headRevisionId(value) {
      this[headRevisionId] = value;
    }
    get iconLink() {
      return this[iconLink];
    }
    set iconLink(value) {
      this[iconLink] = value;
    }
    get id() {
      return this[id$4];
    }
    set id(value) {
      this[id$4] = value;
    }
    get imageMediaMetadata() {
      return this[imageMediaMetadata];
    }
    set imageMediaMetadata(value) {
      this[imageMediaMetadata] = value;
    }
    get isAppAuthorized() {
      return this[isAppAuthorized];
    }
    set isAppAuthorized(value) {
      this[isAppAuthorized] = value;
    }
    get kind() {
      return this[kind$6];
    }
    set kind(value) {
      this[kind$6] = value;
    }
    get lastModifyingUser() {
      return this[lastModifyingUser];
    }
    set lastModifyingUser(value) {
      this[lastModifyingUser] = value;
    }
    get md5Checksum() {
      return this[md5Checksum];
    }
    set md5Checksum(value) {
      this[md5Checksum] = value;
    }
    get mimeType() {
      return this[mimeType$0];
    }
    set mimeType(value) {
      this[mimeType$0] = value;
    }
    get modifiedByMe() {
      return this[modifiedByMe];
    }
    set modifiedByMe(value) {
      this[modifiedByMe] = value;
    }
    get modifiedByMeTime() {
      return this[modifiedByMeTime];
    }
    set modifiedByMeTime(value) {
      this[modifiedByMeTime] = value;
    }
    get modifiedTime() {
      return this[modifiedTime$];
    }
    set modifiedTime(value) {
      this[modifiedTime$] = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get originalFilename() {
      return this[originalFilename];
    }
    set originalFilename(value) {
      this[originalFilename] = value;
    }
    get ownedByMe() {
      return this[ownedByMe];
    }
    set ownedByMe(value) {
      this[ownedByMe] = value;
    }
    get owners() {
      return this[owners];
    }
    set owners(value) {
      this[owners] = value;
    }
    get parents() {
      return this[parents];
    }
    set parents(value) {
      this[parents] = value;
    }
    get permissionIds() {
      return this[permissionIds];
    }
    set permissionIds(value) {
      this[permissionIds] = value;
    }
    get permissions() {
      return this[permissions];
    }
    set permissions(value) {
      this[permissions] = value;
    }
    get properties() {
      return this[properties];
    }
    set properties(value) {
      this[properties] = value;
    }
    get quotaBytesUsed() {
      return this[quotaBytesUsed];
    }
    set quotaBytesUsed(value) {
      this[quotaBytesUsed] = value;
    }
    get shared() {
      return this[shared];
    }
    set shared(value) {
      this[shared] = value;
    }
    get sharedWithMeTime() {
      return this[sharedWithMeTime];
    }
    set sharedWithMeTime(value) {
      this[sharedWithMeTime] = value;
    }
    get sharingUser() {
      return this[sharingUser];
    }
    set sharingUser(value) {
      this[sharingUser] = value;
    }
    get shortcutDetails() {
      return this[shortcutDetails];
    }
    set shortcutDetails(value) {
      this[shortcutDetails] = value;
    }
    get size() {
      return this[size];
    }
    set size(value) {
      this[size] = value;
    }
    get spaces() {
      return this[spaces];
    }
    set spaces(value) {
      this[spaces] = value;
    }
    get starred() {
      return this[starred];
    }
    set starred(value) {
      this[starred] = value;
    }
    get teamDriveId() {
      return this[teamDriveId$];
    }
    set teamDriveId(value) {
      this[teamDriveId$] = value;
    }
    get thumbnailLink() {
      return this[thumbnailLink];
    }
    set thumbnailLink(value) {
      this[thumbnailLink] = value;
    }
    get thumbnailVersion() {
      return this[thumbnailVersion];
    }
    set thumbnailVersion(value) {
      this[thumbnailVersion] = value;
    }
    get trashed() {
      return this[trashed];
    }
    set trashed(value) {
      this[trashed] = value;
    }
    get trashedTime() {
      return this[trashedTime];
    }
    set trashedTime(value) {
      this[trashedTime] = value;
    }
    get trashingUser() {
      return this[trashingUser];
    }
    set trashingUser(value) {
      this[trashingUser] = value;
    }
    get version() {
      return this[version];
    }
    set version(value) {
      this[version] = value;
    }
    get videoMediaMetadata() {
      return this[videoMediaMetadata];
    }
    set videoMediaMetadata(value) {
      this[videoMediaMetadata] = value;
    }
    get viewedByMe() {
      return this[viewedByMe];
    }
    set viewedByMe(value) {
      this[viewedByMe] = value;
    }
    get viewedByMeTime() {
      return this[viewedByMeTime];
    }
    set viewedByMeTime(value) {
      this[viewedByMeTime] = value;
    }
    get viewersCanCopyContent() {
      return this[viewersCanCopyContent];
    }
    set viewersCanCopyContent(value) {
      this[viewersCanCopyContent] = value;
    }
    get webContentLink() {
      return this[webContentLink];
    }
    set webContentLink(value) {
      this[webContentLink] = value;
    }
    get webViewLink() {
      return this[webViewLink];
    }
    set webViewLink(value) {
      this[webViewLink] = value;
    }
    get writersCanShare() {
      return this[writersCanShare];
    }
    set writersCanShare(value) {
      this[writersCanShare] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.appProperties != null) {
        _json[$_set]("appProperties", this.appProperties);
      }
      if (this.capabilities != null) {
        _json[$_set]("capabilities", this.capabilities.toJson());
      }
      if (this.contentHints != null) {
        _json[$_set]("contentHints", this.contentHints.toJson());
      }
      if (this.copyRequiresWriterPermission != null) {
        _json[$_set]("copyRequiresWriterPermission", this.copyRequiresWriterPermission);
      }
      if (this.createdTime != null) {
        _json[$_set]("createdTime", this.createdTime.toIso8601String());
      }
      if (this.description != null) {
        _json[$_set]("description", this.description);
      }
      if (this.driveId != null) {
        _json[$_set]("driveId", this.driveId);
      }
      if (this.explicitlyTrashed != null) {
        _json[$_set]("explicitlyTrashed", this.explicitlyTrashed);
      }
      if (this.exportLinks != null) {
        _json[$_set]("exportLinks", this.exportLinks);
      }
      if (this.fileExtension != null) {
        _json[$_set]("fileExtension", this.fileExtension);
      }
      if (this.folderColorRgb != null) {
        _json[$_set]("folderColorRgb", this.folderColorRgb);
      }
      if (this.fullFileExtension != null) {
        _json[$_set]("fullFileExtension", this.fullFileExtension);
      }
      if (this.hasAugmentedPermissions != null) {
        _json[$_set]("hasAugmentedPermissions", this.hasAugmentedPermissions);
      }
      if (this.hasThumbnail != null) {
        _json[$_set]("hasThumbnail", this.hasThumbnail);
      }
      if (this.headRevisionId != null) {
        _json[$_set]("headRevisionId", this.headRevisionId);
      }
      if (this.iconLink != null) {
        _json[$_set]("iconLink", this.iconLink);
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.imageMediaMetadata != null) {
        _json[$_set]("imageMediaMetadata", this.imageMediaMetadata.toJson());
      }
      if (this.isAppAuthorized != null) {
        _json[$_set]("isAppAuthorized", this.isAppAuthorized);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.lastModifyingUser != null) {
        _json[$_set]("lastModifyingUser", this.lastModifyingUser.toJson());
      }
      if (this.md5Checksum != null) {
        _json[$_set]("md5Checksum", this.md5Checksum);
      }
      if (this.mimeType != null) {
        _json[$_set]("mimeType", this.mimeType);
      }
      if (this.modifiedByMe != null) {
        _json[$_set]("modifiedByMe", this.modifiedByMe);
      }
      if (this.modifiedByMeTime != null) {
        _json[$_set]("modifiedByMeTime", this.modifiedByMeTime.toIso8601String());
      }
      if (this.modifiedTime != null) {
        _json[$_set]("modifiedTime", this.modifiedTime.toIso8601String());
      }
      if (this.name != null) {
        _json[$_set]("name", this.name);
      }
      if (this.originalFilename != null) {
        _json[$_set]("originalFilename", this.originalFilename);
      }
      if (this.ownedByMe != null) {
        _json[$_set]("ownedByMe", this.ownedByMe);
      }
      if (this.owners != null) {
        _json[$_set]("owners", this.owners[$map](MapLOfStringL$ObjectL(), dart.fn(value => value.toJson(), UserLToMapLOfStringL$ObjectL()))[$toList]());
      }
      if (this.parents != null) {
        _json[$_set]("parents", this.parents);
      }
      if (this.permissionIds != null) {
        _json[$_set]("permissionIds", this.permissionIds);
      }
      if (this.permissions != null) {
        _json[$_set]("permissions", this.permissions[$map](MapLOfStringL$ObjectL(), dart.fn(value => value.toJson(), PermissionLToMapLOfStringL$ObjectL()))[$toList]());
      }
      if (this.properties != null) {
        _json[$_set]("properties", this.properties);
      }
      if (this.quotaBytesUsed != null) {
        _json[$_set]("quotaBytesUsed", this.quotaBytesUsed);
      }
      if (this.shared != null) {
        _json[$_set]("shared", this.shared);
      }
      if (this.sharedWithMeTime != null) {
        _json[$_set]("sharedWithMeTime", this.sharedWithMeTime.toIso8601String());
      }
      if (this.sharingUser != null) {
        _json[$_set]("sharingUser", this.sharingUser.toJson());
      }
      if (this.shortcutDetails != null) {
        _json[$_set]("shortcutDetails", this.shortcutDetails.toJson());
      }
      if (this.size != null) {
        _json[$_set]("size", this.size);
      }
      if (this.spaces != null) {
        _json[$_set]("spaces", this.spaces);
      }
      if (this.starred != null) {
        _json[$_set]("starred", this.starred);
      }
      if (this.teamDriveId != null) {
        _json[$_set]("teamDriveId", this.teamDriveId);
      }
      if (this.thumbnailLink != null) {
        _json[$_set]("thumbnailLink", this.thumbnailLink);
      }
      if (this.thumbnailVersion != null) {
        _json[$_set]("thumbnailVersion", this.thumbnailVersion);
      }
      if (this.trashed != null) {
        _json[$_set]("trashed", this.trashed);
      }
      if (this.trashedTime != null) {
        _json[$_set]("trashedTime", this.trashedTime.toIso8601String());
      }
      if (this.trashingUser != null) {
        _json[$_set]("trashingUser", this.trashingUser.toJson());
      }
      if (this.version != null) {
        _json[$_set]("version", this.version);
      }
      if (this.videoMediaMetadata != null) {
        _json[$_set]("videoMediaMetadata", this.videoMediaMetadata.toJson());
      }
      if (this.viewedByMe != null) {
        _json[$_set]("viewedByMe", this.viewedByMe);
      }
      if (this.viewedByMeTime != null) {
        _json[$_set]("viewedByMeTime", this.viewedByMeTime.toIso8601String());
      }
      if (this.viewersCanCopyContent != null) {
        _json[$_set]("viewersCanCopyContent", this.viewersCanCopyContent);
      }
      if (this.webContentLink != null) {
        _json[$_set]("webContentLink", this.webContentLink);
      }
      if (this.webViewLink != null) {
        _json[$_set]("webViewLink", this.webViewLink);
      }
      if (this.writersCanShare != null) {
        _json[$_set]("writersCanShare", this.writersCanShare);
      }
      return _json;
    }
  };
  (v3.File.new = function() {
    this[appProperties] = null;
    this[capabilities$] = null;
    this[contentHints] = null;
    this[copyRequiresWriterPermission$] = null;
    this[createdTime$0] = null;
    this[description] = null;
    this[driveId$] = null;
    this[explicitlyTrashed] = null;
    this[exportLinks] = null;
    this[fileExtension] = null;
    this[folderColorRgb] = null;
    this[fullFileExtension] = null;
    this[hasAugmentedPermissions] = null;
    this[hasThumbnail] = null;
    this[headRevisionId] = null;
    this[iconLink] = null;
    this[id$4] = null;
    this[imageMediaMetadata] = null;
    this[isAppAuthorized] = null;
    this[kind$6] = null;
    this[lastModifyingUser] = null;
    this[md5Checksum] = null;
    this[mimeType$0] = null;
    this[modifiedByMe] = null;
    this[modifiedByMeTime] = null;
    this[modifiedTime$] = null;
    this[name$] = null;
    this[originalFilename] = null;
    this[ownedByMe] = null;
    this[owners] = null;
    this[parents] = null;
    this[permissionIds] = null;
    this[permissions] = null;
    this[properties] = null;
    this[quotaBytesUsed] = null;
    this[shared] = null;
    this[sharedWithMeTime] = null;
    this[sharingUser] = null;
    this[shortcutDetails] = null;
    this[size] = null;
    this[spaces] = null;
    this[starred] = null;
    this[teamDriveId$] = null;
    this[thumbnailLink] = null;
    this[thumbnailVersion] = null;
    this[trashed] = null;
    this[trashedTime] = null;
    this[trashingUser] = null;
    this[version] = null;
    this[videoMediaMetadata] = null;
    this[viewedByMe] = null;
    this[viewedByMeTime] = null;
    this[viewersCanCopyContent] = null;
    this[webContentLink] = null;
    this[webViewLink] = null;
    this[writersCanShare] = null;
    ;
  }).prototype = v3.File.prototype;
  (v3.File.fromJson = function(_json) {
    this[appProperties] = null;
    this[capabilities$] = null;
    this[contentHints] = null;
    this[copyRequiresWriterPermission$] = null;
    this[createdTime$0] = null;
    this[description] = null;
    this[driveId$] = null;
    this[explicitlyTrashed] = null;
    this[exportLinks] = null;
    this[fileExtension] = null;
    this[folderColorRgb] = null;
    this[fullFileExtension] = null;
    this[hasAugmentedPermissions] = null;
    this[hasThumbnail] = null;
    this[headRevisionId] = null;
    this[iconLink] = null;
    this[id$4] = null;
    this[imageMediaMetadata] = null;
    this[isAppAuthorized] = null;
    this[kind$6] = null;
    this[lastModifyingUser] = null;
    this[md5Checksum] = null;
    this[mimeType$0] = null;
    this[modifiedByMe] = null;
    this[modifiedByMeTime] = null;
    this[modifiedTime$] = null;
    this[name$] = null;
    this[originalFilename] = null;
    this[ownedByMe] = null;
    this[owners] = null;
    this[parents] = null;
    this[permissionIds] = null;
    this[permissions] = null;
    this[properties] = null;
    this[quotaBytesUsed] = null;
    this[shared] = null;
    this[sharedWithMeTime] = null;
    this[sharingUser] = null;
    this[shortcutDetails] = null;
    this[size] = null;
    this[spaces] = null;
    this[starred] = null;
    this[teamDriveId$] = null;
    this[thumbnailLink] = null;
    this[thumbnailVersion] = null;
    this[trashed] = null;
    this[trashedTime] = null;
    this[trashingUser] = null;
    this[version] = null;
    this[videoMediaMetadata] = null;
    this[viewedByMe] = null;
    this[viewedByMeTime] = null;
    this[viewersCanCopyContent] = null;
    this[webContentLink] = null;
    this[webViewLink] = null;
    this[writersCanShare] = null;
    if (dart.test(_json[$containsKey]("appProperties"))) {
      this.appProperties = MapL().as(_json[$_get]("appProperties"))[$cast](StringL(), StringL());
    }
    if (dart.test(_json[$containsKey]("capabilities"))) {
      this.capabilities = new v3.FileCapabilities.fromJson(MapL().as(_json[$_get]("capabilities")));
    }
    if (dart.test(_json[$containsKey]("contentHints"))) {
      this.contentHints = new v3.FileContentHints.fromJson(MapL().as(_json[$_get]("contentHints")));
    }
    if (dart.test(_json[$containsKey]("copyRequiresWriterPermission"))) {
      this.copyRequiresWriterPermission = boolL().as(_json[$_get]("copyRequiresWriterPermission"));
    }
    if (dart.test(_json[$containsKey]("createdTime"))) {
      this.createdTime = core.DateTime.parse(core.String.as(_json[$_get]("createdTime")));
    }
    if (dart.test(_json[$containsKey]("description"))) {
      this.description = StringL().as(_json[$_get]("description"));
    }
    if (dart.test(_json[$containsKey]("driveId"))) {
      this.driveId = StringL().as(_json[$_get]("driveId"));
    }
    if (dart.test(_json[$containsKey]("explicitlyTrashed"))) {
      this.explicitlyTrashed = boolL().as(_json[$_get]("explicitlyTrashed"));
    }
    if (dart.test(_json[$containsKey]("exportLinks"))) {
      this.exportLinks = MapL().as(_json[$_get]("exportLinks"))[$cast](StringL(), StringL());
    }
    if (dart.test(_json[$containsKey]("fileExtension"))) {
      this.fileExtension = StringL().as(_json[$_get]("fileExtension"));
    }
    if (dart.test(_json[$containsKey]("folderColorRgb"))) {
      this.folderColorRgb = StringL().as(_json[$_get]("folderColorRgb"));
    }
    if (dart.test(_json[$containsKey]("fullFileExtension"))) {
      this.fullFileExtension = StringL().as(_json[$_get]("fullFileExtension"));
    }
    if (dart.test(_json[$containsKey]("hasAugmentedPermissions"))) {
      this.hasAugmentedPermissions = boolL().as(_json[$_get]("hasAugmentedPermissions"));
    }
    if (dart.test(_json[$containsKey]("hasThumbnail"))) {
      this.hasThumbnail = boolL().as(_json[$_get]("hasThumbnail"));
    }
    if (dart.test(_json[$containsKey]("headRevisionId"))) {
      this.headRevisionId = StringL().as(_json[$_get]("headRevisionId"));
    }
    if (dart.test(_json[$containsKey]("iconLink"))) {
      this.iconLink = StringL().as(_json[$_get]("iconLink"));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = StringL().as(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("imageMediaMetadata"))) {
      this.imageMediaMetadata = new v3.FileImageMediaMetadata.fromJson(MapL().as(_json[$_get]("imageMediaMetadata")));
    }
    if (dart.test(_json[$containsKey]("isAppAuthorized"))) {
      this.isAppAuthorized = boolL().as(_json[$_get]("isAppAuthorized"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("lastModifyingUser"))) {
      this.lastModifyingUser = new v3.User.fromJson(MapL().as(_json[$_get]("lastModifyingUser")));
    }
    if (dart.test(_json[$containsKey]("md5Checksum"))) {
      this.md5Checksum = StringL().as(_json[$_get]("md5Checksum"));
    }
    if (dart.test(_json[$containsKey]("mimeType"))) {
      this.mimeType = StringL().as(_json[$_get]("mimeType"));
    }
    if (dart.test(_json[$containsKey]("modifiedByMe"))) {
      this.modifiedByMe = boolL().as(_json[$_get]("modifiedByMe"));
    }
    if (dart.test(_json[$containsKey]("modifiedByMeTime"))) {
      this.modifiedByMeTime = core.DateTime.parse(core.String.as(_json[$_get]("modifiedByMeTime")));
    }
    if (dart.test(_json[$containsKey]("modifiedTime"))) {
      this.modifiedTime = core.DateTime.parse(core.String.as(_json[$_get]("modifiedTime")));
    }
    if (dart.test(_json[$containsKey]("name"))) {
      this.name = StringL().as(_json[$_get]("name"));
    }
    if (dart.test(_json[$containsKey]("originalFilename"))) {
      this.originalFilename = StringL().as(_json[$_get]("originalFilename"));
    }
    if (dart.test(_json[$containsKey]("ownedByMe"))) {
      this.ownedByMe = boolL().as(_json[$_get]("ownedByMe"));
    }
    if (dart.test(_json[$containsKey]("owners"))) {
      this.owners = ListL().as(_json[$_get]("owners"))[$map](UserL(), dart.fn(value => new v3.User.fromJson(MapL().as(value)), dynamicToUserL()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("parents"))) {
      this.parents = ListL().as(_json[$_get]("parents"))[$cast](StringL());
    }
    if (dart.test(_json[$containsKey]("permissionIds"))) {
      this.permissionIds = ListL().as(_json[$_get]("permissionIds"))[$cast](StringL());
    }
    if (dart.test(_json[$containsKey]("permissions"))) {
      this.permissions = ListL().as(_json[$_get]("permissions"))[$map](PermissionL(), dart.fn(value => new v3.Permission.fromJson(MapL().as(value)), dynamicToPermissionL()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("properties"))) {
      this.properties = MapL().as(_json[$_get]("properties"))[$cast](StringL(), StringL());
    }
    if (dart.test(_json[$containsKey]("quotaBytesUsed"))) {
      this.quotaBytesUsed = StringL().as(_json[$_get]("quotaBytesUsed"));
    }
    if (dart.test(_json[$containsKey]("shared"))) {
      this.shared = boolL().as(_json[$_get]("shared"));
    }
    if (dart.test(_json[$containsKey]("sharedWithMeTime"))) {
      this.sharedWithMeTime = core.DateTime.parse(core.String.as(_json[$_get]("sharedWithMeTime")));
    }
    if (dart.test(_json[$containsKey]("sharingUser"))) {
      this.sharingUser = new v3.User.fromJson(MapL().as(_json[$_get]("sharingUser")));
    }
    if (dart.test(_json[$containsKey]("shortcutDetails"))) {
      this.shortcutDetails = new v3.FileShortcutDetails.fromJson(MapL().as(_json[$_get]("shortcutDetails")));
    }
    if (dart.test(_json[$containsKey]("size"))) {
      this.size = StringL().as(_json[$_get]("size"));
    }
    if (dart.test(_json[$containsKey]("spaces"))) {
      this.spaces = ListL().as(_json[$_get]("spaces"))[$cast](StringL());
    }
    if (dart.test(_json[$containsKey]("starred"))) {
      this.starred = boolL().as(_json[$_get]("starred"));
    }
    if (dart.test(_json[$containsKey]("teamDriveId"))) {
      this.teamDriveId = StringL().as(_json[$_get]("teamDriveId"));
    }
    if (dart.test(_json[$containsKey]("thumbnailLink"))) {
      this.thumbnailLink = StringL().as(_json[$_get]("thumbnailLink"));
    }
    if (dart.test(_json[$containsKey]("thumbnailVersion"))) {
      this.thumbnailVersion = StringL().as(_json[$_get]("thumbnailVersion"));
    }
    if (dart.test(_json[$containsKey]("trashed"))) {
      this.trashed = boolL().as(_json[$_get]("trashed"));
    }
    if (dart.test(_json[$containsKey]("trashedTime"))) {
      this.trashedTime = core.DateTime.parse(core.String.as(_json[$_get]("trashedTime")));
    }
    if (dart.test(_json[$containsKey]("trashingUser"))) {
      this.trashingUser = new v3.User.fromJson(MapL().as(_json[$_get]("trashingUser")));
    }
    if (dart.test(_json[$containsKey]("version"))) {
      this.version = StringL().as(_json[$_get]("version"));
    }
    if (dart.test(_json[$containsKey]("videoMediaMetadata"))) {
      this.videoMediaMetadata = new v3.FileVideoMediaMetadata.fromJson(MapL().as(_json[$_get]("videoMediaMetadata")));
    }
    if (dart.test(_json[$containsKey]("viewedByMe"))) {
      this.viewedByMe = boolL().as(_json[$_get]("viewedByMe"));
    }
    if (dart.test(_json[$containsKey]("viewedByMeTime"))) {
      this.viewedByMeTime = core.DateTime.parse(core.String.as(_json[$_get]("viewedByMeTime")));
    }
    if (dart.test(_json[$containsKey]("viewersCanCopyContent"))) {
      this.viewersCanCopyContent = boolL().as(_json[$_get]("viewersCanCopyContent"));
    }
    if (dart.test(_json[$containsKey]("webContentLink"))) {
      this.webContentLink = StringL().as(_json[$_get]("webContentLink"));
    }
    if (dart.test(_json[$containsKey]("webViewLink"))) {
      this.webViewLink = StringL().as(_json[$_get]("webViewLink"));
    }
    if (dart.test(_json[$containsKey]("writersCanShare"))) {
      this.writersCanShare = boolL().as(_json[$_get]("writersCanShare"));
    }
  }).prototype = v3.File.prototype;
  dart.addTypeTests(v3.File);
  dart.addTypeCaches(v3.File);
  dart.setMethodSignature(v3.File, () => ({
    __proto__: dart.getMethods(v3.File.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.File, L0);
  dart.setFieldSignature(v3.File, () => ({
    __proto__: dart.getFields(v3.File.__proto__),
    appProperties: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))),
    capabilities: dart.fieldType(dart.legacy(v3.FileCapabilities)),
    contentHints: dart.fieldType(dart.legacy(v3.FileContentHints)),
    copyRequiresWriterPermission: dart.fieldType(dart.legacy(core.bool)),
    createdTime: dart.fieldType(dart.legacy(core.DateTime)),
    description: dart.fieldType(dart.legacy(core.String)),
    driveId: dart.fieldType(dart.legacy(core.String)),
    explicitlyTrashed: dart.fieldType(dart.legacy(core.bool)),
    exportLinks: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))),
    fileExtension: dart.fieldType(dart.legacy(core.String)),
    folderColorRgb: dart.fieldType(dart.legacy(core.String)),
    fullFileExtension: dart.fieldType(dart.legacy(core.String)),
    hasAugmentedPermissions: dart.fieldType(dart.legacy(core.bool)),
    hasThumbnail: dart.fieldType(dart.legacy(core.bool)),
    headRevisionId: dart.fieldType(dart.legacy(core.String)),
    iconLink: dart.fieldType(dart.legacy(core.String)),
    id: dart.fieldType(dart.legacy(core.String)),
    imageMediaMetadata: dart.fieldType(dart.legacy(v3.FileImageMediaMetadata)),
    isAppAuthorized: dart.fieldType(dart.legacy(core.bool)),
    kind: dart.fieldType(dart.legacy(core.String)),
    lastModifyingUser: dart.fieldType(dart.legacy(v3.User)),
    md5Checksum: dart.fieldType(dart.legacy(core.String)),
    mimeType: dart.fieldType(dart.legacy(core.String)),
    modifiedByMe: dart.fieldType(dart.legacy(core.bool)),
    modifiedByMeTime: dart.fieldType(dart.legacy(core.DateTime)),
    modifiedTime: dart.fieldType(dart.legacy(core.DateTime)),
    name: dart.fieldType(dart.legacy(core.String)),
    originalFilename: dart.fieldType(dart.legacy(core.String)),
    ownedByMe: dart.fieldType(dart.legacy(core.bool)),
    owners: dart.fieldType(dart.legacy(core.List$(dart.legacy(v3.User)))),
    parents: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    permissionIds: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    permissions: dart.fieldType(dart.legacy(core.List$(dart.legacy(v3.Permission)))),
    properties: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))),
    quotaBytesUsed: dart.fieldType(dart.legacy(core.String)),
    shared: dart.fieldType(dart.legacy(core.bool)),
    sharedWithMeTime: dart.fieldType(dart.legacy(core.DateTime)),
    sharingUser: dart.fieldType(dart.legacy(v3.User)),
    shortcutDetails: dart.fieldType(dart.legacy(v3.FileShortcutDetails)),
    size: dart.fieldType(dart.legacy(core.String)),
    spaces: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    starred: dart.fieldType(dart.legacy(core.bool)),
    teamDriveId: dart.fieldType(dart.legacy(core.String)),
    thumbnailLink: dart.fieldType(dart.legacy(core.String)),
    thumbnailVersion: dart.fieldType(dart.legacy(core.String)),
    trashed: dart.fieldType(dart.legacy(core.bool)),
    trashedTime: dart.fieldType(dart.legacy(core.DateTime)),
    trashingUser: dart.fieldType(dart.legacy(v3.User)),
    version: dart.fieldType(dart.legacy(core.String)),
    videoMediaMetadata: dart.fieldType(dart.legacy(v3.FileVideoMediaMetadata)),
    viewedByMe: dart.fieldType(dart.legacy(core.bool)),
    viewedByMeTime: dart.fieldType(dart.legacy(core.DateTime)),
    viewersCanCopyContent: dart.fieldType(dart.legacy(core.bool)),
    webContentLink: dart.fieldType(dart.legacy(core.String)),
    webViewLink: dart.fieldType(dart.legacy(core.String)),
    writersCanShare: dart.fieldType(dart.legacy(core.bool))
  }));
  var files = dart.privateName(v3, "FileList.files");
  var incompleteSearch = dart.privateName(v3, "FileList.incompleteSearch");
  var kind$7 = dart.privateName(v3, "FileList.kind");
  var nextPageToken$1 = dart.privateName(v3, "FileList.nextPageToken");
  v3.FileList = class FileList extends core.Object {
    get files() {
      return this[files];
    }
    set files(value) {
      this[files] = value;
    }
    get incompleteSearch() {
      return this[incompleteSearch];
    }
    set incompleteSearch(value) {
      this[incompleteSearch] = value;
    }
    get kind() {
      return this[kind$7];
    }
    set kind(value) {
      this[kind$7] = value;
    }
    get nextPageToken() {
      return this[nextPageToken$1];
    }
    set nextPageToken(value) {
      this[nextPageToken$1] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.files != null) {
        _json[$_set]("files", this.files[$map](MapLOfStringL$ObjectL(), dart.fn(value => value.toJson(), FileLToMapLOfStringL$ObjectL()))[$toList]());
      }
      if (this.incompleteSearch != null) {
        _json[$_set]("incompleteSearch", this.incompleteSearch);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.nextPageToken != null) {
        _json[$_set]("nextPageToken", this.nextPageToken);
      }
      return _json;
    }
  };
  (v3.FileList.new = function() {
    this[files] = null;
    this[incompleteSearch] = null;
    this[kind$7] = null;
    this[nextPageToken$1] = null;
    ;
  }).prototype = v3.FileList.prototype;
  (v3.FileList.fromJson = function(_json) {
    this[files] = null;
    this[incompleteSearch] = null;
    this[kind$7] = null;
    this[nextPageToken$1] = null;
    if (dart.test(_json[$containsKey]("files"))) {
      this.files = ListL().as(_json[$_get]("files"))[$map](FileL(), dart.fn(value => new v3.File.fromJson(MapL().as(value)), dynamicToFileL()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("incompleteSearch"))) {
      this.incompleteSearch = boolL().as(_json[$_get]("incompleteSearch"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("nextPageToken"))) {
      this.nextPageToken = StringL().as(_json[$_get]("nextPageToken"));
    }
  }).prototype = v3.FileList.prototype;
  dart.addTypeTests(v3.FileList);
  dart.addTypeCaches(v3.FileList);
  dart.setMethodSignature(v3.FileList, () => ({
    __proto__: dart.getMethods(v3.FileList.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.FileList, L0);
  dart.setFieldSignature(v3.FileList, () => ({
    __proto__: dart.getFields(v3.FileList.__proto__),
    files: dart.fieldType(dart.legacy(core.List$(dart.legacy(v3.File)))),
    incompleteSearch: dart.fieldType(dart.legacy(core.bool)),
    kind: dart.fieldType(dart.legacy(core.String)),
    nextPageToken: dart.fieldType(dart.legacy(core.String))
  }));
  var ids = dart.privateName(v3, "GeneratedIds.ids");
  var kind$8 = dart.privateName(v3, "GeneratedIds.kind");
  var space = dart.privateName(v3, "GeneratedIds.space");
  v3.GeneratedIds = class GeneratedIds extends core.Object {
    get ids() {
      return this[ids];
    }
    set ids(value) {
      this[ids] = value;
    }
    get kind() {
      return this[kind$8];
    }
    set kind(value) {
      this[kind$8] = value;
    }
    get space() {
      return this[space];
    }
    set space(value) {
      this[space] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.ids != null) {
        _json[$_set]("ids", this.ids);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.space != null) {
        _json[$_set]("space", this.space);
      }
      return _json;
    }
  };
  (v3.GeneratedIds.new = function() {
    this[ids] = null;
    this[kind$8] = null;
    this[space] = null;
    ;
  }).prototype = v3.GeneratedIds.prototype;
  (v3.GeneratedIds.fromJson = function(_json) {
    this[ids] = null;
    this[kind$8] = null;
    this[space] = null;
    if (dart.test(_json[$containsKey]("ids"))) {
      this.ids = ListL().as(_json[$_get]("ids"))[$cast](StringL());
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("space"))) {
      this.space = StringL().as(_json[$_get]("space"));
    }
  }).prototype = v3.GeneratedIds.prototype;
  dart.addTypeTests(v3.GeneratedIds);
  dart.addTypeCaches(v3.GeneratedIds);
  dart.setMethodSignature(v3.GeneratedIds, () => ({
    __proto__: dart.getMethods(v3.GeneratedIds.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.GeneratedIds, L0);
  dart.setFieldSignature(v3.GeneratedIds, () => ({
    __proto__: dart.getFields(v3.GeneratedIds.__proto__),
    ids: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    kind: dart.fieldType(dart.legacy(core.String)),
    space: dart.fieldType(dart.legacy(core.String))
  }));
  var inherited = dart.privateName(v3, "PermissionPermissionDetails.inherited");
  var inheritedFrom = dart.privateName(v3, "PermissionPermissionDetails.inheritedFrom");
  var permissionType = dart.privateName(v3, "PermissionPermissionDetails.permissionType");
  var role = dart.privateName(v3, "PermissionPermissionDetails.role");
  v3.PermissionPermissionDetails = class PermissionPermissionDetails extends core.Object {
    get inherited() {
      return this[inherited];
    }
    set inherited(value) {
      this[inherited] = value;
    }
    get inheritedFrom() {
      return this[inheritedFrom];
    }
    set inheritedFrom(value) {
      this[inheritedFrom] = value;
    }
    get permissionType() {
      return this[permissionType];
    }
    set permissionType(value) {
      this[permissionType] = value;
    }
    get role() {
      return this[role];
    }
    set role(value) {
      this[role] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.inherited != null) {
        _json[$_set]("inherited", this.inherited);
      }
      if (this.inheritedFrom != null) {
        _json[$_set]("inheritedFrom", this.inheritedFrom);
      }
      if (this.permissionType != null) {
        _json[$_set]("permissionType", this.permissionType);
      }
      if (this.role != null) {
        _json[$_set]("role", this.role);
      }
      return _json;
    }
  };
  (v3.PermissionPermissionDetails.new = function() {
    this[inherited] = null;
    this[inheritedFrom] = null;
    this[permissionType] = null;
    this[role] = null;
    ;
  }).prototype = v3.PermissionPermissionDetails.prototype;
  (v3.PermissionPermissionDetails.fromJson = function(_json) {
    this[inherited] = null;
    this[inheritedFrom] = null;
    this[permissionType] = null;
    this[role] = null;
    if (dart.test(_json[$containsKey]("inherited"))) {
      this.inherited = boolL().as(_json[$_get]("inherited"));
    }
    if (dart.test(_json[$containsKey]("inheritedFrom"))) {
      this.inheritedFrom = StringL().as(_json[$_get]("inheritedFrom"));
    }
    if (dart.test(_json[$containsKey]("permissionType"))) {
      this.permissionType = StringL().as(_json[$_get]("permissionType"));
    }
    if (dart.test(_json[$containsKey]("role"))) {
      this.role = StringL().as(_json[$_get]("role"));
    }
  }).prototype = v3.PermissionPermissionDetails.prototype;
  dart.addTypeTests(v3.PermissionPermissionDetails);
  dart.addTypeCaches(v3.PermissionPermissionDetails);
  dart.setMethodSignature(v3.PermissionPermissionDetails, () => ({
    __proto__: dart.getMethods(v3.PermissionPermissionDetails.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.PermissionPermissionDetails, L0);
  dart.setFieldSignature(v3.PermissionPermissionDetails, () => ({
    __proto__: dart.getFields(v3.PermissionPermissionDetails.__proto__),
    inherited: dart.fieldType(dart.legacy(core.bool)),
    inheritedFrom: dart.fieldType(dart.legacy(core.String)),
    permissionType: dart.fieldType(dart.legacy(core.String)),
    role: dart.fieldType(dart.legacy(core.String))
  }));
  var inherited$ = dart.privateName(v3, "PermissionTeamDrivePermissionDetails.inherited");
  var inheritedFrom$ = dart.privateName(v3, "PermissionTeamDrivePermissionDetails.inheritedFrom");
  var role$ = dart.privateName(v3, "PermissionTeamDrivePermissionDetails.role");
  var teamDrivePermissionType = dart.privateName(v3, "PermissionTeamDrivePermissionDetails.teamDrivePermissionType");
  v3.PermissionTeamDrivePermissionDetails = class PermissionTeamDrivePermissionDetails extends core.Object {
    get inherited() {
      return this[inherited$];
    }
    set inherited(value) {
      this[inherited$] = value;
    }
    get inheritedFrom() {
      return this[inheritedFrom$];
    }
    set inheritedFrom(value) {
      this[inheritedFrom$] = value;
    }
    get role() {
      return this[role$];
    }
    set role(value) {
      this[role$] = value;
    }
    get teamDrivePermissionType() {
      return this[teamDrivePermissionType];
    }
    set teamDrivePermissionType(value) {
      this[teamDrivePermissionType] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.inherited != null) {
        _json[$_set]("inherited", this.inherited);
      }
      if (this.inheritedFrom != null) {
        _json[$_set]("inheritedFrom", this.inheritedFrom);
      }
      if (this.role != null) {
        _json[$_set]("role", this.role);
      }
      if (this.teamDrivePermissionType != null) {
        _json[$_set]("teamDrivePermissionType", this.teamDrivePermissionType);
      }
      return _json;
    }
  };
  (v3.PermissionTeamDrivePermissionDetails.new = function() {
    this[inherited$] = null;
    this[inheritedFrom$] = null;
    this[role$] = null;
    this[teamDrivePermissionType] = null;
    ;
  }).prototype = v3.PermissionTeamDrivePermissionDetails.prototype;
  (v3.PermissionTeamDrivePermissionDetails.fromJson = function(_json) {
    this[inherited$] = null;
    this[inheritedFrom$] = null;
    this[role$] = null;
    this[teamDrivePermissionType] = null;
    if (dart.test(_json[$containsKey]("inherited"))) {
      this.inherited = boolL().as(_json[$_get]("inherited"));
    }
    if (dart.test(_json[$containsKey]("inheritedFrom"))) {
      this.inheritedFrom = StringL().as(_json[$_get]("inheritedFrom"));
    }
    if (dart.test(_json[$containsKey]("role"))) {
      this.role = StringL().as(_json[$_get]("role"));
    }
    if (dart.test(_json[$containsKey]("teamDrivePermissionType"))) {
      this.teamDrivePermissionType = StringL().as(_json[$_get]("teamDrivePermissionType"));
    }
  }).prototype = v3.PermissionTeamDrivePermissionDetails.prototype;
  dart.addTypeTests(v3.PermissionTeamDrivePermissionDetails);
  dart.addTypeCaches(v3.PermissionTeamDrivePermissionDetails);
  dart.setMethodSignature(v3.PermissionTeamDrivePermissionDetails, () => ({
    __proto__: dart.getMethods(v3.PermissionTeamDrivePermissionDetails.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.PermissionTeamDrivePermissionDetails, L0);
  dart.setFieldSignature(v3.PermissionTeamDrivePermissionDetails, () => ({
    __proto__: dart.getFields(v3.PermissionTeamDrivePermissionDetails.__proto__),
    inherited: dart.fieldType(dart.legacy(core.bool)),
    inheritedFrom: dart.fieldType(dart.legacy(core.String)),
    role: dart.fieldType(dart.legacy(core.String)),
    teamDrivePermissionType: dart.fieldType(dart.legacy(core.String))
  }));
  var allowFileDiscovery = dart.privateName(v3, "Permission.allowFileDiscovery");
  var deleted$ = dart.privateName(v3, "Permission.deleted");
  var displayName = dart.privateName(v3, "Permission.displayName");
  var domain = dart.privateName(v3, "Permission.domain");
  var emailAddress = dart.privateName(v3, "Permission.emailAddress");
  var expirationTime = dart.privateName(v3, "Permission.expirationTime");
  var id$5 = dart.privateName(v3, "Permission.id");
  var kind$9 = dart.privateName(v3, "Permission.kind");
  var permissionDetails = dart.privateName(v3, "Permission.permissionDetails");
  var photoLink = dart.privateName(v3, "Permission.photoLink");
  var role$0 = dart.privateName(v3, "Permission.role");
  var teamDrivePermissionDetails = dart.privateName(v3, "Permission.teamDrivePermissionDetails");
  var type$0 = dart.privateName(v3, "Permission.type");
  v3.Permission = class Permission extends core.Object {
    get allowFileDiscovery() {
      return this[allowFileDiscovery];
    }
    set allowFileDiscovery(value) {
      this[allowFileDiscovery] = value;
    }
    get deleted() {
      return this[deleted$];
    }
    set deleted(value) {
      this[deleted$] = value;
    }
    get displayName() {
      return this[displayName];
    }
    set displayName(value) {
      this[displayName] = value;
    }
    get domain() {
      return this[domain];
    }
    set domain(value) {
      this[domain] = value;
    }
    get emailAddress() {
      return this[emailAddress];
    }
    set emailAddress(value) {
      this[emailAddress] = value;
    }
    get expirationTime() {
      return this[expirationTime];
    }
    set expirationTime(value) {
      this[expirationTime] = value;
    }
    get id() {
      return this[id$5];
    }
    set id(value) {
      this[id$5] = value;
    }
    get kind() {
      return this[kind$9];
    }
    set kind(value) {
      this[kind$9] = value;
    }
    get permissionDetails() {
      return this[permissionDetails];
    }
    set permissionDetails(value) {
      this[permissionDetails] = value;
    }
    get photoLink() {
      return this[photoLink];
    }
    set photoLink(value) {
      this[photoLink] = value;
    }
    get role() {
      return this[role$0];
    }
    set role(value) {
      this[role$0] = value;
    }
    get teamDrivePermissionDetails() {
      return this[teamDrivePermissionDetails];
    }
    set teamDrivePermissionDetails(value) {
      this[teamDrivePermissionDetails] = value;
    }
    get type() {
      return this[type$0];
    }
    set type(value) {
      this[type$0] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.allowFileDiscovery != null) {
        _json[$_set]("allowFileDiscovery", this.allowFileDiscovery);
      }
      if (this.deleted != null) {
        _json[$_set]("deleted", this.deleted);
      }
      if (this.displayName != null) {
        _json[$_set]("displayName", this.displayName);
      }
      if (this.domain != null) {
        _json[$_set]("domain", this.domain);
      }
      if (this.emailAddress != null) {
        _json[$_set]("emailAddress", this.emailAddress);
      }
      if (this.expirationTime != null) {
        _json[$_set]("expirationTime", this.expirationTime.toIso8601String());
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.permissionDetails != null) {
        _json[$_set]("permissionDetails", this.permissionDetails[$map](MapLOfStringL$ObjectL(), dart.fn(value => value.toJson(), PermissionPermissionDetailsLToMapLOfStringL$ObjectL()))[$toList]());
      }
      if (this.photoLink != null) {
        _json[$_set]("photoLink", this.photoLink);
      }
      if (this.role != null) {
        _json[$_set]("role", this.role);
      }
      if (this.teamDrivePermissionDetails != null) {
        _json[$_set]("teamDrivePermissionDetails", this.teamDrivePermissionDetails[$map](MapLOfStringL$ObjectL(), dart.fn(value => value.toJson(), PermissionTeamDrivePermissionDetailsLToMapLOfStringL$ObjectL()))[$toList]());
      }
      if (this.type != null) {
        _json[$_set]("type", this.type);
      }
      return _json;
    }
  };
  (v3.Permission.new = function() {
    this[allowFileDiscovery] = null;
    this[deleted$] = null;
    this[displayName] = null;
    this[domain] = null;
    this[emailAddress] = null;
    this[expirationTime] = null;
    this[id$5] = null;
    this[kind$9] = null;
    this[permissionDetails] = null;
    this[photoLink] = null;
    this[role$0] = null;
    this[teamDrivePermissionDetails] = null;
    this[type$0] = null;
    ;
  }).prototype = v3.Permission.prototype;
  (v3.Permission.fromJson = function(_json) {
    this[allowFileDiscovery] = null;
    this[deleted$] = null;
    this[displayName] = null;
    this[domain] = null;
    this[emailAddress] = null;
    this[expirationTime] = null;
    this[id$5] = null;
    this[kind$9] = null;
    this[permissionDetails] = null;
    this[photoLink] = null;
    this[role$0] = null;
    this[teamDrivePermissionDetails] = null;
    this[type$0] = null;
    if (dart.test(_json[$containsKey]("allowFileDiscovery"))) {
      this.allowFileDiscovery = boolL().as(_json[$_get]("allowFileDiscovery"));
    }
    if (dart.test(_json[$containsKey]("deleted"))) {
      this.deleted = boolL().as(_json[$_get]("deleted"));
    }
    if (dart.test(_json[$containsKey]("displayName"))) {
      this.displayName = StringL().as(_json[$_get]("displayName"));
    }
    if (dart.test(_json[$containsKey]("domain"))) {
      this.domain = StringL().as(_json[$_get]("domain"));
    }
    if (dart.test(_json[$containsKey]("emailAddress"))) {
      this.emailAddress = StringL().as(_json[$_get]("emailAddress"));
    }
    if (dart.test(_json[$containsKey]("expirationTime"))) {
      this.expirationTime = core.DateTime.parse(core.String.as(_json[$_get]("expirationTime")));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = StringL().as(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("permissionDetails"))) {
      this.permissionDetails = ListL().as(_json[$_get]("permissionDetails"))[$map](PermissionPermissionDetailsL(), dart.fn(value => new v3.PermissionPermissionDetails.fromJson(MapL().as(value)), dynamicToPermissionPermissionDetailsL()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("photoLink"))) {
      this.photoLink = StringL().as(_json[$_get]("photoLink"));
    }
    if (dart.test(_json[$containsKey]("role"))) {
      this.role = StringL().as(_json[$_get]("role"));
    }
    if (dart.test(_json[$containsKey]("teamDrivePermissionDetails"))) {
      this.teamDrivePermissionDetails = ListL().as(_json[$_get]("teamDrivePermissionDetails"))[$map](PermissionTeamDrivePermissionDetailsL(), dart.fn(value => new v3.PermissionTeamDrivePermissionDetails.fromJson(MapL().as(value)), dynamicToPermissionTeamDrivePermissionDetailsL()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("type"))) {
      this.type = StringL().as(_json[$_get]("type"));
    }
  }).prototype = v3.Permission.prototype;
  dart.addTypeTests(v3.Permission);
  dart.addTypeCaches(v3.Permission);
  dart.setMethodSignature(v3.Permission, () => ({
    __proto__: dart.getMethods(v3.Permission.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.Permission, L0);
  dart.setFieldSignature(v3.Permission, () => ({
    __proto__: dart.getFields(v3.Permission.__proto__),
    allowFileDiscovery: dart.fieldType(dart.legacy(core.bool)),
    deleted: dart.fieldType(dart.legacy(core.bool)),
    displayName: dart.fieldType(dart.legacy(core.String)),
    domain: dart.fieldType(dart.legacy(core.String)),
    emailAddress: dart.fieldType(dart.legacy(core.String)),
    expirationTime: dart.fieldType(dart.legacy(core.DateTime)),
    id: dart.fieldType(dart.legacy(core.String)),
    kind: dart.fieldType(dart.legacy(core.String)),
    permissionDetails: dart.fieldType(dart.legacy(core.List$(dart.legacy(v3.PermissionPermissionDetails)))),
    photoLink: dart.fieldType(dart.legacy(core.String)),
    role: dart.fieldType(dart.legacy(core.String)),
    teamDrivePermissionDetails: dart.fieldType(dart.legacy(core.List$(dart.legacy(v3.PermissionTeamDrivePermissionDetails)))),
    type: dart.fieldType(dart.legacy(core.String))
  }));
  var kind$10 = dart.privateName(v3, "PermissionList.kind");
  var nextPageToken$2 = dart.privateName(v3, "PermissionList.nextPageToken");
  var permissions$ = dart.privateName(v3, "PermissionList.permissions");
  v3.PermissionList = class PermissionList extends core.Object {
    get kind() {
      return this[kind$10];
    }
    set kind(value) {
      this[kind$10] = value;
    }
    get nextPageToken() {
      return this[nextPageToken$2];
    }
    set nextPageToken(value) {
      this[nextPageToken$2] = value;
    }
    get permissions() {
      return this[permissions$];
    }
    set permissions(value) {
      this[permissions$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.nextPageToken != null) {
        _json[$_set]("nextPageToken", this.nextPageToken);
      }
      if (this.permissions != null) {
        _json[$_set]("permissions", this.permissions[$map](MapLOfStringL$ObjectL(), dart.fn(value => value.toJson(), PermissionLToMapLOfStringL$ObjectL()))[$toList]());
      }
      return _json;
    }
  };
  (v3.PermissionList.new = function() {
    this[kind$10] = null;
    this[nextPageToken$2] = null;
    this[permissions$] = null;
    ;
  }).prototype = v3.PermissionList.prototype;
  (v3.PermissionList.fromJson = function(_json) {
    this[kind$10] = null;
    this[nextPageToken$2] = null;
    this[permissions$] = null;
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("nextPageToken"))) {
      this.nextPageToken = StringL().as(_json[$_get]("nextPageToken"));
    }
    if (dart.test(_json[$containsKey]("permissions"))) {
      this.permissions = ListL().as(_json[$_get]("permissions"))[$map](PermissionL(), dart.fn(value => new v3.Permission.fromJson(MapL().as(value)), dynamicToPermissionL()))[$toList]();
    }
  }).prototype = v3.PermissionList.prototype;
  dart.addTypeTests(v3.PermissionList);
  dart.addTypeCaches(v3.PermissionList);
  dart.setMethodSignature(v3.PermissionList, () => ({
    __proto__: dart.getMethods(v3.PermissionList.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.PermissionList, L0);
  dart.setFieldSignature(v3.PermissionList, () => ({
    __proto__: dart.getFields(v3.PermissionList.__proto__),
    kind: dart.fieldType(dart.legacy(core.String)),
    nextPageToken: dart.fieldType(dart.legacy(core.String)),
    permissions: dart.fieldType(dart.legacy(core.List$(dart.legacy(v3.Permission))))
  }));
  var action = dart.privateName(v3, "Reply.action");
  var author$ = dart.privateName(v3, "Reply.author");
  var content$ = dart.privateName(v3, "Reply.content");
  var createdTime$1 = dart.privateName(v3, "Reply.createdTime");
  var deleted$0 = dart.privateName(v3, "Reply.deleted");
  var htmlContent$ = dart.privateName(v3, "Reply.htmlContent");
  var id$6 = dart.privateName(v3, "Reply.id");
  var kind$11 = dart.privateName(v3, "Reply.kind");
  var modifiedTime$0 = dart.privateName(v3, "Reply.modifiedTime");
  v3.Reply = class Reply extends core.Object {
    get action() {
      return this[action];
    }
    set action(value) {
      this[action] = value;
    }
    get author() {
      return this[author$];
    }
    set author(value) {
      this[author$] = value;
    }
    get content() {
      return this[content$];
    }
    set content(value) {
      this[content$] = value;
    }
    get createdTime() {
      return this[createdTime$1];
    }
    set createdTime(value) {
      this[createdTime$1] = value;
    }
    get deleted() {
      return this[deleted$0];
    }
    set deleted(value) {
      this[deleted$0] = value;
    }
    get htmlContent() {
      return this[htmlContent$];
    }
    set htmlContent(value) {
      this[htmlContent$] = value;
    }
    get id() {
      return this[id$6];
    }
    set id(value) {
      this[id$6] = value;
    }
    get kind() {
      return this[kind$11];
    }
    set kind(value) {
      this[kind$11] = value;
    }
    get modifiedTime() {
      return this[modifiedTime$0];
    }
    set modifiedTime(value) {
      this[modifiedTime$0] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.action != null) {
        _json[$_set]("action", this.action);
      }
      if (this.author != null) {
        _json[$_set]("author", this.author.toJson());
      }
      if (this.content != null) {
        _json[$_set]("content", this.content);
      }
      if (this.createdTime != null) {
        _json[$_set]("createdTime", this.createdTime.toIso8601String());
      }
      if (this.deleted != null) {
        _json[$_set]("deleted", this.deleted);
      }
      if (this.htmlContent != null) {
        _json[$_set]("htmlContent", this.htmlContent);
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.modifiedTime != null) {
        _json[$_set]("modifiedTime", this.modifiedTime.toIso8601String());
      }
      return _json;
    }
  };
  (v3.Reply.new = function() {
    this[action] = null;
    this[author$] = null;
    this[content$] = null;
    this[createdTime$1] = null;
    this[deleted$0] = null;
    this[htmlContent$] = null;
    this[id$6] = null;
    this[kind$11] = null;
    this[modifiedTime$0] = null;
    ;
  }).prototype = v3.Reply.prototype;
  (v3.Reply.fromJson = function(_json) {
    this[action] = null;
    this[author$] = null;
    this[content$] = null;
    this[createdTime$1] = null;
    this[deleted$0] = null;
    this[htmlContent$] = null;
    this[id$6] = null;
    this[kind$11] = null;
    this[modifiedTime$0] = null;
    if (dart.test(_json[$containsKey]("action"))) {
      this.action = StringL().as(_json[$_get]("action"));
    }
    if (dart.test(_json[$containsKey]("author"))) {
      this.author = new v3.User.fromJson(MapL().as(_json[$_get]("author")));
    }
    if (dart.test(_json[$containsKey]("content"))) {
      this.content = StringL().as(_json[$_get]("content"));
    }
    if (dart.test(_json[$containsKey]("createdTime"))) {
      this.createdTime = core.DateTime.parse(core.String.as(_json[$_get]("createdTime")));
    }
    if (dart.test(_json[$containsKey]("deleted"))) {
      this.deleted = boolL().as(_json[$_get]("deleted"));
    }
    if (dart.test(_json[$containsKey]("htmlContent"))) {
      this.htmlContent = StringL().as(_json[$_get]("htmlContent"));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = StringL().as(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("modifiedTime"))) {
      this.modifiedTime = core.DateTime.parse(core.String.as(_json[$_get]("modifiedTime")));
    }
  }).prototype = v3.Reply.prototype;
  dart.addTypeTests(v3.Reply);
  dart.addTypeCaches(v3.Reply);
  dart.setMethodSignature(v3.Reply, () => ({
    __proto__: dart.getMethods(v3.Reply.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.Reply, L0);
  dart.setFieldSignature(v3.Reply, () => ({
    __proto__: dart.getFields(v3.Reply.__proto__),
    action: dart.fieldType(dart.legacy(core.String)),
    author: dart.fieldType(dart.legacy(v3.User)),
    content: dart.fieldType(dart.legacy(core.String)),
    createdTime: dart.fieldType(dart.legacy(core.DateTime)),
    deleted: dart.fieldType(dart.legacy(core.bool)),
    htmlContent: dart.fieldType(dart.legacy(core.String)),
    id: dart.fieldType(dart.legacy(core.String)),
    kind: dart.fieldType(dart.legacy(core.String)),
    modifiedTime: dart.fieldType(dart.legacy(core.DateTime))
  }));
  var kind$12 = dart.privateName(v3, "ReplyList.kind");
  var nextPageToken$3 = dart.privateName(v3, "ReplyList.nextPageToken");
  var replies$ = dart.privateName(v3, "ReplyList.replies");
  v3.ReplyList = class ReplyList extends core.Object {
    get kind() {
      return this[kind$12];
    }
    set kind(value) {
      this[kind$12] = value;
    }
    get nextPageToken() {
      return this[nextPageToken$3];
    }
    set nextPageToken(value) {
      this[nextPageToken$3] = value;
    }
    get replies() {
      return this[replies$];
    }
    set replies(value) {
      this[replies$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.nextPageToken != null) {
        _json[$_set]("nextPageToken", this.nextPageToken);
      }
      if (this.replies != null) {
        _json[$_set]("replies", this.replies[$map](MapLOfStringL$ObjectL(), dart.fn(value => value.toJson(), ReplyLToMapLOfStringL$ObjectL()))[$toList]());
      }
      return _json;
    }
  };
  (v3.ReplyList.new = function() {
    this[kind$12] = null;
    this[nextPageToken$3] = null;
    this[replies$] = null;
    ;
  }).prototype = v3.ReplyList.prototype;
  (v3.ReplyList.fromJson = function(_json) {
    this[kind$12] = null;
    this[nextPageToken$3] = null;
    this[replies$] = null;
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("nextPageToken"))) {
      this.nextPageToken = StringL().as(_json[$_get]("nextPageToken"));
    }
    if (dart.test(_json[$containsKey]("replies"))) {
      this.replies = ListL().as(_json[$_get]("replies"))[$map](ReplyL(), dart.fn(value => new v3.Reply.fromJson(MapL().as(value)), dynamicToReplyL()))[$toList]();
    }
  }).prototype = v3.ReplyList.prototype;
  dart.addTypeTests(v3.ReplyList);
  dart.addTypeCaches(v3.ReplyList);
  dart.setMethodSignature(v3.ReplyList, () => ({
    __proto__: dart.getMethods(v3.ReplyList.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.ReplyList, L0);
  dart.setFieldSignature(v3.ReplyList, () => ({
    __proto__: dart.getFields(v3.ReplyList.__proto__),
    kind: dart.fieldType(dart.legacy(core.String)),
    nextPageToken: dart.fieldType(dart.legacy(core.String)),
    replies: dart.fieldType(dart.legacy(core.List$(dart.legacy(v3.Reply))))
  }));
  var exportLinks$ = dart.privateName(v3, "Revision.exportLinks");
  var id$7 = dart.privateName(v3, "Revision.id");
  var keepForever = dart.privateName(v3, "Revision.keepForever");
  var kind$13 = dart.privateName(v3, "Revision.kind");
  var lastModifyingUser$ = dart.privateName(v3, "Revision.lastModifyingUser");
  var md5Checksum$ = dart.privateName(v3, "Revision.md5Checksum");
  var mimeType$1 = dart.privateName(v3, "Revision.mimeType");
  var modifiedTime$1 = dart.privateName(v3, "Revision.modifiedTime");
  var originalFilename$ = dart.privateName(v3, "Revision.originalFilename");
  var publishAuto = dart.privateName(v3, "Revision.publishAuto");
  var published = dart.privateName(v3, "Revision.published");
  var publishedOutsideDomain = dart.privateName(v3, "Revision.publishedOutsideDomain");
  var size$ = dart.privateName(v3, "Revision.size");
  v3.Revision = class Revision extends core.Object {
    get exportLinks() {
      return this[exportLinks$];
    }
    set exportLinks(value) {
      this[exportLinks$] = value;
    }
    get id() {
      return this[id$7];
    }
    set id(value) {
      this[id$7] = value;
    }
    get keepForever() {
      return this[keepForever];
    }
    set keepForever(value) {
      this[keepForever] = value;
    }
    get kind() {
      return this[kind$13];
    }
    set kind(value) {
      this[kind$13] = value;
    }
    get lastModifyingUser() {
      return this[lastModifyingUser$];
    }
    set lastModifyingUser(value) {
      this[lastModifyingUser$] = value;
    }
    get md5Checksum() {
      return this[md5Checksum$];
    }
    set md5Checksum(value) {
      this[md5Checksum$] = value;
    }
    get mimeType() {
      return this[mimeType$1];
    }
    set mimeType(value) {
      this[mimeType$1] = value;
    }
    get modifiedTime() {
      return this[modifiedTime$1];
    }
    set modifiedTime(value) {
      this[modifiedTime$1] = value;
    }
    get originalFilename() {
      return this[originalFilename$];
    }
    set originalFilename(value) {
      this[originalFilename$] = value;
    }
    get publishAuto() {
      return this[publishAuto];
    }
    set publishAuto(value) {
      this[publishAuto] = value;
    }
    get published() {
      return this[published];
    }
    set published(value) {
      this[published] = value;
    }
    get publishedOutsideDomain() {
      return this[publishedOutsideDomain];
    }
    set publishedOutsideDomain(value) {
      this[publishedOutsideDomain] = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      this[size$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.exportLinks != null) {
        _json[$_set]("exportLinks", this.exportLinks);
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.keepForever != null) {
        _json[$_set]("keepForever", this.keepForever);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.lastModifyingUser != null) {
        _json[$_set]("lastModifyingUser", this.lastModifyingUser.toJson());
      }
      if (this.md5Checksum != null) {
        _json[$_set]("md5Checksum", this.md5Checksum);
      }
      if (this.mimeType != null) {
        _json[$_set]("mimeType", this.mimeType);
      }
      if (this.modifiedTime != null) {
        _json[$_set]("modifiedTime", this.modifiedTime.toIso8601String());
      }
      if (this.originalFilename != null) {
        _json[$_set]("originalFilename", this.originalFilename);
      }
      if (this.publishAuto != null) {
        _json[$_set]("publishAuto", this.publishAuto);
      }
      if (this.published != null) {
        _json[$_set]("published", this.published);
      }
      if (this.publishedOutsideDomain != null) {
        _json[$_set]("publishedOutsideDomain", this.publishedOutsideDomain);
      }
      if (this.size != null) {
        _json[$_set]("size", this.size);
      }
      return _json;
    }
  };
  (v3.Revision.new = function() {
    this[exportLinks$] = null;
    this[id$7] = null;
    this[keepForever] = null;
    this[kind$13] = null;
    this[lastModifyingUser$] = null;
    this[md5Checksum$] = null;
    this[mimeType$1] = null;
    this[modifiedTime$1] = null;
    this[originalFilename$] = null;
    this[publishAuto] = null;
    this[published] = null;
    this[publishedOutsideDomain] = null;
    this[size$] = null;
    ;
  }).prototype = v3.Revision.prototype;
  (v3.Revision.fromJson = function(_json) {
    this[exportLinks$] = null;
    this[id$7] = null;
    this[keepForever] = null;
    this[kind$13] = null;
    this[lastModifyingUser$] = null;
    this[md5Checksum$] = null;
    this[mimeType$1] = null;
    this[modifiedTime$1] = null;
    this[originalFilename$] = null;
    this[publishAuto] = null;
    this[published] = null;
    this[publishedOutsideDomain] = null;
    this[size$] = null;
    if (dart.test(_json[$containsKey]("exportLinks"))) {
      this.exportLinks = MapL().as(_json[$_get]("exportLinks"))[$cast](StringL(), StringL());
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = StringL().as(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("keepForever"))) {
      this.keepForever = boolL().as(_json[$_get]("keepForever"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("lastModifyingUser"))) {
      this.lastModifyingUser = new v3.User.fromJson(MapL().as(_json[$_get]("lastModifyingUser")));
    }
    if (dart.test(_json[$containsKey]("md5Checksum"))) {
      this.md5Checksum = StringL().as(_json[$_get]("md5Checksum"));
    }
    if (dart.test(_json[$containsKey]("mimeType"))) {
      this.mimeType = StringL().as(_json[$_get]("mimeType"));
    }
    if (dart.test(_json[$containsKey]("modifiedTime"))) {
      this.modifiedTime = core.DateTime.parse(core.String.as(_json[$_get]("modifiedTime")));
    }
    if (dart.test(_json[$containsKey]("originalFilename"))) {
      this.originalFilename = StringL().as(_json[$_get]("originalFilename"));
    }
    if (dart.test(_json[$containsKey]("publishAuto"))) {
      this.publishAuto = boolL().as(_json[$_get]("publishAuto"));
    }
    if (dart.test(_json[$containsKey]("published"))) {
      this.published = boolL().as(_json[$_get]("published"));
    }
    if (dart.test(_json[$containsKey]("publishedOutsideDomain"))) {
      this.publishedOutsideDomain = boolL().as(_json[$_get]("publishedOutsideDomain"));
    }
    if (dart.test(_json[$containsKey]("size"))) {
      this.size = StringL().as(_json[$_get]("size"));
    }
  }).prototype = v3.Revision.prototype;
  dart.addTypeTests(v3.Revision);
  dart.addTypeCaches(v3.Revision);
  dart.setMethodSignature(v3.Revision, () => ({
    __proto__: dart.getMethods(v3.Revision.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.Revision, L0);
  dart.setFieldSignature(v3.Revision, () => ({
    __proto__: dart.getFields(v3.Revision.__proto__),
    exportLinks: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))),
    id: dart.fieldType(dart.legacy(core.String)),
    keepForever: dart.fieldType(dart.legacy(core.bool)),
    kind: dart.fieldType(dart.legacy(core.String)),
    lastModifyingUser: dart.fieldType(dart.legacy(v3.User)),
    md5Checksum: dart.fieldType(dart.legacy(core.String)),
    mimeType: dart.fieldType(dart.legacy(core.String)),
    modifiedTime: dart.fieldType(dart.legacy(core.DateTime)),
    originalFilename: dart.fieldType(dart.legacy(core.String)),
    publishAuto: dart.fieldType(dart.legacy(core.bool)),
    published: dart.fieldType(dart.legacy(core.bool)),
    publishedOutsideDomain: dart.fieldType(dart.legacy(core.bool)),
    size: dart.fieldType(dart.legacy(core.String))
  }));
  var kind$14 = dart.privateName(v3, "RevisionList.kind");
  var nextPageToken$4 = dart.privateName(v3, "RevisionList.nextPageToken");
  var revisions = dart.privateName(v3, "RevisionList.revisions");
  v3.RevisionList = class RevisionList extends core.Object {
    get kind() {
      return this[kind$14];
    }
    set kind(value) {
      this[kind$14] = value;
    }
    get nextPageToken() {
      return this[nextPageToken$4];
    }
    set nextPageToken(value) {
      this[nextPageToken$4] = value;
    }
    get revisions() {
      return this[revisions];
    }
    set revisions(value) {
      this[revisions] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.nextPageToken != null) {
        _json[$_set]("nextPageToken", this.nextPageToken);
      }
      if (this.revisions != null) {
        _json[$_set]("revisions", this.revisions[$map](MapLOfStringL$ObjectL(), dart.fn(value => value.toJson(), RevisionLToMapLOfStringL$ObjectL()))[$toList]());
      }
      return _json;
    }
  };
  (v3.RevisionList.new = function() {
    this[kind$14] = null;
    this[nextPageToken$4] = null;
    this[revisions] = null;
    ;
  }).prototype = v3.RevisionList.prototype;
  (v3.RevisionList.fromJson = function(_json) {
    this[kind$14] = null;
    this[nextPageToken$4] = null;
    this[revisions] = null;
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("nextPageToken"))) {
      this.nextPageToken = StringL().as(_json[$_get]("nextPageToken"));
    }
    if (dart.test(_json[$containsKey]("revisions"))) {
      this.revisions = ListL().as(_json[$_get]("revisions"))[$map](RevisionL(), dart.fn(value => new v3.Revision.fromJson(MapL().as(value)), dynamicToRevisionL()))[$toList]();
    }
  }).prototype = v3.RevisionList.prototype;
  dart.addTypeTests(v3.RevisionList);
  dart.addTypeCaches(v3.RevisionList);
  dart.setMethodSignature(v3.RevisionList, () => ({
    __proto__: dart.getMethods(v3.RevisionList.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.RevisionList, L0);
  dart.setFieldSignature(v3.RevisionList, () => ({
    __proto__: dart.getFields(v3.RevisionList.__proto__),
    kind: dart.fieldType(dart.legacy(core.String)),
    nextPageToken: dart.fieldType(dart.legacy(core.String)),
    revisions: dart.fieldType(dart.legacy(core.List$(dart.legacy(v3.Revision))))
  }));
  var kind$15 = dart.privateName(v3, "StartPageToken.kind");
  var startPageToken = dart.privateName(v3, "StartPageToken.startPageToken");
  v3.StartPageToken = class StartPageToken extends core.Object {
    get kind() {
      return this[kind$15];
    }
    set kind(value) {
      this[kind$15] = value;
    }
    get startPageToken() {
      return this[startPageToken];
    }
    set startPageToken(value) {
      this[startPageToken] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.startPageToken != null) {
        _json[$_set]("startPageToken", this.startPageToken);
      }
      return _json;
    }
  };
  (v3.StartPageToken.new = function() {
    this[kind$15] = null;
    this[startPageToken] = null;
    ;
  }).prototype = v3.StartPageToken.prototype;
  (v3.StartPageToken.fromJson = function(_json) {
    this[kind$15] = null;
    this[startPageToken] = null;
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("startPageToken"))) {
      this.startPageToken = StringL().as(_json[$_get]("startPageToken"));
    }
  }).prototype = v3.StartPageToken.prototype;
  dart.addTypeTests(v3.StartPageToken);
  dart.addTypeCaches(v3.StartPageToken);
  dart.setMethodSignature(v3.StartPageToken, () => ({
    __proto__: dart.getMethods(v3.StartPageToken.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.StartPageToken, L0);
  dart.setFieldSignature(v3.StartPageToken, () => ({
    __proto__: dart.getFields(v3.StartPageToken.__proto__),
    kind: dart.fieldType(dart.legacy(core.String)),
    startPageToken: dart.fieldType(dart.legacy(core.String))
  }));
  var id$8 = dart.privateName(v3, "TeamDriveBackgroundImageFile.id");
  var width$1 = dart.privateName(v3, "TeamDriveBackgroundImageFile.width");
  var xCoordinate$ = dart.privateName(v3, "TeamDriveBackgroundImageFile.xCoordinate");
  var yCoordinate$ = dart.privateName(v3, "TeamDriveBackgroundImageFile.yCoordinate");
  v3.TeamDriveBackgroundImageFile = class TeamDriveBackgroundImageFile extends core.Object {
    get id() {
      return this[id$8];
    }
    set id(value) {
      this[id$8] = value;
    }
    get width() {
      return this[width$1];
    }
    set width(value) {
      this[width$1] = value;
    }
    get xCoordinate() {
      return this[xCoordinate$];
    }
    set xCoordinate(value) {
      this[xCoordinate$] = value;
    }
    get yCoordinate() {
      return this[yCoordinate$];
    }
    set yCoordinate(value) {
      this[yCoordinate$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.width != null) {
        _json[$_set]("width", this.width);
      }
      if (this.xCoordinate != null) {
        _json[$_set]("xCoordinate", this.xCoordinate);
      }
      if (this.yCoordinate != null) {
        _json[$_set]("yCoordinate", this.yCoordinate);
      }
      return _json;
    }
  };
  (v3.TeamDriveBackgroundImageFile.new = function() {
    this[id$8] = null;
    this[width$1] = null;
    this[xCoordinate$] = null;
    this[yCoordinate$] = null;
    ;
  }).prototype = v3.TeamDriveBackgroundImageFile.prototype;
  (v3.TeamDriveBackgroundImageFile.fromJson = function(_json) {
    this[id$8] = null;
    this[width$1] = null;
    this[xCoordinate$] = null;
    this[yCoordinate$] = null;
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = StringL().as(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("width"))) {
      this.width = doubleL().as(dart.dsend(_json[$_get]("width"), 'toDouble', []));
    }
    if (dart.test(_json[$containsKey]("xCoordinate"))) {
      this.xCoordinate = doubleL().as(dart.dsend(_json[$_get]("xCoordinate"), 'toDouble', []));
    }
    if (dart.test(_json[$containsKey]("yCoordinate"))) {
      this.yCoordinate = doubleL().as(dart.dsend(_json[$_get]("yCoordinate"), 'toDouble', []));
    }
  }).prototype = v3.TeamDriveBackgroundImageFile.prototype;
  dart.addTypeTests(v3.TeamDriveBackgroundImageFile);
  dart.addTypeCaches(v3.TeamDriveBackgroundImageFile);
  dart.setMethodSignature(v3.TeamDriveBackgroundImageFile, () => ({
    __proto__: dart.getMethods(v3.TeamDriveBackgroundImageFile.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.TeamDriveBackgroundImageFile, L0);
  dart.setFieldSignature(v3.TeamDriveBackgroundImageFile, () => ({
    __proto__: dart.getFields(v3.TeamDriveBackgroundImageFile.__proto__),
    id: dart.fieldType(dart.legacy(core.String)),
    width: dart.fieldType(dart.legacy(core.double)),
    xCoordinate: dart.fieldType(dart.legacy(core.double)),
    yCoordinate: dart.fieldType(dart.legacy(core.double))
  }));
  var canAddChildren$0 = dart.privateName(v3, "TeamDriveCapabilities.canAddChildren");
  var canChangeCopyRequiresWriterPermissionRestriction$ = dart.privateName(v3, "TeamDriveCapabilities.canChangeCopyRequiresWriterPermissionRestriction");
  var canChangeDomainUsersOnlyRestriction$ = dart.privateName(v3, "TeamDriveCapabilities.canChangeDomainUsersOnlyRestriction");
  var canChangeTeamDriveBackground = dart.privateName(v3, "TeamDriveCapabilities.canChangeTeamDriveBackground");
  var canChangeTeamMembersOnlyRestriction = dart.privateName(v3, "TeamDriveCapabilities.canChangeTeamMembersOnlyRestriction");
  var canComment$0 = dart.privateName(v3, "TeamDriveCapabilities.canComment");
  var canCopy$0 = dart.privateName(v3, "TeamDriveCapabilities.canCopy");
  var canDeleteChildren$0 = dart.privateName(v3, "TeamDriveCapabilities.canDeleteChildren");
  var canDeleteTeamDrive = dart.privateName(v3, "TeamDriveCapabilities.canDeleteTeamDrive");
  var canDownload$0 = dart.privateName(v3, "TeamDriveCapabilities.canDownload");
  var canEdit$0 = dart.privateName(v3, "TeamDriveCapabilities.canEdit");
  var canListChildren$0 = dart.privateName(v3, "TeamDriveCapabilities.canListChildren");
  var canManageMembers$ = dart.privateName(v3, "TeamDriveCapabilities.canManageMembers");
  var canReadRevisions$0 = dart.privateName(v3, "TeamDriveCapabilities.canReadRevisions");
  var canRemoveChildren$ = dart.privateName(v3, "TeamDriveCapabilities.canRemoveChildren");
  var canRename$0 = dart.privateName(v3, "TeamDriveCapabilities.canRename");
  var canRenameTeamDrive = dart.privateName(v3, "TeamDriveCapabilities.canRenameTeamDrive");
  var canShare$0 = dart.privateName(v3, "TeamDriveCapabilities.canShare");
  var canTrashChildren$0 = dart.privateName(v3, "TeamDriveCapabilities.canTrashChildren");
  v3.TeamDriveCapabilities = class TeamDriveCapabilities extends core.Object {
    get canAddChildren() {
      return this[canAddChildren$0];
    }
    set canAddChildren(value) {
      this[canAddChildren$0] = value;
    }
    get canChangeCopyRequiresWriterPermissionRestriction() {
      return this[canChangeCopyRequiresWriterPermissionRestriction$];
    }
    set canChangeCopyRequiresWriterPermissionRestriction(value) {
      this[canChangeCopyRequiresWriterPermissionRestriction$] = value;
    }
    get canChangeDomainUsersOnlyRestriction() {
      return this[canChangeDomainUsersOnlyRestriction$];
    }
    set canChangeDomainUsersOnlyRestriction(value) {
      this[canChangeDomainUsersOnlyRestriction$] = value;
    }
    get canChangeTeamDriveBackground() {
      return this[canChangeTeamDriveBackground];
    }
    set canChangeTeamDriveBackground(value) {
      this[canChangeTeamDriveBackground] = value;
    }
    get canChangeTeamMembersOnlyRestriction() {
      return this[canChangeTeamMembersOnlyRestriction];
    }
    set canChangeTeamMembersOnlyRestriction(value) {
      this[canChangeTeamMembersOnlyRestriction] = value;
    }
    get canComment() {
      return this[canComment$0];
    }
    set canComment(value) {
      this[canComment$0] = value;
    }
    get canCopy() {
      return this[canCopy$0];
    }
    set canCopy(value) {
      this[canCopy$0] = value;
    }
    get canDeleteChildren() {
      return this[canDeleteChildren$0];
    }
    set canDeleteChildren(value) {
      this[canDeleteChildren$0] = value;
    }
    get canDeleteTeamDrive() {
      return this[canDeleteTeamDrive];
    }
    set canDeleteTeamDrive(value) {
      this[canDeleteTeamDrive] = value;
    }
    get canDownload() {
      return this[canDownload$0];
    }
    set canDownload(value) {
      this[canDownload$0] = value;
    }
    get canEdit() {
      return this[canEdit$0];
    }
    set canEdit(value) {
      this[canEdit$0] = value;
    }
    get canListChildren() {
      return this[canListChildren$0];
    }
    set canListChildren(value) {
      this[canListChildren$0] = value;
    }
    get canManageMembers() {
      return this[canManageMembers$];
    }
    set canManageMembers(value) {
      this[canManageMembers$] = value;
    }
    get canReadRevisions() {
      return this[canReadRevisions$0];
    }
    set canReadRevisions(value) {
      this[canReadRevisions$0] = value;
    }
    get canRemoveChildren() {
      return this[canRemoveChildren$];
    }
    set canRemoveChildren(value) {
      this[canRemoveChildren$] = value;
    }
    get canRename() {
      return this[canRename$0];
    }
    set canRename(value) {
      this[canRename$0] = value;
    }
    get canRenameTeamDrive() {
      return this[canRenameTeamDrive];
    }
    set canRenameTeamDrive(value) {
      this[canRenameTeamDrive] = value;
    }
    get canShare() {
      return this[canShare$0];
    }
    set canShare(value) {
      this[canShare$0] = value;
    }
    get canTrashChildren() {
      return this[canTrashChildren$0];
    }
    set canTrashChildren(value) {
      this[canTrashChildren$0] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.canAddChildren != null) {
        _json[$_set]("canAddChildren", this.canAddChildren);
      }
      if (this.canChangeCopyRequiresWriterPermissionRestriction != null) {
        _json[$_set]("canChangeCopyRequiresWriterPermissionRestriction", this.canChangeCopyRequiresWriterPermissionRestriction);
      }
      if (this.canChangeDomainUsersOnlyRestriction != null) {
        _json[$_set]("canChangeDomainUsersOnlyRestriction", this.canChangeDomainUsersOnlyRestriction);
      }
      if (this.canChangeTeamDriveBackground != null) {
        _json[$_set]("canChangeTeamDriveBackground", this.canChangeTeamDriveBackground);
      }
      if (this.canChangeTeamMembersOnlyRestriction != null) {
        _json[$_set]("canChangeTeamMembersOnlyRestriction", this.canChangeTeamMembersOnlyRestriction);
      }
      if (this.canComment != null) {
        _json[$_set]("canComment", this.canComment);
      }
      if (this.canCopy != null) {
        _json[$_set]("canCopy", this.canCopy);
      }
      if (this.canDeleteChildren != null) {
        _json[$_set]("canDeleteChildren", this.canDeleteChildren);
      }
      if (this.canDeleteTeamDrive != null) {
        _json[$_set]("canDeleteTeamDrive", this.canDeleteTeamDrive);
      }
      if (this.canDownload != null) {
        _json[$_set]("canDownload", this.canDownload);
      }
      if (this.canEdit != null) {
        _json[$_set]("canEdit", this.canEdit);
      }
      if (this.canListChildren != null) {
        _json[$_set]("canListChildren", this.canListChildren);
      }
      if (this.canManageMembers != null) {
        _json[$_set]("canManageMembers", this.canManageMembers);
      }
      if (this.canReadRevisions != null) {
        _json[$_set]("canReadRevisions", this.canReadRevisions);
      }
      if (this.canRemoveChildren != null) {
        _json[$_set]("canRemoveChildren", this.canRemoveChildren);
      }
      if (this.canRename != null) {
        _json[$_set]("canRename", this.canRename);
      }
      if (this.canRenameTeamDrive != null) {
        _json[$_set]("canRenameTeamDrive", this.canRenameTeamDrive);
      }
      if (this.canShare != null) {
        _json[$_set]("canShare", this.canShare);
      }
      if (this.canTrashChildren != null) {
        _json[$_set]("canTrashChildren", this.canTrashChildren);
      }
      return _json;
    }
  };
  (v3.TeamDriveCapabilities.new = function() {
    this[canAddChildren$0] = null;
    this[canChangeCopyRequiresWriterPermissionRestriction$] = null;
    this[canChangeDomainUsersOnlyRestriction$] = null;
    this[canChangeTeamDriveBackground] = null;
    this[canChangeTeamMembersOnlyRestriction] = null;
    this[canComment$0] = null;
    this[canCopy$0] = null;
    this[canDeleteChildren$0] = null;
    this[canDeleteTeamDrive] = null;
    this[canDownload$0] = null;
    this[canEdit$0] = null;
    this[canListChildren$0] = null;
    this[canManageMembers$] = null;
    this[canReadRevisions$0] = null;
    this[canRemoveChildren$] = null;
    this[canRename$0] = null;
    this[canRenameTeamDrive] = null;
    this[canShare$0] = null;
    this[canTrashChildren$0] = null;
    ;
  }).prototype = v3.TeamDriveCapabilities.prototype;
  (v3.TeamDriveCapabilities.fromJson = function(_json) {
    this[canAddChildren$0] = null;
    this[canChangeCopyRequiresWriterPermissionRestriction$] = null;
    this[canChangeDomainUsersOnlyRestriction$] = null;
    this[canChangeTeamDriveBackground] = null;
    this[canChangeTeamMembersOnlyRestriction] = null;
    this[canComment$0] = null;
    this[canCopy$0] = null;
    this[canDeleteChildren$0] = null;
    this[canDeleteTeamDrive] = null;
    this[canDownload$0] = null;
    this[canEdit$0] = null;
    this[canListChildren$0] = null;
    this[canManageMembers$] = null;
    this[canReadRevisions$0] = null;
    this[canRemoveChildren$] = null;
    this[canRename$0] = null;
    this[canRenameTeamDrive] = null;
    this[canShare$0] = null;
    this[canTrashChildren$0] = null;
    if (dart.test(_json[$containsKey]("canAddChildren"))) {
      this.canAddChildren = boolL().as(_json[$_get]("canAddChildren"));
    }
    if (dart.test(_json[$containsKey]("canChangeCopyRequiresWriterPermissionRestriction"))) {
      this.canChangeCopyRequiresWriterPermissionRestriction = boolL().as(_json[$_get]("canChangeCopyRequiresWriterPermissionRestriction"));
    }
    if (dart.test(_json[$containsKey]("canChangeDomainUsersOnlyRestriction"))) {
      this.canChangeDomainUsersOnlyRestriction = boolL().as(_json[$_get]("canChangeDomainUsersOnlyRestriction"));
    }
    if (dart.test(_json[$containsKey]("canChangeTeamDriveBackground"))) {
      this.canChangeTeamDriveBackground = boolL().as(_json[$_get]("canChangeTeamDriveBackground"));
    }
    if (dart.test(_json[$containsKey]("canChangeTeamMembersOnlyRestriction"))) {
      this.canChangeTeamMembersOnlyRestriction = boolL().as(_json[$_get]("canChangeTeamMembersOnlyRestriction"));
    }
    if (dart.test(_json[$containsKey]("canComment"))) {
      this.canComment = boolL().as(_json[$_get]("canComment"));
    }
    if (dart.test(_json[$containsKey]("canCopy"))) {
      this.canCopy = boolL().as(_json[$_get]("canCopy"));
    }
    if (dart.test(_json[$containsKey]("canDeleteChildren"))) {
      this.canDeleteChildren = boolL().as(_json[$_get]("canDeleteChildren"));
    }
    if (dart.test(_json[$containsKey]("canDeleteTeamDrive"))) {
      this.canDeleteTeamDrive = boolL().as(_json[$_get]("canDeleteTeamDrive"));
    }
    if (dart.test(_json[$containsKey]("canDownload"))) {
      this.canDownload = boolL().as(_json[$_get]("canDownload"));
    }
    if (dart.test(_json[$containsKey]("canEdit"))) {
      this.canEdit = boolL().as(_json[$_get]("canEdit"));
    }
    if (dart.test(_json[$containsKey]("canListChildren"))) {
      this.canListChildren = boolL().as(_json[$_get]("canListChildren"));
    }
    if (dart.test(_json[$containsKey]("canManageMembers"))) {
      this.canManageMembers = boolL().as(_json[$_get]("canManageMembers"));
    }
    if (dart.test(_json[$containsKey]("canReadRevisions"))) {
      this.canReadRevisions = boolL().as(_json[$_get]("canReadRevisions"));
    }
    if (dart.test(_json[$containsKey]("canRemoveChildren"))) {
      this.canRemoveChildren = boolL().as(_json[$_get]("canRemoveChildren"));
    }
    if (dart.test(_json[$containsKey]("canRename"))) {
      this.canRename = boolL().as(_json[$_get]("canRename"));
    }
    if (dart.test(_json[$containsKey]("canRenameTeamDrive"))) {
      this.canRenameTeamDrive = boolL().as(_json[$_get]("canRenameTeamDrive"));
    }
    if (dart.test(_json[$containsKey]("canShare"))) {
      this.canShare = boolL().as(_json[$_get]("canShare"));
    }
    if (dart.test(_json[$containsKey]("canTrashChildren"))) {
      this.canTrashChildren = boolL().as(_json[$_get]("canTrashChildren"));
    }
  }).prototype = v3.TeamDriveCapabilities.prototype;
  dart.addTypeTests(v3.TeamDriveCapabilities);
  dart.addTypeCaches(v3.TeamDriveCapabilities);
  dart.setMethodSignature(v3.TeamDriveCapabilities, () => ({
    __proto__: dart.getMethods(v3.TeamDriveCapabilities.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.TeamDriveCapabilities, L0);
  dart.setFieldSignature(v3.TeamDriveCapabilities, () => ({
    __proto__: dart.getFields(v3.TeamDriveCapabilities.__proto__),
    canAddChildren: dart.fieldType(dart.legacy(core.bool)),
    canChangeCopyRequiresWriterPermissionRestriction: dart.fieldType(dart.legacy(core.bool)),
    canChangeDomainUsersOnlyRestriction: dart.fieldType(dart.legacy(core.bool)),
    canChangeTeamDriveBackground: dart.fieldType(dart.legacy(core.bool)),
    canChangeTeamMembersOnlyRestriction: dart.fieldType(dart.legacy(core.bool)),
    canComment: dart.fieldType(dart.legacy(core.bool)),
    canCopy: dart.fieldType(dart.legacy(core.bool)),
    canDeleteChildren: dart.fieldType(dart.legacy(core.bool)),
    canDeleteTeamDrive: dart.fieldType(dart.legacy(core.bool)),
    canDownload: dart.fieldType(dart.legacy(core.bool)),
    canEdit: dart.fieldType(dart.legacy(core.bool)),
    canListChildren: dart.fieldType(dart.legacy(core.bool)),
    canManageMembers: dart.fieldType(dart.legacy(core.bool)),
    canReadRevisions: dart.fieldType(dart.legacy(core.bool)),
    canRemoveChildren: dart.fieldType(dart.legacy(core.bool)),
    canRename: dart.fieldType(dart.legacy(core.bool)),
    canRenameTeamDrive: dart.fieldType(dart.legacy(core.bool)),
    canShare: dart.fieldType(dart.legacy(core.bool)),
    canTrashChildren: dart.fieldType(dart.legacy(core.bool))
  }));
  var adminManagedRestrictions$ = dart.privateName(v3, "TeamDriveRestrictions.adminManagedRestrictions");
  var copyRequiresWriterPermission$0 = dart.privateName(v3, "TeamDriveRestrictions.copyRequiresWriterPermission");
  var domainUsersOnly$ = dart.privateName(v3, "TeamDriveRestrictions.domainUsersOnly");
  var teamMembersOnly = dart.privateName(v3, "TeamDriveRestrictions.teamMembersOnly");
  v3.TeamDriveRestrictions = class TeamDriveRestrictions extends core.Object {
    get adminManagedRestrictions() {
      return this[adminManagedRestrictions$];
    }
    set adminManagedRestrictions(value) {
      this[adminManagedRestrictions$] = value;
    }
    get copyRequiresWriterPermission() {
      return this[copyRequiresWriterPermission$0];
    }
    set copyRequiresWriterPermission(value) {
      this[copyRequiresWriterPermission$0] = value;
    }
    get domainUsersOnly() {
      return this[domainUsersOnly$];
    }
    set domainUsersOnly(value) {
      this[domainUsersOnly$] = value;
    }
    get teamMembersOnly() {
      return this[teamMembersOnly];
    }
    set teamMembersOnly(value) {
      this[teamMembersOnly] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.adminManagedRestrictions != null) {
        _json[$_set]("adminManagedRestrictions", this.adminManagedRestrictions);
      }
      if (this.copyRequiresWriterPermission != null) {
        _json[$_set]("copyRequiresWriterPermission", this.copyRequiresWriterPermission);
      }
      if (this.domainUsersOnly != null) {
        _json[$_set]("domainUsersOnly", this.domainUsersOnly);
      }
      if (this.teamMembersOnly != null) {
        _json[$_set]("teamMembersOnly", this.teamMembersOnly);
      }
      return _json;
    }
  };
  (v3.TeamDriveRestrictions.new = function() {
    this[adminManagedRestrictions$] = null;
    this[copyRequiresWriterPermission$0] = null;
    this[domainUsersOnly$] = null;
    this[teamMembersOnly] = null;
    ;
  }).prototype = v3.TeamDriveRestrictions.prototype;
  (v3.TeamDriveRestrictions.fromJson = function(_json) {
    this[adminManagedRestrictions$] = null;
    this[copyRequiresWriterPermission$0] = null;
    this[domainUsersOnly$] = null;
    this[teamMembersOnly] = null;
    if (dart.test(_json[$containsKey]("adminManagedRestrictions"))) {
      this.adminManagedRestrictions = boolL().as(_json[$_get]("adminManagedRestrictions"));
    }
    if (dart.test(_json[$containsKey]("copyRequiresWriterPermission"))) {
      this.copyRequiresWriterPermission = boolL().as(_json[$_get]("copyRequiresWriterPermission"));
    }
    if (dart.test(_json[$containsKey]("domainUsersOnly"))) {
      this.domainUsersOnly = boolL().as(_json[$_get]("domainUsersOnly"));
    }
    if (dart.test(_json[$containsKey]("teamMembersOnly"))) {
      this.teamMembersOnly = boolL().as(_json[$_get]("teamMembersOnly"));
    }
  }).prototype = v3.TeamDriveRestrictions.prototype;
  dart.addTypeTests(v3.TeamDriveRestrictions);
  dart.addTypeCaches(v3.TeamDriveRestrictions);
  dart.setMethodSignature(v3.TeamDriveRestrictions, () => ({
    __proto__: dart.getMethods(v3.TeamDriveRestrictions.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.TeamDriveRestrictions, L0);
  dart.setFieldSignature(v3.TeamDriveRestrictions, () => ({
    __proto__: dart.getFields(v3.TeamDriveRestrictions.__proto__),
    adminManagedRestrictions: dart.fieldType(dart.legacy(core.bool)),
    copyRequiresWriterPermission: dart.fieldType(dart.legacy(core.bool)),
    domainUsersOnly: dart.fieldType(dart.legacy(core.bool)),
    teamMembersOnly: dart.fieldType(dart.legacy(core.bool))
  }));
  var backgroundImageFile$ = dart.privateName(v3, "TeamDrive.backgroundImageFile");
  var backgroundImageLink$1 = dart.privateName(v3, "TeamDrive.backgroundImageLink");
  var capabilities$0 = dart.privateName(v3, "TeamDrive.capabilities");
  var colorRgb$1 = dart.privateName(v3, "TeamDrive.colorRgb");
  var createdTime$2 = dart.privateName(v3, "TeamDrive.createdTime");
  var id$9 = dart.privateName(v3, "TeamDrive.id");
  var kind$16 = dart.privateName(v3, "TeamDrive.kind");
  var name$0 = dart.privateName(v3, "TeamDrive.name");
  var restrictions$ = dart.privateName(v3, "TeamDrive.restrictions");
  var themeId$ = dart.privateName(v3, "TeamDrive.themeId");
  v3.TeamDrive = class TeamDrive extends core.Object {
    get backgroundImageFile() {
      return this[backgroundImageFile$];
    }
    set backgroundImageFile(value) {
      this[backgroundImageFile$] = value;
    }
    get backgroundImageLink() {
      return this[backgroundImageLink$1];
    }
    set backgroundImageLink(value) {
      this[backgroundImageLink$1] = value;
    }
    get capabilities() {
      return this[capabilities$0];
    }
    set capabilities(value) {
      this[capabilities$0] = value;
    }
    get colorRgb() {
      return this[colorRgb$1];
    }
    set colorRgb(value) {
      this[colorRgb$1] = value;
    }
    get createdTime() {
      return this[createdTime$2];
    }
    set createdTime(value) {
      this[createdTime$2] = value;
    }
    get id() {
      return this[id$9];
    }
    set id(value) {
      this[id$9] = value;
    }
    get kind() {
      return this[kind$16];
    }
    set kind(value) {
      this[kind$16] = value;
    }
    get name() {
      return this[name$0];
    }
    set name(value) {
      this[name$0] = value;
    }
    get restrictions() {
      return this[restrictions$];
    }
    set restrictions(value) {
      this[restrictions$] = value;
    }
    get themeId() {
      return this[themeId$];
    }
    set themeId(value) {
      this[themeId$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.backgroundImageFile != null) {
        _json[$_set]("backgroundImageFile", this.backgroundImageFile.toJson());
      }
      if (this.backgroundImageLink != null) {
        _json[$_set]("backgroundImageLink", this.backgroundImageLink);
      }
      if (this.capabilities != null) {
        _json[$_set]("capabilities", this.capabilities.toJson());
      }
      if (this.colorRgb != null) {
        _json[$_set]("colorRgb", this.colorRgb);
      }
      if (this.createdTime != null) {
        _json[$_set]("createdTime", this.createdTime.toIso8601String());
      }
      if (this.id != null) {
        _json[$_set]("id", this.id);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.name != null) {
        _json[$_set]("name", this.name);
      }
      if (this.restrictions != null) {
        _json[$_set]("restrictions", this.restrictions.toJson());
      }
      if (this.themeId != null) {
        _json[$_set]("themeId", this.themeId);
      }
      return _json;
    }
  };
  (v3.TeamDrive.new = function() {
    this[backgroundImageFile$] = null;
    this[backgroundImageLink$1] = null;
    this[capabilities$0] = null;
    this[colorRgb$1] = null;
    this[createdTime$2] = null;
    this[id$9] = null;
    this[kind$16] = null;
    this[name$0] = null;
    this[restrictions$] = null;
    this[themeId$] = null;
    ;
  }).prototype = v3.TeamDrive.prototype;
  (v3.TeamDrive.fromJson = function(_json) {
    this[backgroundImageFile$] = null;
    this[backgroundImageLink$1] = null;
    this[capabilities$0] = null;
    this[colorRgb$1] = null;
    this[createdTime$2] = null;
    this[id$9] = null;
    this[kind$16] = null;
    this[name$0] = null;
    this[restrictions$] = null;
    this[themeId$] = null;
    if (dart.test(_json[$containsKey]("backgroundImageFile"))) {
      this.backgroundImageFile = new v3.TeamDriveBackgroundImageFile.fromJson(MapL().as(_json[$_get]("backgroundImageFile")));
    }
    if (dart.test(_json[$containsKey]("backgroundImageLink"))) {
      this.backgroundImageLink = StringL().as(_json[$_get]("backgroundImageLink"));
    }
    if (dart.test(_json[$containsKey]("capabilities"))) {
      this.capabilities = new v3.TeamDriveCapabilities.fromJson(MapL().as(_json[$_get]("capabilities")));
    }
    if (dart.test(_json[$containsKey]("colorRgb"))) {
      this.colorRgb = StringL().as(_json[$_get]("colorRgb"));
    }
    if (dart.test(_json[$containsKey]("createdTime"))) {
      this.createdTime = core.DateTime.parse(core.String.as(_json[$_get]("createdTime")));
    }
    if (dart.test(_json[$containsKey]("id"))) {
      this.id = StringL().as(_json[$_get]("id"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("name"))) {
      this.name = StringL().as(_json[$_get]("name"));
    }
    if (dart.test(_json[$containsKey]("restrictions"))) {
      this.restrictions = new v3.TeamDriveRestrictions.fromJson(MapL().as(_json[$_get]("restrictions")));
    }
    if (dart.test(_json[$containsKey]("themeId"))) {
      this.themeId = StringL().as(_json[$_get]("themeId"));
    }
  }).prototype = v3.TeamDrive.prototype;
  dart.addTypeTests(v3.TeamDrive);
  dart.addTypeCaches(v3.TeamDrive);
  dart.setMethodSignature(v3.TeamDrive, () => ({
    __proto__: dart.getMethods(v3.TeamDrive.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.TeamDrive, L0);
  dart.setFieldSignature(v3.TeamDrive, () => ({
    __proto__: dart.getFields(v3.TeamDrive.__proto__),
    backgroundImageFile: dart.fieldType(dart.legacy(v3.TeamDriveBackgroundImageFile)),
    backgroundImageLink: dart.fieldType(dart.legacy(core.String)),
    capabilities: dart.fieldType(dart.legacy(v3.TeamDriveCapabilities)),
    colorRgb: dart.fieldType(dart.legacy(core.String)),
    createdTime: dart.fieldType(dart.legacy(core.DateTime)),
    id: dart.fieldType(dart.legacy(core.String)),
    kind: dart.fieldType(dart.legacy(core.String)),
    name: dart.fieldType(dart.legacy(core.String)),
    restrictions: dart.fieldType(dart.legacy(v3.TeamDriveRestrictions)),
    themeId: dart.fieldType(dart.legacy(core.String))
  }));
  var kind$17 = dart.privateName(v3, "TeamDriveList.kind");
  var nextPageToken$5 = dart.privateName(v3, "TeamDriveList.nextPageToken");
  var teamDrives = dart.privateName(v3, "TeamDriveList.teamDrives");
  v3.TeamDriveList = class TeamDriveList extends core.Object {
    get kind() {
      return this[kind$17];
    }
    set kind(value) {
      this[kind$17] = value;
    }
    get nextPageToken() {
      return this[nextPageToken$5];
    }
    set nextPageToken(value) {
      this[nextPageToken$5] = value;
    }
    get teamDrives() {
      return this[teamDrives];
    }
    set teamDrives(value) {
      this[teamDrives] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.nextPageToken != null) {
        _json[$_set]("nextPageToken", this.nextPageToken);
      }
      if (this.teamDrives != null) {
        _json[$_set]("teamDrives", this.teamDrives[$map](MapLOfStringL$ObjectL(), dart.fn(value => value.toJson(), TeamDriveLToMapLOfStringL$ObjectL()))[$toList]());
      }
      return _json;
    }
  };
  (v3.TeamDriveList.new = function() {
    this[kind$17] = null;
    this[nextPageToken$5] = null;
    this[teamDrives] = null;
    ;
  }).prototype = v3.TeamDriveList.prototype;
  (v3.TeamDriveList.fromJson = function(_json) {
    this[kind$17] = null;
    this[nextPageToken$5] = null;
    this[teamDrives] = null;
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("nextPageToken"))) {
      this.nextPageToken = StringL().as(_json[$_get]("nextPageToken"));
    }
    if (dart.test(_json[$containsKey]("teamDrives"))) {
      this.teamDrives = ListL().as(_json[$_get]("teamDrives"))[$map](TeamDriveL(), dart.fn(value => new v3.TeamDrive.fromJson(MapL().as(value)), dynamicToTeamDriveL()))[$toList]();
    }
  }).prototype = v3.TeamDriveList.prototype;
  dart.addTypeTests(v3.TeamDriveList);
  dart.addTypeCaches(v3.TeamDriveList);
  dart.setMethodSignature(v3.TeamDriveList, () => ({
    __proto__: dart.getMethods(v3.TeamDriveList.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.TeamDriveList, L0);
  dart.setFieldSignature(v3.TeamDriveList, () => ({
    __proto__: dart.getFields(v3.TeamDriveList.__proto__),
    kind: dart.fieldType(dart.legacy(core.String)),
    nextPageToken: dart.fieldType(dart.legacy(core.String)),
    teamDrives: dart.fieldType(dart.legacy(core.List$(dart.legacy(v3.TeamDrive))))
  }));
  var displayName$ = dart.privateName(v3, "User.displayName");
  var emailAddress$ = dart.privateName(v3, "User.emailAddress");
  var kind$18 = dart.privateName(v3, "User.kind");
  var me = dart.privateName(v3, "User.me");
  var permissionId = dart.privateName(v3, "User.permissionId");
  var photoLink$ = dart.privateName(v3, "User.photoLink");
  v3.User = class User extends core.Object {
    get displayName() {
      return this[displayName$];
    }
    set displayName(value) {
      this[displayName$] = value;
    }
    get emailAddress() {
      return this[emailAddress$];
    }
    set emailAddress(value) {
      this[emailAddress$] = value;
    }
    get kind() {
      return this[kind$18];
    }
    set kind(value) {
      this[kind$18] = value;
    }
    get me() {
      return this[me];
    }
    set me(value) {
      this[me] = value;
    }
    get permissionId() {
      return this[permissionId];
    }
    set permissionId(value) {
      this[permissionId] = value;
    }
    get photoLink() {
      return this[photoLink$];
    }
    set photoLink(value) {
      this[photoLink$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfStringL$ObjectL()).new();
      if (this.displayName != null) {
        _json[$_set]("displayName", this.displayName);
      }
      if (this.emailAddress != null) {
        _json[$_set]("emailAddress", this.emailAddress);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.me != null) {
        _json[$_set]("me", this.me);
      }
      if (this.permissionId != null) {
        _json[$_set]("permissionId", this.permissionId);
      }
      if (this.photoLink != null) {
        _json[$_set]("photoLink", this.photoLink);
      }
      return _json;
    }
  };
  (v3.User.new = function() {
    this[displayName$] = null;
    this[emailAddress$] = null;
    this[kind$18] = null;
    this[me] = null;
    this[permissionId] = null;
    this[photoLink$] = null;
    ;
  }).prototype = v3.User.prototype;
  (v3.User.fromJson = function(_json) {
    this[displayName$] = null;
    this[emailAddress$] = null;
    this[kind$18] = null;
    this[me] = null;
    this[permissionId] = null;
    this[photoLink$] = null;
    if (dart.test(_json[$containsKey]("displayName"))) {
      this.displayName = StringL().as(_json[$_get]("displayName"));
    }
    if (dart.test(_json[$containsKey]("emailAddress"))) {
      this.emailAddress = StringL().as(_json[$_get]("emailAddress"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = StringL().as(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("me"))) {
      this.me = boolL().as(_json[$_get]("me"));
    }
    if (dart.test(_json[$containsKey]("permissionId"))) {
      this.permissionId = StringL().as(_json[$_get]("permissionId"));
    }
    if (dart.test(_json[$containsKey]("photoLink"))) {
      this.photoLink = StringL().as(_json[$_get]("photoLink"));
    }
  }).prototype = v3.User.prototype;
  dart.addTypeTests(v3.User);
  dart.addTypeCaches(v3.User);
  dart.setMethodSignature(v3.User, () => ({
    __proto__: dart.getMethods(v3.User.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [])
  }));
  dart.setLibraryUri(v3.User, L0);
  dart.setFieldSignature(v3.User, () => ({
    __proto__: dart.getFields(v3.User.__proto__),
    displayName: dart.fieldType(dart.legacy(core.String)),
    emailAddress: dart.fieldType(dart.legacy(core.String)),
    kind: dart.fieldType(dart.legacy(core.String)),
    me: dart.fieldType(dart.legacy(core.bool)),
    permissionId: dart.fieldType(dart.legacy(core.String)),
    photoLink: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(v3, {
    /*v3.USER_AGENT*/get USER_AGENT() {
      return "dart-api-client drive/v3";
    }
  }, true);
  dart.trackLibraries("packages/googleapis/drive/v3", {
    "package:googleapis/drive/v3.dart": v3
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["v3.dart"],"names":[],"mappings":"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","file":"v3.ddc.js"}');
  // Exports:
  return {
    drive__v3: v3
  };
}));

//# sourceMappingURL=v3.ddc.js.map
