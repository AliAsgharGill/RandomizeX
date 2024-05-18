# RandomizeX
You're in the right place! Just install the **RandomizeX** package to solve all your problems related to generating random data.

## Installation

You can install RandomizeX via npm:

```sh
npm install randomizex
```

### Using RandomizeX with JavaScript/TypeScript Modules (`type: module`)

#### Usage

```JavaScript
// Import RandomizeX functions
import { RandomizeX } from 'randomizex';

// Use the functions
const randomId = RandomizeX.Id();
const randomSentence = RandomizeX.Sentence();
const randomNumber = RandomizeX.Number();
```

### Using RandomizeX with CommonJS Modules (`type: commonjs`)

#### Usage

```javascript
// Require RandomizeX functions
const {RandomizeX } = require('randomizex');

// Use the functions
const randomId = RandomizeX.Id();
const randomSentence = RandomizeX.Sentence();
const randomNumber = RandomizeX.Number();
```

### Note:

- When using JavaScript/TypeScript with `type: module`, you can directly import the functions from RandomizeX.
- When using CommonJS, you need to use `require` to import the functions.
- Ensure your `tsconfig.json` is configured correctly for the module type you're using.


## Usage

Once installed, you can import RandomizeX into your JavaScript/JavaScript/TypeScript code and start using its functions:

**More Then 130+ Functionalities**

