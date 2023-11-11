/*
#录屏 v1.8.0.1
https://apps.apple.com/cn/app/%E5%BD%95%E5%B1%8F-%E5%B1%8F%E5%B9%95%E5%BD%95%E5%88%B6%E7%9B%B4%E6%92%AD%E8%A7%86%E9%A2%91%E5%BD%95%E5%88%B6-%E5%B0%8F%E7%86%8A%E8%B4%B4%E7%BA%B8%E6%B8%B8%E6%88%8F%E5%8F%98%E5%A3%B0%E6%89%8B%E6%9C%BA%E5%BD%95%E5%B1%8F%E8%BD%AF%E4%BB%B6/id1489145709

#大神P图 v1.4.7
https://apps.apple.com/cn/app/magicut-cartoon-photo-editor/id1550422757

#乐秀 v5.9.42
https://apps.apple.com/cn/app/%E4%B9%90%E7%A7%80-%E8%A7%86%E9%A2%91%E7%BC%96%E8%BE%91%E5%92%8C%E8%A7%86%E9%A2%91%E5%89%AA%E8%BE%91%E8%BD%AF%E4%BB%B6/id930380089

#多功能视频剪辑 v2.9.19
https://apps.apple.com/cn/app/%E8%A7%86%E9%A2%91%E5%89%AA%E8%BE%91%E7%A5%9E%E5%99%A8-%E8%A7%86%E9%A2%91%E8%A3%81%E5%89%AA-%E5%9B%BE%E7%89%87%E7%BC%96%E8%BE%91-%E4%B8%80%E9%94%AE%E5%88%B6%E4%BD%9C%E5%8D%A1%E7%82%B9%E8%A7%86%E9%A2%91/id1460222275

[rewrite_local]
^https?:\/\/.*\.(videoshowiosglobalserver|enjoy-mobi)\.com\/zone\/.+\/(iosPayClient\/(payVerify|imeiVerify)|startPageAd\/getAds) url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/VideoShow.js

[mitm]
hostname = *.videoshowiosglobalserver.com, *.enjoy-mobi.com

*/


var Tlpmlgm = JSON.parse($response.body);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const ad = '/startPageAd/getAds';
const vipa = '/payVerify';
const vipb = '/imeiVerify';

//去除乐秀开屏
if ($request.url.indexOf(ad) != -1){
  chxm1023 = {};
}

//录屏
if (ua.indexOf('录屏') != -1) {
  vip_id = "vrecorder_vip_yearly_3";
  purchase = "2023-05-20 13:14:05 Etc/GMT";
  expires = "2099-09-09 09:09:09 Etc/GMT";
}

//大神P图
if (ua.indexOf('magicut_US') != -1) {
  vip_id = "mg_vip_year";
  purchase = "2023-05-20 13:14:05";
  expires = "2099-09-09 09:09:09";
}

//乐秀
if (ua.indexOf('VideoShow') != -1) {
  vip_id = "vip_privilege_yearly_3";
  purchase = "2023-05-20 13:14:05";
  expires = "2099-09-09 09:09:09";
}

//多功能视频剪辑
if (ua.indexOf('多功能视频剪辑') != -1) {
  vip_id = "vip_yearly_3";
  purchase = "2023-05-20 13:14:05";
  expires = "2099-09-09 09:09:09";
}

//会员信息
if ($request.url.indexOf(vipa) != -1){
  Tlomlgm = {
  "expires_date" : (expires),
  "isBlacklist" : "0",
  "retCode" : "1",
  "status" : "0",
  "transaction_id" : "310001314520000",
  "retMsg" : "success",
  "isRepeatBind" : "0",
  "isUsedPromocode" : "0",
  "subscrib_type" : "2",
  "current_date" : "2023-05-20 13:14:00",
  "isReportPrice" : "0",
  "product_id" : (vip_id),
  "purchase_date" : (purchase),
  "original_transaction_id" : "310001314520000",
  "cancellation_date" : "",
  "promotional_offer_id" : "",
  "recallLabelType" : "0",
  "is_in_intro_offer_period" : "false",
  "msg" : "验证成功",
  "is_trial_period" : "true"
};}

if ($request.url.indexOf(vipb) != -1){
  Tlomlgm = {
  "subscrib_type" : "2",
  "retCode" : 1,
  "current_date" : "2023-05-20 13:14:00",
  "isUpdateUuid" : 0,
  "retMsg" : "success",
  "isUsedPromocode" : 0,
  "isDiscount" : 1,
  "product_id" : (vip_id),
  "renew_status" : 0,
  "label_type" : 0,
  "list" : [
    {
      "current_date" : "2023-05-20 13:14:00",
      "original_transaction_id" : "310001314520000",
      "order_status" : 1,
      "product_id" : (vip_id),
      "purchase_date" : (purchase),
      "expires_date" : (expires)
    }
  ],
  "recallLabelType" : 0
};}

$done({body : JSON.stringify(Tlomlgm)});
