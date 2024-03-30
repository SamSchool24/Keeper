import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";
import dbNotes from "./notes";

import { useState } from "react";

function App() {
  const [notes, setNotes] = useState(dbNotes);
  function addNote(title, content){
    const newNote = {
      key: notes.length + 1,
      title: title,
      content: content
    }
    setNotes([...notes, newNote]);
  }

  function deleteNote(note){
    setNotes(notes.filter(n => n.key !== note.key));
  }

  return (
    <div className="App">
        <Header/>
        <CreateNote addNote={addNote} />
        {notes.map( note => <Note note={note} deleteNote={deleteNote} />)}
        <Footer/>
    </div>
  );
}

export default App;
