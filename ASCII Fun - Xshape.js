function x(n){
  //have fun :)
  let result = "";
  for(let i=0,j=n-1;i<n;i++,j--){
    for(let counter=0;counter<n;counter++){
      if(counter===i || counter===j){
        result+='■';
      }
      else{
        result+='□';
      }
    }
    result+='\n';
  }
  result = result.slice(0,result.length-1);
  return result;
}