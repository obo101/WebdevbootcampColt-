const input = document.querySelector('input');
const h1 = document.querySelector('h1');
// input.addEventListener('change', function (e){
//     console.log('fhcyewbciwuye')
// })

input.addEventListener('input', function (e) {
   h1.innerText = input.value; // make h1 follow input value 
    console.log(e)
})