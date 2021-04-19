<template>
    <div class="shop">
        <div class="shop-nav">
            <div class="nav-main">
                <ul>
                    <li><p @click="login">用户登录</p></li>
                    <li><p @click="regist">用户注册</p></li>
                </ul>
            </div>
            <div class="shop-main"></div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods:{
        login(){
            this.$router.push({path:'/login'})
        },
        regist(){
            this.$router.push({path:'/regist'})
        }
    },
    mounted:function(){
        if(JSON.parse(window.sessionStorage.getItem("login")==null)){
            alert("请先登录后再浏览商城！");
            this.$router.push({path:'/login'})
        }
    }
}
</script>

<style scoped>
.shop-main{
    width: 1200px;
    margin: 50px auto;
}
.nav-main>ul>li>p:hover{
    cursor: pointer;
}
.nav-main>ul>li>p{
    margin: 0 20px;
    line-height: 40px;
    color: white;
    font-weight: bold;
}
.nav-main>ul{
    display: flex;
    justify-content: space-between;
}
*{
    list-style: none;
    margin: 0;
    padding: 0;
}
.nav-main{
    width: 1200px;
    height: 40px;
    margin: 0 auto;
}
.shop-nav{
    width: 100%;
    height: 40px;
    margin-top: 60px;
    background: black;
}
.shop{
    width: 100%;
    height: 1080px;
    background: url("../photo/infobg.jpg")no-repeat;
    background-size: cover;
}
</style>