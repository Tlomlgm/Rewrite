/*
#VN-视频剪辑  https://apps.apple.com/cn/app/vn-video-editor/id1343581380

[rewrite_local]
^https:\/\/api2\.vlognow\.me\/vn-pay\/api\/v1\/public\/iap\/receipt\/status?(.*?)*$ url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/VN.js

[mitm]
hostname = api2.vlognow.me

*/

var Tlomlgm = JSON.parse($response.body);

Tlomlgm = {
  "msg": "success",
  "data": [
    {
      "origin_transaction_id": "10086",
      "is_free_trial": false,
      "active": true,
      "product_identifier": "Product_Auto_Renew_Annual_2022_05_13",
      "enabled_auto_renew": false,
      "is_gift_subscription": false,
      "platform": "iOS",
      "billing_date_ms": 1668673883000,
      "original_purchase_date_ms": 1668673708000,
      "start_date_ms": 1668673703000,
      "expires_date_ms": 4092599350000,
      "status": 1,
      "group_identifier": "20936308"
    }
  ],
  "code": 1
}

$done({body: JSON.stringify(Tlomlgm)});
