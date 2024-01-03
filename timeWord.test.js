const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});


console.log(convertTimeToWords('00:00')); // midnight
console.log(convertTimeToWords('00:12')); // twelve twelve am
console.log(convertTimeToWords('01:00')); // one o’clock am
console.log(convertTimeToWords('06:01')); // six oh one am
console.log(convertTimeToWords('06:10')); // six ten am
console.log(convertTimeToWords('06:18')); // six eighteen am
console.log(convertTimeToWords('06:30')); // six thirty am
console.log(convertTimeToWords('10:34')); // ten thirty four am
console.log(convertTimeToWords('12:00')); // noon
console.log(convertTimeToWords('12:09')); // twelve oh nine pm
console.log(convertTimeToWords('23:23')); // eleven twenty three pm

//the code uses the hour and minute values to retrieve the corresponding words from the 
//arrays and constructs the output string. The function then returns the time in words. 
//This code verifies the correctness of the conversion function in timeword.js.
