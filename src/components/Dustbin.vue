<template>
    <span class="dustbin" @click="showEvent">
        🗑
    </span>
    <div class="animate-wrapper">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="animate" v-show="props.show">
                🗑
            </div>
        </transition>
    </div>
</template>
<script setup>

let props = defineProps({
    value: {type:Event, default:null},
    show:false
})

function showEvent() {
    console.log('不会了',props.value)
    console.log('不会了',props.show)
}

function beforeEnter(el) {
    let dom = props.value
    let rect = dom.getBoundingClientRect()
    let x = window.innerWidth - rect.left - 60
    let y = rect.top - 10
    el.style.transform = `translate(-${x}px, ${y}px)`
}
function enter(el, done) {
    document.body.offsetHeight
    el.style.transform = `translate(0,0)`
    el.addEventListener('transitionend', done)
}
function afterEnter(el) {
    console.log('完事了')
    props.value = null
    props.show = false
    el.style.display = 'none'
}

</script>
<style>
.animate-wrapper,
.animate {
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 100;
    transition: all 0.5s linear;
}
</style>