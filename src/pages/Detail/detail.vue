<template>
  <div id="detail">
    <section class="content">
      <span class="head-portrait">
        <router-link :to="`/user/${user.id}`">
          <img :src="avatar" :alt="user.username" :title="user.username">
        </router-link>
      </span>
      <div>
        <h3>
          {{title}}
        </h3>
        <p><span class="name"><router-link :to="`/user/${user.id}`">{{user.username}}</router-link></span>
          发布于<span>{{createdAt | formatDate}}</span></p>
      </div>
    </section>
    <section class="article" v-html="markdown">

    </section>
  </div>
</template>

<script src="./detail.js"></script>

<style src="./detail.less" scoped lang="less"></style>
