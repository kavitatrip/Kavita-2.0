// Mock data
export const usernames = [
  "PixelPenguin",
  "CodeCrusher",
  "SilentStorm",
  "ZebraZoom",
  "TechTitan",
  "LazyLlama",
  "SwiftSloth",
  "EchoFalcon",
];
export const messages = [
  "This is awesome!",
  "LOL 😂",
  "Anyone else watching in 2025?",
  "I love this stream 🔥",
  "Where's the next episode?",
  "The vibes here are immaculate.",
  "Shoutout from Canada!",
  "No way that just happened 😱",
  "Streamer is on fire today!",
  "Can someone clip that?",
];
export const avatars = ["🦊", "🐱", "🐼", "🐸", "🐧", "🦄", "🐯", "🐵"];

// Helper to get random element
export function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr?.length)];
}

// Generates a mock chat message
export function generateMockChatMessage() {
  return {
    username: getRandomItem(usernames),
    message: getRandomItem(messages),
    avatar: getRandomItem(avatars),
    timestamp: new Date().toLocaleTimeString(),
  };
}

// Example: Append new message every 2 seconds
setInterval(() => {
  const chatMessage = generateMockChatMessage();
  // If you have a chat window in DOM, you can append here
  // document.querySelector("#chat-window").append(...)
}, 2000);