```javascript

import { RandomizeX } from 'randomizex';

// Generate a random string with a length of 16 characters

const randomString = RandomizeX.Id();

console.log(randomString); // Output: e.g., "a3Fg-5hRt-8kLp-..."



// Generate a random sentence with 6 words

const randomSentence = RandomizeX.Sentence();

console.log(randomSentence); // Output: e.g., "Lorem ipsum dolor sit amet."



// Generate a random number between 0 and 100 (inclusive)

const randomNumber = RandomizeX.Number();

console.log(randomNumber); // Output: e.g., 42



// Generate a random email address

const randomEmail = RandomizeX.Email();

console.log(randomEmail); // Output: e.g., "example@example.com"



// Generate a random boolean value (true or false)

const randomBoolean = RandomizeX.Boolean();

console.log(randomBoolean); // Output: e.g., true



// Generate a random date between January 1, 2000, and the current date

const randomDate = RandomizeX.Date();

console.log(randomDate); // Output: e.g., "Sat Jun 10 2006 02:04:32 GMT+0300 (East Africa Time)"



// Generate a random phone number

const randomPhoneNumber = RandomizeX.PhoneNumber();

console.log(randomPhoneNumber); // Output: e.g., "+123-456-7890"



// Generate a random IP address

const randomIpAddress = RandomizeX.IpAddress();

console.log(randomIpAddress); // Output: e.g., "192.168.1.1"



// Generate a random URL

const randomUrl = RandomizeX.Url();

console.log(randomUrl); // Output: e.g., "http://example.com/some/path"



// Generate a random color in hexadecimal format

const randomColor = RandomizeX.Color();

console.log(randomColor); // Output: e.g., "#1a2b3c"



// Generate a random credit card number

const randomCreditCardNumber = RandomizeX.CreditCardNumber();

console.log(randomCreditCardNumber); // Output: e.g., "4916577212820895"



// Generate an array of 5 random boolean values

const randomBooleanArray = RandomizeX.BooleanArray();

console.log(randomBooleanArray); // Output: e.g., [true, false, true, true, false]



// Generate an array of 5 random integers between 0 and 100

const randomIntArray = RandomizeX.IntArray();

console.log(randomIntArray); // Output: e.g., [42, 15, 73, 91, 5]



// Select a random element from an array

const randomElement = RandomizeX.Element(['apple', 'banana', 'orange']);

console.log(randomElement); // Output: e.g., "banana"



// Generate a random boolean value with a specific probability (e.g., 70%)

const randomWithProbability = RandomizeX.BooleanWithProbability(0.7);

console.log(randomWithProbability); // Output: e.g., true



// Generate a custom string with a specified length and character set

const customString = RandomizeX.String(10, 'abcdefghijklmnopqrstuvwxyz');

console.log(customString); // Output: e.g., "hjkldsfqwe"



// Generate a random date within a specified date range

const randomDateInRange = RandomizeX.DateInRange(new Date(2023, 1, 1), new Date(2023, 12, 31));

console.log(randomDateInRange); // Output: e.g., "Wed Jul 05 2023 07:25:13 GMT+0300 (East Africa Time)"



// Generate a random time in HH:MM:SS format

const randomTime = RandomizeX.Time();

console.log(randomTime); // Output: e.g., "15:23:47"



// Generate a random filename with a specified extension

const randomFilename = RandomizeX.FileName('txt');

console.log(randomFilename); // Output: e.g., "abcde12345.txt"



// Generate a random hexadecimal color code with a leading # symbol

const randomHexColor = RandomizeX.HexColor();

console.log(randomHexColor); // Output: e.g., "#1a2b3c"



// Generate a random IPv6 address

const randomIPv6Address = RandomizeX.IPv6Address();

console.log(randomIPv6Address); // Output: e.g., "2001:0db8:85a3:0000:0000:8a2e:0370:7334"



// Generate a random MAC address

const randomMACAddress = RandomizeX.MACAddress();

console.log(randomMACAddress); // Output: e.g., "fa:24:25:d4:95:71"



// Generate a random GUID (Globally Unique Identifier)

const randomGUID = RandomizeX.GUID();

console.log(randomGUID); // Output: e.g., "46d205e8-35a8-4fae-89c7-c33b3988a9f6"



// Generate a random currency code

const randomCurrency = RandomizeX.Currency();

console.log(randomCurrency); // Output: e.g., "USD"



// Generate a random country name

const randomCountry = RandomizeX.Country();

console.log(randomCountry); // Output: e.g., "France"



// Generate a random city name

const randomCity = RandomizeX.City();

console.log(randomCity); // Output: e.g., "Paris"



// Generate a random street address

const randomStreetAddress = RandomizeX.StreetAddress();

console.log(randomStreetAddress); // Output: e.g., "123 Main Street"



// Generate a random postal code

const randomPostalCode = RandomizeX.PostalCode();

console.log(randomPostalCode); // Output: e.g., "12345"



// Generate a random latitude value between -90 and 90

const randomLatitude = RandomizeX.Latitude();

console.log(randomLatitude); // Output: e.g., -12.345678



// Generate a random longitude value between -180 and 180

const randomLongitude = RandomizeX.Longitude();

console.log(randomLongitude); // Output: e.g., 45.678901



// Generate a random HTTP method (e.g., GET, POST, PUT, etc.)

const randomHttpMethod = RandomizeX.HttpMethod();

console.log(randomHttpMethod); // Output: e.g., "GET"



// Generate a random MIME type (e.g., application/json, text/plain, etc.)

const randomMimeType = RandomizeX.MimeType();

console.log(randomMimeType); // Output: e.g., "image/jpeg"


```
 **100+ more methods...**




## Features


- Generates random strings, numbers, dates, email addresses, phone numbers, IP addresses, URLs, colors, credit card numbers, booleans, arrays, and more.

- Provides functions for custom string generation with specified lengths and character sets.

- Offers the ability to generate random dates within a specified range.

- Generates random times in HH:MM:SS format.

- Creates random filenames with specified extensions.

- Generates hexadecimal color codes with and without a leading # symbol.

- Produces random IPv6 and MAC addresses.

- Creates random GUIDs (Globally Unique Identifiers).

- Provides random currency and country codes.

- Generates random city and street address names.

- Creates random postal codes.

- Produces random latitude and longitude values.

- Generates random HTTP methods.

- Provides random MIME types.


## Contributing

We welcome contributions to RandomizeX. If you have any suggestions or improvements, please feel free to create a pull request.

## License

This library is licensed under the MIT License. For more information, please see the LICENSE file.

## About

RandomizeX is developed and maintained by **Ali Asghar Gill**. It was created to provide a
simple and versatile way to generate random data in JavaScript and JavaScript/TypeScript 
applications.

If you have any questions, feedback, or suggestions, please don't hesitate to reach out to
us at the following email.

```sh
stylinalivlogs@gmail.com 
```

Thank you for using RandomizeX!

```