const numberToCheck = 9;
let powerOfThree = 1;

while (powerOfThree < numberToCheck) {
    powerOfThree *= 3;
}

if (powerOfThree === numberToCheck) {
    console.log(`${numberToCheck} можна отримати зведенням числа 3 у ступінь.`);
} else {
    console.log(`${numberToCheck} не можна отримати зведенням числа 3 у ступінь.`);
}