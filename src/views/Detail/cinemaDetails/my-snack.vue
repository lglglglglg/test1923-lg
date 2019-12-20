<template>
  <div class="my-snack">
    <div class="snack-tit">影院超值套餐</div>
    <ul>
      <li v-for="(item,index) in snacklist" :key="index">
        <img :src="item.dealList[0].imageUrl" alt />
        <div class="snack-msg">
          <div class="title">
            <span>{{item.dealList[0].titleTag}}</span>
            {{item.dealList[0].title}}
          </div>
          <div class="sell-num">{{item.dealList[0].curNumberDesc}}</div>
          <div class="price">
            <div class="sell-price">
              <span>￥</span>
              <span class="num">{{item.dealList[0].price}}</span>
            </div>
          </div>
          <div class="buy-btn">购买</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// 引用获取影院的详情页数据的方法
import { getCinemaDetailList } from "../../../api/cinema.js";
export default {
  data() {
    return {
      snacklist: []
    };
  },
  created() {
    // 获取影院详情数据
    // 首先接受一下参数的id
    let { id } = this.$route.params;
    // console.log(this.$route)
    getCinemaDetailList(id).then(res => {
      console.log("小吃", res);
      let snacklist = res.dealList.divideDealList;
      console.log("小吃详情", snacklist);

      snacklist.map((item, index) => {
console.log(item)
        //   "http://p0.meituan.net/w.h/movie/e65c1870be9a37519f2dc43316d2764e847180.png@750w_750h_1e_1c"
        // //p0.meituan.net/440.0/movie/4b94cdb55d271185e2ecb17a97a6f61f1020393.png@750w_750h_1e_1c
       item.dealList[0].imageUrl =item.dealList[0].imageUrl.replace(/w.h/, "440.0");

        return snacklist;
        // console.log(item.img);
      });
      this.snacklist = snacklist;

      //   snacklist.map((item,index)=>{
      //       console.log(item.dealList)
      //   })
    });
  }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";
.my-snack {
  .w(360);
  .h(399);
  //   position: fixed;
  //   bottom: 0;
  //   overflow-y: scroll;
  // overflow: hidden;
  //   background: #ccc;
  .snack-tit {
    line-height: 45px;
    height: 45px;
    font-size: 15px;
    color: #666;
    margin: 0 0 0 15px;
  }
  ul {
    position: relative;
    margin: 0 0 0 15px;
    li {
      cursor: pointer;
      position: relative;
      width: 100%;
      padding: 13px 0;
      overflow: hidden;
      border-bottom: 1px #ccc solid;
      img {
        display: inline-block;
        width: 92px;
        height: 92px;
        float: left;
      }
      .snack-msg {
        position: relative;
        // margin: 0 15px 0 102px;
        height: 92px;
        overflow: hidden;
        .title {
          font-size: 14px;
          line-height: 18px;
          color: #333;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          span {
            display: inline-block;
            vertical-align: top;
            margin-top: 1px;
            margin-right: 7px;
            padding: 0 4px;
            font-size: 10px;
            line-height: 15px;
            height: 15px;
            background: #f90;
            border-radius: 2px;
            color: #fff;
          }
        }
        .sell-num {
          display: inline-block;
          position: absolute;
          bottom: 34px;
          right: 0;
          line-height: 16px;
          height: 16px;
          font-size: 12px;
          color: #999;
        }
        .price {
          position: absolute;
          bottom: 0;
          left: 0;
          .sell-price {
            color: #f03d37;
            display: inline-block;
            span {
              font-size: 14px;
            }
            .num {
              font-size: 17px;
            }
          }
        }
        .buy-btn {
          position: absolute;
          right: 0;
          bottom: 0;
          display: inline-block;
          padding: 0 8px;
          height: 27px;
          line-height: 27px;
          font-size: 12px;
          border-radius: 3px;
          color: #fff;
          background-color: #f03d37;
        }
      }
    }
  }
}
</style>