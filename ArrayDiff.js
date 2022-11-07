function arrayDiff(a, b) {
  for(let diff of b){
    a = a.filter((elem)=>elem!==diff);
  }
  return a;
}