<template>
  <div class="outer-box">
    <div class="box">
      <div class="title-group flex space-between">
        <div class="title middle-center">選擇商舖</div>
        <div class="add middle-center"><i class="el-icon-plus"></i></div>
      </div>
      <div class="shop-group">
        <shopitem plabel="商铺1" />
        <shopitem plabel="商铺2" />
        <shopitem plabel="商铺3" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopFilters",
  props:{
    showAdd:Boolean,
    
  },
};
</script>

<style  scoped>
.outer-box {
  height: 202px;
  width: 470px;
  border-radius: 10px;
  background-color: #d7c4a3;
}
.box {
  padding: 20px;
}
.title {
  font-size: 20px;
  text-align: center;
  width: 90%;
}
.title-group {
  padding-right: 8px;
}
.shop-group {
  margin-top: 12px;
  height: 115px;
  overflow-y: scroll;
  padding-right: 8px;
}
.shop-item:first-child {
  margin-top: 0 !important;
}
.shop-item {
  height: 50px;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.shop-name {
  width: 90%;
  text-align: center;
}
.add {
  height: 40px;
  width: 40px;
  border-radius: 10px;
  background-color: #c77900;
  color: #fff;
  cursor: pointer;
}
.close {
  width: 40px;
  cursor: pointer;
}

div::-webkit-scrollbar {
  width: 4px;
  height: 10px;
}
div::-webkit-scrollbar-track {
  background: #d7c4a3;
  border-radius: 2px;
}
div::-webkit-scrollbar-thumb {
  background: #edddc1;
  border-radius: 10px;
}
div::-webkit-scrollbar-thumb:hover {
  background: #edddc1;
}
div::-webkit-scrollbar-corner {
  background: #edddc1;
}
</style>