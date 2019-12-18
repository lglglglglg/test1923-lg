<template>
  <div class="movies">
    <h1>猫眼电影</h1>
    <!-- 地点 即将上映 正在热映按钮 -->
    <div class="control">
      <div class="maoyan-app">
        <img src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png" alt />
        <div class="appname">
          <div class="appname1">猫眼</div>
          <div class="appname2">在线选座，热门影讯，爱上看电影</div>
        </div>
        <div class="appbtn">立即打开</div>
      </div>
      <div class="btns">
        <!-- 城市定位组价 -->
        <my-city></my-city>
        <div class="my-showbtn">
          <my-showbtn></my-showbtn>
          <router-view></router-view>
          <!-- 正在上映组件 -->
          <!-- <my-showing></my-showing> -->

          <!-- 即将上映组件 -->
          <!-- <my-tobeshow></my-tobeshow> -->
          <!-- <router-view></router-view> -->
        </div>
        <!-- 搜索组件 -->
        <my-search></my-search>
      </div>
    </div>

    <!--  -->
  </div>
</template>

<script>
// 引入城市定位组件
import myCity from "../../components/my-city.vue";
// 引入正在热映组件
import myShowing from "../Movies/components/my-showing";
// 引入即将上映组件
import myTobeshow from "../Movies/components/my-tobeshow";
// 引入搜索组件
import mySearch from "../Movies/components/my-search";
import myShowbtn from "../Movies/components/my-showbtn";



import BS from "better-scroll";
export default {
  // 引过来的组件注册一下
  components: { myCity, myShowbtn, mySearch, myTobeshow,myShowing },
  data() {
    return{

    }
   
  },
  methods: {
    initBs() {
      this.bs = new BS(".wrapper", { probeType: 3, click: true });
    }
  },
  created() {
   
  }
};
</script>

<style lang="less" >
@import "../../style/index.less";
.movies {
  .w(375);
  height: 50.5px;
  background: #e54847;
  h1 {
    .w(375);
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
  }
  .control {
    .w(375);
    height: 109px;
    .maoyan-app {
      position: relative;
      height: 63px;
      background-color: #fff;
      border-bottom: 1px solid #e6e6e6;
      img {
        position: absolute;
        left: 15px;
        top: 11px;
        width: 44px;
        height: 44px;
      }
      .appname {
        position: absolute;
        left: 66px;
        top: 13px;
        .appname1 {
          font-size: 17px;
          color: #222;
          line-height: 23px;
        }
        .appname2 {
          font-size: 12px;
          color: #999;
        }
      }
      .appbtn {
        position: absolute;
        right: 15px;
        top: 17px;
        width: 68px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #ef4238;
        border-radius: 3px;
        font-size: 13px;
        color: #fff;
      }
    }
    .btns {
      height: 44px;
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      -webkit-box-align: center;
      align-items: center;

      -webkit-box-pack: justify;
      justify-content: space-between;
      .my-showbtn {
        display: flex;
        .w(208);
        height: 44px;
        line-height: 44px;
        position: relative;
        font-size: 15px;
      }
    }
  }
}
</style>