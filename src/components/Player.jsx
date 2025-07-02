import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function ToggleButton() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  return (
    <li className={isActive ? 'active' : ''}>
      <span className='player'>
        {!isEditing ? (
          <span className='player-name'>{playerName}</span>
        ) : (
          <input
            type='text'
            required
            defaultValue={playerName}
            onChange={handleChange}
          />
        )}
        <span className='player-symbol'>{symbol}</span>
        <button onClick={ToggleButton}>{isEditing ? 'Save' : 'Edit'}</button>
      </span>
    </li>
  );
}
