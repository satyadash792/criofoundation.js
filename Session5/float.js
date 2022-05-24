function reverseInt(num) {
  let reversedNum = 0;
  let lastDigit = 0;

  while (num !== 0) {
    lastDigit = num % 10;
    num = parseInt(num / 10);
    reversedNum = reversedNum * 10 + lastDigit;
    if (reversedNum < Math.pow(-2, 31) || reversedNum > Math.pow(2, 31) - 1)
      return 0;
  }

  return reversedNum;
}