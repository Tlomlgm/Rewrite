/*

[rewrite_local]
#修改
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/PicSeed.js
#清理
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/PicSeed.js

[mitm] 
hostname = api.revenuecat.com

*/

const Q = {};
const Q1 = JSON.parse(typeof $response != "undefined" && $response.body || null);

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  Q.headers = $request.headers;
} else if (Q1 && Q1.subscriber) {
  Q1.subscriber.subscriptions = Q1.subscriber.subscriptions || {};
  Q1.subscriber.entitlements = Q1.subscriber.entitlements || {};

  const UA = $request.headers['user-agent'];
  const UAMappings = {
    'PicSeedClient': { name: 'Pro', id: 'com.picseed.sub.pro.monthly' }
  };

  const data = {
    "expires_date": "2099-12-31T12:00:00Z",
    "original_purchase_date": "2023-09-01T11:00:00Z",
    "purchase_date": "2023-09-01T11:00:00Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };

  if (/^PicSeedClient/i.test(UA)) {
    const { name, id } = UAMappings['PicSeedClient'];
    Q1.subscriber.subscriptions[id] = data;
    Q1.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
    Q1.subscriber.entitlements[name].product_identifier = id;
  }
  
  Q.body = JSON.stringify(Q1);
}

$done(Q);
