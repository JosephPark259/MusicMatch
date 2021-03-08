import React from 'react'
import './SwipeButtons.css'

import StarIcon from '@material-ui/icons/Star';
import ReplayIcon from '@material-ui/icons/Replay';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';



//undo X star heart electric
function SwipeButtons() {
    
    return (
        <div className='footer'>
            <IconButton className='icon-button'>
                <ReplayIcon className='icon-back'></ReplayIcon>
            </IconButton>
            <IconButton className='icon-button'>
                <CloseIcon className='icon-reject'></CloseIcon>
            </IconButton>
            <IconButton className='icon-button'>
                <StarIcon className='icon-star'/>
            </IconButton>
            <IconButton className='icon-button'>
                <FavoriteIcon className='icon-fav'></FavoriteIcon>
            </IconButton>
            <IconButton className='icon-button'>
                <FlashOnIcon className='icon-flash'></FlashOnIcon>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
