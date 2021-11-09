const fs = require("fs")
const addNote = (title,body) =>{
    const notes = loadNotes()
    const duplicate = notes.filter((note)=>{
        return note.title === title
    })
    console.log(duplicate)
    if (duplicate.length === 0) {
        
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log('save')
    }
    else{
        console.log('this title is used plz change it')
    }
}

const removeNote = (title) =>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>{
        return note.title !== title
    })
    console.log(notesToKeep)
    saveNotes(notesToKeep)
    console.log('Removed (:')
}

const readNote = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=>{
        return note.title === title
    })
    if (note) {
        console.log(note.body)
    }else{
        console.log('not found !!')
    }
}

const listNotes = ()=>{
    const notes = loadNotes()
    // notes.forEach((note) => {console.log(note.title)})
    notes.forEach((note) => {
        console.log(note.title)
      })
}


const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch(e){
       return []
    }
}

const saveNotes = (notes) =>{
   const saveDate = JSON.stringify(notes)
   fs.writeFileSync('notes.json',saveDate)
}
module.exports = {
    addNote,
    removeNote,
    readNote,
    listNotes
}