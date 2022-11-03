function digitalRoot(n) {
  // ...
  let result = 0;
  while(n>=10){
    n = n.toString()
      .split('')
      .reduce((prev,curr)=>prev+Number(curr),0);
  }
  return n;
}