const button = document.querySelector("button");
const h1 = document.querySelector("h1");
button.addEventListener("click", function () {
  const newColor = makeRandColor(); //runs the var below it
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

const makeRandColor = () => {
  // this var gives rgb different values for to change body
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const buttons = document.querySelector('button')

for(let button of buttons){
  button.addEventListener('click', function() {
    console.log("CLICKED!")
  })
}