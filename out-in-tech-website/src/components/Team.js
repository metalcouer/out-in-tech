import React, { useState } from 'react';
import Events from './Events'


function Team() {
  const [state, setState] = useState(
    {
      board:
        [
          {
            name: 'Joey Marrone',
            photo: '',
            bio: ''
          },
          {
            name: 'Breana Knight',
            photo: '',
            bio: ''
          },
          {
            name: 'Diane Sanchez',
            photo: '',
            bio: ''
          },
          {
            name: 'Michael Stapleton',
            photo: '',
            bio: ''
          },
          {
            name: 'Julie West',
            photo: '',
            bio: ''
          }
        ]
    });

  return (
    <div className="Team">
      {
        state.board.map(item =>
          <div key={item.id}>
            <h4>{item.name}</h4>
          </div>
        )
      }
    </div>
  );

}

export default Team;