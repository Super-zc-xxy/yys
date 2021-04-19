<template>
  <div class="video1">
    <div class="logo"></div>
    <div class="main">
      <div class="video-main">
        <div class="main-top">
          <video
            src="../video/video1.mp4"
            width="100%"
            loop
            controls
            poster="../photo/video1bg.jpg"
          ></video>
        </div>
        <div class="main-bottom">烬天玉藻前</div>
      </div>
      <div class="video-main">
        <div class="main-top">
          <video src="../video/video2.mp4" width="100%" loop autoplay></video>
        </div>
        <div class="main-bottom">CG主体开场动画</div>
      </div>
      <div class="video-main-two">
        <video
          src="../video/video3.mp4"
          width="100%"
          loop
          controls
          poster="../photo/video4.jpg"
        ></video>
        <p>泷夜叉姬</p>
      </div>
      <div class="video-main-two">
        <video
          src="../video/video4.mp4"
          width="100%"
          loop
          controls
          poster="../photo/video3.jpg"
        ></video>
        <p>游戏开场CG</p>
      </div>
      <div class="video-main-two">
        <video
          src="../video/video5.mp4"
          width="100%"
          loop
          controls
          poster="../photo/video5.jpg"
        ></video>
        <p>《阴阳师》× TV动画《BLEACH境·界》限定联动</p>
      </div>
      <div class="video-main-three">
        <video
          src="../video/video6.mp4"
          width="100%"
          loop
          controls
          poster="../photo/video6.png"
        ></video>
        <p>《阴阳师》主角晴明介绍视频</p>
      </div>
      <div class="video-main-three">
        <video
          src="../video/video7.mp4"
          width="100%"
          loop
          controls
          poster="../photo/video7.png"
        ></video>
        <p>《阴阳师》主角神乐介绍视频</p>
      </div>
      <div class="video-main-three">
        <video
          src="../video/video8.mp4"
          width="100%"
          loop
          controls
          poster="../photo/video8.png"
        ></video>
        <p>《阴阳师》主角源博雅介绍视频</p>
      </div>
      <div class="video-main-three">
        <video
          src="../video/video9.mp4"
          width="100%"
          loop
          controls
          poster="../photo/video9.png"
        ></video>
        <p>《阴阳师》主角八百比丘尼介绍视频</p>
      </div>
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
    return {};
  },
  methods: {},
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
.video-main-three p {
  color: rgb(180, 161, 119);
  font-size: 14px;
  padding: 10px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.video-main-three {
  width: 23%;
  margin: 0 1%;
}
.video-main-two p {
  color: rgb(180, 161, 119);
  font-size: 20px;
  padding: 10px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.video-main-two {
  width: 30%;
  margin: 0 1%;
}
.main-bottom {
  position: absolute;
  right: 0;
  font-size: 20px;
  font-weight: bold;
  color: rgb(180, 161, 119);
}
.main-top {
  width: 500px;
}
.video-main {
  margin: 20px;
  position: relative;
}
.main {
  width: 1200px;
  margin: 0 auto;
  height: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.logo {
  width: 160px;
  height: 185px;
  background: url("../photo/videologo.png");
  margin: 50px auto;
}
.video1 {
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
}
</style>