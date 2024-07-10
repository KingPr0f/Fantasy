import React from 'react';
import { useTeam } from './TeamContext';
import Player from './Player';

const FootballField: React.FC = () => {
    const { players } = useTeam();
    
    // Функция для рендеринга игроков по позициям
    const renderPlayers = (position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward') => {
        return players.filter(player => player.position === position).map(player => (
            <Player key={player.id} player={player} />
        ));
    };

    return (
        <div className="football-field">
            <div className="goalkeeper">{renderPlayers('goalkeeper')}</div>
            <div className="defenders">{renderPlayers('defender')}</div>
            <div className="midfielders">{renderPlayers('midfielder')}</div>
            <div className="forwards">{renderPlayers('forward')}</div>
        </div>
    );
};

export default FootballField;