let reducer = (acc, name) => {
  // TODO
  debugger;
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
