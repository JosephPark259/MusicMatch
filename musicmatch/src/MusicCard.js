import React, { useState, useEffect } from 'react';
import './MusicCards.css';
import axiosBase from './axios.js';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { useSelector, useDispatch} from 'react-redux';
import TinderCard from 'react-tinder-card';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {increment, decrement,lengthset,reset, genreLength} from './action/index.js';

function MusicCard() {
    const [music,setMusic] = useState([[]]);
    const [cardIdx,setCardIdx] = useState(0);
    const [popUp,setPopUp] = useState(false);
    const [youtubeLink,setYoutubeLink] = useState('');
    const [rendered,setRendered] = useState(false);
    const idx = useSelector(state => state.idx);
    const genreListLength = useSelector(state => state.genreLength);
    const dispatch = useDispatch();


    useEffect(() => {
        async function fetchData() {
            const req = await axiosBase.get(`/musicmatch/card`);
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
                async function goToWeb() {
                    const req = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${music[idx].name}&key=${REACT_APP_YOUTUBE_API}`);
                    setYoutubeLink(req.data.items[0]);
                    setRendered(true);
                    console.log(req.data.items[0])
                }
                goToWeb();
                
                setPopUp(true);
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
    function renderVideoDescription() {
        if (rendered){
            return (
                <div className='youtube-container'>
                    <div className='youtube-title'>
                    <h3>
                        {youtubeLink.snippet.title}

                    </h3>
                    </div>
                    <div className='youtube-thumbnail'>
                    <img src={youtubeLink.snippet.thumbnails.default.url}/>
                    </div>
                </div>
            );
        } else {
            return (
                <h1> Loading ... </h1>
            )
        }
    }
    const popUpFalse = () => {
        setPopUp(false);
    }

    const goToSite = () => {
        
            window.open(`https://www.youtube.com/watch?v=${youtubeLink.id.videoId}`);
        
    }

    const outOfFrame = (name) => {
        console.log(name + 'Left screen');
    }
    if(!popUp){
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
    } else {
        return(
            <div className='music-cards'>
                <div className='musicCards__cardContainer'>
                    <Paper
                    className='paper'
                    elevation={3}>
                        <div className="title">
                        {renderVideoDescription()}
                        </div>
                        <div className="button">
                            <Button 
                            variant="contained" 
                            color="primary"
                            onClick={()=>goToSite()}
                            >Listen!</Button>
                            
                            <Button variant="contained" 
                            color="secondary"
                            onClick={()=>popUpFalse()}>
                                Pass</Button>
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default MusicCard
