<template>
    <div>
        <h2>{{title}}</h2>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>  
        <el-button type="info" @click="loginOut">退出</el-button>      
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"主页"
        }
    },
    methods:{
        loginOut(){
            window.sessionStorage.clear();
            this.$router.push('/login');
        }
    }
}
</script>