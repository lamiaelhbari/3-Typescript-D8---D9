/* This challenge involves creating a function to condense arrays of integers, replacing
   consecutive identical numbers with their count and single non-repetitive numbers with
   1, until the array is reduced to a single integer.
*/

function setReducer(input) {
  // // Check if the length of the input is 1, if so, return the single element :
  if (input.length === 1) return input[0];
  let newInput = []; // Initialize a new array to store the reduced numbers

  // Loop through the numbers in the input :
  for (let i = 0, count = 1; i < input.length; i++) {
    // Check if the current number is the same as the next number :
    if (input[i] === input[i + 1]) {
      count += 1; // If yes, increment the counter
    } else {
      // If no, add the count of repetitions to the new array
      newInput.push(count);

      count = 1; // Reset the counter for the next group of numbers
    }
  }

  console.log(newInput); // Display the new array (for debugging purposes)
  return setReducer(newInput);
}
// Test cases :
console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7])); // Should return 2
console.log(setReducer([2])); // Should return 2

/*
[0, 4, 6, 8, 8, 8, 5, 5, 7]
1 1 1 3 2 1
3 1 1 1
3 3
2
*/
