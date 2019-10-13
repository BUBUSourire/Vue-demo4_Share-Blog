import request from "../../helpers/request.js";
import auth from "../../api/auth.js";
import blog from "../../api/blog.js";

window.auth = auth
window.blog = blog
window.request = request

export default {
  name: "Login",
  methods: {
    onClick1() {
      this.$message('这是一条消息提示');
    }
  }
}
