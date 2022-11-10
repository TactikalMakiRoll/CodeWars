function findOdd(A) {
  //happy coding!
  for(let integer of A){
    if(A.filter((elem)=>{return elem === integer}).length % 2 !== 0){
      return integer;
    }
  }
  return 0;
}