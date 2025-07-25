import fetch from "node-fetch";
import cron from "node-cron";

const PING_URL = "https://siddharth-paul.onrender.com/ping";

// Runs every 5 seconds
cron.schedule("*/5 * * * * *", async () => {
  try {
    const res = await fetch(PING_URL);
    const data = await res.json();
    console.log("Ping response:", data);
  } catch (err) {
    console.error("Ping failed:", err.message);
  }
});
