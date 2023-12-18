import type {
  InkeepAIChatSettings,
  InkeepSearchSettings,
  InkeepWidgetBaseSettings,
  InkeepModalSettings,
} from "@inkeep/widgets";
import { useTheme } from "nextra-theme-docs";

type InkeepSharedSettings = {
  baseSettings: InkeepWidgetBaseSettings;
  aiChatSettings: InkeepAIChatSettings;
  searchSettings: InkeepSearchSettings;
  modalSettings: InkeepModalSettings;
};

const useInkeepSettings = (): InkeepSharedSettings => {
  const { theme } = useTheme();

  const baseSettings: InkeepWidgetBaseSettings = {
    apiKey: "YOUR_API_KEY",
    integrationId: "YOUR_INTEGRATION_ID",
    organizationId: "YOU_ORGANIZATION_ID",
    primaryBrandColor: "#522FC9", // your brand color, widget color scheme is derived from this
    organizationDisplayName: "Inkeep",
    // ...optional settings
    theme: {
      colorMode: {
        forcedColorMode: theme, // to sync dark mode with the widget
      },
    },
  };

  const modalSettings: InkeepModalSettings = {
    // optional settings
  };

  const searchSettings: InkeepSearchSettings = {
    // optional settings
  };

  const aiChatSettings: InkeepAIChatSettings = {
    // optional settings
    botAvatarSrcUrl: "/img/inkeep-logo.svg", // use your own bot avatar
    quickQuestions: [
      "Example question 1?",
      "Example question 2?",
      "Example question 3?",
    ],
  };

  return { baseSettings, aiChatSettings, searchSettings, modalSettings };
};

export default useInkeepSettings;
