function caesarCypher(message, key) {
    if (key < 0) return caesarCypher(message, key + 26)
    let newMessage = ''
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    message = message.toLowerCase()

  
    for (const char of message) {
      let newChar = char
      const charIndexAtAlphabet = alphabet.indexOf(char)
      if (charIndexAtAlphabet >= 0) {
        newChar = alphabet.charAt((charIndexAtAlphabet + key) % 26) 
        newMessage += newChar
      }
    }
  
    return newMessage
  } 
  //  “Você pode criar qualquer coisa: basta escrever” – C. S. Lewis

  const key = 3
  const message = 'Você pode criar qualquer coisa: basta escrever'
  const encrypted = caesarCypher(message, key)
  console.log(encrypted)
  console.log(caesarCypher(encrypted, -key))