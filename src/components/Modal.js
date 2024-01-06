import Modal from 'react-modal';
import React, { useState, useEffect  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { updateNote } from '../services/noteService';
import { deleteNote } from '../services/noteService';
import '../assets/styles/App.css';

Modal.setAppElement('#root');

function CustomModal({ isOpen, onRequestClose, note, onEdit, onDelete }) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedContent, setEditedContent] = useState('');
    const [editedArchived, setEditedArchived] = useState(false); 
    const [notes, setNotes] = useState([]);
  
    useEffect(() => {
      setEditedTitle(note?. title || '');
      setEditedContent(note?.content || '');
      setEditedArchived(note?.archived || false);
    }, [note]);
  
    const confirmEdit = () => {
      setIsEditMode(true);
    };
  
    const confirmDelete = () => {
        const result = window.confirm('Are you sure you want to delete this note?');
        if (result) {
          deleteNote(note.id)
            .then(() => {
              window.location.reload();
            })
            .catch((error) => {
              console.error('Error deleting note:', error);
            });
      
          onRequestClose();
        }
      };
    const fetchUpdatedNotes = async () => {
        try {
          const response = await fetch('http://localhost:8080/api/notes'); // Reemplaza con la URL correcta de tu backend
          const updatedNotes = await response.json();
          return updatedNotes;
        } catch (error) {
          console.error('Error fetching updated notes:', error);
          throw error;
        }
      };
    const handleSave = async () => {
        // Realiza la solicitud de actualización al backend
        await updateNote(note.id, { ...note, title: editedTitle, content: editedContent, archived: editedArchived });
      
        // Llama a una función para obtener las notas actualizadas después de la actualización
        const updatedNotes = await fetchUpdatedNotes();
      
        // Actualiza el estado local con las notas actualizadas
        setNotes(updatedNotes);
      
        // Cierra el modal y sale del modo de edición
        onRequestClose();
        setIsEditMode(false);
        window.location.reload();
      };
  
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Ver/Editar Nota"
        className="modal"
        overlayClassName="overlay"
      >
        {note && (
         <div className="note-container">
         {isEditMode ? (
           <div className="edit-mode">
             <input
               type="text"
               value={editedTitle}
               onChange={(e) => setEditedTitle(e.target.value)}
               className="edit-input"
             />
             <textarea
               value={editedContent}
               onChange={(e) => setEditedContent(e.target.value)}
               className="edit-textarea"
             />
             <label className="checkbox-label">
               Archivado:
               <input
                 type="checkbox"
                 checked={editedArchived}
                 onChange={() => setEditedArchived(!editedArchived)}
                 className="checkbox-field"
               />
             </label>
             <div className="button-group">
               <button onClick={handleSave} className="save-button">
                 Guardar
               </button>
               <button onClick={() => setIsEditMode(false)} className="cancel-button">
                 Cancelar
               </button>
             </div>
           </div>
         ) : (
           <div className="view-mode">
             <h2>{note.title}</h2>
             <p>{note.content}</p>
             <p>Archivado: {note.archived ? 'Sí' : 'No'}</p>
             <div className="icon-buttons">
               <button onClick={confirmEdit} className="edit-button">
                 <FontAwesomeIcon icon={faEdit} />
               </button>
               <button onClick={confirmDelete} className="delete-button">
                 <FontAwesomeIcon icon={faTrash} />
               </button>
             </div>
           </div>
         )}
       </div>
        )}
      </Modal>
    );
  }
  
  export default CustomModal;
  