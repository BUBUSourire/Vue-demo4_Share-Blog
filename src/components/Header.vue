<template>
  <header :class="{login:isLogin,'no-login':!isLogin}">
    <template v-if="!isLogin">
      <h1>LET'S SHARE</h1>
      <p>精品博客汇聚</p>
      <div class="buttons">
        <el-button>立即登录</el-button>
        <el-button>注册账号</el-button>
      </div>
    </template>
    <template v-if="isLogin">
      <h1>LET'S SHARE</h1>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gangbi"></use>
      </svg>
      <div class="head-portrait">
        <router-link to="/user">
          <img src="../assets/user.png" alt="">
        </router-link>
      </div>
    </template>
  </header>
</template>

<script>
    export default {
        data() {
            return {
                isLogin: true
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
      width: 40px;
      height: 40px;
      color: #ffffff;
      padding: 15px 0;
    }
    .head-portrait {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      border:1px solid #ffffff;
      position: absolute;
      right: 12%;
      top: 0;
      margin: 5px 0;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
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
        right: 60px;
        top: 50%;
        margin-top: -25px;
        width: 20px;
        height: 20px;
        color: #ffffff;
      }

      .head-portrait {
        width: 28px;
        height: 28px;
        border-radius: 100%;
        border:1px solid #ffffff;
        position: absolute;
        right: 15px;
        top: 50%;
        margin-top: -14px;

        img {
          width: 28px;
          height: 28px;
        }
      }
    }
  }

</style>
