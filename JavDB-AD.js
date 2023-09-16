/*************************************
项目名称：JavDB-去广告
下载地址：https://javdb008.com
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https?:\/\/api\.((pxxgg|yijingluowangluo)\.xyz|ujvnmkx\.cn)\/api url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/Javbd-AD.js

[mitm]
hostname = api.pxxgg.xyz, api.ujvnmkx.cn, api.yijingluowangluo.xyz

*************************************/


var body = $response.body;
var Tloml.gm = JSON.parse(body);

const ada = '/ads';
const adb = '/startup';

// 横幅广告
if ($request.url.indexOf(ada) != -1){
  Tloml.gm.data.ads = {};
}

// 公告，开屏
if ($request.url.indexOf(adb) != -1){
  Tloml.gm.data.splash_ad.enabled = false;
  Tloml.gm.data.splash_ad.overtime = 0;
  Tloml.gm.data.splash_ad.ad = {};
  Tloml.gm.data.feedback.placeholder = "";
  Tloml.gm.data.settings.UPDATE_DESCRIPTION = "";
  Tloml.gm.data.settings.NOTICE = "";
}

$done({ body: JSON.stringify(Tloml.gm) });
