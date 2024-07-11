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
  players: (PlayerData | null)[];
  totalCost: number;
  addPlayer: (player: PlayerData, index: number) => void;
  removePlayer: (playerId: number) => void;
  selectedPlayers: PlayerData[];
  isPositionFilled: (index: number) => boolean;
}

const Home: React.FC = () => {
  const [players] = useState<PlayerData[]>([
    { id: 1, name: 'Goalkeeper 1', position: 'goalkeeper', transferValue: 10 },
    { id: 2, name: 'Defender 1', position: 'defender', transferValue: 20 },
    { id: 3, name: 'Defender 2', position: 'defender', transferValue: 25 },
    { id: 4, name: 'Defender 3', position: 'defender', transferValue: 18 },
    { id: 5, name: 'Defender 4', position: 'defender', transferValue: 22 },
    { id: 6, name: 'Midfielder 1', position: 'midfielder', transferValue: 30 },
    { id: 7, name: 'Midfielder 2', position: 'midfielder', transferValue: 28 },
    { id: 8, name: 'Midfielder 3', position: 'midfielder', transferValue: 35 },
    { id: 9, name: 'Forward 1', position: 'forward', transferValue: 40 },
    { id: 10, name: 'Forward 2', position: 'forward', transferValue: 38 },
    { id: 11, name: 'Forward 3', position: 'forward', transferValue: 45 },
    { id: 12, name: 'Goalkeeper 2', position: 'goalkeeper', transferValue: 15 },
    { id: 13, name: 'Defender 5', position: 'defender', transferValue: 19 },
    { id: 14, name: 'Midfielder 4', position: 'midfielder', transferValue: 27 },
    { id: 15, name: 'Forward 4', position: 'forward', transferValue: 36 },
]);

const [selectedPosition, setSelectedPosition] = useState<string>('');
const [selectedIndex, setSelectedIndex] = useState<number>(-1);

const selectPosition = (index: number, position: string) => {
  setSelectedPosition(position);
  setSelectedIndex(index);
};
return (
    <TeamProvider>
        <div className="app container mx-auto p-4">
            <TeamCost />
            <div className="flex space-x-4 h-screen">
                <div className="w-4/5">
                    <FootballField selectPosition={selectPosition} />
                </div>
                <div className="w-1/5 h-full flex items-start">
                    <PlayerList players={players} selectedPosition={selectedPosition} selectedIndex={selectedIndex} />
                </div>
            </div>
        </div>
    </TeamProvider>
);
};

export default Home;

function isPositionFilled(index: number) {
  throw new Error('Function not implemented.');
}
