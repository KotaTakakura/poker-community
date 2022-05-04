import React, { useState } from 'react';
import styles from './Card.module.css'
import CardImage from "../card_image/card_image";
import CardSelector from "../card_selector/card_selector";

export default function Card(props: iCard) {
    const [selected_card_number,setSelectedCardNumber] = useState(props.number)
    const [selected_card_suit,setSelectedCardSuit] = useState(props.suit)

    const changeCard = (new_card: any) => {
        if(props.change_card === null) {
            return;
        }
        props.change_card({number: selected_card_number, suit: selected_card_suit},new_card)
        setSelectedCardNumber(new_card.number)
        setSelectedCardSuit(new_card.suit)
    }
    return (
        <>
            <CardImage number={selected_card_number} suit={selected_card_suit} notify_click={null}></CardImage>
            <CardSelector rest_of_cards={props.rest_of_cards} change_card={changeCard}></CardSelector>
        </>
    )
}

interface iCard{
    number: string | null,
    suit: string | null,
    rest_of_cards: any,
    change_card: (prev_card: any, new_card: any) => void | null
}