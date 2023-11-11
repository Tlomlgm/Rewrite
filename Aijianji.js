/*
爱剪辑 v2.7.0
https://apps.apple.com/cn/app/%E7%88%B1%E5%89%AA%E8%BE%91-%E8%A7%86%E9%A2%91%E5%89%AA%E8%BE%91-%E8%A7%86%E9%A2%91%E7%BC%96%E8%BE%91-vlog-%E5%88%B6%E4%BD%9C/id1449230057

[rewrite_local]
^https?:\/\/api\.open\.loveclip\.site\/UserInfo\/(UserPersonalCoreAsync|GetUserDetail) url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/Aijianji.js

[mitm]
hostname = api.open.loveclip.site

*/

const urla = "/UserInfo/UserPersonalCoreAsync";
const urlb = "/UserInfo/GetUserDetail";
var body = $response.body;

if ($request.url.indexOf(urla) != -1){
  let Tlomlgm = JSON.parse(body);
  Tlomlgm.data.IsVip = true;
  Tlomlgm.data.VipLevel = "1";
  Tlomlgm.data.VipExpire = "2099-09-09 09:09:09";
  body = JSON.stringify(Tlomlgm);}

if ($request.url.indexOf(urlb) != -1){
  let Tlomlgm = JSON.parse(body);
  Tlomlgm.data.IsVip = true;
  Tlomlgm.data.VipLevel = "1";
  Tlomlgm.data.VipExpire = "2099-09-09 09:09:09";
  body = JSON.stringify(Tlomlgm);}

$done({body});
