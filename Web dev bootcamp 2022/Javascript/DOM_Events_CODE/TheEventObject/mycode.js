document.querySelector('button').addEventListener('click', function(evt){
    console.log(evt)
})

// const input = document.querySelector('input');
// input.addEventListener('keydown', function(e){
//     console.log(e.key)
//     console.log(e.code)
// })

// input.addEventListener('keyup', function(){
//     console.log("KEYUP")
// })

window.addEventListener('keydown', function(e){ //making game so detecting all keboard things on vscode 
    switch(e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break; //this prevents multiple cases from runing at the same 
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        default:
            console.log("IGNORED!")
    }
})