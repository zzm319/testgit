<template>
  <div class="swipper">
    <van-swipe
      class="my-swipe"
      indicator-color="white"
      @change="onChange"
      :width="250"
    >
      <van-swipe-item>
        <img
          src="https://media.meetstarlive.com/MTYyMTgzOTk1NzM1MiMxNTYjcG5n.png"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://media.meetstarlive.com/MTYyMTgzOTk2NDk1NyM2MTQjcG5n.png"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://media.meetstarlive.com/MTYyMTgzOTk3MjQxMiM3NzMjcG5n.png"
          alt=""
        /> </van-swipe-item
      ><van-swipe-item>
        <img
          src="https://media.meetstarlive.com/MTYyMTg0MDAyMTA5OSM5MDAjcG5n.png"
          alt=""
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
// 引入单个组件样式
import "vant/lib/swipe/style/less";
import "vant/lib/swipe-item/style/less";
// import "@vant/touch-emulator";
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  methods: {
    onChange(index) {
      console.log(index);
    }
  }
};
</script>

<style lang="less">
.swipper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.my-swipe {
  width: 300px;
  height: 150px;
  //   box-sizing: border-box;
  //   margin-left: 50px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
