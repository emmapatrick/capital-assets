import express from "express";
const router = express.Router();
import { updateAsset, deleteAsset, createAsset, getAssets}  from "../controllers/controller.js";

router.get("/", getAssets);

// user posts a change, send POSTED status & json msg
router.post("/", createAsset);

// user updates a post w/ dynamic id, send OK status & json msg
router.put("/:id", updateAsset);

// user deletes a post w/ dynamic id, send OK status & json msg
router.delete("/:id", deleteAsset);

export default router;
