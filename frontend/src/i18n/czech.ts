import { englishTranslations } from "./english";

// Translation constants for the CoffeeBreak application
export const czechTranslations = {
  // HEADER
  header: {
    title: "CoffeeBreak",
    home: "Domů",
    locations: "Pobočky",
    menu: "Menu",
    orders: "Objednávky",
    account: "Účet",
    logout: "Odhlásit se",
    login: "Přihlásit se",
    contact: "Kontakt",
    dashboard: "Přehled",
    manageLocations: "Správa poboček",
    manageMenu: "Správa menu",
    cart: "Košík",
    logoAlt: "Logo CoffeeBreak",
    cartAriaPrefix: "Košík obsahuje",
    cartAriaSuffix: "položek",
    openNavigationMenu: "Otevřít navigační menu",
    mainNavigation: "Hlavní navigace",
    language: "Jazyk",
    czech: "CZ",
    english: "EN",
  },

  // HOME PAGE
  home: {
    title: "Vítejte v CoffeeBreak",
    subtitle: "Ta nejlepší káva přesně pro vás",
    searchPlaceholder: "Hledat kavárny nebo nápoje…",
    noResults: "Žádné výsledky vyhledávání",
    recommendedCafes: "Doporučené kavárny",
    positiveReviews: "Pozitivní hodnocení",
    screenReaderTitle: "Coffee Break - Domovská stránka",
    reviewAuthor1: "Barbora",
    reviewComment1: "Výborná káva a milý personál!",
    reviewAuthor2: "Petr",
    reviewComment2: "Skvělá atmosféra, ceny trochu vyšší.",
    reviewAuthor3: "Marie",
    reviewComment3: "Nejlepší cappuccino v městě!",
  },

  // LOGIN PAGE
  login: {
    title: "Přihlášení",
    subtitle: "Vyberte svou roli",
    username: "E-mailová adresa",
    password: "Heslo",
    signin: "Přihlásit se",
    customer: "Zákazník",
    employee: "Zaměstnanec",
    errors: {
      username: "Zadejte platnou e-mailovou adresu",
      password: "Zadejte heslo",
      invalidCredentials: "Neplatné přihlašovací údaje",
    },
    formAriaLabel: "Přihlašovací formulář",
    signup: "Ještě nemáte účet?",
    register: "Zaregistrujte se",
  },

  // REGISTER PAGE
  register: {
    title: "Registrace",
    subtitle: "Vytvoření nového účtu",
    firstName: "Jméno",
    lastName: "Příjmení",
    email: "E-mailová adresa",
    password: "Heslo",
    confirmPassword: "Potvrzení hesla",
    role: "Vyberte roli",
    customer: "Zákazník",
    employee: "Zaměstnanec",
    terms: "Souhlasím s podmínkami používání",
    already: "Už máte účet?",
    signin: "Přihlaste se",
  },

  // LOGIN CONTEXT
  loginContext: {
    notAuthenticated: "Nejste přihlášeni",
  },

  // ACCOUNT PAGE
  account: {
    title: "Údaje o účtu",
    realName: "Jméno",
    username: "Uživatelské jméno",
    role: "Role",
    memberSince: "Členem od",
    editProfile: "Upravit profil",
    logout: "Odhlásit se",
    cancel: "Zrušit",
    customer: "Zákazník",
    employee: "Zaměstnanec kavárny",
    admin: "Administrátor",
    notLoggedIn: "Pro zobrazení údajů o účtu se přihlaste",
    logoutMessage: "Byli jste odhlášeni. Na shledanou!",
  },

  // ORDERS PAGE (EMPLOYEE)
  ordersEmployee: {
    selectCafe: "Vyberte kavárnu:",
    cafeInfo: "Informace o kavárně",
    orders: "Objednávky",
    welcome: "Vítejte!",
    selectCafeMessage: "Vyberte kavárnu výše a můžete začít.",
    errorLoadingCafes: "Nepodařilo se načíst seznam kaváren.",
    title: "Správa objednávek",
    subtitle: "Sledujte a vyřizujte přijaté objednávky",

    allOrders: "Všechny objednávky",
    totalOrders: "Celkem objednávek:",
    filterByStatus: "Filtrovat podle stavu:",
    allOrdersLabel: "Všechny objednávky",

    newOrders: "Nové",
    inProgressOrders: "Probíhájící",
    readyOrders: "Připraveno",
    completedOrders: "Dokončeno",
    declinedOrders: "Zamítnuto",
    unclaimedOrders: "Nevyzvednuto",

    noOrdersFound: "Nebyla nalezena žádná objednávka.",
    noOrdersYet: "Zatím zde nejsou žádné objednávky. Zkuste to později!",
    noOrdersFiltered: "Žádné objednávky s tímto stavem.",

    order: "Objednávka",
    orderItems: "Položky objednávky",
    timing: "Čas",
    orderPlaced: "Objednáno:",
    pickUpTime: "Vyzvednutí:",
    pickupIn: "⚡ Vyzvednutí za:",
    minutes: "minut",

    acceptOrder: "✓ Přijmout objednávku",
    rejectOrder: "✕ Zamítnout objednávku",
    markReady: "✓ Označit jako připraveno",

    waitingCustomer: "Čeká se na zákazníka…",
    orderPickedUp: "Objednávka vyzvednuta",
    orderCompleted: "Objednávka dokončena",
    orderDeclined: "Objednávka zamítnuta",
    orderUnclaimed: "Objednávka nevyzvednuta",

    urgent: "URGENTNÍ",
    urgentIndicator: "URGENTNÍ",

    totalItems: "Celkem položek:",
    customer: "Zákazník:",

    expandDetails: "Zobrazit detaily",
    collapseDetails: "Skrýt detaily",

    items: "Položky",
    moreItems: "další položka",
    moreItemsPlural: "další položky",
  },

  // ORDERS PAGE (CLIENT)
  ordersClient: {
    title: "Moje objednávky",
    subtitle: "Sledujte a spravujte své objednávky",
    all: "Vše",
    new: "Nové",
    inProgress: "Probíhá",
    readyToPickup: "Připraveno",
    completed: "Dokončeno",
    declined: "Zamítnuto",
    noOrders: "Zatím žádné objednávky",
    noOrdersMessage: "Ještě jste si nic neobjednali. Začněte hned teď!",
    noOrdersFiltered: "Žádné objednávky s uvedeným stavem",
    notLoggedIn: "Pro zobrazení objednávek se přihlaste",
    errorLoading: "Chyba při načítání objednávek",
    loadingOrders: "Načítání objednávek...",
  },

  // ORDER CARD
  orderCard: {
    order: "Objednávka",
    cafe: "Kavárna",
    status: {
      NEW: "Nová objednávka",
      IN_PROGRESS: "Probíhájící",
      READY_TO_PICKUP: "Připraveno k vyzvednutí",
      COMPLETED: "Dokončeno",
      DECLINED: "Zamítnuto",
      UNCLAIMED: "Nevyzvednuto",
    },
    items: "Položky",
    total: "Celkem",
    ordered: "Objednáno",
    pickup: "Vyzvednutí",
    pickupSoon: "Brzké vyzvednutí!",
    pastPickup: "Čas vyzvednutí uplynul",
    item: "položka",
    itemPlural: "položky",
    markPickedUp: "✓ Označit jako vyzvednuté",
    cancelOrder: "✕ Zrušit objednávku",
    expandedRegionLabel: "Detaily objednávky",
    collapseTitle: "Sbalit",
    collapseOrderDetailsAria: "Sbalit detaily objednávky",
    expandTitle: "Rozbalit",
    expandOrderDetailsAria: "Rozbalit detaily objednávky",
    compactCardAriaFrom: "z",
  },

  // LOCATIONS PAGE
  locations: {
    title: "Pobočky",
    subtitle: "Najděte naši nejbližší kavárnu",
    name: "Název pobočky",
    description: "Popis pobočky",
    address: "Adresa",
    edit: "Upravit",
    order: "Objednat",
    save: "Uložit",
    cancel: "Zrušit",
    noLocations: "Žádné pobočky k dispozici",
    listTitle: "Seznam kaváren",
    addNewCafe: "Přidat novou kavárnu",
    view: "Zobrazit",
  },

  // OFFERS PAGE
  offers: {
    title: "Menu",
    subtitle: "Naše speciální nabídka",
    name: "Název nápoje",
    price: "Cena",
    currency: "Měna",
    order: "Objednat",
    edit: "Upravit",
    save: "Uložit",
    cancel: "Zrušit",
    noOffers: "Žádné nápoje k dispozici",
    addNew: "Přidat nový nápoj",
    addedToCart: "Přidáno do košíku!",
    addedToCartLoginRequired:
      "Přidáno do košíku! Prosím, přihlaste se pro dokončení objednávky.",
  },

  editOffer: {
    editTitle: "Upravit nabídku",
    createTitle: "Přidat novou nabídku",
    offerNameLabel: "Název nabídky",
    offerNamePlaceholder: "např. Espresso, Cappuccino...",
    offerNameRequired: "Prosím, zadejte název nabídky.",
    priceLabel: "Cena",
    priceRequired: "Prosím, zadejte cenu.",
    currencyLabel: "Měna",
    currencyCzkLabel: "CZK (Česká koruna)",
    currencyEurLabel: "EUR (Euro)",
    currencyUsdLabel: "USD (Americký dolar)",
    saveSuccessPrefix: "Nabídka",
    saveSuccessSuffix: "byla uložena!",
  },

  editLocation: {
    editTitle: "Upravit kavárnu",
    createTitle: "Přidat novou kavárnu",
    nameLabel: "Název kavárny",
    nameRequired: "Prosím, zadejte název kavárny.",
    descriptionLabel: "Popis kavárny",
    descriptionRequired: "Prosím, zadejte popis kavárny.",
    addressLabel: "Adresa kavárny",
    addressRequired: "Prosím, zadejte adresu kavárny.",
    saveSuccessPrefix: "Kavárna",
    saveSuccessSuffix: "byla uložena!",
  },

  orderItem: {
    missingRequiredField: "Chybí povinný údaj",
    updatedSuccess: "Položka objednávky byla úspěšně upravena!",
    deletedSuccess: "Položka objednávky byla úspěšně smazána!",
  },

  cafeHooks: {
    missingRequiredField: "Chybí povinný údaj",
    createSuccessPrefix: "Kavárna",
    createSuccessSuffix: "byla úspěšně vytvořena!",
    updateSuccessPrefix: "Kavárna",
    updateSuccessSuffix: "byla úspěšně upravena!",
    deleteSuccess: "Kavárna byla úspěšně smazána!",
  },

  coffeeHooks: {
    missingRequiredField: "Chybí povinný údaj",
    createSuccessPrefix: "Nápoj",
    createSuccessSuffix: "byl úspěšně vytvořen!",
    updateSuccessPrefix: "Nápoj",
    updateSuccessSuffix: "byl úspěšně upraven!",
    deleteSuccess: "Nápoj byl úspěšně smazán!",
  },

  orderHooks: {
    missingRequiredField: "Chybí povinný údaj",
    invalidStatusChange: "Neplatná změna stavu objednávky",
    createSuccess: "Objednávka byla úspěšně vytvořena!",
    updateSuccess: "Objednávka byla úspěšně upravena!",
    deleteSuccess: "Objednávka byla úspěšně smazána!",
    statusUpdatedSuccess: "Stav objednávky byl úspěšně aktualizován!",
  },

  userHooks: {
    missingRequiredField: "Chybí povinný údaj",
    createSuccessPrefix: "Uživatel",
    createSuccessSuffix: "byl úspěšně vytvořen!",
    updateSuccessPrefix: "Uživatel",
    updateSuccessSuffix: "byl úspěšně upraven!",
    deleteSuccess: "Uživatel byl úspěšně smazán!",
  },

  auth: {
    loginSuccess: "Přihlášení bylo úspěšné!",
    loginFailed: "Přihlášení selhalo!",
    registerSuccess: "Registrace byla úspěšná, nyní se přihlaste.",
    registerFailed: "Registrace selhala.",
  },

  // CART PAGE
  cart: {
    title: "Váš košík",
    subtitle: "Zkontrolujte a odešlete objednávku",
    itemsTitle: "Položky v košíku",
    summaryTitle: "Shrnutí objednávky",
    empty: "Váš košík je prázdný",
    emptyMessage: "Nemáte v košíku žádné položky. Začněte vybírat!",
    items: "Položky",
    item: "Položka",
    quantity: "Množství",
    unitPrice: "Cena za kus",
    total: "Celkem",
    remove: "Odebrat",
    pickupLocation: "Místo vyzvednutí",
    selectLocation: "Vyberte kavárnu…",
    noLocationsAvailable: "Žádné kavárny nejsou dostupné",
    subtotal: "Mezisoučet",
    placeOrder: "Odeslat objednávku",
    orderSuccess: "Objednávka byla úspěšně odeslána!",
    orderError:
      "Při odesílání objednávky došlo k chybě. Zkuste to prosím znovu.",
    locationRequired: "Vyberte prosím místo vyzvednutí",
    loginRequired: "Musíte být přihlášeni k vytvoření objednávky.",
    loadingLocations: "Načítání kaváren…",
    confirming: "Odesílání…",
    browseMenu: "Procházet menu",
    continueShopping: "Pokračovat v nákupu",
    clearCart: "Vyprázdnit košík",
  },

  // CONTACT PAGE
  contact: {
    title: "Kontaktujte nás",
    subtitle: "Máte dotaz?",
    email: "E-mail",
    message: "Zpráva",
    send: "Odeslat",
    thanks: "Děkujeme za zprávu!",
    getInTouch: "Kontaktujte nás",
    questions: "Máte otázky nebo zpětnou vazbu? Rádi od vás uslyšíme!",
    emailLabel: "E-mail:",
    emailPlaceholder: "example@email.com",
    supportHours: "Podpora je k dispozici:",
    mondayFriday: "Pondělí–Pátek: 9:00–18:00",
    saturdaySunday: "Sobota–Neděle: 10:00–16:00",
    sendEmail: "Odeslat e-mail",
    howItWorks: "Jak to funguje?",
    browseCafes: "Procházejte kavárny",
    browseCafesDesc: "Objevte kavárny ve vašem okolí a jejich nabídku",
    chooseYourCoffee: "Vyberte si kávu",
    chooseYourCoffeeDesc: "Zvolte si svůj oblíbený nápoj",
    placeYourOrder: "Odešlete objednávku",
    placeYourOrderDesc: "Objednejte si předem pro rychlé vyzvednutí",
    enjoyYourCoffee: "Vychutnejte si kávu",
    enjoyYourCoffeeDesc: "Vyzvedněte si objednávku v domluvený čas",
    legalPrivacy: "Ochrana osobních údajů",
    contactForm: "Kontaktní formulář",
    contactFormDesc: "Máte dotaz? Napište nám!",
    fullName: "Jméno a příjmení",
    fullNamePlaceholder: "Vaše jméno",
    subject: "Předmět",
    subjectPlaceholder: "O čem je vaše zpráva?",
    messagePlaceholder: "Sem napište svou zprávu…",
    submitForm: "Odeslat zprávu",
    formSuccess: "Zpráva byla úspěšně odeslána! Ozveme se co nejdříve.",
    formError: "Při odesílání došlo k chybě. Zkuste to prosím znovu.",
    fieldRequired: "Toto pole je povinné",
    invalidEmailFormat: "Neplatný formát e-mailové adresy",
    gdprPolicy: "Zásady GDPR",
    gdprDescription:
      "Zjistěte, jak sbíráme, používáme a chráníme vaše osobní údaje.",
    readGdprPolicy: "Zobrazit zásady GDPR",
    termsOfService: "Podmínky služby",
    termsOfServiceDesc:
      "Přečtěte si naše podmínky používání aplikace CoffeeBreak.",
    readTermsOfService: "Zobrazit podmínky služby",
    appInfo: "Informace o aplikaci",
    allRightsReserved: "Všechna práva vyhrazena",
    lastUpdated: "Poslední aktualizace",
  },

  // FOOTER
  footer: {
    brand: "☕ CoffeeBreak",
    brandDescription: "Skvělá káva v celé České republice",
    tagline: "Skvělá káva v celé České republice",
    quickLinks: "Užitečné odkazy",
    home: "Domů",
    locations: "Pobočky",
    menu: "Menu",
    orders: "Objednávky",
    company: "O společnosti",
    companyInfo: "O společnosti",
    about: "O nás",
    careers: "Kariéra",
    press: "Pro média",
    contact: "Kontakt",
    phone: "+420 123 456 789",
    email: "support@coffeebreak.com",
    location: "Praha, Česká republika",
    address: "Adresa",
    followUs: "Sledujte nás",
    facebook: "Facebook",
    instagram: "Instagram",
    twitter: "Twitter",
    legal: "Právní informace",
    privacy: "Ochrana osobních údajů",
    terms: "Podmínky používání",
    cookies: "Cookies",
    copyright: "Všechna práva vyhrazena",
  },

  // COMMON BUTTONS & ACTIONS
  common: {
    save: "Uložit",
    cancel: "Zrušit",
    delete: "Smazat",
    edit: "Upravit",
    close: "Zavřít",
    loading: "Načítání…",
    error: "Chyba",
    success: "Hotovo",
    confirm: "Potvrdit",
    back: "Zpět",
    next: "Další",
    previous: "Předchozí",
  },

  // STATUS BADGES
  status: {
    new: "Nová objednávka",
    inProgress: "Probíhájící",
    readyToPickup: "Připraveno k vyzvednutí",
    completed: "Dokončeno",
    declined: "Zamítnuto",
    unclaimed: "Nevyzvednuto",
  },

  // VALIDATION MESSAGES
  validation: {
    required: "Toto pole je povinné",
    invalidEmail: "Neplatná e-mailová adresa",
    passwordTooShort: "Heslo musí mít alespoň 6 znaků",
    passwordsDoNotMatch: "Hesla se neshodují",
    invalidPhone: "Neplatné telefonní číslo",
  },

  // ERRORS
  errors: {
    loadingFailed: "Načítání se nezdařilo",
    saveFailed: "Uložení se nezdařilo",
    deleteFailed: "Smazání se nezdařilo",
    generalError: "Došlo k chybě",
    tryAgain: "Zkuste to prosím znovu",
  },

  // SUCCESS MESSAGES
  messages: {
    saved: "Úspěšně uloženo!",
    deleted: "Úspěšně smazáno!",
    created: "Úspěšně vytvořeno!",
    updated: "Úspěšně upraveno!",
  },
};

