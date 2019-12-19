<template>
  <div class="my-footer">
    <div>
      <router-link
        tag="span"
        v-for="(item,index) in tab"
        :key="index"
        :to="item.path"
        active-class="sel"
      >{{item.name}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: [
        { name: "电影", path: "/movie" },
        { name: "影院", path: "/cinema" },
        { name: "我的", path: "/mine" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "../style/index.less";
.my-footer {
  .w(375);
  height: 48px;
  overflow: hidden;
  // z-index: 9;
  //   overflow: hidden;
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  border-top: 0.5px solid #d8d8d8;
  display: -webkit-box;
  display: flex;
  justify-content: space-around;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  div {
    // // .w(25);
    // width: 25px;
    // height: 48px;
    // display: block;
    float: left;
    width: 25px;
    height: 48px;
    font-size: @fs-xss;
    line-height: 48px;
    box-sizing: border-box;
    color: #f03d37;
    position: relative;
    text-align: center;
    -webkit-box-flex: 1;
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .sel {
      color: @red;
    }
    // .imgs {
    //   display: block;
    //   width: 25px;
    //   height: 25px;
    //   margin: auto;
    //   background-repeat: no-repeat;
    //   background-size: 25px;
    // }
    span {
      line-height: 12px;
      font-size: 15px;
      color: #696969;
    }
  }
}
</style>