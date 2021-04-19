<template>
  <div class="login">
    <div class="login-info">
      <el-form ref="form" :model="form" label-width="80px">
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
        <el-form-item label="年龄">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="radio" label="男">男</el-radio>
          <el-radio v-model="radio" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="本人姓名">
          <el-input v-model="form.name" placeholder="请输入真实姓名"></el-input>
        </el-form-item>
        <el-form-item label="电话号码">
          <el-input
            v-model="form.phone"
            placeholder="请输入电话号码"
          ></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-input
            v-model="form.email"
            placeholder="请输入电子邮箱"
          ></el-input>
        </el-form-item>
        <el-form-item label="个人头像">
          <el-upload
            action="http://localhost:8080/login"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
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
      dialogImageUrl: "",
      dialogVisible: false,
      radio: "",
      form: {
        username: "",
        password: "",
        age: "",
        name: "",
        phone: "",
        email: "",
      },
    };
  },
  methods: {
    onSubmit() {
      let username = this.form.username;
      let password = this.form.password;
      let age = this.form.age;
      let name = this.form.name;
      let phone = this.form.phone;
      let email = this.form.email;
      let sex = this.radio;
      let registstate = false;
      if (
        username != "" &&
        password != "" &&
        age != "" &&
        name != "" &&
        phone != "" &&
        sex != "" &&
        email != ""
      ) {
        axios
          .post("/api/user/selectUser", {
            username,
          })
          .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
              if (username == res.data[i].username) {
                registstate = true;
                this.$message.error('此账号已经被注册，请重新注册！');
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
        axios
          .post("/api/user/addUser", {
            username,
            password,
            age,
            name,
            phone,
            email,
            sex,
          })
          .then((res) => {
            if(registstate == false){
              this.$router.push({ path: "/login" });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("请输入完整信息！");
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
.login-info {
  width: 500px;
  margin: 100px auto 0;
}
.login {
  width: 100%;
  background: url("../photo/loginbg.jpg") no-repeat;
  background-size: cover;
  background-position-y: -10px;
  overflow: hidden;
}
</style>