export type AppLanguage = "cs" | "en";

const LANGUAGE_STORAGE_KEY = "coffee-break-language";
const LANGUAGE_CHANGED_EVENT = "coffee-break-language-changed";

const getStoredLanguage = (): AppLanguage => {
  if (typeof window === "undefined") return "cs";
  const stored = window.localStorage.getItem(
    LANGUAGE_STORAGE_KEY,
  ) as AppLanguage | null;
  return stored === "en" ? "en" : "cs";
};

export const getLanguage = (): AppLanguage => getStoredLanguage();

export const setLanguage = (language: AppLanguage) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  window.dispatchEvent(new Event(LANGUAGE_CHANGED_EVENT));
};

export const onLanguageChange = (listener: () => void): (() => void) => {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(LANGUAGE_CHANGED_EVENT, listener);
  return () => window.removeEventListener(LANGUAGE_CHANGED_EVENT, listener);
};

const dictionaries = {
  cs: czechTranslations,
  en: englishTranslations,
};

const createDynamicProxy = (path: Array<string | number> = []): any => {
  return new Proxy(
    {},
    {
      get: (_target, prop) => {
        const dictionary = dictionaries[getLanguage()];
        const value = [...path, prop as string].reduce<any>(
          (acc, key) => acc?.[key],
          dictionary,
        );

        if (value !== null && typeof value === "object") {
          return createDynamicProxy([...path, prop as string]);
        }

        return value;
      },
    },
  );
};

export const translations = createDynamicProxy() as typeof czechTranslations;
