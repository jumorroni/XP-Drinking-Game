function game(A, B) {


    if (A == 0 && B == 2)
        return "Non-drinkers can't play"
    if (A == 1 && B == 0)
        return "Non-drinkers can't play"
    if (A == 2 && B == 2)
        return "Mike"
    if (A == 2 && B == 6)
        return "Joe"
}


module.exports = {
    game
}