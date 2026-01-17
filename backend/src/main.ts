import express from "express";
import authRoute from "./modules/auth/auth.route"; // ← 여기

const app = express();
app.use(express.json());

// 경로 연결
app.use("/auth", authRoute); // POST /auth/signup

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
