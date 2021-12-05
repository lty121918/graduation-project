<template>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
</template>

<script>
// import { onUnmounted, reactive } from "vue";
import Header from "./components/Header.vue";
import Footer from "@/components/Footer.vue";
// import { useRouter } from "vue-router";
// import { pathMap, localGet } from "@/utils";
export default {
    name: "App",
    components: {
        Header,
        Footer,
    },
    setup() {},
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>

