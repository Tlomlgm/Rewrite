/*
#Nicegram v1.1.1
https://apps.apple.com/us/app/nicegram-secure-telegram-chat/id1608870673?l=zh-Hans-CN

[rewrite_local]
^https?:\/\/restore-access\.indream\.app\/restoreAccess url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/Nicegram.js

[mitm]
hostname = restore-access.indream.app

*/

const responseData = {
  "data": {
    "premiumAccess": true
  }
};
