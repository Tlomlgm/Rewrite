#!name = cnftp
#!desc = China Film and Television Platform.
#!author = RuCu6
#!update = 2023-09-28 07:10

# 爱奇艺 //-i.vip.iqiyi.com, *.iqiyi.com
# 播放页开通会员提示
^https:\/\/act\.vip\.iqiyi\.com\/interact\/api\/v2\/show\? url reject-dict
# 首页信息流广告
^http:\/\/[\d\.]+\/3f1\/cards\.iqiyi\.com\/(views_home\/3\.0\/qy_home|waterfall\/3\.0\/feed)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
^http:\/\/access\.if\.iqiyi\.com\/3f1\/cards\.iqiyi\.com\/(views_category\/3\.0\/category_home|views_home\/3\.0\/qy_home|waterfall\/3\.0\/feed)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
^https:\/\/cards\.iqiyi\.com\/views_category\/3\.0\/(category_home|categorylib_content|film_hybrid)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
^https:\/\/cards\.iqiyi\.com\/(views_home\/3\.0\/qy_home|waterfall\/3\.0\/feed)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 播放详情页
^https:\/\/cards\.iqiyi\.com\/views_plt\/3\.0\/player_tabs_v2\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 搜索页列表
^https:\/\/cards\.iqiyi\.com\/views_search\/3\.0\/(hot_query_)?search\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 评论区
^https:\/\/comment-card\.iqiyi\.com\/views_comment\/3\.0\/long_video_comments\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 我的页面菜单
^https:\/\/iface2\.iqiyi\.com\/aggregate\/3\.0\/getMyMenus\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 首页左上角天气
^https:\/\/iface2\.iqiyi\.com\/control\/3\.0\/init_proxy\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 通用控制,各tab页二楼
^https:\/\/iface2\.iqiyi\.com\/fusion\/3\.0\/common_switch\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 播放页多余动效
^https:\/\/iface2\.iqiyi\.com\/ivos\/interact\/video\/data\? url reject-dict
# 播放页升级白金会员按钮
^https:\/\/iface2\.iqiyi\.com\/video\/3\.0\/v_interface_proxy\? url reject-dict
# 底部tab,顶部tab
^https:\/\/iface2\.iqiyi\.com\/views\/3\.0\/(bottom_theme|home_top_menu)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 青少年弹窗
^https:\/\/iface2\.iqiyi\.com\/views_pop\/3\.0\/pop_control\? url reject-dict
# 搜索框填充词
^https:\/\/search\.video\.iqiyi\.com\/q\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 开屏广告,播放广告
^https?:\/\/(kjp|t7z)\.cupid\.iqiyi\.com\/mixer\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js

# 芒果tv //*.mgtv.com
# 无用请求
^http:\/\/[\d\.]+:\d{5}\/\?cmd=indexes url reject
# 首页左上角推广
^http:\/\/[\d\.]+\/odin\/c1\/(channel\/ads|skin\/config)\? url reject-dict
# 底部tab红点
^https:\/\/damang\.api\.mgtv\.com\/station\/album\/red\/dot\? url reject-dict
# 播放器界面
^https:\/\/hb-boom\.api\.mgtv\.com\/release\/pullReleaseInfo url reject-dict
# 我的页面
^https:\/\/me\.bz\.mgtv\.com\/v3\/module\/list\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 首页信息流,顶部tab
^http:\/\/mob-st\.bz\.mgtv\.com\/odin\/c1\/channel\/index\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
^https?:\/\/dc2?\.bz\.mgtv\.com\/dynamic\/v1\/channel\/(index|vrsList)\/\w url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 底部tab
^https:\/\/mobile\.api\.mgtv\.com\/mobile\/config\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 升级弹窗
^https:\/\/mobile\.api\.mgtv\.com\/v2\/mobile\/checkUpdate\? url reject-dict
# 播放详情页
^https:\/\/mobile\.api\.mgtv\.com\/v10\/video\/info\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
^https:\/\/mobile-thor\.api\.mgtv\.com\/v1\/vod\/info\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 搜索框填充词
^http:\/\/mobileso\.bz\.mgtv\.com\/spotlight\/search\/v1\? url reject-dict
^https?:\/\/mobileso\.bz\.mgtv\.com\/mobile\/recommend\/v2\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js

# 腾讯视频 //vv.video.qq.com
^http:\/\/[\d\.:]*\/?(defaultts\.tc|vmind\.qqvideo\.tc|finderpdd\.video)\.qq\.com\/\w+ url reject
^http:\/\/apd-vlive\.apdcdn\.tc\.qq\.com\/vmind\.qqvideo\.tc\.qq\.com\/\w+ url reject
^http:\/\/apd-\w+\.v\.smtcdns\.com\/(defaultts|omts|vmind\.qqvideo)\.tc\.qq\.com\/\w+ url reject
^https?:\/\/vv\.video\.qq\.com\/(diff|get)vmind url reject-dict
^https?:\/\/vv\.video\.qq\.com\/getvinfo url request-body &sppreviewtype=\d(.*)&spsrt=\d request-body &sppreviewtype=0$1&spsrt=0

# 优酷 //acs.youku.com, push.m.youku.com, un-acs.youku.com
# 播放详情页,首页信息流,顶部tab,我的页面,评论区
^https:\/\/acs\.youku\.com\/gw\/mtop\.youku\.columbus\.(gateway\.new\.execute|home\.feed|home\.query|uc\.query|ycp\.query) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 底部tab
^https:\/\/acs\.youku\.com\/gw\/mtop\.youku\.haidai\.lantern\.appconfig\.get url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 青少年模式弹窗
^https:\/\/acs\.youku\.com\/gw\/mtop\.youku\.huluwa\.dispatcher\.youthmode\.config2 url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 播放页弹窗动图
^https:\/\/acs\.youku\.com\/gw\/mtop\.youku\.(pisp\.scripts\.get|xspace\.play\.position\.preload\.query|xspace\.poplayer\.position\.query) url reject-dict
# 搜索列表
^https:\/\/acs\.youku\.com\/gw\/mtop\.youku\.soku\.yksearch url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 热剧弹窗
^https:\/\/push\.m\.youku\.com\/collect-api\/get_push_interval_config_wx\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 开屏广告
^https:\/\/un-acs\.youku\.com\/gw\/mtop\.youku\.play\.ups\.appinfo\.get url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js

hostname = -i.vip.iqiyi.com, *.iqiyi.com, *.mgtv.com, vv.video.qq.com, acs.youku.com, push.m.youku.com, un-acs.youku.com
