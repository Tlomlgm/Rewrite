/*
WEY 

[rewrite_local]

#个人界面
^https:\/\/gw-app-gateway\.gwmapp-w\.com\/app-api\/api\/v1\.0\/userAuth\/route\/getUserInfo url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/WEY.js
^https:\/\/gw-app-gateway\.gwmapp-w\.com\/app-api\/api\/v1\.0\/complaintsComments\/getCollectCount url response-body "data":0 response-body "data":99999

#会员积分
^https:\/\/gw-app-gateway\.gwmapp-w\.com\/app-api\/api\/v1\.0\/point\/querySumPoint url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/WEY.js

#净化AD
^https:\/\/gw-app-gateway\.gwmapp-w\.com\/app-api\/api\/(wey\/.+|.+)\/content\/route\/(getWholeNodeContentInfo\?contentType=(MENU|APPSECONDAD)|getContentInfo) url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/WEY.js

[mitm]
hostname = gw-app-gateway.gwmapp-w.com

*/
var WEY = JSON.parse($response.body);
const Alter = /contentType=MENU/;
const AD = /(getContentInfo|contentType=APPSECONDAD)/;
const My = /getUserInfo/;
const huiyyuan = /querySumPoint/;

if (Alter.test($request.url)) {
    for (var i = 0; i < WEY.data.length; i++) {
        WEY.data[i].contentMessageList = WEY.data[i].contentMessageList.filter(item => item.title !== '发现' && item.title !== '商城');
    }
}

if (AD.test($request.url)) {
    WEY.data = [];
}

if (My.test($request.url)) {
    WEY.data.nick = "99999";
    WEY.data.showBrandName = "VV7 GT PHEV ";
    WEY.data.joinBoardName = "会长";//个人分会名字
    WEY.data.numberOfSubscribed = 99999;//个人订阅
    WEY.data.threadPraisedNumber = "99999";//个人获赞
    WEY.data.likeOtherThreadNumber = 99999;//我的点赞
    WEY.data.collectNumber = "99999";//我的收藏
    WEY.data.concernNumber = 99999;//我的关注
    WEY.data.fansNumber = 99999;//我的粉丝
    WEY.data.replyNumber = 99999;//我的评论
    WEY.data.levelCode = "wvip8";//VIP等级
}

if (huiyyuan.test($request.url)) {
    WEY.data.remindPoint = 999999999999;
    WEY.data.totalPoint = 999999999999;
}

$done({ body: JSON.stringify(WEY) });
