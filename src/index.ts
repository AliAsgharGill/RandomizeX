const RandomizeX = {
  idSet: new Set<number>(),

  Id: (length: number = 16): string => {
    const chars: string =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
    let result: string = "";
    while (result.length < length) {
      const randomChar = chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
      result += randomChar;
    }

    const id = parseInt(result, 36);
    if (RandomizeX.idSet.has(id)) {
      return RandomizeX.Id(length);
    }

    RandomizeX.idSet.add(id);

    let formattedResult = "";
    for (let i = 0; i < result.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedResult += "-";
      }
      formattedResult += result[i];
    }

    return formattedResult;
  },

  Sentence: (sentenceLength: number = 6): string => {
    const words: string[] = [
      "Lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetur",
      "adipiscing",
      "elit",
      "sed",
      "do",
      "eiusmod",
      "tempor",
      "incididunt",
      "ut",
      "labore",
      "et",
      "dolore",
      "magna",
      "aliqua",
      "gill",
    ];

    let result: string = "";
    for (let i = 0; i < sentenceLength; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      result += words[randomIndex] + " ";
    }

    result = result.charAt(0).toUpperCase() + result.slice(1, -1) + ".";

    return result;
  },

  Number: (min: number = 0, max: number = 100): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  Email: (): string => {
    const domains: string[] = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "example.com",
    ];
    const domain: string = RandomizeX.Element(domains);
    const usernameLength: number = RandomizeX.Number(5, 10); // Random username length between 5 and 10
    let username: string = "";
    const chars: string = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < usernameLength; i++) {
      username += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${username}@${domain}`;
  },

  Boolean: (): boolean => {
    return Math.random() < 0.5;
  },

  Date: (start: Date = new Date(2000, 0, 1), end: Date = new Date()): Date => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  },

  PhoneNumber: (): string => {
    const countryCode: number = RandomizeX.Number(100, 999); // Random 3-digit country code
    const areaCode: number = RandomizeX.Number(100, 999); // Random 3-digit area code
    const subscriberNumber: number = RandomizeX.Number(1000, 9999); // Random 4-digit subscriber number
    return `+${countryCode}-${areaCode}-${subscriberNumber}`;
  },

  IpAddress: (): string => {
    const octet = (): number => Math.floor(Math.random() * 256);
    return `${octet()}.${octet()}.${octet()}.${octet()}`;
  },

  Url: (): string => {
    const protocols: string[] = ["http", "https"];
    const protocol: string = RandomizeX.Element(protocols);
    const domain: string = RandomizeX.Sentence(1).replace(".", "").toLowerCase(); // Random domain name
    const pathLength: number = RandomizeX.Number(1, 10); // Random path length between 1 and 10
    let path: string = "";
    for (let i = 0; i < pathLength; i++) {
      path += "/" + RandomizeX.Sentence(1).toLowerCase().replace(".", "");
    }
    return `${protocol}://${domain}${path}`;
  },

  Color: (): string => {
    const randomColor: string = Math.floor(Math.random() * 16777215).toString(16); // Generate random hexadecimal color code
    return `#${randomColor}`;
  },

  CreditCardNumber: (): string => {
    const firstDigit: number = RandomizeX.Number(1, 9); // Random number between 1 and 9 for the first digit
    let ccNumber: string = `${firstDigit}`;
    for (let i = 0; i < 15; i++) {
      ccNumber += RandomizeX.Number(0, 9); // Random digits for the rest of the credit card number
    }
    return ccNumber;
  },

  BooleanArray: (length: number = 5): boolean[] => {
    return Array.from({ length }, () => Math.random() < 0.5);
  },

  IntArray: (length: number = 5, min: number = 0, max: number = 100): number[] => {
    return Array.from({ length }, () => RandomizeX.Number(min, max));
  },

  Element: <T>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
  },

  BooleanWithProbability: (probability: number): boolean => {
    return Math.random() < probability;
  },

  String: (length: number, chars: string): string => {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },

  DateInRange: (startDate: Date, endDate: Date): Date => {
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  },

  Time: (): string => {
    const hours = RandomizeX.Number(0, 23);
    const minutes = RandomizeX.Number(0, 59);
    const seconds = RandomizeX.Number(0, 59);
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  },

  FileName: (extension: string): string => {
    return RandomizeX.String(10, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") + "." + extension;
  },

  HexColor: (): string => {
    const randomColor: string = Math.floor(Math.random() * 16777215).toString(16); // Generate random hexadecimal color code
    return `#${randomColor.padStart(6, "0")}`;
  },

  IPv6Address: (): string => {
    let address = "";
    for (let i = 0; i < 8; i++) {
      address += Math.floor(Math.random() * 65535).toString(16).padStart(4, "0");
      if (i < 7) {
        address += ":";
      }
    }
    return address;
  },

  MACAddress: (): string => {
    let address = "";
    for (let i = 0; i < 6; i++) {
      address += Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
      if (i < 5) {
        address += ":";
      }
    }
    return address;
  },

  GUID: (): string => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c === "x" ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },

  Currency: (): string => {
    const currencies: string[] = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "SEK", "NZD"];
    return RandomizeX.Element(currencies);
  },

  Country: (): string => {
    const countries: string[] = ["USA", "Germany", "UK", "France", "Italy", "Japan", "China", "Canada", "Australia", "Brazil"];
    return RandomizeX.Element(countries);
  },

  City: (): string => {
    const cities: string[] = ["New York", "London", "Paris", "Tokyo", "Berlin", "Sydney", "Rome", "Madrid", "Toronto", "Moscow"];
    return RandomizeX.Element(cities);
  },

  StreetAddress: (): string => {
    const streetNames: string[] = ["Main Street", "High Street", "Park Avenue", "Broadway", "Sunset Boulevard", "Abbey Road", "Baker Street"];
    const streetNumber = RandomizeX.Number(1, 999);
    return `${streetNumber} ${RandomizeX.Element(streetNames)}`;
  },

  PostalCode: (): string => {
    const postalCode = RandomizeX.Number(10000, 99999);
    return postalCode.toString();
  },

  Latitude: (): number => {
    return Math.random() * (90 - (-90)) + (-90);
  },

  Longitude: (): number => {
    return Math.random() * (180 - (-180)) + (-180);
  },

  HTTPMethod: (): string => {
    const methods: string[] = ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"];
    return RandomizeX.Element(methods);
  },

  MimeType: (): string => {
    const mimeTypes: string[] = [
      "application/json",
      "text/plain",
      "image/jpeg",
      "image/png",
      "application/pdf",
      "application/xml",
      "text/html",
      "text/css",
      "application/javascript"
    ];
    return RandomizeX.Element(mimeTypes);
  },
};

export default RandomizeX;
