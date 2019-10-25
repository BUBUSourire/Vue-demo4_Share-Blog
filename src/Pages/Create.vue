<template>
  <div class="create">
    <div id="create">
      <h1>创建文章</h1>
      <h3>文章标题</h3>
      <el-input v-model="title" placeholder="请输入不超过15个字" maxlength="15"></el-input>
      <h3>内容简介</h3>
      <el-input type="textarea" v-model="description" :autosize="{ minRows: 6, maxRows: 6}" placeholder="请输入不超过30个字" maxlength="30"></el-input>
      <h3>文章内容</h3>
        <el-input type="textarea" v-model="content" :autosize="{ minRows: 7, maxRows: 7}"></el-input>
      <p>
        <label>是否展示到首页</label>
        <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </p>
      <el-button @click="onCreate">确定</el-button>
    </div>
  </div>
</template>

<script>

  import blog from '../api/blog'

    export default {
        name: "Create",
        data(){
            return {
                atIndex:false,
                title:'',
                description:'',content:''
            }
        },
        methods:{
            onCreate(){
                blog.createBlog({title:this.title,content:this.content,description:this.description,atIndex:this.atIndex})
                    .then(res=>{
                        this.$message.success(res.msg)
                        this.$router.push({path:`/detail/${res.data.id}`})
                    })
            }
        }
    }
</script>

<style scoped lang="scss">

  p {
    padding: 5px 0;
  }

  h3 {
    margin: 10px 0;
  }

  .el-button {
    margin: 10px 0;
    padding: 10px 20px;
  }

  @media (max-width: 426px){
    h1 {
      font-size: 20px;
    }
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }

</style>
