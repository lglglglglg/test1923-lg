<template>
  <!-- 这是即将要在该影院上映的数据 -->
  <div class="my-cinemawrap">
    <div class="body-wrapper">
      <div class="tit-info">
        <div class="cinema-nm">{{cinemamsg.nm}}</div>
        <div class="location">{{cinemamsg.addr}}</div>
        <div class="location-icon">
          <img
            src="data:image/png;base64,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"
            alt
          />
        </div>
      </div>
      <!-- 电影数据 -->
      <div class="bot-info">
        <!-- 里面放图片 -->
        <div class="movie-info">
          <div class="movie-wrapper">
            <div class="item-list" v-for="(item,index) in movies" :key="index">
              <img :src="item.img" @click="jumpimg(item.id)" />
            </div>
          </div>
        </div>
        <!-- 这儿放电影名字 和主演 -->
        <div class="detail-info">
          <!-- tit -->
          <div class="title">
            <span class="tit01">{{detaiList.nm}}</span>
            <span class="score">
              <em>{{detaiList.sc}}</em>分
            </span>
          </div>
          <div class="actor">{{detaiList.desc}}</div>
        </div>
      </div>
    </div>
    <!-- 场次 时间  -->
    <div class="my-moviedate">
      <!-- <div class="cont-wrap"> -->
      <div class="topdate">
        <ul>
          <li v-for="(item,index) in DateList" :key="index" active-class="sel">{{item.dateShow}}</li>
        </ul>
      </div>
      <!-- 该天的上映场次 -->
      <div class="vip-tips">
        <ul class="texts">
          <li class="label">折扣卡</li>
          <li class="label-text line-ellipsis">现在开卡，首单2张最高立减6元</li>
          <li class="process">20元起开卡</li>
        </ul>
      </div>
      <div class="showTime">
        <ul>
          <li v-for="(item,index) in ShowLists" :key="index">
            <!-- 开始结束时间 -->
            <div class="time-block">
              <div class="begin">{{item.tm}}</div>
              <div class="end">
                <span>{{}}</span>散场
              </div>
            </div>
            <!-- 国语2D -->
            <div class="info-block">
              <div class="lan">{{item.lang}}</div>
              <div class="hall">{{item.th}}</div>
            </div>
            <!-- 折扣 -->
            <div class="price">
              <div class="sellPr">
                ￥
                <span>{{Number(item.vipPrice)+5}}</span>
              </div>
              <div class="vipPrice">
                <span class="icon">{{item.vipPriceName}}</span>
                <span class="num">￥{{item.vipPrice}}</span>
              </div>
              <div class="extraDesc">{{item.extraDesc}}</div>
            </div>
            <!-- 购票按钮 -->
            <div class="button-block">
              <div class="button">购票</div>
            </div>
          </li>
        </ul>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
