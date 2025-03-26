let Feuchte_aktuell = 0
let Feuchte_Zielwert = 300
basic.forever(function () {
    Feuchte_aktuell = grove.measureMoistureAnalog(AnalogPin.C16)
    serial.writeLine("" + (Feuchte_aktuell))
    if (Feuchte_aktuell >= Feuchte_Zielwert) {
        basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
    } else {
        basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
    }
})
