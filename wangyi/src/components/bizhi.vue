<template>
  <div class="bizhi">
    <div class="logo"></div>
    <div class="demo-image__lazy">
      <el-image  :lazy="true" :src="require('../photo/img1.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img2.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img3.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img4.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img5.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img6.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img7.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img8.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img9.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img10.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img11.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img12.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img13.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img14.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img15.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img16.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img17.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img18.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img19.jpg')"></el-image>
      <el-image  :lazy="true" :src="require('../photo/img20.jpg')"></el-image>
    </div>
        <p class="p"></p>
    <div class="men">
      <img src="../photo/videomen.png" alt="" height="100%" class="men-img" />
    </div>
    <div class="foot">
      <div class="footer-2">
        <a href=""><img src="../photo/wylog.png" /></a>
        <a href=""><img src="../photo/wylogo2.png" /></a>
        <a href=""
          ><img src="../photo/wen.png" alt="" width="100%" height="100%"
        /></a>
        <a href=""
          ><img src="../photo/wen2.png" alt="" width="100%" height="100%"
        /></a>
        <div class="footer-2-1">
          <a href="">公司简介</a>&nbsp;<span>-</span>&nbsp;
          <a href="">客服服务</a>&nbsp;<span>-</span>&nbsp;
          <a href="">网易集团隐私政策及儿童个人信息保护规则</a
          >&nbsp;<span>-</span>&nbsp;
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
</template>

<script>
export default {
    data() {
        return {
          
        }
    },
};
</script>

<style scoped>
.foot {
  width: 1200px;
  margin: auto;
}
.footer-2 {
  height: 60px;
  width: 100%;
  display: flex;
  margin-top: 20px;
}
.footer-2 img {
  width: 118px;
  height: 31px;
}
.footer-2 a:nth-of-type(3) img {
  width: 31px;
  height: 31px;
  margin-left: 20px;
}
.footer-2 a:nth-of-type(4) img {
  width: 31px;
  height: 35px;
  margin-left: 20px;
}
.footer-2-1 {
  height: 40px;
  margin-left: 30px;
  font-size: 14px;
}
.footer-2-1 a {
  text-decoration: none;
}
.footer-2-1 a:hover {
  text-decoration: underline;
}
.footer-2-1 p span {
  letter-spacing: 2px;
  margin: 0 10px;
}
.men:hover .men-img {
  transform: translateY(46px);
}
.men {
  width: 200px;
  margin: 20px auto;
  height: 190px;
  overflow: hidden;
}
.p {
  background: url("../photo/videop.png") no-repeat;
  width: 50%;
  height: 30px;
  margin: 50px auto;
}
.logo{
    width: 160px;
    height: 185px;
    background: url("../photo/bizhi.png");
    margin: 50px auto;
}
.demo-image__lazy .el-image {
    display: block;
    min-height: 400px;
    margin-bottom: 10px;
}
.bizhi{
    width: 1200px;
    margin: 0 auto;
    height: 600px;
    overflow: scroll;
}
/* .bizhi::-webkit-scrollbar{
    display: none;
} */
</style>