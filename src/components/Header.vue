<template>
  <header :class="{login:isLogin,'no-login':!isLogin}">

    <template v-if="!isLogin">
      <router-link to="/">
        <h1>LET'S SHARE</h1>
      </router-link>
      <p>精品博客汇聚</p>
      <div class="buttons">
        <el-button>
          <router-link to="/login">立即登录</router-link>
        </el-button>
        <el-button>
          <router-link to="/register">注册账号</router-link>
        </el-button>
      </div>
    </template>

    <template v-if="isLogin">
      <router-link to="/">
        <h1>LET'S SHARE</h1>
      </router-link>
      <router-link to="/create">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gangbi"></use>
        </svg>
      </router-link>
      <div class="head-portrait">
        <router-link to="/my">
          <img :src="user.avatar" :alt="user.username" :title="user.username">
        </router-link>
      </div>
      <span class="delete-blog" @click="onLogout">注销</span>
    </template>
  </header>
</template>

<script>

    import auth from "../api/auth";

    window.auth = auth

    import {mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {
                // isLogin: true
            }
        },
        computed: {
            ...mapGetters([
                'isLogin',
                'user'
            ])
        },
        created() {
            this.checkLogin()//返回的是一个promise对象
        },
        methods: {
            ...mapActions([
                'checkLogin',
                'logout'
            ]),
            onLogout() {
                this.logout()
            }
        }
    }
</script>


<style lang="less" scoped>
  @import "../assets/base.less";

  header.no-login {
    padding: 0 12% 30px 12%;

    h1, p {
      color: white;
      text-align: center;
    }

    h1 {
      font-size: 40px;
      margin: 60px 0 0 0;
      font-weight: 400;
    }

    p {
      margin-top: 20px;
    }

    .buttons {
      text-align: center;
      margin-top: 60px;
    }

    button {
      padding: 5px 10px;
    }
  }

  header.login {
    padding: 0 12% 0 12%;
    position: relative;

    h1, p {
      color: white;
      text-align: center;
    }

    h1 {
      font-size: 40px;
      font-weight: 400;
      text-align: left;
    }

    .icon {
      position: absolute;
      right: 20%;
      top: 0;
      width: 35px;
      height: 35px;
      color: #ffffff;
      padding: 15px 0;
    }

    .head-portrait {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      border: 1px solid #ffffff;
      position: absolute;
      right: 15%;
      top: 0;
      margin: 5px 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .delete-blog, .my {
      display: inline-block;
      height: 20px;
      position: absolute;
      right: 12%;
      color: #ffffff;
      cursor: pointer;
      top: 30%;
    }

  }

  @media (max-width: 768px) {

    header.no-login {
      h1 {
        font-size: 20px;
        font-weight: 400;
        margin: 10px;
      }

      .buttons {
        margin-top: 30px;
      }
    }

    header.login {
      position: relative;

      h1 {
        font-size: 20px;
        text-align: left;
        margin: 10px;
      }

      .icon {
        position: absolute;
        right: 110px;
        top: 50%;
        margin-top: -25px;
        width: 25px;
        height: 25px;
        color: #ffffff;
      }

      .head-portrait {
        width: 28px;
        height: 28px;
        border-radius: 100%;
        border: 1px solid #ffffff;
        position: absolute;
        right: 10%;
        top: 50%;
        margin-top: -14px;

        img {
          width: 28px;
          height: 28px;
        }
      }

      .delete-blog {
        margin-right: -50px;
        margin-top: 5px;
      }
    }
  }

  @media (min-width: 375px) and (max-width: 426px) {
    header.login {
      .icon {
        margin-right: 5px;
      }

      .head-portrait {
        margin-right: 7%;
      }

      .delete-blog {
        margin-right: -5%;
        margin-top: 5px;
      }
    }
  }

  @media (max-width: 374px) {
    .icon {
      margin-right: 5%;
    }

    .delete-blog {
      margin-right: 0 !important;
      margin-top: 5px;
    }

    .head-portrait {
      margin-right: 12% !important;
    }
  }

</style>
