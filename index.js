function isPalindrome(word) {
  // Write your algorithm here
  const reversdWord = word.split("").reverse().join("");
  console.log(reversdWord);

  if (word === reversdWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  Declare function
  Pass in string
  Split string into an array of its individual letters
  reverse the array
  join the reversed string and save in a variable
  compare this new variable to the passed in string
*/

/*
  Add written explanation of your solution here
  The function takes in a string, splits it into its insividual elements then reverses the elements. It then joins these elements and compares the result to the passed in string.
  If they are qautl (compared using strict ewuality operator) then the function returns true, and returns false otherwise
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
