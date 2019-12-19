<template>
  <div class="phone-login">
      <!-- <div class="top">
      <div class="back">back</div>
      <h1>猫眼电影</h1>
    </div> -->
    <div class="box">
      <div class="box-1">
        <input class="inp1" type="text" name id placeholder="请输入手机号" />
        <button class="btncode">获取验证码</button>
      </div>
    </div>
    <div class="box">
      <input class="inp2" type="text" name id placeholder="请输入短信验证码" />
    </div>
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
.phone-login {
  background: #fff;
  .w(375);
 .fixed(96.6px,0,0,0);

  .box {
    display: block;
    .w(375);
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
        border-bottom: 1px solid #d6d6d6;

    input {
      border: 0;
    }
    .box-1 {
      .w(340);
      height: 51px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      //   input{
      //       list-style: none;
      //   }
      .inp1 {
        .w(250);
        height: 30px;
        // background: @yellow;
        background: #fff;
        .btncode {
          .w(40);
          height: 50px;
          background: #dcdcdc;
        }
      }
    }
    .inp2 {
      .w(340);
      height: 30px;
      background: #ebebe4;
    }
  }
  .bigLogin {
    .w(375);
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    .submit {
      .w(340);
      height: 40px;
      background: #dcdcdc;
      color: #999;
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
}
</style>