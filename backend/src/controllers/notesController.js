import Note from "../models/Note.js";
    

export const getAllNotes = async (req,res) => {
    // send the notes
    try {
        const notes = await Note.find().sort({createdAt : -1}); // give all notes from the database
        res.status(200).json(notes);
    } catch (error) {
        console.log("Error in getAllNotes controller:", error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export const getNoteById = async (req,res) => {
    try {
        const note = await Note.findById(req.params.id);
        
        if(!note) {
            return res.status(404).json({message: "Note not found"});
        }
        res.status(200).json(note);
    } catch (error) {
        res.error("Error in getNoteById controller:", error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const createANote =  async (req,res) => {
    try {
        const { title, content } = req.body; // destructuring the title and content from the request body
        const note = new Note({title,content});

        const savedNote = await note.save(); // saving the note to the database
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createANote controller:", error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const updateANote = async (req,res) => {
   try {
    const {title, content} = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
        req.params.id,
        {title, content}, 
        {new: true}
    ); // to return the updated note

    if(!updatedNote) {
        return res.status(404).json({message: "Note not found"});
    }

    res.status(200).json(updatedNote);

   } catch (error) {
        console.error("Error in updateANote controller:", error);
        res.status(500).json({message: "Internal Server Error"});
   }
}

export const deleteANote = async (req,res) => {
      try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id); // to return the updated note

        if(!deletedNote) {
            return res.status(404).json({message: "Note not found"});
        }

        res.status(200).json({message: "Note deleted successfully"});
      } catch (error) {
        console.error("Error in deleteANote controller:", error);
        res.status(500).json({message: "Internal Server Error"});
      }
}
 