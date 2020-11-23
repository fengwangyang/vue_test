import {nodeOps} from './runtime-dom.js'

export function render(vnode, container){ // 渲染节点到容器里
    console.log(54454545554);
    patch(null, vnode, container);
}


function patch(n1, n2, container){ // n1 是oldvnode  n2 是newvnode
    if( typeof n2.tag === 'string'){ // 不是组件， 标签
        mountElement(n2, container); // 挂载元素

    } else if(typeof n2.tag === 'object'){ // 是个组件

    }
}

function mountElement(vnode, container){
    console.log(453);
    const {tag, children, props} = vnode;
    let el = vnode.el = nodeOps.createElement(tag);
    if(Array.isArray(children)){
        mountChildren(children, el); // 挂载子树
    } else {
        nodeOps.hostSetElementText(el,children);
    }
    nodeOps.insert(el,container);
}

// window.render = render;