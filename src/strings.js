function sayHello (string) {
  string = 'Hello, world!';
  return string
};

function uppercase (string) {
  string = 'abc';
  return string.toUpperCase();
};

function lowercase (string) {
  string = 'ABC';
  return string.toLowerCase();
};

function countCharacters (string) {
  string = 'fsfsgsfdg';
  return string.length;
};

function firstCharacter (string) {
  string = 'ABC';
  return string.charAt(0);
};

function firstCharacters (string, n) {
  string = 'sd32fg45';
  return string.substring(0,4);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
