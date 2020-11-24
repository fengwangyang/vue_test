import {render} from '../render/index.js' 
import * as reactivty from '../reactvity/index.js'

export default function wangyang_vue(){
    this.render = render;
    for(let key in reactivty){
        this[key] = reactivty[key]
    }
}