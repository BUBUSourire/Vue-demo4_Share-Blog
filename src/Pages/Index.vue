<template>
  <div id="index">
    <section class="index-content" v-for="blog in blogs" :key="blog.id">

      <router-link :to="`/user/${blog.user.id}`">
        <div class="index-user-content">
          <img :src="blog.user.avatar" :alt="blog.user.username" class="avatar">
          <span>{{blog.user.username}}</span>
        </div>
      </router-link>

      <div class="index-blog">
        <router-link :to="`/detail/${blog.id}`">
          <div class="blog-content">
            <h4>{{blog.title}}</h4>
            <p>{{blog.description}}</p>
          </div>
        </router-link>
        <div class="time-content">
          发布于<span>{{friendlyDate(blog.createdAt)}}</span>
        </div>
      </div>

    </section>

    <el-pagination
      background
      layout="prev, pager, next"
      :current-page="page"
      :total="total"
      @current-change="onPageChange">
    </el-pagination>
  </div>
</template>

<script>

    import blog from "../api/blog";

    export default {
        name: "Index.vue",
        data() {
            return {
                blogs: [],
                blog: {},
                total: 0,
                page: 1
            }
        },
        created() {
            this.page = parseInt(this.$route.query.page) || 1
            blog.getIndexBlogs({page: this.page}).then(res => {
                this.blogs = res.data
                this.total = res.total
                this.page = res.page
            })
        },
        methods: {
            onPageChange(page) {
                blog.getIndexBlogs({page}).then(res => {
                    this.blogs = res.data
                    this.total = res.total
                    this.page = res.page
                    this.$router.push({path: '/', query: {page}})
                })
            }
        }
    }
</script>

<style scoped lang="scss">

  @import "../assets/base";


  #index {
    .el-pagination {
      margin-top: 20px;
      text-align: center;
    }

    .mobile-pagination {
      display: none;
    }


    .index-content {
      padding: 10px 0;
      width: 100%;
      display: flex;

      .index-user-content {
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
          margin-top: 5px;
          font-size: 12px;
          max-width: 5em;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis
        }

        .avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
    }

    .index-blog {
      width: 100%;
      margin-left: 10px;
      display: flex;
      justify-content: space-between;

      .time-content {
        color: #bbb;
        font-size: 10px;

        span {
          color: $font-color;
        }
      }

      .blog-content {
        h4 {
          padding-bottom: 10px;
          max-width: 8em;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        p {
          font-size: 14px;
          margin-top: 10px;
          overflow:hidden;
          text-overflow:ellipsis;
          display:-webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:2;
        }
      }
    }
  }

  @media (max-width: 769px) {
    #index {
      p {
        max-width: 350px;
      }
      h4 {
        max-width: 350px;
      }
    }
  }

  @media (max-width: 765px) {
    #index {
      .index-content {
        .index-user-content {
          .avatar {
            width: 40px;
            height: 40px;
          }
        }

        .index-blog {
          span {
            font-size: 14px;
          }

          p {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media (max-width: 426px) {
    #index {
      .index-content {
        h4 {
          font-size: 16px;
        }

        .index-blog{
          p {
            width: 200px;
          }
          h4 {
            width: 200px;
          }
          .time-content {
            span {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 376px){
    #index {
      .index-content {
        h4 {
          font-size: 14px;

        }

        .index-blog{
          .blog-content {
            width: 100px;
          }
        }
      }
    }
  }
</style>
