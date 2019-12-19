<template>
  <div class="meituan-login">
      <!-- <div class="top">
      <div class="back">back</div>
      <h1>猫眼电影</h1>
    </div> -->
    <p>
      <input class="inp1" type="text" name id placeholder="账户名/手机号/Email" />
    </p>
    <p>
      <input class="inp2" type="text" name id placeholder="请输入您的密码" />
    </p>
    <div class="bigLogin">
      <button class="submit">登录</button>
    </div>
    <ul class="subline">
      <div>
        <!-- 注册组件 -->
        <li v-for="(item,index) in regins" :key="index" :to="item.path">{{item.name}}</li>
        <!-- 找回密码组件 -->
      </div>
    </ul>

    <div class="footer">
      <span>
        © 猫眼电影 客服电话：
        <a href>400-670-5335</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      regins: [
        {
          name: "立即注册",
          path: "/reg"
        },
        {
          name: "找回密码",
          path: "/find"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "../../../style/index.less";
.meituan-login {
  background: #fff;
  .w(375);
  .fixed(96.6px,0,0,0);
  .top {
    background: #e54847;
    .w(375.2);
    // float: left;
    // height: 100px;
    // position: relative;
    .back {
      //   position: absolute;
      //   left: 0;
      float: left;
      .w(75.1);
      color: #fff;
      font-size: 14px;
      text-align: center;
      line-height: 50px;
      background: #e54847;
      //   border-right: #e54847 1px solid;
    }
    h1 {
      .w(300.1);
      //   position: absolute;

      //   float: left;
      //   left: 0;
      //   right: 0;
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
  }
  p {
    display: block;
    .w(375);
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d6d6d6;
    input {
      .w(340);
      height: 30px;
      border: 0;
      // background: @yellow;
    }
  }
  .bigLogin {
    .w(375);
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    button {
      .w(340);
      height: 40px;
      background: @red;
      color: #fff;
      border-radius: 10px;
    }
  }
  .subline {
    .w(375);
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      .w(340);
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        list-style-type: none;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #fe8c00;
      }
    }
  }
  .footer {
    .w(375);
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 12px;
      a {
        color: @red;
        text-decoration: none;
      }
    }
  
}
</style>