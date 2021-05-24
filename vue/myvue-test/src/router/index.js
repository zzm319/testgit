import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Svga from "@/components/svga";
import Animation from "@/components/animation";
import Css from "@/components/css";
import Swipper from "@/components/swipper";
import Swipervue from "@/components/swipervue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/svga",
      name: "Svga",
      component: Svga
    },
    {
      path: "/animation",
      name: "Animation",
      component: Animation
    },
    {
      path: "/css",
      name: "Css",
      component: Css
    },
    {
      path: "/swipper",
      name: "Swipper",
      component: Swipper
    },
    {
      path: "/swipervue",
      name: "SwiperVue",
      component: Swipervue
    }
  ]
});
