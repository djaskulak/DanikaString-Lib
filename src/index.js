// challenge 1: capitalize, makes the first letter of a given string uppercase
function capitalize(str){
  return str[0].toUpperCase() + str.slice(1)
}

console.log(capitalize('hello world'))

//challenge 2: allCaps, makes all characters uppercase
function allCaps(str){
  return str.toUpperCase()
}

console.log(allCaps('foo bar'))

//challenge 3: capitalizeWords, makes the first character of each word uppercase
function capitalizeWords(str){
  const words = str.split(' ')
  const upperWords = words.map( word => capitalize(word) )
  return upperWords.join(' ')
}

console.log(capitalizeWords('do all the things'))

//challenge 4: removeExtraSpace, removes all spaces
function removeExtraSpace(str){
  const trimmed  = str.trim()
  const chars = trimmed.split(' ')
  const filtered = chars.filter( (c) => c !== '' )
  return filtered.join(' ')
}

console.log(removeExtraSpace(' Hello     World '))


//challenge 5: kebobCase, removes spaces and replaces them with hyphens

//challenge 6: snakeCase, removes spaces and replaces them with underscores

//challenge 7: camelCase, lowercases the first word, removes spaces, then uppercases the other words

//challenge 8: shift, take the first character and move it to the end

//challenge 9: makeHashTag, make the word to camelCase and then put a # at the beginning
