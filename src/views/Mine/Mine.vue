<template>
  <div class="mine">
    <div class="top">
      <div class="back" @click="jump">back</div>
      <h1>猫眼电影</h1>
    </div>
    <!-- <div class="mine-btn"> -->
    <mine-btn></mine-btn>
    <router-view></router-view>
    <!-- </div> -->
  </div>
</template>
<script>
import mineBtn from "./components/mine-btn.vue";
export default {
  components: {
    mineBtn
  },
  methods:{
    jump(){
         this.$router.push('/cinema');
    }
  }
};
</script>


<style lang="less" scoped>
@import "../../style/index.less";
.mine {
  height: 100%;
  z-index: 999;
  .top {
    background: #e54847;
    .w(375.2);
    // float: left;
    // height: 100px;
    // position: relative;
    .back {
      //   position: absolute;
      //   left: 0;
      float: left;
      .w(75.1);
      color: #fff;
      font-size: 14px;
      text-align: center;
      line-height: 50px;
      background: #e54847;
      //   border-right: #e54847 1px solid;
    }
    h1 {
      .w(300.1);
      //   position: absolute;

      //   float: left;
      //   left: 0;
      //   right: 0;
      margin: auto;
      display: block;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      font-size: 18px;
      font-weight: 400;
      text-align: center;
      line-height: 50px;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #fff;
      background: #e54847;
    }
  }
}
</style>