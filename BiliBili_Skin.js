#哔哩哔哩会员皮肤

[rewrite_local]

^https?:\/\/ap(i|p)\.bilibili\.com\/x\/(vip|v2|resource)\/(space|account|web|price|top_panel_info|show)(\/|\?)(mine|myinfo|access|vip_center|panel|_bridge|skin\?).* url script-response-body https://raw.githubusercontent.com/ClydeTime/Surge/main/Script/BiliBili/biliSkin.js

[mitm]
hostname = app.bilibili.com
