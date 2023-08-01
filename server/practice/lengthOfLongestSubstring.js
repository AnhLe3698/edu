// Problem: Longest Substring Without Repeating Characters

// Given a string, find the length of the longest substring without repeating characters.

// Write a function lengthOfLongestSubstring to solve the problem.

function lengthOfLongestSubstring (string) {
  const letterMap = {};
  let counter = 0;
  let maxNum = 0;
  for (const i of string) {
    if (letterMap[i] !== undefined) {
      maxNum = counter > maxNum ? counter : maxNum;
      // Reset Count
      counter = 0;
    }

    counter ++;
    letterMap[i] = counter;
  }
  return maxNum;
};

// Alternate answer
/*
function lengthOfLongestSubstring(s) {
    let n = s.length;
    let ans = 0;
    let indexMap = {}; // current index of character

    // try to extend the range [i, j]
    for (let j = 0, i = 0; j < n; j++) {
        if (indexMap[s[j]]) {
            i = Math.max(indexMap[s[j]], i);
        }
        ans = Math.max(ans, j - i + 1);
        indexMap[s[j]] = j + 1;
    }
    return ans;
}
*/

console.log(lengthOfLongestSubstring("abcabcbb"));  // Output: 3
console.log(lengthOfLongestSubstring("bbbbbb"));  // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));  // Output: 3
