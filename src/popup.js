const DIALOG_OFFSET = 5

chrome.runtime.onMessage.addListener((request) => {
  switch (request.name)  {
    case "countCharacters":
      const selection = window.getSelection()
      const selectionPosition = selection.getRangeAt(0).getBoundingClientRect()

      const resultDialog = buildResultDialog(...calculateCharacterCount(selection.toString()))
      resultDialog.style.position = 'absolute'
      resultDialog.style.top = `${window.pageYOffset + selectionPosition.bottom + DIALOG_OFFSET}px`
      resultDialog.style.left = `${selectionPosition.left}px`

      document.body.appendChild(resultDialog)
      break;
  
    default:
      break;
  }
});


// document manipulation
function buildResultDialog(characterCounts, spaceCounts) {
  const resultDialog = document.createElement('div')
  resultDialog.id = "character-counter-result-dialog"
  resultDialog.innerHTML = `
    <div class="cc-box">
      <p>CHARACTERS</p>
      <p>${characterCounts}</p>
    </div>
    <div class="cc-box">
      <p>SPACES</p>
      <p>${spaceCounts}</p>
    </div>
  `

  document.addEventListener("click", (event) => {
    const isClickInside = resultDialog.contains(event.target)
    if (!isClickInside) {
      resultDialog.remove()
    }
  })

  return resultDialog
}
