let input = prompt("what would you like to do?"); // asks what they want to do
const todos = ["collect chicken Eggs", "Clean Litter Box"]; // stores the todos const best with arrays
while (input !== "quit" && input !== "q") {
  //keeps asking till the say Quit ((!==):not inequality).keeps runing hold whole loop
  if (input === "list") {
    console.log("**********"); // shows ** when "list" is typed
    for (let i = 0; i < todos.length; i++) {
      //for loop starts at index 0 while its less than .length add one more to i
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("*********");
  } else if (input === "new") {
    const newTodo = prompt("Ok, whats the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`); //tells user added to list
  } else if (input === "delete") {
    const index = parseInt(prompt("Ok, enter an index to delete:"));
    if (!Number.isNaN(index)) {
      //parse checks if num value was entered
      const deleted = todos.splice(index, 1); //used splice to delete
      console.log(`Ok, deleted ${deleted[0]}`); //tells user deleted
    } else {
      console.log("unkown index");
    }
  }
  input = prompt("what would you like to do");
}
console.log("OK QUIT THE APP"); // tells them to quit the app

//not saying undefined
