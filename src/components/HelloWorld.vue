<script setup>
import { ref } from 'vue'

let count = ref(0)

function add() {
  count.value++
}

let getDouble = n=>n*2

let obj = {}

let num = 1

let double = getDouble(num) // 2

console.log(double)

obj.num = 2

console.log(double) // 2 此时没有添加拦截，double 的值不会发生变化

Object.defineProperty(obj, 'num', {
  get(){
    return num
  },
  set(value) {
    num = value
    double = getDouble(value)
  }
}) // 添加拦截 对 obj 对象的 num 属性进行拦截，在修改num属性的时候，对double的值进行了重新计算

obj.num = 3

console.log(double) // 输出6

delete obj.num

console.log(double) // 输出6
</script>

<template>

  <div class="card">
    <button type="button" @click="add">count is {{ count }}</button>
  </div>
</template>

