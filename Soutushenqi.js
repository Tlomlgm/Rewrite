/*
搜图神器 (先登录) v1.7.3
https://apps.apple.com/cn/app/%E6%90%9C%E5%9B%BE%E7%A5%9E%E5%99%A8/id1576499990

[rewrite_local]
^http:\/\/wallpaper\.soutushenqi\.com\/api\/.+\/account\/token url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/Soutushenqi.js

[mitm]
hostname = wallpaper.soutushenqi.com

*/

var body = $response.body;
var Tlomlgm = JSON.parse(body);
const user = /account\/(token|info)/;
const aicl = /cykj_community\/(config\/tools\/.+|ai_draw\/self.+)/;
const tcad = /home\/dialog/;

if(user.test($request.url)){
   Tlomlgm.data = {...Tlomlgm.data, 
       "vipPastDueTime" : 4092599349,
       "vipLabelLevel" : 4,
       "vipLabel" : "Lv10元老捐赠会员",
       "pcVipPastDueTime" : 4092599349,
       "vipType" : 1024,
       "isVirtual" : 1,
       "vitalityPcVipPastDueTime" : 4092599349,
       "pcVipType" : 1024,
       "vitalityVipPastDueTime" : 4092599349
     };
}

if(aicl.test($request.url)){
   body = body.replace(/\"surplus":\d+/g, '\"surplus":99');
   body = body.replace(/\"total":\d+/g, '\"total":99');
   body = body.replace(/\"size":\d+/g, '\"size":0');
}

if(tcad.test($request.url)){
   Tlomlgm = {};
}

body = JSON.stringify(Tlomlgm)
$done({body});
