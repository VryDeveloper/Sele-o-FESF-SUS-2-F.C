import React, { useState, useEffect } from 'react';

function GameForm({ onSubmit, editingGame, onCancel }) {
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [status, setStatus] = useState('backlog');

  useEffect(() => {
    if (editingGame) {
      setTitle(editingGame.title);
      setPlatform(editingGame.platform || '');
      setStatus(editingGame.status || 'backlog');
    } else {
      setTitle('');
      setPlatform('');
      setStatus('backlog');
    }
  }, [editingGame]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !platform.trim()) return;
    onSubmit({ title, platform, status });
    setTitle('');
    setPlatform('');
    setStatus('backlog');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.formTitle}>{editingGame ? 'Editar Jogo' : 'Adicionar Novo Jogo'}</h3>
      <input
        type="text"
        placeholder="Título do jogo *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Plataforma *"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        required
        style={styles.input}
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={styles.select}
      >
        <option value="backlog">Backlog</option>
        <option value="playing">Jogando</option>
        <option value="completed">Concluído</option>
      </select>
      <div style={styles.buttons}>
        <button type="submit" style={styles.btnPrimary}>
          {editingGame ? 'Salvar' : 'Adicionar'}
        </button>
        {editingGame && (
          <button type="button" onClick={onCancel} style={styles.btnSecondary}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

const styles = {
  form: { background: '#1e293b', padding: '24px', borderRadius: '8px', marginBottom: '24px', border: '1px solid #334155' },
  formTitle: { color: '#e2e8f0', marginTop: 0, marginBottom: '16px' },
  input: { width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '6px', border: '1px solid #334155', fontSize: '14px', boxSizing: 'border-box', background: '#0f172a', color: '#e2e8f0' },
  select: { width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '6px', border: '1px solid #334155', fontSize: '14px', boxSizing: 'border-box', background: '#0f172a', color: '#e2e8f0' },
  buttons: { display: 'flex', gap: '10px' },
  btnPrimary: { padding: '12px 24px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' },
  btnSecondary: { padding: '12px 24px', background: '#475569', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' },
};

export default GameForm;
