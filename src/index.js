module.exports = function getZerosCount(number, base) {
  // your implementation
  let powerOfPrimeFactor = 0;
  const arr = [];

  for (let i = 2; i <= base; i++) {
    if (base % i != 0) continue;
    while (base % i == 0) {
      base /= i;
      powerOfPrimeFactor += 1;
    }
    
    let primeFactor = i,
        num = number,
        numberOfZeros = 0;

    while(num > 1) {
      num = Math.floor(num / primeFactor);
      numberOfZeros += num;
    }

    arr.push(Math.floor(numberOfZeros / powerOfPrimeFactor));
    if (base == 1) break;
    powerOfPrimeFactor = 0;
  }
  
  arr.sort(function(a, b) { return a - b;});
  return arr[0];
}