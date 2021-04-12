<template>
  <div id="login">
    <div class="group">
      <div class="title">註冊</div>
      <div class="title1">請輸入已傳送到電郵的驗證碼</div>
      <div>
        <input class="input" placeholder="電郵地址" v-model="emailAddr" />
      </div>
      <div class="felx space-between">
        <input class="input1" placeholder="驗證碼" v-model="authCode" />
        <el-button
          class="btn-red"
          @click="tapButton"
          :disabled="sendAuthCode"
          >{{ Message }}</el-button
        >
        <!-- <span v-show=sendAuthCode class="timer" >{{ auth_time }}</span> -->
        <!-- <span v-if="!sendAuthCode" class="timer">
          <span class="auth_text_blue">{{ auth_time }} </span>
          秒之重新发送</span
        > -->
        <div class="code-text pointer">重新傳送驗證碼</div>
      </div>
      <div class="text-center">
        <!-- <el-button class="btn-red" @click="tapButton" :disabled="sendAuthCode">{{ Message }}</el-button> -->
        <el-button class="btn-nextStep" @click="checkValue">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      Message: "驗證",
      sendAuthCode: false,
      auth_time: 0,
      emailAddr: "",
      authCode: "",
    };
  },
  methods: {
    tapButton() {
      this.getCode();
    },
 
    checkValue() {
      var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (this.emailAddr === '') {
       window.alert("請輸入電郵地址");
      }
      console.log(reg.test(this.emailAddr))
    },
    getCode() {
      this.sendAuthCode = true;
      this.auth_time = 60;

      var auth_timetimer = setInterval(() => {
        this.Message = this.auth_time + "秒後重新獲取驗證碼";
        this.auth_time--;
        if (this.auth_time <= 0) {
          this.sendAuthCode = false;
          clearInterval(auth_timetimer);
          this.Message = "重新獲取驗證碼";
        }
      }, 1000);
    },
  },
};
</script>

<style   scoped>
.group {
  margin: 0 auto;
  width: 550px;
  padding: 50px;
  color: #ffffff;
  font-family: "Microsoft JhengHei";
}

.title {
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 40px;
  text-align: center;
  text-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.9);
}
.title1 {
  font-size: 20px;
  letter-spacing: 0;
  line-height: 27px;
  margin-top: 60px;
}
.input {
  box-sizing: border-box;
  height: 50px;
  width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 15px;
  text-align: center;
}
.btn-nextStep {
  height: 50px;
  width: 250px;
  border-radius: 10px;
  background-color: #e70048;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  border: none;
}
.input1 {
  box-sizing: border-box;
  height: 50px;
  width: 250px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 15px;
  text-align: center;
}
.input-code {
  width: 280px !important;
}
.code-text {
  width: 140px;
  color: #ffffff;
  font-family: "Microsoft JhengHei";
  font-size: 20px;
  letter-spacing: 0;
  line-height: 27px;
  text-align: center;
  text-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.9);
  text-decoration: underline;
}
.timer {
  text-align: right;
  box-sizing: border-box;
  height: 50px;
  width: 500px;

  border-radius: 10px;
  color: #000;
  margin-top: 15px;
  text-align: center;
}
</style>