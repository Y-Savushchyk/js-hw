function findLongestWord(string) {
  let words = string.split(' ');
  //   console.log(words);
  for (const word of words) {
    console.log(word.length);
  }
}
findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');
