import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enTranslation from '@assets/i18n/en.json';
import ptTranslation from '@assets/i18n/pt.json';

// TODO - Define the languages you want to support
const resources = {
  en: {
    translation: enTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
};

// * i18n initialization
i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    //debug: false,
    lng: 'en',
    fallbackLng: 'en',
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'b', 'p'],
    },
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
