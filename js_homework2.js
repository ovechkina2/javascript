function pow (x,exponent) {
    let result = 1
    for (let i = 0; i < exponent; i++) {
    result = result * x;
    }
    return `Результат зведення числа ${x} у степінь ${exponent} = ${result};`;

}
//Я думала спочатку присвоїти значення для виклику функції, let finalResult = pow(2,2)
//Але здається в цьому немає сенсу...
console.log(pow (2,2));
console.log(pow (2,3));
console.log(pow (2,4));
console.log(pow (2,5));
console.log(pow (2,6));
console.log(pow (2,7));