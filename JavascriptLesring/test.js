describe("pow", function () {
    it("возводит в степень n", function () {
        assert.equal(pow(2, 3), 8);
        //assert.equal(pow(3, 4), 81);
    });

    it("3 в степени 3 будет 27", function () {
        assert.equal(pow(3, 3), 27);
    });
});

describe("pow", function () {
    function makeTest(x) {
        let expected = x * x * x;
        it(`${x} в степени 3 будет ${expected}`, function () {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (let x = 1; x <= 5; x++) {
        makeTest(x);
    }
});

function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}