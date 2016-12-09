// 8. Given a string, compute recursively a new string
// where all the 'x' chars have been removed.

var text = "abcdex abcdex abcdex abcdex"

function removerX(inputText) {
  if (inputText.length == 0) {
    return inputText;
  } else if (inputText[0] == 'x' || inputText[0] == 'X') {
    return '' + removerX(inputText.slice(1, inputText.length));
  } else {
    return inputText[0] + removerX(inputText.slice(1, inputText.length));
  }
}

console.log(removerX(text))
