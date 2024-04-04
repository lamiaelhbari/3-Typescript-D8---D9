/* Challenge : An isogram is a word that has no repeating letters, consecutive or 
non-consecutive. Implement a function that determines whether a string that contains
only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
Example: (Input --> Output)
"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false*/
// --------------------------------------------------------------------->

function isIsogram(str) {
  // 1- Converts the string :
  const lowerCaseStr = str.toLowerCase();

  // object to store the occurrences of each letter:
  const letterCount = {};

  // 2- Iterates over each character of the string :
  for (let char of lowerCaseStr) {
    // 3- Ignores characters other than letters:
    if (/^[a-z]$/.test(char)) {
      // If the letter is already present :
      if (letterCount[char]) {
        return false;
      }
      // record the occurrence of this letter :
      letterCount[char] = true;
    }
  }

  // 4- If no letter is repeated, the string is an isogram :
  return true;
}

// Test :

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("moose"));
console.log(isIsogram("aba"));



