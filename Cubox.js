/*
#Cubox
[rewrite_local]

^https:\/\/cubox\.(pro|cc)\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/Cubox.js

[mitm]
hostname = cubox.*

*/

var body = $response.body;
var url = $request.url;
var Tlomlgm = JSON.parse(body);
const vip = '/userInfo';

if (url.indexOf(vip) != -1) {
    Tlomlgm.data.level = 1;
    Tlomlgm.data.expireTime = "2099-09-09T09:09:09+09:09";
    Tlomlgm.data.nickName = "Tlomlgm";
    Tlomlgm.data.thirdNickName = "Tlomlgm";
    Tlomlgm.data.isExpire = false;
    Tlomlgm.data.active = true;
    Tlomlgm.data.isThirdUser = true;
    Tlomlgm.data.payTime = 1660006006;
    body = JSON.stringify(Tlomlgm);
}

$done({body});
