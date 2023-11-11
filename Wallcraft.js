/*
#WallCraft v3.11.1
https://apps.apple.com/cn/app/wallcraft-3d-4k%E9%94%81%E5%B1%8F%E5%A3%81%E7%BA%B8-%E5%8A%A8%E6%80%81%E5%A2%99%E7%BA%B8%E9%AB%98%E6%B8%85%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87/id1348676585

[rewrite_local]
^https?:\/\/billing-ios\.wallpaperscraft\.com\/verify_receipt\/remove_ads$ url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/Wallcraft.js

[mitm] 
hostname = *.wallpaperscraft.com

*/

var body = $response.body;
var objc = JSON.parse(body);

objc.items["all_time"] = {
    "type" : "nonconsumable",
    "is_active" : true
};

body = JSON.stringify(objc);
$done({ body });
