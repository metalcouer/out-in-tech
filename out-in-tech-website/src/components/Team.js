import React, { useState } from 'react';
import Events from './Events'


function Team() {
  const [toggle, setToggle] = useState(false)
  function toggleMe() { 
    setToggle(!toggle)
    console.log(setToggle)
    } 
  const [team, setTeam] = useState(
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
      <div className="teamCard" onClick={() => toggleMe()}>
        {
          team.board.map(item => 
            { if (toggle === false) {
            <div>
            <div key={item.id}>
              <h4>{item.name}</h4>
              <img className="boardImage" alt="team pic" src={`${item.photo}`}>
              </img>
            </div>
          } else {
            <div>
              {item.bio}
            </div>
          }
          }
            </div>
            }
          )
            }
      </div>
    </div>
  );

}

export default Team;