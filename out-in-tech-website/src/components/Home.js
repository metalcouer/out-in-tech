import React from 'react';
import Events from './Events'
import Team from './Team'
// import computer from '../public/Computer-gif-01.gif'



function Home() {
  return (
    <div>
      {/* <div className="row">
        <div className="rainbow col-lg-1">
          <div className="redLine"></div>
          <div className="orangeLine"></div>
          <div className="yellowLine"></div>
          <div className="greenLine"></div>
          <div className="blueLine"></div>
          <div className="indigoLine"></div>
          <div className="violetLine"></div>
        </div>
      </div> */}
      <div className="home">
        <div className="homeHeader">Out in Tech: Mile High Denver</div>
        <img className="computerGif" src={process.env.PUBLIC_URL + '/Computer-gif-01.gif'} alt="loading..."></img>
        <div className="homeInfo">Our Misison:
      <p>To bring queers into the know of who's who and what's what when it comes to the tech environment around Denver Proper.</p>
        </div>
        <Events />
        <Team />
      </div>
    </div >
  );
}

export default Home;
