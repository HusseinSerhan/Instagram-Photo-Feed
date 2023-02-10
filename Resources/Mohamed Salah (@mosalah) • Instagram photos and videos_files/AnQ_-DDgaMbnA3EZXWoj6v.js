;/*FB_PKG_DELIM*/

__d("usePolarisGetRelationshipFragment_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisGetRelationshipFragment_user",selections:[{alias:null,args:null,concreteType:"XDTRelationshipInfoDict",kind:"LinkedField",name:"friendship_status",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"blocking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_feed_favorite",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"following",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_muting_reel",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"muting",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"outgoing_request",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"followed_by",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"incoming_request",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_restricted",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_bestie",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XDTSupervisionInfo",kind:"LinkedField",name:"supervision_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_guardian_of_viewer",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_supervised_by_viewer",storageKey:null}],storageKey:null}],type:"XDTUserDict",abstractKey:null};e.exports=a}),null);
__d("usePolarisGetRelationshipFragment",["CometRelay","PolarisRelationshipState","PolarisRelationshipTypes","polarisRelationshipReducer","react","usePolarisGetRelationshipFragment_user.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react").useMemo,j=h!==void 0?h:h=b("usePolarisGetRelationshipFragment_user.graphql");function a(a){a=d("CometRelay").useFragment(j,a);var b=a.friendship_status,c=a.supervision_info;return i(function(){return{blockedByViewer:d("PolarisRelationshipState").stable((b==null?void 0:b.blocking)==null?null:b.blocking?d("PolarisRelationshipTypes").BLOCK_STATUS_BLOCKED:d("PolarisRelationshipTypes").BLOCK_STATUS_UNBLOCKED),hasBlockedViewer:d("PolarisRelationshipState").stable(null),closeFriendOfViewer:d("PolarisRelationshipState").stable((b==null?void 0:b.is_bestie)==null?null:b.is_bestie?d("PolarisRelationshipTypes").CLOSE_FRIEND_STATUS_BESTIE:d("PolarisRelationshipTypes").CLOSE_FRIEND_STATUS_NOT_BESTIE),favoritedByViewer:d("PolarisRelationshipState").stable((b==null?void 0:b.is_feed_favorite)==null?null:b.is_feed_favorite?d("PolarisRelationshipTypes").FAVORITE_STATUS_FAVORITED:d("PolarisRelationshipTypes").FAVORITE_STATUS_NOT_FAVORITED),followedByViewer:d("polarisRelationshipReducer").getFollowStatus(b==null?void 0:b.following,b==null?void 0:b.outgoing_request),followsViewer:d("polarisRelationshipReducer").getFollowStatus(b==null?void 0:b.followed_by,b==null?void 0:b.incoming_request),mutedPostsByViewer:d("PolarisRelationshipState").stable((b==null?void 0:b.muting)==null?null:b.muting?d("PolarisRelationshipTypes").MUTE_POSTS_STATUS_MUTED:d("PolarisRelationshipTypes").MUTE_POSTS_STATUS_NOT_MUTED),mutedStoryByViewer:d("PolarisRelationshipState").stable((b==null?void 0:b.is_muting_reel)==null?null:b.is_muting_reel?d("PolarisRelationshipTypes").MUTE_STORY_STATUS_MUTED:d("PolarisRelationshipTypes").MUTE_STORY_STATUS_NOT_MUTED),restrictedByViewer:d("PolarisRelationshipState").stable((b==null?void 0:b.is_restricted)==null?null:b.is_restricted?d("PolarisRelationshipTypes").RESTRICT_STATUS_RESTRICTED:d("PolarisRelationshipTypes").RESTRICT_STATUS_UNRESTRICTED),guardianOfViewer:d("PolarisRelationshipState").stable((c==null?void 0:c.is_guardian_of_viewer)==null?null:(c==null?void 0:c.is_guardian_of_viewer)?d("PolarisRelationshipTypes").SUPERVISION_STATUS_SUPERVISED:d("PolarisRelationshipTypes").SUPERVISION_STATUS_NOT_SUPERVISED),supervisedByViewer:d("PolarisRelationshipState").stable((c==null?void 0:c.is_guardian_of_viewer)==null?null:(c==null?void 0:c.is_supervised_by_viewer)===!0?d("PolarisRelationshipTypes").SUPERVISION_STATUS_SUPERVISED:d("PolarisRelationshipTypes").SUPERVISION_STATUS_NOT_SUPERVISED)}},[b==null?void 0:b.blocking,b==null?void 0:b.followed_by,b==null?void 0:b.following,b==null?void 0:b.incoming_request,b==null?void 0:b.is_bestie,b==null?void 0:b.is_feed_favorite,b==null?void 0:b.is_muting_reel,b==null?void 0:b.is_restricted,b==null?void 0:b.muting,b==null?void 0:b.outgoing_request,c==null?void 0:c.is_guardian_of_viewer,c==null?void 0:c.is_supervised_by_viewer])}g["default"]=a}),98);
__d("PolarisIGCoreErrorPanoOutlineIcon",["PolarisIGCoreSVGIcon","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(c("PolarisIGCoreSVGIcon"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:h.jsx("path",{d:"M12.001.504a11.5 11.5 0 1 0 11.5 11.5 11.513 11.513 0 0 0-11.5-11.5Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Zm0-6.594a1.279 1.279 0 1 0 1.278 1.279A1.28 1.28 0 0 0 12 14.91Zm0-8.443a1.326 1.326 0 0 0-.97.412 1.154 1.154 0 0 0-.313.872l.362 5.057a.928.928 0 0 0 1.84 0l.363-5.057a1.152 1.152 0 0 0-.313-.871 1.323 1.323 0 0 0-.97-.413Z"})}))}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(a);g["default"]=b}),98);/*FB_PKG_DELIM*/
__d("LSBumpThread",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.i64.eq(a[1],[0,1])?b.fe(b.db.table(9).fetch([[[a[2]]]]),function(b){var c=b.update;b.item;return c({lastReadWatermarkTimestampMs:a[0],lastActivityTimestampMs:a[0]})}):b.i64.eq(a[1],[0,2])?b.fe(b.db.table(9).fetch([[[a[2]]]]),function(b){var c=b.update;b.item;return c({lastActivityTimestampMs:a[0]})}):b.i64.eq(a[1],[0,3])?b.db.table(9).fetch([[[a[2]]]]).next().then(function(c,d){var e=c.done;c=c.value;return e?0:(d=c.item,b.i64.le(d.lastActivityTimestampMs,d.lastReadWatermarkTimestampMs)?b.fe(b.db.table(9).fetch([[[a[2]]]]),function(b){var c=b.update;b.item;return c({lastReadWatermarkTimestampMs:a[0],lastActivityTimestampMs:a[0]})}):b.fe(b.db.table(9).fetch([[[a[2]]]]),function(b){var c=b.update;b.item;return c({lastActivityTimestampMs:a[0]})}))}):b.resolve(0)},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSUpdateThreadSnippet",["gkx"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(e){return a[7]?c.seq([function(e){return c.i64.neq(a[3],f)?c.seq([function(e){return c.seq([function(e){return d[3]=b("gkx")("7530"),d[3]?c.seq([function(b){return c.ftr(c.db.table(7).fetch([[[a[3]]]]),function(b){return c.i64.eq(b.id,a[3])&&c.i64.eq([0,1],[0,1])}).next().then(function(a,b){var e=a.done;a=a.value;return e?c.seq([function(a){return c.localizeV2Async([0,2352696798],f).then(function(a){return d[7]=a})},function(a){return d[5]=d[7]}]):(b=a.item,d[5]=b.name)})},function(a){return d[4]=d[5]}]):c.seq([function(b){return c.ftr(c.db.table(14).fetch([[[a[0],a[3]]]]),function(b){return c.i64.eq(b.threadKey,a[0])&&c.i64.eq([0,0],[0,0])&&c.i64.eq(b.contactId,a[3])}).next().then(function(a,b){var c=a.done;a=a.value;return c?d[5]=f:(b=a.item,d[5]=b.nickname)})},function(b){return c.ftr(c.db.table(7).fetch([[[a[3]]]]),function(b){return c.i64.eq(b.id,a[3])&&c.i64.eq([0,1],[0,1])}).next().then(function(a,b){var e=a.done;a=a.value;return e?c.seq([function(a){return c.localizeV2Async([0,14617150],f).then(function(a){return d[9]=a})},function(a){return d[7]=d[9]}]):(b=a.item,d[7]=b.firstName==null?b.name:b.firstName)})},function(a){return d[4]=d[5]==null?d[7]:d[5]}])},function(a){return d[1]=d[4]}])},function(b){return a[1]!==f?d[2]=[d[1],": ",a[1]].join(""):d[2]=f,d[0]=d[2]}]):c.resolve(d[0]=a[1])},function(b){return c.fe(c.db.table(9).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({snippet:d[0],snippetStringHash:f,snippetStringArgument1:f,snippetAttribution:f,snippetAttributionStringHash:f,isAdminSnippet:a[2],snippetSenderContactId:a[3],snippetHasEmoji:a[4],viewedPluginKey:a[5],viewedPluginContext:a[6]})})}]):c.fe(c.db.table(9).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({snippet:a[1],snippetStringHash:f,snippetStringArgument1:f,snippetAttribution:f,snippetAttributionStringHash:f,isAdminSnippet:a[2],snippetSenderContactId:a[3],snippetHasEmoji:a[4],viewedPluginKey:a[5],viewedPluginContext:a[6]})})},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("usePolarisIsOnPostPage",["useTopMostRouteCometEntityKey"],(function(a,b,c,d,e,f,g){"use strict";var h="post";function a(){var a=c("useTopMostRouteCometEntityKey")();a=a==null?void 0:a.entity_type;return a===h}g["default"]=a}),98);