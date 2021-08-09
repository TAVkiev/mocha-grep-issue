describe("My very first test @smoke", () => {
    before(() => "some before condition")

    it("Test itself for first", () => {
        const actual = "hello world"
        const expected = "hello world"
        actual === expected
    })

    it("Test itself for second", () => {
        const actual = "hello world"
        const expected = "hello world"
        actual === expected
    })

    it("Test itself for third", () => {
        const actual = "hello world"
        const expected = "hello world"
        actual === expected
    })
})