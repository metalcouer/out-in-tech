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
      <div className="homeHeader">Out in Tech</div>
      <div className="home row">
        <div className="homeInfo col-lg-5">
          Hey Denver!
          {/* To bring queers into the know of who's who and what's what when it comes to the tech environment around Denver Proper. */}
        </div>
        <img className="computerGif col-lg-7" src={process.env.PUBLIC_URL + '/Computer-gif-01.gif'} alt="loading..."></img>
      </div>

      <Events />
      <Team />
    </div >
  );
}

export default Home;
