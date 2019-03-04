import * as React from './react'

export default function(props) {
    return(
        <div className='top-bar'>
            <div className='level-title-score'>
                <span>Level {props.level}</span>
                <span>Title</span>
                <span>Score {props.score}</span>
            </div>
            <div className='progress-bar'></div>
        </div>

    )
}