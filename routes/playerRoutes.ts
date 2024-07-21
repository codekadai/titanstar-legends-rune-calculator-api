import { Router } from "express";
import { getPlayers } from "../controllers/playerController";

const router = Router();

router.get("/player", getPlayers);

export default router;
