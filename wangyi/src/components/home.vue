<template>
  <div class="home">
    <!-- 这是导航栏 -->
    <div class="home-nav">
      <ul>
        <li>
          <p>官网首页</p>
        </li>
        <span>|</span>
        <li class="news">
          <p>新闻资讯</p>
          <!-- 这是导航hover效果 -->
          <div class="home-nav-select">
            <div class="nav-news">
              <ul>
                <li>
                  <div class="one" @click="one">
                    <p>守护的契约！阴阳师2021汪喵云助养小动物公益活动开启~</p>
                  </div>
                </li>
                <li>
                  <div class="two" @click="two">
                    <p>《阴阳师》手游3月31日维护更新公告</p>
                  </div>
                </li>
                <li>
                  <div class="three" @click="three">
                    <p>阴阳师×广州融创文旅城跨界合作现已开启！</p>
                  </div>
                </li>
                <li>
                  <div class="four" @click="four">
                    <p>《阴阳师》手游3月24日维护更新公告</p>
                  </div>
                </li>
                <li>
                  <div class="five" @click="five">
                    <p>樱绘春日，阴阳师×罗森联动活动即将开启</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <span>|</span>
        <li class="shishen">
          <p>式神录</p>
          <div class="home-nav-select2">
            <div class="nav-shishen">
              <ul>
                <li>
                  <div class="shishen1" @click="liandong"></div>
                </li>
                <li>
                  <div class="shishen2" @click="sp"></div>
                </li>
                <li>
                  <div class="shishen3" @click="ssr"></div>
                </li>
                <li>
                  <div class="shishen4" @click="sr"></div>
                </li>
                <li>
                  <div class="shishen5" @click="r"></div>
                </li>
                <li>
                  <div class="shishen6" @click="n"></div>
                </li>
                <li>
                  <div class="shishen7" @click="gt"></div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <span>|</span>
        <li class="gongnue">
          <p>游戏攻略</p>
          <div class="home-nav-select3">
            <ul class="gongnue-ul">
              <li>
                <div class="gongnue1" @click="mengxin"><p>萌新上路</p></div>
              </li>
              <li>
                <div class="gongnue2" @click="shishenyuhun"><p>式神御魂</p></div>
              </li>
              <li>
                <div class="gongnue3" @click="miwenfuben"><p>秘闻副本</p></div>
              </li>
              <li>
                <div class="gongnue1" @click="douji"><p>斗技阵容</p></div>
              </li>
            </ul>
          </div>
        </li>
        <span>|</span>
        <li class="shequ">
          <p>大社区</p>
          <div class="home-nav-select4">
            <div class="home-nav-main">
              <div class="shequ-left">
                <div class="shequ-left-left"><p>阴阳师同人漫画屋营业中</p></div>
                <div class="shequ-left-right">
                  <p>绮妆魅服.COSPLAY舞台剧大赛</p>
                </div>
                <div class="shequ-left-p">
                  <h3>热门话题</h3>
                  <ul>
                    <li>
                      <p>每日精选<span>|</span></p>
                    </li>
                    <li>
                      <p>同人绘画<span>|</span></p>
                    </li>
                    <li><p>玩家cos</p></li>
                    <li>
                      <p>同人视频<span>|</span></p>
                    </li>
                    <li>
                      <p>同人小说<span>|</span></p>
                    </li>
                    <li><p>高手在民间</p></li>
                  </ul>
                </div>
              </div>
              <div class="shequ-right">
                <h3>热门标签</h3>
                <ul>
                  <li><p>#蝉冰雪女#</p></li>
                  <li><p>#式神故事#</p></li>
                  <li><p>#鬼灭之刃#</p></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <span>|</span>
        <li>
          <p>视听中心</p>
          <div class="home-nav-select5">
            <div class="shiting1" @click="video"><p>视频中心</p></div>
            <div class="shiting2" @click="bizhi"><p>原画壁纸</p></div>
          </div>
        </li>
        <span class="shoping">|</span>
        <li>
          <p @click="shop">个人信息</p>
        </li>
        <img src="../photo/search.png" alt="" />
      </ul>
    </div>
    <!-- 这是主体 -->
    <div class="home-main">
      <div class="yys-logo"></div>
      <div class="home-yy">
        <div class="home-age"></div>
        <div class="home-downgaeme">
          <div class="downgame-main">
            <div class="downgame-main-img">
              <img
                src="../photo/line-erweima.png"
                alt=""
                width="100%"
                height="10px"
              />
            </div>
            <p
              style="
                color: white;
                font-size: 12px;
                padding: 5px;
                background: rgb(63, 149, 106);
                margin: 5px 0;
              "
            >
              <span class="iconfont">&#xe6f9;</span>特约邀请服
            </p>
            <p
              style="
                color: white;
                font-size: 12px;
                padding: 5px;
                background: rgb(63, 149, 106);
              "
            >
              <span class="iconfont">&#xe6f9;</span>特约邀请服
            </p>
          </div>
        </div>
        <div class="home-newfu">
          <div class="newfu-left">
            <h2>新区预约集结好礼</h2>
            <div class="newfu-left-main">
              <img src="../photo/tstx.png" alt="" width="50px" height="50px" />
              <div class="newfu-left-p">
                <h3>新区预约</h3>
                <p>-天上天下-</p>
              </div>
            </div>
          </div>
          <div class="newfu-border"></div>
          <div class="newfu-right">
            <p>祝福礼包</p>
            <p>皮肤礼包</p>
            <p>勾玉礼包</p>
            <p>神秘符咒</p>
            <p>月见之樱</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 这是平安世界-->
    <div class="home-pasj">
      <div class="pasj-logo"></div>
      <div class="pasj-btn">
        <div :class="pasjdiv4"><p>式神录</p></div>
        <div :class="pasjdiv2"><p>角色录</p></div>
        <div :class="pasjdiv3"><p>声优阵</p></div>
      </div>
      <div class="pasj-search">
        <input type="text" /><img
          src="../photo/search.png"
          alt=""
          height="80%"
        />
      </div>
      <div class="pasj-main">
        <el-carousel indicator-position="none" height="250px" class="pasj-img">
          <el-carousel-item >
            <img src="../photo/362.png" alt="" height="250px">
            <img src="../photo/362 (1).png" alt="" height="250px">
          </el-carousel-item>
           <el-carousel-item >
            <img src="../photo/271.png" alt="" height="250px">
            <img src="../photo/271 (1).png" alt="" height="250px">
          </el-carousel-item>
          <el-carousel-item >
            <img src="../photo/272.png" alt="" height="250px">
            <img src="../photo/272 (1).png" alt="" height="250px">
          </el-carousel-item>
          <el-carousel-item >
            <img src="../photo/360.png" alt="" height="250px">
            <img src="../photo/360 (1).png" alt="" height="250px">
          </el-carousel-item>
          <el-carousel-item >
            <img src="../photo/361.png" alt="" height="250px">
            <img src="../photo/361 (1).png" alt="" height="250px">
          </el-carousel-item>
          <el-carousel-item >
            <img src="../photo/409.png" alt="" height="250px">
            <img src="../photo/409 (1).png" alt="" height="250px">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="pasj-left"></div>
      <div class="pasj-right"></div>
    </div>
    <!-- 这是游戏攻略 -->
    <div class="home-yxgy">
      <div class="yxgy-logo"></div>
      <div class="yxgy-main">
         <div class="main-gy">
           <div class="gy-title1"><p>蝉冰雪女</p></div>
           <div class="gy-title2">养成手册</div>
         </div>
         <div class="main-gy2">
           <div class="gy-title1"><p>新区开荒</p></div>
           <div class="gy-title2">入门指南</div>
         </div>
         <div class="main-gy3">
           <div class="gy-title1"><p>蝉冰雪女</p></div>
           <div class="gy-title2">全面解读</div>
         </div>
        <div class="main-top">
          <ul class="main-top-ul">
            <li @click="zx1">最新</li>
            <li @click="mxsl1">萌新上路</li>
            <li @click="ssyh1">式神御魂</li>
            <li @click="mwfb">秘闻副本</li>
            <li @click="djzr">斗技阵容</li>
          </ul>
        </div>
        <div class="zx">
          <ul>
            <li>
              <p class="p1">【斗技】小赛季的斗技式神评级及御魂推荐</p>
              <p>作者：靠脸混饭</p>
            </li>
            <li>
              <p class="p1">【斗技】小赛季的正确打开方式及起手阵容推荐</p>
              <p>作者：靠脸混饭</p>
            </li>
            <li>
              <p class="p1">【斗技】【反打川雪麓花】拒绝冲浪从我做起，暴力拆迁队，细节制胜一刀一个。【3000以下】</p>
              <p>作者：小新菇凉</p>
            </li>
            <li>
              <p class="p1">【玩法】【蝉冰雪女版本】道馆突破阵容分享2.0来啦</p>
              <p>作者：姝酱的小本本</p>
            </li>
            <li>
              <p class="p1">【新手】千姬使用指南</p>
              <p>作者：余岁岁</p>
            </li>
            <li>
              <p class="p1">【新手】阴阳师小讲堂——治疗和护盾</p>
              <p>作者：不包邮哦亲</p>
            </li>
          </ul>
        </div>
        <div class="mxsl">
          <ul>
            <li>
              <p class="p1">【新手】千姬使用指南</p>
              <p>作者：余岁岁</p>
            </li>
            <li>
              <p class="p1">【新手】阴阳师小讲堂——治疗和护盾</p>
              <p>作者：不包邮哦亲</p>
            </li>
            <li>
              <p class="p1">【新手】【新区开荒指南】式神预约、阵容搭配、入门扫盲</p>
              <p>作者：蜃彩流</p>
            </li>
            <li>
              <p class="p1">【新手】sp雪女伴生活动“雪落樱祭“速通攻略.0来啦</p>
              <p>作者：是大荣啦</p>
            </li>
            <li>
              <p class="p1">【新手】【雨女秘闻】超低配反击流打法</p>
              <p>作者：莫奈儿xxx</p>
            </li>
            <li>
              <p class="p1">【新手】【鬼灵歌伎逢魔】一图流攻略</p>
              <p>作者：蜃彩流</p>
            </li>
          </ul>
        </div>
        <div class="ssyh">
          <ul>
            <li>
              <p class="p1">【式神】千姬使用指南</p>
              <p>作者：余岁岁</p>
            </li>
            <li>
              <p class="p1">【式神】蝉冰雪女养成手册</p>
              <p>作者：是大荣啦</p>
            </li>
            <li>
              <p class="p1">【御魂】御魂整理攻略超快速2.0版本来咯！</p>
              <p>作者：阿毛酱Lune</p>
            </li>
            <li>
              <p class="p1">【式神】蝉冰雪女技能机制全面解读+实战.0来啦</p>
              <p>作者：小琨爱小蛊</p>
            </li>
            <li>
              <p class="p1">【御魂】【全图鉴式神】御魂搭配推荐</p>
              <p>作者：蜃彩流</p>
            </li>
            <li>
              <p class="p1">【式神】祢豆子PVE在哪里就业？徐秃子独家使用心得</p>
              <p>作者：徐小侠丶</p>
            </li>
          </ul>
        </div>
        <div class="mwfb">
          <ul>
            <li>
              <p class="p1">【式神】千姬使用指南</p>
              <p>作者：余岁岁</p>
            </li>
            <li>
              <p class="p1">【式神】蝉冰雪女养成手册</p>
              <p>作者：是大荣啦</p>
            </li>
            <li>
              <p class="p1">【御魂】御魂整理攻略超快速2.0版本来咯！</p>
              <p>作者：阿毛酱Lune</p>
            </li>
            <li>
              <p class="p1">【式神】蝉冰雪女技能机制全面解读+实战.0来啦</p>
              <p>作者：小琨爱小蛊</p>
            </li>
            <li>
              <p class="p1">【御魂】【全图鉴式神】御魂搭配推荐</p>
              <p>作者：蜃彩流</p>
            </li>
            <li>
              <p class="p1">【式神】祢豆子PVE在哪里就业？徐秃子独家使用心得</p>
              <p>作者：徐小侠丶</p>
            </li>
          </ul>
        </div>
        <div class="djzr">
          <ul>
            <li>
              <p class="p1">【式神】千姬使用指南</p>
              <p>作者：余岁岁</p>
            </li>
            <li>
              <p class="p1">【式神】蝉冰雪女养成手册</p>
              <p>作者：是大荣啦</p>
            </li>
            <li>
              <p class="p1">【御魂】御魂整理攻略超快速2.0版本来咯！</p>
              <p>作者：阿毛酱Lune</p>
            </li>
            <li>
              <p class="p1">【式神】蝉冰雪女技能机制全面解读+实战.0来啦</p>
              <p>作者：小琨爱小蛊</p>
            </li>
            <li>
              <p class="p1">【御魂】【全图鉴式神】御魂搭配推荐</p>
              <p>作者：蜃彩流</p>
            </li>
            <li>
              <p class="p1">【式神】祢豆子PVE在哪里就业？徐秃子独家使用心得</p>
              <p>作者：徐小侠丶</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 这是试听盛宴 -->
    <div class="home-stsy">
      <div class="stsy-logo"></div>
      <div class="stsy-bg"></div>
      <div class="stsy1"><p><span class="iconfont">&#xe621;</span>天域篇·上篇</p></div>
      <div class="stsy2"><p><span class="iconfont">&#xe621;</span>暖雪融冬，春深几许</p></div>
      <div class="stsy3"><p><span class="iconfont">&#xe621;</span>彼世之花，旧梦重归</p></div>
      <div class="stsy4"><p><span class="iconfont">&#xe621;</span>初翎山风</p></div>
      <div class="stsy-more"><p>查看更多----></p></div>
    </div>
    <!-- 这是底部 -->
    <div class="home-foot">
      <div class="foot-logo"></div>
      <div class="foot-more">
        <div class="more-erweima2">
           <div class="more-erweima"></div>
        </div>
      </div>
       <div class="footer">
          <div class="footer-1">
            {{fengxiang}}
            <img src="../photo/weixin.png" title="微信"><p>微信</p>
            <img src="../photo/yixin.png" title="易信"><p>易信</p>
            <img src="../photo/xinlang.png" title="新浪微博"><p>新浪微博</p>
            <img src="../photo/add.png" title="更多">
          </div>
          <div class="footer-2">
            <a href=""><img src="../photo/wylog.png"></a>
            <a href=""><img src="../photo/wylogo2.png"></a>
            <a href=""><img src="../photo/wen.png" alt="" width="100%" height="100%"></a>
            <a href=""><img src="../photo/wen2.png" alt="" width="100%" height="100%"></a>
            <div class="footer-2-1">
              <a href="">公司简介</a>&nbsp;<span>-</span>&nbsp;
              <a href="">客服服务</a>&nbsp;<span>-</span>&nbsp;
              <a href="">网易集团隐私政策及儿童个人信息保护规则</a>&nbsp;<span>-</span>&nbsp;
              <a href="">网易游戏</a>&nbsp;<span>-</span>&nbsp;
              <a href="">联系我们</a>&nbsp;<span>-</span>&nbsp;
              <a href="">商务合作</a>&nbsp;<span>-</span>&nbsp;
              <a href="">加入我们</a>&nbsp;<span>-</span>&nbsp;
              <a href="">用户协议</a>
              <p>网易公司版权所有<span>@1997 -2021</span></p>
            </div>
          </div>
          <div class="footer-3">
            <p>本游戏适合8岁以上的玩家进入</p>
            <p>积极健康的游戏心态是健康游戏的开端，本游戏故事情节设置紧凑，请您合理控制游戏时间，避免沉溺游戏影响生活，注意自我保护，防范网络陷阱。</p>
            <p><a href="">《网络游戏管理暂行办法》</a><span>文网游备字【2016】M-RPG4708号</span><span>《网络文化经营许可证》</span><span>浙网文[2019]1372-138号</span><span>批准文号：新广出审【2017】6710号</span></p>
            <p>出版物号：ISBN 978-7-7979-9973-1 <a href="">违法及不良信息举报中心</a><a href="">ICP备案：粤B2-20090191-18</a></p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      ssyh:false,
      mxsl:false,
      zx:true,
      pasjdiv1: "pasj-btn-div1",
      pasjdiv4: "pasj-btn-div4",
      pasjdiv2: "pasj-btn-div2",
      pasjdiv5: "pasj-btn-div5",
      pasjdiv3: "pasj-btn-div3",
      pasjdiv6: "pasj-btn-div6",
      fengxiang:'分享到：'
    };
  },
  methods: {
    bizhi(){
      this.$router.push({path:`/video/${2}`})
    },
    video(){
      this.$router.push({path:`/video/${1}`})
    },
    douji(){
      this.$router.push({path:`/one/${16}`})
    },
    miwenfuben(){
      this.$router.push({path:`/one/${15}`})
    },
    shishenyuhun(){
      this.$router.push({path:`/one/${14}`})
    },
    mengxin(){
      this.$router.push({path:`/one/${13}`})
    },
    gt(){
      this.$router.push({path:`/shishen/${12}`})
    },
    n(){
      this.$router.push({path:`/shishen/${11}`})
    },
    r(){
      this.$router.push({path:`/shishen/${10}`})
    },
    sr(){
      this.$router.push({path:`/shishen/${9}`})
    },
    ssr(){
      this.$router.push({path:`/shishen/${8}`})
    },
    sp(){
      this.$router.push({path:`/shishen/${7}`})
    },
    liandong(){
      this.$router.push({path:`/shishen/${6}`})
    },
    one(){
      this.$router.push({path:`/one/${1}`})
    },
    two(){
      this.$router.push({path:`/one/${2}`})
    },
    three(){
      this.$router.push({path:`/one/${3}`})
    },
    four(){
      this.$router.push({path:`/one/${4}`})
    },
    five(){
      this.$router.push({path:`/one/${5}`})
    },
    shop() {
      this.$router.push({ path: "/shop" });
    },
    nav(li, i, li1, li2) {
      $(li)
        .eq(i)
        .mouseenter(function () {
          $(li1).slideDown();
          $(li2).show();
        });
      $(li)
        .eq(i)
        .mouseleave(function () {
          $(li1).slideUp();
          $(li2).hide();
        });
    },
    zx1(){
      $(".zx").css({"display":"block"});
      $(".mxsl").css({"display":"none"})
      $(".ssyh").css({"display":"none"})
      $(".mwfb").css({"display":"none"})
      $(".djzr").css({"display":"none"})
    },
    mxsl1(){
      $(".zx").css({"display":"none"});
      $(".mxsl").css({"display":"block"})
      $(".ssyh").css({"display":"none"})
      $(".mwfb").css({"display":"none"})
      $(".djzr").css({"display":"none"})
    },
    ssyh1(){
      $(".zx").css({"display":"none"});
      $(".mxsl").css({"display":"none"})
      $(".ssyh").css({"display":"block"})
      $(".mwfb").css({"display":"none"})
      $(".djzr").css({"display":"none"})
    },
    mwfb(){
      $(".zx").css({"display":"none"});
      $(".mxsl").css({"display":"none"})
      $(".ssyh").css({"display":"none"})
      $(".mwfb").css({"display":"block"})
      $(".djzr").css({"display":"none"})
    },
    djzr(){
      $(".zx").css({"display":"none"});
      $(".mxsl").css({"display":"none"})
      $(".ssyh").css({"display":"none"})
      $(".mwfb").css({"display":"none"})
      $(".djzr").css({"display":"block"})
    }
  },
  mounted: function () {
    for (let i = 0; i < $(".home-nav>ul>li").length; i++) {
      this.nav(".home-nav>ul>li", 1, ".home-nav-select", ".nav-news");
      this.nav(".home-nav>ul>li", 2, ".home-nav-select2", ".nav-shishen");
      this.nav(".home-nav>ul>li", 3, ".home-nav-select3", "gongnue-mian");
      this.nav(".home-nav>ul>li", 4, ".home-nav-select4");
      this.nav(".home-nav>ul>li", 5, ".home-nav-select5");
      //导航默认隐藏
      $(".home-nav-select").hide();
      $(".home-nav-select2").hide();
      $(".home-nav-select3").hide();
      $(".home-nav-select4").hide();
      $(".home-nav-select5").hide();
    }
    //游戏攻略导航效果
    for(let i=0;i<$(".main-top-ul>li").length;i++){
      $(".main-top-ul>li").eq(i).click(function(){
        $(".main-top-ul>li").eq(i).css({"background":"url('../photo/yxgy-nav.png')no-repeat","background-position-y":"45px","background-position-x":"40px","background-color":"white","color":"rgb(119,184,152)"})
      })
    }
  },
};
</script>

