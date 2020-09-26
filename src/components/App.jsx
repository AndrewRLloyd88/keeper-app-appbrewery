import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "./notes.js";
import CreateArea from "./CreateArea";



function App(){

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevItems) => {
      return [...prevItems, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevItems) => {
      return prevItems.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }


  return(
    <div>
    <Header />
    <CreateArea onAdd={addNote} />
    {notes.map((note, index) => (
    <Note 
      key={index}
      id={index}
      title={note.title}
      content={note.content}
      onDelete={deleteNote}
    />
    ))}
    <Footer />
    </div>

    
  );
}

export default App;