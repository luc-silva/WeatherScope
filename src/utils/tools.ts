/**
 * Calculates the celsius with given number.
 * @param value numeric value.
 * @returns Returns the result of the calculation
 */
export function calculateCelsius(value: number): number {
    return (value - 32) * (5 / 9);
}
/**
 * Calculates the fahrenheit with given number.
 * @param value numeric value.
 * @returns Returns the result of the calculation
 */
export function calculateFahrenheit(value: number): number {
    return value * (9 / 5) + 32;
}
