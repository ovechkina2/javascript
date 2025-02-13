function checkProbabilityTheory(count) {

let i = 1;
let numberOfOdd = 0;
let numberOfEven = 0;

while (i <= count) {
  
let randomInt = Math.floor(100 + Math.random()* (1000-100+ 1 ))
if (randomInt % 2 === 0)
    {
      numberOfEven++ ;
      console.log (`${randomInt} є парним числом`);
    }
    else
    {
        numberOfOdd++ 
    console.log (`${randomInt} є непарним числом`);
    }
    i++
}
console.log (`Кількість непарних значень: ${numberOfOdd} \nКількість парних чисел: ${numberOfEven}`)

let evenPercent = (numberOfEven/count)*100;
console.log(`Парні: ${evenPercent}%`);

let oddPercent = (numberOfOdd/count) *100
console.log(`Не парні: ${oddPercent}%`);

return `Співвідношення парних значень до непарних значень = ${evenPercent}% : ${oddPercent}% `
}
console.log (checkProbabilityTheory(5)) //Скільки чисел  буде сгенеровано