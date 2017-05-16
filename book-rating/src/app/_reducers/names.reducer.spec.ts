let reducer = (acc, name) => {
  const count = acc[name];
  acc[name] = count ? count + 1 : 1;
  return acc;
};

fdescribe('names reducer', () => {

  it('should count names', () => {

    const names = ['Alice', 'Arnold', 'Bob', 'Arnold', 'Silvester'];
    const expected = names.reduce(reducer, {});

    expect(expected).toEqual({
      'Alice': 1,
      'Arnold': 2,
      'Bob': 1,
      'Silvester': 1
    });
  });
});
