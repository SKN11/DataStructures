/*
Anagram means rearranging the letter of a word then both word will be called as nagram of each other

*/


function validAnagram(first, second) {  //using frequency counter

  if (first.length !== second.length) return false; //first check

  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1; // if letter exists, increment, otherwise set to 1
  }
  //console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) return false; // can't find letter or letter is zero then it's not an anagram
    else lookup[letter] -= 1;
  }
  return true;
}

validAnagram('iceman'.split(''), 'cinema'.split(''));  //true
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true