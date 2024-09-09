/*
WEY 

[rewrite_local]

#个人界面
^https:\/\/gw-app-gateway\.gwmapp-w\.com\/app-api\/api\/v1\.0\/userAuth\/route\/getUserInfo url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/WEY.js
^https:\/\/gw-app-gateway\.gwmapp-w\.com\/app-api\/api\/v1\.0\/complaintsComments\/getCollectCount url response-body "data":0 response-body "data":99999

#爱车界面
^https:\/\/gw-app-gateway\.gwmapp-w\.com\/app-api\/api\/v2\.1\/vehicle url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/WEY.js

#位置
^https:\/\/dualstack-restios\.amap\.com\/v3\/geocode\/regeo url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/WEY.js

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
const Aiche = /vehicle/; // 爱车
const Weizhi = /regeo/; // 位置

// 移除发现和商城 Tab
if (Alter.test($request.url)) {
    for (var i = 0; i < WEY.data.length; i++) {
        WEY.data[i].contentMessageList = WEY.data[i].contentMessageList.filter(item => item.title !== '发现' && item.title !== '商城');
    }
}

// 清空广告数据
if (AD.test($request.url)) {
    WEY.data = [];
}

// 修改个人界面信息
if (My.test($request.url)) {
    WEY.data.nick = "99999"; // 昵称
    WEY.data.numberOfSubscribed = 99999; // 个人订阅
    WEY.data.threadPraisedNumber = "99999"; // 个人获赞
    WEY.data.likeOtherThreadNumber = 99999; // 我的点赞
    WEY.data.collectNumber = "99999"; // 我的收藏
    WEY.data.concernNumber = 99999; // 我的关注
    WEY.data.fansNumber = 99999; // 我的粉丝
    WEY.data.replyNumber = 99999; // 我的评论
    WEY.data.levelCode = "wvip8"; // VIP 等级
}

// 修改爱车界面信息
if (Aiche.test($request.url)) {
    console.log("Vehicle URL matched.");
    if (WEY.data && Array.isArray(WEY.data) && WEY.data.length > 0) {
        console.log("Before modification:", WEY.data[0]);
        WEY.data[0].licenseNumber = "我有所念人"; // 车牌号
        WEY.data[0].material90Url = "https://s2.loli.net/2024/09/09/YkSMRctE1zjfUyB.png"; // 车体图
        console.log("After modification:", WEY.data[0]);
    } else {
        console.log("Data array is empty or undefined.");
    }
}

// 修改会员积分
if (Huiyuan.test($request.url)) {
    WEY.data.remindPoint = 999999999999; // 积分
    WEY.data.totalPoint = 999999999999; // 总积分
}

// 修改位置
if (Weizhi.test($request.url)) {
    if (WEY.regeo && WEY.regeo.pois && WEY.regeo.pois.length > 0) {
        WEY.regeo.pois[0].name = "隔在远远乡"; // 位置
    } else {
        console.log("POIs data is empty or undefined.");
    }
}

$done({ body: JSON.stringify(WEY) });
