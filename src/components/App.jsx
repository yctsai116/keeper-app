import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";


function App() {

function addNote(note){
    console.log(note)

}

    return (<div>
        <Header />
        <CreateArea 
            onAdd={addNote}
        />
        {notes.map(entry =>
            <Note
                key={entry.key}
                title={entry.title}
                content={entry.content}
            />
        )}
        <Footer />
    </div>)
}

export default App;