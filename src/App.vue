<template>
  <div id="app">
    <!-- 底部的tab -->
    <my-footer></my-footer>
    <!-- 路由组件 一定套 记得 不然无法显示 -->
    <router-view></router-view>
  </div>
</template>
<script>
import myFooter from "./components/my-footer.vue";
export default {
  components: { myFooter }
};
</script>
<style lang="less">
@import "./style/index.less";

#app {
  background: #ccc;
}
</style>
