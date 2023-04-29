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
export function calculateKelvinToCelsius(value: number): number {
    return value - 273.15;
}

/**
 * Converts given number in  celsius to kelvin.
 * @param value number to calculate.
 * @returns Kelvin respective value.
 */
export function calculateCelsiusToKelvin(value: number): number {
    return value + 273.15;
}

/**
 * Converts given number in  kelvin to fahrenheit.
 * @param value number to calculate.
 * @returns Fahrenheit respective value.
 */
export function calculateKelvinToFahrenheit(value: number): number {
    return (value - 273.15) * (9 / 5) + 32;
}

/**
 * Converts given number in  fahrenheit to kelvin.
 * @param value number to calculate.
 * @returns Kelvin respective value.
 */
export function calculateFahrenheitToKelvin(value: number): number {
    return value + 273.15;
}

/**
 * Modify the first letter of each word in a string.
 * @param string string to modify.
 * @returns Return modified string.
 */
export function upperCaseFirstLetter(string: string) {
    if (string) {
        let words = string.split(" ");
        return words
            .map((word: string) => {
                let letters = word.split("");
                letters[0] = letters[0].toUpperCase();
                return letters.join("");
            })
            .join(" ");
    } else {
        return "";
    }
}

/**
 * Converts the number to string and add a zero when necessary.
 * @param value Number to format.
 * @returns Formated number in string.
 */
export function formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
}
