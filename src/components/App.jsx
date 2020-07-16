import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";


function App() {

    const [notes, setNotes] = useState([])

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        })

    }

    function deleteNote(id){
        setNotes(prevNotes=>{
            return prevNotes.filter((entry,index) => {
                return index !== id;
            })
        })
    }

    return (<div>
        <Header />
        <CreateArea
            onAdd={addNote}
        />
        {notes.map((entry,index) =>
            <Note
                key={index}
                id={index}
                title={entry.title}
                content={entry.content}
                onDelete={deleteNote}
            />
        )}
        <Footer />
    </div>)
}

export default App;