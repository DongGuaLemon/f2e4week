<template>
  <div class="endpage">
    <el-card class="box" id="box">
        <div class="endmain">
      <div class="endheader">
        <span>恭喜你已完成訂單付款！</span>
      </div>
      <div class="endmiddle">
        <shopCard></shopCard>
        
      </div>
      <div class="endfooter">
        <span>您在該商店已成功購買商品，會盡快幫您安排出貨。</span>
      </div>
        </div>
    </el-card>
    <img src="../assets/7.svg" class="endimg">
  </div>
</template>
<script>
import shopCard from "./shopCard";
export default {
  components: {
    shopCard
  }
};
</script>
<style>
#box {
  width: 974px;
  height: 588px;
  border: 1px solid #fcb0a9;
  border-radius: 20px;
  z-index: 1;
  position: relative;
}
.endpage {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
}
.endmain{
display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  padding: 10px;
}
.endheader{
    font-size: 24px;
    font-weight: bold;
    color: #FF6F62;
}
.endfooter{
    font-size: 24px;
    font-weight: bold;
    color:white;
    width: 682px;
    height: 60px;
    text-align: center;
    line-height: 55px;
    border-radius: 10px;
    background-color: #FCB0A9;
    margin-top: 5%;
}
.endmiddle{
    margin-top: 5%;
}
.endimg{
    position:absolute;
    left: 20%;
    bottom: 20%;
    z-index: 2;
}
</style>
