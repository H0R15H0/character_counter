chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    "id": "character_counter",
    "title": "Count Character",
    "contexts": ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((data, tab) => {
  console.log(data.selectionText)
  console.log(calculateCharacterCount(data.selectionText))
  console.log(tab)
})

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