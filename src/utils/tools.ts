/**
 * Converts given number in  fahrenheit to celsius.
 * @param value numeric value.
 * @returns Returns the result of the calculation
 */
export function calculateFahrenheitToCelsius(value: number): number {
    return (value - 32) * (5 / 9);
}

/**
 * Converts given number in celsius to fahrenheit.
 * @param value numeric value.
 * @returns Returns the result of the calculation
 */
export function calculateCelsiusToFahrenheit(value: number): number {
    return value * (9 / 5) + 32;
}


/**
 * Converts given number in  kelvin to celsius.
 * @param value number to calculate.
 * @returns Celsius respective value.
 */
export function calculateKelvinToCelsius(value:number):number{
    return value - 273.15
}

/**
 * Converts given number in  celsius to kelvin.
 * @param value number to calculate.
 * @returns Kelvin respective value.
 */
export function calculateCelsiusToKelvin(value:number):number{
    return value + 273.15
}

/**
 * Converts given number in  kelvin to fahrenheit.
 * @param value number to calculate.
 * @returns Fahrenheit respective value.
 */
export function calculateKelvinToFahrenheit(value:number):number{
    return (value - 273.15) * (9/5) + 32
}

/**
 * Converts given number in  fahrenheit to kelvin.
 * @param value number to calculate.
 * @returns Kelvin respective value.
 */
export function calculateFahrenheitToKelvin(value:number):number{
    return value + 273.15
}