import React, { useState } from 'react';
import { createNote } from '../services/noteService';
import '../assets/styles/App.css'

function NoteForm({ onNoteCreated, onClose }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [archived, setArchived] = useState(false);
  
    const handleCreateNote = async () => {
      try {
        await createNote({ title, content, archived });
        setTitle('');
        setContent('');
        setArchived(false);
        onNoteCreated();
      } catch (error) {
        console.error('Error creating note', error);
      }
    };
  
    return (
        <div className="modal">
    <div className="modal-content">
      <h2 className="modal-title">New Note</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-group">
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="textarea-field"
        />
      </div>
      <div className="input-group">
        <label className="checkbox-label">
          Archive Note:
          <input
            type="checkbox"
            checked={archived}
            onChange={(e) => setArchived(e.target.checked)}
            className="checkbox-field"
          />
        </label>
      </div>
      <div className="button-group">
        <button onClick={handleCreateNote} className="create-button">
          Create Note
        </button>
        <button onClick={onClose} className="cancel-button">
          Cancel
        </button>
      </div>
    </div>
  </div>
    );
  }
  
  export default NoteForm;
