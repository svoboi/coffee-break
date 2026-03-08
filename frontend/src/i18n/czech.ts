// Translation constants for the CoffeeBreak application
export const translations = {
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
  },

  // HOME PAGE
  home: {
    title: "Vítejte v CoffeeBreak",
    subtitle: "Ta nejlepší káva přesně pro vás",
    searchPlaceholder: "Hledat kavárny nebo nápoje…",
    noResults: "Žádné výsledky vyhledávání",
    recommendedCafes: "Doporučené kavárny",
    positiveReviews: "Pozitivní hodnocení",
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
  },

  // CART PAGE
  cart: {
    title: "Váš košík",
    subtitle: "Zkontrolujte a odešlete objednávku",
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
    loadingLocations: "Načítání kaváren…",
    confirming: "Odesílání…",
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
