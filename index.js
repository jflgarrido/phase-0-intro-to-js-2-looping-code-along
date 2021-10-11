const names = ["Lisa", "Kaitlin", "Jan"];

function writeCards(names) {
    let birthday = []
  for (let i = 0; i < names.length; i++) {
    birthday.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
}
  return birthday;
}

writeCards(names);

let number = 10
function countDown(number) {
    while (number > -1) {
        console.log(number--)
    }
    return number;
}
countDown(number);