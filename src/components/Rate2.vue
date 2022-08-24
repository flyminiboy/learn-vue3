<template>
    <div>
        <div class="rate" @mouseout="mouseOut">
            <span @mouseover="mouseOver(num)" v-for="num in 5">☆</span>
            <span class="hollow" :style="fontwidth">
                <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
            </span>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';

let props = defineProps({
    value: { type: Number, default: 3 }
})

let width = ref(props.value)

const fontwidth = computed(() => {
    return `width:${width.value}em;`
})

function mouseOver(num) {
    console.log(num)
    width.value = num
}

function mouseOut() {
    width.value = props.value
}

let emits = defineEmits('update-rate') // 等价注册了一个事件
function onRate(num) {
    console.log('发送update-rate',num)
    emits('update-rate', num) // 发送事件
}

</script>

<style scoped>
.rate {
    position: relative;
    display: inline-block;
}

.rate>span.hollow {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
}
</style>