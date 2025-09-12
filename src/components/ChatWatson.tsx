// src/components/ChatWatson.tsx
import { useEffect, useRef } from "react";

interface WatsonChatInstance {
  render: () => Promise<void>;
  openWindow: () => void;
  closeWindow: () => void;
  isOpen?: boolean; // alguns SDKs já expõem isso, mas vamos controlar manualmente
}

declare global {
  interface Window {
    watsonAssistantChatOptions: {
      integrationID: string;
      region: string;
      serviceInstanceID: string;
      clientVersion?: string;
      onLoad: (instance: WatsonChatInstance) => Promise<void>;
    };
    toggleWatsonChat?: () => void; // <- função global de toggle
  }
}

const ChatWatson = () => {
  const chatInstance = useRef<WatsonChatInstance | null>(null);
  const chatAberto = useRef(false); // controla o estado aberto/fechado

  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "e61f02ce-fbce-4320-ad2d-eab24607d0c4",
      region: "au-syd",
      serviceInstanceID: "d7452a1a-d09e-4188-8017-3c4e3188a16f",
      onLoad: async (instance) => {
        chatInstance.current = instance;
        await instance.render();

        // 🔑 expõe função global para abrir/fechar
        window.toggleWatsonChat = () => {
          if (!chatInstance.current) return;

          if (chatAberto.current) {
            chatInstance.current.closeWindow();
            chatAberto.current = false;
          } else {
            chatInstance.current.openWindow();
            chatAberto.current = true;
          }
        };
      },
    };

    const script = document.createElement("script");
    script.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatWatson;
