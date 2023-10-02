/*

#Nicegram
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
