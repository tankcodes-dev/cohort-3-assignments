/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
	const reversed = str1.split('').reverse().join('')
	return reversed === str2;
}

console.log(isAnagram("spar", "raps")); //true
console.log(isAnagram("spar", "rpas")); //false

module.exports = isAnagram;
