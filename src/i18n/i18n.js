import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import enTranslation from '../local/en.json'
import trTranslation from '../local/tr.json'
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    
    resources: {
      en: { translation: enTranslation },
      tr: { translation: trTranslation }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;