// 引用获取影院的详情页数据的方法
import { getCinemaDetailList } from "../../../api/cinema.js";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      cinemamsg: [],
      movies: [],
      //   每个电影的详细信息
      detaiList: "",
      DateList: [], //场次时间数组
      ShowLists: []
      // endTm: ""
    };
  },
  methods: {
    ...mapMutations(["addgetCinemaDetailList"]),
    jumpimg(id) {
      let imgid = id;
      // let endTm=""
      //   console.log("当前id", id);
      console.log("我现在点击了图片");
      //   console.log(this.movies);

      this.movies.map((item, index) => {
        // console.log(item.id);
        if (imgid == item.id) {
          console.log(item);
          this.detaiList = item;

          let DateList = item.shows;
          // 获取影片总时长
          let movietm = item.dur;
          console.log("影片总时长", movietm);
          let mohour = parseInt(movietm / 60);
          let momiunte = movietm - 60 * mohour;
          console.log(mohour); //小时
          console.log(momiunte); //分钟

          console.log(DateList);
          // console.log(DateList[0].dateShow);
          this.DateList = DateList;

          console.log("上映日期", this.DateList);
          //   console.log(this.detaiList);

          // 获取场次
          DateList.map((item, index) => {
            //  let showList=item[0]
            //  console.log(showList)
            console.log(item);
          });
          let s3 = DateList[0].plist;

          console.log(s3);

          //   // 获取开始时间
          let begintm = s3[0].tm;
          console.log(s3[0].tm);
          console.log(begintm.split(":"));
          let s4 = begintm.split(":");
          let beginhour = s4[0];
          let beginmin = s4[1];
          console.log(beginhour, beginmin);
          // 针对endtime操作
          console.log(mohour); //小时
          console.log(momiunte); //分钟
          let endTimehour = Number(mohour) + Number(beginhour);
          let endTimemin = Number(momiunte) + Number(beginmin);
          let endtm = "";
          let tm1=""
          let tm2=""
          if (endTimemin >= 60) {
            let tm1 = endTimehour + 1;
            let tm2 = endTimemin - 60;
            // console.log(tm1, tm2);
            // endtm = tm1 + ":" + tm2;

            // console.log(endtm); //这是电影的结束时间
          }
          if (endTimehour >= 24) {
            let tm1 = endTimehour - 24;
            // let tm2 = endTimemin;
            // endtm = tm1 + ":" + tm2;
          }
          endtm = tm1 + ":" + tm2;
          console.log(endtm)

          this.ShowLists = s3;
        }
      });
      //  this.endTm = endtm;
    }
  },
  // 获取时间
  time() {},
  created() {
    // 获取影院详情数据
    let { id } = this.$route.params;
    getCinemaDetailList(id).then(res => {
      // console.log(res);
      let cinemamsg = res.cinemaData;
      this.cinemamsg = cinemamsg;
      // console.log(this.cinemamsg)
      //   获取movie
      let movies = res.showData.movies;
      // console.log(movies);
      movies.map((item, index) => {
        item.img = item.img.replace(/http/, "https").replace(/w.h/, "128.180");
        return movies;
        // console.log(item.img);
      });
      this.movies = movies;
      this.addgetCinemaDetailList(movies);
      // console.log(this.$store)
      this.detaiList = movies[0];
      // this.ShowList = s1;

      //   return this.movies
    });
  }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";
