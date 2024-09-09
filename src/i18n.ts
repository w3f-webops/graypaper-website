
import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import EnglishTranslation from "./translations/en"
import SpanishTranslation from "./translations/es"
import PortugueseTranslation from "./translations/pt"
import JapaneseTranslation from './translations/jp'
import ChineseTranslation from './translations/cn'

// Use EnglishTranslations as Reference
export type Translation = Record<
  keyof typeof EnglishTranslation,
  typeof EnglishTranslation[keyof typeof EnglishTranslation] | undefined
>

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: EnglishTranslation,
      },
      es: {
        translation: SpanishTranslation,
      },
      pt: {
        translation: PortugueseTranslation,
      },
      jp: {
        translation: JapaneseTranslation,
      },
      cn: {
        translation: ChineseTranslation,
      },
    },
  })

export default i18n
