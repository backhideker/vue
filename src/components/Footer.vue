<template>
  <div id="footer">
    <div class="footer-logo"></div>
    <div class="footer-text">
      Copyright 2021 MTR Corporation Limited 香港鐵路有限公司. 版權所有
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style   scoped>
#footer {
  padding: 20px;
  border-top: 3px solid #c77800;
  max-width: 1920px;
}
.footer-logo {
  height: 30px;
  width: 160px;
  text-align: center;
}
.footer-text {
  color: #222222;
  font-family: "Microsoft JhengHei";
  font-size: 14px;
  letter-spacing: 0;
  line-height: 19px;
  text-align: center;
}
</style>