// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement("div"); //create a block ele
  pokemon.classList.add("pokemon");
  const label = document.createElement("span"); // creates an inline
  label.innerText = `#${i}`; //numbers each pokemon
  const newImg = document.createElement("img"); //creates an image
  newImg.src = `${baseURL}${i}.png`; //change the url number to pull from poke database
  pokemon.appendChild(newImg); // it puts the image on the pages
  pokemon.appendChild(label); // it puts the number on the pahe
  container.appendChild(pokemon); // it puts the block on the page
}
