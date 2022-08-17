const btn = document.querySelector("#v2");
btn.onclick = function () {
  //when 2 button is clicked
  console.log("YOU CLICKED ME ");
  console.log("I HOPE IT WORKED!!");
};

function scream() {
  //a function that activates
  console.log("AAHHHHH");
  console.log("Stop Touching Me!");
}

btn.onmouseenter = scream; //when mouse hover it scream activates
