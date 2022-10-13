function getPINs(observed) { //0 5 4
  let variations = [['0','8'],
                    ['1','2','4'],
                    ['2','1','5','3'],
                    ['3','2','6'],
                    ['4','1','5','7'],
                    ['5','2','4','6','8'],
                    ['6','3','5','9'],
                    ['7','4','8'],
                    ['8','5','7','9','0'],
                    ['9','6','8'],
                   ]

  
  let result = variations[observed[0].slice()]; // [0,8]
  for(let i=1;i<observed.length;i++){ //for each digit of the code (054)
    let intermediate = result.slice();//[0,8]
    for(let j=0;j<result.length;j++){ 
      for(let k=0;k<variations[observed[i]].length;k++){ 
        // for each variation of next digit (5 -> [5,2,4,6,8])
        // add all digit variations by warping previous amount //
        intermediate.push(result[j] + variations[observed[i]][k]);
      }
    }
    result = intermediate.slice().filter((elem)=>{
      return !(elem.length<(i+1));
    });

  }
  return result;
}