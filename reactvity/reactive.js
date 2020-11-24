import {isObject} from '../utils'
import {mutableHandles} from './baseHandle'

export function reactive(target){
    return createReactive(target, mutableHandles);
}

const proxyMap = new WeakMap();

function createReactive(target, baseHandle){
    if(!isObject(target)) return target;
    const existingMap = proxyMap.get(target);
    if(existingMap) return existingMap;
   const proxy = new Proxy(target, baseHandle);
   proxyMap.set(target, proxy);
   return proxy;
}
