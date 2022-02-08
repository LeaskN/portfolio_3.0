export default function animate(prevLetters, name){
  console.log(prevLetters, name)
  if(prevLetters.count2 < 10){
    prevLetters.letters[prevLetters.count] = prevLetters.symbols[Math.floor(Math.random() * prevLetters.symbols.length)];
    for(let i = prevLetters.count; i < prevLetters.letters.length; i++){
      prevLetters.letters[i] = prevLetters.symbols[Math.floor(Math.random() * prevLetters.symbols.length)]
    }
    prevLetters.count2++;
    return prevLetters
  }
  prevLetters.count2 = 0
  prevLetters.letters[prevLetters.count] = name[prevLetters.count];
  prevLetters.count++
  return prevLetters;
}