// ============================================================
// WORLD MONITOR V2 — Complete Country Database
// All 249 ISO 3166-1 entities
// ============================================================

import type { Country } from '../types/index';

export const ALL_COUNTRIES: Country[] = [
  // ============================================================
  // EUROPE — Northern Europe
  // ============================================================
  {
    code: 'SE', code3: 'SWE', name: 'Sweden', nameSv: 'Sverige', nameLocal: 'Sverige',
    region: 'Europe', subregion: 'Northern Europe', capital: 'Stockholm',
    population: 10540886, area: 450295, languages: ['Swedish'], currency: 'Swedish Krona', currencyCode: 'SEK',
    callingCode: '+46', tld: '.se', flagEmoji: '🇸🇪', lat: 62.0, lng: 15.0, independent: true, unMember: true
  },
  {
    code: 'NO', code3: 'NOR', name: 'Norway', nameSv: 'Norge', nameLocal: 'Norge',
    region: 'Europe', subregion: 'Northern Europe', capital: 'Oslo',
    population: 5474360, area: 323802, languages: ['Norwegian'], currency: 'Norwegian Krone', currencyCode: 'NOK',
    callingCode: '+47', tld: '.no', flagEmoji: '🇳🇴', lat: 62.0, lng: 10.0, independent: true, unMember: true
  },
  {
    code: 'DK', code3: 'DNK', name: 'Denmark', nameSv: 'Danmark', nameLocal: 'Danmark',
    region: 'Europe', subregion: 'Northern Europe', capital: 'Copenhagen',
    population: 5910913, area: 43094, languages: ['Danish'], currency: 'Danish Krone', currencyCode: 'DKK',
    callingCode: '+45', tld: '.dk', flagEmoji: '🇩🇰', lat: 56.0, lng: 10.0, independent: true, unMember: true
  },
  {
    code: 'FI', code3: 'FIN', name: 'Finland', nameSv: 'Finland', nameLocal: 'Suomi',
    region: 'Europe', subregion: 'Northern Europe', capital: 'Helsinki',
    population: 5548241, area: 338424, languages: ['Finnish', 'Swedish'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+358', tld: '.fi', flagEmoji: '🇫🇮', lat: 64.0, lng: 26.0, independent: true, unMember: true
  },
  {
    code: 'IS', code3: 'ISL', name: 'Iceland', nameSv: 'Island', nameLocal: 'Ísland',
    region: 'Europe', subregion: 'Northern Europe', capital: 'Reykjavik',
    population: 376248, area: 103000, languages: ['Icelandic'], currency: 'Icelandic Króna', currencyCode: 'ISK',
    callingCode: '+354', tld: '.is', flagEmoji: '🇮🇸', lat: 65.0, lng: -18.0, independent: true, unMember: true
  },
  {
    code: 'EE', code3: 'EST', name: 'Estonia', nameSv: 'Estland', nameLocal: 'Eesti',
    region: 'Europe', subregion: 'Northern Europe', capital: 'Tallinn',
    population: 1331057, area: 45228, languages: ['Estonian'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+372', tld: '.ee', flagEmoji: '🇪🇪', lat: 59.0, lng: 26.0, independent: true, unMember: true
  },
  {
    code: 'LV', code3: 'LVA', name: 'Latvia', nameSv: 'Lettland', nameLocal: 'Latvija',
    region: 'Europe', subregion: 'Northern Europe', capital: 'Riga',
    population: 1886198, area: 64559, languages: ['Latvian'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+371', tld: '.lv', flagEmoji: '🇱🇻', lat: 57.0, lng: 25.0, independent: true, unMember: true
  },
  {
    code: 'LT', code3: 'LTU', name: 'Lithuania', nameSv: 'Litauen', nameLocal: 'Lietuva',
    region: 'Europe', subregion: 'Northern Europe', capital: 'Vilnius',
    population: 2794700, area: 65300, languages: ['Lithuanian'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+370', tld: '.lt', flagEmoji: '🇱🇹', lat: 56.0, lng: 24.0, independent: true, unMember: true
  },
  {
    code: 'IE', code3: 'IRL', name: 'Ireland', nameSv: 'Irland', nameLocal: 'Éire',
    region: 'Europe', subregion: 'Northern Europe', capital: 'Dublin',
    population: 5033165, area: 70273, languages: ['Irish', 'English'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+353', tld: '.ie', flagEmoji: '🇮🇪', lat: 53.0, lng: -8.0, independent: true, unMember: true
  },
  {
    code: 'GB', code3: 'GBR', name: 'United Kingdom', nameSv: 'Storbritannien', nameLocal: 'United Kingdom',
    region: 'Europe', subregion: 'Northern Europe', capital: 'London',
    population: 67886011, area: 242495, languages: ['English'], currency: 'Pound Sterling', currencyCode: 'GBP',
    callingCode: '+44', tld: '.uk', flagEmoji: '🇬🇧', lat: 54.0, lng: -2.0, independent: true, unMember: true
  },
  // Northern Europe territories
  {
    code: 'FO', code3: 'FRO', name: 'Faroe Islands', nameSv: 'Färöarna', nameLocal: 'Føroyar',
    region: 'Europe', subregion: 'Northern Europe', capital: 'Tórshavn',
    population: 53199, area: 1393, languages: ['Faroese', 'Danish'], currency: 'Danish Krone', currencyCode: 'DKK',
    callingCode: '+298', tld: '.fo', flagEmoji: '🇫🇴', lat: 62.0, lng: -7.0, independent: false, unMember: false
  },
  {
    code: 'GL', code3: 'GRL', name: 'Greenland', nameSv: 'Grönland', nameLocal: 'Kalaallit Nunaat',
    region: 'Americas', subregion: 'North America', capital: 'Nuuk',
    population: 56653, area: 2166086, languages: ['Greenlandic', 'Danish'], currency: 'Danish Krone', currencyCode: 'DKK',
    callingCode: '+299', tld: '.gl', flagEmoji: '🇬🇱', lat: 72.0, lng: -40.0, independent: false, unMember: false
  },
  {
    code: 'AX', code3: 'ALA', name: 'Åland Islands', nameSv: 'Åland', nameLocal: 'Åland',
    region: 'Europe', subregion: 'Northern Europe', capital: 'Mariehamn',
    population: 30129, area: 1580, languages: ['Swedish'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+358', tld: '.ax', flagEmoji: '🇦🇽', lat: 60.116667, lng: 19.9, independent: false, unMember: false
  },
  {
    code: 'SJ', code3: 'SJM', name: 'Svalbard and Jan Mayen', nameSv: 'Svalbard och Jan Mayen', nameLocal: 'Svalbard og Jan Mayen',
    region: 'Europe', subregion: 'Northern Europe', capital: 'Longyearbyen',
    population: 2642, area: 62045, languages: ['Norwegian'], currency: 'Norwegian Krone', currencyCode: 'NOK',
    callingCode: '+47', tld: '.sj', flagEmoji: '🇸🇯', lat: 78.0, lng: 16.0, independent: false, unMember: false
  },
  {
    code: 'GG', code3: 'GGY', name: 'Guernsey', nameSv: 'Guernsey', nameLocal: 'Guernsey',
    region: 'Europe', subregion: 'Northern Europe', capital: 'St. Peter Port',
    population: 67052, area: 78, languages: ['English', 'French'], currency: 'Pound Sterling', currencyCode: 'GBP',
    callingCode: '+44', tld: '.gg', flagEmoji: '🇬🇬', lat: 49.45, lng: -2.54, independent: false, unMember: false
  },
  {
    code: 'JE', code3: 'JEY', name: 'Jersey', nameSv: 'Jersey', nameLocal: 'Jersey',
    region: 'Europe', subregion: 'Northern Europe', capital: 'Saint Helier',
    population: 107800, area: 116, languages: ['English', 'French'], currency: 'Pound Sterling', currencyCode: 'GBP',
    callingCode: '+44', tld: '.je', flagEmoji: '🇯🇪', lat: 49.21, lng: -2.13, independent: false, unMember: false
  },
  {
    code: 'IM', code3: 'IMN', name: 'Isle of Man', nameSv: 'Isle of Man', nameLocal: 'Isle of Man',
    region: 'Europe', subregion: 'Northern Europe', capital: 'Douglas',
    population: 85032, area: 572, languages: ['English', 'Manx'], currency: 'Pound Sterling', currencyCode: 'GBP',
    callingCode: '+44', tld: '.im', flagEmoji: '🇮🇲', lat: 54.23, lng: -4.55, independent: false, unMember: false
  },

  // ============================================================
  // EUROPE — Western Europe
  // ============================================================
  {
    code: 'DE', code3: 'DEU', name: 'Germany', nameSv: 'Tyskland', nameLocal: 'Deutschland',
    region: 'Europe', subregion: 'Western Europe', capital: 'Berlin',
    population: 83883596, area: 357114, languages: ['German'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+49', tld: '.de', flagEmoji: '🇩🇪', lat: 51.0, lng: 9.0, independent: true, unMember: true
  },
  {
    code: 'FR', code3: 'FRA', name: 'France', nameSv: 'Frankrike', nameLocal: 'France',
    region: 'Europe', subregion: 'Western Europe', capital: 'Paris',
    population: 67390000, area: 643801, languages: ['French'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+33', tld: '.fr', flagEmoji: '🇫🇷', lat: 46.0, lng: 2.0, independent: true, unMember: true
  },
  {
    code: 'NL', code3: 'NLD', name: 'Netherlands', nameSv: 'Nederländerna', nameLocal: 'Nederland',
    region: 'Europe', subregion: 'Western Europe', capital: 'Amsterdam',
    population: 17590672, area: 41543, languages: ['Dutch'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+31', tld: '.nl', flagEmoji: '🇳🇱', lat: 52.5, lng: 5.75, independent: true, unMember: true
  },
  {
    code: 'BE', code3: 'BEL', name: 'Belgium', nameSv: 'Belgien', nameLocal: 'België',
    region: 'Europe', subregion: 'Western Europe', capital: 'Brussels',
    population: 11589623, area: 30528, languages: ['Dutch', 'French', 'German'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+32', tld: '.be', flagEmoji: '🇧🇪', lat: 50.83, lng: 4.0, independent: true, unMember: true
  },
  {
    code: 'LU', code3: 'LUX', name: 'Luxembourg', nameSv: 'Luxemburg', nameLocal: 'Lëtzebuerg',
    region: 'Europe', subregion: 'Western Europe', capital: 'Luxembourg City',
    population: 645397, area: 2586, languages: ['Luxembourgish', 'French', 'German'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+352', tld: '.lu', flagEmoji: '🇱🇺', lat: 49.75, lng: 6.17, independent: true, unMember: true
  },
  {
    code: 'CH', code3: 'CHE', name: 'Switzerland', nameSv: 'Schweiz', nameLocal: 'Schweiz',
    region: 'Europe', subregion: 'Western Europe', capital: 'Bern',
    population: 8715494, area: 41284, languages: ['German', 'French', 'Italian', 'Romansh'], currency: 'Swiss Franc', currencyCode: 'CHF',
    callingCode: '+41', tld: '.ch', flagEmoji: '🇨🇭', lat: 47.0, lng: 8.0, independent: true, unMember: true
  },
  {
    code: 'AT', code3: 'AUT', name: 'Austria', nameSv: 'Österrike', nameLocal: 'Österreich',
    region: 'Europe', subregion: 'Western Europe', capital: 'Vienna',
    population: 9006398, area: 83871, languages: ['German'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+43', tld: '.at', flagEmoji: '🇦🇹', lat: 47.33, lng: 13.33, independent: true, unMember: true
  },
  {
    code: 'LI', code3: 'LIE', name: 'Liechtenstein', nameSv: 'Liechtenstein', nameLocal: 'Liechtenstein',
    region: 'Europe', subregion: 'Western Europe', capital: 'Vaduz',
    population: 38749, area: 160, languages: ['German'], currency: 'Swiss Franc', currencyCode: 'CHF',
    callingCode: '+423', tld: '.li', flagEmoji: '🇱🇮', lat: 47.27, lng: 9.53, independent: true, unMember: true
  },
  {
    code: 'MC', code3: 'MCO', name: 'Monaco', nameSv: 'Monaco', nameLocal: 'Monaco',
    region: 'Europe', subregion: 'Western Europe', capital: 'Monaco',
    population: 39511, area: 2, languages: ['French'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+377', tld: '.mc', flagEmoji: '🇲🇨', lat: 43.73, lng: 7.42, independent: true, unMember: true
  },

  // ============================================================
  // EUROPE — Southern Europe
  // ============================================================
  {
    code: 'ES', code3: 'ESP', name: 'Spain', nameSv: 'Spanien', nameLocal: 'España',
    region: 'Europe', subregion: 'Southern Europe', capital: 'Madrid',
    population: 47351567, area: 505992, languages: ['Spanish'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+34', tld: '.es', flagEmoji: '🇪🇸', lat: 40.0, lng: -4.0, independent: true, unMember: true
  },
  {
    code: 'PT', code3: 'PRT', name: 'Portugal', nameSv: 'Portugal', nameLocal: 'Portugal',
    region: 'Europe', subregion: 'Southern Europe', capital: 'Lisbon',
    population: 10196709, area: 92090, languages: ['Portuguese'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+351', tld: '.pt', flagEmoji: '🇵🇹', lat: 39.5, lng: -8.0, independent: true, unMember: true
  },
  {
    code: 'IT', code3: 'ITA', name: 'Italy', nameSv: 'Italien', nameLocal: 'Italia',
    region: 'Europe', subregion: 'Southern Europe', capital: 'Rome',
    population: 60461826, area: 301336, languages: ['Italian'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+39', tld: '.it', flagEmoji: '🇮🇹', lat: 42.83, lng: 12.83, independent: true, unMember: true
  },
  {
    code: 'GR', code3: 'GRC', name: 'Greece', nameSv: 'Grekland', nameLocal: 'Ελλάδα',
    region: 'Europe', subregion: 'Southern Europe', capital: 'Athens',
    population: 10423054, area: 131957, languages: ['Greek'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+30', tld: '.gr', flagEmoji: '🇬🇷', lat: 39.0, lng: 22.0, independent: true, unMember: true
  },
  {
    code: 'MT', code3: 'MLT', name: 'Malta', nameSv: 'Malta', nameLocal: 'Malta',
    region: 'Europe', subregion: 'Southern Europe', capital: 'Valletta',
    population: 514564, area: 316, languages: ['Maltese', 'English'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+356', tld: '.mt', flagEmoji: '🇲🇹', lat: 35.83, lng: 14.58, independent: true, unMember: true
  },
  {
    code: 'CY', code3: 'CYP', name: 'Cyprus', nameSv: 'Cypern', nameLocal: 'Κύπρος',
    region: 'Europe', subregion: 'Southern Europe', capital: 'Nicosia',
    population: 1207359, area: 9251, languages: ['Greek', 'Turkish'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+357', tld: '.cy', flagEmoji: '🇨🇾', lat: 35.0, lng: 33.0, independent: true, unMember: true
  },
  {
    code: 'SM', code3: 'SMR', name: 'San Marino', nameSv: 'San Marino', nameLocal: 'San Marino',
    region: 'Europe', subregion: 'Southern Europe', capital: 'San Marino',
    population: 33931, area: 61, languages: ['Italian'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+378', tld: '.sm', flagEmoji: '🇸🇲', lat: 43.77, lng: 12.42, independent: true, unMember: true
  },
  {
    code: 'VA', code3: 'VAT', name: 'Vatican City', nameSv: 'Vatikanstaten', nameLocal: 'Città del Vaticano',
    region: 'Europe', subregion: 'Southern Europe', capital: 'Vatican City',
    population: 825, area: 0.44, languages: ['Italian', 'Latin'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+379', tld: '.va', flagEmoji: '🇻🇦', lat: 41.9, lng: 12.45, independent: true, unMember: false
  },
  {
    code: 'AD', code3: 'AND', name: 'Andorra', nameSv: 'Andorra', nameLocal: 'Andorra',
    region: 'Europe', subregion: 'Southern Europe', capital: 'Andorra la Vella',
    population: 77265, area: 468, languages: ['Catalan'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+376', tld: '.ad', flagEmoji: '🇦🇩', lat: 42.5, lng: 1.5, independent: true, unMember: true
  },
  {
    code: 'GI', code3: 'GIB', name: 'Gibraltar', nameSv: 'Gibraltar', nameLocal: 'Gibraltar',
    region: 'Europe', subregion: 'Southern Europe', capital: 'Gibraltar',
    population: 33691, area: 6, languages: ['English'], currency: 'Gibraltar Pound', currencyCode: 'GIP',
    callingCode: '+350', tld: '.gi', flagEmoji: '🇬🇮', lat: 36.14, lng: -5.35, independent: false, unMember: false
  },
  // Balkans & Southeast Europe
  {
    code: 'HR', code3: 'HRV', name: 'Croatia', nameSv: 'Kroatien', nameLocal: 'Hrvatska',
    region: 'Europe', subregion: 'Southern Europe', capital: 'Zagreb',
    population: 4105267, area: 56594, languages: ['Croatian'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+385', tld: '.hr', flagEmoji: '🇭🇷', lat: 45.17, lng: 15.5, independent: true, unMember: true
  },
  {
    code: 'SI', code3: 'SVN', name: 'Slovenia', nameSv: 'Slovenien', nameLocal: 'Slovenija',
    region: 'Europe', subregion: 'Southern Europe', capital: 'Ljubljana',
    population: 2078938, area: 20273, languages: ['Slovenian'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+386', tld: '.si', flagEmoji: '🇸🇮', lat: 46.12, lng: 14.82, independent: true, unMember: true
  },
  {
    code: 'BA', code3: 'BIH', name: 'Bosnia and Herzegovina', nameSv: 'Bosnien och Hercegovina', nameLocal: 'Bosna i Hercegovina',
    region: 'Europe', subregion: 'Southern Europe', capital: 'Sarajevo',
    population: 3280819, area: 51197, languages: ['Bosnian', 'Croatian', 'Serbian'], currency: 'Convertible Mark', currencyCode: 'BAM',
    callingCode: '+387', tld: '.ba', flagEmoji: '🇧🇦', lat: 44.0, lng: 18.0, independent: true, unMember: true
  },
  {
    code: 'RS', code3: 'SRB', name: 'Serbia', nameSv: 'Serbien', nameLocal: 'Србија',
    region: 'Europe', subregion: 'Southern Europe', capital: 'Belgrade',
    population: 6871547, area: 77474, languages: ['Serbian'], currency: 'Serbian Dinar', currencyCode: 'RSD',
    callingCode: '+381', tld: '.rs', flagEmoji: '🇷🇸', lat: 44.0, lng: 21.0, independent: true, unMember: true
  },
  {
    code: 'ME', code3: 'MNE', name: 'Montenegro', nameSv: 'Montenegro', nameLocal: 'Crna Gora',
    region: 'Europe', subregion: 'Southern Europe', capital: 'Podgorica',
    population: 628066, area: 13812, languages: ['Montenegrin'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+382', tld: '.me', flagEmoji: '🇲🇪', lat: 42.5, lng: 19.3, independent: true, unMember: true
  },
  {
    code: 'MK', code3: 'MKD', name: 'North Macedonia', nameSv: 'Nordmakedonien', nameLocal: 'Северна Македонија',
    region: 'Europe', subregion: 'Southern Europe', capital: 'Skopje',
    population: 2083374, area: 25713, languages: ['Macedonian'], currency: 'Macedonian Denar', currencyCode: 'MKD',
    callingCode: '+389', tld: '.mk', flagEmoji: '🇲🇰', lat: 41.5, lng: 22.0, independent: true, unMember: true
  },
  {
    code: 'AL', code3: 'ALB', name: 'Albania', nameSv: 'Albanien', nameLocal: 'Shqipëria',
    region: 'Europe', subregion: 'Southern Europe', capital: 'Tirana',
    population: 2877797, area: 28748, languages: ['Albanian'], currency: 'Albanian Lek', currencyCode: 'ALL',
    callingCode: '+355', tld: '.al', flagEmoji: '🇦🇱', lat: 41.0, lng: 20.0, independent: true, unMember: true
  },
  {
    code: 'XK', code3: 'XKX', name: 'Kosovo', nameSv: 'Kosovo', nameLocal: 'Kosova',
    region: 'Europe', subregion: 'Southern Europe', capital: 'Pristina',
    population: 1883018, area: 10887, languages: ['Albanian', 'Serbian'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+383', tld: '.xk', flagEmoji: '🇽🇰', lat: 42.67, lng: 21.17, independent: true, unMember: false
  },

  // ============================================================
  // EUROPE — Eastern Europe
  // ============================================================
  {
    code: 'PL', code3: 'POL', name: 'Poland', nameSv: 'Polen', nameLocal: 'Polska',
    region: 'Europe', subregion: 'Eastern Europe', capital: 'Warsaw',
    population: 37846611, area: 312696, languages: ['Polish'], currency: 'Polish Zloty', currencyCode: 'PLN',
    callingCode: '+48', tld: '.pl', flagEmoji: '🇵🇱', lat: 52.0, lng: 20.0, independent: true, unMember: true
  },
  {
    code: 'CZ', code3: 'CZE', name: 'Czech Republic', nameSv: 'Tjeckien', nameLocal: 'Česko',
    region: 'Europe', subregion: 'Eastern Europe', capital: 'Prague',
    population: 10708981, area: 78865, languages: ['Czech'], currency: 'Czech Koruna', currencyCode: 'CZK',
    callingCode: '+420', tld: '.cz', flagEmoji: '🇨🇿', lat: 49.75, lng: 15.5, independent: true, unMember: true
  },
  {
    code: 'SK', code3: 'SVK', name: 'Slovakia', nameSv: 'Slovakien', nameLocal: 'Slovensko',
    region: 'Europe', subregion: 'Eastern Europe', capital: 'Bratislava',
    population: 5459642, area: 49035, languages: ['Slovak'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+421', tld: '.sk', flagEmoji: '🇸🇰', lat: 48.67, lng: 19.5, independent: true, unMember: true
  },
  {
    code: 'HU', code3: 'HUN', name: 'Hungary', nameSv: 'Ungern', nameLocal: 'Magyarország',
    region: 'Europe', subregion: 'Eastern Europe', capital: 'Budapest',
    population: 9660351, area: 93028, languages: ['Hungarian'], currency: 'Hungarian Forint', currencyCode: 'HUF',
    callingCode: '+36', tld: '.hu', flagEmoji: '🇭🇺', lat: 47.0, lng: 20.0, independent: true, unMember: true
  },
  {
    code: 'RO', code3: 'ROU', name: 'Romania', nameSv: 'Rumänien', nameLocal: 'România',
    region: 'Europe', subregion: 'Eastern Europe', capital: 'Bucharest',
    population: 19237691, area: 238391, languages: ['Romanian'], currency: 'Romanian Leu', currencyCode: 'RON',
    callingCode: '+40', tld: '.ro', flagEmoji: '🇷🇴', lat: 46.0, lng: 25.0, independent: true, unMember: true
  },
  {
    code: 'BG', code3: 'BGR', name: 'Bulgaria', nameSv: 'Bulgarien', nameLocal: 'България',
    region: 'Europe', subregion: 'Eastern Europe', capital: 'Sofia',
    population: 6927288, area: 110879, languages: ['Bulgarian'], currency: 'Bulgarian Lev', currencyCode: 'BGN',
    callingCode: '+359', tld: '.bg', flagEmoji: '🇧🇬', lat: 43.0, lng: 25.0, independent: true, unMember: true
  },
  {
    code: 'UA', code3: 'UKR', name: 'Ukraine', nameSv: 'Ukraina', nameLocal: 'Україна',
    region: 'Europe', subregion: 'Eastern Europe', capital: 'Kyiv',
    population: 43733762, area: 603500, languages: ['Ukrainian'], currency: 'Ukrainian Hryvnia', currencyCode: 'UAH',
    callingCode: '+380', tld: '.ua', flagEmoji: '🇺🇦', lat: 49.0, lng: 32.0, independent: true, unMember: true
  },
  {
    code: 'MD', code3: 'MDA', name: 'Moldova', nameSv: 'Moldavien', nameLocal: 'Moldova',
    region: 'Europe', subregion: 'Eastern Europe', capital: 'Chișinău',
    population: 2657637, area: 33846, languages: ['Romanian'], currency: 'Moldovan Leu', currencyCode: 'MDL',
    callingCode: '+373', tld: '.md', flagEmoji: '🇲🇩', lat: 47.0, lng: 29.0, independent: true, unMember: true
  },
  {
    code: 'BY', code3: 'BLR', name: 'Belarus', nameSv: 'Belarus', nameLocal: 'Беларусь',
    region: 'Europe', subregion: 'Eastern Europe', capital: 'Minsk',
    population: 9449323, area: 207600, languages: ['Belarusian', 'Russian'], currency: 'Belarusian Ruble', currencyCode: 'BYN',
    callingCode: '+375', tld: '.by', flagEmoji: '🇧🇾', lat: 53.0, lng: 28.0, independent: true, unMember: true
  },
  {
    code: 'RU', code3: 'RUS', name: 'Russia', nameSv: 'Ryssland', nameLocal: 'Россия',
    region: 'Europe', subregion: 'Eastern Europe', capital: 'Moscow',
    population: 145912025, area: 17098242, languages: ['Russian'], currency: 'Russian Ruble', currencyCode: 'RUB',
    callingCode: '+7', tld: '.ru', flagEmoji: '🇷🇺', lat: 60.0, lng: 100.0, independent: true, unMember: true
  },

  // ============================================================
  // ASIA — Central Asia
  // ============================================================
  {
    code: 'KZ', code3: 'KAZ', name: 'Kazakhstan', nameSv: 'Kazakstan', nameLocal: 'Қазақстан',
    region: 'Asia', subregion: 'Central Asia', capital: 'Astana',
    population: 19000000, area: 2724900, languages: ['Kazakh', 'Russian'], currency: 'Kazakhstani Tenge', currencyCode: 'KZT',
    callingCode: '+7', tld: '.kz', flagEmoji: '🇰🇿', lat: 48.0, lng: 68.0, independent: true, unMember: true
  },
  {
    code: 'UZ', code3: 'UZB', name: 'Uzbekistan', nameSv: 'Uzbekistan', nameLocal: 'Oʻzbekiston',
    region: 'Asia', subregion: 'Central Asia', capital: 'Tashkent',
    population: 34232050, area: 447400, languages: ['Uzbek'], currency: 'Uzbekistani Som', currencyCode: 'UZS',
    callingCode: '+998', tld: '.uz', flagEmoji: '🇺🇿', lat: 41.0, lng: 64.0, independent: true, unMember: true
  },
  {
    code: 'TM', code3: 'TKM', name: 'Turkmenistan', nameSv: 'Turkmenistan', nameLocal: 'Türkmenistan',
    region: 'Asia', subregion: 'Central Asia', capital: 'Ashgabat',
    population: 6031200, area: 488100, languages: ['Turkmen'], currency: 'Turkmenistani Manat', currencyCode: 'TMT',
    callingCode: '+993', tld: '.tm', flagEmoji: '🇹🇲', lat: 40.0, lng: 60.0, independent: true, unMember: true
  },
  {
    code: 'KG', code3: 'KGZ', name: 'Kyrgyzstan', nameSv: 'Kirgizistan', nameLocal: 'Кыргызстан',
    region: 'Asia', subregion: 'Central Asia', capital: 'Bishkek',
    population: 6524195, area: 199951, languages: ['Kyrgyz', 'Russian'], currency: 'Kyrgyzstani Som', currencyCode: 'KGS',
    callingCode: '+996', tld: '.kg', flagEmoji: '🇰🇬', lat: 41.0, lng: 75.0, independent: true, unMember: true
  },
  {
    code: 'TJ', code3: 'TJK', name: 'Tajikistan', nameSv: 'Tadzjikistan', nameLocal: 'Тоҷикистон',
    region: 'Asia', subregion: 'Central Asia', capital: 'Dushanbe',
    population: 9537645, area: 143100, languages: ['Tajik'], currency: 'Tajikistani Somoni', currencyCode: 'TJS',
    callingCode: '+992', tld: '.tj', flagEmoji: '🇹🇯', lat: 39.0, lng: 71.0, independent: true, unMember: true
  },

  // ============================================================
  // ASIA — Western Asia (Middle East)
  // ============================================================
  {
    code: 'TR', code3: 'TUR', name: 'Turkey', nameSv: 'Turkiet', nameLocal: 'Türkiye',
    region: 'Asia', subregion: 'Western Asia', capital: 'Ankara',
    population: 84339067, area: 783562, languages: ['Turkish'], currency: 'Turkish Lira', currencyCode: 'TRY',
    callingCode: '+90', tld: '.tr', flagEmoji: '🇹🇷', lat: 39.0, lng: 35.0, independent: true, unMember: true
  },
  {
    code: 'GE', code3: 'GEO', name: 'Georgia', nameSv: 'Georgien', nameLocal: 'საქართველო',
    region: 'Asia', subregion: 'Western Asia', capital: 'Tbilisi',
    population: 3989167, area: 69700, languages: ['Georgian'], currency: 'Georgian Lari', currencyCode: 'GEL',
    callingCode: '+995', tld: '.ge', flagEmoji: '🇬🇪', lat: 42.0, lng: 43.5, independent: true, unMember: true
  },
  {
    code: 'AM', code3: 'ARM', name: 'Armenia', nameSv: 'Armenien', nameLocal: 'Հայաստան',
    region: 'Asia', subregion: 'Western Asia', capital: 'Yerevan',
    population: 2963243, area: 29743, languages: ['Armenian'], currency: 'Armenian Dram', currencyCode: 'AMD',
    callingCode: '+374', tld: '.am', flagEmoji: '🇦🇲', lat: 40.0, lng: 45.0, independent: true, unMember: true
  },
  {
    code: 'AZ', code3: 'AZE', name: 'Azerbaijan', nameSv: 'Azerbajdzjan', nameLocal: 'Azərbaycan',
    region: 'Asia', subregion: 'Western Asia', capital: 'Baku',
    population: 10139177, area: 86600, languages: ['Azerbaijani'], currency: 'Azerbaijani Manat', currencyCode: 'AZN',
    callingCode: '+994', tld: '.az', flagEmoji: '🇦🇿', lat: 40.5, lng: 47.5, independent: true, unMember: true
  },
  {
    code: 'IQ', code3: 'IRQ', name: 'Iraq', nameSv: 'Irak', nameLocal: 'العراق',
    region: 'Asia', subregion: 'Western Asia', capital: 'Baghdad',
    population: 40222493, area: 438317, languages: ['Arabic', 'Kurdish'], currency: 'Iraqi Dinar', currencyCode: 'IQD',
    callingCode: '+964', tld: '.iq', flagEmoji: '🇮🇶', lat: 33.0, lng: 44.0, independent: true, unMember: true
  },
  {
    code: 'SY', code3: 'SYR', name: 'Syria', nameSv: 'Syrien', nameLocal: 'سوريا',
    region: 'Asia', subregion: 'Western Asia', capital: 'Damascus',
    population: 17500658, area: 185180, languages: ['Arabic'], currency: 'Syrian Pound', currencyCode: 'SYP',
    callingCode: '+963', tld: '.sy', flagEmoji: '🇸🇾', lat: 35.0, lng: 38.0, independent: true, unMember: true
  },
  {
    code: 'LB', code3: 'LBN', name: 'Lebanon', nameSv: 'Libanon', nameLocal: 'لبنان',
    region: 'Asia', subregion: 'Western Asia', capital: 'Beirut',
    population: 6825445, area: 10452, languages: ['Arabic'], currency: 'Lebanese Pound', currencyCode: 'LBP',
    callingCode: '+961', tld: '.lb', flagEmoji: '🇱🇧', lat: 33.83, lng: 35.83, independent: true, unMember: true
  },
  {
    code: 'JO', code3: 'JOR', name: 'Jordan', nameSv: 'Jordanien', nameLocal: 'الأردن',
    region: 'Asia', subregion: 'Western Asia', capital: 'Amman',
    population: 10203134, area: 89342, languages: ['Arabic'], currency: 'Jordanian Dinar', currencyCode: 'JOD',
    callingCode: '+962', tld: '.jo', flagEmoji: '🇯🇴', lat: 31.0, lng: 36.0, independent: true, unMember: true
  },
  {
    code: 'IL', code3: 'ISR', name: 'Israel', nameSv: 'Israel', nameLocal: 'ישראל',
    region: 'Asia', subregion: 'Western Asia', capital: 'Jerusalem',
    population: 8655535, area: 20770, languages: ['Hebrew', 'Arabic'], currency: 'Israeli New Shekel', currencyCode: 'ILS',
    callingCode: '+972', tld: '.il', flagEmoji: '🇮🇱', lat: 31.5, lng: 34.75, independent: true, unMember: true
  },
  {
    code: 'PS', code3: 'PSE', name: 'Palestine', nameSv: 'Palestina', nameLocal: 'فلسطين',
    region: 'Asia', subregion: 'Western Asia', capital: 'Ramallah',
    population: 5101414, area: 6020, languages: ['Arabic'], currency: 'Israeli New Shekel', currencyCode: 'ILS',
    callingCode: '+970', tld: '.ps', flagEmoji: '🇵🇸', lat: 31.9, lng: 35.2, independent: false, unMember: false
  },
  {
    code: 'SA', code3: 'SAU', name: 'Saudi Arabia', nameSv: 'Saudiarabien', nameLocal: 'المملكة العربية السعودية',
    region: 'Asia', subregion: 'Western Asia', capital: 'Riyadh',
    population: 34813871, area: 2149690, languages: ['Arabic'], currency: 'Saudi Riyal', currencyCode: 'SAR',
    callingCode: '+966', tld: '.sa', flagEmoji: '🇸🇦', lat: 25.0, lng: 45.0, independent: true, unMember: true
  },
  {
    code: 'YE', code3: 'YEM', name: 'Yemen', nameSv: 'Jemen', nameLocal: 'اليمن',
    region: 'Asia', subregion: 'Western Asia', capital: "Sana'a",
    population: 29825964, area: 527968, languages: ['Arabic'], currency: 'Yemeni Rial', currencyCode: 'YER',
    callingCode: '+967', tld: '.ye', flagEmoji: '🇾🇪', lat: 15.0, lng: 48.0, independent: true, unMember: true
  },
  {
    code: 'OM', code3: 'OMN', name: 'Oman', nameSv: 'Oman', nameLocal: 'عُمان',
    region: 'Asia', subregion: 'Western Asia', capital: 'Muscat',
    population: 5106626, area: 309500, languages: ['Arabic'], currency: 'Omani Rial', currencyCode: 'OMR',
    callingCode: '+968', tld: '.om', flagEmoji: '🇴🇲', lat: 21.0, lng: 57.0, independent: true, unMember: true
  },
  {
    code: 'AE', code3: 'ARE', name: 'United Arab Emirates', nameSv: 'Förenade Arabemiraten', nameLocal: 'الإمارات العربية المتحدة',
    region: 'Asia', subregion: 'Western Asia', capital: 'Abu Dhabi',
    population: 9890402, area: 83600, languages: ['Arabic'], currency: 'UAE Dirham', currencyCode: 'AED',
    callingCode: '+971', tld: '.ae', flagEmoji: '🇦🇪', lat: 24.0, lng: 54.0, independent: true, unMember: true
  },
  {
    code: 'QA', code3: 'QAT', name: 'Qatar', nameSv: 'Qatar', nameLocal: 'قطر',
    region: 'Asia', subregion: 'Western Asia', capital: 'Doha',
    population: 2881053, area: 11586, languages: ['Arabic'], currency: 'Qatari Riyal', currencyCode: 'QAR',
    callingCode: '+974', tld: '.qa', flagEmoji: '🇶🇦', lat: 25.5, lng: 51.25, independent: true, unMember: true
  },
  {
    code: 'BH', code3: 'BHR', name: 'Bahrain', nameSv: 'Bahrain', nameLocal: 'البحرين',
    region: 'Asia', subregion: 'Western Asia', capital: 'Manama',
    population: 1701575, area: 765, languages: ['Arabic'], currency: 'Bahraini Dinar', currencyCode: 'BHD',
    callingCode: '+973', tld: '.bh', flagEmoji: '🇧🇭', lat: 26.0, lng: 50.55, independent: true, unMember: true
  },
  {
    code: 'KW', code3: 'KWT', name: 'Kuwait', nameSv: 'Kuwait', nameLocal: 'الكويت',
    region: 'Asia', subregion: 'Western Asia', capital: 'Kuwait City',
    population: 4270571, area: 17818, languages: ['Arabic'], currency: 'Kuwaiti Dinar', currencyCode: 'KWD',
    callingCode: '+965', tld: '.kw', flagEmoji: '🇰🇼', lat: 29.5, lng: 45.75, independent: true, unMember: true
  },
  {
    code: 'IR', code3: 'IRN', name: 'Iran', nameSv: 'Iran', nameLocal: 'ایران',
    region: 'Asia', subregion: 'Western Asia', capital: 'Tehran',
    population: 83992949, area: 1648195, languages: ['Persian'], currency: 'Iranian Rial', currencyCode: 'IRR',
    callingCode: '+98', tld: '.ir', flagEmoji: '🇮🇷', lat: 32.0, lng: 53.0, independent: true, unMember: true
  },

  // ============================================================
  // ASIA — South Asia
  // ============================================================
  {
    code: 'IN', code3: 'IND', name: 'India', nameSv: 'Indien', nameLocal: 'भारत',
    region: 'Asia', subregion: 'South Asia', capital: 'New Delhi',
    population: 1380004385, area: 3287263, languages: ['Hindi', 'English'], currency: 'Indian Rupee', currencyCode: 'INR',
    callingCode: '+91', tld: '.in', flagEmoji: '🇮🇳', lat: 20.0, lng: 77.0, independent: true, unMember: true
  },
  {
    code: 'PK', code3: 'PAK', name: 'Pakistan', nameSv: 'Pakistan', nameLocal: 'پاکستان',
    region: 'Asia', subregion: 'South Asia', capital: 'Islamabad',
    population: 220892340, area: 881913, languages: ['Urdu', 'English'], currency: 'Pakistani Rupee', currencyCode: 'PKR',
    callingCode: '+92', tld: '.pk', flagEmoji: '🇵🇰', lat: 30.0, lng: 70.0, independent: true, unMember: true
  },
  {
    code: 'BD', code3: 'BGD', name: 'Bangladesh', nameSv: 'Bangladesh', nameLocal: 'বাংলাদেশ',
    region: 'Asia', subregion: 'South Asia', capital: 'Dhaka',
    population: 164689383, area: 147570, languages: ['Bengali'], currency: 'Bangladeshi Taka', currencyCode: 'BDT',
    callingCode: '+880', tld: '.bd', flagEmoji: '🇧🇩', lat: 24.0, lng: 90.0, independent: true, unMember: true
  },
  {
    code: 'LK', code3: 'LKA', name: 'Sri Lanka', nameSv: 'Sri Lanka', nameLocal: 'ශ්‍රී ලංකාව',
    region: 'Asia', subregion: 'South Asia', capital: 'Sri Jayawardenepura Kotte',
    population: 21413249, area: 65610, languages: ['Sinhala', 'Tamil'], currency: 'Sri Lankan Rupee', currencyCode: 'LKR',
    callingCode: '+94', tld: '.lk', flagEmoji: '🇱🇰', lat: 7.0, lng: 81.0, independent: true, unMember: true
  },
  {
    code: 'NP', code3: 'NPL', name: 'Nepal', nameSv: 'Nepal', nameLocal: 'नेपाल',
    region: 'Asia', subregion: 'South Asia', capital: 'Kathmandu',
    population: 29136808, area: 147181, languages: ['Nepali'], currency: 'Nepalese Rupee', currencyCode: 'NPR',
    callingCode: '+977', tld: '.np', flagEmoji: '🇳🇵', lat: 28.0, lng: 84.0, independent: true, unMember: true
  },
  {
    code: 'BT', code3: 'BTN', name: 'Bhutan', nameSv: 'Bhutan', nameLocal: 'འབྲུག་ཡུལ',
    region: 'Asia', subregion: 'South Asia', capital: 'Thimphu',
    population: 771608, area: 38394, languages: ['Dzongkha'], currency: 'Bhutanese Ngultrum', currencyCode: 'BTN',
    callingCode: '+975', tld: '.bt', flagEmoji: '🇧🇹', lat: 27.5, lng: 90.5, independent: true, unMember: true
  },
  {
    code: 'MV', code3: 'MDV', name: 'Maldives', nameSv: 'Maldiverna', nameLocal: 'ދިވެހިރާއްޖެ',
    region: 'Asia', subregion: 'South Asia', capital: 'Malé',
    population: 540544, area: 300, languages: ['Dhivehi'], currency: 'Maldivian Rufiyaa', currencyCode: 'MVR',
    callingCode: '+960', tld: '.mv', flagEmoji: '🇲🇻', lat: 3.25, lng: 73.0, independent: true, unMember: true
  },
  {
    code: 'AF', code3: 'AFG', name: 'Afghanistan', nameSv: 'Afghanistan', nameLocal: 'افغانستان',
    region: 'Asia', subregion: 'South Asia', capital: 'Kabul',
    population: 38928346, area: 652230, languages: ['Pashto', 'Dari'], currency: 'Afghan Afghani', currencyCode: 'AFN',
    callingCode: '+93', tld: '.af', flagEmoji: '🇦🇫', lat: 33.0, lng: 65.0, independent: true, unMember: true
  },

  // ============================================================
  // ASIA — Southeast Asia
  // ============================================================
  {
    code: 'TH', code3: 'THA', name: 'Thailand', nameSv: 'Thailand', nameLocal: 'ประเทศไทย',
    region: 'Asia', subregion: 'Southeast Asia', capital: 'Bangkok',
    population: 69799978, area: 513120, languages: ['Thai'], currency: 'Thai Baht', currencyCode: 'THB',
    callingCode: '+66', tld: '.th', flagEmoji: '🇹🇭', lat: 15.0, lng: 100.0, independent: true, unMember: true
  },
  {
    code: 'VN', code3: 'VNM', name: 'Vietnam', nameSv: 'Vietnam', nameLocal: 'Việt Nam',
    region: 'Asia', subregion: 'Southeast Asia', capital: 'Hanoi',
    population: 97338579, area: 331212, languages: ['Vietnamese'], currency: 'Vietnamese Dong', currencyCode: 'VND',
    callingCode: '+84', tld: '.vn', flagEmoji: '🇻🇳', lat: 16.0, lng: 108.0, independent: true, unMember: true
  },
  {
    code: 'MM', code3: 'MMR', name: 'Myanmar', nameSv: 'Myanmar', nameLocal: 'မြန်မာ',
    region: 'Asia', subregion: 'Southeast Asia', capital: 'Naypyidaw',
    population: 54409800, area: 676578, languages: ['Burmese'], currency: 'Myanmar Kyat', currencyCode: 'MMK',
    callingCode: '+95', tld: '.mm', flagEmoji: '🇲🇲', lat: 22.0, lng: 98.0, independent: true, unMember: true
  },
  {
    code: 'KH', code3: 'KHM', name: 'Cambodia', nameSv: 'Kambodja', nameLocal: 'កម្ពុជា',
    region: 'Asia', subregion: 'Southeast Asia', capital: 'Phnom Penh',
    population: 16718965, area: 181035, languages: ['Khmer'], currency: 'Cambodian Riel', currencyCode: 'KHR',
    callingCode: '+855', tld: '.kh', flagEmoji: '🇰🇭', lat: 13.0, lng: 105.0, independent: true, unMember: true
  },
  {
    code: 'LA', code3: 'LAO', name: 'Laos', nameSv: 'Laos', nameLocal: 'ລາວ',
    region: 'Asia', subregion: 'Southeast Asia', capital: 'Vientiane',
    population: 7275560, area: 236800, languages: ['Lao'], currency: 'Lao Kip', currencyCode: 'LAK',
    callingCode: '+856', tld: '.la', flagEmoji: '🇱🇦', lat: 18.0, lng: 105.0, independent: true, unMember: true
  },
  {
    code: 'MY', code3: 'MYS', name: 'Malaysia', nameSv: 'Malaysia', nameLocal: 'Malaysia',
    region: 'Asia', subregion: 'Southeast Asia', capital: 'Kuala Lumpur',
    population: 32365999, area: 330803, languages: ['Malay'], currency: 'Malaysian Ringgit', currencyCode: 'MYR',
    callingCode: '+60', tld: '.my', flagEmoji: '🇲🇾', lat: 2.5, lng: 112.5, independent: true, unMember: true
  },
  {
    code: 'SG', code3: 'SGP', name: 'Singapore', nameSv: 'Singapore', nameLocal: 'Singapore',
    region: 'Asia', subregion: 'Southeast Asia', capital: 'Singapore',
    population: 5850342, area: 728, languages: ['English', 'Malay', 'Chinese', 'Tamil'], currency: 'Singapore Dollar', currencyCode: 'SGD',
    callingCode: '+65', tld: '.sg', flagEmoji: '🇸🇬', lat: 1.37, lng: 103.8, independent: true, unMember: true
  },
  {
    code: 'ID', code3: 'IDN', name: 'Indonesia', nameSv: 'Indonesien', nameLocal: 'Indonesia',
    region: 'Asia', subregion: 'Southeast Asia', capital: 'Jakarta',
    population: 273523615, area: 1904569, languages: ['Indonesian'], currency: 'Indonesian Rupiah', currencyCode: 'IDR',
    callingCode: '+62', tld: '.id', flagEmoji: '🇮🇩', lat: -5.0, lng: 120.0, independent: true, unMember: true
  },
  {
    code: 'PH', code3: 'PHL', name: 'Philippines', nameSv: 'Filippinerna', nameLocal: 'Pilipinas',
    region: 'Asia', subregion: 'Southeast Asia', capital: 'Manila',
    population: 109581078, area: 342353, languages: ['Filipino', 'English'], currency: 'Philippine Peso', currencyCode: 'PHP',
    callingCode: '+63', tld: '.ph', flagEmoji: '🇵🇭', lat: 13.0, lng: 122.0, independent: true, unMember: true
  },
  {
    code: 'BN', code3: 'BRN', name: 'Brunei', nameSv: 'Brunei', nameLocal: 'Brunei Darussalam',
    region: 'Asia', subregion: 'Southeast Asia', capital: 'Bandar Seri Begawan',
    population: 437479, area: 5765, languages: ['Malay'], currency: 'Brunei Dollar', currencyCode: 'BND',
    callingCode: '+673', tld: '.bn', flagEmoji: '🇧🇳', lat: 4.5, lng: 114.67, independent: true, unMember: true
  },
  {
    code: 'TL', code3: 'TLS', name: 'Timor-Leste', nameSv: 'Östtimor', nameLocal: 'Timor-Leste',
    region: 'Asia', subregion: 'Southeast Asia', capital: 'Dili',
    population: 1318445, area: 14874, languages: ['Portuguese', 'Tetum'], currency: 'United States Dollar', currencyCode: 'USD',
    callingCode: '+670', tld: '.tl', flagEmoji: '🇹🇱', lat: -8.55, lng: 125.73, independent: true, unMember: true
  },

  // ============================================================
  // ASIA — East Asia
  // ============================================================
  {
    code: 'CN', code3: 'CHN', name: 'China', nameSv: 'Kina', nameLocal: '中国',
    region: 'Asia', subregion: 'East Asia', capital: 'Beijing',
    population: 1439323776, area: 9596961, languages: ['Chinese'], currency: 'Chinese Yuan', currencyCode: 'CNY',
    callingCode: '+86', tld: '.cn', flagEmoji: '🇨🇳', lat: 35.0, lng: 105.0, independent: true, unMember: true
  },
  {
    code: 'JP', code3: 'JPN', name: 'Japan', nameSv: 'Japan', nameLocal: '日本',
    region: 'Asia', subregion: 'East Asia', capital: 'Tokyo',
    population: 126476461, area: 377975, languages: ['Japanese'], currency: 'Japanese Yen', currencyCode: 'JPY',
    callingCode: '+81', tld: '.jp', flagEmoji: '🇯🇵', lat: 36.0, lng: 138.0, independent: true, unMember: true
  },
  {
    code: 'KR', code3: 'KOR', name: 'South Korea', nameSv: 'Sydkorea', nameLocal: '대한민국',
    region: 'Asia', subregion: 'East Asia', capital: 'Seoul',
    population: 51269185, area: 100210, languages: ['Korean'], currency: 'South Korean Won', currencyCode: 'KRW',
    callingCode: '+82', tld: '.kr', flagEmoji: '🇰🇷', lat: 37.0, lng: 127.5, independent: true, unMember: true
  },
  {
    code: 'KP', code3: 'PRK', name: 'North Korea', nameSv: 'Nordkorea', nameLocal: '조선민주주의인민공화국',
    region: 'Asia', subregion: 'East Asia', capital: 'Pyongyang',
    population: 25778816, area: 120538, languages: ['Korean'], currency: 'North Korean Won', currencyCode: 'KPW',
    callingCode: '+850', tld: '.kp', flagEmoji: '🇰🇵', lat: 40.0, lng: 127.0, independent: true, unMember: true
  },
  {
    code: 'MN', code3: 'MNG', name: 'Mongolia', nameSv: 'Mongoliet', nameLocal: 'Монгол Улс',
    region: 'Asia', subregion: 'East Asia', capital: 'Ulaanbaatar',
    population: 3278290, area: 1564110, languages: ['Mongolian'], currency: 'Mongolian Tugrik', currencyCode: 'MNT',
    callingCode: '+976', tld: '.mn', flagEmoji: '🇲🇳', lat: 46.0, lng: 105.0, independent: true, unMember: true
  },
  {
    code: 'TW', code3: 'TWN', name: 'Taiwan', nameSv: 'Taiwan', nameLocal: '臺灣',
    region: 'Asia', subregion: 'East Asia', capital: 'Taipei',
    population: 23816775, area: 36193, languages: ['Chinese'], currency: 'New Taiwan Dollar', currencyCode: 'TWD',
    callingCode: '+886', tld: '.tw', flagEmoji: '🇹🇼', lat: 23.5, lng: 121.0, independent: false, unMember: false
  },
  {
    code: 'HK', code3: 'HKG', name: 'Hong Kong', nameSv: 'Hongkong', nameLocal: '香港',
    region: 'Asia', subregion: 'East Asia', capital: 'Hong Kong',
    population: 7496981, area: 1104, languages: ['Chinese', 'English'], currency: 'Hong Kong Dollar', currencyCode: 'HKD',
    callingCode: '+852', tld: '.hk', flagEmoji: '🇭🇰', lat: 22.25, lng: 114.17, independent: false, unMember: false
  },
  {
    code: 'MO', code3: 'MAC', name: 'Macao', nameSv: 'Macao', nameLocal: '澳門',
    region: 'Asia', subregion: 'East Asia', capital: 'Macao',
    population: 649335, area: 33, languages: ['Chinese', 'Portuguese'], currency: 'Macanese Pataca', currencyCode: 'MOP',
    callingCode: '+853', tld: '.mo', flagEmoji: '🇲🇴', lat: 22.17, lng: 113.55, independent: false, unMember: false
  },

  // ============================================================
  // AFRICA — Northern Africa
  // ============================================================
  {
    code: 'EG', code3: 'EGY', name: 'Egypt', nameSv: 'Egypten', nameLocal: 'مصر',
    region: 'Africa', subregion: 'Northern Africa', capital: 'Cairo',
    population: 102334404, area: 1002450, languages: ['Arabic'], currency: 'Egyptian Pound', currencyCode: 'EGP',
    callingCode: '+20', tld: '.eg', flagEmoji: '🇪🇬', lat: 27.0, lng: 30.0, independent: true, unMember: true
  },
  {
    code: 'LY', code3: 'LBY', name: 'Libya', nameSv: 'Libyen', nameLocal: 'ليبيا',
    region: 'Africa', subregion: 'Northern Africa', capital: 'Tripoli',
    population: 6871292, area: 1759540, languages: ['Arabic'], currency: 'Libyan Dinar', currencyCode: 'LYD',
    callingCode: '+218', tld: '.ly', flagEmoji: '🇱🇾', lat: 25.0, lng: 17.0, independent: true, unMember: true
  },
  {
    code: 'TN', code3: 'TUN', name: 'Tunisia', nameSv: 'Tunisien', nameLocal: 'تونس',
    region: 'Africa', subregion: 'Northern Africa', capital: 'Tunis',
    population: 11818619, area: 163610, languages: ['Arabic'], currency: 'Tunisian Dinar', currencyCode: 'TND',
    callingCode: '+216', tld: '.tn', flagEmoji: '🇹🇳', lat: 34.0, lng: 9.0, independent: true, unMember: true
  },
  {
    code: 'DZ', code3: 'DZA', name: 'Algeria', nameSv: 'Algeriet', nameLocal: 'الجزائر',
    region: 'Africa', subregion: 'Northern Africa', capital: 'Algiers',
    population: 43851044, area: 2381741, languages: ['Arabic'], currency: 'Algerian Dinar', currencyCode: 'DZD',
    callingCode: '+213', tld: '.dz', flagEmoji: '🇩🇿', lat: 28.0, lng: 3.0, independent: true, unMember: true
  },
  {
    code: 'MA', code3: 'MAR', name: 'Morocco', nameSv: 'Marocko', nameLocal: 'المغرب',
    region: 'Africa', subregion: 'Northern Africa', capital: 'Rabat',
    population: 36910560, area: 446550, languages: ['Arabic', 'Berber'], currency: 'Moroccan Dirham', currencyCode: 'MAD',
    callingCode: '+212', tld: '.ma', flagEmoji: '🇲🇦', lat: 32.0, lng: -5.0, independent: true, unMember: true
  },
  {
    code: 'SD', code3: 'SDN', name: 'Sudan', nameSv: 'Sudan', nameLocal: 'السودان',
    region: 'Africa', subregion: 'Northern Africa', capital: 'Khartoum',
    population: 43849260, area: 1886068, languages: ['Arabic', 'English'], currency: 'Sudanese Pound', currencyCode: 'SDG',
    callingCode: '+249', tld: '.sd', flagEmoji: '🇸🇩', lat: 15.0, lng: 30.0, independent: true, unMember: true
  },
  {
    code: 'MR', code3: 'MRT', name: 'Mauritania', nameSv: 'Mauretanien', nameLocal: 'موريتانيا',
    region: 'Africa', subregion: 'Northern Africa', capital: 'Nouakchott',
    population: 4649658, area: 1030700, languages: ['Arabic'], currency: 'Mauritanian Ouguiya', currencyCode: 'MRU',
    callingCode: '+222', tld: '.mr', flagEmoji: '🇲🇷', lat: 20.0, lng: -12.0, independent: true, unMember: true
  },
  {
    code: 'EH', code3: 'ESH', name: 'Western Sahara', nameSv: 'Västsahara', nameLocal: 'الصحراء الغربية',
    region: 'Africa', subregion: 'Northern Africa', capital: 'El Aaiún',
    population: 597339, area: 266000, languages: ['Arabic'], currency: 'Moroccan Dirham', currencyCode: 'MAD',
    callingCode: '+212', tld: '.eh', flagEmoji: '🇪🇭', lat: 24.5, lng: -13.0, independent: false, unMember: false
  },

  // ============================================================
  // AFRICA — Western Africa
  // ============================================================
  {
    code: 'NG', code3: 'NGA', name: 'Nigeria', nameSv: 'Nigeria', nameLocal: 'Nigeria',
    region: 'Africa', subregion: 'Western Africa', capital: 'Abuja',
    population: 206139589, area: 923768, languages: ['English'], currency: 'Nigerian Naira', currencyCode: 'NGN',
    callingCode: '+234', tld: '.ng', flagEmoji: '🇳🇬', lat: 10.0, lng: 8.0, independent: true, unMember: true
  },
  {
    code: 'GH', code3: 'GHA', name: 'Ghana', nameSv: 'Ghana', nameLocal: 'Ghana',
    region: 'Africa', subregion: 'Western Africa', capital: 'Accra',
    population: 31072940, area: 238533, languages: ['English'], currency: 'Ghanaian Cedi', currencyCode: 'GHS',
    callingCode: '+233', tld: '.gh', flagEmoji: '🇬🇭', lat: 8.0, lng: -2.0, independent: true, unMember: true
  },
  {
    code: 'CI', code3: 'CIV', name: "Côte d'Ivoire", nameSv: 'Elfenbenskusten', nameLocal: "Côte d'Ivoire",
    region: 'Africa', subregion: 'Western Africa', capital: 'Yamoussoukro',
    population: 26378274, area: 322463, languages: ['French'], currency: 'West African CFA Franc', currencyCode: 'XOF',
    callingCode: '+225', tld: '.ci', flagEmoji: '🇨🇮', lat: 8.0, lng: -5.0, independent: true, unMember: true
  },
  {
    code: 'SN', code3: 'SEN', name: 'Senegal', nameSv: 'Senegal', nameLocal: 'Sénégal',
    region: 'Africa', subregion: 'Western Africa', capital: 'Dakar',
    population: 16743927, area: 196722, languages: ['French'], currency: 'West African CFA Franc', currencyCode: 'XOF',
    callingCode: '+221', tld: '.sn', flagEmoji: '🇸🇳', lat: 14.0, lng: -14.0, independent: true, unMember: true
  },
  {
    code: 'ML', code3: 'MLI', name: 'Mali', nameSv: 'Mali', nameLocal: 'Mali',
    region: 'Africa', subregion: 'Western Africa', capital: 'Bamako',
    population: 20250833, area: 1240192, languages: ['French'], currency: 'West African CFA Franc', currencyCode: 'XOF',
    callingCode: '+223', tld: '.ml', flagEmoji: '🇲🇱', lat: 17.0, lng: -4.0, independent: true, unMember: true
  },
  {
    code: 'BF', code3: 'BFA', name: 'Burkina Faso', nameSv: 'Burkina Faso', nameLocal: 'Burkina Faso',
    region: 'Africa', subregion: 'Western Africa', capital: 'Ouagadougou',
    population: 20903273, area: 272967, languages: ['French'], currency: 'West African CFA Franc', currencyCode: 'XOF',
    callingCode: '+226', tld: '.bf', flagEmoji: '🇧🇫', lat: 13.0, lng: -2.0, independent: true, unMember: true
  },
  {
    code: 'NE', code3: 'NER', name: 'Niger', nameSv: 'Niger', nameLocal: 'Niger',
    region: 'Africa', subregion: 'Western Africa', capital: 'Niamey',
    population: 24206644, area: 1267000, languages: ['French'], currency: 'West African CFA Franc', currencyCode: 'XOF',
    callingCode: '+227', tld: '.ne', flagEmoji: '🇳🇪', lat: 16.0, lng: 8.0, independent: true, unMember: true
  },
  {
    code: 'GN', code3: 'GIN', name: 'Guinea', nameSv: 'Guinea', nameLocal: 'Guinée',
    region: 'Africa', subregion: 'Western Africa', capital: 'Conakry',
    population: 13132795, area: 245857, languages: ['French'], currency: 'Guinean Franc', currencyCode: 'GNF',
    callingCode: '+224', tld: '.gn', flagEmoji: '🇬🇳', lat: 11.0, lng: -10.0, independent: true, unMember: true
  },
  {
    code: 'GW', code3: 'GNB', name: 'Guinea-Bissau', nameSv: 'Guinea-Bissau', nameLocal: 'Guiné-Bissau',
    region: 'Africa', subregion: 'Western Africa', capital: 'Bissau',
    population: 1968001, area: 36125, languages: ['Portuguese'], currency: 'West African CFA Franc', currencyCode: 'XOF',
    callingCode: '+245', tld: '.gw', flagEmoji: '🇬🇼', lat: 12.0, lng: -15.0, independent: true, unMember: true
  },
  {
    code: 'SL', code3: 'SLE', name: 'Sierra Leone', nameSv: 'Sierra Leone', nameLocal: 'Sierra Leone',
    region: 'Africa', subregion: 'Western Africa', capital: 'Freetown',
    population: 7976983, area: 71740, languages: ['English'], currency: 'Sierra Leonean Leone', currencyCode: 'SLL',
    callingCode: '+232', tld: '.sl', flagEmoji: '🇸🇱', lat: 8.5, lng: -11.5, independent: true, unMember: true
  },
  {
    code: 'LR', code3: 'LBR', name: 'Liberia', nameSv: 'Liberia', nameLocal: 'Liberia',
    region: 'Africa', subregion: 'Western Africa', capital: 'Monrovia',
    population: 5057681, area: 111369, languages: ['English'], currency: 'Liberian Dollar', currencyCode: 'LRD',
    callingCode: '+231', tld: '.lr', flagEmoji: '🇱🇷', lat: 6.5, lng: -9.5, independent: true, unMember: true
  },
  {
    code: 'TG', code3: 'TGO', name: 'Togo', nameSv: 'Togo', nameLocal: 'Togo',
    region: 'Africa', subregion: 'Western Africa', capital: 'Lomé',
    population: 8278724, area: 56785, languages: ['French'], currency: 'West African CFA Franc', currencyCode: 'XOF',
    callingCode: '+228', tld: '.tg', flagEmoji: '🇹🇬', lat: 8.0, lng: 1.17, independent: true, unMember: true
  },
  {
    code: 'BJ', code3: 'BEN', name: 'Benin', nameSv: 'Benin', nameLocal: 'Bénin',
    region: 'Africa', subregion: 'Western Africa', capital: 'Porto-Novo',
    population: 12123200, area: 112622, languages: ['French'], currency: 'West African CFA Franc', currencyCode: 'XOF',
    callingCode: '+229', tld: '.bj', flagEmoji: '🇧🇯', lat: 9.5, lng: 2.25, independent: true, unMember: true
  },
  {
    code: 'GM', code3: 'GMB', name: 'Gambia', nameSv: 'Gambia', nameLocal: 'The Gambia',
    region: 'Africa', subregion: 'Western Africa', capital: 'Banjul',
    population: 2416668, area: 11295, languages: ['English'], currency: 'Gambian Dalasi', currencyCode: 'GMD',
    callingCode: '+220', tld: '.gm', flagEmoji: '🇬🇲', lat: 13.47, lng: -16.57, independent: true, unMember: true
  },
  {
    code: 'CV', code3: 'CPV', name: 'Cape Verde', nameSv: 'Kap Verde', nameLocal: 'Cabo Verde',
    region: 'Africa', subregion: 'Western Africa', capital: 'Praia',
    population: 555987, area: 4033, languages: ['Portuguese'], currency: 'Cape Verdean Escudo', currencyCode: 'CVE',
    callingCode: '+238', tld: '.cv', flagEmoji: '🇨🇻', lat: 16.0, lng: -24.0, independent: true, unMember: true
  },
  {
    code: 'SH', code3: 'SHN', name: 'Saint Helena', nameSv: 'Sankta Helena', nameLocal: 'Saint Helena',
    region: 'Africa', subregion: 'Western Africa', capital: 'Jamestown',
    population: 6077, area: 394, languages: ['English'], currency: 'Saint Helena Pound', currencyCode: 'SHP',
    callingCode: '+290', tld: '.sh', flagEmoji: '🇸🇭', lat: -15.93, lng: -5.72, independent: false, unMember: false
  },

  // ============================================================
  // AFRICA — Eastern Africa
  // ============================================================
  {
    code: 'ET', code3: 'ETH', name: 'Ethiopia', nameSv: 'Etiopien', nameLocal: 'ኢትዮጵያ',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Addis Ababa',
    population: 114963588, area: 1104300, languages: ['Amharic'], currency: 'Ethiopian Birr', currencyCode: 'ETB',
    callingCode: '+251', tld: '.et', flagEmoji: '🇪🇹', lat: 8.0, lng: 38.0, independent: true, unMember: true
  },
  {
    code: 'KE', code3: 'KEN', name: 'Kenya', nameSv: 'Kenya', nameLocal: 'Kenya',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Nairobi',
    population: 53771296, area: 580367, languages: ['English', 'Swahili'], currency: 'Kenyan Shilling', currencyCode: 'KES',
    callingCode: '+254', tld: '.ke', flagEmoji: '🇰🇪', lat: 1.0, lng: 38.0, independent: true, unMember: true
  },
  {
    code: 'TZ', code3: 'TZA', name: 'Tanzania', nameSv: 'Tanzania', nameLocal: 'Tanzania',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Dodoma',
    population: 59734218, area: 947303, languages: ['Swahili', 'English'], currency: 'Tanzanian Shilling', currencyCode: 'TZS',
    callingCode: '+255', tld: '.tz', flagEmoji: '🇹🇿', lat: -6.0, lng: 35.0, independent: true, unMember: true
  },
  {
    code: 'UG', code3: 'UGA', name: 'Uganda', nameSv: 'Uganda', nameLocal: 'Uganda',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Kampala',
    population: 45741007, area: 241038, languages: ['English', 'Swahili'], currency: 'Ugandan Shilling', currencyCode: 'UGX',
    callingCode: '+256', tld: '.ug', flagEmoji: '🇺🇬', lat: 1.0, lng: 32.0, independent: true, unMember: true
  },
  {
    code: 'RW', code3: 'RWA', name: 'Rwanda', nameSv: 'Rwanda', nameLocal: 'Rwanda',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Kigali',
    population: 12952218, area: 26338, languages: ['Kinyarwanda', 'French', 'English'], currency: 'Rwandan Franc', currencyCode: 'RWF',
    callingCode: '+250', tld: '.rw', flagEmoji: '🇷🇼', lat: -2.0, lng: 30.0, independent: true, unMember: true
  },
  {
    code: 'BI', code3: 'BDI', name: 'Burundi', nameSv: 'Burundi', nameLocal: 'Burundi',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Gitega',
    population: 11890784, area: 27834, languages: ['Kirundi', 'French'], currency: 'Burundian Franc', currencyCode: 'BIF',
    callingCode: '+257', tld: '.bi', flagEmoji: '🇧🇮', lat: -3.5, lng: 30.0, independent: true, unMember: true
  },
  {
    code: 'SO', code3: 'SOM', name: 'Somalia', nameSv: 'Somalia', nameLocal: 'Soomaaliya',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Mogadishu',
    population: 15893222, area: 637657, languages: ['Somali', 'Arabic'], currency: 'Somali Shilling', currencyCode: 'SOS',
    callingCode: '+252', tld: '.so', flagEmoji: '🇸🇴', lat: 10.0, lng: 49.0, independent: true, unMember: true
  },
  {
    code: 'DJ', code3: 'DJI', name: 'Djibouti', nameSv: 'Djibouti', nameLocal: 'Djibouti',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Djibouti',
    population: 988000, area: 23200, languages: ['French', 'Arabic'], currency: 'Djiboutian Franc', currencyCode: 'DJF',
    callingCode: '+253', tld: '.dj', flagEmoji: '🇩🇯', lat: 11.5, lng: 43.0, independent: true, unMember: true
  },
  {
    code: 'ER', code3: 'ERI', name: 'Eritrea', nameSv: 'Eritrea', nameLocal: 'ኤርትራ',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Asmara',
    population: 3546421, area: 117600, languages: ['Tigrinya', 'Arabic', 'English'], currency: 'Eritrean Nakfa', currencyCode: 'ERN',
    callingCode: '+291', tld: '.er', flagEmoji: '🇪🇷', lat: 15.0, lng: 39.0, independent: true, unMember: true
  },
  {
    code: 'SS', code3: 'SSD', name: 'South Sudan', nameSv: 'Sydsudan', nameLocal: 'South Sudan',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Juba',
    population: 11193725, area: 619745, languages: ['English'], currency: 'South Sudanese Pound', currencyCode: 'SSP',
    callingCode: '+211', tld: '.ss', flagEmoji: '🇸🇸', lat: 7.0, lng: 30.0, independent: true, unMember: true
  },
  {
    code: 'MZ', code3: 'MOZ', name: 'Mozambique', nameSv: 'Moçambique', nameLocal: 'Moçambique',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Maputo',
    population: 31255435, area: 801590, languages: ['Portuguese'], currency: 'Mozambican Metical', currencyCode: 'MZN',
    callingCode: '+258', tld: '.mz', flagEmoji: '🇲🇿', lat: -18.25, lng: 35.0, independent: true, unMember: true
  },
  {
    code: 'MG', code3: 'MDG', name: 'Madagascar', nameSv: 'Madagaskar', nameLocal: 'Madagasikara',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Antananarivo',
    population: 27691018, area: 587041, languages: ['Malagasy', 'French'], currency: 'Malagasy Ariary', currencyCode: 'MGA',
    callingCode: '+261', tld: '.mg', flagEmoji: '🇲🇬', lat: -20.0, lng: 47.0, independent: true, unMember: true
  },
  {
    code: 'MW', code3: 'MWI', name: 'Malawi', nameSv: 'Malawi', nameLocal: 'Malawi',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Lilongwe',
    population: 19129952, area: 118484, languages: ['English', 'Chewa'], currency: 'Malawian Kwacha', currencyCode: 'MWK',
    callingCode: '+265', tld: '.mw', flagEmoji: '🇲🇼', lat: -13.5, lng: 34.0, independent: true, unMember: true
  },
  {
    code: 'ZM', code3: 'ZMB', name: 'Zambia', nameSv: 'Zambia', nameLocal: 'Zambia',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Lusaka',
    population: 18383955, area: 752618, languages: ['English'], currency: 'Zambian Kwacha', currencyCode: 'ZMW',
    callingCode: '+260', tld: '.zm', flagEmoji: '🇿🇲', lat: -15.0, lng: 30.0, independent: true, unMember: true
  },
  {
    code: 'ZW', code3: 'ZWE', name: 'Zimbabwe', nameSv: 'Zimbabwe', nameLocal: 'Zimbabwe',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Harare',
    population: 14862924, area: 390757, languages: ['English', 'Shona', 'Ndebele'], currency: 'Zimbabwean Dollar', currencyCode: 'ZWL',
    callingCode: '+263', tld: '.zw', flagEmoji: '🇿🇼', lat: -20.0, lng: 30.0, independent: true, unMember: true
  },
  {
    code: 'KM', code3: 'COM', name: 'Comoros', nameSv: 'Komorerna', nameLocal: 'Comores',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Moroni',
    population: 869601, area: 1862, languages: ['Arabic', 'French', 'Comorian'], currency: 'Comorian Franc', currencyCode: 'KMF',
    callingCode: '+269', tld: '.km', flagEmoji: '🇰🇲', lat: -12.17, lng: 44.25, independent: true, unMember: true
  },
  {
    code: 'MU', code3: 'MUS', name: 'Mauritius', nameSv: 'Mauritius', nameLocal: 'Mauritius',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Port Louis',
    population: 1271768, area: 2040, languages: ['English', 'French'], currency: 'Mauritian Rupee', currencyCode: 'MUR',
    callingCode: '+230', tld: '.mu', flagEmoji: '🇲🇺', lat: -20.28, lng: 57.55, independent: true, unMember: true
  },
  {
    code: 'SC', code3: 'SYC', name: 'Seychelles', nameSv: 'Seychellerna', nameLocal: 'Seychelles',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Victoria',
    population: 98347, area: 452, languages: ['French', 'English', 'Seychellois Creole'], currency: 'Seychellois Rupee', currencyCode: 'SCR',
    callingCode: '+248', tld: '.sc', flagEmoji: '🇸🇨', lat: -4.58, lng: 55.67, independent: true, unMember: true
  },
  // Eastern Africa territories
  {
    code: 'RE', code3: 'REU', name: 'Réunion', nameSv: 'Réunion', nameLocal: 'La Réunion',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Saint-Denis',
    population: 895312, area: 2511, languages: ['French'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+262', tld: '.re', flagEmoji: '🇷🇪', lat: -21.12, lng: 55.53, independent: false, unMember: false
  },
  {
    code: 'YT', code3: 'MYT', name: 'Mayotte', nameSv: 'Mayotte', nameLocal: 'Mayotte',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Mamoudzou',
    population: 272815, area: 374, languages: ['French'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+262', tld: '.yt', flagEmoji: '🇾🇹', lat: -12.83, lng: 45.17, independent: false, unMember: false
  },
  {
    code: 'IO', code3: 'IOT', name: 'British Indian Ocean Territory', nameSv: 'Brittiska territoriet i Indiska oceanen', nameLocal: 'British Indian Ocean Territory',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Diego Garcia',
    population: 3000, area: 60, languages: ['English'], currency: 'United States Dollar', currencyCode: 'USD',
    callingCode: '+246', tld: '.io', flagEmoji: '🇮🇴', lat: -6.0, lng: 71.5, independent: false, unMember: false
  },
  {
    code: 'TF', code3: 'ATF', name: 'French Southern Territories', nameSv: 'Franska sydterritorierna', nameLocal: 'Terres australes françaises',
    region: 'Africa', subregion: 'Eastern Africa', capital: 'Port-aux-Français',
    population: 140, area: 7747, languages: ['French'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+262', tld: '.tf', flagEmoji: '🇹🇫', lat: -49.25, lng: 69.17, independent: false, unMember: false
  },

  // ============================================================
  // AFRICA — Central / Middle Africa
  // ============================================================
  {
    code: 'CD', code3: 'COD', name: 'DR Congo', nameSv: 'Demokratiska republiken Kongo', nameLocal: 'République démocratique du Congo',
    region: 'Africa', subregion: 'Middle Africa', capital: 'Kinshasa',
    population: 89561403, area: 2344858, languages: ['French'], currency: 'Congolese Franc', currencyCode: 'CDF',
    callingCode: '+243', tld: '.cd', flagEmoji: '🇨🇩', lat: 0.0, lng: 25.0, independent: true, unMember: true
  },
  {
    code: 'CG', code3: 'COG', name: 'Republic of the Congo', nameSv: 'Republiken Kongo', nameLocal: 'République du Congo',
    region: 'Africa', subregion: 'Middle Africa', capital: 'Brazzaville',
    population: 5518087, area: 342000, languages: ['French'], currency: 'Central African CFA Franc', currencyCode: 'XAF',
    callingCode: '+242', tld: '.cg', flagEmoji: '🇨🇬', lat: -1.0, lng: 15.0, independent: true, unMember: true
  },
  {
    code: 'CM', code3: 'CMR', name: 'Cameroon', nameSv: 'Kamerun', nameLocal: 'Cameroun',
    region: 'Africa', subregion: 'Middle Africa', capital: 'Yaoundé',
    population: 26545863, area: 475442, languages: ['French', 'English'], currency: 'Central African CFA Franc', currencyCode: 'XAF',
    callingCode: '+237', tld: '.cm', flagEmoji: '🇨🇲', lat: 6.0, lng: 12.0, independent: true, unMember: true
  },
  {
    code: 'CF', code3: 'CAF', name: 'Central African Republic', nameSv: 'Centralafrikanska republiken', nameLocal: 'République centrafricaine',
    region: 'Africa', subregion: 'Middle Africa', capital: 'Bangui',
    population: 4829767, area: 622984, languages: ['French', 'Sango'], currency: 'Central African CFA Franc', currencyCode: 'XAF',
    callingCode: '+236', tld: '.cf', flagEmoji: '🇨🇫', lat: 7.0, lng: 21.0, independent: true, unMember: true
  },
  {
    code: 'TD', code3: 'TCD', name: 'Chad', nameSv: 'Tchad', nameLocal: 'Tchad',
    region: 'Africa', subregion: 'Middle Africa', capital: "N'Djamena",
    population: 16425864, area: 1284000, languages: ['French', 'Arabic'], currency: 'Central African CFA Franc', currencyCode: 'XAF',
    callingCode: '+235', tld: '.td', flagEmoji: '🇹🇩', lat: 15.0, lng: 19.0, independent: true, unMember: true
  },
  {
    code: 'GA', code3: 'GAB', name: 'Gabon', nameSv: 'Gabon', nameLocal: 'Gabon',
    region: 'Africa', subregion: 'Middle Africa', capital: 'Libreville',
    population: 2225734, area: 267668, languages: ['French'], currency: 'Central African CFA Franc', currencyCode: 'XAF',
    callingCode: '+241', tld: '.ga', flagEmoji: '🇬🇦', lat: -1.0, lng: 11.75, independent: true, unMember: true
  },
  {
    code: 'GQ', code3: 'GNQ', name: 'Equatorial Guinea', nameSv: 'Ekvatorialguinea', nameLocal: 'Guinea Ecuatorial',
    region: 'Africa', subregion: 'Middle Africa', capital: 'Malabo',
    population: 1402985, area: 28051, languages: ['Spanish', 'French', 'Portuguese'], currency: 'Central African CFA Franc', currencyCode: 'XAF',
    callingCode: '+240', tld: '.gq', flagEmoji: '🇬🇶', lat: 2.0, lng: 10.0, independent: true, unMember: true
  },
  {
    code: 'ST', code3: 'STP', name: 'São Tomé and Príncipe', nameSv: 'São Tomé och Príncipe', nameLocal: 'São Tomé e Príncipe',
    region: 'Africa', subregion: 'Middle Africa', capital: 'São Tomé',
    population: 219159, area: 964, languages: ['Portuguese'], currency: 'São Tomé and Príncipe Dobra', currencyCode: 'STN',
    callingCode: '+239', tld: '.st', flagEmoji: '🇸🇹', lat: 1.0, lng: 7.0, independent: true, unMember: true
  },
  {
    code: 'AO', code3: 'AGO', name: 'Angola', nameSv: 'Angola', nameLocal: 'Angola',
    region: 'Africa', subregion: 'Middle Africa', capital: 'Luanda',
    population: 32866272, area: 1246700, languages: ['Portuguese'], currency: 'Angolan Kwanza', currencyCode: 'AOA',
    callingCode: '+244', tld: '.ao', flagEmoji: '🇦🇴', lat: -12.5, lng: 18.5, independent: true, unMember: true
  },

  // ============================================================
  // AFRICA — Southern Africa
  // ============================================================
  {
    code: 'ZA', code3: 'ZAF', name: 'South Africa', nameSv: 'Sydafrika', nameLocal: 'South Africa',
    region: 'Africa', subregion: 'Southern Africa', capital: 'Pretoria',
    population: 59308690, area: 1221037, languages: ['Zulu', 'Xhosa', 'Afrikaans', 'English'], currency: 'South African Rand', currencyCode: 'ZAR',
    callingCode: '+27', tld: '.za', flagEmoji: '🇿🇦', lat: -29.0, lng: 24.0, independent: true, unMember: true
  },
  {
    code: 'NA', code3: 'NAM', name: 'Namibia', nameSv: 'Namibia', nameLocal: 'Namibia',
    region: 'Africa', subregion: 'Southern Africa', capital: 'Windhoek',
    population: 2540905, area: 825615, languages: ['English'], currency: 'Namibian Dollar', currencyCode: 'NAD',
    callingCode: '+264', tld: '.na', flagEmoji: '🇳🇦', lat: -22.0, lng: 17.0, independent: true, unMember: true
  },
  {
    code: 'BW', code3: 'BWA', name: 'Botswana', nameSv: 'Botswana', nameLocal: 'Botswana',
    region: 'Africa', subregion: 'Southern Africa', capital: 'Gaborone',
    population: 2351627, area: 581730, languages: ['English', 'Tswana'], currency: 'Botswana Pula', currencyCode: 'BWP',
    callingCode: '+267', tld: '.bw', flagEmoji: '🇧🇼', lat: -22.0, lng: 24.0, independent: true, unMember: true
  },
  {
    code: 'LS', code3: 'LSO', name: 'Lesotho', nameSv: 'Lesotho', nameLocal: 'Lesotho',
    region: 'Africa', subregion: 'Southern Africa', capital: 'Maseru',
    population: 2142249, area: 30355, languages: ['Sotho', 'English'], currency: 'Lesotho Loti', currencyCode: 'LSL',
    callingCode: '+266', tld: '.ls', flagEmoji: '🇱🇸', lat: -29.5, lng: 28.5, independent: true, unMember: true
  },
  {
    code: 'SZ', code3: 'SWZ', name: 'Eswatini', nameSv: 'Eswatini', nameLocal: 'eSwatini',
    region: 'Africa', subregion: 'Southern Africa', capital: 'Mbabane',
    population: 1160164, area: 17364, languages: ['Swazi', 'English'], currency: 'Swazi Lilangeni', currencyCode: 'SZL',
    callingCode: '+268', tld: '.sz', flagEmoji: '🇸🇿', lat: -26.5, lng: 31.5, independent: true, unMember: true
  },

  // ============================================================
  // AMERICAS — North America
  // ============================================================
  {
    code: 'US', code3: 'USA', name: 'United States', nameSv: 'Förenta staterna', nameLocal: 'United States',
    region: 'Americas', subregion: 'North America', capital: 'Washington, D.C.',
    population: 331002651, area: 9833517, languages: ['English'], currency: 'United States Dollar', currencyCode: 'USD',
    callingCode: '+1', tld: '.us', flagEmoji: '🇺🇸', lat: 38.0, lng: -97.0, independent: true, unMember: true
  },
  {
    code: 'CA', code3: 'CAN', name: 'Canada', nameSv: 'Kanada', nameLocal: 'Canada',
    region: 'Americas', subregion: 'North America', capital: 'Ottawa',
    population: 37742154, area: 9984670, languages: ['English', 'French'], currency: 'Canadian Dollar', currencyCode: 'CAD',
    callingCode: '+1', tld: '.ca', flagEmoji: '🇨🇦', lat: 60.0, lng: -95.0, independent: true, unMember: true
  },
  {
    code: 'MX', code3: 'MEX', name: 'Mexico', nameSv: 'Mexiko', nameLocal: 'México',
    region: 'Americas', subregion: 'North America', capital: 'Mexico City',
    population: 128932753, area: 1964375, languages: ['Spanish'], currency: 'Mexican Peso', currencyCode: 'MXN',
    callingCode: '+52', tld: '.mx', flagEmoji: '🇲🇽', lat: 23.0, lng: -102.0, independent: true, unMember: true
  },
  {
    code: 'BM', code3: 'BMU', name: 'Bermuda', nameSv: 'Bermuda', nameLocal: 'Bermuda',
    region: 'Americas', subregion: 'North America', capital: 'Hamilton',
    population: 63918, area: 54, languages: ['English'], currency: 'Bermudian Dollar', currencyCode: 'BMD',
    callingCode: '+1', tld: '.bm', flagEmoji: '🇧🇲', lat: 32.33, lng: -64.75, independent: false, unMember: false
  },
  {
    code: 'PM', code3: 'SPM', name: 'Saint Pierre and Miquelon', nameSv: 'Saint-Pierre och Miquelon', nameLocal: 'Saint-Pierre-et-Miquelon',
    region: 'Americas', subregion: 'North America', capital: 'Saint-Pierre',
    population: 5794, area: 242, languages: ['French'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+508', tld: '.pm', flagEmoji: '🇵🇲', lat: 46.83, lng: -56.33, independent: false, unMember: false
  },

  // ============================================================
  // AMERICAS — Central America
  // ============================================================
  {
    code: 'GT', code3: 'GTM', name: 'Guatemala', nameSv: 'Guatemala', nameLocal: 'Guatemala',
    region: 'Americas', subregion: 'Central America', capital: 'Guatemala City',
    population: 17915568, area: 108889, languages: ['Spanish'], currency: 'Guatemalan Quetzal', currencyCode: 'GTQ',
    callingCode: '+502', tld: '.gt', flagEmoji: '🇬🇹', lat: 15.5, lng: -90.25, independent: true, unMember: true
  },
  {
    code: 'BZ', code3: 'BLZ', name: 'Belize', nameSv: 'Belize', nameLocal: 'Belize',
    region: 'Americas', subregion: 'Central America', capital: 'Belmopan',
    population: 397628, area: 22966, languages: ['English'], currency: 'Belize Dollar', currencyCode: 'BZD',
    callingCode: '+501', tld: '.bz', flagEmoji: '🇧🇿', lat: 17.25, lng: -88.75, independent: true, unMember: true
  },
  {
    code: 'HN', code3: 'HND', name: 'Honduras', nameSv: 'Honduras', nameLocal: 'Honduras',
    region: 'Americas', subregion: 'Central America', capital: 'Tegucigalpa',
    population: 9904607, area: 112492, languages: ['Spanish'], currency: 'Honduran Lempira', currencyCode: 'HNL',
    callingCode: '+504', tld: '.hn', flagEmoji: '🇭🇳', lat: 15.0, lng: -86.5, independent: true, unMember: true
  },
  {
    code: 'SV', code3: 'SLV', name: 'El Salvador', nameSv: 'El Salvador', nameLocal: 'El Salvador',
    region: 'Americas', subregion: 'Central America', capital: 'San Salvador',
    population: 6486205, area: 21041, languages: ['Spanish'], currency: 'United States Dollar', currencyCode: 'USD',
    callingCode: '+503', tld: '.sv', flagEmoji: '🇸🇻', lat: 13.83, lng: -88.92, independent: true, unMember: true
  },
  {
    code: 'NI', code3: 'NIC', name: 'Nicaragua', nameSv: 'Nicaragua', nameLocal: 'Nicaragua',
    region: 'Americas', subregion: 'Central America', capital: 'Managua',
    population: 6624554, area: 130373, languages: ['Spanish'], currency: 'Nicaraguan Córdoba', currencyCode: 'NIO',
    callingCode: '+505', tld: '.ni', flagEmoji: '🇳🇮', lat: 13.0, lng: -85.0, independent: true, unMember: true
  },
  {
    code: 'CR', code3: 'CRI', name: 'Costa Rica', nameSv: 'Costa Rica', nameLocal: 'Costa Rica',
    region: 'Americas', subregion: 'Central America', capital: 'San José',
    population: 5094118, area: 51100, languages: ['Spanish'], currency: 'Costa Rican Colón', currencyCode: 'CRC',
    callingCode: '+506', tld: '.cr', flagEmoji: '🇨🇷', lat: 10.0, lng: -84.0, independent: true, unMember: true
  },
  {
    code: 'PA', code3: 'PAN', name: 'Panama', nameSv: 'Panama', nameLocal: 'Panamá',
    region: 'Americas', subregion: 'Central America', capital: 'Panama City',
    population: 4314767, area: 75417, languages: ['Spanish'], currency: 'Panamanian Balboa', currencyCode: 'PAB',
    callingCode: '+507', tld: '.pa', flagEmoji: '🇵🇦', lat: 9.0, lng: -80.0, independent: true, unMember: true
  },

  // ============================================================
  // AMERICAS — Caribbean
  // ============================================================
  {
    code: 'CU', code3: 'CUB', name: 'Cuba', nameSv: 'Kuba', nameLocal: 'Cuba',
    region: 'Americas', subregion: 'Caribbean', capital: 'Havana',
    population: 11326616, area: 109884, languages: ['Spanish'], currency: 'Cuban Peso', currencyCode: 'CUP',
    callingCode: '+53', tld: '.cu', flagEmoji: '🇨🇺', lat: 21.5, lng: -80.0, independent: true, unMember: true
  },
  {
    code: 'JM', code3: 'JAM', name: 'Jamaica', nameSv: 'Jamaica', nameLocal: 'Jamaica',
    region: 'Americas', subregion: 'Caribbean', capital: 'Kingston',
    population: 2961167, area: 10991, languages: ['English'], currency: 'Jamaican Dollar', currencyCode: 'JMD',
    callingCode: '+1', tld: '.jm', flagEmoji: '🇯🇲', lat: 18.25, lng: -77.5, independent: true, unMember: true
  },
  {
    code: 'HT', code3: 'HTI', name: 'Haiti', nameSv: 'Haiti', nameLocal: 'Haïti',
    region: 'Americas', subregion: 'Caribbean', capital: 'Port-au-Prince',
    population: 11402528, area: 27750, languages: ['French', 'Haitian Creole'], currency: 'Haitian Gourde', currencyCode: 'HTG',
    callingCode: '+509', tld: '.ht', flagEmoji: '🇭🇹', lat: 19.0, lng: -72.42, independent: true, unMember: true
  },
  {
    code: 'DO', code3: 'DOM', name: 'Dominican Republic', nameSv: 'Dominikanska republiken', nameLocal: 'República Dominicana',
    region: 'Americas', subregion: 'Caribbean', capital: 'Santo Domingo',
    population: 10847910, area: 48671, languages: ['Spanish'], currency: 'Dominican Peso', currencyCode: 'DOP',
    callingCode: '+1', tld: '.do', flagEmoji: '🇩🇴', lat: 19.0, lng: -70.67, independent: true, unMember: true
  },
  {
    code: 'TT', code3: 'TTO', name: 'Trinidad and Tobago', nameSv: 'Trinidad och Tobago', nameLocal: 'Trinidad and Tobago',
    region: 'Americas', subregion: 'Caribbean', capital: 'Port of Spain',
    population: 1399488, area: 5130, languages: ['English'], currency: 'Trinidad and Tobago Dollar', currencyCode: 'TTD',
    callingCode: '+1', tld: '.tt', flagEmoji: '🇹🇹', lat: 11.0, lng: -61.0, independent: true, unMember: true
  },
  {
    code: 'BB', code3: 'BRB', name: 'Barbados', nameSv: 'Barbados', nameLocal: 'Barbados',
    region: 'Americas', subregion: 'Caribbean', capital: 'Bridgetown',
    population: 287375, area: 430, languages: ['English'], currency: 'Barbadian Dollar', currencyCode: 'BBD',
    callingCode: '+1', tld: '.bb', flagEmoji: '🇧🇧', lat: 13.17, lng: -59.53, independent: true, unMember: true
  },
  {
    code: 'GD', code3: 'GRD', name: 'Grenada', nameSv: 'Grenada', nameLocal: 'Grenada',
    region: 'Americas', subregion: 'Caribbean', capital: "St. George's",
    population: 112523, area: 344, languages: ['English'], currency: 'East Caribbean Dollar', currencyCode: 'XCD',
    callingCode: '+1', tld: '.gd', flagEmoji: '🇬🇩', lat: 12.12, lng: -61.67, independent: true, unMember: true
  },
  {
    code: 'VC', code3: 'VCT', name: 'Saint Vincent and the Grenadines', nameSv: 'Saint Vincent och Grenadinerna', nameLocal: 'Saint Vincent and the Grenadines',
    region: 'Americas', subregion: 'Caribbean', capital: 'Kingstown',
    population: 110940, area: 389, languages: ['English'], currency: 'East Caribbean Dollar', currencyCode: 'XCD',
    callingCode: '+1', tld: '.vc', flagEmoji: '🇻🇨', lat: 13.25, lng: -61.2, independent: true, unMember: true
  },
  {
    code: 'LC', code3: 'LCA', name: 'Saint Lucia', nameSv: 'Saint Lucia', nameLocal: 'Saint Lucia',
    region: 'Americas', subregion: 'Caribbean', capital: 'Castries',
    population: 183627, area: 616, languages: ['English'], currency: 'East Caribbean Dollar', currencyCode: 'XCD',
    callingCode: '+1', tld: '.lc', flagEmoji: '🇱🇨', lat: 13.88, lng: -60.97, independent: true, unMember: true
  },
  {
    code: 'DM', code3: 'DMA', name: 'Dominica', nameSv: 'Dominica', nameLocal: 'Dominica',
    region: 'Americas', subregion: 'Caribbean', capital: 'Roseau',
    population: 71986, area: 751, languages: ['English'], currency: 'East Caribbean Dollar', currencyCode: 'XCD',
    callingCode: '+1', tld: '.dm', flagEmoji: '🇩🇲', lat: 15.42, lng: -61.33, independent: true, unMember: true
  },
  {
    code: 'AG', code3: 'ATG', name: 'Antigua and Barbuda', nameSv: 'Antigua och Barbuda', nameLocal: 'Antigua and Barbuda',
    region: 'Americas', subregion: 'Caribbean', capital: "St. John's",
    population: 97929, area: 442, languages: ['English'], currency: 'East Caribbean Dollar', currencyCode: 'XCD',
    callingCode: '+1', tld: '.ag', flagEmoji: '🇦🇬', lat: 17.05, lng: -61.8, independent: true, unMember: true
  },
  {
    code: 'KN', code3: 'KNA', name: 'Saint Kitts and Nevis', nameSv: 'Saint Kitts och Nevis', nameLocal: 'Saint Kitts and Nevis',
    region: 'Americas', subregion: 'Caribbean', capital: 'Basseterre',
    population: 53199, area: 261, languages: ['English'], currency: 'East Caribbean Dollar', currencyCode: 'XCD',
    callingCode: '+1', tld: '.kn', flagEmoji: '🇰🇳', lat: 17.33, lng: -62.75, independent: true, unMember: true
  },
  {
    code: 'BS', code3: 'BHS', name: 'Bahamas', nameSv: 'Bahamas', nameLocal: 'Bahamas',
    region: 'Americas', subregion: 'Caribbean', capital: 'Nassau',
    population: 393244, area: 13943, languages: ['English'], currency: 'Bahamian Dollar', currencyCode: 'BSD',
    callingCode: '+1', tld: '.bs', flagEmoji: '🇧🇸', lat: 24.25, lng: -76.0, independent: true, unMember: true
  },
  // Caribbean territories
  {
    code: 'PR', code3: 'PRI', name: 'Puerto Rico', nameSv: 'Puerto Rico', nameLocal: 'Puerto Rico',
    region: 'Americas', subregion: 'Caribbean', capital: 'San Juan',
    population: 3285874, area: 8870, languages: ['Spanish', 'English'], currency: 'United States Dollar', currencyCode: 'USD',
    callingCode: '+1', tld: '.pr', flagEmoji: '🇵🇷', lat: 18.25, lng: -66.5, independent: false, unMember: false
  },
  {
    code: 'VI', code3: 'VIR', name: 'U.S. Virgin Islands', nameSv: 'Amerikanska Jungfruöarna', nameLocal: 'U.S. Virgin Islands',
    region: 'Americas', subregion: 'Caribbean', capital: 'Charlotte Amalie',
    population: 104425, area: 347, languages: ['English'], currency: 'United States Dollar', currencyCode: 'USD',
    callingCode: '+1', tld: '.vi', flagEmoji: '🇻🇮', lat: 18.35, lng: -64.93, independent: false, unMember: false
  },
  {
    code: 'VG', code3: 'VGB', name: 'British Virgin Islands', nameSv: 'Brittiska Jungfruöarna', nameLocal: 'British Virgin Islands',
    region: 'Americas', subregion: 'Caribbean', capital: 'Road Town',
    population: 30231, area: 151, languages: ['English'], currency: 'United States Dollar', currencyCode: 'USD',
    callingCode: '+1', tld: '.vg', flagEmoji: '🇻🇬', lat: 18.43, lng: -64.62, independent: false, unMember: false
  },
  {
    code: 'KY', code3: 'CYM', name: 'Cayman Islands', nameSv: 'Caymanöarna', nameLocal: 'Cayman Islands',
    region: 'Americas', subregion: 'Caribbean', capital: 'George Town',
    population: 65722, area: 264, languages: ['English'], currency: 'Cayman Islands Dollar', currencyCode: 'KYD',
    callingCode: '+1', tld: '.ky', flagEmoji: '🇰🇾', lat: 19.5, lng: -80.5, independent: false, unMember: false
  },
  {
    code: 'TC', code3: 'TCA', name: 'Turks and Caicos Islands', nameSv: 'Turks- och Caicosöarna', nameLocal: 'Turks and Caicos Islands',
    region: 'Americas', subregion: 'Caribbean', capital: 'Cockburn Town',
    population: 38717, area: 948, languages: ['English'], currency: 'United States Dollar', currencyCode: 'USD',
    callingCode: '+1', tld: '.tc', flagEmoji: '🇹🇨', lat: 21.75, lng: -71.58, independent: false, unMember: false
  },
  {
    code: 'MS', code3: 'MSR', name: 'Montserrat', nameSv: 'Montserrat', nameLocal: 'Montserrat',
    region: 'Americas', subregion: 'Caribbean', capital: 'Plymouth',
    population: 4992, area: 102, languages: ['English'], currency: 'East Caribbean Dollar', currencyCode: 'XCD',
    callingCode: '+1', tld: '.ms', flagEmoji: '🇲🇸', lat: 16.75, lng: -62.2, independent: false, unMember: false
  },
  {
    code: 'AI', code3: 'AIA', name: 'Anguilla', nameSv: 'Anguilla', nameLocal: 'Anguilla',
    region: 'Americas', subregion: 'Caribbean', capital: 'The Valley',
    population: 15003, area: 91, languages: ['English'], currency: 'East Caribbean Dollar', currencyCode: 'XCD',
    callingCode: '+1', tld: '.ai', flagEmoji: '🇦🇮', lat: 18.25, lng: -63.17, independent: false, unMember: false
  },
  {
    code: 'AW', code3: 'ABW', name: 'Aruba', nameSv: 'Aruba', nameLocal: 'Aruba',
    region: 'Americas', subregion: 'Caribbean', capital: 'Oranjestad',
    population: 106766, area: 180, languages: ['Dutch', 'Papiamento'], currency: 'Aruban Florin', currencyCode: 'AWG',
    callingCode: '+297', tld: '.aw', flagEmoji: '🇦🇼', lat: 12.5, lng: -69.97, independent: false, unMember: false
  },
  {
    code: 'CW', code3: 'CUW', name: 'Curaçao', nameSv: 'Curaçao', nameLocal: 'Curaçao',
    region: 'Americas', subregion: 'Caribbean', capital: 'Willemstad',
    population: 164093, area: 444, languages: ['Dutch', 'Papiamento'], currency: 'Netherlands Antillean Guilder', currencyCode: 'ANG',
    callingCode: '+599', tld: '.cw', flagEmoji: '🇨🇼', lat: 12.17, lng: -68.98, independent: false, unMember: false
  },
  {
    code: 'SX', code3: 'SXM', name: 'Sint Maarten', nameSv: 'Sint Maarten', nameLocal: 'Sint Maarten',
    region: 'Americas', subregion: 'Caribbean', capital: 'Philipsburg',
    population: 42876, area: 34, languages: ['Dutch', 'English'], currency: 'Netherlands Antillean Guilder', currencyCode: 'ANG',
    callingCode: '+1', tld: '.sx', flagEmoji: '🇸🇽', lat: 18.03, lng: -63.05, independent: false, unMember: false
  },
  {
    code: 'BQ', code3: 'BES', name: 'Bonaire, Sint Eustatius and Saba', nameSv: 'Bonaire, Sint Eustatius och Saba', nameLocal: 'Bonaire, Sint Eustatius en Saba',
    region: 'Americas', subregion: 'Caribbean', capital: 'Kralendijk',
    population: 26221, area: 294, languages: ['Dutch'], currency: 'United States Dollar', currencyCode: 'USD',
    callingCode: '+599', tld: '.bq', flagEmoji: '🇧🇶', lat: 12.15, lng: -68.27, independent: false, unMember: false
  },
  {
    code: 'BL', code3: 'BLM', name: 'Saint Barthélemy', nameSv: 'Saint-Barthélemy', nameLocal: 'Saint-Barthélemy',
    region: 'Americas', subregion: 'Caribbean', capital: 'Gustavia',
    population: 9877, area: 21, languages: ['French'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+590', tld: '.bl', flagEmoji: '🇧🇱', lat: 17.9, lng: -62.83, independent: false, unMember: false
  },
  {
    code: 'MF', code3: 'MAF', name: 'Saint Martin', nameSv: 'Saint-Martin', nameLocal: 'Saint-Martin',
    region: 'Americas', subregion: 'Caribbean', capital: 'Marigot',
    population: 38666, area: 53, languages: ['French'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+590', tld: '.mf', flagEmoji: '🇲🇫', lat: 18.08, lng: -63.05, independent: false, unMember: false
  },
  {
    code: 'GP', code3: 'GLP', name: 'Guadeloupe', nameSv: 'Guadeloupe', nameLocal: 'Guadeloupe',
    region: 'Americas', subregion: 'Caribbean', capital: 'Basse-Terre',
    population: 400124, area: 1628, languages: ['French'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+590', tld: '.gp', flagEmoji: '🇬🇵', lat: 16.25, lng: -61.58, independent: false, unMember: false
  },
  {
    code: 'MQ', code3: 'MTQ', name: 'Martinique', nameSv: 'Martinique', nameLocal: 'Martinique',
    region: 'Americas', subregion: 'Caribbean', capital: 'Fort-de-France',
    population: 375265, area: 1128, languages: ['French'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+596', tld: '.mq', flagEmoji: '🇲🇶', lat: 14.67, lng: -61.0, independent: false, unMember: false
  },

  // ============================================================
  // AMERICAS — South America
  // ============================================================
  {
    code: 'BR', code3: 'BRA', name: 'Brazil', nameSv: 'Brasilien', nameLocal: 'Brasil',
    region: 'Americas', subregion: 'South America', capital: 'Brasília',
    population: 212559417, area: 8515767, languages: ['Portuguese'], currency: 'Brazilian Real', currencyCode: 'BRL',
    callingCode: '+55', tld: '.br', flagEmoji: '🇧🇷', lat: -10.0, lng: -55.0, independent: true, unMember: true
  },
  {
    code: 'AR', code3: 'ARG', name: 'Argentina', nameSv: 'Argentina', nameLocal: 'Argentina',
    region: 'Americas', subregion: 'South America', capital: 'Buenos Aires',
    population: 45195774, area: 2780400, languages: ['Spanish'], currency: 'Argentine Peso', currencyCode: 'ARS',
    callingCode: '+54', tld: '.ar', flagEmoji: '🇦🇷', lat: -34.0, lng: -64.0, independent: true, unMember: true
  },
  {
    code: 'CO', code3: 'COL', name: 'Colombia', nameSv: 'Colombia', nameLocal: 'Colombia',
    region: 'Americas', subregion: 'South America', capital: 'Bogotá',
    population: 50882891, area: 1141748, languages: ['Spanish'], currency: 'Colombian Peso', currencyCode: 'COP',
    callingCode: '+57', tld: '.co', flagEmoji: '🇨🇴', lat: 4.0, lng: -72.0, independent: true, unMember: true
  },
  {
    code: 'VE', code3: 'VEN', name: 'Venezuela', nameSv: 'Venezuela', nameLocal: 'Venezuela',
    region: 'Americas', subregion: 'South America', capital: 'Caracas',
    population: 28435940, area: 916445, languages: ['Spanish'], currency: 'Venezuelan Bolívar', currencyCode: 'VES',
    callingCode: '+58', tld: '.ve', flagEmoji: '🇻🇪', lat: 8.0, lng: -66.0, independent: true, unMember: true
  },
  {
    code: 'PE', code3: 'PER', name: 'Peru', nameSv: 'Peru', nameLocal: 'Perú',
    region: 'Americas', subregion: 'South America', capital: 'Lima',
    population: 32971854, area: 1285216, languages: ['Spanish'], currency: 'Peruvian Sol', currencyCode: 'PEN',
    callingCode: '+51', tld: '.pe', flagEmoji: '🇵🇪', lat: -10.0, lng: -76.0, independent: true, unMember: true
  },
  {
    code: 'CL', code3: 'CHL', name: 'Chile', nameSv: 'Chile', nameLocal: 'Chile',
    region: 'Americas', subregion: 'South America', capital: 'Santiago',
    population: 19116201, area: 756102, languages: ['Spanish'], currency: 'Chilean Peso', currencyCode: 'CLP',
    callingCode: '+56', tld: '.cl', flagEmoji: '🇨🇱', lat: -30.0, lng: -71.0, independent: true, unMember: true
  },
  {
    code: 'EC', code3: 'ECU', name: 'Ecuador', nameSv: 'Ecuador', nameLocal: 'Ecuador',
    region: 'Americas', subregion: 'South America', capital: 'Quito',
    population: 17643054, area: 283561, languages: ['Spanish'], currency: 'United States Dollar', currencyCode: 'USD',
    callingCode: '+593', tld: '.ec', flagEmoji: '🇪🇨', lat: -2.0, lng: -77.5, independent: true, unMember: true
  },
  {
    code: 'BO', code3: 'BOL', name: 'Bolivia', nameSv: 'Bolivia', nameLocal: 'Bolivia',
    region: 'Americas', subregion: 'South America', capital: 'Sucre',
    population: 11673021, area: 1098581, languages: ['Spanish'], currency: 'Bolivian Boliviano', currencyCode: 'BOB',
    callingCode: '+591', tld: '.bo', flagEmoji: '🇧🇴', lat: -17.0, lng: -65.0, independent: true, unMember: true
  },
  {
    code: 'PY', code3: 'PRY', name: 'Paraguay', nameSv: 'Paraguay', nameLocal: 'Paraguay',
    region: 'Americas', subregion: 'South America', capital: 'Asunción',
    population: 7132538, area: 406752, languages: ['Spanish', 'Guaraní'], currency: 'Paraguayan Guaraní', currencyCode: 'PYG',
    callingCode: '+595', tld: '.py', flagEmoji: '🇵🇾', lat: -23.0, lng: -58.0, independent: true, unMember: true
  },
  {
    code: 'UY', code3: 'URY', name: 'Uruguay', nameSv: 'Uruguay', nameLocal: 'Uruguay',
    region: 'Americas', subregion: 'South America', capital: 'Montevideo',
    population: 3473730, area: 176215, languages: ['Spanish'], currency: 'Uruguayan Peso', currencyCode: 'UYU',
    callingCode: '+598', tld: '.uy', flagEmoji: '🇺🇾', lat: -33.0, lng: -56.0, independent: true, unMember: true
  },
  {
    code: 'GY', code3: 'GUY', name: 'Guyana', nameSv: 'Guyana', nameLocal: 'Guyana',
    region: 'Americas', subregion: 'South America', capital: 'Georgetown',
    population: 786552, area: 214969, languages: ['English'], currency: 'Guyanese Dollar', currencyCode: 'GYD',
    callingCode: '+592', tld: '.gy', flagEmoji: '🇬🇾', lat: 5.0, lng: -59.0, independent: true, unMember: true
  },
  {
    code: 'SR', code3: 'SUR', name: 'Suriname', nameSv: 'Surinam', nameLocal: 'Suriname',
    region: 'Americas', subregion: 'South America', capital: 'Paramaribo',
    population: 586632, area: 163820, languages: ['Dutch'], currency: 'Surinamese Dollar', currencyCode: 'SRD',
    callingCode: '+597', tld: '.sr', flagEmoji: '🇸🇷', lat: 4.0, lng: -56.0, independent: true, unMember: true
  },
  {
    code: 'GF', code3: 'GUF', name: 'French Guiana', nameSv: 'Franska Guyana', nameLocal: 'Guyane française',
    region: 'Americas', subregion: 'South America', capital: 'Cayenne',
    population: 298682, area: 83534, languages: ['French'], currency: 'Euro', currencyCode: 'EUR',
    callingCode: '+594', tld: '.gf', flagEmoji: '🇬🇫', lat: 4.0, lng: -53.0, independent: false, unMember: false
  },
  {
    code: 'FK', code3: 'FLK', name: 'Falkland Islands', nameSv: 'Falklandsöarna', nameLocal: 'Falkland Islands',
    region: 'Americas', subregion: 'South America', capital: 'Stanley',
    population: 3480, area: 12173, languages: ['English'], currency: 'Falkland Islands Pound', currencyCode: 'FKP',
    callingCode: '+500', tld: '.fk', flagEmoji: '🇫🇰', lat: -51.75, lng: -59.0, independent: false, unMember: false
  },
  {
    code: 'GS', code3: 'SGS', name: 'South Georgia and the South Sandwich Islands', nameSv: 'Sydgeorgien och Sydsandwichöarna', nameLocal: 'South Georgia',
    region: 'Americas', subregion: 'South America', capital: 'King Edward Point',
    population: 30, area: 3903, languages: ['English'], currency: 'Pound Sterling', currencyCode: 'GBP',
    callingCode: '+500', tld: '.gs', flagEmoji: '🇬🇸', lat: -54.5, lng: -37.0, independent: false, unMember: false
  },

  // ============================================================
  // AMERICAS — US Territories (Pacific)
  // ============================================================
  {
    code: 'GU', code3: 'GUM', name: 'Guam', nameSv: 'Guam', nameLocal: 'Guam',
    region: 'Oceania', subregion: 'Micronesia', capital: 'Hagåtña',
    population: 168775, area: 549, languages: ['English', 'Chamorro'], currency: 'United States Dollar', currencyCode: 'USD',
    callingCode: '+1', tld: '.gu', flagEmoji: '🇬🇺', lat: 13.47, lng: 144.78, independent: false, unMember: false
  },
  {
    code: 'AS', code3: 'ASM', name: 'American Samoa', nameSv: 'Amerikanska Samoa', nameLocal: 'American Samoa',
    region: 'Oceania', subregion: 'Polynesia', capital: 'Pago Pago',
    population: 55191, area: 199, languages: ['English', 'Samoan'], currency: 'United States Dollar', currencyCode: 'USD',
    callingCode: '+1', tld: '.as', flagEmoji: '🇦🇸', lat: -14.33, lng: -170.0, independent: false, unMember: false
  },
  {
    code: 'MP', code3: 'MNP', name: 'Northern Mariana Islands', nameSv: 'Nordmarianerna', nameLocal: 'Northern Mariana Islands',
    region: 'Oceania', subregion: 'Micronesia', capital: 'Saipan',
    population: 57559, area: 464, languages: ['English', 'Chamorro', 'Carolinian'], currency: 'United States Dollar', currencyCode: 'USD',
    callingCode: '+1', tld: '.mp', flagEmoji: '🇲🇵', lat: 15.2, lng: 145.75, independent: false, unMember: false
  },
  {
    code: 'UM', code3: 'UMI', name: 'United States Minor Outlying Islands', nameSv: 'Förenta staternas mindre öar i Oceanien och Västindien', nameLocal: 'U.S. Minor Outlying Islands',
    region: 'Oceania', subregion: 'Micronesia', capital: '',
    population: 300, area: 34, languages: ['English'], currency: 'United States Dollar', currencyCode: 'USD',
    callingCode: '+1', tld: '.um', flagEmoji: '🇺🇲', lat: 19.28, lng: 166.6, independent: false, unMember: false
  },

  // ============================================================
  // OCEANIA — Australia & New Zealand
  // ============================================================
  {
    code: 'AU', code3: 'AUS', name: 'Australia', nameSv: 'Australien', nameLocal: 'Australia',
    region: 'Oceania', subregion: 'Australia and New Zealand', capital: 'Canberra',
    population: 25499884, area: 7692024, languages: ['English'], currency: 'Australian Dollar', currencyCode: 'AUD',
    callingCode: '+61', tld: '.au', flagEmoji: '🇦🇺', lat: -27.0, lng: 133.0, independent: true, unMember: true
  },
  {
    code: 'NZ', code3: 'NZL', name: 'New Zealand', nameSv: 'Nya Zeeland', nameLocal: 'New Zealand',
    region: 'Oceania', subregion: 'Australia and New Zealand', capital: 'Wellington',
    population: 4822233, area: 270467, languages: ['English', 'Māori'], currency: 'New Zealand Dollar', currencyCode: 'NZD',
    callingCode: '+64', tld: '.nz', flagEmoji: '🇳🇿', lat: -41.0, lng: 174.0, independent: true, unMember: true
  },
  {
    code: 'NF', code3: 'NFK', name: 'Norfolk Island', nameSv: 'Norfolkön', nameLocal: 'Norfolk Island',
    region: 'Oceania', subregion: 'Australia and New Zealand', capital: 'Kingston',
    population: 1748, area: 36, languages: ['English', 'Norfuk'], currency: 'Australian Dollar', currencyCode: 'AUD',
    callingCode: '+672', tld: '.nf', flagEmoji: '🇳🇫', lat: -29.03, lng: 167.95, independent: false, unMember: false
  },
  {
    code: 'CX', code3: 'CXR', name: 'Christmas Island', nameSv: 'Julön', nameLocal: 'Christmas Island',
    region: 'Oceania', subregion: 'Australia and New Zealand', capital: 'Flying Fish Cove',
    population: 1843, area: 135, languages: ['English'], currency: 'Australian Dollar', currencyCode: 'AUD',
    callingCode: '+61', tld: '.cx', flagEmoji: '🇨🇽', lat: -10.48, lng: 105.63, independent: false, unMember: false
  },
  {
    code: 'CC', code3: 'CCK', name: 'Cocos (Keeling) Islands', nameSv: 'Kokosöarna', nameLocal: 'Cocos (Keeling) Islands',
    region: 'Oceania', subregion: 'Australia and New Zealand', capital: 'West Island',
    population: 544, area: 14, languages: ['English'], currency: 'Australian Dollar', currencyCode: 'AUD',
    callingCode: '+61', tld: '.cc', flagEmoji: '🇨🇨', lat: -12.5, lng: 96.83, independent: false, unMember: false
  },
  {
    code: 'HM', code3: 'HMD', name: 'Heard Island and McDonald Islands', nameSv: 'Heard- och McDonaldöarna', nameLocal: 'Heard Island and McDonald Islands',
    region: 'Oceania', subregion: 'Australia and New Zealand', capital: '',
    population: 0, area: 412, languages: ['English'], currency: 'Australian Dollar', currencyCode: 'AUD',
    callingCode: '+672', tld: '.hm', flagEmoji: '🇭🇲', lat: -53.1, lng: 72.52, independent: false, unMember: false
  },

  // ============================================================
  // OCEANIA — Melanesia
  // ============================================================
  {
    code: 'PG', code3: 'PNG', name: 'Papua New Guinea', nameSv: 'Papua Nya Guinea', nameLocal: 'Papua Niugini',
    region: 'Oceania', subregion: 'Melanesia', capital: 'Port Moresby',
    population: 8947024, area: 462840, languages: ['English', 'Tok Pisin', 'Hiri Motu'], currency: 'Papua New Guinean Kina', currencyCode: 'PGK',
    callingCode: '+675', tld: '.pg', flagEmoji: '🇵🇬', lat: -6.0, lng: 147.0, independent: true, unMember: true
  },
  {
    code: 'FJ', code3: 'FJI', name: 'Fiji', nameSv: 'Fiji', nameLocal: 'Fiji',
    region: 'Oceania', subregion: 'Melanesia', capital: 'Suva',
    population: 896445, area: 18272, languages: ['English', 'Fijian', 'Hindi'], currency: 'Fijian Dollar', currencyCode: 'FJD',
    callingCode: '+679', tld: '.fj', flagEmoji: '🇫🇯', lat: -18.0, lng: 175.0, independent: true, unMember: true
  },
  {
    code: 'SB', code3: 'SLB', name: 'Solomon Islands', nameSv: 'Salomonöarna', nameLocal: 'Solomon Islands',
    region: 'Oceania', subregion: 'Melanesia', capital: 'Honiara',
    population: 686884, area: 28896, languages: ['English'], currency: 'Solomon Islands Dollar', currencyCode: 'SBD',
    callingCode: '+677', tld: '.sb', flagEmoji: '🇸🇧', lat: -8.0, lng: 159.0, independent: true, unMember: true
  },
  {
    code: 'VU', code3: 'VUT', name: 'Vanuatu', nameSv: 'Vanuatu', nameLocal: 'Vanuatu',
    region: 'Oceania', subregion: 'Melanesia', capital: 'Port Vila',
    population: 307145, area: 12189, languages: ['Bislama', 'English', 'French'], currency: 'Vanuatu Vatu', currencyCode: 'VUV',
    callingCode: '+678', tld: '.vu', flagEmoji: '🇻🇺', lat: -16.0, lng: 167.0, independent: true, unMember: true
  },
  {
    code: 'NC', code3: 'NCL', name: 'New Caledonia', nameSv: 'Nya Kaledonien', nameLocal: 'Nouvelle-Calédonie',
    region: 'Oceania', subregion: 'Melanesia', capital: 'Nouméa',
    population: 285498, area: 18575, languages: ['French'], currency: 'CFP Franc', currencyCode: 'XPF',
    callingCode: '+687', tld: '.nc', flagEmoji: '🇳🇨', lat: -21.5, lng: 165.5, independent: false, unMember: false
  },

  // ============================================================
  // OCEANIA — Micronesia
  // ============================================================
  {
    code: 'FM', code3: 'FSM', name: 'Micronesia', nameSv: 'Mikronesien', nameLocal: 'Micronesia',
    region: 'Oceania', subregion: 'Micronesia', capital: 'Palikir',
    population: 115023, area: 702, languages: ['English'], currency: 'United States Dollar', currencyCode: 'USD',
    callingCode: '+691', tld: '.fm', flagEmoji: '🇫🇲', lat: 6.92, lng: 158.25, independent: true, unMember: true
  },
  {
    code: 'MH', code3: 'MHL', name: 'Marshall Islands', nameSv: 'Marshallöarna', nameLocal: 'Marshall Islands',
    region: 'Oceania', subregion: 'Micronesia', capital: 'Majuro',
    population: 59190, area: 181, languages: ['English', 'Marshallese'], currency: 'United States Dollar', currencyCode: 'USD',
    callingCode: '+692', tld: '.mh', flagEmoji: '🇲🇭', lat: 9.0, lng: 168.0, independent: true, unMember: true
  },
  {
    code: 'PW', code3: 'PLW', name: 'Palau', nameSv: 'Palau', nameLocal: 'Palau',
    region: 'Oceania', subregion: 'Micronesia', capital: 'Ngerulmud',
    population: 18094, area: 459, languages: ['English', 'Palauan'], currency: 'United States Dollar', currencyCode: 'USD',
    callingCode: '+680', tld: '.pw', flagEmoji: '🇵🇼', lat: 7.5, lng: 134.5, independent: true, unMember: true
  },
  {
    code: 'KI', code3: 'KIR', name: 'Kiribati', nameSv: 'Kiribati', nameLocal: 'Kiribati',
    region: 'Oceania', subregion: 'Micronesia', capital: 'South Tarawa',
    population: 119449, area: 811, languages: ['English', 'Gilbertese'], currency: 'Australian Dollar', currencyCode: 'AUD',
    callingCode: '+686', tld: '.ki', flagEmoji: '🇰🇮', lat: 1.42, lng: 173.0, independent: true, unMember: true
  },
  {
    code: 'NR', code3: 'NRU', name: 'Nauru', nameSv: 'Nauru', nameLocal: 'Nauru',
    region: 'Oceania', subregion: 'Micronesia', capital: 'Yaren',
    population: 10824, area: 21, languages: ['English', 'Nauruan'], currency: 'Australian Dollar', currencyCode: 'AUD',
    callingCode: '+674', tld: '.nr', flagEmoji: '🇳🇷', lat: -0.52, lng: 166.93, independent: true, unMember: true
  },

  // ============================================================
  // OCEANIA — Polynesia
  // ============================================================
  {
    code: 'WS', code3: 'WSM', name: 'Samoa', nameSv: 'Samoa', nameLocal: 'Samoa',
    region: 'Oceania', subregion: 'Polynesia', capital: 'Apia',
    population: 198414, area: 2842, languages: ['Samoan', 'English'], currency: 'Samoan Tala', currencyCode: 'WST',
    callingCode: '+685', tld: '.ws', flagEmoji: '🇼🇸', lat: -13.58, lng: -172.33, independent: true, unMember: true
  },
  {
    code: 'TO', code3: 'TON', name: 'Tonga', nameSv: 'Tonga', nameLocal: 'Tonga',
    region: 'Oceania', subregion: 'Polynesia', capital: "Nuku'alofa",
    population: 105695, area: 747, languages: ['Tongan', 'English'], currency: 'Tongan Pa\'anga', currencyCode: 'TOP',
    callingCode: '+676', tld: '.to', flagEmoji: '🇹🇴', lat: -20.0, lng: -175.0, independent: true, unMember: true
  },
  {
    code: 'TV', code3: 'TUV', name: 'Tuvalu', nameSv: 'Tuvalu', nameLocal: 'Tuvalu',
    region: 'Oceania', subregion: 'Polynesia', capital: 'Funafuti',
    population: 11792, area: 26, languages: ['Tuvaluan', 'English'], currency: 'Australian Dollar', currencyCode: 'AUD',
    callingCode: '+688', tld: '.tv', flagEmoji: '🇹🇻', lat: -8.0, lng: 178.0, independent: true, unMember: true
  },
  {
    code: 'PF', code3: 'PYF', name: 'French Polynesia', nameSv: 'Franska Polynesien', nameLocal: 'Polynésie française',
    region: 'Oceania', subregion: 'Polynesia', capital: 'Papeete',
    population: 280908, area: 4167, languages: ['French'], currency: 'CFP Franc', currencyCode: 'XPF',
    callingCode: '+689', tld: '.pf', flagEmoji: '🇵🇫', lat: -15.0, lng: -140.0, independent: false, unMember: false
  },
  {
    code: 'WF', code3: 'WLF', name: 'Wallis and Futuna', nameSv: 'Wallis- och Futunaöarna', nameLocal: 'Wallis-et-Futuna',
    region: 'Oceania', subregion: 'Polynesia', capital: 'Mata-Utu',
    population: 11239, area: 142, languages: ['French'], currency: 'CFP Franc', currencyCode: 'XPF',
    callingCode: '+681', tld: '.wf', flagEmoji: '🇼🇫', lat: -13.3, lng: -176.2, independent: false, unMember: false
  },
  {
    code: 'CK', code3: 'COK', name: 'Cook Islands', nameSv: 'Cooköarna', nameLocal: 'Cook Islands',
    region: 'Oceania', subregion: 'Polynesia', capital: 'Avarua',
    population: 17564, area: 236, languages: ['English', 'Cook Islands Māori'], currency: 'New Zealand Dollar', currencyCode: 'NZD',
    callingCode: '+682', tld: '.ck', flagEmoji: '🇨🇰', lat: -21.23, lng: -159.77, independent: false, unMember: false
  },
  {
    code: 'NU', code3: 'NIU', name: 'Niue', nameSv: 'Niue', nameLocal: 'Niue',
    region: 'Oceania', subregion: 'Polynesia', capital: 'Alofi',
    population: 1626, area: 260, languages: ['English', 'Niuean'], currency: 'New Zealand Dollar', currencyCode: 'NZD',
    callingCode: '+683', tld: '.nu', flagEmoji: '🇳🇺', lat: -19.03, lng: -169.87, independent: false, unMember: false
  },
  {
    code: 'TK', code3: 'TKL', name: 'Tokelau', nameSv: 'Tokelau', nameLocal: 'Tokelau',
    region: 'Oceania', subregion: 'Polynesia', capital: 'Nukunonu',
    population: 1357, area: 12, languages: ['English', 'Tokelauan'], currency: 'New Zealand Dollar', currencyCode: 'NZD',
    callingCode: '+690', tld: '.tk', flagEmoji: '🇹🇰', lat: -9.0, lng: -172.0, independent: false, unMember: false
  },
  {
    code: 'PN', code3: 'PCN', name: 'Pitcairn Islands', nameSv: 'Pitcairnöarna', nameLocal: 'Pitcairn Islands',
    region: 'Oceania', subregion: 'Polynesia', capital: 'Adamstown',
    population: 47, area: 47, languages: ['English'], currency: 'New Zealand Dollar', currencyCode: 'NZD',
    callingCode: '+64', tld: '.pn', flagEmoji: '🇵🇳', lat: -25.07, lng: -130.1, independent: false, unMember: false
  },

  // ============================================================
  // ANTARCTICA
  // ============================================================
  {
    code: 'AQ', code3: 'ATA', name: 'Antarctica', nameSv: 'Antarktis', nameLocal: 'Antarctica',
    region: 'Antarctica', subregion: 'Antarctica', capital: '',
    population: 1106, area: 14200000, languages: ['English'], currency: '', currencyCode: '',
    callingCode: '+672', tld: '.aq', flagEmoji: '🇦🇶', lat: -75.25, lng: -0.07, independent: false, unMember: false
  },
  {
    code: 'BV', code3: 'BVT', name: 'Bouvet Island', nameSv: 'Bouvetön', nameLocal: 'Bouvetøya',
    region: 'Antarctica', subregion: 'Antarctica', capital: '',
    population: 0, area: 49, languages: ['Norwegian'], currency: 'Norwegian Krone', currencyCode: 'NOK',
    callingCode: '+47', tld: '.bv', flagEmoji: '🇧🇻', lat: -54.43, lng: 3.4, independent: false, unMember: false
  },
];

// ============================================================
// Helper Functions
// ============================================================

/** Get unique list of all regions */
export const REGIONS: string[] = [...new Set(ALL_COUNTRIES.map(c => c.region))].sort();

/** Find a country by its ISO 3166-1 alpha-2 code */
export function getCountryByCode(code: string): Country | undefined {
  return ALL_COUNTRIES.find(c => c.code === code.toUpperCase());
}

/** Get all countries belonging to a region */
export function getCountriesByRegion(region: string): Country[] {
  return ALL_COUNTRIES.filter(c => c.region.toLowerCase() === region.toLowerCase());
}

/** Search countries by name (English, Swedish, or local), code, or capital */
export function searchCountries(query: string): Country[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return ALL_COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameSv.toLowerCase().includes(q) ||
    c.nameLocal.toLowerCase().includes(q) ||
    c.code.toLowerCase() === q ||
    c.code3.toLowerCase() === q ||
    c.capital.toLowerCase().includes(q)
  );
}

/** Preset focus-country arrays for common user profiles */
export const FOCUS_COUNTRIES = {
  nordic: ['SE', 'NO', 'DK', 'FI', 'IS'],
  scandinavia: ['SE', 'NO', 'DK'],
  eu: [
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
    'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
    'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'
  ],
  nato: [
    'US', 'GB', 'FR', 'DE', 'CA', 'IT', 'ES', 'TR', 'PL', 'NL',
    'BE', 'NO', 'DK', 'PT', 'CZ', 'GR', 'HU', 'IS', 'LU', 'RO',
    'BG', 'EE', 'LV', 'LT', 'SK', 'SI', 'HR', 'AL', 'ME', 'MK',
    'FI', 'SE'
  ],
  g7: ['US', 'GB', 'FR', 'DE', 'IT', 'CA', 'JP'],
  g20: [
    'US', 'GB', 'FR', 'DE', 'IT', 'CA', 'JP', 'AU', 'AR', 'BR',
    'CN', 'IN', 'ID', 'KR', 'MX', 'RU', 'SA', 'ZA', 'TR'
  ],
  brics: ['BR', 'RU', 'IN', 'CN', 'ZA', 'EG', 'ET', 'IR', 'AE'],
  middleEast: [
    'SA', 'IR', 'IQ', 'SY', 'JO', 'LB', 'IL', 'PS', 'YE', 'OM',
    'AE', 'QA', 'BH', 'KW', 'TR'
  ],
  eastAsia: ['CN', 'JP', 'KR', 'KP', 'MN', 'TW', 'HK', 'MO'],
  conflictZones: [
    'UA', 'RU', 'SY', 'YE', 'SO', 'SS', 'CD', 'ML', 'BF', 'MM',
    'AF', 'LY', 'CF', 'SD', 'ET', 'PS', 'IL', 'IQ'
  ],
  userDefault: ['SE', 'US', 'CN', 'UA', 'RU', 'IL', 'PS', 'TW'],
} as const;
