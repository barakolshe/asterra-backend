import express from "express";
import hobbyController from "../controllers/hobbiesController";

const router: express.Router = express.Router();

router.put("/:id", hobbyController.updateHobbies);

router.post("/", hobbyController.addHobbies);

router.get("/", hobbyController.getAllHobbies);

export default router;
