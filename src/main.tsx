import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import "./styles/Home.css";
import { Analytics } from "@vercel/analytics/react"
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Analytics />
        <AppRoutes />
    </React.StrictMode>
);
