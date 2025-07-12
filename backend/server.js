import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";

// initialize express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => res.send("server is running!"));

// connect database and start server
const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
  }
};

startServer(); // ✅ Start the server
