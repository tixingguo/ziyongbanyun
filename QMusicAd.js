#

#已添加脚本：哔哩哔哩，喜马拉雅，樊登读书....后续长期更新
#作者忠告：以上脚本仅提供娱乐内部学习测试，建议支持正版！脚本全部由本人制作,请勿倒卖,搬砖
#脚本库：此库仅提供体验，后续随缘更新
#脚本作者：伟人 
#更新时间：2022-11-22
#联系作者: QQ+55749353
#问题反馈：QQ+55749353
#QQ会员群：209169784(需要先添加q55749353)
#TG频道群：t.me/WeiRenQAQ
#使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


hostname = *keep*,*kuwo*,*xima*,*.biliapi.*,*.bilibili.*,*dushu*,*153*,*music*

#喜马拉雅
^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+))mobile-play.+$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/xmly.js
^http[s]?:\/\/.+ximalaya.+(product/info|/mobile-user/v2/homePage|/vip/v1/recommand/ts|mobile-playpage/playpage/tabs|/mobile-album/album/page/ts|mobile/v1/album/track/ts|product/promotion/v./whole/album/\d+/price/dynamic/ts|business-vip-presale-mobile-web/page/ts).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/ximalaya.js
#哔哩哔哩
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/blbl.js
^http[s]?:\/\/.+bilibili.+((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/BLBLHD.js
#樊登读书
^http[s]?:\/\/.+dushu.+(v101/content|book/v100/info|/play/duration|/v100/index).*$ url request-body "token":"[^"]+ request-body "token":"20221117rUwJa1id5I0oUDDYTJk
^http[s]?:\/\/.+dushu.+(v101|v100|program/v100)\/(content|play/duration|index|list|userInfo|vipInfo|info|ceiltip|mainList|getMarketInfoByType) url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/FD.js
#网易云解锁VIP直接听
^http[s]?:\/\/.+(player/url|playlist|entrance|/eapi/search/).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/wyun.js
#酷我音乐
^http[s]?:\/\/.*kuwo.*(/vip/enc/user/vip|/a.p|/vip/v2/user/vip|/vip/v2/sysinfo|/vip/v2/theme|AdService/kaiping/|/music.pay|player/getStyleListByModel).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/kw.js
#keep
^http[s]?:\/\/.+keep.+(athena/v7/people/my|/ad/preload|details|preview|/start|liveStream/schedule|course/v3/plans|/home/prime/page).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/keep.js 
