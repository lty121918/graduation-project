<template>
    <div class="ellipsis">
        <!-- <slot></slot> -->
        <div v-if="isShow">
            {{textData}}
            <a class="ellipsis_button" @click="moreState">展开</a>
        </div>
        <div v-else="isShow">
            {{text}}
            <a class="ellipsis_button" @click="moreState">收起</a>
        </div>

    </div>

</template>

<script>
export default {
    name: "Ellipsis",
    data() {
        return {
            textData: "",
            isShow: this.showMore,
        };
    },
    props: {
        text: {
            type: String,
            default: null,
        },
        originText: {
            type: String,
            default: null,
        },
        textStyle: {
            type: Object,
            default: () => {},
        },
        lines: {
            type: Number,
            default: 1,
        },
        showMore: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        // this.cutString(this.text, 150);
        this.textData = this.text;
    },
    watch: {
        textData: function (newVal, oldVal) {
            // this.text=oldVal;
            // this.textData=newVal;
            console.log("执行一次监听");
            console.log(newVal);
            console.log(oldVal);
            this.cutString(this.textData, 150);
        },
    },
    methods: {
        moreState() {
            this.isShow = !this.isShow;
        },
        //检查字符串切割
        cutString(str, len) {
            //length属性读出来的汉字长度为1
            console.log(str);
            if (str.length * 2 <= len) {
                return str;
            }

            var strlen = 0;

            var s = "";

            for (var i = 0; i < str.length; i++) {
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
            console.log(s);
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