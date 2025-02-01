console.log ( "number" +3 +3); // Result: number33. Відбувається неявне перетворення (конкатенація) типу number  y string 

console.log (null + 3); //Result: 3. Null (пустота,0) додається до числа 3, оператична дія повертає нам цифру 3.

let num = 5; // число
let str = "qwerty" //строка 
console.log (5 && "qwerty") // Result:qwerty.  5 = true, "qwerty" = true. Обидві сторони повертають true, отже  в консоль виведеться останнє істине значення

console.log(+'40' + +'2' + "hillel"); //Result: 42hillel Унарний оператор (+)  переводить "40" і "2" у number. Операція додавання: 40+2=42. Далі конкатенація строки і числа: 42+ hillel = "42hillel"

let num1 = 5;
let num2 = 6;
let c = "10" - 5;// 5 number 
console.log  ('10' - 5 === 6); //Result: false.  10-5=5, a 5 не рівне 6 

console.log (true + false); // Result: 1. True у boolean =  1, False = 0. Маємо: 1+0 = 1 

console.log('4px' - 3); //Result: NaN. Від string з літерами неможна віднімати number 

console.log('4' - 3); // Result: 1. Від string з цифрами можна віднімати number 

console.log('6' + 3 ** 0); // Result: "61". Спочатку відбувається  піднесення до степення: будь яке число у 0 степені дає 1 ( 3**0=1). Далі відбувається конкатенація: '6'+1 = '61'

console.log (12 / '6') // Result: 2. JS переводить автоматично "6" у number 6

console.log ('10' + (5 === 6)); // Result: "10false". Строга рівність 5 === 6 не виконується і повертає false. Далі виконується конкатенація у string "10"+ false =10false


console.log(null == '') // Result: false. Бо null == undefined тільки повертає true;


console.log(3 ** (9 / 3)); // Result: 27. Звичайна математика

console.log(!!'false' == !!'true');  //Result: true. Подвійде заперечення !! переводить значення у boolean, а  дві строки у boolean означають true.

console.log(0 || '0' && 1); //Result:  1 (true). Частина && поверне true (що означає 1), бо строка не пуста. Далі  true (1) || 0  повертає перше істине значення = 1

console.log((+null == false) < 1); //Result: false. Унарний Оператор (+) переводить null у числове значення = 0.  Частина +null == false повертає true(1). Потім 1 < 1 = false

console.log(false && true || true); //Result: true . Частина && повертає перше фальшиве значення false. Потім false ||true = true як перше істине значення

console.log(false && (false || true)); //Result:false Виконуємо порівння у дужках false ||true = true. Потім виконуємо false&&true = false

console.log((+null == false) < 1 ** 5); //Result:false. Унарний оператор (+) переводить значення null у число 0. Порівняння 0 == false повертає true. Один у 5 степені = 1.  Порівняння 1 (true) < 1 = false

