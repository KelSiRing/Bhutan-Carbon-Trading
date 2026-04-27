import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebaseConfig from "./firebase-applet-config.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Firebase for Backend
const fbApp = initializeApp(firebaseConfig);
const db = getFirestore(fbApp, firebaseConfig.firestoreDatabaseId);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // IoT Endpoint for ESP32 Sensor Data
  // ESP32 sends data here to record industrial emissions
  app.post("/api/sensors/data", async (req, res) => {
    try {
      const { industryId, deviceId, mq2, mq3 } = req.body;
      
      if (!industryId || !deviceId) {
        return res.status(400).json({ error: "Missing identity fields" });
      }

      const emissionData = {
        industryId,
        deviceId,
        mq2: Number(mq2),
        mq3: Number(mq3),
        timestamp: new Date().toISOString(),
      };

      // In a real production app, we would authenticate the ESP32 via a secret token
      // For this prototype, we record the data provided the industryId is valid.
      const docRef = await addDoc(collection(db, "emissions"), emissionData);
      
      console.log(`Recorded emission packet for ${industryId} (ID: ${docRef.id})`);
      res.status(200).json({ status: "success", id: docRef.id });
    } catch (error) {
      console.error("IoT Ingestion Error:", error);
      res.status(500).json({ error: "Failed to record data" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`BCX Server running on http://localhost:${PORT}`);
  });
}

startServer();
