import React, { useState } from 'react';
import './MusicCards.css';

import TinderCard from 'react-tinder-card';

function MusicCard() {
    const [music,setMusic] = useState([
        {
            name: 'Rock',
            url: 'https://images-na.ssl-images-amazon.com/images/I/8158TsXvQ%2BL._AC_SX466_.jpg',
        },
        {
            name: 'Classic',
            url: 'https://thumbs.dreamstime.com/x/classical-music-15401762.jpg',
        },
    ]);

    const swiped = (direction,nameToDelete) => {
        console.log("removing" + nameToDelete);
        //setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + 'Left screen');
    }

    return (
        <div className='music-cards'>
            <div className='musicCards__cardContainer'>
            {
                music.map((music) => (
                    <TinderCard
                     className='swipe'
                     key={music.name}
                     preventSwipe={['up','down']}
                     onSwipe={(dir)=>swiped(dir,music.name)}
                     onCardLeftScreen={()=>outOfFrame(music.name)}>
                        <div
                         style={{
                             backgroundImage:`url(${music.url})`
                         }}
                         className='card'>
                             <h3>{music.name}</h3>
                        </div>
                    </TinderCard>
                ))
            }
            </div> 
            
        </div>
    )
}

export default MusicCard
