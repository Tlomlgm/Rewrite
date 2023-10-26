#哔哩哔哩会员

[rewrite_local]

^https?:\/\/ap(i|p)\.bilibili\.com\/bilibili(.*)\/(View|Play(URL|View|Conf|erOnline)|MainList|ViewProgress)$* url script-response-body https://raw.githubusercontent.com/ClydeTime/Surge/main/Script/BiliBili/biliCrack.js

[mitm]
hostname = app.bilibili.com
