const { expect } = require('@jest/globals');
const academyModule = require('./academy');

test("win will return noughts when player 1 wins",() => {
    //arrange
    let player = 1
    let expectedOutput = "noughts"

    //act
    let actualOutput = academyModule.win(player)

    //assert
    expect(actualOutput).toStrictEqual(expectedOutput)
})

test("win will return crosses when player 2 wins",() => {
    //arrange
    let player = 2
    let expectedOutput = "crosses"

    //act
    let actualOutput = academyModule.win(player)

    //assert
    expect(actualOutput).toStrictEqual(expectedOutput)
})

test("win will reset the board if either player wins",() => {
    //arrange
    const player = 2
    const blankBoard = [[null, null, null], [null, null, null], [null, null, null]]
    const expectedOutput = "crosses"

    // do something to make the board be full
    const usedBoard = academyModule.takeTurn(0, 1)

    //act
    const actualOutput = academyModule.win(player)
    const actualBoard = academyModule.getBoard()

    //assert
    expect(usedBoard).toStrictEqual([[null, "nought", null], [null, null, null], [null, null, null]]) 
    expect(actualOutput).toStrictEqual(expectedOutput)
    
    // assert that the board has been reset to blank
    expect(actualBoard).toStrictEqual(blankBoard)
})
