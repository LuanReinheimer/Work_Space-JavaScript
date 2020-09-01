let btns = document.querySelectorAll('button'); // pegando todos os botoes

// for(let i = 0; i < btns.length; i++){
//     btns[i].onclick = function(){
//         document.querySelector('body').style.backgroundColor = 
//             this.getAttribute('class').split('-')[1];
//     };
// }

for (let i in btns) {
    btns[i].onclick = function(){
        document.querySelector('body').style.backgroundColor = 
            this.getAttribute('class').split('-')[1]; // Pegando as classes do HTML e pegando o segundo elemento
    };
}