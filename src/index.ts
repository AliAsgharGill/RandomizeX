export class RandomizeX {
  static randomizeId(length: number = 16): string {
    const chars: string =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
    let result: string = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  static randomizeSentence(sentenceLength: number = 6): string {
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

    // Capitalize the first letter and add a period at the end
    result = result.charAt(0).toUpperCase() + result.slice(1, -1) + ".";

    return result;
  }

  static randomizeNumber(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static randomizeEmail(): string {
    const domains: string[] = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "example.com",
    ];
    const domain: string = domains[Math.floor(Math.random() * domains.length)];
    const usernameLength: number = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // Random username length between 5 and 10
    let username: string = "";
    const chars: string = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < usernameLength; i++) {
      username += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${username}@${domain}`;
  }

  static randomizeBoolean(): boolean {
    return Math.random() < 0.5;
  }

  static randomizeDate(
    start: Date = new Date(2000, 0, 1),
    end: Date = new Date()
  ): Date {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  static randomizePhoneNumber(): string {
    const countryCode: number =
      Math.floor(Math.random() * (999 - 100 + 1)) + 100; // Random 3-digit country code
    const areaCode: number = Math.floor(Math.random() * (999 - 100 + 1)) + 100; // Random 3-digit area code
    const subscriberNumber: number =
      Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000; // Random 4-digit subscriber number
    return `+${countryCode}-${areaCode}-${subscriberNumber}`;
  }

  static randomizeIpAddress(): string {
    const octet = (): number => Math.floor(Math.random() * 256);
    return `${octet()}.${octet()}.${octet()}.${octet()}`;
  }

  static randomizeUrl(): string {
    const protocols: string[] = ["http", "https"];
    const protocol: string =
      protocols[Math.floor(Math.random() * protocols.length)];
    const domain: string = this.randomizeSentence(1)
      .replace(".", "")
      .toLowerCase(); // Random domain name
    const pathLength: number = Math.floor(Math.random() * (10 - 1 + 1)) + 1; // Random path length between 1 and 10
    let path: string = "";
    for (let i = 0; i < pathLength; i++) {
      path += "/" + this.randomizeSentence(1).toLowerCase().replace(".", "");
    }
    return `${protocol}://${domain}${path}`;
  }

  static randomizeColor(): string {
    const randomColor: string = Math.floor(Math.random() * 16777215).toString(
      16
    ); // Generate random hexadecimal color code
    return `#${randomColor}`;
  }

  static randomizeCreditCardNumber(): string {
    const firstDigit: number = Math.floor(Math.random() * 9) + 1; // Random number between 1 and 9 for the first digit
    let ccNumber: string = `${firstDigit}`;
    for (let i = 0; i < 15; i++) {
      ccNumber += Math.floor(Math.random() * 10); // Random digits for the rest of the credit card number
    }
    return ccNumber;
  }

  static randomizeBooleanArray(length: number = 5): boolean[] {
    return Array.from({ length }, () => Math.random() < 0.5);
  }

  static randomizeIntArray(
    length: number = 5,
    min: number = 0,
    max: number = 100
  ): number[] {
    return Array.from(
      { length },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );
  }
}
