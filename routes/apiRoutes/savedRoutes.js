const router = require('express').Router();
const path = require('path');
const fs = require('fs'); 

const { notes } = require('../../db/db.json')

//reads db.json & returns all saved notes
router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../../db/db.json"))
});

//post, add to json, and return
router.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    console.log(noteList)
    let noteListLength = (noteList.notes.length).toString();
    newNote.id = noteListLength;
  
    //push to db.json and save
    noteList.notes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
  
    res.json(noteList);
  });


module.exports = router;