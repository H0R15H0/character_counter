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
    const [characters, spaces] = calculateCharacterCount(text)
    expect(characters).to.equal(51)
    expect(spaces).to.equal(6)
  });
  
  it('successfully count English with emoji', () => {
    const text = `
Hi, I'm H0R15H0.😀
The developer of Character Counter.😎
`
    const [characters, spaces] = calculateCharacterCount(text)
    expect(characters).to.equal(53)
    expect(spaces).to.equal(6)
  });

  it('successfully count Japanese', () => {
    const text = `
こんにちは H0R15H0 です。
Character Counterの開発者です。
`
    const [characters, spaces] = calculateCharacterCount(text)
    expect(characters).to.equal(41)
    expect(spaces).to.equal(3)
  });
  
  it('successfully count Japanese with emoji', () => {
    const text = `
こんにちは H0R15H0 です。😀
Character Counterの開発者です。😎
`
    const [characters, spaces] = calculateCharacterCount(text)
    expect(characters).to.equal(43)
    expect(spaces).to.equal(3)
  });

  it('successfully count Japanese with surrogate pair', () => {
    const text = `
𩝐 𩣆 𩩲 𩷛 𩸽 𩸕 𩺊 𩹉 𩻄 𩻩 𩻛 𩿎 𪀯 𪀚 𪃹 𪂂 𢈘 𪎌 𪐷 𪗱 𪘂 𪘚 𪚲
`
    const [characters, spaces] = calculateCharacterCount(text)
    expect(characters).to.equal(45)
    expect(spaces).to.equal(22)
  });

});
