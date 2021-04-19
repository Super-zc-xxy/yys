<template>
  <div class="hello">
    <div class="nav" @mouseover="mouseover">
      <li>{{ msg }}</li>
      <el-collapse-transition>
        <div class="nav-1" v-show="show1" @mouseout="mouseout">
          <div class="main">
            <div class="head" >{{pchead}}</div>
            <div class="side-0">
              <div class="side" v-for="(item) in pc">{{ item }}</div>
            </div>
          </div>
          <div class="main">
            <div class="head">{{pchead1}}</div>
            <div class="side-0">
              <div class="side" v-for="item in mobil">{{item}}</div>
            </div>
          </div>
          <div class="main">
            <div class="head">{{pchead2}}</div>
            <div class="side-0">
              <div class="side" v-for="item in fuzhu">{{item}}</div>
            </div>
          </div>
        </div>
      </el-collapse-transition>
    </div>
    <div class="nav-0"><img src="../photo/logo.png" alt="" /></div>
    <div class="nav-2"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "游戏全目录",
      pchead:"客户端游戏",
      pchead1:"手机游戏",
      pchead2:"游戏辅助",
      pc: ["守望先锋", "炉石传说","魔兽世界","我的世界","大话西游3","天谕","梦幻西游pc端","荒野行动PLUS"],
      mobil:["阴阳师","梦幻西游","大话西游","荒野行动","第五人格","决战！平安京","明日之后","倩女幽魂"],
      fuzhu:["网易BUFF","网易大神","网易CC","藏宝阁"],
      show1: false,
    };
  },
  methods: {
    mouseover: function () {
      this.show1 = true;
    },
    mouseout: function () {
      this.show1 = !this.show1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  position: fixed;
  top: 0;
  left: 0;
}
.hello {
  width: 100%;
  height: 60px;
  display: flex;
  top: 0;
  position:fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 999;
}
.nav {
  width: 200px;
  height: 60px;
  background-color: rgb(221, 76, 76);
}
.nav li {
  margin-left: 30%;
  line-height: 60px;
  list-style: none;
  color: white;
}
.nav-0 {
  width: 200px;
  height: 60px;
  margin-left: 30%;
}
.nav-1 {
  width: 1525px;
  height: 400px;
  background-color: rgb(250, 248, 248);
}
.nav-2 {
  margin-left: 30%;
  width: 13%;
  height: 60px;
}
.main {
  float: left;
  width: 32%;
  height: 400px;
  background-color: rgba(250, 248, 248);
}
.head {
  height: 40px;
  width: 483px;
  line-height: 40px;
  background-color: rgb(218, 226, 223);
  font-size: 20px;
  font-weight: bold;
  border-right: 5px solid gray;
  color: rgb(178,44,45);
}
.side {
  margin-left: 20%;
  height: 40px;
  width: 79%;
  line-height: 40px;
  background-color: rgb(250, 248, 248);
}
.side:hover{
  color: red;
  cursor: pointer;
}
.side-0 {
  height: 340px;
  width: 250px;
}
</style>
