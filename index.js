// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const numberTextMap = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
  };

  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00') {
    return 'midday';
  }

  const hour = time.split(':')[0];
  const hourInt = parseInt(hour);
  const minutes = time.split(':')[1];
  const minsInt = parseInt(minutes);

  if (minsInt === 15) {
    return `quarter past ${numberTextMap[hourInt]}`;
  }

  if (minsInt === 45) {
    return `quarter to ${numberTextMap[hourInt + 1]}`;
  }

  if (minsInt === 30) {

    return `half past ${numberTextMap[hourInt]}`;
  }

  if (minsInt < 30) {
    return `${numberTextMap[minsInt]} past ${hourInt}`;
  }


  if (minsInt > 30) {
    const minDiff = 60 - minsInt;
    return `${numberTextMap[minDiff]} to ${numberTextMap[hourInt + 1]}`;
  }

  return 'Cant find text';
}

module.exports = { convertTimeToWords };
