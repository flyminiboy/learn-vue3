import { computed, ref, watchEffect, defineEmits } from 'vue'

let inputEvent = defineEmits('update-tip')

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

    return { item, todos, showTip, addTodo, clear, active, all, allDone }

}

function useStorage(name, defValue = []) {
    let data = ref(JSON.parse(localStorage.getItem(name) || JSON.stringify(defValue)))
    watchEffect(() => {
        localStorage.setItem(name, JSON.stringify(data.value))
    })
    return data
}