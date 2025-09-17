import { useEffect, useRef } from "react";

interface WatsonChatInstance {
  render: () => Promise<void>;
  openWindow: () => void;
  closeWindow: () => void;
  isOpen?: boolean;
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
    toggleWatsonChat?: () => void;
  }
}

const ChatWatson = () => {
  const chatInstance = useRef<WatsonChatInstance | null>(null);
  const chatAberto = useRef(false);

  useEffect(() => {
  if (chatInstance.current) return;

  window.watsonAssistantChatOptions = {
    integrationID: "e61f02ce-fbce-4320-ad2d-eab24607d0c4",
    region: "au-syd",
    serviceInstanceID: "d7452a1a-d09e-4188-8017-3c4e3188a16f",
    onLoad: async (instance) => {
      chatInstance.current = instance;
      await instance.render();

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

  if (!document.getElementById("watson-script")) {
    const script = document.createElement("script");
    script.id = "watson-script";
    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
    document.head.appendChild(script);
  }
}, []);
  return null;
};

export default ChatWatson;