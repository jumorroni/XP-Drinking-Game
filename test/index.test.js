const { game } = require("../src/index")

describe("Non Drinkers", () => {
    test("Should return 'Non-drinkers can't play' when A or B are 0", () => {
        expect(game(0, 2)).toBe("Non-drinkers can't play")
    });
    test("Should return 'Non-drinkers can't play' when A or B are 0", () => {
        expect(game(1, 0)).toBe("Non-drinkers can't play")
    });
});

describe("Drinkers", () => {
    test("Should return 'Mike' when A is 2 and B is 2", () => {
        expect(game(2, 2)).toBe("Mike")
    });

});
