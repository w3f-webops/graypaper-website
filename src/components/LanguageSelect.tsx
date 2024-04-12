import React, { useCallback } from "react";

export const LanguageSelect = () => {
  const changeLanguage = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      console.log({ value: event.target.value });
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
      >
        <option>EN</option>
        <option>DE</option>
      </select>
      <div className="absolute pointer-events-none right-0 top-0">↓</div>
    </div>
  );
};
