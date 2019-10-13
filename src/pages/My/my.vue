<template>
  <div id="my">
    <section class="content">
      <figure class="user-head">
        <span class="head-portrait">
          <router-link to="/user">
            <img src="../../assets/user.png" alt="">
          </router-link>
        </span>
        <figcaption>
          <router-link to="/user">
            BUBU_Sourire
          </router-link>
        </figcaption>
      </figure>
      <figure class="user-blog">
        <div class="date">
          <span>13</span>
          <span>10月</span>
          <span>2019</span>
        </div>
        <div class="blog-content">
          <h3>
            <router-link to="/detail">
              前端异步大揭秘
            </router-link>
          </h3>
          <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
            模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
          <p><span>编辑</span><span>删除</span></p>
        </div>
      </figure>
    </section>
  </div>
</template>

<script src="./my.js"></script>

<style src="./my.less" scoped lang="less"></style>