.my-cinemawrap {
  .w(375);
  height: 675px;

  //   background: yellowgreen;
  .body-wrapper {
    // overflow-y: scroll;
    .tit-info {
      position: relative;
      padding: 15px;
      padding-right: 100px;
      .cinema-nm {
        font-size: 17px;
        line-height: 24px;
        font-weight: 700;
        color: #333;
      }
      .location {
        margin-top: 2px;
        font-size: 13px;
        line-height: 18.5px;
        color: #999;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .location-icon {
        position: absolute;
        right: 0;
        top: 50%;
        width: 70px;
        height: 31px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        border-left: 1px solid #d8d8d8;
        text-align: center;
        line-height: 31px;
        img {
          width: 19px;
          height: 22px;
        }
      }
    }
    .bot-info {
      height: 201px;
      .movie-info {
        height: 135px;
        // padding: 20px 0;
        padding-left: 5px;
        .w(375);
        height: 135px;
        position: relative;
        background-color: #40454d;
        // opacity: 0.55;

        .movie-wrapper {
          position: absolute;
          //   width: 100%;
          //   height: 100%;
          .w(375);
          height: 135px;
          top: 0;
          left: 0;

          overflow-x: scroll;
          white-space: nowrap;
          //   display: flex;
          .item-list {
            .w(80);
            height: 114px;
            margin-left: 25px;
            margin-top: 10px;
            display: inline-block;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .detail-info {
        height: 66;
        padding: 11px 15px;
        text-align: center;
        .title {
          height: 24px;
          line-height: 24px;
          font-size: 17px;
          color: #333;
          font-weight: 700;
          .tit01 {
            line-height: 24px;
            font-size: 17px;
            color: #333;
            font-weight: 700;
          }
          .score {
            color: #ffb400;
            font-size: 10px;
            em {
              font-size: 16px;
            }
          }
        }
        .actor {
          margin-top: 2px;
          height: 18.5px;
          line-height: 18.5px;
          font-size: 13px;
          color: #999;
        }
      }
    }
  }
  .my-moviedate {
    .w(375);
    // .h(183);
    min-height: 183px;
    background: #ffb400;
    .topdate {
      .w(375);
      .h(45);
      ul {
        li {
          display: inline-block;
          line-height: 45px;
          height: 45px;
          text-align: center;
          font-size: 14px;
          color: #666;
          margin-left: 15px;
          // span{

          // }
        }
      }
    }
    .vip-tips {
      padding: 0 15px;
      height: 42px;
      line-height: 42px;
      font-size: 10px;
      .texts {
        display: flex;
        justify-content: space-around;
        color: #777;
        .label {
          flex: 0 0 auto;
          display: inline-block;
          background-color: #60b8e1;
          border-radius: 2px;
          font-size: 10px;
          line-height: 15px;
          height: 15px;
          width: 34px;
          text-align: center;
          color: #fff;
          margin-top: 13px;
          margin-right: 10px;
        }
        .label-text {
          // -webkit-box-flex: 1;
          // -ms-flex: 1 1 auto;
          // flex: 1 1 auto;
          display: inline-block;
          font-size: 12px;
          color: #fa9600;
        }
        .process {
          display: inline-block;

          // -webkit-box-flex: 0;
          // -ms-flex: 0 0 auto;
          // flex: 0 0 auto;
          line-height: 42px;
          color: #999;
          font-size: 12px;
        }
      }
    }
    .showTime {
      .w(375);
      background: yellow;

      li {
        .w(350);
        // margin-left: 2px;
        // margin-right: 2px;
        .h(42);
        display: flex;
        justify-content: space-around;
        // background: green;
        .time-block {
          .w(54);
          position: relative;
          margin-left: 14px;
          .begin {
            font-size: 20px;
            color: #333;
            line-height: 1;
            white-space: nowrap;
          }
          .end {
            margin-top: 10px;
            color: #999;
            font-size: 11px;
            line-height: 1;
            white-space: nowrap;
          }
        }
        .info-block {
          margin-left: 17px;
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
          overflow-x: hidden;
          .lan {
            margin-top: 2px;
            line-height: 18px;
            font-size: 13px;
            color: #333;
            white-space: normal;
          }
          .hall {
            margin-top: 7px;
            font-size: 11px;
            color: #999;
            white-space: normal;
          }
        }
        .price {
          -webkit-box-flex: 0;
          -ms-flex: 0 1 auto;
          flex: 0 1 auto;
          width: 130px;
          margin-left: 5px;
          display: flex;
          position: relative;
          .sellPr {
            display: inline-block;
            // line-height: 1;
            color: #f03d37;
            margin-top: 1px;
            font-size: 11px;
            span {
              font-size: 19px;
            }
          }
          .vipPrice {
            display: inline-block;
            line-height: 15px;
            height: 15px;
            margin-top: 7px;
            margin-left: -7px;

            -webkit-transform: scale(0.8);
            // transform: scale(0.8);
            // -webkit-transform-origin: left;
            // transform-origin: left;
            margin-right: -16px;
            border: 1px solid #ff9000;
            border-radius: 2px;
            font-size: 12px;
            .icon,
            .num {
              display: inline-block;
              padding: 0 2px;
              color: #fff;
              background-color: #f90;
            }
          }
          .extraDesc {
            margin-top: 5px;
            display: block;
            font-size: 11px;
            color: #999;
            position: absolute;
            bottom: 0;
            left: 3px;
          }
        }
        .button-block {
          width: 45px;
          margin-left: 2px;
          position: relative;
          .button {
            list-style: none;
            position: absolute;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            width: 100%;
            height: 28px;
            line-height: 28px;
            font-size: 12px;
            background-color: #f03d37;
            color: #fff;
            border-radius: 4px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>