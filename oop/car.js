var car = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    batteryCapacity: 100,
    avarageConsumption: 8,
    batteryCharge: this.batteryCapacity,
    drive: function (distance) {
        this.batteryCapacity -= 8 * distance / 100
        document.write('Driving car')
    },
    fullcharge: function () {
        this.batteryCharge = this.batteryCapacity
    },
    _paint: function (color) {
        this.color = color
    },
    get paint() {
        return this._paint
    },
    set paint(value) {
        this._paint = value
    },
}



document.write('The color is ' + car.color + ('<br>'))
car.paint('blue')
document.write('The color is' + car.color + '<br>')
car.drive(300)
document.write('Charge:' + car.batteryCapacity + '<br>')
car.fullcharge()
document.write(`Charge${car.batteryCharge}<br>`)
