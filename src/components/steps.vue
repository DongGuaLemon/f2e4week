<template>
  <div class="steps">
    <el-steps :active="0" finish-status="success">
      <el-step title="STEP 1.">
        <div slot="description">
          <span>選擇付款方式</span>
        </div>
      </el-step>
      <el-step title="STEP 2.">
        <div slot="description">
          <span>填寫付款資訊</span>
        </div>
      </el-step>
      <el-step title="STEP 3.">
        <div slot="description">
          <span>您的訂單已成功付款</span>
        </div>
      </el-step>
    </el-steps>
  </div>
</template>
<style>
.steps .el-step__icon{
    font-size: 20px !important;
    width: 48px !important;
    height: 48px !important;
}
.steps .el-step.is-horizontal .el-step__line {
    top:22px !important;
}
</style>
