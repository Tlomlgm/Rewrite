#JavDB

[rewrite_local]

^https:\/\/(api\.yijingluowangluo|belle-vie|hechuangxinxi\.xyz|jdforrepam\.com)\/api\/(v1\/(ads|startup|users)|v4\/movies\/\w+) url script-response-body https://raw.githubusercontent.com/Tlomlgm/Cite/main/JavDB-DaTa.js

^https:\/\/(api\.yijingluowangluo|belle-vie|hechuangxinxi\.xyz|jdforrepam\.com)\/api\/v1\/movies\/\w+\/play\? url script-request-header https://raw.githubusercontent.com/Tlomlgm/Cite/main/JavDB_DaTa.js


[mitm]
hostname = jdforrepam.com, api.yijingluowangluo.xyz, belle-vie.xyz, api.hechuangxinxi.xyz
