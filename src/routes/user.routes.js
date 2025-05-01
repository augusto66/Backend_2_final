import { Router } from "express";
import { userDao } from "../persistence/mongo/dao/user.dao.js";
import { userExist } from "../middlewares/existUser.middleware.js";
import { userControllers } from "../controllers/user.controllers.js";

const router = Router();

router.get("/", userControllers.getAll);

router.post("/", userControllers.createUSer);

router.get("/:id", userExist, userControllers.getOne);

router.delete("/:id", userExist, userControllers.removeUser);

router.put("/:id", userExist, userControllers.uodateUser);

export default router;
