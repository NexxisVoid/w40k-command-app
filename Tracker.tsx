import { useState } from 'react';
import Counter from './Counter';

export default function Tracker() {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Player 1', cp: 6 },
    { id: 2, name: 'Player 2', cp: 6 }
  ]);

  const updateCP = (id: number, delta: number) => {
    setPlayers(prev =>
      prev.map(p => p.id === id ? { ...p, cp: p.cp + delta } : p)
    );
  };

  return (
    <div className="tracker">
      {players.map(player => (
        <div key={player.id}>
          <h2>{player.name}</h2>
          <Counter value={player.cp} onChange={delta => updateCP(player.id, delta)} />
        </div>
      ))}
    </div>
  );
}
