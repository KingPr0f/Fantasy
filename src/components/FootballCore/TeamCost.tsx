import React from 'react';
import { useTeam } from './TeamContext';

export const TeamCost: React.FC = () => {
    const { totalCost } = useTeam();
        return (
            <div>
                <p>Total Cost: {totalCost}M</p>
            </div>
        )
    };
    
    export default TeamCost;

