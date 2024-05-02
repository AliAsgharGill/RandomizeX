export class RandomizeX {
  static idSet: Set<number> = new Set<number>();

  static Id(length: number = 16): string {
    const chars: string =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
    let result: string = "";
    while (result.length < length) {
      const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
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
  }

  static Sentence(sentenceLength: number = 6): string {
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
  }

  static Number(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static Email(): string {
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
  }

  static Boolean(): boolean {
    return Math.random() < 0.5;
  }

  static Date(
    start: Date = new Date(2000, 0, 1),
    end: Date = new Date()
  ): Date {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  static PhoneNumber(): string {
    const countryCode: number = RandomizeX.Number(100, 999); // Random 3-digit country code
    const areaCode: number = RandomizeX.Number(100, 999); // Random 3-digit area code
    const subscriberNumber: number = RandomizeX.Number(1000, 9999); // Random 4-digit subscriber number
    return `+${countryCode}-${areaCode}-${subscriberNumber}`;
  }

  static IpAddress(): string {
    const octet = (): number => Math.floor(Math.random() * 256);
    return `${octet()}.${octet()}.${octet()}.${octet()}`;
  }

  static Url(): string {
    const protocols: string[] = ["http", "https"];
    const protocol: string = RandomizeX.Element(protocols);
    const domain: string = RandomizeX.Sentence(1)
      .replace(".", "")
      .toLowerCase(); // Random domain name
    const pathLength: number = RandomizeX.Number(1, 10); // Random path length between 1 and 10
    let path: string = "";
    for (let i = 0; i < pathLength; i++) {
      path += "/" + RandomizeX.Sentence(1).toLowerCase().replace(".", "");
    }
    return `${protocol}://${domain}${path}`;
  }

  static Color(): string {
    const randomColor: string = Math.floor(Math.random() * 16777215).toString(
      16
    ); // Generate random hexadecimal color code
    return `#${randomColor}`;
  }

  static CreditCardNumber(): string {
    const firstDigit: number = RandomizeX.Number(1, 9); // Random number between 1 and 9 for the first digit
    let ccNumber: string = `${firstDigit}`;
    for (let i = 0; i < 15; i++) {
      ccNumber += RandomizeX.Number(0, 9); // Random digits for the rest of the credit card number
    }
    return ccNumber;
  }

  static BooleanArray(length: number = 5): boolean[] {
    return Array.from({ length }, () => Math.random() < 0.5);
  }

  static IntArray(
    length: number = 5,
    min: number = 0,
    max: number = 100
  ): number[] {
    return Array.from({ length }, () => RandomizeX.Number(min, max));
  }

  static Element<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  static BooleanWithProbability(probability: number): boolean {
    return Math.random() < probability;
  }

  static String(
    length: number = 10,
    chars: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  ): string {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  static DateInRange(startDate: Date, endDate: Date): Date {
    return new Date(
      startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime())
    );
  }

  static Time(): string {
    const hours = RandomizeX.Number(0, 23);
    const minutes = RandomizeX.Number(0, 59);
    const seconds = RandomizeX.Number(0, 59);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  static FileName(extension: string): string {
    return (
      RandomizeX.String(
        10,
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      ) +
      "." +
      extension
    );
  }

  static HexColor(): string {
    const randomColor: string = Math.floor(Math.random() * 16777215).toString(
      16
    ); // Generate random hexadecimal color code
    return `#${randomColor.padStart(6, "0")}`;
  }

  static IPv6Address(): string {
    let address = "";
    for (let i = 0; i < 8; i++) {
      address += Math.floor(Math.random() * 65535)
        .toString(16)
        .padStart(4, "0");
      if (i < 7) {
        address += ":";
      }
    }
    return address;
  }

  static MACAddress(): string {
    let address = "";
    for (let i = 0; i < 6; i++) {
      address += Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0");
      if (i < 5) {
        address += ":";
      }
    }
    return address;
  }

  static GUID(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  static Currency(): string {
    const currencies: string[] = [
      "USD",
      "EUR",
      "GBP",
      "JPY",
      "AUD",
      "CAD",
      "CHF",
      "CNY",
      "SEK",
      "NZD",
    ];
    return RandomizeX.Element(currencies);
  }

  static Country(): string {
    const countries: string[] = [
      "USA",
      "Germany",
      "UK",
      "France",
      "Italy",
      "Japan",
      "China",
      "Canada",
      "Australia",
      "Brazil",
    ];
    return RandomizeX.Element(countries);
  }

  static City(): string {
    const cities: string[] = [
      "New York",
      "London",
      "Paris",
      "Tokyo",
      "Berlin",
      "Sydney",
      "Rome",
      "Madrid",
      "Toronto",
      "Moscow",
    ];
    return RandomizeX.Element(cities);
  }

  static StreetAddress(): string {
    const streetNames: string[] = [
      "Main Street",
      "High Street",
      "Park Avenue",
      "Broadway",
      "Sunset Boulevard",
      "Abbey Road",
      "Baker Street",
    ];
    const streetNumber = RandomizeX.Number(1, 999);
    return `${streetNumber} ${RandomizeX.Element(streetNames)}`;
  }

  static PostalCode(): string {
    const postalCode = RandomizeX.Number(10000, 99999);
    return postalCode.toString();
  }

  static Latitude(): number {
    return Math.random() * (90 - -90) + -90;
  }

  static Longitude(): number {
    return Math.random() * (180 - -180) + -180;
  }

  static HTTPMethod(): string {
    const methods: string[] = [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "PATCH",
      "OPTIONS",
      "HEAD",
    ];
    return RandomizeX.Element(methods);
  }

  static MimeType(): string {
    const mimeTypes: string[] = [
      "application/json",
      "text/plain",
      "image/jpeg",
      "image/png",
      "application/pdf",
      "application/xml",
      "text/html",
      "text/css",
      "application/javascript",
    ];
    return RandomizeX.Element(mimeTypes);
  }

  static RandomProduct(): { name: string; price: number; category: string } {
    const categories = [
      "Electronics",
      "Clothing",
      "Home Decor",
      "Books",
      "Sports Equipment",
      "Beauty Products",
      "Toys",
      "Furniture",
      "Food and Beverages",
      "Fitness Gear",
    ];
    const products = [
      { name: "Smartphone", price: 500, category: "Electronics" },
      { name: "Laptop", price: 1000, category: "Electronics" },
      { name: "Headphones", price: 100, category: "Electronics" },
      { name: "T-shirt", price: 20, category: "Clothing" },
      { name: "Jeans", price: 50, category: "Clothing" },
      { name: "Sneakers", price: 80, category: "Clothing" },
      { name: "Wall Clock", price: 30, category: "Home Decor" },
      { name: "Throw Pillow", price: 15, category: "Home Decor" },
      { name: "Book", price: 10, category: "Books" },
      { name: "Basketball", price: 25, category: "Sports Equipment" },
      { name: "Yoga Mat", price: 30, category: "Fitness Gear" },
      { name: "Lipstick", price: 15, category: "Beauty Products" },
      { name: "Action Figure", price: 12, category: "Toys" },
      { name: "Coffee Table", price: 150, category: "Furniture" },
      { name: "Chocolate Bar", price: 5, category: "Food and Beverages" },
    ];

    const product = RandomizeX.RandomElement(products);
    return {
      name: product.name,
      price: product.price,
      category: product.category,
    };
  }

  static RandomColorPalette(): string[] {
    const colors = [
      "#FF6633",
      "#FFB399",
      "#FF33FF",
      "#FFFF99",
      "#00B3E6",
      "#E6B333",
      "#3366E6",
      "#999966",
      "#99FF99",
      "#B34D4D",
      "#80B300",
      "#809900",
      "#E6B3B3",
      "#6680B3",
      "#66991A",
      "#FF99E6",
      "#CCFF1A",
      "#FF1A66",
      "#E6331A",
      "#33FFCC",
      "#66994D",
      "#B366CC",
      "#4D8000",
      "#B33300",
      "#CC80CC",
      "#66664D",
      "#991AFF",
      "#E666FF",
      "#4DB3FF",
      "#1AB399",
      "#E666B3",
      "#33991A",
      "#CC9999",
      "#B3B31A",
      "#00E680",
      "#4D8066",
      "#809980",
      "#E6FF80",
      "#1AFF33",
      "#999933",
      "#FF3380",
      "#CCCC00",
      "#66E64D",
      "#4D80CC",
      "#9900B3",
      "#E64D66",
      "#4DB380",
      "#FF4D4D",
      "#99E6E6",
      "#6666FF",
    ];

    const paletteLength = RandomizeX.Number(3, 6); // Random number of colors between 3 and 6

    const sampledColors: string[] = [];
    for (let i = 0; i < paletteLength; i++) {
      const randomIndex = RandomizeX.Number(0, colors.length - 1);
      sampledColors.push(colors[randomIndex]);
      colors.splice(randomIndex, 1);
    }

    return sampledColors;
  }

  static RandomCountryCurrency(): { country: string; currency: string } {
    const countries = [
      "USA",
      "Germany",
      "UK",
      "France",
      "Italy",
      "Japan",
      "China",
      "Canada",
      "Australia",
      "Brazil",
    ];
    const currencies = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CNY", "BRL"];

    const country = RandomizeX.RandomElement(countries);
    const currency = currencies[countries.indexOf(country)];
    return { country, currency };
  }

  static RandomTimezone(): string {
    const timezones = [
      "America/New_York",
      "America/Chicago",
      "America/Denver",
      "America/Los_Angeles",
      "Europe/London",
      "Europe/Paris",
      "Europe/Berlin",
      "Asia/Tokyo",
      "Asia/Shanghai",
      "Australia/Sydney",
      "Africa/Cairo",
      "Africa/Johannesburg",
      "Pacific/Honolulu",
    ];
    return RandomizeX.RandomElement(timezones);
  }

  static RandomEmoji(): string {
    const emojis = [
      "😀",
      "😃",
      "😄",
      "😁",
      "😆",
      "😅",
      "😂",
      "🤣",
      "😊",
      "😇",
      "🙂",
      "🙃",
      "😉",
      "😌",
      "😍",
      "🥰",
      "😘",
      "😗",
      "😙",
      "😚",
      "😋",
      "😛",
      "😜",
      "😝",
      "🤑",
      "🤗",
      "🤓",
      "😎",
      "🤡",
      "🥳",
      "🥸",
      "😏",
      "😒",
      "😞",
      "😔",
      "😟",
      "😕",
      "🙁",
      "😣",
      "😖",
      "😫",
      "😩",
      "🥺",
      "😢",
      "😭",
      "😤",
      "😠",
      "😡",
      "🤬",
      "🤯",
      "😳",
      "🥵",
      "🥶",
      "😱",
      "😨",
      "😰",
      "😥",
      "😓",
      "🤗",
      "🤔",
      "🤭",
      "🤫",
      "🤥",
      "😶",
      "😐",
      "😑",
      "😬",
      "🙄",
      "😯",
      "😦",
      "😧",
      "😮",
      "😲",
      "🥱",
      "😴",
      "🤤",
      "😪",
      "😵",
      "🤐",
      "🥴",
      "🤢",
      "🤮",
      "🤧",
      "😷",
      "🤒",
      "🤕",
      "🤑",
      "🤠",
      "👽",
      "👾",
      "🤖",
      "🎃",
      "😺",
      "😸",
      "😹",
      "😻",
      "😼",
      "😽",
      "🙀",
      "😿",
      "😾",
    ];
    return RandomizeX.RandomElement(emojis);
  }

  static RandomUserAgent(): string {
    const browsers = [
      "Chrome",
      "Firefox",
      "Safari",
      "Edge",
      "Internet Explorer",
      "Opera",
      "Brave",
      "Vivaldi",
      "UC Browser",
      "Samsung Internet",
    ];
    const os = ["Windows", "Macintosh", "Linux", "Android", "iOS"];
    const versions = ["11.0", "10.0", "7.0", "5.0", "6.0", "8.0", "9.0"];

    const browser = RandomizeX.RandomElement(browsers);
    const platform = RandomizeX.RandomElement(os);
    const version = RandomizeX.RandomElement(versions);

    return `Mozilla/5.0 (${platform}) AppleWebKit/537.36 (KHTML, like Gecko) ${browser}/${version}`;
  }

  static RandomProgrammingLanguage(): string {
    const languages = [
      "JavaScript",
      "Python",
      "Java",
      "C#",
      "C++",
      "PHP",
      "TypeScript",
      "Ruby",
      "Swift",
      "Kotlin",
    ];
    return RandomizeX.RandomElement(languages);
  }

  static RandomFramework(): string {
    const frameworks = [
      "React",
      "Angular",
      "Vue.js",
      "Express.js",
      "Django",
      "Spring Boot",
      "Ruby on Rails",
      "Flask",
      "Laravel",
      "Symfony",
    ];
    return RandomizeX.RandomElement(frameworks);
  }

  static RandomDatabase(): string {
    const databases = [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Oracle Database",
      "Microsoft SQL Server",
      "Redis",
      "Cassandra",
      "Firebase",
      "DynamoDB",
    ];
    return RandomizeX.RandomElement(databases);
  }

  static RandomIDE(): string {
    const IDEs = [
      "Visual Studio Code",
      "IntelliJ IDEA",
      "Eclipse",
      "PyCharm",
      "Atom",
      "Sublime Text",
      "NetBeans",
      "Android Studio",
      "Xcode",
      "Visual Studio",
    ];
    return RandomizeX.RandomElement(IDEs);
  }

  static RandomVersionControlSystem(): string {
    const VCSs = [
      "Git",
      "SVN",
      "Mercurial",
      "Perforce",
      "TFS",
      "CVS",
      "Bazaar",
      "Darcs",
      "Fossil",
      "Bitbucket",
    ];
    return RandomizeX.RandomElement(VCSs);
  }

  static RandomDesignPattern(): string {
    const patterns = [
      "Singleton",
      "Factory Method",
      "Observer",
      "Strategy",
      "Decorator",
      "Adapter",
      "Facade",
      "Composite",
      "Proxy",
      "Chain of Responsibility",
    ];
    return RandomizeX.RandomElement(patterns);
  }

  static RandomHTTPStatusCode(): number {
    const statusCodes = [200, 201, 204, 400, 401, 403, 404, 500, 503];
    return RandomizeX.RandomElement(statusCodes);
  }

  static RandomEncryptionAlgorithm(): string {
    const algorithms = [
      "AES",
      "RSA",
      "DES",
      "Blowfish",
      "Twofish",
      "RC4",
      "3DES",
      "ECC",
      "SHA-256",
      "MD5",
    ];
    return RandomizeX.RandomElement(algorithms);
  }

  static RandomOperatingSystem(): string {
    const operatingSystems = [
      "Windows",
      "MacOS",
      "Linux",
      "iOS",
      "Android",
      "Ubuntu",
      "CentOS",
      "Fedora",
      "Debian",
      "Windows Server",
    ];
    return RandomizeX.RandomElement(operatingSystems);
  }

  static RandomDevice(): string {
    const devices = [
      "Desktop",
      "Laptop",
      "Smartphone",
      "Tablet",
      "Smartwatch",
      "Smart TV",
      "Router",
      "Gaming Console",
      "Virtual Reality Headset",
      "Smart Home Device",
    ];
    return RandomizeX.RandomElement(devices);
  }

  static RandomBrowser(): string {
    const browsers = [
      "Chrome",
      "Firefox",
      "Safari",
      "Edge",
      "Internet Explorer",
      "Opera",
      "Brave",
      "Vivaldi",
      "UC Browser",
      "Samsung Internet",
    ];
    return RandomizeX.RandomElement(browsers);
  }

  static RandomStatusCodeGroup(): number {
    const groups = [200, 400, 500];
    return RandomizeX.RandomElement(groups);
  }

  static RandomDatabaseType(): string {
    const types = [
      "Relational",
      "NoSQL",
      "NewSQL",
      "In-memory",
      "Columnar",
      "Document-oriented",
      "Graph",
    ];
    return RandomizeX.RandomElement(types);
  }

  static RandomHTTPMethod(): string {
    const methods = [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "PATCH",
      "HEAD",
      "OPTIONS",
    ];
    return RandomizeX.RandomElement(methods);
  }

  static RandomFileName(): string {
    const fileNames = [
      "index",
      "app",
      "main",
      "config",
      "utils",
      "constants",
      "styles",
      "functions",
      "helpers",
    ];
    return RandomizeX.RandomElement(fileNames);
  }

  static RandomFileExtension(): string {
    const extensions = [
      "js",
      "ts",
      "jsx",
      "tsx",
      "css",
      "scss",
      "html",
      "json",
      "md",
      "txt",
    ];
    return RandomizeX.RandomElement(extensions);
  }

  static RandomGitCommand(): string {
    const commands = [
      "git add",
      "git commit",
      "git push",
      "git pull",
      "git clone",
      "git branch",
      "git checkout",
      "git merge",
      "git rebase",
      "git reset",
    ];
    return RandomizeX.RandomElement(commands);
  }

  static RandomHTTPHeader(): string {
    const headers = [
      "Content-Type",
      "Authorization",
      "User-Agent",
      "Accept-Language",
      "Cache-Control",
      "Cookie",
      "Referer",
      "Origin",
      "Accept-Encoding",
      "If-None-Match",
    ];
    return RandomizeX.RandomElement(headers);
  }

  static RandomCloudProvider(): string {
    const providers = [
      "AWS",
      "Azure",
      "Google Cloud",
      "IBM Cloud",
      "Alibaba Cloud",
      "Oracle Cloud",
      "DigitalOcean",
      "Heroku",
      "Cloudflare",
      "Linode",
    ];
    return RandomizeX.RandomElement(providers);
  }

  static RandomContainerizationTechnology(): string {
    const technologies = [
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Mesos",
      "Rkt",
      "LXC",
      "Podman",
      "containerd",
      "CRI-O",
      "Docker Compose",
    ];
    return RandomizeX.RandomElement(technologies);
  }

  static RandomCI_CDTool(): string {
    const tools = [
      "Jenkins",
      "Travis CI",
      "CircleCI",
      "GitLab CI/CD",
      "GitHub Actions",
      "Bitbucket Pipelines",
      "Bamboo",
      "TeamCity",
      "Azure DevOps",
      "Drone",
    ];
    return RandomizeX.RandomElement(tools);
  }

  static RandomFileNameWithExtension(): string {
    const extensions = [
      "txt",
      "pdf",
      "doc",
      "docx",
      "xls",
      "xlsx",
      "ppt",
      "pptx",
    ];
    return `${RandomizeX.RandomString(
      10,
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    )}.${RandomizeX.RandomElement(extensions)}`;
  }

  static RandomFilePath(depth: number = 3): string {
    const parts = [];
    for (let i = 0; i < depth; i++) {
      parts.push(
        RandomizeX.RandomString(
          5,
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        )
      );
    }
    return parts.join("/");
  }

  static RandomUser(): { firstName: string; lastName: string; email: string } {
    const firstNames = [
      "John",
      "Jane",
      "Alice",
      "Bob",
      "Charlie",
      "David",
      "Eve",
      "Frank",
      "Grace",
      "Hannah",
    ];
    const lastNames = [
      "Doe",
      "Smith",
      "Johnson",
      "Brown",
      "Lee",
      "Garcia",
      "Martinez",
      "Clark",
      "Rodriguez",
      "Lewis",
    ];
    const domains = ["gmail.com", "yahoo.com", "hotmail.com", "example.com"];
    const firstName = RandomizeX.RandomElement(firstNames);
    const lastName = RandomizeX.RandomElement(lastNames);
    const domain = RandomizeX.RandomElement(domains);
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
    return { firstName, lastName, email };
  }

  static RandomAddress(): {
    street: string;
    city: string;
    country: string;
    postalCode: string;
  } {
    const streetNames = [
      "Main Street",
      "High Street",
      "Park Avenue",
      "Broadway",
      "Sunset Boulevard",
      "Abbey Road",
      "Baker Street",
    ];
    const cities = [
      "New York",
      "London",
      "Paris",
      "Tokyo",
      "Berlin",
      "Sydney",
      "Rome",
      "Madrid",
      "Toronto",
      "Moscow",
    ];
    const countries = [
      "USA",
      "Germany",
      "UK",
      "France",
      "Italy",
      "Japan",
      "China",
      "Canada",
      "Australia",
      "Brazil",
    ];
    const streetNumber = RandomizeX.Number(1, 999);
    const postalCode = RandomizeX.Number(10000, 99999);
    return {
      street: `${streetNumber} ${RandomizeX.RandomElement(streetNames)}`,
      city: RandomizeX.RandomElement(cities),
      country: RandomizeX.RandomElement(countries),
      postalCode: postalCode.toString(),
    };
  }

  static RandomJobTitle(): string {
    const jobTitles = [
      "Software Engineer",
      "Web Developer",
      "Data Analyst",
      "UX Designer",
      "Product Manager",
      "DevOps Engineer",
      "QA Engineer",
      "Technical Writer",
    ];
    return RandomizeX.RandomElement(jobTitles);
  }

  static RandomCompanyName(): string {
    const companyNames = [
      "Acme Corporation",
      "Tech Industries",
      "Global Solutions Ltd.",
      "Innovative Designs Inc.",
      "CodeCrafters LLC",
      "DataMasters",
      "WebWizards",
    ];
    return RandomizeX.RandomElement(companyNames);
  }

  static RandomLoremIpsumParagraph(): string {
    const loremIpsumParagraphs = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ];
    return RandomizeX.RandomElement(loremIpsumParagraphs);
  }

  static RandomLoremIpsumSentences(numSentences: number): string {
    const loremIpsumSentences = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ];
    let result = "";
    for (let i = 0; i < numSentences; i++) {
      result += RandomizeX.RandomElement(loremIpsumSentences) + " ";
    }
    return result.trim();
  }
  static UUID(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  static Shuffle<T>(array: T[]): T[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  static RandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  static RandomBooleanWithProbability(probability: number): boolean {
    return Math.random() < probability;
  }

  static RandomDateInRange(
    startDate: Date = new Date(),
    endDate: Date = new Date(new Date().setMonth(new Date().getMonth() + 1))
  ): Date {
    return new Date(
      startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime())
    );
  }

  static RandomString(length: number, chars: string): string {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  static RandomIPAddress(): string {
    return `${RandomizeX.Number(1, 255)}.${RandomizeX.Number(
      0,
      255
    )}.${RandomizeX.Number(0, 255)}.${RandomizeX.Number(1, 254)}`;
  }

  static RandomIPv6Address(): string {
    let address = "";
    for (let i = 0; i < 8; i++) {
      address += Math.floor(Math.random() * 65535)
        .toString(16)
        .padStart(4, "0");
      if (i < 7) {
        address += ":";
      }
    }
    return address;
  }

  // New Data from here

  // Generate a random Temperature
  static Temperature() {
    return `${(Math.random() * 100).toFixed(1)}°C`;
  }

  // Generate a random Domain Name
  static DomainName() {
    const domainWords = ["example", "test", "website", "domain", "random"];
    const domains = ["com", "net", "org", "io"];
    return `${this.Element(domainWords)}${this.Element(
      domainWords
    )}${this.Element(domains)}`;
  }

  // Generate a random Rating
  static Rating() {
    return Math.floor(Math.random() * 5) + 1;
  }

  // Generate a random Address
  static Address() {
    const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
    const states = ["NY", "CA", "IL", "TX", "AZ"];
    return `${
      Math.floor(Math.random() * 1000) + 1
    } ${this.Street()}, ${this.Element(cities)}, ${this.Element(
      states
    )} ${this.ZipCode()}`;
  }

  // Generate a random Buzzword
  static Buzzword() {
    const buzzwords = [
      "synergy",
      "innovation",
      "disrupt",
      "leverage",
      "optimize",
    ];
    return this.Element(buzzwords);
  }

  // Generate a random Company Name
  static CompanyName() {
    const companyWords = [
      "Tech",
      "Global",
      "Innovations",
      "Solutions",
      "Enterprises",
    ];
    return `${this.Element(companyWords)} ${this.Element(companyWords)}`;
  }

  // Generate a random Department
  static Department() {
    const departments = ["Sales", "Marketing", "Finance", "HR", "IT"];
    return this.Element(departments);
  }

  // Generate a random Job Title
  static JobTitle() {
    const jobTitles = [
      "Manager",
      "Director",
      "Developer",
      "Designer",
      "Analyst",
    ];
    return `${this.Element(
      jobTitles
    )} ${this.Department()} ${this.CompanySuffix()}`;
  }

  // Generate a random State
  static State() {
    const states = ["New York", "California", "Texas", "Florida", "Illinois"];
    return this.Element(states);
  }

  // Generate a random Street
  static Street() {
    const streets = [
      "Main St",
      "Park Ave",
      "Broadway",
      "Sunset Blvd",
      "Michigan Ave",
    ];
    return `${Math.floor(Math.random() * 1000) + 1} ${this.Element(streets)}`;
  }

  // Generate a random Zip Code
  static ZipCode() {
    return `${Math.floor(Math.random() * 90000) + 10000}`;
  }

  // Generate a random Music Genre
  static MusicGenre() {
    const genres = ["Rock", "Pop", "Hip Hop", "Jazz", "Classical"];
    return this.Element(genres);
  }

  // Generate a random TV Genre
  static TvGenre() {
    const genres = ["Drama", "Comedy", "Action", "Sci-Fi", "Documentary"];
    return this.Element(genres);
  }

  // Generate a random Movie Genre
  static MovieGenre() {
    const genres = ["Action", "Adventure", "Comedy", "Drama", "Horror"];
    return this.Element(genres);
  }

  // Generate a random Animal
  static Animal() {
    const animals = ["Dog", "Cat", "Lion", "Elephant", "Tiger"];
    return this.Element(animals);
  }

  // Generate a random Color Name
  static ColorName() {
    const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
    return this.Element(colors);
  }

  // Generate a random Fruit
  static Fruit() {
    const fruits = ["Apple", "Banana", "Orange", "Grape", "Watermelon"];
    return this.Element(fruits);
  }

  // Generate a random Vegetable
  static Vegetable() {
    const vegetables = ["Carrot", "Broccoli", "Spinach", "Cucumber", "Potato"];
    return this.Element(vegetables);
  }

  // Generate a random Measurement Unit
  static MeasurementUnit() {
    const units = ["cm", "m", "km", "mm", "inches"];
    return this.Element(units);
  }

  // Generate a random Currency Code
  static CurrencyCode() {
    const codes = ["USD", "EUR", "GBP", "JPY", "CNY"];
    return this.Element(codes);
  }

  // Generate a random Country Code
  static CountryCode() {
    const codes = ["US", "CA", "UK", "DE", "FR"];
    return this.Element(codes);
  }

  // Generate a random Profession
  static Profession() {
    const professions = ["Doctor", "Engineer", "Teacher", "Artist", "Chef"];
    return this.Element(professions);
  }

  // Generate a random Wikipedia Link
  static WikipediaLink() {
    return `https://en.wikipedia.org/wiki/${this.String(10)}`;
  }

  // Generate a random BS (Business Speak) phrase
  static BS() {
    const phrases = [
      "Synergize scalable metrics",
      "Empower enterprise paradigms",
      "Incentivize impactful e-commerce",
    ];
    return this.Element(phrases);
  }

  // Generate a random Catch Phrase
  static CatchPhrase() {
    const phrases = ["Just do it", "Think different", "I’m lovin’ it"];
    return this.Element(phrases);
  }

  // Generate a random Company Suffix
  static CompanySuffix() {
    const suffixes = ["Inc", "LLC", "Corp", "Ltd", "Group"];
    return this.Element(suffixes);
  }

  // Generate a random Database
  static Database() {
    const databases = ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis"];
    return this.Element(databases);
  }

  // Generate a random Domain Suffix
  static DomainSuffix() {
    const suffixes = ["com", "net", "org", "io", "co"];
    return this.Element(suffixes);
  }

  // Generate a random Hacker Phrase
  static HackerPhrase() {
    const phrases = [
      "Hack the planet",
      "All your base are belong to us",
      "There is no place like 127.0.0.1",
    ];
    return this.Element(phrases);
  }

  // Generate a random Market
  static Market() {
    const markets = [
      "Stock Market",
      "Real Estate Market",
      "Technology Market",
      "Art Market",
      "Cryptocurrency Market",
    ];
    return this.Element(markets);
  }

  // Generate a random Product Name
  static ProductName() {
    const products = [
      "iPhone",
      "PlayStation",
      "Tesla Model S",
      "Nike Air Max",
      "Starbucks Coffee",
    ];
    return this.Element(products);
  }

  // Generate a random Software Name
  static Software() {
    const softwares = [
      "Photoshop",
      "Visual Studio Code",
      "Google Chrome",
      "Microsoft Word",
      "Slack",
    ];
    return this.Element(softwares);
  }

  // Generate a random Weather
  static Weather() {
    const weather = ["Sunny", "Cloudy", "Rainy", "Snowy", "Windy"];
    return this.Element(weather);
  }

  // Generate a random Word
  static Word() {
    const words = ["apple", "banana", "cherry", "dog", "elephant", "Gill"];
    return this.Element(words);
  }

  // Generate a random Money value
  static Money() {
    return Math.floor(Math.random() * 1000);
  }

  // Generate a random Card Type
  static CardType() {
    const types = ["Visa", "Mastercard", "American Express", "Discover"];
    return this.Element(types);
  }

  // Generate a random Credit Card Expiry Date
  static CreditCardExpiryDate() {
    const year = new Date().getFullYear() + Math.floor(Math.random() * 5);
    const month = Math.floor(Math.random() * 12) + 1;
    return `${month}/${year}`;
  }

  // Generate a random Credit Card CVV
  static CreditCardCVV() {
    return Math.floor(100 + Math.random() * 900);
  }

  // Generate a random Color Hex
  static ColorHex() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }

  // Generate a random RGB Color
  static RGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Generate a random HSL Color
  static HSLColor() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 101);
    const l = Math.floor(Math.random() * 101);
    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  static IPv4() {
    return `${Math.floor(Math.random() * 256)}.${Math.floor(
      Math.random() * 256
    )}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
  }

  // Generate a random URL Path
  static URLPath() {
    const paths = ["about", "blog", "contact", "products", "services"];
    return `/${this.Element(paths)}`;
  }

  // Generate a random URL Query Parameter
  static URLQueryParam() {
    const keys = ["id", "page", "search", "category", "sort"];
    const key = this.Element(keys);
    const value = this.String(5);
    return `${key}=${value}`;
  }

  // Generate a random URL Fragment
  static URLFragment() {
    return `#${this.String(5)}`;
  }

  // Generate Lorem Ipsum text
  static LoremIpsum() {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  }

  // Generate a random paragraph
  static Paragraph() {
    return `${this.Sentence()} ${this.Sentence()} ${this.Sentence()}`;
  }

  // Generate a random Lorem Ipsum word
  static LoremWord() {
    const words = ["Lorem", "ipsum", "dolor", "sit", "amet"];
    return this.Element(words);
  }

  // Generate a random Rick and Morty quote
  static RickAndMortyQuote() {
    const quotes = [
      "Wubba lubba dub dub!",
      "I turned myself into a pickle, Morty!",
      "Nobody exists on purpose. Nobody belongs anywhere. Everybody’s gonna die. Come watch TV.",
    ];
    return this.Element(quotes);
  }

  // Generate a random Harry Potter spell
  static HarryPotterSpell() {
    const spells = [
      "Expecto Patronum",
      "Avada Kedavra",
      "Wingardium Leviosa",
      "Expelliarmus",
      "Lumos",
    ];
    return this.Element(spells);
  }

  // Generate a random Dungeons and Dragons quote
  static DungeonsAndDragonsQuote() {
    const quotes = [
      "Roll for initiative!",
      "I cast magic missile at the darkness!",
      "You find a chest. What do you do?",
    ];
    return this.Element(quotes);
  }

  // Generate a random Star Wars quote
  static StarWarsQuote() {
    const quotes = [
      "May the Force be with you.",
      "I am your father.",
      "It’s a trap!",
    ];
    return this.Element(quotes);
  }

  // Generate a random Dice Roll
  static DiceRoll() {
    const sides = [4, 6, 8, 10, 12, 20];
    const side = this.Element(sides);
    return `d${side}: ${Math.floor(Math.random() * side) + 1}`;
  }

  // Generate a random Fact
  static Fact() {
    const facts = [
      "The Earth is the only planet not named after a god.",
      "Bananas are berries, but strawberries are not.",
      "The human brain takes in 11 million bits of information every second but is aware only of 40.",
      "The Great Wall of China is not visible from space without aid.",
    ];
    return this.Element(facts);
  }

  // Generate a random Gender
  static Gender() {
    const genders = ["Male", "Female", "Other"];
    return this.Element(genders);
  }

  static Username(): string {
    const adjectives = [
      "happy",
      "sleepy",
      "grumpy",
      "sneezy",
      "dopey",
      "bashful",
      "doc",
      "smiley",
      "sunny",
      "breezy",
    ];
    const nouns = [
      "apple",
      "banana",
      "cherry",
      "grape",
      "kiwi",
      "lemon",
      "orange",
      "pear",
      "strawberry",
      "watermelon",
    ];

    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    const randomNumber = Math.floor(Math.random() * 100);

    return `${randomAdjective}-${randomNoun}-${randomNumber}`;
  }

  // New End here
}
