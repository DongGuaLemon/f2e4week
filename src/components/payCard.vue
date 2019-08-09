<template>
  <div class="Main">
    <div class="paymain">
      <div class="payCard" v-for="(item,index) in paylist" :key="index">
        <div>
          <img :src="item.img" alt=" " />
        </div>
        <div>
          <span>{{item.label}}</span>
        </div>
      </div>
    </div>
    <div class="nextbtn">
        <el-button class="btn" @click="step2">下一步</el-button>
    </div>
  </div>
</template>
<script>
import creditcard from "../assets/3.svg";
import ATM from "../assets/4.svg";
import Web from "../assets/5.svg";
import shopay from "../assets/6.svg";
export default {
  data() {
    return {
      paylist: [
        { img: creditcard, label: "信用卡/金融卡" },
        { img: ATM, label: "ATM轉帳" },
        { img: Web, label: "Web ATM" },
        { img: shopay, label: "超商付款" }
      ]
    };
  },
  methods:{
      step2(){
          this.$router.push({path:'/data'})
      }
  }
};
</script>
<style>
.payCard {
  width: 184px;
  height: 246px;
  background-color: white;
  border: 1px solid #707070;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.paymain {
  display: flex;
  justify-content: space-around;
}
.btn{
    background-color: #FF6F62 !important;
    width: 172px;
    color:white !important;
}
.nextbtn{
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;   
}
</style>