<style scoped>
@import "../assets/inconont/iconfont.css";
.footer{
  margin-top:200px ;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  position: absolute;
  bottom: 50px;
  font-size: 14px;
}
.footer-1{
  height: 48px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.footer-1 img{
  height: 28px;
  width: 28px;
  margin-left: 20px;
}
.footer-1 p{
  margin: 0 20px 0 10px;
}
.footer-1 img:hover{
  transform: scale(1.2);
}
.footer-2{
  height: 80px;
  width: 100%;
  display: flex;
  color: white;
  margin-top: 20px;
}
.footer-2 img{
  width:118px;
  height: 31px;
}
.footer-2 a:nth-of-type(3) img{
  width: 31px;
  height: 31px;
  margin-left: 20px;
}
.footer-2 a:nth-of-type(4) img{
  width: 31px;
  height: 35px;
  margin-left: 20px;
}
.footer-2-1{
  height: 40px;
  margin-left: 30px;
  font-size: 14px;
}
.footer-2-1 a{
  color: white;
  text-decoration: none;
}
.footer-2-1 a:hover{
  text-decoration: underline;
}
.footer-2-1 p span{
  letter-spacing: 2px;
  margin: 0 10px;
}
.footer-3{
  font-size: 14px;
  color: white;
}
.footer-3 a{
  text-decoration: none;
  color: white;
  margin: 0 10px;
}
.footer-3 span{
  margin: 0 5px;
}
.footer-3 p:nth-of-type(3) a:hover{
  text-decoration: underline;
}
.footer-3 p:nth-of-type(4) a:hover{
  text-decoration: underline;
}
.more-erweima2{
  width: 200px;
  height: 200px;
  background: url("../photo/erweima2.png");
  background-position: 0 -5px;
  background-size: cover;
}
.more-erweima{
  width: 100%;
  height: 100%;
  background: url("../photo/foot-more-top.png")no-repeat;
  background-position: 20px -10px;
  background-size: cover;
}
.foot-more:hover .more-erweima2{
  transform: scale(1.1);
}
.foot-more:hover .more-erweima{
  background-position: 300px -300px;
  transition: all 3s;
}
.foot-more{
  width:200px;
  height: 200px;
  right: 330px;
  top: 200px;
  position: absolute;
  border-radius: 50%;
  background: white;
}
.foot-logo{
  width: 80px;
  height: 200px;
  background:url("../photo/logo2.png");
  position: absolute;
  top: 180px;
  left: 400px;
}
.home-foot{
  width: 100%;
  height: 700px;
  background: url("../photo/home-foot.png")round;
  background-size: cover;
  position: relative;
}
.stsy-more>p{
  padding: 10px 20px;
}
.stsy-more:hover{
  transform: scale(1.2);
}
.stsy-more{
  border: 1px solid rgb(206,171,108);
  position: absolute;
  bottom: 20px;
  left:550px;
  display: flex;
  justify-content: center;
  align-items: center;
  color:rgb(206,171,108);
  background: white;
}
.stsy2>p{
  position: absolute;
  bottom: 10px;
  color: white;
  right: 10px;
}
.stsy3>p{
  position: absolute;
  bottom: 10px;
  color: white;
  right: 10px;
}
.stsy4>p{
  position: absolute;
  bottom: 10px;
  color: white;
  right: 10px;
}
.stsy4{
  width: 250px;
  height: 141px;
  background: url("../photo/stsy4.jpg");
  position: absolute;
  top: 40px;
  left: 885px;
}
.stsy3{
  width: 250px;
  height: 141px;
  background: url("../photo/stsy3.gif");
  position: absolute;
  top: 40px;
  left: 630px;
}
.stsy2{
  width: 250px;
  height: 141px;
  background: url("../photo/stsy2.jpg");
  position: absolute;
  top: 40px;
  left: 375px;
}
.stsy1>p{
  position: absolute;
  bottom: 10px;
  color: white;
  right: 10px;
}
.stsy1{
  width: 250px;
  height: 141px;
  background: url("../photo/stsy1.gif");
  position: absolute;
  top: 40px;
  left: 120px;
}
.stsy-bg{
  width: 90%;
  height: 120px;
  background: url("../photo/stsybg.jpg");
  left: 100px;
  top: 150px;
  position: absolute;
}
.stsy-logo{
  width: 60px;
  height: 150px;
  position: absolute;
  top: 10px;
  left: 10px;
  background: url("../photo/stsy.png") no-repeat;
  background-size: cover;
}
.home-stsy{
  width: 1200px;
  height: 300px;
  margin: 50px auto;
  position: relative;
}
.djzr>ul>li p:nth-of-type(1){
  font-size: 15px;
  padding: 5px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.djzr>ul>li p:nth-of-type(2){
  font-size: 13px;
  padding: 1px 5px;
}
.djzr>ul>li:hover .p1{
  color: rgb(119,184,152);
}
.djzr>ul>li:hover{
  border-left:6px solid rgb(119,184,152) ;
  transition: all .5s;
}
.djzr>ul>li{
  width: 30%;
  height: 50px;
  border-left: 3px solid rgb(204,204,204);
  margin: 10px 0;
}
.djzr>ul{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.djzr{
  width: 80%;
  height: 150px;
  position: absolute;
  bottom: 0;
  left: 10%;
  display: none;
}
.mwfb>ul>li p:nth-of-type(1){
  font-size: 15px;
  padding: 5px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.mwfb>ul>li p:nth-of-type(2){
  font-size: 13px;
  padding: 1px 5px;
}
.mwfb>ul>li:hover .p1{
  color: rgb(119,184,152);
}
.mwfb>ul>li:hover{
  border-left:6px solid rgb(119,184,152) ;
  transition: all .5s;
}
.mwfb>ul>li{
  width: 30%;
  height: 50px;
  border-left: 3px solid rgb(204,204,204);
  margin: 10px 0;
}
.mwfb>ul{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.mwfb{
  width: 80%;
  height: 150px;
  position: absolute;
  bottom: 0;
  left: 10%;
  display: none;
}
.ssyh>ul>li p:nth-of-type(1){
  font-size: 15px;
  padding: 5px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ssyh>ul>li p:nth-of-type(2){
  font-size: 13px;
  padding: 1px 5px;
}
.ssyh>ul>li:hover .p1{
  color: rgb(119,184,152);
}
.ssyh>ul>li:hover{
  border-left:6px solid rgb(119,184,152) ;
  transition: all .5s;
}
.ssyh>ul>li{
  width: 30%;
  height: 50px;
  border-left: 3px solid rgb(204,204,204);
  margin: 10px 0;
}
.ssyh>ul{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.ssyh{
  width: 80%;
  height: 150px;
  position: absolute;
  bottom: 0;
  left: 10%;
  display: none;
}
.mxsl>ul>li p:nth-of-type(1){
  font-size: 15px;
  padding: 5px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.mxsl>ul>li p:nth-of-type(2){
  font-size: 13px;
  padding: 1px 5px;
}
.mxsl>ul>li:hover .p1{
  color: rgb(119,184,152);
}
.mxsl>ul>li:hover{
  border-left:6px solid rgb(119,184,152) ;
  transition: all .5s;
}
.mxsl>ul>li{
  width: 30%;
  height: 50px;
  border-left: 3px solid rgb(204,204,204);
  margin: 10px 0;
}
.mxsl>ul{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.mxsl{
  width: 80%;
  height: 150px;
  position: absolute;
  bottom: 0;
  left: 10%;
  display: none;
}
.zx>ul>li p:nth-of-type(1){
  font-size: 15px;
  padding: 5px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.zx>ul>li p:nth-of-type(2){
  font-size: 13px;
  padding: 1px 5px;
}
.zx>ul>li:hover .p1{
  color: rgb(119,184,152);
}
.zx>ul>li:hover{
  border-left:6px solid rgb(119,184,152) ;
  transition: all .5s;
}
.zx>ul>li{
  width: 30%;
  height: 50px;
  border-left: 3px solid rgb(204,204,204);
  margin: 10px 0;
}
.zx>ul{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.zx{
  width: 80%;
  height: 150px;
  position: absolute;
  bottom: 0;
  left: 10%;
}
.main-gy3:hover .gy-title1,.main-gy3:hover .gy-title2{
  transform: translateY(-20px);
  transition: all 1s;
}
.main-gy3{
  width: 310px;
  height: 210px;
  top: -150px;
  position: absolute;
  z-index: 10;
  left: 850px;
  background: url("../photo/yxgy3.jpg")no-repeat;
  background-position: 0 -38px;
}
.main-gy2:hover .gy-title1,.main-gy2:hover .gy-title2{
  transform: translateY(-20px);
  transition: all 1s;
}
.main-gy2{
  width: 310px;
  height: 210px;
  top: -150px;
  position: absolute;
  z-index: 10;
  left: 500px;
  background: url("../photo/yxgy2.jpg")no-repeat;
  background-position: 0 -38px;
}
.main-gy:hover .gy-title1,.main-gy:hover .gy-title2{
  transform: translateY(-20px);
  transition: all 1s;
}
.gy-title1{
  width: 20px;
  float: left;
  padding: 10px;
  background:white;
  border: 1px solid black;
  margin-top: -20px;
  margin-left: 20px;
}
.gy-title2{
  width: 20px;
  float: left;
  padding: 10px;
  background:white;
  border: 1px solid black;
  margin-left: 20px;
}
.main-gy{
  width: 310px;
  height: 210px;
  top: -150px;
  position: absolute;
  z-index: 10;
  left: 150px;
  background: url("../photo/yxgy1.jpg")no-repeat;
  background-position: 0 -38px;
}
.main-top-ul>li:hover{
  background: url("../photo/yxgy-nav.png")no-repeat;
  background-position-y: 45px;
  background-position-x: 40px;
  background-color: white;
  color: rgb(119,184,152);
}
.main-top-ul>li:nth-of-type(1){
  padding: 20px 40px;
  background: url("../photo/yxgy-nav.png")no-repeat;
  background-position-y: 45px;
  background-position-x: 23px;
  background-color: white;
  color: rgb(119,184,152);
}
.main-top-ul>li{
  padding: 20px 40px;
  /* background: url("../photo/yxgy-nav.png")no-repeat;
  background-position-y: 45px;
  background-position-x: 40px;
  background-color: white;
  color: rgb(119,184,152); */
  margin: 0 10px;
  position: relative;
}
.main-top-ul{
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 60px;
  font-size: 20px;
}
.main-top{
  width: 100%;
  height: 120px;
  background: url("../photo/yxgy-main.jpg");
  position: relative;
  overflow: hidden;
}
.yxgy-main{
  width: 100%;
  height: 280px;
  position: absolute;
  bottom: 0;
  border: 1px solid rgb(128,193,161);
}
.yxgy-logo{
  width: 60px;
  height: 135px;
  position: absolute;
  top: 10px;
  left: 10px;
  background: url("../photo/yxgy.png") no-repeat;
  background-size: cover;
}
.home-yxgy{
  width: 1200px;
  height: 500px;
  margin: 10px auto;
  position: relative;
}
.pasj-left{
  width: 78px;
  height: 250px;
  position: absolute;
  border: 1px solid rgb(212,185,135);
  left: 20px;
  top: 200px;
  background:url("../photo/pasj-foot.png") ;
}
.pasj-right{
  width: 78px;
  height: 250px;
  position: absolute;
  right: 100px;
  top: 200px;
  background:url("../photo/pasj-foot.png") ;
  border: 1px solid rgb(212,185,135);
}
.pasj-img img:nth-of-type(1){
  position: absolute;
  bottom: 0;
  left: 0;
}
.pasj-img img:nth-of-type(2){
  position: absolute;
  bottom: 0;
  right: 0;
}
.pasj-main {
  width: 800px;
  height: 250px;
  position: absolute;
  top: 200px;
  left: 150px;
  background: url("../photo/pajsbg.jpg")round;
}
.pasj-search input {
  width: 170px;
  height: 80%;
  border: none;
  outline: none;
}
.pasj-search {
  width: 200px;
  height: 30px;
  border-bottom: 1px solid rgb(167, 132, 66);
  position: absolute;
  top: 40px;
  right: 50px;
  display: flex;
}
/* .pasj-btn>div>p{
  color: white;
} */
.pasj-btn > div {
  display: flex;
  justify-content: center;
}
.pasj-btn > div:hover {
  background-color: rgb(194, 160, 96);
  color: white;
}
.pasj-btn-div4 {
  width: 33%;
  height: 80%;
  background-color: rgb(194, 160, 96);
  border-right: 1px solid rgb(194, 160, 96);
  margin: 0 0.5%;
  color: white;
}
.pasj-btn-div5 {
  width: 32%;
  height: 80%;
  background-color: rgb(194, 160, 96);
  border-right: 1px solid rgb(194, 160, 96);
  margin: 0 0.5%;
}
.pasj-btn-div6 {
  width: 32%;
  height: 80%;
  background-color: rgb(194, 160, 96);
  border-right: 1px solid rgb(194, 160, 96);
  margin: 0 0.5%;
}
.pasj-btn-div1 {
  width: 32%;
  height: 80%;
  border-right: 1px solid rgb(194, 160, 96);
  margin: 0 0.5%;
}
.pasj-btn-div2 {
  width: 32%;
  height: 80%;
  border-right: 1px solid rgb(194, 160, 96);
  margin: 0 0.5%;
}
.pasj-btn-div3 {
  width: 32%;
  height: 80%;
  border-right: 1px solid rgb(194, 160, 96);
  margin: 0 0.5%;
}
.pasj-btn {
  width: 300px;
  height: 32px;
  border: 2px solid rgb(194, 160, 96);
  position: absolute;
  top: 10px;
  left: 100px;
  display: flex;
  align-items: center;
}
.pasj-logo {
  width: 60px;
  height: 135px;
  position: absolute;
  top: 10px;
  left: 10px;
  background: url("../photo/pasj-logo.png") no-repeat;
  background-size: cover;
}
.home-pasj {
  width: 1200px;
  height: 500px;
  margin: 40px auto;
  position: relative;
}
.newfu-right p {
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-top: 90px;
}
.newfu-right {
  height: 120px;
  width: 55%;
  margin-left: 40px;
  background: url("../photo/newfu-right.png") no-repeat;
  display: flex;
  justify-content: space-around;
  position: relative;
}
.newfu-border {
  width: 15px;
  height: 120px;
  background: url("../photo/border.png") no-repeat;
}
.newfu-left-p h3 {
  letter-spacing: 10px;
}
.newfu-left-p {
  width: 150px;
  height: 50px;
  margin: 0 10px;
  color: white;
}
.newfu-left-main {
  width: 80%;
  height: 60px;
  margin: 10px auto;
  background: url("../photo/yuyue.jpg") no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.newfu-left {
  width: 30%;
  height: 120px;
  margin-left: 40px;
  text-align: center;
}
.home-newfu {
  display: flex;
  align-items: center;
  width: 1020px;
  height: 200px;
  background: url("../photo/newfu.png") no-repeat;
  background-size: cover;
  position: absolute;
  bottom: 0;
  left: 25%;
}
.downgame-main-img > img {
  animation: zc 2s infinite;
}
@keyframes zc {
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(70px);
  }
  100% {
    transform: translateY(-10px);
  }
}
.downgame-main-img {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background: url("../photo/erwiema.png") no-repeat;
  background-size: cover;
  position: relative;
}
.downgame-main {
  width: 80%;
  height: 150px;
  position: relative;
  margin: 35px auto 0;
  text-align: center;
}
.home-downgaeme {
  width: 120px;
  height: 200px;
  background: url("../photo/downgame.png") no-repeat;
  background-size: cover;
  position: absolute;
  bottom: 0;
  left: 16%;
}
.home-age {
  width: 60px;
  height: 80px;
  background: url("../photo/homeage.png") no-repeat;
  background-size: cover;
  position: absolute;
  bottom: 20px;
  left: 10%;
}
.home-yy {
  width: 100%;
  height: 150px;
  background: url("../photo/homeyy.png");
  position: absolute;
  bottom: 0;
}
.yys-logo {
  width: 75px;
  height: 200px;
  background: url("../photo/200.png") round;
  position: absolute;
  top: 50px;
  left: 100px;
}
.home-main {
  width: 100%;
  height: 580px;
  background: url("../photo/mainbg.png") no-repeat;
  background-position-y: -28px;
  background-size: cover;
  margin-top: 140px;
  position: relative;
  z-index: -1;
}
.home-nav-select5 p {
  position: absolute;
  bottom: 10px;
  right: 5px;
}
.shiting1 {
  width: 165px;
  height: 100px;
  background: url("../photo/shiting1.jpg");
  margin: 10px 40px;
  font-size: 20px;
  color: white;
  position: relative;
}
.shiting2 {
  width: 165px;
  height: 100px;
  background: url("../photo/shiting2.jpg");
  margin: 10px 40px;
  font-size: 20px;
  color: white;
  position: relative;
}
.shiting3 {
  width: 165px;
  height: 100px;
  background: url("../photo/shiting3.jpg");
  margin: 10px 40px;
  font-size: 20px;
  color: white;
  position: relative;
}
.home-nav-select5 {
  width: 100%;
  height: 140px;
  background-image: url("../photo/navhoverbg.jpg");
  display: flex;
  position: absolute;
  left: 0;
  justify-content: center;
  align-items: center;
}
.shequ-right > ul > li:hover {
  text-decoration: underline;
}
.shequ-right > ul > li {
  float: left;
  font-size: 12px;
  color: white;
  margin: 0 20px;
}
.shequ-right > h3 {
  margin: 10px 0 20px 20px;
}
.shequ-right {
  text-align: left;
}
.shequ-left-p > ul > li p:hover {
  text-decoration: underline;
}
.shequ-left-p > ul > li p {
  line-height: 30px;
  color: white;
}
.shequ-left-p > ul > li {
  width: 32%;
  float: left;
  font-size: 10px;
}
.shequ-left-p > ul > li span {
  margin: 0 0 0 10px;
}
.shequ-left-p {
  float: left;
  width: 220px;
  height: 92px;
  margin-top: 10px;
  text-align: left;
}
.shequ-left-right > p {
  font-size: 12px;
  color: white;
  position: absolute;
  bottom: 10px;
  left: 5px;
}
.shequ-left-right {
  position: relative;
  width: 216px;
  border: 2px solid black;
  background: url("../photo/shequ2.jpg");
  height: 92px;
  margin-top: 10px;
  float: left;
  margin-right: 25px;
}
.shequ-left-left > p {
  font-size: 12px;
  color: white;
  position: absolute;
  bottom: 10px;
  left: 5px;
}
.shequ-left-left {
  position: relative;
  width: 216px;
  border: 2px solid black;
  background: url("../photo/shequ1.jpg");
  height: 92px;
  margin-top: 10px;
  float: left;
  margin-right: 20px;
}
.shequ-left {
  width: 60%;
  height: 100%;
  border-right: 3px solid rgb(167, 132, 66);
}
.shequ-right {
  width: 38%;
  height: 100%;
}
.home-nav-main {
  width: 1200px;
  height: 80%;
  display: flex;
}
.home-nav-select4 {
  width: 100%;
  height: 140px;
  background-image: url("../photo/navhoverbg.jpg");
  display: flex;
  position: absolute;
  left: 0;
  justify-content: center;
  align-items: center;
}
.gongnue-ul p {
  position: absolute;
  bottom: 10px;
  right: 5px;
  font-weight: bold;
  color: white;
}
.gongnue1 {
  width: 165px;
  height: 100px;
  background: url("../photo/gongnue1.jpg");
  position: relative;
}
.gongnue2 {
  width: 165px;
  height: 100px;
  background: url("../photo/gongnue2.jpg");
  position: relative;
}
.gongnue3 {
  width: 165px;
  height: 100px;
  background: url("../photo/gongnue3.jpg");
  position: relative;
}
.gongnue-ul > li {
  margin: 0 50px;
}
.gongnue-ul {
  display: flex;
}
.home-nav-select3 {
  width: 100%;
  height: 140px;
  background-image: url("../photo/navhoverbg.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
}
.shishen1 {
  width: 165px;
  height: 100px;
  background-image: url("../photo/shishen1.jpg");
}
.shishen2 {
  width: 165px;
  height: 100px;
  background-image: url("../photo/shishen2.jpg");
}
.shishen3 {
  width: 165px;
  height: 100px;
  background-image: url("../photo/shishen3.jpg");
}
.shishen4 {
  width: 165px;
  height: 100px;
  background-image: url("../photo/shishen4.jpg");
}
.shishen5 {
  width: 165px;
  height: 100px;
  background-image: url("../photo/shishen5.jpg");
}
.shishen6 {
  width: 165px;
  height: 100px;
  background-image: url("../photo/shishen6.jpg");
}
.shishen7 {
  width: 165px;
  height: 100px;
  background-image: url("../photo/shishen7.jpg");
}
.nav-shishen > ul > li {
  margin: 0 20px;
}
.nav-shishen ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav-shishen {
  width: 1200px;
  height: 100px;
}
.home-nav-select2 {
  width: 100%;
  height: 140px;
  background-image: url("../photo/navhoverbg.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
}
.nav-news > ul > li div:hover {
  color: red;
}
.nav-news > ul > li div p {
  position: absolute;
  bottom: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.nav-news > ul > li .one {
  width: 100%;
  height: 100%;
  background: url("../photo/news1.jpg");
  position: relative;
}
.nav-news > ul > li .two {
  width: 100%;
  height: 100%;
  background: url("../photo/news2.jpg");
  position: relative;
}
.nav-news > ul > li .three {
  width: 100%;
  height: 100%;
  background: url("../photo/news3.jpg");
  position: relative;
}
.nav-news > ul > li .four {
  width: 100%;
  height: 100%;
  background: url("../photo/news4.jpg");
  position: relative;
}
.nav-news > ul > li .five {
  width: 100%;
  height: 100%;
  background: url("../photo/news5.jpg");
  position: relative;
}
.nav-news > ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav-news > ul > li {
  width: 145px;
  height: 88px;
  font-size: 12px;
  color: white;
}
.nav-news {
  width: 1200px;
  height: 100px;
}
.home-nav-select {
  width: 100%;
  height: 140px;
  background-image: url("../photo/navhoverbg.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.home-nav {
  width: 100%;
  height: 80px;
  margin: 60px auto 0;
  background: url("../photo/homenav.jpg");
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.home-nav > ul {
  display: flex;
  color: white;
  width: 1200px;
  margin: 0 auto;
  justify-content: space-around;
}
.home-nav > ul > span {
  line-height: 80px;
}
.home-nav > ul > li {
  width: 10%;
  text-align: center;
  margin: 0 20px;
}
.home-nav > ul > li:hover {
  cursor: pointer;
  background-color: rgb(194, 160, 96);
  color: #000;
}
.home-nav > ul > li > p {
  line-height: 80px;
}
.home-nav > ul > img {
  width: 20px;
  height: 20px;
  margin: 30px;
}
.home-nav > ul > img:hover {
  transform: rotateY(-180deg);
}
</style>