/*
WEY 

[rewrite_local]

#个人界面
^https:\/\/gw-app-gateway\.gwmapp-w\.com\/app-api\/api\/v1\.0\/userAuth\/route\/getUserInfo url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/WEY.js
^https:\/\/gw-app-gateway\.gwmapp-w\.com\/app-api\/api\/v1\.0\/complaintsComments\/getCollectCount url response-body "data":0 response-body "data":99999

#爱车界面
^https:\/\/gw-app-gateway\.gwmapp-w\.com\/app-api\/api\/v2\.1\/vehicle url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/WEY.js

#位置
^https:\/\/(?:dualstack-)?restios\.amap\.com\/v3\/geocode\/regeo url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/WEY.js

#会员积分
^https:\/\/gw-app-gateway\.gwmapp-w\.com\/app-api\/api\/v1\.0\/point\/querySumPoint url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/WEY.js

#净化AD
^https:\/\/gw-app-gateway\.gwmapp-w\.com\/app-api\/api\/(wey\/.+|.+)\/content\/route\/(getWholeNodeContentInfo\?contentType=(MENU|APPSECONDAD)|getContentInfo) url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/WEY.js

[mitm]
hostname = gw-app-gateway.gwmapp-w.com,dualstack-restios.amap.com

*/

var WEY = JSON.parse($response.body);

const Alter = /contentType=MENU/; // 发现 商城 Tab
const AD = /(getContentInfo|contentType=APPSECONDAD)/; // 开屏广告
const My = /getUserInfo/; // 我的
const Huiyuan = /querySumPoint/; // 会员积分
const Aiche = /\/vehicle\/acquireVehicles/; // 爱车
const Weizhi = /regeo/; // 位置

if (Alter.test($request.url)) {
    for (var i = 0; i < WEY.data.length; i++) {
        WEY.data[i].contentMessageList = WEY.data[i].contentMessageList.filter(item => item.title !== '发现' && item.title !== '商城');
    }
}

if (AD.test($request.url)) {
    WEY.data = [];
}

if (My.test($request.url)) {
    WEY.data.nick = "99999"; // 昵称
    WEY.data.numberOfSubscribed = 99999; // 订阅
    WEY.data.threadPraisedNumber = "99999"; // 获赞
    WEY.data.likeOtherThreadNumber = 99999; // 点赞
    WEY.data.collectNumber = "99999"; // 收藏
    WEY.data.concernNumber = 99999; // 关注
    WEY.data.fansNumber = 99999; // 粉丝
    WEY.data.replyNumber = 99999; // 评论
    WEY.data.levelCode = "wvip8"; // VIP 等级
}

if (Aiche.test($request.url)) {
    if (WEY.data && WEY.data.length > 0) {
        WEY.data[0].showBrandName = "VV7 GT PHEV"; // 车型
        WEY.data[0].licenseNumber = "海上月是天上月"; // 车牌
        WEY.data[0].material90Url = "https://s2.loli.net/2024/09/09/YkSMRctE1zjfUyB.png"; // 车体图
    }
}

if (Huiyuan.test($request.url)) {
    WEY.data.remindPoint = 999999999999; // 积分
    WEY.data.totalPoint = 999999999999; // 积分
}

if (Weizhi.test($request.url)) {
    if (WEY.regeocode && WEY.regeocode.pois && WEY.regeocode.pois.length > 0) {
        WEY.regeocode.pois[0].name = "眼前人是心上人"; // 位置
    }
}

$done({ body: JSON.stringify(WEY) });
