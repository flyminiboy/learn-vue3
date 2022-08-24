
<template>
    <h1 @click="hello">这是关于我们</h1>
    <HelloWorld />
    <Rate />
    <Rate1 :value="score"></Rate1>
    <Rate1 :value="score" theme="green"></Rate1>
    <Rate1 :value="score" theme="red"></Rate1>
    <Rate2></Rate2>
    <Rate2 :value="3.5"></Rate2>
    <Rate2 :value="4.5"></Rate2>
    <Rate2 :value="2.5" @update-rate="update"></Rate2>
    <!-- @update-rate 监听事件 -->
    <h1>您的评分{{result}}</h1>
    <animation ></animation>
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import Rate from '../components/Rate.vue'
import Rate1 from '../components/Rate1.vue'
import Rate2 from '../components/Rate2.vue'
import animation from '../components/animation.vue'
import { useFullscreen } from '@vueuse/core'
import { ref } from 'vue';
const { isFullscreen, enter, exit, toggle } = useFullscreen()

function hello() {
    console.log('点击')
    toggle()
}


let result = ref(0)
let score = ref(3)

function update(num) {
    result.value = num
}

</script>