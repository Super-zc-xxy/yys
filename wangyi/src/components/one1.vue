<template>
  <div class="one1">
    <div class="one1-title"></div>
    <div class="one1-ul">
      <ul>
        <li @click="zx">最新</li>
        <li @click="news">新闻</li>
        <li @click="gonggao">公告</li>
        <li @click="huodong">活动</li>
        <li @click="meiti">媒体</li>
        <li @click="gonglue">攻略</li>
        <li @click="zlp">资料片</li>
      </ul>
    </div>
    <div class="one1-main">
      <!-- 这是最新 -->
      <div class="main-zx">
        <ul>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>04-14 阴阳师全新动画剧场「天域篇·上篇」完整版奉上！</h2>
                <p>
                  愿成世间，所有之善。愿承世间，所有之恶。「我将在这王座上等待，那厮杀至战争尽头的英雄归来。」【全新SSR阶式神帝释天降临】全新……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>04-14 阴阳师×罗森联动火热进行中</h2>
                <p>
                  雪绘樱华，春日之旅已经启程。3月29日-4月25日，蝉冰雪女会在罗森静候各位大人的到来，在温暖的春日里，来一次美妙的邂逅吧！来……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>公告</p></div>
              <div class="zx-main-right">
                <h2>04-13 《阴阳师》手游4月14日维护更新公告</h2>
                <p>
                  亲爱的阴阳师大人：为了给大家带来更好的游戏体验，服务器将于4月14日(周三)早上7:30-9:00进行停服维护，如未能按时完成，则开服时间将会顺延。具体更新详情请留意稍后更新公告，或维护结束后至游戏登录界面查看。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>公告</p></div>
              <div class="zx-main-right">
                <h2>04-12 第十八次特邀测试开启公告</h2>
                <p>
                  感谢大人们的热情参与！截至报名时间结束，总计共有574451名大人们成功报名。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>活动</p></div>
              <div class="zx-main-right">
                <h2>04-10 《阴阳师》红莲华冕版本即将开启</h2>
                <p>新章剧情主题站解锁中</p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>
                  04-09 守护的契约！《阴阳师》流浪小动物主题召唤活动开启！
                </h2>
                <p>
                  最近庭院来了很多流浪小动物，身为掌管缘分的神明，缘结神可见不得大家因为丢失缘分而受苦。“寻找良缘的事情，就交给本神明吧！【守护……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>公告</p></div>
              <div class="zx-main-right">
                <h2>04-06 《阴阳师》手游4月7日维护更新公告</h2>
                <p>
                  亲爱的阴阳师大人：为了给大家带来更好的游戏体验，服务器将于4月7日(周三)早上7:30-9:00进行停服维护，如未能按时完成，则开服时间将会顺延。具体更新详情请留意稍后更新公告，或维护结束后至游戏登录界面查看。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>
                  03-31 守护的契约！阴阳师2021汪喵云助养小动物公益活动开启~
                </h2>
                <p>03-31 守护的契约！阴阳师2021汪喵云助养小动物公益活动开启~</p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>公告</p></div>
              <div class="zx-main-right">
                <h2>03-30 《阴阳师》手游3月31日维护更新公告</h2>
                <p>
                  亲爱的阴阳师大人：为了给大家带来更好的游戏体验，服务器将于3月31日(周三)早上7:30-9:00进行停服维护，如未能按时完成，则开服时间将会顺延。具体更新详情请留意稍后更新公告，或维护结束后至游戏登录界面查看。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>03-25 阴阳师×广州融创文旅城跨界合作现已开启！</h2>
                <p>
                  四季伊始，暖雪融冬。循着春日里最后一场雪的足迹，蝉冰雪女降临现世，《阴阳师》×广州融创文旅城跨界合作现已开启！活动时间：3月1……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>公告</p></div>
              <div class="zx-main-right">
                <h2>03-23 《阴阳师》手游3月24日维护更新公告</h2>
                <p>
                  亲爱的阴阳师大人：为了给大家带来更好的游戏体验，服务器将于3月24日(周三)早上7:30-9:00进行停服维护，如未能按时完成，则开服时间将会顺延。具体更新详情请留意稍后更新公告，或维护结束后至游戏登录界面查看。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>03-23 樱绘春日，阴阳师×罗森联动活动即将开启</h2>
                <p>
                  早春樱绽，现世妖约，阴阳师×罗森联动活动即将开启！相约罗森主题门店，击败LBS鬼王，将有机会获得诸多奖励~【活动时间】3月24……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>03-19 云端畅游《阴阳师》 体验网易云游戏领专属福利</h2>
                <p>
                  网易云游戏来派福利啦！随着3月17日《阴阳师》新版本春告之雪的开启，网易云游戏为大家带来了一份独特的福利礼包。关注网易云游戏公……
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 这是新闻 -->
      <div class="main-news">
        <ul>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>04-14 阴阳师全新动画剧场「天域篇·上篇」完整版奉上！</h2>
                <p>
                  愿成世间，所有之善。愿承世间，所有之恶。「我将在这王座上等待，那厮杀至战争尽头的英雄归来。」【全新SSR阶式神帝释天降临】全新……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>04-14 阴阳师×罗森联动火热进行中</h2>
                <p>
                  雪绘樱华，春日之旅已经启程。3月29日-4月25日，蝉冰雪女会在罗森静候各位大人的到来，在温暖的春日里，来一次美妙的邂逅吧！来……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>
                  04-09 守护的契约！《阴阳师》流浪小动物主题召唤活动开启！
                </h2>
                <p>
                  最近庭院来了很多流浪小动物，身为掌管缘分的神明，缘结神可见不得大家因为丢失缘分而受苦。“寻找良缘的事情，就交给本神明吧！【守护……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>
                  03-31 守护的契约！阴阳师2021汪喵云助养小动物公益活动开启~
                </h2>
                <p>
                  流浪于街头忍饥挨饿的小动物们，挣扎生活的每一天都艰难无比。寻一隅安居的屋檐，让它们有安心的栖息之所，为守护这些弱小的生命奉上一……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>03-25 阴阳师×广州融创文旅城跨界合作现已开启！</h2>
                <p>
                  四季伊始，暖雪融冬。循着春日里最后一场雪的足迹，蝉冰雪女降临现世，《阴阳师》×广州融创文旅城跨界合作现已开启！活动时间：3月1……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>03-23 樱绘春日，阴阳师×罗森联动活动即将开启</h2>
                <p>
                  早春樱绽，现世妖约，阴阳师×罗森联动活动即将开启！相约罗森主题门店，击败LBS鬼王，将有机会获得诸多奖励~【活动时间】3月24……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>03-19 云端畅游《阴阳师》 体验网易云游戏领专属福利</h2>
                <p>
                  网易云游戏来派福利啦！随着3月17日《阴阳师》新版本春告之雪的开启，网易云游戏为大家带来了一份独特的福利礼包。关注网易云游戏公……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>03-18 开服公告丨粉樱如幕，春雪之邀</h2>
                <p>
                  春意朦胧，积雪融化，山麓争相妆点冬末的绘卷。樱飘之处，万物复苏。蝉冰雪女在樱色的山巅，俯瞰着全新的世界。全平台新区【春告之雪】……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>03-10 融雪告春《阴阳师》全新SP阶式神蝉冰雪女降临！</h2>
                <p>
                  薄如蝉翼的冰壳纯净无杂质，折射出璀璨虹光。守护着永生花的蝉冰雪女，在漫天的冰雪间，与白发胜雪的少年相遇。少年话语中所描绘的山下……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>02-23 净羽流光 琉璃蚀心 《阴阳师》鸩新皮肤上线！</h2>
                <p>
                  丛林间闪过一抹鲜艳的色彩，偷猎者贪婪的神情，在与“猎物”相见时凝固。看似纯净无害的白羽之下，究竟暗藏怎样的杀机？【鸩新皮肤
                  瑠……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>02-07 花灯迷眼 以鲤寄情 《阴阳师》座敷童子新皮肤上线！</h2>
                <p>
                  新春将至，街道上处处张灯结彩。换上新浴衣的可爱女孩，轻快地走在前往灯会的路上。彩灯明暗闪烁，光晕绵延至星空。【座敷童子新皮肤……
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 这是公告 -->
      <div class="main-gonggao">
        <ul>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>公告</p></div>
              <div class="zx-main-right">
                <h2>04-13 《阴阳师》手游4月14日维护更新公告</h2>
                <p>
                  亲爱的阴阳师大人：为了给大家带来更好的游戏体验，服务器将于4月14日(周三)早上7:30-9:00进行停服维护，如未能按时完成，则开服时间将会顺延。具体更新详情请留意稍后更新公告，或维护结束后至游戏登录界面查看。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>公告</p></div>
              <div class="zx-main-right">
                <h2>04-12 第十八次特邀测试开启公告</h2>
                <p>
                  感谢大人们的热情参与！截至报名时间结束，总计共有574451名大人们成功报名。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>公告</p></div>
              <div class="zx-main-right">
                <h2>03-30 《阴阳师》手游3月31日维护更新公告</h2>
                <p>
                  亲爱的阴阳师大人：为了给大家带来更好的游戏体验，服务器将于3月31日(周三)早上7:30-9:00进行停服维护，如未能按时完成，则开服时间将会顺延。具体更新详情请留意稍后更新公告，或维护结束后至游戏登录界面查看。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>公告</p></div>
              <div class="zx-main-right">
                <h2>03-16 《阴阳师》手游3月17日维护更新公告</h2>
                <p>
                  亲爱的阴阳师大人：为了给大家带来更好的游戏体验，服务器将于3月17日(周三)早上7:30-9:00进行停服维护，如未能按时完成，则开服时间将会顺延。具体更新详情请留意稍后更新公告，或维护结束后至游戏登录界面查看。。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>公告</p></div>
              <div class="zx-main-right">
                <h2>03-09 《阴阳师》手游3月10日维护更新公告</h2>
                <p>
                  亲爱的阴阳师大人：为了给大家带来更好的游戏体验，服务器将于3月10日(周三)早上7:30-9:00进行停服维护，如未能按时完成，则开服时间将会顺延。具体更新详情请留意稍后更新公告，或维护结束后至游戏登录界面查看。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>公告</p></div>
              <div class="zx-main-right">
                <h2>03-08 第十七次特邀测试开启公告</h2>
                <p>
                  感谢大人们的热情参与！截至报名时间结束，总计共有574451名大人们成功报名。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>公告</p></div>
              <div class="zx-main-right">
                <h2>03-02 《阴阳师》手游3月3日维护更新公告</h2>
                <p>
                  亲爱的阴阳师大人：为了给大家带来更好的游戏体验，服务器将于3月3日（周三）早上7:30-9:00进行停服维护，如未能按时完成，则开服时间将会顺延。具体更新详情请留意稍后更新公告，或维护结束后至游戏登录界面查看。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>公告</p></div>
              <div class="zx-main-right">
                <h2>02-23 《阴阳师》手游2月24日维护更新公告</h2>
                <p>
                  亲爱的阴阳师大人：为了给大家带来更好的游戏体验，服务器将于2月24日（周三）早上7:30-9:00进行停服维护，如未能按时完成，则开服时间将会顺延。具体更新详情请留意稍后更新公告，或维护结束后至游戏登录界面查看。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>公告</p></div>
              <div class="zx-main-right">
                <h2>02-06 《阴阳师》手游2月7日维护更新公告</h2>
                <p>
                  亲爱的阴阳师大人：为了给大家带来更好的游戏体验，服务器将于2月7日(周日)早上7:00-9:00进行停服维护，如未能按时完成，则开服时间将会顺延。具体更新详情请留意稍后更新公告，或维护结束后至游戏登录界面查看。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>公告</p></div>
              <div class="zx-main-right">
                <h2>02-03 第十六次特邀测试开启公告（新增名单）</h2>
                <p>
                  寮办收到反馈，仍有许多阴阳师大人们希望参与特邀测试体验！现从报名的阴阳师大人中再次筛选部分阴阳师大人参与特邀实测。
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 这是活动 -->
      <div class="main-huodong">
        <ul>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>活动</p></div>
              <div class="zx-main-right">
                <h2>04-10 《阴阳师》红莲华冕版本即将开启</h2>
                <p>新章剧情主题站解锁中</p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>活动</p></div>
              <div class="zx-main-right">
                <h2>12-30 梦醒彼岸，唤醒彼岸之花</h2>
                <p>
                  网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>活动</p></div>
              <div class="zx-main-right">
                <h2>11-25 林间奔跑 寻伴同行</h2>
                <p>
                  网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>活动</p></div>
              <div class="zx-main-right">
                <h2>09-29 绮梦之旅，好味相聚 | KFC联动来袭！</h2>
                <p>
                  网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>活动</p></div>
              <div class="zx-main-right">
                <h2>
                  09-28 式神助力，为EYE发电 | 阴阳师x4iNLOOK联名新品来袭～
                </h2>
                <p>
                  网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>活动</p></div>
              <div class="zx-main-right">
                <h2>09-23 《阴阳师》四周年时光机</h2>
                <p>
                  网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>活动</p></div>
              <div class="zx-main-right">
                <h2>09-16 出发啦，共赴阴阳师四周年庆</h2>
                <p>
                  网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>活动</p></div>
              <div class="zx-main-right">
                <h2>09-15 平安庆生绘 共绘庆生蛋糕</h2>
                <p>
                  网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>活动</p></div>
              <div class="zx-main-right">
                <h2>08-17 崽崽商业街</h2>
                <p>
                  网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>活动</p></div>
              <div class="zx-main-right">
                <h2>08-12 为崽而战 炎夏之舞 应援版开启</h2>
                <p>我的海国战纪</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 这是媒体 -->
      <div class="main-meiti">
        <ul>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>媒体</p></div>
              <div class="zx-main-right">
                <h2>
                  05-24 【ACGx】从现象手游到超级IP，《阴阳师》的泛娱乐创新进化论
                </h2>
                <p>
                  2016年9月，《阴阳师》以“最精良的二次元游戏“之姿态横空出世，不到一个月便刷爆了社交网络、登顶各大榜单;2017年，丁磊曾表态：“要让《阴阳师》经营十年、二十年”;随后，“未来计划”发布，展示了一系列泛娱乐衍生内容的规划;今年春天，《阴阳师》的官方漫画、音乐剧、泡面番陆续面世，在游戏玩家、二次元粉丝及更广泛的用户圈层中均获得了极佳的口碑。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>媒体</p></div>
              <div class="zx-main-right">
                <h2>06-27 【爱玩网】阴阳师从入门到精通 看完这本杂志就够了</h2>
                <p>
                  在国产游戏的历史中，《阴阳师》的名字可以说是留下了重重一笔。这款中国制造的和风手游不仅风靡中国全土，甚至还反攻“日本”，让海外玩家对中国游戏业刮目相看。。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>媒体</p></div>
              <div class="zx-main-right">
                <h2>
                  05-23 【18183】专访网易游戏贾海漠：让阴阳师文化渗透到大众生活
                </h2>
                <p>
                  一年一度由网易游戏主办的“520游戏热爱日”又与玩家们见面了，本次520游戏日的活动主题是“热爱真有回响”。超过三十款游戏集中发布，其中不乏从未曝光过的全新游戏或悬念重重的神秘新游。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>媒体</p></div>
              <div class="zx-main-right">
                <h2>01-20 AppSo2016 《阴阳师》登年度榜单</h2>
                <p>
                  对！今天我要光明正大发广告，因为今天安利的公众号真的超赞超有用，你follow了肯定不会取关。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>媒体</p></div>
              <div class="zx-main-right">
                <h2>01-17 【17173】我的领导是个极品 他为抽SSR去了晴明神社</h2>
                <p>
                  我下定决心要扒一扒我的领导——他就是个极品非酋。0.jpg作为非洲大酋长的代表，自从他玩起了《阴阳师》，在连续抽不到SSR之后，他陷入玄学不可自拔。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>媒体</p></div>
              <div class="zx-main-right">
                <h2>
                  01-01 【17173】没想到你是这样的姑获鸟 一个SR为何有SSR的实力？
                </h2>
                <p>今天要哔哔的是我和我小伙伴都在玩的阴！阳！</p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>媒体</p></div>
              <div class="zx-main-right">
                <h2>12-30 【18183】阴阳师协同斗技登顶阵容:无拉条无控制</h2>
                <p>
                  阴阳师协同斗技的纯后手无拉条无控制阵容登顶了，下面来看看这套带了青行灯的全新阵容搭配怎么样，分享下阵容解析和角色定位攻略。协同斗技和单人斗技最大的区别是一个是AI电脑自动操控，一个是手动操作。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>媒体</p></div>
              <div class="zx-main-right">
                <h2>
                  12-29 【爱玩】像我这么能打的只有两个！阴阳师那些沉迷输出的治疗
                </h2>
                <p>
                  众所周知，大部分的游戏都有着职业之分，治疗职业就应该好好的当个奶妈，坦克职业就应该好好的顶在队伍的前方吸收伤害，输出职业就老老实实的打伤害。而在阴阳师中，大部分的式神也有着类似的定位，在战斗中各尽其责从而完善整个阵容，不过也总有那么个别的式神不按套路出牌，接下来小编就为大家介绍一下阴阳师中仅有的两位进可吊打大蛇，退可救活全队的“输出型”治疗式神。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>媒体</p></div>
              <div class="zx-main-right">
                <h2>12-28 【爱玩】非酋福利！阴阳师神龛商店玩法来袭！</h2>
                <p>
                  玩过阴阳师的玩家似乎都有这么一种烦恼，那就是召唤的式神召唤不到，不想召唤的式神总是接二连三的到来，久而久之，仓库里塞满了一堆重复的SR和R式神，SSR式神却迟迟不见踪影。虽说稀有度并不能代表式神的强度，但是拥有SSR才是欧气的象征，正所谓不争馒头争口气，又有谁甘心做一名非酋呢？
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>媒体</p></div>
              <div class="zx-main-right">
                <h2>
                  12-27 【口袋巴士】最强攻击驱散式神樱花妖 高颜值的辅助式神
                </h2>
                <p>
                  在阴阳师中，桃花妖的好百合樱花妖是游戏中比较具有特色的一个SR式神，由于目前樱花妖已经失去了正常获取的路径，可能得到神龛系统上线以后才能再次有机会获取了。那么樱花妖的表现如何呢?
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 这是攻略 -->
      <div class="main-gonglue">
        <ul>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>04-14 阴阳师全新动画剧场「天域篇·上篇」完整版奉上！</h2>
                <p>
                  愿成世间，所有之善。愿承世间，所有之恶。「我将在这王座上等待，那厮杀至战争尽头的英雄归来。」【全新SSR阶式神帝释天降临】全新……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>04-14 阴阳师×罗森联动火热进行中</h2>
                <p>
                  雪绘樱华，春日之旅已经启程。3月29日-4月25日，蝉冰雪女会在罗森静候各位大人的到来，在温暖的春日里，来一次美妙的邂逅吧！来……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>
                  04-09 守护的契约！《阴阳师》流浪小动物主题召唤活动开启！
                </h2>
                <p>
                  最近庭院来了很多流浪小动物，身为掌管缘分的神明，缘结神可见不得大家因为丢失缘分而受苦。“寻找良缘的事情，就交给本神明吧！【守护……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>
                  03-31 守护的契约！阴阳师2021汪喵云助养小动物公益活动开启~
                </h2>
                <p>
                  流浪于街头忍饥挨饿的小动物们，挣扎生活的每一天都艰难无比。寻一隅安居的屋檐，让它们有安心的栖息之所，为守护这些弱小的生命奉上一……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>03-25 阴阳师×广州融创文旅城跨界合作现已开启！</h2>
                <p>
                  四季伊始，暖雪融冬。循着春日里最后一场雪的足迹，蝉冰雪女降临现世，《阴阳师》×广州融创文旅城跨界合作现已开启！活动时间：3月1……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>03-23 樱绘春日，阴阳师×罗森联动活动即将开启</h2>
                <p>
                  早春樱绽，现世妖约，阴阳师×罗森联动活动即将开启！相约罗森主题门店，击败LBS鬼王，将有机会获得诸多奖励~【活动时间】3月24……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>03-19 云端畅游《阴阳师》 体验网易云游戏领专属福利</h2>
                <p>
                  网易云游戏来派福利啦！随着3月17日《阴阳师》新版本春告之雪的开启，网易云游戏为大家带来了一份独特的福利礼包。关注网易云游戏公……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>03-18 开服公告丨粉樱如幕，春雪之邀</h2>
                <p>
                  春意朦胧，积雪融化，山麓争相妆点冬末的绘卷。樱飘之处，万物复苏。蝉冰雪女在樱色的山巅，俯瞰着全新的世界。全平台新区【春告之雪】……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>03-10 融雪告春《阴阳师》全新SP阶式神蝉冰雪女降临！</h2>
                <p>
                  薄如蝉翼的冰壳纯净无杂质，折射出璀璨虹光。守护着永生花的蝉冰雪女，在漫天的冰雪间，与白发胜雪的少年相遇。少年话语中所描绘的山下……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>02-23 净羽流光 琉璃蚀心 《阴阳师》鸩新皮肤上线！</h2>
                <p>
                  丛林间闪过一抹鲜艳的色彩，偷猎者贪婪的神情，在与“猎物”相见时凝固。看似纯净无害的白羽之下，究竟暗藏怎样的杀机？【鸩新皮肤
                  瑠……
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>新闻</p></div>
              <div class="zx-main-right">
                <h2>02-07 花灯迷眼 以鲤寄情 《阴阳师》座敷童子新皮肤上线！</h2>
                <p>
                  新春将至，街道上处处张灯结彩。换上新浴衣的可爱女孩，轻快地走在前往灯会的路上。彩灯明暗闪烁，光晕绵延至星空。【座敷童子新皮肤……
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 这是资料片 -->
      <div class="main-zlp">
        <ul>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>资料片</p></div>
              <div class="zx-main-right">
                <h2>2017-09-26 忆往昔，与君共，SSR枫色秋庭签到就送！</h2>
                <p>
                  闲暇秋日，手机叮咚一声脆响，熟悉的扫地工准时上线！漫不经心一瞥标题，啥啥啥？
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>资料片</p></div>
              <div class="zx-main-right">
                <h2>2017-09-24 SSR重临神龛 珍稀道具大放送！</h2>
                <p>
                  与平安世界朝夕相伴，已整整一年，为了花式庆生，最近的平安京热闹非凡~，扫地工从寮办打听到了最新消息一大波奖励即将来袭！SSR重临神龛，珍稀道具再次放送你想要的都在这！
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>资料片</p></div>
              <div class="zx-main-right">
                <h2>2017-09-20 花影阑珊引魂归 《阴阳师》阎魔新皮肤情报</h2>
                <p>
                  在平安世界都忙着张罗一周年庆典之际，隐藏在结界深处的阎罗殿也开始变得热闹，坐镇冥府的阎魔大人更是特地换上一身新装，瞬间让整个宫殿都明亮了起来。接下来，就一起欣赏一下阎魔的新皮肤吧。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>资料片</p></div>
              <div class="zx-main-right">
                <h2>2017-09-14 集结召唤！《阴阳师》逢魔之时稀有BOSS胧车上线</h2>
                <p>
                  近日空气躁动不安，结界波荡异常，平常静谧而美丽的京都夜晚却响起了奇怪的蛙类鸣叫，与此同时一片阴影正掠过月色靠近了京都上空……《阴阳师》逢魔之时大型集结BOSS胧车即将来袭，亟请各位阴阳师大人做好应战的准备！
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>资料片</p></div>
              <div class="zx-main-right">
                <h2>
                  2017-07-28 京都盛景共赴 《阴阳师》“夏日花火会”全新资料片启幕
                </h2>
                <p>
                  7月28日，《阴阳师》“夏日花火会”正式上线!四主角夏日浴衣装扮、白发式神小哥哥登场、充满夏日气息的夏庭院和新皮肤、新BOSS挑战、金御札随机SSR兑换，还有令人期待的夏日花火之约游园盛会......绚烂的夜空花火，喧嚣的市集摊位，百魅齐聚一堂。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>资料片</p></div>
              <div class="zx-main-right">
                <h2>
                  2017-07-20 夏夜幽庭 花火共赏
                  《阴阳师》“夏日花火会”新资料片情报
                </h2>
                <p>
                  仲夏之夜，花火盛会，是平安京居民最期待的京都盛典，百鬼式神纷纷打点动身，共赴繁华夏日祭。《阴阳师》全新资料片“夏日花火会”将于7月28日更新维护后上线，情报新鲜来袭!
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>资料片</p></div>
              <div class="zx-main-right">
                <h2>2017-06-15 阴阳交错 《阴阳师》逢魔之时宣传片奇幻上线</h2>
                <p>
                  阴阳交错，逢魔之时,《阴阳师》自推出逢魔之时玩法，每天黄昏时刻，游戏中的百鬼式神便会降临现世。平安世界与现实世界通过逢魔之时联结，为玩家带来奇幻的游戏体验。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>资料片</p></div>
              <div class="zx-main-right">
                <h2>2017-09-26 忆往昔，与君共，SSR枫色秋庭签到就送！</h2>
                <p>
                  闲暇秋日，手机叮咚一声脆响，熟悉的扫地工准时上线！漫不经心一瞥标题，啥啥啥？
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>资料片</p></div>
              <div class="zx-main-right">
                <h2>
                  2017-05-19 现世探索 逢魔寻妖 《阴阳师》“现世集结之章”20日上线
                </h2>
                <p>
                  黄昏是黑夜与白昼交替的时刻，也是阴阳两界交错的时刻。在这段时间内，鬼神能够逃窜至现世人类也可能被卷入阴界，因此黄昏时段被称为“逢魔之时”。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="zx-main">
              <div class="zx-main-left"><p>资料片</p></div>
              <div class="zx-main-right">
                <h2>2017-01-19 烟月春和情报大公开！教你解锁新版本的正确姿势</h2>
                <p>
                  体验！现世召唤寮办全新开启AR召唤系统【现世召唤】实景展示让式神们出现在大家的桌面指尖！
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {};
  },
  methods: {
    zx() {
      $(".one1-ul>ul>li")
        .eq(0)
        .css({ "border-bottom": "2px solid rgb(244,161,194)" });
      $(".one1-ul>ul>li").eq(1).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(2).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(3).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(4).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(5).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(6).css({ "border-bottom": "none" });
      $(".main-zx").css({ display: "block" });
      $(".main-news").css({ display: "none" });
      $(".main-gonggao").css({ display: "none" });
      $(".main-huodong").css({ display: "none" });
      $(".main-meiti").css({ display: "none" });
      $(".main-gonglue").css({ display: "none" });
      $(".main-zlp").css({ display: "none" });
    },
    news() {
      $(".one1-ul>ul>li")
        .eq(1)
        .css({ "border-bottom": "2px solid rgb(244,161,194)" });
      $(".one1-ul>ul>li").eq(0).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(2).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(3).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(4).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(5).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(6).css({ "border-bottom": "none" });
      $(".main-zx").css({ display: "none" });
      $(".main-news").css({ display: "block" });
      $(".main-gonggao").css({ display: "none" });
      $(".main-huodong").css({ display: "none" });
      $(".main-meiti").css({ display: "none" });
      $(".main-gonglue").css({ display: "none" });
      $(".main-zlp").css({ display: "none" });
    },
    gonggao() {
      $(".one1-ul>ul>li")
        .eq(2)
        .css({ "border-bottom": "2px solid rgb(244,161,194)" });
      $(".one1-ul>ul>li").eq(1).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(0).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(3).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(4).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(5).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(6).css({ "border-bottom": "none" });
      $(".main-zx").css({ display: "none" });
      $(".main-news").css({ display: "none" });
      $(".main-gonggao").css({ display: "block" });
      $(".main-huodong").css({ display: "none" });
      $(".main-meiti").css({ display: "none" });
      $(".main-gonglue").css({ display: "none" });
      $(".main-zlp").css({ display: "none" });
    },
    huodong() {
      $(".one1-ul>ul>li")
        .eq(3)
        .css({ "border-bottom": "2px solid rgb(244,161,194)" });
      $(".one1-ul>ul>li").eq(1).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(2).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(0).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(4).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(5).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(6).css({ "border-bottom": "none" });
      $(".main-zx").css({ display: "none" });
      $(".main-news").css({ display: "none" });
      $(".main-gonggao").css({ display: "none" });
      $(".main-huodong").css({ display: "block" });
      $(".main-meiti").css({ display: "none" });
      $(".main-gonglue").css({ display: "none" });
      $(".main-zlp").css({ display: "none" });
    },
    meiti() {
      $(".one1-ul>ul>li")
        .eq(4)
        .css({ "border-bottom": "2px solid rgb(244,161,194)" });
      $(".one1-ul>ul>li").eq(1).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(2).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(3).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(0).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(5).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(6).css({ "border-bottom": "none" });
      $(".main-zx").css({ display: "none" });
      $(".main-news").css({ display: "none" });
      $(".main-gonggao").css({ display: "none" });
      $(".main-huodong").css({ display: "none" });
      $(".main-meiti").css({ display: "block" });
      $(".main-gonglue").css({ display: "none" });
      $(".main-zlp").css({ display: "none" });
    },
    gonglue() {
      $(".one1-ul>ul>li")
        .eq(5)
        .css({ "border-bottom": "2px solid rgb(244,161,194)" });
      $(".one1-ul>ul>li").eq(1).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(2).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(3).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(4).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(0).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(6).css({ "border-bottom": "none" });
      $(".main-zx").css({ display: "none" });
      $(".main-news").css({ display: "none" });
      $(".main-gonggao").css({ display: "none" });
      $(".main-huodong").css({ display: "none" });
      $(".main-meiti").css({ display: "none" });
      $(".main-gonglue").css({ display: "block" });
      $(".main-zlp").css({ display: "none" });
    },
    zlp() {
      $(".one1-ul>ul>li")
        .eq(6)
        .css({ "border-bottom": "2px solid rgb(244,161,194)" });
      $(".one1-ul>ul>li").eq(1).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(2).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(3).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(4).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(5).css({ "border-bottom": "none" });
      $(".one1-ul>ul>li").eq(0).css({ "border-bottom": "none" });
      $(".main-zx").css({ display: "none" });
      $(".main-news").css({ display: "none" });
      $(".main-gonggao").css({ display: "none" });
      $(".main-huodong").css({ display: "none" });
      $(".main-meiti").css({ display: "none" });
      $(".main-gonglue").css({ display: "none" });
      $(".main-zlp").css({ display: "block" });
    },
  },
  mounted: function () {},
};
</script>

