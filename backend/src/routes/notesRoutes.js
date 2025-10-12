import express from 'express';
import { getAllNotes, createANote,updateANote, deleteANote, getNoteById } from '../controllers/notesController.js';

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createANote);
router.put("/:id", updateANote); 
router.delete("/:id", deleteANote);

export default router;

