import React from 'react';
import { useTeam } from './TeamContext';
import Player from './Player';
import { PlayerData } from '@/pages/home';


interface FootballFieldProps {
    selectPosition: (index: number, position: string) => void;
}

const FootballField: React.FC<FootballFieldProps> = ({ selectPosition }) => {
    const { players, isPositionFilled, removePlayer } = useTeam();

    const renderPosition = (position: string, count: number) => {
        const positions = Array(count).fill(null);
        return positions.map((_, idx) => {
            const playerIndex = position === 'goalkeeper' ? idx : position === 'defender' ? idx + 1 : position === 'midfielder' ? idx + 5 : idx + 8;
            return (
                <div
                    key={playerIndex}
                    className={`position border border-dashed border-gray-300 h-20 flex items-center justify-center cursor-pointer ${isPositionFilled(playerIndex) ? 'cursor-not-allowed' : ''}`}
                    onClick={() => !isPositionFilled(playerIndex) && selectPosition(playerIndex, position)}
                >
                    {players[playerIndex] ? (
                        <div className="relative">
                            <Player player={players[playerIndex] as PlayerData} index={playerIndex} />
                            <button
                                className="absolute top-0 right-0 text-xs p-1 bg-red-500 text-white rounded-full"
                                onClick={(e) => {
                                    e.stopPropagation(); // Stop event propagation to prevent position selection
                                    removePlayer(playerIndex);
                                }}
                            >
                                X
                            </button>
                        </div>
                    ) : (
                        <span>{position}</span>
                    )}
                </div>
            );
        });
    };

    return (
        <div className="football-field h-full grid grid-cols-4 gap-4 p-4">
            <div className="col-span-4">{renderPosition('goalkeeper', 1)}</div>
            <div className="col-span-4 grid grid-cols-4 gap-4">{renderPosition('defender', 4)}</div>
            <div className="col-span-4 grid grid-cols-3 gap-4">{renderPosition('midfielder', 3)}</div>
            <div className="col-span-4 grid grid-cols-3 gap-4">{renderPosition('forward', 3)}</div>
        </div>
    );
};

export default FootballField;