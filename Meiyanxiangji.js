/*
#美颜相机 v11.7.80
https://apps.apple.com/cn/app/%E7%BE%8E%E9%A2%9C%E7%9B%B8%E6%9C%BA/id592331499
**************************************

[rewrite_local]
^https:\/\/(api|community)\.meiyan\.com\/(vip|v\d)\/(user_center|user_info|user\/(.*?)) url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/Meiyanxiangji.js

[mitm]
hostname = *.meiyan.com

*/

var Tlomlgm = JSON.parse($response.body);
const hysj = '/vip/user_info';
const user = '/user/show';
const hymb = '/vip/user_center';

if ($request.url.indexOf(hysj) != -1){
Tlomlgm.response.status = 1;
Tlomlgm.response.ad_vip_type = 3;
Tlomlgm.response.expire_time = "2099-09-09 09:09:09";
Tlomlgm.response.type = 2;
Tlomlgm.response.product_type = 1;
Tlomlgm.response.expire_date = "2099-09-09";
}

if ($request.url.indexOf(user) != -1){
Tlomlgm.data.vip_type = 1;
Tlomlgm.data.vip_icon = "https://xximg1.meitudata.com/6948531818264286440.png";
Tlomlgm.data.follower_count = 999000;
Tlomlgm.data.fan_count = 999000;
Tlomlgm.data.favorites_count = 999000;
Tlomlgm.data.be_like_count = 999000;
}

if ($request.url.indexOf(hymb) != -1){
Tlomlgm.response.user_info = {
      "status" : 1,
      "period_type" : 11,
      "discount_status" : 0,
      "agreement_status" : 1,
      "product_type" : 1,
      "expire_date" : "2099-09-09"
    };
}

$done({body : JSON.stringify(Tlomlgm)});
