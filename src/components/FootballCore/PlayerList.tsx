import React from 'react';
import { PlayerData} from '@/pages/home';
import { useTeam } from './TeamContext'

interface PlayerListProps {
    players: PlayerData[];
    selectedPosition: string;
    selectedIndex: number;
}

const PlayerList: React.FC<PlayerListProps> = ({ players, selectedPosition, selectedIndex }) => {
    const { addPlayer, selectedPlayers, totalCost } = useTeam();

    const availablePlayers = selectedPosition
        ? players.filter(player => player.position === selectedPosition)
        : players;

    const isSelected = (player: PlayerData) => selectedPlayers.some(selectedPlayer => selectedPlayer.id === player.id);

    return (
        <div className="player-list p-4 border border-gray-200 rounded w-full h-4/5 overflow-y-auto">
            <h3 className="text-lg font-bold mb-2">
                {selectedPosition ? `Available ${selectedPosition}s` : 'All Players'}
            </h3>
            {availablePlayers.map(player => (
                <div
                    key={player.id}
                    className={`player flex items-center justify-between p-2 border border-gray-400 rounded mb-2 cursor-pointer ${isSelected(player) ? 'cursor-not-allowed line-through text-gray-400' : ''}`}
                    onClick={() => !isSelected(player) && (totalCost + player.transferValue <= 100) && addPlayer(player, selectedIndex)}
                >
                    <div>
                        <p>{player.name}</p>
                        <p>Position: {player.position}</p>
                        <p>Value: {player.transferValue}M</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PlayerList;