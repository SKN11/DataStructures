function validAnagram(first, second) {  //using frequency counter
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  //not needed as in previous loop it is already checked by last for loop if loop runs completely
  // for(let key in lookup)
  // {
  //     if(lookup[key] >0) return false;
  // }

  return true;
}

validAnagram('iceman'.split(''),'cinema'.split(''))