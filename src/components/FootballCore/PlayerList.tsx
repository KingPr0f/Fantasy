import React from 'react';
import { PlayerData as PlayerType} from '@/pages/home';
import { useTeam } from './TeamContext'

interface PlayerListProps {
    players: PlayerType[];
    position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward';
}

const PlayerList: React.FC<PlayerListProps> = ({ players, position }) => {
    const { addPlayer } = useTeam();
    
    const availablePlayers = players.filter(player => player.position === position);

    return (
        <div className="player-list">
            <h3>Available {position}s</h3>
            {availablePlayers.map(player => (
                <div key={player.id} className="player" onClick={() => addPlayer(player)}>
                    <p>{player.name}</p>
                    <p>{player.transferValue}M</p>
                </div>
            ))}
        </div>
    );
};

export default PlayerList;