<style scoped>
.main-zlp > ul > li:hover .zx-main-left p {
  background: white;
}
.main-zlp > ul > li:hover {
  background: url("../photo/one1-hover.jpg");
  background-position-x: -100px;
  transition: all 1s;
  background-size: cover;
}
.main-zlp > ul > li {
  height: 165px;
  border-top: 1px solid rgb(226, 226, 226);
  border-bottom: 1px solid rgb(226, 226, 226);
}
.main-zlp {
  width: 100%;
  position: relative;
  display: none;
}
.main-gonglue > ul > li:hover .zx-main-left p {
  background: white;
}
.main-gonglue > ul > li:hover {
  background: url("../photo/one1-hover.jpg");
  background-position-x: -100px;
  transition: all 1s;
  background-size: cover;
}
.main-gonglue > ul > li {
  height: 165px;
  border-top: 1px solid rgb(226, 226, 226);
  border-bottom: 1px solid rgb(226, 226, 226);
}
.main-gonglue {
  width: 100%;
  position: relative;
  display: none;
}
.main-meiti > ul > li:hover .zx-main-left p {
  background: white;
}
.main-meiti > ul > li:hover {
  background: url("../photo/one1-hover.jpg");
  background-position-x: -100px;
  transition: all 1s;
  background-size: cover;
}
.main-meiti > ul > li {
  height: 165px;
  border-top: 1px solid rgb(226, 226, 226);
  border-bottom: 1px solid rgb(226, 226, 226);
}
.main-meiti {
  width: 100%;
  position: relative;
  display: none;
}
.main-huodong > ul > li:hover .zx-main-left p {
  background: white;
}
.main-huodong > ul > li:hover {
  background: url("../photo/one1-hover.jpg");
  background-position-x: -100px;
  transition: all 1s;
  background-size: cover;
}
.main-huodong > ul > li {
  height: 165px;
  border-top: 1px solid rgb(226, 226, 226);
  border-bottom: 1px solid rgb(226, 226, 226);
}
.main-huodong {
  width: 100%;
  position: relative;
  display: none;
}
.main-gonggao > ul > li:hover .zx-main-left p {
  background: white;
}
.main-gonggao > ul > li:hover {
  background: url("../photo/one1-hover.jpg");
  background-position-x: -100px;
  transition: all 1s;
  background-size: cover;
}
.main-gonggao > ul > li {
  height: 165px;
  border-top: 1px solid rgb(226, 226, 226);
  border-bottom: 1px solid rgb(226, 226, 226);
}
.main-gonggao {
  width: 100%;
  position: relative;
  display: none;
}
.main-news > ul > li:hover .zx-main-left p {
  background: white;
}
.main-news > ul > li:hover {
  background: url("../photo/one1-hover.jpg");
  background-position-x: -100px;
  transition: all 1s;
  background-size: cover;
}
.main-news > ul > li {
  height: 165px;
  border-top: 1px solid rgb(226, 226, 226);
  border-bottom: 1px solid rgb(226, 226, 226);
}
.main-news {
  width: 100%;
  position: relative;
  display: none;
}
.zx-main-right p {
  padding: 0 20px;
  font-size: 14px;
  color: #999;
}
.zx-main-right h2 {
  padding: 20px;
  font-weight: normal;
}
.zx-main-left p {
  background: rgb(229, 242, 233);
  width: 80px;
  height: 50px;
  line-height: 50px;
  border-radius: 20px;
  font-size: 20px;
  text-align: center;
  margin-left: 210px;
  margin-top: 30px;
}
.zx-main-left {
  width: 30%;
  height: 165px;
  display: flex;
}
.zx-main-right {
  width: 70%;
  height: 165px;
}
.zx-main {
  display: flex;
}
.main-zx > ul > li:hover .zx-main-left p {
  background: white;
}
.main-zx > ul > li:hover {
  background: url("../photo/one1-hover.jpg");
  background-position-x: -100px;
  transition: all 1s;
  background-size: cover;
}
.main-zx > ul > li {
  height: 165px;
  border-top: 1px solid rgb(226, 226, 226);
  border-bottom: 1px solid rgb(226, 226, 226);
}
.main-zx {
  width: 100%;
  position: relative;
}
.one1-main {
  border-top: 1px solid rgb(226, 226, 226);
  width: 100%;
  position: relative;
}
.one1-ul > ul > li:hover {
  border-bottom: 2px solid rgb(244, 161, 194);
}
.one1-ul > ul > li:nth-of-type(1) {
  border-bottom: 2px solid rgb(244, 161, 194);
}
.one1-ul > ul > li {
  padding: 10px 0;
}
.one1-ul > ul {
  display: flex;
  justify-content: space-around;
}
.one1-ul {
  width: 800px;
  margin: 0 auto;
}
.one1-title {
  width: 600px;
  height: 50px;
  background: url("../photo/one-news-logo.png") no-repeat;
  margin: 20px auto;
}
.one1 {
  width: 1200px;
  margin: 50px auto;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>