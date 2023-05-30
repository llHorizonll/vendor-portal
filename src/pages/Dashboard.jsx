/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const requestNotificationPermission = async () => {
    try {
      //navigator.serviceWorker.register("/dist/custom-sw.js");
      Notification.requestPermission(function (result) {
        if (result === "granted") {
          console.log(navigator.serviceWorker);

          navigator.serviceWorker.ready.then(function (registration) {
            console.log(registration);

            registration.showNotification("Notification Title", {
              body: "Notification Title Body",
              vibrate: [200, 100, 200],
              data: {
                dateOfArrival: Date.now(),
                primaryKey: "1",
              },
              actions: [
                { action: "google", title: "Google" },
                { action: "chatgpt", title: "ChatGPT" },
              ],
            });
          });
        }
      });
    } catch (error) {
      console.error("Error requesting notification permission:", error);
    }
  };

  const data = useLoaderData();
  return (
    <div>
      Dashboard {data[0].name} <button onClick={() => requestNotificationPermission()}>test noti</button>
      <br />
    </div>
  );
};

export default Dashboard;
