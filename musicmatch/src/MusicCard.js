import React, { useState, useEffect } from 'react';
import './MusicCards.css';
import axios from './axios.js';

import TinderCard from 'react-tinder-card';

function MusicCard() {
    const [music,setMusic] = useState([[]]);
    const [cardIdx,setCardIdx] = useState(0);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/musicmatch/card");

            setMusic(req.data);
        }

        fetchData();
    }, []);

    const swiped = (direction,nameToDelete) => {
        var index = cardIdx;
        if(direction === 'right'){
            if(cardIdx < music.length-1){         
                index += 1;
                setCardIdx(index);
                
            } else {
                index = 0;
                setCardIdx(index);
            }
        }
        if(direction === "left"){
            if (cardIdx === 0) {
                index = music.length-1;
                setCardIdx(index);
            } else {
                index -= 1;
                setCardIdx(index);
            }
        }
        
        //setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + 'Left screen');
    }

    return (
        <div className='music-cards'>
            <div className='musicCards__cardContainer'>

                    <TinderCard
                     className='swipe'
                     key={music[cardIdx].name}
                     preventSwipe={['up','down']}
                     onSwipe={(dir)=>swiped(dir,music[cardIdx])}
                     onCardLeftScreen={()=>outOfFrame(music[cardIdx].name)}>
                        <div
                         style={{
                             backgroundImage:`url(${music[cardIdx].imgUrl})`
                         }}
                         className='card'>
                             <h3>{music[cardIdx].name}</h3>
                        </div>
                        
                    </TinderCard>

            </div> 
            
        </div>
    )
}

export default MusicCard
