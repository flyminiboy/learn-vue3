<template>
    <div class="box" :style="{ width: width + 'px' }"></div>
    <button @click="change">click</button>
    <br />
    <div class="box1"></div>
    <button @click="toggle">click</button>
    <transition name="fade">
        <h1 v-if="show">你好，动画！</h1>
    </transition>
</template>
<script setup>
import { ref } from 'vue';

let width = ref(100)

function change() {
    width.value += 100
}

let show = ref(true)

function toggle() {
    show.value = !show.value
}

</script>
<style>
.box {
    background: red;
    height: 100px;
    transition: width 1s linear;
}

.box1 {
    background: greenyellow;
    height: 100px;
    width: 100px;
    position: relative;
    animation: move 2s linear infinite;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s linear
}

.fade-enter-from,
.fade-enter-to {
    opacity: 0;
}

@keyframes move {
    0% {
        left: 0px
    }

    50% {
        left: 200px
    }

    100% {
        left: 0px
    }
}
</style>