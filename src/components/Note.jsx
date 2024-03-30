function Note({note, deleteNote}) {
    return (
      <div className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note)} className="delete-note">DELETE</button>
      </div>
    );
  }
  
  export default Note;