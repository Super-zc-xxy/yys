<template>
  <div class="one">
    <!-- 这是导航 -->
    <div class="public-nav">
      <div class="nav-logo"></div>
      <div class="nav-main">
        <ul>
          <li><p>游戏首页</p></li>
          <span>/</span>
          <li><p>新闻资讯</p></li>
          <span>/</span>
          <li><p>游戏攻略</p></li>
          <span>/</span>
          <li><p>同人社区</p></li>
          <span>/</span>
          <li><p>官方渠道</p></li>
          <span>/</span>
          <li><p>周边商城</p></li>
          <span>/</span>
          <li><p>藏宝阁</p></li>
          <span>/</span>
          <li><p>网易大神</p></li>
        </ul>
      </div>
    </div>
    <div class="public-tz">
      <i class="el-icon-loading"></i>
      <i style="color: orange"
        >网易和电信合作推出了网易白金卡，玩游戏，听音乐，流量统统免费（包括网易所有产品），高铁上玩游戏不掉线。</i
      >
    </div>
    <!-- 这是内容 -->
    <router-view></router-view>
    <!-- 这是底部 -->
    <div class="public-foot">
      <div class="foot-dashen"></div>
      <div class="foot-p">
        <p>
          　　网易大神是网易游戏旗下的精英玩家社区。这里汇聚了广大精英玩家、游戏圈红人、行业大咖，集合了网易独家的官方资讯和福利趣闻，旨在为玩家打造一个丰富的游戏兴趣社交圈。玩家可以在网易大神与游戏中的好友实时聊
          天、多元互动;以游戏会友，结交更多游戏同好，和大神一起发现更多游戏乐趣。
        </p>
        <p>　　官方网站：https://ds.163.com</p>
        <p>　　官方微信：wyds_163</p>
        <p>　　官方微博：@网易大神 APP</p>
        <p>　　官方大神号：@网易大神</p>
      </div>
      <div class="foot-footer">
          <div class="footer-main">
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
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted: function () {
    // 获取传输的值
    if (this.$route.params.id == 1) {
      this.$router.push({ path: "/one1" });
    }
    if(this.$route.params.id == 2){
        this.$router.push({path:'/two'})
    }
    if(this.$route.params.id == 3){
        this.$router.push({path:'/three'})
    }
    if(this.$route.params.id == 4){
        this.$router.push({path:'/four'})
    }
    if(this.$route.params.id == 5){
        this.$router.push({path:'/five'})
    }
    if(this.$route.params.id == 13){
        this.$router.push({path:'/mengxin'})
    }
    if(this.$route.params.id == 14){
        this.$router.push({path:'/shishenyuhun'})
    }
    if(this.$route.params.id == 15){
        this.$router.push({path:'/miwenfuben'})
    }
    if(this.$route.params.id == 16){
        this.$router.push({path:'/douji'})
    }
  },
};
</script>

<style scoped>
.footer-2{
  height: 60px;
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
.footer-main{
    width: 1200px;
    height: 80px;
}
.foot-footer{
    width: 100%;
    background: rgb(0,0,0);
    height: 100px;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.foot-p p{
    letter-spacing: 2px;
    line-height: 30px;
}
.foot-p{
    width: 1101px;
    margin: 20px auto;
}
.foot-dashen {
  width: 1101px;
  height: 277px;
  background: url("../photo/publicfoot.png") no-repeat;
  margin: 20px auto;
}
.public-foot {
  width: 100%;
  margin: 20px auto 0;
}
.public-tz {
  width: 1200px;
  margin: 20px auto;
}
.nav-logo {
  width: 60px;
  height: 150px;
  background: url("../photo/200.png") no-repeat;
  background-size: cover;
  position: absolute;
  top: 90px;
  left: 350px;
}
.nav-main > ul li:hover {
  color: orange;
}
.nav-main > ul {
  display: flex;
  justify-content: space-around;
  color: white;
  font-size: 20px;
  line-height: 100px;
}
.nav-main {
  width: 60%;
  height: 100px;
  position: absolute;
  right: 50px;
  top: 100px;
}
.public-nav {
  width: 100%;
  height: 300px;
  background: url("../photo/publicone.jpg") no-repeat;
  background-position: 0 50px;
  position: relative;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>