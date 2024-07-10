import React, { createContext, useState, useContext, ReactNode } from 'react';
import { TeamContextData, PlayerData } from '../../pages/home';


// Создадим контекст
const TeamContext = createContext<TeamContextData | undefined>(undefined);

export const useTeam = () => {
    const context = useContext(TeamContext);
    if (!context) {
        throw new Error('useTeam must be used within a TeamProvider');
    }
    return context;
};

export const TeamProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [players, setPlayers] = useState<(PlayerData | null)[]>(Array(11).fill(null));
    const [selectedPlayers, setSelectedPlayers] = useState<PlayerData[]>([]);

    const totalCost = selectedPlayers.reduce((sum, player) => sum + player.transferValue, 0);

    const addPlayer = (player: PlayerData, index: number) => {
        if (totalCost + player.transferValue > 100) {
            alert('Total cost exceeds the 100 million limit!');
            return;
        }
        setPlayers((prevPlayers) => {
            const newPlayers = [...prevPlayers];
            newPlayers[index] = player;
            return newPlayers;
        });
        setSelectedPlayers((prevSelected) => [...prevSelected, player]);
    };

    const removePlayer = (index: number) => {
        setPlayers((prevPlayers) => {
            const newPlayers = [...prevPlayers];
            const removedPlayer = newPlayers[index];
            newPlayers[index] = null;
            if (removedPlayer) {
                setSelectedPlayers((prevSelected) => prevSelected.filter((player) => player.id !== removedPlayer.id));
            }
            return newPlayers;
        });
    };

    const isPositionFilled = (index: number) => players[index] !== null;

    return (
        <TeamContext.Provider value={{ players, totalCost, addPlayer, removePlayer, selectedPlayers, isPositionFilled }}>
            {children}
        </TeamContext.Provider>
    );
};