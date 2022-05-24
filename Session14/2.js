let message="hi i am from global";
function parentFunction() {
  console.log(message);

  //Lexical Scope of childFunction() START
   message = "Hi! I'm a message from parent 👋";

  function childFunction() {
    console.log(message);
    return true;
  }

  return childFunction();
  //Lexical Scope of childFunction() END
}

const ans = parentFunction();
// ans();
console.log(ans);

