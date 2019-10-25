<template>
  <div id="register">
    <h4>用户名</h4>
    <el-input v-model="username" placeholder="用户名"></el-input>
    <h4>密码</h4>
    <el-input v-model="password" type="password" placeholder="密码" @keyup.enter="onRegister"></el-input>
    <el-button size="medium" @click="onRegister">立即注册</el-button>
    <p class="notice">已有账号？
      <router-link to="/login">立即登录</router-link>
    </p>
  </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "Register.vue",
        data(){
            return {
                username:'',
                password:''
            }
        },
        methods:{
            ...mapActions(['register']),
            onRegister(){
                this.register({username:this.username,password:this.password})
                    .then(()=>{
                        this.$router.push({path:'/'})
                    })
            },

        }
    }
</script>

<style scoped lang="scss">

  @import "../assets/base";

  #register {
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
    #register {
      padding-top: 0;
    }
  }

  @media (max-width: 380px) {
    #register {
      .el-input {
        width: 250px;
      }
    }
  }
</style>
