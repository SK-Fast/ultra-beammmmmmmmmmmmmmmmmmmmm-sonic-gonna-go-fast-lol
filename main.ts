pins.setAudioPin(AnalogPin.P2)
basic.forever(function on_forever() {
    let ser = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters)
    serial.writeValue("x", ser)
    if (ser < 50) {
        music.playMelody("C5 - C5 - C5 - C5 - ", 1000)
    }
    
    basic.pause(1000)
})
