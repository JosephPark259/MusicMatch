import React, { useState, useEffect } from 'react';
import './MusicCards.css';
import axios from './axios.js';

import TinderCard from 'react-tinder-card';

function MusicCard() {
    const [music,setMusic] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/musicmatch/card");

            setMusic(req.data);
        }

        fetchData();
    }, []);

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
                             backgroundImage:`url(${music.imgUrl})`
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
