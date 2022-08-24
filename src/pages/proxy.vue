<script setup>
import { computed, reactive, ref, watchEffect } from 'vue';


let getDouble = n=>n*2
let obj = {}
let num = 1
let double = getDouble(num)

console.log(double)

obj.num = 2

console.log(double)

let proxy = new Proxy(obj, {
  get:function(target, prop) {
      return target[prop]
  },
  set:function(target, prop, value) {
    console.log('set函数',prop,value)
      target[prop] = value
      if(prop === 'num') {
        double = getDouble(value)
      }
      return true
  },
  deleteProperty(target, prop) {
    delete target[prop]
    if(prop==='num') {
      double = NaN
    }
    return true
  }
})

proxy.num = 3

console.log(double)

delete proxy.num

console.log(double)

let obj2 = reactive({
    y:20
})

let x = computed(()=>obj2.y*2)
console.log(obj2.y,x.value)

let z = ref('hello')
console.log(z)
console.log(obj2)

obj2.y = 4
console.log(obj2.y,x.value)

watchEffect(()=>{
    console.log('数据被修改',obj2.y,x.value)
})

</script>

<template>
</template>