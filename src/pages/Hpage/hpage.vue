<template>
  <div id="hpage">
    <section class="content" v-for="(blog,index) in blogs" :key="index">
      <div class="user-blog">
        <figure class="user-head">
          <span class="head-portrait">
            <router-link :to="`/user/${blog.user.id}`">
              <img :src="blog.user.avatar" :alt="blog.user.username">
            </router-link>
          </span>
          <figcaption>
            <router-link :to="`/user/${blog.id}`">
              {{blog.user.username}}
            </router-link>
          </figcaption>
        </figure>
        <figure>
          <router-link :to="`/detail/${blog.id}`">
            <h3>
              {{blog.title}}
            </h3>
          </router-link>
          <span>{{blog.updatedAt | formatDate}}</span>
          <router-link :to="`/detail/${blog.id}`">
            <p>{{blog.description}}</p></router-link>
        </figure>
      </div>
    </section>
    <section>
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        @current-change="onPageChange"
      >
      </el-pagination>
    </section>
  </div>
</template>

<script src="./hpage.js"></script>

<style scoped lang="less" src="./hpage.less"></style>
