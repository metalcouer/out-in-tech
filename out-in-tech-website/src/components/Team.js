import React, { useState } from 'react';
import Events from './Events'


function Team() {
  const [state, setState] = useState(
    {
      board:
        [
          {
            name: 'Lee Knight',
            photo: './lee.png',
            bio: ''
          },
          {
            name: 'Diane Sanchez',
            photo: './diane.png',
            bio: ''
          },
          {
            name: 'Michael Stapleton',
            photo: './michael.png',
            bio: ''
          },
          {
            name: 'Julie West',
            photo: './julie.png',
            bio: ''
          }
        ]
    });

  return (
    <div className="TeamWrapper">
      <div>Denver Chapter Board</div>
      <div className="teamCard">
        {
          state.board.map(item =>
            <div key={item.id}>
              <h4>{item.name}</h4>
              <img className="boardImage" src={`${item.photo}`}></img>
            </div>
          )
        }
      </div>
    </div>
  );

}

export default Team;