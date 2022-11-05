function findOutlier(integers){
  let firstintegers = integers.slice(0,3);
  let odd = firstintegers.filter((elem)=>elem%2!==0);
  let even = firstintegers.filter((elem)=>elem%2===0);
  return integers.find((elem) => Math.abs(elem % 2) === (odd.length > even.length ? 0 : 1));
}