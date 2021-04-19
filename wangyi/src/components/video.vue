<template>
    <div class="video">
        <div class="video-main">
            <router-view></router-view>
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
        if(this.$route.params.id == 1){
            this.$router.push({path:'/video1'})
        }
        if(this.$route.params.id == 2){
            this.$router.push({path:'/bizhi'})
        }
    }
}
</script>

<style scoped>
.video-main{
    width: 1300px;
    height: 500px;
    border: 10px solid rgb(169,147,98);
    margin-top: 130px;
    background: url("../photo/stmainbg.jpg")no-repeat;
    background-size: cover;
    overflow: scroll;
}
.video-main::-webkit-scrollbar{
    display: none;
}
.video{
    width: 100vw;
    height: 100vh;
    background: url("../photo/st.jpg");
    display: flex;
    justify-content: center;
}
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
</style>