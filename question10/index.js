// 10---Implement a function to count the number of vowels in a given string.
function countVowels(s) {
    let arr = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      if (arr.includes(s[i].toLowerCase())) {
        count++;
      }
    }
    return count
}