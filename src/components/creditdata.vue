<template>
  <div class="creditdata">
    <el-card class="box-cards" id="card">
      <div class="card-main">
        <div class="header">
          <span>信用卡/金融卡</span>
        </div>
        <div class="formdata">
          <el-form ref="form" :model="form" label-width="150px">
            <el-form-item label="姓名:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="信用卡號:">
              <div style="display:flex">
                <el-input v-model="form.credit1"></el-input>-
                <el-input v-model="form.credit2"></el-input>-
                <el-input v-model="form.credit3"></el-input>-
                <el-input v-model="form.credit4"></el-input>
              </div>
            </el-form-item>
            <el-form-item label="有效日期:">
              <el-input v-model="form.date"></el-input>
            </el-form-item>
            <el-form-item label="背面三碼:">
              <el-input v-model="form.code"></el-input>
            </el-form-item>
            <el-form-item label="電話號碼:">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-card>
    <div class="btnradio">
        <div>
      <el-radio v-model="radio" label="1">一次付清</el-radio>
      <el-radio v-model="radio" label="2">分期付款</el-radio>
        </div>
        <div>
      <el-button class="btn" @click="next">下一步</el-button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        credit1: "",
        credit2: "",
        credit3: "",
        credit4: "",
        date: "",
        code: "",
        phone: ""
      },
      radio: "1"
    };
  },
  methods: {
      next(){
          this.$router.push({path:'endpage'})
      }
  }
};
</script>
<style >
#card {
  width: 974px;
  height: 588px;
  border: 1px solid #fcb0a9;
  border-radius: 20px;
  z-index: 1;
}
#card label {
  font-size: 24px;
  font-weight: bold;
  color: #262f57;
}
#card span {
  font-size: 24px;
  font-weight: bold;
  color: #ff6f62;
}
.header span {
  position: relative;
}
.header span::before {
  content: "";
  width: 120%;
  position: absolute;
  z-index: -1;
  right: -10%;
  bottom: -10px;
  height: 22px;
  background-color: #fbdddd;
  filter: blur(1px);
}
.header {
  margin-top: 10px;
}
#card .el-form-item {
  padding-top: 30px;
}
.creditdata {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.formdata {
  width: 80%;
}
.card-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btnradio .el-radio__input.is-checked .el-radio__inner {
  border-color: #ff6f62;
  background: #ff6f62;
}
.btnradio .el-radio__input.is-checked + .el-radio__label {
  color: #ff6f62;
}
.btnradio .el-radio__inner {
  width: 18px;
  height: 18px;
}
.btnradio .el-radio__label {
  font-size: 24px;
}
.btnradio{
    margin-top: 15px;
    width: 60%;
    display: flex;
    justify-content:space-between;
}
</style>
