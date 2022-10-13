// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
// Any whitespace at the end of the line should also be stripped out.

function solution(input, markers) {
  input = input.split('\n');
  for(let i = 0;i<markers.length;i++){
    for(let j=0;j<input.length;j++){
      if(input[j].includes(markers[i])){
        input[j] = input[j].slice(0,(input[j].indexOf(markers[i])));
      }
      input[j] = input[j].trim();
      if(input.length!==1 && j!==input.length-1){
        input[j] += "\n";
      }
    }
  }
  console.log(input)
  return input.join('');
};

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"