input.onButtonPressed(Button.A, function () {
    Lukket = true
    step_1 = false
    step_2 = true
})
let step_3 = false
let step_2 = false
let Lukket = false
let step_1 = false
step_1 = true
Lukket = true
basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P1) && step_1 == true) {
        step_1 = false
        step_2 = true
    }
    if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P1) && step_2 == true) {
        step_2 = false
        step_3 = true
    }
    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P1) && step_3 == true) {
        step_1 = true
        step_2 = false
    }
    if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P1) && step_3 == true) {
        step_1 = true
        step_3 = false
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P1) && step_3 == true) {
        step_1 = true
        step_3 = false
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P1) && step_3 == true) {
        step_1 = true
        step_3 = false
        Lukket = false
        music.playTone(698, music.beat(BeatFraction.Double))
    }
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P1) && step_2 == true) {
        step_1 = true
        step_2 = false
    }
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P1) && step_3 == true) {
        step_1 = true
        step_3 = false
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P1) && step_2 == true) {
        step_1 = true
        step_2 = false
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P1) && step_2 == true) {
        step_1 = true
        step_2 = false
    }
    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P1) && step_2 == true) {
        step_1 = true
        step_2 = false
    }
})
basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P0) && Lukket == true) {
        while (tinkercademy.PIR(DigitalPin.P0) && Lukket == true) {
            music.playMelody("C D E F G A B C5 ", 1300)
        }
    }
})
