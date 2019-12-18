<template>
  <div class="mine-btn">
    <router-link
      tag="li"
      v-for="(item,index) in tab"
      :key="index"
      :to="item.path"
      active-class="sel"
    >
      <span>{{item.name}}</span>
    </router-link>
  </div>
</template>

<script>
import meituanLogin from "./meutuan-login.vue";
import phoneLogin from "./phone-login.vue";
export default {
  components: { meituanLogin, phoneLogin },
  data() {
    return {
      tab: [
        {
          name: "美团账号登录",
          path: "/mine/meituanlogin"
        },
        {
          name: "手机号登录",
          path: "/mine/phonelogin"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@import "../../../style/index.less";
.mine-btn {
  display: -webkit-box;
  display: -ms-flexbox;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  position: relative;
  border-bottom: 0.08rem solid #d6d6d6;
  li {
    list-style: none;
    display: block;
    text-align: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    position: relative;
    // .w(140);
    height: 44px;
    font-size: 15px;
    line-height: 44px;
    text-align: center;
    span {
      display: inline-block;
      height: 43px;
      // border-bottom: 4px solid @yellow;
    }
  }
  .sel {
    span {
      //   background: @yellow;

      border-bottom: 4px solid @yellow;
    }
    // display: inline-block;
  }
}
</style>
 