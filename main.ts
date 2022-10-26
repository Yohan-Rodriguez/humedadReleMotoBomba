basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) < 900) {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
