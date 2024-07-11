import React from 'react';
import { PlayerData} from '@/pages/home';
import { useTeam } from './TeamContext'

interface PlayerListProps {
    players: PlayerData[];
    selectedPosition: string;
    selectedIndex: number;
  }
  
  const PlayerList: React.FC<PlayerListProps> = ({ players, selectedPosition, selectedIndex }) => {
    const { addPlayer, isPositionFilled } = useTeam();
  
    const availablePlayers = selectedPosition
      ? players.filter(player => player.position === selectedPosition)
      : players;
  
    return (
      <div className="player-list">
        {availablePlayers.map(player => (
          <div
            key={player.id}
            className={`player-item p-2 m-2 border ${isPositionFilled(selectedIndex) ? 'bg-gray-300 cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={() => !isPositionFilled(selectedIndex) && addPlayer(player, selectedIndex)}
          >
            {player.name} - ${player.transferValue}M
          </div>
        ))}
      </div>
    );
  };
  
  export default PlayerList;