import { Request, Response } from "express";
import { checkHealth } from "../services/healthService";

export const getHealth = (req: Request, res: Response): void => {
  const healthStatus = checkHealth();
  res.status(200).json(healthStatus);
};
