/*
WEY 

[rewrite_local]
#个人界面
^https?:\/\/gw-app\.beantechyun\.com\/app-api\/api\/v1\.0\/userAuth\/route\/getUserInfo url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/WEY.js

#车体图 型号
^https?:\/\/gw-app\.beantechyun\.com\/app-api\/api\/v2\.0\/vehicle\/acquireVehicles url response-body "material90Url":"https://gw-tsp-file.beantechyun.com/files/bt-master-vehicle-service53826251641039585车体图_20220629_WEY-VV7/WEY-VV7_炫晶黑/90.png" response-body "material90Url":"https://s2.loli.net/2024/01/09/wkALidNrSXhJnzv.png"
^https?:\/\/gw-app\.beantechyun\.com\/app-api\/api\/v2\.0\/vehicle url response-body "scmsModelName":"VV7" response-body "scmsModelName":"VV7 GT PHEV"

#会员积分
^https?:\/\/gw-app\.beantechyun\.com\/app-api\/api\/v1\.0\/point\/querySumPoint url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/WEY.js

#优化底栏+净化AD
^https?:\/\/gw-app\.beantechyun\.com\/app-api\/api\/(wey\/.+|.+)\/content\/route\/(getWholeNodeContentInfo\?contentType=(MENU|APPSECONDAD)|getContentInfo) url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/WEY.js

[mitm]
hostname = gw-app.beantechyun.com

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
    WEY.data = [];//去掉，发现商城，模块
}

if (My.test($request.url)) {
    WEY.data.showBrandName = "GT PHEV ";
    WEY.data.joinBoardName = "永臻分会";//个人分会名字
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
    WEY.data.remindPoint = 999999999;
    WEY.data.totalPoint = 999999999;
}

$done({ body: JSON.stringify(WEY) });
