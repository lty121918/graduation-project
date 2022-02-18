<template>
  <div class="login">
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-form label-width="80px" :model="formLabelAlign">
        <el-form-item label="手机号">
          <el-input v-model="formLabelAlign.name"></el-input>
          <el-button type="primary" v-show="timeTrue == true" @click="acquire"
            >获取验证码</el-button
          >
          <el-button type="primary" v-show="timeTrue == false"
            >{{ time }}秒后重新获取</el-button
          >
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.password"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      timeTrue: true,
      time: 0,
      formLabelAlign: {
        name: "",
        password: "",
      },
       dialogFormVisible: false,
       dialogTableVisible: true,
    };
  },
  props: {},
  methods: {
    acquire() {
      this.timeTrue = false;
      this.time = 60;
      var setTimeoutS = setInterval(() => {
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

  .login__mask {

  }
  .login__content {

  }
}
</style>
