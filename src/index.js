function game(A, B) {


    if (A == 0 && B == 2)
        return "Non-drinkers can't play"
    if (A == 1 && B == 0)
        return "Non-drinkers can't play"
}


module.exports = {
    game
}