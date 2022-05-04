import React, { useState } from 'react';
import styles from './PokerPlayer.module.css'

export default function PokerPlayer(props: iPokerPlayer) {
    return (
        <div>
            {props.hand}
        </div>
    )
}

interface iPokerPlayer{
    hand: JSX.Element,
    position: string,
}