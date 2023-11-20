/*
#Wink v1.6.10
https://apps.apple.com/cn/app/wink-%E5%83%8F%E4%BF%AE%E5%9B%BE%E4%B8%80%E6%A0%B7%E4%BF%AE%E8%A7%86%E9%A2%91/id1594288016
#蛋啵 v1.2.950
https://apps.apple.com/cn/app/%E8%9B%8B%E5%95%B5-%E5%AE%9D%E5%AE%9D%E7%89%88%E7%BE%8E%E5%9B%BE%E7%A7%80%E7%A7%80/id1594998254
#潮自拍 v4.1.33
https://apps.apple.com/cn/app/%E6%BD%AE%E8%87%AA%E6%8B%8D/id1014277964
#美图设计室 v6.2.20
https://apps.apple.com/cn/app/%E7%BE%8E%E5%9B%BE%E8%AE%BE%E8%AE%A1%E5%AE%A4-ai%E5%95%86%E4%B8%9A%E8%AE%BE%E8%AE%A1%E7%9A%84%E6%97%A0%E9%99%90%E5%8F%AF%E8%83%BD/id875654777
#Chic v1.4.170
https://apps.apple.com/cn/app/chic-%E5%88%9B%E6%84%8F%E8%83%B6%E7%89%87%E7%9B%B8%E6%9C%BA/id1462999056

[rewrite_local]
^https:\/\/api-.*\.meitu\.com\/(.+\/user\/vip_info|user\/show) url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/MeituSeries.js

[mitm]
hostname = api-*.meitu.com

*/

var Tlomlgm = JSON.parse($response.body);
const vip = '/user/vip_info';
const user = '/user/show';

if ($request.url.indexOf(vip) != -1){
Tlomlgm.data.trial_period_invalid_time = 4092599349000;
Tlomlgm.data.current_order_invalid_time = 4092599349000;
Tlomlgm.data.valid_time = 4092599349000;
Tlomlgm.data.invalid_time = 4092599349000;
Tlomlgm.data.use_vip = true;
Tlomlgm.data.have_valid_contract = true;
Tlomlgm.data.derive_type_name = "普通会员";
Tlomlgm.data.in_trial_period = true;
Tlomlgm.data.is_vip = true;
}

if ($request.url.indexOf(user) != -1){
Tlomlgm.data.vip_type = 1;
Tlomlgm.data.vip_icon = "https://xximg1.meitudata.com/6948531818264286440.png";
Tlomlgm.data.follower_count = 999000;
Tlomlgm.data.fan_count = 999000;
Tlomlgm.data.favorites_count = 999000;
Tlomlgm.data.be_like_count = 999000;
}

$done({body : JSON.stringify(Tlomlgm)});
