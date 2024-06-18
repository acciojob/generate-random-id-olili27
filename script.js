function makeid(l) {
  // write your code here
  let choices = "abcdefghijklmnopqrstuvwxyz0123456789";

  let str = ""

  while(l > 0) {
    str += choices[Math.floor(Math.random() * choices.length)];
    l--;
  }
  return str
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
