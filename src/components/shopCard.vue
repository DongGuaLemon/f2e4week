<template>
  <div class="shopCard" style="display:flex">
    <el-card class="box-card" v-for="(item,index) in shoplist" :key="index">
      <div slot="header" class="clearfix">
        <span>訂單資訊</span>
      </div>
      <div class="main">
        <div>
          <div class="text item">
            <div>
              <span class="labeltitle">訂單編號</span>
            </div>
            <span class="content">{{item.label}}</span>
          </div>
          <div class="text item">
            <div>
              <span class="labeltitle">商品名稱</span>
            </div>
            <span class="content">{{item.name}}</span>
          </div>
        </div>
        <div style="position:absolute;bottom:25px;width:90%">
        <div class="bottom">
          <div>
            <span>NT {{item.money}}</span>
          </div>
          <div>
            <el-button class="button" style="background:#262F57;color:white;border-radius:10px;width:170px">取消訂單</el-button>
          </div>
        </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shoplist: [
        { label: "201908010843-20", name: "香水30ml/小蒼蘭", money: "4200" },
        { label: "201908010843-20", name: "香水30ml/小蒼蘭", money: "4200" },
        { label: "201908010843-20", name: "香水30ml/小蒼蘭", money: "4200" }
      ]
    };
  }
};
</script>
<style>
.box-card{
    border-radius: 15px !important;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix {
  text-align: center;
}
.box-card {
  width: 319px;
    position: relative;
  height: 317px;
}
.shopCard {
  justify-content: space-around;

}
.labeltitle {
  color: #262f57;
  font-size: 18px;
}
.content {
  color: #262f57;
  font-size: 18px;
}
.item {
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
}
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main {
  display: flex;
  flex-direction: column;
}
</style>
