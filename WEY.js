/*
魏 去掉 发现/商城/

[rewrite_local]

^https:\/\/gw-app\.beantechyun\.com\/app-api\/api\/wey\/v2\.0\/content\/route\/getContentInfo\?nodeId=wey_serviceCH_servicePG_slideMDL url reject-dict

^https?:\/\/gw-app\.beantechyun\.com\/app-api\/api\/.+\/content\/route\/getWholeNodeContentInfo url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/WEY.js

[mitm]
hostname = gw-app.beantechyun.com

*/

var Tlomlgm = JSON.parse($response.body);

for (var i = 0; i < Tlomlgm.data.length; i++) {
  Tlomlgm.data[i].contentMessageList = Tlomlgm.data[i].contentMessageList.filter(item => item.title !== '发现' && item.title !== '商城');
}

$done({body: JSON.stringify(Tlomlgm)});