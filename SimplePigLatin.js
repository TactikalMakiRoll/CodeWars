function pigIt(str){
  str = str.split(" ");

  for(let i=0;i<str.length;i++){
    if(str[i].charCodeAt(0) >=32 && str[i].charCodeAt(0) <= 64){
      continue;
    }
    else{
      str[i] = str[i].slice(1) + str[i][0];
      str[i] += "ay";
    }
  }

  return str.join(" ");
}