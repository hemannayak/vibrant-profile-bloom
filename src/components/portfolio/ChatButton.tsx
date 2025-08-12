import { MessageCircle } from "lucide-react";

export default function ChatButton() {
  return (
    <button
      aria-label="Chat with me"
      className="fixed bottom-6 right-6 z-40 rounded-full bg-secondary text-secondary-foreground shadow-lg px-4 py-3 flex items-center gap-2 hover-scale animate-pulse-5s"
      onClick={() => window.location.href = '#contact'}
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline font-button">Chat with Me</span>
    </button>
  );
}
