function deepCount(a){
  let count = 0;
  for(let i=0;i<a.length;i++){
    if(Array.isArray(a[i])){
      if(a[i].length!==0){
        count += deepCount(a[i]);
      }
    }
    count++;
  }
  return count;
}