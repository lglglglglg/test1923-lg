<template>
  <div class="my-showing">
    <!-- 热映的电影 -->
    <div class="wrapper">
      <div class="content">
        <ul class="movie-list">
          <li v-for="(item,index) in movieList" :key="index">
            <div class="min-box">
              <div class="left-img">
                <img :src="item.img" alt />
                <!-- {{item.img}} -->
                <!-- https://p1.meituan.net/128.180/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg
                -->
                <!-- http://p1.meituan.net/w.h/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg-->
              </div>
              <div class="right-txt">
                <div class="movie-msg">
                  <div class="tit">
                    <div class="movie-name">{{item.nm}}</div>
                    <!-- <div class="version v2d imax">{{item.version}}</div> -->
                  </div>
                  <div class="detail">
                    <div class="score line-ellipsis">
                      <span>观众评</span>
                      <span class="sc">{{item.sc}}</span>
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
            <!-- {{item}} -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getShowingList } from "../../../api/movies.js";
import BS from "better-scroll";
export default {
  methods: {
    initBs() {
      this.bs = new BS(".wrapper", { probeType: 3, click: true });
    }
  },
  data() {
    return {
      movieList: [
        // { name: "正在热映", path: "/showing" },
        // { name: "即将上映", path: "/tobeshow" }
      ]
    }
  },

  created() {
    getShowingList().then(res => {
      // console.log(res);
      let movieList = res.movieList;
      // console.log(movieList);

      movieList.map((item, index) => {
        item.img = item.img.replace(/http/, "https").replace(/w.h/, "128.180");

        return movieList;
        console.log(item.img);
      });
      // this.item.img = item.img;
      this.movieList = movieList;
      this.initBs();
      // console.log(this.movieList);
    });
  }
};
</script>

<style lang="less" scoped>
@import "../../../style/index.less";
.my-showing {
  position: fixed;
  top: 158.5px;
  left: 0;
  // list
  .wrapper {
    height: 460px;
    overflow: hidden;
    .content {
      .movie-list {
        .w(361);
        li {
          //
          height: 114px;
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
                  // .verson {
                  //   width: 43px;
                  //   background-size: contain;
                  //   background-repeat: no-repeat;
                  //   height: 14px;
                  //   width: 17px;
                  //   display: inline-block;
                  //   margin-top: 5px;
                  //   -webkit-box-flex: 0;
                  //   flex: 0 0 auto;
                  //   margin-right: 3px;
                  // }
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