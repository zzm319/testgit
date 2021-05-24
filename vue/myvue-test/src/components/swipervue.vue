<template>
  <div class="big-box">
    <div class="swiper swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in imgArray" :key="item">
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css/swiper.css";
// import "swiper/swiper-bundle.css";
export default {
  data() {
    return {
      imgArray: [
        "https://media.meetstarlive.com/MTYyMTgzOTk1NzM1MiMxNTYjcG5n.png",
        "https://media.meetstarlive.com/MTYyMTgzOTk2NDk1NyM2MTQjcG5n.png",
        "https://media.meetstarlive.com/MTYyMTgzOTk3MjQxMiM3NzMjcG5n.png",
        "https://media.meetstarlive.com/MTYyMTg0MDAyMTA5OSM5MDAjcG5n.png"
      ],
      swiper: {}
    };
  },
  mounted() {
    this.initPage();
  },
  methods: {
    initPage() {
      this.swiper = new Swiper(".swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 60,
          depth: 600,
          modifier: 1,
          slideShadows: true
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.big-box {
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 200px auto;

  .swiper-container {
    width: 300px;
    height: 200px;

    .swiper-wrapper {
      width: 100%;
      .swiper-slide {
        width: 200px;
        height: 200px;
        background-position: center;
        background-size: cover;
        img {
          display: block;
          width: 100%;
          // height: 100%;
          // object-fit: contain;
        }
      }
    }
  }
}
</style>
