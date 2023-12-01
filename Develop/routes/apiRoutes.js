const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); 

//The API Route to GET all notes
router.get('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(notes);
});

//The API Route to POST new notes
router.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
});

//The API Route to DELETE notes
router.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === noteId) {
            notes.splice(i, 1);
        }
    }
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
});

module.exports = router;