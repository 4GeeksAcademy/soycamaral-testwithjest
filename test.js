const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => { 
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function () {
    const expected = 3.5 * 1.07; // Calcular el valor esperado
    expect(fromEuroToDollar(3.5)).toBe(expected); // Usar el valor esperado
});

test("One dollar should be 146.26 yenes", function () {
    const expected = 2 * 146.26; // Calcular el valor esperado
    expect(fromDollarToYen(2)).toBe(expected); // Usar el valor esperado
});

test("4 yenes should be approximately 0.02243 pounds", function (){
    const expected = (4 / 156.5) * 0.87;
    expect(fromYenToPound(4)).toBeCloseTo(expected, 5);
});