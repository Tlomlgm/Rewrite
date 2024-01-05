/*
魏 去掉 发现/商城/

[rewrite_local]

^https:\/\/gw-app\.beantechyun\.com\/app-api\/api\/wey\/v2\.0\/content\/route\/getContentInfo\?nodeId=wey_serviceCH_servicePG_slideMDL url reject-dict

^https?:\/\/gw-app\.beantechyun\.com\/app-api\/api\/.+\/content\/route\/getWholeNodeContentInfo url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/WEY.js

[mitm]
hostname = gw-app.beantechyun.com

*/

var chxm1023 = JSON.parse($response.body);

for (var i = 0; i < chxm1023.data.length; i++) {
  chxm1023.data[i].contentMessageList = chxm1023.data[i].contentMessageList.filter(item => item.title !== '发现' && item.title !== '商城');
  
  let indexA = chxm1023.data[i].contentMessageList.findIndex(item => item.title === '爱车');
  let indexB = chxm1023.data[i].contentMessageList.findIndex(item => item.title === '服务');

  if (indexA !== -1 && indexB !== -1) {
    [chxm1023.data[i].contentMessageList[indexA], chxm1023.data[i].contentMessageList[indexB]] = [chxm1023.data[i].contentMessageList[indexB], chxm1023.data[i].contentMessageList[indexA]];
  }
}

$done({body: JSON.stringify(chxm1023)});
