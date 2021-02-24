'use strict';

const hiElems = document.querySelectorAll('.hi');
 

for (const elem of hiElems){
    if(elem.classList.contains('red')){
        elem.style.fontSize = '72px';
    }
}