<template>
  <div class="my-tobeshow">
    <div class="wrapper">
      <div class="content">
        <!-- 最受期待电影 -->
        <div class="top-list">
          <p class="title">近期最受期待</p>
          <div class="mostlike-list">
            <li v-for="(item,index) in movieList" :key="index">
              <div class="default-img-bg">
                <img :src="item.img" alt />
                <span class="wish">
                  <span class="wish-num">{{item.wish}}人想看</span>
                </span>
              </div>
              <h5 class="name">{{item.nm}}</h5>
              <p class="date">{{item.comingTitle}}</p>
            </li>
          </div>
        </div>

        <!-- tobe show list -->
        <div class="tobeList">
          <div class="wrapper">
            <div class="content">
              <li v-for="(item,index) in movieTobeshowList" :key="index">
                <span class="dates">{{item.comingTitle}}</span>
                <div class="min-box">
                  <div class="left-img">
                    <img :src="item.img" alt />
                  </div>
                  <div class="right-txt">
                    <div class="movie-msg">
                      <div class="tit">
                        <div class="movie-name">{{item.nm}}</div>
                      </div>
                      <div class="detail">
                        <div class="score line-ellipsis">
                          <span>{{item.wish}}</span>
                          <span class="sc">人想看</span>
                        </div>
                        <div class="actor line-ellipsis">主演:{{item.star}}</div>
                        <div class="show-info line-ellipsis">{{item.showInfo}}</div>
                      </div>
                    </div>
                    <!-- 购票按钮 -->
                    <div class="shop-btn">
                      <div class="shop-button">
                        <span>购票</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BS from "better-scroll";
// 引入获取近期期待电影的函数 数据
import { getLikeList, getTobeList } from "../../../api/movies.js";
export default {
  data() {
    return {
      movieList: [],
      movieTobeshowList: []
    };
  },
  methods: {
    initBs() {
      this.bs = new BS(".wrapper", { probeType: 3, click: true });
    }
  },
  created() {
    getLikeList().then(res => {
      // console.log("近期期待电影", res);
      let list = res.coming;
      // console.log(list)

      list.map((item, index) => {
        item.img = item.img.replace(/http/, "https").replace(/w.h/, "128.180");

        return list;
        // console.log(item.img);
      });
      this.movieList = list;
      // console.log(this.movieList);
    });
    getTobeList().then(res => {
      // console.log("即将上映的电影", res);
      let list = res.coming;
      list.map((item, index) => {
        item.img = item.img.replace(/http/, "https").replace(/w.h/, "128.180");

        return list;
        // console.log(item.img);
      });
      this.movieTobeshowList = list;
      console.log(this.movieTobeshowList);
    });
    this.initBs();
  }
};
</script>

<style lang="less" scoped>
@import "../../../style/index.less";
.my-tobeshow {
  li {
    list-style: none;
  }
  .w(375);
  .fixed(158.5px, 0, 0, 0);
  background: #fff;
  z-index: 888;
  .wrapper {
    position: absolute;
    width: 100%;
    overflow-y: scroll;
    // height: 216px;
    // overflow: hidden;
    .content {
      background-color: #f5f5f5;
      // .w(361);
      // height: 216px;
      .top-list {
        padding: 12px 0 12px 15px;
        background-color: #fff;
        margin-bottom: 10px;
        .w(361);
        height: 216px;
        .title {
          margin: 0;
          font-size: 14px;
          color: #333;
          margin-bottom: 12px;
          height: 19px;
        }
        .mostlike-list {
          overflow-x: scroll;
          white-space: nowrap;
          .w(346);
          height: 160px;
          // background: yellow;
          ::-webkit-scrollbar {
            display: none;
          }

          li {
            list-style: none;
            display: inline-block;
            width: 85px;
            height: 156px;
            // overflow: hidden;
            margin-right: 33px;

            .default-img-bg {
              width: 85px;
              height: 115px;
              position: relative;

              img {
                width: 100%;
                height: 100%;
              }
              .wish {
                position: absolute;
                left: 4px;
                bottom: 2px;
                color: #faaf00;
                font-size: 11px;
                font-weight: 600;
              }
            }
            h5 {
              margin: 0;
              font-size: 13px;
              color: #222;
              margin-bottom: 3px;
              height: 16px;
            }
            .date {
              margin: 0;
              font-size: 12px;
              color: #999;
              // height: 16px;
            }
          }
        }
      }
      .tobeList {
        height: 222px;

        // overflow-y: scroll;
        li {
          //
          // list-style: none;
          height: 155px;
          padding-left: 15px;
          // background-color: yellow;
          .min-box {
            .w(346);
            position: relative;
            width: 100%;
            .left-img {
              width: 64px;
              height: 90px;
              position: relative;
              margin-top: 12px;
              float: left;
              img {
                .w(64);
                height: 94px;
              }
            }
            .right-txt {
              padding: 12px 14px 12px 0;
              margin-left: 74px;
              height: 90px;
              max-height: 90px;
              position: relative;
              .movie-msg {
                padding-right: 5px;
                margin-right: 48px;
                overflow: hidden;

                .tit {
                  max-height: 24px;
                  margin-bottom: 7px;
                  line-height: 24px;
                  overflow: hidden;
                  .movie-name {
                    font-size: 17px;
                    color: #333;
                    font-weight: 700;
                    padding-right: 5px;
                    flex-shrink: 1;
                  }
                }
                .detail {
                  box-sizing: border-box;
                  line-height: 1;
                  overflow: hidden;
                  div {
                    margin-top: 6px;
                  }
                  .score {
                    font-size: 13px;
                    color: #666;
                    .sc {
                      color: #faaf00;
                    }
                  }
                  .actor {
                    font-size: 13px;
                    color: #666;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  }
                  .show-info {
                    font-size: 13px;
                    color: #666;
                  }
                }
              }
              .shop-btn {
                font-size: 12px;
                position: absolute;
                right: 14px;
                top: 0;
                bottom: 0;
                height: 27px;
                margin: auto;
                .shop-button {
                  width: 47px;
                  height: 27px;
                  line-height: 28px;
                  text-align: center;
                  box-sizing: border-box;
                  background-color: #f03d37;
                  color: #fff;
                  border-radius: 4px;
                  white-space: nowrap;
                  font-size: 12px;
                  cursor: pointer;
                  span {
                    width: 47px;
                    height: 27px;
                    line-height: 28px;
                    text-align: center;
                    box-sizing: border-box;
                    background-color: #f03d37;
                    color: #fff;
                    border-radius: 4px;
                    white-space: nowrap;
                    font-size: 12px;
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

