import React from 'react';
import { useTeam } from './TeamContext';


const TeamCost: React.FC = () => {
    const { totalCost } = useTeam();
    return (
        <div className="team-cost p-4 border border-gray-200 rounded mb-4">
            <h3 className="text-lg font-bold">Total Cost: {totalCost}M</h3>
        </div>
    );
};

export default TeamCost;