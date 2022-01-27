let n = prompt("Veuillez entrer un nombre");

for (let i = 1; i <= n; i++) {
  if (i % 3 == 0 && i % 5 !== 0) {
    alert("fizz");
  } else if (i % 5 == 0 && i % 3 !== 0) {
    alert("Buzz");
  } else if (i % 3 == 0 && i % 5 == 0) {
    alert("fizzBuzz");
  } else {
    alert(i);
  }
}
