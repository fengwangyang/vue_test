export function isObject(target){
   return typeof target === 'object';
}
export function isInteger(val){
   return parseInt(val, 10) + '' === val;
}

const hasOwnProperty = Object.prototype.hasOwnProperty;
export const hasOwn = (val,key) => hasOwnProperty.call(val,key);