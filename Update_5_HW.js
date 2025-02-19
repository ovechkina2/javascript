const medicalServices = {
    bloodTest: "100 uah",
    MRT: "1700 uah",
    USD: "800 uah",
    price(){
        let price = 0
        for (let key in this){
            if ( typeof this[key] !== "function") {
                let num = parseInt(this[key]);
            {
                if(!isNaN(num))
               price = num + price;
            }
        }
    }
    return price;
},
maxPrice(){
    let maximum = 0;
for (let key in this){
    if ( typeof this[key] !== "function"){
        let num = parseInt(this[key]);
        maximum = Math.max(maximum, num)
    }

}
return maximum  
},
minPrice(){
    let minimum = Infinity;
    for (let key in this){
        if (typeof this[key] !=="function")
        {
            let num = parseInt(this[key]);
            if (!isNaN(num))
            minimum = Math.min(minimum, num)
        }
    }
    return minimum
}
}
console.log (medicalServices.maxPrice())
console.log (medicalServices.minPrice())
console.log (medicalServices.price())