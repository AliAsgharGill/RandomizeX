```markdown
# RandomizeX

RandomizeX is a JavaScript/TypeScript library for generating random data such as strings, numbers, email addresses, phone numbers, dates, booleans, IP addresses, colors, credit card numbers, boolean arrays, and integer arrays.

## Installation

You can install RandomizeX via npm:

```sh
npm install randomizex
```

## Usage

import { RandomizeX } from 'randomizex';

// Generate a random ID
const id = RandomizeX.randomizeId(); // Default length is 16

// Generate a random sentence
const sentence = RandomizeX.randomizeSentence(); // Default length is 6 words

// Generate a random number between 0 and 100
const number = RandomizeX.randomizeNumber(); // Default min is 0, max is 100

// Generate a random email address
const email = RandomizeX.randomizeEmail();

// Generate a random boolean value
const bool = RandomizeX.randomizeBoolean();

// Generate a random date between January 1, 2000 and the current date
const date = RandomizeX.randomizeDate();

// Generate a random phone number
const phoneNumber = RandomizeX.randomizePhoneNumber();

// Generate a random IP address
const ipAddress = RandomizeX.randomizeIpAddress();

// Generate a random URL
const url = RandomizeX.randomizeUrl();

// Generate a random color
const color = RandomizeX.randomizeColor();

// Generate a random credit card number
const creditCardNumber = RandomizeX.randomizeCreditCardNumber();

// Generate an array of 5 random boolean values
const boolArray = RandomizeX.randomizeBooleanArray();

// Generate an array of 5 random integers between 0 and 100
const intArray = RandomizeX.randomizeIntArray();


## Features
- `randomizeId(length: number = 16): string`: Generates a random string of the specified length.
- `randomizeSentence(sentenceLength: number = 6): string`: Generates a random sentence of the specified length.
- `randomizeNumber(min: number = 0, max: number = 100): number`: Generates a random number within the specified range.
- `randomizeEmail(): string`: Generates a random email address.
- `randomizeBoolean(): boolean`: Generates a random boolean value.
- `randomizeDate(start: Date = new Date(2000, 0, 1), end: Date = new Date()): Date`: Generates a random date within the specified range.
- `randomizePhoneNumber(): string`: Generates a random phone number.
- `randomizeIpAddress(): string`: Generates a random IP address.
- `randomizeUrl(): string`: Generates a random URL.
- `randomizeColor(): string`: Generates a random color code.
- `randomizeCreditCardNumber(): string`: Generates a random credit card number.
- `randomizeBooleanArray(length: number = 5): boolean[]`: Generates an array of random boolean values.
- `randomizeIntArray(length: number = 5, min: number = 0, max: number = 100): number[]`: Generates an array of random integers within the specified range.

