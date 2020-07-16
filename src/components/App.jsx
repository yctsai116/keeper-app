import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";


function App() {
    return (<div>
        <Header />
        <CreateArea />
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