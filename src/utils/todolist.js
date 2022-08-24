import { computed, ref, watchEffect, defineEmits } from 'vue'

export function useTodos() {
    let item = ref({ title: "", done: false })
    let todos = useStorage('todos', [])
    let showTip = ref(false)

    // let tipEvent = defineEmits('update-tip')

    function addTodo() {

        if (!item.value.title) {
            console.log('什么也没有输入')
            showTip.value = true
            // tipEvent('update-tip', true)
            setTimeout(() => {
                console.log('dismiss')
                showTip.value = false
                // tipEvent('update-tip', false)
            }, 1500)
            return
        }

        console.log('输入内容', item.value.title)

        todos.value.push({ title: item.value.title, done: item.value.done })
        item.value.title = ""
    }

    function clear() {
        todos.value = todos.value.filter((v) => !v.done)
    }

    function remove(event, index) {

// JavaScript中的splice主要用来对js中的数组进行操作，包括删除，添加，替换等。

// 1.删除-用于删除元素，两个参数，第一个参数（要删除第一项的位置），第二个参数（要删除的项数） 
// 2.插入-向数组指定位置插入任意项元素。三个参数，第一个参数（插入位置），第二个参数（0），第三个参数（插入的项） 
// 3.替换-向数组指定位置插入任意项元素，同时删除任意数量的项，三个参数。第一个参数（起始位置），第二个参数（删除的项数），第三个参数（插入任意数量的项）

        todos.value.splice(index, 1)
    }

    let active = computed(
        () => {
            return todos.value.filter((v) => !v.done).length;
        }
    )

    let all = computed(
        () => todos.value.length
    )

    let allDone = computed(
        {
            get: function () {
                return active.value === 0
            },
            set: function (value) {
                todos.value.forEach(element => {
                    element.done = value
                });
            }
        }
    )

    return { item, todos, showTip, addTodo, clear, remove, active, all, allDone }

}

function useStorage(name, defValue = []) {
    let data = ref(JSON.parse(localStorage.getItem(name) || JSON.stringify(defValue)))
    watchEffect(() => {
        localStorage.setItem(name, JSON.stringify(data.value))
    })
    return data
}