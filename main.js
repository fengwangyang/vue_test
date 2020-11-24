import Vue from './src/index';

const root = document.getElementById('root');

const { render, effect, reactive } = new Vue();

let state = reactive({
    msg: 'test4321'
});

const vnode = {
    tag: 'div',
    children: 'fdsafsd',
}

effect(()=>{
    console.log(3434, state);
    root.innerHTML = state.msg;
})

setTimeout(()=>{
    state.msg = 'change: 数据'
}, 1000)

render(vnode, root);
