const euroToDollar = 1.07; 
const dollarToYen = 146.26; 

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * euroToDollar; 
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * dollarToYen; 
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = valueInEuro * 0.87;
    return valueInPound;
}

const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));

module.exports={ sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };