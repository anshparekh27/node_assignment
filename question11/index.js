// 11-----Create a function to check if a string is a palindrome.
function checkPalindrome(s) {
    let reverse = s.split("").reduce((acc, curr) => curr + acc, "");
    if (reverse === s) return true;
    else return false;
  }