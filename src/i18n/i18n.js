import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enJSON from '../constative/en.json'
import trJSON from '../constative/tr.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    tr: { ...trJSON },
  },
  lng: "en",
});