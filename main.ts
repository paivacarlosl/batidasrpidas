let cont1 = 0
let cont2 = 0
let geral = 0
let índice = 0
input.onPinPressed(TouchPin.P0, function () {
    cont1 = 0
    cont2 = 0
    geral = 0
    basic.showString("preparar...")
    basic.pause(1000)
    basic.clearScreen()
    for (let índice = 0; índice <= 5; índice++) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            # . . . #
            `)
        basic.pause(100)
        geral += 1
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    if (índice < 5) {
        cont2 += 1
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (índice < 5) {
        cont1 += 1
    }
})
basic.forever(function () {
    basic.pause(1000)
    if (geral == 5) {
        if (cont1 > cont2) {
            basic.clearScreen()
            basic.showNumber(cont1)
            basic.showString("Batidas")
            basic.showString("Jogador 1 - Win!")
            geral = 0
        } else if (cont2 > cont1) {
            basic.clearScreen()
            basic.showNumber(cont2)
            basic.showString("Batidas")
            basic.showString("Jogador 2 - Win!")
            geral = 0
        } else {
            basic.clearScreen()
            basic.showString("Empate!")
            basic.showString("Jogador 1 - Win!")
            basic.showNumber(cont1)
            basic.showString("Batidas")
            basic.showString("Jogador 2 - Win!")
            basic.showNumber(cont2)
            basic.showString("Batidas")
            geral = 0
        }
    }
})
