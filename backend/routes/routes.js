import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    // send OK status & welcome message
    res.status(200).send("Welcome friend!");
});

// user posts a change, send POSTED status & json msg
router.post("/", (req, res) => {
    res.status(201).json({message: "Posted successfully."});
});

// user updates a post w/ dynamic id, send OK status & json msg
router.put("/:id", (req, res) => {
    res.status(200).json({message: "Updated successfully."});
});

// user deletes a post w/ dynamic id, send OK status & json msg
router.delete("/:id", (req, res) => {
    res.status(200).json({message: "Deleted successfully."});
});

export default router;
