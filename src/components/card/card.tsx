import React, { useState } from 'react';
import styles from './Card.module.css'
import CardImage from "../card_image/card_image";

export default function Card(props: iCard) {
    const [selected_card_number,setSelectedCardNumber] = useState(props.number)
    const [selected_card_suit,setSelectedCardSuit] = useState(props.suit)

    const changeCard = () => {
        if(props.change_card === null) {
            return;
        }
        props.change_card({number: props.number, suit: props.suit})
    }
    return (
        <>
            <CardImage number={selected_card_number} suit={selected_card_suit} notify_click={changeCard}></CardImage>
        </>
    )
}

interface iCard{
    number?: string,
    suit?: string,
    change_card?: (prev_card: {number: string, suit: string}) => void
}