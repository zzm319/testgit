<template>
    <div class="container">
        <div class="forward">
            <img src="./../assets/avatar.jpg" alt="">
        </div>
        <div class="backward">
            <img src="./../assets/benteli.jpeg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    @keyframes rotate1 {
        0% {
            transform: rotateY(-180deg);
        }
        100% {
            transform:rotateY(0deg);
        }
    }
    @keyframes rotate2 {
        0% {
            transform: rotateY(0deg);
        }
        49.9% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
          transform: rotateY(-180deg);
          opacity: 0;
        }

    }
    .container {
        position:relative;
        width: 200px;
        height: 200px;
        /* background-color: pink; */
    }
    .forward,.backward {
        position:absolute;
        width: 200px;
        height: 200px;
    }
    .forward {
        z-index: 1;
        animation: rotate2 2s linear forwards;
    }
    .backward {
        animation: rotate1 2s linear forwards;
    }
    .forward img,.backward img {
        width: 200px;
        height: 200px;
    }
</style>