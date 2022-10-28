basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 500) {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
