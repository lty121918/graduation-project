<template>
  <el-dialog
    title="登陆"
    :visible.sync="dialogFormVisible"
    :modal-append-to-body="false"
    :append-to-body="true"
    custom-class="login"
  >
    <el-form :model="form">
      <el-form-item label="手机号" :label-width="formLabelWidth">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" :label-width="formLabelWidth">
        <el-input v-model="form.check" placeholder="请输入验证码"> </el-input>
        <el-button
          type="primary"
          v-show="timeTrue == true"
          @click="acquire"
          class="loginTime"
          >获取验证码</el-button
        >
        <transition name="slide-fade">
          <el-button type="primary" v-show="timeTrue == false" class="loginTime"
            >{{ time }}秒后重新获取</el-button
          >
        </transition>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">返 回</el-button>
      <el-button
        type="primary"
        @click="
          dialogFormVisible = false;
          userlogin();
        "
        >登 陆</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
import { setStorage } from "../../utils/utils";
export default {
  name: "login",
  props: ["dialog"],
  data() {
    return {
      timeTrue: true,
      time: 0,
      form:{
        phone: "11",
        check: "",
      },
      formLabelWidth: "60px",
      dialogFormVisible: false,
    };
  },
  watch: {
    dialog: function () {
      this.dialogFormVisible = true;
    },
  },
  mounted() {},
  methods: {
    userlogin() {
      this.$message({
          message: '登陆成功',
          type: 'success'
        }); 
      setStorage("user", {
        phone: this.form.phone,
        username: "用户" + this.encPhone(this.form.phone),
        circleUrl:
          "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      });
      //把成功的状态传给父组件
       this.$emit('isLogin');
       this.form.phone=null;
    },
    //给用户电话加星号
encPhone(phone) {
    let phone_ = phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
    return phone_;
},
    //发送验证码倒计时
    acquire() {
      this.timeTrue = false;
      this.time = 60;
      let setTimeoutS = setInterval(() => {
        this.time--;
        if (this.time <= 0) {
          clearInterval(setTimeoutS);
          this.timeTrue = true;
        }
      }, 1000);
    },
  },
};
</script>
<style lang="less">
.login {
  width: 430px;
  .el-form {
  }
  .el-dialog__header {
  }
  .el-dialog__body {
    padding: 30px 40px;
  }
  .loginTime {
    position: absolute;
    top: 0px;
    right: 0px;
    transition: all 1s;
    span {
      display: inline-block;
      margin: auto;
    }
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(2px);
    opacity: 0;
  }
}
</style>
