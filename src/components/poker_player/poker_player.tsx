import React, { useState } from 'react';
import styles from './PokerPlayer.module.css'
import Hand from "../hand/hand";

export default function PokerPlayer(props: iPokerPlayer) {
    const change_card = (clicked_card: string, prev_card: {number: string, suit: string}) => {
        props.change_card(props.position, clicked_card, prev_card)
    }
    return (
        <div>
            <Hand first_card={{number: props.first_card.number, suit: props.first_card.suit}} second_card={{number: props.second_card.number, suit: props.second_card.suit}} change_card={change_card}></Hand>
        </div>
    )
}

interface iPokerPlayer{
    first_card: {number: string|null, suit: string|null},
    second_card: {number: string|null, suit: string|null},
    position: string,
    change_card: (position: string, clicked_card: string, prev_card: {number: string, suit: string}) => void,
}
