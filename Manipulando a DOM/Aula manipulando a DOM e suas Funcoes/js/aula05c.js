let btns = document.querySelectorAll('button');

// for(let i = 0; i < btns.length; i++){
//     btns[i].onclick = function(){
//         document.querySelector('#app').removeChild(this);
//     };
// }

// fazendo com o for in.

for (let bt in btns) {
    btns[bt].onclick = function(){
        document.querySelector('#app').removeChild(this);
    };
}
