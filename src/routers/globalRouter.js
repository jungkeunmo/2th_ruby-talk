import express from "express";
import {
    friendsController,
    messageController,
    profileController,
    mainController,
    loginController
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", mainController);
globalRouter.get("/friends", friendsController);
globalRouter.get("/message", messageController);
globalRouter.get("/profile", profileController);
globalRouter.post("/login", loginController);

export default globalRouter;