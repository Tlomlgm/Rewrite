/*
#泥巴网站净化
https://m.nivod4.tv

[rewrite_local]
^https?:\/\/.*nivod.*\/($|[0-9a-zA-Z=_/-]+\.html) url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/Nivod4.js

[mitm]
hostname = m.nivod4.tv

*/

var body = $response.body.replace(/<head>/, '<head><style>img[src*=gif], .video-ad, .nav-ads, #adDiv, .v-ad, .ad-text, #video-container + ul[style^=\"width:\"] > li > img {display: none !important}</style>');
$done({ body });
