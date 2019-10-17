<template>
  <div id="create">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title" placeholder="请输入不超过15个字" maxlength="15"></el-input>
    <h3>内容简介</h3>
    <el-input type="textarea" v-model="description" :autosize="{ minRows: 6, maxRows: 6}"></el-input>
    <h3>文章内容</h3>
    <el-input type="textarea" v-model="content" :autosize="{ minRows: 7, maxRows: 7}" ></el-input>
    <p>
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onCreate">确定</el-button>
  </div>
</template>

<script src="./create.js"></script>

<style src="./create.less" lang="less"></style>
