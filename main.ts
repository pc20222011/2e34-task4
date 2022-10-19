let xvalue = 0
let yvalue = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(xvalue, 0)
        basic.pause(200)
        xvalue += 1
    }
    if (xvalue > 4) {
        xvalue = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, yvalue)
        basic.pause(200)
        yvalue += 1
    }
    if (yvalue > 4) {
        yvalue = 0
    }
})
