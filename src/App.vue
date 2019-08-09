<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
}
.el-container{
   width: 100%;
  height: 100vh;
}
.el-header {
  background-color: #fcb0a9;
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
}
.el-footer {
  background-color: #fcb0a9;
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
}
.el-main {
  background-color: #fff6f6;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
