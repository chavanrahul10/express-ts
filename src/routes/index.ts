import { Express, Router } from "express";
import healthRoutes from "./healthRoutes";

export const setRoutes = (app: Express): void => {
  app.use("/health", healthRoutes);
};

export default Router();
