// function reverseInt(num) {
//   const limit = Math.pow(2, 31);
//   if(num < -limit || num > limit-1) {
//     return 0;
//   }
//   let numCopy = num;
//   num = Math.abs(num);
//   let rev = 0;
//   while (num > 0) {
//     rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10);
//   }
//   return numCopy < 0 ? -rev : rev;
// }
// let num = -123;
// console.log(reverseInt(num));

function reverseInt(num) {
  let rev = 0;
  while (num !== 0) {
    const rem = num % 10;
    num = Math.trunc(num / 10);
    rev = rev * 10 + rem;
    if (rev < -2147483648 || rev > 2147483647) {
      return 0;
    }
  }
  return rev;
}

console.log(reverseInt(-123)); // -321
console.log(reverseInt(120)); // 21
console.log(reverseInt(1534236469)); // 0
