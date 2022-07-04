// calculation logics
function calculateCharacterCount(string) {
  const segmenter = new Intl.Segmenter({ granularity: "grapheme" });
  const segments = [...segmenter.segment(string)] // each item looks like {segment: 'T', index: 0, input: 'This'}
  const characters = segments.filter(char => !isNewLine(char.segment))
  const spaces = characters.filter(char => isSpace(char.segment))
  return [characters.length, spaces.length]
}

function isSpace(char) {
  return (char === " " || char === "　") ? true : false
}

function isNewLine(char) {
  return char === "\n" ? true : false
}
