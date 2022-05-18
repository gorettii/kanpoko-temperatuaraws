let TempExt = 0
radio.setGroup(20)
basic.forever(function () {
    TempExt = input.temperature()
    TempExt = TempExt + 0
    basic.showNumber(TempExt)
    radio.sendNumber(TempExt)
})
