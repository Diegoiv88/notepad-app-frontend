import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import CustomModal from './Modal';

import '../assets/styles/App.css'

function NoteList({ onRequestClose, note, notes, onDelete, onEdit}) {
  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNote(null);
    setIsModalOpen(false);
  };

  
  return (
    <div className="note-list-container">
      <h2>Note List</h2>
      <div className="note-list">
        {Array.isArray(notes) && notes.length > 0 ? (
          notes.map((note) => (
            <div key={note.id} className="note-item">
              <div className="note-content" onClick={() => openModal(note)}>
                <h3>{note.title}</h3>
                <p>{note.content.substring(0, 50)}...</p>
              </div>
              <div className="note-actions">
            
              </div>
            </div>
          ))
        ) : (
          <p>No hay notas disponibles</p>
        )}
      </div>
      <CustomModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        note={selectedNote}
      />
    </div>
  );
}

export default NoteList;