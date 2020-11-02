<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
                <img src="../../assets/logo.png" alt=""/>
            </div>

            <el-form ref="loginFormRef" label-width="0px" :model="loginForm" :rules="loginFormRules" class="login_form" >
                <el-form-item prop="username">
                    <el-input prefix-icon="el-icon-user-solid" v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"></el-input>
                </el-form-item>
                <el-form-item class="btns_from">
                   <el-button type="primary" @click="onLogin">登录</el-button>
                   <el-button type="info" @click="resetFrom">重置</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loginForm:{
                username:"lisi",
                password:"123456"
            },
            loginFormRules:{
                username:[
                    { required: true, message: '请输入名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 14, message: '长度在 6 到 14 个字符', trigger: 'blur' }                    
                ]
            }
        }
    },
    methods:{
        resetFrom:function(){
            this.$refs.loginFormRef.resetFields();
        },
        onLogin(){
             this.$refs.loginFormRef.validate(async valid=>{               
                if(!valid) return;  
                
                const params = new URLSearchParams();
                params.append('username', this.loginForm.username);
                params.append('password', this.loginForm.password);

                const {data:res} = await this.$http.post("login",params);
                console.log(res);
                this.$message.success(res);
             });
        }
    }
}
</script>
<style lang="less" scoped>
    .login_container{
        height: 100%;
        background-color: #2b4b6b;
    }
    .login_box{
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);

        .avatar_box{
            width: 130px;
            height: 130px;
            background-color: #fff;
            border: 1px solid #eee;
            border-radius: 50%;
            position: absolute;
            transform: translate(-50%,-50%);
            box-shadow: 0 0 10px #ddd;
            padding: 10px;
            left: 50%;           

            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color:#eee;
            }
        }
    }

    .login_form{
        position: absolute;
        bottom: 0px;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;

        .btns_from{
            display: flex;
            justify-content: flex-end;
        }
    }

</style>