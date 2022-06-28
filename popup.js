chrome.runtime.onMessage.addListener((request) => {
  console.log(request)
  switch (request.name)  {
    case "countCharacters":
      console.log(request.selectionText)
      console.log(calculateCharacterCount(request.selectionText))
      break;
  
    default:
      break;
  }
});

function calculateCharacterCount(string) {
  const segmenter = new Intl.Segmenter({ granularity: "grapheme" });
  const characters = [...segmenter.segment(string)] // each item looks like {segment: 'T', index: 0, input: 'This'}
  const charactersWithoutExcludables = characters.filter(char => !isExcludableCharacter(char.segment))
  return [characters.length, charactersWithoutExcludables.length]
}

function isExcludableCharacter(char) {
  switch (char) {
    case " ":
    case "\n": 
      return true
    default:
      return false
  }
}
