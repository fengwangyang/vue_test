export const nodeOps={
    insert(child,parent, anchor){
       if(anchor){
          parent.insertBefore(child, anchor);
       } else {
          parent.appendChild(child);
       }
    },
    remove(child){
      const parent = child.parentNode;
      parent&&parent.removeChild(child);
    },
    createElement(tag){
      return document.createElement(tag);
    },
    hostSetElementText(el, text){
      el.textContent = text;
    },
  }