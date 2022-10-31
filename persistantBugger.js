function persistence(num) {
   let result = 0;
  while(num>=10){
    let multiple = num;
    num = multiple % 10;
    while(multiple > 10){
      multiple = Math.floor(multiple/10);
      num*=multiple%10;
    }
    result++;
  }
 return result;
}