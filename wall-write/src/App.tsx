// Ts Types
import { NoteForm } from "./components/NoteForm";
import { Note } from "./lib/types";

import { useState } from "react";

// Components

const App = () => {
  const title: string = "WallWrite";
  const [notes, setNotes] = useState<Note[]>([]);
  
  const addNote = (note: Note) => {
    setNotes(prev => [...prev, note])
  }
  
  return (
    <section className="flex flex-col min-h-screen w-full">
      <h1 className="text-xl lg:text-4xl text-slate-800 font-extrabold p-4 lg:py-3">
        {title}
      </h1>
      <NoteForm onSubmitData={addNote} />
      <div>
        {JSON.stringify(notes)}
      </div>
    </section>
  );
};

export default App;
