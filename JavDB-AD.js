/*
JavDB-AD
jav.app

[rewrite_local]
^https?:\/\/api\.((pxxgg|hechuangxinxi|yijingluowangluo)\.xyz|ujvnmkx\.cn)\/api url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/JavDB-AD.js

[mitm]
hostname = api.pxxgg.xyz, api.ujvnmkx.cn, api.yijingluowangluo.xyz, api.hechuangxinxi.xyz

*/


var body = $response.body;
var Tlomlgm = JSON.parse(body);

const ada = '/ads';
const adb = '/startup';

// 横幅广告
if ($request.url.indexOf(ada) != -1){
  Tlomlgm.data.ads = {};
}

// 公告，开屏
if ($request.url.indexOf(adb) != -1){
  Tlomlgm.data.splash_ad.enabled = false;
  Tlomlgm.data.splash_ad.overtime = 0;
  Tlomlgm.data.splash_ad.ad = {};
  Tlomlgm.data.feedback.placeholder = "";
  Tlomlgm.data.settings.UPDATE_DESCRIPTION = "";
  Tlomlgm.data.settings.NOTICE = "";
}

$done({ body: JSON.stringify(Tlomlgm) });
