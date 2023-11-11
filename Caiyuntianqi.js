/*
彩云天气 v7.5.0
https://apps.apple.com/cn/app/%E5%BD%A9%E4%BA%91%E5%A4%A9%E6%B0%94pro/id1067198688

[rewrite_local]
# VIP信息
^https?:\/\/(biz|wrapper|starplucker)\.(cyapi|caiyunapp)\.(cn|com)\/(.+\/(user\?app_name|activity\?app_name|visitors|operation\/banners)|p\/v\d\/(vip_info|user_info)) url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/Caiyuntianqi.js

# SVIP地图-48小时预报
^https?:\/\/(api|wrapper)\.(cyapi|caiyunapp)\.(cn|com)\/v\d\/(satellite|nafp\/origin_images) url script-request-header https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/Caiyuntianqi.js

[mitm]
hostname = *.cyapi.cn, *.caiyunapp.com

*/

const Tloml = {};
const Tlomlgm = JSON.parse(typeof $response != "undefined" && $response.body || null);
const url = $request.url;
const adUrl = /(activity\?app_name|operation\/banners)/;
const vipUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/p\/v\d\/vip_info/;
const userUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/v\d\/user\?app_name/;
const infoUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/p\/v\d\/user_info/;

if (typeof $response == "undefined") {
  Tloml.headers = $request.headers;
  Tloml.headers['device-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps';
} else {
  switch (true) {
    case adUrl.test(url):
      Tlomlgm.status = "ok";
      Tlomlgm.activities = [{ "items": [{}] }];
      Tlomlgm.data = [];
      break;
    case vipUrl.test(url):
      Tlomlgm = {
        ...Tlomlgm,
        vip: {
          "expires_time": "4092599349",
          "is_auto_renewal": true
        },
        trial_svip: {
          ...Tlomlgm.trial_svip,
          "received_time": "1666666666",
          "expires_time": "4092599349",
          "is_recharge_vip": true
        },
        svip: {
          "expires_time": "4092599349",
          "is_auto_renewal": true
        }
      };
      break;
    case userUrl.test(url):
      Tlomlgm.result = {
        ...Tlomlgm.result,
        is_vip: true,
        vip_expired_at: 4092599349,
        svip_given: 9999,
        is_xy_vip: true,
        xy_svip_expire: 4092599349,
        wt: {
          ...Tlomlgm.result.wt,
          vip: {
            ...Tlomlgm.result.wt.vip,
            "expired_at": 0,
            "enabled": true,
            "svip_apple_expired_at": 4092599349,
            "is_auto_renewal": true,
            "svip_expired_at": 4092599349
          },
          svip_given: 9999,
        },
        is_phone_verified: true,
        vip_take_effect: 1,
        is_primary: true,
        xy_vip_expire: 4092599349,
        svip_expired_at: 4092599349,
        svip_take_effect: 1,
        vip_type: "s",
        phone_num: "13145200000",
        name: "Tlomlgm",
        avatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI6OLWyDbM42w944dUdfzrPEQv6uaD3AEsVcicibYibxG9PBBSaibwqRJzOk2US1d8N4hC9nL1a5rXu3g/132",
        bound_status: {
          ...Tlomlgm.result.bound_status,
          caiyun: {
            ...Tlomlgm.result.bound_status.caiyun,
            "username": "Tlomlgm",
            "is_bound": true
          }
        }
      };
      break;
    case infoUrl.test(url):
      Tlomlgm["reg_days"] = 99999;
      Tlomlgm["name"] = "Tlomlgm";
      Tlomlgm["avatar"] = "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI6OLWyDbM42w944dUdfzrPEQv6uaD3AEsVcicibYibxG9PBBSaibwqRJzOk2US1d8N4hC9nL1a5rXu3g/132";
      break;
  }
  Tloml.body = JSON.stringify(Tlomlgm);
}

$done(Tloml);
