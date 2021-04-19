<template>
<div class="app1">
    <div class="main-1">
        <div class="logo"></div>
        <div class="guanwang"><a href="" @click="home"><img src="../photo/guanwang.png"></a></div>
        <div class="qianji"><a href="" @click="home"><img src="../photo/qianji.png"></a></div>
    </div>
    <div class="main-2">
        <div class="title"></div>
        <div class="btn" >
            <div class="btn-1" ><img src="../photo/btn-1.png" alt="" ></div>
            <div class="btn-1" ><img src="../photo/btn-2.png" alt="" ></div>
            <div class="btn-1" ><img src="../photo/btn-3.png" alt="" ></div>
            <div class="btn-1" ><img src="../photo/btn-4.png" alt="" ></div>
        </div>
    </div>
    <div class="main-3">
        <div class="title1"></div>
        <div class="lun">
            <el-carousel :interval="5000" type="card" height="389px" >
                <el-carousel-item ><img src="../photo/lun1.jpg"></el-carousel-item>
                <el-carousel-item ><img src="../photo/lun2.jpg"></el-carousel-item>
                <el-carousel-item ><img src="../photo/lun3.jpg"></el-carousel-item>
                <el-carousel-item ><img src="../photo/lun4.jpg"></el-carousel-item>
                <el-carousel-item ><img src="../photo/lun5.jpg"></el-carousel-item>
  </el-carousel>
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
import HelloWorld from "./HelloWorld";
export default {
  name: "app1",
  data() {
      return {
         fengxiang:'分享到：'
      }
  },
  methods: {
      // guanwang(){
      //   this.$router.push({path:'/'})
      // }
      home(){
        this.$router.push('/home')
      }
  },
};
</script>

<style>
.main-1 {
  width: 100%;
  height: 699px;
  background: url(" ../photo/one.jpg") center center no-repeat;
  background-size: auto;
  overflow: hidden;
  position: relative;
}
.logo {
  width: 75px;
  height: 198px;
  background: url("../photo/200.png") round;
  position: relative;
  top: 100px;
  left:200px;
  display: inline-block;
}
.guanwang {
  width:200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -90px;
  left: 1270px;
  display: inline-block;
}
.qianji {
  position: relative;
  top:70px;
  left: 1300px;
  width: 200px;
}
.main-2 {
  width: 100%;
  height: 1180px;
  background: url(" ../photo/three.jpg") center center no-repeat;
  background-size: auto;
}
.title {
  height: 55px;
  width: 365px;
  margin: 0 auto 10px;
  background: url("../photo/title.png") center no-repeat;
}
.title1 {
  height: 55px;
  width: 365px;
  margin: 0 auto 10px;
  background: url("../photo/title1.png") center no-repeat;
}
.btn {
  margin: 30px auto ;
  width: 1100px;
  height: 1090px;
  position: relative;

}
.btn-1 {
  margin: 3px;
  float: left;
  width: 542px;
  height: 538px;
  animation: btn-1;
  transition: all 1s;
}
@keyframes btn-1 {
  0%{transform: translateY(0px);}
  50%{transform: translateY(-10px);}
  100%{transform: translateY(0px);}
}
.btn-1:hover{
  transform: translateY(-20px);
}
.title1 {
  height: 55px;
  width: 365px;
  margin: 0 auto 10px;
  background: url("../photo/title1.png") center no-repeat;
}
.main-3 {
  width: 100%;
  height: 1000px;
  background: url(" ../photo/four.jpg") center center no-repeat;
  background-size: auto;
}
.lun{
    margin: 50px auto; 
    width: 100%;
    height: 340px;
}
.footer{
  margin-top:200px ;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
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
</style>
