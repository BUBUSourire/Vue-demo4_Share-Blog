<template>
  <div id="user">
    <section class="user-content">
      <img :src="user.avatar" :alt="user.name" class="avatar">
      <h3>{{user.username}}</h3>
    </section>
    <section class="user-blog" v-for="blog in blogs" :key="blog.id">
      <div class="user-date">
        <span class="day">{{splitDate(blog.createdAt).date}}</span>
        <span class="month">{{splitDate(blog.createdAt).month}}</span>
        <span class="year">{{splitDate(blog.createdAt).year}}</span>
      </div>
      <router-link :to="`/detail/${blog.id}`">
        <div class="user-blog-list">
          <h3>{{blog.title}}</h3>
          <p>{{blog.description}}</p>
        </div>
      </router-link>
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
        name: "User",
        data() {
            return {
                page: 1,
                total: 0,
                blogs: [],
                user: {},
                blog: {}
            }
        },
        created() {
            this.userId = this.$route.params.userId
            this.page = parseInt(this.$route.query.page) || 1
            blog.getBlogsByUserId(this.userId, {page: this.page}).then(res => {
                console.log(res)
                this.page = res.page
                this.total = res.total
                this.blogs = res.data
                if (res.data.length > 0) {
                    this.user = res.data[0].user
                }
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
                blog.getBlogsByUserId(this.userId,{page}).then(res => {
                    this.blogs = res.data
                    this.total = res.total
                    this.page = res.page
                    this.$router.push({path: `/user/${this.user.id}`, query: {page}})
                })
            }
        }
    }
</script>

<style scoped lang="scss">
  #user {

    .el-pagination {
      margin-top: 20px;
      text-align: center;
    }

    .user-content {
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

    .user-blog {
      padding: 20px 0;
      display: flex;
      border-bottom: 1px solid #eee;

      .user-blog-list {
        p {
          margin-top: 20px;
        }
      }

      .user-date {
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

</style>
