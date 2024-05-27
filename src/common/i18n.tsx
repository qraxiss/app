import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEn from "common/locales/en.json";
import translationSp from "common/locales/sp.json";
import translationGr from "common/locales/gr.json";
import translationIt from "common/locales/it.json";
import translationRu from "common/locales/ru.json";
import translationCh from "common/locales/ch.json";
import translationFr from "common/locales/fr.json";
import translationAr from "common/locales/ar.json";

const resources = {
  en: {
    translation: translationEn,
  },
  sp: {
    translation: translationSp,
  },
  gr: {
    translation: translationGr,
  },
  it: {
    translation: translationIt,
  },
  ru: {
    translation: translationRu,
  },
  ch: {
    translation: translationCh,
  },
  fr: {
    translation: translationFr,
  },
  ar: {
    translation: translationAr,
  },
};

const language = localStorage.getItem("I18NLANGUAGE");
if (!language) {
  localStorage.setItem("I18NLANGUAGE", "en");
}

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("I18NLANGUAGE") || "en",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
