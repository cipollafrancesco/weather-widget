// @flow
import React from 'react'
import './FlipCard.css'

const FlipCard = props => {
    return (
        <div className="flip-card">
            <div className="flip-card-face flip-card-face_front">{props.frontComponent}</div>
            <div className="flip-card-face flip-card-face_back">{props.backComponent}</div>
        </div>
    )
}

export default FlipCard
