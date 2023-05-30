/* eslint-disable no-undef */
import { precacheAndRoute } from "workbox-precaching";

precacheAndRoute(self.__WB_MANIFEST);
self.addEventListener("push", function (event) {
  const options = {
    body: event.data.text(),

    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "1",
    },
    actions: [
      { action: "explore", title: "Explore" },
      { action: "close", title: "Close" },
    ],
  };

  event.waitUntil(self.registration.showNotification("Notification Title", options));
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  if (event.action === "google") {
    clients.openWindow("http://www.google.com");
  } else if (event.action === "chatgpt") {
    clients.openWindow("https://chat.openai.com/");
  }
});

// self.addEventListener("notificationclick", (event) => {
//   event.waitUntil(
//     (async () => {
//       const allClients = await clients.matchAll({
//         includeUncontrolled: true,
//       });

//       let chatClient;

//       // Let's see if we already have a chat window open:
//       for (const client of allClients) {
//         const url = new URL(client.url);

//         if (url.pathname === "/chat/") {
//           // Excellent, let's use it!
//           client.focus();
//           chatClient = client;
//           break;
//         }
//       }

//       // If we didn't find an existing chat window,
//       // open a new one:
//       if (!chatClient) {
//         chatClient = await clients.openWindow("/chat/");
//       }

//       // Message the client:
//       chatClient.postMessage("New chat messages!");
//     })()
//   );
// });
