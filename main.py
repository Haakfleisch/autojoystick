def on_button_a():
    global int_a
    int_a = 1
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_received_string(receivedString):
    global blink
    basic.show_string(receivedString)
    blink = 0
radio.on_received_string(on_received_string)

int_a = 0
blink = 0
radio.set_group(2)
blink += 1

def on_forever():
    if blink > 0:
        basic.set_led_color(0xff0000)
        basic.pause(500)
        basic.set_led_color(0x000000)
        basic.pause(500)
basic.forever(on_forever)


