// calculation logics
function calculateCharacterCount(string) {
  const segmenterGrapheme = new Intl.Segmenter({ granularity: "grapheme" });
  const segmentsGrapheme = [...segmenterGrapheme.segment(string)] // each item looks like {segment: 'T', index: 0, input: 'This'}
  
  const segmenterWord = new Intl.Segmenter('en', { granularity: "word" }); // 
  const segmentsWord = [...segmenterWord.segment(string)] // each item looks like {segment: 'Google', index: 0, input: 'Google Chrome'}

  const characters = segmentsGrapheme.filter(char => !isNewLine(char.segment))
  const spaces = characters.filter(char => isSpace(char.segment))
  const words = segmentsWord.filter(word => !isSpace(word.segment) && !isNewLine(word.segment))

  return [characters.length, spaces.length, words.length]
}

function isSpace(char) {
  return (char === " " || char === "　") ? true : false
}

function isNewLine(char) {
  return char === "\n" ? true : false
}
