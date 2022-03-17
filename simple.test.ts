const simpleAddition = (num: number) => {
    return num + 2
}

test('adds 1 + 2 to equal 3', () => {
    expect(simpleAddition(1)).toBe(3);
});