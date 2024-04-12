import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          Resources: "Resources",
          Prize: "Prize",
          Tour: "Tour",
          Download: "Download",
          News: "News",
          Contribute: "Contribute",
          "Coming soon": "Coming soon...",
          "Resources.Download": "Get a copy of the Graypaper here:",
          "Resources.Contribute": "Join the JAM in our [matrix] space:",
        },
      },
      es: {
        translation: {
          Resources: "Recursos",
          Prize: "Premio",
          Tour: "Tour",
          Download: "Descargar",
          News: "Noticias",
          Contribute: "Contribuir",
          "Coming soon": "Próximamente...",
          "Resources.Download": "Obtén una copia del Graypaper aquí:",
          "Resources.Contribute": "Únete al JAM en nuestro espacio [matrix]:",
        },
      },
      jp: {
        translation: {
          Resources: "リソース",
          Prize: "賞",
          Tour: "ツアー",
          Download: "ダウンロード",
          News: "ニュース",
          Contribute: "貢献する",
          "Coming soon": "近日公開...",
          "Resources.Download": "こちらでGraypaperのコピーを入手してください：",
          "Resources.Contribute": "[matrix]スペースでJAMに参加しよう：",
        },
      },
      cn: {
        translation: {
          Resources: "资源",
          Prize: "奖",
          Tour: "旅游",
          Download: "下载",
          News: "新闻",
          Contribute: "贡献",
          "Coming soon": "即将推出...",
          "Resources.Download": "在这里获取Graypaper的副本：",
          "Resources.Contribute": "在我们的[matrix]空间加入JAM：",
        },
      },
    },
  });

export default i18n;
