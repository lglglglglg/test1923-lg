<template>
  <div class="my-showing" @click="jump">
    <!-- {{item.name}} -->
    正在热映
  </div>
</template>
<script>
export default {
  methods: {
    jump() {
      console.log(222);
    }
  },
  data() {
    return {
      tab: [
        // {
        //   name: "正在热映",
        //   path: "/showing"
        // }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "../../../style/index.less";
// .my-showing {
//   position: fixed;
//   top: 158.5px;
// }
</style>