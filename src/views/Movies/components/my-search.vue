<template>
  <div class="my-search">
    <i class="iconfont icon-tubiao-"></i>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../../../style/index.less";
.my-search {
  width: 20px;
  height: 20px;
  
  padding: 10px 15px 10px 10px;
  background-position: 10px;
  color: @red;
  display: flex;
  justify-content: center;
  align-items: center;
  i{
      display: inline-block;
    background-size: 20px;
  }
}
</style>