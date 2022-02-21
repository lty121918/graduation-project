<template>
  <div class="ellipsis" :style="textStyle">
    <div v-if="isShow">
      {{ textData }}
      <a class="ellipsis_button" @click="moreState">展开</a>
    </div>
    <div v-else>
      {{ text }}
      <a class="ellipsis_button" @click="moreState('hi')">收起</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ellipsis",
  data() {
    return {
      textData: this.text,
      isShow: this.showMore,
    };
  },
  props: {
    text: {
      type: String,
      default: "",
      required: true,
    },
    textStyle: {
      type: Object,
      default: () => {},
    },
    showMore: {
      type: Boolean,
      default: true,
      //默认是缩减，待展开
    },
  },
  watch: {
    text(newVal, oldVal) {
      this.textData = newVal;
      this.textData = this.cutString(this.textData, 100);
    },
  },
  methods: {
    moreState(nums) {
      this.isShow = !this.isShow;
      console.log(this.isShow);
    },
    //检查字符串切割
    cutString(str, len) {
      if (str.length * 2 <= len) {
        return str;
      }
      let strlen = 0;
      let s = "";
      for (let i = 0; i < str.length; i++) {
        s = s + str.charAt(i);
        if (str.charCodeAt(i) > 128) {
          strlen = strlen + 2;
          if (strlen >= len) {
            return s.substring(0, s.length - 1) + "...";
          }
        } else {
          strlen = strlen + 1;

          if (strlen >= len) {
            return s.substring(0, s.length - 2) + "...";
          }
        }
      }
      return s;
    },
  },
};
</script>

<style>
.ellipsis_button {
  display: inline-block;
  color: #06c;
  margin-left: 10px;
  font-size: 14px;
  cursor: pointer;
}
</style>
