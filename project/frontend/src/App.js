import React, { useState, useEffect } from 'react';
import GameForm from './components/GameForm';
import GameItem from './components/GameItem';
import { getGames, createGame, updateGame, deleteGame } from './services/api';

function App() {
  const [games, setGames] = useState([]);
  const [editingGame, setEditingGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGames = async () => {
    try {
      const res = await getGames();
      setGames(res.data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar jogos. Verifique se a API está rodando.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchGames(); }, []);

  const handleCreate = async (data) => {
    try {
      await createGame(data);
      fetchGames();
    } catch (err) {
      alert('Erro ao criar jogo.');
    }
  };

  const handleUpdate = async (data) => {
    try {
      await updateGame(editingGame.id, data);
      setEditingGame(null);
      fetchGames();
    } catch (err) {
      alert('Erro ao atualizar jogo.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Excluir este jogo?')) return;
    try {
      await deleteGame(id);
      fetchGames();
    } catch (err) {
      alert('Erro ao excluir jogo.');
    }
  };

  const playing = games.filter(g => g.status === 'playing');
  const completed = games.filter(g => g.status === 'completed');
  const backlog = games.filter(g => g.status === 'backlog');

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src="/logo.png" alt="GameVault Logo" style={{ width: '60px', marginBottom: '16px', filter: 'invert(1)' }} />
        <h1 style={styles.title}>GameVault</h1>
        <p style={styles.subtitle}>Gerencie sua biblioteca de jogos</p>
      </div>

      <GameForm
        onSubmit={editingGame ? handleUpdate : handleCreate}
        editingGame={editingGame}
        onCancel={() => setEditingGame(null)}
      />

      {error && <div style={styles.error}>{error}</div>}
      {loading && <p style={styles.loading}>Carregando...</p>}

      {!loading && (
        <>
          <div style={styles.summary}>
            <div style={styles.stat}>
              <span style={styles.statNumber}>{games.length}</span>
              <span style={styles.statLabel}>Total</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>{playing.length}</span>
              <span style={styles.statLabel}>Jogando</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>{completed.length}</span>
              <span style={styles.statLabel}>Concluídos</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>{backlog.length}</span>
              <span style={styles.statLabel}>Backlog</span>
            </div>
          </div>

          {playing.length > 0 && (
            <>
              <h3 style={styles.sectionTitle}>Jogando ({playing.length})</h3>
              {playing.map(game => (
                <GameItem key={game.id} game={game} onEdit={setEditingGame} onDelete={handleDelete} />
              ))}
            </>
          )}

          {backlog.length > 0 && (
            <>
              <h3 style={styles.sectionTitle}>Backlog ({backlog.length})</h3>
              {backlog.map(game => (
                <GameItem key={game.id} game={game} onEdit={setEditingGame} onDelete={handleDelete} />
              ))}
            </>
          )}

          {completed.length > 0 && (
            <>
              <h3 style={styles.sectionTitle}>Concluídos ({completed.length})</h3>
              {completed.map(game => (
                <GameItem key={game.id} game={game} onEdit={setEditingGame} onDelete={handleDelete} />
              ))}
            </>
          )}

          {games.length === 0 && (
            <p style={styles.empty}>Nenhum jogo cadastrado. Adicione um acima!</p>
          )}
        </>
      )}
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', background: '#0f172a', padding: '40px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
  header: { maxWidth: '800px', margin: '0 auto 32px', textAlign: 'center' },
  title: { color: '#e2e8f0', marginBottom: '8px', fontSize: '36px', fontWeight: '700' },
  subtitle: { color: '#94a3b8', margin: 0, fontSize: '16px' },
  error: { maxWidth: '800px', margin: '0 auto 16px', background: '#7f1d1d', color: '#fecaca', padding: '12px 16px', borderRadius: '8px', border: '1px solid #991b1b' },
  loading: { textAlign: 'center', color: '#94a3b8', maxWidth: '800px', margin: '0 auto' },
  summary: { maxWidth: '800px', margin: '0 auto 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' },
  stat: { background: '#1e293b', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid #334155' },
  statNumber: { display: 'block', fontSize: '24px', fontWeight: '700', color: '#e2e8f0', marginBottom: '4px' },
  statLabel: { display: 'block', fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' },
  sectionTitle: { maxWidth: '800px', margin: '24px auto 12px', color: '#e2e8f0', borderBottom: '2px solid #334155', paddingBottom: '8px', fontSize: '18px', fontWeight: '600' },
  empty: { textAlign: 'center', color: '#64748b', padding: '60px 20px', maxWidth: '800px', margin: '0 auto' },
};

export default App;
