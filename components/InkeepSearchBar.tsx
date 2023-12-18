import { useEffect, useState } from "react";
import useInkeepSettings from "../utils/useInkeepSettings";

const cssOverrides = `
  .ikp-search-bar-trigger__wrapper {
    margin-top: 12px;
  }
`;

const stylesheets = [
  <style key="inkeep-overrides">
    {cssOverrides}
  </style>
];

export const InkeepSearchBar = () => {
  const [SearchBar, setSearchBar] = useState(null);

  const { baseSettings, aiChatSettings, searchSettings, modalSettings } =
    useInkeepSettings();

  // load the library asyncronously
  useEffect(() => {
    const loadChatButton = async () => {
      try {
        const { InkeepSearchBar } = await import("@inkeep/widgets");
        setSearchBar(() => InkeepSearchBar);
      } catch (error) {
        console.error("Failed to load SearchBar:", error);
      }
    };

    loadChatButton();
  }, []);

  const searchBarProps = {
    stylesheets,
    chatButtonType: "ICON_TEXT", // the "Pill" version of the chat button
    baseSettings,
    aiChatSettings,
    searchSettings,
    modalSettings,
  };

  return SearchBar && <SearchBar {...searchBarProps} />;
};
