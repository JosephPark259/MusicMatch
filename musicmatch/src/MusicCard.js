import React, { useState, useEffect } from 'react';
import './MusicCards.css';
import axios from './axios.js';


import { useSelector, useDispatch} from 'react-redux';
import TinderCard from 'react-tinder-card';
import {increment, decrement,lengthset,reset, genreLength} from './action/index.js';

function MusicCard() {
    const [music,setMusic] = useState([[]]);
    const [cardIdx,setCardIdx] = useState(0);
    const idx = useSelector(state => state.idx);
    const genreListLength = useSelector(state => state.genreLength);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/musicmatch/card");
            dispatch(genreLength(req.data.length-1));
            setMusic(req.data);
            
        }

        fetchData();
    }, []);

    const swiped = (direction,nameToDelete) => {

        if(direction === 'right'){
            if(idx < music.length-1){         

                setCardIdx(idx);
                dispatch(increment());
                
            } else {

                setCardIdx(idx);
                dispatch(reset(0));
                
            }
        }
        if(direction === "left"){
            if (idx === 0) {

                setCardIdx(idx);
                dispatch(lengthset(music.length-1));
            } else {
 
                setCardIdx(idx);
                dispatch(decrement());
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
                     key={music[idx].name}
                     preventSwipe={['up','down']}
                     onSwipe={(dir)=>swiped(dir,music[idx])}
                     onCardLeftScreen={()=>outOfFrame(music[idx].name)}>
                        <div
                         style={{
                             backgroundImage:`url(${music[idx].imgUrl})`
                         }}
                         className='card'>
                             <h3>{music[idx].name}</h3>
                        </div>
                        
                    </TinderCard>

            </div> 
            
        </div>
    )
}

export default MusicCard
