// Let put validation :: REACT
function sum(n1 = 0, n2 = 0)
{
  let result = n1 + n2;
  return result;
}

let output1 = sum();
console.log(output1);

let output2 = sum(10);
console.log(output2);

let output3 = sum(10, 20);
console.log(output3);
