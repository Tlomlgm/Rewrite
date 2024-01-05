/*
魏 
去掉 开屏/发现/商城/轮播/广告

[rewrite_local]
^https?:\/\/gw-app\.beantechyun\.com\/app-api\/api\/(wey\/.+|.+)\/content\/route\/(getWholeNodeContentInfo\?contentType=(MENU|APPSECONDAD)|getContentInfo) url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/WEY.js

[mitm]
hostname = gw-app.beantechyun.com

*/

var Tlomlgm = JSON.parse($response.body);
const Alter = /contentType=MENU/;
const AD = /(getContentInfo|contentType=APPSECONDAD)/;

if(Alter.test($request.url)){
  for (var i = 0; i < Tlomlgm.data.length; i++) {  Tlomlgm.data[i].contentMessageList = Tlomlgm.data[i].contentMessageList.filter(item => item.title !== '发现' && item.title !== '商城');}
}

if(AD.test($request.url)){
  Tlomlgm.data = [];
}

$done({body: JSON.stringify(Tlomlgm)});
