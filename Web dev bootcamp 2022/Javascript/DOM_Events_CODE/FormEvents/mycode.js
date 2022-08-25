const form = document.querySelector('#shelterForm');
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit", function(e) {
   e.preventDefault(); //domt send any request or new url
   const catName = input.value; //value of input 
   const newLi = document.createElement("LI");
   newLi.innerText = catName;
   list.append(newLi);
});


