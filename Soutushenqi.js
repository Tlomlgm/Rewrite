/*
搜图神器 (先登录) v1.7.3
https://apps.apple.com/cn/app/%E6%90%9C%E5%9B%BE%E7%A5%9E%E5%99%A8/id1576499990

[rewrite_local]
^http:\/\/wallpaper\.soutushenqi\.com\/api\/.+\/account\/token url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/Soutushenqi.js

[mitm]
hostname = wallpaper.soutushenqi.com

*/

var Tlomlgm = JSON.parse($response.body);

Tlomlgm.data.vipPastDueTime = 4092599350000;
Tlomlgm.data.vipLabel = "高级用户";
Tlomlgm.data.vipLabelLevel = 4;
Tlomlgm.data.vipType = 1;
Tlomlgm.data.pcVipType = 1;
Tlomlgm.data.pcVipPastDueTime = 4092599349000;
Tlomlgm.data.vitalityVipPastDueTime = 4092599349000;
Tlomlgm.data.vitalityPcVipPastDueTime = 4092599349000;

$done({body : JSON.stringify(Tlomlgm)});
