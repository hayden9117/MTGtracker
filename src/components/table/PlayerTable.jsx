import React, { useState } from 'react';
import './PlayerTable.css';

const PlayerTable = ({ players }) => {
  const [selectedPlayerInfo, setSelectedPlayerInfo] = useState({});

  const handlePlayerSelect = (event, playerName) => {
    const selectedInfo = event.target.value;
    setSelectedPlayerInfo({ ...selectedPlayerInfo, [playerName]: selectedInfo });
  };

  return (
    <div>
      <table className="player-table">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Additional Information</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>
                <select
                  value={selectedPlayerInfo[player.name] || ''}
                  onChange={(e) => handlePlayerSelect(e, player.name)}
                >
                  <option value="">Select Information</option>
                  {player.info.map((info, infoIndex) => (
                    <option key={infoIndex} value={info}>
                      {info}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;