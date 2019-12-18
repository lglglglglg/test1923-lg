<template>
  <div class="meituan-login">
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
  .w(375);
  p {
    display: block;
    .w(375);
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      .w(350);
      height: 30px;
      background: @yellow;
    }
  }
  .bigLogin {
    .w(375);
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    button {
      .w(350);
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
      .w(350);
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