import marked from 'marked';
import blog from "../../api/blog";

export default {
  data() {
    return {
      title: '',
      detailContent: '',
      user: {},
      createdAt: '',
      avatar:''
    }
  },
  created(){
    this.blogId = this.$route.params.blogId
    blog.getDetail({blogId:this.blogId}).then(res => {
      console.log(res)
      this.user = res.data
      this.avatar = res.data.user.avatar
      this.title = res.data.title
      this.detailContent = res.data.content
      this.createdAt = res.data.createdAt
    })
  },
  computed: {
    markdown() {
      return marked(this.detailContent)
    }
  }
}
