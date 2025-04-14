/*
JavDB-AD
jav.app

[rewrite_local]
^https?:\/\/api\.((pxxgg|hechuangxinxi|yijingluowangluo)\.xyz|ujvnmkx\.cn|ffaoa\.com)\/api url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/JavDB-AD.js

[mitm]
hostname = api.pxxgg.xyz, api.ujvnmkx.cn, api.yijingluowangluo.xyz, api.hechuangxinxi.xyz, api.ffaoa.com

*/


// 获取响应体
let body = $response.body;

// 确保响应体存在
if (!body) {
  $done({});
}

// 尝试解析 JSON
let obj;
try {
  obj = JSON.parse(body);
} catch (e) {
  console.log("JSON 解析失败: " + e);
  $done({});
}

// 确保 obj 和 obj.data 存在
if (!obj || !obj.data) {
  console.log("响应数据无效或缺少 data 字段");
  $done({ body });
}

// 定义 URL 匹配常量
const ada = "/ads";
const adb = "/startup";

// 处理广告
if ($request.url && $request.url.toLowerCase().indexOf(ada) !== -1) {
  if (obj.data.ads) {
    obj.data.ads = {};
  }
}

// 处理开屏广告和设置
if ($request.url && $request.url.toLowerCase().indexOf(adb) !== -1) {
  if (obj.data.splash_ad) {
    obj.data.splash_ad.enabled = false;
    obj.data.splash_ad.overtime = 0;
    obj.data.splash_ad.ad = {};
  }
  if (obj.data.feedback) {
    obj.data.feedback.placeholder = "";
  }
  if (obj.data.settings) {
    obj.data.settings.UPDATE_DESCRIPTION = "";
    obj.data.settings.NOTICE = "";
  }
}

// 输出修改后的响应
$done({ body: JSON.stringify(obj) });