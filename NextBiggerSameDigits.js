function nextBigger(n){
  if(n<=10){
    return -1;
  }
  
  let number = n.toString();
  let fixedPart = number[0];
  let changedPart = number[0];
  for(let i=number.length-1;i>0;i--){
    if(number[i-1]<number[i]){
      fixedPart = number.slice(0,i-1);
      changedPart = number.slice(i-1,number.length);
      fixedPart = fixedPart.split("");
      changedPart = changedPart.split("");

      changedPart = findSmallestDiffSwap(changedPart);
      fixedPart.push(changedPart.shift());
      
      fixedPart = fixedPart.join("");
      fixedPart += changedPart.sort((a,b)=>a-b).join("");
      return parseInt(fixedPart);
    }
  }
    
  return -1;
}

function findSmallestDiffSwap(arr){
  let starter = arr[0];
  let resultindex = 1;
  let diff = Math.abs(arr[1] - starter);
  for(let i = 1;i<arr.length;i++){
    if((Math.abs(arr[i]-starter))<diff && arr[i]>starter){
      resultindex = i;
    }
  }
  
  let temp = arr[0];
  arr[0] = arr[resultindex];
  arr[resultindex] = temp;
  
  return arr;
}