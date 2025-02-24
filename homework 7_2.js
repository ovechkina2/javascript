const words = "Wonderful Joyful Happiness Time Task Apple"

const pattern = /\b[^\sAa]{6,}\b/g
const match = words.match(pattern);

console.log (match)

//я до останнього хотіла використати просто /\b[^Aa]{6,}\b/g  
// АЛЕ мені завжди повертався ще Time. Я не розумію чому бо він не проходив наче перевірки на довжину...
// Поки розбиралась то наче через пробілийого враховувало... 
// Використала негативний вираз  \sAa  якщо я вірно розібралась