// utils/index.d.ts

declare module 'utils' {
    /**
     * Capitalizes the first letter of a string.
     * @param str - The string to capitalize.
     * @returns The capitalized string.
     */
    export function capitalize(str: string): string;

    /**
     * Generates a random number between a specified range.
     * @param min - The minimum value.
     * @param max - The maximum value.
     * @returns A random number between min and max.
     */
    export function getRandomNumber(min: number, max: number): number;

    /**
     * Formats a date to a readable string.
     * @param date - The date to format.
     * @returns The formatted date string.
     */
    export function formatDate(date: Date): string;
}
