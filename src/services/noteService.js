const backendUrl = "http://localhost:8080/api/notes";

export const getNotes = async (type) => {
    try {
      const response = await fetch(`${backendUrl}/${type}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching notes:', error);
      throw error;
    }
  };

export const createNote = async (note) => {
    try {
        await fetch(`${backendUrl}/crear`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });
    } catch (error) {
        console.error('Error creating note:', error);
        throw error;
    }
};

export const updateNote = async (id, updatedNote) => {
  try {
    await fetch(`${backendUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedNote),
    });
  } catch (error) {
    console.error('Error updating note:', error);
    throw error;
  }
};

export const deleteNote = async (id) => {
  try {
    await fetch(`${backendUrl}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  }
};