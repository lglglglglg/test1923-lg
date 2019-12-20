<template>
  <div class="cinema-detail">
    <div class="ttop">
      <div class="back" @click="back">back</div>
      <h1>{{cinematit}}</h1>
    </div>
    <!-- 下载app -->
    <div class="maoyan-app">
      <img src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png" alt />
      <div class="appname">
        <div class="appname1">猫眼</div>
        <div class="appname2">在线选座，热门影讯，爱上看电影</div>
      </div>
      <div class="appbtn">立即打开</div>
    </div>
    <!-- 大wrapper -->
    <div class="body-wrap">
      <!-- 该影院的拍片list -->
      <!-- <div class="cinema-wrap"> -->
      <!-- 组件 -->
      <my-cinemawrap></my-cinemawrap>
      <!-- </div> -->

      <!-- 时间 场次 组件 -->
      <!-- <div class="my-moviedate">
        <div class="cont-wrap">
          <div class="topDate">
            <ul>
              <li v-for="(item,index) in dateList" :key="index" active-class="sel">123</li>
            </ul>
          </div>
          <div class="showTime"></div>
        </div>
      </div>-->

      <!-- <my-moviedate></my-moviedate> -->
      <!-- snack shop 小吃-->
      <my-snack></my-snack>
    </div>
  </div>
</template>

<script>
// 引用获取影院的详情页数据的方法
import { getCinemaDetailList } from "../../api/cinema.js";
// 引用 该影院要放的电影的组件
import myCinemawrap from "./cinemaDetails/my-cinemawrap.vue";
// 引用 场次时间 的组件
// import myMoviedate from "./cinemaDetails/my-moviedate.vue";

// 引用小吃组件
import mySnack from "./cinemaDetails/my-snack.vue";

export default {
  // 注册组件
  components: { myCinemawrap,mySnack },
  data() {
    return {
      cinematit: []
      // dateList:[]
    };
  },
  methods: {
    back() {
      this.$router.push("/cinema");
    }
  },
  created() {
    // 获取影院详情数据
    // 首先接受一下参数的id
    let { id } = this.$route.params;
    // console.log(this.$route)
    getCinemaDetailList(id).then(res => {
      console.log(res);
      let cinematit = res.cinemaData.nm;
      console.log(cinematit);
      this.cinematit = cinematit;
    });
  }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";
.cinema-detail {
  //   height: 800px;
  overflow-y: scroll;
  background: #fff;
  .fixed(0, 0, 0, 0);
  z-index: 11111;
  .ttop {
    background: #e54847;
    .w(375.2);

    .back {
      float: left;
      .w(75.1);
      color: #fff;
      font-size: 14px;
      text-align: center;
      line-height: 50px;
      background: #e54847;
    }
    h1 {
      .w(300.1);

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
  // 下载app
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

  // 拍片的组件
  // .my-cinemawrap {
  //   .w.(375);
  //   height: 275px;
  // }
}
</style>