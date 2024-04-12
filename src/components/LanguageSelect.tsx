import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
export const LanguageSelect = () => {
  const { t, i18n } = useTranslation();
  console.log({ t, i18n });
  i18n.languages;
  const changeLanguage = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      console.log({ value: event.target.value });
      i18n.changeLanguage(event.target.value);
      // navigate(`/${event.target.value.toLowerCase()}${window.location.pathname}`);
    },
    []
  );

  return (
    <div className="relative">
      <select
        id="language"
        className="appearance-none bg-transparent w-9 before:content-['penis']"
        onChange={changeLanguage}
        value={i18n.language}
      >
        <option value={"en"}>EN</option>
        <option value={"es"}>ES</option>
        <option value={"jp"}>日本語</option>
        <option value={"cn"}>中文</option>
      </select>
      <div className="absolute pointer-events-none right-0 top-0">↓</div>
    </div>
  );
};
