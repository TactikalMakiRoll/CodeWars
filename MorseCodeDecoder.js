decodeMorse = function(morseCode){
  let result = [];
  morseCode = morseCode.trim().split("   ");
  for(let i=0;i<morseCode.length;i++){
    let word = morseCode[i].split(" ");
    let translatedWord = [];
    for(let j=0;j<word.length;j++){
      translatedWord.push(MORSE_CODE[word[j]])
    }
    word = translatedWord.join("");
    result.push(word);
  }
  return result.join(" ");
}