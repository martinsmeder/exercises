const wordFrequencyCounter = require('./word-frequency-counter');

// describe('wordFrequencyCounter', () => {
//   it('should count word frequencies correctly', () => {
//     const input =
//       'The quick brown fox jumps over the lazy dog. The dog barks, and the fox runs away.';
//     const expectedOutput = new Map([
//       ['the', 4],
//       ['quick', 1],
//       ['brown', 1],
//       ['fox', 2],
//       ['jumps', 1],
//       ['over', 1],
//       ['lazy', 1],
//       ['dog', 2],
//       ['barks', 1],
//       ['and', 1],
//       ['runs', 1],
//       ['away', 1],
//     ]);

//     const result = wordFrequencyCounter(input);
//     expect(result).toEqual(expectedOutput);
//   });

//   it('should handle empty input', () => {
//     const input = '';
//     const expectedOutput = new Map();

//     const result = wordFrequencyCounter(input);
//     expect(result).toEqual(expectedOutput);
//   });

//   it('should handle input with single word', () => {
//     const input = 'hello';
//     const expectedOutput = new Map([['hello', 1]]);

//     const result = wordFrequencyCounter(input);
//     expect(result).toEqual(expectedOutput);
//   });

//   // Add more test cases as needed
// });

describe('wordFrequencyCounter', () => {
  it('should count the frequency of each word in the given string', () => {
    const result1 = wordFrequencyCounter(
      'The quick brown fox jumps over the lazy dog.'
    );
    expect(result1.get('the')).toBe(2);
    expect(result1.get('quick')).toBe(1);
    expect(result1.get('brown')).toBe(1);
    expect(result1.get('fox')).toBe(1);
    expect(result1.get('jumps')).toBe(1);
    expect(result1.get('over')).toBe(1);
    expect(result1.get('lazy')).toBe(1);
    expect(result1.get('dog')).toBe(1);

    const result2 = wordFrequencyCounter(
      'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
    );
    expect(result2.get('lorem')).toBe(1);
    expect(result2.get('ipsum')).toBe(1);
    expect(result2.get('dolor')).toBe(1);
    expect(result2.get('sit')).toBe(1);
    expect(result2.get('amet')).toBe(1);
    expect(result2.get('consectetur')).toBe(1);
    expect(result2.get('adipiscing')).toBe(1);
    expect(result2.get('elit')).toBe(1);
  });

  it('should handle an empty string', () => {
    const result = wordFrequencyCounter('');
    expect(result.size).toBe(0);
  });
});
