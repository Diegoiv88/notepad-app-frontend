import React, { useState, useEffect } from 'react';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';
import { getNotes, createNote } from '../services/noteService';
import '../assets/styles/App.css'; 

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [noteType, setNoteType] = useState('active');
  const [archivedNotes, setArchivedNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, [noteType]);

  useEffect(() => {
    // Filtra las notas archivadas y actualiza el estado
    const archived = notes.filter((note) => note.archived);
    setArchivedNotes(archived);
  }, [notes]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const fetchNotes = async () => {
    try {
      const fetchedNotes = await getNotes(noteType);
      setNotes(fetchedNotes);
    } catch (error) {
      console.error('Error fetching notes', error);
    }
  };

  const handleCreateNote = async (newNote) => {
    try {
      await createNote(newNote);
      // Refetch notes after creating a new one
      fetchNotes();
    } catch (error) {
      console.error('Error creating note', error);
    }
  };

  const toggleNoteType = () => {
    setNoteType((prevType) => (prevType === 'active' ? 'archived' : 'active'));
  };

  return (
    <div className="noteapp-container">
      <h1>Notas App</h1>
      <div>
        <button onClick={toggleNoteType}>
          {noteType === 'active' ? 'Active notes' : `Archived notes (${archivedNotes.length})`}
        </button>
        <button onClick={() => setIsModalOpen(true)}>create note</button>
      </div>
      {isModalOpen && (
        <NoteForm
          onNoteCreated={() => {
            setIsModalOpen(false);
            fetchNotes();
          }}
          onClose={handleCloseModal}
        />
      )}
      <NoteList notes={notes} />
    </div>
  );
}

export default Home;