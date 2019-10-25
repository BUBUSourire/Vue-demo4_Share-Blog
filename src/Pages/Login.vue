<template>
  <div id="login">
    <h4>用户名</h4>
    <el-input v-model="username" placeholder="用户名"></el-input>
    <h4>密码</h4>
    <el-input v-model="password" type="password" placeholder="密码" @keyup.enter="onLogin" ></el-input>
    <el-button size="medium" @click="onLogin"><a href="#">立即登录</a></el-button>
    <p class="notice">没有账号？<router-link to="/register">注册新用户</router-link></p>
  </div>
</template>

<script>

  import {mapActions} from 'vuex'

    export default {
        name: "Login.vue",
        data(){
            return {
                username:'',
                password:''
            }
        },
        methods:{
            ...mapActions(['login']),
            onLogin(){
                this.login({username:this.username,password:this.password})
                    .then(()=>{
                        this.$router.push({path: this.$route.query.redirect || '/'})
                    })
            },

        }
    }
</script>

<style scoped lang="scss">

  @import "../assets/base";

  #login {
    display: grid;
    justify-content: center;
    padding-top: 50px;

    h4 {
      margin-top: 30px;
    }

    p {
      margin: 5px 0;
    }

    .el-input {
      width: 350px;
      padding: 10px 0;
      text-align: center;
    }

    .error {
      font-size: 12px;
      color: #f00;
    }

    button {
      margin-top: 30px;
      justify-self: start;

      &:hover {
        color: $font-color;
        background-color: $footer-background-color;
      }
    }

    .notice {
      font-size: 12px;
      text-align: center;
      margin-top: 30px;

      a {
        color: #8b56fc;
      }
    }

  }

  @media (max-width: 770px) {
    #login {
      padding-top: 0;
    }
  }

  @media (max-width: 430px) {
    #login {
      .el-input {
        width: 250px;
      }
    }
  }
</style>
