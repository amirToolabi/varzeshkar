import React from 'react'
import Papular from './Papular';
import Seen from './Seen';
import Pool from './Pool'

import SlideShow from './SlideShow';
import Getapp from './Getapp';
import Football from './Football';
import Lists from '../Lists';


const Home = () => {
    return ( 
        <>
            <div className="homeandlist">
            <Lists/>
            <div className="homecontainer">
                <SlideShow/>
                <Papular/>
                <Seen/>
                <Pool/>
                <Getapp/>
                <Football/>
            </div>
            </div>
        </>
     );
}
 
export default Home;