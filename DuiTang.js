/*
#堆糖 v8.24.3
https://apps.apple.com/cn/app/%E5%A0%86%E7%B3%96-%E5%A3%81%E7%BA%B8%E5%A4%B4%E5%83%8F%E7%BE%8E%E5%9B%BE%E7%A4%BE%E5%8C%BA/id533415763

[rewrite_local]
^http[s]?:\/\/.*\.duitang\.com\/napi url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/DuiTang.js

[mitm] 
hostname = *.duitang.com

*/

var body = $response.body;

body = body.replace(/\"vip":\w+/g, '\"vip":true');
body = body.replace(/\"svip_mechanism":\d+/g, '\"svip_mechanism":1');
body = body.replace(/\"is_life_artist":\w+/g, '\"is_life_artist":true');
body = body.replace(/\"isnew":\w+/g, '\"isnew":true');
body = body.replace(/\"vip_end_at":\d+/g, '\"vip_end_at":4092599350');
body = body.replace(/\"vip_end_at_mills":\d+/g, '\"vip_end_at_mills":4092599350000');
body = body.replace(/\"vip_level":\d+/g, '\"vip_level":11');
body = body.replace(/\"latest_vip_level":\d+/g, '\"latest_vip_level":11');
body = body.replace(/\"is_certify_user":\w+/g, '\"is_certify_user":true');
body = body.replace(/\"be_follow_count":\d+/g, '\"be_follow_count":1000000');
body = body.replace(/\"follow_count":\d+/g, '\"follow_count":1000000');
body = body.replace(/\"score":\d+/g, '\"score":1000000');

$done({body});
