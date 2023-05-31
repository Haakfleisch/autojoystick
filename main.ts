radio.onReceivedValue(function (name, value) {
    rec_data = [name, convertToText(value)]
})
let y = 0
let x = 0
let rec_data: string[] = []
radio.setGroup(2)
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate9600
)
rec_data = ["A", "B"]
let speed_data = ["0", "0"]
let max = 650
let min = 350
basic.forever(function () {
    if ("X" == rec_data[0]) {
        speed_data[0] = rec_data[1]
    }
    if ("Y" == rec_data[0]) {
        speed_data[1] = rec_data[1]
    }
    x = parseFloat(speed_data[0])
    y = parseFloat(speed_data[1])
    if (x < max && x > min && y > max) {
        calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 100)
    } else if (x < max && x > min && y < min) {
        calliBot2.motor(C2Motor.beide, C2Dir.rueckwaerts, 100)
    } else if (x < min && y > max) {
        calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 30)
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 100)
    } else if (x > max && y > max) {
        calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 100)
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 30)
    } else if (x < min && y > max) {
        calliBot2.motor(C2Motor.links, C2Dir.rueckwaerts, 100)
        calliBot2.motor(C2Motor.rechts, C2Dir.rueckwaerts, 30)
    } else if (x < min && y < min) {
        calliBot2.motor(C2Motor.rechts, C2Dir.rueckwaerts, 100)
        calliBot2.motor(C2Motor.links, C2Dir.rueckwaerts, 30)
    } else if (y < max && y > min && x < min) {
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 30)
        calliBot2.motor(C2Motor.links, C2Dir.rueckwaerts, 30)
    } else if (y < max && y > min && x > max) {
        calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 30)
        calliBot2.motor(C2Motor.rechts, C2Dir.rueckwaerts, 30)
    } else {
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
    }
})
