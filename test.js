const { sum } = require ('./app.js');

test ('adds 14 + 9 to equal 23', () => { 
    let total = sum(14,9);
    expect(total).toBe(23);

});
test ("One euro should be 1.07 dollars", function () {
    const {fromEuroToDollar} = require ('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected =3.5 * 1.07;
expect(fromEuroToDollar(3.5)).toBe(3.745)
});

test ("One dollar should be 146.26 yenes", function () {
    const{fromDollarToYen} = require ('./app.js');
    const yen = fromDollarToYen (2);
    const expected = 2 * 146.26;
    expect(fromDollarToYen(2)).toBe(292.52)
});
test ("One yen should be 0.87 pounds", function (){
    const{fromYenToPound} = require ('./app.js');
    const pound = fromYenToPound (4);
    const expected = 4 * 0.87;
    expect(fromYenToPound(4)).toBe(3.48)
});
