const expect = require('chai').expect;

const rewire = require('rewire')
const count = rewire('../src/count')

describe('calculate character counts', () => {
  var calculateCharacterCount = count.__get__('calculateCharacterCount')
  
  it('successfully count English', () => {
    const text = `
Hi, I'm H0R15H0.
The developer of Character Counter.
`
    const [characters, spaces, words] = calculateCharacterCount(text)
    expect(characters).to.equal(51)
    expect(spaces).to.equal(6)
    expect(words).to.equal(8)
  });
  
  it('successfully count English with emoji', () => {
    const text = `
Hi, I'm H0R15H0.๐
The developer of Character Counter.๐
`
    const [characters, spaces, words] = calculateCharacterCount(text)
    expect(characters).to.equal(53)
    expect(spaces).to.equal(6)
    expect(words).to.equal(10)
  });

  it('successfully count Japanese', () => {
    const text = `
ใใใซใกใฏ H0R15H0 ใงใใ
Character Counter ใฎ้็บ่ใงใใ
`
    const [characters, spaces, words] = calculateCharacterCount(text)
    expect(characters).to.equal(42)
    expect(spaces).to.equal(4)
    expect(words).to.equal(9)
  });
  
  it('successfully count Japanese with emoji', () => {
    const text = `
ใใใซใกใฏ H0R15H0 ใงใใ๐
Character Counter ใฎ้็บ่ใงใใ๐
`
    const [characters, spaces, words] = calculateCharacterCount(text)
    expect(characters).to.equal(44)
    expect(spaces).to.equal(4)
    expect(words).to.equal(11)
  });

  it('successfully count Japanese with surrogate pair', () => {
    const text = `
๐ฉ ๐ฉฃ ๐ฉฉฒ ๐ฉท ๐ฉธฝ ๐ฉธ ๐ฉบ ๐ฉน ๐ฉป ๐ฉปฉ ๐ฉป ๐ฉฟ ๐ชฏ ๐ช ๐ชน ๐ช ๐ข ๐ช ๐ชท ๐ชฑ ๐ช ๐ช ๐ชฒ
`
    const [characters, spaces, words] = calculateCharacterCount(text)
    expect(characters).to.equal(45)
    expect(spaces).to.equal(22)
    expect(words).to.equal(23)
  });

});
