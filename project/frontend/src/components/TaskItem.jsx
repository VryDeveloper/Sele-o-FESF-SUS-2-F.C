import React from 'react';

function TaskItem({ task, onEdit, onDelete, onToggle }) {
  return (
    <div style={{ ...styles.card, opacity: task.completed ? 0.6 : 1 }}>
      <div style={styles.header}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task)}
          style={styles.checkbox}
        />
        <div style={styles.info}>
          <span style={{ ...styles.title, textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span>
          {task.description && <p style={styles.description}>{task.description}</p>}
        </div>
        <div style={styles.actions}>
          <button onClick={() => onEdit(task)} style={styles.btnEdit}>Editar</button>
          <button onClick={() => onDelete(task.id)} style={styles.btnDelete}>Excluir</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: { background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', marginBottom: '10px' },
  header: { display: 'flex', alignItems: 'flex-start', gap: '12px' },
  checkbox: { marginTop: '3px', cursor: 'pointer', width: '18px', height: '18px' },
  info: { flex: 1 },
  title: { fontSize: '16px', fontWeight: '500' },
  description: { margin: '4px 0 0', fontSize: '13px', color: '#666' },
  actions: { display: 'flex', gap: '8px' },
  btnEdit: { padding: '6px 14px', background: '#2196F3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' },
  btnDelete: { padding: '6px 14px', background: '#f44336', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' },
};

export default TaskItem;
