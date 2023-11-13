/*
#百度网盘 v12.0.1
https://apps.apple.com/cn/app/%E7%99%BE%E5%BA%A6%E7%BD%91%E7%9B%98/id547166701

[rewrite_local]
^https?:\/\/pan\.baidu\.com\/(youai\/(user\/.+\/getminfo|membership\/.+\/adswitch)|(rest\/.+\/membership\/user|act\/.+\/(bchannel|welfare)\/list|api\/usercfg)) url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/Baiduwangpan.js

[mitm]
hostname = pan.baidu.com

*/

var Tlomlgm = JSON.parse($response.body);
const yike = '/getminfo';
const ad = '/adswitch';
const wangpan = '/membership/user';
const list = '/bchannel/list';
const hf = '/welfare/list';
const usercfg = '/api/usercfg';

if ($request.url.indexOf(yike) != -1){
  Tlomlgm = {
  "errno": 0,
  "request_id": 342581654394297772,
  "has_purchased": 1,
  "has_buy_1m_auto_first": 0,
  "can_buy_1m_auto_first": 0,
  "can_buy_1m_auto_first_6": 0,
  "has_received_7dfree": 1,
  "product_tag": 3,
  "sign_status": 1,
  "sign_infos": [{
    "product_id": "12745849497343294855",
    "order_no": "2203060931530010416",
    "ctime": 1646537208,
    "mtime": "2022-05-06 11:26:48",
    "status": 1,
    "sign_price": 1000,
    "sign_channel": 0
  }],
  "vip_tags": ["album_vip"],
  "product_infos": [{
    "product_id": "12745849497343294855",
    "start_time": 1646534568,
    "end_time": 4092599349,
    "buy_time": 1649994533,
    "tag": "album_vip",
    "order_no": "2203060931530010416"
  }],
  "vip_infos": [{
    "tag": "album_vip",
    "start_time": 1646537208,
    "end_time": 4092599349
  }],
  "expire_time": 0
 };
}

if ($request.url.indexOf(ad) != -1){
  Tlomlgm.switch = "open";
}

if ($request.url.indexOf(wangpan) != -1){
  Tlomlgm.product_infos = [
    {
      "product_id" : "5310897792128633390",
      "end_time" : 4092600296,
      "buy_time" : "1417260485",
      "cluster" : "offlinedl",
      "start_time" : 1417260485,
      "detail_cluster" : "offlinedl",
      "product_name" : "gz_telecom_exp"
    },
    {
      "product_name" : "svip2_nd",
      "product_description" : "超级会员",
      "function_num" : 0,
      "start_time" : 1417260485,
      "buy_description" : "",
      "buy_time" : 1417260485,
      "product_id" : "1",
      "auto_upgrade_to_svip" : 1,
      "end_time" : 4092600296,
      "cluster" : "vip",
      "detail_cluster" : "svip",
      "status" : 1
    }
  ];
  Tlomlgm.guide_data = {
    "title" : "超级会员 SVIP",
    "content" : "已拥有极速下载+视频倍速特权",
    "button" : {
