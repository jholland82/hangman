(function() {
  const letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"
  ];
  const words = [
    "apple",
    "orange",
    "banana",
    "apricot",
    "grape",
    "cherry"
  ];
  const choiceNumber = Math.floor(Math.random() * words.length);
  const word = words[choiceNumber].split('');

  const findLetter = (letter, index) => {
    newIndex = word.indexOf(letter, index);
    if (newIndex !== -1) {
      element = document.getElementById('letter-' + newIndex);
      element.innerHTML = letter;
      findLetter(letter, newIndex + 1);
    };
  };

  console.log(word);
  word.forEach((letter, index) => {
    element = document.createElement("id");
    element.setAttribute('id', 'letter-'+index);
    element.appendChild(document.createTextNode("_"));
    document.getElementById("word-container").appendChild(element);
  });

  document.addEventListener("keypress", event => {
    if (letters.indexOf(event.key) !== -1) {
      findLetter(event.key, 0);
      letters.splice(letters.indexOf(event.key), 1);
    } else {
      alert("You have already chosen this letter");
    }
  });
})();
