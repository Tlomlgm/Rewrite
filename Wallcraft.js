/*

# WallCraft
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
