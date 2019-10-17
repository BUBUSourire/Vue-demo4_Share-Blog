<template>
  <div id="my">
    <section class="my-inner">
      <div class="head-portrait">
        <img :src="user.avatar" :alt="user.username">
      </div>
      <h3 class="my-name">{{user.username}}</h3>
    </section>
    <section class="my-list" v-for="blog in blogs" :key="blog.id">
      <div class="date">
        <span class="day">{{splitDate(blog.createdAt).date}}</span>
        <span class="month">{{splitDate(blog.createdAt).month}}</span>
        <span class="year">{{splitDate(blog.createdAt).year}}</span>
      </div>
      <router-link :to="`/detail/${blog.id}`">
        <div class="list-content">
          <h3>{{blog.title}}</h3>
          <p>{{blog.description}}</p>
          <router-link :to="`/edit/${blog.id}`">
            <span>编辑</span>
          </router-link>
          <span><a href="#" @click.prevent="onDelete(blog.id)">删除</a></span>
        </div>
      </router-link>
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

<script src="./my.js"></script>

<style scoped lang="less" src="./my.less"></style>
