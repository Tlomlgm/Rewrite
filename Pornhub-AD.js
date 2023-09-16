/*
# PornHub  AD

// 引用地址 https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/Adblock4limbo.js

[rewrite_local]

^https:\/\/(cn|www)\.pornhub\.com\/_xa\/ads.* url reject-dict

^https?:\/\/(\w{0,3}(\.){0,1}(pornhub)(\.)\w{0,3})(?!.*?(/(cdn-cgi)))(?!.*?(\.(css|js|jpeg|jpg|png|gif|ico|mp3|mp4|svg|tff|PNG|woff|woff2|m3u8))).* url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/Pornhub-AD.js

[mitm]
hostname = pornhub.com

*/
let ele = "<head>";
let eleReplace =
  '<head><link rel="stylesheet" href="https://gitlab.com/RuCu6/QuanX/-/raw/main/Css/Adblock4limbo.user.css" type="text/css" /><script type="text/javascript" async="async" src="https://gitlab.com/RuCu6/QuanX/-/raw/main/Scripts/limbo/Adblock4limbo.user.js"></script>';
let body = $response.body.replace(ele, eleReplace);
$done({ body });
