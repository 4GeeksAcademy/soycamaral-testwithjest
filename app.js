const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueinDollar) {
    let valueinYen = valueinDollar * 146.26;
    return valueinYen;
}

const fromYenToPound = function (valueinYen) {
    let valueinPound = valueinYen * 0.87
    return valueinPound;

}

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))


module.exports={ sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }