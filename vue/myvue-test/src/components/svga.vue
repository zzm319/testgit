<template>
    <div class="container">
        <button  @click="play">点击播放</button>
        <div class="svga-container" id="svgaBox"></div>
        <!-- <icon name="star"></icon> -->
    </div>
</template>

<script>
import SVGA from 'svgaplayerweb';
import svga from './../assets/star.svga'
export default {
    data(){
        return {

        }
    },
    methods:{
        play(){
            console.log(123);
            const player = new SVGA.Player('#svgaBox');
            const parser = new SVGA.Parser('#svgaBox');
            parser.load(svga, function(videoItem) {       
          player.loops = 1;  // 设置循环播放次数是1
          player.fillMode = 'Backward';
          player.setVideoItem(videoItem);
          player.startAnimation();})
        },
        
    }
}
</script>

<style lang="css" scoped>

</style>