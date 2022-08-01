import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { tasksRoutes } from "./tasks.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/tasks", tasksRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };
