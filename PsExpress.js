/*
            
# Ps Express
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
