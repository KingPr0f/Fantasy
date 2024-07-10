import React from 'react';
import { PlayerData } from '@/pages/home';
import { useTeam } from './TeamContext'

interface PlayerProps {
    player: PlayerData;
    index: number;
}

const Player: React.FC<PlayerProps> = ({ player }) => {
    return (
        <div className="player-info p-2">
            <p>{player.name}</p>
            <p>Value: {player.transferValue}M</p>
        </div>
    );
};
export default Player;