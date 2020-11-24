export function effect(fn, options={}){
    const effect = createReactiveEffect(fn, options);
    if(!options.lazy){
        effect();
    } 
    return effect;
}

let activeEffect;
const effectStack = [];
function createReactiveEffect(fn, options){
    const effect =  function(){
        if(!effectStack.includes(effect)){  // 防止栈溢出
            try{
                activeEffect = effect;
                effectStack.push(activeEffect);
                return fn();
            } finally {
                effectStack.pop();
                activeEffect = effectStack[effectStack.length-1];
            }
        }
    }
    
    effect.id++;
    effect.deps = []; // effect依赖了那些属性
    effect.options = options;
    return effect;
}
const targetMap = new WeakMap();
export function track(target, key){ // 绑定effect和数据状态
    if(activeEffect === undefined) return;
    let depsMap = targetMap.get(target);
    if(!depsMap){
        targetMap.set(target, depsMap = new Map());
    }
    let dep = depsMap.get(key);
    if(!dep){
        depsMap.set(key, (dep = new Set()))
    }
    if(!dep.has(activeEffect)){
        dep.add(activeEffect)  // 向属性值里添加 effect
        activeEffect.deps.push(dep); // 在effect里添加属性
    }
}


export function trigger(target, type , key, value, oldValue){ // 触发更新
        const depsMap = targetMap.get(target);
        if(!depsMap) return;
        const run = (effects)=>{
                if(effects) effects.forEach(fn => fn())
        }
        if(key!= void 0){
            run(depsMap.get(key));
        }
}