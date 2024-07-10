import React from 'react';
import { PlayerData as PlayerType } from '@/pages/home';
import { useTeam } from './TeamContext'

interface PlayerProps {
    player: PlayerType;
}

export const Player: React.FC<PlayerProps> = ({ player }) => {
    const { removePlayer } = useTeam();

    return (
        <div className="player" onClick={() => removePlayer(player.id)}>
            <p>{player.name}</p>
            <p>{player.transferValue}M</p>
        </div>
    );
};

export default Player;