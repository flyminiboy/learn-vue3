import {ref, onMounted, onUnmounted} from 'vue'

//  onMounted  onUnmounted 实现生命周期

export function useMouse() {
    const x = ref(0)
    const y = ref(1)

    function update(e) {
        x.value = e.pageX
        y.value = e.pageY
        console.log('x=%d,y=%d', x.value, y.value)
    }

    onMounted(()=>{
        window.addEventListener('mousemove', update) // 监听 mousemove
    })

    onUnmounted(()=>{
        window.removeEventListener('mousemove', update)
    })

    return {x,y}
}