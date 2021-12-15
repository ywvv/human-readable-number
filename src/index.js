module.exports = function toReadable (number) {
  const first = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const mad = ['', 'thousand', 'million', 'billion', 'trillion'];
  let word = '';

  if(!number){
    return 'zero';
  }

  let tempNumber = number % 100;

  if (Math.floor(tempNumber) < 20) {
    word = first[Math.floor(tempNumber)] + ' ' + word;
  } else {
    word = tens[Math.floor(tempNumber / 10)] + ' ' + first[Math.floor(tempNumber) % 10] + ' ' + word;
  }

  tempNumber = number % 1000;

  if (Math.floor(tempNumber / 100)) {
    word = first[Math.floor(tempNumber / 100)] + 'hundred ' + word;
  }

  return word.trim();
};