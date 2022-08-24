<template>

    <Dustbin :value="animate.el"  :show="animate.show"/>

    <div>

        <transition name="modal">
            <div class="info-wrapper" v-if="showTip">
                <div class="info">
                    哥，你啥也没有输入
                </div>
            </div>
        </transition>
        <input type="text" v-model="item.title" @keydown.enter="addTodo" />
        <button v-if="active < all" @click="clear">清理</button>
        <ul v-if="todos.length">
            <transition-group name="flip-list" tag="ul">
                <li v-for="(item, index) in todos" :key="item.title">
                    <input type="checkbox" v-model="item.done" />
                    <span :class="{ done: item.done }">{{ item.title }}</span>
                    <span class="remove-btn" @click="removeTodo($event, index)">❌</span>
                </li>
            </transition-group>
        </ul>
        <div v-else>暂无数据</div>
        <div>
            全选<input type="checkbox" v-model="allDone" />
            <span>{{ active }}/{{ all }}</span>
        </div>
    </div>
</template>

<script setup>


import { useTodos } from '../utils/todolist'
import Dustbin from '../components/Dustbin.vue';
import { reactive } from 'vue'

// 这个里面刚好可以写一个从父组件到子组件的数据传递

let animate = reactive({
    el: null,
    show:false
})

function removeTodo(event, index) {
    animate.el = event.target
    animate.show = true
    remove(event, index)
}

let { item, todos, showTip, addTodo, clear, remove, active, all, allDone } = useTodos()



// import { ref,computed } from 'vue'; // ref 属性通过value获取值
// import {useMouse} from '../utils/mouse'

// let {x,y} = useMouse()

// let title = ref("")
// let todos = ref([{ title: '学习vue', done: false }])
// function addTodo() {
//     todos.value.push({title:title.value, done:false})
//     title.value = ""
// }
// function clear() {
//     todos.value = todos.value.filter((v) => !v.done);
// }
// let active = computed(
//     () => {
//         return todos.value.filter((v) => !v.done).length;
//     }
// )
// let all = computed(
//     () => todos.value.length
// )
// let allDone = computed(
//     {
//         get: function () {
//             return active.value === 0;
//         },
//         set: function (value) {
//             todos.value.forEach((item) => { item.done = value; })
//         }
//     }
// )

</script>

<style scoped>
h1 {
    color: blanchedalmond;
}

.done {
    color: gray;
    text-decoration: line-through;
}

.info-wrapper {
    position: fixed;
    top: 20px;
    width: 200px;
}

.info {
    padding: 20px;
    color: white;
    background: #d88986;
}

.modal-enter-from {
    opacity: 0;
    transform: translateY(-60px);
}

.modal-enter-active {
    transition: all 0.3s ease;
}

.modal-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}

.modal-leave-active {
    transition: all 0.3s ease;
}

.flip-list-move {
    transition: transform 0.8s ease;
}

.flip-list-enter-active,
.flip-list-leave-active {
    transition: all 1s ease;
}

.flip-list-enter-from,
.flip-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>