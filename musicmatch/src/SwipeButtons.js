import React, { useState, useEffect } from 'react'
import './SwipeButtons.css'

import StarIcon from '@material-ui/icons/Star';
import ReplayIcon from '@material-ui/icons/Replay';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import { useSelector, useDispatch} from 'react-redux';
import {increment, decrement,lengthset,reset,genreLength} from './action/index.js';

//undo X star heart electric
function SwipeButtons() {
    const idx = useSelector(state => state.idx);
    const dispatch = useDispatch();
    const genreListLength = useSelector(state => state.genreLength);

    const decIdx = () => {
        if (idx == 0) {
            dispatch(lengthset(genreListLength))
        } else {
            dispatch(decrement());
        }
    }
    const incIdx = () => {
        console.log(genreListLength)
        if (idx == genreListLength) {
            dispatch(reset(0))
        } else {
            dispatch(increment());
        }
    }
    
    return (
        <div className='footer'>
            <IconButton className='icon-button'>
                <ReplayIcon 
                 className='icon-back'
                 ></ReplayIcon>
            </IconButton>
            <IconButton 
            className='icon-button'
            onClick={()=>decIdx()}>
                <CloseIcon 
                 className='icon-reject'
                 ></CloseIcon>
            </IconButton>
            <IconButton className='icon-button'>
                <StarIcon 
                 className='icon-star'
                 />
            </IconButton>
            <IconButton className='icon-button'>
                <FavoriteIcon 
                 className='icon-fav'
                 onClick={()=>incIdx()}
                 ></FavoriteIcon>
            </IconButton>
            <IconButton className='icon-button'>
                <FlashOnIcon 
                 className='icon-flash'
                 ></FlashOnIcon>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
