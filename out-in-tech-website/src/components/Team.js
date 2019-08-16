import React, { useState } from 'react';
import Events from './Events'


function Team() {
  const [state, setState] = useState(
    {
      board:
        [
          {
            name: 'Joey Marrone',
            photo: './placeholder.png',
            bio: ''
          },
          {
            name: 'Breana Knight',
            photo: './placeholder.png',
            bio: ''
          },
          {
            name: 'Diane Sanchez',
            photo: './placeholder.png',
            bio: ''
          },
          {
            name: 'Michael Stapleton',
            photo: './placeholder.png',
            bio: ''
          },
          {
            name: 'Julie West',
            photo: './placeholder.png',
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