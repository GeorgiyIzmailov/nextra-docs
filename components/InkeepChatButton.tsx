import { useEffect, useState } from "react";
import useInkeepSettings from "../utils/useInkeepSettings";


export const InkeepChatButton = () => {
  const [ChatButton, setChatButton] = useState(null);

  const { baseSettings, aiChatSettings, searchSettings, modalSettings } =
    useInkeepSettings();

  // load the library asyncronously
  useEffect(() => {
    const loadChatButton = async () => {
      try {
        const { InkeepChatButton } = await import("@inkeep/widgets");
        setChatButton(() => InkeepChatButton);
      } catch (error) {
        console.error("Failed to load ChatButton:", error);
      }
    };

    loadChatButton();
  }, []);

  const chatButtonProps = {
    chatButtonType: "ICON_TEXT", // the "Pill" version of the chat button
    baseSettings,
    aiChatSettings,
    searchSettings,
    modalSettings,
  };

  return ChatButton && <ChatButton {...chatButtonProps} />;
};