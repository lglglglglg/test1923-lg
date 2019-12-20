<template>
  <div class="my-moviedate">
    <div class="cont-wrap">
      <div class="topDate">
        <ul>
          <li v-for="(item,index) in dateList" :key="index" active-class="sel">123</li>
        </ul>
      </div>
      <div class="showTime"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import { getCinemaDetailList } from "../../../api/cinema.js";
export default {
  data() {
    return {
      MList: "",
      dateList: [],
      showList: []
    };
  },
  methods: {
    ...mapMutations(["addgetCinemaDetailList"])
  },
  created() {
    // 获取影院详情数据
    let { id } = this.$route.params;
    getCinemaDetailList(id).then(res => {
      console.log(res);
      // let cinemamsg = res.cinemaData;
      // this.cinemamsg = cinemamsg;
      // console.log(this.cinemamsg);
      // //   获取movie
      let movies = res.showData.movies;
      console.log(movies);
     console.log(id)
      movies.map((item, index) => {
          //  console.log(item);
        // console.log(item.id);
        if (id == item.id) {
            console.log(item);
          // this.detaiList = item;
          //   console.log(this.detaiList);
        }else{
          console.log("sorry")
        }
      });

      // movies.map((item, index) => {
      //   item.img = item.img.replace(/http/, "https").replace(/w.h/, "128.180");
      //   return movies;
      //   // console.log(item.img);
      // });
      // this.movies = movies;
      // this.addgetCinemaDetailList(movies);
      // console.log(this.$store);
      // this.detaiList = movies[0];

      //   return this.movies
    });
  }
};
</script>

<style lang="less" scoped>
</style>