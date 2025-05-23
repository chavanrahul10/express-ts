import express, { Express } from "express";
import { setRoutes } from "./routes/index";

const app: Express = express();
const PORT = process.env.PORT || 3000;

setRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
