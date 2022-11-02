function solution(start, finish) 
{
  let result = 0;
  while(start!==finish){
    if(finish-start===2){
      result+=2;
      break;
    }
    else if(finish-start>=3){
      result+=1;
      start+=3;
    }
    else{
      result+=1;
      start+=1;
    }
  }
  return result;
}

//OR

function solution(start, finish) 
{
  let stepsToClimb = finish-start

  let numBigJumps = Math.floor(stepsToClimb/3)

  let numSmallJumps = stepsToClimb % 3

  return numBigJumps + numSmallJumps
}