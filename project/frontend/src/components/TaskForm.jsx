import React, { useState, useEffect } from 'react';

function TaskForm({ onSubmit, editingTask, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description || '');
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>{editingTask ? 'Editar Tarefa' : 'Nova Tarefa'}</h3>
      <input
        type="text"
        placeholder="Título da tarefa *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={styles.input}
      />
      <textarea
        placeholder="Descrição (opcional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={styles.textarea}
      />
      <div style={styles.buttons}>
        <button type="submit" style={styles.btnPrimary}>
          {editingTask ? 'Salvar' : 'Adicionar'}
        </button>
        {editingTask && (
          <button type="button" onClick={onCancel} style={styles.btnSecondary}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

const styles = {
  form: { background: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '24px' },
  input: { width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' },
  textarea: { width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box', minHeight: '80px' },
  buttons: { display: 'flex', gap: '10px' },
  btnPrimary: { padding: '10px 20px', background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' },
  btnSecondary: { padding: '10px 20px', background: '#999', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' },
};

export default TaskForm;
