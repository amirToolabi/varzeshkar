import React from "react";

import { useSelector } from "react-redux";

import Papular from "./Papular";
import Seen from "./Seen";
import Pool from "./Pool";

import SlideShow from "./SlideShow";
import Getapp from "./Getapp";
import Football from "./Football";
import Lists from "../Lists";
import ListsTwo from "./ListsTwo";
import Shadow from "./Shadow";

const Home = () => {

    const comelist = useSelector((state)=> state );

  return (
    <>
      <div className="homeandlist">
          <Lists />
          {comelist? <ListsTwo /> : null}
          {comelist? <Shadow/> : null}
          
        
        <div className="homecontainer">
          <SlideShow />
          <Papular />
          <Seen />
          <Pool />
          <Getapp />
          <Football />
        </div>
      </div>
    </>
  );
};

export default Home;
