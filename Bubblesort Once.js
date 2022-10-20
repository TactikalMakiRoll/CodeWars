function bubblesortOnce(a) {
  let b = JSON.parse(JSON.stringify(a));
  for(let i=0;i<b.length-1;i++){
    if(b[i]>b[i+1]){
      let temp = b[i+1];
      b[i+1] = b[i];
      b[i] = temp;
    }
  }
  return b;
}