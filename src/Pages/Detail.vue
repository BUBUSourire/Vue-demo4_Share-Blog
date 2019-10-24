<template>
  <div id="detail">
    <section class="detail-title">
      <img :src="user.avatar" :alt="user.username" class="avatar">
      <figure>
        <h3>{{title}}</h3>
        <span>发布于
          <i>{{friendlyDate(createdAt)}}</i>
        </span>
      </figure>
    </section>
    <section class="detail-content" v-html="markdown"></section>
  </div>
</template>

<script>

    import blog from "../api/blog";
    import marked from "marked"

    export default {
        name: "Detail",
        data() {
            return {
                title: '',
                createdAt: '',
                rawContent: '',
                user: {}
            }
        },
        created() {
            this.blogId = this.$route.params.blogId
            blog.getDetail({blogId: this.blogId}).then(res => {
                console.log(res)
                this.user = res.data.user
                this.title = res.data.title
                this.rawContent = res.data.content
                this.createdAt = res.data.createdAt
            })
        },
        computed: {
            markdown() {
                return marked(this.rawContent)
            }
        }
    }
</script>

<style scoped lang="scss">

  @import "../assets/base";

  #detail {
    .detail-title {
      display: flex;
      padding: 20px 0;
      border-bottom: 1px solid #ccc;

      .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 20px;
      }

      figure {
        width: 100%;
        display: flex;
        flex-direction: column;

        span {
          margin-top: 15px;
          font-size: 12px;

          i {
            font-style: normal;
            color: $font-color;
          }

        }

      }
    }

    .detail-content {
      padding: 20px 0;
    }
  }
</style>
