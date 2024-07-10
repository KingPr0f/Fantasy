import React from 'react';
import { useUserAuth } from '@/context/UserAuthContext';
import { User } from 'firebase/auth';
import { useState } from 'react';
import { TeamProvider } from '@/components/FootballCore/TeamContext';
import FootballField from '@/components/FootballCore/FootballField';
import PlayerList from '@/components/FootballCore/PlayerList';
import TeamCost from '@/components/FootballCore/TeamCost';


// Типизация для состояния пользователя
interface UserState {
  user: User | null;
  logOut: () => void;
}

export interface PlayerData {
  id: number;
  name: string;
  position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward';
  transferValue: number;
}

export interface TeamContextData {
  players: PlayerData[];
  totalCost: number;
  addPlayer: (player: PlayerData) => void;
  removePlayer: (playerId: number) => void;
}

const Home: React.FC = () => {
  const [players] = useState<PlayerData[]>([
    { id: 1, name: 'Player 1', position: 'goalkeeper', transferValue: 10 },
    { id: 2, name: 'Player 2', position: 'defender', transferValue: 20 },
    { id: 3, name: 'Player 3', position: 'midfielder', transferValue: 30 },
    { id: 4, name: 'Player 4', position: 'forward', transferValue: 40 },
    // Добавьте больше игроков
]);

return (
    <TeamProvider>
        <div className="app">
            <TeamCost />
            <FootballField />
            <PlayerList players={players} position="goalkeeper" />
            <PlayerList players={players} position="defender" />
            <PlayerList players={players} position="midfielder" />
            <PlayerList players={players} position="forward" />
        </div>
    </TeamProvider>
)
};

export default Home;