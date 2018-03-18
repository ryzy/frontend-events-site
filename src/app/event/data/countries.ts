import { Country } from '../model/country';

/**
 * List of countries, together with currencies, timezones etc
 *
 * Compiled from:
 * @url https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;capital;region;subregion;latlng;timezones;currencies;flag
 */
export const countriesData: Country[] = [
  {
    currencies: [
      {
        code: 'AFN',
        name: 'Afghan afghani',
        symbol: '؋'
      }
    ],
    flag: 'https://restcountries.eu/data/afg.svg',
    name: 'Afghanistan',
    isoCode: 'AF',
    capital: 'Kabul',
    region: 'Asia',
    subregion: 'Southern Asia',
    latlng: [
      33,
      65
    ],
    timezones: [
      'UTC+04:30'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/ala.svg',
    name: 'Åland Islands',
    isoCode: 'AX',
    capital: 'Mariehamn',
    region: 'Europe',
    subregion: 'Northern Europe',
    latlng: [
      60.116667,
      19.9
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'ALL',
        name: 'Albanian lek',
        symbol: 'L'
      }
    ],
    flag: 'https://restcountries.eu/data/alb.svg',
    name: 'Albania',
    isoCode: 'AL',
    capital: 'Tirana',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [
      41,
      20
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'DZD',
        name: 'Algerian dinar',
        symbol: 'د.ج'
      }
    ],
    flag: 'https://restcountries.eu/data/dza.svg',
    name: 'Algeria',
    isoCode: 'DZ',
    capital: 'Algiers',
    region: 'Africa',
    subregion: 'Northern Africa',
    latlng: [
      28,
      3
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'USD',
        name: 'United State Dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/asm.svg',
    name: 'American Samoa',
    isoCode: 'AS',
    capital: 'Pago Pago',
    region: 'Oceania',
    subregion: 'Polynesia',
    latlng: [
      -14.33333333,
      -170
    ],
    timezones: [
      'UTC-11:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/and.svg',
    name: 'Andorra',
    isoCode: 'AD',
    capital: 'Andorra la Vella',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [
      42.5,
      1.5
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'AOA',
        name: 'Angolan kwanza',
        symbol: 'Kz'
      }
    ],
    flag: 'https://restcountries.eu/data/ago.svg',
    name: 'Angola',
    isoCode: 'AO',
    capital: 'Luanda',
    region: 'Africa',
    subregion: 'Middle Africa',
    latlng: [
      -12.5,
      18.5
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XCD',
        name: 'East Caribbean dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/aia.svg',
    name: 'Anguilla',
    isoCode: 'AI',
    capital: 'The Valley',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      18.25,
      -63.16666666
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'AUD',
        name: 'Australian dollar',
        symbol: '$'
      },
      {
        code: 'GBP',
        name: 'British pound',
        symbol: '£'
      }
    ],
    flag: 'https://restcountries.eu/data/ata.svg',
    name: 'Antarctica',
    isoCode: 'AQ',
    capital: '',
    region: 'Polar',
    subregion: '',
    latlng: [
      -74.65,
      4.48
    ],
    timezones: [
      'UTC-03:00',
      'UTC+03:00',
      'UTC+05:00',
      'UTC+06:00',
      'UTC+07:00',
      'UTC+08:00',
      'UTC+10:00',
      'UTC+12:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XCD',
        name: 'East Caribbean dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/atg.svg',
    name: 'Antigua and Barbuda',
    isoCode: 'AG',
    capital: 'Saint John\'s',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      17.05,
      -61.8
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'ARS',
        name: 'Argentine peso',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/arg.svg',
    name: 'Argentina',
    isoCode: 'AR',
    capital: 'Buenos Aires',
    region: 'Americas',
    subregion: 'South America',
    latlng: [
      -34,
      -64
    ],
    timezones: [
      'UTC-03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'AMD',
        name: 'Armenian dram'
      }
    ],
    flag: 'https://restcountries.eu/data/arm.svg',
    name: 'Armenia',
    isoCode: 'AM',
    capital: 'Yerevan',
    region: 'Asia',
    subregion: 'Western Asia',
    latlng: [
      40,
      45
    ],
    timezones: [
      'UTC+04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'AWG',
        name: 'Aruban florin',
        symbol: 'ƒ'
      }
    ],
    flag: 'https://restcountries.eu/data/abw.svg',
    name: 'Aruba',
    isoCode: 'AW',
    capital: 'Oranjestad',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      12.5,
      -69.96666666
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'AUD',
        name: 'Australian dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/aus.svg',
    name: 'Australia',
    isoCode: 'AU',
    capital: 'Canberra',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    latlng: [
      -27,
      133
    ],
    timezones: [
      'UTC+05:00',
      'UTC+06:30',
      'UTC+07:00',
      'UTC+08:00',
      'UTC+09:30',
      'UTC+10:00',
      'UTC+10:30',
      'UTC+11:30'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/aut.svg',
    name: 'Austria',
    isoCode: 'AT',
    capital: 'Vienna',
    region: 'Europe',
    subregion: 'Western Europe',
    latlng: [
      47.33333333,
      13.33333333
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'AZN',
        name: 'Azerbaijani manat'
      }
    ],
    flag: 'https://restcountries.eu/data/aze.svg',
    name: 'Azerbaijan',
    isoCode: 'AZ',
    capital: 'Baku',
    region: 'Asia',
    subregion: 'Western Asia',
    latlng: [
      40.5,
      47.5
    ],
    timezones: [
      'UTC+04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'BSD',
        name: 'Bahamian dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/bhs.svg',
    name: 'Bahamas',
    isoCode: 'BS',
    capital: 'Nassau',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      24.25,
      -76
    ],
    timezones: [
      'UTC-05:00'
    ]
  },
  {
    currencies: [
      {
        code: 'BHD',
        name: 'Bahraini dinar',
        symbol: '.د.ب'
      }
    ],
    flag: 'https://restcountries.eu/data/bhr.svg',
    name: 'Bahrain',
    isoCode: 'BH',
    capital: 'Manama',
    region: 'Asia',
    subregion: 'Western Asia',
    latlng: [
      26,
      50.55
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'BDT',
        name: 'Bangladeshi taka',
        symbol: '৳'
      }
    ],
    flag: 'https://restcountries.eu/data/bgd.svg',
    name: 'Bangladesh',
    isoCode: 'BD',
    capital: 'Dhaka',
    region: 'Asia',
    subregion: 'Southern Asia',
    latlng: [
      24,
      90
    ],
    timezones: [
      'UTC+06:00'
    ]
  },
  {
    currencies: [
      {
        code: 'BBD',
        name: 'Barbadian dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/brb.svg',
    name: 'Barbados',
    isoCode: 'BB',
    capital: 'Bridgetown',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      13.16666666,
      -59.53333333
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'BYN',
        name: 'New Belarusian ruble',
        symbol: 'Br'
      },
      {
        code: 'BYR',
        name: 'Old Belarusian ruble',
        symbol: 'Br'
      }
    ],
    flag: 'https://restcountries.eu/data/blr.svg',
    name: 'Belarus',
    isoCode: 'BY',
    capital: 'Minsk',
    region: 'Europe',
    subregion: 'Eastern Europe',
    latlng: [
      53,
      28
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/bel.svg',
    name: 'Belgium',
    isoCode: 'BE',
    capital: 'Brussels',
    region: 'Europe',
    subregion: 'Western Europe',
    latlng: [
      50.83333333,
      4
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'BZD',
        name: 'Belize dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/blz.svg',
    name: 'Belize',
    isoCode: 'BZ',
    capital: 'Belmopan',
    region: 'Americas',
    subregion: 'Central America',
    latlng: [
      17.25,
      -88.75
    ],
    timezones: [
      'UTC-06:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XOF',
        name: 'West African CFA franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/ben.svg',
    name: 'Benin',
    isoCode: 'BJ',
    capital: 'Porto-Novo',
    region: 'Africa',
    subregion: 'Western Africa',
    latlng: [
      9.5,
      2.25
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'BMD',
        name: 'Bermudian dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/bmu.svg',
    name: 'Bermuda',
    isoCode: 'BM',
    capital: 'Hamilton',
    region: 'Americas',
    subregion: 'Northern America',
    latlng: [
      32.33333333,
      -64.75
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'BTN',
        name: 'Bhutanese ngultrum',
        symbol: 'Nu.'
      },
      {
        code: 'INR',
        name: 'Indian rupee',
        symbol: '₹'
      }
    ],
    flag: 'https://restcountries.eu/data/btn.svg',
    name: 'Bhutan',
    isoCode: 'BT',
    capital: 'Thimphu',
    region: 'Asia',
    subregion: 'Southern Asia',
    latlng: [
      27.5,
      90.5
    ],
    timezones: [
      'UTC+06:00'
    ]
  },
  {
    currencies: [
      {
        code: 'BOB',
        name: 'Bolivian boliviano',
        symbol: 'Bs.'
      }
    ],
    flag: 'https://restcountries.eu/data/bol.svg',
    name: 'Bolivia (Plurinational State of)',
    isoCode: 'BO',
    capital: 'Sucre',
    region: 'Americas',
    subregion: 'South America',
    latlng: [
      -17,
      -65
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/bes.svg',
    name: 'Bonaire, Sint Eustatius and Saba',
    isoCode: 'BQ',
    capital: 'Kralendijk',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      12.15,
      -68.266667
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'BAM',
        name: 'Bosnia and Herzegovina convertible mark'
      }
    ],
    flag: 'https://restcountries.eu/data/bih.svg',
    name: 'Bosnia and Herzegovina',
    isoCode: 'BA',
    capital: 'Sarajevo',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [
      44,
      18
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'BWP',
        name: 'Botswana pula',
        symbol: 'P'
      }
    ],
    flag: 'https://restcountries.eu/data/bwa.svg',
    name: 'Botswana',
    isoCode: 'BW',
    capital: 'Gaborone',
    region: 'Africa',
    subregion: 'Southern Africa',
    latlng: [
      -22,
      24
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'NOK',
        name: 'Norwegian krone',
        symbol: 'kr'
      }
    ],
    flag: 'https://restcountries.eu/data/bvt.svg',
    name: 'Bouvet Island',
    isoCode: 'BV',
    capital: '',
    region: '',
    subregion: '',
    latlng: [
      -54.43333333,
      3.4
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'BRL',
        name: 'Brazilian real',
        symbol: 'R$'
      }
    ],
    flag: 'https://restcountries.eu/data/bra.svg',
    name: 'Brazil',
    isoCode: 'BR',
    capital: 'Brasília',
    region: 'Americas',
    subregion: 'South America',
    latlng: [
      -10,
      -55
    ],
    timezones: [
      'UTC-05:00',
      'UTC-04:00',
      'UTC-03:00',
      'UTC-02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/iot.svg',
    name: 'British Indian Ocean Territory',
    isoCode: 'IO',
    capital: 'Diego Garcia',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      -6,
      71.5
    ],
    timezones: [
      'UTC+06:00'
    ]
  },
  {
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/vgb.svg',
    name: 'Virgin Islands (British)',
    isoCode: 'VG',
    capital: 'Road Town',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      18.431383,
      -64.62305
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/vir.svg',
    name: 'Virgin Islands (U.S.)',
    isoCode: 'VI',
    capital: 'Charlotte Amalie',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      18.34,
      -64.93
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'BND',
        name: 'Brunei dollar',
        symbol: '$'
      },
      {
        code: 'SGD',
        name: 'Singapore dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/brn.svg',
    name: 'Brunei Darussalam',
    isoCode: 'BN',
    capital: 'Bandar Seri Begawan',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    latlng: [
      4.5,
      114.66666666
    ],
    timezones: [
      'UTC+08:00'
    ]
  },
  {
    currencies: [
      {
        code: 'BGN',
        name: 'Bulgarian lev',
        symbol: 'лв'
      }
    ],
    flag: 'https://restcountries.eu/data/bgr.svg',
    name: 'Bulgaria',
    isoCode: 'BG',
    capital: 'Sofia',
    region: 'Europe',
    subregion: 'Eastern Europe',
    latlng: [
      43,
      25
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XOF',
        name: 'West African CFA franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/bfa.svg',
    name: 'Burkina Faso',
    isoCode: 'BF',
    capital: 'Ouagadougou',
    region: 'Africa',
    subregion: 'Western Africa',
    latlng: [
      13,
      -2
    ],
    timezones: [
      'UTC'
    ]
  },
  {
    currencies: [
      {
        code: 'BIF',
        name: 'Burundian franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/bdi.svg',
    name: 'Burundi',
    isoCode: 'BI',
    capital: 'Bujumbura',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      -3.5,
      30
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'KHR',
        name: 'Cambodian riel',
        symbol: '៛'
      },
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/khm.svg',
    name: 'Cambodia',
    isoCode: 'KH',
    capital: 'Phnom Penh',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    latlng: [
      13,
      105
    ],
    timezones: [
      'UTC+07:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XAF',
        name: 'Central African CFA franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/cmr.svg',
    name: 'Cameroon',
    isoCode: 'CM',
    capital: 'Yaoundé',
    region: 'Africa',
    subregion: 'Middle Africa',
    latlng: [
      6,
      12
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'CAD',
        name: 'Canadian dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/can.svg',
    name: 'Canada',
    isoCode: 'CA',
    capital: 'Ottawa',
    region: 'Americas',
    subregion: 'Northern America',
    latlng: [
      60,
      -95
    ],
    timezones: [
      'UTC-08:00',
      'UTC-07:00',
      'UTC-06:00',
      'UTC-05:00',
      'UTC-04:00',
      'UTC-03:30'
    ]
  },
  {
    currencies: [
      {
        code: 'CVE',
        name: 'Cape Verdean escudo',
        symbol: 'Esc'
      }
    ],
    flag: 'https://restcountries.eu/data/cpv.svg',
    name: 'Cabo Verde',
    isoCode: 'CV',
    capital: 'Praia',
    region: 'Africa',
    subregion: 'Western Africa',
    latlng: [
      16,
      -24
    ],
    timezones: [
      'UTC-01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'KYD',
        name: 'Cayman Islands dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/cym.svg',
    name: 'Cayman Islands',
    isoCode: 'KY',
    capital: 'George Town',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      19.5,
      -80.5
    ],
    timezones: [
      'UTC-05:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XAF',
        name: 'Central African CFA franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/caf.svg',
    name: 'Central African Republic',
    isoCode: 'CF',
    capital: 'Bangui',
    region: 'Africa',
    subregion: 'Middle Africa',
    latlng: [
      7,
      21
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XAF',
        name: 'Central African CFA franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/tcd.svg',
    name: 'Chad',
    isoCode: 'TD',
    capital: 'N\'Djamena',
    region: 'Africa',
    subregion: 'Middle Africa',
    latlng: [
      15,
      19
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'CLP',
        name: 'Chilean peso',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/chl.svg',
    name: 'Chile',
    isoCode: 'CL',
    capital: 'Santiago',
    region: 'Americas',
    subregion: 'South America',
    latlng: [
      -30,
      -71
    ],
    timezones: [
      'UTC-06:00',
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'CNY',
        name: 'Chinese yuan',
        symbol: '¥'
      }
    ],
    flag: 'https://restcountries.eu/data/chn.svg',
    name: 'China',
    isoCode: 'CN',
    capital: 'Beijing',
    region: 'Asia',
    subregion: 'Eastern Asia',
    latlng: [
      35,
      105
    ],
    timezones: [
      'UTC+08:00'
    ]
  },
  {
    currencies: [
      {
        code: 'AUD',
        name: 'Australian dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/cxr.svg',
    name: 'Christmas Island',
    isoCode: 'CX',
    capital: 'Flying Fish Cove',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    latlng: [
      -10.5,
      105.66666666
    ],
    timezones: [
      'UTC+07:00'
    ]
  },
  {
    currencies: [
      {
        code: 'AUD',
        name: 'Australian dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/cck.svg',
    name: 'Cocos (Keeling) Islands',
    isoCode: 'CC',
    capital: 'West Island',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    latlng: [
      -12.5,
      96.83333333
    ],
    timezones: [
      'UTC+06:30'
    ]
  },
  {
    currencies: [
      {
        code: 'COP',
        name: 'Colombian peso',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/col.svg',
    name: 'Colombia',
    isoCode: 'CO',
    capital: 'Bogotá',
    region: 'Americas',
    subregion: 'South America',
    latlng: [
      4,
      -72
    ],
    timezones: [
      'UTC-05:00'
    ]
  },
  {
    currencies: [
      {
        code: 'KMF',
        name: 'Comorian franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/com.svg',
    name: 'Comoros',
    isoCode: 'KM',
    capital: 'Moroni',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      -12.16666666,
      44.25
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XAF',
        name: 'Central African CFA franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/cog.svg',
    name: 'Congo',
    isoCode: 'CG',
    capital: 'Brazzaville',
    region: 'Africa',
    subregion: 'Middle Africa',
    latlng: [
      -1,
      15
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'CDF',
        name: 'Congolese franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/cod.svg',
    name: 'Congo (Democratic Republic of the)',
    isoCode: 'CD',
    capital: 'Kinshasa',
    region: 'Africa',
    subregion: 'Middle Africa',
    latlng: [
      0,
      25
    ],
    timezones: [
      'UTC+01:00',
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'NZD',
        name: 'New Zealand dollar',
        symbol: '$'
      },
      {
        code: 'CKD',
        name: 'Cook Islands dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/cok.svg',
    name: 'Cook Islands',
    isoCode: 'CK',
    capital: 'Avarua',
    region: 'Oceania',
    subregion: 'Polynesia',
    latlng: [
      -21.23333333,
      -159.76666666
    ],
    timezones: [
      'UTC-10:00'
    ]
  },
  {
    currencies: [
      {
        code: 'CRC',
        name: 'Costa Rican colón',
        symbol: '₡'
      }
    ],
    flag: 'https://restcountries.eu/data/cri.svg',
    name: 'Costa Rica',
    isoCode: 'CR',
    capital: 'San José',
    region: 'Americas',
    subregion: 'Central America',
    latlng: [
      10,
      -84
    ],
    timezones: [
      'UTC-06:00'
    ]
  },
  {
    currencies: [
      {
        code: 'HRK',
        name: 'Croatian kuna',
        symbol: 'kn'
      }
    ],
    flag: 'https://restcountries.eu/data/hrv.svg',
    name: 'Croatia',
    isoCode: 'HR',
    capital: 'Zagreb',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [
      45.16666666,
      15.5
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'CUC',
        name: 'Cuban convertible peso',
        symbol: '$'
      },
      {
        code: 'CUP',
        name: 'Cuban peso',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/cub.svg',
    name: 'Cuba',
    isoCode: 'CU',
    capital: 'Havana',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      21.5,
      -80
    ],
    timezones: [
      'UTC-05:00'
    ]
  },
  {
    currencies: [
      {
        code: 'ANG',
        name: 'Netherlands Antillean guilder',
        symbol: 'ƒ'
      }
    ],
    flag: 'https://restcountries.eu/data/cuw.svg',
    name: 'Curaçao',
    isoCode: 'CW',
    capital: 'Willemstad',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      12.116667,
      -68.933333
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/cyp.svg',
    name: 'Cyprus',
    isoCode: 'CY',
    capital: 'Nicosia',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [
      35,
      33
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'CZK',
        name: 'Czech koruna',
        symbol: 'Kč'
      }
    ],
    flag: 'https://restcountries.eu/data/cze.svg',
    name: 'Czech Republic',
    isoCode: 'CZ',
    capital: 'Prague',
    region: 'Europe',
    subregion: 'Eastern Europe',
    latlng: [
      49.75,
      15.5
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'DKK',
        name: 'Danish krone',
        symbol: 'kr'
      }
    ],
    flag: 'https://restcountries.eu/data/dnk.svg',
    name: 'Denmark',
    isoCode: 'DK',
    capital: 'Copenhagen',
    region: 'Europe',
    subregion: 'Northern Europe',
    latlng: [
      56,
      10
    ],
    timezones: [
      'UTC-04:00',
      'UTC-03:00',
      'UTC-01:00',
      'UTC',
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'DJF',
        name: 'Djiboutian franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/dji.svg',
    name: 'Djibouti',
    isoCode: 'DJ',
    capital: 'Djibouti',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      11.5,
      43
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XCD',
        name: 'East Caribbean dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/dma.svg',
    name: 'Dominica',
    isoCode: 'DM',
    capital: 'Roseau',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      15.41666666,
      -61.33333333
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'DOP',
        name: 'Dominican peso',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/dom.svg',
    name: 'Dominican Republic',
    isoCode: 'DO',
    capital: 'Santo Domingo',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      19,
      -70.66666666
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/ecu.svg',
    name: 'Ecuador',
    isoCode: 'EC',
    capital: 'Quito',
    region: 'Americas',
    subregion: 'South America',
    latlng: [
      -2,
      -77.5
    ],
    timezones: [
      'UTC-06:00',
      'UTC-05:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EGP',
        name: 'Egyptian pound',
        symbol: '£'
      }
    ],
    flag: 'https://restcountries.eu/data/egy.svg',
    name: 'Egypt',
    isoCode: 'EG',
    capital: 'Cairo',
    region: 'Africa',
    subregion: 'Northern Africa',
    latlng: [
      27,
      30
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/slv.svg',
    name: 'El Salvador',
    isoCode: 'SV',
    capital: 'San Salvador',
    region: 'Americas',
    subregion: 'Central America',
    latlng: [
      13.83333333,
      -88.91666666
    ],
    timezones: [
      'UTC-06:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XAF',
        name: 'Central African CFA franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/gnq.svg',
    name: 'Equatorial Guinea',
    isoCode: 'GQ',
    capital: 'Malabo',
    region: 'Africa',
    subregion: 'Middle Africa',
    latlng: [
      2,
      10
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'ERN',
        name: 'Eritrean nakfa',
        symbol: 'Nfk'
      }
    ],
    flag: 'https://restcountries.eu/data/eri.svg',
    name: 'Eritrea',
    isoCode: 'ER',
    capital: 'Asmara',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      15,
      39
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/est.svg',
    name: 'Estonia',
    isoCode: 'EE',
    capital: 'Tallinn',
    region: 'Europe',
    subregion: 'Northern Europe',
    latlng: [
      59,
      26
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'ETB',
        name: 'Ethiopian birr',
        symbol: 'Br'
      }
    ],
    flag: 'https://restcountries.eu/data/eth.svg',
    name: 'Ethiopia',
    isoCode: 'ET',
    capital: 'Addis Ababa',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      8,
      38
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'FKP',
        name: 'Falkland Islands pound',
        symbol: '£'
      }
    ],
    flag: 'https://restcountries.eu/data/flk.svg',
    name: 'Falkland Islands (Malvinas)',
    isoCode: 'FK',
    capital: 'Stanley',
    region: 'Americas',
    subregion: 'South America',
    latlng: [
      -51.75,
      -59
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'DKK',
        name: 'Danish krone',
        symbol: 'kr'
      },
      {
        code: '(none)',
        name: 'Faroese króna',
        symbol: 'kr'
      }
    ],
    flag: 'https://restcountries.eu/data/fro.svg',
    name: 'Faroe Islands',
    isoCode: 'FO',
    capital: 'Tórshavn',
    region: 'Europe',
    subregion: 'Northern Europe',
    latlng: [
      62,
      -7
    ],
    timezones: [
      'UTC+00:00'
    ]
  },
  {
    currencies: [
      {
        code: 'FJD',
        name: 'Fijian dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/fji.svg',
    name: 'Fiji',
    isoCode: 'FJ',
    capital: 'Suva',
    region: 'Oceania',
    subregion: 'Melanesia',
    latlng: [
      -18,
      175
    ],
    timezones: [
      'UTC+12:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/fin.svg',
    name: 'Finland',
    isoCode: 'FI',
    capital: 'Helsinki',
    region: 'Europe',
    subregion: 'Northern Europe',
    latlng: [
      64,
      26
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/fra.svg',
    name: 'France',
    isoCode: 'FR',
    capital: 'Paris',
    region: 'Europe',
    subregion: 'Western Europe',
    latlng: [
      46,
      2
    ],
    timezones: [
      'UTC-10:00',
      'UTC-09:30',
      'UTC-09:00',
      'UTC-08:00',
      'UTC-04:00',
      'UTC-03:00',
      'UTC+01:00',
      'UTC+03:00',
      'UTC+04:00',
      'UTC+05:00',
      'UTC+11:00',
      'UTC+12:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/guf.svg',
    name: 'French Guiana',
    isoCode: 'GF',
    capital: 'Cayenne',
    region: 'Americas',
    subregion: 'South America',
    latlng: [
      4,
      -53
    ],
    timezones: [
      'UTC-03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XPF',
        name: 'CFP franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/pyf.svg',
    name: 'French Polynesia',
    isoCode: 'PF',
    capital: 'Papeetē',
    region: 'Oceania',
    subregion: 'Polynesia',
    latlng: [
      -15,
      -140
    ],
    timezones: [
      'UTC-10:00',
      'UTC-09:30',
      'UTC-09:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/atf.svg',
    name: 'French Southern Territories',
    isoCode: 'TF',
    capital: 'Port-aux-Français',
    region: 'Africa',
    subregion: 'Southern Africa',
    latlng: [
      -49.25,
      69.167
    ],
    timezones: [
      'UTC+05:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XAF',
        name: 'Central African CFA franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/gab.svg',
    name: 'Gabon',
    isoCode: 'GA',
    capital: 'Libreville',
    region: 'Africa',
    subregion: 'Middle Africa',
    latlng: [
      -1,
      11.75
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'GMD',
        name: 'Gambian dalasi',
        symbol: 'D'
      }
    ],
    flag: 'https://restcountries.eu/data/gmb.svg',
    name: 'Gambia',
    isoCode: 'GM',
    capital: 'Banjul',
    region: 'Africa',
    subregion: 'Western Africa',
    latlng: [
      13.46666666,
      -16.56666666
    ],
    timezones: [
      'UTC+00:00'
    ]
  },
  {
    currencies: [
      {
        code: 'GEL',
        name: 'Georgian Lari',
        symbol: 'ლ'
      }
    ],
    flag: 'https://restcountries.eu/data/geo.svg',
    name: 'Georgia',
    isoCode: 'GE',
    capital: 'Tbilisi',
    region: 'Asia',
    subregion: 'Western Asia',
    latlng: [
      42,
      43.5
    ],
    timezones: [
      'UTC-05:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/deu.svg',
    name: 'Germany',
    isoCode: 'DE',
    capital: 'Berlin',
    region: 'Europe',
    subregion: 'Western Europe',
    latlng: [
      51,
      9
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'GHS',
        name: 'Ghanaian cedi',
        symbol: '₵'
      }
    ],
    flag: 'https://restcountries.eu/data/gha.svg',
    name: 'Ghana',
    isoCode: 'GH',
    capital: 'Accra',
    region: 'Africa',
    subregion: 'Western Africa',
    latlng: [
      8,
      -2
    ],
    timezones: [
      'UTC'
    ]
  },
  {
    currencies: [
      {
        code: 'GIP',
        name: 'Gibraltar pound',
        symbol: '£'
      }
    ],
    flag: 'https://restcountries.eu/data/gib.svg',
    name: 'Gibraltar',
    isoCode: 'GI',
    capital: 'Gibraltar',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [
      36.13333333,
      -5.35
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/grc.svg',
    name: 'Greece',
    isoCode: 'GR',
    capital: 'Athens',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [
      39,
      22
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'DKK',
        name: 'Danish krone',
        symbol: 'kr'
      }
    ],
    flag: 'https://restcountries.eu/data/grl.svg',
    name: 'Greenland',
    isoCode: 'GL',
    capital: 'Nuuk',
    region: 'Americas',
    subregion: 'Northern America',
    latlng: [
      72,
      -40
    ],
    timezones: [
      'UTC-04:00',
      'UTC-03:00',
      'UTC-01:00',
      'UTC+00:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XCD',
        name: 'East Caribbean dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/grd.svg',
    name: 'Grenada',
    isoCode: 'GD',
    capital: 'St. George\'s',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      12.11666666,
      -61.66666666
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/glp.svg',
    name: 'Guadeloupe',
    isoCode: 'GP',
    capital: 'Basse-Terre',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      16.25,
      -61.583333
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/gum.svg',
    name: 'Guam',
    isoCode: 'GU',
    capital: 'Hagåtña',
    region: 'Oceania',
    subregion: 'Micronesia',
    latlng: [
      13.46666666,
      144.78333333
    ],
    timezones: [
      'UTC+10:00'
    ]
  },
  {
    currencies: [
      {
        code: 'GTQ',
        name: 'Guatemalan quetzal',
        symbol: 'Q'
      }
    ],
    flag: 'https://restcountries.eu/data/gtm.svg',
    name: 'Guatemala',
    isoCode: 'GT',
    capital: 'Guatemala City',
    region: 'Americas',
    subregion: 'Central America',
    latlng: [
      15.5,
      -90.25
    ],
    timezones: [
      'UTC-06:00'
    ]
  },
  {
    currencies: [
      {
        code: 'GBP',
        name: 'British pound',
        symbol: '£'
      },
      {
        code: '(none)',
        name: 'Guernsey pound',
        symbol: '£'
      }
    ],
    flag: 'https://restcountries.eu/data/ggy.svg',
    name: 'Guernsey',
    isoCode: 'GG',
    capital: 'St. Peter Port',
    region: 'Europe',
    subregion: 'Northern Europe',
    latlng: [
      49.46666666,
      -2.58333333
    ],
    timezones: [
      'UTC+00:00'
    ]
  },
  {
    currencies: [
      {
        code: 'GNF',
        name: 'Guinean franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/gin.svg',
    name: 'Guinea',
    isoCode: 'GN',
    capital: 'Conakry',
    region: 'Africa',
    subregion: 'Western Africa',
    latlng: [
      11,
      -10
    ],
    timezones: [
      'UTC'
    ]
  },
  {
    currencies: [
      {
        code: 'XOF',
        name: 'West African CFA franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/gnb.svg',
    name: 'Guinea-Bissau',
    isoCode: 'GW',
    capital: 'Bissau',
    region: 'Africa',
    subregion: 'Western Africa',
    latlng: [
      12,
      -15
    ],
    timezones: [
      'UTC'
    ]
  },
  {
    currencies: [
      {
        code: 'GYD',
        name: 'Guyanese dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/guy.svg',
    name: 'Guyana',
    isoCode: 'GY',
    capital: 'Georgetown',
    region: 'Americas',
    subregion: 'South America',
    latlng: [
      5,
      -59
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'HTG',
        name: 'Haitian gourde',
        symbol: 'G'
      }
    ],
    flag: 'https://restcountries.eu/data/hti.svg',
    name: 'Haiti',
    isoCode: 'HT',
    capital: 'Port-au-Prince',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      19,
      -72.41666666
    ],
    timezones: [
      'UTC-05:00'
    ]
  },
  {
    currencies: [
      {
        code: 'AUD',
        name: 'Australian dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/hmd.svg',
    name: 'Heard Island and McDonald Islands',
    isoCode: 'HM',
    capital: '',
    region: '',
    subregion: '',
    latlng: [
      -53.1,
      72.51666666
    ],
    timezones: [
      'UTC+05:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/vat.svg',
    name: 'Holy See',
    isoCode: 'VA',
    capital: 'Rome',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [
      41.9,
      12.45
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'HNL',
        name: 'Honduran lempira',
        symbol: 'L'
      }
    ],
    flag: 'https://restcountries.eu/data/hnd.svg',
    name: 'Honduras',
    isoCode: 'HN',
    capital: 'Tegucigalpa',
    region: 'Americas',
    subregion: 'Central America',
    latlng: [
      15,
      -86.5
    ],
    timezones: [
      'UTC-06:00'
    ]
  },
  {
    currencies: [
      {
        code: 'HKD',
        name: 'Hong Kong dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/hkg.svg',
    name: 'Hong Kong',
    isoCode: 'HK',
    capital: 'City of Victoria',
    region: 'Asia',
    subregion: 'Eastern Asia',
    latlng: [
      22.25,
      114.16666666
    ],
    timezones: [
      'UTC+08:00'
    ]
  },
  {
    currencies: [
      {
        code: 'HUF',
        name: 'Hungarian forint',
        symbol: 'Ft'
      }
    ],
    flag: 'https://restcountries.eu/data/hun.svg',
    name: 'Hungary',
    isoCode: 'HU',
    capital: 'Budapest',
    region: 'Europe',
    subregion: 'Eastern Europe',
    latlng: [
      47,
      20
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'ISK',
        name: 'Icelandic króna',
        symbol: 'kr'
      }
    ],
    flag: 'https://restcountries.eu/data/isl.svg',
    name: 'Iceland',
    isoCode: 'IS',
    capital: 'Reykjavík',
    region: 'Europe',
    subregion: 'Northern Europe',
    latlng: [
      65,
      -18
    ],
    timezones: [
      'UTC'
    ]
  },
  {
    currencies: [
      {
        code: 'INR',
        name: 'Indian rupee',
        symbol: '₹'
      }
    ],
    flag: 'https://restcountries.eu/data/ind.svg',
    name: 'India',
    isoCode: 'IN',
    capital: 'New Delhi',
    region: 'Asia',
    subregion: 'Southern Asia',
    latlng: [
      20,
      77
    ],
    timezones: [
      'UTC+05:30'
    ]
  },
  {
    currencies: [
      {
        code: 'IDR',
        name: 'Indonesian rupiah',
        symbol: 'Rp'
      }
    ],
    flag: 'https://restcountries.eu/data/idn.svg',
    name: 'Indonesia',
    isoCode: 'ID',
    capital: 'Jakarta',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    latlng: [
      -5,
      120
    ],
    timezones: [
      'UTC+07:00',
      'UTC+08:00',
      'UTC+09:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XOF',
        name: 'West African CFA franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/civ.svg',
    name: 'Côte d\'Ivoire',
    isoCode: 'CI',
    capital: 'Yamoussoukro',
    region: 'Africa',
    subregion: 'Western Africa',
    latlng: [
      8,
      -5
    ],
    timezones: [
      'UTC'
    ]
  },
  {
    currencies: [
      {
        code: 'IRR',
        name: 'Iranian rial',
        symbol: '﷼'
      }
    ],
    flag: 'https://restcountries.eu/data/irn.svg',
    name: 'Iran (Islamic Republic of)',
    isoCode: 'IR',
    capital: 'Tehran',
    region: 'Asia',
    subregion: 'Southern Asia',
    latlng: [
      32,
      53
    ],
    timezones: [
      'UTC+03:30'
    ]
  },
  {
    currencies: [
      {
        code: 'IQD',
        name: 'Iraqi dinar',
        symbol: 'ع.د'
      }
    ],
    flag: 'https://restcountries.eu/data/irq.svg',
    name: 'Iraq',
    isoCode: 'IQ',
    capital: 'Baghdad',
    region: 'Asia',
    subregion: 'Western Asia',
    latlng: [
      33,
      44
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/irl.svg',
    name: 'Ireland',
    isoCode: 'IE',
    capital: 'Dublin',
    region: 'Europe',
    subregion: 'Northern Europe',
    latlng: [
      53,
      -8
    ],
    timezones: [
      'UTC'
    ]
  },
  {
    currencies: [
      {
        code: 'GBP',
        name: 'British pound',
        symbol: '£'
      },
      {
        code: 'IMP[G]',
        name: 'Manx pound',
        symbol: '£'
      }
    ],
    flag: 'https://restcountries.eu/data/imn.svg',
    name: 'Isle of Man',
    isoCode: 'IM',
    capital: 'Douglas',
    region: 'Europe',
    subregion: 'Northern Europe',
    latlng: [
      54.25,
      -4.5
    ],
    timezones: [
      'UTC+00:00'
    ]
  },
  {
    currencies: [
      {
        code: 'ILS',
        name: 'Israeli new shekel',
        symbol: '₪'
      }
    ],
    flag: 'https://restcountries.eu/data/isr.svg',
    name: 'Israel',
    isoCode: 'IL',
    capital: 'Jerusalem',
    region: 'Asia',
    subregion: 'Western Asia',
    latlng: [
      31.5,
      34.75
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/ita.svg',
    name: 'Italy',
    isoCode: 'IT',
    capital: 'Rome',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [
      42.83333333,
      12.83333333
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'JMD',
        name: 'Jamaican dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/jam.svg',
    name: 'Jamaica',
    isoCode: 'JM',
    capital: 'Kingston',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      18.25,
      -77.5
    ],
    timezones: [
      'UTC-05:00'
    ]
  },
  {
    currencies: [
      {
        code: 'JPY',
        name: 'Japanese yen',
        symbol: '¥'
      }
    ],
    flag: 'https://restcountries.eu/data/jpn.svg',
    name: 'Japan',
    isoCode: 'JP',
    capital: 'Tokyo',
    region: 'Asia',
    subregion: 'Eastern Asia',
    latlng: [
      36,
      138
    ],
    timezones: [
      'UTC+09:00'
    ]
  },
  {
    currencies: [
      {
        code: 'GBP',
        name: 'British pound',
        symbol: '£'
      },
      {
        code: 'JEP[G]',
        name: 'Jersey pound',
        symbol: '£'
      }
    ],
    flag: 'https://restcountries.eu/data/jey.svg',
    name: 'Jersey',
    isoCode: 'JE',
    capital: 'Saint Helier',
    region: 'Europe',
    subregion: 'Northern Europe',
    latlng: [
      49.25,
      -2.16666666
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'JOD',
        name: 'Jordanian dinar',
        symbol: 'د.ا'
      }
    ],
    flag: 'https://restcountries.eu/data/jor.svg',
    name: 'Jordan',
    isoCode: 'JO',
    capital: 'Amman',
    region: 'Asia',
    subregion: 'Western Asia',
    latlng: [
      31,
      36
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'KZT',
        name: 'Kazakhstani tenge'
      }
    ],
    flag: 'https://restcountries.eu/data/kaz.svg',
    name: 'Kazakhstan',
    isoCode: 'KZ',
    capital: 'Astana',
    region: 'Asia',
    subregion: 'Central Asia',
    latlng: [
      48,
      68
    ],
    timezones: [
      'UTC+05:00',
      'UTC+06:00'
    ]
  },
  {
    currencies: [
      {
        code: 'KES',
        name: 'Kenyan shilling',
        symbol: 'Sh'
      }
    ],
    flag: 'https://restcountries.eu/data/ken.svg',
    name: 'Kenya',
    isoCode: 'KE',
    capital: 'Nairobi',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      1,
      38
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'AUD',
        name: 'Australian dollar',
        symbol: '$'
      },
      {
        code: '(none)',
        name: 'Kiribati dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/kir.svg',
    name: 'Kiribati',
    isoCode: 'KI',
    capital: 'South Tarawa',
    region: 'Oceania',
    subregion: 'Micronesia',
    latlng: [
      1.41666666,
      173
    ],
    timezones: [
      'UTC+12:00',
      'UTC+13:00',
      'UTC+14:00'
    ]
  },
  {
    currencies: [
      {
        code: 'KWD',
        name: 'Kuwaiti dinar',
        symbol: 'د.ك'
      }
    ],
    flag: 'https://restcountries.eu/data/kwt.svg',
    name: 'Kuwait',
    isoCode: 'KW',
    capital: 'Kuwait City',
    region: 'Asia',
    subregion: 'Western Asia',
    latlng: [
      29.5,
      45.75
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'KGS',
        name: 'Kyrgyzstani som',
        symbol: 'с'
      }
    ],
    flag: 'https://restcountries.eu/data/kgz.svg',
    name: 'Kyrgyzstan',
    isoCode: 'KG',
    capital: 'Bishkek',
    region: 'Asia',
    subregion: 'Central Asia',
    latlng: [
      41,
      75
    ],
    timezones: [
      'UTC+06:00'
    ]
  },
  {
    currencies: [
      {
        code: 'LAK',
        name: 'Lao kip',
        symbol: '₭'
      }
    ],
    flag: 'https://restcountries.eu/data/lao.svg',
    name: 'Laos',
    isoCode: 'LA',
    capital: 'Vientiane',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    latlng: [
      18,
      105
    ],
    timezones: [
      'UTC+07:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/lva.svg',
    name: 'Latvia',
    isoCode: 'LV',
    capital: 'Riga',
    region: 'Europe',
    subregion: 'Northern Europe',
    latlng: [
      57,
      25
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'LBP',
        name: 'Lebanese pound',
        symbol: 'ل.ل'
      }
    ],
    flag: 'https://restcountries.eu/data/lbn.svg',
    name: 'Lebanon',
    isoCode: 'LB',
    capital: 'Beirut',
    region: 'Asia',
    subregion: 'Western Asia',
    latlng: [
      33.83333333,
      35.83333333
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'LSL',
        name: 'Lesotho loti',
        symbol: 'L'
      },
      {
        code: 'ZAR',
        name: 'South African rand',
        symbol: 'R'
      }
    ],
    flag: 'https://restcountries.eu/data/lso.svg',
    name: 'Lesotho',
    isoCode: 'LS',
    capital: 'Maseru',
    region: 'Africa',
    subregion: 'Southern Africa',
    latlng: [
      -29.5,
      28.5
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'LRD',
        name: 'Liberian dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/lbr.svg',
    name: 'Liberia',
    isoCode: 'LR',
    capital: 'Monrovia',
    region: 'Africa',
    subregion: 'Western Africa',
    latlng: [
      6.5,
      -9.5
    ],
    timezones: [
      'UTC'
    ]
  },
  {
    currencies: [
      {
        code: 'LYD',
        name: 'Libyan dinar',
        symbol: 'ل.د'
      }
    ],
    flag: 'https://restcountries.eu/data/lby.svg',
    name: 'Libya',
    isoCode: 'LY',
    capital: 'Tripoli',
    region: 'Africa',
    subregion: 'Northern Africa',
    latlng: [
      25,
      17
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'CHF',
        name: 'Swiss franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/lie.svg',
    name: 'Liechtenstein',
    isoCode: 'LI',
    capital: 'Vaduz',
    region: 'Europe',
    subregion: 'Western Europe',
    latlng: [
      47.26666666,
      9.53333333
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/ltu.svg',
    name: 'Lithuania',
    isoCode: 'LT',
    capital: 'Vilnius',
    region: 'Europe',
    subregion: 'Northern Europe',
    latlng: [
      56,
      24
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/lux.svg',
    name: 'Luxembourg',
    isoCode: 'LU',
    capital: 'Luxembourg',
    region: 'Europe',
    subregion: 'Western Europe',
    latlng: [
      49.75,
      6.16666666
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'MOP',
        name: 'Macanese pataca',
        symbol: 'P'
      }
    ],
    flag: 'https://restcountries.eu/data/mac.svg',
    name: 'Macao',
    isoCode: 'MO',
    capital: '',
    region: 'Asia',
    subregion: 'Eastern Asia',
    latlng: [
      22.16666666,
      113.55
    ],
    timezones: [
      'UTC+08:00'
    ]
  },
  {
    currencies: [
      {
        code: 'MKD',
        name: 'Macedonian denar',
        symbol: 'ден'
      }
    ],
    flag: 'https://restcountries.eu/data/mkd.svg',
    name: 'Macedonia (the former Yugoslav Republic of)',
    isoCode: 'MK',
    capital: 'Skopje',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [
      41.83333333,
      22
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'MGA',
        name: 'Malagasy ariary',
        symbol: 'Ar'
      }
    ],
    flag: 'https://restcountries.eu/data/mdg.svg',
    name: 'Madagascar',
    isoCode: 'MG',
    capital: 'Antananarivo',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      -20,
      47
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'MWK',
        name: 'Malawian kwacha',
        symbol: 'MK'
      }
    ],
    flag: 'https://restcountries.eu/data/mwi.svg',
    name: 'Malawi',
    isoCode: 'MW',
    capital: 'Lilongwe',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      -13.5,
      34
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'MYR',
        name: 'Malaysian ringgit',
        symbol: 'RM'
      }
    ],
    flag: 'https://restcountries.eu/data/mys.svg',
    name: 'Malaysia',
    isoCode: 'MY',
    capital: 'Kuala Lumpur',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    latlng: [
      2.5,
      112.5
    ],
    timezones: [
      'UTC+08:00'
    ]
  },
  {
    currencies: [
      {
        code: 'MVR',
        name: 'Maldivian rufiyaa',
        symbol: '.ރ'
      }
    ],
    flag: 'https://restcountries.eu/data/mdv.svg',
    name: 'Maldives',
    isoCode: 'MV',
    capital: 'Malé',
    region: 'Asia',
    subregion: 'Southern Asia',
    latlng: [
      3.25,
      73
    ],
    timezones: [
      'UTC+05:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XOF',
        name: 'West African CFA franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/mli.svg',
    name: 'Mali',
    isoCode: 'ML',
    capital: 'Bamako',
    region: 'Africa',
    subregion: 'Western Africa',
    latlng: [
      17,
      -4
    ],
    timezones: [
      'UTC'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/mlt.svg',
    name: 'Malta',
    isoCode: 'MT',
    capital: 'Valletta',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [
      35.83333333,
      14.58333333
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/mhl.svg',
    name: 'Marshall Islands',
    isoCode: 'MH',
    capital: 'Majuro',
    region: 'Oceania',
    subregion: 'Micronesia',
    latlng: [
      9,
      168
    ],
    timezones: [
      'UTC+12:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/mtq.svg',
    name: 'Martinique',
    isoCode: 'MQ',
    capital: 'Fort-de-France',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      14.666667,
      -61
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'MRO',
        name: 'Mauritanian ouguiya',
        symbol: 'UM'
      }
    ],
    flag: 'https://restcountries.eu/data/mrt.svg',
    name: 'Mauritania',
    isoCode: 'MR',
    capital: 'Nouakchott',
    region: 'Africa',
    subregion: 'Western Africa',
    latlng: [
      20,
      -12
    ],
    timezones: [
      'UTC'
    ]
  },
  {
    currencies: [
      {
        code: 'MUR',
        name: 'Mauritian rupee',
        symbol: '₨'
      }
    ],
    flag: 'https://restcountries.eu/data/mus.svg',
    name: 'Mauritius',
    isoCode: 'MU',
    capital: 'Port Louis',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      -20.28333333,
      57.55
    ],
    timezones: [
      'UTC+04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/myt.svg',
    name: 'Mayotte',
    isoCode: 'YT',
    capital: 'Mamoudzou',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      -12.83333333,
      45.16666666
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'MXN',
        name: 'Mexican peso',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/mex.svg',
    name: 'Mexico',
    isoCode: 'MX',
    capital: 'Mexico City',
    region: 'Americas',
    subregion: 'Central America',
    latlng: [
      23,
      -102
    ],
    timezones: [
      'UTC-08:00',
      'UTC-07:00',
      'UTC-06:00'
    ]
  },
  {
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/fsm.svg',
    name: 'Micronesia (Federated States of)',
    isoCode: 'FM',
    capital: 'Palikir',
    region: 'Oceania',
    subregion: 'Micronesia',
    latlng: [
      6.91666666,
      158.25
    ],
    timezones: [
      'UTC+10:00',
      'UTC+11'
    ]
  },
  {
    currencies: [
      {
        code: 'MDL',
        name: 'Moldovan leu',
        symbol: 'L'
      }
    ],
    flag: 'https://restcountries.eu/data/mda.svg',
    name: 'Moldova (Republic of)',
    isoCode: 'MD',
    capital: 'Chișinău',
    region: 'Europe',
    subregion: 'Eastern Europe',
    latlng: [
      47,
      29
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/mco.svg',
    name: 'Monaco',
    isoCode: 'MC',
    capital: 'Monaco',
    region: 'Europe',
    subregion: 'Western Europe',
    latlng: [
      43.73333333,
      7.4
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'MNT',
        name: 'Mongolian tögrög',
        symbol: '₮'
      }
    ],
    flag: 'https://restcountries.eu/data/mng.svg',
    name: 'Mongolia',
    isoCode: 'MN',
    capital: 'Ulan Bator',
    region: 'Asia',
    subregion: 'Eastern Asia',
    latlng: [
      46,
      105
    ],
    timezones: [
      'UTC+07:00',
      'UTC+08:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/mne.svg',
    name: 'Montenegro',
    isoCode: 'ME',
    capital: 'Podgorica',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [
      42.5,
      19.3
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XCD',
        name: 'East Caribbean dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/msr.svg',
    name: 'Montserrat',
    isoCode: 'MS',
    capital: 'Plymouth',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      16.75,
      -62.2
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'MAD',
        name: 'Moroccan dirham',
        symbol: 'د.م.'
      }
    ],
    flag: 'https://restcountries.eu/data/mar.svg',
    name: 'Morocco',
    isoCode: 'MA',
    capital: 'Rabat',
    region: 'Africa',
    subregion: 'Northern Africa',
    latlng: [
      32,
      -5
    ],
    timezones: [
      'UTC'
    ]
  },
  {
    currencies: [
      {
        code: 'MZN',
        name: 'Mozambican metical',
        symbol: 'MT'
      }
    ],
    flag: 'https://restcountries.eu/data/moz.svg',
    name: 'Mozambique',
    isoCode: 'MZ',
    capital: 'Maputo',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      -18.25,
      35
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'MMK',
        name: 'Burmese kyat',
        symbol: 'Ks'
      }
    ],
    flag: 'https://restcountries.eu/data/mmr.svg',
    name: 'Myanmar',
    isoCode: 'MM',
    capital: 'Naypyidaw',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    latlng: [
      22,
      98
    ],
    timezones: [
      'UTC+06:30'
    ]
  },
  {
    currencies: [
      {
        code: 'NAD',
        name: 'Namibian dollar',
        symbol: '$'
      },
      {
        code: 'ZAR',
        name: 'South African rand',
        symbol: 'R'
      }
    ],
    flag: 'https://restcountries.eu/data/nam.svg',
    name: 'Namibia',
    isoCode: 'NA',
    capital: 'Windhoek',
    region: 'Africa',
    subregion: 'Southern Africa',
    latlng: [
      -22,
      17
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'AUD',
        name: 'Australian dollar',
        symbol: '$'
      },
    ],
    flag: 'https://restcountries.eu/data/nru.svg',
    name: 'Nauru',
    isoCode: 'NR',
    capital: 'Yaren',
    region: 'Oceania',
    subregion: 'Micronesia',
    latlng: [
      -0.53333333,
      166.91666666
    ],
    timezones: [
      'UTC+12:00'
    ]
  },
  {
    currencies: [
      {
        code: 'NPR',
        name: 'Nepalese rupee',
        symbol: '₨'
      }
    ],
    flag: 'https://restcountries.eu/data/npl.svg',
    name: 'Nepal',
    isoCode: 'NP',
    capital: 'Kathmandu',
    region: 'Asia',
    subregion: 'Southern Asia',
    latlng: [
      28,
      84
    ],
    timezones: [
      'UTC+05:45'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/nld.svg',
    name: 'Netherlands',
    isoCode: 'NL',
    capital: 'Amsterdam',
    region: 'Europe',
    subregion: 'Western Europe',
    latlng: [
      52.5,
      5.75
    ],
    timezones: [
      'UTC-04:00',
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XPF',
        name: 'CFP franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/ncl.svg',
    name: 'New Caledonia',
    isoCode: 'NC',
    capital: 'Nouméa',
    region: 'Oceania',
    subregion: 'Melanesia',
    latlng: [
      -21.5,
      165.5
    ],
    timezones: [
      'UTC+11:00'
    ]
  },
  {
    currencies: [
      {
        code: 'NZD',
        name: 'New Zealand dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/nzl.svg',
    name: 'New Zealand',
    isoCode: 'NZ',
    capital: 'Wellington',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    latlng: [
      -41,
      174
    ],
    timezones: [
      'UTC-11:00',
      'UTC-10:00',
      'UTC+12:00',
      'UTC+12:45',
      'UTC+13:00'
    ]
  },
  {
    currencies: [
      {
        code: 'NIO',
        name: 'Nicaraguan córdoba',
        symbol: 'C$'
      }
    ],
    flag: 'https://restcountries.eu/data/nic.svg',
    name: 'Nicaragua',
    isoCode: 'NI',
    capital: 'Managua',
    region: 'Americas',
    subregion: 'Central America',
    latlng: [
      13,
      -85
    ],
    timezones: [
      'UTC-06:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XOF',
        name: 'West African CFA franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/ner.svg',
    name: 'Niger',
    isoCode: 'NE',
    capital: 'Niamey',
    region: 'Africa',
    subregion: 'Western Africa',
    latlng: [
      16,
      8
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'NGN',
        name: 'Nigerian naira',
        symbol: '₦'
      }
    ],
    flag: 'https://restcountries.eu/data/nga.svg',
    name: 'Nigeria',
    isoCode: 'NG',
    capital: 'Abuja',
    region: 'Africa',
    subregion: 'Western Africa',
    latlng: [
      10,
      8
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'NZD',
        name: 'New Zealand dollar',
        symbol: '$'
      },
      {
        code: '(none)',
        name: 'Niue dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/niu.svg',
    name: 'Niue',
    isoCode: 'NU',
    capital: 'Alofi',
    region: 'Oceania',
    subregion: 'Polynesia',
    latlng: [
      -19.03333333,
      -169.86666666
    ],
    timezones: [
      'UTC-11:00'
    ]
  },
  {
    currencies: [
      {
        code: 'AUD',
        name: 'Australian dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/nfk.svg',
    name: 'Norfolk Island',
    isoCode: 'NF',
    capital: 'Kingston',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    latlng: [
      -29.03333333,
      167.95
    ],
    timezones: [
      'UTC+11:30'
    ]
  },
  {
    currencies: [
      {
        code: 'KPW',
        name: 'North Korean won',
        symbol: '₩'
      }
    ],
    flag: 'https://restcountries.eu/data/prk.svg',
    name: 'North Korea',
    isoCode: 'KP',
    capital: 'Pyongyang',
    region: 'Asia',
    subregion: 'Eastern Asia',
    latlng: [
      40,
      127
    ],
    timezones: [
      'UTC+09:00'
    ]
  },
  {
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/mnp.svg',
    name: 'Northern Mariana Islands',
    isoCode: 'MP',
    capital: 'Saipan',
    region: 'Oceania',
    subregion: 'Micronesia',
    latlng: [
      15.2,
      145.75
    ],
    timezones: [
      'UTC+10:00'
    ]
  },
  {
    currencies: [
      {
        code: 'NOK',
        name: 'Norwegian krone',
        symbol: 'kr'
      }
    ],
    flag: 'https://restcountries.eu/data/nor.svg',
    name: 'Norway',
    isoCode: 'NO',
    capital: 'Oslo',
    region: 'Europe',
    subregion: 'Northern Europe',
    latlng: [
      62,
      10
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'OMR',
        name: 'Omani rial',
        symbol: 'ر.ع.'
      }
    ],
    flag: 'https://restcountries.eu/data/omn.svg',
    name: 'Oman',
    isoCode: 'OM',
    capital: 'Muscat',
    region: 'Asia',
    subregion: 'Western Asia',
    latlng: [
      21,
      57
    ],
    timezones: [
      'UTC+04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'PKR',
        name: 'Pakistani rupee',
        symbol: '₨'
      }
    ],
    flag: 'https://restcountries.eu/data/pak.svg',
    name: 'Pakistan',
    isoCode: 'PK',
    capital: 'Islamabad',
    region: 'Asia',
    subregion: 'Southern Asia',
    latlng: [
      30,
      70
    ],
    timezones: [
      'UTC+05:00'
    ]
  },
  {
    currencies: [
      {
        code: '(none)',
        name: '[E]',
        symbol: '$'
      },
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/plw.svg',
    name: 'Palau',
    isoCode: 'PW',
    capital: 'Ngerulmud',
    region: 'Oceania',
    subregion: 'Micronesia',
    latlng: [
      7.5,
      134.5
    ],
    timezones: [
      'UTC+09:00'
    ]
  },
  {
    currencies: [
      {
        code: 'ILS',
        name: 'Israeli new sheqel',
        symbol: '₪'
      }
    ],
    flag: 'https://restcountries.eu/data/pse.svg',
    name: 'Palestine',
    isoCode: 'PS',
    capital: 'Ramallah',
    region: 'Asia',
    subregion: 'Western Asia',
    latlng: [
      31.9,
      35.2
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'PAB',
        name: 'Panamanian balboa',
        symbol: 'B/.'
      },
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/pan.svg',
    name: 'Panama',
    isoCode: 'PA',
    capital: 'Panama City',
    region: 'Americas',
    subregion: 'Central America',
    latlng: [
      9,
      -80
    ],
    timezones: [
      'UTC-05:00'
    ]
  },
  {
    currencies: [
      {
        code: 'PGK',
        name: 'Papua New Guinean kina',
        symbol: 'K'
      }
    ],
    flag: 'https://restcountries.eu/data/png.svg',
    name: 'Papua New Guinea',
    isoCode: 'PG',
    capital: 'Port Moresby',
    region: 'Oceania',
    subregion: 'Melanesia',
    latlng: [
      -6,
      147
    ],
    timezones: [
      'UTC+10:00'
    ]
  },
  {
    currencies: [
      {
        code: 'PYG',
        name: 'Paraguayan guaraní',
        symbol: '₲'
      }
    ],
    flag: 'https://restcountries.eu/data/pry.svg',
    name: 'Paraguay',
    isoCode: 'PY',
    capital: 'Asunción',
    region: 'Americas',
    subregion: 'South America',
    latlng: [
      -23,
      -58
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'PEN',
        name: 'Peruvian sol',
        symbol: 'S/.'
      }
    ],
    flag: 'https://restcountries.eu/data/per.svg',
    name: 'Peru',
    isoCode: 'PE',
    capital: 'Lima',
    region: 'Americas',
    subregion: 'South America',
    latlng: [
      -10,
      -76
    ],
    timezones: [
      'UTC-05:00'
    ]
  },
  {
    currencies: [
      {
        code: 'PHP',
        name: 'Philippine peso',
        symbol: '₱'
      }
    ],
    flag: 'https://restcountries.eu/data/phl.svg',
    name: 'Philippines',
    isoCode: 'PH',
    capital: 'Manila',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    latlng: [
      13,
      122
    ],
    timezones: [
      'UTC+08:00'
    ]
  },
  {
    currencies: [
      {
        code: 'NZD',
        name: 'New Zealand dollar',
        symbol: '$'
      },
    ],
    flag: 'https://restcountries.eu/data/pcn.svg',
    name: 'Pitcairn',
    isoCode: 'PN',
    capital: 'Adamstown',
    region: 'Oceania',
    subregion: 'Polynesia',
    latlng: [
      -25.06666666,
      -130.1
    ],
    timezones: [
      'UTC-08:00'
    ]
  },
  {
    currencies: [
      {
        code: 'PLN',
        name: 'Polish złoty',
        symbol: 'zł'
      }
    ],
    flag: 'https://restcountries.eu/data/pol.svg',
    name: 'Poland',
    isoCode: 'PL',
    capital: 'Warsaw',
    region: 'Europe',
    subregion: 'Eastern Europe',
    latlng: [
      52,
      20
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/prt.svg',
    name: 'Portugal',
    isoCode: 'PT',
    capital: 'Lisbon',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [
      39.5,
      -8
    ],
    timezones: [
      'UTC-01:00',
      'UTC'
    ]
  },
  {
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/pri.svg',
    name: 'Puerto Rico',
    isoCode: 'PR',
    capital: 'San Juan',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      18.25,
      -66.5
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'QAR',
        name: 'Qatari riyal',
        symbol: 'ر.ق'
      }
    ],
    flag: 'https://restcountries.eu/data/qat.svg',
    name: 'Qatar',
    isoCode: 'QA',
    capital: 'Doha',
    region: 'Asia',
    subregion: 'Western Asia',
    latlng: [
      25.5,
      51.25
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/kos.svg',
    name: 'Republic of Kosovo',
    isoCode: 'XK',
    capital: 'Pristina',
    region: 'Europe',
    subregion: 'Eastern Europe',
    latlng: [
      42.666667,
      21.166667
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/reu.svg',
    name: 'Réunion',
    isoCode: 'RE',
    capital: 'Saint-Denis',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      -21.15,
      55.5
    ],
    timezones: [
      'UTC+04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'RON',
        name: 'Romanian leu',
        symbol: 'lei'
      }
    ],
    flag: 'https://restcountries.eu/data/rou.svg',
    name: 'Romania',
    isoCode: 'RO',
    capital: 'Bucharest',
    region: 'Europe',
    subregion: 'Eastern Europe',
    latlng: [
      46,
      25
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'RUB',
        name: 'Russian ruble',
        symbol: '₽'
      }
    ],
    flag: 'https://restcountries.eu/data/rus.svg',
    name: 'Russian Federation',
    isoCode: 'RU',
    capital: 'Moscow',
    region: 'Europe',
    subregion: 'Eastern Europe',
    latlng: [
      60,
      100
    ],
    timezones: [
      'UTC+03:00',
      'UTC+04:00',
      'UTC+06:00',
      'UTC+07:00',
      'UTC+08:00',
      'UTC+09:00',
      'UTC+10:00',
      'UTC+11:00',
      'UTC+12:00'
    ]
  },
  {
    currencies: [
      {
        code: 'RWF',
        name: 'Rwandan franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/rwa.svg',
    name: 'Rwanda',
    isoCode: 'RW',
    capital: 'Kigali',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      -2,
      30
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/blm.svg',
    name: 'Saint Barthélemy',
    isoCode: 'BL',
    capital: 'Gustavia',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      18.5,
      -63.41666666
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'SHP',
        name: 'Saint Helena pound',
        symbol: '£'
      }
    ],
    flag: 'https://restcountries.eu/data/shn.svg',
    name: 'Saint Helena',
    isoCode: 'SH',
    capital: 'Jamestown',
    region: 'Africa',
    subregion: 'Western Africa',
    latlng: [
      -15.95,
      -5.7
    ],
    timezones: [
      'UTC+00:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XCD',
        name: 'East Caribbean dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/kna.svg',
    name: 'Saint Kitts and Nevis',
    isoCode: 'KN',
    capital: 'Basseterre',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      17.33333333,
      -62.75
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XCD',
        name: 'East Caribbean dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/lca.svg',
    name: 'Saint Lucia',
    isoCode: 'LC',
    capital: 'Castries',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      13.88333333,
      -60.96666666
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/maf.svg',
    name: 'Saint Martin (French part)',
    isoCode: 'MF',
    capital: 'Marigot',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      18.08333333,
      -63.95
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/spm.svg',
    name: 'Saint Pierre and Miquelon',
    isoCode: 'PM',
    capital: 'Saint-Pierre',
    region: 'Americas',
    subregion: 'Northern America',
    latlng: [
      46.83333333,
      -56.33333333
    ],
    timezones: [
      'UTC-03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XCD',
        name: 'East Caribbean dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/vct.svg',
    name: 'Saint Vincent and the Grenadines',
    isoCode: 'VC',
    capital: 'Kingstown',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      13.25,
      -61.2
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'WST',
        name: 'Samoan tālā',
        symbol: 'T'
      }
    ],
    flag: 'https://restcountries.eu/data/wsm.svg',
    name: 'Samoa',
    isoCode: 'WS',
    capital: 'Apia',
    region: 'Oceania',
    subregion: 'Polynesia',
    latlng: [
      -13.58333333,
      -172.33333333
    ],
    timezones: [
      'UTC+13:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/smr.svg',
    name: 'San Marino',
    isoCode: 'SM',
    capital: 'City of San Marino',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [
      43.76666666,
      12.41666666
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'STD',
        name: 'São Tomé and Príncipe dobra',
        symbol: 'Db'
      }
    ],
    flag: 'https://restcountries.eu/data/stp.svg',
    name: 'Sao Tome and Principe',
    isoCode: 'ST',
    capital: 'São Tomé',
    region: 'Africa',
    subregion: 'Middle Africa',
    latlng: [
      1,
      7
    ],
    timezones: [
      'UTC'
    ]
  },
  {
    currencies: [
      {
        code: 'SAR',
        name: 'Saudi riyal',
        symbol: 'ر.س'
      }
    ],
    flag: 'https://restcountries.eu/data/sau.svg',
    name: 'Saudi Arabia',
    isoCode: 'SA',
    capital: 'Riyadh',
    region: 'Asia',
    subregion: 'Western Asia',
    latlng: [
      25,
      45
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XOF',
        name: 'West African CFA franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/sen.svg',
    name: 'Senegal',
    isoCode: 'SN',
    capital: 'Dakar',
    region: 'Africa',
    subregion: 'Western Africa',
    latlng: [
      14,
      -14
    ],
    timezones: [
      'UTC'
    ]
  },
  {
    currencies: [
      {
        code: 'RSD',
        name: 'Serbian dinar',
        symbol: 'дин.'
      }
    ],
    flag: 'https://restcountries.eu/data/srb.svg',
    name: 'Serbia',
    isoCode: 'RS',
    capital: 'Belgrade',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [
      44,
      21
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'SCR',
        name: 'Seychellois rupee',
        symbol: '₨'
      }
    ],
    flag: 'https://restcountries.eu/data/syc.svg',
    name: 'Seychelles',
    isoCode: 'SC',
    capital: 'Victoria',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      -4.58333333,
      55.66666666
    ],
    timezones: [
      'UTC+04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'SLL',
        name: 'Sierra Leonean leone',
        symbol: 'Le'
      }
    ],
    flag: 'https://restcountries.eu/data/sle.svg',
    name: 'Sierra Leone',
    isoCode: 'SL',
    capital: 'Freetown',
    region: 'Africa',
    subregion: 'Western Africa',
    latlng: [
      8.5,
      -11.5
    ],
    timezones: [
      'UTC'
    ]
  },
  {
    currencies: [
      {
        code: 'BND',
        name: 'Brunei dollar',
        symbol: '$'
      },
      {
        code: 'SGD',
        name: 'Singapore dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/sgp.svg',
    name: 'Singapore',
    isoCode: 'SG',
    capital: 'Singapore',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    latlng: [
      1.36666666,
      103.8
    ],
    timezones: [
      'UTC+08:00'
    ]
  },
  {
    currencies: [
      {
        code: 'ANG',
        name: 'Netherlands Antillean guilder',
        symbol: 'ƒ'
      }
    ],
    flag: 'https://restcountries.eu/data/sxm.svg',
    name: 'Sint Maarten (Dutch part)',
    isoCode: 'SX',
    capital: 'Philipsburg',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      18.033333,
      -63.05
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/svk.svg',
    name: 'Slovakia',
    isoCode: 'SK',
    capital: 'Bratislava',
    region: 'Europe',
    subregion: 'Eastern Europe',
    latlng: [
      48.66666666,
      19.5
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/svn.svg',
    name: 'Slovenia',
    isoCode: 'SI',
    capital: 'Ljubljana',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [
      46.11666666,
      14.81666666
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'SBD',
        name: 'Solomon Islands dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/slb.svg',
    name: 'Solomon Islands',
    isoCode: 'SB',
    capital: 'Honiara',
    region: 'Oceania',
    subregion: 'Melanesia',
    latlng: [
      -8,
      159
    ],
    timezones: [
      'UTC+11:00'
    ]
  },
  {
    currencies: [
      {
        code: 'SOS',
        name: 'Somali shilling',
        symbol: 'Sh'
      }
    ],
    flag: 'https://restcountries.eu/data/som.svg',
    name: 'Somalia',
    isoCode: 'SO',
    capital: 'Mogadishu',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      10,
      49
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'ZAR',
        name: 'South African rand',
        symbol: 'R'
      }
    ],
    flag: 'https://restcountries.eu/data/zaf.svg',
    name: 'South Africa',
    isoCode: 'ZA',
    capital: 'Pretoria',
    region: 'Africa',
    subregion: 'Southern Africa',
    latlng: [
      -29,
      24
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'GBP',
        name: 'British pound',
        symbol: '£'
      },
    ],
    flag: 'https://restcountries.eu/data/sgs.svg',
    name: 'South Georgia and the South Sandwich Islands',
    isoCode: 'GS',
    capital: 'King Edward Point',
    region: 'Americas',
    subregion: 'South America',
    latlng: [
      -54.5,
      -37
    ],
    timezones: [
      'UTC-02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'KRW',
        name: 'South Korean won',
        symbol: '₩'
      }
    ],
    flag: 'https://restcountries.eu/data/kor.svg',
    name: 'South Korea',
    isoCode: 'KR',
    capital: 'Seoul',
    region: 'Asia',
    subregion: 'Eastern Asia',
    latlng: [
      37,
      127.5
    ],
    timezones: [
      'UTC+09:00'
    ]
  },
  {
    currencies: [
      {
        code: 'SSP',
        name: 'South Sudanese pound',
        symbol: '£'
      }
    ],
    flag: 'https://restcountries.eu/data/ssd.svg',
    name: 'South Sudan',
    isoCode: 'SS',
    capital: 'Juba',
    region: 'Africa',
    subregion: 'Middle Africa',
    latlng: [
      7,
      30
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }
    ],
    flag: 'https://restcountries.eu/data/esp.svg',
    name: 'Spain',
    isoCode: 'ES',
    capital: 'Madrid',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [
      40,
      -4
    ],
    timezones: [
      'UTC',
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'LKR',
        name: 'Sri Lankan rupee',
        symbol: 'Rs'
      }
    ],
    flag: 'https://restcountries.eu/data/lka.svg',
    name: 'Sri Lanka',
    isoCode: 'LK',
    capital: 'Colombo',
    region: 'Asia',
    subregion: 'Southern Asia',
    latlng: [
      7,
      81
    ],
    timezones: [
      'UTC+05:30'
    ]
  },
  {
    currencies: [
      {
        code: 'SDG',
        name: 'Sudanese pound',
        symbol: 'ج.س.'
      }
    ],
    flag: 'https://restcountries.eu/data/sdn.svg',
    name: 'Sudan',
    isoCode: 'SD',
    capital: 'Khartoum',
    region: 'Africa',
    subregion: 'Northern Africa',
    latlng: [
      15,
      30
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'SRD',
        name: 'Surinamese dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/sur.svg',
    name: 'Suriname',
    isoCode: 'SR',
    capital: 'Paramaribo',
    region: 'Americas',
    subregion: 'South America',
    latlng: [
      4,
      -56
    ],
    timezones: [
      'UTC-03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'NOK',
        name: 'Norwegian krone',
        symbol: 'kr'
      }
    ],
    flag: 'https://restcountries.eu/data/sjm.svg',
    name: 'Svalbard and Jan Mayen',
    isoCode: 'SJ',
    capital: 'Longyearbyen',
    region: 'Europe',
    subregion: 'Northern Europe',
    latlng: [
      78,
      20
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'SZL',
        name: 'Swazi lilangeni',
        symbol: 'L'
      }
    ],
    flag: 'https://restcountries.eu/data/swz.svg',
    name: 'Swaziland',
    isoCode: 'SZ',
    capital: 'Lobamba',
    region: 'Africa',
    subregion: 'Southern Africa',
    latlng: [
      -26.5,
      31.5
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'SEK',
        name: 'Swedish krona',
        symbol: 'kr'
      }
    ],
    flag: 'https://restcountries.eu/data/swe.svg',
    name: 'Sweden',
    isoCode: 'SE',
    capital: 'Stockholm',
    region: 'Europe',
    subregion: 'Northern Europe',
    latlng: [
      62,
      15
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'CHF',
        name: 'Swiss franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/che.svg',
    name: 'Switzerland',
    isoCode: 'CH',
    capital: 'Bern',
    region: 'Europe',
    subregion: 'Western Europe',
    latlng: [
      47,
      8
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'SYP',
        name: 'Syrian pound',
        symbol: '£'
      }
    ],
    flag: 'https://restcountries.eu/data/syr.svg',
    name: 'Syrian Arab Republic',
    isoCode: 'SY',
    capital: 'Damascus',
    region: 'Asia',
    subregion: 'Western Asia',
    latlng: [
      35,
      38
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'TWD',
        name: 'New Taiwan dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/twn.svg',
    name: 'Taiwan',
    isoCode: 'TW',
    capital: 'Taipei',
    region: 'Asia',
    subregion: 'Eastern Asia',
    latlng: [
      23.5,
      121
    ],
    timezones: [
      'UTC+08:00'
    ]
  },
  {
    currencies: [
      {
        code: 'TJS',
        name: 'Tajikistani somoni',
        symbol: 'ЅМ'
      }
    ],
    flag: 'https://restcountries.eu/data/tjk.svg',
    name: 'Tajikistan',
    isoCode: 'TJ',
    capital: 'Dushanbe',
    region: 'Asia',
    subregion: 'Central Asia',
    latlng: [
      39,
      71
    ],
    timezones: [
      'UTC+05:00'
    ]
  },
  {
    currencies: [
      {
        code: 'TZS',
        name: 'Tanzanian shilling',
        symbol: 'Sh'
      }
    ],
    flag: 'https://restcountries.eu/data/tza.svg',
    name: 'Tanzania',
    isoCode: 'TZ',
    capital: 'Dodoma',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      -6,
      35
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'THB',
        name: 'Thai baht',
        symbol: '฿'
      }
    ],
    flag: 'https://restcountries.eu/data/tha.svg',
    name: 'Thailand',
    isoCode: 'TH',
    capital: 'Bangkok',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    latlng: [
      15,
      100
    ],
    timezones: [
      'UTC+07:00'
    ]
  },
  {
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      },
    ],
    flag: 'https://restcountries.eu/data/tls.svg',
    name: 'Timor-Leste',
    isoCode: 'TL',
    capital: 'Dili',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    latlng: [
      -8.83333333,
      125.91666666
    ],
    timezones: [
      'UTC+09:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XOF',
        name: 'West African CFA franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/tgo.svg',
    name: 'Togo',
    isoCode: 'TG',
    capital: 'Lomé',
    region: 'Africa',
    subregion: 'Western Africa',
    latlng: [
      8,
      1.16666666
    ],
    timezones: [
      'UTC'
    ]
  },
  {
    currencies: [
      {
        code: 'NZD',
        name: 'New Zealand dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/tkl.svg',
    name: 'Tokelau',
    isoCode: 'TK',
    capital: 'Fakaofo',
    region: 'Oceania',
    subregion: 'Polynesia',
    latlng: [
      -9,
      -172
    ],
    timezones: [
      'UTC+13:00'
    ]
  },
  {
    currencies: [
      {
        code: 'TOP',
        name: 'Tongan paʻanga',
        symbol: 'T$'
      }
    ],
    flag: 'https://restcountries.eu/data/ton.svg',
    name: 'Tonga',
    isoCode: 'TO',
    capital: 'Nuku\'alofa',
    region: 'Oceania',
    subregion: 'Polynesia',
    latlng: [
      -20,
      -175
    ],
    timezones: [
      'UTC+13:00'
    ]
  },
  {
    currencies: [
      {
        code: 'TTD',
        name: 'Trinidad and Tobago dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/tto.svg',
    name: 'Trinidad and Tobago',
    isoCode: 'TT',
    capital: 'Port of Spain',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      11,
      -61
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'TND',
        name: 'Tunisian dinar',
        symbol: 'د.ت'
      }
    ],
    flag: 'https://restcountries.eu/data/tun.svg',
    name: 'Tunisia',
    isoCode: 'TN',
    capital: 'Tunis',
    region: 'Africa',
    subregion: 'Northern Africa',
    latlng: [
      34,
      9
    ],
    timezones: [
      'UTC+01:00'
    ]
  },
  {
    currencies: [
      {
        code: 'TRY',
        name: 'Turkish lira'
      }
    ],
    flag: 'https://restcountries.eu/data/tur.svg',
    name: 'Turkey',
    isoCode: 'TR',
    capital: 'Ankara',
    region: 'Asia',
    subregion: 'Western Asia',
    latlng: [
      39,
      35
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'TMT',
        name: 'Turkmenistan manat',
        symbol: 'm'
      }
    ],
    flag: 'https://restcountries.eu/data/tkm.svg',
    name: 'Turkmenistan',
    isoCode: 'TM',
    capital: 'Ashgabat',
    region: 'Asia',
    subregion: 'Central Asia',
    latlng: [
      40,
      60
    ],
    timezones: [
      'UTC+05:00'
    ]
  },
  {
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/tca.svg',
    name: 'Turks and Caicos Islands',
    isoCode: 'TC',
    capital: 'Cockburn Town',
    region: 'Americas',
    subregion: 'Caribbean',
    latlng: [
      21.75,
      -71.58333333
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'AUD',
        name: 'Australian dollar',
        symbol: '$'
      },
      {
        code: 'TVD[G]',
        name: 'Tuvaluan dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/tuv.svg',
    name: 'Tuvalu',
    isoCode: 'TV',
    capital: 'Funafuti',
    region: 'Oceania',
    subregion: 'Polynesia',
    latlng: [
      -8,
      178
    ],
    timezones: [
      'UTC+12:00'
    ]
  },
  {
    currencies: [
      {
        code: 'UGX',
        name: 'Ugandan shilling',
        symbol: 'Sh'
      }
    ],
    flag: 'https://restcountries.eu/data/uga.svg',
    name: 'Uganda',
    isoCode: 'UG',
    capital: 'Kampala',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      1,
      32
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'UAH',
        name: 'Ukrainian hryvnia',
        symbol: '₴'
      }
    ],
    flag: 'https://restcountries.eu/data/ukr.svg',
    name: 'Ukraine',
    isoCode: 'UA',
    capital: 'Kiev',
    region: 'Europe',
    subregion: 'Eastern Europe',
    latlng: [
      49,
      32
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'AED',
        name: 'United Arab Emirates dirham',
        symbol: 'د.إ'
      }
    ],
    flag: 'https://restcountries.eu/data/are.svg',
    name: 'United Arab Emirates',
    isoCode: 'AE',
    capital: 'Abu Dhabi',
    region: 'Asia',
    subregion: 'Western Asia',
    latlng: [
      24,
      54
    ],
    timezones: [
      'UTC+04'
    ]
  },
  {
    currencies: [
      {
        code: 'GBP',
        name: 'British pound',
        symbol: '£'
      }
    ],
    flag: 'https://restcountries.eu/data/gbr.svg',
    name: 'United Kingdom / Great Britain',
    isoCode: 'GB',
    capital: 'London',
    region: 'Europe',
    subregion: 'Northern Europe',
    latlng: [
      54,
      -2
    ],
    timezones: [
      'UTC-08:00',
      'UTC-05:00',
      'UTC-04:00',
      'UTC-03:00',
      'UTC-02:00',
      'UTC',
      'UTC+01:00',
      'UTC+02:00',
      'UTC+06:00'
    ]
  },
  {
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/usa.svg',
    name: 'USA / United States of America',
    isoCode: 'US',
    capital: 'Washington, D.C.',
    region: 'Americas',
    subregion: 'Northern America',
    latlng: [
      38,
      -97
    ],
    timezones: [
      'UTC-12:00',
      'UTC-11:00',
      'UTC-10:00',
      'UTC-09:00',
      'UTC-08:00',
      'UTC-07:00',
      'UTC-06:00',
      'UTC-05:00',
      'UTC-04:00',
      'UTC+10:00',
      'UTC+12:00'
    ]
  },
  {
    currencies: [
      {
        code: 'UYU',
        name: 'Uruguayan peso',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/ury.svg',
    name: 'Uruguay',
    isoCode: 'UY',
    capital: 'Montevideo',
    region: 'Americas',
    subregion: 'South America',
    latlng: [
      -33,
      -56
    ],
    timezones: [
      'UTC-03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'UZS',
        name: 'Uzbekistani so\'m'
      }
    ],
    flag: 'https://restcountries.eu/data/uzb.svg',
    name: 'Uzbekistan',
    isoCode: 'UZ',
    capital: 'Tashkent',
    region: 'Asia',
    subregion: 'Central Asia',
    latlng: [
      41,
      64
    ],
    timezones: [
      'UTC+05:00'
    ]
  },
  {
    currencies: [
      {
        code: 'VUV',
        name: 'Vanuatu vatu',
        symbol: 'Vt'
      }
    ],
    flag: 'https://restcountries.eu/data/vut.svg',
    name: 'Vanuatu',
    isoCode: 'VU',
    capital: 'Port Vila',
    region: 'Oceania',
    subregion: 'Melanesia',
    latlng: [
      -16,
      167
    ],
    timezones: [
      'UTC+11:00'
    ]
  },
  {
    currencies: [
      {
        code: 'VEF',
        name: 'Venezuelan bolívar',
        symbol: 'Bs F'
      }
    ],
    flag: 'https://restcountries.eu/data/ven.svg',
    name: 'Venezuela (Bolivarian Republic of)',
    isoCode: 'VE',
    capital: 'Caracas',
    region: 'Americas',
    subregion: 'South America',
    latlng: [
      8,
      -66
    ],
    timezones: [
      'UTC-04:00'
    ]
  },
  {
    currencies: [
      {
        code: 'VND',
        name: 'Vietnamese đồng',
        symbol: '₫'
      }
    ],
    flag: 'https://restcountries.eu/data/vnm.svg',
    name: 'Viet Nam',
    isoCode: 'VN',
    capital: 'Hanoi',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    latlng: [
      16.16666666,
      107.83333333
    ],
    timezones: [
      'UTC+07:00'
    ]
  },
  {
    currencies: [
      {
        code: 'XPF',
        name: 'CFP franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/wlf.svg',
    name: 'Wallis and Futuna',
    isoCode: 'WF',
    capital: 'Mata-Utu',
    region: 'Oceania',
    subregion: 'Polynesia',
    latlng: [
      -13.3,
      -176.2
    ],
    timezones: [
      'UTC+12:00'
    ]
  },
  {
    currencies: [
      {
        code: 'MAD',
        name: 'Moroccan dirham',
        symbol: 'د.م.'
      },
      {
        code: 'DZD',
        name: 'Algerian dinar',
        symbol: 'د.ج'
      }
    ],
    flag: 'https://restcountries.eu/data/esh.svg',
    name: 'Western Sahara',
    isoCode: 'EH',
    capital: 'El Aaiún',
    region: 'Africa',
    subregion: 'Northern Africa',
    latlng: [
      24.5,
      -13
    ],
    timezones: [
      'UTC+00:00'
    ]
  },
  {
    currencies: [
      {
        code: 'YER',
        name: 'Yemeni rial',
        symbol: '﷼'
      }
    ],
    flag: 'https://restcountries.eu/data/yem.svg',
    name: 'Yemen',
    isoCode: 'YE',
    capital: 'Sana\'a',
    region: 'Asia',
    subregion: 'Western Asia',
    latlng: [
      15,
      48
    ],
    timezones: [
      'UTC+03:00'
    ]
  },
  {
    currencies: [
      {
        code: 'ZMW',
        name: 'Zambian kwacha',
        symbol: 'ZK'
      }
    ],
    flag: 'https://restcountries.eu/data/zmb.svg',
    name: 'Zambia',
    isoCode: 'ZM',
    capital: 'Lusaka',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      -15,
      30
    ],
    timezones: [
      'UTC+02:00'
    ]
  },
  {
    currencies: [
      {
        code: 'BWP',
        name: 'Botswana pula',
        symbol: 'P'
      },
      {
        code: 'GBP',
        name: 'British pound',
        symbol: '£'
      },
      {
        code: 'CNY',
        name: 'Chinese yuan',
        symbol: '¥'
      },
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      },
      {
        code: 'INR',
        name: 'Indian rupee',
        symbol: '₹'
      },
      {
        code: 'JPY',
        name: 'Japanese yen',
        symbol: '¥'
      },
      {
        code: 'ZAR',
        name: 'South African rand',
        symbol: 'Rs'
      },
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      },
    ],
    flag: 'https://restcountries.eu/data/zwe.svg',
    name: 'Zimbabwe',
    isoCode: 'ZW',
    capital: 'Harare',
    region: 'Africa',
    subregion: 'Eastern Africa',
    latlng: [
      -20,
      30
    ],
    timezones: [
      'UTC+02:00'
    ]
  }
];
