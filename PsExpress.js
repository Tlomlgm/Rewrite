/*
#Ps Express v23.30.0
https://apps.apple.com/cn/app/photoshop-express-%E5%9B%BE%E7%89%87%E7%BC%96%E8%BE%91-%E4%BF%AE%E5%9B%BE/id331975235

[rewrite_local]
^https:\/\/lcs-mobile-cops\.adobe\.io\/mobile_profile url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/PsExpress.js

[mitm] 
hostname= lcs-mobile-cops.adobe.io, photos.adobe.io

*/

let obj = JSON.parse($response.body)
let pro= obj["mobileProfile"];
pro["profileStatus"] = "PROFILE_AVAILABLE";
pro["legacyProfile"] = "{}";
pro["relationshipProfile"] = "[]";
$done({body: JSON.stringify(obj)})
