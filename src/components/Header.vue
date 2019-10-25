<template>
  <header :class="{'login':isLogin,'no-login':!isLogin}">
    <template v-if="!isLogin">
      <router-link to="/"><h1>LET'S START</h1></router-link>
      <p>精品博客汇总</p>
      <div class="buttons">
        <router-link to="/login">
          <el-button>立即登录</el-button>
        </router-link>
        <router-link to="/register">
          <el-button>注册账号</el-button>
        </router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <router-link to="/"><h1>LET'S START</h1></router-link>
      <div class="right-content">
        <router-link to="/create">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xinzeng"></use>
          </svg>
        </router-link>
        <div class="user">
          <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username"
               v-clickoutside="handleClose" @click="showDetail">
          <ul v-show="show">
            <router-link to="/my">
              <li>
                我 的
              </li>
            </router-link>
            <li @click="onLogout">注 销</li>
          </ul>
        </div>
      </div>
    </template>
  </header>
</template>

<script>

    //点击空白处弹框消失
    const clickoutside = {
        bind(el, binding, vnode) {
            function documentHandler(e) {
                if (el.contains(e.target)) {
                    return false;
                }
                if (binding.expression) {
                    binding.value(e);
                }
            }
            el.__vueClickOutside__ = documentHandler;
            document.addEventListener('click', documentHandler);
        },
        update() {},
        unbind(el, binding) {
            // 解除事件监听
            document.removeEventListener('click', el.__vueClickOutside__);
            delete el.__vueClickOutside__;
        },
    };


    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "Header",
        data() {
            return {
                show: false
            }
        },
        computed: {
            ...mapGetters([
                'isLogin',
                'user'
            ])
        },
        created() {
            this.checkLogin()
            this.isShow = false
        },
        directives: {clickoutside},
        methods: {
            ...mapActions([
                'checkLogin',
                'logout'
            ]),
            handleClose(e){
                this.show = false;
            },
            showDetail(){
                this.show = !this.show
            },
            onLogout() {
                this.logout()
            }
        }
    }
</script>

<style scoped lang="scss">

  @import "../assets/base";

  header.no-login {
    background-color: $background-color;
    padding: 20px 0;
    text-align: center;

    h1 {
      padding: 30px 0;
      color: #fff;
    }

    p {
      padding: 10px 0;
      color: #fff;
    }

    .buttons {
      padding: 10px 0;

      .el-button {
        padding: 6px 15px;
        background-color: #fff;

        &:hover {
          color: $font-color;
        }

        &:active {
          color: $font-color;
          border-color: $footer-background-color;
        }
      }
    }
  }

  header.login {
    background-color: $background-color;
    padding: 10px 12%;
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    h1 {
      color: #fff;
    }

    .right-content {
      display: flex;
      align-items: center;

      .icon {
        color: #fff;
        font-size: 20px;
        margin-right: 20px;
        transition: all .3s ease;
        cursor: pointer;

        &:hover {
          transform: rotate(90deg);
        }
      }

      .user {
        position: relative;
        cursor: pointer;

        .avatar {
          border-radius: 50%;
          width: 40px;
          height: 40px;
        }

        ul {
          list-style: none;
          font-size: 12px;
          position: absolute;
          color: #000;
          margin-top: 0;
          background-color: #eee;
          animation: remove 0.5s ease 0s;
          animation-fill-mode: forwards;
        }

        li {
          padding: .3em .5em;

          &:hover {
            cursor: pointer;
            color: #fff;
            background-color: #8b56fc;
          }
        }

        @keyframes remove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(10%);
          }
        }
      }
    }
  }

  @media (max-width: 765px) {
    header.login {
      h1 {
        font-size: 20px;
      }

      .right-content {
        .icon {
          font-size: 16px;
          margin-right: 15px;
        }
      }
    }
  }

</style>
