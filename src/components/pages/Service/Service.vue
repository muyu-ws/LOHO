<template>
    <div class="app-service">
        <h1>客服对话框</h1>

        <app-home-nav></app-home-nav>
    </div>
</template>

<script>
import AppHomeNav from "../Home/HomeNav";
export default {
  name: "app-service",
  components: {
    AppHomeNav
  }
};
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">
.app-service {
  margin-top: 0.55rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: deeppink;
    animation: rotate 2s infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate( 60deg);
    }
  }
}
</style>