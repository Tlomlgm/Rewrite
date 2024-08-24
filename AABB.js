/*
[rewrite_local]
^https:\/\/dualstack-restios\.amap\.com\/v3\/geocode\/regeo  url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/AABB.js

[mitm]
hostname =restios.amap.com

*/
var url = $request.url;

if (url.indexOf("https://restios.amap.com/v3/geocode/regeo") !== -1) { // 请将此URL替换为你的目标URL

    var obj = JSON.parse($response.body);

    // 遍历所有 POI 对象
    for (var i = 0; i < obj.regeocode.pois.length; i++) {
        // 如果 name 是 "云昆大厦(建设中)"
        if (obj.regeocode.pois[i].name === "云昆大厦(建设中)") {
            // 将其替换为 "紫禁城"
            obj.regeocode.pois[i].name = "紫禁城";
        }
    }

    $done({body: JSON.stringify(obj)});
} else {
    $done({});
}
