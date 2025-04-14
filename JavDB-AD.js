/*
JavDB-AD
jav.app

[rewrite_local]
^https?:\/\/api\.((pxxgg|hechuangxinxi|yijingluowangluo)\.xyz|ujvnmkx\.cn|ffaoa\.com)\/api url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/JavDB-AD.js

[mitm]
hostname = api.pxxgg.xyz, api.ujvnmkx.cn, api.yijingluowangluo.xyz, api.hechuangxinxi.xyz, api.ffaoa.com

*/

// 调试用：输出 URL 和响应体
console.log("Request URL: " + ($request.url || "undefined"));
console.log("Response Body: " + $response.body);

// 获取响应体
let body = $response.body;

// 确保响应体存在
if (!body) {
  console.log("Error: Response body is empty");
  $done({});
}

// 尝试解析 JSON
let obj;
try {
  obj = JSON.parse(body);
} catch (e) {
  console.log("Error: Failed to parse JSON - " + e);
  $done({ body });
}

// 确保 obj 有效
if (!obj) {
  console.log("Error: Parsed object is invalid");
  $done({ body });
}

// 定义 URL 匹配常量
const ada = "/ads";
const adb = "/startup";

// 处理广告
if ($request.url && $request.url.indexOf(ada) !== -1) {
  if (obj.data && obj.data.ads) {
    console.log("Clearing ads");
    obj.data.ads = {};
  } else {
    console.log("Warning: obj.data or obj.data.ads not found");
  }
}

// 处理开屏广告和设置
if ($request.url && $request.url.indexOf(adb) !== -1) {
  if (obj.data) {
    if (obj.data.splash_ad) {
      console.log("Modifying splash_ad");
      obj.data.splash_ad.enabled = false;
      obj.data.splash_ad.overtime = 0;
      obj.data.splash_ad.ad = {};
    } else {
      console.log("Warning: obj.data.splash_ad not found");
    }
    if (obj.data.feedback) {
      obj.data.feedback.placeholder = "";
    }
    if (obj.data.settings) {
      obj.data.settings.UPDATE_DESCRIPTION = "";
      obj.data.settings.NOTICE = "";
    }
  } else {
    console.log("Warning: obj.data not found");
  }
}

// 输出修改后的响应
console.log("Returning modified body");
$done({ body: JSON.stringify(obj) });