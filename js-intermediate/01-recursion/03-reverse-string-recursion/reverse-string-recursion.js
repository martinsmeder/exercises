function reverseString(str) {
  if (str.length === 0) {
    return '';
  }

  const lastLetter = str.slice(-1); // Get the last character
  const remainingLetters = str.slice(0, -1); // Get the remaining characters

  return lastLetter + reverseString(remainingLetters);
}

// Explanation (Example string: "Hello"):
// 1. remainingLetters = "Hell" > "o" is saved from reverseString("Hello")
// 2. remainingLetters = "Hel" > "l" is saved from reverseString("Hell")
// 3. remainingLetters = "He" > "l" is saved from reverseString("Hel")
// 4. remainingLetters = "H" > "e" is saved from reverseString("He")
// 5. remainingLetters = "" > "H" is saved from reverseString("H")
// Base case is reached: returns ""
// 1. ("" from base case) + "o" = "o"
// 2. ("o" from recursive case) + "l" = "ol"
// 3. ("ol" from recursive case) + "l" = "oll"
// 4. ("oll" from recursive case) + "e" = "olle"
// 5. ("olle" from recursive case) + "H" = "olleH"

module.exports = reverseString;
