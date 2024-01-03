function convertTimeToWords(time) {
    const hours = parseInt(time.slice(0, 2));
    const minutes = parseInt(time.slice(3));
  
    const hoursInWords = [
      'midnight',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'noon',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven'
    ];
  
    const minutesInWords = [
      'o’clock',
      'oh one',
      'oh two',
      'oh three',
      'oh four',
      'oh five',
      'oh six',
      'oh seven',
      'oh eight',
      'oh nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
      'twenty',
      'twenty one',
      'twenty two',
      'twenty three',
      'twenty four',
      'twenty five',
      'twenty six',
      'twenty seven',
      'twenty eight',
      'twenty nine'
    ];
  
    let timeInWords = '';
  
    if (minutes === 0) {
      if (hours === 0 || hours === 12) {
        timeInWords = hoursInWords[hours];
      } else {
        timeInWords = hoursInWords[hours] + ' o’clock';
      }
    } else if (minutes === 30) {
      timeInWords = hoursInWords[hours] + ' thirty';
    } else if (minutes === 45) {
      timeInWords = 'quarter to ' + hoursInWords[hours + 1];
    } else if (minutes === 15) {
      timeInWords = 'quarter past ' + hoursInWords[hours];
    } else if (minutes < 30) {
      timeInWords = minutesInWords[minutes] + ' past ' + hoursInWords[hours];
    } else {
      timeInWords =
        minutesInWords[60 - minutes] + ' to ' + hoursInWords[hours + 1];
    }
  
    if (hours >= 12) {
      timeInWords += ' pm';
    } else {
      timeInWords += ' am';
    }
  
    return timeInWords;
  }
