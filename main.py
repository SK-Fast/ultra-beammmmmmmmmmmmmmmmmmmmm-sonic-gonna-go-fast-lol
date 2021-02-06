pins.set_audio_pin(AnalogPin.P2)

def on_forever():
    ser = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.CENTIMETERS)
    serial.write_value("x",ser)
    if ser < 50:
        music.play_melody("C5 - C5 - C5 - C5 - ", 1000)
    basic.pause(1000)
basic.forever(on_forever)
