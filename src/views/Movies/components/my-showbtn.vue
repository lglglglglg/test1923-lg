<template>
  <div class="my-showbtn">
    <!-- <span>正在热映</span> -->
    <router-link
      tag="span"
      v-for="(item,index) in tab"
      :key="index"
      :to="item.path"
      active-class="sel"
    >{{item.name}}</router-link>
  </div>
</template>
<script>
import myShowing from "./my-showing";
import myTobeshow from "./my-tobeshow";
export default {
  components: { myTobeshow },
  data() {
    return {
      tab: [
        { name: "正在热映", path: "/movie/showing" },
        { name: "即将上映", path: "/movie/tobeshow"}
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "../../../style/index.less";
.my-showbtn {
  font-size: 15px;
  color: #666;
  width: 80px;
  width: 21.33333vw;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
  span {
    font-size: 15px;
    color: #666;
    width: 80px;
    width: 21.33333vw;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
  }
}
</style>