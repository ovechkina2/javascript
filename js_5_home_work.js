const medicalServices = {
    bloodTest: "100 uah",
    MRT: "1700 uah",
    USD: "800 uah",
    
    Price(){
    return  Object.values(medicalServices).map(value => parseInt(value))
    .filter(value => typeof value === "number")
    .filter(value => !isNaN(value)) 
    .reduce(function(acc, num)
    {
        return   acc+num;
    })
  },

maxPrice()
{
    return  Object.values(this).map(value => parseInt(value))
    .filter(value => typeof value === "number")
    .filter(value => !isNaN(value)) 
    .reduce((acc, num) => Math.max(acc, num))
},
minPrice()
{
    return Object.values(this).map(value =>parseInt(value))
    .filter(value => typeof value === "number")
    .filter(value => !isNaN(value)) 
    .reduce((acc, num) => Math.min(acc, num))
}
}
console.log(`Максимальна ціна послуги : ${medicalServices.maxPrice()}`);
console.log(`Загальна ціна всіх послуг : ${medicalServices.Price()}`);
console.log(`Мінімальна ціна послуги: ${medicalServices.minPrice()}`);

//Add New Option
medicalServices.vaccination = "888 uah"

//Repeat
console.log(`Нова Максимальна ціна послуги : ${medicalServices.maxPrice()}`);
console.log(`Нова Загальна ціна всіх послуг : ${medicalServices.Price()}`);
console.log(`Нова Мінімальна ціна послуги: ${medicalServices.minPrice()}`);