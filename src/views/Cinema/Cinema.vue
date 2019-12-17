<template>
  <div class="cinema">
    <h1>影院</h1>
    <div class="top">
      <!-- 同一个定位组件 -->
      <my-city></my-city>
      <!-- 搜索框 -->
      <my-search></my-search>
    </div>
    <div class="Tab">
      <div class="tabs">
        <div class="items">
          全城
          <i class="iconfont icon-xiajiantou"></i>
        </div>
        <div class="items">
          品牌
          <i class="iconfont icon-xiajiantou"></i>
        </div>
        <div class="items">
          特色
          <i class="iconfont icon-xiajiantou"></i>
        </div>
      </div>
    </div>
    <!-- 一个大wrapper  movie list-->
    <div class="wrapper">
      <div class="content">
        <div class="it-list" v-for="(item,index) in CinemaList" :key="index">
          <!-- 具体的小盒子 -->
          <div class="it-box">
            <div class="title line-ellipsis">
              <span>{{item.nm}}</span>
              <span class="price-block">
                <span class="price">{{item.sellPrice}}</span>
                <span class="q">元起</span>
              </span>
            </div>
            <!-- 地址 -->
            <div class="location-block box-flex">
              <div class="flex1 line-ellipsis">{{item.addr}}</div>
              <div class="flex2 line-ellipsis">{{item.distance}}</div>
            </div>
            <!-- 优惠 -->
            <div class="label-block">
              <div class="allowRefund">退</div>
              <div class="endorse">改签</div>
              <div class="snack">小吃</div>
              <div class="vipTag">折扣卡</div>
            </div>
            <!-- 开卡特惠 -->
            <div class="discount-block">
              <div class="card">
                <em>卡</em>
              </div>
              <div class="discount-label-text">开卡特惠，首单2张最高立减6元</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mySearch from "../Movies/components/my-search.vue";
import myCity from "../../components/my-city.vue";
// 引入 获取影院方法
import { getCinemaList } from "../../api/cinema.js";
import BS from "better-scroll";
export default {
  components: { myCity, mySearch },
  data() {
    return {
      CinemaList: []
    };
  },
  methods: {
    initBs() {
      this.bs = new BS(".wrapper", { probeType: 3, click: true });
    }
  },
  created() {
    getCinemaList().then(res => {
      console.log(res);
      let list = res.cinemas;
      this.CinemaList = list;
      console.log(this.CinemaList);
      this.initBs();
    });
  }
};
</script>

<style lang="less" >
@import "../../style/index.less";
.cinema {
  .w(375);
  height: 50.5px;
  background: #e54847;
  position: fixed;
  top: 0;
  // left: 0;
  // right: 0;
  h1 {
    z-index: 888;
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
    // overflow: hidden;
    color: #fff;
  }
  .top {
    .w(375);
    border-bottom: 1px solid #e6e6e6;
    height: 44px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 44px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: fixed;
    top: 50.5px;
    background: #ccc;
    z-index: 888;
    // overflow: hidden;
  }
  .Tab {
    position: fixed;
    top: 95px;
    width: 100%;
    height: 40px;
    z-index: 10;
    background-color: #fff;
    border-bottom: 1px #ccc solid;
    // overflow: hidden;
    // background: #e54847;
    .tabs {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .items {
        -webkit-box-flex: 1;
        flex: 1;
        text-align: center;
        line-height: 40px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        font-size: 13px;
        text-overflow: ellipsis;
      }
    }
  }

  // list
  // wrapper
  .wrapper {
    .w(361);
    height: 520px;
    margin-top: 75px;
    overflow-y: scroll;
    .content {
      margin-top: 0px;
      min-height: 627.2px;
      .it-list {
        padding: 20px 15px 13px 0;
        margin-left: 15px;
        background-color: #fff;
        position: relative;
        overflow: hidden;
        .title {
          height: 23px;
          line-height: 23px;
          font-size: 16px;
          color: #000;
        }
        .location-block {
          margin-top: 6px;
          font-size: 13px;
          color: #666;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .flex1 {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
        .label-block {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 22px;
          line-height: 20px;
          margin-top: 8px;
          margin-bottom: 8px;
          overflow: hidden;
          font-size: 12px;
          flex-shrink: 0;
          .allowRefund {
            color: #589daf;
            border: 1px solid #589daf;
          }
          .endorse {
            color: #589daf;
            border: 1px solid #589daf;
          }
          .snack {
            color: #f90;
            border: 1px solid #f90;
          }
          .vipTag {
            color: #f90;
            border: 1px solid #f90;
          }
          div {
            width: auto;
            margin-left: 2px;
          }
        }
        .discount-block {
          color: #999;
          margin-bottom: 4px;
          margin-top: -16px;
          .card {
            width: 15px;
            height: 15px;
            position: relative;
            top: 15px;
            em {
              display: block;
              width: 15px;
              height: 15px;
              background: blue;
              font-size: 14px;
            }
          }
          .discount-label-text {
            margin-left: 20px;
            font-size: 11px;
          }
        }
      }
    }
  }
}
</style>