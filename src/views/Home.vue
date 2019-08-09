<template>
  <div class="home">
        <div class="shopCardcomponents">
          <shopCard></shopCard>
        </div>
        <div class="stepsCardcomponents">
          <steps></steps>
        </div>
        <div class="payCardcomponents">
          <router-view></router-view>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import shopCard from "../components/shopCard";
import payCard from "../components/payCard";
import steps from '../components/steps'
export default {
  name: "home",
  components: {
    shopCard,
    payCard,
    steps
  }
};
</script>
<style>
.stepsCardcomponents{
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

