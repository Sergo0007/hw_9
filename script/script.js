// Калькулятор стоимости товаров
function calculateTotalPrice(price, quantity) {
    return price * quantity;
}
console.log(calculateTotalPrice(5,5));

// Проверка на четность
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(6));

// Реверс строки
function reverseString(string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}
console.log(reverseString("здесь был Вася"));

// Конвертер температуры
function convertCelsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
    //return fahrenheit - 32 * 5/9; расчет наооборот
}
console.log(convertCelsiusToFahrenheit(15));