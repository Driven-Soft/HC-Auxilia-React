// src/components/ChatWatson.tsx
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    watsonAssistantChatOptions: WatsonAssistantChatOptions;
  }
}

interface WatsonAssistantChatInstance {
  render: () => Promise<void>;
  openWindow: () => void;
  closeWindow: () => void;
}

interface WatsonAssistantChatOptions {
  integrationID: string;
  region: string;
  serviceInstanceID: string;
  clientVersion?: string;
  onLoad: (instance: WatsonAssistantChatInstance) => void;
}

const ChatWatson = () => {
  const chatInstance = useRef<WatsonAssistantChatInstance | null>(null);
//   const chatAberto = useRef(false);

  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "e61f02ce-fbce-4320-ad2d-eab24607d0c4", // seu ID
      region: "au-syd",
      serviceInstanceID: "d7452a1a-d09e-4188-8017-3c4e3188a16f", // seu serviceID
      onLoad: async (instance: WatsonAssistantChatInstance) => {
        chatInstance.current = instance;
        await instance.render();
      },
    };

    const script = document.createElement("script");
    script.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";

    document.head.appendChild(script);
  }, []);

//   const alternarChat = () => {
//     if (chatInstance.current) {
//       if (chatAberto.current) {
//         chatInstance.current.closeWindow();
//         chatAberto.current = false;
//       } else {
//         chatInstance.current.openWindow();
//         chatAberto.current = true;
//       }
//     } else {
//       console.warn("O chat ainda não foi carregado.");
//     }
//   };
  return (
    <></>
  );
};

export default ChatWatson;
