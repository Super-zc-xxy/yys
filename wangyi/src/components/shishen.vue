<template>
    <div class="shishen">
        <div class="shishen-nav">
            <ul>
          <li><p>官网首页</p></li>
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
        <div class="shishen-main">
            <div class="main-left">
                <div class="left-logo"></div>
                <div class="left-nav">
                    <ul>
                        <li>
                            <div class="jt"></div>
                            <div class="level"><img src="../photo/shishen-ld.png" alt=""></div>
                            <div class="level2"><img src="../photo/shishen-ld1.png" alt=""></div>
                        </li>
                        <li>
                            <div class="jt"></div>
                            <div class="level"><img src="../photo/shishen-sp.png" alt=""></div>
                            <div class="level2"><img src="../photo/shishen-sp1.png" alt=""></div>
                        </li>
                        <li>
                            <div class="jt"></div>
                            <div class="level"><img src="../photo/shishen-ssr.png" alt=""></div>
                            <div class="level2"><img src="../photo/shishen-ssr1.png" alt=""></div>
                        </li>
                        <li>
                            <div class="jt"></div>
                            <div class="level"><img src="../photo/shishen-sr.png" alt=""></div>
                            <div class="level2"><img src="../photo/shishen-sr1.png" alt=""></div>
                        </li>
                        <li>
                            <div class="jt"></div>
                            <div class="level"><img src="../photo/shishen-r.png" alt=""></div>
                            <div class="level2"><img src="../photo/shishen-r1.png" alt=""></div>
                        </li>
                        <li>
                            <div class="jt"></div>
                            <div class="level"><img src="../photo/shishen-n.png" alt=""></div>
                            <div class="level2"><img src="../photo/shishen-n1.png" alt=""></div>
                        </li>
                        <li>
                            <div class="jt"></div>
                            <div class="level"><img src="../photo/shishen-gt.png" alt=""></div>
                            <div class="level2"><img src="../photo/shishen-gt1.png" alt=""></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="main-right">
                <div class="right-main">
                    <router-view></router-view>
                </div>
               <div class="right-foot">
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
        return {
            
        }
    },
    mounted:function(){
        if(this.$route.params.id == 6){
            this.$router.push({path:`/liandong`});
            $(".jt").eq(0).css({"opacity":"1"});
            $(".level2").eq(0).css({"opacity":"1"});
        }
        if(this.$route.params.id == 7){
            this.$router.push({path:`/sp`});
            $(".jt").eq(1).css({"opacity":"1"});
            $(".level2").eq(1).css({"opacity":"1"});
        }
        if(this.$route.params.id == 8){
            this.$router.push({path:`/ssr`});
            $(".jt").eq(2).css({"opacity":"1"});
            $(".level2").eq(2).css({"opacity":"1"});
        }
        if(this.$route.params.id == 9){
            this.$router.push({path:`/sr`});
            $(".jt").eq(3).css({"opacity":"1"});
            $(".level2").eq(3).css({"opacity":"1"});
        }
        if(this.$route.params.id == 10){
            this.$router.push({path:`/r`});
            $(".jt").eq(4).css({"opacity":"1"});
            $(".level2").eq(4).css({"opacity":"1"});
        }
        if(this.$route.params.id == 11){
            this.$router.push({path:`/n`});
            $(".jt").eq(5).css({"opacity":"1"});
            $(".level2").eq(5).css({"opacity":"1"});
        }
          if(this.$route.params.id == 12){
            this.$router.push({path:`/gt`});
            $(".jt").eq(6).css({"opacity":"1"});
            $(".level2").eq(6).css({"opacity":"1"});
        }
    }
}
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
.right-foot{
    width: 900px;
    height: 80px;
    margin: 10px auto;
}
.right-main{
    width: 900px;
    height: 620px;
    overflow: scroll;
    overflow-x: auto;
    overflow-y: auto;
    margin: 0 auto;
}
.main-right{
    width: 950px;
    margin-left: 50px;
    position: relative;
    height: 500px;
}
.level2{
    position: absolute;
    top: 0;
    left: 40%;
    opacity: 0;
}
.level{
    width: 50%;
}
.jt{
    background: url("../photo/shishen-jt.png")no-repeat;
    width: 30%;
    opacity: 0;
}
.left-nav>ul>li:hover .level2{
    opacity: 1;
}
.left-nav>ul>li:hover .jt{
    opacity: 1;
}
.left-nav>ul>li{
    display: flex;
    justify-content: center;
    width: 190px;
    margin: 20px 0;
    position: relative;
}
.left-nav{
    width: 100%;
}
.left-logo{
    width: 100px;
    margin: 0 auto;
    height: 300px;
    background: url("../photo/shishen-logo.png")no-repeat;
}
.main-left{
    width: 190px;
    margin-left: 268px;
}
.shishen-main{
    width: 100%;
    height: 100%;
    top: 200px;
    display: flex;
}
.shishen-nav>ul>li:hover{
    color: rgb(204,67,54);
}
.shishen-nav>ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    color: white;
}
.shishen-nav{
    width: 1000px;
    height: 80px;
    margin-top: 100px;
    margin-left: 460px;
}
.shishen{
    width: 100%;
    height: 892px;
    background: url("../photo/shishen.jpg");
    background-position-x: -100px;
    overflow: hidden;
}
*{
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>