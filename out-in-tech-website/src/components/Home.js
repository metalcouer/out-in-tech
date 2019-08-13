import React from 'react';
import Events from './Events'
import Team from './Team'



function Home() {
  return (
    <div className="Home">
      <div>Out in Tech: Mile High Denver</div>
      <div>Our Misison:</div>
      <p>To bring queers into the know of who's who and what's what when it comes to the tech environment around Denver Proper.</p>
      <Events />
      <Team />
    </div>
  );
}

export default Home;
