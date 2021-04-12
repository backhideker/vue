<template>
  <div class="shop-popup">
    <div class="header flex space-between">
      <div class="back pointer" @click="back">返回</div>
      <div>
        <el-button type="danger" class="btn-red btn-top" @click="handleSubmit"
          >確定</el-button
        >
      </div>
    </div>
    <div class="content">
      <div class="search">
        <input class="search-input" />
        <el-button type="danger" class="btn-orange" @click="searchAndSelected"
          >查找並選中</el-button
        >
        <el-button type="danger" class="btn-orange" @click="selectAll"
          >全選</el-button
        >
      </div>
      <div class="shop-list">
        <el-row :gutter="20">
         
          <el-col :span="8"  v-for="item in shopItems" :key="item.id">
            <div class="shop-list-item">
              <div class="shop-name middle-center">{{item.name}}</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopPopup",
  data() {
    return {
      shopList: [],
      selectedItems: [],
    };
  },
  created() {
     
  },
  methods: {
    searchAndSelected() {},
    selectAll() {},
    back() {
      this.$emit("onClose", true);
    },
    handleSubmit() {
      this.$emit("onSubmit", this.selectedItems);
    },
  },
  props: {
    shopItems: {
      Type: Array,
      default: () => [],
    },
  },
};
</script>

<style  scoped>
.content {
  height: 655px;

  border-radius: 10px;
  background-color: #d7c4a3;
  padding: 15px;
}
.shop-list {
  height: 560px;

  border-radius: 10px;
  background-color: #ffffff;
  padding: 15px;
}
.shop-name {
  height: 50px;
  width: 394px;
  border-radius: 10px;
  background-color: #f6f1eb;
  margin-bottom: 10px;
}
.selected {
  color: #c77900 !important;
  background-color: #edddc1 !important;
}
.shop-list-item {
  height: 50px;
  border-radius: 10px;
  margin-top: 15px;
  font-size: 18px;
  cursor: pointer;
}
.search {
  height: 70px;
}
.search-input {
  height: 50px;
  width: 300px;
  border-radius: 10px;
  background-color: #ffffff;
  color: #222222;
  font-family: "Microsoft JhengHei";
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
  border: none;
  margin-right: 15px;
}
.header {
  height: 70px;
}
.back {
  color: #c77900;
  font-family: "Microsoft JhengHei";
  font-size: 18px;
  font-weight: bold;
}
.btn-top {
  width: 120px;
}
.el-dialog__header {
  display: none !important;
}
</style>