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
    const [players, setPlayers] = useState<PlayerData[]>([]);
    const totalCost = players.reduce((sum, player) => sum + player.transferValue, 0);

    const addPlayer = (player: PlayerData) => {
        if (totalCost + player.transferValue <=100) {
            setPlayers((prevPlayers) => [...prevPlayers, player])
        } else {
            alert('Total cost exceeds 100 mollion')
        }
        // setPlayers((prevPlayers) => [...prevPlayers, player]);
    };

    const removePlayer = (playerId: number) => {
        setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== playerId));
    };

    return (
        <TeamContext.Provider value={{ players, totalCost, addPlayer, removePlayer }}>
            {children}
        </TeamContext.Provider>
    );
};