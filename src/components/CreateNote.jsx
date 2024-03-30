import { useState } from "react";

function CreateNote({addNote}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
      <div className="create-note">
        <input className="create-note-input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
        <input className="create-note-input" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Take a note..."/>
        <button onClick={() => addNote(title, content)} className="create-note-button">Add</button>
      </div>
    );
  }
  
  export default CreateNote;