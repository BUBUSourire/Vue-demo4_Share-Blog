<template>
  <div id="my">
    <section class="my-content">
      <img :src="user.avatar" :alt="user.name" class="avatar">
      <h3>{{user.username}}</h3>
    </section>
    <section class="my-blog" v-for="blog in blogs" :key="blog.id">
      <div class="my-date">
        <span class="day">{{splitDate(blog.createdAt).date}}</span>
        <span class="month">{{splitDate(blog.createdAt).month}}</span>
        <span class="year">{{splitDate(blog.createdAt).year}}</span>
      </div>
      <div class="my-blog-list">
        <router-link :to="`/detail/${blog.id}`">
          <h3>{{blog.title}}</h3>
          <p>{{blog.description}}</p>
        </router-link>
        <router-link :to="`/edit/${blog.id}`">
          <span>编辑</span>
        </router-link>
        <span @click.prevent="onDelete(blog.id)">删除</span>
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
    import {mapGetters} from "vuex"

    export default {
        name: "My",
        data() {
            return {
                page: 1,
                total: 0,
                blogs: [],
                blog: {}
            }
        },
        computed: {
            ...mapGetters(['user'])
        },
        created() {
            this.page = parseInt(this.$route.query.page) || 1
            blog.getBlogsByUserId(this.user.id, {page: this.page}).then(res => {
                console.log(res)
                this.page = res.page
                this.total = res.total
                this.blogs = res.data
            })
        },
        methods: {
            splitDate(dataStr) {
                let dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
                return {
                    date: dateObj.getDate(),
                    month: dateObj.getMonth() + 1,
                    year: dateObj.getFullYear()
                }
            },
            onPageChange(page) {
                blog.getBlogsByUserId(this.user.id, {page}).then(res => {
                    this.blogs = res.data
                    this.total = res.total
                    this.page = res.page
                    this.$router.push({path: "/my", query: {page}})
                })
            },
            onDelete(blogId) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    return blog.deleteBlog({blogId})
                }).then(() => {
                    this.$message.success('删除成功')
                    this.blogs = this.blogs.filter(blog => blog.id !== blogId) //过滤
                })
            }
        }
    }
</script>

<style scoped lang="scss">

  @import "../assets/base";

  #my {

    .el-pagination {
      margin-top: 20px;
      text-align: center;
    }

    .my-content {
      display: flex;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #ccc;

      .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }

      h3 {
        margin-left: 20px;
      }
    }

    .my-blog {
      padding: 20px 0;
      display: flex;
      border-bottom: 1px solid #eee;

      .my-blog-list {
        p {
          margin: 10px 0 10px 0;
        }

        span {
          cursor: pointer;
          font-size: 12px;
          color: $font-color;
        }
      }

      .my-date {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        color: #bbb;
        text-align: center;

        .day {
          font-size: 40px;
        }
      }

      p {
        margin-top: 10px;
      }
    }
  }

  @media (max-width: 430px) {
    #my {
      h3 {
        font-size: 16px;
      }
      p {
        font-size: 12px;
      }
    }
  }

</style>
