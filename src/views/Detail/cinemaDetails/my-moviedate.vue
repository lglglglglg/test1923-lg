<template>
  <div class="my-moviedate">时间</div>
</template>

<script>
import {  mapMutations} from "vuex";
export default {
    data(){
        return{
            MList:"",
            abc:{}
        }
    },
  methods:{
      ...mapMutations(['addgetCinemaDetailList']),
         
  },
  created(){
      console.log(this.$store.state.moviesList)
     let {moviesList}= this.$store.state
      console.log(moviesList)
    //   let list=this.$store.state.moviesList
    //   console.log(list)


  }
};
</script>

<style lang="less" scoped>
</style>