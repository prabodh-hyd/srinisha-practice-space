

let str1 = "srinisha";
let str2 = "sireesha";
function characters(str1, str2) {
  let characters = "";

  for (let i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) !== -1 && characters.indexOf(str1[i]) === -1) {
      characters += str1[i];
    }
  }
  return characters;
}
console.log(characters(str1, str2)); 