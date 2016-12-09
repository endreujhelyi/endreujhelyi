// 9. Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a "*".

var text = "abcde"

function asterix(inputText) {
  if (inputText.length == 1) {
    return inputText;
  } else {
    return inputText[0] + '*' + asterix(inputText.slice(1, inputText.length));
  }
}

console.log(asterix(text))
