import express from "express";
import {
    friendsController,
    messageController,
    profileController,
    testScreen
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", testScreen)
globalRouter.get("/friends", friendsController)
globalRouter.get("/message", messageController)
globalRouter.get("/profile", profileController)


export default globalRouter;