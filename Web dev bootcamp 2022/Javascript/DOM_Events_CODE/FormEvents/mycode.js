const form = document.querySelector('#shelterForm');
const input = document.querySelector("#catName");
form.addEventListener("submit", function(e) {
   e.preventDefault();
   console.log("SUBMITTED THE FORM");
});