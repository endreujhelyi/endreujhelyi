// 7. Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

var text = "abcdex abcdex abcdex abcdex";

function coder(inputText) {
  if (inputText.length == 0) {
    return inputText;
  } else if (inputText[0] == 'x') {
    return 'y' + coder(inputText.slice(1, inputText.length));
  } else {
    return inputText[0] + coder(inputText.slice(1, inputText.length));
  }
}

console.log(coder(text));




// SECOND Version

function replaceX(inputText) {
  if (inputText == '') {
    return '';
  } else {
    return checkLetter(inputText[0]) + replaceX(inputText.slice(1, inputText.length));
  }
}

function checkLetter(letter) {
  if (letter == 'x') {
    return 'y';
  } else {
    return letter;
  }
}

console.log(replaceX(text));
