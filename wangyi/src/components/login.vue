<template>
  <div class="regist">
    <div class="regist-info">
      <el-form :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            placeholder="请输入密码"
            v-model="form.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input
            placeholder="请输入密码"
            v-model="form.password1"
            show-password
            @blur="yanzhen"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        password1: "",
      },
    };
  },
  methods: {
    onSubmit() {
      let username = this.form.username;
      let password = this.form.password;
      if(username != "" && password != ""){
          axios
        .post("api/user/selectUser", {
          username,
          password,
        })
        .then((res) => {
            let loginstate = false;
          for (let i = 0; i < res.data.length; i++) {
            if(username == res.data[i].username && password == res.data[i].password){
                alert("登录成功!");
                loginstate = true;
                window.sessionStorage.setItem("login",JSON.stringify(1))
                this.$router.push({path:'/shop'})
            }
          }
          if(loginstate == false){
                alert("您还未成为网易用户，请先注册！");
                this.$router.push({path:'/regist'})
            }
        })
        .catch((err) => {
          console.log(err);
        });
      }else{
          alert("请输入正确账号和密码")
      }
      
    },
    yanzhen() {
      if (this.form.password1 == this.form.password) {
      } else {
        alert("您输入的密码有误！请重新填写");
      }
    },
  },
  mounted: function () {},
};
</script>

<style scoped>
.regist-info {
  width: 500px;
  margin: 100px auto;
}
.regist {
  width: 100%;
  height: 100vh;
  background: url("../photo/registbg.jpg") no-repeat;
  background-size: cover;
  overflow: hidden;
}
</style>