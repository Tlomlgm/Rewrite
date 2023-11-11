/*
#Foodie v5.3.4
https://apps.apple.com/cn/app/foodie-%E7%BE%8E%E9%A3%9F%E7%9B%B8%E6%9C%BA/id1336411132

#轻图 v4.2.35
https://apps.apple.com/cn/app/%E8%BD%BB%E5%9B%BE-%E4%BF%AE%E5%87%BA%E9%AB%98%E7%BA%A7%E8%B4%A8%E6%84%9F%E7%BE%8E/id1527559409

#B612相机 v12.3.16
https://apps.apple.com/cn/app/b612%E5%92%94%E5%8F%BD-%E7%82%B9%E7%BC%80%E4%BD%A0%E7%9A%84%E8%87%AA%E7%84%B6%E7%BE%8E/id1125855154

#甜盐相机 v7.1.7
https://apps.apple.com/cn/app/%E7%94%9C%E7%9B%90%E7%9B%B8%E6%9C%BA-%E6%B8%85%E6%99%B0%E8%87%AA%E7%84%B6-%E4%B8%8D%E5%90%83%E5%A6%86/id1518736092

[rewrite_local]
^https?:\/\/(purchase-.*-api|user-kaji-api)\.(yiruikecorp|b612kaji|tianyancam)\.com\/v\d\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/Yiruike.js

[mitm]
hostname = purchase-*-api.*.com, user-kaji-api.b612kaji.com

*/

var Tlomlgm = JSON.parse($response.body);
const Foodie = 'https://purchase-foodiecn-api.yiruikecorp.com';
const qingtu = 'https://purchase-qingtu-api.b612kaji.com';
const B612xj = 'https://user-kaji-api.b612kaji.com';
const tianyan = 'https://purchase-tianyan-api.tianyancam.com';

// Foodie
if ($request.url.indexOf(Foodie) != -1){
  id = "com.linecorp.Foodiecn.subscribe.oneyear";
}

// 轻图
if ($request.url.indexOf(qingtu) != -1){
  id = "com.photovision.camera.subscribe.plan.oneyear";
}

// B612相机
if ($request.url.indexOf(B612xj) != -1){
  id = "com.campmobile.snowcamera.vip.oneyear";
}

// 甜盐相机
if ($request.url.indexOf(tianyan) != -1){
  id = "com.yiruike.sodacn.subscribe.oneyear";
}

Tlomlgm = {  
  "result" : {    
    "products" : [      
      {        
        "managed" : false,        
        "status" : "ACTIVE",        
        "startDate" : 1666666666666,        
        "productId" : (id),        
        "expireDate" : 4092599349000      
      }    
    ],    
    "activated" : true  
  }
};

$done({body : JSON.stringify(Tlomlgm)});
