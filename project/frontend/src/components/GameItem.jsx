import React from 'react';

function GameItem({ game, onEdit, onDelete }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'playing': return '#3b82f6';
      case 'completed': return '#10b981';
      case 'backlog': return '#64748b';
      default: return '#64748b';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'playing': return 'Jogando';
      case 'completed': return 'Concluído';
      case 'backlog': return 'Backlog';
      default: return status;
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.content}>
        <div style={styles.info}>
          <span style={styles.title}>{game.title}</span>
          <span style={styles.platform}>{game.platform}</span>
        </div>
        <div style={styles.statusContainer}>
          <span style={{ ...styles.status, background: getStatusColor(game.status) }}>
            {getStatusLabel(game.status)}
          </span>
        </div>
        <div style={styles.actions}>
          <button onClick={() => onEdit(game)} style={styles.btnEdit}>Editar</button>
          <button onClick={() => onDelete(game.id)} style={styles.btnDelete}>Excluir</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: { background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '16px', marginBottom: '12px' },
  content: { display: 'flex', alignItems: 'center', gap: '16px' },
  info: { flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' },
  title: { fontSize: '16px', fontWeight: '500', color: '#e2e8f0' },
  platform: { fontSize: '13px', color: '#94a3b8' },
  statusContainer: { display: 'flex' },
  status: { padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '500', color: '#fff', textTransform: 'capitalize' },
  actions: { display: 'flex', gap: '8px' },
  btnEdit: { padding: '8px 16px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: '500' },
  btnDelete: { padding: '8px 16px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: '500' },
};

export default GameItem;
