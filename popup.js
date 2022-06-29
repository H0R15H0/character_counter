const DIALOG_OFFSET = 20

chrome.runtime.onMessage.addListener((request) => {
  switch (request.name)  {
    case "countCharacters":
      const selection = window.getSelection()
      const selectionPosition = selection.getRangeAt(0).getBoundingClientRect()

      const resultDialog = buildResultDialog(...calculateCharacterCount(selection.toString()))
      resultDialog.style.position = 'absolute'
      resultDialog.style.top = `${window.pageYOffset + selectionPosition.top + DIALOG_OFFSET}px`
      resultDialog.style.left = `${selectionPosition.left}px`

      document.body.appendChild(resultDialog)
      break;
  
    default:
      break;
  }
});

function buildResultDialog(characterCounts, withoutExcludableCharacterCounts) {
  const resultDialog = document.createElement('div')
  resultDialog.id = "character-counter-result-dialog"
  resultDialog.innerText = `Character Counter ${characterCounts} ${withoutExcludableCharacterCounts}`
  return resultDialog
}

function calculateCharacterCount(string) {
  const segmenter = new Intl.Segmenter({ granularity: "grapheme" });
  const characters = [...segmenter.segment(string)] // each item looks like {segment: 'T', index: 0, input: 'This'}
  const charactersWithoutExcludables = characters.filter(char => !isExcludableCharacter(char.segment))
  return [characters.length, charactersWithoutExcludables.length]
}

function isExcludableCharacter(char) {
  switch (char) {
    case " ":
    case "　": // Full width space
    case "\n": 
      return true
    default:
      return false
  }
}
