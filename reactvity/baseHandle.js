import { isObject, isInteger, hasOwn} from "../utils";
import {reactive} from './reactive';
import { track, trigger } from './effect'

function creatGet(){
    return function get(target, key, receiver){
        const res = Reflect.get(target, key, receiver);

        if(typeof key === 'symbol'){
            return res;  // 原生对象内置属性
        } 

        // 收集依赖
        track(target, key);

        if(isObject(res)){
            reactive(res);
        }

        return res;
    };
}
function creatSet(){
    return function get(target, key, value, receiver){

       const oldValue = target[key];
       const res = Reflect.set(target, key,value, receiver);

       let hadKey =  Array.isArray(target)&& isInteger(key) ? target.length > Number(key) :  hasOwn(target, key);;

       if(!hadKey){// 该属性为新增属性
        trigger(target, 'add', key, value);
       } else { // 修改
            if(oldValue !== value) {
                trigger(target, 'update', key, value, oldValue);
            }
       }
       return res;
    };
}

const get = creatGet();
const set = creatSet();

export const mutableHandles={
    get,
    set,
}