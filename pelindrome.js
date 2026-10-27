function pelindromeNumber(num) {
  let rev = 0;
  let original = num;
  while (num > 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return original === rev;
}
const number = 121;
const isPelindrome = pelindromeNumber(number);
