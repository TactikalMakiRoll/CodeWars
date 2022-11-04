function duplicateCount(text){
  text = text.toLowerCase();
  let resultCount = 0;
  while(text.length>0){
    let currCount = text.split("").filter((elem) => elem === text[0]).length;
    if(currCount >= 2)
    {
      resultCount++;
    }
    text = text.replace(new RegExp(text[0],"g"), "");
  }
  return resultCount;
}