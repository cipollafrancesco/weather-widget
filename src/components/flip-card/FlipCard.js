// @flow
import './FlipCard.css'
import React, {useState} from 'react'

interface IFlipCardProps {
}

const FlipCard = (props: IFlipCardProps) => {

    // I THINK CLICK HANDLING SHOULD BE BETTER THAN HOVER EFFECT (UX)
    const [isFlipped, setFlipped] = useState<boolean>(false)

    // TOGGLE FLIP CARD STATE
    const toggleFlipCardState = _ => setFlipped(!isFlipped)

    return (
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={toggleFlipCardState}>
            <div className="flip-card-face flip-card-face_front">{props.frontComponent}</div>
            <div className="flip-card-face flip-card-face_back">{props.backComponent}</div>
        </div>
    )
}

export default FlipCard
