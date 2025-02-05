class ConversionTemperatura {
    constructor(temperatura, escala) {
        this.temperatura = temperatura;
        this.escala = escala;
    }

    fahrenheitcelsius() {
        let celsius = (this.temperatura - 32) * 5 / 9;
        console.log(`${this.temperatura}°F expresada en celsius es: ${celsius.toFixed(2)}°C`);
        return celsius.toFixed(2);
    }

    celsiusfahrenheit() {
        let fahrenheit = (this.temperatura * 9 / 5) + 32;
        console.log(`${this.temperatura}°C expresada en Fahrenheit es: ${fahrenheit.toFixed(2)}°F`);
        return fahrenheit.toFixed(2);
    }

    kelvinfahrenheit() {
        let fahrenheit = (this.temperatura - 273.15) * 9 / 5 + 32;
        console.log(`${this.temperatura}K expresada en Fahrenheit es: ${fahrenheit.toFixed(2)}°F`);
        return fahrenheit.toFixed(2);
    }

    kelvincelsius() {
        let celsius = this.temperatura - 273.15;
        console.log(`${this.temperatura}K expresada en Celsius es: ${celsius.toFixed(2)}°C`);
        return celsius.toFixed(2);
    }
}

const tempf = new ConversionTemperatura(37, "fahrenheit");
tempf.fahrenheitcelsius();

const tempc = new ConversionTemperatura(90, "celsius");
tempc.celsiusfahrenheit();

const tempk = new ConversionTemperatura(100, "kelvin");
tempk.kelvinfahrenheit();
tempk.kelvincelsius();




