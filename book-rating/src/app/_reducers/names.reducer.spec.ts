import * as si from 'seamless-immutable';

const reducer = (acc, name) => {
  const count = acc[name];

  // VORHER acc[name] = count ? count + 1 : 1;
  const newAcc = si.from(acc).set(name, count ? count + 1 : 1);

  return newAcc;
};

fdescribe('names reducer', () => {

  it('should count names', () => {

    const names = ['Alice', 'Arnold', 'Bob', 'Arnold', 'Silvester'];

    const immmutableAcc = si.from({});
    const expected = names.reduce(reducer, immmutableAcc);

    expect(si.isImmutable(expected)).toBe(true); // EMPFEHLUNG !!

    expect(expected).toEqual({
      'Alice': 1,
      'Arnold': 2,
      'Bob': 1,
      'Silvester': 1
    });
  });
});
