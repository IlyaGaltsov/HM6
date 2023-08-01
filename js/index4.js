const numberToCheck = 9;
let isPrime = true;

if (numberToCheck <= 1) {
isPrime = false;
} else {
for (let i = 2; i <= Math.sqrt(numberToCheck); i++) {
    if (numberToCheck % i === 0) {
    isPrime = false;
    break;
    }
}
}

if (isPrime) {
console.log(`${numberToCheck} є простим числом.`);
} else {
console.log(`${numberToCheck} не є простим числом.`);
}