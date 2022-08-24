<template>
    <input type="text" v-model="rate" @keydown.enter="score"/>
    <span >{{star}}</span>

</template>

<script setup>
import { ref } from 'vue';

let computeStar = ()=> "★★★★★☆☆☆☆☆".slice(5-rate.value, 10-rate.value)
let rate = ref(5)
let star = ref(computeStar())

function score() {
    star.value = computeStar()
}

</script>